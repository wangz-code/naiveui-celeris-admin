import{P as e}from"./PageWrapper-DDMB-YUZ.js";import{a2 as a,ap as l,a4 as t,a5 as n,aq as s,ad as o,ar as u,as as r,a7 as d,ag as p,ae as i,aj as c,at as f,au as h,a8 as m,av as v,ai as g}from"./celerisComponents-CKh4uVVv.js";import{t as y,C as _,S as b,a as k,b as w,g as S,_ as j,c as x,d as U,A as C,e as R,T as z}from"./numberUtils-CvbUlCAD.js";import{R as P}from"./Refresh-CfrpWhJN.js";import{d as V,r as L,m as D,R as q,N as A,a2 as F,Q as B,u as E,S as G,F as I,a7 as N,f as Q,h as T}from"./vue-B5H4WroO.js";import{u as W}from"./index-20Qch8L1.js";import"./plugin-vueexport-helper-BCo6x5W8.js";const $=()=>[{type:"selection"},{title:"单据日期",key:"billdate"},{title:"姓名",key:"name"},{title:"联系电话",key:"phone"},{title:"销售金额",key:"sales",align:"right",render:y("sales")},{title:"收款金额",key:"payment",align:"right",render:y("payment")},{title:"地址",key:"address"},{title:"单据状态",key:"state"}],H=V({__name:"index",setup(y){W();const V=a(),H=L(null),J=L(!0),K=L({user:{name:"",age:""},where:"",phone:"",select:"",saleValue:"",stateValue:"",dateRange:[Date.now(),Date.now()]});L();const M=[{label:"批量发起",key:"submit",icon:l(x)},{label:"批量审核",key:"audit",icon:l(U)},{label:"批量驳回",key:"reject",icon:l(C)},{label:"批量反审",key:"reAudit",icon:l(R)},{label:"批量删除",key:"delete",icon:l(z)}],O=["","全部收款","部分收款","未收款"].map((e=>({label:e||"全部",value:e}))),X=["","起草","待审","通过"].map((e=>({label:e||"全部",value:e}))),Y=e=>{V.success(e)},Z=e=>{var a;e.preventDefault(),null==(a=H.value)||a.validate((e=>{e?(console.log(e),V.error("Invalid")):ee()}))},ee=()=>{return e=this,a=null,l=function*(){try{le.isLoading=!0;const{data:e}=yield S();"success"==e.status&&(le.source=e.data)}catch(e){}finally{le.isLoading=!1}},new Promise(((t,n)=>{var s=e=>{try{u(l.next(e))}catch(a){n(a)}},o=e=>{try{u(l.throw(e))}catch(a){n(a)}},u=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,o);u((l=l.apply(e,a)).next())}));var e,a,l},ae=D({page:1,pageSize:10,showSizePicker:!0,pageSizes:[10,20,100],prefix:({itemCount:e})=>`${e}条记录`,onChange:e=>{ae.page=e},onUpdatePageSize:e=>{ae.pageSize=e,ae.page=1}}),le=D({source:[],isLoading:!1,summary:e=>({name:{value:T("span",{style:{color:"red"}},e.reduce(((e,a)=>e),0)),colSpan:3}})});return ee(),(a,l)=>{const y=t,S=n,x=s,U=o,C=u,R=r,z=j,V=d,L=p,D=i,T=c,W=f,ee=h,te=m,ne=v,se=g,oe=e;return q(),A(oe,{"use-scrollbar":""},{default:F((()=>[B(se,null,{default:F((()=>[B(te,{ref_key:"formRef",ref:H,"label-placement":"left","label-width":"auto",model:E(K)},{default:F((()=>[B(R,{"x-gap":8,"y-gap":15,cols:"2 s:3 m:4 l:5 xl:6",responsive:"screen"},{default:F((()=>[B(x,null,{default:F((()=>[B(S,{label:"模糊查询",path:"where","show-feedback":!1},{default:F((()=>[B(y,{value:E(K).where,"onUpdate:value":l[0]||(l[0]=e=>E(K).where=e),placeholder:"输入关键字"},null,8,["value"])])),_:1})])),_:1}),B(x,null,{default:F((()=>[B(S,{label:"姓名",path:"user.name","show-feedback":!1,rule:[{required:!0,message:"姓名必填"}]},{default:F((()=>[B(y,{value:E(K).user.name,"onUpdate:value":l[1]||(l[1]=e=>E(K).user.name=e),placeholder:"输入姓名"},null,8,["value"])])),_:1})])),_:1}),B(x,{span:2},{default:F((()=>[B(S,{label:"单据日期","show-feedback":!1,path:"phone"},{default:F((()=>[B(U,{value:E(K).dateRange,"onUpdate:value":l[2]||(l[2]=e=>E(K).dateRange=e),type:"daterange",clearable:""},null,8,["value"])])),_:1})])),_:1}),B(x,null,{default:F((()=>[B(S,{label:"收款状态","show-feedback":!1,path:"phone"},{default:F((()=>[B(C,{value:E(K).saleValue,"onUpdate:value":l[3]||(l[3]=e=>E(K).saleValue=e),placeholder:"Select",options:E(O)},null,8,["value","options"])])),_:1})])),_:1}),B(x,null,{default:F((()=>[B(S,{label:"单据状态","show-feedback":!1,path:"user.name"},{default:F((()=>[B(C,{value:E(K).stateValue,"onUpdate:value":l[4]||(l[4]=e=>E(K).stateValue=e),placeholder:"Select",options:E(X)},null,8,["value","options"])])),_:1})])),_:1}),E(J)?(q(),G(I,{key:0},[B(x,null,{default:F((()=>[B(S,{label:"电话号码",path:"phone","show-feedback":!1},{default:F((()=>[B(y,{value:E(K).phone,"onUpdate:value":l[5]||(l[5]=e=>E(K).phone=e),placeholder:"电话号码"},null,8,["value"])])),_:1})])),_:1}),B(x,null,{default:F((()=>[B(S,{label:"电话号码",path:"phone","show-feedback":!1},{default:F((()=>[B(y,{value:E(K).phone,"onUpdate:value":l[6]||(l[6]=e=>E(K).phone=e),placeholder:"电话号码"},null,8,["value"])])),_:1})])),_:1}),B(x,null,{default:F((()=>[B(S,{label:"电话号码",path:"phone","show-feedback":!1},{default:F((()=>[B(y,{value:E(K).phone,"onUpdate:value":l[7]||(l[7]=e=>E(K).phone=e),placeholder:"电话号码"},null,8,["value"])])),_:1})])),_:1})],64)):N("",!0)])),_:1}),B(ee,{class:"m-t-sm m-b-sm",justify:"space-between"},{default:F((()=>[B(D,null,{default:F((()=>[B(z,{type:"primary",icon:E(_)},{default:F((()=>[Q("新增")])),_:1},8,["icon"]),B(V,{strong:"",secondary:""},{default:F((()=>[Q("下载模板")])),_:1}),B(V,{strong:"",secondary:""},{default:F((()=>[Q("批量导入")])),_:1}),B(V,{strong:"",secondary:""},{default:F((()=>[Q("导出Excel")])),_:1}),B(V,{strong:"",secondary:""},{default:F((()=>[Q("打印")])),_:1}),B(L,{trigger:"hover",options:M,onSelect:Y},{default:F((()=>[B(V,null,{default:F((()=>[Q("更多...")])),_:1})])),_:1})])),_:1}),B(D,null,{default:F((()=>[B(W,null,{default:F((()=>[B(z,{"attr-type":"button",title:"查询",onClick:Z,type:"info",icon:E(b)},null,8,["icon"]),B(z,{"attr-type":"reset",title:"重置",icon:E(P)},null,8,["icon"]),B(V,{"attr-type":"button",onClick:l[8]||(l[8]=e=>J.value=!E(J))},{icon:F((()=>[B(T,{component:E(J)?E(k):E(w),size:16},null,8,["component"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model"]),B(ne,{columns:E($)(),data:E(le).source,pagination:E(ae),loading:E(le).isLoading},null,8,["columns","data","pagination","loading"])])),_:1})])),_:1})}}});export{H as default};
