(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[796],{41368:function(t,e,i){Promise.resolve().then(i.bind(i,63699))},63699:function(t,e,i){"use strict";i.r(e);var n=i(9753),l=i(74717),r=i(61533);e.default=()=>{let t=(0,l.useSearchParams)().get("playlistUuid");return t||(0,l.notFound)(),(0,n.jsx)(r.i$,{playlistUuid:t})}},4491:function(t,e,i){"use strict";i.d(e,{IT:function(){return s.ArtistCard},xG:function(){return a.ArtistContextMenu},o9:function(){return r},v2:function(){return o.useArtistDisclaimer}});var n=i(42288),l=i(33589);let r=n.V5.model("ArtistMeta",{artist:l.Go,lastMonthListeners:n.V5.maybe(n.V5.number)});var s=i(99654),a=i(54864),o=i(66975)},66975:function(t,e,i){"use strict";i.d(e,{useArtistDisclaimer:function(){return s}});var n=i(98639),l=i(3429),r=i(38527);let s=t=>{let{artist:e,callback:i,shouldHistoryBack:s}=t,{disclaimer:a,modals:{disclaimerModal:o}}=(0,r.oR4)(),u=(0,n.useRef)(String((0,l.Z)())),c=(0,n.useRef)(!1),d=(0,r.uK4)().get(r.ceh);return(0,n.useEffect)(()=>{a.isUnsafeDisclaimerConfirmed&&a.id===u.current&&!c.current&&(null==i||i(),c.current=!0)},[i,a.id,a.isUnsafeDisclaimerConfirmed]),(0,n.useCallback)(async t=>{let n=d.get(r.BUb.ExEx);if((null==e?void 0:e.isUnsafeLegal)&&(null==n?void 0:n.includes("".concat(r.coP.ARTIST,"_").concat(e.id)))){null==i||i();return}if((null==e?void 0:e.isLegalRejected)||(null==e?void 0:e.isUnsafeLegal)){null==t||t.preventDefault(),await a.getArtistDisclaimer({artistId:e.id}),e.isUnsafeLegal&&a.setType(r.Gq.UNSAFE),a.setId(u.current),a.setEntityId(e.id),a.setEntityType(r.coP.ARTIST),a.setShouldHistoryBack(!!s),c.current=!1,o.open();return}null==t||t.preventDefault(),null==i||i()},[null==e?void 0:e.id,null==e?void 0:e.isLegalRejected,null==e?void 0:e.isUnsafeLegal,i,a,o,d,s])}},99654:function(t,e,i){"use strict";i.d(e,{ArtistCard:function(){return h}});var n=i(9753),l=i(60836),r=i(9544),s=i(98639),a=i(80542),o=i(18375),u=i(23881),c=i(84338),d=i(27491),v=i(28852),f=i(12404),m=i(2570),p=i(33589),C=i(38527),x=i(3084),k=i(66975),A=i(54864),_=i(62914),b=i.n(_);let h=(0,r.Pi)(t=>{let{artist:e,className:i,children:r,contentLinesCount:_}=t,{ref:h,intersectionPropertyId:y}=(0,C.VfV)(),{trailer:B}=(0,C.oR4)(),g=(0,C.x5)(),{formatMessage:T}=(0,a.Z)(),[S,j]=(0,s.useState)(!1),[P,L]=(0,s.useState)(!1),[M,N]=(0,s.useState)(!1),{sendLikeSearchFeedback:E,sendNavigateSearchFeedback:R,sendPlaySearchFeedback:I}=(0,C.sAF)(),w=(0,C.zxW)(),U=(0,p.SB)(e),D=(0,p.BV)(e),{id:z,name:O,coverUri:V,isLiked:G}=e,q=(0,C.s0h)(e.url),K=(0,C.s0h)(e.url,!0),[F,W]=(0,s.useState)(!1),Z=(0,C.FTC)(),H=(0,s.useCallback)(t=>{t.stopPropagation(),B.openArtistTrailer(e.id),Z(o.OB.Artist,e.id)},[e.id,Z,B]),J=(0,s.useMemo)(()=>{let t=T({id:"entity-names.artist-name"},{artistName:O}),e=G?T({id:"entity-names.has-your-like"}):"";return"".concat(t," ").concat(e)},[O,G,T]),{isPlaying:X,togglePlay:Q}=(0,C.qmq)({playContextParams:{contextData:{type:c.Ak.Artist,meta:{id:Number(z)},from:g},loadContextMeta:!0}}),Y=(0,k.useArtistDisclaimer)({artist:e,callback:q}),$=(0,k.useArtistDisclaimer)({artist:e,callback:K}),tt=(0,k.useArtistDisclaimer)({artist:e,callback:Q}),te=(0,p.ik)($,Y),ti=(0,s.useCallback)(t=>{null==R||R(),w({to:o.qU.ArtistScreen}),te(t)},[R,w,te]),tn=(0,s.useCallback)(t=>{ti(t)},[ti]),tl=(0,s.useCallback)(()=>{S||X||(j(!0),null==I||I()),tt()},[X,S,I,tt]),tr=(0,s.useCallback)(()=>{P||G||(L(!0),null==E||E()),U()},[G,U,P,E]),ts=(0,s.useCallback)(t=>{t.preventDefault(),t.stopPropagation()},[]),ta=(0,s.useCallback)(()=>{N(!M),W(!M)},[M]),to=(0,s.useMemo)(()=>(0,n.jsx)(A.ArtistContextMenu,{artist:e,onOpenChange:ta,open:M,onClick:ts,className:(0,l.W)(b().menuButton,b().control),size:"s",icon:(0,n.jsx)(v.J,{size:"xxs",variant:"more"})},e.getKey("ArtistContextMenu")),[e,ts,ta,M]),tu=(0,s.useMemo)(()=>{var t;if(null==e?void 0:null===(t=e.trailer)||void 0===t?void 0:t.canShow)return(0,n.jsx)(x.eP,{className:(0,l.W)(b().trailerButton,b().control),radius:"round",size:"s",iconSize:"xxs",enabledTooltip:!0,onClick:H},e.getKey("TrailerButton"))},[e,H]),tc=(0,s.useMemo)(()=>{if(e.isAvailable)return(0,n.jsx)(d.kk,{isVisible:M||F,className:b().controls,radius:"round",playControl:(0,n.jsx)(x.JM,{buttonVariant:"default",withHover:!1,className:(0,l.W)(b().playButton,b().control),iconSize:"xl",variant:"filled",onClick:tl,isPlaying:X,disabled:!e.isAvailableForPlaying},e.getKey("PlayButton")),likeControl:(0,n.jsx)(x.dJ,{className:(0,l.W)(b().likeButton,b().control),isLiked:G,onClick:tr,variant:"default",size:"s",iconSize:"xxs"},e.getKey("LikeButton")),menuControl:to,pinControl:(0,n.jsx)(x.RT,{onClick:D,isPinned:e.isPinned,className:(0,l.W)(b().pinButton,b().control),withRipple:!1},e.getKey("PinButton")),trailerControl:tu})},[e,M,F,tl,X,G,tr,to,D,tu]),td=(0,s.useMemo)(()=>(0,n.jsx)(f.Paper,{className:b().cover,radius:"round",withShadow:!0,...(0,u.BA)(u.bG.artist.ARTIST_CARD),children:(0,n.jsxs)("div",{className:b().coverBlock,onClick:tn,children:[(0,n.jsx)(x.BE,{className:b().image,src:V,size:200,fit:"cover",alt:J,withAvatarReplace:!0,isAvailable:e.isAvailable,"aria-hidden":!0}),tc]})}),[tn,V,J,e.isAvailable,tc]);return(0,n.jsx)(d.m7,{ref:h,className:(0,l.W)(b().root,i),textPosition:"center","aria-label":J,title:(0,n.jsx)(m.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",lineClamp:2,children:(0,n.jsx)(x.rU,{className:b().titleLink,href:e.url,"aria-label":J,onClick:ti,...(0,u.BA)(u.bG.artist.ARTIST_TITLE),children:O})}),srTitle:(0,n.jsx)(x.rU,{href:e.url,onClick:ti,children:J}),"data-intersection-property-id":y,contentLinesCount:_,view:td,...(0,u.BA)(u.bG.artist.ARTIST_ITEM),children:r})})},54864:function(t,e,i){"use strict";i.d(e,{ArtistContextMenu:function(){return v}});var n=i(9753),l=i(9544),r=i(98639),s=i(80542),a=i(18375),o=i(385),u=i(33589),c=i(38527),d=i(3084);let v=(0,l.Pi)(t=>{var e,i,l;let{artist:v,onOpenChange:f,open:m,...p}=t,{settings:C,trailer:x}=(0,c.oR4)(),k=(0,u.BV)(v),A=(0,u.SB)(v),_=(0,c.FTC)(),b="".concat(c.aUg.ARTIST,"-").concat(null==v?void 0:v.id),h=C.layout===c.t8m.Mobile,{formatMessage:y}=(0,s.Z)(),{href:B}=(0,c.qKB)(null!==(i=null==v?void 0:v.url)&&void 0!==i?i:""),{isPlaying:g,togglePlay:T}=(0,c.QhE)({seeds:null!==(l=null==v?void 0:v.seeds)&&void 0!==l?l:[],pageIdForFrom:c.Rhz.RADIO,blockIdForFrom:b}),S=(0,r.useCallback)(()=>{g||T()},[g,T]),j=(0,r.useCallback)(()=>{(null==v?void 0:v.id)&&(x.openArtistTrailer(v.id),_(a.OB.Artist,v.id))},[null==v?void 0:v.id,_,x]);return(0,c.ZP4)(m),(0,n.jsxs)(o.v2,{isMobile:h,offsetOptions:10,open:m,onOpenChange:f,ariaLabel:y({id:"interface-actions.context-menu"}),...p,children:[!h&&(0,n.jsx)(d.Zd,{onClick:k,isPinned:null==v?void 0:v.isPinned}),(0,n.jsx)(d.xZ,{onClick:A,isLiked:null==v?void 0:v.isLiked,disabled:!(null==v?void 0:v.isAvailable)}),(null==v?void 0:null===(e=v.trailer)||void 0===e?void 0:e.canShow)&&(0,n.jsx)(d.NB,{onClick:j}),(0,n.jsx)(d.GQ,{onClick:S,disabled:!(null==v?void 0:v.isAvailable),variant:"artist"}),(0,n.jsx)(d.zq,{disabled:!v,shareLink:B,entityVariant:"artist",entityTitle:null==v?void 0:v.name})]})})},36084:function(t,e,i){"use strict";i.d(e,{I7:function(){return p},b4:function(){return a},at:function(){return C}});var n=i(9753),l=i(98639),r=i.t(l,2),s=i(3084);let a=t=>{let{children:e,title:i,className:r}=t,{setTitleElement:a,setTitle:o}=(0,l.useContext)(s.pI),u=(0,l.useRef)(null);return(0,l.useEffect)(()=>{(null==u?void 0:u.current)&&a(u),i&&o(i)},[u,i,a,o]),(0,l.useEffect)(()=>()=>{o("")},[o]),(0,n.jsx)("div",{ref:u,className:r,children:e})};var o=i(9544),u={810:t=>{t.exports=r}},c={},d={};(()=>{Object.defineProperty(d,"__esModule",{value:!0}),d.useScroll=void 0;let t=function t(e){var i=c[e];if(void 0!==i)return i.exports;var n=c[e]={exports:{}};return u[e](n,n.exports,t),n.exports}(810);d.useScroll=e=>{(0,t.useEffect)(()=>{let t={capture:!0,passive:!0};return window.addEventListener("scroll",e,t),()=>{window.removeEventListener("scroll",e,t)}},[e])}})(),d.__esModule;var v=d.useScroll,f=i(38527);let m=t=>{let{element:e,scrollTop:i,isMobile:n}=t,l=.4*e.clientHeight;return i+(n?56:72)>=e.offsetTop+l},p=(0,o.Pi)(t=>{let{children:e,scrollElement:i,outerTitle:r="",headerElement:a,headerThreshold:o}=t,[u,c]=(0,l.useState)(r),[d,p]=(0,l.useState)(null),[C,x]=(0,l.useState)(!1),[k,A]=(0,l.useState)(!1),{settings:_}=(0,f.oR4)(),b=_.layout===f.t8m.Mobile;(0,l.useLayoutEffect)(()=>{c(r)},[r]);let h=(0,l.useCallback)(()=>{if(!i)return;let t=null!=o?o:10,e=a?Number(a.offsetTop)-t:t;e<0&&(e=0),A(i.scrollTop>e),(null==d?void 0:d.current)&&x(m({element:null==d?void 0:d.current,scrollTop:i.scrollTop,isMobile:b}))},[i,o,a,d,b]);(0,l.useEffect)(()=>{i&&(null==i?void 0:i.scrollTop)!==0||A(!1)},[i,null==i?void 0:i.scrollTop]),v(h);let y=(0,l.useMemo)(()=>({title:u,setTitle:c,titleElement:d,scrollElement:i,setTitleElement:p,isScrolledTitle:C,isScrolling:k}),[u,C,d,i,k]);return(0,n.jsx)(s.pI.Provider,{value:y,children:e})});i(66414);let C=(t,e)=>((0,f.uK4)().get(f.Xt8),[(0,l.useMemo)(()=>{if(void 0!==e){let i=e-17;return{"--average-color-background":t,transform:"translateY(".concat(e>=17?0:i,"px)"),opacity:1}}return{}},[e,!1,t]),(0,l.useMemo)(()=>({"--average-color-background":t}),[t])])},55784:function(t,e,i){"use strict";i.d(e,{h:function(){return l.h},n:function(){return n.n}});var n=i(33861),l=i(34906)},62914:function(t){t.exports={root:"ArtistCard_root__x67BK",controls:"ArtistCard_controls__jsqqI",cover:"ArtistCard_cover__29ShU",coverBlock:"ArtistCard_coverBlock__dBL4x",image:"ArtistCard_image__pONJx",titleLink:"ArtistCard_titleLink__G8Puz",playButton:"ArtistCard_playButton__XZoTr",likeButton:"ArtistCard_likeButton__LU9TL",menuButton:"ArtistCard_menuButton__EynXG",pinButton:"ArtistCard_pinButton__G_VOi",trailerButton:"ArtistCard_trailerButton__a2NHm",control:"ArtistCard_control___qv5j"}}},function(t){t.O(0,[5219,4500,7606,3603,7753,9983,2498,7873,2330,919,567,9448,214,8527,3084,395,4726,3490,9352,4023,3276,1071,5191,4950,1533,2171,361,1744],function(){return t(t.s=41368)}),_N_E=t.O()}]);