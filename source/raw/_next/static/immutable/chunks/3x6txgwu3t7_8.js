;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="f5ed4b28-7eb2-956e-402b-e8f6f95e6731")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,481809,e=>{"use strict";var t=e.i(541130),r=e.i(856757),n=e.i(992766);try{var a="u">typeof window?window:e.g;a._sentryModuleMetadata=a._sentryModuleMetadata||{},a._sentryModuleMetadata[(new a.Error).stack]=Object.assign({},a._sentryModuleMetadata[(new a.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}function i(){return false}function o(e){return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(?=[/?#]|$)`)}function l(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e:`/${e}`}function s(e){(0,r.useEffect)(()=>{var t;e.beforeSend&&(null==(t=window.si)||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]);let n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(!n.current){let r=function(e={},t){var r;if(!("u">typeof window)||null===e.route)return null;window.si||(window.si=function(...e){window.siq=window.siq||[],window.siq.push(e)});let{beforeSend:n,src:a,dataset:o}=function(e,t){var r,n;let a=e;if(t)try{a={...null==(r=JSON.parse(t))?void 0:r.speedInsights,...e}}catch{}let o={sdkn:"@vercel/speed-insights"+(a.framework?`/${a.framework}`:""),sdkv:"2.0.0"};return a.sampleRate&&(o.sampleRate=a.sampleRate.toString()),a.route&&(o.route=a.route),i()&&!1===a.debug&&(o.debug="false"),a.dsn&&(o.dsn=a.dsn),a.endpoint?o.endpoint=l(a.endpoint):a.basePath&&(o.endpoint=l(`${a.basePath}/speed-insights/vitals`)),{src:(n=a).scriptSrc?l(n.scriptSrc):i()?"https://va.vercel-scripts.com/v1/speed-insights/script.debug.js":n.dsn?"https://va.vercel-scripts.com/v1/speed-insights/script.js":n.basePath?l(`${n.basePath}/speed-insights/script.js`):"/_vercel/speed-insights/script.js",beforeSend:a.beforeSend,dataset:o}}(e,t);if(document.head.querySelector(`script[src*="${a}"]`))return null;n&&(null==(r=window.si)||r.call(window,"beforeSend",n));let s=document.createElement("script");for(let[e,t]of(s.src=a,s.defer=!0,Object.entries(o)))s.dataset[e]=t;return s.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${a}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(s),{setRoute:e=>{s.dataset.route=e??void 0}}}({framework:e.framework??"react",basePath:e.basePath??function(){if(void 0!==t.default&&void 0!==t.default.env)return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}(),...e},e.configString??function(){if(void 0!==t.default&&void 0!==t.default.env)return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG}());r&&(n.current=r.setRoute)}},[e]),(0,r.useEffect)(()=>{n.current&&e.route&&n.current(e.route)},[e.route]),null}function c(e){let a=(()=>{let e=(0,n.useParams)(),t=(0,n.useSearchParams)()||new URLSearchParams,r=(0,n.usePathname)();if(!e)return null;let a=Object.keys(e).length?e:Object.fromEntries(t.entries());if(!r||!a)return r;let i=r;try{let e=Object.entries(a);for(let[t,r]of e)if(!Array.isArray(r)){let e=o(r);e.test(i)&&(i=i.replace(e,`/[${t}]`))}for(let[t,r]of e)if(Array.isArray(r)){let e=o(r.join("/"));e.test(i)&&(i=i.replace(e,`/[...${t}]`))}return i}catch{return r}})();return r.default.createElement(s,{route:a,...e,framework:"next",basePath:function(){if(void 0!==t.default&&void 0!==t.default.env)return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH}(),configString:function(){if(void 0!==t.default&&void 0!==t.default.env)return'{"analytics":{"scriptSrc":"58c58adbe1e5877c/script.js","viewEndpoint":"58c58adbe1e5877c/view","eventEndpoint":"58c58adbe1e5877c/event","sessionEndpoint":"58c58adbe1e5877c/session"},"speedInsights":{"scriptSrc":"6fc02418cd5ea04e/script.js","endpoint":"6fc02418cd5ea04e/vitals"}}'}()})}e.s(["SpeedInsights",0,function(e){return r.default.createElement(r.Suspense,{fallback:null},r.default.createElement(c,{...e}))}])},827181,e=>{"use strict";var t=e.i(938231),r=e.i(68982);try{var n="u">typeof window?window:e.g;n._sentryModuleMetadata=n._sentryModuleMetadata||{},n._sentryModuleMetadata[(new n.Error).stack]=Object.assign({},n._sentryModuleMetadata[(new n.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}e.s(["default",0,function({locale:e,...n}){if(!e)throw Error(void 0);return(0,r.jsx)(t.IntlProvider,{locale:e,...n})}])},979527,e=>{"use strict";var t=e.i(164501),r=e.i(125821),n=e.i(988789);try{var a="u">typeof window?window:e.g;a._sentryModuleMetadata=a._sentryModuleMetadata||{},a._sentryModuleMetadata[(new a.Error).stack]=Object.assign({},a._sentryModuleMetadata[(new a.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let i=(0,t.o)("queue-reset",()=>({mutex:0}));function o(e=1){i.mutex=e}function l(){(0,n.t)(19),r.t.abortAll(),r.r.abort().forEach(e=>r.t.queuedQuerySync.emit(e))}try{var s="u">typeof window?window:e.g;s._sentryModuleMetadata=s._sentryModuleMetadata||{},s._sentryModuleMetadata[(new s.Error).stack]=Object.assign({},s._sentryModuleMetadata[(new s.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var c=e.i(856757),d=e.i(992766);try{var u="u">typeof window?window:e.g;u._sentryModuleMetadata=u._sentryModuleMetadata||{},u._sentryModuleMetadata[(new u.Error).stack]=Object.assign({},u._sentryModuleMetadata[(new u.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}function p(){o(0),l()}function h(){let e=(0,d.usePathname)(),n=(0,c.useRef)(e);return n.current!==e&&(n.current=e,r.r.reset()),(0,c.useEffect)(()=>(!function(){var e;if(e="next/app","u"<typeof history||(history.nuqs?.version&&"2.9.5"!==history.nuqs.version?(console.error((0,t.l)(409),history.nuqs.version,t.s,e),!0):!!history.nuqs?.adapters?.includes(e)))return;let r=history.replaceState,n=history.pushState;history.replaceState=function(e,t,n){return r.call(history,e,"__nuqs__"===t?"":t,n)},history.pushState=function(e,t,r){return"__nuqs__"!==t&&function(e=l){i.mutex=Math.max(0,i.mutex-1),i.mutex>0||e()}(()=>{queueMicrotask(l)}),n.call(history,e,"__nuqs__"===t?"":t,r)},history.nuqs=history.nuqs??{version:"2.9.5",adapters:[]},history.nuqs.adapters.push("next/app")}(),window.addEventListener("popstate",p),()=>window.removeEventListener("popstate",p)),[]),null}try{var m="u">typeof window?window:e.g;m._sentryModuleMetadata=m._sentryModuleMetadata||{},m._sentryModuleMetadata[(new m.Error).stack]=Object.assign({},m._sentryModuleMetadata[(new m.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let f=(0,t.n)(function(){let e=(0,d.useRouter)(),r=(0,d.usePathname)(),[a,i]=(0,c.useOptimistic)((0,d.useSearchParams)()??new URLSearchParams);return{searchParams:a,pathname:r,updateUrl:(0,c.useCallback)((r,a)=>{(0,c.startTransition)(()=>{a.shallow||i(r);let l=function(e){let{origin:r,pathname:n,hash:a}=location;return r+n+(0,t.c)(e)+a}(r);(0,n.t)(20,"next/app",l);let s="push"===a.history?history.pushState:history.replaceState;o(0),s.call(history,null,"__nuqs__",l),a.scroll&&window.scrollTo(0,0),a.shallow||e.replace(l,{scroll:!1})})},[]),rateLimitFactor:3,autoResetQueueOnUpdate:!1}});e.s(["NuqsAdapter",0,function({children:e,...t}){return(0,c.createElement)(f,{...t,children:[(0,c.createElement)(c.Suspense,{key:"nuqs-adapter-suspense-navspy",children:(0,c.createElement)(h)}),e]})}],979527)},868770,(e,t,r)=>{t.exports={name:"react-grab",version:"0.2.0",description:"Select context for coding agents directly from your website",keywords:["agent","context","grab","react","react-grab"],homepage:"https://react-grab.com",bugs:{url:"https://github.com/aidenybai/react-grab/issues"},license:"MIT",author:{name:"Aiden Bai",email:"aiden@million.dev"},repository:{type:"git",url:"git+https://github.com/aidenybai/react-grab.git"},bin:{"react-grab":"./bin/cli.js"},files:["bin","dist","package.json","README.md","LICENSE"],type:"module",main:"dist/index.js",module:"dist/index.js",browser:"dist/index.global.js",types:"dist/index.d.ts",exports:{"./package.json":"./package.json",".":{import:{types:"./dist/index.d.ts",default:"./dist/index.js"},require:{types:"./dist/index.d.cts",default:"./dist/index.cjs"}},"./core":{import:{types:"./dist/core/index.d.ts",default:"./dist/core/index.js"},require:{types:"./dist/core/index.d.cts",default:"./dist/core/index.cjs"}},"./primitives":{import:{types:"./dist/primitives.d.ts",default:"./dist/primitives.js"},require:{types:"./dist/primitives.d.cts",default:"./dist/primitives.cjs"}},"./styles.css":"./dist/styles.css","./dist/styles.css":"./dist/styles.css","./dist/*":"./dist/*.js","./dist/*.js":"./dist/*.js","./dist/*.cjs":"./dist/*.cjs"},publishConfig:{access:"public"},dependencies:{bippy:"^0.6.1","@react-grab/cli":"0.2.0"},devDependencies:{"@babel/core":"^7.29.0","@babel/preset-typescript":"^7.28.5","@jridgewell/trace-mapping":"^0.3.31","@playwright/test":"^1.59.1","@tailwindcss/cli":"^4.3.0","@types/babel__core":"^7.20.5","@types/node":"^25.6.2","@types/react":"^19.2.14","babel-preset-solid":"^1.9.12",concurrently:"^9.2.1","expect-sdk":"^0.1.2","solid-js":"^1.9.12",tailwindcss:"^4.3.0",tsx:"^4.21.0","vite-plus":"^0.1.20","@react-grab/playwright-coverage":"0.1.47"},peerDependencies:{react:">=17.0.0"},peerDependenciesMeta:{react:{optional:!0}},scripts:{"css:watch":"tailwindcss -i ./src/styles.css -o ./dist/styles.css -w",prebuild:"mkdir -p dist && tailwindcss -i ./src/styles.css -o ./dist/styles.css -m && tsx scripts/css-rem-to-px.ts",build:"NODE_ENV=production vp pack","build:e2e-development":"pnpm run prebuild && NODE_ENV=development REACT_GRAB_SOURCE_LOCATIONS=true vp pack --out-dir ../../apps/e2e-react-grab-development/dist","build:e2e-development:coverage":"pnpm run prebuild && NODE_ENV=production REACT_GRAB_SOURCE_LOCATIONS=true REACT_GRAB_NO_MINIFY=true REACT_GRAB_SOURCEMAP=true vp pack --out-dir ../../apps/e2e-react-grab-development/dist","build:demo":"IS_DEMO=true pnpm build","build:profiling":"pnpm run prebuild && NODE_ENV=profiling REACT_GRAB_NO_MINIFY=true REACT_GRAB_SOURCEMAP=true vp pack","build:coverage":"pnpm run prebuild && NODE_ENV=production REACT_GRAB_NO_MINIFY=true REACT_GRAB_SOURCEMAP=true vp pack",dev:'concurrently "pnpm:css:watch" "vp pack --watch"',test:"vp test run tests && playwright test --grep-invert @perf && E2E_ENVIRONMENT=vite-plus-development playwright test --grep @perf --workers=1","test:unit":"vp test run tests","pretest:coverage":"pnpm --filter @react-grab/playwright-coverage build","test:coverage":"COVERAGE=1 playwright test","test:perf":"playwright test --grep @perf --reporter=list","test:perf:animation":"playwright test e2e/perf-bench.spec.ts --grep animation-scheduling-controls --reporter=list","test:perf:idle":"playwright test e2e/perf-bench.spec.ts --grep idle-after-activation --reporter=list","test:perf:dom-breakpoints":"PERF_DOM_BREAKPOINTS=1 playwright test e2e/perf-bench.spec.ts --grep dom-rerender-during-selection --reporter=list","test:perf:trace":"PERF_TRACE=1 playwright test --grep @perf --reporter=list","test:perf:render":"PERF_RENDER_TRACE=1 playwright test --grep @perf --reporter=list","test:perf:full":"PERF_TRACE=1 PERF_RENDER_TRACE=1 playwright test --grep @perf --reporter=list && node scripts/deopt-trace.mjs && node scripts/analyze-perf-trace.mjs perf/${PERF_LABEL:-current}","perf:analyze":"node scripts/analyze-perf-trace.mjs","test:perf:baseline":"PERF_LABEL=baseline playwright test --grep @perf --reporter=list","test:expect":"bun e2e/react-grab.expect.ts",typecheck:"tsc --noEmit","test:e2e:ui":"playwright test --ui","perf:deopt":"node scripts/deopt-trace.mjs"}}},434556,e=>{"use strict";let t,r,n,a,i,o,l,s,c;var d,u,p,h,m,f,g,v,w,b,y,x=e.i(856757);try{var _="u">typeof window?window:e.g;_._sentryModuleMetadata=_._sentryModuleMetadata||{},_._sentryModuleMetadata[(new _.Error).stack]=Object.assign({},_._sentryModuleMetadata[(new _.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let k="bippy-0.5.43",N=Object.defineProperty,S=Object.prototype.hasOwnProperty,E=()=>{},M=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},C=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&"getFiberRoots"in e),T=!1,A,z=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!T||(e&&"function"==typeof e.inject&&(A=e.inject.toString()),!!A?.includes("(injected)")),$=new Set,R=new Set,O=e=>{e&&$.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=M,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=k,t._instrumentationIsActive=!1;let e=C(t);if(e||(t.on=E),t.renderers.size){t._instrumentationIsActive=!0,$.forEach(e=>e());return}let r=t.inject,n=z(t);n&&!e&&(T=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=e=>{let a=r(e);return R.add(e),n&&t.renderers.set(a,e),t._instrumentationIsActive=!0,$.forEach(e=>e()),a}}(t.renderers.size||t._instrumentationIsActive||z())&&e?.()}catch{}},j=e=>S.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__")?(O(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):(e=>{let t=new Map,r=0,n={_instrumentationIsActive:!1,_instrumentationSource:k,checkDCE:M,hasUnsupportedRendererAttached:!1,inject(e){let a=++r;return t.set(a,e),R.add(e),n._instrumentationIsActive||(n._instrumentationIsActive=!0,$.forEach(e=>e())),a},on:E,onCommitFiberRoot:E,onCommitFiberUnmount:E,onPostCommitFiberRoot:E,renderers:t,supportsFiber:!0,supportsFlight:!0};try{N(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get:()=>n,set(t){if(t&&"object"==typeof t){let r=n.renderers;n=t,r.size>0&&(r.forEach((e,r)=>{R.add(e),t.renderers.set(r,e)}),O(e))}}});let t=window.hasOwnProperty,r=!1;N(window,"hasOwnProperty",{configurable:!0,value:function(...e){try{if(!r&&"__REACT_DEVTOOLS_GLOBAL_HOOK__"===e[0])return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,r=!0,-0}catch{}return t.apply(this,e)},writable:!0})}catch{O(e)}return n})(e);try{var P="u">typeof window?window:e.g;P._sentryModuleMetadata=P._sentryModuleMetadata||{},P._sentryModuleMetadata[(new P.Error).stack]=Object.assign({},P._sentryModuleMetadata[(new P.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}try{"u">typeof window&&(window.document?.createElement||window.navigator?.product==="ReactNative")&&j()}catch{}try{var F="u">typeof window?window:e.g;F._sentryModuleMetadata=F._sentryModuleMetadata||{},F._sentryModuleMetadata[(new F.Error).stack]=Object.assign({},F._sentryModuleMetadata[(new F.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let L=e=>{switch(e.tag){case 5:case 26:case 27:return!0;default:return"string"==typeof e.type}},I=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}},D=e=>{let t=e.memoizedProps,r=e.alternate?.memoizedProps||{},n=e.flags??e.effectTag??0;switch(e.tag){case 1:case 9:case 11:case 0:case 14:case 15:return(1&n)==1;default:return!e.alternate||r!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref}},B=e=>!!(13374&e.flags||13374&e.subtreeFlags),U=e=>{switch(e.tag){case 18:case 7:case 6:case 23:case 22:return!0;case 3:return!1;default:{let t="object"==typeof e.type&&null!==e.type?e.type.$$typeof:e.type;switch("symbol"==typeof t?t.toString():t){case 60111:case"Symbol(react.concurrent_mode)":case"Symbol(react.async_mode)":return!0;default:return!1}}}};function W(e,t,r=!1){if(!e)return null;let n=t(e);if(n instanceof Promise)return(async()=>{if(await n===!0)return e;let a=r?e.return:e.child;for(;a;){let e=await V(a,t,r);if(e)return e;a=r?null:a.sibling}return null})();if(!0===n)return e;let a=r?e.return:e.child;for(;a;){let e=H(a,t,r);if(e)return e;a=r?null:a.sibling}return null}let H=(e,t,r=!1)=>{if(!e)return null;if(!0===t(e))return e;let n=r?e.return:e.child;for(;n;){let e=H(n,t,r);if(e)return e;n=r?null:n.sibling}return null},V=async(e,t,r=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let n=r?e.return:e.child;for(;n;){let e=await V(n,t,r);if(e)return e;n=r?null:n.sibling}return null},q=e=>{let t=e?.actualDuration??0,r=t,n=e?.child??null;for(;t>0&&null!=n;)r-=n.actualDuration??0,n=n.sibling;return{selfTime:r,totalTime:t}},K=e=>!!e.updateQueue?.memoCache,G=e=>"function"==typeof e?e:"object"==typeof e&&e?G(e.type||e.render):null,X=e=>{if("string"==typeof e)return e;if("function"!=typeof e&&!("object"==typeof e&&e))return null;let t=e.displayName||e.name||null;if(t)return t;let r=G(e);return r&&(r.displayName||r.name)||null},J=e=>{try{if("string"==typeof e.version&&e.bundleType>0)return"development"}catch{}return"production"},Y=0,Z=new WeakMap,Q=e=>{let t=Z.get(e);return!t&&e.alternate&&(t=Z.get(e.alternate)),t||((e,t=Y++)=>{Z.set(e,t)})(e,t=Y++),t},ee=(e,t,r)=>{let n=t;for(;null!=n;){if(Z.has(n)||Q(n),!U(n)&&D(n)&&e(n,"mount"),13===n.tag)if(null!==n.memoizedState){let t=n.child,r=t?t.sibling:null;if(r){let t=r.child;null!==t&&ee(e,t,!1)}}else{let t=null;null!==n.child&&(t=n.child.child),null!==t&&ee(e,t,!1)}else null!=n.child&&ee(e,n.child,!0);n=r?n.sibling:null}},et=(e,t,r,n)=>{if(Z.has(t)||Q(t),!r)return;Z.has(r)||Q(r);let a=13===t.tag,i=!U(t);i&&D(t)&&e(t,"update");let o=a&&null!==r.memoizedState,l=a&&null!==t.memoizedState;if(o&&l){let n=t.child?.sibling??null,a=r.child?.sibling??null;null!==n&&null!==a&&et(e,n,a,t)}else if(o&&!l){let r=t.child;null!==r&&ee(e,r,!0)}else if(!o&&l){en(e,r);let n=t.child?.sibling??null;null!==n&&ee(e,n,!0)}else if(t.child!==r.child){let r=t.child;for(;r;){if(r.alternate){let a=r.alternate;et(e,r,a,i?t:n)}else ee(e,r,!1);r=r.sibling}}},er=(e,t)=>{3!==t.tag&&U(t)||e(t,"unmount")},en=(e,t)=>{let r=13===t.tag&&null!==t.memoizedState,n=t.child;for(r&&(n=(t.child?.sibling??null)?.child??null);null!==n;)null!==n.return&&(er(e,n),en(e,n)),n=n.sibling},ea=0,ei=new WeakMap;Error();try{var eo="u">typeof window?window:e.g;eo._sentryModuleMetadata=eo._sentryModuleMetadata||{},eo._sentryModuleMetadata[(new eo.Error).stack]=Object.assign({},eo._sentryModuleMetadata[(new eo.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}try{var el="u">typeof window?window:e.g;el._sentryModuleMetadata=el._sentryModuleMetadata||{},el._sentryModuleMetadata[(new el.Error).stack]=Object.assign({},el._sentryModuleMetadata[(new el.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var es,ec,ed,eu,ep,eh,em,ef,eg,ev,ew,eb,ey,ex,e_,ek={},eN=[],eS=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,eE=Array.isArray;function eM(e,t){for(var r in t)e[r]=t[r];return e}function eC(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function eT(e,t,r){var n,a,i,o={};for(i in t)"key"==i?n=t[i]:"ref"==i?a=t[i]:o[i]=t[i];if(arguments.length>2&&(o.children=arguments.length>3?es.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===o[i]&&(o[i]=e.defaultProps[i]);return eA(e,o,n,a,null)}function eA(e,t,r,n,a){var i={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==a?++ed:a,__i:-1,__u:0};return null==a&&null!=ec.vnode&&ec.vnode(i),i}function ez(e){return e.children}function e$(e,t){this.props=e,this.context=t}function eR(e,t){if(null==t)return e.__?eR(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if(null!=(r=e.__k[t])&&null!=r.__e)return r.__e;return"function"==typeof e.type?eR(e):null}function eO(e){(!e.__d&&(e.__d=!0)&&eu.push(e)&&!ej.__r++||ep!=ec.debounceRendering)&&((ep=ec.debounceRendering)||eh)(ej)}function ej(){try{for(var e,t=1;eu.length;)eu.length>t&&eu.sort(em),e=eu.shift(),t=eu.length,function(e){if(e.__P&&e.__d){var t=e.__v,r=t.__e,n=[],a=[],i=eM({},t);i.__v=t.__v+1,ec.vnode&&ec.vnode(i),eB(e.__P,i,t,e.__n,e.__P.namespaceURI,32&t.__u?[r]:null,n,null==r?eR(t):r,!!(32&t.__u),a),i.__v=t.__v,i.__.__k[i.__i]=i,eW(n,i,a),t.__e=t.__=null,i.__e!=r&&function e(t){if(null!=(t=t.__)&&null!=t.__c)return t.__e=t.__c.base=null,t.__k.some(function(e){if(null!=e&&null!=e.__e)return t.__e=t.__c.base=e.__e}),e(t)}(i)}}(e)}finally{eu.length=ej.__r=0}}function eP(e,t,r,n,a,i,o,l,s,c,d){var u,p,h,m,f,g,v,w=n&&n.__k||eN,b=t.length;for(s=function(e,t,r,n,a){var i,o,l,s,c,d=r.length,u=d,p=0;for(e.__k=Array(a),i=0;i<a;i++)null!=(o=t[i])&&"boolean"!=typeof o&&"function"!=typeof o?("string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?o=e.__k[i]=eA(null,o,null,null,null):eE(o)?o=e.__k[i]=eA(ez,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?o=e.__k[i]=eA(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[i]=o,s=i+p,o.__=e,o.__b=e.__b+1,l=null,-1!=(c=o.__i=function(e,t,r,n){var a,i,o,l=e.key,s=e.type,c=t[r],d=null!=c&&0==(2&c.__u);if(null===c&&null==l||d&&l==c.key&&s==c.type)return r;if(n>+!!d){for(a=r-1,i=r+1;a>=0||i<t.length;)if(null!=(c=t[o=a>=0?a--:i++])&&0==(2&c.__u)&&l==c.key&&s==c.type)return o}return -1}(o,r,s,u))&&(u--,(l=r[c])&&(l.__u|=2)),null==l||null==l.__v?(-1==c&&(a>d?p--:a<d&&p++),"function"!=typeof o.type&&(o.__u|=4)):c!=s&&(c==s-1?p--:c==s+1?p++:(c>s?p--:p++,o.__u|=4))):e.__k[i]=null;if(u)for(i=0;i<d;i++)null!=(l=r[i])&&0==(2&l.__u)&&(l.__e==n&&(n=eR(l)),function e(t,r,n){var a,i;if(ec.unmount&&ec.unmount(t),(a=t.ref)&&(a.current&&a.current!=t.__e||eH(a,null,r)),null!=(a=t.__c)){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(e){ec.__e(e,r)}a.base=a.__P=null}if(a=t.__k)for(i=0;i<a.length;i++)a[i]&&e(a[i],r,n||"function"!=typeof t.type);n||eC(t.__e),t.__c=t.__=t.__e=void 0}(l,l));return n}(r,t,w,s,b),u=0;u<b;u++)null!=(h=r.__k[u])&&(p=-1!=h.__i&&w[h.__i]||ek,h.__i=u,g=eB(e,h,p,a,i,o,l,s,c,d),m=h.__e,h.ref&&p.ref!=h.ref&&(p.ref&&eH(p.ref,null,h),d.push(h.ref,h.__c||m,h)),null==f&&null!=m&&(f=m),(v=!!(4&h.__u))||p.__k===h.__k?(s=function e(t,r,n,a){var i,o;if("function"==typeof t.type){for(i=t.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=t,r=e(i[o],r,n,a));return r}t.__e!=r&&(a&&(r&&t.type&&!r.parentNode&&(r=eR(t)),n.insertBefore(t.__e,r||null)),r=t.__e);do r=r&&r.nextSibling;while(null!=r&&8==r.nodeType)return r}(h,s,e,v),v&&p.__e&&(p.__e=null)):"function"==typeof h.type&&void 0!==g?s=g:m&&(s=m.nextSibling),h.__u&=-7);return r.__e=f,s}function eF(e,t){return t=t||[],null==e||"boolean"==typeof e||(eE(e)?e.some(function(e){eF(e,t)}):t.push(e)),t}function eL(e,t,r){"-"==t[0]?e.setProperty(t,null==r?"":r):e[t]=null==r?"":"number"!=typeof r||eS.test(t)?r:r+"px"}function eI(e,t,r,n,a){var i,o;e:if("style"==t)if("string"==typeof r)e.style.cssText=r;else{if("string"==typeof n&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||eL(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||eL(e.style,t,r[t])}else if("o"==t[0]&&"n"==t[1])i=t!=(t=t.replace(ew,"$1")),t=(o=t.toLowerCase())in e||"onFocusOut"==t||"onFocusIn"==t?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=r,r?n?r[ev]=n[ev]:(r[ev]=eb,e.addEventListener(t,i?ex:ey,i)):e.removeEventListener(t,i?ex:ey,i);else{if("http://www.w3.org/2000/svg"==a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=null==r?"":r;break e}catch(e){}"function"==typeof r||(null==r||!1===r&&"-"!=t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==r?"":r))}}function eD(e){return function(t){if(this.l){var r=this.l[t.type+e];if(null==t[eg])t[eg]=eb++;else if(t[eg]<r[ev])return;return r(ec.event?ec.event(t):t)}}}function eB(e,t,r,n,a,i,o,l,s,c){var d,u,p,h,m,f,g,v,w,b,y,x,_,k,N,S=t.type;if(void 0!==t.constructor)return null;128&r.__u&&(s=!!(32&r.__u),i=[l=t.__e=r.__e]),(d=ec.__b)&&d(t);e:if("function"==typeof S)try{if(v=t.props,w=S.prototype&&S.prototype.render,b=(d=S.contextType)&&n[d.__c],y=d?b?b.props.value:d.__:n,r.__c?g=(u=t.__c=r.__c).__=u.__E:(w?t.__c=u=new S(v,y):(t.__c=u=new e$(v,y),u.constructor=S,u.render=eV),b&&b.sub(u),u.state||(u.state={}),u.__n=n,p=u.__d=!0,u.__h=[],u._sb=[]),w&&null==u.__s&&(u.__s=u.state),w&&null!=S.getDerivedStateFromProps&&(u.__s==u.state&&(u.__s=eM({},u.__s)),eM(u.__s,S.getDerivedStateFromProps(v,u.__s))),h=u.props,m=u.state,u.__v=t,p)w&&null==S.getDerivedStateFromProps&&null!=u.componentWillMount&&u.componentWillMount(),w&&null!=u.componentDidMount&&u.__h.push(u.componentDidMount);else{if(w&&null==S.getDerivedStateFromProps&&v!==h&&null!=u.componentWillReceiveProps&&u.componentWillReceiveProps(v,y),t.__v==r.__v||!u.__e&&null!=u.shouldComponentUpdate&&!1===u.shouldComponentUpdate(v,u.__s,y)){t.__v!=r.__v&&(u.props=v,u.state=u.__s,u.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(e){e&&(e.__=t)}),eN.push.apply(u.__h,u._sb),u._sb=[],u.__h.length&&o.push(u);break e}null!=u.componentWillUpdate&&u.componentWillUpdate(v,u.__s,y),w&&null!=u.componentDidUpdate&&u.__h.push(function(){u.componentDidUpdate(h,m,f)})}if(u.context=y,u.props=v,u.__P=e,u.__e=!1,x=ec.__r,_=0,w)u.state=u.__s,u.__d=!1,x&&x(t),d=u.render(u.props,u.state,u.context),eN.push.apply(u.__h,u._sb),u._sb=[];else do u.__d=!1,x&&x(t),d=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++_<25)u.state=u.__s,null!=u.getChildContext&&(n=eM(eM({},n),u.getChildContext())),w&&!p&&null!=u.getSnapshotBeforeUpdate&&(f=u.getSnapshotBeforeUpdate(h,m)),k=null!=d&&d.type===ez&&null==d.key?function e(t){return"object"!=typeof t||null==t||t.__b>0?t:eE(t)?t.map(e):eM({},t)}(d.props.children):d,l=eP(e,eE(k)?k:[k],t,r,n,a,i,o,l,s,c),u.base=t.__e,t.__u&=-161,u.__h.length&&o.push(u),g&&(u.__E=u.__=null)}catch(e){if(t.__v=null,s||null!=i)if(e.then){for(t.__u|=s?160:128;l&&8==l.nodeType&&l.nextSibling;)l=l.nextSibling;i[i.indexOf(l)]=null,t.__e=l}else{for(N=i.length;N--;)eC(i[N]);eU(t)}else t.__e=r.__e,t.__k=r.__k,e.then||eU(t);ec.__e(e,t,r)}else null==i&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):l=t.__e=function(e,t,r,n,a,i,o,l,s){var c,d,u,p,h,m,f,g=r.props||ek,v=t.props,w=t.type;if("svg"==w?a="http://www.w3.org/2000/svg":"math"==w?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),null!=i){for(c=0;c<i.length;c++)if((h=i[c])&&"setAttribute"in h==!!w&&(w?h.localName==w:3==h.nodeType)){e=h,i[c]=null;break}}if(null==e){if(null==w)return document.createTextNode(v);e=document.createElementNS(a,w,v.is&&v),l&&(ec.__m&&ec.__m(t,i),l=!1),i=null}if(null==w)g===v||l&&e.data==v||(e.data=v);else{if(i=i&&es.call(e.childNodes),!l&&null!=i)for(g={},c=0;c<e.attributes.length;c++)g[(h=e.attributes[c]).name]=h.value;for(c in g)h=g[c],"dangerouslySetInnerHTML"==c?u=h:"children"==c||c in v||"value"==c&&"defaultValue"in v||"checked"==c&&"defaultChecked"in v||eI(e,c,null,h,a);for(c in v)h=v[c],"children"==c?p=h:"dangerouslySetInnerHTML"==c?d=h:"value"==c?m=h:"checked"==c?f=h:l&&"function"!=typeof h||g[c]===h||eI(e,c,h,g[c],a);if(d)l||u&&(d.__html==u.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(u&&(e.innerHTML=""),eP("template"==t.type?e.content:e,eE(p)?p:[p],t,r,n,"foreignObject"==w?"http://www.w3.org/1999/xhtml":a,i,o,i?i[0]:r.__k&&eR(r,0),l,s),null!=i)for(c=i.length;c--;)eC(i[c]);l||(c="value","progress"==w&&null==m?e.removeAttribute("value"):null==m||m===e[c]&&("progress"!=w||m)&&("option"!=w||m==g[c])||eI(e,c,m,g[c],a),c="checked",null!=f&&f!=e[c]&&eI(e,c,f,g[c],a))}return e}(r.__e,t,r,n,a,i,o,s,c);return(d=ec.diffed)&&d(t),128&t.__u?void 0:l}function eU(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(eU))}function eW(e,t,r){for(var n=0;n<r.length;n++)eH(r[n],r[++n],r[++n]);ec.__c&&ec.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){ec.__e(e,t.__v)}})}function eH(e,t,r){try{if("function"==typeof e){var n="function"==typeof e.__u;n&&e.__u(),n&&null==t||(e.__u=e(t))}else e.current=t}catch(e){ec.__e(e,r)}}function eV(e,t,r){return this.constructor(e,r)}function eq(e,t,r){var n,a,i,o;t==document&&(t=document.documentElement),ec.__&&ec.__(e,t),a=(n="function"==typeof r)?null:r&&r.__k||t.__k,i=[],o=[],eB(t,e=(!n&&r||t).__k=eT(ez,null,[e]),a||ek,ek,t.namespaceURI,!n&&r?[r]:a?null:t.firstChild?es.call(t.childNodes):null,i,!n&&r?r:a?a.__e:t.firstChild,n,o),eW(i,e,o)}function eK(e){function t(e){var r,n;return this.getChildContext||(r=new Set,(n={})[t.__c]=this,this.getChildContext=function(){return n},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&r.forEach(function(e){e.__e=!0,eO(e)})},this.sub=function(e){r.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r&&r.delete(e),t&&t.call(e)}}),e.children}return t.__c="__cC"+e_++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}es=eN.slice,ec={__e:function(e,t,r,n){for(var a,i,o;t=t.__;)if((a=t.__c)&&!a.__)try{if((i=a.constructor)&&null!=i.getDerivedStateFromError&&(a.setState(i.getDerivedStateFromError(e)),o=a.__d),null!=a.componentDidCatch&&(a.componentDidCatch(e,n||{}),o=a.__d),o)return a.__E=a}catch(t){e=t}throw e}},ed=0,e$.prototype.setState=function(e,t){var r;r=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=eM({},this.state),"function"==typeof e&&(e=e(eM({},r),this.props)),e&&eM(r,e),null!=e&&this.__v&&(t&&this._sb.push(t),eO(this))},e$.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),eO(this))},e$.prototype.render=ez,eu=[],eh="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,em=function(e,t){return e.__v.__b-t.__v.__b},ej.__r=0,eg="__d"+(ef=Math.random().toString(8)),ev="__a"+ef,ew=/(PointerCapture)$|Capture$/i,eb=0,ey=eD(!1),ex=eD(!0),e_=0;try{var eG="u">typeof window?window:e.g;eG._sentryModuleMetadata=eG._sentryModuleMetadata||{},eG._sentryModuleMetadata[(new eG.Error).stack]=Object.assign({},eG._sentryModuleMetadata[(new eG.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var eX,eJ,eY,eZ,eQ=0,e0=[],e1=ec,e2=e1.__b,e5=e1.__r,e4=e1.diffed,e3=e1.__c,e7=e1.unmount,e8=e1.__;function e6(e,t){e1.__h&&e1.__h(eJ,e,eQ||t),eQ=0;var r=eJ.__H||(eJ.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function e9(e){return eQ=1,function(e,t){var r=e6(eX++,2);if(r.t=e,!r.__c&&(r.__=[tu(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=eJ,!eJ.__f)){var n=function(e,t,n){if(!r.__c.__H)return!0;var i=r.__c.__H.__.filter(function(e){return e.__c});if(i.every(function(e){return!e.__N}))return!a||a.call(this,e,t,n);var o=r.__c.props!==e;return i.some(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),a&&a.call(this,e,t,n)||o};eJ.__f=!0;var a=eJ.shouldComponentUpdate,i=eJ.componentWillUpdate;eJ.componentWillUpdate=function(e,t,r){if(this.__e){var o=a;a=void 0,n(e,t,r),a=o}i&&i.call(this,e,t,r)},eJ.shouldComponentUpdate=n}return r.__N||r.__}(tu,e)}function te(e,t){var r=e6(eX++,3);!e1.__s&&td(r.__H,t)&&(r.__=e,r.u=t,eJ.__H.__h.push(r))}function tt(e,t){var r=e6(eX++,4);!e1.__s&&td(r.__H,t)&&(r.__=e,r.u=t,eJ.__h.push(r))}function tr(e){return eQ=5,tn(function(){return{current:e}},[])}function tn(e,t){var r=e6(eX++,7);return td(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function ta(e,t){return eQ=8,tn(function(){return e},t)}function ti(e){var t=eJ.context[e.__c],r=e6(eX++,9);return r.c=e,t?(null==r.__&&(r.__=!0,t.sub(eJ)),t.props.value):e.__}function to(){for(var e;e=e0.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(ts),t.__h.some(tc),t.__h=[]}catch(r){t.__h=[],e1.__e(r,e.__v)}}}e1.__b=function(e){eJ=null,e2&&e2(e)},e1.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),e8&&e8(e,t)},e1.__r=function(e){e5&&e5(e),eX=0;var t=(eJ=e.__c).__H;t&&(eY===eJ?(t.__h=[],eJ.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(ts),t.__h.some(tc),t.__h=[],eX=0)),eY=eJ},e1.diffed=function(e){e4&&e4(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==e0.push(t)&&eZ===e1.requestAnimationFrame||((eZ=e1.requestAnimationFrame)||function(e){var t,r=function(){clearTimeout(n),tl&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);tl&&(t=requestAnimationFrame(r))})(to)),t.__H.__.some(function(e){e.u&&(e.__H=e.u),e.u=void 0})),eY=eJ=null},e1.__c=function(e,t){t.some(function(e){try{e.__h.some(ts),e.__h=e.__h.filter(function(e){return!e.__||tc(e)})}catch(r){t.some(function(e){e.__h&&(e.__h=[])}),t=[],e1.__e(r,e.__v)}}),e3&&e3(e,t)},e1.unmount=function(e){e7&&e7(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.some(function(e){try{ts(e)}catch(e){t=e}}),r.__H=void 0,t&&e1.__e(t,r.__v))};var tl="function"==typeof requestAnimationFrame;function ts(e){var t=eJ,r=e.__c;"function"==typeof r&&(e.__c=void 0,r()),eJ=t}function tc(e){var t=eJ;e.__c=e.__(),eJ=t}function td(e,t){return!e||e.length!==t.length||t.some(function(t,r){return t!==e[r]})}function tu(e,t){return"function"==typeof t?t(e):t}try{var tp="u">typeof window?window:e.g;tp._sentryModuleMetadata=tp._sentryModuleMetadata||{},tp._sentryModuleMetadata[(new tp.Error).stack]=Object.assign({},tp._sentryModuleMetadata[(new tp.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var th=Symbol.for("preact-signals");function tm(){if(ty>1)ty--;else{var e,t=!1,r=tN;for(tN=void 0;void 0!==r;){var n=r.S;if(n.v===r.v)for(var a=n.t;void 0!==a;a=a.x)a.i===r.i&&(a.i=n.i);r=r.o}for(;void 0!==tb;){var i=tb;for(tb=void 0,tx++;void 0!==i;){var o=i.u;if(i.u=void 0,i.f&=-3,!(8&i.f)&&tT(i))try{i.c()}catch(r){t||(e=r,t=!0)}i=o}}if(tx=0,ty--,t)throw e}}function tf(e){if(ty>0)return e();tk=++t_,ty++;try{return e()}finally{tm()}}var tg,tv=void 0;function tw(e){var t=tv,r=tg;tv=void 0,tg=void 0;try{return e()}finally{tv=t,tg=r}}var tb=void 0,ty=0,tx=0,t_=0,tk=0,tN=void 0,tS=0;function tE(e){if(void 0!==tv){var t=e.n;if(void 0===t||t.t!==tv)return t={i:0,S:e,p:tv.s,n:void 0,t:tv,e:void 0,x:void 0,r:t},void 0!==tv.s&&(tv.s.n=t),tv.s=t,e.n=t,32&tv.f&&e.S(t),t;if(-1===t.i)return t.i=0,void 0!==t.n&&(t.n.p=t.p,void 0!==t.p&&(t.p.n=t.n),t.p=tv.s,t.n=void 0,tv.s.n=t,tv.s=t),t}}function tM(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=null==t?void 0:t.watched,this.Z=null==t?void 0:t.unwatched,this.name=null==t?void 0:t.name}function tC(e,t){return new tM(e,t)}function tT(e){for(var t=e.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function tA(e){for(var t=e.s;void 0!==t;t=t.n){var r=t.S.n;if(void 0!==r&&(t.r=r),t.S.n=t,t.i=-1,void 0===t.n){e.s=t;break}}}function tz(e){for(var t=e.s,r=void 0;void 0!==t;){var n=t.p;-1===t.i?(t.S.U(t),void 0!==n&&(n.n=t.n),void 0!==t.n&&(t.n.p=n)):r=t,t.S.n=t.r,void 0!==t.r&&(t.r=void 0),t=n}e.s=r}function t$(e,t){tM.call(this,void 0,t),this.x=e,this.s=void 0,this.g=tS-1,this.f=4}function tR(e,t){return new t$(e,t)}function tO(e){var t=e.m;if(e.m=void 0,"function"==typeof t){ty++;var r=tv;tv=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,tj(e),t}finally{tv=r,tm()}}}function tj(e){for(var t=e.s;void 0!==t;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,tO(e)}function tP(e){if(tv!==this)throw Error("Out-of-order effect");tz(this),tv=e,this.f&=-2,8&this.f&&tj(this),tm()}function tF(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=null==t?void 0:t.name,tg&&tg.push(this)}function tL(e,t){var r=new tF(e,t);try{r.c()}catch(e){throw r.d(),e}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}tM.prototype.brand=th,tM.prototype.h=function(){return!0},tM.prototype.S=function(e){var t=this,r=this.t;r!==e&&void 0===e.e&&(e.x=r,this.t=e,void 0!==r?r.e=e:tw(function(){var e;null==(e=t.W)||e.call(t)}))},tM.prototype.U=function(e){var t=this;if(void 0!==this.t){var r=e.e,n=e.x;void 0!==r&&(r.x=n,e.e=void 0),void 0!==n&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,void 0===n&&tw(function(){var e;null==(e=t.Z)||e.call(t)}))}},tM.prototype.subscribe=function(e){var t=this;return tL(function(){var r=t.value;tw(function(){return e(r)})},{name:"sub"})},tM.prototype.valueOf=function(){return this.value},tM.prototype.toString=function(){return this.value+""},tM.prototype.toJSON=function(){return this.value},tM.prototype.peek=function(){var e=this;return tw(function(){return e.value})},Object.defineProperty(tM.prototype,"value",{get:function(){var e=tE(this);return void 0!==e&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(tx>100)throw Error("Cycle detected");0!==ty&&0===tx&&this.l!==tk&&(this.l=tk,tN={S:this,v:this.v,i:this.i,o:tN}),this.v=e,this.i++,tS++,ty++;try{for(var t=this.t;void 0!==t;t=t.x)t.t.N()}finally{tm()}}}}),t$.prototype=new tM,t$.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f)||(this.f&=-5,this.g===tS))return!0;if(this.g=tS,this.f|=1,this.i>0&&!tT(this))return this.f&=-2,!0;var e=tv;try{tA(this),tv=this;var t=this.x();(16&this.f||this.v!==t||0===this.i)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return tv=e,tz(this),this.f&=-2,!0},t$.prototype.S=function(e){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t)}tM.prototype.S.call(this,e)},t$.prototype.U=function(e){if(void 0!==this.t&&(tM.prototype.U.call(this,e),void 0===this.t)){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t)}},t$.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;void 0!==e;e=e.x)e.t.N()}},Object.defineProperty(t$.prototype,"value",{get:function(){if(1&this.f)throw Error("Cycle detected");var e=tE(this);if(this.h(),void 0!==e&&(e.i=this.i),16&this.f)throw this.v;return this.v}}),tF.prototype.c=function(){var e=this.S();try{if(8&this.f||void 0===this.x)return;var t=this.x();"function"==typeof t&&(this.m=t)}finally{e()}},tF.prototype.S=function(){if(1&this.f)throw Error("Cycle detected");this.f|=1,this.f&=-9,tO(this),tA(this),ty++;var e=tv;return tv=this,tP.bind(this,e)},tF.prototype.N=function(){2&this.f||(this.f|=2,this.u=tb,tb=this)},tF.prototype.d=function(){this.f|=8,1&this.f||tj(this)},tF.prototype.dispose=function(){this.d()};try{var tI="u">typeof window?window:e.g;tI._sentryModuleMetadata=tI._sentryModuleMetadata||{},tI._sentryModuleMetadata[(new tI.Error).stack]=Object.assign({},tI._sentryModuleMetadata[(new tI.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var tD,tB,tU="u">typeof window&&!!window.__PREACT_SIGNALS_DEVTOOLS__,tW=[],tH=[];function tV(e,t){ec[e]=t.bind(null,ec[e]||function(){})}function tq(e){if(tB){var t=tB;tB=void 0,t()}tB=e&&e.S()}function tK(e){var t=this,r=e.data,n=tG(r);n.name="ReactiveDom",n.value=r;var a=tn(function(){for(var e=t.__v;e=e.__;)if(e.__c){e.__c.__$f|=4;break}var r=tR(function(){var e=n.value.value;return 0===e?0:!0===e?"":e||""}),a=tR(function(){var e;return!Array.isArray(r.value)&&(null==(e=r.value)||void 0!==e.constructor)}),i=tL(function(){if(this.N=t0,a.value){var e=r.value;t.__v&&t.__v.__e&&3===t.__v.__e.nodeType&&(t.__v.__e.data=e)}}),o=t.__$u.d;return t.__$u.d=function(){i(),o.call(this)},[a,r]},[]),i=a[0],o=a[1];return i.value?o.peek():o.value}function tG(e,t){return tn(function(){return tC(e,t)},[])}tL(function(){tD=this.N})(),tK.displayName="ReactiveTextNode",Object.defineProperties(tM.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:tK},props:{configurable:!0,get:function(){var e=this;return{data:{get value(){return e.value}}}}},__b:{configurable:!0,value:1}}),tV("__b",function(e,t){if("string"==typeof t.type){var r,n=t.props;for(var a in n)if("children"!==a){var i=n[a];i instanceof tM&&(r||(t.__np=r={}),r[a]=i,n[a]=i.peek())}}e(t)}),tV("__r",function(e,t){if(e(t),t.type!==ez){tq();var r,n,a=t.__c;a&&(a.__$f&=-2,void 0===(n=a.__$u)&&(tL(function(){r=this},{name:"function"==typeof t.type?t.type.displayName||t.type.name:""}),r.c=function(){var e;tU&&(null==(e=n.y)||e.call(n)),a.__$f|=1,a.setState({})},a.__$u=n=r)),tq(n)}}),tV("__e",function(e,t,r,n){tq(),e(t,r,n)}),tV("diffed",function(e,t){if(tq(),"string"==typeof t.type&&(r=t.__e)){var r,n=t.__np,a=t.props,i=r.U;if(i)for(var o in i){var l=i[o];void 0===l||n&&o in n||(l.d(),i[o]=void 0)}if(n)for(var s in i||(i={},r.U=i),n){var c=i[s],d=n[s];void 0===c?(c=function(e,t,r,n){var a=t in e&&void 0===e.ownerSVGElement,i=tC(r);return{o:function(e,t){i.value=e,n=t},d:tL(function(){this.N=t0;var r=i.value.value;n[t]!==r&&(n[t]=r,a?e[t]=r:null!=r&&(!1!==r||"-"===t[4])?e.setAttribute(t,r):e.removeAttribute(t))})}}(r,s,d,a),i[s]=c):c.o(d,a)}}e(t)}),tV("unmount",function(e,t){if("string"==typeof t.type){var r=t.__e;if(r){var n=r.U;if(n)for(var a in r.U=void 0,n){var i=n[a];i&&i.d()}}var o=t.__np;if(o){var l=t.props;for(var s in o)l[s]=o[s]}t.__np=void 0}else{var c=t.__c;if(c){var d=c.__$u;d&&(c.__$u=void 0,d.d())}}e(t)}),tV("__h",function(e,t,r,n){n<3&&(t.__$f|=2),e(t,r,n)}),e$.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&void 0!==r.s;for(var a in t)return!0;if(this.__f||"boolean"==typeof this.u&&!0===this.u){var i=2&this.__$f;if(!(n||i||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var o in e)if("__source"!==o&&e[o]!==this.props[o])return!0;for(var l in this.props)if(!(l in e))return!0;return!1};var tX="u"<typeof requestAnimationFrame?setTimeout:function(e){var t=function(){clearTimeout(r),cancelAnimationFrame(n),e()},r=setTimeout(t,35),n=requestAnimationFrame(t)},tJ=function(e){queueMicrotask(function(){queueMicrotask(e)})};function tY(){tf(function(){for(var e;e=tW.shift();)tD.call(e)})}function tZ(){1===tW.push(this)&&(ec.requestAnimationFrame||tX)(tY)}function tQ(){tf(function(){for(var e;e=tH.shift();)tD.call(e)})}function t0(){1===tH.push(this)&&(ec.requestAnimationFrame||tJ)(tQ)}function t1(e,t){var r=tr(e);r.current=e,te(function(){return tL(function(){return this.N=tZ,r.current()},t)},[])}try{var t2="u">typeof window?window:e.g;t2._sentryModuleMetadata=t2._sentryModuleMetadata||{},t2._sentryModuleMetadata[(new t2.Error).stack]=Object.assign({},t2._sentryModuleMetadata[(new t2.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}function t5(e,t){for(var r in t)e[r]=t[r];return e}function t4(e,t){for(var r in e)if("__source"!==r&&!(r in t))return!0;for(var n in t)if("__source"!==n&&e[n]!==t[n])return!0;return!1}function t3(e){var t,r;try{return((t=e.__)!==(r=e.u())||0===t&&1/t!=1/r)&&(t==t||r==r)}catch(e){return!0}}function t7(e,t){this.props=e,this.context=t}function t8(e,t){function r(e){var r=this.props.ref;return r!=e.ref&&r&&("function"==typeof r?r(null):r.current=null),t?!t(this.props,e)||r!=e.ref:t4(this.props,e)}function n(t){return this.shouldComponentUpdate=r,eT(e,t)}return n.displayName="Memo("+(e.displayName||e.name)+")",n.__f=n.prototype.isReactComponent=!0,n.type=e,n}(t7.prototype=new e$).isPureReactComponent=!0,t7.prototype.shouldComponentUpdate=function(e,t){return t4(this.props,e)||t4(this.state,t)};var t6=ec.__b;ec.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),t6&&t6(e)};var t9="u">typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function re(e){function t(t){var r=t5({},t);return delete r.ref,e(r,t.ref||null)}return t.$$typeof=t9,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var rt=ec.__e;ec.__e=function(e,t,r,n){if(e.then){for(var a,i=t;i=i.__;)if((a=i.__c)&&a.__c)return null==t.__e&&(t.__e=r.__e,t.__k=r.__k),a.__c(e,t)}rt(e,t,r,n)};var rr=ec.unmount;function rn(){this.__u=0,this.o=null,this.__b=null}function ra(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function ri(){this.i=null,this.l=null}ec.unmount=function(e){var t=e.__c;t&&(t.__z=!0),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),rr&&rr(e)},(rn.prototype=new e$).__c=function(e,t){var r=t.__c,n=this;null==n.o&&(n.o=[]),n.o.push(r);var a=ra(n.__v),i=!1,o=function(){i||n.__z||(i=!0,r.__R=null,a?a(s):s())};r.__R=o;var l=r.__P;r.__P=null;var s=function(){if(!--n.__u){if(n.state.__a){var e,t=n.state.__a;n.__v.__k[0]=function e(t,r,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return e(t,r,n)}),t.__c&&t.__c.__P===r&&(t.__e&&n.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=n)),t}(t,t.__c.__P,t.__c.__O)}for(n.setState({__a:n.__b=null});e=n.o.pop();)e.__P=l,e.forceUpdate()}};n.__u++||32&t.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(o,o)},rn.prototype.componentWillUnmount=function(){this.o=[]},rn.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,r,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(e){"function"==typeof e.__c&&e.__c()}),t.__c.__H=null),null!=(t=t5({},t)).__c&&(t.__c.__P===n&&(t.__c.__P=r),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return e(t,r,n)})),t}(this.__b,r,n.__O=n.__P)}this.__b=null}var a=t.__a&&eT(ez,null,e.fallback);return a&&(a.__u&=-33),[eT(ez,null,t.__a?null:e.children),a]};var ro=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function rl(e){return this.getChildContext=function(){return e.context},e.children}function rs(e){var t=this,r=e.h;if(t.componentWillUnmount=function(){eq(null,t.v),t.v=null,t.h=null},t.h&&t.h!==r&&t.componentWillUnmount(),!t.v){for(var n=t.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;t.h=r,t.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:n.__m},contains:function(){return!0},namespaceURI:r.namespaceURI,insertBefore:function(e,r){this.childNodes.push(e),t.h.insertBefore(e,r)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.h.removeChild(e)}}}eq(eT(rl,{context:t.context},e.__v),t.v)}(ri.prototype=new e$).__a=function(e){var t=this,r=ra(t.__v),n=t.l.get(e);return n[0]++,function(a){var i=function(){t.props.revealOrder?(n.push(a),ro(t,e,n)):a()};r?r(i):i()}},ri.prototype.render=function(e){this.i=null,this.l=new Map;var t=eF(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},ri.prototype.componentDidUpdate=ri.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){ro(e,r,t)})};var rc="u">typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,rd=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ru=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,rp=/[A-Z0-9]/g,rh="u">typeof document;e$.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(e$.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var rm=ec.event;ec.event=function(e){return rm&&(e=rm(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var rf={configurable:!0,get:function(){return this.class}},rg=ec.vnode;ec.vnode=function(e){"string"==typeof e.type&&function(e){var t=e.props,r=e.type,n={},a=-1==r.indexOf("-");for(var i in t){var o=t[i];if(!("value"===i&&"defaultValue"in t&&null==o||rh&&"children"===i&&"noscript"===r||"class"===i||"className"===i)){var l,s=i.toLowerCase();"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&!0===o?o="":"translate"===s&&"no"===o?o=!1:"o"===s[0]&&"n"===s[1]?"ondoubleclick"===s?i="ondblclick":"onchange"!==s||"input"!==r&&"textarea"!==r||(l=t.type,("u">typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(l))?"onfocus"===s?i="onfocusin":"onblur"===s?i="onfocusout":ru.test(i)&&(i=s):s=i="oninput":a&&rd.test(i)?i=i.replace(rp,"-$&").toLowerCase():null===o&&(o=void 0),"oninput"===s&&n[i=s]&&(i="oninputCapture"),n[i]=o}}"select"==r&&(n.multiple&&Array.isArray(n.value)&&(n.value=eF(t.children).forEach(function(e){e.props.selected=-1!=n.value.indexOf(e.props.value)})),null!=n.defaultValue&&(n.value=eF(t.children).forEach(function(e){e.props.selected=n.multiple?-1!=n.defaultValue.indexOf(e.props.value):n.defaultValue==e.props.value}))),t.class&&!t.className?(n.class=t.class,Object.defineProperty(n,"className",rf)):t.className&&(n.class=n.className=t.className),e.props=n}(e),e.$$typeof=rc,rg&&rg(e)};var rv=ec.__r;ec.__r=function(e){rv&&rv(e),e.__c};var rw=ec.diffed;ec.diffed=function(e){rw&&rw(e);var t=e.props,r=e.__e;null!=r&&"textarea"===e.type&&"value"in t&&t.value!==r.value&&(r.value=null==t.value?"":t.value)};try{var rb="u">typeof window?window:e.g;rb._sentryModuleMetadata=rb._sentryModuleMetadata||{},rb._sentryModuleMetadata[(new rb.Error).stack]=Object.assign({},rb._sentryModuleMetadata[(new rb.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var ry=0;function rx(e,t,r,n,a,i){t||(t={});var o,l,s=t;if("ref"in s)for(l in s={},t)"ref"==l?o=t[l]:s[l]=t[l];var c={type:e,props:s,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ry,__i:-1,__u:0,__source:a,__self:i};if("function"==typeof e&&(o=e.defaultProps))for(l in o)void 0===s[l]&&(s[l]=o[l]);return ec.vnode&&ec.vnode(c),c}try{var r_="u">typeof window?window:e.g;r_._sentryModuleMetadata=r_._sentryModuleMetadata||{},r_._sentryModuleMetadata[(new r_.Error).stack]=Object.assign({},r_._sentryModuleMetadata[(new r_.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let rk=null,rN=(()=>{if(null!==rk)return rk;try{rk=window.matchMedia("(color-gamut: p3)").matches}catch{rk=!1}return rk})(),rS=e=>rN?`color(display-p3 0.84 0.19 0.78 / ${e})`:`rgba(210, 57, 192, ${e})`,rE=["/components/ui/","/packages/ui/","/design-system/","/design-systems/","/primitives/"],rM=8e3,rC=1e4,rT=(rS(.4),rS(.05),rS(.5),rS(.08),rS(.15),["id","class","aria-label","data-testid","role","name","title"]),rA=new Set(["id","data-testid","aria-label","href","src","alt","type","name","placeholder","role","for","action","method","title","disabled","checked","readonly","required","selected","open"]),rz=new Set(["a","button","code","label","option","pre","summary","text"]),r$=new Set(["script","style","template","noscript"]),rR="data-react-grab-frozen",rO=new Set("display.position.top.right.bottom.left.z-index.overflow.overflow-x.overflow-y.width.height.min-width.min-height.max-width.max-height.margin-top.margin-right.margin-bottom.margin-left.padding-top.padding-right.padding-bottom.padding-left.flex-direction.flex-wrap.justify-content.align-items.align-self.align-content.flex-grow.flex-shrink.flex-basis.order.gap.row-gap.column-gap.grid-template-columns.grid-template-rows.grid-template-areas.font-family.font-size.font-weight.font-style.line-height.letter-spacing.text-align.text-decoration-line.text-decoration-style.text-transform.text-overflow.text-shadow.white-space.word-break.overflow-wrap.vertical-align.color.background-color.background-image.background-position.background-size.background-repeat.border-top-width.border-right-width.border-bottom-width.border-left-width.border-top-style.border-right-style.border-bottom-style.border-left-style.border-top-color.border-right-color.border-bottom-color.border-left-color.border-top-left-radius.border-top-right-radius.border-bottom-left-radius.border-bottom-right-radius.box-shadow.opacity.transform.filter.backdrop-filter.object-fit.object-position".split(".")),rj=e=>"object"==typeof e&&!!e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE,rP=new WeakMap,rF=e=>{if(!e)return null;try{return e.frameElement}catch{return null}},rL="bippy-0.6.1",rI=Object.defineProperty,rD=Object.prototype.hasOwnProperty,rB=()=>{},rU=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},rW=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&"getFiberRoots"in e),rH=!1,rV,rq=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!rH||(e&&"function"==typeof e.inject&&(rV=e.inject.toString()),!!rV?.includes("(injected)")),rK=new Set,rG=new Set,rX=e=>{e&&rK.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=rU,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=rL,t._instrumentationIsActive=!1;let e=rW(t);if(e||(t.on=rB),t.renderers.size){t._instrumentationIsActive=!0,rK.forEach(e=>e());return}let r=t.inject,n=rq(t);n&&!e&&(rH=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=e=>{let a=r(e);return rG.add(e),n&&t.renderers.set(a,e),t._instrumentationIsActive=!0,rK.forEach(e=>e()),a}}(t.renderers.size||t._instrumentationIsActive||rq())&&e?.()}catch{}},rJ=e=>rD.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__")?(rX(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):(e=>{e&&rK.add(e);let t=new Map,r=0,n={_instrumentationIsActive:!1,_instrumentationSource:rL,checkDCE:rU,hasUnsupportedRendererAttached:!1,inject(e){let a=++r;return t.set(a,e),rG.add(e),n._instrumentationIsActive||(n._instrumentationIsActive=!0,rK.forEach(e=>e())),a},on:rB,onCommitFiberRoot:rB,onCommitFiberUnmount:rB,onPostCommitFiberRoot:rB,renderers:t,supportsFiber:!0,supportsFlight:!0};try{rI(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get:()=>n,set(t){if(t&&"object"==typeof t){let r=n.renderers;n=t,r.size>0&&(r.forEach((e,r)=>{rG.add(e),t.renderers.set(r,e)}),rX(e))}}});let t=window.hasOwnProperty,r=!1;rI(window,"hasOwnProperty",{configurable:!0,value:function(...e){try{if(!r&&"__REACT_DEVTOOLS_GLOBAL_HOOK__"===e[0])return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,r=!0,-0}catch{}return t.apply(this,e)},writable:!0})}catch{rX(e)}return n})(e);try{"u">typeof window&&(window.document?.createElement||window.navigator?.product==="ReactNative")&&rJ()}catch{}let rY=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}};function rZ(e,t,r=!1){if(!e)return null;let n=t(e);if(n instanceof Promise)return(async()=>{if(await n===!0)return e;let a=r?e.return:e.child;for(;a;){let e=await r0(a,t,r);if(e)return e;a=r?null:a.sibling}return null})();if(!0===n)return e;let a=r?e.return:e.child;for(;a;){let e=rQ(a,t,r);if(e)return e;a=r?null:a.sibling}return null}let rQ=(e,t,r=!1)=>{if(!e)return null;if(!0===t(e))return e;let n=r?e.return:e.child;for(;n;){let e=rQ(n,t,r);if(e)return e;n=r?null:n.sibling}return null},r0=async(e,t,r=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let n=r?e.return:e.child;for(;n;){let e=await r0(n,t,r);if(e)return e;n=r?null:n.sibling}return null},r1=e=>"function"==typeof e?e:"object"==typeof e&&e?r1(e.type||e.render):null,r2=e=>{if("string"==typeof e)return e;if("function"!=typeof e&&!("object"==typeof e&&e))return null;let t=e.displayName||e.name||null;if(t)return t;let r=r1(e);return r&&(r.displayName||r.name)||null},r5=()=>{let e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;return!!e?._instrumentationIsActive||rW(e)||rq(e)},r4=new Set,r3=e=>{let t=e.alternate;if(!t)return e;if(t.actualStartTime&&e.actualStartTime)return t.actualStartTime>e.actualStartTime?t:e;for(let t of r4){let r=rZ(t.current,t=>{if(t===e)return!0});if(r)return r}return e},r7=new WeakMap,r8=e=>{if(!rD.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"))return null;let t=e;for(;t.return;)t=t.return;let r=nn.get(t.stateNode);return void 0===r?null:rJ().renderers?.get(r)??null},r6=new Set,r9=new Set,ne=new Set,nt=new Set,nr=new WeakMap,nn=new WeakMap,na=e=>{let t,r=rJ(e.onActive);r._instrumentationSource=e.name??rL,(e=>{let t=nr.get(e)??{};if(nr.set(e,t),!t.onCommitFiberRoot||e.onCommitFiberRoot!==t.onCommitFiberRoot){let r=e.onCommitFiberRoot,n=(t,a,i)=>{if(r?.(t,a,i),nr.get(e)?.onCommitFiberRoot===n)for(let e of(r4.add(a),nn.set(a,t),r6))e(t,a,i)};t.onCommitFiberRoot=n,e.onCommitFiberRoot=n}if(!t.onCommitFiberUnmount||e.onCommitFiberUnmount!==t.onCommitFiberUnmount){let r=e.onCommitFiberUnmount,n=(t,a)=>{if(r?.(t,a),nr.get(e)?.onCommitFiberUnmount===n)for(let e of r9)e(t,a)};t.onCommitFiberUnmount=n,e.onCommitFiberUnmount=n}if(!t.onPostCommitFiberRoot||e.onPostCommitFiberRoot!==t.onPostCommitFiberRoot){let r=e.onPostCommitFiberRoot,n=(t,a)=>{if(r?.(t,a),nr.get(e)?.onPostCommitFiberRoot===n)for(let e of ne)e(t,a)};t.onPostCommitFiberRoot=n,e.onPostCommitFiberRoot=n}if(!t.onScheduleFiberRoot||e.onScheduleFiberRoot!==t.onScheduleFiberRoot){let r=e.onScheduleFiberRoot,n=(t,a,i)=>{if(r?.(t,a,i),nr.get(e)?.onScheduleFiberRoot===n)for(let e of nt)e(t,a,i)};t.onScheduleFiberRoot=n,e.onScheduleFiberRoot=n}})(r);let{onActive:n,onCommitFiberRoot:a,onCommitFiberUnmount:i,onPostCommitFiberRoot:o,onScheduleFiberRoot:l}=e;return a&&r6.add(a),i&&r9.add(i),o&&ne.add(o),l&&nt.add(l),Object.assign(t=()=>{n&&rK.delete(n),a&&r6.delete(a),i&&r9.delete(i),o&&ne.delete(o),l&&nt.delete(l)},{[Symbol.dispose]:t})},ni=new Set,no=e=>e.startsWith("__reactContainer$")||e.startsWith("__reactInternalInstance$")||e.startsWith("__reactFiber"),nl=new WeakMap,ns=e=>nl.get(e)??null,nc=e=>ns(e)?.getFiber()??(e=>{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t?.renderers)for(let r of t.renderers.values())try{let t=r.findFiberByHostInstance?.(e);if(t)return t}catch{}if("object"==typeof e&&e){if("_reactRootContainer"in e)return e._reactRootContainer?._internalRoot?.current?.child;let t=e.__internalInstanceHandle??e._internalInstanceHandle;if(t&&"object"==typeof t&&"pendingProps"in t&&!("containerInfo"in t))return t;for(let t of ni){let r=e[t];if(r)return r}for(let t of Object.keys(e))if(no(t))return ni.add(t),e[t]||null;for(let t of r4){if(r8(t.current)?.findFiberByHostInstance)continue;let r=rZ(t.current,t=>t.stateNode===e);if(r)return r}}return null})(e);new WeakMap,new WeakMap;let nd=e=>{let t=e.ownerDocument?.defaultView;return!!(t&&e instanceof t.ShadowRoot)};var nu=class extends Error{constructor(e,t){super(e,t),this.name="ReactGrabError"}},np=class extends nu{constructor(){super("Can't generate CSS selector for non-element node type."),this.name="NonElementNodeError"}},nh=class extends nu{constructor(e){super(`Timeout: Can't find a unique selector after ${e}ms`),this.name="SelectorTimeoutError",this.timeoutMs=e}},nm=class extends nu{constructor(){super("Selector was not found."),this.name="SelectorNotFoundError"}};let nf=e=>ns(e)?.getTagName()??(e.tagName||"").toLowerCase(),ng=(new WeakMap,e=>"object"==typeof e&&!!e&&"nodeType"in e&&9===e.nodeType),nv=e=>{if(e.assignedSlot)return e.assignedSlot;if(e.parentElement)return e.parentElement;let t=e.getRootNode();return nd(t)?t.host:ng(t)?rF(t.defaultView):null},nw="u">typeof window,nb=nw?(Object.getOwnPropertyDescriptor(Window.prototype,"requestAnimationFrame")?.value??window.requestAnimationFrame).bind(window):e=>0,ny=nw?(Object.getOwnPropertyDescriptor(Window.prototype,"cancelAnimationFrame")?.value??window.cancelAnimationFrame).bind(window):e=>{},nx="u">typeof Element&&"function"==typeof Element.prototype.checkVisibility,n_={checkOpacity:!0,checkVisibilityCSS:!0,opacityProperty:!0,visibilityProperty:!0},nk={checkVisibilityCSS:!0,visibilityProperty:!0},nN=new WeakMap,nS=new Set(["A","AUDIO","BUTTON","CANVAS","DETAILS","EMBED","IFRAME","IMG","INPUT","METER","OBJECT","OPTION","PROGRESS","SELECT","SUMMARY","SVG","TEXTAREA","VIDEO"]),nE=new Set(["button","checkbox","combobox","gridcell","link","listbox","menuitem","menuitemcheckbox","menuitemradio","option","radio","scrollbar","searchbox","slider","spinbutton","switch","tab","textbox","treeitem"]),nM=new Set("A.ABBR.B.BDI.BDO.BR.CITE.CODE.DATA.DEL.DFN.EM.I.INS.KBD.MARK.Q.S.SAMP.SMALL.SPAN.STRONG.SUB.SUP.TIME.U.VAR.WBR".split(".")),nC=new WeakMap,nT=new WeakMap,nA=(e,t)=>{if(0!==e.length)throw 1===e.length?e[0]:AggregateError(e,t)},nz=new Set,n$=new Set;new WeakMap,new WeakMap;let nR=new WeakMap,nO=new WeakMap,nj=new WeakMap,nP=e=>"object"==typeof e&&!!e,nF=(e,t)=>"function"==typeof e[t],nL=e=>{var t,r,n;let a,i,o,l,s;return nP(e)&&nP(t=e.gl)&&nP(a=t.domElement)&&"string"==typeof a.tagName&&"canvas"===a.tagName.toLowerCase()&&nF(a,"getContext")&&nP(n=r=e.scene)&&!0===n.isObject3D&&"string"==typeof n.uuid&&"string"==typeof n.name&&"string"==typeof n.type&&"boolean"==typeof n.visible&&nP(i=n.matrixWorld)&&nF(i,"clone")&&nF(i,"premultiply")&&nF(n,"updateWorldMatrix")&&!0===r.isScene&&Array.isArray(r.children)&&nP(o=e.camera)&&!0===o.isCamera&&nP(l=e.raycaster)&&nF(l,"setFromCamera")&&nF(l,"intersectObjects")&&nP(s=e.pointer)&&nF(s,"set")},nI=e=>nP(e)&&"number"==typeof e.elapsedTime,nD=(e,t)=>{let r=e.getState();if("function"!=typeof r.setFrameloop)return;let n=nI(r.clock)?r.clock.elapsedTime:null;r.setFrameloop(t);let a=e.getState().clock;null!==n&&nI(a)&&(a.elapsedTime=n)},nB=e=>{var t;let r,n=nj.get(e);n&&(nj.delete(e),nR.get(n.canvas)===n.root&&(nR.delete(n.canvas),t=n.canvas,(r=nO.get(t))&&(nO.delete(t),r())))};na({name:"react-grab-three-selection",onCommitFiberRoot:(e,t)=>(e=>{let t=(e=>{let t,r=e.current.stateNode;if(!nP(r)||!("object"==typeof(t=r.containerInfo)&&t||"function"==typeof t))return null;let n=r.containerInfo,a=Reflect.get(n,"getState");if("function"!=typeof a)return null;let i=Reflect.apply(a,n,[]);return nL(i)?()=>{let e=Reflect.apply(a,n,[]);return nL(e)?e:i}:null})(e);if(!t)return void nB(e);let r=t().gl.domElement;if(!r.isConnected||!e.current.child)return void nB(e);let n=nj.get(e);n&&n.canvas!==r&&(nB(e),n=void 0),n?(n.root.getState=t,n.root.selectableObjects=null):(n={canvas:r,root:{getState:t,selectableObjects:null}},nj.set(e,n)),nR.set(r,n.root),(e=>{var t;if(nO.has(e))return;let r=null,n=(t={freeze:()=>{let t,n=nR.get(e);if(!n)return;let a=n.getState();if(("always"===(t=a.frameloop)||"demand"===t||"never"===t)&&"function"==typeof a.setFrameloop){let e=a.frameloop;nD(n,"never"),r=()=>nD(n,e)}},isConnected:()=>e.isConnected,unfreeze:()=>{r?.(),r=null}},nz.add(t),()=>{let e=[];((e,t)=>{if(n$.has(e))try{e.unfreeze()}catch(e){t.push(e)}finally{n$.delete(e)}})(t,e),nz.delete(t),nA(e,"Unregistering renderer freeze failed")});nO.set(e,n)})(r)})(t)});let nU=null,nW=!1,nH=new Map,nV=new WeakSet,nq=new WeakSet,nK=new WeakMap,nG=new Map,nX=new Map;"u">typeof window&&(window.requestAnimationFrame=e=>((e=>{if(nU===e&&(nW=!0),nV.has(e))return;if(nU===e){let t=(nK.get(e)??0)+1;return nK.set(e,t),!(t<4)&&nV.add(e)}return})(e),nb(t=>{let r=nU,n=nW;nU=e,nW=!1;try{e(t)}finally{let t=nW;nU=r,nW=n,t||nq.has(e)||(nV.delete(e),nK.delete(e))}})),window.cancelAnimationFrame=e=>{if(nH.has(e))return void nH.delete(e);let t=nX.get(e);if(void 0!==t){ny(t.nativeId),nX.delete(e);return}let r=nG.get(e);if(void 0!==r){nH.delete(r),nG.delete(e);return}ny(e)});new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;let nJ=new WeakMap;na({name:"react-grab-freeze-updates",onCommitFiberRoot:(e,t)=>{let r=rJ().renderers.get(e);r&&nJ.set(t,r)}});try{var nY="u">typeof window?window:e.g;nY._sentryModuleMetadata=nY._sentryModuleMetadata||{},nY._sentryModuleMetadata[(new nY.Error).stack]=Object.assign({},nY._sentryModuleMetadata[(new nY.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let nZ=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,nQ=["rsc://","file:///","webpack-internal://","webpack://","node:","turbopack://","metro://","/app-pages-browser/","/(app-pages-browser)/"],n0=["rsc://","about://React/"],n1=["<anonymous>","eval",""],n2=/\.(jsx|tsx|ts|js)$/,n5=/(\.min|bundle|chunk|vendor|vendors|runtime|polyfill|polyfills)\.(js|mjs|cjs)$|(chunk|bundle|vendor|vendors|runtime|polyfill|polyfills|framework|app|main|index)[-_.][A-Za-z0-9_-]{4,}\.(js|mjs|cjs)$|[\da-f]{8,}\.(js|mjs|cjs)$|[-_.][\da-f]{20,}\.(js|mjs|cjs)$|\/dist\/|\/build\/|\/.next\/|\/out\/|\/node_modules\/|\.webpack\.|\.vite\.|\.turbopack\./i,n4=/^\?[\w~.-]+(?:=[^&#]*)?(?:&[\w~.-]+(?:=[^&#]*)?)*$/,n3=/\(at [^)]+\)$/,n7=["react_stack_bottom_frame","react-stack-bottom-frame"],n8=/(^|@)\S+:\d+/,n6=/^\s*at .*(\S+:\d+|\(native\))/m,n9=/^(eval@)?(\[native code\])?$/,ae=(e,t)=>{if(t?.includeInElement!==!1){let r=e.split(`
`),n=[];for(let e of r)if(/^\s*at\s+/.test(e)){let t=an(e,void 0)[0];t&&n.push(t)}else if(/^\s*in\s+/.test(e)){let t=e.replace(/^\s*in\s+/,"").replace(/\s*\(at .*\)$/,"");n.push({functionName:t,source:e})}else if(e.match(n8)){let t=aa(e,void 0)[0];t&&n.push(t)}return ar(n,t)}return e.match(n6)?an(e,t):aa(e,t)},at=e=>{if(!e.includes(":"))return[e,void 0,void 0];let t=e.startsWith("(")&&/:\d+\)$/.test(e)?e.slice(1,-1):e,r=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t);return r?[r[1],r[2]||void 0,r[3]||void 0]:[t,void 0,void 0]},ar=(e,t)=>t&&null!=t.slice?Array.isArray(t.slice)?e.slice(t.slice[0],t.slice[1]):e.slice(0,t.slice):e,an=(e,t)=>ar(e.split(`
`).filter(e=>!!e.match(n6)),t).map(e=>{let t=e;t.includes("(eval ")&&(t=t.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));let r=t.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),n=r.match(/ (\(.+\)$)/);r=n?r.replace(n[0],""):r;let a=at(n?n[1]:r);return{functionName:n&&r||void 0,fileName:["eval","<anonymous>"].includes(a[0])?void 0:a[0],lineNumber:a[1]?+a[1]:void 0,columnNumber:a[2]?+a[2]:void 0,source:t}}),aa=(e,t)=>ar(e.split(`
`).filter(e=>!e.match(n9)),t).map(e=>{let t=e;if(t.includes(" > eval")&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),!t.includes("@")&&!t.includes(":"))return{functionName:t};{let e=/(([^\n\r"\u2028\u2029]*".[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*(?:@[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*)*(?:[\n\r\u2028\u2029][^@]*)?)?[^@]*)@/,r=t.match(e),n=r&&r[1]?r[1]:void 0,a=at(t.replace(e,""));return{functionName:n,fileName:a[0],lineNumber:a[1]?+a[1]:void 0,columnNumber:a[2]?+a[2]:void 0,source:t}}}),ai=new WeakMap,ao=e=>n7.some(t=>e.includes(t)),al=e=>{let t=e.getFunctionName?.()??"";if(t)return t;let r=e.getTypeName?.()??"",n=e.getMethodName?.()??"";return r&&n?`${r}.${n}`:n},as=e=>{let t,r=ai.get(e);if(r)return r;let n=null,a=Error.prepareStackTrace;Error.prepareStackTrace=(e,t)=>{n=(e=>{let t=[];for(let r=1;r<e.length;r++){let n=e[r],a=al(n);if(ao(a))return{frames:t,isTrusted:!0};if(n.isNative?.()){t.push({functionName:a||void 0});continue}let i=n.getScriptNameOrSourceURL?.()??"";!i&&n.isEval?.()&&(i=n.getEvalOrigin?.()??""),t.push({functionName:a&&"<anonymous>"!==a?a:void 0,fileName:i&&"<anonymous>"!==i?i:void 0,lineNumber:n.getLineNumber?.()??void 0,columnNumber:n.getColumnNumber?.()??void 0,enclosingLineNumber:n.getEnclosingLineNumber?.()??void 0,enclosingColumnNumber:n.getEnclosingColumnNumber?.()??void 0,source:`    at ${n.toString()}`})}return{frames:t,isTrusted:!1}})(t);let r=`${e.name||"Error"}: ${e.message||""}`;for(let e of t)r+=`
    at ${e.toString()}`;return r};try{t=String(e.stack)}finally{Error.prepareStackTrace=a}let i=n??(e=>{let t=-1;for(let r of n7)if(-1!==(t=e.indexOf(r)))break;return{frames:ae(-1===t?e:e.slice(0,e.lastIndexOf(`
`,t))).slice(1),isTrusted:-1!==t}})(t);return ai.set(e,i),i};var ac="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ad=new Uint8Array(64),au=new Uint8Array(128);for(let e=0;e<ac.length;e++){let t=ac.charCodeAt(e);ad[e]=t,au[t]=e}function ap(e,t){let r=0,n=0,a=0;do r|=(31&(a=au[e.next()]))<<n,n+=5;while(32&a)let i=1&r;return r>>>=1,i&&(r=-0x80000000|-r),t+r}function ah(e,t){return!(e.pos>=t)&&44!==e.peek()}var am=class{constructor(e){this.pos=0,this.buffer=e}next(){return this.buffer.charCodeAt(this.pos++)}peek(){return this.buffer.charCodeAt(this.pos)}indexOf(e){let{buffer:t,pos:r}=this,n=t.indexOf(e,r);return -1===n?t.length:n}};function af(e){let{length:t}=e,r=new am(e),n=[],a=0,i=0,o=0,l=0,s=0;do{let e=r.indexOf(";"),t=[],c=!0,d=0;for(a=0;r.pos<e;){let n;(a=ap(r,a))<d&&(c=!1),d=a,ah(r,e)?(i=ap(r,i),o=ap(r,o),l=ap(r,l),n=ah(r,e)?[a,i,o,l,s=ap(r,s)]:[a,i,o,l]):n=[a],t.push(n),r.pos++}c||t.sort(ag),n.push(t),r.pos=e+1}while(r.pos<=t)return n}function ag(e,t){return e[0]-t[0]}let av=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,aw=/^data:application\/json[^,]+base64,/,ab=/(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/,ay=new Map,ax=new Map,a_=(e,t,r,n,a)=>{if(r<0||r>=e.length)return null;let i=e[r];if(!i||0===i.length)return null;let o=null,l=0,s=i.length-1;for(;l<=s;){let e=l+s>>1;i[e][0]<=n?(o=i[e],l=e+1):s=e-1}if(!o||o.length<4)return null;let[,c,d,u]=o;if(void 0===c||void 0===d||void 0===u)return null;let p=t[c];return p?{columnNumber:u,fileName:p,lineNumber:d+1,isIgnoreListed:a?.has(c)??!1}:null},ak=e=>{let t=e.ignoreList??e.x_google_ignoreList;return Array.isArray(t)&&t.length>0?new Set(t):void 0},aN=e=>{if(!e)return!1;let t=e.trim();if(!t)return!1;let r=t.match(av);if(!r)return!0;let n=r[0].toLowerCase();return"http:"===n||"https:"===n},aS=async(e,t=fetch)=>{if(!aN(e))return null;let r=await t(e);if(!r.ok)return null;let n=await r.text();if(!n)return null;let a=((e,t)=>{let r,n=t.length;for(;n>0&&!r;){let e=t.lastIndexOf(`
`,n-1)+1,a=t.slice(e,n).match(ab);a&&(r=a[1]||a[2]),n=e-1}if(!r)return null;let a=av.test(r);if(!(aw.test(r)||a||r.startsWith("/"))){let t=e.split("/");t[t.length-1]=r,r=t.join("/")}return r})(e,n);if(!a||!aN(a)&&!aw.test(a))return null;let i=await t(a);if(!i.ok)return null;try{let e=await i.json();return"sections"in e?(e=>{let t=e.sections.map(({map:e,offset:t})=>({map:{...e,ignoredSourceIndices:ak(e),mappings:af(e.mappings)},offset:t})),r=new Set;for(let e of t)for(let t of e.map.sources)r.add(t);return{file:e.file,mappings:[],names:[],sections:t,sourceRoot:void 0,sources:Array.from(r),sourcesContent:void 0,version:3}})(e):{file:e.file,ignoredSourceIndices:ak(e),mappings:af(e.mappings),names:e.names,sourceRoot:e.sourceRoot,sources:e.sources,sourcesContent:e.sourcesContent,version:3}}catch{return null}},aE=async(e,t=!0,r)=>{if(t&&ay.has(e))return ay.get(e)??null;let n=t?ax.get(e):void 0;if(n)return(await n).sourceMap;let a=aS(e,r).then(e=>({sourceMap:e,isTransientFailure:!1}),()=>({sourceMap:null,isTransientFailure:!0}));t&&ax.set(e,a);let{sourceMap:i,isTransientFailure:o}=await a;return t&&(ax.delete(e),o||ay.set(e,i)),i},aM=async(e,t=!0,r)=>await Promise.all(e.map(async e=>{if(!e.fileName)return e;let n=await aE(e.fileName,t,r);if(!n||"number"!=typeof e.lineNumber||"number"!=typeof e.columnNumber)return e;let a=((e,t,r)=>{if(e.sections){let n=t-1,a=null;for(let t of e.sections)if(n>t.offset.line||n===t.offset.line&&r>=t.offset.column)a=t;else break;if(!a)return null;let i=n-a.offset.line,o=n===a.offset.line?r-a.offset.column:r;return a_(a.map.mappings,a.map.sources,i,o,a.map.ignoredSourceIndices)}return a_(e.mappings,e.sources,t-1,r,e.ignoredSourceIndices)})(n,e.lineNumber,e.columnNumber);return a?{...e,source:a.fileName&&e.source?e.source.replace(e.fileName,a.fileName):e.source,fileName:a.fileName,lineNumber:a.lineNumber,columnNumber:a.columnNumber,isIgnoreListed:a.isIgnoreListed,isSymbolicated:!0}:e})),aC=e=>e._debugStack instanceof Error&&"string"==typeof e._debugStack?.stack,aT=e=>"number"==typeof e.tag,aA=e=>e._debugOwner,az=e=>{let t=null;if(rZ(e,r=>{if(r===e)return!1;let n=r._debugOwner;return(n===e||null!==e.alternate&&n===e.alternate)&&r._debugStack instanceof Error&&(t=r._debugStack,!0)}),!t)return null;let{frames:r,isTrusted:n}=as(t);if(!n)return null;for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.fileName)return{...t,lineNumber:t.enclosingLineNumber||t.lineNumber,columnNumber:t.enclosingColumnNumber||t.columnNumber}}return null},a$=e=>{for(let t of rG){let r=t.currentDispatcherRef;r&&"object"==typeof r&&("H"in r?r.H=e:r.current=e)}},aR=e=>`
    in ${e}`,aO=(e,t)=>{let r=aR(e);return t&&(r+=` (at ${t})`),r},aj=!1,aP=new WeakMap,aF=(e,t)=>{if(!e||aj)return"";let r=aP.get(e);if(void 0!==r)return r;let n=Error.prepareStackTrace;Error.prepareStackTrace=void 0,aj=!0;let a=(()=>{let e=rJ();for(let t of[...Array.from(rG),...Array.from(e.renderers.values())]){let e=t.currentDispatcherRef;if(e&&"object"==typeof e)return"H"in e?e.H:e.current}return null})();a$(null);let i=console.error,o=console.warn;console.error=()=>{},console.warn=()=>{};try{let r={DetermineComponentFrameRoot(){let r;try{if(t){let t=function(){throw Error()};if(Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}let t=e();t&&"function"==typeof t.catch&&t.catch(()=>{})}}catch(e){if(e instanceof Error&&r instanceof Error&&"string"==typeof e.stack)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot",Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name")?.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});let[n,a]=r.DetermineComponentFrameRoot();if(n&&a){let t=n.split(`
`),r=a.split(`
`),i=0,o=0;for(;i<t.length&&!t[i].includes("DetermineComponentFrameRoot");)i++;for(;o<r.length&&!r[o].includes("DetermineComponentFrameRoot");)o++;if(i===t.length||o===r.length)for(i=t.length-1,o=r.length-1;i>=1&&o>=0&&t[i]!==r[o];)o--;for(;i>=1&&o>=0;i--,o--)if(t[i]!==r[o]){if(1!==i||1!==o)do if(i--,--o<0||t[i]!==r[o]){let r=`
${t[i].replace(" at new "," at ")}`,n=r2(e);return n&&r.includes("<anonymous>")&&(r=r.replace("<anonymous>",n)),aP.set(e,r),r}while(i>=1&&o>=0)break}}}finally{aj=!1,Error.prepareStackTrace=n,a$(a),console.error=i,console.warn=o}let l=e?r2(e):"",s=l?aR(l):"";return aP.set(e,s),s},aL=(e,t)=>{let r=e.tag,n="";switch(r){case 28:n=aR("Activity");break;case 1:n=aF(e.type,!0);break;case 11:n=aF(e.type.render,!1);break;case 0:case 15:n=aF(e.type,!1);break;case 5:case 26:case 27:n=aR(e.type);break;case 16:n=aR("Lazy");break;case 13:n=e.child!==t&&null!==t?aR("Suspense Fallback"):aR("Suspense");break;case 19:n=aR("SuspenseList");break;case 30:n=aR("ViewTransition");break;default:return""}return n},aI=e=>{let t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;let r=e;if(!r)return"";Error.prepareStackTrace=t,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29));let n=r.indexOf(`
`);-1!==n&&(r=r.slice(n+1));let a=Math.max(r.indexOf("react_stack_bottom_frame"),r.indexOf("react-stack-bottom-frame"));return(-1!==a&&(a=r.lastIndexOf(`
`,a)),-1===a)?"":r=r.slice(0,a)},aD=e=>!!(e.functionName&&e.fileName&&aU(e.fileName)),aB=(e,t)=>e.fileName===t.fileName&&e.lineNumber===t.lineNumber&&e.columnNumber===t.columnNumber,aU=e=>n0.some(t=>e.startsWith(t)),aW=e=>!e.isServer&&e.fileName&&aU(e.fileName)?{...e,isServer:!0}:e,aH=async(e,t=!0,r)=>{let n,a=(n=[],rZ(e,e=>{if(!aC(e))return;let t="string"==typeof e.type?e.type:r2(e.type)||"<anonymous>";n.push({componentName:t,stackFrames:ae(aI(e._debugStack?.stack))})},!0),n),i=ae((e=>{try{let t="",r=e,n=null;do{t+=aL(r,n);let e=r._debugInfo;if(e&&Array.isArray(e))for(let r=e.length-1;r>=0;r--){let n=e[r];"string"==typeof n.name&&(t+=aO(n.name,n.env))}n=r,r=r.return}while(r)return t}catch(e){return e instanceof Error?`
Error generating stack: ${e.message}
${e.stack}`:""}})(e)),o=(e=>{let t=new Map;for(let r of e)for(let e of r.stackFrames){if(!aD(e))continue;let r=e.functionName,n=t.get(r)??[];n.some(t=>aB(t,e))||(n.push(e),t.set(r,n))}return t})(a),l=new Map;return aM(i.map(e=>e.source?.includes("(at Server)")||null!=e.source&&n3.test(e.source)?((e,t,r)=>{if(!e.functionName)return{...e,isServer:!0};let n=t.get(e.functionName);if(!n||0===n.length)return{...e,isServer:!0};let a=r.get(e.functionName)??0,i=n[a%n.length];return r.set(e.functionName,a+1),{...e,isServer:!0,fileName:i.fileName,lineNumber:i.lineNumber,columnNumber:i.columnNumber,source:e.source?.replace("(at Server)",`(${i.fileName}:${i.lineNumber}:${i.columnNumber})`)}})(e,o,l):e).filter((e,t,r)=>{if(0===t)return!0;let n=r[t-1];return e.functionName!==n.functionName}),t,r)},aV=async(e,t=!0,r)=>{let n=(e=>{let t=[],r=e;for(;r;)if(aT(r)){let e=r;if((r=aA(e))&&aC(e)){let{frames:r,isTrusted:n}=as(e._debugStack);if(n)for(let e of r)t.push(aW(e))}}else{let e=r;if((r=e.owner)&&e.debugStack instanceof Error)for(let r of as(e.debugStack).frames)t.push({...r,isServer:!0})}return t})(e);if(n.length>0){let a=az(e)??{};a.functionName=r2(e.type)??a.functionName;let i=await aM([a,...n],t,r);if(i.some((e,t)=>t>0&&!!e.fileName&&!e.isIgnoreListed))return i}return aH(e,t,r)},aq=e=>e.fileName?{fileName:e.fileName,lineNumber:e.lineNumber,columnNumber:e.columnNumber,functionName:e.functionName}:null,aK=async(e,t=!0,r)=>{let n;if((n=e._debugSource)&&"object"==typeof n&&n&&"fileName"in n&&"string"==typeof n.fileName&&"lineNumber"in n&&"number"==typeof n.lineNumber)return e._debugSource||null;let a=(e=>{if(!aC(e))return null;let{frames:t,isTrusted:r}=as(e._debugStack);if(!r)return null;for(let e of t)if(e.fileName)return e;return null})(e)??az(e);if(a){let[e]=await aM([a],t,r),n=aq(e);if(n)return n}for(let n of(await aH(e,t,r)))if(n.fileName)return aq(n);return null},aG=e=>e.split("/").filter(Boolean).length,aX=e=>{if(!e||n1.some(t=>t===e))return"";let t=e,r=t.startsWith("http://")||t.startsWith("https://");if(r)try{t=new URL(t).pathname}catch{}if(r&&(t=(e=>{let t=e.indexOf("/",1);if(-1===t||1!==aG(e.slice(0,t)))return e;let r=e.slice(t);if(!n2.test(r)||2>aG(r))return e;let n=r.split("/").filter(Boolean)[0]??null;return!n||n.startsWith("@")||n.length>4?e:r})(t)),t.startsWith("about://React/")){let e=t.slice(14),r=e.indexOf("/"),n=e.indexOf(":");t=-1!==r&&(-1===n||r<n)?e.slice(r+1):e}let n=!0;for(;n;)for(let e of(n=!1,nQ))if(t.startsWith(e)){t=t.slice(e.length),"file:///"===e&&(t=`/${t.replace(/^\/+/,"")}`),n=!0;break}if(nZ.test(t)){let e=t.match(nZ);e&&(t=t.slice(e[0].length))}if(t.startsWith("//")){let e=t.indexOf("/",2);t=-1===e?"":t.slice(e)}let a=t.indexOf("?");if(-1!==a){let e=t.slice(a);n4.test(e)&&(t=t.slice(0,a))}return t},aJ=Symbol.for("react.context"),aY=[],aZ=null,aQ=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render."),a0=()=>{let e=aZ;return null!==e&&(aZ=e.next),e},a1=e=>e._currentValue,a2=(e,t,r,n=null)=>{aY.push({displayName:n,primitive:e,stackError:Error(),value:t,dispatcherHookName:r})},a5=e=>(t,r)=>{let n=a0();a0(),a0();let a=Error(),{value:i,error:o}=((e,t)=>{let r,n=null;if(null!==e){let t=e.memoizedState;if("object"==typeof t&&t&&"then"in t&&"function"==typeof t.then)switch(t.status){case"fulfilled":r=t.value;break;case"rejected":n=t.reason;break;default:n=aQ,r=t}else r=t}else r=t;return{value:r,error:n}})(n,r);if(aY.push({displayName:null,primitive:e,stackError:a,value:i,dispatcherHookName:e}),null!==o)throw o;return[i,()=>{},!1]},a4=a5("ActionState"),a3={readContext:a1,use:e=>{if("object"==typeof e&&e){if("function"==typeof e.then){switch(e.status){case"fulfilled":return a2("Promise",e.value,"Use"),e.value;case"rejected":throw e.reason}throw a2("Unresolved",e,"Use"),aQ}if(e.$$typeof===aJ&&"_currentValue"in e){let t=a1(e);return a2("Context (use)",t,"Use",e.displayName||"Context"),t}}throw Error("An unsupported type was passed to use(): "+String(e))},useCallback:e=>{let t=a0();return a2("Callback",null===t?e:t.memoizedState[0],"Callback"),e},useContext:e=>{let t=a1(e);return a2("Context",t,"Context",e.displayName||null),t},useEffect:e=>{a0(),a2("Effect",e,"Effect")},useImperativeHandle:e=>{let t;a0(),"object"==typeof e&&e&&"current"in e&&(t=e.current),a2("ImperativeHandle",t,"ImperativeHandle")},useLayoutEffect:e=>{a0(),a2("LayoutEffect",e,"LayoutEffect")},useInsertionEffect:e=>{a0(),a2("InsertionEffect",e,"InsertionEffect")},useMemo:e=>{let t=a0(),r=null===t?e():t.memoizedState[0];return a2("Memo",r,"Memo"),r},useReducer:(e,t,r)=>{let n=a0(),a=null===n?void 0===r?t:r(t):n.memoizedState;return a2("Reducer",a,"Reducer"),[a,()=>{}]},useRef:e=>{let t=a0(),r=null===t?{current:e}:t.memoizedState;return a2("Ref",r.current,"Ref"),r},useState:e=>{let t=a0(),r=null===t?"function"==typeof e?e():e:t.memoizedState;return a2("State",r,"State"),[r,()=>{}]},useDebugValue:(e,t)=>{a2("DebugValue","function"==typeof t?t(e):e,"DebugValue")},useDeferredValue:e=>{let t=a0(),r=null===t?e:t.memoizedState;return a2("DeferredValue",r,"DeferredValue"),r},useTransition:()=>{let e=a0();a0();let t=null!==e&&e.memoizedState;return a2("Transition",t,"Transition"),[t,()=>{}]},useSyncExternalStore:(e,t)=>{let r=a0();a0();let n=null===r?t():r.memoizedState;return a2("SyncExternalStore",n,"SyncExternalStore"),n},useId:()=>{let e=a0(),t=null===e?"":e.memoizedState;return a2("Id",t,"Id"),t},useHostTransitionStatus:()=>{let e=a1({_currentValue:null});return a2("HostTransitionStatus",e,"HostTransitionStatus"),e},useFormState:a5("FormState"),useActionState:a4,useOptimistic:e=>{let t=a0(),r=null===t?e:t.memoizedState;return a2("Optimistic",r,"Optimistic"),[r,()=>{}]},useMemoCache:e=>[],useCacheRefresh:()=>{let e=a0();return a2("CacheRefresh",null===e?()=>{}:e.memoizedState,"CacheRefresh"),()=>{}},useEffectEvent:e=>(a0(),a2("EffectEvent",e,"EffectEvent"),e)};typeof Proxy>"u"||new Proxy(a3,{get(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t];let r=Error("Missing method in Dispatcher: "+t);throw r.name="ReactDebugToolsUnsupportedHookError",r}});let a7=e=>void 0!==e&&Number.isFinite(e)?Math.max(0,Math.floor(e)):3,a8=/^(?:\.\/)?\/?\([a-z][a-z0-9-]*\)\//,a6=e=>{let t=aX(e);return(t=t.replace(a8,"")).startsWith("./")&&(t=t.slice(2)),t},a9=e=>{try{return decodeURIComponent(e)}catch{return e}},ie=/(?:^|[/\\])node_modules[/\\]/,it=/[/\\]\.vite[/\\]deps[^/\\]*[/\\]/,ir=/\.[mc]?[jt]sx?$/i,ia=/^chunk-[A-Za-z0-9_-]+$/,ii=/[/\\]/,io=/^(.+?)@v?\d/,il=e=>e.split(ii).filter(Boolean),is=e=>{let[t,r]=il(e);return!t||t.startsWith(".")?null:t.startsWith("@")?r?`${t}/${r}`:null:t},ic=e=>{let t=il(e)[0];if(!t)return null;let r=t.replace(ir,"");if(ia.test(r))return null;if(!r.startsWith("@"))return r;let n=r.indexOf("_");return -1===n?null:`${r.slice(0,n)}/${r.slice(n+1)}`},id=(e,t,r)=>{let n=e.split(t);return n.length>1?r(n[n.length-1]):null},iu=e=>e?.match(io)?.[1]??null,ip=/^@[A-Za-z0-9][A-Za-z0-9._-]*$/,ih=/^[A-Za-z0-9][A-Za-z0-9._-]*$/,im=new Set(["app","web","website","frontend","client","src"]),ig=new Set(["app","src","components","pages","features","modules","hooks","lib","utils","ui","shared","common","core","styles","assets"]),iv=e=>{let t;if(!e)return{origin:"unknown",packageName:null};let r=e?(e=>{let t;if(!e)return null;let r=aX(e);return r&&((id(t=a9(r),it,ic)??id(t,ie,is))||(e=>{let t;try{t=new URL(e)}catch{return null}if(!t.hostname)return null;let r=il(t.pathname).map(a9);for(let[e,t]of r.entries()){if(t.startsWith("@")){let n=iu(r[e+1]);if(n)return`${t}/${n}`;continue}let n=iu(t);if(n)return n}return null})(e))||null})(e)??(e=>{let t=(e=>{let t=e;for(;t.startsWith("../")||t.startsWith("./");)t=t.slice(t.startsWith("../")?3:2);return t})(a9(aX(e)));if(t.startsWith("/"))return null;let[r,n,...a]=il(t);return!r||!n||0===a.length||!ip.test(r)||ig.has(r.slice(1))||!ih.test(n)||ir.test(n)||im.has(n)?null:`${r}/${n}`})(e):null;return r?{origin:"package",packageName:r}:!(!(t=aX(e))||!n2.test(t)||n5.test(t))?{origin:"app",packageName:null}:{origin:"unknown",packageName:null}},iw=new Set(["role","name","aria-label","rel","href"]),ib=e=>{if(!/^[a-z-]{3,}$/i.test(e))return!1;for(let t of e.split(/-|[A-Z]/))if(t.length<=2||/[^aeiou]{4,}/i.test(t))return!1;return!0},iy=e=>{let t=e[0].name;for(let r=1;r<e.length;r++)t=`${e[r].name} > ${t}`;return t},ix=e=>{let t=0;for(let r of e)t+=r.penalty;return t},i_=(e,t)=>ix(e)-ix(t),ik=(e,t)=>{let r=e.parentNode;if(!r)return;let n=r.firstChild;if(!n)return;let a=0;for(;n&&(rj(n)&&(void 0===t||n.tagName.toLowerCase()===t)&&a++,n!==e);)n=n.nextSibling;return a},iN=(e,t)=>"html"===e?"html":`${e}:nth-of-type(${t})`,iS=(e,t)=>{let r=[],n=e.getAttribute("id"),a=e.tagName.toLowerCase();for(let t of(n&&ib(n)&&r.push({name:`#${CSS.escape(n)}`,penalty:0}),e.classList))ib(t)&&r.push({name:`.${CSS.escape(t)}`,penalty:1});for(let n of e.attributes)t(n.name,n.value)&&r.push({name:`[${CSS.escape(n.name)}="${CSS.escape(n.value)}"]`,penalty:2});r.push({name:a,penalty:5});let i=ik(e,a);void 0!==i&&r.push({name:iN(a,i),penalty:10});let o=ik(e);return void 0!==o&&r.push({name:"html"===a?"html":`${a}:nth-child(${o})`,penalty:50}),r},iE=(e,t=rC,r=[])=>{if(t<=0)return[];if(0===e.length)return[r];let n=[];for(let a of e[0]){let i=t-n.length;if(i<=0)break;n.push(...iE(e.slice(1),i,[...r,a]))}return n},iM=(e,t)=>1===t.querySelectorAll(iy(e)).length,iC=(e,t)=>{let r=e,n=[];for(;r&&r!==t;){let e=r.tagName.toLowerCase(),t=ik(r,e);if(void 0===t)return;n.push({name:iN(e,t),penalty:10}),r=r.parentElement}return iM(n,t)?n:void 0},iT=/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i,iA=/:r[a-z0-9]+:/i,iz=/_r_[a-z0-9]+_(?:$|-)/i,i$=/«r[a-z0-9]+»/i,iR=/^(?:downshift-\d+(?:-|$)|headlessui-[a-z-]+-\d+(?:-|$)|mui-\d+(?:-|$)|radix-\d+(?:-|$)|react-aria-\d+(?:-|$)|react-select-\d+(?:-|$))/i,iO=/^ember\d+$/i,ij=/^\d+$/,iP=e=>e.length>0&&e.length<=120&&!iA.test(e)&&!iT.test(e)&&!iz.test(e)&&!i$.test(e)&&!iR.test(e)&&!iO.test(e)&&!ij.test(e),iF=new Set(["data-testid","data-test-id","data-test","data-cy","data-qa","aria-label","href","src","role","name","title","alt"]),iL=new Set(["button","link","checkbox","radio","switch","tab","menuitem","option","textbox","combobox","slider","spinbutton"]),iI=e=>e.ownerDocument.body??e.ownerDocument.documentElement,iD=(e,t)=>iF.has(e)&&t.length>0&&t.length<=120&&("role"!==e||t.split(/\s+/).some(e=>iL.has(e))),iB=(e,t)=>{try{let r=e.getRootNode(),n=(nd(r)?r:e.ownerDocument).querySelectorAll(t);return 1===n.length&&n[0]===e}catch{return!1}},iU=e=>{let t=e.getAttribute("id"),r=null;if(t){let n=`#${CSS.escape(t)}`;if(iB(e,n)){if(iP(t))return{selector:n,isSemantic:!0};r=n}}for(let t of iF){let r=e.getAttribute(t);if(!r||!iD(t,r))continue;let n=`[${t}=${JSON.stringify(r)}]`;if(iB(e,n))return{selector:n,isSemantic:!0};let a=`${e.tagName.toLowerCase()}${n}`;if(iB(e,a))return{selector:a,isSemantic:!0}}return r?{selector:r,isSemantic:!1}:null},iW=e=>{let t=ns(e);if(t)return{selector:t.getSelector(),isSemantic:!0};let r=iU(e);if(!r?.isSemantic)return null;let n=e.getRootNode();if(nd(n)){let e=iW(n.host);return e?{selector:`${e.selector} >>> ${r.selector}`,isSemantic:!0}:null}let a=rF(e.ownerDocument.defaultView);if(!a)return r;let i=iW(a);return i?{selector:`${i.selector} >>iframe>> ${r.selector}`,isSemantic:!0}:null},iH=e=>{let t=ns(e);if(t)return{selector:t.getSelector(),isSemantic:!0};let r=(e=>{let t=iU(e);if(t)return t;try{let t=((e,t,r)=>{let n;if(e.nodeType!==Node.ELEMENT_NODE)throw new np;if("html"===e.tagName.toLowerCase())return"html";let a=nd(n=e.getRootNode())?n:ng(t)?t:t.ownerDocument,i=Date.now(),o=[],l=e,s=0,c;for(;l&&l!==a&&!c;)if(o.push(iS(l,r)),l=l.parentElement,++s>=3){let t=iE(o);for(let r of(t.sort(i_),t)){if(Date.now()-i>200){let t=iC(e,a);if(!t)throw new nh(200);return iy(t)}if(iM(r,a)){c=r;break}}}if(!c&&s<3){let e=iE(o);for(let t of(e.sort(i_),e)){if(Date.now()-i>200)break;if(iM(t,a)){c=t;break}}}if(!c)throw new nm;return iy(c)})(e,iI(e),(e,t)=>{let r,n;return r=iw.has(e)||e.startsWith("data-")&&ib(e),n=ib(t)&&t.length<100||t.startsWith("#")&&ib(t.slice(1)),r&&n||iD(e,t)});if(t)return{selector:t,isSemantic:!1}}catch{}return{selector:(e=>{let t=[],r=e.getRootNode(),n=nd(r)?r:iI(e),a=e;for(;a;){let e=a.getAttribute("id");if(e){t.unshift(`#${CSS.escape(e)}`);break}let r=a.parentNode;if(!r){t.unshift(a.tagName.toLowerCase());break}let i=Array.from(r.children).indexOf(a)+1;if(t.unshift(`${a.tagName.toLowerCase()}:nth-child(${i})`),r===n){rj(n)&&t.unshift(n.tagName.toLowerCase());break}a=rj(r)?r:null}return t.join(" > ")})(e),isSemantic:!1}})(e),n=e.getRootNode();if(nd(n)){let e=iH(n.host);return{selector:`${e.selector} >>> ${r.selector}`,isSemantic:e.isSemantic&&r.isSemantic}}let a=rF(e.ownerDocument.defaultView);if(!a)return r;let i=iH(a);return{selector:`${i.selector} >>iframe>> ${r.selector}`,isSemantic:i.isSemantic&&r.isSemantic}},iV=[...Array.from(iF).filter(e=>"role"!==e).map(e=>`[${e}]`),...Array.from(iL).map(e=>`[role~="${e}"]`)].join(","),iq=e=>{let t=e.getAttribute("id");return!!(t&&iP(t)||e.matches(iV))},iK=e=>iq(e)||e.matches("button,input,select,textarea"),iG=e=>{let{body:t,documentElement:r}=e.ownerDocument;if(e===t||e===r)return!0;if(!t)return!1;let n=t.getElementsByTagName("*").length;return 0!==n&&e.getElementsByTagName("*").length/n>=.5},iX=(e,t)=>{let r=e.getRootNode(),n=e;for(;n;){let a=iK(n),i=a&&iG(n);if(a){if(i&&n!==e)return e;if(!t||t(n)||i||!iq(n)&&n===e)return n}let o=nv(n);n=o?.getRootNode()===r?o:null}return e},iJ=[/\/assets\/[^/?#]+-[a-z0-9_-]{6,}\.(?:c|m)?js(?:[?#]|$)/,/\/_next\/static\/.*\.(?:c|m)?js(?:[?#]|$)/,/\/static\/chunks\/.*\.(?:c|m)?js(?:[?#]|$)/],iY=e=>{if(!e)return!1;let t=`/${a6(e)}`.toLowerCase();return iJ.some(e=>e.test(t))},iZ=(e=!1)=>{let t=new URL(document.baseURI);return Array.from(document.scripts).some(r=>{if(!r.src)return!1;try{let n=new URL(r.src,t);return(e||n.origin===t.origin)&&n.pathname.includes("/_next/static/")}catch{return!1}})},iQ=e=>(e&&(t=void 0),t??="u">typeof document&&!!(document.getElementById("__NEXT_DATA__")||document.querySelector("nextjs-portal")||iZ()||Array.from(document.scripts).some(e=>e.textContent?.includes("self.__next_f.push"))&&iZ(!0))),i0=e=>e.map(e=>`
  in ${e}`).join(""),i1=["about://React/","rsc://React/"],i2=e=>i1.some(t=>e.startsWith(t)),i5=e=>{for(let t of i1){if(!e.startsWith(t))continue;let r=e.indexOf("/",t.length);if(-1===r)continue;let n=r+1,a=e.lastIndexOf("?");return a9(a>n?e.slice(n,a):e.slice(n))}return e},i4=e=>{if("object"!=typeof e||!e||!("status"in e)||"fulfilled"!==e.status||!("value"in e)||"object"!=typeof e.value||null===e.value||!("originalStackFrame"in e.value))return null;let t=e.value.originalStackFrame;return"object"==typeof t&&t&&"file"in t&&"string"==typeof t.file&&t.file&&(!("ignored"in t)||!t.ignored)?{file:t.file,line1:"line1"in t&&"number"==typeof t.line1?t.line1:null,column1:"column1"in t&&"number"==typeof t.column1?t.column1:null}:null},i3=async(e,t)=>{let n=[],a=[];for(let t=0;t<e.length;t++){let r=e[t];r.isServer&&r.fileName&&(n.push(t),a.push({file:i5(r.fileName),methodName:r.functionName??"<unknown>",line1:r.lineNumber??null,column1:r.columnNumber??null,arguments:[]}))}if(0===a.length)return e;let i=new AbortController,o=setTimeout(()=>i.abort(),5e3),l=()=>i.abort();t?.aborted&&i.abort(),t?.addEventListener("abort",l);try{let t=await fetch(`${(()=>{if(void 0!==r)return r;let e=document.querySelector('script[src*="/_next/"]')?.src,t=e?new URL(e).pathname:"",n=t.indexOf("/_next/");return r=n>0?t.slice(0,n):""})()}/__nextjs_original-stack-frames`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({frames:a,isServer:!0,isEdgeServer:!1,isAppDirectory:!0}),priority:"high",signal:i.signal});if(!t.ok)return e;let o=await t.json();if(!Array.isArray(o))return e;let l=[...e];for(let t=0;t<n.length;t++){let r=i4(o[t]);if(!r)continue;let a=n[t];l[a]={...e[a],fileName:r.file,lineNumber:r.line1??void 0,columnNumber:r.column1??void 0,isSymbolicated:!0}}return l}catch{return e}finally{clearTimeout(o),t?.removeEventListener("abort",l)}},i7=0,i8=[],i6=async(e,t,r=rM,n)=>{if(!await (n?.aborted?Promise.resolve(!1):i7<3?(i7+=1,Promise.resolve(!0)):new Promise(e=>{let t={abortSignal:n,resolve:e};n&&(t.handleAbort=()=>{let r=i8.indexOf(t);-1!==r&&(i8.splice(r,1),e(!1))},n.addEventListener("abort",t.handleAbort,{once:!0})),i8.push(t)})))return t;let a=new AbortController,i,o=new Promise(e=>{i=setTimeout(()=>{a.abort(),e(t)},r)}),l,s=new Promise(e=>{n&&(l=()=>{a.abort(),e(t)},n.aborted?l():n.addEventListener("abort",l,{once:!0}))});try{let t=e(a.signal);return t.catch(()=>{}),await Promise.race([t,o,s])}finally{clearTimeout(i),l&&n?.removeEventListener("abort",l),(()=>{let e=i8.shift();if(e){e.abortSignal&&e.handleAbort&&e.abortSignal.removeEventListener("abort",e.handleAbort),e.resolve(!0);return}--i7})()}},i9=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),oe=(e,t)=>{if(e.length<=t)return e;let r=Math.max(0,t-3),n=e.slice(0,r),a=n.lastIndexOf("&");return`${a>n.lastIndexOf(";")?n.slice(0,a):n}...`.slice(0,t)},ot=e=>e.startsWith("data-react-grab-"),or=e=>e.replace(/\s+/g," ").trim(),on=e=>!!("true"===e.getAttribute("aria-hidden")||e.hasAttribute("hidden"))||r$.has(e.tagName.toLowerCase()),oa=(e,t,r)=>{if(e.nodeType===Node.TEXT_NODE){let n=or(e.textContent??"");return n?(t.push(n),r-n.length):r}if(!rj(e)||on(e))return r;for(let n of e.childNodes)if((r=oa(n,t,r))<=0)break;return r},oi=(e,t,r)=>`${e}="${oe(i9(t).replace(/"/g,"&quot;").replace(/\r/g,"&#13;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;"),r)}"`,oo=e=>"class"===e||"className"===e||"style"===e,ol=e=>0===e.length?"":e.length<=2?e.map(e=>`<${nf(e)} ...>`).join(`
  `):`(${e.length} elements)`,os=e=>{let t=ns(e);if(t)return t.getPreview();let r=nf(e),n=(e=>{let t=(e=>{let t=[];for(let r of rT){if(t.length>=8)break;let n=e.getAttribute(r);if(!n)continue;let a="class"===r?15:120;t.push(oi(r,n,a))}return t})(e).map(e=>` ${e}`),r=[],n=[];for(let{name:t,value:a}of e.attributes)ot(t)||rT.includes(t)||oo(t)||(rA.has(t)?r.push(a?` ${oi(t,a,120)}`:` ${t}`):a&&n.push(` ${oi(t,a,15)}`));return[...t,...r,...n].slice(0,8).join("")})(e),a=((e,t)=>{if(on(e))return"";let r=(e=>{let t=[];for(let r of e.childNodes){if(r.nodeType!==Node.TEXT_NODE)continue;let e=or(r.textContent??"");e&&t.push(e)}return t.join(" ")})(e);if(!rz.has(t)||r&&0===e.children.length)return r;let n=[];return oa(e,n,100),n.join(" ")})(e,r),i=[],o=[],l=!1;for(let t of e.childNodes)t.nodeType!==Node.COMMENT_NODE&&(t.nodeType===Node.TEXT_NODE?t.textContent&&t.textContent.trim().length>0&&(l=!0):rj(t)&&(l?o.push(t):i.push(t)));let s=a.length>0&&rz.has(r),c="",d=ol(i);d&&!s&&(c+=`
  ${d}`),a&&(c+=`
  ${oe(i9(a),100)}`);let u=ol(o);return u&&!s&&(c+=`
  ${u}`),c.length>0?`<${r}${n}>${c}
</${r}>`:`<${r}${n} />`},oc=new Set(["_","$","motion.","styled.","chakra.","ark.","Primitive.","Slot."]),od=new Set("AppRouter.AppRouterAnnouncer.AppDevOverlay.AppDevOverlayErrorBoundary.ClientPageRoot.ClientSegmentRoot.DevRootHTTPAccessFallbackBoundary.ErrorBoundary.ErrorBoundaryHandler.GracefulDegradeBoundary.HTTPAccessErrorFallback.HTTPAccessFallbackBoundary.HTTPAccessFallbackErrorBoundary.HandleRedirect.Head.HistoryUpdater.HotReload.InnerLayoutRouter.InnerScrollAndFocusHandler.InnerScrollAndFocusHandlerOld.InnerScrollAndMaybeFocusHandler.InnerScrollHandlerNew.LinkComponent.LoadableComponent.LoadingBoundary.LoadingBoundaryProvider.NotAllowedRootHTTPFallbackError.OfflineProvider.OuterLayoutRouter.RedirectBoundary.RedirectErrorBoundary.RenderFromTemplateContext.RenderValidationBoundaryAtThisLevel.ReplaySsrOnlyErrors.RootErrorBoundary.RootLevelDevOverlayElement.Router.ScrollAndFocusHandler.ScrollAndMaybeFocusHandler.SegmentBoundaryTrigger.SegmentBoundaryTriggerNode.SegmentStateProvider.SegmentTrieNode.SegmentViewNode.SegmentViewStateNode.ServerRoot.body.html".split(".")),ou=new Set(["<anonymous>","<unknown>","Anonymous","Unknown"]),op=new Set(["Suspense","Fragment","StrictMode","Profiler","SuspenseList"]),oh=new Set(["MotionDOMComponent","Slot","SlotClone"]),om=[".Consumer",".Context",".Provider",".Slot",".SlotClone",".Slottable","ProviderProvider"],of=(e,t=!1)=>{if(ou.has(e)||t&&od.has(e)||op.has(e)||oh.has(e))return!0;for(let t of om)if(e.endsWith(t))return!0;for(let t of oc)if(e.startsWith(t))return!0;return!1},og=(e,t,r)=>{e.get(t)===r&&e.delete(t)},ov=async(e,t)=>{for(let t=0;t<2;t+=1){let r=e();if(!r)break;let n=await r.valuePromise;if(r.isCurrent()||1===t)return n}return t()},ow=(e,t)=>!(e.length<=1||of(e,t)||e[0]!==e[0].toUpperCase()),ob=(e,t)=>e&&ow(e,t)?e:null,oy=e=>!(e=>{if(!e)return!1;let t=`/${a6(e)}/`.toLowerCase();return rE.some(e=>t.includes(e))})(e)&&!iY(e),ox=e=>{if(!r5())return e;let t=e;for(;t?.ownerDocument===e.ownerDocument;){if(nc(t))return t;if(t.parentElement){t=t.parentElement;continue}let e=t.getRootNode();t=nd(e)?e.host:null}return e},o_=e=>{let t=e.return?.child??null;for(;t;){if(t!==e&&null!==t.key)return!0;t=t.sibling}return!1},ok=new WeakMap,oN=new WeakMap,oS=e=>{let t,r,n,a,i=ox(e),o=nc(i);if(!o)return null;let l=r3(o);return{element:i,fiber:l,revision:(t=l.alternate,r=l._debugOwner,n=l._debugSource,a=l._debugStack,{matches:e=>(e===l||e===t||e.alternate===l)&&e._debugOwner===r&&e._debugSource===n&&e._debugStack===a})}},oE=(e,t)=>{let r=oS(e);return!!(r&&r.element===t.element&&t.revision.matches(r.fiber))},oM=e=>t=>fetch(t,{signal:e,priority:"high"}),oC=async e=>{let[t,r]=await Promise.all([(e=>{let t,r=oN.get(e.element);if(r?.revision.matches(e.fiber))return r.promise;let n=new AbortController,a=(t=e.fiber,i6(async e=>{try{let r,n=await aK(t,!0,oM(e));if(!n?.fileName)return null;let a=iQ();return{filePath:a6(n.fileName),lineNumber:n.lineNumber??null,columnNumber:n.columnNumber??null,componentName:ob(n.functionName,a)??(r=t._debugOwner,r&&rY(r)?ob(r2(r.type),a):null),origin:iv(n.fileName).origin}}catch{return null}},null,void 0,n.signal));if(!oE(e.element,e))return a;let i={controller:n,promise:a,revision:e.revision};return oN.set(e.element,i),r?.controller.abort(),i.promise.then(t=>{t||og(oN,e.element,i)}),i.promise})(e),(e=>{let t;if(!r5())return Promise.resolve([]);let r=ok.get(e.element);if(r?.revision.matches(e.fiber))return r.promise;let n=new AbortController,a=(t=e.fiber,i6(async e=>{try{let r=await aV(t,!0,oM(e));return iQ()?await i3(((e,t)=>{let r;if(!t.some(e=>e.isServer&&!e.fileName&&e.functionName))return t;let n=(r=new Map,rZ(e,e=>{if(!aC(e))return!1;let t=aI(e._debugStack.stack);if(!t)return!1;for(let e of ae(t))!e.functionName||!e.fileName||i2(e.fileName)&&(r.has(e.functionName)||r.set(e.functionName,{...e,isServer:!0}));return!1},!0),r);return 0===n.size?t:t.map(e=>{if(!e.isServer||e.fileName||!e.functionName)return e;let t=n.get(e.functionName);return t?{...e,fileName:t.fileName,lineNumber:t.lineNumber,columnNumber:t.columnNumber}:e})})(t,r),e):r}catch{return null}},null,void 0,n.signal));if(!oE(e.element,e))return a;let i={controller:n,promise:a,revision:e.revision};return ok.set(e.element,i),r?.controller.abort(),i.promise.then(t=>{null===t&&og(ok,e.element,i)}),i.promise})(e)]);return{fiber:e.fiber,fiberSource:t,stack:r}},oT=(e,t)=>{let r=iQ(),n=(e,t)=>{let n=e[0]??null;return n?.fileName?{filePath:a6(n.fileName),lineNumber:n.lineNumber??null,columnNumber:n.columnNumber??null,componentName:ob(n.functionName,r),origin:t}:null},a=t.filter(e=>"app"===iv(e.fileName).origin),i=a.filter(e=>oy(e.fileName));return e?.origin==="app"&&oy(e.filePath)?e:n(i,"app")||(e?.origin!=="app"||iY(e.filePath)?n(a,"app")||(e?.origin==="app"||e?.origin==="package"?e:n(t.filter(e=>"package"===iv(e.fileName).origin),"package")):e)},oA=(e,t,r=()=>!0)=>{if(!r5())return[];let n=nc(e);if(!n)return[];let a=iQ(),i=[];return rZ(r3(n),e=>{if(i.length>=t)return!0;if(rY(e)){let t=r2(e.type);t&&((e,t=!1)=>!(!e||of(e,t)))(t,a)&&r(t)&&i.push(t)}return!1},!0),i},oz=["/src/app/","/src/pages/","/app/","/pages/"],o$=(e,t)=>{let r=((e,t)=>{let r=a6(e);if(!t||!r.startsWith("/"))return r;for(let e of oz){let t=r.indexOf(e);if(-1!==t)return`/./${r.slice(t+1)}`}return r})(e.filePath,t),n=t&&e.lineNumber?`${r}:${e.lineNumber}${e.columnNumber?`:${e.columnNumber}`:""}`:r;return e.componentName?`
  in ${e.componentName} (at ${n})`:`
  in ${n}`},oR={isAppSource:!1,consumesBudget:!1},oO=(e,t,r,n)=>{let a=t.packageName,i="app"===t.origin?e.fileName:null;if(e.isServer&&!i&&(r||!e.functionName)){let e=a?`${a} at Server`:"at Server";return{text:`
  in ${r??"<anonymous>"} (${e})`,...oR}}return!i&&r?{text:a?`
  in ${r} (${a})`:`
  in ${r}`,...oR}:a?{text:`
  in ${a}`,...oR}:i?{text:o$({componentName:r,filePath:i,lineNumber:e.lineNumber??null,columnNumber:e.columnNumber??null},n),isAppSource:!0,consumesBudget:oy(i)}:null},oj=(e,t,r)=>{var n,a,i;let o,l,s=((e,t,r)=>{let n,a=r.stack??[],i=(n=oT(r.fiberSource,a),n?.origin==="app"?n:null),o=a7(t.maxLines),l=((e,t={},r=null)=>{let n=a7(t.maxLines),a=Math.max(n,20),i=iQ(),o=[],l=new Set,s=null,c=!1,d=!1,u=!1,p=0,h=e=>{e&&l.add(e)};if(r){let e="app"===r.origin&&oy(r.filePath);d=e,e&&(p+=1),h(r.componentName),o.push(o$(r,i))}for(let t of e){if(!n||o.length>=a)break;let e=iv(t.fileName),l=ob(t.functionName,i),m=e.packageName?`${e.packageName}:${l??""}:${t.isServer?"server":"client"}`:null;if(m&&m===s)continue;if(!c&&l&&l===r?.componentName){c=!0;continue}let f=oO(t,e,l,i);null!==f&&(f.consumesBudget&&p>=n||f.text!==o[o.length-1]&&(f.isAppSource&&f.consumesBudget&&(d=!0),f.consumesBudget&&(p+=1,u=!0),h(l),o.push(f.text),s=m))}return{text:o.join(""),shouldAppendSelectorHint:!d,hasBudgetedStackFrame:u,renderedComponentNames:l,remainingHardLineCapacity:Math.max(0,a-o.length)}})(a,t,i);if(l.text)return l.hasBudgetedStackFrame?l:((e,t,r)=>{let n=Math.min(r,t.remainingHardLineCapacity);if(0===n)return t;let a=iQ(),i=oA(ox(e),n,e=>ow(e,a)&&!t.renderedComponentNames.has(e));return 0===i.length?t:{...t,text:`${t.text}${i0(i)}`,remainingHardLineCapacity:t.remainingHardLineCapacity-i.length}})(e,l,o);let s=oA(ox(e),o),c=Math.max(o,20);return{text:i0(s),shouldAppendSelectorHint:!0,hasBudgetedStackFrame:!1,renderedComponentNames:new Set(s),remainingHardLineCapacity:Math.max(0,c-s.length)}})(e,t,r),c=ox(e),d=((e,t)=>{let r,n=(e=>{if(!r5())return null;let t=nc(ox(e)),r=t?r3(t):null,n=0;for(;r;){if(null!==r.key&&o_(r))return String(r.key);if(rY(r)&&2===(n+=1))break;r=r.return}return null})(e),a=null===n?"":`
  key: ${JSON.stringify(n.length>120?`${n.slice(0,120)}...`:n)}`,i=t.shouldAppendSelectorHint?iH(iX(e)):(e=>{if(ns(e))return iW(e);let t=null;return iX(e,e=>{let r=iW(e);return!!r&&(t=r,!0)}),t})(e),o=i&&(r=t.shouldAppendSelectorHint,r||i.isSemantic)?i.selector:null,l=o?`
  selector: ${o}`:"";return{selector:o,text:`${t.text}${a}${l}`}})(c,s);return{...(n=e,a=r,i=s,o=a.stack??[],l=oT(a.fiberSource,o),{componentName:oA(ox(n),1)[0]??null,fiber:a.fiber,source:l,stack:o,stackContext:i.text}),elementInfo:`${os(c)}${d.text}`,selector:d.selector}};try{var oP="u">typeof window?window:e.g;oP._sentryModuleMetadata=oP._sentryModuleMetadata||{},oP._sentryModuleMetadata[(new oP.Error).stack]=Object.assign({},oP._sentryModuleMetadata[(new oP.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let oF=new Map(["top","right","bottom","left"].flatMap(e=>[[`border-${e}-style`,e],[`border-${e}-color`,e]])),oL=null,oI=new Map,oD=(e,t)=>{let r=oF.get(e);if(!r)return!1;let n=t.getPropertyValue(`border-${r}-width`);return"0px"===n||"0"===n},oB=async e=>{let t=await ((e,t={})=>{let r,n;return r=()=>oj(e,t,{fiber:null,fiberSource:null,stack:[]}),n=async r=>oj(e,t,await oC(r)),ov(()=>{let t=oS(e);return t?{isCurrent:()=>oE(e,t),valuePromise:n(t)}:null},r)})(e),r=os(e),n=(e=>{if(ns(e)?.supportsDomEditing===!1)return"";let t=(e=>{let t=oI.get(e);if(t)return t;let r=oL||((oL=document.createElement("iframe")).style.cssText="position:fixed;left:-9999px;width:0;height:0;border:none;visibility:hidden;",document.body.appendChild(oL),oL),n=r.contentDocument,a=n.createElement(e);n.body.appendChild(a);let i=r.contentWindow.getComputedStyle(a),o=new Map;for(let e of rO){let t=i.getPropertyValue(e);t&&o.set(e,t)}return a.remove(),oI.set(e,o),o})(e.tagName.toLowerCase()),r=getComputedStyle(e),n=[];for(let e of rO){let a=r.getPropertyValue(e);a&&a!==t.get(e)&&(oD(e,r)||n.push(`${e}: ${a};`))}let a=e.getAttribute("class")?.trim(),i=n.join(`
`);return a?i?`className: ${a}

${i}`:`className: ${a}`:i})(e);return{element:e,snippet:t.elementInfo,htmlPreview:r,stackString:t.stackContext,stack:t.stack,componentName:t.componentName,filePath:t.source?.filePath??null,lineNumber:t.source?.lineNumber??null,columnNumber:t.source?.columnNumber??null,fiber:t.fiber,selector:t.selector,styles:n}};var oU=e.i(868770);try{var oW="u">typeof window?window:e.g;oW._sentryModuleMetadata=oW._sentryModuleMetadata||{},oW._sentryModuleMetadata[(new oW.Error).stack]=Object.assign({},oW._sentryModuleMetadata[(new oW.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var oH=Object.defineProperty,oV=(e,t,r)=>{let n;return(n="symbol"!=typeof t?t+"":t)in e?oH(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r};Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});var oq="u">typeof window;function oK(e,t){return t-e}var oG=e=>{let t="",r=new Map;for(let t of e){let{forget:e,time:n,aggregatedCount:a,name:i}=t;r.has(a)||r.set(a,[]);let o=r.get(a);o&&o.push({name:i,forget:e,time:null!=n?n:0})}let n=Array.from(r.keys()).sort(oK),a=[],i=0;for(let e of n){let t=r.get(e);if(!t)continue;let n=function(e){let t=e[0].name,r=Math.min(4,e.length);for(let n=1;n<r;n++)t+=`, ${e[n].name}`;return t}(t),o=function(e){let t=e[0].time;for(let r=1,n=e.length;r<n;r++)t+=e[r].time;return t}(t),l=function(e){for(let t=0,r=e.length;t<r;t++)if(e[t].forget)return!0;return!1}(t);i+=o,t.length>4&&(n+="…"),e>1&&(n+=` \xd7 ${e}`),l&&(n=`\u2728${n}`),a.push(n)}return(t=a.join(", ")).length?(t.length>40&&(t=`${t.slice(0,40)}\u2026`),i>=.01&&(t+=` (${Number(i.toFixed(2))}ms)`),t):null};function oX(e,t){return e===t||e!=e&&t!=t}var oJ=()=>oq?(void 0===window.reactScanIdCounter&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",oY=e=>{let t=e.createOscillator(),r=e.createGain();t.connect(r),r.connect(e.destination);let n=[392,600],a=.3/n.length;n.forEach((r,n)=>{t.frequency.setValueAtTime(r,e.currentTime+n*a)}),t.type="sine",r.gain.setValueAtTime(.12,e.currentTime),r.gain.setTargetAtTime(0,e.currentTime+.21,.05),t.start(),t.stop(e.currentTime+.3)},oZ=re(({size:e=15,name:t,fill:r="currentColor",stroke:n="currentColor",className:a,externalURL:i="",style:o},l)=>{let s=Array.isArray(e)?e[0]:e,c=Array.isArray(e)?e[1]||e[0]:e,d=`${i}#${t}`;return rx("svg",{ref:l,width:`${s}px`,height:`${c}px`,fill:r,stroke:n,className:a,style:{...o,minWidth:`${s}px`,maxWidth:`${s}px`,minHeight:`${c}px`,maxHeight:`${c}px`},children:[rx("title",{children:t}),rx("use",{href:d})]})}),oQ="react-scan-widget-settings-v2",o0="react-scan-widget-collapsed-v1",o1="react-scan-widget-last-view-v1",o2=(e=new Map,t=null,r)=>({nextPart:e,validators:t,classGroupId:r}),o5=[],o4=(e,t,r)=>{if(0==e.length-t)return r.classGroupId;let n=e[t],a=r.nextPart.get(n);if(a){let r=o4(e,t+1,a);if(r)return r}let i=r.validators;if(null===i)return;let o=0===t?e.join("-"):e.slice(t).join("-"),l=i.length;for(let e=0;e<l;e++){let t=i[e];if(t.validator(o))return t.classGroupId}},o3=(e,t)=>{let r=o2();for(let n in e)o7(e[n],r,n,t);return r},o7=(e,t,r,n)=>{let a=e.length;for(let i=0;i<a;i++)o8(e[i],t,r,n)},o8=(e,t,r,n)=>{"string"==typeof e?o6(e,t,r):"function"==typeof e?o9(e,t,r,n):le(e,t,r,n)},o6=(e,t,r)=>{(""===e?t:lt(t,e)).classGroupId=r},o9=(e,t,r,n)=>{lr(e)?o7(e(n),t,r,n):(null===t.validators&&(t.validators=[]),t.validators.push({classGroupId:r,validator:e}))},le=(e,t,r,n)=>{let a=Object.entries(e),i=a.length;for(let e=0;e<i;e++){let[i,o]=a[e];o7(o,lt(t,i),r,n)}},lt=(e,t)=>{let r=e,n=t.split("-"),a=n.length;for(let e=0;e<a;e++){let t=n[e],a=r.nextPart.get(t);a||(a=o2(),r.nextPart.set(t,a)),r=a}return r},lr=e=>"isThemeGetter"in e&&!0===e.isThemeGetter,ln=[],la=(e,t,r,n,a)=>({modifiers:e,hasImportantModifier:t,baseClassName:r,maybePostfixModifierPosition:n,isExternal:a}),li=/\s+/,lo=e=>{let t;if("string"==typeof e)return e;let r="";for(let n=0;n<e.length;n++)e[n]&&(t=lo(e[n]))&&(r&&(r+=" "),r+=t);return r},ll=[],ls=e=>{let t=t=>t[e]||ll;return t.isThemeGetter=!0,t},lc=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,ld=/^\((?:(\w[\w-]*):)?(.+)\)$/i,lu=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,lp=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,lh=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,lm=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,lf=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,lg=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,lv=e=>lu.test(e),lw=e=>!!e&&!Number.isNaN(Number(e)),lb=e=>!!e&&Number.isInteger(Number(e)),ly=e=>e.endsWith("%")&&lw(e.slice(0,-1)),lx=e=>lp.test(e),l_=()=>!0,lk=e=>lh.test(e)&&!lm.test(e),lN=()=>!1,lS=e=>lf.test(e),lE=e=>lg.test(e),lM=e=>!lT(e)&&!lF(e),lC=e=>lV(e,lX,lN),lT=e=>lc.test(e),lA=e=>lV(e,lJ,lk),lz=e=>lV(e,lY,lw),l$=e=>lV(e,lQ,l_),lR=e=>lV(e,lZ,lN),lO=e=>lV(e,lK,lN),lj=e=>lV(e,lG,lE),lP=e=>lV(e,l0,lS),lF=e=>ld.test(e),lL=e=>lq(e,lJ),lI=e=>lq(e,lZ),lD=e=>lq(e,lK),lB=e=>lq(e,lX),lU=e=>lq(e,lG),lW=e=>lq(e,l0,!0),lH=e=>lq(e,lQ,!0),lV=(e,t,r)=>{let n=lc.exec(e);return!!n&&(n[1]?t(n[1]):r(n[2]))},lq=(e,t,r=!1)=>{let n=ld.exec(e);return!!n&&(n[1]?t(n[1]):r)},lK=e=>"position"===e||"percentage"===e,lG=e=>"image"===e||"url"===e,lX=e=>"length"===e||"size"===e||"bg-size"===e,lJ=e=>"length"===e,lY=e=>"number"===e,lZ=e=>"family-name"===e,lQ=e=>"number"===e||"weight"===e,l0=e=>"shadow"===e,l1=(d=()=>{let e=ls("color"),t=ls("font"),r=ls("text"),n=ls("font-weight"),a=ls("tracking"),i=ls("leading"),o=ls("breakpoint"),l=ls("container"),s=ls("spacing"),c=ls("radius"),d=ls("shadow"),u=ls("inset-shadow"),p=ls("text-shadow"),h=ls("drop-shadow"),m=ls("blur"),f=ls("perspective"),g=ls("aspect"),v=ls("ease"),w=ls("animate"),b=()=>["auto","avoid","all","avoid-page","page","left","right","column"],y=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],x=()=>[...y(),lF,lT],_=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],N=()=>[lF,lT,s],S=()=>[lv,"full","auto",...N()],E=()=>[lb,"none","subgrid",lF,lT],M=()=>["auto",{span:["full",lb,lF,lT]},lb,lF,lT],C=()=>[lb,"auto",lF,lT],T=()=>["auto","min","max","fr",lF,lT],A=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],z=()=>["start","end","center","stretch","center-safe","end-safe"],$=()=>["auto",...N()],R=()=>[lv,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...N()],O=()=>[lv,"screen","full","dvw","lvw","svw","min","max","fit",...N()],j=()=>[lv,"screen","full","lh","dvh","lvh","svh","min","max","fit",...N()],P=()=>[e,lF,lT],F=()=>[...y(),lD,lO,{position:[lF,lT]}],L=()=>["no-repeat",{repeat:["","x","y","space","round"]}],I=()=>["auto","cover","contain",lB,lC,{size:[lF,lT]}],D=()=>[ly,lL,lA],B=()=>["","none","full",c,lF,lT],U=()=>["",lw,lL,lA],W=()=>["solid","dashed","dotted","double"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>[lw,ly,lD,lO],q=()=>["","none",m,lF,lT],K=()=>["none",lw,lF,lT],G=()=>["none",lw,lF,lT],X=()=>[lw,lF,lT],J=()=>[lv,"full",...N()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[lx],breakpoint:[lx],color:[l_],container:[lx],"drop-shadow":[lx],ease:["in","out","in-out"],font:[lM],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[lx],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[lx],shadow:[lx],spacing:["px",lw],text:[lx],"text-shadow":[lx],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",lv,lT,lF,g]}],container:["container"],columns:[{columns:[lw,lT,lF,l]}],"break-after":[{"break-after":b()}],"break-before":[{"break-before":b()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:x()}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:S()}],"inset-x":[{"inset-x":S()}],"inset-y":[{"inset-y":S()}],start:[{"inset-s":S(),start:S()}],end:[{"inset-e":S(),end:S()}],"inset-bs":[{"inset-bs":S()}],"inset-be":[{"inset-be":S()}],top:[{top:S()}],right:[{right:S()}],bottom:[{bottom:S()}],left:[{left:S()}],visibility:["visible","invisible","collapse"],z:[{z:[lb,"auto",lF,lT]}],basis:[{basis:[lv,"full","auto",l,...N()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[lw,lv,"auto","initial","none",lT]}],grow:[{grow:["",lw,lF,lT]}],shrink:[{shrink:["",lw,lF,lT]}],order:[{order:[lb,"first","last","none",lF,lT]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:M()}],"col-start":[{"col-start":C()}],"col-end":[{"col-end":C()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:M()}],"row-start":[{"row-start":C()}],"row-end":[{"row-end":C()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":T()}],"auto-rows":[{"auto-rows":T()}],gap:[{gap:N()}],"gap-x":[{"gap-x":N()}],"gap-y":[{"gap-y":N()}],"justify-content":[{justify:[...A(),"normal"]}],"justify-items":[{"justify-items":[...z(),"normal"]}],"justify-self":[{"justify-self":["auto",...z()]}],"align-content":[{content:["normal",...A()]}],"align-items":[{items:[...z(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...z(),{baseline:["","last"]}]}],"place-content":[{"place-content":A()}],"place-items":[{"place-items":[...z(),"baseline"]}],"place-self":[{"place-self":["auto",...z()]}],p:[{p:N()}],px:[{px:N()}],py:[{py:N()}],ps:[{ps:N()}],pe:[{pe:N()}],pbs:[{pbs:N()}],pbe:[{pbe:N()}],pt:[{pt:N()}],pr:[{pr:N()}],pb:[{pb:N()}],pl:[{pl:N()}],m:[{m:$()}],mx:[{mx:$()}],my:[{my:$()}],ms:[{ms:$()}],me:[{me:$()}],mbs:[{mbs:$()}],mbe:[{mbe:$()}],mt:[{mt:$()}],mr:[{mr:$()}],mb:[{mb:$()}],ml:[{ml:$()}],"space-x":[{"space-x":N()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":N()}],"space-y-reverse":["space-y-reverse"],size:[{size:R()}],"inline-size":[{inline:["auto",...O()]}],"min-inline-size":[{"min-inline":["auto",...O()]}],"max-inline-size":[{"max-inline":["none",...O()]}],"block-size":[{block:["auto",...j()]}],"min-block-size":[{"min-block":["auto",...j()]}],"max-block-size":[{"max-block":["none",...j()]}],w:[{w:[l,"screen",...R()]}],"min-w":[{"min-w":[l,"screen","none",...R()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[o]},...R()]}],h:[{h:["screen","lh",...R()]}],"min-h":[{"min-h":["screen","lh","none",...R()]}],"max-h":[{"max-h":["screen","lh",...R()]}],"font-size":[{text:["base",r,lL,lA]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,lH,l$]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ly,lT]}],"font-family":[{font:[lI,lR,t]}],"font-features":[{"font-features":[lT]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,lF,lT]}],"line-clamp":[{"line-clamp":[lw,"none",lF,lz]}],leading:[{leading:[i,...N()]}],"list-image":[{"list-image":["none",lF,lT]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",lF,lT]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:P()}],"text-color":[{text:P()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:[lw,"from-font","auto",lF,lA]}],"text-decoration-color":[{decoration:P()}],"underline-offset":[{"underline-offset":[lw,"auto",lF,lT]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",lF,lT]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",lF,lT]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:F()}],"bg-repeat":[{bg:L()}],"bg-size":[{bg:I()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},lb,lF,lT],radial:["",lF,lT],conic:[lb,lF,lT]},lU,lj]}],"bg-color":[{bg:P()}],"gradient-from-pos":[{from:D()}],"gradient-via-pos":[{via:D()}],"gradient-to-pos":[{to:D()}],"gradient-from":[{from:P()}],"gradient-via":[{via:P()}],"gradient-to":[{to:P()}],rounded:[{rounded:B()}],"rounded-s":[{"rounded-s":B()}],"rounded-e":[{"rounded-e":B()}],"rounded-t":[{"rounded-t":B()}],"rounded-r":[{"rounded-r":B()}],"rounded-b":[{"rounded-b":B()}],"rounded-l":[{"rounded-l":B()}],"rounded-ss":[{"rounded-ss":B()}],"rounded-se":[{"rounded-se":B()}],"rounded-ee":[{"rounded-ee":B()}],"rounded-es":[{"rounded-es":B()}],"rounded-tl":[{"rounded-tl":B()}],"rounded-tr":[{"rounded-tr":B()}],"rounded-br":[{"rounded-br":B()}],"rounded-bl":[{"rounded-bl":B()}],"border-w":[{border:U()}],"border-w-x":[{"border-x":U()}],"border-w-y":[{"border-y":U()}],"border-w-s":[{"border-s":U()}],"border-w-e":[{"border-e":U()}],"border-w-bs":[{"border-bs":U()}],"border-w-be":[{"border-be":U()}],"border-w-t":[{"border-t":U()}],"border-w-r":[{"border-r":U()}],"border-w-b":[{"border-b":U()}],"border-w-l":[{"border-l":U()}],"divide-x":[{"divide-x":U()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":U()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...W(),"hidden","none"]}],"divide-style":[{divide:[...W(),"hidden","none"]}],"border-color":[{border:P()}],"border-color-x":[{"border-x":P()}],"border-color-y":[{"border-y":P()}],"border-color-s":[{"border-s":P()}],"border-color-e":[{"border-e":P()}],"border-color-bs":[{"border-bs":P()}],"border-color-be":[{"border-be":P()}],"border-color-t":[{"border-t":P()}],"border-color-r":[{"border-r":P()}],"border-color-b":[{"border-b":P()}],"border-color-l":[{"border-l":P()}],"divide-color":[{divide:P()}],"outline-style":[{outline:[...W(),"none","hidden"]}],"outline-offset":[{"outline-offset":[lw,lF,lT]}],"outline-w":[{outline:["",lw,lL,lA]}],"outline-color":[{outline:P()}],shadow:[{shadow:["","none",d,lW,lP]}],"shadow-color":[{shadow:P()}],"inset-shadow":[{"inset-shadow":["none",u,lW,lP]}],"inset-shadow-color":[{"inset-shadow":P()}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:P()}],"ring-offset-w":[{"ring-offset":[lw,lA]}],"ring-offset-color":[{"ring-offset":P()}],"inset-ring-w":[{"inset-ring":U()}],"inset-ring-color":[{"inset-ring":P()}],"text-shadow":[{"text-shadow":["none",p,lW,lP]}],"text-shadow-color":[{"text-shadow":P()}],opacity:[{opacity:[lw,lF,lT]}],"mix-blend":[{"mix-blend":[...H(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":H()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[lw]}],"mask-image-linear-from-pos":[{"mask-linear-from":V()}],"mask-image-linear-to-pos":[{"mask-linear-to":V()}],"mask-image-linear-from-color":[{"mask-linear-from":P()}],"mask-image-linear-to-color":[{"mask-linear-to":P()}],"mask-image-t-from-pos":[{"mask-t-from":V()}],"mask-image-t-to-pos":[{"mask-t-to":V()}],"mask-image-t-from-color":[{"mask-t-from":P()}],"mask-image-t-to-color":[{"mask-t-to":P()}],"mask-image-r-from-pos":[{"mask-r-from":V()}],"mask-image-r-to-pos":[{"mask-r-to":V()}],"mask-image-r-from-color":[{"mask-r-from":P()}],"mask-image-r-to-color":[{"mask-r-to":P()}],"mask-image-b-from-pos":[{"mask-b-from":V()}],"mask-image-b-to-pos":[{"mask-b-to":V()}],"mask-image-b-from-color":[{"mask-b-from":P()}],"mask-image-b-to-color":[{"mask-b-to":P()}],"mask-image-l-from-pos":[{"mask-l-from":V()}],"mask-image-l-to-pos":[{"mask-l-to":V()}],"mask-image-l-from-color":[{"mask-l-from":P()}],"mask-image-l-to-color":[{"mask-l-to":P()}],"mask-image-x-from-pos":[{"mask-x-from":V()}],"mask-image-x-to-pos":[{"mask-x-to":V()}],"mask-image-x-from-color":[{"mask-x-from":P()}],"mask-image-x-to-color":[{"mask-x-to":P()}],"mask-image-y-from-pos":[{"mask-y-from":V()}],"mask-image-y-to-pos":[{"mask-y-to":V()}],"mask-image-y-from-color":[{"mask-y-from":P()}],"mask-image-y-to-color":[{"mask-y-to":P()}],"mask-image-radial":[{"mask-radial":[lF,lT]}],"mask-image-radial-from-pos":[{"mask-radial-from":V()}],"mask-image-radial-to-pos":[{"mask-radial-to":V()}],"mask-image-radial-from-color":[{"mask-radial-from":P()}],"mask-image-radial-to-color":[{"mask-radial-to":P()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":y()}],"mask-image-conic-pos":[{"mask-conic":[lw]}],"mask-image-conic-from-pos":[{"mask-conic-from":V()}],"mask-image-conic-to-pos":[{"mask-conic-to":V()}],"mask-image-conic-from-color":[{"mask-conic-from":P()}],"mask-image-conic-to-color":[{"mask-conic-to":P()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:F()}],"mask-repeat":[{mask:L()}],"mask-size":[{mask:I()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",lF,lT]}],filter:[{filter:["","none",lF,lT]}],blur:[{blur:q()}],brightness:[{brightness:[lw,lF,lT]}],contrast:[{contrast:[lw,lF,lT]}],"drop-shadow":[{"drop-shadow":["","none",h,lW,lP]}],"drop-shadow-color":[{"drop-shadow":P()}],grayscale:[{grayscale:["",lw,lF,lT]}],"hue-rotate":[{"hue-rotate":[lw,lF,lT]}],invert:[{invert:["",lw,lF,lT]}],saturate:[{saturate:[lw,lF,lT]}],sepia:[{sepia:["",lw,lF,lT]}],"backdrop-filter":[{"backdrop-filter":["","none",lF,lT]}],"backdrop-blur":[{"backdrop-blur":q()}],"backdrop-brightness":[{"backdrop-brightness":[lw,lF,lT]}],"backdrop-contrast":[{"backdrop-contrast":[lw,lF,lT]}],"backdrop-grayscale":[{"backdrop-grayscale":["",lw,lF,lT]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[lw,lF,lT]}],"backdrop-invert":[{"backdrop-invert":["",lw,lF,lT]}],"backdrop-opacity":[{"backdrop-opacity":[lw,lF,lT]}],"backdrop-saturate":[{"backdrop-saturate":[lw,lF,lT]}],"backdrop-sepia":[{"backdrop-sepia":["",lw,lF,lT]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":N()}],"border-spacing-x":[{"border-spacing-x":N()}],"border-spacing-y":[{"border-spacing-y":N()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",lF,lT]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[lw,"initial",lF,lT]}],ease:[{ease:["linear","initial",v,lF,lT]}],delay:[{delay:[lw,lF,lT]}],animate:[{animate:["none",w,lF,lT]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[f,lF,lT]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:K()}],"rotate-x":[{"rotate-x":K()}],"rotate-y":[{"rotate-y":K()}],"rotate-z":[{"rotate-z":K()}],scale:[{scale:G()}],"scale-x":[{"scale-x":G()}],"scale-y":[{"scale-y":G()}],"scale-z":[{"scale-z":G()}],"scale-3d":["scale-3d"],skew:[{skew:X()}],"skew-x":[{"skew-x":X()}],"skew-y":[{"skew-y":X()}],transform:[{transform:[lF,lT,"","none","gpu","cpu"]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:J()}],"translate-x":[{"translate-x":J()}],"translate-y":[{"translate-y":J()}],"translate-z":[{"translate-z":J()}],"translate-none":["translate-none"],accent:[{accent:P()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:P()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",lF,lT]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mbs":[{"scroll-mbs":N()}],"scroll-mbe":[{"scroll-mbe":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pbs":[{"scroll-pbs":N()}],"scroll-pbe":[{"scroll-pbe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",lF,lT]}],fill:[{fill:["none",...P()]}],"stroke-w":[{stroke:[lw,lL,lA,lz]}],stroke:[{stroke:["none",...P()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},l=e=>{let t=a(e);if(t)return t;let r=((e,t)=>{let{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:a,sortModifiers:i}=t,o=[],l=e.trim().split(li),s="";for(let e=l.length-1;e>=0;e-=1){let t=l[e],{isExternal:c,modifiers:d,hasImportantModifier:u,baseClassName:p,maybePostfixModifierPosition:h}=r(t);if(c){s=t+(s.length>0?" "+s:s);continue}let m=!!h,f=n(m?p.substring(0,h):p);if(!f){if(!m||!(f=n(p))){s=t+(s.length>0?" "+s:s);continue}m=!1}let g=0===d.length?"":1===d.length?d[0]:i(d).join(":"),v=u?g+"!":g,w=v+f;if(o.indexOf(w)>-1)continue;o.push(w);let b=a(f,m);for(let e=0;e<b.length;++e){let t=b[e];o.push(v+t)}s=t+(s.length>0?" "+s:s)}return s})(e,n);return i(e,r),r},o=e=>{var t;let r;return a=(n={cache:(e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=Object.create(null),n=Object.create(null),a=(a,i)=>{r[a]=i,++t>e&&(t=0,n=r,r=Object.create(null))};return{get(e){let t=r[e];return void 0!==t?t:void 0!==(t=n[e])?(a(e,t),t):void 0},set(e,t){e in r?r[e]=t:a(e,t)}}})((t=[].reduce((e,t)=>t(e),d())).cacheSize),parseClassName:(e=>{let{prefix:t,experimentalParseClassName:r}=e,n=e=>{let t,r=[],n=0,a=0,i=0,o=e.length;for(let l=0;l<o;l++){let o=e[l];if(0===n&&0===a){if(":"===o){r.push(e.slice(i,l)),i=l+1;continue}if("/"===o){t=l;continue}}"["===o?n++:"]"===o?n--:"("===o?a++:")"===o&&a--}let l=0===r.length?e:e.slice(i),s=l,c=!1;return l.endsWith("!")?(s=l.slice(0,-1),c=!0):l.startsWith("!")&&(s=l.slice(1),c=!0),la(r,c,s,t&&t>i?t-i:void 0)};if(t){let e=t+":",r=n;n=t=>t.startsWith(e)?r(t.slice(e.length)):la(ln,!1,t,void 0,!0)}if(r){let e=n;n=t=>r({className:t,parseClassName:e})}return n})(t),sortModifiers:(r=new Map,t.orderSensitiveModifiers.forEach((e,t)=>{r.set(e,1e6+t)}),e=>{let t=[],n=[];for(let a=0;a<e.length;a++){let i=e[a],o="["===i[0],l=r.has(i);o||l?(n.length>0&&(n.sort(),t.push(...n),n=[]),t.push(i)):n.push(i)}return n.length>0&&(n.sort(),t.push(...n)),t}),...(e=>{let t=(e=>{let{theme:t,classGroups:r}=e;return o3(r,t)})(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:e=>{if(e.startsWith("[")&&e.endsWith("]")){var r;let t,n,a;return -1===(r=e).slice(1,-1).indexOf(":")?void 0:(n=(t=r.slice(1,-1)).indexOf(":"),(a=t.slice(0,n))?"arbitrary.."+a:void 0)}let n=e.split("-"),a=+(""===n[0]&&n.length>1);return o4(n,a,t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=n[e],a=r[e];if(t){if(a){let e=Array(a.length+t.length);for(let t=0;t<a.length;t++)e[t]=a[t];for(let r=0;r<t.length;r++)e[a.length+r]=t[r];return e}return t}return a||o5}return r[e]||o5}}})(t)}).cache.get,i=n.cache.set,o=l,l(e)},(...e)=>o(((...e)=>{let t,r,n=0,a="";for(;n<e.length;)(t=e[n++])&&(r=lo(t))&&(a&&(a+=" "),a+=r);return a})(...e))),l2=(...e)=>l1(function(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=function e(t){var r,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t)){var i=t.length;for(r=0;r<i;r++)t[r]&&(n=e(t[r]))&&(a&&(a+=" "),a+=n)}else for(n in t)t[n]&&(a&&(a+=" "),a+=n);return a}(e))&&(n&&(n+=" "),n+=t);return n}(e));"u">typeof navigator&&navigator.userAgent.includes("Firefox");var l5=(e,t)=>{let r=0;return n=>{let a=Date.now();if(a-r>=t)return r=a,e(n)}},l4=e=>{if(!oq)return null;try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},l3=(e,t)=>{if(oq)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},l7=e=>{if(oq)try{window.localStorage.removeItem(e)}catch{}},l8=e=>{if(!e)return{name:"Unknown",wrappers:[],wrapperTypes:[]};let{tag:t,type:r,elementType:n}=e,a=X(r),i=[],o=[];if(K(e)||15===t||14===t||(null==r?void 0:r.$$typeof)===Symbol.for("react.memo")||(null==n?void 0:n.$$typeof)===Symbol.for("react.memo")){let t=K(e);o.push({type:"memo",title:t?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:t})}if(24===t&&o.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),13===t&&o.push({type:"suspense",title:"Component that can suspend while content is loading"}),12===t&&o.push({type:"profiler",title:"Component that measures rendering performance"}),"string"==typeof a){let e=/^(\w+)\((.*)\)$/,t=a;for(;e.test(t);){let r=t.match(e);if((null==r?void 0:r[1])&&(null==r?void 0:r[2]))i.unshift(r[1]),t=r[2];else break}a=t}return{name:a||"Unknown",wrappers:i,wrapperTypes:o}},l6=e=>"number"==typeof e&&Number.isFinite(e)&&e>=0,l9=e=>!!e&&"object"==typeof e&&!Array.isArray(e),se=()=>{let e=u0.options.value.safeArea;if(l6(e))return{top:e,right:e,bottom:e,left:e};if(l9(e)){let t=e.top,r=e.right,n=e.bottom,a=e.left;return{top:l6(t)?t:24,right:l6(r)?r:24,bottom:l6(n)?n:24,left:l6(a)?a:24}}return{top:24,right:24,bottom:24,left:24}},st=tC(!1),sr=tC(null),sn=()=>({corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:550,height:350,position:{x:24,y:24}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:550,height:350,position:{x:24,y:24}},componentsTree:{width:240}});sn();var sa=tC((s=sn(),(c=l4(oQ))?{corner:null!=(u=c.corner)?u:s.corner,dimensions:null!=(p=c.dimensions)?p:s.dimensions,lastDimensions:null!=(m=null!=(h=c.lastDimensions)?h:c.dimensions)?m:s.lastDimensions,componentsTree:null!=(f=c.componentsTree)?f:s.componentsTree}:(l3(oQ,{corner:s.corner,dimensions:s.dimensions,lastDimensions:s.lastDimensions,componentsTree:s.componentsTree}),s))),si=()=>{if(!oq)return;let{dimensions:e}=sa.value,{width:t,height:r,position:n}=e,a=se();sa.value={...sa.value,dimensions:{isFullWidth:t>=window.innerWidth-a.left-a.right,isFullHeight:r>=window.innerHeight-a.top-a.bottom,width:t,height:r,position:n}}},so=tC({view:"none"}),sl=l4(o0),ss=tC(null!=sl?sl:null);function sc(){return!1}function sd(e){function t(t){return this.shouldComponentUpdate=sc,eT(e,t)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}var su=new WeakMap,sp={activeFlashes:new Map,create(e){let t,r,n,a=e.querySelector(".react-scan-flash-overlay"),i=a instanceof HTMLElement?a:((t=document.createElement("div")).className="react-scan-flash-overlay",e.appendChild(t),r=(()=>{e.querySelector(".react-scan-flash-overlay")&&this.create(e)}).bind(null,e),document.addEventListener("scroll",r,{passive:!0,capture:!0}),n=()=>{document.removeEventListener("scroll",r,{capture:!0})},this.activeFlashes.set(e,{element:e,overlay:t,scrollCleanup:n}),t),o=su.get(i);o&&(clearTimeout(o),su.delete(i)),requestAnimationFrame(()=>{i.style.transition="none",i.style.opacity="0.9";let t=setTimeout(()=>{i.style.transition="opacity 150ms ease-out",i.style.opacity="0";let t=setTimeout(()=>{i.parentNode&&i.parentNode.removeChild(i);let t=this.activeFlashes.get(e);(null==t?void 0:t.scrollCleanup)&&t.scrollCleanup(),this.activeFlashes.delete(e),su.delete(i)},150);su.set(i,t)},300);su.set(i,t)})},cleanup(e){let t=this.activeFlashes.get(e);if(t){let r=su.get(t.overlay);r&&(clearTimeout(r),su.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(let[,e]of this.activeFlashes)this.cleanup(e.element)}},sh={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},sm=tC(sh),sf=tC(0),sg=[],sv=null,sw=tC({query:"",matches:[],currentMatchIndex:-1}),sb=tC(!1),sy=(e,t=0,r=null)=>e.reduce((e,n,a)=>{var i,o;let l=n.element?(e=>{var t;let r=[],n=e;for(;n;){let e=n.elementType,a="function"==typeof e?e.displayName||e.name:"string"==typeof e?e:"Unknown",i=void 0!==n.index?`[${n.index}]`:"";r.unshift(`${a}${i}`),n=null!=(t=n.return)?t:null}return r.join("::")})(n.fiber):`${r}-${a}`,s=(null==(i=n.fiber)?void 0:i.type)?cP(n.fiber):void 0,c={...n,depth:t,nodeId:l,parentId:r,fiber:n.fiber,renderData:s};return e.push(c),(null==(o=n.children)?void 0:o.length)&&e.push(...sy(n.children,t+1,l)),e},[]),sx=["memo","forwardRef","lazy","suspense"],s_=e=>{let t=e.match(/\[(.*?)\]/);if(!t)return null;let r=[];for(let e of t[1].split(",")){let t=e.trim().toLowerCase();t&&r.push(t)}return r},sk=(e,t)=>{if(0===e.length)return!0;if(!t.length)return!1;for(let r of e){let e=!1;for(let n of t)if(n.type.toLowerCase().includes(r)){e=!0;break}if(!e)return!1}return!0},sN=e=>e>0?e<.1-Number.EPSILON?"< 0.1":e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:"0",sS=({node:e,nodeIndex:t,hasChildren:r,isCollapsed:n,handleTreeNodeClick:a,handleTreeNodeToggle:i,searchValue:o})=>{var l,s,c;let d=tr(null),u=tr(null!=(s=null==(l=e.renderData)?void 0:l.renderCount)?s:0),{highlightedText:p,typeHighlight:h}=tn(()=>{let{query:t,matches:r}=o,n=r.some(t=>t.nodeId===e.nodeId),a=s_(t)||[],i=t?t.replace(/\[.*?\]/,"").trim():"";if(!t||!n)return{highlightedText:rx("span",{className:"truncate",children:e.label}),typeHighlight:!1};let l=!0;if(a.length>0)if(e.fiber){let{wrapperTypes:t}=l8(e.fiber);l=sk(a,t)}else l=!1;let s=rx("span",{className:"truncate",children:e.label});if(i)try{if(i.startsWith("/")&&i.endsWith("/")){let t=i.slice(1,-1),r=RegExp(`(${t})`,"i"),n=e.label.split(r);s=rx("span",{className:"tree-node-search-highlight",children:n.map((t,a)=>r.test(t)?rx("span",{className:l2("regex",{start:r.test(t)&&0===a,middle:r.test(t)&&a%2==1,end:r.test(t)&&a===n.length-1,"!ml-0":1===a}),children:t},`${e.nodeId}-${t}`):t)})}else{let t=e.label.toLowerCase(),r=i.toLowerCase(),n=t.indexOf(r);n>=0&&(s=rx("span",{className:"tree-node-search-highlight",children:[e.label.slice(0,n),rx("span",{className:"single",children:e.label.slice(n,n+i.length)}),e.label.slice(n+i.length)]}))}}catch{}return{highlightedText:s,typeHighlight:l&&a.length>0}},[e.label,e.nodeId,e.fiber,o]);te(()=>{var t;let r=null==(t=e.renderData)?void 0:t.renderCount,n=d.current;n&&u.current&&r&&u.current!==r&&(n.classList.remove("count-flash"),n.offsetWidth,n.classList.add("count-flash"),u.current=r)},[null==(c=e.renderData)?void 0:c.renderCount]);let m=tn(()=>{if(!e.renderData)return null;let{selfTime:t,totalTime:r,renderCount:n}=e.renderData;return n?rx("span",{className:l2("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:rx("span",{ref:d,title:`Self time: ${sN(t)}ms
Total time: ${sN(r)}ms`,className:"count-badge",children:["×",n]})}):null},[e.renderData]),f=tn(()=>{if(!e.fiber)return null;let{wrapperTypes:t}=l8(e.fiber),r=t[0];return rx("span",{className:l2("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[r&&rx(ez,{children:[rx("span",{title:null==r?void 0:r.title,className:l2("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate","memo"===r.type&&"bg-[#8e61e3] text-white",h&&"bg-yellow-300 text-black"),children:r.type},r.type),r.compiler&&rx("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),t.length>1&&`\xd7${t.length}`,m]})},[e.fiber,h,m]);return rx("button",{type:"button",title:e.title,"data-index":t,className:l2("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:a,children:[rx("button",{type:"button","data-index":t,onClick:i,className:l2("w-6 h-6 flex items-center justify-center","text-left"),children:r&&rx(oZ,{name:"icon-chevron-right",size:12,className:l2("transition-transform",!n&&"rotate-90")})}),p,f]})},sE=()=>{let e=tr(null),t=tr(null),r=tr(null),n=tr(null),a=tr(null),i=tr(0),o=tr(!1),l=tr(!1),s=tr(null),[c,d]=e9([]),[u,p]=e9(new Set),[h,m]=e9(void 0),[f,g]=e9(sw.value),v=tn(()=>{let e=[],t=new Map(c.map(e=>[e.nodeId,e]));for(let r of c){let n=!0,a=r;for(;a.parentId;){let e=t.get(a.parentId);if(!e)break;if(u.has(e.nodeId)){n=!1;break}a=e}n&&e.push(r)}return e},[u,c]),{virtualItems:w,totalSize:b}=(e=>{let{count:t,getScrollElement:r,estimateSize:n,overscan:a=5}=e,[i,o]=e9(0),[l,s]=e9(0),c=tr(),d=tr(null),u=tr(null),p=n(),h=ta(e=>{var t,r;d.current&&s(null!=(r=null==(t=null==e?void 0:e[0])?void 0:t.contentRect.height)?r:d.current.getBoundingClientRect().height)},[]),m=ta(()=>{null!==u.current&&cancelAnimationFrame(u.current),u.current=requestAnimationFrame(()=>{h(),u.current=null})},[h]);te(()=>{let e=r();if(!e)return;d.current=e;let t=()=>{d.current&&o(d.current.scrollTop)};h(),c.current||(c.current=new ResizeObserver(()=>{m()})),c.current.observe(e),e.addEventListener("scroll",t,{passive:!0});let n=new MutationObserver(m);return n.observe(e,{attributes:!0,childList:!0,subtree:!0}),()=>{e.removeEventListener("scroll",t),c.current&&c.current.disconnect(),n.disconnect(),null!==u.current&&cancelAnimationFrame(u.current)}},[r,h,m]);let f=tn(()=>{let e=Math.floor(i/p);return{start:Math.max(0,e-a),end:Math.min(t,e+Math.ceil(l/p)+a)}},[i,p,l,t,a]);return{virtualItems:tn(()=>{let e=[];for(let t=f.start;t<f.end;t++)e.push({key:t,index:t,start:t*p});return e},[f,p]),totalSize:t*p,scrollTop:i,containerHeight:l}})({count:v.length,getScrollElement:()=>e.current,estimateSize:()=>28,overscan:5}),y=ta(t=>{var r;o.current=!0,null==(r=n.current)||r.blur(),sb.value=!0;let{parentCompositeFiber:a}=s1(t);if(!a)return;uQ.inspectState.value={kind:"focused",focusedDomElement:t,fiber:a};let i=v.findIndex(e=>e.element===t);if(-1!==i){m(i);let t=28*i,r=e.current;if(r){let e=r.clientHeight,n=r.scrollTop;(t<n||t+28>n+e)&&r.scrollTo({top:Math.max(0,t-e/2),behavior:"instant"})}}},[v]),x=ta(e=>{let t=Number(e.currentTarget.dataset.index);if(Number.isNaN(t))return;let r=v[t].element;r&&y(r)},[v,y]),_=ta(e=>{p(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},[]),k=ta(e=>{e.stopPropagation();let t=Number(e.target.dataset.index);Number.isNaN(t)||_(v[t].nodeId)},[v,_]),N=ta(t=>{var n,a,i,o,l;null==(n=r.current)||n.classList.remove("!border-red-500");let s=[];if(!t){sw.value={query:t,matches:s,currentMatchIndex:-1};return}if(t.includes("[")&&!t.includes("]")&&t.length>t.indexOf("[")+1){null==(a=r.current)||a.classList.add("!border-red-500");return}let d=s_(t)||[];if(t.includes("[")&&!(e=>{if(0===e.length)return!1;for(let t of e){let e=!1;for(let r of sx)if(r.toLowerCase().includes(t)){e=!0;break}if(!e)return!1}return!0})(d)){null==(i=r.current)||i.classList.add("!border-red-500");return}let u=t.replace(/\[.*?\]/,"").trim(),p=/^\/.*\/$/.test(u),h=e=>!1;if(u.startsWith("/")&&!p&&u.length>1){null==(o=r.current)||o.classList.add("!border-red-500");return}if(p)try{let e=u.slice(1,-1),t=RegExp(e,"i");h=e=>t.test(e)}catch{null==(l=r.current)||l.classList.add("!border-red-500");return}else if(u){let e=u.toLowerCase();h=t=>t.toLowerCase().includes(e)}for(let e of c){let t=!0;if(u&&(t=h(e.label)),t&&d.length>0)if(e.fiber){let{wrapperTypes:r}=l8(e.fiber);t=sk(d,r)}else t=!1;t&&s.push(e)}if(sw.value={query:t,matches:s,currentMatchIndex:s.length>0?0:-1},s.length>0){let t=s[0],r=v.findIndex(e=>e.nodeId===t.nodeId);if(-1!==r){let t=e.current;if(t){let e=t.clientHeight;t.scrollTo({top:Math.max(0,28*r-e/2),behavior:"instant"})}}}},[c,v]),S=ta(e=>{let t=e.currentTarget;t&&N(t.value)},[N]),E=ta(t=>{let{matches:r,currentMatchIndex:n}=sw.value;if(0===r.length)return;let a="next"===t?(n+1)%r.length:(n-1+r.length)%r.length;sw.value={...sw.value,currentMatchIndex:a};let i=r[a],o=v.findIndex(e=>e.nodeId===i.nodeId);if(-1!==o){m(o);let t=28*o,r=e.current;if(r){let e=r.clientHeight;r.scrollTo({top:Math.max(0,t-e/2),behavior:"instant"})}}},[v]),M=ta(r=>{if(t.current&&(t.current.style.width=`${r}px`),e.current){e.current.style.width=`${r}px`;let t=((e,t)=>{if(t<=0)return 24;let r=Math.max(0,e-240);return r<24?0:Math.max(0,Math.min(24,Math.min(.3*r,24*t)/t))})(r,i.current);e.current.style.setProperty("--indentation-size",`${t}px`)}},[]),C=ta(e=>{if(!s.current)return;let t=Math.floor(sa.value.dimensions.width-120);s.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),e<=240?s.current.classList.add("cursor-w-resize"):e>=t?s.current.classList.add("cursor-e-resize"):s.current.classList.add("cursor-ew-resize")},[]),T=ta(t=>{if(t.preventDefault(),t.stopPropagation(),!e.current)return;e.current.style.setProperty("pointer-events","none"),l.current=!0;let r=t.clientX,n=e.current.offsetWidth,a=Math.floor(sa.value.dimensions.width-120);C(n);let i=e=>{let t=n+(r-e.clientX);C(t),M(Math.min(a,Math.max(240,t)))},o=()=>{e.current&&(e.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",o),sa.value={...sa.value,componentsTree:{...sa.value.componentsTree,width:e.current.offsetWidth}},l3(oQ,sa.value),l.current=!1)};document.addEventListener("pointermove",i),document.addEventListener("pointerup",o)},[M,C]);te(()=>{if(e.current)return C(e.current.offsetWidth),sa.subscribe(()=>{e.current&&C(e.current.offsetWidth)})},[C]);let A=ta(()=>{o.current=!1},[]);return te(()=>{let t=!0,r=()=>{let r=a.current;if(!r)return;let n=(e=>{let t=new Map,r=[];for(let{element:r,name:n,fiber:a}of e){if(!r)continue;let e=n,{name:i,wrappers:o}=l8(a);i&&(e=o.length>0?`${o.join("(")}(${i})${")".repeat(o.length)}`:i),t.set(r,{label:i||n,title:e,children:[],element:r,fiber:a})}for(let{element:n,depth:a}of e){if(!n)continue;let e=t.get(n);if(e)if(0===a)r.push(e);else{let r=n.parentElement;for(;r;){let n=t.get(r);if(n){n.children=n.children||[],n.children.push(e);break}r=r.parentElement}}}return r})(s7());if(n.length>0){let a=sy(n);if(i.current=a.reduce((e,t)=>Math.max(e,t.depth),0),M(sa.value.componentsTree.width),d(a),t){t=!1;let n=a.findIndex(e=>e.element===r);if(-1!==n){let t=28*n,r=e.current;r&&setTimeout(()=>{r.scrollTo({top:t,behavior:"instant"})},96)}}}},n=uQ.inspectState.subscribe(e=>{"focused"===e.kind&&(sb.value||(N(""),a.current=e.focusedDomElement,r()))}),o=0,s=sf.subscribe(()=>{"focused"===uQ.inspectState.value.kind&&(cancelAnimationFrame(o),l.current||(o=requestAnimationFrame(()=>{sb.value=!1,r()})))});return()=>{n(),s(),sw.value={query:"",matches:[],currentMatchIndex:-1}}},[]),te(()=>{let e=e=>{if(o.current&&h)switch(e.key){case"ArrowUp":if(e.preventDefault(),e.stopPropagation(),h>0){let e=v[h-1];(null==e?void 0:e.element)&&y(e.element)}return;case"ArrowDown":if(e.preventDefault(),e.stopPropagation(),h<v.length-1){let e=v[h+1];(null==e?void 0:e.element)&&y(e.element)}return;case"ArrowLeft":case"ArrowRight":{e.preventDefault(),e.stopPropagation();let t=v[h];(null==t?void 0:t.nodeId)&&_(t.nodeId);return}}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[h,v,y,_]),te(()=>sw.subscribe(g),[]),te(()=>sa.subscribe(e=>{var r;null==(r=t.current)||r.style.setProperty("transition","width 0.1s"),M(e.componentsTree.width),setTimeout(()=>{var e;null==(e=t.current)||e.style.removeProperty("transition")},500)}),[]),rx("div",{className:"react-scan-components-tree flex",children:[rx("div",{ref:s,onPointerDown:T,className:"relative resize-v-line",children:rx("span",{children:rx(oZ,{name:"icon-ellipsis",size:18})})}),rx("div",{ref:t,className:"flex flex-col h-full",children:[rx("div",{className:"p-2 border-b border-[#1e1e1e]",children:rx("div",{ref:r,title:`Search components by:

\u2022 Name (e.g., "Button") \u2014 Case insensitive, matches any part

\u2022 Regular Expression (e.g., "/^Button/") \u2014 Use forward slashes

\u2022 Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

\u2022 Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

\u2022 Navigation:
   - Enter \u2192 Next match
   - Shift + Enter \u2192 Previous match
   - Cmd/Ctrl + Enter \u2192 Select and focus match
`,className:l2("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[rx(oZ,{name:"icon-search",size:12,className:" text-neutral-500"}),rx("div",{className:"relative flex-1 h-7 overflow-hidden",children:rx("input",{ref:n,type:"text",value:sw.value.query,onClick:e=>{e.stopPropagation(),e.currentTarget.focus()},onPointerDown:e=>{e.stopPropagation()},onKeyDown:e=>{"Escape"===e.key&&e.currentTarget.blur(),sw.value.matches.length&&("Enter"===e.key&&e.shiftKey?E("prev"):"Enter"===e.key&&(e.metaKey||e.ctrlKey?(e.preventDefault(),e.stopPropagation(),y(sw.value.matches[sw.value.currentMatchIndex].element),e.currentTarget.focus()):E("next")))},onChange:S,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),sw.value.query?rx(ez,{children:[rx("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[sw.value.currentMatchIndex+1,"|",sw.value.matches.length]}),!!sw.value.matches.length&&rx(ez,{children:[rx("button",{type:"button",onClick:e=>{e.stopPropagation(),E("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:rx(oZ,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),rx("button",{type:"button",onClick:e=>{e.stopPropagation(),E("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:rx(oZ,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),rx("button",{type:"button",onClick:e=>{e.stopPropagation(),N("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:rx(oZ,{name:"icon-close",size:12})})]}):!!c.length&&rx("span",{className:"text-xs text-neutral-500",children:c.length})]})}),rx("div",{className:"flex-1 overflow-hidden",children:rx("div",{ref:e,onPointerLeave:A,className:"tree h-full overflow-auto will-change-transform",children:rx("div",{className:"relative w-full",style:{height:b},children:w.map(e=>{var t;let r=v[e.index];if(!r)return null;let n="focused"===uQ.inspectState.value.kind&&r.element===uQ.inspectState.value.focusedDomElement,a=e.index===h;return rx("div",{className:l2("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(n||a)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:e.start,height:28},children:rx("div",{className:"w-full h-full",style:{paddingLeft:`calc(${r.depth} * var(--indentation-size))`},children:rx(sS,{node:r,nodeIndex:e.index,hasChildren:!!(null==(t=r.children)?void 0:t.length),isCollapsed:u.has(r.nodeId),handleTreeNodeClick:x,handleTreeNodeToggle:k,searchValue:f})})},r.nodeId)})})})})]})]})},sM=t8(({text:e,children:t,onCopy:r,className:n,iconSize:a=14})=>{let[i,o]=e9(!1);te(()=>{if(i){let e=setTimeout(()=>o(!1),600);return()=>{clearTimeout(e)}}},[i]);let l=ta(t=>{t.preventDefault(),t.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{o(!0),null==r||r(!0,e)},()=>{null==r||r(!1,e)})},[e,r]),s=rx("button",{onClick:l,type:"button",className:l2("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${a}px]`,n),children:rx(oZ,{name:`icon-${i?"check":"copy"}`,size:[a],className:l2(i&&"text-green-500")})});return t?t({ClipboardIcon:s,onClick:l}):s}),sC=({length:e,expanded:t,onToggle:r,isNegative:n})=>rx("div",{className:"flex items-center gap-1",children:[rx("button",{type:"button",onClick:r,className:"flex items-center p-0 opacity-50",children:rx(oZ,{name:"icon-chevron-right",size:12,className:l2("transition-[color,transform]",n?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),rx("span",{children:["Array(",e,")"]})]}),sT=({value:e,path:t,isNegative:r})=>{let[n,a]=e9(!1);if(null===e||"object"!=typeof e||e instanceof Date)return rx("div",{className:"flex items-center gap-1",children:[rx("span",{className:"text-gray-500",children:[t,":"]}),rx("span",{className:"truncate",children:ct(e)})]});let i=Object.entries(e);return rx("div",{className:"flex flex-col",children:[rx("div",{className:"flex items-center gap-1",children:[rx("button",{type:"button",onClick:()=>a(!n),className:"flex items-center p-0 opacity-50",children:rx(oZ,{name:"icon-chevron-right",size:12,className:l2("transition-[color,transform]",r?"text-[#f87171]":"text-[#4ade80]",n&&"rotate-90")})}),rx("span",{className:"text-gray-500",children:[t,":"]}),!n&&rx("span",{className:"truncate",children:e instanceof Date?ct(e):`{${Object.keys(e).join(", ")}}`})]}),n&&rx("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:i.map(([e,t])=>rx(sT,{value:t,path:e,isNegative:r},e))})]})},sA=({value:e,expanded:t,onToggle:r,isNegative:n})=>{let{value:a,error:i}=cr(e);return i?rx("span",{className:"text-gray-500 font-italic",children:i}):null===a||"object"!=typeof a||a instanceof Promise?rx("span",{children:ct(a)}):Array.isArray(a)?rx("div",{className:"flex flex-col gap-1 relative",children:[rx(sC,{length:a.length,expanded:t,onToggle:r,isNegative:n}),t&&rx("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:a.map((e,t)=>rx(sT,{value:e,path:t.toString(),isNegative:n},t.toString()))}),rx(sM,{text:s8(a),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:e})=>rx(ez,{children:e})})]}):rx("div",{className:"flex items-start gap-1 relative",children:[rx("button",{type:"button",onClick:r,className:l2("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:rx(oZ,{name:"icon-chevron-right",size:12,className:l2("transition-[color,transform]",n?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),rx("div",{className:"flex-1",children:t?rx("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(a).map(([e,t])=>rx(sT,{value:t,path:e,isNegative:n},e))}):rx("span",{children:ct(a)})}),rx(sM,{text:s8(a),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:e})=>rx(ez,{children:e})})]})};tC({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var sz=e=>{switch(e.kind){case"initialized":return e.changes.currentValue;case"partially-initialized":return e.value}},s$=(e,t)=>{for(let r of e){let e=t.get(r.name);if(e){t.set(e.name,{count:e.count+1,currentValue:r.value,id:e.name,lastUpdated:Date.now(),name:e.name,previousValue:r.prevValue});continue}t.set(r.name,{count:1,currentValue:r.value,id:r.name,lastUpdated:Date.now(),name:r.name,previousValue:r.prevValue})}},sR=(e,t)=>{let r=new Map;return e.forEach((e,t)=>{r.set(t,e)}),t.forEach((e,t)=>{let n=r.get(t);n?r.set(t,{count:n.count+e.count,currentValue:e.currentValue,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:e.previousValue}):r.set(t,e)}),r},sO=e=>Array.from(e.propsChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.stateChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.contextChanges.values()).filter(e=>"initialized"===e.kind).reduce((e,t)=>e+t.changes.count,0),sj=t8(()=>{let[e,t]=e9(!0),r=(()=>{let e=tr({queue:[]}),[t,r]=e9({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),n="focused"===uQ.inspectState.value.kind?uQ.inspectState.value.fiber:null,a=n?Q(n):null;return te(()=>{let t=setInterval(()=>{0!==e.current.queue.length&&(r(t=>{var r;let n,a,i=(r=e.current.queue,n={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map},r.forEach(e=>{for(let t of e.contextChanges){let e=n.contextChanges.get(t.contextType);if(e){if(oX(sz(e),t.value))continue;if("partially-initialized"===e.kind){n.contextChanges.set(t.contextType,{kind:"initialized",changes:{count:1,currentValue:t.value,id:t.contextType.toString(),lastUpdated:Date.now(),name:t.name,previousValue:e.value}});continue}n.contextChanges.set(t.contextType,{kind:"initialized",changes:{count:e.changes.count+1,currentValue:t.value,id:t.contextType.toString(),lastUpdated:Date.now(),name:t.name,previousValue:e.changes.currentValue}});continue}n.contextChanges.set(t.contextType,{kind:"partially-initialized",id:t.contextType.toString(),lastUpdated:Date.now(),name:t.name,value:t.value})}s$(e.stateChanges,n.stateChanges),s$(e.propsChanges,n.propsChanges)}),n),o=(a=new Map,t.contextChanges.forEach((e,t)=>{a.set(t,e)}),i.contextChanges.forEach((e,t)=>{let r=a.get(t);if(!r)return void a.set(t,e);if(sz(e)!==sz(r))switch(r.kind){case"initialized":switch(e.kind){case"initialized":return void a.set(t,{kind:"initialized",changes:{...e.changes,count:e.changes.count+r.changes.count+1,currentValue:e.changes.currentValue,previousValue:e.changes.previousValue}});case"partially-initialized":return void a.set(t,{kind:"initialized",changes:{count:r.changes.count+1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.changes.currentValue}})}case"partially-initialized":switch(e.kind){case"initialized":return void a.set(t,{kind:"initialized",changes:{count:e.changes.count+1,currentValue:e.changes.currentValue,id:e.changes.id,lastUpdated:e.changes.lastUpdated,name:e.changes.name,previousValue:r.value}});case"partially-initialized":return void a.set(t,{kind:"initialized",changes:{count:1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.value}})}}}),{contextChanges:a,propsChanges:sR(t.propsChanges,i.propsChanges),stateChanges:sR(t.stateChanges,i.stateChanges)});return sO(t),sO(o),o}),e.current.queue=[])},50);return()=>{clearInterval(t)}},[n]),te(()=>{if(!a)return;let t=t=>{var r;null==(r=e.current)||r.queue.push(t)},n=uQ.changesListeners.get(a);return n||(n=[],uQ.changesListeners.set(a,n)),n.push(t),()=>{var n,i;r({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),e.current.queue=[],uQ.changesListeners.set(a,null!=(i=null==(n=uQ.changesListeners.get(a))?void 0:n.filter(e=>e!==t))?i:[])}},[a]),te(()=>()=>{r({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),e.current.queue=[]},[a]),t})(),[n,a]=e9(!1),i=sO(r)>0;te(()=>{if(!n&&i){let e=setTimeout(()=>{a(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(e)}},[n,i]);let o=new Map(Array.from(r.contextChanges.entries()).filter(([,e])=>"initialized"===e.kind).map(([e,t])=>[e,"partially-initialized"===t.kind?null:t.changes])),l="focused"===uQ.inspectState.value.kind?uQ.inspectState.value.fiber:null;if(l)return rx(ez,{children:[rx(sF,{}),rx("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[rx("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[rx("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",rx("span",{className:"text-[#A855F7]",children:X(l)})," ","render?"]}),!i&&rx("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[rx("div",{children:"No changes detected since selecting"}),rx("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),rx("div",{className:l2("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[rx(sI,{changes:r.propsChanges,title:"Changed Props",isExpanded:e}),rx(sI,{renderName:e=>{var t;return sP(e,null!=(t=X(G(l)))?t:"Unknown Component")},changes:r.stateChanges,title:"Changed State",isExpanded:e}),rx(sI,{changes:o,title:"Changed Context",isExpanded:e})]})]})]})}),sP=(e,t)=>{if(Number.isNaN(Number(e)))return e;let r=Number.parseInt(e);return rx("span",{className:"truncate",children:[rx("span",{className:"text-white",children:[r,(e=>{let t=e%100;if(t>=11&&t<=13)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(r)," hook"," "]}),rx("span",{style:{color:"#666"},children:["called in ",rx("i",{className:"text-[#A855F7] truncate",children:t})]})]})},sF=t8(()=>{let e=tr(null),t=tr(null),r=tr(null),n=tr({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return te(()=>{let a=l5(()=>{var n,a,i;let o=[];for(let l of((null==(n=e.current)?void 0:n.dataset.flash)==="true"&&o.push(e.current),(null==(a=t.current)?void 0:a.dataset.flash)==="true"&&o.push(t.current),(null==(i=r.current)?void 0:i.dataset.flash)==="true"&&o.push(r.current),o))l.classList.remove("count-flash-white"),l.offsetWidth,l.classList.add("count-flash-white")},400);return sm.subscribe(i=>{var o,l,s,c,d,u,p,h,m;if(!e.current||!t.current||!r.current)return;let{currentIndex:f,updates:g}=i,v=g[f];v&&0!==f&&(a(),n.current={isPropsChanged:(null!=(s=null==(l=null==(o=v.props)?void 0:o.changes)?void 0:l.size)?s:0)>0,isStateChanged:(null!=(u=null==(d=null==(c=v.state)?void 0:c.changes)?void 0:d.size)?u:0)>0,isContextChanged:(null!=(m=null==(h=null==(p=v.context)?void 0:p.changes)?void 0:h.size)?m:0)>0},"true"!==e.current.dataset.flash&&(e.current.dataset.flash=n.current.isPropsChanged.toString()),"true"!==t.current.dataset.flash&&(t.current.dataset.flash=n.current.isStateChanged.toString()),"true"!==r.current.dataset.flash&&(r.current.dataset.flash=n.current.isContextChanged.toString()))})},[]),rx("button",{type:"button",className:l2("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:rx("div",{className:l2("flex-1 react-scan-expandable"),children:rx("div",{className:"overflow-hidden",children:rx("div",{className:"flex items-center whitespace-nowrap",children:[rx("div",{className:"flex items-center gap-x-2",children:"What changed?"}),rx("div",{className:l2("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[rx("div",{ref:e,children:"props"}),rx("div",{ref:t,children:"state"}),rx("div",{ref:r,children:"context"})]})]})})})})}),sL=e=>e,sI=t8(({title:e,changes:t,renderName:r=sL})=>{let[n,a]=e9(new Set),[i,o]=e9(new Set),l=Array.from(t.entries());return 0===t.size?null:rx("div",{children:[rx("div",{className:"text-xs text-[#888] mb-1.5",children:e}),rx("div",{className:"flex flex-col gap-2",children:l.map(([t,l])=>{let s=i.has(String(t)),{value:c,error:d}=cr(l.previousValue),{value:u,error:p}=cr(l.currentValue),h=s6(c,u);return rx("div",{children:[rx("button",{onClick:()=>{o(e=>{let r=new Set(e);return r.has(String(t))?r.delete(String(t)):r.add(String(t)),r})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:rx("div",{className:"flex items-center gap-1.5 flex-1",children:[rx(oZ,{name:"icon-chevron-right",size:12,className:l2("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":s})}),rx("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[r(l.name),rx(sW,{count:l.count,isFunction:"function"==typeof l.currentValue,showWarning:0===h.changes.length,forceFlash:!0})]})]})}),rx("div",{className:l2("react-scan-expandable",{"react-scan-expanded":s}),children:rx("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:rx("div",{className:"flex flex-col gap-0.5",children:d||p?rx(sD,{currError:p,prevError:d}):h.changes.length>0?rx(sB,{change:l,diff:h,expandedFns:n,renderName:r,setExpandedFns:a,title:e}):rx(sU,{currValue:u,entryKey:t,expandedFns:n,prevValue:c,setExpandedFns:a})})})})]},t)})})]})}),sD=({prevError:e,currError:t})=>rx(ez,{children:[e&&rx("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:e}),t&&rx("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:t})]}),sB=({diff:e,title:t,renderName:r,change:n,expandedFns:a,setExpandedFns:i})=>e.changes.map((o,l)=>{let s,{value:c,error:d}=cr(o.prevValue),{value:u,error:p}=cr(o.currentValue),h="function"==typeof c||"function"==typeof u;return"Props"===t&&(s=o.path.length>0?`${r(String(n.name))}.${s9(o.path)}`:void 0),"State"===t&&o.path.length>0&&(s=`state.${s9(o.path)}`),s||(s=s9(o.path)),rx("div",{className:l2("flex flex-col gap-y-1",l<e.changes.length-1&&"mb-4"),children:[s&&rx("div",{className:"text-[#666] text-[10px]",children:s}),rx("button",{type:"button",className:l2("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",h&&"cursor-pointer"),onClick:h?()=>{let e=`${s9(o.path)}-prev`;i(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})}:void 0,children:[rx("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),rx("span",{className:"flex-1 whitespace-nowrap font-mono",children:d?rx("span",{className:"italic text-[#f87171]",children:d}):h?rx("div",{className:"flex gap-1 items-start flex-col",children:[rx("div",{className:"flex gap-1 items-start w-full",children:[rx("span",{className:"flex-1 max-h-40",children:ce(c,a.has(`${s9(o.path)}-prev`))}),"function"==typeof c&&rx(sM,{text:c.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:e})=>rx(ez,{children:e})})]}),(null==c?void 0:c.toString())===(null==u?void 0:u.toString())&&rx("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):rx(sA,{value:c,expanded:a.has(`${s9(o.path)}-prev`),onToggle:()=>{let e=`${s9(o.path)}-prev`;i(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!0})})]}),rx("button",{type:"button",className:l2("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",h&&"cursor-pointer"),onClick:h?()=>{let e=`${s9(o.path)}-current`;i(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})}:void 0,children:[rx("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),rx("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:p?rx("span",{className:"italic text-[#4ade80]",children:p}):h?rx("div",{className:"flex gap-1 items-start flex-col",children:[rx("div",{className:"flex gap-1 items-start w-full",children:[rx("span",{className:"flex-1",children:ce(u,a.has(`${s9(o.path)}-current`))}),"function"==typeof u&&rx(sM,{text:u.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:e})=>rx(ez,{children:e})})]}),(null==c?void 0:c.toString())===(null==u?void 0:u.toString())&&rx("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):rx(sA,{value:u,expanded:a.has(`${s9(o.path)}-current`),onToggle:()=>{let e=`${s9(o.path)}-current`;i(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!1})})]})]},`${s}-${n.name}-${l}`)}),sU=({prevValue:e,currValue:t,entryKey:r,expandedFns:n,setExpandedFns:a})=>rx(ez,{children:[rx("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[rx("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),rx("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:rx(sA,{value:e,expanded:n.has(`${String(r)}-prev`),onToggle:()=>{let e=`${String(r)}-prev`;a(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!0})})]}),rx("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[rx("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),rx("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:rx(sA,{value:t,expanded:n.has(`${String(r)}-current`),onToggle:()=>{let e=`${String(r)}-current`;a(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!1})})]}),"object"==typeof t&&null!==t&&rx("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[rx(oZ,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),rx("span",{children:"Reference changed but objects are structurally the same"})]})]}),sW=({count:e,forceFlash:t,isFunction:r,showWarning:n})=>{let a=tr(!0),i=tr(null),o=tr(e);return te(()=>{let t=i.current;t&&o.current!==e&&(t.classList.remove("count-flash"),t.offsetWidth,t.classList.add("count-flash"),o.current=e)},[e]),te(()=>{if(a.current){a.current=!1;return}if(t){let e=setTimeout(()=>{var t;null==(t=i.current)||t.classList.add("count-flash-white"),e=setTimeout(()=>{var e;null==(e=i.current)||e.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(e)}}},[t]),rx("div",{ref:i,className:"count-badge",children:[n&&rx(oZ,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),r&&rx(oZ,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",e]})},sH={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{sH.lastRendered.clear(),sH.expandedPaths.clear(),sp.cleanupAll(),cu(),sv&&(clearTimeout(sv),sv=null),sg=[],sm.value=sh}},sV=class extends e${constructor(){super(...arguments),oV(this,"state",{hasError:!1,error:null}),oV(this,"handleReset",()=>{this.setState({hasError:!1,error:null}),sH.cleanup()})}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?rx("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[rx("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[rx(oZ,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),rx("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:(null==(e=this.state.error)?void 0:e.message)||JSON.stringify(this.state.error)}),rx("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},sq=tR(()=>l2("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!st.value&&"opacity-100 delay-300 pointer-events-auto")),sK=sd(()=>{let e=tr(null),t=t=>{if(!t)return;e.current=t;let{data:r,shouldUpdate:n}=cv(t);if(n){var a={timestamp:Date.now(),fiberInfo:ca(t),props:r.fiberProps,state:r.fiberState,context:r.fiberContext,stateNames:cd(t)},i=t;if(sg.push({update:a,fiber:i}),!sv){let e=()=>{(()=>{let e;if(0===sg.length)return;let t=[...sg],{updates:r,totalUpdates:n,currentIndex:a,isViewingHistory:i}=sm.value,o=[...r],l=n;for(let{update:e}of t)o.length>=1e3&&o.shift(),o.push(e),l++;let s=Math.max(0,l-1e3);e=i?a===n-1?o.length-1:0===a?0:0===s?a:a-1:o.length-1;let c=t[t.length-1];sm.value={...sm.value,latestFiber:c.fiber,updates:o,totalUpdates:l,windowOffset:s,currentIndex:e,isViewingHistory:i},sg=sg.slice(t.length)})(),sv=null,sg.length>0&&(sv=setTimeout(e,96))};sv=setTimeout(e,96)}}};return t1(()=>{let r=uQ.inspectState.value;tw(()=>{var n;if("focused"!==r.kind||!r.focusedDomElement){e.current=null,sH.cleanup();return}"focused"===r.kind&&(st.value=!1);let{parentCompositeFiber:a}=s2(r.focusedDomElement,r.fiber);if(!a){uQ.inspectState.value={kind:"inspect-off"},so.value={view:"none"};return}(null==(n=e.current)?void 0:n.type)!==a.type&&(e.current=a,sH.cleanup(),t(a))})}),t1(()=>{sf.value,tw(()=>{let r=uQ.inspectState.value;if("focused"!==r.kind||!r.focusedDomElement){e.current=null,sH.cleanup();return}let{parentCompositeFiber:n}=s2(r.focusedDomElement,r.fiber);if(!n){uQ.inspectState.value={kind:"inspect-off"},so.value={view:"none"};return}t(n),r.focusedDomElement.isConnected||(e.current=null,sH.cleanup(),uQ.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),te(()=>()=>{sH.cleanup()},[]),rx(sV,{children:rx("div",{className:sq,children:rx("div",{className:"w-full h-full",children:rx(sj,{})})})})}),sG=sd(()=>"focused"!==uQ.inspectState.value.kind?null:rx(sV,{children:[rx(sK,{}),rx(sE,{})]})),sX=e=>{var t,r,n,a;if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){let r=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!(null==r?void 0:r.renderers))return null;for(let[,n]of Array.from(r.renderers))try{let r=null==(t=n.findFiberByHostInstance)?void 0:t.call(n,e);if(r)return r}catch{}}if("_reactRootContainer"in e){let t=e._reactRootContainer;return null!=(a=null==(n=null==(r=null==t?void 0:t._internalRoot)?void 0:r.current)?void 0:n.child)?a:null}for(let t in e)if(t.startsWith("__reactInternalInstance$")||t.startsWith("__reactFiber"))return e[t];return null},sJ=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},sY=e=>{if(!e)return null;try{let t=sX(e);if(!t)return null;let r=sZ(t);return r?r[0]:null}catch{return null}},sZ=e=>{let t=e,r=null;for(;t;){if(I(t))return[t,r];L(t)&&!r&&(r=t),t=t.return}return null},sQ=(e,t)=>!!W(t,t=>t===e),s0=async e=>{let t=sY(e);if(!t)return null;let r=sJ(t);return r?await new Promise(e=>{let t=new IntersectionObserver(r=>{var n,a;t.disconnect(),e(null!=(a=null==(n=r[0])?void 0:n.boundingClientRect)?a:null)});t.observe(r)}):null},s1=e=>{let t=sY(e);if(!t||!sJ(t))return{};let r=sZ(t);if(!r)return{};let[n]=r;return{parentCompositeFiber:n}},s2=(e,t)=>{var r,n,a,i;if(!e.isConnected)return{};let o=null!=t?t:sY(e);if(!o)return{};let l=o,s=null,c=null;for(;l;){if(!l.stateNode){l=l.return;continue}if(null==(r=u0.instrumentation)?void 0:r.fiberRoots.has(l.stateNode)){s=l,c=l.stateNode.current;break}l=l.return}if(!s||!c||!(o=sQ(o,c)?o:null!=(n=o.alternate)?n:o)||!sJ(o))return{};let d=null==(a=sZ(o))?void 0:a[0];return d?{parentCompositeFiber:sQ(d,c)?d:null!=(i=d.alternate)?i:d}:{}},s5=e=>{var t,r,n;let a=null!=(t=e.memoizedProps)?t:{},i=null!=(n=null==(r=e.alternate)?void 0:r.memoizedProps)?n:{},o=[];for(let e in a){if("children"===e)continue;let t=a[e],r=i[e];oX(t,r)||o.push({name:e,value:t,prevValue:r,type:1})}return o},s4=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),s3=(e,t=!0)=>{if(e.stateNode&&"nodeType"in e.stateNode){let r=e.stateNode;return t&&r.tagName&&s4.has(r.tagName.toLowerCase())?null:r}let r=e.child;for(;r;){let e=s3(r,t);if(e)return e;r=r.sibling}return null},s7=(e=document.body)=>{let t=[],r=(e,n=0)=>{var a;let i=(e=>{if(!e)return null;let{parentCompositeFiber:t}=s1(e);return t&&s3(t)===e?e:null})(e);if(i){let{parentCompositeFiber:e}=s1(i);if(!e)return;t.push({element:i,depth:n,name:null!=(a=X(e.type))?a:"Unknown",fiber:e})}for(let t of Array.from(e.children))r(t,i?n+1:n)};return r(e),t},s8=e=>{try{if(null===e)return"null";if(void 0===e)return"undefined";if(cn(e))return"Promise";if("function"==typeof e){let t=e.toString();try{return t.replace(/\s+/g," ").replace(/{\s+/g,"{\n  ").replace(/;\s+/g,";\n  ").replace(/}\s*$/g,"\n}").replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case ArrayBuffer.isView(e)&&"length"in e:return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):case"object"==typeof e:return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},s6=(e,t,r=[],n=new WeakSet)=>{if(e===t)return{type:"primitive",changes:[],hasDeepChanges:!1};if("function"==typeof e&&"function"==typeof t){let n=((e,t)=>{try{if("function"!=typeof e||"function"!=typeof t)return!1;return e.toString()===t.toString()}catch{return!1}})(e,t);return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t,sameFunction:n}],hasDeepChanges:!n}}if(null===e||null===t||void 0===e||void 0===t||"object"!=typeof e||"object"!=typeof t)return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(n.has(e)||n.has(t))return{type:"object",changes:[{path:r,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};n.add(e),n.add(t);let a=new Set([...Object.keys(e),...Object.keys(t)]),i=[],o=!1;for(let l of a){let a=e[l],s=t[l];if(a!==s)if("object"==typeof a&&"object"==typeof s&&null!==a&&null!==s){let e=s6(a,s,[...r,l],n);i.push(...e.changes),e.hasDeepChanges&&(o=!0)}else i.push({path:[...r,l],prevValue:a,currentValue:s}),o=!0}return{type:"object",changes:i,hasDeepChanges:o}},s9=e=>0===e.length?"":e.reduce((e,t,r)=>/^\d+$/.test(t)?`${e}[${t}]`:0===r?t:`${e}.${t}`,""),ce=(e,t=!1)=>{try{let r=e.toString(),n=r.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!n)return"ƒ";let a=(n[1]||n[2]||"").replace(/\s+/g,"");if(!t)return`\u0192 (${a}) => ...`;return function(e){let t=e.replace(/\s+/g," ").trim(),r=[],n="";for(let e=0;e<t.length;e++){let a=t[e];if("="===a&&">"===t[e+1]){n.trim()&&r.push(n.trim()),r.push("=>"),n="",e++;continue}/[(){}[\];,<>:\?!]/.test(a)?(n.trim()&&r.push(n.trim()),r.push(a),n=""):/\s/.test(a)?(n.trim()&&r.push(n.trim()),n=""):n+=a}n.trim()&&r.push(n.trim());let a=[];for(let e=0;e<r.length;e++){let t=r[e],n=r[e+1];"("===t&&")"===n||"["===t&&"]"===n||"{"===t&&"}"===n||"<"===t&&">"===n?(a.push(t+n),e++):a.push(t)}let i=new Set,o=new Set;function l(e,t,r){let n=0;for(let i=r;i<a.length;i++){let r=a[i];if(r===e)n++;else if(r===t&&0==--n)return i}return -1}for(let e=0;e<a.length;e++)if("("===a[e]){let t=l("(",")",e);if(-1!==t&&"=>"===a[t+1])for(let r=e;r<=t;r++)i.add(r)}for(let e=1;e<a.length;e++){let t=a[e-1],r=a[e];if(/^[a-zA-Z0-9_$]+$/.test(t)&&"<"===r){let t=l("<",">",e);if(-1!==t)for(let r=e;r<=t;r++)o.add(r)}}let s=0,c=[],d="";function u(){d.trim()&&c.push(d.replace(/\s+$/,"")),d=""}function p(){u(),d="  ".repeat(s)}let h=[];function m(){return h.length?h[h.length-1]:null}function f(e,t=!1){d.trim()?t||/^[),;:\].}>]$/.test(e)?d+=e:d+=` ${e}`:d+=e}for(let e=0;e<a.length;e++){let t=a[e],r=a[e+1]||"";if(["(","{","[","<"].includes(t))f(t),h.push(t),"{"===t?(s++,p()):("("===t||"["===t||"<"===t)&&(i.has(e)&&"("===t||o.has(e)&&"<"===t||r!==({"(":")","[":"]","<":">"})[t]&&"()"!==r&&"[]"!==r&&"<>"!==r&&(s++,p()));else if([")","}","]",">"].includes(t)){let r=m();")"===t&&"("===r||"]"===t&&"["===r||">"===t&&"<"===r?i.has(e)&&")"===t||o.has(e)&&">"===t||(s=Math.max(s-1,0),p()):"}"===t&&"{"===r&&(s=Math.max(s-1,0),p()),h.pop(),f(t),"}"===t&&p()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(t))f(t);else if("=>"===t)f(t);else if(";"===t)f(t,!0),p();else if(","===t){f(t,!0);let r=m();!(i.has(e)&&"("===r)&&!(o.has(e)&&"<"===r)&&r&&["{","[","(","<"].includes(r)&&p()}else f(t)}return u(),c.join("\n").replace(/\n\s*\n+/g,"\n").trim()}(r)}catch{return"ƒ"}},ct=e=>{if(null===e)return"null";if(void 0===e)return"undefined";if("string"==typeof e)return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if("number"==typeof e||"boolean"==typeof e)return String(e);if("function"==typeof e)return ce(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if("object"==typeof e){let t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(", ")}, ...`:t.join(", ")}}`}return String(e)},cr=e=>{var t;if(null==e||"function"==typeof e||"object"!=typeof e)return{value:e};if(cn(e))return{value:"Promise"};try{let r=Object.getPrototypeOf(e);if(r===Promise.prototype||(null==(t=null==r?void 0:r.constructor)?void 0:t.name)==="Promise")return{value:"Promise"};return{value:e}}catch{return{value:null,error:"Error accessing value"}}},cn=e=>!!e&&(e instanceof Promise||"object"==typeof e&&"then"in e),ca=e=>{var t,r;let n=q(e);return{displayName:X(e)||"Unknown",type:e.type,key:e.key,id:e.index,selfTime:null!=(t=null==n?void 0:n.selfTime)?t:null,totalTime:null!=(r=null==n?void 0:n.totalTime)?r:null}},ci=new Map,co=new Map,cl=new Map,cs=null,cc=/\[(?<name>\w+),\s*set\w+\]/g,cd=e=>{var t,r;let n=(null==(r=null==(t=e.type)?void 0:t.toString)?void 0:r.call(t))||"";return n?Array.from(n.matchAll(cc),e=>{var t,r;return null!=(r=null==(t=e.groups)?void 0:t.name)?r:""}):[]},cu=()=>{ci.clear(),co.clear(),cl.clear(),cs=null},cp=(e,t,r,n)=>{let a=e.get(t),i=e===ci||e===cl,o=!oX(r,n);if(!a)return e.set(t,{count:o&&i?1:0,currentValue:r,previousValue:n,lastUpdated:Date.now()}),{hasChanged:o,count:o&&i?1:+!i};if(!oX(a.currentValue,r)){let n=a.count+1;return e.set(t,{count:n,currentValue:r,previousValue:a.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:n}}return{hasChanged:!1,count:a.count}},ch=e=>{if(!e)return{};if(0===e.tag||11===e.tag||15===e.tag||14===e.tag){let t=e.memoizedState,r={},n=0;for(;t;)t.queue&&void 0!==t.memoizedState&&(r[n]=t.memoizedState),t=t.next,n++;return r}return 1===e.tag&&e.memoizedState||{}},cm=e=>{var t;let r=e.memoizedProps||{},n=(null==(t=e.alternate)?void 0:t.memoizedProps)||{},a={},i={};for(let e of Object.keys(r))e in r&&(a[e]=r[e],i[e]=n[e]);return{current:a,prev:i,changes:s5(e).map(e=>({name:e.name,value:e.value,prevValue:e.prevValue}))}},cf=e=>{let t=ch(e),r=e.alternate?ch(e.alternate):{},n=[];for(let[a,i]of Object.entries(t)){let t=1===e.tag?a:Number(a);e.alternate&&!oX(r[a],i)&&n.push({name:t,value:i,prevValue:r[a]})}return{current:t,prev:r,changes:n}},cg=e=>{let t=cb(e),r=e.alternate?cb(e.alternate):new Map,n={},a={},i=[],o=new Set;for(let[e,l]of t){let t=l.displayName;if(o.has(e))continue;o.add(e),n[t]=l.value;let s=r.get(e);s&&(a[t]=s.value,oX(s.value,l.value)||i.push({name:t,value:l.value,prevValue:s.value,contextType:e}))}return{current:n,prev:a,changes:i}},cv=e=>{let t,r=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:r(),fiberState:r(),fiberContext:r()},shouldUpdate:!1};let n=!1,a=(t=e.type!==cs,cs=e.type,t),i=r();if(e.memoizedProps){let{current:t,changes:r}=cm(e);for(let[e,r]of Object.entries(t))i.current.push({name:e,value:cn(r)?{type:"promise",displayValue:"Promise"}:r});for(let e of r){let{hasChanged:t,count:r}=cp(ci,e.name,e.value,e.prevValue);t&&(n=!0,i.changes.add(e.name),i.changesCounts.set(e.name,r))}}let o=r(),{current:l,changes:s}=cf(e);for(let[t,r]of Object.entries(l)){let n=1===e.tag?t:Number(t);o.current.push({name:n,value:r})}for(let e of s){let{hasChanged:t,count:r}=cp(co,e.name,e.value,e.prevValue);t&&(n=!0,o.changes.add(e.name),o.changesCounts.set(e.name,r))}let c=r(),{current:d,changes:u}=cg(e);for(let[e,t]of Object.entries(d))c.current.push({name:e,value:t});if(!a)for(let e of u){let{hasChanged:t,count:r}=cp(cl,e.name,e.value,e.prevValue);t&&(n=!0,c.changes.add(e.name),c.changesCounts.set(e.name,r))}return n||a||(i.changes.clear(),o.changes.clear(),c.changes.clear()),{data:{fiberProps:i,fiberState:o,fiberContext:c},shouldUpdate:n||a}},cw=new WeakMap,cb=e=>{var t;if(!e)return new Map;let r=cw.get(e);if(r)return r;let n=new Map,a=e;for(;a;){let e=a.dependencies;if(null==e?void 0:e.firstContext){let r=e.firstContext;for(;r;){let e=r.memoizedValue,a=null==(t=r.context)?void 0:t.displayName;if(n.has(e)||n.set(r.context,{value:e,displayName:null!=a?a:"UnnamedContext",contextType:null}),r===r.next)break;r=r.next}}a=a.return}return cw.set(e,n),n},cy=e=>{let t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};let r=t();if(e.memoizedProps){let{current:t,changes:n}=cm(e);for(let[e,n]of Object.entries(t))r.current.push({name:e,value:cn(n)?{type:"promise",displayValue:"Promise"}:n});for(let e of n)r.changes.add(e.name),r.changesCounts.set(e.name,1)}let n=t();if(e.memoizedState){let{current:t,changes:r}=cf(e);for(let[e,r]of Object.entries(t))n.current.push({name:e,value:cn(r)?{type:"promise",displayValue:"Promise"}:r});for(let e of r)n.changes.add(e.name),n.changesCounts.set(e.name,1)}let a=t(),{current:i,changes:o}=cg(e);for(let[e,t]of Object.entries(i))a.current.push({name:e,value:cn(t)?{type:"promise",displayValue:"Promise"}:t});for(let e of o)a.changes.add(e.name),a.changesCounts.set(e.name,1);return{fiberProps:r,fiberState:n,fiberContext:a}},cx={mount:1,update:2,unmount:4},c_=0,ck=performance.now(),cN=0,cS=!1,cE=()=>{cN++;let e=performance.now();e-ck>=1e3&&(c_=cN,cN=0,ck=e),requestAnimationFrame(cE)},cM=()=>(cS||(cS=!0,cE(),c_=60),c_),cC=0,cT=new WeakMap;function cA(e,t){var r,n;let a;if(!e||!t)return;let i=e.memoizedValue,o={type:4,name:null!=(r=e.context.displayName)?r:"Context.Provider",value:i,contextType:(n=e.context,(a=cT.get(n))||(cC++,cT.set(n,cC),cC))};this.push(o)}var cz=new Map,c$=!1,cR=()=>Array.from(cz.values()),cO=new WeakMap;function cj(e){return String(Q(e))}function cP(e){let t=cj(e),r=cO.get(G(e));if(r)return r.get(t)}var cF=(e,t)=>{let r=t-e;return .5>Math.abs(r)?t:e+.2*r},cL="115,97,230";function cI(e,t){return t[0]-e[0]}function cD([e,t]){let r=`${t.slice(0,4).join(", ")} \xd7${e}`;return r.length>40&&(r=`${r.slice(0,40)}\u2026`),r}var cB=e=>{let t=new Map;for(let{name:r,count:n}of e)t.set(r,(t.get(r)||0)+n);let r=new Map;for(let[e,n]of t){let t=r.get(n);t?t.push(e):r.set(n,[e])}let n=[...r.entries()].sort(cI),a=cD(n[0]);for(let e=1,t=n.length;e<t;e++)a+=", "+cD(n[e]);return a.length>40?`${a.slice(0,40)}\u2026`:a},cU=e=>{let t=0;for(let r of e)t+=r.width*r.height;return t},cW=(e,t)=>{for(let{id:r,name:n,count:a,x:i,y:o,width:l,height:s,didCommit:c}of t){let t={id:r,name:n,count:a,x:i,y:o,width:l,height:s,frame:0,targetX:i,targetY:o,targetWidth:l,targetHeight:s,didCommit:c},d=String(t.id),u=e.get(d);u?(u.count++,u.frame=0,u.targetX=i,u.targetY=o,u.targetWidth=l,u.targetHeight=s,u.didCommit=c):e.set(d,t)}},cH=(e,t,r)=>{for(let n of e.values()){let e=n.x-t,a=n.y-r;n.targetX=e,n.targetY=a}},cV=null,cq=null,cK=null,cG=1,cX=null,cJ=new Map,cY=new Map,cZ=new Set,cQ=e=>{let t,r,n,a,i=e[0];if(1===e.length)return i;for(let i=0,o=e.length;i<o;i++){let o=e[i];t=null==t?o.x:Math.min(t,o.x),r=null==r?o.y:Math.min(r,o.y),n=null==n?o.x+o.width:Math.max(n,o.x+o.width),a=null==a?o.y+o.height:Math.max(a,o.y+o.height)}return null==t||null==r||null==n||null==a?e[0]:new DOMRect(t,r,n-t,a-r)};function c0(e,t){let r=[];for(let t of e){let e=t.target;this.seenElements.has(e)||(this.seenElements.add(e),r.push(t))}r.length>0&&this.resolveNext&&(this.resolveNext(r),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var c1=async function*(e){let t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},r=new IntersectionObserver(c0.bind(t));for(let e of t.uniqueElements)r.observe(e);for(;!t.done;){let e=await new Promise(e=>{t.resolveNext=e});e.length>0&&(yield e)}},c2="u">typeof SharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,c5=async()=>{let e=[];for(let t of cZ){let r=cY.get(t);if(r)for(let t=0;t<r.elements.length;t++)r.elements[t]instanceof Element&&e.push(r.elements[t])}let t=new Map;for await(let r of c1(e)){for(let e of r){let r=e.target,n=e.intersectionRect;e.isIntersecting&&n.width&&n.height&&t.set(r,n)}let e=[],n=[],a=[];for(let r of cZ){let i=cY.get(r);if(!i)continue;let o=[];for(let e=0;e<i.elements.length;e++){let r=i.elements[e],n=t.get(r);n&&o.push(n)}o.length&&(e.push(i),n.push(cQ(o)),a.push(Q(r)))}if(e.length>0){let t,r=new c2(7*e.length*4),i=new Float32Array(r),o=Array(e.length);for(let r=0,l=e.length;r<l;r++){let l=e[r],s=a[r],{x:c,y:d,width:u,height:p}=n[r],{count:h,name:m,didCommit:f}=l;if(cV){let e=7*r;i[e]=s,i[e+1]=h,i[e+2]=c,i[e+3]=d,i[e+4]=u,i[e+5]=p,i[e+6]=f,o[r]=m}else t||(t=Array(e.length)),t[r]={id:s,name:m,count:h,x:c,y:d,width:u,height:p,didCommit:f}}cV?cV.postMessage({type:"draw-outlines",data:r,names:o}):cq&&cK&&t&&(cW(cJ,t),cX||(cX=requestAnimationFrame(c4)))}}for(let e of cZ)cY.delete(e),cZ.delete(e)},c4=()=>{cK&&cq&&(cX=((e,t,r,n)=>{e.clearRect(0,0,t.width/r,t.height/r);let a=new Map,i=new Map;for(let e of n.values()){let{x:t,y:r,width:n,height:o,targetX:l,targetY:s,targetWidth:c,targetHeight:d,frame:u}=e;l!==t&&(e.x=cF(t,l)),s!==r&&(e.y=cF(r,s)),c!==n&&(e.width=cF(n,c)),d!==o&&(e.height=cF(o,d));let p=`${null!=l?l:t},${null!=s?s:r}`,h=`${p},${null!=c?c:n},${null!=d?d:o}`,m=a.get(p);m?m.push(e):a.set(p,[e]);let f=1-u/45;e.frame++;let g=i.get(h)||{x:t,y:r,width:n,height:o,alpha:f};f>g.alpha&&(g.alpha=f),i.set(h,g)}for(let{x:t,y:r,width:n,height:a,alpha:o}of i.values()){e.strokeStyle=`rgba(${cL},${o})`,e.lineWidth=1;let i=Math.round(t)+.5,l=Math.round(r)+.5,s=Math.round(n),c=Math.round(a);e.beginPath(),e.rect(i,l,s,c),e.stroke(),e.fillStyle=`rgba(${cL},${.1*o})`,e.fill()}e.font="11px Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";let o=new Map;for(let t of(e.textRendering="optimizeSpeed",a.values())){let{x:r,y:a,frame:i}=t[0],l=1-i/45,s=cB(t),{width:c}=e.measureText(s);o.set(`${r},${a},${c},${s}`,{text:s,width:c,height:11,alpha:l,x:r,y:a,outlines:t});let d=a-11-4;if(d<0&&(d=0),i>45)for(let e of t)n.delete(String(e.id))}for(let[t,r]of Array.from(o.entries()).sort(([e,t],[r,n])=>cU(n.outlines)-cU(t.outlines)))if(o.has(t))for(let[n,a]of o.entries()){if(t===n)continue;let{x:i,y:l,width:s,height:c}=r,{x:d,y:u,width:p,height:h}=a;i+s>d&&d+p>i&&l+c>u&&u+h>l&&(r.text=cB(r.outlines.concat(a.outlines)),r.width=e.measureText(r.text).width,o.delete(n))}for(let t of o.values()){let{x:r,y:n,alpha:a,width:i,height:o,text:l}=t,s=n-o-4;s<0&&(s=0),e.fillStyle=`rgba(${cL},${a})`,e.fillRect(r,s,i+4,o+4),e.fillStyle=`rgba(255,255,255,${a})`,e.fillText(l,r+2,s+o)}return n.size>0})(cK,cq,cG,cJ)?requestAnimationFrame(c4):null)},c3="u">typeof OffscreenCanvas&&"u">typeof Worker,c7=()=>Math.min(window.devicePixelRatio||1,2),c8=!1,c6=e=>!u7.has(e.memoizedProps),c9=!1,de=`/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 4px;
    --container-md: 448px;
    --text-xs: 12px;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 14px;
    --text-sm--line-height: calc(1.25 / 0.875);
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wide: 0.025em;
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --blur-sm: 8px;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
      -o-tab-size: 4;
         tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::-moz-placeholder {
    opacity: 1;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::-moz-placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    -webkit-appearance: button;
       -moz-appearance: button;
            appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-auto {
    pointer-events: auto;
  }
  .pointer-events-bounding-box {
    pointer-events: bounding-box;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .inset-x-1 {
    inset-inline: calc(var(--spacing) * 1);
  }
  .inset-y-0 {
    inset-block: calc(var(--spacing) * 0);
  }
  .start {
    inset-inline-start: var(--spacing);
  }
  .end {
    inset-inline-end: var(--spacing);
  }
  .-top-1 {
    top: calc(var(--spacing) * -1);
  }
  .-top-2\\.5 {
    top: calc(var(--spacing) * -2.5);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-0\\.5 {
    top: calc(var(--spacing) * 0.5);
  }
  .top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .-right-1 {
    right: calc(var(--spacing) * -1);
  }
  .-right-2\\.5 {
    right: calc(var(--spacing) * -2.5);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-0\\.5 {
    right: calc(var(--spacing) * 0.5);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .bottom-4 {
    bottom: calc(var(--spacing) * 4);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-3 {
    left: calc(var(--spacing) * 3);
  }
  .z-10 {
    z-index: 10;
  }
  .z-50 {
    z-index: 50;
  }
  .z-100 {
    z-index: 100;
  }
  .z-\\[214748365\\] {
    z-index: 214748365;
  }
  .z-\\[214748367\\] {
    z-index: 214748367;
  }
  .z-\\[124124124124\\] {
    z-index: 124124124124;
  }
  .container {
    width: 100%;
    @media (width >= 640px) {
      max-width: 640px;
    }
    @media (width >= 768px) {
      max-width: 768px;
    }
    @media (width >= 1024px) {
      max-width: 1024px;
    }
    @media (width >= 1280px) {
      max-width: 1280px;
    }
    @media (width >= 1536px) {
      max-width: 1536px;
    }
  }
  .m-\\[2px\\] {
    margin: 2px;
  }
  .mx-0\\.5 {
    margin-inline: calc(var(--spacing) * 0.5);
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mr-0\\.5 {
    margin-right: calc(var(--spacing) * 0.5);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-1\\.5 {
    margin-right: calc(var(--spacing) * 1.5);
  }
  .mr-16 {
    margin-right: calc(var(--spacing) * 16);
  }
  .mr-auto {
    margin-right: auto;
  }
  .mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-px {
    margin-bottom: 1px;
  }
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
  }
  .ml-1 {
    margin-left: calc(var(--spacing) * 1);
  }
  .ml-1\\.5 {
    margin-left: calc(var(--spacing) * 1.5);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .h-1 {
    height: calc(var(--spacing) * 1);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-4\\/5 {
    height: calc(4 / 5 * 100%);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-\\[28px\\] {
    height: 28px;
  }
  .h-\\[48px\\] {
    height: 48px;
  }
  .h-\\[50px\\] {
    height: 50px;
  }
  .h-\\[150px\\] {
    height: 150px;
  }
  .h-\\[235px\\] {
    height: 235px;
  }
  .h-\\[calc\\(100\\%-25px\\)\\] {
    height: calc(100% - 25px);
  }
  .h-\\[calc\\(100\\%-40px\\)\\] {
    height: calc(100% - 40px);
  }
  .h-\\[calc\\(100\\%-48px\\)\\] {
    height: calc(100% - 48px);
  }
  .h-\\[calc\\(100\\%-150px\\)\\] {
    height: calc(100% - 150px);
  }
  .h-\\[calc\\(100\\%-200px\\)\\] {
    height: calc(100% - 200px);
  }
  .h-fit {
    height: -moz-fit-content;
    height: fit-content;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-0 {
    max-height: calc(var(--spacing) * 0);
  }
  .max-h-9 {
    max-height: calc(var(--spacing) * 9);
  }
  .max-h-40 {
    max-height: calc(var(--spacing) * 40);
  }
  .min-h-9 {
    min-height: calc(var(--spacing) * 9);
  }
  .min-h-\\[48px\\] {
    min-height: 48px;
  }
  .min-h-fit {
    min-height: -moz-fit-content;
    min-height: fit-content;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\/2 {
    width: calc(1 / 2 * 100%);
  }
  .w-1\\/3 {
    width: calc(1 / 3 * 100%);
  }
  .w-2\\/4 {
    width: calc(2 / 4 * 100%);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-4\\/5 {
    width: calc(4 / 5 * 100%);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-\\[20px\\] {
    width: 20px;
  }
  .w-\\[72px\\] {
    width: 72px;
  }
  .w-\\[90\\%\\] {
    width: 90%;
  }
  .w-\\[calc\\(100\\%-200px\\)\\] {
    width: calc(100% - 200px);
  }
  .w-fit {
    width: -moz-fit-content;
    width: fit-content;
  }
  .w-full {
    width: 100%;
  }
  .w-px {
    width: 1px;
  }
  .w-screen {
    width: 100vw;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-\\[200px\\] {
    min-width: 200px;
  }
  .min-w-fit {
    min-width: -moz-fit-content;
    min-width: fit-content;
  }
  .flex-1 {
    flex: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .grow {
    flex-grow: 1;
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-\\[200\\%\\] {
    --tw-translate-y: calc(200% * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0 {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-110 {
    --tw-scale-x: 110%;
    --tw-scale-y: 110%;
    --tw-scale-z: 110%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .-rotate-90 {
    rotate: calc(90deg * -1);
  }
  .rotate-90 {
    rotate: 90deg;
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-fade-in {
    animation: fadeIn ease-in forwards;
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-e-resize {
    cursor: e-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-w-resize {
    cursor: w-resize;
  }
  .\\[touch-action\\:none\\] {
    touch-action: none;
  }
  .resize {
    resize: both;
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .space-y-1\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .gap-x-0\\.5 {
    -moz-column-gap: calc(var(--spacing) * 0.5);
         column-gap: calc(var(--spacing) * 0.5);
  }
  .gap-x-1 {
    -moz-column-gap: calc(var(--spacing) * 1);
         column-gap: calc(var(--spacing) * 1);
  }
  .gap-x-1\\.5 {
    -moz-column-gap: calc(var(--spacing) * 1.5);
         column-gap: calc(var(--spacing) * 1.5);
  }
  .gap-x-2 {
    -moz-column-gap: calc(var(--spacing) * 2);
         column-gap: calc(var(--spacing) * 2);
  }
  .gap-x-3 {
    -moz-column-gap: calc(var(--spacing) * 3);
         column-gap: calc(var(--spacing) * 3);
  }
  .gap-x-4 {
    -moz-column-gap: calc(var(--spacing) * 4);
         column-gap: calc(var(--spacing) * 4);
  }
  .gap-y-0\\.5 {
    row-gap: calc(var(--spacing) * 0.5);
  }
  .gap-y-1 {
    row-gap: calc(var(--spacing) * 1);
  }
  .gap-y-2 {
    row-gap: calc(var(--spacing) * 2);
  }
  .gap-y-4 {
    row-gap: calc(var(--spacing) * 4);
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-zinc-800 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-800);
    }
  }
  .place-self-center {
    place-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .\\!overflow-visible {
    overflow: visible !important;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 4px;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-t-sm {
    border-top-left-radius: var(--radius-sm);
    border-top-right-radius: var(--radius-sm);
  }
  .rounded-l-md {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
  }
  .rounded-l-sm {
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .rounded-tl-lg {
    border-top-left-radius: var(--radius-lg);
  }
  .rounded-r-md {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }
  .rounded-r-sm {
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .rounded-tr-lg {
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-br-lg {
    border-bottom-right-radius: var(--radius-lg);
  }
  .rounded-bl-lg {
    border-bottom-left-radius: var(--radius-lg);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-4 {
    border-style: var(--tw-border-style);
    border-width: 4px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-l-0 {
    border-left-style: var(--tw-border-style);
    border-left-width: 0px;
  }
  .border-l-1 {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .\\!border-red-500 {
    border-color: var(--color-red-500) !important;
  }
  .border-\\[\\#1e1e1e\\] {
    border-color: #1e1e1e;
  }
  .border-\\[\\#222\\] {
    border-color: #222;
  }
  .border-\\[\\#333\\] {
    border-color: #333;
  }
  .border-\\[\\#27272A\\] {
    border-color: #27272A;
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-zinc-800 {
    border-color: var(--color-zinc-800);
  }
  .bg-\\[\\#0A0A0A\\] {
    background-color: #0A0A0A;
  }
  .bg-\\[\\#1D3A66\\] {
    background-color: #1D3A66;
  }
  .bg-\\[\\#1E1E1E\\] {
    background-color: #1E1E1E;
  }
  .bg-\\[\\#1a2a1a\\] {
    background-color: #1a2a1a;
  }
  .bg-\\[\\#1e1e1e\\] {
    background-color: #1e1e1e;
  }
  .bg-\\[\\#2a1515\\] {
    background-color: #2a1515;
  }
  .bg-\\[\\#4b4b4b\\] {
    background-color: #4b4b4b;
  }
  .bg-\\[\\#5f3f9a\\] {
    background-color: #5f3f9a;
  }
  .bg-\\[\\#5f3f9a\\]\\/40 {
    background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
  }
  .bg-\\[\\#6a369e\\] {
    background-color: #6a369e;
  }
  .bg-\\[\\#8e61e3\\] {
    background-color: #8e61e3;
  }
  .bg-\\[\\#7521c8\\] {
    background-color: #7521c8;
  }
  .bg-\\[\\#18181B\\] {
    background-color: #18181B;
  }
  .bg-\\[\\#18181B\\]\\/50 {
    background-color: color-mix(in oklab, #18181B 50%, transparent);
  }
  .bg-\\[\\#27272A\\] {
    background-color: #27272A;
  }
  .bg-\\[\\#44444a\\] {
    background-color: #44444a;
  }
  .bg-\\[\\#141414\\] {
    background-color: #141414;
  }
  .bg-\\[\\#214379d4\\] {
    background-color: #214379d4;
  }
  .bg-\\[\\#412162\\] {
    background-color: #412162;
  }
  .bg-\\[\\#EFD81A\\] {
    background-color: #EFD81A;
  }
  .bg-\\[\\#b77116\\] {
    background-color: #b77116;
  }
  .bg-\\[\\#b94040\\] {
    background-color: #b94040;
  }
  .bg-\\[\\#d36cff\\] {
    background-color: #d36cff;
  }
  .bg-\\[\\#efd81a6b\\] {
    background-color: #efd81a6b;
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/40 {
    background-color: color-mix(in srgb, #000 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 40%, transparent);
    }
  }
  .bg-green-500\\/50 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 50%, transparent);
    }
  }
  .bg-green-500\\/60 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 60%, transparent);
    }
  }
  .bg-neutral-700 {
    background-color: var(--color-neutral-700);
  }
  .bg-purple-500 {
    background-color: var(--color-purple-500);
  }
  .bg-purple-500\\/90 {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
    }
  }
  .bg-purple-800 {
    background-color: var(--color-purple-800);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-red-500\\/90 {
    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-500) 90%, transparent);
    }
  }
  .bg-red-950\\/50 {
    background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-950) 50%, transparent);
    }
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-yellow-300 {
    background-color: var(--color-yellow-300);
  }
  .bg-zinc-800 {
    background-color: var(--color-zinc-800);
  }
  .bg-zinc-900\\/30 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 30%, transparent);
    }
  }
  .bg-zinc-900\\/50 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 50%, transparent);
    }
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-\\[1px\\] {
    padding-block: 1px;
  }
  .py-\\[3px\\] {
    padding-block: 3px;
  }
  .py-\\[5px\\] {
    padding-block: 5px;
  }
  .pt-0 {
    padding-top: calc(var(--spacing) * 0);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-1\\.5 {
    padding-right: calc(var(--spacing) * 1.5);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-2\\.5 {
    padding-left: calc(var(--spacing) * 2.5);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-5 {
    padding-left: calc(var(--spacing) * 5);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .text-left {
    text-align: left;
  }
  .font-mono {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[8px\\] {
    font-size: 8px;
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .text-\\[13px\\] {
    font-size: 13px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .text-\\[17px\\] {
    font-size: 17px;
  }
  .leading-6 {
    --tw-leading: calc(var(--spacing) * 6);
    line-height: calc(var(--spacing) * 6);
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .text-wrap {
    text-wrap: wrap;
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .break-all {
    word-break: break-all;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .text-\\[\\#4ade80\\] {
    color: #4ade80;
  }
  .text-\\[\\#5a5a5a\\] {
    color: #5a5a5a;
  }
  .text-\\[\\#6E6E77\\] {
    color: #6E6E77;
  }
  .text-\\[\\#6F6F78\\] {
    color: #6F6F78;
  }
  .text-\\[\\#8E61E3\\] {
    color: #8E61E3;
  }
  .text-\\[\\#666\\] {
    color: #666;
  }
  .text-\\[\\#888\\] {
    color: #888;
  }
  .text-\\[\\#999\\] {
    color: #999;
  }
  .text-\\[\\#7346a0\\] {
    color: #7346a0;
  }
  .text-\\[\\#65656D\\] {
    color: #65656D;
  }
  .text-\\[\\#737373\\] {
    color: #737373;
  }
  .text-\\[\\#A1A1AA\\] {
    color: #A1A1AA;
  }
  .text-\\[\\#A855F7\\] {
    color: #A855F7;
  }
  .text-\\[\\#E4E4E7\\] {
    color: #E4E4E7;
  }
  .text-\\[\\#d36cff\\] {
    color: #d36cff;
  }
  .text-\\[\\#f87171\\] {
    color: #f87171;
  }
  .text-black {
    color: var(--color-black);
  }
  .text-gray-100 {
    color: var(--color-gray-100);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-neutral-300 {
    color: var(--color-neutral-300);
  }
  .text-neutral-400 {
    color: var(--color-neutral-400);
  }
  .text-neutral-500 {
    color: var(--color-neutral-500);
  }
  .text-purple-400 {
    color: var(--color-purple-400);
  }
  .text-red-300 {
    color: var(--color-red-300);
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-white\\/30 {
    color: color-mix(in srgb, #fff 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 30%, transparent);
    }
  }
  .text-white\\/70 {
    color: color-mix(in srgb, #fff 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 70%, transparent);
    }
  }
  .text-yellow-300 {
    color: var(--color-yellow-300);
  }
  .text-yellow-500 {
    color: var(--color-yellow-500);
  }
  .text-zinc-200 {
    color: var(--color-zinc-200);
  }
  .text-zinc-400 {
    color: var(--color-zinc-400);
  }
  .text-zinc-500 {
    color: var(--color-zinc-500);
  }
  .text-zinc-600 {
    color: var(--color-zinc-600);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-white\\/\\[0\\.08\\] {
    --tw-ring-color: color-mix(in srgb, #fff 8%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-white) 8%, transparent);
    }
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[border-radius\\] {
    transition-property: border-radius;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[color\\,transform\\] {
    transition-property: color,transform;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[max-height\\] {
    transition-property: max-height;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[opacity\\] {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-none {
    transition-property: none;
  }
  .delay-0 {
    transition-delay: 0ms;
  }
  .delay-150 {
    transition-delay: 150ms;
  }
  .delay-300 {
    transition-delay: 300ms;
  }
  .\\!duration-0 {
    --tw-duration: 0ms !important;
    transition-duration: 0ms !important;
  }
  .duration-0 {
    --tw-duration: 0ms;
    transition-duration: 0ms;
  }
  .duration-120 {
    --tw-duration: 120ms;
    transition-duration: 120ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-\\[cubic-bezier\\(0\\.25\\,0\\.1\\,0\\.25\\,1\\)\\] {
    --tw-ease: cubic-bezier(0.25,0.1,0.25,1);
    transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .will-change-transform {
    will-change: transform;
  }
  .select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
  }
  .animation-delay-0 {
    animation-delay: 0s;
  }
  .animation-delay-100 {
    animation-delay: .1s;
  }
  .animation-delay-150 {
    animation-delay: .15s;
  }
  .animation-delay-200 {
    animation-delay: .2s;
  }
  .animation-delay-300 {
    animation-delay: .3s;
  }
  .animation-delay-500 {
    animation-delay: .5s;
  }
  .animation-delay-700 {
    animation-delay: .7s;
  }
  .animation-delay-1000 {
    animation-delay: 1s;
  }
  .animation-duration-0 {
    animation-duration: 0s;
  }
  .animation-duration-100 {
    animation-duration: .1s;
  }
  .animation-duration-200 {
    animation-duration: .2s;
  }
  .animation-duration-300 {
    animation-duration: .3s;
  }
  .animation-duration-500 {
    animation-duration: .5s;
  }
  .animation-duration-700 {
    animation-duration: .7s;
  }
  .animation-duration-1000 {
    animation-duration: 1s;
  }
  .group-hover\\:bg-\\[\\#5b2d89\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #5b2d89;
      }
    }
  }
  .group-hover\\:bg-\\[\\#6a6a6a\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #6a6a6a;
      }
    }
  }
  .group-hover\\:bg-\\[\\#21437982\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #21437982;
      }
    }
  }
  .group-hover\\:bg-\\[\\#efda1a2f\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #efda1a2f;
      }
    }
  }
  .group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .peer-hover\\/bottom\\:rounded-b-none {
    &:is(:where(.peer\\/bottom):hover ~ *) {
      @media (hover: hover) {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/left\\:rounded-l-none {
    &:is(:where(.peer\\/left):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/right\\:rounded-r-none {
    &:is(:where(.peer\\/right):hover ~ *) {
      @media (hover: hover) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  .peer-hover\\/top\\:rounded-t-none {
    &:is(:where(.peer\\/top):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
  .after\\:absolute {
    &::after {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .after\\:inset-0 {
    &::after {
      content: var(--tw-content);
      inset: calc(var(--spacing) * 0);
    }
  }
  .after\\:top-\\[100\\%\\] {
    &::after {
      content: var(--tw-content);
      top: 100%;
    }
  }
  .after\\:left-1\\/2 {
    &::after {
      content: var(--tw-content);
      left: calc(1 / 2 * 100%);
    }
  }
  .after\\:h-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      height: 6px;
    }
  }
  .after\\:w-\\[10px\\] {
    &::after {
      content: var(--tw-content);
      width: 10px;
    }
  }
  .after\\:-translate-x-1\\/2 {
    &::after {
      content: var(--tw-content);
      --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .after\\:animate-\\[fadeOut_1s_ease-out_forwards\\] {
    &::after {
      content: var(--tw-content);
      animation: fadeOut 1s ease-out forwards;
    }
  }
  .after\\:border-t-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      border-top-style: var(--tw-border-style);
      border-top-width: 6px;
    }
  }
  .after\\:border-r-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-right-style: var(--tw-border-style);
      border-right-width: 5px;
    }
  }
  .after\\:border-l-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-left-style: var(--tw-border-style);
      border-left-width: 5px;
    }
  }
  .after\\:border-t-white {
    &::after {
      content: var(--tw-content);
      border-top-color: var(--color-white);
    }
  }
  .after\\:border-r-transparent {
    &::after {
      content: var(--tw-content);
      border-right-color: transparent;
    }
  }
  .after\\:border-l-transparent {
    &::after {
      content: var(--tw-content);
      border-left-color: transparent;
    }
  }
  .after\\:bg-purple-500\\/30 {
    &::after {
      content: var(--tw-content);
      background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-purple-500) 30%, transparent);
      }
    }
  }
  .after\\:content-\\[\\"\\"\\] {
    &::after {
      --tw-content: "";
      content: var(--tw-content);
    }
  }
  .focus-within\\:border-\\[\\#454545\\] {
    &:focus-within {
      border-color: #454545;
    }
  }
  .hover\\:bg-\\[\\#0f0f0f\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #0f0f0f;
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/20 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 20%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/40 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#18181B\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #18181B;
      }
    }
  }
  .hover\\:bg-\\[\\#34343b\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #34343b;
      }
    }
  }
  .hover\\:bg-red-600 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-600);
      }
    }
  }
  .hover\\:bg-zinc-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-zinc-700);
      }
    }
  }
  .hover\\:bg-zinc-800\\/50 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, oklch(27.4% 0.006 286.033) 50%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-zinc-800) 50%, transparent);
        }
      }
    }
  }
  .hover\\:text-neutral-300 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-neutral-300);
      }
    }
  }
  .hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
}
* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}
@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}
button {
  &:hover {
    @media (hover: hover) {
      background-image: none;
    }
  }
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  cursor: pointer;
}
input {
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  background-color: transparent;
  background-image: none;
  &::-moz-placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::-moz-placeholder {
    color: var(--color-neutral-500);
  }
  &::placeholder {
    color: var(--color-neutral-500);
  }
  &::-moz-placeholder {
    font-style: italic;
  }
  &::placeholder {
    font-style: italic;
  }
  &:-moz-placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:placeholder-shown {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
svg {
  height: auto;
  width: auto;
  pointer-events: none;
}
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
#react-scan-toolbar {
  position: fixed;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  color: var(--color-white);
  background-color: var(--color-black);
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  cursor: move;
  opacity: 0%;
  z-index: 2147483678;
  animation: fadeIn ease-in forwards;
  animation-delay: .3s;
  animation-duration: .3s;
  --tw-shadow: 0 4px 12px var(--tw-shadow-color, rgba(0,0,0,0.2));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  place-self: start;
  will-change: transform;
  backface-visibility: hidden;
}
#react-scan-toolbar pre,
#react-scan-toolbar textarea,
#react-scan-toolbar input[type='text'],
#react-scan-toolbar input[type='search'],
#react-scan-toolbar [data-react-scan-selectable] {
  -webkit-user-select: text;
  -moz-user-select: text;
       user-select: text;
  cursor: text;
}
.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}
.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}
.resize-line {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  overflow: hidden;
  background-color: var(--color-black);
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-right,
.resize-left {
  inset-block: calc(var(--spacing) * 0);
  width: calc(var(--spacing) * 6);
  cursor: ew-resize;
  .resize-line-wrapper {
    inset-block: calc(var(--spacing) * 0);
    width: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-x: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-right {
  right: calc(var(--spacing) * 0);
  --tw-translate-x: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    right: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-right-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-left {
  left: calc(var(--spacing) * 0);
  --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    left: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-top,
.resize-bottom {
  inset-inline: calc(var(--spacing) * 0);
  height: calc(var(--spacing) * 6);
  cursor: ns-resize;
  .resize-line-wrapper {
    inset-inline: calc(var(--spacing) * 0);
    height: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-y: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-top {
  top: calc(var(--spacing) * 0);
  --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    top: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-bottom {
  bottom: calc(var(--spacing) * 0);
  --tw-translate-y: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    bottom: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-right: calc(var(--spacing) * 2);
  padding-left: calc(var(--spacing) * 3);
  min-height: calc(var(--spacing) * 9);
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  overflow: hidden;
  white-space: nowrap;
}
.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: calc(var(--spacing) * 1);
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 50%, transparent) !important;
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 50%, transparent) !important;
  }
  &:hover {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 25%, transparent);
    }
  }
  &.disabled {
    opacity: 50%;
    pointer-events: none;
  }
  &:before {
    content: "";
    position: absolute;
    inset: calc(var(--spacing) * 0);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}
.react-scan-close-button {
  background-color: color-mix(in srgb, #fff 10%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
  }
  &:hover {
    background-color: color-mix(in srgb, #fff 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 15%, transparent);
    }
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 3);
  height: calc(var(--spacing) * 7);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #888;
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  background-color: #0a0a0a;
}
.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-inline: calc(var(--spacing) * 2);
  color: #888;
  &::before {
    content: var(--tw-content);
    color: var(--color-gray-500);
  }
  &::before {
    --tw-content: attr(data-section);
    content: var(--tw-content);
  }
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  > .react-scan-property {
    margin-left: calc(14px * -1);
  }
}
.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: calc(var(--spacing) * 8);
  border-left-style: var(--tw-border-style);
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}
.react-scan-property-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: calc(var(--spacing) * 7);
  max-width: 100%;
  overflow: hidden;
}
.react-scan-string {
  color: #9ecbff;
}
.react-scan-number {
  color: #79c7ff;
}
.react-scan-boolean {
  color: #56b6c2;
}
.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: calc(var(--spacing) * 60);
  white-space: nowrap;
  color: var(--color-white);
}
.react-scan-input {
  color: var(--color-white);
  background-color: var(--color-black);
}
@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.react-scan-arrow {
  position: absolute;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: calc(var(--spacing) * 7);
  width: calc(var(--spacing) * 6);
  --tw-translate-x: -100%;
  translate: var(--tw-translate-x) var(--tw-translate-y);
  z-index: 10;
  > svg {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
}
.react-scan-nested {
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: calc(var(--spacing) * 0);
    left: calc(var(--spacing) * 0);
    height: 100%;
    width: 1px;
    background-color: color-mix(in srgb, oklch(55.1% 0.027 264.364) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-500) 30%, transparent);
    }
  }
}
.react-scan-settings {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 4);
  padding-inline: calc(var(--spacing) * 4);
  padding-block: calc(var(--spacing) * 2);
  color: #888;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
}
.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: calc(var(--spacing) * 7);
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
}
.react-scan-flash-overlay {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  opacity: 0%;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  mix-blend-mode: multiply;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
  }
}
.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: calc(var(--spacing) * 6);
  width: calc(var(--spacing) * 10);
  input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    z-index: 20;
    opacity: 0%;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
  input:checked {
    + div {
      background-color: #5f3f9a;
      &::before {
        --tw-translate-x: 100%;
        translate: var(--tw-translate-x) var(--tw-translate-y);
        left: auto;
        border-color: #5f3f9a;
      }
    }
  }
  > div {
    position: absolute;
    inset: calc(var(--spacing) * 1);
    background-color: var(--color-neutral-700);
    border-radius: calc(infinity * 1px);
    pointer-events: none;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &:before {
      --tw-content: '';
      content: var(--tw-content);
      position: absolute;
      top: calc(1 / 2 * 100%);
      left: calc(var(--spacing) * 0);
      --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
      height: calc(var(--spacing) * 4);
      width: calc(var(--spacing) * 4);
      background-color: var(--color-white);
      border-style: var(--tw-border-style);
      border-width: 2px;
      border-color: var(--color-neutral-700);
      border-radius: calc(infinity * 1px);
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      transition-property: all;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
      --tw-duration: 300ms;
      transition-duration: 300ms;
    }
  }
}
.react-scan-flash-active {
  opacity: 40%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 200ms;
  transition-duration: 200ms;
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  will-change: opacity;
  &.fade-out {
    opacity: 0%;
  }
  &.fade-in {
    opacity: 100%;
  }
}
.react-scan-what-changed {
  ul {
    list-style-type: disc;
    padding-left: calc(var(--spacing) * 4);
  }
  li {
    white-space: nowrap;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      -moz-column-gap: calc(var(--spacing) * 2);
           column-gap: calc(var(--spacing) * 2);
    }
  }
}
.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 1.5);
  padding-block: calc(var(--spacing) * 0.5);
  border-radius: 4px;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
  color: #a855f7;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  background-color: color-mix(in oklab, #a855f7 10%, transparent);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  transition-delay: 150ms;
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.count-flash {
  animation: countFlash .3s ease-out forwards;
}
.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}
.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 1);
       column-gap: calc(var(--spacing) * 1);
  color: #666;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  > div {
    padding-inline: calc(var(--spacing) * 1.5);
    padding-block: calc(var(--spacing) * 0.5);
    border-radius: 4px;
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
    transform-origin: center;
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    transition-delay: 150ms;
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &[data-flash="true"] {
      background-color: color-mix(in oklab, #a855f7 10%, transparent);
      color: #a855f7;
    }
  }
}
.react-scan-slider {
  position: relative;
  min-height: calc(var(--spacing) * 6);
  > input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    opacity: 0%;
  }
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    top: calc(1 / 2 * 100%);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 1.5);
    background-color: color-mix(in oklab, #8e61e3 40%, transparent);
    border-radius: var(--radius-lg);
    pointer-events: none;
  }
  &:after {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    inset-block: calc(var(--spacing) * -2);
    z-index: calc(10 * -1);
  }
  span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(var(--spacing) * 0);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 2.5);
    width: calc(var(--spacing) * 2.5);
    border-radius: var(--radius-lg);
    background-color: #8e61e3;
    pointer-events: none;
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 75ms;
    transition-duration: 75ms;
  }
}
.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: calc(var(--spacing) * 1);
  min-width: calc(var(--spacing) * 1);
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:hover,
  &:active {
    > span {
      background-color: #222;
    }
    svg {
      opacity: 100%;
    }
  }
  &::before {
    --tw-content: "";
    content: var(--tw-content);
    position: absolute;
    inset: calc(var(--spacing) * 0);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    width: 1px;
    background-color: #222;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  > span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: 18px;
    width: calc(var(--spacing) * 1.5);
    border-radius: 4px;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    rotate: 90deg;
    color: var(--color-neutral-400);
    opacity: 0%;
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    z-index: 50;
  }
}
.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    padding-block: 1px;
    border-radius: var(--radius-sm);
    background-color: var(--color-yellow-300);
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    color: var(--color-black);
  }
  .single {
    margin-right: 1px;
    padding-inline: 2px;
  }
  .regex {
    padding-inline: 2px;
  }
  .start {
    margin-left: 1px;
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .end {
    margin-right: 1px;
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .middle {
    margin-inline: 1px;
    border-radius: var(--radius-sm);
  }
}
.react-scan-toolbar-notification {
  position: absolute;
  inset-inline: calc(var(--spacing) * 0);
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding: calc(var(--spacing) * 1);
  padding-left: calc(var(--spacing) * 2);
  font-size: 10px;
  color: var(--color-neutral-300);
  background-color: color-mix(in srgb, #000 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-black) 90%, transparent);
  }
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    background-color: var(--color-black);
    height: calc(var(--spacing) * 2);
  }
  &.position-top {
    top: 100%;
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    &::before {
      top: calc(var(--spacing) * 0);
      --tw-translate-y: -100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.position-bottom {
    bottom: 100%;
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    &::before {
      bottom: calc(var(--spacing) * 0);
      --tw-translate-y: 100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.is-open {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header-item {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  --tw-translate-y: calc(200% * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
  &.is-visible {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}
.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 75ms;
  transition-duration: 75ms;
  transition-timing-function: ease-out;
  > * {
    min-height: 0;
  }
  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes countFlash {
  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }
  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}
@keyframes countFlashShake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px) scale(1.1);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-divide-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
    }
  }
}
`,dt=async e=>{try{let t=await oB(e),r=`${t.htmlPreview}${t.stackString}`;if(!r.trim())return!1;return await navigator.clipboard.writeText(r),!0}catch{return!1}},dr=tR(()=>l2("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",st.value&&"-translate-y-[200%]")),dn=()=>{let e=tr(null),t=tr(null),[r,n]=e9(null);t1(()=>{let e=uQ.inspectState.value;"focused"===e.kind&&n(e.fiber)}),t1(()=>{let r=sm.value;tw(()=>{var n,a;let i;if("focused"!==uQ.inspectState.value.kind||!e.current||!t.current)return;let{totalUpdates:o,currentIndex:l,updates:s,isVisible:c,windowOffset:d}=r,u=Math.max(0,o-1),p=c?`#${d+l} Re-render`:u>0?`\xd7${u}`:"";if(u>0&&l>=0&&l<s.length){let e=null==(a=null==(n=s[l])?void 0:n.fiberInfo)?void 0:a.selfTime;i=e>0?e<.1-Number.EPSILON?"< 0.1ms":`${Number(e.toFixed(1))}ms`:void 0}e.current.dataset.text=p?` \u2022 ${p}`:"",t.current.dataset.text=i?` \u2022 ${i}`:""})});let a=tn(()=>{if(!r)return null;let{name:e,wrappers:t,wrapperTypes:n}=l8(r),a=t.length?`${t.join("(")}(${e})${")".repeat(t.length)}`:null!=e?e:"",i=n[0];return rx("span",{title:a,className:"flex items-center gap-x-1",children:[null!=e?e:"Unknown",rx("span",{title:null==i?void 0:i.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!i&&rx(ez,{children:[rx("span",{className:l2("rounded py-[1px] px-1","truncate",i.compiler&&"bg-purple-800 text-neutral-400",!i.compiler&&"bg-neutral-700 text-neutral-300","memo"===i.type&&"bg-[#5f3f9a] text-white"),children:i.type},i.type),i.compiler&&rx("span",{className:"text-yellow-300",children:"✨"})]})}),n.length>1&&rx("span",{className:"text-[10px] text-neutral-400",children:["×",n.length-1]})]})},[r]);return rx("div",{className:dr,children:[a,rx("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[rx("span",{ref:e,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),rx("span",{ref:t,className:"with-data-text !overflow-visible"})]})]})},da=()=>{let e=((e,t=150)=>{let[r,n]=e9(e);return te(()=>{if(e===r)return;let a=setTimeout(()=>n(e),e?150:t);return()=>clearTimeout(a)},[e,150,t]),r})("focused"===uQ.inspectState.value.kind,0),t=tG(!1),r=()=>{so.value={view:"none"},uQ.inspectState.value={kind:"inspect-off"}},n=async()=>{let e=uQ.inspectState.value;"focused"!==e.kind||!e.focusedDomElement||await dt(e.focusedDomElement)&&(t.value=!0,setTimeout(()=>{t.value=!1,r()},600))},a=tr(n);if(a.current=n,te(()=>{let e=e=>{var t;let r,n=uQ.inspectState.value;!("focused"!==n.kind||!n.focusedDomElement||"u">typeof window&&window.__REACT_GRAB__)&&(e.metaKey||e.ctrlKey)&&!e.shiftKey&&!e.altKey&&("c"===e.key||"KeyC"===e.code)&&((()=>{let e=document.activeElement;if(!e)return!1;let t=e.tagName;return!!("INPUT"===t||"TEXTAREA"===t||"SELECT"===t||e instanceof HTMLElement&&e.isContentEditable)})()||(r=null==(t=window.getSelection)?void 0:t.call(window))&&r.toString().length>0||(e.preventDefault(),e.stopImmediatePropagation(),a.current()))};return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0})}},[]),"notifications"===so.value.view)return;let i="focused"===uQ.inspectState.value.kind,o=(()=>{if("u"<typeof navigator)return!1;let e=navigator.platform||"";return e?/Mac|iPhone|iPad|iPod/i.test(e):/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)})()?"⌘C":"Ctrl+C";return rx("div",{className:"react-scan-header",children:[rx("div",{className:"relative flex-1 h-full",children:rx("div",{className:l2("react-scan-header-item is-visible",!e&&"!duration-0"),children:rx(dn,{})})}),i&&rx("button",{type:"button",title:`Copy element (${o})`,className:"react-scan-close-button",onClick:n,children:rx(oZ,{name:t.value?"icon-check":"icon-copy",className:l2(t.value&&"text-green-500")})}),rx("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:r,children:rx(oZ,{name:"icon-close"})})]})},di=({className:e,...t})=>rx("div",{className:l2("react-scan-toggle",e),children:[rx("input",{type:"checkbox",...t}),rx("div",{})]}),dl=({fps:e})=>rx("div",{className:l2("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[rx("div",{style:{color:e<30?"#EF4444":e<50?"#F59E0B":"rgb(214,132,245)"},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:e}),rx("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]}),ds=()=>{let[e,t]=e9(null);return te(()=>{let e=setInterval(()=>{t(cM())},200);return()=>clearInterval(e)},[]),rx("div",{className:l2("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:null===e?rx(ez,{children:"️"}):rx(dl,{fps:e})})},dc=e=>{},dd=class e extends Array{constructor(e=25){super(),oV(this,"capacity",e)}push(...e){let t=super.push(...e);for(;this.length>this.capacity;)this.shift();return t}static fromArray(t,r){let n=new e(r);return n.push(...t),n}},du=new class{constructor(e){oV(this,"subscribers",new Set),oV(this,"currentValue"),this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}}(new dd(150)),dp=new class{constructor(){oV(this,"channels",{})}publish(e,t,r=!0){let n=this.channels[t];if(!n){if(!r)return;this.channels[t]={callbacks:new dd(50),state:new dd(50)},this.channels[t].state.push(e);return}n.state.push(e),n.callbacks.forEach(t=>t(e))}getAvailableChannels(){return dd.fromArray(Object.keys(this.channels),50)}subscribe(e,t,r=!1){let n=()=>(r||this.channels[e].state.forEach(e=>{t(e)}),()=>{let r=this.channels[e].callbacks.filter(e=>e!==t);this.channels[e].callbacks=dd.fromArray(r,50)}),a=this.channels[e];return a?a.callbacks.push(t):(this.channels[e]={callbacks:new dd(50),state:new dd(50)},this.channels[e].callbacks.push(t)),n()}updateChannelState(e,t,r=!0){let n=this.channels[e];if(!n){if(!r)return;let n=new dd(50),a={callbacks:new dd(50),state:n};this.channels[e]=a,a.state=t(n);return}n.state=t(n.state)}getChannelState(e){var t;return null!=(t=this.channels[e].state)?t:new dd(50)}},dh={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},dm=[/Provider$/,/^Provider$/,/^Context$/],df=[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],dg=[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],dv=[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],dw=[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/],db=(e,t=dh)=>{let r=[];return t.skipProviders&&r.push(...dm),t.skipHocs&&r.push(...df),t.skipContainers&&r.push(...dg),t.skipUtilities&&r.push(...dv),t.skipBoundaries&&r.push(...dw),!r.some(t=>t.test(e))},dy=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],dx=e=>{var t,r;for(let t=0;t<dy.length;t++)if(dy[t].test(e))return!0;let n=!/[aeiou]/i.test(e),a=(null!=(r=null==(t=e.match(/\d/g))?void 0:t.length)?r:0)>e.length/2,i=/^[a-z]+$/.test(e),o=/[$_]{2,}/.test(e);return Number(n)+Number(a)+Number(i)+Number(o)>=2},d_=e=>{let t=X(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},dk="never-hidden",dN=null,dS=new dd(25),dE=(e,t)=>{let r=null,n=t=>{switch(e){case"pointer":if("start"===t.phase)return"pointerup";if(t.target instanceof HTMLInputElement||t.target instanceof HTMLSelectElement)return"change";return"click";case"keyboard":if("start"===t.phase)return"keydown";return"change"}},a={current:{kind:"uninitialized-stage",interactionUUID:oJ(),stageStart:Date.now(),interactionType:e}},i=r=>{var i,l;if(r.composedPath().some(e=>e instanceof Element&&"react-scan-toolbar-root"===e.id)||(Date.now()-a.current.stageStart>2e3&&(a.current={kind:"uninitialized-stage",interactionUUID:oJ(),stageStart:Date.now(),interactionType:e}),"uninitialized-stage"!==a.current.kind))return;let s=performance.now();null==(i=null==t?void 0:t.onStart)||i.call(t,a.current.interactionUUID);let c=(e=>{var t;let r=sX(e);if(!r)return;let n=r?X(null==r?void 0:r.type):"N/A";if(n||(n=null!=(t=((e,t=()=>!0)=>{let r=e;for(;r;){let e=X(r.type);if(e&&t(e))return e;r=r.return}return null})(r,e=>e.length>2))?t:"N/A"),n)return{componentPath:((e,t=dh)=>{if(!e||!X(e.type))return[];let r=[],n=e;for(;n.return;){let e=d_(n.type);e&&!dx(e)&&db(e,t)&&e.toLowerCase()!==e&&r.push(e),n=n.return}let a=Array(r.length);for(let e=0;e<r.length;e++)a[e]=r[r.length-e-1];return a})(r),childrenTree:{},componentName:n,elementFiber:r}})(r.target);if(!c){null==(l=null==t?void 0:t.onError)||l.call(t,a.current.interactionUUID);return}let d={},u=dT(d);a.current={...a.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:c.childrenTree,componentName:c.componentName,componentPath:c.componentPath,fiberRenders:d,kind:"interaction-start",interactionStartDetail:s,stopListeningForRenders:u};let p=n({phase:"end",target:r.target});document.addEventListener(p,o,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(p,o)})};document.addEventListener(n({phase:"start"}),i,{capture:!0});let o=(n,i,o)=>{var l;if("interaction-start"!==a.current.kind&&i===r){if("pointer"===e&&n.target instanceof HTMLSelectElement){a.current={kind:"uninitialized-stage",interactionUUID:oJ(),stageStart:Date.now(),interactionType:e};return}null==(l=null==t?void 0:t.onError)||l.call(t,a.current.interactionUUID),a.current={kind:"uninitialized-stage",interactionUUID:oJ(),stageStart:Date.now(),interactionType:e},dc("pointer -> click");return}r=i,(({onMicroTask:e,onRAF:t,onTimeout:r,abort:n})=>{queueMicrotask(()=>{(null==n?void 0:n())===!0||e()&&requestAnimationFrame(()=>{(null==n?void 0:n())===!0||t()&&setTimeout(()=>{(null==n?void 0:n())!==!0&&r()},0)})})})({abort:o,onMicroTask:()=>"uninitialized-stage"!==a.current.kind&&(a.current={...a.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>{var r;return"js-end-stage"!==a.current.kind&&"raf-stage"!==a.current.kind?(null==(r=null==t?void 0:t.onError)||r.call(t,a.current.interactionUUID),dc("bad transition to raf"),a.current={kind:"uninitialized-stage",interactionUUID:oJ(),stageStart:Date.now(),interactionType:e},!1):(a.current={...a.current,kind:"raf-stage",rafStart:performance.now()},!0)},onTimeout:()=>{var r;if("raf-stage"!==a.current.kind){null==(r=null==t?void 0:t.onError)||r.call(t,a.current.interactionUUID),a.current={kind:"uninitialized-stage",interactionUUID:oJ(),stageStart:Date.now(),interactionType:e},dc("raf->timeout");return}let n=Date.now(),i=Object.freeze({...a.current,kind:"timeout-stage",blockingTimeEnd:n,commitEnd:performance.now()});a.current={kind:"uninitialized-stage",interactionUUID:oJ(),stageStart:n,interactionType:e};let o=!1,l=e=>{var r;o=!0;let n={detailedTiming:i,latency:"auto-complete-race"===e.kind?e.detailedTiming.commitEnd-e.detailedTiming.interactionStartDetail:e.entry.latency,completedAt:Date.now(),flushNeeded:!0};null==(r=null==t?void 0:t.onComplete)||r.call(t,i.interactionUUID,n,e);let a=dS.filter(e=>e.interactionUUID!==i.interactionUUID);return dS=dd.fromArray(a,25),n},s={completeInteraction:l,endDateTime:Date.now(),startDateTime:i.blockingTimeStart,type:e,interactionUUID:i.interactionUUID};if(dS.push(s),dC())setTimeout(()=>{if(o)return;l({kind:"auto-complete-race",detailedTiming:i,interactionUUID:i.interactionUUID});let e=dS.filter(e=>e.interactionUUID!==i.interactionUUID);dS=dd.fromArray(e,25)},1e3);else{let e=dS.filter(e=>e.interactionUUID!==i.interactionUUID);dS=dd.fromArray(e,25),l({kind:"auto-complete-race",detailedTiming:i,interactionUUID:i.interactionUUID})}}})},l=e=>{let t=oJ();o(e,t,()=>t!==r)};return"keyboard"===e&&document.addEventListener("keypress",l),()=>{document.removeEventListener(n({phase:"start"}),i,{capture:!0}),document.removeEventListener("keypress",l)}},dM=e=>{var t;return null==(t=W(e,e=>{if(L(e))return!0}))?void 0:t.stateNode},dC=()=>"PerformanceEventTiming"in globalThis,dT=e=>{let t=t=>{var r,n,a,i,o,l,s;let c=X(t.type);if(!c)return;let d=e[c];if(!d){let n=new Set,a=t.return&&sZ(t.return),i=a&&X(a[0]);i&&n.add(i);let{selfTime:o,totalTime:l}=q(t),s=cy(t),d={current:[],changes:new Set,changesCounts:new Map},u={fiberProps:s.fiberProps||d,fiberState:s.fiberState||d,fiberContext:s.fiberContext||d};e[c]={renderCount:1,hasMemoCache:K(t),wasFiberRenderMount:dz(t),parents:n,selfTime:o,totalTime:l,nodeInfo:[{element:dM(t),name:null!=(r=X(t.type))?r:"Unknown",selfTime:q(t).selfTime}],changes:u};return}if(null==(a=null==(n=sZ(t))?void 0:n[0])?void 0:a.type){let e=t.return&&sZ(t.return),r=e&&X(e[0]);r&&d.parents.add(r)}let{selfTime:u,totalTime:p}=q(t),h=cy(t),m={current:[],changes:new Set,changesCounts:new Map};d.wasFiberRenderMount=d.wasFiberRenderMount||dz(t),d.hasMemoCache=d.hasMemoCache||K(t),d.changes={fiberProps:dA((null==(i=d.changes)?void 0:i.fiberProps)||m,h.fiberProps||m),fiberState:dA((null==(o=d.changes)?void 0:o.fiberState)||m,h.fiberState||m),fiberContext:dA((null==(l=d.changes)?void 0:l.fiberContext)||m,h.fiberContext||m)},d.renderCount+=1,d.selfTime+=u,d.totalTime+=p,d.nodeInfo.push({element:dM(t),name:null!=(s=X(t.type))?s:"Unknown",selfTime:q(t).selfTime})};return uQ.interactionListeningForRenders=t,()=>{uQ.interactionListeningForRenders===t&&(uQ.interactionListeningForRenders=null)}},dA=(e,t)=>{let r={current:[...e.current],changes:new Set,changesCounts:new Map};for(let e of t.current)r.current.some(t=>t.name===e.name)||r.current.push(e);for(let n of t.changes)if("string"==typeof n||"number"==typeof n){r.changes.add(n);let a=e.changesCounts.get(n)||0,i=t.changesCounts.get(n)||0;r.changesCounts.set(n,a+i)}return r},dz=e=>{if(!e.alternate)return!0;let t=e.alternate,r=t&&null!=t.memoizedState&&null!=t.memoizedState.element&&!0!==t.memoizedState.isDehydrated,n=null!=e.memoizedState&&null!=e.memoizedState.element&&!0!==e.memoizedState.isDehydrated;return!r&&n},d$=e=>{let t,r=new Set,n=(e,n)=>{let a="function"==typeof e?e(t):e;if(!Object.is(a,t)){let e=t;t=(null!=n?n:"object"!=typeof a||null===a)?a:Object.assign({},t,a),r.forEach(r=>r(t,e))}},a=()=>t,i={setState:n,getState:a,getInitialState:()=>o,subscribe:(e,n)=>{let a,i;n?(a=e,i=n):i=e;let o=a?a(t):void 0,l=(e,t)=>{if(a){let r=a(e),n=a(t);Object.is(o,r)||(o=r,i(r,n))}else i(e,t)};return r.add(l),()=>r.delete(l)}},o=t=e(n,a,i);return i},dR=e=>e?d$(e):d$,dO=null;dR()(e=>({state:{events:[]},actions:{addEvent:t=>{e(e=>({state:{events:[...e.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}}));var dj=dR()((e,t)=>{let r=new Set;return{state:{events:new dd(200)},actions:{addEvent:n=>{r.forEach(e=>e(n));let a=[...t().state.events,n],i=new Set;a.forEach(e=>{if("interaction"!==e.kind){let t;(t=a.find(t=>{if("long-render"!==t.kind&&t.id!==e.id&&(e.data.startAt<=t.data.startAt&&e.data.endAt<=t.data.endAt&&e.data.endAt>=t.data.startAt||t.data.startAt<=e.data.startAt&&t.data.endAt>=e.data.startAt||e.data.startAt<=t.data.startAt&&e.data.endAt>=t.data.endAt))return!0}))&&(()=>{i.add(e.id)})()}});let o=a.filter(e=>!i.has(e.id));e(()=>({state:{events:dd.fromArray(o,200)}}))},addListener:e=>(r.add(e),()=>{r.delete(e)}),clear:()=>{e({state:{events:new dd(200)}})}}}}),dP=null,dF=null,dL=null,dI=[],dD=e=>{var t;let r=e.filter(e=>e.length>2);return 0===r.length?null!=(t=e.at(-1))?t:"Unknown":r.at(-1)},dB=e=>{switch(e.kind){case"interaction":{let{renderTime:t,otherJSTime:r,framePreparation:n,frameConstruction:a,frameDraw:i}=e;return t+r+n+a+(null!=i?i:0)}case"dropped-frames":return e.otherTime+e.renderTime}},dU=e=>{let t=dB(e.timing);switch(e.kind){case"interaction":if(t<200)return"low";if(t<500)return"needs-improvement";return"high";case"dropped-frames":if(t<50)return"low";if(t<150)return"needs-improvement";return"high"}},dW=eK(null),dH=({size:e=24,className:t})=>rx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:l2(["lucide lucide-chevron-right",t]),children:rx("path",{d:"m9 18 6-6-6-6"})}),dV=({className:e="",size:t=24,events:r=[]})=>{let n=r.includes(!0),a=r.filter(e=>e).length,i=n?Math.max(.6*t,14):Math.max(.4*t,6);return rx("div",{className:"relative",children:[rx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${e}`,children:[rx("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),rx("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),r.length>0&&a>0&&u0.options.value.showNotificationCount&&rx("div",{className:l2(["absolute",n?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",n?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${i}px`,height:`${i}px`,padding:n?"0.5px":"0"},children:n&&(a>99?">99":a)})]})},dq=({className:e="",size:t=24})=>rx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[rx("path",{d:"M18 6 6 18"}),rx("path",{d:"m6 6 12 12"})]}),dK=({className:e="",size:t=24})=>rx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[rx("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),rx("path",{d:"M16 9a5 5 0 0 1 0 6"}),rx("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),dG=({className:e="",size:t=24})=>rx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[rx("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),rx("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),rx("path",{d:"m2 2 20 20"}),rx("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),rx("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),dX=({size:e=24,className:t})=>rx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:l2(["lucide lucide-arrow-left",t]),children:[rx("path",{d:"m12 19-7-7 7-7"}),rx("path",{d:"M19 12H5"})]}),dJ=({className:e="",size:t=24})=>rx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[rx("path",{d:"M14 4.1 12 6"}),rx("path",{d:"m5.1 8-2.9-.8"}),rx("path",{d:"m6 12-1.9 2"}),rx("path",{d:"M7.2 2.2 8 5.1"}),rx("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),dY=({className:e="",size:t=24})=>rx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[rx("path",{d:"M10 8h.01"}),rx("path",{d:"M12 12h.01"}),rx("path",{d:"M14 8h.01"}),rx("path",{d:"M16 12h.01"}),rx("path",{d:"M18 8h.01"}),rx("path",{d:"M6 8h.01"}),rx("path",{d:"M7 16h10"}),rx("path",{d:"M8 12h.01"}),rx("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),dZ=({className:e="",size:t=24})=>rx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,style:{transform:"rotate(180deg)"},children:[rx("circle",{cx:"12",cy:"12",r:"10"}),rx("path",{d:"m4.9 4.9 14.2 14.2"})]}),dQ=({className:e="",size:t=24})=>rx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[rx("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),rx("polyline",{points:"16 17 22 17 22 11"})]}),d0=({children:e,triggerContent:t,wrapperProps:r})=>{var n;let[a,i]=e9("closed"),[o,l]=e9(null),[s,c]=e9({width:window.innerWidth,height:window.innerHeight}),d=tr(null),u=tr(null),p=ti(uV),h=tr(!1);te(()=>{let e=()=>{c({width:window.innerWidth,height:window.innerHeight}),m()};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let m=()=>{if(d.current&&p){let e=d.current.getBoundingClientRect(),t=p.getBoundingClientRect(),r=e.left+e.width/2,n=e.top;l(new DOMRect(r-t.left,n-t.top,e.width,e.height))}};te(()=>{m()},[d.current]),te(()=>{if("opening"===a){let e=setTimeout(()=>i("open"),120);return()=>clearTimeout(e)}if("closing"===a){let e=setTimeout(()=>i("closed"),120);return()=>clearTimeout(e)}},[a]),te(()=>{let e=setInterval(()=>{h.current||"closed"===a||i("closing")},1e3);return()=>clearInterval(e)},[a]);let f=(()=>{var e;if(!o||!p)return{top:0,left:0};let t=p.getBoundingClientRect(),r=(null==(e=u.current)?void 0:e.offsetHeight)||40,n=o.x+t.left,a=o.y+t.top,i=n,l=a-4;return i-87.5<5?i=92.5:i+87.5>s.width-5&&(i=s.width-5-87.5),l-r<5&&(l=a+o.height+4),{top:l-t.top,left:i-t.left}})();return rx(ez,{children:[p&&o&&"closed"!==a&&((n=eT(rs,{__v:rx("div",{ref:u,className:l2(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transition-[opacity] duration-120 ease-out",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none","opening"===a||"closing"===a?"opacity-0":"opacity-100"]),style:{top:f.top+"px",left:f.left+"px",transform:`translate(-50%, calc(-100% - 4px)) scale(${"open"===a?1:.97})`,minWidth:"175px",willChange:"opacity, transform"},children:e}),h:p})).containerInfo=p,n),rx("div",{ref:d,onMouseEnter:()=>{h.current=!0,m(),i("opening")},onMouseLeave:()=>{h.current=!1,m(),i("closing")},...r,children:t})]})},d1=({selectedEvent:e})=>{let{notificationState:t,setNotificationState:r,setRoute:n}=ti(dW);return rx("div",{className:l2(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[rx("div",{className:l2(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[rx("button",{onClick:()=>{n({route:"render-visualization",routeMessage:null})},className:l2(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1","render-visualization"===t.route||"render-explanation"===t.route?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),rx("button",{onClick:()=>{n({route:"other-visualization",routeMessage:null})},className:l2(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1","other-visualization"===t.route?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),rx("button",{onClick:()=>{n({route:"optimize",routeMessage:null})},className:l2(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1","optimize"===t.route?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:rx("span",{children:"Prompts"})})]}),rx(d0,{triggerContent:rx("button",{onClick:()=>{r(e=>{e.audioNotificationsOptions.enabled&&"closed"!==e.audioNotificationsOptions.audioContext.state&&e.audioNotificationsOptions.audioContext.close();let t=e.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!t));let r=new AudioContext;return e.audioNotificationsOptions.enabled||oY(r),t&&r.close(),{...e,audioNotificationsOptions:t?{audioContext:null,enabled:!1}:{audioContext:r,enabled:!0}}})},className:"ml-auto",children:rx("div",{className:l2(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[rx("span",{children:"Alerts"}),t.audioNotificationsOptions.enabled?rx(dK,{size:16,className:"text-[#6E6E77]"}):rx(dG,{size:16,className:"text-[#6E6E77]"})]})}),children:rx(ez,{children:"Play a chime when a slowdown is recorded"})})]})},d2=e=>{let t="";return e.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,30).filter(e=>e.totalTime>5).forEach(e=>{let r="";r+="Component Name:",r+=e.name,r+="\n",r+=`Rendered: ${e.count} times
`,r+=`Sum of self times for ${e.name} is ${e.totalTime.toFixed(0)}ms
`,e.changes.props.length>0&&(r+=`Changed props for all ${e.name} instances ("name:count" pairs)
`,e.changes.props.forEach(e=>{r+=`${e.name}:${e.count}x
`})),e.changes.state.length>0&&(r+=`Changed state for all ${e.name} instances ("hook index:count" pairs)
`,e.changes.state.forEach(e=>{r+=`${e.index}:${e.count}x
`})),e.changes.context.length>0&&(r+=`Changed context for all ${e.name} instances ("context display name (if exists):count" pairs)
`,e.changes.context.forEach(e=>{r+=`${e.name}:${e.count}x
`})),t+=r,t+="\n"}),t},d5=(e,t)=>(()=>{switch(e){case"data":switch(t.kind){case"dropped-frames":return(({renderTime:e,otherTime:t,formattedReactData:r})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${r}`)({formattedReactData:d2(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return(({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:r,commitTime:n,framePresentTime:a,formattedReactData:i})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${t.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${r.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${n.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===a?"":`- how long it took from dom commit for the frame to be presented: ${a.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${i}`)({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:d2(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),toRafTime:t.timing.framePreparation})}case"explanation":switch(t.kind){case"dropped-frames":return(({renderTime:e,otherTime:t,formattedReactData:r})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`)({formattedReactData:d2(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return(({interactionType:e,name:t,time:r,renderTime:n,eHandlerTimeExcludingRenders:a,toRafTime:i,commitTime:o,framePresentTime:l,formattedReactData:s})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${e} on a component named ${t}. This means, roughly, the component that handled the ${e} event was named ${t}.

We have a set of high level, and low level data about the performance issue.

The click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${n.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${a.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${i.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${o.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===l?"":`- how long it took from dom commit for the frame to be presented: ${l.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${s}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`)({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:d2(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:dD(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:dB(t.timing),toRafTime:t.timing.framePreparation})}case"fix":switch(t.kind){case"dropped-frames":return(({renderTime:e,otherTime:t,formattedReactData:r})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time: ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`)({formattedReactData:d2(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return(({interactionType:e,name:t,componentPath:r,time:n,renderTime:a,eHandlerTimeExcludingRenders:i,toRafTime:o,commitTime:l,framePresentTime:s,formattedReactData:c})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${e} on the component named ${t}. This component has the following ancestors ${r}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${n.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${a.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${i.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${o.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${l.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===s?"":`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${c}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`)({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(">"),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:d2(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:dD(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:dB(t.timing),toRafTime:t.timing.framePreparation})}}})(),d4=({selectedEvent:e})=>{let[t,r]=e9("fix"),[n,a]=e9(!1);return rx("div",{className:l2(["w-full h-full"]),children:[rx("div",{className:l2(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[rx("div",{className:l2(["bg-[#18181B] p-1 rounded-t-sm"]),children:rx("div",{className:l2(["flex items-center gap-x-1"]),children:[rx("button",{onClick:()=>r("fix"),className:l2(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm","fix"===t?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),rx("button",{onClick:()=>r("explanation"),className:l2(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm","explanation"===t?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),rx("button",{onClick:()=>r("data"),className:l2(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm","data"===t?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),rx("div",{className:l2(["overflow-y-auto h-full"]),children:rx("pre",{className:l2(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:d5(t,e)})})]}),rx("button",{onClick:async()=>{let r=d5(t,e);await navigator.clipboard.writeText(r),a(!0),setTimeout(()=>a(!1),1e3)},className:l2(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[rx("span",{children:n?"Copied!":"Copy Prompt"}),rx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:l2(["transition-transform duration-200",n&&"scale-110"]),children:n?rx("path",{d:"M20 6L9 17l-5-5"}):rx(ez,{children:[rx("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),rx("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},d3=({selectedEvent:e})=>{var t,r;let[n]=e9(null!=(t=u5())&&t),{notificationState:a}=ti(dW),[i,o]=e9((null==(r=a.routeMessage)?void 0:r.name)?[a.routeMessage.name]:[]),l=((e,t)=>{switch(e.kind){case"dropped-frames":return[...t?[{name:"Total Processing Time",time:dB(e.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:e.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...t?[]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:t?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:e.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:dB(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}})(e,n),s=ti(uV);te(()=>{var e;if(null==(e=a.routeMessage)?void 0:e.name){let e=null==s?void 0:s.querySelector("#overview-scroll-container"),t=null==s?void 0:s.querySelector(`#react-scan-overview-bar-${a.routeMessage.name}`);if(e&&t){let r=t.getBoundingClientRect().top,n=e.getBoundingClientRect().top;e.scrollTop=e.scrollTop+(r-n)}}},[a.route]),te(()=>{"other-visualization"===a.route&&o(e=>{var t;return(null==(t=a.routeMessage)?void 0:t.name)?[a.routeMessage.name]:e})},[a.route]);let c=l.reduce((e,t)=>e+t.time,0);return rx("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[rx("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:rx("div",{className:"flex items-center justify-between",children:[rx("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),rx("span",{className:"text-xs text-zinc-400",children:["Total: ",c.toFixed(0),"ms"]})]})}),rx("div",{className:"divide-y divide-zinc-800",children:l.map(t=>{let r=i.includes(t.kind);return rx("div",{id:`react-scan-overview-bar-${t.kind}`,children:[rx("button",{onClick:()=>o(e=>e.includes(t.kind)?e.filter(e=>e!==t.kind):[...e,t.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:rx("div",{className:"flex-1",children:[rx("div",{className:"flex items-center justify-between mb-2",children:[rx("div",{className:"flex items-center gap-0.5",children:[rx("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${r?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:rx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),rx("span",{className:"font-medium flex items-center text-left",children:t.name})]}),rx("span",{className:" text-zinc-400",children:[t.time.toFixed(0),"ms"]})]}),rx("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:rx("div",{className:`h-full ${t.color} transition-all`,style:{width:`${t.time/c*100}%`}})})]})}),r&&rx("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:rx("p",{className:" text-zinc-400 mb-4 text-xs",children:(()=>{switch(e.kind){case"interaction":switch(t.kind){case"render":return rx(ue,{input:d6(e)});case"other-javascript":return rx(ue,{input:d9(e)});case"other-not-javascript":return rx(ue,{input:d7(e)})}case"dropped-frames":switch(t.kind){case"total-processing-time":return rx(ue,{input:{kind:"total-processing",data:{time:dB(e.timing)}}});case"render":return rx(ez,{children:rx(ue,{input:{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({name:t.name,percentage:t.totalTime/dB(e.timing)}))}}})});case"other-frame-drop":return rx(ue,{input:{kind:"other"}})}}})()})})]},t.kind)})})]})},d7=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0),r=e.timing.renderTime,n=dB(e.timing);return t>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:t,percentageOfTotal:r/n*100,copyButton:rx(d8,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:rx(d8,{})}}},d8=()=>{let[e,t]=e9(!1),{notificationState:r}=ti(dW);return rx("button",{onClick:async()=>{r.selectedEvent&&(await navigator.clipboard.writeText(d5("explanation",r.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[rx("span",{children:e?"Copied!":"Copy Prompt"}),rx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:l2(["transition-transform duration-200",e&&"scale-110"]),children:e?rx("path",{d:"M20 6L9 17l-5-5"}):rx(ez,{children:[rx("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),rx("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},d6=e=>e.timing.renderTime/dB(e.timing)>.3?{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/dB(e.timing),name:t.name}))}}:{kind:"other"},d9=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0);return e.timing.otherJSTime/dB(e.timing)<.2?{kind:"js-explanation-base"}:e.groupedFiberRenders.find(e=>e.count>200)||e.groupedFiberRenders.reduce((e,t)=>e+t.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(e=>e.count>100).toSorted((e,t)=>t.count-e.count).slice(0,3)}}:e.timing.otherJSTime/dB(e.timing)>.3?e.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:t}}:{kind:"js-explanation-base"}},ue=({input:e})=>{switch(e.kind){case"total-processing":return rx("div",{className:l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rx("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),rx("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),rx("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),rx("p",{children:["To understand precisely what caused the slowdown while in production, use the ",rx("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),rx("p",{})]});case"render":return rx("div",{className:l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rx("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),rx("div",{className:l2(["flex flex-col"]),children:[rx("p",{children:"The slowest components for this time period were:"}),e.data.topByTime.map(e=>rx("div",{children:[rx("strong",{children:e.name}),":"," ",(100*e.percentage).toFixed(0),"% of total"]},e.name))]}),rx("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),rx("p",{children:'The "Ranked" tab shows the render times of every component.'}),rx("p",{children:"The render times of the same components are grouped together into one bar."}),rx("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return rx("div",{className:l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rx("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),rx("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",rx("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",rx("code",{children:"'onclick'"}),", ",rx("code",{children:"'onchange'"}),") that performed expensive computation."]}),rx("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),rx("p",{children:["You should profile your app using the"," ",rx("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return rx("div",{className:l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rx("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),0===e.data.renderCount?rx(ez,{children:[rx("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),rx("p",{children:["You should try to reproduce the slowdown while profiling your website with the",rx("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):rx(ez,{children:[" ",rx("p",{children:["There were ",rx("strong",{children:e.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",rx("code",{children:"useEffects"}),"."]}),rx("div",{className:l2(["flex flex-col"]),children:[rx("p",{children:"You should try optimizing the renders of:"}),e.data.topByCount.map(e=>rx("div",{children:["- ",rx("strong",{children:e.name})," (rendered ",e.count,"x)"]},e.name))]}),"and then checking if the problem still exists.",rx("p",{children:["You can also try profiling your app using the"," ",rx("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return rx("div",{className:l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rx("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),rx("p",{children:["There were only ",rx("strong",{children:e.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",rx("code",{children:"useEffect"}),"/",rx("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),rx("p",{children:["To understand precisely what caused the slowdown, use the"," ",rx("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return rx("div",{className:l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rx("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),rx("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),rx("p",{children:["During this interaction, there were"," ",rx("strong",{children:e.data.count})," renders, which was"," ",rx("strong",{children:[e.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),rx("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),rx("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),rx("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),rx("p",{children:e.data.copyButton}),rx("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),rx("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return rx("div",{className:l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rx("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),rx("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),rx("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),rx("p",{children:e.data.copyButton}),rx("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),rx("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return rx("div",{className:l2(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rx("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",rx("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),rx("p",{children:["To get a better picture of what happened, profile your app using the"," ",rx("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},ut=null,ur=null,un=tC({kind:"idle",current:null}),ua=null,ui=0,uo=1/60,ul=()=>{ua&&cancelAnimationFrame(ua),ua=requestAnimationFrame(e=>{if(!ut||!ur)return;let t=ui?Math.min((e-ui)/1e3,.05):uo;ui=e;let r=1.8*t;ur.clearRect(0,0,ut.width,ut.height);let n="hsl(271, 76%, 53%)",a=un.value,{alpha:i,current:o}=(()=>{var e,t,r;switch(a.kind){case"transition":{let t=(null==(e=a.current)?void 0:e.alpha)&&a.current.alpha>0?a.current:a.transitionTo;return{alpha:t?t.alpha:0,current:t}}case"move-out":return{alpha:null!=(r=null==(t=a.current)?void 0:t.alpha)?r:0,current:a.current};case"idle":return{alpha:1,current:a.current}}})();switch(null==o||o.rects.forEach(e=>{ur&&(ur.shadowColor=n,ur.shadowBlur=6,ur.strokeStyle=n,ur.lineWidth=2,ur.globalAlpha=i,ur.beginPath(),ur.rect(e.left,e.top,e.width,e.height),ur.stroke(),ur.shadowBlur=0,ur.beginPath(),ur.rect(e.left,e.top,e.width,e.height),ur.stroke())}),a.kind){case"move-out":if(0===a.current.alpha){un.value={kind:"idle",current:null},ui=0;return}a.current.alpha<=.01&&(a.current.alpha=0),a.current.alpha=Math.max(0,a.current.alpha-r),ul();return;case"transition":if(a.current&&a.current.alpha>0){a.current.alpha=Math.max(0,a.current.alpha-r),ul();return}if(1===a.transitionTo.alpha){un.value={kind:"idle",current:a.transitionTo},ui=0;return}a.transitionTo.alpha=Math.min(a.transitionTo.alpha+r,1),ul();case"idle":ui=0;return}})},us=null;function uc(){(null==ut?void 0:ut.parentNode)&&ut.parentNode.removeChild(ut),ut=null,ur=null}var ud=()=>{var e,t;let r=un.value.current?un.value.current:"transition"===un.value.kind?un.value.transitionTo:null;if(r){if("transition"===un.value.kind){un.value={kind:"move-out",current:(null==(e=un.value.current)?void 0:e.alpha)===0?un.value.transitionTo:null!=(t=un.value.current)?t:un.value.transitionTo};return}un.value={kind:"move-out",current:{alpha:0,...r}}}},uu=({selectedEvent:e})=>{let t=dB(e.timing),r=t-e.timing.renderTime,[n]=e9(u5()),a=e.groupedFiberRenders.map(e=>({event:e,kind:"render",totalTime:n?e.count:e.totalTime})),i=(()=>{switch(e.kind){case"dropped-frames":return e.timing.renderTime/t<.1;case"interaction":return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}})();"interaction"!==e.kind||n||a.push({kind:"other-javascript",totalTime:e.timing.otherJSTime}),i&&!n&&("interaction"===e.kind?a.push({kind:"other-not-javascript",totalTime:dB(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):a.push({kind:"other-frame-drop",totalTime:r}));let o=tr({lastCallAt:null,timer:null}),l=a.reduce((e,t)=>e+t.totalTime,0);return rx("div",{className:l2(["flex flex-col h-full w-full gap-y-1"]),children:[n&&0===a.length?rx("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[rx("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),rx("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]}):0===a.length?rx("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[rx("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),rx("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]}):void 0,a.toSorted((e,t)=>t.totalTime-e.totalTime).map(e=>rx(up,{bars:a,bar:e,debouncedMouseEnter:o,totalBarTime:l,isProduction:n},"render"===e.kind?e.event.id:e.kind))]})},up=({bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:n,bars:a,depth:i=0})=>{var o;let{setNotificationState:l,setRoute:s}=ti(dW),[c,d]=e9(!1),u="render"!==e.kind||0===e.event.parents.size,p=a.filter(t=>"render"===t.kind&&"render"===e.kind&&e.event.parents.has(t.event.name)&&t.event.name!==e.event.name),h="render"===e.kind?Array.from(e.event.parents).filter(e=>!a.some(t=>"render"===t.kind&&t.event.name===e)):[];return rx("div",{className:"w-full",children:[rx("div",{className:l2(["w-full flex items-center relative text-xs min-w-0"]),children:[rx("button",{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),ud()},onMouseEnter:async()=>{let r=async()=>{if(t.current.lastCallAt=Date.now(),"render"!==e.kind){let e=un.value.current?un.value.current:"transition"===un.value.kind?un.value.transitionTo:null;if(!e){un.value={kind:"idle",current:null};return}un.value={kind:"move-out",current:{alpha:0,...e}};return}let r=un.value,n=(()=>{switch(r.kind){case"transition":return r.transitionTo;case"idle":case"move-out":return r.current}})(),a=[];if("transition"===r.kind){let t=r.current&&r.current.alpha>0?"fading-out":"fading-in";(()=>{switch(t){case"fading-in":un.value={kind:"transition",current:r.transitionTo,transitionTo:{rects:a,alpha:0,name:e.event.name}};return;case"fading-out":un.value={kind:"transition",current:un.value.current?{alpha:0,...un.value.current}:null,transitionTo:{rects:a,alpha:0,name:e.event.name}};return}})()}else un.value={kind:"transition",transitionTo:{rects:a,alpha:0,name:e.event.name},current:n?{alpha:0,...n}:null};for await(let t of c1(e.event.elements.filter(e=>e instanceof Element)))t.forEach(({boundingClientRect:e})=>{a.push(e)}),ul()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{r()},200);return}r()},onClick:()=>{"render"===e.kind?(l(t=>({...t,selectedFiber:e.event})),s({route:"render-explanation",routeMessage:null})):s({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:e.kind}})},className:l2(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[rx("div",{style:{minWidth:"fit-content",width:`${e.totalTime/r*100}%`},className:l2(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0","render"===e.kind&&"bg-[#412162] group-hover:bg-[#5b2d89]","other-frame-drop"===e.kind&&"bg-[#44444a] group-hover:bg-[#6a6a6a]","other-javascript"===e.kind&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]","other-not-javascript"===e.kind&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),rx("div",{className:l2(["absolute inset-0 flex items-center px-2","min-w-0"]),children:rx("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[rx("span",{className:l2(["truncate"]),children:(()=>{switch(e.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return e.event.name}})()}),"render"===e.kind&&!(o=e.event).wasFiberRenderMount&&!o.hasMemoCache&&0===o.changes.context.length&&0===o.changes.props.length&&0===o.changes.state.length&&rx("div",{style:{lineHeight:"10px"},className:l2(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),rx("button",{onClick:()=>"render"===e.kind&&!u&&d(!c),className:l2(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!u&&"hover:bg-[#0f0f0f]","render"!==e.kind||u?"cursor-default":"cursor-pointer"]),children:[rx("div",{className:"w-[20px] flex items-center justify-center",children:"render"===e.kind&&!u&&rx(dH,{className:l2("transition-transform",c&&"rotate-90"),size:16})}),rx("div",{style:{minWidth:u?"fit-content":n?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:["render"===e.kind&&rx("span",{className:l2(["text-[10px]"]),children:["x",e.event.count]}),("render"!==e.kind||!n)&&rx("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[e.totalTime<1?"<1":e.totalTime.toFixed(0),"ms"]})]})]}),0===i&&rx("div",{className:l2(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),c&&(p.length>0||h.length>0)&&rx("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[p.toSorted((e,t)=>t.totalTime-e.totalTime).map((e,o)=>rx(up,{depth:i+1,bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:n,bars:a},o)),h.map(e=>rx("div",{className:"w-full",children:rx("div",{className:"w-full flex items-center relative text-xs",children:rx("div",{className:"h-full w-full flex items-center relative",children:[rx("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),rx("div",{className:"absolute inset-0 flex items-center px-2",children:rx("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:e})})]})})},e))]})]})},uh=({selectedEvent:e,selectedFiber:t})=>{let{setRoute:r}=ti(dW),[n,a]=e9(!0),[i]=e9(u5());tt(()=>{let e=localStorage.getItem("react-scan-tip-shown"),t="true"===e||"false"!==e&&null;if(null===t){a(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}t||a(!1)},[]);let o=0===t.changes.context.length&&0===t.changes.props.length&&0===t.changes.state.length;return rx("div",{className:l2(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[rx("div",{className:l2(["flex items-start gap-x-4 "]),children:[rx("button",{onClick:()=>{r({route:"render-visualization",routeMessage:null})},className:l2(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[rx(dX,{size:14})," ",rx("span",{children:"Overview"})]}),rx("div",{className:l2(["flex flex-col gap-y-1"]),children:[rx("div",{className:l2(["text-sm font-bold text-white overflow-x-hidden"]),children:rx("div",{className:"flex items-center gap-x-2 truncate",children:t.name})}),rx("div",{className:l2(["flex gap-x-2"]),children:[!i&&rx(ez,{children:rx("div",{className:l2(["text-xs text-gray-400"]),children:["• Render time: ",t.totalTime.toFixed(0),"ms"]})}),rx("div",{className:l2(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",t.count,"x"]})]})]})]}),n&&!o&&rx("div",{className:l2(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[rx("button",{onClick:()=>{a(!1),localStorage.setItem("react-scan-tip-shown","false")},className:l2(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:rx(dq,{size:12})}),rx("div",{className:l2(["w-1 bg-[#d36cff]"])}),rx("div",{className:l2(["flex-1"]),children:[rx("div",{className:l2(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),rx("div",{className:l2(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),o&&rx("div",{className:l2(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[rx("div",{className:l2(["w-1 bg-[#d36cff]"])}),rx("div",{className:l2(["flex-1"]),children:[rx("div",{className:l2(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),rx("div",{className:l2(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not have rendered if it was memoized"})]})]}),rx("div",{className:l2(["flex w-full"]),children:[rx("div",{className:l2(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[rx("div",{className:l2(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),t.changes.props.length>0?t.changes.props.toSorted((e,t)=>t.count-e.count).map(e=>rx("div",{className:l2(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[rx("span",{className:l2(["text-white "]),children:e.name}),rx("div",{className:l2([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[e.count,"/",t.count,"x"]})]},e.name)):rx("div",{className:l2(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),rx("div",{className:l2(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[rx("div",{className:l2([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),t.changes.state.length>0?t.changes.state.toSorted((e,t)=>t.count-e.count).map(e=>rx("div",{className:l2(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[rx("span",{className:l2(["text-white "]),children:["index ",e.index]}),rx("div",{className:l2(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[e.count,"/",t.count,"x"]})]},e.index)):rx("div",{className:l2(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),rx("div",{className:l2(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[rx("div",{className:l2([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),t.changes.context.length>0?t.changes.context.toSorted((e,t)=>t.count-e.count).map(e=>rx("div",{className:l2(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[rx("span",{className:l2(["text-white "]),children:e.name}),rx("div",{className:l2(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[e.count,"/",t.count,"x"]})]},e.name)):rx("div",{className:l2(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},um=()=>{let{notificationState:e,setNotificationState:t}=ti(dW),[r,n]=e9("..."),a=tr(null);if(te(()=>{let e=setInterval(()=>{n(e=>"..."===e?"":e+".")},500);return()=>clearInterval(e)},[]),!e.selectedEvent)return rx("div",{ref:a,className:l2(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[rx("div",{className:l2(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:rx("button",{onClick:()=>{so.value={view:"none"}},children:rx(dq,{size:18,className:"text-[#6F6F78]"})})}),rx("div",{className:l2(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:rx("div",{className:l2(["flex flex-col items-start gap-y-4"]),children:[rx("div",{className:l2(["flex items-center"]),children:rx("span",{className:l2(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",r]})}),0!==e.events.length&&rx("p",{className:l2(["text-xs"]),children:["Click on an item in the"," ",rx("span",{className:l2(["text-purple-400"]),children:"History"})," list to get started"]}),rx("p",{className:l2(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),rx("p",{className:l2(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),rx("button",{onClick:()=>{if(e.audioNotificationsOptions.enabled)return void t(e=>{var t,r;return(null==(t=e.audioNotificationsOptions.audioContext)?void 0:t.state)!=="closed"&&(null==(r=e.audioNotificationsOptions.audioContext)||r.close()),localStorage.setItem("react-scan-notifications-audio","false"),{...e,audioNotificationsOptions:{audioContext:null,enabled:!1}}});localStorage.setItem("react-scan-notifications-audio","true");let r=new AudioContext;oY(r),t(e=>({...e,audioNotificationsOptions:{enabled:!0,audioContext:r}}))},className:l2(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:e.audioNotificationsOptions.enabled?rx(ez,{children:rx("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):rx(ez,{children:rx("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(e.route){case"render-visualization":return rx(uf,{children:rx(uu,{selectedEvent:e.selectedEvent})});case"render-explanation":if(!e.selectedFiber)throw Error("Invariant: must have selected fiber when viewing render explanation");return rx(uf,{children:rx(uh,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})});case"other-visualization":return rx(uf,{children:rx("div",{className:l2(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:rx(d3,{selectedEvent:e.selectedEvent})})});case"optimize":return rx(uf,{children:rx(d4,{selectedEvent:e.selectedEvent})})}e.route},uf=({children:e})=>{let{notificationState:t}=ti(dW);if(!t.selectedEvent)throw Error("Invariant: d must have selected event when viewing render explanation");return rx("div",{className:l2(["w-full h-full flex flex-col gap-y-2"]),children:[rx("div",{className:l2(["h-[50px] w-full"]),children:rx(d1,{selectedEvent:t.selectedEvent})}),rx("div",{className:l2(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:e})]})},ug=({selectedEvent:e})=>{let t=dU(e);switch(e.kind){case"interaction":return rx("div",{className:l2(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:rx("div",{className:l2(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[rx("div",{className:l2(["flex items-center gap-x-2 "]),children:[rx("span",{className:l2(["text-[#5a5a5a] mr-0.5"]),children:"click"===e.type?"Clicked ":"Typed in "}),rx("span",{children:dD(e.componentPath)}),rx("div",{className:l2(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap","low"===t&&"bg-green-500/50","needs-improvement"===t&&"bg-[#b77116]","high"===t&&"bg-[#b94040]"]),children:[dB(e.timing).toFixed(0),"ms processing time"]})]}),rx("div",{className:l2(["flex items-center gap-x-2  justify-end ml-auto"]),children:rx("div",{className:l2(["p-2 flex justify-center items-center border-[#27272A]"]),children:rx("button",{onClick:()=>{so.value={view:"none"}},title:"Close",children:rx(dq,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return rx("div",{className:l2(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:rx("div",{className:l2(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[rx("div",{className:l2(["flex items-center gap-x-2 "]),children:["FPS Drop",rx("div",{className:l2(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap","low"===t&&"bg-green-500/50","needs-improvement"===t&&"bg-[#b77116]","high"===t&&"bg-[#b94040]"]),children:["dropped to ",e.fps," FPS"]})]}),rx("div",{className:l2(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:rx("div",{className:l2(["p-2 flex justify-center items-center border-[#27272A]"]),children:rx("button",{onClick:()=>{so.value={view:"none"}},children:rx(dq,{size:18,className:"text-[#6F6F78]"})})})})]})})}},uv=({item:e,shouldFlash:t})=>{var r,n;let[a,i]=e9(!1),o=e.events.map(dU).reduce((e,t)=>{switch(t){case"high":return"high";case"needs-improvement":return"high"===e?"high":"needs-improvement";case"low":return e}},"low"),l=(({flashingItemsCount:e,totalEvents:t})=>{let[r,n]=e9(!1),a=tr(0),i=tr(0);return te(()=>{if(a.current>=t)return;let e=Date.now()-i.current;if(e>=250){n(!1);let e=setTimeout(()=>{a.current=t,i.current=Date.now(),n(!0),setTimeout(()=>{n(!1)},2e3)},50);return()=>clearTimeout(e)}{let r=setTimeout(()=>{n(!1),setTimeout(()=>{a.current=t,i.current=Date.now(),n(!0),setTimeout(()=>{n(!1)},2e3)},50)},250-e);return()=>clearTimeout(r)}},[e]),r})({flashingItemsCount:e.events.reduce((e,r)=>t(r.id)?e+1:e,0),totalEvents:e.events.length});return rx("div",{className:l2(["flex flex-col gap-y-0.5"]),children:[rx("button",{onClick:()=>i(e=>!e),className:l2(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",l&&!a&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[rx("div",{className:l2(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[rx("span",{className:l2(["min-w-fit"]),children:rx(dH,{className:l2(["text-[#A1A1AA] transition-transform",a?"rotate-90":""]),size:14},`chevron-${e.timestamp}`)}),rx("span",{className:l2(["text-xs"]),children:"collapsed-frame-drops"===e.kind?"FPS Drops":dD(null!=(n=null==(r=e.events.at(0))?void 0:r.componentPath)?n:[])})]}),rx("div",{className:l2(["ml-auto min-w-fit flex justify-end items-center"]),children:rx("div",{style:{lineHeight:"10px"},className:l2(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold","low"===o&&"bg-green-500/60","needs-improvement"===o&&"bg-[#b77116] text-[10px]","high"===o&&"bg-[#b94040]"]),children:["x",e.events.length]})})]}),a&&rx(uw,{children:e.events.toSorted((e,t)=>t.timestamp-e.timestamp).map(e=>rx(ub,{event:e,shouldFlash:t(e.id)}))})]})},uw=({children:e})=>rx("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[rx("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),e]}),ub=({event:e,shouldFlash:t})=>{var r,n;let{notificationState:a,setNotificationState:i}=ti(dW),o=dU(e),l=(({shouldFlash:e})=>{let[t,r]=e9(e);return te(()=>{if(e){r(!0);let e=setTimeout(()=>{r(!1)},1e3);return()=>clearTimeout(e)}},[e]),t})({shouldFlash:t});switch(e.kind){case"interaction":return rx("button",{onClick:()=>{i(t=>({...t,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:l2(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===(null==(r=a.selectedEvent)?void 0:r.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[rx("div",{className:l2(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[rx("span",{className:l2(["min-w-fit text-xs"]),children:(()=>{switch(e.type){case"click":return rx(dJ,{size:14});case"keyboard":return rx(dY,{size:14})}})()}),rx("span",{className:l2(["text-xs pr-1 truncate"]),children:dD(e.componentPath)})]}),rx("div",{className:l2([" min-w-fit flex justify-end items-center ml-auto"]),children:rx("div",{style:{lineHeight:"10px"},className:l2(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]","low"===o&&"bg-green-500/50","needs-improvement"===o&&"bg-[#b77116] text-[10px]","high"===o&&"bg-[#b94040]"]),children:rx("div",{style:{lineHeight:"10px"},className:l2(["text-[10px] text-white flex items-end"]),children:[dB(e.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return rx("button",{onClick:()=>{i(t=>({...t,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:l2(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===(null==(n=a.selectedEvent)?void 0:n.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[rx("div",{className:l2(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[rx(dQ,{size:14,className:"mr-1.5"})," FPS Drop"]}),rx("div",{className:l2([" min-w-fit flex justify-end items-center ml-auto"]),children:rx("div",{style:{lineHeight:"10px"},className:l2(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold","low"===o&&"bg-green-500/60","needs-improvement"===o&&"bg-[#b77116] text-[10px]","high"===o&&"bg-[#b94040]"]),children:[e.fps," FPS"]})})]})}},uy=(e=150)=>{let{notificationState:t}=ti(dW),[r,n]=e9(t.events);return te(()=>{setTimeout(()=>{n(t.events)},e)},[t.events]),[r,n]},ux=()=>{let{notificationState:e,setNotificationState:t}=ti(dW),r=(e=>{let t=tr([]),[r,n]=e9(new Set),a=tr(!0);return te(()=>{if(a.current){a.current=!1,t.current=e;return}let r=new Set(e.map(e=>e.id)),i=new Set(t.current.map(e=>e.id)),o=new Set;r.forEach(e=>{i.has(e)||o.add(e)}),o.size>0&&(n(o),setTimeout(()=>{n(new Set)},2e3)),t.current=e},[e]),e=>r.has(e)})(e.events),[n,a]=uy(),i=n.reduce((e,t)=>{let r=e.at(-1);if(!r)return[{kind:"single",event:t,timestamp:t.timestamp}];switch(r.kind){case"collapsed-keyboard":if("interaction"===t.kind&&"keyboard"===t.type&&t.componentPath.join("-")===r.events[0].componentPath.join("-"))return[...e.filter(e=>e!==r),{kind:"collapsed-keyboard",events:[...r.events,t],timestamp:Math.max(...[...r.events,t].map(e=>e.timestamp))}];return[...e,{kind:"single",event:t,timestamp:t.timestamp}];case"single":if("interaction"===r.event.kind&&"keyboard"===r.event.type&&"interaction"===t.kind&&"keyboard"===t.type&&r.event.componentPath.join("-")===t.componentPath.join("-"))return[...e.filter(e=>e!==r),{kind:"collapsed-keyboard",events:[r.event,t],timestamp:Math.max(r.event.timestamp,t.timestamp)}];if("dropped-frames"===r.event.kind&&"dropped-frames"===t.kind)return[...e.filter(e=>e!==r),{kind:"collapsed-frame-drops",events:[r.event,t],timestamp:Math.max(r.event.timestamp,t.timestamp)}];return[...e,{kind:"single",event:t,timestamp:t.timestamp}];case"collapsed-frame-drops":if("dropped-frames"===t.kind)return[...e.filter(e=>e!==r),{kind:"collapsed-frame-drops",events:[...r.events,t],timestamp:Math.max(...[...r.events,t].map(e=>e.timestamp))}];return[...e,{kind:"single",event:t,timestamp:t.timestamp}]}},[]).toSorted((e,t)=>t.timestamp-e.timestamp);return rx("div",{className:l2(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[rx("div",{className:l2(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[rx("span",{children:"History"}),rx(d0,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:rx("button",{className:l2(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{dj.getState().actions.clear(),t(e=>({...e,selectedEvent:null,selectedFiber:null,route:"other-visualization"===e.route?"other-visualization":"render-visualization"})),a([])},children:rx(dZ,{className:l2([""]),size:16})}),children:rx("div",{className:l2(["w-full flex justify-center"]),children:"Clear all events"})})]}),rx("div",{className:l2(["flex flex-col px-1 gap-y-1"]),children:[0===i.length&&rx("div",{className:l2(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),i.map(e=>(()=>{switch(e.kind){case"collapsed-keyboard":case"collapsed-frame-drops":return rx(uv,{shouldFlash:r,item:e});case"single":return rx(ub,{event:e.event,shouldFlash:r(e.event.id)},e.event.id)}})())]})]})},u_=()=>{var e,t,r,n,a,i,o;let l=(e=dj.subscribe,a=(n=e9({t:{__:r=(t=dj.getState)(),u:t}}))[0].t,i=n[1],tt(function(){a.__=r,a.u=t,t3(a)&&i({t:a})},[e,r,t]),te(function(){return t3(a)&&i({t:a}),e(function(){t3(a)&&i({t:a})})},[e]),r),s=[];return te(()=>{let e=setInterval(()=>{o.forEach(e=>{e.groupedFiberRenders&&e.groupedFiberRenders.forEach(e=>{if(e.deletedAll)return;if(!e.elements||0===e.elements.length){e.deletedAll=!0;return}let t=e.elements.length;e.elements=e.elements.filter(e=>e&&e.isConnected),0===e.elements.length&&t>0&&(e.deletedAll=!0)})})},5e3);return()=>{clearInterval(e)}},[o=s]),l.state.events.forEach(e=>{let t=Object.values("interaction"===e.kind?e.data.meta.detailedTiming.fiberRenders:e.data.meta.fiberRenders).map(e=>({id:oJ(),totalTime:e.nodeInfo.reduce((e,t)=>e+t.selfTime,0),count:e.nodeInfo.length,name:e.nodeInfo[0].name,deletedAll:!1,parents:e.parents,hasMemoCache:e.hasMemoCache,wasFiberRenderMount:e.wasFiberRenderMount,elements:e.nodeInfo.map(e=>e.element),changes:{context:e.changes.fiberContext.current.filter(t=>e.changes.fiberContext.changesCounts.get(t.name)).map(t=>{var r;return{name:String(t.name),count:null!=(r=e.changes.fiberContext.changesCounts.get(t.name))?r:0}}),props:e.changes.fiberProps.current.filter(t=>e.changes.fiberProps.changesCounts.get(t.name)).map(t=>{var r;return{name:String(t.name),count:null!=(r=e.changes.fiberProps.changesCounts.get(t.name))?r:0}}),state:e.changes.fiberState.current.filter(t=>e.changes.fiberState.changesCounts.get(Number(t.name))).map(t=>{var r;return{index:t.name,count:null!=(r=e.changes.fiberState.changesCounts.get(Number(t.name)))?r:0}})}})),r=t.reduce((e,t)=>e+t.totalTime,0);switch(e.kind){case"interaction":{let{commitEnd:n,jsEndDetail:a,interactionStartDetail:i,rafStart:o}=e.data.meta.detailedTiming;a-i-r<0&&dc("js time must be longer than render time");let l=Math.max(0,a-i-r),c=Math.max(e.data.meta.latency-(n-i),0);s.push({componentPath:e.data.meta.detailedTiming.componentPath,groupedFiberRenders:t,id:e.id,kind:"interaction",memory:null,timestamp:e.data.startAt,type:"keyboard"===e.data.meta.detailedTiming.interactionType?"keyboard":"click",timing:{renderTime:r,kind:"interaction",otherJSTime:l,framePreparation:o-a,frameConstruction:n-o,frameDraw:c}});return}case"long-render":return void s.push({kind:"dropped-frames",id:e.id,memory:null,timing:{kind:"dropped-frames",renderTime:r,otherTime:e.data.meta.latency},groupedFiberRenders:t,timestamp:e.data.startAt,fps:e.data.meta.fps})}}),s},uk=()=>{let{notificationState:e,setNotificationState:t}=ti(dW),r=tr(null),n=tr(null),a=tr(0),[i]=uy(),o=i.filter(e=>"high"===dU(e)).length;return te(()=>{let e=localStorage.getItem("react-scan-notifications-audio");"false"!==e&&"true"!==e?localStorage.setItem("react-scan-notifications-audio","false"):"false"!==e&&t(e=>e.audioNotificationsOptions.enabled?e:{...e,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}})},[]),te(()=>{let{audioNotificationsOptions:t}=e;!t.enabled||0===o||r.current&&r.current>=o||(n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{oY(t.audioContext),r.current=o,a.current=Date.now(),n.current=null},Math.max(0,1e3-(Date.now()-a.current))))},[o]),te(()=>{0===o&&(r.current=null)},[o]),te(()=>()=>{n.current&&clearTimeout(n.current)},[]),null},uN=re((e,t)=>{var r;let n=u_(),[a,i]=e9({detailsExpanded:!1,events:n,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:null!=(r=n.toSorted((e,t)=>e.timestamp-t.timestamp).at(-1))?r:null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return a.events=n,rx(dW.Provider,{value:{notificationState:a,setNotificationState:i,setRoute:({route:e,routeMessage:t})=>{i(r=>{let n={...r,route:e,routeMessage:t};switch(e){case"render-visualization":case"optimize":case"other-visualization":return ud(),{...n,selectedFiber:null};case"render-explanation":return ud(),n}})}},children:[rx(uk,{}),rx(uS,{ref:t})]})}),uS=re((e,t)=>{var r;let{notificationState:n}=ti(dW);return rx("div",{ref:t,className:l2(["h-full w-full flex flex-col"]),children:[n.selectedEvent&&rx("div",{className:l2(["w-full h-[48px] flex flex-col",n.moreInfoExpanded&&"h-[235px]",n.moreInfoExpanded&&"dropped-frames"===n.selectedEvent.kind&&"h-[150px]"]),children:[rx(ug,{selectedEvent:n.selectedEvent}),n.moreInfoExpanded&&rx(uE,{})]}),rx("div",{className:l2(["flex ",n.selectedEvent?"h-[calc(100%-48px)]":"h-full",n.moreInfoExpanded&&"h-[calc(100%-200px)]",n.moreInfoExpanded&&(null==(r=n.selectedEvent)?void 0:r.kind)==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[rx("div",{className:l2(["h-full min-w-[200px]"]),children:rx(ux,{})}),rx("div",{className:l2(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:rx(um,{})})]})]})}),uE=()=>{let{notificationState:e}=ti(dW);if(!e.selectedEvent)throw Error("Invariant must have selected event for more info");let t=e.selectedEvent;return rx("div",{className:l2(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]","dropped-frames"===t.kind&&"h-[calc(100%-25px)]"]),children:rx("div",{className:l2(["flex flex-col gap-y-4 h-full"]),children:(()=>{switch(t.kind){case"interaction":return rx(ez,{children:[rx("div",{className:l2(["flex items-center gap-x-3"]),children:[rx("span",{className:"text-[#6F6F78] text-xs font-medium",children:"click"===t.type?"Clicked component location":"Typed in component location"}),rx("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:t.componentPath.toReversed().map((e,r)=>rx(ez,{children:[rx("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:e},e),r<t.componentPath.length-1&&rx("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),rx("div",{className:l2(["flex items-center gap-x-3"]),children:[rx("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),rx("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[dB(t.timing).toFixed(0),"ms"]})]}),rx("div",{className:l2(["flex items-center gap-x-3"]),children:[rx("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),rx("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return rx(ez,{children:[rx("div",{className:l2(["flex items-center gap-x-3"]),children:[rx("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),rx("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[dB(t.timing).toFixed(0),"ms"]})]}),rx("div",{className:l2(["flex items-center gap-x-3"]),children:[rx("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),rx("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})()})})},uM=sd(()=>{var e;let t=u_(),[r,n]=e9(t);te(()=>{let e=setTimeout(()=>{n(t)},600);return()=>{clearTimeout(e)}},[t]);let a=uQ.inspectState,i="inspecting"===a.value.kind,o="focused"===a.value.kind,[l,s]=e9([]),c=ta(()=>{switch(uQ.inspectState.value.kind){case"inspecting":so.value={view:"none"},uQ.inspectState.value={kind:"inspect-off"};return;case"focused":so.value={view:"inspector"},uQ.inspectState.value={kind:"inspecting",hoveredDomElement:null};return;case"inspect-off":so.value={view:"none"},uQ.inspectState.value={kind:"inspecting",hoveredDomElement:null};return;case"uninitialized":return}},[]),d=ta(e=>{if(e.preventDefault(),e.stopPropagation(),!u0.instrumentation)return;let t=!u0.instrumentation.isPaused.value;u0.instrumentation.isPaused.value=t,l3("react-scan-options",{...l4("react-scan-options"),enabled:!t})},[]);t1(()=>{"uninitialized"===uQ.inspectState.value.kind&&(uQ.inspectState.value={kind:"inspect-off"})});let u=null,p="#999";return i?(u=rx(oZ,{name:"icon-inspect"}),p="#8e61e3"):o?(u=rx(oZ,{name:"icon-focus"}),p="#8e61e3"):(u=rx(oZ,{name:"icon-inspect"}),p="#999"),tt(()=>{"notifications"!==so.value.view||s([...new Set(t.map(e=>e.id)).values()])},[t.length,so.value.view]),rx("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[rx("div",{className:"h-full flex items-center min-w-fit",children:rx("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:c,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:p},children:u})}),rx("div",{className:"h-full flex items-center justify-center",children:rx("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch("inspect-off"!==uQ.inspectState.value.kind&&(uQ.inspectState.value={kind:"inspect-off"}),so.value.view){case"inspector":uQ.inspectState.value={kind:"inspect-off"},s([...new Set(t.map(e=>e.id)).values()]),so.value={view:"notifications"};return;case"notifications":so.value={view:"none"};return;case"none":s([...new Set(t.map(e=>e.id)).values()]),so.value={view:"notifications"};return}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:p},children:rx(dV,{events:r.filter(e=>!l.includes(e.id)).map(e=>"high"===dU(e)),size:16,className:l2(["text-[#999]","notifications"===so.value.view&&"text-[#8E61E3]"])})})}),rx(di,{checked:!(null==(e=u0.instrumentation)?void 0:e.isPaused.value),onChange:d,className:"place-self-center",title:"Outline Re-renders"}),u0.options.value.showFPS&&rx(ds,{})]})}),uC=tR(()=>"inspecting"===uQ.inspectState.value.kind),uT=tR(()=>l2("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",uC.value&&"opacity-0 duration-0 delay-0")),uA=tR(()=>"inspector"===so.value.view),uz=tR(()=>"notifications"===so.value.view),u$=()=>rx("div",{className:l2("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[rx("div",{className:uT,children:[rx(da,{}),rx("div",{className:l2("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[rx(uR,{isOpen:uA,children:rx(sG,{})}),rx(uR,{isOpen:uz,children:rx(uN,{})})]})]}),rx(uM,{})]}),uR=({isOpen:e,children:t})=>rx("div",{className:l2("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",e.value&&"opacity-100 delay-150 pointer-events-auto"),children:rx("div",{className:"absolute inset-0 flex",children:t})}),uO=(e,t,r)=>e+(t-e)*r,uj={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},uP=oq&&window.devicePixelRatio||1,uF=()=>{let e=tr(null),t=tr(null),r=tr(null),n=tr(null),a=tr(null),i=tr(0),o=tr(),l=tr(new Map),s=tr(!1),c=tr(0),d=(e,t,a,i)=>{if(!r.current)return;let o=r.current;t.clearRect(0,0,e.width,e.height),t.strokeStyle="rgba(142, 97, 227, 0.5)",t.fillStyle="rgba(173, 97, 230, 0.10)","locked"===a?t.setLineDash([]):t.setLineDash([4]),t.lineWidth=1,t.fillRect(o.left,o.top,o.width,o.height),t.strokeRect(o.left,o.top,o.width,o.height),((e,t,r,a)=>{var i;if(!a)return;let o=null!=(i=(null==a?void 0:a.type)&&X(a.type))?i:"Unknown";e.save(),e.font="12px system-ui, -apple-system, sans-serif";let l=e.measureText(o).width,s=14*("locked"===r),c=6*("locked"===r),d=t.left,u=t.top-24-4;if(e.fillStyle="rgb(37, 37, 38, .75)",e.beginPath(),e.roundRect(d,u,l+16+s+c,24,3),e.fill(),"locked"===r){let t,r,a,i=d+8,o=u+(24-s)/2+2;e.save(),e.strokeStyle="white",e.fillStyle="white",e.lineWidth=1.5,t=.6*s,r=.5*s,e.beginPath(),e.arc(i+(s-t)/2+t/2,o+r/2,t/2,Math.PI,0,!1),e.stroke(),a=.8*s,e.fillRect(i+(s-a)/2,o+r/2,a,.5*s),e.restore(),n.current={x:i,y:o,width:s,height:s}}else n.current=null;e.fillStyle="white",e.textBaseline="middle";e.fillText(o,d+8+("locked"===r?s+c:0),u+12),e.restore()})(t,o,a,i)},u=async(e,t,n,a)=>{if(!e||!t||!n)return;let{parentCompositeFiber:l}=s1(e),s=await s0(e);l&&s&&((e,t,n,a,l)=>{var s;let u,p,h;if(t.save(),!r.current){r.current=n,d(e,t,a,l),t.restore();return}u=u0.options.value.animationSpeed,p=null!=(s=uj.speeds[u])?s:uj.speeds.off,h=o=>{if(o-c.current<uj.frameInterval){i.current=requestAnimationFrame(h);return}(c.current=o,r.current)?(r.current={left:uO(r.current.left,n.left,p),top:uO(r.current.top,n.top,p),width:uO(r.current.width,n.width,p),height:uO(r.current.height,n.height,p)},d(e,t,a,l),Math.abs(r.current.left-n.left)>.1||Math.abs(r.current.top-n.top)>.1||Math.abs(r.current.width-n.width)>.1||Math.abs(r.current.height-n.height)>.1?i.current=requestAnimationFrame(h):(r.current=n,d(e,t,a,l),cancelAnimationFrame(i.current),t.restore())):cancelAnimationFrame(i.current)},cancelAnimationFrame(i.current),clearTimeout(o.current),i.current=requestAnimationFrame(h),o.current=setTimeout(()=>{cancelAnimationFrame(i.current),r.current=n,d(e,t,a,l),t.restore()},1e3)})(t,n,s,a,l)},p=t=>{if(!e.current||s.current)return;let i=o=>{if(e.current&&"opacity"===o.propertyName&&s.current){var l;let o;e.current.removeEventListener("transitionend",i),(o=(l=e.current).getContext("2d"))&&o.clearRect(0,0,l.width,l.height),r.current=null,n.current=null,a.current=null,l.classList.remove("fade-in"),s.current=!1,null==t||t()}},o=l.current.get("fade-out");o&&(o(),l.current.delete("fade-out")),e.current.addEventListener("transitionend",i),l.current.set("fade-out",()=>{var t;null==(t=e.current)||t.removeEventListener("transitionend",i)}),s.current=!0,e.current.classList.remove("fade-in"),requestAnimationFrame(()=>{var t;null==(t=e.current)||t.classList.add("fade-out")})},h=()=>{e.current&&(s.current=!1,e.current.classList.remove("fade-out"),requestAnimationFrame(()=>{var t;null==(t=e.current)||t.classList.add("fade-in")}))},m=l5(n=>{var i,l;if("inspecting"!==uQ.inspectState.peek().kind||!t.current)return;t.current.style.pointerEvents="none";let c=document.elementFromPoint(null!=(i=null==n?void 0:n.clientX)?i:0,null!=(l=null==n?void 0:n.clientY)?l:0);if(t.current.style.removeProperty("pointer-events"),clearTimeout(o.current),c&&c!==e.current){let{parentCompositeFiber:e}=s1(c);if(e){let t=s3(e);if(t)return void(t!==a.current&&(a.current=t,s4.has(t.tagName)?p():h(),uQ.inspectState.value={kind:"inspecting",hoveredDomElement:t}))}}r.current&&e.current&&!s.current&&p()},32),f=(e,t)=>{let r=n.current;if(!r)return!1;let a=t.getBoundingClientRect(),i=t.width/a.width,o=t.height/a.height,l=(e.clientX-a.left)*i,s=(e.clientY-a.top)*o,c=l/uP,d=s/uP;return c>=r.x&&c<=r.x+r.width&&d>=r.y&&d<=r.y+r.height},g=r=>{if(r.__reactScanSyntheticEvent)return;let n=uQ.inspectState.peek(),i=e.current;if(i&&t.current){if(f(r,i)){r.preventDefault(),r.stopPropagation(),"focused"===n.kind&&(uQ.inspectState.value={kind:"inspecting",hoveredDomElement:n.focusedDomElement});return}"inspecting"===n.kind&&(e=>{var t,r;let n=["react-scan-inspect-element","react-scan-power"];if(e.target instanceof HTMLElement&&n.includes(e.target.id))return;let i=null==(t=a.current)?void 0:t.tagName;if(i&&s4.has(i))return;e.preventDefault(),e.stopPropagation();let o=null!=(r=a.current)?r:document.elementFromPoint(e.clientX,e.clientY);if(!o)return;let l=e.composedPath().at(0);if(l instanceof HTMLElement&&n.includes(l.id)){let t=new MouseEvent(e.type,e);t.__reactScanSyntheticEvent=!0,l.dispatchEvent(t);return}let{parentCompositeFiber:s}=s1(o);if(!s)return;let c=s3(s);if(!c){a.current=null,uQ.inspectState.value={kind:"inspect-off"};return}uQ.inspectState.value={kind:"focused",focusedDomElement:c,fiber:s}})(r)}},v=t=>{var n;if("Escape"!==t.key)return;let i=uQ.inspectState.peek();if(e.current&&(null==(n=document.activeElement)?void 0:n.id)!=="react-scan-root"&&(so.value={view:"none"},"focused"===i.kind||"inspecting"===i.kind))switch(t.preventDefault(),t.stopPropagation(),i.kind){case"focused":h(),r.current=null,a.current=i.focusedDomElement,uQ.inspectState.value={kind:"inspecting",hoveredDomElement:i.focusedDomElement};break;case"inspecting":p(()=>{st.value=!1,uQ.inspectState.value={kind:"inspect-off"}})}},w=(e,t)=>{let r=e.getBoundingClientRect();e.width=r.width*uP,e.height=r.height*uP,t.scale(uP,uP),t.save()},b=()=>{let t=uQ.inspectState.peek(),n=e.current;if(!n)return;let a=null==n?void 0:n.getContext("2d");a&&(cancelAnimationFrame(i.current),clearTimeout(o.current),w(n,a),r.current=null,"focused"===t.kind&&t.focusedDomElement?u(t.focusedDomElement,n,a,"locked"):"inspecting"===t.kind&&t.hoveredDomElement&&u(t.hoveredDomElement,n,a,"inspecting"))},y=t=>{let r=uQ.inspectState.peek(),n=e.current;n&&("inspecting"===r.kind||f(t,n))&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())};return te(()=>{let n=e.current;if(!n)return;let s=null==n?void 0:n.getContext("2d");if(!s)return;w(n,s);let c=uQ.inspectState.subscribe(e=>{((e,n,o)=>{var s;let c;switch(null==(s=l.current.get(e.kind))||s(),t.current&&"inspecting"!==e.kind&&(t.current.style.pointerEvents="none"),i.current&&cancelAnimationFrame(i.current),e.kind){case"inspect-off":p();return;case"inspecting":u(e.hoveredDomElement,n,o,"inspecting");break;case"focused":if(!e.focusedDomElement)return;a.current!==e.focusedDomElement&&(a.current=e.focusedDomElement),so.value={view:"inspector"},u(e.focusedDomElement,n,o,"locked"),(c=uQ.lastReportTime.subscribe(()=>{if(i.current&&r.current){let{parentCompositeFiber:t}=s1(e.focusedDomElement);t&&u(e.focusedDomElement,n,o,"locked")}}))&&l.current.set(e.kind,c)}})(e,n,s)});return window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("resize",b,{passive:!0}),document.addEventListener("pointermove",m,{passive:!0,capture:!0}),document.addEventListener("pointerdown",y,{capture:!0}),document.addEventListener("click",g,{capture:!0}),document.addEventListener("keydown",v,{capture:!0}),()=>{for(let e of l.current.values())null==e||e();c(),window.removeEventListener("scroll",b),window.removeEventListener("resize",b),document.removeEventListener("pointermove",m,{capture:!0}),document.removeEventListener("click",g,{capture:!0}),document.removeEventListener("pointerdown",y,{capture:!0}),document.removeEventListener("keydown",v,{capture:!0}),i.current&&cancelAnimationFrame(i.current),clearTimeout(o.current)}},[]),rx(ez,{children:[rx("div",{ref:t,className:l2("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),rx("canvas",{ref:e,dir:"ltr",className:l2("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},uL=class{constructor(e,t,r){oV(this,"width",e),oV(this,"height",t),oV(this,"safeArea",r),oV(this,"maxWidth"),oV(this,"maxHeight"),this.maxWidth=e-r.left-r.right,this.maxHeight=t-r.top-r.bottom}rightEdge(e){return this.width-e-this.safeArea.right}bottomEdge(e){return this.height-e-this.safeArea.bottom}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},uI=()=>{let e,t=window.innerWidth,r=window.innerHeight,n=se();return b&&b.width===t&&b.height===r&&(e=b.safeArea,e.top===n.top&&e.right===n.right&&e.bottom===n.bottom&&e.left===n.left)?b:b=new uL(t,r,n)},uD=(e,t,r)=>{let n,a,i="rtl"===getComputedStyle(document.body).direction,o=window.innerWidth,l=window.innerHeight,s=se(),c=550===t,d=c?t:Math.min(t,o-s.left-s.right),u=c?r:Math.min(r,l-s.top-s.bottom),p=s.left,h=o-d-s.right,m=s.top,f=l-u-s.bottom,g=-s.right,v=-(o-d-s.left);switch(e){case"top-right":n=i?g:h,a=m;break;case"bottom-right":n=i?g:h,a=f;break;case"bottom-left":n=i?v:p,a=f;break;case"top-left":n=i?v:p,a=m;break;default:n=p,a=m}return c&&(n=i?Math.min(g,Math.max(n,v)):Math.max(p,Math.min(n,h)),a=Math.max(m,Math.min(a,f))),{x:n,y:a}},uB=(e,t,r)=>{let n=r?uI().maxWidth:uI().maxHeight;return Math.min(Math.max(r?550:400,e+t),n)},uU=({position:e})=>{let t=tr(null),r=tr(null),n=tr(null),a=tr(null);return te(()=>{let i=t.current;if(!i)return;let o=()=>{var t,r,n;i.classList.remove("pointer-events-none");let a="focused"===uQ.inspectState.value.kind,o="none"!==so.value.view;(a||o)&&(t=sa.value.corner,r=sa.value.dimensions.isFullWidth,n=sa.value.dimensions.isFullHeight,r&&n||(r||n?r?e!==t.split("-")[0]:!!n&&e!==t.split("-")[1]:((e,t)=>{let[r,n]=t.split("-");return e!==r&&e!==n})(e,t)))?i.classList.remove("hidden","pointer-events-none","opacity-0"):i.classList.add("hidden","pointer-events-none","opacity-0")},l=sa.subscribe(e=>{(null===r.current||null===n.current||null===a.current||e.dimensions.width!==r.current||e.dimensions.height!==n.current||e.corner!==a.current)&&(o(),r.current=e.dimensions.width,n.current=e.dimensions.height,a.current=e.corner)}),s=uQ.inspectState.subscribe(()=>{o()});return()=>{l(),s(),r.current=null,n.current=null,a.current=null}},[]),rx("div",{ref:t,onPointerDown:ta(t=>{t.preventDefault(),t.stopPropagation();let r=sr.value;if(!r)return;let n=r.style,{dimensions:a}=sa.value,i=t.clientX,o=t.clientY,l=a.width,s=a.height,c=a.position;sa.value={...sa.value,dimensions:{...a,isFullWidth:!1,isFullHeight:!1,width:l,height:s,position:c}};let d=null,u=t=>{d||(n.transition="none",d=requestAnimationFrame(()=>{let{newSize:r,newPosition:a}=((e,t,r,n,a)=>{let i="rtl"===getComputedStyle(document.body).direction,o=se(),l=window.innerWidth-o.left-o.right,s=window.innerHeight-o.top-o.bottom,c=t.width,d=t.height,u=r.x,p=r.y;if(i&&e.includes("right")){let e=-r.x+t.width-o.right;c=Math.min(l,Math.max(550,Math.min(t.width+n,e))),u=r.x+(c-t.width)}if(i&&e.includes("left")){let e=window.innerWidth-r.x-o.left;c=Math.min(l,Math.max(550,Math.min(t.width-n,e)))}if(!i&&e.includes("right")){let e=window.innerWidth-r.x-o.right;c=Math.min(l,Math.max(550,Math.min(t.width+n,e)))}if(!i&&e.includes("left")){let e=r.x+t.width-o.left;c=Math.min(l,Math.max(550,Math.min(t.width-n,e))),u=r.x-(c-t.width)}if(e.includes("bottom")){let e=window.innerHeight-r.y-o.bottom;d=Math.min(s,Math.max(400,Math.min(t.height+a,e)))}if(e.includes("top")){let e=r.y+t.height-o.top;d=Math.min(s,Math.max(400,Math.min(t.height-a,e))),p=r.y-(d-t.height)}let h=o.left,m=window.innerWidth-o.right-c,f=o.top,g=window.innerHeight-o.bottom-d,v=-o.right,w=-(window.innerWidth-c-o.left);return{newSize:{width:c,height:d},newPosition:{x:u=i?Math.min(v,Math.max(u,w)):Math.max(h,Math.min(u,m)),y:p=Math.max(f,Math.min(p,g))}}})(e,{width:l,height:s},c,t.clientX-i,t.clientY-o);n.transform=`translate3d(${a.x}px, ${a.y}px, 0)`,n.width=`${r.width}px`,n.height=`${r.height}px`;let u=Math.min(Math.floor(r.width-120),Math.max(240,sa.value.componentsTree.width));sa.value={...sa.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.width,height:r.height,position:a},componentsTree:{...sa.value.componentsTree,width:u}},d=null}))},p=()=>{d&&(cancelAnimationFrame(d),d=null),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",p);let{dimensions:e,corner:t}=sa.value,a=uI(),i=a.isFullWidth(e.width),o=a.isFullHeight(e.height),l=t;(i&&o||i||o)&&(l=(e=>{let t=uI(),r={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)},n="top-left";for(let e in r)r[e]<r[n]&&(n=e);return n})(e.position));let s=uD(l,e.width,e.height),c=()=>{r.removeEventListener("transitionend",c)};r.addEventListener("transitionend",c),n.transform=`translate3d(${s.x}px, ${s.y}px, 0)`,sa.value={...sa.value,corner:l,dimensions:{isFullWidth:i,isFullHeight:o,width:e.width,height:e.height,position:s},lastDimensions:{isFullWidth:i,isFullHeight:o,width:e.width,height:e.height,position:s}},l3(oQ,{corner:l,dimensions:sa.value.dimensions,lastDimensions:sa.value.lastDimensions,componentsTree:sa.value.componentsTree})};document.addEventListener("pointermove",u,{passive:!0}),document.addEventListener("pointerup",p)},[]),onDblClick:ta(t=>{t.preventDefault(),t.stopPropagation();let r=sr.value;if(!r)return;let n=r.style,{dimensions:a,corner:i}=sa.value,o=uI(),l=o.isFullWidth(a.width),s=o.isFullHeight(a.height),c=l&&s,d=(l||s)&&!c,u=a.width,p=a.height,h=((e,t,r,n,a)=>{if(r){if("top-left"===e)return"bottom-right";if("top-right"===e)return"bottom-left";if("bottom-left"===e)return"top-right";if("bottom-right"===e)return"top-left";let[r,n]=t.split("-");if("left"===e)return`${r}-right`;if("right"===e)return`${r}-left`;if("top"===e)return`bottom-${n}`;if("bottom"===e)return`top-${n}`}if(n){if("left"===e)return`${t.split("-")[0]}-right`;if("right"===e)return`${t.split("-")[0]}-left`}if(a){if("top"===e)return`bottom-${t.split("-")[1]}`;if("bottom"===e)return`top-${t.split("-")[1]}`}return t})(e,i,c,l,s);"left"===e||"right"===e?(u=l?a.width:o.maxWidth,d&&(u=l?550:o.maxWidth)):(p=s?a.height:o.maxHeight,d&&(p=s?400:o.maxHeight)),c&&("left"===e||"right"===e?u=550:p=400);let m=uD(h,u,p),f={isFullWidth:o.isFullWidth(u),isFullHeight:o.isFullHeight(p),width:u,height:p,position:m},g=Math.floor(u-275),v=sa.value.componentsTree.width,w=Math.floor(.3*u),b=l?240:"left"!==e&&"right"!==e||l?Math.min(g,Math.max(240,v)):Math.min(g,Math.max(240,w));requestAnimationFrame(()=>{sa.value={corner:h,dimensions:f,lastDimensions:a,componentsTree:{...sa.value.componentsTree,width:b}},n.transition="all 0.25s cubic-bezier(0, 0, 0.2, 1)",n.width=`${u}px`,n.height=`${p}px`,n.transform=`translate3d(${m.x}px, ${m.y}px, 0)`}),l3(oQ,{corner:h,dimensions:f,lastDimensions:a,componentsTree:{...sa.value.componentsTree,width:b}})},[]),className:l2("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":"left"===e,"resize-right peer/right z-10":"right"===e,"resize-top peer/top":"top"===e,"resize-bottom peer/bottom":"bottom"===e}),children:rx("span",{className:"resize-line-wrapper",children:rx("span",{className:"resize-line",children:rx(oZ,{name:"icon-ellipsis",size:18,className:l2("text-neutral-400",("left"===e||"right"===e)&&"rotate-90")})})})})},uW={horizontal:{width:20,height:48},vertical:{width:48,height:20}},uH=()=>{let e=tr(null),t=tr(!1),r=tr(0),n=tr(0),a=tr(!1),i=ta((i=!0)=>{let o,l;if(!e.current)return;let{corner:s}=sa.value;if(ss.value){let e=uW[ss.value.orientation||"horizontal"];o=e.width,l=e.height}else if(t.current){let e=sa.value.lastDimensions;o=uB(e.width,0,!0),l=uB(e.height,0,!1),a.current&&(a.current=!1)}else o=r.current,l=n.current;let c=uD(s,o,l);if(ss.value){let{corner:e,orientation:t="horizontal"}=ss.value,r=uW[t],n=se();switch(e){case"top-left":c="horizontal"===t?{x:-1,y:n.top}:{x:n.left,y:-1};break;case"bottom-left":c="horizontal"===t?{x:-1,y:window.innerHeight-r.height-n.bottom}:{x:n.left,y:window.innerHeight-r.height+1};break;case"top-right":c="horizontal"===t?{x:window.innerWidth-r.width+1,y:n.top}:{x:window.innerWidth-r.width-n.right,y:-1};break;default:c="horizontal"===t?{x:window.innerWidth-r.width+1,y:window.innerHeight-r.height-n.bottom}:{x:window.innerWidth-r.width-n.right,y:window.innerHeight-r.height+1}}}let d=o<550||l<400,u=e.current,p=u.style,h=null,m=()=>{si(),u.removeEventListener("transitionend",m),h&&(cancelAnimationFrame(h),h=null)};u.addEventListener("transitionend",m),p.transition="all 0.25s cubic-bezier(0, 0, 0.2, 1)",h=requestAnimationFrame(()=>{p.width=`${o}px`,p.height=`${l}px`,p.transform=`translate3d(${c.x}px, ${c.y}px, 0)`,h=null});let f=se(),g={isFullWidth:o>=window.innerWidth-f.left-f.right,isFullHeight:l>=window.innerHeight-f.top-f.bottom,width:o,height:l,position:c};sa.value={corner:s,dimensions:g,lastDimensions:t?sa.value.lastDimensions:o>r.current?g:sa.value.lastDimensions,componentsTree:sa.value.componentsTree},i&&!d&&l3(oQ,{corner:sa.value.corner,dimensions:sa.value.dimensions,lastDimensions:sa.value.lastDimensions,componentsTree:sa.value.componentsTree}),si()},[]),o=ta(t=>{if(t.target.closest("button, a, input, textarea, select, pre, [contenteditable], [data-react-scan-selectable]")||(t.preventDefault(),!e.current))return;let r=e.current,n=r.style,{dimensions:a}=sa.value,o=t.clientX,l=t.clientY,s=a.position.x,c=a.position.y,d=s,u=c,p=null,h=!1,m=o,f=l,g=e=>{p||(h=!0,m=e.clientX,f=e.clientY,p=requestAnimationFrame(()=>{let e=m-o,t=f-l;d=Number(s)+e,u=Number(c)+t,n.transition="none",n.transform=`translate3d(${d}px, ${u}px, 0)`;let r=d+a.width,h=u+a.height,w=Math.max(0,-d),b=Math.max(0,r-window.innerWidth),y=Math.max(0,-u),x=Math.max(0,h-window.innerHeight),_=Math.min(a.width,w+b),k=Math.min(a.height,y+x),N=_*a.height+k*a.width-_*k>.35*(a.width*a.height);if(!N&&u0.options.value.showFPS){let e=d+a.width;N=e<=0||e-100>=window.innerWidth||u+a.height<=0||u>=window.innerHeight}if(N){let e,t=d+a.width/2,r=u+a.height/2,n=window.innerWidth/2,o=window.innerHeight/2;e=t<n?r<o?"top-left":"bottom-left":r<o?"top-right":"bottom-right";let l=Math.max(w,b),s=Math.max(y,x);sa.value={...sa.value,corner:e,lastDimensions:{...a,position:uD(e,a.width,a.height)}};let c={corner:e,orientation:l>s?"horizontal":"vertical"};ss.value=c,l3(o0,c),l3(oQ,sa.value),i(!1),document.removeEventListener("pointermove",g),document.removeEventListener("pointerup",v),p&&(cancelAnimationFrame(p),p=null)}p=null}))},v=()=>{if(!r)return;p&&(cancelAnimationFrame(p),p=null),document.removeEventListener("pointermove",g),document.removeEventListener("pointerup",v);let e=Math.abs(m-o),t=Math.abs(f-l),i=Math.sqrt(e*e+t*t);if(!h||i<60)return;let w=((e,t,r,n,a=100)=>{let i=void 0!==r?e-r:0,o=void 0!==n?t-n:0,l=window.innerWidth/2,s=window.innerHeight/2,c=i>a,d=o>a;if(c||i<-a){let e=t>s;return c?e?"bottom-right":"top-right":e?"bottom-left":"top-left"}if(d||o<-a){let t=e>l;return d?t?"bottom-right":"bottom-left":t?"top-right":"top-left"}return e>l?t>s?"bottom-right":"top-right":t>s?"bottom-left":"top-left"})(m,f,o,l,"focused"===uQ.inspectState.value.kind?80:40);if(w===sa.value.corner){n.transition="transform 0.25s cubic-bezier(0, 0, 0.2, 1)";let e=sa.value.dimensions.position;requestAnimationFrame(()=>{n.transform=`translate3d(${e.x}px, ${e.y}px, 0)`});return}let b=uD(w,a.width,a.height);if(d===s&&u===c)return;let y=()=>{n.transition="none",si(),r.removeEventListener("transitionend",y),p&&(cancelAnimationFrame(p),p=null)};r.addEventListener("transitionend",y),n.transition="transform 0.25s cubic-bezier(0, 0, 0.2, 1)",requestAnimationFrame(()=>{n.transform=`translate3d(${b.x}px, ${b.y}px, 0)`}),sa.value={corner:w,dimensions:{isFullWidth:a.isFullWidth,isFullHeight:a.isFullHeight,width:a.width,height:a.height,position:b},lastDimensions:sa.value.lastDimensions,componentsTree:sa.value.componentsTree},l3(oQ,{corner:w,dimensions:sa.value.dimensions,lastDimensions:sa.value.lastDimensions,componentsTree:sa.value.componentsTree})};document.addEventListener("pointermove",g),document.addEventListener("pointerup",v)},[]),l=ta(t=>{if(t.preventDefault(),!e.current||!ss.value)return;let{corner:n,orientation:a="horizontal"}=ss.value,o=t.clientX,l=t.clientY,s=!1,c=t=>{if(s)return;let u=t.clientX-o,p=t.clientY-l,h=!1;"horizontal"===a?n.endsWith("left")&&u>50?h=!0:n.endsWith("right")&&u<-50&&(h=!0):n.startsWith("top")&&p>50?h=!0:n.startsWith("bottom")&&p<-50&&(h=!0),h&&(s=!0,ss.value=null,l3(o0,null),0===r.current&&e.current?requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content",r.current=e.current.offsetWidth||300;let n=sa.value.lastDimensions,a=uB(n.width,0,!0),o=uB(n.height,0,!1),l=t.clientX-a/2,s=t.clientY-o/2,c=se();l=Math.max(c.left,Math.min(l,window.innerWidth-a-c.right)),s=Math.max(c.top,Math.min(s,window.innerHeight-o-c.bottom)),sa.value={...sa.value,dimensions:{...sa.value.dimensions,position:{x:l,y:s}}},i(!0),so.value=l4(o1)||{view:"none"},setTimeout(()=>{if(e.current){let r=new PointerEvent("pointerdown",{clientX:t.clientX,clientY:t.clientY,pointerId:t.pointerId,bubbles:!0});e.current.dispatchEvent(r)}},100)}}):(i(!0),so.value=l4(o1)||{view:"none"}),document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",d))},d=()=>{document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",d)};document.addEventListener("pointermove",c),document.addEventListener("pointerup",d)},[]);te(()=>{if(!e.current)return;l7(o1),ss.value?(n.current=36,r.current=0):(e.current.style.width="min-content",n.current=36,r.current=e.current.offsetWidth);let o=se();e.current.style.maxWidth=`calc(100vw - ${o.left+o.right}px)`,e.current.style.maxHeight=`calc(100vh - ${o.top+o.bottom}px)`,i(),"focused"===uQ.inspectState.value.kind||ss.value||a.current||(sa.value={...sa.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.current,height:n.current,position:sa.value.dimensions.position}}),sr.value=e.current;let l=sa.subscribe(t=>{if(!e.current)return;let{x:r,y:n}=t.dimensions.position,{width:a,height:i}=t.dimensions,o=e.current;requestAnimationFrame(()=>{o.style.transform=`translate3d(${r}px, ${n}px, 0)`,o.style.width=`${a}px`,o.style.height=`${i}px`})}),s=so.subscribe(e=>{t.current="none"!==e.view,i(),ss.value||("none"!==e.view?l3(o1,e):l7(o1))}),c=uQ.inspectState.subscribe(e=>{t.current="focused"===e.kind,i()}),d=()=>{i(!0)};return window.addEventListener("resize",d,{passive:!0}),()=>{window.removeEventListener("resize",d),s(),c(),l(),l3(oQ,{...sn(),corner:sa.value.corner})}},[]);let[s,c]=e9(!1);te(()=>{c(!0)},[]);let d=ss.value,u="";if(d){let{orientation:e="horizontal",corner:t}=d;u="horizontal"===e?(null==t?void 0:t.endsWith("right"))?"rotate-180":"":(null==t?void 0:t.startsWith("bottom"))?"-rotate-90":"rotate-90"}return rx(ez,{children:[rx(uF,{}),rx(uV.Provider,{value:e.current,children:rx("div",{id:"react-scan-toolbar",dir:"ltr",ref:e,onPointerDown:d?l:o,className:l2("fixed inset-0",d?(()=>{let{orientation:e="horizontal",corner:t}=d;return"horizontal"===e?(null==t?void 0:t.endsWith("right"))?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":(null==t?void 0:t.startsWith("bottom"))?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",d?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),style:{WebkitAppRegion:"no-drag"},children:d?rx("button",{type:"button",onClick:()=>{ss.value=null,l3(o0,null),0===r.current&&e.current&&requestAnimationFrame(()=>{e.current&&(e.current.style.width="min-content",r.current=e.current.offsetWidth||300,i(!0))}),so.value=l4(o1)||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:rx(oZ,{name:"icon-chevron-right",size:16,className:l2("transition-transform",u)})}):rx(ez,{children:[rx(uU,{position:"top"}),rx(uU,{position:"bottom"}),rx(uU,{position:"left"}),rx(uU,{position:"right"}),rx(u$,{})]})})})]})},uV=eK(null),uq=()=>rx("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[rx("title",{children:"React Scan Icons"}),rx("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rx("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),rx("path",{d:"M5 3a2 2 0 0 0-2 2"}),rx("path",{d:"M19 3a2 2 0 0 1 2 2"}),rx("path",{d:"M5 21a2 2 0 0 1-2-2"}),rx("path",{d:"M9 3h1"}),rx("path",{d:"M9 21h2"}),rx("path",{d:"M14 3h1"}),rx("path",{d:"M3 9v1"}),rx("path",{d:"M21 9v2"}),rx("path",{d:"M3 14v1"})]}),rx("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rx("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),rx("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),rx("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:rx("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),rx("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:rx("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),rx("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),rx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),rx("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rx("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),rx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),rx("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),rx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),rx("circle",{cx:"12",cy:"12",r:"1"}),rx("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),rx("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rx("circle",{cx:"12",cy:"12",r:"1"}),rx("circle",{cx:"19",cy:"12",r:"1"}),rx("circle",{cx:"5",cy:"12",r:"1"})]}),rx("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rx("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),rx("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),rx("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:rx("path",{d:"M20 6 9 17l-5-5"})}),rx("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:rx("path",{d:"m9 18 6-6-6-6"})}),rx("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rx("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),rx("circle",{cx:"12",cy:"12",r:"3"})]}),rx("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:rx("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),rx("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),rx("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),rx("path",{d:"M9 11.2h5.7"})]}),rx("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),rx("path",{d:"M12 9v4"}),rx("path",{d:"M12 17h.01"})]}),rx("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rx("path",{d:"M2 7v10"}),rx("path",{d:"M6 5v14"}),rx("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),rx("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rx("circle",{cx:"11",cy:"11",r:"8"}),rx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),rx("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rx("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),rx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),rx("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rx("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),rx("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),rx("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rx("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),rx("circle",{cx:"10",cy:"13",r:"8"}),rx("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),rx("path",{d:"M18 3 19.1 5.2"})]})]}),uK=class extends e${constructor(){super(...arguments),oV(this,"state",{hasError:!1,error:null}),oV(this,"handleReset",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?rx("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:rx("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[rx("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[rx(oZ,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),rx("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:(null==(e=this.state.error)?void 0:e.message)||JSON.stringify(this.state.error)}),rx("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},uG=!1,uX=["top","right","bottom","left"],uJ=e=>{if(l6(e))return{ok:!0,value:e};if(!l9(e))return{ok:!1,error:`- safeArea must be a non-negative number or { top?, right?, bottom?, left? }. Got "${JSON.stringify(e)}"`};let t={};for(let r of uX){let n=e[r];if(void 0!==n){if(!l6(n))return{ok:!1,error:`- safeArea.${r} must be a non-negative number. Got "${JSON.stringify(n)}"`};t[r]=n}}return{ok:!0,value:t}},uY=null,uZ=null,uQ={wasDetailsOpen:tC(!0),isInIframe:tC(oq&&window.self!==window.top),inspectState:tC({kind:"uninitialized"}),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:tC(0),interactionListeningForRenders:null,changesListeners:new Map},u0={instrumentation:null,componentAllowList:null,options:tC({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,Store:uQ,version:"0.5.7"};oq&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=u0.version);var u1=e=>{let t=[],r={};for(let n in e){let a=e[n];switch(n){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":case"useOffscreenCanvasWorker":"boolean"!=typeof a?t.push(`- ${n} must be a boolean. Got "${a}"`):r[n]=a;break;case"animationSpeed":["slow","fast","off"].includes(a)?r[n]=a:t.push(`- Invalid animation speed "${a}". Using default "fast"`);break;case"safeArea":{let e=uJ(a);e.ok?r.safeArea=e.value:t.push(e.error);break}case"onCommitStart":"function"!=typeof a?t.push(`- ${n} must be a function. Got "${a}"`):r.onCommitStart=a;break;case"onCommitFinish":"function"!=typeof a?t.push(`- ${n} must be a function. Got "${a}"`):r.onCommitFinish=a;break;case"onRender":"function"!=typeof a?t.push(`- ${n} must be a function. Got "${a}"`):r.onRender=a;break;default:t.push(`- Unknown option "${n}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join("\n")}`),r},u2=null,u5=()=>{if(!1===u2)return!1;null!=y||(y=j());let e=Array.from(y.renderers.values());if(0===e.length)return null;for(let t of e)if("production"!==J(t))return u2=!1,!1;return!0},u4=e=>{var t,r;let n,a,i,o,l,s,c,d,u,p,h,m,f,g,b;null==(t=window.reactScanCleanupListeners)||t.call(window);let y=(n=(e=>{let t;null==v||v(),t=()=>{document.hidden&&(dk=Date.now())},document.addEventListener("visibilitychange",t),v=()=>{document.removeEventListener("visibilitychange",t)};let r=new Map,n=new Map,a=t=>{if(!t.interactionId)return;if(t.interactionId&&t.target&&!n.has(t.interactionId)&&n.set(t.interactionId,t.target),t.target){let e=t.target;for(;e;){if("react-scan-toolbar-root"===e.id||"react-scan-root"===e.id)return;e=e.parentElement}}let a=r.get(t.interactionId);if(a)t.duration>a.latency?(a.entries=[t],a.latency=t.duration):t.duration===a.latency&&t.startTime===a.entries[0].startTime&&a.entries.push(t);else{var i;let n=["pointerup","click"].includes(i=t.name)?"pointer":(i.includes("key"),["keydown","keyup"].includes(i))?"keyboard":null;if(!n)return;let a={id:t.interactionId,latency:t.duration,entries:[t],target:t.target,type:n,startTime:t.startTime,endTime:Date.now(),processingStart:t.processingStart,processingEnd:t.processingEnd,duration:t.duration,inputDelay:t.processingStart-t.startTime,processingDuration:t.processingEnd-t.processingStart,presentationDelay:t.duration-(t.processingEnd-t.startTime),timestamp:Date.now(),timeSinceTabInactive:"never-hidden"===dk?"never-hidden":Date.now()-dk,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};r.set(a.id,a),dN||(dN=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(r.get(a.id)),dN=null})}))}},i=new PerformanceObserver(e=>{let t=e.getEntries();for(let e=0,r=t.length;e<r;e++)a(t[e])});try{i.observe({type:"event",buffered:!0,durationThreshold:16}),i.observe({type:"first-input",buffered:!0})}catch{}return()=>i.disconnect()})(e=>{dp.publish({kind:"entry-received",entry:e},"recording")}),a=e=>{w=e.composedPath().map(e=>e.id).filter(Boolean).includes("react-scan-toolbar")},document.addEventListener("mouseover",a),dL=a,i=()=>{dL&&document.removeEventListener("mouseover",dL)},o=()=>{dP=performance.now(),dF=performance.timeOrigin},document.addEventListener("visibilitychange",o),l=()=>{document.removeEventListener("visibilitychange",o)},d=function e(){let t=null;dO=null,t=dT(dO={});let r=performance.timeOrigin,n=performance.now();return s=requestAnimationFrame(()=>{c=setTimeout(()=>{let a=performance.now(),i=a-n,o=performance.timeOrigin;dI.push(a+o);let l=dI.filter(e=>a+o-e<=1e3),s=l.length;dI=l;let c=null!==dP&&null!==dF?a+o-(dF+dP)<100:null,d=null!==w&&w;!(i>150)||c||"visible"!==document.visibilityState||d||dj.getState().actions.addEvent({kind:"long-render",id:oJ(),data:{endAt:o+a,startAt:n+r,meta:{fiberRenders:dO,latency:i,fps:s}}}),dP=null,dF=null,null==t||t(),e()},0)}),t}(),u=()=>{d(),cancelAnimationFrame(s),clearTimeout(c)},h=dE("pointer",{onComplete:p=async(e,t,r)=>{dj.getState().actions.addEvent({kind:"interaction",id:oJ(),data:{startAt:t.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...t,kind:r.kind}}});let n=dp.getChannelState("recording");t.detailedTiming.stopListeningForRenders(),n.length&&dp.updateChannelState("recording",()=>new dd(50))}}),m=dE("keyboard",{onComplete:p}),r=e=>{du.setState(dd.fromArray(du.getCurrentState().concat(e),150))},f=dp.subscribe("recording",e=>{let t="auto-complete-race"===e.kind?dS.find(t=>t.interactionUUID===e.interactionUUID):((e,t)=>{let r=null;for(let n of t){if(n.type!==e.type)continue;if(null===r){r=n;continue}let t=(e,t)=>Math.abs(e.startDateTime)-(t.startTime+t.timeOrigin);t(n,e)<t(r,e)&&(r=n)}return r})(e.entry,dS);t&&r(t.completeInteraction(e))}),()=>{i(),l(),u(),n(),h(),f(),m()}),x=u3();window.reactScanCleanupListeners=()=>{y(),null==x||x()};let _=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){null==_||_.remove();return}null==_||_.remove();let{shadowRoot:k}=(()=>{if(uY&&uZ)return{rootContainer:uY,shadowRoot:uZ};(uY=document.createElement("div")).id="react-scan-root",uZ=uY.attachShadow({mode:"open"});let e=document.createElement("style");return e.textContent=de,uZ.appendChild(e),document.documentElement.appendChild(uY),{rootContainer:uY,shadowRoot:uZ}})();(g=document.createElement("div")).id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=g,k.appendChild(g),eq(rx(uK,{children:rx(ez,{children:[rx(uq,{}),rx(uH,{})]})}),g),b=g.remove.bind(g),g.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,g.hasChildNodes()&&(eq(null,g),eq(null,g)),b()}},u3=()=>{try{let e=document.documentElement;return(e=>{if(!(ur=(ut=document.createElement("canvas")).getContext("2d",{alpha:!0})))return null;let t=window.devicePixelRatio||1,{innerWidth:r,innerHeight:n}=window;ut.style.width=`${r}px`,ut.style.height=`${n}px`,ut.width=r*t,ut.height=n*t,ut.style.position="fixed",ut.style.left="0",ut.style.top="0",ut.style.pointerEvents="none",ut.style.zIndex="2147483600",ur.scale(t,t),e.appendChild(ut),us&&window.removeEventListener("resize",us);let a=()=>{if(!ut||!ur)return;let e=window.devicePixelRatio||1,{innerWidth:t,innerHeight:r}=window;ut.style.width=`${t}px`,ut.style.height=`${r}px`,ut.width=t*e,ut.height=r*e,ur.scale(e,e),ul()};return us=a,window.addEventListener("resize",a),un.subscribe(()=>{requestAnimationFrame(()=>{ul()})}),uc})(e)}catch(e){"verbose"===u0.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},u7=new WeakSet;try{var u8=window;u8._sentryModuleMetadata=u8._sentryModuleMetadata||{},u8._sentryModuleMetadata[(new u8.Error).stack]=Object.assign({},u8._sentryModuleMetadata[(new u8.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}e.s(["ReactScan",0,function(){return(0,x.useEffect)(()=>{((e={})=>{(e=>{var t;try{let r=u1(e);if(0===Object.keys(r).length)return;let n="showToolbar"in r&&void 0!==r.showToolbar,a={...u0.options.value,...r},{instrumentation:i}=u0;i&&"enabled"in r&&(i.isPaused.value=!1===r.enabled),u0.options.value=a;try{let e=null==(t=l4("react-scan-options"))?void 0:t.enabled;"boolean"==typeof e&&(a.enabled=e)}catch(e){"verbose"===u0.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}return l3("react-scan-options",(e=>{let{onCommitStart:t,onRender:r,onCommitFinish:n,...a}=e;return a})(a)),n&&u4(!!a.showToolbar),a}catch(e){"verbose"===u0.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}})(e),(!uQ.isInIframe.value||u0.options.value.allowInIframe||u0.runInAllEnvironments)&&(!1!==e.enabled||!0===e.showToolbar)&&(()=>{try{if(!oq||!u0.runInAllEnvironments&&u5()&&!u0.options.value.dangerouslyForceRunInProduction)return;(()=>{if(!uG){if(uG=!0,!("u"<typeof window)&&!window.__REACT_GRAB__&&navigator.onLine&&oU.version)try{fetch(`https://www.react-grab.com/api/version?source=react-scan&v=${oU.version}&t=${Date.now()}`,{referrerPolicy:"origin",keepalive:!0,priority:"low",cache:"no-store"}).then(e=>e.ok?e.text():null).then(e=>{if(!e)return;let t=e.trim();/^\d+\.\d+\.\d+/.test(t)&&t!==oU.version&&console.warn(`[React Scan] react-grab v${oU.version} is outdated (latest: v${t}). Update react-scan to pick up the newer react-grab.`)}).catch(()=>null)}catch{}}})();let e=l4("react-scan-options");if(e){let t=u1(e);Object.keys(t).length>0&&(u0.options.value={...u0.options.value,...t})}let t=u0.options;(e=>{var t,r;let n,a,i;if(globalThis.__REACT_SCAN_STOP__||c9)return;c9=!0;let o=!1,l=()=>{o||(n&&cancelAnimationFrame(n),n=requestAnimationFrame(()=>{o=!0;let t=(()=>{var e;let t,r;(r=document.querySelector("[data-react-scan]"))&&r.remove();let n=document.createElement("div");n.setAttribute("data-react-scan","true");let a=n.attachShadow({mode:"open"}),i=document.createElement("canvas");if(i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.pointerEvents="none",i.style.zIndex="2147483646",i.setAttribute("aria-hidden","true"),a.appendChild(i),!i)return null;cG=c7(),cq=i;let{innerWidth:o,innerHeight:l}=window;i.style.width=`${o}px`,i.style.height=`${l}px`;let s=o*cG,c=l*cG;i.width=s,i.height=c;let d=!1===u0.options.value.useOffscreenCanvasWorker;if(c3&&!window.__REACT_SCAN_EXTENSION__&&!d)try{let e=URL.createObjectURL(new Blob(['"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var T=(t,n)=>{let r=n-t;return Math.abs(r)<.5?n:t+r*.2};var x="115,97,230";function P(t,n){return n[0]-t[0]}function F(t){return[...t.entries()].sort(P)}function v([t,n]){let r=`${n.slice(0,4).join(", ")} \\xD7${t}`;return r.length>40&&(r=`${r.slice(0,40)}\\u2026`),r}var $=t=>{let n=new Map;for(let{name:e,count:u}of t)n.set(e,(n.get(e)||0)+u);let r=new Map;for(let[e,u]of n){let A=r.get(u);A?A.push(e):r.set(u,[e])}let d=F(r),a=v(d[0]);for(let e=1,u=d.length;e<u;e++)a+=", "+v(d[e]);return a.length>40?`${a.slice(0,40)}\\u2026`:a},H=t=>{let n=0;for(let r of t)n+=r.width*r.height;return n};var N=(t,n)=>{let r=t.getContext("2d",{alpha:!0});return r&&r.scale(n,n),r},X=(t,n,r,d)=>{t.clearRect(0,0,n.width/r,n.height/r);let a=new Map,e=new Map;for(let i of d.values()){let{x:o,y:c,width:l,height:g,targetX:s,targetY:f,targetWidth:h,targetHeight:m,frame:O}=i;s!==o&&(i.x=T(o,s)),f!==c&&(i.y=T(c,f)),h!==l&&(i.width=T(l,h)),m!==g&&(i.height=T(g,m));let M=`${s??o},${f??c}`,L=`${M},${h??l},${m??g}`,S=a.get(M);S?S.push(i):a.set(M,[i]);let C=1-O/45;i.frame++;let _=e.get(L)||{x:o,y:c,width:l,height:g,alpha:C};C>_.alpha&&(_.alpha=C),e.set(L,_)}for(let{x:i,y:o,width:c,height:l,alpha:g}of e.values()){t.strokeStyle=`rgba(${x},${g})`,t.lineWidth=1;let s=Math.round(i)+.5,f=Math.round(o)+.5,h=Math.round(c),m=Math.round(l);t.beginPath(),t.rect(s,f,h,m),t.stroke(),t.fillStyle=`rgba(${x},${g*.1})`,t.fill()}t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let i of a.values()){let o=i[0],{x:c,y:l,frame:g}=o,s=1-g/45,f=$(i),{width:h}=t.measureText(f),m=11;u.set(`${c},${l},${h},${f}`,{text:f,width:h,height:m,alpha:s,x:c,y:l,outlines:i});let O=l-m-4;if(O<0&&(O=0),g>45)for(let M of i)d.delete(String(M.id))}let A=Array.from(u.entries()).sort(([i,o],[c,l])=>H(l.outlines)-H(o.outlines));for(let[i,o]of A)if(u.has(i))for(let[c,l]of u.entries()){if(i===c)continue;let{x:g,y:s,width:f,height:h}=o,{x:m,y:O,width:M,height:L}=l;g+f>m&&m+M>g&&s+h>O&&O+L>s&&(o.text=$(o.outlines.concat(l.outlines)),o.width=t.measureText(o.text).width,u.delete(c))}for(let i of u.values()){let{x:o,y:c,alpha:l,width:g,height:s,text:f}=i,h=c-s-4;h<0&&(h=0),t.fillStyle=`rgba(${x},${l})`,t.fillRect(o,h,g+4,s+4),t.fillStyle=`rgba(255,255,255,${l})`,t.fillText(f,o+2,h+s)}return d.size>0};var p=null,w=null,b=1,y=new Map,E=null,R=()=>{if(!w||!p)return;X(w,p,b,y)?E=requestAnimationFrame(R):E=null};self.onmessage=t=>{let{type:n}=t.data;if(n==="init"&&(p=t.data.canvas,b=t.data.dpr,p&&(p.width=t.data.width,p.height=t.data.height,w=N(p,b))),!(!p||!w)){if(n==="resize"){b=t.data.dpr,p.width=t.data.width*b,p.height=t.data.height*b,w.resetTransform(),w.scale(b,b),R();return}if(n==="draw-outlines"){let{data:r,names:d}=t.data,a=new Float32Array(r);for(let e=0;e<a.length;e+=7){let u=a[e+2],A=a[e+3],i=a[e+4],o=a[e+5],c=a[e+6],l={id:a[e],name:d[e/7],count:a[e+1],x:u,y:A,width:i,height:o,frame:0,targetX:u,targetY:A,targetWidth:i,targetHeight:o,didCommit:c},g=String(l.id),s=y.get(g);s?(s.count++,s.frame=0,s.targetX=u,s.targetY=A,s.targetWidth=i,s.targetHeight=o,s.didCommit=c):y.set(g,l)}E||(E=requestAnimationFrame(R));return}if(n==="scroll"){let{deltaX:r,deltaY:d}=t.data;for(let a of y.values()){let e=a.x-r,u=a.y-d;a.targetX=e,a.targetY=u}}}};})();\n'],{type:"application/javascript"}));cV=new Worker(e);let t=i.transferControlToOffscreen();cV.postMessage({type:"init",canvas:t,width:i.width,height:i.height,dpr:cG},[t])}catch(e){cV=null,"verbose"===u0.options.value._debug&&console.warn("Failed to initialize OffscreenCanvas worker:",e)}cV||(e=cG,(t=i.getContext("2d",{alpha:!0}))&&t.scale(e,e),cK=t);let u=!1;window.addEventListener("resize",()=>{u||(u=!0,setTimeout(()=>{let e=window.innerWidth,t=window.innerHeight;cG=c7(),i.style.width=`${e}px`,i.style.height=`${t}px`,cV?cV.postMessage({type:"resize",width:e,height:t,dpr:cG}):(i.width=e*cG,i.height=t*cG,cK&&(cK.resetTransform(),cK.scale(cG,cG)),c4()),u=!1}))});let p=window.scrollX,h=window.scrollY,m=!1;return window.addEventListener("scroll",()=>{m||(m=!0,setTimeout(()=>{let{scrollX:e,scrollY:t}=window,r=e-p,n=t-h;p=e,h=t,cV?cV.postMessage({type:"scroll",deltaX:r,deltaY:n}):requestAnimationFrame(cH.bind(null,cJ,r,n)),m=!1},32))}),setInterval(()=>{cZ.size&&requestAnimationFrame(c5)},32),a.appendChild(i),n})();t&&document.documentElement.appendChild(t),e()}))},s=(t="react-scan-devtools-0.1.0",r={onCommitStart:()=>{var e,t;null==(t=(e=u0.options.value).onCommitStart)||t.call(e)},onActive:(a=!1,()=>{globalThis.__REACT_SCAN_STOP__||a||(a=!0,l(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:u0}),clearInterval(g),g=setInterval(()=>{c8&&(uQ.lastReportTime.value=Date.now(),c8=!1)},50),(()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;")})())}),onError:()=>{},isValidFiber:c6,onRender:(e,t)=>{var r,n,a,i;I(e)&&(null==(r=uQ.interactionListeningForRenders)||r.call(uQ,e,t));let o=null==(n=u0.instrumentation)?void 0:n.isPaused.value,l="inspect-off"===uQ.inspectState.value.kind||"uninitialized"===uQ.inspectState.value.kind;o&&l||(o||(e=>{if(!I(e))return;let t="string"==typeof e.type?e.type:X(e);if(!t)return;let r=cY.get(e),n=(e=>{let t=[],r=[];for(L(e)?t.push(e):e.child&&r.push(e.child);r.length;){let e=r.pop();if(!e)break;L(e)?t.push(e):e.child&&r.push(e.child),e.sibling&&r.push(e.sibling)}return t})(e),a=B(e);r?r.count++:(cY.set(e,{name:t,count:1,elements:n.map(e=>e.stateNode),didCommit:+!!a}),cZ.add(e))})(e),u0.options.value.log&&(e=>{var t;let r=new Map;for(let n=0,a=e.length;n<a;n++){let a=e[n];if(!a.componentName)continue;let i=null!=(t=r.get(a.componentName))?t:[],o=oG([{aggregatedCount:1,computedKey:null,name:a.componentName,frame:null,...a,changes:{type:a.changes.reduce((e,t)=>e|t.type,0),unstable:a.changes.some(e=>e.unstable)},phase:a.phase,computedCurrent:null}]);if(!o)continue;let l=null,s=null;if(a.changes)for(let e=0,t=a.changes.length;e<t;e++){let{name:t,prevValue:r,nextValue:n,unstable:o,type:c}=a.changes[e];1===c?(null!=l||(l={}),null!=s||(s={}),l[`${o?"⚠️":""}${t} (prev)`]=r,s[`${o?"⚠️":""}${t} (next)`]=n):i.push({prev:r,next:n,type:4===c?"context":"state",unstable:null!=o&&o})}l&&s&&i.push({prev:l,next:s,type:"props",unstable:!1}),r.set(o,i)}for(let[e,t]of Array.from(r.entries())){for(let{type:r,prev:n,next:a,unstable:i}of(console.group(`%c${e}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;"),t))console.log(`${r}:`,i?"⚠️":"",n,"!==",a);console.groupEnd()}})(t),"focused"===uQ.inspectState.value.kind&&(sf.value=Date.now()),l||(e=>{var t,r;if(I(e)&&!1!==u0.options.value.showToolbar&&"focused"===uQ.inspectState.value.kind){let{selfTime:n}=q(e),a=X(e.type),i=Q(e),o=uQ.reportData.get(i),l=null!=(t=null==o?void 0:o.count)?t:0,s=null!=(r=null==o?void 0:o.time)?r:0,c=uQ.changesListeners.get(Q(e));if(null==c?void 0:c.length){let t,r=s5(e).map(e=>({type:1,name:e.name,value:e.value,prevValue:e.prevValue,unstable:!1})),n=(e=>{var t,r;if(!e)return[];let n=[];if(0===e.tag||11===e.tag||15===e.tag||14===e.tag){let r=e.memoizedState,a=null==(t=e.alternate)?void 0:t.memoizedState,i=0;for(;r;){if(r.queue&&void 0!==r.memoizedState){let e={type:2,name:i.toString(),value:r.memoizedState,prevValue:null==a?void 0:a.memoizedState};oX(e.prevValue,e.value)||n.push(e)}r=r.next,a=null==a?void 0:a.next,i++}return n}if(1===e.tag){let t={type:3,name:"state",value:e.memoizedState,prevValue:null==(r=e.alternate)?void 0:r.memoizedState};oX(t.prevValue,t.value)||n.push(t)}return n})(e),a=(t=[],((e,t)=>{try{let r=e.dependencies,n=e.alternate?.dependencies;if(!r||!n||"object"!=typeof r||!("firstContext"in r)||"object"!=typeof n||!("firstContext"in n))return!1;let a=r.firstContext,i=n.firstContext;for(;a&&"object"==typeof a&&"memoizedValue"in a||i&&"object"==typeof i&&"memoizedValue"in i;){if(!0===t(a,i))return!0;a=a?.next,i=i?.next}}catch{}})(e,cA.bind(t)),t).map(e=>({name:e.name,type:4,value:e.value,contextType:e.contextType}));c.forEach(e=>{e({propsChanges:r,stateChanges:n,contextChanges:a})})}let d={count:l+1,time:s+n||0,renders:[],displayName:a,type:G(e.type)||null,changes:[]};uQ.reportData.set(i,d),c8=!0}})(e),null==(i=(a=u0.options.value).onRender)||i.call(a,e,t))},onCommitFinish:()=>{var e,t;l(),null==(t=(e=u0.options.value).onCommitFinish)||t.call(e)},onPostCommitFiberRoot(){l()},trackChanges:!1},i={isPaused:tC(!u0.options.value.enabled),fiberRoots:new WeakSet},cz.set(t,{key:t,config:r,instrumentation:i}),c$||(c$=!0,(e=>{let t=j(e.onActive);t._instrumentationSource=e.name??k;let r=t.onCommitFiberRoot;if(e.onCommitFiberRoot){let n=(t,a,i)=>{r!==n&&(r?.(t,a,i),e.onCommitFiberRoot?.(t,a,i))};t.onCommitFiberRoot=n}let n=t.onCommitFiberUnmount;if(e.onCommitFiberUnmount){let r=(a,i)=>{t.onCommitFiberUnmount===r&&(n?.(a,i),e.onCommitFiberUnmount?.(a,i))};t.onCommitFiberUnmount=r}let a=t.onPostCommitFiberRoot;if(e.onPostCommitFiberRoot){let r=(n,i)=>{t.onPostCommitFiberRoot===r&&(a?.(n,i),e.onPostCommitFiberRoot?.(n,i))};t.onPostCommitFiberRoot=r}})({name:"react-scan",onActive:r.onActive,onCommitFiberRoot(e,t){i.fiberRoots.add(t);let r=cR();for(let e of r)e.config.onCommitStart();for(let e of(((e,t)=>{let r="current"in e?e.current:e,n=ei.get(e);n||(n={id:ea++,prevFiber:null},ei.set(e,n));let{prevFiber:a}=n;if(r)if(null!==a){let e=a&&null!=a.memoizedState&&null!=a.memoizedState.element&&!0!==a.memoizedState.isDehydrated,n=null!=r.memoizedState&&null!=r.memoizedState.element&&!0!==r.memoizedState.isDehydrated;!e&&n?ee(t,r,!1):e&&n?et(t,r,r.alternate,null):e&&!n&&er(t,r)}else ee(t,r,!0);else er(t,r);n.prevFiber=r})(t.current,(e,t)=>{let r=G(e.type);if(!r)return null;let n=cR(),a=[];for(let t=0,r=n.length;t<r;t++)n[t].config.isValidFiber(e)&&a.push(t);if(!a.length)return null;let i=[];if(n.some(e=>e.config.trackChanges)){let t=cm(e).changes,r=cf(e).changes,n=cg(e).changes;for(let n of(i.push.apply(null,t.map(e=>({type:1,name:e.name,value:e.value}))),r))1===e.tag?i.push({type:3,name:n.name.toString(),value:n.value}):i.push({type:2,name:n.name.toString(),value:n.value});i.push.apply(null,n.map(e=>({type:4,name:e.name,value:e.value,contextType:Number(e.contextType)})))}let{selfTime:o,totalTime:l}=q(e),s=cM(),c={phase:cx[t],componentName:X(r),count:1,changes:i,time:o,forget:K(e),unnecessary:null,didCommit:B(e),fps:s},d=i.length>0,u=(e=>{let t=[],r=[e];for(;r.length;){let e=r.pop();e&&(L(e)&&B(e)&&D(e)&&t.push(e),e.child&&r.push(e.child),e.sibling&&r.push(e.sibling))}return t})(e).length>0;"update"===t&&((e,t,r,n,a)=>{let i=Date.now(),o=cP(e);if((n||a)&&(!o||i-(o.lastRenderTimestamp||0)>16)){var l;let n,a,s,c=o||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:i};c.renderCount=(c.renderCount||0)+1,c.selfTime=t||0,c.totalTime=r||0,c.lastRenderTimestamp=i,l={...c},n=G(e.type),a=cj(e),(s=cO.get(n))||(s=new Map,cO.set(n,s)),s.set(a,l)}})(e,o,l,d,u);for(let t=0,r=a.length;t<r;t++)n[a[t]].config.onRender(e,[c])}),r))e.config.onCommitFinish()},onPostCommitFiberRoot(){for(let e of cR())e.config.onPostCommitFiberRoot()}})),i);u0.instrumentation=s})(()=>{u4(!!t.value.showToolbar)}),oq&&setTimeout(()=>{let e;e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__,e?._instrumentationIsActive||C(e)||z(e)||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(e){"verbose"===u0.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}})()})({enabled:!0})},[]),null}],434556)},564181,e=>{"use strict";var t=e.i(856757);try{var r=window;r._sentryModuleMetadata=r._sentryModuleMetadata||{},r._sentryModuleMetadata[(new r.Error).stack]=Object.assign({},r._sentryModuleMetadata[(new r.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}e.s(["ConsoleEasterEggClient",0,({text:e})=>{let[r,n]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{r||(console.log(e),n(!0))},[e,r]),null}])},373220,e=>{"use strict";var t=e.i(68982),r=e.i(734804),n=e.i(140802),a=e.i(856757),i=e.i(149932);try{var o="u">typeof window?window:e.g;o._sentryModuleMetadata=o._sentryModuleMetadata||{},o._sentryModuleMetadata[(new o.Error).stack]=Object.assign({},o._sentryModuleMetadata[(new o.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let l=function(e,t,r){if(!i.isBrowser)return[t,function(){}];var n=(0,a.useState)(function(){try{var n=sessionStorage.getItem(e);if("string"!=typeof n)return sessionStorage.setItem(e,r?String(t):JSON.stringify(t)),t;return r?n:JSON.parse(n||"null")}catch(e){return t}}),o=n[0],l=n[1];return(0,a.useEffect)(function(){try{var t=r?String(o):JSON.stringify(o);sessionStorage.setItem(e,t)}catch(e){}}),[o,l]};var s=e.i(791768);try{var c=window;c._sentryModuleMetadata=c._sentryModuleMetadata||{},c._sentryModuleMetadata[(new c.Error).stack]=Object.assign({},c._sentryModuleMetadata[(new c.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var d=e.i(8507),u=e.i(962718),p=e.i(167815),h=e.i(551360);try{var m=window;m._sentryModuleMetadata=m._sentryModuleMetadata||{},m._sentryModuleMetadata[(new m.Error).stack]=Object.assign({},m._sentryModuleMetadata[(new m.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}function f({content:e,onCookieDecisionChange:r}){return(0,t.jsx)("div",{role:"region","aria-label":"Cookie consent",className:"pointer-events-none fixed right-4 bottom-4 left-4 z-(--dialog-content-z-index) flex justify-start","data-visual-test":"removed",children:(0,t.jsxs)(u.AttioCard,{className:(0,h.cn)("pointer-events-auto relative w-fit","motion-safe:slide-in-from-bottom motion-safe:fade-in-50 motion-safe:animate-in motion-safe:duration-200 motion-safe:ease-out motion-reduce:animate-none"),children:[(0,t.jsx)("div",{className:(0,h.cn)("max-w-[22em] text-balance text-sm","[&_a]:underline"),children:(0,t.jsx)(d.StoryblokRichText,{doc:e.content})}),(0,t.jsxs)("div",{className:"mt-4 flex gap-2",children:[(0,t.jsx)(p.Button,{size:"responsive",onClick:()=>r("allow"),children:e.acceptButtonLabel}),(0,t.jsx)(p.Button,{variant:"outline",size:"responsive",onClick:()=>r("block"),children:e.rejectButtonLabel})]})]})})}var g=e.i(112086),v=e.i(665143);try{var w=window;w._sentryModuleMetadata=w._sentryModuleMetadata||{},w._sentryModuleMetadata[(new w.Error).stack]=Object.assign({},w._sentryModuleMetadata[(new w.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let b=[.23,1,.32,1];function y({content:e,onCookieDecisionChange:r}){let n=(0,v.useReducedMotion)(),a=.18*!n;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.motion.div,{"aria-hidden":"true",className:"pointer-events-none fixed inset-0 z-(--dialog-overlay-z-index) bg-primary-background/30 backdrop-blur-[4px] [mask-image:linear-gradient(to_top,black_35%,transparent_100%)]","data-visual-test":"removed",variants:{exit:{opacity:0,transition:{duration:a,ease:b}},hidden:{opacity:0},visible:{opacity:1,transition:{duration:a,ease:b}}},initial:!n&&"hidden",animate:"visible",exit:"exit"}),(0,t.jsx)("div",{className:"pointer-events-none fixed inset-0 z-(--dialog-content-z-index) flex items-end justify-center",children:(0,t.jsxs)(g.motion.div,{role:"region","aria-label":"Cookie consent",className:(0,h.cn)("dark pointer-events-auto relative mx-4 mb-16 flex w-full max-w-[600px] items-center gap-6 rounded-2xl border border-white-100/5 bg-secondary-background p-5 shadow-attio-6","max-sm:flex-col max-sm:items-stretch max-sm:gap-4"),variants:{exit:{opacity:0,scale:.97,transition:{duration:a,ease:b},y:12},hidden:{opacity:0,scale:.96,y:24},visible:{opacity:1,scale:1,transition:{duration:.22*!n,ease:b},y:0}},initial:!n&&"hidden",animate:"visible",exit:"exit",children:[(0,t.jsx)("div",{className:"min-w-0 flex-1",children:(0,t.jsx)("div",{className:(0,h.cn)("text-pretty text-primary-foreground text-sm","[&_a]:text-secondary-foreground [&_a]:underline [&_a]:underline-offset-2"),children:(0,t.jsx)(d.StoryblokRichText,{doc:e.content})})}),(0,t.jsxs)("div",{className:(0,h.cn)("flex shrink-0 items-center gap-2","max-sm:justify-start"),children:[(0,t.jsx)(p.Button,{size:"sm",onClick:()=>r("block"),children:e.rejectButtonLabel}),(0,t.jsx)(p.Button,{size:"sm",onClick:()=>r("allow"),children:e.acceptButtonLabel})]})]})})]})}try{var x=window;x._sentryModuleMetadata=x._sentryModuleMetadata||{},x._sentryModuleMetadata[(new x.Error).stack]=Object.assign({},x._sentryModuleMetadata[(new x.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}async function _({distinctId:e,event:t,context:r}){let n=JSON.stringify({distinctId:e,event:t,properties:r?{category:"website",label:"cookie_banner",...r}:{category:"website",label:"cookie_banner"}});if("function"==typeof navigator.sendBeacon){let e=new Blob([n],{type:"application/json"});if(navigator.sendBeacon("/api/consent",e))return}let a=new AbortController,i=window.setTimeout(()=>a.abort(),300);try{await fetch("/api/consent",{body:n,headers:{"content-type":"application/json"},keepalive:!0,method:"POST",signal:a.signal})}catch{return}finally{window.clearTimeout(i)}}try{var k=window;k._sentryModuleMetadata=k._sentryModuleMetadata||{},k._sentryModuleMetadata[(new k.Error).stack]=Object.assign({},k._sentryModuleMetadata[(new k.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let N="cookie-banner";try{var S=window;S._sentryModuleMetadata=S._sentryModuleMetadata||{},S._sentryModuleMetadata[(new S.Error).stack]=Object.assign({},S._sentryModuleMetadata[(new S.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}e.s(["CookieConsentClient",0,function({content:e,children:i}){let o=s.env.NEXT_PUBLIC_IS_PRODUCTION?".attio.com":void 0,[c,d]=(0,a.useState)(void 0),[u,p]=(0,a.useState)(null),[h,m]=l("attio_consent_session_id",null);function g(e,t){let r=h??crypto.randomUUID();h||m(r),_({context:t,distinctId:r,event:e})}let v=(0,a.useEffectEvent)(function(e){g("cookie_consent_shown",e)});(0,a.useEffect)(()=>{if(window!==window.parent)return void d("allow");let e=window.requestAnimationFrame(()=>{let e=r.default.get(s.env.NEXT_PUBLIC_COOKIE_DECISION_KEY),t=r.default.get("cookie-banner-variant"),n="control"===t||"test"===t?t:null,a=n?{experiment:N,variant:n}:void 0;(p(n),"allow"===e||"block"===e||"ignore"===e)?d(e):(v(a),r.default.set(s.env.NEXT_PUBLIC_COOKIE_DECISION_KEY,"ignore",{...o?{domain:o}:{},expires:730,sameSite:"lax",secure:!0}),d("ignore"))});return()=>window.cancelAnimationFrame(e)},[o]);let w=u?{experiment:N,variant:u}:void 0,b="ignore"===c||null===c,x=b&&"test"===u;function k(e){switch(r.default.set(s.env.NEXT_PUBLIC_COOKIE_DECISION_KEY,e,{...o?{domain:o}:{},expires:730,sameSite:"lax",secure:!0}),d(e),e){case"allow":g("cookie_consent_accepted",w),m(null),window.clarity&&window.clarity("consent");return;case"block":g("cookie_consent_rejected",w),m(null),window.gtag&&window.gtag("consent","update",{ad_personalization:"denied",ad_storage:"denied",ad_user_data:"denied",analytics_storage:"denied",functionality_storage:"granted",security_storage:"granted"}),Object.keys(r.default.get()).forEach(e=>{e===s.env.NEXT_PUBLIC_COOKIE_DECISION_KEY||e.startsWith("attio")||e.startsWith("intercom")||(r.default.remove(e),r.default.remove(e,{domain:".attio.com"}),r.default.remove(e,{domain:"attio.com"}))}),window.dataLayer&&(window.dataLayer=[]),window.mixpanel&&window.mixpanel.reset(),window.location.reload();return;case"ignore":return}}return(0,t.jsxs)(t.Fragment,{children:[("allow"===c||"ignore"===c||null===c)&&i,b&&!x&&(0,t.jsx)(f,{content:e,onCookieDecisionChange:k}),(0,t.jsx)(n.AnimatePresence,{children:x&&(0,t.jsx)(y,{content:e,onCookieDecisionChange:k})})]})}],373220)},457433,e=>{"use strict";var t=e.i(856757);try{var r=window;r._sentryModuleMetadata=r._sentryModuleMetadata||{},r._sentryModuleMetadata[(new r.Error).stack]=Object.assign({},r._sentryModuleMetadata[(new r.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}e.s(["PageScrollTracker",0,function(){return(0,t.useEffect)(()=>{let e=window.scrollY>0;function t(){let t=window.scrollY>0;t!==e&&(e=t,document.documentElement.setAttribute("data-scrolled",e?"true":"false"))}return document.documentElement.setAttribute("data-scrolled",e?"true":"false"),window.addEventListener("scroll",t,{passive:!0}),()=>{window.removeEventListener("scroll",t)}},[]),null}])},938645,e=>{"use strict";var t=e.i(68982),r=e.i(189306);try{var n=window;n._sentryModuleMetadata=n._sentryModuleMetadata||{},n._sentryModuleMetadata[(new n.Error).stack]=Object.assign({},n._sentryModuleMetadata[(new n.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}e.s(["SiteToaster",0,function(){return(0,t.jsx)(r.Toaster,{position:"top-center",toastOptions:{style:{borderRadius:"var(--radius-xl)",boxShadow:"0px 1px 2px 0px oklch(0 0 0 / 0.01),0px 2px 4px -1px oklch(0 0 0 / 0.02),0px 4px 8px -2px oklch(0 0 0 / 0.03),0px 8px 16px -4px oklch(0 0 0 / 0.04)",height:"fit-content",justifyContent:"center",padding:"12px",paddingRight:"14px",width:"fit-content"}},className:"flex w-full items-center justify-center"})}])},427423,e=>{"use strict";var t=e.i(68982),r=e.i(856757);try{var n="u">typeof window?window:e.g;n._sentryModuleMetadata=n._sentryModuleMetadata||{},n._sentryModuleMetadata[(new n.Error).stack]=Object.assign({},n._sentryModuleMetadata[(new n.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var a=(e,t,r,n,a,i,o,l)=>{let s=document.documentElement,c=["light","dark"];function d(t){var r;(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&i?a.map(e=>i[e]||e):a;r?(s.classList.remove(...n),s.classList.add(i&&i[t]?i[t]:t)):s.setAttribute(e,t)}),r=t,l&&c.includes(r)&&(s.style.colorScheme=r)}if(n)d(n);else try{let e=localStorage.getItem(t)||r,n=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;d(n)}catch(e){}},i=["light","dark"],o="(prefers-color-scheme: dark)",l="u"<typeof window,s=r.createContext(void 0),c=e=>r.useContext(s)?r.createElement(r.Fragment,null,e.children):r.createElement(u,{...e}),d=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:l="theme",themes:c=d,defaultTheme:u=n?"system":"light",attribute:g="data-theme",value:v,children:w,nonce:b,scriptProps:y})=>{let[x,_]=r.useState(()=>h(l,u)),[k,N]=r.useState(()=>"system"===x?f():x),S=v?Object.values(v):c,E=r.useCallback(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=f());let o=v?v[r]:r,l=t?m(b):null,s=document.documentElement,c=e=>{"class"===e?(s.classList.remove(...S),o&&s.classList.add(o)):e.startsWith("data-")&&(o?s.setAttribute(e,o):s.removeAttribute(e))};if(Array.isArray(g)?g.forEach(c):c(g),a){let e=i.includes(u)?u:null,t=i.includes(r)?r:e;s.style.colorScheme=t}null==l||l()},[b]),M=r.useCallback(e=>{let t="function"==typeof e?e(x):e;_(t);try{localStorage.setItem(l,t)}catch(e){}},[x]),C=r.useCallback(t=>{N(f(t)),"system"===x&&n&&!e&&E("system")},[x,e]);r.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(C),C(e),()=>e.removeListener(C)},[C]),r.useEffect(()=>{let e=e=>{e.key===l&&(e.newValue?_(e.newValue):M(u))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[M]),r.useEffect(()=>{E(null!=e?e:x)},[e,x]);let T=r.useMemo(()=>({theme:x,setTheme:M,forcedTheme:e,resolvedTheme:"system"===x?k:x,themes:n?[...c,"system"]:c,systemTheme:n?k:void 0}),[x,M,e,k,n,c]);return r.createElement(s.Provider,{value:T},r.createElement(p,{forcedTheme:e,storageKey:l,attribute:g,enableSystem:n,enableColorScheme:a,defaultTheme:u,value:v,themes:c,nonce:b,scriptProps:y}),w)},p=r.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:o,defaultTheme:l,value:s,themes:c,nonce:d,scriptProps:u})=>{let p=JSON.stringify([n,t,l,e,c,s,i,o]).slice(1,-1);return r.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"u"<typeof window?d:"",dangerouslySetInnerHTML:{__html:`(${a.toString()})(${p})`}})}),h=(e,t)=>{let r;if(!l){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},m=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},f=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light"),g=e.i(618807);try{var v=window;v._sentryModuleMetadata=v._sentryModuleMetadata||{},v._sentryModuleMetadata[(new v.Error).stack]=Object.assign({},v._sentryModuleMetadata[(new v.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let w=["/dark-shelves","/engineering","/platform/developers"];e.s(["ThemeProvider",0,function({children:e,...r}){let n=(0,g.useAppPathname)(),a=w.some(e=>n.startsWith(e));return(0,t.jsx)(c,{attribute:"class",enableSystem:!1,forcedTheme:a?"dark":void 0,defaultTheme:"light",disableTransitionOnChange:!0,...r,children:e})}],427423)},799380,e=>{"use strict";var t=e.i(926490);try{var r=window;r._sentryModuleMetadata=r._sentryModuleMetadata||{},r._sentryModuleMetadata[(new r.Error).stack]=Object.assign({},r._sentryModuleMetadata[(new r.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}window.__VISUAL_TEST_INSTANT_MOTION__&&(t.MotionGlobalConfig.instantAnimations=!0),e.s(["VisualTestInstantMotion",0,function(){return null}])},764480,e=>{"use strict";var t=e.i(68982),r=e.i(773732),n=e.i(838835),a=e.i(791768);try{var i=window;i._sentryModuleMetadata=i._sentryModuleMetadata||{},i._sentryModuleMetadata[(new i.Error).stack]=Object.assign({},i._sentryModuleMetadata[(new i.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}e.s(["GoogleTagManager",0,function(){return a.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.default,{id:"google-consent",dangerouslySetInnerHTML:{__html:`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}

                        gtag('consent', 'default', {
                            'ad_storage': 'granted',
                            'ad_user_data': 'granted',
                            'ad_personalization': 'granted',
                            'analytics_storage': 'granted'
                        });
                    `}}),(0,t.jsx)(r.GoogleTagManager,{gtmId:a.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID})]}):null}])},416913,e=>{"use strict";var t=e.i(96533),r=e.i(856757),n=e.i(791768),a=e.i(618807);try{var i=window;i._sentryModuleMetadata=i._sentryModuleMetadata||{},i._sentryModuleMetadata[(new i.Error).stack]=Object.assign({},i._sentryModuleMetadata[(new i.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}e.s(["Mixpanel",0,function(){let e=(0,a.useAppPathname)();return(0,r.useEffect)(()=>{n.env.NEXT_PUBLIC_MIXPANEL_TOKEN&&t.default.init(n.env.NEXT_PUBLIC_MIXPANEL_TOKEN,{api_host:"https://api-eu.mixpanel.com"})},[]),(0,r.useEffect)(()=>{n.env.NEXT_PUBLIC_MIXPANEL_TOKEN&&t.default.track_pageview()},[e]),null}])},638227,e=>{"use strict";var t=e.i(68982),r=e.i(838835),n=e.i(791768);try{var a=window;a._sentryModuleMetadata=a._sentryModuleMetadata||{},a._sentryModuleMetadata[(new a.Error).stack]=Object.assign({},a._sentryModuleMetadata[(new a.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let i=n.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;e.s(["CaptchaScript",0,function(){return i?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.default,{src:`https://www.google.com/recaptcha/api.js?render=${i}`,strategy:"lazyOnload"}),(0,t.jsx)("style",{children:".grecaptcha-badge { visibility: hidden !important; }"})]}):null}])},178558,e=>{"use strict";var t=e.i(68982),r=e.i(856757),n=e.i(965079),a=e.i(791768),i=e.i(992766),o=e.i(618807);try{var l=window;l._sentryModuleMetadata=l._sentryModuleMetadata||{},l._sentryModuleMetadata[(new l.Error).stack]=Object.assign({},l._sentryModuleMetadata[(new l.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}function s(){let{show:e}=(0,n.useIntercom)(),t=(0,i.useSearchParams)(),a=(0,o.useAppPathname)(),l=(0,i.useRouter)();return(0,r.useEffect)(()=>{if("messenger"===t.get("m")){e();let r=new URLSearchParams(t.toString());r.delete("m");let n=r.toString();l.replace(n?`${a}?${n}`:a)}},[t,l,a,e]),null}try{var c=window;c._sentryModuleMetadata=c._sentryModuleMetadata||{},c._sentryModuleMetadata[(new c.Error).stack]=Object.assign({},c._sentryModuleMetadata[(new c.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}e.s(["IntercomProvider",0,function({children:e}){return(0,t.jsxs)(n.IntercomProvider,{appId:a.env.NEXT_PUBLIC_INTERCOM_APP_ID,autoBoot:!0,shouldInitialize:a.env.NEXT_PUBLIC_IS_PRODUCTION,initializeDelay:2e3,children:[e,(0,t.jsx)(r.Suspense,{children:(0,t.jsx)(s,{})})]})}],178558)},949750,e=>{"use strict";var t=e.i(856757);try{var r=window;r._sentryModuleMetadata=r._sentryModuleMetadata||{},r._sentryModuleMetadata[(new r.Error).stack]=Object.assign({},r._sentryModuleMetadata[(new r.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let n=[{annotations:{readOnlyHint:!0},description:"View Attio's pricing plans and compare features across tiers including Free, Plus, Pro, and Enterprise.",execute:async()=>(window.location.href="/pricing",{content:[{text:"Navigating to the pricing page",type:"text"}]}),name:"view_pricing"}];e.s(["WebMcpTools",0,function(){return(0,t.useEffect)(()=>{if(!("modelContext"in navigator))return;let e=navigator.modelContext;for(let t of n)try{e.registerTool(t)}catch{}},[]),null}])}]);

//# debugId=f5ed4b28-7eb2-956e-402b-e8f6f95e6731