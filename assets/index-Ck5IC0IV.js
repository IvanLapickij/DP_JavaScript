function cd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ku={exports:{}},$o={},Mu={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wr=Symbol.for("react.element"),dd=Symbol.for("react.portal"),pd=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),yd=Symbol.for("react.provider"),gd=Symbol.for("react.context"),vd=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),xd=Symbol.for("react.memo"),Sd=Symbol.for("react.lazy"),ns=Symbol.iterator;function kd(e){return e===null||typeof e!="object"?null:(e=ns&&e[ns]||e["@@iterator"],typeof e=="function"?e:null)}var Eu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cu=Object.assign,Pu={};function En(e,t,n){this.props=e,this.context=t,this.refs=Pu,this.updater=n||Eu}En.prototype.isReactComponent={};En.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};En.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _u(){}_u.prototype=En.prototype;function Kl(e,t,n){this.props=e,this.context=t,this.refs=Pu,this.updater=n||Eu}var Zl=Kl.prototype=new _u;Zl.constructor=Kl;Cu(Zl,En.prototype);Zl.isPureReactComponent=!0;var rs=Array.isArray,Nu=Object.prototype.hasOwnProperty,Jl={current:null},zu={key:!0,ref:!0,__self:!0,__source:!0};function Tu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Nu.call(t,r)&&!zu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:wr,type:e,key:i,ref:l,props:o,_owner:Jl.current}}function Md(e,t){return{$$typeof:wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bl(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr}function Ed(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var os=/\/+/g;function ki(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ed(""+e.key):t.toString(36)}function Xr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case wr:case dd:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ki(l,0):r,rs(o)?(n="",e!=null&&(n=e.replace(os,"$&/")+"/"),Xr(o,t,n,"",function(u){return u})):o!=null&&(bl(o)&&(o=Md(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(os,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",rs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+ki(i,a);l+=Xr(i,t,n,s,o)}else if(s=kd(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+ki(i,a++),l+=Xr(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function _r(e,t,n){if(e==null)return e;var r=[],o=0;return Xr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Cd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Gr={transition:null},Pd={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Gr,ReactCurrentOwner:Jl};function Iu(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:_r,forEach:function(e,t,n){_r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _r(e,function(){t++}),t},toArray:function(e){return _r(e,function(t){return t})||[]},only:function(e){if(!bl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=En;R.Fragment=pd;R.Profiler=md;R.PureComponent=Kl;R.StrictMode=hd;R.Suspense=wd;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pd;R.act=Iu;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Jl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Nu.call(t,s)&&!zu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:wr,type:e.type,key:o,ref:i,props:r,_owner:l}};R.createContext=function(e){return e={$$typeof:gd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yd,_context:e},e.Consumer=e};R.createElement=Tu;R.createFactory=function(e){var t=Tu.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:vd,render:e}};R.isValidElement=bl;R.lazy=function(e){return{$$typeof:Sd,_payload:{_status:-1,_result:e},_init:Cd}};R.memo=function(e,t){return{$$typeof:xd,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Gr.transition;Gr.transition={};try{e()}finally{Gr.transition=t}};R.unstable_act=Iu;R.useCallback=function(e,t){return ve.current.useCallback(e,t)};R.useContext=function(e){return ve.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};R.useEffect=function(e,t){return ve.current.useEffect(e,t)};R.useId=function(){return ve.current.useId()};R.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ve.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};R.useRef=function(e){return ve.current.useRef(e)};R.useState=function(e){return ve.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ve.current.useTransition()};R.version="18.3.1";Mu.exports=R;var j=Mu.exports;const Ru=fd(j),is=cd({__proto__:null,default:Ru},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d=j,Nd=Symbol.for("react.element"),zd=Symbol.for("react.fragment"),Td=Object.prototype.hasOwnProperty,Id=_d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rd={key:!0,ref:!0,__self:!0,__source:!0};function ju(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Td.call(t,r)&&!Rd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Nd,type:e,key:i,ref:l,props:o,_owner:Id.current}}$o.Fragment=zd;$o.jsx=ju;$o.jsxs=ju;ku.exports=$o;var k=ku.exports,$u={exports:{}},Ie={},Ou={exports:{}},Lu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,T){var I=_.length;_.push(T);e:for(;0<I;){var Z=I-1>>>1,ne=_[Z];if(0<o(ne,T))_[Z]=T,_[I]=ne,I=Z;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var T=_[0],I=_.pop();if(I!==T){_[0]=I;e:for(var Z=0,ne=_.length,Cr=ne>>>1;Z<Cr;){var jt=2*(Z+1)-1,Si=_[jt],$t=jt+1,Pr=_[$t];if(0>o(Si,I))$t<ne&&0>o(Pr,Si)?(_[Z]=Pr,_[$t]=I,Z=$t):(_[Z]=Si,_[jt]=I,Z=jt);else if($t<ne&&0>o(Pr,I))_[Z]=Pr,_[$t]=I,Z=$t;else break e}}return T}function o(_,T){var I=_.sortIndex-T.sortIndex;return I!==0?I:_.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],f=1,d=null,m=3,v=!1,y=!1,g=!1,z=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=_)r(u),T.sortIndex=T.expirationTime,t(s,T);else break;T=n(u)}}function w(_){if(g=!1,h(_),!y)if(n(s)!==null)y=!0,wi(E);else{var T=n(u);T!==null&&xi(w,T.startTime-_)}}function E(_,T){y=!1,g&&(g=!1,p(N),N=-1),v=!0;var I=m;try{for(h(T),d=n(s);d!==null&&(!(d.expirationTime>T)||_&&!Ve());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,m=d.priorityLevel;var ne=Z(d.expirationTime<=T);T=e.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(s)&&r(s),h(T)}else r(s);d=n(s)}if(d!==null)var Cr=!0;else{var jt=n(u);jt!==null&&xi(w,jt.startTime-T),Cr=!1}return Cr}finally{d=null,m=I,v=!1}}var C=!1,M=null,N=-1,K=5,$=-1;function Ve(){return!(e.unstable_now()-$<K)}function Nn(){if(M!==null){var _=e.unstable_now();$=_;var T=!0;try{T=M(!0,_)}finally{T?zn():(C=!1,M=null)}}else C=!1}var zn;if(typeof c=="function")zn=function(){c(Nn)};else if(typeof MessageChannel<"u"){var ts=new MessageChannel,ud=ts.port2;ts.port1.onmessage=Nn,zn=function(){ud.postMessage(null)}}else zn=function(){z(Nn,0)};function wi(_){M=_,C||(C=!0,zn())}function xi(_,T){N=z(function(){_(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,wi(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var I=m;m=T;try{return _()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,T){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=m;m=_;try{return T()}finally{m=I}},e.unstable_scheduleCallback=function(_,T,I){var Z=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Z+I:Z):I=Z,_){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=I+ne,_={id:f++,callback:T,priorityLevel:_,startTime:I,expirationTime:ne,sortIndex:-1},I>Z?(_.sortIndex=I,t(u,_),n(s)===null&&_===n(u)&&(g?(p(N),N=-1):g=!0,xi(w,I-Z))):(_.sortIndex=ne,t(s,_),y||v||(y=!0,wi(E))),_},e.unstable_shouldYield=Ve,e.unstable_wrapCallback=function(_){var T=m;return function(){var I=m;m=T;try{return _.apply(this,arguments)}finally{m=I}}}})(Lu);Ou.exports=Lu;var jd=Ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d=j,Te=jd;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fu=new Set,bn={};function Xt(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(bn[e]=t,e=0;e<t.length;e++)Fu.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ji=Object.prototype.hasOwnProperty,Od=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ls={},as={};function Ld(e){return Ji.call(as,e)?!0:Ji.call(ls,e)?!1:Od.test(e)?as[e]=!0:(ls[e]=!0,!1)}function Fd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dd(e,t,n,r){if(t===null||typeof t>"u"||Fd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var ql=/[\-:]([a-z])/g;function ea(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ql,ea);ce[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ql,ea);ce[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ql,ea);ce[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function ta(e,t,n,r){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dd(t,n,o,r)&&(n=null),r||o===null?Ld(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=$d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nr=Symbol.for("react.element"),Zt=Symbol.for("react.portal"),Jt=Symbol.for("react.fragment"),na=Symbol.for("react.strict_mode"),bi=Symbol.for("react.profiler"),Du=Symbol.for("react.provider"),Au=Symbol.for("react.context"),ra=Symbol.for("react.forward_ref"),qi=Symbol.for("react.suspense"),el=Symbol.for("react.suspense_list"),oa=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Uu=Symbol.for("react.offscreen"),ss=Symbol.iterator;function Tn(e){return e===null||typeof e!="object"?null:(e=ss&&e[ss]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Mi;function An(e){if(Mi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mi=t&&t[1]||""}return`
`+Mi+e}var Ei=!1;function Ci(e,t){if(!e||Ei)return"";Ei=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Ei=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?An(e):""}function Ad(e){switch(e.tag){case 5:return An(e.type);case 16:return An("Lazy");case 13:return An("Suspense");case 19:return An("SuspenseList");case 0:case 2:case 15:return e=Ci(e.type,!1),e;case 11:return e=Ci(e.type.render,!1),e;case 1:return e=Ci(e.type,!0),e;default:return""}}function tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jt:return"Fragment";case Zt:return"Portal";case bi:return"Profiler";case na:return"StrictMode";case qi:return"Suspense";case el:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Au:return(e.displayName||"Context")+".Consumer";case Du:return(e._context.displayName||"Context")+".Provider";case ra:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oa:return t=e.displayName||null,t!==null?t:tl(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return tl(e(t))}catch{}}return null}function Ud(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tl(t);case 8:return t===na?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vd(e){var t=Vu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){e._valueTracker||(e._valueTracker=Vd(e))}function Bu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function so(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nl(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function us(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wu(e,t){t=t.checked,t!=null&&ta(e,"checked",t,!1)}function rl(e,t){Wu(e,t);var n=Nt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ol(e,t.type,n):t.hasOwnProperty("defaultValue")&&ol(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ol(e,t,n){(t!=="number"||so(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Un=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function il(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Un(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function Hu(e,t){var n=Nt(t.value),r=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ds(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ll(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,Qu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bd=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(e){Bd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wn[t]=Wn[e]})});function Xu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wn.hasOwnProperty(e)&&Wn[e]?(""+t).trim():t+"px"}function Gu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Xu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Wd=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function al(e,t){if(t){if(Wd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=null;function ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cl=null,cn=null,fn=null;function ps(e){if(e=kr(e)){if(typeof cl!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Ao(t),cl(e.stateNode,e.type,t))}}function Ku(e){cn?fn?fn.push(e):fn=[e]:cn=e}function Zu(){if(cn){var e=cn,t=fn;if(fn=cn=null,ps(e),t)for(e=0;e<t.length;e++)ps(t[e])}}function Ju(e,t){return e(t)}function bu(){}var Pi=!1;function qu(e,t,n){if(Pi)return e(t,n);Pi=!0;try{return Ju(e,t,n)}finally{Pi=!1,(cn!==null||fn!==null)&&(bu(),Zu())}}function er(e,t){var n=e.stateNode;if(n===null)return null;var r=Ao(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var fl=!1;if(st)try{var In={};Object.defineProperty(In,"passive",{get:function(){fl=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{fl=!1}function Hd(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Hn=!1,uo=null,co=!1,dl=null,Yd={onError:function(e){Hn=!0,uo=e}};function Qd(e,t,n,r,o,i,l,a,s){Hn=!1,uo=null,Hd.apply(Yd,arguments)}function Xd(e,t,n,r,o,i,l,a,s){if(Qd.apply(this,arguments),Hn){if(Hn){var u=uo;Hn=!1,uo=null}else throw Error(x(198));co||(co=!0,dl=u)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ec(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hs(e){if(Gt(e)!==e)throw Error(x(188))}function Gd(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return hs(o),e;if(i===r)return hs(o),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function tc(e){return e=Gd(e),e!==null?nc(e):null}function nc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nc(e);if(t!==null)return t;e=e.sibling}return null}var rc=Te.unstable_scheduleCallback,ms=Te.unstable_cancelCallback,Kd=Te.unstable_shouldYield,Zd=Te.unstable_requestPaint,J=Te.unstable_now,Jd=Te.unstable_getCurrentPriorityLevel,la=Te.unstable_ImmediatePriority,oc=Te.unstable_UserBlockingPriority,fo=Te.unstable_NormalPriority,bd=Te.unstable_LowPriority,ic=Te.unstable_IdlePriority,Oo=null,et=null;function qd(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(Oo,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:n0,e0=Math.log,t0=Math.LN2;function n0(e){return e>>>=0,e===0?32:31-(e0(e)/t0|0)|0}var Ir=64,Rr=4194304;function Vn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function po(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Vn(a):(i&=l,i!==0&&(r=Vn(i)))}else l=n&~o,l!==0?r=Vn(l):i!==0&&(r=Vn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),o=1<<n,r|=e[n],t&=~o;return r}function r0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Qe(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=r0(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lc(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function _i(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function i0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Qe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function aa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var D=0;function ac(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sc,sa,uc,cc,fc,hl=!1,jr=[],xt=null,St=null,kt=null,tr=new Map,nr=new Map,yt=[],l0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ys(e,t){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":St=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nr.delete(t.pointerId)}}function Rn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=kr(t),t!==null&&sa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function a0(e,t,n,r,o){switch(t){case"focusin":return xt=Rn(xt,e,t,n,r,o),!0;case"dragenter":return St=Rn(St,e,t,n,r,o),!0;case"mouseover":return kt=Rn(kt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return tr.set(i,Rn(tr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,nr.set(i,Rn(nr.get(i)||null,e,t,n,r,o)),!0}return!1}function dc(e){var t=Ft(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=ec(n),t!==null){e.blockedOn=t,fc(e.priority,function(){uc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ml(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ul=r,n.target.dispatchEvent(r),ul=null}else return t=kr(n),t!==null&&sa(t),e.blockedOn=n,!1;t.shift()}return!0}function gs(e,t,n){Kr(e)&&n.delete(t)}function s0(){hl=!1,xt!==null&&Kr(xt)&&(xt=null),St!==null&&Kr(St)&&(St=null),kt!==null&&Kr(kt)&&(kt=null),tr.forEach(gs),nr.forEach(gs)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,hl||(hl=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,s0)))}function rr(e){function t(o){return jn(o,e)}if(0<jr.length){jn(jr[0],e);for(var n=1;n<jr.length;n++){var r=jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xt!==null&&jn(xt,e),St!==null&&jn(St,e),kt!==null&&jn(kt,e),tr.forEach(t),nr.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)dc(n),n.blockedOn===null&&yt.shift()}var dn=dt.ReactCurrentBatchConfig,ho=!0;function u0(e,t,n,r){var o=D,i=dn.transition;dn.transition=null;try{D=1,ua(e,t,n,r)}finally{D=o,dn.transition=i}}function c0(e,t,n,r){var o=D,i=dn.transition;dn.transition=null;try{D=4,ua(e,t,n,r)}finally{D=o,dn.transition=i}}function ua(e,t,n,r){if(ho){var o=ml(e,t,n,r);if(o===null)Fi(e,t,r,mo,n),ys(e,r);else if(a0(o,e,t,n,r))r.stopPropagation();else if(ys(e,r),t&4&&-1<l0.indexOf(e)){for(;o!==null;){var i=kr(o);if(i!==null&&sc(i),i=ml(e,t,n,r),i===null&&Fi(e,t,r,mo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Fi(e,t,r,null,n)}}var mo=null;function ml(e,t,n,r){if(mo=null,e=ia(r),e=Ft(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ec(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mo=e,null}function pc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jd()){case la:return 1;case oc:return 4;case fo:case bd:return 16;case ic:return 536870912;default:return 16}default:return 16}}var vt=null,ca=null,Zr=null;function hc(){if(Zr)return Zr;var e,t=ca,n=t.length,r,o="value"in vt?vt.value:vt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Zr=o.slice(e,1<r?1-r:void 0)}function Jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $r(){return!0}function vs(){return!1}function Re(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$r:vs,this.isPropagationStopped=vs,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fa=Re(Cn),Sr=X({},Cn,{view:0,detail:0}),f0=Re(Sr),Ni,zi,$n,Lo=X({},Sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:da,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(Ni=e.screenX-$n.screenX,zi=e.screenY-$n.screenY):zi=Ni=0,$n=e),Ni)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),ws=Re(Lo),d0=X({},Lo,{dataTransfer:0}),p0=Re(d0),h0=X({},Sr,{relatedTarget:0}),Ti=Re(h0),m0=X({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),y0=Re(m0),g0=X({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),v0=Re(g0),w0=X({},Cn,{data:0}),xs=Re(w0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=k0[e])?!!t[e]:!1}function da(){return M0}var E0=X({},Sr,{key:function(e){if(e.key){var t=x0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?S0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:da,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),C0=Re(E0),P0=X({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ss=Re(P0),_0=X({},Sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:da}),N0=Re(_0),z0=X({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),T0=Re(z0),I0=X({},Lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=Re(I0),j0=[9,13,27,32],pa=st&&"CompositionEvent"in window,Yn=null;st&&"documentMode"in document&&(Yn=document.documentMode);var $0=st&&"TextEvent"in window&&!Yn,mc=st&&(!pa||Yn&&8<Yn&&11>=Yn),ks=" ",Ms=!1;function yc(e,t){switch(e){case"keyup":return j0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bt=!1;function O0(e,t){switch(e){case"compositionend":return gc(t);case"keypress":return t.which!==32?null:(Ms=!0,ks);case"textInput":return e=t.data,e===ks&&Ms?null:e;default:return null}}function L0(e,t){if(bt)return e==="compositionend"||!pa&&yc(e,t)?(e=hc(),Zr=ca=vt=null,bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mc&&t.locale!=="ko"?null:t.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!F0[e.type]:t==="textarea"}function vc(e,t,n,r){Ku(r),t=yo(t,"onChange"),0<t.length&&(n=new fa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,or=null;function D0(e){zc(e,0)}function Fo(e){var t=tn(e);if(Bu(t))return e}function A0(e,t){if(e==="change")return t}var wc=!1;if(st){var Ii;if(st){var Ri="oninput"in document;if(!Ri){var Cs=document.createElement("div");Cs.setAttribute("oninput","return;"),Ri=typeof Cs.oninput=="function"}Ii=Ri}else Ii=!1;wc=Ii&&(!document.documentMode||9<document.documentMode)}function Ps(){Qn&&(Qn.detachEvent("onpropertychange",xc),or=Qn=null)}function xc(e){if(e.propertyName==="value"&&Fo(or)){var t=[];vc(t,or,e,ia(e)),qu(D0,t)}}function U0(e,t,n){e==="focusin"?(Ps(),Qn=t,or=n,Qn.attachEvent("onpropertychange",xc)):e==="focusout"&&Ps()}function V0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(or)}function B0(e,t){if(e==="click")return Fo(t)}function W0(e,t){if(e==="input"||e==="change")return Fo(t)}function H0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:H0;function ir(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ji.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function _s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ns(e,t){var n=_s(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_s(n)}}function Sc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kc(){for(var e=window,t=so();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=so(e.document)}return t}function ha(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Y0(e){var t=kc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sc(n.ownerDocument.documentElement,n)){if(r!==null&&ha(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ns(n,i);var l=Ns(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Q0=st&&"documentMode"in document&&11>=document.documentMode,qt=null,yl=null,Xn=null,gl=!1;function zs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gl||qt==null||qt!==so(r)||(r=qt,"selectionStart"in r&&ha(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xn&&ir(Xn,r)||(Xn=r,r=yo(yl,"onSelect"),0<r.length&&(t=new fa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function Or(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionend:Or("Transition","TransitionEnd")},ji={},Mc={};st&&(Mc=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function Do(e){if(ji[e])return ji[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mc)return ji[e]=t[n];return e}var Ec=Do("animationend"),Cc=Do("animationiteration"),Pc=Do("animationstart"),_c=Do("transitionend"),Nc=new Map,Ts="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){Nc.set(e,t),Xt(t,[e])}for(var $i=0;$i<Ts.length;$i++){var Oi=Ts[$i],X0=Oi.toLowerCase(),G0=Oi[0].toUpperCase()+Oi.slice(1);Tt(X0,"on"+G0)}Tt(Ec,"onAnimationEnd");Tt(Cc,"onAnimationIteration");Tt(Pc,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(_c,"onTransitionEnd");yn("onMouseEnter",["mouseout","mouseover"]);yn("onMouseLeave",["mouseout","mouseover"]);yn("onPointerEnter",["pointerout","pointerover"]);yn("onPointerLeave",["pointerout","pointerover"]);Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function Is(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xd(r,t,void 0,e),e.currentTarget=null}function zc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Is(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Is(o,a,u),i=s}}}if(co)throw e=dl,co=!1,dl=null,e}function B(e,t){var n=t[kl];n===void 0&&(n=t[kl]=new Set);var r=e+"__bubble";n.has(r)||(Tc(t,e,2,!1),n.add(r))}function Li(e,t,n){var r=0;t&&(r|=4),Tc(n,e,r,t)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Lr]){e[Lr]=!0,Fu.forEach(function(n){n!=="selectionchange"&&(K0.has(n)||Li(n,!1,e),Li(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lr]||(t[Lr]=!0,Li("selectionchange",!1,t))}}function Tc(e,t,n,r){switch(pc(t)){case 1:var o=u0;break;case 4:o=c0;break;default:o=ua}n=o.bind(null,t,n,e),o=void 0,!fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Fi(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Ft(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}qu(function(){var u=i,f=ia(n),d=[];e:{var m=Nc.get(e);if(m!==void 0){var v=fa,y=e;switch(e){case"keypress":if(Jr(n)===0)break e;case"keydown":case"keyup":v=C0;break;case"focusin":y="focus",v=Ti;break;case"focusout":y="blur",v=Ti;break;case"beforeblur":case"afterblur":v=Ti;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=N0;break;case Ec:case Cc:case Pc:v=y0;break;case _c:v=T0;break;case"scroll":v=f0;break;case"wheel":v=R0;break;case"copy":case"cut":case"paste":v=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ss}var g=(t&4)!==0,z=!g&&e==="scroll",p=g?m!==null?m+"Capture":null:m;g=[];for(var c=u,h;c!==null;){h=c;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,p!==null&&(w=er(c,p),w!=null&&g.push(ar(c,w,h)))),z)break;c=c.return}0<g.length&&(m=new v(m,y,null,n,f),d.push({event:m,listeners:g}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==ul&&(y=n.relatedTarget||n.fromElement)&&(Ft(y)||y[ut]))break e;if((v||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Ft(y):null,y!==null&&(z=Gt(y),y!==z||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(g=ws,w="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=Ss,w="onPointerLeave",p="onPointerEnter",c="pointer"),z=v==null?m:tn(v),h=y==null?m:tn(y),m=new g(w,c+"leave",v,n,f),m.target=z,m.relatedTarget=h,w=null,Ft(f)===u&&(g=new g(p,c+"enter",y,n,f),g.target=h,g.relatedTarget=z,w=g),z=w,v&&y)t:{for(g=v,p=y,c=0,h=g;h;h=Kt(h))c++;for(h=0,w=p;w;w=Kt(w))h++;for(;0<c-h;)g=Kt(g),c--;for(;0<h-c;)p=Kt(p),h--;for(;c--;){if(g===p||p!==null&&g===p.alternate)break t;g=Kt(g),p=Kt(p)}g=null}else g=null;v!==null&&Rs(d,m,v,g,!1),y!==null&&z!==null&&Rs(d,z,y,g,!0)}}e:{if(m=u?tn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var E=A0;else if(Es(m))if(wc)E=W0;else{E=V0;var C=U0}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=B0);if(E&&(E=E(e,u))){vc(d,E,n,f);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&ol(m,"number",m.value)}switch(C=u?tn(u):window,e){case"focusin":(Es(C)||C.contentEditable==="true")&&(qt=C,yl=u,Xn=null);break;case"focusout":Xn=yl=qt=null;break;case"mousedown":gl=!0;break;case"contextmenu":case"mouseup":case"dragend":gl=!1,zs(d,n,f);break;case"selectionchange":if(Q0)break;case"keydown":case"keyup":zs(d,n,f)}var M;if(pa)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else bt?yc(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(mc&&n.locale!=="ko"&&(bt||N!=="onCompositionStart"?N==="onCompositionEnd"&&bt&&(M=hc()):(vt=f,ca="value"in vt?vt.value:vt.textContent,bt=!0)),C=yo(u,N),0<C.length&&(N=new xs(N,e,null,n,f),d.push({event:N,listeners:C}),M?N.data=M:(M=gc(n),M!==null&&(N.data=M)))),(M=$0?O0(e,n):L0(e,n))&&(u=yo(u,"onBeforeInput"),0<u.length&&(f=new xs("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=M))}zc(d,t)})}function ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=er(e,n),i!=null&&r.unshift(ar(e,i,o)),i=er(e,t),i!=null&&r.push(ar(e,i,o))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=er(n,i),s!=null&&l.unshift(ar(n,s,a))):o||(s=er(n,i),s!=null&&l.push(ar(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Z0=/\r\n?/g,J0=/\u0000|\uFFFD/g;function js(e){return(typeof e=="string"?e:""+e).replace(Z0,`
`).replace(J0,"")}function Fr(e,t,n){if(t=js(t),js(e)!==t&&n)throw Error(x(425))}function go(){}var vl=null,wl=null;function xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,$s=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof $s<"u"?function(e){return $s.resolve(null).then(e).catch(ep)}:Sl;function ep(e){setTimeout(function(){throw e})}function Di(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);rr(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Os(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Pn,sr="__reactProps$"+Pn,ut="__reactContainer$"+Pn,kl="__reactEvents$"+Pn,tp="__reactListeners$"+Pn,np="__reactHandles$"+Pn;function Ft(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Os(e);e!==null;){if(n=e[qe])return n;e=Os(e)}return t}e=n,n=e.parentNode}return null}function kr(e){return e=e[qe]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Ao(e){return e[sr]||null}var Ml=[],nn=-1;function It(e){return{current:e}}function W(e){0>nn||(e.current=Ml[nn],Ml[nn]=null,nn--)}function V(e,t){nn++,Ml[nn]=e.current,e.current=t}var zt={},me=It(zt),ke=It(!1),Bt=zt;function gn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Me(e){return e=e.childContextTypes,e!=null}function vo(){W(ke),W(me)}function Ls(e,t,n){if(me.current!==zt)throw Error(x(168));V(me,t),V(ke,n)}function Ic(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(x(108,Ud(e)||"Unknown",o));return X({},n,r)}function wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Bt=me.current,V(me,e),V(ke,ke.current),!0}function Fs(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=Ic(e,t,Bt),r.__reactInternalMemoizedMergedChildContext=e,W(ke),W(me),V(me,e)):W(ke),V(ke,n)}var ot=null,Uo=!1,Ai=!1;function Rc(e){ot===null?ot=[e]:ot.push(e)}function rp(e){Uo=!0,Rc(e)}function Rt(){if(!Ai&&ot!==null){Ai=!0;var e=0,t=D;try{var n=ot;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,Uo=!1}catch(o){throw ot!==null&&(ot=ot.slice(e+1)),rc(la,Rt),o}finally{D=t,Ai=!1}}return null}var rn=[],on=0,xo=null,So=0,$e=[],Oe=0,Wt=null,it=1,lt="";function Ot(e,t){rn[on++]=So,rn[on++]=xo,xo=e,So=t}function jc(e,t,n){$e[Oe++]=it,$e[Oe++]=lt,$e[Oe++]=Wt,Wt=e;var r=it;e=lt;var o=32-Qe(r)-1;r&=~(1<<o),n+=1;var i=32-Qe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,it=1<<32-Qe(t)+o|n<<o|r,lt=i+e}else it=1<<i|n<<o|r,lt=e}function ma(e){e.return!==null&&(Ot(e,1),jc(e,1,0))}function ya(e){for(;e===xo;)xo=rn[--on],rn[on]=null,So=rn[--on],rn[on]=null;for(;e===Wt;)Wt=$e[--Oe],$e[Oe]=null,lt=$e[--Oe],$e[Oe]=null,it=$e[--Oe],$e[Oe]=null}var Ne=null,_e=null,H=!1,Ye=null;function $c(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ds(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,_e=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wt!==null?{id:it,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,_e=null,!0):!1;default:return!1}}function El(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cl(e){if(H){var t=_e;if(t){var n=t;if(!Ds(e,t)){if(El(e))throw Error(x(418));t=Mt(n.nextSibling);var r=Ne;t&&Ds(e,t)?$c(r,n):(e.flags=e.flags&-4097|2,H=!1,Ne=e)}}else{if(El(e))throw Error(x(418));e.flags=e.flags&-4097|2,H=!1,Ne=e}}}function As(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Dr(e){if(e!==Ne)return!1;if(!H)return As(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xl(e.type,e.memoizedProps)),t&&(t=_e)){if(El(e))throw Oc(),Error(x(418));for(;t;)$c(e,t),t=Mt(t.nextSibling)}if(As(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Ne?Mt(e.stateNode.nextSibling):null;return!0}function Oc(){for(var e=_e;e;)e=Mt(e.nextSibling)}function vn(){_e=Ne=null,H=!1}function ga(e){Ye===null?Ye=[e]:Ye.push(e)}var op=dt.ReactCurrentBatchConfig;function On(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Ar(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Us(e){var t=e._init;return t(e._payload)}function Lc(e){function t(p,c){if(e){var h=p.deletions;h===null?(p.deletions=[c],p.flags|=16):h.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=_t(p,c),p.index=0,p.sibling=null,p}function i(p,c,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<c?(p.flags|=2,c):h):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,h,w){return c===null||c.tag!==6?(c=Qi(h,p.mode,w),c.return=p,c):(c=o(c,h),c.return=p,c)}function s(p,c,h,w){var E=h.type;return E===Jt?f(p,c,h.props.children,w,h.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&Us(E)===c.type)?(w=o(c,h.props),w.ref=On(p,c,h),w.return=p,w):(w=oo(h.type,h.key,h.props,null,p.mode,w),w.ref=On(p,c,h),w.return=p,w)}function u(p,c,h,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Xi(h,p.mode,w),c.return=p,c):(c=o(c,h.children||[]),c.return=p,c)}function f(p,c,h,w,E){return c===null||c.tag!==7?(c=Vt(h,p.mode,w,E),c.return=p,c):(c=o(c,h),c.return=p,c)}function d(p,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Qi(""+c,p.mode,h),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Nr:return h=oo(c.type,c.key,c.props,null,p.mode,h),h.ref=On(p,null,c),h.return=p,h;case Zt:return c=Xi(c,p.mode,h),c.return=p,c;case ht:var w=c._init;return d(p,w(c._payload),h)}if(Un(c)||Tn(c))return c=Vt(c,p.mode,h,null),c.return=p,c;Ar(p,c)}return null}function m(p,c,h,w){var E=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:a(p,c,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Nr:return h.key===E?s(p,c,h,w):null;case Zt:return h.key===E?u(p,c,h,w):null;case ht:return E=h._init,m(p,c,E(h._payload),w)}if(Un(h)||Tn(h))return E!==null?null:f(p,c,h,w,null);Ar(p,h)}return null}function v(p,c,h,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(h)||null,a(c,p,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Nr:return p=p.get(w.key===null?h:w.key)||null,s(c,p,w,E);case Zt:return p=p.get(w.key===null?h:w.key)||null,u(c,p,w,E);case ht:var C=w._init;return v(p,c,h,C(w._payload),E)}if(Un(w)||Tn(w))return p=p.get(h)||null,f(c,p,w,E,null);Ar(c,w)}return null}function y(p,c,h,w){for(var E=null,C=null,M=c,N=c=0,K=null;M!==null&&N<h.length;N++){M.index>N?(K=M,M=null):K=M.sibling;var $=m(p,M,h[N],w);if($===null){M===null&&(M=K);break}e&&M&&$.alternate===null&&t(p,M),c=i($,c,N),C===null?E=$:C.sibling=$,C=$,M=K}if(N===h.length)return n(p,M),H&&Ot(p,N),E;if(M===null){for(;N<h.length;N++)M=d(p,h[N],w),M!==null&&(c=i(M,c,N),C===null?E=M:C.sibling=M,C=M);return H&&Ot(p,N),E}for(M=r(p,M);N<h.length;N++)K=v(M,p,N,h[N],w),K!==null&&(e&&K.alternate!==null&&M.delete(K.key===null?N:K.key),c=i(K,c,N),C===null?E=K:C.sibling=K,C=K);return e&&M.forEach(function(Ve){return t(p,Ve)}),H&&Ot(p,N),E}function g(p,c,h,w){var E=Tn(h);if(typeof E!="function")throw Error(x(150));if(h=E.call(h),h==null)throw Error(x(151));for(var C=E=null,M=c,N=c=0,K=null,$=h.next();M!==null&&!$.done;N++,$=h.next()){M.index>N?(K=M,M=null):K=M.sibling;var Ve=m(p,M,$.value,w);if(Ve===null){M===null&&(M=K);break}e&&M&&Ve.alternate===null&&t(p,M),c=i(Ve,c,N),C===null?E=Ve:C.sibling=Ve,C=Ve,M=K}if($.done)return n(p,M),H&&Ot(p,N),E;if(M===null){for(;!$.done;N++,$=h.next())$=d(p,$.value,w),$!==null&&(c=i($,c,N),C===null?E=$:C.sibling=$,C=$);return H&&Ot(p,N),E}for(M=r(p,M);!$.done;N++,$=h.next())$=v(M,p,N,$.value,w),$!==null&&(e&&$.alternate!==null&&M.delete($.key===null?N:$.key),c=i($,c,N),C===null?E=$:C.sibling=$,C=$);return e&&M.forEach(function(Nn){return t(p,Nn)}),H&&Ot(p,N),E}function z(p,c,h,w){if(typeof h=="object"&&h!==null&&h.type===Jt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Nr:e:{for(var E=h.key,C=c;C!==null;){if(C.key===E){if(E=h.type,E===Jt){if(C.tag===7){n(p,C.sibling),c=o(C,h.props.children),c.return=p,p=c;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&Us(E)===C.type){n(p,C.sibling),c=o(C,h.props),c.ref=On(p,C,h),c.return=p,p=c;break e}n(p,C);break}else t(p,C);C=C.sibling}h.type===Jt?(c=Vt(h.props.children,p.mode,w,h.key),c.return=p,p=c):(w=oo(h.type,h.key,h.props,null,p.mode,w),w.ref=On(p,c,h),w.return=p,p=w)}return l(p);case Zt:e:{for(C=h.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(p,c.sibling),c=o(c,h.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Xi(h,p.mode,w),c.return=p,p=c}return l(p);case ht:return C=h._init,z(p,c,C(h._payload),w)}if(Un(h))return y(p,c,h,w);if(Tn(h))return g(p,c,h,w);Ar(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,h),c.return=p,p=c):(n(p,c),c=Qi(h,p.mode,w),c.return=p,p=c),l(p)):n(p,c)}return z}var wn=Lc(!0),Fc=Lc(!1),ko=It(null),Mo=null,ln=null,va=null;function wa(){va=ln=Mo=null}function xa(e){var t=ko.current;W(ko),e._currentValue=t}function Pl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pn(e,t){Mo=e,va=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(va!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(Mo===null)throw Error(x(308));ln=e,Mo.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var Dt=null;function Sa(e){Dt===null?Dt=[e]:Dt.push(e)}function Dc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Sa(t)):(n.next=o.next,o.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Et(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ct(e,n)}return o=r.interleaved,o===null?(t.next=t,Sa(r)):(t.next=o.next,o.next=t),r.interleaved=t,ct(e,n)}function br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,aa(e,n)}}function Vs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Eo(e,t,n,r){var o=e.updateQueue;mt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;l=0,f=u=s=null,a=i;do{var m=a.lane,v=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,g=a;switch(m=t,v=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){d=y.call(v,d,m);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,m=typeof y=="function"?y.call(v,d,m):y,m==null)break e;d=X({},d,m);break e;case 2:mt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=v,s=d):f=f.next=v,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(f===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Yt|=l,e.lanes=l,e.memoizedState=d}}function Bs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(x(191,o));o.call(r)}}}var Mr={},tt=It(Mr),ur=It(Mr),cr=It(Mr);function At(e){if(e===Mr)throw Error(x(174));return e}function Ma(e,t){switch(V(cr,t),V(ur,e),V(tt,Mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ll(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ll(t,e)}W(tt),V(tt,t)}function xn(){W(tt),W(ur),W(cr)}function Uc(e){At(cr.current);var t=At(tt.current),n=ll(t,e.type);t!==n&&(V(ur,e),V(tt,n))}function Ea(e){ur.current===e&&(W(tt),W(ur))}var Y=It(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ui=[];function Ca(){for(var e=0;e<Ui.length;e++)Ui[e]._workInProgressVersionPrimary=null;Ui.length=0}var qr=dt.ReactCurrentDispatcher,Vi=dt.ReactCurrentBatchConfig,Ht=0,Q=null,ee=null,oe=null,Po=!1,Gn=!1,fr=0,ip=0;function fe(){throw Error(x(321))}function Pa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function _a(e,t,n,r,o,i){if(Ht=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qr.current=e===null||e.memoizedState===null?up:cp,e=n(r,o),Gn){i=0;do{if(Gn=!1,fr=0,25<=i)throw Error(x(301));i+=1,oe=ee=null,t.updateQueue=null,qr.current=fp,e=n(r,o)}while(Gn)}if(qr.current=_o,t=ee!==null&&ee.next!==null,Ht=0,oe=ee=Q=null,Po=!1,t)throw Error(x(300));return e}function Na(){var e=fr!==0;return fr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Q.memoizedState=oe=e:oe=oe.next=e,oe}function Ae(){if(ee===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=oe===null?Q.memoizedState:oe.next;if(t!==null)oe=t,ee=e;else{if(e===null)throw Error(x(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},oe===null?Q.memoizedState=oe=e:oe=oe.next=e}return oe}function dr(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=Ae(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=ee,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var f=u.lane;if((Ht&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,Q.lanes|=f,Yt|=f}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Ge(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Q.lanes|=i,Yt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wi(e){var t=Ae(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ge(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Vc(){}function Bc(e,t){var n=Q,r=Ae(),o=t(),i=!Ge(r.memoizedState,o);if(i&&(r.memoizedState=o,Se=!0),r=r.queue,za(Yc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,pr(9,Hc.bind(null,n,r,o,t),void 0,null),ie===null)throw Error(x(349));Ht&30||Wc(n,t,o)}return o}function Wc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hc(e,t,n,r){t.value=n,t.getSnapshot=r,Qc(t)&&Xc(e)}function Yc(e,t,n){return n(function(){Qc(t)&&Xc(e)})}function Qc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function Xc(e){var t=ct(e,1);t!==null&&Xe(t,e,1,-1)}function Ws(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=sp.bind(null,Q,e),[t.memoizedState,e]}function pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gc(){return Ae().memoizedState}function eo(e,t,n,r){var o=Ze();Q.flags|=e,o.memoizedState=pr(1|t,n,void 0,r===void 0?null:r)}function Vo(e,t,n,r){var o=Ae();r=r===void 0?null:r;var i=void 0;if(ee!==null){var l=ee.memoizedState;if(i=l.destroy,r!==null&&Pa(r,l.deps)){o.memoizedState=pr(t,n,i,r);return}}Q.flags|=e,o.memoizedState=pr(1|t,n,i,r)}function Hs(e,t){return eo(8390656,8,e,t)}function za(e,t){return Vo(2048,8,e,t)}function Kc(e,t){return Vo(4,2,e,t)}function Zc(e,t){return Vo(4,4,e,t)}function Jc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bc(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4,4,Jc.bind(null,t,e),n)}function Ta(){}function qc(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ef(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tf(e,t,n){return Ht&21?(Ge(n,t)||(n=lc(),Q.lanes|=n,Yt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function lp(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Vi.transition;Vi.transition={};try{e(!1),t()}finally{D=n,Vi.transition=r}}function nf(){return Ae().memoizedState}function ap(e,t,n){var r=Pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rf(e))of(t,n);else if(n=Dc(e,t,n,r),n!==null){var o=ge();Xe(n,e,r,o),lf(n,t,r)}}function sp(e,t,n){var r=Pt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rf(e))of(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Ge(a,l)){var s=t.interleaved;s===null?(o.next=o,Sa(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Dc(e,t,o,r),n!==null&&(o=ge(),Xe(n,e,r,o),lf(n,t,r))}}function rf(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function of(e,t){Gn=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,aa(e,n)}}var _o={readContext:De,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},up={readContext:De,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Hs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,eo(4194308,4,Jc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return eo(4,2,e,t)},useMemo:function(e,t){var n=Ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ap.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:Ws,useDebugValue:Ta,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=Ws(!1),t=e[0];return e=lp.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,o=Ze();if(H){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ie===null)throw Error(x(349));Ht&30||Wc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Hs(Yc.bind(null,r,i,e),[e]),r.flags|=2048,pr(9,Hc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ze(),t=ie.identifierPrefix;if(H){var n=lt,r=it;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ip++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cp={readContext:De,useCallback:qc,useContext:De,useEffect:za,useImperativeHandle:bc,useInsertionEffect:Kc,useLayoutEffect:Zc,useMemo:ef,useReducer:Bi,useRef:Gc,useState:function(){return Bi(dr)},useDebugValue:Ta,useDeferredValue:function(e){var t=Ae();return tf(t,ee.memoizedState,e)},useTransition:function(){var e=Bi(dr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Vc,useSyncExternalStore:Bc,useId:nf,unstable_isNewReconciler:!1},fp={readContext:De,useCallback:qc,useContext:De,useEffect:za,useImperativeHandle:bc,useInsertionEffect:Kc,useLayoutEffect:Zc,useMemo:ef,useReducer:Wi,useRef:Gc,useState:function(){return Wi(dr)},useDebugValue:Ta,useDeferredValue:function(e){var t=Ae();return ee===null?t.memoizedState=e:tf(t,ee.memoizedState,e)},useTransition:function(){var e=Wi(dr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Vc,useSyncExternalStore:Bc,useId:nf,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bo={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),o=Pt(e),i=at(r,o);i.payload=t,n!=null&&(i.callback=n),t=Et(e,i,o),t!==null&&(Xe(t,e,o,r),br(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),o=Pt(e),i=at(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Et(e,i,o),t!==null&&(Xe(t,e,o,r),br(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Pt(e),o=at(n,r);o.tag=2,t!=null&&(o.callback=t),t=Et(e,o,r),t!==null&&(Xe(t,e,r,n),br(t,e,r))}};function Ys(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!ir(n,r)||!ir(o,i):!0}function af(e,t,n){var r=!1,o=zt,i=t.contextType;return typeof i=="object"&&i!==null?i=De(i):(o=Me(t)?Bt:me.current,r=t.contextTypes,i=(r=r!=null)?gn(e,o):zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bo.enqueueReplaceState(t,t.state,null)}function Nl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ka(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=De(i):(i=Me(t)?Bt:me.current,o.context=gn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(_l(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Bo.enqueueReplaceState(o,o.state,null),Eo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Sn(e,t){try{var n="",r=t;do n+=Ad(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Hi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dp=typeof WeakMap=="function"?WeakMap:Map;function sf(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zo||(zo=!0,Al=r),zl(e,t)},n}function uf(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){zl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){zl(e,t),typeof r!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Xs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Pp.bind(null,e,t,n),t.then(e,e))}function Gs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ks(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Et(n,t,1))),n.lanes|=1),e)}var pp=dt.ReactCurrentOwner,Se=!1;function ye(e,t,n,r){t.child=e===null?Fc(t,null,n,r):wn(t,e.child,n,r)}function Zs(e,t,n,r,o){n=n.render;var i=t.ref;return pn(t,o),r=_a(e,t,n,r,i,o),n=Na(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ft(e,t,o)):(H&&n&&ma(t),t.flags|=1,ye(e,t,r,o),t.child)}function Js(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Da(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,cf(e,t,i,r,o)):(e=oo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(l,r)&&e.ref===t.ref)return ft(e,t,o)}return t.flags|=1,e=_t(i,r),e.ref=t.ref,e.return=t,t.child=e}function cf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ir(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,ft(e,t,o)}return Tl(e,t,n,r,o)}function ff(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(sn,Pe),Pe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(sn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(sn,Pe),Pe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(sn,Pe),Pe|=r;return ye(e,t,o,n),t.child}function df(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,n,r,o){var i=Me(n)?Bt:me.current;return i=gn(t,i),pn(t,o),n=_a(e,t,n,r,i,o),r=Na(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ft(e,t,o)):(H&&r&&ma(t),t.flags|=1,ye(e,t,n,o),t.child)}function bs(e,t,n,r,o){if(Me(n)){var i=!0;wo(t)}else i=!1;if(pn(t,o),t.stateNode===null)to(e,t),af(t,n,r),Nl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=De(u):(u=Me(n)?Bt:me.current,u=gn(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Qs(t,l,r,u),mt=!1;var m=t.memoizedState;l.state=m,Eo(t,r,l,o),s=t.memoizedState,a!==r||m!==s||ke.current||mt?(typeof f=="function"&&(_l(t,n,f,r),s=t.memoizedState),(a=mt||Ys(t,n,a,r,m,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Ac(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:We(t.type,a),l.props=u,d=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=De(s):(s=Me(n)?Bt:me.current,s=gn(t,s));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||m!==s)&&Qs(t,l,r,s),mt=!1,m=t.memoizedState,l.state=m,Eo(t,r,l,o);var y=t.memoizedState;a!==d||m!==y||ke.current||mt?(typeof v=="function"&&(_l(t,n,v,r),y=t.memoizedState),(u=mt||Ys(t,n,u,r,m,y,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,i,o)}function Il(e,t,n,r,o,i){df(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Fs(t,n,!1),ft(e,t,i);r=t.stateNode,pp.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=wn(t,e.child,null,i),t.child=wn(t,null,a,i)):ye(e,t,a,i),t.memoizedState=r.state,o&&Fs(t,n,!0),t.child}function pf(e){var t=e.stateNode;t.pendingContext?Ls(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ls(e,t.context,!1),Ma(e,t.containerInfo)}function qs(e,t,n,r,o){return vn(),ga(o),t.flags|=256,ye(e,t,n,r),t.child}var Rl={dehydrated:null,treeContext:null,retryLane:0};function jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function hf(e,t,n){var r=t.pendingProps,o=Y.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(Y,o&1),e===null)return Cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Yo(l,r,0,null),e=Vt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=jl(n),t.memoizedState=Rl,e):Ia(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return hp(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=_t(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=_t(a,i):(i=Vt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?jl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Rl,r}return i=e.child,e=i.sibling,r=_t(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ia(e,t){return t=Yo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ur(e,t,n,r){return r!==null&&ga(r),wn(t,e.child,null,n),e=Ia(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Hi(Error(x(422))),Ur(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Yo({mode:"visible",children:r.children},o,0,null),i=Vt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&wn(t,e.child,null,l),t.child.memoizedState=jl(l),t.memoizedState=Rl,i);if(!(t.mode&1))return Ur(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(x(419)),r=Hi(i,r,void 0),Ur(e,t,l,r)}if(a=(l&e.childLanes)!==0,Se||a){if(r=ie,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ct(e,o),Xe(r,e,o,-1))}return Fa(),r=Hi(Error(x(421))),Ur(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=_p.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,_e=Mt(o.nextSibling),Ne=t,H=!0,Ye=null,e!==null&&($e[Oe++]=it,$e[Oe++]=lt,$e[Oe++]=Wt,it=e.id,lt=e.overflow,Wt=t),t=Ia(t,r.children),t.flags|=4096,t)}function eu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pl(e.return,t,n)}function Yi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function mf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ye(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eu(e,n,t);else if(e.tag===19)eu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Y,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Yi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Co(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Yi(t,!0,n,null,i);break;case"together":Yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function to(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=_t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mp(e,t,n){switch(t.tag){case 3:pf(t),vn();break;case 5:Uc(t);break;case 1:Me(t.type)&&wo(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(ko,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?hf(e,t,n):(V(Y,Y.current&1),e=ft(e,t,n),e!==null?e.sibling:null);V(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,ff(e,t,n)}return ft(e,t,n)}var yf,$l,gf,vf;yf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$l=function(){};gf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,At(tt.current);var i=null;switch(n){case"input":o=nl(e,o),r=nl(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=il(e,o),r=il(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=go)}al(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bn.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bn.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&B("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};vf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ln(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yp(e,t,n){var r=t.pendingProps;switch(ya(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Me(t.type)&&vo(),de(t),null;case 3:return r=t.stateNode,xn(),W(ke),W(me),Ca(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Bl(Ye),Ye=null))),$l(e,t),de(t),null;case 5:Ea(t);var o=At(cr.current);if(n=t.type,e!==null&&t.stateNode!=null)gf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return de(t),null}if(e=At(tt.current),Dr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[qe]=t,r[sr]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Bn.length;o++)B(Bn[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":us(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":fs(r,i),B("invalid",r)}al(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Fr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Fr(r.textContent,a,e),o=["children",""+a]):bn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":zr(r),cs(r,i,!0);break;case"textarea":zr(r),ds(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=go)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[qe]=t,e[sr]=r,yf(e,t,!1,!1),t.stateNode=e;e:{switch(l=sl(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Bn.length;o++)B(Bn[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":us(e,r),o=nl(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),B("invalid",e);break;case"textarea":fs(e,r),o=il(e,r),B("invalid",e);break;default:o=r}al(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Gu(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Qu(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&qn(e,s):typeof s=="number"&&qn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(bn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&B("scroll",e):s!=null&&ta(e,i,s,l))}switch(n){case"input":zr(e),cs(e,r,!1);break;case"textarea":zr(e),ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)vf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=At(cr.current),At(tt.current),Dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(i=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return de(t),null;case 13:if(W(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&_e!==null&&t.mode&1&&!(t.flags&128))Oc(),vn(),t.flags|=98560,i=!1;else if(i=Dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[qe]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else Ye!==null&&(Bl(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?te===0&&(te=3):Fa())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return xn(),$l(e,t),e===null&&lr(t.stateNode.containerInfo),de(t),null;case 10:return xa(t.type._context),de(t),null;case 17:return Me(t.type)&&vo(),de(t),null;case 19:if(W(Y),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Ln(i,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Co(e),l!==null){for(t.flags|=128,Ln(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>kn&&(t.flags|=128,r=!0,Ln(i,!1),t.lanes=4194304)}else{if(!r)if(e=Co(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!H)return de(t),null}else 2*J()-i.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Ln(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=Y.current,V(Y,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return La(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function gp(e,t){switch(ya(t),t.tag){case 1:return Me(t.type)&&vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),W(ke),W(me),Ca(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ea(t),null;case 13:if(W(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Y),null;case 4:return xn(),null;case 10:return xa(t.type._context),null;case 22:case 23:return La(),null;case 24:return null;default:return null}}var Vr=!1,he=!1,vp=typeof WeakSet=="function"?WeakSet:Set,P=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Ol(e,t,n){try{n()}catch(r){G(e,t,r)}}var tu=!1;function wp(e,t){if(vl=ho,e=kc(),ha(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(a=l+o),d!==i||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(v=d.firstChild)!==null;)m=d,d=v;for(;;){if(d===e)break t;if(m===n&&++u===o&&(a=l),m===i&&++f===r&&(s=l),(v=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(wl={focusedElem:e,selectionRange:n},ho=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,z=y.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?g:We(t.type,g),z);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(w){G(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=tu,tu=!1,y}function Kn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ol(t,n,i)}o=o.next}while(o!==r)}}function Wo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ll(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wf(e){var t=e.alternate;t!==null&&(e.alternate=null,wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[sr],delete t[kl],delete t[tp],delete t[np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xf(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=go));else if(r!==4&&(e=e.child,e!==null))for(Fl(e,t,n),e=e.sibling;e!==null;)Fl(e,t,n),e=e.sibling}function Dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Dl(e,t,n),e=e.sibling;e!==null;)Dl(e,t,n),e=e.sibling}var ae=null,He=!1;function pt(e,t,n){for(n=n.child;n!==null;)Sf(e,t,n),n=n.sibling}function Sf(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Oo,n)}catch{}switch(n.tag){case 5:he||an(n,t);case 6:var r=ae,o=He;ae=null,pt(e,t,n),ae=r,He=o,ae!==null&&(He?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(He?(e=ae,n=n.stateNode,e.nodeType===8?Di(e.parentNode,n):e.nodeType===1&&Di(e,n),rr(e)):Di(ae,n.stateNode));break;case 4:r=ae,o=He,ae=n.stateNode.containerInfo,He=!0,pt(e,t,n),ae=r,He=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ol(n,t,l),o=o.next}while(o!==r)}pt(e,t,n);break;case 1:if(!he&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,pt(e,t,n),he=r):pt(e,t,n);break;default:pt(e,t,n)}}function ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vp),t.forEach(function(r){var o=Np.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ae=a.stateNode,He=!1;break e;case 3:ae=a.stateNode.containerInfo,He=!0;break e;case 4:ae=a.stateNode.containerInfo,He=!0;break e}a=a.return}if(ae===null)throw Error(x(160));Sf(i,l,o),ae=null,He=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){G(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kf(t,e),t=t.sibling}function kf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ke(e),r&4){try{Kn(3,e,e.return),Wo(3,e)}catch(g){G(e,e.return,g)}try{Kn(5,e,e.return)}catch(g){G(e,e.return,g)}}break;case 1:Be(t,e),Ke(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Be(t,e),Ke(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var o=e.stateNode;try{qn(o,"")}catch(g){G(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Wu(o,i),sl(a,l);var u=sl(a,i);for(l=0;l<s.length;l+=2){var f=s[l],d=s[l+1];f==="style"?Gu(o,d):f==="dangerouslySetInnerHTML"?Qu(o,d):f==="children"?qn(o,d):ta(o,f,d,u)}switch(a){case"input":rl(o,i);break;case"textarea":Hu(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?un(o,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?un(o,!!i.multiple,i.defaultValue,!0):un(o,!!i.multiple,i.multiple?[]:"",!1))}o[sr]=i}catch(g){G(e,e.return,g)}}break;case 6:if(Be(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){G(e,e.return,g)}}break;case 3:if(Be(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rr(t.containerInfo)}catch(g){G(e,e.return,g)}break;case 4:Be(t,e),Ke(e);break;case 13:Be(t,e),Ke(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||($a=J())),r&4&&ru(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||f,Be(t,e),he=u):Be(t,e),Ke(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(P=e,f=e.child;f!==null;){for(d=P=f;P!==null;){switch(m=P,v=m.child,m.tag){case 0:case 11:case 14:case 15:Kn(4,m,m.return);break;case 1:an(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(g){G(r,n,g)}}break;case 5:an(m,m.return);break;case 22:if(m.memoizedState!==null){iu(d);continue}}v!==null?(v.return=m,P=v):iu(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Xu("display",l))}catch(g){G(e,e.return,g)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){G(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Be(t,e),Ke(e),r&4&&ru(e);break;case 21:break;default:Be(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xf(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qn(o,""),r.flags&=-33);var i=nu(e);Dl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=nu(e);Fl(e,a,l);break;default:throw Error(x(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xp(e,t,n){P=e,Mf(e)}function Mf(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Vr;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||he;a=Vr;var u=he;if(Vr=l,(he=s)&&!u)for(P=o;P!==null;)l=P,s=l.child,l.tag===22&&l.memoizedState!==null?lu(o):s!==null?(s.return=l,P=s):lu(o);for(;i!==null;)P=i,Mf(i),i=i.sibling;P=o,Vr=a,he=u}ou(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):ou(e)}}function ou(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Wo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Bs(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bs(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&rr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}he||t.flags&512&&Ll(t)}catch(m){G(t,t.return,m)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function iu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function lu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wo(4,t)}catch(s){G(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){G(t,o,s)}}var i=t.return;try{Ll(t)}catch(s){G(t,i,s)}break;case 5:var l=t.return;try{Ll(t)}catch(s){G(t,l,s)}}}catch(s){G(t,t.return,s)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var Sp=Math.ceil,No=dt.ReactCurrentDispatcher,Ra=dt.ReactCurrentOwner,Fe=dt.ReactCurrentBatchConfig,O=0,ie=null,q=null,ue=0,Pe=0,sn=It(0),te=0,hr=null,Yt=0,Ho=0,ja=0,Zn=null,xe=null,$a=0,kn=1/0,rt=null,zo=!1,Al=null,Ct=null,Br=!1,wt=null,To=0,Jn=0,Ul=null,no=-1,ro=0;function ge(){return O&6?J():no!==-1?no:no=J()}function Pt(e){return e.mode&1?O&2&&ue!==0?ue&-ue:op.transition!==null?(ro===0&&(ro=lc()),ro):(e=D,e!==0||(e=window.event,e=e===void 0?16:pc(e.type)),e):1}function Xe(e,t,n,r){if(50<Jn)throw Jn=0,Ul=null,Error(x(185));xr(e,n,r),(!(O&2)||e!==ie)&&(e===ie&&(!(O&2)&&(Ho|=n),te===4&&gt(e,ue)),Ee(e,r),n===1&&O===0&&!(t.mode&1)&&(kn=J()+500,Uo&&Rt()))}function Ee(e,t){var n=e.callbackNode;o0(e,t);var r=po(e,e===ie?ue:0);if(r===0)n!==null&&ms(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ms(n),t===1)e.tag===0?rp(au.bind(null,e)):Rc(au.bind(null,e)),q0(function(){!(O&6)&&Rt()}),n=null;else{switch(ac(r)){case 1:n=la;break;case 4:n=oc;break;case 16:n=fo;break;case 536870912:n=ic;break;default:n=fo}n=If(n,Ef.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ef(e,t){if(no=-1,ro=0,O&6)throw Error(x(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=po(e,e===ie?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Io(e,r);else{t=r;var o=O;O|=2;var i=Pf();(ie!==e||ue!==t)&&(rt=null,kn=J()+500,Ut(e,t));do try{Ep();break}catch(a){Cf(e,a)}while(!0);wa(),No.current=i,O=o,q!==null?t=0:(ie=null,ue=0,t=te)}if(t!==0){if(t===2&&(o=pl(e),o!==0&&(r=o,t=Vl(e,o))),t===1)throw n=hr,Ut(e,0),gt(e,r),Ee(e,J()),n;if(t===6)gt(e,r);else{if(o=e.current.alternate,!(r&30)&&!kp(o)&&(t=Io(e,r),t===2&&(i=pl(e),i!==0&&(r=i,t=Vl(e,i))),t===1))throw n=hr,Ut(e,0),gt(e,r),Ee(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Lt(e,xe,rt);break;case 3:if(gt(e,r),(r&130023424)===r&&(t=$a+500-J(),10<t)){if(po(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Sl(Lt.bind(null,e,xe,rt),t);break}Lt(e,xe,rt);break;case 4:if(gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Qe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sp(r/1960))-r,10<r){e.timeoutHandle=Sl(Lt.bind(null,e,xe,rt),r);break}Lt(e,xe,rt);break;case 5:Lt(e,xe,rt);break;default:throw Error(x(329))}}}return Ee(e,J()),e.callbackNode===n?Ef.bind(null,e):null}function Vl(e,t){var n=Zn;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=Io(e,t),e!==2&&(t=xe,xe=n,t!==null&&Bl(t)),e}function Bl(e){xe===null?xe=e:xe.push.apply(xe,e)}function kp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ge(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gt(e,t){for(t&=~ja,t&=~Ho,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function au(e){if(O&6)throw Error(x(327));hn();var t=po(e,0);if(!(t&1))return Ee(e,J()),null;var n=Io(e,t);if(e.tag!==0&&n===2){var r=pl(e);r!==0&&(t=r,n=Vl(e,r))}if(n===1)throw n=hr,Ut(e,0),gt(e,t),Ee(e,J()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,xe,rt),Ee(e,J()),null}function Oa(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(kn=J()+500,Uo&&Rt())}}function Qt(e){wt!==null&&wt.tag===0&&!(O&6)&&hn();var t=O;O|=1;var n=Fe.transition,r=D;try{if(Fe.transition=null,D=1,e)return e()}finally{D=r,Fe.transition=n,O=t,!(O&6)&&Rt()}}function La(){Pe=sn.current,W(sn)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,b0(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(ya(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vo();break;case 3:xn(),W(ke),W(me),Ca();break;case 5:Ea(r);break;case 4:xn();break;case 13:W(Y);break;case 19:W(Y);break;case 10:xa(r.type._context);break;case 22:case 23:La()}n=n.return}if(ie=e,q=e=_t(e.current,null),ue=Pe=t,te=0,hr=null,ja=Ho=Yt=0,xe=Zn=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Dt=null}return e}function Cf(e,t){do{var n=q;try{if(wa(),qr.current=_o,Po){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Po=!1}if(Ht=0,oe=ee=Q=null,Gn=!1,fr=0,Ra.current=null,n===null||n.return===null){te=1,hr=t,q=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=ue,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Gs(l);if(v!==null){v.flags&=-257,Ks(v,l,a,i,t),v.mode&1&&Xs(i,u,t),t=v,s=u;var y=t.updateQueue;if(y===null){var g=new Set;g.add(s),t.updateQueue=g}else y.add(s);break e}else{if(!(t&1)){Xs(i,u,t),Fa();break e}s=Error(x(426))}}else if(H&&a.mode&1){var z=Gs(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Ks(z,l,a,i,t),ga(Sn(s,a));break e}}i=s=Sn(s,a),te!==4&&(te=2),Zn===null?Zn=[i]:Zn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=sf(i,s,t);Vs(i,p);break e;case 1:a=s;var c=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ct===null||!Ct.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=uf(i,a,t);Vs(i,w);break e}}i=i.return}while(i!==null)}Nf(n)}catch(E){t=E,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function Pf(){var e=No.current;return No.current=_o,e===null?_o:e}function Fa(){(te===0||te===3||te===2)&&(te=4),ie===null||!(Yt&268435455)&&!(Ho&268435455)||gt(ie,ue)}function Io(e,t){var n=O;O|=2;var r=Pf();(ie!==e||ue!==t)&&(rt=null,Ut(e,t));do try{Mp();break}catch(o){Cf(e,o)}while(!0);if(wa(),O=n,No.current=r,q!==null)throw Error(x(261));return ie=null,ue=0,te}function Mp(){for(;q!==null;)_f(q)}function Ep(){for(;q!==null&&!Kd();)_f(q)}function _f(e){var t=Tf(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?Nf(e):q=t,Ra.current=null}function Nf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gp(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=yp(n,t,Pe),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function Lt(e,t,n){var r=D,o=Fe.transition;try{Fe.transition=null,D=1,Cp(e,t,n,r)}finally{Fe.transition=o,D=r}return null}function Cp(e,t,n,r){do hn();while(wt!==null);if(O&6)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(i0(e,i),e===ie&&(q=ie=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Br||(Br=!0,If(fo,function(){return hn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Fe.transition,Fe.transition=null;var l=D;D=1;var a=O;O|=4,Ra.current=null,wp(e,n),kf(n,e),Y0(wl),ho=!!vl,wl=vl=null,e.current=n,xp(n),Zd(),O=a,D=l,Fe.transition=i}else e.current=n;if(Br&&(Br=!1,wt=e,To=o),i=e.pendingLanes,i===0&&(Ct=null),qd(n.stateNode),Ee(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(zo)throw zo=!1,e=Al,Al=null,e;return To&1&&e.tag!==0&&hn(),i=e.pendingLanes,i&1?e===Ul?Jn++:(Jn=0,Ul=e):Jn=0,Rt(),null}function hn(){if(wt!==null){var e=ac(To),t=Fe.transition,n=D;try{if(Fe.transition=null,D=16>e?16:e,wt===null)var r=!1;else{if(e=wt,wt=null,To=0,O&6)throw Error(x(331));var o=O;for(O|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(P=u;P!==null;){var f=P;switch(f.tag){case 0:case 11:case 15:Kn(8,f,i)}var d=f.child;if(d!==null)d.return=f,P=d;else for(;P!==null;){f=P;var m=f.sibling,v=f.return;if(wf(f),f===u){P=null;break}if(m!==null){m.return=v,P=m;break}P=v}}}var y=i.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var z=g.sibling;g.sibling=null,g=z}while(g!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Kn(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,P=p;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){l=P;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,P=h;else e:for(l=c;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wo(9,a)}}catch(E){G(a,a.return,E)}if(a===l){P=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,P=w;break e}P=a.return}}if(O=o,Rt(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Oo,e)}catch{}r=!0}return r}finally{D=n,Fe.transition=t}}return!1}function su(e,t,n){t=Sn(n,t),t=sf(e,t,1),e=Et(e,t,1),t=ge(),e!==null&&(xr(e,1,t),Ee(e,t))}function G(e,t,n){if(e.tag===3)su(e,e,n);else for(;t!==null;){if(t.tag===3){su(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){e=Sn(n,e),e=uf(t,e,1),t=Et(t,e,1),e=ge(),t!==null&&(xr(t,1,e),Ee(t,e));break}}t=t.return}}function Pp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ue&n)===n&&(te===4||te===3&&(ue&130023424)===ue&&500>J()-$a?Ut(e,0):ja|=n),Ee(e,t)}function zf(e,t){t===0&&(e.mode&1?(t=Rr,Rr<<=1,!(Rr&130023424)&&(Rr=4194304)):t=1);var n=ge();e=ct(e,t),e!==null&&(xr(e,t,n),Ee(e,n))}function _p(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zf(e,n)}function Np(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),zf(e,n)}var Tf;Tf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,mp(e,t,n);Se=!!(e.flags&131072)}else Se=!1,H&&t.flags&1048576&&jc(t,So,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;to(e,t),e=t.pendingProps;var o=gn(t,me.current);pn(t,n),o=_a(null,t,r,e,o,n);var i=Na();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,wo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ka(t),o.updater=Bo,t.stateNode=o,o._reactInternals=t,Nl(t,r,e,n),t=Il(null,t,r,!0,i,n)):(t.tag=0,H&&i&&ma(t),ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(to(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Tp(r),e=We(r,e),o){case 0:t=Tl(null,t,r,e,n);break e;case 1:t=bs(null,t,r,e,n);break e;case 11:t=Zs(null,t,r,e,n);break e;case 14:t=Js(null,t,r,We(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Tl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),bs(e,t,r,o,n);case 3:e:{if(pf(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Ac(e,t),Eo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Sn(Error(x(423)),t),t=qs(e,t,r,n,o);break e}else if(r!==o){o=Sn(Error(x(424)),t),t=qs(e,t,r,n,o);break e}else for(_e=Mt(t.stateNode.containerInfo.firstChild),Ne=t,H=!0,Ye=null,n=Fc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===o){t=ft(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return Uc(t),e===null&&Cl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,xl(r,o)?l=null:i!==null&&xl(r,i)&&(t.flags|=32),df(e,t),ye(e,t,l,n),t.child;case 6:return e===null&&Cl(t),null;case 13:return hf(e,t,n);case 4:return Ma(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Zs(e,t,r,o,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,V(ko,r._currentValue),r._currentValue=l,i!==null)if(Ge(i.value,l)){if(i.children===o.children&&!ke.current){t=ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=at(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Pl(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(x(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Pl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pn(t,n),o=De(o),r=r(o),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,o=We(r,t.pendingProps),o=We(r.type,o),Js(e,t,r,o,n);case 15:return cf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),to(e,t),t.tag=1,Me(r)?(e=!0,wo(t)):e=!1,pn(t,n),af(t,r,o),Nl(t,r,o,n),Il(null,t,r,!0,e,n);case 19:return mf(e,t,n);case 22:return ff(e,t,n)}throw Error(x(156,t.tag))};function If(e,t){return rc(e,t)}function zp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new zp(e,t,n,r)}function Da(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tp(e){if(typeof e=="function")return Da(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ra)return 11;if(e===oa)return 14}return 2}function _t(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Da(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Jt:return Vt(n.children,o,i,t);case na:l=8,o|=8;break;case bi:return e=Le(12,n,t,o|2),e.elementType=bi,e.lanes=i,e;case qi:return e=Le(13,n,t,o),e.elementType=qi,e.lanes=i,e;case el:return e=Le(19,n,t,o),e.elementType=el,e.lanes=i,e;case Uu:return Yo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Du:l=10;break e;case Au:l=9;break e;case ra:l=11;break e;case oa:l=14;break e;case ht:l=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Le(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Vt(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function Yo(e,t,n,r){return e=Le(22,e,r,t),e.elementType=Uu,e.lanes=n,e.stateNode={isHidden:!1},e}function Qi(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function Xi(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ip(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_i(0),this.expirationTimes=_i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_i(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Aa(e,t,n,r,o,i,l,a,s){return e=new Ip(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Le(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ka(i),e}function Rp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rf(e){if(!e)return zt;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(Me(n))return Ic(e,n,t)}return t}function jf(e,t,n,r,o,i,l,a,s){return e=Aa(n,r,!0,e,o,i,l,a,s),e.context=Rf(null),n=e.current,r=ge(),o=Pt(n),i=at(r,o),i.callback=t??null,Et(n,i,o),e.current.lanes=o,xr(e,o,r),Ee(e,r),e}function Qo(e,t,n,r){var o=t.current,i=ge(),l=Pt(o);return n=Rf(n),t.context===null?t.context=n:t.pendingContext=n,t=at(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Et(o,t,l),e!==null&&(Xe(e,o,l,i),br(e,o,l)),l}function Ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ua(e,t){uu(e,t),(e=e.alternate)&&uu(e,t)}function jp(){return null}var $f=typeof reportError=="function"?reportError:function(e){console.error(e)};function Va(e){this._internalRoot=e}Xo.prototype.render=Va.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Qo(e,t,null,null)};Xo.prototype.unmount=Va.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qt(function(){Qo(null,e,null,null)}),t[ut]=null}};function Xo(e){this._internalRoot=e}Xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=cc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&dc(e)}};function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cu(){}function $p(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ro(l);i.call(u)}}var l=jf(t,r,e,0,null,!1,!1,"",cu);return e._reactRootContainer=l,e[ut]=l.current,lr(e.nodeType===8?e.parentNode:e),Qt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Ro(s);a.call(u)}}var s=Aa(e,0,!1,null,null,!1,!1,"",cu);return e._reactRootContainer=s,e[ut]=s.current,lr(e.nodeType===8?e.parentNode:e),Qt(function(){Qo(t,s,n,r)}),s}function Ko(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Ro(l);a.call(s)}}Qo(t,l,e,o)}else l=$p(n,t,e,o,r);return Ro(l)}sc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vn(t.pendingLanes);n!==0&&(aa(t,n|1),Ee(t,J()),!(O&6)&&(kn=J()+500,Rt()))}break;case 13:Qt(function(){var r=ct(e,1);if(r!==null){var o=ge();Xe(r,e,1,o)}}),Ua(e,1)}};sa=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=ge();Xe(t,e,134217728,n)}Ua(e,134217728)}};uc=function(e){if(e.tag===13){var t=Pt(e),n=ct(e,t);if(n!==null){var r=ge();Xe(n,e,t,r)}Ua(e,t)}};cc=function(){return D};fc=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};cl=function(e,t,n){switch(t){case"input":if(rl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ao(r);if(!o)throw Error(x(90));Bu(r),rl(r,o)}}}break;case"textarea":Hu(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Ju=Oa;bu=Qt;var Op={usingClientEntryPoint:!1,Events:[kr,tn,Ao,Ku,Zu,Oa]},Fn={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lp={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tc(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||jp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{Oo=Wr.inject(Lp),et=Wr}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Op;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ba(t))throw Error(x(200));return Rp(e,t,null,n)};Ie.createRoot=function(e,t){if(!Ba(e))throw Error(x(299));var n=!1,r="",o=$f;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Aa(e,1,!1,null,null,n,!1,r,o),e[ut]=t.current,lr(e.nodeType===8?e.parentNode:e),new Va(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=tc(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return Qt(e)};Ie.hydrate=function(e,t,n){if(!Go(t))throw Error(x(200));return Ko(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!Ba(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=$f;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=jf(t,null,e,1,n??null,o,!1,i,l),e[ut]=t.current,lr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Xo(t)};Ie.render=function(e,t,n){if(!Go(t))throw Error(x(200));return Ko(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!Go(e))throw Error(x(40));return e._reactRootContainer?(Qt(function(){Ko(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Ie.unstable_batchedUpdates=Oa;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Go(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Ko(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function Of(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Of)}catch(e){console.error(e)}}Of(),$u.exports=Ie;var Fp=$u.exports,Lf,fu=Fp;Lf=fu.createRoot,fu.hydrateRoot;function du(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Dp(e,t,n){return(t=function(r){var o=function(i,l){if(typeof i!="object"||!i)return i;var a=i[Symbol.toPrimitive];if(a!==void 0){var s=a.call(i,l||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(i)}(r,"string");return typeof o=="symbol"?o:o+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ap(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pu(Object(n),!0).forEach(function(r){Dp(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Up(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,r){var o=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var i,l,a,s,u=[],f=!0,d=!1;try{if(a=(o=o.call(n)).next,r!==0)for(;!(f=(i=a.call(o)).done)&&(u.push(i.value),u.length!==r);f=!0);}catch(m){d=!0,l=m}finally{try{if(!f&&o.return!=null&&(s=o.return(),Object(s)!==s))return}finally{if(d)throw l}}return u}}(e,t)||function(n,r){if(n){if(typeof n=="string")return du(n,r);var o={}.toString.call(n).slice(8,-1);return o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set"?Array.from(n):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?du(n,r):void 0}}(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}var Vp=function(e,t){for(var n=[],r=0;r<150;r++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,radius:2*Math.random(),vx:Math.floor(50*Math.random())-25,vy:Math.floor(50*Math.random())-25,twinkle:Math.random()});return function(){t.fillStyle="rgba(15, 23, 42, 0.1)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#FFF",n.forEach(function(o){o.twinkle+=.02;var i=Math.abs(Math.sin(o.twinkle));t.beginPath(),t.arc(o.x,o.y,o.radius,0,2*Math.PI),t.fillStyle="rgba(255, 255, 255, ".concat(i,")"),t.fill(),o.x+=o.vx/60,o.y+=o.vy/60,(o.x<0||o.x>e.width)&&(o.vx=-o.vx),(o.y<0||o.y>e.height)&&(o.vy=-o.vy)})}},Bp=function(e,t){for(var n=[],r=0;r<75;r++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,radius:30*Math.random()+5,speed:.7*Math.random()+.1,color:"hsla(".concat(360*Math.random(),", 70%, 60%, 0.6)")});return function(){t.fillStyle="rgba(30, 41, 59, 0.1)",t.fillRect(0,0,e.width,e.height),n.forEach(function(o){t.beginPath(),t.arc(o.x,o.y,o.radius,0,2*Math.PI),t.fillStyle=o.color,t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.3)",t.stroke(),o.y-=o.speed,o.x+=.5*Math.sin(.03*o.y),o.y+o.radius<0&&(o.y=e.height+o.radius,o.x=Math.random()*e.width)})}},Wp=function(e,t){var n=0;return function(){n+=.01;var r=t.createLinearGradient(0,0,e.width,e.height);r.addColorStop(0,"hsl(".concat(10*n%360,", 70%, 50%)")),r.addColorStop(1,"hsl(".concat((10*n+180)%360,", 70%, 50%)")),t.fillStyle=r,t.fillRect(0,0,e.width,e.height);for(var o=0;o<7;o++){t.beginPath(),t.moveTo(0,.15*e.height*o+30*Math.sin(n+o));for(var i=0;i<e.width;i+=10)t.lineTo(i,.15*e.height*o+30*Math.sin(n+o+.01*i));t.strokeStyle="rgba(255, 255, 255, ".concat(.1-.01*o,")"),t.lineWidth=2,t.stroke()}}},Hp=function(e,t){for(var n=[],r=0;r<150;r++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,radius:3*Math.random()+1,vx:1.5*Math.random()-.75,vy:1.5*Math.random()-.75,color:"hsl(".concat(360*Math.random(),", 70%, 70%)")});return function(){t.fillStyle="rgba(15, 23, 42, 0.1)",t.fillRect(0,0,e.width,e.height),n.forEach(function(u){u.x+=u.vx,u.y+=u.vy,(u.x<0||u.x>e.width)&&(u.vx*=-1),(u.y<0||u.y>e.height)&&(u.vy*=-1),t.beginPath(),t.arc(u.x,u.y,u.radius,0,2*Math.PI),t.fillStyle=u.color,t.fill()});for(var o=0;o<n.length;o++)for(var i=o+1;i<n.length;i++){var l=n[o].x-n[i].x,a=n[o].y-n[i].y,s=Math.sqrt(l*l+a*a);s<120&&(t.beginPath(),t.moveTo(n[o].x,n[o].y),t.lineTo(n[i].x,n[i].y),t.strokeStyle="rgba(255, 255, 255, ".concat(1-s/120,")"),t.lineWidth=.5,t.stroke())}}},Yp=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1e-4,r=function(i,l){for(var a=[],s=0;s<l;s++){var u=Math.random()*i.width*.4,f=Math.random()*Math.PI*2;a.push({x:Math.cos(f)*u,y:Math.sin(f)*u,radius:1.5*Math.random()+.5,color:"hsl(".concat(60*Math.random()+200,", 80%, 70%)"),angle:f,distance:u})}return a}(e,2e3),o=0;return function(){t.fillStyle="rgba(10, 10, 30, 0.1)",t.fillRect(0,0,e.width,e.height),t.save(),t.translate(e.width/2,e.height/2),t.rotate(o),function(i,l,a,s){l.forEach(function(u){var f=Math.cos(u.angle)*u.distance,d=Math.sin(u.angle)*u.distance;i.beginPath(),i.arc(f,d,u.radius,0,2*Math.PI),i.fillStyle=u.color,i.fill(),u.angle+=s/(8e-5*u.distance)})}(t,r,0,n),t.restore(),o+=n}},Qp=function(e,t){var n=0,r=["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#8B00FF"];return function(){t.fillStyle="rgba(0, 0, 0, 0.05)",t.fillRect(0,0,e.width,e.height),n+=.02;for(var o=0;o<7;o++){t.beginPath(),t.moveTo(0,e.height/2);for(var i=0;i<e.width;i++){var l=50*Math.sin(.01*i+n+.5*o)+25*Math.cos(.02*i+.7*n+.3*o)+e.height/2;t.lineTo(i,l)}t.strokeStyle=r[o%r.length],t.lineWidth=4,t.stroke()}}},Xp=function(e,t){var n=0,r=[{pos:0,color:"rgba(0, 255, 128, 0.5)"},{pos:.5,color:"rgba(0, 128, 255, 0.5)"},{pos:1,color:"rgba(128, 0, 255, 0.5)"}];return function(){t.fillStyle="rgba(0, 0, 20, 0.1)",t.fillRect(0,0,e.width,e.height),n+=.005;for(var o=function(){var l=t.createLinearGradient(0,0,e.width,0);r.forEach(function(u){l.addColorStop(u.pos,u.color)}),t.beginPath();for(var a=0;a<e.width;a++){var s=50*Math.sin(.01*a+n+i)+30*Math.sin(.02*a-1.5*n+i)+e.height*(.4+.2*i);t.lineTo(a,s)}t.lineTo(e.width,e.height),t.lineTo(0,e.height),t.closePath(),t.fillStyle=l,t.fill()},i=0;i<3;i++)o()}},Gp=function(e,t){for(var n=[],r=["#FF00FF","#00FFFF","#FFFF00","#FF00AA"],o=0;o<20;o++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,radius:50*Math.random()+20,color:r[Math.floor(Math.random()*r.length)],phase:Math.random()*Math.PI*2});return function(){t.fillStyle="rgba(0, 0, 0, 0.1)",t.fillRect(0,0,e.width,e.height),n.forEach(function(i){var l=20*Math.sin(i.phase)+30,a=t.createRadialGradient(i.x,i.y,0,i.x,i.y,i.radius);a.addColorStop(0,i.color),a.addColorStop(1,"rgba(0, 0, 0, 0)"),t.beginPath(),t.arc(i.x,i.y,i.radius+l,0,2*Math.PI),t.fillStyle=a,t.fill(),i.phase+=.05})}},Kp=function(e,t){for(var n=[],r=0;r<300;r++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,size:2*Math.random()+.5,speedX:.5*(Math.random()-.5),speedY:.5*(Math.random()-.5),color:"hsl(".concat(60*Math.random()+180,", 100%, 70%)")});return function(){t.fillStyle="rgba(0, 0, 20, 0.05)",t.fillRect(0,0,e.width,e.height),n.forEach(function(o){t.beginPath(),t.arc(o.x,o.y,o.size,0,2*Math.PI),t.fillStyle=o.color,t.fill(),o.x+=o.speedX,o.y+=o.speedY,(o.x<0||o.x>e.width)&&(o.speedX*=-1),(o.y<0||o.y>e.height)&&(o.speedY*=-1)})}},Zp=function(e,t){var n=[];return function(){t.fillStyle="rgba(0, 0, 20, 0.2)",t.fillRect(0,0,e.width,e.height),Math.random()<.1&&n.push(function(){for(var r=Math.random()*e.width,o=0,i=[{x:r,y:o}];o<e.height;)r+=50*(Math.random()-.5),o+=20*Math.random()+10,i.push({x:r,y:o});return{points:i,life:5+5*Math.random(),width:3*Math.random()+1}}()),n.forEach(function(r,o){t.beginPath(),t.moveTo(r.points[0].x,r.points[0].y);for(var i=1;i<r.points.length;i++)t.lineTo(r.points[i].x,r.points[i].y);t.strokeStyle="rgba(180, 220, 255, ".concat(r.life/10,")"),t.lineWidth=r.width,t.stroke(),r.life-=.2,r.life<=0&&n.splice(o,1)})}},Jp=function(e,t){for(var n=[],r=0;r<100;r++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,size:4*Math.random()+1,speedX:2*(Math.random()-.5),speedY:2*(Math.random()-.5),hue:360*Math.random()});return function(){t.fillStyle="rgba(0, 0, 0, 0.05)",t.fillRect(0,0,e.width,e.height),n.forEach(function(o){o.x+=o.speedX,o.y+=o.speedY,(o.x<0||o.x>e.width)&&(o.speedX*=-1),(o.y<0||o.y>e.height)&&(o.speedY*=-1),t.beginPath(),t.arc(o.x,o.y,o.size,0,2*Math.PI),t.fillStyle="hsla(".concat(o.hue,", 100%, 50%, 0.8)"),t.fill(),n.forEach(function(i){var l=o.x-i.x,a=o.y-i.y,s=Math.sqrt(l*l+a*a);s<100&&(t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(i.x,i.y),t.strokeStyle="hsla(".concat((o.hue+i.hue)/2,", 100%, 50%, ").concat(1-s/100,")"),t.stroke())}),o.hue=(o.hue+.5)%360})}},bp=function(e,t){for(var n=[],r=0;r<50;r++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,size:30*Math.random()+10,type:Math.floor(3*Math.random()),rotation:Math.random()*Math.PI*2,speed:.5*Math.random()+.1,color:"hsl(".concat(360*Math.random(),", 70%, 50%)")});return function(){t.clearRect(0,0,e.width,e.height),n.forEach(function(o){switch(t.save(),t.translate(o.x,o.y),t.rotate(o.rotation),t.fillStyle=o.color,o.type){case 0:t.fillRect(-o.size/2,-o.size/2,o.size,o.size);break;case 1:t.beginPath(),t.arc(0,0,o.size/2,0,2*Math.PI),t.fill();break;case 2:t.beginPath(),t.moveTo(0,-o.size/2),t.lineTo(o.size/2,o.size/2),t.lineTo(-o.size/2,o.size/2),t.closePath(),t.fill()}t.restore(),o.rotation+=.05*o.speed,o.y+=o.speed,o.y>e.height+o.size&&(o.y=-o.size,o.x=Math.random()*e.width)})}},qp=function(e,t){for(var n=[],r=0;r<100;r++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,size:3*Math.random()+1,speed:.5*Math.random()+.1,brightness:Math.random(),angle:Math.random()*Math.PI*2});return function(){t.fillStyle="rgba(0, 0, 0, 0.1)",t.fillRect(0,0,e.width,e.height),n.forEach(function(o){o.brightness+=.1*Math.random()-.05,o.brightness=Math.max(0,Math.min(1,o.brightness)),t.beginPath(),t.arc(o.x,o.y,o.size,0,2*Math.PI),t.fillStyle="rgba(255, 255, 100, ".concat(o.brightness,")"),t.fill(),o.x+=Math.cos(o.angle)*o.speed,o.y+=Math.sin(o.angle)*o.speed,(o.x<0||o.x>e.width||o.y<0||o.y>e.height)&&(o.angle+=Math.PI),Math.random()<.01&&(o.angle=Math.random()*Math.PI*2)})}},eh=function(e,t){for(var n=Math.floor(e.width/20),r=[],o=0;o<n;o++)r[o]=Math.random()*e.height;var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+[]{}|;:,.<>?";return function(){t.fillStyle="rgba(0, 0, 0, 0.05)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#0F0",t.font="15px monospace";for(var l=0;l<r.length;l++){var a=i[Math.floor(85*Math.random())];t.fillText(a,20*l,20*r[l]),20*r[l]>e.height&&Math.random()>.975&&(r[l]=0),r[l]+=.6}}},th=function(e,t){var n=0;return function(){t.fillStyle="rgba(0, 0, 0, 0.1)",t.fillRect(0,0,e.width,e.height),t.save(),t.translate(e.width/2,e.height/2);for(var r=0;r<2;r++){t.beginPath();for(var o=-e.width/2;o<e.width/2;o+=10){var i=100+50*Math.sin(.01*o+n+r*Math.PI);t.lineTo(o,i)}t.strokeStyle=r===0?"rgba(255, 0, 0, 0.5)":"rgba(0, 0, 255, 0.5)",t.lineWidth=2,t.stroke();for(var l=-e.width/2;l<e.width/2;l+=40){var a=100+50*Math.sin(.01*l+n+r*Math.PI);t.fillStyle=r===0?"rgba(255, 255, 0, 0.8)":"rgba(0, 255, 0, 0.8)",t.beginPath(),t.arc(l,a,5,0,2*Math.PI),t.fill()}}t.restore(),n+=.02}},nh=function(e,t){var n=[],r=[],o=t.createLinearGradient(0,0,e.width,e.height);o.addColorStop(0,"#000000"),o.addColorStop(1,"#1a1a2e");for(var i=0;i<30;i++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,vx:.3*(Math.random()-.5),vy:.3*(Math.random()-.5),size:2*Math.random()+2});for(var l=0;l<n.length;l++)for(var a=l+1;a<n.length;a++)Math.random()<.2&&r.push([l,a]);return function(){t.fillStyle=o,t.fillRect(0,0,e.width,e.height),n.forEach(function(u,f){u.x+=u.vx,u.y+=u.vy,(u.x<0||u.x>e.width)&&(u.vx*=-1),(u.y<0||u.y>e.height)&&(u.vy*=-1),t.beginPath(),t.arc(u.x,u.y,u.size,0,2*Math.PI),t.fillStyle="hsl(".concat(12*f,", 100%, 50%)"),t.fill(),t.beginPath(),t.arc(u.x,u.y,u.size+3,0,2*Math.PI);var d=t.createRadialGradient(u.x,u.y,u.size,u.x,u.y,u.size+3);d.addColorStop(0,"hsla(".concat(12*f,", 100%, 50%, 0.8)")),d.addColorStop(1,"hsla(".concat(12*f,", 100%, 50%, 0)")),t.fillStyle=d,t.fill()}),r.forEach(function(u){var f=Up(u,2),d=f[0],m=f[1],v=n[d].x-n[m].x,y=n[d].y-n[m].y,g=1-Math.sqrt(v*v+y*y)/Math.max(e.width,e.height);t.beginPath(),t.moveTo(n[d].x,n[d].y),t.lineTo(n[m].x,n[m].y),t.strokeStyle="rgba(255, 255, 255, ".concat(.2*g,")"),t.stroke()});for(var s=0;s<5;s++)t.beginPath(),t.arc(Math.random()*e.width,Math.random()*e.height,1.5*Math.random(),0,2*Math.PI),t.fillStyle="rgba(255, 255, 255, 0.5)",t.fill()}},rh=function(e,t){var n=0,r=t.createLinearGradient(0,0,0,.6*e.height);r.addColorStop(0,"#87CEEB"),r.addColorStop(1,"#E0F6FF");var o={x:.8*e.width,y:.2*e.height,radius:40,glow:20},i=[{x:.1*e.width,y:.15*e.height,radius:30},{x:.3*e.width,y:.1*e.height,radius:40},{x:.6*e.width,y:.2*e.height,radius:35}];return function(){t.fillStyle=r,t.fillRect(0,0,e.width,.6*e.height),t.save(),t.beginPath(),t.arc(o.x,o.y,o.radius,0,2*Math.PI);var l=t.createRadialGradient(o.x,o.y,o.radius-o.glow,o.x,o.y,o.radius+o.glow);l.addColorStop(0,"rgba(255, 255, 0, 1)"),l.addColorStop(.8,"rgba(255, 255, 0, 0.3)"),l.addColorStop(1,"rgba(255, 255, 0, 0)"),t.fillStyle=l,t.fill(),t.restore(),i.forEach(function(d){t.beginPath(),t.arc(d.x,d.y,d.radius,0,2*Math.PI),t.fillStyle="rgba(255, 255, 255, 0.8)",t.fill()});for(var a=0;a<7;a++){t.beginPath(),t.moveTo(0,e.height);for(var s=0;s<=e.width;s+=5){var u=30*Math.sin(.02*s+n+.5*a)*(1+.1*a)+(e.height-(a+1)*(.4*e.height/7));t.lineTo(s,u)}t.lineTo(e.width,e.height);var f=t.createLinearGradient(0,0,0,e.height);f.addColorStop(0,"rgba(0, 100, 255, ".concat(.1+a/7*.15,")")),f.addColorStop(1,"rgba(0, 50, 200, ".concat(.1+a/7*.15,")")),t.fillStyle=f,t.fill()}n+=.03}},oh=function(e,t){var n=[],r=t.createLinearGradient(0,0,0,e.height);r.addColorStop(0,"#0c1445"),r.addColorStop(1,"#1c2754");for(var o={x:.8*e.width,y:.2*e.height,radius:50,glow:20},i=[{points:[[0,e.height],[.3*e.width,.7*e.height],[.5*e.width,e.height]],color:"#0a1128"},{points:[[.4*e.width,e.height],[.7*e.width,.75*e.height],[e.width,e.height]],color:"#0d1636"}],l=0;l<200;l++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,vx:1.5*(Math.random()-.5),vy:1*Math.random()+.5,size:3*Math.random()+1,opacity:.5*Math.random()+.5});return function(){t.fillStyle=r,t.fillRect(0,0,e.width,e.height),t.save(),t.beginPath(),t.arc(o.x,o.y,o.radius,0,2*Math.PI);var a=t.createRadialGradient(o.x,o.y,o.radius-o.glow,o.x,o.y,o.radius+o.glow);a.addColorStop(0,"rgba(255, 255, 230, 1)"),a.addColorStop(.5,"rgba(255, 255, 230, 0.3)"),a.addColorStop(1,"rgba(255, 255, 230, 0)"),t.fillStyle=a,t.fill(),t.restore(),i.forEach(function(s){t.beginPath(),t.moveTo(s.points[0][0],s.points[0][1]),s.points.forEach(function(u){return t.lineTo(u[0],u[1])}),t.fillStyle=s.color,t.fill()}),n.forEach(function(s){s.x+=s.vx+.3*Math.sin(.01*s.y),s.y+=s.vy,s.y>e.height&&(s.x=Math.random()*e.width,s.y=-s.size,s.vx=1.5*(Math.random()-.5),s.vy=1*Math.random()+.5),t.beginPath(),t.arc(s.x,s.y,s.size,0,2*Math.PI),t.fillStyle="rgba(255, 255, 255, ".concat(s.opacity,")"),t.fill()}),t.fillStyle="rgba(255, 255, 255, 0.03)",t.fillRect(0,0,e.width,e.height)}},ih=function(e,t){for(var n=[],r=[],o=0;o<5;o++)r.push({x:Math.random()*e.width,y:e.height,height:200*Math.random()+300,width:100*Math.random()+50});for(var i=0;i<100;i++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,radius:2*Math.random()+1,speed:.5*Math.random()+.1,angle:Math.random()*Math.PI*2,angleSpeed:.01*(Math.random()-.5),glowIntensity:Math.random()});return function(){t.fillStyle="rgba(0, 0, 20, 0.1)",t.fillRect(0,0,e.width,e.height),r.forEach(function(l){t.beginPath(),t.moveTo(l.x,l.y),t.lineTo(l.x-l.width/2,l.y-l.height),t.lineTo(l.x+l.width/2,l.y-l.height),t.closePath(),t.fillStyle="rgba(0, 50, 0, 0.8)",t.fill()}),n.forEach(function(l){l.x+=Math.cos(l.angle)*l.speed,l.y+=Math.sin(l.angle)*l.speed,l.angle+=l.angleSpeed,(l.x<0||l.x>e.width)&&(l.angle=Math.PI-l.angle),(l.y<0||l.y>e.height)&&(l.angle=-l.angle),l.glowIntensity=.5*Math.sin(.002*Date.now()+.1*l.x)+.5,t.beginPath(),t.arc(l.x,l.y,l.radius,0,2*Math.PI),t.fillStyle="rgba(255, 255, 100, ".concat(l.glowIntensity,")"),t.fill(),t.beginPath(),t.arc(l.x,l.y,3*l.radius,0,2*Math.PI);var a=t.createRadialGradient(l.x,l.y,0,l.x,l.y,3*l.radius);a.addColorStop(0,"rgba(255, 255, 100, ".concat(.5*l.glowIntensity,")")),a.addColorStop(1,"rgba(255, 255, 100, 0)"),t.fillStyle=a,t.fill()})}},lh=function(e,t){var n,r=[];function o(s,u){for(var f=Math.floor(50*Math.random())+50,d=[],m=0;m<f;m++)d.push({x:s+200*Math.random()-100,y:u+100*Math.random()-50,radius:30*Math.random()+10});return{particles:d,x:s,y:u,speed:.5*Math.random()+.1}}for(var i=0;i<10;i++)r.push(o(Math.random()*e.width,Math.random()*(e.height/2)));var l=function(){n=e.height;var s=t.createLinearGradient(0,0,0,n);return s.addColorStop(0,"#1e90ff"),s.addColorStop(.5,"#87ceeb"),s.addColorStop(1,"#e6f3ff"),s},a=l();return function(){n!==e.height&&(a=l()),t.fillStyle=a,t.fillRect(0,0,e.width,e.height),r.forEach(function(u){u.x+=u.speed,u.x>e.width+200&&(u.x=-200),t.save(),t.translate(u.x,u.y),u.particles.forEach(function(f){t.beginPath(),t.arc(f.x+5,f.y+5,f.radius,0,2*Math.PI),t.fillStyle="rgba(0, 0, 0, 0.1)",t.fill()}),u.particles.forEach(function(f){t.beginPath(),t.arc(f.x,f.y,f.radius,0,2*Math.PI);var d=t.createRadialGradient(f.x,f.y,0,f.x,f.y,f.radius);d.addColorStop(0,"rgba(255, 255, 255, 0.8)"),d.addColorStop(1,"rgba(255, 255, 255, 0.2)"),t.fillStyle=d,t.fill()}),t.restore()}),t.beginPath(),t.arc(e.width-100,100,40,0,2*Math.PI);var s=t.createRadialGradient(e.width-100,100,0,e.width-100,100,60);s.addColorStop(0,"rgba(255, 255, 200, 1)"),s.addColorStop(.8,"rgba(255, 255, 0, 0.3)"),s.addColorStop(1,"rgba(255, 255, 0, 0)"),t.fillStyle=s,t.fill()}},ah=function(e,t){var n,r=[],o=["#ff6b6b","#feca57","#ff9ff3","#ff9f43","#e17055"],i=["1.jpg","2.jpg"],l=[],a=!1;n=0,i.forEach(function(u,f){var d=new Image;d.onload=function(){l[f]=d,++n===i.length&&(a=!0)},d.onerror=function(){++n===i.length&&(a=!0)},d.src=u});for(var s=0;s<100;s++)r.push({x:Math.random()*e.width,y:Math.random()*e.height,size:20*Math.random()+10,speed:2*Math.random()+1,amplitude:20*Math.random()+10,angle:Math.random()*Math.PI*2,angleSpeed:.05*(Math.random()-.5),imageIndex:Math.floor(Math.random()*i.length),color:o[Math.floor(Math.random()*o.length)]});return function(){t.fillStyle="rgba(135, 206, 235, 0.1)",t.fillRect(0,0,e.width,e.height),r.forEach(function(u){u.y+=u.speed,u.x+=Math.sin(.01*u.y)*u.amplitude*.05,u.angle+=u.angleSpeed,u.y>e.height&&(u.y=-u.size,u.x=Math.random()*e.width),function(f){t.save(),t.translate(f.x,f.y),t.rotate(f.angle),a&&l[f.imageIndex]?t.drawImage(l[f.imageIndex],-f.size/2,-f.size/2,f.size,f.size):(t.beginPath(),t.ellipse(0,0,f.size/2,f.size/4,0,0,2*Math.PI),t.fillStyle=f.color,t.fill()),t.restore()}(u)})}},sh=function(e,t){for(var n=[],r=[],o=0;o<1e3;o++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,length:20*Math.random()+10,speed:10*Math.random()+15});return function(){t.fillStyle="rgba(0, 0, 0, 0.1)",t.fillRect(0,0,e.width,e.height),t.strokeStyle="rgba(174, 194, 224, 0.5)",t.lineWidth=1,n.forEach(function(i){t.beginPath(),t.moveTo(i.x,i.y),t.lineTo(i.x,i.y+i.length),t.stroke(),i.y+=i.speed,i.y>e.height&&(i.y=-i.length,r.push({x:i.x,y:e.height,radius:3*Math.random()+1,opacity:1}))}),r.forEach(function(i,l){t.beginPath(),t.arc(i.x,i.y,i.radius,0,2*Math.PI),t.fillStyle="rgba(174, 194, 224, ".concat(i.opacity,")"),t.fill(),i.radius+=.1,i.opacity-=.03,i.opacity<=0&&r.splice(l,1)})}},uh=function(e,t){for(var n=[],r=["🍔","🍕","🌭","🍟","🌮","🍣","🍩","🍦","🍎","🍇","🍓","🍑","🍍","🥑","🥕","🥪","🥨","🧀","🥐","🥯","🍱","🍜","🍙","🍗","🥟","🥘","🍤","🥞","🧇","🥓"],o=[{r:255,g:102,b:102},{r:255,g:178,b:102},{r:255,g:255,b:153},{r:153,g:255,b:153},{r:153,g:204,b:255},{r:178,g:102,b:255},{r:255,g:153,b:255}],i=0,l=1,a=0,s=0;s<50;s++)n.push({x:Math.random()*e.width,y:Math.random()*e.height-e.height,emoji:r[Math.floor(Math.random()*r.length)],size:20*Math.random()+30,speed:1.5*Math.random()+.5,rotation:Math.random()*Math.PI*2,rotationSpeed:.02*(2*Math.random()-1)});return function(){(a+=.005)>=1&&(a=0,i=l,l=(l+1)%o.length);var u,f,d,m=(u=o[i],f=o[l],d=a,{r:Math.round(u.r+(f.r-u.r)*d),g:Math.round(u.g+(f.g-u.g)*d),b:Math.round(u.b+(f.b-u.b)*d)}),v=t.createLinearGradient(0,0,e.width,e.height);v.addColorStop(0,"rgb(".concat(m.r,", ").concat(m.g,", ").concat(m.b,")")),v.addColorStop(1,"rgb(".concat(255-m.r,", ").concat(255-m.g,", ").concat(255-m.b,")")),t.filter="blur(5px)",t.fillStyle=v,t.fillRect(0,0,e.width,e.height),t.filter="none",n.forEach(function(y){t.save(),t.translate(y.x,y.y),t.rotate(y.rotation),t.font="".concat(y.size,"px Arial"),t.textAlign="center",t.textBaseline="middle",t.strokeStyle="white",t.lineWidth=3,t.strokeText(y.emoji,0,0),t.fillStyle="black",t.fillText(y.emoji,0,0),t.restore(),y.y+=y.speed,y.rotation+=y.rotationSpeed,y.y>e.height+y.size&&(y.y=-y.size,y.x=Math.random()*e.width)})}},ch=function(e,t){for(var n=[],r=[],o=[],i=0;i<20;i++)n.push({x:Math.random()*e.width,height:200*Math.random()+100,width:20*Math.random()+10});for(var l=0;l<50;l++)r.push({x:Math.random()*e.width,y:Math.random()*e.height,radius:2*Math.random()+1,speed:.5*Math.random()+.1,opacity:Math.random()});for(var a=0;a<100;a++)o.push({x:Math.random()*e.width,y:Math.random()*e.height,radius:50*Math.random()+20,speed:.2*Math.random()+.1});return function(){t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height),t.fillStyle="#1a1a1a",n.forEach(function(s){t.beginPath(),t.moveTo(s.x,e.height),t.lineTo(s.x-s.width/2,e.height-s.height),t.lineTo(s.x+s.width/2,e.height-s.height),t.closePath(),t.fill()}),t.fillStyle="rgba(200, 200, 200, 0.05)",o.forEach(function(s){t.beginPath(),t.arc(s.x,s.y,s.radius,0,2*Math.PI),t.fill(),s.x+=s.speed,s.x>e.width+s.radius&&(s.x=-s.radius)}),r.forEach(function(s){t.beginPath(),t.arc(s.x,s.y,s.radius,0,2*Math.PI),t.fillStyle="rgba(255, 255, 100, ".concat(s.opacity,")"),t.fill(),s.x+=Math.sin(.001*Date.now())*s.speed,s.y+=Math.cos(.001*Date.now())*s.speed,s.opacity=.5*Math.sin(.01*Date.now())+.5,s.x<0&&(s.x=e.width),s.x>e.width&&(s.x=0),s.y<0&&(s.y=e.height),s.y>e.height&&(s.y=0)})}},fh=function(e,t){for(var n=[],r=0;r<5;r++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,size:50*Math.random()+30,speed:.5*Math.random()+.1,opacity:.5*Math.random()});return function(){t.fillStyle="#000033",t.fillRect(0,0,e.width,e.height),n.forEach(function(o){t.beginPath(),t.moveTo(o.x,o.y),t.bezierCurveTo(o.x-o.size/2,o.y-o.size/2,o.x-o.size/2,o.y+o.size/2,o.x,o.y+o.size),t.bezierCurveTo(o.x+o.size/2,o.y+o.size/2,o.x+o.size/2,o.y-o.size/2,o.x,o.y);var i=t.createRadialGradient(o.x,o.y,0,o.x,o.y,o.size);i.addColorStop(0,"rgba(255, 255, 255, ".concat(o.opacity,")")),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=i,t.fill(),o.y-=o.speed,o.opacity=.2*Math.sin(.001*Date.now())+.3,o.y+o.size<0&&(o.y=e.height+o.size,o.x=Math.random()*e.width)})}},dh=function(e,t){for(var n=[],r=0;r<20;r++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,size:100*Math.random()+50,rotation:Math.random()*Math.PI*2});return function(){t.clearRect(0,0,e.width,e.height),n.forEach(function(o){(function(i,l,a,s){t.save(),t.translate(i,l),t.rotate(s),t.beginPath();for(var u=0;u<8;u++){var f=2*Math.PI/8*u;t.moveTo(0,0),t.lineTo(Math.cos(f)*a,Math.sin(f)*a)}for(var d=a/4;d<a;d+=a/4){t.moveTo(d,0);for(var m=1;m<8;m++){var v=2*Math.PI/8*m;t.lineTo(Math.cos(v)*d,Math.sin(v)*d)}t.closePath()}t.strokeStyle="rgba(255, 255, 255, 0.1)",t.stroke(),t.restore()})(o.x,o.y,o.size,o.rotation)})}},ph=function(e,t){for(var n=[],r=[],o=[],i=0;i<15;i++)n.push({x:Math.random()*e.width,y:e.height-100*Math.random()-50,width:30*Math.random()+20,height:40*Math.random()+30});for(var l=0;l<10;l++)r.push({x:Math.random()*e.width,y:e.height,speed:.5*Math.random()+.1,size:30*Math.random()+20});for(var a=0;a<50;a++)o.push({x:Math.random()*e.width,y:Math.random()*e.height,radius:100*Math.random()+50,speed:.2*Math.random()+.1});return function(){var s=t.createLinearGradient(0,0,0,e.height);s.addColorStop(0,"#0a0a1a"),s.addColorStop(1,"#1a0a1a"),t.fillStyle=s,t.fillRect(0,0,e.width,e.height),t.beginPath(),t.arc(.8*e.width,.2*e.height,40,0,2*Math.PI),t.fillStyle="rgba(255, 255, 200, 0.8)",t.fill(),t.fillStyle="#333",n.forEach(function(u){t.fillRect(u.x,u.y,u.width,u.height),t.fillStyle="#222",t.fillRect(u.x+.1*u.width,u.y,.8*u.width,.1*u.height)}),r.forEach(function(u){t.beginPath(),t.arc(u.x,u.y-u.size,.5*u.size,0,2*Math.PI),t.fillStyle="#3a5",t.fill(),t.beginPath(),t.moveTo(u.x,u.y-u.size),t.lineTo(u.x-.5*u.size,u.y),t.lineTo(u.x+.5*u.size,u.y),t.closePath(),t.fillStyle="#3a5",t.fill(),u.y-=u.speed,u.y<.7*e.height&&(u.y=e.height,u.x=Math.random()*e.width)}),t.fillStyle="rgba(255, 255, 255, 0.05)",o.forEach(function(u){t.beginPath(),t.arc(u.x,u.y,u.radius,0,2*Math.PI),t.fill(),u.x+=u.speed,u.x>e.width+u.radius&&(u.x=-u.radius)})}},hh=function(e,t){for(var n=[],r=[],o=0;o<200;o++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,length:20*Math.random()+10,speed:5*Math.random()+5});return function(){t.fillStyle="rgba(20, 0, 0, 0.1)",t.fillRect(0,0,e.width,e.height),t.strokeStyle="#800",t.lineWidth=1,n.forEach(function(i){t.beginPath(),t.moveTo(i.x,i.y),t.lineTo(i.x,i.y+i.length),t.stroke(),i.y+=i.speed,i.y>e.height&&(i.y=0,i.x=Math.random()*e.width,r.push({x:i.x,y:e.height,size:5*Math.random()+2,opacity:1}))}),r.forEach(function(i,l){t.beginPath(),t.arc(i.x,i.y,i.size,0,2*Math.PI),t.fillStyle="rgba(128, 0, 0, ".concat(i.opacity,")"),t.fill(),i.opacity-=.005,i.opacity<=0&&r.splice(l,1)})}},mh=function(e,t){for(var n=[],r=[],o=0;o<50;o++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,size:5*Math.random()+2,speedX:2*Math.random()-1,speedY:2*Math.random()-1});for(var i=0;i<20;i++)r.push({x:Math.random()*e.width,y:Math.random()*e.height});return function(){t.fillStyle="rgba(0, 0, 0, 0.1)",t.fillRect(0,0,e.width,e.height),t.strokeStyle="rgba(255, 255, 255, 0.1)",t.beginPath(),r.forEach(function(l,a){r.slice(a+1).forEach(function(s){t.moveTo(l.x,l.y),t.lineTo(s.x,s.y)})}),t.stroke(),t.fillStyle="#400",n.forEach(function(l){t.beginPath(),t.arc(l.x,l.y,l.size,0,2*Math.PI),t.fill(),l.x+=l.speedX,l.y+=l.speedY,(l.x<0||l.x>e.width)&&(l.speedX*=-1),(l.y<0||l.y>e.height)&&(l.speedY*=-1),Math.random()<.01&&(l.speedX=2*Math.random()-1,l.speedY=2*Math.random()-1)})}},yh=function(e){var t=e.animationName,n=e.fallbackAnimation,r=n===void 0?"geometricShapes":n,o=e.fps,i=o===void 0?60:o,l=e.style,a=j.useRef(null),s=j.useRef(null),u=j.useCallback(function(){var f=a.current,d=f.getContext("2d");f.width=window.innerWidth,f.height=window.innerHeight;var m={starryNight:Vp,floatingBubbles:Bp,gradientWave:Wp,particleNetwork:Hp,galaxySpiral:Yp,rainbowWaves:Qp,geometricShapes:bp,fireflies:qp,matrixRain:eh,quantumField:Jp,electricStorm:Zp,cosmicDust:Kp,neonPulse:Gp,auroraBorealis:Xp,oceanWaves:rh,neuralNetwork:nh,dnaHelix:th,snowFall:oh,realisticRain:sh,realisticClouds:lh,fireflyForest:ih,autumnLeaves:ah,fallingFoodFiesta:uh,hauntedForest:ch,ghostlyApparitions:fh,spiderwebOverlay:dh,undeadGraveyard:ph,bloodRain:hh,creepyCrawlies:mh},v=m[t];return v||(console.warn('Animation "'.concat(t,'" not found. Using fallback animation.')),v=m[r]||m.geometricShapes),v(f,d)},[t,r]);return j.useEffect(function(){var f,d,m;f=u(),d=0,m=1e3/i,s.current=requestAnimationFrame(function y(g){s.current=requestAnimationFrame(y);var z=g-d;z>=m&&(d=g-z%m,f())});var v=function(){a.current&&(a.current.width=window.innerWidth,a.current.height=window.innerHeight,u())};return window.addEventListener("resize",v),function(){s.current&&cancelAnimationFrame(s.current),window.removeEventListener("resize",v)}},[i,u]),Ru.createElement("canvas",{ref:a,style:Ap({position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1},l)})};const gh=()=>k.jsx("nav",{className:"navbar bg-transparent navbar-expand-lg border-bottom fixed-top border-body","data-bs-theme":"dark",children:k.jsxs("div",{className:"container-fluid",children:[k.jsx("a",{className:"navbar-brand",href:"#",children:"Home"}),k.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:k.jsx("span",{className:"navbar-toggler-icon"})}),k.jsx("div",{className:"collapse navbar-collapse",id:"navbarNav",children:k.jsxs("ul",{className:"navbar-nav",children:[k.jsx("li",{className:"nav-item",children:k.jsx("a",{className:"nav-link active","aria-current":"page",href:"#",children:"About"})}),k.jsx("li",{className:"nav-item",children:k.jsx("a",{className:"nav-link",href:"#",children:"CV"})}),k.jsx("li",{className:"nav-item",children:k.jsx("a",{className:"nav-link",href:"#",children:"Projects"})}),k.jsx("li",{className:"nav-item",children:k.jsx("a",{className:"nav-link",children:"Gallery"})})]})})]})});var vh=!1;function wh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function xh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Sh=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!vh:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(xh(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=wh(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},e}(),pe="-ms-",jo="-moz-",L="-webkit-",Ff="comm",Wa="rule",Ha="decl",kh="@import",Df="@keyframes",Mh="@layer",Eh=Math.abs,Zo=String.fromCharCode,Ch=Object.assign;function Ph(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function Af(e){return e.trim()}function _h(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function Wl(e,t){return e.indexOf(t)}function se(e,t){return e.charCodeAt(t)|0}function mr(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function Ya(e){return e.length}function Hr(e,t){return t.push(e),e}function Nh(e,t){return e.map(t).join("")}var Jo=1,Mn=1,Uf=0,Ce=0,b=0,_n="";function bo(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Jo,column:Mn,length:l,return:""}}function Dn(e,t){return Ch(bo("",null,null,"",null,null,0),e,{length:-e.length},t)}function zh(){return b}function Th(){return b=Ce>0?se(_n,--Ce):0,Mn--,b===10&&(Mn=1,Jo--),b}function ze(){return b=Ce<Uf?se(_n,Ce++):0,Mn++,b===10&&(Mn=1,Jo++),b}function nt(){return se(_n,Ce)}function io(){return Ce}function Er(e,t){return mr(_n,e,t)}function yr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vf(e){return Jo=Mn=1,Uf=Je(_n=e),Ce=0,[]}function Bf(e){return _n="",e}function lo(e){return Af(Er(Ce-1,Hl(e===91?e+2:e===40?e+1:e)))}function Ih(e){for(;(b=nt())&&b<33;)ze();return yr(e)>2||yr(b)>3?"":" "}function Rh(e,t){for(;--t&&ze()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return Er(e,io()+(t<6&&nt()==32&&ze()==32))}function Hl(e){for(;ze();)switch(b){case e:return Ce;case 34:case 39:e!==34&&e!==39&&Hl(b);break;case 40:e===41&&Hl(e);break;case 92:ze();break}return Ce}function jh(e,t){for(;ze()&&e+b!==57;)if(e+b===84&&nt()===47)break;return"/*"+Er(t,Ce-1)+"*"+Zo(e===47?e:ze())}function $h(e){for(;!yr(nt());)ze();return Er(e,Ce)}function Oh(e){return Bf(ao("",null,null,null,[""],e=Vf(e),0,[0],e))}function ao(e,t,n,r,o,i,l,a,s){for(var u=0,f=0,d=l,m=0,v=0,y=0,g=1,z=1,p=1,c=0,h="",w=o,E=i,C=r,M=h;z;)switch(y=c,c=ze()){case 40:if(y!=108&&se(M,d-1)==58){Wl(M+=F(lo(c),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:M+=lo(c);break;case 9:case 10:case 13:case 32:M+=Ih(y);break;case 92:M+=Rh(io()-1,7);continue;case 47:switch(nt()){case 42:case 47:Hr(Lh(jh(ze(),io()),t,n),s);break;default:M+="/"}break;case 123*g:a[u++]=Je(M)*p;case 125*g:case 59:case 0:switch(c){case 0:case 125:z=0;case 59+f:p==-1&&(M=F(M,/\f/g,"")),v>0&&Je(M)-d&&Hr(v>32?mu(M+";",r,n,d-1):mu(F(M," ","")+";",r,n,d-2),s);break;case 59:M+=";";default:if(Hr(C=hu(M,t,n,u,f,o,a,h,w=[],E=[],d),i),c===123)if(f===0)ao(M,t,C,C,w,i,d,a,E);else switch(m===99&&se(M,3)===110?100:m){case 100:case 108:case 109:case 115:ao(e,C,C,r&&Hr(hu(e,C,C,0,0,o,a,h,o,w=[],d),E),o,E,d,a,r?w:E);break;default:ao(M,C,C,C,[""],E,0,a,E)}}u=f=v=0,g=p=1,h=M="",d=l;break;case 58:d=1+Je(M),v=y;default:if(g<1){if(c==123)--g;else if(c==125&&g++==0&&Th()==125)continue}switch(M+=Zo(c),c*g){case 38:p=f>0?1:(M+="\f",-1);break;case 44:a[u++]=(Je(M)-1)*p,p=1;break;case 64:nt()===45&&(M+=lo(ze())),m=nt(),f=d=Je(h=M+=$h(io())),c++;break;case 45:y===45&&Je(M)==2&&(g=0)}}return i}function hu(e,t,n,r,o,i,l,a,s,u,f){for(var d=o-1,m=o===0?i:[""],v=Ya(m),y=0,g=0,z=0;y<r;++y)for(var p=0,c=mr(e,d+1,d=Eh(g=l[y])),h=e;p<v;++p)(h=Af(g>0?m[p]+" "+c:F(c,/&\f/g,m[p])))&&(s[z++]=h);return bo(e,t,n,o===0?Wa:a,s,u,f)}function Lh(e,t,n){return bo(e,t,n,Ff,Zo(zh()),mr(e,2,-2),0)}function mu(e,t,n,r){return bo(e,t,n,Ha,mr(e,0,r),mr(e,r+1,-1),r)}function mn(e,t){for(var n="",r=Ya(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Fh(e,t,n,r){switch(e.type){case Mh:if(e.children.length)break;case kh:case Ha:return e.return=e.return||e.value;case Ff:return"";case Df:return e.return=e.value+"{"+mn(e.children,r)+"}";case Wa:e.value=e.props.join(",")}return Je(n=mn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Dh(e){var t=Ya(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Ah(e){return function(t){t.root||(t=t.return)&&e(t)}}function Uh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Vh=function(t,n,r){for(var o=0,i=0;o=i,i=nt(),o===38&&i===12&&(n[r]=1),!yr(i);)ze();return Er(t,Ce)},Bh=function(t,n){var r=-1,o=44;do switch(yr(o)){case 0:o===38&&nt()===12&&(n[r]=1),t[r]+=Vh(Ce-1,n,r);break;case 2:t[r]+=lo(o);break;case 4:if(o===44){t[++r]=nt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Zo(o)}while(o=ze());return t},Wh=function(t,n){return Bf(Bh(Vf(t),n))},yu=new WeakMap,Hh=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!yu.get(r))&&!o){yu.set(t,!0);for(var i=[],l=Wh(n,i),a=r.props,s=0,u=0;s<l.length;s++)for(var f=0;f<a.length;f++,u++)t.props[u]=i[s]?l[s].replace(/&\f/g,a[f]):a[f]+" "+l[s]}}},Yh=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Wf(e,t){switch(Ph(e,t)){case 5103:return L+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return L+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return L+e+jo+e+pe+e+e;case 6828:case 4268:return L+e+pe+e+e;case 6165:return L+e+pe+"flex-"+e+e;case 5187:return L+e+F(e,/(\w+).+(:[^]+)/,L+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return L+e+pe+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return L+e+pe+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return L+e+pe+F(e,"shrink","negative")+e;case 5292:return L+e+pe+F(e,"basis","preferred-size")+e;case 6060:return L+"box-"+F(e,"-grow","")+L+e+pe+F(e,"grow","positive")+e;case 4554:return L+F(e,/([^-])(transform)/g,"$1"+L+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,L+"$1"),/(image-set)/,L+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,L+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,L+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+L+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,L+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+L+"$2-$3$1"+jo+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Wl(e,"stretch")?Wf(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(se(e,t+1)!==115)break;case 6444:switch(se(e,Je(e)-3-(~Wl(e,"!important")&&10))){case 107:return F(e,":",":"+L)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+L+(se(e,14)===45?"inline-":"")+"box$3$1"+L+"$2$3$1"+pe+"$2box$3")+e}break;case 5936:switch(se(e,t+11)){case 114:return L+e+pe+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return L+e+pe+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return L+e+pe+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return L+e+pe+e+e}return e}var Qh=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Ha:t.return=Wf(t.value,t.length);break;case Df:return mn([Dn(t,{value:F(t.value,"@","@"+L)})],o);case Wa:if(t.length)return Nh(t.props,function(i){switch(_h(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return mn([Dn(t,{props:[F(i,/:(read-\w+)/,":"+jo+"$1")]})],o);case"::placeholder":return mn([Dn(t,{props:[F(i,/:(plac\w+)/,":"+L+"input-$1")]}),Dn(t,{props:[F(i,/:(plac\w+)/,":"+jo+"$1")]}),Dn(t,{props:[F(i,/:(plac\w+)/,pe+"input-$1")]})],o)}return""})}},Xh=[Qh],Gh=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var z=g.getAttribute("data-emotion");z.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var o=t.stylisPlugins||Xh,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var z=g.getAttribute("data-emotion").split(" "),p=1;p<z.length;p++)i[z[p]]=!0;a.push(g)});var s,u=[Hh,Yh];{var f,d=[Fh,Ah(function(g){f.insert(g)})],m=Dh(u.concat(o,d)),v=function(z){return mn(Oh(z),m)};s=function(z,p,c,h){f=c,v(z?z+"{"+p.styles+"}":p.styles),h&&(y.inserted[p.name]=!0)}}var y={key:n,sheet:new Sh({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return y.sheet.hydrate(a),y},Hf={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le=typeof Symbol=="function"&&Symbol.for,Qa=le?Symbol.for("react.element"):60103,Xa=le?Symbol.for("react.portal"):60106,qo=le?Symbol.for("react.fragment"):60107,ei=le?Symbol.for("react.strict_mode"):60108,ti=le?Symbol.for("react.profiler"):60114,ni=le?Symbol.for("react.provider"):60109,ri=le?Symbol.for("react.context"):60110,Ga=le?Symbol.for("react.async_mode"):60111,oi=le?Symbol.for("react.concurrent_mode"):60111,ii=le?Symbol.for("react.forward_ref"):60112,li=le?Symbol.for("react.suspense"):60113,Kh=le?Symbol.for("react.suspense_list"):60120,ai=le?Symbol.for("react.memo"):60115,si=le?Symbol.for("react.lazy"):60116,Zh=le?Symbol.for("react.block"):60121,Jh=le?Symbol.for("react.fundamental"):60117,bh=le?Symbol.for("react.responder"):60118,qh=le?Symbol.for("react.scope"):60119;function je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qa:switch(e=e.type,e){case Ga:case oi:case qo:case ti:case ei:case li:return e;default:switch(e=e&&e.$$typeof,e){case ri:case ii:case si:case ai:case ni:return e;default:return t}}case Xa:return t}}}function Yf(e){return je(e)===oi}A.AsyncMode=Ga;A.ConcurrentMode=oi;A.ContextConsumer=ri;A.ContextProvider=ni;A.Element=Qa;A.ForwardRef=ii;A.Fragment=qo;A.Lazy=si;A.Memo=ai;A.Portal=Xa;A.Profiler=ti;A.StrictMode=ei;A.Suspense=li;A.isAsyncMode=function(e){return Yf(e)||je(e)===Ga};A.isConcurrentMode=Yf;A.isContextConsumer=function(e){return je(e)===ri};A.isContextProvider=function(e){return je(e)===ni};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qa};A.isForwardRef=function(e){return je(e)===ii};A.isFragment=function(e){return je(e)===qo};A.isLazy=function(e){return je(e)===si};A.isMemo=function(e){return je(e)===ai};A.isPortal=function(e){return je(e)===Xa};A.isProfiler=function(e){return je(e)===ti};A.isStrictMode=function(e){return je(e)===ei};A.isSuspense=function(e){return je(e)===li};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===qo||e===oi||e===ti||e===ei||e===li||e===Kh||typeof e=="object"&&e!==null&&(e.$$typeof===si||e.$$typeof===ai||e.$$typeof===ni||e.$$typeof===ri||e.$$typeof===ii||e.$$typeof===Jh||e.$$typeof===bh||e.$$typeof===qh||e.$$typeof===Zh)};A.typeOf=je;Hf.exports=A;var em=Hf.exports,Qf=em,tm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xf={};Xf[Qf.ForwardRef]=tm;Xf[Qf.Memo]=nm;var rm=!0;function Gf(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(r+=o+" ")}),r}var Ka=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||rm===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Kf=function(t,n,r){Ka(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function om(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var im={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},lm=!1,am=/[A-Z]|^ms/g,sm=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Zf=function(t){return t.charCodeAt(1)===45},gu=function(t){return t!=null&&typeof t!="boolean"},Gi=Uh(function(e){return Zf(e)?e:e.replace(am,"-$&").toLowerCase()}),vu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(sm,function(r,o,i){return be={name:o,styles:i,next:be},o})}return im[t]!==1&&!Zf(t)&&typeof n=="number"&&n!==0?n+"px":n},um="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function gr(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return be={name:o.name,styles:o.styles,next:be},o.name;var i=n;if(i.styles!==void 0){var l=i.next;if(l!==void 0)for(;l!==void 0;)be={name:l.name,styles:l.styles,next:be},l=l.next;var a=i.styles+";";return a}return cm(e,t,n)}case"function":{if(e!==void 0){var s=be,u=n(e);return be=s,gr(e,t,u)}break}}var f=n;if(t==null)return f;var d=t[f];return d!==void 0?d:f}function cm(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=gr(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object"){var a=l;t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":gu(a)&&(r+=Gi(i)+":"+vu(i,a)+";")}else{if(i==="NO_COMPONENT_SELECTOR"&&lm)throw new Error(um);if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)gu(l[s])&&(r+=Gi(i)+":"+vu(i,l[s])+";");else{var u=gr(e,t,l);switch(i){case"animation":case"animationName":{r+=Gi(i)+":"+u+";";break}default:r+=i+"{"+u+"}"}}}}return r}var wu=/label:\s*([^\s;{]+)\s*(;|$)/g,be;function Za(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,o="";be=void 0;var i=e[0];if(i==null||i.raw===void 0)r=!1,o+=gr(n,t,i);else{var l=i;o+=l[0]}for(var a=1;a<e.length;a++)if(o+=gr(n,t,e[a]),r){var s=i;o+=s[a]}wu.lastIndex=0;for(var u="",f;(f=wu.exec(o))!==null;)u+="-"+f[1];var d=om(o)+u;return{name:d,styles:o,next:be}}var fm=function(t){return t()},dm=is.useInsertionEffect?is.useInsertionEffect:!1,Jf=dm||fm,Yl=!1,bf=j.createContext(typeof HTMLElement<"u"?Gh({key:"css"}):null);bf.Provider;var qf=function(t){return j.forwardRef(function(n,r){var o=j.useContext(bf);return t(n,o,r)})},ed=j.createContext({}),Ja={}.hasOwnProperty,Ql="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",pm=function(t,n){var r={};for(var o in n)Ja.call(n,o)&&(r[o]=n[o]);return r[Ql]=t,r},hm=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Ka(n,r,o),Jf(function(){return Kf(n,r,o)}),null},mm=qf(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Ql],i=[r],l="";typeof e.className=="string"?l=Gf(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=Za(i,void 0,j.useContext(ed));l+=t.key+"-"+a.name;var s={};for(var u in e)Ja.call(e,u)&&u!=="css"&&u!==Ql&&!Yl&&(s[u]=e[u]);return s.className=l,n&&(s.ref=n),j.createElement(j.Fragment,null,j.createElement(hm,{cache:t,serialized:a,isStringTag:typeof o=="string"}),j.createElement(o,s))}),ym=mm,gm=k.Fragment;function re(e,t,n){return Ja.call(t,"css")?k.jsx(ym,pm(e,t),n):k.jsx(e,t,n)}function td(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Za(t)}var S=function(){var t=td.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},vm=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function wm(e,t,n){var r=[],o=Gf(e,r,n);return r.length<2?n:o+t(r)}var xm=function(t){var n=t.cache,r=t.serializedArr;return Jf(function(){for(var o=0;o<r.length;o++)Kf(n,r[o],!1)}),null},Ki=qf(function(e,t){var n=!1,r=[],o=function(){if(n&&Yl)throw new Error("css can only be used during render");for(var u=arguments.length,f=new Array(u),d=0;d<u;d++)f[d]=arguments[d];var m=Za(f,t.registered);return r.push(m),Ka(t,m,!1),t.key+"-"+m.name},i=function(){if(n&&Yl)throw new Error("cx can only be used during render");for(var u=arguments.length,f=new Array(u),d=0;d<u;d++)f[d]=arguments[d];return wm(t.registered,o,vm(f))},l={css:o,cx:i,theme:j.useContext(ed)},a=e.children(l);return n=!0,j.createElement(j.Fragment,null,j.createElement(xm,{cache:t,serializedArr:r}),a)}),Sm=Object.defineProperty,km=(e,t,n)=>t in e?Sm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Yr=(e,t,n)=>km(e,typeof t!="symbol"?t+"":t,n),Xl=new Map,Qr=new WeakMap,xu=0,Mm=void 0;function Em(e){return e?(Qr.has(e)||(xu+=1,Qr.set(e,xu.toString())),Qr.get(e)):"0"}function Cm(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Em(e.root):e[t]}`).toString()}function Pm(e){const t=Cm(e);let n=Xl.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(a=>{var s;const u=a.isIntersecting&&o.some(f=>a.intersectionRatio>=f);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(f=>{f(u,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Xl.set(t,n)}return n}function nd(e,t,n={},r=Mm){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:i,elements:l}=Pm(n),a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),Xl.delete(o))}}function _m(e){return typeof e.children!="function"}var Su=class extends j.Component{constructor(e){super(e),Yr(this,"node",null),Yr(this,"_unobserveCb",null),Yr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Yr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),_m(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=nd(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:v,entry:y}=this.state;return e({inView:v,entry:y,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:a,trackVisibility:s,delay:u,initialInView:f,fallbackInView:d,...m}=this.props;return j.createElement(t||"div",{ref:this.handleNode,...m},e)}};function rd({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:a,fallbackInView:s,onChange:u}={}){var f;const[d,m]=j.useState(null),v=j.useRef(),[y,g]=j.useState({inView:!!a,entry:void 0});v.current=u,j.useEffect(()=>{if(l||!d)return;let h;return h=nd(d,(w,E)=>{g({inView:w,entry:E}),v.current&&v.current(w,E),E.isIntersecting&&i&&h&&(h(),h=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{h&&h()}},[Array.isArray(e)?e.toString():e,d,o,r,i,l,n,s,t]);const z=(f=y.entry)==null?void 0:f.target,p=j.useRef();!d&&z&&!i&&!l&&p.current!==z&&(p.current=z,g({inView:!!a,entry:void 0}));const c=[m,y.inView,y.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var od={exports:{}},U={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),qa=Symbol.for("react.portal"),ui=Symbol.for("react.fragment"),ci=Symbol.for("react.strict_mode"),fi=Symbol.for("react.profiler"),di=Symbol.for("react.provider"),pi=Symbol.for("react.context"),Nm=Symbol.for("react.server_context"),hi=Symbol.for("react.forward_ref"),mi=Symbol.for("react.suspense"),yi=Symbol.for("react.suspense_list"),gi=Symbol.for("react.memo"),vi=Symbol.for("react.lazy"),zm=Symbol.for("react.offscreen"),id;id=Symbol.for("react.module.reference");function Ue(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ba:switch(e=e.type,e){case ui:case fi:case ci:case mi:case yi:return e;default:switch(e=e&&e.$$typeof,e){case Nm:case pi:case hi:case vi:case gi:case di:return e;default:return t}}case qa:return t}}}U.ContextConsumer=pi;U.ContextProvider=di;U.Element=ba;U.ForwardRef=hi;U.Fragment=ui;U.Lazy=vi;U.Memo=gi;U.Portal=qa;U.Profiler=fi;U.StrictMode=ci;U.Suspense=mi;U.SuspenseList=yi;U.isAsyncMode=function(){return!1};U.isConcurrentMode=function(){return!1};U.isContextConsumer=function(e){return Ue(e)===pi};U.isContextProvider=function(e){return Ue(e)===di};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ba};U.isForwardRef=function(e){return Ue(e)===hi};U.isFragment=function(e){return Ue(e)===ui};U.isLazy=function(e){return Ue(e)===vi};U.isMemo=function(e){return Ue(e)===gi};U.isPortal=function(e){return Ue(e)===qa};U.isProfiler=function(e){return Ue(e)===fi};U.isStrictMode=function(e){return Ue(e)===ci};U.isSuspense=function(e){return Ue(e)===mi};U.isSuspenseList=function(e){return Ue(e)===yi};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ui||e===fi||e===ci||e===mi||e===yi||e===zm||typeof e=="object"&&e!==null&&(e.$$typeof===vi||e.$$typeof===gi||e.$$typeof===di||e.$$typeof===pi||e.$$typeof===hi||e.$$typeof===id||e.getModuleId!==void 0)};U.typeOf=Ue;od.exports=U;var Tm=od.exports;S`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;S`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;S`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;S`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;S`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;S`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;S`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;S`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;S`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;S`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;S`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;S`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;S`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Im=S`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Rm=S`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jm=S`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$m=S`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Om=S`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,es=S`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Lm=S`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fm=S`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dm=S`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Am=S`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Um=S`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vm=S`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bm=S`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Wm({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=es,iterationCount:o=1}){return td`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Hm(e){return e==null}function Ym(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function ld(e,t){return n=>n?e():t()}function vr(e){return ld(e,()=>null)}function Gl(e){return vr(()=>({opacity:0}))(e)}const ad=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=es,triggerOnce:a=!1,className:s,style:u,childClassName:f,childStyle:d,children:m,onVisibilityChange:v}=e,y=j.useMemo(()=>Wm({keyframes:l,duration:o}),[o,l]);return Hm(m)?null:Ym(m)?re(Xm,{...e,animationStyles:y,children:String(m)}):Tm.isFragment(m)?re(sd,{...e,animationStyles:y}):re(gm,{children:j.Children.map(m,(g,z)=>{if(!j.isValidElement(g))return null;const p=r+(t?z*o*n:0);switch(g.type){case"ol":case"ul":return re(Ki,{children:({cx:c})=>re(g.type,{...g.props,className:c(s,g.props.className),style:Object.assign({},u,g.props.style),children:re(ad,{...e,children:g.props.children})})});case"li":return re(Su,{threshold:i,triggerOnce:a,onChange:v,children:({inView:c,ref:h})=>re(Ki,{children:({cx:w})=>re(g.type,{...g.props,ref:h,className:w(f,g.props.className),css:vr(()=>y)(c),style:Object.assign({},d,g.props.style,Gl(!c),{animationDelay:p+"ms"})})})});default:return re(Su,{threshold:i,triggerOnce:a,onChange:v,children:({inView:c,ref:h})=>re("div",{ref:h,className:s,css:vr(()=>y)(c),style:Object.assign({},u,Gl(!c),{animationDelay:p+"ms"}),children:re(Ki,{children:({cx:w})=>re(g.type,{...g.props,className:w(f,g.props.className),style:Object.assign({},d,g.props.style)})})})})}})})},Qm={display:"inline-block",whiteSpace:"pre"},Xm=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,className:s,style:u,children:f,onVisibilityChange:d}=e,{ref:m,inView:v}=rd({triggerOnce:a,threshold:l,onChange:d});return ld(()=>re("div",{ref:m,className:s,style:Object.assign({},u,Qm),children:f.split("").map((y,g)=>re("span",{css:vr(()=>t)(v),style:{animationDelay:o+g*i*r+"ms"},children:y},g))}),()=>re(sd,{...e,children:f}))(n)},sd=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:a}=e,{ref:s,inView:u}=rd({triggerOnce:r,threshold:n,onChange:a});return re("div",{ref:s,className:o,css:vr(()=>t)(u),style:Object.assign({},i,Gl(!u)),children:l})};S`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;S`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;S`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;S`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;S`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;S`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;S`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;S`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;S`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;S`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Gm=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Km=S`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Zm=S`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Jm=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,bm=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,qm=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,e1=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,t1=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,n1=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,r1=S`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,o1=S`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,i1=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,l1=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function a1(e,t,n){switch(n){case"bottom-left":return t?Km:Rm;case"bottom-right":return t?Zm:jm;case"down":return e?t?bm:Om:t?Jm:$m;case"left":return e?t?e1:Lm:t?qm:es;case"right":return e?t?n1:Dm:t?t1:Fm;case"top-left":return t?r1:Am;case"top-right":return t?o1:Um;case"up":return e?t?l1:Bm:t?i1:Vm;default:return t?Gm:Im}}const Zi=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=j.useMemo(()=>a1(t,r,n),[t,n,r]);return re(ad,{keyframes:i,...o})};S`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;S`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;S`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;S`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;S`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;S`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;S`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;S`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;S`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;S`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;S`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;S`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;S`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;S`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;S`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;S`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;S`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;S`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;S`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;S`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;S`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;S`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;S`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;S`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;S`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;S`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;S`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;S`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;S`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;S`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;S`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const s1="/DP_JavaScript/assets/dpd1-wMp9WDy1.jpg",u1="/DP_JavaScript/assets/dpd2-C0XxOJVr.jpg",c1="/DP_JavaScript/assets/dpd3-BrTuZflL.jpg",f1=()=>{const e={backgroundColor:"rgba(255, 255, 255, 0.7)",padding:"20px",borderRadius:"10px"};return k.jsxs("div",{className:"container marketing",children:[k.jsx("br",{}),k.jsx("br",{}),k.jsx("br",{}),k.jsx("br",{}),k.jsx("h1",{id:"About",className:"container mt-4 text-bg-warning",children:"About Me"}),k.jsx("hr",{className:"featurette-divider"}),k.jsx(Zi,{delay:1e3,cascade:!0,damping:.5,triggerOnce:!0,children:k.jsxs("div",{className:"row featurette",children:[k.jsx("div",{className:"col-md-7",children:k.jsxs("div",{style:e,children:[k.jsx("h2",{className:"featurette-heading fw-normal lh-1",children:"Welcome to Ivan's Digital Portfolio!"}),k.jsx("p",{className:"lead",children:"I am a fourth-year student studying Software Design with Artificial Intelligence for Cloud Computing at the Technological University of the Shannon: Midlands Midwest (TUS)."})]})}),k.jsx("div",{className:"col-md-5",children:k.jsx("img",{src:s1,alt:"Profile",className:"img-fluid"})})]})}),k.jsx("hr",{className:"featurette-divider"}),k.jsx(Zi,{delay:1e3,cascade:!0,damping:.1,triggerOnce:!0,children:k.jsxs("div",{className:"row featurette",children:[k.jsx("div",{className:"col-md-7 order-md-2",children:k.jsxs("div",{style:e,children:[k.jsxs("h2",{className:"featurette-heading fw-normal lh-1",children:["Placement Experience"," ",k.jsx("span",{className:"text-body-secondary",children:"9-month Internship at DPD Ireland"})]}),k.jsx("p",{className:"lead",children:"I worked as a Software Developer Intern at DPD Ireland, Athlone from January 2024 to September 2024. During this time, I participated in daily standups and wrote project reports. Key projects included:"}),k.jsxs("ul",{children:[k.jsxs("li",{children:[k.jsx("b",{})," Was actively participating in a meeting , succesfully expressed my opinion & that way commited to group project."]}),k.jsxs("li",{children:[k.jsx("b",{children:"Project 1"})," Applied software testing techniques to create automated tests with 100% coverage using Postman API."]}),k.jsxs("li",{children:[k.jsx("b",{children:"Project 2"})," Migrated code from Spring MVC to Spring Boot for API endpoints."]}),k.jsx("li",{children:"Experience in testing, debugging, and working with SQL and NoSQL databases."})]})]})}),k.jsx("div",{className:"col-md-5 order-md-1",children:k.jsx("img",{src:u1,alt:"Placement",className:"img-fluid"})})]})}),k.jsx("hr",{className:"featurette-divider"}),k.jsx(Zi,{delay:1e3,cascade:!0,damping:.1,triggerOnce:!0,children:k.jsxs("div",{className:"row featurette",children:[k.jsx("div",{className:"col-md-7",children:k.jsxs("div",{style:e,children:[k.jsxs("h2",{className:"featurette-heading fw-normal lh-1",children:["My Vision"," ",k.jsx("span",{className:"text-body-secondary",children:"Why I Chose Programming"})]}),k.jsx("p",{className:"lead",children:"I chose programming because it is challenging, collaborative, and innovative. My vision is to contribute to the future by making technology simpler, allowing people to focus on what truly matters in life."})]})}),k.jsx("div",{className:"col-md-5",children:k.jsx("img",{src:c1,alt:"Vision",className:"img-fluid"})})]})}),k.jsx("hr",{className:"featurette-divider"})]})},d1=()=>{const[e,t]=j.useState(!1),n=()=>{t(!e)};return k.jsxs("div",{style:{textAlign:"center",padding:"50px 0"},children:[" ",k.jsx("h2",{className:"container mt-4 text-bg-warning",children:"My CV"}),k.jsx("button",{onClick:n,style:{padding:"15px 30px",fontSize:"24px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"10px",cursor:"pointer",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.2)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},onMouseOver:r=>{r.target.style.transform="scale(1.05)",r.target.style.boxShadow="0px 6px 12px rgba(0, 0, 0, 0.3)"},onMouseOut:r=>{r.target.style.transform="scale(1)",r.target.style.boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"},children:e?"Hide CV":"Show CV"}),e&&k.jsx("iframe",{src:"https://docs.google.com/document/d/1abFh66a58Y8dmXxQKMe0ylQt9-ZjpTwB5IU2Jr7yZdg/edit?tab=t.0#heading=h.5x0d5h95i329",width:"100%",height:"600px",title:"CV PDF",style:{marginTop:"20px"}})]})},p1=()=>{const e=[{title:"Rustic Roots Restaurant",description:"Frontend local restaurant website which was builded & deployed with React, TypeScript, and Bootstrap",link:"https://github.com/IvanLapickij/rusticroots",image:"https://raw.githubusercontent.com/IvanLapickij/DP_JavaScript/refs/heads/main/src/assets/images/restaurant1.png"},{title:"Cherry Chocolate",description:"Cherry Chocolate is a dynamic web application built with PHP and AJAX for seamless interactivity, leveraging POSTMAN for efficient API testing and MySQL as the backend database for data management.",link:"https://github.com/IvanLapickij/ChocolateCherry",image:"https://raw.githubusercontent.com/IvanLapickij/DP_JavaScript/refs/heads/main/src/assets/images/cherrychoc1.png"},{title:"Youtube Data Archive",description:" A Python-based application that archives and stores data by scraping information from YouTube based on an inserted link. The application retrieves and archives song data through a user-friendly GUI interface.",link:"https://github.com/IvanLapickij/Youtube-Data-Archive?tab=readme-ov-file",image:"https://raw.githubusercontent.com/IvanLapickij/DP_JavaScript/refs/heads/main/src/assets/images/youtube1.png"},{title:"MoveSafe Analytics",description:" Year 4 project  (Currently working on) - My objective is to collect data from football matches using a drone with the goal of developing insights to help prevent them.",link:"https://github.com/IvanLapickij/Project4",image:"https://raw.githubusercontent.com/IvanLapickij/DP_JavaScript/refs/heads/main/src/assets/images/drone1.png?token=GHSAT0AAAAAACYGNFX3AK7MQS6SGDSMCINYZYPCUYQ"}];return k.jsxs("div",{className:"container mt-4",children:[k.jsx("h2",{className:"text-bg-warning",children:"My Projects"}),k.jsx("div",{className:"row",children:e.map((t,n)=>k.jsx("div",{className:"col-lg-3 col-md-6 mb-4",children:k.jsxs("div",{className:"card h-100",children:[k.jsx("img",{src:t.image,className:"card-img-top",alt:t.title}),k.jsxs("div",{className:"card-body",children:[k.jsx("h5",{className:"card-title",children:t.title}),k.jsx("p",{className:"card-text",children:t.description}),k.jsx("a",{href:t.link,className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"})]})]})},n))})]})};function h1(){const[e,t]=j.useState("starryNight");return j.useEffect(()=>{const n=["starryNight","floatingBubbles","gradientWave","particleNetwork","galaxySpiral"],r=localStorage.getItem("backgroundAnimationIndex"),o=r?(parseInt(r)+1)%n.length:0;t(n[o]),localStorage.setItem("backgroundAnimationIndex",o.toString())},[]),k.jsxs(k.Fragment,{children:[k.jsx(yh,{animationName:e}),k.jsx(gh,{}),k.jsx(f1,{}),k.jsx(d1,{}),k.jsx(p1,{})]})}Lf(document.getElementById("root")).render(k.jsx(j.StrictMode,{children:k.jsx(h1,{})}));
