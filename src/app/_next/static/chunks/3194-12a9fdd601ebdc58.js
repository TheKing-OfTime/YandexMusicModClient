(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3194],{23194:function(e,t,a){"use strict";a.d(t,{KN:function(){return d.MixedEntitiesBlock},gK:function(){return n.SearchCorrectedText},hF:function(){return l.SearchEmpty},xz:function(){return o.SearchEntitiesGrid},y9:function(){return c.SearchHistoryBlock},Iv:function(){return N},Id:function(){return i.SearchMixed},R_:function(){return s.SearchPodcastList},XM:function(){return r.SearchTrackList},Fu:function(){return P.F},vy:function(){return T.useClearHistory}});var i=a(57613),r=a(65345),s=a(97515),o=a(59476),l=a(23136),n=a(1913);a(44140),a(87673);var c=a(43622),d=a(6806);a(21874);var u=a(42288),m=a(95695),x=a(93490),h=a(73276),_=a(44023),p=a(33589),S=a(40029);let C=u.V5.model("SearchAlbum",{type:u.V5.literal(m.Sc.ALBUM),data:x.ug}),v=u.V5.model("SearchPlaylist",{type:u.V5.literal(m.Sc.PLAYLIST),data:h.d2}),f=u.V5.model("SearchArtist",{type:u.V5.literal(m.Sc.ARTIST),data:p.Go}),k=u.V5.model("SearchUgcTrack",{type:u.V5.literal(m.Sc.UGC_TRACK),data:_.bc}),y=u.V5.model("SearchTrack",{type:u.V5.literal(m.Sc.TRACK),data:_.le}),b=u.V5.model("SearchVibe",{type:u.V5.literal(m.Sc.WAVE),data:S.KW}),j=u.V5.model("SearchPodcast",{type:u.V5.literal(m.Sc.PODCAST),data:x.ug}),A=u.V5.model("SearchPodcastEpisode",{type:u.V5.literal(m.Sc.PODCAST_EPISODE),data:_.le}),N=u.V5.union(C,v,f,y,k,b,j,A);a(9753),a(84338),a(4491);var P=a(27230),T=a(71707)},27230:function(e,t,a){"use strict";a.d(t,{F:function(){return o}});var i=a(9753),r=a(95695),s=a(44140);let o=e=>{switch(e.type){case r.Sc.UGC_TRACK:case r.Sc.TRACK:case r.Sc.PODCAST_EPISODE:{let t=e.data;return(0,i.jsx)(s.YL,{track:t},"".concat(e.type,"-").concat(t.id))}case r.Sc.ARTIST:{let t=e.data;return(0,i.jsx)(s.q3,{artist:t},"".concat(e.type,"-").concat(t.id))}case r.Sc.PLAYLIST:{let t=e.data;return(0,i.jsx)(s.tN,{playlist:t},t.key)}case r.Sc.ALBUM:{let t=e.data;return(0,i.jsx)(s.sx,{album:t},"".concat(e.type,"-").concat(t.id))}default:return null}}},71707:function(e,t,a){"use strict";a.d(t,{useClearHistory:function(){return u}});var i=a(9753),r=a(74717),s=a(98639),o=a(80542),l=a(31014),n=a(38527),c=a(3084);let d="/search",u=e=>{let{user:t,search:a}=(0,n.oR4)(),{formatMessage:u}=(0,o.Z)(),{notify:m}=(0,n.d$W)(),x=(0,r.useRouter)();return(0,s.useEffect)(()=>{a.isEmptyHistory&&x.push(d)},[a.isEmptyHistory,x]),(0,s.useCallback)(()=>{try{var r;(null===(r=t.account)||void 0===r?void 0:r.uid)&&a.clearHistory({userId:t.account.uid}),m((0,i.jsx)(c.Yj,{message:(0,i.jsx)(l.Z,{id:"search.cleared-history"})}),{containerId:n.W$x.INFO}),e&&e(),x.push(d)}catch(e){m((0,i.jsx)(c.Q,{error:u({id:"error-messages.error-during-action"})}),{containerId:n.W$x.ERROR})}},[t.account.uid,m,e,x,a,u])}},6806:function(e,t,a){"use strict";a.d(t,{MixedEntitiesBlock:function(){return _}});var i,r,s=a(9753),o=a(60836),l=a(43539),n=a(98639),c=a(5993),d=a(3084),u=a(21874),m=a(77203),x=a.n(m);(i=r||(r={})).ONE="one",i.TWO="two";let h=e=>{let{forwardRef:t,isLoading:a,title:i,description:r,viewAllAction:m,coverUrl:h,children:_,className:p="",maxColumns:S=2,itemsPerColumn:C=3,containerClassName:v="",headerClassName:f="",titleSize:k,showControls:y=!1}=e,[b,j]=(0,n.useState)(),A=(0,n.useRef)(null),N=(0,n.useId)(),P=(0,n.useMemo)(()=>{let e=(0,l.Z)(_,C).slice(0,S);return 1===e.length?j("one"):j("two"),e.map((e,t)=>(0,s.jsx)(u.MixedEntitiesList,{shimmersCount:3,isLoading:a,className:x().column,children:e},t))},[_,a,C,S]);return(0,s.jsxs)("section",{ref:t,className:(0,o.W)(p,x().root),children:[(0,s.jsx)(d.ti,{className:f,labeledForId:N,title:i,description:r,coverUrl:h,viewAllActionLink:m,titleSize:k,controls:y&&(0,s.jsx)(d.J8,{className:x().controls,carouselRef:A})}),(0,s.jsx)(c.l,{className:v,ref:A,itemClassName:(0,o.W)(x().columns,x()["columns_".concat(a&&S>1?"two":b)]),"aria-labelledby":N,role:"group",children:P})]})},_=(0,n.forwardRef)((e,t)=>(0,s.jsx)(h,{forwardRef:t,...e}))},21874:function(e,t,a){"use strict";a.d(t,{MixedEntitiesList:function(){return h}});var i=a(9753),r=a(98639),s=a(80542),o=a(60836),l=a(90679),n=a(78812),c=a.n(n);let d=e=>{let{className:t,ariaLabel:a}=e;return(0,i.jsxs)("div",{tabIndex:0,"aria-label":a,"aria-live":"polite","aria-busy":!0,className:(0,o.W)(c().root,t),children:[(0,i.jsxs)("div",{className:c().infoContainer,children:[(0,i.jsx)(l.Shimmer,{className:c().cover,radius:"s"}),(0,i.jsxs)("div",{className:c().textContainer,children:[(0,i.jsx)(l.Shimmer,{className:c().title,radius:"s"}),(0,i.jsx)(l.Shimmer,{className:c().description,radius:"s"})]})]}),(0,i.jsx)(l.Shimmer,{className:c().action,radius:"s"})]})};var u=a(37016),m=a.n(u);let x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,{formatMessage:t}=(0,s.Z)(),a=(0,r.useMemo)(()=>t({id:"loading-messages.entity-is-loading"},{entityName:t({id:"search.history"})}),[t]);return Array.from({length:e},(e,t)=>(0,i.jsx)(d,{className:m().shimmer,ariaLabel:a},t))},h=e=>{let{isLoading:t,shimmersCount:a,className:r,children:s}=e;return(0,i.jsx)("div",{className:r,children:t?x(a):s})}},762:function(e,t,a){"use strict";a.d(t,{AlbumItem:function(){return S}});var i=a(9753),r=a(60836),s=a(9544),o=a(98639),l=a(84338),n=a(98342),c=a(28852),d=a(2570),u=a(93490),m=a(38527),x=a(3084),h=a(87673),_=a(319),p=a.n(_);let S=(0,s.Pi)(e=>{var t;let{className:a,album:s}=e,_=(0,m.x5)({pageId:m.Rhz.SEARCH}),S=(0,m.s0h)(s.url),{isPlaying:C,isCurrent:v,togglePlay:f}=(0,m.qmq)({playContextParams:{contextData:{type:l.Ak.Album,meta:{id:s.id},from:_},loadContextMeta:!0}}),k=(0,u.jV)({album:s,callback:S}),y=(0,u.jV)({album:s,callback:f}),{sendPlaySearchFeedback:b}=(0,m.sAF)(),[j,A]=(0,o.useState)(!1),N=(0,o.useCallback)(()=>{j||C||(A(!0),null==b||b()),y()},[C,j,b,y]),P=(0,o.useCallback)(e=>{(0,n.m)(e,p().ripple),k(e)},[k]),T=(0,o.useCallback)(e=>{k(e)},[k]),L=(0,o.useCallback)(e=>(0,i.jsx)(x.Df,{isAvailable:s.isAvailable,isDisliked:!1,coverUri:s.coverUri,title:s.title,className:p().playButtonCell,...e}),[s]),B=null==L?void 0:L({onPlayButtonClick:N,isPlaying:C,isCurrent:v}),M=(0,o.useMemo)(()=>s.url&&s.isAvailable?(0,i.jsx)(x.rU,{className:(0,r.W)(p().text,p().titleLink),href:s.url,onClick:T,children:s.title}):(0,i.jsx)(d.Caption,{className:(0,r.W)(p().text,p().titleText),size:"m",variant:"div",type:"text",children:s.title}),[s.isAvailable,s.title,s.url,T]);return(0,i.jsxs)(x.Md,{className:(0,r.W)(p().root,{[p().root_disabled]:!s.isAvailable},a),"aria-label":"".concat(s.artistNames," ").concat(s.title," ").concat(null!==(t=s.version)&&void 0!==t?t:""),onClick:P,children:[B,(0,i.jsx)(h.J,{isDisabled:!s.isAvailable,artists:s.artists,version:s.version,title:M,explicitMarkVariant:s.albumExplicitMark}),(0,i.jsx)("div",{className:p().controlsBarCell,children:(0,i.jsx)(c.J,{className:p().buttonArrow,variant:"arrowRight",size:"xs"})})]})})},39362:function(e,t,a){"use strict";a.d(t,{ArtistItem:function(){return C}});var i=a(9753),r=a(60836),s=a(9544),o=a(98639),l=a(80542),n=a(84338),c=a(98342),d=a(28852),u=a(2570),m=a(4491),x=a(38527),h=a(3084),_=a(87673),p=a(319),S=a.n(p);let C=(0,s.Pi)(e=>{let{className:t,artist:a}=e,s=(0,x.x5)({pageId:x.Rhz.SEARCH}),p=(0,x.s0h)(a.url),{formatMessage:C}=(0,l.Z)(),{isPlaying:v,isCurrent:f,togglePlay:k}=(0,x.qmq)({playContextParams:{contextData:{type:n.Ak.Artist,meta:{id:Number(a.id)},from:s},loadContextMeta:!0}}),y=(0,m.v2)({artist:a,callback:p}),b=(0,m.v2)({artist:a,callback:k}),{sendPlaySearchFeedback:j}=(0,x.sAF)(),[A,N]=(0,o.useState)(!1),P=(0,o.useCallback)(()=>{A||v||(N(!0),null==j||j()),b()},[b,v,A,j]),T=(0,o.useCallback)(e=>{(0,c.m)(e,S().ripple),y(e)},[y]),L=(0,o.useCallback)(e=>{y(e)},[y]),B=(0,o.useCallback)(e=>(0,i.jsx)(h.Df,{isAvailable:a.isAvailable,isDisliked:!1,coverUri:a.coverUri,title:a.name,className:S().playButtonCell,radius:"round",...e}),[a,!1]),M=null==B?void 0:B({onPlayButtonClick:P,isPlaying:v,isCurrent:f}),E=(0,o.useMemo)(()=>a.url&&a.isAvailable?(0,i.jsx)(h.rU,{className:(0,r.W)(S().text,S().titleLink),href:a.url,onClick:L,children:a.name}):(0,i.jsx)(u.Caption,{className:(0,r.W)(S().text,S().titleText),size:"m",variant:"div",type:"text",children:a.name}),[a.isAvailable,a.name,a.url,L]);return(0,i.jsxs)(h.Md,{className:(0,r.W)(S().root,{[S().root_disabled]:!a.isAvailable},t),"aria-label":a.name,onClick:T,children:[M,(0,i.jsx)(_.J,{isDisabled:!a.isAvailable,isDisliked:!1,title:E,description:C({id:"entity-names.singer"})}),(0,i.jsx)("div",{className:S().controlsBarCell,children:(0,i.jsx)(d.J,{className:S().buttonArrow,variant:"arrowRight",size:"xs"})})]})})},30898:function(e,t,a){"use strict";a.d(t,{PlaylistItem:function(){return S}});var i=a(9753),r=a(60836),s=a(9544),o=a(98639),l=a(80542),n=a(84338),c=a(98342),d=a(28852),u=a(2570),m=a(38527),x=a(3084),h=a(87673),_=a(319),p=a.n(_);let S=(0,s.Pi)(e=>{let{className:t,playlist:a}=e,s=(0,m.x5)({pageId:m.Rhz.SEARCH}),_=(0,m.s0h)(a.url),S=a.title||"",{formatMessage:C}=(0,l.Z)(),{isPlaying:v,isCurrent:f,togglePlay:k}=(0,m.qmq)({playContextParams:{contextData:{type:n.Ak.Playlist,meta:{id:a.id,uuid:a.uuid},from:s},loadContextMeta:!0}}),{sendPlaySearchFeedback:y}=(0,m.sAF)(),[b,j]=(0,o.useState)(!1),A=(0,o.useCallback)(()=>{b||v||(j(!0),null==y||y()),k()},[v,b,y,k]),N=(0,o.useCallback)(e=>{a.isAvailable&&((0,c.m)(e,p().ripple),_())},[_,a.isAvailable]),P=(0,o.useCallback)(()=>{a.isAvailable&&_()},[_,a.isAvailable]),T=(0,o.useCallback)(e=>(0,i.jsx)(x.Df,{isAvailable:a.isAvailable,isDisliked:!1,coverUri:a.coverUri,title:S,className:p().playButtonCell,...e}),[a,S]),L=null==T?void 0:T({onPlayButtonClick:A,isPlaying:v,isCurrent:f}),B=(0,o.useMemo)(()=>a.url&&a.isAvailable?(0,i.jsx)(x.rU,{className:(0,r.W)(p().text,p().titleLink),href:a.url,onClick:P,children:S}):(0,i.jsx)(u.Caption,{className:(0,r.W)(p().text,p().titleText),size:"m",variant:"div",type:"text",children:S}),[P,a.isAvailable,a.url,S]);return(0,i.jsxs)(x.Md,{className:(0,r.W)(p().root,{[p().root_disabled]:!a.isAvailable},t),"aria-label":a.title||C({id:"entity-names.playlist"}),onClick:N,children:[L,(0,i.jsx)(h.J,{isDisabled:!a.isAvailable,title:B}),(0,i.jsx)("div",{className:p().controlsBarCell,children:(0,i.jsx)(d.J,{className:p().buttonArrow,variant:"arrowRight",size:"xs"})})]})})},14562:function(e,t,a){"use strict";a.d(t,{TrackItem:function(){return _}});var i=a(9753),r=a(60836),s=a(9544),o=a(98639),l=a(84338),n=a(95695),c=a(98342),d=a(44023),u=a(38527),m=a(3084),x=a(319),h=a.n(x);let _=(0,s.Pi)(e=>{var t;let{className:a,track:s}=e,x=(0,u.x5)({pageId:u.Rhz.SEARCH}),_=s.albumId?"".concat(s.id,":").concat(s.albumId):s.id,{isPlaying:p,isCurrent:S,togglePlay:C,restartPlay:v}=(0,u.qmq)({playContextParams:{contextData:{type:l.Ak.Various,meta:{id:_},from:x,overrideContextType:l.Zc.Search},queueParams:{index:0},loadContextMeta:!0},entityId:_}),f=(0,d.nD)({track:s,callback:C}),{sendPlaySearchFeedback:k}=(0,u.sAF)(),[y,b]=(0,o.useState)(!1),j=(0,o.useCallback)(()=>{y||p||(b(!0),null==k||k()),f()},[p,y,k,f]),A=(0,o.useCallback)(()=>{p?v():j()},[p,v,j]),N=(0,o.useCallback)(e=>{2===e.detail?A():(0,c.m)(e,h().ripple)},[A]),P=(0,o.useCallback)(e=>(0,i.jsx)(m.Df,{isAvailable:s.isAvailable,isDisliked:s.isDisliked,coverUri:s.coverUri,title:s.title,className:h().playButtonCell,...e}),[s]),T=null==P?void 0:P({onPlayButtonClick:j,isPlaying:p,isCurrent:S});return(0,i.jsxs)(m.Md,{className:(0,r.W)(h().root,a),"aria-label":"".concat(s.artistsNames," ").concat(s.title," ").concat(null!==(t=s.version)&&void 0!==t?t:""),onClick:N,children:[T,s.type===n.Vc.PODCAST?(0,i.jsx)(d.wT,{track:s,playContextParams:{contextData:{type:l.Ak.Various,meta:{id:s.albumId?"".concat(s.id,":").concat(s.albumId):s.id},from:x},queueParams:{index:0},loadContextMeta:!0},withPodcastName:!0,withListeningProgress:!0}):(0,i.jsx)(d.ko,{track:s}),(0,i.jsx)(d.jt,{className:h().controlsBarCell,track:s})]})})},44140:function(e,t,a){"use strict";a.d(t,{YL:function(){return r.TrackItem},q3:function(){return s.ArtistItem},sx:function(){return o.AlbumItem},tN:function(){return i.PlaylistItem}});var i=a(30898),r=a(14562),s=a(39362),o=a(762)},87673:function(e,t,a){"use strict";a.d(t,{J:function(){return d}});var i=a(9753),r=a(60836),s=a(96622),o=a(2570),l=a(33589),n=a(70390),c=a.n(n);let d=e=>{let{isDisliked:t,isDisabled:a,artists:n=[],description:d,explicitMarkVariant:u,className:m,version:x,title:h}=e;return(0,i.jsxs)("div",{className:(0,r.W)(c().root,{[c().root_disabled]:a,[c().root_disliked]:t},m),children:[(0,i.jsxs)("div",{className:c().titleContainer,children:[(0,i.jsxs)(o.Caption,{className:(0,r.W)(c().text,c().title,{[c().title_withVersion]:x}),size:"m",variant:"div",lineClamp:1,type:"text",children:[h,x&&(0,i.jsx)(o.Caption,{className:(0,r.W)(c().text,c().version),size:"m",variant:"div",type:"text",children:" ".concat(x)})]}),u&&(0,i.jsx)(s.ExplicitMark,{className:c().explicitMark,variant:u})]}),n.length>0&&(0,i.jsx)(l.jO,{linkClassName:(0,r.W)(c().text,c().artistLink),captionClassName:(0,r.W)(c().text,c().artistCaption),artists:n,lineClamp:1,withLink:!a}),!n&&d&&(0,i.jsx)(o.Caption,{className:(0,r.W)(c().text,c().description),variant:"span",type:"text",lineClamp:1,children:d})]})}},1913:function(e,t,a){"use strict";a.d(t,{SearchCorrectedText:function(){return d}});var i=a(9753),r=a(98639),s=a(31014),o=a(39513),l=a(2570),n=a(4286),c=a.n(n);let d=e=>{let{onCorrectText:t,searchCorrectedText:a}=e,n=(0,r.useMemo)(()=>({text:(0,i.jsx)(o.z,{"aria-label":a,variant:"text",radius:"xs",onClick:t,children:(0,i.jsx)(l.Caption,{className:c().link,variant:"span",size:"m",type:"text",children:a})})}),[a,t]);return(0,i.jsx)("div",{className:c().root,children:(0,i.jsx)(l.Caption,{className:c().text,variant:"span",size:"m",type:"text",children:(0,i.jsx)(s.Z,{id:"search.corrected-text",values:n})})})}},23136:function(e,t,a){"use strict";a.d(t,{SearchEmpty:function(){return h}});var i=a(9753),r=a(60836),s=a(98639),o=a(80542),l=a(28852),n=a(41055),c=a(2570),d=a(3084),u=a(43182),m=a.n(u);let x=e=>{let{forwardRef:t,className:a,searchCorrectedText:s}=e,{formatMessage:u}=(0,o.Z)();return(0,i.jsxs)(n.t,{className:(0,r.W)(m().root,a),containerClassName:m().container,ref:t,children:[(0,i.jsxs)("div",{className:m().content,children:[s&&(0,i.jsx)("div",{className:m().correctedTextBlock,children:s}),(0,i.jsx)(l.J,{className:m().icon,variant:"search",size:"xxl"}),(0,i.jsx)(c.Heading,{className:m().title,size:"s",weight:"bold",variant:"h3",children:u({id:"search-results.not-found-title"})}),(0,i.jsx)(c.Caption,{className:m().subtitle,variant:"div",type:"text",size:"l",weight:"normal",children:u({id:"search-results.not-found-description"})})]}),(0,i.jsx)(d.$_,{className:m().footer})]})},h=(0,s.forwardRef)((e,t)=>(0,i.jsx)(x,{forwardRef:t,...e}))},59476:function(e,t,a){"use strict";a.d(t,{SearchEntitiesGrid:function(){return S}});var i=a(9753),r=a(60836),s=a(98639),o=a(95695),l=a(41055),n=a(93490),c=a(4491),d=a(73276),u=a(38527),m=a(3084);let x=(e,t)=>t===o.ay.BOOK?e.filter(e=>e.type===o.Sc.PODCAST&&e.data.type===o.VZ.AUDIOBOOK):e.filter(e=>e.type===t);var h=a(33661),_=a.n(h);let p=e=>{let{forwardRef:t,className:a,results:h,filter:p,isLoading:S,sendSearchFeedback:C,searchCorrectedText:v,children:f}=e,[k,y]=(0,s.useState)(0),b=(0,s.useMemo)(()=>{if(S)return(0,i.jsx)(m.Wm,{isActive:!0,itemClassName:_().block,round:p===o.Sc.ARTIST,centered:p===o.Sc.ARTIST,count:36});let e=x(h,p);return y(e.length),e.map((e,t)=>{switch(e.type){case o.Sc.ALBUM:return(0,i.jsx)(u.B1g.Provider,{value:{sendSearchFeedback:C,id:e.data.id,type:o.Bm.ALBUM,blockPosition:0,position:t},children:(0,i.jsx)(n.rf,{album:e.data},e.data.id)},e.data.id);case o.Sc.PLAYLIST:return(0,i.jsx)(u.B1g.Provider,{value:{sendSearchFeedback:C,id:e.data.id,type:o.Bm.PLAYLIST,blockPosition:0,position:t},children:(0,i.jsx)(d.ZL,{playlist:e.data},e.data.key)},e.data.id);case o.Sc.ARTIST:return(0,i.jsx)(u.B1g.Provider,{value:{sendSearchFeedback:C,id:e.data.id,type:o.Bm.ARTIST,blockPosition:0,position:t},children:(0,i.jsx)(c.IT,{artist:e.data},e.data.id)},e.data.id);case o.Sc.PODCAST:return(0,i.jsx)(u.B1g.Provider,{value:{sendSearchFeedback:C,id:e.data.id,type:o.Bm.PODCAST,blockPosition:0,position:t},children:(0,i.jsx)(n.rf,{album:e.data,withLikesCount:!0,withAddition:!1},e.data.id)},e.data.id);default:return null}})},[S,h,p,C]);return(0,i.jsxs)(l.t,{className:(0,r.W)(_().root,a),containerClassName:_().container,ref:t,children:[(0,i.jsxs)("div",{children:[v&&(0,i.jsx)("div",{className:_().correctedTextBlock,children:v}),(0,i.jsx)("div",{className:(0,r.W)(_().items,{[_().items_withChildren]:k>0&&!!f}),children:b}),f]}),(0,i.jsx)(m.$_,{className:_().footer})]})},S=(0,s.forwardRef)((e,t)=>(0,i.jsx)(p,{forwardRef:t,...e}))},43622:function(e,t,a){"use strict";a.d(t,{SearchHistoryBlock:function(){return j}});var i=a(9753),r=a(9544),s=a(38527),o=a(98639),l=a(80542),n=a(27230),c=a(6806),d=a(19355),u=a.n(d);let m="/search/history",x=e=>e===m,h=(0,r.Pi)(()=>{var e;let t=(0,s.uK4)().get(s.U5t),{search:a,user:r,experiments:d}=(0,s.oR4)(),{formatMessage:h}=(0,l.Z)(),_=a.history.items;if(a.isHistoryReady&&(null===(e=r.account)||void 0===e?void 0:e.uid)&&(0,o.use)(a.getHistory({userId:r.account.uid,config:t,experiments:d})),(0,o.useEffect)(()=>()=>{var e;x(null===(e=location)||void 0===e?void 0:e.pathname)||a.resetHistoryStateRequest()},[a]),0===_.length)return null;let p=_.map(n.F).filter(e=>e);return(0,i.jsx)("section",{className:u().root,children:(0,i.jsx)(c.MixedEntitiesBlock,{headerClassName:u().header,containerClassName:u().content,isLoading:a.isHistoryLoading,title:h({id:"search.history"}),viewAllAction:m,maxColumns:2,itemsPerColumn:4,showControls:!0,children:p})})});var _=a(31014),p=a(39513),S=a(2570),C=a(71707),v=a(78166),f=a.n(v);let k="/search/history",y=e=>e===k,b=(0,r.Pi)(()=>{var e;let t=(0,s.uK4)().get(s.U5t),{search:a,user:r,experiments:d}=(0,s.oR4)(),{formatMessage:u}=(0,l.Z)(),m=(0,C.useClearHistory)(a.resetHistoryItems),x=a.history.items;if(a.isHistoryReady&&(null===(e=r.account)||void 0===e?void 0:e.uid)&&(0,o.use)(a.getHistory({userId:r.account.uid,config:t,experiments:d})),(0,o.useEffect)(()=>()=>{var e;y(null===(e=location)||void 0===e?void 0:e.pathname)||a.resetHistoryStateRequest()},[a]),0===x.length)return null;let h=x.map(n.F).filter(e=>e);return(0,i.jsxs)("div",{children:[(0,i.jsx)(c.MixedEntitiesBlock,{headerClassName:f().header,containerClassName:f().mixedEntitiesBlock,isLoading:a.isHistoryLoading,title:u({id:"search.history"}),viewAllAction:k,titleSize:"xs",children:h}),(0,i.jsx)("div",{className:f().buttonContainer,children:(0,i.jsx)(p.z,{className:f().button,"aria-label":u({id:"search.clear-history"}),disabled:!x.length,size:"default",radius:"xxxl",onClick:m,children:(0,i.jsx)(S.Caption,{variant:"span",size:"m",type:"text",children:(0,i.jsx)(_.Z,{id:"search.clear-history"})})})})]})}),j=(0,r.Pi)(()=>{let{settings:e}=(0,s.oR4)();return e.layout===s.t8m.Mobile?(0,i.jsx)(b,{}):(0,i.jsx)(h,{})})},57613:function(e,t,a){"use strict";a.d(t,{SearchMixed:function(){return A}});var i=a(9753),r=a(60836),s=a(98639),o=a(80542),l=a(95695),n=a(41055),c=a(3084),d=a(9544),u=a(84338),m=a(93490),x=a(4491),h=a(73276),_=a(44023),p=a(40029),S=a(38527);let C=e=>e.filter(e=>e.type!==l.Sc.PODCAST_EPISODE),v=(0,d.Pi)(e=>{let{forwardRef:t,isLoading:a=!1,items:r=[],title:s,sendSearchFeedback:o,blockPosition:n=0,containerClassName:d,headerClassName:v,className:f}=e,k=C(r);return(0,i.jsx)(c.HY,{isShimmerVisible:a,isShimmerActive:!0,className:f,containerClassName:d,headerClassName:v,showHeaderShimmer:!0,title:s,ref:t,children:k.map((e,t)=>{switch(e.type){case l.Sc.ALBUM:return(0,i.jsx)(S.B1g.Provider,{value:{sendSearchFeedback:o,id:e.data.id,type:l.Bm.ALBUM,blockPosition:n,position:t},children:(0,i.jsx)(m.rf,{album:e.data,contentLinesCount:3})},e.data.id);case l.Sc.ARTIST:return(0,i.jsx)(S.B1g.Provider,{value:{sendSearchFeedback:o,id:e.data.id,type:l.Bm.ARTIST,blockPosition:n,position:t},children:(0,i.jsx)(x.IT,{artist:e.data,contentLinesCount:3})},e.data.id);case l.Sc.PLAYLIST:return(0,i.jsx)(S.B1g.Provider,{value:{sendSearchFeedback:o,id:e.data.id,type:l.Bm.PLAYLIST,blockPosition:n,position:t},children:(0,i.jsx)(h.ZL,{playlist:e.data,contentLinesCount:3})},e.data.key);case l.Sc.UGC_TRACK:case l.Sc.TRACK:return(0,i.jsx)(S.B1g.Provider,{value:{sendSearchFeedback:o,id:e.data.albumId?"".concat(e.data.id,":").concat(e.data.albumId):e.data.id,type:l.Bm.TRACK,blockPosition:n,position:t},children:(0,i.jsx)(_.G7,{track:e.data,overrideContextType:u.Zc.Search})},e.data.id);case l.Sc.WAVE:return(0,i.jsx)(S.B1g.Provider,{value:{sendSearchFeedback:o,id:e.data.stationId,type:l.Bm.WAVE,blockPosition:n,position:t},children:(0,i.jsx)(p.op,{vibe:e.data})},e.data.stationId);case l.Sc.PODCAST:return(0,i.jsx)(S.B1g.Provider,{value:{sendSearchFeedback:o,id:e.data.id,type:l.Bm.PODCAST,blockPosition:n,position:t},children:(0,i.jsx)(m.rf,{album:e.data,contentLinesCount:3,withLikesCount:!0,withAddition:!1})},e.data.id)}})})}),f=(0,s.forwardRef)((e,t)=>(0,i.jsx)(v,{forwardRef:t,...e}));var k=a(57714),y=a.n(k);let b=()=>Array.from([,,].keys()).map(e=>(0,i.jsx)(f,{isLoading:!0,className:y().block,headerClassName:y().blockHeader,containerClassName:y().blockCarousel},e)),j=e=>{let{forwardRef:t,className:a,results:d,isLoading:u,sendSearchFeedback:m,searchCorrectedText:x}=e,{formatMessage:h}=(0,o.Z)(),_=(0,s.useMemo)(()=>{if(u)return(0,i.jsx)(b,{});let e={[l.Sc.ALL]:{message:h({id:"search-results.best"}),type:l.Sc.ALL,items:[]},[l.Sc.ARTIST]:{message:h({id:"search-results.artist"}),type:l.Sc.ARTIST,items:[]},[l.Sc.PODCAST]:{message:h({id:"search-results.podcasts-and-books"}),type:l.Sc.PODCAST,items:[]},[l.Sc.ALBUM]:{message:h({id:"search-results.album"}),type:l.Sc.ALBUM,items:[]},[l.Sc.PLAYLIST]:{message:h({id:"search-results.playlist"}),type:l.Sc.PLAYLIST,items:[]}};return d.forEach(t=>{var a,i;null===(a=e[t.type])||void 0===a||a.items.push(t),null===(i=e[l.Sc.ALL])||void 0===i||i.items.push(t)}),Object.getOwnPropertyNames(e).filter(t=>e[t].items.length>0).map((t,a)=>{let r=e[t];return(0,i.jsx)(f,{className:y().block,headerClassName:y().blockHeader,containerClassName:y().blockCarousel,blockPosition:a,items:r.items,title:r.message,sendSearchFeedback:m},a)})},[u,d,h,m]);return(0,i.jsxs)(n.t,{className:(0,r.W)(y().root,a),containerClassName:y().container,ref:t,children:[(0,i.jsxs)("div",{className:y().content,children:[x&&(0,i.jsx)("div",{className:y().correctedTextBlock,children:x}),(0,i.jsx)("div",{className:y().items,children:_})]}),(0,i.jsx)(c.$_,{className:y().footer})]})},A=(0,s.forwardRef)((e,t)=>(0,i.jsx)(j,{forwardRef:t,...e}))},97515:function(e,t,a){"use strict";a.d(t,{SearchPodcastList:function(){return v}});var i=a(9753),r=a(98639),s=a(95695);let o=e=>{let t=[],a=[];return e.forEach(e=>{e.type===s.Sc.PODCAST?t.push(e):a.push(e)}),{podcasts:t,podcastEpisodes:a}};var l=a(59476),n=a(9544),c=a(80542),d=a(84338),u=a(44023),m=a(38527),x=a(6806),h=a(61512),_=a.n(h);let p=(0,n.Pi)(e=>{let{results:t,isLoading:a,sendSearchFeedback:o}=e,l=(0,m.x5)(),{formatMessage:n}=(0,c.Z)(),h=(0,r.useMemo)(()=>t.map((e,t)=>{let a=e.data.albumId?"".concat(e.data.id,":").concat(e.data.albumId):e.data.id;return(0,i.jsx)(m.B1g.Provider,{value:{sendSearchFeedback:o,id:e.data.id,type:s.Bm.PODCAST_EPISODE,blockPosition:0,position:t},children:(0,i.jsx)(u.FP,{track:e.data,playContextParams:{contextData:{type:d.Ak.Various,meta:{id:a},from:l},queueParams:{index:0},loadContextMeta:!0},withPodcastName:!0})},a)}),[t,l,o]);return(0,i.jsx)(x.MixedEntitiesBlock,{className:_().root,headerClassName:_().header,containerClassName:_().content,isLoading:a,title:n({id:"search-results.podcast-episodes"}),maxColumns:1,itemsPerColumn:4,showControls:!0,children:h})}),S=(0,r.forwardRef)((e,t)=>(0,i.jsx)(p,{forwardRef:t,...e})),C=e=>{let{isLoading:t,results:a,sendSearchFeedback:r,searchCorrectedText:n,className:c}=e,{podcasts:d,podcastEpisodes:u}=o(a);return(0,i.jsx)(l.SearchEntitiesGrid,{className:c,isLoading:t,results:d,filter:s.ay.PODCAST,sendSearchFeedback:r,searchCorrectedText:n,children:u.length>0?(0,i.jsx)(S,{sendSearchFeedback:r,results:u,isLoading:t}):void 0})},v=(0,r.forwardRef)((e,t)=>(0,i.jsx)(C,{forwardRef:t,...e}))},65345:function(e,t,a){"use strict";a.d(t,{SearchTrackList:function(){return p}});var i=a(9753),r=a(60836),s=a(98639),o=a(84338),l=a(95695),n=a(41055),c=a(44023),d=a(38527),u=a(3084),m=a(57715),x=a.n(m);let h=()=>Array.from(Array(36).keys()).map(e=>(0,i.jsx)(u.DX,{isActive:!0,className:x().shimmer,variant:d.Lxt.PLAYLIST},e)),_=e=>{let{forwardRef:t,className:a,results:m,isLoading:_,sendSearchFeedback:p,searchCorrectedText:S}=e,C=(0,d.x5)(),v=(0,s.useCallback)((e,t)=>({contextData:{type:o.Ak.Various,meta:{id:t?"".concat(e,":").concat(t):e},from:C,overrideContextType:o.Zc.Search},queueParams:{index:0},loadContextMeta:!0}),[C]),f=(0,s.useMemo)(()=>_?(0,i.jsx)(h,{}):m.filter(e=>[l.Sc.TRACK,l.Sc.UGC_TRACK].includes(e.type)).map((e,t)=>{let{data:a}=e;return(0,i.jsx)(d.B1g.Provider,{value:{sendSearchFeedback:p,id:a.albumId?"".concat(a.id,":").concat(a.albumId):a.id,type:l.Bm.TRACK,blockPosition:0,position:t},children:(0,i.jsx)(c.O2,{track:a,playContextParams:v(a.id,a.albumId)})},a.id)}),[_,m,v,p]);return(0,i.jsxs)(n.t,{className:(0,r.W)(x().root,a),containerClassName:x().container,ref:t,children:[(0,i.jsxs)("div",{className:x().content,children:[S&&(0,i.jsx)("div",{className:x().correctedTextBlock,children:S}),(0,i.jsx)("div",{className:x().items,children:f})]}),(0,i.jsx)(u.$_,{className:x().footer})]})},p=(0,s.forwardRef)((e,t)=>(0,i.jsx)(_,{forwardRef:t,...e}))},77203:function(e){e.exports={root:"MixedEntitiesBlock_root__Zs8l2",controls:"MixedEntitiesBlock_controls__mOhq7",columns:"MixedEntitiesBlock_columns__6YlqL",columns_one:"MixedEntitiesBlock_columns_one__pVHXi",columns_two:"MixedEntitiesBlock_columns_two__zw6GL",column:"MixedEntitiesBlock_column__sHpUC"}},37016:function(e){e.exports={shimmer:"MixedEntitiesList_shimmer__sPCJN"}},319:function(e){e.exports={buttonArrow:"MixedEntitiesListItem_buttonArrow__Emsn1",titleLink:"MixedEntitiesListItem_titleLink__RURfg",titleText:"MixedEntitiesListItem_titleText__YuRWS",root:"MixedEntitiesListItem_root__bHtJ6",root_disabled:"MixedEntitiesListItem_root_disabled__DoZ5p",ripple:"MixedEntitiesListItem_ripple__uW_0P",playButtonCell:"MixedEntitiesListItem_playButtonCell__OlVV0",controlsBarCell:"MixedEntitiesListItem_controlsBarCell__J78Qc",text:"MixedEntitiesListItem_text__RM5Qh"}},70390:function(e){e.exports={card_root:"HorizontalCardContainer_root__YoAAP",root:"SearchColumnMeta_root__AlBTs",root_disabled:"SearchColumnMeta_root_disabled__YIvnw",albumLink:"SearchColumnMeta_albumLink__kWgmo",artistCaption:"SearchColumnMeta_artistCaption__aP_ij",artistLink:"SearchColumnMeta_artistLink__2NVDf",description:"SearchColumnMeta_description__55wxv",explicitMark:"SearchColumnMeta_explicitMark__njTQl",title:"SearchColumnMeta_title__TRQrJ",titleContainer:"SearchColumnMeta_titleContainer__0sj5A",version:"SearchColumnMeta_version__dv3CA",root_disliked:"SearchColumnMeta_root_disliked__e46E6",title_withVersion:"SearchColumnMeta_title_withVersion__t3g1H",text:"SearchColumnMeta_text__SsWM7"}},78812:function(e){e.exports={root:"SearchColumnShimmer_root__PDf3Y",infoContainer:"SearchColumnShimmer_infoContainer__cQ8_H",textContainer:"SearchColumnShimmer_textContainer__IekgL",title:"SearchColumnShimmer_title__IorPg",description:"SearchColumnShimmer_description__nNupy",cover:"SearchColumnShimmer_cover__58jV8",action:"SearchColumnShimmer_action__JbJGl"}},4286:function(e){e.exports={root:"SearchCorrectedText_root__ZM2f2",link:"SearchCorrectedText_link__eORMG",text:"SearchCorrectedText_text__HKgvL"}},43182:function(e){e.exports={root:"SearchEmpty_root__Yz53B",container:"SearchEmpty_container__6WP_o",content:"SearchEmpty_content__OdVMa",correctedTextBlock:"SearchEmpty_correctedTextBlock__wR4Hh",icon:"SearchEmpty_icon__NYKMM",title:"SearchEmpty_title__C77x5",subtitle:"SearchEmpty_subtitle__2TlGa",footer:"SearchEmpty_footer__WP03G"}},33661:function(e){e.exports={root:"SearchEntitiesGrid_root__kk0fO",container:"SearchEntitiesGrid_container__zFcDu",correctedTextBlock:"SearchEntitiesGrid_correctedTextBlock__4j4cD",items:"SearchEntitiesGrid_items__RrGDy",items_withChildren:"SearchEntitiesGrid_items_withChildren__VW6y_",footer:"SearchEntitiesGrid_footer__NK1iL"}},19355:function(e){e.exports={root:"SearchHistoryBlockDesktop_root__jKICZ",controls:"SearchHistoryBlockDesktop_controls__5JPBt",header:"SearchHistoryBlockDesktop_header__zOALK",clearButton:"SearchHistoryBlockDesktop_clearButton__kN4Nk",content:"SearchHistoryBlockDesktop_content__doQsC"}},78166:function(e){e.exports={button:"SearchHistoryBlockMobile_button__Wh_Q6",header:"SearchHistoryBlockMobile_header__Lx4On",mixedEntitiesBlock:"SearchHistoryBlockMobile_mixedEntitiesBlock__cJ3o_",buttonContainer:"SearchHistoryBlockMobile_buttonContainer__IppED"}},57714:function(e){e.exports={root:"SearchMixed_root__RR4QT",container:"SearchMixed_container__KIfE1",correctedTextBlock:"SearchMixed_correctedTextBlock___1rfE",block:"SearchMixed_block__SasiH",blockCarousel:"SearchMixed_blockCarousel__IQjJA",blockHeader:"SearchMixed_blockHeader__L0FSh",footer:"SearchMixed_footer__INQFP"}},61512:function(e){e.exports={root:"SearchPodcastEpisodes_root__VjZhR",controls:"SearchPodcastEpisodes_controls___kYPx",header:"SearchPodcastEpisodes_header__uqkmY",clearButton:"SearchPodcastEpisodes_clearButton__eeDVF",content:"SearchPodcastEpisodes_content__96WMv"}},57715:function(e){e.exports={root:"SearchTrackList_root__pSSfZ",container:"SearchTrackList_container__Bww_R",shimmer:"SearchTrackList_shimmer__L9t1x",correctedTextBlock:"SearchTrackList_correctedTextBlock__w5t0t",items:"SearchTrackList_items__VucVX",footer:"SearchTrackList_footer__M70p4"}}}]);