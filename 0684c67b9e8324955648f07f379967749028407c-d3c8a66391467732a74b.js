(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[74],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,u,c,l;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(u=s;0!=u--;)if(!a(e[u],o[u]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!o.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!a(u.value[1],o.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!o.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(u=s;0!=u--;)if(e[u]!==o[u])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(u=s;0!=u--;)if(!Object.prototype.hasOwnProperty.call(o,c[u]))return!1;if(t&&e instanceof Element)return!1;for(u=s;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!e.$$typeof)&&!a(e[c[u]],o[c[u]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,i=r(7294),a=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function l(){u=e(c.map((function(e){return e.props}))),d.canUseDOM?t(u):r&&(u=r(u))}var d=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){c.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),l()},o.render=function(){return a.createElement(n,this.props)},i}(i.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},1496:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var i,a=n(r(1506)),o=n(r(5354)),s=n(r(7316)),u=n(r(7154)),c=n(r(7294)),l=n(r(5697)),d=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,u.default)({},e),r=t.resolutions,n=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,r=e.fixed,n=g(t||r||[]);return n&&n.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),y=function(e){var t=f(e),r=h(t);return m[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,w=v&&window.IntersectionObserver,T=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:a}),r&&c.default.createElement("source",{media:i,srcSet:r,sizes:a}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function O(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function C(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function A(e,t){var r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:r)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var L=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(T.has(e.target)){var t=T.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),T.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),T.set(e,t)),function(){r.unobserve(e),T.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?A(e,!0):"")+A(e)})).join("")+"<img "+c+o+s+r+n+t+a+i+u+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,i=e.generateSources,a=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(x,(0,u.default)({ref:t,src:r},a,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,i(n),s):s})),x=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,i=e.src,a=e.style,o=e.onLoad,l=e.onError,f=e.loading,p=e.draggable,h=e.ariaHidden,g=(0,s.default)(e,d);return c.default.createElement("img",(0,u.default)({"aria-hidden":h,sizes:r,srcSet:n,src:i},g,{onLoad:o,onError:l,ref:t,loading:f,draggable:p,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));x.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var k=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&y(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&w&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||v&&(b||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)(r)),r.handleRef=r.handleRef.bind((0,a.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:y(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=y(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),(r=h(t))&&(m[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,d=void 0===l?{}:l,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,T=e.loading,E=e.draggable,A=h||m;if(!A)return null;var L=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,u.default)({opacity:L?1:0,transition:k?"opacity "+b+"ms":"none"},s),R="boolean"==typeof y?"lightgray":y,M={transitionDelay:b+"ms"},N=(0,u.default)({opacity:this.state.imgLoaded?0:1},k&&M,s,d),H={title:t,alt:this.state.isVisible?"":r,style:N,className:p,itemProp:w},_=this.state.isHydrated?g(A):A[0];if(h)return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden",maxWidth:_.maxWidth?_.maxWidth+"px":null,maxHeight:_.maxHeight?_.maxHeight+"px":null},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),R&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&M)}),_.base64&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:H,imageVariants:A,generateSources:C}),_.tracedSVG&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:H,imageVariants:A,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,S(A),c.default.createElement(x,{alt:r,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:T,draggable:E})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,u.default)({alt:r,title:t,loading:T},_,{imageVariants:A}))}}));if(m){var z=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},a);return"inherit"===a.display&&delete z.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},R&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:R,width:_.width,opacity:this.state.imgLoaded?0:1,height:_.height},k&&M)}),_.base64&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:H,imageVariants:A,generateSources:C}),_.tracedSVG&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:H,imageVariants:A,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,S(A),c.default.createElement(x,{alt:r,title:t,width:_.width,height:_.height,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:T,draggable:E})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,u.default)({alt:r,title:t,loading:T},_,{imageVariants:A}))}}))}return null},t}(c.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),R=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});function M(e){return function(t,r,n){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");l.default.checkPropTypes(((i={})[r]=e,i),t,"prop",n)}}k.propTypes={resolutions:P,sizes:R,fixed:M(l.default.oneOfType([P,l.default.arrayOf(P)])),fluid:M(l.default.oneOfType([R,l.default.arrayOf(R)])),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var N=k;t.Z=N},2802:function(e,t,r){"use strict";var n=r(7294),i=r(5444),a=r(1496);t.Z=function(e){var t=e.fluid,r=(0,i.K2)("2933417362");return n.createElement(a.Z,{alt:r.imageSharp.id,fluid:t||r.imageSharp.fluid})}},1633:function(e,t,r){"use strict";r.d(t,{Z:function(){return be}});var n,i,a,o,s=r(7294),u=r(5697),c=r.n(u),l=r(4839),d=r.n(l),f=r(2993),p=r.n(f),h=r(6494),g=r.n(h),m="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",S="href",E="http-equiv",O="innerHTML",C="itemprop",A="name",L="property",I="rel",j="src",x="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",R="defer",M="encodeSpecialCharacters",N="onChangeClientState",H="titleTemplate",_=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),z=[v.NOSCRIPT,v.SCRIPT,v.STYLE],V="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=$(e,v.TITLE),r=$(e,H);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,P);return t||n||void 0},K=function(e){return $(e,N)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},X=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var s=a[o],u=s.toLowerCase();-1===t.indexOf(u)||r===I&&"canonical"===e[r].toLowerCase()||u===I&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(s)||s!==O&&s!==T&&s!==C||(r=s)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][c]&&(i[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],u=g()({},n[s],i[s]);n[s]=u}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:r.g.requestAnimationFrame||Q,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,l=e.styleTags,d=e.title,f=e.titleAttributes;ue(v.BODY,n),ue(v.HTML,i),se(d,f);var p={baseTag:ce(v.BASE,r),linkTags:ce(v.LINK,a),metaTags:ce(v.META,o),noscriptTags:ce(v.NOSCRIPT,s),scriptTags:ce(v.SCRIPT,c),styleTags:ce(v.STYLE,l)},h={},g={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(g[e]=p[e].oldTags)})),t&&t(),u(e,h,g)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ue(v.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(V),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),s=0;s<o.length;s++){var u=o[s],c=t[u]||"";r.getAttribute(u)!==c&&r.setAttribute(u,c),-1===i.indexOf(u)&&i.push(u);var l=a.indexOf(u);-1!==l&&a.splice(l,1)}for(var d=a.length-1;d>=0;d--)r.removeAttribute(a[d]);i.length===a.length?r.removeAttribute(V):r.getAttribute(V)!==o.join(",")&&r.setAttribute(V,o.join(","))}},ce=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(V,"true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[k[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[V]=!0,i=de(r,n),[s.createElement(v.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=le(r),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+Y(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case m:case y:return{toComponent:function(){return de(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[V]=!0,n);return Object.keys(t).forEach((function(e){var r=k[e]||e;if(r===O||r===T){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),s.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,u=e.scriptTags,c=e.styleTags,l=e.title,d=void 0===l?"":l,f=e.titleAttributes;return{base:fe(v.BASE,t,n),bodyAttributes:fe(m,r,n),htmlAttributes:fe(y,i,n),link:fe(v.LINK,a,n),meta:fe(v.META,o,n),noscript:fe(v.NOSCRIPT,s,n),script:fe(v.SCRIPT,u,n),style:fe(v.STYLE,c,n),title:fe(v.TITLE,{title:d,titleAttributes:f},n)}},he=d()((function(e){return{baseTag:J([S,x],e),bodyAttributes:Z(m,e),defer:$(e,R),encode:$(e,M),htmlAttributes:Z(y,e),linkTags:X(v.LINK,[I,S],e),metaTags:X(v.META,[A,w,E,L,C],e),noscriptTags:X(v.NOSCRIPT,[O],e),onChangeClientState:K(e),scriptTags:X(v.SCRIPT,[j,O],e),styleTags:X(v.STYLE,[T],e),title:G(e),titleAttributes:Z(b,e)}}),(function(e){ie&&re(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),pe)((function(){return null})),ge=(i=he,o=a=function(e){function t(){return W(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return D({},n,((t={})[r.type]=[].concat(n[r.type]||[],[D({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(n.type){case v.TITLE:return D({},i,((t={})[n.type]=o,t.titleAttributes=D({},a),t));case v.BODY:return D({},i,{bodyAttributes:D({},a)});case v.HTML:return D({},i,{htmlAttributes:D({},a)})}return D({},i,((r={})[n.type]=D({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=D({},t);return Object.keys(e).forEach((function(t){var n;r=D({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)}(F(i,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=F(e,["children"]),n=D({},r);return t&&(n=this.mapChildrenToProps(t,n)),s.createElement(i,n)},B(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(s.Component),a.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ge.renderStatic=ge.rewind;var me=r(5444),ye="3079204723",be=function(e){var t=e.description,r=e.keywords,n=e.title,i=e.image,a=e.url,o=e.author;return s.createElement(me.i1,{query:ye,render:function(e){var u=t||e.site.siteMetadata.description,c=n||e.site.siteMetadata.title,l=o||e.site.siteMetadata.author,d=a||e.site.siteMetadata.url,f=i||e.site.siteMetadata.image,p=r||["gatsby-blog","web-devlopement-&-machine-&-deep-learning-blog","static-website","mdx-gatsby-blog"];return s.createElement(ge,{title:n,meta:[{name:"google-site-verification",content:"71cWx1ID2lznPcYeaPWglNrACVAeqXAlXleUcm4_5HE"},{name:"description",content:u},{name:"og:title",content:c},{name:"og:description",content:u},{name:"og:type",content:"website"},{property:"og:image",content:f},{property:"og:url",content:d},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:l},{name:"twitter:title",content:c},{name:"twitter:description",content:u},{name:"twitter:image",content:f}].concat(p&&p.length>0?{name:"keywords",content:p.join(", ")}:[])})}})}}}]);
//# sourceMappingURL=0684c67b9e8324955648f07f379967749028407c-d3c8a66391467732a74b.js.map