(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[97],{137:function(e,t,n){"use strict";var r=n(3),a=n(0),c=n(12),o=n.n(c),i=n(1);t.a=function(e){return a.forwardRef((function(t,n){return Object(i.jsx)("div",Object(r.a)(Object(r.a)({},t),{},{ref:n,className:o()(t.className,e)}))}))}},142:function(e,t,n){"use strict";var r=n(0),a=r.createContext(null);a.displayName="CardHeaderContext",t.a=a},150:function(e,t,n){"use strict";var r=n(3),a=n(11),c=n(12),o=n.n(c),i=n(0),s=n(13),u=n(1),l=["bsPrefix","className","as"],d=i.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.as,d=void 0===i?"div":i,b=Object(a.a)(e,l),f=Object(s.b)(n,"row"),p=Object(s.a)(),j="".concat(f,"-cols"),m=[];return p.forEach((function(e){var t,n=b[e];delete b[e],t=null!=n&&"object"===typeof n?n.cols:n;var r="xs"!==e?"-".concat(e):"";null!=t&&m.push("".concat(j).concat(r,"-").concat(t))})),Object(u.jsx)(d,Object(r.a)(Object(r.a)({ref:t},b),{},{className:o.a.apply(void 0,[c,f].concat(m))}))}));d.displayName="Row",t.a=d},194:function(e,t,n){"use strict";var r=n(3),a=n(11),c=n(12),o=n.n(c),i=n(0),s=n(13),u=n(52),l=n(137),d=n(1),b=["bsPrefix","className","variant","as"],f=i.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.variant,u=e.as,l=void 0===u?"img":u,f=Object(a.a)(e,b),p=Object(s.b)(n,"card-img");return Object(d.jsx)(l,Object(r.a)({ref:t,className:o()(i?"".concat(p,"-").concat(i):p,c)},f))}));f.displayName="CardImg";var p=f,j=n(142),m=["bsPrefix","className","as"],g=i.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,u=e.as,l=void 0===u?"div":u,b=Object(a.a)(e,m),f=Object(s.b)(n,"card-header"),p=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return Object(d.jsx)(j.a.Provider,{value:p,children:Object(d.jsx)(l,Object(r.a)(Object(r.a)({ref:t},b),{},{className:o()(c,f)}))})}));g.displayName="CardHeader";var O=g,x=["bsPrefix","className","bg","text","border","body","children","as"],h=Object(l.a)("h5"),v=Object(l.a)("h6"),y=Object(u.a)("card-body"),N=Object(u.a)("card-title",{Component:h}),I=Object(u.a)("card-subtitle",{Component:v}),C=Object(u.a)("card-link",{Component:"a"}),M=Object(u.a)("card-text",{Component:"p"}),R=Object(u.a)("card-footer"),w=Object(u.a)("card-img-overlay"),G=i.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.bg,u=e.text,l=e.border,b=e.body,f=e.children,p=e.as,j=void 0===p?"div":p,m=Object(a.a)(e,x),g=Object(s.b)(n,"card");return Object(d.jsx)(j,Object(r.a)(Object(r.a)({ref:t},m),{},{className:o()(c,g,i&&"bg-".concat(i),u&&"text-".concat(u),l&&"border-".concat(l)),children:b?Object(d.jsx)(y,{children:f}):f}))}));G.displayName="Card",G.defaultProps={body:!1};t.a=Object.assign(G,{Img:p,Title:N,Subtitle:I,Body:y,Link:C,Text:M,Header:O,Footer:R,ImgOverlay:w})},201:function(e,t,n){var r=n(240),a=n(241),c=n(213),o=n(242);e.exports=function(e,t){return r(e)||a(e,t)||c(e,t)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},213:function(e,t,n){var r=n(214);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},214:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},240:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},241:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);o=!0);}catch(s){i=!0,a=s}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return c}},e.exports.__esModule=!0,e.exports.default=e.exports},242:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},252:function(e,t,n){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAAAkCAYAAACZv5Y5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRTQ0NzJFMjc4QzExRThCRjM5QzgxRkFCODM4RENBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRTQ0NzJGMjc4QzExRThCRjM5QzgxRkFCODM4RENBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JFNDQ3MkMyNzhDMTFFOEJGMzlDODFGQUI4MzhEQ0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JFNDQ3MkQyNzhDMTFFOEJGMzlDODFGQUI4MzhEQ0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4bJkp8AAAICklEQVR42uxdX2gURxj/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"},640:function(e,t,n){"use strict";var r=n(0),a=n(114),c=n(150),o=n(74),i=n(194),s=n(29),u=n(664),l=n(252),d=n(1);t.a=function(e){var t=e.bottomLinks,n=e.children,b=Object(u.a)().t;return Object(r.useEffect)((function(){return document.body&&document.body.classList.add("authentication-bg"),function(){document.body&&document.body.classList.remove("authentication-bg")}}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"account-pages pt-2 pt-sm-5 pb-4 pb-sm-5",children:Object(d.jsx)(a.a,{children:Object(d.jsx)(c.a,{className:"justify-content-center",children:Object(d.jsxs)(o.a,{md:8,lg:6,xl:5,xxl:4,children:[Object(d.jsxs)(i.a,{children:[Object(d.jsx)(i.a.Header,{className:"pt-4 pb-4 text-center bg-primary",children:Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("span",{children:Object(d.jsx)("img",{src:l.a,alt:"",height:"18"})})})}),Object(d.jsx)(i.a.Body,{className:"p-4",children:n})]}),t]})})})}),Object(d.jsx)("footer",{className:"footer footer-alt",children:b("2018 - 2021 \xa9 Hyper - Coderthemes.com")})]})}},664:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(201),a=n.n(r),c=n(54),o=n.n(c),i=n(0),s=n(113);function u(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var l={};function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&l[t[0]]||("string"===typeof t[0]&&(l[t[0]]=new Date),u.apply(void 0,t))}function b(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],a=!!t.options&&t.options.fallbackLng,c=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!o(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!o(r,e)||a&&!o(c,e))))}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return d("i18n.languages were undefined or empty",t.languages),!0;var r=void 0!==t.options.ignoreJSONStructure;return r?t.hasLoadedNamespace(e,{precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):f(e,t,n)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e,t){var n=Object(i.useRef)();return Object(i.useEffect)((function(){n.current=t?n.current:e}),[e,t]),n.current};function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(i.useContext)(s.a)||{},c=r.i18n,o=r.defaultNS,u=n||c||Object(s.d)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new s.b),!u){d("You will need to pass in an i18next instance by using initReactI18next");var l=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[l,{},!1];return f.t=l,f.i18n={},f.ready=!1,f}u.options.react&&void 0!==u.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var j=m(m(m({},Object(s.c)()),u.options.react),t),O=j.useSuspense,x=j.keyPrefix,h=e||o||u.options&&u.options.defaultNS;h="string"===typeof h?[h]:h||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(h);var v=(u.isInitialized||u.initializedStoreOnce)&&h.every((function(e){return p(e,u,j)}));function y(){return u.getFixedT(null,"fallback"===j.nsMode?h:h[0],x)}var N=Object(i.useState)(y),I=a()(N,2),C=I[0],M=I[1],R=h.join(),w=g(R),G=Object(i.useRef)(!0);Object(i.useEffect)((function(){var e=j.bindI18n,t=j.bindI18nStore;function n(){G.current&&M(y)}return G.current=!0,v||O||b(u,h,(function(){G.current&&M(y)})),v&&w&&w!==R&&G.current&&M(y),e&&u&&u.on(e,n),t&&u&&u.store.on(t,n),function(){G.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,n)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,n)}))}}),[u,R]);var A=Object(i.useRef)(!0);Object(i.useEffect)((function(){G.current&&!A.current&&M(y),A.current=!1}),[u]);var S=[C,u,v];if(S.t=C,S.i18n=u,S.ready=v,v)return S;if(!v&&!O)return S;throw new Promise((function(e){b(u,h,(function(){e()}))}))}},863:function(e,t,n){"use strict";t.a=n.p+"static/media/mail_sent.e0685cac.svg"},966:function(e,t,n){"use strict";n.r(t);n(0);var r=n(664),a=n(29),c=n(640),o=n(863),i=n(1);t.default=function(){var e=Object(r.a)().t;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(c.a,{children:Object(i.jsxs)("div",{className:"text-center m-auto",children:[Object(i.jsx)("img",{src:o.a,alt:"mail sent",height:"64"}),Object(i.jsx)("h4",{className:"text-dark-50 text-center mt-4 fw-bold",children:e("Please check your email")}),Object(i.jsx)("p",{className:"text-muted mb-4",children:e("A email has been send to <b>youremail@domain.com</b>. Please check for an email from company and click on the included link to reset your password.")}),Object(i.jsx)("p",{className:"text-center",children:Object(i.jsx)(a.b,{className:"btn btn-primary",to:"/account/login",children:e("Back to Login")})})]})})})}}}]);
//# sourceMappingURL=97.f4cb7127.chunk.js.map