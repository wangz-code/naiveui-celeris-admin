import{p as e,_ as s}from"./Popover-CamQFX_5.js";import{C as o,d as r,D as t,a as i,l as p,v as a,dr as n}from"./index-DMvMf093.js";const l=r({name:"Tooltip",props:Object.assign(Object.assign({},e),o.props),__popover__:!0,setup(e){const{mergedClsPrefixRef:s}=t(e),r=o("Tooltip","-tooltip",void 0,n,e,s),a=i(null),l={syncPosition(){a.value.syncPosition()},setShow(e){a.value.setShow(e)}};return Object.assign(Object.assign({},l),{popoverRef:a,mergedTheme:r,popoverThemeOverrides:p((()=>r.value.self))})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return a(s,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{l as _};
