import{S as W,i as X,s as Z,e as y,t as k,k as T,w as b,c as x,a as ee,h as v,d as c,m as L,x as I,b as P,g as _,Y as te,y as h,j as S,q as i,o as p,B as D,l as C,n as N,a4 as se,a5 as le,p as R}from"../../chunks/index-f7a6ba17.js";import{D as ne,B as re,R as O,C as A}from"../../chunks/index-1a545a3c.js";import{g as j}from"../../chunks/colours-f9de8a07.js";import{g as Q,L as V}from"../../chunks/Button-06e923c9.js";import{h as q}from"../../chunks/moment-9ea79f3d.js";import{g as F}from"../../chunks/sectionStyles-0e97f438.js";import"../../chunks/index-b107b255.js";import"../../chunks/prefixFilter-de33cb53.js";function U(r,t,n){const e=r.slice();e[6]=t[n];const s=e[2](e[6].sectionID);return e[7]=s,e}function Y(r){let t=[],n=new Map,e,s,l=r[1];const a=o=>o[6].sectionID;for(let o=0;o<l.length;o+=1){let f=U(r,l,o),u=a(f);n.set(u,t[o]=K(u,f))}return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=C()},l(o){for(let f=0;f<t.length;f+=1)t[f].l(o);e=C()},m(o,f){for(let u=0;u<t.length;u+=1)t[u].m(o,f);_(o,e,f),s=!0},p(o,f){f&6&&(l=o[1],N(),t=se(t,f,a,1,o,l,n,e.parentNode,le,K,e,U),R())},i(o){if(!s){for(let f=0;f<l.length;f+=1)i(t[f]);s=!0}},o(o){for(let f=0;f<t.length;f+=1)p(t[f]);s=!1},d(o){for(let f=0;f<t.length;f+=1)t[f].d(o);o&&c(e)}}}function fe(r){let t=r[6].sectionID+"",n;return{c(){n=k(t)},l(e){n=v(e,t)},m(e,s){_(e,n,s)},p(e,s){s&2&&t!==(t=e[6].sectionID+"")&&S(n,t)},d(e){e&&c(n)}}}function oe(r){let t,n;return t=new V({props:{$$slots:{default:[fe]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){h(t,e,s),n=!0},p(e,s){const l={};s&1026&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(i(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function $e(r){let t,n;return t=new Q({props:{href:`/section/${r[6].sectionID}`,variant:"raised",$$slots:{default:[oe]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){h(t,e,s),n=!0},p(e,s){const l={};s&2&&(l.href=`/section/${e[6].sectionID}`),s&1026&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(i(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function ae(r){let t=r[6].startLocation+"",n,e,s=r[6].endLocation+"",l;return{c(){n=k(t),e=k(" to "),l=k(s)},l(a){n=v(a,t),e=v(a," to "),l=v(a,s)},m(a,o){_(a,n,o),_(a,e,o),_(a,l,o)},p(a,o){o&2&&t!==(t=a[6].startLocation+"")&&S(n,t),o&2&&s!==(s=a[6].endLocation+"")&&S(l,s)},d(a){a&&c(n),a&&c(e),a&&c(l)}}}function ue(r){let t=r[6].distance+"",n,e;return{c(){n=k(t),e=k("k")},l(s){n=v(s,t),e=v(s,"k")},m(s,l){_(s,n,l),_(s,e,l)},p(s,l){l&2&&t!==(t=s[6].distance+"")&&S(n,t)},d(s){s&&c(n),s&&c(e)}}}function ie(r){let t=r[7].name+"",n;return{c(){n=k(t)},l(e){n=v(e,t)},m(e,s){_(e,n,s)},p(e,s){s&2&&t!==(t=e[7].name+"")&&S(n,t)},d(e){e&&c(n)}}}function ce(r){let t,n;return t=new V({props:{$$slots:{default:[ie]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){h(t,e,s),n=!0},p(e,s){const l={};s&1026&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(i(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function me(r){let t,n;return t=new Q({props:{href:`/runner/${r[7].userID}`,class:"runners-button",style:"color: "+j(r[7].userID),$$slots:{default:[ce]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){h(t,e,s),n=!0},p(e,s){const l={};s&2&&(l.href=`/runner/${e[7].userID}`),s&2&&(l.style="color: "+j(e[7].userID)),s&1026&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(i(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function G(r){let t,n;return t=new A({props:{style:`${F(r[6],"start")}`,$$slots:{default:[_e]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){h(t,e,s),n=!0},p(e,s){const l={};s&2&&(l.style=`${F(e[6],"start")}`),s&1026&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(i(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function _e(r){let t=q(r[6].startTime).format("dddd: h:mmA")+"",n;return{c(){n=k(t)},l(e){n=v(e,t)},m(e,s){_(e,n,s)},p(e,s){s&2&&t!==(t=q(e[6].startTime).format("dddd: h:mmA")+"")&&S(n,t)},d(e){e&&c(n)}}}function J(r){let t,n;return t=new A({props:{style:`${F(r[6],"end")}`,$$slots:{default:[pe]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){h(t,e,s),n=!0},p(e,s){const l={};s&2&&(l.style=`${F(e[6],"end")}`),s&1026&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(i(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function pe(r){let t=q(r[6].endTime).format("dddd: h:mmA")+"",n;return{c(){n=k(t)},l(e){n=v(e,t)},m(e,s){_(e,n,s)},p(e,s){s&2&&t!==(t=q(e[6].endTime).format("dddd: h:mmA")+"")&&S(n,t)},d(e){e&&c(n)}}}function ge(r){let t,n,e,s,l,a,o,f,u,w,B;t=new A({props:{$$slots:{default:[$e]},$$scope:{ctx:r}}}),e=new A({props:{$$slots:{default:[ae]},$$scope:{ctx:r}}}),l=new A({props:{numeric:!0,$$slots:{default:[ue]},$$scope:{ctx:r}}}),o=new A({props:{$$slots:{default:[me]},$$scope:{ctx:r}}});let g=r[6].startTime&&G(r),d=r[6].endTime&&J(r);return{c(){b(t.$$.fragment),n=T(),b(e.$$.fragment),s=T(),b(l.$$.fragment),a=T(),b(o.$$.fragment),f=T(),g&&g.c(),u=T(),d&&d.c(),w=T()},l($){I(t.$$.fragment,$),n=L($),I(e.$$.fragment,$),s=L($),I(l.$$.fragment,$),a=L($),I(o.$$.fragment,$),f=L($),g&&g.l($),u=L($),d&&d.l($),w=L($)},m($,m){h(t,$,m),_($,n,m),h(e,$,m),_($,s,m),h(l,$,m),_($,a,m),h(o,$,m),_($,f,m),g&&g.m($,m),_($,u,m),d&&d.m($,m),_($,w,m),B=!0},p($,m){const z={};m&1026&&(z.$$scope={dirty:m,ctx:$}),t.$set(z);const E={};m&1026&&(E.$$scope={dirty:m,ctx:$}),e.$set(E);const H={};m&1026&&(H.$$scope={dirty:m,ctx:$}),l.$set(H);const M={};m&1026&&(M.$$scope={dirty:m,ctx:$}),o.$set(M),$[6].startTime?g?(g.p($,m),m&2&&i(g,1)):(g=G($),g.c(),i(g,1),g.m(u.parentNode,u)):g&&(N(),p(g,1,1,()=>{g=null}),R()),$[6].endTime?d?(d.p($,m),m&2&&i(d,1)):(d=J($),d.c(),i(d,1),d.m(w.parentNode,w)):d&&(N(),p(d,1,1,()=>{d=null}),R())},i($){B||(i(t.$$.fragment,$),i(e.$$.fragment,$),i(l.$$.fragment,$),i(o.$$.fragment,$),i(g),i(d),B=!0)},o($){p(t.$$.fragment,$),p(e.$$.fragment,$),p(l.$$.fragment,$),p(o.$$.fragment,$),p(g),p(d),B=!1},d($){D(t,$),$&&c(n),D(e,$),$&&c(s),D(l,$),$&&c(a),D(o,$),$&&c(f),g&&g.d($),$&&c(u),d&&d.d($),$&&c(w)}}}function K(r,t){let n,e,s;return e=new O({props:{$$slots:{default:[ge]},$$scope:{ctx:t}}}),{key:r,first:null,c(){n=C(),b(e.$$.fragment),this.h()},l(l){n=C(),I(e.$$.fragment,l),this.h()},h(){this.first=n},m(l,a){_(l,n,a),h(e,l,a),s=!0},p(l,a){t=l;const o={};a&1026&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(l){s||(i(e.$$.fragment,l),s=!0)},o(l){p(e.$$.fragment,l),s=!1},d(l){l&&c(n),D(e,l)}}}function de(r){let t,n=r[1].length+"",e;return{c(){t=k("Sections: "),e=k(n)},l(s){t=v(s,"Sections: "),e=v(s,n)},m(s,l){_(s,t,l),_(s,e,l)},p(s,l){l&2&&n!==(n=s[1].length+"")&&S(e,n)},d(s){s&&c(t),s&&c(e)}}}function we(r){let t=r[3](r[1]).distance.toFixed(2)+"",n,e;return{c(){n=k(t),e=k("k")},l(s){n=v(s,t),e=v(s,"k")},m(s,l){_(s,n,l),_(s,e,l)},p(s,l){l&2&&t!==(t=s[3](s[1]).distance.toFixed(2)+"")&&S(n,t)},d(s){s&&c(n),s&&c(e)}}}function be(r){let t,n,e,s;return t=new A({props:{$$slots:{default:[de]},$$scope:{ctx:r}}}),e=new A({props:{numeric:!0,$$slots:{default:[we]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment),n=T(),b(e.$$.fragment)},l(l){I(t.$$.fragment,l),n=L(l),I(e.$$.fragment,l)},m(l,a){h(t,l,a),_(l,n,a),h(e,l,a),s=!0},p(l,a){const o={};a&1026&&(o.$$scope={dirty:a,ctx:l}),t.$set(o);const f={};a&1026&&(f.$$scope={dirty:a,ctx:l}),e.$set(f)},i(l){s||(i(t.$$.fragment,l),i(e.$$.fragment,l),s=!0)},o(l){p(t.$$.fragment,l),p(e.$$.fragment,l),s=!1},d(l){D(t,l),l&&c(n),D(e,l)}}}function Ie(r){let t,n,e,s=!!r[1]&&!!r[0]&&Y(r);return n=new O({props:{$$slots:{default:[be]},$$scope:{ctx:r}}}),{c(){s&&s.c(),t=T(),b(n.$$.fragment)},l(l){s&&s.l(l),t=L(l),I(n.$$.fragment,l)},m(l,a){s&&s.m(l,a),_(l,t,a),h(n,l,a),e=!0},p(l,a){!!l[1]&&!!l[0]?s?(s.p(l,a),a&3&&i(s,1)):(s=Y(l),s.c(),i(s,1),s.m(t.parentNode,t)):s&&(N(),p(s,1,1,()=>{s=null}),R());const o={};a&1026&&(o.$$scope={dirty:a,ctx:l}),n.$set(o)},i(l){e||(i(s),i(n.$$.fragment,l),e=!0)},o(l){p(s),p(n.$$.fragment,l),e=!1},d(l){s&&s.d(l),l&&c(t),D(n,l)}}}function he(r){let t,n;return t=new re({props:{$$slots:{default:[Ie]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){h(t,e,s),n=!0},p(e,s){const l={};s&1027&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(i(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function De(r){let t,n=r[0].name+"",e,s,l,a,o;return a=new ne({props:{"table$aria-label":"Section list",$$slots:{default:[he]},$$scope:{ctx:r}}}),{c(){t=y("h1"),e=k(n),l=T(),b(a.$$.fragment),this.h()},l(f){t=x(f,"H1",{style:!0});var u=ee(t);e=v(u,n),u.forEach(c),l=L(f),I(a.$$.fragment,f),this.h()},h(){P(t,"style",s=`color: ${j(r[0].userID)}`)},m(f,u){_(f,t,u),te(t,e),_(f,l,u),h(a,f,u),o=!0},p(f,[u]){(!o||u&1)&&n!==(n=f[0].name+"")&&S(e,n),(!o||u&1&&s!==(s=`color: ${j(f[0].userID)}`))&&P(t,"style",s);const w={};u&1027&&(w.$$scope={dirty:u,ctx:f}),a.$set(w)},i(f){o||(i(a.$$.fragment,f),o=!0)},o(f){p(a.$$.fragment,f),o=!1},d(f){f&&c(t),f&&c(l),D(a,f)}}}async function Re({params:r,fetch:t}){const n="https://heh5n0uiid.execute-api.eu-west-1.amazonaws.com",e=r.runnerId,s=await t(`${n}/users/${e}`),l=await s.json(),o=await(await t(`${n}/sections`)).json(),f=o.filter(u=>u.users.some(w=>w.userID===l.userID)).sort((u,w)=>parseInt(u.sectionID)-parseInt(w.sectionID));return{status:s.status,props:{user:l,userSections:f,sections:o}}}function ke(r,t,n){let{user:e}=t,{userSections:s}=t,{sections:l}=t;const a=f=>l.find(B=>B.sectionID===f).users.find(B=>B.userID!==e.userID),o=f=>f.reduce((u,w)=>({distance:u.distance+w.distance}));return r.$$set=f=>{"user"in f&&n(0,e=f.user),"userSections"in f&&n(1,s=f.userSections),"sections"in f&&n(4,l=f.sections)},[e,s,a,o,l]}class je extends W{constructor(t){super();X(this,t,ke,De,Z,{user:0,userSections:1,sections:4})}}export{je as default,Re as load};