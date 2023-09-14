(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2383:function(e,t,r){Promise.resolve().then(r.bind(r,4951))},4951:function(e,t,r){"use strict";let a,o;r.r(t),r.d(t,{default:function(){return el}});var i,s=r(7437);r(1396);var n=r(4606);r(3177);var l=r(2265);let c={data:""},d=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||c,u=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,p=/\/\*[^]*?\*\/|  +/g,f=/\n+/g,m=(e,t)=>{let r="",a="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+s+";":a+="f"==i[1]?m(s,i):i+"{"+m(s,"k"==i[1]?"":t)+"}":"object"==typeof s?a+=m(s,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=m.p?m.p(i,s):i+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+a},y={},h=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+h(e[r]);return t}return e},g=(e,t,r,a,o)=>{var i;let s=h(e),n=y[s]||(y[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!y[n]){let t=s!==e?e:(e=>{let t,r,a=[{}];for(;t=u.exec(e.replace(p,""));)t[4]?a.shift():t[3]?(r=t[3].replace(f," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(f," ").trim();return a[0]})(e);y[n]=m(o?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&y.g?y.g:null;return r&&(y.g=y[n]),i=y[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n},b=(e,t,r)=>e.reduce((e,a,o)=>{let i=t[o];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function x(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?b(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,d(t.target),t.g,t.o,t.k)}x.bind({g:1});let v,w,j,E=x.bind({k:1});function O(e,t){let r=this||{};return function(){let a=arguments;function o(i,s){let n=Object.assign({},i),l=n.className||o.className;r.p=Object.assign({theme:w&&w()},n),r.o=/ *go\d+/.test(l),n.className=x.apply(r,a)+(l?" "+l:""),t&&(n.ref=s);let c=e;return e[0]&&(c=n.as||e,delete n.as),j&&c[0]&&j(n),v(c,n)}return t?t(o):o}}var k=e=>"function"==typeof e,N=(e,t)=>k(e)?e(t):e,_=(a=0,()=>(++a).toString()),C=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},P=new Map,$=e=>{if(P.has(e))return;let t=setTimeout(()=>{P.delete(e),A({type:4,toastId:e})},1e3);P.set(e,t)},D=e=>{let t=P.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&D(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?z(e,{type:1,toast:r}):z(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?$(a):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},I=[],S={toasts:[],pausedAt:void 0},A=e=>{S=z(S,e),I.forEach(e=>{e(S)})},M={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},T=(e={})=>{let[t,r]=(0,l.useState)(S);(0,l.useEffect)(()=>(I.push(r),()=>{let e=I.indexOf(r);e>-1&&I.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||M[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},F=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||_()}),R=e=>(t,r)=>{let a=F(t,e,r);return A({type:2,toast:a}),a.id},L=(e,t)=>R("blank")(e,t);L.error=R("error"),L.success=R("success"),L.loading=R("loading"),L.custom=R("custom"),L.dismiss=e=>{A({type:3,toastId:e})},L.remove=e=>A({type:4,toastId:e}),L.promise=(e,t,r)=>{let a=L.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(L.success(N(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{L.error(N(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var B=(e,t)=>{A({type:1,toast:{id:e,height:t}})},H=()=>{A({type:5,time:Date.now()})},U=e=>{let{toasts:t,pausedAt:r}=T(e);(0,l.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&L.dismiss(t.id);return}return setTimeout(()=>L.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,l.useCallback)(()=>{r&&A({type:6,time:Date.now()})},[r]),o=(0,l.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:i}=r||{},s=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:B,startPause:H,endPause:a,calculateOffset:o}}},Y=O("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${E`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${E`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,W=O("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${E`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,q=O("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${E`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Z=O("div")`
  position: absolute;
`,G=O("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=O("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${E`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?l.createElement(J,null,t):t:"blank"===r?null:l.createElement(G,null,l.createElement(W,{...a}),"loading"!==r&&l.createElement(Z,null,"error"===r?l.createElement(Y,{...a}):l.createElement(q,{...a})))},Q=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,V=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,X=O("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ee=O("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,et=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Q(r),V(r)];return{animation:t?`${E(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${E(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},er=l.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?et(e.position||t||"top-center",e.visible):{opacity:0},i=l.createElement(K,{toast:e}),s=l.createElement(ee,{...e.ariaProps},N(e.message,e));return l.createElement(X,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:i,message:s}):l.createElement(l.Fragment,null,i,s))});i=l.createElement,m.p=void 0,v=i,w=void 0,j=void 0;var ea=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let i=l.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return l.createElement("div",{ref:i,className:t,style:r},o)},eo=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ei=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,es=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,containerStyle:i,containerClassName:s})=>{let{toasts:n,handlers:c}=U(r);return l.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},n.map(r=>{let i=r.position||t,s=eo(i,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return l.createElement(ea,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ei:"",style:s},"custom"===r.type?N(r.message,r):o?o(r):l.createElement(er,{toast:r,position:i}))}))};r(981);var en=()=>(new Date().getFullYear(),(0,s.jsx)("footer",{className:" text-black py-4",children:(0,s.jsx)("div",{className:"container mx-auto flex items-center justify-center",children:(0,s.jsx)("div",{className:"copyright text-sm",children:(0,s.jsx)("span",{children:"\xa9 2023 My Porfolio"})})})}));function el(e){let{children:t}=e,[r,a]=(0,l.useState)(!1),o=e=>{let t=e.split("/").pop(),r=document.createElement("a");r.href=e,r.setAttribute("download",t),document.body.appendChild(r),r.click(),r.remove()};return(0,l.useEffect)(()=>{L("Thanks For Coming \uD83D\uDC9C",{style:{borderRadius:"10px",background:"#D8BFD8",color:"#fff"},duration:4e3})},[]),(0,s.jsx)("html",{lang:"en",children:(0,s.jsxs)("body",{className:r?"dark":"",children:[(0,s.jsx)(es,{position:"top-center",reverseOrder:!1}),(0,s.jsx)("main",{className:"bg-white px-10 dark:bg-gray-900",children:(0,s.jsxs)("nav",{className:"py-10 mb-12 flex justify-between",children:[(0,s.jsx)("h1",{className:"text-xl  dark:text-indigo-400",children:"Bambo"}),(0,s.jsxs)("ul",{className:"flex items-center",children:[(0,s.jsx)("li",{children:(0,s.jsx)(n.gLD,{onClick:()=>a(!r),className:"cursor-pointer text-2xl dark:text-indigo-400 ".concat(r?"transition-transform duration-300 rotate-180":"")})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:" bg-gradient-to-r from-indigo-400 to-indigo-500 text-white px-4 py-2 rounded-md ml-8 hover:scale-110",onClick:()=>o("https://bellobambo.github.io/Bambo/Resume.pdf"),children:"Resume"})})]})]})}),t,(0,s.jsx)(en,{})]})})}},981:function(e,t){"use strict";function r(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3177:function(){},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(2265),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var a,l={},c=null,d=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!n.hasOwnProperty(a)&&(l[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===l[a]&&(l[a]=t[a]);return{$$typeof:o,type:e,key:c,ref:d,props:l,_owner:s.current}}t.jsx=l,t.jsxs=l},7437:function(e,t,r){"use strict";e.exports=r(622)},1396:function(e,t,r){r(6685)},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var a=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(o),s=function(){return(s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},n=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)0>t.indexOf(a[o])&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};function l(e){return function(t){return a.createElement(c,s({attr:s({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return a.createElement(t.tag,s({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,o=e.attr,i=e.size,l=e.title,c=n(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return void 0!==i?a.createElement(i.Consumer,null,function(e){return t(e)}):t(o)}}},function(e){e.O(0,[447,685,971,596,744],function(){return e(e.s=2383)}),_N_E=e.O()}]);