import{d as s,R as a,S as e,U as t,Q as l,a7 as i,a2 as r,f as n,a8 as o}from"./vue-On1Nx3Ly.js";import{a6 as d,a7 as p}from"./celerisComponents-DoMVLPED.js";const c={class:"w-full rounded-2xl flex mx-2 px-2 py-1"},f={class:"overflow-hidden flex flex-col grow gap-1 p-1"},u={class:"overflow-hidden flex justify-between items-center"},x=s({__name:"AssistantItem",props:{assistant:{type:Object,required:!0}},setup:s=>(x,m)=>{const v=d,w=p;return a(),e("div",c,[t("div",{class:i(["relative rounded-full flex items-center pr-2",{available:s.assistant.available}])},[l(v,{round:"",src:s.assistant.avatar,size:"large"},null,8,["src"])],2),t("div",f,[t("div",u,[l(w,{class:"name whitespace-nowrap text-ellipsis grow font-bold"},{default:r((()=>[n(o(s.assistant.name),1)])),_:1}),l(w,{class:"date text-ellipsis"},{default:r((()=>[n(o(s.assistant.lastDateText),1)])),_:1})]),l(w,{class:"description text-ellipsis"},{default:r((()=>[n(o(s.assistant.description),1)])),_:1})])])}});export{x as _};
