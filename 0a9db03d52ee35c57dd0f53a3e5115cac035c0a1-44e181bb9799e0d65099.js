(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[739],{6131:function(t,e){"use strict";e.Z={body:'<g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor"/></g>',width:24,height:24}},8666:function(){"use strict"},5010:function(t,e){"use strict";e.Z={body:'<g fill="currentColor"><path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888c.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"/><path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48l1.024.952l.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952c-.328.216-.64.368-.92.472c-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008a6.716 6.716 0 0 1-1.176-.344a4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04c-.016-.008-.024-.016-.032-.024c-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664c-1.768-.056-2.44-1.216-2.44-1.216c0-2.576 1.152-4.664 1.152-4.664c1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504c.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664c0 0-.68 1.16-2.448 1.216z"/></g>',width:16,height:16}},7921:function(t,e,i){"use strict";e.JO=void 0;var n,l=(n=i(7294))&&n.__esModule?n:{default:n};function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=0,a=/(-?[0-9.]*[0-9]+[0-9.]*)/g,s=/^-?[0-9.]*[0-9]+[0-9.]*$/g,u=["width","height","inline","hFlip","vFlip","flip","rotate","align","color","box"],h={left:0,top:0,width:16,height:16,rotate:0,hFlip:!1,vFlip:!1};var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._item=e}var e,i,n;return e=t,n=[{key:"splitAttributes",value:function(t){var e={icon:Object.create(null),node:Object.create(null)};return Object.keys(t).forEach((function(i){e[-1===u.indexOf(i)?"node":"icon"][i]=t[i]})),e}},{key:"calculateDimension",value:function(t,e,i){if(1===e)return t;if(i=void 0===i?100:i,"number"==typeof t)return Math.ceil(t*e*i)/i;var n=t.split(a);if(null===n||!n.length)return null;for(var l,r=[],c=n.shift(),o=s.test(c);;){if(o?(l=parseFloat(c),isNaN(l)?r.push(c):r.push(Math.ceil(l*e*i)/i)):r.push(c),void 0===(c=n.shift()))return r.join("");o=!o}}},{key:"replaceIDs",value:function(t){var e,i,n=/\sid="(\S+)"/g,l=[];function r(t,e,i){for(var n=0;-1!==(n=i.indexOf(t,n));)i=i.slice(0,n)+e+i.slice(n+t.length),n+=e.length;return i}for(;e=n.exec(t);)l.push(e[1]);return l.length?(i="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-",l.forEach((function(e){var n=i+o;o++,t=r('="'+e+'"','="'+n+'"',t),t=r('="#'+e+'"','="#'+n+'"',t),t=r("(#"+e+")","(#"+n+")",t)})),t):t}}],(i=[{key:"getAttributes",value:function(e){var i=this._item;"object"!==r(e)&&(e=Object.create(null));var n={horizontal:"center",vertical:"middle",slice:!1},l={rotate:i.rotate,hFlip:i.hFlip,vFlip:i.vFlip},c=Object.create(null),o=Object.create(null),a=!0===e.inline||"true"===e.inline||"1"===e.inline,s={left:i.left,top:a?i.inlineTop:i.top,width:i.width,height:a?i.inlineHeight:i.height};if(["hFlip","vFlip"].forEach((function(t){void 0===e[t]||!0!==e[t]&&"true"!==e[t]&&"1"!==e[t]||(l[t]=!l[t])})),void 0!==e.flip&&e.flip.toLowerCase().split(/[\s,]+/).forEach((function(t){switch(t){case"horizontal":l.hFlip=!l.hFlip;break;case"vertical":l.vFlip=!l.vFlip}})),void 0!==e.rotate){var u=e.rotate;if("number"==typeof u)l.rotate+=u;else if("string"==typeof u){var h=u.replace(/^-?[0-9.]*/,"");if(""===h)u=parseInt(u),isNaN(u)||(l.rotate+=u);else if(h!==u){var f=!1;switch(h){case"%":f=25;break;case"deg":f=90}f&&(u=parseInt(u.slice(0,u.length-h.length)),isNaN(u)||(l.rotate+=Math.round(u/f)))}}}var g,d=[];switch(l.hFlip?l.vFlip?l.rotate+=2:(d.push("translate("+(s.width+s.left)+" "+(0-s.top)+")"),d.push("scale(-1 1)"),s.top=s.left=0):l.vFlip&&(d.push("translate("+(0-s.left)+" "+(s.height+s.top)+")"),d.push("scale(1 -1)"),s.top=s.left=0),l.rotate%4){case 1:g=s.height/2+s.top,d.unshift("rotate(90 "+g+" "+g+")"),0===s.left&&0===s.top||(g=s.left,s.left=s.top,s.top=g),s.width!==s.height&&(g=s.width,s.width=s.height,s.height=g);break;case 2:d.unshift("rotate(180 "+(s.width/2+s.left)+" "+(s.height/2+s.top)+")");break;case 3:g=s.width/2+s.left,d.unshift("rotate(-90 "+g+" "+g+")"),0===s.left&&0===s.top||(g=s.left,s.left=s.top,s.top=g),s.width!==s.height&&(g=s.width,s.width=s.height,s.height=g)}var p,m,M=e.width?e.width:null,v=e.height?e.height:null;null===M&&null===v&&(v="1em"),null!==M&&null!==v?(p=M,m=v):null!==M?(p=M,m=t.calculateDimension(p,s.height/s.width)):(m=v,p=t.calculateDimension(m,s.width/s.height)),!1!==p&&(o.width="auto"===p?s.width:p),!1!==m&&(o.height="auto"===m?s.height:m),a&&0!==i.verticalAlign&&(c["vertical-align"]=i.verticalAlign+"em"),void 0!==e.align&&e.align.toLowerCase().split(/[\s,]+/).forEach((function(t){switch(t){case"left":case"right":case"center":n.horizontal=t;break;case"top":case"bottom":case"middle":n.vertical=t;break;case"crop":n.slice=!0;break;case"meet":n.slice=!1}})),o.preserveAspectRatio=function(t){var e;switch(t.horizontal){case"left":e="xMin";break;case"right":e="xMax";break;default:e="xMid"}switch(t.vertical){case"top":e+="YMin";break;case"bottom":e+="YMax";break;default:e+="YMid"}return e+(t.slice?" slice":" meet")}(n),o.viewBox=s.left+" "+s.top+" "+s.width+" "+s.height;var y=t.replaceIDs(i.body);return void 0!==e.color&&(y=y.replace(/currentColor/g,e.color)),d.length&&(y='<g transform="'+d.join(" ")+'">'+y+"</g>"),!0!==e.box&&"true"!==e.box&&"1"!==e.box||(y+='<rect x="'+s.left+'" y="'+s.top+'" width="'+s.width+'" height="'+s.height+'" fill="rgba(0, 0, 0, 0)" />'),{attributes:o,body:y,style:c}}},{key:"getSVG",value:function(e,i){var n=t.splitAttributes(e),l=this.getAttributes(n.icon),r='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';return i&&Object.keys(n.node).forEach((function(t){r+=" "+t+'="'+n.node[t]+'"'})),Object.keys(l.attributes).forEach((function(t){r+=" "+t+'="'+l.attributes[t]+'"'})),r+=' style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);',Object.keys(l.style).forEach((function(t){r+=" "+t+": "+l.style[t]+";"})),e&&void 0!==e.style&&(r+=e.style),r+='">',r+=l.body+"</svg>"}}])&&c(e.prototype,i),n&&c(e,n),t}();function g(t,e){if("object"!==r(t.icon))return null;var i=f.splitAttributes(t),n=i.icon,c=i.node;delete c.icon,void 0===n.inline&&(n.inline=e);var o=new f(function(t){var e,i=Object.create(null);for(e in h)i[e]=h[e];for(e in t)i[e]=t[e];return void 0===i.inlineTop&&(i.inlineTop=i.top),void 0===i.inlineHeight&&(i.inlineHeight=i.height),void 0===i.verticalAlign&&(i.verticalAlign=i.height%7==0&&i.height%8!=0?-.143:-.125),i}(t.icon)).getAttributes(n),a={transform:"rotate(360deg)"};if(void 0!==o.style["vertical-align"]&&(a.verticalAlign=o.style["vertical-align"]),void 0!==t.style)for(var s in t.style)a[s]=t.style[s];var u,g={xmlns:"http://www.w3.org/2000/svg",focusable:!1,style:a};for(u in c)g[u]=c[u];for(u in o.attributes)g[u]=o.attributes[u];return g.dangerouslySetInnerHTML={__html:o.body},l.default.createElement("svg",g,null)}var d=function(t){return g(t,!1)};e.JO=d},8451:function(t,e,i){"use strict";i.d(e,{Z:function(){return b}});var n=i(7294),l=i(2122),r=i(7627),c=i(4982);var o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.Z)(t,(0,l.Z)({defaultTheme:c.Z},e))},a=i(7511);var s=i(838),u=i(8266),h=i(453),f=i(5444),g=o((function(t){var e;return{siteTitle:(e={},e[t.breakpoints.down("md")]={justifyContent:"center"},e)}})),d=function(){var t=g();return n.createElement(u.Z,{marginBottom:"30px"},n.createElement(s.Z,{container:!0},n.createElement(s.Z,{item:!0,xs:12,md:8},n.createElement(u.Z,{display:"flex",alignItems:"center",className:t.siteTitle,onClick:function(){(0,f.c4)("/")}},n.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIHN0eWxlPSItbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGQ9Ik00ODguNiAyNTAuMkwzOTIgMjE0VjEwNS41YzAtMTUtOS4zLTI4LjQtMjMuNC0zMy43bC0xMDAtMzcuNWMtOC4xLTMuMS0xNy4xLTMuMS0yNS4zIDBsLTEwMCAzNy41Yy0xNC4xIDUuMy0yMy40IDE4LjctMjMuNCAzMy43VjIxNGwtOTYuNiAzNi4yQzkuMyAyNTUuNSAwIDI2OC45IDAgMjgzLjlWMzk0YzAgMTMuNiA3LjcgMjYuMSAxOS45IDMyLjJsMTAwIDUwYzEwLjEgNS4xIDIyLjEgNS4xIDMyLjIgMGwxMDMuOS01MmwxMDMuOSA1MmMxMC4xIDUuMSAyMi4xIDUuMSAzMi4yIDBsMTAwLTUwYzEyLjItNi4xIDE5LjktMTguNiAxOS45LTMyLjJWMjgzLjljMC0xNS05LjMtMjguNC0yMy40LTMzLjd6TTM1OCAyMTQuOGwtODUgMzEuOXYtNjguMmw4NS0zN3Y3My4zek0xNTQgMTA0LjFsMTAyLTM4LjJsMTAyIDM4LjJ2LjZsLTEwMiA0MS40bC0xMDItNDEuNHYtLjZ6bTg0IDI5MS4xbC04NSA0Mi41di03OS4xbDg1LTM4Ljh2NzUuNHptMC0xMTJsLTEwMiA0MS40bC0xMDItNDEuNHYtLjZsMTAyLTM4LjJsMTAyIDM4LjJ2LjZ6bTI0MCAxMTJsLTg1IDQyLjV2LTc5LjFsODUtMzguOHY3NS40em0wLTExMmwtMTAyIDQxLjRsLTEwMi00MS40di0uNmwxMDItMzguMmwxMDIgMzguMnYuNnoiIGZpbGw9IiNmNTciLz48L3N2Zz4=",width:"50px",style:{marginRight:"20px"}}),n.createElement(h.Z,{variant:"h5",component:"h5"},"ShadedVoxels"))),n.createElement(s.Z,{item:!0,xs:12,md:4},n.createElement(u.Z,{display:"flex",justifyContent:"center"},n.createElement(h.Z,{variant:"h6",component:"h6",style:{marginRight:"20px"}},n.createElement(f.rU,{to:"/"},"Home")),n.createElement(h.Z,{variant:"h6",component:"h6"},n.createElement(f.rU,{to:"/about"},"About"))))))},p=i(7921),m=i(5010),M=(i(8666),i(6131)),v=function(){return n.createElement(u.Z,{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50px",flexDirection:"column"},n.createElement(u.Z,null,n.createElement(p.JO,{icon:M.Z,height:"30px",width:"30px",style:{padding:"0 5px"}}),n.createElement(p.JO,{icon:m.Z,height:"30px",width:"30px",style:{padding:"0 5px"}})),n.createElement("br",null),n.createElement(h.Z,{variant:"subtitle1",component:"p"},"© Copyright ShadedVoxels 2021"))},y=o((function(){return t={root:{flexGrow:1,margin:"20px 0"}},(0,a.Z)(t);var t})),b=function(t){var e=t.children,i=y();return n.createElement("div",{className:i.root},n.createElement(s.Z,{container:!0,justify:"center"},n.createElement(s.Z,{item:!0,xs:11,sm:10,md:8},n.createElement(d,null)),n.createElement(s.Z,{item:!0,xs:11,sm:10,md:6},e),n.createElement(s.Z,{item:!0,xs:11,sm:10,md:8},n.createElement(v,null))))}}}]);
//# sourceMappingURL=0a9db03d52ee35c57dd0f53a3e5115cac035c0a1-44e181bb9799e0d65099.js.map