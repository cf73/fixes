(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{213:function(e,t,i){"use strict";i.r(t),i.d(t,"query",function(){return x});var n=i(1),a=i.n(n),r=i(226),o=i(225),l=i(228),d=i.n(l),s=r.b.div.withConfig({displayName:"interviews__GreyBackground"})(["position:fixed;top:0;left:0;z-index:-999999;height:100%;width:100%;"]),c=r.b.div.withConfig({displayName:"interviews__IntroText"})(["font-weight:300;font-size:48px;line-height:1.25;z-index:99999;padding:15px 45px 60px 45px;margin-bottom:60px;font-family:'Lato';color:snow;background-color:#25292b;"]),p=r.b.div.withConfig({displayName:"interviews__InterviewCard"})(["position:relative;overflow:hidden;&:hover{}"]),m=r.b.div.withConfig({displayName:"interviews__InterviewTitle"})(["margin-bottom:11.25px;font-size:20px;font-family:'Lato';z-index:99999;line-height:1;color:inherit;font-weight:700;"]),u=r.b.div.withConfig({displayName:"interviews__InterviewExcerpt"})(["line-height:1.5;font-weight:500;opacity:0.9;font-size:14px;& > p{margin-bottom:7.5px;}"]),g=r.b.div.withConfig({displayName:"interviews__InterviewImage"})(["background-color:red;border-radius:50%;height:145px;width:145px;margin-bottom:15px;background-position:center;background-size:cover;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),w=r.b.div.withConfig({displayName:"interviews__InterviewMain"})([""]),f=r.b.div.withConfig({displayName:"interviews__AllInterviews"})(["display:flex;justify-content:space-between;flex-wrap:wrap;margin:0 45px;"]),v=(r.b.div.withConfig({displayName:"interviews__AuthorBioText"})(["width:100%;height:auto;position:absolute;bottom:0;left:0;z-index:9999999999;background-color:rgba(255,255,255,0.96);padding:30px;font-size:14px;line-height:1.5;font-weight:500;border-top:solid thin lightgrey;font-family:'Lato';"]),r.b.div.withConfig({displayName:"interviews__TopText"})(["width:100%;text-align:center;padding:36px 45px;top:0;background-color:#25292b;color:white;"])),h=function(e){var t=e.data;return a.a.createElement(o.a,{style:{flexGrow:0,flexShrink:1,marginBottom:60,flexBasis:"calc(25% - 30px)",textDecoration:"none",color:"inherit"},to:"/interviews/"+d()(t.title)},a.a.createElement(p,null,a.a.createElement(g,{background:t.relationships.field_interviewee&&t.relationships.field_interviewee.localFile.publicURL}),a.a.createElement(w,null,a.a.createElement(m,null,a.a.createElement("div",{style:{fontSize:14,fontWeight:600,letterSpacing:"0.04em",marginBottom:7.5}},"Interview with"),t.field_interviewee_name.processed),a.a.createElement(u,{dangerouslySetInnerHTML:{__html:t.field_interview_summary&&t.field_interview_summary.processed}}),a.a.createElement(o.a,{style:{fontFamily:"Lato",textDecoration:"none",color:"#5599B4",fontSize:13,letterSpacing:"0.04em",fontWeight:700},to:"/interviews/"+d()(t.title)},"Read interview"))))};t.default=function(e){var t=e.data;return a.a.createElement("div",null,a.a.createElement(v,null,a.a.createElement("h4",{style:{marginBottom:0,display:"inline-block",verticalAlign:"middle"}},"interviews")),a.a.createElement(c,{dangerouslySetInnerHTML:{__html:t.taxonomyTermInterviewsPage.description&&t.taxonomyTermInterviewsPage.description.processed}}),a.a.createElement("div",{className:"interviews"},a.a.createElement(s,null),a.a.createElement(f,null,t.allNodeInterview.edges.map(function(e,t){return a.a.createElement(h,{data:e.node})}))))};var x="3859980723"},225:function(e,t,i){"use strict";var n=i(1),a=i.n(n),r=i(0),o=i.n(r),l=i(224),d=i.n(l);i.d(t,"a",function(){return d.a}),i.d(t,"b",function(){return l.push}),i(227),a.a.createContext({}),o.a.object,o.a.string.isRequired,o.a.func,o.a.func},227:function(e,t,i){var n;e.exports=(n=i(229))&&n.default||n},229:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),r=i(0),o=i.n(r),l=i(42),d=i(3),s=function(e){var t=e.location,i=d.a.getResourcesForPathname(t.pathname);return a.a.createElement(l.a,{location:t,pageResources:i})};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-interviews-js-c46fb964fd597d58d926.js.map