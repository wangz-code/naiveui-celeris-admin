import{bI as e,cZ as t,l as s,c as r,aR as i,as as o,d as a,au as l,aU as n,s as p,a6 as d,C as u,aZ as f,a8 as v,ad as c,az as h,bY as m,aO as S,a$ as y,ai as g,bK as b}from"./index-MskScSmw.js";import{b as w}from"./next-frame-once-DiJwGkuW.js";import{g as $}from"./get-slot-BjAOOWF7.js";function x(e,t){var s;if(null==e)return;const r=function(e){if("number"==typeof e)return{"":e.toString()};const t={};return e.split(/ +/).forEach((e=>{if(""===e)return;const[s,r]=e.split(":");void 0===r?t[""]=s:t[s]=r})),t}(e);if(void 0===t)return r[""];if("string"==typeof t)return null!==(s=r[t])&&void 0!==s?s:r[""];if(Array.isArray(t)){for(let e=t.length-1;e>=0;--e){const s=t[e];if(s in r)return r[s]}return r[""]}{let e,s=-1;return Object.keys(r).forEach((i=>{const o=Number(i);!Number.isNaN(o)&&t>=o&&o>=s&&(s=o,e=r[i])})),e}}const R={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};const G={};const C=o("n-grid"),N=1,E=a({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:{span:{type:[Number,String],default:N},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:r,overflowRef:i,layoutShiftDisabledRef:o}=l(C),a=d();return{overflow:i,itemStyle:r,layoutShiftDisabled:o,mergedXGap:s((()=>n(t.value||0))),deriveStyle:()=>{e.value;const{privateSpan:s=N,privateShow:r=!0,privateColStart:i,privateOffset:o=0}=a.vnode.props,{value:l}=t,p=n(l||0);return{display:r?"":"none",gridColumn:`${null!=i?i:`span ${s}`} / span ${s}`,marginLeft:o?`calc((100% - (${s} - 1) * ${p}) / ${s} * ${o} + ${p} * ${o})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:e,offset:t,mergedXGap:s}=this;return p("div",{style:{gridColumn:`span ${e} / span ${e}`,marginLeft:t?`calc((100% - (${e} - 1) * ${s}) / ${e} * ${t} + ${s} * ${t})`:""}},this.$slots)}return p("div",{style:[this.itemStyle,this.deriveStyle()]},null===(t=(e=this.$slots).default)||void 0===t?void 0:t.call(e,{overflow:this.overflow}))}}),_={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},D="__ssr__",O=a({name:"Grid",inheritAttrs:!1,props:{layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:24},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},setup(e){const{mergedClsPrefixRef:o,mergedBreakpointsRef:a}=u(e),l=/^\d+$/,p=r(void 0),d=function(e=R){if(!t)return s((()=>[]));if("function"!=typeof window.matchMedia)return s((()=>[]));const o=r({}),a=Object.keys(e),l=(e,t)=>{e.matches?o.value[t]=!0:o.value[t]=!1};return a.forEach((t=>{const s=e[t];let r,i;void 0===G[s]?(r=window.matchMedia(`(min-width: ${s}px)`),r.addEventListener?r.addEventListener("change",(e=>{i.forEach((s=>{s(e,t)}))})):r.addListener&&r.addListener((e=>{i.forEach((s=>{s(e,t)}))})),i=new Set,G[s]={mql:r,cbs:i}):(r=G[s].mql,i=G[s].cbs),i.add(l),r.matches&&i.forEach((e=>{e(r,t)}))})),i((()=>{a.forEach((t=>{const{cbs:s}=G[e[t]];s.has(l)&&s.delete(l)}))})),s((()=>{const{value:e}=o;return a.filter((t=>e[t]))}))}((null==a?void 0:a.value)||_),S=f((()=>!!e.itemResponsive||(!l.test(e.cols.toString())||(!l.test(e.xGap.toString())||!l.test(e.yGap.toString()))))),y=s((()=>{if(S.value)return"self"===e.responsive?p.value:d.value})),g=f((()=>{var t;return null!==(t=Number(x(e.cols.toString(),y.value)))&&void 0!==t?t:24})),b=f((()=>x(e.xGap.toString(),y.value))),$=f((()=>x(e.yGap.toString(),y.value))),N=e=>{p.value=e.contentRect.width},E=e=>{w(N,e)},O=r(!1),B=s((()=>{if("self"===e.responsive)return E})),L=r(!1),j=r();return v((()=>{const{value:e}=j;e&&e.hasAttribute(D)&&(e.removeAttribute(D),L.value=!0)})),c(C,{layoutShiftDisabledRef:h(e,"layoutShiftDisabled"),isSsrRef:L,itemStyleRef:h(e,"itemStyle"),xGapRef:b,overflowRef:O}),{isSsr:!m,contentEl:j,mergedClsPrefix:o,style:s((()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:n(e.xGap),rowGap:n(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${g.value}, minmax(0, 1fr))`,columnGap:n(b.value),rowGap:n($.value)})),isResponsive:S,responsiveQuery:y,responsiveCols:g,handleResize:B,overflow:O}},render(){if(this.layoutShiftDisabled)return p("div",S({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const t=()=>{var t,s,r,i,o,a,l;this.overflow=!1;const n=g($(this)),d=[],{collapsed:u,collapsedRows:f,responsiveCols:v,responsiveQuery:c}=this;n.forEach((t=>{var s,r,i,o,a;if(!0!==(null===(s=null==t?void 0:t.type)||void 0===s?void 0:s.__GRID_ITEM__))return;if(function(t){var s;const r=null===(s=t.dirs)||void 0===s?void 0:s.find((({dir:t})=>t===e));return!(!r||!1!==r.value)}(t)){const e=b(t);return e.props?e.props.privateShow=!1:e.props={privateShow:!1},void d.push({child:e,rawChildSpan:0})}t.dirs=(null===(r=t.dirs)||void 0===r?void 0:r.filter((({dir:t})=>t!==e)))||null,0===(null===(i=t.dirs)||void 0===i?void 0:i.length)&&(t.dirs=null);const l=b(t),n=Number(null!==(a=x(null===(o=l.props)||void 0===o?void 0:o.span,c))&&void 0!==a?a:1);0!==n&&d.push({child:l,rawChildSpan:n})}));let h=0;const m=null===(t=d[d.length-1])||void 0===t?void 0:t.child;if(null==m?void 0:m.props){const e=null===(s=m.props)||void 0===s?void 0:s.suffix;void 0!==e&&!1!==e&&(h=Number(null!==(i=x(null===(r=m.props)||void 0===r?void 0:r.span,c))&&void 0!==i?i:1),m.props.privateSpan=h,m.props.privateColStart=v+1-h,m.props.privateShow=null===(o=m.props.privateShow)||void 0===o||o)}let y=0,w=!1;for(const{child:e,rawChildSpan:p}of d){if(w&&(this.overflow=!0),!w){const t=Number(null!==(l=x(null===(a=e.props)||void 0===a?void 0:a.offset,c))&&void 0!==l?l:0),s=Math.min(p+t,v);if(e.props?(e.props.privateSpan=s,e.props.privateOffset=t):e.props={privateSpan:s,privateOffset:t},u){const e=y%v;s+e>v&&(y+=v-e),s+y+h>f*v?w=!0:y+=s}}w&&(e.props?!0!==e.props.privateShow&&(e.props.privateShow=!1):e.props={privateShow:!1})}return p("div",S({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[D]:this.isSsr||void 0},this.$attrs),d.map((({child:e})=>e)))};return this.isResponsive&&"self"===this.responsive?p(y,{onResize:this.handleResize},{default:t}):t()}});export{E as _,O as a};
