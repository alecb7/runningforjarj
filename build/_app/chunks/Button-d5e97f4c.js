var le=Object.defineProperty;var K=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var L=(n,e,a)=>e in n?le(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,M=(n,e)=>{for(var a in e||(e={}))se.call(e,a)&&L(n,a,e[a]);if(K)for(var a of K(e))ce.call(e,a)&&L(n,a,e[a]);return n};import{S as re,i as ue,s as de,w as Q,l as C,x as fe,y as T,g as b,z as me,A as k,n as _e,o as U,B as v,p as be,q as j,d as f,O as G,P as he,U as ge,r as H,C as P,Q as N,T as ye,F as pe,e as w,c as x,a as $,b as ee,k as ke,m as Ce,J as Se,K as Be,L as Ae}from"./index-140bc288.js";import{R as W,c as X,f as Ee,B as Ie,A as Me,d as Ue}from"./Ripple-dfc7c852.js";function Y(n){let e;return{c(){e=w("div"),this.h()},l(a){e=x(a,"DIV",{class:!0}),$(e).forEach(f),this.h()},h(){ee(e,"class","mdc-button__touch")},m(a,c){b(a,e,c)},d(a){a&&f(e)}}}function je(n){let e,a,c,u;const r=n[27].default,l=pe(r,n,n[29],null);let t=n[6]&&Y();return{c(){e=w("div"),a=ke(),l&&l.c(),t&&t.c(),c=C(),this.h()},l(o){e=x(o,"DIV",{class:!0}),$(e).forEach(f),a=Ce(o),l&&l.l(o),t&&t.l(o),c=C(),this.h()},h(){ee(e,"class","mdc-button__ripple")},m(o,s){b(o,e,s),b(o,a,s),l&&l.m(o,s),t&&t.m(o,s),b(o,c,s),u=!0},p(o,s){l&&l.p&&(!u||s&536870912)&&Se(l,r,o,o[29],u?Ae(r,o[29],s,null):Be(o[29]),null),o[6]?t||(t=Y(),t.c(),t.m(c.parentNode,c)):t&&(t.d(1),t=null)},i(o){u||(j(l,o),u=!0)},o(o){U(l,o),u=!1},d(o){o&&f(e),o&&f(a),l&&l.d(o),t&&t.d(o),o&&f(c)}}}function Pe(n){let e,a,c;const u=[{use:[[W,{ripple:n[3],unbounded:!1,color:n[4],disabled:!!n[22].disabled,addClass:n[18],removeClass:n[19],addStyle:n[20]}],n[16],...n[0]]},{class:X(M({[n[1]]:!0,"mdc-button":!0,"mdc-button--raised":n[5]==="raised","mdc-button--unelevated":n[5]==="unelevated","mdc-button--outlined":n[5]==="outlined","smui-button--color-secondary":n[4]==="secondary","mdc-button--touch":n[6],"mdc-card__action":n[17]==="card:action","mdc-card__action--button":n[17]==="card:action","mdc-dialog__button":n[17]==="dialog:action","mdc-top-app-bar__navigation-icon":n[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":n[17]==="top-app-bar:action","mdc-snackbar__action":n[17]==="snackbar:actions","mdc-banner__secondary-action":n[17]==="banner"&&n[8],"mdc-banner__primary-action":n[17]==="banner"&&!n[8],"mdc-tooltip__action":n[17]==="tooltip:rich-actions"},n[11]))},{style:Object.entries(n[12]).map(Z).concat([n[2]]).join(" ")},n[15],n[14],n[13],{href:n[7]},n[22]];var r=n[9];function l(t){let o={$$slots:{default:[je]},$$scope:{ctx:t}};for(let s=0;s<u.length;s+=1)o=P(o,u[s]);return{props:o}}return r&&(e=new r(l(n)),n[28](e),e.$on("click",n[21])),{c(){e&&Q(e.$$.fragment),a=C()},l(t){e&&fe(e.$$.fragment,t),a=C()},m(t,o){e&&T(e,t,o),b(t,a,o),c=!0},p(t,[o]){const s=o&6289919?me(u,[o&6094873&&{use:[[W,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[22].disabled,addClass:t[18],removeClass:t[19],addStyle:t[20]}],t[16],...t[0]]},o&133490&&{class:X(M({[t[1]]:!0,"mdc-button":!0,"mdc-button--raised":t[5]==="raised","mdc-button--unelevated":t[5]==="unelevated","mdc-button--outlined":t[5]==="outlined","smui-button--color-secondary":t[4]==="secondary","mdc-button--touch":t[6],"mdc-card__action":t[17]==="card:action","mdc-card__action--button":t[17]==="card:action","mdc-dialog__button":t[17]==="dialog:action","mdc-top-app-bar__navigation-icon":t[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[17]==="top-app-bar:action","mdc-snackbar__action":t[17]==="snackbar:actions","mdc-banner__secondary-action":t[17]==="banner"&&t[8],"mdc-banner__primary-action":t[17]==="banner"&&!t[8],"mdc-tooltip__action":t[17]==="tooltip:rich-actions"},t[11]))},o&4100&&{style:Object.entries(t[12]).map(Z).concat([t[2]]).join(" ")},o&32768&&k(t[15]),o&16384&&k(t[14]),o&8192&&k(t[13]),o&128&&{href:t[7]},o&4194304&&k(t[22])]):{};if(o&536870976&&(s.$$scope={dirty:o,ctx:t}),r!==(r=t[9])){if(e){_e();const h=e;U(h.$$.fragment,1,0,()=>{v(h,1)}),be()}r?(e=new r(l(t)),t[28](e),e.$on("click",t[21]),Q(e.$$.fragment),j(e.$$.fragment,1),T(e,a.parentNode,a)):e=null}else r&&e.$set(s)},i(t){c||(e&&j(e.$$.fragment,t),c=!0)},o(t){e&&U(e.$$.fragment,t),c=!1},d(t){n[28](null),t&&f(a),e&&v(e,t)}}}const Z=([n,e])=>`${n}: ${e};`;function De(n,e,a){let c,u,r;const l=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let t=G(e,l),{$$slots:o={},$$scope:s}=e;const h=Ee(he());let{use:D=[]}=e,{class:O=""}=e,{style:q=""}=e,{ripple:R=!0}=e,{color:V="primary"}=e,{variant:z="text"}=e,{touch:F=!1}=e,{href:S=void 0}=e,{action:g="close"}=e,{defaultAction:B=!1}=e,{secondary:A=!1}=e,y,d={},m={},_=ge("SMUI:button:context"),{component:J=S==null?Ie:Me}=e,E=t.disabled;H("SMUI:label:context","button"),H("SMUI:icon:context","button");function te(i){d[i]||a(11,d[i]=!0,d)}function ne(i){(!(i in d)||d[i])&&a(11,d[i]=!1,d)}function ae(i,p){m[i]!=p&&(p===""||p==null?(delete m[i],a(12,m)):a(12,m[i]=p,m))}function oe(){_==="banner"&&Ue(I(),A?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function I(){return y.getElement()}function ie(i){ye[i?"unshift":"push"](()=>{y=i,a(10,y)})}return n.$$set=i=>{a(30,e=P(P({},e),N(i))),a(22,t=G(e,l)),"use"in i&&a(0,D=i.use),"class"in i&&a(1,O=i.class),"style"in i&&a(2,q=i.style),"ripple"in i&&a(3,R=i.ripple),"color"in i&&a(4,V=i.color),"variant"in i&&a(5,z=i.variant),"touch"in i&&a(6,F=i.touch),"href"in i&&a(7,S=i.href),"action"in i&&a(23,g=i.action),"defaultAction"in i&&a(24,B=i.defaultAction),"secondary"in i&&a(8,A=i.secondary),"component"in i&&a(9,J=i.component),"$$scope"in i&&a(29,s=i.$$scope)},n.$$.update=()=>{a(15,c=_==="dialog:action"&&g!=null?{"data-mdc-dialog-action":g}:{action:e.action}),a(14,u=_==="dialog:action"&&B?{"data-mdc-dialog-button-default":""}:{default:e.default}),a(13,r=_==="banner"?{}:{secondary:e.secondary}),E!==t.disabled&&(I().blur(),a(26,E=t.disabled))},e=N(e),[D,O,q,R,V,z,F,S,A,J,y,d,m,r,u,c,h,_,te,ne,ae,oe,t,g,B,I,E,o,ie,s]}class Ve extends re{constructor(e){super();ue(this,e,De,Pe,de,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}export{Ve as B};
