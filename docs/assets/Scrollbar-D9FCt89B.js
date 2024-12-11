import{v as e,z as o,ap as n,Q as t,y as r,d as s,D as a,a as l,a1 as i,a0 as c,as as d,l as u,aI as h,cU as v,C as b,cV as p,a2 as f,aF as m,G as g,au as w,co as y,T as x,ab as L,aC as S,ag as C,N as k,ao as T}from"./index-PiH8oZvg.js";import{u as j}from"./use-merged-state-CN59-VMd.js";function z(e){if(null===e)return null;const o=function(e){return 9===e.nodeType?null:e.parentNode}(e);if(null===o)return null;if(9===o.nodeType)return document.documentElement;if(1===o.nodeType){const{overflow:e,overflowX:n,overflowY:t}=getComputedStyle(o);if(/(auto|scroll|overlay)/.test(e+t+n))return o}return z(o)}function E(e){return"#document"===e.nodeName}const O=e("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},e("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},e("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},e("g",{transform:"translate(120.000000, 4285.000000)"},e("g",{transform:"translate(7.000000, 126.000000)"},e("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},e("g",{transform:"translate(4.000000, 2.000000)"},e("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),e("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),R=o("back-top","\n position: fixed;\n right: 40px;\n bottom: 40px;\n cursor: pointer;\n display: flex;\n align-items: center;\n justify-content: center;\n color: var(--n-text-color);\n transition:\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n border-radius: var(--n-border-radius);\n height: var(--n-height);\n min-width: var(--n-width);\n box-shadow: var(--n-box-shadow);\n background-color: var(--n-color);\n",[n(),t("transition-disabled",{transition:"none !important"}),o("base-icon","\n font-size: var(--n-icon-size);\n color: var(--n-icon-color);\n transition: color .3s var(--n-bezier);\n "),r("svg",{pointerEvents:"none"}),r("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[o("base-icon",{color:"var(--n-icon-color-hover)"})]),r("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[o("base-icon",{color:"var(--n-icon-color-pressed)"})])]),$=s({name:"BackTop",inheritAttrs:!1,props:Object.assign(Object.assign({},b.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=a(e),t=l(null),r=l(!1);i((()=>{const{value:o}=t;r.value=null!==o&&o>=e.visibilityHeight}));const s=l(!1);c(r,(o=>{var n;s.value&&(null===(n=e["onUpdate:show"])||void 0===n||n.call(e,o))}));const y=d(e,"show"),x=j(y,r),L=l(!0),S=l(null),k=u((()=>({right:`calc(${h(e.right)} + ${v.value})`,bottom:h(e.bottom)})));let T,O;c(x,(o=>{var n,t;s.value&&(o&&(null===(n=e.onShow)||void 0===n||n.call(e)),null===(t=e.onHide)||void 0===t||t.call(e))}));const $=b("BackTop","-back-top",R,p,e,o);function B(){var o;if(O)return;O=!0;const n=(null===(o=e.target)||void 0===o?void 0:o.call(e))||("string"==typeof(t=e.listenTo)?document.querySelector(t):"function"==typeof t?t():t)||z(S.value);var t;if(!n)return;T=n===document.documentElement?document:n;const{to:r}=e;"string"==typeof r&&document.querySelector(r),T.addEventListener("scroll",H),H()}function H(){t.value=(E(T)?document.documentElement:T).scrollTop,s.value||C((()=>{s.value=!0}))}f((()=>{B(),L.value=x.value})),m((()=>{T&&T.removeEventListener("scroll",H)}));const P=u((()=>{const{self:{color:e,boxShadow:o,boxShadowHover:n,boxShadowPressed:t,iconColor:r,iconColorHover:s,iconColorPressed:a,width:l,height:i,iconSize:c,borderRadius:d,textColor:u},common:{cubicBezierEaseInOut:h}}=$.value;return{"--n-bezier":h,"--n-border-radius":d,"--n-height":i,"--n-width":l,"--n-box-shadow":o,"--n-box-shadow-hover":n,"--n-box-shadow-pressed":t,"--n-color":e,"--n-icon-size":c,"--n-icon-color":r,"--n-icon-color-hover":s,"--n-icon-color-pressed":a,"--n-text-color":u}})),F=n?g("back-top",void 0,P,e):void 0;return{placeholderRef:S,style:k,mergedShow:x,isMounted:w(),scrollElement:l(null),scrollTop:t,DomInfoReady:s,transitionDisabled:L,mergedClsPrefix:o,handleAfterEnter:function(){L.value=!1},handleScroll:H,handleClick:function(){(E(T)?document.documentElement:T).scrollTo({top:0,behavior:"smooth"})},cssVars:n?void 0:P,themeClass:null==F?void 0:F.themeClass,onRender:null==F?void 0:F.onRender}},render(){const{mergedClsPrefix:o}=this;return e("div",{ref:"placeholderRef",class:`${o}-back-top-placeholder`,style:"display: none","aria-hidden":!0},e(y,{to:this.to,show:this.mergedShow},{default:()=>e(x,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var n;return null===(n=this.onRender)||void 0===n||n.call(this),this.mergedShow?e("div",L(this.$attrs,{class:[`${o}-back-top`,this.themeClass,this.transitionDisabled&&`${o}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),S(this.$slots.default,(()=>[e(k,{clsPrefix:o},{default:()=>O})]))):null}})}))}}),B=s({name:"Scrollbar",props:Object.assign(Object.assign({},b.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),setup(){const e=l(null),o={scrollTo:(...o)=>{var n;null===(n=e.value)||void 0===n||n.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var n;null===(n=e.value)||void 0===n||n.scrollBy(o[0],o[1])}};return Object.assign(Object.assign({},o),{scrollbarInstRef:e})},render(){return e(T,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}});export{B as S,$ as _};
