_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{MbR4:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/judge",function(){return n("n9eF")}])},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},n9eF:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("q1tI"),a=n.n(o),i=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return i(t,e),t}(Error);function s(e,t){if(!e)throw new c(t)}var u=n("TSYQ"),l=n.n(u),d=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),p=function(){return(p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},f=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function c(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))},h=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},w=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},j=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},v=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function y(e,t,n){var r=t.height,o=t.width,a=b(t,["height","width"]),i=p({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(n)var s=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(s),n(c))}catch(e){console.error(e)}}),1e3);return c}var m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,a=void 0===o?400:o,i=n.windowPosition,c=void 0===i?"windowCenter":i,s=n.windowWidth,u=void 0===s?550:s;y(e,p({height:a,width:u},"windowCenter"===c?j(u,a):v(u,a)),r)},t.handleClick=function(e){return f(t,void 0,void 0,(function(){var t,n,r,o,a,i,c,s,u,l;return h(this,(function(d){switch(d.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,c=t.openShareDialogOnClick,s=t.opts,u=o(i,s),r?[2]:(e.preventDefault(),n?(l=n(),w(l)?[4,l]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return c&&this.openShareDialog(u),a&&a(e,u),[2]}}))}))},t}return d(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,o=e.disabledStyle,i=e.forwardedRef,c=(e.networkLink,e.networkName),s=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),u=e.style,d=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,b(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=l()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),h=p(p(s?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),r&&o);return a.a.createElement("button",p({},d,{"aria-label":d["aria-label"]||c,className:f,onClick:this.handleClick,ref:i,style:h}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component),O=function(){return(O=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var g=function(e,t,n,r){function i(o,i){var c=n(o),s=O({},o);return Object.keys(c).forEach((function(e){delete s[e]})),a.a.createElement(m,O({},r,s,{forwardedRef:i,networkName:e,networkLink:t,opts:n(o)}))}return i.displayName="ShareButton-"+e,Object(o.forwardRef)(i)}("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,c=void 0===i?[]:i;return s(e,"twitter.url"),s(Array.isArray(a),"twitter.hashtags is not an array"),s(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+function(e){var t=Object.entries(e).filter((function(e){var t=e[1];return void 0!==t&&null!==t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}({url:e,text:n,via:r,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),x=n("Nhdc"),k=n("o0o1"),_=n.n(k);function S(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function C(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){S(a,r,o,i,c,"next",e)}function c(e){S(a,r,o,i,c,"throw",e)}i(void 0)}))}}var N=function(){var e=C(_.a.mark((function e(t){var n,r,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://dajare.abelab.dev/judge/?dajare=".concat(encodeURIComponent(t)),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:if("OK"===(o=e.sent).status){e.next=9;break}throw new Error(o.message);case 9:if("boolean"===typeof o.is_dajare){e.next=11;break}throw new Error(["Response Invalid: expect property `is_dajare` is boolean","but actual ".concat(o.is_dajare),"in responce of ".concat(n)].join(" "));case 11:return e.abrupt("return",o.is_dajare);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=C(_.a.mark((function e(t){var n,r,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://dajare.abelab.dev/eval/?dajare=".concat(encodeURIComponent(t)),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:if("OK"===(o=e.sent).status){e.next=9;break}throw new Error(o.message);case 9:if("number"===typeof o.score){e.next=11;break}throw new Error(["Response Invalid: expect property `score` is number","but actual ".concat(o.score),"in responce of ".concat(n)].join(" "));case 11:return e.abrupt("return",o.score);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.useState)(),t=e[0],n=e[1],r=Object(o.useState)(),a=r[0],i=r[1],c=Object(o.useState)(),s=c[0],u=c[1],l=Object(o.useState)(!1),d=l[0],p=l[1];return{result:{isDajare:t,score:a},error:s,isLoading:d&&(void 0===t||t&&void 0===a),isSubmitted:d,judge:Object(o.useCallback)(function(){var e=C(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(void 0),i(void 0),u(void 0),p(!0),e.next=6,Promise.all([N(t).then(n),P(t).then(i)]).catch(u);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[])}};t.default=function(){var e=E(),t=e.result,n=e.error,a=e.judge,i=e.isLoading,c=e.isSubmitted,s=Object(o.useState)(""),u=s[0],l=s[1],d=Object(o.useState)(!1),p=d[0],f=d[1],h=t.score&&Math.ceil(t.score),b=void 0!==h&&t.isDajare?"\u30b9\u30b3\u30a2: ".concat("\u2605".repeat(h)).concat("\u2606".repeat(5-h)):"\n\u30c0\u30b8\u30e3\u30ec\u3067\u306f\u3042\u308a\u307e\u305b\u3093",w=["\u30c0\u30b8\u30e3\u30ec: ".concat(u),b,""].join("\n"),j=Object(o.useCallback)((function(e){e.preventDefault(),f(!1),a(u)}),[u,a]),v=Object(o.useCallback)((function(e){return l(e.currentTarget.value)}),[]);return Object(r.jsxs)(x.d,{children:[Object(r.jsx)(x.f,{title:"\u30c0\u30b8\u30e3\u30ec\u5224\u5b9a",description:"\u30c0\u30b8\u30e3\u30ec\u30b9\u30b3\u30a2\u3092\u5224\u5b9a\u3057\u307e\u3059",path:"/judge"}),Object(r.jsx)(x.b,{children:"\u30c0\u30b8\u30e3\u30ec\u5224\u5b9a"}),Object(r.jsxs)("form",{className:"flex gap-4",onSubmit:j,children:[Object(r.jsx)("input",{type:"text",name:"dajare",id:"input-dajare",className:"flex-grow px-4 py-2 rounded-sm",onChange:v,value:u,placeholder:"\u5e03\u56e3\u304c\u3075\u3063\u3068\u3093\u3060",disabled:i,required:!0,minLength:4,autoFocus:!0}),Object(r.jsx)("button",{type:"submit",className:"px-4 py-2 bg-ritsumei text-white rounded-sm",children:"\u5224\u5b9a"})]}),c&&Object(r.jsxs)("section",{className:"bg-white m-6 p-5 border rounded text-center",children:[i&&"\u8aad\u307f\u8fbc\u307f\u4e2d",!i&&n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"font-bold mb-2",children:"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f"}),Object(r.jsxs)("p",{children:["\u30e1\u30c3\u30bb\u30fc\u30b8: ",Object(r.jsx)("pre",{className:"font-mono",children:n.message})]})]}),!i&&!n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"font-bold mb-2",children:"\u5224\u5b9a\u7d50\u679c"}),void 0!==t.isDajare&&!t.isDajare&&!p&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{className:"mb-5",children:"\u30c0\u30b8\u30e3\u30ec\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),Object(r.jsx)("button",{type:"button",className:"px-4 py-2 bg-ritsumei text-white rounded-sm",onClick:function(){return f(!0)},children:"\u30c0\u30b8\u30e3\u30ec\u3068\u3057\u3066\u5224\u5b9a\u3059\u308b"})]}),(t.isDajare||p)&&void 0!==h&&Object(r.jsx)("div",{role:"img","aria-label":"\u661f 5 \u3064\u4e2d ".concat(h," \u3064"),children:Object(r.jsxs)("span",{"aria-hidden":"true",children:["\u2605".repeat(h),"\u2606".repeat(5-h)]})})]})]}),c&&!i&&!n&&w&&Object(r.jsx)("div",{className:"text-center",children:Object(r.jsx)(g,{title:w,url:"https://rits-dajare.github.io/judge",via:"rits_dajare",hashtags:["\u30c0\u30b8\u30e3\u30ec\u5224\u5b9a"],className:"px-4 py-2 bg-twitter text-white rounded-sm",resetButtonStyle:!1,children:"\u7d50\u679c\u3092\u30c4\u30a4\u30fc\u30c8"})})]})}},o0o1:function(e,t,n){e.exports=n("ls82")}},[["MbR4",0,2,1,3]]]);