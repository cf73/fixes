(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return h}),n(230);var a=n(1),i=n.n(a),o=n(227),c=n(228),l=n.n(c),r=n(225),s=n(233),d=r.b.div.withConfig({displayName:"themes__ThemesBackground"})(["position:fixed;top:0;left:0;z-index:-999999;height:100%;width:100%;"]),u=r.b.div.withConfig({displayName:"themes__ThemeImage"})(["height:100%;color:white;background-position:center center;background-size:100%;transition:all .5s;&:hover{background-size:125%;transition:all .5s;}background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),m=r.b.div.withConfig({displayName:"themes__ThemeOverview"})(["position:absolute;right:0;top:0;bottom:0;width:40%;color:white;font-size:16px;font-weight:normal;font-family:'Lato';padding:60px;line-height:1.5;letter-spacing:0.011em;display:flex;justify-content:center;flex-direction:column;background-color:rgba(37,41,43,0.78);transition:all .3s;&:hover{transition:all .3s;}& > p{margin-bottom:0;}"]),f=function(e){var t=e.data;return i.a.createElement("div",{style:{borderRadius:45,width:"90%",marginLeft:"5%",height:"60vh",marginBottom:60,marginRight:0,display:"inline-block",verticalAlign:"top",position:"relative",overflow:"hidden",boxShadow:"rgba(39, 39, 39, 0.58) 0px 3px 57px 0px"}},i.a.createElement(o.a,{style:{textDecoration:"none"},to:"/themes/"+l()(t.name)},i.a.createElement(u,{background:t.relationships.field_theme_image&&t.relationships.field_theme_image.localFile.publicURL},i.a.createElement("div",{className:"totalDimmer"},i.a.createElement(m,{dangerouslySetInnerHTML:{__html:t.description&&t.description.processed}}),i.a.createElement("h4",{style:{marginBottom:7.5,letterSpacing:"0.2em",fontSize:18}},"Look closer:"),i.a.createElement("span",{style:{fontFamily:"Lato",fontSize:48,lineHeight:1,textAlign:"left",letterSpacing:"0.011em"}},t.name)))))};t.default=function(e){var t=e.data,n=e.location;return i.a.createElement(s.a,{location:n},i.a.createElement("div",{className:"wrapper"},i.a.createElement(d,null),i.a.createElement("div",{style:{color:"white",textAlign:"center",fontFamily:"Lato",fontSize:36,fontWeight:300,letterSpacing:"0.04em",paddingTop:120,marginBottom:75}},"Explore themes from the film:"),t.allTaxonomyTermThemes.edges.map(function(e){var t=e.node;return i.a.createElement(f,{data:t})})))};var h="2442391414"},227:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(1),i=n.n(a),o=n(0),c=n.n(o),l=n(226),r=n.n(l);n.d(t,"a",function(){return r.a}),n.d(t,"c",function(){return l.push}),n(229);var s=i.a.createContext({}),d=function(e){return i.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},229:function(e,t,n){var a;e.exports=(a=n(231))&&a.default||a},231:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(0),c=n.n(o),l=n(42),r=n(3),s=function(e){var t=e.location,n=r.a.getResourcesForPathname(t.pathname);return i.a.createElement(l.a,{location:t,pageResources:n})};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},232:function(e,t,n){"use strict";var a=null;t.a=function(){if("undefined"==typeof document)return 0;if(null!==a)return a;var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var i=e.offsetWidth;return n===i&&(i=t.clientWidth),document.body.removeChild(t),a=n-i}},233:function(e,t,n){"use strict";var a=n(239),i=n(1),o=n.n(i),c=n(251),l=n.n(c),r=n(227),s=n(225),d=n(32),u=n.n(d),m=n(63),f=n.n(m),h=(n(230),n(62),n(232),n(240),n(252)),p=(n(228),s.b.div.withConfig({displayName:"Header__TopBar"})([""])),g=s.b.div.withConfig({displayName:"Header__NavMenu"})(["width:200px;padding:30px;"]),y={textDecoration:"none"},v=Object.assign({},y),b=function(e){function t(t){var n;return(n=e.call(this,t)||this).closeMenu=n.closeMenu.bind(f()(f()(n))),n.state={modalOpen:!1,menuOpen:!1},n}u()(t,e);var a=t.prototype;return a.handleStateChange=function(e){this.setState({menuOpen:e.isOpen})},a.closeMenu=function(){this.setState({menuOpen:!1})},a.toggleMenu=function(){this.setState({menuOpen:!this.state.menuOpen})},a.componentDidMount=function(){var e=this;window.addEventListener("modal",function(t){var n=t.detail.open;e.setState({modalOpen:n})})},a.showSettings=function(e){e.preventDefault()},a.render=function(){var e=this,t=(this.state.modalOpen,this.props.pathname),a=function(e){return-1!==t.indexOf(e)?v:y},i=n(242),c=n(234);return o.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"100vh",position:"fixed",top:0,zIndex:99999,flexDirection:"column",backgroundColor:"#adc6d2"}},o.a.createElement(h.scaleDown,{customBurgerIcon:o.a.createElement("img",{src:i}),customCrossIcon:o.a.createElement("img",{src:c}),isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)},strokeWidth:10,borderRadius:12},o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/the-film"),to:"/the-film",exact:!0},"About the film"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/themes"),to:"/themes/",exact:!0},"Themes"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/articles"),to:"/articles/",exact:!0},"Articles"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/interviews"),to:"/interviews/",exact:!0},"Interviews"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:y,to:"/qa/",exact:!0},"Q&A"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/clips"),to:"/clips/",exact:!0},"Clips"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/teaching"),to:"/teaching/",exact:!0},"Teaching")),o.a.createElement(g,{style:{display:"none"}},o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/the-film"),to:"/the-film",exact:!0},"About the film"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/themes"),to:"/themes/",exact:!0},"Themes"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/articles"),to:"/articles/",exact:!0},"Articles"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/interviews"),to:"/interviews/",exact:!0},"Interviews"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/qa"),to:"/qa/",exact:!0},"Q&A"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/clips"),to:"/clips/",exact:!0},"Clips"),o.a.createElement(r.a,{className:"navItem",onClick:function(){return e.closeMenu()},style:a("/teaching"),to:"/teaching/",exact:!0},"Teaching")),o.a.createElement(p,null,o.a.createElement("div",{className:"logo"},o.a.createElement(r.a,{to:"/",style:{textDecoration:"none"}},"RACE",o.a.createElement("span",{className:"filmSubtitle"},"the power of an illusion")))))},t}(o.a.Component),I=n(236),x=(n(243),n(245),s.b.div.withConfig({displayName:"layout__Container"})(["background-color:",";margin:0 auto;"],I.a));t.a=function(e){var t=e.children,n=e.location;return o.a.createElement(r.b,{query:"1013274482",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title}),o.a.createElement(b,{data:e,pathname:n.pathname}),o.a.createElement(x,null," ",t," "))},data:a})}},234:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTYuMTcgNjE2LjE4Ij48dGl0bGU+Y2xvc2U8L3RpdGxlPjxyZWN0IHg9IjI3MC43MiIgeT0iLTEwMi44NyIgd2lkdGg9Ijc0LjczIiBoZWlnaHQ9IjgyMS45MyIgcng9IjIxLjU3IiByeT0iMjEuNTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuNjIgMzA4LjA5KSByb3RhdGUoLTQ1KSIvPjxyZWN0IHg9Ii0xMDIuODgiIHk9IjI3MC43MiIgd2lkdGg9IjgyMS45MyIgaGVpZ2h0PSI3NC43MyIgcng9IjIxLjU3IiByeT0iMjEuNTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuNjEgMzA4LjA4KSByb3RhdGUoLTQ1KSIvPjwvc3ZnPg=="},236:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return c});var a="#222222",i="#E3A44D",o="#6A6588",c="#E3A44D"},239:function(e){e.exports={data:{site:{siteMetadata:{title:"Race: The Power of an Illusion"}},allTaxonomyTermThemes:{edges:[{node:{id:"db1af52f-dd0f-4bb0-a7ea-46c6817923f3",name:"Structured Advantage and Disadvantage"}},{node:{id:"e641aeb5-a5a3-442d-83f0-5df5bf02c5a4",name:"Making Whiteness"}},{node:{id:"8661596c-176b-4527-97c4-af0e614da9d8",name:"Science and Pseudoscience"}},{node:{id:"4433de45-87b1-4a89-8fd4-378fb8776c55",name:"Racial Classification: Who Decides?"}},{node:{id:"72d34ba2-6377-4c6f-aacd-7cee0dc2e704",name:"The Racial Wealth Gap"}},{node:{id:"4f251c2c-b851-45bf-ba32-ddb563cca5ae",name:"Who Gets to Be American?"}},{node:{id:"d52b46a5-a433-43eb-971b-c13d54da18e4",name:"Founding the Nation and Race"}}]}}}},240:function(e,t,n){},242:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NTA0NTIzQjUtRDYyQS00OENFLTlFNTYtRjBBRDkwQUI5RDRFPC90aXRsZT48cGF0aCBkPSJNMCAwaDIwdjJIMFYwem0wIDZoMjB2MkgwVjZ6bTAgNmgyMHYySDB2LTJ6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="},243:function(e,t,n){},245:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-themes-js-e721e8180c3e2e9009f5.js.map