(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return h});var n=a(1),i=a.n(n),o=a(225),c=(a(358),a(227)),l=a(228),r=a.n(l),s=a(233),d=o.b.div.withConfig({displayName:"articles__GreyBackground"})(["background-color:rgba(103,165,195,0.14901960784313725);position:fixed;top:0;left:0;z-index:-999999;height:100%;width:100%;"]),u=o.b.div.withConfig({displayName:"articles__IntroText"})(["font-weight:300;font-size:48px;line-height:1.25;z-index:99999;padding:60px 30px;margin-bottom:60px;font-family:'Lato';color:snow;background-color:#323232;background-color:#25292b;"]),m=o.b.div.withConfig({displayName:"articles__ArticleTitle"})(["font-family:'Lato';font-size:20px;font-weight:400;color:#2b2b2b;letter-spacing:0.03em;padding:0px 30px 0 30px;line-height:1.25;margin-bottom:7.5px;"]),f=o.b.div.withConfig({displayName:"articles__ArticleImage"})(["margin-bottom:30px;position:absolute;top:0;bottom:0;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),p=o.b.div.withConfig({displayName:"articles__TopText"})(["width:100%;text-align:center;padding:36px 45px;top:0;background-color:#25292b;color:white;"]),g=function(e){var t,a=e.data;return i.a.createElement(c.a,{style:{flexGrow:0,flexShrink:1,marginBottom:30,flexBasis:"33%",textDecoration:"none",color:"inherit"},to:"/articles/"+r()(a.title)},i.a.createElement("div",{className:"articleCard"},i.a.createElement("div",{style:{flex:"1 1 auto",position:"relative",marginBottom:15}},i.a.createElement(f,{background:a.relationships.field_main_image&&a.relationships.field_main_image.localFile.publicURL,className:"articleCardImage"},a.relationships.field_theme_image&&a.relationships.field_theme_image.localFile.publicURL)),i.a.createElement("div",{style:{paddingBottom:30}},i.a.createElement(m,null,a.title),i.a.createElement("p",{style:(t={marginBottom:7.5,color:"#2b2b2b",fontFamily:"Lato",fontSize:14,letterSpacing:"0.04em",lineHeight:1.25,marginLeft:30},t.marginBottom=22.5,t)},"Article by ",a.field_author&&a.field_author.processed),i.a.createElement("div",{className:"articleExcerpt"},a.field_article_summary&&i.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.field_article_summary.processed}})))))};t.default=function(e){var t=e.data,a=e.location;return i.a.createElement(s.a,{location:a},i.a.createElement(p,null,i.a.createElement("h4",{style:{marginBottom:0,display:"inline-block",verticalAlign:"middle"}},"articles")),i.a.createElement(u,{dangerouslySetInnerHTML:{__html:t.taxonomyTermArticlesPage.description&&t.taxonomyTermArticlesPage.description.processed}}),i.a.createElement("div",{className:"articles"},i.a.createElement(d,null),t.allNodeArticle.edges.map(function(e,t){return i.a.createElement(g,{key:t,data:e.node})})))};var h="670148157"},227:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(1),i=a.n(n),o=a(0),c=a.n(o),l=a(226),r=a.n(l);a.d(t,"a",function(){return r.a}),a.d(t,"c",function(){return l.push}),a(229);var s=i.a.createContext({}),d=function(e){return i.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},229:function(e,t,a){var n;e.exports=(n=a(231))&&n.default||n},231:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(0),c=a.n(o),l=a(42),r=a(3),s=function(e){var t=e.location,a=r.a.getResourcesForPathname(t.pathname);return i.a.createElement(l.a,{location:t,pageResources:a})};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},232:function(e,t,a){"use strict";var n=null;t.a=function(){if("undefined"==typeof document)return 0;if(null!==n)return n;var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var a=e.offsetWidth;t.style.overflow="scroll";var i=e.offsetWidth;return a===i&&(i=t.clientWidth),document.body.removeChild(t),n=a-i}},233:function(e,t,a){"use strict";var n=a(239),i=a(1),o=a.n(i),c=a(251),l=a.n(c),r=a(227),s=a(225),d=a(32),u=a.n(d),m=a(63),f=a.n(m),p=(a(230),a(62),a(232),a(240),a(252)),g=(a(228),s.b.div.withConfig({displayName:"Header__TopBar"})([""])),h=s.b.div.withConfig({displayName:"Header__NavMenu"})(["width:200px;padding:30px;"]),y={textDecoration:"none"},b=Object.assign({},y),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).closeMenu=a.closeMenu.bind(f()(f()(a))),a.state={modalOpen:!1,menuOpen:!1},a}u()(t,e);var n=t.prototype;return n.handleStateChange=function(e){this.setState({menuOpen:e.isOpen})},n.closeMenu=function(){this.setState({menuOpen:!1})},n.toggleMenu=function(){this.setState({menuOpen:!this.state.menuOpen})},n.componentDidMount=function(){var e=this;window.addEventListener("modal",function(t){var a=t.detail.open;e.setState({modalOpen:a})})},n.showSettings=function(e){e.preventDefault()},n.render=function(){var e=this,t=(this.state.modalOpen,this.props.pathname),n=function(e){return-1!==t.indexOf(e)?b:y},i=a(242),c=a(234);return o.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"100vh",position:"fixed",top:0,zIndex:99999,flexDirection:"column",backgroundColor:"#adc6d2"}},o.a.createElement(p.scaleDown,{customBurgerIcon:o.a.createElement("img",{src:i}),customCrossIcon:o.a.createElement("img",{src:c}),isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)},strokeWidth:10,borderRadius:12},o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:n("/the-film"),to:"/the-film",exact:!0},"About the film"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:n("/themes"),to:"/themes/",exact:!0},"Themes"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:n("/articles"),to:"/articles/",exact:!0},"Articles"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:n("/interviews"),to:"/interviews/",exact:!0},"Interviews"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:y,to:"/qa/",exact:!0},"Q&A"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:n("/clips"),to:"/clips/",exact:!0},"Clips"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:n("/teaching"),to:"/teaching/",exact:!0},"Teaching")),o.a.createElement(h,{style:{display:"none"}},o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:n("/the-film"),to:"/the-film",exact:!0},"About the film"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:n("/themes"),to:"/themes/",exact:!0},"Themes"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:n("/articles"),to:"/articles/",exact:!0},"Articles"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:n("/interviews"),to:"/interviews/",exact:!0},"Interviews"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:n("/qa"),to:"/qa/",exact:!0},"Q&A"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:n("/clips"),to:"/clips/",exact:!0},"Clips"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:n("/teaching"),to:"/teaching/",exact:!0},"Teaching")),o.a.createElement(g,null,o.a.createElement("div",{className:"logo"},o.a.createElement(r.a,{to:"/",style:{textDecoration:"none"}},"RACE",o.a.createElement("span",{className:"filmSubtitle"},"the power of an illusion")))))},t}(o.a.Component),I=a(236),x=(a(243),a(245),s.b.div.withConfig({displayName:"layout__Container"})(["background-color:",";margin:0 auto;"],I.a));t.a=function(e){var t=e.children,a=e.location;return o.a.createElement(r.b,{query:"1013274482",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title}),o.a.createElement(v,{data:e,pathname:a.pathname}),o.a.createElement(x,null," ",t," "))},data:n})}},234:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTYuMTcgNjE2LjE4Ij48dGl0bGU+Y2xvc2U8L3RpdGxlPjxyZWN0IHg9IjI3MC43MiIgeT0iLTEwMi44NyIgd2lkdGg9Ijc0LjczIiBoZWlnaHQ9IjgyMS45MyIgcng9IjIxLjU3IiByeT0iMjEuNTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuNjIgMzA4LjA5KSByb3RhdGUoLTQ1KSIvPjxyZWN0IHg9Ii0xMDIuODgiIHk9IjI3MC43MiIgd2lkdGg9IjgyMS45MyIgaGVpZ2h0PSI3NC43MyIgcng9IjIxLjU3IiByeT0iMjEuNTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuNjEgMzA4LjA4KSByb3RhdGUoLTQ1KSIvPjwvc3ZnPg=="},236:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"d",function(){return i}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return c});var n="#222222",i="#E3A44D",o="#6A6588",c="#E3A44D"},239:function(e){e.exports={data:{site:{siteMetadata:{title:"Race: The Power of an Illusion"}},allTaxonomyTermThemes:{edges:[{node:{id:"db1af52f-dd0f-4bb0-a7ea-46c6817923f3",name:"Structured Advantage and Disadvantage"}},{node:{id:"e641aeb5-a5a3-442d-83f0-5df5bf02c5a4",name:"Making Whiteness"}},{node:{id:"8661596c-176b-4527-97c4-af0e614da9d8",name:"Science and Pseudoscience"}},{node:{id:"4433de45-87b1-4a89-8fd4-378fb8776c55",name:"Racial Classification: Who Decides?"}},{node:{id:"72d34ba2-6377-4c6f-aacd-7cee0dc2e704",name:"The Racial Wealth Gap"}},{node:{id:"4f251c2c-b851-45bf-ba32-ddb563cca5ae",name:"Who Gets to Be American?"}},{node:{id:"d52b46a5-a433-43eb-971b-c13d54da18e4",name:"Founding the Nation and Race"}}]}}}},240:function(e,t,a){},242:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NTA0NTIzQjUtRDYyQS00OENFLTlFNTYtRjBBRDkwQUI5RDRFPC90aXRsZT48cGF0aCBkPSJNMCAwaDIwdjJIMFYwem0wIDZoMjB2MkgwVjZ6bTAgNmgyMHYySDB2LTJ6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="},243:function(e,t,a){},245:function(e,t,a){},358:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-articles-js-76fb79d951d9b0ac1fca.js.map