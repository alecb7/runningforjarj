import{S as oe,i as se,s as ae,e as h,w as R,k,c as d,a as g,x as T,m as P,d as p,g as y,y as W,Y as c,q,o as j,B as X,t as _,h as $,b as le,p as re,a7 as ce,n as ie,E as fe}from"../../chunks/index-140bc288.js";import{I as ue}from"../../chunks/index-3fd37dc5.js";import{g as pe}from"../../chunks/colours-f9de8a07.js";import{B as me}from"../../chunks/Button-f701eaa5.js";import{L as _e}from"../../chunks/Ripple-048d7db1.js";import"../../chunks/Span-895321e2.js";function ee(a,e,n){const t=a.slice();return t[8]=e[n],t}function $e(a){let e;return{c(){e=_("open_in_new")},l(n){e=$(n,"open_in_new")},m(n,t){y(n,e,t)},d(n){n&&p(e)}}}function he(a){let e=a[8].name+"",n;return{c(){n=_(e)},l(t){n=$(t,e)},m(t,o){y(t,n,o)},p:fe,d(t){t&&p(n)}}}function de(a){let e,n;return e=new _e({props:{$$slots:{default:[he]},$$scope:{ctx:a}}}),{c(){R(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,o){W(e,t,o),n=!0},p(t,o){const l={};o&2048&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){n||(q(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function te(a){let e,n,t,o;return n=new me({props:{href:`/runner/${a[8].userID}`,class:"runners-button",style:"color: "+pe(a[8].userID),$$slots:{default:[de]},$$scope:{ctx:a}}}),{c(){e=h("p"),R(n.$$.fragment),t=k()},l(l){e=d(l,"P",{});var m=g(e);T(n.$$.fragment,m),t=P(m),m.forEach(p)},m(l,m){y(l,e,m),W(n,e,null),c(e,t),o=!0},p(l,m){const v={};m&2048&&(v.$$scope={dirty:m,ctx:l}),n.$set(v)},i(l){o||(q(n.$$.fragment,l),o=!0)},o(l){j(n.$$.fragment,l),o=!1},d(l){l&&p(e),X(n)}}}function ge(a){let e,n,t,o,l,m,v,A,C,w,B,N,U,D,V,Y,F,b,L,G,J,K,E,M,z;E=new ue({props:{class:"material-icons icon",$$slots:{default:[$e]},$$scope:{ctx:a}}});let I=a[6],r=[];for(let s=0;s<I.length;s+=1)r[s]=te(ee(a,I,s));const ne=s=>j(r[s],1,1,()=>{r[s]=null});return{c(){e=h("h1"),n=_(a[0]),t=k(),o=h("div"),l=h("p"),m=_(a[1]),v=_(" to "),A=_(a[2]),C=k(),w=h("p"),B=_(a[3]),N=_("k"),U=k(),D=h("p"),V=_(a[4]),Y=_("m"),F=k(),b=h("p"),L=h("a"),G=_("Komoot"),J=k(),K=h("span"),R(E.$$.fragment),M=k();for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=d(s,"H1",{});var f=g(e);n=$(f,a[0]),f.forEach(p),t=P(s),o=d(s,"DIV",{});var u=g(o);l=d(u,"P",{});var i=g(l);m=$(i,a[1]),v=$(i," to "),A=$(i,a[2]),i.forEach(p),C=P(u),w=d(u,"P",{});var S=g(w);B=$(S,a[3]),N=$(S,"k"),S.forEach(p),U=P(u),D=d(u,"P",{});var O=g(D);V=$(O,a[4]),Y=$(O,"m"),O.forEach(p),F=P(u),b=d(u,"P",{});var H=g(b);L=d(H,"A",{href:!0});var Z=g(L);G=$(Z,"Komoot"),Z.forEach(p),J=P(H),K=d(H,"SPAN",{});var x=g(K);T(E.$$.fragment,x),x.forEach(p),H.forEach(p),M=P(u);for(let Q=0;Q<r.length;Q+=1)r[Q].l(u);u.forEach(p),this.h()},h(){le(L,"href",a[5])},m(s,f){y(s,e,f),c(e,n),y(s,t,f),y(s,o,f),c(o,l),c(l,m),c(l,v),c(l,A),c(o,C),c(o,w),c(w,B),c(w,N),c(o,U),c(o,D),c(D,V),c(D,Y),c(o,F),c(o,b),c(b,L),c(L,G),c(b,J),c(b,K),W(E,K,null),c(o,M);for(let u=0;u<r.length;u+=1)r[u].m(o,null);z=!0},p(s,[f]){const u={};if(f&2048&&(u.$$scope={dirty:f,ctx:s}),E.$set(u),f&64){I=s[6];let i;for(i=0;i<I.length;i+=1){const S=ee(s,I,i);r[i]?(r[i].p(S,f),q(r[i],1)):(r[i]=te(S),r[i].c(),q(r[i],1),r[i].m(o,null))}for(ie(),i=I.length;i<r.length;i+=1)ne(i);re()}},i(s){if(!z){q(E.$$.fragment,s);for(let f=0;f<I.length;f+=1)q(r[f]);z=!0}},o(s){j(E.$$.fragment,s),r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)j(r[f]);z=!1},d(s){s&&p(e),s&&p(t),s&&p(o),X(E),ce(r,s)}}}async function Be({params:a,fetch:e}){const n="https://heh5n0uiid.execute-api.eu-west-1.amazonaws.com",t=a.sectionId,o=await e(`${n}/sections/${t}`),l=await o.json();return{status:o.status,props:{section:l}}}function ve(a,e,n){let{section:t}=e;console.log(t);let{sectionID:o,startLocation:l,endLocation:m,distance:v,elevation:A,komootLink:C,u:w}=t;return a.$$set=B=>{"section"in B&&n(7,t=B.section)},[o,l,m,v,A,C,w,t]}class De extends oe{constructor(e){super();se(this,e,ve,ge,ae,{section:7})}}export{De as default,Be as load};
