import{z as e,U as i,A as n,Q as r,C as t,d as l,D as o,l as d,G as s,v as a,H as c,df as v}from"./index-PiH8oZvg.js";const h=e("divider","\n position: relative;\n display: flex;\n width: 100%;\n box-sizing: border-box;\n font-size: 16px;\n color: var(--n-text-color);\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n",[i("vertical","\n margin-top: 24px;\n margin-bottom: 24px;\n ",[i("no-title","\n display: flex;\n align-items: center;\n ")]),n("title","\n display: flex;\n align-items: center;\n margin-left: 12px;\n margin-right: 12px;\n white-space: nowrap;\n font-weight: var(--n-font-weight);\n "),r("title-position-left",[n("line",[r("left",{width:"28px"})])]),r("title-position-right",[n("line",[r("right",{width:"28px"})])]),r("dashed",[n("line","\n background-color: #0000;\n height: 0px;\n width: 100%;\n border-style: dashed;\n border-width: 1px 0 0;\n ")]),r("vertical","\n display: inline-block;\n height: 1em;\n margin: 0 8px;\n vertical-align: middle;\n width: 1px;\n "),n("line","\n border: none;\n transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);\n height: 1px;\n width: 100%;\n margin: 0;\n "),i("dashed",[n("line",{backgroundColor:"var(--n-color)"})]),r("dashed",[n("line",{borderColor:"var(--n-color)"})]),r("vertical",{backgroundColor:"var(--n-color)"})]),g=l({name:"Divider",props:Object.assign(Object.assign({},t.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:n}=o(e),r=t("Divider","-divider",h,v,e,i),l=d((()=>{const{common:{cubicBezierEaseInOut:e},self:{color:i,textColor:n,fontWeight:t}}=r.value;return{"--n-bezier":e,"--n-color":i,"--n-text-color":n,"--n-font-weight":t}})),a=n?s("divider",void 0,l,e):void 0;return{mergedClsPrefix:i,cssVars:n?void 0:l,themeClass:null==a?void 0:a.themeClass,onRender:null==a?void 0:a.onRender}},render(){var e;const{$slots:i,titlePlacement:n,vertical:r,dashed:t,cssVars:l,mergedClsPrefix:o}=this;return null===(e=this.onRender)||void 0===e||e.call(this),a("div",{role:"separator",class:[`${o}-divider`,this.themeClass,{[`${o}-divider--vertical`]:r,[`${o}-divider--no-title`]:!i.default,[`${o}-divider--dashed`]:t,[`${o}-divider--title-position-${n}`]:i.default&&n}],style:l},r?null:a("div",{class:`${o}-divider__line ${o}-divider__line--left`}),!r&&i.default?a(c,null,a("div",{class:`${o}-divider__title`},this.$slots),a("div",{class:`${o}-divider__line ${o}-divider__line--right`})):null)}});export{g as N};
