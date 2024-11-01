import{y as e,z as n,P as o,bs as r,x as t,A as s,d as i,C as a,bt as l,E as c,l as d,bu as b,X as g,F as h,c as u,s as v,aO as p,bv as f,aI as m,v as z,bw as C,N as y,bx as x,by as _,bz as w,bA as M,bp as A,u as P,o as $,e as R,w as k,f as B,j as I,t as j,g as T,bB as S,B as L,K as E}from"./index-MskScSmw.js";const F=e("alert","\n line-height: var(--n-line-height);\n border-radius: var(--n-border-radius);\n position: relative;\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-color);\n text-align: start;\n word-break: break-word;\n",[n("border","\n border-radius: inherit;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n transition: border-color .3s var(--n-bezier);\n border: var(--n-border);\n pointer-events: none;\n "),o("closable",[e("alert-body",[n("title","\n padding-right: 24px;\n ")])]),n("icon",{color:"var(--n-icon-color)"}),e("alert-body",{padding:"var(--n-padding)"},[n("title",{color:"var(--n-title-text-color)"}),n("content",{color:"var(--n-content-text-color)"})]),r({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),n("icon","\n position: absolute;\n left: 0;\n top: 0;\n align-items: center;\n justify-content: center;\n display: flex;\n width: var(--n-icon-size);\n height: var(--n-icon-size);\n font-size: var(--n-icon-size);\n margin: var(--n-icon-margin);\n "),n("close","\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n position: absolute;\n right: 0;\n top: 0;\n margin: var(--n-close-margin);\n "),o("show-icon",[e("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),o("right-adjust",[e("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),e("alert-body","\n border-radius: var(--n-border-radius);\n transition: border-color .3s var(--n-bezier);\n ",[n("title","\n transition: color .3s var(--n-bezier);\n font-size: 16px;\n line-height: 19px;\n font-weight: var(--n-title-font-weight);\n ",[t("& +",[n("content",{marginTop:"9px"})])]),n("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),n("icon",{transition:"color .3s var(--n-bezier)"})]),H=i({name:"Alert",inheritAttrs:!1,props:Object.assign(Object.assign({},s.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,inlineThemeDisabled:r,mergedRtlRef:t}=a(e),i=s("Alert","-alert",F,l,e,n),v=c("Alert",t,n),p=d((()=>{const{common:{cubicBezierEaseInOut:n},self:o}=i.value,{fontSize:r,borderRadius:t,titleFontWeight:s,lineHeight:a,iconSize:l,iconMargin:c,iconMarginRtl:d,closeIconSize:h,closeBorderRadius:u,closeSize:v,closeMargin:p,closeMarginRtl:f,padding:m}=o,{type:z}=e,{left:C,right:y}=b(c);return{"--n-bezier":n,"--n-color":o[g("color",z)],"--n-close-icon-size":h,"--n-close-border-radius":u,"--n-close-color-hover":o[g("closeColorHover",z)],"--n-close-color-pressed":o[g("closeColorPressed",z)],"--n-close-icon-color":o[g("closeIconColor",z)],"--n-close-icon-color-hover":o[g("closeIconColorHover",z)],"--n-close-icon-color-pressed":o[g("closeIconColorPressed",z)],"--n-icon-color":o[g("iconColor",z)],"--n-border":o[g("border",z)],"--n-title-text-color":o[g("titleTextColor",z)],"--n-content-text-color":o[g("contentTextColor",z)],"--n-line-height":a,"--n-border-radius":t,"--n-font-size":r,"--n-title-font-weight":s,"--n-icon-size":l,"--n-icon-margin":c,"--n-icon-margin-rtl":d,"--n-close-size":v,"--n-close-margin":p,"--n-close-margin-rtl":f,"--n-padding":m,"--n-icon-margin-left":C,"--n-icon-margin-right":y}})),f=r?h("alert",d((()=>e.type[0])),p,e):void 0,m=u(!0);return{rtlEnabled:v,mergedClsPrefix:n,mergedBordered:o,visible:m,handleCloseClick:()=>{var n;Promise.resolve(null===(n=e.onClose)||void 0===n?void 0:n.call(e)).then((e=>{!1!==e&&(m.value=!1)}))},handleAfterLeave:()=>{(()=>{const{onAfterLeave:n,onAfterHide:o}=e;n&&n(),o&&o()})()},mergedTheme:i,cssVars:r?void 0:p,themeClass:null==f?void 0:f.themeClass,onRender:null==f?void 0:f.onRender}},render(){var e;return null===(e=this.onRender)||void 0===e||e.call(this),v(C,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:n}=this,o={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?v("div",Object.assign({},p(this.$attrs,o)),this.closable&&v(f,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&v("div",{class:`${e}-alert__border`}),this.showIcon&&v("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},m(n.icon,(()=>[v(y,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return v(M,null);case"info":return v(w,null);case"warning":return v(_,null);case"error":return v(x,null);default:return null}}})]))),v("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},z(n.header,(n=>{const o=n||this.title;return o?v("div",{class:`${e}-alert-body__title`},o):null})),n.default&&v("div",{class:`${e}-alert-body__content`},n))):null}})}}),O=i({__name:"CurrentPermissionMode",setup(e){const{togglePermissionMode:n,getPermissionMode:o}=A(),{t:r}=P();return(e,t)=>{const s=L,i=E;return $(),R(i,{title:T(r)("page.permission.permissionMode.currentMode"),embedded:"",bordered:!1},{default:k((()=>[B(s,{type:"info"},{default:k((()=>[I(j(T(o)===T(S).BACKEND?T(r)("page.permission.permissionMode.backendMode"):T(r)("page.permission.permissionMode.frontendMode")),1)])),_:1}),B(s,{class:"ml-4",type:"primary",onClick:T(n)},{default:k((()=>[I(j(T(r)("page.permission.permissionMode.toggleMode")),1)])),_:1},8,["onClick"])])),_:1},8,["title"])}}});export{O as _,H as a};
