(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{227:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(1),r=n.n(a),c=n(0),i=n.n(c),o=n(226),l=n.n(o);n.d(t,"a",function(){return l.a}),n.d(t,"c",function(){return o.push}),n(229);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},229:function(e,t,n){var a;e.exports=(a=n(231))&&a.default||a},231:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(0),i=n.n(c),o=n(42),l=n(3),s=function(e){var t=e.location,n=l.a.getResourcesForPathname(t.pathname);return r.a.createElement(o.a,{location:t,pageResources:n})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},232:function(e,t,n){"use strict";var a=null;t.a=function(){if("undefined"==typeof document)return 0;if(null!==a)return a;var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var r=e.offsetWidth;return n===r&&(r=t.clientWidth),document.body.removeChild(t),a=n-r}},233:function(e,t,n){"use strict";var a=n(239),r=n(1),c=n.n(r),i=n(251),o=n.n(i),l=n(227),s=n(225),u=n(32),d=n.n(u),m=n(63),f=n.n(m),p=(n(230),n(62),n(232),n(240),n(252)),h=(n(228),s.b.div.withConfig({displayName:"Header__TopBar"})([""])),y=s.b.div.withConfig({displayName:"Header__NavMenu"})(["width:200px;padding:30px;"]),g={textDecoration:"none"},v=Object.assign({},g),I=function(e){function t(t){var n;return(n=e.call(this,t)||this).closeMenu=n.closeMenu.bind(f()(f()(n))),n.state={modalOpen:!1,menuOpen:!1},n}d()(t,e);var a=t.prototype;return a.handleStateChange=function(e){this.setState({menuOpen:e.isOpen})},a.closeMenu=function(){this.setState({menuOpen:!1})},a.toggleMenu=function(){this.setState({menuOpen:!this.state.menuOpen})},a.componentDidMount=function(){var e=this;window.addEventListener("modal",function(t){var n=t.detail.open;e.setState({modalOpen:n})})},a.showSettings=function(e){e.preventDefault()},a.render=function(){var e=this,t=(this.state.modalOpen,this.props.pathname),a=function(e){return-1!==t.indexOf(e)?v:g},r=n(242),i=n(234);return c.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"100vh",position:"fixed",top:0,zIndex:99999,flexDirection:"column",backgroundColor:"#adc6d2"}},c.a.createElement(p.scaleDown,{customBurgerIcon:c.a.createElement("img",{src:r}),customCrossIcon:c.a.createElement("img",{src:i}),isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)},strokeWidth:10,borderRadius:12},c.a.createElement(l.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/the-film"),to:"/the-film",exact:!0},"About the film"),c.a.createElement(l.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/themes"),to:"/themes/",exact:!0},"Themes"),c.a.createElement(l.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/articles"),to:"/articles/",exact:!0},"Articles"),c.a.createElement(l.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/interviews"),to:"/interviews/",exact:!0},"Interviews"),c.a.createElement(l.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:g,to:"/qa/",exact:!0},"Q&A"),c.a.createElement(l.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/clips"),to:"/clips/",exact:!0},"Clips"),c.a.createElement(l.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/teaching"),to:"/teaching/",exact:!0},"Teaching")),c.a.createElement(y,{style:{display:"none"}},c.a.createElement(l.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/the-film"),to:"/the-film",exact:!0},"About the film"),c.a.createElement(l.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/themes"),to:"/themes/",exact:!0},"Themes"),c.a.createElement(l.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/articles"),to:"/articles/",exact:!0},"Articles"),c.a.createElement(l.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/interviews"),to:"/interviews/",exact:!0},"Interviews"),c.a.createElement(l.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/qa"),to:"/qa/",exact:!0},"Q&A"),c.a.createElement(l.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/clips"),to:"/clips/",exact:!0},"Clips"),c.a.createElement(l.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/teaching"),to:"/teaching/",exact:!0},"Teaching")),c.a.createElement(h,null,c.a.createElement("div",{className:"logo"},c.a.createElement(l.a,{to:"/",style:{textDecoration:"none"}},"RACE",c.a.createElement("span",{className:"filmSubtitle"},"the power of an illusion")))))},t}(c.a.Component),b=n(236),x=(n(243),n(245),s.b.div.withConfig({displayName:"layout__Container"})(["background-color:",";margin:0 auto;"],b.a));t.a=function(e){var t=e.children,n=e.location;return c.a.createElement(l.b,{query:"1013274482",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title}),c.a.createElement(I,{data:e,pathname:n.pathname}),c.a.createElement(x,null," ",t," "))},data:a})}},234:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTYuMTcgNjE2LjE4Ij48dGl0bGU+Y2xvc2U8L3RpdGxlPjxyZWN0IHg9IjI3MC43MiIgeT0iLTEwMi44NyIgd2lkdGg9Ijc0LjczIiBoZWlnaHQ9IjgyMS45MyIgcng9IjIxLjU3IiByeT0iMjEuNTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuNjIgMzA4LjA5KSByb3RhdGUoLTQ1KSIvPjxyZWN0IHg9Ii0xMDIuODgiIHk9IjI3MC43MiIgd2lkdGg9IjgyMS45MyIgaGVpZ2h0PSI3NC43MyIgcng9IjIxLjU3IiByeT0iMjEuNTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuNjEgMzA4LjA4KSByb3RhdGUoLTQ1KSIvPjwvc3ZnPg=="},235:function(e,t,n){"use strict";const a=n(237),r=n(238);function c(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}function i(e,t){return t.decode?r(e):e}function o(e){const t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function l(e,t){const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,a)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=n):a[e]=n};case"bracket":return(e,n,a)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],n):a[e]=[n]:a[e]=n};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),a=Object.create(null);if("string"!=typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;for(const r of e.split("&")){let[e,c]=r.replace(/\+/g," ").split("=");c=void 0===c?null:i(c,t),n(i(e,t),c,a)}return Object.keys(a).sort().reduce((e,t)=>{const n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=o,t.parse=l,t.stringify=((e,t)=>{!1===(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=(()=>{}));const n=function(e){switch(e.arrayFormat){case"index":return(t,n,a)=>null===n?[c(t,e),"[",a,"]"].join(""):[c(t,e),"[",c(a,e),"]=",c(n,e)].join("");case"bracket":return(t,n)=>null===n?[c(t,e),"[]"].join(""):[c(t,e),"[]=",c(n,e)].join("");default:return(t,n)=>null===n?c(t,e):[c(t,e),"=",c(n,e)].join("")}}(t);return e?Object.keys(e).sort(t.sort).map(a=>{const r=e[a];if(void 0===r)return"";if(null===r)return c(a,t);if(Array.isArray(r)){const e=[];for(const t of r.slice())void 0!==t&&e.push(n(a,t,e.length));return e.join("&")}return c(a,t)+"="+c(r,t)}).filter(e=>e.length>0).join("&"):""}),t.parseUrl=((e,t)=>({url:e.split("?")[0]||"",query:l(o(e),t)}))},236:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return i});var a="#222222",r="#E3A44D",c="#6A6588",i="#E3A44D"},237:function(e,t,n){"use strict";e.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},238:function(e,t,n){"use strict";var a=new RegExp("%[a-f0-9]{2}","gi"),r=new RegExp("(%[a-f0-9]{2})+","gi");function c(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),a=e.slice(t);return Array.prototype.concat.call([],c(n),c(a))}function i(e){try{return decodeURIComponent(e)}catch(r){for(var t=e.match(a),n=1;n<t.length;n++)t=(e=c(t,n).join("")).match(a);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=r.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var a=i(n[0]);a!==n[0]&&(t[n[0]]=a)}n=r.exec(e)}t["%C2"]="�";for(var c=Object.keys(t),o=0;o<c.length;o++){var l=c[o];e=e.replace(new RegExp(l,"g"),t[l])}return e}(e)}}},239:function(e){e.exports={data:{site:{siteMetadata:{title:"Race: The Power of an Illusion"}},allTaxonomyTermThemes:{edges:[{node:{id:"db1af52f-dd0f-4bb0-a7ea-46c6817923f3",name:"Structured Advantage and Disadvantage"}},{node:{id:"e641aeb5-a5a3-442d-83f0-5df5bf02c5a4",name:"Making Whiteness"}},{node:{id:"8661596c-176b-4527-97c4-af0e614da9d8",name:"Science and Pseudoscience"}},{node:{id:"4433de45-87b1-4a89-8fd4-378fb8776c55",name:"Racial Classification: Who Decides?"}},{node:{id:"72d34ba2-6377-4c6f-aacd-7cee0dc2e704",name:"The Racial Wealth Gap"}},{node:{id:"4f251c2c-b851-45bf-ba32-ddb563cca5ae",name:"Who Gets to Be American?"}},{node:{id:"d52b46a5-a433-43eb-971b-c13d54da18e4",name:"Founding the Nation and Race"}}]}}}},240:function(e,t,n){},242:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NTA0NTIzQjUtRDYyQS00OENFLTlFNTYtRjBBRDkwQUI5RDRFPC90aXRsZT48cGF0aCBkPSJNMCAwaDIwdjJIMFYwem0wIDZoMjB2MkgwVjZ6bTAgNmgyMHYySDB2LTJ6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="},243:function(e,t,n){},245:function(e,t,n){},280:function(e,t,n){"use strict";var a=n(32),r=n.n(a),c=n(1),i=n.n(c),o=n(225),l=o.b.div.withConfig({displayName:"Filter__Row"})(["display:flex;flex-direction:row;padding:10px;color:",";"],function(e){return e.color?e.color:"white"}),s=o.b.div.withConfig({displayName:"Filter__Element"})(["cursor:pointer;margin-left:10px;font-weight:",";"],function(e){return e.selected?"bold":"normal"}),u=o.b.div.withConfig({displayName:"Filter__Title"})(["text-decoration:underline;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.selected,n=e.onSelected,a=e.color;return i.a.createElement(l,{color:a},"Sort by: ",i.a.createElement(s,{selected:"all"===t,onClick:function(){return n("all")}},"All"),i.a.createElement(s,{selected:"1"===t,onClick:function(){return n("1")}},i.a.createElement(u,null,"Episode One:")," The Difference Between Us"),i.a.createElement(s,{selected:"2"===t,onClick:function(){return n("2")}},i.a.createElement(u,null,"Episode Two:")," The Story We Tell"),i.a.createElement(s,{selected:"3"===t,onClick:function(){return n("3")}},i.a.createElement(u,null,"Episode Three:")," The House We Live In"))},t}(c.Component);t.a=d}}]);
//# sourceMappingURL=5-69522484495a6ac38f07.js.map