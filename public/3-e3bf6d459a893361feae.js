(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{229:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var i=n(1),a=n.n(i),r=n(0),o=n.n(r),l=n(230),c=n.n(l);n.d(t,"a",function(){return c.a}),n.d(t,"c",function(){return l.push}),n(235);var s=a.a.createContext({}),u=function(e){return a.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},232:function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"d",function(){return p}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return f}),n(108),n(63),n(267);var i=n(61),a=n.n(i),r=n(1),o=n.n(r),l=n(227),c=n(244),s={},u=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.onVisibleChange(this.props.visible)},n.UNSAFE_componentWillReceiveProps=function(e){e.visible!==this.props.visible&&this.onVisibleChange(e.visible)},n.onVisibleChange=function(e){var t=Object.values(s).every(function(e){return!1===e});s[this.props.id]=e,t!==Object.values(s).every(function(e){return!1===e})&&(e?(document.body.classList.add("modal-open"),document.body.style.paddingRight=Object(c.a)()+"px",window.dispatchEvent(new CustomEvent("modal",{detail:{open:!0,scrollBarWidth:Object(c.a)()}}))):(document.body.classList.remove("modal-open"),document.body.style.paddingRight="",window.dispatchEvent(new CustomEvent("modal",{detail:{open:!1,scrollBarWidth:0}}))))},n.render=function(){var e=this.props,t=e.children,n=e.style,i=e.className;return o.a.createElement("div",{className:i,style:n},t)},t}(o.a.Component),d=Object(l.b)(u).withConfig({displayName:"overlay__Overlay"})(["background-color:rgba(255,255,255,0.92);position:fixed;left:0;top:0;height:100%;width:100%;z-index:999999999999999999999999;opacity:0;display:none;overflow-y:auto;",""],function(e){return e.visible&&Object(l.a)(["opacity:1;display:inline;"])}),p=(l.b.div.withConfig({displayName:"overlay__OverlayFilter"})(["margin-bottom:30px;"]),l.b.div.withConfig({displayName:"overlay__OverlayTitle"})(["text-align:center;text-transform:uppercase;font-weight:700;letter-spacing:0.35em;border:solid 1px;display:inline-block;padding:15px 30px;margin:0 auto;margin-bottom:30px;margin-top:30px;font-family:'Lato';font-size:30px;"])),m=l.b.div.withConfig({displayName:"overlay__OverlayBody"})(["opacity:1;margin:0 auto;margin-top:180px;padding-bottom:60px;display:flex;justify-content:center;flex-direction:column;",""],function(e){return e.wide?Object(l.a)(["width:90%;"]):Object(l.a)(["width:66%;"])}),f=l.b.div.withConfig({displayName:"overlay__OverlayHeader"})(["position:fixed;top:30px;left:0;width:100%;padding:0 12.5%;"])},233:function(e,t,n){"use strict";var i=n(250),a=n(1),r=n.n(a),o=n(263),l=n.n(o),c=n(229),s=n(227),u=n(61),d=n.n(u),p=n(248),m=n.n(p),f=(n(231),n(62),n(244),n(251),n(266)),h=(n(228),s.b.div.withConfig({displayName:"Header__TopBar"})([""])),g=s.b.div.withConfig({displayName:"Header__NavMenu"})(["width:200px;padding:30px;"]),b={textDecoration:"none"},y=Object.assign({},b),x=function(e){function t(t){var n;return(n=e.call(this,t)||this).closeMenu=n.closeMenu.bind(m()(m()(n))),n.state={modalOpen:!1,menuOpen:!1},n}d()(t,e);var i=t.prototype;return i.handleStateChange=function(e){this.setState({menuOpen:e.isOpen})},i.closeMenu=function(){this.setState({menuOpen:!1})},i.toggleMenu=function(){this.setState({menuOpen:!this.state.menuOpen})},i.componentDidMount=function(){var e=this;window.addEventListener("modal",function(t){var n=t.detail.open;e.setState({modalOpen:n})})},i.showSettings=function(e){e.preventDefault()},i.render=function(){var e=this,t=(this.state.modalOpen,this.props.pathname),i=function(e){return-1!==t.indexOf(e)?y:b},a=n(253),o=n(246);return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"100vh",position:"fixed",top:0,zIndex:99999,flexDirection:"column",backgroundColor:"#adc6d2"}},r.a.createElement(f.scaleDown,{customBurgerIcon:r.a.createElement("img",{src:a}),customCrossIcon:r.a.createElement("img",{src:o}),isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)},strokeWidth:10,borderRadius:12},r.a.createElement(c.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:i("/the-film"),to:"/the-film",exact:!0},"About the film"),r.a.createElement(c.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:i("/themes"),to:"/themes/",exact:!0},"Themes"),r.a.createElement(c.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:i("/articles"),to:"/articles/",exact:!0},"Articles"),r.a.createElement(c.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:i("/interviews"),to:"/interviews/",exact:!0},"Interviews"),r.a.createElement(c.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:b,to:"/qa/",exact:!0},"Q&A"),r.a.createElement(c.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:i("/clips"),to:"/clips/",exact:!0},"Clips"),r.a.createElement(c.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:i("/teaching"),to:"/teaching/",exact:!0},"Teaching")),r.a.createElement(g,{style:{display:"none"}},r.a.createElement(c.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:i("/the-film"),to:"/the-film",exact:!0},"About the film"),r.a.createElement(c.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:i("/themes"),to:"/themes/",exact:!0},"Themes"),r.a.createElement(c.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:i("/articles"),to:"/articles/",exact:!0},"Articles"),r.a.createElement(c.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:i("/interviews"),to:"/interviews/",exact:!0},"Interviews"),r.a.createElement(c.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:i("/qa"),to:"/qa/",exact:!0},"Q&A"),r.a.createElement(c.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:i("/clips"),to:"/clips/",exact:!0},"Clips"),r.a.createElement(c.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:i("/teaching"),to:"/teaching/",exact:!0},"Teaching")),r.a.createElement(h,null,r.a.createElement("div",{className:"logo"},r.a.createElement(c.a,{to:"/",style:{textDecoration:"none"}},"RACE",r.a.createElement("span",{className:"filmSubtitle"},"the power of an illusion")))))},t}(r.a.Component),v=n(247),w=(n(254),n(256),s.b.div.withConfig({displayName:"layout__Container"})(["background-color:",";margin:0 auto;"],v.a));t.a=function(e){var t=e.children,n=e.location;return r.a.createElement(c.b,{query:"1013274482",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title}),r.a.createElement(x,{data:e,pathname:n.pathname}),r.a.createElement(w,null," ",t," "))},data:i})}},235:function(e,t,n){var i;e.exports=(i=n(243))&&i.default||i},236:function(e,t,n){"use strict";n(62),n(242);var i=n(275),a=n.n(i),r=n(61),o=n.n(r),l=n(1),c=n.n(l),s=n(229),u=n(227),d=u.b.div.withConfig({displayName:"Card__Container"})(["cursor:pointer;"]),p=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.link,n=e.children,i=a()(e,["link","children"]);return t?c.a.createElement(s.a,Object.assign({to:t},i),n):c.a.createElement(d,i,n)},t}(c.a.Component),m=u.b.div.withConfig({displayName:"Card__CardGridItem"})(["position:relative;float:left;display:inline-block;min-width:324px;min-height:441px !important;flex:"," "," ","px;margin-bottom:30px;margin-left:15px;margin-right:15px;max-width:","px;color:black;"," "," "," "," ",""],100,100,350,437.5,function(e){return"Article"===e.type&&Object(u.a)(["flex:"," "," ","px;max-width:","px;"],100,100,350,437.5)},function(e){return"Interview"===e.type&&Object(u.a)(["flex:"," "," ","px;max-width:","px;"],100,100,350,437.5)},function(e){return"Clip"===e.type&&Object(u.a)(["flex:"," "," ","px;max-width:","px;"],100,100,350,437.5)},function(e){return"QuickFact"===e.type&&Object(u.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,656.25)},function(e){return"FAQ"===e.type&&Object(u.a)(["flex:"," "," ","px;max-width:","px;"],150,50,175,218.75)}),f=u.b.div.withConfig({displayName:"Card__Overlay"})(["position:absolute;top:0;left:0;bottom:0;right:0;border-radius:6px;background:rgba(34,34,34,0.95);backdrop-filter:blur(5px);color:white;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleMouseHover=function(){n.setState({isHovering:!n.state.isHovering})},n.state={isHovering:!1},n}return o()(t,e),t.prototype.render=function(){var e=this.state.isHovering,t=this.props,n=t.link,i=t.className,r=t.style,o=t.children,l=t.overlay,s=a()(t,["link","className","style","children","overlay"]);return c.a.createElement(m,Object.assign({},s,{onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover}),c.a.createElement(p,{link:n,className:i,style:r},o,e&&l?c.a.createElement(f,null,l):null))},t}(c.a.Component),g=Object(u.b)(h).withConfig({displayName:"Card__StyledCard"})(['display:block;height:100%;background-color:white;border-radius:6px;overflow:hidden;-webkit-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);-moz-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);transition:all .3s;&:hover{-webkit-box-shadow:0px 7px 15px 2px rgba(179,179,179,0.908);-moz-box-shadow:0px 7px 15px 2px rgba(179,179,179,0.908);box-shadow:0px 7px 15px 2px rgba(179,179,179,0.908);transition:all .3s;}font-family:"ff-tisa-web-pro";vertical-align:top;'," ",""],function(e){return e.background&&Object(u.a)(["background-image:url('","');background-size:cover;"],e.background)},function(e){return e.link&&Object(u.a)(["color:inherit;text-decoration:inherit;"])});t.a=g},237:function(e,t,n){"use strict";n(1);var i=n(229),a=n(227);t.a=Object(a.b)(i.a).withConfig({displayName:"Link"})(["cursor:pointer;text-decoration:none !important;color:inherit;"])},241:function(e,t,n){"use strict";n(231),n(242),n(110),n(62);var i=n(61),a=n.n(i),r=n(248),o=n.n(r),l=(n(108),n(1)),c=n.n(l),s=n(227),u=n(237),d=n(232),p=n(228),m=n.n(p),f=n(277),h=(n(63),n(273),n(274),new Map([["articles","article"],["interviews","interview"],["faqs","faq"],["clips","clip"],["recently added","recent"]])),g=s.b.div.withConfig({displayName:"Filters__Container"})(["mix-blend-mode:normal;text-align:center;margin-bottom:15px;display:flex;flex-direction:row;justify-content:center;margin-top:20px;"]),b=s.b.div.withConfig({displayName:"Filters__Label"})(["margin-right:15px;font-family:Lato;font-weight:700;font-size:14pt;letter-spacing:0.2em;text-transform:uppercase;color:hotpink;"]),y=s.b.div.withConfig({displayName:"Filters__Button"})(["cursor:pointer;color:hotpink;margin-right:15px;margin-bottom:15px;font-size:14pt;letter-spacing:0.125em;font-family:'Lato';font-weight:",";border-bottom:",";text-transform:uppercase;"],function(e){return e.selected?700:null},function(e){return e.selected?"3px solid hotpink":null}),x=function(e){e.queryParams,e.name;var t=e.filter,n=e.subtheme,i=e.toggleFilter,a=Array.from(h.keys()).filter(function(e){return"recently added"===e||(t=e,n.relationships[t]);var t});return c.a.createElement(g,null,c.a.createElement(b,null,"Sort by:"),c.a.createElement(y,{onClick:function(){return i(null)},selected:!t},"All"),a.map(function(e){var n=h.get(e);return c.a.createElement(y,{key:e,onClick:function(){return i(n)},selected:t===n},e)}))},v=s.b.div.withConfig({displayName:"Poster"})(["width:100%;height:66%;background-color:grey;margin-bottom:15px;overflow:hidden;"]),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n}return a()(t,e),t.prototype.render=function(){var e=this;return this.props.clip.relationships.field_poster_image?this.state.play?c.a.createElement(v,null,c.a.createElement("iframe",{title:"player",src:"https://player.vimeo.com/video/18769983?title=0&byline=0&portrait=0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0})):this.props.linkable?c.a.createElement(u.a,{to:"../clips/"+m()(this.props.clip.title)},c.a.createElement(v,null,c.a.createElement("img",{alt:"poster image",src:this.props.clip.relationships.field_poster_image.localFile.publicURL}))):c.a.createElement(v,{onClick:function(){return e.setState({play:!0})}},c.a.createElement("img",{alt:"another image",src:this.props.clip.relationships.field_poster_image.localFile.publicURL})):c.a.createElement(v,null)},t}(c.a.Component),C=n(236),E=(n(392),n(72),s.b.div.withConfig({displayName:"Description"})(["font-style:italic;text-align:center;font-size:18px;font-weight:300;line-height:1.25;margin-bottom:15px;"])),k=function(e){return c.a.createElement(E,{dangerouslySetInnerHTML:{__html:e.children?e.children.replace(new RegExp("p>","g"),"span>"):null}})},_=s.b.div.withConfig({displayName:"Overlay"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;"]),N=n(247),I=s.b.div.withConfig({displayName:"OrangeButton"})(["cursor:pointer;background-color:",";width:146px;height:42px;padding:10px;color:white;font-family:Lato;line-height:30px;border-radius:3px;display:flex;flex-direction:row;justify-content:center;align-items:center;margin:10px;"],N.c),j=Object(s.b)(C.a).withConfig({displayName:"ArticleCard__Container"})(["height:441px;display:flex;flex-direction:column;justify-content:center;"]),M=s.b.div.withConfig({displayName:"ArticleCard__ArticleCardImage"})(["height:100%;flex:1 1 auto;width:100%;background-color:grey;background-position:contain;background-size:cover;background-repeat:no-repeat;background-image:",";"],function(e){return e.background?"url("+e.background+")":null}),O=s.b.div.withConfig({displayName:"ArticleCard__ArticleTitle"})(["font-family:'Lato';font-size:30px;font-weight:400;color:#2b2b2b;letter-spacing:0.03em;padding:0px 30px 0 0px;line-height:1.25;margin-bottom:15px;"]),S=s.b.div.withConfig({displayName:"ArticleCard__InnerContainer"})(["padding:30px;"]),A=s.b.h4.withConfig({displayName:"ArticleCard__Author"})(["margin-bottom:15px;"]),T=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.article,n=(e.i,e.style,e.onOpen),i="/articles/"+m()(t.title),a=t.relationships.field_main_image.localFile.publicURL,r=t.field_short_version?'"'+t.field_short_version.processed+'"':null,o=t.field_author&&t.field_author.processed,l=c.a.createElement(_,null,c.a.createElement(A,null,"Article by ",o),c.a.createElement(O,{style:{color:"white"}},t.title),c.a.createElement(k,null,r),c.a.createElement(I,null,"Read more"));return c.a.createElement(j,{title:t.title,type:"Article",slug:"article",changed:t.changed,onClick:function(){return n(i)},overlay:l},c.a.createElement(M,{background:a}),t.field_short_version&&c.a.createElement(S,null,c.a.createElement(A,null,"Article by ",o),c.a.createElement(O,null,t.title),c.a.createElement(k,null,r)))},t}(c.a.Component),L=s.b.div.withConfig({displayName:"ClipCard__Caption"})(["font-family:'Lato';font-size:14px;line-height:1.5;font-weight:600;letter-spacing:0.02em;padding:30px;"]),R=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.clip,t=void 0===e?{relationships:{}}:e,n="/clips/"+m()(t.title),i=c.a.createElement(_,null,c.a.createElement(w,{clip:t}),c.a.createElement(L,null,t.title));return c.a.createElement(C.a,{title:t.title,type:"Clip",slug:"clip",changed:t.changed,link:n,overlay:i},c.a.createElement(w,{clip:t}),c.a.createElement(L,null,t.title))},t}(c.a.Component),F=Object(s.b)(C.a).withConfig({displayName:"FAQCard__Container"})(["padding:30px;height:441px;display:flex;flex-direction:column;justify-content:center;"]),q=s.b.h4.withConfig({displayName:"FAQCard__Title"})(["margin-bottom:15px;"]),z=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.faq,t=void 0===e?{}:e,n="/qa/"+m()(t.title);return c.a.createElement(F,{slug:"faq",changed:t.changed,type:"FAQ",link:n},c.a.createElement(q,null,"Q&A"),c.a.createElement(k,null,t.title))},t}(c.a.Component),H=Object(s.b)(C.a).withConfig({displayName:"InterviewCard__Container"})(["padding:30px;display:flex;flex-direction:column;justify-content:center;"]),D=s.b.div.withConfig({displayName:"InterviewCard__InterviewCardPhoto"})(["height:192px;width:192px;border-radius:50%;background-color:grey;margin:15px auto;background-size:cover;background-position:center center;background-repeat:no-repeat;background-image:",";"],function(e){return e.background?"url("+e.background+")":null}),B=s.b.h4.withConfig({displayName:"InterviewCard__Title"})(["margin-top:15px;margin-bottom:15px;line-height:1.5;textAlign:center;"]),W=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.interview,n=void 0===t?{}:t,i=(e.i,e.relatedContent,e.onOpen),a="/interviews/"+m()(n.title),r=n.relationships.field_interviewee.localFile.publicURL,o=n.field_key_quote.processed,l=c.a.createElement(_,null,c.a.createElement(B,null,n.title),c.a.createElement(k,null,o),c.a.createElement(I,null,"Read more"));return c.a.createElement(H,{type:"Interview",title:n.title,slug:"interview",changed:n.changed,onClick:function(){return i(a)},overlay:l},c.a.createElement(D,{background:r}),c.a.createElement(B,null,n.title),c.a.createElement(k,null,o))},t}(c.a.Component),Z=Object(s.b)(C.a).withConfig({displayName:"QuickFactCard__Container"})(["padding:15px;"]),G=s.b.h4.withConfig({displayName:"QuickFactCard__Title"})([""]),Q=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.quickfact,n=(e.i,e.relatedContent,e.style,t.field_quickfact.processed);return c.a.createElement(Z,{type:"QuickFact",slug:"quickfact",title:t.title,changed:t.changed},c.a.createElement(G,null,t.title),c.a.createElement(k,null,n))},t}(c.a.Component);n.d(t,"b",function(){return X});var P=n(276),U=(s.b.div.withConfig({displayName:"SubthemeContainer__SubthemeTitle"})(["font-weight:normal;text-rendering:optimizeLegibility;font-size:42px;font-weight:300;padding:15px;font-family:'Lato';text-align:center;color:rgba(59,59,59,0.8);margin-bottom:15px;margin-top:15px;"]),3),J=function(e){return e||[]},Y=function(e){for(var t,n,i=e.length;0!==i;)n=Math.floor(Math.random()*i),t=e[i-=1],e[i]=e[n],e[n]=t;return e},X=function(e,t,n){n||(n=function(e){});var i=J(e.articles).filter(function(e){return!t||"recent"===t||"article"===t}).map(function(e){return c.a.createElement(T,{key:"article-"+e.title,onOpen:function(t){return n(t,e)},article:e})}),a=J(e.clips).filter(function(e){return!t||"recent"===t||"clip"===t}).map(function(e){return c.a.createElement(R,{key:"clip-"+e.title,linkable:!0,clip:e})}),r=J(e.faqs).filter(function(e){return!t||"recent"===t||"faq"===t}).map(function(e){return c.a.createElement(z,{key:"faq-"+e.title,faq:e})}),o=J(e.interviews).filter(function(e){return!t||"recent"===t||"interview"===t}).map(function(e){return c.a.createElement(W,{key:"interview-"+e.title,onOpen:function(t){return n(t,e)},interview:e})}),l=J(e.quickfacts).filter(function(e){return!t||"recent"===t||"quickfact"===t}).map(function(e){return c.a.createElement(Q,{key:"quickfact-"+e.title,quickfact:e})});return i.concat(a,r,o,l)},K=s.b.div.withConfig({displayName:"SubthemeContainer__Row"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;"]),V=s.b.div.withConfig({displayName:"SubthemeContainer__PopupCard"})(["position:relative;width:33vw;height:33vw;min-width:300px;min-height:300px;background-color:gray;border-radius:100px;border:1px solid grey;overflow:hidden;"]),$=s.b.div.withConfig({displayName:"SubthemeContainer__CloseButton"})(["cursor:pointer;position:absolute;top:30px;right:30px;"]),ee=s.b.div.withConfig({displayName:"SubthemeContainer__TopImage"})(["height:50%;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),te=s.b.div.withConfig({displayName:"SubthemeContainer__Description"})([""]),ne=function(e){function t(t){var n;return(n=e.call(this,t)||this).getShuffle=function(e){if("undefined"!=typeof window){var t=window.localStorage.getItem("shuffle");return t?t=JSON.parse(t):(t=Y(P.range(e)),window.localStorage.setItem("shuffle",JSON.stringify(t))),t}},n.close=function(){n.setState({popup:!n.state.popup,card:null})},n.open=function(e,t){n.setState({popup:!0,card:Object.assign({},t,{link:e})})},n.updateOrder(t,null),n.state={numCards:U,filter:null,popup:!1,card:null},n.close=n.close.bind(o()(o()(n))),n.open=n.open.bind(o()(o()(n))),n.toggleFilter=n.toggleFilter.bind(o()(o()(n))),n}a()(t,e);var n=t.prototype;return n.toggleFilter=function(e){this.state.filter===e?this.setState({filter:null}):this.setState({filter:e})},n.shouldComponentUpdate=function(e,t){return t.numCards!==this.state.numCards||t.filter!==this.state.filter||t.popup!==this.state.popup},n.componentWillUpdate=function(e,t){this.state.filter,t.filter},n.updateOrder=function(e,t){if(!e.filter){var n=X(e.data.relationships,t).length;this.order=this.getShuffle(n)}},n.render=function(){var e,t,n,i=this.props.data,a=this.state,r=a.filter,o=a.popup,l=a.card,s=X(i.relationships,r,this.open),p=r?s.sort(function(e,t){return t.props.changed-e.props.changed}):(e=s,t=this.order,n=new Array(e.length),t&&t.forEach(function(t,i){n[i]=e[t]}),n);p=p.filter(function(e){return!!e});var m=l&&l.title?l.title:"",f=l&&l.link?l.link:"",h=l&&l.field_short_version?l.field_short_version.processed:null,g=l&&l.relationships.field_main_image&&l.relationships.field_main_image.localFile.publicURL;return c.a.createElement(re,null,c.a.createElement(d.a,{id:"subtheme-overlay",visible:o},c.a.createElement(d.b,null,c.a.createElement(K,null,l&&c.a.createElement(V,null,c.a.createElement($,{onClick:this.close},"Close"),c.a.createElement(ee,{background:g}),c.a.createElement("h1",null,m),c.a.createElement(te,{dangerouslySetInnerHTML:{__html:h}}),c.a.createElement(u.a,{to:f},"Read the article"))))),c.a.createElement(x,{toggleFilter:this.toggleFilter,name:this.props.name,filter:r,subtheme:i}),c.a.createElement(ie,null,p.map(function(e,t){return c.a.createElement(ae,{key:t},e)})))},t}(c.a.Component),ie=Object(s.b)(f.default).withConfig({displayName:"SubthemeContainer__FlipContainer"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:10px;overflow:auto;"]),ae=s.b.div.withConfig({displayName:"SubthemeContainer__Card"})(["min-width:350px;min-height:441px;"]),re=s.b.div.withConfig({displayName:"SubthemeContainer__Grid"})(["background-color:rgba(255,255,255,0.5);overflow:auto;backdrop-filter:blur(5px);"]),oe=Object(s.b)(ne).withConfig({displayName:"SubthemeContainer"})(["background-color:#ffffff;padding:45px 30px;border-bottom:solid thin grey;margin:60px 30px;"]);t.a=oe},243:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(0),o=n.n(r),l=n(41),c=n(3),s=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return a.a.createElement(l.a,{location:t,pageResources:n})};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},244:function(e,t,n){"use strict";var i=null;t.a=function(){if("undefined"==typeof document)return 0;if(null!==i)return i;var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var a=e.offsetWidth;return n===a&&(a=t.clientWidth),document.body.removeChild(t),i=n-a}},246:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTYuMTcgNjE2LjE4Ij48dGl0bGU+Y2xvc2U8L3RpdGxlPjxyZWN0IHg9IjI3MC43MiIgeT0iLTEwMi44NyIgd2lkdGg9Ijc0LjczIiBoZWlnaHQ9IjgyMS45MyIgcng9IjIxLjU3IiByeT0iMjEuNTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuNjIgMzA4LjA5KSByb3RhdGUoLTQ1KSIvPjxyZWN0IHg9Ii0xMDIuODgiIHk9IjI3MC43MiIgd2lkdGg9IjgyMS45MyIgaGVpZ2h0PSI3NC43MyIgcng9IjIxLjU3IiByeT0iMjEuNTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuNjEgMzA4LjA4KSByb3RhdGUoLTQ1KSIvPjwvc3ZnPg=="},247:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"d",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o});var i="#222222",a="#E3A44D",r="#6A6588",o="#E3A44D"},250:function(e){e.exports={data:{site:{siteMetadata:{title:"Race: The Power of an Illusion"}},allTaxonomyTermThemes:{edges:[{node:{id:"db1af52f-dd0f-4bb0-a7ea-46c6817923f3",name:"Structured Advantage and Disadvantage"}},{node:{id:"e641aeb5-a5a3-442d-83f0-5df5bf02c5a4",name:"Making Whiteness"}},{node:{id:"8661596c-176b-4527-97c4-af0e614da9d8",name:"Science and Pseudoscience"}},{node:{id:"4433de45-87b1-4a89-8fd4-378fb8776c55",name:"Racial Classification: Who Decides?"}},{node:{id:"72d34ba2-6377-4c6f-aacd-7cee0dc2e704",name:"The Racial Wealth Gap"}},{node:{id:"4f251c2c-b851-45bf-ba32-ddb563cca5ae",name:"Who Gets to Be American?"}},{node:{id:"d52b46a5-a433-43eb-971b-c13d54da18e4",name:"Founding America"}}]}}}},251:function(e,t,n){},253:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NTA0NTIzQjUtRDYyQS00OENFLTlFNTYtRjBBRDkwQUI5RDRFPC90aXRsZT48cGF0aCBkPSJNMCAwaDIwdjJIMFYwem0wIDZoMjB2MkgwVjZ6bTAgNmgyMHYySDB2LTJ6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="},254:function(e,t,n){},256:function(e,t,n){},259:function(e,t){},260:function(e,t){}}]);
//# sourceMappingURL=3-e3bf6d459a893361feae.js.map