(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{105:function(e,t,i){"use strict";var n=i(96),g=i(94),r=i(87),a=(r.b.div.withConfig({displayName:"Title"})(["color:white;text-align:center;font-family:Lato;font-size:36px;font-weight:300;letter-spacing:0.04em;padding-top:120px;margin-bottom:75px;"]),i(92),i(56)),l=i.n(a),o=i(1),C=i.n(o),I=function(e){var t=e.color;return e.rotate,C.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18.177 30.139"},C.a.createElement("path",{fill:t,d:"M15.2,15.034a2.2,2.2,0,0,1,.159-.226Q21.785,7.639,28.224.48a1.027,1.027,0,0,1,1.585.04,1.367,1.367,0,0,1,.02,1.76Q22.912,9.974,16,17.667a1.106,1.106,0,0,1-1.859,0Q7.975,10.763,1.806,3.858c-.494-.554-1-1.1-1.481-1.671A1.372,1.372,0,0,1,.555.2,1.07,1.07,0,0,1,2.013.413Q3.177,1.7,4.338,3q3.147,3.5,6.295,7,2.174,2.421,4.352,4.841a1.261,1.261,0,0,1,.127.2C15.14,15.039,15.168,15.034,15.2,15.034Z",transform:"translate(0 30.139) rotate(-90)"}))},A=(i(71),i(89)),c=i.n(A),s=i(91),p=Object(r.b)(g.a).withConfig({displayName:"SubThemeCard__Container"})(["color:white;padding-top:30px;padding-right:30px;display:flex;flex-direction:column;"]),d=r.b.div.withConfig({displayName:"SubThemeCard__Row"})(["display:flex;flex-direction:row;align-items:center;"]),u=(r.b.div.withConfig({displayName:"SubThemeCard__Column"})(["display:flex;flex-direction:column;background-color:",";padding:15px;"],s.c),r.b.div.withConfig({displayName:"SubThemeCard__Title"})(["font-family:Lato;font-size:12pt;line-height:39px;font-weight:600;letter-spacing:0.022em;text-transform:uppercase;color:",";width:auto;padding-left:15px;padding-right:15px;"],function(e){return e.color?e.color:s.m})),m=r.b.div.withConfig({displayName:"SubThemeCard__Description"})(["font-family:'Tisa Pro';font-size:20px;line-height:24px;color:",";"],s.m),h=r.b.div.withConfig({displayName:"SubThemeCard__ArrowContainer"})(["width:25px;height:20px;"]),f=function(e){var t=e.color;return C.a.createElement(h,null,C.a.createElement(q.a,{color:t}))},b=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.name.indexOf(":")>=0?e.name.split(":")[1]:e.name,i=e.description?e.description.value:"!empty content, check drupal!",n="/subthemes/"+c()(e.name);return C.a.createElement(p,{href:n},C.a.createElement(d,null,C.a.createElement(f,{color:s.l}),C.a.createElement(u,{color:s.l},t)),C.a.createElement(m,{dangerouslySetInnerHTML:{__html:i}}))},t}(C.a.Component),y=r.b.div.withConfig({displayName:"ThemeCard__Container"})(["position:relative;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:51px;padding-bottom:98px;background-color:",";&::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:",";filter:blur(12px);filter:opacity(53%);}@media (max-width:812px){padding-top:0;}"],s.m,function(e){return e.gradient?e.gradient:null}),w=r.b.div.withConfig({displayName:"ThemeCard__MainImage"})(["position:relative;width:832px;height:583px;background-size:cover !important;background-attachment:fixed;transition:all .5s ease;background:",";filter:opacity(92%);@media (min-width:1025px){}@media (max-width:812px){width:100vw;height:50vh;}"],function(e){return e.background?"url("+e.background+") center no-repeat":"none"}),v=r.b.div.withConfig({displayName:"ThemeCard__Info"})(["position:relative;margin-top:-200px;margin-bottom:-100px;z-index:1;backdrop-filter:blur(12px);&::after{content:'';position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:",";filter:blur(12px);filter:opacity(53%);}@media (min-width:1025px){}@media (max-width:812px){}"],function(e){return e.gradient?e.gradient:null}),x=r.b.div.withConfig({displayName:"ThemeCard__Title"})(["font-family:Lato;text-align:left;letter-spacing:0.02em;line-height:54px;color:",";font-size:20pt;font-weight:600;"],s.d),_=r.b.div.withConfig({displayName:"ThemeCard__Description"})(["font-family:Tisa Pro;font-size:22pt;line-height:30px;margin-bottom:45px;& > p{margin:0;}color:",";"],s.m),E=r.b.div.withConfig({displayName:"ThemeCard__ChevronContainer"})(["cursor:pointer;position:absolute;right:0;width:18px;height:30px;transform:rotate(","deg);transition:all 0.3s ease-out;@media (max-width:812px){right:-25px;}"],function(e){return e.open?90:0}),k=function(e){var t=e.open;return C.a.createElement(E,{open:t},C.a.createElement(I,{color:s.m}))},N=r.b.div.withConfig({displayName:"ThemeCard__SubThemes"})(["display:grid;grid-template-columns:45vw 45vw;padding-left:138px;padding-bottom:30px;@media (min-width:1025px){grid-template-columns:30vw 30vw 30vw;}@media (max-width:812px){padding-left:38px;grid-template-columns:90vw;}"]),L=r.b.div.withConfig({displayName:"ThemeCard__Row"})(["position:relative;display:flex;flex-direction:column;justify-content:center;"]),S=Object(r.b)(L).withConfig({displayName:"ThemeCard__FirstRow"})(["margin-top:16px;margin-left:138px;margin-right:138px;@media (min-width:1025px){}@media (max-width:812px){margin-left:38px;margin-right:38px;}"]),M=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={open:!1},i}return l()(t,e),t.prototype.render=function(){var e=this,t=this.state.open,i=this.props,n=i.data,g=i.color,r=n.relationships.field_theme_image.localFile.childImageSharp.resolutions,a=(r.height,r.width,r.src),l=n.name,o=n.description&&n.description.processed,I=n.relationships.subthemes,A=Object(s.h)(g);return C.a.createElement(y,{open:t,gradient:A,onClick:function(){return e.setState({open:!t})}},C.a.createElement(w,{background:a}),C.a.createElement(v,{gradient:A},C.a.createElement(S,null,C.a.createElement(x,null,l),C.a.createElement(_,{dangerouslySetInnerHTML:{__html:o}}),C.a.createElement(k,{open:t})),C.a.createElement(L,null,t&&C.a.createElement(N,{gradient:A},I.map(function(e,t){return C.a.createElement(b,{key:t,data:e})})))))},t}(C.a.Component),T=i(104),j=i(95),z=i(97),F=i(88),G=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e="/"+this.props.slug+"s/"+c()(this.props.title);return C.a.createElement(F.a,{to:e,className:this.props.className,style:this.props.style},this.props.type?C.a.createElement("h4",null,this.props.type):null,C.a.createElement("div",{className:"RCimage",style:{backgroundImage:"url("+this.props.imgSrc+")",backgroundSize:"cover",backgroundPosition:"center"}}),C.a.createElement("p",null,this.props.title),this.props.children)},t}(C.a.Component),O=Object(r.b)(G).withConfig({displayName:"rccard__StyledRCCard"})(["display:inline-block;height:auto;flex:"," "," ",'px;border:solid thin lightgrey;background-color:#f7f7f7;-webkit-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);-moz-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);margin-bottom:20px;font-family:"ff-tisa-web-pro";vertical-align:top;text-align:left;margin-left:10px;margin-right:10px;max-width:',"px color:inherit;text-decoration:inherit;"," "," ",""],100,100,350,350*.7,function(e){return e.background&&Object(r.a)(["background-image:url('","');background-size:cover;"],e.background)},function(e){return"Article"===e.type&&Object(r.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)},function(e){return"QuickFact"===e.type&&Object(r.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)}),H=r.b.div.withConfig({displayName:"Filter__Row"})(["display:flex;flex-direction:row;padding:10px;color:",";"],function(e){return e.color?e.color:"white"}),R=r.b.div.withConfig({displayName:"Filter__Element"})(["cursor:pointer;margin-left:10px;font-weight:",";"],function(e){return e.selected?"bold":"normal"}),Z=r.b.div.withConfig({displayName:"Filter__Title"})(["text-decoration:underline;"]),D=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.selected,i=e.onSelected,n=e.color;return C.a.createElement(H,{color:n},"Sort by: ",C.a.createElement(R,{selected:"all"===t,onClick:function(){return i("all")}},"All"),C.a.createElement(R,{selected:"1"===t,onClick:function(){return i("1")}},C.a.createElement(Z,null,"Episode One:")," The Difference Between Us"),C.a.createElement(R,{selected:"2"===t,onClick:function(){return i("2")}},C.a.createElement(Z,null,"Episode Two:")," The Story We Tell"),C.a.createElement(R,{selected:"3"===t,onClick:function(){return i("3")}},C.a.createElement(Z,null,"Episode Three:")," The House We Live In"))},t}(o.Component),B=i(93),q=i(98);i.d(t,"d",function(){return n.a}),i.d(t,"e",function(){return g.a}),i.d(t,!1,function(){}),i.d(t,"l",function(){return M}),i.d(t,"k",function(){return T.a}),i.d(t,"a",function(){return j.a}),i.d(t,"b",function(){return z.a}),i.d(t,"h",function(){return O}),i.d(t,"c",function(){return D}),i.d(t,"f",function(){return B.a}),i.d(t,"g",function(){return B.b}),i.d(t,"j",function(){return I}),i.d(t,"i",function(){return q.a})},120:function(e,t,i){"use strict";i.d(t,"a",function(){return x}),i.d(t,"b",function(){return _}),i.d(t,"c",function(){return E}),i.d(t,"d",function(){return N}),i.d(t,"e",function(){return L}),i(100),i(73);var n=i(115),g=i.n(n),r=(i(129),i(92),i(58),i(130),i(131)),a=i.n(r),l=(i(57),i(56)),o=i.n(l),C=(i(70),i(1)),I=i.n(C),A=i(87),c=i(88),s=i(105),p=i(89),d=i.n(p),u=i(132),m=(i(133),A.b.div.withConfig({displayName:"subtheme__SubthemeTitle"})(["font-weight:normal;text-rendering:optimizeLegibility;font-size:42px;font-weight:300;padding:15px;font-family:'Lato';text-align:center;color:rgba(59,59,59,0.8);margin-bottom:15px;margin-top:15px;"])),h=3,f=function(e){return e||[]},b=function(e){for(var t,i,n=e.length;0!==n;)i=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[i],e[i]=t;return e},y=A.b.div.withConfig({displayName:"subtheme__ArticleTitle"})(["font-family:'Lato';font-size:30px;font-weight:400;color:#2b2b2b;letter-spacing:0.03em;padding:0px 30px 0 0px;line-height:1.25;margin-bottom:15px;"]),w=A.b.div.withConfig({displayName:"subtheme__Poster"})(["width:100%;height:66%;background-color:grey;margin-bottom:15px;overflow:hidden;"]),v=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={},i}return o()(t,e),t.prototype.render=function(){var e=this;return this.props.clip.relationships.field_poster_image?this.state.play?I.a.createElement(w,null,I.a.createElement("iframe",{title:"player",src:"https://player.vimeo.com/video/18769983?title=0&byline=0&portrait=0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0})):this.props.linkable?I.a.createElement(c.a,{to:"../clips/"+d()(this.props.clip.title)},I.a.createElement(w,null,I.a.createElement("img",{alt:"poster image",src:this.props.clip.relationships.field_poster_image.localFile.publicURL}))):I.a.createElement(w,{onClick:function(){return e.setState({play:!0})}},I.a.createElement("img",{alt:"another image",src:this.props.clip.relationships.field_poster_image.localFile.publicURL})):I.a.createElement(w,null)},t}(I.a.Component),x=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.article,i=e.i,n=e.relatedContent,g=e.style,r=void 0===g?{}:g,a=e.onOpen,l="/articles/"+d()(t.title);return n?I.a.createElement(s.h,{style:Object.assign({},r,{padding:30}),key:"article-"+i,article:t,imgSrc:t.relationships.field_main_image&&t.relationships.field_main_image.localFile&&t.relationships.field_main_image.localFile.publicURL,title:t.title,type:"Article",slug:"article",changed:t.changed},t.field_short_version&&I.a.createElement("p",{className:"RCcard-large-text",dangerouslySetInnerHTML:{__html:t.field_short_version.processed}})):I.a.createElement(s.b,{style:Object.assign({},r,{padding:0}),key:"article-"+i,title:t.title,type:"Article",slug:"article",changed:t.changed,onClick:function(){return a(l)}},I.a.createElement("div",{className:"articleCardImage",style:{backgroundImage:t.relationships.field_main_image?"url("+t.relationships.field_main_image.localFile.publicURL+")":null}}),t.field_short_version&&I.a.createElement("div",{style:{padding:30}},I.a.createElement("h4",{style:{marginBottom:15}},"Article by ",t.field_author&&t.field_author.processed),I.a.createElement(y,null,t.title),'"',I.a.createElement("span",{className:"card-large-text",dangerouslySetInnerHTML:{__html:t.field_short_version.processed}})))},t}(I.a.Component),_=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.clip,i=void 0===t?{relationships:{}}:t,n=e.i,g=e.relatedContent,r=e.linkable,a=e.style,l=void 0===a?{}:a;return g?I.a.createElement(s.h,{key:"clip-"+n,title:i.title,slug:"clip",changed:i.changed,style:l},I.a.createElement(v,{clip:i,linkable:r}),I.a.createElement("p",{style:{paddingLeft:30,paddingRight:30,paddingBottom:20},className:"caption"},i.title)):I.a.createElement(s.b,{key:"clip-"+n,title:i.title,type:"Clip",slug:"clip",style:l,changed:i.changed,link:"/clips/"+d()(i.title)},I.a.createElement(v,{clip:i}),I.a.createElement("p",{style:{paddingLeft:30,paddingRight:30,paddingBottom:20},className:"caption"},i.title))},t}(I.a.Component),E=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.faq,i=void 0===t?{}:t,n=e.i,g=e.style,r=void 0===g?{}:g;return I.a.createElement(s.b,{style:Object.assign({},r,{padding:30,display:"flex",flexDirection:"column",justifyContent:"center"}),key:"faq-"+n,slug:"faq",changed:i.changed,type:"FAQ",link:"/qa/"+d()(i.title)},I.a.createElement("h4",{style:{marginBottom:15}},"Q&A"),I.a.createElement("p",{className:"card-large-text"},i.title))},t}(I.a.Component),k=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.interview,i=void 0===t?{}:t,n=e.i,g=(e.relatedContent,e.style),r=void 0===g?{}:g,a=e.onOpen,l="/interviews/"+d()(i.title);return I.a.createElement(s.b,{style:Object.assign({},r,{padding:30,display:"flex",flexDirection:"column",justifyContent:"center"}),key:"interview-"+n,type:"Interview",title:i.title,slug:"interview",changed:i.changed,onClick:function(){return a(l)}},I.a.createElement("div",{className:"interviewCardPhoto",style:{backgroundImage:i.relationships.field_interviewee?"url("+i.relationships.field_interviewee.localFile.publicURL+")":null}}),I.a.createElement("h4",{style:{marginTop:15,marginBottom:15,lineHeight:1.5,textAlign:"center"}},i.title),I.a.createElement("p",{style:{fontStyle:"italic",textAlign:"center"},className:"card-large-text"},i.field_key_quote.processed))},t}(I.a.Component),N=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.quickfact,i=e.i,n=(e.relatedContent,e.style),g=void 0===n?{}:n,r=a()(e,["quickfact","i","relatedContent","style"]);return I.a.createElement(s.b,Object.assign({},r,{key:"quickfact-"+i,type:"QuickFact",title:t.title,slug:"quickfact",changed:t.changed,style:Object.assign({},g,{padding:15})}),I.a.createElement("h4",null,t.title),I.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.field_quickfact.processed}}))},t}(I.a.Component),L=function(e,t,i,n,g){return g||(g=function(e){}),f(e.articles).filter(function(e){return!t||"recent"===t||"article"===t}).map(function(e,t){return I.a.createElement(x,{key:"article-"+e.title,onOpen:function(t){return g(t,e)},article:e,i:t,relatedContent:i})}).concat(f(e.clips).filter(function(e){return!t||"recent"===t||"clip"===t}).map(function(e,t){return I.a.createElement(_,{key:"clip-"+e.title,linkable:n,clip:e,i:t,relatedContent:i})}),f(e.faqs).filter(function(e){return!t||"recent"===t||"faq"===t}).map(function(e,t){return I.a.createElement(E,{key:"faq-"+e.title,faq:e,i:t,relatedContent:i})}),f(e.interviews).filter(function(e){return!t||"recent"===t||"interview"===t}).map(function(e,t){return I.a.createElement(k,{key:"interview-"+e.title,onOpen:function(t){return g(t,e)},interview:e,i:t,relatedContent:i})}),f(e.quickfacts).filter(function(e){return!t||"recent"===t||"quickfact"===t}).map(function(e,t){return I.a.createElement(N,{key:"quickfact-"+e.title,quickfact:e,i:t,relatedContent:i})}))},S=new Map([["articles","article"],["interviews","interview"],["faqs","faq"],["clips","clip"],["recently added","recent"]]),M={color:"rgb(255, 132, 0)",marginRight:15,marginBottom:15,fontSize:14,letterSpacing:"0.125em"},T=Object.assign({},M,{fontWeight:"700",borderBottom:"solid 2px hotpink"}),j=function(e){e.queryParams,e.name;var t=e.filter,i=e.subtheme,n=e.toggleFilter;return I.a.createElement("div",{style:{mixBlendMode:"normal",textAlign:"center",marginBottom:15}},I.a.createElement("span",{style:{marginRight:15,fontFamily:"Lato",fontWeight:700,fontSize:14,letterSpacing:"0.2em",textTransform:"uppercase",color:"hotpink"}},"Sort by: "),I.a.createElement("button",{onClick:function(){n(null)},style:t?M:T},"All"),Array.from(S.keys()).filter(function(e){return"recently added"===e||(t=e,i.relationships[t]);var t}).map(function(e){var i=S.get(e);return I.a.createElement("button",{key:e,onClick:function(){n(i)},style:Object.assign({},t===i?T:M,{float:"none",fontWeight:700,letterSpacing:"0.2em",color:"hotpink"})},e)}))},z=A.b.div.withConfig({displayName:"subtheme__Row"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;"]),F=A.b.div.withConfig({displayName:"subtheme__PopupCard"})(["position:relative;width:33vw;height:33vw;min-width:300px;min-height:300px;background-color:gray;border-radius:100px;border:1px solid grey;overflow:hidden;"]),G=A.b.div.withConfig({displayName:"subtheme__CloseButton"})(["cursor:pointer;position:absolute;top:30px;right:30px;"]),O=A.b.div.withConfig({displayName:"subtheme__TopImage"})(["height:50%;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),H=A.b.div.withConfig({displayName:"subtheme__Description"})([""]),R=function(e){function t(t){var i;return(i=e.call(this,t)||this).getShuffle=function(e){if("undefined"!=typeof window){var t=window.localStorage.getItem("shuffle");return t?t=JSON.parse(t):(t=b(u.range(e)),window.localStorage.setItem("shuffle",JSON.stringify(t))),t}},i.close=function(){i.setState({popup:!i.state.popup,card:null})},i.open=function(e,t){i.setState({popup:!0,card:Object.assign({},t,{link:e})})},i.updateOrder(t,null),i.state={numCards:h,filter:null,popup:!1,card:null},i.close=i.close.bind(g()(g()(i))),i.open=i.open.bind(g()(g()(i))),i.toggleFilter=i.toggleFilter.bind(g()(g()(i))),i}o()(t,e);var i=t.prototype;return i.toggleFilter=function(e){this.state.filter===e?this.setState({filter:null}):this.setState({filter:e})},i.shouldComponentUpdate=function(e,t){return t.numCards!==this.state.numCards||t.filter!==this.state.filter||t.popup!==this.state.popup},i.componentWillUpdate=function(e,t){this.state.filter,t.filter},i.updateOrder=function(e,t){if(!e.filter){var i=L(e.data.relationships,t).length;this.order=this.getShuffle(i)}},i.render=function(){var e,t,i,n=this.props.data,g=this.state,r=g.filter,a=g.popup,l=g.card,o=L(n.relationships,r,null,!0,this.open),C=r?o.sort(function(e,t){return t.props.changed-e.props.changed}):(e=o,t=this.order,i=new Array(e.length),t&&t.forEach(function(t,n){i[n]=e[t]}),i),A=n.description?I.a.createElement("div",{className:"subtheme-description",key:"description",dangerouslySetInnerHTML:{__html:n.description.processed}}):null;return I.a.createElement("div",null,I.a.createElement(s.f,{id:"subtheme-overlay",visible:a},I.a.createElement(s.g,null,I.a.createElement(z,null,l&&I.a.createElement(F,null,I.a.createElement(G,{onClick:this.close},"Close"),I.a.createElement(O,{background:l.relationships.field_main_image&&l.relationships.field_main_image.localFile.publicURL}),I.a.createElement("h1",null,l.title),I.a.createElement(H,{dangerouslySetInnerHTML:{__html:l.field_short_version?l.field_short_version.processed:null}}),I.a.createElement(c.a,{to:l.link},"Read the article"))))),I.a.createElement(m,null,n.name),A,I.a.createElement(j,{toggleFilter:this.toggleFilter,name:this.props.name,filter:r,subtheme:n}),I.a.createElement("div",null,C.map(function(e,t){return I.a.createElement("div",{key:t},e)})))},t}(I.a.Component);Object(A.b)(R).withConfig({displayName:"subtheme__SubthemeContainer"})(["background-color:rgba(247,247,247,0.97);padding:45px 30px;border-bottom:solid thin grey;margin:60px 30px;"])},274:function(e,t,i){"use strict";i.r(t),i.d(t,"interviewsQuery",function(){return y}),i(70);var n=i(56),g=i.n(n),r=i(1),a=i.n(r),l=i(87),o=i(120),C=i(88),I=l.b.div.withConfig({displayName:"interview__KeyQuote"})(['font-size:60px;font-weight:500;margin-bottom:60px;padding:162px 120px 138px 120px;width:100%;line-height:1.25;text-align:center;border-bottom:solid thin lightgrey;font-family:"orpheuspro";background-color:#2b2b2b;color:snow;']),A=l.b.div.withConfig({displayName:"interview__AuthorBioText"})(["width:300px;height:auto;z-index:9999999999;background-color:white;padding:30px;font-size:12px;line-height:1.5;font-weight:500;opacity:0.9;"]),c=l.b.div.withConfig({displayName:"interview__InterviewTitle"})(['margin-bottom:45px;font-size:60px;font-weight:500;line-height:1.25;position:relative;line-height:1;font-family:"orpheuspro";']),s=l.b.div.withConfig({displayName:"interview__InterviewColumn"})(["padding:30px;top:-150px;background-color:white;position:relative;font-size:17px;max-width:760px;line-height:1.75;margin-left:30px !important;"]),p=l.b.div.withConfig({displayName:"interview__Overlay"})(["background-color:#FFFFE0;position:fixed;opacity:0.8;left:0;top:0;height:100%;width:100%"]),d=l.b.div.withConfig({displayName:"interview__Centered"})(["border:1px solid #888888;opacity:1;position:relative;top:50%;width:50%;padding:20px;transform:translate(50%,-50%);"]),u=l.b.div.withConfig({displayName:"interview__AuthorImage"})(["height:420px;width:420px;border:solid thin lightgrey;border-radius:50%;right:calc(55% - 200px);background-size:cover;background-position:center;background-image:",";overflow:hidden;"],function(e){return e.background?"url("+e.background+")":"none"}),m=l.b.div.withConfig({displayName:"interview__TopText"})(["width:100%;text-align:center;padding:30px 45px;top:0;position:absolute;color:white;"]),h=function(e){var t=e.data;return a.a.createElement("div",{style:{fontFamily:"Lato"}},t.nodeInterview.field_interviewee_bio.processed)},f=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){var e=this.props.quickFact;if(!e)return null;var t={articles:[],clips:[],faqs:[],quickFacts:[]};return(e.relationships.field_related_content||[]).forEach(function(e){"node__faq"==e.__typename?t.faqs.push(e):"node__article"==e.__typename?t.articles.push(e):"node__clip"==e.__typename&&t.clips.push(e)}),a.a.createElement(p,null,a.a.createElement(d,null,a.a.createElement("div",{onClick:this.props.closeHandler,style:{float:"right",color:"red"}},a.a.createElement("b",null,"Close")),a.a.createElement("h3",null,e.title),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.field_quickfact.processed}}),Object(o.e)(t).slice(0,2)))},t}(a.a.Component),b=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={},i}return g()(t,e),t.prototype.render=function(){var e=this,t=this.props.data;return a.a.createElement("div",{className:"row"},a.a.createElement(f,{quickFact:this.state.quickFact,closeHandler:function(){return e.setState({quickFact:null})}}),a.a.createElement(m,null,a.a.createElement(C.a,{style:{color:"inherit"},to:"/interviews/"},a.a.createElement("img",{style:{height:24,opacity:.8,display:"inline-block",marginBottom:0,marginRight:15,verticalAlign:"middle"},src:i(445)}),a.a.createElement("h4",{style:{marginBottom:0,display:"inline-block",verticalAlign:"middle"}},"all interviews"))),a.a.createElement(I,{dangerouslySetInnerHTML:{__html:t.nodeInterview.field_key_quote.processed}}),a.a.createElement(s,{className:"column"},a.a.createElement(c,null,a.a.createElement("h4",{style:{marginBottom:15}},"Interview with"),t.nodeInterview.field_interviewee_name.processed),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.nodeInterview.field_full_length_version.processed}}),a.a.createElement("div",{style:{height:200}}),(t.nodeInterview.relationships.backref_field_related_content||[]).map(function(t){return a.a.createElement("div",{style:{cursor:"pointer",border:"1px solid #888888",padding:20}},a.a.createElement("h3",null,t.title),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.field_quickfact.processed},onClick:function(){return e.setState({quickFact:t})}}))})),a.a.createElement("div",{className:"column _25"},a.a.createElement(u,{background:t.nodeInterview.relationships.field_interviewee&&t.nodeInterview.relationships.field_interviewee.localFile.publicURL}),a.a.createElement(A,null,a.a.createElement(h,{data:t}," "))))},t}(a.a.Component);t.default=b;var y="2180119832"},445:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA2LjUgMTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYuNSAxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8dGl0bGU+ZG93bjwvdGl0bGU+CjxtZXRhZGF0YT48P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MyA3OS4xNjEzNTYsIDIwMTcvMDkvMDctMDE6MTE6MjIgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+CiAgICAgICAgIDxkYzp0aXRsZT4KICAgICAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+ZG93bjwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpBbHQ+CiAgICAgICAgIDwvZGM6dGl0bGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz48L21ldGFkYXRhPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNi4zLDAuOWMwLjItMC4yLDAuMy0wLjUsMC4xLTAuN2wwLDBDNi4yLDAsNS44LTAuMSw1LjcsMC4xbDAsMEwwLjEsNS42QzAsNS44LDAsNi4xLDAuMSw2LjNsMCwwbDAsMGw1LjUsNS41CgljMC4yLDAuMiwwLjUsMC4yLDAuNywwbDAsMGMwLjItMC4yLDAuMi0wLjUsMC0wLjdsMCwwbC01LjItNUw2LjMsMC45eiIvPgo8L3N2Zz4K"},95:function(e,t,i){"use strict";i(100);var n=i(1),g=i.n(n),r=i(87),a=i(88),l=i(89),o=i.n(l),C=r.b.div.withConfig({displayName:"allClips__ClipCard"})(["width:300px;background-color:#292929;color:white;display:inline-block;vertical-align:top;margin-right:30px;margin-bottom:30px;transition:all .3s;border-radius:6px;&:hover{transition:all .3s;}cursor:pointer;"]),I=r.b.div.withConfig({displayName:"allClips__ClipCaption"})(["font-family:'Lato';font-size:14px;line-height:1.5;font-weight:300;letter-spacing:0.04em;padding:15px 30px 30px 30px;"]),A=r.b.div.withConfig({displayName:"allClips__ClipPoster"})(["height:200px;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),c=function(e){var t=e.clip,i=e.link;return g.a.createElement(C,null,i?g.a.createElement(a.a,{style:{color:"inherit",textDecoration:"none"},to:"/clips/"+o()(t.title)},g.a.createElement(A,{background:t.relationships.field_poster_image&&t.relationships.field_poster_image.localFile.publicURL}),g.a.createElement(I,null,t.title)):g.a.createElement("iframe",{title:t.title,src:(t.field_external_video_url&&t.field_external_video_url.uri)+"?title=0&byline=0&portrait=0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))};t.a=function(e){var t=e.data,i=e.selected,n=t.allNodeClip.edges;return i&&(n=n.filter(function(e){return"all"===i||e.node.field_episode===parseInt(i)})),g.a.createElement("div",{style:{padding:"0 30px"}},n.map(function(e,t){return g.a.createElement(c,{key:"clip-"+t,clip:e.node,link:!0})}))}}}]);
//# sourceMappingURL=component---src-templates-interview-js-76a16ae31a1bdab11a97.js.map