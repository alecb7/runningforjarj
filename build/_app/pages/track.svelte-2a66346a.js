import{S as z,i as Y,s as F,e as G,t as d,k as T,w as g,c as J,a as K,h,d as c,m as S,x as b,b as O,g as u,Y as P,y as k,q as $,o as _,B as w,v as Q,l as p,n as E,a4 as U,a5 as V,p as L,j as y,ac as W,E as H}from"../chunks/index-f7a6ba17.js";import{D as X,B as Z,R as x,C as j}from"../chunks/index-1a545a3c.js";import{g as ee,L as te}from"../chunks/Button-06e923c9.js";import{u as le}from"../chunks/pace-3c977d72.js";import{h as C}from"../chunks/moment-9ea79f3d.js";import{g as D}from"../chunks/sectionStyles-0e97f438.js";import{g as I}from"../chunks/colours-f9de8a07.js";import"../chunks/index-b107b255.js";import"../chunks/prefixFilter-de33cb53.js";function N(f,l,o){const t=f.slice();return t[5]=l[o],t}function R(f,l,o){const t=f.slice();return t[8]=l[o],t}function q(f){let l=[],o=new Map,t,s,n=f[0];const r=a=>a[5].sectionID;for(let a=0;a<n.length;a+=1){let e=N(f,n,a),i=r(e);o.set(i,l[a]=M(i,e))}return{c(){for(let a=0;a<l.length;a+=1)l[a].c();t=p()},l(a){for(let e=0;e<l.length;e+=1)l[e].l(a);t=p()},m(a,e){for(let i=0;i<l.length;i+=1)l[i].m(a,e);u(a,t,e),s=!0},p(a,e){e&13&&(n=a[0],E(),l=U(l,e,r,1,a,n,o,t.parentNode,V,M,t,N),L())},i(a){if(!s){for(let e=0;e<n.length;e+=1)$(l[e]);s=!0}},o(a){for(let e=0;e<l.length;e+=1)_(l[e]);s=!1},d(a){for(let e=0;e<l.length;e+=1)l[e].d(a);a&&c(t)}}}function se(f){let l=f[5].startLocation+"",o,t,s=f[5].endLocation+"",n;return{c(){o=d(l),t=d(" - "),n=d(s)},l(r){o=h(r,l),t=h(r," - "),n=h(r,s)},m(r,a){u(r,o,a),u(r,t,a),u(r,n,a)},p(r,a){a&1&&l!==(l=r[5].startLocation+"")&&y(o,l),a&1&&s!==(s=r[5].endLocation+"")&&y(n,s)},d(r){r&&c(o),r&&c(t),r&&c(n)}}}function re(f){var r,a;let l=((r=f[2](f[5]))==null?void 0:r.format("ddd H:mma"))+"",o,t,s=((a=f[3](f[5]))==null?void 0:a.format("ddd H:mma"))+"",n;return{c(){o=d(l),t=d(" - "),n=d(s)},l(e){o=h(e,l),t=h(e," - "),n=h(e,s)},m(e,i){u(e,o,i),u(e,t,i),u(e,n,i)},p(e,i){var m,v;i&1&&l!==(l=((m=e[2](e[5]))==null?void 0:m.format("ddd H:mma"))+"")&&y(o,l),i&1&&s!==(s=((v=e[3](e[5]))==null?void 0:v.format("ddd H:mma"))+"")&&y(n,s)},d(e){e&&c(o),e&&c(t),e&&c(n)}}}function oe(f){let l,o,t=f[5].users,s=[];for(let r=0;r<t.length;r+=1)s[r]=A(R(f,t,r));const n=r=>_(s[r],1,1,()=>{s[r]=null});return{c(){for(let r=0;r<s.length;r+=1)s[r].c();l=p()},l(r){for(let a=0;a<s.length;a+=1)s[a].l(r);l=p()},m(r,a){for(let e=0;e<s.length;e+=1)s[e].m(r,a);u(r,l,a),o=!0},p(r,a){if(a&1){t=r[5].users;let e;for(e=0;e<t.length;e+=1){const i=R(r,t,e);s[e]?(s[e].p(i,a),$(s[e],1)):(s[e]=A(i),s[e].c(),$(s[e],1),s[e].m(l.parentNode,l))}for(E(),e=t.length;e<s.length;e+=1)n(e);L()}},i(r){if(!o){for(let a=0;a<t.length;a+=1)$(s[a]);o=!0}},o(r){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)_(s[a]);o=!1},d(r){W(s,r),r&&c(l)}}}function ae(f){let l;return{c(){l=d("All")},l(o){l=h(o,"All")},m(o,t){u(o,l,t)},p:H,i:H,o:H,d(o){o&&c(l)}}}function ne(f){let l=f[8].name+"",o;return{c(){o=d(l)},l(t){o=h(t,l)},m(t,s){u(t,o,s)},p(t,s){s&1&&l!==(l=t[8].name+"")&&y(o,l)},d(t){t&&c(o)}}}function fe(f){let l,o,t;return l=new te({props:{$$slots:{default:[ne]},$$scope:{ctx:f}}}),{c(){g(l.$$.fragment),o=T()},l(s){b(l.$$.fragment,s),o=S(s)},m(s,n){k(l,s,n),u(s,o,n),t=!0},p(s,n){const r={};n&2049&&(r.$$scope={dirty:n,ctx:s}),l.$set(r)},i(s){t||($(l.$$.fragment,s),t=!0)},o(s){_(l.$$.fragment,s),t=!1},d(s){w(l,s),s&&c(o)}}}function A(f){let l,o;return l=new ee({props:{style:"color: "+I(f[8].userID),disabled:!0,$$slots:{default:[fe]},$$scope:{ctx:f}}}),{c(){g(l.$$.fragment)},l(t){b(l.$$.fragment,t)},m(t,s){k(l,t,s),o=!0},p(t,s){const n={};s&1&&(n.style="color: "+I(t[8].userID)),s&2049&&(n.$$scope={dirty:s,ctx:t}),l.$set(n)},i(t){o||($(l.$$.fragment,t),o=!0)},o(t){_(l.$$.fragment,t),o=!1},d(t){w(l,t)}}}function ie(f){let l,o,t,s;const n=[ae,oe],r=[];function a(e,i){return e[5].sectionID==="21"?0:1}return l=a(f),o=r[l]=n[l](f),{c(){o.c(),t=p()},l(e){o.l(e),t=p()},m(e,i){r[l].m(e,i),u(e,t,i),s=!0},p(e,i){let m=l;l=a(e),l===m?r[l].p(e,i):(E(),_(r[m],1,1,()=>{r[m]=null}),L(),o=r[l],o?o.p(e,i):(o=r[l]=n[l](e),o.c()),$(o,1),o.m(t.parentNode,t))},i(e){s||($(o),s=!0)},o(e){_(o),s=!1},d(e){r[l].d(e),e&&c(t)}}}function ce(f){let l,o,t,s,n,r,a;return l=new j({props:{$$slots:{default:[se]},$$scope:{ctx:f}}}),t=new j({props:{style:`${D(f[5],"start")}`,$$slots:{default:[re]},$$scope:{ctx:f}}}),n=new j({props:{style:`${D(f[5],"start")}; overflow:visible`,$$slots:{default:[ie]},$$scope:{ctx:f}}}),{c(){g(l.$$.fragment),o=T(),g(t.$$.fragment),s=T(),g(n.$$.fragment),r=T()},l(e){b(l.$$.fragment,e),o=S(e),b(t.$$.fragment,e),s=S(e),b(n.$$.fragment,e),r=S(e)},m(e,i){k(l,e,i),u(e,o,i),k(t,e,i),u(e,s,i),k(n,e,i),u(e,r,i),a=!0},p(e,i){const m={};i&2049&&(m.$$scope={dirty:i,ctx:e}),l.$set(m);const v={};i&1&&(v.style=`${D(e[5],"start")}`),i&2049&&(v.$$scope={dirty:i,ctx:e}),t.$set(v);const B={};i&1&&(B.style=`${D(e[5],"start")}; overflow:visible`),i&2049&&(B.$$scope={dirty:i,ctx:e}),n.$set(B)},i(e){a||($(l.$$.fragment,e),$(t.$$.fragment,e),$(n.$$.fragment,e),a=!0)},o(e){_(l.$$.fragment,e),_(t.$$.fragment,e),_(n.$$.fragment,e),a=!1},d(e){w(l,e),e&&c(o),w(t,e),e&&c(s),w(n,e),e&&c(r)}}}function M(f,l){let o,t,s;return t=new x({props:{$$slots:{default:[ce]},$$scope:{ctx:l}}}),{key:f,first:null,c(){o=p(),g(t.$$.fragment),this.h()},l(n){o=p(),b(t.$$.fragment,n),this.h()},h(){this.first=o},m(n,r){u(n,o,r),k(t,n,r),s=!0},p(n,r){l=n;const a={};r&2049&&(a.$$scope={dirty:r,ctx:l}),t.$set(a)},i(n){s||($(t.$$.fragment,n),s=!0)},o(n){_(t.$$.fragment,n),s=!1},d(n){n&&c(o),w(t,n)}}}function ue(f){let l,o,t=!!f[0]&&!!f[1]&&q(f);return{c(){t&&t.c(),l=p()},l(s){t&&t.l(s),l=p()},m(s,n){t&&t.m(s,n),u(s,l,n),o=!0},p(s,n){!!s[0]&&!!s[1]?t?(t.p(s,n),n&3&&$(t,1)):(t=q(s),t.c(),$(t,1),t.m(l.parentNode,l)):t&&(E(),_(t,1,1,()=>{t=null}),L())},i(s){o||($(t),o=!0)},o(s){_(t),o=!1},d(s){t&&t.d(s),s&&c(l)}}}function $e(f){let l,o;return l=new Z({props:{$$slots:{default:[ue]},$$scope:{ctx:f}}}),{c(){g(l.$$.fragment)},l(t){b(l.$$.fragment,t)},m(t,s){k(l,t,s),o=!0},p(t,s){const n={};s&2051&&(n.$$scope={dirty:s,ctx:t}),l.$set(n)},i(t){o||($(l.$$.fragment,t),o=!0)},o(t){_(l.$$.fragment,t),o=!1},d(t){w(l,t)}}}function _e(f){let l,o,t,s,n;return s=new X({props:{"table$aria-label":"Section list",$$slots:{default:[$e]},$$scope:{ctx:f}}}),{c(){l=G("h1"),o=d("Track"),t=T(),g(s.$$.fragment),this.h()},l(r){l=J(r,"H1",{class:!0});var a=K(l);o=h(a,"Track"),a.forEach(c),t=S(r),b(s.$$.fragment,r),this.h()},h(){O(l,"class","svelte-335qjl")},m(r,a){u(r,l,a),P(l,o),u(r,t,a),k(s,r,a),n=!0},p(r,[a]){const e={};a&2051&&(e.$$scope={dirty:a,ctx:r}),s.$set(e)},i(r){n||($(s.$$.fragment,r),n=!0)},o(r){_(s.$$.fragment,r),n=!1},d(r){r&&c(l),r&&c(t),w(s,r)}}}function me(f,l,o){const t="https://heh5n0uiid.execute-api.eu-west-1.amazonaws.com";let s,n;return Q(async()=>{const e=await fetch(`${t}/sections`),i=await fetch(`${t}/users`),m=await e.json();o(1,n=await i.json()),o(0,s=le(m))}),[s,n,e=>e.estimatedStartTime?e.estimatedStartTime:C(e.startTime),e=>e.estimatedEndTime?e.estimatedEndTime:C(e.endTime)]}class Se extends z{constructor(l){super();Y(this,l,me,_e,F,{})}}export{Se as default};
