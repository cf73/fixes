(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{101:function(e,t,n){"use strict";const r=n(102),a=n(103);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function l(e,t){return t.decode?a(e):e}function c(e){const t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function i(e,t){const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const a of e.split("&")){let[e,o]=a.replace(/\+/g," ").split("=");o=void 0===o?null:l(o,t),n(l(e,t),o,r)}return Object.keys(r).sort().reduce((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=c,t.parse=i,t.stringify=((e,t)=>{!1===(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=(()=>{}));const n=function(e){switch(e.arrayFormat){case"index":return(t,n,r)=>null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("");case"bracket":return(t,n)=>null===n?[o(t,e),"[]"].join(""):[o(t,e),"[]=",o(n,e)].join("");default:return(t,n)=>null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}(t);return e?Object.keys(e).sort(t.sort).map(r=>{const a=e[r];if(void 0===a)return"";if(null===a)return o(r,t);if(Array.isArray(a)){const e=[];for(const t of a.slice())void 0!==t&&e.push(n(r,t,e.length));return e.join("&")}return o(r,t)+"="+o(a,t)}).filter(e=>e.length>0).join("&"):""}),t.parseUrl=((e,t)=>({url:e.split("?")[0]||"",query:i(c(e),t)}))},102:function(e,t,n){"use strict";e.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},103:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],o(n),o(r))}function l(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=l(n[0]);r!==n[0]&&(t[n[0]]=r)}n=a.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),c=0;c<o.length;c++){var i=o[c];e=e.replace(new RegExp(i,"g"),t[i])}return e}(e)}}},283:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return y}),n(57),n(72);var r=n(1),a=n.n(r),o=n(87),l=n(88),c=(n(89),n(93)),i=n(104),s=n(96),d=n(101),u=o.b.div.withConfig({displayName:"teaching__Wrapper"})(["max-width:100%;background-color:gray;"]),p=o.b.div.withConfig({displayName:"teaching__IntroText"})(["font-weight:300;font-size:48px;line-height:1.25;z-index:99999;padding-top:60px;margin:0 45px;font-family:'Lato';"]),f=o.b.h4.withConfig({displayName:"teaching__SubTitle"})(["margin-bottom:15px;"]),m=function(){return Object(l.c)("?")},g=o.b.div.withConfig({displayName:"teaching__CloseButton"})(["float:right;color:red;cursor:pointer;font-weight:bold;"]);t.default=function(e){var t=e.data,n=e.location,r=d.parse(n.search),o=r.lesson,y=o?t.allNodeLessonPlan.edges.filter(function(e){return e.node.id===o})[0].node:null;return a.a.createElement(s.a,{location:n},a.a.createElement(u,null,a.a.createElement(c.a,{id:"film-overlay",visible:!!o},y&&a.a.createElement(c.b,null,a.a.createElement(c.c,null,a.a.createElement(g,{onClick:m},"Close"),a.a.createElement("div",null,y.title)),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:y.field_lesson_plan.processed}}))),a.a.createElement(p,null,"Teach topics from the film with specially curated lesson plans, handouts, articles, and interviews."),a.a.createElement("h2",null,"Lesson Plans"),a.a.createElement("div",{className:"row",style:{padding:"0 30px"}},t.allNodeLessonPlan.edges.map(function(e,t){return a.a.createElement("div",{className:"articleCard",style:{padding:30},key:"teaching-"+t},a.a.createElement("h2",null,e.node.title),a.a.createElement("div",null,a.a.createElement(f,null,"Subjects:"),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.node.field_subjects&&e.node.field_subjects.processed}})),a.a.createElement("div",null,a.a.createElement(f,null,"Grade Levels:"),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.node.field_grade_levels&&e.node.field_grade_levels.processed}})),a.a.createElement("div",null,a.a.createElement(f,null,"Overview:"),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.node.field_lesson_summary&&e.node.field_lesson_summary.processed}})),a.a.createElement("div",null,a.a.createElement(f,null,"Objectives:"),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.node.field_objectives&&e.node.field_objectives.processed}})),a.a.createElement(l.a,{to:"?"+d.stringify(Object.assign({},r,{lesson:e.node.id}))},a.a.createElement("button",null,"View lesson plan")))})),a.a.createElement("h2",null,"Articles"),Object(i.b)({articles:t.allNodeArticle.edges.map(function(e){return e.node})}),a.a.createElement("h2",null,"Interviews"),Object(i.b)({interviews:t.allNodeInterview.edges.map(function(e){return e.node})})))};var y="2302781942"}}]);
//# sourceMappingURL=component---src-pages-teaching-js-8daa00d41aa052337278.js.map