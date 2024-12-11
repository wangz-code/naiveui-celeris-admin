import{z as e,A as n,Q as r,bE as o,y as t,C as i,d as s,D as l,bF as a,F as c,l as d,bG as b,Y as h,G as g,a as v,v as u,ab as f,bH as p,aC as m,x as z,bI as C,N as x,bJ as y,bK as $,bL as w,bM as A}from"./index-DMvMf093.js";const R=e("alert","\n line-height: var(--n-line-height);\n border-radius: var(--n-border-radius);\n position: relative;\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-color);\n text-align: start;\n word-break: break-word;\n",[n("border","\n border-radius: inherit;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n transition: border-color .3s var(--n-bezier);\n border: var(--n-border);\n pointer-events: none;\n "),r("closable",[e("alert-body",[n("title","\n padding-right: 24px;\n ")])]),n("icon",{color:"var(--n-icon-color)"}),e("alert-body",{padding:"var(--n-padding)"},[n("title",{color:"var(--n-title-text-color)"}),n("content",{color:"var(--n-content-text-color)"})]),o({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),n("icon","\n position: absolute;\n left: 0;\n top: 0;\n align-items: center;\n justify-content: center;\n display: flex;\n width: var(--n-icon-size);\n height: var(--n-icon-size);\n font-size: var(--n-icon-size);\n margin: var(--n-icon-margin);\n "),n("close","\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n position: absolute;\n right: 0;\n top: 0;\n margin: var(--n-close-margin);\n "),r("show-icon",[e("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),r("right-adjust",[e("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),e("alert-body","\n border-radius: var(--n-border-radius);\n transition: border-color .3s var(--n-bezier);\n ",[n("title","\n transition: color .3s var(--n-bezier);\n font-size: 16px;\n line-height: 19px;\n font-weight: var(--n-title-font-weight);\n ",[t("& +",[n("content",{marginTop:"9px"})])]),n("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),n("icon",{transition:"color .3s var(--n-bezier)"})]),_=s({name:"Alert",inheritAttrs:!1,props:Object.assign(Object.assign({},i.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:r,inlineThemeDisabled:o,mergedRtlRef:t}=l(e),s=i("Alert","-alert",R,a,e,n),u=c("Alert",t,n),f=d((()=>{const{common:{cubicBezierEaseInOut:n},self:r}=s.value,{fontSize:o,borderRadius:t,titleFontWeight:i,lineHeight:l,iconSize:a,iconMargin:c,iconMarginRtl:d,closeIconSize:g,closeBorderRadius:v,closeSize:u,closeMargin:f,closeMarginRtl:p,padding:m}=r,{type:z}=e,{left:C,right:x}=b(c);return{"--n-bezier":n,"--n-color":r[h("color",z)],"--n-close-icon-size":g,"--n-close-border-radius":v,"--n-close-color-hover":r[h("closeColorHover",z)],"--n-close-color-pressed":r[h("closeColorPressed",z)],"--n-close-icon-color":r[h("closeIconColor",z)],"--n-close-icon-color-hover":r[h("closeIconColorHover",z)],"--n-close-icon-color-pressed":r[h("closeIconColorPressed",z)],"--n-icon-color":r[h("iconColor",z)],"--n-border":r[h("border",z)],"--n-title-text-color":r[h("titleTextColor",z)],"--n-content-text-color":r[h("contentTextColor",z)],"--n-line-height":l,"--n-border-radius":t,"--n-font-size":o,"--n-title-font-weight":i,"--n-icon-size":a,"--n-icon-margin":c,"--n-icon-margin-rtl":d,"--n-close-size":u,"--n-close-margin":f,"--n-close-margin-rtl":p,"--n-padding":m,"--n-icon-margin-left":C,"--n-icon-margin-right":x}})),p=o?g("alert",d((()=>e.type[0])),f,e):void 0,m=v(!0);return{rtlEnabled:u,mergedClsPrefix:n,mergedBordered:r,visible:m,handleCloseClick:()=>{var n;Promise.resolve(null===(n=e.onClose)||void 0===n?void 0:n.call(e)).then((e=>{!1!==e&&(m.value=!1)}))},handleAfterLeave:()=>{(()=>{const{onAfterLeave:n,onAfterHide:r}=e;n&&n(),r&&r()})()},mergedTheme:s,cssVars:o?void 0:f,themeClass:null==p?void 0:p.themeClass,onRender:null==p?void 0:p.onRender}},render(){var e;return null===(e=this.onRender)||void 0===e||e.call(this),u(C,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:n}=this,r={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?u("div",Object.assign({},f(this.$attrs,r)),this.closable&&u(p,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&u("div",{class:`${e}-alert__border`}),this.showIcon&&u("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},m(n.icon,(()=>[u(x,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return u(A,null);case"info":return u(w,null);case"warning":return u($,null);case"error":return u(y,null);default:return null}}})]))),u("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},z(n.header,(n=>{const r=n||this.title;return r?u("div",{class:`${e}-alert-body__title`},r):null})),n.default&&u("div",{class:`${e}-alert-body__content`},n))):null}})}});export{_};
