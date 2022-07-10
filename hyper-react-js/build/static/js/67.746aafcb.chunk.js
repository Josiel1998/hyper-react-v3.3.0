(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[67],{1032:function(e,t,a){"use strict";a.r(t);a(0);var r=a(150),n=a(74),c=a(126),o=a(200),s=a.n(o),i=a(194),l=a(1),d=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)(i.a.Body,{children:[Object(l.jsx)("h4",{className:"header-title mb-3",children:"Line with Data Labels"}),Object(l.jsx)(s.a,{options:{chart:{height:380,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#727cf5","#0acf97"],dataLabels:{enabled:!0},stroke:{width:[3,3],curve:"smooth"},title:{text:"Average High & Low Temperature",align:"left",style:{fontSize:"14px"}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},markers:{style:"inverted",size:6},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"}},yaxis:{title:{text:"Temperature"},min:5,max:40},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},series:[{name:"High - 2018",data:[28,29,33,36,32,32,33]},{name:"Low - 2018",data:[12,11,14,18,17,13,13]}],type:"line",className:"apex-charts"})]})})},b=function(){var e={annotations:{yaxis:[{y:8200,borderColor:"#0acf97",label:{borderColor:"#0acf97",style:{color:"#fff",background:"#0acf97"},text:"Support"}}],xaxis:[{x:new Date("23 Nov 2017").getTime(),borderColor:"#775DD0",label:{borderColor:"#775DD0",style:{color:"#fff",background:"#775DD0"},text:"Anno Test"}},{x:new Date("03 Dec 2017").getTime(),borderColor:"#ffbc00",label:{borderColor:"#ffbc00",style:{color:"#fff",background:"#ffbc00"},orientation:"horizontal",text:"New Beginning"}}],points:[{x:new Date("27 Nov 2017").getTime(),y:8506.9,marker:{size:8,fillColor:"#fff",strokeColor:"#fa5c7c",radius:2},label:{borderColor:"#fa5c7c",offsetY:0,style:{color:"#fff",background:"#fa5c7c"},text:"Point Annotation"}}]},chart:{height:380,type:"line",id:"areachart-2"},labels:["13 Nov 2017","14 Nov 2017","15 Nov 2017","16 Nov 2017","17 Nov 2017","20 Nov 2017","21 Nov 2017","22 Nov 2017","23 Nov 2017","24 Nov 2017","27 Nov 2017","28 Nov 2017","29 Nov 2017","30 Nov 2017","01 Dec 2017","04 Dec 2017","05 Dec 2017","06 Dec 2017","07 Dec 2017","08 Dec 2017"],colors:["#39afd1"],dataLabels:{enabled:!1},stroke:{width:[3],curve:"straight"},title:{text:"Line with Annotations",align:"left"},xaxis:{type:"datetime"},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]};return Object(l.jsx)(i.a,{children:Object(l.jsxs)(i.a.Body,{children:[Object(l.jsx)("h4",{className:"header-title mb-3",children:"Line Chart with Annotations"}),Object(l.jsx)(s.a,{options:e,series:[{name:"Prices",data:[8107.85,8128,8122.9,8165.5,8340.7,8423.7,8423.5,8514.3,8481.85,8487.7,8506.9,8626.2,8668.95,8602.3,8607.55,8512.9,8496.25,8600.65,8881.1,9340.85]}],type:"line",className:"apex-charts"})]})})},f=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)(i.a.Body,{children:[Object(l.jsx)("h4",{className:"header-title mb-3",children:"Spline Area"}),Object(l.jsx)(s.a,{options:{chart:{height:380,type:"area"},dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth"},colors:["#727cf5","#6c757d"],legend:{offsetY:-10},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"]},tooltip:{fixed:{enabled:!1,position:"topRight"}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"}},series:[{name:"Series 1",data:[31,40,28,51,42,109,100]},{name:"Series 2",data:[11,32,45,32,34,52,41]}],type:"area",className:"apex-charts"})]})})},u=function(){var e={chart:{height:422,type:"area",stacked:!0,events:{selection:function(e,t){console.log(new Date(t.xaxis.min))}}},colors:["#727cf5","#0acf97","#e3eaef"],dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},fill:{gradient:{enabled:!0,opacityFrom:.6,opacityTo:.8}},legend:{position:"top",horizontalAlign:"left"},xaxis:{type:"datetime"},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}}}}]},t=function(e,t,a){for(var r=0,n=[];r<t;){var c=e,o=Math.floor(Math.random()*(a.max-a.min+1))+a.min;n.push([c,o]),e+=864e5,r++}return n},a=[{name:"South",data:t(new Date("11 Feb 2017").getTime(),20,{min:10,max:60})},{name:"North",data:t(new Date("11 Feb 2017").getTime(),20,{min:10,max:20})},{name:"Central",data:t(new Date("11 Feb 2017").getTime(),20,{min:10,max:15})}];return Object(l.jsx)(i.a,{children:Object(l.jsxs)(i.a.Body,{children:[Object(l.jsx)("h4",{className:"header-title mb-3",children:"Stacked Area"}),Object(l.jsx)(s.a,{options:e,series:a,type:"area",className:"apex-charts"})]})})},j=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)(i.a.Body,{children:[Object(l.jsx)("h4",{className:"header-title mb-3",children:"Bar Chart"}),Object(l.jsx)(s.a,{options:{chart:{height:380,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,dataLabels:{position:"top"}}},dataLabels:{enabled:!0,offsetX:-6,style:{fontSize:"12px",colors:["#fff"]}},colors:["#fa5c7c","#6c757d"],stroke:{show:!0,width:1,colors:["#fff"]},xaxis:{categories:[2001,2002,2003,2004,2005,2006,2007]},legend:{offsetY:-10},states:{hover:{filter:"none"}},grid:{borderColor:"#f1f3fa"}},series:[{name:"Series 1",data:[44,55,41,64,22,43,21]},{name:"Series 2",data:[53,32,33,52,13,44,32]}],type:"bar",className:"apex-charts"})]})})},h=function(){var e={chart:{height:380,type:"bar",stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},stroke:{show:!1},xaxis:{categories:[2008,2009,2010,2011,2012,2013,2014],labels:{formatter:function(e){return e+"K"}}},yaxis:{title:{text:void 0}},colors:["#727cf5","#0acf97","#fa5c7c","#6c757d","#39afd1"],tooltip:{y:{formatter:function(e){return e+"K"}}},fill:{opacity:1},states:{hover:{filter:"none"}},legend:{position:"top",horizontalAlign:"center"},grid:{borderColor:"#f1f3fa"}};return Object(l.jsx)(i.a,{children:Object(l.jsxs)(i.a.Body,{children:[Object(l.jsx)("h4",{className:"header-title mb-3",children:"Stacked Bar Chart"}),Object(l.jsx)(s.a,{options:e,series:[{name:"Marine Sprite",data:[44,55,41,37,22,43,21]},{name:"Striking Calf",data:[53,32,33,52,13,43,32]},{name:"Tank Picture",data:[12,17,11,9,15,11,20]},{name:"Bucket Slope",data:[9,7,5,8,6,9,4]},{name:"Reborn Kid",data:[25,12,19,32,25,24,10]}],type:"bar",className:"apex-charts"})]})})},p=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)(i.a.Body,{children:[Object(l.jsx)("h4",{className:"header-title mb-3",children:"Donut Chart"}),Object(l.jsx)(s.a,{options:{chart:{height:320,type:"pie"},labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],colors:["#727cf5","#6c757d","#0acf97","#fa5c7c","#e3eaef"],legend:{show:!0,position:"bottom",horizontalAlign:"center",verticalAlign:"middle",floating:!1,fontSize:"14px",offsetX:0,offsetY:-10},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]},series:[44,55,41,17,15],type:"donut",height:320,className:"apex-charts"})]})})},x=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)(i.a.Body,{children:[Object(l.jsx)("h4",{className:"header-title mb-3",children:"Pie Chart"}),Object(l.jsx)(s.a,{options:{chart:{height:320,type:"pie"},labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],colors:["#727cf5","#6c757d","#0acf97","#fa5c7c","#e3eaef"],legend:{show:!0,position:"bottom",horizontalAlign:"center",verticalAlign:"middle",floating:!1,fontSize:"14px",offsetX:0,offsetY:-10},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]},series:[44,55,41,17,15],type:"pie",height:320,className:"apex-charts"})]})})},m=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)(i.a.Body,{children:[Object(l.jsx)("h4",{className:"header-title mb-3",children:"Line, Bar and Area (Mixed)"}),Object(l.jsx)(s.a,{options:{chart:{height:380,type:"line",stacked:!1,toolbar:{show:!1}},stroke:{width:[0,2,4],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},colors:["#727cf5","#39afd1","#fa5c7c"],fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},legend:{offsetY:-10},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?e.toFixed(0)+" points":e}}},grid:{borderColor:"#f1f3fa"}},series:[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],type:"line",height:320,className:"apex-charts"})]})})};t.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(c.a,{breadCrumbItems:[{label:"Charts",path:"/features/charts/apex"},{label:"Apex",path:"/features/charts/apex",active:!0}],title:"Apex Charts"}),Object(l.jsxs)(r.a,{children:[Object(l.jsx)(n.a,{xl:6,children:Object(l.jsx)(d,{})}),Object(l.jsx)(n.a,{xl:6,children:Object(l.jsx)(b,{})})]}),Object(l.jsxs)(r.a,{children:[Object(l.jsx)(n.a,{xl:6,children:Object(l.jsx)(f,{})}),Object(l.jsx)(n.a,{xl:6,children:Object(l.jsx)(u,{})})]}),Object(l.jsxs)(r.a,{children:[Object(l.jsx)(n.a,{xl:6,children:Object(l.jsx)(j,{})}),Object(l.jsx)(n.a,{xl:6,children:Object(l.jsx)(h,{})})]}),Object(l.jsxs)(r.a,{children:[Object(l.jsx)(n.a,{xl:6,children:Object(l.jsx)(p,{})}),Object(l.jsx)(n.a,{xl:6,children:Object(l.jsx)(x,{})})]}),Object(l.jsx)(r.a,{children:Object(l.jsx)(n.a,{children:Object(l.jsx)(m,{})})})]})}},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a(119);function c(e){var t=Object(n.a)(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},119:function(e,t,a){"use strict";var r=a(0);t.a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a(118);function c(e,t,a,c){void 0===c&&(c=!1);var o=Object(n.a)(a);Object(r.useEffect)((function(){var a="function"===typeof e?e():e;return a.addEventListener(t,o,c),function(){return a.removeEventListener(t,o,c)}}),[e])}},125:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t.current}},126:function(e,t,a){"use strict";a(0);var r=a(150),n=a(74),c=a(156),o=a(1);t.a=function(e){return Object(o.jsx)(r.a,{children:Object(o.jsx)(n.a,{children:Object(o.jsxs)("div",{className:"page-title-box",children:[Object(o.jsx)("div",{className:"page-title-right",children:Object(o.jsxs)(c.a,{listProps:{className:"m-0"},children:[Object(o.jsx)(c.a.Item,{href:"/",children:"Hyper"}),e.breadCrumbItems.map((function(e,t){return e.active?Object(o.jsx)(c.a.Item,{active:!0,children:e.label},t):Object(o.jsx)(c.a.Item,{href:e.path,children:e.label},t)}))]})}),Object(o.jsx)("h4",{className:"page-title",children:e.title})]})})})}},127:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(){return Object(r.useState)(null)}},129:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(r){"object"===typeof window&&(a=window)}e.exports=a},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){t.current=e})),t.current}},131:function(e,t,a){"use strict";var r=a(16),n=a(0),c=(a(127),a(119),a(118));a(123);a(125),a(130);a(145),new WeakMap;var o=a(133),s=a(1),i=["onKeyDown"];var l=n.forwardRef((function(e,t){var a,n=e.onKeyDown,l=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,i),d=Object(o.b)(Object.assign({tagName:"a"},l)),b=Object(r.a)(d,1)[0],f=Object(c.a)((function(e){b.onKeyDown(e),null==n||n(e)}));return((a=l.href)&&"#"!==a.trim()||l.role)&&"button"!==l.role?Object(s.jsx)("a",Object.assign({ref:t},l,{onKeyDown:n})):Object(s.jsx)("a",Object.assign({ref:t},l,b,{onKeyDown:f}))}));l.displayName="Anchor";t.a=l},133:function(e,t,a){"use strict";a.d(t,"b",(function(){return s}));var r=a(16),n=a(0),c=a(1),o=["as","disabled"];function s(e){var t=e.tagName,a=e.disabled,r=e.href,n=e.target,c=e.rel,o=e.onClick,s=e.tabIndex,i=void 0===s?0:s,l=e.type;t||(t=null!=r||null!=n||null!=c?"a":"button");var d={tagName:t};if("button"===t)return[{type:l||"button",disabled:a},d];var b=function(e){(a||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),a?e.stopPropagation():null==o||o(e)};return"a"===t&&(r||(r="#"),a&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:a?void 0:i,href:r,target:"a"===t?n:void 0,"aria-disabled":a||void 0,rel:"a"===t?c:void 0,onClick:b,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),b(e))}},d]}var i=n.forwardRef((function(e,t){var a=e.as,n=e.disabled,i=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o),l=s(Object.assign({tagName:a,disabled:n},i)),d=Object(r.a)(l,2),b=d[0],f=d[1].tagName;return Object(c.jsx)(f,Object.assign({},i,b,{ref:t}))}));i.displayName="Button",t.a=i},137:function(e,t,a){"use strict";var r=a(3),n=a(0),c=a(12),o=a.n(c),s=a(1);t.a=function(e){return n.forwardRef((function(t,a){return Object(s.jsx)("div",Object(r.a)(Object(r.a)({},t),{},{ref:a,className:o()(t.className,e)}))}))}},142:function(e,t,a){"use strict";var r=a(0),n=r.createContext(null);n.displayName="CardHeaderContext",t.a=n},145:function(e,t,a){"use strict";(function(e){var r=a(0),n="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,c="undefined"!==typeof document;t.a=c||n?r.useLayoutEffect:r.useEffect}).call(this,a(129))},150:function(e,t,a){"use strict";var r=a(3),n=a(11),c=a(12),o=a.n(c),s=a(0),i=a(13),l=a(1),d=["bsPrefix","className","as"],b=s.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.as,b=void 0===s?"div":s,f=Object(n.a)(e,d),u=Object(i.b)(a,"row"),j=Object(i.a)(),h="".concat(u,"-cols"),p=[];return j.forEach((function(e){var t,a=f[e];delete f[e],t=null!=a&&"object"===typeof a?a.cols:a;var r="xs"!==e?"-".concat(e):"";null!=t&&p.push("".concat(h).concat(r,"-").concat(t))})),Object(l.jsx)(b,Object(r.a)(Object(r.a)({ref:t},f),{},{className:o.a.apply(void 0,[c,u].concat(p))}))}));b.displayName="Row",t.a=b},156:function(e,t,a){"use strict";var r=a(3),n=a(11),c=a(12),o=a.n(c),s=a(0),i=a(13),l=a(131),d=a(1),b=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],f=s.forwardRef((function(e,t){var a=e.bsPrefix,c=e.active,s=e.children,f=e.className,u=e.as,j=void 0===u?"li":u,h=e.linkAs,p=void 0===h?l.a:h,x=e.linkProps,m=e.href,O=e.title,v=e.target,g=Object(n.a)(e,b),y=Object(i.b)(a,"breadcrumb-item");return Object(d.jsx)(j,Object(r.a)(Object(r.a)({ref:t},g),{},{className:o()(y,f,{active:c}),"aria-current":c?"page":void 0,children:c?s:Object(d.jsx)(p,Object(r.a)(Object(r.a)({},x),{},{href:m,title:O,target:v,children:s}))}))}));f.displayName="BreadcrumbItem",f.defaultProps={active:!1,linkProps:{}};var u=f,j=["bsPrefix","className","listProps","children","label","as"],h=s.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.listProps,l=e.children,b=e.label,f=e.as,u=void 0===f?"nav":f,h=Object(n.a)(e,j),p=Object(i.b)(a,"breadcrumb");return Object(d.jsx)(u,Object(r.a)(Object(r.a)({"aria-label":b,className:c,ref:t},h),{},{children:Object(d.jsx)("ol",Object(r.a)(Object(r.a)({},s),{},{className:o()(p,null==s?void 0:s.className),children:l}))}))}));h.displayName="Breadcrumb",h.defaultProps={label:"breadcrumb",listProps:{}};t.a=Object.assign(h,{Item:u})},194:function(e,t,a){"use strict";var r=a(3),n=a(11),c=a(12),o=a.n(c),s=a(0),i=a(13),l=a(52),d=a(137),b=a(1),f=["bsPrefix","className","variant","as"],u=s.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.variant,l=e.as,d=void 0===l?"img":l,u=Object(n.a)(e,f),j=Object(i.b)(a,"card-img");return Object(b.jsx)(d,Object(r.a)({ref:t,className:o()(s?"".concat(j,"-").concat(s):j,c)},u))}));u.displayName="CardImg";var j=u,h=a(142),p=["bsPrefix","className","as"],x=s.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,l=e.as,d=void 0===l?"div":l,f=Object(n.a)(e,p),u=Object(i.b)(a,"card-header"),j=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:u}}),[u]);return Object(b.jsx)(h.a.Provider,{value:j,children:Object(b.jsx)(d,Object(r.a)(Object(r.a)({ref:t},f),{},{className:o()(c,u)}))})}));x.displayName="CardHeader";var m=x,O=["bsPrefix","className","bg","text","border","body","children","as"],v=Object(d.a)("h5"),g=Object(d.a)("h6"),y=Object(l.a)("card-body"),N=Object(l.a)("card-title",{Component:v}),w=Object(l.a)("card-subtitle",{Component:g}),k=Object(l.a)("card-link",{Component:"a"}),C=Object(l.a)("card-text",{Component:"p"}),D=Object(l.a)("card-footer"),P=Object(l.a)("card-img-overlay"),S=s.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.bg,l=e.text,d=e.border,f=e.body,u=e.children,j=e.as,h=void 0===j?"div":j,p=Object(n.a)(e,O),x=Object(i.b)(a,"card");return Object(b.jsx)(h,Object(r.a)(Object(r.a)({ref:t},p),{},{className:o()(c,x,s&&"bg-".concat(s),l&&"text-".concat(l),d&&"border-".concat(d)),children:f?Object(b.jsx)(y,{children:u}):u}))}));S.displayName="Card",S.defaultProps={body:!1};t.a=Object.assign(S,{Img:j,Title:N,Subtitle:w,Body:y,Link:k,Text:C,Header:m,Footer:D,ImgOverlay:P})}}]);
//# sourceMappingURL=67.746aafcb.chunk.js.map