import{an as e,i as o,aq as n,a as r,as as t,aZ as a,D as i,ax as d,z as l,A as s,Q as u,y as b,U as c,C as v,d as p,aR as g,at as h,F as f,l as m,Y as x,G as R,b3 as z,v as C}from"./index-DMvMf093.js";import{u as k}from"./use-merged-state-DFPSula7.js";import{g as y}from"./get-slot-BjAOOWF7.js";const w={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},B=e("n-radio-group");function S(e){const l=o(B,null),s=n(e,{mergedSize(o){const{size:n}=e;if(void 0!==n)return n;if(l){const{mergedSizeRef:{value:e}}=l;if(void 0!==e)return e}return o?o.mergedSize.value:"medium"},mergedDisabled:o=>!!e.disabled||(!!(null==l?void 0:l.disabledRef.value)||!!(null==o?void 0:o.disabled.value))}),{mergedSizeRef:u,mergedDisabledRef:b}=s,c=r(null),v=r(null),p=r(e.defaultChecked),g=t(e,"checked"),h=k(g,p),f=a((()=>l?l.valueRef.value===e.value:h.value)),m=a((()=>{const{name:o}=e;return void 0!==o?o:l?l.nameRef.value:void 0})),x=r(!1);function R(){b.value||f.value||function(){if(l){const{doUpdateValue:o}=l,{value:n}=e;d(o,n)}else{const{onUpdateChecked:o,"onUpdate:checked":n}=e,{nTriggerFormInput:r,nTriggerFormChange:t}=s;o&&d(o,!0),n&&d(n,!0),r(),t(),p.value=!0}}()}return{mergedClsPrefix:l?l.mergedClsPrefixRef:i(e).mergedClsPrefixRef,inputRef:c,labelRef:v,mergedName:m,mergedDisabled:b,renderSafeChecked:f,focus:x,mergedSize:u,handleRadioInputChange:function(){R(),c.value&&(c.value.checked=f.value)},handleRadioInputBlur:function(){x.value=!1},handleRadioInputFocus:function(){x.value=!0}}}const F=l("radio-group","\n display: inline-block;\n font-size: var(--n-font-size);\n",[s("splitor","\n display: inline-block;\n vertical-align: bottom;\n width: 1px;\n transition:\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n background: var(--n-button-border-color);\n ",[u("checked",{backgroundColor:"var(--n-button-border-color-active)"}),u("disabled",{opacity:"var(--n-opacity-disabled)"})]),u("button-group","\n white-space: nowrap;\n height: var(--n-height);\n line-height: var(--n-height);\n ",[l("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),s("splitor",{height:"var(--n-height)"})]),l("radio-button","\n vertical-align: bottom;\n outline: none;\n position: relative;\n user-select: none;\n -webkit-user-select: none;\n display: inline-block;\n box-sizing: border-box;\n padding-left: 14px;\n padding-right: 14px;\n white-space: nowrap;\n transition:\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n background: var(--n-button-color);\n color: var(--n-button-text-color);\n border-top: 1px solid var(--n-button-border-color);\n border-bottom: 1px solid var(--n-button-border-color);\n ",[l("radio-input","\n pointer-events: none;\n position: absolute;\n border: 0;\n border-radius: inherit;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n opacity: 0;\n z-index: 1;\n "),s("state-border","\n z-index: 1;\n pointer-events: none;\n position: absolute;\n box-shadow: var(--n-button-box-shadow);\n transition: box-shadow .3s var(--n-bezier);\n left: -1px;\n bottom: -1px;\n right: -1px;\n top: -1px;\n "),b("&:first-child","\n border-top-left-radius: var(--n-button-border-radius);\n border-bottom-left-radius: var(--n-button-border-radius);\n border-left: 1px solid var(--n-button-border-color);\n ",[s("state-border","\n border-top-left-radius: var(--n-button-border-radius);\n border-bottom-left-radius: var(--n-button-border-radius);\n ")]),b("&:last-child","\n border-top-right-radius: var(--n-button-border-radius);\n border-bottom-right-radius: var(--n-button-border-radius);\n border-right: 1px solid var(--n-button-border-color);\n ",[s("state-border","\n border-top-right-radius: var(--n-button-border-radius);\n border-bottom-right-radius: var(--n-button-border-radius);\n ")]),c("disabled","\n cursor: pointer;\n ",[b("&:hover",[s("state-border","\n transition: box-shadow .3s var(--n-bezier);\n box-shadow: var(--n-button-box-shadow-hover);\n "),c("checked",{color:"var(--n-button-text-color-hover)"})]),u("focus",[b("&:not(:active)",[s("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),u("checked","\n background: var(--n-button-color-active);\n color: var(--n-button-text-color-active);\n border-color: var(--n-button-border-color-active);\n "),u("disabled","\n cursor: not-allowed;\n opacity: var(--n-opacity-disabled);\n ")])]);const T=p({name:"RadioGroup",props:Object.assign(Object.assign({},v.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),setup(e){const o=r(null),{mergedSizeRef:a,mergedDisabledRef:l,nTriggerFormChange:s,nTriggerFormInput:u,nTriggerFormBlur:b,nTriggerFormFocus:c}=n(e),{mergedClsPrefixRef:p,inlineThemeDisabled:z,mergedRtlRef:C}=i(e),y=v("Radio","-radio-group",F,g,e,p),w=r(e.defaultValue),S=t(e,"value"),T=k(S,w);h(B,{mergedClsPrefixRef:p,nameRef:t(e,"name"),valueRef:T,disabledRef:l,mergedSizeRef:a,doUpdateValue:function(o){const{onUpdateValue:n,"onUpdate:value":r}=e;n&&d(n,o),r&&d(r,o),w.value=o,s(),u()}});const U=f("Radio",C,p),V=m((()=>{const{value:e}=a,{common:{cubicBezierEaseInOut:o},self:{buttonBorderColor:n,buttonBorderColorActive:r,buttonBorderRadius:t,buttonBoxShadow:i,buttonBoxShadowFocus:d,buttonBoxShadowHover:l,buttonColor:s,buttonColorActive:u,buttonTextColor:b,buttonTextColorActive:c,buttonTextColorHover:v,opacityDisabled:p,[x("buttonHeight",e)]:g,[x("fontSize",e)]:h}}=y.value;return{"--n-font-size":h,"--n-bezier":o,"--n-button-border-color":n,"--n-button-border-color-active":r,"--n-button-border-radius":t,"--n-button-box-shadow":i,"--n-button-box-shadow-focus":d,"--n-button-box-shadow-hover":l,"--n-button-color":s,"--n-button-color-active":u,"--n-button-text-color":b,"--n-button-text-color-hover":v,"--n-button-text-color-active":c,"--n-height":g,"--n-opacity-disabled":p}})),_=z?R("radio-group",m((()=>a.value[0])),V,e):void 0;return{selfElRef:o,rtlEnabled:U,mergedClsPrefix:p,mergedValue:T,handleFocusout:function(e){const{value:n}=o;n&&(n.contains(e.relatedTarget)||b())},handleFocusin:function(e){const{value:n}=o;n&&(n.contains(e.relatedTarget)||c())},cssVars:z?void 0:V,themeClass:null==_?void 0:_.themeClass,onRender:null==_?void 0:_.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:n,handleFocusin:r,handleFocusout:t}=this,{children:a,isButtonGroup:i}=function(e,o,n){var r;const t=[];let a=!1;for(let i=0;i<e.length;++i){const d=e[i],l=null===(r=d.type)||void 0===r?void 0:r.name;"RadioButton"===l&&(a=!0);const s=d.props;if("RadioButton"===l)if(0===i)t.push(d);else{const e=t[t.length-1].props,r=o===e.value,a=e.disabled,i=o===s.value,l=s.disabled,u=(r?2:0)+(a?0:1),b=(i?2:0)+(l?0:1),c={[`${n}-radio-group__splitor--disabled`]:a,[`${n}-radio-group__splitor--checked`]:r},v=u<b?{[`${n}-radio-group__splitor--disabled`]:l,[`${n}-radio-group__splitor--checked`]:i}:c;t.push(C("div",{class:[`${n}-radio-group__splitor`,v]}),d)}else t.push(d)}return{children:t,isButtonGroup:a}}(z(y(this)),o,n);return null===(e=this.onRender)||void 0===e||e.call(this),C("div",{onFocusin:r,onFocusout:t,ref:"selfElRef",class:[`${n}-radio-group`,this.rtlEnabled&&`${n}-radio-group--rtl`,this.themeClass,i&&`${n}-radio-group--button-group`],style:this.cssVars},a)}});export{T as _,w as r,S as s};
