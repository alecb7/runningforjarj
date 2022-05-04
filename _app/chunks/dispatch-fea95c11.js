/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var d=function(e,r){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])},d(e,r)};function v(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");d(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var y=function(){return y=Object.assign||function(r){for(var t,o=1,a=arguments.length;o<a;o++){t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},y.apply(this,arguments)};function g(e,r,t,o){function a(n){return n instanceof t?n:new t(function(u){u(n)})}return new(t||(t=Promise))(function(n,u){function l(c){try{i(o.next(c))}catch(f){u(f)}}function s(c){try{i(o.throw(c))}catch(f){u(f)}}function i(c){c.done?n(c.value):a(c.value).then(l,s)}i((o=o.apply(e,r||[])).next())})}function _(e,r){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,a,n,u;return u={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function l(i){return function(c){return s([i,c])}}function s(i){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,a&&(n=i[0]&2?a.return:i[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,i[1])).done)return n;switch(a=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return t.label++,{value:i[1],done:!1};case 5:t.label++,a=i[1],i=[0];continue;case 7:i=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){t.label=i[1];break}if(i[0]===6&&t.label<n[1]){t.label=n[1],n=i;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(i);break}n[2]&&t.ops.pop(),t.trys.pop();continue}i=r.call(e,t)}catch(c){i=[6,c],a=0}finally{o=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function m(e){var r=typeof Symbol=="function"&&Symbol.iterator,t=r&&e[r],o=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var w=function(){function e(r){r===void 0&&(r={}),this.adapter=r}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function b(e,r){if(e.closest)return e.closest(r);for(var t=e;t;){if(h(t,r))return t;t=t.parentElement}return null}function h(e,r){var t=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return t.call(e,r)}function p(e){var r=e;if(r.offsetParent!==null)return r.scrollWidth;var t=r.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var o=t.scrollWidth;return document.documentElement.removeChild(t),o}var O=Object.freeze(Object.defineProperty({__proto__:null,closest:b,matches:h,estimateScrollWidth:p},Symbol.toStringTag,{value:"Module"}));function j(e,r,t,o={bubbles:!0},a=!1){if(typeof Event!="undefined"&&e){const n=new CustomEvent(r,Object.assign(Object.assign({},o),{detail:t}));if(e==null||e.dispatchEvent(n),a&&r.startsWith("SMUI")){const u=new CustomEvent(r.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},o),{detail:t}));e==null||e.dispatchEvent(u),u.defaultPrevented&&n.preventDefault()}return n}}export{w as M,v as _,y as a,m as b,g as c,j as d,_ as e,O as p};
