import{d as e,a as o,o as a,c as t,w as s,b as l,h as n,B as c,L as r}from"./index-PiH8oZvg.js";import{_ as i}from"./plugin-vueexport-helper-BCo6x5W8.js";import{_ as d,a as p}from"./Switch-DgpkN_OB.js";import{_ as u}from"./Space-BRbewzT8.js";import"./Dropdown-BxDTdXQ9.js";import"./Popover-BijzfXgP.js";import"./use-merged-state-CN59-VMd.js";import"./use-compitable-CL_hcFQb.js";import"./next-frame-once-DiJwGkuW.js";import"./create-Bylz8BGN.js";import"./Tooltip-D1QXMDop.js";import"./index-Ba1Yspn1.js";import"./get-slot-BjAOOWF7.js";const m=i(e({setup(){const e=o(!1),a=o("难吃"),t=o(null);return{menuInstRef:t,selectAndExpand:e=>{var o;a.value=e,null==(o=t.value)||o.showOption(e)},accordion:e,selectedKey:a,options:[{label:"学五",key:"学五",children:[{label:"难吃",key:"难吃"}]},{label:"学一",key:"/components",children:[{label:"也难吃",key:"/components/headlessTable/basic"}]},{label:"燕南",key:"燕南",children:[{label:"依然难吃",key:"依然难吃"}]}]}}}),[["render",function(e,o,i,m,f,j){const b=d,v=c,h=p,k=u,_=r;return a(),t(_,{title:"menu"},{default:s((()=>[l(k,{vertical:""},{default:s((()=>[l(b,{value:e.accordion,"onUpdate:value":o[0]||(o[0]=o=>e.accordion=o)},{checked:s((()=>o[5]||(o[5]=[n(" 手风琴 ")]))),unchecked:s((()=>o[6]||(o[6]=[n(" 普通 ")]))),_:1},8,["value"]),l(v,{onClick:o[1]||(o[1]=o=>e.selectAndExpand("难吃"))},{default:s((()=>o[7]||(o[7]=[n(" 选中第一项 ")]))),_:1}),l(v,{onClick:o[2]||(o[2]=o=>e.selectAndExpand("/components/headlessTable/basic"))},{default:s((()=>o[8]||(o[8]=[n(" 选中第二项 ")]))),_:1}),l(v,{onClick:o[3]||(o[3]=o=>e.selectAndExpand("依然难吃"))},{default:s((()=>o[9]||(o[9]=[n(" 选中第三项 ")]))),_:1}),l(h,{ref:"menuInstRef",value:e.selectedKey,"onUpdate:value":o[4]||(o[4]=o=>e.selectedKey=o),options:e.options,accordion:e.accordion},null,8,["value","options","accordion"])])),_:1})])),_:1})}]]);export{m as default};
