import{z as e,Q as o,A as n,U as r,y as a,d as c,a as l,D as t,C as s,dq as i,at as d,as as h,F as b,l as g,Y as v,bG as u,G as k,dp as p,x as C,v as f,bH as x,an as m,ax as z}from"./index-PiH8oZvg.js";const y={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},$=e("tag","\n --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);\n white-space: nowrap;\n position: relative;\n box-sizing: border-box;\n cursor: default;\n display: inline-flex;\n align-items: center;\n flex-wrap: nowrap;\n padding: var(--n-padding);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n transition: \n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n line-height: 1;\n height: var(--n-height);\n font-size: var(--n-font-size);\n",[o("strong","\n font-weight: var(--n-font-weight-strong);\n "),n("border","\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n border: var(--n-border);\n transition: border-color .3s var(--n-bezier);\n "),n("icon","\n display: flex;\n margin: 0 4px 0 0;\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n font-size: var(--n-avatar-size-override);\n "),n("avatar","\n display: flex;\n margin: 0 6px 0 0;\n "),n("close","\n margin: var(--n-close-margin);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "),o("round","\n padding: 0 calc(var(--n-height) / 3);\n border-radius: calc(var(--n-height) / 2);\n ",[n("icon","\n margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);\n "),n("avatar","\n margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);\n "),o("closable","\n padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);\n ")]),o("icon, avatar",[o("round","\n padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);\n ")]),o("disabled","\n cursor: not-allowed !important;\n opacity: var(--n-opacity-disabled);\n "),o("checkable","\n cursor: pointer;\n box-shadow: none;\n color: var(--n-text-color-checkable);\n background-color: var(--n-color-checkable);\n ",[r("disabled",[a("&:hover","background-color: var(--n-color-hover-checkable);",[r("checked","color: var(--n-text-color-hover-checkable);")]),a("&:active","background-color: var(--n-color-pressed-checkable);",[r("checked","color: var(--n-text-color-pressed-checkable);")])]),o("checked","\n color: var(--n-text-color-checked);\n background-color: var(--n-color-checked);\n ",[r("disabled",[a("&:hover","background-color: var(--n-color-checked-hover);"),a("&:active","background-color: var(--n-color-checked-pressed);")])])])]),B=Object.assign(Object.assign(Object.assign({},s.props),y),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),R=m("n-tag"),_=c({name:"Tag",props:B,setup(e){const o=l(null),{mergedBorderedRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedRtlRef:c}=t(e),C=s("Tag","-tag",$,i,e,r);d(R,{roundRef:h(e,"round")});const f={setTextContent(e){const{value:n}=o;n&&(n.textContent=e)}},x=b("Tag",c,r),m=g((()=>{const{type:o,size:r,color:{color:a,textColor:c}={}}=e,{common:{cubicBezierEaseInOut:l},self:{padding:t,closeMargin:s,borderRadius:i,opacityDisabled:d,textColorCheckable:h,textColorHoverCheckable:b,textColorPressedCheckable:g,textColorChecked:k,colorCheckable:p,colorHoverCheckable:f,colorPressedCheckable:x,colorChecked:m,colorCheckedHover:z,colorCheckedPressed:y,closeBorderRadius:$,fontWeightStrong:B,[v("colorBordered",o)]:R,[v("closeSize",r)]:_,[v("closeIconSize",r)]:w,[v("fontSize",r)]:P,[v("height",r)]:F,[v("color",o)]:O,[v("textColor",o)]:T,[v("border",o)]:j,[v("closeIconColor",o)]:I,[v("closeIconColorHover",o)]:M,[v("closeIconColorPressed",o)]:H,[v("closeColorHover",o)]:S,[v("closeColorPressed",o)]:U}}=C.value,D=u(s);return{"--n-font-weight-strong":B,"--n-avatar-size-override":`calc(${F} - 8px)`,"--n-bezier":l,"--n-border-radius":i,"--n-border":j,"--n-close-icon-size":w,"--n-close-color-pressed":U,"--n-close-color-hover":S,"--n-close-border-radius":$,"--n-close-icon-color":I,"--n-close-icon-color-hover":M,"--n-close-icon-color-pressed":H,"--n-close-icon-color-disabled":I,"--n-close-margin-top":D.top,"--n-close-margin-right":D.right,"--n-close-margin-bottom":D.bottom,"--n-close-margin-left":D.left,"--n-close-size":_,"--n-color":a||(n.value?R:O),"--n-color-checkable":p,"--n-color-checked":m,"--n-color-checked-hover":z,"--n-color-checked-pressed":y,"--n-color-hover-checkable":f,"--n-color-pressed-checkable":x,"--n-font-size":P,"--n-height":F,"--n-opacity-disabled":d,"--n-padding":t,"--n-text-color":c||T,"--n-text-color-checkable":h,"--n-text-color-checked":k,"--n-text-color-hover-checkable":b,"--n-text-color-pressed-checkable":g}})),y=a?k("tag",g((()=>{let o="";const{type:r,size:a,color:{color:c,textColor:l}={}}=e;return o+=r[0],o+=a[0],c&&(o+=`a${p(c)}`),l&&(o+=`b${p(l)}`),n.value&&(o+="c"),o})),m,e):void 0;return Object.assign(Object.assign({},f),{rtlEnabled:x,mergedClsPrefix:r,contentRef:o,mergedBordered:n,handleClick:function(){if(!e.disabled&&e.checkable){const{checked:o,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":a}=e;r&&r(!o),a&&a(!o),n&&n(!o)}},handleCloseClick:function(o){if(e.triggerClickOnClose||o.stopPropagation(),!e.disabled){const{onClose:n}=e;n&&z(n,o)}},cssVars:a?void 0:m,themeClass:null==y?void 0:y.themeClass,onRender:null==y?void 0:y.onRender})},render(){var e,o;const{mergedClsPrefix:n,rtlEnabled:r,closable:a,color:{borderColor:c}={},round:l,onRender:t,$slots:s}=this;null==t||t();const i=C(s.avatar,(e=>e&&f("div",{class:`${n}-tag__avatar`},e))),d=C(s.icon,(e=>e&&f("div",{class:`${n}-tag__icon`},e)));return f("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:r,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:l,[`${n}-tag--avatar`]:i,[`${n}-tag--icon`]:d,[`${n}-tag--closable`]:a}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},d||i,f("span",{class:`${n}-tag__content`,ref:"contentRef"},null===(o=(e=this.$slots).default)||void 0===o?void 0:o.call(e)),!this.checkable&&a?f(x,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:l,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?f("div",{class:`${n}-tag__border`,style:{borderColor:c}}):null)}});export{_,R as t};
