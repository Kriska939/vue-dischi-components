(function(t){function e(e){for(var r,u,o=e[0],s=e[1],i=e[2],f=0,p=[];f<o.length;f++)u=o[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&p.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},c=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var i=0;i<o.length;i++)e(o[i]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1008:function(t,e,n){"use strict";n("9705")},"24c8":function(t,e,n){"use strict";n("f89b")},"3c42":function(t,e,n){"use strict";n("a637")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("main",[n("Albums")],1)],1)},c=[],u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"container"},[r("img",{attrs:{src:n("9d64")}})])])}],s={name:"Header"},i=s,l=(n("1008"),n("2877")),f=Object(l["a"])(i,u,o,!1,null,"7f78f87e",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("section",{attrs:{id:"album-container"}},t._l(t.albumList,(function(t,e){return n("div",{key:e,staticClass:"card"},[n("Cards",{attrs:{album:t}})],1)})),0)])},b=[],m=n("bc3a"),v=n.n(m),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:t.album.poster,alt:t.album.title}}),n("h2",{staticClass:"title"},[t._v(t._s(t.album.title))]),n("address",{staticClass:"author"},[t._v(t._s(t.album.author))]),n("time",{staticClass:"year",attrs:{datetime:t.album.year}},[t._v(t._s(t.album.year))])])},_=[],y={name:"Card",props:["album"]},g=y,O=(n("3c42"),Object(l["a"])(g,h,_,!1,null,"74391ad8",null)),j=O.exports,x={data:function(){return{albumList:[]}},name:"albums",components:{Cards:j},created:function(){var t=this;v.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.albumList=e.data.response,console.log(t.albumList)}))}},w=x,C=(n("24c8"),Object(l["a"])(w,d,b,!1,null,"77c7ea4e",null)),P=C.exports,$={name:"App",components:{Header:p,Albums:P}},E=$,S=(n("5c0b"),Object(l["a"])(E,a,c,!1,null,null,null)),k=S.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},9705:function(t,e,n){},"9c0c":function(t,e,n){},"9d64":function(t,e,n){t.exports=n.p+"img/logo.148b28a3.png"},a637:function(t,e,n){},f89b:function(t,e,n){}});
//# sourceMappingURL=app.78b95aad.js.map