(this.webpackJsonpcountry_accordion=this.webpackJsonpcountry_accordion||[]).push([[0],{80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),s=n.n(r),i=n(24),o=n.n(i),l=n(32),u=n(20),j=n(33),d=n.n(j),p=n(105),h=n(110),b=n(112),O=n(108),f=n(107),x=n(109),m=n(4),v=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},accordion:{width:"50%"}}})),g=function(e){var t=e.datas,n=Object(a.useState)(1),c=Object(u.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)([]),o=Object(u.a)(i,2),l=(o[0],o[1],t.filter((function(e,t){return t<25*r&&t>=25*(r-1)}))),j=v();return Object(m.jsxs)("div",{className:j.root,children:[l.map((function(e,t){return Object(m.jsxs)(h.a,{className:j.accordion,children:[Object(m.jsxs)(b.a,{"aria-controls":"panel1a-content",id:"panel1a-header",children:[Object(m.jsx)("img",{src:e.flag,style:{width:"20px",margin:"5px"}}),Object(m.jsx)(f.a,{className:j.heading,children:e.name})]}),Object(m.jsx)(O.a,{children:Object(m.jsxs)(f.a,{children:[Object(m.jsxs)("p",{children:["Alpha2Code:",e.alpha2Code]}),Object(m.jsxs)("p",{children:["Alpha3Code:",e.alpha3Code]}),Object(m.jsxs)("p",{children:["NativeName:",e.nativeName]}),Object(m.jsxs)("p",{children:["NativeName:",e.nativeName]}),e.altSpellings.map((function(e){return Object(m.jsxs)("p",{children:["AltSpellings:",e]})})),Object(m.jsxs)("p",{children:["NativeName:",e.nativeName]}),e.callingCodes.map((function(e){return Object(m.jsxs)("p",{children:["CallingCodes:",e]})}))]})})]},e.name)})),Object(m.jsx)(x.a,{count:Math.ceil(t.length/25),page:r,onChange:function(e,t){s(t)}})]})};n(80);var N=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(u.a)(r,2),i=s[0],j=s[1],p=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===i){e.next=5;break}return e.next=3,d.a.get("https://restcountries.eu/rest/v2/name/".concat(i));case 3:n=e.sent,c(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://restcountries.eu/rest/v2/all");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"Navbar",children:Object(m.jsxs)("div",{className:"search",children:[Object(m.jsx)("input",{placeholder:"input country name to filter",onChange:function(e){j(e.target.value)}}),Object(m.jsx)("button",{onClick:p,children:"Search"})]})}),Object(m.jsx)(g,{datas:n})]})};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.b68e9a2d.chunk.js.map