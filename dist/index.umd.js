(function(t,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],e):(t=typeof globalThis!="undefined"?globalThis:t||self,e(t["react-hooks"]={},t.react))})(this,function(t,e){"use strict";function c(u,n){const[o,s]=e.useState(u);return e.useEffect(()=>{const f=setTimeout(()=>{s(u)},n);return()=>{clearTimeout(f)}},[u,n]),o}const i=()=>{};function r(u,n,o){const s=e.useRef(i);e.useEffect(()=>{s.current=u}),e.useEffect(()=>{!o||n===null||n===!1||s.current()},[o]),e.useEffect(()=>{if(n===null||n===!1)return;const d=setInterval(()=>s.current(),n);return()=>clearInterval(d)},[n])}function l(u){e.useEffect(()=>{document.title=u},[])}t.useDebounce=c,t.useInterval=r,t.useTitle=l,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=index.umd.js.map
