(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab43a"],{1511:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("User")],1)},a=[],r=function(){var e=this,t=e._self._c;return t("div",[t("b-container",{attrs:{fluid:"sm"}},[t("b-row",{staticClass:"justify-content-md-center"},[this.user?t("b-col",{attrs:{col:"",lg:"4",md:"7"}},[t("b-card",{attrs:{"no-body":"","img-src":this.user.avatar,"img-alt":"Image","img-top":"",footer:this.user.fullname}})],1):e._e()],1)],1)],1)},o=[],c=s("bc3a"),l=s.n(c),i={name:"Userinfo",data(){return{user:"",userName:"User name",newTocken:""}},mounted(){this.newTocken=localStorage.access_token.replace(/^.|.$/g,""),localStorage.access_token&&l.a.get("https://api.dev.taptiqapp.com/user/me",{headers:{"access-token":this.newTocken}}).then(e=>{this.user=e.data},e=>{console.error(e)})}},u=i,d=s("2877"),m=Object(d["a"])(u,r,o,!1,null,null,null),p=m.exports,h={name:"Userinfo",components:{User:p}},f=h,b=Object(d["a"])(f,n,a,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0ab43a.cfe7ef3f.js.map