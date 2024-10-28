var e=Object.defineProperty,s=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,p=(s,t,l)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[t]=l;import{F as o,u as d,c as n,g as u}from"./index-C3b0E-Jp.js";import{al as i,am as c,an as P,ai as b}from"./celerisComponents-DQ3ZWFAX.js";import{d as m,R as y,N as T,a2 as g,U as h,S as f,F as x,aa as C,Q as R,u as I,a7 as j}from"./vue-BtXWP-ej.js";import{P as G}from"./PageWrapper-C9yVgwws.js";import{u as v}from"./index-DpkC-lz3.js";import"./plugin-vueexport-helper-BCo6x5W8.js";const w=["colspan"],O={key:0},_=["colspan"],k=P(m({__name:"AppTable",props:{table:{}},setup:e=>(e,s)=>{const t=i,l=c;return y(),T(l,{bordered:!0,"single-line":!1,striped:""},{default:g((()=>[h("thead",null,[(y(!0),f(x,null,C(e.table.getHeaderGroups(),(e=>(y(),f("tr",{key:e.id},[(y(!0),f(x,null,C(e.headers,(e=>(y(),f("th",{key:e.id,colspan:e.colSpan,class:"font-bold!",scope:"col"},[R(I(o),{render:e.column.columnDef.header,props:e.getContext()},null,8,["render","props"])],8,w)))),128))])))),128))]),h("tbody",null,[(y(!0),f(x,null,C(e.table.getRowModel().rows,(e=>(y(),f("tr",{key:e.id},[(y(!0),f(x,null,C(e.getVisibleCells(),(e=>(y(),f("td",{key:e.id},[h("div",null,[h("div",null,[R(I(o),{render:e.column.columnDef.cell,props:e.getContext()},null,8,["render","props"])])])])))),128))])))),128)),0===e.table.getRowModel().rows.length?(y(),f("tr",O,[h("td",{colspan:e.table.getAllColumns().length},[R(t)],8,_)])):j("",!0)])])),_:1})}})),V=[{id:1,userInput:"你好，能告诉我今天的天气吗？",expectedReply:"ChatGPT生成适当的天气预报回复",isTestPassed:!0},{id:2,userInput:"请为我讲一个幽默笑话。",expectedReply:"ChatGPT生成幽默笑话回复",isTestPassed:!0},{id:3,userInput:'翻译 "hello" 成法语。',expectedReply:"ChatGPT生成合理的法语翻译",isTestPassed:!0},{id:4,userInput:"帮我制定一个减肥计划。",expectedReply:"ChatGPT生成关于减肥计划的建议",isTestPassed:!0},{id:5,userInput:"解释一下人工智能的概念。",expectedReply:"ChatGPT生成关于人工智能的解释",isTestPassed:!0},{id:6,userInput:"给我推荐一本好看的小说。",expectedReply:"ChatGPT生成推荐的小说书目",isTestPassed:!0},{id:7,userInput:"为什么天空是蓝色的？",expectedReply:"ChatGPT生成关于天空颜色的科学解释",isTestPassed:!0},{id:8,userInput:"如何备份我的电脑文件？",expectedReply:"ChatGPT生成关于备份方法的建议",isTestPassed:!0},{id:9,userInput:"告诉我一些做饭的窍门。",expectedReply:"ChatGPT生成烹饪技巧和建议",isTestPassed:!0},{id:10,userInput:"你有兴趣爱好吗？",expectedReply:"ChatGPT生成关于自己兴趣的回复",isTestPassed:!1}],A=m((D=((e,s)=>{for(var t in s||(s={}))a.call(s,t)&&p(e,t,s[t]);if(l)for(var t of l(s))r.call(s,t)&&p(e,t,s[t]);return e})({},{name:"HeadlessTableBasic"}),s(D,t({__name:"index",setup(e){const{t:s}=v(),t=n(),l=[t.accessor((e=>e.userInput),{id:"userInput",cell:e=>e.getValue(),header:()=>" 用户输入",footer:e=>e.column.id}),t.accessor((e=>e.expectedReply),{id:"expectedReply",cell:e=>e.getValue(),header:()=>"预期回复",footer:e=>e.column.id}),t.accessor((e=>e.isTestPassed),{id:"isTestPassed",cell:e=>!0===e.getValue()?"✅":"❌",header:()=>"是否通过测试",footer:e=>e.column.id})],a=[];for(let p=0;p<10;p++)a.push(V[0]);const r=d({get data(){return a},debugAll:!0,columns:l,getCoreRowModel:u()});return(e,t)=>{const l=b;return y(),T(G,{"use-scrollbar":""},{default:g((()=>[R(l,{title:I(s)("page.headlessTable.pageTitles.basic")},{default:g((()=>[R(I(k),{table:I(r)},null,8,["table"])])),_:1},8,["title"])])),_:1})}}}))));var D;export{A as default};
