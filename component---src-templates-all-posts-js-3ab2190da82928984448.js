(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[602],{5420:function(e,t,a){"use strict";var o=a(2122),n=a(1253),r=a(7294),i=a(5505),l=a(8063),c=a(4621),s=r.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.raised,d=void 0!==s&&s,u=(0,n.Z)(e,["classes","className","raised"]);return r.createElement(l.Z,(0,o.Z)({className:(0,i.Z)(a.root,c),elevation:d?8:1,ref:t},u))}));t.Z=(0,c.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},7644:function(e,t,a){"use strict";var o=a(2122),n=a(1253),r=a(7294),i=a(5505),l=a(4621),c=r.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.component,s=void 0===c?"div":c,d=(0,n.Z)(e,["classes","className","component"]);return r.createElement(s,(0,o.Z)({className:(0,i.Z)(a.root,l),ref:t},d))}));t.Z=(0,l.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},6302:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return U}});var o=a(7294),n=a(5444),r=a(2122),i=a(1253),l=a(5505),c=a(4621),s=["video","audio","picture","iframe","img"],d=o.forwardRef((function(e,t){var a=e.children,n=e.classes,c=e.className,d=e.component,u=void 0===d?"div":d,p=e.image,m=e.src,g=e.style,b=(0,i.Z)(e,["children","classes","className","component","image","src","style"]),v=-1!==s.indexOf(u),h=!v&&p?(0,r.Z)({backgroundImage:'url("'.concat(p,'")')},g):g;return o.createElement(u,(0,r.Z)({className:(0,l.Z)(n.root,c,v&&n.media,-1!=="picture img".indexOf(u)&&n.img),ref:t,style:h,src:v?p||m:void 0},b),a)})),u=(0,c.Z)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(d),p=a(5420),m=a(838),g=a(453),b=a(7644),v=a(3332),h=a(8266),f=a(7329),y=a(4699),Z=a(2933);var x=a(7595),C=a(9355),E=a(7055),k=a(9123),N=(0,k.Z)(o.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),P=(0,k.Z)(o.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),w=(0,k.Z)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),z=(0,k.Z)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),$=a(1664),B=o.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.color,s=void 0===c?"standard":c,d=e.component,u=e.disabled,p=void 0!==u&&u,m=e.page,g=e.selected,b=void 0!==g&&g,v=e.shape,h=void 0===v?"round":v,f=e.size,y=void 0===f?"medium":f,Z=e.type,x=void 0===Z?"page":Z,k=e.variant,B=void 0===k?"text":k,M=(0,i.Z)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),L=("rtl"===(0,C.Z)().direction?{previous:z,next:w,last:N,first:P}:{previous:w,next:z,first:N,last:P})[x];return"start-ellipsis"===x||"end-ellipsis"===x?o.createElement("div",{ref:t,className:(0,l.Z)(a.root,a.ellipsis,p&&a.disabled,"medium"!==y&&a["size".concat((0,$.Z)(y))])},"…"):o.createElement(E.Z,(0,r.Z)({ref:t,component:d,disabled:p,focusVisibleClassName:a.focusVisible,className:(0,l.Z)(a.root,a.page,a[B],a[h],n,"standard"!==s&&a["".concat(B).concat((0,$.Z)(s))],p&&a.disabled,b&&a.selected,"medium"!==y&&a["size".concat((0,$.Z)(y))])},M),"page"===x&&m,L?o.createElement(L,{className:a.icon}):null)})),M=(0,c.Z)((function(e){return{root:(0,r.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:(0,x.U1)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat((0,x.U1)(e.palette.primary.main,.5)),backgroundColor:(0,x.U1)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:(0,x.U1)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat((0,x.U1)(e.palette.secondary.main,.5)),backgroundColor:(0,x.U1)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:(0,x.U1)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(B);function L(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var R=o.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,n=e.className,c=e.color,s=void 0===c?"standard":c,d=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),u=void 0===d?L:d,p=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),m=void 0===p?function(e){return o.createElement(M,e)}:p,g=e.shape,b=void 0===g?"round":g,v=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),h=void 0===v?"medium":v,x=e.variant,C=void 0===x?"text":x,E=(0,i.Z)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,o=e.componentName,n=void 0===o?"usePagination":o,l=e.count,c=void 0===l?1:l,s=e.defaultPage,d=void 0===s?1:s,u=e.disabled,p=void 0!==u&&u,m=e.hideNextButton,g=void 0!==m&&m,b=e.hidePrevButton,v=void 0!==b&&b,h=e.onChange,x=e.page,C=e.showFirstButton,E=void 0!==C&&C,k=e.showLastButton,N=void 0!==k&&k,P=e.siblingCount,w=void 0===P?1:P,z=(0,i.Z)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),$=(0,Z.Z)({controlled:x,default:d,name:n,state:"page"}),B=(0,y.Z)($,2),M=B[0],L=B[1],R=function(e,t){x||L(t),h&&h(e,t)},O=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},S=O(1,Math.min(a,c)),I=O(Math.max(c-a+1,a+1),c),V=Math.max(Math.min(M-w,c-a-2*w-1),a+2),U=Math.min(Math.max(M+w,a+2*w+2),I[0]-2),F=[].concat((0,f.Z)(E?["first"]:[]),(0,f.Z)(v?[]:["previous"]),(0,f.Z)(S),(0,f.Z)(V>a+2?["start-ellipsis"]:a+1<c-a?[a+1]:[]),(0,f.Z)(O(V,U)),(0,f.Z)(U<c-a-1?["end-ellipsis"]:c-a>a?[c-a]:[]),(0,f.Z)(I),(0,f.Z)(g?[]:["next"]),(0,f.Z)(N?["last"]:[])),T=function(e){switch(e){case"first":return 1;case"previous":return M-1;case"next":return M+1;case"last":return c;default:return null}},_=F.map((function(e){return"number"==typeof e?{onClick:function(t){R(t,e)},type:"page",page:e,selected:e===M,disabled:p,"aria-current":e===M?"true":void 0}:{onClick:function(t){R(t,T(e))},type:e,page:T(e),selected:!1,disabled:p||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?M>=c:M<=1)}}));return(0,r.Z)({items:_},z)}((0,r.Z)({},e,{componentName:"Pagination"})).items;return o.createElement("nav",(0,r.Z)({"aria-label":"pagination navigation",className:(0,l.Z)(a.root,n),ref:t},E),o.createElement("ul",{className:a.ul},k.map((function(e,t){return o.createElement("li",{key:t},m((0,r.Z)({},e,{color:s,"aria-label":u(e.type,e.page,e.selected),shape:b,size:h,variant:C})))}))))})),O=(0,c.Z)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(R),S=a(2802),I=a(4168),V=a(1633),U=function(e){var t=e.pageContext,a=e.data.allMdx.edges,r=t.currentPage,i=t.numPages,l=1===r,c=r===i,s=r-1==1?"/":(r-1).toString(),d=(r+1).toString();return o.createElement(I.Z,null,o.createElement(V.Z,null),a.map((function(e){var t=e.node,a=t.frontmatter.title||t.frontmatter.slug,r=t.frontmatter.excerpt,i=t.frontmatter.featureImage.childImageSharp.fluid,l=t.frontmatter.date;return o.createElement(p.Z,{key:t.frontmatter.slug,style:{marginBottom:"20px"}},o.createElement(m.Z,{container:!0,style:{padding:"10px"}},o.createElement(m.Z,{item:!0,xs:12},o.createElement(g.Z,{variant:"h6",component:"h6"},a),o.createElement(g.Z,{variant:"subtitle2",component:"p",style:{textAlign:"right"}},"Posted on: ",l),o.createElement("br",null)),o.createElement(m.Z,{item:!0,xs:12,md:3},o.createElement(u,null,o.createElement(S.Z,{fluid:i}))),o.createElement(m.Z,{item:!0,xs:12,md:9},o.createElement(b.Z,null,o.createElement(g.Z,{variant:"subtitle1",component:"p"},r),o.createElement("br",null),o.createElement(v.Z,{onClick:function(){return e=t.frontmatter.slug,void(0,n.c4)("/"+e);var e},variant:"outlined",color:"secondary",size:"small"},"View")))))})),o.createElement("br",null),o.createElement(h.Z,{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},!l&&o.createElement(n.rU,{to:s,rel:"prev",style:{textDecoration:"none"}},o.createElement(g.Z,{variant:"h6",component:"h6"},"← Previous Page")),!c&&o.createElement(n.rU,{to:d,rel:"next",style:{textDecoration:"none"}},o.createElement(g.Z,{variant:"h6",component:"h6"},"Next Page →")),o.createElement("br",null),o.createElement(O,{variant:"outlined",shape:"rounded",count:i,page:r,onChange:function(e,t){(0,n.c4)("/"+(t-1==0?"":t))}})))}}}]);
//# sourceMappingURL=component---src-templates-all-posts-js-3ab2190da82928984448.js.map