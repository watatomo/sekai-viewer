(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[16],{6036:function(e,t,a){"use strict";var n=a(1),c=a(2),r=a(0),i=(a(4),a(3)),o=a(5),s=r.forwardRef((function(e,t){var a=e.classes,o=e.className,s=e.component,l=void 0===s?"div":s,m=Object(c.a)(e,["classes","className","component"]);return r.createElement(l,Object(n.a)({className:Object(i.a)(a.root,o),ref:t},m))}));t.a=Object(o.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},6169:function(e,t,a){"use strict";a.r(t);var n=a(39),c=a(12),r=a(29),i=a(172),o=a(5990),s=a(6036),l=a(40),m=a(5993),d=a(5994),u=a(90),b=a(5991),v=a(0),j=a.n(v),O=a(13),f=a(60),p=a(36),g=a(94),h=a(5989),E=a(41),w=Object(i.a)((function(e){var t;return{media:{paddingTop:"56.25%",backgroundSize:"contain"},card:{cursor:"pointer"},header:(t={"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},Object(r.a)(t,e.breakpoints.down("md"),{"max-width":"200px"}),Object(r.a)(t,"max-width","250px"),t),"grid-out":{padding:e.spacing("1%","2%")}}}));t.default=function(e){var t=e.contentTransMode,a=w(),r=Object(u.a)(),i=Object(O.h)().path,x=Object(h.a)().t,N=Object(E.b)().assetT,k=Object(v.useState)([]),y=Object(c.a)(k,2),S=y[0],T=y[1],B=Object(p.c)("events"),C=Object(c.a)(B,2),_=C[0],z=C[1],I=Object(v.useState)(localStorage.getItem("event-list-grid-view-type")||"grid"),J=Object(c.a)(I,1)[0],M=Object(p.f)(1),D=Object(c.a)(M,3),F=D[0],L=D[1],R=D[2],V=Object(p.f)(12),W=Object(c.a)(V,2),q=W[0],A=W[1],G=Object(p.f)(!0),H=Object(c.a)(G,3),K=H[1],P=H[2],Q=Object(p.f)(!1),U=Object(c.a)(Q,3),X=U[1],Y=U[2];Object(v.useEffect)((function(){document.title="Event List | Sekai Viewer"}),[]),Object(v.useEffect)((function(){T((function(e){return[].concat(Object(n.a)(e),Object(n.a)(function(e,t,a){return e.slice(a*(t-1),a*t)}(_,F,q)))})),P(!0)}),[F,q,P,_]),Object(v.useEffect)((function(){Y(Boolean(_.length))}),[Y,_]);var Z={grid:function(e){var n=e.data;return n?j.a.createElement(f.b,{to:i+"/"+n.id,style:{textDecoration:"none"}},j.a.createElement(o.a,{className:a.card},j.a.createElement(m.a,{className:a.media,image:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/event/").concat(n.assetbundleName,"/logo_rip/logo.webp"),title:"original"===t?n.name:"translated"===t?N("event_name:".concat(n.id),n.name):n.name}),j.a.createElement(s.a,{style:{paddingBottom:"16px"}},j.a.createElement(l.a,{variant:"subtitle1",className:a.header},"original"===t?n.name:"translated"===t?N("event_name:".concat(n.id),n.name):n.name),j.a.createElement(l.a,{variant:"body2",color:"textSecondary"},x("event:type.".concat(n.eventType)))))):j.a.createElement(o.a,{className:a.card},j.a.createElement(b.a,{variant:"rect",className:a.media}),j.a.createElement(s.a,null,j.a.createElement(l.a,{variant:"subtitle1",className:a.header},j.a.createElement(b.a,{variant:"text",width:"90%"})),j.a.createElement(l.a,{variant:"body2"},j.a.createElement(b.a,{variant:"text",width:"40%"}))))}};return j.a.createElement(v.Fragment,null,j.a.createElement(l.a,{variant:"h6",className:r.header},x("common:event")),j.a.createElement(d.a,{className:r.content,maxWidth:"md"},Object(g.a)({viewComponent:Z[J],callback:function(e,t){X.current&&(e[0].isIntersecting&&K.current&&(!z.current.length||z.current.length>L.current*A.current)?(R((function(e){return e+1})),P(!1)):z.current.length&&z.current.length<=L.current*A.current&&t(!1))},data:S,gridSize:{xs:12,md:"grid"===J?4:12,sm:6}})))}}}]);
//# sourceMappingURL=16.53fe1301.chunk.js.map