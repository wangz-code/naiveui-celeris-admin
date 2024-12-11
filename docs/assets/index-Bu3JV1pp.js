var e=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(o,r,a)=>r in o?e(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a,n=(e,o)=>{for(var r in o||(o={}))t.call(o,r)&&s(e,r,o[r]);if(a)for(var r of a(o))l.call(o,r)&&s(e,r,o[r]);return e},i=(e,a)=>o(e,r(a));import{d as p,bu as c,a as u,o as d,p as m,g as v,j as y,s as f,H as _,O as b,e as g,bv as h,bw as C,bx as j,c as w,w as O,by as x,b as F,L as P}from"./index-PiH8oZvg.js";import{_ as k}from"./plugin-vueexport-helper-BCo6x5W8.js";import{_ as A,a as M}from"./Grid-CHLiTEFg.js";import"./next-frame-once-DiJwGkuW.js";import"./get-slot-BjAOOWF7.js";var S=function(e){var o=e/255;return o<.04045?o/12.92:Math.pow((o+.055)/1.055,2.4)},N=function(e){return.2126*S(e.r)+.7152*S(e.g)+.0722*S(e.b)};function H(e){e.prototype.luminance=function(){return e=N(this.rgba),void 0===(o=2)&&(o=0),void 0===r&&(r=Math.pow(10,o)),Math.round(r*e)/r+0;var e,o,r},e.prototype.contrast=function(o){void 0===o&&(o="#FFF");var r,a,t,l,s,n,i,p=o instanceof e?o:new e(o);return l=this.rgba,s=p.toRgb(),r=(n=N(l))>(i=N(s))?(n+.05)/(i+.05):(i+.05)/(n+.05),void 0===(a=2)&&(a=0),void 0===t&&(t=Math.pow(10,a)),Math.floor(t*r)/t+0},e.prototype.isReadable=function(e,o){return void 0===e&&(e="#FFF"),void 0===o&&(o={}),this.contrast(e)>=(s=void 0===(l=(r=o).size)?"normal":l,"AAA"===(t=void 0===(a=r.level)?"AA":a)&&"normal"===s?7:"AA"===t&&"large"===s?3:4.5);var r,a,t,l,s}}const I={class:"color-palette"},R={class:"color-palette__header-title"},z={class:"color-palette__header-value"},D={class:"color-palette__header-value-name"},E=["onClick"],G={class:"color-palette__item-label"},L=k(p(i(n({},{name:"ColorPalette"}),{__name:"ColorPalette",props:{primaryColor:{type:String,default:"#66CCFF"},colorName:{type:String,default:"primary"},colorType:{type:String,default:"hex"}},setup(e){function o(e){return h(e).luminance()>.4?"black":"white"}function r(e){return{backgroundColor:e,color:o(e)}}c([H]);const a=u(!1);return(t,l)=>(d(),m("div",I,[v("div",{class:"color-palette__header",style:f({backgroundColor:e.primaryColor,color:o(e.primaryColor)})},[v("div",R,y(e.colorName),1),v("div",z,[v("span",D,y(e.colorName)+"-6",1),v("span",{class:"color-palette__header-value-color",style:f(r(e.primaryColor))},y(e.primaryColor),5)])],4),(d(!0),m(_,null,b(g(C)(e.primaryColor),((o,t)=>(d(),m("div",{key:t},[v("div",{style:f(r(o)),class:"color-palette__item",onMouseover:l[0]||(l[0]=e=>a.value=!0),onMouseleave:l[1]||(l[1]=e=>a.value=!1),onClick:e=>{j(o)}},[v("span",G,y(e.colorName)+"-"+y(t+1),1),v("span",{class:"color-palette__item-value",style:f({opacity:g(a)?1:0})},y(g(h)(o).toHex().toString().toUpperCase()),5)],44,E)])))),128))]))}})),[["__scopeId","data-v-2ad029e3"]]),T=p(i(n({},{name:"PalettePage"}),{__name:"index",setup:e=>(e,o)=>{const r=P,a=A,t=M;return d(),w(t,{cols:"4","x-gap":16,"y-gap":16,responsive:"screen","item-responsive":""},{default:O((()=>[(d(!0),m(_,null,b(g(x),((e,o)=>(d(),w(a,{key:e},{default:O((()=>[F(r,{class:"overflow-hidden"},{default:O((()=>[(d(),w(L,{key:o,"color-name":o,"color-type":"hex","primary-color":e},null,8,["color-name","primary-color"]))])),_:2},1024)])),_:2},1024)))),128))])),_:1})}}));export{T as default};
