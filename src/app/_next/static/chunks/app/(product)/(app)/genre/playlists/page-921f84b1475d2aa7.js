(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5623],{99594:function(t,e,a){Promise.resolve().then(a.bind(a,10032))},10032:function(t,e,a){"use strict";a.r(e);var n=a(9753),i=a(74717),o=a(95946);e.default=()=>{let t=(0,i.useSearchParams)().get("metatagId");return t||(0,i.notFound)(),(0,n.jsx)(o.Fe,{metatagId:t})}},60424:function(t,e,a){"use strict";a.d(e,{I7:function(){return g},b4:function(){return c},at:function(){return o}}),a(66414);var n=a(98639),i=a(76873);let o=(t,e)=>((0,i.uK4)().get(i.Xt8),[(0,n.useMemo)(()=>{if(void 0===e)return{};let a=e-17;return{"--average-color-background":t,transform:"translateY(".concat(e>=17?0:a,"px)"),opacity:1}},[e,!1,t]),(0,n.useMemo)(()=>({"--average-color-background":t}),[t])]);var r=a(9753),l=a(9544),s=a(22890),u=a(3084);let d=t=>{let{element:e,scrollTop:a,isMobile:n}=t,i=.4*e.clientHeight;return a+(n?56:72)>=e.offsetTop+i},g=(0,l.Pi)(t=>{let{children:e,scrollElement:a,outerTitle:o="",headerElement:l,headerThreshold:g}=t,[c,m]=(0,n.useState)(o),[p,N]=(0,n.useState)(null),[S,_]=(0,n.useState)(!1),[E,f]=(0,n.useState)(!1),{settings:y}=(0,i.oR4)(),h=y.layout===i.t8m.Mobile;(0,n.useLayoutEffect)(()=>{m(o)},[o]);let G=(0,n.useCallback)(()=>{if(!a)return;let t=null!=g?g:10,e=l?Number(l.offsetTop)-t:t;e<0&&(e=0),f(a.scrollTop>e),(null==p?void 0:p.current)&&_(d({element:null==p?void 0:p.current,scrollTop:a.scrollTop,isMobile:h}))},[a,g,l,p,h]);(0,n.useEffect)(()=>{a&&(null==a?void 0:a.scrollTop)!==0||f(!1)},[a,null==a?void 0:a.scrollTop]),(0,s.v)({onScroll:G,elementRef:a});let b=(0,n.useMemo)(()=>({title:c,setTitle:m,titleElement:p,scrollElement:a,setTitleElement:N,isScrolledTitle:S,isScrolling:E}),[c,S,p,a,E]);return(0,r.jsx)(u.pI.Provider,{value:b,children:e})}),c=t=>{let{children:e,title:a,className:i}=t,{setTitleElement:o,setTitle:l}=(0,n.useContext)(u.pI),s=(0,n.useRef)(null);return(0,n.useEffect)(()=>{(null==s?void 0:s.current)&&o(s),a&&l(a)},[s,a,o,l]),(0,n.useEffect)(()=>()=>{l("")},[l]),(0,r.jsx)("div",{ref:s,className:i,children:e})}},95946:function(t,e,a){"use strict";a.d(e,{rT:function(){return N.GenreAlbumsPage},eq:function(){return S.GenreArtistsPage},a0:function(){return _.GenrePage},Kx:function(){return p},Fe:function(){return E.GenrePlaylistsPage}});var n=a(42288),i=a(60991),o=a(70071),r=a(73276),l=a(33589),s=a(76873),u=a(68133);let d=n.V5.model("GenreAlbumsPage",{loadingState:n.V5.enumeration(Object.values(s.Gui)),pager:n.V5.maybeNull(u.Vn),alreadyRequestedPages:n.V5.map(n.V5.number),pendingPages:n.V5.map(n.V5.number),requests:n.V5.maybeNull(n.V5.number),errorStatusCode:n.V5.maybeNull(n.V5.number),fullTitle:n.V5.maybeNull(n.V5.string),items:n.V5.array(n.V5.maybeNull(o.ug))}).views(t=>({get isNotFound(){var e;let a=t.loadingState===s.Gui.RESOLVE&&(null===(e=t.pager)||void 0===e?void 0:e.total)===0,n=t.errorStatusCode===i.CN.NOT_FOUND||t.errorStatusCode===i.CN.BAD_REQUEST;return t.loadingState===s.Gui.REJECT&&n||a},get isSomethingWrong(){return t.loadingState===s.Gui.REJECT&&!this.isNotFound}})).actions(t=>({getData:(0,n.ls)(function*(e){let{metatagId:a,page:r=0,pageSize:l=20}=e,{metatagsResource:u,modelActionsLogger:d}=(0,n.dU)(t);if(!(t.loadingState===s.Gui.PENDING&&t.pendingPages.has("".concat(r))||t.alreadyRequestedPages.has("".concat(r)))){"number"==typeof r&&t.alreadyRequestedPages.set("".concat(r),r);try{var g;t.loadingState=s.Gui.PENDING,t.pendingPages.set("".concat(r),r);let e=yield u.getMetatagAlbums({id:a,offset:r,limit:l});t.fullTitle=e.title.fullTitle;let i={page:r,perPage:l,total:e.pager.total};0===t.items.length&&(t.items=(0,n.pj)(Array.from({length:i.total},()=>null)));let d=e.albums.map(o.ym);(0,s.AG_)({items:t.items,mappedRawItems:d,page:r,pageSize:l}),t.pager=i,t.requests=(null!==(g=t.requests)&&void 0!==g?g:0)+1,t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.RESOLVE)}catch(e){d.error(e),e instanceof i.du&&(e.statusCode===i.CN.NOT_FOUND||e.statusCode===i.CN.BAD_REQUEST)&&(t.errorStatusCode=i.CN.NOT_FOUND),t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.REJECT)}finally{t.pendingPages.delete("".concat(r))}}}),reset(){t.loadingState=s.Gui.IDLE,t.pendingPages.clear(),t.pager=null,t.alreadyRequestedPages.clear(),t.errorStatusCode=null,t.items=(0,n.pj)([])}})),g=n.V5.model("GenreArtistsPage",{loadingState:n.V5.enumeration(Object.values(s.Gui)),pager:n.V5.maybeNull(u.Vn),alreadyRequestedPages:n.V5.map(n.V5.number),pendingPages:n.V5.map(n.V5.number),requests:n.V5.maybeNull(n.V5.number),errorStatusCode:n.V5.maybeNull(n.V5.number),fullTitle:n.V5.maybeNull(n.V5.string),items:n.V5.array(n.V5.maybeNull(l.Go))}).views(t=>({get isNotFound(){var e;let a=t.loadingState===s.Gui.RESOLVE&&(null===(e=t.pager)||void 0===e?void 0:e.total)===0,n=t.errorStatusCode===i.CN.NOT_FOUND||t.errorStatusCode===i.CN.BAD_REQUEST;return t.loadingState===s.Gui.REJECT&&n||a},get isSomethingWrong(){return t.loadingState===s.Gui.REJECT&&!this.isNotFound}})).actions(t=>({getData:(0,n.ls)(function*(e){let{metatagId:a,page:o=0,pageSize:r=20}=e,{metatagsResource:u,modelActionsLogger:d}=(0,n.dU)(t);if(!(t.loadingState===s.Gui.PENDING&&t.pendingPages.has("".concat(o))||t.alreadyRequestedPages.has("".concat(o)))){"number"==typeof o&&t.alreadyRequestedPages.set("".concat(o),o);try{var g;t.loadingState=s.Gui.PENDING,t.pendingPages.set("".concat(o),o);let e=yield u.getMetatagArtists({id:a,offset:o,limit:r,period:"week"});t.fullTitle=e.title.fullTitle;let i={page:o,perPage:r,total:e.pager.total};0===t.items.length&&(t.items=(0,n.pj)(Array.from({length:i.total},()=>null)));let d=e.artists.map(t=>(0,l.d)(t.artist));(0,s.AG_)({items:t.items,mappedRawItems:d,page:o,pageSize:r}),t.pager=i,t.requests=(null!==(g=t.requests)&&void 0!==g?g:0)+1,t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.RESOLVE)}catch(e){d.error(e),e instanceof i.du&&(e.statusCode===i.CN.NOT_FOUND||e.statusCode===i.CN.BAD_REQUEST)&&(t.errorStatusCode=i.CN.NOT_FOUND),t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.REJECT)}finally{t.pendingPages.delete("".concat(o))}}}),reset(){t.loadingState=s.Gui.IDLE,t.pendingPages.clear(),t.pager=null,t.alreadyRequestedPages.clear(),t.errorStatusCode=null,t.items=(0,n.pj)([])}}));var c=a(10668);let m=n.V5.model("GenrePlaylistsPage",{loadingState:n.V5.enumeration(Object.values(s.Gui)),pager:n.V5.maybeNull(u.Vn),alreadyRequestedPages:n.V5.map(n.V5.number),pendingPages:n.V5.map(n.V5.number),requests:n.V5.maybeNull(n.V5.number),errorStatusCode:n.V5.maybeNull(n.V5.number),fullTitle:n.V5.maybeNull(n.V5.string),items:n.V5.array(n.V5.maybeNull(c.Cd))}).views(t=>({get isNotFound(){var e;let a=t.loadingState===s.Gui.RESOLVE&&(null===(e=t.pager)||void 0===e?void 0:e.total)===0,n=t.errorStatusCode===i.CN.NOT_FOUND||t.errorStatusCode===i.CN.BAD_REQUEST;return t.loadingState===s.Gui.REJECT&&n||a},get isSomethingWrong(){return!this.isNotFound&&t.loadingState===s.Gui.REJECT&&0===t.alreadyRequestedPages.size}})).actions(t=>({getData:(0,n.ls)(function*(e){let{metatagId:a,page:i=0,pageSize:o=20}=e,{metatagsResource:r,modelActionsLogger:l}=(0,n.dU)(t);if(!(t.loadingState===s.Gui.PENDING&&t.pendingPages.has("".concat(i))||t.alreadyRequestedPages.has("".concat(i)))){"number"==typeof i&&t.alreadyRequestedPages.set("".concat(i),i);try{var u;t.loadingState=s.Gui.PENDING,t.pendingPages.set("".concat(i),i);let e=yield r.getMetatagPlaylists({id:a,offset:i,limit:o,withLikesCount:!0});t.fullTitle=e.title.fullTitle;let l={page:i,perPage:o,total:e.pager.total};0===t.items.length&&(t.items=(0,n.pj)(Array.from({length:l.total},()=>null)));let d=e.playlists.map(c.PV);(0,s.AG_)({items:t.items,mappedRawItems:d,page:i,pageSize:o}),t.pager=l,t.requests=(null!==(u=t.requests)&&void 0!==u?u:0)+1,t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.RESOLVE)}catch(e){l.error(e),t.alreadyRequestedPages.delete("".concat(i)),t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.REJECT)}finally{t.pendingPages.delete("".concat(i))}}}),reset(){t.loadingState=s.Gui.IDLE,t.pendingPages.clear(),t.pager=null,t.alreadyRequestedPages.clear(),t.errorStatusCode=null,t.items=(0,n.pj)([])}})),p=n.V5.model("GenrePage",{id:n.V5.maybeNull(n.V5.string),errorStatusCode:n.V5.maybeNull(n.V5.number),loadingState:n.V5.enumeration(Object.values(s.Gui)),fullTitle:n.V5.maybeNull(n.V5.string),artists:n.V5.array(l.Go),albums:n.V5.array(o.ug),playlists:n.V5.array(r.d2),albumsSubpage:d,artistsSubpage:g,playlistsSubpage:m}).views(t=>({get isLoading(){return t.loadingState===s.Gui.IDLE||t.loadingState===s.Gui.PENDING},get hasAlbums(){return t.loadingState===s.Gui.IDLE||t.loadingState===s.Gui.PENDING||t.albums.length>0},get hasArtists(){return t.loadingState===s.Gui.IDLE||t.loadingState===s.Gui.PENDING||t.artists.length>0},get hasPlaylists(){return t.loadingState===s.Gui.IDLE||t.loadingState===s.Gui.PENDING||t.playlists.length>0},get isNotFound(){let e=t.loadingState===s.Gui.RESOLVE&&!this.hasAlbums&&!this.hasArtists&&!this.hasPlaylists,a=t.errorStatusCode===i.CN.NOT_FOUND||t.errorStatusCode===i.CN.BAD_REQUEST;return t.loadingState===s.Gui.REJECT&&a||e}})).actions(t=>({getData:(0,n.ls)(function*(e){let{id:a}=e,{metatagsResource:u,modelActionsLogger:d}=(0,n.dU)(t);if(t.loadingState!==s.Gui.PENDING)try{t.loadingState=s.Gui.PENDING;let e=yield u.getMetatagById({id:a});t.id=e.id,t.fullTitle=e.title.fullTitle,t.artists=(0,n.pj)(e.artists.map(l.d)),t.albums=(0,n.pj)(e.albums.map(o.ym)),t.playlists=(0,n.pj)(e.playlists.map(r.Q9)),t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.RESOLVE)}catch(e){d.error(e),e instanceof i.du&&(e.statusCode===i.CN.NOT_FOUND||e.statusCode===i.CN.BAD_REQUEST)&&(t.errorStatusCode=i.CN.NOT_FOUND),t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.REJECT)}}),reset(){t.loadingState=s.Gui.IDLE,t.fullTitle=null,t.artists=(0,n.pj)([]),t.albums=(0,n.pj)([]),t.playlists=(0,n.pj)([])}}));var N=a(70660),S=a(12788);a(20806);var _=a(5112),E=a(91477)},23948:function(t,e,a){"use strict";a.d(e,{T:function(){return n.NotFound}});var n=a(8964)},8964:function(t,e,a){"use strict";a.d(e,{NotFound:function(){return p}});var n=a(9753),i=a(60836),o=a(9544),r=a(31014),l=a(39513),s=a(28852),u=a(2570),d=a(76873),g=a(3084),c=a(23067),m=a.n(c);let p=(0,o.Pi)(t=>{let{className:e}=t,{contentRef:a}=(0,d.$Y6)(),o=(0,d.s0h)("/");return(0,d.ZP4)(!0),(0,n.jsxs)("div",{className:(0,i.W)(m().root,{[m().root_desktop]:!a},e),children:[(0,n.jsx)(g.nP,{withBackwardFallback:"/",className:m().navigation,withForwardControl:!1}),(0,n.jsxs)("div",{className:m().content,children:[(0,n.jsx)(s.Icon,{className:m().icon,variant:"musicLogo",size:"xxl"}),(0,n.jsx)(u.Heading,{className:(0,i.W)(m().title,m().important),variant:"h3",size:"xs",children:(0,n.jsx)(r.Z,{id:"page-error.page-does-not-exist"})}),(0,n.jsx)(u.Caption,{className:(0,i.W)(m().text,m().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,n.jsx)(r.Z,{id:"page-error.page-does-not-exist-description"})}),(0,n.jsx)(l.z,{onClick:o,className:m().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,n.jsx)(u.Caption,{type:"controls",variant:"span",size:"m",children:(0,n.jsx)(r.Z,{id:"navigation.page-main"})})})]})]})})},68106:function(t,e,a){"use strict";a.d(e,{D:function(){return n.SomethingWentWrong}});var n=a(18723)},18723:function(t,e,a){"use strict";a.d(e,{SomethingWentWrong:function(){return N}});var n=a(9753),i=a(60836),o=a(9544),r=a(98639),l=a(31014),s=a(39513),u=a(28852),d=a(2570),g=a(76873),c=a(3084),m=a(88178),p=a.n(m);let N=(0,o.Pi)(t=>{let{className:e,withBackwardControl:a=!0}=t,o=(0,r.useCallback)(()=>{window.location.href="/"},[]),{contentRef:m}=(0,g.$Y6)();return(0,n.jsxs)("div",{className:(0,i.W)(p().root,e),children:[a&&(0,n.jsx)(c.nP,{withBackwardFallback:"/",className:(0,i.W)(p().navigation,{[p().navigation_desktop]:!m}),withForwardControl:!1}),(0,n.jsxs)("div",{className:(0,i.W)(p().content,{[p().content_shrink]:!a}),children:[(0,n.jsx)(u.Icon,{className:p().icon,variant:"attention",size:"xxl"}),(0,n.jsx)(d.Heading,{className:(0,i.W)(p().title,p().important),variant:"h3",size:"xs",children:(0,n.jsx)(l.Z,{id:"error-messages.something-went-wrong"})}),(0,n.jsxs)(d.Caption,{className:(0,i.W)(p().text,p().important),variant:"span",type:"text",size:"l",weight:"normal",children:[!1,(0,n.jsx)(l.Z,{id:"page-error.try-to-restart-app"})]}),(0,n.jsx)(s.z,{onClick:o,className:p().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,n.jsxs)(d.Caption,{type:"controls",variant:"span",size:"m",children:[!1,(0,n.jsx)(l.Z,{id:"page-error.restart-app-button"})]})})]})]})})},23067:function(t){t.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},88178:function(t){t.exports={root:"SomethingWentWrong_root__d77VJ",content:"SomethingWentWrong_content__8_YkJ",content_shrink:"SomethingWentWrong_content_shrink__GOR_7",navigation:"SomethingWentWrong_navigation__a8eMG",navigation_desktop:"SomethingWentWrong_navigation_desktop__WGGBX",icon:"SomethingWentWrong_icon__f15_y",title:"SomethingWentWrong_title__Kn89B",important:"SomethingWentWrong_important__namIb",text:"SomethingWentWrong_text__KEfGc",button:"SomethingWentWrong_button__dmh7t"}}},function(t){t.O(0,[6020,2725,2365,5963,589,616,2498,5453,7873,3617,3084,4702,4514,2890,71,1055,3276,6685,154,2171,361,1744],function(){return t(t.s=99594)}),_N_E=t.O()}]);