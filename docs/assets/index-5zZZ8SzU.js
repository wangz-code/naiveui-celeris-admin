import{_ as e}from"./plugin-vueexport-helper-BCo6x5W8.js";import{d as t,a,r as o,a2 as n,o as l,c as r,w as i,b as u,L as s}from"./index-BT0ZcDkn.js";import{_ as p}from"./DataTable-CDcTRuJS.js";import"./Checkbox-Kaq6uefv.js";import"./use-merged-state-D7wGS6Km.js";import"./RadioGroup-BozaTzAB.js";import"./get-slot-BjAOOWF7.js";import"./Popover-3mPJ01hC.js";import"./use-compitable-CHcH6xDN.js";import"./next-frame-once-DiJwGkuW.js";import"./Input-D2qMgPO1.js";import"./use-locale-CbMPSc0o.js";import"./Dropdown-BMB08iEg.js";import"./create-Bylz8BGN.js";import"./FocusDetector-C7V71fRC.js";import"./Tooltip-BFoQMn72.js";import"./Empty-C_CzYco1.js";import"./Pagination-YSg8zdta.js";import"./Select-D_I2Mr2d.js";import"./Tag-D4OMG_5z.js";import"./index-LLZlmyqL.js";import"./Checkmark-DuWLWy-v.js";import"./Forward-xWz6l688.js";const m={title:"column1",key:"column1",sorter:!0,sortOrder:!1},d={title:"column2",key:"column2",filter:!0,filterOptionValues:[],filterOptions:[{label:"Value1",value:1},{label:"Value2",value:2}]},g=[m,d,{title:"Column3",key:"column3"}],c=Array(987).fill(null).map(((e,t)=>({column1:t,column2:t%2+1,column3:`a${t}`})));function C(e,t=10,a="ascend",o=[]){return new Promise((n=>{const l=c.map((e=>e)),r="descend"===a?l.reverse():l,i=o.length?r.filter((e=>o.includes(e.column2))):r,u=i.slice((e-1)*t,e*t),s=i.length,p=Math.ceil(i.length/t);setTimeout((()=>n({pageCount:p,data:u,total:s})),1500)}))}const h=e(t({setup(){const e=a([]),t=a(!0),l=a(g),r=o(m),i=o(d),u=o({page:1,pageCount:1,pageSize:10,prefix:({itemCount:e})=>`Total is ${e}.`});return n((()=>{C(u.page,u.pageSize,r.sortOrder,i.filterOptionValues).then((a=>{e.value=a.data,u.pageCount=a.pageCount,u.itemCount=a.total,t.value=!1}))})),{data:e,columns:l,column1:r,column2:i,pagination:u,loading:t,rowKey:e=>e.column1,handleSorterChange(a){a&&"column1"!==a.columnKey||t.value||(t.value=!0,C(u.page,u.pageSize,!!a&&a.order,i.filterOptionValues).then((o=>{r.sortOrder=!!a&&a.order,e.value=o.data,u.pageCount=o.pageCount,u.itemCount=o.total,t.value=!1})))},handleFiltersChange(a){if(!t.value){t.value=!0;const o=a.column2||[];C(u.page,u.pageSize,r.sortOrder,o).then((a=>{i.filterOptionValues=o,e.value=a.data,u.pageCount=a.pageCount,u.itemCount=a.total,t.value=!1}))}},handlePageChange(a){t.value||(t.value=!0,C(a,u.pageSize,r.sortOrder,i.filterOptionValues).then((o=>{e.value=o.data,u.page=a,u.pageCount=o.pageCount,u.itemCount=o.total,t.value=!1})))}}}}),[["render",function(e,t,a,o,n,m){const d=p,g=s;return l(),r(g,null,{default:i((()=>[u(d,{remote:"",ref:"table",columns:e.columns,data:e.data,loading:e.loading,pagination:e.pagination,"row-key":e.rowKey,"onUpdate:sorter":e.handleSorterChange,"onUpdate:filters":e.handleFiltersChange,"onUpdate:page":e.handlePageChange},null,8,["columns","data","loading","pagination","row-key","onUpdate:sorter","onUpdate:filters","onUpdate:page"])])),_:1})}]]);export{h as default};