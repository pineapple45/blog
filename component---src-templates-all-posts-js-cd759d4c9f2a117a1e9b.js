(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[602],{5420:function(e,t,a){"use strict";var o=a(2122),n=a(1253),r=a(7294),i=a(5505),l=a(8063),c=a(4621),s=r.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.raised,d=void 0!==s&&s,u=(0,n.Z)(e,["classes","className","raised"]);return r.createElement(l.Z,(0,o.Z)({className:(0,i.Z)(a.root,c),elevation:d?8:1,ref:t},u))}));t.Z=(0,c.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},7644:function(e,t,a){"use strict";var o=a(2122),n=a(1253),r=a(7294),i=a(5505),l=a(4621),c=r.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.component,s=void 0===c?"div":c,d=(0,n.Z)(e,["classes","className","component"]);return r.createElement(s,(0,o.Z)({className:(0,i.Z)(a.root,l),ref:t},d))}));t.Z=(0,l.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},9123:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var o=a(2122),n=a(7294),r=a(1253),i=a(5505),l=a(4621),c=a(1664),s=n.forwardRef((function(e,t){var a=e.children,l=e.classes,s=e.className,d=e.color,u=void 0===d?"inherit":d,m=e.component,p=void 0===m?"svg":m,g=e.fontSize,f=void 0===g?"default":g,v=e.htmlColor,h=e.titleAccess,b=e.viewBox,y=void 0===b?"0 0 24 24":b,Z=(0,r.Z)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return n.createElement(p,(0,o.Z)({className:(0,i.Z)(l.root,s,"inherit"!==u&&l["color".concat((0,c.Z)(u))],"default"!==f&&l["fontSize".concat((0,c.Z)(f))]),focusable:"false",viewBox:y,color:v,"aria-hidden":!h||void 0,role:h?"img":void 0,ref:t},Z),a,h?n.createElement("title",null,h):null)}));s.muiName="SvgIcon";var d=(0,l.Z)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(s);function u(e,t){var a=function(t,a){return n.createElement(d,(0,o.Z)({ref:a},t),e)};return a.muiName=d.muiName,n.memo(n.forwardRef(a))}},412:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return U}});var o=a(7294),n=a(5444),r=a(2122),i=a(1253),l=a(5505),c=a(4621),s=["video","audio","picture","iframe","img"],d=o.forwardRef((function(e,t){var a=e.children,n=e.classes,c=e.className,d=e.component,u=void 0===d?"div":d,m=e.image,p=e.src,g=e.style,f=(0,i.Z)(e,["children","classes","className","component","image","src","style"]),v=-1!==s.indexOf(u),h=!v&&m?(0,r.Z)({backgroundImage:'url("'.concat(m,'")')},g):g;return o.createElement(u,(0,r.Z)({className:(0,l.Z)(n.root,c,v&&n.media,-1!=="picture img".indexOf(u)&&n.img),ref:t,style:h,src:v?m||p:void 0},f),a)})),u=(0,c.Z)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(d),m=a(5420),p=a(838),g=a(453),f=a(7644),v=a(3332),h=a(8266),b=a(7329),y=a(4699);function Z(e){var t=e.controlled,a=e.default,n=(e.name,e.state,o.useRef(void 0!==t).current),r=o.useState(a),i=r[0],l=r[1];return[n?t:i,o.useCallback((function(e){n||l(e)}),[])]}var x=a(7595),C=a(4427),E=a(4982);var k=a(2486),N=a(9123),z=(0,N.Z)(o.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),S=(0,N.Z)(o.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),w=(0,N.Z)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),P=(0,N.Z)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),B=a(1664),$=o.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.color,s=void 0===c?"standard":c,d=e.component,u=e.disabled,m=void 0!==u&&u,p=e.page,g=e.selected,f=void 0!==g&&g,v=e.shape,h=void 0===v?"round":v,b=e.size,y=void 0===b?"medium":b,Z=e.type,x=void 0===Z?"page":Z,N=e.variant,$=void 0===N?"text":N,R=(0,i.Z)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),M=("rtl"===((0,C.Z)()||E.Z).direction?{previous:P,next:w,last:z,first:S}:{previous:w,next:P,first:z,last:S})[x];return"start-ellipsis"===x||"end-ellipsis"===x?o.createElement("div",{ref:t,className:(0,l.Z)(a.root,a.ellipsis,m&&a.disabled,"medium"!==y&&a["size".concat((0,B.Z)(y))])},"…"):o.createElement(k.Z,(0,r.Z)({ref:t,component:d,disabled:m,focusVisibleClassName:a.focusVisible,className:(0,l.Z)(a.root,a.page,a[$],a[h],n,"standard"!==s&&a["".concat($).concat((0,B.Z)(s))],m&&a.disabled,f&&a.selected,"medium"!==y&&a["size".concat((0,B.Z)(y))])},R),"page"===x&&p,M?o.createElement(M,{className:a.icon}):null)})),R=(0,c.Z)((function(e){return{root:(0,r.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:(0,x.U1)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat((0,x.U1)(e.palette.primary.main,.5)),backgroundColor:(0,x.U1)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:(0,x.U1)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat((0,x.U1)(e.palette.secondary.main,.5)),backgroundColor:(0,x.U1)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:(0,x.U1)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})($);function M(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var L=o.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,n=e.className,c=e.color,s=void 0===c?"standard":c,d=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),u=void 0===d?M:d,m=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),p=void 0===m?function(e){return o.createElement(R,e)}:m,g=e.shape,f=void 0===g?"round":g,v=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),h=void 0===v?"medium":v,x=e.variant,C=void 0===x?"text":x,E=(0,i.Z)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,o=e.componentName,n=void 0===o?"usePagination":o,l=e.count,c=void 0===l?1:l,s=e.defaultPage,d=void 0===s?1:s,u=e.disabled,m=void 0!==u&&u,p=e.hideNextButton,g=void 0!==p&&p,f=e.hidePrevButton,v=void 0!==f&&f,h=e.onChange,x=e.page,C=e.showFirstButton,E=void 0!==C&&C,k=e.showLastButton,N=void 0!==k&&k,z=e.siblingCount,S=void 0===z?1:z,w=(0,i.Z)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),P=Z({controlled:x,default:d,name:n,state:"page"}),B=(0,y.Z)(P,2),$=B[0],R=B[1],M=function(e,t){x||R(t),h&&h(e,t)},L=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},I=L(1,Math.min(a,c)),O=L(Math.max(c-a+1,a+1),c),V=Math.max(Math.min($-S,c-a-2*S-1),a+2),T=Math.min(Math.max($+S,a+2*S+2),O[0]-2),U=[].concat((0,b.Z)(E?["first"]:[]),(0,b.Z)(v?[]:["previous"]),(0,b.Z)(I),(0,b.Z)(V>a+2?["start-ellipsis"]:a+1<c-a?[a+1]:[]),(0,b.Z)(L(V,T)),(0,b.Z)(T<c-a-1?["end-ellipsis"]:c-a>a?[c-a]:[]),(0,b.Z)(O),(0,b.Z)(g?[]:["next"]),(0,b.Z)(N?["last"]:[])),A=function(e){switch(e){case"first":return 1;case"previous":return $-1;case"next":return $+1;case"last":return c;default:return null}},F=U.map((function(e){return"number"==typeof e?{onClick:function(t){M(t,e)},type:"page",page:e,selected:e===$,disabled:m,"aria-current":e===$?"true":void 0}:{onClick:function(t){M(t,A(e))},type:e,page:A(e),selected:!1,disabled:m||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?$>=c:$<=1)}}));return(0,r.Z)({items:F},w)}((0,r.Z)({},e,{componentName:"Pagination"})).items;return o.createElement("nav",(0,r.Z)({"aria-label":"pagination navigation",className:(0,l.Z)(a.root,n),ref:t},E),o.createElement("ul",{className:a.ul},k.map((function(e,t){return o.createElement("li",{key:t},p((0,r.Z)({},e,{color:s,"aria-label":u(e.type,e.page,e.selected),shape:f,size:h,variant:C})))}))))})),I=(0,c.Z)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(L),O=a(2802),V=a(4151),T=a(1633),U=function(e){var t=e.pageContext,a=e.data.allMdx.edges,r=t.currentPage,i=t.numPages,l=1===r,c=r===i,s=r-1==1?"/":(r-1).toString(),d=(r+1).toString();return o.createElement(V.Z,null,o.createElement(T.Z,null),a.map((function(e){var t=e.node,a=t.frontmatter.title||t.frontmatter.slug,r=t.frontmatter.excerpt,i=t.frontmatter.featureImage.childImageSharp.fluid,l=t.frontmatter.date;return o.createElement(m.Z,{key:t.frontmatter.slug,style:{marginBottom:"20px"}},o.createElement(p.Z,{container:!0,style:{padding:"10px"}},o.createElement(p.Z,{item:!0,xs:12},o.createElement(g.Z,{variant:"h6",component:"h6"},a),o.createElement(g.Z,{variant:"subtitle2",component:"p",style:{textAlign:"right"}},"Posted on: ",l),o.createElement("br",null)),o.createElement(p.Z,{item:!0,xs:12,md:3},o.createElement(u,null,o.createElement(O.Z,{fluid:i}))),o.createElement(p.Z,{item:!0,xs:12,md:9},o.createElement(f.Z,null,o.createElement(g.Z,{variant:"subtitle1",component:"p"},r),o.createElement("br",null),o.createElement(v.Z,{onClick:function(){return e=t.frontmatter.slug,void(0,n.c4)("/"+e);var e},variant:"outlined",color:"secondary",size:"small"},"View")))))})),o.createElement("br",null),o.createElement(h.Z,{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},!l&&o.createElement(n.rU,{to:s,rel:"prev",style:{textDecoration:"none"}},o.createElement(g.Z,{variant:"h6",component:"h6"},"← Previous Page")),!c&&o.createElement(n.rU,{to:d,rel:"next",style:{textDecoration:"none"}},o.createElement(g.Z,{variant:"h6",component:"h6"},"Next Page →")),o.createElement("br",null),o.createElement(I,{variant:"outlined",shape:"rounded",count:i,page:r,onChange:function(e,t){(0,n.c4)("/"+(t-1==0?"":t))}})))}}}]);
//# sourceMappingURL=component---src-templates-all-posts-js-cd759d4c9f2a117a1e9b.js.map