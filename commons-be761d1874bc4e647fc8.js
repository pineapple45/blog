(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{8266:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var n=r(7329),o=r(2122),i=(r(5697),r(4131));var a=function(e){var t=function(t){var r=e(t);return t.css?(0,o.Z)({},(0,i.Z)(r,e((0,o.Z)({theme:t.theme},t.css))),function(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat((0,n.Z)(e.filterProps)),t};var c=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=function(e){return t.reduce((function(t,r){var n=r(e);return n?(0,i.Z)(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},s=r(6156),p=r(3592);function u(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var l=function(e){var t=e.prop,r=e.cssProperty,n=void 0===r?e.prop:r,o=e.themeKey,i=e.transform,a=function(e){if(null==e[t])return null;var r=e[t],a=u(e.theme,o)||{};return(0,p.k)(e,r,(function(e){var t;return"function"==typeof a?t=a(e):Array.isArray(a)?t=a[e]||e:(t=u(a,e)||e,i&&(t=i(t))),!1===n?t:(0,s.Z)({},n,t)}))};return a.propTypes={},a.filterProps=[t],a};function f(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var d=c(l({prop:"border",themeKey:"borders",transform:f}),l({prop:"borderTop",themeKey:"borders",transform:f}),l({prop:"borderRight",themeKey:"borders",transform:f}),l({prop:"borderBottom",themeKey:"borders",transform:f}),l({prop:"borderLeft",themeKey:"borders",transform:f}),l({prop:"borderColor",themeKey:"palette"}),l({prop:"borderRadius",themeKey:"shape"})),y=c(l({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),l({prop:"display"}),l({prop:"overflow"}),l({prop:"textOverflow"}),l({prop:"visibility"}),l({prop:"whiteSpace"})),h=c(l({prop:"flexBasis"}),l({prop:"flexDirection"}),l({prop:"flexWrap"}),l({prop:"justifyContent"}),l({prop:"alignItems"}),l({prop:"alignContent"}),l({prop:"order"}),l({prop:"flex"}),l({prop:"flexGrow"}),l({prop:"flexShrink"}),l({prop:"alignSelf"}),l({prop:"justifyItems"}),l({prop:"justifySelf"})),m=c(l({prop:"gridGap"}),l({prop:"gridColumnGap"}),l({prop:"gridRowGap"}),l({prop:"gridColumn"}),l({prop:"gridRow"}),l({prop:"gridAutoFlow"}),l({prop:"gridAutoColumns"}),l({prop:"gridAutoRows"}),l({prop:"gridTemplateColumns"}),l({prop:"gridTemplateRows"}),l({prop:"gridTemplateAreas"}),l({prop:"gridArea"})),g=c(l({prop:"position"}),l({prop:"zIndex",themeKey:"zIndex"}),l({prop:"top"}),l({prop:"right"}),l({prop:"bottom"}),l({prop:"left"})),b=c(l({prop:"color",themeKey:"palette"}),l({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),v=l({prop:"boxShadow",themeKey:"shadows"});function w(e){return e<=1?"".concat(100*e,"%"):e}var T=l({prop:"width",transform:w}),x=l({prop:"maxWidth",transform:w}),C=l({prop:"minWidth",transform:w}),A=l({prop:"height",transform:w}),S=l({prop:"maxHeight",transform:w}),O=l({prop:"minHeight",transform:w}),E=(l({prop:"size",cssProperty:"width",transform:w}),l({prop:"size",cssProperty:"height",transform:w}),c(T,x,C,A,S,O,l({prop:"boxSizing"}))),j=c(l({prop:"fontFamily",themeKey:"typography"}),l({prop:"fontSize",themeKey:"typography"}),l({prop:"fontStyle",themeKey:"typography"}),l({prop:"fontWeight",themeKey:"typography"}),l({prop:"letterSpacing"}),l({prop:"lineHeight"}),l({prop:"textAlign"})),P=r(5408),k=r(2112),I=r(4982),M=function(e){var t=(0,k.Z)(e);return function(e,r){return t(e,(0,o.Z)({defaultTheme:I.Z},r))}},L=a(c(d,y,h,m,g,b,v,E,P.Z,j)),N=M("div")(L,{name:"MuiBox"})},838:function(e,t,r){"use strict";var n=r(1253),o=r(2122),i=r(7294),a=r(5505),c=r(4621),s=[0,1,2,3,4,5,6,7,8,9,10],p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=parseFloat(e);return"".concat(r/t).concat(String(e).replace(String(r),"")||"px")}var l=i.forwardRef((function(e,t){var r=e.alignContent,c=void 0===r?"stretch":r,s=e.alignItems,p=void 0===s?"stretch":s,u=e.classes,l=e.className,f=e.component,d=void 0===f?"div":f,y=e.container,h=void 0!==y&&y,m=e.direction,g=void 0===m?"row":m,b=e.item,v=void 0!==b&&b,w=e.justify,T=void 0===w?"flex-start":w,x=e.lg,C=void 0!==x&&x,A=e.md,S=void 0!==A&&A,O=e.sm,E=void 0!==O&&O,j=e.spacing,P=void 0===j?0:j,k=e.wrap,I=void 0===k?"wrap":k,M=e.xl,L=void 0!==M&&M,N=e.xs,R=void 0!==N&&N,Z=e.zeroMinWidth,B=void 0!==Z&&Z,_=(0,n.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),W=(0,a.Z)(u.root,l,h&&[u.container,0!==P&&u["spacing-xs-".concat(String(P))]],v&&u.item,B&&u.zeroMinWidth,"row"!==g&&u["direction-xs-".concat(String(g))],"wrap"!==I&&u["wrap-xs-".concat(String(I))],"stretch"!==p&&u["align-items-xs-".concat(String(p))],"stretch"!==c&&u["align-content-xs-".concat(String(c))],"flex-start"!==T&&u["justify-xs-".concat(String(T))],!1!==R&&u["grid-xs-".concat(String(R))],!1!==E&&u["grid-sm-".concat(String(E))],!1!==S&&u["grid-md-".concat(String(S))],!1!==C&&u["grid-lg-".concat(String(C))],!1!==L&&u["grid-xl-".concat(String(L))]);return i.createElement(d,(0,o.Z)({className:W,ref:t},_))})),f=(0,c.Z)((function(e){return(0,o.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var r={};return s.forEach((function(n){var o=e.spacing(n);0!==o&&(r["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(u(o,2)),width:"calc(100% + ".concat(u(o),")"),"& > $item":{padding:u(o,2)}})})),r}(e,"xs"),e.breakpoints.keys.reduce((function(t,r){return function(e,t,r){var n={};p.forEach((function(e){var t="grid-".concat(r,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===r?(0,o.Z)(e,n):e[t.breakpoints.up(r)]=n}(t,e,r),t}),{}))}),{name:"MuiGrid"})(l);t.Z=f},453:function(e,t,r){"use strict";var n=r(2122),o=r(1253),i=r(7294),a=r(5505),c=r(4621),s=r(1664),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=i.forwardRef((function(e,t){var r=e.align,c=void 0===r?"inherit":r,u=e.classes,l=e.className,f=e.color,d=void 0===f?"initial":f,y=e.component,h=e.display,m=void 0===h?"initial":h,g=e.gutterBottom,b=void 0!==g&&g,v=e.noWrap,w=void 0!==v&&v,T=e.paragraph,x=void 0!==T&&T,C=e.variant,A=void 0===C?"body1":C,S=e.variantMapping,O=void 0===S?p:S,E=(0,o.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),j=y||(x?"p":O[A]||p[A])||"span";return i.createElement(j,(0,n.Z)({className:(0,a.Z)(u.root,l,"inherit"!==A&&u[A],"initial"!==d&&u["color".concat((0,s.Z)(d))],w&&u.noWrap,b&&u.gutterBottom,x&&u.paragraph,"inherit"!==c&&u["align".concat((0,s.Z)(c))],"initial"!==m&&u["display".concat((0,s.Z)(m))]),ref:t},E))}));t.Z=(0,c.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,s,p,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(!i(e[s],a[s]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!i(s.value[1],a.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(p=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,p[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==p[s]&&"__v"!==p[s]&&"__o"!==p[s]||!e.$$typeof)&&!i(e[p[s]],a[p[s]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,p=[];function u(){s=e(p.map((function(e){return e.props}))),l.canUseDOM?t(s):r&&(s=r(s))}var l=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,p=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){p.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),u()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(l,"canUseDOM",c),l}}},1633:function(e,t,r){"use strict";r.d(t,{Z:function(){return be}});var n,o,i,a,c=r(7294),s=r(5697),p=r.n(s),u=r(4839),l=r.n(u),f=r(2993),d=r.n(f),y=r(6494),h=r.n(y),m="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",x="href",C="http-equiv",A="innerHTML",S="itemprop",O="name",E="property",j="rel",P="src",k="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",L="defer",N="encodeSpecialCharacters",R="onChangeClientState",Z="titleTemplate",B=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),_=[v.NOSCRIPT,v.SCRIPT,v.STYLE],W="data-react-helmet",K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},U=function(e){var t=J(e,v.TITLE),r=J(e,Z);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,M);return t||n||void 0},G=function(e){return J(e,R)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},X=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+K(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||r===j&&"canonical"===e[r].toLowerCase()||s===j&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==A&&c!==T&&c!==S||(r=c)}if(!r||!e[r])return!1;var p=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][p]&&(o[r][p]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=h()({},n[c],o[c]);n[c]=s}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:r.g.requestAnimationFrame||Q,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,p=e.scriptTags,u=e.styleTags,l=e.title,f=e.titleAttributes;se(v.BODY,n),se(v.HTML,o),ce(l,f);var d={baseTag:pe(v.BASE,r),linkTags:pe(v.LINK,i),metaTags:pe(v.META,a),noscriptTags:pe(v.NOSCRIPT,c),scriptTags:pe(v.SCRIPT,p),styleTags:pe(v.STYLE,u)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,y,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),se(v.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(W),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],p=t[s]||"";r.getAttribute(s)!==p&&r.setAttribute(s,p),-1===o.indexOf(s)&&o.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var l=i.length-1;l>=0;l--)r.removeAttribute(i[l]);o.length===i.length?r.removeAttribute(W):r.getAttribute(W)!==a.join(",")&&r.setAttribute(W,a.join(","))}},pe=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(W,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[W]=!0,o=le(r,n),[c.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ue(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Y(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case m:case g:return{toComponent:function(){return le(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[W]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===A||r===T){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,p=e.styleTags,u=e.title,l=void 0===u?"":u,f=e.titleAttributes;return{base:fe(v.BASE,t,n),bodyAttributes:fe(m,r,n),htmlAttributes:fe(g,o,n),link:fe(v.LINK,i,n),meta:fe(v.META,a,n),noscript:fe(v.NOSCRIPT,c,n),script:fe(v.SCRIPT,s,n),style:fe(v.STYLE,p,n),title:fe(v.TITLE,{title:l,titleAttributes:f},n)}},ye=l()((function(e){return{baseTag:$([x,k],e),bodyAttributes:V(m,e),defer:J(e,L),encode:J(e,N),htmlAttributes:V(g,e),linkTags:X(v.LINK,[j,x],e),metaTags:X(v.META,[O,w,C,E,S],e),noscriptTags:X(v.NOSCRIPT,[A],e),onChangeClientState:G(e),scriptTags:X(v.SCRIPT,[P,A],e),styleTags:X(v.STYLE,[T],e),title:U(e),titleAttributes:V(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),he=(o=ye,a=i=function(e){function t(){return z(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return H({},n,((t={})[r.type]=[].concat(n[r.type]||[],[H({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case v.TITLE:return H({},o,((t={})[n.type]=a,t.titleAttributes=H({},i),t));case v.BODY:return H({},o,{bodyAttributes:H({},i)});case v.HTML:return H({},o,{htmlAttributes:H({},i)})}return H({},o,((r={})[n.type]=H({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=H({},t);return Object.keys(e).forEach((function(t){var n;r=H({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(q(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=q(e,["children"]),n=H({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},D(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:p().object,bodyAttributes:p().object,children:p().oneOfType([p().arrayOf(p().node),p().node]),defaultTitle:p().string,defer:p().bool,encodeSpecialCharacters:p().bool,htmlAttributes:p().object,link:p().arrayOf(p().object),meta:p().arrayOf(p().object),noscript:p().arrayOf(p().object),onChangeClientState:p().func,script:p().arrayOf(p().object),style:p().arrayOf(p().object),title:p().string,titleAttributes:p().object,titleTemplate:p().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var me=r(5444),ge="3079204723",be=function(e){var t=e.description,r=e.keywords,n=e.title,o=e.image,i=e.url,a=e.author;return c.createElement(me.i1,{query:ge,render:function(e){var s=t||e.site.siteMetadata.description,p=n||e.site.siteMetadata.title,u=a||e.site.siteMetadata.author,l=i||e.site.siteMetadata.url,f=o||e.site.siteMetadata.image,d=r||["gatsby-blog","web-devlopement-&-machine-&-deep-learning-blog","static-website","mdx-gatsby-blog"];return c.createElement(he,{title:p,htmlAttributes:{lang:"en"},meta:[{name:"google-site-verification",content:"71cWx1ID2lznPcYeaPWglNrACVAeqXAlXleUcm4_5HE"},{name:"description",content:s},{name:"og:title",content:p},{name:"og:description",content:s},{name:"og:type",content:"website"},{property:"og:image",content:f},{property:"og:url",content:l},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:u},{name:"twitter:title",content:p},{name:"twitter:description",content:s},{name:"twitter:image",content:f}].concat(d&&d.length>0?{name:"keywords",content:d.join(", ")}:[])})}})}}}]);
//# sourceMappingURL=commons-be761d1874bc4e647fc8.js.map