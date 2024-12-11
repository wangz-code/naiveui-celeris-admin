import{a as e,l as t,aZ as l,at as n,d as i,i as o,bN as r,a2 as s,c$ as u,aP as a,as as d,aS as c,aV as f,v as h,ab as m,a$ as v}from"./index-DMvMf093.js";import{c as p,b as g}from"./Popover-CamQFX_5.js";import{b}from"./next-frame-once-DiJwGkuW.js";function y(e){return e&-e}class R{constructor(e,t){this.l=e,this.min=t;const l=new Array(e+1);for(let n=0;n<e+1;++n)l[n]=0;this.ft=l}add(e,t){if(0===t)return;const{l:l,ft:n}=this;for(e+=1;e<=l;)n[e]+=t,e+=y(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(void 0===e&&(e=this.l),e<=0)return 0;const{ft:t,min:l,l:n}=this;if(e>n)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*l;for(;e>0;)i+=t[e],e-=y(e);return i}getBound(e){let t=0,l=this.l;for(;l>t;){const n=Math.floor((t+l)/2),i=this.sum(n);if(i>e)l=n;else{if(!(i<e))return n;if(t===n)return this.sum(t+1)<=e?t+1:n;t=n}}return t}}let I,w;function S(){return"undefined"==typeof document?1:(void 0===w&&(w="chrome"in window?window.devicePixelRatio:1),w)}const x="VVirtualListXScroll";const C=i({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:t,columnsRef:l,getLeft:n,renderColRef:i,renderItemWithColsRef:r}=o(x);return{startIndex:e,endIndex:t,columns:l,renderCol:i,renderItemWithCols:r,getLeft:n}},render(){const{startIndex:e,endIndex:t,columns:l,renderCol:n,renderItemWithCols:i,getLeft:o,item:r}=this;if(null!=i)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:l,item:r,getLeft:o});if(null!=n){const i=[];for(let s=e;s<=t;++s){const e=l[s];i.push(n({column:e,left:o(s),item:r}))}return i}return null}}),T=g(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[g("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[g("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),z=i({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(i){const o=r();T.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:p,ssr:o}),s((()=>{const{defaultScrollIndex:e,defaultScrollKey:t}=i;null!=e?M({index:e}):null!=t&&M({key:t})}));let h=!1,m=!1;u((()=>{h=!1,m?M({top:B.value,left:y.value}):m=!0})),a((()=>{h=!0,m||(m=!0)}));const v=l((()=>{if(null==i.renderCol&&null==i.renderItemWithCols)return;if(0===i.columns.length)return;let e=0;return i.columns.forEach((t=>{e+=t.width})),e})),g=t((()=>{const e=new Map,{keyField:t}=i;return i.items.forEach(((l,n)=>{e.set(l[t],n)})),e})),{scrollLeftRef:y,listWidthRef:w}=function({columnsRef:i,renderColRef:o,renderItemWithColsRef:r}){const s=e(0),u=e(0),a=t((()=>{const e=i.value;if(0===e.length)return null;const t=new R(e.length,0);return e.forEach(((e,l)=>{t.add(l,e.width)})),t})),d=l((()=>{const e=a.value;return null!==e?Math.max(e.getBound(u.value)-1,0):0})),c=l((()=>{const e=a.value;return null!==e?Math.min(e.getBound(u.value+s.value)+1,i.value.length-1):0}));return n(x,{startIndexRef:d,endIndexRef:c,columnsRef:i,renderColRef:o,renderItemWithColsRef:r,getLeft:e=>{const t=a.value;return null!==t?t.sum(e):0}}),{listWidthRef:s,scrollLeftRef:u}}({columnsRef:d(i,"columns"),renderColRef:d(i,"renderCol"),renderItemWithColsRef:d(i,"renderItemWithCols")}),C=e(null),z=e(void 0),W=new Map,L=t((()=>{const{items:e,itemSize:t,keyField:l}=i,n=new R(e.length,t);return e.forEach(((e,t)=>{const i=e[l],o=W.get(i);void 0!==o&&n.add(t,o)})),n})),k=e(0),B=e(0),F=l((()=>Math.max(L.value.getBound(B.value-c(i.paddingTop))-1,0))),E=t((()=>{const{value:e}=z;if(void 0===e)return[];const{items:t,itemSize:l}=i,n=F.value,o=Math.min(n+Math.ceil(e/l+1),t.length-1),r=[];for(let i=n;i<=o;++i)r.push(t[i]);return r})),M=(e,t)=>{if("number"==typeof e)return void A(e,t,"auto");const{left:l,top:n,index:i,key:o,position:r,behavior:s,debounce:u=!0}=e;if(void 0!==l||void 0!==n)A(l,n,s);else if(void 0!==i)H(i,s,u);else if(void 0!==o){const e=g.value.get(o);void 0!==e&&H(e,s,u)}else"bottom"===r?A(0,Number.MAX_SAFE_INTEGER,s):"top"===r&&A(0,0,s)};let N,j=null;function H(e,t,l){const{value:n}=L,o=n.sum(e)+c(i.paddingTop);if(l){N=e,null!==j&&window.clearTimeout(j),j=window.setTimeout((()=>{N=void 0,j=null}),16);const{scrollTop:l,offsetHeight:i}=C.value;if(o>l){const r=n.get(e);o+r<=l+i||C.value.scrollTo({left:0,top:o+r-i,behavior:t})}else C.value.scrollTo({left:0,top:o,behavior:t})}else C.value.scrollTo({left:0,top:o,behavior:t})}function A(e,t,l){C.value.scrollTo({left:e,top:t,behavior:l})}const V=!("undefined"!=typeof document&&(void 0===I&&(I="matchMedia"in window&&window.matchMedia("(pointer:coarse)").matches),I));let $=!1;function O(){const{value:e}=C;null!=e&&(B.value=e.scrollTop,y.value=e.scrollLeft)}function P(e){let t=e;for(;null!==t;){if("none"===t.style.display)return!0;t=t.parentElement}return!1}return{listHeight:z,listStyle:{overflow:"auto"},keyToIndex:g,itemsStyle:t((()=>{const{itemResizable:e}=i,t=f(L.value.sum());return k.value,[i.itemsStyle,{boxSizing:"content-box",width:f(v.value),height:e?"":t,minHeight:e?t:"",paddingTop:f(i.paddingTop),paddingBottom:f(i.paddingBottom)}]})),visibleItemsStyle:t((()=>(k.value,{transform:`translateY(${f(L.value.sum(F.value))})`}))),viewportItems:E,listElRef:C,itemsElRef:e(null),scrollTo:M,handleListResize:function(e){if(h)return;if(P(e.target))return;if(null==i.renderCol&&null==i.renderItemWithCols){if(e.contentRect.height===z.value)return}else if(e.contentRect.height===z.value&&e.contentRect.width===w.value)return;z.value=e.contentRect.height,w.value=e.contentRect.width;const{onResize:t}=i;void 0!==t&&t(e)},handleListScroll:function(e){var t;null===(t=i.onScroll)||void 0===t||t.call(i,e),V&&$||O()},handleListWheel:function(e){var t;if(null===(t=i.onWheel)||void 0===t||t.call(i,e),V){const t=C.value;if(null!=t){if(0===e.deltaX){if(0===t.scrollTop&&e.deltaY<=0)return;if(t.scrollTop+t.offsetHeight>=t.scrollHeight&&e.deltaY>=0)return}e.preventDefault(),t.scrollTop+=e.deltaY/S(),t.scrollLeft+=e.deltaX/S(),O(),$=!0,b((()=>{$=!1}))}}},handleItemResize:function(e,t){var l,n,o;if(h)return;if(i.ignoreItemResize)return;if(P(t.target))return;const{value:r}=L,s=g.value.get(e),u=r.get(s),a=null!==(o=null===(n=null===(l=t.borderBoxSize)||void 0===l?void 0:l[0])||void 0===n?void 0:n.blockSize)&&void 0!==o?o:t.contentRect.height;if(a===u)return;0===a-i.itemSize?W.delete(e):W.set(e,a-i.itemSize);const d=a-u;if(0===d)return;r.add(s,d);const c=C.value;if(null!=c){if(void 0===N){const e=r.sum(s);c.scrollTop>e&&c.scrollBy(0,d)}else if(s<N)c.scrollBy(0,d);else if(s===N){a+r.sum(s)>c.scrollTop+c.offsetHeight&&c.scrollBy(0,d)}O()}k.value++}}},render(){const{itemResizable:e,keyField:t,keyToIndex:l,visibleItemsTag:n}=this;return h(v,{onResize:this.handleListResize},{default:()=>{var i,o;return h("div",m(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[0!==this.items.length?h("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[h(n,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:n,renderItemWithCols:i}=this;return this.viewportItems.map((o=>{const r=o[t],s=l.get(r),u=null!=n?h(C,{index:s,item:o}):void 0,a=null!=i?h(C,{index:s,item:o}):void 0,d=this.$slots.default({item:o,renderedCols:u,renderedItemWithCols:a,index:s})[0];return e?h(v,{key:r,onResize:e=>this.handleItemResize(r,e)},{default:()=>d}):(d.key=r,d)}))}})]):null===(o=(i=this.$slots).empty)||void 0===o?void 0:o.call(i)])}})}}),W=i({props:{onFocus:Function,onBlur:Function},setup:e=>()=>h("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})});export{W as F,z as V};
