var bb=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Z3=bb((iM,Bo)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function xb(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var Dm={exports:{}},wl={},$m={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),Sb=Symbol.for("react.portal"),Eb=Symbol.for("react.fragment"),Ib=Symbol.for("react.strict_mode"),Nb=Symbol.for("react.profiler"),Tb=Symbol.for("react.provider"),Cb=Symbol.for("react.context"),Ab=Symbol.for("react.forward_ref"),Db=Symbol.for("react.suspense"),$b=Symbol.for("react.memo"),zb=Symbol.for("react.lazy"),md=Symbol.iterator;function Mb(t){return t===null||typeof t!="object"?null:(t=md&&t[md]||t["@@iterator"],typeof t=="function"?t:null)}var zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm=Object.assign,_m={};function fi(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||zm}fi.prototype.isReactComponent={};fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fm(){}Fm.prototype=fi.prototype;function ah(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||zm}var lh=ah.prototype=new Fm;lh.constructor=ah;Mm(lh,fi.prototype);lh.isPureReactComponent=!0;var gd=Array.isArray,Lm=Object.prototype.hasOwnProperty,uh={current:null},Rm={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Lm.call(e,r)&&!Rm.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:xo,type:t,key:i,ref:o,props:s,_owner:uh.current}}function _b(t,e){return{$$typeof:xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ch(t){return typeof t=="object"&&t!==null&&t.$$typeof===xo}function Fb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yd=/\/+/g;function nu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Fb(""+t.key):e.toString(36)}function ha(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xo:case Sb:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+nu(o,0):r,gd(s)?(n="",t!=null&&(n=t.replace(yd,"$&/")+"/"),ha(s,e,n,"",function(u){return u})):s!=null&&(ch(s)&&(s=_b(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(yd,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",gd(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+nu(i,a);o+=ha(i,e,n,l,s)}else if(l=Mb(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+nu(i,a++),o+=ha(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Uo(t,e,n){if(t==null)return t;var r=[],s=0;return ha(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Lb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},fa={transition:null},Rb={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:fa,ReactCurrentOwner:uh};le.Children={map:Uo,forEach:function(t,e,n){Uo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Uo(t,function(){e++}),e},toArray:function(t){return Uo(t,function(e){return e})||[]},only:function(t){if(!ch(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=fi;le.Fragment=Eb;le.Profiler=Nb;le.PureComponent=ah;le.StrictMode=Ib;le.Suspense=Db;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rb;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mm({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=uh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Lm.call(e,l)&&!Rm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xo,type:t.type,key:s,ref:i,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:Cb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Tb,_context:t},t.Consumer=t};le.createElement=Om;le.createFactory=function(t){var e=Om.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:Ab,render:t}};le.isValidElement=ch;le.lazy=function(t){return{$$typeof:zb,_payload:{_status:-1,_result:t},_init:Lb}};le.memo=function(t,e){return{$$typeof:$b,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=fa.transition;fa.transition={};try{t()}finally{fa.transition=e}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(t,e){return Tt.current.useCallback(t,e)};le.useContext=function(t){return Tt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};le.useEffect=function(t,e){return Tt.current.useEffect(t,e)};le.useId=function(){return Tt.current.useId()};le.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Tt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};le.useRef=function(t){return Tt.current.useRef(t)};le.useState=function(t){return Tt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Tt.current.useTransition()};le.version="18.2.0";$m.exports=le;var ur=$m.exports;const Ob=kb(ur);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pb=ur,Bb=Symbol.for("react.element"),Ub=Symbol.for("react.fragment"),Wb=Object.prototype.hasOwnProperty,jb=Pb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vb={key:!0,ref:!0,__self:!0,__source:!0};function Pm(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Wb.call(e,r)&&!Vb.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Bb,type:t,key:i,ref:o,props:s,_owner:jb.current}}wl.Fragment=Ub;wl.jsx=Pm;wl.jsxs=Pm;Dm.exports=wl;var Ie=Dm.exports,Uu={},Bm={exports:{}},Vt={},Um={exports:{}},Wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(E,x){var O=E.length;E.push(x);e:for(;0<O;){var j=O-1>>>1,V=E[j];if(0<s(V,x))E[j]=x,E[O]=V,O=j;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var x=E[0],O=E.pop();if(O!==x){E[0]=O;e:for(var j=0,V=E.length,U=V>>>1;j<U;){var X=2*(j+1)-1,q=E[X],Q=X+1,he=E[Q];if(0>s(q,O))Q<V&&0>s(he,q)?(E[j]=he,E[Q]=O,j=Q):(E[j]=q,E[X]=O,j=X);else if(Q<V&&0>s(he,O))E[j]=he,E[Q]=O,j=Q;else break e}}return x}function s(E,x){var O=E.sortIndex-x.sortIndex;return O!==0?O:E.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,d=!1,p=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=E)r(u),x.sortIndex=x.expirationTime,e(l,x);else break;x=n(u)}}function k(E){if(y=!1,v(E),!p)if(n(l)!==null)p=!0,oe(S);else{var x=n(u);x!==null&&ae(k,x.startTime-E)}}function S(E,x){p=!1,y&&(y=!1,g($),$=-1),d=!0;var O=f;try{for(v(x),h=n(l);h!==null&&(!(h.expirationTime>x)||E&&!W());){var j=h.callback;if(typeof j=="function"){h.callback=null,f=h.priorityLevel;var V=j(h.expirationTime<=x);x=t.unstable_now(),typeof V=="function"?h.callback=V:h===n(l)&&r(l),v(x)}else r(l);h=n(l)}if(h!==null)var U=!0;else{var X=n(u);X!==null&&ae(k,X.startTime-x),U=!1}return U}finally{h=null,f=O,d=!1}}var C=!1,z=null,$=-1,F=5,L=-1;function W(){return!(t.unstable_now()-L<F)}function K(){if(z!==null){var E=t.unstable_now();L=E;var x=!0;try{x=z(!0,E)}finally{x?Z():(C=!1,z=null)}}else C=!1}var Z;if(typeof m=="function")Z=function(){m(K)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ie=se.port2;se.port1.onmessage=K,Z=function(){ie.postMessage(null)}}else Z=function(){w(K,0)};function oe(E){z=E,C||(C=!0,Z())}function ae(E,x){$=w(function(){E(t.unstable_now())},x)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(E){E.callback=null},t.unstable_continueExecution=function(){p||d||(p=!0,oe(S))},t.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<E?Math.floor(1e3/E):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(E){switch(f){case 1:case 2:case 3:var x=3;break;default:x=f}var O=f;f=x;try{return E()}finally{f=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(E,x){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=f;f=E;try{return x()}finally{f=O}},t.unstable_scheduleCallback=function(E,x,O){var j=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?j+O:j):O=j,E){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=O+V,E={id:c++,callback:x,priorityLevel:E,startTime:O,expirationTime:V,sortIndex:-1},O>j?(E.sortIndex=O,e(u,E),n(l)===null&&E===n(u)&&(y?(g($),$=-1):y=!0,ae(k,O-j))):(E.sortIndex=V,e(l,E),p||d||(p=!0,oe(S))),E},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(E){var x=f;return function(){var O=f;f=x;try{return E.apply(this,arguments)}finally{f=O}}}})(Wm);Um.exports=Wm;var Gb=Um.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm=ur,jt=Gb;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,Ji={};function ds(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Ji[t]=e,t=0;t<e.length;t++)Vm.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wu=Object.prototype.hasOwnProperty,Hb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vd={},wd={};function Kb(t){return Wu.call(wd,t)?!0:Wu.call(vd,t)?!1:Hb.test(t)?wd[t]=!0:(vd[t]=!0,!1)}function qb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Yb(t,e,n,r){if(e===null||typeof e>"u"||qb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var hh=/[\-:]([a-z])/g;function fh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hh,fh);ft[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hh,fh);ft[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hh,fh);ft[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function dh(t,e,n,r){var s=ft.hasOwnProperty(e)?ft[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Yb(e,n,s,r)&&(n=null),r||s===null?Kb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ir=jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),Cs=Symbol.for("react.fragment"),ph=Symbol.for("react.strict_mode"),ju=Symbol.for("react.profiler"),Gm=Symbol.for("react.provider"),Hm=Symbol.for("react.context"),mh=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),Gu=Symbol.for("react.suspense_list"),gh=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),Km=Symbol.for("react.offscreen"),bd=Symbol.iterator;function xi(t){return t===null||typeof t!="object"?null:(t=bd&&t[bd]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,ru;function zi(t){if(ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ru=e&&e[1]||""}return`
`+ru+t}var su=!1;function iu(t,e){if(!t||su)return"";su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{su=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zi(t):""}function Xb(t){switch(t.tag){case 5:return zi(t.type);case 16:return zi("Lazy");case 13:return zi("Suspense");case 19:return zi("SuspenseList");case 0:case 2:case 15:return t=iu(t.type,!1),t;case 11:return t=iu(t.type.render,!1),t;case 1:return t=iu(t.type,!0),t;default:return""}}function Hu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cs:return"Fragment";case Ts:return"Portal";case ju:return"Profiler";case ph:return"StrictMode";case Vu:return"Suspense";case Gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hm:return(t.displayName||"Context")+".Consumer";case Gm:return(t._context.displayName||"Context")+".Provider";case mh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gh:return e=t.displayName||null,e!==null?e:Hu(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return Hu(t(e))}catch{}}return null}function Jb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hu(e);case 8:return e===ph?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zb(t){var e=qm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jo(t){t._valueTracker||(t._valueTracker=Zb(t))}function Ym(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Aa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ku(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xm(t,e){e=e.checked,e!=null&&dh(t,"checked",e,!1)}function qu(t,e){Xm(t,e);var n=Tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yu(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yu(t,e,n){(e!=="number"||Aa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mi=Array.isArray;function Bs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Mi(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function Jm(t,e){var n=Tr(e.value),r=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ed(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vo,Qm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vo=Vo||document.createElement("div"),Vo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qb=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(t){Qb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bi[e]=Bi[t]})});function eg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bi.hasOwnProperty(t)&&Bi[t]?(""+e).trim():e+"px"}function tg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=eg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var ek=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zu(t,e){if(e){if(ek[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ec=null;function yh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tc=null,Us=null,Ws=null;function Id(t){if(t=Io(t)){if(typeof tc!="function")throw Error(B(280));var e=t.stateNode;e&&(e=El(e),tc(t.stateNode,t.type,e))}}function ng(t){Us?Ws?Ws.push(t):Ws=[t]:Us=t}function rg(){if(Us){var t=Us,e=Ws;if(Ws=Us=null,Id(t),e)for(t=0;t<e.length;t++)Id(e[t])}}function sg(t,e){return t(e)}function ig(){}var ou=!1;function og(t,e,n){if(ou)return t(e,n);ou=!0;try{return sg(t,e,n)}finally{ou=!1,(Us!==null||Ws!==null)&&(ig(),rg())}}function Qi(t,e){var n=t.stateNode;if(n===null)return null;var r=El(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var nc=!1;if(tr)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){nc=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{nc=!1}function tk(t,e,n,r,s,i,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ui=!1,Da=null,$a=!1,rc=null,nk={onError:function(t){Ui=!0,Da=t}};function rk(t,e,n,r,s,i,o,a,l){Ui=!1,Da=null,tk.apply(nk,arguments)}function sk(t,e,n,r,s,i,o,a,l){if(rk.apply(this,arguments),Ui){if(Ui){var u=Da;Ui=!1,Da=null}else throw Error(B(198));$a||($a=!0,rc=u)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ag(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nd(t){if(ps(t)!==t)throw Error(B(188))}function ik(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Nd(s),t;if(i===r)return Nd(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function lg(t){return t=ik(t),t!==null?ug(t):null}function ug(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ug(t);if(e!==null)return e;t=t.sibling}return null}var cg=jt.unstable_scheduleCallback,Td=jt.unstable_cancelCallback,ok=jt.unstable_shouldYield,ak=jt.unstable_requestPaint,Ve=jt.unstable_now,lk=jt.unstable_getCurrentPriorityLevel,vh=jt.unstable_ImmediatePriority,hg=jt.unstable_UserBlockingPriority,za=jt.unstable_NormalPriority,uk=jt.unstable_LowPriority,fg=jt.unstable_IdlePriority,bl=null,Bn=null;function ck(t){if(Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:dk,hk=Math.log,fk=Math.LN2;function dk(t){return t>>>=0,t===0?32:31-(hk(t)/fk|0)|0}var Go=64,Ho=4194304;function _i(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ma(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=_i(a):(i&=o,i!==0&&(r=_i(i)))}else o=n&~s,o!==0?r=_i(o):i!==0&&(r=_i(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vn(e),s=1<<n,r|=t[n],e&=~s;return r}function pk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-vn(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=pk(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function sc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dg(){var t=Go;return Go<<=1,!(Go&4194240)&&(Go=64),t}function au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function So(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vn(e),t[e]=n}function gk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-vn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function wh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-vn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ve=0;function pg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mg,bh,gg,yg,vg,ic=!1,Ko=[],yr=null,vr=null,wr=null,eo=new Map,to=new Map,cr=[],yk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cd(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function Ei(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Io(e),e!==null&&bh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function vk(t,e,n,r,s){switch(e){case"focusin":return yr=Ei(yr,t,e,n,r,s),!0;case"dragenter":return vr=Ei(vr,t,e,n,r,s),!0;case"mouseover":return wr=Ei(wr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return eo.set(i,Ei(eo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,to.set(i,Ei(to.get(i)||null,t,e,n,r,s)),!0}return!1}function wg(t){var e=Kr(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=ag(n),e!==null){t.blockedOn=e,vg(t.priority,function(){gg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function da(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ec=r,n.target.dispatchEvent(r),ec=null}else return e=Io(n),e!==null&&bh(e),t.blockedOn=n,!1;e.shift()}return!0}function Ad(t,e,n){da(t)&&n.delete(e)}function wk(){ic=!1,yr!==null&&da(yr)&&(yr=null),vr!==null&&da(vr)&&(vr=null),wr!==null&&da(wr)&&(wr=null),eo.forEach(Ad),to.forEach(Ad)}function Ii(t,e){t.blockedOn===e&&(t.blockedOn=null,ic||(ic=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,wk)))}function no(t){function e(s){return Ii(s,t)}if(0<Ko.length){Ii(Ko[0],t);for(var n=1;n<Ko.length;n++){var r=Ko[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&Ii(yr,t),vr!==null&&Ii(vr,t),wr!==null&&Ii(wr,t),eo.forEach(e),to.forEach(e),n=0;n<cr.length;n++)r=cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)wg(n),n.blockedOn===null&&cr.shift()}var js=ir.ReactCurrentBatchConfig,_a=!0;function bk(t,e,n,r){var s=ve,i=js.transition;js.transition=null;try{ve=1,kh(t,e,n,r)}finally{ve=s,js.transition=i}}function kk(t,e,n,r){var s=ve,i=js.transition;js.transition=null;try{ve=4,kh(t,e,n,r)}finally{ve=s,js.transition=i}}function kh(t,e,n,r){if(_a){var s=oc(t,e,n,r);if(s===null)yu(t,e,r,Fa,n),Cd(t,r);else if(vk(s,t,e,n,r))r.stopPropagation();else if(Cd(t,r),e&4&&-1<yk.indexOf(t)){for(;s!==null;){var i=Io(s);if(i!==null&&mg(i),i=oc(t,e,n,r),i===null&&yu(t,e,r,Fa,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else yu(t,e,r,null,n)}}var Fa=null;function oc(t,e,n,r){if(Fa=null,t=yh(r),t=Kr(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ag(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fa=t,null}function bg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lk()){case vh:return 1;case hg:return 4;case za:case uk:return 16;case fg:return 536870912;default:return 16}default:return 16}}var fr=null,xh=null,pa=null;function kg(){if(pa)return pa;var t,e=xh,n=e.length,r,s="value"in fr?fr.value:fr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return pa=s.slice(t,1<r?1-r:void 0)}function ma(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Dd(){return!1}function Gt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qo:Dd,this.isPropagationStopped=Dd,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),e}var di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sh=Gt(di),Eo=Be({},di,{view:0,detail:0}),xk=Gt(Eo),lu,uu,Ni,kl=Be({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ni&&(Ni&&t.type==="mousemove"?(lu=t.screenX-Ni.screenX,uu=t.screenY-Ni.screenY):uu=lu=0,Ni=t),lu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),$d=Gt(kl),Sk=Be({},kl,{dataTransfer:0}),Ek=Gt(Sk),Ik=Be({},Eo,{relatedTarget:0}),cu=Gt(Ik),Nk=Be({},di,{animationName:0,elapsedTime:0,pseudoElement:0}),Tk=Gt(Nk),Ck=Be({},di,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ak=Gt(Ck),Dk=Be({},di,{data:0}),zd=Gt(Dk),$k={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _k(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mk[t])?!!e[t]:!1}function Eh(){return _k}var Fk=Be({},Eo,{key:function(t){if(t.key){var e=$k[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eh,charCode:function(t){return t.type==="keypress"?ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lk=Gt(Fk),Rk=Be({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=Gt(Rk),Ok=Be({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eh}),Pk=Gt(Ok),Bk=Be({},di,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uk=Gt(Bk),Wk=Be({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jk=Gt(Wk),Vk=[9,13,27,32],Ih=tr&&"CompositionEvent"in window,Wi=null;tr&&"documentMode"in document&&(Wi=document.documentMode);var Gk=tr&&"TextEvent"in window&&!Wi,xg=tr&&(!Ih||Wi&&8<Wi&&11>=Wi),_d=String.fromCharCode(32),Fd=!1;function Sg(t,e){switch(t){case"keyup":return Vk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function Hk(t,e){switch(t){case"compositionend":return Eg(e);case"keypress":return e.which!==32?null:(Fd=!0,_d);case"textInput":return t=e.data,t===_d&&Fd?null:t;default:return null}}function Kk(t,e){if(As)return t==="compositionend"||!Ih&&Sg(t,e)?(t=kg(),pa=xh=fr=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xg&&e.locale!=="ko"?null:e.data;default:return null}}var qk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qk[t.type]:e==="textarea"}function Ig(t,e,n,r){ng(r),e=La(e,"onChange"),0<e.length&&(n=new Sh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ji=null,ro=null;function Yk(t){Lg(t,0)}function xl(t){var e=zs(t);if(Ym(e))return t}function Xk(t,e){if(t==="change")return e}var Ng=!1;if(tr){var hu;if(tr){var fu="oninput"in document;if(!fu){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),fu=typeof Rd.oninput=="function"}hu=fu}else hu=!1;Ng=hu&&(!document.documentMode||9<document.documentMode)}function Od(){ji&&(ji.detachEvent("onpropertychange",Tg),ro=ji=null)}function Tg(t){if(t.propertyName==="value"&&xl(ro)){var e=[];Ig(e,ro,t,yh(t)),og(Yk,e)}}function Jk(t,e,n){t==="focusin"?(Od(),ji=e,ro=n,ji.attachEvent("onpropertychange",Tg)):t==="focusout"&&Od()}function Zk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(ro)}function Qk(t,e){if(t==="click")return xl(e)}function ex(t,e){if(t==="input"||t==="change")return xl(e)}function tx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xn=typeof Object.is=="function"?Object.is:tx;function so(t,e){if(xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Wu.call(e,s)||!xn(t[s],e[s]))return!1}return!0}function Pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bd(t,e){var n=Pd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pd(n)}}function Cg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ag(){for(var t=window,e=Aa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Aa(t.document)}return e}function Nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nx(t){var e=Ag(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cg(n.ownerDocument.documentElement,n)){if(r!==null&&Nh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Bd(n,i);var o=Bd(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rx=tr&&"documentMode"in document&&11>=document.documentMode,Ds=null,ac=null,Vi=null,lc=!1;function Ud(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lc||Ds==null||Ds!==Aa(r)||(r=Ds,"selectionStart"in r&&Nh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vi&&so(Vi,r)||(Vi=r,r=La(ac,"onSelect"),0<r.length&&(e=new Sh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ds)))}function Yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},du={},Dg={};tr&&(Dg=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Sl(t){if(du[t])return du[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dg)return du[t]=e[n];return t}var $g=Sl("animationend"),zg=Sl("animationiteration"),Mg=Sl("animationstart"),_g=Sl("transitionend"),Fg=new Map,Wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){Fg.set(t,e),ds(e,[t])}for(var pu=0;pu<Wd.length;pu++){var mu=Wd[pu],sx=mu.toLowerCase(),ix=mu[0].toUpperCase()+mu.slice(1);Rr(sx,"on"+ix)}Rr($g,"onAnimationEnd");Rr(zg,"onAnimationIteration");Rr(Mg,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(_g,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));function jd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sk(r,e,void 0,t),t.currentTarget=null}function Lg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;jd(s,a,u),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;jd(s,a,u),i=l}}}if($a)throw t=rc,$a=!1,rc=null,t}function Ee(t,e){var n=e[dc];n===void 0&&(n=e[dc]=new Set);var r=t+"__bubble";n.has(r)||(Rg(e,t,2,!1),n.add(r))}function gu(t,e,n){var r=0;e&&(r|=4),Rg(n,t,r,e)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function io(t){if(!t[Xo]){t[Xo]=!0,Vm.forEach(function(n){n!=="selectionchange"&&(ox.has(n)||gu(n,!1,t),gu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xo]||(e[Xo]=!0,gu("selectionchange",!1,e))}}function Rg(t,e,n,r){switch(bg(e)){case 1:var s=bk;break;case 4:s=kk;break;default:s=kh}n=s.bind(null,e,n,t),s=void 0,!nc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function yu(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=Kr(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}og(function(){var u=i,c=yh(n),h=[];e:{var f=Fg.get(t);if(f!==void 0){var d=Sh,p=t;switch(t){case"keypress":if(ma(n)===0)break e;case"keydown":case"keyup":d=Lk;break;case"focusin":p="focus",d=cu;break;case"focusout":p="blur",d=cu;break;case"beforeblur":case"afterblur":d=cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Ek;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Pk;break;case $g:case zg:case Mg:d=Tk;break;case _g:d=Uk;break;case"scroll":d=xk;break;case"wheel":d=jk;break;case"copy":case"cut":case"paste":d=Ak;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Md}var y=(e&4)!==0,w=!y&&t==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var m=u,v;m!==null;){v=m;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,g!==null&&(k=Qi(m,g),k!=null&&y.push(oo(m,k,v)))),w)break;m=m.return}0<y.length&&(f=new d(f,p,null,n,c),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",f&&n!==ec&&(p=n.relatedTarget||n.fromElement)&&(Kr(p)||p[nr]))break e;if((d||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,d?(p=n.relatedTarget||n.toElement,d=u,p=p?Kr(p):null,p!==null&&(w=ps(p),p!==w||p.tag!==5&&p.tag!==6)&&(p=null)):(d=null,p=u),d!==p)){if(y=$d,k="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Md,k="onPointerLeave",g="onPointerEnter",m="pointer"),w=d==null?f:zs(d),v=p==null?f:zs(p),f=new y(k,m+"leave",d,n,c),f.target=w,f.relatedTarget=v,k=null,Kr(c)===u&&(y=new y(g,m+"enter",p,n,c),y.target=v,y.relatedTarget=w,k=y),w=k,d&&p)t:{for(y=d,g=p,m=0,v=y;v;v=ks(v))m++;for(v=0,k=g;k;k=ks(k))v++;for(;0<m-v;)y=ks(y),m--;for(;0<v-m;)g=ks(g),v--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=ks(y),g=ks(g)}y=null}else y=null;d!==null&&Vd(h,f,d,y,!1),p!==null&&w!==null&&Vd(h,w,p,y,!0)}}e:{if(f=u?zs(u):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var S=Xk;else if(Ld(f))if(Ng)S=ex;else{S=Zk;var C=Jk}else(d=f.nodeName)&&d.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Qk);if(S&&(S=S(t,u))){Ig(h,S,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Yu(f,"number",f.value)}switch(C=u?zs(u):window,t){case"focusin":(Ld(C)||C.contentEditable==="true")&&(Ds=C,ac=u,Vi=null);break;case"focusout":Vi=ac=Ds=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,Ud(h,n,c);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":Ud(h,n,c)}var z;if(Ih)e:{switch(t){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else As?Sg(t,n)&&($="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(xg&&n.locale!=="ko"&&(As||$!=="onCompositionStart"?$==="onCompositionEnd"&&As&&(z=kg()):(fr=c,xh="value"in fr?fr.value:fr.textContent,As=!0)),C=La(u,$),0<C.length&&($=new zd($,t,null,n,c),h.push({event:$,listeners:C}),z?$.data=z:(z=Eg(n),z!==null&&($.data=z)))),(z=Gk?Hk(t,n):Kk(t,n))&&(u=La(u,"onBeforeInput"),0<u.length&&(c=new zd("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=z))}Lg(h,e)})}function oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function La(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Qi(t,n),i!=null&&r.unshift(oo(t,i,s)),i=Qi(t,e),i!=null&&r.push(oo(t,i,s))),t=t.return}return r}function ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vd(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,s?(l=Qi(n,i),l!=null&&o.unshift(oo(n,l,a))):s||(l=Qi(n,i),l!=null&&o.push(oo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ax=/\r\n?/g,lx=/\u0000|\uFFFD/g;function Gd(t){return(typeof t=="string"?t:""+t).replace(ax,`
`).replace(lx,"")}function Jo(t,e,n){if(e=Gd(e),Gd(t)!==e&&n)throw Error(B(425))}function Ra(){}var uc=null,cc=null;function hc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fc=typeof setTimeout=="function"?setTimeout:void 0,ux=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,cx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(t){return Hd.resolve(null).then(t).catch(hx)}:fc;function hx(t){setTimeout(function(){throw t})}function vu(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),no(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);no(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var pi=Math.random().toString(36).slice(2),Rn="__reactFiber$"+pi,ao="__reactProps$"+pi,nr="__reactContainer$"+pi,dc="__reactEvents$"+pi,fx="__reactListeners$"+pi,dx="__reactHandles$"+pi;function Kr(t){var e=t[Rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[Rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kd(t);t!==null;){if(n=t[Rn])return n;t=Kd(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[Rn]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function El(t){return t[ao]||null}var pc=[],Ms=-1;function Or(t){return{current:t}}function Ce(t){0>Ms||(t.current=pc[Ms],pc[Ms]=null,Ms--)}function Se(t,e){Ms++,pc[Ms]=t.current,t.current=e}var Cr={},yt=Or(Cr),Mt=Or(!1),rs=Cr;function Js(t,e){var n=t.type.contextTypes;if(!n)return Cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function _t(t){return t=t.childContextTypes,t!=null}function Oa(){Ce(Mt),Ce(yt)}function qd(t,e,n){if(yt.current!==Cr)throw Error(B(168));Se(yt,e),Se(Mt,n)}function Og(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,Jb(t)||"Unknown",s));return Be({},n,r)}function Pa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,rs=yt.current,Se(yt,t),Se(Mt,Mt.current),!0}function Yd(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=Og(t,e,rs),r.__reactInternalMemoizedMergedChildContext=t,Ce(Mt),Ce(yt),Se(yt,t)):Ce(Mt),Se(Mt,n)}var qn=null,Il=!1,wu=!1;function Pg(t){qn===null?qn=[t]:qn.push(t)}function px(t){Il=!0,Pg(t)}function Pr(){if(!wu&&qn!==null){wu=!0;var t=0,e=ve;try{var n=qn;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,Il=!1}catch(s){throw qn!==null&&(qn=qn.slice(t+1)),cg(vh,Pr),s}finally{ve=e,wu=!1}}return null}var _s=[],Fs=0,Ba=null,Ua=0,Jt=[],Zt=0,ss=null,Jn=1,Zn="";function Vr(t,e){_s[Fs++]=Ua,_s[Fs++]=Ba,Ba=t,Ua=e}function Bg(t,e,n){Jt[Zt++]=Jn,Jt[Zt++]=Zn,Jt[Zt++]=ss,ss=t;var r=Jn;t=Zn;var s=32-vn(r)-1;r&=~(1<<s),n+=1;var i=32-vn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Jn=1<<32-vn(e)+s|n<<s|r,Zn=i+t}else Jn=1<<i|n<<s|r,Zn=t}function Th(t){t.return!==null&&(Vr(t,1),Bg(t,1,0))}function Ch(t){for(;t===Ba;)Ba=_s[--Fs],_s[Fs]=null,Ua=_s[--Fs],_s[Fs]=null;for(;t===ss;)ss=Jt[--Zt],Jt[Zt]=null,Zn=Jt[--Zt],Jt[Zt]=null,Jn=Jt[--Zt],Jt[Zt]=null}var Wt=null,Ut=null,Fe=!1,pn=null;function Ug(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,Ut=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ss!==null?{id:Jn,overflow:Zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,Ut=null,!0):!1;default:return!1}}function mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gc(t){if(Fe){var e=Ut;if(e){var n=e;if(!Xd(t,e)){if(mc(t))throw Error(B(418));e=br(n.nextSibling);var r=Wt;e&&Xd(t,e)?Ug(r,n):(t.flags=t.flags&-4097|2,Fe=!1,Wt=t)}}else{if(mc(t))throw Error(B(418));t.flags=t.flags&-4097|2,Fe=!1,Wt=t}}}function Jd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function Zo(t){if(t!==Wt)return!1;if(!Fe)return Jd(t),Fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hc(t.type,t.memoizedProps)),e&&(e=Ut)){if(mc(t))throw Wg(),Error(B(418));for(;e;)Ug(t,e),e=br(e.nextSibling)}if(Jd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=Wt?br(t.stateNode.nextSibling):null;return!0}function Wg(){for(var t=Ut;t;)t=br(t.nextSibling)}function Zs(){Ut=Wt=null,Fe=!1}function Ah(t){pn===null?pn=[t]:pn.push(t)}var mx=ir.ReactCurrentBatchConfig;function fn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Wa=Or(null),ja=null,Ls=null,Dh=null;function $h(){Dh=Ls=ja=null}function zh(t){var e=Wa.current;Ce(Wa),t._currentValue=e}function yc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){ja=t,Dh=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zt=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(Dh!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(ja===null)throw Error(B(308));Ls=t,ja.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var qr=null;function Mh(t){qr===null?qr=[t]:qr.push(t)}function jg(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Mh(e)):(n.next=s.next,s.next=n),e.interleaved=n,rr(t,r)}function rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function _h(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,rr(t,n)}return s=r.interleaved,s===null?(e.next=e,Mh(r)):(e.next=s.next,s.next=e),r.interleaved=e,rr(t,n)}function ga(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wh(t,n)}}function Zd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Va(t,e,n,r){var s=t.updateQueue;lr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?i=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(i!==null){var h=s.baseState;o=0,c=u=l=null,a=i;do{var f=a.lane,d=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,y=a;switch(f=e,d=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){h=p.call(d,h,f);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,f=typeof p=="function"?p.call(d,h,f):p,f==null)break e;h=Be({},h,f);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[a]:f.push(a))}else d={eventTime:d,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=d,l=h):c=c.next=d,o|=f;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;f=a,a=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(1);if(c===null&&(l=h),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=c,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);os|=o,t.lanes=o,t.memoizedState=h}}function Qd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var Gg=new jm.Component().refs;function vc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nl={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),s=Sr(t),i=Qn(r,s);i.payload=e,n!=null&&(i.callback=n),e=kr(t,i,s),e!==null&&(wn(e,t,s,r),ga(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),s=Sr(t),i=Qn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=kr(t,i,s),e!==null&&(wn(e,t,s,r),ga(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=Sr(t),s=Qn(n,r);s.tag=2,e!=null&&(s.callback=e),e=kr(t,s,r),e!==null&&(wn(e,t,r,n),ga(e,t,r))}};function ep(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!so(n,r)||!so(s,i):!0}function Hg(t,e,n){var r=!1,s=Cr,i=e.contextType;return typeof i=="object"&&i!==null?i=sn(i):(s=_t(e)?rs:yt.current,r=e.contextTypes,i=(r=r!=null)?Js(t,s):Cr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function tp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nl.enqueueReplaceState(e,e.state,null)}function wc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs=Gg,_h(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=sn(i):(i=_t(e)?rs:yt.current,s.context=Js(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(vc(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Nl.enqueueReplaceState(s,s.state,null),Va(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ti(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;a===Gg&&(a=s.refs={}),o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Qo(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function np(t){var e=t._init;return e(t._payload)}function Kg(t){function e(g,m){if(t){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function s(g,m){return g=Er(g,m),g.index=0,g.sibling=null,g}function i(g,m,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=2,m):v):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,v,k){return m===null||m.tag!==6?(m=Nu(v,g.mode,k),m.return=g,m):(m=s(m,v),m.return=g,m)}function l(g,m,v,k){var S=v.type;return S===Cs?c(g,m,v.props.children,k,v.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ar&&np(S)===m.type)?(k=s(m,v.props),k.ref=Ti(g,m,v),k.return=g,k):(k=xa(v.type,v.key,v.props,null,g.mode,k),k.ref=Ti(g,m,v),k.return=g,k)}function u(g,m,v,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Tu(v,g.mode,k),m.return=g,m):(m=s(m,v.children||[]),m.return=g,m)}function c(g,m,v,k,S){return m===null||m.tag!==7?(m=Zr(v,g.mode,k,S),m.return=g,m):(m=s(m,v),m.return=g,m)}function h(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Nu(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wo:return v=xa(m.type,m.key,m.props,null,g.mode,v),v.ref=Ti(g,null,m),v.return=g,v;case Ts:return m=Tu(m,g.mode,v),m.return=g,m;case ar:var k=m._init;return h(g,k(m._payload),v)}if(Mi(m)||xi(m))return m=Zr(m,g.mode,v,null),m.return=g,m;Qo(g,m)}return null}function f(g,m,v,k){var S=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(g,m,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wo:return v.key===S?l(g,m,v,k):null;case Ts:return v.key===S?u(g,m,v,k):null;case ar:return S=v._init,f(g,m,S(v._payload),k)}if(Mi(v)||xi(v))return S!==null?null:c(g,m,v,k,null);Qo(g,v)}return null}function d(g,m,v,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(v)||null,a(m,g,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Wo:return g=g.get(k.key===null?v:k.key)||null,l(m,g,k,S);case Ts:return g=g.get(k.key===null?v:k.key)||null,u(m,g,k,S);case ar:var C=k._init;return d(g,m,v,C(k._payload),S)}if(Mi(k)||xi(k))return g=g.get(v)||null,c(m,g,k,S,null);Qo(m,k)}return null}function p(g,m,v,k){for(var S=null,C=null,z=m,$=m=0,F=null;z!==null&&$<v.length;$++){z.index>$?(F=z,z=null):F=z.sibling;var L=f(g,z,v[$],k);if(L===null){z===null&&(z=F);break}t&&z&&L.alternate===null&&e(g,z),m=i(L,m,$),C===null?S=L:C.sibling=L,C=L,z=F}if($===v.length)return n(g,z),Fe&&Vr(g,$),S;if(z===null){for(;$<v.length;$++)z=h(g,v[$],k),z!==null&&(m=i(z,m,$),C===null?S=z:C.sibling=z,C=z);return Fe&&Vr(g,$),S}for(z=r(g,z);$<v.length;$++)F=d(z,g,$,v[$],k),F!==null&&(t&&F.alternate!==null&&z.delete(F.key===null?$:F.key),m=i(F,m,$),C===null?S=F:C.sibling=F,C=F);return t&&z.forEach(function(W){return e(g,W)}),Fe&&Vr(g,$),S}function y(g,m,v,k){var S=xi(v);if(typeof S!="function")throw Error(B(150));if(v=S.call(v),v==null)throw Error(B(151));for(var C=S=null,z=m,$=m=0,F=null,L=v.next();z!==null&&!L.done;$++,L=v.next()){z.index>$?(F=z,z=null):F=z.sibling;var W=f(g,z,L.value,k);if(W===null){z===null&&(z=F);break}t&&z&&W.alternate===null&&e(g,z),m=i(W,m,$),C===null?S=W:C.sibling=W,C=W,z=F}if(L.done)return n(g,z),Fe&&Vr(g,$),S;if(z===null){for(;!L.done;$++,L=v.next())L=h(g,L.value,k),L!==null&&(m=i(L,m,$),C===null?S=L:C.sibling=L,C=L);return Fe&&Vr(g,$),S}for(z=r(g,z);!L.done;$++,L=v.next())L=d(z,g,$,L.value,k),L!==null&&(t&&L.alternate!==null&&z.delete(L.key===null?$:L.key),m=i(L,m,$),C===null?S=L:C.sibling=L,C=L);return t&&z.forEach(function(K){return e(g,K)}),Fe&&Vr(g,$),S}function w(g,m,v,k){if(typeof v=="object"&&v!==null&&v.type===Cs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Wo:e:{for(var S=v.key,C=m;C!==null;){if(C.key===S){if(S=v.type,S===Cs){if(C.tag===7){n(g,C.sibling),m=s(C,v.props.children),m.return=g,g=m;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ar&&np(S)===C.type){n(g,C.sibling),m=s(C,v.props),m.ref=Ti(g,C,v),m.return=g,g=m;break e}n(g,C);break}else e(g,C);C=C.sibling}v.type===Cs?(m=Zr(v.props.children,g.mode,k,v.key),m.return=g,g=m):(k=xa(v.type,v.key,v.props,null,g.mode,k),k.ref=Ti(g,m,v),k.return=g,g=k)}return o(g);case Ts:e:{for(C=v.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(g,m.sibling),m=s(m,v.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=Tu(v,g.mode,k),m.return=g,g=m}return o(g);case ar:return C=v._init,w(g,m,C(v._payload),k)}if(Mi(v))return p(g,m,v,k);if(xi(v))return y(g,m,v,k);Qo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(g,m.sibling),m=s(m,v),m.return=g,g=m):(n(g,m),m=Nu(v,g.mode,k),m.return=g,g=m),o(g)):n(g,m)}return w}var Qs=Kg(!0),qg=Kg(!1),No={},Un=Or(No),lo=Or(No),uo=Or(No);function Yr(t){if(t===No)throw Error(B(174));return t}function Fh(t,e){switch(Se(uo,e),Se(lo,t),Se(Un,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ju(e,t)}Ce(Un),Se(Un,e)}function ei(){Ce(Un),Ce(lo),Ce(uo)}function Yg(t){Yr(uo.current);var e=Yr(Un.current),n=Ju(e,t.type);e!==n&&(Se(lo,t),Se(Un,n))}function Lh(t){lo.current===t&&(Ce(Un),Ce(lo))}var Oe=Or(0);function Ga(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bu=[];function Rh(){for(var t=0;t<bu.length;t++)bu[t]._workInProgressVersionPrimary=null;bu.length=0}var ya=ir.ReactCurrentDispatcher,ku=ir.ReactCurrentBatchConfig,is=0,Pe=null,Ze=null,nt=null,Ha=!1,Gi=!1,co=0,gx=0;function pt(){throw Error(B(321))}function Oh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xn(t[n],e[n]))return!1;return!0}function Ph(t,e,n,r,s,i){if(is=i,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ya.current=t===null||t.memoizedState===null?bx:kx,t=n(r,s),Gi){i=0;do{if(Gi=!1,co=0,25<=i)throw Error(B(301));i+=1,nt=Ze=null,e.updateQueue=null,ya.current=xx,t=n(r,s)}while(Gi)}if(ya.current=Ka,e=Ze!==null&&Ze.next!==null,is=0,nt=Ze=Pe=null,Ha=!1,e)throw Error(B(300));return t}function Bh(){var t=co!==0;return co=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Pe.memoizedState=nt=t:nt=nt.next=t,nt}function on(){if(Ze===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=nt===null?Pe.memoizedState:nt.next;if(e!==null)nt=e,Ze=t;else{if(t===null)throw Error(B(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},nt===null?Pe.memoizedState=nt=t:nt=nt.next=t}return nt}function ho(t,e){return typeof e=="function"?e(t):e}function xu(t){var e=on(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Ze,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,u=i;do{var c=u.lane;if((is&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Pe.lanes|=c,os|=c}u=u.next}while(u!==null&&u!==i);l===null?o=r:l.next=a,xn(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Pe.lanes|=i,os|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Su(t){var e=on(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);xn(i,e.memoizedState)||(zt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Xg(){}function Jg(t,e){var n=Pe,r=on(),s=e(),i=!xn(r.memoizedState,s);if(i&&(r.memoizedState=s,zt=!0),r=r.queue,Uh(ey.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,fo(9,Qg.bind(null,n,r,s,e),void 0,null),st===null)throw Error(B(349));is&30||Zg(n,e,s)}return s}function Zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qg(t,e,n,r){e.value=n,e.getSnapshot=r,ty(e)&&ny(t)}function ey(t,e,n){return n(function(){ty(e)&&ny(t)})}function ty(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xn(t,n)}catch{return!0}}function ny(t){var e=rr(t,1);e!==null&&wn(e,t,1,-1)}function rp(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=wx.bind(null,Pe,t),[e.memoizedState,t]}function fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ry(){return on().memoizedState}function va(t,e,n,r){var s=zn();Pe.flags|=t,s.memoizedState=fo(1|e,n,void 0,r===void 0?null:r)}function Tl(t,e,n,r){var s=on();r=r===void 0?null:r;var i=void 0;if(Ze!==null){var o=Ze.memoizedState;if(i=o.destroy,r!==null&&Oh(r,o.deps)){s.memoizedState=fo(e,n,i,r);return}}Pe.flags|=t,s.memoizedState=fo(1|e,n,i,r)}function sp(t,e){return va(8390656,8,t,e)}function Uh(t,e){return Tl(2048,8,t,e)}function sy(t,e){return Tl(4,2,t,e)}function iy(t,e){return Tl(4,4,t,e)}function oy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ay(t,e,n){return n=n!=null?n.concat([t]):null,Tl(4,4,oy.bind(null,e,t),n)}function Wh(){}function ly(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Oh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uy(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Oh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cy(t,e,n){return is&21?(xn(n,e)||(n=dg(),Pe.lanes|=n,os|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n)}function yx(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=ku.transition;ku.transition={};try{t(!1),e()}finally{ve=n,ku.transition=r}}function hy(){return on().memoizedState}function vx(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fy(t))dy(e,n);else if(n=jg(t,e,n,r),n!==null){var s=St();wn(n,t,r,s),py(n,e,r)}}function wx(t,e,n){var r=Sr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fy(t))dy(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,xn(a,o)){var l=e.interleaved;l===null?(s.next=s,Mh(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=jg(t,e,s,r),n!==null&&(s=St(),wn(n,t,r,s),py(n,e,r))}}function fy(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function dy(t,e){Gi=Ha=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function py(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wh(t,n)}}var Ka={readContext:sn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},bx={readContext:sn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,va(4194308,4,oy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return va(4194308,4,t,e)},useInsertionEffect:function(t,e){return va(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vx.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:rp,useDebugValue:Wh,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=rp(!1),e=t[0];return t=yx.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,s=zn();if(Fe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),st===null)throw Error(B(349));is&30||Zg(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,sp(ey.bind(null,r,i,t),[t]),r.flags|=2048,fo(9,Qg.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=zn(),e=st.identifierPrefix;if(Fe){var n=Zn,r=Jn;n=(r&~(1<<32-vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kx={readContext:sn,useCallback:ly,useContext:sn,useEffect:Uh,useImperativeHandle:ay,useInsertionEffect:sy,useLayoutEffect:iy,useMemo:uy,useReducer:xu,useRef:ry,useState:function(){return xu(ho)},useDebugValue:Wh,useDeferredValue:function(t){var e=on();return cy(e,Ze.memoizedState,t)},useTransition:function(){var t=xu(ho)[0],e=on().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:Jg,useId:hy,unstable_isNewReconciler:!1},xx={readContext:sn,useCallback:ly,useContext:sn,useEffect:Uh,useImperativeHandle:ay,useInsertionEffect:sy,useLayoutEffect:iy,useMemo:uy,useReducer:Su,useRef:ry,useState:function(){return Su(ho)},useDebugValue:Wh,useDeferredValue:function(t){var e=on();return Ze===null?e.memoizedState=t:cy(e,Ze.memoizedState,t)},useTransition:function(){var t=Su(ho)[0],e=on().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:Jg,useId:hy,unstable_isNewReconciler:!1};function ti(t,e){try{var n="",r=e;do n+=Xb(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Sx=typeof WeakMap=="function"?WeakMap:Map;function my(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ya||(Ya=!0,Dc=r),bc(t,e)},n}function gy(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){bc(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){bc(t,e),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ip(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Sx;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Rx.bind(null,t,e,n),e.then(t,t))}function op(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ap(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var Ex=ir.ReactCurrentOwner,zt=!1;function wt(t,e,n,r){e.child=t===null?qg(e,null,n,r):Qs(e,t.child,n,r)}function lp(t,e,n,r,s){n=n.render;var i=e.ref;return Vs(e,s),r=Ph(t,e,n,r,i,s),n=Bh(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,sr(t,e,s)):(Fe&&n&&Th(e),e.flags|=1,wt(t,e,r,s),e.child)}function up(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Xh(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,yy(t,e,i,r,s)):(t=xa(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:so,n(o,r)&&t.ref===e.ref)return sr(t,e,s)}return e.flags|=1,t=Er(i,r),t.ref=e.ref,t.return=e,e.child=t}function yy(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(so(i,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,sr(t,e,s)}return kc(t,e,n,r,s)}function vy(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Os,Bt),Bt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(Os,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Se(Os,Bt),Bt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Se(Os,Bt),Bt|=r;return wt(t,e,s,n),e.child}function wy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kc(t,e,n,r,s){var i=_t(n)?rs:yt.current;return i=Js(e,i),Vs(e,s),n=Ph(t,e,n,r,i,s),r=Bh(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,sr(t,e,s)):(Fe&&r&&Th(e),e.flags|=1,wt(t,e,n,s),e.child)}function cp(t,e,n,r,s){if(_t(n)){var i=!0;Pa(e)}else i=!1;if(Vs(e,s),e.stateNode===null)wa(t,e),Hg(e,n,r),wc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=sn(u):(u=_t(n)?rs:yt.current,u=Js(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&tp(e,o,r,u),lr=!1;var f=e.memoizedState;o.state=f,Va(e,r,o,s),l=e.memoizedState,a!==r||f!==l||Mt.current||lr?(typeof c=="function"&&(vc(e,n,c,r),l=e.memoizedState),(a=lr||ep(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Vg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:fn(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=sn(l):(l=_t(n)?rs:yt.current,l=Js(e,l));var d=n.getDerivedStateFromProps;(c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&tp(e,o,r,l),lr=!1,f=e.memoizedState,o.state=f,Va(e,r,o,s);var p=e.memoizedState;a!==h||f!==p||Mt.current||lr?(typeof d=="function"&&(vc(e,n,d,r),p=e.memoizedState),(u=lr||ep(e,n,u,r,f,p,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return xc(t,e,n,r,i,s)}function xc(t,e,n,r,s,i){wy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Yd(e,n,!1),sr(t,e,i);r=e.stateNode,Ex.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,i),e.child=Qs(e,null,a,i)):wt(t,e,a,i),e.memoizedState=r.state,s&&Yd(e,n,!0),e.child}function by(t){var e=t.stateNode;e.pendingContext?qd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qd(t,e.context,!1),Fh(t,e.containerInfo)}function hp(t,e,n,r,s){return Zs(),Ah(s),e.flags|=256,wt(t,e,n,r),e.child}var Sc={dehydrated:null,treeContext:null,retryLane:0};function Ec(t){return{baseLanes:t,cachePool:null,transitions:null}}function ky(t,e,n){var r=e.pendingProps,s=Oe.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Se(Oe,s&1),t===null)return gc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Dl(o,r,0,null),t=Zr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Ec(n),e.memoizedState=Sc,t):jh(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Ix(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Er(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Er(a,i):(i=Zr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Ec(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Sc,r}return i=t.child,t=i.sibling,r=Er(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jh(t,e){return e=Dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ea(t,e,n,r){return r!==null&&Ah(r),Qs(e,t.child,null,n),t=jh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ix(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Eu(Error(B(422))),ea(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Dl({mode:"visible",children:r.children},s,0,null),i=Zr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=Ec(o),e.memoizedState=Sc,i);if(!(e.mode&1))return ea(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(B(419)),r=Eu(i,r,void 0),ea(t,e,o,r)}if(a=(o&t.childLanes)!==0,zt||a){if(r=st,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,rr(t,s),wn(r,t,s,-1))}return Yh(),r=Eu(Error(B(421))),ea(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Ox.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ut=br(s.nextSibling),Wt=e,Fe=!0,pn=null,t!==null&&(Jt[Zt++]=Jn,Jt[Zt++]=Zn,Jt[Zt++]=ss,Jn=t.id,Zn=t.overflow,ss=e),e=jh(e,r.children),e.flags|=4096,e)}function fp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yc(t.return,e,n)}function Iu(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function xy(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(wt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fp(t,n,e);else if(t.tag===19)fp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Ga(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Iu(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Ga(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Iu(e,!0,n,null,i);break;case"together":Iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),os|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Nx(t,e,n){switch(e.tag){case 3:by(e),Zs();break;case 5:Yg(e);break;case 1:_t(e.type)&&Pa(e);break;case 4:Fh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Se(Wa,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?ky(t,e,n):(Se(Oe,Oe.current&1),t=sr(t,e,n),t!==null?t.sibling:null);Se(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return xy(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Se(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,vy(t,e,n)}return sr(t,e,n)}var Sy,Ic,Ey,Iy;Sy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ic=function(){};Ey=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Yr(Un.current);var i=null;switch(n){case"input":s=Ku(t,s),r=Ku(t,r),i=[];break;case"select":s=Be({},s,{value:void 0}),r=Be({},r,{value:void 0}),i=[];break;case"textarea":s=Xu(t,s),r=Xu(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ra)}Zu(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ji.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ji.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ee("scroll",t),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};Iy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ci(t,e){if(!Fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Tx(t,e,n){var r=e.pendingProps;switch(Ch(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return _t(e.type)&&Oa(),mt(e),null;case 3:return r=e.stateNode,ei(),Ce(Mt),Ce(yt),Rh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pn!==null&&(Mc(pn),pn=null))),Ic(t,e),mt(e),null;case 5:Lh(e);var s=Yr(uo.current);if(n=e.type,t!==null&&e.stateNode!=null)Ey(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return mt(e),null}if(t=Yr(Un.current),Zo(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Rn]=e,r[ao]=i,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(s=0;s<Fi.length;s++)Ee(Fi[s],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":kd(r,i),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ee("invalid",r);break;case"textarea":Sd(r,i),Ee("invalid",r)}Zu(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Jo(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Jo(r.textContent,a,t),s=["children",""+a]):Ji.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":jo(r),xd(r,i,!0);break;case"textarea":jo(r),Ed(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ra)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rn]=e,t[ao]=r,Sy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qu(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),s=r;break;case"iframe":case"object":case"embed":Ee("load",t),s=r;break;case"video":case"audio":for(s=0;s<Fi.length;s++)Ee(Fi[s],t);s=r;break;case"source":Ee("error",t),s=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),s=r;break;case"details":Ee("toggle",t),s=r;break;case"input":kd(t,r),s=Ku(t,r),Ee("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Be({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":Sd(t,r),s=Xu(t,r),Ee("invalid",t);break;default:s=r}Zu(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?tg(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qm(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zi(t,l):typeof l=="number"&&Zi(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ji.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Ee("scroll",t):l!=null&&dh(t,i,l,o))}switch(n){case"input":jo(t),xd(t,r,!1);break;case"textarea":jo(t),Ed(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Tr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Bs(t,!!r.multiple,i,!1):r.defaultValue!=null&&Bs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Ra)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)Iy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Yr(uo.current),Yr(Un.current),Zo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rn]=e,(i=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:Jo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jo(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=e,e.stateNode=r}return mt(e),null;case 13:if(Ce(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Fe&&Ut!==null&&e.mode&1&&!(e.flags&128))Wg(),Zs(),e.flags|=98560,i=!1;else if(i=Zo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[Rn]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),i=!1}else pn!==null&&(Mc(pn),pn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?Qe===0&&(Qe=3):Yh())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return ei(),Ic(t,e),t===null&&io(e.stateNode.containerInfo),mt(e),null;case 10:return zh(e.type._context),mt(e),null;case 17:return _t(e.type)&&Oa(),mt(e),null;case 19:if(Ce(Oe),i=e.memoizedState,i===null)return mt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ci(i,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ga(t),o!==null){for(e.flags|=128,Ci(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Oe,Oe.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ve()>ni&&(e.flags|=128,r=!0,Ci(i,!1),e.lanes=4194304)}else{if(!r)if(t=Ga(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ci(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Fe)return mt(e),null}else 2*Ve()-i.renderingStartTime>ni&&n!==1073741824&&(e.flags|=128,r=!0,Ci(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ve(),e.sibling=null,n=Oe.current,Se(Oe,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return qh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function Cx(t,e){switch(Ch(e),e.tag){case 1:return _t(e.type)&&Oa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ei(),Ce(Mt),Ce(yt),Rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lh(e),null;case 13:if(Ce(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(Oe),null;case 4:return ei(),null;case 10:return zh(e.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var ta=!1,gt=!1,Ax=typeof WeakSet=="function"?WeakSet:Set,G=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(t,e,r)}else n.current=null}function Nc(t,e,n){try{n()}catch(r){We(t,e,r)}}var dp=!1;function Dx(t,e){if(uc=_a,t=Ag(),Nh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var d;h!==n||s!==0&&h.nodeType!==3||(a=o+s),h!==i||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(d=h.firstChild)!==null;)f=h,h=d;for(;;){if(h===t)break t;if(f===n&&++u===s&&(a=o),f===i&&++c===r&&(l=o),(d=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=d}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cc={focusedElem:t,selectionRange:n},_a=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,w=p.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:fn(e.type,y),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(k){We(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return p=dp,dp=!1,p}function Hi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Nc(e,n,i)}s=s.next}while(s!==r)}}function Cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Tc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ny(t){var e=t.alternate;e!==null&&(t.alternate=null,Ny(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[ao],delete e[dc],delete e[fx],delete e[dx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ty(t){return t.tag===5||t.tag===3||t.tag===4}function pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ty(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ra));else if(r!==4&&(t=t.child,t!==null))for(Cc(t,e,n),t=t.sibling;t!==null;)Cc(t,e,n),t=t.sibling}function Ac(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ac(t,e,n),t=t.sibling;t!==null;)Ac(t,e,n),t=t.sibling}var ut=null,dn=!1;function or(t,e,n){for(n=n.child;n!==null;)Cy(t,e,n),n=n.sibling}function Cy(t,e,n){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:gt||Rs(n,e);case 6:var r=ut,s=dn;ut=null,or(t,e,n),ut=r,dn=s,ut!==null&&(dn?(t=ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(dn?(t=ut,n=n.stateNode,t.nodeType===8?vu(t.parentNode,n):t.nodeType===1&&vu(t,n),no(t)):vu(ut,n.stateNode));break;case 4:r=ut,s=dn,ut=n.stateNode.containerInfo,dn=!0,or(t,e,n),ut=r,dn=s;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Nc(n,e,o),s=s.next}while(s!==r)}or(t,e,n);break;case 1:if(!gt&&(Rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){We(n,e,a)}or(t,e,n);break;case 21:or(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,or(t,e,n),gt=r):or(t,e,n);break;default:or(t,e,n)}}function mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ax),e.forEach(function(r){var s=Px.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ut=a.stateNode,dn=!1;break e;case 3:ut=a.stateNode.containerInfo,dn=!0;break e;case 4:ut=a.stateNode.containerInfo,dn=!0;break e}a=a.return}if(ut===null)throw Error(B(160));Cy(i,o,s),ut=null,dn=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){We(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ay(e,t),e=e.sibling}function Ay(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),$n(t),r&4){try{Hi(3,t,t.return),Cl(3,t)}catch(y){We(t,t.return,y)}try{Hi(5,t,t.return)}catch(y){We(t,t.return,y)}}break;case 1:cn(e,t),$n(t),r&512&&n!==null&&Rs(n,n.return);break;case 5:if(cn(e,t),$n(t),r&512&&n!==null&&Rs(n,n.return),t.flags&32){var s=t.stateNode;try{Zi(s,"")}catch(y){We(t,t.return,y)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Xm(s,i),Qu(a,o);var u=Qu(a,i);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?tg(s,h):c==="dangerouslySetInnerHTML"?Qm(s,h):c==="children"?Zi(s,h):dh(s,c,h,u)}switch(a){case"input":qu(s,i);break;case"textarea":Jm(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var d=i.value;d!=null?Bs(s,!!i.multiple,d,!1):f!==!!i.multiple&&(i.defaultValue!=null?Bs(s,!!i.multiple,i.defaultValue,!0):Bs(s,!!i.multiple,i.multiple?[]:"",!1))}s[ao]=i}catch(y){We(t,t.return,y)}}break;case 6:if(cn(e,t),$n(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(y){We(t,t.return,y)}}break;case 3:if(cn(e,t),$n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(y){We(t,t.return,y)}break;case 4:cn(e,t),$n(t);break;case 13:cn(e,t),$n(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Hh=Ve())),r&4&&mp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(u=gt)||c,cn(e,t),gt=u):cn(e,t),$n(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(G=t,c=t.child;c!==null;){for(h=G=c;G!==null;){switch(f=G,d=f.child,f.tag){case 0:case 11:case 14:case 15:Hi(4,f,f.return);break;case 1:Rs(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(y){We(r,n,y)}}break;case 5:Rs(f,f.return);break;case 22:if(f.memoizedState!==null){yp(h);continue}}d!==null?(d.return=f,G=d):yp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{s=h.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=eg("display",o))}catch(y){We(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){We(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:cn(e,t),$n(t),r&4&&mp(t);break;case 21:break;default:cn(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ty(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Zi(s,""),r.flags&=-33);var i=pp(t);Ac(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=pp(t);Cc(t,a,o);break;default:throw Error(B(161))}}catch(l){We(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $x(t,e,n){G=t,Dy(t)}function Dy(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var s=G,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ta;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||gt;a=ta;var u=gt;if(ta=o,(gt=l)&&!u)for(G=s;G!==null;)o=G,l=o.child,o.tag===22&&o.memoizedState!==null?vp(s):l!==null?(l.return=o,G=l):vp(s);for(;i!==null;)G=i,Dy(i),i=i.sibling;G=s,ta=a,gt=u}gp(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,G=i):gp(t)}}function gp(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||Cl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:fn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Qd(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&no(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}gt||e.flags&512&&Tc(e)}catch(f){We(e,e.return,f)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function yp(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function vp(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cl(4,e)}catch(l){We(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){We(e,s,l)}}var i=e.return;try{Tc(e)}catch(l){We(e,i,l)}break;case 5:var o=e.return;try{Tc(e)}catch(l){We(e,o,l)}}}catch(l){We(e,e.return,l)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var zx=Math.ceil,qa=ir.ReactCurrentDispatcher,Vh=ir.ReactCurrentOwner,rn=ir.ReactCurrentBatchConfig,de=0,st=null,He=null,ht=0,Bt=0,Os=Or(0),Qe=0,po=null,os=0,Al=0,Gh=0,Ki=null,$t=null,Hh=0,ni=1/0,Kn=null,Ya=!1,Dc=null,xr=null,na=!1,dr=null,Xa=0,qi=0,$c=null,ba=-1,ka=0;function St(){return de&6?Ve():ba!==-1?ba:ba=Ve()}function Sr(t){return t.mode&1?de&2&&ht!==0?ht&-ht:mx.transition!==null?(ka===0&&(ka=dg()),ka):(t=ve,t!==0||(t=window.event,t=t===void 0?16:bg(t.type)),t):1}function wn(t,e,n,r){if(50<qi)throw qi=0,$c=null,Error(B(185));So(t,n,r),(!(de&2)||t!==st)&&(t===st&&(!(de&2)&&(Al|=n),Qe===4&&hr(t,ht)),Ft(t,r),n===1&&de===0&&!(e.mode&1)&&(ni=Ve()+500,Il&&Pr()))}function Ft(t,e){var n=t.callbackNode;mk(t,e);var r=Ma(t,t===st?ht:0);if(r===0)n!==null&&Td(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Td(n),e===1)t.tag===0?px(wp.bind(null,t)):Pg(wp.bind(null,t)),cx(function(){!(de&6)&&Pr()}),n=null;else{switch(pg(r)){case 1:n=vh;break;case 4:n=hg;break;case 16:n=za;break;case 536870912:n=fg;break;default:n=za}n=Oy(n,$y.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $y(t,e){if(ba=-1,ka=0,de&6)throw Error(B(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var r=Ma(t,t===st?ht:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ja(t,r);else{e=r;var s=de;de|=2;var i=My();(st!==t||ht!==e)&&(Kn=null,ni=Ve()+500,Jr(t,e));do try{Fx();break}catch(a){zy(t,a)}while(1);$h(),qa.current=i,de=s,He!==null?e=0:(st=null,ht=0,e=Qe)}if(e!==0){if(e===2&&(s=sc(t),s!==0&&(r=s,e=zc(t,s))),e===1)throw n=po,Jr(t,0),hr(t,r),Ft(t,Ve()),n;if(e===6)hr(t,r);else{if(s=t.current.alternate,!(r&30)&&!Mx(s)&&(e=Ja(t,r),e===2&&(i=sc(t),i!==0&&(r=i,e=zc(t,i))),e===1))throw n=po,Jr(t,0),hr(t,r),Ft(t,Ve()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Gr(t,$t,Kn);break;case 3:if(hr(t,r),(r&130023424)===r&&(e=Hh+500-Ve(),10<e)){if(Ma(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=fc(Gr.bind(null,t,$t,Kn),e);break}Gr(t,$t,Kn);break;case 4:if(hr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-vn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zx(r/1960))-r,10<r){t.timeoutHandle=fc(Gr.bind(null,t,$t,Kn),r);break}Gr(t,$t,Kn);break;case 5:Gr(t,$t,Kn);break;default:throw Error(B(329))}}}return Ft(t,Ve()),t.callbackNode===n?$y.bind(null,t):null}function zc(t,e){var n=Ki;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=Ja(t,e),t!==2&&(e=$t,$t=n,e!==null&&Mc(e)),t}function Mc(t){$t===null?$t=t:$t.push.apply($t,t)}function Mx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!xn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~Gh,e&=~Al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vn(e),r=1<<n;t[n]=-1,e&=~r}}function wp(t){if(de&6)throw Error(B(327));Gs();var e=Ma(t,0);if(!(e&1))return Ft(t,Ve()),null;var n=Ja(t,e);if(t.tag!==0&&n===2){var r=sc(t);r!==0&&(e=r,n=zc(t,r))}if(n===1)throw n=po,Jr(t,0),hr(t,e),Ft(t,Ve()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,$t,Kn),Ft(t,Ve()),null}function Kh(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(ni=Ve()+500,Il&&Pr())}}function as(t){dr!==null&&dr.tag===0&&!(de&6)&&Gs();var e=de;de|=1;var n=rn.transition,r=ve;try{if(rn.transition=null,ve=1,t)return t()}finally{ve=r,rn.transition=n,de=e,!(de&6)&&Pr()}}function qh(){Bt=Os.current,Ce(Os)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ux(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Ch(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oa();break;case 3:ei(),Ce(Mt),Ce(yt),Rh();break;case 5:Lh(r);break;case 4:ei();break;case 13:Ce(Oe);break;case 19:Ce(Oe);break;case 10:zh(r.type._context);break;case 22:case 23:qh()}n=n.return}if(st=t,He=t=Er(t.current,null),ht=Bt=e,Qe=0,po=null,Gh=Al=os=0,$t=Ki=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}qr=null}return t}function zy(t,e){do{var n=He;try{if($h(),ya.current=Ka,Ha){for(var r=Pe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ha=!1}if(is=0,nt=Ze=Pe=null,Gi=!1,co=0,Vh.current=null,n===null||n.return===null){Qe=1,po=e,He=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var d=op(o);if(d!==null){d.flags&=-257,ap(d,o,a,i,e),d.mode&1&&ip(i,u,e),e=d,l=u;var p=e.updateQueue;if(p===null){var y=new Set;y.add(l),e.updateQueue=y}else p.add(l);break e}else{if(!(e&1)){ip(i,u,e),Yh();break e}l=Error(B(426))}}else if(Fe&&a.mode&1){var w=op(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),ap(w,o,a,i,e),Ah(ti(l,a));break e}}i=l=ti(l,a),Qe!==4&&(Qe=2),Ki===null?Ki=[i]:Ki.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var g=my(i,l,e);Zd(i,g);break e;case 1:a=l;var m=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(xr===null||!xr.has(v)))){i.flags|=65536,e&=-e,i.lanes|=e;var k=gy(i,a,e);Zd(i,k);break e}}i=i.return}while(i!==null)}Fy(n)}catch(S){e=S,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function My(){var t=qa.current;return qa.current=Ka,t===null?Ka:t}function Yh(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),st===null||!(os&268435455)&&!(Al&268435455)||hr(st,ht)}function Ja(t,e){var n=de;de|=2;var r=My();(st!==t||ht!==e)&&(Kn=null,Jr(t,e));do try{_x();break}catch(s){zy(t,s)}while(1);if($h(),de=n,qa.current=r,He!==null)throw Error(B(261));return st=null,ht=0,Qe}function _x(){for(;He!==null;)_y(He)}function Fx(){for(;He!==null&&!ok();)_y(He)}function _y(t){var e=Ry(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?Fy(t):He=e,Vh.current=null}function Fy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Cx(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,He=null;return}}else if(n=Tx(n,e,Bt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Qe===0&&(Qe=5)}function Gr(t,e,n){var r=ve,s=rn.transition;try{rn.transition=null,ve=1,Lx(t,e,n,r)}finally{rn.transition=s,ve=r}return null}function Lx(t,e,n,r){do Gs();while(dr!==null);if(de&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(gk(t,i),t===st&&(He=st=null,ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||na||(na=!0,Oy(za,function(){return Gs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=rn.transition,rn.transition=null;var o=ve;ve=1;var a=de;de|=4,Vh.current=null,Dx(t,n),Ay(n,t),nx(cc),_a=!!uc,cc=uc=null,t.current=n,$x(n),ak(),de=a,ve=o,rn.transition=i}else t.current=n;if(na&&(na=!1,dr=t,Xa=s),i=t.pendingLanes,i===0&&(xr=null),ck(n.stateNode),Ft(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ya)throw Ya=!1,t=Dc,Dc=null,t;return Xa&1&&t.tag!==0&&Gs(),i=t.pendingLanes,i&1?t===$c?qi++:(qi=0,$c=t):qi=0,Pr(),null}function Gs(){if(dr!==null){var t=pg(Xa),e=rn.transition,n=ve;try{if(rn.transition=null,ve=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,Xa=0,de&6)throw Error(B(331));var s=de;for(de|=4,G=t.current;G!==null;){var i=G,o=i.child;if(G.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(G=u;G!==null;){var c=G;switch(c.tag){case 0:case 11:case 15:Hi(8,c,i)}var h=c.child;if(h!==null)h.return=c,G=h;else for(;G!==null;){c=G;var f=c.sibling,d=c.return;if(Ny(c),c===u){G=null;break}if(f!==null){f.return=d,G=f;break}G=d}}}var p=i.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}G=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,G=o;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Hi(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,G=g;break e}G=i.return}}var m=t.current;for(G=m;G!==null;){o=G;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,G=v;else e:for(o=m;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cl(9,a)}}catch(S){We(a,a.return,S)}if(a===o){G=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,G=k;break e}G=a.return}}if(de=s,Pr(),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(bl,t)}catch{}r=!0}return r}finally{ve=n,rn.transition=e}}return!1}function bp(t,e,n){e=ti(n,e),e=my(t,e,1),t=kr(t,e,1),e=St(),t!==null&&(So(t,1,e),Ft(t,e))}function We(t,e,n){if(t.tag===3)bp(t,t,n);else for(;e!==null;){if(e.tag===3){bp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){t=ti(n,t),t=gy(e,t,1),e=kr(e,t,1),t=St(),e!==null&&(So(e,1,t),Ft(e,t));break}}e=e.return}}function Rx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(ht&n)===n&&(Qe===4||Qe===3&&(ht&130023424)===ht&&500>Ve()-Hh?Jr(t,0):Gh|=n),Ft(t,e)}function Ly(t,e){e===0&&(t.mode&1?(e=Ho,Ho<<=1,!(Ho&130023424)&&(Ho=4194304)):e=1);var n=St();t=rr(t,e),t!==null&&(So(t,e,n),Ft(t,n))}function Ox(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ly(t,n)}function Px(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),Ly(t,n)}var Ry;Ry=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zt=!1,Nx(t,e,n);zt=!!(t.flags&131072)}else zt=!1,Fe&&e.flags&1048576&&Bg(e,Ua,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wa(t,e),t=e.pendingProps;var s=Js(e,yt.current);Vs(e,n),s=Ph(null,e,r,t,s,n);var i=Bh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(i=!0,Pa(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,_h(e),s.updater=Nl,e.stateNode=s,s._reactInternals=e,wc(e,r,t,n),e=xc(null,e,r,!0,i,n)):(e.tag=0,Fe&&i&&Th(e),wt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wa(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Ux(r),t=fn(r,t),s){case 0:e=kc(null,e,r,t,n);break e;case 1:e=cp(null,e,r,t,n);break e;case 11:e=lp(null,e,r,t,n);break e;case 14:e=up(null,e,r,fn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:fn(r,s),kc(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:fn(r,s),cp(t,e,r,s,n);case 3:e:{if(by(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Vg(t,e),Va(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ti(Error(B(423)),e),e=hp(t,e,r,n,s);break e}else if(r!==s){s=ti(Error(B(424)),e),e=hp(t,e,r,n,s);break e}else for(Ut=br(e.stateNode.containerInfo.firstChild),Wt=e,Fe=!0,pn=null,n=qg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zs(),r===s){e=sr(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return Yg(e),t===null&&gc(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,hc(r,s)?o=null:i!==null&&hc(r,i)&&(e.flags|=32),wy(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&gc(e),null;case 13:return ky(t,e,n);case 4:return Fh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qs(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:fn(r,s),lp(t,e,r,s,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Se(Wa,r._currentValue),r._currentValue=o,i!==null)if(xn(i.value,o)){if(i.children===s.children&&!Mt.current){e=sr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Qn(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),yc(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yc(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}wt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Vs(e,n),s=sn(s),r=r(s),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,s=fn(r,e.pendingProps),s=fn(r.type,s),up(t,e,r,s,n);case 15:return yy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:fn(r,s),wa(t,e),e.tag=1,_t(r)?(t=!0,Pa(e)):t=!1,Vs(e,n),Hg(e,r,s),wc(e,r,s,n),xc(null,e,r,!0,t,n);case 19:return xy(t,e,n);case 22:return vy(t,e,n)}throw Error(B(156,e.tag))};function Oy(t,e){return cg(t,e)}function Bx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new Bx(t,e,n,r)}function Xh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ux(t){if(typeof t=="function")return Xh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mh)return 11;if(t===gh)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xa(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Xh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cs:return Zr(n.children,s,i,e);case ph:o=8,s|=8;break;case ju:return t=en(12,n,e,s|2),t.elementType=ju,t.lanes=i,t;case Vu:return t=en(13,n,e,s),t.elementType=Vu,t.lanes=i,t;case Gu:return t=en(19,n,e,s),t.elementType=Gu,t.lanes=i,t;case Km:return Dl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gm:o=10;break e;case Hm:o=9;break e;case mh:o=11;break e;case gh:o=14;break e;case ar:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=en(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Zr(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function Dl(t,e,n,r){return t=en(22,t,r,e),t.elementType=Km,t.lanes=n,t.stateNode={isHidden:!1},t}function Nu(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Tu(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Wx(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=au(0),this.expirationTimes=au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Jh(t,e,n,r,s,i,o,a,l){return t=new Wx(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=en(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_h(i),t}function jx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Py(t){if(!t)return Cr;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(_t(n))return Og(t,n,e)}return e}function By(t,e,n,r,s,i,o,a,l){return t=Jh(n,r,!0,t,s,i,o,a,l),t.context=Py(null),n=t.current,r=St(),s=Sr(n),i=Qn(r,s),i.callback=e??null,kr(n,i,s),t.current.lanes=s,So(t,s,r),Ft(t,r),t}function $l(t,e,n,r){var s=e.current,i=St(),o=Sr(s);return n=Py(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kr(s,e,o),t!==null&&(wn(t,s,o,i),ga(t,s,o)),o}function Za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zh(t,e){kp(t,e),(t=t.alternate)&&kp(t,e)}function Vx(){return null}var Uy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qh(t){this._internalRoot=t}zl.prototype.render=Qh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));$l(t,e,null,null)};zl.prototype.unmount=Qh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;as(function(){$l(null,t,null,null)}),e[nr]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=yg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&wg(t)}};function ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xp(){}function Gx(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=Za(o);i.call(u)}}var o=By(e,r,t,0,null,!1,!1,"",xp);return t._reactRootContainer=o,t[nr]=o.current,io(t.nodeType===8?t.parentNode:t),as(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=Za(l);a.call(u)}}var l=Jh(t,0,!1,null,null,!1,!1,"",xp);return t._reactRootContainer=l,t[nr]=l.current,io(t.nodeType===8?t.parentNode:t),as(function(){$l(e,l,n,r)}),l}function _l(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=Za(o);a.call(l)}}$l(e,o,t,s)}else o=Gx(n,e,t,s,r);return Za(o)}mg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_i(e.pendingLanes);n!==0&&(wh(e,n|1),Ft(e,Ve()),!(de&6)&&(ni=Ve()+500,Pr()))}break;case 13:as(function(){var r=rr(t,1);if(r!==null){var s=St();wn(r,t,1,s)}}),Zh(t,1)}};bh=function(t){if(t.tag===13){var e=rr(t,134217728);if(e!==null){var n=St();wn(e,t,134217728,n)}Zh(t,134217728)}};gg=function(t){if(t.tag===13){var e=Sr(t),n=rr(t,e);if(n!==null){var r=St();wn(n,t,e,r)}Zh(t,e)}};yg=function(){return ve};vg=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};tc=function(t,e,n){switch(e){case"input":if(qu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=El(r);if(!s)throw Error(B(90));Ym(r),qu(r,s)}}}break;case"textarea":Jm(t,n);break;case"select":e=n.value,e!=null&&Bs(t,!!n.multiple,e,!1)}};sg=Kh;ig=as;var Hx={usingClientEntryPoint:!1,Events:[Io,zs,El,ng,rg,Kh]},Ai={findFiberByHostInstance:Kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Kx={bundleType:Ai.bundleType,version:Ai.version,rendererPackageName:Ai.rendererPackageName,rendererConfig:Ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ai.findFiberByHostInstance||Vx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{bl=ra.inject(Kx),Bn=ra}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;Vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(e))throw Error(B(200));return jx(t,e,null,n)};Vt.createRoot=function(t,e){if(!ef(t))throw Error(B(299));var n=!1,r="",s=Uy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Jh(t,1,!1,null,null,n,!1,r,s),t[nr]=e.current,io(t.nodeType===8?t.parentNode:t),new Qh(e)};Vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=lg(e),t=t===null?null:t.stateNode,t};Vt.flushSync=function(t){return as(t)};Vt.hydrate=function(t,e,n){if(!Ml(e))throw Error(B(200));return _l(null,t,e,!0,n)};Vt.hydrateRoot=function(t,e,n){if(!ef(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Uy;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=By(e,null,t,1,n??null,s,!1,i,o),t[nr]=e.current,io(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new zl(e)};Vt.render=function(t,e,n){if(!Ml(e))throw Error(B(200));return _l(null,t,e,!1,n)};Vt.unmountComponentAtNode=function(t){if(!Ml(t))throw Error(B(40));return t._reactRootContainer?(as(function(){_l(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};Vt.unstable_batchedUpdates=Kh;Vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ml(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return _l(t,e,n,!1,r)};Vt.version="18.2.0-next-9e3b772b8-20220608";function Wy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wy)}catch(t){console.error(t)}}Wy(),Bm.exports=Vt;var qx=Bm.exports,Sp=qx;Uu.createRoot=Sp.createRoot,Uu.hydrateRoot=Sp.hydrateRoot;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yx=1e-7,Xx=1e-4;class Jx{refCount(e){return Pt("refCount")}incRef(e){return Pt("incRef")}timerAvailable(){return!0}time(e){return Pt("time")}read(e){return Pt("read")}readSync(e){return Pt("readSync")}readToGPU(e,n){return Pt("readToGPU")}numDataIds(){return Pt("numDataIds")}disposeData(e,n){return Pt("disposeData")}write(e,n,r){return Pt("write")}move(e,n,r,s,i){return Pt("move")}memory(){return Pt("memory")}floatPrecision(){return Pt("floatPrecision")}epsilon(){return this.floatPrecision()===32?Yx:Xx}dispose(){return Pt("dispose")}}function Pt(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mo(t){let e=t.length,n=0;for(;e>0;)n=Math.random()*e|0,e--,Zx(t,e,n)}function Zx(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function b(t,e){if(!t)throw new Error(typeof e=="string"?e:e())}function Qx(t,e,n=""){b(It(t,e),()=>n+` Shapes ${t} and ${e} must match`)}function Fl(t){b(t!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Ll(t,e=[],n=!1){if(e==null&&(e=[]),Array.isArray(t)||Sn(t)&&!n)for(let r=0;r<t.length;++r)Ll(t[r],e,n);else e.push(t);return e}function Et(t){if(t.length===0)return 1;let e=t[0];for(let n=1;n<t.length;n++)e*=t[n];return e}function It(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function Qa(t){return t%1===0}function Sa(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function Hn(t,e){const n=e.length;return t=t==null?e.map((r,s)=>s):[].concat(t),b(t.every(r=>r>=-n&&r<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${t}`),b(t.every(r=>Qa(r)),()=>`All values in axis param must be integers but got axis ${t}`),t.map(r=>r<0?n+r:r)}function eS(t,e){const n=[],r=[],s=e!=null&&Array.isArray(e)&&e.length===0,i=e==null||s?null:Hn(e,t).sort();let o=0;for(let a=0;a<t.length;++a){if(i!=null){if(i[o]===a&&t[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${t[a]}' is not 1`);(i[o]==null||i[o]>a)&&t[a]===1&&(n.push(t[a]),r.push(a)),i[o]<=a&&o++}t[a]!==1&&(n.push(t[a]),r.push(a))}return{newShape:n,keptDims:r}}function tS(t,e){let n=null;if(t==null||t==="float32")n=new Float32Array(e);else if(t==="int32")n=new Int32Array(e);else if(t==="bool")n=new Uint8Array(e);else if(t==="string")n=new Array(e);else throw new Error(`Unknown data type ${t}`);return n}function nS(t,e){for(let n=0;n<t.length;n++){const r=t[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${e} being uploaded contains ${r}.`)}}function rS(t){return t==="bool"||t==="complex64"||t==="float32"||t==="int32"||t==="string"}function Sn(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}function Ep(t){if(t==="float32"||t==="int32")return 4;if(t==="complex64")return 8;if(t==="bool")return 1;throw new Error(`Unknown dtype ${t}`)}function sS(t){if(t==null)return 0;let e=0;return t.forEach(n=>e+=n.length),e}function tf(t){return typeof t=="string"||t instanceof String}function iS(t){return typeof t=="boolean"}function _c(t){return typeof t=="number"}function nf(t){return Array.isArray(t)?nf(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray?"int32":_c(t)?"float32":tf(t)?"string":iS(t)?"bool":"float32"}function Fc(t){return!!(t&&t.constructor&&t.call&&t.apply)}function rf(t){const e=t.length;if(e<2)return[];const n=new Array(e-1);n[e-2]=t[e-1];for(let r=e-3;r>=0;--r)n[r]=n[r+1]*t[r+1];return n}function jy(t,e,n,r=!1){const s=new Array;if(e.length===1){const i=e[0]*(r?2:1);for(let o=0;o<i;o++)s[o]=n[t+o]}else{const i=e[0],o=e.slice(1),a=o.reduce((l,u)=>l*u)*(r?2:1);for(let l=0;l<i;l++)s[l]=jy(t+l*a,o,n,r)}return s}function Ip(t,e,n=!1){if(t.length===0)return e[0];const r=t.reduce((s,i)=>s*i)*(n?2:1);if(r===0)return[];if(r!==e.length)throw new Error(`[${t}] does not match the input size ${e.length}${n?" for a complex tensor":""}.`);return jy(0,t,e,n)}function Vy(t,e){const n=sf(t,e);for(let r=0;r<n.length;r++)n[r]=1;return n}function sf(t,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool")return new Uint8Array(t);throw new Error(`Unknown data type ${e}`)}function Gy(t){t.forEach(e=>{b(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`)})}function of(t){return t&&t.then&&typeof t.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Np="tfjsflags";class oS{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=aS,this.populateURLFlags()}setPlatform(e,n){this.platform!=null&&(me().getBool("IS_TEST")||me().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=n}registerFlag(e,n,r){if(this.flagRegistry[e]={evaluationFn:n,setHook:r},this.urlFlags[e]!=null){const s=this.urlFlags[e];me().getBool("IS_TEST")||me().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${s}.`),this.set(e,s)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const n=this.evaluateFlag(e);if(of(n))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=n,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,n){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=n,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(n)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);Np in e&&e[Np].split(",").forEach(r=>{const[s,i]=r.split(":");this.urlFlags[s]=uS(s,i)})}}function aS(t){const e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...r)=>(lS(e,r[0],r[1]),r.join("="))),e}function lS(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}function uS(t,e){if(e=e.toLowerCase(),e==="true"||e==="false")return e==="true";if(`${+e}`===e)return+e;throw new Error(`Could not parse value flag value ${e} for flag ${t}.`)}function me(){return Hy}let Hy=null;function cS(t){Hy=t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Cu;function Ky(){if(Cu==null){let t;if(typeof window<"u")t=window;else if(typeof global<"u")t=global;else if(typeof process<"u")t=process;else if(typeof self<"u")t=self;else throw new Error("Could not find a global object");Cu=t}return Cu}function hS(){const t=Ky();return t._tfGlobals==null&&(t._tfGlobals=new Map),t._tfGlobals}function af(t,e){const n=hS();if(n.has(t))return n.get(t);{const r=e();return n.set(t,r),n.get(t)}}const qy="Abs",fS="Acos",dS="Acosh",lf="Add",pS="AddN",mS="All",gS="Any",Yy="ArgMax",yS="ArgMin",vS="Asin",wS="Asinh",bS="Atan",kS="Atanh",xS="Atan2",Xy="AvgPool",SS="AvgPoolGrad",Jy="AvgPool3D",ES="AvgPool3DGrad",Zy="BatchMatMul",Qy="BatchToSpaceND",IS="Bincount",NS="BroadcastTo",uf="Cast",TS="Ceil",e0="ClipByValue",CS="Complex",t0="ComplexAbs",n0="Concat",r0="Conv2D",AS="Conv2DBackpropFilter",s0="Conv2DBackpropInput",i0="Conv3D",DS="Conv3DBackpropFilterV2",$S="Conv3DBackpropInputV2",o0="Cos",a0="Cosh",zS="Cumprod",l0="Cumsum",MS="CropAndResize",u0="DepthwiseConv2dNative",_S="DepthwiseConv2dNativeBackpropFilter",FS="DepthwiseConv2dNativeBackpropInput",LS="Dilation2D",RS="Dilation2DBackpropInput",OS="Dilation2DBackpropFilter",c0="RealDiv",h0="Elu",PS="EluGrad",BS="Erf",US="Equal",f0="Exp",d0="ExpandDims",WS="Expm1",jS="Fill",VS="FlipLeftRight",p0="Floor",m0="FloorDiv",g0="FusedBatchNorm",y0="GatherV2",GS="Greater",v0="GreaterEqual",cf="Identity",HS="Imag",KS="IsFinite",qS="IsInf",YS="IsNan",w0="LeakyRelu",XS="Less",JS="LessEqual",b0="Log",k0="Log1p",ZS="LogicalAnd",QS="LogicalNot",e2="LogSoftmax",t2="LRN",n2="LRNGrad",x0="Max",S0="Maximum",E0="MaxPool",r2="MaxPoolGrad",I0="MaxPool3D",s2="MaxPool3DGrad",N0="Mean",T0="Min",C0="Minimum",i2="MirrorPad",o2="Mod",A0="Multiply",D0="Neg",a2="NotEqual",l2="NonMaxSuppressionV3",u2="NonMaxSuppressionV4",c2="NonMaxSuppressionV5",$0="OnesLike",z0="OneHot",M0="Pack",_0="PadV2",F0="Pow",L0="Prelu",h2="Prod",f2="Range",d2="Real",p2="Reciprocal",R0="Relu",O0="Reshape",P0="ResizeNearestNeighbor",m2="ResizeNearestNeighborGrad",B0="ResizeBilinear",g2="ResizeBilinearGrad",U0="Relu6",W0="Reverse",j0="Round",V0="Rsqrt",G0="Select",H0="Selu",K0="Slice",q0="Sin",Y0="Sinh",y2="Sign",X0="Sigmoid",J0="Softplus",Z0="Sqrt",Q0="Sum",ev="SpaceToBatchND",tv="SplitV",nv="Softmax",v2="SquaredDifference",w2="Square",rv="Sub",b2="Tan",sv="Tanh",hf="Tile",k2="Transform",Ea="Transpose",iv="Unpack",ov="UnsortedSegmentSum",av="ZerosLike",lv="Step",x2="RotateWithOffset",Tp="_FusedMatMul",Cp="FusedConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Es(...t){me().getBool("IS_TEST")||me().getBool("PROD")||console.warn(...t)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uv=af("kernelRegistry",()=>new Map),Lc=af("gradRegistry",()=>new Map);function Ap(t,e){const n=E2(t,e);return uv.get(n)}function Dp(t){return Lc.get(t)}function $p(t){const e=uv.entries(),n=[];for(;;){const{done:r,value:s}=e.next();if(r)break;const[i,o]=s,[a]=i.split("_");a===t&&n.push(o)}return n}function S2(t){const{kernelName:e}=t;Lc.has(e)&&me().getBool("DEBUG")&&Es(`Overriding the gradient for '${e}'`),Lc.set(e,t)}function E2(t,e){return`${e}_${t}`}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I2(t,e){return t instanceof Float32Array&&e==="float32"||t instanceof Int32Array&&e==="int32"||t instanceof Uint8Array&&e==="bool"}function cv(t,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=Ll(t)),me().getBool("DEBUG")&&nS(t,e),I2(t,e))return t;if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool"){const n=new Uint8Array(t.length);for(let r=0;r<n.length;++r)Math.round(t[r])!==0&&(n[r]=1);return n}else throw new Error(`Unknown data type ${e}`)}function tn(){return me().platform.now()}function N2(t,e="utf-8"){return e=e||"utf-8",me().platform.encode(t,e)}function zp(t,e="utf-8"){return e=e||"utf-8",me().platform.decode(t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class T2{constructor(e,n){this.backendTimer=e,this.logger=n,n==null&&(this.logger=new A2)}profileKernel(e,n,r){let s;const i=()=>{s=r()};let o;const a=tn();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(i);else{i();for(const u of s)u.dataSync();o=Promise.resolve({kernelMs:tn()-a})}if(me().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<s.length;u++){const c=s[u];c.data().then(h=>{C2(h,c.dtype,e)})}return{kernelName:e,outputs:s,inputs:n,timeMs:o.then(u=>u.kernelMs),extraInfo:o.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:n,outputs:r,timeMs:s,inputs:i,extraInfo:o}=e;r.forEach(a=>{Promise.all([a.data(),s,o]).then(l=>{this.logger.logKernelProfile(n,a,l[0],l[1],i,l[2])})})}}function C2(t,e,n){if(e!=="float32")return!1;for(let r=0;r<t.length;r++){const s=t[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${n}'`),!0}return!1}class A2{logKernelProfile(e,n,r,s,i,o){const a=typeof s=="number"?Sa(`${s}ms`,9):s.error,l=Sa(e,25),u=n.rank,c=n.size,h=Sa(n.shape.toString(),14);let f="";for(const d in i){const p=i[d];if(p!=null){const y=p.shape||n.shape,w=y.length;f+=`${d}: ${w}D ${w>0?y:""} `}}console.log(`%c${l}	%c${a}	%c${u}D ${h}	%c${c}	%c${f}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D2(t,e,n){const r={},s={};for(let l=0;l<e.length;l++)r[e[l].id]=!0;for(let l=0;l<t.length;l++){const u=t[l],c=u.inputs;for(const h in c){const f=c[h];let d=!1;for(let p=0;p<e.length;p++)if(r[f.id]){u.outputs.forEach(y=>r[y.id]=!0),d=!0,s[u.id]=!0;break}if(d)break}}const i={};i[n.id]=!0;const o={};for(let l=t.length-1;l>=0;l--){const u=t[l],c=u.inputs;for(let h=0;h<u.outputs.length;h++)if(i[u.outputs[h].id]){for(const f in c)i[c[f].id]=!0,o[u.id]=!0;break}}const a=[];for(let l=0;l<t.length;l++){const u=t[l];if(s[u.id]&&o[u.id]){const c={};for(const f in u.inputs){const d=u.inputs[f];r[d.id]&&(c[f]=d)}const h=Object.assign({},u);h.inputs=c,h.outputs=u.outputs,a.push(h)}}return a}function $2(t,e,n,r){for(let s=e.length-1;s>=0;s--){const i=e[s],o=[];if(i.outputs.forEach(l=>{const u=t[l.id];u!=null?o.push(u):o.push(null)}),i.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${i.kernelName}.`);const a=i.gradient(o);for(const l in i.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const u=n(()=>a[l]());if(u.dtype!=="float32")throw new Error(`Error in gradient for op ${i.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${u.dtype}'`);const c=i.inputs[l];if(!It(u.shape,c.shape))throw new Error(`Error in gradient for op ${i.kernelName}. The gradient of input '${l}' has shape '${u.shape}', which does not match the shape of the input '${c.shape}'`);if(t[c.id]==null)t[c.id]=u;else{const h=t[c.id];t[c.id]=r(h,u),h.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mp=20,Di=3,Au=7;function z2(t,e,n,r){const s=rf(e),i=M2(t,e,n,s),o=e.length,a=Ia(t,e,n,s,i),l=["Tensor"];return r&&(l.push(`  dtype: ${n}`),l.push(`  rank: ${o}`),l.push(`  shape: [${e}]`),l.push("  values:")),l.push(a.map(u=>"    "+u).join(`
`)),l.join(`
`)}function M2(t,e,n,r){const s=Et(e),i=r[r.length-1],o=new Array(i).fill(0),a=e.length,l=n==="complex64"?Ri(t):t;if(a>1)for(let u=0;u<s/i;u++){const c=u*i;for(let h=0;h<i;h++)o[h]=Math.max(o[h],Li(l[c+h],0,n).length)}return o}function Li(t,e,n){let r;return Array.isArray(t)?r=`${parseFloat(t[0].toFixed(Au))} + ${parseFloat(t[1].toFixed(Au))}j`:tf(t)?r=`'${t}'`:n==="bool"?r=hv(t):r=parseFloat(t.toFixed(Au)).toString(),Sa(r,e)}function hv(t){return t===0?"false":"true"}function Ia(t,e,n,r,s,i=!0){const o=n==="complex64"?2:1,a=e[0],l=e.length;if(l===0){if(n==="complex64"){const y=Ri(t);return[Li(y[0],0,n)]}return n==="bool"?[hv(t[0])]:[t[0].toString()]}if(l===1){if(a>Mp){const w=Di*o;let g=Array.from(t.slice(0,w)),m=Array.from(t.slice((a-Di)*o,a*o));return n==="complex64"&&(g=Ri(g),m=Ri(m)),["["+g.map((v,k)=>Li(v,s[k],n)).join(", ")+", ..., "+m.map((v,k)=>Li(v,s[a-Di+k],n)).join(", ")+"]"]}return["["+(n==="complex64"?Ri(t):Array.from(t)).map((w,g)=>Li(w,s[g],n)).join(", ")+"]"]}const u=e.slice(1),c=r.slice(1),h=r[0]*o,f=[];if(a>Mp){for(let y=0;y<Di;y++){const w=y*h,g=w+h;f.push(...Ia(t.slice(w,g),u,n,c,s,!1))}f.push("...");for(let y=a-Di;y<a;y++){const w=y*h,g=w+h;f.push(...Ia(t.slice(w,g),u,n,c,s,y===a-1))}}else for(let y=0;y<a;y++){const w=y*h,g=w+h;f.push(...Ia(t.slice(w,g),u,n,c,s,y===a-1))}const d=l===2?",":"";f[0]="["+f[0]+d;for(let y=1;y<f.length-1;y++)f[y]=" "+f[y]+d;let p=`,
`;for(let y=2;y<l;y++)p+=`
`;return f[f.length-1]=" "+f[f.length-1]+"]"+(i?"":p),f}function Ri(t){const e=[];for(let n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _2{constructor(e,n,r){if(this.dtype=n,this.shape=e.slice(),this.size=Et(e),r!=null){const s=r.length;b(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||tS(n,this.size),this.strides=rf(e)}set(e,...n){n.length===0&&(n=[0]),b(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const r=this.locToIndex(n);this.values[r]=e}get(...e){e.length===0&&(e=[0]);let n=0;for(const s of e){if(s<0||s>=this.shape[n]){const i=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(i)}n++}let r=e[e.length-1];for(let s=0;s<e.length-1;++s)r+=this.strides[s]*e[s];return this.values[r]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let n=e[e.length-1];for(let r=0;r<e.length-1;++r)n+=this.strides[r]*e[r];return n}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const n=new Array(this.shape.length);for(let r=0;r<n.length-1;++r)n[r]=Math.floor(e/this.strides[r]),e-=n[r]*this.strides[r];return n[n.length-1]=e,n}get rank(){return this.shape.length}toTensor(){return mn().makeTensor(this.values,this.shape,this.dtype)}}let mn=null,Is=null;function F2(t){mn=t}function L2(t){Is=t}class Te{constructor(e,n,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=n||"float32",this.size=Et(e),this.strides=rf(e),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return Is.buffer(this.shape,this.dtype,e)}bufferSync(){return Is.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return Ip(this.shape,e,this.dtype==="complex64")}arraySync(){return Ip(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=mn().read(this.dataId);if(this.dtype==="string"){const n=await e;try{return n.map(r=>zp(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),mn().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=mn().readSync(this.dataId);if(this.dtype==="string")try{return e.map(n=>zp(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await mn().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(mn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return Is.print(this,e)}clone(){return this.throwIfDisposed(),Is.clone(this)}toString(e=!1){const n=this.dataSync();return z2(n,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),Is.cast(this,e)}variable(e=!0,n,r){return this.throwIfDisposed(),mn().makeVariable(this,e,n,r)}}Object.defineProperty(Te,Symbol.hasInstance,{value:t=>!!t&&t.data!=null&&t.dataSync!=null&&t.throwIfDisposed!=null});function R2(){return af("Tensor",()=>Te)}R2();class el extends Te{constructor(e,n,r,s){super(e.shape,e.dtype,e.dataId,s),this.trainable=n,this.name=r}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!It(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);mn().disposeTensor(this),this.dataId=e.dataId,mn().incRef(this,null)}dispose(){mn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(el,Symbol.hasInstance,{value:t=>t instanceof Te&&t.assign!=null&&t.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var _p;(function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"})(_p||(_p={}));var Rc;(function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"})(Rc||(Rc={}));var Oc;(function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"})(Oc||(Oc={}));var Pc;(function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"})(Pc||(Pc={}));var Bc;(function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"})(Bc||(Bc={}));const O2={float32:Pc,int32:Rc,bool:Oc,complex64:Bc};function P2(t,e){if(t==="string"||e==="string"){if(t==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${t} with ${e}`)}return O2[t][e]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function it(t,e){if(t.dtype===e.dtype)return[t,e];const n=P2(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function ff(t,e){return e.some(n=>n.id===t.id)}function Ar(t){const e=[];return fv(t,e,new Set),e}function fv(t,e,n){if(t==null)return;if(t instanceof Te){e.push(t);return}if(!B2(t))return;const r=t;for(const s in r){const i=r[s];n.has(i)||(n.add(i),fv(i,e,n))}}function B2(t){return Array.isArray(t)||typeof t=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Du(t){return t.kernelName!=null}class Fp{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class ri{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Fp}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const r=e[n];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:n}=this.initializeBackend(e);if(n)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,n,r=1){return e in this.registryFactory?(Es(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:n,priority:r},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:n,asyncInit:r}=this.initializeBackend(e);if(!(r?await n:n))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new T2(this.backendInstance),!0}setupRegisteredKernels(){$p(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){$p(e).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[e])})}initializeBackend(e){const n=this.registryFactory[e];if(n==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const r=n.factory();if(r&&!(r instanceof Jx)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,i=r.then(o=>s<this.pendingBackendInitId?!1:(this.registry[e]=o,this.pendingBackendInit=null,!0)).catch(o=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,Es(`Initialization of backend ${e} failed`),Es(o.stack||o.message)),!1));return this.pendingBackendInit=i,{success:i,asyncInit:!0}}else return this.registry[e]=r,{success:!0,asyncInit:!1}}catch(r){return Es(`Initialization of backend ${e} failed`),Es(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,n)=>this.registryFactory[n].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const r=e[n],{success:s,asyncInit:i}=this.initializeBackend(r);if(i||s)return{name:r,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,n){const r=this.state.tensorInfo.get(n),s=r.backend,i=this.readSync(n),o=s.refCount(n);s.disposeData(n,!0),r.backend=e,e.move(n,i,r.shape,r.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,n){let r=null;if(n==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");n=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=n(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(e,n,r){e();try{const s=r();return n(),s}catch(s){throw n(),s}}nextTensorId(){return ri.nextTensorId++}nextVariableId(){return ri.nextVariableId++}clone(e){const n=D.runKernel(cf,{x:e}),r={x:e},s=o=>({x:()=>{const a="float32",l={x:o},u={dtype:a};return D.runKernel(uf,l,u)}}),i=[];return this.addTapeNode(this.state.activeScope.name,r,[n],s,i,{}),n}runKernel(e,n,r){if(this.backendName==null&&this.backend,!(Ap(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:n,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,n,r){const s=this.backend.numDataIds();let i=0;r.forEach(l=>{i+=l.dtype==="complex64"?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=s-n-i-o;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${e}'`)}runKernelFunc(e){let n,r=[];const s=this.isTapeOn(),i=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const u=Du(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Du(e)){const{kernelName:p,inputs:y,attrs:w}=e;this.backendName==null&&this.backend;const g=Ap(p,this.backendName);b(g!=null,()=>`Cannot find registered kernel '${p}' for backend '${this.backendName}'`),a=()=>{const m=this.backend.numDataIds();l=g.kernelFunc({inputs:y,attrs:w,backend:this.backend});const v=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,m,v);const k=v.map(S=>S.rank!=null?S:this.makeTensorFromTensorInfo(S));if(s){const S=this.getTensorsForGradient(p,y,k);r=this.saveTensorsForBackwardMode(S)}return k}}else{const{forwardFunc:p}=e,y=w=>{s&&(r=w.map(g=>this.keep(this.clone(g))))};a=()=>{const w=this.backend.numDataIds();l=this.tidy(()=>p(this.backend,y));const g=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,w,g),g}}const{inputs:c,attrs:h}=e,f=Du(e)?null:e.backwardsFunc;let d;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=a():(d=this.profiler.profileKernel(u,c,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(d),n=d.outputs)}),s&&this.addTapeNode(u,c,n,f,r,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-i,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(c).map(p=>c[p]!=null?c[p].shape:null),outputShapes:n.map(p=>p.shape),kernelTimeMs:d.timeMs,extraInfo:d.extraInfo}),Array.isArray(l)?n:n[0]}saveTensorsForBackwardMode(e){return e.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(e,n,r){const s=Dp(e);if(s!=null){const i=s.inputsToSave||[],o=s.outputsToSave||[];let a;s.saveAllInputs?(b(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(n).map(u=>n[u])):a=i.map(u=>n[u]);const l=r.filter((u,c)=>o[c]);return a.concat(l)}return[]}makeTensor(e,n,r,s){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let i=e;r==="string"&&tf(e[0])&&(i=e.map(l=>N2(l)));const o=s.write(i,n,r),a=new Te(n,r,o,this.nextTensorId());if(this.trackTensor(a,s),r==="string"){const l=this.state.tensorInfo.get(o),u=sS(i);this.state.numBytes+=u-l.bytes,l.bytes=u}return a}makeTensorFromDataId(e,n,r,s){r=r||"float32";const i={dataId:e,shape:n,dtype:r};return this.makeTensorFromTensorInfo(i,s)}makeTensorFromTensorInfo(e,n){const{dataId:r,shape:s,dtype:i}=e,o=new Te(s,i,r,this.nextTensorId());return this.trackTensor(o,n),o}makeVariable(e,n=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==e.dtype&&(e=e.cast(s));const i=new el(e,n,r,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error(`Variable with name ${i.name} was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i}trackTensor(e,n){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let r=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(r=e.size*Ep(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:n||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof el||this.track(e)}incRef(e,n){this.trackTensor(e,n),this.backend.incRef(e.dataId)}removeDataId(e,n){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===n&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const n=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const r=e.size*Ep(e.dtype);this.state.numBytes-=r}n.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,n.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const n=this.state.registeredVariables[e];this.disposeVariable(n)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const n=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,n,r,s,i,o){const a={id:this.state.nextTapeNodeId++,kernelName:e,inputs:n,outputs:r,saved:i},l=Dp(e);l!=null&&(s=l.gradFunc),s!=null&&(a.gradient=u=>(u=u.map((c,h)=>{if(c==null){const f=r[h],d=sf(f.size,f.dtype);return this.makeTensor(d,f.shape,f.dtype)}return c}),s(u.length>1?u:u[0],i,o))),this.state.activeTape.push(a)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(n.name=e),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(e){const n=Ar(e),r=new Set(n.map(i=>i.id));for(let i=0;i<this.state.activeScope.track.length;i++){const o=this.state.activeScope.track[i];!o.kept&&!r.has(o.id)&&o.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(i=>{!i.kept&&i.scopeId===s.id&&this.track(i)})}gradients(e,n,r,s=!1){if(b(n.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const i=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));b(i instanceof Te,()=>"The result y returned by f() must be a tensor.");const o=D2(this.state.activeTape,n,i);if(!s&&o.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[i.id]=r??U2(i.shape),$2(a,o,u=>this.tidy(u),W2);const l=n.map(u=>a[u.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(u=>{for(const c of u.saved)c.dispose()}),this.state.activeTape=null),{value:i,grads:l}})}customGrad(e){return b(Fc(e),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{b(n.every(a=>a instanceof Te),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};n.forEach((a,l)=>{s[l]=a});const i=(a,l)=>(r=e(...n,l),b(r.value instanceof Te,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),b(Fc(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),o=(a,l)=>{const u=r.gradFunc(a,l),c=Array.isArray(u)?u:[u];b(c.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),b(c.every(f=>f instanceof Te),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return c.forEach((f,d)=>{h[d]=()=>f}),h};return this.runKernelFunc({forwardFunc:i,backwardsFunc:o,inputs:s})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,n){return this.state.tensorInfo.get(e).backend.readToGPU(e,n)}async time(e){const n=tn(),r=await this.backend.time(e);return r.wallMs=tn()-n,r}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Fp;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}ri.nextTensorId=0;ri.nextVariableId=0;function U2(t){const e=Vy(Et(t),"float32");return D.makeTensor(e,t,"float32")}function dv(){const t=Ky();if(t._tfengine==null){const e=new oS(t);t._tfengine=new ri(e)}return cS(t._tfengine.ENV),F2(()=>t._tfengine),t._tfengine}const D=dv();function W2(t,e){const n={a:t,b:e};return D.runKernel(lf,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j2(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lt=me();Lt.registerFlag("DEBUG",()=>!1,t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Lt.registerFlag("IS_BROWSER",()=>j2());Lt.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Lt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Lt.registerFlag("PROD",()=>!1);Lt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Lt.getBool("DEBUG"));Lt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Lt.registerFlag("IS_TEST",()=>!1);Lt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);Lt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Lt.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);Lt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Lt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mi(t,e){let n=t;if(Sn(t))return e==="string"?[]:[t.length];if(!Array.isArray(t))return[];const r=[];for(;Array.isArray(n)||Sn(n)&&e!=="string";)r.push(n.length),n=n[0];return Array.isArray(t)&&me().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&pv(t,r,[]),r}function pv(t,e,n){if(n=n||[],!Array.isArray(t)&&!Sn(t)){b(e.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}b(e.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${t.length} elements`),b(t.length===e[0],()=>`Element arr[${n.join("][")}] should have ${e[0]} elements, but has ${t.length} elements`);const r=e.slice(1);for(let s=0;s<t.length;++s)pv(t[s],r,n.concat(s))}function Lp(t,e,n,r){if(t!=="string_or_numeric"){if(t==null)throw new Error("Expected dtype cannot be null.");if(t!=="numeric"&&t!==e||t==="numeric"&&e==="string")throw new Error(`Argument '${n}' passed to '${r}' must be ${t} tensor, but got ${e} tensor`)}}function N(t,e,n,r="numeric"){if(t instanceof Te)return Lp(r,t.dtype,e,n),t;let s=nf(t);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),Lp(r,s,e,n),t==null||!Sn(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string"){const l=t==null?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${l}'`)}const i=mi(t,s);!Sn(t)&&!Array.isArray(t)&&(t=[t]);const a=s!=="string"?cv(t,s):Ll(t,[],!0);return D.makeTensor(a,i,s)}function mv(t,e,n,r="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${e} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return t.map((i,o)=>N(i,`${e}[${o}]`,n,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const V2="__op";function _(t){const e=Object.keys(t);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let n=e[0];const r=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+V2;const s=(...i)=>{D.startScope(n);try{const o=r(...i);return of(o)&&console.error("Cannot return a Promise inside of tidy."),D.endScope(o),o}catch(o){throw D.endScope(null),o}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G2(t,e){const n=N(t,"real","complex"),r=N(e,"imag","complex");Qx(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:n,imag:r};return D.runKernel(CS,s)}const Rl=_({complex_:G2});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gi(t,e,n,r){if(r==null&&(r=nf(t)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Sn(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){Gy(e);const s=Et(e),i=Et(n);b(s===i,()=>`Based on the provided shape, [${e}], the tensor should have ${s} values but has ${i}`);for(let o=0;o<n.length;++o){const a=n[o],l=o===n.length-1?a!==Et(e.slice(o)):!0;b(n[o]===e[o]||!l,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${e}). `)}}return!Sn(t)&&!Array.isArray(t)&&(t=[t]),e=e||n,t=r!=="string"?cv(t,r):Ll(t,[],!0),D.makeTensor(t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hs(t,e,n){const r=mi(t,n);return gi(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rp={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tl=4;async function Op(t,e){const n=[],r=[],s=Array.isArray(t)?t.map(o=>o.name):Object.keys(t);for(let o=0;o<s.length;++o){const a=s[o],l=Array.isArray(t)?t[o].tensor:t[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);const u={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const c=new Promise(async h=>{const f=await l.bytes(),d=f.reduce((w,g)=>w+g.length,0)+tl*f.length,p=new Uint8Array(d);let y=0;for(let w=0;w<f.length;w++){const g=f[w],m=new Uint8Array(new Uint32Array([g.length]).buffer);p.set(m,y),y+=tl,p.set(g,y),y+=g.length}h(p)});r.push(c)}else r.push(l.data());e!=null&&(u.group=e),n.push(u)}const i=await Promise.all(r);return{data:K2(i),specs:n}}function H2(t,e){const n={};let r,s=0;for(const i of e){const o=i.name,a=i.dtype,l=i.shape,u=Et(l);let c;if("quantization"in i){const h=i.quantization;if(h.dtype==="uint8"||h.dtype==="uint16"){if(!("min"in h&&"scale"in h))throw new Error(`Weight ${i.name} with quantization ${h.dtype} doesn't have corresponding metadata min and scale.`)}else if(h.dtype==="float16"){if(a!=="float32")throw new Error(`Weight ${i.name} is quantized with ${h.dtype} which only supports weights of type float32 not ${a}.`)}else throw new Error(`Weight ${i.name} has unknown quantization dtype ${h.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const f=Rp[h.dtype],d=t.slice(s,s+u*f),p=h.dtype==="uint8"?new Uint8Array(d):new Uint16Array(d);if(a==="float32")if(h.dtype==="uint8"||h.dtype==="uint16"){c=new Float32Array(p.length);for(let y=0;y<p.length;y++){const w=p[y];c[y]=w*h.scale+h.min}}else if(h.dtype==="float16")r===void 0&&(r=rE()),c=r(p);else throw new Error(`Unsupported quantization type ${h.dtype} for weight type float32.`);else if(a==="int32"){if(h.dtype!=="uint8"&&h.dtype!=="uint16")throw new Error(`Unsupported quantization type ${h.dtype} for weight type int32.`);c=new Int32Array(p.length);for(let y=0;y<p.length;y++){const w=p[y];c[y]=Math.round(w*h.scale+h.min)}}else throw new Error(`Unsupported dtype in weight '${o}': ${a}`);s+=u*f}else if(a==="string"){const h=Et(i.shape);c=[];for(let f=0;f<h;f++){const d=new Uint32Array(t.slice(s,s+tl))[0];s+=tl;const p=new Uint8Array(t.slice(s,s+d));c.push(p),s+=d}}else{const h=Rp[a],f=t.slice(s,s+u*h);if(a==="float32")c=new Float32Array(f);else if(a==="int32")c=new Int32Array(f);else if(a==="bool")c=new Uint8Array(f);else if(a==="complex64"){c=new Float32Array(f);const d=new Float32Array(c.length/2),p=new Float32Array(c.length/2);for(let g=0;g<d.length;g++)d[g]=c[g*2],p[g]=c[g*2+1];const y=Hs(d,l,"float32"),w=Hs(p,l,"float32");n[o]=Rl(y,w),y.dispose(),w.dispose()}else throw new Error(`Unsupported dtype in weight '${o}': ${a}`);s+=u*h}a!=="complex64"&&(n[o]=Hs(c,l,a))}return n}function K2(t){if(t===null)throw new Error(`Invalid input value: ${JSON.stringify(t)}`);let e=0;const n=[];t.forEach(i=>{if(e+=i.byteLength,n.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${i.constructor.name}`)});const r=new Uint8Array(e);let s=0;return n.forEach(i=>{r.set(new Uint8Array(i.buffer),s),s+=i.byteLength}),r.buffer}const df=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Pp(t){return df?Buffer.byteLength(t):new Blob([t]).size}function q2(t){if(df)return Buffer.from(t).toString("base64");const e=new Uint8Array(t);let n="";for(let r=0,s=e.length;r<s;r++)n+=String.fromCharCode(e[r]);return btoa(n)}function Y2(t){if(df){const r=Buffer.from(t,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;++r)n.set([e.charCodeAt(r)],r);return n.buffer}function gv(t){if(t.length===1)return t[0];let e=0;t.forEach(s=>{e+=s.byteLength});const n=new Uint8Array(e);let r=0;return t.forEach(s=>{n.set(new Uint8Array(s),r),r+=s.byteLength}),n.buffer}function X2(t,e){const n={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:e};return t.signature!=null&&(n.signature=t.signature),t.userDefinedMetadata!=null&&(n.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(n.modelInitializer=t.modelInitializer),t.trainingConfig!=null&&(n.trainingConfig=t.trainingConfig),n}function J2(t,e,n){const r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy};if(t.trainingConfig!=null&&(r.trainingConfig=t.trainingConfig),t.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=e,r.weightData=n}return t.signature!=null&&(r.signature=t.signature),t.userDefinedMetadata!=null&&(r.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(r.modelInitializer=t.modelInitializer),r}async function Z2(t,e){let n,r;return t.weightsManifest!=null&&([n,r]=await e(t.weightsManifest)),J2(t,n,r)}function pf(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:t.modelTopology==null?0:Pp(JSON.stringify(t.modelTopology)),weightSpecsBytes:t.weightSpecs==null?0:Pp(JSON.stringify(t.weightSpecs)),weightDataBytes:t.weightData==null?0:t.weightData.byteLength}}function Q2(t){const e=[];for(const n of t)e.push(...n.weights);return e}function eE(){const t=n=>{let r=n<<13,s=0;for(;!(r&8388608);)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},e=new Uint32Array(2048);e[0]=0;for(let n=1;n<1024;n++)e[n]=t(n);for(let n=1024;n<2048;n++)e[n]=939524096+(n-1024<<13);return e}function tE(){const t=new Uint32Array(64);t[0]=0,t[31]=1199570944,t[32]=2147483648,t[63]=3347054592;for(let e=1;e<31;e++)t[e]=e<<23;for(let e=33;e<63;e++)t[e]=2147483648+(e-32<<23);return t}function nE(){const t=new Uint32Array(64);for(let e=0;e<64;e++)t[e]=1024;return t[0]=t[32]=0,t}function rE(){const t=eE(),e=tE(),n=nE();return r=>{const s=new ArrayBuffer(4*r.length),i=new Uint32Array(s);for(let o=0;o<r.length;o++){const a=r[o],l=t[n[a>>10]+(a&1023)]+e[a>>10];i[o]=l}return new Float32Array(s)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Je{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Je.instance==null&&(Je.instance=new Je),Je.instance}static registerSaveRouter(e){Je.getInstance().saveRouters.push(e)}static registerLoadRouter(e){Je.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return Je.getHandlers(e,"save")}static getLoadHandlers(e,n){return Je.getHandlers(e,"load",n)}static getHandlers(e,n,r){const s=[];return(n==="load"?Je.getInstance().loadRouters:Je.getInstance().saveRouters).forEach(o=>{const a=o(e,r);a!==null&&s.push(a)}),s}}const sE=t=>Je.getSaveHandlers(t),iE=(t,e)=>Je.getLoadHandlers(t,e);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uc="tensorflowjs",Wc=1,Xr="models_store",pr="model_info_store";function yv(){if(!me().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t=typeof window>"u"?self:window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function jc(t){const e=t.result;e.createObjectStore(Xr,{keyPath:"modelPath"}),e.createObjectStore(pr,{keyPath:"modelPath"})}class ls{constructor(e){if(this.indexedDB=yv(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,n){return new Promise((r,s)=>{const i=this.indexedDB.open(Uc,Wc);i.onupgradeneeded=()=>jc(i),i.onsuccess=()=>{const o=i.result;if(n==null){const a=o.transaction(Xr,"readonly"),u=a.objectStore(Xr).get(this.modelPath);u.onsuccess=()=>{if(u.result==null)return o.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(u.result.modelArtifacts)},u.onerror=c=>(o.close(),s(u.error)),a.oncomplete=()=>o.close()}else{const a=pf(n),l=o.transaction(pr,"readwrite");let u=l.objectStore(pr);const c=u.put({modelPath:this.modelPath,modelArtifactsInfo:a});let h;c.onsuccess=()=>{h=o.transaction(Xr,"readwrite");const d=h.objectStore(Xr).put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:a});d.onsuccess=()=>r({modelArtifactsInfo:a}),d.onerror=p=>{u=l.objectStore(pr);const y=u.delete(this.modelPath);y.onsuccess=()=>(o.close(),s(d.error)),y.onerror=w=>(o.close(),s(d.error))}},c.onerror=f=>(o.close(),s(c.error)),l.oncomplete=()=>{h==null?o.close():h.oncomplete=()=>o.close()}}},i.onerror=o=>s(i.error)})}}ls.URL_SCHEME="indexeddb://";const vv=t=>me().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(ls.URL_SCHEME)?oE(t.slice(ls.URL_SCHEME.length)):null;Je.registerSaveRouter(vv);Je.registerLoadRouter(vv);function oE(t){return new ls(t)}function aE(t){return t.startsWith(ls.URL_SCHEME)?t.slice(ls.URL_SCHEME.length):t}class lE{constructor(){this.indexedDB=yv()}async listModels(){return new Promise((e,n)=>{const r=this.indexedDB.open(Uc,Wc);r.onupgradeneeded=()=>jc(r),r.onsuccess=()=>{const s=r.result,i=s.transaction(pr,"readonly"),a=i.objectStore(pr).getAll();a.onsuccess=()=>{const l={};for(const u of a.result)l[u.modelPath]=u.modelArtifactsInfo;e(l)},a.onerror=l=>(s.close(),n(a.error)),i.oncomplete=()=>s.close()},r.onerror=s=>n(r.error)})}async removeModel(e){return e=aE(e),new Promise((n,r)=>{const s=this.indexedDB.open(Uc,Wc);s.onupgradeneeded=()=>jc(s),s.onsuccess=()=>{const i=s.result,o=i.transaction(pr,"readwrite"),a=o.objectStore(pr),l=a.get(e);let u;l.onsuccess=()=>{if(l.result==null)return i.close(),r(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const c=a.delete(e),h=()=>{u=i.transaction(Xr,"readwrite");const d=u.objectStore(Xr).delete(e);d.onsuccess=()=>n(l.result.modelArtifactsInfo),d.onerror=p=>r(l.error)};c.onsuccess=h,c.onerror=f=>(h(),i.close(),r(l.error))}},l.onerror=c=>(i.close(),r(l.error)),o.oncomplete=()=>{u==null?i.close():u.oncomplete=()=>i.close()}},s.onerror=i=>r(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xn="/",Ns="tensorflowjs_models",wv="info",uE="model_topology",cE="weight_specs",hE="weight_data",fE="model_metadata";function bv(t){return{info:[Ns,t,wv].join(Xn),topology:[Ns,t,uE].join(Xn),weightSpecs:[Ns,t,cE].join(Xn),weightData:[Ns,t,hE].join(Xn),modelMetadata:[Ns,t,fE].join(Xn)}}function kv(t){for(const e of Object.values(t))window.localStorage.removeItem(e)}function dE(t){const e=t.split(Xn);if(e.length<3)throw new Error(`Invalid key format: ${t}`);return e.slice(1,e.length-1).join(Xn)}function pE(t){return t.startsWith(us.URL_SCHEME)?t.slice(us.URL_SCHEME.length):t}class us{constructor(e){if(!me().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=bv(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),s=pf(e);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,q2(e.weightData));const i={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:s}}catch{throw kv(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=s;const i=this.LS.getItem(this.keys.modelMetadata);if(i!=null){const a=JSON.parse(i);n.format=a.format,n.generatedBy=a.generatedBy,n.convertedBy=a.convertedBy,a.signature!=null&&(n.signature=a.signature),a.userDefinedMetadata!=null&&(n.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(n.modelInitializer=a.modelInitializer),a.trainingConfig!=null&&(n.trainingConfig=a.trainingConfig)}const o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=Y2(o),n}}us.URL_SCHEME="localstorage://";const xv=t=>me().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(us.URL_SCHEME)?mE(t.slice(us.URL_SCHEME.length)):null;Je.registerSaveRouter(xv);Je.registerLoadRouter(xv);function mE(t){return new us(t)}class gE{constructor(){b(me().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),b(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},n=Ns+Xn,r=Xn+wv;for(let s=0;s<this.LS.length;++s){const i=this.LS.key(s);if(i.startsWith(n)&&i.endsWith(r)){const o=dE(i);e[o]=JSON.parse(this.LS.getItem(i))}}return e}async removeModel(e){e=pE(e);const n=bv(e);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(n.info));return kv(n),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bp="://";class Mn{constructor(){this.managers={}}static getInstance(){return Mn.instance==null&&(Mn.instance=new Mn),Mn.instance}static registerManager(e,n){b(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(Bp)&&(e=e.slice(0,e.indexOf(Bp))),b(e.length>0,()=>"scheme must not be an empty string.");const r=Mn.getInstance();b(r.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),r.managers[e]=n}static getManager(e){const n=Mn.getInstance().managers[e];if(n==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return n}static getSchemes(){return Object.keys(Mn.getInstance().managers)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class yE{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,n){return fetch(e,n)}now(){return performance.now()}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,n){return new TextDecoder(n).decode(e)}setTimeoutCustom(e,n){if(!window||!me().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,n);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}}if(me().get("IS_BROWSER")){me().setPlatform("browser",new yE);try{Mn.registerManager(us.URL_SCHEME,new gE)}catch{}try{Mn.registerManager(ls.URL_SCHEME,new lE)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vE={importFetch:()=>require("node-fetch")};let $u;class wE{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,n){return me().global.fetch!=null?me().global.fetch(e,n):($u==null&&($u=vE.importFetch()),$u(e,n))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(e)}decode(e,n){return e.length===0?"":new this.util.TextDecoder(n).decode(e)}}me().get("IS_NODE")&&!me().get("IS_BROWSER")&&me().setPlatform("node",new wE);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function To(t,e="float32",n){return e=e||"float32",Gy(t),new _2(t,e,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bE(t,e){const n=N(t,"x","cast");if(!rS(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&n.dtype!=="string"||e!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:n},s={dtype:e};return D.runKernel(uf,r,s)}const H=_({cast_:bE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kE(t){const n={x:N(t,"x","clone","string_or_numeric")};return D.runKernel(cf,n)}const Qr=_({clone_:kE});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xE(t,e=!1){console.log(t.toString(e))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */dv();const SE={buffer:To,cast:H,clone:Qr,print:xE};L2(SE);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Up(t,e,n,r){o(t),n=n??0,r=r??1,a(n,r);let s=0;const i=l=>(l.then(u=>{const c=n+ ++s/t.length*(r-n);return e(c),u}),l);function o(l){b(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,u){b(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),b(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${u}`),b(u>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${u}`)}return Promise.all(t.map(i))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function EE(t,e){e==null&&(e={});const n=e.fetchFunc==null?me().platform.fetch:e.fetchFunc,r=t.map(h=>n(h,e.requestInit,{isBinary:!0})),s=0,i=.5,a=(e.onProgress==null?await Promise.all(r):await Up(r,e.onProgress,s,i)).map(h=>h.arrayBuffer()),l=.5,u=1;return e.onProgress==null?await Promise.all(a):await Up(a,e.onProgress,l,u)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const IE="application/octet-stream",NE="application/json";class mf{constructor(e,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.onProgress=n.onProgress,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(b(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=me().platform.fetch,b(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&b(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{}}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],s=X2(e,r);n.body.append("model.json",new Blob([JSON.stringify(s)],{type:NE}),"model.json"),e.weightData!=null&&n.body.append("model.weights.bin",new Blob([e.weightData],{type:IE}),"model.weights.bin");const i=await this.fetch(this.path,n);if(i.ok)return{modelArtifactsInfo:pf(e),responses:[i]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${i.status}.`)}async load(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await e.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}const r=n.modelTopology,s=n.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Z2(n,i=>this.loadWeights(i))}async loadWeights(e){const n=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=TE(n),i=this.weightPathPrefix||r,o=Q2(e),a=[],l=[];for(const c of e)for(const h of c.paths)this.weightUrlConverter!=null?l.push(this.weightUrlConverter(h)):a.push(i+h+s);this.weightUrlConverter&&a.push(...await Promise.all(l));const u=await EE(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[o,gv(u)]}}mf.URL_SCHEME_REGEX=/^https?:\/\//;function TE(t){const e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),r=t.substring(0,e),s=n>e?t.substring(n):"";return[r+"/",s]}function Wp(t){return t.match(mf.URL_SCHEME_REGEX)!=null}const Sv=(t,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let n=!0;if(Array.isArray(t)?n=t.every(r=>Wp(r)):n=Wp(t),n)return Ev(t,e)}return null};Je.registerSaveRouter(Sv);Je.registerLoadRouter(Sv);function Ev(t,e){return new mf(t,e)}function CE(t,e){return Ev(t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zu{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class AE{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=n=>Promise.resolve(e.save(n)))}}function DE(t,e,n,r){const s=arguments;return new AE($E(...s))}function $E(t,e,n,r){return arguments.length===1?t.modelTopology!=null||t.weightSpecs!=null?new zu(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new zu({modelTopology:t})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new zu({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:r}))}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zE(t,e,n=!1,r=!1){let s=N(t,"a","matMul"),i=N(e,"b","matMul");[s,i]=it(s,i);const o={a:s,b:i},a={transposeA:n,transposeB:r};return D.runKernel(Zy,o,a)}const ke=_({matMul_:zE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ME(t,e,n=1,r=0,s="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);const o={indices:N(t,"indices","oneHot","int32")},a={dtype:s,depth:e,onValue:n,offValue:r};return D.runKernel(z0,o,a)}const Na=_({oneHot_:ME});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vc(){return D.memory()}function A(t,e){return D.tidy(t,e)}function ee(t){Ar(t).forEach(n=>n.dispose())}function Gn(t){return D.keep(t)}function gf(){return D.backend}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _E(t){const n={input:N(t,"input","imag")};return D.runKernel(HS,n)}const FE=_({imag_:_E});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LE(t){const n={x:N(t,"x","neg")};return D.runKernel(D0,n)}const dt=_({neg_:LE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RE(t){const n={input:N(t,"input","real")};return D.runKernel(d2,n)}const OE=_({real_:RE});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PE(t,e,n){const r=N(t,"x","transpose");if(e==null&&(e=r.shape.map((o,a)=>a).reverse()),b(r.rank===e.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${e}.`),e.forEach(o=>{b(o>=0&&o<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${e}`)}),r.rank<=1)return r.clone();const s={x:r},i={perm:e};return r.dtype==="complex64"?A(()=>{let o=OE(r),a=FE(r);return o=D.runKernel(Ea,{x:o},i),a=D.runKernel(Ea,{x:a},i),n&&(a=dt(a)),Rl(o,a)}):D.runKernel(Ea,s,i)}const ce=_({transpose_:PE});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tt(t,e){const n=[];for(let r=0;r<e.length;r++){const s=t[t.length-r-1],i=e.length-r-1,o=e[i];(s==null||s===1&&o>1)&&n.unshift(i)}return n}function Ue(t,e){const n=[],r=Math.max(t.length,e.length);for(let s=0;s<r;s++){let i=t[t.length-s-1];i==null&&(i=1);let o=e[e.length-s-1];if(o==null&&(o=1),i===1)n.unshift(o);else if(o===1)n.unshift(i);else if(i!==o){const a=`Operands could not be broadcast together with shapes ${t} and ${e}.`;throw Error(a)}else n.unshift(i)}return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mu(t,e,n){if(Fl(t),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=mi(t,n);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return gi(t,e,r,n)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BE(t,e,n){let r;const s=t.shape.length;typeof e=="number"?r=[e,...new Array(s-1).fill(0)]:e.length<s?r=e.concat(new Array(s-e.length).fill(0)):r=e.slice(),r.forEach(o=>{b(o!==-1,()=>"slice() does not support negative begin indexing.")});let i;return n==null?i=new Array(s).fill(-1):typeof n=="number"?i=[n,...new Array(s-1).fill(-1)]:n.length<s?i=n.concat(new Array(s-n.length).fill(-1)):i=n,i=i.map((o,a)=>o>=0?o:(b(o===-1,()=>`Negative size values should be exactly -1 but got ${o} for the slice() size at index ${a}.`),t.shape[a]-r[a])),[r,i]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class yi{getClassName(){return this.constructor.className}static fromConfig(e,n){return new e(n)}}class Qt{constructor(){this.classNameMap={}}static getMap(){return Qt.instance==null&&(Qt.instance=new Qt),Qt.instance}static register(e){Qt.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function R(t){b(t.className!=null,()=>"Class being registered does not have the static className property defined."),b(typeof t.className=="string",()=>"className is required to be a string, but got type "+typeof t.className),b(t.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),Qt.register(t)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UE(t,e){let n=N(t,"a","add"),r=N(e,"b","add");[n,r]=it(n,r);const s={a:n,b:r};return D.runKernel(lf,s)}const P=_({add_:UE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WE(t,e){let n=N(t,"a","floorDiv"),r=N(e,"b","floorDiv");[n,r]=it(n,r);const s={a:n,b:r};return D.runKernel(m0,s)}const jE=_({floorDiv_:WE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VE(t,e){let n=N(t,"a","div"),r=N(e,"b","div");if([n,r]=it(n,r),n.dtype==="int32"&&r.dtype==="int32")return jE(n,r);const s={a:n,b:r},i={};return D.runKernel(c0,s,i)}const J=_({div_:VE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GE(t,e){let n=N(t,"a","mul"),r=N(e,"b","mul");[n,r]=it(n,r);const s={a:n,b:r};return D.runKernel(A0,s)}const T=_({mul_:GE});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HE(t){const e=N(t,"x","abs");if(e.dtype==="complex64"){const n={x:e};return D.runKernel(t0,n)}else{const n={x:e};return D.runKernel(qy,n)}}const bt=_({abs_:HE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KE(t,e=null,n=!1){const s={x:N(t,"x","all","bool")},i={axis:e,keepDims:n};return D.runKernel(mS,s,i)}const qE=_({all_:KE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YE(t,e=null,n=!1){const s={x:N(t,"x","any","bool")},i={axis:e,keepDims:n};return D.runKernel(gS,s,i)}const jp=_({any_:YE});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XE(t,e=0){const r={x:N(t,"x","argMax")},s={axis:e};return D.runKernel(Yy,r,s)}const si=_({argMax_:XE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JE(t,e,n,r,s,i,o=!1,a="channelsLast"){let[l,u,c,h]=[-1,-1,-1,-1];if(a==="channelsLast")[l,u,c,h]=t;else if(a==="channelsFirst")[l,h,u,c]=t;else throw new Error(`Unknown dataFormat ${a}`);const[f,d,,p]=e,[y,w]=Gc(n),[g,m]=Gc(r),v=Hc(f,g),k=Hc(d,m),{padInfo:S,outHeight:C,outWidth:z}=eI(s,u,c,y,w,v,k,i,a),$=o?p*h:p;let F;return a==="channelsFirst"?F=[l,$,C,z]:a==="channelsLast"&&(F=[l,C,z,$]),{batchSize:l,dataFormat:a,inHeight:u,inWidth:c,inChannels:h,outHeight:C,outWidth:z,outChannels:$,padInfo:S,strideHeight:y,strideWidth:w,filterHeight:f,filterWidth:d,effectiveFilterHeight:v,effectiveFilterWidth:k,dilationHeight:g,dilationWidth:m,inShape:t,outShape:F,filterShape:e}}function ZE(t,e,n,r,s){r==null&&(r=QE(t,e,n));const i=t[0],o=t[1],a=nl((i-e+2*r)/n+1,s),l=nl((o-e+2*r)/n+1,s);return[a,l]}function QE(t,e,n,r=1){const s=Hc(e,r);return Math.floor((t[0]*(n-1)-n+s)/2)}function Gc(t){return typeof t=="number"?[t,t,t]:t.length===2?[t[0],t[1],1]:t}function Hc(t,e){return e<=1?t:t+(t-1)*(e-1)}function eI(t,e,n,r,s,i,o,a,l){let u,c,h;if(typeof t=="number"){u={top:t,bottom:t,left:t,right:t,type:t===0?"VALID":"NUMBER"};const d=ZE([e,n],i,r,t,a);c=d[0],h=d[1]}else if(t==="same"){c=Math.ceil(e/r),h=Math.ceil(n/s);const f=Math.max(0,(c-1)*r+i-e),d=Math.max(0,(h-1)*s+o-n),p=Math.floor(f/2),y=f-p,w=Math.floor(d/2),g=d-w;u={top:p,bottom:y,left:w,right:g,type:"SAME"}}else if(t==="valid")u={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((e-i+1)/r),h=Math.ceil((n-o+1)/s);else if(typeof t=="object"){const f=l==="channelsLast"?t[1][0]:t[2][0],d=l==="channelsLast"?t[1][1]:t[2][1],p=l==="channelsLast"?t[2][0]:t[3][0],y=l==="channelsLast"?t[2][1]:t[3][1];u={top:f,bottom:d,left:p,right:y,type:f===0&&d===0&&p===0&&y===0?"VALID":"EXPLICIT"},c=nl((e-i+f+d)/r+1,a),h=nl((n-o+p+y)/s+1,a)}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:u,outHeight:c,outWidth:h}}function nl(t,e){if(!e)return Math.trunc(t);switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error(`Unknown roundingMode ${e}`)}}function ii(t){const[e,n,r]=Gc(t);return e===1&&n===1&&r===1}function ms(t,e){return ii(t)||ii(e)}function Ot(t,e,n){if(n!=null){if(typeof e=="string")throw Error(`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);if(typeof e=="number")b(Qa(e),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);else if(typeof e=="object")e.forEach(r=>{r.forEach(s=>{b(Qa(s),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${s}.`)})});else throw Error(`Error in ${t}: Unknown padding parameter: ${e}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tI(t,e){const r={x:N(t,"x","reshape","string_or_numeric")},s={shape:e};return D.runKernel(O0,r,s)}const M=_({reshape_:tI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nI(t,e,n,r,s){const i=N(t,"x","avgPool","float32"),o=1;b(ms(n,o),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);let a=i,l=!1;i.rank===3&&(l=!0,a=M(i,[1,i.shape[0],i.shape[1],i.shape[2]])),b(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),Ot("avgPool",r,s);const u={x:a},c={filterSize:e,strides:n,pad:r,dimRoundingMode:s};let h=D.runKernel(Xy,u,c);return h=H(h,i.dtype),l?M(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const rI=_({avgPool_:nI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sI(t,e,n,r,s,i="NDHWC"){const o=N(t,"x","avgPool3d","float32");let a=o,l=!1;o.rank===4&&(l=!0,a=M(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),b(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),b(i==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${i}`),Ot("avgPool3d",r,s);const u={x:a},c={filterSize:e,strides:n,pad:r,dimRoundingMode:s,dataFormat:i};let h=D.runKernel(Jy,u,c);return h=H(h,a.dtype),l?M(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const iI=_({avgPool3d_:sI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oI(t,e=0){b(t.length>=1,()=>"Pass at least one tensor to concat");const n=mv(t,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(i=>{if(i.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${i.dtype}. `)}),n.length===1)return Qr(n[0]);const r=n,s={axis:e};return D.runKernel(n0,r,s)}const bn=_({concat_:oI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aI(t){const n={x:N(t,"x","sigmoid","float32")};return D.runKernel(X0,n)}const Ol=_({sigmoid_:aI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lI(t,e,n){const r=N(t,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},i={begin:e,size:n};return D.runKernel(K0,s,i)}const Ne=_({slice_:lI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uI(t){const n={x:N(t,"x","tanh","float32")};return D.runKernel(sv,n)}const Iv=_({tanh_:uI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cI(t,e,n){const r=N(t,"x","batchToSpaceND"),s=e.reduce((a,l)=>a*l);b(r.rank>=1+e.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${e.length}`),b(n.length===e.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${e.length}`),b(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${s}`);const i={x:r},o={blockShape:e,crops:n};return D.runKernel(Qy,i,o)}const hI=_({batchToSpaceND_:cI});function fI(t){let e;return t.rank===0||t.rank===1?e=M(t,[1,1,1,t.size]):t.rank===2?e=M(t,[1,1,t.shape[0],t.shape[1]]):t.rank===3?e=M(t,[1,t.shape[0],t.shape[1],t.shape[2]]):e=t,e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dI(t,e,n,r,s,i){i==null&&(i=.001);const o=N(t,"x","batchNorm"),a=N(e,"mean","batchNorm"),l=N(n,"variance","batchNorm");let u;s!=null&&(u=N(s,"scale","batchNorm"));let c;r!=null&&(c=N(r,"offset","batchNorm")),b(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),b(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),b(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const f={x:fI(o),scale:u,offset:c,mean:a,variance:l},d={varianceEpsilon:i},p=D.runKernel(g0,f,d);return M(p,o.shape)}const yf=_({batchNorm_:dI});function pI(t,e,n,r,s,i){const o=N(t,"x","batchNorm"),a=N(e,"mean","batchNorm"),l=N(n,"variance","batchNorm");let u;s!=null&&(u=N(s,"scale","batchNorm"));let c;return r!=null&&(c=N(r,"offset","batchNorm")),b(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),b(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),b(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&b(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${u.rank}.`),c!=null&&b(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${c.rank}.`),yf(o,a,l,c,u,i)}const mI=_({batchNorm2d_:pI});function gI(t,e,n,r,s,i){const o=N(t,"x","batchNorm"),a=N(e,"mean","batchNorm"),l=N(n,"variance","batchNorm");let u;s!=null&&(u=N(s,"scale","batchNorm"));let c;return r!=null&&(c=N(r,"offset","batchNorm")),b(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),b(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),b(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&b(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${u.rank}.`),c!=null&&b(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${c.rank}.`),yf(o,a,l,c,u,i)}const yI=_({batchNorm3d_:gI});function vI(t,e,n,r,s,i){const o=N(t,"x","batchNorm"),a=N(e,"mean","batchNorm"),l=N(n,"variance","batchNorm");let u;s!=null&&(u=N(s,"scale","batchNorm"));let c;return r!=null&&(c=N(r,"offset","batchNorm")),b(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),b(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),b(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&b(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${u.rank}.`),c!=null&&b(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${c.rank}.`),yf(o,a,l,c,u,i)}const wI=_({batchNorm4d_:vI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bI(t,e,n){const r=N(t,"x","bincount"),s=N(e,"weights","bincount");b(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),b(n>=0,()=>`size must be non-negative, but got ${n}.`),b(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const i={x:r,weights:s},o={size:n};return D.runKernel(IS,i,o)}const kI=_({bincount_:bI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xI(t,e){let n=N(t,"broadcastTo","x");const r=n.shape;if(e.some(u=>!(u>0)||u%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${e}].`);if(e.length<n.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${n.rank}.`);if(e.length>n.rank){const u=n.shape.slice();for(;u.length<e.length;)u.unshift(1);n=M(n,u)}const s=n.shape,i=Array.from(e);for(let u=e.length-1;u>=0;u--)if(s[u]===e[u])i[u]=1;else if(n.shape[u]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${e}].`);if(i.map((u,c)=>u>1?c:-1).filter(u=>u>=0).length===0)return Qr(n);const a={x:n},l={reps:i};return D.runKernel(hf,a,l)}const _u=_({broadcastTo_:xI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pl(t,e,n){const r={shape:t,value:e,dtype:n};return D.runKernel(jS,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SI(t,e,n){const r=N(t,"x","clipByValue");if(b(e<=n,()=>`Error in clip: min (${e}) must be less than or equal to max (${n}).`),e===n)return Pl(r.shape,e,r.dtype);const s={x:r},i={clipValueMin:e,clipValueMax:n};return D.runKernel(e0,s,i)}const an=_({clipByValue_:SI});function EI(t){return bn(t,0)}const II=_({concat1d_:EI});function NI(t,e){return bn(t,e)}const TI=_({concat2d_:NI});function CI(t,e){return bn(t,e)}const AI=_({concat3d_:CI});function DI(t,e){return bn(t,e)}const $I=_({concat4d_:DI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zI(t,e,n,r,s="NHWC",i=[1,1],o){const a=N(t,"x","conv2d","float32"),l=N(e,"filter","conv2d","float32");let u=a,c=!1;a.rank===3&&(c=!0,u=M(a,[1,a.shape[0],a.shape[1],a.shape[2]])),b(u.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${u.rank}.`),b(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),Ot("conv2d",r,o);const h=s==="NHWC"?u.shape[3]:u.shape[1];b(h===l.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${l.shape[2]}.`),b(ms(n,i),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${i}'`);const f={x:u,filter:l},d={strides:n,pad:r,dataFormat:s,dilations:i,dimRoundingMode:o},p=D.runKernel(r0,f,d);return c?M(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const oi=_({conv2d_:zI});function MI(t,e,n,r,s="NWC",i=1,o){const a=N(t,"x","conv1d"),l=N(e,"filter","conv1d");let u=a,c=!1;a.rank===2&&(c=!0,u=M(a,[1,a.shape[0],a.shape[1]])),b(u.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${u.rank}.`),b(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),Ot("conv1d",r,o),b(u.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${u.shape[2]}) must match input depth for filter ${l.shape[1]}.`),b(ms(n,i),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${i}'`),b(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const h=M(l,[1,l.shape[0],l.shape[1],l.shape[2]]),f=M(u,[u.shape[0],1,u.shape[1],u.shape[2]]),w=oi(f,h,[1,n],r,"NHWC",[1,i],o);return c?M(w,[w.shape[2],w.shape[3]]):M(w,[w.shape[0],w.shape[2],w.shape[3]])}const _I=_({conv1d_:MI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FI(t,e,n,r,s,i="NHWC",o){b(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let a=t,l=e,u=!1;e.rank===3&&(u=!0,l=M(e,[1,e.shape[0],e.shape[1],e.shape[2]]),a=[1,t[0],t[1],t[2]]),b(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),b(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),b(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const c=i==="NHWC"?a[3]:a[1],h=i==="NHWC"?l.shape[3]:l.shape[1];b(c===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[2]}.`),b(h===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${n.shape[3]}.`),Ot("conv2dDerInput",s,o);const f={dy:l,filter:n},d={strides:r,pad:s,dataFormat:i,dimRoundingMode:o,inputShape:a},p=D.runKernel(s0,f,d);return u?M(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const vf=_({conv2DBackpropInput_:FI});function LI(t,e,n,r,s,i){const o=N(t,"x","conv2dTranspose"),a=N(e,"filter","conv2dTranspose");return vf(n,o,a,r,s,"NHWC",i)}const RI=_({conv2dTranspose_:LI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OI(t,e,n,r,s="NDHWC",i=[1,1,1]){const o=N(t,"x","conv3d"),a=N(e,"filter","conv3d");let l=o,u=!1;o.rank===4&&(u=!0,l=M(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),b(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),b(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),b(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),b(ms(n,i),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${i}'`),b(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`);const c={x:l,filter:a},h={strides:n,pad:r,dataFormat:s,dilations:i},f=D.runKernel(i0,c,h);return u?M(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const PI=_({conv3d_:OI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BI(t,e,n,r,s){b(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let i=t,o=e,a=!1;e.rank===4&&(a=!0,o=M(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),i=[1,t[0],t[1],t[2],t[3]]);const l=i[4],u=o.shape[4];b(i.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${i.length}.`),b(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),b(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),b(l===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${n.shape[3]}.`),b(u===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${u}) must match output depth for filter ${n.shape[4]}.`);const c={dy:o,filter:n},h={pad:s,strides:r,inputShape:i},f=D.runKernel($S,c,h);return a?M(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const Nv=_({conv3DBackpropInput_:BI});function UI(t,e,n,r,s){const i=N(t,"x","conv3dTranspose"),o=N(e,"filter","conv3dTranspose");return Nv(n,i,o,r,s)}const WI=_({conv3dTranspose_:UI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jI(t){const n={x:N(t,"x","cos","float32")};return D.runKernel(o0,n)}const Tv=_({cos_:jI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VI(t){const n={x:N(t,"x","cosh","float32")};return D.runKernel(a0,n)}const GI=_({cosh_:VI});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HI(t,e=0,n=!1,r=!1){const i={x:N(t,"x","cumprod")},o={axis:e,exclusive:n,reverse:r};return D.runKernel(zS,i,o)}const Vp=_({cumprod_:HI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KI(t,e=0,n=!1,r=!1){const i={x:N(t,"x","cumsum")},o={axis:e,exclusive:n,reverse:r};return D.runKernel(l0,i,o)}const qI=_({cumsum_:KI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YI(t,e,n,r,s="NHWC",i=[1,1],o){const a=N(t,"x","depthwiseConv2d","float32"),l=N(e,"filter","depthwiseConv2d","float32");let u=a,c=!1;a.rank===3&&(c=!0,u=M(a,[1,a.shape[0],a.shape[1],a.shape[2]])),b(u.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${u.rank}.`),b(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const h=s==="NHWC"?u.shape[3]:u.shape[1];b(h===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${l.shape[2]}.`),Ot("depthwiseConv2d",r,o);const f={x:u,filter:l},d={strides:n,pad:r,dataFormat:s,dilations:i,dimRoundingMode:o},p=D.runKernel(u0,f,d);return c?M(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Cv=_({depthwiseConv2d_:YI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XI(t,e){let n=N(t,"a","equal","string_or_numeric"),r=N(e,"b","equal","string_or_numeric");[n,r]=it(n,r),Ue(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(US,s)}const Dr=_({equal_:XI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JI(t,e,n){const r=N(e,"a","where"),s=N(n,"b","where"),i=N(t,"condition","where","bool"),o=Ue(Ue(i.shape,r.shape),s.shape),a=_u(i,o),l=_u(r,o),u=_u(s,o),c={condition:a,t:l,e:u};return D.runKernel(G0,c)}const ln=_({where_:JI});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZI(t){const n={x:N(t,"x","zerosLike")};return D.runKernel(av,n)}const pe=_({zerosLike_:ZI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QI(t){const n={x:N(t,"x","elu","float32")};return D.runKernel(h0,n)}const wf=_({elu_:QI});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eN(t,e){for(let n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return!1;return!0}function tN(t,e,n){const r=t.length+e.length,s=[];let i=0,o=0;for(let a=0;a<r;a++)n.indexOf(a)===-1?s.push(t[i++]):s.push(e[o++]);return s}function nN(t,e){const n=[],r=t.length;for(let i=0;i<r;i++)e.indexOf(i)===-1&&n.push(t[i]);const s=e.map(i=>t[i]);return[n,s]}function rl(t,e){const n=e.map(r=>1);return tN(t,n,e)}function Av(t,e){if(eN(t,e))return null;const n=[];for(let r=0;r<e;++r)t.indexOf(r)===-1&&n.push(r);return t.forEach(r=>n.push(r)),n}function bf(t){return t.map((e,n)=>[n,e]).sort((e,n)=>e[1]-n[1]).map(e=>e[0])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rN(t,e=null,n=!1){const s={x:N(t,"x","max")},i={reductionIndices:e,keepDims:n};return D.runKernel(x0,s,i)}const er=_({max_:rN});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sN(t,e=null,n=!1){const s={x:N(t,"x","min")},i={axis:e,keepDims:n};return D.runKernel(T0,s,i)}const Gp=_({min_:sN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iN(t,e){let n=N(t,"base","pow"),r=N(e,"exp","pow");[n,r]=it(n,r);const s={a:n,b:r};return D.runKernel(F0,s)}const go=_({pow_:iN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ge(t,e){if((Sn(t)&&e!=="string"||Array.isArray(t))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&Sn(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return gi(t,[],[],e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oN(t){const n={x:N(t,"x","sqrt","float32")};return D.runKernel(Z0,n)}const vt=_({sqrt_:oN});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aN(t){const e=N(t,"x","square"),n={};return D.runKernel("Square",{x:e},n)}const Ae=_({square_:aN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lN(t,e=null,n=!1){let r=N(t,"x","sum");r.dtype==="bool"&&(r=H(r,"int32"));const s={x:r},i={axis:e,keepDims:n};return D.runKernel(Q0,s,i)}const Y=_({sum_:lN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uN(t,e="euclidean",n=null,r=!1){t=N(t,"x","norm");const s=Dv(t,e,n);let i=s.shape;if(r){const o=Hn(n,t.shape);i=rl(s.shape,o)}return M(s,i)}function Dv(t,e,n=null){if(t.rank===0)return bt(t);if(t.rank!==1&&n===null)return Dv(M(t,[-1]),e,n);if(t.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(e===1)return Y(bt(t),n);if(e===1/0)return er(bt(t),n);if(e===-1/0)return Gp(bt(t),n);if(e==="euclidean"||e===2)return vt(Y(go(bt(t),ge(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(n)&&n.length===2){if(e===1)return er(Y(bt(t),n[0]),n[1]-1);if(e===1/0)return er(Y(bt(t),n[1]),n[0]);if(e===-1/0)return Gp(Y(bt(t),n[1]),n[0]);if(e==="fro"||e==="euclidean")return vt(Y(Ae(t),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const $v=_({norm_:uN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cN(t){const n={x:N(t,"x","exp")};return D.runKernel(f0,n)}const cs=_({exp_:cN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hN(t,e=0){const n=N(t,"x","expandDims","string_or_numeric");b(e<=n.rank,()=>"Axis must be <= rank of the tensor");const r={input:n},s={dim:e};return D.runKernel(d0,r,s)}const gn=_({expandDims_:hN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fN(t,e){const n=N(t,"x","tile","string_or_numeric");b(n.rank===e.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${e}.`);const r={x:n},s={reps:e};return D.runKernel(hf,r,s)}const On=_({tile_:fN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dN(t,e,n,r="float32"){e==null&&(e=t);const s=To([t,e],r),i=t<=e?t:e;for(let a=0;a<i;++a)s.set(1,a,a);const o=M(s.toTensor(),[t,e]);if(n==null)return o;if(n.length===1)return On(gn(o,0),[n[0],1,1]);if(n.length===2)return On(gn(gn(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return On(gn(gn(gn(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const zv=_({eye_:dN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pN(t){const n={x:N(t,"x","floor","float32")};return D.runKernel(p0,n)}const kf=_({floor_:pN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mN(t,e,n=0,r=0){const s=N(t,"x","gather"),i=N(e,"indices","gather","int32"),o={x:s,indices:i},a={axis:n,batchDims:r};return D.runKernel(y0,o,a)}const Ps=_({gather_:mN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gN(t,e){let n=N(t,"a","greater","string_or_numeric"),r=N(e,"b","greater","string_or_numeric");[n,r]=it(n,r),Ue(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(GS,s)}const Tn=_({greater_:gN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yN(t,e){let n=N(t,"a","greaterEqual","string_or_numeric"),r=N(e,"b","greaterEqual","string_or_numeric");[n,r]=it(n,r),Ue(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(v0,s)}const Co=_({greaterEqual_:yN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vN(t,e=.2){const r={x:N(t,"x","leakyRelu")},s={alpha:e};return D.runKernel(w0,r,s)}const Mv=_({leakyRelu_:vN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wN(t,e){let n=N(t,"a","less","string_or_numeric"),r=N(e,"b","less","string_or_numeric");[n,r]=it(n,r),Ue(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(XS,s)}const bN=_({less_:wN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kN(t,e){let n=N(t,"a","lessEqual","string_or_numeric"),r=N(e,"b","lessEqual","string_or_numeric");[n,r]=it(n,r),Ue(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(JS,s)}const Ao=_({lessEqual_:kN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xN(t){const n={x:N(t,"x","log","float32")};return D.runKernel(b0,n)}const $r=_({log_:xN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SN(t){const n={x:N(t,"x","log1p")};return D.runKernel(k0,n)}const EN=_({log1p_:SN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function IN(t,e){b(Fc(t),()=>"The f passed in variableGrads(f) must be a function"),b(e==null||Array.isArray(e)&&e.every(u=>u instanceof el),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=e!=null;if(!n){e=[];for(const u in D.registeredVariables)e.push(D.registeredVariables[u])}const r=n?e.filter(u=>!u.trainable):null,s=e.length;e=e.filter(u=>u.trainable),b(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${s} variables is trainable.`);const i=!0,{value:o,grads:a}=D.gradients(t,e,null,i);b(a.some(u=>u!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),b(o.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${o.rank} tensor`);const l={};return e.forEach((u,c)=>{a[c]!=null&&(l[u.name]=a[c])}),r!=null&&r.forEach(u=>l[u.name]=null),{value:o,grads:l}}function yo(t){return D.customGrad(t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NN(t){const n={x:N(t,"x","softplus")};return D.runKernel(J0,n)}const xf=_({softplus_:NN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TN(t,e){let n=N(t,"a","sub"),r=N(e,"b","sub");[n,r]=it(n,r);const s={a:n,b:r};return D.runKernel(rv,s)}const te=_({sub_:TN});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CN(t,e=-1){const n=N(t,"logits","logSoftmax");if(e===-1&&(e=n.rank-1),e!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${e}`);return yo((s,i)=>{const a=er(s,e,!0),l=te(s,a),u=te(H(l,"float32"),$r(Y(cs(l),e,!0)));return i([u]),{value:u,gradFunc:(h,f)=>{const[d]=f,p=!0,y=cs(d);return te(h,T(Y(h,e,p),y))}}})(n)}const AN=_({logSoftmax_:CN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DN(t,e){const n=N(t,"a","logicalAnd","bool"),r=N(e,"b","logicalAnd","bool");Ue(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(ZS,s)}const vi=_({logicalAnd_:DN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $N(t){const n={x:N(t,"x","logicalNot","bool")};return D.runKernel(QS,n)}const zN=_({logicalNot_:$N});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MN(t,e,n,r,s){const i=N(t,"x","maxPool"),o=1;let a=i,l=!1;i.rank===3&&(l=!0,a=M(i,[1,i.shape[0],i.shape[1],i.shape[2]])),b(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),b(ms(n,o),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),Ot("maxPool",r,s);const u={x:a},c={filterSize:e,strides:n,pad:r,dimRoundingMode:s},h=D.runKernel(E0,u,c);return l?M(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const _N=_({maxPool_:MN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FN(t,e=[1,1,1],n,r,s,i="NDHWC"){const o=N(t,"x","maxPool3d");let a=o,l=!1;o.rank===4&&(l=!0,a=M(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),b(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),b(i==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${i}`),Ot("maxPool3d",r,s);const u={x:a},c={filterSize:e,strides:n,pad:r,dimRoundingMode:s,dataFormat:i},h=D.runKernel(I0,u,c);return l?M(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const LN=_({maxPool3d_:FN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RN(t,e){let n=N(t,"a","maximum"),r=N(e,"b","maximum");[n,r]=it(n,r),n.dtype==="bool"&&(n=H(n,"int32"),r=H(r,"int32")),Ue(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(S0,s)}const gs=_({maximum_:RN});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ON(t,e=null,n=!1){const s={x:N(t,"x","mean")},i={axis:e,keepDims:n};return D.runKernel(N0,s,i)}const Ge=_({mean_:ON});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rt(t,e="float32"){if(e==="complex64"){const r=rt(t,"float32"),s=rt(t,"float32");return Rl(r,s)}const n=sf(Et(t),e);return D.makeTensor(n,t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ys(t,e="float32"){if(e==="complex64"){const r=ys(t,"float32"),s=rt(t,"float32");return Rl(r,s)}const n=Vy(Et(t),e);return D.makeTensor(n,t,e)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PN(t,e){let n=N(t,"a","minimum"),r=N(e,"b","minimum");[n,r]=it(n,r),n.dtype==="bool"&&(n=H(n,"int32"),r=H(r,"int32")),Ue(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(C0,s)}const _v=_({minimum_:PN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BN(t,e=null,n=!1){t=N(t,"x","moments");const r=Hn(e,t.shape),s=Ge(t,r,n);let i=s.shape;n||(i=rl(s.shape,r));const o=Ae(te(H(t,"float32"),M(s,i))),a=Ge(o,r,n);return{mean:s,variance:a}}const Do=_({moments_:BN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UN(t,e){let n=N(t,"a","notEqual","string_or_numeric"),r=N(e,"b","notEqual","string_or_numeric");[n,r]=it(n,r),Ue(n.shape,r.shape);const s={a:n,b:r};return D.runKernel(a2,s)}const Kc=_({notEqual_:UN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WN(t){const n={x:N(t,"x","onesLike")};return D.runKernel($0,n)}const En=_({onesLike_:WN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jN(t,e,n=0){const r=N(t,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:e,constantValue:n},i={x:r};return D.runKernel(_0,i,s)}const Fv=_({pad_:jN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VN(t,e,n){const r=N(t,"x","spaceToBatchND");b(r.rank>=1+e.length,()=>`input rank ${r.rank} should be > than [blockShape] ${e.length}`),b(n.length===e.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${e.length}`),b(r.shape.reduce((o,a,l)=>l>0&&l<=e.length?o&&(a+n[l-1][0]+n[l-1][1])%e[l-1]===0:o,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${e.toString()}`);const s={x:r},i={blockShape:e,paddings:n};return D.runKernel(ev,s,i)}const GN=_({spaceToBatchND_:VN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HN(t,e){const n=N(t,"x","prelu"),r=N(e,"alpha","prelu"),s={x:n,alpha:r};return D.runKernel(L0,s)}const Lv=_({prelu_:HN});var Sf={exports:{}};Sf.exports;(function(t){(function(e,n,r){function s(l){var u=this,c=a();u.next=function(){var h=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=h-(u.c=h|0)},u.c=1,u.s0=c(" "),u.s1=c(" "),u.s2=c(" "),u.s0-=c(l),u.s0<0&&(u.s0+=1),u.s1-=c(l),u.s1<0&&(u.s1+=1),u.s2-=c(l),u.s2<0&&(u.s2+=1),c=null}function i(l,u){return u.c=l.c,u.s0=l.s0,u.s1=l.s1,u.s2=l.s2,u}function o(l,u){var c=new s(l),h=u&&u.state,f=c.next;return f.int32=function(){return c.next()*4294967296|0},f.double=function(){return f()+(f()*2097152|0)*11102230246251565e-32},f.quick=f,h&&(typeof h=="object"&&i(h,c),f.state=function(){return i(c,{})}),f}function a(){var l=4022871197,u=function(c){c=String(c);for(var h=0;h<c.length;h++){l+=c.charCodeAt(h);var f=.02519603282416938*l;l=f>>>0,f-=l,f*=l,l=f>>>0,f-=l,l+=f*4294967296}return(l>>>0)*23283064365386963e-26};return u}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.alea=o})(fs,t,!1)})(Sf);var KN=Sf.exports,Ef={exports:{}};Ef.exports;(function(t){(function(e,n,r){function s(a){var l=this,u="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var h=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^h^h>>>8},a===(a|0)?l.x=a:u+=a;for(var c=0;c<u.length+64;c++)l.x^=u.charCodeAt(c)|0,l.next()}function i(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l}function o(a,l){var u=new s(a),c=l&&l.state,h=function(){return(u.next()>>>0)/4294967296};return h.double=function(){do var f=u.next()>>>11,d=(u.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},h.int32=u.next,h.quick=h,c&&(typeof c=="object"&&i(c,u),h.state=function(){return i(u,{})}),h}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.xor128=o})(fs,t,!1)})(Ef);var qN=Ef.exports,If={exports:{}};If.exports;(function(t){(function(e,n,r){function s(a){var l=this,u="";l.next=function(){var h=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(h^h<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,a===(a|0)?l.x=a:u+=a;for(var c=0;c<u.length+64;c++)l.x^=u.charCodeAt(c)|0,c==u.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function i(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l.v=a.v,l.d=a.d,l}function o(a,l){var u=new s(a),c=l&&l.state,h=function(){return(u.next()>>>0)/4294967296};return h.double=function(){do var f=u.next()>>>11,d=(u.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},h.int32=u.next,h.quick=h,c&&(typeof c=="object"&&i(c,u),h.state=function(){return i(u,{})}),h}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.xorwow=o})(fs,t,!1)})(If);var YN=If.exports,Nf={exports:{}};Nf.exports;(function(t){(function(e,n,r){function s(a){var l=this;l.next=function(){var c=l.x,h=l.i,f,d;return f=c[h],f^=f>>>7,d=f^f<<24,f=c[h+1&7],d^=f^f>>>10,f=c[h+3&7],d^=f^f>>>3,f=c[h+4&7],d^=f^f<<7,f=c[h+7&7],f=f^f<<13,d^=f^f<<9,c[h]=d,l.i=h+1&7,d};function u(c,h){var f,d=[];if(h===(h|0))d[0]=h;else for(h=""+h,f=0;f<h.length;++f)d[f&7]=d[f&7]<<15^h.charCodeAt(f)+d[f+1&7]<<13;for(;d.length<8;)d.push(0);for(f=0;f<8&&d[f]===0;++f);for(f==8?d[7]=-1:d[f],c.x=d,c.i=0,f=256;f>0;--f)c.next()}u(l,a)}function i(a,l){return l.x=a.x.slice(),l.i=a.i,l}function o(a,l){a==null&&(a=+new Date);var u=new s(a),c=l&&l.state,h=function(){return(u.next()>>>0)/4294967296};return h.double=function(){do var f=u.next()>>>11,d=(u.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},h.int32=u.next,h.quick=h,c&&(c.x&&i(c,u),h.state=function(){return i(u,{})}),h}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.xorshift7=o})(fs,t,!1)})(Nf);var XN=Nf.exports,Tf={exports:{}};Tf.exports;(function(t){(function(e,n,r){function s(a){var l=this;l.next=function(){var c=l.w,h=l.X,f=l.i,d,p;return l.w=c=c+1640531527|0,p=h[f+34&127],d=h[f=f+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,p=h[f]=p^d,l.i=f,p+(c^c>>>16)|0};function u(c,h){var f,d,p,y,w,g=[],m=128;for(h===(h|0)?(d=h,h=null):(h=h+"\0",d=0,m=Math.max(m,h.length)),p=0,y=-32;y<m;++y)h&&(d^=h.charCodeAt((y+32)%h.length)),y===0&&(w=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,y>=0&&(w=w+1640531527|0,f=g[y&127]^=d+w,p=f==0?p+1:0);for(p>=128&&(g[(h&&h.length||0)&127]=-1),p=127,y=4*128;y>0;--y)d=g[p+34&127],f=g[p=p+1&127],d^=d<<13,f^=f<<17,d^=d>>>15,f^=f>>>12,g[p]=d^f;c.w=w,c.X=g,c.i=p}u(l,a)}function i(a,l){return l.i=a.i,l.w=a.w,l.X=a.X.slice(),l}function o(a,l){a==null&&(a=+new Date);var u=new s(a),c=l&&l.state,h=function(){return(u.next()>>>0)/4294967296};return h.double=function(){do var f=u.next()>>>11,d=(u.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},h.int32=u.next,h.quick=h,c&&(c.X&&i(c,u),h.state=function(){return i(u,{})}),h}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.xor4096=o})(fs,t,!1)})(Tf);var JN=Tf.exports,Cf={exports:{}};Cf.exports;(function(t){(function(e,n,r){function s(a){var l=this,u="";l.next=function(){var h=l.b,f=l.c,d=l.d,p=l.a;return h=h<<25^h>>>7^f,f=f-d|0,d=d<<24^d>>>8^p,p=p-h|0,l.b=h=h<<20^h>>>12^f,l.c=f=f-d|0,l.d=d<<16^f>>>16^p,l.a=p-h|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,a===Math.floor(a)?(l.a=a/4294967296|0,l.b=a|0):u+=a;for(var c=0;c<u.length+20;c++)l.b^=u.charCodeAt(c)|0,l.next()}function i(a,l){return l.a=a.a,l.b=a.b,l.c=a.c,l.d=a.d,l}function o(a,l){var u=new s(a),c=l&&l.state,h=function(){return(u.next()>>>0)/4294967296};return h.double=function(){do var f=u.next()>>>11,d=(u.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},h.int32=u.next,h.quick=h,c&&(typeof c=="object"&&i(c,u),h.state=function(){return i(u,{})}),h}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.tychei=o})(fs,t,!1)})(Cf);var ZN=Cf.exports,Rv={exports:{}};const QN={},eT=Object.freeze(Object.defineProperty({__proto__:null,default:QN},Symbol.toStringTag,{value:"Module"})),tT=xb(eT);(function(t){(function(e,n,r){var s=256,i=6,o=52,a="random",l=r.pow(s,i),u=r.pow(2,o),c=u*2,h=s-1,f;function d(k,S,C){var z=[];S=S==!0?{entropy:!0}:S||{};var $=g(w(S.entropy?[k,v(n)]:k??m(),3),z),F=new p(z),L=function(){for(var W=F.g(i),K=l,Z=0;W<u;)W=(W+Z)*s,K*=s,Z=F.g(1);for(;W>=c;)W/=2,K/=2,Z>>>=1;return(W+Z)/K};return L.int32=function(){return F.g(4)|0},L.quick=function(){return F.g(4)/4294967296},L.double=L,g(v(F.S),n),(S.pass||C||function(W,K,Z,se){return se&&(se.S&&y(se,F),W.state=function(){return y(F,{})}),Z?(r[a]=W,K):W})(L,$,"global"in S?S.global:this==r,S.state)}function p(k){var S,C=k.length,z=this,$=0,F=z.i=z.j=0,L=z.S=[];for(C||(k=[C++]);$<s;)L[$]=$++;for($=0;$<s;$++)L[$]=L[F=h&F+k[$%C]+(S=L[$])],L[F]=S;(z.g=function(W){for(var K,Z=0,se=z.i,ie=z.j,oe=z.S;W--;)K=oe[se=h&se+1],Z=Z*s+oe[h&(oe[se]=oe[ie=h&ie+K])+(oe[ie]=K)];return z.i=se,z.j=ie,Z})(s)}function y(k,S){return S.i=k.i,S.j=k.j,S.S=k.S.slice(),S}function w(k,S){var C=[],z=typeof k,$;if(S&&z=="object")for($ in k)try{C.push(w(k[$],S-1))}catch{}return C.length?C:z=="string"?k:k+"\0"}function g(k,S){for(var C=k+"",z,$=0;$<C.length;)S[h&$]=h&(z^=S[h&$]*19)+C.charCodeAt($++);return v(S)}function m(){try{var k;return f&&(k=f.randomBytes)?k=k(s):(k=new Uint8Array(s),(e.crypto||e.msCrypto).getRandomValues(k)),v(k)}catch{var S=e.navigator,C=S&&S.plugins;return[+new Date,e,C,e.screen,v(n)]}}function v(k){return String.fromCharCode.apply(0,k)}if(g(r.random(),n),t.exports){t.exports=d;try{f=tT}catch{}}else r["seed"+a]=d})(typeof self<"u"?self:fs,[],Math)})(Rv);var nT=Rv.exports,rT=KN,sT=qN,iT=YN,oT=XN,aT=JN,lT=ZN,vs=nT;vs.alea=rT;vs.xor128=sT;vs.xorwow=iT;vs.xorshift7=oT;vs.xor4096=aT;vs.tychei=lT;var Bl=vs;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ov{constructor(e,n,r,s,i){this.mean=e,this.stdDev=n,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const o=i||Math.random();this.random=Bl.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let e,n,r=!1;for(;!r;){let s,i,o;do s=2*this.random()-1,i=2*this.random()-1,o=s*s+i*i;while(o>=1||o===0);const a=Math.sqrt(-2*Math.log(o)/o);e=this.mean+this.stdDev*s*a,n=this.mean+this.stdDev*i*a,(!this.truncated||this.isValidTruncated(e))&&(r=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class uT{constructor(e=0,n=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=n-e,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${n} <= 1 and dtype is not float`);this.random=Bl.alea(s)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cT(t,e=0,n=1,r,s){if(r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const i=new Ov(e,n,r,!1,s),o=To(t,r);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const hT=_({randomNormal_:cT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fT(t,e=0,n=1,r="float32",s){const i=To(t,r),o=new uT(e,n,null,s);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const Ul=_({randomUniform_:fT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sl(t,e,n=1,r="float32"){if(n===0)throw new Error("Cannot have a step of zero");const s={start:t,stop:e,step:n,dtype:r};return D.runKernel(f2,{},s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dT(t){const n={x:N(t,"x","relu")};return D.runKernel(R0,n)}const wi=_({relu_:dT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pT(t){const n={x:N(t,"x","relu6")};return D.runKernel(U0,n)}const mT=_({relu6_:pT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gT(t,e){const r={x:N(t,"x","reverse")},s={dims:e};return D.runKernel(W0,r,s)}const il=_({reverse_:gT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yT(t){const n={x:N(t,"x","round")};return D.runKernel(j0,n)}const vT=_({round_:yT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wT(t){const n={x:N(t,"x","rsqrt","float32")};return D.runKernel(V0,n)}const bT=_({rsqrt_:wT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kT(t){const n={x:N(t,"x","selu")};return D.runKernel(H0,n)}const xT=_({selu_:kT});function ST(t,e,n,r,s,i=[1,1],o="NHWC"){const a=N(t,"x","separableConv2d"),l=N(e,"depthwiseFilter","separableConv2d"),u=N(n,"pointwiseFilter","separableConv2d");let c=a,h=!1;if(a.rank===3&&(h=!0,c=M(a,[1,a.shape[0],a.shape[1],a.shape[2]])),o==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");b(c.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`),b(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),b(u.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),b(u.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${u.shape[0]}.`),b(u.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${u.shape[1]}.`);const f=l.shape[2],d=l.shape[3];b(u.shape[2]===f*d,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${f*d}, but got ${u.shape[2]}.`);const p=Cv(c,l,r,s,o,i),w=oi(p,u,1,"valid",o);return h?M(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const ET=_({separableConv2d_:ST});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function IT(t){const n={x:N(t,"x","sin","float32")};return D.runKernel(q0,n)}const NT=_({sin_:IT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TT(t){const n={x:N(t,"x","sinh")};return D.runKernel(Y0,n)}const CT=_({sinh_:TT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AT(t,e,n){const r=N(t,"x","slice1d");return b(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),Ne(r,[e],[n])}const Af=_({slice1d_:AT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DT(t,e,n){const r=N(t,"x","slice2d");return b(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),Ne(r,e,n)}const Pv=_({slice2d_:DT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $T(t,e,n){const r=N(t,"x","slice3d");return b(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),Ne(r,e,n)}const Df=_({slice3d_:$T});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zT(t,e,n){const r=N(t,"x","slice4d");return b(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),Ne(r,e,n)}const ol=_({slice4d_:zT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MT(t,e=-1){const n=N(t,"logits","softmax","float32");if(e===-1&&(e=n.rank-1),e!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${e}`);const r={logits:n},s={dim:e};return D.runKernel(nv,r,s)}const Bv=_({softmax_:MT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _T(t,e,n=0){const s={x:N(t,"x","split")},i={numOrSizeSplits:e,axis:n};return D.runKernel(tv,s,i)}const Wn=_({split_:_T});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FT(t,e){const n=N(t,"x","squeeze","string_or_numeric");return M(n,eS(n.shape,e).newShape)}const ai=_({squeeze_:FT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LT(t,e=0){const n=mv(t,"tensors","stack","string_or_numeric");b(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&b(e<=n[0].rank,()=>"Axis must be <= rank of the tensor");const r=n,s={axis:e};return D.runKernel(M0,r,s)}const zr=_({stack_:LT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RT(t,e=0){const r={x:N(t,"x","step")},s={alpha:e};return D.runKernel(lv,r,s)}const Wl=_({step_:RT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ct(t,e){Fl(t);const n=mi(t,e);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return gi(t,null,n,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ta(t,e,n){if(Fl(t),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=mi(t,n);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return gi(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OT(t,e,n){if(Fl(t),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=mi(t,n);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return gi(t,e,r,n)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PT(t,e=0,n=1,r,s){if(r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const i=new Ov(e,n,r,!0,s),o=To(t,r);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const Uv=_({truncatedNormal_:PT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BT(t,e,n){const r=N(t,"x","unsortedSegmentSum"),s=N(e,"segmentIds","unsortedSegmentSum","int32");b(Qa(n),()=>"numSegments must be of dtype int");const i={x:r,segmentIds:s},o={numSegments:n};return D.runKernel(ov,i,o)}const UT=_({unsortedSegmentSum_:BT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WT(t,e=0){const n=N(t,"x","unstack","string_or_numeric");b(e>=-n.shape.length&&e<n.shape.length,()=>`Axis = ${e} is not in [-${n.shape.length}, ${n.shape.length})`);const r={value:n},s={axis:e};return D.runKernel(iv,r,s)}const li=_({unstack_:WT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jT(t,e=!0,n,r){return D.makeVariable(t,e,n,r)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VT(t,e){if(e==null)return t.shape.slice();if(It(t.shape,e))return e;if(t.shape.length===e.length){const n=[];for(let r=0;r<t.shape.length;r++)e[r]==null&&t.shape[r]!=null?n.push(t.shape[r]):n.push(e[r]);return n}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GT(t,e,n,r){const s=N(t,"x","dropout");if(b(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),b(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return t instanceof Te?s.clone():s;const i=VT(s,n),o=1-e,a=J(kf(P(Ul(i,0,1,"float32",r),o)),o);return T(s,a)}const HT=_({dropout_:GT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KT(t,e,n,r,s,i="NHWC",o){let a=t;t.rank===3&&(a=M(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l=e;l.rank===3&&(l=M(e,[1,e.shape[0],e.shape[1],e.shape[2]])),b(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),b(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),b(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const u=i==="NHWC"?a.shape[3]:a.shape[1],c=i==="NHWC"?l.shape[3]:l.shape[1];b(u===n[2],()=>`Error in conv2dDerFilter: depth of input ${u}) must match input depth in filter (${n[2]}.`),b(c===n[3],()=>`Error in conv2dDerFilter: depth of dy (${c}) must match output depth for filter (${n[3]}).`),Ot("conv2dDerFilter",s,o);const h={x:a,dy:l},f={strides:r,pad:s,dataFormat:i,dimRoundingMode:o,filterShape:n};return D.runKernel(AS,h,f)}const $f=_({conv2DBackpropFilter_:KT});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wv(t,e,n){if(n==null||n==="linear")return t;if(n==="relu")return T(t,Wl(e));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function jv(t,e){let n=e;const r=tt(t.shape,e.shape);return r.length>0&&(n=Y(n,r)),M(n,t.shape)}function Vv(t,e,n,r){if(e==="linear")return t;if(e==="relu")return wi(t);if(e==="elu")return wf(t);if(e==="relu6")return mT(t);if(e==="prelu")return Lv(t,n);if(e==="leakyrelu")return Mv(t,r);if(e==="sigmoid")return Ol(t);throw new Error(`Unknown fused activation ${e}.`)}const Gv=(t,e)=>!(t>0)||e==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qT({x:t,filter:e,strides:n,pad:r,dataFormat:s="NHWC",dilations:i=[1,1],dimRoundingMode:o,bias:a,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){if(l=l||"linear",Gv(D.state.gradientDepth,l)===!1){b(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let C=oi(t,e,n,r,s,i,o);return a!=null&&(C=P(C,a)),Vv(C,l,u,c)}const h=N(t,"x","conv2d","float32"),f=N(e,"filter","conv2d","float32");let d=h,p=!1;h.rank===3&&(p=!0,d=M(h,[1,h.shape[0],h.shape[1],h.shape[2]])),b(d.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${d.rank}.`),b(f.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${f.rank}.`),Ot("fused conv2d",r,o);const y=s==="NHWC"?d.shape[3]:d.shape[1];b(f.shape[2]===y,()=>`Error in conv2d: depth of input (${y}) must match input depth for filter ${f.shape[2]}.`),b(ms(n,i),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${i}'`);const w=JE(d.shape,f.shape,n,i,r,o);let g;a!=null&&(g=N(a,"bias","fused conv2d"),[g]=it(g,h),s==="NHWC"?Ue(w.outShape,g.shape):(b(g.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${g.shape.length}.`),b(g.shape.length===0||g.shape[0]===w.outChannels||g.shape[0]===1,()=>`Error in fused conv2d: bias shape (${g.shape}) is not compatible with the number of output channels (${w.outChannels})`)));let m;if(u!=null){const C=u.shape;if(b(C.length<=1||C.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${C.length}.`),C.length===1)b(C[0]===1||C[0]===w.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${C}) is not compatible with the number of output channels (${w.outChannels}).`);else if(C.length===3)try{Ue(C,w.outShape)}catch{const $=`Error in fused conv2d: PReLU activation weights (${C}) is not compatible with the output shape of the conv2d (${w.outShape}).`;throw Error($)}m=N(u,"prelu weights","fused conv2d")}const v=(C,z)=>{b(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[$,F,L,W]=z,K=Wv(C,L,l);b(ii(i),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${i}'`);const Z=vf(F.shape,K,$,n,r),se=$f(F,K,$.shape,n,r),ie=[Z,se];if(W!=null){const oe=jv(W,K);ie.push(oe)}return ie},k={x:d,filter:f,bias:g,preluActivationWeights:m},S={strides:n,pad:r,dataFormat:s,dilations:i,dimRoundingMode:o,activation:l,leakyreluAlpha:c};return a==null?yo((z,$,F)=>{let L=D.runKernel(Cp,k,S);return F([$,z,L]),p&&(L=M(L,[L.shape[1],L.shape[2],L.shape[3]])),{value:L,gradFunc:v}})(d,f):yo((z,$,F,L)=>{let W=D.runKernel(Cp,k,S);return L([$,z,W,F]),p&&(W=M(W,[W.shape[1],W.shape[2],W.shape[3]])),{value:W,gradFunc:v}})(d,f,g)}const YT=_({fusedConv2d_:qT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XT(t,e,n,r,s,i=[1,1],o){let a=t;t.rank===3&&(a=M(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l=e;l.rank===3&&(l=M(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const u={x:a,dy:l},c={strides:r,pad:s,dimRoundingMode:o,dilations:i,filterShape:n};return D.runKernel(_S,u,c)}const JT=_({depthwiseConv2dNativeBackpropFilter_:XT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZT(t,e,n,r,s,i=[1,1],o){let a=e,l=!1;e.rank===3&&(l=!0,a=M(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const u={dy:a,filter:n},c={strides:r,pad:s,dimRoundingMode:o,dilations:i,inputShape:t},h=D.runKernel(FS,u,c);return l?M(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const QT=_({depthwiseConv2dNativeBackpropInput_:ZT});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eC({a:t,b:e,transposeA:n=!1,transposeB:r=!1,bias:s,activation:i="linear",preluActivationWeights:o,leakyreluAlpha:a=.2}){if(Gv(D.state.gradientDepth,i)===!1){let W=ke(t,e,n,r);return s!=null&&(W=P(W,s)),Vv(W,i,o,a)}let l=N(t,"a","fused matMul"),u=N(e,"b","fused matMul");[l,u]=it(l,u);const c=n?l.shape[l.rank-2]:l.shape[l.rank-1],h=r?u.shape[u.rank-1]:u.shape[u.rank-2],f=n?l.shape[l.rank-1]:l.shape[l.rank-2],d=r?u.shape[u.rank-2]:u.shape[u.rank-1],p=l.shape.slice(0,-2),y=u.shape.slice(0,-2),w=Et(p),g=Et(y);b(c===h,()=>`Error in fused matMul: inner shapes (${c}) and (${h}) of Tensors with shapes ${l.shape} and ${u.shape} and transposeA=${n} and transposeB=${r} must match.`);const v=Ue(l.shape.slice(0,-2),u.shape.slice(0,-2)).concat([f,d]),k=n?M(l,[w,c,f]):M(l,[w,f,c]),S=r?M(u,[g,d,h]):M(u,[g,h,d]);let C;s!=null&&(C=N(s,"bias","fused matMul"),[C]=it(C,l),Ue(v,C.shape));let z;o!=null&&(z=N(o,"prelu weights","fused matMul"));const $=(W,K)=>{const[Z,se,ie,oe]=K,ae=Wv(M(W,ie.shape),ie,i);let E,x;if(!n&&!r?(E=ke(ae,se,!1,!0),x=ke(Z,ae,!0,!1)):!n&&r?(E=ke(ae,se,!1,!1),x=ke(ae,Z,!0,!1)):n&&!r?(E=ke(se,ae,!1,!0),x=ke(Z,ae,!1,!1)):(E=ke(se,ae,!0,!0),x=ke(ae,Z,!0,!0)),s!=null){const O=jv(oe,ae);return[E,x,O]}else return[E,x]},F={a:k,b:S,bias:C,preluActivationWeights:z},L={transposeA:n,transposeB:r,activation:i,leakyreluAlpha:a};return s==null?yo((K,Z,se)=>{const ie=D.runKernel(Tp,F,L);return se([K,Z,ie]),{value:M(ie,v),gradFunc:$}})(k,S):yo((K,Z,se,ie)=>{const oe=D.runKernel(Tp,F,L);return ie([K,Z,oe,se]),{value:M(oe,v),gradFunc:$}})(k,S,C)}const Hp=_({fusedMatMul_:eC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tC(t,e,n,r,s="bilinear",i=0){const o=N(t,"image","cropAndResize"),a=N(e,"boxes","cropAndResize","float32"),l=N(n,"boxInd","cropAndResize","int32"),u=a.shape[0];b(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),b(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${u},4] but had shape ${a.shape}.`),b(l.rank===1&&l.shape[0]===u,()=>`Error in cropAndResize: boxInd must be have size [${u}] but had shape ${a.shape}.`),b(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),b(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),b(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const c={image:o,boxes:a,boxInd:l},h={method:s,extrapolationValue:i,cropSize:r};return D.runKernel(MS,c,h)}const nC=_({cropAndResize_:tC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rC(t){const e=N(t,"image","flipLeftRight","float32");b(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const n={image:e};return D.runKernel(VS,n,{})}const sC=_({flipLeftRight_:rC});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iC(t){const e=N(t,"image","grayscaleToRGB"),n=e.rank-1,r=e.shape[n];b(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),b(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(e.rank);return s.fill(1,0,n),s[n]=3,On(e,s)}const oC=_({grayscaleToRGB_:iC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aC(t,e,n=0,r=.5){const s=N(t,"image","rotateWithOffset","float32");b(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const i={image:s},o={radians:e,fillValue:n,center:r};return D.runKernel(x2,i,o)}const lC=_({rotateWithOffset_:aC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bi(t,e,n,r,s,i){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),i==null&&(i=0);const o=t.shape[0];return n=Math.min(n,o),b(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),b(t.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${t.rank}'`),b(t.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${t.shape[1]}`),b(e.rank===1,()=>"scores must be a 1D tensor"),b(e.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${e.shape[0]}`),b(0<=i&&i<=1,()=>`softNmsSigma must be in [0, 1], but was '${i}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:i}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uC(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY){const i=N(t,"boxes","nonMaxSuppression","float32"),o=N(e,"scores","nonMaxSuppression","float32"),a=bi(i,o,n,r,s);n=a.maxOutputSize,r=a.iouThreshold,s=a.scoreThreshold;const l={maxOutputSize:n,iouThreshold:r,scoreThreshold:s};return D.runKernel(l2,{boxes:i,scores:o},l)}const cC=_({nonMaxSuppression_:uC});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hC(t,e,n){const r=fC(t,e,n),s=r<0?-(r+1):r;t.splice(s,0,e)}function fC(t,e,n){return pC(t,e,n||dC)}function dC(t,e){return t>e?1:t<e?-1:0}function pC(t,e,n){let r=0,s=t.length,i=0,o=!1;for(;r<s;){i=r+(s-r>>>1);const a=n(e,t[i]);a>0?r=i+1:(s=i,o=!a)}return o?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mC(t,e,n,r,s){return zf(t,e,n,r,s,0)}function gC(t,e,n,r,s,i){return zf(t,e,n,r,s,0,!1,i,!0)}function yC(t,e,n,r,s,i){return zf(t,e,n,r,s,i,!0)}function zf(t,e,n,r,s,i,o=!1,a=!1,l=!1){const u=[];for(let w=0;w<e.length;w++)e[w]>s&&u.push({score:e[w],boxIndex:w,suppressBeginIndex:0});u.sort(Kp);const c=i>0?-.5/i:0,h=[],f=[];for(;h.length<n&&u.length>0;){const w=u.pop(),{score:g,boxIndex:m,suppressBeginIndex:v}=w;if(g<s)break;let k=!1;for(let S=h.length-1;S>=v;--S){const C=vC(t,m,h[S]);if(C>=r){k=!0;break}if(w.score=w.score*wC(r,c,C),w.score<=s)break}w.suppressBeginIndex=h.length,k||(w.score===g?(h.push(m),f.push(w.score)):w.score>s&&hC(u,w,Kp))}const d=h.length,p=n-d;a&&p>0&&(h.push(...new Array(p).fill(0)),f.push(...new Array(p).fill(0)));const y={selectedIndices:h};return o&&(y.selectedScores=f),l&&(y.validOutputs=d),y}function vC(t,e,n){const r=t.subarray(e*4,e*4+4),s=t.subarray(n*4,n*4+4),i=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),a=Math.max(r[0],r[2]),l=Math.max(r[1],r[3]),u=Math.min(s[0],s[2]),c=Math.min(s[1],s[3]),h=Math.max(s[0],s[2]),f=Math.max(s[1],s[3]),d=(a-i)*(l-o),p=(h-u)*(f-c);if(d<=0||p<=0)return 0;const y=Math.max(i,u),w=Math.max(o,c),g=Math.min(a,h),m=Math.min(l,f),v=Math.max(g-y,0)*Math.max(m-w,0);return v/(d+p-v)}function wC(t,e,n){const r=Math.exp(e*n*n);return n<=t?r:0}function Kp(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function bC(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY){const i=N(t,"boxes","nonMaxSuppressionAsync"),o=N(e,"scores","nonMaxSuppressionAsync"),a=bi(i,o,n,r,s);n=a.maxOutputSize,r=a.iouThreshold,s=a.scoreThreshold;const l=await Promise.all([i.data(),o.data()]),u=l[0],c=l[1],{selectedIndices:h}=mC(u,c,n,r,s);return i!==t&&i.dispose(),o!==e&&o.dispose(),ct(h,"int32")}const kC=bC;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xC(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,i=0){const o=N(t,"boxes","nonMaxSuppression"),a=N(e,"scores","nonMaxSuppression"),l=bi(o,a,n,r,s,i);n=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold,i=l.softNmsSigma;const u={boxes:o,scores:a},c={maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:i},h=D.runKernel(c2,u,c);return{selectedIndices:h[0],selectedScores:h[1]}}const SC=_({nonMaxSuppressionWithScore_:xC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function EC(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,i=0){const o=N(t,"boxes","nonMaxSuppressionAsync"),a=N(e,"scores","nonMaxSuppressionAsync"),l=bi(o,a,n,r,s,i);n=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold,i=l.softNmsSigma;const u=await Promise.all([o.data(),a.data()]),c=u[0],h=u[1],{selectedIndices:f,selectedScores:d}=yC(c,h,n,r,s,i);return o!==t&&o.dispose(),a!==e&&a.dispose(),{selectedIndices:ct(f,"int32"),selectedScores:ct(d)}}const IC=EC;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NC(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,i=!1){const o=N(t,"boxes","nonMaxSuppression"),a=N(e,"scores","nonMaxSuppression"),l=bi(o,a,n,r,s,null),u=l.maxOutputSize,c=l.iouThreshold,h=l.scoreThreshold,f={boxes:o,scores:a},d={maxOutputSize:u,iouThreshold:c,scoreThreshold:h,padToMaxOutputSize:i},p=D.runKernel(u2,f,d);return{selectedIndices:p[0],validOutputs:p[1]}}const TC=_({nonMaxSuppressionPadded_:NC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function CC(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,i=!1){const o=N(t,"boxes","nonMaxSuppressionAsync"),a=N(e,"scores","nonMaxSuppressionAsync"),l=bi(o,a,n,r,s,null),u=l.maxOutputSize,c=l.iouThreshold,h=l.scoreThreshold,[f,d]=await Promise.all([o.data(),a.data()]),{selectedIndices:p,validOutputs:y}=gC(f,d,u,c,h,i);return o!==t&&o.dispose(),a!==e&&a.dispose(),{selectedIndices:ct(p,"int32"),validOutputs:ge(y,"int32")}}const AC=CC;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DC(t,e,n=!1,r=!1){const s=N(t,"images","resizeBilinear");b(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),b(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),b(r===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let i=s,o=!1;s.rank===3&&(o=!0,i=M(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const a={images:i},l={alignCorners:n,halfPixelCenters:r,size:e},u=D.runKernel(B0,a,l);return o?M(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const $C=_({resizeBilinear_:DC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zC(t,e,n=!1,r=!1){const s=N(t,"images","resizeNearestNeighbor");b(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),b(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),b(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),b(r===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let i=s,o=!1;s.rank===3&&(o=!0,i=M(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const a={images:i},l={alignCorners:n,halfPixelCenters:r,size:e},u=D.runKernel(P0,a,l);return o?M(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const MC=_({resizeNearestNeighbor_:zC});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _C(t,e="binary",n=!1,r=.5){const s=N(t,"image","threshold"),i=.2989,o=.587,a=.114,l=s.shape[0]*s.shape[1];let u=T(ct([r]),255),c,h,f,d;if(b(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),b(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),b(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),b(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),s.shape[2]===3){[c,h,f]=Wn(s,[1,1,1],-1);const w=T(c,i),g=T(h,o),m=T(f,a);d=P(P(w,g),m)}else d=t;if(e==="otsu"){const w=kI(H(vT(d),"int32"),Hs([]),256);u=FC(w,l)}const p=n?Ao(d,u):Tn(d,u);return H(T(p,255),"int32")}function FC(t,e){let n=ct([-1]),r=ct([0]),s=ct([0]),i,o,a,l,u,c;for(let h=0;h<t.size-1;h++){i=Ne(t,0,h+1),o=Ne(t,h+1),u=J(Y(i),e),c=J(Y(o),e);const f=Y(T(i,sl(0,i.size)));a=J(f,Y(i));const d=Pl(o.shape,i.size),p=P(sl(0,o.size),d),y=T(o,p);l=J(Y(y),Y(o));const w=te(a,l),g=te(a,l),m=T(u,c);s=T(T(m,w),g);const v=Tn(s,r);r=ln(v,s,r),n=ln(v,ct([h]),n)}return n}const LC=_({threshold_:_C});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RC(t,e,n="nearest",r="constant",s=0,i){const o=N(t,"image","transform","float32"),a=N(e,"transforms","transform","float32");b(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),b(a.rank===2&&(a.shape[0]===o.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),b(i==null||i.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${i}.`);const l={image:o,transforms:a},u={interpolation:n,fillMode:r,fillValue:s,outputShape:i};return D.runKernel(k2,l,u)}const OC=_({transform_:RC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PC(t,e,n){b(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),b(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`);const r=N(t,"a","bandPart");b(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[i,o]=r.shape.slice(-2);if(!(e<=i))throw new Error(`bandPart(): numLower (${e}) must not be greater than the number of rows (${i}).`);if(!(n<=o))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`);e<0&&(e=i),n<0&&(n=o);const a=M(sl(0,i,1,"int32"),[-1,1]),l=sl(0,o,1,"int32"),u=te(a,l),c=vi(Ao(u,ge(+e,"int32")),Co(u,ge(-n,"int32"))),h=rt([i,o],r.dtype);return M(zr(li(M(r,[-1,i,o])).map(f=>ln(c,f,h))),s)}const BC=_({bandPart_:PC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UC(t){let e;if(Array.isArray(t)){e=!1,b(t!=null&&t.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=t[0].shape[0];for(let i=1;i<t.length;++i)b(t[i].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[i].shape[0]} vs. ${s})`)}else e=!0,t=Wn(t,t.shape[0],0).map(s=>ai(s,[0]));b(t.length<=t[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`);const n=[],r=t;for(let s=0;s<t.length;++s)n.push(D.tidy(()=>{let i=r[s];if(s>0)for(let o=0;o<s;++o){const a=T(Y(T(n[o],i)),n[o]);i=te(i,a)}return J(i,$v(i,"euclidean"))}));return e?zr(n,0):n}const WC=_({gramSchmidt_:UC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jC(t,e=!1){if(b(t.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${t.rank}`),t.rank===2)return qp(t,e);{const n=t.shape.slice(0,t.shape.length-2).reduce((l,u)=>l*u),r=li(M(t,[n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),s=[],i=[];r.forEach(l=>{const[u,c]=qp(l,e);s.push(u),i.push(c)});const o=M(zr(s,0),t.shape),a=M(zr(i,0),t.shape);return[o,a]}}function qp(t,e=!1){return D.tidy(()=>{b(t.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`);const n=t.shape[0],r=t.shape[1];let s=zv(n),i=Qr(t);const o=Ta([[1]],[1,1]);let a=Qr(o);const l=n>=r?r:n;for(let u=0;u<l;++u){const c=i,h=a,f=s;[a,i,s]=D.tidy(()=>{const d=Ne(i,[u,u],[n-u,1]),p=$v(d),y=Ne(i,[u,u],[1,1]),w=ln(Tn(y,0),Ta([[-1]]),Ta([[1]])),g=te(y,T(w,p)),m=J(d,g);m.shape[0]===1?a=Qr(o):a=bn([o,Ne(m,[1,0],[m.shape[0]-1,m.shape[1]])],0);const v=dt(J(ke(w,g),p)),k=Ne(i,[u,0],[n-u,r]),S=T(v,a),C=ce(a);if(u===0)i=te(k,ke(S,ke(C,k)));else{const F=te(k,ke(S,ke(C,k)));i=bn([Ne(i,[0,0],[u,r]),F],0)}const z=ce(S),$=Ne(s,[0,u],[n,s.shape[1]-u]);if(u===0)s=te($,ke(ke($,a),z));else{const F=te($,ke(ke($,a),z));s=bn([Ne(s,[0,0],[n,u]),F],1)}return[a,i,s]}),ee([c,h,f])}return!e&&n>r&&(s=Ne(s,[0,0],[n,r]),i=Ne(i,[0,0],[r,r])),[s,i]})}const VC=_({qr_:jC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sa={flipLeftRight:sC,grayscaleToRGB:oC,resizeNearestNeighbor:MC,resizeBilinear:$C,rotateWithOffset:lC,cropAndResize:nC,nonMaxSuppression:cC,nonMaxSuppressionAsync:kC,nonMaxSuppressionWithScore:SC,nonMaxSuppressionWithScoreAsync:IC,nonMaxSuppressionPadded:TC,nonMaxSuppressionPaddedAsync:AC,threshold:LC,transform:OC},GC={bandPart:BC,gramSchmidt:WC,qr:VC};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Br extends yi{minimize(e,n=!1,r){const{value:s,grads:i}=this.computeGradients(e,r);if(r!=null){const o=r.map(a=>({name:a.name,tensor:i[a.name]}));this.applyGradients(o)}else this.applyGradients(i);return ee(i),n?s:(s.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,n){return IN(e,n)}dispose(){this.iterations_!=null&&ee(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:ge(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(Br,Symbol.hasInstance,{value:t=>t.minimize!=null&&t.computeGradients!=null&&t.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Mf extends Br{constructor(e,n,r=null){super(),this.learningRate=e,this.rho=n,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=D.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const i=D.registeredVariables[r],o=!1;this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accum_grad`,variable:A(()=>pe(i).variable(o))}),this.accumulatedUpdates[s]==null&&(this.accumulatedUpdates[s]={originalName:`${r}/accum_var`,variable:A(()=>pe(i).variable(o))});const a=Array.isArray(e)?e[s].tensor:e[r];if(a==null)return;const l=this.accumulatedGrads[s].variable,u=this.accumulatedUpdates[s].variable;A(()=>{const c=P(T(l,this.rho),T(Ae(a),1-this.rho)),h=T(J(vt(P(u,this.epsilon)),vt(P(l,this.epsilon))),a),f=P(T(u,this.rho),T(Ae(h),1-this.rho));l.assign(c),u.assign(f);const d=P(T(h,-this.learningRate),i);i.assign(d)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(ee(this.accumulatedGrads.map(e=>e.variable)),ee(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=e.length/2,r=!1;this.accumulatedGrads=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedUpdates=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,n){return new e(n.learningRate,n.rho,n.epsilon)}}Mf.className="Adadelta";R(Mf);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _f extends Br{constructor(e,n=.1){super(),this.learningRate=e,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const i=D.registeredVariables[r];this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accumulator`,variable:A(()=>Pl(i.shape,this.initialAccumulatorValue).variable(!1))});const o=Array.isArray(e)?e[s].tensor:e[r];if(o==null)return;const a=this.accumulatedGrads[s].variable;A(()=>{const l=P(a,Ae(o));a.assign(l);const u=P(T(J(o,vt(P(l,D.backend.epsilon()))),-this.learningRate),i);i.assign(u)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&ee(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=!1;this.accumulatedGrads=e.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,n){return new e(n.learningRate,n.initialAccumulatorValue)}}_f.className="Adagrad";R(_f);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ff extends Br{constructor(e,n,r,s=null){super(),this.learningRate=e,this.beta1=n,this.beta2=r,this.epsilon=s,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],A(()=>{this.accBeta1=ge(n).variable(),this.accBeta2=ge(r).variable()}),s==null&&(this.epsilon=D.backend.epsilon())}applyGradients(e){const n=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);A(()=>{const r=te(1,this.accBeta1),s=te(1,this.accBeta2);n.forEach((i,o)=>{const a=D.registeredVariables[i],l=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${i}/m`,variable:A(()=>pe(a).variable(l))}),this.accumulatedSecondMoment[o]==null&&(this.accumulatedSecondMoment[o]={originalName:`${i}/v`,variable:A(()=>pe(a).variable(l))});const u=Array.isArray(e)?e[o].tensor:e[i];if(u==null)return;const c=this.accumulatedFirstMoment[o].variable,h=this.accumulatedSecondMoment[o].variable,f=P(T(c,this.beta1),T(u,1-this.beta1)),d=P(T(h,this.beta2),T(Ae(u),1-this.beta2)),p=J(f,r),y=J(d,s);c.assign(f),h.assign(d);const w=P(T(J(p,P(vt(y),this.epsilon)),-this.learningRate),a);a.assign(w)}),this.accBeta1.assign(T(this.accBeta1,this.beta1)),this.accBeta2.assign(T(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&ee(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&ee(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e),A(()=>{this.accBeta1.assign(go(this.beta1,this.iterations_+1)),this.accBeta2.assign(go(this.beta2,this.iterations_+1))});const n=e.length/2,r=!1;this.accumulatedFirstMoment=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedSecondMoment=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)}}Ff.className="Adam";R(Ff);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Lf extends Br{constructor(e,n,r,s=null,i=0){super(),this.learningRate=e,this.beta1=n,this.beta2=r,this.epsilon=s,this.decay=i,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],A(()=>{this.iteration=ge(0).variable(),this.accBeta1=ge(n).variable()}),s==null&&(this.epsilon=D.backend.epsilon())}applyGradients(e){const n=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);A(()=>{const r=te(1,this.accBeta1),s=J(-this.learningRate,P(T(this.iteration,this.decay),1));n.forEach((i,o)=>{const a=D.registeredVariables[i],l=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${i}/m`,variable:pe(a).variable(l)}),this.accumulatedWeightedInfNorm[o]==null&&(this.accumulatedWeightedInfNorm[o]={originalName:`${i}/v`,variable:pe(a).variable(l)});const u=Array.isArray(e)?e[o].tensor:e[i];if(u==null)return;const c=this.accumulatedFirstMoment[o].variable,h=this.accumulatedWeightedInfNorm[o].variable,f=P(T(c,this.beta1),T(u,1-this.beta1)),d=T(h,this.beta2),p=bt(u),y=gs(d,p);c.assign(f),h.assign(y);const w=P(T(J(s,r),J(f,P(y,this.epsilon))),a);a.assign(w)}),this.iteration.assign(P(this.iteration,1)),this.accBeta1.assign(T(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&ee(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&ee(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}Lf.className="Adamax";R(Lf);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class jl extends Br{constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const i=Array.isArray(e)?e[s].tensor:e[r];if(i==null)return;const o=D.registeredVariables[r];A(()=>{const a=P(T(this.c,i),o);o.assign(a)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Gn(ge(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,n){return new e(n.learningRate)}}jl.className="SGD";R(jl);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Rf extends jl{constructor(e,n,r=!1){super(e),this.learningRate=e,this.momentum=n,this.useNesterov=r,this.accumulations=[],this.m=ge(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const i=D.registeredVariables[r];this.accumulations[s]==null&&(this.accumulations[s]={originalName:`${r}/momentum`,variable:A(()=>pe(i).variable(!1))});const o=this.accumulations[s].variable,a=Array.isArray(e)?e[s].tensor:e[r];a!=null&&A(()=>{let l;const u=P(T(this.m,o),a);this.useNesterov?l=P(T(this.c,P(a,T(u,this.m))),i):l=P(T(this.c,u),i),o.assign(u),i.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&ee(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=!1;this.accumulations=e.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)}}Rf.className="Momentum";R(Rf);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Of extends Br{constructor(e,n=.9,r=0,s=null,i=!1){if(super(),this.learningRate=e,this.decay=n,this.momentum=r,this.epsilon=s,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=i,s==null&&(this.epsilon=D.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const i=D.registeredVariables[r],o=!1;this.accumulatedMeanSquares[s]==null&&(this.accumulatedMeanSquares[s]={originalName:`${r}/rms`,variable:A(()=>pe(i).variable(o))}),this.accumulatedMoments[s]==null&&(this.accumulatedMoments[s]={originalName:`${r}/momentum`,variable:A(()=>pe(i).variable(o))}),this.accumulatedMeanGrads[s]==null&&this.centered&&(this.accumulatedMeanGrads[s]={originalName:`${r}/mg`,variable:A(()=>pe(i).variable(o))});const a=Array.isArray(e)?e[s].tensor:e[r];if(a==null)return;const l=this.accumulatedMeanSquares[s].variable,u=this.accumulatedMoments[s].variable;A(()=>{const c=P(T(l,this.decay),T(Ae(a),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[s].variable,f=P(T(h,this.decay),T(a,1-this.decay)),d=J(T(a,this.learningRate),vt(te(c,P(Ae(f),this.epsilon)))),p=P(T(u,this.momentum),d);l.assign(c),h.assign(f),u.assign(p);const y=te(i,p);i.assign(y)}else{const h=P(T(l,this.decay),T(Ae(a),1-this.decay)),f=P(T(u,this.momentum),J(T(a,this.learningRate),vt(P(h,this.epsilon))));l.assign(h),u.assign(f);const d=te(i,f);i.assign(d)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&ee(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&ee(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&ee(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=this.centered?e.length/3:e.length/2,r=!1;this.accumulatedMeanSquares=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedMoments=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=e.slice(n*2,n*3).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}Of.className="RMSProp";R(Of);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Wr{static sgd(e){return new jl(e)}static momentum(e,n,r=!1){return new Rf(e,n,r)}static rmsprop(e,n=.9,r=0,s=null,i=!1){return new Of(e,n,r,s,i)}static adam(e=.001,n=.9,r=.999,s=null){return new Ff(e,n,r,s)}static adadelta(e=.001,n=.95,r=null){return new Mf(e,n,r)}static adamax(e=.002,n=.9,r=.999,s=null,i=0){return new Lf(e,n,r,s,i)}static adagrad(e,n=.1){return new _f(e,n)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xs={sgd:Wr.sgd,momentum:Wr.momentum,adadelta:Wr.adadelta,adagrad:Wr.adagrad,rmsprop:Wr.rmsprop,adamax:Wr.adamax,adam:Wr.adam};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const HC=(()=>typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:t=>t())();function KC(){return new Promise(t=>HC(()=>t()))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qC=1.7580993408473768,YC=1.0507009873554805;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */function XC(t,e){return al(t,e)}function al(t,e,n=new Map,r=new Set){if(t==null)return null;if(typeof Blob=="function"&&t instanceof Blob)return t.slice();if(r.has(t))throw new Error("Circular references are not supported.");if(n.has(t))return n.get(t);const s=e(t);if(s.recurse&&s.value!==null)throw new Error("A deep map function may not return both a value and recurse=true.");if(s.recurse)if(ui(t)){const i=Array.isArray(t)?[]:{};r.add(t);for(const o in t){const a=t[o],l=al(a,e,n,r);i[o]=l}return r.delete(t),t.__proto__&&(i.__proto__=t.__proto__),i}else throw new Error(`Can't recurse into non-iterable type: ${t}`);else return n.set(t,s.value),s.value}function JC(t,e=Kv){return Hv(t,e)}function Hv(t,e,n=new Set){const r=t[0];if(n.has(r))throw new Error("Circular references are not supported.");const s=e(t);if(s.recurse&&s.value!==null)throw new Error("A deep zip function may not return both a value and recurse=true.");if(s.recurse)if(ui(r)){const i=Array.isArray(r)?[]:{};n.add(r);for(const o in r){const a=t.map(u=>u[o]),l=Hv(a,e,n);i[o]=l}return n.delete(r),i}else throw new Error(`Can't recurse into non-iterable type: ${r}`);else return s.value}function Kv(t){return t===null?null:ui(t[0])?{value:null,recurse:!0}:{value:t,recurse:!1}}async function qv(t,e){const n=new Map;al(t,e,n);for(const s of Array.from(n.keys())){const i=n.get(s);if(of(i)){const o=await i;n.set(s,o)}}return al(t,e,n)}function ui(t){let e=!1;if(me().get("IS_BROWSER"))e=t instanceof TextDecoder;else{const{StringDecoder:n}=require("string_decoder");e=t instanceof n}return t!=null&&!ArrayBuffer.isView(t)&&(Array.isArray(t)||typeof t=="object"&&!(t instanceof Te)&&!(t instanceof Promise)&&!e)}function ZC(t){return t==null||QC(t)||Array.isArray(t)||typeof t=="object"&&t instanceof Te||Sn(t)}function QC(t){return t===null||typeof t!="object"&&typeof t!="function"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */function eA(t){return XC(t,tA)}function tA(t){return t instanceof Te?{value:t.clone(),recurse:!1}:ui(t)?{value:null,recurse:!0}:{value:t,recurse:!1}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class Yv{constructor(e){if(this.capacity=e,this.begin=0,this.end=0,e==null)throw new RangeError("Can't create a ring buffer of unknown capacity.");if(e<1)throw new RangeError("Can't create ring buffer of capacity < 1.");this.data=new Array(e),this.doubledCapacity=2*e}wrap(e){for(;e<0;)e+=this.doubledCapacity;return e%this.doubledCapacity}get(e){if(e<0)throw new RangeError("Can't get item at a negative index.");return this.data[e%this.capacity]}set(e,n){if(e<0)throw new RangeError("Can't set item at a negative index.");this.data[e%this.capacity]=n}length(){let e=this.end-this.begin;return e<0&&(e=this.doubledCapacity+e),e}isFull(){return this.length()===this.capacity}isEmpty(){return this.length()===0}push(e){if(this.isFull())throw new RangeError("Ring buffer is full.");this.set(this.end,e),this.end=this.wrap(this.end+1)}pushAll(e){for(const n of e)this.push(n)}pop(){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");this.end=this.wrap(this.end-1);const e=this.get(this.end);return this.set(this.end,void 0),e}unshift(e){if(this.isFull())throw new RangeError("Ring buffer is full.");this.begin=this.wrap(this.begin-1),this.set(this.begin,e)}shift(){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");const e=this.get(this.begin);return this.set(this.begin,void 0),this.begin=this.wrap(this.begin+1),e}shuffleExcise(e){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");const n=this.wrap(this.begin+e),r=this.get(n);return this.set(n,this.pop()),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class Vl extends Yv{constructor(){super(Vl.INITIAL_CAPACITY)}isFull(){return!1}push(e){super.isFull()&&this.expand(),super.push(e)}unshift(e){super.isFull()&&this.expand(),super.unshift(e)}expand(){const e=this.capacity*2,n=new Array(e),r=this.length();for(let s=0;s<r;s++)n[s]=this.get(this.wrap(this.begin+s));this.data=n,this.capacity=e,this.doubledCapacity=2*this.capacity,this.begin=0,this.end=r}}Vl.INITIAL_CAPACITY=32;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */function Xv(t){return new iA(t)}function nA(t){return new oA(t)}function rA(t,e){return new Jv(t,e)}function sA(t,e=mr.FAIL){return new gA(t,e)}class Nt{async toArray(){const e=[];let n=await this.next();for(;!n.done;)e.push(n.value),n=await this.next();return e}async toArrayForTest(){const e=this.prefetch(100),n=[];let r=await e.next();for(;!r.done;)n.push(r.value),r=await e.next();return n}async resolveFully(){let e=await this.next();for(;!e.done;)e=await this.next()}async resolveWhile(e){let n=await this.next(),r=e(n.value);for(;!n.done&&r;)n=await this.next(),r=e(n.value)}handleErrors(e){return new dA(this,e)}filter(e){return new hA(this,e)}map(e){return new fA(this,e)}mapAsync(e){return new Yp(this,e)}serialMapAsync(e){return new Yp(this,e).serial()}flatmap(e){return new mA(this,e)}async forEachAsync(e){return this.map(e).resolveFully()}async serialForEach(e){return this.serialMapAsync(e).resolveWhile(n=>n===!0)}rowMajorBatch(e,n=!0){return new cA(this,e,n)}columnMajorBatch(e,n=!0,r=Kv){return this.rowMajorBatch(e,n).map(i=>JC(i,r))}concatenate(e,n){return new Jv(Xv([this,e]),n)}take(e){return e<0||e==null?this:new uA(this,e)}skip(e){return e<0||e==null?this:new lA(this,e)}prefetch(e){return new Zv(this,e)}shuffle(e,n){return new yA(this,e,n)}serial(){return new aA(this)}}class iA extends Nt{constructor(e){super(),this.items=e,this.trav=0}summary(){return`Array of ${this.items.length} items`}async next(){if(this.trav>=this.items.length)return{value:null,done:!0};const e=this.items[this.trav];return this.trav++,{value:eA(e),done:!1}}}class oA extends Nt{constructor(e){super(),this.nextFn=e}summary(){return"Function call"}async next(){try{return this.nextFn()}catch(e){throw e.message=`Error thrown while iterating through a dataset: ${e.message}`,e}}}class aA extends Nt{constructor(e){super(),this.upstream=e,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Serial`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){return this.upstream.next()}}class lA extends Nt{constructor(e,n){super(),this.upstream=e,this.maxCount=n,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Skip`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.count++<this.maxCount;){const e=await this.upstream.next();if(e.done)return e;ee(e.value)}return this.upstream.next()}}class uA extends Nt{constructor(e,n){super(),this.upstream=e,this.maxCount=n,this.count=0}summary(){return`${this.upstream.summary()} -> Take`}async next(){return this.count++>=this.maxCount?{value:null,done:!0}:this.upstream.next()}}class cA extends Nt{constructor(e,n,r=!0){super(),this.upstream=e,this.batchSize=n,this.enableSmallLastBatch=r,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> RowMajorBatch`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){const e=[];for(;e.length<this.batchSize;){const n=await this.upstream.next();if(n.done)return this.enableSmallLastBatch&&e.length>0?{value:e,done:!1}:{value:null,done:!0};e.push(n.value)}return{value:e,done:!1}}}class hA extends Nt{constructor(e,n){super(),this.upstream=e,this.predicate=n,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Filter`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;){const e=await this.upstream.next();if(e.done||this.predicate(e.value))return e;ee(e.value)}}}class fA extends Nt{constructor(e,n){super(),this.upstream=e,this.transform=n}summary(){return`${this.upstream.summary()} -> Map`}async next(){const e=await this.upstream.next();if(e.done)return{value:null,done:!0};const n=Ar(e.value),r=this.transform(e.value),s=Ar(r);for(const i of n)ff(i,s)||i.dispose();return{value:r,done:!1}}}class dA extends Nt{constructor(e,n){super(),this.upstream=e,this.handler=n,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> handleErrors`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;)try{return await this.upstream.next()}catch(e){if(!this.handler(e))return{value:null,done:!0}}}}class Yp extends Nt{constructor(e,n){super(),this.upstream=e,this.transform=n}summary(){return`${this.upstream.summary()} -> AsyncMap`}async next(){const e=await this.upstream.next();if(e.done)return{value:null,done:!0};const n=Ar(e.value),r=await this.transform(e.value),s=Ar(r);for(const i of n)ff(i,s)||i.dispose();return{value:r,done:!1}}}class pA extends Nt{constructor(){super(),this.outputQueue=new Vl,this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.outputQueue.length()===0;)if(!await this.pump())return{value:null,done:!0};return{value:this.outputQueue.shift(),done:!1}}}class mA extends pA{constructor(e,n){super(),this.upstream=e,this.transform=n}summary(){return`${this.upstream.summary()} -> Flatmap`}async pump(){const e=await this.upstream.next();if(e.done)return!1;const n=Ar(e.value),r=this.transform(e.value),s=Ar(r);this.outputQueue.pushAll(r);for(const i of n)ff(i,s)||i.dispose();return!0}}class Jv extends Nt{constructor(e,n){super(),this.baseErrorHandler=n,this.lastRead=null,this.iterator=null,this.moreIterators=e}summary(){return"TODO: fill in upstream of chained summaries -> Chained"}async next(){return this.lastRead=this.readFromChain(this.lastRead),this.lastRead}async readFromChain(e){if(await e,this.iterator==null){const r=await this.moreIterators.next();if(r.done)return{value:null,done:!0};this.iterator=r.value,this.baseErrorHandler!=null&&(this.iterator=this.iterator.handleErrors(this.baseErrorHandler))}const n=await this.iterator.next();return n.done?(this.iterator=null,this.readFromChain(e)):n}}var mr;(function(t){t[t.FAIL=0]="FAIL",t[t.SHORTEST=1]="SHORTEST",t[t.LONGEST=2]="LONGEST"})(mr||(mr={}));class gA extends Nt{constructor(e,n=mr.FAIL){super(),this.iterators=e,this.mismatchMode=n,this.count=0,this.currentPromise=null}summary(){return"{TODO: fill in upstream of zip summaries} -> Zip"}async nextState(e){await e;let n=0,r=0;function s(o){return o instanceof Nt?{value:o.next().then(l=>(n++,l.done&&r++,l.value)),recurse:!1}:{value:null,recurse:!0}}const i=await qv(this.iterators,s);if(n===r)return{value:null,done:!0};if(r>0)switch(this.mismatchMode){case mr.FAIL:throw new Error(`Zipped streams should have the same length. Mismatched at element ${this.count}.`);case mr.SHORTEST:return{value:null,done:!0};case mr.LONGEST:}return this.count++,{value:i,done:!1}}async next(){return this.currentPromise=this.nextState(this.currentPromise),this.currentPromise}}class Zv extends Nt{constructor(e,n){super(),this.upstream=e,this.bufferSize=n,this.buffer=new Yv(n)}summary(){return`${this.upstream.summary()} -> Prefetch`}refill(){for(;!this.buffer.isFull();){const e=this.upstream.next();this.buffer.push(e)}}next(){return this.refill(),this.buffer.shift()}}class yA extends Zv{constructor(e,n,r){super(e,n),this.upstream=e,this.windowSize=n,this.upstreamExhausted=!1,this.random=Bl.alea(r||tn().toString()),this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}randomInt(e){return Math.floor(this.random()*e)}chooseIndex(){return this.randomInt(this.buffer.length())}async serialNext(){for(this.upstreamExhausted||this.refill();!this.buffer.isEmpty();){const e=this.chooseIndex(),n=await this.buffer.shuffleExcise(e);if(n.done)this.upstreamExhausted=!0;else return this.refill(),n}return{value:null,done:!0}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */let Pf=class{constructor(){this.size=null}batch(e,n=!0){const r=this;b(e>0,()=>`batchSize needs to be positive, but it is
      ${e}`);let s;return this.size===1/0||this.size==null?s=this.size:n?s=Math.ceil(this.size/e):s=Math.floor(this.size/e),Yt(async()=>(await r.iterator()).columnMajorBatch(e,n,vA),s)}concatenate(e){const n=this;let r;return this.size===1/0||e.size===1/0?r=1/0:this.size!=null&&e.size!=null?r=this.size+e.size:r=null,Yt(async()=>(await n.iterator()).concatenate(await e.iterator()),r)}filter(e){const n=this;let r;return this.size===1/0?r=1/0:r=null,Yt(async()=>(await n.iterator()).filter(s=>A(()=>e(s))),r)}async forEachAsync(e){return(await this.iterator()).forEachAsync(e)}map(e){const n=this;return Yt(async()=>(await n.iterator()).map(r=>A(()=>e(r))),this.size)}mapAsync(e){const n=this;return Yt(async()=>(await n.iterator()).mapAsync(e),this.size)}prefetch(e){if(e==null)throw new RangeError("`Dataset.prefetch()` requires bufferSize to be specified.");const n=this;return Yt(async()=>(await n.iterator()).prefetch(e),this.size)}repeat(e){const n=this;let r;return this.size!=null&&e>0?r=this.size*e:e===0?r=0:this.size!=null&&(e===void 0||e<0)?r=1/0:r=null,Yt(async()=>{const s=nA(async()=>({value:await n.iterator(),done:!1}));return rA(s.take(e))},r)}skip(e){const n=this;let r;return this.size!=null&&e>=0&&this.size>=e?r=this.size-e:this.size!=null&&(this.size<e||e===void 0||e<0)?r=0:r=null,Yt(async()=>(await n.iterator()).skip(e),r)}shuffle(e,n,r=!0){if(e==null||e<0)throw this.size==null?new RangeError("`Dataset.shuffle()` requires bufferSize to be specified."):new RangeError(`\`Dataset.shuffle()\` requires bufferSize to be specified.  If your data fits in main memory (for regular JS objects), and/or GPU memory (for \`tf.Tensor\`s), consider setting bufferSize to the dataset size (${this.size} elements)`);const s=this,i=Bl.alea(n||tn().toString());return Yt(async()=>{let o=i.int32();return r&&(o+=i.int32()),(await s.iterator()).shuffle(e,o.toString())},this.size)}take(e){const n=this;let r;return this.size!=null&&this.size>e?r=e:this.size!=null&&this.size<=e?r=this.size:r=null,Yt(async()=>(await n.iterator()).take(e),r)}async toArray(){if(this.size===1/0)throw new Error("Can not convert infinite data stream to array.");return(await this.iterator()).toArray()}async toArrayForTest(){if(this.size===1/0)throw new Error("Can not convert infinite data stream to array.");return(await this.iterator()).toArrayForTest()}};Pf.MAX_BUFFER_SIZE=1e4;function Yt(t,e=null){return new class extends Pf{constructor(){super(...arguments),this.size=e}async iterator(){return t()}}}function ia(t){return Yt(async()=>Xv(t),t.length)}function Xp(t){if(!ui(t))throw new Error("The argument to zip() must be an object or array.");let e;if(Array.isArray(t))for(let n=0;n<t.length;n++)e=e==null?t[n].size:Math.min(e,t[n].size);else if(t instanceof Object)for(const n in t)e=e==null?t[n].size:Math.min(e,t[n].size);return Yt(async()=>{const n=await qv(t,r=>{if(r instanceof Pf)return{value:r.iterator(),recurse:!1};if(ui(r))return{value:null,recurse:!0};throw new Error("Leaves of the structure passed to zip() must be Datasets, not primitives.")});return sA(n,mr.SHORTEST)},e)}function vA(t){if(t===null)return null;const e=t[0];return ZC(e)?{value:wA(t),recurse:!1}:{value:null,recurse:!0}}function wA(t){if(t.length===0)throw new Error("Can't make a batch of zero elements.");return t[0]instanceof Te?zr(t):Hs(t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class _n extends Error{constructor(e){super(e),Object.setPrototypeOf(this,_n.prototype)}}class nn extends Error{constructor(e){super(e),Object.setPrototypeOf(this,nn.prototype)}}class I extends Error{constructor(e){super(e),Object.setPrototypeOf(this,I.prototype)}}class ne extends Error{constructor(e){super(e),Object.setPrototypeOf(this,ne.prototype)}}class Bf extends Error{constructor(e){super(e),Object.setPrototypeOf(this,Bf.prototype)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Qv{constructor(e){this.maxEntries=e||100,this.cache=new Map}get(e){let n;return this.cache.has(e)&&(n=this.cache.get(e),this.cache.delete(e),this.cache.set(e,n)),n}put(e,n){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxEntries){const r=this.cache.keys().next().value;this.cache.delete(r)}this.cache.set(e,n)}getMaxEntries(){return this.maxEntries}setMaxEntries(e){if(e<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${e}.`);if(this.maxEntries>e)for(let n=0;n<this.maxEntries-e;n++){const r=this.cache.keys().next().value;this.cache.delete(r)}this.maxEntries=e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function hs(t,e){if(Array.isArray(t)){let n=[];for(let r=0;r<e;r++)n=n.concat(t);return n}else{const n=new Array(e);return n.fill(t),n}}function Fn(t,e){if(!t)throw new Bf(e)}function Jp(t,e){let n=0;for(const r of t)r===e&&n++;return n}function xt(t){return t.length===1?t[0]:t}function xe(t){return Array.isArray(t)?t:[t]}function Yn(t){const n=t.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return n[0]!=="_"?n:"private"+n}function Hr(t){return t.length<=1||t.indexOf("_")===-1?t:t.replace(/[_]+(\w|$)/g,(e,n)=>n.toUpperCase())}let qt={};function Uf(t){if(t==null)return null;const e={};return e.className=t.getClassName(),e.config=t.getConfig(),e}function qc(t){if(!(t==null||typeof t!="object"))if(Array.isArray(t))t.forEach(e=>qc(e));else{const e=Object.keys(t);for(const n of e){const r=t[n];r!=null&&typeof r=="object"&&(!Array.isArray(r)&&r.type==="ndarray"&&typeof r.value=="number"?t[n]=r.value:qc(r))}}}function $o(t,e={},n={},r="object",s=!1){if(typeof t=="string"){const i=t;let o;if(i in n)o=n[i];else if(i in qt)o=qt[i];else if(o=e[i],o==null)throw new I(`Unknown ${r}: ${t}. This may be due to one of the following reasons:
1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return o}else{const i=t;if(i.className==null||i.config==null)throw new I(`${r}: Improper config format: ${JSON.stringify(i)}.
'className' and 'config' must set.`);const o=i.className;let a,l;if(o in n?[a,l]=n[o]:o in qt?[a,l]=qt.className:o in e&&([a,l]=e[o]),a==null)throw new I(`Unknown ${r}: ${o}. This may be due to one of the following reasons:
1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){const u={};for(const d of Object.keys(qt))u[d]=qt[d];for(const d of Object.keys(n))u[d]=n[d];const c=i.config;c.customObjects=u;const h=Object.assign({},qt);for(const d of Object.keys(n))qt[d]=n[d];qc(i.config);const f=l(a,i.config,n,s);return qt=Object.assign({},h),f}else{const u=Object.assign({},qt);for(const h of Object.keys(n))qt[h]=n[h];const c=new a(i.config);return qt=Object.assign({},u),c}}}function bA(t,e){return t<e?-1:t>e?1:0}function oa(t,e){return-1*bA(t,e)}function Ir(t){if(t==null)return t;const e=[];for(const n of t)e.indexOf(n)===-1&&e.push(n);return e}function kA(t){if(t==null)throw new I(`Invalid value in obj: ${JSON.stringify(t)}`);for(const e in t)if(t.hasOwnProperty(e))return!1;return!0}function ws(t,e,n){if(n!=null&&t.indexOf(n)<0)throw new I(`${n} is not a valid ${e}.  Valid values are ${t} or null/undefined.`)}function Wf(t,e,n=0,r=1/0){return Fn(n>=0),Fn(r>=n),Array.isArray(t)&&t.length>=n&&t.length<=r&&t.every(s=>typeof s===e)}function et(t,e){Array.isArray(t)?(b(t.length>0,()=>`${e} is unexpectedly an empty array.`),t.forEach((n,r)=>et(n,`element ${r+1} of ${e}`))):b(Number.isInteger(t)&&t>0,()=>`Expected ${e} to be a positive integer, but got ${ew(t)}.`)}function ew(t){return t===null?"null":Array.isArray(t)?"["+t.map(e=>ew(e)).join(",")+"]":typeof t=="string"?`"${t}"`:`${t}`}function xA(t,e,n){let r=n!=null?n():tn(),s;return(...o)=>{const a=n!=null?n():tn();return a-r<e||(r=a,s=t(...o)),s}}function tw(t){return t==="relu"?"relu":t==="linear"?"linear":t==="elu"?"elu":null}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */let SA=0;function nw(){return SA++}const aa={};function Gl(t=""){return t in aa||(aa[t]=0),aa[t]+=1,t+aa[t].toString()}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const EA=["channelsFirst","channelsLast"],IA=["nearest","bilinear"],NA=["valid","same","causal"],TA=["max","avg"],CA=["sum","mul","concat","ave"];/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const Ss=new Map;function je(t){ws(EA,"DataFormat",t)}function AA(t){ws(IA,"InterpolationFormat",t)}function Ht(t){ws(NA,"PaddingMode",t)}function rw(t){ws(TA,"PoolMode",t)}const Yi=[],Zp="/";function es(t,e){Yi.push(t);try{const n=e();return Yi.pop(),n}catch(n){throw Yi.pop(),n}}function DA(){return Yi.length===0?"":Yi.join(Zp)+Zp}function sw(t){if(!ow(t))throw new Error("Not a valid tensor name: '"+t+"'");return DA()+t}function iw(t){if(!ow(t))throw new Error("Not a valid tensor name: '"+t+"'");Ss.has(t)||Ss.set(t,0);const e=Ss.get(t);if(Ss.set(t,Ss.get(t)+1),e>0){const n=`${t}_${e}`;return Ss.set(n,1),n}else return t}const $A=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function ow(t){return!!t.match($A)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function zA(t){return t===parseInt(t.toString(),10)}function Nr(t,e,n){e==null&&(e=0),n==null&&(n=t.length);let r=1;for(let s=e;s<n;++s)r*=t[s];return r}function ci(t){if(t.length===0)return Number.NaN;let e=Number.POSITIVE_INFINITY;for(let n=0;n<t.length;n++){const r=t[n];r<e&&(e=r)}return e}function Mr(t){if(t.length===0)return Number.NaN;let e=Number.NEGATIVE_INFINITY;for(let n=0;n<t.length;n++){const r=t[n];r>e&&(e=r)}return e}function In(t,e){if(e<t)throw new I(`end (${e}) < begin (${t}) is forbidden.`);const n=[];for(let r=t;r<e;++r)n.push(r);return n}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */let Fu;function Ke(){return Fu==null&&(Fu=gf().epsilon()),Fu}function Nn(){return"channelsLast"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function zo(t,e){return H(t,e)}function Mo(t,e=-1){const n=t.shape.slice();return e<0&&(e=n.length+e+1),n.splice(e,0,1),M(t,n)}function MA(t,e){return A(()=>{if(t.shape.length!==2)throw new I(`repeat() expects a rank-2 tensor, but received a rank-${t.shape.length} tensor.`);const n=Mo(t,1);return Yc(n,[1,e,1])})}function _A(t){const e=[Nr(t.shape)];return M(t,e)}function FA(t){if(t.rank<=1)throw new I(`batchFlatten requires a minimum rank of 2. Got rank: ${t.rank}.`);const e=[t.shape[0],Nr(t.shape,1)];return M(t,e)}function ts(t,e,n){return A(()=>{switch(t.rank){case 1:return Af(t,e,n);case 2:return Pv(t,[e,0],[n,t.shape[1]]);case 3:return Df(t,[e,0,0],[n,t.shape[1],t.shape[2]]);case 4:return ol(t,[e,0,0,0],[n,t.shape[1],t.shape[2],t.shape[3]]);case 5:return Ne(t,[e,0,0,0,0],[n,t.shape[1],t.shape[2],t.shape[3],t.shape[4]]);case 6:return Ne(t,[e,0,0,0,0,0],[n,t.shape[1],t.shape[2],t.shape[3],t.shape[4],t.shape[5]]);default:throw new I(`sliceAlongFirstAxis() received an unsupported tensor rank: ${t.rank}`)}})}function Lu(t,e,n){return A(()=>{switch(t.rank){case 1:return Af(t,e,n);case 2:return Pv(t,[0,e],[t.shape[0],n]);case 3:return Df(t,[0,0,e],[t.shape[0],t.shape[1],n]);case 4:return ol(t,[0,0,0,e],[t.shape[0],t.shape[1],t.shape[2],n]);default:throw new I(`sliceAlongLastAxis() received an unsupported tensor rank: ${t.rank}`)}})}function la(t,e,n,r){return A(()=>{switch(t.rank){case 1:return Af(t,e,n);case 2:switch(r){case 1:return ts(t,e,n);case 2:return Lu(t,e,n);default:throw new I(`The axis is not within the rank of the tensor ${r}`)}case 3:switch(r){case 1:return ts(t,e,n);case 2:return Df(t,[0,e,0],[t.shape[0],n,t.shape[2]]);case 3:return Lu(t,e,n);default:throw new I(`The axis is not within the rank of the tensor ${r}`)}case 4:switch(r){case 1:return ts(t,e,n);case 2:return ol(t,[0,e,0,0],[t.shape[0],n,t.shape[2],t.shape[3]]);case 3:return ol(t,[0,0,e,0],[t.shape[0],t.shape[1],n,t.shape[3]]);case 4:return Lu(t,e,n);default:throw new I(`The axis is not within the rank of the tensor ${r}`)}default:throw new I(`sliceAlongLastAxis() received an unsupported tensor rank: ${t.rank}`)}})}function jf(t,e=-1){let n;return e<0&&(n=t[0].rank,n!==0?e=n:e=0),e===t[0].rank&&(e=-1),bn(t,e)}function Qp(t,e){switch(t.rank){case 1:return II([t,e]);case 2:return TI([t,e],0);case 3:return AI([t,e],0);case 4:return $I([t,e],0);default:throw new I(`concatAlongFirstAxis() received an unsupported tensor rank: ${t.rank}`)}}function Yc(t,e){if(Array.isArray(e)||(e=[e]),t.rank!==e.length)throw new I(`The length of input n (${e.length}) does not match the number of dimensions in input x (${t.rank})`);return On(t,e)}function Hl(t,e=0,n=1,r,s){return hT(t,e,n,r,s)}function jn(t,e,n,r){if(t.rank<2||e.rank<2)throw new ne(`dot requires both inputs to be rank >= 2 but got x shape = ${t.shape} and y shape = ${e.shape}`);if(e.rank>=3){const s=t.shape.slice(-1)[0],i=e.shape.slice(-2)[0];if(s!==i)throw new ne(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${t.shape} and  y shape = ${e.shape}`)}if(t.rank===2&&e.rank===2)return Hp({a:t,b:e,transposeA:!1,transposeB:!1,bias:r?Xc(t.rank,r,Nn()):null,activation:n});{const s=t.shape.slice(),i=s.pop();t=M(t,[-1,i]);const o=e.shape.slice(),a=o.pop(),l=o.pop(),u=[...o,a],c=Array.from({length:e.rank},(p,y)=>y===0?e.rank-2:y<=e.rank-2?y-1:y);e=M(ce(e,c),[l,-1]);const h=[...s,...u];return M(Hp({a:t,b:e,transposeA:!1,transposeB:!1,bias:r?Xc(t.rank,r,Nn()):null,activation:n}),h)}}function aw(t,e,n){return A(()=>(Array.isArray(e)?e=ct(e,"int32"):e=H(e,"int32"),Ps(t,e,n)))}function _o(t){return T(t,t)}function Xc(t,e,n){const r=e.shape;if(e.rank!==1&&e.rank!==t)throw new I(`Unexpected bias dimensions: ${e.rank}; expected it to be 1 or ${t}`);if(t===5){if(n==="channelsFirst")return r.length===1?M(e,[1,r[0],1,1,1]):M(e,[1,r[3],r[0],r[1],r[2]]);if(n==="channelsLast")return r.length===1?M(e,[1,1,1,1,r[0]]):M(e,[1].concat(r))}else if(t===4){if(n==="channelsFirst")return r.length===1?M(e,[1,r[0],1,1]):M(e,[1,r[2],r[0],r[1]]);if(n==="channelsLast")return r.length===1?M(e,[1,1,1,r[0]]):M(e,[1].concat(r))}else if(t===3){if(n==="channelsFirst")return r.length===1?M(e,[1,r[0],1]):M(e,[1,r[1],r[0]]);if(n==="channelsLast")return r.length===1?M(e,[1,1,r[0]]):M(e,[1].concat(r))}else if(t<3)return e;throw new I(`Unsupported input rank by biasAdd: ${e.rank}`)}function Cn(t,e,n){return A(()=>(n==null&&(n=Nn()),je(n),P(t,Xc(t.rank,e,n))))}function LA(t,e=1){if(e!==1)throw new ne(`Support for alpha values other than 1 (${e}) is not implemented yet.`);return wf(t)}function RA(t){return A(()=>J(t,P(bt(t),1)))}function lw(t,e,n,r){return A(()=>HT(t,e,n,r))}function OA(t){return A(()=>{const e=P(.5,T(.2,t));return an(e,0,1)})}function Fo(t,e,n=!1){return n?t():e()}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const PA=["fanIn","fanOut","fanAvg"],BA=["normal","uniform","truncatedNormal"];/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function UA(t){ws(PA,"FanMode",t)}function WA(t){ws(BA,"Distribution",t)}class un extends yi{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class uw extends un{apply(e,n){return rt(e,n)}}uw.className="Zeros";R(uw);class Vf extends un{apply(e,n){return ys(e,n)}}Vf.className="Ones";R(Vf);class cw extends un{constructor(e){if(super(),typeof e!="object")throw new I(`Expected argument of type ConstantConfig but got ${e}`);if(e.value===void 0)throw new I(`config must have value set but got ${e}`);this.value=e.value}apply(e,n){return A(()=>T(ge(this.value),ys(e,n)))}getConfig(){return{value:this.value}}}cw.className="Constant";R(cw);class hw extends un{constructor(e){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=e.minval||this.DEFAULT_MINVAL,this.maxval=e.maxval||this.DEFAULT_MAXVAL,this.seed=e.seed}apply(e,n){return Ul(e,this.minval,this.maxval,n)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}hw.className="RandomUniform";R(hw);class fw extends un{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,n){if(n=n||"float32",n!=="float32"&&n!=="int32")throw new ne(`randomNormal does not support dType ${n}.`);return Hl(e,this.mean,this.stddev,n,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}fw.className="RandomNormal";R(fw);class dw extends un{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,n){if(n=n||"float32",n!=="float32"&&n!=="int32")throw new ne(`truncatedNormal does not support dType ${n}.`);return Uv(e,this.mean,this.stddev,n,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}dw.className="TruncatedNormal";R(dw);class pw extends un{constructor(e){super(),this.gain=e.gain!=null?e.gain:1}apply(e,n){return A(()=>{if(e.length!==2||e[0]!==e[1])throw new I("Identity matrix initializer can only be used for 2D square matrices.");return T(this.gain,zv(e[0]))})}getConfig(){return{gain:this.gain}}}pw.className="Identity";R(pw);function jA(t,e="channelsLast"){let n,r;if(je(e),t.length===2)n=t[0],r=t[1];else if([3,4,5].indexOf(t.length)!==-1){if(e==="channelsFirst"){const s=Nr(t,2);n=t[1]*s,r=t[0]*s}else if(e==="channelsLast"){const s=Nr(t,0,t.length-2);n=t[t.length-2]*s,r=t[t.length-1]*s}}else{const s=Nr(t);n=Math.sqrt(s),r=Math.sqrt(s)}return[n,r]}class Rt extends un{constructor(e){if(super(),e.scale<0)throw new I(`scale must be a positive float. Got: ${e.scale}`);this.scale=e.scale==null?1:e.scale,this.mode=e.mode==null?"fanIn":e.mode,UA(this.mode),this.distribution=e.distribution==null?"normal":e.distribution,WA(this.distribution),this.seed=e.seed}apply(e,n){const r=jA(e),s=r[0],i=r[1];let o=this.scale;if(this.mode==="fanIn"?o/=Math.max(1,s):this.mode==="fanOut"?o/=Math.max(1,i):o/=Math.max(1,(s+i)/2),this.distribution==="normal"){const a=Math.sqrt(o);if(n=n||"float32",n!=="float32"&&n!=="int32")throw new ne(`${this.getClassName()} does not support dType ${n}.`);return Uv(e,0,a,n,this.seed)}else{const a=Math.sqrt(3*o);return Ul(e,-a,a,n)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}Rt.className="VarianceScaling";R(Rt);class Gf extends Rt{constructor(e){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:e==null?null:e.seed})}getClassName(){return Rt.className}}Gf.className="GlorotUniform";R(Gf);class Hf extends Rt{constructor(e){super({scale:1,mode:"fanAvg",distribution:"normal",seed:e==null?null:e.seed})}getClassName(){return Rt.className}}Hf.className="GlorotNormal";R(Hf);class Kf extends Rt{constructor(e){super({scale:2,mode:"fanIn",distribution:"normal",seed:e==null?null:e.seed})}getClassName(){return Rt.className}}Kf.className="HeNormal";R(Kf);class qf extends Rt{constructor(e){super({scale:2,mode:"fanIn",distribution:"uniform",seed:e==null?null:e.seed})}getClassName(){return Rt.className}}qf.className="HeUniform";R(qf);class Yf extends Rt{constructor(e){super({scale:1,mode:"fanIn",distribution:"normal",seed:e==null?null:e.seed})}getClassName(){return Rt.className}}Yf.className="LeCunNormal";R(Yf);class Xf extends Rt{constructor(e){super({scale:1,mode:"fanIn",distribution:"uniform",seed:e==null?null:e.seed})}getClassName(){return Rt.className}}Xf.className="LeCunNormal";R(Xf);class mw extends un{constructor(e){if(super(),this.DEFAULT_GAIN=1,this.gain=e.gain==null?this.DEFAULT_GAIN:e.gain,this.seed=e.seed,this.seed!=null)throw new ne("Random seed is not implemented for Orthogonal Initializer yet.")}apply(e,n){return A(()=>{if(e.length<2)throw new ne("Shape must be at least 2D.");e[0]*e[1]>2e3&&console.warn(`Orthogonal initializer is being called on a matrix with more than 2000 (${e[0]*e[1]}) elements: Slowness may result.`);const r=e[0]>e[1]?[e[1],e[0]]:e,s=Hl(r,0,1,"float32");let i=GC.gramSchmidt(s);return e[0]>e[1]&&(i=ce(i)),T(this.gain,i)})}getConfig(){return{gain:this.gain,seed:this.seed}}}mw.className="Orthogonal";R(mw);const em={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function tm(t,e={}){return $o(t,Qt.getMap().classNameMap,e,"initializer")}function Le(t){return Uf(t)}function De(t){if(typeof t=="string"){const e=t in em?em[t]:t;if(e==="GlorotNormal")return new Hf;if(e==="GlorotUniform")return new Gf;if(e==="HeNormal")return new Kf;if(e==="HeUniform")return new qf;if(e==="LeCunNormal")return new Yf;if(e==="LeCunUniform")return new Xf;{const n={};return n.className=e,n.config={},tm(n)}}else return t instanceof un?t:tm(t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Jc(t){return Array.isArray(t)&&Array.isArray(t[0])}function ll(t){return t.length===0?[]:Array.isArray(t[0])?t:[t]}function re(t){let e;if(Array.isArray(t)){if(t.length!==1)throw new I(`Expected Tensor length to be 1; got ${t.length}`);e=t[0]}else e=t;return e}function ye(t){if(Array.isArray(t)&&Array.isArray(t[0])){if(t.length===1)return t=t,t[0];throw new I(`Expected exactly 1 Shape; got ${t.length}`)}else return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function ul(t){let e=0;for(const n of t)n.shape.length===0?e+=1:e+=n.shape.reduce((r,s)=>r*s);return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const nm="Variable";class VA{constructor(e,n="float32",r=nm,s=!0,i=null){this.dtype=n??"float32",this.shape=e.shape,this.id=nw(),r=r??nm,this.originalName=sw(r),this.name=iw(this.originalName),this.trainable_=s,this.constraint=i,this.val=jT(e,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(e){return this.assertNotDisposed(),GA(this.val,e),this.val.id!==e.id&&(this.val.assign(e),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(e){this.trainable_=e,this.val.trainable=e}}function GA(t,e){if(t.shape.toString()!==e.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(t.shape)+" vs. "+JSON.stringify(e.shape))}function Zc(t){return t.map(e=>e.read())}function Jf(t){t.forEach(e=>{e[0].write(e[1])})}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class qe{constructor(e){this.dtype=e.dtype,this.shape=e.shape,e.shape!=null?this.ndim=e.shape.length:this.ndim=e.ndim,this.maxNDim=e.maxNDim,this.minNDim=e.minNDim,this.axes=e.axes||{}}}class Pn{constructor(e,n,r,s,i,o,a){this.dtype=e,this.shape=n,this.sourceLayer=r,this.inputs=s,this.callArgs=i,this.outputTensorIndex=a,this.id=nw(),o!=null&&(this.originalName=sw(o),this.name=iw(this.originalName)),this.rank=n.length}}let HA=0;class Kl{constructor(e,n){this.callArgs=n,this.id=HA++,this.outboundLayer=e.outboundLayer,this.inboundLayers=e.inboundLayers,this.nodeIndices=e.nodeIndices,this.tensorIndices=e.tensorIndices,this.inputTensors=e.inputTensors,this.outputTensors=e.outputTensors,this.inputMasks=e.inputMasks,this.outputMasks=e.outputMasks,this.inputShapes=e.inputShapes,this.outputShapes=e.outputShapes;for(const r of e.inboundLayers)r!=null&&r.outboundNodes.push(this);e.outboundLayer.inboundNodes.push(this)}getConfig(){const e=[];for(const n of this.inboundLayers)n!=null?e.push(n.name):e.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:e,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let KA=0;class ue extends yi{constructor(e={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=KA++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let n=e.name;if(!n){const r=this.getClassName();n=Yn(r)+"_"+Gl(r)}if(this.name=n,this.trainable_=e.trainable==null?!0:e.trainable,e.inputShape!=null||e.batchInputShape!=null){let r;if(e.batchInputShape!=null)r=e.batchInputShape;else if(e.inputShape!=null){let i=null;e.batchSize!=null&&(i=e.batchSize),r=[i].concat(e.inputShape)}this.batchInputShape=r;let s=e.dtype;s==null&&(s=e.inputDType),s==null&&(s="float32"),this.dtype=s}e.weights!=null?this.initialWeights=e.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(e,n){return e.name+"_ib-"+n.toString()}getNodeAtIndex(e,n){if(this.inboundNodes.length===0)throw new nn(`The layer has never been called and thus has no defined ${n}.`);if(this.inboundNodes.length<=e)throw new I(`Asked to get ${n} at node ${e}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[e]}getInputAt(e){return xt(this.getNodeAtIndex(e,"input").inputTensors)}getOutputAt(e){return xt(this.getNodeAtIndex(e,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new _n(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new _n(`Layer ${this.name} is not connected, no input to return.`);return xt(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new _n(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new _n(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return xt(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(e=>e())}get updates(){return this._updates}get built(){return this._built}set built(e){this._built=e}get trainable(){return this.trainable_}set trainable(e){this._trainableWeights.forEach(n=>n.trainable=e),this.trainable_=e}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(e=>e.trainable):[]}set trainableWeights(e){this._trainableWeights=e}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(e=>!e.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(e){this._nonTrainableWeights=e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(e){if(e=xe(e),this.inputSpec==null||this.inputSpec.length===0)return;const n=xe(this.inputSpec);if(e.length!==n.length)throw new I(`Layer ${this.name} expects ${n.length} inputs, but it received ${e.length} input tensors. Input received: ${e}`);for(let r=0;r<e.length;r++){const s=e[r],i=n[r];if(i==null)continue;const o=s.rank;if(i.ndim!=null&&o!==i.ndim)throw new I(`Input ${r} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${o}`);if(i.maxNDim!=null&&o>i.maxNDim)throw new I(`Input ${r} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${o}`);if(i.minNDim!=null&&o<i.minNDim)throw new I(`Input ${r} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${o}.`);if(i.dtype!=null&&s.dtype!==i.dtype)throw new I(`Input ${r} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${s.dtype}.`);if(i.axes){const a=s.shape;for(const l in i.axes){const u=Number(l),c=i.axes[l],h=u>=0?a[u]:a[a.length+u];if(c!=null&&[c,null].indexOf(h)===-1)throw new I(`Input ${r} is incompatible with layer ${this.name}: expected axis ${u} of input shape to have value ${c} but got shape ${a}.`)}}if(i.shape!=null)for(let a=0;a<i.shape.length;++a){const l=i.shape[a],u=s.shape[a];if(l!=null&&u!=null&&l!==u)throw new I(`Input ${r} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${s.shape}.`)}}}call(e,n){return e}invokeCallHook(e,n){this._callHook!=null&&this._callHook(e,n)}setCallHook(e){this._callHook=e}clearCallHook(){this._callHook=null}apply(e,n){n=n||{},this.assertNotDisposed();const r=xe(e);let s=!0;for(const o of r)if(!(o instanceof Pn)){s=!1;break}let i=!0;for(const o of r)if(o instanceof Pn){i=!1;break}if(s===i)throw new I("Arguments to apply() must be all SymbolicTensors or all Tensors");return es(this.name,()=>{if(!this.built){this.assertInputCompatibility(e);const o=[];for(const a of xe(e))o.push(a.shape);this.build(xt(o)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&i&&(this._refCount=1)}if(this.assertInputCompatibility(e),i){let o=this.call(e,n);const a=xe(o),l=[];for(let u of a)r.indexOf(u)!==-1&&(u=u.clone()),l.push(u);if(o=xt(l),this.activityRegularizer!=null)throw new ne("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return o}else{const o=qA(e),a=this.computeOutputShape(o);let l;const u=YA(e);if(this.warnOnIncompatibleInputShape(Array.isArray(e)?o[0]:o),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((c,h)=>new Pn(u,c,this,xe(e),n,this.name,h)):l=new Pn(u,a,this,xe(e),n,this.name),this.addInboundNode(e,l,null,null,o,a,n),this._refCount++,this.activityRegularizer!=null)throw new ne("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(e){if(this.batchInputShape!=null)if(e.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(e)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let n=!1;this.batchInputShape.forEach((r,s)=>{r!=null&&e[s]!=null&&e[s]!==r&&(n=!0)}),n&&console.warn(`The shape of the input tensor (${JSON.stringify(e)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new _n(`The layer ${this.name} has never been called and thus has no defined output shape.`);const e=[];for(const n of this.inboundNodes){const r=JSON.stringify(n.outputShapes);e.indexOf(r)===-1&&e.push(r)}if(e.length===1){const n=this.inboundNodes[0].outputShapes;return Array.isArray(n)&&Array.isArray(n[0])&&n.length===1?n[0]:n}else throw new _n(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new nn(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return ul(this.weights)}build(e){this.built=!0}getWeights(e=!1){return Zc(e?this.trainableWeights:this.weights)}setWeights(e){A(()=>{const n=this.weights;if(n.length!==e.length)throw new I(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${e.length}, but the layer was expecting ${n.length} weights. Provided weights: ${e}...`);if(n.length===0)return;const r=[],s=Zc(n);for(let i=0;i<s.length;++i){const o=s[i],a=n[i],l=e[i];if(!It(o.shape,l.shape))throw new I(`Layer weight shape ${o.shape} not compatible with provided weight shape ${l.shape}`);r.push([a,l])}Jf(r)})}addWeight(e,n,r,s,i,o,a,l){if(this._addedWeightNames.indexOf(e)!==-1)throw new I(`Duplicate weight name ${e} for layer ${this.name}`);this._addedWeightNames.push(e),r==null&&(r="float32"),this.fastWeightInitDuringBuild&&(s=l!=null?l():De("zeros"));const u=s.apply(n,r),c=new VA(u,r,e,o,a);return u.dispose(),i!=null&&this.addLoss(()=>i.apply(c.read())),o==null&&(o=!0),o?this._trainableWeights.push(c):this._nonTrainableWeights.push(c),c}setFastWeightInitDuringBuild(e){this.fastWeightInitDuringBuild=e}addLoss(e){e==null||Array.isArray(e)&&e.length===0||(e=xe(e),this._losses!==void 0&&this._losses!==null&&this.losses.push(...e))}computeOutputShape(e){return e}computeMask(e,n){if(!this.supportsMasking){if(n!=null)if(Array.isArray(n))n.forEach(r=>{if(r!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return n}addInboundNode(e,n,r,s,i,o,a=null){const l=xe(e);n=xe(n),r=xe(r),s=xe(s),i=ll(i),o=ll(o);const u=[],c=[],h=[];for(const f of l)u.push(f.sourceLayer),c.push(f.nodeIndex),h.push(f.tensorIndex);new Kl({outboundLayer:this,inboundLayers:u,nodeIndices:c,tensorIndices:h,inputTensors:l,outputTensors:n,inputMasks:r,outputMasks:s,inputShapes:i,outputShapes:o},a);for(let f=0;f<n.length;f++)n[f].sourceLayer=this,n[f].nodeIndex=this.inboundNodes.length-1,n[f].tensorIndex=f}getConfig(){const e={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(e.batchInputShape=this.batchInputShape),this.dtype!=null&&(e.dtype=this.dtype),e}disposeWeights(){return this.weights.forEach(e=>e.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let e=0;return--this._refCount===0&&(e=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:e}}}function qA(t){t=xe(t);const e=[];for(const n of t)e.push(n.shape);return xt(e)}function YA(t){return"float32"}function gw(t,e,n){if((e==null||n!=null&&n>0)&&(e=t.sourceLayer,n=t.nodeIndex),e.inboundNodes.length===0)return[t];{const r=e.inboundNodes[n];if(r.inboundLayers.length===0)return r.inputTensors;{const s=[];for(let i=0;i<r.inboundLayers.length;i++){const o=r.inputTensors[i],a=r.inboundLayers[i],l=r.nodeIndices[i],u=gw(o,a,l);for(const c of u)s.indexOf(c)===-1&&s.push(c)}return s}}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Lo extends ue{constructor(e){if(super({dtype:e.dtype,name:e.name!=null?e.name:Gl("input").toString()}),e.batchSize==null&&(e.batchSize=null),e.sparse==null&&(e.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=e.sparse,e.inputShape!=null&&e.batchInputShape!=null)throw new I("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let n=e.batchInputShape;if(n==null){if(e.inputShape==null)throw new I("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");n=[e.batchSize].concat(e.inputShape)}else if(e.batchSize!=null)throw new I("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const r=e.dtype||"float32";this.batchInputShape=n,this.dtype=r,this.inputSpec=[{shape:n}];const s=new Pn(this.dtype,this.batchInputShape,this,[],{},this.name);s.nodeIndex=0,s.tensorIndex=0,new Kl({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[s],outputTensors:[s],inputMasks:[null],outputMasks:[null],inputShapes:[n],outputShapes:[n]})}apply(e,n){throw new I(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}Lo.className="InputLayer";R(Lo);function XA(t){if(t.batchShape==null&&t.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(t.batchShape!=null&&t.shape!=null)throw new I("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let e=t.batchShape;t.shape!=null&&e==null&&(e=[null].concat(t.shape));let n=t.dtype;return n==null&&(n="float32"),new Lo({batchInputShape:e,name:t.name,dtype:n,sparse:t.sparse}).inboundNodes[0].outputTensors[0]}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function JA(t,e){if(t.dtype==null||t.dtype===e.dtype)return e;try{return H(e,t.dtype)}catch{throw new I(`The dtype of the feed (${e.dtype}) can not be cast to the dtype of the key '${t.name}' (${t.dtype}).`)}}class gr{constructor(e){if(this.id2Value={},this.id2Mask={},this.name2Id={},e instanceof gr)for(const n in e.id2Value)this.id2Value[n]=e.id2Value[n],n in e.id2Mask&&(this.id2Mask[n]=e.id2Mask[n]);else{if(e==null)return;for(const n of e)this.add(n.key,n.value)}}add(e,n,r){if(this.id2Value[e.id]==null)this.id2Value[e.id]=JA(e,n),this.name2Id[e.name]=e.id,r!=null&&(this.id2Mask[e.id]=r);else throw new I(`Duplicate key: name=${e.name}, id=${e.id}`);return this}addFeed(e){this.add(e.key,e.value)}hasKey(e){return this.id2Value[e.id]!=null}names(){return Object.keys(this.name2Id)}getValue(e){if(e instanceof Pn){if(this.id2Value[e.id]==null)throw new I(`Nonexistent key: ${e.name}`);return this.id2Value[e.id]}else{const n=this.name2Id[e];if(n==null)throw new I(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Value[n]}}getMask(e){if(e instanceof Pn){if(this.id2Value[e.id]==null)throw new I(`Nonexistent key: ${e.name}`);return this.id2Mask[e.id]}else{const n=this.name2Id[e];if(n==null)throw new I(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Mask[n]}}disposeMasks(){this.id2Mask!=null&&ee(this.id2Mask)}}const cl=new Qv,hl=new Qv;function ZA(t){cl!=null&&cl.setMaxEntries(t),hl!=null&&hl.setMaxEntries(t)}function Oi(t,e,n,r){const s=n==null?!1:n.training,i=Array.isArray(t),o=i?t:[t],a=o.map(p=>p.name),l=[],u=e.names();for(const p of a)u.indexOf(p)!==-1?l.push(e.getValue(p)):l.push(null);r!=null&&(r.maxNumTensors=-1/0,r.minNumTensors=1/0);const c=a.join(",")+"|"+e.names().sort().join(",");let h=cl.get(c),f;if(h==null){const p=QA(o,e);h=p.sorted,f=p.recipientCounts,cl.put(c,h),hl.put(c,f)}f={},s||Object.assign(f,hl.get(c));const d=new gr(e);for(let p=0;p<h.length;++p){if(r!=null){const F=Vc().numTensors;F>r.maxNumTensors&&(r.maxNumTensors=F),F<r.minNumTensors&&(r.minNumTensors=F)}const y=h[p],w=y.sourceLayer;if(w instanceof Lo)continue;const g=[],m=[],v=[];let k=!1;for(const F of y.inputs){const L=d.getValue(F),W=d.getMask(F);g.push(L),m.push(W),W!=null&&(k=!0),s||(f[F.name]--,f[F.name]===0&&!e.hasKey(F)&&a.indexOf(F.name)===-1&&!L.isDisposed&&F.sourceLayer.stateful!==!0&&v.push(L))}k&&(n=n||{},n.mask=m[0]);const S=xe(w.apply(g,n));let C=null;w.supportsMasking&&(C=w.computeMask(g,m));const z=tD(y),$=Array.isArray(z)?z:[z];for(let F=0;F<$.length;++F){d.hasKey($[F])||d.add($[F],S[F],Array.isArray(C)?C[0]:C);const L=a.indexOf($[F].name);L!==-1&&(l[L]=S[F])}s||ee(v)}return d.disposeMasks(),i?l:l[0]}function QA(t,e){b(t!=null&&t.length>0,()=>"Expected at least one fetch, got none");let n=[],r={};if(t.length===1){const s=rm(t[0],e);n=s.sorted,r=s.recipientMap}else{const s=new Set;for(const i of t){const{sorted:o,recipientMap:a}=rm(i,e);for(const l of o)s.has(l.name)||(n.push(l),s.add(l.name));for(const l in a)r[l]==null&&(r[l]=new Set),a[l].forEach(u=>r[l].add(u))}}return{sorted:n,recipientCounts:eD(r)}}function eD(t){const e={};for(const n in t)e[n]=t[n].size;return e}function rm(t,e){const n=new Set,r=[],s={};for(const a of e.names())n.add(a);const i=[],o=[];for(i.push(t);i.length>0;){const a=i[i.length-1];if(n.has(a.name)){i.pop();continue}const l=o[o.length-1]===i.length-1;if(a.inputs.length===0||l)i.pop(),r.push(a),n.add(a.name),l&&o.pop();else{o.push(i.length-1);for(const u of a.inputs)s[u.name]==null&&(s[u.name]=new Set),s[u.name].add(a.name),!n.has(u.name)&&i.push(u)}}return{sorted:r,recipientMap:s}}function tD(t){let e;if(t.sourceLayer.inboundNodes.length===1)e=t.sourceLayer.output;else{let n=null;for(let r=0;r<t.sourceLayer.inboundNodes.length;++r)for(const s of t.sourceLayer.inboundNodes[r].outputTensors)if(s.id===t.id){n=r;break}e=t.sourceLayer.getOutputAt(n)}return e}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nD=me();nD.registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,ZA);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yw={kernelName:qy,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>T(t,Wl(H(n,"float32"),-1))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rD={kernelName:fS,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const r=Ae(H(n,"float32")),s=vt(te(ge(1),r));return dt(J(t,s))}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sD={kernelName:dS,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const r=vt(te(Ae(H(n,"float32")),1));return J(t,r)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iD={kernelName:lf,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,s=Ue(n.shape,r.shape);return{a:()=>{let a=t;const l=tt(n.shape,s);return l.length>0&&(a=Y(a,l)),M(a,n.shape)},b:()=>{let a=t;const l=tt(r.shape,s);return l.length>0&&(a=Y(a,l)),M(a,r.shape)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oD={kernelName:pS,saveAllInputs:!0,gradFunc:(t,e)=>{const n={};return e.forEach((r,s)=>{n[s]=()=>t.clone()}),n}};/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aD={kernelName:Yy,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>pe(n)}}};/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lD={kernelName:yS,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>pe(n)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uD={kernelName:vS,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>J(t,vt(te(ge(1),Ae(H(n,"float32")))))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cD={kernelName:wS,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const r=vt(P(ge(1),Ae(H(n,"float32"))));return J(t,r)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hD={kernelName:xS,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,s=Ue(n.shape,r.shape);return{a:()=>{const a=P(Ae(n),Ae(r));let l=T(t,J(r,a));const u=tt(n.shape,s);return u.length>0&&(l=Y(l,u)),M(l,n.shape)},b:()=>{const a=P(Ae(n),Ae(r));let l=dt(T(t,J(n,a)));const u=tt(r.shape,s);return u.length>0&&(l=Y(l,u)),M(l,r.shape)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fD={kernelName:bS,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>J(t,P(Ae(H(n,"float32")),1))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dD={kernelName:kS,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>J(t,te(ge(1),Ae(H(n,"float32"))))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pD(t,e,n,r,s,i){const o=N(t,"dy","avgPool3dGrad"),a=N(e,"input","avgPool3dGrad");let l=o,u=a,c=!1;a.rank===4&&(c=!0,l=M(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]]),u=M(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),b(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),b(u.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${u.rank}.`),Ot("avgPool3dGrad",s,i);const h={dy:l,input:u},f={filterSize:n,strides:r,pad:s,dimRoundingMode:i},d=D.runKernel(ES,h,f);return c?M(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const mD=_({avgPool3dGrad_:pD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gD={kernelName:Jy,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{filterSize:s,strides:i,pad:o,dimRoundingMode:a}=n;return{x:()=>mD(t,r,s,i,o,a)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yD(t,e,n,r,s){const i=N(t,"dy","avgPoolGrad"),o=N(e,"input","avgPoolGrad");b(o.rank===i.rank,()=>`Rank of input (${o.rank}) does not match rank of dy (${i.rank})`);let a=o,l=i,u=!1;o.rank===3&&(u=!0,a=M(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=M(i,[1,i.shape[0],i.shape[1],i.shape[2]])),b(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),b(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);const c={dy:l,input:a},h={filterSize:n,strides:r,pad:s},f=D.runKernel(SS,c,h);return u?M(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const vD=_({avgPoolGrad_:yD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wD={kernelName:Xy,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{filterSize:s,strides:i,pad:o}=n;return{x:()=>vD(t,r,s,i,o)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bD={kernelName:Zy,inputsToSave:["a","b"],gradFunc:(t,e,n)=>{const[r,s]=e,{transposeA:i,transposeB:o}=n;return!i&&!o?{a:()=>ke(t,s,!1,!0),b:()=>ke(r,t,!0,!1)}:!i&&o?{a:()=>ke(t,s,!1,!1),b:()=>ke(t,r,!0,!1)}:i&&!o?{a:()=>ke(s,t,!1,!0),b:()=>ke(r,t,!1,!1)}:{a:()=>ke(s,t,!0,!0),b:()=>ke(t,r,!0,!0)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kD={kernelName:Qy,gradFunc:(t,e,n)=>{const{blockShape:r,crops:s}=n;return{x:()=>GN(t,r,s)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xD={kernelName:NS,gradFunc:(t,e,n)=>{const r=n,s=r.inputShape,i=r.shape,o=Array.from(i);for(let l=s.length-1;l>=0;l--)if(s[l]===i[l])o[l]=1;else if(s[l]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${i}].`);const a=[];for(let l=0;l<o.length;l++)o[l]>1&&a.push(l);return{x:()=>Y(t,a,!0)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const SD={kernelName:uf,gradFunc:t=>({x:()=>t.clone()})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ED={kernelName:TS,gradFunc:t=>({x:()=>pe(t)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ID={kernelName:e0,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{clipValueMin:s,clipValueMax:i}=n;return{x:()=>ln(vi(Co(r,s),Ao(r,i)),t,pe(t))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ND={kernelName:t0,inputsToSave:["x"],gradFunc:yw.gradFunc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const TD={kernelName:n0,saveAllInputs:!0,gradFunc:(t,e,n)=>{const r=e.map(l=>l.shape),{axis:s}=n,i=Hn(s,e[0].shape)[0],o=r.map(l=>l[i]);return Wn(t,o,i).map(l=>()=>l)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const CD={kernelName:r0,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const[r,s]=e,{dilations:i,strides:o,pad:a,dataFormat:l}=n;return b(ii(i),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${i}'`),{x:()=>vf(r.shape,t,s,o,a,l),filter:()=>$f(r,t,s.shape,o,a,l)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const AD={kernelName:s0,inputsToSave:["dy","filter"],gradFunc:(t,e,n)=>{const[r,s]=e,{strides:i,pad:o,dataFormat:a,dimRoundingMode:l}=n;return{dy:()=>oi(t,s,i,o,a,1,l),filter:()=>$f(t,r,s.shape,i,o,a,l)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DD(t,e,n,r,s){let i=t;t.rank===4&&(i=M(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]));let o=e;o.rank===4&&(o=M(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]])),b(i.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${i.shape}.`),b(o.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${o.shape}.`),b(n.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${n}.`),b(i.shape[4]===n[3],()=>`Error in conv3dDerFilter: depth of input ${i.shape[4]}) must match input depth in filter (${n[3]}.`),b(o.shape[4]===n[4],()=>`Error in conv3dDerFilter: depth of dy (${o.shape[4]}) must match output depth for filter (${n[4]}).`);const a={x:i,dy:o},l={strides:r,pad:s,filterShape:n};return D.runKernel(DS,a,l)}const $D=_({conv3DBackpropFilter_:DD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zD={kernelName:i0,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const{dilations:r,strides:s,pad:i}=n;b(ii(r),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);const[o,a]=e;return{x:()=>Nv(o.shape,t,a,s,i),filter:()=>$D(o,t,a.shape,s,i)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const MD={kernelName:o0,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>T(dt(NT(H(n,"float32"))),t)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _D={kernelName:a0,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>T(CT(H(n,"float32")),t)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const FD={kernelName:l0,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{axis:s,exclusive:i,reverse:o}=n;return{x:()=>{const a=Av([s],r.rank);let l=qI(t,s,i,!o);return a!=null&&(l=ce(l,a)),l}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const LD={kernelName:u0,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const{dilations:r,strides:s,pad:i,dimRoundingMode:o}=n,a=r??[1,1];b(ii(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[l,u]=e;return b(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),b(u.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${u.rank}.`),b(l.shape[3]===u.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${u.shape[2]}.`),b(ms(s,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${s} and dilations '${a}'.`),Ot("depthwiseConv2d",i,o),{x:()=>QT(l.shape,t,u,s,i,a,o),filter:()=>JT(l,t,u.shape,s,i,a,o)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const RD={kernelName:LS,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const[r,s]=e,i={x:r,filter:s,dy:t},o={x:r,filter:s,dy:t};return{x:()=>D.runKernel(RS,i,n),filter:()=>D.runKernel(OS,o,n)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const OD={kernelName:h0,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e,r={dy:t,y:n};return{x:()=>D.runKernel(PS,r)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const PD={kernelName:BS,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e,r=T(cs(dt(Ae(n))),2/Math.sqrt(Math.PI));return{x:()=>T(t,r)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const BD={kernelName:f0,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e;return{x:()=>T(t,n)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const UD={kernelName:d0,inputsToSave:["input"],gradFunc:(t,e)=>{const[n]=e;return{input:()=>M(t,n.shape)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const WD={kernelName:WS,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>T(t,cs(n))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jD={kernelName:p0,gradFunc:t=>({x:()=>pe(t)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const VD={kernelName:m0,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,s=Ue(n.shape,r.shape);return{a:()=>{const a=J(t,H(r,"float32")),l=tt(n.shape,s);return l.length>0?M(Y(a,l),n.shape):a},b:()=>{let a=T(t,H(n,"float32"));const l=tt(r.shape,s);l.length>0&&(a=M(Y(a,l),r.shape));const u=Ae(r);return dt(J(a,H(u,"float32")))}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const GD={kernelName:g0,inputsToSave:["x","mean","variance","scale"],gradFunc:(t,e,n)=>{const{varianceEpsilon:r}=n,[s,i,o,a]=e,l=a??ge(1),u=tt(i.shape,s.shape),c=[];if(i.rank===1){for(let k=0;k<s.shape.length-1;++k)c.push(s.shape[k]);c.push(1)}const h=te(s,i),f=T(t,l),d=bT(P(o,ge(r))),p=T(T(T(d,d),d),ge(-.5));return{x:()=>i.rank===1?M(T(T(t,On(M(d,[1,1,1,i.shape[0]]),c)),l),s.shape):M(T(T(t,d),l),s.shape),mean:()=>{let k=T(T(d,ge(-1)),f);return i.rank===1&&(k=Y(k,u)),M(k,i.shape)},variance:()=>{let k=T(T(p,h),f);return i.rank===1&&(k=Y(k,u)),M(k,i.shape)},scale:()=>{const k=T(h,d);let S=T(t,k);return i.rank===1&&(S=Y(S,u)),M(S,i.shape)},offset:()=>{let k=t;return i.rank===1&&(k=Y(k,u)),M(k,i.shape)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const HD={kernelName:y0,inputsToSave:["x","indices"],gradFunc:(t,e,n)=>{const[r,s]=e,{axis:i}=n,o=Hn(i,r.shape)[0];return{x:()=>{const l=r.shape,u=s.size,c=l.slice(0,o),h=c.length,f=l.slice(i,l.length).slice(1),d=f.length,p=sm(0,h),y=sm(h+1,h+1+d),w=im([c,[u],f]),g=M(t,w),m=M(s,[u]),v=im([[h],p,y]),k=ce(g,v);let S=UT(k,m,r.shape[o]);const C=bf(v);return S=ce(S,C),S},indices:()=>s}}};function sm(t,e){const n=[];for(let r=t;r<e;++r)n.push(r);return n}function im(t){const e=[];for(let n=0;n<t.length;++n)for(let r=0;r<t[n].length;++r)e.push(t[n][r]);return e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const KD={kernelName:v0,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e;return{a:()=>pe(n),b:()=>pe(r)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qD={kernelName:cf,gradFunc:t=>({x:()=>H(t,"float32")})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const YD={kernelName:KS,gradFunc:t=>({x:()=>pe(t)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const XD={kernelName:qS,gradFunc:t=>({x:()=>pe(t)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const JD={kernelName:YS,gradFunc:t=>({x:()=>pe(t)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ZD={kernelName:w0,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{alpha:s}=n,i=Tn(r,0);return{x:()=>ln(i,t,T(t,s))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const QD={kernelName:k0,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>J(t,P(n,1))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const e$={kernelName:b0,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>J(t,H(n,"float32"))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const t$={kernelName:e2,inputsToSave:[],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r]=e,{axis:s}=n;return{logits:()=>{const o=cs(r);return te(t,T(Y(t,s,!0),o))}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n$(t,e,n,r=5,s=1,i=1,o=.5){const a={x:t,y:e,dy:n},l={depthRadius:r,bias:s,alpha:i,beta:o};return D.runKernel(n2,a,l)}const r$=_({localResponseNormalizationBackprop_:n$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const s$={kernelName:t2,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r,s]=e,{depthRadius:i,bias:o,alpha:a,beta:l}=n;return{x:()=>r$(r,s,t,i,o,a,l)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vw(t,e,n,r){return e.rank<n.rank&&(e=M(e,rl(e.shape,r))),t.rank<n.rank&&(t=M(t,rl(t.shape,r))),{x:()=>T(t,H(Dr(n,e),t.dtype))}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const om={kernelName:x0,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const r=n,{reductionIndices:s}=r,i=e[0],o=e[1],a=Hn(s,i.shape),l=vw(t,o,i,a);return{x:()=>l.x()}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const i$={kernelName:S0,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e;return{a:()=>T(t,H(Co(n,r),"float32")),b:()=>T(t,H(bN(n,r),"float32"))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o$(t,e,n,r,s,i,o){const a=N(t,"dy","maxPool3dGrad"),l=N(e,"input","maxPool3dGrad"),u=N(n,"output","maxPool3dGrad");let c=a,h=l,f=u,d=!1;l.rank===4&&(d=!0,c=M(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),h=M(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),f=M(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),b(c.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`),b(h.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),b(f.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${f.rank}.`),Ot("maxPool3dGrad",i,o);const p={dy:c,input:h,output:f},y={filterSize:r,strides:s,pad:i,dimRoundingMode:o},w=D.runKernel(s2,p,y);return d?M(w,[w.shape[1],w.shape[2],w.shape[3],w.shape[4]]):w}const a$=_({maxPool3dGrad_:o$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const l$={kernelName:I0,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r,s]=e,{filterSize:i,strides:o,pad:a,dimRoundingMode:l}=n;return{x:()=>a$(t,r,s,i,o,a,l)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u$(t,e,n,r,s,i,o){const a=N(t,"dy","maxPoolGrad"),l=N(e,"input","maxPoolGrad"),u=N(n,"output","maxPoolGrad");b(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),b(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),b(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),Ot("maxPoolGrad",i,o);const c={dy:a,input:l,output:u},h={filterSize:r,strides:s,pad:i,dimRoundingMode:o};return D.runKernel(r2,c,h)}const c$=_({maxPoolGrad_:u$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const h$={kernelName:E0,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r,s]=e,{filterSize:i,strides:o,pad:a}=n;return{x:()=>c$(t,r,s,i,o,a)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const f$={kernelName:N0,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{axis:s}=n,i=Hn(s,r.shape),a=nN(r.shape,i)[1],l=Et(a);return{x:()=>{const c=r.shape.slice();i.forEach(d=>{c[d]=1});const h=M(t,c);return J(T(h,ys(r.shape,"float32")),l)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const d$={kernelName:T0,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const r=n,{axis:s}=r,[i,o]=e,a=Hn(s,i.shape),l=vw(t,o,i,a);return{x:()=>l.x()}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const p$={kernelName:C0,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e;return{a:()=>T(t,H(Ao(n,r),"float32")),b:()=>T(t,H(Tn(n,r),"float32"))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const m$={kernelName:i2,inputsToSave:["x"],gradFunc:(t,e,n)=>{const r=e[0],{paddings:s}=n,i=s.map(o=>o[0]);return{x:()=>Ne(t,i,r.shape)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const g$={kernelName:o2,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,s=Ue(n.shape,r.shape);return{a:()=>{const a=tt(n.shape,s);return a.length>0?M(Y(t,a),n.shape):t},b:()=>{const a=T(t,dt(kf(J(n,r)))),l=tt(r.shape,s);return l.length>0?M(Y(a,l),r.shape):a}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const y$={kernelName:A0,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,s=Ue(n.shape,r.shape);return{a:()=>{const a=T(t,H(r,"float32")),l=tt(n.shape,s);return l.length>0?M(Y(a,l),n.shape):a},b:()=>{const a=T(t,H(n,"float32")),l=tt(r.shape,s);return l.length>0?M(Y(a,l),r.shape):a}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const v$={kernelName:D0,gradFunc:t=>({x:()=>dt(t)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const w$={kernelName:z0,inputsToSave:["indices"],gradFunc:(t,e)=>{const n=e[0];return{indices:()=>rt(n.shape,"float32")}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const b$={kernelName:$0,gradFunc:t=>({x:()=>pe(t)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const k$={kernelName:M0,saveAllInputs:!0,gradFunc:(t,e,n)=>{const{axis:r}=n;return li(t,r).map(i=>()=>i)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const am={kernelName:_0,inputsToSave:["x"],gradFunc:(t,e,n)=>{const r=e[0],{paddings:s}=n,i=s.map(o=>o[0]);return{x:()=>Ne(t,i,r.shape)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const x$={kernelName:F0,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(t,e)=>{const[n,r,s]=e,i=n,o=r,a=Ue(i.shape,o.shape);return{a:()=>{const c=H(o,"float32");let h=T(t,T(c,go(i,te(c,ge(1)))));const f=tt(i.shape,a);return f.length>0&&(h=Y(h,f)),M(h,i.shape)},b:()=>{const c=Tn(i,0),h=ln(c,$r(i),pe(i));let f=T(t,T(s,h));const d=tt(o.shape,a);return d.length>0&&(f=Y(f,d)),M(f,o.shape)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const S$={kernelName:L0,inputsToSave:["x","alpha"],gradFunc:(t,e)=>{const[n,r]=e,s=Tn(n,0);return{x:()=>ln(s,t,T(t,r)),alpha:()=>{let i=ln(s,pe(t),T(t,n));const o=tt(r.shape,t.shape);return o.length>0&&(i=Y(i,o)),M(i,r.shape)}}}};/**
 * @license
 * Copyright 2022 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E$(t,e,n){const r=t.shape.slice();r[n]=1;const s=M(e,r),i=Vp(t,n,!0,!1),o=Vp(t,n,!0,!0),a=T(i,o);return T(s,a)}function I$(t,e,n){const r=t.shape.length,s=r-n.length,i=Av(n,r);let o=t;i!=null&&(o=ce(t,i));const a=o.shape.slice(),u=a.splice(r-n.length,n.length).reduce((f,d)=>f*d,1);a.push(u);const c=o.reshape(a);let h=E$(c,e,s);if(h=h.reshape(o.shape),i!=null){const f=bf(i);h=ce(h,f)}return h}const N$={kernelName:h2,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{axis:s}=n;let i=[];return s==null?i=r.shape.map((o,a)=>a):typeof s=="number"?i=[s]:i=s,{x:()=>I$(r,t,i)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const T$={kernelName:c0,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,s=Ue(n.shape,r.shape);return{a:()=>{const a=J(t,H(r,"float32")),l=tt(n.shape,s);return l.length>0?M(Y(a,l),n.shape):a},b:()=>{let a=T(t,H(n,"float32"));const l=tt(r.shape,s);l.length>0&&(a=M(Y(a,l),r.shape));const u=Ae(r);return dt(J(a,H(u,"float32")))}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const C$={kernelName:p2,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>J(t,dt(Ae(n)))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const A$={kernelName:U0,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e,r=T(Ao(n,6),Wl(n));return{x:()=>T(t,H(r,"float32"))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const D$={kernelName:R0,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>T(t,H(Wl(n),"float32"))}}};/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $$={kernelName:O0,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>M(t,n.shape)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const z$={kernelName:B0,inputsToSave:["images"],gradFunc:(t,e,n)=>{const[r]=e,s={dy:t,images:r};return{images:()=>D.runKernel(g2,s,n)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M$={kernelName:P0,inputsToSave:["images"],gradFunc:(t,e,n)=>{const[r]=e,s={dy:t,images:r};return{images:()=>D.runKernel(m2,s,n)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _$={kernelName:W0,gradFunc:(t,e,n)=>{const{dims:r}=n,s=Hn(r,t.shape);return{x:()=>il(t,s)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const F$={kernelName:j0,gradFunc:t=>({x:()=>pe(t)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const L$={kernelName:V0,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>dt(J(t,T(go(n,1.5),2)))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const R$={kernelName:G0,inputsToSave:["condition"],gradFunc:(t,e)=>{const[n]=e;return{condition:()=>H(pe(n),"float32"),t:()=>T(t,H(n,t.dtype)),e:()=>T(t,H(zN(n),t.dtype))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O$={kernelName:H0,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const r=Tn(n,ge(0)),s=ge(qC),i=ge(YC),o=T(t,i),a=T(T(t,s),cs(H(n,"float32")));return ln(r,o,a)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const P$={kernelName:X0,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e;return{x:()=>T(t,T(n,te(ge(1),n)))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B$={kernelName:y2,gradFunc:t=>({x:()=>pe(t)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const U$={kernelName:q0,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>T(Tv(H(n,"float32")),t)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const W$={kernelName:Y0,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>T(GI(H(n,"float32")),t)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const j$={kernelName:K0,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{begin:s,size:i}=n,o=r.shape,[a,l]=BE(r,s,i),u=[];for(let c=0;c<t.rank;c++)u.push([a[c],o[c]-a[c]-l[c]]);return{x:()=>Fv(t,u)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const V$={kernelName:nv,outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r]=e,{dim:s}=n,i=!0,o=T(t,r);return{logits:()=>te(o,T(Y(o,[s],i),r))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const G$={kernelName:J0,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>T(t,Ol(n))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lm={kernelName:ev,gradFunc:(t,e,n)=>{const{blockShape:r,paddings:s}=n;return{x:()=>hI(t,r,s)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const um={kernelName:tv,gradFunc:(t,e,n)=>{const{axis:r}=n;return{x:()=>bn(t,r)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const H$={kernelName:Z0,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>J(t,T(vt(H(n,"float32")),2))}}};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const K$={kernelName:w2,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>T(t,T(H(n,"float32"),2))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const q$={kernelName:v2,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,s=ge(2);return{a:()=>T(t,T(s,te(n,r))),b:()=>T(t,T(s,te(r,n)))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Y$={kernelName:lv,gradFunc:t=>({x:()=>pe(t)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const X$={kernelName:rv,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,s=Ue(n.shape,r.shape);return{a:()=>{let a=t;const l=tt(n.shape,s);return l.length>0&&(a=Y(a,l)),M(a,n.shape)},b:()=>{let a=t;const l=tt(r.shape,s);return l.length>0&&(a=Y(a,l)),M(dt(a),r.shape)}}}};/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const J$={kernelName:Q0,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,s=r.shape.slice(),{axis:i}=n;Hn(i,r.shape).forEach(u=>{s[u]=1});const a=M(t,s),l=T(a,ys(r.shape,"float32"));return{x:()=>l}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Z$={kernelName:b2,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>J(t,Ae(Tv(n)))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Q$={kernelName:sv,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e;return{x:()=>T(te(ge(1),Ae(n)),t)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ez={kernelName:hf,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{reps:s}=n;return{x:()=>{let o=pe(r);if(r.rank===1)for(let a=0;a<s[0];++a)o=P(o,Ne(t,[a*r.shape[0]],[r.shape[0]]));else if(r.rank===2)for(let a=0;a<s[0];++a)for(let l=0;l<s[1];++l)o=P(o,Ne(t,[a*r.shape[0],l*r.shape[1]],[r.shape[0],r.shape[1]]));else if(r.rank===3)for(let a=0;a<s[0];++a)for(let l=0;l<s[1];++l)for(let u=0;u<s[2];++u)o=P(o,Ne(t,[a*r.shape[0],l*r.shape[1],u*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else if(r.rank===4)for(let a=0;a<s[0];++a)for(let l=0;l<s[1];++l)for(let u=0;u<s[2];++u)for(let c=0;c<s[3];++c)o=P(o,Ne(t,[a*r.shape[0],l*r.shape[1],u*r.shape[2],c*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${r.rank} tensors yet.`);return o}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tz={kernelName:Ea,gradFunc:(t,e,n)=>{const r=n,{perm:s}=r,i=bf(s);return{x:()=>ce(t,i)}}};/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nz={kernelName:iv,gradFunc:(t,e,n)=>{const r=n,{axis:s}=r;return{value:()=>zr(t,s)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rz={kernelName:ov,inputsToSave:["segmentIds"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>sz(t,n)}}};function sz(t,e){const n=gs(e,pe(e)),r=Ps(t,n);let s=Co(e,ge(0,"int32"));const i=r.rank-s.rank;for(let a=0;a<i;++a)s=gn(s,a+1);s=vi(s,ys(r.shape,"bool"));const o=pe(r);return ln(s,r,o)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iz={kernelName:av,gradFunc:t=>({x:()=>pe(t)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oz=[yw,rD,sD,iD,oD,aD,lD,uD,cD,hD,fD,dD,gD,wD,bD,kD,xD,SD,ED,ID,ND,TD,AD,CD,zD,MD,_D,FD,LD,RD,T$,OD,PD,BD,UD,WD,VD,jD,GD,HD,KD,qD,YD,XD,JD,ZD,QD,e$,t$,s$,om,om,i$,l$,h$,f$,d$,p$,m$,g$,y$,v$,w$,b$,k$,am,am,x$,S$,N$,C$,A$,D$,$$,z$,M$,_$,F$,L$,R$,O$,P$,B$,U$,W$,j$,V$,G$,lm,lm,um,um,H$,q$,K$,Y$,X$,J$,Z$,Q$,ez,tz,nz,rz,iz];for(const t of oz)S2(t);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Zf(t,e){return A(()=>vt(Y(T(t,t),e,!0)))}class Ro extends yi{getConfig(){return{}}}class ww extends Ro{constructor(e){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=e.maxValue!=null?e.maxValue:this.defaultMaxValue,this.axis=e.axis!=null?e.axis:this.defaultAxis}apply(e){return A(()=>{const n=Zf(e,this.axis),r=an(n,0,this.maxValue);return T(e,J(r,P(Ke(),n)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}ww.className="MaxNorm";R(ww);class bw extends Ro{constructor(e){super(),this.defaultAxis=0,this.axis=e.axis!=null?e.axis:this.defaultAxis}apply(e){return A(()=>J(e,P(Ke(),Zf(e,this.axis))))}getConfig(){return{axis:this.axis}}}bw.className="UnitNorm";R(bw);class kw extends Ro{apply(e){return wi(e)}}kw.className="NonNeg";R(kw);class xw extends Ro{constructor(e){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=e.minValue!=null?e.minValue:this.defaultMinValue,this.maxValue=e.maxValue!=null?e.maxValue:this.defaultMaxValue,this.rate=e.rate!=null?e.rate:this.defaultRate,this.axis=e.axis!=null?e.axis:this.defaultAxis}apply(e){return A(()=>{const n=Zf(e,this.axis),r=P(T(this.rate,an(n,this.minValue,this.maxValue)),T(1-this.rate,n));return T(e,J(r,P(Ke(),n)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}xw.className="MinMaxNorm";R(xw);const cm={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function Ye(t){return Uf(t)}function hm(t,e={}){return $o(t,Qt.getMap().classNameMap,e,"constraint")}function Xe(t){if(t==null)return null;if(typeof t=="string"){const n={className:t in cm?cm[t]:t,config:{}};return hm(n)}else return t instanceof Ro?t:hm(t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */async function jr(t){if(t==null)return;const e=[],n=[],r=[];for(const s in t){const i=t[s];if(typeof i!="number"){const o=i;e.push(o.data()),n.push(s),r.push(o)}}if(e.length>0){const s=await Promise.all(e);for(let i=0;i<s.length;++i)t[n[i]]=s[i][0];ee(r)}}function Sw(t){if(t!=null)for(const e in t){const n=t[e];typeof n!="number"&&n.dispose()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */var fm;(function(t){t[t.SILENT=0]="SILENT",t[t.VERBOSE=1]="VERBOSE"})(fm||(fm={}));const az=125;class vo{constructor(){this.validationData=null}setParams(e){this.params=e}async onEpochBegin(e,n){}async onEpochEnd(e,n){}async onBatchBegin(e,n){}async onBatchEnd(e,n){}async onTrainBegin(e){}async onTrainEnd(e){}setModel(e){}}class lz{constructor(e,n=10){e==null&&(e=[]),this.callbacks=e,this.queueLength=n}append(e){this.callbacks.push(e)}setParams(e){for(const n of this.callbacks)n.setParams(e)}setModel(e){for(const n of this.callbacks)n.setModel(e)}async onEpochBegin(e,n){n==null&&(n={});for(const r of this.callbacks)await r.onEpochBegin(e,n)}async onEpochEnd(e,n){n==null&&(n={});for(const r of this.callbacks)await r.onEpochEnd(e,n)}async onBatchBegin(e,n){n==null&&(n={});for(const r of this.callbacks)await r.onBatchBegin(e,n)}async onBatchEnd(e,n){n==null&&(n={});for(const r of this.callbacks)await r.onBatchEnd(e,n)}async onTrainBegin(e){e==null&&(e={});for(const n of this.callbacks)await n.onTrainBegin(e)}async onTrainEnd(e){e==null&&(e={});for(const n of this.callbacks)await n.onTrainEnd(e)}}class uz extends vo{constructor(){super()}async onEpochBegin(e){this.seen=0,this.totals={}}async onBatchEnd(e,n){n==null&&(n={});const r=n.size==null?0:n.size;this.seen+=r;for(const s in n){const i=n[s];if(typeof i=="number")this.totals.hasOwnProperty(s)||(this.totals[s]=0),this.totals[s]=this.totals[s]+i*r;else{let o;s in this.totals?o=this.totals[s]:this.totals[s]=0;const a=A(()=>P(this.totals[s],T(i,r)));this.totals[s]=a,o!=null&&o.dispose()}}}async onEpochEnd(e,n){if(n!=null)for(const r of this.params.metrics)this.totals[r]!=null&&(typeof this.totals[r]=="number"?n[r]=this.totals[r]/this.seen:A(()=>{const s=T(J(1,this.seen),this.totals[r]);n[r]=s,this.totals[r].dispose(),Gn(n[r])}))}}class cz extends vo{async onTrainBegin(e){this.epoch=[],this.history={}}async onEpochEnd(e,n){n==null&&(n={}),this.epoch.push(e);for(const r in n)this.history[r]==null&&(this.history[r]=[]),this.history[r].push(n[r])}async syncData(){const e=[],n=[],r=[];for(const i in this.history){const o=this.history[i];for(let a=0;a<o.length;++a)if(typeof o[a]!="number"){const l=o[a];e.push(l.data()),n.push(i),r.push(a)}}const s=await Promise.all(e);for(let i=0;i<s.length;++i)this.history[n[i]][r[i]].dispose(),this.history[n[i]][r[i]]=s[i][0]}}class hz extends vo{constructor(e,n){if(super(),this.currentEpoch=0,this.nowFunc=e.nowFunc,this.nextFrameFunc=e.nextFrameFunc||KC,this.yieldEvery=n||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=az),this.yieldEvery==="never"&&e.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");_c(this.yieldEvery)&&(this.maybeWait=xA(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=e.onTrainBegin,this.trainEnd=e.onTrainEnd,this.epochBegin=e.onEpochBegin,this.epochEnd=e.onEpochEnd,this.batchBegin=e.onBatchBegin,this.batchEnd=e.onBatchEnd,this.yield=e.onYield}async maybeWait(e,n,r){const s=[];this.yield!=null&&(await jr(r),s.push(this.yield(e,n,r))),s.push(this.nextFrameFunc()),await Promise.all(s)}async onEpochBegin(e,n){this.currentEpoch=e,this.epochBegin!=null&&(await jr(n),await this.epochBegin(e,n))}async onEpochEnd(e,n){const r=[];this.epochEnd!=null&&(await jr(n),r.push(this.epochEnd(e,n))),this.yieldEvery==="epoch"&&r.push(this.nextFrameFunc()),await Promise.all(r)}async onBatchBegin(e,n){this.batchBegin!=null&&(await jr(n),await this.batchBegin(e,n))}async onBatchEnd(e,n){const r=[];this.batchEnd!=null&&(await jr(n),r.push(this.batchEnd(e,n))),this.yieldEvery==="batch"?r.push(this.nextFrameFunc()):_c(this.yieldEvery)&&r.push(this.maybeWait(this.currentEpoch,e,n)),await Promise.all(r)}async onTrainBegin(e){this.trainBegin!=null&&(await jr(e),await this.trainBegin(e))}async onTrainEnd(e){this.trainEnd!=null&&(await jr(e),await this.trainEnd(e))}}function Ew(t,e){return t==null&&(t={}),t instanceof vo?[t]:Array.isArray(t)&&t[0]instanceof vo?t:xe(t).map(r=>new hz(r,e))}class Xt{constructor(){}static registerCallbackConstructor(e,n){b(e>=0&&Number.isInteger(e),()=>`Verbosity level is expected to be an integer >= 0, but got ${e}`),Xt.checkForDuplicate(n),Xt.constructors[e]==null&&(Xt.constructors[e]=[]),Xt.constructors[e].push(n)}static checkForDuplicate(e){for(const n in Xt.constructors)Xt.constructors[+n].forEach(s=>{if(s===e)throw new I("Duplicate callback constructor.")})}static clear(){Xt.constructors={}}static createCallbacks(e){const n=[];for(const r in Xt.constructors){const s=+r;e>=s&&n.push(...Xt.constructors[s])}return n.map(r=>new r)}}Xt.constructors={};function Iw(t,e,n,r,s,i,o,a,l){const u=new cz,c=[new uz,...Xt.createCallbacks(e)];t!=null&&c.push(...t),c.push(u);const h=new lz(c);return h.setParams({epochs:n,initialEpoch:r,samples:s,steps:i,batchSize:o,verbose:e,doValidation:a,metrics:l}),{callbackList:h,history:u}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Vn(t,e={},n=!1){return $o(t,Qt.getMap().classNameMap,e,"layer",n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function fl(t,e){return A(()=>{t.dtype!=="float32"&&(t=H(t,"float32"));const n=Y(_o(t),e,!0),r=Pl(n.shape,Ke()),s=vt(gs(n,r));return J(t,s)})}function ql(t,e){return A(()=>Ge(_o(te(e,t)),-1))}function Qf(t,e){return A(()=>Ge(bt(te(e,t)),-1))}function ed(t,e){return A(()=>{const n=te(t,e),r=an(bt(t),Ke(),Number.MAX_VALUE),s=bt(J(n,r));return T(100,Ge(s,-1))})}function fz(t,e){return A(()=>{const n=an(e,Ke(),Number.MAX_VALUE),r=$r(P(1,n)),s=an(t,Ke(),Number.MAX_VALUE),i=$r(P(1,s));return Ge(_o(te(r,i)),-1)})}function dz(t,e){return A(()=>{const n=gs(0,te(1,T(t,e)));return Ge(_o(n),-1)})}function pz(t,e){return A(()=>{const n=gs(0,te(1,T(t,e)));return Ge(n,-1)})}function mz(t,e){return A(()=>{const n=Y(T(t,e),-1),r=er(T(te(1,t),e),-1);return gs(0,P(1,te(r,n)))})}function gz(t,e){return A(()=>{const n=Math.log(2),r=te(e,t),s=te(P(r,xf(T(-2,r))),n);return Ge(s,-1)})}function wo(t,e,n=!1){return A(()=>{if(n)e=Bv(e);else{const r=Y(e,e.shape.length-1,!0);e=J(e,r)}return e=an(e,Ke(),1-Ke()),dt(Y(T(H(t,"float32"),$r(e)),e.shape.length-1))})}function dl(t,e,n=!1){return A(()=>{const r=H(kf(_A(t)),"int32");e=an(e,Ke(),1-Ke());const s=e.shape,i=M(Na(r,s[s.length-1]),s);return wo(i,e,n)})}function yz(t,e){if(!It(t.shape,e.shape))throw new I(`logits and labels must have the same shape, but got shapes ${JSON.stringify(t.shape)} and ${JSON.stringify(e.shape)}`);return A(()=>{const n=wi(e),r=dt(bt(e));return P(te(n,T(e,t)),EN(cs(r)))})}function Yl(t,e){return A(()=>{let n;return n=an(e,Ke(),1-Ke()),n=$r(J(n,te(1,n))),Ge(yz(t,n),-1)})}function vz(t,e){return A(()=>{const n=an(t,Ke(),1),r=an(e,Ke(),1);return Y(T(t,$r(J(n,r))),-1)})}function wz(t,e){return A(()=>{const n=$r(P(Ke(),e));return Ge(te(e,T(t,n)),-1)})}function Nw(t,e){return A(()=>{const n=fl(t,-1),r=fl(e,-1),s=T(n,r);return dt(Y(s,-1))})}const pl={meanSquaredError:ql,meanAbsoluteError:Qf,meanAbsolutePercentageError:ed,meanSquaredLogarithmicError:fz,squaredHinge:dz,hinge:pz,categoricalHinge:mz,logcosh:gz,categoricalCrossentropy:wo,sparseCategoricalCrossentropy:dl,binaryCrossentropy:Yl,kullbackLeiblerDivergence:vz,poisson:wz,cosineProximity:Nw};function Ru(t){if(typeof t=="string"){if(t in pl)return pl[t];let e=`Unknown loss ${t}`;throw t.toLowerCase().includes("softmaxcrossentropy")&&(e=`Unknown loss ${t}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new I(e)}else return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Tw(t,e){return A(()=>{const n=T(.5,En(e)),r=zo(Tn(e,n),t.dtype);return Ge(Dr(t,r),-1)})}function Cw(t,e){return A(()=>zo(Dr(si(t,-1),si(e,-1)),"float32"))}function bz(t,e){return A(()=>H(Y(vi(Dr(t,1),Dr(e,1))),"float32"))}function kz(t,e){return A(()=>H(Y(vi(Dr(t,0),Dr(e,1))),"float32"))}function xz(t,e){return A(()=>{const n=bz(t,e),r=kz(t,e),s=P(n,r);return H(ln(Tn(s,0),J(n,s),0),"float32")})}function Sz(t,e){return Yl(t,e)}function Ez(t,e){return t.rank===e.rank&&(t=ai(t,[t.rank-1])),e=si(e,-1),e.dtype!==t.dtype&&(e=H(e,t.dtype)),H(Dr(t,e),"float32")}const Iz=ql,Nz=ql,Tz=Qf,Cz=Qf,Az=ed,Dz=ed,Aw=wo,$z=Nw,Dw=dl,ml={binaryAccuracy:Tw,categoricalAccuracy:Cw,precision:xz,categoricalCrossentropy:Aw,sparseCategoricalCrossentropy:Dw,mse:Iz,MSE:Nz,mae:Tz,MAE:Cz,mape:Az,MAPE:Dz,cosine:$z};function zz(t){if(typeof t=="string"&&t in ml)return ml[t];if(typeof t!="string"&&t!=null)return t;throw new I(`Unknown metric ${t}`)}function ua(t){if(Fn(t!==null,`Unknown LossOrMetricFn ${t}`),typeof t=="string")return t;{let e;for(const n of Object.keys(pl))if(pl[n]===t){e=n;break}if(e!==void 0)return e;for(const n of Object.keys(ml))if(ml[n]===t){e=n;break}return e!==void 0?e:t.name}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Mz(t){const e={Adagrad:()=>xs.adagrad(.01),Adadelta:()=>xs.adadelta(1,.95,Ke()),Adam:()=>xs.adam(.001,.9,.999,Ke()),Adamax:()=>xs.adamax(.002,.9,.999,Ke(),0),RMSProp:()=>xs.rmsprop(.001,.9,0,Ke()),SGD:()=>xs.sgd(.01)};if(e.adagrad=e.Adagrad,e.adadelta=e.Adadelta,e.adam=e.Adam,e.adamax=e.Adamax,e.rmsprop=e.RMSProp,e.sgd=e.SGD,t in e)return e[t]();throw new I(`Unknown Optimizer ${t}`)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const dm=1*1024*1024;function pm(t,e,n=!1){if(t==null||typeof t!="object"||Object.getPrototypeOf(t)!==Object.prototype||!Qc(t))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(n){const r=JSON.stringify(t);r.length>dm&&console.warn(`User-defined metadata of model "${e}" is too large in size (length=${r.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${dm}.`)}}function Qc(t){if(t===null)return!0;if(typeof t=="object")if(Object.getPrototypeOf(t)===Object.prototype){const e=Object.keys(t);for(const n of e)if(typeof n!="string"||!Qc(t[n]))return!1;return!0}else if(Array.isArray(t)){for(const e of t)if(!Qc(e))return!1;return!0}else return!1;else{const e=typeof t;return e==="string"||e==="number"||e==="boolean"}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function _z(t,e,n,r=console.log){const s=Lz(t),i=["Layer (type)","Input Shape","Output shape","Param #"];s?(e=e||90,n=n||[.32,.61,.89,1]):(e=e||115,n=n||[.24,.48,.7,.8,1]),n[n.length-1]<=1&&(n=n.map(c=>Math.floor(e*c)));let o;if(!s){i.push("Receives inputs"),o=[];for(const c in t.nodesByDepth)o.push(...t.nodesByDepth[c])}r("_".repeat(e)),gl(i,n,r),r("=".repeat(e));const a=t.layers;for(let c=0;c<a.length;++c)s?Rz(a[c],n,r):Oz(a[c],n,o,r),r((c===a.length-1?"=":"_").repeat(e));t.checkTrainableWeightsConsistency();const l=Fz(t),u=ul(t.nonTrainableWeights);r(`Total params: ${l+u}`),r(`Trainable params: ${l}`),r(`Non-trainable params: ${u}`),r("_".repeat(e))}function Fz(t){let e;return t.collectedTrainableWeights!=null?e=ul(t.collectedTrainableWeights):e=ul(t.trainableWeights),e}function Lz(t){let e=!0;const n=[],r=[];for(const s in t.nodesByDepth)n.push(t.nodesByDepth[s]);for(const s of n){if(s.length>1||s.length===1&&s[0].inboundLayers.length>1){e=!1;break}r.push(...s)}if(e)for(const s of t.layers){let i=!1;for(const o of s.inboundNodes)if(r.indexOf(o)!==-1)if(i){e=!1;break}else i=!0;if(!e)break}return e}function gl(t,e,n=console.log){let r="";for(let s=0;s<t.length;++s)s>0&&(r=r.slice(0,r.length-1)+" "),r+=t[s],r=r.slice(0,e[s]),r+=" ".repeat(e[s]-r.length);n(r)}function Rz(t,e,n){let r,s;try{s=t.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch{s="multiple"}try{r=JSON.stringify(t.outputShape)}catch{r="multiple"}const i=t.name,o=t.getClassName(),a=[`${i} (${o})`,s,r,t.countParams().toString()];gl(a,e,n)}function Oz(t,e,n,r){let s,i;try{i=t.inboundNodes.map(h=>JSON.stringify(h.inputShapes)).join(",")}catch{i="multiple"}try{s=JSON.stringify(t.outputShape)}catch{s="multiple"}const o=[];for(const h of t.inboundNodes)if(!(n!=null&&n.length>0&&n.indexOf(h)===-1))for(let f=0;f<h.inboundLayers.length;++f){const d=h.inboundLayers[f].name,p=h.nodeIndices[f],y=h.tensorIndices[f];o.push(`${d}[${p}][${y}]`)}const a=t.name,l=t.getClassName(),u=o.length===0?"":o[0],c=[`${a} (${l})`,i,s,t.countParams().toString(),u];gl(c,e,r);for(let h=1;h<o.length;++h)gl(["","","","",o[h]],e,r)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function $w(t,e,n){return(t==="inboundNodes"||t==="outputLayers"||t==="inputLayers")&&e===0&&typeof n=="string"}function yl(t,e){if(t===null)return null;if(typeof t=="string")return Hr(t);if(typeof t=="number"||typeof t=="boolean")return t;if(t instanceof Array){const n=[],r=t.length;for(let s=0;s<r;++s){const i=t[s];$w(e,s,i)?n.push(i):n.push(yl(i,e))}return n}else{const n={};for(const r of Object.keys(t)){const s=t[r];if(r==="name"&&typeof s=="string")n[r]=s;else{const i=Hr(r);n[i]=yl(s,i)}}return n}}function eh(t,e){if(t==null)return null;if(typeof t=="string")return Yn(t);if(typeof t=="number"||typeof t=="boolean")return t;if(t instanceof Array){const n=[],r=t.length;for(let s=0;s<r;++s){const i=t[s];$w(e,s,i)?n.push(i):n.push(eh(i,e))}return n}else{const n={};for(const r of Object.keys(t)){const s=t[r],i=Yn(r);(r==="name"||r==="className")&&typeof s=="string"?n[i]=s:n[i]=eh(s,r)}return n}}/** @license See the LICENSE file. */const zw="3.21.0";/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class hn extends ue{constructor(e){if(super({}),this.containerNodes=new Set,this.name=e.name,this.name==null){const m=this.getClassName().toLowerCase();this.name=Gl(m)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(e.inputs)?this.inputs=e.inputs.slice():this.inputs=[e.inputs],Array.isArray(e.outputs)?this.outputs=e.outputs.slice():this.outputs=[e.outputs],Ir(this.inputs).length!==this.inputs.length)throw new I(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(m=>m.name)}`);Ir(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(m=>m.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const m of this.outputs){const v=m.sourceLayer,k=m.nodeIndex,S=m.tensorIndex;this.outputLayers.push(v),this.outputLayersNodeIndices.push(k),this.outputLayersTensorIndices.push(S)}for(const m of this.inputs){const v=m.sourceLayer,k=m.nodeIndex,S=m.tensorIndex;Fn(k===0,"input layer has >1 nodes"),Fn(S===0,"input layer has >1 tensors"),this.inputLayers.push(v),this.inputLayersNodeIndices.push(k),this.inputLayersTensorIndices.push(S)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let m=0;m<this.inputLayers.length;m++){const v=this.inputLayers[m];if(!(v instanceof Lo))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${e.inputs}. Input ${m} (0-based) originates from layer type ${v.getClassName()}.`);this.inputNames.push(v.name),this.feedInputShapes.push(v.batchInputShape),this.feedInputNames.push(v.name)}for(const m of this.outputLayers)this.outputNames.push(m.name);this.internalInputShapes=this.inputs.map(m=>m.shape),this.internalOutputShapes=this.outputs.map(m=>m.shape);const n={},r={},s={},i={},o={},a=[],l=(m,v,k,S,C,z)=>{(S==null||C==null||z==null)&&(S=m.sourceLayer,C=m.nodeIndex,z=m.tensorIndex);const $=S.inboundNodes[C];if(k.indexOf($)!==-1)throw new nn(`The tensor ${m.name} at layer "${S.name}" is part of a cycle.`);if(v.indexOf($)!==-1)return;this.containerNodes.add(hn.nodeKey(S,C)),S.id in o||(o[S.id]=Object.keys(o).length),k.indexOf($)===-1&&k.push($);const F=$.inboundLayers.length;for(let L=0;L<F;L++){const W=$.inputTensors[L],K=$.inboundLayers[L],Z=$.nodeIndices[L],se=$.tensorIndices[L];l(W,v,k,K,Z,se)}for(v.push($);k.indexOf($)>=0;)k.splice(k.indexOf($),1);a.push($)},u=[],c=[];for(const m of this.outputs)l(m,u,c);const h=a.slice().reverse();for(const m of h){r[m.id]=m,m.id in n||(n[m.id]=0);let v=n[m.id];const k=s[m.outboundLayer.id]==null?0:s[m.outboundLayer.id];v=Math.max(v,k),s[m.outboundLayer.id]=v,i[m.outboundLayer.id]=m.outboundLayer,n[m.id]=v;for(let S=0;S<m.inboundLayers.length;S++){const C=m.inboundLayers[S],z=m.nodeIndices[S],$=C.inboundNodes[z],F=n[$.id]==null?0:n[$.id];n[$.id]=Math.max(v+1,F),r[$.id]=$}}const f={};for(const m in n){const v=n[m];v in f||(f[v]=[]),f[v].push(r[m])}const d={};for(const m in s){const v=s[m];v in d||(d[v]=[]),d[v].push(i[m])}let p=Object.keys(d).map(m=>parseInt(m,10)).sort(oa);this.layers=[];for(const m of p){const v=d[m];v.sort((k,S)=>{const C=o[k.id],z=o[S.id];return C<z?-1:C>z?1:0});for(const k of v)k instanceof hn&&this.internalContainerRefs.push(k),this.layers.push(k)}this.layersByDepth=d,p=Object.keys(f).map(m=>parseInt(m,10)).sort(oa);const y=this.inputs.slice(),w=[];for(const m of p)for(const v of f[m]){const k=v.outboundLayer;if(k!=null){for(const S of v.inputTensors)if(y.indexOf(S)===-1)throw new nn(`Graph disconnected: cannot obtain value for tensor ${S} at layer "${k.name}". The following previous layers were accessed without issue: ${w}`);for(const S of v.outputTensors)y.push(S);w.push(k.name)}}this.nodesByDepth=f;const g=this.layers.map(m=>m.name);for(const m of g){const v=g.filter(k=>k===m).length;if(v!==1)throw new nn(`The name "${m}" is used ${v} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(g))}this.outboundNodes=[],this.inboundNodes=[],new Kl({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(m=>null),outputMasks:this.outputs.map(m=>null),inputShapes:this.inputs.map(m=>m.shape),outputShapes:this.outputs.map(m=>m.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const e={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(const n of this.layers)e.numDisposedVariables+=n.dispose().numDisposedVariables;for(const n of this.internalContainerRefs)e.numDisposedVariables+=n.dispose().numDisposedVariables}return e.refCountAfterDispose=this._refCount,e}get trainable(){return this.trainable_}set trainable(e){this.layers.forEach(n=>{n._trainableWeights.forEach(r=>r.trainable=e)}),this.trainable_=e}get trainableWeights(){if(this._trainableWeights.length>0)throw new I("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let e=[];for(const n of this.layers)e=e.concat(n.trainableWeights);return e}get nonTrainableWeights(){const e=[];for(const n of this.layers)e.push(...n.nonTrainableWeights);if(!this.trainable){const n=[];for(const r of this.layers)n.push(...r.trainableWeights);return n.concat(e)}return e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(e,n=!0){const r={};let s=0;for(const o of this.layers)for(const a of o.weights){if(r[a.originalName]!=null)throw new I(`Duplicate weight name: ${a.originalName}`);r[a.originalName]=a,s++}const i=[];for(const o in e){let a=o;if(r[o]==null){const l=o.split("/");a=l.slice(0,-2).concat([l[l.length-1]]).join("/")}if(r[a]!=null)i.push([r[a],e[o]]);else if(n)throw new I(`Provided weight data has no target variable: ${o}`);delete r[a]}if(n){const o=[];for(const a in r)o.push(a);if(o.length>0)throw new I(`${o.length} of ${s} weights are not set: ${o}`)}Jf(i)}updatedConfig(){const e=this.getConfig(),n={};return n.className=this.getClassName(),n.config=e,n.kerasVersion=`tfjs-layers ${zw}`,n.backend="TensorFlow.js",n}toJSON(e,n=!0){const r=eh(this.updatedConfig());return n?JSON.stringify(r):r}call(e,n){return A(()=>{e=xe(e);const r=new gr;for(let s=0;s<this.inputs.length;++s)r.add(this.inputs[s],e[s]);return Oi(this.outputs,r,n)})}computeMask(e,n){return A(()=>{e=xe(e);let r;return n==null?r=hs(null,e.length):r=xe(n),this.runInternalGraph(e,r)[1]})}computeOutputShape(e){const n=ll(e);if(n.length!==this.inputLayers.length)throw new I(`Invalid inputShape argument ${e}: model has ${this.inputLayers.length} tensor inputs.`);const r={};for(let a=0;a<n.length;a++){const l=this.inputLayers[a],u=n[a],c=l.name+"_0_0";r[c]=u}const s=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort(oa);if(s.length>1)for(const a of s){const l=this.nodesByDepth[a];for(const u of l){const c=u.outboundLayer;if(this.inputLayers.map(y=>y.id).indexOf(c.id)!==-1)continue;const h=[];for(let y=0;y<u.inboundLayers.length;y++){const w=u.inboundLayers[y],g=u.nodeIndices[y],m=u.tensorIndices[y],v=`${w.name}_${g}_${m}`,k=r[v];h.push(k)}const f=c.computeOutputShape(xt(h)),d=ll(f),p=c.inboundNodes.indexOf(u);for(let y=0;y<d.length;y++){const w=`${c.name}_${p}_${y}`;r[w]=d[y]}}}const i=[],o=[];for(let a=0;a<this.outputLayers.length;a++){const l=this.outputLayers[a],u=this.outputLayersNodeIndices[a],c=this.outputLayersTensorIndices[a],h=`${l.name}_${u}_${c}`;o.push(h)}for(let a=0;a<o.length;a++){const l=o[a];Fn(l in r),i.push(r[l])}return xt(i)}runInternalGraph(e,n){n==null&&(n=hs(null,e.length));const r={};for(let l=0;l<this.inputs.length;++l){const u=this.inputs[l],c=e[l],h=n[l];r[u.id]=[c,h]}const s=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(oa);for(const l of s){const u=this.nodesByDepth[l];for(const c of u){const h=c.outboundLayer,f=c.inputTensors,d=c.outputTensors,p=new Array;for(const y of f)y.id in r&&p.push(r[y.id]);if(p.length===f.length){let y={},w,g,m,v;if(c.callArgs!=null&&(y=c.callArgs),p.length===1){const[k,S]=p[0];y.mask==null&&(y.mask=S),m=xe(h.call(k,y)),v=xe(h.computeMask(k,S)),w=[k],g=[S]}else w=p.map(k=>k[0]),g=p.map(k=>k[1]),y.mask==null&&(y.mask=g),m=xe(h.call(w,y)),v=xe(h.computeMask(w,g));if(h.activityRegularizer)throw new ne("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let k=0;k<d.length;++k){const S=d[k],C=m[k],z=v[k];r[S.id]=[C,z]}}}}const i=[],o=[],a=[];for(const l of this.outputs){Fn(l.id in r,`Could not compute output ${l.name} : ${l.id}`);const[u,c]=r[l.id];a.push(u.shape),i.push(u),o.push(c)}return[i,o,a]}buildNodeConversionMap(e){const n={};let r;for(const s of this.layers){r=s instanceof hn?1:0;for(let i=0;i<s.inboundNodes.length;i++){const o=hn.nodeKey(s,i);this.containerNodes.has(o)&&(n[o]=r,r+=1)}}return n}getLayer(e,n){if(n!=null){if(this.layers.length<=n)throw new I(`Was asked to retrieve layer at index ${n}, but model only has ${this.layers.length} layer(s).`);return this.layers[n]}else if(e==null)throw new I("Provide either a layer name or layer index");for(const r of this.layers)if(r.name===e)return r;throw new I(`No such layer: ${e}`)}calculateLosses(){return A(()=>{const e=[];for(const n of this.layers)for(let r=0;r<n.inboundNodes.length;++r){const s=hn.nodeKey(n,r);this.containerNodes.has(s)&&e.push(...n.calculateLosses())}return e})}getConfig(){const e={name:this.name},n=this.buildNodeConversionMap(this.layers),r=[];for(const o of this.layers){const a=o.getClassName(),l=o.getConfig(),u=[];for(let h=0;h<o.inboundNodes.length;h++){const f=o.inboundNodes[h],d=hn.nodeKey(o,h);let p={};if(this.containerNodes.has(d)){if(f.callArgs)try{JSON.stringify(f.callArgs),p=f.callArgs}catch{console.warn(`Layer ${o.name} was passed non-serializable keyword arguments: ${f.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),p={}}if(f.inboundLayers.length>0){const y=[];for(let w=0;w<f.inboundLayers.length;w++){const g=f.inboundLayers[w],m=f.nodeIndices[w],v=f.tensorIndices[w],k=hn.nodeKey(g,m);let S=n[k];S==null&&(S=0),y.push([g.name,S,v,p])}u.push(y)}}}const c={};c.name=o.name,c.className=a,c.config=l,c.inboundNodes=u,r.push(c)}e.layers=r;const s=[];for(let o=0;o<this.inputLayers.length;o++){const a=this.inputLayers[o],l=this.inputLayersNodeIndices[o],u=hn.nodeKey(a,l);if(!this.containerNodes.has(u))continue;let c=n[u];c==null&&(c=0);const h=this.inputLayersTensorIndices[o];s.push([a.name,c,h])}e.inputLayers=s;const i=[];for(let o=0;o<this.outputLayers.length;o++){const a=this.outputLayers[o],l=this.outputLayersNodeIndices[o],u=hn.nodeKey(a,l);if(!this.containerNodes.has(u))continue;let c=n[u];c==null&&(c=0);const h=this.outputLayersTensorIndices[o];i.push([a.name,c,h])}return e.outputLayers=i,e}static fromConfig(e,n,r={},s=!1){const i={},o={};function a(w,g){w.name in o?o[w.name].push(g):o[w.name]=[g]}function l(w,g){const m=[];let v;for(const k of g){const S=k[0],C=k[1],z=k[2];if(v=k[3]==null?{}:k[3],!(S in i)){a(w,g);return}const $=i[S];if($.inboundNodes.length<=C){a(w,g);return}const F=$.inboundNodes[C];m.push(F.outputTensors[z])}m.length>0&&w.apply(xt(m),v)}function u(w){const g=w.name,m=Vn(w,n.customObjects!=null?n.customObjects:{});m.setFastWeightInitDuringBuild(s),i[g]=m,w.inboundNodes.forEach(k=>{if(!(k instanceof Array))throw new I(`Corrupted configuration, expected array for nodeData: ${k}`);a(m,k)})}const c=n.name,h=n.layers;for(const w of h)u(w);for(;!kA(o);)for(const w of h){const g=i[w.name];if(g.name in o){const m=o[g.name];delete o[g.name];for(const v of m)l(g,v)}}const f=[],d=[],p=n.inputLayers;for(const w of p){const g=w[0],m=w[1],v=w[2];Fn(g in i);const S=i[g].inboundNodes[m].outputTensors;f.push(S[v])}const y=n.outputLayers;for(const w of y){const g=w[0],m=w[1],v=w[2];Fn(g in i);const S=i[g].inboundNodes[m].outputTensors;d.push(S[v])}return new e({inputs:f,outputs:d,name:c})}get stateful(){if(this._stateful)throw new I("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const e of this.layers)if(e.stateful)return!0;return!1}resetStates(){A(()=>{this.layers.forEach(e=>{e.stateful&&e.resetStates()})})}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Pz(t,e,n){const r=e.length;if(t==null||Array.isArray(t)&&t.length===0)return e.map(s=>null);if(r===1)return Array.isArray(t)&&t.length===1?t:typeof t=="object"&&e[0]in t?[t[e[0]]]:[t];if(Array.isArray(t)){if(t.length!==r)throw new Error(`Provided ${n} is an array of ${t.length} element(s), but the model has ${r} outputs. Make sure a set of weights is provided for each model output.`);return t}else if(typeof t=="object"&&Object.keys(t).length>0&&typeof t[Object.keys(t)[0]]=="object"){const s=[];return e.forEach(i=>{i in t?s.push(t[i]):s.push(null)}),s}else throw new Error(`The model has multiple (${r}) outputs, so ${n} must be either an array with ${r} elements or an object with ${e} keys. Provided ${n} not understood: ${JSON.stringify(t)}`)}function Mw(t,e){return Pz(t,e,"classWeight")}async function _w(t,e,n,r){if(e!=null||r!=null)throw new Error("Support sampleWeight is not implemented yet");if(n!=null){const s=A(()=>{if(t.shape.length===1)return Qr(t);if(t.shape.length===2){if(t.shape[1]>1)return si(t,1);if(t.shape[1]===1)return M(t,[t.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${t.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${t.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),i=Array.from(await s.data());ee(s);const o=[];return i.forEach(a=>{if(n[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);o.push(n[a])}),ct(o,"float32")}else return null}function Bz(t,e){return T(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const Uz=32;function Fw(t,e){let n,r;const s=e;n=s.xs,r=s.ys,b(n!=null&&r!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${e}`);const i=mm("input",t.inputNames,n),o=mm("output",t.outputNames,r),a=i[0].shape[0];b(i.length===t.inputs.length,()=>`LayersModel has ${t.inputs.length} inputs, but the dataset provides ${i.length} inputs.  (Expected input keys: ${JSON.stringify(t.inputNames)})`),b(o.length===t.outputs.length,()=>`LayersModel has ${t.outputs.length} outputs, but the dataset provides ${o.length} outputs.  (Expected output keys: ${JSON.stringify(t.outputNames)})`);for(let l=0;l<i.length;l++)b(i[l].shape[0]===a,()=>`Batch size mismatch: input ${t.inputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${t.inputNames[0]}.`);for(let l=0;l<o.length;l++)b(o[l].shape[0]===a,()=>`Batch size mismatch: output ${t.outputNames[l]} has ${o[l].shape[0]}; expected  ${a} based on input ${t.inputNames[0]}.`);return{xs:i,ys:o}}function mm(t,e,n){if(n instanceof Te)return[n];if(Array.isArray(n))return b(n.length===e.length,()=>`Received an array of ${n.length} Tensors, but expected ${e.length} to match the ${t} keys ${e}.`),n;{const r=[];for(const s of e){if(n[s]==null)throw new I(`The feature data generated by the dataset lacks the required ${t} key '${s}'.`);r.push(n[s])}return r}}function Wz(t){if(t.length===3)throw new ne("Validation with sample weights is not implemented yet.");return{xs:t[0],ys:t[1]}}async function jz(t,e,n){const r=n.batchesPerEpoch!=null;if(b(t.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),b(n!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),b(n.epochs!=null&&n.epochs>0&&Number.isInteger(n.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${n.epochs}`),b(!r||n.batchesPerEpoch>0&&Number.isInteger(n.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${n.batchesPerEpoch}`),b(n.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),t.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");t.isTraining=!0;try{const s=n.validationData!=null;let i,o;if(s)if(gm(n.validationData))b(n.validationBatches==null||n.validationBatches>0&&Number.isInteger(n.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${n.validationBatches}`);else{const w=Wz(n.validationData);i=w.xs,o=w.ys}const a=t.makeTrainFunction(),l=t.getDedupedMetricsNames();let u;s?u=l.slice().concat(l.map(w=>"val_"+w)):u=l.slice();const c=Ew(n.callbacks,n.yieldEvery),h=n.verbose==null?1:n.verbose,{callbackList:f,history:d}=Iw(c,h,n.epochs,null,null,Vz(e,n),null,s,u);f.setModel(t),t.history=d,await f.onTrainBegin(),t.stopTraining_=!1;let p=n.initialEpoch==null?0:n.initialEpoch,y=await e.iterator();for(;p<n.epochs;){const w={};await f.onEpochBegin(p);let g=0,m=0;for(r||(y=await e.iterator());!r||g<n.batchesPerEpoch;){const v=await y.next();if(r&&v.done){console.warn(`You provided \`batchesPerEpoch\` as ${n.batchesPerEpoch}, but your dataset iterator ran out of data after ${g} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${n.batchesPerEpoch*n.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(v.value!=null){const{xs:k,ys:S}=Fw(t,v.value),C={};C.batch=m,C.size=k[0].shape[0],await f.onBatchBegin(m,C);const z=[];if(n.classWeight!=null){const L=Mw(n.classWeight,t.outputNames);for(let W=0;W<L.length;++W)z.push(await _w(S[W],null,L[W]))}const $=k.concat(S).concat(z),F=a($);ee($);for(let L=0;L<l.length;++L){const W=l[L],K=F[L];C[W]=K,Gn(K)}await f.onBatchEnd(m,C),Sw(C),m++,g++}if(r?g>=n.batchesPerEpoch:v.done){if(s){let k;gm(n.validationData)?k=xe(await t.evaluateDataset(n.validationData,{batches:n.validationBatches})):k=xe(t.evaluate(i,o,{batchSize:n.validationBatchSize==null?Uz:n.validationBatchSize,verbose:0}));for(let S=0;S<t.metricsNames.length;++S)w[`val_${t.metricsNames[S]}`]=k[S]}break}if(t.stopTraining_)break}if(await f.onEpochEnd(p,w),p++,t.stopTraining_)break}return await f.onTrainEnd(),await t.history.syncData(),t.history}finally{t.isTraining=!1}}function Vz(t,e){let n=null;return e.batchesPerEpoch!=null?n=e.batchesPerEpoch:Number.isFinite(t.size)&&(n=t.size),n}function gm(t){return typeof t.iterator=="function"}function Gz(t){return typeof t.next=="function"}async function Hz(t,e,n){n=n||{};const r=n.batches!=null,s=t.testFunction;let i=[];if(n.verbose>0)throw new ne("Verbose mode is not implemented yet.");b(!r||n.batches>0&&Number.isInteger(n.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(n.batches)}`);const o=Gz(e)?e:await e.iterator();let a=0,l=0;for(;!r||l<n.batches;){const u=await o.next();if(i=A(()=>{if(u.value){const{xs:c,ys:h}=Fw(t,u.value),f=c.concat(h),d=A(()=>s(f));if(ee(f),l===0)for(let y=0;y<d.length;++y)i.push(ge(0));const p=f[0].shape[0];for(let y=0;y<d.length;++y){const w=d[y],g=i[y];i[y]=A(()=>P(i[y],T(p,w))),l>0&&ee(g)}ee(d),a+=p,++l}return i}),u.done){r&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${n.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let u=0;u<i.length;++u){const c=i[u];i[u]=J(i[u],a),ee(c)}return xt(i)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function th(t){b(t>0&&Number.isInteger(t),()=>`batchSize is required to be a positive integer, but got ${t}`)}function Pi(t,e,n){return t==null?[null]:Array.isArray(t)?t.map(r=>ts(r,e,n-e)):ts(t,e,n-e)}function td(t,e){return A(()=>t==null?null:Array.isArray(t)?t.map(n=>td(n,e)):aw(t,e.dtype==="int32"?e:H(e,"int32")))}function nh(t,e){const n=[];let r=0,s=null;for(;r<t;)s=r+e,s>=t&&(s=t),n.push([r,s]),r=s;return n}async function Kz(t,e,n,r,s,i,o,a,l,u,c,h,f,d,p){s==null&&(s=32),i==null&&(i=1),c==null&&(c=!0),f==null&&(f=0);let y=!1;if(l!=null&&u!=null&&(y=!0),p!=null&&(y=!0,d==null))throw new I("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const w=t.checkNumSamples(n,s,d,"steps_per_epoch");let g;w!=null&&(g=In(0,w)),o==null&&(o=1);const{callbackList:m,history:v}=Iw(a,o,i,f,w,d,s,y,h);m.setModel(t),t.history=v,await m.onTrainBegin(),t.stopTraining_=!1;for(let k=f;k<i;++k){await m.onEpochBegin(k);const S={};if(d!=null)throw new ne("stepsPerEpoch mode is not implemented yet.");{if(c==="batch")throw new ne("batch shuffling is not implemneted yet");c&&mo(g);const C=ct(g),z=nh(w,s);for(let $=0;$<z.length;++$){const F={};if(await m.onBatchBegin($,F),A(()=>{const L=z[$][0],W=z[$][1],K=ts(C,L,W-L);F.batch=$,F.size=W-L;const Z=td(n,K),se=e(Z);for(let ie=0;ie<r.length;++ie){const oe=r[ie],ae=se[ie];F[oe]=ae,Gn(ae)}if($===z.length-1&&y){const ie=t.testLoop(l,u,s);for(let oe=0;oe<r.length;++oe){const ae=r[oe],E=ie[oe];Gn(E),S["val_"+ae]=E}}}),await m.onBatchEnd($,F),Sw(F),t.stopTraining_)break}C.dispose()}if(await m.onEpochEnd(k,S),t.stopTraining_)break}return await m.onTrainEnd(),await t.history.syncData(),t.history}async function qz(t,e,n,r={}){if(t.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");t.isTraining=!0;let s,i,o,a,l,u,c,h,f;try{const d=r.batchSize==null?32:r.batchSize;th(d);const p=!1,y=await t.standardizeUserData(e,n,r.sampleWeight,r.classWeight,p,d);s=y[0],i=y[1],f=y[2];let w=!1,g;if(r.validationData!=null&&r.validationData.length>0){if(w=!0,r.validationData.length===2)l=r.validationData[0],u=r.validationData[1];else throw r.validationData.length===3?new ne("validationData including sample weights is not supported yet."):new I(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${r.validationData} is invalid.`);const F=!0,L=await t.standardizeUserData(l,u,null,null,F,d);c=L[0],h=L[1],g=c.concat(h)}else if(r.validationSplit!=null&&r.validationSplit>0&&r.validationSplit<1){w=!0;const F=Math.floor(s[0].shape[0]*(1-r.validationSplit)),L=s[0].shape[0];c=Pi(s,F,L),o=s,s=Pi(s,0,F),h=Pi(i,F,L),a=i,i=Pi(i,0,F),g=c.concat(h)}else r.validationSteps!=null&&(w=!0);const m=s.concat(i).concat(f);t.checkTrainableWeightsConsistency();const v=t.makeTrainFunction(),k=t.getDedupedMetricsNames();let S,C;w?(t.makeTestFunction(),S=t.testFunction,C=k.slice().concat(k.map(F=>"val_"+F))):(S=null,g=[],C=k.slice());const z=Ew(r.callbacks,r.yieldEvery);return await Kz(t,v,m,k,d,r.epochs,r.verbose,z,S,g,r.shuffle,C,r.initialEpoch,null,null)}finally{t.isTraining=!1,yn(s,e),yn(i,n),yn(o,e),yn(a,n),yn(c,l),yn(h,u),f!=null&&ee(f)}}function Lw(t){const e=[];t instanceof Te&&(t=[t]);for(let n=0;n<t.length;++n){const r=t[n];if(r.rank===1)e.push(Mo(r,1));else{if(r.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");e.push(r)}}return e}function yn(t,e){if(t==null)return;const n=[];if(e instanceof Te)n.push(e.id);else if(Array.isArray(e))e.forEach(s=>n.push(s.id));else if(e!=null)for(const s in e){const i=e[s];n.push(i.id)}const r=[];if(t instanceof Te)n.indexOf(t.id)===-1&&r.push(t);else if(Array.isArray(t))t.forEach(s=>{n.indexOf(s.id)===-1&&r.push(s)});else if(t!=null)for(const s in t){const i=t[s];n.indexOf(i.id)===-1&&r.push(i)}r.forEach(s=>{s.isDisposed||s.dispose()})}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Yz(t){return t instanceof Te}function rh(t){return Array.isArray(t)}function ym(t){return!Yz(t)&&!rh(t)}function vm(t,e,n,r=!0,s=""){if(e==null||e.length===0){if(t!=null){let o=!1;if(rh(t)&&t.length>0)o=!0;else if(ym(t)){for(const a in t)if(t.hasOwnProperty(a)){o=!0;break}}else o=!0;if(o)throw new I(`Error when checking model ${s} expected no data, but got ${t}`)}return[]}if(t==null)return e.map(o=>null);let i;if(ym(t)){t=t,i=[];for(const o of e){if(t[o]==null)throw new I(`No data provided for "${o}". Need data for each key in: ${e}`);i.push(t[o])}}else if(rh(t)){if(t=t,t.length!==e.length)throw new I(`Error when checking model ${s}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${e.length} Tensor(s), but instead got the following list of Tensor(s): ${t}`);i=t}else{if(t=t,e.length>1)throw new I(`The model ${s} expects ${e.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${t.shape}`);i=[t]}if(i=Lw(i),n!=null)for(let o=0;o<e.length;++o){if(n[o]==null)continue;const a=i[o];if(a.shape.length!==n[o].length)throw new I(`Error when checking ${s}: expected ${e[o]} to have ${n[o].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<n[o].length;++l){if(l===0&&!r)continue;const u=a.shape[l],c=n[o][l];if(c!=null&&c>=0&&u!==c)throw new I(`${s} expected a batch of elements where each example has shape [${n[o].slice(1,n[o].length)}] (i.e.,tensor shape [*,${n[o].slice(1,n[o].length)}]) but the ${s} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return i}function Xz(t,e,n){const r=Ir(t.map(i=>i.shape[0]));r.sort();const s=Ir(e.map(i=>i.shape[0]));if(s.sort(),r.length>1)throw new I(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(i=>i.shape))}`);if(s.length>1)throw new I(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(e.map(i=>i.shape))}`);if(r.length>0&&s.length>0&&!It(r,s))throw new I(`Input Tensors should have the same number of samples as target Tensors. Found ${r[0]} input sample(s) and ${s[0]} target sample(s).`)}function Jz(t,e,n){const r=[ql,Yl,wo];for(let s=0;s<t.length;++s){const i=t[s],o=e[s],a=n[s];if(o!=null){if(o===wo&&i.shape[i.shape.length-1]===1)throw new I(`You are passing a target array of shape ${i.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(r.indexOf(o)!==-1){const l=i.shape.slice(1),u=a.slice(1);for(let c=0;c<l.length;++c){const h=l[c],f=u[c];if(f!=null&&h!==f)throw new I(`A target Tensor with shape ${i.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function wm(t,e,n,r=!0,s=""){let i;if(Array.isArray(t)){if(t.length!==e.length)throw new I(`Error when checking model ${s}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${e.length} Tensor(s), but instead got ${t.length} Tensors(s).`);i=t}else{if(e.length>1)throw new I(`The model expects ${e.length} ${s} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(t.shape)}.`);i=[t]}if(n!=null)for(let o=0;o<e.length;++o){if(n[o]==null)continue;const a=i[o];if(a.shape.length!==n[o].length)throw new I(`Error when checking ${s}: expected ${e[o]} to have ${n[o].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<n[o].length;++l){if(l===0&&!r)continue;const u=a.shape[l],c=n[o][l];if(c!=null&&c!==u)throw new I(`Error when checking ${s}: expected ${e[o]} to have shape ${JSON.stringify(n[o])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function Zz(t,e){if(t==null||Array.isArray(t)&&t.length===0)return e.map(r=>[]);let n;if(typeof t=="string"||typeof t=="function")n=[t];else if(Array.isArray(t)||typeof t=="object")n=t;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${t}`);if(Array.isArray(n))return e.map(r=>n);{const r=[];for(const s of e){let i=n.hasOwnProperty(s)?n[s]:[];Array.isArray(i)||(i=[i]),r.push(i)}return r}}const Qz="layers-model";class ns extends hn{constructor(e){super(e),this.isTraining=!1}summary(e,n,r=console.log){if(!this.built)throw new I("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");_z(this,e,n,r)}compile(e){if(e.loss==null&&(e.loss=[]),this.loss=e.loss,typeof e.optimizer=="string")this.optimizer_=Mz(e.optimizer),this.isOptimizerOwned=!0;else{if(!(e.optimizer instanceof Br))throw new I("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=e.optimizer,this.isOptimizerOwned=!1}let n=[];if(!Array.isArray(e.loss)&&typeof e.loss!="string"&&typeof e.loss!="function"){e.loss=e.loss;for(const o in e.loss)if(this.outputNames.indexOf(o)===-1)throw new I(`Unknown entry in loss dictionary: "${o}". Only expected the following keys: ${this.outputNames}`);for(const o of this.outputNames)e.loss[o]==null&&console.warn(`Output "${o}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${o} during training`),n.push(Ru(e.loss[o]))}else if(Array.isArray(e.loss)){if(e.loss.length!==this.outputs.length)throw new I(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${e.loss}.`);n=e.loss.map(a=>Ru(a))}else{const o=Ru(e.loss);this.outputs.forEach(a=>{n.push(o)})}this.lossFunctions=n,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let o=0;o<this.outputs.length;++o){const a=this.internalOutputShapes[o],l=this.outputNames[o];this.feedOutputNames.push(l),this.feedOutputShapes.push(a),this.feedLossFns.push(this.lossFunctions[o])}const r=[];this.metrics=e.metrics,this.metricsNames=["loss"],this.metricsTensors=[],es("loss",()=>{for(let o=0;o<this.outputs.length;++o){if(r.indexOf(o)!==-1)continue;const a=this.lossFunctions[o];this.outputs.length>1&&(this.metricsTensors.push([a,o]),this.metricsNames.push(this.outputNames[o]+"_loss"))}});const s=Zz(e.metrics,this.outputNames),i=(o,a,l)=>{this.outputNames.length>1&&(a=this.outputNames[o]+"_"+a),this.metricsNames.push(a),this.metricsTensors.push([l,o])};es("metric",()=>{for(let o=0;o<this.outputs.length;++o){if(r.indexOf(o)!==-1)continue;const a=s[o];(u=>{const c="";let h,f,d;for(const p of u){if(typeof p=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(p)!==-1){const w=this.internalOutputShapes[o];w[w.length-1]===1||this.lossFunctions[o]===Yl?["accuracy","acc"].indexOf(p)!==-1?f=Tw:["crossentropy","ce"].indexOf(p)!==-1&&(f=Sz):this.lossFunctions[o]===dl?["accuracy","acc"].indexOf(p)!==-1?f=Ez:["crossentropy","ce"].indexOf(p)!==-1&&(f=Dw):["accuracy","acc"].indexOf(p)!==-1?f=Cw:["crossentropy","ce"].indexOf(p)!==-1&&(f=Aw);let g;["accuracy","acc"].indexOf(p)!==-1?g="acc":["crossentropy","ce"].indexOf(p)!==-1&&(g="ce"),d=f,h=c+g}else d=zz(p),h=c+ua(p);let y;es(h,()=>{y=d}),i(o,h,y)}})(a)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(e,n,r={}){const s=r.batchSize==null?32:r.batchSize;th(s);const i=!0,o=this.standardizeUserDataXY(e,n,i,s);try{const a=o[0].concat(o[1]);this.makeTestFunction();const l=this.testFunction,u=this.testLoop(l,a,s,r.verbose,r.steps);return xt(u)}finally{yn(o[0],e),yn(o[1],n)}}async evaluateDataset(e,n){return this.makeTestFunction(),Hz(this,e,n)}checkNumSamples(e,n,r,s="steps"){let i;if(r!=null){if(i=null,n!=null)throw new I(`If ${s} is set, batchSize must be null or undefined.Got batchSize = ${n}`)}else if(e!=null)Array.isArray(e)?i=e[0].shape[0]:i=e.shape[0];else throw new I(`Either the input data should have a defined shape, or ${s} shoud be specified.`);return i}execute(e,n){if(Array.isArray(n)&&n.length===0)throw new I("`outputs` is an empty Array, which is not allowed.");const r=Array.isArray(n),s=r?n:[n],i=this.retrieveSymbolicTensors(s),o=new gr;if(e instanceof Te&&(e=[e]),Array.isArray(e)){if(e.length!==this.inputs.length)throw new I(`The number of inputs provided (${e.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let l=0;l<this.inputs.length;++l)o.add(this.inputs[l],e[l])}else for(const l of this.inputs){const u=e[l.name];if(u==null)throw new I(`No value is provided for the model's input ${l.name}`);o.add(l,u)}const a=Oi(i,o);return r?a:a[0]}retrieveSymbolicTensors(e){const n=hs(null,e.length);let r=e.length;for(const s of this.layers){const i=Array.isArray(s.output)?s.output:[s.output],o=i.map(a=>a.name);for(let a=0;a<e.length;++a){const l=o.indexOf(e[a]);if(l!==-1&&(n[a]=i[l],r--),r===0)break}if(r===0)break}if(r>0){const s=[];throw n.forEach((i,o)=>{i==null&&s.push(e[o])}),new I(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(s)}`)}return n}predictLoop(e,n=32,r=!1){return A(()=>{const s=this.checkNumSamples(e);if(r)throw new ne("Verbose predictLoop() is not implemented yet.");const i=nh(s,n),o=this.outputs.map(a=>[]);for(let a=0;a<i.length;++a)A(()=>{const u=i[a][0],c=i[a][1],h=Pi(e,u,c),f=[];if(Array.isArray(h))for(let p=0;p<h.length;++p)f.push({key:this.inputs[p],value:h[p]});else f.push({key:this.inputs[0],value:h});const d=new gr(f);return Oi(this.outputs,d)}).forEach((u,c)=>o[c].push(u));return xt(o.map(a=>bn(a,0)))})}predict(e,n={}){const r=Lw(e);wm(r,this.inputNames,this.feedInputShapes,!1);try{const s=n.batchSize==null?32:n.batchSize;return th(s),this.predictLoop(r,s)}finally{yn(r,e)}}predictOnBatch(e){wm(e,this.inputNames,this.feedInputShapes,!0);const n=(Array.isArray(e)?e[0]:e).shape[0];return this.predictLoop(e,n)}standardizeUserDataXY(e,n,r=!0,s){if(this.optimizer_==null)throw new nn("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const i=[];for(let o=0;o<this.feedOutputShapes.length;++o){const a=this.feedOutputShapes[o];this.feedLossFns[o]===dl?i.push(a.slice(0,a.length-1).concat([1])):i.push(a)}if(e=vm(e,this.feedInputNames,this.feedInputShapes,!1,"input"),n=vm(n,this.feedOutputNames,i,!1,"target"),Xz(e,n),Jz(n,this.feedLossFns,this.feedOutputShapes),this.stateful&&s!=null&&s>0&&e[0].shape[0]%s!==0)throw new I(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${s}. Found: ${e[0].shape[0]} sample(s).`);return[e,n]}async standardizeUserData(e,n,r,s,i=!0,o){const[a,l]=this.standardizeUserDataXY(e,n,i,o);if(r!=null)throw new Error("sample weight is not supported yet.");let u=null;if(s!=null){const c=Mw(s,this.outputNames);u=[];for(let h=0;h<c.length;++h)u.push(await _w(l[h],null,c[h]))}return[a,l,u]}testLoop(e,n,r,s=0,i){return A(()=>{const o=this.checkNumSamples(n,r,i,"steps"),a=[];if(s>0)throw new ne("Verbose mode is not implemented yet.");if(i!=null)throw new ne("steps mode in testLoop() is not implemented yet");{const l=nh(o,r),u=ct(In(0,o));for(let c=0;c<l.length;++c){const h=l[c][0],f=l[c][1],d=ts(u,h,f-h),p=td(n,d),y=e(p);if(c===0)for(let w=0;w<y.length;++w)a.push(ge(0));for(let w=0;w<y.length;++w){const g=y[w];a[w]=P(a[w],T(f-h,g))}}for(let c=0;c<a.length;++c)a[c]=J(a[c],o)}return a})}getDedupedMetricsNames(){const e=this.metricsNames,n=[];for(let r=0;r<e.length;++r){const s=e[r];let i=s;if(Jp(e,s)>1){const o=Jp(e.slice(0,r),s);i+=`_${o}`}n.push(i)}return n}makeTrainFunction(){return e=>{const n=[],r=e.slice(0,this.inputs.length),s=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=e.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),o=[],a=()=>{const h=[];for(let y=0;y<this.inputs.length;++y)h.push({key:this.inputs[y],value:r[y]});const f=new gr(h),d=Oi(this.outputs,f,{training:!0});let p;for(let y=0;y<this.lossFunctions.length;++y){const w=this.lossFunctions[y];let g=w(s[y],d[y]);i[y]!=null&&(g=Bz(g,i[y]));const m=Ge(g);n.push(m),y===0?p=g:p=P(p,g)}for(let y=0;y<this.metricsTensors.length;++y){let w;if(this.outputs.length>1&&y<this.outputs.length)w=n[y];else{const g=this.metricsTensors[y][0],m=this.metricsTensors[y][1];w=Ge(g(s[m],d[m]))}Gn(w),o.push(w)}return p=Ge(p),this.calculateLosses().forEach(y=>{p=P(p,y)}),p},l=this.collectedTrainableWeights.map(h=>h.read()),u=!0;return[this.optimizer_.minimize(a,u,l)].concat(o)}}makeTestFunction(){this.testFunction=e=>A(()=>{const n=[];let r;const s=e.slice(0,this.inputs.length),i=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),o=[];for(let u=0;u<this.inputs.length;++u)o.push({key:this.inputs[u],value:s[u]});const a=new gr(o),l=Oi(this.outputs,a);for(let u=0;u<this.lossFunctions.length;++u){const c=this.lossFunctions[u],h=Ge(c(i[u],l[u]));u===0?r=h:r=P(r,h),n.push(r)}for(let u=0;u<this.metricsTensors.length;++u){const c=this.metricsTensors[u][0],h=this.metricsTensors[u][1],f=Ge(c(i[h],l[h]));n.push(f)}return n})}async fit(e,n,r={}){return qz(this,e,n,r)}async fitDataset(e,n){return jz(this,e,n)}async trainOnBatch(e,n){const r=await this.standardizeUserData(e,n),s=r[0],i=r[1],a=this.makeTrainFunction()(s.concat(i)),l=[];for(const u of a){const c=await u.data();l.push(c[0])}return ee(a),yn(r[0],e),yn(r[1],n),xt(l)}getNamedWeights(e){const n=[],r=e!=null&&e.trainableOnly,s=r?this.trainableWeights:this.weights,i=this.getWeights(r);for(let o=0;o<s.length;++o)r&&!s[o].trainable||n.push({name:s[o].originalName,tensor:i[o]});return n}set stopTraining(e){this.stopTraining_=e}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(e){this.optimizer_!==e&&(this.optimizer_=e,this.isOptimizerOwned=!1)}dispose(){const e=super.dispose();if(e.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){const n=Vc().numTensors;this.optimizer_.dispose(),e.numDisposedVariables+=n-Vc().numTensors}return e}getLossIdentifiers(){let e;if(typeof this.loss=="string")e=Yn(this.loss);else if(Array.isArray(this.loss)){for(const n of this.loss)if(typeof n!="string")throw new Error("Serialization of non-string loss is not supported.");e=this.loss.map(n=>Yn(n))}else{const n=Object.keys(this.loss);e={};const r=this.loss;for(const s of n)if(typeof r[s]=="string")e[s]=Yn(r[s]);else throw new Error("Serialization of non-string loss is not supported.")}return e}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[Yn(ua(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(e=>Yn(ua(e)));{const e={};for(const n in this.metrics)e[n]=Yn(ua(this.metrics[n]));return e}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(e){if(e.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(e.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(e.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");const n=yl(e.optimizer_config),r=Vn(n);let s;if(typeof e.loss=="string")s=Hr(e.loss);else if(Array.isArray(e.loss))s=e.loss.map(o=>Hr(o));else if(e.loss!=null){s={};for(const o in e.loss)s[o]=Hr(e.loss[o])}let i;if(Array.isArray(e.metrics))i=e.metrics.map(o=>Hr(o));else if(e.metrics!=null){i={};for(const o in e.metrics)i[o]=Hr(e.metrics[o])}this.compile({loss:s,metrics:i,optimizer:r})}async save(e,n){if(typeof e=="string"){const u=sE(e);if(u.length===0)throw new I(`Cannot find any save handlers for URL '${e}'`);if(u.length>1)throw new I(`Found more than one (${u.length}) save handlers for URL '${e}'`);e=u[0]}if(e.save==null)throw new I("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const r=await Op(this.getNamedWeights(n)),s=!1,i=null,a={modelTopology:this.toJSON(i,s),format:Qz,generatedBy:`TensorFlow.js tfjs-layers v${zw}`,convertedBy:null};if((n==null?!1:n.includeOptimizer)&&this.optimizer!=null){a.trainingConfig=this.getTrainingConfig();const u="optimizer",{data:c,specs:h}=await Op(await this.optimizer.getWeights(),u);r.specs.push(...h),r.data=gv([r.data,c])}return this.userDefinedMetadata!=null&&(pm(this.userDefinedMetadata,this.name,!0),a.userDefinedMetadata=this.userDefinedMetadata),a.weightData=r.data,a.weightSpecs=r.specs,e.save(a)}setUserDefinedMetadata(e){pm(e,this.name),this.userDefinedMetadata=e}getUserDefinedMetadata(){return this.userDefinedMetadata}}ns.className="Model";R(ns);class Rw extends ns{}Rw.className="Functional";R(Rw);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */async function e3(t,e){if(e==null&&(e={}),typeof t=="string"){const n=iE(t,e);if(n.length===0)n.push(CE(t,e));else if(n.length>1)throw new I(`Found more than one (${n.length}) load handlers for URL '${t}'`);t=n[0]}return t3(t,void 0,e)}async function t3(t,e,n){if(n==null&&(n={}),t.load==null)throw new I("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const r=await t.load();let s=r.modelTopology;s.model_config!=null&&(s=s.model_config);const i=n.strict==null?!0:n.strict,o=r.weightData!=null&&r.weightSpecs!=null&&i,a=Vn(yl(s),e,o),l=r.trainingConfig;if(l!=null&&a.loadTrainingConfig(l),r.userDefinedMetadata!=null&&a.setUserDefinedMetadata(r.userDefinedMetadata),r.weightData!=null){if(r.weightSpecs==null)throw new I("LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.");const{modelWeights:u,optimizerWeights:c}=n3(r.weightData,r.weightSpecs);a.loadWeights(u,i),a.optimizer!=null&&c.length>0&&await a.optimizer.setWeights(c),ee(u),ee(c.map(h=>h.tensor))}return a}function n3(t,e){const n=H2(t,e),r={},s=[];return e.forEach(i=>{i.group==="optimizer"?s.push({name:i.name,tensor:n[i.name]}):r[i.name]=n[i.name]}),{modelWeights:r,optimizerWeights:s}}class hi extends ns{constructor(e){if(super({inputs:[],outputs:[]}),e=e||{},this.trainable=!0,this.built=!1,this.name=e.name!=null?e.name:Gl("sequential_"),e.layers!=null)for(const n of e.layers)this.add(n)}checkShape(e){if(e.inboundNodes[0].outputTensors[0].shape.some(r=>r<0))throw new I(`Negative dimension size caused by adding layer ${e.name} with input shape [${e.inboundNodes[0].inputTensors[0].shape}]`)}add(e){const n=e instanceof hi||e instanceof ns;let r;if(n){if(r=e,r.outputs.length!==1)throw new I("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(r.inputs.length!==1)throw new I("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(e.inboundNodes.length===0){if(e.batchInputShape==null)throw new I("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const s=XA({batchShape:e.batchInputShape,dtype:e.dtype,name:e.name+"_input"});e.apply(s)}if(n)this.outputs=r.outputs,this.inputs=r.inputs;else{if(e.inboundNodes.length!==1)throw new I(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${e.name} which has ${e.inboundNodes.length} pre-existing inbound connections.`);if(e.inboundNodes[0].outputTensors.length!==1)throw new I("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(e),this.outputs=[e.inboundNodes[0].outputTensors[0]],this.inputs=gw(this.outputs[0])}this.inboundNodes=[],new Kl({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:hs(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(s=>s.shape),outputShapes:this.outputs[0].shape})}else{const s=e.apply(this.outputs[0]);if(Array.isArray(s))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(e),this.outputs=[s],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(e),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const e=this.layers.length-1;this.layers[e].outboundNodes=[],this.outputs=[this.layers[e].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(e,n){return this.model==null&&this.build(),this.model.call(e,n)}build(e){if(ye(e),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new ns({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(e,n,r=console.log){this.built||this.build(),super.summary(e,n,r)}setWeights(e){this.model==null&&this.build(),this.model.setWeights(e)}evaluate(e,n,r={}){if(!this.built)throw new nn("The model needs to be compiled before being used.");return this.model.evaluate(e,n,r)}async evaluateDataset(e,n){if(!this.built)throw new nn("The model needs to be compiled before being used.");return this.model.evaluateDataset(e,n)}predict(e,n={}){return this.model==null&&this.build(),this.model.predict(e,n)}predictOnBatch(e){return this.model==null&&this.build(),this.model.predictOnBatch(e)}compile(e){this.build(),this.model.compile(e),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(e){this.model.optimizer=e}async fit(e,n,r={}){if(!this.built)throw new nn("The model needs to be compiled before being used.");return this.model.fit(e,n,r)}async fitDataset(e,n){if(!this.built)throw new nn("The model needs to be compiled before being used.");return this.model.fitDataset(e,n)}async trainOnBatch(e,n){return this.model.trainOnBatch(e,n)}static fromConfig(e,n,r={},s=!1){let i,o={};if(n instanceof Array){if(n[0].className==null||n[0].className==="Merge")throw new I("Legacy serialization format not supported yet.");i=n}else b(n.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),i=n.layers,delete n.layers,o=n;const a=new e(o);if(!(a instanceof hi))throw new ne(`Sequential.fromConfig called on non-Sequential input: ${a}`);for(const l of i){const c=Vn(l,void 0,s);s&&c.setFastWeightInitDuringBuild(!0),a.add(c)}return a}set stopTraining(e){if(this.model==null)throw new I("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=e}get stopTraining(){if(this.model==null)throw new I("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const e=[];for(const n of this.layers){const r={};r.className=n.getClassName(),r.config=n.getConfig(),e.push(r)}return{name:this.name,layers:e}}}hi.className="Sequential";R(hi);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ow(t){return new ns(t)}function r3(t){return new hi(t)}function sh(t,e){return e==null&&(e={}),e3(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */let At=class extends yi{getConfig(){return{}}};class Pw extends At{apply(e,n=1){return LA(e,n)}}Pw.className="elu";R(Pw);class Bw extends At{apply(e){return xT(e)}}Bw.className="selu";R(Bw);class Uw extends At{apply(e){return wi(e)}}Uw.className="relu";R(Uw);class Ww extends At{apply(e){return A(()=>_v(6,wi(e)))}}Ww.className="relu6";R(Ww);class jw extends At{apply(e){return e}}jw.className="linear";R(jw);class Vw extends At{apply(e){return Ol(e)}}Vw.className="sigmoid";R(Vw);class Gw extends At{apply(e){return OA(e)}}Gw.className="hardSigmoid";R(Gw);class Hw extends At{apply(e){return xf(e)}}Hw.className="softplus";R(Hw);class Kw extends At{apply(e){return RA(e)}}Kw.className="softsign";R(Kw);class qw extends At{apply(e){return Iv(e)}}qw.className="tanh";R(qw);let nd=class extends At{apply(e,n=-1){return Bv(e,n)}};nd.className="softmax";R(nd);class Yw extends At{apply(e,n=-1){return AN(e,n)}}Yw.className="logSoftmax";R(Yw);class Xw extends At{apply(e,n=1){return A(()=>T(Ol(T(e,n)),e))}}Xw.className="swish";R(Xw);class Jw extends At{apply(e){return A(()=>T(e,Iv(xf(e))))}}Jw.className="mish";R(Jw);function _r(t){return t.getClassName()}function Ou(t,e={}){return $o(t,Qt.getMap().classNameMap,e,"activation")}function Fr(t){if(t==null){const e={};return e.className="linear",e.config={},Ou(e)}if(typeof t=="string"){const e={};return e.className=t,e.config={},Ou(e)}else return t instanceof At?t:Ou(t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function s3(t){if(t!=null&&typeof t!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${t}`)}class Zw extends yi{}class Qw extends Zw{constructor(e){super(),s3(e),this.l1=e==null||e.l1==null?.01:e.l1,this.l2=e==null||e.l2==null?.01:e.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(e){return A(()=>{let n=rt([1]);return this.hasL1&&(n=P(n,Y(T(this.l1,bt(e))))),this.hasL2&&(n=P(n,Y(T(this.l2,_o(e))))),M(n,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(e,n){return new e({l1:n.l1,l2:n.l2})}}Qw.className="L1L2";R(Qw);const bm={l1l2:"L1L2"};function we(t){return Uf(t)}function km(t,e={}){return $o(t,Qt.getMap().classNameMap,e,"regularizer")}function $e(t){if(t==null)return null;if(typeof t=="string"){const n={className:t in bm?bm[t]:t,config:{}};return km(n)}else return t instanceof Zw?t:km(t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class e1 extends ue{constructor(e){super(e??{}),this.supportsMasking=!0,e!=null&&(this.maxValue=e.maxValue)}call(e,n){e=re(e);let r=wi(e);return this.maxValue!=null&&(r=an(r,0,this.maxValue)),r}computeOutputShape(e){return e}getConfig(){const e={maxValue:this.maxValue},n=super.getConfig();return Object.assign(e,n),e}}e1.className="ReLU";R(e1);class t1 extends ue{constructor(e){super(e??{}),this.DEFAULT_ALPHA=.3,e==null&&(e={}),this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,n){const r=re(e);return Mv(r,this.alpha)}computeOutputShape(e){return e}getConfig(){const e={alpha:this.alpha},n=super.getConfig();return Object.assign(e,n),e}}t1.className="LeakyReLU";R(t1);class n1 extends ue{constructor(e){if(super(e??{}),this.DEFAULT_ALPHA_INITIALIZER="zeros",e==null&&(e={}),this.supportsMasking=!0,this.alphaInitializer=De(e.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=$e(e.alphaRegularizer),this.alphaConstraint=Xe(e.alphaConstraint),e.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(e.sharedAxes))this.sharedAxes=e.sharedAxes;else if(typeof e.sharedAxes=="number")this.sharedAxes=[e.sharedAxes];else throw new I(`Expected sharedAxes to be a number or an array of numbers, but got ${e.sharedAxes}`)}build(e){e=ye(e);const n=e.slice(1);if(this.sharedAxes!=null)for(const s of this.sharedAxes)n[s-1]=1;this.alpha=this.addWeight("alpha",n,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const r={};if(this.sharedAxes!=null)for(let s=1;s<e.length;++s)r[s]=e[s];this.inputSpec=[new qe({ndim:e.length,axes:r})],this.built=!0}call(e,n){return e=re(e),Lv(e,this.alpha.read())}getConfig(){const e={alphaInitializer:Le(this.alphaInitializer),alphaRegularizer:we(this.alphaRegularizer),alphaConstraint:Ye(this.alphaConstraint),sharedAxes:this.sharedAxes},n=super.getConfig();return Object.assign(e,n),e}}n1.className="PReLU";R(n1);class r1 extends ue{constructor(e){if(super(e??{}),this.DEFAULT_ALPHA=1,e==null&&(e={}),e.alpha!=null&&e.alpha!==this.DEFAULT_ALPHA)throw new ne(`Non-default alpha value (${e.alpha}) is not supported by the ELU layer yet.`);this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,n){const r=re(e);return wf(r)}computeOutputShape(e){return e}getConfig(){const e={alpha:this.alpha},n=super.getConfig();return Object.assign(e,n),e}}r1.className="ELU";R(r1);class s1 extends ue{constructor(e){super(e??{}),this.DEFAULT_THETA=1,e==null&&(e={}),this.theta=e.theta==null?this.DEFAULT_THETA:e.theta}call(e,n){const r=re(e);return T(r,H(Tn(r,this.theta),"float32"))}computeOutputShape(e){return e}getConfig(){const e={theta:this.theta},n=super.getConfig();return Object.assign(e,n),e}}s1.className="ThresholdedReLU";R(s1);class i1 extends ue{constructor(e){super(e??{}),this.DEFAULT_AXIS=1,e==null&&(e={}),this.softmax=new nd().apply,this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis}call(e,n){const r=re(e);return this.softmax(r,this.axis)}computeOutputShape(e){return e}getConfig(){const e={axis:this.axis},n=super.getConfig();return Object.assign(e,n),e}}i1.className="Softmax";R(i1);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ks(t,e,n){if(typeof t=="number")return hs(t,e);if(t.length!==e)throw new I(`The ${n} argument must be an integer or tuple of ${e} integers. Received: ${t.length} elements.`);for(let r=0;r<e;++r){const s=t[r];if(!zA(s))throw new I(`The ${n} argument must be an integer or tuple of ${e} integers. Received: ${JSON.stringify(t)} including a non-integer number ${s}`)}return t}function kn(t,e,n,r,s=1){if(t==null)return t;const i=e+(e-1)*(s-1);let o;return n==="same"?o=t:o=t-i+1,Math.floor((o+r-1)/r)}function Ln(t,e,n,r){if(t==null)return null;if(r==="valid")t=t*e+Mr([n-e,0]);else if(r==="same")t=t*e;else throw new I(`Unsupport padding mode: ${r}.`);return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function rd(t,e){return A(()=>(je(e),e==="channelsFirst"?ce(t,[0,2,3,1]):t))}function o1(t,e){return A(()=>(je(e),e==="channelsFirst"?ce(t,[0,2,3,4,1]):t))}function i3(t,e,n,r=1,s="valid",i,o=1){return A(()=>{if(i==null&&(i=Nn()),je(i),t.shape.length!==3)throw new I(`The input of a conv1dWithBias operation should be 3, but is ${t.shape.length} instead.`);if(e.shape.length!==3)throw new I(`The kernel for a conv1dWithBias operation should be 3, but is ${e.shape.length} instead`);if(n!=null&&n.shape.length!==1)throw new I(`The bias for a conv1dWithBias operation should be 1, but is ${e.shape.length} instead`);if(i==="channelsFirst"&&(t=ce(t,[0,2,1])),s==="causal")throw new ne("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=_I(t,e,r,s==="same"?"same":"valid","NWC",o);return n!=null&&(a=Cn(a,n)),a})}function xm(t,e,n,r=[1,1],s="valid",i,o,a=null){return A(()=>{if(i==null&&(i=Nn()),je(i),t.rank!==3&&t.rank!==4)throw new I(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${t.rank}.`);if(e.rank!==3&&e.rank!==4)throw new I(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${t.rank}.`);let l=rd(t,i);if(s==="causal")throw new ne("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=YT({x:l,filter:e,strides:r,pad:s==="same"?"same":"valid",dilations:o,dataFormat:"NHWC",bias:n,activation:a}),i==="channelsFirst"&&(l=ce(l,[0,3,1,2])),l})}function o3(t,e,n,r=[1,1,1],s="valid",i,o){return A(()=>{if(i==null&&(i=Nn()),je(i),t.rank!==4&&t.rank!==5)throw new I(`conv3dWithBias expects input to be of rank 4 or 5, but received ${t.rank}.`);if(e.rank!==4&&e.rank!==5)throw new I(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${t.rank}.`);let a=o1(t,i);if(s==="causal")throw new ne("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=PI(a,e,r,s==="same"?"same":"valid","NDHWC",o),n!=null&&(a=Cn(a,n)),i==="channelsFirst"&&(a=ce(a,[0,4,1,2,3])),a})}class Xl extends ue{constructor(e,n){if(super(n),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",Xl.verifyArgs(n),this.rank=e,et(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new ne(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=Ks(n.kernelSize,e,"kernelSize"),this.strides=Ks(n.strides==null?1:n.strides,e,"strides"),this.padding=n.padding==null?"valid":n.padding,Ht(this.padding),this.dataFormat=n.dataFormat==null?"channelsLast":n.dataFormat,je(this.dataFormat),this.activation=Fr(n.activation),this.useBias=n.useBias==null?!0:n.useBias,this.biasInitializer=De(n.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=Xe(n.biasConstraint),this.biasRegularizer=$e(n.biasRegularizer),this.activityRegularizer=$e(n.activityRegularizer),this.dilationRate=Ks(n.dilationRate==null?1:n.dilationRate,e,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new I(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new I(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new I(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(e){if(Fn("kernelSize"in e,"required key 'kernelSize' not in config"),typeof e.kernelSize!="number"&&!Wf(e.kernelSize,"number",1,3))throw new I(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(e.kernelSize)}.`)}getConfig(){const e={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:_r(this.activation),useBias:this.useBias,biasInitializer:Le(this.biasInitializer),biasRegularizer:we(this.biasRegularizer),activityRegularizer:we(this.activityRegularizer),biasConstraint:Ye(this.biasConstraint)},n=super.getConfig();return Object.assign(e,n),e}}class ki extends Xl{constructor(e,n){super(e,n),this.kernel=null,ki.verifyArgs(n),this.filters=n.filters,et(this.filters,"filters"),this.kernelInitializer=De(n.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=Xe(n.kernelConstraint),this.kernelRegularizer=$e(n.kernelRegularizer)}build(e){e=ye(e);const n=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[n]==null)throw new I(`The channel dimension of the input should be defined. Found ${e[n]}`);const r=e[n],s=this.kernelSize.concat([r,this.filters]);this.kernel=this.addWeight("kernel",s,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[n]:r}}],this.built=!0}call(e,n){return A(()=>{e=re(e);let r;const s=this.bias==null?null:this.bias.read(),i=tw(this.activation.getClassName());if(i!=null&&this.rank===2)r=xm(e,this.kernel.read(),s,this.strides,this.padding,this.dataFormat,this.dilationRate,i);else{if(this.rank===1)r=i3(e,this.kernel.read(),s,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)r=xm(e,this.kernel.read(),s,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)r=o3(e,this.kernel.read(),s,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new ne("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(r=this.activation.apply(r))}return r})}computeOutputShape(e){e=ye(e);const n=[],r=this.dataFormat==="channelsLast"?e.slice(1,e.length-1):e.slice(2);for(let i=0;i<r.length;++i){const o=kn(r[i],this.kernelSize[i],this.padding,this.strides[i],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[i]);n.push(o)}let s=[e[0]];return this.dataFormat==="channelsLast"?(s=s.concat(n),s.push(this.filters)):(s.push(this.filters),s=s.concat(n)),s}getConfig(){const e={filters:this.filters,kernelInitializer:Le(this.kernelInitializer),kernelRegularizer:we(this.kernelRegularizer),kernelConstraint:Ye(this.kernelConstraint)},n=super.getConfig();return Object.assign(e,n),e}static verifyArgs(e){if(!("filters"in e)||typeof e.filters!="number"||e.filters<1)throw new I(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(e.filters)}`)}}class Oo extends ki{constructor(e){super(2,e),Oo.verifyArgs(e)}getConfig(){const e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!="number"&&!Wf(e.kernelSize,"number",1,2))throw new I(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(e.kernelSize)}.`)}}Oo.className="Conv2D";R(Oo);class Po extends ki{constructor(e){super(3,e),Po.verifyArgs(e)}getConfig(){const e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!="number"&&!(Array.isArray(e.kernelSize)&&(e.kernelSize.length===1||e.kernelSize.length===3)))throw new I(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(e.kernelSize)}.`)}}Po.className="Conv3D";R(Po);class a1 extends Oo{constructor(e){if(super(e),this.inputSpec=[new qe({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new I(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=ye(e),e.length!==4)throw new I("Input should have rank 4; Received input shape: "+JSON.stringify(e));const n=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[n]==null)throw new I("The channel dimension of the inputs should be defined. Found `None`.");const r=e[n],s=this.kernelSize.concat([this.filters,r]);this.kernel=this.addWeight("kernel",s,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new qe({ndim:4,axes:{[n]:r}})],this.built=!0}call(e,n){return A(()=>{let r=re(e);if(r.shape.length!==4)throw new I(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${r.shape.length}`);const s=r.shape,i=s[0];let o,a;this.dataFormat==="channelsFirst"?(o=2,a=3):(o=1,a=2);const l=s[o],u=s[a],c=this.kernelSize[0],h=this.kernelSize[1],f=this.strides[0],d=this.strides[1],p=Ln(l,f,c,this.padding),y=Ln(u,d,h,this.padding),w=[i,p,y,this.filters];this.dataFormat!=="channelsLast"&&(r=ce(r,[0,2,3,1]));let g=RI(r,this.kernel.read(),w,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(g=ce(g,[0,3,1,2])),this.bias!=null&&(g=Cn(g,this.bias.read(),this.dataFormat)),this.activation!=null&&(g=this.activation.apply(g)),g})}computeOutputShape(e){e=ye(e);const n=e.slice();let r,s,i;this.dataFormat==="channelsFirst"?(r=1,s=2,i=3):(r=3,s=1,i=2);const o=this.kernelSize[0],a=this.kernelSize[1],l=this.strides[0],u=this.strides[1];return n[r]=this.filters,n[s]=Ln(n[s],l,o,this.padding),n[i]=Ln(n[i],u,a,this.padding),n}getConfig(){const e=super.getConfig();return delete e.dilationRate,e}}a1.className="Conv2DTranspose";R(a1);class l1 extends Po{constructor(e){if(super(e),this.inputSpec=[new qe({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new I(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=ye(e),e.length!==5)throw new I("Input should have rank 5; Received input shape: "+JSON.stringify(e));const n=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[n]==null)throw new I("The channel dimension of the inputs should be defined. Found `None`.");const r=e[n],s=this.kernelSize.concat([this.filters,r]);this.kernel=this.addWeight("kernel",s,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new qe({ndim:5,axes:{[n]:r}})],this.built=!0}call(e,n){return A(()=>{let r=re(e);if(r.shape.length!==5)throw new I(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${r.shape.length}`);const s=r.shape,i=s[0];let o,a,l;this.dataFormat==="channelsFirst"?(l=2,o=3,a=4):(l=1,o=2,a=3);const u=s[l],c=s[o],h=s[a],f=this.kernelSize[0],d=this.kernelSize[1],p=this.kernelSize[2],y=this.strides[0],w=this.strides[1],g=this.strides[2],m=Ln(u,y,f,this.padding),v=Ln(c,w,d,this.padding),k=Ln(h,g,p,this.padding),S=[i,m,v,k,this.filters];this.dataFormat!=="channelsLast"&&(r=ce(r,[0,2,3,4,1]));let C=WI(r,this.kernel.read(),S,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(C=ce(C,[0,4,1,2,3])),this.bias!==null&&(C=Cn(C,this.bias.read(),this.dataFormat)),this.activation!==null&&(C=this.activation.apply(C)),C})}computeOutputShape(e){e=ye(e);const n=e.slice();let r,s,i,o;this.dataFormat==="channelsFirst"?(r=1,s=2,i=3,o=4):(r=4,s=1,i=2,o=3);const a=this.kernelSize[0],l=this.kernelSize[1],u=this.kernelSize[2],c=this.strides[0],h=this.strides[1],f=this.strides[2];return n[r]=this.filters,n[s]=Ln(n[s],c,a,this.padding),n[i]=Ln(n[i],h,l,this.padding),n[o]=Ln(n[o],f,u,this.padding),n}getConfig(){const e=super.getConfig();return delete e.dilationRate,e}}l1.className="Conv3DTranspose";R(l1);class u1 extends ki{constructor(e,n){if(super(e,n),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,n.filters==null)throw new I("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(n.kernelInitializer!=null||n.kernelRegularizer!=null||n.kernelConstraint!=null)throw new I("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(n.padding!=null&&n.padding!=="same"&&n.padding!=="valid")throw new I(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(n.padding)}`);this.depthMultiplier=n.depthMultiplier==null?1:n.depthMultiplier,this.depthwiseInitializer=De(n.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=$e(n.depthwiseRegularizer),this.depthwiseConstraint=Xe(n.depthwiseConstraint),this.pointwiseInitializer=De(n.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=$e(n.pointwiseRegularizer),this.pointwiseConstraint=Xe(n.pointwiseConstraint)}build(e){if(e=ye(e),e.length<this.rank+2)throw new I(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(e)}`);const n=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[n]==null||e[n]<0)throw new I(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(e[n])}`);const r=e[n],s=this.kernelSize.concat([r,this.depthMultiplier]),i=[];for(let a=0;a<this.rank;++a)i.push(1);i.push(r*this.depthMultiplier,this.filters);const o=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",s,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,o,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",i,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,o,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,o,this.biasConstraint):this.bias=null,this.inputSpec=[new qe({ndim:this.rank+2,axes:{[n]:r}})],this.built=!0}call(e,n){return A(()=>{e=re(e);let r;if(this.rank===1)throw new ne("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(e=ce(e,[0,2,3,1])),r=ET(e,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(r=Cn(r,this.bias.read(),this.dataFormat)),this.activation!=null&&(r=this.activation.apply(r)),this.dataFormat==="channelsFirst"&&(r=ce(r,[0,3,1,2])),r})}getConfig(){const e=super.getConfig();return delete e.rank,delete e.kernelInitializer,delete e.kernelRegularizer,delete e.kernelConstraint,e.depthwiseInitializer=Le(this.depthwiseInitializer),e.pointwiseInitializer=Le(this.pointwiseInitializer),e.depthwiseRegularizer=we(this.depthwiseRegularizer),e.pointwiseRegularizer=we(this.pointwiseRegularizer),e.depthwiseConstraint=Ye(this.depthwiseConstraint),e.pointwiseConstraint=Ye(this.pointwiseConstraint),e}}u1.className="SeparableConv";class c1 extends u1{constructor(e){super(2,e)}}c1.className="SeparableConv2D";R(c1);class Jl extends ki{constructor(e){super(1,e),Jl.verifyArgs(e),this.inputSpec=[{ndim:3}]}getConfig(){const e=super.getConfig();return delete e.rank,delete e.dataFormat,e}static verifyArgs(e){if(typeof e.kernelSize!="number"&&!Wf(e.kernelSize,"number",1,1))throw new I(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(e.kernelSize)}.`)}}Jl.className="Conv1D";R(Jl);class h1 extends ue{constructor(e){super(e),typeof e.cropping=="number"?this.cropping=[[e.cropping,e.cropping],[e.cropping,e.cropping]]:typeof e.cropping[0]=="number"?this.cropping=[[e.cropping[0],e.cropping[0]],[e.cropping[1],e.cropping[1]]]:this.cropping=e.cropping,this.dataFormat=e.dataFormat===void 0?"channelsLast":e.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(e){return this.dataFormat==="channelsFirst"?[e[0],e[1],e[2]-this.cropping[0][0]-this.cropping[0][1],e[3]-this.cropping[1][0]-this.cropping[1][1]]:[e[0],e[1]-this.cropping[0][0]-this.cropping[0][1],e[2]-this.cropping[1][0]-this.cropping[1][1],e[3]]}call(e,n){return A(()=>{if(e=re(e),this.dataFormat==="channelsLast"){const r=la(e,this.cropping[0][0],e.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return la(r,this.cropping[1][0],e.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{const r=la(e,this.cropping[0][0],e.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return la(r,this.cropping[1][0],e.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const e={cropping:this.cropping,dataFormat:this.dataFormat},n=super.getConfig();return Object.assign(e,n),e}}h1.className="Cropping2D";R(h1);class f1 extends ue{constructor(e){super(e),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=e.size==null?this.DEFAULT_SIZE:e.size,this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,je(this.dataFormat),this.interpolation=e.interpolation==null?"nearest":e.interpolation,AA(this.interpolation)}computeOutputShape(e){if(this.dataFormat==="channelsFirst"){const n=e[2]==null?null:this.size[0]*e[2],r=e[3]==null?null:this.size[1]*e[3];return[e[0],e[1],n,r]}else{const n=e[1]==null?null:this.size[0]*e[1],r=e[2]==null?null:this.size[1]*e[2];return[e[0],n,r,e[3]]}}call(e,n){return A(()=>{let r=re(e);const s=r.shape;if(this.dataFormat==="channelsFirst"){r=ce(r,[0,2,3,1]);const i=this.size[0]*s[2],o=this.size[1]*s[3],a=this.interpolation==="nearest"?sa.resizeNearestNeighbor(r,[i,o]):sa.resizeBilinear(r,[i,o]);return ce(a,[0,3,1,2])}else{const i=this.size[0]*s[1],o=this.size[1]*s[2];return this.interpolation==="nearest"?sa.resizeNearestNeighbor(r,[i,o]):sa.resizeBilinear(r,[i,o])}})}getConfig(){const e={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},n=super.getConfig();return Object.assign(e,n),e}}f1.className="UpSampling2D";R(f1);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function a3(t,e,n=[1,1],r="valid",s,i){return A(()=>{s==null&&(s=Nn()),je(s);let o=rd(t,s);if(t.rank!==4)throw new I(`Input for depthwiseConv2d is required to be 4-D, but is instead ${t.rank}-D`);if(e.rank!==4)throw new I(`depthwiseKernel is required to be 4-D, but is instead ${e.rank}-D`);return o=Cv(o,e,n,r==="same"?"same":"valid","NHWC",i),s==="channelsFirst"&&(o=ce(o,[0,3,1,2])),o})}class d1 extends Xl{constructor(e){super(2,e),this.depthwiseKernel=null,this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=De(e.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=Xe(e.depthwiseConstraint),this.depthwiseRegularizer=$e(e.depthwiseRegularizer)}build(e){if(e=ye(e),e.length<4)throw new I(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(e)}.`);const n=this.dataFormat==="channelsFirst"?1:3;if(e[n]==null||e[n]<0)throw new I(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${e[n]}).`);const r=e[n],s=[this.kernelSize[0],this.kernelSize[1],r,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",s,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[r*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,n){return A(()=>{e=re(e);let r=a3(e,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(r=Cn(r,this.bias.read(),this.dataFormat)),this.activation!=null&&(r=this.activation.apply(r)),r})}computeOutputShape(e){e=ye(e);const n=this.dataFormat==="channelsFirst"?e[2]:e[1],r=this.dataFormat==="channelsFirst"?e[3]:e[2],s=this.dataFormat==="channelsFirst"?e[1]*this.depthMultiplier:e[3]*this.depthMultiplier,i=kn(n,this.kernelSize[0],this.padding,this.strides[0]),o=kn(r,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[e[0],s,i,o]:[e[0],i,o,s]}getConfig(){const e=super.getConfig();return e.depthMultiplier=this.depthMultiplier,e.depthwiseInitializer=Le(this.depthwiseInitializer),e.depthwiseRegularizer=we(this.depthwiseRegularizer),e.depthwiseConstraint=Ye(this.depthwiseRegularizer),e}}d1.className="DepthwiseConv2D";R(d1);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function p1(t,e,n,r){if(Array.isArray(t)){if(e!=null||n!=null)throw new I("When inputs is an array, neither initialState or constants should be provided");r!=null&&(n=t.slice(t.length-r,t.length),t=t.slice(0,t.length-r)),t.length>1&&(e=t.slice(1,t.length)),t=t[0]}function s(i){return i==null||Array.isArray(i)?i:[i]}return e=s(e),n=s(n),{inputs:t,initialState:e,constants:n}}function m1(t,e,n,r=!1,s,i,o=!1,a=!1){return A(()=>{const l=e.shape.length;if(l<3)throw new I(`Input should be at least 3D, but is ${l}D.`);const u=[1,0].concat(In(2,l));if(e=ce(e,u),i!=null)throw new ne("The rnn() functoin of the deeplearn.js backend does not support constants yet.");o&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),s!=null&&(s=H(H(s,"bool"),"float32"),s.rank===l-1&&(s=gn(s,-1)),s=ce(s,u)),r&&(e=il(e,0),s!=null&&(s=il(s,0)));const c=[];let h,f=n;const d=e.shape[0],p=li(e);let y;s!=null&&(y=li(s));for(let g=0;g<d;++g){const m=p[g],v=A(()=>t(m,f));if(s==null)h=v[0],f=v[1];else{const k=A(()=>{const S=y[g],C=te(En(S),S),z=P(T(v[0],S),T(f[0],C)),$=f.map((F,L)=>P(T(v[1][L],S),T(F,C)));return{output:z,newStates:$}});h=k.output,f=k.newStates}a&&c.push(h)}let w;return a&&(w=zr(c,1)),[h,w,f]})}class Ur extends ue{constructor(e){super(e);let n;if(e.cell==null)throw new I("cell property is missing for the constructor of RNN.");if(Array.isArray(e.cell)?n=new od({cells:e.cell}):n=e.cell,n.stateSize==null)throw new I("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=n,this.returnSequences=e.returnSequences==null?!1:e.returnSequences,this.returnState=e.returnState==null?!1:e.returnState,this.goBackwards=e.goBackwards==null?!1:e.goBackwards,this._stateful=e.stateful==null?!1:e.stateful,this.unroll=e.unroll==null?!1:e.unroll,this.supportsMasking=!0,this.inputSpec=[new qe({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){const e=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return In(0,e).map(n=>null)}else return this.states_}setStates(e){this.states_=e}computeOutputShape(e){Jc(e)&&(e=e[0]),e=e;let n=this.cell.stateSize;Array.isArray(n)||(n=[n]);const r=n[0];let s;if(this.returnSequences?s=[e[0],e[1],r]:s=[e[0],r],this.returnState){const i=[];for(const o of n)i.push([e[0],o]);return[s].concat(i)}else return s}computeMask(e,n){return A(()=>{Array.isArray(n)&&(n=n[0]);const r=this.returnSequences?n:null;if(this.returnState){const s=this.states.map(i=>null);return[r].concat(s)}else return r})}get states(){if(this.states_==null){const e=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,n=[];for(let r=0;r<e;++r)n.push(null);return n}else return this.states_}set states(e){this.states_=e}build(e){if(this.numConstants!=null)throw new ne("Constants support is not implemented in RNN yet.");Jc(e)&&(e=e[0]),e=e;const n=this.stateful?e[0]:null,r=e.slice(2);this.inputSpec[0]=new qe({shape:[n,null,...r]});const s=[e[0]].concat(e.slice(2));this.cell.build(s);let i;if(Array.isArray(this.cell.stateSize)?i=this.cell.stateSize:i=[this.cell.stateSize],this.stateSpec!=null){if(!It(this.stateSpec.map(o=>o.shape[o.shape.length-1]),i))throw new I(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=i.map(o=>new qe({shape:[null,o]}));this.stateful&&this.resetStates()}resetStates(e,n=!1){A(()=>{if(!this.stateful)throw new _n("Cannot call resetStates() on an RNN Layer that is not stateful.");const r=this.inputSpec[0].shape[0];if(r==null)throw new I("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(s=>rt([r,s])):this.states_=[rt([r,this.cell.stateSize])];else if(e==null)ee(this.states_),this.keptStates!=null&&(ee(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(s=>rt([r,s])):this.states_[0]=rt([r,this.cell.stateSize]);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new I(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);n===!0?this.keptStates.push(this.states_.slice()):ee(this.states_);for(let s=0;s<this.states_.length;++s){const i=e[s],o=Array.isArray(this.cell.stateSize)?this.cell.stateSize[s]:this.cell.stateSize,a=[r,o];if(!It(i.shape,a))throw new I(`State ${s} is incompatible with layer ${this.name}: expected shape=${a}, received shape=${i.shape}`);this.states_[s]=i}}this.states_=this.states_.map(s=>Gn(s.clone()))})}apply(e,n){let r=n==null?null:n.initialState,s=n==null?null:n.constants;n==null&&(n={});const i=p1(e,r,s,this.numConstants);e=i.inputs,r=i.initialState,s=i.constants;let o=[],a=[];if(r!=null){n.initialState=r,o=o.concat(r),this.stateSpec=[];for(const u of r)this.stateSpec.push(new qe({shape:u.shape}));a=a.concat(this.stateSpec)}if(s!=null&&(n.constants=s,o=o.concat(s),this.numConstants=s.length),o[0]instanceof Pn){const u=[e].concat(o),c=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=c;const f=super.apply(u,n);return this.inputSpec=h,f}else return super.apply(e,n)}call(e,n){return A(()=>{const r=n==null?null:n.mask,s=n==null?null:n.training;let i=n==null?null:n.initialState;e=re(e),i==null&&(this.stateful?i=this.states_:i=this.getInitialState(e));const o=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(i.length!==o)throw new I(`RNN Layer has ${o} state(s) but was passed ${i.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");const a={training:s},u=m1((p,y)=>{const w=this.cell.call([p].concat(y),a);return[w[0],w.slice(1)]},e,i,this.goBackwards,r,null,this.unroll,this.returnSequences),c=u[0],h=u[1],f=u[2];this.stateful&&this.resetStates(f,s);const d=this.returnSequences?h:c;return this.returnState?[d].concat(f):d})}getInitialState(e){return A(()=>{let n=rt(e.shape);return n=Y(n,[1,2]),n=Mo(n),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(r=>r>1?Yc(n,[1,r]):n):this.cell.stateSize>1?[Yc(n,[1,this.cell.stateSize])]:[n]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(e)}getConfig(){const e=super.getConfig(),n={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(n.numConstants=this.numConstants);const r=this.cell.getConfig();return this.getClassName()===Ur.className&&(n.cell={className:this.cell.getClassName(),config:r}),Object.assign({},r,e,n)}static fromConfig(e,n,r={}){const s=n.cell,i=Vn(s,r);return new e(Object.assign(n,{cell:i}))}}Ur.className="RNN";R(Ur);class Zl extends ue{}class sd extends Zl{constructor(e){super(e),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=e.units,et(this.units,"units"),this.activation=Fr(e.activation==null?this.DEFAULT_ACTIVATION:e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=De(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=De(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=De(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=$e(e.kernelRegularizer),this.recurrentRegularizer=$e(e.recurrentRegularizer),this.biasRegularizer=$e(e.biasRegularizer),this.kernelConstraint=Xe(e.kernelConstraint),this.recurrentConstraint=Xe(e.recurrentConstraint),this.biasConstraint=Xe(e.biasConstraint),this.dropout=ci([1,Mr([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=ci([1,Mr([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=ye(e),this.kernel=this.addWeight("kernel",[e[e.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,n){return A(()=>{if(e=e,e.length!==2)throw new I(`SimpleRNNCell expects 2 input Tensors, got ${e.length}.`);let r=e[1];e=e[0];const s=n.training==null?!1:n.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Lr({ones:()=>En(e),rate:this.dropout,training:s,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Lr({ones:()=>En(r),rate:this.recurrentDropout,training:s,dropoutFunc:this.dropoutFunc}));let i;const o=this.dropoutMask,a=this.recurrentDropoutMask;o!=null?i=jn(T(e,o),this.kernel.read()):i=jn(e,this.kernel.read()),this.bias!=null&&(i=Cn(i,this.bias.read())),a!=null&&(r=T(r,a));let l=P(i,jn(r,this.recurrentKernel.read()));return this.activation!=null&&(l=this.activation.apply(l)),[l,l]})}getConfig(){const e=super.getConfig(),n={units:this.units,activation:_r(this.activation),useBias:this.useBias,kernelInitializer:Le(this.kernelInitializer),recurrentInitializer:Le(this.recurrentInitializer),biasInitializer:Le(this.biasInitializer),kernelRegularizer:we(this.kernelRegularizer),recurrentRegularizer:we(this.recurrentRegularizer),biasRegularizer:we(this.biasRegularizer),activityRegularizer:we(this.activityRegularizer),kernelConstraint:Ye(this.kernelConstraint),recurrentConstraint:Ye(this.recurrentConstraint),biasConstraint:Ye(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign({},e,n)}}sd.className="SimpleRNNCell";R(sd);class g1 extends Ur{constructor(e){e.cell=new sd(e),super(e)}call(e,n){return A(()=>{this.cell.dropoutMask!=null&&(ee(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(ee(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const r=n==null?null:n.mask,s=n==null?null:n.training,i=n==null?null:n.initialState;return super.call(e,{mask:r,training:s,initialState:i})})}static fromConfig(e,n){return new e(n)}}g1.className="SimpleRNN";R(g1);class id extends Zl{constructor(e){if(super(e),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",e.resetAfter)throw new I("GRUCell does not support reset_after parameter set to true.");this.units=e.units,et(this.units,"units"),this.activation=Fr(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=Fr(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=De(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=De(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=De(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=$e(e.kernelRegularizer),this.recurrentRegularizer=$e(e.recurrentRegularizer),this.biasRegularizer=$e(e.biasRegularizer),this.kernelConstraint=Xe(e.kernelConstraint),this.recurrentConstraint=Xe(e.recurrentConstraint),this.biasConstraint=Xe(e.biasConstraint),this.dropout=ci([1,Mr([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=ci([1,Mr([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=ye(e);const n=e[e.length-1];this.kernel=this.addWeight("kernel",[n,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,n){return A(()=>{if(e=e,e.length!==2)throw new I(`GRUCell expects 2 input Tensors (inputs, h, c), got ${e.length}.`);const r=n.training==null?!1:n.training;let s=e[1];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Lr({ones:()=>En(e),rate:this.dropout,training:r,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Lr({ones:()=>En(s),rate:this.recurrentDropout,training:r,count:3,dropoutFunc:this.dropoutFunc}));const i=this.dropoutMask,o=this.recurrentDropoutMask;let a,l,u;0<this.dropout&&this.dropout<1&&(e=T(e,i[0]));let c=jn(e,this.kernel.read());this.useBias&&(c=Cn(c,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(s=T(s,o[0]));const h=this.recurrentKernel.read(),[f,d]=Wn(h,[2*this.units,this.units],h.rank-1),p=jn(s,f),[y,w,g]=Wn(c,3,c.rank-1),[m,v]=Wn(p,2,p.rank-1);a=this.recurrentActivation.apply(P(y,m)),l=this.recurrentActivation.apply(P(w,v));const k=jn(T(l,s),d);u=this.activation.apply(P(g,k));const S=P(T(a,s),T(P(1,dt(a)),u));return[S,S]})}getConfig(){const e=super.getConfig(),n={units:this.units,activation:_r(this.activation),recurrentActivation:_r(this.recurrentActivation),useBias:this.useBias,kernelInitializer:Le(this.kernelInitializer),recurrentInitializer:Le(this.recurrentInitializer),biasInitializer:Le(this.biasInitializer),kernelRegularizer:we(this.kernelRegularizer),recurrentRegularizer:we(this.recurrentRegularizer),biasRegularizer:we(this.biasRegularizer),activityRegularizer:we(this.activityRegularizer),kernelConstraint:Ye(this.kernelConstraint),recurrentConstraint:Ye(this.recurrentConstraint),biasConstraint:Ye(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign({},e,n)}}id.className="GRUCell";R(id);class y1 extends Ur{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new id(e),super(e)}call(e,n){return A(()=>{this.cell.dropoutMask!=null&&(ee(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(ee(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const r=n==null?null:n.mask,s=n==null?null:n.training,i=n==null?null:n.initialState;return super.call(e,{mask:r,training:s,initialState:i})})}static fromConfig(e,n){return n.implmentation===0&&(n.implementation=1),new e(n)}}y1.className="GRU";R(y1);class Ql extends Zl{constructor(e){super(e),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=e.units,et(this.units,"units"),this.activation=Fr(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=Fr(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=De(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=De(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=De(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=e.unitForgetBias,this.kernelRegularizer=$e(e.kernelRegularizer),this.recurrentRegularizer=$e(e.recurrentRegularizer),this.biasRegularizer=$e(e.biasRegularizer),this.kernelConstraint=Xe(e.kernelConstraint),this.recurrentConstraint=Xe(e.recurrentConstraint),this.biasConstraint=Xe(e.biasConstraint),this.dropout=ci([1,Mr([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=ci([1,Mr([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){var n;e=ye(e);const r=e[e.length-1];this.kernel=this.addWeight("kernel",[r,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let s;if(this.useBias){if(this.unitForgetBias){const i=this.biasInitializer,o=this.units;s=new(n=class extends un{apply(l,u){const c=i.apply([o]),h=new Vf().apply([o]),f=i.apply([o*2]);return Qp(Qp(c,h),f)}},n.className="CustomInit",n)}else s=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,s,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(e,n){return A(()=>{const r=n.training==null?!1:n.training;if(e=e,e.length!==3)throw new I(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);let s=e[1];const i=e[2];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Lr({ones:()=>En(e),rate:this.dropout,training:r,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Lr({ones:()=>En(s),rate:this.recurrentDropout,training:r,count:4,dropoutFunc:this.dropoutFunc}));const o=this.dropoutMask,a=this.recurrentDropoutMask;let l,u,c,h;0<this.dropout&&this.dropout<1&&(e=T(e,o[0]));let f=jn(e,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(s=T(s,a[0])),f=P(f,jn(s,this.recurrentKernel.read())),this.useBias&&(f=Cn(f,this.bias.read()));const[d,p,y,w]=Wn(f,4,f.rank-1);l=this.recurrentActivation.apply(d),u=this.recurrentActivation.apply(p),c=P(T(u,i),T(l,this.activation.apply(y))),h=this.recurrentActivation.apply(w);const g=T(h,this.activation.apply(c));return[g,g,c]})}getConfig(){const e=super.getConfig(),n={units:this.units,activation:_r(this.activation),recurrentActivation:_r(this.recurrentActivation),useBias:this.useBias,kernelInitializer:Le(this.kernelInitializer),recurrentInitializer:Le(this.recurrentInitializer),biasInitializer:Le(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:we(this.kernelRegularizer),recurrentRegularizer:we(this.recurrentRegularizer),biasRegularizer:we(this.biasRegularizer),activityRegularizer:we(this.activityRegularizer),kernelConstraint:Ye(this.kernelConstraint),recurrentConstraint:Ye(this.recurrentConstraint),biasConstraint:Ye(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign({},e,n)}}Ql.className="LSTMCell";R(Ql);class v1 extends Ur{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new Ql(e),super(e)}call(e,n){return A(()=>{this.cell.dropoutMask!=null&&(ee(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(ee(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const r=n==null?null:n.mask,s=n==null?null:n.training,i=n==null?null:n.initialState;return super.call(e,{mask:r,training:s,initialState:i})})}static fromConfig(e,n){return n.implmentation===0&&(n.implementation=1),new e(n)}}v1.className="LSTM";R(v1);class od extends Zl{constructor(e){super(e),this.cells=e.cells}get stateSize(){const e=[];for(const n of this.cells.slice().reverse())Array.isArray(n.stateSize)?e.push(...n.stateSize):e.push(n.stateSize);return e}call(e,n){return A(()=>{e=e;let r=e.slice(1);const s=[];for(const a of this.cells.slice().reverse())Array.isArray(a.stateSize)?s.push(r.splice(0,a.stateSize.length)):s.push(r.splice(0,1));s.reverse();const i=[];let o;for(let a=0;a<this.cells.length;++a){const l=this.cells[a];r=s[a],a===0?o=[e[0]].concat(r):o=[o[0]].concat(r),o=l.call(o,n),i.push(o.slice(1))}r=[];for(const a of i.slice().reverse())r.push(...a);return[o[0]].concat(r)})}build(e){Jc(e)&&(e=e[0]),e=e;let n;this.cells.forEach((r,s)=>{es(`RNNCell_${s}`,()=>{r.build(e),Array.isArray(r.stateSize)?n=r.stateSize[0]:n=r.stateSize,e=[e[0],n]})}),this.built=!0}getConfig(){const e=super.getConfig(),n=i=>({className:i.getClassName(),config:i.getConfig()}),s={cells:this.cells.map(n)};return Object.assign({},e,s)}static fromConfig(e,n,r={}){const s=[];for(const i of n.cells)s.push(Vn(i,r));return new e({cells:s})}get trainableWeights(){if(!this.trainable)return[];const e=[];for(const n of this.cells)e.push(...n.trainableWeights);return e}get nonTrainableWeights(){const e=[];for(const n of this.cells)e.push(...n.nonTrainableWeights);if(!this.trainable){const n=[];for(const r of this.cells)n.push(...r.trainableWeights);return n.concat(e)}return e}getWeights(){const e=[];for(const n of this.cells)e.push(...n.weights);return Zc(e)}setWeights(e){const n=[];for(const r of this.cells){const s=r.weights.length,i=e.splice(s);for(let o=0;o<r.weights.length;++o)n.push([r.weights[o],i[o]])}Jf(n)}}od.className="StackedRNNCells";R(od);function Lr(t){const{ones:e,rate:n,training:r=!1,count:s=1,dropoutFunc:i}=t,o=()=>i!=null?i(e(),n):lw(e(),n),a=()=>Fo(o,e,r);return!s||s<=1?Gn(a().clone()):Array(s).fill(void 0).map(a).map(u=>Gn(u.clone()))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */var l3=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n};class w1 extends Ur{constructor(e){if(e.unroll)throw new ne("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(e.cell))throw new ne("It is not possible at the moment to stack convolutional cells.");super(e),this.inputSpec=[new qe({ndim:5})]}call(e,n){return A(()=>{if(this.cell.dropoutMask!=null&&(ee(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(ee(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),n&&n.constants)throw new I("ConvRNN2D cell does not support constants");const r=n==null?null:n.mask,s=n==null?null:n.training,i=n==null?null:n.initialState;return super.call(e,{mask:r,training:s,initialState:i})})}computeOutputShape(e){let n=this.computeSingleOutputShape(e);return this.returnSequences||(n=[n[0],...n.slice(2)]),this.returnState&&(n=[n,...Array(2).fill([e[0],...n.slice(-3)])]),n}getInitialState(e){return A(()=>{const{stateSize:n}=this.cell,r=e.shape,s=this.computeSingleOutputShape(r),i=[s[0],...s.slice(2)],o=rt(i);return Array.isArray(n)?Array(n.length).fill(o):[o]})}resetStates(e,n=!1){A(()=>{if(!this.stateful)throw new _n("Cannot call resetStates() on an RNN Layer that is not stateful.");const r=this.inputSpec[0].shape,s=this.computeSingleOutputShape(r),i=[s[0],...s.slice(2)];if(r[0]==null)throw new I("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>rt(i)):this.states_=[rt(i)];else if(e==null)ee(this.states_),this.keptStates!=null&&(ee(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>rt(i)):this.states_[0]=rt(i);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new I(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);n?this.keptStates.push(this.states_.slice()):ee(this.states_);for(let a=0;a<this.states_.length;++a){const l=e[a],u=i;if(!It(l.shape,u))throw new I(`State ${a} is incompatible with layer ${this.name}: expected shape=${u}, received shape=${l.shape}`);this.states_[a]=l}}this.states_=this.states_.map(a=>Gn(a.clone()))})}computeSingleOutputShape(e){const{dataFormat:n,filters:r,kernelSize:s,padding:i,strides:o,dilationRate:a}=this.cell,l=n==="channelsFirst",u=e[l?3:2],c=e[l?4:3],h=kn(u,s[0],i,o[0],a[0]),f=kn(c,s[1],i,o[1],a[1]);return[...e.slice(0,2),...l?[r,h,f]:[h,f,r]]}}w1.className="ConvRNN2D";class ad extends Ql{constructor(e){const{filters:n,kernelSize:r,strides:s,padding:i,dataFormat:o,dilationRate:a}=e;super(Object.assign({},e,{units:n})),this.filters=n,et(this.filters,"filters"),this.kernelSize=Ks(r,2,"kernelSize"),this.kernelSize.forEach(l=>et(l,"kernelSize")),this.strides=Ks(s||1,2,"strides"),this.strides.forEach(l=>et(l,"strides")),this.padding=i||"valid",Ht(this.padding),this.dataFormat=o||"channelsLast",je(this.dataFormat),this.dilationRate=Ks(a||1,2,"dilationRate"),this.dilationRate.forEach(l=>et(l,"dilationRate"))}build(e){var n;e=ye(e);const r=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[r]==null)throw new I(`The channel dimension of the input should be defined. Found ${e[r]}`);const s=e[r],i=4,o=this.kernelSize.concat([s,this.filters*i]);this.kernel=this.addWeight("kernel",o,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const a=this.kernelSize.concat([this.filters,this.filters*i]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let l;if(this.unitForgetBias){const u=this.biasInitializer,c=this.filters;l=new(n=class extends un{apply(f,d){const p=u.apply([c]),y=ys([c]),w=u.apply([c*2]);return jf([p,y,w])}},n.className="CustomInit",n)}else l=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*i],null,l,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(e,n){return A(()=>{if(e.length!==3)throw new I(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);const r=n.training||!1,s=e[0],i=e[1],o=e[2],a=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Lr({ones:()=>En(s),rate:this.dropout,training:r,count:a,dropoutFunc:this.dropoutFunc}));const l=this.dropoutMask,u=(O,j,V)=>!j||!j[V]?O:T(j[V],O);let c=u(s,l,0),h=u(s,l,1),f=u(s,l,2),d=u(s,l,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Lr({ones:()=>En(i),rate:this.recurrentDropout,training:r,count:a,dropoutFunc:this.dropoutFunc}));const p=this.recurrentDropoutMask;let y=u(i,p,0),w=u(i,p,1),g=u(i,p,2),m=u(i,p,3);const v=3,[k,S,C,z]=Wn(this.kernel.read(),a,v),[$,F,L,W]=this.useBias?Wn(this.bias.read(),a):[null,null,null,null];c=this.inputConv(c,k,$,this.padding),h=this.inputConv(h,S,F,this.padding),f=this.inputConv(f,C,L,this.padding),d=this.inputConv(d,z,W,this.padding);const[K,Z,se,ie]=Wn(this.recurrentKernel.read(),a,v);y=this.recurrentConv(y,K),w=this.recurrentConv(w,Z),g=this.recurrentConv(g,se),m=this.recurrentConv(m,ie);const oe=this.recurrentActivation.apply(P(c,y)),ae=this.recurrentActivation.apply(P(h,w)),E=P(T(ae,o),T(oe,this.activation.apply(P(f,g)))),x=T(this.recurrentActivation.apply(P(d,m)),this.activation.apply(E));return[x,x,E]})}getConfig(){const e=super.getConfig(),n=l3(e,["units"]),r={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign({},n,r)}inputConv(e,n,r,s){const i=oi(e,n,this.strides,s||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return r?Cn(i,r,this.dataFormat):i}recurrentConv(e,n){return oi(e,n,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}ad.className="ConvLSTM2DCell";R(ad);class b1 extends w1{constructor(e){const n=new ad(e);super(Object.assign({},e,{cell:n}))}static fromConfig(e,n){return new e(n)}}b1.className="ConvLSTM2D";R(b1);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class ld extends ue{constructor(e){super(e),this.rate=Math.max(Math.min(e.rate,1),0),this.noiseShape=e.noiseShape,this.seed=e.seed,this.supportsMasking=!0}getNoiseShape(e){if(this.noiseShape==null)return this.noiseShape;const n=e.shape,r=[];for(let s=0;s<this.noiseShape.length;++s)r.push(this.noiseShape[s]==null?n[s]:this.noiseShape[s]);return r}call(e,n){return A(()=>{this.invokeCallHook(e,n);const r=re(e);if(0<this.rate&&this.rate<1){const s=n.training==null?!1:n.training,i=this.getNoiseShape(r);return Fo(()=>lw(r,this.rate,i,this.seed),()=>r,s)}return e})}getConfig(){const e={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},n=super.getConfig();return Object.assign(e,n),e}dispose(){return super.dispose()}}ld.className="Dropout";R(ld);class k1 extends ld{constructor(e){super(e),this.inputSpec=[{ndim:3}]}getNoiseShape(e){const n=e.shape;return[n[0],1,n[2]]}}k1.className="SpatialDropout1D";R(k1);class ud extends ue{constructor(e){if(super(e),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",e.batchInputShape==null&&e.inputShape==null&&e.inputDim!=null){let n=null;e.batchSize!=null&&(n=e.batchSize),this.batchInputShape=[n,e.inputDim]}this.units=e.units,et(this.units,"units"),this.activation=Fr(e.activation),e.useBias!=null&&(this.useBias=e.useBias),this.kernelInitializer=De(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=De(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=Xe(e.kernelConstraint),this.biasConstraint=Xe(e.biasConstraint),this.kernelRegularizer=$e(e.kernelRegularizer),this.biasRegularizer=$e(e.biasRegularizer),this.activityRegularizer=$e(e.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(e){e=ye(e);const n=e[e.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[n,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:n}}],this.built=!0}computeOutputShape(e){e=ye(e);const n=e.slice();return n[n.length-1]=this.units,n}call(e,n){return A(()=>{this.invokeCallHook(e,n);const r=re(e),s=tw(this.activation.getClassName());let i;return s!=null?i=jn(r,this.kernel.read(),s,this.bias?this.bias.read():null):(i=jn(r,this.kernel.read()),this.bias!=null&&(i=Cn(i,this.bias.read())),this.activation!=null&&(i=this.activation.apply(i))),i})}getConfig(){const e={units:this.units,activation:_r(this.activation),useBias:this.useBias,kernelInitializer:Le(this.kernelInitializer),biasInitializer:Le(this.biasInitializer),kernelRegularizer:we(this.kernelRegularizer),biasRegularizer:we(this.biasRegularizer),activityRegularizer:we(this.activityRegularizer),kernelConstraint:Ye(this.kernelConstraint),biasConstraint:Ye(this.biasConstraint)},n=super.getConfig();return Object.assign(e,n),e}}ud.className="Dense";R(ud);class x1 extends ue{constructor(e){e=e||{},super(e),this.inputSpec=[{minNDim:3}],this.dataFormat=e.dataFormat}computeOutputShape(e){e=ye(e);for(const n of e.slice(1))if(n==null)throw new I(`The shape of the input to "Flatten" is not fully defined (got ${e.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[e[0],Nr(e,1)]}call(e,n){return A(()=>{this.invokeCallHook(e,n);let r=re(e);if(this.dataFormat==="channelsFirst"&&r.rank>1){const s=[0];for(let i=2;i<r.rank;++i)s.push(i);s.push(1),r=ce(r,s)}return FA(r)})}getConfig(){const e={};this.dataFormat!=null&&(e.dataFormat=this.dataFormat);const n=super.getConfig();return Object.assign(e,n),e}}x1.className="Flatten";R(x1);class S1 extends ue{constructor(e){super(e),this.supportsMasking=!0,this.activation=Fr(e.activation)}call(e,n){return A(()=>{this.invokeCallHook(e,n);const r=re(e);return this.activation.apply(r)})}getConfig(){const e={activation:_r(this.activation)},n=super.getConfig();return Object.assign(e,n),e}}S1.className="Activation";R(S1);class E1 extends ue{constructor(e){super(e),this.n=e.n,this.inputSpec=[{ndim:2}]}computeOutputShape(e){return[e[0],this.n,e[1]]}call(e,n){return A(()=>(e=re(e),MA(e,this.n)))}getConfig(){const e={n:this.n},n=super.getConfig();return Object.assign(e,n),e}}E1.className="RepeatVector";R(E1);class I1 extends ue{constructor(e){super(e),this.targetShape=e.targetShape;for(let n=0;n<this.targetShape.length;++n)this.isUnknown(this.targetShape[n])&&(this.targetShape[n]=null)}isUnknown(e){return e<0||e==null}fixUnknownDimension(e,n){const r="Total size of new array must be unchanged.",s=n.slice();let i=1,o=null;for(let l=0;l<s.length;++l){const u=s[l];if(this.isUnknown(u))if(o===null)o=l;else throw new I("Can only specifiy one unknown dimension.");else i*=u}const a=Nr(e);if(o!==null){if(i===0||a%i!==0)throw new I(r);s[o]=a/i}else if(a!==i)throw new I(r);return s}computeOutputShape(e){let n=!1;for(let r=0;r<e.length;++r)if(this.isUnknown(e[r])){n=!0;break}return n?e.slice(0,1).concat(this.targetShape):e.slice(0,1).concat(this.fixUnknownDimension(e.slice(1),this.targetShape))}call(e,n){return A(()=>{this.invokeCallHook(e,n);const r=re(e),s=r.shape,i=s.slice(0,1).concat(this.fixUnknownDimension(s.slice(1),this.targetShape));return M(r,i)})}getConfig(){const e={targetShape:this.targetShape},n=super.getConfig();return Object.assign(e,n),e}}I1.className="Reshape";R(I1);class N1 extends ue{constructor(e){if(super(e),e.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(e.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${e.dims} instead.`);const n=In(1,e.dims.length+1);if(!It(e.dims.slice().sort(),n))throw new Error("Invalid permutation `dims`: "+JSON.stringify(e.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=e.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new qe({ndim:this.dims.length+1})]}computeOutputShape(e){e=ye(e);const n=e.slice();return this.dims.forEach((r,s)=>{n[s+1]=e[r]}),n}call(e,n){return ce(re(e),this.dimsIncludingBatch)}getConfig(){const e={dims:this.dims},n=super.getConfig();return Object.assign(e,n),e}}N1.className="Permute";R(N1);class T1 extends ue{constructor(e){super(e??{}),this.supportsMasking=!0,e!=null?this.maskValue=e.maskValue==null?0:e.maskValue:this.maskValue=0}computeOutputShape(e){return e}getConfig(){const e=super.getConfig(),n={maskValue:this.maskValue};return Object.assign(n,e),n}computeMask(e,n){const r=re(e),s=-1;return jp(Kc(r,this.maskValue),s)}call(e,n){return A(()=>{this.invokeCallHook(e,n);const r=re(e),s=-1,i=!0,o=jp(Kc(r,this.maskValue),s,i);return T(r,H(o,r.dtype))})}}T1.className="Masking";R(T1);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class C1 extends ue{constructor(e){if(super(e),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",e.batchInputShape==null&&e.inputShape==null){let n=null;e.batchSize!=null&&(n=e.batchSize),e.inputLength==null?this.batchInputShape=[n,null]:this.batchInputShape=[n].concat(xe(e.inputLength))}this.inputDim=e.inputDim,et(this.inputDim,"inputDim"),this.outputDim=e.outputDim,et(this.outputDim,"outputDim"),this.embeddingsInitializer=De(e.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=$e(e.embeddingsRegularizer),this.activityRegularizer=$e(e.activityRegularizer),this.embeddingsConstraint=Xe(e.embeddingsConstraint),this.maskZero=e.maskZero,this.supportsMasking=e.maskZero,this.inputLength=e.inputLength}build(e){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(e){}computeMask(e,n){return A(()=>this.maskZero?(e=re(e),Kc(e,pe(e))):null)}computeOutputShape(e){if(e=ye(e),this.inputLength==null)return[...e,this.outputDim];const n=xe(this.inputLength);if(n.length!==e.length-1)throw new I(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);{let r=0;for(let s=0;s<n.length;++s){const i=n[s],o=e[s+1];if(i!=null&&o!=null&&i!==o)throw new I(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);i==null&&(n[r]=o),r++}}return[e[0],...n,this.outputDim]}call(e,n){return A(()=>{this.invokeCallHook(e,n);let r=re(e);r.dtype!=="int32"&&(r=zo(r,"int32"));const s=aw(this.embeddings.read(),M(r,[r.size]));return M(s,ye(this.computeOutputShape(r.shape)))})}getConfig(){const e={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:Le(this.embeddingsInitializer),embeddingsRegularizer:we(this.embeddingsRegularizer),activityRegularizer:we(this.activityRegularizer),embeddingsConstraint:Ye(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},n=super.getConfig();return Object.assign(e,n),e}}C1.className="Embedding";R(C1);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class bs extends ue{constructor(e){super(e||{}),this.supportsMasking=!0}mergeFunction(e){throw new ne}computeElementwiseOpOutputShape(e,n){if(e==null||n==null)return null;if(e.length<n.length)return this.computeElementwiseOpOutputShape(n,e);if(n.length===0)return e;const r=e.slice(0,e.length-n.length);for(let s=0;s<n.length;++s){const i=e[e.length-n.length+s],o=n[s];if(i==null||o==null||i<0||o<0)r.push(null);else if(i===1)r.push(o);else if(o===1)r.push(i);else{if(i!==o)throw new I("Operands could not be broadcast together with shapes "+JSON.stringify(e)+" "+JSON.stringify(n));r.push(i)}}return r}build(e){if(Array.isArray(e)&&!Array.isArray(e[0])&&(e=[ye(e)]),e=e,e.length<2)throw new I(`A merge layer should be called on an Array of at least 2 inputs. Got ${e.length} input(s).`);let n=[];for(const i of e)i!=null&&i[0]!==null&&n.push(i[0]);if(n=Ir(n),n.length>1)throw new I(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(e)}.`);let r=e[0]==null?null:e[0].slice(1);for(let i=1;i<e.length;++i){const o=e[i]==null?null:e[i].slice(1);r=this.computeElementwiseOpOutputShape(r,o)}const s=e.map(i=>i.length);e.indexOf(null)===-1&&Ir(s).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(e,n){return A(()=>{if(e=e,this.reshapeRequired){const r=[],s=e.map(i=>i.rank);if(s.indexOf(null)===-1){const i=Mr(s);for(let o of e){const a=o.rank;for(let l=0;l<i-a;++l)o=Mo(o,1);r.push(o)}return this.mergeFunction(r)}else{let i=!1;for(const l of e){const u=l.rank;if(u==null){const c=l.shape,h=c[0],f=c.slice(1).concat([h]);let d=M(l,[h].concat(Nr(c.slice(1))));d=ce(d,[1,0]),d=M(d,f),r.push(d),i=!0}else if(u>1){const c=In(1,u).concat([0]);r.push(ce(l,c)),i=!0}else r.push(l)}let o=this.mergeFunction(r);const a=o.rank;if(i){if(a==null){const l=o.shape,u=l.length,c=l[u-1],h=[c].concat(l.slice(0,l.length-1));o=M(ce(M(o,[-1,c]),[1,0]),h)}else if(a>1){const l=[a-1].concat(In(0,a-1));o=ce(o,l)}}return o}}else return this.mergeFunction(e)})}computeOutputShape(e){e=e;let n;e[0]==null?n=null:n=e[0].slice(1);for(let s=1;s<e.length;++s){const i=e[s]==null?null:e[s].slice(1);n=this.computeElementwiseOpOutputShape(n,i)}let r=[];for(const s of e)s!=null&&s[0]!==null&&r.push(s[0]);return r=Ir(r),r.length===1?n=r.concat(n):n=[null].concat(n),n}computeMask(e,n){return A(()=>{if(n==null)return null;if(!Array.isArray(n))throw new I("`mask` should be an Array");if(!Array.isArray(e))throw new I("`inputs` should be an Array");if(n.length!==e.length)throw new I(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${e.length} vs ${n.length})`);if(n.every(s=>s==null))return null;n=n.map(s=>s==null?s:gn(s,0));let r=n[0];for(let s=1;s<n.length-1;++s)r=vi(r,n[s]);return r})}}class A1 extends bs{constructor(e){super(e)}mergeFunction(e){return A(()=>{let n=e[0].clone();for(let r=1;r<e.length;++r)n=P(n,e[r]);return n})}}A1.className="Add";R(A1);class D1 extends bs{constructor(e){super(e)}mergeFunction(e){return A(()=>{let n=e[0].clone();for(let r=1;r<e.length;++r)n=T(n,e[r]);return n})}}D1.className="Multiply";R(D1);class $1 extends bs{constructor(e){super(e)}mergeFunction(e){return A(()=>{let n=e[0].clone();for(let r=1;r<e.length;++r)n=P(n,e[r]);return T(1/e.length,n)})}}$1.className="Average";R($1);class z1 extends bs{constructor(e){super(e)}mergeFunction(e){return A(()=>{let n=e[0];for(let r=1;r<e.length;++r)n=gs(n,e[r]);return n})}}z1.className="Maximum";R(z1);class M1 extends bs{constructor(e){super(e)}mergeFunction(e){return A(()=>{let n=e[0];for(let r=1;r<e.length;++r)n=_v(n,e[r]);return n})}}M1.className="Minimum";R(M1);class _1 extends bs{constructor(e){super(e),this.DEFAULT_AXIS=-1,e==null&&(e={}),this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){if(!(Array.isArray(e)&&Array.isArray(e[0]))||e.length===1)throw new I("A `Concatenate` layer should be called on a list of at least 2 inputs");e=e;let n=!0;for(const s of e)if(s!=null){n=!1;break}if(n)return;const r=[];for(let s=0;s<e.length;++s){const i=e[s].slice();i.splice(this.axis,1);let o=!1;for(const a of r)if(It(a,i)){o=!0;break}o||r.push(i)}if(r.length>1)throw new I("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(e))}mergeFunction(e){return A(()=>jf(e,this.axis))}computeOutputShape(e){if(!(Array.isArray(e)&&Array.isArray(e[0])))throw new I("A `Concatenate` layer should be called on a list of inputs.");const n=e,r=n[0].slice(),s=this.axis<0?r.length+this.axis:this.axis;for(const i of n.slice(1)){if(r[s]==null||i[s]==null){r[s]=null;break}r[s]+=i[s]}return r}computeMask(e,n){if(n==null)return null;if(!Array.isArray(n))throw new I("`mask` should be an array for Concatenate");if(!Array.isArray(e))throw new I("`inputs` should be an array for Concatenate");if(n.length!==e.length)throw new I(`Mismatch in the length of mask (${n.length}) and the legnth of inputs (${e.length})`);return A(()=>{let r=!0;if(n.forEach(o=>{if(o!=null){r=!1;return}}),r)return null;const s=[];for(let o=0;o<e.length;++o)n[o]==null?s.push(H(En(e[o]),"bool")):n[o].rank<e[o].rank?s.push(gn(n[o],-1)):s.push(n[o]);const i=bn(s,this.axis);return qE(i,-1,!1)})}getConfig(){const e={axis:this.axis},n=super.getConfig();return Object.assign(e,n),e}}_1.className="Concatenate";R(_1);function $i(t,e){for(;t<0;)t+=e;return t}function u3(t,e,n){if(t.shape.length>3||e.shape.length>3)throw new ne("batchDot is not implemented for tensors of 4D or higher rank yet");if(b(t.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${t.shape.length}`),b(t.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${e.shape.length}`),typeof n=="number"&&(n=[n,n]),t.dtype==="complex64"||e.dtype==="complex64")throw new ne("batchDot is not implemented for complex64-type Tensors yet.");const r=t.shape.length,s=e.shape.length;n==null&&(n=[r-1,s-2]);const i=n;return A(()=>{let o;if(r>s){o=r-s;const l=[];for(let u=0;u<o;++u)l.push(1);e=M(e,e.shape.concat(l))}else if(s>r){o=s-r;const l=[];for(let u=0;u<o;++u)l.push(1);t=M(t,t.shape.concat(l))}else o=0;let a;if(t.shape.length===2&&e.shape.length===2)i[0]===i[1]?a=Y(T(t,e),i[0]):a=Y(T(ce(t,[1,0]),e),i[1]);else{const l=i[0]!==t.shape.length-1,u=i[1]===e.shape.length-1;a=ke(t,e,l,u)}if(o>0){let l;r>s?l=r+s-3:l=r-1;const u=[];for(let c=l;c<l+o;++c)u.push(c);a=ai(a,u)}return a.shape.length===1&&(a=gn(a,1)),a})}class F1 extends bs{constructor(e){super(e),this.axes=e.axes,this.normalize=e.normalize==null?!1:e.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){b(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const n=e[0],r=e[1];if(n.length>3||r.length>3)throw new ne("Dot layer does not support tensors of 4D or higher rank yet.");const s=this.interpretAxes(n,r);if(n[s[0]]!==r[s[1]])throw new I(`Dimension incompatibility: ${n[s[0]]} !== ${r[s[1]]}`)}mergeFunction(e){if(e.length!==2)throw new I(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${e.length} input(s).`);let n=e[0],r=e[1],s;return Array.isArray(this.axes)?s=this.axes.map((i,o)=>$i(i,e[o].shape.length)):s=[$i(this.axes,n.shape.length),$i(this.axes,r.shape.length)],this.normalize&&(n=fl(n,s[0]),r=fl(r,s[1])),u3(n,r,s)}interpretAxes(e,n){let r;return Array.isArray(this.axes)?r=this.axes:r=[$i(this.axes,e.length),$i(this.axes,n.length)],r}computeOutputShape(e){b(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const n=e[0].slice(),r=e[1].slice();if(n.length>3||r.length>3)throw new ne("Dot layer does not support tensors of 4D or higher rank yet.");const s=this.interpretAxes(n,r);n.splice(s[0],1),r.splice(s[1],1),r.splice(0,1);const i=n.concat(r);return i.length===1&&i.push(1),i}computeMask(e,n){return null}getConfig(){const e={axes:this.axes,normalize:this.normalize},n=super.getConfig();return Object.assign(e,n),e}}F1.className="Dot";R(F1);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class L1 extends ue{constructor(e){super(e),this.supportsMasking=!0,this.stddev=e.stddev}computeOutputShape(e){return e}getConfig(){const e=super.getConfig(),n={stddev:this.stddev};return Object.assign(n,e),n}call(e,n){return A(()=>{this.invokeCallHook(e,n);const r=re(e);return Fo(()=>P(Hl(r.shape,0,this.stddev),r),()=>r,n.training||!1)})}}L1.className="GaussianNoise";R(L1);class R1 extends ue{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate}computeOutputShape(e){return e}getConfig(){const e=super.getConfig(),n={rate:this.rate};return Object.assign(n,e),n}call(e,n){return A(()=>{this.invokeCallHook(e,n);const r=re(e);return this.rate>0&&this.rate<1?Fo(()=>{const i=Math.sqrt(this.rate/(1-this.rate));return T(r,Hl(r.shape,1,i))},()=>r,n.training||!1):r})}}R1.className="GaussianDropout";R(R1);class O1 extends ue{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate,this.noiseShape=e.noiseShape}_getNoiseShape(e){return this.noiseShape||re(e).shape}computeOutputShape(e){return e}getConfig(){const e=super.getConfig(),n={rate:this.rate};return Object.assign(n,e),n}call(e,n){return A(()=>{if(this.rate<1&&this.rate>0){const r=this._getNoiseShape(e);return Fo(()=>{const i=re(e),o=1.6732632423543772,a=1.0507009873554805,l=-o*a;let u=Co(Ul(r),this.rate);u=zo(u,"float32");const c=((1-this.rate)*(1+this.rate*l**2))**-.5,h=-c*l*this.rate,f=P(T(i,u),T(P(u,-1),l));return P(T(f,c),h)},()=>re(e),n.training||!1)}return e})}}O1.className="AlphaDropout";R(O1);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function bo(t,e,n,r,s,i=.001){let o;if(t.rank===2)o=mI(t,e,n,r,s,i);else if(t.rank===3)o=yI(t,e,n,r,s,i);else if(t.rank===4)o=wI(t,e,n,r,s,i);else throw new ne(`batchNormalization is not implemented for array of rank ${t.rank} yet`);return o}function c3(t,e,n,r,s=.001){return A(()=>{const i=Do(t,r),o=i.mean,a=i.variance;return[bo(t,o,a,n,e,s),o,a]})}function h3(t,e,n,r,s=.001){return A(()=>{const i=Do(t,r),o=i.mean,a=i.variance,l=[];for(const p of In(0,t.rank))r.indexOf(p)!==-1?l.push(1):l.push(t.shape[p]);const u=M(o,l),c=M(a,l),h=e==null?null:M(e,l),f=n==null?null:M(n,l);return[bo(t,u,c,f,h,s),o,a]})}function f3(t,e,n,r,s=.001){return It(r.slice().sort(),In(0,t.rank-1))?c3(t,e,n,r,s):h3(t,e,n,r,s)}class P1 extends ue{constructor(e){e==null&&(e={}),super(e),this.supportsMasking=!0,this.axis=e.axis==null?-1:e.axis,this.momentum=e.momentum==null?.99:e.momentum,this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null?!0:e.center,this.scale=e.scale==null?!0:e.scale,this.betaInitializer=De(e.betaInitializer||"zeros"),this.gammaInitializer=De(e.gammaInitializer||"ones"),this.movingMeanInitializer=De(e.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=De(e.movingVarianceInitializer||"ones"),this.betaConstraint=Xe(e.betaConstraint),this.gammaConstraint=Xe(e.gammaConstraint),this.betaRegularizer=$e(e.betaRegularizer),this.gammaRegularizer=$e(e.gammaRegularizer)}build(e){e=ye(e);const n=this.axis>=0?this.axis:this.axis+e.length,r=e[n];if(r==null)throw new I(`Axis ${n} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(e)}.`);this.inputSpec=[new qe({ndim:e.length,axes:{[n]:r}})];const s=[r];this.scale&&(this.gamma=this.addWeight("gamma",s,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",s,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",s,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",s,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(e,n){return A(()=>{const r=n.training==null?!1:n.training,s=re(e),i=s.shape,o=i.length,a=In(0,o),l=this.axis>=0?this.axis:this.axis+o;a.splice(l,1);const u=hs(1,o);u[l]=i[l];const c=a.slice();c.sort();const h=!It(c,In(0,o).slice(0,o-1)),f=()=>{if(h){const m=M(this.movingMean.read(),u),v=M(this.movingVariance.read(),u),k=this.center?M(this.beta.read(),u):null,S=this.scale?M(this.gamma.read(),u):null;return bo(s,m,v,k,S,this.epsilon)}else return bo(s,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!r)return f();const[d,p,y]=f3(s,this.gamma.read(),this.beta.read(),a,this.epsilon),w=(m,v,k)=>{A(()=>{const S=1-k,C=m.read(),z=T(te(C,v),S);m.write(te(C,z))})};return(()=>{w(this.movingMean,p,this.momentum),w(this.movingVariance,y,this.momentum)})(),d})}getConfig(){const e={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:Le(this.betaInitializer),gammaInitializer:Le(this.gammaInitializer),movingMeanInitializer:Le(this.movingMeanInitializer),movingVarianceInitializer:Le(this.movingVarianceInitializer),betaRegularizer:we(this.betaRegularizer),gammaRegularizer:we(this.gammaRegularizer),betaConstraint:Ye(this.betaConstraint),gammaConstraint:Ye(this.gammaConstraint)},n=super.getConfig();return Object.assign(e,n),e}}P1.className="BatchNormalization";R(P1);class B1 extends ue{constructor(e){if(e==null&&(e={}),super(e),this.axis=e.axis==null?-1:e.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(const n of this.axis)if(!Number.isInteger(n))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null?!0:e.center,this.scale=e.scale==null?!0:e.scale,this.betaInitializer=De(e.betaInitializer||"zeros"),this.gammaInitializer=De(e.gammaInitializer||"ones"),this.betaRegularizer=$e(e.betaRegularizer),this.gammaRegularizer=$e(e.gammaRegularizer),this.supportsMasking=!0}build(e){e=ye(e);const n=e.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let i=0;i<this.axis.length;++i)this.axis[i]<0&&(this.axis[i]+=n);for(const i of this.axis)if(i<0||i>=n)throw new Error(`Invalid axis: ${i}`);if(this.axis.length!==Ir(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const r=this.axis.map(i=>e[i]),s=!0;this.scale?this.gamma=this.addWeight("gamma",r,"float32",this.gammaInitializer,this.gammaRegularizer,s):this.gamma=null,this.center?this.beta=this.addWeight("beta",r,"float32",this.betaInitializer,this.betaRegularizer,s):this.beta=null,this.built=!0}call(e,n){const r=re(e),s=r.shape,i=s.length;return A(()=>{let{mean:a,variance:l}=Do(r,this.axis,!0);const u=hs(1,i);for(const y of this.axis)u[y]=s[y];const c=y=>y!=null&&y.shape.length!==i?M(y,u):y;let h=this.scale?c(this.gamma.read()):null,f=this.center?c(this.beta.read()):null;const d=[],p=[];for(let y=0;y<i;++y)this.axis.indexOf(y)!==-1?(d.push(s[y]),p.push(1)):(d.push(1),p.push(s[y]));return a=On(a,d),l=On(l,d),h!=null&&(h=On(h,p)),f!=null&&(f=On(f,p)),bo(r,a,l,f,h,this.epsilon)})}getConfig(){const e={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:Le(this.betaInitializer),gammaInitializer:Le(this.gammaInitializer),betaRegularizer:we(this.betaRegularizer),gammaRegularizer:we(this.gammaRegularizer)},n=super.getConfig();return Object.assign(e,n),e}}B1.className="LayerNormalization";R(B1);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function d3(t,e,n){return A(()=>{if(t.rank!==4)throw new I(`temporalPadding expects input tensor to be 4-D, but received a ${t.rank}-D tensor.`);if(e==null&&(e=[[1,1],[1,1]]),e.length!==2||e[0].length!==2||e[1].length!==2)throw new I("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(n==null&&(n=Nn()),n!=="channelsLast"&&n!=="channelsFirst")throw new I(`Unknown data format: ${n}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let r;return n==="channelsFirst"?r=[[0,0],[0,0],e[0],e[1]]:r=[[0,0],e[0],e[1],[0,0]],Fv(t,r)})}class U1 extends ue{constructor(e){if(e==null&&(e={}),super(e),this.dataFormat=e.dataFormat==null?Nn():e.dataFormat,e.padding==null)this.padding=[[1,1],[1,1]];else if(typeof e.padding=="number")this.padding=[[e.padding,e.padding],[e.padding,e.padding]];else{if(e.padding=e.padding,e.padding.length!==2)throw new I(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${e.padding.length} array.`);let n,r;if(typeof e.padding[0]=="number")n=[e.padding[0],e.padding[0]],r=[e.padding[1],e.padding[1]];else{if(e.padding=e.padding,e.padding[0].length!==2)throw new I(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${e.padding[0].length} array.`);if(n=e.padding[0],e.padding[1].length!==2)throw new I(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${e.padding[1].length} array.`);r=e.padding[1]}this.padding=[n,r]}this.inputSpec=[new qe({ndim:4})]}computeOutputShape(e){e=ye(e);let n,r;return this.dataFormat==="channelsFirst"?(e[2]!=null&&e[2]>=0?n=e[2]+this.padding[0][0]+this.padding[0][1]:n=null,e[3]!=null&&e[3]>=0?r=e[3]+this.padding[1][0]+this.padding[1][1]:r=null,[e[0],e[1],n,r]):(e[1]!=null&&e[1]>=0?n=e[1]+this.padding[0][0]+this.padding[0][1]:n=null,e[2]!=null&&e[2]>=0?r=e[2]+this.padding[1][0]+this.padding[1][1]:r=null,[e[0],n,r,e[3]])}call(e,n){return A(()=>d3(re(e),this.padding,this.dataFormat))}getConfig(){const e={padding:this.padding,dataFormat:this.dataFormat},n=super.getConfig();return Object.assign(e,n),e}}U1.className="ZeroPadding2D";R(U1);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function eu(t,e,n,r,s,i){return A(()=>{je(s),rw(i),Ht(r),n==null&&(n=[1,1]),r==null&&(r="valid"),s==null&&(s=Nn()),i==null&&(i="max"),t=rd(t,s);let o;const a=r==="same"?"same":"valid";return i==="max"?o=_N(t,e,n,a):o=rI(t,e,n,a),s==="channelsFirst"&&(o=ce(o,[0,3,1,2])),o})}function W1(t,e,n,r,s,i){return A(()=>{je(s),rw(i),Ht(r),n==null&&(n=[1,1,1]),r==null&&(r="valid"),s==null&&(s=Nn()),i==null&&(i="max"),t=o1(t,s);let o;const a=r==="same"?"same":"valid";return i==="max"?o=LN(t,e,n,a):o=iI(t,e,n,a),s==="channelsFirst"&&(o=ce(o,[0,4,1,2,3])),o})}class j1 extends ue{constructor(e){if(e.poolSize==null&&(e.poolSize=2),super(e),typeof e.poolSize=="number")this.poolSize=[e.poolSize];else if(Array.isArray(e.poolSize)&&e.poolSize.length===1&&typeof e.poolSize[0]=="number")this.poolSize=e.poolSize;else throw new I(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.poolSize)}`);if(et(this.poolSize,"poolSize"),e.strides==null)this.strides=this.poolSize;else if(typeof e.strides=="number")this.strides=[e.strides];else if(Array.isArray(e.strides)&&e.strides.length===1&&typeof e.strides[0]=="number")this.strides=e.strides;else throw new I(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.strides)}`);et(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,Ht(this.padding),this.inputSpec=[new qe({ndim:3})]}computeOutputShape(e){e=ye(e);const n=kn(e[1],this.poolSize[0],this.padding,this.strides[0]);return[e[0],n,e[2]]}call(e,n){return A(()=>{this.invokeCallHook(e,n),e=Mo(re(e),2);const r=this.poolingFunction(re(e),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return ai(r,[2])})}getConfig(){const e={poolSize:this.poolSize,padding:this.padding,strides:this.strides},n=super.getConfig();return Object.assign(e,n),e}}class V1 extends j1{constructor(e){super(e)}poolingFunction(e,n,r,s,i){return je(i),Ht(s),eu(e,n,r,s,i,"max")}}V1.className="MaxPooling1D";R(V1);class G1 extends j1{constructor(e){super(e)}poolingFunction(e,n,r,s,i){return je(i),Ht(s),eu(e,n,r,s,i,"avg")}}G1.className="AveragePooling1D";R(G1);class H1 extends ue{constructor(e){if(e.poolSize==null&&(e.poolSize=[2,2]),super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==2)throw new I(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides];et(this.poolSize,"poolSize"),et(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,je(this.dataFormat),Ht(this.padding),this.inputSpec=[new qe({ndim:4})]}computeOutputShape(e){e=ye(e);let n=this.dataFormat==="channelsFirst"?e[2]:e[1],r=this.dataFormat==="channelsFirst"?e[3]:e[2];return n=kn(n,this.poolSize[0],this.padding,this.strides[0]),r=kn(r,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[e[0],e[1],n,r]:[e[0],n,r,e[3]]}call(e,n){return A(()=>(this.invokeCallHook(e,n),this.poolingFunction(re(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},n=super.getConfig();return Object.assign(e,n),e}}class K1 extends H1{constructor(e){super(e)}poolingFunction(e,n,r,s,i){return je(i),Ht(s),eu(e,n,r,s,i,"max")}}K1.className="MaxPooling2D";R(K1);class q1 extends H1{constructor(e){super(e)}poolingFunction(e,n,r,s,i){return je(i),Ht(s),eu(e,n,r,s,i,"avg")}}q1.className="AveragePooling2D";R(q1);class Y1 extends ue{constructor(e){if(e.poolSize==null&&(e.poolSize=[2,2,2]),super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==3)throw new I(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides,e.strides];et(this.poolSize,"poolSize"),et(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,je(this.dataFormat),Ht(this.padding),this.inputSpec=[new qe({ndim:5})]}computeOutputShape(e){e=ye(e);let n=this.dataFormat==="channelsFirst"?e[2]:e[1],r=this.dataFormat==="channelsFirst"?e[3]:e[2],s=this.dataFormat==="channelsFirst"?e[4]:e[3];return n=kn(n,this.poolSize[0],this.padding,this.strides[0]),r=kn(r,this.poolSize[1],this.padding,this.strides[1]),s=kn(s,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[e[0],e[1],n,r,s]:[e[0],n,r,s,e[4]]}call(e,n){return A(()=>(this.invokeCallHook(e,n),this.poolingFunction(re(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},n=super.getConfig();return Object.assign(e,n),e}}class X1 extends Y1{constructor(e){super(e)}poolingFunction(e,n,r,s,i){return je(i),Ht(s),W1(e,n,r,s,i,"max")}}X1.className="MaxPooling3D";R(X1);class J1 extends Y1{constructor(e){super(e)}poolingFunction(e,n,r,s,i){return je(i),Ht(s),W1(e,n,r,s,i,"avg")}}J1.className="AveragePooling3D";R(J1);class Z1 extends ue{constructor(e){super(e),this.inputSpec=[new qe({ndim:3})]}computeOutputShape(e){return[e[0],e[2]]}call(e,n){throw new ne}}class Q1 extends Z1{constructor(e){super(e||{})}call(e,n){return A(()=>{const r=re(e);return Ge(r,1)})}}Q1.className="GlobalAveragePooling1D";R(Q1);class eb extends Z1{constructor(e){super(e||{})}call(e,n){return A(()=>{const r=re(e);return er(r,1)})}}eb.className="GlobalMaxPooling1D";R(eb);class tb extends ue{constructor(e){super(e),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,je(this.dataFormat),this.inputSpec=[new qe({ndim:4})]}computeOutputShape(e){return e=e,this.dataFormat==="channelsLast"?[e[0],e[3]]:[e[0],e[1]]}call(e,n){throw new ne}getConfig(){const e={dataFormat:this.dataFormat},n=super.getConfig();return Object.assign(e,n),e}}class nb extends tb{call(e,n){return A(()=>{const r=re(e);return this.dataFormat==="channelsLast"?Ge(r,[1,2]):Ge(r,[2,3])})}}nb.className="GlobalAveragePooling2D";R(nb);class rb extends tb{call(e,n){return A(()=>{const r=re(e);return this.dataFormat==="channelsLast"?er(r,[1,2]):er(r,[2,3])})}}rb.className="GlobalMaxPooling2D";R(rb);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class sb extends ue{constructor(e){super(e),this.layer=e.layer}build(e){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(e){this.layer!=null&&(this.layer.trainable=e)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(e){this.layer.setWeights(e)}getConfig(){const e={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},n=super.getConfig();return Object.assign(e,n),e}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(e)}static fromConfig(e,n,r={}){const s=n.layer,i=Vn(s,r);delete n.layer;const o={layer:i};return Object.assign(o,n),new e(o)}}class ib extends sb{constructor(e){super(e),this.supportsMasking=!0}build(e){if(e=ye(e),e.length<3)throw new I(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(e)}`);this.inputSpec=[{shape:e}];const n=[e[0]].concat(e.slice(2));this.layer.built||(this.layer.build(n),this.layer.built=!0),super.build(e)}computeOutputShape(e){e=ye(e);const n=[e[0]].concat(e.slice(2)),r=this.layer.computeOutputShape(n),s=e[1];return[r[0],s].concat(r.slice(1))}call(e,n){return A(()=>(e=re(e),m1((o,a)=>[re(this.layer.call(o,n)),[]],e,[],!1,null,null,!1,!0)[1]))}}ib.className="TimeDistributed";R(ib);function p3(t){ws(CA,"BidirectionalMergeMode",t)}const m3="concat";class ob extends sb{constructor(e){super(e);const n=e.layer.getConfig(),r={};r.className=e.layer.getClassName(),r.config=n,this.forwardLayer=Vn(r),n.goBackwards=n.goBackwards!==!0;const s={};if(s.className=e.layer.getClassName(),s.config=n,this.backwardLayer=Vn(s),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=e.mergeMode===void 0?m3:e.mergeMode,p3(this.mergeMode),e.weights)throw new ne("weights support is not implemented for Bidirectional layer yet.");this._stateful=e.layer.stateful,this.returnSequences=e.layer.returnSequences,this.returnState=e.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=e.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(e){this._trainable=e,this.forwardLayer!=null&&(this.forwardLayer.trainable=e),this.backwardLayer!=null&&(this.backwardLayer.trainable=e)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(e){const n=e.length,r=Math.floor(n/2);this.forwardLayer.setWeights(e.slice(0,r)),this.backwardLayer.setWeights(e.slice(r))}computeOutputShape(e){let n=this.forwardLayer.computeOutputShape(e);Array.isArray(n)&&Array.isArray(n[0])||(n=[n]),n=n;let r,s,i;return this.returnState&&(i=n.slice(1)),r=n[0],r=r,this.mergeMode==="concat"?(r[r.length-1]*=2,s=[r]):this.mergeMode==null?s=[r,r.slice()]:s=[r],this.returnState?this.mergeMode==null?s.concat(i).concat(i.slice()):[r].concat(i).concat(i.slice()):xt(s)}apply(e,n){let r=n==null?null:n.initialState,s=n==null?null:n.constants;n==null&&(n={});const i=p1(e,r,s,this.numConstants);if(e=i.inputs,r=i.initialState,s=i.constants,Array.isArray(e)&&(r=e.slice(1),e=e[0]),(r==null||r.length===0)&&s==null)return super.apply(e,n);const o=[],a=[];if(r!=null){const u=r.length;if(u%2>0)throw new I("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");n.initialState=r,o.push(...r);const c=r.map(h=>new qe({shape:h.shape}));this.forwardLayer.stateSpec=c.slice(0,u/2),this.backwardLayer.stateSpec=c.slice(u/2),a.push(...c)}if(s!=null)throw new ne("Support for constants in Bidirectional layers is not implemented yet.");const l=o[0]instanceof Pn;for(const u of o)if(u instanceof Pn!==l)throw new I("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(l){const u=[e].concat(o),c=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=c;const f=super.apply(u,n);return this.inputSpec=h,f}else return super.apply(e,n)}call(e,n){return A(()=>{const r=n.initialState;let s,i;if(r==null)s=this.forwardLayer.call(e,n),i=this.backwardLayer.call(e,n);else{const l=r.slice(0,r.length/2),u=r.slice(r.length/2);s=this.forwardLayer.call(e,Object.assign(n,{initialState:l})),i=this.backwardLayer.call(e,Object.assign(n,{initialState:u}))}let o;this.returnState&&(Array.isArray(s)&&(o=s.slice(1).concat(i.slice(1))),s=s[0],i=i[0]),this.returnSequences&&(i=il(i,1));let a;return this.mergeMode==="concat"?a=jf([s,i]):this.mergeMode==="sum"?a=P(s,i):this.mergeMode==="ave"?a=T(.5,P(s,i)):this.mergeMode==="mul"?a=T(s,i):this.mergeMode==null&&(a=[s,i]),this.returnState?this.mergeMode==null?a.concat(o):[a].concat(o):a})}resetStates(e){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(e){es(this.forwardLayer.name,()=>{this.forwardLayer.build(e)}),es(this.backwardLayer.name,()=>{this.backwardLayer.build(e)}),this.built=!0}computeMask(e,n){Array.isArray(n)&&(n=n[0]);let r;if(this.returnSequences?this.mergeMode==null?r=[n,n]:r=n:this.mergeMode==null?r=[null,null]:r=null,this.returnState){const i=this.forwardLayer.states.map(o=>null);return Array.isArray(r)?r.concat(i).concat(i):[r].concat(i).concat(i)}else return r}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(e),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(e)}getConfig(){const e={mergeMode:this.mergeMode},n=super.getConfig();return Object.assign(e,n),e}static fromConfig(e,n){const r=Vn(n.layer);if(delete n.layer,n.numConstants!=null)throw new ne("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const s=n;return s.layer=r,new e(s)}}ob.className="Bidirectional";R(ob);/**
 * @license
 * Copyright 2022 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class ab extends ue{constructor(e){super(e),this.scale=e.scale,e.offset?this.offset=e.offset:this.offset=0}getConfig(){const e={scale:this.scale,offset:this.offset},n=super.getConfig();return Object.assign(e,n),e}call(e,n){return A(()=>(e=re(e),e.dtype!=="float32"&&(e=zo(e,"float32")),P(T(e,this.scale),this.offset)))}}ab.className="Rescaling";R(ab);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function g3(t){return new ud(t)}/**
    * @license
    * Copyright 2021 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var lb=function(t,e){return(lb=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var s in r)r.hasOwnProperty(s)&&(n[s]=r[s])})(t,e)};function y3(t,e){function n(){this.constructor=t}lb(t,e),t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var ih=function(){return(ih=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};function Me(t,e,n,r){return new(n||(n=Promise))(function(s,i){function o(u){try{l(r.next(u))}catch(c){i(c)}}function a(u){try{l(r.throw(u))}catch(c){i(c)}}function l(u){var c;u.done?s(u.value):(c=u.value,c instanceof n?c:new n(function(h){h(c)})).then(o,a)}l((r=r.apply(t,e||[])).next())})}function _e(t,e){var n,r,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(l){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&c[0]?r.return:c[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;switch(r=0,s&&(c=[2&c[0],s.value]),c[0]){case 0:case 1:s=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(s=(s=o.trys).length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){o=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){o.label=c[1];break}if(c[0]===6&&o.label<s[1]){o.label=s[1],s=c;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(c);break}s[2]&&o.ops.pop(),o.trys.pop();continue}c=e.call(t,o)}catch(h){c=[6,h],r=0}finally{n=s=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([l,u])}}}function kt(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function cd(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r,s,i=n.call(t),o=[];try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(a){s={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(s)throw s.error}}return o}function Xi(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(cd(arguments[e]));return t}function v3(t){return Me(this,void 0,void 0,function(){var e,n,r,s,i,o,a;return _e(this,function(l){switch(l.label){case 0:return e="http://",n="https://",r="file://",t.indexOf(e)!==0&&t.indexOf(n)!==0?[3,3]:[4,fetch(t)];case 1:return[4,l.sent().json()];case 2:return[2,l.sent()];case 3:return t.indexOf(r)!==0?[3,5]:(s=require("fs"),s.readFile,a=(o=JSON).parse,[4,i(t.slice(r.length),{encoding:"utf-8"})]);case 4:return[2,a.apply(o,[l.sent()])];case 5:throw new Error("Unsupported URL scheme in metadata URL: "+t+". Supported schemes are: http://, https://, and (node.js-only) file://")}})})}var qs=null;function ko(t){return qs==null&&(qs=gf().epsilon()),A(function(){var e=Do(t),n=e.mean,r=e.variance;return J(te(t,n),P(vt(r),qs))})}function w3(t){if(t.length<2)throw new Error("Cannot normalize a Float32Array with fewer than 2 elements.");return qs==null&&(qs=gf().epsilon()),A(function(){var e=Do(ct(t)),n=e.mean,r=e.variance,s=n.arraySync(),i=Math.sqrt(r.arraySync()),o=Array.from(t).map(function(a){return(a-s)/(i+qs)});return new Float32Array(o)})}function b3(){return window.AudioContext||window.webkitAudioContext}function k3(t){return Me(this,void 0,void 0,function(){return _e(this,function(e){return[2,navigator.mediaDevices.getUserMedia({audio:t==null||t,video:!1})]})})}var oh=function(){function t(e){var n=this;if(e==null)throw new Error("Required configuration object is missing for BrowserFftFeatureExtractor constructor");if(e.spectrogramCallback==null)throw new Error("spectrogramCallback cannot be null or undefined");if(!(e.numFramesPerSpectrogram>0))throw new Error("Invalid value in numFramesPerSpectrogram: "+e.numFramesPerSpectrogram);if(e.suppressionTimeMillis<0)throw new Error("Expected suppressionTimeMillis to be >= 0, but got "+e.suppressionTimeMillis);if(this.suppressionTimeMillis=e.suppressionTimeMillis,this.spectrogramCallback=e.spectrogramCallback,this.numFrames=e.numFramesPerSpectrogram,this.sampleRateHz=e.sampleRateHz||44100,this.fftSize=e.fftSize||1024,this.frameDurationMillis=this.fftSize/this.sampleRateHz*1e3,this.columnTruncateLength=e.columnTruncateLength||this.fftSize,this.overlapFactor=e.overlapFactor,this.includeRawAudio=e.includeRawAudio,b(this.overlapFactor>=0&&this.overlapFactor<1,function(){return"Expected overlapFactor to be >= 0 and < 1, but got "+n.overlapFactor}),this.columnTruncateLength>this.fftSize)throw new Error("columnTruncateLength "+this.columnTruncateLength+" exceeds fftSize ("+this.fftSize+").");this.audioContextConstructor=b3()}return t.prototype.start=function(e){return Me(this,void 0,void 0,function(){var n,r,s;return _e(this,function(i){switch(i.label){case 0:if(this.frameIntervalTask!=null)throw new Error("Cannot start already-started BrowserFftFeatureExtractor");return n=this,[4,k3(e)];case 1:return n.stream=i.sent(),this.audioContext=new this.audioContextConstructor({sampleRate:this.sampleRateHz}),r=this.audioContext.createMediaStreamSource(this.stream),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=2*this.fftSize,this.analyser.smoothingTimeConstant=0,r.connect(this.analyser),this.freqDataQueue=[],this.freqData=new Float32Array(this.fftSize),this.includeRawAudio&&(this.timeDataQueue=[],this.timeData=new Float32Array(this.fftSize)),s=Math.max(1,Math.round(this.numFrames*(1-this.overlapFactor))),this.tracker=new x3(s,Math.round(this.suppressionTimeMillis/this.frameDurationMillis)),this.frameIntervalTask=setInterval(this.onAudioFrame.bind(this),this.fftSize/this.sampleRateHz*1e3),[2]}})})},t.prototype.onAudioFrame=function(){return Me(this,void 0,void 0,function(){var e,n,r,s;return _e(this,function(i){switch(i.label){case 0:return this.analyser.getFloatFrequencyData(this.freqData),this.freqData[0]===-1/0?[2]:(this.freqDataQueue.push(this.freqData.slice(0,this.columnTruncateLength)),this.includeRawAudio&&(this.analyser.getFloatTimeDomainData(this.timeData),this.timeDataQueue.push(this.timeData.slice())),this.freqDataQueue.length>this.numFrames&&this.freqDataQueue.shift(),this.tracker.tick()?(e=Sm(this.freqDataQueue),n=Em(e,[1,this.numFrames,this.columnTruncateLength,1]),r=void 0,this.includeRawAudio&&(s=Sm(this.timeDataQueue),r=Em(s,[1,this.numFrames*this.fftSize])),[4,this.spectrogramCallback(n,r)]):[3,2]);case 1:i.sent()&&this.tracker.suppress(),ee([n,r]),i.label=2;case 2:return[2]}})})},t.prototype.stop=function(){return Me(this,void 0,void 0,function(){return _e(this,function(e){if(this.frameIntervalTask==null)throw new Error("Cannot stop because there is no ongoing streaming activity.");return clearInterval(this.frameIntervalTask),this.frameIntervalTask=null,this.analyser.disconnect(),this.audioContext.close(),this.stream!=null&&this.stream.getTracks().length>0&&this.stream.getTracks()[0].stop(),[2]})})},t.prototype.setConfig=function(e){throw new Error("setConfig() is not implemented for BrowserFftFeatureExtractor.")},t.prototype.getFeatures=function(){throw new Error("getFeatures() is not implemented for BrowserFftFeatureExtractor. Use the spectrogramCallback field of the constructor config instead.")},t}();function Sm(t){var e=t[0].length,n=new Float32Array(t.length*e);return t.forEach(function(r,s){return n.set(r,s*e)}),n}function Em(t,e){var n=new Float32Array(Et(e));return n.set(t,n.length-t.length),Hs(n,e)}var x3=function(){function t(e,n){var r=this;this.period=e,this.suppressionTime=n??0,this.counter=0,b(this.period>0,function(){return"Expected period to be positive, but got "+r.period})}return t.prototype.tick=function(){return this.counter++,this.counter%this.period==0&&(this.suppressionOnset==null||this.counter-this.suppressionOnset>this.suppressionTime)},t.prototype.suppress=function(){this.suppressionOnset=this.counter},t}();function vl(t){var e=0;t.forEach(function(s){e+=s.byteLength});var n=new Uint8Array(e),r=0;return t.forEach(function(s){n.set(new Uint8Array(s),r),r+=s.byteLength}),n.buffer}function S3(t){var e=0;t.forEach(function(s){return e+=s.length});var n=new Float32Array(e),r=0;return t.forEach(function(s){n.set(s,r),r+=s.length}),n}function Im(t){if(t==null)throw new Error("Received null or undefind string");for(var e=unescape(encodeURIComponent(t)),n=new Uint8Array(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n.buffer}function Nm(t){if(t==null)throw new Error("Received null or undefind buffer");var e=new Uint8Array(t);return decodeURIComponent(escape(String.fromCharCode.apply(String,Xi(e))))}function E3(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}function I3(t,e){return Math.floor((e-t)*Math.random())+t}function N3(t,e,n){return b(n>0&&n<1,function(){return"validationSplit is expected to be >0 and <1, but got "+n}),A(function(){for(var r=si(e,-1).dataSync(),s=[],i=0;i<r.length;++i){var o=r[i];s[o]==null&&(s[o]=[]),s[o].push(i)}var a=s.length,l=[],u=[];for(s.map(function(d){return mo(d)}),i=0;i<a;++i)for(var c=s[i],h=Math.round(c.length*(1-n)),f=0;f<c.length;++f)f<h?l.push(c[f]):u.push(c[f]);return{trainXs:Ps(t,l),trainYs:Ps(e,l),valXs:Ps(t,u),valYs:Ps(e,u)}})}function T3(t,e,n){var r,s,i,o,a,l,u,c;b(n>0&&n<1,function(){return"validationSplit is expected to be >0 and <1, but got "+n});for(var h=!Array.isArray(t[0]),f=e,d=[],p=0;p<f.length;++p){var y=f[p];d[y]==null&&(d[y]=[]),d[y].push(p)}var w=d.length,g=[],m=[];for(d.map(function(x){return mo(x)}),p=0;p<w;++p)for(var v=d[p],k=Math.round(v.length*(1-n)),S=0;S<v.length;++S)S<k?g.push(v[S]):m.push(v[S]);if(h){var C=[],z=[],$=[],F=[];try{for(var L=kt(g),W=L.next();!W.done;W=L.next()){var K=W.value;C.push(t[K]),z.push(e[K])}}catch(x){r={error:x}}finally{try{W&&!W.done&&(s=L.return)&&s.call(L)}finally{if(r)throw r.error}}try{for(var Z=kt(m),se=Z.next();!se.done;se=Z.next())K=se.value,$.push(t[K]),F.push(e[K])}catch(x){i={error:x}}finally{try{se&&!se.done&&(o=Z.return)&&o.call(Z)}finally{if(i)throw i.error}}return{trainXs:C,trainYs:z,valXs:$,valYs:F}}C=[],z=[],$=[],F=[];try{for(var ie=kt(g),oe=ie.next();!oe.done;oe=ie.next())K=oe.value,C.push(t[K]),z.push(e[K])}catch(x){a={error:x}}finally{try{oe&&!oe.done&&(l=ie.return)&&l.call(ie)}finally{if(a)throw a.error}}try{for(var ae=kt(m),E=ae.next();!E.done;E=ae.next())K=E.value,$.push(t[K]),F.push(e[K])}catch(x){u={error:x}}finally{try{E&&!E.done&&(c=ae.return)&&c.call(ae)}finally{if(u)throw u.error}}return{trainXs:C,trainYs:z,valXs:$,valYs:F}}var Ca="TFJSSCDS",C3=1,Ys="_background_noise_",Tm=function(){function t(e){if(this.examples={},this.label2Ids={},e!=null)for(var n=z3(e),r=0,s=0;s<n.manifest.length;++s){var i=n.manifest[s],o=i.spectrogramNumFrames*i.spectrogramFrameSize;i.rawAudioNumSamples!=null&&(o+=i.rawAudioNumSamples),o*=4,this.addExample(D3({spec:i,data:n.data.slice(r,r+o)})),r+=o}}return t.prototype.addExample=function(e){b(e!=null,function(){return"Got null or undefined example"}),b(e.label!=null&&e.label.length>0,function(){return"Expected label to be a non-empty string, but got "+JSON.stringify(e.label)});var n=E3();return this.examples[n]=e,e.label in this.label2Ids||(this.label2Ids[e.label]=[]),this.label2Ids[e.label].push(n),n},t.prototype.merge=function(e){var n,r,s,i;b(e!==this,function(){return"Cannot merge a dataset into itself"});var o=e.getVocabulary();try{for(var a=kt(o),l=a.next();!l.done;l=a.next()){var u=l.value,c=e.getExamples(u);try{for(var h=(s=void 0,kt(c)),f=h.next();!f.done;f=h.next()){var d=f.value;this.addExample(d.example)}}catch(p){s={error:p}}finally{try{f&&!f.done&&(i=h.return)&&i.call(h)}finally{if(s)throw s.error}}}}catch(p){n={error:p}}finally{try{l&&!l.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}},t.prototype.getExampleCounts=function(){var e={};for(var n in this.examples){var r=this.examples[n];r.label in e||(e[r.label]=0),e[r.label]++}return e},t.prototype.getExamples=function(e){var n=this;b(e!=null,function(){return"Expected label to be a string, but got "+JSON.stringify(e)}),b(e in this.label2Ids,function(){return'No example of label "'+e+'" exists in dataset'});var r=[];return this.label2Ids[e].forEach(function(s){r.push({uid:s,example:n.examples[s]})}),r},t.prototype.getData=function(e,n){var r=this;b(this.size()>0,function(){return"Cannot get spectrograms as tensors because the dataset is empty"});var s=this.getVocabulary();e!=null?b(s.indexOf(e)!==-1,function(){return"Label "+e+" is not in the vocabulary ("+JSON.stringify(s)+")"}):b(s.length>1,function(){return"One-hot encoding of labels requires the vocabulary to have at least two words, but it has only "+s.length+" word."}),n==null&&(n={});var i,o,a=this.getSortedUniqueNumFrames();a.length===1?(i=n.numFrames==null?a[0]:n.numFrames,o=n.hopFrames==null?1:n.hopFrames):(i=n.numFrames,b(i!=null&&Number.isInteger(i)&&i>0,function(){return"There are "+a.length+" unique lengths among the "+r.size()+" examples of this Dataset, hence numFrames is required. But it is not provided."}),b(i<=a[0],function(){return"numFrames ("+i+") exceeds the minimum numFrames ("+a[0]+") among the examples of the Dataset."}),o=n.hopFrames,b(o!=null&&Number.isInteger(o)&&o>0,function(){return"There are "+a.length+" unique lengths among the "+r.size()+" examples of this Dataset, hence hopFrames is required. But it is not provided."}));var l=n.normalize==null||n.normalize;return A(function(){for(var u,c,h,f=[],d=[],p=[],y=0;y<s.length;++y){var w=s[y];if(e==null||w===e){var g=r.label2Ids[w],m=function(U){var X,q,Q=r.examples[U].spectrogram,he=Q.frameSize;h==null?h=he:b(he===h,function(){return"Mismatch in frameSize  ("+he+" vs "+h+")"});var ze=Q.data.length/he,be=null;w!==Ys&&(be=Q.keyFrameIndex==null?F3(Q).dataSync()[0]:Q.keyFrameIndex);var Re=Mu(Q.data,[ze,he,1]),ot=M3(ze,be,i,o),fe=function(lt){var Kt=A(function(){var An=Ne(Re,[lt[0],0,0],[lt[1]-lt[0],-1,-1]);return l?ko(An):An});n.getDataset?d.push(Kt.dataSync()):f.push(Kt),e==null&&p.push(y)};try{for(var Dt=(X=void 0,kt(ot)),at=Dt.next();!at.done;at=Dt.next())fe(at.value)}catch(lt){X={error:lt}}finally{try{at&&!at.done&&(q=Dt.return)&&q.call(Dt)}finally{if(X)throw X.error}}ee(Re)};try{for(var v=(u=void 0,kt(g)),k=v.next();!k.done;k=v.next())m(k.value)}catch(U){u={error:U}}finally{try{k&&!k.done&&(c=v.return)&&c.call(v)}finally{if(u)throw u.error}}}}n.augmentByMixingNoiseRatio!=null&&r.augmentByMixingNoise(n.getDataset?d:f,p,n.augmentByMixingNoiseRatio);var S=n.shuffle==null||n.shuffle;if(n.getDataset){var C=n.datasetBatchSize==null?32:n.datasetBatchSize,z=n.datasetValidationSplit==null?.15:n.datasetValidationSplit;b(z>0&&z<1,function(){return"Invalid dataset validation split: "+z});var $=d.map(function(U,X){return[U,p[X]]});mo($),d=$.map(function(U){return U[0]});var F=$.map(function(U){return U[1]}),L=T3(d,F,z),W=L.trainXs,K=L.trainYs,Z=L.valXs,se=L.valYs,ie=ia(W).map(function(U){return Mu(U,[i,h,1])}),oe=ia(K).map(function(U){return ai(Na([U],s.length),[0])}),ae=Xp({xs:ie,ys:oe});S&&(ae=ae.shuffle(d.length)),ae=ae.batch(C).prefetch(4);var E=ia(Z).map(function(U){return Mu(U,[i,h,1])}),x=ia(se).map(function(U){return ai(Na([U],s.length),[0])}),O=Xp({xs:E,ys:x});return[ae,O=O.batch(C).prefetch(4)]}if(S){var j=[];f.forEach(function(U,X){j.push({x:U,y:p[X]})}),mo(j),f=j.map(function(U){return U.x}),p=j.map(function(U){return U.y})}var V=e==null?H(Na(ct(p,"int32"),s.length),"float32"):void 0;return{xs:zr(f),ys:V}})},t.prototype.augmentByMixingNoise=function(e,n,r){var s,i;if(e==null||e.length===0)throw new Error("Cannot perform augmentation because data is null or empty");for(var o=e[0]instanceof Float32Array,a=this.getVocabulary(),l=[],u=[],c=0;c<n.length;++c)a[n[c]]===Ys?l.push(c):u.push(c);if(l.length===0)throw new Error("Cannot perform augmentation by mixing with noise when there is no example with label "+Ys);var h=[],f=[],d=function(w){var g=l[I3(0,l.length)],m=o?ct(e[w]):e[w],v=o?ct(e[g]):e[g],k=A(function(){return ko(P(m,T(v,r)))});o?h.push(k.dataSync()):h.push(k),f.push(n[w])};try{for(var p=kt(u),y=p.next();!y.done;y=p.next())d(y.value)}catch(w){s={error:w}}finally{try{y&&!y.done&&(i=p.return)&&i.call(p)}finally{if(s)throw s.error}}console.log("Data augmentation: mixing noise: added "+h.length+" examples"),h.forEach(function(w){return e.push(w)}),n.push.apply(n,Xi(f))},t.prototype.getSortedUniqueNumFrames=function(){for(var e,n,r=new Set,s=this.getVocabulary(),i=0;i<s.length;++i){var o=s[i],a=this.label2Ids[o];try{for(var l=(e=void 0,kt(a)),u=l.next();!u.done;u=l.next()){var c=u.value,h=this.examples[c].spectrogram,f=h.data.length/h.frameSize;r.add(f)}}catch(p){e={error:p}}finally{try{u&&!u.done&&(n=l.return)&&n.call(l)}finally{if(e)throw e.error}}}var d=Xi(r);return d.sort(),d},t.prototype.removeExample=function(e){if(!(e in this.examples))throw new Error("Nonexistent example UID: "+e);var n=this.examples[e].label;delete this.examples[e];var r=this.label2Ids[n].indexOf(e);this.label2Ids[n].splice(r,1),this.label2Ids[n].length===0&&delete this.label2Ids[n]},t.prototype.setExampleKeyFrameIndex=function(e,n){if(!(e in this.examples))throw new Error("Nonexistent example UID: "+e);var r=this.examples[e].spectrogram,s=r.data.length/r.frameSize;b(n>=0&&n<s&&Number.isInteger(n),function(){return"Invalid keyFrameIndex: "+n+". Must be >= 0, < "+s+", and an integer."}),r.keyFrameIndex=n},t.prototype.size=function(){return Object.keys(this.examples).length},t.prototype.durationMillis=function(){var e=0;for(var n in this.examples){var r=this.examples[n].spectrogram,s=23.22|r.frameDurationMillis;e+=r.data.length/r.frameSize*s}return e},t.prototype.empty=function(){return this.size()===0},t.prototype.clear=function(){this.examples={}},t.prototype.getVocabulary=function(){var e=new Set;for(var n in this.examples){var r=this.examples[n];e.add(r.label)}var s=Xi(e);return s.sort(),s},t.prototype.serialize=function(e){var n,r,s,i,o=this.getVocabulary();b(!this.empty(),function(){return"Cannot serialize empty Dataset"}),e!=null&&(Array.isArray(e)||(e=[e]),e.forEach(function(g){if(o.indexOf(g)===-1)throw new Error('Word label "'+g+'" does not exist in the vocabulary of this dataset. The vocabulary is: '+JSON.stringify(o)+".")}));var a=[],l=[];try{for(var u=kt(o),c=u.next();!c.done;c=u.next()){var h=c.value;if(e==null||e.indexOf(h)!==-1){var f=this.label2Ids[h];try{for(var d=(s=void 0,kt(f)),p=d.next();!p.done;p=d.next()){var y=p.value,w=A3(this.examples[y]);a.push(w.spec),l.push(w.data)}}catch(g){s={error:g}}finally{try{p&&!p.done&&(i=d.return)&&i.call(d)}finally{if(s)throw s.error}}}}}catch(g){n={error:g}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}return $3({manifest:a,data:vl(l)})},t}();function A3(t){var e=t.rawAudio!=null,n={label:t.label,spectrogramNumFrames:t.spectrogram.data.length/t.spectrogram.frameSize,spectrogramFrameSize:t.spectrogram.frameSize};t.spectrogram.keyFrameIndex!=null&&(n.spectrogramKeyFrameIndex=t.spectrogram.keyFrameIndex);var r=t.spectrogram.data.buffer.slice(0);return e&&(n.rawAudioNumSamples=t.rawAudio.data.length,n.rawAudioSampleRateHz=t.rawAudio.sampleRateHz,r=vl([r,t.rawAudio.data.buffer])),{spec:n,data:r}}function D3(t){var e={frameSize:t.spec.spectrogramFrameSize,data:new Float32Array(t.data.slice(0,4*t.spec.spectrogramFrameSize*t.spec.spectrogramNumFrames))};t.spec.spectrogramKeyFrameIndex!=null&&(e.keyFrameIndex=t.spec.spectrogramKeyFrameIndex);var n={label:t.spec.label,spectrogram:e};return t.spec.rawAudioNumSamples!=null&&(n.rawAudio={sampleRateHz:t.spec.rawAudioSampleRateHz,data:new Float32Array(t.data.slice(4*t.spec.spectrogramFrameSize*t.spec.spectrogramNumFrames))}),n}function $3(t){var e=Im(JSON.stringify(t.manifest)),n=Im(Ca),r=new Uint32Array([C3]),s=new Uint32Array([e.byteLength]);return vl([vl([n,r.buffer,s.buffer]),e,t.data])}function z3(t){b(t!=null,function(){return"Received null or undefined buffer"});var e=0,n=Nm(t.slice(e,Ca.length));b(n===Ca,function(){return"Deserialization error: Invalid descriptor"}),e+=Ca.length,e+=4;var r=new Uint32Array(t,e,1),s=e+=4;e=s+r[0];var i=Nm(t.slice(s,e));return{manifest:JSON.parse(i),data:t.slice(e)}}function M3(t,e,n,r){if(b(Number.isInteger(t)&&t>0,function(){return"snippetLength must be a positive integer, but got "+t}),e!=null&&b(Number.isInteger(e)&&e>=0,function(){return"focusIndex must be a non-negative integer, but got "+e}),b(Number.isInteger(n)&&n>0,function(){return"windowLength must be a positive integer, but got "+n}),b(Number.isInteger(r)&&r>0,function(){return"windowHop must be a positive integer, but got "+r}),b(n<=t,function(){return"windowLength ("+n+") exceeds snippetLength ("+t+")"}),b(e<t,function(){return"focusIndex ("+e+") equals or exceeds snippetLength ("+t+")"}),n===t)return[[0,t]];var s=[];if(e==null){for(var i=0;i+n<=t;)s.push([i,i+n]),i+=r;return s}var o=Math.floor(n/2),a=e-o;for(a<0?a=0:a+n>t&&(a=t-n);!(a-r<0||e>=a-r+n);)a-=r;for(;a+n<=t&&!(e<a);)s.push([a,a+n]),a+=r;return s}function _3(t){return A(function(){var e=t.data.length/t.frameSize,n=Ta(t.data,[e,t.frameSize]);return Ge(n,-1)})}function F3(t){return A(function(){return si(_3(t))})}var ub="0.5.4",L3="_unknown_",Pu="tfjs-speech-commands-saved-model-metadata",R3="indexeddb://tfjs-speech-commands-model/",Bu={localStorage:typeof window>"u"?null:window.localStorage};function O3(t){return t.split(".").slice(0,2).join(".")}var ca=.25,cb=function(){function t(e,n,r){this.MODEL_URL_PREFIX="https://storage.googleapis.com/tfjs-models/tfjs/speech-commands/v"+O3(ub)+"/browser_fft",this.SAMPLE_RATE_HZ=44100,this.FFT_SIZE=1024,this.DEFAULT_SUPPRESSION_TIME_MILLIS=0,this.streaming=!1,this.transferRecognizers={},b(n==null&&r==null||n!=null&&r!=null,function(){return"modelURL and metadataURL must be both provided or both not provided."}),n==null?(e==null?e=t.DEFAULT_VOCABULARY_NAME:b(t.VALID_VOCABULARY_NAMES.indexOf(e)!==-1,function(){return"Invalid vocabulary name: '"+e+"'"}),this.vocabulary=e,this.modelArtifactsOrURL=this.MODEL_URL_PREFIX+"/"+this.vocabulary+"/model.json",this.metadataOrURL=this.MODEL_URL_PREFIX+"/"+this.vocabulary+"/metadata.json"):(b(e==null,function(){return"vocabulary name must be null or undefined when modelURL is provided"}),this.modelArtifactsOrURL=n,this.metadataOrURL=r),this.parameters={sampleRateHz:this.SAMPLE_RATE_HZ,fftSize:this.FFT_SIZE}}return t.prototype.listen=function(e,n){return Me(this,void 0,void 0,function(){var r,s,i,o,a,l=this;return _e(this,function(u){switch(u.label){case 0:if(this.streaming)throw new Error("Cannot start streaming again when streaming is ongoing.");return[4,this.ensureModelLoaded()];case 1:if(u.sent(),n==null&&(n={}),r=n.probabilityThreshold==null?0:n.probabilityThreshold,n.includeEmbedding&&(r=0),b(r>=0&&r<=1,function(){return"Invalid probabilityThreshold value: "+r}),s=n.invokeCallbackOnNoiseAndUnknown!=null&&n.invokeCallbackOnNoiseAndUnknown,n.includeEmbedding&&(s=!0),n.suppressionTimeMillis<0)throw new Error("suppressionTimeMillis is expected to be >= 0, but got "+n.suppressionTimeMillis);return i=n.overlapFactor==null?.5:n.overlapFactor,b(i>=0&&i<1,function(){return"Expected overlapFactor to be >= 0 and < 1, but got "+i}),o=function(c,h){return Me(l,void 0,void 0,function(){var f,d,p,y,w,g,m,v,k,S,C;return _e(this,function(z){switch(z.label){case 0:return f=ko(c),n.includeEmbedding?[4,this.ensureModelWithEmbeddingOutputCreated()]:[3,2];case 1:return z.sent(),C=cd(this.modelWithEmbeddingOutput.predict(f),2),d=C[0],p=C[1],[3,3];case 2:d=this.model.predict(f),z.label=3;case 3:return[4,d.data()];case 4:return y=z.sent(),[4,(w=d.argMax(-1)).data()];case 5:return g=z.sent()[0],m=Math.max.apply(Math,Xi(y)),ee([d,w,f]),m<r?[2,!1]:[3,6];case 6:return v=void 0,n.includeSpectrogram?(k={},[4,c.data()]):[3,8];case 7:k.data=z.sent(),k.frameSize=this.nonBatchInputShape[1],v=k,z.label=8;case 8:return S=!0,s||this.words[g]!==Ys&&this.words[g]!==L3||(S=!1),S&&e({scores:y,spectrogram:v,embedding:p}),[2,S]}})})},a=n.suppressionTimeMillis==null?this.DEFAULT_SUPPRESSION_TIME_MILLIS:n.suppressionTimeMillis,this.audioDataExtractor=new oh({sampleRateHz:this.parameters.sampleRateHz,numFramesPerSpectrogram:this.nonBatchInputShape[0],columnTruncateLength:this.nonBatchInputShape[1],suppressionTimeMillis:a,spectrogramCallback:o,overlapFactor:i}),[4,this.audioDataExtractor.start(n.audioTrackConstraints)];case 2:return u.sent(),this.streaming=!0,[2]}})})},t.prototype.ensureModelLoaded=function(){return Me(this,void 0,void 0,function(){var e,n,r,s,i=this;return _e(this,function(o){switch(o.label){case 0:return this.model!=null?[2]:[4,this.ensureMetadataLoaded()];case 1:return o.sent(),typeof this.modelArtifactsOrURL!="string"?[3,3]:[4,sh(this.modelArtifactsOrURL)];case 2:return e=o.sent(),[3,5];case 3:return[4,sh(DE(this.modelArtifactsOrURL.modelTopology,this.modelArtifactsOrURL.weightSpecs,this.modelArtifactsOrURL.weightData))];case 4:e=o.sent(),o.label=5;case 5:if(e.inputs.length!==1)throw new Error("Expected model to have 1 input, but got a model with "+e.inputs.length+" inputs");if(e.inputs[0].shape.length!==4)throw new Error("Expected model to have an input shape of rank 4, but got an input shape of rank "+e.inputs[0].shape.length);if(e.inputs[0].shape[3]!==1)throw new Error("Expected model to have an input shape with 1 as the last dimension, but got input shape"+JSON.stringify(e.inputs[0].shape[3])+"}");if((n=e.outputShape).length!==2)throw new Error("Expected loaded model to have an output shape of rank 2,but received shape "+JSON.stringify(n));if(n[1]!==this.words.length)throw new Error("Mismatch between the last dimension of model's output shape ("+n[1]+") and number of words ("+this.words.length+").");return this.model=e,this.freezeModel(),this.nonBatchInputShape=e.inputs[0].shape.slice(1),this.elementsPerExample=1,e.inputs[0].shape.slice(1).forEach(function(a){return i.elementsPerExample*=a}),this.warmUpModel(),r=this.parameters.fftSize/this.parameters.sampleRateHz*1e3,s=e.inputs[0].shape[1],this.parameters.spectrogramDurationMillis=s*r,[2]}})})},t.prototype.ensureModelWithEmbeddingOutputCreated=function(){return Me(this,void 0,void 0,function(){var e,n;return _e(this,function(r){switch(r.label){case 0:return this.modelWithEmbeddingOutput!=null?[2]:[4,this.ensureModelLoaded()];case 1:for(r.sent(),n=this.model.layers.length-2;n>=0;--n)if(this.model.layers[n].getClassName()==="Dense"){e=this.model.layers[n];break}if(e==null)throw new Error("Failed to find second last dense layer in the original model.");return this.modelWithEmbeddingOutput=Ow({inputs:this.model.inputs,outputs:[this.model.outputs[0],e.output]}),[2]}})})},t.prototype.warmUpModel=function(){var e=this;A(function(){for(var n=rt([1].concat(e.nonBatchInputShape)),r=0;r<3;++r)e.model.predict(n)})},t.prototype.ensureMetadataLoaded=function(){return Me(this,void 0,void 0,function(){var e,n,r;return _e(this,function(s){switch(s.label){case 0:return this.words!=null?[2]:typeof this.metadataOrURL!="string"?[3,2]:[4,v3(this.metadataOrURL)];case 1:return n=s.sent(),[3,3];case 2:n=this.metadataOrURL,s.label=3;case 3:if((e=n).wordLabels==null){if((r=e.words)==null)throw new Error('Cannot find field "words" or "wordLabels" in metadata JSON file');this.words=r}else this.words=e.wordLabels;return[2]}})})},t.prototype.stopListening=function(){return Me(this,void 0,void 0,function(){return _e(this,function(e){switch(e.label){case 0:if(!this.streaming)throw new Error("Cannot stop streaming when streaming is not ongoing.");return[4,this.audioDataExtractor.stop()];case 1:return e.sent(),this.streaming=!1,[2]}})})},t.prototype.isListening=function(){return this.streaming},t.prototype.wordLabels=function(){return this.words},t.prototype.params=function(){return this.parameters},t.prototype.modelInputShape=function(){if(this.model==null)throw new Error("Model has not been loaded yet. Load model by calling ensureModelLoaded(), recognize(), or listen().");return this.model.inputs[0].shape},t.prototype.recognize=function(e,n){return Me(this,void 0,void 0,function(){var r,s,i,o,a,l,u,c,h,f,d,p,y;return _e(this,function(w){switch(w.label){case 0:return n==null&&(n={}),[4,this.ensureModelLoaded()];case 1:return w.sent(),e!=null?[3,3]:[4,this.recognizeOnline()];case 2:r=w.sent(),e=r.data,w.label=3;case 3:if(e instanceof Te)this.checkInputTensorShape(e),i=e,s=e.shape[0];else{if(e.length%this.elementsPerExample)throw new Error("The length of the input Float32Array "+e.length+" is not divisible by the number of tensor elements per per example expected by the model "+this.elementsPerExample+".");s=e.length/this.elementsPerExample,i=OT(e,[s].concat(this.nonBatchInputShape))}return a={scores:null},n.includeEmbedding?[4,this.ensureModelWithEmbeddingOutputCreated()]:[3,5];case 4:return w.sent(),l=this.modelWithEmbeddingOutput.predict(i),o=l[0],a.embedding=l[1],[3,6];case 5:o=this.model.predict(i),w.label=6;case 6:return s!==1?[3,8]:(u=a,[4,o.data()]);case 7:return u.scores=w.sent(),[3,10];case 8:return c=li(o),h=c.map(function(g){return g.data()}),f=a,[4,Promise.all(h)];case 9:f.scores=w.sent(),ee(c),w.label=10;case 10:return n.includeSpectrogram?(d=a,p={},e instanceof Te?[4,e.data()]:[3,12]):[3,14];case 11:return y=w.sent(),[3,13];case 12:y=e,w.label=13;case 13:d.spectrogram=(p.data=y,p.frameSize=this.nonBatchInputShape[1],p),w.label=14;case 14:return ee(o),[2,a]}})})},t.prototype.recognizeOnline=function(){return Me(this,void 0,void 0,function(){var e=this;return _e(this,function(n){return[2,new Promise(function(r,s){e.audioDataExtractor=new oh({sampleRateHz:e.parameters.sampleRateHz,numFramesPerSpectrogram:e.nonBatchInputShape[0],columnTruncateLength:e.nonBatchInputShape[1],suppressionTimeMillis:0,spectrogramCallback:function(i){return Me(e,void 0,void 0,function(){var o,a,l;return _e(this,function(u){switch(u.label){case 0:return o=ko(i),[4,this.audioDataExtractor.stop()];case 1:return u.sent(),a=r,l={},[4,o.data()];case 2:return a.apply(void 0,[(l.data=u.sent(),l.frameSize=this.nonBatchInputShape[1],l)]),o.dispose(),[2,!1]}})})},overlapFactor:0}),e.audioDataExtractor.start()})]})})},t.prototype.createTransfer=function(e){if(this.model==null)throw new Error("Model has not been loaded yet. Load model by calling ensureModelLoaded(), recognizer(), or listen().");b(e!=null&&typeof e=="string"&&e.length>1,function(){return"Expected the name for a transfer-learning recognized to be a non-empty string, but got "+JSON.stringify(e)}),b(this.transferRecognizers[e]==null,function(){return"There is already a transfer-learning model named '"+e+"'"});var n=new P3(e,this.parameters,this.model);return this.transferRecognizers[e]=n,n},t.prototype.freezeModel=function(){var e,n;try{for(var r=kt(this.model.layers),s=r.next();!s.done;s=r.next())s.value.trainable=!1}catch(i){e={error:i}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},t.prototype.checkInputTensorShape=function(e){var n=this.model.inputs[0].shape.length;if(e.shape.length!==n)throw new Error("Expected input Tensor to have rank "+n+", but got rank "+e.shape.length+" that differs ");var r=e.shape.slice(1),s=this.model.inputs[0].shape.slice(1);if(!It(r,s))throw new Error("Expected input to have shape [null,"+s+"], but got shape [null,"+r+"]")},t.VALID_VOCABULARY_NAMES=["18w","directional4w"],t.DEFAULT_VOCABULARY_NAME="18w",t}(),P3=function(t){function e(n,r,s){var i=t.call(this)||this;return i.name=n,i.parameters=r,i.baseModel=s,b(n!=null&&typeof n=="string"&&n.length>0,function(){return"The name of a transfer model must be a non-empty string, but got "+JSON.stringify(n)}),i.nonBatchInputShape=i.baseModel.inputs[0].shape.slice(1),i.words=null,i.dataset=new Tm,i}return y3(e,t),e.prototype.collectExample=function(n,r){return Me(this,void 0,void 0,function(){var s,i,o,a,l=this;return _e(this,function(u){if(b(!this.streaming,function(){return"Cannot start collection of transfer-learning example because a streaming recognition or transfer-learning example collection is ongoing"}),b(n!=null&&typeof n=="string"&&n.length>0,function(){return"Must provide a non-empty string when collecting transfer-learning example"}),r==null&&(r={}),r.durationMultiplier!=null&&r.durationSec!=null)throw new Error("durationMultiplier and durationSec are mutually exclusive, but are both specified.");return r.durationSec!=null?(b(r.durationSec>0,function(){return"Expected durationSec to be > 0, but got "+r.durationSec}),i=this.parameters.fftSize/this.parameters.sampleRateHz,s=Math.ceil(r.durationSec/i)):r.durationMultiplier!=null?(b(r.durationMultiplier>=1,function(){return"Expected duration multiplier to be >= 1, but got "+r.durationMultiplier}),s=Math.round(this.nonBatchInputShape[0]*r.durationMultiplier)):s=this.nonBatchInputShape[0],r.snippetDurationSec!=null&&(b(r.snippetDurationSec>0,function(){return"snippetDurationSec is expected to be > 0, but got "+r.snippetDurationSec}),b(r.onSnippet!=null,function(){return"onSnippet must be provided if snippetDurationSec is provided."})),r.onSnippet!=null&&b(r.snippetDurationSec!=null,function(){return"snippetDurationSec must be provided if onSnippet is provided."}),o=this.parameters.fftSize/this.parameters.sampleRateHz,a=o*s,this.streaming=!0,[2,new Promise(function(c){var h=r.snippetDurationSec==null?1:r.snippetDurationSec/a,f=1-h,d=Math.round(1/h),p=0,y=-1,w=[];l.audioDataExtractor=new oh({sampleRateHz:l.parameters.sampleRateHz,numFramesPerSpectrogram:s,columnTruncateLength:l.nonBatchInputShape[1],suppressionTimeMillis:0,spectrogramCallback:function(g,m){return Me(l,void 0,void 0,function(){var v,k,S,C,z,$,F,L,W,K,Z,se,ie,oe,ae,E,x,O,j,V;return _e(this,function(U){switch(U.label){case 0:return r.onSnippet!=null?[3,7]:(v=ko(g),S=(k=this.dataset).addExample,C={label:n},z={},[4,v.data()]);case 1:return C.spectrogram=(z.data=U.sent(),z.frameSize=this.nonBatchInputShape[1],z),r.includeRawAudio?(F={},[4,m.data()]):[3,3];case 2:return F.data=U.sent(),F.sampleRateHz=this.audioDataExtractor.sampleRateHz,$=F,[3,4];case 3:$=void 0,U.label=4;case 4:return S.apply(k,[(C.rawAudio=$,C)]),v.dispose(),[4,this.audioDataExtractor.stop()];case 5:return U.sent(),this.streaming=!1,this.collateTransferWords(),L=c,W={},[4,g.data()];case 6:return L.apply(void 0,[(W.data=U.sent(),W.frameSize=this.nonBatchInputShape[1],W)]),[3,13];case 7:return[4,g.data()];case 8:for(K=U.sent(),y===-1&&(y=K.length),Z=y-1;K[Z]!==0&&Z>=0;)Z--;return se=y-Z-1,y=Z+1,ie=K.slice(K.length-se,K.length),w.push(ie),r.onSnippet!=null&&r.onSnippet({data:ie,frameSize:this.nonBatchInputShape[1]}),p++!==d?[3,13]:[4,this.audioDataExtractor.stop()];case 9:return U.sent(),this.streaming=!1,this.collateTransferWords(),oe=w3(S3(w)),ae={data:oe,frameSize:this.nonBatchInputShape[1]},x=(E=this.dataset).addExample,O={label:n,spectrogram:ae},r.includeRawAudio?(V={},[4,m.data()]):[3,11];case 10:return V.data=U.sent(),V.sampleRateHz=this.audioDataExtractor.sampleRateHz,j=V,[3,12];case 11:j=void 0,U.label=12;case 12:x.apply(E,[(O.rawAudio=j,O)]),c(ae),U.label=13;case 13:return[2,!1]}})})},overlapFactor:f,includeRawAudio:r.includeRawAudio}),l.audioDataExtractor.start(r.audioTrackConstraints)})]})})},e.prototype.clearExamples=function(){var n=this;b(this.words!=null&&this.words.length>0&&!this.dataset.empty(),function(){return"No transfer learning examples exist for model name "+n.name}),this.dataset.clear(),this.words=null},e.prototype.countExamples=function(){if(this.dataset.empty())throw new Error("No examples have been collected for transfer-learning model named '"+this.name+"' yet.");return this.dataset.getExampleCounts()},e.prototype.getExamples=function(n){return this.dataset.getExamples(n)},e.prototype.setExampleKeyFrameIndex=function(n,r){this.dataset.setExampleKeyFrameIndex(n,r)},e.prototype.removeExample=function(n){this.dataset.removeExample(n),this.collateTransferWords()},e.prototype.isDatasetEmpty=function(){return this.dataset.empty()},e.prototype.loadExamples=function(n,r){var s,i,o,a;r===void 0&&(r=!1);var l=new Tm(n);r&&this.clearExamples();var u=l.getVocabulary();try{for(var c=kt(u),h=c.next();!h.done;h=c.next()){var f=h.value,d=l.getExamples(f);try{for(var p=(o=void 0,kt(d)),y=p.next();!y.done;y=p.next()){var w=y.value;this.dataset.addExample(w.example)}}catch(g){o={error:g}}finally{try{y&&!y.done&&(a=p.return)&&a.call(p)}finally{if(o)throw o.error}}}}catch(g){s={error:g}}finally{try{h&&!h.done&&(i=c.return)&&i.call(c)}finally{if(s)throw s.error}}this.collateTransferWords()},e.prototype.serializeExamples=function(n){return this.dataset.serialize(n)},e.prototype.collateTransferWords=function(){this.words=this.dataset.getVocabulary()},e.prototype.collectTransferDataAsTensors=function(n,r){var s=this.nonBatchInputShape[0];n=n||ca;var i=Math.round(n*s),o=this.dataset.getData(null,ih({numFrames:s,hopFrames:i},r));return{xs:o.xs,ys:o.ys}},e.prototype.collectTransferDataAsTfDataset=function(n,r,s,i){r===void 0&&(r=.15),s===void 0&&(s=32);var o=this.nonBatchInputShape[0];n=n||ca;var a=Math.round(n*o);return this.dataset.getData(null,ih({numFrames:o,hopFrames:a,getDataset:!0,datasetBatchSize:s,datasetValidationSplit:r},i))},e.prototype.train=function(n){return Me(this,void 0,void 0,function(){var r,s=this;return _e(this,function(i){return b(this.words!=null&&this.words.length>0,function(){return"Cannot train transfer-learning model '"+s.name+"' because no transfer learning example has been collected."}),b(this.words.length>1,function(){return"Cannot train transfer-learning model '"+s.name+"' because only 1 word label ('"+JSON.stringify(s.words)+"') has been collected for transfer learning. Requires at least 2."}),n.fineTuningEpochs!=null&&b(n.fineTuningEpochs>=0&&Number.isInteger(n.fineTuningEpochs),function(){return"If specified, fineTuningEpochs must be a non-negative integer, but received "+n.fineTuningEpochs}),n==null&&(n={}),this.model==null&&this.createTransferModelFromBaseModel(),this.secondLastBaseDenseLayer.trainable=!1,this.model.compile({loss:"categoricalCrossentropy",optimizer:n.optimizer||"sgd",metrics:["acc"]}),r=n.fitDatasetDurationMillisThreshold==null?6e4:n.fitDatasetDurationMillisThreshold,this.dataset.durationMillis()>r?(console.log("Detected large dataset: total duration = "+this.dataset.durationMillis()+" ms > "+r+" ms. Training transfer model using fitDataset() instead of fit()"),[2,this.trainOnDataset(n)]):[2,this.trainOnTensors(n)]})})},e.prototype.trainOnDataset=function(n){return Me(this,void 0,void 0,function(){var r,s,i,o,a,l,u,c,h;return _e(this,function(f){switch(f.label){case 0:return b(n.epochs>0,function(){return"Invalid config.epochs"}),r=n.batchSize==null?32:n.batchSize,s=n.windowHopRatio||ca,i=cd(this.collectTransferDataAsTfDataset(s,n.validationSplit,r,{augmentByMixingNoiseRatio:n.augmentByMixingNoiseRatio}),2),o=i[0],a=i[1],l=tn(),[4,this.model.fitDataset(o,{epochs:n.epochs,validationData:n.validationSplit>0?a:null,callbacks:n.callback==null?null:[n.callback]})];case 1:return u=f.sent(),console.log("fitDataset() took "+(tn()-l).toFixed(2)+" ms"),n.fineTuningEpochs!=null&&n.fineTuningEpochs>0?(c=tn(),[4,this.fineTuningUsingTfDatasets(n,o,a)]):[3,3];case 2:return h=f.sent(),console.log("fitDataset() (fine-tuning) took "+(tn()-c).toFixed(2)+" ms"),[2,[u,h]];case 3:return[2,u]}})})},e.prototype.trainOnTensors=function(n){return Me(this,void 0,void 0,function(){var r,s,i,o,a,l,u,c,h,f;return _e(this,function(d){switch(d.label){case 0:r=n.windowHopRatio||ca,s=this.collectTransferDataAsTensors(r,{augmentByMixingNoiseRatio:n.augmentByMixingNoiseRatio}),i=s.xs,o=s.ys,console.log("Training data: xs.shape = "+i.shape+", ys.shape = "+o.shape),d.label=1;case 1:return d.trys.push([1,,6,7]),n.validationSplit!=null?(c=N3(i,o,n.validationSplit),a=c.trainXs,l=c.trainYs,u=[c.valXs,c.valYs]):(a=i,l=o),[4,this.model.fit(a,l,{epochs:n.epochs==null?20:n.epochs,validationData:u,batchSize:n.batchSize,callbacks:n.callback==null?null:[n.callback]})];case 2:return h=d.sent(),n.fineTuningEpochs!=null&&n.fineTuningEpochs>0?[4,this.fineTuningUsingTensors(n,a,l,u)]:[3,4];case 3:return f=d.sent(),[2,[h,f]];case 4:return[2,h];case 5:return[3,7];case 6:return ee([i,o,a,l,u]),[7];case 7:return[2]}})})},e.prototype.fineTuningUsingTfDatasets=function(n,r,s){return Me(this,void 0,void 0,function(){var i,o,a;return _e(this,function(l){switch(l.label){case 0:return i=this.secondLastBaseDenseLayer.trainable,this.secondLastBaseDenseLayer.trainable=!0,o=n.fineTuningOptimizer==null?"sgd":n.fineTuningOptimizer,this.model.compile({loss:"categoricalCrossentropy",optimizer:o,metrics:["acc"]}),[4,this.model.fitDataset(r,{epochs:n.fineTuningEpochs,validationData:s,callbacks:n.callback==null?null:[n.callback]})];case 1:return a=l.sent(),this.secondLastBaseDenseLayer.trainable=i,[2,a]}})})},e.prototype.fineTuningUsingTensors=function(n,r,s,i){return Me(this,void 0,void 0,function(){var o,a,l;return _e(this,function(u){switch(u.label){case 0:return o=this.secondLastBaseDenseLayer.trainable,this.secondLastBaseDenseLayer.trainable=!0,a=n.fineTuningOptimizer==null?"sgd":n.fineTuningOptimizer,this.model.compile({loss:"categoricalCrossentropy",optimizer:a,metrics:["acc"]}),[4,this.model.fit(r,s,{epochs:n.fineTuningEpochs,validationData:i,batchSize:n.batchSize,callbacks:n.fineTuningCallback==null?null:[n.fineTuningCallback]})];case 1:return l=u.sent(),this.secondLastBaseDenseLayer.trainable=o,[2,l]}})})},e.prototype.evaluate=function(n){return Me(this,void 0,void 0,function(){var r,s=this;return _e(this,function(i){return b(n.wordProbThresholds!=null&&n.wordProbThresholds.length>0,function(){return"Received null or empty wordProbThresholds"}),r=0,b(this.words[r]===Ys,function(){return"Cannot perform evaluation when the first tag is not "+Ys}),[2,A(function(){for(var o=[],a=0,l=s.collectTransferDataAsTensors(n.windowHopRatio),u=l.xs,c=l.ys.argMax(-1).dataSync(),h=s.model.predict(u),f=er(Ne(h,[0,1],[h.shape[0],h.shape[1]-1]),-1),d=h.shape[0],p=0;p<n.wordProbThresholds.length;++p){for(var y=n.wordProbThresholds[p],w=f.greater(ge(y)).dataSync(),g=0,m=0,v=0,k=0,S=0;S<d;++S)c[S]===r?(g++,w[S]&&v++):(m++,w[S]&&k++);var C=v/g,z=k/m;o.push({probThreshold:y,fpr:C,tpr:z}),console.log("ROC thresh="+y+": fpr="+C.toFixed(4)+", tpr="+z.toFixed(4)),p>0&&(a+=Math.abs(o[p-1].fpr-o[p].fpr)*(o[p-1].tpr+o[p].tpr)/2)}return{rocCurve:o,auc:a}})]})})},e.prototype.createTransferModelFromBaseModel=function(){var n=this;b(this.words!=null,function(){return"No word example is available for tranfer-learning model of name "+n.name});for(var r=this.baseModel.layers,s=r.length-2;s>=0&&r[s].getClassName().toLowerCase()!=="dense";)s--;if(s<0)throw new Error("Cannot find a hidden dense layer in the base model.");this.secondLastBaseDenseLayer=r[s];var i=this.secondLastBaseDenseLayer.output;this.transferHead=r3(),this.transferHead.add(g3({units:this.words.length,activation:"softmax",inputShape:i.shape.slice(1),name:"NewHeadDense"}));var o=this.transferHead.apply(i);this.model=Ow({inputs:this.baseModel.inputs,outputs:o})},e.prototype.modelInputShape=function(){return this.baseModel.inputs[0].shape},e.prototype.getMetadata=function(){return{tfjsSpeechCommandsVersion:ub,modelName:this.name,timeStamp:new Date().toISOString(),wordLabels:this.wordLabels()}},e.prototype.save=function(n){return Me(this,void 0,void 0,function(){var r,s,i;return _e(this,function(o){return r=n!=null,n=n||Cm(this.name),r||(s=Bu.localStorage.getItem(Pu),(i=s==null?{}:JSON.parse(s))[this.name]=this.getMetadata(),Bu.localStorage.setItem(Pu,JSON.stringify(i))),console.log("Saving model to "+n),[2,this.model.save(n)]})})},e.prototype.load=function(n){return Me(this,void 0,void 0,function(){var r,s,i;return _e(this,function(o){switch(o.label){case 0:if(r=n!=null,n=n||Cm(this.name),!r){if((s=JSON.parse(Bu.localStorage.getItem(Pu)))==null||s[this.name]==null)throw new Error("Cannot find metadata for transfer model named "+this.name+'"');this.words=s[this.name].wordLabels,console.log("Loaded word list for model named "+this.name+": "+this.words)}return i=this,[4,sh(n)];case 1:return i.model=o.sent(),console.log("Loaded model from "+n+":"),this.model.summary(),[2]}})})},e.prototype.createTransfer=function(n){throw new Error("Creating transfer-learned recognizer from a transfer-learned recognizer is not supported.")},e}(cb);function Cm(t){return""+R3+t}function B3(t,e,n,r){if(b(n==null&&r==null||n!=null&&r!=null,function(){return"customModelURL and customMetadataURL must be both provided or both not provided."}),n!=null&&b(e==null,function(){return"vocabulary name must be null or undefined when modelURL is provided."}),t==="BROWSER_FFT")return new cb(e,n,r);throw t==="SOFT_FFT"?new Error("SOFT_FFT SpeechCommandRecognizer has not been implemented yet."):new Error("Invalid fftType: '"+t+"'")}const U3=({maze:t})=>Ie.jsxs("div",{className:"flex ",children:[Ie.jsx("div",{className:"border-black border grid grid-cols-9",children:Array.isArray(t)&&(t==null?void 0:t.length)>0&&(t==null?void 0:t.map((e,n)=>e.map((r,s)=>Ie.jsx("div",{className:`
                                h-8 tablet:h-12 w-8 tablet:w-12 ring-[100px] ring-inset
                            ${r===1&&"ring-gray-900"} 
                            ${r===0&&"ring-white border  border-black"} 
                            ${r==="a"&&"ring-sky-500 border border-black"}
                            `},`${n}-${s}`))))}),Ie.jsx("div",{className:"grid grid-cols-1 items-center border-black border-l-2 xxsm:border-l-0 tablet:border-l-2 lg:border-l-0 border-r-2 border-t-2 border-b-2 bg-sky-500",children:Ie.jsx("p",{className:"rotate-[270deg] font-bold justify-self-center tablet:text-lg",children:"Finish"})})]});function W3(t){if(t.length===0)return-1;let e=0;for(let n=1;n<t.length;n++)t[n]>t[e]&&(e=n);return e}function j3(t){return t.map(e=>[...e])}function V3(t,e){for(let n=0;n<t.length;n++)for(let r=0;r<t[n].length;r++)if(t[n][r]===e)return[n,r];return[-1,-1]}function G3(t,e){const[n,r]=e;return n>=0&&n<t.length&&r>=0&&r<t[n].length?t[n][r]:null}function H3(){window.location.reload()}function K3(t){for(let e of t)if(e[e.length-1]!==1)return!1;return!0}function hb(t,e){const n=[],r=2*t-1,s=2*e-1;for(let h=0;h<r;h++){const f=[];for(let d=0;d<s;d++)f.push(1);n.push(f)}const i=0,o=0;n[i][o]=0;const a=[[-2,0],[2,0],[0,-2],[0,2]];function l(h,f){return h>=0&&h<r&&f>=0&&f<s}function u(h){for(let f=h.length-1;f>0;f--){const d=Math.floor(Math.random()*(f+1));[h[f],h[d]]=[h[d],h[f]]}}function c(h,f){u(a);for(let d of a){const p=h+d[0],y=f+d[1];l(p,y)&&n[p][y]===1&&(n[p][y]=0,n[h+d[0]/2][f+d[1]/2]=0,c(p,y))}}return c(i,o),n[i][o]="a",K3(n)?hb(5,5):n}function q3(t,e,n){const r=j3(t);let s,i,o=!1;for(s=0;s<r.length;s++){for(i=0;i<r[s].length;i++)if(r[s][i]===e){o=!0;break}if(o)break}if(o)switch(n){case"right":i<r[s].length-1&&(r[s][i]=r[s][i+1],r[s][i+1]=e);break;case"left":i>0&&(r[s][i]=r[s][i-1],r[s][i-1]=e);break;case"up":s>0&&(r[s][i]=r[s-1][i],r[s-1][i]=e);break;case"down":s<r.length-1&&(r[s][i]=r[s+1][i],r[s+1][i]=e);break}const a=V3(t,"a"),l=G3(r,a);if(l===0)return{maze:r,message:"",messageValue:0};if(l===1)return{maze:t,message:"You've hit a wall!",messageValue:1};if(l==="a"&&a[1]===8)return{maze:t,message:"You've won!",messageValue:2};if(l==="a")return{maze:t,message:"You're trying to go out of bounds!",messageValue:3}}const Y3=({messageObj:t})=>Ie.jsx("div",{className:"min-h-[156px] max-w-[357px] max-w-[357px] tablet:min-w-[357px] tablet:max-w-[459px] lg:min-w-[459px] lg:max-w-[509px]",children:Ie.jsxs("div",{className:`border-2 p-4 tablet:p-8 text-sm tablet:text-lg min-h-full grid justify-items-center items-center
${t.messageValue===0&&"border-sky-500 bg-sky-200"}
${t.messageValue===1&&"border-red-500 bg-red-200"}
${t.messageValue===2&&"border-green-500 bg-green-200"}
${t.messageValue===3&&"border-yellow-500 bg-yellow-200"}
`,children:[t.messageValue===0&&Ie.jsxs(Ie.Fragment,{children:[Ie.jsx("p",{children:`Press the microphone. While it's blinking instruct the blue square to move about the maze using the words "left", "right", "up" and "down".`}),Ie.jsx("p",{children:" Cross the FINISH line to win!"})]}),t.messageValue===1&&Ie.jsx("p",{children:t.message}),t.messageValue===2&&Ie.jsxs(Ie.Fragment,{children:[Ie.jsx("p",{children:t.message}),Ie.jsx("button",{className:"border-2 border-green-500 bg-green-500 px-2 hover:animate-quickPing",onClick:H3,children:"Play Again"})]}),t.messageValue===3&&Ie.jsx("p",{children:t.message})]})});var Bo={};(function t(e,n,r,s){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function";function a(){}function l(E){var x=n.exports.Promise,O=x!==void 0?x:e.Promise;return typeof O=="function"?new O(E):(E(a,a),null)}var u=function(){var E=Math.floor(16.666666666666668),x,O,j={},V=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(x=function(U){var X=Math.random();return j[X]=requestAnimationFrame(function q(Q){V===Q||V+E-1<Q?(V=Q,delete j[X],U()):j[X]=requestAnimationFrame(q)}),X},O=function(U){j[U]&&cancelAnimationFrame(j[U])}):(x=function(U){return setTimeout(U,E)},O=function(U){return clearTimeout(U)}),{frame:x,cancel:O}}(),c=function(){var E,x,O={};function j(V){function U(X,q){V.postMessage({options:X||{},callback:q})}V.init=function(q){var Q=q.transferControlToOffscreen();V.postMessage({canvas:Q},[Q])},V.fire=function(q,Q,he){if(x)return U(q,null),x;var ze=Math.random().toString(36).slice(2);return x=l(function(be){function Re(ot){ot.data.callback===ze&&(delete O[ze],V.removeEventListener("message",Re),x=null,he(),be())}V.addEventListener("message",Re),U(q,ze),O[ze]=Re.bind(null,{data:{callback:ze}})}),x},V.reset=function(){V.postMessage({reset:!0});for(var q in O)O[q](),delete O[q]}}return function(){if(E)return E;if(!r&&i){var V=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{E=new Worker(URL.createObjectURL(new Blob([V])))}catch(U){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",U),null}j(E)}return E}}(),h={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function f(E,x){return x?x(E):E}function d(E){return E!=null}function p(E,x,O){return f(E&&d(E[x])?E[x]:h[x],O)}function y(E){return E<0?0:Math.floor(E)}function w(E,x){return Math.floor(Math.random()*(x-E))+E}function g(E){return parseInt(E,16)}function m(E){return E.map(v)}function v(E){var x=String(E).replace(/[^0-9a-f]/gi,"");return x.length<6&&(x=x[0]+x[0]+x[1]+x[1]+x[2]+x[2]),{r:g(x.substring(0,2)),g:g(x.substring(2,4)),b:g(x.substring(4,6))}}function k(E){var x=p(E,"origin",Object);return x.x=p(x,"x",Number),x.y=p(x,"y",Number),x}function S(E){E.width=document.documentElement.clientWidth,E.height=document.documentElement.clientHeight}function C(E){var x=E.getBoundingClientRect();E.width=x.width,E.height=x.height}function z(E){var x=document.createElement("canvas");return x.style.position="fixed",x.style.top="0px",x.style.left="0px",x.style.pointerEvents="none",x.style.zIndex=E,x}function $(E,x,O,j,V,U,X,q,Q){E.save(),E.translate(x,O),E.rotate(U),E.scale(j,V),E.arc(0,0,1,X,q,Q),E.restore()}function F(E){var x=E.angle*(Math.PI/180),O=E.spread*(Math.PI/180);return{x:E.x,y:E.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:E.startVelocity*.5+Math.random()*E.startVelocity,angle2D:-x+(.5*O-Math.random()*O),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:E.color,shape:E.shape,tick:0,totalTicks:E.ticks,decay:E.decay,drift:E.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:E.gravity*3,ovalScalar:.6,scalar:E.scalar,flat:E.flat}}function L(E,x){x.x+=Math.cos(x.angle2D)*x.velocity+x.drift,x.y+=Math.sin(x.angle2D)*x.velocity+x.gravity,x.velocity*=x.decay,x.flat?(x.wobble=0,x.wobbleX=x.x+10*x.scalar,x.wobbleY=x.y+10*x.scalar,x.tiltSin=0,x.tiltCos=0,x.random=1):(x.wobble+=x.wobbleSpeed,x.wobbleX=x.x+10*x.scalar*Math.cos(x.wobble),x.wobbleY=x.y+10*x.scalar*Math.sin(x.wobble),x.tiltAngle+=.1,x.tiltSin=Math.sin(x.tiltAngle),x.tiltCos=Math.cos(x.tiltAngle),x.random=Math.random()+2);var O=x.tick++/x.totalTicks,j=x.x+x.random*x.tiltCos,V=x.y+x.random*x.tiltSin,U=x.wobbleX+x.random*x.tiltCos,X=x.wobbleY+x.random*x.tiltSin;if(E.fillStyle="rgba("+x.color.r+", "+x.color.g+", "+x.color.b+", "+(1-O)+")",E.beginPath(),o&&x.shape.type==="path"&&typeof x.shape.path=="string"&&Array.isArray(x.shape.matrix))E.fill(ie(x.shape.path,x.shape.matrix,x.x,x.y,Math.abs(U-j)*.1,Math.abs(X-V)*.1,Math.PI/10*x.wobble));else if(x.shape.type==="bitmap"){var q=Math.PI/10*x.wobble,Q=Math.abs(U-j)*.1,he=Math.abs(X-V)*.1,ze=x.shape.bitmap.width*x.scalar,be=x.shape.bitmap.height*x.scalar,Re=new DOMMatrix([Math.cos(q)*Q,Math.sin(q)*Q,-Math.sin(q)*he,Math.cos(q)*he,x.x,x.y]);Re.multiplySelf(new DOMMatrix(x.shape.matrix));var ot=E.createPattern(x.shape.bitmap,"no-repeat");ot.setTransform(Re),E.globalAlpha=1-O,E.fillStyle=ot,E.fillRect(x.x-ze/2,x.y-be/2,ze,be),E.globalAlpha=1}else if(x.shape==="circle")E.ellipse?E.ellipse(x.x,x.y,Math.abs(U-j)*x.ovalScalar,Math.abs(X-V)*x.ovalScalar,Math.PI/10*x.wobble,0,2*Math.PI):$(E,x.x,x.y,Math.abs(U-j)*x.ovalScalar,Math.abs(X-V)*x.ovalScalar,Math.PI/10*x.wobble,0,2*Math.PI);else if(x.shape==="star")for(var fe=Math.PI/2*3,Dt=4*x.scalar,at=8*x.scalar,lt=x.x,Kt=x.y,An=5,Dn=Math.PI/An;An--;)lt=x.x+Math.cos(fe)*at,Kt=x.y+Math.sin(fe)*at,E.lineTo(lt,Kt),fe+=Dn,lt=x.x+Math.cos(fe)*Dt,Kt=x.y+Math.sin(fe)*Dt,E.lineTo(lt,Kt),fe+=Dn;else E.moveTo(Math.floor(x.x),Math.floor(x.y)),E.lineTo(Math.floor(x.wobbleX),Math.floor(V)),E.lineTo(Math.floor(U),Math.floor(X)),E.lineTo(Math.floor(j),Math.floor(x.wobbleY));return E.closePath(),E.fill(),x.tick<x.totalTicks}function W(E,x,O,j,V){var U=x.slice(),X=E.getContext("2d"),q,Q,he=l(function(ze){function be(){q=Q=null,X.clearRect(0,0,j.width,j.height),V(),ze()}function Re(){r&&!(j.width===s.width&&j.height===s.height)&&(j.width=E.width=s.width,j.height=E.height=s.height),!j.width&&!j.height&&(O(E),j.width=E.width,j.height=E.height),X.clearRect(0,0,j.width,j.height),U=U.filter(function(ot){return L(X,ot)}),U.length?q=u.frame(Re):be()}q=u.frame(Re),Q=be});return{addFettis:function(ze){return U=U.concat(ze),he},canvas:E,promise:he,reset:function(){q&&u.cancel(q),Q&&Q()}}}function K(E,x){var O=!E,j=!!p(x||{},"resize"),V=!1,U=p(x,"disableForReducedMotion",Boolean),X=i&&!!p(x||{},"useWorker"),q=X?c():null,Q=O?S:C,he=E&&q?!!E.__confetti_initialized:!1,ze=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,be;function Re(fe,Dt,at){for(var lt=p(fe,"particleCount",y),Kt=p(fe,"angle",Number),An=p(fe,"spread",Number),Dn=p(fe,"startVelocity",Number),fb=p(fe,"decay",Number),db=p(fe,"gravity",Number),pb=p(fe,"drift",Number),hd=p(fe,"colors",m),mb=p(fe,"ticks",Number),fd=p(fe,"shapes"),gb=p(fe,"scalar"),yb=!!p(fe,"flat"),dd=k(fe),pd=lt,tu=[],vb=E.width*dd.x,wb=E.height*dd.y;pd--;)tu.push(F({x:vb,y:wb,angle:Kt,spread:An,startVelocity:Dn,color:hd[pd%hd.length],shape:fd[w(0,fd.length)],ticks:mb,decay:fb,gravity:db,drift:pb,scalar:gb,flat:yb}));return be?be.addFettis(tu):(be=W(E,tu,Q,Dt,at),be.promise)}function ot(fe){var Dt=U||p(fe,"disableForReducedMotion",Boolean),at=p(fe,"zIndex",Number);if(Dt&&ze)return l(function(Dn){Dn()});O&&be?E=be.canvas:O&&!E&&(E=z(at),document.body.appendChild(E)),j&&!he&&Q(E);var lt={width:E.width,height:E.height};q&&!he&&q.init(E),he=!0,q&&(E.__confetti_initialized=!0);function Kt(){if(q){var Dn={getBoundingClientRect:function(){if(!O)return E.getBoundingClientRect()}};Q(Dn),q.postMessage({resize:{width:Dn.width,height:Dn.height}});return}lt.width=lt.height=null}function An(){be=null,j&&(V=!1,e.removeEventListener("resize",Kt)),O&&E&&(document.body.removeChild(E),E=null,he=!1)}return j&&!V&&(V=!0,e.addEventListener("resize",Kt,!1)),q?q.fire(fe,lt,An):Re(fe,lt,An)}return ot.reset=function(){q&&q.reset(),be&&be.reset()},ot}var Z;function se(){return Z||(Z=K(null,{useWorker:!0,resize:!0})),Z}function ie(E,x,O,j,V,U,X){var q=new Path2D(E),Q=new Path2D;Q.addPath(q,new DOMMatrix(x));var he=new Path2D;return he.addPath(Q,new DOMMatrix([Math.cos(X)*V,Math.sin(X)*V,-Math.sin(X)*U,Math.cos(X)*U,O,j])),he}function oe(E){if(!o)throw new Error("path confetti are not supported in this browser");var x,O;typeof E=="string"?x=E:(x=E.path,O=E.matrix);var j=new Path2D(x),V=document.createElement("canvas"),U=V.getContext("2d");if(!O){for(var X=1e3,q=X,Q=X,he=0,ze=0,be,Re,ot=0;ot<X;ot+=2)for(var fe=0;fe<X;fe+=2)U.isPointInPath(j,ot,fe,"nonzero")&&(q=Math.min(q,ot),Q=Math.min(Q,fe),he=Math.max(he,ot),ze=Math.max(ze,fe));be=he-q,Re=ze-Q;var Dt=10,at=Math.min(Dt/be,Dt/Re);O=[at,0,0,at,-Math.round(be/2+q)*at,-Math.round(Re/2+Q)*at]}return{type:"path",path:x,matrix:O}}function ae(E){var x,O=1,j="#000000",V='"Twemoji Mozilla", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "system emoji", sans-serif';typeof E=="string"?x=E:(x=E.text,O="scalar"in E?E.scalar:O,V="fontFamily"in E?E.fontFamily:V,j="color"in E?E.color:j);var U=10*O,X=""+U+"px "+V,q=new OffscreenCanvas(U,U),Q=q.getContext("2d");Q.font=X;var he=Q.measureText(x),ze=Math.floor(he.width),be=Math.floor(he.fontBoundingBoxAscent+he.fontBoundingBoxDescent);q=new OffscreenCanvas(ze,be),Q=q.getContext("2d"),Q.font=X,Q.fillStyle=j,Q.fillText(x,0,U);var Re=1/O;return{type:"bitmap",bitmap:q.transferToImageBitmap(),matrix:[Re,0,0,Re,-ze*Re/2,-be*Re/2]}}n.exports=function(){return se().apply(this,arguments)},n.exports.reset=function(){se().reset()},n.exports.create=K,n.exports.shapeFromPath=oe,n.exports.shapeFromText=ae})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Bo,!1);const Am=Bo.exports;Bo.exports.create;const X3=()=>{let t=6e4,e=Date.now()+t,n={startVelocity:50,spread:360,ticks:1e3,zIndex:0};function r(s,i){return Math.random()*(i-s)+s}(function(){var i=setInterval(function(){var o=e-Date.now();if(o<=0)return clearInterval(i);var a=50*(o/t);Am({...n,particleCount:a,origin:{x:r(.1,.3),y:Math.random()-.2}}),Am({...n,particleCount:a,origin:{x:r(.7,.9),y:Math.random()-.2}})},250)})()};function J3(){const[t,e]=ur.useState(hb(5,5)),[n,r]=ur.useState({maze:t,message:"",messageValue:0}),[s,i]=ur.useState(!1),[o,a]=ur.useState(0);async function l(){const c="https://teachablemachine.withgoogle.com/models/7_pWxhluP/",h=c+"model.json",f=c+"metadata.json",d=B3("BROWSER_FFT",void 0,h,f);return await d.ensureModelLoaded(),d}async function u(){const c=await l();let h;a(()=>1);const f=d=>{a(()=>2),c.stopListening();const p=q3(t,"a",d);if(e(()=>p.maze),r(()=>p),p.messageValue===0){a(()=>0);return}if(p.messageValue===2){i(()=>!0),X3();return}else setTimeout(()=>{r(y=>({...y,message:"",messageValue:0})),a(()=>0)},3e3)};c.listen(d=>{const p=d.scores;switch(h=W3(p),h){case 1:f("down");break;case 2:f("left");break;case 3:f("right");break;case 4:f("up");break}},{includeSpectrogram:!0,probabilityThreshold:.75,invokeCallbackOnNoiseAndUnknown:!0,overlapFactor:.5})}return ur.useEffect(()=>{l()},[]),Ie.jsxs("div",{className:" min-h-screen p-8 bg-gradient-to-b from-sky-100 to-sky-300",children:[Ie.jsx("h1",{className:"text-xl xsm:text-2xl sm:text-3xl lg:text-5xl mb-12 tablet:mb-24",children:"Speech Recognition Maze"}),Ie.jsxs("div",{className:"grid tablet:grid-cols-2 justify-items-center gap-y-6 xsm:gap-y-10 tablet:gap-10 lg:gap-12 xlg:gap-y-32",children:[Ie.jsx(U3,{maze:t}),Ie.jsx(Y3,{messageObj:n})]}),!s&&Ie.jsx("button",{className:`mt-12 lg:mt-20 tablet:col-span-2 material-symbols-outlined rounded-full p-4 border-2 text-white
                        ${o===1&&"animate-quickPing disabled cursor-none"}
                        `,onClick:u,children:"mic"})]})}Uu.createRoot(document.getElementById("root")).render(Ie.jsx(Ob.StrictMode,{children:Ie.jsx(J3,{})}))});export default Z3();
