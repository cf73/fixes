(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return h}),n(40),n(253);var i=n(17),a=n.n(i),r=n(0),o=n.n(r),l=n(223),c=n(226),d=(n(224),n(247)),p=n(249),s=l.b.div.withConfig({displayName:"qa__Title"})([""]),u=l.b.div.withConfig({displayName:"qa__IntroText"})(["font-weight:300;font-size:48px;line-height:1.25;z-index:99999;margin:60px 45px;font-family:'Lato';"]),m=function(e){var t=e.data;return o.a.createElement("div",{className:"articleCard"},o.a.createElement("div",{className:"articleExcerpt"},o.a.createElement(s,null,o.a.createElement(c.Link,{to:"/qa/"+t.fields.slug},t.field_question_summary?t.field_question_summary.processed:t.field_title.processed))))},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).onSelected=function(e){var t=p.parse(window.location.search);t.episode=e;var i="?"+p.stringify(Object.assign({},t));window.history.pushState({},window.document.title,i),n.setState({selected:e})},n.state={selected:"all"},n}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=p.parse(window.location.search).episode||"all";this.setState({selected:e})},n.render=function(){var e=this.state.selected,t=this.props,n=t.data,i=t.location;return o.a.createElement(d.e,{location:i},o.a.createElement("div",{style:{backgroundColor:"gray"}},o.a.createElement(d.d,{color:"black",selected:e,onSelected:this.onSelected}),o.a.createElement(u,null,"The experts answer your questions about issues from the film. Does race have a biological basis? Has the idea of race always been with us? Why does race still matter?"),n.allNodeFaq.edges.map(function(e,t){return o.a.createElement(m,{key:"QA-"+t,data:e.node})})))},t}(r.Component);t.default=f;var h="909370047"},232:function(e,t,n){"use strict";n(231);var i=n(0),a=n.n(i),r=n(223),o=n(226),l=n(224),c=n.n(l),d=r.b.div.withConfig({displayName:"AllClips__ClipCard"})(["width:300px;background-color:#292929;color:white;display:inline-block;vertical-align:top;margin-right:30px;margin-bottom:30px;transition:all .3s;border-radius:6px;&:hover{transition:all .3s;}cursor:pointer;"]),p=r.b.div.withConfig({displayName:"AllClips__ClipCaption"})(["font-family:'Lato';font-size:14px;line-height:1.5;font-weight:300;letter-spacing:0.04em;padding:15px 30px 30px 30px;"]),s=r.b.div.withConfig({displayName:"AllClips__ClipPoster"})(["height:200px;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),u=function(e){var t=e.clip,n=e.link;return a.a.createElement(d,null,n?a.a.createElement(o.Link,{style:{color:"inherit",textDecoration:"none"},to:"/clips/"+c()(t.title)},a.a.createElement(s,{background:t.relationships.field_poster_image&&t.relationships.field_poster_image.localFile.publicURL}),a.a.createElement(p,null,t.title)):a.a.createElement("iframe",{title:t.title,src:(t.field_external_video_url&&t.field_external_video_url.uri)+"?title=0&byline=0&portrait=0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))};t.a=function(e){var t=e.data,n=e.selected,i=t.allNodeClip.edges;return n&&(i=i.filter(function(e){return"all"===n||e.node.field_episode===parseInt(n)})),a.a.createElement("div",{style:{padding:"0 30px"}},i.map(function(e,t){return a.a.createElement(u,{key:"clip-"+t,clip:e.node,link:!0})}))}},239:function(e,t,n){var i=n(240);e.exports=function(e,t,n){var a=null==e?void 0:i(e,t);return void 0===a?n:a}},240:function(e,t,n){var i=n(241),a=n(246);e.exports=function(e,t){for(var n=0,r=(t=i(t,e)).length;null!=e&&n<r;)e=e[a(t[n++])];return n&&n==r?e:void 0}},241:function(e,t,n){var i=n(237),a=n(242),r=n(243),o=n(252);e.exports=function(e,t){return i(e)?e:a(e,t)?[e]:r(o(e))}},242:function(e,t,n){var i=n(237),a=n(238),r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;e.exports=function(e,t){if(i(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!a(e))||o.test(e)||!r.test(e)||null!=t&&e in Object(t)}},243:function(e,t,n){var i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,r=n(244)(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,function(e,n,i,r){t.push(i?r.replace(a,"$1"):n||e)}),t});e.exports=r},244:function(e,t,n){var i=n(245);e.exports=function(e){var t=i(e,function(e){return 500===n.size&&n.clear(),e}),n=t.cache;return t}},245:function(e,t,n){var i=n(255),a="Expected a function";function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(a);var n=function(){var i=arguments,a=t?t.apply(this,i):i[0],r=n.cache;if(r.has(a))return r.get(a);var o=e.apply(this,i);return n.cache=r.set(a,o)||r,o};return n.cache=new(r.Cache||i),n}r.Cache=i,e.exports=r},246:function(e,t,n){var i=n(238);e.exports=function(e){if("string"==typeof e||i(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},247:function(e,t,n){"use strict";var i=n(235),a=n(233),r=n(223),o=(r.b.div.withConfig({displayName:"Title"})(["color:white;text-align:center;font-family:Lato;font-size:36px;font-weight:300;letter-spacing:0.04em;padding-top:120px;margin-bottom:75px;"]),n(227),n(17)),l=n.n(o),c=n(0),d=n.n(c),p=function(e){var t=e.color,n=e.style;return d.a.createElement("div",{style:n},d.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18.177 30.139"},d.a.createElement("path",{fill:t,d:"M15.2,15.034a2.2,2.2,0,0,1,.159-.226Q21.785,7.639,28.224.48a1.027,1.027,0,0,1,1.585.04,1.367,1.367,0,0,1,.02,1.76Q22.912,9.974,16,17.667a1.106,1.106,0,0,1-1.859,0Q7.975,10.763,1.806,3.858c-.494-.554-1-1.1-1.481-1.671A1.372,1.372,0,0,1,.555.2,1.07,1.07,0,0,1,2.013.413Q3.177,1.7,4.338,3q3.147,3.5,6.295,7,2.174,2.421,4.352,4.841a1.261,1.261,0,0,1,.127.2C15.14,15.039,15.168,15.034,15.2,15.034Z",transform:"translate(0 30.139) rotate(-90)"})))},s=(n(104),n(224)),u=n.n(s),m=n(225),f=Object(r.b)(a.a).withConfig({displayName:"SubThemeCard__Container"})(["color:white;padding-top:30px;padding-right:30px;display:flex;flex-direction:column;"]),h=r.b.div.withConfig({displayName:"SubThemeCard__Row"})(["display:flex;flex-direction:row;align-items:center;"]),g=(r.b.div.withConfig({displayName:"SubThemeCard__Column"})(["display:flex;flex-direction:column;background-color:",";padding:15px;"],m.c),r.b.div.withConfig({displayName:"SubThemeCard__Title"})(["font-family:Lato;font-size:12pt;line-height:39px;font-weight:600;letter-spacing:0.022em;text-transform:uppercase;color:",";width:auto;padding-left:15px;padding-right:15px;"],function(e){return e.color?e.color:m.o})),x=r.b.div.withConfig({displayName:"SubThemeCard__Description"})(["font-family:'Tisa Pro';font-size:20px;line-height:24px;color:",";"],m.o),b=r.b.div.withConfig({displayName:"SubThemeCard__ArrowContainer"})(["width:25px;height:20px;"]),w=function(e){var t=e.color;return d.a.createElement(b,null,d.a.createElement(D.a,{color:t}))},y=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.name.indexOf(":")>=0?e.name.split(":")[1]:e.name,n=e.description?e.description.value:"!empty content, check drupal!",i="/subthemes/"+u()(e.name);return d.a.createElement(f,{href:i},d.a.createElement(h,null,d.a.createElement(w,{color:m.n}),d.a.createElement(g,{color:m.n},t)),d.a.createElement(x,{dangerouslySetInnerHTML:{__html:n}}))},t}(d.a.Component),_=r.b.div.withConfig({displayName:"ThemeCard__Container"})(["position:relative;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:51px;padding-bottom:98px;background-color:",";&::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:",";filter:blur(12px);filter:opacity(53%);}@media (max-width:812px){padding-top:0;}"],m.o,function(e){return e.gradient?e.gradient:null}),v=r.b.div.withConfig({displayName:"ThemeCard__MainImage"})(["position:relative;width:832px;height:583px;background-size:cover !important;background-attachment:fixed;transition:all .5s ease;background:",";filter:opacity(92%);@media (min-width:1025px){}@media (max-width:812px){width:100vw;height:50vh;}"],function(e){return e.background?"url("+e.background+") center no-repeat":"none"}),C=r.b.div.withConfig({displayName:"ThemeCard__Info"})(["position:relative;margin-top:-200px;margin-bottom:-100px;z-index:1;backdrop-filter:blur(12px);&::after{content:'';position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:",";filter:blur(12px);filter:opacity(53%);}@media (min-width:1025px){}@media (max-width:812px){}"],function(e){return e.gradient?e.gradient:null}),E=r.b.div.withConfig({displayName:"ThemeCard__Title"})(["font-family:Lato;text-align:left;letter-spacing:0.02em;line-height:54px;color:",";font-size:20pt;font-weight:600;"],m.d),k=r.b.div.withConfig({displayName:"ThemeCard__Description"})(["font-family:Tisa Pro;font-size:22pt;line-height:30px;margin-bottom:45px;& > p{margin:0;}color:",";"],m.o),A=r.b.div.withConfig({displayName:"ThemeCard__ChevronContainer"})(["cursor:pointer;position:absolute;right:0;width:18px;height:30px;transform:rotate(","deg);transition:all 0.3s ease-out;@media (max-width:812px){right:-25px;}"],function(e){return e.open?90:0}),N=function(e){var t=e.open;return d.a.createElement(A,{open:t},d.a.createElement(p,{color:m.o}))},T=r.b.div.withConfig({displayName:"ThemeCard__SubThemes"})(["display:grid;grid-template-columns:45vw 45vw;padding-left:138px;padding-bottom:30px;@media (min-width:1025px){grid-template-columns:30vw 30vw 30vw;}@media (max-width:812px){padding-left:38px;grid-template-columns:90vw;}"]),j=r.b.div.withConfig({displayName:"ThemeCard__Row"})(["position:relative;display:flex;flex-direction:column;justify-content:center;"]),z=Object(r.b)(j).withConfig({displayName:"ThemeCard__FirstRow"})(["margin-top:16px;margin-left:138px;margin-right:138px;@media (min-width:1025px){}@media (max-width:812px){margin-left:38px;margin-right:38px;}"]),O=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={open:!1},n}return l()(t,e),t.prototype.render=function(){var e=this,t=this.state.open,n=this.props,i=n.data,a=n.color,r=i.relationships.field_theme_image.localFile.childImageSharp.original,o=(r.height,r.width,r.src),l=i.name,c=i.description&&i.description.processed,p=i.relationships.subthemes,s=Object(m.j)(a);return d.a.createElement(_,{open:t,gradient:s,onClick:function(){return e.setState({open:!t})}},d.a.createElement(v,{background:o}),d.a.createElement(C,{gradient:s},d.a.createElement(z,null,d.a.createElement(E,null,l),d.a.createElement(k,{dangerouslySetInnerHTML:{__html:c}}),d.a.createElement(N,{open:t})),d.a.createElement(j,null,t&&d.a.createElement(T,{gradient:s},p.map(function(e,t){return d.a.createElement(y,{key:t,data:e})})))))},t}(d.a.Component),S=n(229),I=n(232),L=n(234),R=n(226),F=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e="/"+this.props.slug+"s/"+u()(this.props.title);return d.a.createElement(R.Link,{to:e,className:this.props.className,style:this.props.style},this.props.type?d.a.createElement("h4",null,this.props.type):null,d.a.createElement("div",{className:"RCimage",style:{backgroundImage:"url("+this.props.imgSrc+")",backgroundSize:"cover",backgroundPosition:"center"}}),d.a.createElement("p",null,this.props.title),this.props.children)},t}(d.a.Component),M=Object(r.b)(F).withConfig({displayName:"RCCard__StyledRCCard"})(["display:inline-block;height:auto;flex:"," "," ",'px;border:solid thin lightgrey;background-color:#f7f7f7;-webkit-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);-moz-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);margin-bottom:20px;font-family:"ff-tisa-web-pro";vertical-align:top;text-align:left;margin-left:10px;margin-right:10px;max-width:',"px color:inherit;text-decoration:inherit;"," "," ",""],100,100,350,350*.7,function(e){return e.background&&Object(r.a)(["background-image:url('","');background-size:cover;"],e.background)},function(e){return"Article"===e.type&&Object(r.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)},function(e){return"QuickFact"===e.type&&Object(r.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)}),q=r.b.div.withConfig({displayName:"Filter__Row"})(["display:flex;flex-direction:row;padding:10px;color:",";"],function(e){return e.color?e.color:"white"}),U=r.b.div.withConfig({displayName:"Filter__Element"})(["cursor:pointer;margin-left:10px;font-weight:",";"],function(e){return e.selected?"bold":"normal"}),B=r.b.div.withConfig({displayName:"Filter__Title"})(["text-decoration:underline;"]),H=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.selected,n=e.onSelected,i=e.color;return d.a.createElement(q,{color:i},"Sort by: ",d.a.createElement(U,{selected:"all"===t,onClick:function(){return n("all")}},"All"),d.a.createElement(U,{selected:"1"===t,onClick:function(){return n("1")}},d.a.createElement(B,null,"Episode One:")," The Difference Between Us"),d.a.createElement(U,{selected:"2"===t,onClick:function(){return n("2")}},d.a.createElement(B,null,"Episode Two:")," The Story We Tell"),d.a.createElement(U,{selected:"3"===t,onClick:function(){return n("3")}},d.a.createElement(B,null,"Episode Three:")," The House We Live In"))},t}(c.Component),$=n(230),D=n(236),P=(n(231),n(103),n(239)),Q=n.n(P),W=r.b.div.withConfig({displayName:"Article__Container"})(["width:100vw;display:flex;flex-direction:column;@media (min-width:1025px){}@media (max-width:812px){}"]),J=r.b.div.withConfig({displayName:"Article__TopContainer"})(["position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100vw;height:auto;background:",";@media (min-width:1025px){background-color:",";background-image:none;}@media (max-width:812px){background-color:",";z-index:1;}"],"linear-gradient(to bottom, #D9B0B0 0%, rgba(109,88,88,0.92) 100%)",m.o,m.o),Z=r.b.div.withConfig({displayName:"Article__BottomContaniner"})(["position:relative;width:100vw;margin-top:-100px;padding-top:60px;z-index:2;background-color:",";background-image:",";@media (min-width:1025px){background-color:",";background-image:none;}@media (max-width:812px){}"],m.d,"linear-gradient(to bottom, #2A495C 0%, rgba(29,69,59,0.92) 100%)",m.o),G=r.b.div.withConfig({displayName:"Article__MainImage"})(["position:absolute;top:222px;left:60px;right:60px;width:auto;height:40vh;z-index:2;display:flex;flex-direction:column;justify-content:center;align-items:center;background-size:cover !important;background-attachment:fixed;background:",";box-shadow:0px 3px 6px rgba(0,0,0,0.16);transition:all .5s ease;@media (min-width:1025px){top:0;left:0;right:0;height:80vh;box-shadow:none;}@media (max-width:812px){display:none;}"],function(e){return e.background?"url("+e.background+") center no-repeat":null}),K=r.b.div.withConfig({displayName:"Article__TextContainer"})(["z-index:3;width:80vw;margin-top:50vh;@media (min-width:1025px){width:1000px;margin-top:70vh;}@media (max-width:812px){width:100vw;margin-top:10vh;}"]),V=r.b.div.withConfig({displayName:"Article__TextInnerContainer"})(["position:relative;display:flex;flex-direction:row;width:auto;height:auto !important;border-top-right-radius:3px;border-bottom-left-radius:3px;background-color:",";color:",";margin-bottom:50px;&::before{content:'","';position:absolute;height:50px;font-family:Lato;font-size:12;line-height:50px;letter-spacing:0.22em;top:-50px;left:0;background-color:",";padding-left:14px;padding-right:14px;border-top-left-radius:3px;border-top-right-radius:3px;}"],m.o,m.c,"ARTICLE",m.o),X=r.b.div.withConfig({displayName:"Article__Row"})(["display:flex;flex-direction:row;"]),Y=r.b.div.withConfig({displayName:"Article__Column"})(["display:flex;flex-direction:column;"]),ee=r.b.div.withConfig({displayName:"Article__Title"})(["font-family:'Tisa Pro';font-size:36px;line-height:48px;"]),te=r.b.div.withConfig({displayName:"Article__Author"})(["font-family:Lato;font-size:12px;line-height:18px;letter-spacing:0.22em;text-transform:uppercase;padding-top:18px;padding-bottom:28px;"]),ne=r.b.div.withConfig({displayName:"Article__Text"})(["font-family:'Tisa Pro';font-size:20px;line-height:28px;"]),ie=Object(r.b)(Y).withConfig({displayName:"Article__ContentBar"})(["flex:1;padding:70px;z-index:10;background-color:",";border-bottom-left-radius:3px;box-shadow:0px 3px 3px rgba(0,0,0,0.16);"],m.o),ae=Object(r.b)(Y).withConfig({displayName:"Article__SideBar"})(["position:relative;display:none !important;display:flex;flex-direction:column;width:390px;background-color:",";border-top-right-radius:3px;border-bottom-right-radius:3px;box-shadow:0px 3px 3px rgba(0,0,0,0.16);@media (min-width:1025px){display:flex !important;}@media (max-width:812px){display:none;}"],m.p),re=r.b.div.withConfig({displayName:"Article__AuthorImage"})(["height:481px;min-width:373px;border-top-right-radius:3px;background-size:cover !important;background-attachment:fixed;background:",";"],function(e){return e.background?"url("+e.background+") center no-repeat":null}),oe=r.b.div.withConfig({displayName:"Article__Bio"})(["padding:15px;font-family:Lato;font-size:14px;line-height:18px;margin-bottom:60px;"]),le=r.b.div.withConfig({displayName:"Article__SubTitle"})(["font-family:Lato;font-size:12px;line-height:28px;letter-spacing:0.22em;text-transform:uppercase;padding-left:0;@media (min-width:1025px){padding-left:15px;}@media (max-width:812px){padding-left:0;}"]),ce=Object(r.b)(a.a).withConfig({displayName:"Article__FiledUnderLinkContainer"})(["display:flex;flex-direction:row;padding-left:0;padding-right:10px;font-family:Lato;font-size:18px;line-height:36px;letter-spacing:0.02em;font-weight:600;text-transform:capitalize;color:",";@media (min-width:1025px){padding-left:15px;padding-right:0;}@media (max-width:812px){padding-left:0;padding-right:0;}"],function(e){return e.color}),de=function(e){var t=e.children,n=e.color,i=e.to;return n||(n=m.n),d.a.createElement(ce,{href:i,color:n},d.a.createElement(D.a,{style:{width:25,marginRight:10},color:n}),t)},pe=r.b.div.withConfig({displayName:"Article__Tags"})(["padding-left:0;display:flex;flex-direction:row;flex-wrap:wrap;overflow:auto;@media (min-width:1025px){padding-left:15px;}@media (max-width:812px){padding-left:0;}"]),se=r.b.div.withConfig({displayName:"Article__Tag"})(["padding-left:10px;padding-right:10px;font-family:Lato;font-size:15px;line-height:36px;letter-spacing:0.22em;font-weight:600;text-transform:uppercase;color:",";margin-right:15px;margin-bottom:15px;border-radius:3px;background-color:",";"],m.n,m.o),ue=r.b.div.withConfig({displayName:"Article__BackTo"})(["width:100%;@media (min-width:1025px){position:absolute;right:0;bottom:0;padding-bottom:50px;}@media (max-width:812px){}"]),me=r.b.div.withConfig({displayName:"Article__CardsContainer"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;padding-left:50px;padding-right:50px;padding-bottom:70px;@media (min-width:1025px){justify-content:center;padding-left:0;padding-right:0;padding-bottom:200px;}@media (max-width:812px){justify-content:center;padding-left:0;padding-right:0;}"]),fe=Object(r.b)(X).withConfig({displayName:"Article__TextFooter"})(["position:relative;display:flex;flex-direction:row;margin-top:50px;margin-left:50px;margin-right:50px;justify-content:center;@media (min-width:1025px){display:none;}@media (max-width:812px){margin-left:0;margin-right:0;padding-bottom:100px;}"]),he=Object(r.b)(X).withConfig({displayName:"Article__Footer"})(["display:flex;width:auto;min-height:20vh;@media (min-width:1025px){display:none;}@media (max-width:812px){display:flex;}"]),ge=Object(r.b)(X).withConfig({displayName:"Article__MobileRow"})(["align-items:center;padding-left:60px;margin-top:60px;@media (max-width:812px){flex-direction:column;padding-left:0;margin-top:0;justify-content:center;}"]),xe=Object(r.b)(ge).withConfig({displayName:"Article__FirstMobileRow"})(["@media (max-width:812px){margin-top:-150px;}"]),be=Object(r.b)(Y).withConfig({displayName:"Article__MobileColumn"})(["padding:0;@media (max-width:812px){padding:60px;}"]),we=Object(r.b)(X).withConfig({displayName:"Article__AllInterviewsContainer"})(["width:100vw;justify-content:flex-end;padding-top:90px;padding-right:60px;@media (min-width:1025px){display:none;}@media (max-width:812px){justify-content:center;padding-right:0;}"]),ye="All "+"ARTICLE".toLowerCase()+"s",_e=function(){return d.a.createElement(we,null,d.a.createElement(de,{color:m.o},ye))},ve=Object(r.b)(X).withConfig({displayName:"Article__CallOutContainer"})(["display:none;color:",";padding:40px;justify-content:center !important;text-align:center !important;@media (min-width:1025px){display:none;}@media (max-width:812px){display:flex;}"],m.o),Ce=Object(r.b)(X).withConfig({displayName:"Article__CallOut"})(["font-family:'Tisa Pro';font-size:24px;line-height:30px;"]),Ee=Object(r.b)(X).withConfig({displayName:"Article__Copyright"})(["font-family:Lato;font-size:12px;letter-spacing:0.22em;justify-content:center;"]),ke=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){this.props.data;var e,t,n=Q()(this,"props.data.nodeArticle.relationships.field_main_image.localFile.childImageSharp.original.src"),i=Q()(this,"props.data.nodeArticle.field_large_callout_text.processed"),a=Q()(this,"props.data.nodeArticle.field_copyright.processed"),r=Q()(this,"props.data.nodeArticle.title"),o=Q()(this,"props.data.nodeArticle.field_author.processed"),l=Q()(this,"props.data.nodeArticle.relationships.field_author_image.localFile.childImageSharp.original.src"),c=Q()(this,"props.data.nodeArticle.field_author_bio.processed"),p=Q()(this,"props.data.nodeArticle.field_full_version.processed"),s=(e=Q()(this,"props.data.nodeArticle.relationships.field_belongs_to_subtheme"),t=[],e.map(function(e){var n=e.name;return t.push({name:n,link:"/subthemes/"+u()(n)})}),t),f=function(e){return e.map(function(e){return e.name})}(Q()(this,"props.data.nodeArticle.relationships.field_tags")),h=s[0],g=function(e){var t={articles:[],clips:[],faqs:[]};return e&&e.forEach(function(e){switch(e.__typename){case"node__faq":t.faqs.push(e);break;case"node__article":t.articles.push(e);break;case"node__clip":t.clips.push(e)}}),Object(S.b)(t)}(Q()(this,"props.data.nodeArticle.relationships.field_article_related_content"));console.log("Article",this.props);var x=function(){return d.a.createElement(ue,null,d.a.createElement(le,null,"back to:"),d.a.createElement(de,{key:"backTo",to:h.link},h.name))};return d.a.createElement(W,null,d.a.createElement(J,null,d.a.createElement(_e,null),d.a.createElement(ve,null,d.a.createElement(Y,null,d.a.createElement(Ce,{dangerouslySetInnerHTML:{__html:i}}),d.a.createElement(Ee,{dangerouslySetInnerHTML:{__html:a}}))),d.a.createElement(G,{background:n}),d.a.createElement(K,null,d.a.createElement(V,null,d.a.createElement(ie,null,d.a.createElement(ee,null,r),d.a.createElement(te,null,"by ",o),d.a.createElement(ne,{dangerouslySetInnerHTML:{__html:p}}),d.a.createElement(fe,null,d.a.createElement(x,null))),d.a.createElement(function(){return d.a.createElement(ae,null,d.a.createElement(re,{background:l}),d.a.createElement(oe,{dangerouslySetInnerHTML:{__html:c}}),d.a.createElement(le,null,"filed under:"),s.map(function(e,t){var n=e.name,i=e.link;return d.a.createElement(de,{key:t,to:i},n)}),d.a.createElement(le,{style:{marginTop:90}},"explore:"),d.a.createElement(pe,null,f.map(function(e,t){return d.a.createElement(se,{key:t},e)})),d.a.createElement(le,{style:{marginTop:90}},"see also:"),d.a.createElement(me,null,g),d.a.createElement(x,null))},null)))),d.a.createElement(Z,null,d.a.createElement(he,null,d.a.createElement(function(){return d.a.createElement(Y,{style:{color:m.i}},d.a.createElement(xe,null,d.a.createElement(re,{background:l}),d.a.createElement(oe,{dangerouslySetInnerHTML:{__html:c}})),d.a.createElement(ge,{style:{alignItems:"flex-start"}},d.a.createElement(be,null,d.a.createElement(le,null,"filed under:"),s.map(function(e,t){var n=e.name,i=e.link;return d.a.createElement(de,{key:t,to:i},n)})),d.a.createElement(be,null,d.a.createElement(le,null,"explore:"),d.a.createElement(pe,null,f.map(function(e,t){return d.a.createElement(se,{key:t},e)})))),d.a.createElement(ge,null,d.a.createElement(le,null,"see also:")),d.a.createElement(me,null,g))},null))))},t}(d.a.Component);n.d(t,"e",function(){return i.a}),n.d(t,"f",function(){return a.a}),n.d(t,!1,function(){}),n.d(t,"m",function(){return O}),n.d(t,"l",function(){return S.a}),n.d(t,"n",function(){return S.b}),n.d(t,"a",function(){return I.a}),n.d(t,"c",function(){return L.a}),n.d(t,"i",function(){return M}),n.d(t,"d",function(){return H}),n.d(t,"g",function(){return $.a}),n.d(t,"h",function(){return $.b}),n.d(t,"k",function(){return p}),n.d(t,"j",function(){return D.a}),n.d(t,"b",function(){return ke})},249:function(e,t,n){"use strict";const i=n(250),a=n(251);function r(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function o(e,t){return t.decode?a(e):e}function l(e){const t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function c(e,t){const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,i)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===i[e]&&(i[e]={}),i[e][t[1]]=n):i[e]=n};case"bracket":return(e,n,i)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==i[e]?i[e]=[].concat(i[e],n):i[e]=[n]:i[e]=n};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),i=Object.create(null);if("string"!=typeof e)return i;if(!(e=e.trim().replace(/^[?#&]/,"")))return i;for(const a of e.split("&")){let[e,r]=a.replace(/\+/g," ").split("=");r=void 0===r?null:o(r,t),n(o(e,t),r,i)}return Object.keys(i).sort().reduce((e,t)=>{const n=i[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=l,t.parse=c,t.stringify=((e,t)=>{!1===(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=(()=>{}));const n=function(e){switch(e.arrayFormat){case"index":return(t,n,i)=>null===n?[r(t,e),"[",i,"]"].join(""):[r(t,e),"[",r(i,e),"]=",r(n,e)].join("");case"bracket":return(t,n)=>null===n?[r(t,e),"[]"].join(""):[r(t,e),"[]=",r(n,e)].join("");default:return(t,n)=>null===n?r(t,e):[r(t,e),"=",r(n,e)].join("")}}(t);return e?Object.keys(e).sort(t.sort).map(i=>{const a=e[i];if(void 0===a)return"";if(null===a)return r(i,t);if(Array.isArray(a)){const e=[];for(const t of a.slice())void 0!==t&&e.push(n(i,t,e.length));return e.join("&")}return r(i,t)+"="+r(a,t)}).filter(e=>e.length>0).join("&"):""}),t.parseUrl=((e,t)=>({url:e.split("?")[0]||"",query:c(l(e),t)}))},250:function(e,t,n){"use strict";e.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},251:function(e,t,n){"use strict";var i=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function r(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),i=e.slice(t);return Array.prototype.concat.call([],r(n),r(i))}function o(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(i),n=1;n<t.length;n++)t=(e=r(t,n).join("")).match(i);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var i=o(n[0]);i!==n[0]&&(t[n[0]]=i)}n=a.exec(e)}t["%C2"]="�";for(var r=Object.keys(t),l=0;l<r.length;l++){var c=r[l];e=e.replace(new RegExp(c,"g"),t[c])}return e}(e)}}},253:function(e,t,n){n(60)("search",1,function(e,t,n){return[function(n){"use strict";var i=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i):new RegExp(n)[t](String(i))},n]})}}]);
//# sourceMappingURL=component---src-pages-qa-js-3feb68700f07bf01fb17.js.map