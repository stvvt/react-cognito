(this.webpackJsonpcognito=this.webpackJsonpcognito||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(5),i=n.n(r),c=n(1),l=n.n(c),u=n(6),s=n(7),p=(n(14),{origin:"https://stvvt.github.io/react-cognito",authority:"https://reactapp.auth.eu-central-1.amazoncognito.com",clientId:"7s7uifbd9p5rds9van1dtv6hmo",userPoolId:"eu-central-1_uv19uFqzy"}),d=n(2),m=new d.UserManager({redirect_uri:"".concat(p.origin,"/callback"),scope:"email openid profile",silent_redirect_uri:"".concat(p.origin,"/silent_callback"),automaticSilentRenew:!0,loadUserInfo:!0,post_logout_redirect_uri:p.origin,response_type:"code",userStore:new d.WebStorageStateStore({store:window.localStorage}),client_id:p.clientId,authority:p.authority,metadata:{authorization_endpoint:"".concat(p.authority,"/oauth2/authorize"),id_token_signing_alg_values_supported:["RS256"],issuer:"https://cognito-idp.eu-central-1.amazonaws.com/".concat(p.userPoolId),jwks_uri:"https://cognito-idp.eu-central-1.amazonaws.com/".concat(p.userPoolId,"/.well-known/jwks.json"),response_types_supported:["code","token"],scopes_supported:["openid","email","phone","profile"],subject_types_supported:["public"],token_endpoint:"".concat(p.authority,"/oauth2/token"),token_endpoint_auth_methods_supported:["client_secret_basic","client_secret_post"],userinfo_endpoint:"".concat(p.authority,"/oauth2/userInfo"),end_session_endpoint:"".concat(p.authority,"/logout?client_id=").concat(p.clientId,"&logout_uri=").concat(p.origin,"/logout")}}),g=a.a.createContext({}),h=function(e){var t=e.children,n=Object(o.useState)(),r=Object(s.a)(n,2),i=r[0],c=r[1];return Object(o.useEffect)((function(){var e=window.location.pathname.split("/"),t=e[e.length-1];Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="callback"===e.t0?3:"silent_callback"===e.t0?7:"logout"===e.t0?10:14;break;case 3:return e.next=5,m.signinRedirectCallback();case 5:return window.location.replace(p.origin),e.abrupt("return");case 7:return e.next=9,m.signinSilentCallback();case 9:return e.abrupt("return");case 10:return e.next=12,m.signoutRedirectCallback();case 12:return window.location.replace(p.origin),e.abrupt("return");case 14:return e.next=16,m.getUser();case 16:n=e.sent,c(n);case 18:case"end":return e.stop()}}),e)})))()}),[]),a.a.createElement(g.Provider,{value:{user:i}},t)},_=function(){var e=Object(o.useContext)(g).user;return"undefined"===typeof e?a.a.createElement("p",null,"Loading ..."):e?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Logged in as ",e.profile.email," (",e.profile.email_verified?"+":"-",")"),a.a.createElement("img",{src:e.profile.picture,alt:"Profile avatar"}),a.a.createElement("h1",null,"Wellcome, ",e.profile.name),a.a.createElement("p",null,"from ",e.profile.identities[0].providerName),a.a.createElement("hr",null),a.a.createElement("pre",null,JSON.stringify(e,null,"  ")),a.a.createElement("p",null,a.a.createElement("button",{onClick:function(){m.signoutRedirect()}},"Logout"))):a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"You're not logged in."),a.a.createElement("p",null,a.a.createElement("button",{onClick:function(){m.signinRedirect()}},"Signup"),a.a.createElement("button",{onClick:function(){m.signinRedirect()}},"Login")))};var f=function(){return a.a.createElement(h,null,a.a.createElement("div",{className:"App"},a.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.e25402cf.chunk.js.map