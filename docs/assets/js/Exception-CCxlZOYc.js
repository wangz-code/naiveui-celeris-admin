import{aU as s,k as t,P as a,a7 as e,af as r,aP as o}from"./celerisComponents-ewU1RD0C.js";import{d as i,ae as u,r as n,o as c,R as p,N as l,a2 as f,Q as d,u as m,f as _}from"./vue-DfkJQHDQ.js";const k=i({__name:"Exception",props:{status:{default:s.NotFound},title:{},description:{}},setup(s){const i=s,k=u(),v=n(""),y=n("error");return c((()=>{try{y.value=(s=i.status)>=500||s>=400?"error":s>=300?"warning":s>=200?"success":"info",i.status}catch(a){v.value=`${i.status} ${t(a)}`}var s})),(s,t)=>{const i=e,u=r,n=o;return p(),l(n,{class:"p-4",status:m(y),title:m(v),description:s.description,size:"large"},{footer:f((()=>[d(u,{justify:"center"},{default:f((()=>[d(i,{type:"primary",onClick:t[0]||(t[0]=s=>m(k).push(m(a).BASE_HOME))},{default:f((()=>t[2]||(t[2]=[_(" 返回主页 ")]))),_:1}),d(i,{onClick:t[1]||(t[1]=s=>m(k).back())},{default:f((()=>t[3]||(t[3]=[_(" 返回上一级 ")]))),_:1})])),_:1})])),_:1},8,["status","title","description"])}}});export{k as default};
