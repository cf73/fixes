(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{225:function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"e",function(){return r}),n.d(t,"o",function(){return a}),n.d(t,"p",function(){return o}),n.d(t,"n",function(){return l}),n.d(t,"i",function(){return c}),n.d(t,"c",function(){return p}),n.d(t,"j",function(){return d}),n.d(t,"m",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return f}),n.d(t,"k",function(){return m}),n.d(t,"l",function(){return h}),n.d(t,"f",function(){return g}),n.d(t,"g",function(){return b}),n.d(t,"h",function(){return y});var i="#000000",r=function(e){return"rgba(0,0,0,"+e+")"},a="#FFFFFF",o="#FCFCFC",l="#E06363",c="#DEDEDE",p="#222222",d=function(e){return"linear-gradient(to bottom, "+e+" 0%, #0B0C0D 100%)"},s="#EEFFE8",u=["#FFB1B1","#503E3E"],f="#7E6169",m=["#0075B2","#9FDD6A"],h="#57C190",g=["#7C85A5",p],b=["#37625D","#2F4134"],y="#363D43"},226:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return f});var i=n(0),r=n.n(i),a=n(6),o=n.n(a),l=n(228),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var p=n(248),d=n.n(p);n.d(t,"PageRenderer",function(){return d.a});var s=n(41);n.d(t,"parsePath",function(){return s.a});var u=r.a.createContext({}),f=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},229:function(e,t,n){"use strict";n(227),n(231),n(106),n(40);var i=n(17),r=n.n(i),a=n(45),o=n.n(a),l=(n(103),n(0)),c=n.n(l),p=n(223),d=n(233),s=n(230),u=n(224),f=n.n(u),m=n(292),h=(n(59),n(288),n(225)),g=(n(289),new Map([["articles","article"],["interviews","interview"],["Q&A","qa"],["clips","clip"],["recently added","recent"]])),b=p.b.div.withConfig({displayName:"Filters__Container"})(["mix-blend-mode:normal;text-align:center;margin-bottom:15px;display:flex;flex-direction:row;justify-content:flex-start;padding-top:45px;padding-left:138px;font-size:12pt;line-height:24px;letter-spacing:0.022em;font-family:'Lato';color:",";opacity:0.8;@media (max-width:812px){display:none;}"],h.d),y=p.b.div.withConfig({displayName:"Filters__Label"})(["margin-right:15px;"]),x=p.b.div.withConfig({displayName:"Filters__Button"})(["cursor:pointer;margin-right:15px;margin-bottom:15px;font-weight:",";text-transform:uppercase;"],function(e){return e.selected?700:null}),w=function(e){e.queryParams,e.name;var t=e.filter,n=e.subtheme,i=e.toggleFilter,r=Array.from(g.keys()).filter(function(e){return"recently added"===e||(t=e,n.relationships[t]);var t});return c.a.createElement(b,null,c.a.createElement(y,null,"View:"),c.a.createElement(x,{onClick:function(){return i(null)},selected:!t},"All"),r.map(function(e){var n=g.get(e);return c.a.createElement(x,{key:e,onClick:function(){return i(n)},selected:t===n},e)}))},v=(p.b.div.withConfig({displayName:"Poster"})(["width:100%;height:66%;background-color:grey;margin-bottom:15px;overflow:hidden;"]),c.a.Component,n(119),n(446),p.b.div.withConfig({displayName:"Description"})(["font-family:'Tisa Pro';font-size:20px;line-height:24px;"])),C=function(e){return c.a.createElement(v,{dangerouslySetInnerHTML:{__html:e.children?e.children.replace(new RegExp("p>","g"),"span>"):null}})},_=n(234),E=n(236),k=Object(p.b)(_.a).withConfig({displayName:"ArticleCard__Container"})(["position:relative;display:flex;flex-direction:column;justify-content:center;background:linear-gradient(to bottom,"," 0%,"," 100%);color:",";padding-left:15px;padding-right:15px;z-index:1;"],h.a[0],h.a[1],h.o),N=p.b.div.withConfig({displayName:"ArticleCard__TopImage"})(["position:absolute;top:0;left:0;z-index:-1;width:100%;height:221px;background:",";filter:brightness(50%);opacity:0.53;"],function(e){return e.background?"url("+e.background+") center no-repeat":null}),j=p.b.div.withConfig({displayName:"ArticleCard__TopBlock"})(["position:relative;width:100%;height:221px;display:flex;flex-direction:row;justify-content:center;align-items:center;padding-right:15px;padding-left:15px;"]),O=p.b.div.withConfig({displayName:"ArticleCard__ArticleTitle"})(["font-family:'Tisa Pro';font-size:36px;line-height:36px;"]),F=p.b.div.withConfig({displayName:"ArticleCard__InnerContainer"})(["position:absolute;left:0;top:0;bottom:0;right:0;display:flex;flex-direction:column;"]),L=p.b.div.withConfig({displayName:"ArticleCard__Author"})(["font-family:Lato;font-size:12pt;line-height:18px;letter-spacing:0.022em;text-transform:uppercase;"]),q=p.b.div.withConfig({displayName:"ArticleCard__Ticker"})(["position:absolute;left:0;bottom:0;font-family:Lato;font-weight:600;font-size:12pt;line-height:30px;letter-spacing:0.022em;border-top-right-radius:3px;background-color:",";padding:13px;text-transform:uppercase;"],h.b),A=p.b.div.withConfig({displayName:"ArticleCard__BottomBlock"})(["flex:1;display:flex;flex-direction:column;padding:15px;"]),T=p.b.div.withConfig({displayName:"ArticleCard__Row"})(["flex:1;display:flex;flex-direction:row;align-items:flex-end;justify-content:space-between;"]),z=p.b.div.withConfig({displayName:"ArticleCard__ArrowContainer"})(["bottom:15px;right:17px;width:25px;height:20px;"]),S=function(){return c.a.createElement(z,null,c.a.createElement(E.a,{color:h.n}))},I=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.article,n=(e.i,e.style,e.onOpen),i="/articles/"+f()(t.title),r=t.relationships.field_main_image.localFile.publicURL,a=t.field_short_version?'"'+t.field_short_version.processed+'"':null,o=t.field_author&&t.field_author.processed,l=t.title.replace("--","–");return c.a.createElement(k,{background:r,title:l,type:"Article",slug:"article",changed:t.changed,onClick:function(){return n(i)}},c.a.createElement(N,{background:r}),t.field_short_version&&c.a.createElement(F,null,c.a.createElement(j,null,c.a.createElement(O,null,l),c.a.createElement(q,null,"article")),c.a.createElement(A,null,c.a.createElement(C,null,a),c.a.createElement(T,null,c.a.createElement(L,null,"by ",o),c.a.createElement(S,null)))))},t}(c.a.Component),B=Object(p.b)(_.a).withConfig({displayName:"ClipCard__Container"})(["position:relative;display:flex;flex-direction:column;justify-content:center;background:linear-gradient(to bottom,"," 0%,"," 100%);color:",";padding-left:15px;padding-right:15px;z-index:1;"],h.f[0],h.f[1],h.o),M=p.b.div.withConfig({displayName:"ClipCard__TopImage"})(["position:absolute;top:0;left:0;z-index:-1;width:100%;height:221px;background:",";"],function(e){return e.background?"url("+e.background+") center no-repeat":null}),R=p.b.div.withConfig({displayName:"ClipCard__TopBlock"})(["position:relative;width:auto;height:221px;display:flex;flex-direction:row;justify-content:center;align-items:center;padding-right:15px;padding-left:15px;"]),P=p.b.div.withConfig({displayName:"ClipCard__InnerContainer"})(["position:absolute;left:0;top:0;bottom:0;right:0;display:flex;flex-direction:column;"]),Q=(p.b.div.withConfig({displayName:"ClipCard__Author"})(["font-family:Lato;font-size:12pt;line-height:18px;letter-spacing:0.022em;text-transform:uppercase;"]),p.b.div.withConfig({displayName:"ClipCard__Ticker"})(["position:absolute;left:0;bottom:0;font-family:Lato;font-weight:600;font-size:12pt;line-height:30px;letter-spacing:0.022em;border-top-right-radius:3px;background-color:",";padding:13px;text-transform:uppercase;"],h.h)),D=p.b.div.withConfig({displayName:"ClipCard__BottomBlock"})(["flex:1;display:flex;flex-direction:column;padding:15px;"]),H=p.b.div.withConfig({displayName:"ClipCard__Row"})(["flex:1;display:flex;flex-direction:row;align-items:flex-end;justify-content:flex-end;"]),U=p.b.div.withConfig({displayName:"ClipCard__PlayButton"})(["position:relative;width:46px;height:46px;border-radius:23px;background-color:rgba(239,239,239,0.76);&::after{content:'▶';position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;font-family:Lato;font-size:14px;line-height:14px;}"]),W=p.b.div.withConfig({displayName:"ClipCard__ArrowContainer"})(["bottom:15px;right:17px;min-width:25px;height:20px;"]),G=p.b.div.withConfig({displayName:"ClipCard__TopTicker"})(["position:absolute;top:10px;right:12px;height:32px;padding-left:15px;padding-right:15px;border-radius:3px;text-transform:uppercase;font-family:Lato;font-size:12px;line-height:28px;letter-spacing:0.018em;background:radial-gradient(",",",");display:flex;flex-direction:row;justify-content:center;align-items:center;"],h.g[0],h.g[1]),J=function(){return c.a.createElement(W,null,c.a.createElement(E.a,{color:h.o}))},V=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.clip,n=void 0===t?{relationships:{}}:t,i=e.onOpen,r="/clips/"+f()(n.title),a=n.title,o=n.relationships.field_poster_image.localFile.publicURL,l=n.field_external_video_url;return l.title,l.uri,c.a.createElement(B,{onClick:function(){return i(r)}},c.a.createElement(M,{background:o}),c.a.createElement(P,null,c.a.createElement(R,null,c.a.createElement(G,null,"from episode 1"),c.a.createElement(U,null),c.a.createElement(Q,null,"film clip")),c.a.createElement(D,null,c.a.createElement(C,null,a),c.a.createElement(H,null,c.a.createElement(J,null)))))},t}(c.a.Component),Z=Object(p.b)(_.a).withConfig({displayName:"QACard__Container"})(["position:relative;display:flex;flex-direction:column;justify-content:center;background-color:",";color:",";padding-left:15px;padding-right:15px;&::before{content:'?';position:absolute;top:65px;right:38px;font-family:'Tisa Pro';font-size:400px;opacity:0.06;}"],h.m,h.c),K=p.b.div.withConfig({displayName:"QACard__Title"})(["font-family:Lato;font-size:12pt;line-height:30px;letter-spacing:0.022em;"]),X=p.b.div.withConfig({displayName:"QACard__Question"})(["font-family:'Tisa Pro';font-size:36pt;line-height:42px;"]),Y=p.b.div.withConfig({displayName:"QACard__ArrowContainer"})(["position:absolute;bottom:15px;right:17px;width:25px;height:20px;"]),$=function(){return c.a.createElement(Y,null,c.a.createElement(E.a,{color:h.n}))},ee=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.qa,t=void 0===e?{}:e,n="/qa/"+f()(t.title);return c.a.createElement(Z,{slug:"qa",changed:t.changed,type:"qa",link:n},c.a.createElement(K,null,"Q&A"),c.a.createElement(X,null,t.title),c.a.createElement($,null))},t}(c.a.Component),te=Object(p.b)(_.a).withConfig({displayName:"InterviewCard__Container"})(["position:relative;display:flex;flex-direction:column;justify-content:center;background:linear-gradient(to bottom,"," 0%,"," 100%);color:",";padding-left:15px;padding-right:15px;z-index:1;"],h.k[0],h.k[1],h.o),ne=p.b.div.withConfig({displayName:"InterviewCard__TopImage"})(["position:absolute;top:0;left:0;z-index:-1;width:100%;height:221px;background:",";"],function(e){return e.background?"url("+e.background+") center no-repeat":null}),ie=p.b.div.withConfig({displayName:"InterviewCard__TopBlock"})(["position:relative;width:auto;height:221px;display:flex;flex-direction:row;justify-content:center;align-items:center;padding-right:15px;padding-left:15px;"]),re=p.b.div.withConfig({displayName:"InterviewCard__InnerContainer"})(["position:absolute;left:0;top:0;bottom:0;right:0;display:flex;flex-direction:column;"]),ae=(p.b.div.withConfig({displayName:"InterviewCard__Author"})(["font-family:Lato;font-size:12pt;line-height:18px;letter-spacing:0.022em;text-transform:uppercase;"]),p.b.div.withConfig({displayName:"InterviewCard__Ticker"})(["position:absolute;left:0;bottom:0;font-family:Lato;font-weight:600;font-size:12pt;line-height:30px;letter-spacing:0.022em;border-top-right-radius:3px;background-color:",";padding:13px;text-transform:uppercase;"],h.l)),oe=p.b.div.withConfig({displayName:"InterviewCard__BottomBlock"})(["flex:1;display:flex;flex-direction:column;padding:15px;"]),le=p.b.div.withConfig({displayName:"InterviewCard__Bio"})(["font-family:Lato;font-size:14px;line-height:18px;"]),ce=p.b.div.withConfig({displayName:"InterviewCard__Row"})(["flex:1;display:flex;flex-direction:row;align-items:flex-end;justify-content:flex-end;"]),pe=p.b.div.withConfig({displayName:"InterviewCard__ArrowContainer"})(["bottom:15px;right:17px;min-width:25px;height:20px;"]),de=function(){return c.a.createElement(pe,null,c.a.createElement(E.a,{color:h.n}))},se=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.interview,n=void 0===t?{}:t,i=(e.i,e.relatedContent,e.onOpen),r="/interviews/"+f()(n.title),a=n.relationships.field_interviewee.localFile.publicURL,o=n.field_key_quote.processed,l=n.field_interviewee_bio?n.field_interviewee_bio.processed:null;return c.a.createElement(te,{onClick:function(){return i(r)}},c.a.createElement(ne,{background:a}),c.a.createElement(re,null,c.a.createElement(ie,null,c.a.createElement(ae,null,"interview")),c.a.createElement(oe,null,c.a.createElement(C,null,o),c.a.createElement(ce,null,c.a.createElement(le,{dangerouslySetInnerHTML:{__html:l}}),c.a.createElement(de,null)))))},t}(c.a.Component),ue=Object(p.b)(_.a).withConfig({displayName:"QuickFactCard__Container"})([""]),fe=p.b.h4.withConfig({displayName:"QuickFactCard__Title"})([""]),me=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.quickfact,n=(e.i,e.relatedContent,e.style,t.field_quickfact.processed);return c.a.createElement(ue,{type:"QuickFact",slug:"quickfact",title:t.title,changed:t.changed},c.a.createElement(fe,null,t.title),c.a.createElement(C,null,n))},t}(c.a.Component);n.d(t,"b",function(){return xe});var he=n(291),ge=(p.b.div.withConfig({displayName:"SubthemeContainer__SubthemeTitle"})(["font-weight:normal;text-rendering:optimizeLegibility;font-size:42px;font-weight:300;padding:15px;font-family:'Lato';text-align:center;color:rgba(59,59,59,0.8);margin-bottom:15px;margin-top:15px;"]),3),be=function(e){return e||[]},ye=function(e){for(var t,n,i=e.length;0!==i;)n=Math.floor(Math.random()*i),t=e[i-=1],e[i]=e[n],e[n]=t;return e},xe=function(e,t,n){n||(n=function(e){});var i=be(e.articles).filter(function(e){return!t||"recent"===t||"article"===t}).map(function(e){return c.a.createElement(I,{key:"article-"+e.title,onOpen:function(t){return n(t,e)},article:e})}),r=be(e.clips).filter(function(e){return!t||"recent"===t||"clip"===t}).map(function(e){return c.a.createElement(V,{key:"clip-"+e.title,linkable:!0,clip:e})}),a=be(e.faqs).filter(function(e){return!t||"recent"===t||"qa"===t}).map(function(e){return c.a.createElement(ee,{key:"qa-"+e.title,qa:e})}),o=be(e.interviews).filter(function(e){return!t||"recent"===t||"interview"===t}).map(function(e){return c.a.createElement(se,{key:"interview-"+e.title,onOpen:function(t){return n(t,e)},interview:e})}),l=be(e.quickfacts).filter(function(e){return!t||"recent"===t||"quickfact"===t}).map(function(e){return c.a.createElement(me,{key:"quickfact-"+e.title,quickfact:e})});return i.concat(r,a,o,l)},we=p.b.div.withConfig({displayName:"SubthemeContainer__Row"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;"]),ve=p.b.div.withConfig({displayName:"SubthemeContainer__PopupCard"})(["position:relative;width:33vw;height:33vw;min-width:300px;min-height:300px;background-color:gray;border-radius:100px;border:1px solid grey;overflow:hidden;"]),Ce=p.b.div.withConfig({displayName:"SubthemeContainer__CloseButton"})(["cursor:pointer;position:absolute;top:30px;right:30px;"]),_e=p.b.div.withConfig({displayName:"SubthemeContainer__TopImage"})(["height:50%;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),Ee=p.b.div.withConfig({displayName:"SubthemeContainer__Description"})([""]),ke=function(e){function t(t){var n;return(n=e.call(this,t)||this).getShuffle=function(e){if("undefined"!=typeof window){var t=window.localStorage.getItem("shuffle");return t?t=JSON.parse(t):(t=ye(he.range(e)),window.localStorage.setItem("shuffle",JSON.stringify(t))),t}},n.close=function(){n.setState({popup:!n.state.popup,card:null})},n.open=function(e,t){n.setState({popup:!0,card:Object.assign({},t,{link:e})})},n.updateOrder(t,null),n.state={numCards:ge,filter:null,popup:!1,card:null},n.close=n.close.bind(o()(o()(n))),n.open=n.open.bind(o()(o()(n))),n.toggleFilter=n.toggleFilter.bind(o()(o()(n))),n}r()(t,e);var n=t.prototype;return n.toggleFilter=function(e){this.state.filter===e?this.setState({filter:null}):this.setState({filter:e})},n.shouldComponentUpdate=function(e,t){return t.numCards!==this.state.numCards||t.filter!==this.state.filter||t.popup!==this.state.popup},n.componentWillUpdate=function(e,t){this.state.filter,t.filter},n.updateOrder=function(e,t){if(!e.filter){var n=xe(e.data.relationships,t).length;this.order=this.getShuffle(n)}},n.render=function(){var e,t,n,i=this.props.data,r=this.state,a=r.filter,o=r.popup,l=r.card,p=xe(i.relationships,a,this.open),u=a?p.sort(function(e,t){return t.props.changed-e.props.changed}):(e=p,t=this.order,n=new Array(e.length),t&&t.forEach(function(t,i){n[i]=e[t]}),n);u=u.filter(function(e){return!!e});var f=l&&l.title?l.title:"",m=l&&l.link?l.link:"",h=l&&l.field_short_version?l.field_short_version.processed:null,g=l&&l.relationships.field_main_image&&l.relationships.field_main_image.localFile.publicURL;return c.a.createElement(je,null,c.a.createElement(s.a,{id:"subtheme-overlay",visible:o},c.a.createElement(s.b,null,c.a.createElement(we,null,l&&c.a.createElement(ve,null,c.a.createElement(Ce,{onClick:this.close},"Close"),c.a.createElement(_e,{background:g}),c.a.createElement("h1",null,f),c.a.createElement(Ee,{dangerouslySetInnerHTML:{__html:h}}),c.a.createElement(d.a,{to:m},"Read the article"))))),c.a.createElement(w,{toggleFilter:this.toggleFilter,name:this.props.name,filter:a,subtheme:i}),c.a.createElement(Ne,null,u.map(function(e,t){return c.a.createElement("div",{key:t},e)})))},t}(c.a.Component),Ne=Object(p.b)(m.default).withConfig({displayName:"SubthemeContainer__FlipContainer"})(["display:flex;flex-direction:row;flex-wrap:wrap;overflow:auto;padding-bottom:286px;width:100vw;justify-content:center;"]),je=p.b.div.withConfig({displayName:"SubthemeContainer__Grid"})(["background:linear-gradient(to bottom,"," 0%,"," 100%);box-shadow:0px -12px 15px rgba(121,121,121,0.45);backdrop-filter:blur(5px);"],"rgba(255, 255, 255, 0.66)","rgba(245, 238, 182, 0.92)"),Oe=Object(p.b)(ke).withConfig({displayName:"SubthemeContainer"})(["background-color:#ffffff;padding:45px 30px;border-bottom:solid thin grey;margin:60px 30px;"]);t.a=Oe},230:function(e,t,n){"use strict";n(103),n(59),n(266);var i=n(17),r=n.n(i),a=n(0),o=n.n(a),l=n(223),c=null,p=function(){if("undefined"==typeof document)return 0;if(null!==c)return c;var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var i=e.offsetWidth;return n===i&&(i=t.clientWidth),document.body.removeChild(t),c=n-i};n.d(t,"a",function(){return u}),n.d(t,"b",function(){return f}),n.d(t,"c",function(){return m});var d={},s=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.onVisibleChange(this.props.visible)},n.UNSAFE_componentWillReceiveProps=function(e){e.visible!==this.props.visible&&this.onVisibleChange(e.visible)},n.onVisibleChange=function(e){var t=Object.values(d).every(function(e){return!1===e});d[this.props.id]=e,t!==Object.values(d).every(function(e){return!1===e})&&(e?(document.body.classList.add("modal-open"),document.body.style.paddingRight=p()+"px",window.dispatchEvent(new CustomEvent("modal",{detail:{open:!0,scrollBarWidth:p()}}))):(document.body.classList.remove("modal-open"),document.body.style.paddingRight="",window.dispatchEvent(new CustomEvent("modal",{detail:{open:!1,scrollBarWidth:0}}))))},n.render=function(){var e=this.props,t=e.children,n=e.style,i=e.className;return o.a.createElement("div",{className:i,style:n},t)},t}(o.a.Component),u=Object(l.b)(s).withConfig({displayName:"overlay__Overlay"})(["background-color:rgba(255,255,255,0.92);position:fixed;left:0;top:0;height:100%;width:100%;z-index:999999999999999999999999;opacity:0;display:none;overflow-y:auto;",""],function(e){return e.visible&&Object(l.a)(["opacity:1;display:inline;"])}),f=(l.b.div.withConfig({displayName:"overlay__OverlayFilter"})(["margin-bottom:30px;"]),l.b.div.withConfig({displayName:"overlay__OverlayTitle"})(["text-align:center;text-transform:uppercase;font-weight:700;letter-spacing:0.35em;border:solid 1px;display:inline-block;padding:15px 30px;margin:0 auto;margin-bottom:30px;margin-top:30px;font-family:'Lato';font-size:30px;"]),l.b.div.withConfig({displayName:"overlay__OverlayBody"})(["opacity:1;margin:0 auto;margin-top:180px;padding-bottom:60px;display:flex;justify-content:center;flex-direction:column;",""],function(e){return e.wide?Object(l.a)(["width:90%;"]):Object(l.a)(["width:66%;"])})),m=l.b.div.withConfig({displayName:"overlay__OverlayHeader"})(["position:fixed;top:30px;left:0;width:100%;padding:0 12.5%;"])},233:function(e,t,n){"use strict";n(0),n(226);var i=n(223);t.a=i.b.a.withConfig({displayName:"Link"})(["cursor:pointer;text-decoration:none !important;color:inherit;"])},234:function(e,t,n){"use strict";n(40),n(231);var i=n(290),r=n.n(i),a=n(17),o=n.n(a),l=n(0),c=n.n(l),p=n(226),d=n(223),s=n(225),u=d.b.div.withConfig({displayName:"Card__Container"})(["cursor:pointer;"]),f=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.link,n=e.children,i=r()(e,["link","children"]);return t?c.a.createElement(p.Link,Object.assign({to:t},i),n):c.a.createElement(u,i,n)},t}(c.a.Component),m=d.b.div.withConfig({displayName:"Card__CardGridItem"})(["position:relative;float:left;display:inline-block;margin:10px;color:black;"]),h=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.link,n=e.className,i=e.style,a=e.children,o=r()(e,["link","className","style","children"]);return c.a.createElement(m,Object.assign({},o,{onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover}),c.a.createElement(f,{link:t,className:n,style:i},a))},t}(c.a.Component),g=Object(d.b)(h).withConfig({displayName:"Card__StyledCard"})(["position:relative;display:block;height:","px;width:","px;background-color:",';border-radius:3px;overflow:hidden;box-shadow:0px 3px 6px rgba(0,0,0,0.16);transition:all .3s;font-family:"ff-tisa-web-pro";vertical-align:top;color:inherit;text-decoration:inherit;'],492,341,s.o);t.a=g},235:function(e,t,n){"use strict";var i=n(263),r=n(0),a=n.n(r),o=n(282),l=n.n(o),c=n(226),p=n(223),d=n(285),s=n.n(d),u=(n(231),n(227),n(17)),f=n.n(u),m=n(233),h=n(225),g=p.b.div.withConfig({displayName:"Menu__Container"})(["cursor:pointer;width:25px;height:20px;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:space-between;position:absolute;top:25px;left:25px;display:none;@media (max-width:812px){display:block;}"]),b=p.b.div.withConfig({displayName:"Menu__Line"})(["width:25px;height:2px;background-color:",";transition:all 0.3s ease-out;"],h.o),y=Object(p.b)(b).withConfig({displayName:"Menu__TopLine"})(["transform:rotate(","deg);transform-origin:center center;position:absolute;top:","%;"],function(e){return e.open?45:0},function(e){return e.open?50:0}),x=Object(p.b)(b).withConfig({displayName:"Menu__MiddleLine"})(["opacity:",";position:absolute;top:50%;"],function(e){return e.open?0:1}),w=Object(p.b)(b).withConfig({displayName:"Menu__BottomLine"})(["transform:rotate(","deg);transform-origin:center center;position:absolute;top:","%;"],function(e){return e.open?-45:0},function(e){return e.open?50:100}),v=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){var e=this.props.open;return a.a.createElement(g,this.props,a.a.createElement(y,{open:e}),a.a.createElement(x,{open:e}),a.a.createElement(w,{open:e}))},t}(a.a.Component),C=p.b.div.withConfig({displayName:"Header__Container"})(["position:fixed;top:0;left:0;right:0;z-index:10;display:flex;flex-direction:row;align-items:center;justify-content:space-around;background-color:",";height:64px;@media (min-width:1025px){justify-content:flex-end;}@media (max-width:812px){flex-direction:column;height:",";padding-top:","px;padding-bottom:","px;}transition:all 0.3s ease-out;"],Object(h.e)(.83),function(e){return e.open?"75vh":"70px"},function(e){return e.open?64:0},function(e){return e.open?120:0}),_=Object(p.b)(m.a).withConfig({displayName:"Header__Item"})(["text-aligment:center;text-decoration:none;color:",";text-transform:uppercase;font-family:Lato;font-weight:bold;font-size:10pt;line-height:30px;letter-spacing:0;margin-right:0;@media (min-width:1025px){margin-right:41px;font-size:12pt;letter-spacing:5px;}@media (max-width:812px){display:none;}"],h.o),E=Object(p.b)(_).withConfig({displayName:"Header__MobileItem"})(["display:none;@media (max-width:812px){display:block;font-size:15pt;letter-spacing:5px;}"]),k=[{name:"themes",link:"/"},{name:"articles",link:"/articles"},{name:"interviews",link:"/interviews"},{name:"q&a",link:"/qa"},{name:"clips",link:"/clips"},{name:"teaching",link:"/teaching"},{name:"about",link:"/about"}],N=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={open:!1},n}return f()(t,e),t.prototype.render=function(){var e=this,t=this.state.open;return a.a.createElement(C,{open:t},a.a.createElement(v,{open:t,onClick:function(n){return e.setState({open:!t})}}),k.map(function(e,t){var n=e.name,i=e.link;return a.a.createElement(_,{href:i,key:t},n)}),t&&k.map(function(e,t){var n=e.name,i=e.link;return a.a.createElement(E,{to:i,key:t},n)}))},t}(a.a.Component),j=(n(264),p.b.div.withConfig({displayName:"layout__Container"})(["background-color:",";margin:0 auto;"],h.c));t.a=function(e){var t=e.children,n=e.location,r=e.header,o=void 0===r||r;return a.a.createElement(c.StaticQuery,{query:"3470870683",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title},a.a.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1.0,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover"})),a.a.createElement(s.a,{kitId:"pte4pny"}),o&&a.a.createElement(N,{data:e,pathname:n.pathname}),a.a.createElement(j,null," ",t," "))},data:i})}},236:function(e,t,n){"use strict";var i=n(0),r=n.n(i);n(223),t.a=function(e){var t=e.color,n=e.style;return r.a.createElement("div",{style:n},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25.104 20.455"},r.a.createElement("path",{fill:t,d:"M20.417,11.6h-19a1.393,1.393,0,0,1-.138-2.783c.086,0,.17,0,.256,0H20.417c-.154-.163-.275-.3-.4-.432Q17.145,5.346,14.271,2.31a1.445,1.445,0,0,1-.01-1.973A1.372,1.372,0,0,1,15.677.059a1.976,1.976,0,0,1,.9.634c1.134,1.2,2.274,2.4,3.411,3.606l4.458,4.708c.077.08.157.16.231.243a1.4,1.4,0,0,1-.022,1.941q-3.122,3.3-6.251,6.6c-.682.721-1.38,1.428-2.043,2.168a1.555,1.555,0,0,1-2.088.138,1.322,1.322,0,0,1-.333-1.428,1.559,1.559,0,0,1,.32-.544q3-3.195,6.024-6.376C20.321,11.71,20.356,11.671,20.417,11.6Z",transform:"translate(0.046 0.018)"})))}},248:function(e,t,n){var i;e.exports=(i=n(254))&&i.default||i},254:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(6),o=n.n(a),l=n(43),c=n(1),p=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:n})};p.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=p},261:function(e,t){},262:function(e,t){},263:function(e){e.exports={data:{site:{siteMetadata:{title:"Race: The Power of an Illusion"}}}}},264:function(e,t,n){}}]);
//# sourceMappingURL=3-e6b2113e754b879488c4.js.map