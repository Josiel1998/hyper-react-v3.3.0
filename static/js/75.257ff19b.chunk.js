(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[75],{1053:function(t,e,n){"use strict";var r=n(3),a=n(16),c=n(11),i=n(118),o=n(0);var s=function(t,e){var n=Object(o.useRef)(!0);Object(o.useEffect)((function(){if(!n.current)return t();n.current=!1}),e)},u=n(119),l=n(299),f=n(131),d=n(12),b=n.n(d),p=n(172),v=n(52),O=Object(v.a)("carousel-caption"),j=n(13),h=n(1),m=["as","bsPrefix","className"],x=o.forwardRef((function(t,e){var n=t.as,a=void 0===n?"div":n,i=t.bsPrefix,o=t.className,s=Object(c.a)(t,m),u=b()(o,Object(j.b)(i,"carousel-item"));return Object(h.jsx)(a,Object(r.a)(Object(r.a)({ref:e},s),{},{className:u}))}));x.displayName="CarouselItem";var E=x,N=n(57),g=n(584),k=n(641),y=n(583),C=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"],S={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:Object(h.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:Object(h.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var w=o.forwardRef((function(t,e){var n=Object(p.a)(t,{activeIndex:"onSelect"}),d=n.as,v=void 0===d?"div":d,O=n.bsPrefix,m=n.slide,x=n.fade,E=n.controls,S=n.indicators,w=n.indicatorLabels,T=n.activeIndex,R=n.onSelect,L=n.onSlide,P=n.onSlid,M=n.interval,D=n.keyboard,I=n.onKeyDown,_=n.pause,A=n.onMouseOver,X=n.onMouseOut,F=n.wrap,U=n.touch,H=n.onTouchStart,K=n.onTouchMove,V=n.onTouchEnd,B=n.prevIcon,G=n.prevLabel,J=n.nextIcon,Y=n.nextLabel,Z=n.variant,$=n.className,W=n.children,q=Object(c.a)(n,C),z=Object(j.b)(O,"carousel"),Q=Object(j.c)(),tt=Object(o.useRef)(null),et=Object(o.useState)("next"),nt=Object(a.a)(et,2),rt=nt[0],at=nt[1],ct=Object(o.useState)(!1),it=Object(a.a)(ct,2),ot=it[0],st=it[1],ut=Object(o.useState)(!1),lt=Object(a.a)(ut,2),ft=lt[0],dt=lt[1],bt=Object(o.useState)(T||0),pt=Object(a.a)(bt,2),vt=pt[0],Ot=pt[1];Object(o.useEffect)((function(){ft||T===vt||(tt.current?at(tt.current):at((T||0)>vt?"next":"prev"),m&&dt(!0),Ot(T||0))}),[T,ft,vt,m]),Object(o.useEffect)((function(){tt.current&&(tt.current=null)}));var jt,ht=0;Object(N.a)(W,(function(t,e){++ht,e===T&&(jt=t.props.interval)}));var mt=Object(u.a)(jt),xt=Object(o.useCallback)((function(t){if(!ft){var e=vt-1;if(e<0){if(!F)return;e=ht-1}tt.current="prev",null==R||R(e,t)}}),[ft,vt,R,F,ht]),Et=Object(i.a)((function(t){if(!ft){var e=vt+1;if(e>=ht){if(!F)return;e=0}tt.current="next",null==R||R(e,t)}})),Nt=Object(o.useRef)();Object(o.useImperativeHandle)(e,(function(){return{element:Nt.current,prev:xt,next:Et}}));var gt=Object(i.a)((function(){!document.hidden&&function(t){if(!t||!t.style||!t.parentNode||!t.parentNode.style)return!1;var e=getComputedStyle(t);return"none"!==e.display&&"hidden"!==e.visibility&&"none"!==getComputedStyle(t.parentNode).display}(Nt.current)&&(Q?xt():Et())})),kt="next"===rt?"start":"end";s((function(){m||(null==L||L(vt,kt),null==P||P(vt,kt))}),[vt]);var yt="".concat(z,"-item-").concat(rt),Ct="".concat(z,"-item-").concat(kt),St=Object(o.useCallback)((function(t){Object(k.a)(t),null==L||L(vt,kt)}),[L,vt,kt]),wt=Object(o.useCallback)((function(){dt(!1),null==P||P(vt,kt)}),[P,vt,kt]),Tt=Object(o.useCallback)((function(t){if(D&&!/input|textarea/i.test(t.target.tagName))switch(t.key){case"ArrowLeft":return t.preventDefault(),void(Q?Et(t):xt(t));case"ArrowRight":return t.preventDefault(),void(Q?xt(t):Et(t))}null==I||I(t)}),[D,I,xt,Et,Q]),Rt=Object(o.useCallback)((function(t){"hover"===_&&st(!0),null==A||A(t)}),[_,A]),Lt=Object(o.useCallback)((function(t){st(!1),null==X||X(t)}),[X]),Pt=Object(o.useRef)(0),Mt=Object(o.useRef)(0),Dt=Object(l.a)(),It=Object(o.useCallback)((function(t){Pt.current=t.touches[0].clientX,Mt.current=0,"hover"===_&&st(!0),null==H||H(t)}),[_,H]),_t=Object(o.useCallback)((function(t){t.touches&&t.touches.length>1?Mt.current=0:Mt.current=t.touches[0].clientX-Pt.current,null==K||K(t)}),[K]),At=Object(o.useCallback)((function(t){if(U){var e=Mt.current;Math.abs(e)>40&&(e>0?xt(t):Et(t))}"hover"===_&&Dt.set((function(){st(!1)}),M||void 0),null==V||V(t)}),[U,_,xt,Et,Dt,M,V]),Xt=null!=M&&!ot&&!ft,Ft=Object(o.useRef)();Object(o.useEffect)((function(){var t,e;if(Xt){var n=Q?xt:Et;return Ft.current=window.setInterval(document.visibilityState?gt:n,null!=(t=null!=(e=mt.current)?e:M)?t:void 0),function(){null!==Ft.current&&clearInterval(Ft.current)}}}),[Xt,xt,Et,mt,M,gt,Q]);var Ut=Object(o.useMemo)((function(){return S&&Array.from({length:ht},(function(t,e){return function(t){null==R||R(e,t)}}))}),[S,ht,R]);return Object(h.jsxs)(v,Object(r.a)(Object(r.a)({ref:Nt},q),{},{onKeyDown:Tt,onMouseOver:Rt,onMouseOut:Lt,onTouchStart:It,onTouchMove:_t,onTouchEnd:At,className:b()($,z,m&&"slide",x&&"".concat(z,"-fade"),Z&&"".concat(z,"-").concat(Z)),children:[S&&Object(h.jsx)("div",{className:"".concat(z,"-indicators"),children:Object(N.c)(W,(function(t,e){return Object(h.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=w&&w.length?w[e]:"Slide ".concat(e+1),className:e===vt?"active":void 0,onClick:Ut?Ut[e]:void 0,"aria-current":e===vt},e)}))}),Object(h.jsx)("div",{className:"".concat(z,"-inner"),children:Object(N.c)(W,(function(t,e){var n=e===vt;return m?Object(h.jsx)(y.a,{in:n,onEnter:n?St:void 0,onEntered:n?wt:void 0,addEndListener:g.a,children:function(e,a){return o.cloneElement(t,Object(r.a)(Object(r.a)({},a),{},{className:b()(t.props.className,n&&"entered"!==e&&yt,("entered"===e||"exiting"===e)&&"active",("entering"===e||"exiting"===e)&&Ct)}))}}):o.cloneElement(t,{className:b()(t.props.className,n&&"active")})}))}),E&&Object(h.jsxs)(h.Fragment,{children:[(F||0!==T)&&Object(h.jsxs)(f.a,{className:"".concat(z,"-control-prev"),onClick:xt,children:[B,G&&Object(h.jsx)("span",{className:"visually-hidden",children:G})]}),(F||T!==ht-1)&&Object(h.jsxs)(f.a,{className:"".concat(z,"-control-next"),onClick:Et,children:[J,Y&&Object(h.jsx)("span",{className:"visually-hidden",children:Y})]})]})]}))}));w.displayName="Carousel",w.defaultProps=S;e.a=Object.assign(w,{Caption:O,Item:E})},147:function(t,e,n){"use strict";e.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},150:function(t,e,n){"use strict";var r=n(3),a=n(11),c=n(12),i=n.n(c),o=n(0),s=n(13),u=n(1),l=["bsPrefix","className","as"],f=o.forwardRef((function(t,e){var n=t.bsPrefix,c=t.className,o=t.as,f=void 0===o?"div":o,d=Object(a.a)(t,l),b=Object(s.b)(n,"row"),p=Object(s.a)(),v="".concat(b,"-cols"),O=[];return p.forEach((function(t){var e,n=d[t];delete d[t],e=null!=n&&"object"===typeof n?n.cols:n;var r="xs"!==t?"-".concat(t):"";null!=e&&O.push("".concat(v).concat(r,"-").concat(e))})),Object(u.jsx)(f,Object(r.a)(Object(r.a)({ref:e},d),{},{className:i.a.apply(void 0,[c,b].concat(O))}))}));f.displayName="Row",e.a=f},151:function(t,e,n){"use strict";function r(t){return t&&t.ownerDocument||document}n.d(e,"a",(function(){return r}))},156:function(t,e,n){"use strict";var r=n(3),a=n(11),c=n(12),i=n.n(c),o=n(0),s=n(13),u=n(131),l=n(1),f=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],d=o.forwardRef((function(t,e){var n=t.bsPrefix,c=t.active,o=t.children,d=t.className,b=t.as,p=void 0===b?"li":b,v=t.linkAs,O=void 0===v?u.a:v,j=t.linkProps,h=t.href,m=t.title,x=t.target,E=Object(a.a)(t,f),N=Object(s.b)(n,"breadcrumb-item");return Object(l.jsx)(p,Object(r.a)(Object(r.a)({ref:e},E),{},{className:i()(N,d,{active:c}),"aria-current":c?"page":void 0,children:c?o:Object(l.jsx)(O,Object(r.a)(Object(r.a)({},j),{},{href:h,title:m,target:x,children:o}))}))}));d.displayName="BreadcrumbItem",d.defaultProps={active:!1,linkProps:{}};var b=d,p=["bsPrefix","className","listProps","children","label","as"],v=o.forwardRef((function(t,e){var n=t.bsPrefix,c=t.className,o=t.listProps,u=t.children,f=t.label,d=t.as,b=void 0===d?"nav":d,v=Object(a.a)(t,p),O=Object(s.b)(n,"breadcrumb");return Object(l.jsx)(b,Object(r.a)(Object(r.a)({"aria-label":f,className:c,ref:e},v),{},{children:Object(l.jsx)("ol",Object(r.a)(Object(r.a)({},o),{},{className:i()(O,null==o?void 0:o.className),children:u}))}))}));v.displayName="Breadcrumb",v.defaultProps={label:"breadcrumb",listProps:{}};e.a=Object.assign(v,{Item:b})},166:function(t,e,n){"use strict";var r=n(176),a=n(195);e.a=function(t,e,n,c){return Object(r.a)(t,e,n,c),function(){Object(a.a)(t,e,n,c)}}},176:function(t,e,n){"use strict";var r=n(147),a=!1,c=!1;try{var i={get passive(){return a=!0},get once(){return c=a=!0}};r.a&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(o){}e.a=function(t,e,n,r){if(r&&"boolean"!==typeof r&&!c){var i=r.once,o=r.capture,s=n;!c&&i&&(s=n.__once||function t(r){this.removeEventListener(e,t,o),n.call(this,r)},n.__once=s),t.addEventListener(e,s,a?r:o)}t.addEventListener(e,n,r)}},190:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0);function a(t){var e=function(t){var e=Object(r.useRef)(t);return e.current=t,e}(t);Object(r.useEffect)((function(){return function(){return e.current()}}),[])}},195:function(t,e,n){"use strict";e.a=function(t,e,n,r){var a=r&&"boolean"!==typeof r?r.capture:r;t.removeEventListener(e,n,a),n.__once&&t.removeEventListener(e,n.__once,a)}},243:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(39),a=n.n(r);function c(t){return t&&"setState"in t?a.a.findDOMNode(t):null!=t?t:null}},244:function(t,e,n){"use strict";var r=n(151);function a(t,e){return function(t){var e=Object(r.a)(t);return e&&e.defaultView||window}(t).getComputedStyle(t,e)}var c=/([A-Z])/g;var i=/^ms-/;function o(t){return function(t){return t.replace(c,"-$1").toLowerCase()}(t).replace(i,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;e.a=function(t,e){var n="",r="";if("string"===typeof e)return t.style.getPropertyValue(o(e))||a(t).getPropertyValue(o(e));Object.keys(e).forEach((function(a){var c=e[a];c||0===c?!function(t){return!(!t||!s.test(t))}(a)?n+=o(a)+": "+c+";":r+=a+"("+c+") ":t.style.removeProperty(o(a))})),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}},299:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),a=n(125),c=n(190),i=Math.pow(2,31)-1;function o(t,e,n){var r=n-Date.now();t.current=r<=i?setTimeout(e,r):setTimeout((function(){return o(t,e,n)}),i)}function s(){var t=Object(a.a)(),e=Object(r.useRef)();return Object(c.a)((function(){return clearTimeout(e.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(e.current)};return{set:function(r,a){void 0===a&&(a=0),t()&&(n(),a<=i?e.current=setTimeout(r,a):o(e,r,Date.now()+a))},clear:n}}),[])}},490:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return b})),n.d(e,"a",(function(){return p})),n.d(e,"d",(function(){return v}));var r=n(28),a=n(568),c=n(0),i=n.n(c),o=n(39),s=n.n(o),u=!1,l=i.a.createContext(null),f="unmounted",d="exited",b="entering",p="entered",v="exiting",O=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var a,c=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?c?(a=d,r.appearStatus=b):a=p:a=e.unmountOnExit||e.mountOnEnter?f:d,r.state={status:a},r.nextCallback=null,r}Object(a.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===f?{status:d}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==b&&n!==p&&(e=b):n!==b&&n!==p||(e=v)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!==typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===b?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===d&&this.setState({status:f})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,a=this.props.nodeRef?[r]:[s.a.findDOMNode(this),r],c=a[0],i=a[1],o=this.getTimeouts(),l=r?o.appear:o.enter;!t&&!n||u?this.safeSetState({status:p},(function(){e.props.onEntered(c)})):(this.props.onEnter(c,i),this.safeSetState({status:b},(function(){e.props.onEntering(c,i),e.onTransitionEnd(l,(function(){e.safeSetState({status:p},(function(){e.props.onEntered(c,i)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:s.a.findDOMNode(this);e&&!u?(this.props.onExit(r),this.safeSetState({status:v},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:d},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:d},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:s.a.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],c=a[0],i=a[1];this.props.addEndListener(c,i)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===f)return null;var e=this.props,n=e.children,a=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(r.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.a.createElement(l.Provider,{value:null},"function"===typeof n?n(t,a):i.a.cloneElement(i.a.Children.only(n),a))},e}(i.a.Component);function j(){}O.contextType=l,O.propTypes={},O.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:j,onEntering:j,onEntered:j,onExit:j,onExiting:j,onExited:j},O.UNMOUNTED=f,O.EXITED=d,O.ENTERING=b,O.ENTERED=p,O.EXITING=v;e.e=O},566:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(244),a=n(166);function c(t,e,n){void 0===n&&(n=5);var r=!1,c=setTimeout((function(){r||function(t,e,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),t){var a=document.createEvent("HTMLEvents");a.initEvent(e,n,r),t.dispatchEvent(a)}}(t,"transitionend",!0)}),e+n),i=Object(a.a)(t,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(c),i()}}function i(t,e,n,i){null==n&&(n=function(t){var e=Object(r.a)(t,"transitionDuration")||"",n=-1===e.indexOf("ms")?1e3:1;return parseFloat(e)*n}(t)||0);var o=c(t,n,i),s=Object(a.a)(t,"transitionend",e);return function(){o(),s()}}},583:function(t,e,n){"use strict";var r=n(3),a=n(11),c=n(0),i=n.n(c),o=n(490),s=n(148),u=n(243),l=n(1),f=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],d=i.a.forwardRef((function(t,e){var n=t.onEnter,d=t.onEntering,b=t.onEntered,p=t.onExit,v=t.onExiting,O=t.onExited,j=t.addEndListener,h=t.children,m=t.childRef,x=Object(a.a)(t,f),E=Object(c.useRef)(null),N=Object(s.a)(E,m),g=function(t){N(Object(u.a)(t))},k=function(t){return function(e){t&&E.current&&t(E.current,e)}},y=Object(c.useCallback)(k(n),[n]),C=Object(c.useCallback)(k(d),[d]),S=Object(c.useCallback)(k(b),[b]),w=Object(c.useCallback)(k(p),[p]),T=Object(c.useCallback)(k(v),[v]),R=Object(c.useCallback)(k(O),[O]),L=Object(c.useCallback)(k(j),[j]);return Object(l.jsx)(o.e,Object(r.a)(Object(r.a)({ref:e},x),{},{onEnter:y,onEntered:S,onEntering:C,onExit:w,onExited:R,onExiting:T,addEndListener:L,nodeRef:E,children:"function"===typeof h?function(t,e){return h(t,Object(r.a)(Object(r.a)({},e),{},{ref:g}))}:i.a.cloneElement(h,{ref:g})}))}));e.a=d},584:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(244),a=n(566);function c(t,e){var n=Object(r.a)(t,e)||"",a=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*a}function i(t,e){var n=c(t,"transitionDuration"),r=c(t,"transitionDelay"),i=Object(a.a)(t,(function(n){n.target===t&&(i(),e(n))}),n+r)}},641:function(t,e,n){"use strict";function r(t){t.offsetHeight}n.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=75.257ff19b.chunk.js.map