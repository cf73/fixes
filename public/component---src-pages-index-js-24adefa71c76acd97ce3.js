(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return c});var i=n(1),r=n.n(i),a=(n(228),n(227)),o=n(245),l=a.b.div.withConfig({displayName:"pages__HomeBackground"})(["position:fixed;top:0;left:0;z-index:-999999;height:100%;width:100%;"]);t.default=function(e){var t=e.data,n=e.location;return r.a.createElement(o.d,{location:n},r.a.createElement("div",null,r.a.createElement(l,null),r.a.createElement(o.k,null,"Explore themes from the film:"),t.allTaxonomyTermThemes.edges.map(function(e,t){var n=e.node;return r.a.createElement(o.j,{key:t,data:n})})))};var c="2964085512"},234:function(e,t,n){"use strict";n(242);var i=n(1),r=n.n(i),a=n(227),o=n(229),l=n(228),c=n.n(l),p=a.b.div.withConfig({displayName:"allClips__ClipCard"})(["width:300px;background-color:#292929;color:white;display:inline-block;vertical-align:top;margin-right:30px;margin-bottom:30px;transition:all .3s;border-radius:6px;&:hover{transition:all .3s;}cursor:pointer;"]),d=a.b.div.withConfig({displayName:"allClips__ClipCaption"})(["font-family:'Lato';font-size:14px;line-height:1.5;font-weight:300;letter-spacing:0.04em;padding:15px 30px 30px 30px;"]),u=a.b.div.withConfig({displayName:"allClips__ClipPoster"})(["height:200px;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),s=function(e){var t=e.clip,n=e.link;return r.a.createElement(p,null,n?r.a.createElement(o.a,{style:{color:"inherit",textDecoration:"none"},to:"/clips/"+c()(t.title)},r.a.createElement(u,{background:t.relationships.field_poster_image&&t.relationships.field_poster_image.localFile.publicURL}),r.a.createElement(d,null,t.title)):r.a.createElement("iframe",{title:t.title,src:(t.field_external_video_url&&t.field_external_video_url.uri)+"?title=0&byline=0&portrait=0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))};t.a=function(e){var t=e.data,n=e.selected,i=t.allNodeClip.edges;return n&&(i=i.filter(function(e){return"all"===n||e.node.field_episode===parseInt(n)})),r.a.createElement("div",{style:{padding:"0 30px"}},i.map(function(e,t){return r.a.createElement(s,{key:"clip-"+t,clip:e.node,link:!0})}))}},245:function(e,t,n){"use strict";var i=n(233),r=n(237),a=n(227),o=a.b.div.withConfig({displayName:"Title"})(["color:white;text-align:center;font-family:Lato;font-size:36px;font-weight:300;letter-spacing:0.04em;padding-top:120px;margin-bottom:75px;"]),l=(n(231),n(61)),c=n.n(l),p=n(1),d=n.n(p),u=n(228),s=n.n(u),m=Object(a.b)(r.a).withConfig({displayName:"SubThemeCard__Container"})(["color:white;padding:1vw;font-family:'Lato';text-align:center;"]),f=a.b.div.withConfig({displayName:"SubThemeCard__Title"})(['position:relative;font-size:20pt;line-height:26px;font-weight:bold;padding-bottom:1vh;&:after{content:"\0a0\0a0";position:absolute;bottom:-.25vh;left:calc(50% - 50px);width:100px;height:1px;border-bottom:2px solid #D83C46;}']),g=a.b.div.withConfig({displayName:"SubThemeCard__Description"})(["font-family:'Tisa Pro';font-size:16pt;padding-top:1vh;padding-bottom:1vh;"]),h=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.name,n=e.description?e.description.value:"",i="/subthemes/"+s()(t);return d.a.createElement(m,{to:i},d.a.createElement(f,null,t),d.a.createElement(g,{dangerouslySetInnerHTML:{__html:n}}))},t}(d.a.Component),b="linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(1,1,2,0.64) 25%,rgba(1,1,2,1) 100%)",x=a.b.div.withConfig({displayName:"ThemeCard__Container"})(["border-radius:45;width:90%;margin-left:5%;margin-bottom:60px;margin-right:0;display:inline-block;vertical-align:top;position:relative;overflow:hidden;box-shadow:rgba(39,39,39,0.58) 0px 3px 57px 0px;user-select:none;border-radius:60px;color:white;background-size:cover !important;background-attachment:fixed;transition:all .5s ease;&:hover{background-size:125% auto !important;transition:all .5s ease;background:",";background:",";}background:",";background:",";background:",";height:",";"],function(e){return e.background?"url("+e.background+") center no-repeat":"none"},function(e){return e.background?b+", url("+e.background+") center no-repeat":"none"},function(e){return e.background?"url("+e.background+") center no-repeat":"none"},function(e){return e.backgrounGrayscale?"url("+e.backgrounGrayscale+") center no-repeat":"none"},function(e){return e.backgrounGrayscale?b+", url("+e.backgrounGrayscale+") center no-repeat":"none"},function(e){return e.open?"100vh":"60vh"}),w=a.b.div.withConfig({displayName:"ThemeCard__Title"})(["font-family:Lato;font-size:48px;line-height:1;text-align:left;letter-spacing:0.011em;padding-top:30vh;padding-bottom:5vh;text-align:center;"]),y=a.b.div.withConfig({displayName:"ThemeCard__Description"})(["font-family:Lato;text-align:center;padding-left:10vw;padding-right:10vw;"]),v=a.b.div.withConfig({displayName:"ThemeCard__Chevron"})(["cursor:pointer;position:absolute;right:1vw;top:30vh;font-family:'Lato';font-size:100px;color:white;transform:",";"],function(e){return e.open?"rotate(90deg)":"none"}),k=a.b.div.withConfig({displayName:"ThemeCard__SubThemes"})(["display:grid;grid-template-columns:30vw 30vw 30vw;"]),_=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={open:!1},n}return c()(t,e),t.prototype.render=function(){var e=this,t=this.state.open,n=this.props.data,i=n.relationships.field_theme_image&&n.relationships.field_theme_image.localFile.publicURL,r="";try{r=n.relationships.field_theme_image.localFile.childImageSharp.grayscale.src}catch(e){r=i}var a=n.description&&n.description.processed;"undefined"!=typeof window&&((new window.Image).src=i);var o=n.relationships.subthemes;return d.a.createElement(x,{open:t,background:i,backgrounGrayscale:r,onClick:function(){return e.setState({open:!t})}},d.a.createElement(w,null,n.name),d.a.createElement(y,{dangerouslySetInnerHTML:{__html:a}}),d.a.createElement(v,{open:t},"〉"),d.a.createElement(k,null,t&&o.map(function(e,t){return d.a.createElement(h,{key:t,data:e})})))},t}(d.a.Component),C=n(241),E=n(234),T=n(236),N=n(229),z=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){return d.a.createElement(N.a,{to:"/"+this.props.slug+"s/"+s()(this.props.title),className:this.props.className,style:this.props.style},this.props.type?d.a.createElement("h4",null,this.props.type):null,d.a.createElement("div",{className:"RCimage",style:{backgroundImage:"url("+this.props.imgSrc+")",backgroundSize:"cover",backgroundPosition:"center"}}),d.a.createElement("p",null,this.props.title),this.props.children)},t}(d.a.Component),S=Object(a.b)(z).withConfig({displayName:"rccard__StyledRCCard"})(["display:inline-block;height:auto;flex:"," "," ",'px;border:solid thin lightgrey;background-color:#f7f7f7;-webkit-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);-moz-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);margin-bottom:20px;font-family:"ff-tisa-web-pro";vertical-align:top;text-align:left;margin-left:10px;margin-right:10px;max-width:',"px color:inherit;text-decoration:inherit;"," "," ",""],100,100,350,350*.7,function(e){return e.background&&Object(a.a)(["background-image:url('","');background-size:cover;"],e.background)},function(e){return"Article"===e.type&&Object(a.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)},function(e){return"QuickFact"===e.type&&Object(a.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)}),L=a.b.div.withConfig({displayName:"Filter__Row"})(["display:flex;flex-direction:row;padding:10px;color:",";"],function(e){return e.color?e.color:"white"}),j=a.b.div.withConfig({displayName:"Filter__Element"})(["cursor:pointer;margin-left:10px;font-weight:",";"],function(e){return e.selected?"bold":"normal"}),F=a.b.div.withConfig({displayName:"Filter__Title"})(["text-decoration:underline;"]),I=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.selected,n=e.onSelected,i=e.color;return d.a.createElement(L,{color:i},"Sort by: ",d.a.createElement(j,{selected:"all"===t,onClick:function(){return n("all")}},"All"),d.a.createElement(j,{selected:"1"===t,onClick:function(){return n("1")}},d.a.createElement(F,null,"Episode One:")," The Difference Between Us"),d.a.createElement(j,{selected:"2"===t,onClick:function(){return n("2")}},d.a.createElement(F,null,"Episode Two:")," The Story We Tell"),d.a.createElement(j,{selected:"3"===t,onClick:function(){return n("3")}},d.a.createElement(F,null,"Episode Three:")," The House We Live In"))},t}(p.Component),O=n(232);n.d(t,"d",function(){return i.a}),n.d(t,"e",function(){return r.a}),n.d(t,"k",function(){return o}),n.d(t,"j",function(){return _}),n.d(t,"i",function(){return C.a}),n.d(t,"a",function(){return E.a}),n.d(t,"b",function(){return T.a}),n.d(t,"h",function(){return S}),n.d(t,"c",function(){return I}),n.d(t,"f",function(){return O.a}),n.d(t,"g",function(){return O.b})}}]);
//# sourceMappingURL=component---src-pages-index-js-24adefa71c76acd97ce3.js.map