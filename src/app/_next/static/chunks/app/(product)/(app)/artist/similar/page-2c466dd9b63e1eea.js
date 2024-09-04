(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9665],{39716:function(t,e,a){Promise.resolve().then(a.bind(a,75792))},75792:function(t,e,a){"use strict";a.r(e);var i=a(9753),l=a(74717),r=a(96290);e.default=()=>{let t=(0,l.useSearchParams)().get("artistId");return t||(0,l.notFound)(),(0,i.jsx)(r.x3,{artistId:t})}},96290:function(t,e,a){"use strict";a.d(e,{pr:function(){return o.ArtistAlbumsPage},MX:function(){return s.M},aG:function(){return n.ArtistConcertsPage},vQ:function(){return R.ArtistFamiliarPage},xA:function(){return i.ArtistPage},Od:function(){return P},x3:function(){return r.ArtistSimilarPage},hD:function(){return l.ArtistTracksPage}});var i=a(72244),l=a(55908),r=a(99931),o=a(84292),n=a(65295),s=a(38007);a(98171);var u=a(42288),d=a(10542),c=a(95695),g=a(93490),m=a(4491),N=a(73276),E=a(44023),S=a(33589),p=a(76351),b=a(38527);let C=(t,e)=>(0,u.pj)({artist:(0,S.d)(t),lastMonthListeners:null==e?void 0:e.lastMonthListeners}),G=t=>{let e=t.artists.map(t=>(0,S.tR)({artist:t}));return(0,u.pj)({playlist:(0,N.RE)({playlist:t.playlist}),artists:e})};var v=a(395);let D=u.V5.model("ArtistAlbumsPage",{loadingState:u.V5.enumeration(Object.values(b.Gui)),pager:u.V5.maybeNull(v.Vn),variant:u.V5.maybeNull(u.V5.enumeration(Object.values(s.M))),alreadyRequestedPages:u.V5.map(u.V5.number),pendingPages:u.V5.map(u.V5.number),requests:u.V5.maybeNull(u.V5.number),errorStatusCode:u.V5.maybeNull(u.V5.number),items:u.V5.array(u.V5.maybeNull(g.ug))}).views(t=>({get isNotFound(){var e;let a=t.loadingState===b.Gui.RESOLVE&&(null===(e=t.pager)||void 0===e?void 0:e.total)===0,i=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===b.Gui.REJECT&&i||a}})).actions(t=>({setVariant:e=>{t.variant=e},getData:(0,u.ls)(function*(e){let{artistId:a,page:i=0,pageSize:l=20,sort:r}=e,{artistsResource:o,modelActionsLogger:n}=(0,u.dU)(t);if(!(t.loadingState===b.Gui.PENDING&&t.pendingPages.has("".concat(i))||t.alreadyRequestedPages.has("".concat(i)))){"number"==typeof i&&t.alreadyRequestedPages.set("".concat(i),i);try{var c;let e;t.loadingState=b.Gui.PENDING,t.pendingPages.set("".concat(i),i);let n={artistId:a,page:i,pageSize:l,sort:{sortBy:null==r?void 0:r.sortBy}};switch(t.variant){case s.M.COMPILATIONS:e=yield o.getAlsoAlbums(n);break;case s.M.DISCOGRAPHY:e=yield o.getDiscographyAlbums(n);break;default:e=yield o.getDirectAlbums(n)}let d={page:i,perPage:l,total:e.pager.total};0===t.items.length&&(t.items=(0,u.pj)(Array.from({length:d.total},()=>null)));let m=e.albums.map(g.ym);(0,b.AG_)({items:t.items,mappedRawItems:m,page:i,pageSize:l}),t.pager=d,t.requests=(null!==(c=t.requests)&&void 0!==c?c:0)+1,t.loadingState=b.Gui.RESOLVE}catch(e){n.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==b.Gui.IDLE&&(t.loadingState=b.Gui.REJECT)}finally{t.pendingPages.delete("".concat(i))}}}),reset(){t.loadingState=b.Gui.IDLE,t.pendingPages.clear(),t.pager=null,t.variant=null,t.alreadyRequestedPages.clear(),t.errorStatusCode=null,t.items=(0,u.pj)([])}})),V=u.V5.model("ArtistConcertsPage",{loadingState:u.V5.enumeration(Object.values(b.Gui)),errorStatusCode:u.V5.maybeNull(u.V5.number),concerts:u.V5.maybeNull(u.V5.array(p.Z))}).views(t=>({get isLoading(){return t.loadingState===b.Gui.IDLE||t.loadingState===b.Gui.PENDING},get isNotFound(){var e;let a=t.loadingState===b.Gui.RESOLVE&&(null===(e=t.concerts)||void 0===e?void 0:e.length)===0,i=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===b.Gui.REJECT&&i||a}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:i,modelActionsLogger:l}=(0,u.dU)(t);if(t.loadingState!==b.Gui.PENDING)try{t.loadingState=b.Gui.PENDING;let{concerts:e}=yield i.getConcerts({artistId:a});t.concerts=(0,u.pj)(e.map(p.zj)),t.loadingState=b.Gui.RESOLVE}catch(e){l.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==b.Gui.IDLE&&(t.loadingState=b.Gui.REJECT)}}),reset(){t.loadingState=b.Gui.IDLE,t.errorStatusCode=null,t.concerts=null}})),h=t=>(0,u.pj)({...(0,g.cO)({album:t,artists:t.artists}),version:t.version}),y=u.V5.model("ArtistFamiliarPage",{loadingState:u.V5.enumeration(Object.values(b.Gui)),errorStatusCode:u.V5.maybeNull(u.V5.number),vibeTracks:u.V5.maybeNull(u.V5.array(E.le)),collectionTracks:u.V5.maybeNull(u.V5.array(E.le)),collectionAlbums:u.V5.maybeNull(u.V5.array(g.ug))}).views(t=>({get isLoading(){return t.loadingState===b.Gui.IDLE||t.loadingState===b.Gui.PENDING},get isLoaded(){return t.loadingState===b.Gui.RESOLVE},get isRejected(){return t.loadingState===b.Gui.REJECT},get isNotFound(){let e=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===b.Gui.REJECT&&e},get hasCollectionEntities(){var e,a;return this.isLoaded&&Number(null===(e=t.collectionTracks)||void 0===e?void 0:e.length)>0||Number(null===(a=t.collectionAlbums)||void 0===a?void 0:a.length)>0},get shouldShowTitleBlocks(){var i,l;if(this.isLoading)return!0;return Number(null===(i=t.collectionTracks)||void 0===i?void 0:i.length)>0&&Number(null===(l=t.collectionAlbums)||void 0===l?void 0:l.length)>0},get hasVibeTracks(){var r;return Number(null===(r=t.vibeTracks)||void 0===r?void 0:r.length)>0},get collectionEntitiesData(){var o,n;return null!==(n=null===(o=t.collectionTracks)||void 0===o?void 0:o.map(E.E5))&&void 0!==n?n:[]},get vibeEntitiesData(){var s,u;return null!==(u=null===(s=t.vibeTracks)||void 0===s?void 0:s.map(E.E5))&&void 0!==u?u:[]}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:i,modelActionsLogger:l}=(0,u.dU)(t);if(t.loadingState!==b.Gui.PENDING)try{var r,o,n,s,c,g;t.loadingState=b.Gui.PENDING;let e=yield i.getFamiliarYou({artistId:a,waveTracksLimit:100,collectionTracksLimit:100,collectionAlbumsLimit:20});t.vibeTracks=(0,u.pj)(null===(o=e.wave)||void 0===o?void 0:null===(r=o.tracks)||void 0===r?void 0:r.map(t=>(0,E.Vt)(t))),t.collectionTracks=(0,u.pj)(null===(s=e.collection)||void 0===s?void 0:null===(n=s.tracks)||void 0===n?void 0:n.map(t=>(0,E.Vt)(t))),t.collectionAlbums=(0,u.pj)(null===(g=e.collection)||void 0===g?void 0:null===(c=g.albums)||void 0===c?void 0:c.map(h)),t.loadingState=b.Gui.RESOLVE}catch(e){l.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==b.Gui.IDLE&&(t.loadingState=b.Gui.REJECT)}}),reset(){t.loadingState=b.Gui.IDLE,t.errorStatusCode=null,t.vibeTracks=null,t.collectionTracks=null}}));var T=a(10668);let A=u.V5.model("ArtistPick",{playlist:T.Cd,artists:u.V5.array(S.Go)}),k=u.V5.model("ArtistSimilarArtistsPage",{loadingState:u.V5.enumeration(Object.values(b.Gui)),errorStatusCode:u.V5.maybeNull(u.V5.number),similarArtists:u.V5.maybeNull(u.V5.array(S.Go))}).views(t=>({get isLoading(){return t.loadingState===b.Gui.IDLE||t.loadingState===b.Gui.PENDING},get isNotFound(){var e;let a=t.loadingState===b.Gui.RESOLVE&&(null===(e=t.similarArtists)||void 0===e?void 0:e.length)===0,i=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===b.Gui.REJECT&&i||a}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:i,modelActionsLogger:l}=(0,u.dU)(t);try{t.loadingState=b.Gui.PENDING;let e=yield i.getSimilarArtists({artistId:a});t.similarArtists=(0,u.pj)(e.similarArtists.map(S.d)),t.loadingState!==b.Gui.IDLE&&(t.loadingState=b.Gui.RESOLVE)}catch(e){l.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==b.Gui.IDLE&&(t.loadingState=b.Gui.REJECT)}}),reset(){t.loadingState=b.Gui.IDLE,t.errorStatusCode=null,t.similarArtists=(0,u.pj)([])}}));var I=a(72587);let L=u.V5.model("FamiliarInfo",{loadingState:u.V5.enumeration(Object.values(b.Gui)),vibeTrackCount:u.V5.optional(u.V5.number,0),collectionTrackCount:u.V5.optional(u.V5.number,0),collectionAlbumCount:u.V5.optional(u.V5.number,0)}).views(t=>({get isLoaded(){return t.loadingState===b.Gui.RESOLVE},get hasTracks(){return this.isLoaded&&(t.collectionTrackCount>0||t.vibeTrackCount>0)},get hasFamiliarInfo(){return this.isLoaded&&(this.hasTracks||t.collectionAlbumCount>0)},get tracksCount(){return t.collectionTrackCount+t.vibeTrackCount},get hasCollectionEntities(){return this.isLoaded&&(t.collectionTrackCount>0||t.collectionAlbumCount>0)},get hasVibeEntities(){return this.isLoaded&&t.vibeTrackCount>0},href(t){return t?this.hasCollectionEntities?"/artist/".concat(t,"/familiar?tab=").concat(I.g.COLLECTION):this.hasVibeEntities?"/artist/".concat(t,"/familiar?tab=").concat(I.g.VIBE):"/artist/".concat(t,"/familiar"):""}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:i,modelActionsLogger:l}=(0,u.dU)(t);if(t.loadingState!==b.Gui.PENDING)try{t.loadingState=b.Gui.PENDING;let e=yield i.getFamiliarYouInfo({artistId:a,withWaveInfo:!0,withCollectionInfo:!0});e.collection&&(t.collectionTrackCount=e.collection.trackCount,t.collectionAlbumCount=e.collection.albumCount),e.wave&&(t.vibeTrackCount=e.wave.trackCount),t.loadingState!==b.Gui.IDLE&&(t.loadingState=b.Gui.RESOLVE)}catch(e){l.error(e),t.loadingState!==b.Gui.IDLE&&(t.loadingState=b.Gui.REJECT)}}),reset(){t.loadingState=b.Gui.IDLE,t.vibeTrackCount=0,t.collectionTrackCount=0,t.collectionAlbumCount=0}}));var O=a(75191);let f=u.V5.model("FullTracksList",{loadingState:u.V5.enumeration(Object.values(b.Gui)),errorStatusCode:u.V5.maybeNull(u.V5.number),ids:u.V5.maybeNull(u.V5.array(u.V5.string)),tracks:u.V5.optional(u.V5.map(E.le),{})}).views(t=>({getTrackByIndex(e){if(!t.ids||!t.ids.length)return null;let a=t.ids[e];return a&&t.tracks.get(a)||null},get isNotFound(){var e;let a=t.loadingState===b.Gui.RESOLVE&&(null===(e=t.ids)||void 0===e?void 0:e.length)===0,i=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===b.Gui.REJECT&&i||a}})).actions(t=>({getTracksIds:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:i,modelActionsLogger:l}=(0,u.dU)(t);try{t.loadingState=b.Gui.PENDING;let e=yield i.getArtistTrackIds({artistId:a}),{sonataState:l}=(0,u.yj)(t);l.setUnloadedEntitiesData(e.map(t=>(0,O.RN)(t))),t.ids=(0,u.pj)(e),t.loadingState!==b.Gui.IDLE&&(t.loadingState=b.Gui.RESOLVE)}catch(e){l.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==b.Gui.IDLE&&(t.loadingState=b.Gui.REJECT)}}),getTracks:(0,u.ls)(function*(e){let{trackIds:a}=e,{tracksResource:i,modelActionsLogger:l}=(0,u.dU)(t);try{let e=yield i.getTracksMeta({trackIds:a,withProgress:!0});t.tracks.merge(e.reduce((t,e)=>(t[e.id]=(0,E.Vt)(e),t),{}))}catch(t){l.error(t)}}),reset(){let{sonataState:e}=(0,u.yj)(t);e.resetUnloadedEntitiesData(),t.loadingState=b.Gui.IDLE,t.ids=(0,u.pj)([]),t.tracks.clear()}})),P=u.V5.model("ArtistPage",{loadingState:u.V5.enumeration(Object.values(b.Gui)),id:u.V5.maybeNull(u.V5.string),meta:u.V5.maybeNull(m.o9),popularTracks:u.V5.array(E.le),lastRelease:u.V5.maybeNull(g.ug),upcomingAlbum:u.V5.maybeNull(g.W9),concerts:u.V5.maybeNull(u.V5.array(p.Z)),similarArtists:u.V5.array(S.Go),playlists:u.V5.array(N.d2),errorStatusCode:u.V5.maybeNull(u.V5.number),deprecationTargetArtistId:u.V5.maybeNull(u.V5.number),albums:u.V5.array(g.ug),discography:u.V5.array(g.ug),compilations:u.V5.array(g.ug),artistPick:u.V5.maybeNull(A),familiarInfo:L,albumsSubpage:D,fullTracksListSubpage:f,concertsSubpage:V,similarArtistsSubPage:k,familiarSubpage:y}).views(t=>({get isLoading(){return t.loadingState===b.Gui.IDLE||t.loadingState===b.Gui.PENDING},get hasPopularTracks(){return t.loadingState===b.Gui.IDLE||t.loadingState===b.Gui.PENDING||t.popularTracks.length>0},get hasAlbums(){return t.loadingState===b.Gui.IDLE||t.loadingState===b.Gui.PENDING||t.albums.length>0},get hasDiscography(){return t.loadingState===b.Gui.IDLE||t.loadingState===b.Gui.PENDING||t.discography.length>0},get hasCompilations(){return t.loadingState===b.Gui.IDLE||t.loadingState===b.Gui.PENDING||t.compilations.length>0},get hasSimilarArtists(){return t.loadingState===b.Gui.IDLE||t.loadingState===b.Gui.PENDING||t.similarArtists.length>0},get hasPlaylists(){return t.loadingState===b.Gui.IDLE||t.loadingState===b.Gui.PENDING||t.playlists&&t.playlists.length>0},get hasConcerts(){let{experiments:e}=(0,u.yj)(t);return t.loadingState===b.Gui.IDLE||t.loadingState===b.Gui.PENDING||t.concerts&&t.concerts.length>0&&e.checkExperiment(b.peG.WebNewBlockConcerts,"on")},get concertsLink(){var e,a;let{experiments:i}=(0,u.yj)(t);if(i.checkExperiment(b.peG.WebNewConcertsList,"on")&&(null===(e=t.meta)||void 0===e?void 0:e.artist.id)&&t.concerts&&t.concerts.length>3)return"/artist/".concat(null===(a=t.meta)||void 0===a?void 0:a.artist.id,"/concerts");return null},get isNotFound(){return t.loadingState===b.Gui.REJECT&&t.errorStatusCode===d.CN.NOT_FOUND},get isLoaded(){return t.loadingState===b.Gui.RESOLVE},get isRejected(){return t.loadingState===b.Gui.REJECT},get hasReleaseBlock(){return!!(this.isLoading||t.upcomingAlbum||t.lastRelease)}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{slides:i,experiments:l,disclaimer:r}=(0,u.yj)(t),{artistsResource:o,modelActionsLogger:n}=(0,u.dU)(t),s=l.checkExperiment(b.peG.WebNextArtistDisableLastReleases,"on"),m=l.checkExperiment(b.peG.WebNextArtistDisablePopularTracks,"on"),v=l.checkExperiment(b.peG.WebNextArtistDisableSimilarArtists,"on"),D=l.checkExperiment(b.peG.WebNextArtistDisablePopularAlbums,"on"),V=l.checkExperiment(b.peG.WebNextArtistDisableDiscography,"on"),h=l.checkExperiment(b.peG.WebNextArtistDisableCompilations,"on"),y=l.checkExperiment(b.peG.WebNextArtistDisablePlaylists,"on"),T=l.checkExperiment(b.peG.WebNextLegalRejectArtist,"on");if(t.id=a,t.loadingState!==b.Gui.PENDING)try{var A,k;t.loadingState=b.Gui.PENDING;let{popularTracks:e,error:l,artist:n,stats:I,albums:L,playlists:O,alsoAlbums:f,similarArtists:P,lastReleases:R,concerts:j,upcomingAlbum:U,discography:_,artistPick:F}=yield o.getBriefInfo({artistId:a,popularTracksCount:5,fetchPlaylistLikesCounts:!0,discographyBlockEnabled:!0});if("not-found"===l||(null==n?void 0:n.error)==="not-found"){t.errorStatusCode=d.CN.NOT_FOUND,t.loadingState=b.Gui.REJECT;return}if(null===(A=n.deprecation)||void 0===A?void 0:A.targetArtistId){t.deprecationTargetArtistId=n.deprecation.targetArtistId,t.loadingState=b.Gui.RESOLVE;return}t.meta=(0,u.pj)(C(n,I));let x=(null!==(k=n.disclaimers)&&void 0!==k?k:[]).includes(c.em.MODAL);if(!n.available&&x&&T&&(yield r.getArtistDisclaimer({artistId:a})),!s&&R&&R.length>0){let e=R[0];e&&L&&L.length>1&&(t.lastRelease=(0,u.pj)((0,g.ym)(e)))}U&&(t.upcomingAlbum=(0,u.pj)((0,g.wq)(U))),j&&(t.concerts=(0,u.pj)(j.map(p.zj))),!m&&e&&e.length>0&&(t.popularTracks=(0,u.pj)(e.slice(0,5).map(t=>(0,E.Vt)(t)))),!v&&P&&P.length>0&&(t.similarArtists=(0,u.pj)(P.slice(0,9).map(S.d))),!D&&Number(null==L?void 0:L.length)>0&&(t.albums=(0,u.pj)(null==L?void 0:L.map(g.ym))),!V&&Number(null==_?void 0:_.length)>0&&(t.discography=(0,u.pj)(null==_?void 0:_.map(g.ym).slice(0,9))),!h&&Number(null==f?void 0:f.length)>0&&(t.compilations=(0,u.pj)(null==f?void 0:f.map(g.ym).slice(0,9))),!y&&O&&O.length>0&&(t.playlists=(0,u.pj)(O.map(N.Q9).slice(0,9))),F&&(t.artistPick=G(F)),i.resetArtist(),t.loadingState!==b.Gui.IDLE&&(t.loadingState=b.Gui.RESOLVE)}catch(e){n.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==b.Gui.IDLE&&(t.loadingState=b.Gui.REJECT)}}),reset(){t.loadingState=b.Gui.IDLE,t.id=null,t.meta=null,t.errorStatusCode=null,t.deprecationTargetArtistId=null,t.lastRelease=null,t.upcomingAlbum=null,t.concerts=null,t.artistPick=null,t.popularTracks=(0,u.pj)([]),t.similarArtists=(0,u.pj)([]),t.playlists=(0,u.pj)([]),t.albums=(0,u.pj)([]),t.discography=(0,u.pj)([]),t.compilations=(0,u.pj)([])}}));var R=a(60325)}},function(t){t.O(0,[5219,4500,7606,3603,5055,7753,9983,2498,7873,2330,919,567,9448,8527,3084,395,4726,3490,1055,9352,4023,3276,3177,1071,4667,5191,2171,361,1744],function(){return t(t.s=39716)}),_N_E=t.O()}]);