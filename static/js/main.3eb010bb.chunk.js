(this["webpackJsonphcs-todo-list"]=this["webpackJsonphcs-todo-list"]||[]).push([[0],{9:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(3),s=c.n(o),a=c(0);var l=function(e){const[t,c]=Object(n.useState)("");return Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{onChange:function(e){const t=e.target.value;c(t)},type:"text",className:"todo-input",value:t}),Object(a.jsx)("button",{onClick:function(n){e.onAdd(t),c(""),n.preventDefault()},type:"submit",className:"todo-button",children:Object(a.jsx)("i",{className:"fas fa-plus-square"})}),Object(a.jsx)("div",{className:"select",children:Object(a.jsxs)("select",{onChange:function(t){e.status(t.target.value)},name:"todos",className:"filter-todo",children:[Object(a.jsx)("option",{value:"all",children:"All"}),Object(a.jsx)("option",{value:"completed",children:"Completed"}),Object(a.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})};var i=function(e){return Object(a.jsxs)("div",{className:"todo animate__animated animate__lightSpeedInLeft",children:[Object(a.jsx)("li",{className:"todo-item ".concat(e.completedT?"completed":" "),children:e.text}),Object(a.jsx)("button",{onClick:function(t){e.onCheckT(e.idT),console.log(e),console.log(e.idT)},className:"complete-btn",children:Object(a.jsx)("i",{className:"fas fa-check"})}),Object(a.jsx)("button",{onClick:function(){e.onTrashT(e.idT),console.log(e),console.log(e.idT)},className:"trash-btn",children:Object(a.jsx)("i",{className:"fas fa-trash"})})]})};var d=function(e){return Object(a.jsx)("div",{className:"todo-container",children:Object(a.jsx)("ul",{className:"todo-list",children:Object(a.jsx)(i,{idT:e.idTL,completedT:e.completedTL,text:e.listText,onTrashT:e.onTrash,onCheckT:e.onCheck},e.idTL)})})};var r=function(){const[e,t]=Object(n.useState)([]),[c,o]=Object(n.useState)("all"),[s,i]=Object(n.useState)([]);function r(c){t(e.filter((e=>e.id!==c)))}function j(c){t(e.map((e=>e.id===c?{...e,completed:!e.completed}:e)))}return Object(n.useEffect)((()=>{!function(){switch(c){case"completed":i(e.filter((e=>!0===e.completed)));break;case"uncompleted":i(e.filter((e=>!1===e.completed)));break;default:i(e)}}()}),[e,c]),console.log(e),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h1",{className:"animate__animated animate__zoomIn",children:"Todo List"})}),Object(a.jsx)(l,{onAdd:function(e){t((t=>[...t,{itemText:e,completed:!1,id:1e3*Math.random()}]))},status:function(e){o(e)}}),s.map((e=>Object(a.jsx)(d,{idTL:e.id,completedTL:e.completed,listText:e.itemText,onTrash:r,onCheck:j},e.id)))]})};const j=document.getElementById("root");s.a.render(Object(a.jsx)(r,{}),j)}},[[9,1,2]]]);
//# sourceMappingURL=main.3eb010bb.chunk.js.map