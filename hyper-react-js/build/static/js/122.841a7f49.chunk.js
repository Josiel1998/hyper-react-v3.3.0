(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[122],{1058:function(e,t,s){"use strict";s.r(t);var a=s(132),c=s(16),n=s(0),r=s(29),i=s(194),l=s(150),d=s(74),o=s(717),j=s(202),b=s(12),m=s.n(b),p=s(311),u=s(957),h=s(126),x=[{id:"1",name:"Draft the new contract document for sales team",start:"2019-07-16",end:"2019-07-20",progress:55},{id:"2",name:"Find out the old contract documents",start:"2019-07-19",end:"2019-07-21",progress:85,dependencies:"1"},{id:"3",name:"Organize meeting with sales associates to understand need in detail",start:"2019-07-21",end:"2019-07-22",progress:80,dependencies:"2"},{id:"4",name:"iOS App home page",start:"2019-07-15",end:"2019-07-17",progress:80},{id:"5",name:"Write a release note",start:"2019-07-18",end:"2019-07-22",progress:65,dependencies:"4"},{id:"6",name:"Setup new sales project",start:"2019-07-20",end:"2019-07-31",progress:15},{id:"7",name:"Invite user to a project",start:"2019-07-25",end:"2019-07-26",progress:99,dependencies:"6"},{id:"8",name:"Coordinate with business development",start:"2019-07-28",end:"2019-07-30",progress:35,dependencies:"7"},{id:"9",name:"Kanban board design",start:"2019-08-01",end:"2019-08-03",progress:25,dependencies:"8"},{id:"10",name:"Enable analytics tracking",start:"2019-08-05",end:"2019-08-07",progress:60,dependencies:"9"}],O=[{id:"proj101",name:"Lunar",status:"On-Track",icon:"uil uil-moonset"},{id:"proj102",name:"Dark Moon",status:"On-Track",icon:"uil uil-moon-eclipse"},{id:"proj103",name:"Aurora",status:"Locked",icon:"uil uil-mountains"},{id:"proj104",name:"Blue Moon",status:"Locked",icon:"uil uil-moon"},{id:"proj105",name:"Casanova",status:"Delayed",icon:"uil uil-ship"},{id:"proj106",name:"Darwin",status:"On-Track",icon:"uil uil-subway-alt"},{id:"proj107",name:"Eagle",status:"Delayed",icon:"uil uil-gold"}],g=s(1),v=function(e){var t=e.project,s=e.onSelectProject,a=e.selectedProject;return Object(g.jsx)(r.b,{to:"#",className:"text-body",onClick:function(e){return s(t)},children:Object(g.jsxs)("div",{className:m()("d-flex","p-2",{"bg-light":a&&a.id===t.id}),children:[Object(g.jsxs)("div",{className:"avatar-sm",children:["On-Track"===t.status&&Object(g.jsx)("span",{className:"avatar-title bg-success-lighten rounded-circle text-success",children:Object(g.jsx)("i",{className:m()(t.icon,"font-24")})}),"Locked"===t.status&&Object(g.jsx)("span",{className:"avatar-title bg-warning-lighten rounded-circle text-warning",children:Object(g.jsx)("i",{className:m()(t.icon,"font-24")})}),"Delayed"===t.status&&Object(g.jsx)("span",{className:"avatar-title bg-danger-lighten rounded-circle text-danger",children:Object(g.jsx)("i",{className:m()(t.icon,"font-24")})})]}),Object(g.jsxs)("div",{className:"ms-2",children:[Object(g.jsxs)("h5",{className:"mt-0 mb-0",children:[t.name,Object(g.jsx)("span",{className:m()("badge","ms-1",{"badge-success-lighten":"On-Track"===t.status,"badge-warning-lighten":"Locked"===t.status,"badge-danger-lighten":"Delayed"===t.status}),children:t.status})]}),Object(g.jsxs)("p",{className:"mt-1 mb-0 text-muted",children:["ID: ",t.id]})]})]})})};t.default=function(){var e=Object(n.useState)(Object(a.a)(O)),t=Object(c.a)(e,1)[0],s=Object(n.useState)(O[1]),b=Object(c.a)(s,2),m=b[0],f=b[1],N=Object(n.useState)("Week"),y=Object(c.a)(N,2),k=y[0],w=y[1],D=Object(n.useState)(null),P=Object(c.a)(D,2),S=P[0],C=P[1];Object(n.useEffect)((function(){var e=new u.a("#tasks-gantt",Object(a.a)(x),{view_modes:["Quarter Day","Half Day","Day","Week","Month"],bar_height:20,padding:18,view_mode:"Week",custom_popup_html:function(e){return'<div class="popover fade show bs-popover-right gantt-task-details" role="tooltip"><div class="arrow"></div><div class="popover-body">'+"<h5>".concat(e.name,'</h5><p class="mb-2">Expected to finish by ').concat(e.end,"</p>")+'<div class="progress mb-2" style="height: 10px;">'+'<div class="progress-bar" role="progressbar" style="width: '.concat(e.progress,'%;" aria-valuenow="').concat(e.progress,'"')+' aria-valuemin="0" aria-valuemax="100">'.concat(e.progress,"%</div>")+"</div></div></div>"}});C(e)}),[]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(h.a,{breadCrumbItems:[{label:"Projects",path:"/apps/projects"},{label:"Gantt",path:"/apps/projects/gantt",active:!0}],title:"Project Calendar"}),Object(g.jsx)(i.a,{children:Object(g.jsx)(i.a.Body,{children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)(d.a,{xxl:3,lg:4,children:Object(g.jsxs)("div",{className:"pe-xl-3",children:[Object(g.jsx)("h5",{className:"mt-0 mb-3",children:"Projects"}),Object(g.jsx)("div",{className:"app-search",children:Object(g.jsx)("form",{children:Object(g.jsxs)("div",{className:"mb-2 position-relative",children:[Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"search by name..."}),Object(g.jsx)("span",{className:"mdi mdi-magnify search-icon"})]})})}),Object(g.jsx)(l.a,{children:Object(g.jsx)(d.a,{children:Object(g.jsx)(p.a,{style:{maxHeight:"535px",width:"100%"},children:t.map((function(e,t){return Object(g.jsx)(v,{project:e,selectedProject:m,onSelectProject:function(e){return f(e)}},t)}))})})})]})}),Object(g.jsx)(d.a,{xxl:9,lg:8,className:"mt-4 mt-xl-0",children:Object(g.jsxs)("div",{className:"ps-xl-3",children:[Object(g.jsxs)(l.a,{children:[Object(g.jsx)(d.a,{className:"col-auto",children:Object(g.jsx)(r.b,{to:"#",className:"btn btn-success btn-sm mb-2",children:"Add New Task"})}),Object(g.jsx)(d.a,{className:"text-sm-end",children:Object(g.jsx)(o.a,{children:["Quarter Day","Half Day","Day","Week","Month"].map((function(e,t){return Object(g.jsx)(j.a,{variant:"primary",size:"sm",onClick:function(){return function(e){w(e),S&&S.change_view_mode(e)}(e)},active:k===e,children:e},t)}))})})]}),Object(g.jsx)(l.a,{children:Object(g.jsx)(d.a,{className:"mt-3",children:Object(g.jsx)("svg",{id:"tasks-gantt"})})})]})})]})})})]})}},126:function(e,t,s){"use strict";s(0);var a=s(150),c=s(74),n=s(156),r=s(1);t.a=function(e){return Object(r.jsx)(a.a,{children:Object(r.jsx)(c.a,{children:Object(r.jsxs)("div",{className:"page-title-box",children:[Object(r.jsx)("div",{className:"page-title-right",children:Object(r.jsxs)(n.a,{listProps:{className:"m-0"},children:[Object(r.jsx)(n.a.Item,{href:"/",children:"Hyper"}),e.breadCrumbItems.map((function(e,t){return e.active?Object(r.jsx)(n.a.Item,{active:!0,children:e.label},t):Object(r.jsx)(n.a.Item,{href:e.path,children:e.label},t)}))]})}),Object(r.jsx)("h4",{className:"page-title",children:e.title})]})})})}}}]);
//# sourceMappingURL=122.841a7f49.chunk.js.map