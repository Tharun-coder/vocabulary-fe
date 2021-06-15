(this["webpackJsonpvocabulary-fe"]=this["webpackJsonpvocabulary-fe"]||[]).push([[0],{22:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var r,n=c(0),a=c.n(n),s=c(5),o=c.n(s),i=(c(22),c(23),c(6)),d=c(2),l=c(7),u=c(4),j=c.n(u),b=c(8),p=c(3),h=Object(p.b)("dictionary/getDictAsync",Object(b.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vocabulary-app-be.herokuapp.com/dictionary");case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c.data);case 8:case"end":return e.stop()}}),e)})))),O=Object(p.b)("dictionary/addWordtoDictAsync",function(){var e=Object(b.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vocabulary-app-be.herokuapp.com/dictionary",{method:"POST",body:JSON.stringify({word:t.word}),headers:{"Content-Type":"application/json"}});case 2:if(!(c=e.sent).ok){e.next=9;break}return e.next=6,c.json();case 6:return r=e.sent,console.log(r),e.abrupt("return",{data:r});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=(Object(p.b)("dictionary/searchWordAsync",function(){var e=Object(b.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vocabulary-app-be.herokuapp.com/dictionary/".concat(t.id));case 2:if(!(c=e.sent).ok){e.next=9;break}return e.next=6,c.json();case 6:return r=e.sent,console.log(r),e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(p.c)({name:"dictionary",initialState:[],reducers:{},extraReducers:(r={},Object(l.a)(r,h.fulfilled,(function(e,t){return t.payload})),Object(l.a)(r,h.pending,(function(e,t){})),Object(l.a)(r,O.fulfilled,(function(e,t){try{e.push(t.payload.data)}catch(c){console.log(c)}})),r)}).reducer),x=c(17),m=c.n(x),y=c(1);function v(e){return e.length>60?e.substr(0,60)+"...":e}var w=function(e){var t=e.item,c=Object(n.useState)(!1),r=Object(i.a)(c,2),a=r[0],s=r[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{style:{textTransform:"capitalize"},children:t.word}),Object(y.jsxs)("td",{children:[Object(y.jsxs)("b",{style:{textTransform:"capitalize"},children:[t.items&&t.items[0].category," -"," "]}),t.items&&v(t.items[0].definitions[0])]}),Object(y.jsx)("td",{children:Object(y.jsx)("button",{className:"btn btn-danger btn-sm ",onClick:function(){s(!0)},children:"View"})})]},t.id),Object(y.jsxs)(m.a,{isOpen:a,ariaHideApp:!0,children:[Object(y.jsxs)("div",{className:"modal-header",children:[Object(y.jsx)("h3",{className:"modal-word-header",children:t.word&&t.word.toUpperCase()}),Object(y.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return s(!1)},children:Object(y.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]}),Object(y.jsx)("div",{className:"model-content",children:Object(y.jsx)("p",{children:t.items&&t.items.map((function(e){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("i",{children:e.category}),Object(y.jsx)("ul",{children:e.definitions.map((function(e){return Object(y.jsx)("li",{children:e})}))})]})}))})})]})]})};var g=function(e){var t=e.searchWord,c=Object(d.b)(),r=Object(d.c)((function(e){return e.dictionary}));return Object(n.useEffect)((function(){c(h())}),[c,r]),Object(y.jsxs)("table",{className:"table table-striped",children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{scope:"col",children:"Word"}),Object(y.jsx)("th",{scope:"col",children:"Description"}),Object(y.jsx)("th",{scope:"col"})]})}),Object(y.jsx)("tbody",{children:r&&r.filter((function(e){return""===t?e:e.word&&e.word.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(y.jsx)(w,{item:e,searchWord:t},e.id)}))})]})};var k=function(e){var t=Object(d.b)(),c=Object(n.useState)(""),r=Object(i.a)(c,2),a=r[0],s=r[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u=l[0],j=l[1];return Object(y.jsx)("div",{className:"container content-wrapper",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[Object(y.jsx)("input",{type:"text",id:"word",onChange:function(e){return s(e.target.value.replace(/[^A-Za-z]/gi,""))},value:a,placeholder:"Enter the word..",autoComplete:"off"}),Object(y.jsx)("button",{className:"btn-primary add-word",onClick:function(e){e.preventDefault(),""===a?alert("Please enter a word to proceed"):(t(O({word:a.toLowerCase()})),alert("".concat(a," added to dictionary")),s(""))},children:"Add Word"})]}),Object(y.jsx)("div",{className:"col-lg-6 col-sm-12",children:Object(y.jsx)("input",{type:"text",id:"search-word",placeholder:"Search",onChange:function(e){return j(e.target.value.replace(/[^A-Za-z]/,""))},value:u,autoComplete:"off"})}),Object(y.jsx)("div",{className:"col-lg-12 col-sm-12 table-content",children:Object(y.jsx)(g,{searchWord:u})})]})})};var N=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("h1",{className:"app-header",children:"Welcome to Vocabulary App"}),Object(y.jsx)(k,{})]})},C=Object(p.a)({reducer:{dictionary:f}});o.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(d.a,{store:C,children:Object(y.jsx)(N,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a71b6ba3.chunk.js.map