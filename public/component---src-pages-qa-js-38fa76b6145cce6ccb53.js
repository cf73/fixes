(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{219:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return w}),a(62),a(112);var n=a(32),i=a.n(n),o=a(1),s=a.n(o),r=a(225),l=a(227),c=(a(228),a(280)),d=a(233),u=a(235),m=r.b.div.withConfig({displayName:"qa__Title"})([""]),p=r.b.div.withConfig({displayName:"qa__IntroText"})(["font-weight:300;font-size:48px;line-height:1.25;z-index:99999;margin:60px 45px;font-family:'Lato';"]),f=function(e){var t=e.data;return s.a.createElement("div",{className:"articleCard"},s.a.createElement("div",{className:"articleExcerpt"},s.a.createElement(m,null,s.a.createElement(l.a,{to:"/qa/"+t.fields.slug},t.field_question_summary?t.field_question_summary.processed:t.field_title.processed))))},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onSelected=function(e){var t=u.parse(window.location.search);t.episode=e;var n="?"+u.stringify(Object.assign({},t));window.history.pushState({},window.document.title,n),a.setState({selected:e})},a.state={selected:"all"},a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=u.parse(window.location.search).episode||"all";this.setState({selected:e})},a.render=function(){var e=this.state.selected,t=this.props,a=t.data,n=t.location;return s.a.createElement(d.a,{location:n},s.a.createElement("div",{style:{backgroundColor:"gray"}},s.a.createElement(c.a,{color:"black",selected:e,onSelected:this.onSelected}),s.a.createElement(p,null,"The experts answer your questions about issues from the film. Does race have a biological basis? Has the idea of race always been with us? Why does race still matter?"),a.allNodeFaq.edges.map(function(e,t){return s.a.createElement(f,{key:"QA-"+t,data:e.node})})))},t}(o.Component);t.default=h;var w="909370047"}}]);
//# sourceMappingURL=component---src-pages-qa-js-38fa76b6145cce6ccb53.js.map