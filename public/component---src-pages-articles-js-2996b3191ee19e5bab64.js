(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{214:function(e,t,i){"use strict";i.r(t),i.d(t,"query",function(){return b});var n=i(17),a=i.n(n),r=i(0),o=i.n(r),l=i(223),d=i(224),p=i.n(d),c=i(247),m=l.b.div.withConfig({displayName:"articles__GreyBackground"})(["background-color:rgba(103,165,195,0.14901960784313725);position:fixed;top:0;left:0;z-index:-999999;height:100%;width:100%;"]),s=l.b.div.withConfig({displayName:"articles__IntroText"})(["font-weight:300;font-size:48px;line-height:1.25;z-index:99999;padding:60px 30px;margin-bottom:60px;font-family:'Lato';color:snow;background-color:#323232;background-color:#25292b;"]),u=l.b.div.withConfig({displayName:"articles__ArticleTitle"})(["font-family:'Lato';font-size:20px;font-weight:400;color:#2b2b2b;letter-spacing:0.03em;padding:0px 30px 0 30px;line-height:1.25;margin-bottom:7.5px;"]),f=l.b.div.withConfig({displayName:"articles__ArticleImage"})(["margin-bottom:30px;position:absolute;top:0;bottom:0;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),g=l.b.div.withConfig({displayName:"articles__TopText"})(["width:100%;text-align:center;padding:36px 45px;top:0;background-color:#25292b;color:white;"]),h=function(e){var t,i=e.data;return o.a.createElement(c.f,{style:{flexGrow:0,flexShrink:1,marginBottom:30,flexBasis:"33%",textDecoration:"none",color:"inherit"},href:"/articles/"+p()(i.title)},o.a.createElement("div",{className:"articleCard"},o.a.createElement("div",{style:{flex:"1 1 auto",position:"relative",marginBottom:15}},o.a.createElement(f,{background:i.relationships.field_main_image&&i.relationships.field_main_image.localFile.publicURL,className:"articleCardImage"},i.relationships.field_theme_image&&i.relationships.field_theme_image.localFile.publicURL)),o.a.createElement("div",{style:{paddingBottom:30}},o.a.createElement(u,null,i.title),o.a.createElement("p",{style:(t={marginBottom:7.5,color:"#2b2b2b",fontFamily:"Lato",fontSize:14,letterSpacing:"0.04em",lineHeight:1.25,marginLeft:30},t.marginBottom=22.5,t)},"Article by ",i.field_author&&i.field_author.processed),o.a.createElement("div",{className:"articleExcerpt"},i.field_article_summary&&o.a.createElement("div",{dangerouslySetInnerHTML:{__html:i.field_article_summary.processed}})))))},x=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,i=e.location;return o.a.createElement(c.e,{location:i},o.a.createElement(g,null,o.a.createElement("h4",{style:{marginBottom:0,display:"inline-block",verticalAlign:"middle"}},"articles")),o.a.createElement(s,{dangerouslySetInnerHTML:{__html:t.taxonomyTermArticlesPage.description&&t.taxonomyTermArticlesPage.description.processed}}),o.a.createElement("div",{className:"articles"},o.a.createElement(m,null),t.allNodeArticle.edges.map(function(e,t){return o.a.createElement(h,{key:t,data:e.node})})))},t}(o.a.Component);t.default=x;var b="670148157"},232:function(e,t,i){"use strict";i(231);var n=i(0),a=i.n(n),r=i(223),o=i(226),l=i(224),d=i.n(l),p=r.b.div.withConfig({displayName:"AllClips__ClipCard"})(["width:300px;background-color:#292929;color:white;display:inline-block;vertical-align:top;margin-right:30px;margin-bottom:30px;transition:all .3s;border-radius:6px;&:hover{transition:all .3s;}cursor:pointer;"]),c=r.b.div.withConfig({displayName:"AllClips__ClipCaption"})(["font-family:'Lato';font-size:14px;line-height:1.5;font-weight:300;letter-spacing:0.04em;padding:15px 30px 30px 30px;"]),m=r.b.div.withConfig({displayName:"AllClips__ClipPoster"})(["height:200px;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),s=function(e){var t=e.clip,i=e.link;return a.a.createElement(p,null,i?a.a.createElement(o.Link,{style:{color:"inherit",textDecoration:"none"},to:"/clips/"+d()(t.title)},a.a.createElement(m,{background:t.relationships.field_poster_image&&t.relationships.field_poster_image.localFile.publicURL}),a.a.createElement(c,null,t.title)):a.a.createElement("iframe",{title:t.title,src:(t.field_external_video_url&&t.field_external_video_url.uri)+"?title=0&byline=0&portrait=0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))};t.a=function(e){var t=e.data,i=e.selected,n=t.allNodeClip.edges;return i&&(n=n.filter(function(e){return"all"===i||e.node.field_episode===parseInt(i)})),a.a.createElement("div",{style:{padding:"0 30px"}},n.map(function(e,t){return a.a.createElement(s,{key:"clip-"+t,clip:e.node,link:!0})}))}},239:function(e,t,i){var n=i(240);e.exports=function(e,t,i){var a=null==e?void 0:n(e,t);return void 0===a?i:a}},240:function(e,t,i){var n=i(241),a=i(246);e.exports=function(e,t){for(var i=0,r=(t=n(t,e)).length;null!=e&&i<r;)e=e[a(t[i++])];return i&&i==r?e:void 0}},241:function(e,t,i){var n=i(237),a=i(242),r=i(243),o=i(252);e.exports=function(e,t){return n(e)?e:a(e,t)?[e]:r(o(e))}},242:function(e,t,i){var n=i(237),a=i(238),r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;e.exports=function(e,t){if(n(e))return!1;var i=typeof e;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=e&&!a(e))||o.test(e)||!r.test(e)||null!=t&&e in Object(t)}},243:function(e,t,i){var n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,r=i(244)(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(n,function(e,i,n,r){t.push(n?r.replace(a,"$1"):i||e)}),t});e.exports=r},244:function(e,t,i){var n=i(245);e.exports=function(e){var t=n(e,function(e){return 500===i.size&&i.clear(),e}),i=t.cache;return t}},245:function(e,t,i){var n=i(255),a="Expected a function";function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(a);var i=function(){var n=arguments,a=t?t.apply(this,n):n[0],r=i.cache;if(r.has(a))return r.get(a);var o=e.apply(this,n);return i.cache=r.set(a,o)||r,o};return i.cache=new(r.Cache||n),i}r.Cache=n,e.exports=r},246:function(e,t,i){var n=i(238);e.exports=function(e){if("string"==typeof e||n(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},247:function(e,t,i){"use strict";var n=i(235),a=i(233),r=i(223),o=(r.b.div.withConfig({displayName:"Title"})(["color:white;text-align:center;font-family:Lato;font-size:36px;font-weight:300;letter-spacing:0.04em;padding-top:120px;margin-bottom:75px;"]),i(227),i(17)),l=i.n(o),d=i(0),p=i.n(d),c=function(e){var t=e.color,i=e.style;return p.a.createElement("div",{style:i},p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18.177 30.139"},p.a.createElement("path",{fill:t,d:"M15.2,15.034a2.2,2.2,0,0,1,.159-.226Q21.785,7.639,28.224.48a1.027,1.027,0,0,1,1.585.04,1.367,1.367,0,0,1,.02,1.76Q22.912,9.974,16,17.667a1.106,1.106,0,0,1-1.859,0Q7.975,10.763,1.806,3.858c-.494-.554-1-1.1-1.481-1.671A1.372,1.372,0,0,1,.555.2,1.07,1.07,0,0,1,2.013.413Q3.177,1.7,4.338,3q3.147,3.5,6.295,7,2.174,2.421,4.352,4.841a1.261,1.261,0,0,1,.127.2C15.14,15.039,15.168,15.034,15.2,15.034Z",transform:"translate(0 30.139) rotate(-90)"})))},m=(i(104),i(224)),s=i.n(m),u=i(225),f=Object(r.b)(a.a).withConfig({displayName:"SubThemeCard__Container"})(["color:white;padding-top:30px;padding-right:30px;display:flex;flex-direction:column;"]),g=r.b.div.withConfig({displayName:"SubThemeCard__Row"})(["display:flex;flex-direction:row;align-items:center;"]),h=(r.b.div.withConfig({displayName:"SubThemeCard__Column"})(["display:flex;flex-direction:column;background-color:",";padding:15px;"],u.c),r.b.div.withConfig({displayName:"SubThemeCard__Title"})(["font-family:Lato;font-size:12pt;line-height:39px;font-weight:600;letter-spacing:0.022em;text-transform:uppercase;color:",";width:auto;padding-left:15px;padding-right:15px;"],function(e){return e.color?e.color:u.o})),x=r.b.div.withConfig({displayName:"SubThemeCard__Description"})(["font-family:'Tisa Pro';font-size:20px;line-height:24px;color:",";"],u.o),b=r.b.div.withConfig({displayName:"SubThemeCard__ArrowContainer"})(["width:25px;height:20px;"]),w=function(e){var t=e.color;return p.a.createElement(b,null,p.a.createElement(Q.a,{color:t}))},y=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.name.indexOf(":")>=0?e.name.split(":")[1]:e.name,i=e.description?e.description.value:"!empty content, check drupal!",n="/subthemes/"+s()(e.name);return p.a.createElement(f,{href:n},p.a.createElement(g,null,p.a.createElement(w,{color:u.n}),p.a.createElement(h,{color:u.n},t)),p.a.createElement(x,{dangerouslySetInnerHTML:{__html:i}}))},t}(p.a.Component),_=r.b.div.withConfig({displayName:"ThemeCard__Container"})(["position:relative;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:51px;padding-bottom:98px;background-color:",";&::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:",";filter:blur(12px);filter:opacity(53%);}@media (max-width:812px){padding-top:0;}"],u.o,function(e){return e.gradient?e.gradient:null}),v=r.b.div.withConfig({displayName:"ThemeCard__MainImage"})(["position:relative;width:832px;height:583px;background-size:cover !important;background-attachment:fixed;transition:all .5s ease;background:",";filter:opacity(92%);@media (min-width:1025px){}@media (max-width:812px){width:100vw;height:50vh;}"],function(e){return e.background?"url("+e.background+") center no-repeat":"none"}),C=r.b.div.withConfig({displayName:"ThemeCard__Info"})(["position:relative;margin-top:-200px;margin-bottom:-100px;z-index:1;backdrop-filter:blur(12px);&::after{content:'';position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:",";filter:blur(12px);filter:opacity(53%);}@media (min-width:1025px){}@media (max-width:812px){}"],function(e){return e.gradient?e.gradient:null}),E=r.b.div.withConfig({displayName:"ThemeCard__Title"})(["font-family:Lato;text-align:left;letter-spacing:0.02em;line-height:54px;color:",";font-size:20pt;font-weight:600;"],u.d),k=r.b.div.withConfig({displayName:"ThemeCard__Description"})(["font-family:Tisa Pro;font-size:22pt;line-height:30px;margin-bottom:45px;& > p{margin:0;}color:",";"],u.o),N=r.b.div.withConfig({displayName:"ThemeCard__ChevronContainer"})(["cursor:pointer;position:absolute;right:0;width:18px;height:30px;transform:rotate(","deg);transition:all 0.3s ease-out;@media (max-width:812px){right:-25px;}"],function(e){return e.open?90:0}),A=function(e){var t=e.open;return p.a.createElement(N,{open:t},p.a.createElement(c,{color:u.o}))},T=r.b.div.withConfig({displayName:"ThemeCard__SubThemes"})(["display:grid;grid-template-columns:45vw 45vw;padding-left:138px;padding-bottom:30px;@media (min-width:1025px){grid-template-columns:30vw 30vw 30vw;}@media (max-width:812px){padding-left:38px;grid-template-columns:90vw;}"]),z=r.b.div.withConfig({displayName:"ThemeCard__Row"})(["position:relative;display:flex;flex-direction:column;justify-content:center;"]),j=Object(r.b)(z).withConfig({displayName:"ThemeCard__FirstRow"})(["margin-top:16px;margin-left:138px;margin-right:138px;@media (min-width:1025px){}@media (max-width:812px){margin-left:38px;margin-right:38px;}"]),L=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={open:!1},i}return l()(t,e),t.prototype.render=function(){var e=this,t=this.state.open,i=this.props,n=i.data,a=i.color,r=n.relationships.field_theme_image.localFile.childImageSharp.original,o=(r.height,r.width,r.src),l=n.name,d=n.description&&n.description.processed,c=n.relationships.subthemes,m=Object(u.j)(a);return p.a.createElement(_,{open:t,gradient:m,onClick:function(){return e.setState({open:!t})}},p.a.createElement(v,{background:o}),p.a.createElement(C,{gradient:m},p.a.createElement(j,null,p.a.createElement(E,null,l),p.a.createElement(k,{dangerouslySetInnerHTML:{__html:d}}),p.a.createElement(A,{open:t})),p.a.createElement(z,null,t&&p.a.createElement(T,{gradient:m},c.map(function(e,t){return p.a.createElement(y,{key:t,data:e})})))))},t}(p.a.Component),S=i(229),I=i(232),O=i(234),B=i(226),F=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e="/"+this.props.slug+"s/"+s()(this.props.title);return p.a.createElement(B.Link,{to:e,className:this.props.className,style:this.props.style},this.props.type?p.a.createElement("h4",null,this.props.type):null,p.a.createElement("div",{className:"RCimage",style:{backgroundImage:"url("+this.props.imgSrc+")",backgroundSize:"cover",backgroundPosition:"center"}}),p.a.createElement("p",null,this.props.title),this.props.children)},t}(p.a.Component),R=Object(r.b)(F).withConfig({displayName:"RCCard__StyledRCCard"})(["display:inline-block;height:auto;flex:"," "," ",'px;border:solid thin lightgrey;background-color:#f7f7f7;-webkit-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);-moz-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);margin-bottom:20px;font-family:"ff-tisa-web-pro";vertical-align:top;text-align:left;margin-left:10px;margin-right:10px;max-width:',"px color:inherit;text-decoration:inherit;"," "," ",""],100,100,350,350*.7,function(e){return e.background&&Object(r.a)(["background-image:url('","');background-size:cover;"],e.background)},function(e){return"Article"===e.type&&Object(r.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)},function(e){return"QuickFact"===e.type&&Object(r.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)}),M=r.b.div.withConfig({displayName:"Filter__Row"})(["display:flex;flex-direction:row;padding:10px;color:",";"],function(e){return e.color?e.color:"white"}),H=r.b.div.withConfig({displayName:"Filter__Element"})(["cursor:pointer;margin-left:10px;font-weight:",";"],function(e){return e.selected?"bold":"normal"}),P=r.b.div.withConfig({displayName:"Filter__Title"})(["text-decoration:underline;"]),D=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.selected,i=e.onSelected,n=e.color;return p.a.createElement(M,{color:n},"Sort by: ",p.a.createElement(H,{selected:"all"===t,onClick:function(){return i("all")}},"All"),p.a.createElement(H,{selected:"1"===t,onClick:function(){return i("1")}},p.a.createElement(P,null,"Episode One:")," The Difference Between Us"),p.a.createElement(H,{selected:"2"===t,onClick:function(){return i("2")}},p.a.createElement(P,null,"Episode Two:")," The Story We Tell"),p.a.createElement(H,{selected:"3"===t,onClick:function(){return i("3")}},p.a.createElement(P,null,"Episode Three:")," The House We Live In"))},t}(d.Component),q=i(230),Q=i(236),U=(i(231),i(103),i(239)),$=i.n(U),G=r.b.div.withConfig({displayName:"Article__Container"})(["width:100vw;display:flex;flex-direction:column;@media (min-width:1025px){}@media (max-width:812px){}"]),J=r.b.div.withConfig({displayName:"Article__TopContainer"})(["position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100vw;height:auto;background:",";@media (min-width:1025px){background-color:",";background-image:none;}@media (max-width:812px){background-color:",";z-index:1;}"],"linear-gradient(to bottom, #D9B0B0 0%, rgba(109,88,88,0.92) 100%)",u.o,u.o),W=r.b.div.withConfig({displayName:"Article__BottomContaniner"})(["position:relative;width:100vw;margin-top:-100px;padding-top:60px;z-index:2;background-color:",";background-image:",";@media (min-width:1025px){background-color:",";background-image:none;}@media (max-width:812px){}"],u.d,"linear-gradient(to bottom, #2A495C 0%, rgba(29,69,59,0.92) 100%)",u.o),Z=r.b.div.withConfig({displayName:"Article__MainImage"})(["position:absolute;top:222px;left:60px;right:60px;width:auto;height:40vh;z-index:2;display:flex;flex-direction:column;justify-content:center;align-items:center;background-size:cover !important;background-attachment:fixed;background:",";box-shadow:0px 3px 6px rgba(0,0,0,0.16);transition:all .5s ease;@media (min-width:1025px){top:0;left:0;right:0;height:80vh;box-shadow:none;}@media (max-width:812px){display:none;}"],function(e){return e.background?"url("+e.background+") center no-repeat":null}),K=r.b.div.withConfig({displayName:"Article__TextContainer"})(["z-index:3;width:80vw;margin-top:50vh;@media (min-width:1025px){width:1000px;margin-top:70vh;}@media (max-width:812px){width:100vw;margin-top:10vh;}"]),V=r.b.div.withConfig({displayName:"Article__TextInnerContainer"})(["position:relative;display:flex;flex-direction:row;width:auto;height:auto !important;border-top-right-radius:3px;border-bottom-left-radius:3px;background-color:",";color:",";margin-bottom:50px;&::before{content:'","';position:absolute;height:50px;font-family:Lato;font-size:12;line-height:50px;letter-spacing:0.22em;top:-50px;left:0;background-color:",";padding-left:14px;padding-right:14px;border-top-left-radius:3px;border-top-right-radius:3px;}"],u.o,u.c,"ARTICLE",u.o),X=r.b.div.withConfig({displayName:"Article__Row"})(["display:flex;flex-direction:row;"]),Y=r.b.div.withConfig({displayName:"Article__Column"})(["display:flex;flex-direction:column;"]),ee=r.b.div.withConfig({displayName:"Article__Title"})(["font-family:'Tisa Pro';font-size:36px;line-height:48px;"]),te=r.b.div.withConfig({displayName:"Article__Author"})(["font-family:Lato;font-size:12px;line-height:18px;letter-spacing:0.22em;text-transform:uppercase;padding-top:18px;padding-bottom:28px;"]),ie=r.b.div.withConfig({displayName:"Article__Text"})(["font-family:'Tisa Pro';font-size:20px;line-height:28px;"]),ne=Object(r.b)(Y).withConfig({displayName:"Article__ContentBar"})(["flex:1;padding:70px;z-index:10;background-color:",";border-bottom-left-radius:3px;box-shadow:0px 3px 3px rgba(0,0,0,0.16);"],u.o),ae=Object(r.b)(Y).withConfig({displayName:"Article__SideBar"})(["position:relative;display:none !important;display:flex;flex-direction:column;width:390px;background-color:",";border-top-right-radius:3px;border-bottom-right-radius:3px;box-shadow:0px 3px 3px rgba(0,0,0,0.16);@media (min-width:1025px){display:flex !important;}@media (max-width:812px){display:none;}"],u.p),re=r.b.div.withConfig({displayName:"Article__AuthorImage"})(["height:481px;min-width:373px;border-top-right-radius:3px;background-size:cover !important;background-attachment:fixed;background:",";"],function(e){return e.background?"url("+e.background+") center no-repeat":null}),oe=r.b.div.withConfig({displayName:"Article__Bio"})(["padding:15px;font-family:Lato;font-size:14px;line-height:18px;margin-bottom:60px;"]),le=r.b.div.withConfig({displayName:"Article__SubTitle"})(["font-family:Lato;font-size:12px;line-height:28px;letter-spacing:0.22em;text-transform:uppercase;padding-left:0;@media (min-width:1025px){padding-left:15px;}@media (max-width:812px){padding-left:0;}"]),de=Object(r.b)(a.a).withConfig({displayName:"Article__FiledUnderLinkContainer"})(["display:flex;flex-direction:row;padding-left:0;padding-right:10px;font-family:Lato;font-size:18px;line-height:36px;letter-spacing:0.02em;font-weight:600;text-transform:capitalize;color:",";@media (min-width:1025px){padding-left:15px;padding-right:0;}@media (max-width:812px){padding-left:0;padding-right:0;}"],function(e){return e.color}),pe=function(e){var t=e.children,i=e.color,n=e.to;return i||(i=u.n),p.a.createElement(de,{href:n,color:i},p.a.createElement(Q.a,{style:{width:25,marginRight:10},color:i}),t)},ce=r.b.div.withConfig({displayName:"Article__Tags"})(["padding-left:0;display:flex;flex-direction:row;flex-wrap:wrap;overflow:auto;@media (min-width:1025px){padding-left:15px;}@media (max-width:812px){padding-left:0;}"]),me=r.b.div.withConfig({displayName:"Article__Tag"})(["padding-left:10px;padding-right:10px;font-family:Lato;font-size:15px;line-height:36px;letter-spacing:0.22em;font-weight:600;text-transform:uppercase;color:",";margin-right:15px;margin-bottom:15px;border-radius:3px;background-color:",";"],u.n,u.o),se=r.b.div.withConfig({displayName:"Article__BackTo"})(["width:100%;@media (min-width:1025px){position:absolute;right:0;bottom:0;padding-bottom:50px;}@media (max-width:812px){}"]),ue=r.b.div.withConfig({displayName:"Article__CardsContainer"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;padding-left:50px;padding-right:50px;padding-bottom:70px;@media (min-width:1025px){justify-content:center;padding-left:0;padding-right:0;padding-bottom:200px;}@media (max-width:812px){justify-content:center;padding-left:0;padding-right:0;}"]),fe=Object(r.b)(X).withConfig({displayName:"Article__TextFooter"})(["position:relative;display:flex;flex-direction:row;margin-top:50px;margin-left:50px;margin-right:50px;justify-content:center;@media (min-width:1025px){display:none;}@media (max-width:812px){margin-left:0;margin-right:0;padding-bottom:100px;}"]),ge=Object(r.b)(X).withConfig({displayName:"Article__Footer"})(["display:flex;width:auto;min-height:20vh;@media (min-width:1025px){display:none;}@media (max-width:812px){display:flex;}"]),he=Object(r.b)(X).withConfig({displayName:"Article__MobileRow"})(["align-items:center;padding-left:60px;margin-top:60px;@media (max-width:812px){flex-direction:column;padding-left:0;margin-top:0;justify-content:center;}"]),xe=Object(r.b)(he).withConfig({displayName:"Article__FirstMobileRow"})(["@media (max-width:812px){margin-top:-150px;}"]),be=Object(r.b)(Y).withConfig({displayName:"Article__MobileColumn"})(["padding:0;@media (max-width:812px){padding:60px;}"]),we=Object(r.b)(X).withConfig({displayName:"Article__AllInterviewsContainer"})(["width:100vw;justify-content:flex-end;padding-top:90px;padding-right:60px;@media (min-width:1025px){display:none;}@media (max-width:812px){justify-content:center;padding-right:0;}"]),ye="All "+"ARTICLE".toLowerCase()+"s",_e=function(){return p.a.createElement(we,null,p.a.createElement(pe,{color:u.o},ye))},ve=Object(r.b)(X).withConfig({displayName:"Article__CallOutContainer"})(["display:none;color:",";padding:40px;justify-content:center !important;text-align:center !important;@media (min-width:1025px){display:none;}@media (max-width:812px){display:flex;}"],u.o),Ce=Object(r.b)(X).withConfig({displayName:"Article__CallOut"})(["font-family:'Tisa Pro';font-size:24px;line-height:30px;"]),Ee=Object(r.b)(X).withConfig({displayName:"Article__Copyright"})(["font-family:Lato;font-size:12px;letter-spacing:0.22em;justify-content:center;"]),ke=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){this.props.data;var e,t,i=$()(this,"props.data.nodeArticle.relationships.field_main_image.localFile.childImageSharp.original.src"),n=$()(this,"props.data.nodeArticle.field_large_callout_text.processed"),a=$()(this,"props.data.nodeArticle.field_copyright.processed"),r=$()(this,"props.data.nodeArticle.title"),o=$()(this,"props.data.nodeArticle.field_author.processed"),l=$()(this,"props.data.nodeArticle.relationships.field_author_image.localFile.childImageSharp.original.src"),d=$()(this,"props.data.nodeArticle.field_author_bio.processed"),c=$()(this,"props.data.nodeArticle.field_full_version.processed"),m=(e=$()(this,"props.data.nodeArticle.relationships.field_belongs_to_subtheme"),t=[],e.map(function(e){var i=e.name;return t.push({name:i,link:"/subthemes/"+s()(i)})}),t),f=function(e){return e.map(function(e){return e.name})}($()(this,"props.data.nodeArticle.relationships.field_tags")),g=m[0],h=function(e){var t={articles:[],clips:[],faqs:[]};return e&&e.forEach(function(e){switch(e.__typename){case"node__faq":t.faqs.push(e);break;case"node__article":t.articles.push(e);break;case"node__clip":t.clips.push(e)}}),Object(S.b)(t)}($()(this,"props.data.nodeArticle.relationships.field_article_related_content"));console.log("Article",this.props);var x=function(){return p.a.createElement(se,null,p.a.createElement(le,null,"back to:"),p.a.createElement(pe,{key:"backTo",to:g.link},g.name))};return p.a.createElement(G,null,p.a.createElement(J,null,p.a.createElement(_e,null),p.a.createElement(ve,null,p.a.createElement(Y,null,p.a.createElement(Ce,{dangerouslySetInnerHTML:{__html:n}}),p.a.createElement(Ee,{dangerouslySetInnerHTML:{__html:a}}))),p.a.createElement(Z,{background:i}),p.a.createElement(K,null,p.a.createElement(V,null,p.a.createElement(ne,null,p.a.createElement(ee,null,r),p.a.createElement(te,null,"by ",o),p.a.createElement(ie,{dangerouslySetInnerHTML:{__html:c}}),p.a.createElement(fe,null,p.a.createElement(x,null))),p.a.createElement(function(){return p.a.createElement(ae,null,p.a.createElement(re,{background:l}),p.a.createElement(oe,{dangerouslySetInnerHTML:{__html:d}}),p.a.createElement(le,null,"filed under:"),m.map(function(e,t){var i=e.name,n=e.link;return p.a.createElement(pe,{key:t,to:n},i)}),p.a.createElement(le,{style:{marginTop:90}},"explore:"),p.a.createElement(ce,null,f.map(function(e,t){return p.a.createElement(me,{key:t},e)})),p.a.createElement(le,{style:{marginTop:90}},"see also:"),p.a.createElement(ue,null,h),p.a.createElement(x,null))},null)))),p.a.createElement(W,null,p.a.createElement(ge,null,p.a.createElement(function(){return p.a.createElement(Y,{style:{color:u.i}},p.a.createElement(xe,null,p.a.createElement(re,{background:l}),p.a.createElement(oe,{dangerouslySetInnerHTML:{__html:d}})),p.a.createElement(he,{style:{alignItems:"flex-start"}},p.a.createElement(be,null,p.a.createElement(le,null,"filed under:"),m.map(function(e,t){var i=e.name,n=e.link;return p.a.createElement(pe,{key:t,to:n},i)})),p.a.createElement(be,null,p.a.createElement(le,null,"explore:"),p.a.createElement(ce,null,f.map(function(e,t){return p.a.createElement(me,{key:t},e)})))),p.a.createElement(he,null,p.a.createElement(le,null,"see also:")),p.a.createElement(ue,null,h))},null))))},t}(p.a.Component);i.d(t,"e",function(){return n.a}),i.d(t,"f",function(){return a.a}),i.d(t,!1,function(){}),i.d(t,"m",function(){return L}),i.d(t,"l",function(){return S.a}),i.d(t,"n",function(){return S.b}),i.d(t,"a",function(){return I.a}),i.d(t,"c",function(){return O.a}),i.d(t,"i",function(){return R}),i.d(t,"d",function(){return D}),i.d(t,"g",function(){return q.a}),i.d(t,"h",function(){return q.b}),i.d(t,"k",function(){return c}),i.d(t,"j",function(){return Q.a}),i.d(t,"b",function(){return ke})}}]);
//# sourceMappingURL=component---src-pages-articles-js-2996b3191ee19e5bab64.js.map