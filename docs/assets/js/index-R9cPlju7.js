import{R as e,aj as t,aK as s,a7 as a,af as i}from"./celerisComponents-ewU1RD0C.js";import{d as n,c as o,N as l,a2 as r,u as d,R as u,Q as c,f as p,a6 as m}from"./vue-DfkJQHDQ.js";import{_ as f}from"./CurrentPermissionMode.vuevuetypescriptsetuptruelang-BCPtdFQi.js";import{a as y,e as g,u as h}from"./index-B2pV6Gep.js";const k=n({__name:"index",setup(n){const k=y(),{isBackendPermissionMode:b,refreshMenu:v}=g(),{t:_}=h();function M(e){return t=this,s=null,a=function*(){const t=`${e}FakeToken`;k.setToken(t),yield k.getUserInfoAction(),yield v()},new Promise(((e,i)=>{var n=e=>{try{l(a.next(e))}catch(t){i(t)}},o=e=>{try{l(a.throw(e))}catch(t){i(t)}},l=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,o);l((a=a.apply(t,s)).next())}));var t,s,a}const R=o((()=>k.getRoleList.includes(e.ADMIN))),j=o((()=>k.getRoleList.includes(e.USER)));return(n,o)=>{const y=s,g=a,h=i,k=t;return u(),l(k,{title:d(_)("page.permission.pageTitles.backend")},{default:r((()=>[c(f),c(y,{class:"my-4",type:"info",title:d(_)("page.permission.clickToSeeLeftMenuChange"),"show-icon":""},null,8,["title"]),c(k,{class:"mt-4",title:d(_)("page.permission.backendPermissionSwitchTitle"),embedded:"",bordered:!1},{default:r((()=>[c(h,null,{default:r((()=>[c(g,{type:d(R)?"primary":"default",disabled:!d(b),onClick:o[0]||(o[0]=t=>M(d(e).ADMIN))},{default:r((()=>[p(m(d(e).ADMIN),1)])),_:1},8,["type","disabled"]),c(g,{type:d(j)?"primary":"default",disabled:!d(b),onClick:o[1]||(o[1]=t=>M(d(e).USER))},{default:r((()=>[p(m(d(e).USER),1)])),_:1},8,["type","disabled"])])),_:1})])),_:1},8,["title"])])),_:1},8,["title"])}}});export{k as default};