var e=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(o,r,a)=>r in o?e(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a,n=(e,o)=>{for(var r in o||(o={}))t.call(o,r)&&s(e,r,o[r]);if(a)for(var r of a(o))l.call(o,r)&&s(e,r,o[r]);return e},i=(e,a)=>o(e,r(a));import{d as c,bj as p,c as u,o as d,n as m,i as v,t as y,q as f,G as _,M as b,g,bk as h,bl as C,bm as j,e as w,w as P,bn as k,f as x,K as O}from"./index-MskScSmw.js";import{_ as F}from"./plugin-vueexport-helper-BCo6x5W8.js";import{_ as M,a as A}from"./Grid-bvLyWBS-.js";import"./next-frame-once-DiJwGkuW.js";import"./get-slot-BjAOOWF7.js";var S=function(e){var o=e/255;return o<.04045?o/12.92:Math.pow((o+.055)/1.055,2.4)},N=function(e){return.2126*S(e.r)+.7152*S(e.g)+.0722*S(e.b)};function G(e){e.prototype.luminance=function(){return e=N(this.rgba),void 0===(o=2)&&(o=0),void 0===r&&(r=Math.pow(10,o)),Math.round(r*e)/r+0;var e,o,r},e.prototype.contrast=function(o){void 0===o&&(o="#FFF");var r,a,t,l,s,n,i,c=o instanceof e?o:new e(o);return l=this.rgba,s=c.toRgb(),r=(n=N(l))>(i=N(s))?(n+.05)/(i+.05):(i+.05)/(n+.05),void 0===(a=2)&&(a=0),void 0===t&&(t=Math.pow(10,a)),Math.floor(t*r)/t+0},e.prototype.isReadable=function(e,o){return void 0===e&&(e="#FFF"),void 0===o&&(o={}),this.contrast(e)>=(s=void 0===(l=(r=o).size)?"normal":l,"AAA"===(t=void 0===(a=r.level)?"AA":a)&&"normal"===s?7:"AA"===t&&"large"===s?3:4.5);var r,a,t,l,s}}const I={class:"color-palette"},R={class:"color-palette__header-title"},q={class:"color-palette__header-value"},z={class:"color-palette__header-value-name"},D=["onClick"],E={class:"color-palette__item-label"},H=F(c(i(n({},{name:"ColorPalette"}),{__name:"ColorPalette",props:{primaryColor:{type:String,default:"#66CCFF"},colorName:{type:String,default:"primary"},colorType:{type:String,default:"hex"}},setup(e){function o(e){return h(e).luminance()>.4?"black":"white"}function r(e){return{backgroundColor:e,color:o(e)}}p([G]);const a=u(!1);return(t,l)=>(d(),m("div",I,[v("div",{class:"color-palette__header",style:f({backgroundColor:e.primaryColor,color:o(e.primaryColor)})},[v("div",R,y(e.colorName),1),v("div",q,[v("span",z,y(e.colorName)+"-6",1),v("span",{class:"color-palette__header-value-color",style:f(r(e.primaryColor))},y(e.primaryColor),5)])],4),(d(!0),m(_,null,b(g(C)(e.primaryColor),((o,t)=>(d(),m("div",{key:t},[v("div",{style:f(r(o)),class:"color-palette__item",onMouseover:l[0]||(l[0]=e=>a.value=!0),onMouseleave:l[1]||(l[1]=e=>a.value=!1),onClick:e=>{j(o)}},[v("span",E,y(e.colorName)+"-"+y(t+1),1),v("span",{class:"color-palette__item-value",style:f({opacity:g(a)?1:0})},y(g(h)(o).toHex().toString().toUpperCase()),5)],44,D)])))),128))]))}})),[["__scopeId","data-v-2ad029e3"]]),K=c(i(n({},{name:"PalettePage"}),{__name:"index",setup:e=>(e,o)=>{const r=O,a=M,t=A;return d(),w(t,{cols:"4","x-gap":16,"y-gap":16,responsive:"screen","item-responsive":""},{default:P((()=>[(d(!0),m(_,null,b(g(k),((e,o)=>(d(),w(a,{key:e},{default:P((()=>[x(r,{class:"overflow-hidden"},{default:P((()=>[(d(),w(H,{key:o,"color-name":o,"color-type":"hex","primary-color":e},null,8,["color-name","primary-color"]))])),_:2},1024)])),_:2},1024)))),128))])),_:1})}}));export{K as default};
