(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"interviewsQuery",function(){return y}),n(108);var i=n(61),g=n.n(i),r=n(1),a=n.n(r),l=n(227),o=n(269),C=n(229),I=l.b.div.withConfig({displayName:"interview__KeyQuote"})(['font-size:60px;font-weight:500;margin-bottom:60px;padding:162px 120px 138px 120px;width:100%;line-height:1.25;text-align:center;border-bottom:solid thin lightgrey;font-family:"orpheuspro";background-color:#2b2b2b;color:snow;']),A=l.b.div.withConfig({displayName:"interview__AuthorBioText"})(["width:300px;height:auto;z-index:9999999999;background-color:white;padding:30px;font-size:12px;line-height:1.5;font-weight:500;opacity:0.9;"]),c=l.b.div.withConfig({displayName:"interview__InterviewTitle"})(['margin-bottom:45px;font-size:60px;font-weight:500;line-height:1.25;position:relative;line-height:1;font-family:"orpheuspro";']),s=l.b.div.withConfig({displayName:"interview__InterviewColumn"})(["padding:30px;top:-150px;background-color:white;position:relative;font-size:17px;max-width:760px;line-height:1.75;margin-left:30px !important;"]),p=l.b.div.withConfig({displayName:"interview__Overlay"})(["background-color:#FFFFE0;position:fixed;opacity:0.8;left:0;top:0;height:100%;width:100%"]),d=l.b.div.withConfig({displayName:"interview__Centered"})(["border:1px solid #888888;opacity:1;position:relative;top:50%;width:50%;padding:20px;transform:translate(50%,-50%);"]),u=l.b.div.withConfig({displayName:"interview__AuthorImage"})(["height:420px;width:420px;border:solid thin lightgrey;border-radius:50%;right:calc(55% - 200px);background-size:cover;background-position:center;background-image:",";overflow:hidden;"],function(e){return e.background?"url("+e.background+")":"none"}),m=l.b.div.withConfig({displayName:"interview__TopText"})(["width:100%;text-align:center;padding:30px 45px;top:0;position:absolute;color:white;"]),h=function(e){var t=e.data;return a.a.createElement("div",{style:{fontFamily:"Lato"}},t.nodeInterview.field_interviewee_bio.processed)},f=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){var e=this.props.quickFact;if(!e)return null;var t={articles:[],clips:[],faqs:[],quickFacts:[]};return(e.relationships.field_related_content||[]).forEach(function(e){"node__faq"==e.__typename?t.faqs.push(e):"node__article"==e.__typename?t.articles.push(e):"node__clip"==e.__typename&&t.clips.push(e)}),a.a.createElement(p,null,a.a.createElement(d,null,a.a.createElement("div",{onClick:this.props.closeHandler,style:{float:"right",color:"red"}},a.a.createElement("b",null,"Close")),a.a.createElement("h3",null,e.title),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.field_quickfact.processed}}),Object(o.e)(t).slice(0,2)))},t}(a.a.Component),b=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n}return g()(t,e),t.prototype.render=function(){var e=this,t=this.props.data;return a.a.createElement("div",{className:"row"},a.a.createElement(f,{quickFact:this.state.quickFact,closeHandler:function(){return e.setState({quickFact:null})}}),a.a.createElement(m,null,a.a.createElement(C.a,{style:{color:"inherit"},to:"/interviews/"},a.a.createElement("img",{style:{height:24,opacity:.8,display:"inline-block",marginBottom:0,marginRight:15,verticalAlign:"middle"},src:n(396)}),a.a.createElement("h4",{style:{marginBottom:0,display:"inline-block",verticalAlign:"middle"}},"all interviews"))),a.a.createElement(I,{dangerouslySetInnerHTML:{__html:t.nodeInterview.field_key_quote.processed}}),a.a.createElement(s,{className:"column"},a.a.createElement(c,null,a.a.createElement("h4",{style:{marginBottom:15}},"Interview with"),t.nodeInterview.field_interviewee_name.processed),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.nodeInterview.field_full_length_version.processed}}),a.a.createElement("div",{style:{height:200}}),(t.nodeInterview.relationships.backref_field_related_content||[]).map(function(t){return a.a.createElement("div",{style:{cursor:"pointer",border:"1px solid #888888",padding:20}},a.a.createElement("h3",null,t.title),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.field_quickfact.processed},onClick:function(){return e.setState({quickFact:t})}}))})),a.a.createElement("div",{className:"column _25"},a.a.createElement(u,{background:t.nodeInterview.relationships.field_interviewee&&t.nodeInterview.relationships.field_interviewee.localFile.publicURL}),a.a.createElement(A,null,a.a.createElement(h,{data:t}," "))))},t}(a.a.Component);t.default=b;var y="2180119832"},234:function(e,t,n){"use strict";n(242);var i=n(1),g=n.n(i),r=n(227),a=n(229),l=n(228),o=n.n(l),C=r.b.div.withConfig({displayName:"allClips__ClipCard"})(["width:300px;background-color:#292929;color:white;display:inline-block;vertical-align:top;margin-right:30px;margin-bottom:30px;transition:all .3s;border-radius:6px;&:hover{transition:all .3s;}cursor:pointer;"]),I=r.b.div.withConfig({displayName:"allClips__ClipCaption"})(["font-family:'Lato';font-size:14px;line-height:1.5;font-weight:300;letter-spacing:0.04em;padding:15px 30px 30px 30px;"]),A=r.b.div.withConfig({displayName:"allClips__ClipPoster"})(["height:200px;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),c=function(e){var t=e.clip,n=e.link;return g.a.createElement(C,null,n?g.a.createElement(a.a,{style:{color:"inherit",textDecoration:"none"},to:"/clips/"+o()(t.title)},g.a.createElement(A,{background:t.relationships.field_poster_image&&t.relationships.field_poster_image.localFile.publicURL}),g.a.createElement(I,null,t.title)):g.a.createElement("iframe",{title:t.title,src:(t.field_external_video_url&&t.field_external_video_url.uri)+"?title=0&byline=0&portrait=0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))};t.a=function(e){var t=e.data,n=e.selected,i=t.allNodeClip.edges;return n&&(i=i.filter(function(e){return"all"===n||e.node.field_episode===parseInt(n)})),g.a.createElement("div",{style:{padding:"0 30px"}},i.map(function(e,t){return g.a.createElement(c,{key:"clip-"+t,clip:e.node,link:!0})}))}},245:function(e,t,n){"use strict";var i=n(233),g=n(237),r=n(227),a=r.b.div.withConfig({displayName:"Title"})(["color:white;text-align:center;font-family:Lato;font-size:36px;font-weight:300;letter-spacing:0.04em;padding-top:120px;margin-bottom:75px;"]),l=(n(231),n(61)),o=n.n(l),C=n(1),I=n.n(C),A=n(228),c=n.n(A),s=Object(r.b)(g.a).withConfig({displayName:"SubThemeCard__Container"})(["color:white;padding:1vw;font-family:'Lato';text-align:center;"]),p=r.b.div.withConfig({displayName:"SubThemeCard__Title"})(['position:relative;font-size:20pt;line-height:26px;font-weight:bold;padding-bottom:1vh;&:after{content:"\0a0\0a0";position:absolute;bottom:-.25vh;left:calc(50% - 50px);width:100px;height:1px;border-bottom:2px solid #D83C46;}']),d=r.b.div.withConfig({displayName:"SubThemeCard__Description"})(["font-family:'Tisa Pro';font-size:16pt;padding-top:1vh;padding-bottom:1vh;"]),u=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.name,n=e.description?e.description.value:"",i="/subthemes/"+c()(t);return I.a.createElement(s,{to:i},I.a.createElement(p,null,t),I.a.createElement(d,{dangerouslySetInnerHTML:{__html:n}}))},t}(I.a.Component),m="linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(1,1,2,0.64) 25%,rgba(1,1,2,1) 100%)",h=r.b.div.withConfig({displayName:"ThemeCard__Container"})(["border-radius:45;width:90%;margin-left:5%;margin-bottom:60px;margin-right:0;display:inline-block;vertical-align:top;position:relative;overflow:hidden;box-shadow:rgba(39,39,39,0.58) 0px 3px 57px 0px;user-select:none;border-radius:60px;color:white;background-size:cover !important;background-attachment:fixed;transition:all .5s ease;&:hover{background-size:125% auto !important;transition:all .5s ease;background:",";background:",";}background:",";background:",";background:",";height:",";"],function(e){return e.background?"url("+e.background+") center no-repeat":"none"},function(e){return e.background?m+", url("+e.background+") center no-repeat":"none"},function(e){return e.background?"url("+e.background+") center no-repeat":"none"},function(e){return e.backgrounGrayscale?"url("+e.backgrounGrayscale+") center no-repeat":"none"},function(e){return e.backgrounGrayscale?m+", url("+e.backgrounGrayscale+") center no-repeat":"none"},function(e){return e.open?"100vh":"60vh"}),f=r.b.div.withConfig({displayName:"ThemeCard__Title"})(["font-family:Lato;font-size:48px;line-height:1;text-align:left;letter-spacing:0.011em;padding-top:30vh;padding-bottom:5vh;text-align:center;"]),b=r.b.div.withConfig({displayName:"ThemeCard__Description"})(["font-family:Lato;text-align:center;padding-left:10vw;padding-right:10vw;"]),y=r.b.div.withConfig({displayName:"ThemeCard__Chevron"})(["cursor:pointer;position:absolute;right:1vw;top:30vh;font-family:'Lato';font-size:100px;color:white;transform:",";"],function(e){return e.open?"rotate(90deg)":"none"}),v=r.b.div.withConfig({displayName:"ThemeCard__SubThemes"})(["display:grid;grid-template-columns:30vw 30vw 30vw;"]),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={open:!1},n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.state.open,n=this.props.data,i=n.relationships.field_theme_image&&n.relationships.field_theme_image.localFile.publicURL,g="";try{g=n.relationships.field_theme_image.localFile.childImageSharp.grayscale.src}catch(e){g=i}var r=n.description&&n.description.processed;"undefined"!=typeof window&&((new window.Image).src=i);var a=n.relationships.subthemes;return I.a.createElement(h,{open:t,background:i,backgrounGrayscale:g,onClick:function(){return e.setState({open:!t})}},I.a.createElement(f,null,n.name),I.a.createElement(b,{dangerouslySetInnerHTML:{__html:r}}),I.a.createElement(y,{open:t},"〉"),I.a.createElement(v,null,t&&a.map(function(e,t){return I.a.createElement(u,{key:t,data:e})})))},t}(I.a.Component),_=n(241),x=n(234),k=n(236),E=n(229),N=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return I.a.createElement(E.a,{to:"/"+this.props.slug+"s/"+c()(this.props.title),className:this.props.className,style:this.props.style},this.props.type?I.a.createElement("h4",null,this.props.type):null,I.a.createElement("div",{className:"RCimage",style:{backgroundImage:"url("+this.props.imgSrc+")",backgroundSize:"cover",backgroundPosition:"center"}}),I.a.createElement("p",null,this.props.title),this.props.children)},t}(I.a.Component),L=Object(r.b)(N).withConfig({displayName:"rccard__StyledRCCard"})(["display:inline-block;height:auto;flex:"," "," ",'px;border:solid thin lightgrey;background-color:#f7f7f7;-webkit-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);-moz-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);margin-bottom:20px;font-family:"ff-tisa-web-pro";vertical-align:top;text-align:left;margin-left:10px;margin-right:10px;max-width:',"px color:inherit;text-decoration:inherit;"," "," ",""],100,100,350,350*.7,function(e){return e.background&&Object(r.a)(["background-image:url('","');background-size:cover;"],e.background)},function(e){return"Article"===e.type&&Object(r.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)},function(e){return"QuickFact"===e.type&&Object(r.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)}),S=r.b.div.withConfig({displayName:"Filter__Row"})(["display:flex;flex-direction:row;padding:10px;color:",";"],function(e){return e.color?e.color:"white"}),M=r.b.div.withConfig({displayName:"Filter__Element"})(["cursor:pointer;margin-left:10px;font-weight:",";"],function(e){return e.selected?"bold":"normal"}),j=r.b.div.withConfig({displayName:"Filter__Title"})(["text-decoration:underline;"]),T=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.selected,n=e.onSelected,i=e.color;return I.a.createElement(S,{color:i},"Sort by: ",I.a.createElement(M,{selected:"all"===t,onClick:function(){return n("all")}},"All"),I.a.createElement(M,{selected:"1"===t,onClick:function(){return n("1")}},I.a.createElement(j,null,"Episode One:")," The Difference Between Us"),I.a.createElement(M,{selected:"2"===t,onClick:function(){return n("2")}},I.a.createElement(j,null,"Episode Two:")," The Story We Tell"),I.a.createElement(M,{selected:"3"===t,onClick:function(){return n("3")}},I.a.createElement(j,null,"Episode Three:")," The House We Live In"))},t}(C.Component),G=n(232);n.d(t,"d",function(){return i.a}),n.d(t,"e",function(){return g.a}),n.d(t,"k",function(){return a}),n.d(t,"j",function(){return w}),n.d(t,"i",function(){return _.a}),n.d(t,"a",function(){return x.a}),n.d(t,"b",function(){return k.a}),n.d(t,"h",function(){return L}),n.d(t,"c",function(){return T}),n.d(t,"f",function(){return G.a}),n.d(t,"g",function(){return G.b})},269:function(e,t,n){"use strict";n.d(t,"a",function(){return _}),n.d(t,"b",function(){return x}),n.d(t,"c",function(){return k}),n.d(t,"d",function(){return N}),n.d(t,"e",function(){return L}),n(242),n(110);var i=n(248),g=n.n(i),r=(n(273),n(231),n(63),n(274),n(275)),a=n.n(r),l=(n(62),n(61)),o=n.n(l),C=(n(108),n(1)),I=n.n(C),A=n(227),c=n(229),s=n(245),p=n(228),d=n.n(p),u=n(276),m=(n(277),A.b.div.withConfig({displayName:"subtheme__SubthemeTitle"})(["font-weight:normal;text-rendering:optimizeLegibility;font-size:42px;font-weight:300;padding:15px;font-family:'Lato';text-align:center;color:rgba(59,59,59,0.8);margin-bottom:15px;margin-top:15px;"])),h=3,f=function(e){return e||[]},b=function(e){for(var t,n,i=e.length;0!==i;)n=Math.floor(Math.random()*i),t=e[i-=1],e[i]=e[n],e[n]=t;return e},y=A.b.div.withConfig({displayName:"subtheme__ArticleTitle"})(["font-family:'Lato';font-size:30px;font-weight:400;color:#2b2b2b;letter-spacing:0.03em;padding:0px 30px 0 0px;line-height:1.25;margin-bottom:15px;"]),v=A.b.div.withConfig({displayName:"subtheme__Poster"})(["width:100%;height:66%;background-color:grey;margin-bottom:15px;overflow:hidden;"]),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n}return o()(t,e),t.prototype.render=function(){var e=this;return this.props.clip.relationships.field_poster_image?this.state.play?I.a.createElement(v,null,I.a.createElement("iframe",{title:"player",src:"https://player.vimeo.com/video/18769983?title=0&byline=0&portrait=0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0})):this.props.linkable?I.a.createElement(c.a,{to:"../clips/"+d()(this.props.clip.title)},I.a.createElement(v,null,I.a.createElement("img",{alt:"poster image",src:this.props.clip.relationships.field_poster_image.localFile.publicURL}))):I.a.createElement(v,{onClick:function(){return e.setState({play:!0})}},I.a.createElement("img",{alt:"another image",src:this.props.clip.relationships.field_poster_image.localFile.publicURL})):I.a.createElement(v,null)},t}(I.a.Component),_=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.article,n=e.i,i=e.relatedContent,g=e.style,r=void 0===g?{}:g,a=e.onOpen,l="/articles/"+d()(t.title);return i?I.a.createElement(s.h,{style:Object.assign({},r,{padding:30}),key:"article-"+n,article:t,imgSrc:t.relationships.field_main_image&&t.relationships.field_main_image.localFile&&t.relationships.field_main_image.localFile.publicURL,title:t.title,type:"Article",slug:"article",changed:t.changed},t.field_short_version&&I.a.createElement("p",{className:"RCcard-large-text",dangerouslySetInnerHTML:{__html:t.field_short_version.processed}})):I.a.createElement(s.b,{style:Object.assign({},r,{padding:0}),key:"article-"+n,title:t.title,type:"Article",slug:"article",changed:t.changed,onClick:function(){return a(l)}},I.a.createElement("div",{className:"articleCardImage",style:{backgroundImage:t.relationships.field_main_image?"url("+t.relationships.field_main_image.localFile.publicURL+")":null}}),t.field_short_version&&I.a.createElement("div",{style:{padding:30}},I.a.createElement("h4",{style:{marginBottom:15}},"Article by ",t.field_author&&t.field_author.processed),I.a.createElement(y,null,t.title),'"',I.a.createElement("span",{className:"card-large-text",dangerouslySetInnerHTML:{__html:t.field_short_version.processed}})))},t}(I.a.Component),x=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.clip,n=void 0===t?{relationships:{}}:t,i=e.i,g=e.relatedContent,r=e.linkable,a=e.style,l=void 0===a?{}:a;return g?I.a.createElement(s.h,{key:"clip-"+i,title:n.title,slug:"clip",changed:n.changed,style:l},I.a.createElement(w,{clip:n,linkable:r}),I.a.createElement("p",{style:{paddingLeft:30,paddingRight:30,paddingBottom:20},className:"caption"},n.title)):I.a.createElement(s.b,{key:"clip-"+i,title:n.title,type:"Clip",slug:"clip",style:l,changed:n.changed,link:"/clips/"+d()(n.title)},I.a.createElement(w,{clip:n}),I.a.createElement("p",{style:{paddingLeft:30,paddingRight:30,paddingBottom:20},className:"caption"},n.title))},t}(I.a.Component),k=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.faq,n=void 0===t?{}:t,i=e.i,g=e.style,r=void 0===g?{}:g;return I.a.createElement(s.b,{style:Object.assign({},r,{padding:30,display:"flex",flexDirection:"column",justifyContent:"center"}),key:"faq-"+i,slug:"faq",changed:n.changed,type:"FAQ",link:"/qa/"+d()(n.title)},I.a.createElement("h4",{style:{marginBottom:15}},"Q&A"),I.a.createElement("p",{className:"card-large-text"},n.title))},t}(I.a.Component),E=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.interview,n=void 0===t?{}:t,i=e.i,g=(e.relatedContent,e.style),r=void 0===g?{}:g,a=e.onOpen,l="/interviews/"+d()(n.title);return I.a.createElement(s.b,{style:Object.assign({},r,{padding:30,display:"flex",flexDirection:"column",justifyContent:"center"}),key:"interview-"+i,type:"Interview",title:n.title,slug:"interview",changed:n.changed,onClick:function(){return a(l)}},I.a.createElement("div",{className:"interviewCardPhoto",style:{backgroundImage:n.relationships.field_interviewee?"url("+n.relationships.field_interviewee.localFile.publicURL+")":null}}),I.a.createElement("h4",{style:{marginTop:15,marginBottom:15,lineHeight:1.5,textAlign:"center"}},n.title),I.a.createElement("p",{style:{fontStyle:"italic",textAlign:"center"},className:"card-large-text"},n.field_key_quote.processed))},t}(I.a.Component),N=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.quickfact,n=e.i,i=(e.relatedContent,e.style),g=void 0===i?{}:i,r=a()(e,["quickfact","i","relatedContent","style"]);return I.a.createElement(s.b,Object.assign({},r,{key:"quickfact-"+n,type:"QuickFact",title:t.title,slug:"quickfact",changed:t.changed,style:Object.assign({},g,{padding:15})}),I.a.createElement("h4",null,t.title),I.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.field_quickfact.processed}}))},t}(I.a.Component),L=function(e,t,n,i,g){return g||(g=function(e){}),f(e.articles).filter(function(e){return!t||"recent"===t||"article"===t}).map(function(e,t){return I.a.createElement(_,{key:"article-"+e.title,onOpen:function(t){return g(t,e)},article:e,i:t,relatedContent:n})}).concat(f(e.clips).filter(function(e){return!t||"recent"===t||"clip"===t}).map(function(e,t){return I.a.createElement(x,{key:"clip-"+e.title,linkable:i,clip:e,i:t,relatedContent:n})}),f(e.faqs).filter(function(e){return!t||"recent"===t||"faq"===t}).map(function(e,t){return I.a.createElement(k,{key:"faq-"+e.title,faq:e,i:t,relatedContent:n})}),f(e.interviews).filter(function(e){return!t||"recent"===t||"interview"===t}).map(function(e,t){return I.a.createElement(E,{key:"interview-"+e.title,onOpen:function(t){return g(t,e)},interview:e,i:t,relatedContent:n})}),f(e.quickfacts).filter(function(e){return!t||"recent"===t||"quickfact"===t}).map(function(e,t){return I.a.createElement(N,{key:"quickfact-"+e.title,quickfact:e,i:t,relatedContent:n})}))},S=new Map([["articles","article"],["interviews","interview"],["faqs","faq"],["clips","clip"],["recently added","recent"]]),M={color:"rgb(255, 132, 0)",marginRight:15,marginBottom:15,fontSize:14,letterSpacing:"0.125em"},j=Object.assign({},M,{fontWeight:"700",borderBottom:"solid 2px hotpink"}),T=function(e){e.queryParams,e.name;var t=e.filter,n=e.subtheme,i=e.toggleFilter;return I.a.createElement("div",{style:{mixBlendMode:"normal",textAlign:"center",marginBottom:15}},I.a.createElement("span",{style:{marginRight:15,fontFamily:"Lato",fontWeight:700,fontSize:14,letterSpacing:"0.2em",textTransform:"uppercase",color:"hotpink"}},"Sort by: "),I.a.createElement("button",{onClick:function(){i(null)},style:t?M:j},"All"),Array.from(S.keys()).filter(function(e){return"recently added"===e||(t=e,n.relationships[t]);var t}).map(function(e){var n=S.get(e);return I.a.createElement("button",{key:e,onClick:function(){i(n)},style:Object.assign({},t===n?j:M,{float:"none",fontWeight:700,letterSpacing:"0.2em",color:"hotpink"})},e)}))},G=A.b.div.withConfig({displayName:"subtheme__Row"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;"]),z=A.b.div.withConfig({displayName:"subtheme__PopupCard"})(["position:relative;width:33vw;height:33vw;min-width:300px;min-height:300px;background-color:gray;border-radius:100px;border:1px solid grey;overflow:hidden;"]),F=A.b.div.withConfig({displayName:"subtheme__CloseButton"})(["cursor:pointer;position:absolute;top:30px;right:30px;"]),H=A.b.div.withConfig({displayName:"subtheme__TopImage"})(["height:50%;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),O=A.b.div.withConfig({displayName:"subtheme__Description"})([""]),D=function(e){function t(t){var n;return(n=e.call(this,t)||this).getShuffle=function(e){if("undefined"!=typeof window){var t=window.localStorage.getItem("shuffle");return t?t=JSON.parse(t):(t=b(u.range(e)),window.localStorage.setItem("shuffle",JSON.stringify(t))),t}},n.close=function(){n.setState({popup:!n.state.popup,card:null})},n.open=function(e,t){n.setState({popup:!0,card:Object.assign({},t,{link:e})})},n.updateOrder(t,null),n.state={numCards:h,filter:null,popup:!1,card:null},n.close=n.close.bind(g()(g()(n))),n.open=n.open.bind(g()(g()(n))),n.toggleFilter=n.toggleFilter.bind(g()(g()(n))),n}o()(t,e);var n=t.prototype;return n.toggleFilter=function(e){this.state.filter===e?this.setState({filter:null}):this.setState({filter:e})},n.shouldComponentUpdate=function(e,t){return t.numCards!==this.state.numCards||t.filter!==this.state.filter||t.popup!==this.state.popup},n.componentWillUpdate=function(e,t){this.state.filter,t.filter},n.updateOrder=function(e,t){if(!e.filter){var n=L(e.data.relationships,t).length;this.order=this.getShuffle(n)}},n.render=function(){var e,t,n,i=this.props.data,g=this.state,r=g.filter,a=g.popup,l=g.card,o=L(i.relationships,r,null,!0,this.open),C=r?o.sort(function(e,t){return t.props.changed-e.props.changed}):(e=o,t=this.order,n=new Array(e.length),t&&t.forEach(function(t,i){n[i]=e[t]}),n),A=i.description?I.a.createElement("div",{className:"subtheme-description",key:"description",dangerouslySetInnerHTML:{__html:i.description.processed}}):null;return I.a.createElement("div",null,I.a.createElement(s.f,{id:"subtheme-overlay",visible:a},I.a.createElement(s.g,null,I.a.createElement(G,null,l&&I.a.createElement(z,null,I.a.createElement(F,{onClick:this.close},"Close"),I.a.createElement(H,{background:l.relationships.field_main_image&&l.relationships.field_main_image.localFile.publicURL}),I.a.createElement("h1",null,l.title),I.a.createElement(O,{dangerouslySetInnerHTML:{__html:l.field_short_version?l.field_short_version.processed:null}}),I.a.createElement(c.a,{to:l.link},"Read the article"))))),I.a.createElement(m,null,i.name),A,I.a.createElement(T,{toggleFilter:this.toggleFilter,name:this.props.name,filter:r,subtheme:i}),I.a.createElement("div",null,C.map(function(e,t){return I.a.createElement("div",{key:t},e)})))},t}(I.a.Component);Object(A.b)(D).withConfig({displayName:"subtheme__SubthemeContainer"})(["background-color:rgba(247,247,247,0.97);padding:45px 30px;border-bottom:solid thin grey;margin:60px 30px;"])},396:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA2LjUgMTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYuNSAxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8dGl0bGU+ZG93bjwvdGl0bGU+CjxtZXRhZGF0YT48P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MyA3OS4xNjEzNTYsIDIwMTcvMDkvMDctMDE6MTE6MjIgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+CiAgICAgICAgIDxkYzp0aXRsZT4KICAgICAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+ZG93bjwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpBbHQ+CiAgICAgICAgIDwvZGM6dGl0bGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz48L21ldGFkYXRhPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNi4zLDAuOWMwLjItMC4yLDAuMy0wLjUsMC4xLTAuN2wwLDBDNi4yLDAsNS44LTAuMSw1LjcsMC4xbDAsMEwwLjEsNS42QzAsNS44LDAsNi4xLDAuMSw2LjNsMCwwbDAsMGw1LjUsNS41CgljMC4yLDAuMiwwLjUsMC4yLDAuNywwbDAsMGMwLjItMC4yLDAuMi0wLjUsMC0wLjdsMCwwbC01LjItNUw2LjMsMC45eiIvPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-templates-interview-js-90db0ef528d7fa6dfe7b.js.map