(function(e){function t(t){for(var n,o,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ab43a":"cfe7ef3f","chunk-c121684a":"07eb344c"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-c121684a":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0ab43a":"31d6cfe0","chunk-c121684a":"8a431eac"}[e]+".css",a=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===n||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],d.parentNode.removeChild(d),r(i)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],i=(r("a644"),r("2877")),s={},u=Object(i["a"])(s,o,a,!1,null,null,null),c=u.exports,l=r("9483");Object(l["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var p=r("5f5b"),d=r("bc3a"),f=r.n(d),h=(r("f9e3"),r("2dd8"),r("8c4f")),m=function(){var e=this,t=e._self._c;return t("div",{},[t("Auth")],1)},g=[],b=function(){var e=this,t=e._self._c;return t("div",[t("b-container",{attrs:{fluid:"sm"}},[t("b-row",{staticClass:"justify-content-md-center"},[t("b-col",{attrs:{col:"",lg:"4",md:"7"}},[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("b-card",{attrs:{header:this.header}},[t("b-form-group",{attrs:{id:"input-group-1","label-for":"input-1"}},[t("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Enter login",required:""},model:{value:e.form.login,callback:function(t){e.$set(e.form,"login",t)},expression:"form.login"}})],1),t("b-form-group",{attrs:{id:"input-group-2","label-for":"input-2"}},[t("b-form-input",{attrs:{id:"input-2",type:"password",placeholder:"Enter password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e.errorText?t("b-form-invalid-feedback",[e._v(" Username or Password is incorrect ")]):e._e(),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Login")]),t("b-button",{attrs:{type:"button",variant:"outline-primary",to:"/signup"}},[e._v("Sign up")])],1)],1)],1)],1)],1)],1)},v=[],y={name:"Auth",data(){return{header:"Login",form:{login:"",password:""},response:"",errorText:!1,access_token:""}},computed:{validation(){return!0}},methods:{async onSubmit(){let e={login:this.form.login,password:this.form.password},t={"content-type":"application/json","app-key":"i4vt213pn5o0nek24kmtlpmxfynpg6y086qudpyswsvdaqla94d4j8eim47k7886"};await fetch("https://api.dev.taptiqapp.com/user/login",{method:"POST",headers:t,body:JSON.stringify(e)}).then(e=>e.json()).then(e=>{this.response=e,localStorage.setItem("access_token",JSON.stringify(this.response.access_token)),this.$router.push("/user")})}}},w=y,k=(r("cc2e"),Object(i["a"])(w,b,v,!1,null,"0abc4a4c",null)),_=k.exports,j={name:"Home",components:{Auth:_}},O=j,S=Object(i["a"])(O,m,g,!1,null,null,null),x=S.exports;n["default"].use(h["a"]);const A=[{path:"/",name:"Home",component:x},{path:"/signup",name:"Signup",component:()=>r.e("chunk-c121684a").then(r.bind(null,"5c9c"))},{path:"/user",name:"Userinfo",component:()=>r.e("chunk-2d0ab43a").then(r.bind(null,"1511"))}],E=new h["a"]({mode:"history",base:"/",routes:A});var P=E;n["default"].config.productionTip=!1,n["default"].use(p["a"]),n["default"].prototype.$http=f.a,new n["default"]({router:P,render:e=>e(c)}).$mount("#app")},"6a88":function(e,t,r){},a644:function(e,t,r){"use strict";r("6a88")},c396:function(e,t,r){},cc2e:function(e,t,r){"use strict";r("c396")}});
//# sourceMappingURL=app.466802f1.js.map