import{dj as e,bZ as t,dk as a,dl as s,dm as r,dn as o,dp as n,dq as l,d as i,aa as p,l as u,p as d,b as c,w as f,e as m,ai as g,bn as v,o as b,g as j,h,j as x}from"./index-igetQ514.js";import{_ as y}from"./Tooltip-DXV-JLhh.js";var T=Object.prototype.hasOwnProperty;const _={key:0},k=i({__name:"ToolTipper",props:{tooltipText:{default:void 0},placement:{default:"bottom"},contentClass:{default:""}},setup(i){const k=i,{tooltipText:w,placement:C,contentClass:O}=p(k),$=u((()=>!function(i){if(null==i)return!0;if(e(i)&&(t(i)||"string"==typeof i||"function"==typeof i.splice||a(i)||s(i)||r(i)))return!i.length;var p=o(i);if("[object Map]"==p||"[object Set]"==p)return!i.size;if(n(i))return!l(i).length;for(var u in i)if(T.call(i,u))return!1;return!0}(w.value)));return(e,t)=>{const a=y;return $.value?(b(),d("div",_,[c(a,{placement:m(C),trigger:"hover"},{trigger:f((()=>[j("div",{class:v(["flex-center h-full rounded-lg cursor-pointer",m(O)])},[g(e.$slots,"default")],2)])),default:f((()=>[h(" "+x(m(w)),1)])),_:3},8,["placement"])])):(b(),d("div",{key:1,class:v(["flex-center rounded-lg cursor-pointer",m(O)])},[g(e.$slots,"default")],2))}}});export{k as _};