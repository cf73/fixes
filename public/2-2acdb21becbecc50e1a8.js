(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{226:function(e,t,n){"use strict";n.d(t,"b",function(){return p});var i=n(1),r=n.n(i),a=n(0),l=n.n(a),o=n(225),c=n.n(o);n.d(t,"a",function(){return c.a}),n.d(t,"c",function(){return o.push}),n(229);var s=r.a.createContext({}),p=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},229:function(e,t,n){var i;e.exports=(i=n(233))&&i.default||i},231:function(e,t,n){"use strict";var i=null;t.a=function(){if("undefined"==typeof document)return 0;if(null!==i)return i;var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var r=e.offsetWidth;return n==r&&(r=t.clientWidth),document.body.removeChild(t),i=n-r}},233:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),a=n(0),l=n.n(a),o=n(42),c=n(3),s=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(o.a,{location:t,pageResources:n})};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},250:function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return f}),n(112),n(65),n(256);var i=n(32),r=n.n(i),a=n(1),l=n.n(a),o=n(227),c=n(231),s={},p=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.onVisibleChange(this.props.visible)},n.UNSAFE_componentWillReceiveProps=function(e){e.visible!==this.props.visible&&this.onVisibleChange(e.visible)},n.onVisibleChange=function(e){var t=Object.values(s).every(function(e){return!1===e});s[this.props.id]=e,t!==Object.values(s).every(function(e){return!1===e})&&(e?(document.body.classList.add("modal-open"),document.body.style.paddingRight=Object(c.a)()+"px",window.dispatchEvent(new CustomEvent("modal",{detail:{open:!0,scrollBarWidth:Object(c.a)()}}))):(document.body.classList.remove("modal-open"),document.body.style.paddingRight="",window.dispatchEvent(new CustomEvent("modal",{detail:{open:!1,scrollBarWidth:0}}))))},n.render=function(){var e=this.props,t=e.children,n=e.style,i=e.className;return l.a.createElement("div",{className:i,style:n},t)},t}(l.a.Component),d=Object(o.b)(p).withConfig({displayName:"overlay__Overlay"})(["background-color:rgba(255,255,255,0.92);position:fixed;left:0;top:0;height:100%;width:100%;z-index:999999999999999999999999;opacity:0;display:none;overflow-y:auto;",""],function(e){return e.visible&&Object(o.a)(["opacity:1;display:inline;"])}),u=(o.b.div.withConfig({displayName:"overlay__OverlayFilter"})(["margin-bottom:30px;"]),o.b.div.withConfig({displayName:"overlay__OverlayTitle"})(["text-align:center;text-transform:uppercase;font-weight:700;letter-spacing:0.35em;border:solid 1px;display:inline-block;padding:15px 30px;margin:0 auto;margin-bottom:30px;margin-top:30px;font-family:'Lato';font-size:30px;"])),m=o.b.div.withConfig({displayName:"overlay__OverlayBody"})(["opacity:1;margin:0 auto;margin-top:180px;padding-bottom:60px;display:flex;justify-content:center;flex-direction:column;",""],function(e){return e.wide?Object(o.a)(["width:90%;"]):Object(o.a)(["width:66%;"])}),f=o.b.div.withConfig({displayName:"overlay__OverlayHeader"})(["position:fixed;top:30px;left:0;width:100%;padding:0 12.5%;"])},252:function(e,t,n){"use strict";n(246),n(119);var i=n(63),r=n.n(i),a=(n(326),n(230),n(65),n(324),n(261)),l=n.n(a),o=(n(62),n(32)),c=n.n(o),s=(n(112),n(1)),p=n.n(s),d=n(227),u=n(226),m=d.b.div.withConfig({displayName:"card__Container"})(["cursor:pointer;"]),f=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.link,n=e.children,i=l()(e,["link","children"]);return t?p.a.createElement(u.a,Object.assign({to:t},i),n):p.a.createElement(m,i,n)},t}(p.a.Component),h=d.b.div.withConfig({displayName:"card__CardGridItem"})(["display:inline-block;height:auto;min-height:200px;flex:"," "," ","px;margin-bottom:30px;margin-left:15px;margin-right:15px;max-width:","px;"," "," "," "," ",""],100,100,350,437.5,function(e){return"Article"===e.type&&Object(d.a)(["flex:"," "," ","px;max-width:","px;"],100,100,350,437.5)},function(e){return"Interview"===e.type&&Object(d.a)(["flex:"," "," ","px;max-width:","px;"],100,100,350,437.5)},function(e){return"Clip"===e.type&&Object(d.a)(["flex:"," "," ","px;max-width:","px;"],100,100,350,437.5)},function(e){return"QuickFact"===e.type&&Object(d.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,656.25)},function(e){return"FAQ"===e.type&&Object(d.a)(["flex:"," "," ","px;max-width:","px;"],150,50,175,218.75)}),g=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.link,n=e.className,i=e.style,r=(e.children,l()(e,["link","className","style","children"]));return p.a.createElement(h,r,p.a.createElement(f,{link:t,className:n,style:i},this.props.children))},t}(p.a.Component),y=Object(d.b)(g).withConfig({displayName:"card__StyledCard"})(['display:block;height:100%;background-color:white;border-radius:6px;overflow:hidden;-webkit-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);-moz-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);transition:all .3s;&:hover{-webkit-box-shadow:0px 7px 15px 2px rgba(179,179,179,0.908);-moz-box-shadow:0px 7px 15px 2px rgba(179,179,179,0.908);box-shadow:0px 7px 15px 2px rgba(179,179,179,0.908);transition:all .3s;}font-family:"ff-tisa-web-pro";vertical-align:top;'," ",""],function(e){return e.background&&Object(d.a)(["background-image:url('","');background-size:cover;"],e.background)},function(e){return e.link&&Object(d.a)(["color:inherit;text-decoration:inherit;"])}),b=n(228),x=n.n(b),v=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){return p.a.createElement(u.a,{to:"/"+this.props.slug+"s/"+x()(this.props.title),className:this.props.className,style:this.props.style},this.props.type?p.a.createElement("h4",null,this.props.type):null,p.a.createElement("div",{className:"RCimage",style:{backgroundImage:"url("+this.props.imgSrc+")",backgroundSize:"cover",backgroundPosition:"center"}}),p.a.createElement("p",null,this.props.title),this.props.children)},t}(p.a.Component),w=Object(d.b)(v).withConfig({displayName:"rccard__StyledRCCard"})(["display:inline-block;height:auto;flex:"," "," ",'px;border:solid thin lightgrey;background-color:#f7f7f7;-webkit-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);-moz-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);margin-bottom:20px;font-family:"ff-tisa-web-pro";vertical-align:top;text-align:left;margin-left:10px;margin-right:10px;max-width:',"px color:inherit;text-decoration:inherit;"," "," ",""],100,100,350,350*.7,function(e){return e.background&&Object(d.a)(["background-image:url('","');background-size:cover;"],e.background)},function(e){return"Article"===e.type&&Object(d.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)},function(e){return"QuickFact"===e.type&&Object(d.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)}),k=n(250);n(311),n.d(t,"a",function(){return q}),n.d(t,"b",function(){return R}),n.d(t,"c",function(){return F}),n.d(t,"d",function(){return A}),n.d(t,"f",function(){return z});var _=n(309),E=(n(259),d.b.div.withConfig({displayName:"subtheme__SubthemeTitle"})(["font-weight:normal;text-rendering:optimizeLegibility;font-size:42px;font-weight:300;padding:15px;font-family:'Lato';text-align:center;color:rgba(59,59,59,0.8);margin-bottom:15px;margin-top:15px;"])),C=3,O=function(e){return e||[]},N=function(e){for(var t,n,i=e.length;0!==i;)n=Math.floor(Math.random()*i),t=e[i-=1],e[i]=e[n],e[n]=t;return e},j=d.b.div.withConfig({displayName:"subtheme__ArticleTitle"})(["font-family:'Lato';font-size:30px;font-weight:400;color:#2b2b2b;letter-spacing:0.03em;padding:0px 30px 0 0px;line-height:1.25;margin-bottom:15px;"]),S=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n}return c()(t,e),t.prototype.render=function(){var e=this;return this.props.clip.relationships.field_poster_image?this.state.play?p.a.createElement("div",{className:"poster"},p.a.createElement("iframe",{title:"player",src:"https://player.vimeo.com/video/18769983?title=0&byline=0&portrait=0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0})):this.props.linkable?p.a.createElement(u.a,{to:"../clips/"+x()(this.props.clip.title)},p.a.createElement("div",{className:"poster"},p.a.createElement("img",{alt:"poster image",src:this.props.clip.relationships.field_poster_image.localFile.publicURL}))):p.a.createElement("div",{className:"poster",onClick:function(){return e.setState({play:!0})}},p.a.createElement("img",{alt:"another image",src:this.props.clip.relationships.field_poster_image.localFile.publicURL})):p.a.createElement("div",{className:"poster"})},t}(p.a.Component),q=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.article,n=e.i,i=e.relatedContent,r=e.style,a=void 0===r?{}:r,l=e.onOpen,o="/articles/"+x()(t.title);return i?p.a.createElement(w,{style:Object.assign({},a,{padding:30}),key:"article-"+n,article:t,imgSrc:t.relationships.field_main_image&&t.relationships.field_main_image.localFile&&t.relationships.field_main_image.localFile.publicURL,title:t.title,type:"Article",slug:"article",changed:t.changed},t.field_short_version&&p.a.createElement("p",{className:"RCcard-large-text",dangerouslySetInnerHTML:{__html:t.field_short_version.processed}})):p.a.createElement(y,{style:Object.assign({},a,{padding:0}),key:"article-"+n,title:t.title,type:"Article",slug:"article",changed:t.changed,onClick:function(){return l(o)}},p.a.createElement("div",{className:"articleCardImage",style:{backgroundImage:t.relationships.field_main_image?"url("+t.relationships.field_main_image.localFile.publicURL+")":null}}),t.field_short_version&&p.a.createElement("div",{style:{padding:30}},p.a.createElement("h4",{style:{marginBottom:15}},"Article by ",t.field_author&&t.field_author.processed),p.a.createElement(j,null,t.title),'"',p.a.createElement("span",{className:"card-large-text",dangerouslySetInnerHTML:{__html:t.field_short_version.processed}})))},t}(p.a.Component),R=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.clip,n=void 0===t?{relationships:{}}:t,i=e.i,r=e.relatedContent,a=e.linkable,l=e.style,o=void 0===l?{}:l;return r?p.a.createElement(w,{key:"clip-"+i,title:n.title,slug:"clip",changed:n.changed,style:o},p.a.createElement(S,{clip:n,linkable:a}),p.a.createElement("p",{style:{paddingLeft:30,paddingRight:30,paddingBottom:20},className:"caption"},n.title)):p.a.createElement(y,{key:"clip-"+i,title:n.title,type:"Clip",slug:"clip",style:o,changed:n.changed,link:"/clips/"+x()(n.title)},p.a.createElement(S,{clip:n}),p.a.createElement("p",{style:{paddingLeft:30,paddingRight:30,paddingBottom:20},className:"caption"},n.title))},t}(p.a.Component),F=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.faq,n=void 0===t?{}:t,i=e.i,r=e.style,a=void 0===r?{}:r;return p.a.createElement(y,{style:Object.assign({},a,{padding:30,display:"flex",flexDirection:"column",justifyContent:"center"}),key:"faq-"+i,slug:"faq",changed:n.changed,type:"FAQ",link:"/qa/"+x()(n.title)},p.a.createElement("h4",{style:{marginBottom:15}},"Q&A"),p.a.createElement("p",{className:"card-large-text"},n.title))},t}(p.a.Component),L=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.interview,n=void 0===t?{}:t,i=e.i,r=(e.relatedContent,e.style),a=void 0===r?{}:r,l=e.onOpen,o="/interviews/"+x()(n.title);return p.a.createElement(y,{style:Object.assign({},a,{padding:30,display:"flex",flexDirection:"column",justifyContent:"center"}),key:"interview-"+i,type:"Interview",title:n.title,slug:"interview",changed:n.changed,onClick:function(){return l(o)}},p.a.createElement("div",{className:"interviewCardPhoto",style:{backgroundImage:n.relationships.field_interviewee?"url("+n.relationships.field_interviewee.localFile.publicURL+")":null}}),p.a.createElement("h4",{style:{marginTop:15,marginBottom:15,lineHeight:1.5,textAlign:"center"}},n.title),p.a.createElement("p",{style:{fontStyle:"italic",textAlign:"center"},className:"card-large-text"},n.field_key_quote.processed))},t}(p.a.Component),A=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.quickfact,n=e.i,i=(e.relatedContent,e.style),r=void 0===i?{}:i,a=l()(e,["quickfact","i","relatedContent","style"]);return p.a.createElement(y,Object.assign({},a,{key:"quickfact-"+n,type:"QuickFact",title:t.title,slug:"quickfact",changed:t.changed,style:Object.assign({},r,{padding:15})}),p.a.createElement("h4",null,t.title),p.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.field_quickfact.processed}}))},t}(p.a.Component),z=function(e,t,n,i,r){return r||(r=function(e){}),O(e.articles).filter(function(e){return!t||"recent"===t||"article"===t}).map(function(e,t){return p.a.createElement(q,{key:"article-"+e.title,onOpen:function(t){return r(t,e)},article:e,i:t,relatedContent:n})}).concat(O(e.clips).filter(function(e){return!t||"recent"===t||"clip"===t}).map(function(e,t){return p.a.createElement(R,{key:"clip-"+e.title,linkable:i,clip:e,i:t,relatedContent:n})}),O(e.faqs).filter(function(e){return!t||"recent"===t||"faq"===t}).map(function(e,t){return p.a.createElement(F,{key:"faq-"+e.title,faq:e,i:t,relatedContent:n})}),O(e.interviews).filter(function(e){return!t||"recent"===t||"interview"===t}).map(function(e,t){return p.a.createElement(L,{key:"interview-"+e.title,onOpen:function(t){return r(t,e)},interview:e,i:t,relatedContent:n})}),O(e.quickfacts).filter(function(e){return!t||"recent"===t||"quickfact"===t}).map(function(e,t){return p.a.createElement(A,{key:"quickfact-"+e.title,quickfact:e,i:t,relatedContent:n})}))},I=new Map([["articles","article"],["interviews","interview"],["faqs","faq"],["clips","clip"],["recently added","recent"]]),B={color:"rgb(255, 132, 0)",marginRight:15,marginBottom:15,fontSize:14,letterSpacing:"0.125em"},T=Object.assign({},B,{fontWeight:"700",borderBottom:"solid 2px hotpink"}),M=function(e){e.queryParams,e.name;var t=e.filter,n=e.subtheme,i=e.toggleFilter;return p.a.createElement("div",{style:{mixBlendMode:"normal",textAlign:"center",marginBottom:15}},p.a.createElement("span",{style:{marginRight:15,fontFamily:"Lato",fontWeight:700,fontSize:14,letterSpacing:"0.2em",textTransform:"uppercase",color:"hotpink"}},"Sort by: "),p.a.createElement("button",{onClick:function(){i(null)},style:t?B:T},"All"),Array.from(I.keys()).filter(function(e){return"recently added"===e||(t=e,n.relationships[t]);var t}).map(function(e){var n=I.get(e);return p.a.createElement("button",{key:e,onClick:function(){i(n)},style:Object.assign({},t===n?T:B,{float:"none",fontWeight:700,letterSpacing:"0.2em",color:"hotpink"})},e)}))},W=d.b.div.withConfig({displayName:"subtheme__Row"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;"]),U=d.b.div.withConfig({displayName:"subtheme__PopupCard"})(["position:relative;width:33vw;height:33vw;min-width:300px;min-height:300px;background-color:gray;border-radius:100px;border:1px solid grey;overflow:hidden;"]),H=d.b.div.withConfig({displayName:"subtheme__CloseButton"})(["cursor:pointer;position:absolute;top:30px;right:30px;"]),Q=d.b.div.withConfig({displayName:"subtheme__TopImage"})(["height:50%;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),P=d.b.div.withConfig({displayName:"subtheme__Description"})([""]),D=function(e){function t(t){var n;return(n=e.call(this,t)||this).getShuffle=function(e){if("undefined"!=typeof window){var t=window.localStorage.getItem("shuffle");return t?t=JSON.parse(t):(t=N(_.range(e)),window.localStorage.setItem("shuffle",JSON.stringify(t))),t}},n.close=function(){n.setState({popup:!n.state.popup,card:null})},n.open=function(e,t){n.setState({popup:!0,card:Object.assign({},t,{link:e})})},n.updateOrder(t,null),n.state={numCards:C,filter:null,popup:!1,card:null},n.close=n.close.bind(r()(r()(n))),n.open=n.open.bind(r()(r()(n))),n.toggleFilter=n.toggleFilter.bind(r()(r()(n))),n}c()(t,e);var n=t.prototype;return n.toggleFilter=function(e){this.state.filter===e?this.setState({filter:null}):this.setState({filter:e})},n.shouldComponentUpdate=function(e,t){return t.numCards!==this.state.numCards||t.filter!==this.state.filter||t.popup!==this.state.popup},n.componentWillUpdate=function(e,t){this.state.filter,t.filter},n.updateOrder=function(e,t){if(!e.filter){var n=z(e.data.relationships,t).length;this.order=this.getShuffle(n)}},n.render=function(){var e,t,n,i=this.props.data,r=this.state,a=r.filter,l=r.popup,o=r.card,c=z(i.relationships,a,null,!0,this.open),s=a?c.sort(function(e,t){return t.props.changed-e.props.changed}):(e=c,t=this.order,n=new Array(e.length),t&&t.forEach(function(t,i){n[i]=e[t]}),n),d=i.description?p.a.createElement("div",{className:"subtheme-description",key:"description",dangerouslySetInnerHTML:{__html:i.description.processed}}):null;return p.a.createElement("div",{className:this.props.className},p.a.createElement(k.a,{id:"subtheme-overlay",visible:l},p.a.createElement(k.b,null,p.a.createElement(W,null,o&&p.a.createElement(U,null,p.a.createElement(H,{onClick:this.close},"Close"),p.a.createElement(Q,{background:o.relationships.field_main_image&&o.relationships.field_main_image.localFile.publicURL}),p.a.createElement("h1",null,o.title),p.a.createElement(P,{dangerouslySetInnerHTML:{__html:o.field_short_version?o.field_short_version.processed:null}}),p.a.createElement(u.a,{to:o.link},"Read the article"))))),p.a.createElement(E,null,i.name),d,p.a.createElement(M,{toggleFilter:this.toggleFilter,name:this.props.name,filter:a,subtheme:i}),p.a.createElement("div",null,s.map(function(e,t){return p.a.createElement("div",{key:t},e)})))},t}(p.a.Component),J=Object(d.b)(D).withConfig({displayName:"subtheme__SubthemeContainer"})(["background-color:rgba(247,247,247,0.97);padding:45px 30px;border-bottom:solid thin grey;margin:60px 30px;"]);t.e=J},311:function(e,t,n){}}]);
//# sourceMappingURL=2-2acdb21becbecc50e1a8.js.map