import{R as e,ai as t,aF as s,a7 as a,ae as o,a9 as l}from"./celerisComponents-DAbnjG2T.js";import{_ as r}from"./CurrentPermissionMode.vuevuetypescriptsetuptruelang-SOQnCjf1.js";import{_ as i}from"./Authority.vuevuetypescriptsetuptruelang-xdFVpKia.js";import{e as n,u,a as p}from"./index-wedWAzdG.js";import{d as m,c as d,N as c,a2 as f,u as y,ae as g,R as _,Q as R,f as x,a6 as S,a7 as A,q as D}from"./vue-B5H4WroO.js";const M=m({__name:"ButtonPermission",setup(m){const{changeRole:M,hasPermission:N}=n(),{t:E}=u(),I=p(),T=d((()=>I.getRoleList.includes(e.ADMIN))),U=d((()=>I.getRoleList.includes(e.USER)));return(n,u)=>{const p=t,m=s,d=a,v=o,B=l,h=g("auth");return _(),c(p,{title:y(E)("page.permission.pageTitles.button")},{default:f((()=>[R(r),R(p,{class:"my-4",title:y(E)("page.permission.currentRole"),embedded:"",bordered:!1},{default:f((()=>[x(S(y(I).getRoleList),1)])),_:1},8,["title"]),R(m,{class:"my-4",type:"info",title:y(E)("page.permission.clickToSeeButtonChange"),"show-icon":""},null,8,["title"]),R(p,{class:"mt-4",title:y(E)("page.permission.frontendPermissionSwitchTitle"),embedded:"",bordered:!1},{default:f((()=>[R(v,null,{default:f((()=>[R(d,{type:y(T)?"primary":"default",onClick:u[0]||(u[0]=t=>y(M)(y(e).ADMIN))},{default:f((()=>[x(S(y(e).ADMIN),1)])),_:1},8,["type"]),R(d,{type:y(U)?"primary":"default",onClick:u[1]||(u[1]=t=>y(M)(y(e).USER))},{default:f((()=>[x(S(y(e).USER),1)])),_:1},8,["type"])])),_:1})])),_:1},8,["title"]),R(B,null,{default:f((()=>[x(S(y(E)("page.permission.componentWayTitle")),1)])),_:1}),R(i,{value:y(e).ADMIN},{default:f((()=>[R(d,{type:"primary",class:"mx-4"},{default:f((()=>[x(S(y(E)("page.permission.roleButtonText",{role:y(e).ADMIN})),1)])),_:1})])),_:1},8,["value"]),R(i,{value:y(e).USER},{default:f((()=>[R(d,{strong:"",secondary:"",type:"info",class:"mx-4"},{default:f((()=>[x(S(y(E)("page.permission.roleButtonText",{role:y(e).USER})),1)])),_:1})])),_:1},8,["value"]),R(i,{value:[y(e).USER,y(e).ADMIN]},{default:f((()=>[R(d,{strong:"",secondary:"",type:"success",class:"mx-4"},{default:f((()=>[x(S(y(E)("page.permission.roleButtonText",{role:[y(e).USER,y(e).ADMIN]})),1)])),_:1})])),_:1},8,["value"]),R(B,null,{default:f((()=>[x(S(y(E)("page.permission.functionWayTitle")),1)])),_:1}),y(N)(y(e).ADMIN)?(_(),c(d,{key:0,type:"primary",class:"mx-4"},{default:f((()=>[x(S(y(E)("page.permission.roleButtonText",{role:y(e).ADMIN})),1)])),_:1})):A("",!0),y(N)(y(e).USER)?(_(),c(d,{key:1,strong:"",secondary:"",type:"info",class:"mx-4"},{default:f((()=>[x(S(y(E)("page.permission.roleButtonText",{role:y(e).USER})),1)])),_:1})):A("",!0),y(N)([y(e).USER,y(e).ADMIN])?(_(),c(d,{key:2,strong:"",secondary:"",type:"success",class:"mx-4"},{default:f((()=>[x(S(y(E)("page.permission.roleButtonText",{role:[y(e).USER,y(e).ADMIN]})),1)])),_:1})):A("",!0),R(B,null,{default:f((()=>[x(S(y(E)("page.permission.directiveWayTitle")),1)])),_:1}),D((_(),c(d,{type:"primary",class:"mx-4"},{default:f((()=>[x(S(y(E)("page.permission.roleButtonText",{role:y(e).ADMIN})),1)])),_:1})),[[h,y(e).ADMIN]]),D((_(),c(d,{strong:"",secondary:"",type:"info",class:"mx-4"},{default:f((()=>[x(S(y(E)("page.permission.roleButtonText",{role:y(e).USER})),1)])),_:1})),[[h,y(e).USER]]),D((_(),c(d,{strong:"",secondary:"",type:"success",class:"mx-4"},{default:f((()=>[x(S(y(E)("page.permission.roleButtonText",{role:[y(e).USER,y(e).ADMIN]})),1)])),_:1})),[[h,[y(e).USER,y(e).ADMIN]]])])),_:1},8,["title"])}}});export{M as default};