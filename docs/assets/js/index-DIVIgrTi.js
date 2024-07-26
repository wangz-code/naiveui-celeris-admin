var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,u=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t;import{P as o}from"./PageWrapper-C80anrSY.js";import{a2 as s,ab as i,ac as d,a4 as p,a5 as m,ad as f,a7 as c,a8 as v,ae as h,af as _,ag as y,ah as b,ai as g,aj as w,ak as k}from"./celerisComponents-CKh4uVVv.js";import{S as z,b as V,F as x}from"./index-usk6nlY7.js";import{d as C,R as j,S as O,U,r as P,Q as B,a2 as D,f as F,F as S,N as E,u as I,a6 as R,aa as q,h as M}from"./vue-B5H4WroO.js";import{_ as T}from"./plugin-vueexport-helper-BCo6x5W8.js";import{C as W}from"./ChevronForwardCircleOutline-DcIcDVvL.js";const A={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},L=[U("path",{d:"M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),U("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M338.29 338.29L448 448"},null,-1)],N=C({name:"SearchOutline",render:function(e,l){return j(),O("svg",A,L)}}),Q=C({setup(){const e=P(null),l=s();return{formRef:e,size:P("medium"),formValue:P({user:{name:"",age:""},timestamp:(new Date).getTime(),phone:""}),rules:{user:{name:{required:!0,message:"请输入姓名",trigger:"blur"},age:{required:!0,message:"请输入年龄",trigger:["input","blur"]}},phone:{required:!0,message:"请输入电话号码",trigger:["input"]}},handleValidateClick(a){var t;a.preventDefault(),null==(t=e.value)||t.validate((e=>{e?(console.log(e),l.error("Invalid")):l.success("Valid")}))}}}}),G={style:{width:"50%"}},H=U("pre",null,null,-1);const J=T(Q,[["render",function(e,l,a,t,n,r){const u=i,o=d,s=p,_=m,y=f,b=c,g=v,w=h;return j(),O(S,null,[B(o,{value:e.size,"onUpdate:value":l[0]||(l[0]=l=>e.size=l),name:"left-size",style:{"margin-bottom":"12px"}},{default:D((()=>[B(u,{value:"small"},{default:D((()=>[F(" 小 ")])),_:1}),B(u,{value:"medium"},{default:D((()=>[F(" 中 ")])),_:1}),B(u,{value:"large"},{default:D((()=>[F(" 大 ")])),_:1})])),_:1},8,["value"]),B(g,{ref:"formRef",inline:"","label-width":80,model:e.formValue,rules:e.rules,size:e.size},{default:D((()=>[B(_,{label:"姓名",path:"user.name"},{default:D((()=>[B(s,{value:e.formValue.user.name,"onUpdate:value":l[1]||(l[1]=l=>e.formValue.user.name=l),placeholder:"输入姓名"},null,8,["value"])])),_:1}),B(_,{label:"年龄",path:"user.age"},{default:D((()=>[B(s,{value:e.formValue.user.age,"onUpdate:value":l[2]||(l[2]=l=>e.formValue.user.age=l),placeholder:"输入年龄"},null,8,["value"])])),_:1}),B(_,{label:"电话号码",path:"phone"},{default:D((()=>[B(s,{value:e.formValue.phone,"onUpdate:value":l[3]||(l[3]=l=>e.formValue.phone=l),placeholder:"电话号码"},null,8,["value"])])),_:1}),B(_,{label:"日期时间"},{default:D((()=>[B(y,{value:e.formValue.timestamp,"onUpdate:value":l[4]||(l[4]=l=>e.formValue.timestamp=l),type:"date"},null,8,["value"])])),_:1}),B(_,null,{default:D((()=>[B(b,{"attr-type":"button",onClick:e.handleValidateClick},{default:D((()=>[F(" 验证 ")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules","size"]),U("div",G,[B(g,{ref:"formRef2","label-width":80,model:e.formValue,rules:e.rules,size:e.size},{default:D((()=>[B(_,{label:"姓名",path:"user.name"},{default:D((()=>[B(s,{value:e.formValue.user.name,"onUpdate:value":l[5]||(l[5]=l=>e.formValue.user.name=l),placeholder:"输入姓名"},null,8,["value"])])),_:1}),B(_,{label:"姓名",path:"user.name"},{default:D((()=>[B(s,{value:e.formValue.user.name,"onUpdate:value":l[6]||(l[6]=l=>e.formValue.user.name=l),placeholder:"输入姓名"},null,8,["value"])])),_:1}),B(_,{label:"年龄",path:"user.age"},{default:D((()=>[B(s,{value:e.formValue.user.age,"onUpdate:value":l[7]||(l[7]=l=>e.formValue.user.age=l),placeholder:"输入年龄"},null,8,["value"])])),_:1}),B(_,{label:"电话号码",path:"phone"},{default:D((()=>[B(s,{value:e.formValue.phone,"onUpdate:value":l[8]||(l[8]=l=>e.formValue.phone=l),placeholder:"电话号码"},null,8,["value"])])),_:1}),B(_,null,{default:D((()=>[B(w,null,{default:D((()=>[B(b,{"attr-type":"button",onClick:e.handleValidateClick},{default:D((()=>[F(" 验证 ")])),_:1},8,["onClick"]),B(b,null,{default:D((()=>[F("Default")])),_:1}),B(b,{type:"tertiary"},{default:D((()=>[F(" Tertiary ")])),_:1}),B(b,{type:"primary"},{default:D((()=>[F(" Primary ")])),_:1}),B(b,{type:"info"},{default:D((()=>[F(" Info ")])),_:1}),B(b,{type:"success"},{default:D((()=>[F(" Success ")])),_:1}),B(b,{type:"warning"},{default:D((()=>[F(" Warning ")])),_:1}),B(b,{type:"error"},{default:D((()=>[F(" Error ")])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules","size"])]),H],64)}]]),K=C({setup(){const e=s();return{handleBack(){e.info("[onBack]")},options:[{label:"催更",key:"1"},{label:"催更",key:"2"},{label:"催更",key:"3"}]}}}),X=U("a",{href:"https://anyway.fm/",style:{"text-decoration":"none",color:"inherit"}},"Anyway.FM",-1);const Y=T(K,[["render",function(e,l,a,t,n,r){const u=_,o=c,s=y,i=h,d=b;return j(),E(d,{subtitle:"表单详情",onBack:e.handleBack},{title:D((()=>[X])),header:D((()=>[])),avatar:D((()=>[B(u,{src:"https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"})])),extra:D((()=>[B(i,null,{default:D((()=>[B(o,null,{default:D((()=>[F("催更")])),_:1}),B(s,{options:e.options,placement:"bottom-start"},{default:D((()=>[B(o,{bordered:!1,style:{padding:"0 4px"}},{default:D((()=>[F(" ··· ")])),_:1})])),_:1},8,["options"])])),_:1})])),footer:D((()=>[F(" 截止到 2021 年 4 月 3 日 ")])),_:1},8,["onBack"])}]]),Z=U("div",null,null,-1),$=C((ee=((e,l)=>{for(var a in l||(l={}))n.call(l,a)&&u(e,a,l[a]);if(t)for(var a of t(l))r.call(l,a)&&u(e,a,l[a]);return e})({},{name:"Chat"}),l(ee,a({__name:"index",setup(e){const l=P(!1);P(!1);const a=C((e=>()=>M("b","组件Foo"))),t=C((e=>()=>M("b","组件Bar")));return(e,n)=>{const r=g,u=w,s=c,i=h,d=k,p=o;return j(),E(p,{"use-scrollbar":""},{default:D((()=>[B(r,{title:"卡片"},{default:D((()=>[F(" 卡片内容 ")])),_:1}),B(r,{title:"按钮组",class:"mt-5"},{default:D((()=>[B(u,{size:"30",component:I(z)},null,8,["component"]),B(u,{size:"60",component:I(V)},null,8,["component"]),B(u,{size:"60",component:I(N)},null,8,["component"]),B(i,null,{default:D((()=>[B(s,null,{default:D((()=>[F("Default")])),_:1}),B(s,{type:"tertiary"},{default:D((()=>[F(" Tertiary ")])),_:1}),B(s,{type:"primary"},{default:D((()=>[F(" Primary ")])),_:1}),B(s,{type:"info"},{default:D((()=>[F(" Info ")])),_:1}),B(s,{type:"success"},{default:D((()=>[F(" Success ")])),_:1}),B(s,{type:"warning"},{default:D((()=>[F(" Warning ")])),_:1}),B(s,{type:"error"},{default:D((()=>[F(" Error ")])),_:1})])),_:1}),F(" 卡片内容 ")])),_:1}),B(r,{title:"测试动态组件",class:"mt-5"},{default:D((()=>[B(u,{size:"30",component:I(z)},null,8,["component"]),B(u,{size:"60",component:I(V)},null,8,["component"]),B(u,{size:"60",component:I(N)},null,8,["component"]),B(i,null,{default:D((()=>[B(s,{onClick:n[0]||(n[0]=e=>l.value=!0)},{default:D((()=>[F("默认")])),_:1}),B(s,{onClick:n[1]||(n[1]=e=>l.value=!1)},{default:D((()=>[F(" 更换图标 ")])),_:1}),B(u,{size:"60",component:I(l)?I(W):I(x)},null,8,["component"])])),_:1}),F(" "+R(I(l)?I(a):I(t))+" ",1),U("div",null,[U("div",null,[(j(),E(q(I(l)?I(t):I(a))))]),U("div",null,[B(u,{style:{width:"200px"},color:"#165dff",size:"60",component:I(l)?I(t):I(a)},null,8,["component"])]),U("div",null,[B(d,{style:{width:"200px"},color:"red",size:"30",component:I(l)?I(t):I(a)},null,8,["component"])]),U("div",null,[B(u,{style:{width:"200px"},color:"#165dff",size:"60",component:I(l)?I(t):I(a)},null,8,["component"])]),U("div",null,[B(d,{style:{width:"200px"},color:"red",size:"30",component:I(l)?I(t):I(a)},null,8,["component"])])]),U("div",null,[B(I(a))]),U("div",null,[B(I(t))]),Z])),_:1}),B(r,{class:"mt-10 mb-10"},{default:D((()=>[B(Y),B(J)])),_:1})])),_:1})}}}))));var ee;export{$ as default};
