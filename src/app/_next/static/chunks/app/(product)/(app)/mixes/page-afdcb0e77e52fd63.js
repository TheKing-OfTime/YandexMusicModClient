(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9813],{87698:function(e,t,i){Promise.resolve().then(i.bind(i,58140))},58140:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return p}});var n=i(9753),r=i(74717),s=i(72636),o=i(9544),a=i(98639),l=i(80542),c=i(31014),u=i(41055),d=i(2570),m=i(21901),_=i(68106),x=i(36084),g=i(34152),h=i(3084),v=i(95870),N=i.n(v);let f=(0,o.Pi)(()=>{let{mixes:e}=(0,g.oR4)(),[t,i]=(0,g.zU3)(),s=(0,g.k67)(),{formatMessage:o}=(0,l.Z)();return(e.isNotFound&&(0,r.notFound)(),e.loadingState===g.Gui.IDLE&&(0,a.use)(e.getMixes(!0)),(0,g.NOh)(e.loadingState===g.Gui.RESOLVE),e.loadingState===g.Gui.REJECT)?(0,n.jsx)(_.D,{}):(0,n.jsxs)(x.I7,{scrollElement:t,outerTitle:o({id:"entity-names.mixes"}),children:[(0,n.jsx)(h.h4,{variant:"text",withForwardControl:!1,withBackwardControl:s.canBack,children:(0,n.jsx)(d.Heading,{variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:(0,n.jsx)(c.Z,{id:"entity-names.mixes"})})}),(0,n.jsx)(u.t,{ref:i,className:N().root,containerClassName:N().scrollableContainer,children:(0,n.jsxs)("div",{className:N().container,children:[(0,n.jsx)(m.RB,{isShimmerVisible:e.isLoading,isShimmerActive:!0,mixes:e.items,shimmerCount:10}),(0,n.jsx)(h.$_,{className:N().footer})]})})]})});var p=()=>{let e=(0,r.useSearchParams)().get("navigationId");return e?(0,n.jsx)(s.rx,{navigationId:e}):(0,n.jsx)(f,{})}},76154:function(e,t,i){"use strict";i.d(t,{mH:function(){return o.Genre},fm:function(){return s},uG:function(){return a}});var n=i(42288);let r=n.V5.model("GenreListItemSubGenreModel",{tag:n.V5.string,title:n.V5.string}),s=n.V5.model("GenreListItemModel",{tag:n.V5.string,title:n.V5.string,subGenres:n.V5.array(r)});var o=i(86555);let a=e=>({tag:e.tag,title:e.title,subGenres:(0,n.pj)((e.leaves||[]).map(e=>({tag:e.tag,title:e.title})))})},86555:function(e,t,i){"use strict";i.d(t,{Genre:function(){return c}});var n=i(9753),r=i(9544),s=i(2570),o=i(3084),a=i(78914),l=i.n(a);let c=(0,r.Pi)(e=>{let{tag:t,title:i,subGenres:r}=e;return(0,n.jsxs)("div",{className:l().root,children:[(0,n.jsx)(o.rU,{className:l().link,href:"/genre/".concat(t),children:(0,n.jsx)(s.Heading,{variant:"h2",size:"m",lineClamp:1,className:l().linkTitle,children:i})}),r.length>0&&(0,n.jsx)("div",{className:l().list,children:r.map(e=>(0,n.jsx)("div",{className:l().item,children:(0,n.jsx)(o.rU,{className:l().link,href:"/genre/".concat(e.tag),children:(0,n.jsx)(s.Caption,{variant:"span",size:"l",lineClamp:1,className:l().linkTitle,children:e.title})})},e.tag))})]})})},48606:function(e,t,i){"use strict";i.d(t,{GX:function(){return o.MixCard},zn:function(){return s},Fh:function(){return a}});var n=i(42288),r=i(40193);let s=n.V5.model("MixItem",{id:n.V5.string,title:n.V5.string,weblink:n.V5.string,covers:n.V5.maybe(n.V5.array(n.V5.string)),imagesLayoutType:n.V5.enumeration(Object.values(r.nN))});var o=i(18073);let a=e=>({id:e.id,title:e.title,weblink:e.action.weblink,covers:(0,n.pj)(e.covers||[]),imagesLayoutType:e.style.imagesLayoutType})},18073:function(e,t,i){"use strict";i.d(t,{MixCard:function(){return _}});var n=i(9753),r=i(60836),s=i(9544),o=i(40193),a=i(86939),l=i(12404),c=i(2570),u=i(3084),d=i(86678),m=i.n(d);let _=(0,s.Pi)(e=>{let{className:t,title:i,weblink:s,covers:d=[],coverSize:_=100,imagesLayoutType:x}=e;return(0,n.jsx)(u.rU,{href:s,children:(0,n.jsxs)(l.Paper,{className:(0,r.W)(m().root,t),radius:"l",children:[(0,n.jsx)("div",{className:m().header,children:(0,n.jsx)(c.Heading,{variant:"h4",size:"xs",weight:"bold",className:m().title,lineClamp:2,children:i})}),(0,n.jsxs)("div",{className:(0,r.W)(m().covers,{[m().covers_radial]:x===o.nN.RADIAL,[m().covers_stack]:x===o.nN.STACK}),children:[(0,n.jsx)(a.Image,{src:d[2],withAvatarReplace:!0,fit:"contain",className:m().cover,size:_}),(0,n.jsx)(a.Image,{src:d[1],withAvatarReplace:!0,fit:"contain",className:m().cover,size:_}),(0,n.jsx)(a.Image,{src:d[0],withAvatarReplace:!0,fit:"contain",className:m().cover,size:_})]})]})})})},36084:function(e,t,i){"use strict";i.d(t,{I7:function(){return g},b4:function(){return a},at:function(){return h}});var n=i(9753),r=i(98639),s=i.t(r,2),o=i(3084);let a=e=>{let{children:t,title:i,className:s}=e,{setTitleElement:a,setTitle:l}=(0,r.useContext)(o.pI),c=(0,r.useRef)(null);return(0,r.useEffect)(()=>{(null==c?void 0:c.current)&&a(c),i&&l(i)},[c,i,a,l]),(0,r.useEffect)(()=>()=>{l("")},[l]),(0,n.jsx)("div",{ref:c,className:s,children:t})};var l=i(9544),c={810:e=>{e.exports=s}},u={},d={};(()=>{Object.defineProperty(d,"__esModule",{value:!0}),d.useScroll=void 0;let e=function e(t){var i=u[t];if(void 0!==i)return i.exports;var n=u[t]={exports:{}};return c[t](n,n.exports,e),n.exports}(810);d.useScroll=t=>{(0,e.useEffect)(()=>{let e={capture:!0,passive:!0};return window.addEventListener("scroll",t,e),()=>{window.removeEventListener("scroll",t,e)}},[t])}})(),d.__esModule;var m=d.useScroll,_=i(34152);let x=e=>{let{element:t,scrollTop:i,isMobile:n}=e,r=.4*t.clientHeight;return i+(n?56:72)>=t.offsetTop+r},g=(0,l.Pi)(e=>{let{children:t,scrollElement:i,outerTitle:s="",headerElement:a,headerThreshold:l}=e,[c,u]=(0,r.useState)(s),[d,g]=(0,r.useState)(null),[h,v]=(0,r.useState)(!1),[N,f]=(0,r.useState)(!1),{settings:p}=(0,_.oR4)(),j=p.layout===_.t8m.Mobile;(0,r.useLayoutEffect)(()=>{u(s)},[s]);let S=(0,r.useCallback)(()=>{if(!i)return;let e=null!=l?l:10,t=a?Number(a.offsetTop)-e:e;t<0&&(t=0),f(i.scrollTop>t),(null==d?void 0:d.current)&&v(x({element:null==d?void 0:d.current,scrollTop:i.scrollTop,isMobile:j}))},[i,l,a,d,j]);(0,r.useEffect)(()=>{i&&(null==i?void 0:i.scrollTop)!==0||f(!1)},[i,null==i?void 0:i.scrollTop]),m(S);let C=(0,r.useMemo)(()=>({title:c,setTitle:u,titleElement:d,scrollElement:i,setTitleElement:g,isScrolledTitle:h,isScrolling:N}),[c,h,d,i,N]);return(0,n.jsx)(o.pI.Provider,{value:C,children:t})});i(66414);let h=(e,t)=>((0,_.uK4)().get(_.Xt8),[(0,r.useMemo)(()=>{if(void 0!==t){let i=t-17;return{"--average-color-background":e,transform:"translateY(".concat(t>=17?0:i,"px)"),opacity:1}}return{}},[t,!1,e]),(0,r.useMemo)(()=>({"--average-color-background":e}),[e])])},55784:function(e,t,i){"use strict";i.d(t,{h:function(){return r.h},n:function(){return n.n}});var n=i(33861),r=i(34906)},72636:function(e,t,i){"use strict";i.d(t,{rx:function(){return n.GenresPage},EU:function(){return l}});var n=i(95002);i(49535);var r=i(42288),s=i(10542),o=i(76154),a=i(34152);let l=r.V5.model("GenresPageModel",{title:r.V5.maybeNull(r.V5.string),items:r.V5.array(o.fm),loadingState:r.V5.enumeration(Object.values(a.Gui)),errorStatusCode:r.V5.maybeNull(r.V5.number)}).views(e=>({get isLoading(){return e.loadingState===a.Gui.IDLE||e.loadingState===a.Gui.PENDING},get isNotFound(){let t=e.loadingState===a.Gui.RESOLVE&&0===e.items.length;return e.errorStatusCode===s.CN.NOT_FOUND||t}})).actions(e=>({getData:(0,r.ls)(function*(t){let{landing3Resource:i,modelActionsLogger:n}=(0,r.dU)(e);if(e.loadingState!==a.Gui.PENDING)try{e.loadingState=a.Gui.PENDING;let n=(yield i.getMetatags({})).trees.find(e=>e.navigationId===t);if(!n){e.errorStatusCode=s.CN.NOT_FOUND;return}e.title=n.title,e.items=(0,r.pj)(n.leaves.map(o.uG)),e.loadingState!==a.Gui.IDLE&&(e.loadingState=a.Gui.RESOLVE)}catch(t){n.error(t),t instanceof s.du&&(t.statusCode===s.CN.NOT_FOUND||t.statusCode===s.CN.BAD_REQUEST)&&(e.errorStatusCode=s.CN.NOT_FOUND),e.loadingState!==a.Gui.IDLE&&(e.loadingState=a.Gui.REJECT)}}),reset(){e.loadingState=a.Gui.IDLE,e.title=null,e.items=(0,r.pj)([]),e.errorStatusCode=null}}))},49535:function(e,t,i){"use strict";i.d(t,{GenresNotFoundPage:function(){return s}});var n=i(9753),r=i(23948);let s=()=>(0,n.jsx)(r.T,{})},95002:function(e,t,i){"use strict";i.d(t,{GenresPage:function(){return h}});var n=i(9753),r=i(9544),s=i(74717),o=i(98639),a=i(41055),l=i(2570),c=i(68106),u=i(36084),d=i(76154),m=i(34152),_=i(3084),x=i(69836),g=i.n(x);let h=(0,r.Pi)(e=>{let{navigationId:t}=e,{genres:i}=(0,m.oR4)(),[r,x]=(0,m.zU3)(),h=(0,m.k67)();return((0,o.useEffect)(()=>()=>{i.reset()},[i,t]),i.isNotFound&&(0,s.notFound)(),t&&i.loadingState===m.Gui.IDLE&&(0,o.use)(i.getData(t)),(0,m.NOh)(i.loadingState===m.Gui.RESOLVE),i.loadingState===m.Gui.REJECT)?(0,n.jsx)(c.D,{}):(0,n.jsxs)(u.I7,{scrollElement:r,outerTitle:i.title,children:[(0,n.jsx)(_.h4,{variant:"text",withForwardControl:!1,withBackwardControl:h.canBack,children:(0,n.jsx)(l.Heading,{variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:i.title})}),(0,n.jsx)(a.t,{className:g().root,containerClassName:g().content,ref:x,children:(0,n.jsx)("div",{className:g().list,children:i.items.map(e=>(0,n.jsx)(d.mH,{tag:e.tag,title:e.title,subGenres:e.subGenres},e.tag))})})]})})},21901:function(e,t,i){"use strict";i.d(t,{JG:function(){return n.Mixes},RB:function(){return r.MixesGrid},ZP:function(){return d}});var n=i(8564),r=i(54140),s=i(42288),o=i(10542),a=i(40193),l=i(48606),c=i(34152);let u=e=>({items:(0,s.pj)(e.items.map(e=>(0,l.Fh)(e.data)))}),d=s.V5.model("Mixes",{loadingState:s.V5.enumeration(Object.values(c.Gui)),items:s.V5.array(l.zn),errorStatusCode:s.V5.maybeNull(s.V5.number)}).actions(e=>({getMixes:(0,s.ls)(function*(t){let{landingResource:i,modelActionsLogger:n}=(0,s.dU)(e);if(e.loadingState!==c.Gui.PENDING)try{e.loadingState=c.Gui.PENDING;let n=yield i.getBlock({uri:"/landing/block/mixes",fullList:t},a.gQ.MIXES);e.items=u(n).items,e.loadingState=c.Gui.RESOLVE}catch(t){n.error(t),t instanceof o.du&&(t.statusCode===o.CN.NOT_FOUND||t.statusCode===o.CN.BAD_REQUEST)&&(e.errorStatusCode=o.CN.NOT_FOUND),e.loadingState!==c.Gui.IDLE&&(e.loadingState=c.Gui.REJECT)}})})).views(e=>({get isLoading(){return e.loadingState===c.Gui.IDLE||e.loadingState===c.Gui.PENDING},get isRejected(){return e.loadingState===c.Gui.REJECT},get isNotFound(){let t=e.loadingState===c.Gui.RESOLVE&&0===e.items.length;return e.errorStatusCode===o.CN.NOT_FOUND||t}}))},8564:function(e,t,i){"use strict";i.d(t,{Mixes:function(){return g}});var n=i(9753),r=i(9544),s=i(98639),o=i(34152),a=i(80542),l=i(5993),c=i(48606),u=i(3084),d=i(66051),m=i.n(d);let _=(0,r.Pi)(e=>{let{isShimmerVisible:t,isShimmerActive:i,mixes:r}=e,{formatMessage:o}=(0,a.Z)(),d=(0,s.useMemo)(()=>t?(0,u.Cl)({isActive:i,withInfo:!1}):r.map(e=>(0,n.jsx)(c.GX,{title:e.title,weblink:e.weblink,covers:e.covers,coverSize:80,imagesLayoutType:e.imagesLayoutType},e.id)),[i,t,r]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.ti,{className:m().carouselHeader,title:o({id:"entity-names.mixes"}),titleSize:"xs",viewAllActionLink:"/mixes"}),(0,n.jsx)(l.l,{className:m().carouselBlock,itemClassName:m().mixItem,children:d})]})});var x=i(54140);let g=(0,r.Pi)(()=>{let{settings:e,search:t}=(0,o.oR4)(),i=e.layout===o.t8m.Mobile;return(t.mixes.loadingState===o.Gui.IDLE&&(0,s.use)(t.mixes.getMixes(!1)),i)?(0,n.jsx)(_,{isShimmerVisible:t.mixes.isLoading||t.mixes.isRejected,isShimmerActive:t.mixes.isLoading,mixes:t.mixes.items}):(0,n.jsx)(x.MixesGrid,{isShimmerVisible:t.mixes.isLoading||t.mixes.isRejected,isShimmerActive:t.mixes.isLoading,mixes:t.mixes.items,withTitle:!0})})},54140:function(e,t,i){"use strict";i.d(t,{MixesGrid:function(){return m}});var n=i(9753),r=i(9544),s=i(98639),o=i(31014),a=i(2570),l=i(48606),c=i(3084),u=i(8104),d=i.n(u);let m=(0,r.Pi)(e=>{let{isShimmerVisible:t,isShimmerActive:i,withTitle:r,mixes:u,shimmerCount:m=5}=e,_=(0,s.useMemo)(()=>t?(0,n.jsx)(c.Wm,{isActive:i,round:!1,centered:!1,withInfo:!1,count:m}):u.map(e=>(0,n.jsx)(l.GX,{title:e.title,weblink:e.weblink,covers:e.covers,imagesLayoutType:e.imagesLayoutType},e.id)),[i,t,u,m]);return(0,n.jsxs)("div",{children:[r&&(0,n.jsx)(a.Heading,{className:d().mixesTitle,size:"s",weight:"bold",variant:"h3",children:(0,n.jsx)(o.Z,{id:"entity-names.mixes"})}),(0,n.jsx)("div",{className:d().mixesGrid,children:_})]})})},23948:function(e,t,i){"use strict";i.d(t,{T:function(){return n.NotFound}});var n=i(8964)},8964:function(e,t,i){"use strict";i.d(t,{NotFound:function(){return x}});var n=i(9753),r=i(60836),s=i(9544),o=i(31014),a=i(39513),l=i(28852),c=i(2570),u=i(55784),d=i(34152),m=i(23067),_=i.n(m);let x=(0,s.Pi)(e=>{let{className:t}=e,{contentRef:i}=(0,d.$Y6)(),s=(0,d.s0h)("/");return(0,d.ZP4)(!0),(0,n.jsxs)("div",{className:(0,r.W)(_().root,{[_().root_desktop]:!i},t),children:[(0,n.jsx)(u.n,{withBackwardFallback:"/",className:_().navigation,withForwardControl:!1}),(0,n.jsxs)("div",{className:_().content,children:[(0,n.jsx)(l.J,{className:_().icon,variant:"musicLogo",size:"xxl"}),(0,n.jsx)(c.Heading,{className:(0,r.W)(_().title,_().important),variant:"h3",size:"xs",children:(0,n.jsx)(o.Z,{id:"page-error.page-does-not-exist"})}),(0,n.jsx)(c.Caption,{className:(0,r.W)(_().text,_().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,n.jsx)(o.Z,{id:"page-error.page-does-not-exist-description"})}),(0,n.jsx)(a.z,{onClick:s,className:_().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,n.jsx)(c.Caption,{type:"controls",variant:"span",size:"m",children:(0,n.jsx)(o.Z,{id:"navigation.page-main"})})})]})]})})},68106:function(e,t,i){"use strict";i.d(t,{D:function(){return n.SomethingWentWrong}});var n=i(18723)},18723:function(e,t,i){"use strict";i.d(t,{SomethingWentWrong:function(){return g}});var n=i(9753),r=i(60836),s=i(9544),o=i(98639),a=i(31014),l=i(39513),c=i(28852),u=i(2570),d=i(55784),m=i(34152),_=i(88178),x=i.n(_);let g=(0,s.Pi)(e=>{let{className:t,withBackwardControl:i=!0}=e,s=(0,o.useCallback)(()=>{window.location.href="/"},[]),{contentRef:_}=(0,m.$Y6)();return(0,n.jsxs)("div",{className:(0,r.W)(x().root,t),children:[i&&(0,n.jsx)(d.n,{withBackwardFallback:"/",className:(0,r.W)(x().navigation,{[x().navigation_desktop]:!_}),withForwardControl:!1}),(0,n.jsxs)("div",{className:(0,r.W)(x().content,{[x().content_shrink]:!i}),children:[(0,n.jsx)(c.J,{className:x().icon,variant:"attention",size:"xxl"}),(0,n.jsx)(u.Heading,{className:(0,r.W)(x().title,x().important),variant:"h3",size:"xs",children:(0,n.jsx)(a.Z,{id:"error-messages.something-went-wrong"})}),(0,n.jsxs)(u.Caption,{className:(0,r.W)(x().text,x().important),variant:"span",type:"text",size:"l",weight:"normal",children:[!1,(0,n.jsx)(a.Z,{id:"page-error.try-to-restart-app"})]}),(0,n.jsx)(l.z,{onClick:s,className:x().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,n.jsxs)(u.Caption,{type:"controls",variant:"span",size:"m",children:[!1,(0,n.jsx)(a.Z,{id:"page-error.restart-app-button"})]})})]})]})})},78914:function(e){e.exports={root:"Genre_root__80dlk",link:"Genre_link__Wewaq",linkTitle:"Genre_linkTitle__ORAsw",list:"Genre_list__C2Pxf"}},86678:function(e){e.exports={root:"MixCard_root__9tPLV",header:"MixCard_header__j7Zpo",title:"MixCard_title__nhghp",cover:"MixCard_cover__oSu73",covers:"MixCard_covers__S61hz",covers_stack:"MixCard_covers_stack__VeHDp",covers_radial:"MixCard_covers_radial__orE40"}},69836:function(e){e.exports={root:"GenresPage_root__LhP_S",shimmerTitle:"GenresPage_shimmerTitle__4j8uH",content:"GenresPage_content__yhKrQ",list:"GenresPage_list__l2Cuc"}},95870:function(e){e.exports={root:"MixesPage_root__mp_Eq",scrollableContainer:"MixesPage_scrollableContainer__S0b76",container:"MixesPage_container__1b_3H",shimmerContainer:"MixesPage_shimmerContainer__su53n",footer:"MixesPage_footer__jCcAN"}},66051:function(e){e.exports={carouselBlock:"MixesCarousel_carouselBlock__ZpMU2",carouselHeader:"MixesCarousel_carouselHeader__6mMHX",mixItem:"MixesCarousel_mixItem__YNSsB"}},8104:function(e){e.exports={mixesTitle:"MixesGrid_mixesTitle__QawnL",mixesGrid:"MixesGrid_mixesGrid__uZQtt"}},23067:function(e){e.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},88178:function(e){e.exports={root:"SomethingWentWrong_root__d77VJ",content:"SomethingWentWrong_content__8_YkJ",content_shrink:"SomethingWentWrong_content_shrink__GOR_7",navigation:"SomethingWentWrong_navigation__a8eMG",navigation_desktop:"SomethingWentWrong_navigation_desktop__WGGBX",icon:"SomethingWentWrong_icon__f15_y",title:"SomethingWentWrong_title__Kn89B",important:"SomethingWentWrong_important__namIb",text:"SomethingWentWrong_text__KEfGc",button:"SomethingWentWrong_button__dmh7t"}},13281:function(e,t,i){"use strict";i.d(t,{d:function(){return s}});var n=i(8655),r=i(54194);class s extends r.e{constructor(e,t){super(e,{code:"E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE",cause:t.cause}),(0,n._)(this,"name","HttpErrorException"),(0,n._)(this,"statusCode",void 0),this.statusCode=t.statusCode,Object.setPrototypeOf(this,s.prototype)}}},54194:function(e,t,i){"use strict";i.d(t,{e:function(){return s}});var n=i(8655),r=i(37810);class s extends r.y{constructor(e="Http Client error",{code:t="E_HTTP_CLIENT",...i}={}){super(e,{code:t,...i}),(0,n._)(this,"name","HttpException"),Object.setPrototypeOf(this,s.prototype)}}},10542:function(e,t,i){"use strict";i.d(t,{du:function(){return o.d},eY:function(){return s.e},CN:function(){return r}}),(n=r||(r={}))[n.NOT_FOUND=404]="NOT_FOUND",n[n.BAD_REQUEST=400]="BAD_REQUEST",n[n.PRECONDITION_FAILED=412]="PRECONDITION_FAILED";var n,r,s=i(54194),o=i(13281)}},function(e){e.O(0,[1899,6792,5121,2534,7007,2721,2498,7873,2183,567,4152,3084,1055,2171,361,1744],function(){return e(e.s=87698)}),_N_E=e.O()}]);