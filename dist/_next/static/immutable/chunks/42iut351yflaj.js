;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="6972bfa9-c24e-049c-a298-e9b869fa9f67")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,849648,e=>{"use strict";let t,a,i;var r=e.i(856757);try{var n="u">typeof window?window:e.g;n._sentryModuleMetadata=n._sentryModuleMetadata||{},n._sentryModuleMetadata[(new n.Error).stack]=Object.assign({},n._sentryModuleMetadata[(new n.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var s=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,u=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,h=function(e,t){return function(){return e&&(t=e(e=0)),t}},m=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},p=function(e,t,a,i){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=d(t),s=0,u=n.length;s<u;s++)r=n[s],c.call(e,r)||r===a||o(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(i=l(t,r))||i.enumerable});return e},v=function(e,t,a){return a=null!=e?s(u(e)):{},p(!t&&e&&e.__esModule?a:o(a,"default",{value:e,enumerable:!0}),e)},b=m(function(t,a){a.exports="u">typeof window?window:e.g});function g(e,t){return null!=t&&"u">typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):g(e,t)}var y=h(function(){y()});function f(e){return e&&"u">typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var E=h(function(){}),w=m(function(e,t){var a=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=a.call(e);e.length;){var i=e.shift(),r=t(i);if(r)return r;i.childNodes&&i.childNodes.length&&(e=a.call(i.childNodes).concat(e))}}}),T=m(function(e,t){function a(e,t){if(!g(this,a))return new a(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}y(),t.exports=a,a.prototype.nodeType=8,a.prototype.nodeName="#comment",a.prototype.toString=function(){return"[object Comment]"}}),A=m(function(e,t){function a(e,t){if(!g(this,a))return new a(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}y(),t.exports=a,a.prototype.type="DOMTextNode",a.prototype.nodeType=3,a.prototype.nodeName="#text",a.prototype.toString=function(){return this.data},a.prototype.replaceData=function(e,t,a){var i=this.data,r=i.substring(0,e),n=i.substring(e+t,i.length);this.data=r+a+n,this.length=this.data.length}}),k=m(function(e,t){t.exports=function(e){var t=this,a=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var i=t.listeners[a];if(i)return i.forEach(function(a){e.currentTarget=t,"function"==typeof a?a(e):a.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),M=m(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),S=m(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var a=this.listeners[e],i=a.indexOf(t);-1!==i&&a.splice(i,1)}}}),I=m(function(e,t){E(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"<!--"+t.data+"-->";default:var n,s,o;return s=[],o=(n=t).tagName,"http://www.w3.org/1999/xhtml"===n.namespaceURI&&(o=o.toLowerCase()),s.push("<"+o+function(e){var t=[];for(var a in e)(function(e,t){var a=f(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===a||"boolean"===a||"number"===a)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,a)&&t.push({name:a,value:e[a]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?i(t):""}(n)+function(e){var t=e.dataset,a=[];for(var r in t)a.push({name:"data-"+r,value:t[r]});return a.length?i(a):""}(n)),a.indexOf(o)>-1?s.push(" />"):(s.push(">"),n.childNodes.length?s.push.apply(s,n.childNodes.map(e)):n.textContent||n.innerText?s.push(r(n.textContent||n.innerText)):n.innerHTML&&s.push(n.innerHTML),s.push("</"+o+">")),s.join("")}};var a=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function i(e){var t=[];return e.forEach(function(e){var a=e.name,i=e.value;"style"===a&&(i=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(a){var i=e[a];a=a.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=a+":"+i+";"}),t}(i)),t.push(a+'="'+r(i).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),R=m(function(e,t){y();var a=w(),i=k(),r=M(),n=S(),s=I(),o="http://www.w3.org/1999/xhtml";function l(e,t,a){if(!g(this,l))return new l(e);var i=void 0===a?o:a||null;this.tagName=i===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=i,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var a=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[a]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var a=null==t?-1:this.childNodes.indexOf(t);return a>-1?this.childNodes.splice(a,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,a){var i=null,r=t,n=t.indexOf(":");(n>-1&&(i=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=a:(this._attributes[e]||(this._attributes[e]={}))[r]={value:a,prefix:i}},l.prototype.getAttributeNS=function(e,t){var a=this._attributes[e],i=a&&a[t]&&a[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof i?null:i},l.prototype.removeAttributeNS=function(e,t){var a=this._attributes[e];a&&delete a[t]},l.prototype.hasAttributeNS=function(e,t){var a=this._attributes[e];return!!a&&t in a},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=i,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),i=[];return a(this,function(e){if(1===e.nodeType){var a=(e.className||"").split(" ");t.every(function(e){return -1!==a.indexOf(e)})&&i.push(e)}}),i},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return a(this.childNodes,function(a){1===a.nodeType&&("*"===e||a.tagName.toLowerCase()===e)&&t.push(a)}),t},l.prototype.contains=function(e){return a(this,function(t){return e===t})||!1}}),C=m(function(e,t){y();var a=R();function i(e){if(!g(this,i))return new i;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=i,i.prototype.type="DocumentFragment",i.prototype.nodeType=11,i.prototype.nodeName="#document-fragment",i.prototype.appendChild=a.prototype.appendChild,i.prototype.replaceChild=a.prototype.replaceChild,i.prototype.removeChild=a.prototype.removeChild,i.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),L=m(function(e,t){function a(e){}t.exports=a,a.prototype.initEvent=function(e,t,a){this.type=e,this.bubbles=t,this.cancelable=a},a.prototype.preventDefault=function(){}}),D=m(function(e,t){y();var a=w(),i=T(),r=A(),n=R(),s=C(),o=L(),l=k(),d=M(),u=S();function c(){if(!g(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new i(e,this)},h.getElementById=function(e){return e=String(e),a(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),x=m(function(e,t){t.exports=new(D())}),P=m(function(t,a){var i,r=e.g,n=x();"u">typeof document?i=document:(i=r["__GLOBAL_DOCUMENT_CACHE@4"])||(i=r["__GLOBAL_DOCUMENT_CACHE@4"]=n),a.exports=i});function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=Array(t);a<t;a++)i[a]=e[a];return i}function N(e,t){if(e){if("string"==typeof e)return O(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(e,t)}}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var i,r,n=[],s=!0,o=!1;try{for(a=a.call(e);!(s=(i=a.next()).done)&&(n.push(i.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==a.return||a.return()}finally{if(o)throw r}}return n}}(e,t)||N(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var B=v(b()),H=v(b()),W=v(b()),$=function(){var e=W.default.performance,t=e&&e.timing,a=t&&t.navigationStart;return Math.round("number"==typeof a&&"function"==typeof e.now?a+e.now():Date.now())},q=function(){if("function"==typeof(null==(e=H.default.crypto)?void 0:e.getRandomValues)){a=new Uint8Array(32),H.default.crypto.getRandomValues(a);for(var e,t,a,i=0;i<32;i++)a[i]=a[i]%16}else{a=[];for(var r=0;r<32;r++)a[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?a[n]:3&a[n]|8;return n++,t.toString(16)});var s=$(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},V=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},K=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=V()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},F=function(e){e&&void 0!==e.nodeName?e=K(t=e):t=document.querySelector(e);var t,a=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,a]};function j(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("u">typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||N(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=function(e){var t,a,i,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,j(o)),d=(a=console.info).bind.apply(a,j(o)),u=(i=console.debug).bind.apply(i,j(o)),c=(r=console.warn).bind.apply(r,j(o)),h=(n=console.error).bind.apply(n,j(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];if(!(m>0))return l.apply(void 0,j(t))},debug:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];if(!(m>1))return u.apply(void 0,j(t))},info:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];if(!(m>2))return d.apply(void 0,j(t))},warn:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];if(!(m>3))return c.apply(void 0,j(t))},error:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];if(!(m>4))return h.apply(void 0,j(t))},get level(){return m},set level(_){_!==this.level&&(m=null!=_?_:s)}}}("[mux]"),Y=v(b());function Q(){return"1"===(Y.default.doNotTrack||Y.default.navigator&&Y.default.navigator.doNotTrack)}function z(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e,t){if(!g(e,t))throw TypeError("Cannot call a class as a function")}function X(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function J(e,t,a){return t&&X(e.prototype,t),a&&X(e,a),e}function ee(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function et(e){return(et=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ea(e,t,a){return(ea="u">typeof Reflect&&Reflect.get?Reflect.get:function(e,t,a){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=et(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(a||e):r.value}})(e,t,a||e)}function ei(e,t){return(ei=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}y(),E();var er=function(e){return en(e)[0]},en=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,a=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return a&&(t=(a.match(/[^\.]+\.[^\.]+$/)||[])[0]),[a,t]},es=v(b()),eo=function(){var e=es.default.performance;return void 0!==(e&&e.timing)},el=function(){var e=es.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},ed=function(){var e=es.default.performance,t=e&&e.timing;return t&&t.navigationStart};function eu(e,t,a){a=void 0===a?1:a,e[t]=e[t]||0,e[t]+=a}function ec(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},i=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),i.forEach(function(t){ee(e,t,a[t])})}return e}function eh(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t.push.apply(t,a)}return t})(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}),e}var em=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],ep=["x-cdn","content-type"].concat(em);function ev(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var a=e.split(": "),i=a.shift();i&&(ep.indexOf(i.toLowerCase())>=0||0===i.toLowerCase().indexOf("x-litix-"))&&(t[i]=a.join(": "))}}),t}function eb(e){if(e){var t=em.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var eg=function(e){var t={};for(var a in e){var i=e[a];-1!==i["DATA-ID"].search("io.litix.data.")&&(t[i["DATA-ID"].replace("io.litix.data.","")]=i.VALUE)}return t},ey=function(e){if(!e)return{};var t=ed(),a=e.loading,i=a?a.start:e.trequest,r=a?a.first:e.tfirst,n=a?a.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+i),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ef=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return ev(e.getAllResponseHeaders())},eE=function(e,t,a){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var i=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,a=parseInt(i.version);return 1===a&&null!==e.programDateTime&&(t=e.programDateTime),0===a&&null!==e.pdt&&(t=e.pdt),t};if(!eo())return void r.warn("performance timing not supported. Not tracking HLS.js.");var o=function(a,i){return e.emit(t,a,i)},l=function(e,t){var a=t.levels,i=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};a.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),i.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=ey(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,v=c.responseEnd;o("requestcompleted",eh(ec({},eg(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:v,request_type:"manifest",request_hostname:er(r),request_response_headers:ef(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};a.on(i.Events.MANIFEST_LOADED,l);var d=function(e,t){var a=t.details,i=t.level,r=t.networkDetails,l=ey(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=a.fragments[a.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:i,request_type:"manifest",request_hostname:er(a.url),request_response_headers:ef(r),video_holdback:a.holdBack&&n(a.holdBack),video_part_holdback:a.partHoldBack&&n(a.partHoldBack),video_part_target_duration:a.partTarget&&n(a.partTarget),video_target_duration:a.targetduration&&n(a.targetduration),video_source_is_live:a.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};a.on(i.Events.LEVEL_LOADED,d);var u=function(e,t){var a=t.details,i=t.networkDetails,r=ey(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:er(a.url),request_response_headers:ef(i)})};a.on(i.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var i=t.stats,r=t.networkDetails,n=t.frag,s=ey(i=i||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?ef(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?er(r.responseURL):void 0,request_id:h?eb(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(a.levels[n.level]||{}).width,m.request_video_height=(a.levels[n.level]||{}).height,m.request_labeled_bitrate=(a.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};a.on(i.Events.FRAG_LOADED,c);var h=function(e,t){var a=t.frag,i=a.start;o("fragmentchange",{currentFragmentPDT:s(a),currentFragmentStart:n(i)})};a.on(i.Events.FRAG_CHANGED,h);var m=function(e,t){var a,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?ef(u):void 0;(n===i.ErrorDetails.MANIFEST_LOAD_ERROR||n===i.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===i.ErrorDetails.FRAG_LOAD_ERROR||n===i.ErrorDetails.FRAG_LOAD_TIMEOUT||n===i.ErrorDetails.LEVEL_LOAD_ERROR||n===i.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===i.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===i.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===i.ErrorDetails.SUBTITLE_LOAD_ERROR||n===i.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===i.ErrorDetails.KEY_LOAD_ERROR||n===i.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:er(c),request_id:h?eb(h):void 0,request_type:n===i.ErrorDetails.FRAG_LOAD_ERROR||n===i.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===i.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===i.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===i.ErrorDetails.SUBTITLE_LOAD_ERROR||n===i.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===i.ErrorDetails.KEY_LOAD_ERROR||n===i.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null==(a=t.err)?void 0:a.message,"\n"):"")})};a.on(i.Events.ERROR,m);var p=function(e,t){var a=t.frag,i=a&&a._url||"";o("requestcanceled",{request_event_type:e,request_url:i,request_type:"media",request_hostname:er(i)})};a.on(i.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var v=function(e,t){var i=t.level,n=a.levels[i];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};a.on(i.Events.LEVEL_SWITCHED,v),a._stopMuxMonitor=function(){a.off(i.Events.MANIFEST_LOADED,l),a.off(i.Events.LEVEL_LOADED,d),a.off(i.Events.AUDIO_TRACK_LOADED,u),a.off(i.Events.FRAG_LOADED,c),a.off(i.Events.FRAG_CHANGED,h),a.off(i.Events.ERROR,m),a.off(i.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),a.off(i.Events.LEVEL_SWITCHED,v),a.off(i.Events.DESTROYING,a._stopMuxMonitor),delete a._stopMuxMonitor},a.on(i.Events.DESTROYING,a._stopMuxMonitor)},e_=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},ew=function(e,t){if(!e||!e.requestEndDate)return{};var a,i=er(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(a=ev(u[u.length-1]._responseHeaders||""));var c=a?eb(a):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:a,requestMediaDuration:d,requestHostname:i,requestUrl:r,requestId:c}},eT=function(e,t){if("function"==typeof t.getCurrentRepresentationForType){var a=t.getCurrentRepresentationForType(e);return a?{currentLevel:a.absoluteIndex,renditionWidth:a.width||null,renditionHeight:a.height||null,renditionBitrate:a.bandwidth}:{}}var i=t.getQualityFor(e),r=t.getCurrentTrackFor(e).bitrateList;return r?{currentLevel:i,renditionWidth:r[i].width||null,renditionHeight:r[i].height||null,renditionBitrate:r[i].bandwidth}:{}},eA=function(e){var t;return null==(t=e.match(/.*codecs\*?="(.*)"/))?void 0:t[1]},ek=function(e){try{var t,a;return null==(a=e.getVersion)||null==(t=a.call(e))?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},eM=function(e,t,a){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var i=e.log;if(!a||!a.on)return void i.warn("Invalid dash.js player reference. Monitoring blocked.");var r=ek(a),n=function(a,i){return e.emit(t,a,i)},s=function(e){var t=e.type,a=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:er(a),request_url:a})};a.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,i=e.chunk,r=e.request,s=(i||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=ew(r,a),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,b=c.requestMediaDuration,g=c.requestHostname,y=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:g,request_id:c.requestId,request_url:y,request_media_duration:b,request_rendition_lists:o})};r>=4?a.on("initFragmentLoaded",d):a.on("initFragmentLoaded",function(e){var t=e.type,a=e.fragmentModel,i=e.chunk;d({type:t,request:l(a),chunk:i})});var u=function(e){var t=e.type,i=e.chunk,r=e.request,s=i||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=ew(r,a),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,b=u.requestMediaDuration,g=u.requestHostname,y=u.requestUrl,f=u.requestId,E=eT(d,a),w=E.currentLevel,T=E.renditionWidth,A=E.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:g,request_id:f,request_url:y,request_media_start_time:l,request_media_duration:b,request_current_level:w,request_labeled_bitrate:E.renditionBitrate,request_video_width:T,request_video_height:A})};r>=4?a.on("mediaFragmentLoaded",u):a.on("mediaFragmentLoaded",function(e){var t=e.type,a=e.fragmentModel,i=e.chunk;u({type:t,request:l(a),chunk:i})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height))return void i.warn("have bitrate info for video but missing width/height");var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:eA(c.video.codec)}}},m=function(e,t,r){var s=e.mediaType;if("audio"===s||"video"===s){if("function"==typeof a.getRepresentationsByType)if(e.newRepresentation)o={bitrate:e.newRepresentation.bandwidth,width:e.newRepresentation.width,height:e.newRepresentation.height,qualityIndex:e.newRepresentation.absoluteIndex};else{var o,l=a.getRepresentationsByType(s);if(l&&"number"==typeof e.newQuality){var d=l.find(function(t){return t.absoluteIndex===e.newQuality||t.index===e.newQuality});d&&(o={bitrate:d.bandwidth,width:d.width,height:d.height,qualityIndex:e.newQuality})}}else{if("number"!=typeof e.newQuality)return void i.warn("missing evt.newQuality in qualityChangeRendered event",e);o=a.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality})}if(!(o&&"number"==typeof o.bitrate))return void i.warn("missing bitrate info for ".concat(s));c[s]=eh(ec({},o),{codec:a.getCurrentTrackFor(s).codec});var u=h();u&&n("renditionchange",u)}};a.on("qualityChangeRendered",m);var p=function(e){var t=e.request,a=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:a,request_hostname:er(t.url)})};a.on("fragmentLoadingAbandoned",p);var v=function(e){var t,a,i=e.error,r=(null==i||null==(t=i.data)?void 0:t.request)||{},s=(null==i||null==(a=i.data)?void 0:a.response)||{};(null==i?void 0:i.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:er(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==i?void 0:i.code,player_error_message:null==i?void 0:i.message,player_error_context:o})};a.on("error",v),a._stopMuxMonitor=function(){a.off("manifestLoaded",s),a.off("initFragmentLoaded",d),a.off("mediaFragmentLoaded",u),a.off("qualityChangeRendered",m),a.off("error",v),a.off("fragmentLoadingAbandoned",p),delete a._stopMuxMonitor}},eS=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eI=0,eR=function(){function e(){Z(this,e),ee(this,"_listeners",void 0)}return J(e,[{key:"on",value:function(e,t,a){return t._eventEmitterGuid=t._eventEmitterGuid||++eI,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],a&&(t=t.bind(a)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var a=this._listeners&&this._listeners[e];a&&a.forEach(function(e,i){e._eventEmitterGuid===t._eventEmitterGuid&&a.splice(i,1)})}},{key:"one",value:function(e,t,a){var i=this;t._eventEmitterGuid=t._eventEmitterGuid||++eI;var r=function(){i.off(e,r),t.apply(a||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var a=this;if(this._listeners){t=t||{};var i=this._listeners["before"+e]||[],r=this._listeners["before*"]||[],n=this._listeners[e]||[],s=this._listeners["after"+e]||[],o=function(t,i){(t=t.slice()).forEach(function(t){t.call(a,{type:e},i)})};o(i,t),o(r,t),o(n,t),o(s,t)}}}]),e}(),eC=v(b()),eL=function(){function e(t){var a=this;Z(this,e),ee(this,"_playbackHeartbeatInterval",void 0),ee(this,"_playheadShouldBeProgressing",void 0),ee(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){a._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?a._stopPlaybackHeartbeatInterval():a._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==a._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,i){null!==a._playbackHeartbeatInterval&&(eC.default.clearInterval(a._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:i.viewer_time}),a._playbackHeartbeatInterval=null)})}return J(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eC.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eC.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eD=function e(t){var a=this;Z(this,e),ee(this,"viewErrored",void 0),t.on("viewinit",function(){a.viewErrored=!1}),t.on("error",function(e,i){try{var r=t.errorTranslator({player_error_code:i.player_error_code,player_error_message:i.player_error_message,player_error_context:i.player_error_context,player_error_severity:i.player_error_severity,player_error_business_exception:i.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||i.player_error_code,t.data.player_error_message=r.player_error_message||i.player_error_message,t.data.player_error_context=r.player_error_context||i.player_error_context,t.data.player_error_severity=r.player_error_severity||i.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||i.player_error_business_exception,a.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),a.viewErrored=!0}}),t.on("aftererror",function(){var e,a,i,r,n;null==(e=t.data)||delete e.player_error_code,null==(a=t.data)||delete a.player_error_message,null==(i=t.data)||delete i.player_error_context,null==(r=t.data)||delete r.player_error_severity,null==(n=t.data)||delete n.player_error_business_exception})},ex=function(){function e(t){Z(this,e),ee(this,"_watchTimeTrackerLastCheckedTime",void 0),ee(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return J(e,[{key:"_updateWatchTime",value:function(e,t){var a=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=a),eu(this.pm.data,"view_watch_time",a-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=a}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),eP=function(){function e(t){var a=this;Z(this,e),ee(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),ee(this,"_lastTime",void 0),ee(this,"_isAdPlaying",void 0),ee(this,"_callbackUpdatePlaybackTime",void 0),ee(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=$(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on("viewinit",function(){a.pm.data.view_playing_time_ms_cumulative=0});var i=this._startPlaybackTimeTracking.bind(this);t.on("playing",i),t.on("adplaying",i);var r=function(){a.pm.data.player_is_paused||i()};t.on("seeked",r),t.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",n),t.on("seeking",n),t.on("rebufferstart",n),t.on("adplaying",function(){a._isAdPlaying=!0}),t.on("adended",function(){a._isAdPlaying=!1}),t.on("adpause",function(){a._isAdPlaying=!1}),t.on("adbreakstart",function(){a._isAdPlaying=!1}),t.on("adbreakend",function(){a._isAdPlaying=!1}),t.on("adplay",function(){a._isAdPlaying=!1}),t.on("viewinit",function(){a._playbackTimeTrackerLastPlayheadPosition=-1,a._lastTime=$(),a._isAdPlaying=!1,a._callbackUpdatePlaybackTime=null})}return J(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=$(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,t=$(),a=t-this._lastTime,i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?i=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=a),i>0&&i<=1e3&&eu(this.pm.data,"view_content_playback_time",i),null!==this._callbackUpdatePlaybackTime&&a>0&&a<=1e3&&(this._isAdPlaying&&eu(this.pm.data,"ad_playing_time_ms_cumulative",a),eu(this.pm.data,"view_playing_time_ms_cumulative",a)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eO=function(){function e(t){Z(this,e),ee(this,"pm",void 0),this.pm=t;var a=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",a),t.on("playbackheartbeatend",a),t.on("timeupdate",a),t.on("destroy",function(){t.off("timeupdate",a)})}return J(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var a=this,i=function(){a.pm.currentFragmentPDT&&a.pm.currentFragmentStart&&(a.pm.data.player_program_time=a.pm.currentFragmentPDT+a.pm.data.player_playhead_time-a.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,i(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,i(),this._updateMaxPlayheadPosition())}}}]),e}(),eN=function e(t){if(Z(this,e),!t.disableRebufferTracking){var a,i=function(e,t){r(t),a=void 0},r=function(e){if(a){var i=e.viewer_time-a;eu(t.data,"view_rebuffer_duration",i),a=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){a||(eu(t.data,"view_rebuffer_count",1),a=r.viewer_time,t.one("rebufferend",i))}),t.on("viewinit",function(){a=void 0,t.off("rebufferend",i)})}},eU=function(){function e(t){var a=this;Z(this,e),ee(this,"_lastCheckedTime",void 0),ee(this,"_lastPlayheadTime",void 0),ee(this,"_lastPlayheadTimeUpdatedTime",void 0),ee(this,"_rebuffering",void 0),ee(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){a._cleanupRebufferTracker(null,{viewer_time:$()})}))}return J(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(t.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var a=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&a>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var i=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&i>0&&r-i>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-i}))}a?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eB=function(){function e(t){var a=this;Z(this,e),ee(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,i=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?a.calculateTimeToFirstFrame(n||$(),i):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||a._inPrerollPosition())&&a.calculateTimeToFirstFrame(n||$(),i)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return J(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),eH=function e(t){var a=this;Z(this,e),ee(this,"_lastPlayerHeight",void 0),ee(this,"_lastPlayerWidth",void 0),ee(this,"_lastPlayheadPosition",void 0),ee(this,"_lastSourceHeight",void 0),ee(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){a._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"].forEach(function(e){t.on(e,function(){if(a._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&a._lastPlayerWidth>=0&&a._lastSourceWidth>0&&a._lastPlayerHeight>=0&&a._lastSourceHeight>0){var e=t.data.player_playhead_time-a._lastPlayheadPosition;if(e<0){a._lastPlayheadPosition=-1;return}var i=Math.min(a._lastPlayerWidth/a._lastSourceWidth,a._lastPlayerHeight/a._lastSourceHeight),r=Math.max(0,i-1),n=Math.max(0,1-i);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),eu(t.data,"view_total_content_playback_time",e),eu(t.data,"view_total_upscaling",r*e),eu(t.data,"view_total_downscaling",n*e)}a._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange","playbackmodechange"].forEach(function(e){t.on(e,function(){a._lastPlayheadPosition=t.data.player_playhead_time,a._lastPlayerWidth=t.data.player_width,a._lastPlayerHeight=t.data.player_height,a._lastSourceWidth=t.data.video_source_width,a._lastSourceHeight=t.data.video_source_height})})},eW=function e(t){var a=this;Z(this,e),ee(this,"isSeeking",void 0),this.isSeeking=!1;var i=-1,r=function(){var e=$(),r=(t.data.viewer_time||e)-(i||e);eu(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),a.isSeeking=!1,i=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),a.isSeeking&&n.viewer_time-i<=2e3){i=n.viewer_time;return}a.isSeeking&&r(),a.isSeeking=!0,i=n.viewer_time,eu(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){a.isSeeking&&(r(),t.send("seeked")),a.isSeeking=!1,i=-1})},e$=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eq=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],eV=function(){function e(t){var a=this;Z(this,e),ee(this,"_adHasPlayed",void 0),ee(this,"_adRequests",void 0),ee(this,"_adResponses",void 0),ee(this,"_currentAdRequestNumber",void 0),ee(this,"_currentAdResponseNumber",void 0),ee(this,"_prerollPlayTime",void 0),ee(this,"_wouldBeNewAdPlay",void 0),ee(this,"isAdBreak",void 0),ee(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){a.isAdBreak=!1,a._currentAdRequestNumber=0,a._currentAdResponseNumber=0,a._adRequests=[],a._adResponses=[],a._adHasPlayed=!1,a._wouldBeNewAdPlay=!0,a._prerollPlayTime=void 0}),eq.forEach(function(e){return t.on(e,a._updateAdData.bind(a))});var i=function(){a.isAdBreak=!1};t.on("adbreakstart",function(){a.isAdBreak=!0}),t.on("play",i),t.on("playing",i),t.on("viewend",i),t.on("adrequest",function(e,i){i=Object.assign({ad_request_id:"generatedAdRequestId"+a._currentAdRequestNumber++},i),e$(a._adRequests,i),eu(t.data,"view_ad_request_count"),a.inPrerollPosition()&&(t.data.view_preroll_requested=!0,a._adHasPlayed||eu(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,i){i=Object.assign({ad_request_id:"generatedAdRequestId"+a._currentAdResponseNumber++},i),e$(a._adResponses,i);var r=a.findAdRequest(i.ad_request_id);r&&eu(t.data,"view_ad_request_time",Math.max(0,i.viewer_time-r.viewer_time))}),t.on("adplay",function(e,i){a._adHasPlayed=!0,a._wouldBeNewAdPlay&&(a._wouldBeNewAdPlay=!1,eu(t.data,"view_ad_played_count")),a.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,a._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,i.viewer_time-a._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,i.viewer_time-t.data.view_start)),a._prerollPlayTime=i.viewer_time)}),t.on("adplaying",function(e,i){a.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==a._prerollPlayTime&&(t.data.view_preroll_load_time=i.viewer_time-a._prerollPlayTime,t.data.view_startup_preroll_load_time=i.viewer_time-a._prerollPlayTime)}),t.on("adclicked",function(e,i){a._wouldBeNewAdPlay||eu(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,i){a._wouldBeNewAdPlay||eu(t.data,"view_ad_skipped_count")}),t.on("adended",function(){a._wouldBeNewAdPlay=!0}),t.on("aderror",function(){a._wouldBeNewAdPlay=!0})}return J(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var a=U(en(t.ad_tag_url),2),i=a[0],r=a[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=i}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=U(en(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id,null!=t&&t.ad_type&&(this.pm.data.ad_type=null==t?void 0:t.ad_type)}}]),e}(),eK=function e(t){var a=this;Z(this,e),ee(this,"lastWallClockTime",void 0);var i=function(){a.lastWallClockTime=$(),t.on("before*",r)},r=function(e){var i=$(),r=a.lastWallClockTime;a.lastWallClockTime=i,i-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:i}),Object.assign(t.data,{viewer_time:i}),t.send("devicewake"))};t.one("playbackheartbeat",i),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",i)})},eF=v(b()),ej=(tE=function(){for(var e=0,t={};e<arguments.length;e++){var a=arguments[e];for(var i in a)t[i]=a[i]}return t},function e(t){function a(e,i,r){var n;if("u">typeof document){if(arguments.length>1){if("number"==typeof(r=tE({path:"/"},a.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{n=JSON.stringify(i),/^[\{\[]/.test(n)&&(i=n)}catch(e){}return i=t.write?t.write(i,e):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[e,"=",i,r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}e||(n={});for(var o=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<o.length;d++){var u=o[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(e,t){a(e,"",tE(t,{expires:-1}))},a.withConverter=e,a}(function(){})),eG="muxData",eY=function(){var e;try{e=(ej.get(eG)||"").split("&").reduce(function(e,t){var a=U(t.split("="),2),i=a[0],r=a[1],n=+r;return e[i]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},eQ=function(e){try{ej.set(eG,Object.entries(e).map(function(e){var t=U(e,2),a=t[0],i=t[1];return"".concat(a,"=").concat(i)}).join("&"),{expires:365})}catch(e){}},ez=function(){var e=eY();return e.mux_viewer_id=e.mux_viewer_id||q(),e.msn=e.msn||Math.random(),eQ(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},eZ=function(){var e=eY(),t=$();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=q(),e.sst=t),e.sex=t+15e5,eQ(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},eX=e0({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),eJ=e0({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function e0(e){var t={};for(var a in e)e.hasOwnProperty(a)&&(t[e[a]]=a);return t}function e1(e){var t={},a={};return Object.keys(e).forEach(function(i){var r=!1;if(e.hasOwnProperty(i)&&void 0!==e[i]){var n=i.split("_"),s=n[0],o=eX[s];o||(G.info("Data key word `"+n[0]+"` not expected in "+i),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),eJ[e]?o+=eJ[e]:Number.isInteger(Number(e))?o+=e:(G.info("Data key word `"+e+"` not expected in "+i),o+="_"+e+"_")}),r?a[o]=e[i]:t[o]=e[i]}}),Object.assign(t,a)}var e2=v(b()),e3=v(P()),e4={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},e5=["hb","requestcompleted","requestfailed","requestcanceled"],e9=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},e4,t)};e9.prototype.queueEvent=function(e,t){var a=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(a),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},e9.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&1===this._eventQueue.length?this._eventQueue.pop():(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},e9.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),e2.default.clearTimeout(this._sendTimeout)},e9.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],e1({mux_view_message:"event queue truncated"}));var a=this._createPayload(t);e6(this._beaconUrl,a,!0,function(){})},e9.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var a=this._createPayload(t),i=$();e6(this._beaconUrl,a,!1,function(a,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,G.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=$()-i,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},e9.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},e9.prototype._startBeaconSending=function(){var e=this;e2.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=e2.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},e9.prototype._createPayload=function(e){var t=this,a={transmission_timestamp:Math.round($())};this._roundTripTime&&(a.rtt_ms=Math.round(this._roundTripTime));var i,r,n,s=function(){n=(i=JSON.stringify({metadata:a,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(G.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===e5.indexOf(e.e)}),s()),o()||(G.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var a=e[t];"string"==typeof a&&a.length>51200&&(e[t]=a.substring(0,51200))}}),s()),i};var e8="function"==typeof e3.default.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},e6=function(e,t,a,i){if(a&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))return void i();if(e2.default.fetch)return void e2.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:e8(t)}).then(function(e){return i(null,e.ok?null:"Error")}).catch(function(e){return i(null,e)});if(e2.default.XMLHttpRequest){var r=new e2.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return i(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}i()},e7=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],te=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],tt=["ad_id","ad_creative_id","ad_universal_id"],ta=["viewstart","error","ended","viewend"],ti=function(){function e(t,a){var i,r,n,s,o,l,d,u,c,h,m,p,v,b,g,y,f,E,w,T=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Z(this,e),ee(this,"mux",void 0),ee(this,"envKey",void 0),ee(this,"options",void 0),ee(this,"eventQueue",void 0),ee(this,"sampleRate",void 0),ee(this,"disableCookies",void 0),ee(this,"respectDoNotTrack",void 0),ee(this,"previousBeaconData",void 0),ee(this,"lastEventTime",void 0),ee(this,"rateLimited",void 0),ee(this,"pageLevelData",void 0),ee(this,"viewerData",void 0),this.mux=t,this.envKey=a,this.options=T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new e9((i=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?(/localhost(?::\d+)?$/.test(n)?"http://":"https://")+n:(i=i||"inferred").match(/^[a-z0-9]+$/)?"https://"+i+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(f=this.options.sampleRate)?f:1,this.disableCookies=null!=(E=this.options.disableCookies)&&E,this.respectDoNotTrack=null!=(w=this.options.respectDoNotTrack)&&w,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(o=this.options.platform)?void 0:o.name,viewer_application_version:null==(l=this.options.platform)?void 0:l.version,viewer_application_engine:null==(d=this.options.platform)?void 0:d.layout,viewer_device_name:null==(u=this.options.platform)?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null==(c=this.options.platform)?void 0:c.manufacturer,viewer_os_family:null==(m=this.options.platform)||null==(h=m.os)?void 0:h.family,viewer_os_architecture:null==(v=this.options.platform)||null==(p=v.os)?void 0:p.architecture,viewer_os_version:null==(g=this.options.platform)||null==(b=g.os)?void 0:b.version,page_url:null===eF.default||void 0===eF.default||null==(y=eF.default.location)?void 0:y.href},this.viewerData=this.disableCookies?{}:ez()}return J(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&Q())return G.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return G.error("A data object was expected in send() but was not provided");var a=this.disableCookies?{}:eZ(),i=eh(ec({},this.pageLevelData,t,a,this.viewerData),{event:e,env_key:this.envKey});i.user_id&&(i.viewer_user_id=i.user_id,delete i.user_id);var r,n=(null!=(r=i.mux_sample_number)?r:0)>=this.sampleRate,s=e1(this._deduplicateBeaconData(e,i));if(this.lastEventTime=this.mux.utils.now(),n)return G.info("Not sending event due to sample rate restriction",e,i,s);if(this.envKey||G.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,i,s),!this.rateLimited)if(G.info("Sending event",e,i,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&"hb"===e)this.eventQueue.flushEvents(!0);else if(ta.indexOf(e)>=0){if("error"===e&&"warning"===t.player_error_severity)return;this.eventQueue.flushEvents()}if(this.rateLimited)return i.event="eventrateexceeded",s=e1(i),this.eventQueue.queueEvent(i.event,s),G.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var a=this,i={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)i=ec({},t),r&&(this.previousBeaconData=i),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=U(t,2),s=r[0],o=r[1];a.previousBeaconData&&(o!==a.previousBeaconData[s]||e7.indexOf(s)>-1||a.objectHasChanged(n,s,o,a.previousBeaconData[s])||a.eventRequiresKey(e,s))&&(i[s]=o,a.previousBeaconData[s]=o)})}return i}},{key:"objectHasChanged",value:function(e,t,a,i){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof a||"object"!=typeof i||Object.keys(a||{}).length!==Object.keys(i||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||tt.includes(t)&&te.includes(e)||"playbackmodechange"===e&&0===t.indexOf("player_playback_mode"))}}]),e}(),tr=function e(t){Z(this,e);var a=0,i=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,i+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=i/r*8e3,t.data.view_request_count=n,l>0&&(a+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=a/s)}}),t.on("requestfailed",function(e,a){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,a){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tn=function e(t){var a=this;Z(this,e),ee(this,"_lastEventTime",void 0),t.on("before*",function(e,i){var r=i.viewer_time,n=$(),s=a._lastEventTime;if(a._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,a){return 0===a.indexOf("video_")?Object.assign(e,ee({},a,t.data[a])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})};function ts(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}var to=function e(t){Z(this,e);var a=function(e){var a,i,r,o=null!=(a=e)&&a.request_type&&("media"===a.request_type||"video"===a.request_type)&&null!=(i=a.request_response_headers)&&i["x-cdn"]?a.request_response_headers["x-cdn"]:null!=a&&a.video_cdn?a.video_cdn:null,l=null!=(r=e)&&r.request_start?r.request_start:null!=r&&r.viewer_time?r.viewer_time:Date.now();null!=o&&!ts(o,n)&&s<=l&&(n=o,s=l,t.emit("cdnchange",{video_cdn:o}))},i=null,r=null,n=null,s=0;t.on("viewinit",function(){i=null,r=null,n=null,s=0}),t.on("beforecdnchange",function(e,t){var a=null==t?void 0:t.video_cdn;a&&(void 0===t.video_previous_cdn||null===t.video_previous_cdn)&&(ts(a,r)?t.video_previous_cdn=null!=i?i:void 0:(t.video_previous_cdn=null!=r?r:void 0,i=r,r=a))}),t.on("requestcompleted",function(e,t){a(t)})},tl=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},td=function e(t){var a=this;Z(this,e),ee(this,"_emittingAutomaticEvent",!1),ee(this,"_hasInitialized",!1),ee(this,"_currentMode","standard"),t.on("viewstart",function(){a._hasInitialized||(a._hasInitialized=!0,a._currentMode=t.data.player_playback_mode||"standard",a._emittingAutomaticEvent=!0,t.emit("playbackmodechange",{player_playback_mode:a._currentMode,player_playback_mode_data:"{}"}),a._emittingAutomaticEvent=!1)}),t.on("viewend",function(){a._hasInitialized=!1}),t.on("playbackmodechange",function(e,i){a._emittingAutomaticEvent||(i.player_playback_mode_data?tl(i.player_playback_mode_data)||(t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),i.player_playback_mode_data="{}"):i.player_playback_mode_data="{}",t.data.player_playback_mode_data=i.player_playback_mode_data,t.data.player_playback_mode=i.player_playback_mode,a._currentMode=i.player_playback_mode)})},tu=function(){function e(t){Z(this,e),ee(this,"pm",void 0),ee(this,"_currentRangeStart",void 0),ee(this,"_lastPlayheadTime",void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),t.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return J(e,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var t=this.pm.data.player_playhead_time||0;e[e.length-1][1]=t}}},{key:"_updatePlaybackRange",value:function(){var e,t=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&null!=(e=this.pm.adTracker)&&e.isAdBreak&&null!==this._lastPlayheadTime&&t<this._lastPlayheadTime)){if(null!==this._lastPlayheadTime&&null!==this._currentRangeStart&&Math.abs(t-this._lastPlayheadTime)>1e3){var a=this.pm.data.video_playback_ranges;a&&a.length>0&&(a[a.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(null===this._currentRangeStart){var i=this.pm.data.video_playback_ranges||[];i.length>0&&i[i.length-1][1]===t?this._currentRangeStart=i[i.length-1][0]:(this._currentRangeStart=t,i.push([t,t])),this.pm.data.video_playback_ranges=i}else this._updateLastRangeEnd();this._lastPlayheadTime=t}}},{key:"_endPlaybackRange",value:function(){null!==this._currentRangeStart&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e}(),tc=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),th=function(e){if(!e)return tc.UNKNOWN;switch(e){case"cellular":case"wimax":return tc.CELLULAR;case"wifi":return tc.WIFI;case"ethernet":return tc.WIRED;case"none":return tc.NO_CONNECTION;case"bluetooth":case"other":default:return tc.OTHER;case"unknown":return tc.UNKNOWN}},tm=v(b()),tp=function(){function e(t){var a=this;Z(this,e),ee(this,"pm",void 0),ee(this,"lastType",void 0),ee(this,"lastLowDataMode",void 0),this.pm=t,this.pm.one("viewinit",function(){var t,i=a.emit.bind(a);i(),tm.default.addEventListener("online",i),tm.default.addEventListener("offline",i),null==(t=e.connection)||t.addEventListener("change",i),a.pm.on("destroy",function(){var t;null==(t=e.connection)||t.removeEventListener("change",i),tm.default.removeEventListener("online",i),tm.default.removeEventListener("offline",i)})})}return J(e,[{key:"type",get:function(){var t,a;return(null==(t=tm.default.navigator)?void 0:t.onLine)===!1?tc.NO_CONNECTION:null!=(a=e.connection)&&a.type?th(e.connection.type):tc.UNKNOWN}},{key:"lowDataMode",get:function(){var t;return null==(t=e.connection)?void 0:t.saveData}},{key:"emit",value:function(){var e=this.type,t=this.lowDataMode;e===this.lastType&&t===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=t,this.pm.emit("networkchange",ec({viewer_connection_type:e},void 0!==t&&{viewer_connection_low_data_mode:t})))}}],[{key:"connection",get:function(){var e;return"object"==typeof(e=tm.default.navigator)&&"connection"in e&&"object"==typeof e.connection?tm.default.navigator.connection:null}}]),e}(),tv=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange"],tb=new Set(["requestcompleted","requestfailed","requestcanceled"]),tg=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),e&&ei(i,e);var t,a=(t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,a=et(i);return e=t?Reflect.construct(a,arguments,et(this).constructor):a.apply(this,arguments),e&&("object"===f(e)||"function"==typeof e)?e:z(this)});function i(e,t,r){Z(this,i),ee(z(n=a.call(this)),"pageLoadEndTime",void 0),ee(z(n),"pageLoadInitTime",void 0),ee(z(n),"_destroyed",void 0),ee(z(n),"_heartBeatTimeout",void 0),ee(z(n),"adTracker",void 0),ee(z(n),"dashjs",void 0),ee(z(n),"data",void 0),ee(z(n),"disablePlayheadRebufferTracking",void 0),ee(z(n),"disableRebufferTracking",void 0),ee(z(n),"disableAdPlaybackRangeFiltering",void 0),ee(z(n),"errorTracker",void 0),ee(z(n),"errorTranslator",void 0),ee(z(n),"emitTranslator",void 0),ee(z(n),"getAdData",void 0),ee(z(n),"getPlayheadTime",void 0),ee(z(n),"getStateData",void 0),ee(z(n),"stateDataTranslator",void 0),ee(z(n),"hlsjs",void 0),ee(z(n),"id",void 0),ee(z(n),"longResumeTracker",void 0),ee(z(n),"minimumRebufferDuration",void 0),ee(z(n),"mux",void 0),ee(z(n),"playbackEventDispatcher",void 0),ee(z(n),"playbackHeartbeat",void 0),ee(z(n),"playbackHeartbeatTime",void 0),ee(z(n),"playheadTime",void 0),ee(z(n),"seekingTracker",void 0),ee(z(n),"sustainedRebufferThreshold",void 0),ee(z(n),"watchTimeTracker",void 0),ee(z(n),"currentFragmentPDT",void 0),ee(z(n),"currentFragmentStart",void 0),n.pageLoadInitTime=ed(),n.pageLoadEndTime=el(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),G.level=r.debug?1:3,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.disableAdPlaybackRangeFiltering=r.disableAdPlaybackRangeFiltering,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new ti(e,r.data.env_key,r),n.data={player_instance_id:q(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(z(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"u">typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),tv.forEach(function(e){n.on(e,function(t,a){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,a),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tn(z(n)),n.errorTracker=new eD(z(n)),new eK(z(n)),n.seekingTracker=new eW(z(n)),n.playheadTime=new eO(z(n)),n.playbackHeartbeat=new eL(z(n)),new eH(z(n)),n.watchTimeTracker=new ex(z(n)),new eP(z(n)),new tu(z(n)),n.adTracker=new eV(z(n)),new eU(z(n)),new eN(z(n)),new eB(z(n)),new tr(z(n)),new to(z(n)),new td(z(n)),new tp(z(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return J(i,[{key:"emit",value:function(e,t){var a,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(a=ea(et(i.prototype),"emit",this)).call.apply(a,[this].concat(j(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var a=U(en(t.video_source_url),2),i=a[0];t.video_source_domain=a[1],t.video_source_hostname=i}delete t.ad_request_id,t.video_playback_ranges&&(t.video_playback_range=JSON.stringify(t.video_playback_ranges.filter(function(e){return e[0]!==e[1]}).map(function(e){return"".concat(e[0],":").concat(e[1])})),delete t.video_playback_ranges),this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,tb.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e,t=this.getStateData();if("function"==typeof this.stateDataTranslator)try{t=this.stateDataTranslator(t)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}null!=(e=this.data)&&e.video_cdn&&null!=t&&t.video_cdn&&(t.video_cdn,t=function(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(t,["video_cdn"])),Object.assign(this.data,t),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var a=parseInt(e.data[t],10);e.data[t]=isNaN(a)?void 0:a}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var a=e.data[t].toLowerCase();(0===a.indexOf("data:")||0===a.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=q(),a=function(){t===e.data.view_id&&eu(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",a):a()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){e.hlsjs?this.hlsjs?this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=e.hlsjs,eE(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(e_(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){e.dashjs?this.dashjs?this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=e.dashjs,eM(this.mux,this.id,e.dashjs)):this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(eS(this.dashjs),this.dashjs=void 0)}}]),i}(eR),ty=v(P());function tf(){return ty.default&&!!(ty.default.fullscreenElement||ty.default.webkitFullscreenElement||ty.default.mozFullScreenElement||ty.default.msFullscreenElement)}var tE,t_,tw=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tT={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},tA=v(b());tA.default&&tA.default.WeakMap&&(t_=new WeakMap);var tk=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tk.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tk.prototype.processLine=function(e){var t=e.indexOf(":"),a=tD(e,t),i=a[0],r=2===a.length?tI(a[1]):void 0;if("#"!==i[0])this.currentUri.uri=i,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(i){case"#EXT-X-TARGETDURATION":if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case"#EXT-X-PART-INF":tM(this.manifest,a),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case"#EXT-X-SERVER-CONTROL":tM(this.manifest,a),this.setHoldBack();break;case"#EXTINF":0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case"#EXT-X-PROGRAM-DATE-TIME":var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case"#EXT-X-VERSION":tM(this.manifest,a);break;case"#EXT-X-SESSION-DATA":var s=eg(tx(a[1]));Object.assign(this.manifest.sessionData,s)}},tk.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,a=e.targetDuration,i=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=a&&3*a,o=i&&2*i;a&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),i&&!t.hasOwnProperty(n)&&(t[n]=3*i),i&&t[n]<o&&(t[n]=o)}};var tM=function(e,t){var a,i=tS(t[0].replace("#EXT-X-",""));tL(t[1])?(a={},a=Object.assign(tC(t[1]),a)):a=tI(t[1]),e[i]=a},tS=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tI=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tR=function(e){var t={},a=e.split("=");return a.length>1&&(t[tS(a[0])]=tI(a[1])),t},tC=function(e){for(var t=e.split(","),a={},i=0;t.length>i;i++)a=Object.assign(tR(t[i]),a);return a},tL=function(e){return e.indexOf("=")>-1},tD=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tx=function(e){var t={};if(e){var a=e.search(",");return[e.slice(0,a),e.slice(a+1)].forEach(function(e,a){for(var i=e.replace(/['"]+/g,"").split("="),r=0;r<i.length;r++)"DATA-ID"===i[r]&&(t["DATA-ID"]=i[1-r]),"VALUE"===i[r]&&(t.VALUE=i[1-r])}),{data:t}}},tP={safeCall:function(e,t,a,i){var r=i;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,a)}catch(e){G.info("safeCall error",e)}return r},safeIncrement:eu,getComputedStyle:function(e,t){var a;return e&&t&&tA.default&&"function"==typeof tA.default.getComputedStyle?(t_&&t_.has(e)&&(a=t_.get(e)),a||(a=tA.default.getComputedStyle(e,null),t_&&t_.set(e,a)),a.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:ev,cdnHeadersToRequestId:eb,extractHostnameAndDomain:en,extractHostname:er,manifestParser:tk,generateShortID:V,generateUUID:q,now:$,findMediaElement:F},tO={},tN=function(e){var t=arguments;"string"==typeof e?tN.hasOwnProperty(e)?B.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tN[e].apply(null,t)},0):G.warn("`"+e+"` is an unknown task"):"function"==typeof e?B.default.setTimeout(function(){e(tN)},0):G.warn("`"+e+"` is invalid.")},tU={loaded:$(),NAME:"mux-embed",VERSION:"5.18.1",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,a){var i=U(F(t),3),r=i[0],n=i[1],s=i[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(a=Object.assign({automaticErrorTracking:!0},a,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,a=(null==(e=this.getPlayheadTime)?void 0:e.call(this))||d(r.currentTime),i=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tf(),video_poster_url:r.poster,video_source_url:i||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null==(t=r.getVideoPlaybackQuality)?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&a>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();s.player_program_time=u+a,r.seekable.length>0&&(s.player_live_edge_program_time=u+r.seekable.end(r.seekable.length-1))}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},a.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,a){e.emit(n,t,a)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var a=U(F(t),3),i=a[0],n=a[1],s=a[2];return i?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(i.muxId=r.muxId,delete r.muxId,i.mux=i.mux||{},i.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(i.mux.listeners).forEach(function(e){r.removeEventListener(e,i.mux.listeners[e],!1),i.addEventListener(e,i.mux.listeners[e],!1)}),i.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,i.mux.swapElement=r.mux.swapElement,i.mux.destroy=r.mux.destroy,delete r.mux,r=i):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=a.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,a),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tw.forEach(function(t){("error"!==t||a.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var a={};if("error"===t){if(!r.error||1===r.error.code)return;a.player_error_code=r.error.code,a.player_error_message=tT[r.error.code]||r.error.message}e.emit(n,t,a)},r.addEventListener(t,r.mux.listeners[t],!1))}),r.mux.listeners.enterpictureinpicture=function(){e.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var t=tf()?"fullscreen":"standard";e.emit(n,"playbackmodechange",{player_playback_mode:t,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var t=tf(),a=document.fullscreenElement;if(t&&(a===r||null!=a&&a.contains(r)))e.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!t){var i=document.pictureInPictureElement===r;e.emit(n,"playbackmodechange",{player_playback_mode:i?"pip":"standard",player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}(tN,e,t)},destroyMonitor:function(e){var t=U(F(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():G.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var a=K(e);tO[a]?tO[a].addHLSJS(t):G.error("A monitor for `"+a+"` has not been initialized.")},addDashJS:function(e,t){var a=K(e);tO[a]?tO[a].addDashJS(t):G.error("A monitor for `"+a+"` has not been initialized.")},removeHLSJS:function(e){var t=K(e);tO[t]?tO[t].removeHLSJS():G.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=K(e);tO[t]?tO[t].removeDashJS():G.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){Q()&&t&&t.respectDoNotTrack&&G.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var a=K(e);tO[a]=new tg(tN,a,t)},emit:function(e,t,a){var i=K(e);tO[i]?(tO[i].emit(t,a),"destroy"===t&&delete tO[i]):G.error("A monitor for `"+i+"` has not been initialized.")},updateData:function(e,t){var a=K(e);tO[a]?tO[a].emit("hb",t):G.error("A monitor for `"+a+"` has not been initialized.")},setEmitTranslator:function(e,t){var a=K(e);tO[a]?tO[a].emitTranslator=t:G.error("A monitor for `"+a+"` has not been initialized.")},setStateDataTranslator:function(e,t){var a=K(e);tO[a]?tO[a].stateDataTranslator=t:G.error("A monitor for `"+a+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var a=K(e);tO[a]?tO[a].getPlayheadTime=t:G.error("A monitor for `"+a+"` has not been initialized.")},checkDoNotTrack:Q,log:G,utils:tP,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tN,tU),void 0!==B.default&&"function"==typeof B.default.addEventListener&&B.default.addEventListener("pagehide",function(e){e.persisted||(tN.WINDOW_UNLOADING=!0)},!1);var tB=e.i(945811);try{var tH="u">typeof window?window:e.g;tH._sentryModuleMetadata=tH._sentryModuleMetadata||{},tH._sentryModuleMetadata[(new tH.Error).stack]=Object.assign({},tH._sentryModuleMetadata[(new tH.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var tW=tB.default,t$="video",tq=e=>e===t$?"playback":e,tV=class e extends Error{constructor(t,a=e.MEDIA_ERR_CUSTOM,i,r){var n;super(t),this.name="MediaError",this.code=a,this.context=r,this.fatal=null!=i?i:a>=e.MEDIA_ERR_NETWORK&&a<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tV.MEDIA_ERR_ABORTED=1,tV.MEDIA_ERR_NETWORK=2,tV.MEDIA_ERR_DECODE=3,tV.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tV.MEDIA_ERR_ENCRYPTED=5,tV.MEDIA_ERR_CUSTOM=100,tV.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var tK=(e,t)=>null!=t&&e in t,tF={ANY:"any",MUTED:"muted"},tj="on-demand",tG="live",tY="unknown",tQ="native",tz={HEADER:"header",QUERY:"query",NONE:"none"},tZ=Object.values(tz),tX={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tJ={HLS:tX.M3U8};Object.keys(tJ),[...Object.values(tX)];var t0={code:"en"},t1=(e,t,a,i,r=e)=>{r.addEventListener(t,a,i),e.addEventListener("teardown",()=>{r.removeEventListener(t,a)},{once:!0})},t2=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},t3=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return tK(e,tJ)?tJ[e]:t}return t9(e)},t4=e=>"VOD"===e?tj:tG,t5=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,t9=e=>{let{src:t}=e;if(!t)return"";let a="";try{a=t6(t).pathname}catch{console.error("Invalid url when trying to infer mime type",t)}let i=a.lastIndexOf(".");if(i<0)return ae(e)?tX.M3U8:"";let r=a.slice(i+1).toUpperCase();return tK(r,tX)?tX[r]:""},t8=e=>{try{return new URL(e),!1}catch{return!0}},t6=(e,t)=>{var a;if(!t8(e))return new URL(e);let i=null==(a=null==window?void 0:window.location)?void 0:a.href,r=null!=t?t:i;return t&&t8(t.toString())&&(r=new URL(t,i)),new URL(e,r)},t7="mux.com",ae=({src:e,customDomain:t=t7})=>{let a;try{a=new URL(`${e}`)}catch{return!1}let i="https:"===a.protocol,r=a.hostname===`stream.${t}`.toLowerCase(),n=a.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return i&&r&&s&&o},at=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}};function aa(e,t=!0){var a;return new ai(t&&null!=(a=null==t0?void 0:t0[e])?a:e,t?t0.code:"en")}var ai=class{constructor(e,t=(e=>null!=(e=t0)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,a)=>{var i;return null!=(i=e[a])?i:""})}toString(){return this.message}},ar=Object.values(tF),an=e=>"boolean"==typeof e||"string"==typeof e&&ar.includes(e),as=(e,t)=>{if(!t)return;let a=e.muted,i=()=>e.muted=a;switch(t){case tF.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(i)});break;case tF.MUTED:e.muted=!0,e.play().catch(i);break;default:e.play().catch(()=>{})}},ao=e=>"time"in e?e.time:e.startTime;function al(e,t,a,i,r,n){let s=document.createElement("track");return s.kind=t,s.label=a,i&&(s.srclang=i),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function ad(e,t,a){var i;return null==(i=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===a))?void 0:i.track}async function au(e,t,a,i){let r=ad(e,a,i);return r||((r=al(e,i,a)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>ao(t)-ao(e)).forEach(t=>{var a,n;let s=t.value,o=ao(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===i?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(a=null==r?void 0:r.cues)?void 0:a[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===i?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var ac="cuepoints",ah=Object.freeze({label:ac});async function am(e,t,a=ah){return au(e,t,a.label,"metadata")}var ap=e=>({time:e.startTime,value:JSON.parse(e.text)});function av(e,t={label:ac}){var a,i;let r=ad(e,t.label,"metadata");if(!(null!=(a=null==r?void 0:r.activeCues)&&a.length))return;if(1===r.activeCues.length)return ap(r.activeCues[0]);let{currentTime:n}=e;return ap(Array.prototype.find.call(null!=(i=r.activeCues)?i:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ab(e,t=ah){return new Promise(a=>{t1(e,"loadstart",async()=>{let i=await am(e,[],t);t1(e,"cuechange",()=>{let t=av(e);if(t){let a=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(a)}},{},i),a(i)})})}var ag="chapters",ay=Object.freeze({label:ag}),af=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function aE(e,t,a=ay){return au(e,t,a.label,"chapters")}function a_(e,t={label:ag}){var a,i;let r=ad(e,t.label,"chapters");if(!(null!=(a=null==r?void 0:r.activeCues)&&a.length))return;if(1===r.activeCues.length)return af(r.activeCues[0]);let{currentTime:n}=e;return af(Array.prototype.find.call(null!=(i=r.activeCues)?i:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function aw(e,t=ay){return new Promise(a=>{t1(e,"loadstart",async()=>{let i=await aE(e,[],t);t1(e,"cuechange",()=>{let t=a_(e);if(t){let a=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(a)}},{},i),a(i)})})}var aT=(e,t,a,i,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o,l,d;let u,c;if(n){let a=aa("Your device appears to be offline",r),i=tV.MEDIA_ERR_NETWORK,n=new tV(a,i,!1,void 0);return n.errorCategory=t,n.muxCode=2000002,n.data=e,n}let h="status"in e?e.status:e.code,m=Date.now(),p=tV.MEDIA_ERR_NETWORK;if(200===h)return;let v=tq(t),b=(u=tq(t),c=`${u}Token`,null!=(l=a.tokens)&&l[u]?null==(d=a.tokens)?void 0:d[u]:tK(c,a)?a[c]:void 0),g=t===t$?"v":"drm"===t?"d":void 0,[y]=t2(null!=(s=a.playbackId)?s:"");if(!h||!y)return;let f=at(b);if(b&&!f){let a=new tV(aa("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:v}),p,!0,aa("Compact JWT string: {token}",r).format({token:b}));return a.errorCategory=t,a.muxCode=2412202,a.data=e,a}if(h>=500){let e=new tV("",p,null==i||i);return e.errorCategory=t,e.muxCode=2e6,e}if(403===h)if(f){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(f,m)){let a={timeStyle:"medium",dateStyle:"medium"},i=new tV(aa("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:v}),p,!0,aa("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",a).format(null!=(o=f.exp)?o:0),currentDate:new Intl.DateTimeFormat("en",a).format(m)}));return i.errorCategory=t,i.muxCode=2403210,i.data=e,i}if((({sub:e},t)=>e!==t)(f,y)){let a=new tV(aa("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:v}),p,!0,aa("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:v,playbackId:y,tokenPlaybackId:f.sub}));return a.errorCategory=t,a.muxCode=2403232,a.data=e,a}if((({aud:e})=>!e)(f)){let a=new tV(aa("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:v}),p,!0,aa("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:v,expectedAud:g}));return a.errorCategory=t,a.muxCode=2403221,a.data=e,a}if((({aud:e},t)=>e!==t)(f,g)){let a=new tV(aa("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:v}),p,!0,aa("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:v,expectedAud:g,aud:f.aud}));return a.errorCategory=t,a.muxCode=2403222,a.data=e,a}}else{let a=new tV(aa("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:v,category:t}),p,null==i||i,aa("Specified playback ID: {playbackId}",r).format({playbackId:y}));return a.errorCategory=t,a.muxCode=2403201,a.data=e,a}if(412===h){let n=new tV(aa("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),p,null==i||i,aa("Specified playback ID: {playbackId}",r).format({playbackId:y}));return n.errorCategory=t,n.muxCode=2412e3,n.streamType=a.streamType===tG?"live":a.streamType===tj?"on-demand":"unknown",n.data=e,n}if(404===h){let a=new tV(aa("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),p,null==i||i,aa("Specified playback ID: {playbackId}",r).format({playbackId:y}));return a.errorCategory=t,a.muxCode=2404e3,a.data=e,a}if(400===h){let a=new tV(aa("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),p,null==i||i,aa("Specified playback ID: {playbackId}",r).format({playbackId:y}));return a.errorCategory=t,a.muxCode=24e5,a.data=e,a}let E=new tV("",p,null==i||i);return E.errorCategory=t,E.muxCode=2e6,E.data=e,E},aA=tW.DefaultConfig.capLevelController,ak={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},aM=class e extends aA{constructor(e){super(e)}static setMaxAutoResolution(t,a){a?e.maxAutoResolution.set(t,a):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let a=this.hls;return null!=(t=e.maxAutoResolution.get(a))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,a)=>this.isLevelAllowed(t)&&a<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),a=this.getMaxAutoResolution();if(!a)return super.getMaxLevel(e);let i=ak[a.toLowerCase().trim()];if(!i)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=i),n=r.findIndex(e=>e.width*e.height===i);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let a=super.getMaxLevel(t),i=this.getValidLevels(t);if(!i[a])return a;let r=Math.min(i[a].width,i[a].height),n=e.minMaxResolution;return r>=n?a:aA.getMaxLevelByMediaSize(i,16/9*n,n)}};aM.minMaxResolution=720,aM.maxAutoResolution=new WeakMap;var aS,aI,aR,aC,aL,aD,ax=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),aP="fairplay",aO=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,aN=async(e,t)=>{if(t===tX.MP4)return{streamType:tj,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===tX.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let a=await t.text(),i=await ((e,t)=>{let a,i=e.split(`
`).find((e,t,a)=>t>0&&a[t-1].startsWith("#EXT-X-STREAM-INF"));if(!i)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(t8(i)&&!t)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{a=t6(i,t)}catch(e){return Promise.reject(e)}return fetch(a).then(e=>200!==e.status?Promise.reject(e):e.text())})(a,t.url);return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let a={};for(let e of t){let t=Object.fromEntries([...e.matchAll(aO)].map(([,e,t])=>[e,t])),i=t["DATA-ID"];i&&(a[i]={...t})}return{sessionData:a}})(a),...(e=>{var t,a,i;let r=e.split(`
`),n=null==(a=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:a.trim(),s=t4(n),o=t5(n),l;if(s===tG){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(i=null==e?void 0:e.split(":"))?void 0:i[1];l=(null!=t?t:6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}})(i)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},aU=async(e,t,a=t3({src:e}))=>{var i,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await aN(e,a),c=null==u?void 0:u["com.apple.hls.chapters"];(null!=c&&c.URI||null!=c&&c.VALUE.toLocaleLowerCase().startsWith("http"))&&aB(null!=(i=c.URI)?i:c.VALUE,t),(null!=(r=aq.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=aq.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=aq.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},aB=async(e,t)=>{var a,i;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!(null!=(a=null==n?void 0:n[0])&&a.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(s[e.key]=e.value);(null!=(i=aq.get(t))?i:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(e){console.error(e)}},aH=null!=(aI=null==(aS=null==globalThis?void 0:globalThis.navigator)?void 0:aS.userAgent)?aI:"",aW=null!=(aL=null==(aC=null==(aR=null==globalThis?void 0:globalThis.navigator)?void 0:aR.userAgentData)?void 0:aC.platform)?aL:"",a$=aH.toLowerCase().includes("android")||["x11","android"].some(e=>aW.toLowerCase().includes(e)),aq=new WeakMap,aV="mux.com",aK=null==(aD=tW.isSupported)?void 0:aD.call(tW),aF=()=>{if("u">typeof window)return tN.utils.now()},aj=tN.utils.generateUUID,aG=({playbackId:e,customDomain:t=aV,maxResolution:a,minResolution:i,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=t2(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(a&&p.searchParams.set("max_resolution",a),i&&(p.searchParams.set("min_resolution",i),a&&+a.slice(0,-1)<+i.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",i,"maxResolution",a)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},aY=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},aQ=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},az=e=>{var t;return null==(t=aq.get(e))?void 0:t.error},aZ=e=>{var t,a;return null!=(a=null==(t=aq.get(e))?void 0:t.streamType)?a:tY},aX=e=>{var t,a;return null!=(a=null==(t=aq.get(e))?void 0:t.seekable)?a:e.seekable},aJ=.034,a0=(e,t,a=aJ)=>e>t||((e,t,a=aJ)=>Math.abs(e-t)<=a)(e,t,a),a1=(e,t)=>{var a,i,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(i=null==(a=t.levels)?void 0:a[t.currentLevel])?void 0:i.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},a2=(e,t)=>e.ended||e.loop?e.ended:!!(t&&a1(e,t))||((e,t=aJ)=>e.paused&&a0(e.currentTime,e.duration,t))(e),a3=(e,t,a)=>{var i,r,n;a4(t,a,e);let{metadata:s={}}=e,{view_session_id:o=aj()}=s,l=null!=(i=null==e?void 0:e.metadata)&&i.video_id?e.metadata.video_id:ii(e)&&null!=(n=null!=(r=aY(e.playbackId))?r:aQ(e.src))?n:e.src;s.view_session_id=o,s.video_id=l,e.metadata=s,e.drmTypeCb=e=>{var a;null==(a=t.mux)||a.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var a;let i=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let s=null==(a=aq.get(t))?void 0:a.coreReference;a3(e,t,s),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,i&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},aq.set(t,{retryCount:0});let d=a9(e,t),u=(({preload:e,src:t},a,i)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?a.setAttribute("preload",e):a.removeAttribute("preload")};if(!i)return r(e),r;let n=!1,s=!1,o=i.config.maxBufferLength,l=i.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:a.preload;s||"none"===t||("metadata"===t?(i.config.maxBufferLength=1,i.config.maxBufferSize=1):(i.config.maxBufferLength=o,i.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,i.loadSource(t))};return t1(a,"play",()=>{s=!0,i.config.maxBufferLength=o,i.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,d);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?d&&t.mux.addHLSJS({hlsjs:d,Hls:d?tW:void 0}):is(e,t,d),io(e,t,d),ab(t),aw(t);let c=((e,t,a)=>{let{autoplay:i}=e,r=!1,n=!1,s=an(i)?i:!!i,o=()=>{r||t1(t,"playing",()=>{r=!0},{once:!0})};if(o(),t1(t,"loadstart",()=>{r=!1,o(),as(t,s)},{once:!0}),t1(t,"loadstart",()=>{a||(n=e.streamType&&e.streamType!==tY?e.streamType===tG:!Number.isFinite(t.duration)),as(t,s)},{once:!0}),a&&a.once(tW.Events.LEVEL_LOADED,(t,a)=>{var i;n=e.streamType&&e.streamType!==tY?e.streamType===tG:null!=(i=a.details.live)&&i}),!s){let i=()=>{!n||Number.isFinite(e.startTime)||(null!=a&&a.liveSyncPosition?t.currentTime=a.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};a&&t1(t,"play",()=>{"metadata"===t.preload?a.once(tW.Events.LEVEL_UPDATED,i):i()},{once:!0})}return e=>{r||as(t,s=an(e)?e:!!e)}})(e,t,d);((e,t,a)=>{let{minPreloadSegments:i}=e;if(null==i||i<=0||!a)return;let r=0,n=!1,s=t.playbackRate||1,o=()=>{0!==t.playbackRate&&(s=t.playbackRate,t.playbackRate=0)};t.playbackRate=0,t1(t,"ratechange",o);let l=(e,{frag:a})=>{n||"main"!==a.type||++r>=i&&(n=!0,t.removeEventListener("ratechange",o),t.playbackRate=s)};a.on(tW.Events.FRAG_BUFFERED,l),t.addEventListener("teardown",()=>{n||(n=!0,a.off(tW.Events.FRAG_BUFFERED,l),t.playbackRate=s)},{once:!0})})(e,t,d),((e,t)=>{let{initialEstimateSegments:a}=e;if(null==a||a<=0||!t)return;let i=0;t.on(tW.Events.FRAG_BUFFERED,(e,{frag:r})=>{"main"===r.type&&++i<a&&t.abrController.resetEstimator(t.config.abrEwmaDefaultEstimate)})})(e,d);let h={engine:d,setAutoplay:c,setPreload:u},m=aq.get(t);return m&&(m.coreReference=h),h},a4=(e,t,a)=>{let i=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=a&&a.muxDataKeepSession?i&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),i&&(i.detachMedia(),i.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",id),e.removeEventListener("error",ic),e.removeEventListener("durationchange",il),aq.delete(e),e.dispatchEvent(new Event("teardown")))};function a5(e,t){var a;let i=t3(e);if(i!==tX.M3U8)return!0;let r=!i||null==(a=t.canPlayType(i))||a,{preferPlayback:n}=e,s=aK&&("mse"===n||a$||!(/^((?!chrome|android).)*safari/i.test(aH)&&t.canPlayType("application/vnd.apple.mpegurl")));return r&&(n===tQ||!s)}var a9=(e,t)=>{let{debug:a,streamType:i,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:d}=e,u=t3(e)===tX.M3U8,c=a5(e,t);if(u&&!c&&aK){let u={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...null!=d?{abrEwmaDefaultEstimate:1e3*d}:{}},c=a8(i),h=a6(e),m=[tz.QUERY,tz.HEADER].includes(s)?{useHeaders:s===tz.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,p=ir(e,o),v=new tW({debug:a,startPosition:r,cmcd:m,xhrSetup:(e,t)=>{var a,i;if(s&&s!==tz.QUERY)return;let r=t6(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(i=null==(a=r.searchParams.get("CMCD"))?void 0:a.split(","))?i:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},...u,...p,...c,...h,...o});return p.capLevelController===aM&&void 0!==l&&aM.setMaxAutoResolution(v,l),v.on(tW.Events.MANIFEST_PARSED,async function(e,a){var i,r;let n=null==(i=a.sessionData)?void 0:i["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&aB(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),v}},a8=e=>e===tG?{backBufferLength:8}:{},a6=e=>{let{tokens:{drm:t}={},playbackId:a,drmTypeCb:i}=e,r=aY(a);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:it(e,"fairplay"),serverCertificateUrl:ia(e,"fairplay")},"com.widevine.alpha":{licenseUrl:it(e,"widevine")},"com.microsoft.playready":{licenseUrl:it(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let a=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:a}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let a=e.includes("fps")?aP:e.includes("playready")?"playready":e.includes("widevine")?"widevine":void 0;return null==i||i(a),t}))}:{}},a7=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},ie=async(e,t)=>{let a=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==a.status?Promise.reject(a):new Uint8Array(await a.arrayBuffer())},it=({playbackId:e,tokens:{drm:t}={},customDomain:a=aV},i)=>{let r=aY(e);return`https://license.${a.toLocaleLowerCase().endsWith(aV)?a:aV}/license/${i}/${r}?token=${t}`},ia=({playbackId:e,tokens:{drm:t}={},customDomain:a=aV},i)=>{let r=aY(e);return`https://license.${a.toLocaleLowerCase().endsWith(aV)?a:aV}/appcert/${i}/${r}?token=${t}`},ii=({playbackId:e,src:t,customDomain:a})=>{if(e)return!0;if("string"!=typeof t)return!1;let i=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return i.includes(aV)||!!a&&i.includes(a.toLocaleLowerCase())},ir=(e,t)=>{let a={};return a.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==a.capLevelToPlayerSize?(a.capLevelController=aM,a.capLevelToPlayerSize=!0):a.capLevelController=tB.CapLevelController,a},is=(e,t,a)=>{var i;let{envKey:r,disableTracking:n,muxDataSDK:s=tN,muxDataSDKOptions:o={}}=e,l=ii(e);if(!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(i=null==e?void 0:e.metadata)?void 0:i.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:a,Hls:a?tW:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}},io=(e,t,a)=>{var i,r;let n=a5(e,t),{src:s,customDomain:o=aV}=e,l=()=>{t.ended||e.disablePseudoEnded||!a2(t,a)||(a1(t,a)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},d,u,c=()=>{let e=aX(t),a,i;e.length>0&&(a=e.start(0),i=e.end(0)),(u!==i||d!==a)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),d=a,u=i};if(t1(t,"durationchange",c),t&&n){let a=t3(e);if("string"==typeof s){if(s.endsWith(".mp4")&&s.includes(o)){let e=aQ(s);aB(new URL(`https://stream.${o}/${e}/metadata.json`).toString(),t)}let n=()=>{if(aZ(t)!==tG||Number.isFinite(t.duration))return;let e=setInterval(c,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),t1(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},l=async()=>aU(s,t,a).then(n).catch(a=>{if(a instanceof Response){let i=aT(a,t$,e);if(i)return void iu(t,i)}});if("none"===t.preload){let e=()=>{l(),t.removeEventListener("loadedmetadata",a)},a=()=>{l(),t.removeEventListener("play",e)};t1(t,"play",e,{once:!0}),t1(t,"loadedmetadata",a,{once:!0})}else l();null!=(i=e.tokens)&&i.drm?((e,t)=>{let a={mediaEl:t,getAppCertificate:()=>a7(ia(e,"fairplay")).catch(t=>{if(t instanceof Response){let a=aT(t,"drm",e);return console.error("mediaError",null==a?void 0:a.message,null==a?void 0:a.context),a?Promise.reject(a):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>ie(t,it(e,"fairplay")).catch(t=>{if(t instanceof Response){let a=aT(t,"drm",e);return console.error("mediaError",null==a?void 0:a.message,null==a?void 0:a.context),a?Promise.reject(a):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:iu,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,aP)}};if(e.useWebkitFairplay)(({mediaEl:e,getAppCertificate:t,getLicenseKey:a,saveAndDispatchError:i,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new tV(aa("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tV.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000005,i(e,t),()=>{}}let n=t(),s=null,o=t=>{(async()=>{try{var a,r;let i,s,o,u,c,h,m,p;e.webkitKeys||l();let v=await n;if(null===t.initData||null==v)return;let b=(a=t.initData,r=v,i=function(e){let t=new ArrayBuffer(2*e.length),a=new DataView(t);for(let t=0;t<e.length;t++)a.setUint16(2*t,e.charCodeAt(t),!0);return t}(ax(a)),s=new Uint8Array(a),o=new Uint8Array(i),u=new Uint8Array(r),c=new Uint8Array(s.byteLength+4+u.byteLength+4+o.byteLength),h=0,m=e=>{c.set(e,h),h+=e.byteLength},p=e=>{let t=new DataView(c.buffer),a=e.byteLength;t.setUint32(h,a,!0),h+=4,m(e)},m(s),p(o),p(u),c);d(b)}catch(t){console.error("Could not start encrypted playback due to exception",t),i(e,t)}})()},l=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),r()}catch{let e=new tV("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",tV.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory="drm",e.muxCode=5000001,e}},d=t=>{let r=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,i=await a(e);r.update(i)}catch(t){console.error("Error on FairPlay session message",t),i(e,t)}},o=t=>{let a=t.target.error;if(!a)return;console.error(`Internal Webkit Key Session Error - sysCode: ${a.systemCode} code: ${a.code}`);let r=new tV(aa("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tV.MEDIA_ERR_ENCRYPTED,!0);r.errorCategory="drm",r.muxCode=5000005,i(e,r)},l=()=>{r.removeEventListener("webkitkeymessage",n),r.removeEventListener("webkitkeyerror",o),e.removeEventListener("teardown",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l),s=null;try{r.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l,{once:!0}),r.addEventListener("webkitkeymessage",n),r.addEventListener("webkitkeyerror",o),e.addEventListener("teardown",l),s=l},u=()=>{e.removeEventListener("webkitneedkey",o),e.removeEventListener("teardown",u),null==s||s();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",o),e.addEventListener("teardown",u,{once:!0})})(a);else{let t=(({mediaEl:e,getAppCertificate:t,getLicenseKey:a,saveAndDispatchError:i,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async t=>{try{let a=t.initDataType;if("skd"!==a)return void console.error(`Received unexpected initialization data type "${a}"`);e.mediaKeys||await l(a);let i=t.initData;if(null==i)return void console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);await d(a,i)}catch(t){i(e,t);return}},l=async a=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[a],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(r(),e)).catch(()=>{let t=new tV(aa("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tV.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000001,i(e,t)});if(!n)return;let s=await n.createMediaKeys();try{let e=await t();await s.setServerCertificate(e).catch(()=>{let e=aa("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new tV(e,tV.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000004,Promise.reject(t)})}catch(t){i(e,t);return}await e.setMediaKeys(s)},d=async(t,r)=>{let o=e.mediaKeys.createSession(),l=async t=>{let r=t.message,n=await a(r);try{await o.update(n)}catch{let t=new tV(aa("Failed to update DRM license. This may be an issue with the player or your protected content."),tV.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000003,i(e,t)}},d=()=>{o.keyStatuses.forEach(t=>{let a;"internal-error"===t?((a=new tV(aa("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tV.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",a.muxCode=5000005):("output-restricted"===t||"output-downscaled"===t)&&((a=new tV(aa("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tV.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",a.muxCode=5000006),a&&i(e,a)})};o.addEventListener("keystatuseschange",d),o.addEventListener("message",l);let u=async()=>{o.removeEventListener("keystatuseschange",d),o.removeEventListener("message",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",u),e.removeEventListener("teardown",u),await o.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",u,{once:!0}),e.addEventListener("teardown",u,{once:!0}),s=u,await o.generateRequest(t,r).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new tV(aa("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tV.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory="drm",e.muxCode=5000002,console.error("Failed to generate license request",t),Promise.reject(e)}})},u=async()=>{e.removeEventListener("encrypted",o),e.removeEventListener("teardown",u),s&&await s(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",o),e.addEventListener("teardown",u,{once:!0}),u})({fallbackToWebkitFairplay:async()=>{var a;await t(),null==(a=e.fallbackToWebkitFairplay)||a.call(e)},...a})}})(e,t):t1(t,"encrypted",()=>{let e=new tV(aa("Attempting to play DRM-protected content without providing a DRM token."),tV.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory="drm",e.muxCode=5000002,iu(t,e)},{once:!0}),t.setAttribute("src",s),e.startTime&&((null!=(r=aq.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",il,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",id),t.addEventListener("error",ic),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),t1(t,"pause",l),t1(t,"seeked",l),t1(t,"play",()=>{t.ended||a0(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else{let i,r;a&&s?(a.once(tW.Events.LEVEL_LOADED,(e,i)=>{((e,t,a)=>{var i,r,n,s,o,l,d,u,c;let h,m,p,v,b,{streamType:g,targetLiveWindow:y,liveEdgeStartOffset:f,lowLatency:E}=(m=t4(h=e.type),p=t5(h),b=!!(null!=(c=e.partList)&&c.length),m===tG&&(v=b?2*e.partTarget:3*e.targetduration),{streamType:m,targetLiveWindow:p,liveEdgeStartOffset:v,lowLatency:b});if(g===tG){E?(a.config.backBufferLength=null!=(i=a.userConfig.backBufferLength)?i:4,a.config.maxFragLookUpTolerance=null!=(r=a.userConfig.maxFragLookUpTolerance)?r:.001,a.config.abrBandWidthUpFactor=null!=(n=a.userConfig.abrBandWidthUpFactor)?n:a.config.abrBandWidthFactor):a.config.backBufferLength=null!=(s=a.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var i;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(i=a.liveSyncPosition)?i:t.seekable.end(e)}});(null!=(o=aq.get(t))?o:{}).seekable=e}(null!=(l=aq.get(t))?l:{}).liveEdgeStartOffset=f,(null!=(d=aq.get(t))?d:{}).targetLiveWindow=y,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=aq.get(t))?u:{}).streamType=g,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(i.details,t,a),c(),aZ(t)!==tG||Number.isFinite(t.duration)||(a.on(tW.Events.LEVEL_UPDATED,c),t1(t,"durationchange",()=>{Number.isFinite(t.duration)&&a.off(tW.Events.LEVELS_UPDATED,c)}))}),a.on(tW.Events.ERROR,(i,r)=>{var n,s;let o=ih(r,e);if(2412e3===o.muxCode){let e=null!=(n=aq.get(t))?n:{},i=null!=(s=e.retryCount)?s:0;if(i<6){let n=0===i?5e3:6e4,s=new tV(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),iu(t,s);let l=setTimeout(()=>{e.retryCount=i+1,"manifestLoadError"===r.details&&r.url&&a.loadSource(r.url)},n);t.addEventListener("teardown",()=>clearTimeout(l),{once:!0});return}{e.retryCount=0;let a=new tV('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',o.code,o.fatal);Object.assign(a,o),iu(t,a);return}}iu(t,o)}),a.on(tW.Events.MANIFEST_LOADED,()=>{let e=aq.get(t);e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",ic),t1(t,"waiting",l),function(e,t){var a;if(!("videoTracks"in e))return;let i=new WeakMap;t.on(tW.Events.MANIFEST_PARSED,function(t,a){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,a.levels.entries())){let a=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);i.set(t,`${e}`),a.id=`${e}`}}),t.on(tW.Events.AUDIO_TRACKS_UPDATED,function(t,a){for(let t of(s(),a.audioTracks)){let a=t.default?"main":"alternative",i=e.addAudioTrack(a,t.name,t.lang);i.id=`${t.id}`,t.default&&(i.enabled=!0)}});let r=()=>{var a;let i=+(null==(a=[...e.audioTracks].find(e=>e.enabled))?void 0:a.id),r=t.audioTracks.map(e=>e.id);i!=t.audioTrack&&r.includes(i)&&(t.audioTrack=i)};e.audioTracks.addEventListener("change",r),t.on(tW.Events.LEVELS_UPDATED,function(t,a){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=a.levels.map(e=>i.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let n=e=>{let a=e.target.selectedIndex;a!=t.nextLevel&&(t.nextLevel=a)};null==(a=e.videoRenditions)||a.addEventListener("change",n);let s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),s()};t.once(tW.Events.DESTROYING,()=>{var t,a;o(),null==(t=e.audioTracks)||t.removeEventListener("change",r),null==(a=e.videoRenditions)||a.removeEventListener("change",n)})}(e,a),a.on(tW.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(e,{tracks:i})=>{i.forEach(e=>{var i,r;let n=null!=(i=e.subtitleTrack)?i:e.closedCaptions,s=a.subtitleTracks.findIndex(({lang:t,name:a,type:i})=>t==(null==n?void 0:n.lang)&&a===e.label&&i.toLowerCase()===e.kind),o=(null!=(r=e._id)?r:e.default)?"default":`${e.kind}${s}`;al(t,e.kind,e.label,null==n?void 0:n.lang,o,e.default)})}),i=()=>{if(!a.subtitleTracks.length)return;let e=Array.from(t.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!e)return;let i=a.subtitleTracks[a.subtitleTrack],r=i?i.default?"default":`${a.subtitleTracks[a.subtitleTrack].type.toLowerCase()}${a.subtitleTrack}`:void 0;if(a.subtitleTrack<0||(null==e?void 0:e.id)!==r){let t=a.subtitleTracks.findIndex(({lang:t,name:a,type:i,default:r})=>"default"===e.id&&r||t==e.language&&a===e.label&&i.toLowerCase()===e.kind);a.subtitleTrack=t}(null==e?void 0:e.id)===r&&e.cues&&Array.from(e.cues).forEach(t=>{e.addCue(t)})},t.textTracks.addEventListener("change",i),a.on(tW.Events.CUES_PARSED,(e,{track:a,cues:i})=>{let r=t.textTracks.getTrackById(a);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),i.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),a.once(tW.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",i),t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})}),r=()=>{Array.from(t.textTracks).forEach(e=>{var a,i;if(!["subtitles","caption"].includes(e.kind)&&("thumbnails"===e.label||"chapters"===e.kind)){if(!(null!=(a=e.cues)&&a.length)){let a="track";e.kind&&(a+=`[kind="${e.kind}"]`),e.label&&(a+=`[label="${e.label}"]`);let r=t.querySelector(a),n=null!=(i=null==r?void 0:r.getAttribute("src"))?i:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==e.mode&&(e.mode="hidden")}})},a.once(tW.Events.MANIFEST_LOADED,r),a.once(tW.Events.MEDIA_ATTACHED,r),a.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")}};function il(e){var t;let a=e.target,i=null==(t=aq.get(a))?void 0:t.startTime;if(i&&function(e,t,a){t&&a>t&&(a=t);for(let t=0;t<e.length;t++)if(e.start(t)<=a&&e.end(t)>=a)return!0;return!1}(a.seekable,a.duration,i)){let e="auto"===a.preload;e&&(a.preload="none"),a.currentTime=i,e&&(a.preload="auto")}}async function id(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:a,code:i}=t.error,r=new tV(a,i);if(t.src&&i===tV.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let a=null!=(e=az(t))?e:t.error;(null==a?void 0:a.code)===tV.MEDIA_ERR_SRC_NOT_SUPPORTED&&iu(t,r)},500);if(t.src&&(i!==tV.MEDIA_ERR_DECODE||void 0!==i))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}iu(t,r)}function iu(e,t){var a;t.fatal&&((null!=(a=aq.get(e))?a:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function ic(e){var t,a;if(!(e instanceof CustomEvent)||!(e.detail instanceof tV))return;let i=e.target,r=e.detail;r&&r.fatal&&((null!=(t=aq.get(i))?t:{}).error=r,null==(a=i.mux)||a.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var ih=(e,t)=>{var a,i,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[tW.ErrorTypes.NETWORK_ERROR]:tV.MEDIA_ERR_NETWORK,[tW.ErrorTypes.MEDIA_ERROR]:tV.MEDIA_ERR_DECODE,[tW.ErrorTypes.KEY_SYSTEM_ERROR]:tV.MEDIA_ERR_ENCRYPTED},s,o=[tW.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,tW.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?tV.MEDIA_ERR_NETWORK:n[e.type];if(o===tV.MEDIA_ERR_NETWORK&&e.response){let r=null!=(a=e.type===tW.ErrorTypes.KEY_SYSTEM_ERROR?"drm":e.type===tW.ErrorTypes.NETWORK_ERROR?t$:void 0)?a:t$;s=null!=(i=aT(e.response,r,t,e.fatal))?i:new tV("",o,e.fatal)}else o===tV.MEDIA_ERR_ENCRYPTED?e.details===tW.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new tV(aa("Attempting to play DRM-protected content without providing a DRM token."),tV.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000002):e.details===tW.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new tV(aa("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tV.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000001):e.details===tW.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new tV(aa("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tV.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",s.muxCode=5000002):e.details===tW.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new tV(aa("Failed to update DRM license. This may be an issue with the player or your protected content."),tV.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000003):e.details===tW.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new tV(aa("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),tV.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000004):e.details===tW.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new tV(aa("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tV.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000005):e.details===tW.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new tV(aa("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tV.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",s.muxCode=5000006):((s=new tV(e.error.message,tV.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5e6):s=new tV("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s},im=e.i(116699);try{var ip="u">typeof window?window:e.g;ip._sentryModuleMetadata=ip._sentryModuleMetadata||{},ip._sentryModuleMetadata[(new ip.Error).stack]=Object.assign({},ip._sentryModuleMetadata[(new ip.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var iv,ib,ig,iy,iE,i_,iw,iT,iA,ik,iM,iS,iI,iR,iC=e=>{throw TypeError(e)},iL=(e,t,a)=>t.has(e)||iC("Cannot "+a),iD=(e,t,a)=>(iL(e,t,"read from private field"),a?a.call(e):t.get(e)),ix=(e,t,a)=>t.has(e)?iC("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),iP=(e,t,a,i)=>(iL(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),iO=(e,t,a)=>(iL(e,t,"access private method"),a),iN=(()=>{try{return"0.31.0"}catch{}return"UNKNOWN"})(),iU=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,iB={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},iH=Object.values(iB),iW="mux-video",i$=class extends im.CustomVideoElement{constructor(){super(),ix(this,iM),ix(this,iv),ix(this,ib),ix(this,ig,{}),ix(this,iy,{}),ix(this,iE),ix(this,i_),ix(this,iw),ix(this,iT),ix(this,iA,""),ix(this,ik,e=>{var t,a,i;let r=(a=this.nativeEl,null==(i=aq.get(a))?void 0:i.metadata),n=null!=(t=this.metadata)?t:{};this.metadata={...r,...n},(null==r?void 0:r["com.mux.video.branding"])==="mux-free-plan"&&(iP(this,iA,"default"),this.updateLogo())}),ix(this,iI),iP(this,ib,aF())}static get NAME(){return iW}static get VERSION(){return iN}static get observedAttributes(){var e;return[...iH,...null!=(e=im.CustomVideoElement.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?iU:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${im.CustomVideoElement.getTemplateHTML(e)}
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
        ${this.getLogoHTML(null!=(t=e[iB.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(iB.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tZ.includes(e)?this.setAttribute(iB.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${tZ.join()}`):this.removeAttribute(iB.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(iB.PLAYER_INIT_TIME)?+this.getAttribute(iB.PLAYER_INIT_TIME):iD(this,ib)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(iB.PLAYER_INIT_TIME):this.setAttribute(iB.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=iD(this,iw))?e:iW}set playerSoftwareName(e){iP(this,iw,e)}get playerSoftwareVersion(){var e;return null!=(e=iD(this,i_))?e:iN}set playerSoftwareVersion(e){iP(this,i_,e)}get _hls(){var e;return null==(e=iD(this,iM,iS))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=az(this.nativeEl))?e:null}get errorTranslator(){return iD(this,iT)}set errorTranslator(e){iP(this,iT,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(iB.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(iB.TYPE,e):this.removeAttribute(iB.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(iB.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(iB.DEBUG,""):this.removeAttribute(iB.DEBUG))}get disableTracking(){return this.hasAttribute(iB.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(iB.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(iB.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(iB.DISABLE_COOKIES,""):this.removeAttribute(iB.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(iB.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(iB.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(iB.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(iB.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(iB.START_TIME):this.setAttribute(iB.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(iB.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(null==e?this.removeAttribute(iB.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(iB.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(iB.INITIAL_ESTIMATE_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(null==e?this.removeAttribute(iB.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(iB.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(iB.MIN_PRELOAD_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set minPreloadSegments(e){e!==this.minPreloadSegments&&(null==e?this.removeAttribute(iB.MIN_PRELOAD_SEGMENTS):this.setAttribute(iB.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(iB.PLAYBACK_ID)?this.getAttribute(iB.PLAYBACK_ID):null!=(e=aQ(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(iB.PLAYBACK_ID,e):this.removeAttribute(iB.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(iB.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(iB.MAX_RESOLUTION,e):this.removeAttribute(iB.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(iB.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(iB.MIN_RESOLUTION,e):this.removeAttribute(iB.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(iB.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(iB.MAX_AUTO_RESOLUTION):this.setAttribute(iB.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(iB.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(iB.RENDITION_ORDER,e):this.removeAttribute(iB.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(iB.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(iB.PROGRAM_START_TIME):this.setAttribute(iB.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(iB.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(iB.PROGRAM_END_TIME):this.setAttribute(iB.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(iB.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(iB.ASSET_START_TIME):this.setAttribute(iB.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(iB.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(iB.ASSET_END_TIME):this.setAttribute(iB.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(iB.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(iB.CUSTOM_DOMAIN,e):this.removeAttribute(iB.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:iD(this,iI)}set capRenditionToPlayerSize(e){iP(this,iI,e)}get drmToken(){var e;return null!=(e=this.getAttribute(iB.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(iB.DRM_TOKEN,e):this.removeAttribute(iB.DRM_TOKEN))}get playbackToken(){var e,t,a,i;if(this.hasAttribute(iB.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(iB.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(iB.PLAYBACK_ID)){let[,e]=t2(null!=(t=this.playbackId)?t:"");return null!=(a=new URLSearchParams(e).get("token"))?a:void 0}if(this.src)return null!=(i=new URLSearchParams(this.src).get("token"))?i:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(iB.PLAYBACK_TOKEN,e):this.removeAttribute(iB.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(iB.PLAYBACK_TOKEN),t=this.getAttribute(iB.DRM_TOKEN);return{...iD(this,iy),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){iP(this,iy,null!=e?e:{})}get ended(){return a2(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(iB.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(iB.ENV_KEY,e):this.removeAttribute(iB.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(iB.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(iB.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(iB.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(iB.STREAM_TYPE))?e:aZ(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(iB.STREAM_TYPE,e):this.removeAttribute(iB.STREAM_TYPE))}get targetLiveWindow(){var e,t,a;return this.hasAttribute(iB.TARGET_LIVE_WINDOW)?+this.getAttribute(iB.TARGET_LIVE_WINDOW):(e=this.nativeEl,null!=(a=null==(t=aq.get(e))?void 0:t.targetLiveWindow)?a:NaN)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(iB.TARGET_LIVE_WINDOW):this.setAttribute(iB.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(iB.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,i=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,i-a)}return(e=>{var t;let a=null==(t=aq.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof a)return NaN;let i=aX(e);return i.length?i.end(i.length-1)-a:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(iB.LIVE_EDGE_OFFSET))return+this.getAttribute(iB.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(iB.LIVE_EDGE_OFFSET):this.setAttribute(iB.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return aX(this.nativeEl)}async addCuePoints(e){return am(this.nativeEl,e)}get activeCuePoint(){return av(this.nativeEl)}get cuePoints(){return function(e,t={label:ac}){let a=ad(e,t.label,"metadata");return null!=a&&a.cues?Array.from(a.cues,e=>ap(e)):[]}(this.nativeEl)}async addChapters(e){return aE(this.nativeEl,e)}get activeChapter(){return a_(this.nativeEl)}get chapters(){return function(e,t={label:ag}){var a;let i=ad(e,t.label,"chapters");return null!=(a=null==i?void 0:i.cues)&&a.length?Array.from(i.cues,e=>af(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let a=t.playingDate;if(null!=a)return new Date(a.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(iB.PREFER_PLAYBACK);if("mse"===e||e===tQ)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===tQ?this.setAttribute(iB.PREFER_PLAYBACK,e):this.removeAttribute(iB.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![iB.METADATA_URL].includes(e)).reduce((e,t)=>{let a=this.getAttribute(t);return null!=a&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...iD(this,ig)}}set metadata(e){iP(this,ig,null!=e?e:{}),this.mux&&this.mux.emit("hb",iD(this,ig))}get _hlsConfig(){return iD(this,iE)}set _hlsConfig(e){iP(this,iE,e)}get logo(){var e;return null!=(e=this.getAttribute(iB.LOGO))?e:iD(this,iA)}set logo(e){e?this.setAttribute(iB.LOGO,e):this.removeAttribute(iB.LOGO)}load(){a3(this,this.nativeEl,iD(this,iM,iS))}unload(){a4(this.nativeEl,iD(this,iM,iS),this)}attributeChangedCallback(e,t,a){var i,r;switch(im.CustomVideoElement.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,a),e){case iB.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=a?a:void 0;break;case iB.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=a?a:void 0;break;case"src":{let e=!!t,i=!!a;!e&&i?iO(this,iM,iR).call(this):e&&!i?this.unload():e&&i&&(this.unload(),iO(this,iM,iR).call(this));break}case"autoplay":if(a===t)break;null==(i=iD(this,iM,iS))||i.setAutoplay(this.autoplay);break;case"preload":if(a===t)break;null==(r=iD(this,iM,iS))||r.setPreload(a);break;case iB.PLAYBACK_ID:case iB.CUSTOM_DOMAIN:case iB.MAX_RESOLUTION:case iB.MIN_RESOLUTION:case iB.RENDITION_ORDER:case iB.PROGRAM_START_TIME:case iB.PROGRAM_END_TIME:case iB.ASSET_START_TIME:case iB.ASSET_END_TIME:case iB.PLAYBACK_TOKEN:this.src=aG(this);break;case iB.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case iB.METADATA_URL:a&&fetch(a).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case iB.STREAM_TYPE:(null==a||a!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case iB.TARGET_LIVE_WINDOW:(null==a||a!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case iB.LOGO:(null==a||a!==t)&&this.updateLogo();break;case iB.DISABLE_TRACKING:if(null==a||a!==t){let e=this.currentTime,t=this.paused;this.unload(),iO(this,iM,iR).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case iB.DISABLE_COOKIES:(null==a||a!==t)&&this.disableCookies&&document.cookie.split(";").forEach(e=>{e.trim().startsWith("muxData")&&(document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break;case iB.CAP_RENDITION_TO_PLAYER_SIZE:(null==a||a!==t)&&(this.capRenditionToPlayerSize=null!=a||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(iD(this,iA)||this.logo))}connectedCallback(){var e,t;null==(e=super.connectedCallback)||e.call(this),null==(t=this.nativeEl)||t.addEventListener("muxmetadata",iD(this,ik)),this.nativeEl&&this.src&&!iD(this,iM,iS)&&iO(this,iM,iR).call(this)}disconnectedCallback(){var e,t;null==(e=this.nativeEl)||e.removeEventListener("muxmetadata",iD(this,ik)),this.unload(),null==(t=super.disconnectedCallback)||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};iv=new WeakMap,ib=new WeakMap,ig=new WeakMap,iy=new WeakMap,iE=new WeakMap,i_=new WeakMap,iw=new WeakMap,iT=new WeakMap,iA=new WeakMap,ik=new WeakMap,iM=new WeakSet,iS=function(){var e,t;return e=this.nativeEl,null==(t=aq.get(e))?void 0:t.coreReference},iI=new WeakMap,iR=async function(){iD(this,iv)||(await iP(this,iv,Promise.resolve()),iP(this,iv,null),this.load())};try{var iq="u">typeof window?window:e.g;iq._sentryModuleMetadata=iq._sentryModuleMetadata||{},iq._sentryModuleMetadata[(new iq.Error).stack]=Object.assign({},iq._sentryModuleMetadata[(new iq.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let iV=new WeakMap;class iK extends Error{}class iF extends Error{}let ij=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],iG=globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let a=t.deref();a&&e(a)})}}:Set;function iY(){return globalThis.cast?.framework?.CastContext.getInstance()}function iQ(){return iY()?.getCurrentSession()}function iz(){return iQ()?.getSessionObj().media[0]}function iZ(e){return iY().setOptions({...iX(),...e})}function iX(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}async function iJ(e){if(!e)return!1;if(/\.m3u8?(\?.*)?$/i.test(e))return!0;if(e.startsWith("blob:"))return!1;try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return ij.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function i0(e){if(!(!e||e.startsWith("blob:")))try{let a=await (await fetch(e)).text(),i=a,r=function(e){let t=e.split("\n"),a=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let i=t[e+1]?t[e+1].trim():"";i&&!i.startsWith("#")&&a.push(i)}return a}(a);if(r.length>0){let t=new URL(r[0],e).toString();i=await (await fetch(t)).text()}var t=i.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());if(!t)return;let n=t.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return n?n[1]:null}catch(e){console.error("Error while trying to parse the manifest playlist",e);return}}try{var i1="u">typeof window?window:e.g;i1._sentryModuleMetadata=i1._sentryModuleMetadata||{},i1._sentryModuleMetadata[(new i1.Error).stack]=Object.assign({},i1._sentryModuleMetadata[(new i1.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let i2=new iG,i3=new WeakSet;rs=()=>{globalThis.chrome?.cast?.isAvailable?t||(t=cast.framework,iY().addEventListener(t.CastContextEventType.CAST_STATE_CHANGED,e=>{i2.forEach(t=>iV.get(t).onCastStateChanged?.(e))}),iY().addEventListener(t.CastContextEventType.SESSION_STATE_CHANGED,e=>{i2.forEach(t=>iV.get(t).onSessionStateChanged?.(e))}),i2.forEach(e=>iV.get(e).init?.())):console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable)},globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?rs():customElements.whenDefined("google-cast-button").then(rs):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(rs)};let i4=0;class i5 extends EventTarget{#e;#t;#a;#i;#r="disconnected";#n=!1;#s=new Set;#o=new WeakMap;#l=()=>this.#d();constructor(e){super(),this.#e=e,i2.add(this),iV.set(this,{init:()=>this.#u(),onCastStateChanged:()=>this.#c(),onSessionStateChanged:()=>this.#h(),getCastPlayer:()=>this.#m}),this.#u()}destroy(){this.#e?.textTracks?.removeEventListener("change",this.#l),this.#i&&this.#a?.controller&&Object.entries(this.#i).forEach(([e,t])=>{this.#a.controller.removeEventListener(e,t)}),this.#e&&i3.delete(this.#e),this.#t=!1}get #m(){if(i3.has(this.#e))return this.#a}get state(){return this.#r}async watchAvailability(e){if(this.#e.disableRemotePlayback)throw new iK("disableRemotePlayback attribute is present.");return this.#o.set(e,++i4),this.#s.add(e),queueMicrotask(()=>e(this.#p())),i4}async cancelWatchAvailability(e){if(this.#e.disableRemotePlayback)throw new iK("disableRemotePlayback attribute is present.");e?this.#s.delete(e):this.#s.clear()}async prompt(){if(this.#e.disableRemotePlayback)throw new iK("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new iF("The RemotePlayback API is disabled on this platform.");let e=i3.has(this.#e);i3.add(this.#e),iZ(this.#e.castOptions),Object.entries(this.#i).forEach(([e,t])=>{this.#a.controller.addEventListener(e,t)});try{await iY().requestSession()}catch(t){if(e||i3.delete(this.#e),"cancel"===t)return;throw Error(t)}iV.get(this.#e)?.loadOnPrompt?.()}#v(){i3.has(this.#e)&&(Object.entries(this.#i).forEach(([e,t])=>{this.#a.controller.removeEventListener(e,t)}),i3.delete(this.#e),this.#e.muted=this.#a.isMuted,this.#e.currentTime=this.#a.savedPlayerState.currentTime,!1===this.#a.savedPlayerState.isPaused&&this.#e.play())}#p(){let e=iY()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#c(){let e=iY().getCastState();if(i3.has(this.#e)&&"CONNECTING"===e&&(this.#r="connecting",this.dispatchEvent(new Event("connecting"))),!this.#n&&e?.includes("CONNECT"))for(let e of(this.#n=!0,this.#s))e(!0);else if(this.#n&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#n=!1,this.#s))e(!1)}async #h(){let{SESSION_RESUMED:e}=t.SessionState;if(iY().getSessionState()===e&&this.#e.castSrc===iz()?.media.contentId){i3.add(this.#e),Object.entries(this.#i).forEach(([e,t])=>{this.#a.controller.addEventListener(e,t)});try{var a;await (a=new chrome.cast.media.GetStatusRequest,new Promise((e,t)=>{iz().getStatus(a,e,t)}))}catch(e){console.error(e)}this.#i[t.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#i[t.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#u(){t&&!this.#t&&(this.#t=!0,iZ(this.#e.castOptions),this.#e.textTracks.addEventListener("change",this.#l),this.#c(),this.#a=new t.RemotePlayer,new t.RemotePlayerController(this.#a),this.#i={[t.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#r="connected",this.dispatchEvent(new Event("connect"))):(this.#v(),this.#r="disconnected",this.dispatchEvent(new Event("disconnect")))},[t.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#e.dispatchEvent(new Event("durationchange"))},[t.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#e.dispatchEvent(new Event("volumechange"))},[t.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#e.dispatchEvent(new Event("volumechange"))},[t.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#m?.isMediaLoaded&&this.#e.dispatchEvent(new Event("timeupdate"))},[t.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#e.dispatchEvent(new Event("resize"))},[t.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#e.dispatchEvent(new Event(this.paused?"pause":"play"))},[t.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#m?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#e.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#m?.playerState]))},[t.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#m?.isMediaLoaded&&(await Promise.resolve(),this.#b())}})}#b(){this.#d()}async #d(){let e;if(!this.#m)return;let t=(this.#a.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),a=[...this.#e.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),i=t.map(({language:e,name:t,trackId:i})=>{let{mode:r}=a.find(a=>a.language===e&&a.label===t)??{};return!!r&&{mode:r,trackId:i}}).filter(Boolean),r=i.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=i.find(({mode:e})=>"showing"===e),s=iQ()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,a)=>{iz().editTracksInfo(e,t,a)})}catch(e){console.error(e)}}}try{var i9="u">typeof window?window:e.g;i9._sentryModuleMetadata=i9._sentryModuleMetadata||{},i9._sentryModuleMetadata[(new i9.Error).stack]=Object.assign({},i9._sentryModuleMetadata[(new i9.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let i8=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#g={paused:!1};#y=iX();#f;#E;get remote(){if(this.#E)return this.#E;if(globalThis.chrome){if(!this.isConnected)return;return this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),iV.set(this,{loadOnPrompt:()=>this.#_()}),this.#E=new i5(this)}return super.remote}get #m(){return iV.get(this.remote)?.getCastPlayer?.()}disconnectedCallback(){this.#E?.destroy(),this.#E=null,iV.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),"cast-receiver"===e&&a){this.#y.receiverApplicationId=a;return}if(this.#m)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #_(){this.#g.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#m)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),a=[],i=0;if(t.length&&(e.tracks=t.map(e=>{let t=++i;0===a.length&&"showing"===e.track.mode&&a.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],await iJ(this.castSrc)){e.contentType||(e.contentType="application/x-mpegURL");let t=await i0(this.castSrc);t?.includes("m4s")||t?.includes("mp4")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):t?.includes("ts")&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#g.paused,r.activeTrackIds=a,await iQ()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#m){this.#m.isPaused&&this.#m.controller?.playOrPause();return}return super.play()}pause(){if(this.#m){this.#m.isPaused||this.#m.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#y}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){let e=this.currentSrc,t=e?.startsWith("blob:")?void 0:e;return this.getAttribute("cast-src")??this.querySelector("source")?.src??t??this.getAttribute("src")??void 0}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#f}set castCustomData(e){let t=typeof e;["object","undefined"].includes(t)?this.#f=e:console.error(`castCustomData must be nullish or an object but value was of type ${t}`)}get readyState(){if(this.#m)switch(this.#m.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#m?this.#m.isPaused:super.paused}get muted(){return this.#m?this.#m?.isMuted:super.muted}set muted(e){if(this.#m){(e&&!this.#m.isMuted||!e&&this.#m.isMuted)&&this.#m.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#m?this.#m?.volumeLevel??1:super.volume}set volume(e){if(this.#m){this.#m.volumeLevel=+e,this.#m.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#m&&this.#m?.isMediaLoaded?this.#m?.duration??NaN:super.duration}get currentTime(){return this.#m&&this.#m?.isMediaLoaded?this.#m?.currentTime??0:super.currentTime}set currentTime(e){if(this.#m){this.#m.currentTime=e,this.#m.controller?.seek();return}super.currentTime=e}};e.i(292858);var i6=e.i(594975);try{var i7="u">typeof window?window:e.g;i7._sentryModuleMetadata=i7._sentryModuleMetadata||{},i7._sentryModuleMetadata[(new i7.Error).stack]=Object.assign({},i7._sentryModuleMetadata[(new i7.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var re=e=>{throw TypeError(e)},rt=(e,t,a)=>t.has(e)||re("Cannot "+a),ra=(e,t,a)=>(rt(e,t,"read from private field"),a?a.call(e):t.get(e)),ri=(e,t,a)=>t.has(e)?re("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),rr=(e,t,a,i)=>(rt(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),rn=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends rn{});var rs,ro,rl=class extends rn{},rd=class{constructor(e,t={}){ri(this,ro),rr(this,ro,null==t?void 0:t.detail)}get detail(){return ra(this,ro)}initCustomEvent(){}};ro=new WeakMap;var ru={document:{createElement:function(e,t){return new rl}},DocumentFragment,customElements:{get(e){},define(e,t,a){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(rl)},CustomEvent:rd,EventTarget:rn,HTMLElement:rl,HTMLVideoElement:class extends rn{}},rc="u"<typeof window||void 0===globalThis.customElements,rh=rc?ru:globalThis;rc&&ru.document;var rm,rp=class extends i8((0,i6.MediaTracksMixin)(i$)){constructor(){super(...arguments),ri(this,rm)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=ra(this,rm))?e:this.muxCastCustomData}set castCustomData(e){rr(this,rm,e)}};rm=new WeakMap,rh.customElements.get("mux-video")||(rh.customElements.define("mux-video",rp),rh.MuxVideoElement=rp);try{var rv="u">typeof window?window:e.g;rv._sentryModuleMetadata=rv._sentryModuleMetadata||{},rv._sentryModuleMetadata[(new rv.Error).stack]=Object.assign({},rv._sentryModuleMetadata[(new rv.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let rb={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},rg={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},ry={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},rf=Object.entries(ry),rE=rf.reduce((e,[t,a])=>(e[t]=a.toLowerCase(),e),{}),r_=rf.reduce((e,[t,a])=>(e[t]=a.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),rw=Object.entries(r_).reduce((e,[t,a])=>{let i=rE[t];return i&&(e[a]=i),e},{userinactivechange:"userinactive"}),rT=Object.entries(rE).reduce((e,[t,a])=>{let i=r_[t];return i&&(e[a]=i),e},{userinactive:"userinactivechange"}),rA={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},rk={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},rM={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},rS={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},rI={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},rR={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};e.s(["AttributeToStateChangeEventMap",0,rT,"AvailabilityStates",0,rS,"MediaStateChangeEvents",0,r_,"MediaStateReceiverAttributes",0,rg,"MediaUIAttributes",0,rE,"MediaUIEvents",0,rb,"MediaUIProps",0,ry,"PointerTypes",0,rM,"ReadyStates",0,{HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},"StateChangeEventToAttributeMap",0,rw,"StreamTypes",0,rI,"TextTrackKinds",0,rA,"TextTrackModes",0,rk,"VolumeLevels",0,{HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},"WebkitPresentationModes",0,rR],590241),e.i(590241);try{var rC="u">typeof window?window:e.g;rC._sentryModuleMetadata=rC._sentryModuleMetadata||{},rC._sentryModuleMetadata[(new rC.Error).stack]=Object.assign({},rC._sentryModuleMetadata[(new rC.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}function rL(e){if(e){let{id:t,width:a,height:i}=e;return[t,a,i].filter(e=>null!=e).join(":")}}function rD(e){if(e){let[t,a,i]=e.split(":");return{id:t,width:+a,height:+i}}}function rx(e){if(e){let{id:t,kind:a,language:i,label:r}=e;return[t,a,i,r].filter(e=>null!=e).join(":")}}function rP(e){if(e){let[t,a,i,r]=e.split(":");return{id:t,kind:a,language:i,label:r}}}function rO(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function rN(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let rU=e=>new Promise(t=>setTimeout(t,e));try{var rB="u">typeof window?window:e.g;rB._sentryModuleMetadata=rB._sentryModuleMetadata||{},rB._sentryModuleMetadata[(new rB.Error).stack]=Object.assign({},rB._sentryModuleMetadata[(new rB.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}try{var rH="u">typeof window?window:e.g;rH._sentryModuleMetadata=rH._sentryModuleMetadata||{},rH._sentryModuleMetadata[(new rH.Error).stack]=Object.assign({},rH._sentryModuleMetadata[(new rH.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let rW={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},r$=(null==(cF=globalThis.navigator)?void 0:cF.language)||"en",rq=(e,t={})=>(e=>{var t,a,i;let[r]=r$.split("-");return(null==(t=rW[r$])?void 0:t[e])||(null==(a=rW[r])?void 0:a[e])||(null==(i=rW.en)?void 0:i[e])||e})(e).replace(/\{(\w+)\}/g,(e,a)=>a in t?String(t[a]):`{${a}}`);try{var rV="u">typeof window?window:e.g;rV._sentryModuleMetadata=rV._sentryModuleMetadata||{},rV._sentryModuleMetadata[(new rV.Error).stack]=Object.assign({},rV._sentryModuleMetadata[(new rV.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let rK=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],rF=e=>{if(!rO(e))return"";let t=Math.abs(e),a=t!==e,i=new Date(0,0,0,0,0,t,0),r=[i.getHours(),i.getMinutes(),i.getSeconds()].map((e,t)=>{let a;return e&&(a=1===e?rq(rK[t].singular):rq(rK[t].plural),`${e} ${a}`)}).filter(e=>e).join(", ");return a?rq("{time} remaining",{time:r}):r};function rj(e,t){let a=!1;e<0&&(a=!0,e=0-e);let i=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=i="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(a?"-":"")+n+r+(i=i<10?"0"+i:i)}let rG=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});e.s(["emptyTimeRanges",0,rG,"formatAsTimePhrase",0,rF,"formatTime",0,rj,"serializeTimeRanges",0,function(e=rG){return Array.from(e).map((t,a)=>[Number(e.start(a).toFixed(3)),Number(e.end(a).toFixed(3))].join(":")).join(" ")}],461645),e.i(461645);try{var rY="u">typeof window?window:e.g;rY._sentryModuleMetadata=rY._sentryModuleMetadata||{},rY._sentryModuleMetadata[(new rY.Error).stack]=Object.assign({},rY._sentryModuleMetadata[(new rY.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}class rQ{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class rz extends rQ{}class rZ extends rz{constructor(){super(...arguments),this.role=null}}let rX={createElement:function(){return new rJ.HTMLElement},createElementNS:function(){return new rJ.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},rJ={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:rX,Node:rz,Element:rZ,HTMLElement:class extends rZ{constructor(){super(...arguments),this.innerHTML=""}get content(){return new rJ.DocumentFragment}},DocumentFragment:class extends rQ{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},r0="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"u"<typeof window||void 0===window.customElements,r1=Object.keys(rJ).every(e=>e in globalThis),r2=r0&&!r1?rJ:globalThis,r3=r0&&!r1?rX:globalThis.document;try{var r4="u">typeof window?window:e.g;r4._sentryModuleMetadata=r4._sentryModuleMetadata||{},r4._sentryModuleMetadata[(new r4.Error).stack]=Object.assign({},r4._sentryModuleMetadata[(new r4.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let r5=new WeakMap,r9=e=>{let t=r5.get(e);return t||r5.set(e,t=new Set),t},r8=new r2.ResizeObserver(e=>{for(let t of e)for(let e of r9(t.target))e(t)});function r6(e,t){r9(e).add(t),r8.observe(e)}function r7(e,t){let a=r9(e);a.delete(t),a.size||r8.unobserve(e)}try{var ne="u">typeof window?window:e.g;ne._sentryModuleMetadata=ne._sentryModuleMetadata||{},ne._sentryModuleMetadata[(new ne.Error).stack]=Object.assign({},ne._sentryModuleMetadata[(new ne.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}function nt(e){let t={};for(let a of e)t[a.name]=a.value;return t}function na(e){var t;return null!=(t=ni(e))?t:no(e,"media-controller")}function ni(e){var t;let{MEDIA_CONTROLLER:a}=rg,i=e.getAttribute(a);if(i)return null==(t=nd(e))?void 0:t.getElementById(i)}let nr=(e,t,a=".value")=>{let i=e.querySelector(a);i&&(i.textContent=t)},nn=(e,t)=>{let a,i;return(a=`slot[name="${t}"]`,!(i=e.shadowRoot.querySelector(a))?[]:i.children)[0]},ns=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||ns(e,t.getRootNode().host)),no=(e,t)=>{if(!e)return null;let a=e.closest(t);return a||no(e.getRootNode().host,t)};function nl(e=document){var t;let a=null==e?void 0:e.activeElement;return a?null!=(t=nl(a.shadowRoot))?t:a:null}function nd(e){var t;let a=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return a instanceof ShadowRoot||a instanceof Document?a:null}function nu(e,{depth:t=3,checkOpacity:a=!0,checkVisibilityCSS:i=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:a,checkVisibilityCSS:i});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(a&&"0"===e.opacity||i&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function nc(e,t){let a=function(e,t){var a,i;let r;for(r of null!=(a=e.querySelectorAll("style:not([media])"))?a:[]){let e;try{e=null==(i=r.sheet)?void 0:i.cssRules}catch{continue}for(let a of null!=e?e:[])if(t(a.selectorText))return a}}(e,e=>e===t);return a||nh(e,t)}function nh(e,t){var a,i;let r=null!=(a=e.querySelectorAll("style:not([media])"))?a:[],n=null==r?void 0:r[r.length-1];if(!(null==n?void 0:n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let s=null==n?void 0:n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return null==(i=n.sheet.cssRules)?void 0:i[s]}function nm(e,t,a=NaN){let i=e.getAttribute(t);return null!=i?+i:a}function np(e,t,a){let i=+a;if(null==a||Number.isNaN(i)){e.hasAttribute(t)&&e.removeAttribute(t);return}nm(e,t,void 0)!==i&&e.setAttribute(t,`${i}`)}function nv(e,t){return e.hasAttribute(t)}function nb(e,t,a){if(null==a){e.hasAttribute(t)&&e.removeAttribute(t);return}nv(e,t)!=a&&e.toggleAttribute(t,a)}function ng(e,t,a=null){var i;return null!=(i=e.getAttribute(t))?i:a}function ny(e,t,a){if(null==a){e.hasAttribute(t)&&e.removeAttribute(t);return}let i=`${a}`;ng(e,t,void 0)!==i&&e.setAttribute(t,i)}try{var nf="u">typeof window?window:e.g;nf._sentryModuleMetadata=nf._sentryModuleMetadata||{},nf._sentryModuleMetadata[(new nf.Error).stack]=Object.assign({},nf._sentryModuleMetadata[(new nf.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var nE=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},n_=(e,t,a)=>(nE(e,t,"read from private field"),a?a.call(e):t.get(e)),nw=(e,t,a,i)=>(nE(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);class nT extends r2.HTMLElement{constructor(){if(super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,cj,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rg.MEDIA_CONTROLLER,rE.MEDIA_PAUSED]}attributeChangedCallback(e,t,a){var i,r,n,s,o;e===rg.MEDIA_CONTROLLER&&(t&&(null==(r=null==(i=n_(this,cj))?void 0:i.unassociateElement)||r.call(i,this),nw(this,cj,null)),a&&this.isConnected&&(nw(this,cj,null==(n=this.getRootNode())?void 0:n.getElementById(a)),null==(o=null==(s=n_(this,cj))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,a,i;let r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),nw(this,cj,(a=this,(r=a.getAttribute(rg.MEDIA_CONTROLLER))?null==(i=a.getRootNode())?void 0:i.getElementById(r):no(a,"media-controller"))),this.getAttribute(rg.MEDIA_CONTROLLER)&&(null==(t=null==(e=n_(this,cj))?void 0:e.associateElement)||t.call(e,this)),n_(this,cj)&&(n_(this,cj).addEventListener("pointerdown",this),n_(this,cj).addEventListener("click",this),n_(this,cj).hasAttribute("tabindex")||(n_(this,cj).tabIndex=0))}disconnectedCallback(){var e,t,a,i;this.getAttribute(rg.MEDIA_CONTROLLER)&&(null==(t=null==(e=n_(this,cj))?void 0:e.unassociateElement)||t.call(e,this)),null==(a=n_(this,cj))||a.removeEventListener("pointerdown",this),null==(i=n_(this,cj))||i.removeEventListener("click",this),nw(this,cj,null)}handleEvent(e){var t;let a=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==a?void 0:a.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:a}=e,{left:i,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-i,l=a-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===rM.TOUCH)return void this.handleTap(e);if(d===rM.MOUSE||d===rM.PEN)return void this.handleMouseClick(e)}}}get mediaPaused(){return nv(this,rE.MEDIA_PAUSED)}set mediaPaused(e){nb(this,rE.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?rb.MEDIA_PLAY_REQUEST:rb.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new r2.CustomEvent(t,{composed:!0,bubbles:!0}))}}cj=new WeakMap,nT.shadowRootOptions={mode:"open"},nT.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},r2.customElements.get("media-gesture-receiver")||r2.customElements.define("media-gesture-receiver",nT);try{var nA="u">typeof window?window:e.g;nA._sentryModuleMetadata=nA._sentryModuleMetadata||{},nA._sentryModuleMetadata[(new nA.Error).stack]=Object.assign({},nA._sentryModuleMetadata[(new nA.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var nk=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},nM=(e,t,a)=>(nk(e,t,"read from private field"),a?a.call(e):t.get(e)),nS=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},nI=(e,t,a,i)=>(nk(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),nR=(e,t,a)=>(nk(e,t,"access private method"),a);let nC="audio",nL="autohide",nD="breakpoints",nx="gesturesdisabled",nP="keyboardcontrol",nO="noautohide",nN="userinactive",nU="autohideovercontrols",nB=Object.values(rE);function nH(e,t){var a,i,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(a=e.getAttribute(nD))?a:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(i=n,r=t,Object.keys(i).filter(e=>r>=parseInt(i[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(r_.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(r_.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class nW extends r2.HTMLElement{constructor(){if(super(),nS(this,c1),nS(this,c3),nS(this,c5),nS(this,c8),nS(this,c7),nS(this,cG,void 0),nS(this,cY,0),nS(this,cQ,null),nS(this,cz,null),nS(this,cZ,void 0),this.breakpointsComputed=!1,nS(this,cX,e=>{let t=this.media;for(let a of e)if("childList"===a.type){for(let e of a.removedNodes){if("media"!=e.slot||a.target!=this)continue;let i=a.previousSibling&&a.previousSibling.previousElementSibling;if(i&&t){let t="media"!==i.slot;for(;null!==(i=i.previousSibling);)"media"==i.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of a.addedNodes)e===t&&this.handleMediaUpdated(t)}}),nS(this,cJ,!1),nS(this,c0,e=>{nM(this,cJ)||(setTimeout(()=>{nH(e.target,e.contentRect.width),nI(this,cJ,!1)},0),nI(this,cJ,!0))}),nS(this,ht,void 0),nS(this,ha,()=>{if(!nM(this,ht).assignedElements({flatten:!0}).length){nM(this,cQ)&&this.mediaUnsetCallback(nM(this,cQ));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}nI(this,cG,new MutationObserver(nM(this,cX)))}static get observedAttributes(){return[nL,nx].concat(nB).filter(e=>![rE.MEDIA_RENDITION_LIST,rE.MEDIA_AUDIO_TRACK_LIST,rE.MEDIA_CHAPTERS_CUES,rE.MEDIA_WIDTH,rE.MEDIA_HEIGHT,rE.MEDIA_ERROR,rE.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,a){e.toLowerCase()==nL&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(nI(this,cQ,e),e.localName.includes("-")&&await r2.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;nM(this,cG).observe(this,{childList:!0,subtree:!0}),r6(this,nM(this,c0));let t=null!=this.getAttribute(nC)?rq("audio player"):rq("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(nN,""),nH(this,this.getBoundingClientRect().width);let a=this.querySelector(":scope > slot[slot=media]");a&&(nI(this,ht,a),nM(this,ht).addEventListener("slotchange",nM(this,ha))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=r2.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;r7(this,nM(this,c0)),clearTimeout(nM(this,cz)),nM(this,cG).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(e=r2.window)||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),nM(this,ht)&&(nM(this,ht).removeEventListener("slotchange",nM(this,ha)),nI(this,ht,null)),nI(this,cJ,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){nI(this,cQ,null)}handleEvent(e){switch(e.type){case"pointerdown":nI(this,cY,e.timeStamp);break;case"pointermove":nR(this,c1,c2).call(this,e);break;case"pointerup":nR(this,c3,c4).call(this,e);break;case"mouseleave":nR(this,c5,c9).call(this);break;case"mouseup":this.removeAttribute(nP);break;case"keyup":nR(this,c7,he).call(this),this.setAttribute(nP,"")}}set autohide(e){let t=Number(e);nI(this,cZ,isNaN(t)?0:t)}get autohide(){return(void 0===nM(this,cZ)?2:nM(this,cZ)).toString()}get breakpoints(){return ng(this,nD)}set breakpoints(e){ny(this,nD,e)}get audio(){return nv(this,nC)}set audio(e){nb(this,nC,e)}get gesturesDisabled(){return nv(this,nx)}set gesturesDisabled(e){nb(this,nx,e)}get keyboardControl(){return nv(this,nP)}set keyboardControl(e){nb(this,nP,e)}get noAutohide(){return nv(this,nO)}set noAutohide(e){nb(this,nO,e)}get autohideOverControls(){return nv(this,nU)}set autohideOverControls(e){nb(this,nU,e)}get userInteractive(){return nv(this,nN)}set userInteractive(e){nb(this,nN,e)}}cG=new WeakMap,cY=new WeakMap,cQ=new WeakMap,cz=new WeakMap,cZ=new WeakMap,cX=new WeakMap,cJ=new WeakMap,c0=new WeakMap,c1=new WeakSet,c2=function(e){if("mouse"!==e.pointerType&&e.timeStamp-nM(this,cY)<250)return;nR(this,c8,c6).call(this),clearTimeout(nM(this,cz));let t=this.hasAttribute(nU);([this,this.media].includes(e.target)||t)&&nR(this,c7,he).call(this)},c3=new WeakSet,c4=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(nN);[this,this.media].includes(e.target)&&t?nR(this,c5,c9).call(this):nR(this,c7,he).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&nR(this,c7,he).call(this)},c5=new WeakSet,c9=function(){if(0>nM(this,cZ)||this.hasAttribute(nN))return;this.setAttribute(nN,"");let e=new r2.CustomEvent(r_.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},c8=new WeakSet,c6=function(){if(!this.hasAttribute(nN))return;this.removeAttribute(nN);let e=new r2.CustomEvent(r_.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},c7=new WeakSet,he=function(){nR(this,c8,c6).call(this),clearTimeout(nM(this,cz));let e=parseInt(this.autohide);e<0||nI(this,cz,setTimeout(()=>{nR(this,c5,c9).call(this)},1e3*e))},ht=new WeakMap,ha=new WeakMap,nW.shadowRootOptions={mode:"open"},nW.getTemplateHTML=function(e){return`
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
  `},r2.customElements.get("media-container")||r2.customElements.define("media-container",nW);try{var n$="u">typeof window?window:e.g;n$._sentryModuleMetadata=n$._sentryModuleMetadata||{},n$._sentryModuleMetadata[(new n$.Error).stack]=Object.assign({},n$._sentryModuleMetadata[(new n$.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var nq=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},nV=(e,t,a)=>(nq(e,t,"read from private field"),a?a.call(e):t.get(e)),nK=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},nF=(e,t,a,i)=>(nq(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);class nj{constructor(e,t,{defaultValue:a}={defaultValue:void 0}){nK(this,ho),nK(this,hi,void 0),nK(this,hr,void 0),nK(this,hn,void 0),nK(this,hs,new Set),nF(this,hi,e),nF(this,hr,t),nF(this,hn,new Set(a))}[Symbol.iterator](){return nV(this,ho,hl).values()}get length(){return nV(this,ho,hl).size}get value(){var e;return null!=(e=[...nV(this,ho,hl)].join(" "))?e:""}set value(e){var t;e!==this.value&&(nF(this,hs,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...nV(this,ho,hl)][e]}values(){return nV(this,ho,hl).values()}forEach(e,t){nV(this,ho,hl).forEach(e,t)}add(...e){var t,a;e.forEach(e=>nV(this,hs).add(e)),(""!==this.value||(null==(t=nV(this,hi))?void 0:t.hasAttribute(`${nV(this,hr)}`)))&&(null==(a=nV(this,hi))||a.setAttribute(`${nV(this,hr)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>nV(this,hs).delete(e)),null==(t=nV(this,hi))||t.setAttribute(`${nV(this,hr)}`,`${this.value}`)}contains(e){return nV(this,ho,hl).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}hi=new WeakMap,hr=new WeakMap,hn=new WeakMap,hs=new WeakMap,ho=new WeakSet,hl=function(){return nV(this,hs).size?nV(this,hs):nV(this,hn)};try{var nG="u">typeof window?window:e.g;nG._sentryModuleMetadata=nG._sentryModuleMetadata||{},nG._sentryModuleMetadata[(new nG.Error).stack]=Object.assign({},nG._sentryModuleMetadata[(new nG.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let nY=(e="")=>{let[t,a,i]=e.split(":"),r=i?decodeURIComponent(i):void 0;return{kind:"cc"===t?rA.CAPTIONS:rA.SUBTITLES,language:a,label:r}},nQ=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let a=nY(e);return{...t,...a}}),nz=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?nY(e):e):"string"==typeof e?nQ(e):[e]:[],nZ=({kind:e,label:t,language:a}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${a}:${encodeURIComponent(t)}`:a,nX=(e=[])=>Array.prototype.map.call(e,nZ).join(" "),nJ=e=>{let t=Object.entries(e).map(([e,t])=>a=>a[e]===t);return e=>t.every(t=>t(e))},n0=(e,t=[],a=[])=>{let i=nz(a).map(nJ);Array.from(t).filter(e=>i.some(t=>t(e))).forEach(t=>{t.mode=e})},n1=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let a="function"==typeof t?t:nJ(t);return Array.from(e.textTracks).filter(a)},n2=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(rE.MEDIA_SUBTITLES_SHOWING)};try{var n3="u">typeof window?window:e.g;n3._sentryModuleMetadata=n3._sentryModuleMetadata||{},n3._sentryModuleMetadata[(new n3.Error).stack]=Object.assign({},n3._sentryModuleMetadata[(new n3.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let n4="exitFullscreen"in r3?"exitFullscreen":"webkitExitFullscreen"in r3?"webkitExitFullscreen":"webkitCancelFullScreen"in r3?"webkitCancelFullScreen":void 0,n5="fullscreenElement"in r3?"fullscreenElement":"webkitFullscreenElement"in r3?"webkitFullscreenElement":void 0,n9="fullscreenEnabled"in r3?"fullscreenEnabled":"webkitFullscreenEnabled"in r3?"webkitFullscreenEnabled":void 0;try{var n8="u">typeof window?window:e.g;n8._sentryModuleMetadata=n8._sentryModuleMetadata||{},n8._sentryModuleMetadata[(new n8.Error).stack]=Object.assign({},n8._sentryModuleMetadata[(new n8.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let n6=()=>{var e;return a||(a=null==(e=null==r3?void 0:r3.createElement)?void 0:e.call(r3,"video"))},n7=async(e=n6())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let a=new AbortController,i=await Promise.race([se(e,a.signal),st(e,t)]);return a.abort(),i},se=(e,t)=>new Promise(a=>{e.addEventListener("volumechange",()=>a(!0),{signal:t})}),st=async(e,t)=>{for(let a=0;a<10;a++){if(e.volume===t)return!1;await rU(10)}return e.volume!==t},sa=/.*Version\/.*Safari\/.*/.test(r2.navigator.userAgent),si=(e=n6())=>(!r2.matchMedia("(display-mode: standalone)").matches||!sa)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),sr=(e=n6())=>(e=>{let{documentElement:t,media:a}=e;return!!(null==t?void 0:t[n9])||a&&"webkitSupportsFullscreen"in a})({documentElement:r3,media:e}),sn=sr(),ss=si(),so=!!r2.WebKitPlaybackTargetAvailabilityEvent,sl=!!r2.chrome;try{var sd="u">typeof window?window:e.g;sd._sentryModuleMetadata=sd._sentryModuleMetadata||{},sd._sentryModuleMetadata[(new sd.Error).stack]=Object.assign({},sd._sentryModuleMetadata[(new sd.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let su=e=>n1(e.media,e=>[rA.SUBTITLES,rA.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),sc=e=>n1(e.media,e=>e.mode===rk.SHOWING&&[rA.SUBTITLES,rA.CAPTIONS].includes(e.kind)),sh=(e,t)=>{let a=su(e),i=sc(e),r=!!i.length;if(a.length){if(!1===t||r&&!0!==t)n0(rk.DISABLED,a,i);else if(!0===t||!r&&!1!==t){let t=a[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=r2.localStorage.getItem("media-chrome-pref-subtitles-lang"),i=e?[e,...r2.navigator.languages]:r2.navigator.languages,r=a.filter(e=>i.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>i.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-i.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;n0(rk.DISABLED,a,i),n0(rk.SHOWING,a,[{language:n,label:s,kind:o}])}}},sm=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?sp(e,t):Object.entries(e).every(([e,a])=>e in t&&sm(a,t[e])))),sp=(e,t)=>{let a=Array.isArray(e),i=Array.isArray(t);return a===i&&(!a&&!i||e.length===t.length&&e.every((e,a)=>sm(e,t[a])))};try{var sv="u">typeof window?window:e.g;sv._sentryModuleMetadata=sv._sentryModuleMetadata||{},sv._sentryModuleMetadata[(new sv.Error).stack]=Object.assign({},sv._sentryModuleMetadata[(new sv.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let sb=Object.values(rI),sg=n7().then(e=>i=e),sy=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof r2.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let a=r2.customElements.get(t);a&&e instanceof a||(await r2.customElements.whenDefined(t),r2.customElements.upgrade(e))}))},sf=new r2.DOMParser,sE={mediaError:{get(e,t){let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==a?void 0:a.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var a;let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==(a=null==i?void 0:i.error)?void 0:a.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var a,i;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(i=null==(a=null==r?void 0:r.error)?void 0:a.message)?i:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:a}=e;return null!=(t=null==a?void 0:a.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:a}=e;return null!=(t=null==a?void 0:a.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:a}=e;return null==(t=null==a?void 0:a.paused)||t},set(e,t){var a;let{media:i}=t;i&&(e?i.pause():null==(a=i.play())||a.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:a}=e;return!!a&&(t?"playing"===t.type:!a.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:a}=e;return null!=(t=null==a?void 0:a.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:a}=e;return null!=(t=null==a?void 0:a.playbackRate)?t:1},set(e,t){let{media:a}=t;!a||Number.isFinite(+e)&&(a.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:a}=e;return null!=(t=null==a?void 0:a.muted)&&t},set(e,t){let{media:a,options:{noMutedPref:i}={}}=t;if(a){a.muted=e;try{let t=null!==r2.localStorage.getItem("media-chrome-pref-muted"),r=a.hasAttribute("muted");if(i){t&&r2.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;r2.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:a}}=t,{media:i}=t;if(i&&!i.muted&&!a)try{let a="true"===r2.localStorage.getItem("media-chrome-pref-muted");sE.mediaMuted.set(a,t),e(a)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:a}=t;a&&(a.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:a}=e;return null!=(t=null==a?void 0:a.volume)?t:1},set(e,t){let{media:a,options:{noVolumePref:i}={}}=t;if(a){try{null==e?r2.localStorage.removeItem("media-chrome-pref-volume"):a.hasAttribute("muted")||i||r2.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(a.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:a}}=t;if(!a)try{let{media:a}=t;if(!a)return;let i=r2.localStorage.getItem("media-chrome-pref-volume");if(null==i)return;sE.mediaVolume.set(+i,t),e(+i)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:a}=e;return null!=(t=null==a?void 0:a.currentTime)?t:0},set(e,t){let{media:a}=t;a&&rO(e)&&(a.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:a}={}}=e;return a&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?a:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:a}=e;if(!(null==(t=null==a?void 0:a.seekable)?void 0:t.length))return;let i=a.seekable.start(0),r=a.seekable.end(a.seekable.length-1);if(i||r)return[Number(i.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:a}=e,i=null!=(t=null==a?void 0:a.buffered)?t:[];return Array.from(i).map((e,t)=>[Number(i.start(t).toFixed(3)),Number(i.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:a}={}}=e,i=[rI.LIVE,rI.ON_DEMAND].includes(a)?a:void 0;if(!t)return i;let{streamType:r}=t;if(sb.includes(r))return r===rI.UNKNOWN?i:r;let n=t.duration;return n===1/0?rI.LIVE:Number.isFinite(n)?rI.ON_DEMAND:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:a}=t,i=sE.mediaStreamType.get(e);return(null==a||Number.isNaN(a))&&i===rI.LIVE?0:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:a=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(sE.mediaStreamType.get(e)!==rI.LIVE)return!1;let i=t.seekable;if(!i)return!0;if(!i.length)return!1;let r=i.end(i.length-1)-a;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>su(e).map(({kind:e,label:t,language:a})=>({kind:e,label:t,language:a})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>sc(e).map(({kind:e,label:t,language:a})=>({kind:e,label:t,language:a})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var a,i;let{media:r,options:n}=t;if(!r)return;let s=e=>{var a;n.defaultSubtitles&&(e&&![rA.CAPTIONS,rA.SUBTITLES].includes(null==(a=null==e?void 0:e.track)?void 0:a.kind)||sh(t,!0))};return r.addEventListener("loadstart",s),null==(a=r.textTracks)||a.addEventListener("addtrack",s),null==(i=r.textTracks)||i.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:a}=e;if(!a)return[];let[i]=n1(a,{kind:rA.CHAPTERS});return Array.from(null!=(t=null==i?void 0:i.cues)?t:[]).map(({text:e,startTime:t,endTime:a})=>({text:e&&sf.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:a}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var a;let{media:i}=t;if(!i)return;let r=i.querySelector('track[kind="chapters"][default][src]'),n=null==(a=i.shadowRoot)?void 0:a.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,a;let{media:i,documentElement:r}=e;if(!i||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===i)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=i.localName)?void 0:t.includes("-"))&&ns(i,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===i)return!0;e=null==(a=e.pictureInPictureElement)?void 0:a.shadowRoot}}return!1},set(e,t){let{media:a}=t;if(a)if(e){if(!r3.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!a.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};a.requestPictureInPicture().catch(t=>{if(11===t.code){if(!a.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===a.readyState&&"none"===a.preload){let t=()=>{a.removeEventListener("loadedmetadata",i),a.preload="none"},i=()=>{a.requestPictureInPicture().catch(e),t()};a.addEventListener("loadedmetadata",i),a.preload="metadata",setTimeout(()=>{0===a.readyState&&e(),t()},1e3)}else throw t}else throw t})}else r3.pictureInPictureElement&&r3.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:a}=e;return[...null!=(t=null==a?void 0:a.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,a,i;let{media:r}=e;return null==(i=null==(a=null==r?void 0:r.videoRenditions)?void 0:a[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:i.id},set(e,t){let{media:a}=t;if(!(null==a?void 0:a.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let i=Array.prototype.findIndex.call(a.videoRenditions,t=>t.id==e);a.videoRenditions.selectedIndex!=i&&(a.videoRenditions.selectedIndex=i)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:a}=e;return[...null!=(t=null==a?void 0:a.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,a;let{media:i}=e;return null==(a=[...null!=(t=null==i?void 0:i.audioTracks)?t:[]].find(e=>e.enabled))?void 0:a.id},set(e,t){let{media:a}=t;if(!(null==a?void 0:a.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of a.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:a,documentElement:i,fullscreenElement:r=a}=e;if(!a||!i)return!1;let n=(e=>{let{documentElement:t,media:a}=e,i=null==t?void 0:t[n5];return!i&&"webkitDisplayingFullscreen"in a&&"webkitPresentationMode"in a&&a.webkitDisplayingFullscreen&&a.webkitPresentationMode===rR.FULLSCREEN?a:i})(e);if(!n)return!1;if(n===r||n===a)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(n5 in e))return ns(n,r);for(;null==e?void 0:e[n5];){if(e[n5]===r)return!0;e=null==(t=e[n5])?void 0:t.shadowRoot}}return!1})(e),set(e,t,a){var i,r;e?((e=>{var t;let{media:a,fullscreenElement:i}=e;try{let e=i&&"requestFullscreen"in i?"requestFullscreen":i&&"webkitRequestFullScreen"in i?"webkitRequestFullScreen":void 0;if(e){let a=null==(t=i[e])?void 0:t.call(i);if(a instanceof Promise)return a.catch(()=>{})}else(null==a?void 0:a.webkitEnterFullscreen)?a.webkitEnterFullscreen():(null==a?void 0:a.requestFullscreen)&&a.requestFullscreen()}catch(e){console.error(e)}})(t),!a.detail||(null==(i=t.media)?void 0:i.inert)||null==(r=t.media)||r.focus()):(e=>{var t;let{documentElement:a}=e;if(n4){let e=null==(t=null==a?void 0:a[n4])?void 0:t.call(a);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:a}=e;return!!(null==a?void 0:a.remote)&&(null==(t=a.remote)?void 0:t.state)!=="disconnected"&&!!a.remote.state},set(e,t){var a,i;let{media:r}=t;if(r&&(!e||(null==(a=r.remote)?void 0:a.state)==="disconnected")&&(e||(null==(i=r.remote)?void 0:i.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:a}=t;if(a){if(!(a.webkitShowPlaybackTargetPicker&&r2.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");a.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!sn||!sr(t))return rS.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return ss&&si(t)?(null==t?void 0:t.disablePictureInPicture)?rS.UNAVAILABLE:void 0:rS.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===i||(null==t?void 0:t.volume)==void 0)return rS.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==i&&sg.then(t=>e(t?void 0:rS.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var a;let{media:i}=e;return sl&&(null==(a=null==i?void 0:i.remote)?void 0:a.state)?null!=t&&"available"!==t?rS.UNAVAILABLE:void 0:rS.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var a;let{media:i}=t;if(i)return i.disableRemotePlayback||i.hasAttribute("disableremoteplayback")||null==(a=null==i?void 0:i.remote)||a.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==i?void 0:i.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>so?(null==t?void 0:t.availability)==="not-available"?rS.UNAVAILABLE:void 0:rS.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var a;let{media:i}=t;if(i)return i.disableRemotePlayback||i.hasAttribute("disableremoteplayback")||null==(a=null==i?void 0:i.remote)||a.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==i?void 0:i.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:a}=e;return(null==a?void 0:a.videoRenditions)?(null==(t=a.videoRenditions)?void 0:t.length)?void 0:rS.UNAVAILABLE:rS.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,a;let{media:i}=e;return(null==i?void 0:i.audioTracks)?(null!=(a=null==(t=i.audioTracks)?void 0:t.length)?a:0)<=1?rS.UNAVAILABLE:void 0:rS.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}};try{var s_="u">typeof window?window:e.g;s_._sentryModuleMetadata=s_._sentryModuleMetadata||{},s_._sentryModuleMetadata[(new s_.Error).stack]=Object.assign({},s_._sentryModuleMetadata[(new s_.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let sw={[rb.MEDIA_PREVIEW_REQUEST](e,t,{detail:a}){var i,r,n;let s,o,{media:l}=t,d=null!=a?a:void 0;if(l&&null!=d){let[e]=n1(l,{kind:rA.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(i=null==e?void 0:e.cues)?i:[],(e,t,a)=>0===t?e.endTime>d:t===a.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,a=new URL(t.text,e);o=new URLSearchParams(a.hash).get("#xywh").split(",").map(e=>+e),s=a.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,a)=>t===a.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=a&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[rb.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[rb.MEDIA_PLAY_REQUEST](e,t){var a,i,r,n;let s=e.mediaStreamType.get(t)===rI.LIVE,o=!(null==(a=t.options)?void 0:a.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let a=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(a){let i=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(a-i,t)}}e.mediaPaused.set(!1,t)},[rb.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:a}){e.mediaPlaybackRate.set(a,t)},[rb.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[rb.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[rb.MEDIA_LOOP_REQUEST](e,t,{detail:a}){let i=!!a;return e.mediaLoop.set(i,t),{mediaLoop:i}},[rb.MEDIA_VOLUME_REQUEST](e,t,{detail:a}){a&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(a,t)},[rb.MEDIA_SEEK_REQUEST](e,t,{detail:a}){e.mediaCurrentTime.set(a,t)},[rb.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var a,i,r;let n=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(i=t.options)?void 0:i.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[rb.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:a}){var i;let{options:r}=t,n=su(t),s=nz(a),o=null==(i=s[0])?void 0:i.language;o&&!r.noSubtitlesLangPref&&r2.localStorage.setItem("media-chrome-pref-subtitles-lang",o),n0(rk.SHOWING,n,s)},[rb.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:a}){let i=su(t);n0(rk.DISABLED,i,null!=a?a:[])},[rb.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:a}){sh(t,a)},[rb.MEDIA_RENDITION_REQUEST](e,t,{detail:a}){e.mediaRenditionSelected.set(a,t)},[rb.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:a}){e.mediaAudioTrackEnabled.set(a,t)},[rb.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[rb.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[rb.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,a){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,a)},[rb.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[rb.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[rb.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[rb.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};try{var sT="u">typeof window?window:e.g;sT._sentryModuleMetadata=sT._sentryModuleMetadata||{},sT._sentryModuleMetadata[(new sT.Error).stack]=Object.assign({},sT._sentryModuleMetadata[(new sT.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}try{var sA="u">typeof window?window:e.g;sA._sentryModuleMetadata=sA._sentryModuleMetadata||{},sA._sentryModuleMetadata[(new sA.Error).stack]=Object.assign({},sA._sentryModuleMetadata[(new sA.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var sk=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},sM=(e,t,a)=>(sk(e,t,"read from private field"),a?a.call(e):t.get(e)),sS=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},sI=(e,t,a,i)=>(sk(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),sR=(e,t,a)=>(sk(e,t,"access private method"),a);let sC=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],sL="defaultsubtitles",sD="defaultstreamtype",sx="defaultduration",sP="fullscreenelement",sO="hotkeys",sN="keyboardbackwardseekoffset",sU="keyboardforwardseekoffset",sB="keyboarddownvolumestep",sH="keyboardupvolumestep",sW="keysused",s$="lang",sq="loop",sV="liveedgeoffset",sK="noautoseektolive",sF="nodefaultstore",sj="nohotkeys",sG="nomutedpref",sY="nosubtitleslangpref",sQ="novolumepref",sz="seektoliveoffset";class sZ extends nW{constructor(){super(),sS(this,hg),sS(this,hE),sS(this,hw),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,sS(this,hd,new nj(this,sO)),sS(this,hu,void 0),sS(this,hc,void 0),sS(this,hh,null),sS(this,hm,void 0),sS(this,hp,void 0),sS(this,hv,e=>{var t;null==(t=sM(this,hc))||t.dispatch(e)}),sS(this,hb,void 0),sS(this,hf,e=>{let{key:t,shiftKey:a}=e;a&&("/"===t||"?"===t)||sC.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",sM(this,hf))}),this.associateElement(this);let e={};sI(this,hm,t=>{Object.entries(t).forEach(([t,a])=>{if(t in e&&e[t]===a)return;this.propagateMediaState(t,a);let i=t.toLowerCase(),r=new r2.CustomEvent(rT[i],{composed:!0,detail:a});this.dispatchEvent(r)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(sj,sO,sD,sL,sx,sG,sQ,s$,sq,sV,sz,sK)}get mediaStore(){return sM(this,hc)}set mediaStore(e){var t,a;(sM(this,hc)&&(null==(t=sM(this,hp))||t.call(this),sI(this,hp,void 0)),sI(this,hc,e),sM(this,hc)||this.hasAttribute(sF))?sI(this,hp,null==(a=sM(this,hc))?void 0:a.subscribe(sM(this,hm))):sR(this,hg,hy).call(this)}get fullscreenElement(){var e;return null!=(e=sM(this,hu))?e:this}set fullscreenElement(e){var t;this.hasAttribute(sP)&&this.removeAttribute(sP),sI(this,hu,e),null==(t=sM(this,hc))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return nv(this,sL)}set defaultSubtitles(e){nb(this,sL,e)}get defaultStreamType(){return ng(this,sD)}set defaultStreamType(e){ny(this,sD,e)}get defaultDuration(){return nm(this,sx)}set defaultDuration(e){np(this,sx,e)}get noHotkeys(){return nv(this,sj)}set noHotkeys(e){nb(this,sj,e)}get keysUsed(){return ng(this,sW)}set keysUsed(e){ny(this,sW,e)}get liveEdgeOffset(){return nm(this,sV)}set liveEdgeOffset(e){np(this,sV,e)}get noAutoSeekToLive(){return nv(this,sK)}set noAutoSeekToLive(e){nb(this,sK,e)}get noVolumePref(){return nv(this,sQ)}set noVolumePref(e){nb(this,sQ,e)}get noMutedPref(){return nv(this,sG)}set noMutedPref(e){nb(this,sG,e)}get noSubtitlesLangPref(){return nv(this,sY)}set noSubtitlesLangPref(e){nb(this,sY,e)}get noDefaultStore(){return nv(this,sF)}set noDefaultStore(e){nb(this,sF,e)}attributeChangedCallback(e,t,a){var i,r,n,s,o,l,d,u,c,h,m,p;if(super.attributeChangedCallback(e,t,a),e===sj)a!==t&&""===a?(this.hasAttribute(sO)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==t&&null===a&&this.enableHotkeys();else if(e===sO)sM(this,hd).value=a;else if(e===sL&&a!==t)null==(i=sM(this,hc))||i.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(sL)}});else if(e===sD)null==(n=sM(this,hc))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(sD))?r:void 0}});else if(e===sV&&a!==t)null==(s=sM(this,hc))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(sV)?+this.getAttribute(sV):void 0,seekToLiveOffset:this.hasAttribute(sz)?+this.getAttribute(sz):this.hasAttribute(sV)?+this.getAttribute(sV):void 0}});else if(e===sz&&a!==t)null==(o=sM(this,hc))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(sz)?+this.getAttribute(sz):this.hasAttribute(sV)?+this.getAttribute(sV):void 0}});else if(e===sK)null==(l=sM(this,hc))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(sK)}});else if(e===sP){let e=a?null==(d=this.getRootNode())?void 0:d.getElementById(a):void 0;sI(this,hu,e),null==(u=sM(this,hc))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===s$&&a!==t?(r$=a,null==(c=sM(this,hc))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===sq&&a!==t?null==(h=sM(this,hc))||h.dispatch({type:rb.MEDIA_LOOP_REQUEST,detail:null!=a}):e===sQ&&a!==t?null==(m=sM(this,hc))||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(sQ)}}):e===sG&&a!==t&&(null==(p=sM(this,hc))||p.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(sG)}}))}connectedCallback(){var e,t,a;this.associateElement(this),sM(this,hc)||this.hasAttribute(sF)||sR(this,hg,hy).call(this),null==(e=sM(this,hc))||e.dispatch({type:"documentelementchangerequest",detail:r3}),null==(t=sM(this,hc))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),sM(this,hc)&&!sM(this,hp)&&sI(this,hp,null==(a=sM(this,hc))?void 0:a.subscribe(sM(this,hm))),void 0!==sM(this,hb)&&sM(this,hc)&&this.media&&setTimeout(()=>{var e,t,a;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(a=sM(this,hc))||a.dispatch({type:rb.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:sM(this,hb)}))},0),this.hasAttribute(sj)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,a,i,r,n;if(null==(e=super.disconnectedCallback)||e.call(this),this.disableHotkeys(),sM(this,hc)){let e=sM(this,hc).getState();sI(this,hb,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(a=sM(this,hc))||a.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(i=sM(this,hc))||i.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(r=sM(this,hc))||r.dispatch({type:rb.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}sM(this,hp)&&(null==(n=sM(this,hp))||n.call(this),sI(this,hp,void 0)),this.unassociateElement(this),sM(this,hh)&&(sM(this,hh).remove(),sI(this,hh,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=sM(this,hc))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=sM(this,hc))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){s9(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let a=s8(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(rb).forEach(t=>{e.addEventListener(t,sM(this,hv))}),t.set(e,a)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(rb).forEach(t=>{e.removeEventListener(t,sM(this,hv))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),sM(this,hc)&&Object.entries(sM(this,hc).getState()).forEach(([t,a])=>{s9([e],t,a)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,a=t.indexOf(e);a<0||t.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",sR(this,hE,h_))}disableHotkeys(){this.removeEventListener("keydown",sR(this,hE,h_)),this.removeEventListener("keyup",sM(this,hf))}get hotkeys(){return sM(this,hd)}set hotkeys(e){ny(this,sO,e)}keyboardShortcutHandler(e){var t,a,i,r,n,s,o,l,d;let u,c,h,m=e.target;if(!((null!=(i=null!=(a=null==(t=m.getAttribute(sW))?void 0:t.split(" "))?a:null==m?void 0:m.keysUsed)?i:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||sM(this,hd).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&sM(this,hd).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&sM(this,hd).contains("noshift+/")))switch(e.key){case" ":case"k":u=sM(this,hc).getState().mediaPaused?rb.MEDIA_PLAY_REQUEST:rb.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new r2.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u="off"===this.mediaStore.getState().mediaVolumeLevel?rb.MEDIA_UNMUTE_REQUEST:rb.MEDIA_MUTE_REQUEST,this.dispatchEvent(new r2.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?rb.MEDIA_EXIT_FULLSCREEN_REQUEST:rb.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new r2.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new r2.CustomEvent(rb.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(sN)?+this.getAttribute(sN):10;c=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),h=new r2.CustomEvent(rb.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowRight":case"l":{let e=this.hasAttribute(sU)?+this.getAttribute(sU):10;c=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),h=new r2.CustomEvent(rb.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowUp":{let e=this.hasAttribute(sH)?+this.getAttribute(sH):.025;c=Math.min((null!=(s=this.mediaStore.getState().mediaVolume)?s:1)+e,1),h=new r2.CustomEvent(rb.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowDown":{let e=this.hasAttribute(sB)?+this.getAttribute(sB):.025;c=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),h=new r2.CustomEvent(rb.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"<":c=Math.max((null!=(l=this.mediaStore.getState().mediaPlaybackRate)?l:1)-.25,.25).toFixed(2),h=new r2.CustomEvent(rb.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case">":c=Math.min((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)+.25,2).toFixed(2),h=new r2.CustomEvent(rb.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case"/":case"?":e.shiftKey&&sR(this,hw,hT).call(this);break;case"p":u=this.mediaStore.getState().mediaIsPip?rb.MEDIA_EXIT_PIP_REQUEST:rb.MEDIA_ENTER_PIP_REQUEST,h=new r2.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(h)}}}hd=new WeakMap,hu=new WeakMap,hc=new WeakMap,hh=new WeakMap,hm=new WeakMap,hp=new WeakMap,hv=new WeakMap,hb=new WeakMap,hg=new WeakSet,hy=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:a,stateMediator:i=sE,requestMap:r=sw,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||sm(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(i).reduce((e,[t,{get:a}])=>(e[t]=a(d),e),{}))},m={},p=async(e,t)=>{var a,r,n,u,p,v,b,g,y,f,E,w,T,A,k,M;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await sy(...Object.values(e));let I=l.length>0&&0===t&&s,R=d.media!==o.media,C=(null==(a=d.media)?void 0:a.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),L=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),D=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),x=(null==(b=d.media)?void 0:b.remote)!==(null==(g=o.media)?void 0:g.remote),P=d.documentElement!==o.documentElement,O=!!d.media&&(R||I),N=!!(null==(y=d.media)?void 0:y.textTracks)&&(C||I),U=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(L||I),B=!!(null==(E=d.media)?void 0:E.audioTracks)&&(D||I),H=!!(null==(w=d.media)?void 0:w.remote)&&(x||I),W=!!d.documentElement&&(P||I),$=O||N||U||B||H||W,q=0===l.length&&1===t&&s,V=!!o.media&&(R||q),K=!!(null==(T=o.media)?void 0:T.textTracks)&&(C||q),F=!!(null==(A=o.media)?void 0:A.videoRenditions)&&(L||q),j=!!(null==(k=o.media)?void 0:k.audioTracks)&&(D||q),G=!!(null==(M=o.media)?void 0:M.remote)&&(x||q),Y=!!o.documentElement&&(P||q),Q=V||K||F||j||G||Y;if(!($||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(i).forEach(([e,{get:t,mediaEvents:a=[],textTracksEvents:i=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=a=>{c({[e]:t(d,a)})};h=m[e].mediaEvents,a.forEach(t=>{h&&O&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),V&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,i.forEach(t=>{var a,i;h&&N&&(null==(a=d.media.textTracks)||a.removeEventListener(t,h),m[e].textTracksEvents=void 0),K&&(null==(i=o.media.textTracks)||i.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var a,i;h&&U&&(null==(a=d.media.videoRenditions)||a.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),F&&(null==(i=o.media.videoRenditions)||i.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var a,i;h&&B&&(null==(a=d.media.audioTracks)||a.removeEventListener(t,h),m[e].audioTracksEvents=void 0),j&&(null==(i=o.media.audioTracks)||i.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var a,i;h&&H&&(null==(a=d.media.remote)||a.removeEventListener(t,h),m[e].remoteEvents=void 0),G&&(null==(i=o.media.remote)||i.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&W&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),Y&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;if(v&&$&&(Array.isArray(v)?v:[v]).forEach(e=>{"function"==typeof e&&e()}),Q){let t=u.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else $&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:a,options:n}),{dispatch(e){let{type:t,detail:a}=e;r[t]&&null==u.mediaErrorCode?c(r[t](i,d,e)):"mediaelementchangerequest"===t?p({media:a}):"fullscreenelementchangerequest"===t?p({fullscreenElement:a}):"documentelementchangerequest"===t?p({documentElement:a}):"optionschangerequest"===t&&(Object.entries(null!=a?a:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(sL),defaultDuration:this.hasAttribute(sx)?+this.getAttribute(sx):void 0,defaultStreamType:null!=(e=this.getAttribute(sD))?e:void 0,liveEdgeOffset:this.hasAttribute(sV)?+this.getAttribute(sV):void 0,seekToLiveOffset:this.hasAttribute(sz)?+this.getAttribute(sz):this.hasAttribute(sV)?+this.getAttribute(sV):void 0,noAutoSeekToLive:this.hasAttribute(sK),noVolumePref:this.hasAttribute(sQ),noMutedPref:this.hasAttribute(sG),noSubtitlesLangPref:this.hasAttribute(sY)}})},hf=new WeakMap,hE=new WeakSet,h_=function(e){var t;let{metaKey:a,altKey:i,key:r,shiftKey:n}=e,s=n&&("/"===r||"?"===r);if(s&&(null==(t=sM(this,hh))?void 0:t.open)||a||i||!s&&!sC.includes(r))return void this.removeEventListener("keyup",sM(this,hf));let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||sM(this,hd).contains(`no${r.toLowerCase()}`)||" "===r&&sM(this,hd).contains("nospace")||l||e.preventDefault(),this.addEventListener("keyup",sM(this,hf),{once:!0})},hw=new WeakSet,hT=function(){sM(this,hh)||(sI(this,hh,r3.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(sM(this,hh))),sM(this,hh).open=!0};let sX=Object.values(rE),sJ=Object.values(ry),s0=e=>{var t,a,i,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(r2.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(i=null==(a=null==e?void 0:e.getAttribute)?void 0:a.call(e,rg.MEDIA_CHROME_ATTRIBUTES))?void 0:i.split)?void 0:r.call(i,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>sX.includes(e)):[]},s1=e=>{var t,a;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&r2.customElements.get(null==(a=e.nodeName)?void 0:a.toLowerCase())&&!(e instanceof r2.customElements.get(e.nodeName.toLowerCase()))&&r2.customElements.upgrade(e),sJ.some(t=>t in e)||!!s0(e).length},s2=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},s3={[rE.MEDIA_SUBTITLES_LIST]:nX,[rE.MEDIA_SUBTITLES_SHOWING]:nX,[rE.MEDIA_SEEKABLE]:s2,[rE.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(s2).join(" "),[rE.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[rE.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(rL).join(" ")},[rE.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(rx).join(" ")}},s4=async(e,t,a)=>{var i,r;if(e.isConnected||await rU(0),"boolean"==typeof a||null==a)return nb(e,t,a);if("number"==typeof a)return np(e,t,a);if("string"==typeof a)return ny(e,t,a);if(Array.isArray(a)&&!a.length)return e.removeAttribute(t);let n=null!=(r=null==(i=s3[t])?void 0:i.call(s3,a))?r:a;return e.setAttribute(t,n)},s5=(e,t)=>{var a;if(null==(a=e.closest)?void 0:a.call(e,'*[slot="media"]'))return;let i=(e,t)=>{var a,i;s1(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(i=null==(a=null==e?void 0:e.shadowRoot)?void 0:a.children)?i:[]].forEach(e=>s5(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!s1(e)?r2.customElements.whenDefined(r).then(()=>{i(e,t)}):i(e,t)},s9=(e,t,a)=>{e.forEach(e=>{if(t in e){e[t]=a;return}let i=s0(e),r=t.toLowerCase();i.includes(r)&&s4(e,r,a)})},s8=(e,t,a)=>{s5(e,t);let i=e=>{var a;t(null!=(a=null==e?void 0:e.composedPath()[0])?a:e.target)},r=e=>{var t;a(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(rb.REGISTER_MEDIA_STATE_RECEIVER,i),e.addEventListener(rb.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let i=e.target;"media"!==i.name&&(n.forEach(e=>s5(e,a)),(n=[...i.assignedElements({flatten:!0})]).forEach(e=>s5(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:i=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(i,e=>s5(e,t)),Array.prototype.forEach.call(r,e=>s5(e,a))):"attributes"===n&&o===rg.MEDIA_CHROME_ATTRIBUTES&&(s1(s)?t(s):a(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{s5(e,a),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(rb.REGISTER_MEDIA_STATE_RECEIVER,i),e.removeEventListener(rb.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};r2.customElements.get("media-controller")||r2.customElements.define("media-controller",sZ);try{var s6="u">typeof window?window:e.g;s6._sentryModuleMetadata=s6._sentryModuleMetadata||{},s6._sentryModuleMetadata[(new s6.Error).stack]=Object.assign({},s6._sentryModuleMetadata[(new s6.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let s7="placement",oe="bounds";class ot extends r2.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!nu(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let a=getComputedStyle(this),i=null!=(e=no(this,"#"+this.bounds))?e:na(this);if(!i)return;let{x:r,width:n}=i.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=a.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=a.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;h<0?this.style.setProperty("--media-tooltip-offset-x",`${h}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[s7,oe]}get placement(){return ng(this,s7)}set placement(e){ny(this,s7,e)}get bounds(){return ng(this,oe)}set bounds(e){ny(this,oe,e)}}ot.shadowRootOptions={mode:"open"},ot.getTemplateHTML=function(e){return`
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
  `},r2.customElements.get("media-tooltip")||r2.customElements.define("media-tooltip",ot);try{var oa="u">typeof window?window:e.g;oa._sentryModuleMetadata=oa._sentryModuleMetadata||{},oa._sentryModuleMetadata[(new oa.Error).stack]=Object.assign({},oa._sentryModuleMetadata[(new oa.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var oi=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},or=(e,t,a)=>(oi(e,t,"read from private field"),a?a.call(e):t.get(e)),on=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},os=(e,t,a,i)=>(oi(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);let oo="tooltipplacement",ol="disabled",od="notooltip";class ou extends r2.HTMLElement{constructor(){if(super(),on(this,hR),on(this,hA,void 0),this.preventClick=!1,this.tooltipEl=null,on(this,hk,e=>{this.preventClick||this.handleClick(e),setTimeout(or(this,hM),0)}),on(this,hM,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),on(this,hS,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",or(this,hS))}),on(this,hI,e=>{let{metaKey:t,altKey:a,key:i}=e;t||a||!this.keysUsed.includes(i)?this.removeEventListener("keyup",or(this,hS)):this.addEventListener("keyup",or(this,hS),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",oo,rg.MEDIA_CONTROLLER,rE.MEDIA_LANG]}enable(){this.addEventListener("click",or(this,hk)),this.addEventListener("keydown",or(this,hI)),this.tabIndex=0}disable(){this.removeEventListener("click",or(this,hk)),this.removeEventListener("keydown",or(this,hI)),this.removeEventListener("keyup",or(this,hS)),this.tabIndex=-1}attributeChangedCallback(e,t,a){var i,r,n,s,o;e===rg.MEDIA_CONTROLLER?(t&&(null==(r=null==(i=or(this,hA))?void 0:i.unassociateElement)||r.call(i,this),os(this,hA,null)),a&&this.isConnected&&(os(this,hA,null==(n=this.getRootNode())?void 0:n.getElementById(a)),null==(o=null==(s=or(this,hA))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&a!==t?null==a?this.enable():this.disable():e===oo&&this.tooltipEl&&a!==t?this.tooltipEl.placement=a:e===rE.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),or(this,hM).call(this)}connectedCallback(){var e,t,a;let{style:i}=nc(this.shadowRoot,":host");i.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(rg.MEDIA_CONTROLLER);r&&(os(this,hA,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(a=null==(t=or(this,hA))?void 0:t.associateElement)||a.call(t,this)),r2.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=hR,t=hC,oi(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=or(this,hA))?void 0:e.unassociateElement)||t.call(e,this),os(this,hA,null),this.removeEventListener("mouseenter",or(this,hM)),this.removeEventListener("focus",or(this,hM)),this.removeEventListener("click",or(this,hk))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return ng(this,oo)}set tooltipPlacement(e){ny(this,oo,e)}get mediaController(){return ng(this,rg.MEDIA_CONTROLLER)}set mediaController(e){ny(this,rg.MEDIA_CONTROLLER,e)}get disabled(){return nv(this,ol)}set disabled(e){nb(this,ol,e)}get noTooltip(){return nv(this,od)}set noTooltip(e){nb(this,od,e)}handleClick(e){}}hA=new WeakMap,hk=new WeakMap,hM=new WeakMap,hS=new WeakMap,hI=new WeakMap,hR=new WeakSet,hC=function(){this.addEventListener("mouseenter",or(this,hM)),this.addEventListener("focus",or(this,hM)),this.addEventListener("click",or(this,hk));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},ou.shadowRootOptions={mode:"open"},ou.getTemplateHTML=function(e,t={}){return`
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

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${ot.shadowRootOptions.mode}">
          ${ot.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},ou.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},ou.getTooltipContentHTML=function(){return""},r2.customElements.get("media-chrome-button")||r2.customElements.define("media-chrome-button",ou);try{var oc="u">typeof window?window:e.g;oc._sentryModuleMetadata=oc._sentryModuleMetadata||{},oc._sentryModuleMetadata[(new oc.Error).stack]=Object.assign({},oc._sentryModuleMetadata[(new oc.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let oh=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,om=e=>{let t=e.mediaIsAirplaying?rq("stop airplay"):rq("start airplay");e.setAttribute("aria-label",t)};class op extends ou{static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_IS_AIRPLAYING,rE.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),om(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===rE.MEDIA_IS_AIRPLAYING&&om(this)}get mediaIsAirplaying(){return nv(this,rE.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){nb(this,rE.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return ng(this,rE.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){ny(this,rE.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new r2.CustomEvent(rb.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}op.getSlotTemplateHTML=function(e){return`
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
  `},op.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rq("start airplay")}</slot>
    <slot name="tooltip-exit">${rq("stop airplay")}</slot>
  `},r2.customElements.get("media-airplay-button")||r2.customElements.define("media-airplay-button",op);try{var ov="u">typeof window?window:e.g;ov._sentryModuleMetadata=ov._sentryModuleMetadata||{},ov._sentryModuleMetadata[(new ov.Error).stack]=Object.assign({},ov._sentryModuleMetadata[(new ov.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let ob=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,og=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,oy=e=>{e.setAttribute("aria-checked",n2(e).toString())};class of extends ou{static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_SUBTITLES_LIST,rE.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",rq("closed captions")),oy(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===rE.MEDIA_SUBTITLES_SHOWING&&oy(this)}get mediaSubtitlesList(){return oE(this,rE.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){o_(this,rE.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return oE(this,rE.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){o_(this,rE.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new r2.CustomEvent(rb.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}of.getSlotTemplateHTML=function(e){return`
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
  `},of.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${rq("Enable captions")}</slot>
    <slot name="tooltip-disable">${rq("Disable captions")}</slot>
  `};let oE=(e,t)=>{let a=e.getAttribute(t);return a?nQ(a):[]},o_=(e,t,a)=>{if(!(null==a?void 0:a.length))return void e.removeAttribute(t);let i=nX(a);e.getAttribute(t)!==i&&e.setAttribute(t,i)};r2.customElements.get("media-captions-button")||r2.customElements.define("media-captions-button",of);try{var ow="u">typeof window?window:e.g;ow._sentryModuleMetadata=ow._sentryModuleMetadata||{},ow._sentryModuleMetadata[(new ow.Error).stack]=Object.assign({},ow._sentryModuleMetadata[(new ow.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let oT=e=>{let t=e.mediaIsCasting?rq("stop casting"):rq("start casting");e.setAttribute("aria-label",t)};class oA extends ou{static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_IS_CASTING,rE.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),oT(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===rE.MEDIA_IS_CASTING&&oT(this)}get mediaIsCasting(){return nv(this,rE.MEDIA_IS_CASTING)}set mediaIsCasting(e){nb(this,rE.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return ng(this,rE.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){ny(this,rE.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?rb.MEDIA_EXIT_CAST_REQUEST:rb.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new r2.CustomEvent(e,{composed:!0,bubbles:!0}))}}oA.getSlotTemplateHTML=function(e){return`
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
  `},oA.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rq("Start casting")}</slot>
    <slot name="tooltip-exit">${rq("Stop casting")}</slot>
  `},r2.customElements.get("media-cast-button")||r2.customElements.define("media-cast-button",oA);try{var ok="u">typeof window?window:e.g;ok._sentryModuleMetadata=ok._sentryModuleMetadata||{},ok._sentryModuleMetadata[(new ok.Error).stack]=Object.assign({},ok._sentryModuleMetadata[(new ok.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var oM=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},oS=(e,t,a)=>(oM(e,t,"read from private field"),a?a.call(e):t.get(e)),oI=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},oR=(e,t,a,i)=>(oM(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),oC=(e,t,a)=>(oM(e,t,"access private method"),a);let oL="open";class oD extends r2.HTMLElement{constructor(){super(),oI(this,hP),oI(this,hN),oI(this,hB),oI(this,hW),oI(this,hq),oI(this,hK),oI(this,hL,!1),oI(this,hD,null),oI(this,hx,null)}static get observedAttributes(){return[oL,"anchor"]}get open(){return nv(this,oL)}set open(e){nb(this,oL,e)}handleEvent(e){switch(e.type){case"invoke":oC(this,hW,h$).call(this,e);break;case"focusout":oC(this,hq,hV).call(this,e);break;case"keydown":oC(this,hK,hF).call(this,e)}}connectedCallback(){oC(this,hP,hO).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,a){oC(this,hP,hO).call(this),e===oL&&a!==t&&(this.open?oC(this,hN,hU).call(this):oC(this,hB,hH).call(this))}focus(){oR(this,hD,nl());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==a||a.focus()}get keysUsed(){return["Escape","Tab"]}}hL=new WeakMap,hD=new WeakMap,hx=new WeakMap,hP=new WeakSet,hO=function(){if(!oS(this,hL)&&(oR(this,hL,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=nc(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},hN=new WeakSet,hU=function(){var e;null==(e=oS(this,hx))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},hB=new WeakSet,hH=function(){var e;null==(e=oS(this,hx))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},hW=new WeakSet,h$=function(e){oR(this,hx,e.relatedTarget),ns(this,e.relatedTarget)||(this.open=!this.open)},hq=new WeakSet,hV=function(e){var t;!ns(this,e.relatedTarget)&&(null==(t=oS(this,hD))||t.focus(),oS(this,hx)&&oS(this,hx)!==e.relatedTarget&&this.open&&(this.open=!1))},hK=new WeakSet,hF=function(e){var t,a,i,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(a=null==(t=this.previousElementSibling)?void 0:t.focus)||a.call(t):null==(r=null==(i=this.nextElementSibling)?void 0:i.focus)||r.call(i),this.blur()):"Escape"===s&&(null==(n=oS(this,hD))||n.focus(),this.open=!1))},oD.shadowRootOptions={mode:"open"},oD.getTemplateHTML=function(e){return`
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
    ${this.getSlotTemplateHTML(e)}
  `},oD.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},r2.customElements.get("media-chrome-dialog")||r2.customElements.define("media-chrome-dialog",oD);try{var ox="u">typeof window?window:e.g;ox._sentryModuleMetadata=ox._sentryModuleMetadata||{},ox._sentryModuleMetadata[(new ox.Error).stack]=Object.assign({},ox._sentryModuleMetadata[(new ox.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var oP=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},oO=(e,t,a)=>(oP(e,t,"read from private field"),a?a.call(e):t.get(e)),oN=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},oU=(e,t,a,i)=>(oP(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),oB=(e,t,a)=>(oP(e,t,"access private method"),a);class oH extends r2.HTMLElement{constructor(){if(super(),oN(this,h1),oN(this,h3),oN(this,h5),oN(this,h8),oN(this,h7),oN(this,mt),oN(this,mi),oN(this,mn),oN(this,hj,void 0),oN(this,hG,void 0),oN(this,hY,void 0),oN(this,hQ,void 0),oN(this,hz,{}),oN(this,hZ,[]),oN(this,hX,()=>{if(this.range.matches(":focus-visible")){let{style:e}=nc(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),oN(this,hJ,()=>{let{style:e}=nc(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),oN(this,h0,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),oU(this,hY,this.shadowRoot.querySelector("#startpoint")),oU(this,hQ,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",rg.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,a){var i,r,n,s,o;e===rg.MEDIA_CONTROLLER?(t&&(null==(r=null==(i=oO(this,hj))?void 0:i.unassociateElement)||r.call(i,this),oU(this,hj,null)),a&&this.isConnected&&(oU(this,hj,null==(n=this.getRootNode())?void 0:n.getElementById(a)),null==(o=null==(s=oO(this,hj))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==a)&&(null==a?(this.range.removeAttribute(e),oB(this,h3,h4).call(this)):(this.range.setAttribute(e,a),oB(this,h5,h9).call(this)))}connectedCallback(){var e,t,a;let{style:i}=nc(this.shadowRoot,":host");i.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),oO(this,hz).pointer=nc(this.shadowRoot,"#pointer"),oO(this,hz).progress=nc(this.shadowRoot,"#progress"),oO(this,hz).thumb=nc(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),oO(this,hz).activeSegment=nc(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(rg.MEDIA_CONTROLLER);r&&(oU(this,hj,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(a=null==(t=oO(this,hj))?void 0:t.associateElement)||a.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",oO(this,hX)),this.shadowRoot.addEventListener("focusout",oO(this,hJ)),oB(this,h3,h4).call(this),r6(this.container,oO(this,h0))}disconnectedCallback(){var e,t;oB(this,h5,h9).call(this),null==(t=null==(e=oO(this,hj))?void 0:e.unassociateElement)||t.call(e,this),oU(this,hj,null),this.shadowRoot.removeEventListener("focusin",oO(this,hX)),this.shadowRoot.removeEventListener("focusout",oO(this,hJ)),r7(this.container,oO(this,h0))}updatePointerBar(e){var t;null==(t=oO(this,hz).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let a=100*this.range.valueAsNumber;null==(e=oO(this,hz).progress)||e.style.setProperty("width",`${a}%`),null==(t=oO(this,hz).thumb)||t.style.setProperty("left",`${a}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let a=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];oU(this,hZ,[...a]);let i=a.pop();for(let[e,r]of a.entries()){let[n,s]=[0===e,e===a.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?i:a[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=r3.createElementNS("http://www.w3.org/2000/svg","rect"),c=nh(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,a,i,r;let n,s,o;return t=e.clientX,a=e.clientY,i=oO(this,hY).getBoundingClientRect(),n=(r=oO(this,hQ).getBoundingClientRect()).x-i.x,0==(o=n*n+(s=r.y-i.y)*s)?0:Math.max(0,Math.min(1,((t-i.x)*n+(a-i.y)*s)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":oB(this,mn,ms).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":oB(this,h7,me).call(this,e);break;case"pointerdown":oB(this,h8,h6).call(this,e);break;case"pointerup":oB(this,mt,ma).call(this);break;case"pointerleave":oB(this,mi,mr).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}hj=new WeakMap,hG=new WeakMap,hY=new WeakMap,hQ=new WeakMap,hz=new WeakMap,hZ=new WeakMap,hX=new WeakMap,hJ=new WeakMap,h0=new WeakMap,h1=new WeakSet,h2=function(e){let t=oO(this,hz).activeSegment;if(!t)return;let a=this.getPointerRatio(e),i=oO(this,hZ).findIndex((e,t,i)=>{let r=i[t+1];return null!=r&&a>=e&&a<=r}),r=`#segments-clipping rect:nth-child(${i+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},h3=new WeakSet,h4=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},h5=new WeakSet,h9=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(e=r2.window)||e.removeEventListener("pointerup",this),null==(t=r2.window)||t.removeEventListener("pointermove",this)},h8=new WeakSet,h6=function(e){var t;oU(this,hG,e.composedPath().includes(this.range)),null==(t=r2.window)||t.addEventListener("pointerup",this,{once:!0})},h7=new WeakSet,me=function(e){var t;"mouse"!==e.pointerType&&oB(this,h8,h6).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),null==(t=r2.window)||t.addEventListener("pointermove",this)},mt=new WeakSet,ma=function(){var e;null==(e=r2.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},mi=new WeakSet,mr=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=r2.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=oO(this,hz).activeSegment)||t.style.removeProperty("transform")},mn=new WeakSet,ms=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),oB(this,h1,h2).call(this,e),this.dragging&&("mouse"!==e.pointerType||!oO(this,hG))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},oH.shadowRootOptions={mode:"open"},oH.getTemplateHTML=function(e){return`
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

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},oH.getContainerTemplateHTML=function(e){return""},r2.customElements.get("media-chrome-range")||r2.customElements.define("media-chrome-range",oH);try{var oW="u">typeof window?window:e.g;oW._sentryModuleMetadata=oW._sentryModuleMetadata||{},oW._sentryModuleMetadata[(new oW.Error).stack]=Object.assign({},oW._sentryModuleMetadata[(new oW.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var o$=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},oq=(e,t,a)=>(o$(e,t,"read from private field"),a?a.call(e):t.get(e)),oV=(e,t,a,i)=>(o$(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);class oK extends r2.HTMLElement{constructor(){if(super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,mo,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rg.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,a){var i,r,n,s,o;e===rg.MEDIA_CONTROLLER&&(t&&(null==(r=null==(i=oq(this,mo))?void 0:i.unassociateElement)||r.call(i,this),oV(this,mo,null)),a&&this.isConnected&&(oV(this,mo,null==(n=this.getRootNode())?void 0:n.getElementById(a)),null==(o=null==(s=oq(this,mo))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,a;let i=this.getAttribute(rg.MEDIA_CONTROLLER);i&&(oV(this,mo,null==(e=this.getRootNode())?void 0:e.getElementById(i)),null==(a=null==(t=oq(this,mo))?void 0:t.associateElement)||a.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=oq(this,mo))?void 0:e.unassociateElement)||t.call(e,this),oV(this,mo,null)}}mo=new WeakMap,oK.shadowRootOptions={mode:"open"},oK.getTemplateHTML=function(e){return`
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
  `},r2.customElements.get("media-control-bar")||r2.customElements.define("media-control-bar",oK);try{var oF="u">typeof window?window:e.g;oF._sentryModuleMetadata=oF._sentryModuleMetadata||{},oF._sentryModuleMetadata[(new oF.Error).stack]=Object.assign({},oF._sentryModuleMetadata[(new oF.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var oj=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},oG=(e,t,a)=>(oj(e,t,"read from private field"),a?a.call(e):t.get(e)),oY=(e,t,a,i)=>(oj(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);class oQ extends r2.HTMLElement{constructor(){if(super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,ml,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rg.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,a){var i,r,n,s,o;e===rg.MEDIA_CONTROLLER&&(t&&(null==(r=null==(i=oG(this,ml))?void 0:i.unassociateElement)||r.call(i,this),oY(this,ml,null)),a&&this.isConnected&&(oY(this,ml,null==(n=this.getRootNode())?void 0:n.getElementById(a)),null==(o=null==(s=oG(this,ml))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,a;let{style:i}=nc(this.shadowRoot,":host");i.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(rg.MEDIA_CONTROLLER);r&&(oY(this,ml,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(a=null==(t=oG(this,ml))?void 0:t.associateElement)||a.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=oG(this,ml))?void 0:e.unassociateElement)||t.call(e,this),oY(this,ml,null)}}ml=new WeakMap,oQ.shadowRootOptions={mode:"open"},oQ.getTemplateHTML=function(e,t={}){return`
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

    ${this.getSlotTemplateHTML(e,t)}
  `},oQ.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},r2.customElements.get("media-text-display")||r2.customElements.define("media-text-display",oQ);try{var oz="u">typeof window?window:e.g;oz._sentryModuleMetadata=oz._sentryModuleMetadata||{},oz._sentryModuleMetadata[(new oz.Error).stack]=Object.assign({},oz._sentryModuleMetadata[(new oz.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var oZ=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},oX=(e,t,a)=>(oZ(e,t,"read from private field"),a?a.call(e):t.get(e));class oJ extends oQ{constructor(){var e;super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,md,void 0),((e,t,a)=>(oZ(e,t,"write to private field"),t.set(e,a)))(this,md,this.shadowRoot.querySelector("slot")),oX(this,md).textContent=rj(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_DURATION]}attributeChangedCallback(e,t,a){e===rE.MEDIA_DURATION&&(oX(this,md).textContent=rj(+a)),super.attributeChangedCallback(e,t,a)}get mediaDuration(){return nm(this,rE.MEDIA_DURATION)}set mediaDuration(e){np(this,rE.MEDIA_DURATION,e)}}md=new WeakMap,oJ.getSlotTemplateHTML=function(e,t){return`
    <slot>${rj(t.mediaDuration)}</slot>
  `},r2.customElements.get("media-duration-display")||r2.customElements.define("media-duration-display",oJ);try{var o0="u">typeof window?window:e.g;o0._sentryModuleMetadata=o0._sentryModuleMetadata||{},o0._sentryModuleMetadata[(new o0.Error).stack]=Object.assign({},o0._sentryModuleMetadata[(new o0.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let o1={2:rq("Network Error"),3:rq("Decode Error"),4:rq("Source Not Supported"),5:rq("Encryption Error")},o2={2:rq("A network error caused the media download to fail."),3:rq("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:rq("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:rq("The media is encrypted and there are no keys to decrypt it.")},o3=e=>{var t,a;return 1===e.code?null:{title:null!=(t=o1[e.code])?t:`Error ${e.code}`,message:null!=(a=o2[e.code])?a:e.message}};try{var o4="u">typeof window?window:e.g;o4._sentryModuleMetadata=o4._sentryModuleMetadata||{},o4._sentryModuleMetadata[(new o4.Error).stack]=Object.assign({},o4._sentryModuleMetadata[(new o4.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var o5=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)};function o9(e){var t;let{title:a,message:i}=null!=(t=o3(e))?t:{},r="";return a&&(r+=`<slot name="error-${e.code}-title"><h3>${a}</h3></slot>`),i&&(r+=`<slot name="error-${e.code}-message"><p>${i}</p></slot>`),r}let o8=[rE.MEDIA_ERROR_CODE,rE.MEDIA_ERROR_MESSAGE];class o6 extends oD{constructor(){super(...arguments),((e,t)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,null)})(this,mu)}static get observedAttributes(){return[...super.observedAttributes,...o8]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,a){var i;if(super.attributeChangedCallback(e,t,a),!o8.includes(e))return;let r=null!=(i=this.mediaError)?i:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=r.code&&null!==o3(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){let{title:e}=o3(r);e&&this.setAttribute("aria-label",e)}}get mediaError(){var e;return o5(this,e=mu,"read from private field"),e.get(this)}set mediaError(e){var t;o5(this,t=mu,"write to private field"),t.set(this,e)}get mediaErrorCode(){return nm(this,"mediaerrorcode")}set mediaErrorCode(e){np(this,"mediaerrorcode",e)}get mediaErrorMessage(){return ng(this,"mediaerrormessage")}set mediaErrorMessage(e){ny(this,"mediaerrormessage",e)}}mu=new WeakMap,o6.getSlotTemplateHTML=function(e){return`
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
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${o9({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},o6.formatErrorMessage=o9,r2.customElements.get("media-error-dialog")||r2.customElements.define("media-error-dialog",o6);try{var o7="u">typeof window?window:e.g;o7._sentryModuleMetadata=o7._sentryModuleMetadata||{},o7._sentryModuleMetadata[(new o7.Error).stack]=Object.assign({},o7._sentryModuleMetadata[(new o7.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var le=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return a?a.call(e):t.get(e)},lt=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)};class la extends oD{constructor(){super(...arguments),lt(this,mc,e=>{var t;if(!this.open)return;let a=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!a)return;let i=e.composedPath(),r=i[0]===this||i.includes(this),n=i.includes(a);r&&!n&&(this.open=!1)}),lt(this,mh,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",le(this,mc)),document.addEventListener("keydown",le(this,mh)))}disconnectedCallback(){this.removeEventListener("click",le(this,mc)),document.removeEventListener("keydown",le(this,mh))}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),"open"===e&&(this.open?(this.addEventListener("click",le(this,mc)),document.addEventListener("keydown",le(this,mh))):(this.removeEventListener("click",le(this,mc)),document.removeEventListener("keydown",le(this,mh))))}}mc=new WeakMap,mh=new WeakMap,la.getSlotTemplateHTML=function(e){let t;return`
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
      ${t=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let a=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${a}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join(""),`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${t}</table>
  `}
    </slot>
  `},r2.customElements.get("media-keyboard-shortcuts-dialog")||r2.customElements.define("media-keyboard-shortcuts-dialog",la);try{var li="u">typeof window?window:e.g;li._sentryModuleMetadata=li._sentryModuleMetadata||{},li._sentryModuleMetadata[(new li.Error).stack]=Object.assign({},li._sentryModuleMetadata[(new li.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var lr=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)};let ln=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,ls=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,lo=e=>{let t=e.mediaIsFullscreen?rq("exit fullscreen mode"):rq("enter fullscreen mode");e.setAttribute("aria-label",t)};class ll extends ou{constructor(){super(...arguments),((e,t)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,null)})(this,mm)}static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_IS_FULLSCREEN,rE.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),lo(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===rE.MEDIA_IS_FULLSCREEN&&lo(this)}get mediaFullscreenUnavailable(){return ng(this,rE.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){ny(this,rE.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return nv(this,rE.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){nb(this,rE.MEDIA_IS_FULLSCREEN,e)}handleClick(e){var t,a;lr(this,t=mm,"write to private field"),t.set(this,e);let i=(lr(this,a=mm,"read from private field"),a.get(this)instanceof PointerEvent),r=this.mediaIsFullscreen?new r2.CustomEvent(rb.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new r2.CustomEvent(rb.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(r)}}mm=new WeakMap,ll.getSlotTemplateHTML=function(e){return`
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
  `},ll.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rq("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${rq("Exit fullscreen mode")}</slot>
  `},r2.customElements.get("media-fullscreen-button")||r2.customElements.define("media-fullscreen-button",ll);try{var ld="u">typeof window?window:e.g;ld._sentryModuleMetadata=ld._sentryModuleMetadata||{},ld._sentryModuleMetadata[(new ld.Error).stack]=Object.assign({},ld._sentryModuleMetadata[(new ld.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let{MEDIA_TIME_IS_LIVE:lu,MEDIA_PAUSED:lc}=rE,{MEDIA_SEEK_TO_LIVE_REQUEST:lh,MEDIA_PLAY_REQUEST:lm}=rb,lp=e=>{var t;let a=e.mediaPaused||!e.mediaTimeIsLive,i=a?rq("seek to live"):rq("playing live");e.setAttribute("aria-label",i);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=rq("live")),a?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class lv extends ou{static get observedAttributes(){return[...super.observedAttributes,lu,lc]}connectedCallback(){super.connectedCallback(),lp(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),lp(this)}get mediaPaused(){return nv(this,rE.MEDIA_PAUSED)}set mediaPaused(e){nb(this,rE.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return nv(this,rE.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){nb(this,rE.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new r2.CustomEvent(lh,{composed:!0,bubbles:!0})),this.hasAttribute(lc)&&this.dispatchEvent(new r2.CustomEvent(lm,{composed:!0,bubbles:!0})))}}lv.getSlotTemplateHTML=function(e){return`
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
  `},r2.customElements.get("media-live-button")||r2.customElements.define("media-live-button",lv);try{var lb="u">typeof window?window:e.g;lb._sentryModuleMetadata=lb._sentryModuleMetadata||{},lb._sentryModuleMetadata[(new lb.Error).stack]=Object.assign({},lb._sentryModuleMetadata[(new lb.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var lg=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},ly=(e,t,a)=>(lg(e,t,"read from private field"),a?a.call(e):t.get(e)),lf=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},lE=(e,t,a,i)=>(lg(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);let l_="loadingdelay",lw="noautohide",lT=`
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
`;class lA extends r2.HTMLElement{constructor(){if(super(),lf(this,mp,void 0),lf(this,mv,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rg.MEDIA_CONTROLLER,rE.MEDIA_PAUSED,rE.MEDIA_LOADING,l_]}attributeChangedCallback(e,t,a){var i,r,n,s,o;e===l_&&t!==a?this.loadingDelay=Number(a):e===rg.MEDIA_CONTROLLER&&(t&&(null==(r=null==(i=ly(this,mp))?void 0:i.unassociateElement)||r.call(i,this),lE(this,mp,null)),a&&this.isConnected&&(lE(this,mp,null==(n=this.getRootNode())?void 0:n.getElementById(a)),null==(o=null==(s=ly(this,mp))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,a;let i=this.getAttribute(rg.MEDIA_CONTROLLER);i&&(lE(this,mp,null==(e=this.getRootNode())?void 0:e.getElementById(i)),null==(a=null==(t=ly(this,mp))?void 0:t.associateElement)||a.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ly(this,mp))?void 0:e.unassociateElement)||t.call(e,this),lE(this,mp,null)}get loadingDelay(){return ly(this,mv)}set loadingDelay(e){lE(this,mv,e);let{style:t}=nc(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return nv(this,rE.MEDIA_PAUSED)}set mediaPaused(e){nb(this,rE.MEDIA_PAUSED,e)}get mediaLoading(){return nv(this,rE.MEDIA_LOADING)}set mediaLoading(e){nb(this,rE.MEDIA_LOADING,e)}get mediaController(){return ng(this,rg.MEDIA_CONTROLLER)}set mediaController(e){ny(this,rg.MEDIA_CONTROLLER,e)}get noAutohide(){return nv(this,lw)}set noAutohide(e){nb(this,lw,e)}}mp=new WeakMap,mv=new WeakMap,lA.shadowRootOptions={mode:"open"},lA.getTemplateHTML=function(e){return`
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
  `},r2.customElements.get("media-loading-indicator")||r2.customElements.define("media-loading-indicator",lA);try{var lk="u">typeof window?window:e.g;lk._sentryModuleMetadata=lk._sentryModuleMetadata||{},lk._sentryModuleMetadata[(new lk.Error).stack]=Object.assign({},lk._sentryModuleMetadata[(new lk.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let lM=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,lS=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,lI=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,lR=e=>{let t="off"===e.mediaVolumeLevel?rq("unmute"):rq("mute");e.setAttribute("aria-label",t)};class lC extends ou{static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),lR(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===rE.MEDIA_VOLUME_LEVEL&&lR(this)}get mediaVolumeLevel(){return ng(this,rE.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){ny(this,rE.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?rb.MEDIA_UNMUTE_REQUEST:rb.MEDIA_MUTE_REQUEST;this.dispatchEvent(new r2.CustomEvent(e,{composed:!0,bubbles:!0}))}}lC.getSlotTemplateHTML=function(e){return`
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
  `},lC.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${rq("Mute")}</slot>
    <slot name="tooltip-unmute">${rq("Unmute")}</slot>
  `},r2.customElements.get("media-mute-button")||r2.customElements.define("media-mute-button",lC);try{var lL="u">typeof window?window:e.g;lL._sentryModuleMetadata=lL._sentryModuleMetadata||{},lL._sentryModuleMetadata[(new lL.Error).stack]=Object.assign({},lL._sentryModuleMetadata[(new lL.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let lD=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,lx=e=>{let t=e.mediaIsPip?rq("exit picture in picture mode"):rq("enter picture in picture mode");e.setAttribute("aria-label",t)};class lP extends ou{static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_IS_PIP,rE.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),lx(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===rE.MEDIA_IS_PIP&&lx(this)}get mediaPipUnavailable(){return ng(this,rE.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){ny(this,rE.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return nv(this,rE.MEDIA_IS_PIP)}set mediaIsPip(e){nb(this,rE.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?rb.MEDIA_EXIT_PIP_REQUEST:rb.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new r2.CustomEvent(e,{composed:!0,bubbles:!0}))}}lP.getSlotTemplateHTML=function(e){return`
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
  `},lP.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rq("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${rq("Exit picture in picture mode")}</slot>
  `},r2.customElements.get("media-pip-button")||r2.customElements.define("media-pip-button",lP);try{var lO="u">typeof window?window:e.g;lO._sentryModuleMetadata=lO._sentryModuleMetadata||{},lO._sentryModuleMetadata[(new lO.Error).stack]=Object.assign({},lO._sentryModuleMetadata[(new lO.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var lN=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return a?a.call(e):t.get(e)};let lU="rates",lB=[1,1.2,1.5,1.7,2];class lH extends ou{constructor(){var e;super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,mb,new nj(this,lU,{defaultValue:lB})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_PLAYBACK_RATE,lU]}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),e===lU&&(lN(this,mb).value=a),e===rE.MEDIA_PLAYBACK_RATE){let e=a?+a:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",rq("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return lN(this,mb)}set rates(e){e?Array.isArray(e)?lN(this,mb).value=e.join(" "):"string"==typeof e&&(lN(this,mb).value=e):lN(this,mb).value=""}get mediaPlaybackRate(){return nm(this,rE.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){np(this,rE.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let a=Array.from(lN(this,mb).values(),e=>+e).sort((e,t)=>e-t),i=null!=(t=null!=(e=a.find(e=>e>this.mediaPlaybackRate))?e:a[0])?t:1,r=new r2.CustomEvent(rb.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(r)}}mb=new WeakMap,lH.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},lH.getTooltipContentHTML=function(){return rq("Playback rate")},r2.customElements.get("media-playback-rate-button")||r2.customElements.define("media-playback-rate-button",lH);try{var lW="u">typeof window?window:e.g;lW._sentryModuleMetadata=lW._sentryModuleMetadata||{},lW._sentryModuleMetadata[(new lW.Error).stack]=Object.assign({},lW._sentryModuleMetadata[(new lW.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let l$=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,lq=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,lV=e=>{let t=e.mediaPaused?rq("play"):rq("pause");e.setAttribute("aria-label",t)};class lK extends ou{static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_PAUSED,rE.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),lV(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),(e===rE.MEDIA_PAUSED||e===rE.MEDIA_LANG)&&lV(this)}get mediaPaused(){return nv(this,rE.MEDIA_PAUSED)}set mediaPaused(e){nb(this,rE.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?rb.MEDIA_PLAY_REQUEST:rb.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new r2.CustomEvent(e,{composed:!0,bubbles:!0}))}}lK.getSlotTemplateHTML=function(e){return`
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
  `},lK.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${rq("Play")}</slot>
    <slot name="tooltip-pause">${rq("Pause")}</slot>
  `},r2.customElements.get("media-play-button")||r2.customElements.define("media-play-button",lK);try{var lF="u">typeof window?window:e.g;lF._sentryModuleMetadata=lF._sentryModuleMetadata||{},lF._sentryModuleMetadata[(new lF.Error).stack]=Object.assign({},lF._sentryModuleMetadata[(new lF.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let lj="placeholdersrc";class lG extends r2.HTMLElement{static get observedAttributes(){return[lj,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,a){if("src"===e&&(null==a?this.image.removeAttribute("src"):this.image.setAttribute("src",a)),e===lj)if(null==a)this.image.style.removeProperty("background-image");else{var i;i=this.image,i.style["background-image"]=`url('${a}')`}}get placeholderSrc(){return ng(this,lj)}set placeholderSrc(e){ny(this,"src",e)}get src(){return ng(this,"src")}set src(e){ny(this,"src",e)}}lG.shadowRootOptions={mode:"open"},lG.getTemplateHTML=function(e){return`
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
  `},r2.customElements.get("media-poster-image")||r2.customElements.define("media-poster-image",lG);try{var lY="u">typeof window?window:e.g;lY._sentryModuleMetadata=lY._sentryModuleMetadata||{},lY._sentryModuleMetadata[(new lY.Error).stack]=Object.assign({},lY._sentryModuleMetadata[(new lY.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var lQ=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)};mg=new WeakMap,r2.customElements.get("media-preview-chapter-display")||r2.customElements.define("media-preview-chapter-display",class extends oQ{constructor(){super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,mg,void 0),((e,t,a)=>(lQ(e,t,"write to private field"),t.set(e,a)))(this,mg,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_PREVIEW_CHAPTER,rE.MEDIA_LANG]}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),(e===rE.MEDIA_PREVIEW_CHAPTER||e===rE.MEDIA_LANG)&&a!==t&&null!=a)if((lQ(this,mg,"read from private field"),mg.get(this)).textContent=a,""!==a){let e=rq("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return ng(this,rE.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){ny(this,rE.MEDIA_PREVIEW_CHAPTER,e)}});try{var lz="u">typeof window?window:e.g;lz._sentryModuleMetadata=lz._sentryModuleMetadata||{},lz._sentryModuleMetadata[(new lz.Error).stack]=Object.assign({},lz._sentryModuleMetadata[(new lz.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var lZ=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},lX=(e,t,a)=>(lZ(e,t,"read from private field"),a?a.call(e):t.get(e)),lJ=(e,t,a,i)=>(lZ(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);class l0 extends r2.HTMLElement{constructor(){if(super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,my,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rg.MEDIA_CONTROLLER,rE.MEDIA_PREVIEW_IMAGE,rE.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,a;let i=this.getAttribute(rg.MEDIA_CONTROLLER);i&&(lJ(this,my,null==(e=this.getRootNode())?void 0:e.getElementById(i)),null==(a=null==(t=lX(this,my))?void 0:t.associateElement)||a.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=lX(this,my))?void 0:e.unassociateElement)||t.call(e,this),lJ(this,my,null)}attributeChangedCallback(e,t,a){var i,r,n,s,o;[rE.MEDIA_PREVIEW_IMAGE,rE.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===rg.MEDIA_CONTROLLER&&(t&&(null==(r=null==(i=lX(this,my))?void 0:i.unassociateElement)||r.call(i,this),lJ(this,my,null)),a&&this.isConnected&&(lJ(this,my,null==(n=this.getRootNode())?void 0:n.getElementById(a)),null==(o=null==(s=lX(this,my))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return ng(this,rE.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ny(this,rE.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(rE.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(rE.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(rE.MEDIA_PREVIEW_COORDS)}update(){let e,t,a=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(a&&i))return;let[r,n,s,o]=a,l=i.split("#")[0],d=getComputedStyle(this),{maxWidth:u,maxHeight:c,minWidth:h,minHeight:m}=d;if("fill"===(d.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let a=parseInt(u)/s,i=parseInt(c)/o,r=parseInt(h)/s,n=parseInt(m)/o;e=a<1?a:Math.max(a,r),t=i<1?i:Math.max(i,n)}else{let a=Math.min(parseInt(u)/s,parseInt(c)/o),i=Math.max(parseInt(h)/s,parseInt(m)/o),r=a<1?a:i>1?i:1;e=r,t=r}let{style:p}=nc(this.shadowRoot,":host"),v=nc(this.shadowRoot,"img").style,b=this.shadowRoot.querySelector("img"),g=1>Math.min(e,t)?"min":"max";p.setProperty(`${g}-width`,"initial","important"),p.setProperty(`${g}-height`,"initial","important"),p.width=`${s*e}px`,p.height=`${o*t}px`;let y=()=>{v.width=`${this.imgWidth*e}px`,v.height=`${this.imgHeight*t}px`,v.display="block"};b.src!==l&&(b.onload=()=>{this.imgWidth=b.naturalWidth,this.imgHeight=b.naturalHeight,y(),b.onload=null},b.src=l,y()),y(),v.transform=`translate(-${r*e}px, -${n*t}px)`}}my=new WeakMap,l0.shadowRootOptions={mode:"open"},l0.getTemplateHTML=function(e){return`
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
  `},r2.customElements.get("media-preview-thumbnail")||r2.customElements.define("media-preview-thumbnail",l0);try{var l1="u">typeof window?window:e.g;l1._sentryModuleMetadata=l1._sentryModuleMetadata||{},l1._sentryModuleMetadata[(new l1.Error).stack]=Object.assign({},l1._sentryModuleMetadata[(new l1.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var l2=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},l3=(e,t,a)=>(l2(e,t,"read from private field"),a?a.call(e):t.get(e));mf=new WeakMap,r2.customElements.get("media-preview-time-display")||r2.customElements.define("media-preview-time-display",class extends oQ{constructor(){super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,mf,void 0),((e,t,a)=>(l2(e,t,"write to private field"),t.set(e,a)))(this,mf,this.shadowRoot.querySelector("slot")),l3(this,mf).textContent=rj(0)}static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===rE.MEDIA_PREVIEW_TIME&&null!=a&&(l3(this,mf).textContent=rj(parseFloat(a)))}get mediaPreviewTime(){return nm(this,rE.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){np(this,rE.MEDIA_PREVIEW_TIME,e)}});try{var l4="u">typeof window?window:e.g;l4._sentryModuleMetadata=l4._sentryModuleMetadata||{},l4._sentryModuleMetadata[(new l4.Error).stack]=Object.assign({},l4._sentryModuleMetadata[(new l4.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let l5="seekoffset";class l9 extends ou{static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_CURRENT_TIME,l5]}connectedCallback(){super.connectedCallback(),this.seekOffset=nm(this,l5,30)}attributeChangedCallback(e,t,a){var i;super.attributeChangedCallback(e,t,a),i=this.seekOffset,this.setAttribute("aria-label",rq("seek back {seekOffset} seconds",{seekOffset:i})),e===l5&&(this.seekOffset=nm(this,l5,30))}get seekOffset(){return nm(this,l5,30)}set seekOffset(e){np(this,l5,e),this.setAttribute("aria-label",rq("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),nr(nn(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return nm(this,rE.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){np(this,rE.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new r2.CustomEvent(rb.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}l9.getSlotTemplateHTML=function(e,t){let a;return`
    <slot name="icon">${a=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${a}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},l9.getTooltipContentHTML=function(){return rq("Seek backward")},r2.customElements.get("media-seek-backward-button")||r2.customElements.define("media-seek-backward-button",l9);try{var l8="u">typeof window?window:e.g;l8._sentryModuleMetadata=l8._sentryModuleMetadata||{},l8._sentryModuleMetadata[(new l8.Error).stack]=Object.assign({},l8._sentryModuleMetadata[(new l8.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let l6="seekoffset";class l7 extends ou{static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_CURRENT_TIME,l6]}connectedCallback(){super.connectedCallback(),this.seekOffset=nm(this,l6,30)}attributeChangedCallback(e,t,a){var i;super.attributeChangedCallback(e,t,a),i=this.seekOffset,this.setAttribute("aria-label",rq("seek forward {seekOffset} seconds",{seekOffset:i})),e===l6&&(this.seekOffset=nm(this,l6,30))}get seekOffset(){return nm(this,l6,30)}set seekOffset(e){np(this,l6,e),this.setAttribute("aria-label",rq("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),nr(nn(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return nm(this,rE.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){np(this,rE.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new r2.CustomEvent(rb.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}l7.getSlotTemplateHTML=function(e,t){let a;return`
    <slot name="icon">${a=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${a}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},l7.getTooltipContentHTML=function(){return rq("Seek forward")},r2.customElements.get("media-seek-forward-button")||r2.customElements.define("media-seek-forward-button",l7);try{var de="u">typeof window?window:e.g;de._sentryModuleMetadata=de._sentryModuleMetadata||{},de._sentryModuleMetadata[(new de.Error).stack]=Object.assign({},de._sentryModuleMetadata[(new de.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var dt=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},da=(e,t,a)=>(dt(e,t,"read from private field"),a?a.call(e):t.get(e)),di=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},dr=(e,t,a,i)=>(dt(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),dn=(e,t,a)=>(dt(e,t,"access private method"),a);let ds={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},dl=[...Object.values(ds),rE.MEDIA_CURRENT_TIME,rE.MEDIA_DURATION,rE.MEDIA_SEEKABLE],dd=["Enter"," "],du="&nbsp;/&nbsp;",dc=(e,{timesSep:t=du}={})=>{var a,i;let r=null!=(a=e.mediaCurrentTime)?a:0,[,n]=null!=(i=e.mediaSeekable)?i:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?rj(0-(s-r)):rj(r);return e.showDuration?`${o}${t}${rj(s)}`:o};class dh extends oQ{constructor(){super(),di(this,mT),di(this,mk),di(this,mS),di(this,mR),di(this,mE,void 0),di(this,m_,null),di(this,mw,e=>{let{metaKey:t,altKey:a,key:i}=e;t||a||!dd.includes(i)?this.removeEventListener("keyup",da(this,m_)):this.addEventListener("keyup",da(this,m_))}),dr(this,mE,this.shadowRoot.querySelector("slot")),da(this,mE).innerHTML=`${dc(this)}`}static get observedAttributes(){return[...super.observedAttributes,...dl,"disabled"]}connectedCallback(){let{style:e}=nc(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",rq("playback time")),dn(this,mS,mI).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),dn(this,mk,mM).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,a){this.setAttribute("aria-label",rq("playback time")),dl.includes(e)?this.update():"disabled"===e&&a!==t?null==a?dn(this,mS,mI).call(this):dn(this,mR,mC).call(this):e===ds.NO_TOGGLE&&a!==t&&(this.noToggle?dn(this,mR,mC).call(this):dn(this,mS,mI).call(this)),super.attributeChangedCallback(e,t,a)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return nv(this,ds.REMAINING)}set remaining(e){nb(this,ds.REMAINING,e)}get showDuration(){return nv(this,ds.SHOW_DURATION)}set showDuration(e){nb(this,ds.SHOW_DURATION,e)}get noToggle(){return nv(this,ds.NO_TOGGLE)}set noToggle(e){nb(this,ds.NO_TOGGLE,e)}get mediaDuration(){return nm(this,rE.MEDIA_DURATION)}set mediaDuration(e){np(this,rE.MEDIA_DURATION,e)}get mediaCurrentTime(){return nm(this,rE.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){np(this,rE.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(rE.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(rE.MEDIA_SEEKABLE):this.setAttribute(rE.MEDIA_SEEKABLE,e.join(":"))}update(){let e=dc(this);(e=>{var t;let a=e.mediaCurrentTime,[,i]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(i)&&(r=i),null==a||null===r)return e.setAttribute("aria-description",rq("video not loaded, unknown time."));let n=e.remaining?rF(0-(r-a)):rF(a);if(!e.showDuration)return e.setAttribute("aria-description",n);let s=rq("{currentTime} of {totalTime}",{currentTime:n,totalTime:rF(r)});e.setAttribute("aria-description",s)})(this),e!==da(this,mE).innerHTML&&(da(this,mE).innerHTML=e)}}mE=new WeakMap,m_=new WeakMap,mw=new WeakMap,mT=new WeakSet,mA=function(){da(this,m_)||(dr(this,m_,e=>{let{key:t}=e;dd.includes(t)?this.toggleTimeDisplay():this.removeEventListener("keyup",da(this,m_))}),this.addEventListener("keydown",da(this,mw)),this.addEventListener("click",this.toggleTimeDisplay))},mk=new WeakSet,mM=function(){da(this,m_)&&(this.removeEventListener("keyup",da(this,m_)),this.removeEventListener("keydown",da(this,mw)),this.removeEventListener("click",this.toggleTimeDisplay),dr(this,m_,null))},mS=new WeakSet,mI=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),dn(this,mT,mA).call(this))},mR=new WeakSet,mC=function(){this.removeAttribute("role"),this.disable(),dn(this,mk,mM).call(this)},dh.getSlotTemplateHTML=function(e,t){return`
    <slot>${dc(t)}</slot>
  `},r2.customElements.get("media-time-display")||r2.customElements.define("media-time-display",dh);try{var dm="u">typeof window?window:e.g;dm._sentryModuleMetadata=dm._sentryModuleMetadata||{},dm._sentryModuleMetadata[(new dm.Error).stack]=Object.assign({},dm._sentryModuleMetadata[(new dm.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var dp=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},dv=(e,t,a)=>(dp(e,t,"read from private field"),a?a.call(e):t.get(e)),db=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},dg=(e,t,a,i)=>(dp(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);class dy{constructor(e,t,a){db(this,mL,void 0),db(this,mD,void 0),db(this,mx,void 0),db(this,mP,void 0),db(this,mO,void 0),db(this,mN,void 0),db(this,mU,void 0),db(this,mB,void 0),db(this,mH,0),db(this,mW,(e=performance.now())=>{dg(this,mH,requestAnimationFrame(dv(this,mW))),dg(this,mP,performance.now()-dv(this,mx));let t=1e3/this.fps;if(dv(this,mP)>t){let a,i;dg(this,mx,e-dv(this,mP)%t);let r=1e3/((e-dv(this,mD))/++(a=this,i=mO,{set _(value){dg(a,i,value,void 0)},get _(){return dv(a,i,void 0)}})._),n=(e-dv(this,mN))/1e3/this.duration,s=dv(this,mU)+n*this.playbackRate;s-dv(this,mL).valueAsNumber>0?dg(this,mB,this.playbackRate/this.duration/r):(dg(this,mB,.995*dv(this,mB)),s=dv(this,mL).valueAsNumber+dv(this,mB)),this.callback(s)}}),dg(this,mL,e),this.callback=t,this.fps=a}start(){0===dv(this,mH)&&(dg(this,mx,performance.now()),dg(this,mD,dv(this,mx)),dg(this,mO,0),dv(this,mW).call(this))}stop(){0!==dv(this,mH)&&(cancelAnimationFrame(dv(this,mH)),dg(this,mH,0))}update({start:e,duration:t,playbackRate:a}){let i=e-dv(this,mL).valueAsNumber,r=Math.abs(t-this.duration);(i>0||i<-.03||r>=.5)&&this.callback(e),dg(this,mU,e),dg(this,mN,performance.now()),this.duration=t,this.playbackRate=a}}mL=new WeakMap,mD=new WeakMap,mx=new WeakMap,mP=new WeakMap,mO=new WeakMap,mN=new WeakMap,mU=new WeakMap,mB=new WeakMap,mH=new WeakMap,mW=new WeakMap;try{var df="u">typeof window?window:e.g;df._sentryModuleMetadata=df._sentryModuleMetadata||{},df._sentryModuleMetadata[(new df.Error).stack]=Object.assign({},df._sentryModuleMetadata[(new df.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var dE=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},d_=(e,t,a)=>(dE(e,t,"read from private field"),a?a.call(e):t.get(e)),dw=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},dT=(e,t,a,i)=>(dE(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),dA=(e,t,a)=>(dE(e,t,"access private method"),a);let dk=(e,t=e.mediaCurrentTime)=>{let a=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,i=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(i)?0:Math.max(0,Math.min((t-a)/(i-a),1))},dM=(e,t=e.range.valueAsNumber)=>{let a=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,i=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(i)?0:t*(i-a)+a};class dS extends oH{constructor(){super(),dw(this,mX),dw(this,m1),dw(this,m3),dw(this,m5),dw(this,m8),dw(this,m7),dw(this,pt),dw(this,m$,null),dw(this,mq,void 0),dw(this,mV,void 0),dw(this,mK,void 0),dw(this,mF,void 0),dw(this,mj,void 0),dw(this,mG,void 0),dw(this,mY,void 0),dw(this,mQ,void 0),dw(this,mz,void 0),dw(this,mZ,()=>{dA(this,mX,mJ).call(this)?d_(this,mq).start():d_(this,mq).stop()}),dw(this,m0,e=>{!this.dragging&&(rO(e)&&(this.range.valueAsNumber=e),d_(this,mz)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),dT(this,mV,this.shadowRoot.querySelectorAll('[part~="box"]')),dT(this,mF,this.shadowRoot.querySelector('[part~="preview-box"]')),dT(this,mj,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);dT(this,mG,parseInt(e.getPropertyValue("--media-box-padding-left"))),dT(this,mY,parseInt(e.getPropertyValue("--media-box-padding-right"))),dT(this,mq,new dy(this.range,d_(this,m0),60))}static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_PAUSED,rE.MEDIA_DURATION,rE.MEDIA_SEEKABLE,rE.MEDIA_CURRENT_TIME,rE.MEDIA_PREVIEW_IMAGE,rE.MEDIA_PREVIEW_TIME,rE.MEDIA_PREVIEW_CHAPTER,rE.MEDIA_BUFFERED,rE.MEDIA_PLAYBACK_RATE,rE.MEDIA_LOADING,rE.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",rq("seek")),d_(this,mZ).call(this),dT(this,m$,this.getRootNode()),null==(e=d_(this,m$))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),d_(this,mq).stop(),null==(e=d_(this,m$))||e.removeEventListener("transitionstart",this),dT(this,m$,null)}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),t!=a){if(e===rE.MEDIA_CURRENT_TIME||e===rE.MEDIA_PAUSED||e===rE.MEDIA_ENDED||e===rE.MEDIA_LOADING||e===rE.MEDIA_DURATION||e===rE.MEDIA_SEEKABLE){let e,t,a,i;d_(this,mq).update({start:dk(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),d_(this,mZ).call(this),e=this.range,t=rF(+dM(this)),a=rF(+this.mediaSeekableEnd),i=t&&a?rq("{currentTime} of {totalTime}",{currentTime:t,totalTime:a}):rq("video not loaded, unknown time."),e.setAttribute("aria-valuetext",i)}else e===rE.MEDIA_BUFFERED&&this.updateBufferedBar();(e===rE.MEDIA_DURATION||e===rE.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=d_(this,mQ),this.updateBar())}}get mediaChaptersCues(){return d_(this,mQ)}set mediaChaptersCues(e){var t;dT(this,mQ,e),this.updateSegments(null==(t=d_(this,mQ))?void 0:t.map(e=>({start:dk(this,e.startTime),end:dk(this,e.endTime)})))}get mediaPaused(){return nv(this,rE.MEDIA_PAUSED)}set mediaPaused(e){nb(this,rE.MEDIA_PAUSED,e)}get mediaLoading(){return nv(this,rE.MEDIA_LOADING)}set mediaLoading(e){nb(this,rE.MEDIA_LOADING,e)}get mediaDuration(){return nm(this,rE.MEDIA_DURATION)}set mediaDuration(e){np(this,rE.MEDIA_DURATION,e)}get mediaCurrentTime(){return nm(this,rE.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){np(this,rE.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return nm(this,rE.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){np(this,rE.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(rE.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(rE.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(rE.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(rE.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(rE.MEDIA_SEEKABLE):this.setAttribute(rE.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return ng(this,rE.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ny(this,rE.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return nm(this,rE.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){np(this,rE.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return nv(this,rE.MEDIA_ENDED)}set mediaEnded(e){nb(this,rE.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,a=this.mediaBuffered;if(!a.length)return;if(this.mediaEnded)t=1;else{let i=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=a.find(([e,t])=>e<=i&&i<=t))?e:[];t=dk(this,r)}let{style:i}=nc(this.shadowRoot,"#buffered");i.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=nc(this.shadowRoot,"#current-rail"),t=nc(this.shadowRoot,'[part~="current-box"]'),a=dA(this,m1,m2).call(this,d_(this,mj)),i=dA(this,m3,m4).call(this,a,this.range.valueAsNumber),r=dA(this,m5,m9).call(this,a,this.range.valueAsNumber);e.style.transform=`translateX(${i})`,e.style.setProperty("--_range-width",`${a.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${a.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":dA(this,pt,pa).call(this);break;case"pointermove":dA(this,m8,m6).call(this,e);break;case"pointerup":d_(this,mz)&&dT(this,mz,!1);break;case"pointerdown":dT(this,mz,!0);break;case"pointerleave":dA(this,m7,pe).call(this,null);break;case"transitionstart":ns(e.target,this)&&setTimeout(()=>d_(this,mZ).call(this),0)}}}m$=new WeakMap,mq=new WeakMap,mV=new WeakMap,mK=new WeakMap,mF=new WeakMap,mj=new WeakMap,mG=new WeakMap,mY=new WeakMap,mQ=new WeakMap,mz=new WeakMap,mZ=new WeakMap,mX=new WeakSet,mJ=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&nu(this)},m0=new WeakMap,m1=new WeakSet,m2=function(e){var t;let a=(null!=(t=this.getAttribute("bounds")?no(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),i=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(i.left-a.left-r/2),s=a.right-i.left-r/2;return{box:{width:r,min:n,max:s},bounds:a,range:i}},m3=new WeakSet,m4=function(e,t){let a=`${100*t}%`,{width:i,min:r,max:n}=e.box;if(!i)return a;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;a=`max(${e}, ${a})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;a=`min(${a}, ${e})`}return a},m5=new WeakSet,m9=function(e,t){let{width:a,min:i,max:r}=e.box,n=t*e.range.width;if(n<i+d_(this,mG)){let t=e.range.left-e.bounds.left-d_(this,mG);return`${n-a/2+t}px`}if(n>r-d_(this,mY)){let t=e.bounds.right-e.range.right-d_(this,mY);return`${n+a/2-t-e.range.width}px`}return 0},m8=new WeakSet,m6=function(e){let t=[...d_(this,mV)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void dA(this,m7,pe).call(this,null);let a=this.mediaSeekableEnd;if(!a)return;let i=nc(this.shadowRoot,"#preview-rail"),r=nc(this.shadowRoot,'[part~="preview-box"]'),n=dA(this,m1,m2).call(this,d_(this,mF)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=dA(this,m3,m4).call(this,n,s),l=dA(this,m5,m9).call(this,n,s);i.style.transform=`translateX(${o})`,i.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(d_(this,mK))-Math.round(s*a))&&s>.01&&s<.99||(dT(this,mK,s*a),dA(this,m7,pe).call(this,d_(this,mK)))},m7=new WeakSet,pe=function(e){this.dispatchEvent(new r2.CustomEvent(rb.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},pt=new WeakSet,pa=function(){d_(this,mq).stop();let e=dM(this);this.dispatchEvent(new r2.CustomEvent(rb.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},dS.shadowRootOptions={mode:"open"},dS.getContainerTemplateHTML=function(e){return`
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
  `},r2.customElements.get("media-time-range")||r2.customElements.define("media-time-range",dS);try{var dI="u">typeof window?window:e.g;dI._sentryModuleMetadata=dI._sentryModuleMetadata||{},dI._sentryModuleMetadata[(new dI.Error).stack]=Object.assign({},dI._sentryModuleMetadata[(new dI.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var dR=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return a?a.call(e):t.get(e)};pi=new WeakMap,r2.customElements.get("media-volume-range")||r2.customElements.define("media-volume-range",class extends oH{constructor(){super(...arguments),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,pi,()=>{let e=this.range.value,t=new r2.CustomEvent(rb.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_VOLUME,rE.MEDIA_MUTED,rE.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",rq("volume")),this.range.addEventListener("input",dR(this,pi))}disconnectedCallback(){this.range.removeEventListener("input",dR(this,pi)),super.disconnectedCallback()}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),e===rE.MEDIA_VOLUME||e===rE.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return nm(this,rE.MEDIA_VOLUME,1)}set mediaVolume(e){np(this,rE.MEDIA_VOLUME,e)}get mediaMuted(){return nv(this,rE.MEDIA_MUTED)}set mediaMuted(e){nb(this,rE.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return ng(this,rE.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){ny(this,rE.MEDIA_VOLUME_UNAVAILABLE,e)}});try{var dC="u">typeof window?window:e.g;dC._sentryModuleMetadata=dC._sentryModuleMetadata||{},dC._sentryModuleMetadata[(new dC.Error).stack]=Object.assign({},dC._sentryModuleMetadata[(new dC.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}class dL extends ou{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=rq("Loop"))}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===rE.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return nv(this,rE.MEDIA_LOOP)}set mediaLoop(e){nb(this,rE.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new r2.CustomEvent(rb.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}dL.getSlotTemplateHTML=function(e){return`
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
    `},dL.getTooltipContentHTML=function(){return rq("Loop")},r2.customElements.get("media-loop-button")||r2.customElements.define("media-loop-button",dL);try{var dD="u">typeof window?window:e.g;dD._sentryModuleMetadata=dD._sentryModuleMetadata||{},dD._sentryModuleMetadata[(new dD.Error).stack]=Object.assign({},dD._sentryModuleMetadata[(new dD.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}try{var dx="u">typeof window?window:e.g;dx._sentryModuleMetadata=dx._sentryModuleMetadata||{},dx._sentryModuleMetadata[(new dx.Error).stack]=Object.assign({},dx._sentryModuleMetadata[(new dx.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}try{var dP="u">typeof window?window:e.g;dP._sentryModuleMetadata=dP._sentryModuleMetadata||{},dP._sentryModuleMetadata[(new dP.Error).stack]=Object.assign({},dP._sentryModuleMetadata[(new dP.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var dO=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},dN=(e,t,a)=>(dO(e,t,"read from private field"),a?a.call(e):t.get(e)),dU=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},dB=(e,t,a,i)=>(dO(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);let dH={processCallback(e,t,a){if(a){for(let[e,i]of t)if(e in a){let t=a[e];"boolean"==typeof t&&i instanceof dG&&"boolean"==typeof i.element[i.attributeName]?i.booleanValue=t:"function"==typeof t&&i instanceof dG?i.element[i.attributeName]=t:i.value=t}}}};class dW extends r2.DocumentFragment{constructor(e,t,a=dH){var i;super(),dU(this,pr,void 0),dU(this,pn,void 0),this.append(e.content.cloneNode(!0)),dB(this,pr,d$(this)),dB(this,pn,a),null==(i=a.createCallback)||i.call(a,this,dN(this,pr),t),a.processCallback(this,dN(this,pr),t)}update(e){dN(this,pn).processCallback(this,dN(this,pr),e)}}pr=new WeakMap,pn=new WeakMap;let d$=(e,t=[])=>{let a,i;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new dj;for([a,i]of dV(r.value))if(a){let a=new dG(e,r.name,r.namespaceURI);n.append(a),t.push([i,a])}else n.append(i);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([a,i]of dV(n))if(a){let a=new dY(e);s.push(a),t.push([i,a])}else s.push(new Text(i));else if(r instanceof HTMLTemplateElement){let a=new dQ(e,r);s.push(a),t.push([a.expression,a])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else d$(r,t);return t},dq={},dV=e=>{let t="",a=0,i=dq[e],r=0,n;if(i)return i;for(i=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++a?(t&&i.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--a?t+=n||"":(i.push([1,t.trim()]),t="",r++);return t&&i.push([0,(a>0?"{{":"")+t]),dq[e]=i};class dK{get value(){return""}set value(e){}toString(){return this.value}}let dF=new WeakMap;class dj{constructor(){dU(this,ps,[])}[Symbol.iterator](){return dN(this,ps).values()}get length(){return dN(this,ps).length}item(e){return dN(this,ps)[e]}append(...e){for(let t of e)t instanceof dG&&dF.set(t,this),dN(this,ps).push(t)}toString(){return dN(this,ps).join("")}}ps=new WeakMap;class dG extends dK{constructor(e,t,a){super(),dU(this,pc),dU(this,po,""),dU(this,pl,void 0),dU(this,pd,void 0),dU(this,pu,void 0),dB(this,pl,e),dB(this,pd,t),dB(this,pu,a)}get attributeName(){return dN(this,pd)}get attributeNamespace(){return dN(this,pu)}get element(){return dN(this,pl)}get value(){return dN(this,po)}set value(e){dN(this,po)!==e&&(dB(this,po,e),dN(this,pc,ph)&&1!==dN(this,pc,ph).length?dN(this,pl).setAttributeNS(dN(this,pu),dN(this,pd),dN(this,pc,ph).toString()):null==e?dN(this,pl).removeAttributeNS(dN(this,pu),dN(this,pd)):dN(this,pl).setAttributeNS(dN(this,pu),dN(this,pd),e))}get booleanValue(){return dN(this,pl).hasAttributeNS(dN(this,pu),dN(this,pd))}set booleanValue(e){if(dN(this,pc,ph)&&1!==dN(this,pc,ph).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}po=new WeakMap,pl=new WeakMap,pd=new WeakMap,pu=new WeakMap,pc=new WeakSet,ph=function(){return dF.get(this)};class dY extends dK{constructor(e,t){super(),dU(this,pm,void 0),dU(this,pp,void 0),dB(this,pm,e),dB(this,pp,t?[...t]:[new Text])}get replacementNodes(){return dN(this,pp)}get parentNode(){return dN(this,pm)}get nextSibling(){return dN(this,pp)[dN(this,pp).length-1].nextSibling}get previousSibling(){return dN(this,pp)[0].previousSibling}get value(){return dN(this,pp).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),dB(this,pp,function(e,t,a,i=null){let r=0,n,s,o,l=a.length,d=t.length;for(;r<l&&r<d&&t[r]==a[r];)r++;for(;r<l&&r<d&&a[l-1]==t[d-1];)i=a[--d,--l];if(r==d)for(;r<l;)e.insertBefore(a[r++],i);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=a[r++],s=n?n.nextSibling:i,n==o?n=s:r<l&&a[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=i;)s=n.nextSibling,e.removeChild(n),n=s}return a}(dN(this,pp)[0].parentNode,dN(this,pp),t,this.nextSibling))}}pm=new WeakMap,pp=new WeakMap;class dQ extends dY{constructor(e,t){const a=t.getAttribute("directive")||t.getAttribute("type");let i=t.getAttribute("expression")||t.getAttribute(a)||"";i.startsWith("{{")&&(i=i.trim().slice(2,-2).trim()),super(e),this.expression=i,this.template=t,this.directive=a}}try{var dz="u">typeof window?window:e.g;dz._sentryModuleMetadata=dz._sentryModuleMetadata||{},dz._sentryModuleMetadata[(new dz.Error).stack]=Object.assign({},dz._sentryModuleMetadata[(new dz.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let dZ={string:e=>String(e)};class dX{constructor(e){this.template=e,this.state=void 0}}let dJ=new WeakMap,d0=new WeakMap,d1={partial:(e,t)=>{t[e.expression]=new dX(e.template)},if:(e,t)=>{var a;if(d5(e.expression,t))if(dJ.get(e)!==e.template){dJ.set(e,e.template);let a=new dW(e.template,t,d3);e.replace(a),d0.set(e,a)}else null==(a=d0.get(e))||a.update(t);else e.replace(""),dJ.delete(e),d0.delete(e)}},d2=Object.keys(d1),d3={processCallback(e,t,a){var i,r;if(a)for(let[e,n]of t){if(n instanceof dQ){if(!n.directive){let e=d2.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(i=d1[n.directive])||i.call(d1,n,a);continue}let t=d5(e,a);if(t instanceof dX){dJ.get(n)!==t.template?(dJ.set(n,t.template),n.value=t=new dW(t.template,t.state,d3),d0.set(n,t)):null==(r=d0.get(n))||r.update(t.state);continue}t?(n instanceof dG&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof dG?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,dJ.delete(n),d0.delete(n))):n instanceof dG?n.value=void 0:(n.value=void 0,dJ.delete(n),d0.delete(n))}}},d4={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var a;return null==(a=dZ[t])?void 0:a.call(dZ,e)}};function d5(e,t={}){var a,i,r,n,s,o,l;let d=(function(e,t){let a,i,r,n=[];for(;e;){for(let n in r=null,a=e.length,t)(i=t[n].exec(e))&&i.index<a&&(r={token:i[0],type:n,matches:i.slice(1)},a=i.index);a&&n.push({token:e.substr(0,a),type:void 0}),r&&n.push(r),e=e.substr(a+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return d9(e);if((null==(a=d[0])?void 0:a.token)===">"){let a=t[null==(i=d[1])?void 0:i.token];if(!a)return d9(e);let o={...t};a.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let a=null==(r=l[e])?void 0:r.token,i=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;a&&"="===i&&(o[a]=d6(d,t))}return a}if(1===d.length)return d8(d[0])?d6(d[0].token,t):d9(e);if(2===d.length){let a=d4[null==(o=d[0])?void 0:o.token];return a&&d8(d[1])?a(d6(d[1].token,t)):d9(e)}if(3===d.length){let a=null==(l=d[1])?void 0:l.token,i=d4[a];if(!i||!d8(d[0])||!d8(d[2]))return d9(e);let r=d6(d[0].token,t);return i(r,"|"===a?d[2].token:d6(d[2].token,t))}}function d9(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function d8({type:e}){return["number","boolean","string","param"].includes(e)}function d6(e,t){let a=e[0],i=e.slice(-1);return"true"===e||"false"===e?"true"===e:a===i&&["'",'"'].includes(a)?e.slice(1,-1):rN(e)?parseFloat(e):t[e]}try{var d7="u">typeof window?window:e.g;d7._sentryModuleMetadata=d7._sentryModuleMetadata||{},d7._sentryModuleMetadata[(new d7.Error).stack]=Object.assign({},d7._sentryModuleMetadata[(new d7.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var ue=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},ut=(e,t,a)=>(ue(e,t,"read from private field"),a?a.call(e):t.get(e)),ua=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},ui=(e,t,a,i)=>(ue(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),ur=(e,t,a)=>(ue(e,t,"access private method"),a);let un={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},us=r3.createElement("template");us.innerHTML=`
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
`;class uo extends r2.HTMLElement{constructor(){super(),ua(this,pf),ua(this,p_),ua(this,pv,void 0),ua(this,pb,void 0),ua(this,pg,void 0),ua(this,py,void 0),ua(this,pT,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),ui(this,py,new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(un[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()})),ui(this,pT,this.render.bind(this)),ur(this,pf,pE).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=ut(this,pv))?e:this.constructor.template}set template(e){null===e?this.removeAttribute("template"):"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(ui(this,pv,e),ui(this,pg,null),this.createRenderer())}get props(){var e,t,a;let i=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>un[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of i){let t=null!=(a=un[e.name])?a:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:i}=e;null!=i?(rN(i)&&(i=parseFloat(i)),r[t]=""===i||i):r[t]=!1}return r}attributeChangedCallback(e,t,a){"template"===e&&t!=a&&ur(this,p_,pw).call(this)}connectedCallback(){this.addEventListener(r_.BREAKPOINTS_COMPUTED,ut(this,pT)),ut(this,py).observe(this,{attributes:!0}),ut(this,py).observe(this.renderRoot,{attributes:!0,subtree:!0}),ur(this,p_,pw).call(this)}disconnectedCallback(){this.removeEventListener(r_.BREAKPOINTS_COMPUTED,ut(this,pT)),ut(this,py).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==ut(this,pb)&&(ui(this,pb,this.template),this.renderer=new dW(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(us.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function ul(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}pv=new WeakMap,pb=new WeakMap,pg=new WeakMap,py=new WeakMap,pf=new WeakSet,pE=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},p_=new WeakSet,pw=function(){var e;let t=this.getAttribute("template");if(!t||t===ut(this,pg))return;let a=this.getRootNode(),i=null==(e=null==a?void 0:a.getElementById)?void 0:e.call(a,t);if(i){ui(this,pg,t),ui(this,pv,i),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(ui(this,pg,t),ul(t).then(e=>{let t=r3.createElement("template");t.innerHTML=e,ui(this,pv,t),this.createRenderer()}).catch(console.error))},pT=new WeakMap,uo.observedAttributes=["template"],uo.processor=d3,r2.customElements.get("media-theme")||r2.customElements.define("media-theme",uo);try{var ud="u">typeof window?window:e.g;ud._sentryModuleMetadata=ud._sentryModuleMetadata||{},ud._sentryModuleMetadata[(new ud.Error).stack]=Object.assign({},ud._sentryModuleMetadata[(new ud.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}function uu(e){return e.split("-")[0]}try{var uc="u">typeof window?window:e.g;uc._sentryModuleMetadata=uc._sentryModuleMetadata||{},uc._sentryModuleMetadata[(new uc.Error).stack]=Object.assign({},uc._sentryModuleMetadata[(new uc.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}class uh extends Event{constructor({action:e="auto",relatedTarget:t,...a}){super("invoke",a),this.action=e,this.relatedTarget=t}}class um extends Event{constructor({newState:e,oldState:t,...a}){super("toggle",a),this.newState=e,this.oldState=t}}try{var up="u">typeof window?window:e.g;up._sentryModuleMetadata=up._sentryModuleMetadata||{},up._sentryModuleMetadata[(new up.Error).stack]=Object.assign({},up._sentryModuleMetadata[(new up.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var uv=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},ub=(e,t,a)=>(uv(e,t,"read from private field"),a?a.call(e):t.get(e)),ug=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},uy=(e,t,a,i)=>(uv(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),uf=(e,t,a)=>(uv(e,t,"access private method"),a);function uE({type:e,text:t,value:a,checked:i}){let r=r3.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=a,r.checked=i;let n=r3.createElement("span");return n.textContent=t,r.append(n),r}function u_(e,t){let a=e.querySelector(`:scope > [slot="${t}"]`);if((null==a?void 0:a.nodeName)=="SLOT"&&(a=a.assignedElements({flatten:!0})[0]),a)return a.cloneNode(!0);let i=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return i?i.cloneNode(!0):""}let uw="style",uT="hidden",uA="disabled";class uk extends r2.HTMLElement{constructor(){if(super(),ug(this,pL),ug(this,px),ug(this,pN),ug(this,pB),ug(this,pW),ug(this,pq),ug(this,pj),ug(this,pY),ug(this,pz),ug(this,pX),ug(this,p0),ug(this,p2),ug(this,p4),ug(this,p9),ug(this,p6),ug(this,ve),ug(this,va),ug(this,vr),ug(this,pA,null),ug(this,pk,null),ug(this,pM,null),ug(this,pS,new Set),ug(this,pI,void 0),ug(this,pR,!1),ug(this,pC,null),ug(this,pO,()=>{let e=ub(this,pS),t=new Set(this.items);for(let a of e)t.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(let a of t)e.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));uy(this,pS,t)}),ug(this,pK,()=>{uf(this,pj,pG).call(this),uf(this,pY,pQ).call(this,!1)}),ug(this,pF,()=>{uf(this,pj,pG).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),uy(this,pI,new MutationObserver(ub(this,pO)))}static get observedAttributes(){return[uA,uT,uw,"anchor",rg.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":uf(this,pL,pD).call(this,e);break;case"invoke":uf(this,pB,pH).call(this,e);break;case"click":uf(this,pz,pZ).call(this,e);break;case"toggle":uf(this,p0,p1).call(this,e);break;case"focusout":uf(this,p4,p5).call(this,e);break;case"keydown":uf(this,p9,p8).call(this,e)}}connectedCallback(){var e,t;ub(this,pI).observe(this.defaultSlot,{childList:!0}),uy(this,pC,nh(this.shadowRoot,":host")),uf(this,pN,pU).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),uy(this,pA,ni(this)),null==(t=null==(e=ub(this,pA))?void 0:e.associateElement)||t.call(e,this),this.hidden||(r6(uS(this),ub(this,pK)),r6(this,ub(this,pF))),uf(this,px,pP).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;ub(this,pI).disconnect(),r7(uS(this),ub(this,pK)),r7(this,ub(this,pF)),this.disable(),null==(t=null==(e=ub(this,pA))?void 0:e.unassociateElement)||t.call(e,this),uy(this,pA,null),uy(this,pk,null),uy(this,pM,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,a){var i,r,n,s;e===uT&&a!==t?(ub(this,pR)||uy(this,pR,!0),this.hidden?uf(this,pq,pV).call(this):uf(this,pW,p$).call(this),this.dispatchEvent(new um({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===rg.MEDIA_CONTROLLER?(t&&(null==(r=null==(i=ub(this,pA))?void 0:i.unassociateElement)||r.call(i,this),uy(this,pA,null)),a&&this.isConnected&&(uy(this,pA,ni(this)),null==(s=null==(n=ub(this,pA))?void 0:n.associateElement)||s.call(n,this))):e===uA&&a!==t?null==a?this.enable():this.disable():e===uw&&a!==t&&uf(this,pN,pU).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=nd(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(uM)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&uf(this,vr,vn).call(this,t)}focus(){if(uy(this,pk,nl()),this.items.length){uf(this,va,vi).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let a=uf(this,p6,p7).call(this,e);a&&(uf(this,vr,vn).call(this,a,"checkbox"===a.type),ub(this,pM)&&!this.hidden&&(null==(t=ub(this,pk))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,a;let{key:i}=e,r=this.items,n=null!=(a=null!=(t=uf(this,p6,p7).call(this,e))?t:uf(this,ve,vt).call(this))?a:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===i?s++:"ArrowUp"===i?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),uf(this,va,vi).call(this,r[s]),r[s].focus()}}function uM(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function uS(e){var t;return null!=(t=e.getAttribute("bounds")?no(e,`#${e.getAttribute("bounds")}`):na(e)||e.parentElement)?t:e}pA=new WeakMap,pk=new WeakMap,pM=new WeakMap,pS=new WeakMap,pI=new WeakMap,pR=new WeakMap,pC=new WeakMap,pL=new WeakSet,pD=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&uf(this,px,pP).call(this),t.name||ub(this,pO).call(this)},px=new WeakSet,pP=function(){let e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===e.assignedNodes().length},pO=new WeakMap,pN=new WeakSet,pU=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),a=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===a?"":"width:0")},pB=new WeakSet,pH=function(e){uy(this,pM,e.relatedTarget),ns(this,e.relatedTarget)||(this.hidden=!this.hidden)},pW=new WeakSet,p$=function(){var e;null==(e=ub(this,pM))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),r6(uS(this),ub(this,pK)),r6(this,ub(this,pF))},pq=new WeakSet,pV=function(){var e;null==(e=ub(this,pM))||e.setAttribute("aria-expanded","false"),r7(uS(this),ub(this,pK)),r7(this,ub(this,pF))},pK=new WeakMap,pF=new WeakMap,pj=new WeakSet,pG=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:a}=function({anchor:e,floating:t,placement:a}){let{x:i,y:r}=function({anchor:e,floating:t},a){let i,r="x"==(["top","bottom"].includes(uu(a))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=uu(a),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":i={x:o,y:e.y-t.height};break;case"bottom":i={x:o,y:e.y+e.height};break;case"right":i={x:e.x+e.width,y:l};break;case"left":i={x:e.x-t.width,y:l};break;default:i={x:e.x,y:e.y}}switch(a.split("-")[1]){case"start":i[r]-=d;break;case"end":i[r]+=d}return i}(function({anchor:e,floating:t}){var a,i,r;let n,s;return{anchor:(a=e,i=t.offsetParent,n=a.getBoundingClientRect(),s=null!=(r=null==i?void 0:i.getBoundingClientRect())?r:{x:0,y:0},{x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),a);return{x:i,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let i=uS(this).getBoundingClientRect(),r=i.width-t-e,n=i.height-a-this.offsetHeight,{style:s}=ub(this,pC);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=i.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},pY=new WeakSet,pQ=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),a=null==t?void 0:t.querySelector('[role="menu"]'),{style:i}=ub(this,pC);if(e||i.setProperty("--media-menu-transition-in","none"),a){let e=a.offsetHeight,i=Math.max(a.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${i}px`),this.style.setProperty("min-height",`${e}px`),uf(this,pj,pG).call(this,i)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),uf(this,pj,pG).call(this);i.removeProperty("--media-menu-transition-in")},pz=new WeakSet,pZ=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(ub(this,pX,pJ))){null==(t=ub(this,pk))||t.focus(),this.hidden=!0;return}let a=uf(this,p6,p7).call(this,e);!a||a.hasAttribute("disabled")||(uf(this,va,vi).call(this,a),this.handleSelect(e))},pX=new WeakSet,pJ=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},p0=new WeakSet,p1=function(e){if(e.target===this)return;uf(this,p2,p3).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let a of t)a.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=a.getAttribute("aria-expanded")||a.invokeTargetElement.hidden||a.invokeTargetElement.dispatchEvent(new uh({relatedTarget:a})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);uf(this,pY,pQ).call(this,!0)},p2=new WeakSet,p3=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},p4=new WeakSet,p5=function(e){var t;ns(this,e.relatedTarget)||(ub(this,pR)&&(null==(t=ub(this,pk))||t.focus()),ub(this,pM)&&ub(this,pM)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},p9=new WeakSet,p8=function(e){var t,a,i,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(ub(this,pR)){this.hidden=!0;return}e.shiftKey?null==(a=null==(t=this.previousElementSibling)?void 0:t.focus)||a.call(t):null==(r=null==(i=this.nextElementSibling)?void 0:i.focus)||r.call(i),this.blur()}else"Escape"===s?(null==(n=ub(this,pk))||n.focus(),ub(this,pR)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},p6=new WeakSet,p7=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},ve=new WeakSet,vt=function(){return this.items.find(e=>0===e.tabIndex)},va=new WeakSet,vi=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},vr=new WeakSet,vn=function(e,t){let a=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=a[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},uk.shadowRootOptions={mode:"open"},uk.getTemplateHTML=function(e){return`
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
  `},r2.customElements.get("media-chrome-menu")||r2.customElements.define("media-chrome-menu",uk);try{var uI="u">typeof window?window:e.g;uI._sentryModuleMetadata=uI._sentryModuleMetadata||{},uI._sentryModuleMetadata[(new uI.Error).stack]=Object.assign({},uI._sentryModuleMetadata[(new uI.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var uR=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},uC=(e,t,a)=>(uR(e,t,"read from private field"),a?a.call(e):t.get(e)),uL=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},uD=(e,t,a,i)=>(uR(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),ux=(e,t,a)=>(uR(e,t,"access private method"),a);let uP="type",uO="value",uN="checked",uU="disabled";class uB extends r2.HTMLElement{constructor(){if(super(),uL(this,vl),uL(this,vu),uL(this,vh),uL(this,vg),uL(this,vs,!1),uL(this,vo,void 0),uL(this,vp,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let a=this.shadowRoot.querySelector('slot[name="description"]'),i=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==i?void 0:i.dataset.description)?t:null==i?void 0:i.text,n=r3.createElement("span");n.textContent=null!=r?r:"",a.replaceChildren(n)}),uL(this,vv,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",uC(this,vv))}),uL(this,vb,e=>{let{metaKey:t,altKey:a,key:i}=e;t||a||!this.keysUsed.includes(i)?this.removeEventListener("keyup",uC(this,vv)):this.addEventListener("keyup",uC(this,vv),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[uP,uU,uN,uO]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),uH(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":ux(this,vl,vd).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":uC(this,vb).call(this,e);break;case"keyup":uC(this,vv).call(this,e)}}attributeChangedCallback(e,t,a){e===uN&&uH(this)&&!uC(this,vs)?this.setAttribute("aria-checked",null!=a?"true":"false"):e===uP&&a!==t?this.role="menuitem"+a:e===uU&&a!==t&&(null==a?this.enable():this.disable())}connectedCallback(){this.hasAttribute(uU)||this.enable(),this.role="menuitem"+this.type,uD(this,vo,function e(t,a){if(!t)return null;let{host:i}=t.getRootNode();return!a&&i?e(t,i):(null==a?void 0:a.items)?a:e(a,null==a?void 0:a.parentNode)}(this,this.parentNode)),ux(this,vg,vy).call(this),this.submenuElement&&ux(this,vu,vc).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),ux(this,vg,vy).call(this),uD(this,vo,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=nd(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(uP))?e:""}set type(e){this.setAttribute(uP,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(uO))?e:this.text}set value(e){this.setAttribute(uO,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(uH(this))return"true"===this.getAttribute("aria-checked")}set checked(e){uH(this)&&(uD(this,vs,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!uH(this)&&this.invokeTargetElement&&ns(this,e.target)&&this.invokeTargetElement.dispatchEvent(new uh({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function uH(e){return"radio"===e.type||"checkbox"===e.type}vs=new WeakMap,vo=new WeakMap,vl=new WeakSet,vd=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?ux(this,vu,vc).call(this):ux(this,vh,vm).call(this))},vu=new WeakSet,vc=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",uC(this,vp)),this.submenuElement.addEventListener("addmenuitem",uC(this,vp)),this.submenuElement.addEventListener("removemenuitem",uC(this,vp)),uC(this,vp).call(this)},vh=new WeakSet,vm=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",uC(this,vp)),this.submenuElement.removeEventListener("addmenuitem",uC(this,vp)),this.submenuElement.removeEventListener("removemenuitem",uC(this,vp)),uC(this,vp).call(this)},vp=new WeakMap,vv=new WeakMap,vb=new WeakMap,vg=new WeakSet,vy=function(){var e;let t=null==(e=uC(this,vo))?void 0:e.radioGroupItems;if(!t)return;let a=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(a||(a=t[0]),t))e.setAttribute("aria-checked","false");null==a||a.setAttribute("aria-checked","true")},uB.shadowRootOptions={mode:"open"},uB.getTemplateHTML=function(e){return`
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
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},uB.getSuffixSlotInnerHTML=function(e){return""},r2.customElements.get("media-chrome-menu-item")||r2.customElements.define("media-chrome-menu-item",uB);try{var uW="u">typeof window?window:e.g;uW._sentryModuleMetadata=uW._sentryModuleMetadata||{},uW._sentryModuleMetadata[(new uW.Error).stack]=Object.assign({},uW._sentryModuleMetadata[(new uW.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}class u$ extends uk{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:na(this).querySelector("media-settings-menu-button")}}u$.getTemplateHTML=function(e){return`
    ${uk.getTemplateHTML(e)}
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
  `},r2.customElements.get("media-settings-menu")||r2.customElements.define("media-settings-menu",u$);try{var uq="u">typeof window?window:e.g;uq._sentryModuleMetadata=uq._sentryModuleMetadata||{},uq._sentryModuleMetadata[(new uq.Error).stack]=Object.assign({},uq._sentryModuleMetadata[(new uq.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}class uV extends uB{}uV.shadowRootOptions={mode:"open"},uV.getTemplateHTML=function(e){return`
    ${uB.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},uV.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},r2.customElements.get("media-settings-menu-item")||r2.customElements.define("media-settings-menu-item",uV);try{var uK="u">typeof window?window:e.g;uK._sentryModuleMetadata=uK._sentryModuleMetadata||{},uK._sentryModuleMetadata[(new uK.Error).stack]=Object.assign({},uK._sentryModuleMetadata[(new uK.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}class uF extends ou{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=nd(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new uh({relatedTarget:this}))}}r2.customElements.get("media-chrome-menu-button")||r2.customElements.define("media-chrome-menu-button",uF);try{var uj="u">typeof window?window:e.g;uj._sentryModuleMetadata=uj._sentryModuleMetadata||{},uj._sentryModuleMetadata[(new uj.Error).stack]=Object.assign({},uj._sentryModuleMetadata[(new uj.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}class uG extends uF{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",rq("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:na(this).querySelector("media-settings-menu")}}uG.getSlotTemplateHTML=function(){return`
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
  `},uG.getTooltipContentHTML=function(){return rq("Settings")},r2.customElements.get("media-settings-menu-button")||r2.customElements.define("media-settings-menu-button",uG);try{var uY="u">typeof window?window:e.g;uY._sentryModuleMetadata=uY._sentryModuleMetadata||{},uY._sentryModuleMetadata[(new uY.Error).stack]=Object.assign({},uY._sentryModuleMetadata[(new uY.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var uQ=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},uz=(e,t,a)=>(uQ(e,t,"read from private field"),a?a.call(e):t.get(e)),uZ=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},uX=(e,t,a,i)=>(uQ(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),uJ=(e,t,a)=>(uQ(e,t,"access private method"),a);vf=new WeakMap,vE=new WeakMap,v_=new WeakSet,vw=function(){if(uz(this,vE)===JSON.stringify(this.mediaAudioTrackList))return;uX(this,vE,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=uE({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(u_(this,"checked-indicator")),this.defaultSlot.append(e)}},vT=new WeakSet,vA=function(){if(null==this.value)return;let e=new r2.CustomEvent(rb.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},r2.customElements.get("media-audio-track-menu")||r2.customElements.define("media-audio-track-menu",class extends uk{constructor(){super(...arguments),uZ(this,v_),uZ(this,vT),uZ(this,vf,[]),uZ(this,vE,void 0)}static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_AUDIO_TRACK_LIST,rE.MEDIA_AUDIO_TRACK_ENABLED,rE.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),e===rE.MEDIA_AUDIO_TRACK_ENABLED&&t!==a)this.value=a;else if(e===rE.MEDIA_AUDIO_TRACK_LIST&&t!==a){var i;uX(this,vf,null==(i=null!=a?a:"")?void 0:i.split(/\s+/).map(rP)),uJ(this,v_,vw).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",uJ(this,vT,vA))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",uJ(this,vT,vA))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=na(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return uz(this,vf)}set mediaAudioTrackList(e){uX(this,vf,e),uJ(this,v_,vw).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=ng(this,rE.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){ny(this,rE.MEDIA_AUDIO_TRACK_ENABLED,e)}});try{var u0="u">typeof window?window:e.g;u0._sentryModuleMetadata=u0._sentryModuleMetadata||{},u0._sentryModuleMetadata[(new u0.Error).stack]=Object.assign({},u0._sentryModuleMetadata[(new u0.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let u1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,u2=e=>{let t=rq("Audio");e.setAttribute("aria-label",t)};class u3 extends uF{static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_AUDIO_TRACK_ENABLED,rE.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),u2(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===rE.MEDIA_LANG&&u2(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=na(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=ng(this,rE.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){ny(this,rE.MEDIA_AUDIO_TRACK_ENABLED,e)}}u3.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${u1}</slot>
  `},u3.getTooltipContentHTML=function(){return rq("Audio")},r2.customElements.get("media-audio-track-menu-button")||r2.customElements.define("media-audio-track-menu-button",u3);try{var u4="u">typeof window?window:e.g;u4._sentryModuleMetadata=u4._sentryModuleMetadata||{},u4._sentryModuleMetadata[(new u4.Error).stack]=Object.assign({},u4._sentryModuleMetadata[(new u4.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var u5=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},u9=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},u8=(e,t,a)=>(u5(e,t,"access private method"),a);let u6=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class u7 extends uk{constructor(){super(...arguments),u9(this,vM),u9(this,vI),u9(this,vk,void 0)}static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_SUBTITLES_LIST,rE.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===rE.MEDIA_SUBTITLES_LIST&&t!==a?u8(this,vM,vS).call(this):e===rE.MEDIA_SUBTITLES_SHOWING&&t!==a&&(this.value=a||"",u8(this,vM,vS).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",u8(this,vI,vR))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",u8(this,vI,vR))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:na(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return ce(this,rE.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){ct(this,rE.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return ce(this,rE.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){ct(this,rE.MEDIA_SUBTITLES_SHOWING,e)}}vk=new WeakMap,vM=new WeakSet,vS=function(){var e,t,a,i;let r=(u5(this,t=vk,"read from private field"),t.get(this)!==JSON.stringify(this.mediaSubtitlesList)),n=this.value!==this.getAttribute(rE.MEDIA_SUBTITLES_SHOWING);if(!r&&!n)return;a=vk,i=JSON.stringify(this.mediaSubtitlesList),u5(this,a,"write to private field"),a.set(this,i),this.defaultSlot.textContent="";let s=!this.value,o=uE({type:"radio",text:this.formatMenuItemText(rq("Off")),value:"off",checked:s});for(let t of(o.prepend(u_(this,"checked-indicator")),this.defaultSlot.append(o),this.mediaSubtitlesList)){let a=uE({type:"radio",text:this.formatMenuItemText(t.label,t),value:nZ(t),checked:this.value==nZ(t)});a.prepend(u_(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&a.append(u_(this,"captions-indicator")),this.defaultSlot.append(a)}},vI=new WeakSet,vR=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(rE.MEDIA_SUBTITLES_SHOWING),a=this.value!==t;if((null==e?void 0:e.length)&&a&&this.dispatchEvent(new r2.CustomEvent(rb.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!a)return;let i=new r2.CustomEvent(rb.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(i)},u7.getTemplateHTML=function(e){return`
    ${uk.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${u6}</slot>
  `};let ce=(e,t)=>{let a=e.getAttribute(t);return a?nQ(a):[]},ct=(e,t,a)=>{if(!(null==a?void 0:a.length))return void e.removeAttribute(t);let i=nX(a);e.getAttribute(t)!==i&&e.setAttribute(t,i)};r2.customElements.get("media-captions-menu")||r2.customElements.define("media-captions-menu",u7);try{var ca="u">typeof window?window:e.g;ca._sentryModuleMetadata=ca._sentryModuleMetadata||{},ca._sentryModuleMetadata[(new ca.Error).stack]=Object.assign({},ca._sentryModuleMetadata[(new ca.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let ci=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,cr=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,cn=e=>{e.setAttribute("data-captions-enabled",n2(e).toString())},cs=e=>{e.setAttribute("aria-label",rq("closed captions"))};class co extends uF{static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_SUBTITLES_LIST,rE.MEDIA_SUBTITLES_SHOWING,rE.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),cs(this),cn(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===rE.MEDIA_SUBTITLES_SHOWING?cn(this):e===rE.MEDIA_LANG&&cs(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=na(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return cl(this,rE.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){cd(this,rE.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return cl(this,rE.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){cd(this,rE.MEDIA_SUBTITLES_SHOWING,e)}}co.getSlotTemplateHTML=function(){return`
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
  `},co.getTooltipContentHTML=function(){return rq("Captions")};let cl=(e,t)=>{let a=e.getAttribute(t);return a?nQ(a):[]},cd=(e,t,a)=>{if(!(null==a?void 0:a.length))return void e.removeAttribute(t);let i=nX(a);e.getAttribute(t)!==i&&e.setAttribute(t,i)};r2.customElements.get("media-captions-menu-button")||r2.customElements.define("media-captions-menu-button",co);try{var cu="u">typeof window?window:e.g;cu._sentryModuleMetadata=cu._sentryModuleMetadata||{},cu._sentryModuleMetadata[(new cu.Error).stack]=Object.assign({},cu._sentryModuleMetadata[(new cu.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var cc=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},ch=(e,t,a)=>(cc(e,t,"read from private field"),a?a.call(e):t.get(e)),cm=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},cp=(e,t,a)=>(cc(e,t,"access private method"),a);let cv="rates";vC=new WeakMap,vL=new WeakSet,vD=function(){this.defaultSlot.textContent="";let e=this.mediaPlaybackRate,t=new Set(Array.from(ch(this,vC)).map(e=>Number(e)));for(let a of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=uE({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:e===a});t.prepend(u_(this,"checked-indicator")),this.defaultSlot.append(t)}},vx=new WeakSet,vP=function(){if(!this.value)return;let e=new r2.CustomEvent(rb.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},r2.customElements.get("media-playback-rate-menu")||r2.customElements.define("media-playback-rate-menu",class extends uk{constructor(){super(),cm(this,vL),cm(this,vx),cm(this,vC,new nj(this,cv,{defaultValue:lB})),cp(this,vL,vD).call(this)}static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_PLAYBACK_RATE,cv]}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===rE.MEDIA_PLAYBACK_RATE&&t!=a?(this.value=a,cp(this,vL,vD).call(this)):e===cv&&t!=a&&(ch(this,vC).value=a,cp(this,vL,vD).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",cp(this,vx,vP))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",cp(this,vx,vP))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:na(this).querySelector("media-playback-rate-menu-button")}get rates(){return ch(this,vC)}set rates(e){e?Array.isArray(e)?ch(this,vC).value=e.join(" "):"string"==typeof e&&(ch(this,vC).value=e):ch(this,vC).value="",cp(this,vL,vD).call(this)}get mediaPlaybackRate(){return nm(this,rE.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){np(this,rE.MEDIA_PLAYBACK_RATE,e)}});try{var cb="u">typeof window?window:e.g;cb._sentryModuleMetadata=cb._sentryModuleMetadata||{},cb._sentryModuleMetadata[(new cb.Error).stack]=Object.assign({},cb._sentryModuleMetadata[(new cb.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}class cg extends uF{static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),e===rE.MEDIA_PLAYBACK_RATE){let e=a?+a:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",rq("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:na(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return nm(this,rE.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){np(this,rE.MEDIA_PLAYBACK_RATE,e)}}cg.getSlotTemplateHTML=function(e){return`
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
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},cg.getTooltipContentHTML=function(){return rq("Playback rate")},r2.customElements.get("media-playback-rate-menu-button")||r2.customElements.define("media-playback-rate-menu-button",cg);try{var cy="u">typeof window?window:e.g;cy._sentryModuleMetadata=cy._sentryModuleMetadata||{},cy._sentryModuleMetadata[(new cy.Error).stack]=Object.assign({},cy._sentryModuleMetadata[(new cy.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var cf=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},cE=(e,t,a)=>(cf(e,t,"read from private field"),a?a.call(e):t.get(e)),c_=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},cw=(e,t,a,i)=>(cf(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),cT=(e,t,a)=>(cf(e,t,"access private method"),a);vO=new WeakMap,vN=new WeakMap,vU=new WeakSet,vB=function(){let e,t=!this.mediaRenditionSelected;if(cE(this,vN).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&cE(this,vN).mediaHeight===this.mediaHeight&&cE(this,vN).mediaWidth===this.mediaWidth&&cE(this,vN).isAuto===t)return;cE(this,vN).mediaRenditionList=JSON.stringify(this.mediaRenditionList),cE(this,vN).mediaHeight=this.mediaHeight,cE(this,vN).mediaWidth=this.mediaWidth,cE(this,vN).isAuto=t;let a=this.mediaRenditionList.sort(this.compareRendition.bind(this)),i=a.find(e=>e.id===this.mediaRenditionSelected);for(let e of a)e.selected=e===i;for(let e of(this.defaultSlot.textContent="",a)){let a=uE({type:"radio",text:this.formatRendition(e,{showBitrate:this.showRenditionBitrate(e)}),value:`${e.id}`,checked:e.selected&&!t});a.prepend(u_(this,"checked-indicator")),this.defaultSlot.append(a)}let r=i&&this.showRenditionBitrate(i);t&&(i?e=this.formatMenuItemText(`${rq("Auto")} \u2022 ${this.formatRendition(i,{showBitrate:r})}`,i):this.mediaHeight>0&&this.mediaWidth>0&&(e=this.formatMenuItemText(`${rq("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),e||(e=this.formatMenuItemText(rq("Auto")));let n=uE({type:"radio",text:e,value:"auto",checked:t});n.dataset.description=e,n.prepend(u_(this,"checked-indicator")),this.defaultSlot.append(n)},vH=new WeakSet,vW=function(){if(null==this.value)return;let e=new r2.CustomEvent(rb.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},r2.customElements.get("media-rendition-menu")||r2.customElements.define("media-rendition-menu",class extends uk{constructor(){super(...arguments),c_(this,vU),c_(this,vH),c_(this,vO,[]),c_(this,vN,{})}static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_RENDITION_LIST,rE.MEDIA_RENDITION_SELECTED,rE.MEDIA_RENDITION_UNAVAILABLE,rE.MEDIA_HEIGHT,rE.MEDIA_WIDTH]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let a=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,i=`${t.toFixed(+(t<1))} Mbps`;return`${a} (${i})`}return this.formatMenuItemText(a,e)}static compareRendition(e,t){var a,i;return t.height===e.height?(null!=(a=t.bitrate)?a:0)-(null!=(i=e.bitrate)?i:0):t.height-e.height}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),t!==a)switch(e){case rE.MEDIA_RENDITION_SELECTED:this.value=null!=a?a:"auto",cT(this,vU,vB).call(this);break;case rE.MEDIA_RENDITION_LIST:cw(this,vO,null==a?void 0:a.split(/\s+/).map(rD)),cT(this,vU,vB).call(this);break;case rE.MEDIA_HEIGHT:case rE.MEDIA_WIDTH:cT(this,vU,vB).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",cT(this,vH,vW))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",cT(this,vH,vW))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:na(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return cE(this,vO)}set mediaRenditionList(e){cw(this,vO,e),cT(this,vU,vB).call(this)}get mediaRenditionSelected(){return ng(this,rE.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){ny(this,rE.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return nm(this,rE.MEDIA_HEIGHT)}set mediaHeight(e){np(this,rE.MEDIA_HEIGHT,e)}get mediaWidth(){return nm(this,rE.MEDIA_WIDTH)}set mediaWidth(e){np(this,rE.MEDIA_WIDTH,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}});try{var cA="u">typeof window?window:e.g;cA._sentryModuleMetadata=cA._sentryModuleMetadata||{},cA._sentryModuleMetadata[(new cA.Error).stack]=Object.assign({},cA._sentryModuleMetadata[(new cA.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let ck=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class cM extends uF{static get observedAttributes(){return[...super.observedAttributes,rE.MEDIA_RENDITION_SELECTED,rE.MEDIA_RENDITION_UNAVAILABLE,rE.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",rq("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:na(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return ng(this,rE.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){ny(this,rE.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return nm(this,rE.MEDIA_HEIGHT)}set mediaHeight(e){np(this,rE.MEDIA_HEIGHT,e)}}cM.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${ck}</slot>
  `},cM.getTooltipContentHTML=function(){return rq("Quality")},r2.customElements.get("media-rendition-menu-button")||r2.customElements.define("media-rendition-menu-button",cM);try{var cS="u">typeof window?window:e.g;cS._sentryModuleMetadata=cS._sentryModuleMetadata||{},cS._sentryModuleMetadata[(new cS.Error).stack]=Object.assign({},cS._sentryModuleMetadata[(new cS.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var cI=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},cR=(e,t,a)=>(cI(e,t,"read from private field"),a?a.call(e):t.get(e)),cC=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},cL=(e,t,a,i)=>(cI(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),cD=(e,t,a)=>(cI(e,t,"access private method"),a);class cx extends uk{constructor(){super(),cC(this,vq),cC(this,vK),cC(this,vj),cC(this,vY),cC(this,vZ),cC(this,v$,!1),cC(this,vz,e=>{let t=e.target,a=(null==t?void 0:t.nodeName)==="VIDEO",i=cD(this,vY,vQ).call(this,t);(a||i)&&(cR(this,v$)?cD(this,vK,vF).call(this):cD(this,vZ,vX).call(this,e))}),cC(this,vJ,e=>{let t=e.target,a=this.contains(t),i=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=cD(this,vY,vQ).call(this,t);a||i&&(r||n)||cD(this,vK,vF).call(this)}),cC(this,v0,e=>{"Escape"===e.key&&cD(this,vK,vF).call(this)}),cC(this,v1,e=>{var t,a;let i=e.target;if(null==(t=i.matches)?void 0:t.call(i,'button[invoke="copy"]')){let e=null==(a=i.closest("media-context-menu-item"))?void 0:a.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}cD(this,vK,vF).call(this)}),this.setAttribute("noautohide",""),cD(this,vq,vV).call(this)}connectedCallback(){super.connectedCallback(),na(this).addEventListener("contextmenu",cR(this,vz)),this.addEventListener("click",cR(this,v1))}disconnectedCallback(){super.disconnectedCallback(),na(this).removeEventListener("contextmenu",cR(this,vz)),this.removeEventListener("click",cR(this,v1)),document.removeEventListener("mousedown",cR(this,vJ)),document.removeEventListener("keydown",cR(this,v0))}}v$=new WeakMap,vq=new WeakSet,vV=function(){this.hidden=!cR(this,v$)},vK=new WeakSet,vF=function(){cL(this,v$,!1),cD(this,vq,vV).call(this)},vj=new WeakSet,vG=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&cD(e,vK,vF).call(e)})},vY=new WeakSet,vQ=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},vz=new WeakMap,vZ=new WeakSet,vX=function(e){e.preventDefault(),cD(this,vj,vG).call(this),cL(this,v$,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,cD(this,vq,vV).call(this),document.addEventListener("mousedown",cR(this,vJ),{once:!0}),document.addEventListener("keydown",cR(this,v0),{once:!0})},vJ=new WeakMap,v0=new WeakMap,v1=new WeakMap,cx.getTemplateHTML=function(e){return`
      ${uk.getTemplateHTML(e)}
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
    `},r2.customElements.get("media-context-menu")||r2.customElements.define("media-context-menu",cx);try{var cP="u">typeof window?window:e.g;cP._sentryModuleMetadata=cP._sentryModuleMetadata||{},cP._sentryModuleMetadata[(new cP.Error).stack]=Object.assign({},cP._sentryModuleMetadata[(new cP.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}class cO extends uB{}cO.shadowRootOptions={mode:"open"},cO.getTemplateHTML=function(e){return`
    ${uB.getTemplateHTML.call(this,e)}
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
  `},r2.customElements.get("media-context-menu-item")||r2.customElements.define("media-context-menu-item",cO);try{var cN="u">typeof window?window:e.g;cN._sentryModuleMetadata=cN._sentryModuleMetadata||{},cN._sentryModuleMetadata[(new cN.Error).stack]=Object.assign({},cN._sentryModuleMetadata[(new cN.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}try{var cU="u">typeof window?window:e.g;cU._sentryModuleMetadata=cU._sentryModuleMetadata||{},cU._sentryModuleMetadata[(new cU.Error).stack]=Object.assign({},cU._sentryModuleMetadata[(new cU.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var cB=e=>{throw TypeError(e)},cH=(e,t,a)=>t.has(e)||cB("Cannot "+a),cW=(e,t,a)=>(cH(e,t,"read from private field"),a?a.call(e):t.get(e)),c$=(e,t,a)=>t.has(e)?cB("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),cq=(e,t,a,i)=>(cH(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),cV=(e,t,a)=>(cH(e,t,"access private method"),a),cK=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends cK{});var cF,cj,cG,cY,cQ,cz,cZ,cX,cJ,c0,c1,c2,c3,c4,c5,c9,c8,c6,c7,he,ht,ha,hi,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hb,hg,hy,hf,hE,h_,hw,hT,hA,hk,hM,hS,hI,hR,hC,hL,hD,hx,hP,hO,hN,hU,hB,hH,hW,h$,hq,hV,hK,hF,hj,hG,hY,hQ,hz,hZ,hX,hJ,h0,h1,h2,h3,h4,h5,h9,h8,h6,h7,me,mt,ma,mi,mr,mn,ms,mo,ml,md,mu,mc,mh,mm,mp,mv,mb,mg,my,mf,mE,m_,mw,mT,mA,mk,mM,mS,mI,mR,mC,mL,mD,mx,mP,mO,mN,mU,mB,mH,mW,m$,mq,mV,mK,mF,mj,mG,mY,mQ,mz,mZ,mX,mJ,m0,m1,m2,m3,m4,m5,m9,m8,m6,m7,pe,pt,pa,pi,pr,pn,ps,po,pl,pd,pu,pc,ph,pm,pp,pv,pb,pg,py,pf,pE,p_,pw,pT,pA,pk,pM,pS,pI,pR,pC,pL,pD,px,pP,pO,pN,pU,pB,pH,pW,p$,pq,pV,pK,pF,pj,pG,pY,pQ,pz,pZ,pX,pJ,p0,p1,p2,p3,p4,p5,p9,p8,p6,p7,ve,vt,va,vi,vr,vn,vs,vo,vl,vd,vu,vc,vh,vm,vp,vv,vb,vg,vy,vf,vE,v_,vw,vT,vA,vk,vM,vS,vI,vR,vC,vL,vD,vx,vP,vO,vN,vU,vB,vH,vW,v$,vq,vV,vK,vF,vj,vG,vY,vQ,vz,vZ,vX,vJ,v0,v1,v2,v3=class extends cK{},v4=class{constructor(e,t={}){c$(this,v2),cq(this,v2,null==t?void 0:t.detail)}get detail(){return cW(this,v2)}initCustomEvent(){}};v2=new WeakMap;var v5={document:{createElement:function(e,t){return new v3}},DocumentFragment,customElements:{get(e){},define(e,t,a){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(v3)},CustomEvent:v4,EventTarget:cK,HTMLElement:v3,HTMLVideoElement:class extends cK{}},v9="u"<typeof window||void 0===globalThis.customElements,v8=v9?v5:globalThis,v6=v9?v5.document:globalThis.document;function v7(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function be(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function bt(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function ba(e){let t=(function(e){let t={};for(let a in e)null!=e[a]&&(t[a]=e[a]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var bi,br,bn,bs=(e,t)=>!!e&&!!t&&(!!e.contains(t)||bs(e,t.getRootNode().host)),bo="mux.com",bl=(()=>{try{return"3.13.0"}catch{}return"UNKNOWN"})(),bd=e=>{if(e){if([tG,tj].includes(e))return e;if(null!=e&&e.includes("live"))return tG}},bu={crossorigin:"crossOrigin",playsinline:"playsInline"},bc=class{constructor(e,t){c$(this,bi),c$(this,br),c$(this,bn,[]),cq(this,bi,e),cq(this,br,t)}[Symbol.iterator](){return cW(this,bn).values()}get length(){return cW(this,bn).length}get value(){var e;return null!=(e=cW(this,bn).join(" "))?e:""}set value(e){var t;e!==this.value&&(cq(this,bn,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return cW(this,bn)[e]}values(){return cW(this,bn).values()}keys(){return cW(this,bn).keys()}forEach(e){cW(this,bn).forEach(e)}add(...e){var t,a;e.forEach(e=>{this.contains(e)||cW(this,bn).push(e)}),(""!==this.value||null!=(t=cW(this,bi))&&t.hasAttribute(`${cW(this,br)}`))&&null!=(a=cW(this,bi))&&a.setAttribute(`${cW(this,br)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{cW(this,bn).splice(cW(this,bn).indexOf(e),1)}),null==(t=cW(this,bi))||t.setAttribute(`${cW(this,br)}`,`${this.value}`)}contains(e){return cW(this,bn).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};bi=new WeakMap,br=new WeakMap,bn=new WeakMap;var bh=`[mux-player ${bl}]`;function bm(...e){console.warn(bh,...e)}function bp(...e){console.error(bh,...e)}function bv(e){var t;let a=null!=(t=e.message)?t:"";e.context&&(a+=` ${e.context}`),e.file&&(a+=` ${aa("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),bm(a)}var bb={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},bg={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},by=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),bf=[...Object.values(bb).filter(e=>bb.PLAYSINLINE!==e),...Object.values(bg)];function bE(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var b_=class extends v8.HTMLElement{static get observedAttributes(){return bf}constructor(){super()}attributeChangedCallback(e,t,a){var i,r;switch(e){case bg.MUTED:this.media&&(this.media.muted=null!=a,this.media.defaultMuted=null!=a);return;case bg.VOLUME:{let e=null!=(i=bt(a))?i:1;this.media&&(this.media.volume=e);return}case bg.PLAYBACKRATE:{let e=null!=(r=bt(a))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:by}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:by}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=bt(this.getAttribute(bg.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(bg.PLAYBACKRATE,`${e}`):this.removeAttribute(bg.PLAYBACKRATE)}get crossOrigin(){return bE(this,bb.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(bb.CROSSORIGIN,`${e}`)}get autoplay(){return null!=bE(this,bb.AUTOPLAY)}set autoplay(e){e?this.setAttribute(bb.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(bb.AUTOPLAY)}get loop(){return null!=bE(this,bb.LOOP)}set loop(e){e?this.setAttribute(bb.LOOP,""):this.removeAttribute(bb.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=bE(this,bb.MUTED)}set defaultMuted(e){e?this.setAttribute(bb.MUTED,""):this.removeAttribute(bb.MUTED)}get playsInline(){return null!=bE(this,bb.PLAYSINLINE)}set playsInline(e){bp("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(bb.PRELOAD,e):this.removeAttribute(bb.PRELOAD)}},bw=`:host {
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
`,bT=new WeakMap,bA=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let a=bT.get(this.element);a&&a.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=bT.get(this.element);e&&e.delete(this.type)}}static for(t){bT.has(t.element)||bT.set(t.element,new Map);let a=t.attributeName.slice(2),i=bT.get(t.element);return i&&i.has(a)?i.get(a):new e(t.element,a)}},bk=new Map,bM=new WeakMap,bS=new WeakMap,bI=class{constructor(e,t,a){this.strings=e,this.values=t,this.processor=a,this.stringsKey=this.strings.join("\x01")}get template(){if(bk.has(this.stringsKey))return bk.get(this.stringsKey);{let e=v6.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,a,i)=>e+a+(i<t?`{{ ${i} }}`:""),""),bk.set(this.stringsKey,e),e}}renderInto(e){var t;let a=this.template;if(bM.get(e)!==a){bM.set(e,a);let t=new dW(a,this.values,this.processor);bS.set(e,t),e instanceof dY?e.replace(...t.children):e.appendChild(t);return}let i=bS.get(e);null==(t=null==i?void 0:i.update)||t.call(i,this.values)}},bR={processCallback(e,t,a){var i;if(a)for(let[e,r]of t)e in a&&function(e,t){(function(e,t){if(e instanceof dG&&t instanceof Element){let a=e.element;return a[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),a[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof dG){let a=e.attributeNamespace;return t!==e.element.hasAttributeNS(a,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof dG&&e.attributeName.startsWith("on")&&(bA.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof dY&&(e.replace(""),1)||t instanceof bI&&e instanceof dY&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof dY&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof dG){let a=e.attributeNamespace,i=e.element.getAttributeNS(a,e.attributeName);return String(t)!==i&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(i=a[e])?i:"")}};function bC(e,...t){return new bI(e,t,bR)}var bL=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),bD=e=>e.charAt(0).toUpperCase()+e.slice(1),bx=(e,t)=>{let a=(e=>{if(e.muxCode){if(2403210===e.muxCode)return"403-expired-token.md";if(2412202===e.muxCode)return"403-malformatted-token.md";if([2403222,2403221].includes(e.muxCode))return"403-incorrect-aud-value.md";if(2403232===e.muxCode)return"403-playback-id-mismatch.md";if(2403201===e.muxCode)return"missing-signed-tokens.md";if(2404e3===e.muxCode)return"404-not-found.md";if(2412e3===e.muxCode)return"412-not-playable.md"}if(e.code){if(e.code===tV.MEDIA_ERR_NETWORK)return"";if(e.code===tV.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===tV.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:a}},bP=`<template id="media-theme-gerwig">
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
`,bO=v6.createElement("template");"innerHTML"in bO&&(bO.innerHTML=bP);var bN,bU,bB=class extends uo{};bB.template=null==(bU=null==(bN=bO.content)?void 0:bN.children)?void 0:bU[0],v8.customElements.get("media-theme-gerwig")||v8.customElements.define("media-theme-gerwig",bB);var bH={SRC:"src",POSTER:"poster"},bW={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},b$=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],bq=o6.formatErrorMessage;function bV(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,a)=>{let i=e.getAttribute(a);return null!==i&&(t[a.replace(/^metadata-/,"").replace(/-/g,"_")]=i),t},t)}o6.formatErrorMessage=e=>{var t,a;if(e instanceof tV){let i=((e,t=!1)=>({title:((e,t=!1)=>{var a,i;if(e.muxCode){let r=bD(null!=(a=e.errorCategory)?a:"video"),n=tq(null!=(i=e.errorCategory)?i:t$);if(2000002===e.muxCode)return aa("Your device appears to be offline",t);if(2403210===e.muxCode)return aa("{category} URL has expired",t).format({category:r});if([2403232,2403222,2403221,2412202].includes(e.muxCode))return aa("{category} URL is formatted incorrectly",t).format({category:r});if(2403201===e.muxCode)return aa("Invalid {categoryName} URL",t).format({categoryName:n});if(2404e3===e.muxCode)return aa("{category} does not exist",t).format({category:r});if(2412e3===e.muxCode){let a="live"===e.streamType?"Live stream":"Video";return aa("{mediaType} is not currently available",t).format({mediaType:a})}}if(e.code){if(e.code===tV.MEDIA_ERR_NETWORK)return aa("Network Error",t);if(e.code===tV.MEDIA_ERR_DECODE)return aa("Media Error",t);if(e.code===tV.MEDIA_ERR_SRC_NOT_SUPPORTED)return aa("Source Not Supported",t)}return aa("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var a,i;if(e.muxCode){let r=bD(null!=(a=e.errorCategory)?a:"video"),n=tq(null!=(i=e.errorCategory)?i:t$);return 2000002===e.muxCode?aa("Check your internet connection and try reloading this video.",t):2403210===e.muxCode?aa("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):2403232===e.muxCode?aa("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):2412202===e.muxCode?aa("{category} URL is formatted incorrectly",t).format({category:r}):[2403222,2403221].includes(e.muxCode)?aa("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[2403201,24e5].includes(e.muxCode)?aa("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):2404e3===e.muxCode?"":e.message}return e.code&&(e.code===tV.MEDIA_ERR_NETWORK||e.code===tV.MEDIA_ERR_DECODE||e.code===tV.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString()}))(e,!1);return`
      ${null!=i&&i.title?`<h3>${i.title}</h3>`:""}
      ${null!=i&&i.message||null!=i&&i.linkUrl?`<p>
        ${null==i?void 0:i.message}
        ${null!=i&&i.linkUrl?`<a
              href="${i.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=i.linkText)?t:""} ${aa("(opens in a new window)")}"
              >${null!=(a=i.linkText)?a:i.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return bq(e)};var bK,bF,bj,bG,bY,bQ,bz,bZ,bX,bJ,b0,b1,b2,b3,b4,b5,b9,b8,b6,b7,ge,gt=Object.values(iB),ga=Object.values(bH),gi=Object.values(bW),gr="mux-player",gn={isDialogOpen:!1},gs={redundant_streams:!0},go=class extends b_{constructor(){super(),c$(this,b2),c$(this,bK),c$(this,bF,!1),c$(this,bj,{}),c$(this,bG,!0),c$(this,bY,new bc(this,"hotkeys")),c$(this,bQ),c$(this,bz,()=>cV(this,b2,b9).call(this)),c$(this,bZ,()=>cV(this,b2,b9).call(this)),c$(this,bX,()=>cV(this,b2,b9).call(this)),c$(this,bJ),c$(this,b0,{...gn,onCloseErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&cV(this,b2,b5).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(bs(this,v6.activeElement)||e.preventDefault())}}),c$(this,b1,e=>{var t;let a=null==(t=this.media)?void 0:t.error;if(!(a instanceof tV)){let{message:e,code:t}=null!=a?a:{};a=new tV(e,t)}if(!(null!=a&&a.fatal)){bm(a),a.data&&bm(`${a.name} data:`,a.data);return}let i=bx(a,!1);i.message&&bv(i),bp(a),a.data&&bp(`${a.name} data:`,a.data),cV(this,b2,b5).call(this,{isDialogOpen:!0})}),cq(this,bK,aF()),this.attachShadow({mode:"open"}),cV(this,b2,b4).call(this),this.isConnected&&cV(this,b2,b3).call(this)}static get NAME(){return gr}static get VERSION(){return bl}static get observedAttributes(){var e;return[...null!=(e=b_.observedAttributes)?e:[],...ga,...gt,...gi]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){cV(this,b2,b3).call(this);let e=this.media;e&&(e.metadata=bV(this))}disconnectedCallback(){var e,t,a,i,r,n,s,o;null==(e=cW(this,bQ))||e.disconnect(),null==(t=this.media)||t.removeEventListener("streamtypechange",cW(this,bz)),null==(a=this.media)||a.removeEventListener("loadstart",cW(this,bZ)),this.removeEventListener("error",cW(this,b1)),this.media&&(this.media.errorTranslator=void 0),null==(r=null==(i=this.media)?void 0:i.textTracks)||r.removeEventListener("addtrack",cW(this,bX)),null==(s=null==(n=this.media)?void 0:n.textTracks)||s.removeEventListener("removetrack",cW(this,bX)),null==(o=cW(this,bJ))||o.call(this),cq(this,bJ,void 0),cq(this,bF,!1)}attributeChangedCallback(e,t,a){var i;switch(cV(this,b2,b3).call(this),super.attributeChangedCallback(e,t,a),e){case bW.HOTKEYS:cW(this,bY).value=a;break;case bW.THUMBNAIL_TIME:null!=a&&this.tokens.thumbnail&&bm(aa("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case bW.THUMBNAIL_TOKEN:if(a){let e=at(a);if(e){let{aud:t}=e;"t"!==t&&bm(aa("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"t",tokenNamePrefix:"thumbnail"}))}}break;case bW.STORYBOARD_TOKEN:if(a){let e=at(a);if(e){let{aud:t}=e;"s"!==t&&bm(aa("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"s",tokenNamePrefix:"storyboard"}))}}break;case bW.DRM_TOKEN:if(a){let e=at(a);if(e){let{aud:t}=e;"d"!==t&&bm(aa("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"d",tokenNamePrefix:"drm"}))}}break;case iB.PLAYBACK_ID:null!=a&&a.includes("?token")&&bp(aa("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:a}));break;case iB.STREAM_TYPE:a&&![tG,tj,tY].includes(a)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=a.includes("dvr")?1/0:0:bv({file:"invalid-stream-type.md",message:aa("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):a===tG?null==this.getAttribute(bW.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case bW.FULLSCREEN_ELEMENT:if(null!=a||a!==t){let e=v6.getElementById(a),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case iB.CAP_RENDITION_TO_PLAYER_SIZE:(null==a||a!==t)&&(this.capRenditionToPlayerSize=null!=a||void 0)}[iB.PLAYBACK_ID,bH.SRC,bW.PLAYBACK_TOKEN].includes(e)&&t!==a&&cq(this,b0,{...cW(this,b0),...gn}),cV(this,b2,b9).call(this,{[null!=(i=bu[e])?i:be(e)]:a})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(rE.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new v8.CustomEvent(rb.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var a;null==(a=this.mediaController)||a.addEventListener(r_.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(rE.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new v8.CustomEvent(rb.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var a;null==(a=this.mediaController)||a.addEventListener(r_.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(iB.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tZ.includes(e)?this.setAttribute(iB.PREFER_CMCD,e):bm(`Invalid value for preferCmcd. Must be one of ${tZ.join()}`):this.removeAttribute(iB.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(rE.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(rE.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(bW.THEME))?e:"gerwig"}set theme(e){this.setAttribute(bW.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let a of e.getAttributeNames()){if(b$.includes(a))continue;let i=e.getAttribute(a);t[be(a)]=""===i||i}return t}set themeProps(e){var t,a;cV(this,b2,b3).call(this);let i={...this.themeProps,...e};for(let r in i){if(b$.includes(r))continue;let i=null==e?void 0:e[r];"boolean"==typeof i||null==i?null==(t=this.mediaTheme)||t.toggleAttribute(v7(r),!!i):null==(a=this.mediaTheme)||a.setAttribute(v7(r),i)}}get playbackId(){var e;return null!=(e=this.getAttribute(iB.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(iB.PLAYBACK_ID,e):this.removeAttribute(iB.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=gl(this,bH.SRC))?e:void 0:null!=(t=this.getAttribute(bH.SRC))?t:void 0}set src(e){e?this.setAttribute(bH.SRC,e):this.removeAttribute(bH.SRC)}get poster(){var e;let t=this.getAttribute(bH.POSTER);if(null!=t)return t;let{tokens:a}=this;return a.playback&&!a.thumbnail?void bm("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:a=bo,thumbnailTime:i,programTime:r}={})=>{var n;let s=null==t?i:void 0,{aud:o}=null!=(n=at(t))?n:{};if(!(t&&"t"!==o))return`https://image.${a}/${e}/thumbnail.webp${ba({token:t,time:s,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:a.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(bH.POSTER,e):this.removeAttribute(bH.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(bW.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(bW.STORYBOARD_SRC,e):this.removeAttribute(bW.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[tG,tY].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:a=bo,programStartTime:i,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=at(t))?n:{};if(!(t&&"s"!==s))return`https://image.${a}/${e}/storyboard.vtt${ba({token:t,format:"webp",program_start_time:i,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(bW.AUDIO)}set audio(e){e?this.setAttribute(bW.AUDIO,""):this.removeAttribute(bW.AUDIO)}get hotkeys(){return cW(this,bY)}get nohotkeys(){return this.hasAttribute(bW.NOHOTKEYS)}set nohotkeys(e){e?this.setAttribute(bW.NOHOTKEYS,""):this.removeAttribute(bW.NOHOTKEYS)}get thumbnailTime(){return bt(this.getAttribute(bW.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(bW.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(bW.VIDEO_TITLE))?e:this.getAttribute(bW.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(bW.VIDEO_TITLE,e):this.removeAttribute(bW.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=gl(this,bW.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(bW.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let a=this.getAttribute(bW.PRIMARY_COLOR);if(null!=a||this.mediaTheme&&(a=null==(t=null==(e=v8.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return a}set primaryColor(e){this.setAttribute(bW.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let a=this.getAttribute(bW.SECONDARY_COLOR);if(null!=a||this.mediaTheme&&(a=null==(t=null==(e=v8.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return a}set secondaryColor(e){this.setAttribute(bW.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let a=this.getAttribute(bW.ACCENT_COLOR);if(null!=a||this.mediaTheme&&(a=null==(t=null==(e=v8.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return a}set accentColor(e){this.setAttribute(bW.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(bW.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(bW.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(bW.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(bW.PLAYBACK_RATES))return this.getAttribute(bW.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){e?this.setAttribute(bW.PLAYBACK_RATES,e.join(" ")):this.removeAttribute(bW.PLAYBACK_RATES)}get forwardSeekOffset(){var e;return null!=(e=bt(this.getAttribute(bW.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(bW.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=bt(this.getAttribute(bW.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(bW.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(bW.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(bW.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(bW.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return bt(this.getAttribute(bW.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(bW.DEFAULT_DURATION):this.setAttribute(bW.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(iB.PLAYER_INIT_TIME)?bt(this.getAttribute(iB.PLAYER_INIT_TIME)):cW(this,bK)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(iB.PLAYER_INIT_TIME):this.setAttribute(iB.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(iB.PLAYER_SOFTWARE_NAME))?e:gr}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(iB.PLAYER_SOFTWARE_VERSION))?e:bl}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(iB.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(iB.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(iB.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(iB.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(iB.MAX_RESOLUTION,e):this.removeAttribute(iB.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(iB.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(iB.MIN_RESOLUTION,e):this.removeAttribute(iB.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(iB.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(iB.MAX_AUTO_RESOLUTION):this.setAttribute(iB.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(iB.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(iB.RENDITION_ORDER,e):this.removeAttribute(iB.RENDITION_ORDER))}get programStartTime(){return bt(this.getAttribute(iB.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(iB.PROGRAM_START_TIME):this.setAttribute(iB.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return bt(this.getAttribute(iB.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(iB.PROGRAM_END_TIME):this.setAttribute(iB.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return bt(this.getAttribute(iB.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(iB.ASSET_START_TIME):this.setAttribute(iB.ASSET_START_TIME,`${e}`)}get assetEndTime(){return bt(this.getAttribute(iB.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(iB.ASSET_END_TIME):this.setAttribute(iB.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(bW.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(bW.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,a])=>(e[t]=a,e),{}):gs}set extraSourceParams(e){null==e?this.removeAttribute(bW.EXTRA_SOURCE_PARAMS):this.setAttribute(bW.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(iB.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(iB.CUSTOM_DOMAIN,e):this.removeAttribute(iB.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=gl(this,iB.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(iB.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(bW.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(bW.NO_VOLUME_PREF,""):this.removeAttribute(bW.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(bW.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(bW.NO_MUTED_PREF,""):this.removeAttribute(bW.NO_MUTED_PREF)}get debug(){return null!=gl(this,iB.DEBUG)}set debug(e){e?this.setAttribute(iB.DEBUG,""):this.removeAttribute(iB.DEBUG)}get disableTracking(){return null!=gl(this,iB.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(iB.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=gl(this,iB.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(iB.DISABLE_COOKIES,""):this.removeAttribute(iB.DISABLE_COOKIES)}get streamType(){var e,t,a;return null!=(a=null!=(t=this.getAttribute(iB.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?a:tY}set streamType(e){this.setAttribute(iB.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,a;return null!=(a=null!=(t=this.getAttribute(bW.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(bW.DEFAULT_STREAM_TYPE))?a:tj}set defaultStreamType(e){e?this.setAttribute(bW.DEFAULT_STREAM_TYPE,e):this.removeAttribute(bW.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(bW.TARGET_LIVE_WINDOW)?+this.getAttribute(bW.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(bW.TARGET_LIVE_WINDOW):this.setAttribute(bW.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return bt(gl(this,iB.START_TIME))}set startTime(e){this.setAttribute(iB.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return bt(gl(this,iB.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){null==e?this.removeAttribute(iB.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(iB.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return bt(gl(this,iB.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){null==e?this.removeAttribute(iB.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(iB.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return bt(gl(this,iB.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){null==e?this.removeAttribute(iB.MIN_PRELOAD_SEGMENTS):this.setAttribute(iB.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(iB.PREFER_PLAYBACK);if("mse"===e||e===tQ)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===tQ?this.setAttribute(iB.PREFER_PLAYBACK,e):this.removeAttribute(iB.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){(cV(this,b2,b3).call(this),this.media)?this.media.metadata={...bV(this),...e}:bp("underlying media element missing when trying to set metadata. metadata will not be set.")}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){(cV(this,b2,b3).call(this),this.media)?this.media._hlsConfig=e:bp("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.")}async addCuePoints(e){var t;return(cV(this,b2,b3).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void bp("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(cV(this,b2,b3).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void bp("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(bW.PLAYBACK_TOKEN),t=this.getAttribute(bW.DRM_TOKEN),a=this.getAttribute(bW.THUMBNAIL_TOKEN),i=this.getAttribute(bW.STORYBOARD_TOKEN);return{...cW(this,bj),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=a?{thumbnail:a}:{},...null!=i?{storyboard:i}:{}}}set tokens(e){cq(this,bj,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(bW.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(bW.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(bW.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(bW.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(bW.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(bW.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(bW.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(bW.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,a,i){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return al(n,e,t,a,i)}removeTextTrack(e){var t;let a=null==(t=this.media)?void 0:t.nativeEl;if(a){let t;return void(null==(t=Array.prototype.find.call(a.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(bW.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(bW.CAST_RECEIVER,e):this.removeAttribute(bW.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){this.media?this.media.castCustomData=e:bp("underlying media element missing when trying to set castCustomData. castCustomData will not be set.")}get noTooltips(){return this.hasAttribute(bW.NO_TOOLTIPS)}set noTooltips(e){e?this.setAttribute(bW.NO_TOOLTIPS,""):this.removeAttribute(bW.NO_TOOLTIPS)}get proudlyDisplayMuxBadge(){return this.hasAttribute(bW.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(bW.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(bW.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){this.media?this.media.capRenditionToPlayerSize=e:bp("underlying media element missing when trying to set capRenditionToPlayerSize")}};function gl(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}bK=new WeakMap,bF=new WeakMap,bj=new WeakMap,bG=new WeakMap,bY=new WeakMap,bQ=new WeakMap,bz=new WeakMap,bZ=new WeakMap,bX=new WeakMap,bJ=new WeakMap,b0=new WeakMap,b1=new WeakMap,b2=new WeakSet,b3=function(){var e,t,a,i;if(!cW(this,bF)){cq(this,bF,!0),cV(this,b2,b9).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof v8.HTMLElement))throw""}catch{bp("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{bp("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof sZ))throw""}catch{bp("<media-controller> failed to upgrade!")}cV(this,b2,b8).call(this),cV(this,b2,b6).call(this),cV(this,b2,b7).call(this),cq(this,bG,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(nN))||t),cV(this,b2,ge).call(this),null==(a=this.media)||a.addEventListener("streamtypechange",cW(this,bz)),null==(i=this.media)||i.addEventListener("loadstart",cW(this,bZ))}},b4=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},b5=function(e){Object.assign(cW(this,b0),e),cV(this,b2,b9).call(this)},b9=function(e={}){var t,a,i,r,n,s,o,l,d,u,c,h,m,p,v,b,g,y,f,E,w,T,A,k,M,S,I,R,C,L,D,x,P,O,N,U,B,H,W,$,q,V,K,F,j,G,Y,Q,z,Z;let X,J,ee,et;t={...cW(this,b0),...e},X={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(a=this.media)?void 0:a.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(bW.STORYBOARD_SRC),fullscreenElement:this.getAttribute(bW.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,a;let i=e.theme;if(i){let r=null==(a=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:a.call(t,i);if(r&&r instanceof HTMLTemplateElement)return r;i.startsWith("media-theme-")||(i=`media-theme-${i}`);let n=v8.customElements.get(i);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(bW.NOHOTKEYS),hotKeys:this.getAttribute(bW.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,initialBandwidthEstimateKbps:this.initialBandwidthEstimateKbps,initialEstimateSegments:this.initialEstimateSegments,minPreloadSegments:this.minPreloadSegments,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(iB.TARGET_LIVE_WINDOW),streamType:bd(this.getAttribute(iB.STREAM_TYPE)),primaryColor:this.getAttribute(bW.PRIMARY_COLOR),secondaryColor:this.getAttribute(bW.SECONDARY_COLOR),accentColor:this.getAttribute(bW.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(J=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(J).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(bW.PLAYBACK_RATES),customDomain:null!=(i=this.getAttribute(iB.CUSTOM_DOMAIN))?i:void 0,title:this.getAttribute(bW.TITLE),videoTitle:null!=(r=this.getAttribute(bW.VIDEO_TITLE))?r:this.getAttribute(bW.TITLE),novolumepref:this.hasAttribute(bW.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(bW.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(bW.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(bW.DISABLE_PSEUDO_ENDED),capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams},s=bC`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(X)}
    ${bw}
  </style>
  ${l=X,bC`
  <media-theme
    template="${l.themeTemplate||!1}"
    defaultstreamtype="${null!=(d=l.defaultStreamType)&&d}"
    hotkeys="${ee=l.hotKeys?`${l.hotKeys}`:"","live"===bd(l.streamType)&&(ee+=" noarrowleft noarrowright"),ee||!1}"
    nohotkeys="${l.noHotKeys||!l.hasSrc||!1}"
    noautoseektolive="${!!(null!=(u=l.streamType)&&u.includes(tG))&&0!==l.targetLiveWindow}"
    novolumepref="${l.novolumepref||!1}"
    nomutedpref="${l.nomutedpref||!1}"
    disabled="${!l.hasSrc||l.isDialogOpen}"
    audio="${null!=(c=l.audio)&&c}"
    style="${null!=(Z={"--media-primary-color":l.primaryColor,"--media-secondary-color":l.secondaryColor,"--media-accent-color":l.accentColor},et="",Object.entries(Z).forEach(([e,t])=>{null!=t&&(et+=`${v7(e)}: ${t}; `)}),h=et?et.trim():void 0)&&h}"
    defaultsubtitles="${!l.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(m=l.forwardSeekOffset)&&m}"
    backwardseekoffset="${null!=(p=l.backwardSeekOffset)&&p}"
    playbackrates="${null!=(v=l.playbackRates)&&v}"
    defaultshowremainingtime="${null!=(b=l.defaultShowRemainingTime)&&b}"
    defaultduration="${null!=(g=l.defaultDuration)&&g}"
    hideduration="${null!=(y=l.hideDuration)&&y}"
    title="${null!=(f=l.title)&&f}"
    videotitle="${null!=(E=l.videoTitle)&&E}"
    proudlydisplaymuxbadge="${null!=(w=l.proudlyDisplayMuxBadge)&&w}"
    exportparts="${bL}"
    onclose="${l.onCloseErrorDialog}"
    onfocusin="${l.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${null!=(T=l.noHotKeys)&&T}"
      target-live-window="${null!=(A=l.targetLiveWindow)&&A}"
      stream-type="${null!=(k=bd(l.streamType))&&k}"
      crossorigin="${null!=(M=l.crossOrigin)?M:""}"
      playsinline
      autoplay="${null!=(S=l.autoplay)&&S}"
      muted="${null!=(I=l.muted)&&I}"
      loop="${null!=(R=l.loop)&&R}"
      preload="${null!=(C=l.preload)&&C}"
      debug="${null!=(L=l.debug)&&L}"
      prefer-cmcd="${null!=(D=l.preferCmcd)&&D}"
      disable-tracking="${null!=(x=l.disableTracking)&&x}"
      disable-cookies="${null!=(P=l.disableCookies)&&P}"
      prefer-playback="${null!=(O=l.preferPlayback)&&O}"
      start-time="${null!=l.startTime&&l.startTime}"
      initial-bandwidth-estimate-kbps="${null!=l.initialBandwidthEstimateKbps&&l.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${null!=l.initialEstimateSegments&&l.initialEstimateSegments}"
      min-preload-segments="${null!=l.minPreloadSegments&&l.minPreloadSegments}"
      beacon-collection-domain="${null!=(N=l.beaconCollectionDomain)&&N}"
      player-init-time="${null!=(U=l.playerInitTime)&&U}"
      player-software-name="${null!=(B=l.playerSoftwareName)&&B}"
      player-software-version="${null!=(H=l.playerSoftwareVersion)&&H}"
      env-key="${null!=(W=l.envKey)&&W}"
      custom-domain="${null!=($=l.customDomain)&&$}"
      src="${l.src?l.src:!!l.playbackId&&aG(l)}"
      cast-src="${l.src?l.src:!!l.playbackId&&aG(l)}"
      cast-receiver="${null!=(q=l.castReceiver)&&q}"
      drm-token="${null!=(K=null==(V=l.tokens)?void 0:V.drm)&&K}"
      playback-token="${null!=(j=null==(F=l.tokens)?void 0:F.playback)&&j}"
      exportparts="video"
      disable-pseudo-ended="${null!=(G=l.disablePseudoEnded)&&G}"
      max-auto-resolution="${null!=(Y=l.maxAutoResolution)&&Y}"
      cap-rendition-to-player-size="${null!=(Q=l.capRenditionToPlayerSize)&&Q}"
    >
      ${l.storyboard?bC`<track label="thumbnails" default kind="metadata" src="${l.storyboard}" />`:bC``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!l.poster&&l.poster}"
        placeholdersrc="${null!=(z=l.placeholder)&&z}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,o=this.shadowRoot,s.renderInto(o)},b8=function(){let e=e=>{var t,a;if(!(null!=e&&e.startsWith("theme-")))return;let i=e.replace(/^theme-/,"");if(b$.includes(i))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(i,r):null==(a=this.mediaTheme)||a.removeAttribute(i)};cq(this,bQ,new MutationObserver(t=>{for(let{attributeName:a}of t)e(a)})),cW(this,bQ).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},b6=function(){this.addEventListener("error",cW(this,b1)),this.media&&(this.media.errorTranslator=(e={})=>{var t,a,i;if(!((null==(t=this.media)?void 0:t.error)instanceof tV))return e;let r=bx(null==(a=this.media)?void 0:a.error,!1);return{player_error_code:null==(i=this.media)?void 0:i.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},b7=function(){var e,t,a,i;null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",cW(this,bX)),null==(i=null==(a=this.media)?void 0:a.textTracks)||i.addEventListener("removetrack",cW(this,bX))},ge=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let a,i=new WeakMap,r=()=>this.streamType===tG&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,a=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===tG&&(r=-2);let n=r-t;if(e.line===n&&!a)return;i.has(e)||i.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=i.get(e)||"auto"},500)})},s=()=>{var e,t;n(a,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(nN))&&t)},o=()=>{var e,t;let i=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];i!==a&&(null==a||a.removeEventListener("cuechange",s)),null==(a=i)||a.addEventListener("cuechange",s),n(a,cW(this,bG))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o);let l=()=>{var e,t;let i=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(nN))||t;cW(this,bG)!==i&&(cq(this,bG,i),n(a,cW(this,bG)))};this.addEventListener("userinactivechange",l),cq(this,bJ,()=>{var e,t;null==a||a.removeEventListener("cuechange",s),null==(e=this.textTracks)||e.removeEventListener("change",o),null==(t=this.textTracks)||t.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};try{var gd="u">typeof window?window:e.g;gd._sentryModuleMetadata=gd._sentryModuleMetadata||{},gd._sentryModuleMetadata[(new gd.Error).stack]=Object.assign({},gd._sentryModuleMetadata[(new gd.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var gu=e=>{throw TypeError(e)},gc=(e,t,a)=>t.has(e)||gu("Cannot "+a),gh=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends gh{});var gm,gp=class extends gh{},gv=class{constructor(e,t={}){((e,t)=>t.has(e)?gu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,void 0))(this,gm),((e,t,a)=>(gc(e,t,"write to private field"),t.set(e,a)))(this,gm,null==t?void 0:t.detail)}get detail(){let e;return gc(this,e=gm,"read from private field"),e.get(this)}initCustomEvent(){}};gm=new WeakMap;var gb={document:{createElement:function(e,t){return new gp}},DocumentFragment,customElements:{get(e){},define(e,t,a){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(gp)},CustomEvent:gv,EventTarget:gh,HTMLElement:gp,HTMLVideoElement:class extends gh{}},gg="u"<typeof window||void 0===globalThis.customElements,gy=gg?gb:globalThis;gg&&gb.document,gy.customElements.get("mux-player")||(gy.customElements.define("mux-player",go),gy.MuxPlayerElement=go);try{var gf="u">typeof window?window:e.g;gf._sentryModuleMetadata=gf._sentryModuleMetadata||{},gf._sentryModuleMetadata[(new gf.Error).stack]=Object.assign({},gf._sentryModuleMetadata[(new gf.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var gE=parseInt(r.default.version)>=19,g_={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function gw(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var gT=Object.prototype.hasOwnProperty,gA=(e,t,a)=>!((e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,a)=>t[a]===e);let a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(let i=0;i<a.length;i++)if(!gT.call(t,a[i])||!Object.is(e[a[i]],t[a[i]]))return!1;return!0})(t,e[a]),gk=(e,t,a)=>{e[a]=t},gM=(e,t,a,i=gk,n=gA)=>(0,r.useEffect)(()=>{let r=null==a?void 0:a.current;r&&n(r,t,e)&&i(r,t,e)},[null==a?void 0:a.current,t]),gS=(()=>{try{return"3.13.0"}catch{}return"UNKNOWN"})(),gI=(e,t,a)=>(0,r.useEffect)(()=>{let i=null==t?void 0:t.current;if(i&&a)return i.addEventListener(e,a),()=>{i.removeEventListener(e,a)}},[null==t?void 0:t.current,a,e]),gR=r.default.forwardRef(({children:e,...t},a)=>r.default.createElement("mux-player",{suppressHydrationWarning:!0,...((e={})=>{let{ref:t,...a}=e;return Object.entries(a).reduce((e,[t,a])=>{let i=((e,t)=>{if(!(!gE&&"boolean"==typeof t&&!t)){let a,i;if(a=e,null!=(i=g_)&&a in i)return g_[e];if(void 0!==t)return/[A-Z]/.test(e)?e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`):e}})(t,a);if(!i)return e;let r=gE||"boolean"!=typeof a?a:"";return e[i]=r,e},{})})(t),ref:a},e)),gC="mux-player-react",gL=r.default.forwardRef((e,t)=>{var a;let i=(0,r.useRef)(null),n=function(...e){return r.useCallback(function(...e){return t=>{let a=!1,i=e.map(e=>{let i=gw(e,t);return a||"function"!=typeof i||(a=!0),i});if(a)return()=>{for(let t=0;t<i.length;t++){let a=i[t];"function"==typeof a?a():gw(e[t],null)}}}}(...e),e)}(i,t),[s]=((e,t)=>{let{onAbort:a,onCanPlay:i,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:v,onPlaying:b,onTimeUpdate:g,onPause:y,onSeeking:f,onSeeked:E,onStalled:w,onSuspend:T,onEnded:A,onError:k,onCuePointChange:M,onChapterChange:S,metadata:I,tokens:R,paused:C,playbackId:L,playbackRates:D,currentTime:x,themeProps:P,extraSourceParams:O,castCustomData:N,_hlsConfig:U,...B}=t;return gM("tokens",R,e),gM("playbackId",L,e),gM("playbackRates",D,e),gM("metadata",I,e),gM("extraSourceParams",O,e),gM("_hlsConfig",U,e),gM("themeProps",P,e),gM("castCustomData",N,e),gM("paused",C,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,a)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&gA(e,t,a)),gM("currentTime",x,e,(e,t)=>{null!=t&&(e.currentTime=t)}),gI("abort",e,a),gI("canplay",e,i),gI("canplaythrough",e,r),gI("emptied",e,n),gI("loadstart",e,s),gI("loadeddata",e,o),gI("loadedmetadata",e,l),gI("progress",e,d),gI("durationchange",e,u),gI("volumechange",e,c),gI("ratechange",e,h),gI("resize",e,m),gI("waiting",e,p),gI("play",e,v),gI("playing",e,b),gI("timeupdate",e,g),gI("pause",e,y),gI("seeking",e,f),gI("seeked",e,E),gI("stalled",e,w),gI("suspend",e,T),gI("ended",e,A),gI("error",e,k),gI("cuepointchange",e,M),gI("chapterchange",e,S),[B]})(i,e),[o]=(0,r.useState)(null!=(a=e.playerInitTime)?a:aF());return r.default.createElement(gR,{ref:n,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:gC,playerSoftwareVersion:gS,playerInitTime:o,...s})});e.s(["default",0,gL,"playerSoftwareName",0,gC,"playerSoftwareVersion",0,gS],488531),e.i(488531),e.s(["MaxResolution",0,{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},"MediaError",0,tV,"MinResolution",0,{noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},"RenditionOrder",0,{DESCENDING:"desc"},"default",0,gL,"generatePlayerInitTime",0,aF,"playerSoftwareName",0,gC,"playerSoftwareVersion",0,gS],849648)}]);

//# debugId=6972bfa9-c24e-049c-a298-e9b869fa9f67