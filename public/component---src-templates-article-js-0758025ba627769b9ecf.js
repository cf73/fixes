(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{101:function(e,t,n){"use strict";const i=n(102),r=n(103);function a(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function l(e,t){return t.decode?r(e):e}function o(e){const t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function c(e,t){const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,i)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===i[e]&&(i[e]={}),i[e][t[1]]=n):i[e]=n};case"bracket":return(e,n,i)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==i[e]?i[e]=[].concat(i[e],n):i[e]=[n]:i[e]=n};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),i=Object.create(null);if("string"!=typeof e)return i;if(!(e=e.trim().replace(/^[?#&]/,"")))return i;for(const r of e.split("&")){let[e,a]=r.replace(/\+/g," ").split("=");a=void 0===a?null:l(a,t),n(l(e,t),a,i)}return Object.keys(i).sort().reduce((e,t)=>{const n=i[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=o,t.parse=c,t.stringify=((e,t)=>{!1===(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=(()=>{}));const n=function(e){switch(e.arrayFormat){case"index":return(t,n,i)=>null===n?[a(t,e),"[",i,"]"].join(""):[a(t,e),"[",a(i,e),"]=",a(n,e)].join("");case"bracket":return(t,n)=>null===n?[a(t,e),"[]"].join(""):[a(t,e),"[]=",a(n,e)].join("");default:return(t,n)=>null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}(t);return e?Object.keys(e).sort(t.sort).map(i=>{const r=e[i];if(void 0===r)return"";if(null===r)return a(i,t);if(Array.isArray(r)){const e=[];for(const t of r.slice())void 0!==t&&e.push(n(i,t,e.length));return e.join("&")}return a(i,t)+"="+a(r,t)}).filter(e=>e.length>0).join("&"):""}),t.parseUrl=((e,t)=>({url:e.split("?")[0]||"",query:c(o(e),t)}))},102:function(e,t,n){"use strict";e.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},103:function(e,t,n){"use strict";var i=new RegExp("%[a-f0-9]{2}","gi"),r=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),i=e.slice(t);return Array.prototype.concat.call([],a(n),a(i))}function l(e){try{return decodeURIComponent(e)}catch(r){for(var t=e.match(i),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(i);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=r.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var i=l(n[0]);i!==n[0]&&(t[n[0]]=i)}n=r.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),o=0;o<a.length;o++){var c=a[o];e=e.replace(new RegExp(c,"g"),t[c])}return e}(e)}}},105:function(e,t,n){"use strict";var i=n(96),r=n(94),a=n(87),l=(a.b.div.withConfig({displayName:"Title"})(["color:white;text-align:center;font-family:Lato;font-size:36px;font-weight:300;letter-spacing:0.04em;padding-top:120px;margin-bottom:75px;"]),n(92),n(56)),o=n.n(l),c=n(1),s=n.n(c),d=function(e){var t=e.color;return e.rotate,s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18.177 30.139"},s.a.createElement("path",{fill:t,d:"M15.2,15.034a2.2,2.2,0,0,1,.159-.226Q21.785,7.639,28.224.48a1.027,1.027,0,0,1,1.585.04,1.367,1.367,0,0,1,.02,1.76Q22.912,9.974,16,17.667a1.106,1.106,0,0,1-1.859,0Q7.975,10.763,1.806,3.858c-.494-.554-1-1.1-1.481-1.671A1.372,1.372,0,0,1,.555.2,1.07,1.07,0,0,1,2.013.413Q3.177,1.7,4.338,3q3.147,3.5,6.295,7,2.174,2.421,4.352,4.841a1.261,1.261,0,0,1,.127.2C15.14,15.039,15.168,15.034,15.2,15.034Z",transform:"translate(0 30.139) rotate(-90)"}))},p=(n(71),n(89)),u=n.n(p),m=n(91),g=Object(a.b)(r.a).withConfig({displayName:"SubThemeCard__Container"})(["color:white;padding-top:30px;padding-right:30px;display:flex;flex-direction:column;"]),f=a.b.div.withConfig({displayName:"SubThemeCard__Row"})(["display:flex;flex-direction:row;align-items:center;"]),h=(a.b.div.withConfig({displayName:"SubThemeCard__Column"})(["display:flex;flex-direction:column;background-color:",";padding:15px;"],m.c),a.b.div.withConfig({displayName:"SubThemeCard__Title"})(["font-family:Lato;font-size:12pt;line-height:39px;font-weight:600;letter-spacing:0.022em;text-transform:uppercase;color:",";width:auto;padding-left:15px;padding-right:15px;"],function(e){return e.color?e.color:m.m})),y=a.b.div.withConfig({displayName:"SubThemeCard__Description"})(["font-family:'Tisa Pro';font-size:20px;line-height:24px;color:",";"],m.m),b=a.b.div.withConfig({displayName:"SubThemeCard__ArrowContainer"})(["width:25px;height:20px;"]),x=function(e){var t=e.color;return s.a.createElement(b,null,s.a.createElement(Z.a,{color:t}))},_=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.name.indexOf(":")>=0?e.name.split(":")[1]:e.name,n=e.description?e.description.value:"!empty content, check drupal!",i="/subthemes/"+u()(e.name);return s.a.createElement(g,{href:i},s.a.createElement(f,null,s.a.createElement(x,{color:m.l}),s.a.createElement(h,{color:m.l},t)),s.a.createElement(y,{dangerouslySetInnerHTML:{__html:n}}))},t}(s.a.Component),v=a.b.div.withConfig({displayName:"ThemeCard__Container"})(["position:relative;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:51px;padding-bottom:98px;background-color:",";&::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:",";filter:blur(12px);filter:opacity(53%);}@media (max-width:812px){padding-top:0;}"],m.m,function(e){return e.gradient?e.gradient:null}),w=a.b.div.withConfig({displayName:"ThemeCard__MainImage"})(["position:relative;width:832px;height:583px;background-size:cover !important;background-attachment:fixed;transition:all .5s ease;background:",";filter:opacity(92%);@media (min-width:1025px){}@media (max-width:812px){width:100vw;height:50vh;}"],function(e){return e.background?"url("+e.background+") center no-repeat":"none"}),E=a.b.div.withConfig({displayName:"ThemeCard__Info"})(["position:relative;margin-top:-200px;margin-bottom:-100px;z-index:1;backdrop-filter:blur(12px);&::after{content:'';position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:",";filter:blur(12px);filter:opacity(53%);}@media (min-width:1025px){}@media (max-width:812px){}"],function(e){return e.gradient?e.gradient:null}),C=a.b.div.withConfig({displayName:"ThemeCard__Title"})(["font-family:Lato;text-align:left;letter-spacing:0.02em;line-height:54px;color:",";font-size:20pt;font-weight:600;"],m.d),k=a.b.div.withConfig({displayName:"ThemeCard__Description"})(["font-family:Tisa Pro;font-size:22pt;line-height:30px;margin-bottom:45px;& > p{margin:0;}color:",";"],m.m),I=a.b.div.withConfig({displayName:"ThemeCard__ChevronContainer"})(["cursor:pointer;position:absolute;right:0;width:18px;height:30px;transform:rotate(","deg);transition:all 0.3s ease-out;@media (max-width:812px){right:-25px;}"],function(e){return e.open?90:0}),j=function(e){var t=e.open;return s.a.createElement(I,{open:t},s.a.createElement(d,{color:m.m}))},N=a.b.div.withConfig({displayName:"ThemeCard__SubThemes"})(["display:grid;grid-template-columns:45vw 45vw;padding-left:138px;padding-bottom:30px;@media (min-width:1025px){grid-template-columns:30vw 30vw 30vw;}@media (max-width:812px){padding-left:38px;grid-template-columns:90vw;}"]),L=a.b.div.withConfig({displayName:"ThemeCard__Row"})(["position:relative;display:flex;flex-direction:column;justify-content:center;"]),M=Object(a.b)(L).withConfig({displayName:"ThemeCard__FirstRow"})(["margin-top:16px;margin-left:138px;margin-right:138px;@media (min-width:1025px){}@media (max-width:812px){margin-left:38px;margin-right:38px;}"]),T=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={open:!1},n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.state.open,n=this.props,i=n.data,r=n.color,a=i.relationships.field_theme_image.localFile.childImageSharp.resolutions,l=(a.height,a.width,a.src),o=i.name,c=i.description&&i.description.processed,d=i.relationships.subthemes,p=Object(m.h)(r);return s.a.createElement(v,{open:t,gradient:p,onClick:function(){return e.setState({open:!t})}},s.a.createElement(w,{background:l}),s.a.createElement(E,{gradient:p},s.a.createElement(M,null,s.a.createElement(C,null,o),s.a.createElement(k,{dangerouslySetInnerHTML:{__html:c}}),s.a.createElement(j,{open:t})),s.a.createElement(L,null,t&&s.a.createElement(N,{gradient:p},d.map(function(e,t){return s.a.createElement(_,{key:t,data:e})})))))},t}(s.a.Component),S=n(104),A=n(95),z=n(97),F=n(88),O=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e="/"+this.props.slug+"s/"+u()(this.props.title);return s.a.createElement(F.a,{to:e,className:this.props.className,style:this.props.style},this.props.type?s.a.createElement("h4",null,this.props.type):null,s.a.createElement("div",{className:"RCimage",style:{backgroundImage:"url("+this.props.imgSrc+")",backgroundSize:"cover",backgroundPosition:"center"}}),s.a.createElement("p",null,this.props.title),this.props.children)},t}(s.a.Component),H=Object(a.b)(O).withConfig({displayName:"rccard__StyledRCCard"})(["display:inline-block;height:auto;flex:"," "," ",'px;border:solid thin lightgrey;background-color:#f7f7f7;-webkit-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);-moz-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);margin-bottom:20px;font-family:"ff-tisa-web-pro";vertical-align:top;text-align:left;margin-left:10px;margin-right:10px;max-width:',"px color:inherit;text-decoration:inherit;"," "," ",""],100,100,350,350*.7,function(e){return e.background&&Object(a.a)(["background-image:url('","');background-size:cover;"],e.background)},function(e){return"Article"===e.type&&Object(a.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)},function(e){return"QuickFact"===e.type&&Object(a.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)}),q=a.b.div.withConfig({displayName:"Filter__Row"})(["display:flex;flex-direction:row;padding:10px;color:",";"],function(e){return e.color?e.color:"white"}),R=a.b.div.withConfig({displayName:"Filter__Element"})(["cursor:pointer;margin-left:10px;font-weight:",";"],function(e){return e.selected?"bold":"normal"}),U=a.b.div.withConfig({displayName:"Filter__Title"})(["text-decoration:underline;"]),B=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.selected,n=e.onSelected,i=e.color;return s.a.createElement(q,{color:i},"Sort by: ",s.a.createElement(R,{selected:"all"===t,onClick:function(){return n("all")}},"All"),s.a.createElement(R,{selected:"1"===t,onClick:function(){return n("1")}},s.a.createElement(U,null,"Episode One:")," The Difference Between Us"),s.a.createElement(R,{selected:"2"===t,onClick:function(){return n("2")}},s.a.createElement(U,null,"Episode Two:")," The Story We Tell"),s.a.createElement(R,{selected:"3"===t,onClick:function(){return n("3")}},s.a.createElement(U,null,"Episode Three:")," The House We Live In"))},t}(c.Component),D=n(93),Z=n(98);n.d(t,"d",function(){return i.a}),n.d(t,"e",function(){return r.a}),n.d(t,!1,function(){}),n.d(t,"l",function(){return T}),n.d(t,"k",function(){return S.a}),n.d(t,"a",function(){return A.a}),n.d(t,"b",function(){return z.a}),n.d(t,"h",function(){return H}),n.d(t,"c",function(){return B}),n.d(t,"f",function(){return D.a}),n.d(t,"g",function(){return D.b}),n.d(t,"j",function(){return d}),n.d(t,"i",function(){return Z.a})},120:function(e,t,n){"use strict";n.d(t,"a",function(){return C}),n.d(t,"b",function(){return k}),n.d(t,"c",function(){return I}),n.d(t,"d",function(){return N}),n.d(t,"e",function(){return L}),n(100),n(73);var i=n(115),r=n.n(i),a=(n(129),n(92),n(58),n(130),n(131)),l=n.n(a),o=(n(57),n(56)),c=n.n(o),s=(n(70),n(1)),d=n.n(s),p=n(87),u=n(88),m=n(105),g=n(89),f=n.n(g),h=n(132),y=(n(133),p.b.div.withConfig({displayName:"subtheme__SubthemeTitle"})(["font-weight:normal;text-rendering:optimizeLegibility;font-size:42px;font-weight:300;padding:15px;font-family:'Lato';text-align:center;color:rgba(59,59,59,0.8);margin-bottom:15px;margin-top:15px;"])),b=3,x=function(e){return e||[]},_=function(e){for(var t,n,i=e.length;0!==i;)n=Math.floor(Math.random()*i),t=e[i-=1],e[i]=e[n],e[n]=t;return e},v=p.b.div.withConfig({displayName:"subtheme__ArticleTitle"})(["font-family:'Lato';font-size:30px;font-weight:400;color:#2b2b2b;letter-spacing:0.03em;padding:0px 30px 0 0px;line-height:1.25;margin-bottom:15px;"]),w=p.b.div.withConfig({displayName:"subtheme__Poster"})(["width:100%;height:66%;background-color:grey;margin-bottom:15px;overflow:hidden;"]),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n}return c()(t,e),t.prototype.render=function(){var e=this;return this.props.clip.relationships.field_poster_image?this.state.play?d.a.createElement(w,null,d.a.createElement("iframe",{title:"player",src:"https://player.vimeo.com/video/18769983?title=0&byline=0&portrait=0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0})):this.props.linkable?d.a.createElement(u.a,{to:"../clips/"+f()(this.props.clip.title)},d.a.createElement(w,null,d.a.createElement("img",{alt:"poster image",src:this.props.clip.relationships.field_poster_image.localFile.publicURL}))):d.a.createElement(w,{onClick:function(){return e.setState({play:!0})}},d.a.createElement("img",{alt:"another image",src:this.props.clip.relationships.field_poster_image.localFile.publicURL})):d.a.createElement(w,null)},t}(d.a.Component),C=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.article,n=e.i,i=e.relatedContent,r=e.style,a=void 0===r?{}:r,l=e.onOpen,o="/articles/"+f()(t.title);return i?d.a.createElement(m.h,{style:Object.assign({},a,{padding:30}),key:"article-"+n,article:t,imgSrc:t.relationships.field_main_image&&t.relationships.field_main_image.localFile&&t.relationships.field_main_image.localFile.publicURL,title:t.title,type:"Article",slug:"article",changed:t.changed},t.field_short_version&&d.a.createElement("p",{className:"RCcard-large-text",dangerouslySetInnerHTML:{__html:t.field_short_version.processed}})):d.a.createElement(m.b,{style:Object.assign({},a,{padding:0}),key:"article-"+n,title:t.title,type:"Article",slug:"article",changed:t.changed,onClick:function(){return l(o)}},d.a.createElement("div",{className:"articleCardImage",style:{backgroundImage:t.relationships.field_main_image?"url("+t.relationships.field_main_image.localFile.publicURL+")":null}}),t.field_short_version&&d.a.createElement("div",{style:{padding:30}},d.a.createElement("h4",{style:{marginBottom:15}},"Article by ",t.field_author&&t.field_author.processed),d.a.createElement(v,null,t.title),'"',d.a.createElement("span",{className:"card-large-text",dangerouslySetInnerHTML:{__html:t.field_short_version.processed}})))},t}(d.a.Component),k=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.clip,n=void 0===t?{relationships:{}}:t,i=e.i,r=e.relatedContent,a=e.linkable,l=e.style,o=void 0===l?{}:l;return r?d.a.createElement(m.h,{key:"clip-"+i,title:n.title,slug:"clip",changed:n.changed,style:o},d.a.createElement(E,{clip:n,linkable:a}),d.a.createElement("p",{style:{paddingLeft:30,paddingRight:30,paddingBottom:20},className:"caption"},n.title)):d.a.createElement(m.b,{key:"clip-"+i,title:n.title,type:"Clip",slug:"clip",style:o,changed:n.changed,link:"/clips/"+f()(n.title)},d.a.createElement(E,{clip:n}),d.a.createElement("p",{style:{paddingLeft:30,paddingRight:30,paddingBottom:20},className:"caption"},n.title))},t}(d.a.Component),I=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.faq,n=void 0===t?{}:t,i=e.i,r=e.style,a=void 0===r?{}:r;return d.a.createElement(m.b,{style:Object.assign({},a,{padding:30,display:"flex",flexDirection:"column",justifyContent:"center"}),key:"faq-"+i,slug:"faq",changed:n.changed,type:"FAQ",link:"/qa/"+f()(n.title)},d.a.createElement("h4",{style:{marginBottom:15}},"Q&A"),d.a.createElement("p",{className:"card-large-text"},n.title))},t}(d.a.Component),j=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.interview,n=void 0===t?{}:t,i=e.i,r=(e.relatedContent,e.style),a=void 0===r?{}:r,l=e.onOpen,o="/interviews/"+f()(n.title);return d.a.createElement(m.b,{style:Object.assign({},a,{padding:30,display:"flex",flexDirection:"column",justifyContent:"center"}),key:"interview-"+i,type:"Interview",title:n.title,slug:"interview",changed:n.changed,onClick:function(){return l(o)}},d.a.createElement("div",{className:"interviewCardPhoto",style:{backgroundImage:n.relationships.field_interviewee?"url("+n.relationships.field_interviewee.localFile.publicURL+")":null}}),d.a.createElement("h4",{style:{marginTop:15,marginBottom:15,lineHeight:1.5,textAlign:"center"}},n.title),d.a.createElement("p",{style:{fontStyle:"italic",textAlign:"center"},className:"card-large-text"},n.field_key_quote.processed))},t}(d.a.Component),N=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.quickfact,n=e.i,i=(e.relatedContent,e.style),r=void 0===i?{}:i,a=l()(e,["quickfact","i","relatedContent","style"]);return d.a.createElement(m.b,Object.assign({},a,{key:"quickfact-"+n,type:"QuickFact",title:t.title,slug:"quickfact",changed:t.changed,style:Object.assign({},r,{padding:15})}),d.a.createElement("h4",null,t.title),d.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.field_quickfact.processed}}))},t}(d.a.Component),L=function(e,t,n,i,r){return r||(r=function(e){}),x(e.articles).filter(function(e){return!t||"recent"===t||"article"===t}).map(function(e,t){return d.a.createElement(C,{key:"article-"+e.title,onOpen:function(t){return r(t,e)},article:e,i:t,relatedContent:n})}).concat(x(e.clips).filter(function(e){return!t||"recent"===t||"clip"===t}).map(function(e,t){return d.a.createElement(k,{key:"clip-"+e.title,linkable:i,clip:e,i:t,relatedContent:n})}),x(e.faqs).filter(function(e){return!t||"recent"===t||"faq"===t}).map(function(e,t){return d.a.createElement(I,{key:"faq-"+e.title,faq:e,i:t,relatedContent:n})}),x(e.interviews).filter(function(e){return!t||"recent"===t||"interview"===t}).map(function(e,t){return d.a.createElement(j,{key:"interview-"+e.title,onOpen:function(t){return r(t,e)},interview:e,i:t,relatedContent:n})}),x(e.quickfacts).filter(function(e){return!t||"recent"===t||"quickfact"===t}).map(function(e,t){return d.a.createElement(N,{key:"quickfact-"+e.title,quickfact:e,i:t,relatedContent:n})}))},M=new Map([["articles","article"],["interviews","interview"],["faqs","faq"],["clips","clip"],["recently added","recent"]]),T={color:"rgb(255, 132, 0)",marginRight:15,marginBottom:15,fontSize:14,letterSpacing:"0.125em"},S=Object.assign({},T,{fontWeight:"700",borderBottom:"solid 2px hotpink"}),A=function(e){e.queryParams,e.name;var t=e.filter,n=e.subtheme,i=e.toggleFilter;return d.a.createElement("div",{style:{mixBlendMode:"normal",textAlign:"center",marginBottom:15}},d.a.createElement("span",{style:{marginRight:15,fontFamily:"Lato",fontWeight:700,fontSize:14,letterSpacing:"0.2em",textTransform:"uppercase",color:"hotpink"}},"Sort by: "),d.a.createElement("button",{onClick:function(){i(null)},style:t?T:S},"All"),Array.from(M.keys()).filter(function(e){return"recently added"===e||(t=e,n.relationships[t]);var t}).map(function(e){var n=M.get(e);return d.a.createElement("button",{key:e,onClick:function(){i(n)},style:Object.assign({},t===n?S:T,{float:"none",fontWeight:700,letterSpacing:"0.2em",color:"hotpink"})},e)}))},z=p.b.div.withConfig({displayName:"subtheme__Row"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;"]),F=p.b.div.withConfig({displayName:"subtheme__PopupCard"})(["position:relative;width:33vw;height:33vw;min-width:300px;min-height:300px;background-color:gray;border-radius:100px;border:1px solid grey;overflow:hidden;"]),O=p.b.div.withConfig({displayName:"subtheme__CloseButton"})(["cursor:pointer;position:absolute;top:30px;right:30px;"]),H=p.b.div.withConfig({displayName:"subtheme__TopImage"})(["height:50%;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),q=p.b.div.withConfig({displayName:"subtheme__Description"})([""]),R=function(e){function t(t){var n;return(n=e.call(this,t)||this).getShuffle=function(e){if("undefined"!=typeof window){var t=window.localStorage.getItem("shuffle");return t?t=JSON.parse(t):(t=_(h.range(e)),window.localStorage.setItem("shuffle",JSON.stringify(t))),t}},n.close=function(){n.setState({popup:!n.state.popup,card:null})},n.open=function(e,t){n.setState({popup:!0,card:Object.assign({},t,{link:e})})},n.updateOrder(t,null),n.state={numCards:b,filter:null,popup:!1,card:null},n.close=n.close.bind(r()(r()(n))),n.open=n.open.bind(r()(r()(n))),n.toggleFilter=n.toggleFilter.bind(r()(r()(n))),n}c()(t,e);var n=t.prototype;return n.toggleFilter=function(e){this.state.filter===e?this.setState({filter:null}):this.setState({filter:e})},n.shouldComponentUpdate=function(e,t){return t.numCards!==this.state.numCards||t.filter!==this.state.filter||t.popup!==this.state.popup},n.componentWillUpdate=function(e,t){this.state.filter,t.filter},n.updateOrder=function(e,t){if(!e.filter){var n=L(e.data.relationships,t).length;this.order=this.getShuffle(n)}},n.render=function(){var e,t,n,i=this.props.data,r=this.state,a=r.filter,l=r.popup,o=r.card,c=L(i.relationships,a,null,!0,this.open),s=a?c.sort(function(e,t){return t.props.changed-e.props.changed}):(e=c,t=this.order,n=new Array(e.length),t&&t.forEach(function(t,i){n[i]=e[t]}),n),p=i.description?d.a.createElement("div",{className:"subtheme-description",key:"description",dangerouslySetInnerHTML:{__html:i.description.processed}}):null;return d.a.createElement("div",null,d.a.createElement(m.f,{id:"subtheme-overlay",visible:l},d.a.createElement(m.g,null,d.a.createElement(z,null,o&&d.a.createElement(F,null,d.a.createElement(O,{onClick:this.close},"Close"),d.a.createElement(H,{background:o.relationships.field_main_image&&o.relationships.field_main_image.localFile.publicURL}),d.a.createElement("h1",null,o.title),d.a.createElement(q,{dangerouslySetInnerHTML:{__html:o.field_short_version?o.field_short_version.processed:null}}),d.a.createElement(u.a,{to:o.link},"Read the article"))))),d.a.createElement(y,null,i.name),p,d.a.createElement(A,{toggleFilter:this.toggleFilter,name:this.props.name,filter:a,subtheme:i}),d.a.createElement("div",null,s.map(function(e,t){return d.a.createElement("div",{key:t},e)})))},t}(d.a.Component);Object(p.b)(R).withConfig({displayName:"subtheme__SubthemeContainer"})(["background-color:rgba(247,247,247,0.97);padding:45px 30px;border-bottom:solid thin grey;margin:60px 30px;"])},134:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA2LjUgMTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYuNSAxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMzQjNCM0I7fQo8L3N0eWxlPgo8dGl0bGU+ZG93bjwvdGl0bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LjMsMC45YzAuMi0wLjIsMC4zLTAuNSwwLjEtMC43bDAsMEM2LjIsMCw1LjgtMC4xLDUuNywwLjFsMCwwTDAuMSw1LjZDMCw1LjgsMCw2LjEsMC4xLDYuM2wwLDBsMCwwbDUuNSw1LjUKCWMwLjIsMC4yLDAuNSwwLjIsMC43LDBsMCwwYzAuMi0wLjIsMC4yLTAuNSwwLTAuN2wwLDBsLTUuMi01TDYuMywwLjl6Ii8+Cjwvc3ZnPgo="},273:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return k}),n(57),n(58),n(443),n(72),n(92),n(70);var i=n(56),r=n.n(i),a=n(1),l=n.n(a),o=n(87),c=n(120),s=n(93),d=n(89),p=n.n(d),u=n(88),m=n(101),g=o.b.div.withConfig({displayName:"article__LargeCalloutText"})([""]),f=o.b.div.withConfig({displayName:"article__ArticleBackground"})(["position:fixed;top:0;bottom:0;left:0;right:0;z-index:-9999;"]),h=o.b.div.withConfig({displayName:"article__ArticleHeader"})(["width:100%;height:88vh;background-image:",";background-repeat:no-repeat;background-size:cover;background-position:center;background-color:lightgrey;position:fixed;left:0px;top:0px;z-index:-999;"],function(e){return e.background?"url("+e.background+")":"none"}),y=o.b.div.withConfig({displayName:"article__ArticleMain"})(["background-color:white;padding:30px;max-width:735px;z-index:99999999;"]),b=o.b.div.withConfig({displayName:"article__ArticleTitle"})(['font-size:42px;width:100%;margin-bottom:22.5px;line-height:1.125;z-index:99999999;position:relative;font-style:italic;font-family:"orpheuspro";font-size:54px;font-weight:500;font-style:normal;']),x=o.b.div.withConfig({displayName:"article__TopText"})(["width:100%;text-align:center;padding:30px 45px;top:0;position:fixed;min-height:60px;z-index:99;"]),_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.quickFact,i=e.transition;if(!t)return l.a.createElement(s.a,{key:"quickfact",id:"quickfact",visible:!1});var r={articles:[],clips:[],faqs:[],quickFacts:[]};return(t.relationships.field_related_content||[]).forEach(function(e){"node__faq"==e.__typename?r.faqs.push(e):"node__article"==e.__typename?r.articles.push(e):"node__clip"==e.__typename&&r.clips.push(e)}),l.a.createElement(s.a,{key:"quickfact",id:"quickfact",visible:!!t,style:i&&i.style},l.a.createElement(s.b,null,l.a.createElement(s.c,null,l.a.createElement("div",{onClick:this.props.closeHandler,style:{float:"right",color:"red",cursor:"pointer"}},l.a.createElement("img",{style:{width:50,marginTop:34},src:n(311)})),l.a.createElement("h3",null,t.title),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.field_quickfact.processed}})),l.a.createElement("div",{style:{width:"100%",display:"flex"}},Object(c.e)(r,null,null,!0).slice(0,2))))},t}(l.a.Component),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.tag,i=e.transition,r=e.queryParams,a=void 0===r?{}:r;if(!t)return l.a.createElement(s.a,{key:"tag",id:"tag",visible:!!t});var o={articles:t.relationships.backref_field_tags_node_article,faqs:t.relationships.backref_field_tag_node_faq,clips:t.relationships.backref_field_t_node_clip,quickFacts:[]};return l.a.createElement(s.a,{key:"tag",id:"tag",visible:!!t,style:i&&i.style},l.a.createElement(s.b,{wide:!0},l.a.createElement(s.c,null,l.a.createElement("div",{onClick:this.props.closeHandler,style:{float:"right",color:"red",cursor:"pointer"}},l.a.createElement("img",{style:{width:50,marginTop:34},src:n(311)})),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(s.d,null,t.name))),l.a.createElement("div",null,l.a.createElement("div",{style:{width:"100%",display:"flex",flexWrap:"wrap"}},Object(c.e)(o,a.type,null,!0)))))},t}(l.a.Component),w=Object(o.b)(u.a).withConfig({displayName:"article__BreadcrumbLink"})(["cursor:pointer;text-decoration:none;color:white;font-family:'Lato';letter-spacing:0.03em;background-color:#2b2b2b;padding:7.5px;"]),E=function(e){var t=e.titles.map(function(e){return{url:"/themes/"+p()(e),title:e}}),n=o.b.div.withConfig({displayName:"article__Container"})(["display:flex;flex-direction:row;"]);return l.a.createElement(n,{style:{marginTop:30}},"FILED UNDER: ",t.map(function(e,n){var i=e.url,r=e.title;return l.a.createElement("div",{key:"Breadcrumb-"+n},l.a.createElement(w,{to:i},r)," ",n==t.length-1?null:"and"," ")}))},C=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props,i=t.data,r=t.transition,a=m.parse(this.props.location.search),o=a.quickfact?(i.nodeArticle.relationships.field_article_related_content||[]).filter(function(e){return"node__quickfact"===e.__typename&&p()(e.title)==a.quickfact})[0]:null,s={};i.nodeArticle.relationships.field_belongs_to_subtheme.map(function(e){e.relationships.field_belongs_to_theme.map(function(e){var t=e.name;s[t]=!0})});var d=Object.keys(s),w=a.tag?(i.nodeArticle.relationships.field_tags||[]).filter(function(e){return p()(e.name)==a.tag})[0]:null,C=i.nodeArticle.relationships.field_main_image,k=C&&C.localFile.childImageSharp.resolutions.src;return l.a.createElement("div",{style:{position:"relative",height:"100vh"}},l.a.createElement(f,null),l.a.createElement(_,{quickFact:o,closeHandler:function(){Object(u.c)("?")},transition:r}),l.a.createElement(v,{queryParams:a,tag:w,transition:r,closeHandler:function(){Object(u.c)("?")}}),l.a.createElement(x,null,l.a.createElement(u.a,{style:{color:"inherit"},to:"/articles/"},l.a.createElement("img",{style:{height:24,opacity:.8,display:"inline-block",marginBottom:0,marginRight:15,verticalAlign:"middle"},src:n(134)}),l.a.createElement("h4",{style:{marginBottom:0,display:"inline-block",verticalAlign:"middle"}},"all articles")),l.a.createElement(E,{titles:d})),l.a.createElement(h,{background:k}),l.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.92)",marginTop:"calc(100vh - 174px)",width:"calc(100% - 60px)",position:"relative",zIndex:999,marginLeft:30,boxShadow:"0px 0px 36px -4px rgba(117, 117, 117, 0.8)"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{style:{marginLeft:0,marginRight:30},className:"column _75"},l.a.createElement(y,null,l.a.createElement(g,{style:{fontSize:24,fontWeight:"normal",lineHeight:1.5},dangerouslySetInnerHTML:{__html:i.nodeArticle.field_large_callout_text.processed}}),l.a.createElement("div",{style:{lineHeight:1.7},dangerouslySetInnerHTML:{__html:i.nodeArticle.field_full_version.processed}}),l.a.createElement("div",{style:{textAlign:"center",marginTop:60,marginBottom:60}}),l.a.createElement("p",{style:{color:"lightgrey",letterSpacing:"0.04em",fontFamily:"Lato",textAlign:"center"}},"NOTE: ",l.a.createElement("span",{dangerouslySetInnerHTML:{__html:i.nodeArticle.field_old_article_discl&&i.nodeArticle.field_old_article_discl.processed}})))),l.a.createElement("div",{style:{textAlign:"center"},className:"column"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{style:{textAlign:"center",paddingTop:45},className:"column"},l.a.createElement(b,null,i.nodeArticle.title),l.a.createElement("h4",{style:{marginBottom:45}},"By ",i.nodeArticle.field_author&&i.nodeArticle.field_author.processed))),l.a.createElement("div",{style:{width:180,height:180,marginBottom:15,border:"solid thin lightgrey",overflow:"hidden",display:"inline-block",borderRadius:"50%"}},l.a.createElement("img",{style:{width:180},src:i.nodeArticle.relationships.field_author_image&&i.nodeArticle.relationships.field_author_image.localFile.publicURL})),l.a.createElement("div",{style:{maxWidth:300,fontFamily:"Lato",fontWeight:700,fontSize:14,margin:"0 auto",marginBottom:60,letterSpacing:"0.04em"},dangerouslySetInnerHTML:{__html:i.nodeArticle.field_author_bio&&i.nodeArticle.field_author_bio.processed}}),l.a.createElement("div",{style:{marginBottom:15}},l.a.createElement("h4",null,"tags:"),(i.nodeArticle.relationships.field_tags||[]).map(function(e){return l.a.createElement(u.a,{to:"?"+m.stringify(Object.assign({},a,{tag:p()(e.name)})),key:"tag-"+e.name,className:"tag"},e.name)})),l.a.createElement("div",{style:{height:200}}),l.a.createElement("button",{style:{marginRight:30},onClick:function(){e.setState({teaching:!1})}},"Related Content"),l.a.createElement("button",{onClick:function(){e.setState({teaching:!0})}},"Teaching"),(i.nodeArticle.relationships.field_article_related_content||[]).filter(function(t){return!e.state.teaching||t.field_include_in_the_teaching_se}).map(function(e,t){if("node__quickfact"==e.__typename){var n=Object.assign({},a,{quickfact:p()(e.title)});return l.a.createElement(c.d,{key:"quick-fact-card-"+t,link:"?"+m.stringify(n),quickfact:e,i:t,style:{cursor:"pointer",textAlign:"left",border:"1px solid #888888",padding:20}})}return"node__article"==e.__typename?l.a.createElement(c.a,{key:"article-"+t,i:t,article:e,relatedContent:!0}):"node__faq"==e.__typename?l.a.createElement(c.c,{key:"faqcard-"+t,i:t,faq:e}):"node__clip"==e.__typename?l.a.createElement(c.b,{key:"clip-card-"+t,i:t,clip:e,playable:!0}):void 0})))))},t}(l.a.Component);t.default=C;var k="3107989190"},311:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTYuMTcgNjE2LjE4Ij48dGl0bGU+Y2xvc2U8L3RpdGxlPjxyZWN0IHg9IjI3MC43MiIgeT0iLTEwMi44NyIgd2lkdGg9Ijc0LjczIiBoZWlnaHQ9IjgyMS45MyIgcng9IjIxLjU3IiByeT0iMjEuNTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuNjIgMzA4LjA5KSByb3RhdGUoLTQ1KSIvPjxyZWN0IHg9Ii0xMDIuODgiIHk9IjI3MC43MiIgd2lkdGg9IjgyMS45MyIgaGVpZ2h0PSI3NC43MyIgcng9IjIxLjU3IiByeT0iMjEuNTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuNjEgMzA4LjA4KSByb3RhdGUoLTQ1KSIvPjwvc3ZnPg=="},443:function(e,t,n){var i=n(34),r=n(25);n(444)("keys",function(){return function(e){return r(i(e))}})},444:function(e,t,n){var i=n(12),r=n(21),a=n(13);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],l={};l[e]=t(n),i(i.S+i.F*a(function(){n(1)}),"Object",l)}},95:function(e,t,n){"use strict";n(100);var i=n(1),r=n.n(i),a=n(87),l=n(88),o=n(89),c=n.n(o),s=a.b.div.withConfig({displayName:"allClips__ClipCard"})(["width:300px;background-color:#292929;color:white;display:inline-block;vertical-align:top;margin-right:30px;margin-bottom:30px;transition:all .3s;border-radius:6px;&:hover{transition:all .3s;}cursor:pointer;"]),d=a.b.div.withConfig({displayName:"allClips__ClipCaption"})(["font-family:'Lato';font-size:14px;line-height:1.5;font-weight:300;letter-spacing:0.04em;padding:15px 30px 30px 30px;"]),p=a.b.div.withConfig({displayName:"allClips__ClipPoster"})(["height:200px;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),u=function(e){var t=e.clip,n=e.link;return r.a.createElement(s,null,n?r.a.createElement(l.a,{style:{color:"inherit",textDecoration:"none"},to:"/clips/"+c()(t.title)},r.a.createElement(p,{background:t.relationships.field_poster_image&&t.relationships.field_poster_image.localFile.publicURL}),r.a.createElement(d,null,t.title)):r.a.createElement("iframe",{title:t.title,src:(t.field_external_video_url&&t.field_external_video_url.uri)+"?title=0&byline=0&portrait=0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))};t.a=function(e){var t=e.data,n=e.selected,i=t.allNodeClip.edges;return n&&(i=i.filter(function(e){return"all"===n||e.node.field_episode===parseInt(n)})),r.a.createElement("div",{style:{padding:"0 30px"}},i.map(function(e,t){return r.a.createElement(u,{key:"clip-"+t,clip:e.node,link:!0})}))}}}]);
//# sourceMappingURL=component---src-templates-article-js-0758025ba627769b9ecf.js.map