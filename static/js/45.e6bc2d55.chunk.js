"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[45],{3325:function(n,e,t){t.d(e,{OL:function(){return m},UI:function(){return h},VV:function(){return l},rl:function(){return f},yt:function(){return d}});var r,i,a,c,u,o=t(168),s=t(6444),p=t(1087),l=(0,s.ZP)(p.rU)(r||(r=(0,o.Z)(["\nline-height: 1.7;\ndisplay: flex;\ngap: 5px;\nalign-items: center;\n"]))),f=s.ZP.ul(i||(i=(0,o.Z)(["\nmargin-top: 15px;\n"]))),h=s.ZP.form(a||(a=(0,o.Z)(["\n  padding: 10px 0;\n  display: flex;\n"]))),d=s.ZP.input(c||(c=(0,o.Z)(["\n  padding: 3px;\n  font-size: 18px;\n  outline: none;\n"]))),m=s.ZP.button(u||(u=(0,o.Z)(["\n  font-size: 16px;\n  outline: none;\n  opacity: 0.8;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    cursor: pointer;\n    background-color: lightgray;\n    opacity: 1;\n  }\n"])))},5045:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(5861),i=t(9439),a=t(7757),c=t.n(a),u=t(2791),o=t(7689),s=t(1087),p=t(7596),l="8565520cd492abb719a0c7276e0ff11e",f="https://api.themoviedb.org/3/search/movie";function h(){return(h=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(f,"?api_key=").concat(l,"&query=").concat(e,"&page=1"));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("Sorry. Try again later :(");case 6:return n.next=8,t.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),p.Am.error(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}var d=function(n){return h.apply(this,arguments)},m=t(7692),x=t(3325),y=t(184),v=function(){var n,e=(0,u.useState)(""),t=(0,i.Z)(e,2),a=t[0],l=t[1],f=(0,o.TH)(),h=(0,s.lr)(),v=(0,i.Z)(h,2),g=v[0],Z=v[1],b=null!==(n=g.get("query"))&&void 0!==n?n:"";(0,u.useEffect)((function(){function n(){return(n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d(b);case 2:e=n.sent,l(e.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}b&&function(){n.apply(this,arguments)}()}),[b]);return(0,y.jsxs)("div",{children:[(0,y.jsxs)(x.UI,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;""===e.filmInput.value.trim()?p.Am.warn("Enter correct query"):Z({query:e.filmInput.value}),e.reset()},children:[(0,y.jsx)(x.yt,{type:"text",name:"filmInput"}),(0,y.jsx)(x.OL,{type:"submit",children:"Search "})]}),a&&(0,y.jsx)(x.rl,{children:a.map((function(n){return(0,y.jsx)("li",{children:(0,y.jsxs)(x.VV,{to:"".concat(n.id),state:{from:f},children:[(0,y.jsx)(m.FXJ,{size:"12px"}),n.title]})},n.id)}))})]})}}}]);
//# sourceMappingURL=45.e6bc2d55.chunk.js.map