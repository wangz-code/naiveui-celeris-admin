import{d as e,by as t,bA as s,k as a,u as i,l as o,c as l,w as r,e as n,L as d,bx as u,o as p,b as c,h as m,j as y,bz as f,p as g,q as _,aM as x,H as T,B as b}from"./index-Chs2zBSz.js";import{_ as v,a as h}from"./CurrentPermissionMode.vuevuetypescriptsetuptruelang-WIBZxLbi.js";import{_ as k}from"./Authority.vuevuetypescriptsetuptruelang-Dudp5exw.js";import{N as B}from"./Divider-CJa-gdel.js";import{_ as P}from"./Space-DLK8xmBf.js";import"./get-slot-BjAOOWF7.js";const j=e({__name:"ButtonPermission",setup(e){const{hasPermission:j,isBackendPermissionMode:C}=t(),M=s(),A=a(),{t:w}=i(),D=o((()=>A.getRoleList.includes(f.ADMIN))),N=o((()=>A.getRoleList.includes(f.USER)));function R(e){return t=this,s=null,a=function*(){const t=`${e}FakeToken`;A.setToken(t),yield A.getUserInfoAction(),yield M.changePermissionCode()},new Promise(((e,i)=>{var o=e=>{try{r(a.next(e))}catch(t){i(t)}},l=e=>{try{r(a.throw(e))}catch(t){i(t)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,l);r((a=a.apply(t,s)).next())}));var t,s,a}return(e,t)=>{const s=d,a=B,i=h,o=b,A=P,S=u("auth");return p(),l(s,{title:n(w)("page.permission.pageTitles.button")},{default:r((()=>[c(v),c(s,{class:"my-4",title:n(w)("page.permission.currentCode"),embedded:"",bordered:!1},{default:r((()=>[m(y(n(M).getPermissionCodes),1)])),_:1},8,["title"]),c(a),c(i,{class:"mt-4",type:"info",title:n(w)("page.permission.backendLeftMenuChangeTitle"),"show-icon":""},null,8,["title"]),c(a),c(s,{class:"mt-4",title:n(w)("page.permission.backendPermissionSwitchTitle"),embedded:"",bordered:!1},{default:r((()=>[c(A,null,{default:r((()=>[c(o,{type:n(D)?"primary":"default",disabled:!n(C),onClick:t[0]||(t[0]=e=>R(n(f).ADMIN))},{default:r((()=>[m(y(n(f).ADMIN),1)])),_:1},8,["type","disabled"]),c(o,{type:n(N)?"primary":"default",disabled:!n(C),onClick:t[1]||(t[1]=e=>R(n(f).USER))},{default:r((()=>[m(y(n(f).USER),1)])),_:1},8,["type","disabled"])])),_:1})])),_:1},8,["title"]),n(C)?(p(),g(T,{key:0},[c(a,null,{default:r((()=>[m(y(n(w)("page.permission.componentWayTitle")),1)])),_:1}),c(k,{value:"1000"},{default:r((()=>[c(o,{type:"primary",class:"mx-4"},{default:r((()=>[m(y(n(w)("page.permission.codeButtonText",{code:"1000"})),1)])),_:1})])),_:1}),c(k,{value:"2000"},{default:r((()=>[c(o,{type:"success",class:"mx-4"},{default:r((()=>[m(y(n(w)("page.permission.codeButtonText",{code:"2000"})),1)])),_:1})])),_:1}),c(k,{value:["1000","2000"]},{default:r((()=>[c(o,{type:"error",class:"mx-4"},{default:r((()=>[m(y(n(w)("page.permission.codeButtonText",{code:["1000","2000"]})),1)])),_:1})])),_:1}),c(a,null,{default:r((()=>[m(y(n(w)("page.permission.functionWayTitle")),1)])),_:1}),n(j)("1000")?(p(),l(o,{key:0,type:"primary",class:"mx-4"},{default:r((()=>[m(y(n(w)("page.permission.codeButtonText",{code:"1000"})),1)])),_:1})):_("",!0),n(j)("2000")?(p(),l(o,{key:1,type:"success",class:"mx-4"},{default:r((()=>[m(y(n(w)("page.permission.codeButtonText",{code:"2000"})),1)])),_:1})):_("",!0),n(j)(["1000","2000"])?(p(),l(o,{key:2,type:"error",class:"mx-4"},{default:r((()=>[m(y(n(w)("page.permission.codeButtonText",{code:["1000","2000"]})),1)])),_:1})):_("",!0),c(a,null,{default:r((()=>[m(y(n(w)("page.permission.directiveWayTitle")),1)])),_:1}),x((p(),l(o,{type:"primary",class:"mx-4"},{default:r((()=>[m(y(n(w)("page.permission.codeButtonText",{code:"1000"})),1)])),_:1})),[[S,"1000"]]),x((p(),l(o,{type:"success",class:"mx-4"},{default:r((()=>[m(y(n(w)("page.permission.codeButtonText",{code:"2000"})),1)])),_:1})),[[S,"2000"]]),x((p(),l(o,{type:"error",class:"mx-4"},{default:r((()=>[m(y(n(w)("page.permission.codeButtonText",{code:["1000","2000"]})),1)])),_:1})),[[S,["1000","2000"]]])],64)):_("",!0)])),_:1},8,["title"])}}});export{j as default};