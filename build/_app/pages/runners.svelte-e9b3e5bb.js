import{S as I,i as q,s as B,l as p,g as m,ab as j,ac as C,p as b,q as c,o as _,d as f,e as L,c as M,a as R,b as S,v as z,w as k,x as v,y as w,B as y,n as D,k as E,m as N,t as V,h as A,j as F}from"../chunks/index-140bc288.js";import{B as G}from"../chunks/Button-f701eaa5.js";import{L as H}from"../chunks/index-3fd37dc5.js";import{g as h}from"../chunks/colours-f9de8a07.js";import"../chunks/Span-895321e2.js";import"../chunks/Ripple-048d7db1.js";function $(o,t,r){const e=o.slice();return e[2]=t[r],e}function d(o){let t=[],r=new Map,e,s,l=o[0];const i=n=>n[2].userID;for(let n=0;n<l.length;n+=1){let a=$(o,l,n),u=i(a);r.set(u,t[n]=g(u,a))}return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=p()},l(n){for(let a=0;a<t.length;a+=1)t[a].l(n);e=p()},m(n,a){for(let u=0;u<t.length;u+=1)t[u].m(n,a);m(n,e,a),s=!0},p(n,a){a&1&&(l=n[0],D(),t=j(t,a,i,1,n,l,r,e.parentNode,C,g,e,$),b())},i(n){if(!s){for(let a=0;a<l.length;a+=1)c(t[a]);s=!0}},o(n){for(let a=0;a<t.length;a+=1)_(t[a]);s=!1},d(n){for(let a=0;a<t.length;a+=1)t[a].d(n);n&&f(e)}}}function J(o){let t=o[2].name+"",r;return{c(){r=V(t)},l(e){r=A(e,t)},m(e,s){m(e,r,s)},p(e,s){s&1&&t!==(t=e[2].name+"")&&F(r,t)},d(e){e&&f(r)}}}function K(o){let t,r,e;return t=new H({props:{$$slots:{default:[J]},$$scope:{ctx:o}}}),{c(){k(t.$$.fragment),r=E()},l(s){v(t.$$.fragment,s),r=N(s)},m(s,l){w(t,s,l),m(s,r,l),e=!0},p(s,l){const i={};l&33&&(i.$$scope={dirty:l,ctx:s}),t.$set(i)},i(s){e||(c(t.$$.fragment,s),e=!0)},o(s){_(t.$$.fragment,s),e=!1},d(s){y(t,s),s&&f(r)}}}function g(o,t){let r,e,s;return e=new G({props:{href:`/runner/${t[2].userID}`,class:"runners-button",style:"color: "+h(t[2].userID),$$slots:{default:[K]},$$scope:{ctx:t}}}),{key:o,first:null,c(){r=p(),k(e.$$.fragment),this.h()},l(l){r=p(),v(e.$$.fragment,l),this.h()},h(){this.first=r},m(l,i){m(l,r,i),w(e,l,i),s=!0},p(l,i){t=l;const n={};i&1&&(n.href=`/runner/${t[2].userID}`),i&1&&(n.style="color: "+h(t[2].userID)),i&33&&(n.$$scope={dirty:i,ctx:t}),e.$set(n)},i(l){s||(c(e.$$.fragment,l),s=!0)},o(l){_(e.$$.fragment,l),s=!1},d(l){l&&f(r),y(e,l)}}}function O(o){let t,r,e=!!o[0]&&d(o);return{c(){t=L("div"),e&&e.c(),this.h()},l(s){t=M(s,"DIV",{class:!0});var l=R(t);e&&e.l(l),l.forEach(f),this.h()},h(){S(t,"class","wrapper svelte-rq2e2r")},m(s,l){m(s,t,l),e&&e.m(t,null),r=!0},p(s,[l]){s[0]?e?(e.p(s,l),l&1&&c(e,1)):(e=d(s),e.c(),c(e,1),e.m(t,null)):e&&(D(),_(e,1,1,()=>{e=null}),b())},i(s){r||(c(e),r=!0)},o(s){_(e),r=!1},d(s){s&&f(t),e&&e.d()}}}function P(o,t,r){const e="https://heh5n0uiid.execute-api.eu-west-1.amazonaws.com";let s;return z(async()=>{const l=await fetch(`${e}/users`);r(0,s=await l.json())}),[s]}class Z extends I{constructor(t){super();q(this,t,P,O,B,{})}}export{Z as default};
