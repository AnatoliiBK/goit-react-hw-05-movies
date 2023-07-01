"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[438,406,110],{406:function(e,s,c){c.r(s);var r=c(439),i=c(791),a=c(689),t=c(243),n=c(184);s.default=function(){var e=(0,a.UO)().movieId,s=(0,i.useState)([]),c=(0,r.Z)(s,2),o=c[0],l=c[1];return(0,i.useEffect)((function(){t.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=889c6c698b758e37f5a9c5b22a486a89")).then((function(e){l(e.data.cast)})).catch((function(e){console.error("Mistake in getting cast:",e)}))}),[e]),(0,n.jsxs)("div",{className:"decor",children:[(0,n.jsx)("h2",{children:"Actors Cast"}),o.map((function(e){return(0,n.jsxs)("div",{children:[(0,n.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:e.name,width:200}),(0,n.jsx)("p",{className:"actor-name",children:e.name}),(0,n.jsxs)("p",{className:"actor-character",children:["Character: ",e.character]})]},e.id)}))]})}},438:function(e,s,c){c.r(s);var r=c(439),i=c(791),a=c(689),t=c(87),n=c(243),o=c(406),l=c(110),d=c(184);s.default=function e(){var s=(0,a.UO)().movieId,c=(0,i.useState)(null),h=(0,r.Z)(c,2),m=h[0],v=h[1],u=(0,a.s0)();if((0,i.useEffect)((function(){n.Z.get("https://api.themoviedb.org/3/movie/".concat(s,"?api_key=889c6c698b758e37f5a9c5b22a486a89")).then((function(e){v(e.data)})).catch((function(e){console.error("Error receiving detailed information about the film:",e)}))}),[s]),!m)return(0,d.jsx)("div",{children:"Loading..."});var j=m.release_date.split("-")[0];return(0,d.jsxs)("div",{className:"decor",children:[(0,d.jsxs)("div",{className:"card",children:[(0,d.jsxs)("div",{className:"card-first",children:[(0,d.jsx)("button",{onClick:function(){u(-1)},children:"Go back"}),(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(m.poster_path),alt:m.title,width:300})]}),(0,d.jsxs)("div",{className:"card-four",children:[(0,d.jsxs)("div",{className:"card-sec",children:[(0,d.jsx)("h2",{children:m.title}),(0,d.jsxs)("p",{className:"releaseYear",children:["(",j,")"]})]}),(0,d.jsxs)("div",{className:"card-th",children:[(0,d.jsxs)("p",{className:"user-score",children:["User Score: ",m.vote_average]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{className:"overview",children:"Overview:"}),(0,d.jsx)("br",{})," ",m.overview]}),(0,d.jsxs)("p",{className:"genres",children:["Genres: ",(0,d.jsx)("br",{}),(0,d.jsx)("span",{className:"genres-list",children:m.genres.map((function(e){return e.name})).join(", ")})]})]})]})]}),(0,d.jsxs)("div",{className:"decor",children:[(0,d.jsx)("h3",{children:"Additional Information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(t.rU,{to:"/movies/".concat(s,"/cast"),children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(t.rU,{to:"/movies/".concat(s,"/reviews"),children:"Reviews"})})]})]}),(0,d.jsxs)(a.Z5,{children:[(0,d.jsx)(a.AW,{path:"/movies/:movieId/cast",element:(0,d.jsxs)("div",{children:[(0,d.jsx)(o.default,{}),(0,d.jsx)(e,{})]})}),(0,d.jsx)(a.AW,{path:"/movies/:movieId/reviews",element:(0,d.jsxs)("div",{children:[(0,d.jsx)(l.default,{}),(0,d.jsx)(e,{})]})})]}),(0,d.jsx)(a.j3,{})]})}},110:function(e,s,c){c.r(s);var r=c(439),i=c(791),a=c(689),t=c(243),n=c(184);s.default=function(){var e=(0,a.UO)().movieId,s=(0,i.useState)([]),c=(0,r.Z)(s,2),o=c[0],l=c[1];return(0,i.useEffect)((function(){t.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=889c6c698b758e37f5a9c5b22a486a89")).then((function(e){l(e.data.results)})).catch((function(e){console.error("Error receiving feedback:",e)}))}),[e]),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Reviews"}),o.length>0?o.map((function(e){return(0,n.jsxs)("ul",{className:"review-list",children:[(0,n.jsxs)("li",{className:"review-link",children:["Author: ",e.author]}),(0,n.jsx)("p",{children:e.content})]},e.id)})):(0,n.jsx)("p",{children:"We don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=438.f2d9e05a.chunk.js.map