import{d as e,bp as t,br as s,k as a,u as o,l as i,e as l,w as r,g as n,bq as d,K as p,bo as u,o as c,f as m,j as f,t as y,n as g,p as _,aB as x,G as T,B as b}from"./index-MskScSmw.js";import{_ as v,a as B}from"./CurrentPermissionMode.vuevuetypescriptsetuptruelang-Br43hiB4.js";import{_ as k}from"./Authority.vuevuetypescriptsetuptruelang-BlvM_CEG.js";import{N as h}from"./Divider-D82D6O-F.js";import{_ as P}from"./Space-EbjOeIIa.js";import"./get-slot-BjAOOWF7.js";const j=e({__name:"ButtonPermission",setup(e){const{hasPermission:j,isBackendPermissionMode:C}=t(),M=s(),w=a(),{t:A}=o(),R=i((()=>w.getRoleList.includes(d.ADMIN))),S=i((()=>w.getRoleList.includes(d.USER)));function D(e){return t=this,s=null,a=function*(){const t=`${e}FakeToken`;w.setToken(t),yield w.getUserInfoAction(),yield M.changePermissionCode()},new Promise(((e,o)=>{var i=e=>{try{r(a.next(e))}catch(t){o(t)}},l=e=>{try{r(a.throw(e))}catch(t){o(t)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(i,l);r((a=a.apply(t,s)).next())}));var t,s,a}return(e,t)=>{const s=p,a=h,o=B,i=b,w=P,I=u("auth");return c(),l(s,{title:n(A)("page.permission.pageTitles.button")},{default:r((()=>[m(v),m(s,{class:"my-4",title:n(A)("page.permission.currentCode"),embedded:"",bordered:!1},{default:r((()=>[f(y(n(M).getPermissionCodes),1)])),_:1},8,["title"]),m(a),m(o,{class:"mt-4",type:"info",title:n(A)("page.permission.backendLeftMenuChangeTitle"),"show-icon":""},null,8,["title"]),m(a),m(s,{class:"mt-4",title:n(A)("page.permission.backendPermissionSwitchTitle"),embedded:"",bordered:!1},{default:r((()=>[m(w,null,{default:r((()=>[m(i,{type:n(R)?"primary":"default",disabled:!n(C),onClick:t[0]||(t[0]=e=>D(n(d).ADMIN))},{default:r((()=>[f(y(n(d).ADMIN),1)])),_:1},8,["type","disabled"]),m(i,{type:n(S)?"primary":"default",disabled:!n(C),onClick:t[1]||(t[1]=e=>D(n(d).USER))},{default:r((()=>[f(y(n(d).USER),1)])),_:1},8,["type","disabled"])])),_:1})])),_:1},8,["title"]),n(C)?(c(),g(T,{key:0},[m(a,null,{default:r((()=>[f(y(n(A)("page.permission.componentWayTitle")),1)])),_:1}),m(k,{value:"1000"},{default:r((()=>[m(i,{type:"primary",class:"mx-4"},{default:r((()=>[f(y(n(A)("page.permission.codeButtonText",{code:"1000"})),1)])),_:1})])),_:1}),m(k,{value:"2000"},{default:r((()=>[m(i,{type:"success",class:"mx-4"},{default:r((()=>[f(y(n(A)("page.permission.codeButtonText",{code:"2000"})),1)])),_:1})])),_:1}),m(k,{value:["1000","2000"]},{default:r((()=>[m(i,{type:"error",class:"mx-4"},{default:r((()=>[f(y(n(A)("page.permission.codeButtonText",{code:["1000","2000"]})),1)])),_:1})])),_:1}),m(a,null,{default:r((()=>[f(y(n(A)("page.permission.functionWayTitle")),1)])),_:1}),n(j)("1000")?(c(),l(i,{key:0,type:"primary",class:"mx-4"},{default:r((()=>[f(y(n(A)("page.permission.codeButtonText",{code:"1000"})),1)])),_:1})):_("",!0),n(j)("2000")?(c(),l(i,{key:1,type:"success",class:"mx-4"},{default:r((()=>[f(y(n(A)("page.permission.codeButtonText",{code:"2000"})),1)])),_:1})):_("",!0),n(j)(["1000","2000"])?(c(),l(i,{key:2,type:"error",class:"mx-4"},{default:r((()=>[f(y(n(A)("page.permission.codeButtonText",{code:["1000","2000"]})),1)])),_:1})):_("",!0),m(a,null,{default:r((()=>[f(y(n(A)("page.permission.directiveWayTitle")),1)])),_:1}),x((c(),l(i,{type:"primary",class:"mx-4"},{default:r((()=>[f(y(n(A)("page.permission.codeButtonText",{code:"1000"})),1)])),_:1})),[[I,"1000"]]),x((c(),l(i,{type:"success",class:"mx-4"},{default:r((()=>[f(y(n(A)("page.permission.codeButtonText",{code:"2000"})),1)])),_:1})),[[I,"2000"]]),x((c(),l(i,{type:"error",class:"mx-4"},{default:r((()=>[f(y(n(A)("page.permission.codeButtonText",{code:["1000","2000"]})),1)])),_:1})),[[I,["1000","2000"]]])],64)):_("",!0)])),_:1},8,["title"])}}});export{j as default};
