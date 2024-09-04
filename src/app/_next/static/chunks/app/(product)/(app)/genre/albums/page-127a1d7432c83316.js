(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4897],{88467:function(t,e,a){Promise.resolve().then(a.bind(a,60255))},60255:function(t,e,a){"use strict";a.r(e);var n=a(9753),i=a(74717),r=a(95946);e.default=()=>{let t=(0,i.useSearchParams)().get("metatagId");return t||(0,i.notFound)(),(0,n.jsx)(r.rT,{metatagId:t})}},4491:function(t,e,a){"use strict";a.d(e,{IT:function(){return l.ArtistCard},xG:function(){return o.ArtistContextMenu},o9:function(){return r},v2:function(){return s.useArtistDisclaimer}});var n=a(42288),i=a(33589);let r=n.V5.model("ArtistMeta",{artist:i.Go,lastMonthListeners:n.V5.maybe(n.V5.number)});var l=a(99654),o=a(54864),s=a(66975)},66975:function(t,e,a){"use strict";a.d(e,{useArtistDisclaimer:function(){return l}});var n=a(98639),i=a(3429),r=a(38527);let l=t=>{let{artist:e,callback:a,shouldHistoryBack:l}=t,{disclaimer:o,modals:{disclaimerModal:s}}=(0,r.oR4)(),u=(0,n.useRef)(String((0,i.Z)())),d=(0,n.useRef)(!1),c=(0,r.uK4)().get(r.ceh);return(0,n.useEffect)(()=>{o.isUnsafeDisclaimerConfirmed&&o.id===u.current&&!d.current&&(null==a||a(),d.current=!0)},[a,o.id,o.isUnsafeDisclaimerConfirmed]),(0,n.useCallback)(async t=>{let n=c.get(r.BUb.ExEx);if((null==e?void 0:e.isUnsafeLegal)&&(null==n?void 0:n.includes("".concat(r.coP.ARTIST,"_").concat(e.id)))){null==a||a();return}if((null==e?void 0:e.isLegalRejected)||(null==e?void 0:e.isUnsafeLegal)){null==t||t.preventDefault(),await o.getArtistDisclaimer({artistId:e.id}),e.isUnsafeLegal&&o.setType(r.Gq.UNSAFE),o.setId(u.current),o.setEntityId(e.id),o.setEntityType(r.coP.ARTIST),o.setShouldHistoryBack(!!l),d.current=!1,s.open();return}null==t||t.preventDefault(),null==a||a()},[null==e?void 0:e.id,null==e?void 0:e.isLegalRejected,null==e?void 0:e.isUnsafeLegal,a,o,s,c,l])}},99654:function(t,e,a){"use strict";a.d(e,{ArtistCard:function(){return b}});var n=a(9753),i=a(60836),r=a(9544),l=a(98639),o=a(80542),s=a(18375),u=a(23881),d=a(84338),c=a(27491),g=a(28852),m=a(12404),p=a(2570),_=a(33589),v=a(38527),f=a(3084),S=a(66975),N=a(54864),C=a(62914),y=a.n(C);let b=(0,r.Pi)(t=>{let{artist:e,className:a,children:r,contentLinesCount:C}=t,{ref:b,intersectionPropertyId:h}=(0,v.VfV)(),{trailer:x}=(0,v.oR4)(),E=(0,v.x5)(),{formatMessage:G}=(0,o.Z)(),[P,T]=(0,l.useState)(!1),[V,k]=(0,l.useState)(!1),[A,j]=(0,l.useState)(!1),{sendLikeSearchFeedback:D,sendNavigateSearchFeedback:R,sendPlaySearchFeedback:L}=(0,v.sAF)(),I=(0,v.zxW)(),B=(0,_.SB)(e),W=(0,_.BV)(e),{id:O,name:F,coverUri:w,isLiked:q}=e,U=(0,v.s0h)(e.url),z=(0,v.s0h)(e.url,!0),[M,J]=(0,l.useState)(!1),Z=(0,v.FTC)(),K=(0,l.useCallback)(t=>{t.stopPropagation(),x.openArtistTrailer(e.id),Z(s.OB.Artist,e.id)},[e.id,Z,x]),Q=(0,l.useMemo)(()=>{let t=G({id:"entity-names.artist-name"},{artistName:F}),e=q?G({id:"entity-names.has-your-like"}):"";return"".concat(t," ").concat(e)},[F,q,G]),{isPlaying:H,togglePlay:X}=(0,v.qmq)({playContextParams:{contextData:{type:d.Ak.Artist,meta:{id:Number(O)},from:E},loadContextMeta:!0}}),Y=(0,S.useArtistDisclaimer)({artist:e,callback:U}),$=(0,S.useArtistDisclaimer)({artist:e,callback:z}),tt=(0,S.useArtistDisclaimer)({artist:e,callback:X}),te=(0,_.ik)($,Y),ta=(0,l.useCallback)(t=>{null==R||R(),I({to:s.qU.ArtistScreen}),te(t)},[R,I,te]),tn=(0,l.useCallback)(t=>{ta(t)},[ta]),ti=(0,l.useCallback)(()=>{P||H||(T(!0),null==L||L()),tt()},[H,P,L,tt]),tr=(0,l.useCallback)(()=>{V||q||(k(!0),null==D||D()),B()},[q,B,V,D]),tl=(0,l.useCallback)(t=>{t.preventDefault(),t.stopPropagation()},[]),to=(0,l.useCallback)(()=>{j(!A),J(!A)},[A]),ts=(0,l.useMemo)(()=>(0,n.jsx)(N.ArtistContextMenu,{artist:e,onOpenChange:to,open:A,onClick:tl,className:(0,i.W)(y().menuButton,y().control),size:"s",icon:(0,n.jsx)(g.J,{size:"xxs",variant:"more"})},e.getKey("ArtistContextMenu")),[e,tl,to,A]),tu=(0,l.useMemo)(()=>{var t;if(null==e?void 0:null===(t=e.trailer)||void 0===t?void 0:t.canShow)return(0,n.jsx)(f.eP,{className:(0,i.W)(y().trailerButton,y().control),radius:"round",size:"s",iconSize:"xxs",enabledTooltip:!0,onClick:K},e.getKey("TrailerButton"))},[e,K]),td=(0,l.useMemo)(()=>{if(e.isAvailable)return(0,n.jsx)(c.kk,{isVisible:A||M,className:y().controls,radius:"round",playControl:(0,n.jsx)(f.JM,{buttonVariant:"default",withHover:!1,className:(0,i.W)(y().playButton,y().control),iconSize:"xl",variant:"filled",onClick:ti,isPlaying:H,disabled:!e.isAvailableForPlaying},e.getKey("PlayButton")),likeControl:(0,n.jsx)(f.dJ,{className:(0,i.W)(y().likeButton,y().control),isLiked:q,onClick:tr,variant:"default",size:"s",iconSize:"xxs"},e.getKey("LikeButton")),menuControl:ts,pinControl:(0,n.jsx)(f.RT,{onClick:W,isPinned:e.isPinned,className:(0,i.W)(y().pinButton,y().control),withRipple:!1},e.getKey("PinButton")),trailerControl:tu})},[e,A,M,ti,H,q,tr,ts,W,tu]),tc=(0,l.useMemo)(()=>(0,n.jsx)(m.Paper,{className:y().cover,radius:"round",withShadow:!0,...(0,u.BA)(u.bG.artist.ARTIST_CARD),children:(0,n.jsxs)("div",{className:y().coverBlock,onClick:tn,children:[(0,n.jsx)(f.BE,{className:y().image,src:w,size:200,fit:"cover",alt:Q,withAvatarReplace:!0,isAvailable:e.isAvailable,"aria-hidden":!0}),td]})}),[tn,w,Q,e.isAvailable,td]);return(0,n.jsx)(c.m7,{ref:b,className:(0,i.W)(y().root,a),textPosition:"center","aria-label":Q,title:(0,n.jsx)(p.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",lineClamp:2,children:(0,n.jsx)(f.rU,{className:y().titleLink,href:e.url,"aria-label":Q,onClick:ta,...(0,u.BA)(u.bG.artist.ARTIST_TITLE),children:F})}),srTitle:(0,n.jsx)(f.rU,{href:e.url,onClick:ta,children:Q}),"data-intersection-property-id":h,contentLinesCount:C,view:tc,...(0,u.BA)(u.bG.artist.ARTIST_ITEM),children:r})})},54864:function(t,e,a){"use strict";a.d(e,{ArtistContextMenu:function(){return g}});var n=a(9753),i=a(9544),r=a(98639),l=a(80542),o=a(18375),s=a(385),u=a(33589),d=a(38527),c=a(3084);let g=(0,i.Pi)(t=>{var e,a,i;let{artist:g,onOpenChange:m,open:p,..._}=t,{settings:v,trailer:f}=(0,d.oR4)(),S=(0,u.BV)(g),N=(0,u.SB)(g),C=(0,d.FTC)(),y="".concat(d.aUg.ARTIST,"-").concat(null==g?void 0:g.id),b=v.layout===d.t8m.Mobile,{formatMessage:h}=(0,l.Z)(),{href:x}=(0,d.qKB)(null!==(a=null==g?void 0:g.url)&&void 0!==a?a:""),{isPlaying:E,togglePlay:G}=(0,d.QhE)({seeds:null!==(i=null==g?void 0:g.seeds)&&void 0!==i?i:[],pageIdForFrom:d.Rhz.RADIO,blockIdForFrom:y}),P=(0,r.useCallback)(()=>{E||G()},[E,G]),T=(0,r.useCallback)(()=>{(null==g?void 0:g.id)&&(f.openArtistTrailer(g.id),C(o.OB.Artist,g.id))},[null==g?void 0:g.id,C,f]);return(0,d.ZP4)(p),(0,n.jsxs)(s.v2,{isMobile:b,offsetOptions:10,open:p,onOpenChange:m,ariaLabel:h({id:"interface-actions.context-menu"}),..._,children:[!b&&(0,n.jsx)(c.Zd,{onClick:S,isPinned:null==g?void 0:g.isPinned}),(0,n.jsx)(c.xZ,{onClick:N,isLiked:null==g?void 0:g.isLiked,disabled:!(null==g?void 0:g.isAvailable)}),(null==g?void 0:null===(e=g.trailer)||void 0===e?void 0:e.canShow)&&(0,n.jsx)(c.NB,{onClick:T}),(0,n.jsx)(c.GQ,{onClick:P,disabled:!(null==g?void 0:g.isAvailable),variant:"artist"}),(0,n.jsx)(c.zq,{disabled:!g,shareLink:x,entityVariant:"artist",entityTitle:null==g?void 0:g.name})]})})},36084:function(t,e,a){"use strict";a.d(e,{I7:function(){return _},b4:function(){return o},at:function(){return v}});var n=a(9753),i=a(98639),r=a.t(i,2),l=a(3084);let o=t=>{let{children:e,title:a,className:r}=t,{setTitleElement:o,setTitle:s}=(0,i.useContext)(l.pI),u=(0,i.useRef)(null);return(0,i.useEffect)(()=>{(null==u?void 0:u.current)&&o(u),a&&s(a)},[u,a,o,s]),(0,i.useEffect)(()=>()=>{s("")},[s]),(0,n.jsx)("div",{ref:u,className:r,children:e})};var s=a(9544),u={810:t=>{t.exports=r}},d={},c={};(()=>{Object.defineProperty(c,"__esModule",{value:!0}),c.useScroll=void 0;let t=function t(e){var a=d[e];if(void 0!==a)return a.exports;var n=d[e]={exports:{}};return u[e](n,n.exports,t),n.exports}(810);c.useScroll=e=>{(0,t.useEffect)(()=>{let t={capture:!0,passive:!0};return window.addEventListener("scroll",e,t),()=>{window.removeEventListener("scroll",e,t)}},[e])}})(),c.__esModule;var g=c.useScroll,m=a(38527);let p=t=>{let{element:e,scrollTop:a,isMobile:n}=t,i=.4*e.clientHeight;return a+(n?56:72)>=e.offsetTop+i},_=(0,s.Pi)(t=>{let{children:e,scrollElement:a,outerTitle:r="",headerElement:o,headerThreshold:s}=t,[u,d]=(0,i.useState)(r),[c,_]=(0,i.useState)(null),[v,f]=(0,i.useState)(!1),[S,N]=(0,i.useState)(!1),{settings:C}=(0,m.oR4)(),y=C.layout===m.t8m.Mobile;(0,i.useLayoutEffect)(()=>{d(r)},[r]);let b=(0,i.useCallback)(()=>{if(!a)return;let t=null!=s?s:10,e=o?Number(o.offsetTop)-t:t;e<0&&(e=0),N(a.scrollTop>e),(null==c?void 0:c.current)&&f(p({element:null==c?void 0:c.current,scrollTop:a.scrollTop,isMobile:y}))},[a,s,o,c,y]);(0,i.useEffect)(()=>{a&&(null==a?void 0:a.scrollTop)!==0||N(!1)},[a,null==a?void 0:a.scrollTop]),g(b);let h=(0,i.useMemo)(()=>({title:u,setTitle:d,titleElement:c,scrollElement:a,setTitleElement:_,isScrolledTitle:v,isScrolling:S}),[u,v,c,a,S]);return(0,n.jsx)(l.pI.Provider,{value:h,children:e})});a(66414);let v=(t,e)=>((0,m.uK4)().get(m.Xt8),[(0,i.useMemo)(()=>{if(void 0!==e){let a=e-17;return{"--average-color-background":t,transform:"translateY(".concat(e>=17?0:a,"px)"),opacity:1}}return{}},[e,!1,t]),(0,i.useMemo)(()=>({"--average-color-background":t}),[t])])},55784:function(t,e,a){"use strict";a.d(e,{h:function(){return i.h},n:function(){return n.n}});var n=a(33861),i=a(34906)},95946:function(t,e,a){"use strict";a.d(e,{rT:function(){return i.GenreAlbumsPage},eq:function(){return r.GenreArtistsPage},a0:function(){return n.GenrePage},Kx:function(){return S},Fe:function(){return l.GenrePlaylistsPage}});var n=a(5112),i=a(70660),r=a(12788),l=a(91477);a(20806);var o=a(42288),s=a(10542),u=a(93490),d=a(73276),c=a(33589),g=a(38527),m=a(395);let p=o.V5.model("GenreAlbumsPage",{loadingState:o.V5.enumeration(Object.values(g.Gui)),pager:o.V5.maybeNull(m.Vn),alreadyRequestedPages:o.V5.map(o.V5.number),pendingPages:o.V5.map(o.V5.number),requests:o.V5.maybeNull(o.V5.number),errorStatusCode:o.V5.maybeNull(o.V5.number),fullTitle:o.V5.maybeNull(o.V5.string),items:o.V5.array(o.V5.maybeNull(u.ug))}).views(t=>({get isNotFound(){var e;let a=t.loadingState===g.Gui.RESOLVE&&(null===(e=t.pager)||void 0===e?void 0:e.total)===0,n=t.errorStatusCode===s.CN.NOT_FOUND||t.errorStatusCode===s.CN.BAD_REQUEST;return t.loadingState===g.Gui.REJECT&&n||a},get isSomethingWrong(){return t.loadingState===g.Gui.REJECT&&!this.isNotFound}})).actions(t=>({getData:(0,o.ls)(function*(e){let{metatagId:a,page:n=0,pageSize:i=20}=e,{metatagsResource:r,modelActionsLogger:l}=(0,o.dU)(t);if(!(t.loadingState===g.Gui.PENDING&&t.pendingPages.has("".concat(n))||t.alreadyRequestedPages.has("".concat(n)))){"number"==typeof n&&t.alreadyRequestedPages.set("".concat(n),n);try{var d;t.loadingState=g.Gui.PENDING,t.pendingPages.set("".concat(n),n);let e=yield r.getMetatagAlbums({id:a,offset:n,limit:i});t.fullTitle=e.title.fullTitle;let l={page:n,perPage:i,total:e.pager.total};0===t.items.length&&(t.items=(0,o.pj)(Array.from({length:l.total},()=>null)));let s=e.albums.map(u.ym);(0,g.AG_)({items:t.items,mappedRawItems:s,page:n,pageSize:i}),t.pager=l,t.requests=(null!==(d=t.requests)&&void 0!==d?d:0)+1,t.loadingState!==g.Gui.IDLE&&(t.loadingState=g.Gui.RESOLVE)}catch(e){l.error(e),e instanceof s.du&&(e.statusCode===s.CN.NOT_FOUND||e.statusCode===s.CN.BAD_REQUEST)&&(t.errorStatusCode=s.CN.NOT_FOUND),t.loadingState!==g.Gui.IDLE&&(t.loadingState=g.Gui.REJECT)}finally{t.pendingPages.delete("".concat(n))}}}),reset(){t.loadingState=g.Gui.IDLE,t.pendingPages.clear(),t.pager=null,t.alreadyRequestedPages.clear(),t.errorStatusCode=null,t.items=(0,o.pj)([])}})),_=o.V5.model("GenreArtistsPage",{loadingState:o.V5.enumeration(Object.values(g.Gui)),pager:o.V5.maybeNull(m.Vn),alreadyRequestedPages:o.V5.map(o.V5.number),pendingPages:o.V5.map(o.V5.number),requests:o.V5.maybeNull(o.V5.number),errorStatusCode:o.V5.maybeNull(o.V5.number),fullTitle:o.V5.maybeNull(o.V5.string),items:o.V5.array(o.V5.maybeNull(c.Go))}).views(t=>({get isNotFound(){var e;let a=t.loadingState===g.Gui.RESOLVE&&(null===(e=t.pager)||void 0===e?void 0:e.total)===0,n=t.errorStatusCode===s.CN.NOT_FOUND||t.errorStatusCode===s.CN.BAD_REQUEST;return t.loadingState===g.Gui.REJECT&&n||a},get isSomethingWrong(){return t.loadingState===g.Gui.REJECT&&!this.isNotFound}})).actions(t=>({getData:(0,o.ls)(function*(e){let{metatagId:a,page:n=0,pageSize:i=20}=e,{metatagsResource:r,modelActionsLogger:l}=(0,o.dU)(t);if(!(t.loadingState===g.Gui.PENDING&&t.pendingPages.has("".concat(n))||t.alreadyRequestedPages.has("".concat(n)))){"number"==typeof n&&t.alreadyRequestedPages.set("".concat(n),n);try{var u;t.loadingState=g.Gui.PENDING,t.pendingPages.set("".concat(n),n);let e=yield r.getMetatagArtists({id:a,offset:n,limit:i,period:"week"});t.fullTitle=e.title.fullTitle;let l={page:n,perPage:i,total:e.pager.total};0===t.items.length&&(t.items=(0,o.pj)(Array.from({length:l.total},()=>null)));let s=e.artists.map(t=>(0,c.d)(t.artist));(0,g.AG_)({items:t.items,mappedRawItems:s,page:n,pageSize:i}),t.pager=l,t.requests=(null!==(u=t.requests)&&void 0!==u?u:0)+1,t.loadingState!==g.Gui.IDLE&&(t.loadingState=g.Gui.RESOLVE)}catch(e){l.error(e),e instanceof s.du&&(e.statusCode===s.CN.NOT_FOUND||e.statusCode===s.CN.BAD_REQUEST)&&(t.errorStatusCode=s.CN.NOT_FOUND),t.loadingState!==g.Gui.IDLE&&(t.loadingState=g.Gui.REJECT)}finally{t.pendingPages.delete("".concat(n))}}}),reset(){t.loadingState=g.Gui.IDLE,t.pendingPages.clear(),t.pager=null,t.alreadyRequestedPages.clear(),t.errorStatusCode=null,t.items=(0,o.pj)([])}}));var v=a(10668);let f=o.V5.model("GenrePlaylistsPage",{loadingState:o.V5.enumeration(Object.values(g.Gui)),pager:o.V5.maybeNull(m.Vn),alreadyRequestedPages:o.V5.map(o.V5.number),pendingPages:o.V5.map(o.V5.number),requests:o.V5.maybeNull(o.V5.number),errorStatusCode:o.V5.maybeNull(o.V5.number),fullTitle:o.V5.maybeNull(o.V5.string),items:o.V5.array(o.V5.maybeNull(v.Cd))}).views(t=>({get isNotFound(){var e;let a=t.loadingState===g.Gui.RESOLVE&&(null===(e=t.pager)||void 0===e?void 0:e.total)===0,n=t.errorStatusCode===s.CN.NOT_FOUND||t.errorStatusCode===s.CN.BAD_REQUEST;return t.loadingState===g.Gui.REJECT&&n||a},get isSomethingWrong(){return!this.isNotFound&&t.loadingState===g.Gui.REJECT&&0===t.alreadyRequestedPages.size}})).actions(t=>({getData:(0,o.ls)(function*(e){let{metatagId:a,page:n=0,pageSize:i=20}=e,{metatagsResource:r,modelActionsLogger:l}=(0,o.dU)(t);if(!(t.loadingState===g.Gui.PENDING&&t.pendingPages.has("".concat(n))||t.alreadyRequestedPages.has("".concat(n)))){"number"==typeof n&&t.alreadyRequestedPages.set("".concat(n),n);try{var s;t.loadingState=g.Gui.PENDING,t.pendingPages.set("".concat(n),n);let e=yield r.getMetatagPlaylists({id:a,offset:n,limit:i,withLikesCount:!0});t.fullTitle=e.title.fullTitle;let l={page:n,perPage:i,total:e.pager.total};0===t.items.length&&(t.items=(0,o.pj)(Array.from({length:l.total},()=>null)));let u=e.playlists.map(v.PV);(0,g.AG_)({items:t.items,mappedRawItems:u,page:n,pageSize:i}),t.pager=l,t.requests=(null!==(s=t.requests)&&void 0!==s?s:0)+1,t.loadingState!==g.Gui.IDLE&&(t.loadingState=g.Gui.RESOLVE)}catch(e){l.error(e),t.alreadyRequestedPages.delete("".concat(n)),t.loadingState!==g.Gui.IDLE&&(t.loadingState=g.Gui.REJECT)}finally{t.pendingPages.delete("".concat(n))}}}),reset(){t.loadingState=g.Gui.IDLE,t.pendingPages.clear(),t.pager=null,t.alreadyRequestedPages.clear(),t.errorStatusCode=null,t.items=(0,o.pj)([])}})),S=o.V5.model("GenrePage",{id:o.V5.maybeNull(o.V5.string),errorStatusCode:o.V5.maybeNull(o.V5.number),loadingState:o.V5.enumeration(Object.values(g.Gui)),fullTitle:o.V5.maybeNull(o.V5.string),artists:o.V5.array(c.Go),albums:o.V5.array(u.ug),playlists:o.V5.array(d.d2),albumsSubpage:p,artistsSubpage:_,playlistsSubpage:f}).views(t=>({get isLoading(){return t.loadingState===g.Gui.IDLE||t.loadingState===g.Gui.PENDING},get hasAlbums(){return t.loadingState===g.Gui.IDLE||t.loadingState===g.Gui.PENDING||t.albums.length>0},get hasArtists(){return t.loadingState===g.Gui.IDLE||t.loadingState===g.Gui.PENDING||t.artists.length>0},get hasPlaylists(){return t.loadingState===g.Gui.IDLE||t.loadingState===g.Gui.PENDING||t.playlists.length>0},get isNotFound(){let e=t.loadingState===g.Gui.RESOLVE&&!this.hasAlbums&&!this.hasArtists&&!this.hasPlaylists,a=t.errorStatusCode===s.CN.NOT_FOUND||t.errorStatusCode===s.CN.BAD_REQUEST;return t.loadingState===g.Gui.REJECT&&a||e}})).actions(t=>({getData:(0,o.ls)(function*(e){let{id:a}=e,{metatagsResource:n,modelActionsLogger:i}=(0,o.dU)(t);if(t.loadingState!==g.Gui.PENDING)try{t.loadingState=g.Gui.PENDING;let e=yield n.getMetatagById({id:a});t.id=e.id,t.fullTitle=e.title.fullTitle,t.artists=(0,o.pj)(e.artists.map(c.d)),t.albums=(0,o.pj)(e.albums.map(u.ym)),t.playlists=(0,o.pj)(e.playlists.map(d.Q9)),t.loadingState!==g.Gui.IDLE&&(t.loadingState=g.Gui.RESOLVE)}catch(e){i.error(e),e instanceof s.du&&(e.statusCode===s.CN.NOT_FOUND||e.statusCode===s.CN.BAD_REQUEST)&&(t.errorStatusCode=s.CN.NOT_FOUND),t.loadingState!==g.Gui.IDLE&&(t.loadingState=g.Gui.REJECT)}}),reset(){t.loadingState=g.Gui.IDLE,t.fullTitle=null,t.artists=(0,o.pj)([]),t.albums=(0,o.pj)([]),t.playlists=(0,o.pj)([])}}))},23948:function(t,e,a){"use strict";a.d(e,{T:function(){return n.NotFound}});var n=a(8964)},8964:function(t,e,a){"use strict";a.d(e,{NotFound:function(){return p}});var n=a(9753),i=a(60836),r=a(9544),l=a(31014),o=a(39513),s=a(28852),u=a(2570),d=a(55784),c=a(38527),g=a(23067),m=a.n(g);let p=(0,r.Pi)(t=>{let{className:e}=t,{contentRef:a}=(0,c.$Y6)(),r=(0,c.s0h)("/");return(0,c.ZP4)(!0),(0,n.jsxs)("div",{className:(0,i.W)(m().root,{[m().root_desktop]:!a},e),children:[(0,n.jsx)(d.n,{withBackwardFallback:"/",className:m().navigation,withForwardControl:!1}),(0,n.jsxs)("div",{className:m().content,children:[(0,n.jsx)(s.J,{className:m().icon,variant:"musicLogo",size:"xxl"}),(0,n.jsx)(u.Heading,{className:(0,i.W)(m().title,m().important),variant:"h3",size:"xs",children:(0,n.jsx)(l.Z,{id:"page-error.page-does-not-exist"})}),(0,n.jsx)(u.Caption,{className:(0,i.W)(m().text,m().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,n.jsx)(l.Z,{id:"page-error.page-does-not-exist-description"})}),(0,n.jsx)(o.z,{onClick:r,className:m().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,n.jsx)(u.Caption,{type:"controls",variant:"span",size:"m",children:(0,n.jsx)(l.Z,{id:"navigation.page-main"})})})]})]})})},68106:function(t,e,a){"use strict";a.d(e,{D:function(){return n.SomethingWentWrong}});var n=a(18723)},18723:function(t,e,a){"use strict";a.d(e,{SomethingWentWrong:function(){return _}});var n=a(9753),i=a(60836),r=a(9544),l=a(98639),o=a(31014),s=a(39513),u=a(28852),d=a(2570),c=a(55784),g=a(38527),m=a(88178),p=a.n(m);let _=(0,r.Pi)(t=>{let{className:e,withBackwardControl:a=!0}=t,r=(0,l.useCallback)(()=>{window.location.href="/"},[]),{contentRef:m}=(0,g.$Y6)();return(0,n.jsxs)("div",{className:(0,i.W)(p().root,e),children:[a&&(0,n.jsx)(c.n,{withBackwardFallback:"/",className:(0,i.W)(p().navigation,{[p().navigation_desktop]:!m}),withForwardControl:!1}),(0,n.jsxs)("div",{className:(0,i.W)(p().content,{[p().content_shrink]:!a}),children:[(0,n.jsx)(u.J,{className:p().icon,variant:"attention",size:"xxl"}),(0,n.jsx)(d.Heading,{className:(0,i.W)(p().title,p().important),variant:"h3",size:"xs",children:(0,n.jsx)(o.Z,{id:"error-messages.something-went-wrong"})}),(0,n.jsxs)(d.Caption,{className:(0,i.W)(p().text,p().important),variant:"span",type:"text",size:"l",weight:"normal",children:[!1,(0,n.jsx)(o.Z,{id:"page-error.try-to-restart-app"})]}),(0,n.jsx)(s.z,{onClick:r,className:p().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,n.jsxs)(d.Caption,{type:"controls",variant:"span",size:"m",children:[!1,(0,n.jsx)(o.Z,{id:"page-error.restart-app-button"})]})})]})]})})},62914:function(t){t.exports={root:"ArtistCard_root__x67BK",controls:"ArtistCard_controls__jsqqI",cover:"ArtistCard_cover__29ShU",coverBlock:"ArtistCard_coverBlock__dBL4x",image:"ArtistCard_image__pONJx",titleLink:"ArtistCard_titleLink__G8Puz",playButton:"ArtistCard_playButton__XZoTr",likeButton:"ArtistCard_likeButton__LU9TL",menuButton:"ArtistCard_menuButton__EynXG",pinButton:"ArtistCard_pinButton__G_VOi",trailerButton:"ArtistCard_trailerButton__a2NHm",control:"ArtistCard_control___qv5j"}},23067:function(t){t.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},88178:function(t){t.exports={root:"SomethingWentWrong_root__d77VJ",content:"SomethingWentWrong_content__8_YkJ",content_shrink:"SomethingWentWrong_content_shrink__GOR_7",navigation:"SomethingWentWrong_navigation__a8eMG",navigation_desktop:"SomethingWentWrong_navigation_desktop__WGGBX",icon:"SomethingWentWrong_icon__f15_y",title:"SomethingWentWrong_title__Kn89B",important:"SomethingWentWrong_important__namIb",text:"SomethingWentWrong_text__KEfGc",button:"SomethingWentWrong_button__dmh7t"}}},function(t){t.O(0,[5219,4500,5055,3603,7753,2242,7606,2498,7873,919,567,8527,3084,395,4726,3490,1055,3276,154,2171,361,1744],function(){return t(t.s=88467)}),_N_E=t.O()}]);