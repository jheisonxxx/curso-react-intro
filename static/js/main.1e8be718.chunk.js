(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(21)},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(3),c=n.n(l);n(12);const r=o.a.createContext();function s(e){let{children:t}=e;const{item:n,saveItem:a,loading:l,error:c}=function(e,t){const[n,a]=o.a.useState(t),[l,c]=o.a.useState(!0),[r,s]=o.a.useState(!1);return o.a.useEffect(()=>{setTimeout(()=>{try{const n=localStorage.getItem(e);let o;n?(o=JSON.parse(n),a(o)):(localStorage.setItem(e,JSON.stringify(t)),o=t),c(!1)}catch(r){c(!1),s(!0)}},2e3)}),{item:n,saveItem:t=>{localStorage.setItem(e,JSON.stringify(t)),a(t)},loading:l,error:r}}("TODOS_V1",[]),[s,u]=o.a.useState(""),[m,i]=o.a.useState(!0),d=n.filter(e=>!!e.completed).length,p=n.length,f=n.filter(e=>{const t=e.text.toLowerCase(),n=s.toLowerCase();return t.includes(n)});return o.a.createElement(r.Provider,{value:{loading:l,error:c,completedTodos:d,totalTodos:p,searchValue:s,setSearchValue:u,searchedTodos:f,completeTodo:e=>{const t=[...n],o=t.findIndex(t=>t.text===e);t[o].completed=!0,a(t)},deleteTodo:e=>{const t=[...n],o=t.findIndex(t=>t.text===e);t.splice(o,1),a(t)},openModal:m,setOpenModal:i}},t)}n(13);function u(){const{completedTodos:e,totalTodos:t}=o.a.useContext(r);return o.a.createElement("h1",{className:"TodoCounter"},"Has completado ",o.a.createElement("span",null,e)," de ",o.a.createElement("span",null,t)," TODOs")}n(14);function m(){const{searchValue:e,setSearchValue:t}=o.a.useContext(r);return o.a.createElement("input",{placeholder:"Cortar cebolla",className:"TodoSearch",value:e,onChange:e=>{t(e.target.value)}})}var i;n(15);function d(e){let{children:t}=e;return o.a.createElement("ul",{className:"TodoList"},t)}function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const f=e=>{let{svgRef:t,...n}=e;return o.a.createElement("svg",p({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve",ref:t},n),i||(i=o.a.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"})))},E=o.a.forwardRef((e,t)=>o.a.createElement(f,p({svgRef:t},e)));var g;n.p;function v(){return(v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const h=e=>{let{svgRef:t,...n}=e;return o.a.createElement("svg",v({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve",ref:t},n),g||(g=o.a.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"})))},T=o.a.forwardRef((e,t)=>o.a.createElement(h,v({svgRef:t},e)));n.p,n(16);const O={check:e=>o.a.createElement(E,{className:"Icon-svg",fill:e}),delete:e=>o.a.createElement(T,{className:"Icon-svg",fill:e})};function C(e){let{type:t,color:n,onClick:a}=e;return o.a.createElement("span",{className:"Icon-container Icon-container-".concat(t),onClick:a},O[t](n))}function x(e){let{completed:t,onComplete:n}=e;return o.a.createElement(C,{type:"check",color:t?"green":"gray",onClick:n})}function I(e){let{onDelete:t}=e;return o.a.createElement(C,{type:"delete",color:"gray",onClick:t})}n(17);function y(e){return o.a.createElement("li",{className:"TodoItem"},o.a.createElement(x,{completed:e.completed,onComplete:e.onComplete}),o.a.createElement("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete")},e.text),o.a.createElement(I,{onDelete:e.onDelete}))}n(18);function N(){return o.a.createElement("div",{className:"LoadingTodo-container"},o.a.createElement("span",{className:"LoadingTodo-completeIcon"}),o.a.createElement("p",{className:"LoadingTodo-text"}),o.a.createElement("span",{className:"LoadingTodo-deleteIcon"}))}function S(){return o.a.createElement("p",null,"Error...")}function L(){return o.a.createElement("p",null,"\xa1Crea tu primer TODO!")}n(19);function w(e){let{setOpenModal:t}=e;return o.a.createElement("button",{className:"CreateTodoButton",onClick:()=>{t(e=>!e)}},"+")}var b=n(1),k=n.n(b);n(20);function M(e){let{children:t}=e;return k.a.createPortal(o.a.createElement("div",{className:"ModalBackground"},t),document.getElementById("modal"))}function D(){const{loading:e,error:t,searchedTodos:n,completeTodo:a,deleteTodo:l,openModal:c,setOpenModal:s}=o.a.useContext(r);return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,null),o.a.createElement(m,null),o.a.createElement(d,null,e&&o.a.createElement(o.a.Fragment,null,o.a.createElement(N,null),o.a.createElement(N,null),o.a.createElement(N,null)),t&&o.a.createElement(S,null),!e&&0===n.length&&o.a.createElement(L,null),n.map(e=>o.a.createElement(y,{key:e.text,text:e.text,completed:e.completed,onComplete:()=>a(e.text),onDelete:()=>l(e.text)}))),o.a.createElement(w,{setOpenModal:s}),c&&o.a.createElement(M,null,"La funcionalidad de agregar TODO"))}var R=function(){return o.a.createElement(s,null,o.a.createElement(D,null))};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(R,null))}],[[4,1,2]]]);
//# sourceMappingURL=main.1e8be718.chunk.js.map