(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{106:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},115:function(e,t,a){},223:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(11),r=a.n(s),o=(a(106),a(24)),i=a.n(o),l=a(38),u=a(15),d=(a(108),a(255)),j=a(256),h=a(257),f=a(249),p=a(253),b=(a(109),a(254)),v=a(6);var O=function(e){var t=e.title,a=e.cases,n=e.total;return Object(v.jsx)(f.a,{className:"infoBox",children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(b.a,{className:"infoBox__title",color:"textSecondary",children:t}),Object(v.jsx)("h2",{className:"infoBox__cases",children:a}),Object(v.jsxs)(b.a,{className:"infoBox__total",color:"textSecondary",children:[n," Total"]})]})})};a(115);var x=function(e){var t=e.countries;return Object(v.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,a=e.cases;return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:t}),Object(v.jsx)("td",{children:Object(v.jsx)("strong",{children:a})})]})}))})},m=a(13),y=a(40),_=a.n(y),g=function(e){var t=Object(m.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},w=a(2),N=a(96),k=["casesType"],C={legend:{display:!1},elements:{point:{radius:2}},maintainAspectRatio:!0,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return _()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return _()(e).format("0a")}}}]}},S=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",n=[];for(var c in e.cases){if(t){var s={x:c,y:e[a][c]-t};n.push(s)}t=e[a][c]}return n};var B=function(e){var t=e.casesType,a=void 0===t?"cases":t,c=Object(w.a)(e,k),s=Object(n.useState)({}),r=Object(u.a)(s,2),o=r[0],d=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=S(e,a);d(t),console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),Object(v.jsx)("div",{className:c.className,children:(null===o||void 0===o?void 0:o.length)>0&&Object(v.jsx)(N.a,{data:{datasets:[{backgroundColor:"RGB(0, 161, 126)",borderColor:"#00A17E",data:o}]},options:C})})};var T=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)("worldwide"),r=Object(u.a)(s,2),o=r[0],b=r[1],m=Object(n.useState)({}),y=Object(u.a)(m,2),_=y[0],w=y[1],N=Object(n.useState)([]),k=Object(u.a)(N,2),C=k[0],S=k[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){w(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries?yesterday=-&twoDaysAgo=-&sort=-&allowNull=-").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=g(e);S(a),c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var T=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,b(a),n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){w(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsxs)("div",{className:"app__left",children:[Object(v.jsxs)("div",{className:"app__header",children:[Object(v.jsx)("h1",{children:"COVID-19 Tracker"}),Object(v.jsx)(d.a,{className:"app__dropdown",children:Object(v.jsxs)(j.a,{className:"app__dropdown",variant:"outlined",onChange:T,value:o,children:[Object(v.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),a.map((function(e){return Object(v.jsx)(h.a,{value:e.value,children:e.name})}))]})})]}),Object(v.jsxs)("div",{className:"app__stats",children:[Object(v.jsx)(O,{className:"app__infoBox",title:"Coronavirus Cases",cases:_.todayCases,total:_.cases}),Object(v.jsx)(O,{title:"Recovered",cases:_.todayRecovered,total:_.recovered}),Object(v.jsx)(O,{title:"Deaths",cases:_.todayDeaths,total:_.deaths})]}),Object(v.jsx)("h5",{className:"app__statswarning",children:"The today cases data of some country may be zero due to the non updated value of today's data in the respective time zones"}),Object(v.jsx)("img",{className:"app__image",src:"https://media1.tenor.com/images/ed7cffc243c6a6ffe63058e79d1ea0ac/tenor.gif?itemid=16735375",alt:""})]}),Object(v.jsx)(f.a,{className:"app__right",children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)("h3",{children:"Live cases by country"}),Object(v.jsx)(x,{countries:C}),Object(v.jsx)("h3",{classType:"app__graphheading",children:"Worldwide new cases"}),Object(v.jsx)(B,{})]})})]})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,259)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(T,{})}),document.getElementById("root")),D()}},[[223,1,2]]]);
//# sourceMappingURL=main.b55ad73e.chunk.js.map