import{d7 as e,bP as t,d8 as a,d9 as s,da as r,db as o,dc as n,dd as l,d as i,aj as p,l as u,p as d,b as c,w as f,e as g,ae as m,be as v,o as b,g as j,h,j as x}from"./index-Dtj_mDDm.js";import{_ as y}from"./Tooltip-LrleEiSk.js";var T=Object.prototype.hasOwnProperty;const _={key:0},k=i({__name:"ToolTipper",props:{tooltipText:{default:void 0},placement:{default:"bottom"},contentClass:{default:""}},setup(i){const k=i,{tooltipText:w,placement:C,contentClass:O}=p(k),P=u((()=>!function(i){if(null==i)return!0;if(e(i)&&(t(i)||"string"==typeof i||"function"==typeof i.splice||a(i)||s(i)||r(i)))return!i.length;var p=o(i);if("[object Map]"==p||"[object Set]"==p)return!i.size;if(n(i))return!l(i).length;for(var u in i)if(T.call(i,u))return!1;return!0}(w.value)));return(e,t)=>{const a=y;return P.value?(b(),d("div",_,[c(a,{placement:g(C),trigger:"hover"},{trigger:f((()=>[j("div",{class:v(["flex-center h-full rounded-lg cursor-pointer",g(O)])},[m(e.$slots,"default")],2)])),default:f((()=>[h(" "+x(g(w)),1)])),_:3},8,["placement"])])):(b(),d("div",{key:1,class:v(["flex-center rounded-lg cursor-pointer",g(O)])},[m(e.$slots,"default")],2))}}});export{k as _};