(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9192],{25399:function(n,t,e){Promise.resolve().then(e.bind(e,18723))},55784:function(n,t,e){"use strict";e.d(t,{h:function(){return i.h},n:function(){return r.n}});var r=e(33861),i=e(34906)},34906:function(n,t,e){"use strict";e.d(t,{h:function(){return a}});var r=e(98780),i=e(98639),o=e(38527);let a=n=>{let t=(0,o.k67)(),e=(0,i.useMemo)(()=>(0,r.Z)(()=>{if(n&&!t.canBack){t.replaceState({href:n});return}null==t||t.back()},200),[t,n]),a=(0,i.useMemo)(()=>(0,r.Z)(()=>{null==t||t.forward()},200),[t]);return{canBack:!!n||t.canBack,canForward:t.canForward,moveBack:e,moveForward:a}}},33861:function(n,t,e){"use strict";e.d(t,{n:function(){return g}});var r=e(9753),i=e(60836),o=e(9544),a=e(98639),s=e(80542),c=e(39513),u=e(28852),l=e(34906),f=e(68042),d=e.n(f);let g=(0,o.Pi)(n=>{let{withBackwardControl:t=!0,withForwardControl:e=!0,className:o,withBackwardFallback:f,buttonSize:g="xxs"}=n,{formatMessage:_}=(0,s.Z)(),{canBack:h,canForward:m,moveBack:v,moveForward:p}=(0,l.h)(f),x=(0,a.useRef)(null),W=(0,a.useCallback)(n=>{n.stopPropagation(),v()},[v]),k=(0,a.useCallback)(n=>{n.stopPropagation(),p()},[p]);return(0,a.useEffect)(()=>{x.current&&h&&x.current.focus()},[h]),(0,r.jsxs)("div",{className:(0,i.W)(d().root,o),children:[t&&(0,r.jsx)(c.z,{ref:x,"aria-label":_({id:"navigation.go-back"}),radius:"round",disabled:!h,size:g,icon:(0,r.jsx)(u.J,{size:"xxs",variant:"arrowLeft"}),onClick:W}),e&&(0,r.jsx)(c.z,{"aria-label":_({id:"navigation.go-forward"}),radius:"round",disabled:!m,size:g,icon:(0,r.jsx)(u.J,{size:"xxs",variant:"arrowRight"}),onClick:k})]})})},18723:function(n,t,e){"use strict";e.d(t,{SomethingWentWrong:function(){return h}});var r=e(9753),i=e(60836),o=e(9544),a=e(98639),s=e(31014),c=e(39513),u=e(28852),l=e(2570),f=e(55784),d=e(38527),g=e(88178),_=e.n(g);let h=(0,o.Pi)(n=>{let{className:t,withBackwardControl:e=!0}=n,o=(0,a.useCallback)(()=>{window.location.href="/"},[]),{contentRef:g}=(0,d.$Y6)();return(0,r.jsxs)("div",{className:(0,i.W)(_().root,t),children:[e&&(0,r.jsx)(f.n,{withBackwardFallback:"/",className:(0,i.W)(_().navigation,{[_().navigation_desktop]:!g}),withForwardControl:!1}),(0,r.jsxs)("div",{className:(0,i.W)(_().content,{[_().content_shrink]:!e}),children:[(0,r.jsx)(u.J,{className:_().icon,variant:"attention",size:"xxl"}),(0,r.jsx)(l.Heading,{className:(0,i.W)(_().title,_().important),variant:"h3",size:"xs",children:(0,r.jsx)(s.Z,{id:"error-messages.something-went-wrong"})}),(0,r.jsxs)(l.Caption,{className:(0,i.W)(_().text,_().important),variant:"span",type:"text",size:"l",weight:"normal",children:[!1,(0,r.jsx)(s.Z,{id:"page-error.try-to-restart-app"})]}),(0,r.jsx)(c.z,{onClick:o,className:_().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,r.jsxs)(l.Caption,{type:"controls",variant:"span",size:"m",children:[!1,(0,r.jsx)(s.Z,{id:"page-error.restart-app-button"})]})})]})]})})},68042:function(n){n.exports={root:"NavigationControls_root__uCVfX"}},88178:function(n){n.exports={root:"SomethingWentWrong_root__d77VJ",content:"SomethingWentWrong_content__8_YkJ",content_shrink:"SomethingWentWrong_content_shrink__GOR_7",navigation:"SomethingWentWrong_navigation__a8eMG",navigation_desktop:"SomethingWentWrong_navigation_desktop__WGGBX",icon:"SomethingWentWrong_icon__f15_y",title:"SomethingWentWrong_title__Kn89B",important:"SomethingWentWrong_important__namIb",text:"SomethingWentWrong_text__KEfGc",button:"SomethingWentWrong_button__dmh7t"}},98780:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});var r=e(51866),i=e(12933),o=function(){return i.Z.Date.now()},a=e(87882),s=Math.max,c=Math.min,u=function(n,t,e){var i,u,l,f,d,g,_=0,h=!1,m=!1,v=!0;if("function"!=typeof n)throw TypeError("Expected a function");function p(t){var e=i,r=u;return i=u=void 0,_=t,f=n.apply(r,e)}function x(n){var e=n-g,r=n-_;return void 0===g||e>=t||e<0||m&&r>=l}function W(){var n,e,r,i=o();if(x(i))return k(i);d=setTimeout(W,(n=i-g,e=i-_,r=t-n,m?c(r,l-e):r))}function k(n){return(d=void 0,v&&i)?p(n):(i=u=void 0,f)}function b(){var n,e=o(),r=x(e);if(i=arguments,u=this,g=e,r){if(void 0===d)return _=n=g,d=setTimeout(W,t),h?p(n):f;if(m)return clearTimeout(d),d=setTimeout(W,t),p(g)}return void 0===d&&(d=setTimeout(W,t)),f}return t=(0,a.Z)(t)||0,(0,r.Z)(e)&&(h=!!e.leading,l=(m="maxWait"in e)?s((0,a.Z)(e.maxWait)||0,t):l,v="trailing"in e?!!e.trailing:v),b.cancel=function(){void 0!==d&&clearTimeout(d),_=0,i=g=u=d=void 0},b.flush=function(){return void 0===d?f:k(o())},b}},41279:function(n,t,e){"use strict";var r=e(30014),i=e(2495);t.Z=function(n){return"symbol"==typeof n||(0,i.Z)(n)&&"[object Symbol]"==(0,r.Z)(n)}},87882:function(n,t,e){"use strict";e.d(t,{Z:function(){return g}});var r=/\s/,i=function(n){for(var t=n.length;t--&&r.test(n.charAt(t)););return t},o=/^\s+/,a=e(51866),s=e(41279),c=0/0,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,d=parseInt,g=function(n){if("number"==typeof n)return n;if((0,s.Z)(n))return c;if((0,a.Z)(n)){var t,e="function"==typeof n.valueOf?n.valueOf():n;n=(0,a.Z)(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=(t=n)?t.slice(0,i(t)+1).replace(o,""):t;var r=l.test(n);return r||f.test(n)?d(n.slice(2),r?2:8):u.test(n)?c:+n}}},function(n){n.O(0,[5219,4500,5055,2498,7873,919,8527,2171,361,1744],function(){return n(n.s=25399)}),_N_E=n.O()}]);