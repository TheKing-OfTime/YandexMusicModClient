(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2898],
    {
        1370: (e, t, a) => {
            "use strict";
            var i;
            a.d(t, { E: () => i }),
                (function (e) {
                    (e.SHOW_AND_LOAD = "SHOW_AND_LOAD"),
                        (e.LOAD_AND_SHOW = "LOAD_AND_SHOW");
                })(i || (i = {}));
        },
        3825: (e) => {
            e.exports = {
                station: "MetroStation_station__mCvqj",
                stationColors: "MetroStation_stationColors__MgJFV",
                colorSpan: "MetroStation_colorSpan__cFHsy",
            };
        },
        3838: (e) => {
            e.exports = {
                root: "BaseAlbumPromo_root__wgbC3",
                controls: "BaseAlbumPromo_controls__NiVRJ",
                item: "BaseAlbumPromo_item__coi3X",
                important: "BaseAlbumPromo_important__OiNRT",
            };
        },
        7183: (e) => {
            e.exports = {
                root: "PromotionsCard_root__1yY_m",
                coverLink: "PromotionsCard_coverLink__masNa",
                image: "PromotionsCard_image__4lmYk",
                titleLink: "PromotionsCard_titleLink__3q_M5",
                subtitle: "PromotionsCard_subtitle__fGfn9",
            };
        },
        8475: (e) => {
            e.exports = {
                item: "MixesMusic_item__9QVmW",
                shimmer: "MixesMusic_shimmer__rJ3xa",
            };
        },
        10244: (e) => {
            e.exports = {
                content: "ContinueListenBaseItem_content__Rdrbh",
                root: "ContinueListenBaseItem_root__FH7Jk",
                root_bookshelf: "ContinueListenBaseItem_root_bookshelf__cKQqb",
                root_newEpisodes:
                    "ContinueListenBaseItem_root_newEpisodes__OTZgU",
                root_withLastPlayed:
                    "ContinueListenBaseItem_root_withLastPlayed__1Z2P5",
                title: "ContinueListenBaseItem_title__vvDta",
                root_withCovers:
                    "ContinueListenBaseItem_root_withCovers__Y4w7V",
                link: "ContinueListenBaseItem_link__3xuh7",
                textContainer: "ContinueListenBaseItem_textContainer__1nvoM",
                titleIcon: "ContinueListenBaseItem_titleIcon__4lGcT",
                subtitle: "ContinueListenBaseItem_subtitle__jFLLT",
                covers: "ContinueListenBaseItem_covers__bCLfi",
                coverContainer: "ContinueListenBaseItem_coverContainer__qdnAa",
                cover: "ContinueListenBaseItem_cover__gSp5J",
            };
        },
        10613: (e) => {
            e.exports = {
                root: "ShimmerMapBlock_root__TAa25",
                heading: "ShimmerMapBlock_heading__rF7ts",
                mapImage: "ShimmerMapBlock_mapImage__bQbYD",
                address: "ShimmerMapBlock_address__GgNdC",
                metroStations: "ShimmerMapBlock_metroStations__omTcd",
            };
        },
        10633: (e, t, a) => {
            "use strict";
            a.d(t, { S: () => c });
            var i = a(33008),
                l = a(66268),
                s = a(93967),
                r = a(52732),
                o = a(79169),
                n = a(18740);
            let d = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        containerClassName: d,
                        headerClassName: c,
                        meta: m,
                        data: u,
                        headingVariant: _,
                        className: g,
                        ...b
                    } = e;
                    return (0, i.jsx)(n.OY, {
                        className: g,
                        ...b,
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        headerClassName: c,
                        containerClassName: d,
                        title: m.title,
                        description: m.description,
                        viewAllActionLink: m.viewAllActionLink,
                        ref: t,
                        headingVariant: _,
                        children:
                            null == u
                                ? void 0
                                : u.items.map((e, t) =>
                                      (0, i.jsx)(
                                          o.Bki,
                                          {
                                              objectType: s.ky.Album,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: u.items.length,
                                              children: (0, i.jsx)(r.aX, {
                                                  album: e,
                                                  contentLinesCount: 3,
                                                  withLikesCount: !0,
                                                  withChart: !0,
                                                  withAddition: !1,
                                              }),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                c = (0, l.forwardRef)((e, t) =>
                    (0, i.jsx)(d, { forwardRef: t, ...e }),
                );
        },
        10993: (e) => {
            e.exports = {
                root: "Neuromusic_root__wTkG_",
                controls: "Neuromusic_controls__8kH7t",
                item: "Neuromusic_item__Q_JI_",
                important: "Neuromusic_important__8Ib5E",
            };
        },
        11753: (e, t, a) => {
            "use strict";
            a.d(t, { ShimmerMapBlock: () => n });
            var i = a(33008),
                l = a(97531),
                s = a(91342),
                r = a(10613),
                o = a.n(r);
            let n = (0, l.PA)((e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)("div", {
                    className: o().root,
                    children: [
                        (0, i.jsx)(s.Shimmer, {
                            className: o().heading,
                            radius: "s",
                            isActive: t,
                        }),
                        (0, i.jsx)(s.Shimmer, {
                            className: o().mapImage,
                            radius: "s",
                            isActive: t,
                        }),
                        (0, i.jsx)(s.Shimmer, {
                            className: o().address,
                            radius: "s",
                            isActive: t,
                        }),
                        (0, i.jsx)(s.Shimmer, {
                            className: o().metroStations,
                            radius: "s",
                            isActive: t,
                        }),
                    ],
                });
            });
        },
        12898: (e, t, a) => {
            "use strict";
            a.d(t, {
                bX: () => aN.BlockEntities,
                RO: () => S,
                hn: () => X,
                Ju: () => aT,
                h9: () => E,
                Od: () => j,
                qh: () => aI.MixesGridBlock,
                SQ: () => ah.S,
                tl: () => aL.t,
                nM: () => ay.Promotions,
                fv: () => h,
                g0: () => aS.g,
                EA: () => aE.Skeleton,
                Rj: () => aj.R,
                _9: () => s,
                dF: () => c,
                vj: () => u,
                vI: () => g,
            });
            var i,
                l = a(90848);
            let s = (e) => {
                var t, a, i, s;
                return (
                    !!Array.isArray(e.tabs.data) &&
                    1 === e.tabs.data.length &&
                    (null == (a = e.tabs.data[0]) || null == (t = a.blocks)
                        ? void 0
                        : t.length) === 1 &&
                    (null == (s = e.tabs.data[0]) || null == (i = s.blocks[0])
                        ? void 0
                        : i.type) === l.t.WIZARD
                );
            };
            var r = a(64641);
            let o = (e) => ({
                type: e.type,
                data: (0, r.SZ)({ clip: e.data.clip, artists: e.data.artists }),
            });
            var n = a(34874),
                d = a(45242);
            let c = (e) => {
                let {
                    playlist: t,
                    likesCount: a,
                    trailer: i,
                    tracksCount: l,
                } = e;
                return {
                    type: n._.LIKED_PLAYLIST_ITEM,
                    data: (0, d.bk)({
                        playlist: t,
                        likesCount: a,
                        trailer: i,
                        tracksCount: l,
                    }),
                };
            };
            var m = a(52732);
            let u = (e) => {
                let {
                    album: t,
                    artists: a,
                    likesCount: i,
                    bookmateOptionRequired: l,
                } = e;
                return {
                    type: n._.NON_MUSIC_ALBUM_ITEM,
                    data: (0, m.sK)({
                        album: t,
                        likesCount: i,
                        bookmateOptionRequired: l,
                        artists: a,
                    }),
                };
            };
            var _ = a(44078);
            let g = (e) => ({
                type: n._.TRACK_ITEM,
                data: (0, _.vU)(e.data.track),
            });
            var b = a(41028),
                p = (function (e) {
                    return (
                        (e.IDLE = "IDLE"),
                        (e.PENDING = "PENDING"),
                        (e.RESOLVE = "RESOLVE"),
                        (e.REJECT = "REJECT"),
                        (e.OUTDATED = "OUTDATED"),
                        e
                    );
                })({});
            let v = b.gK
                    .model("LandingBaseBlock", {
                        loadingState: b.gK.enumeration(Object.values(p)),
                        id: b.gK.string,
                        isNotFound: b.gK.boolean,
                        hasSentAnalyticsOnLoaded: b.gK.boolean,
                        meta: b.gK.maybe(b.gK.frozen()),
                    })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.loadingState === p.IDLE;
                        },
                        get isLoading() {
                            return e.loadingState === p.PENDING;
                        },
                        get isLoaded() {
                            return e.loadingState === p.RESOLVE;
                        },
                        get isRejected() {
                            return e.loadingState === p.REJECT;
                        },
                        get isOutdated() {
                            return e.loadingState === p.OUTDATED;
                        },
                        get isShimmerVisible() {
                            return (
                                this.isNeededToLoad ||
                                this.isLoading ||
                                this.isRejected
                            );
                        },
                        get isShimmerActive() {
                            return this.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        setHasSentAnalyticsOnLoaded(t) {
                            e.hasSentAnalyticsOnLoaded = t;
                        },
                        setOutdated() {
                            e.loadingState = p.OUTDATED;
                        },
                        setIsNeededToLoad() {
                            e.loadingState = p.IDLE;
                        },
                    })),
                A = b.gK.model("LandingBlockFetchableMetaSource", {
                    uri: b.gK.string,
                    countWeb: b.gK.maybe(b.gK.number),
                    count: b.gK.maybe(b.gK.number),
                }),
                C = b.gK.model("LandingBlockFetchableMeta", {
                    title: b.gK.maybe(b.gK.string),
                    description: b.gK.maybe(b.gK.string),
                    viewAllActionLink: b.gK.maybeNull(b.gK.string),
                    source: b.gK.maybe(A),
                    showPolicy: b.gK.maybe(b.gK.string),
                    coverStyle: b.gK.maybe(b.gK.string),
                }),
                T = b.gK.model("NonMusicChartAlbumData", {
                    items: b.gK.array(m.JC),
                }),
                I = v
                    .props({
                        type: b.gK.literal(l.t.CHART_ALBUMS),
                        data: b.gK.maybe(T),
                        meta: C,
                    })
                    .named("NonMusicChartAlbum")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad)
                                return !0;
                            return (
                                (null == (a = e.data) || null == (t = a.items)
                                    ? void 0
                                    : t.length) !== 0
                            );
                        },
                        get objectsCount() {
                            var i, l;
                            return null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                ? l
                                : 0;
                        },
                    })),
                h = b.gK.model("PromotionsDataItem", {
                    featureId: b.gK.string,
                    title: b.gK.string,
                    subtitle: b.gK.string,
                    weblink: b.gK.string,
                    imageUrl: b.gK.string,
                }),
                L = b.gK.model("PromotionsData", { items: b.gK.array(h) }),
                y = v
                    .props({
                        type: b.gK.union(
                            b.gK.literal(l.t.PROMOTIONS),
                            b.gK.literal(l.t.EDITORIAL_PROMOTIONS),
                            b.gK.literal(l.t.NON_MUSIC_PROMOTIONS),
                        ),
                        data: b.gK.maybe(L),
                        meta: C,
                    })
                    .named("Promotions")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad)
                                return !0;
                            return (
                                (null == (a = e.data) || null == (t = a.items)
                                    ? void 0
                                    : t.length) !== 0
                            );
                        },
                        get objectsCount() {
                            var i, l;
                            return null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                ? l
                                : 0;
                        },
                    })),
                S = b.gK.model("LandingAlbumItem", {
                    type: b.gK.literal(n._.ALBUM_ITEM),
                    data: m.JC,
                }),
                N = b.gK.model("LandingLikedPlaylistItem", {
                    type: b.gK.literal(n._.LIKED_PLAYLIST_ITEM),
                    data: d.IP,
                }),
                E = b.gK.model("LandingNonMusicAlbumItem", {
                    type: b.gK.literal(n._.NON_MUSIC_ALBUM_ITEM),
                    data: m.JC,
                }),
                j = b.gK.model("LandingPlaylistItem", {
                    type: b.gK.literal(n._.PLAYLIST_ITEM),
                    data: d.IP,
                }),
                k = b.gK.model("LandingTrackItem", {
                    type: b.gK.literal(n._.TRACK_ITEM),
                    data: _.vj,
                });
            var x = a(79169),
                R = a(59615);
            let P = (e, t, a, i) => ({
                type: n._.ALBUM_ITEM,
                data: (0, m.sK)({
                    album: e,
                    artists: t,
                    trailer: a,
                    releaseDate: i,
                }),
            });
            var f = a(70879);
            let w = (e, t) => ({
                type: n._.ARTIST_ITEM,
                data: (0, f.as)({ artist: e, trailer: t }),
            });
            var K = a(30457);
            let O = (e) => ({
                    type: n._.PERSONAL_PLAYLIST_ITEM,
                    data: {
                        playlist: (0, d.bk)({
                            playlist: e.data.playlist,
                            trailer: e.data.trailer,
                        }),
                        playlistType: e.data.playlistType,
                        description: e.data.description,
                    },
                }),
                M = (e, t) => ({
                    type: n._.PLAYLIST_ITEM,
                    data: (0, d.bk)({ playlist: e, trailer: t }),
                }),
                D = (e) => {
                    switch (e.type) {
                        case n._.MIX_CARD_ITEM:
                            return (0, b.wg)({
                                type: n._.MIX_CARD_ITEM,
                                data: (0, K.rc)(e.data),
                            });
                        case n._.NON_MUSIC_ALBUM_ITEM:
                            return u({
                                album: e.data.album,
                                likesCount: e.data.likesCount,
                                bookmateOptionRequired:
                                    e.data.bookmateOptionRequired,
                            });
                        case n._.ALBUM_ITEM:
                            return P(
                                e.data.album,
                                e.data.artists,
                                e.data.trailer,
                            );
                        case n._.CHART_ALBUM_ITEM:
                            let t, a, i, l;
                            return (
                                (t = e.data.album),
                                (a = e.data.chart),
                                (i = e.data.likesCount),
                                (l = e.data.trailer),
                                {
                                    type: n._.CHART_ALBUM_ITEM,
                                    data: (0, m.sK)({
                                        album: t,
                                        chart: a,
                                        likesCount: i,
                                        trailer: l,
                                    }),
                                }
                            );
                        case n._.ARTIST_ITEM:
                            return w(e.data.artist, e.data.trailer);
                        case n._.PLAYLIST_ITEM:
                            return M(e.data.playlist, e.data.trailer);
                        case n._.PERSONAL_PLAYLIST_ITEM:
                            return O(e);
                        case n._.LIKED_PLAYLIST_ITEM:
                            return c({
                                playlist: e.data.playlist,
                                likesCount: e.data.likesCount,
                                trailer: e.data.trailer,
                            });
                    }
                },
                B = b.gK.model("LandingArtistItem", {
                    type: b.gK.literal(n._.ARTIST_ITEM),
                    data: f.PK,
                }),
                V = b.gK.model("LandingChartAlbumItem", {
                    type: b.gK.literal(n._.CHART_ALBUM_ITEM),
                    data: m.JC,
                }),
                U = b.gK.model("LandingMixCardItemModel", {
                    type: b.gK.literal(n._.MIX_CARD_ITEM),
                    data: K.bv,
                }),
                Y = b.gK.model("LandingPersonalPlaylistItem", {
                    playlist: d.IP,
                    playlistType: b.gK.string,
                    description: b.gK.maybe(b.gK.string),
                }),
                G = b.gK.model("LandingPersonalPlaylistItem", {
                    type: b.gK.literal(n._.PERSONAL_PLAYLIST_ITEM),
                    data: Y,
                }),
                W = b.gK.union(S, B, j, G, N, V, E, U),
                X = b.gK
                    .compose(
                        b.gK.model("LandingBlockEntities", {
                            title: b.gK.maybeNull(b.gK.string),
                            items: b.gK.array(W),
                        }),
                        R.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return (
                                e.isNeededToLoad ||
                                e.loadingState === x.GuX.PENDING
                            );
                        },
                        get isNotFound() {
                            return e.isRejected;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, b.L3)(function* (t) {
                            let { blockId: a } = t,
                                { landingResource: i, modelActionsLogger: l } =
                                    (0, b._$)(e);
                            if (e.loadingState !== x.GuX.PENDING)
                                try {
                                    e.loadingState = x.GuX.PENDING;
                                    let t = yield i.getBlockEntities({
                                        blockId: a,
                                        page: 0,
                                        pageSize: 100,
                                    });
                                    (e.title = t.title),
                                        (e.items = (0, b.wg)(t.items.map(D))),
                                        e.loadingState !== x.GuX.IDLE &&
                                            (e.loadingState = x.GuX.RESOLVE);
                                } catch (t) {
                                    l.error(t),
                                        e.loadingState !== x.GuX.IDLE &&
                                            (e.loadingState = x.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = x.GuX.IDLE),
                                (e.items = (0, b.wg)([])),
                                (e.title = null);
                        },
                    }));
            var H = a(61979),
                z = a(65599);
            let F = [l.t.COLLECTION_DOWNLOADED_TRACKS];
            var $ = a(51551);
            !(function (e) {
                (e.RADIO = "radio"),
                    (e.PROMOTIONS = "promotions"),
                    (e.EDITORIAL_PLAYLISTS = "editorial-playlists"),
                    (e.PLAYLIST_WITH_TRACKS = "playlist-with-tracks");
            })(i || (i = {}));
            let J = (e) =>
                !!(e && "object" == typeof e && e[0] && "owner" in e[0].data);
            var Z = a(15479),
                q = a(15029),
                Q = a(93435);
            let ee = (e) => e.every((e) => Object.values(Q.M).includes(e)),
                et = (e) => {
                    var t, a, i;
                    let l = (0, f.FA)(e.decomposed),
                        s =
                            e.disclaimers && ee(e.disclaimers)
                                ? e.disclaimers
                                : void 0;
                    return (0, b.wg)({
                        id: String(e.id),
                        name: null != (a = e.name) ? a : "",
                        various: e.various,
                        isAvailable: null == (i = e.available) || i,
                        isComposer: e.composer,
                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                        decomposed: l,
                        disclaimers: s,
                    });
                };
            var ea = a(1370),
                ei = a(54344),
                el = a(25911);
            let es = (e) => {
                    switch (e.type) {
                        case n._.ALBUM_ITEM:
                            return P(
                                e.data.album,
                                e.data.artists,
                                e.data.trailer,
                            );
                        case n._.PRESAVED_ALBUM_ITEM:
                            return ((e) => {
                                var t;
                                let {
                                    album: a,
                                    artists: i,
                                    releaseDate: l,
                                    millisecondsUntilRelease: s,
                                    presaveDate: r,
                                } = e.data || {};
                                return {
                                    type: n._.PRESAVED_ALBUM_ITEM,
                                    data: (0, m.lO)({
                                        ...a,
                                        artists: i,
                                        releaseDate: l,
                                        millisecondsUntilRelease: s,
                                        presaveDate: r,
                                        coverUri:
                                            null == (t = a.cover)
                                                ? void 0
                                                : t.uri,
                                    }),
                                };
                            })(e);
                    }
                },
                er = (e) =>
                    "object" == typeof e &&
                    null !== e &&
                    "type" in e &&
                    e.type === l.t.TABS,
                eo = (e) => Object.values(l.t).includes(e),
                en = (e) => {
                    let {
                        showPolicy: t,
                        isNeededToLoad: a,
                        isLoading: i,
                        isLoaded: l,
                        isRejected: s,
                        isNotEmpty: r,
                        isOutdated: o,
                        isNeededToHide: n,
                    } = e;
                    if (n) return !1;
                    switch (t) {
                        case ea.E.SHOW_AND_LOAD:
                            if (i || s || a) return !0;
                            return r;
                        case ea.E.LOAD_AND_SHOW:
                            return (l && r) || !!o;
                        default:
                            return !0;
                    }
                },
                ed = b.gK.model("ArtistPopularTracksData", {
                    items: b.gK.array(_.vj),
                }),
                ec = v
                    .props({
                        type: b.gK.literal(l.t.ARTIST_POPULAR_TRACKS),
                        data: b.gK.maybe(ed),
                        meta: C,
                    })
                    .named("ArtistPopularTracks")
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty:
                                    (null == (t = e.data)
                                        ? void 0
                                        : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null !=
                                (i =
                                    null == (a = e.data)
                                        ? void 0
                                        : a.items.length)
                                ? i
                                : 0;
                        },
                    })),
                em = b.gK.model("ArtistReleaseData", {
                    album: m.JC,
                    releaseDate: b.gK.maybe(b.gK.string),
                }),
                eu = v
                    .props({
                        type: b.gK.literal(l.t.ARTIST_RELEASE),
                        data: b.gK.maybe(em),
                        meta: C,
                    })
                    .named("ArtistRelease")
                    .views((e) => ({
                        get isVisible() {
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!e.data,
                            });
                        },
                        get objectsCount() {
                            return +!!e.data;
                        },
                    })),
                e_ = b.gK.model("ArtistUpcomingReleaseData", { album: m.VH }),
                eg = v
                    .props({
                        type: b.gK.literal(l.t.ARTIST_UPCOMING_RELEASE),
                        data: b.gK.maybe(e_),
                        meta: C,
                    })
                    .named("ArtistUpcomingRelease")
                    .views((e) => ({
                        get isVisible() {
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!e.data,
                            });
                        },
                        get objectsCount() {
                            return +!!e.data;
                        },
                    }));
            var eb = a(70946),
                ep = a(5858);
            let ev = (e) => ({
                    loadingState: p.IDLE,
                    id: e.id,
                    type: e.type,
                    meta: ((e) =>
                        (0, eb.v)(e)
                            ? ((e) => {
                                  var t;
                                  return (0, b.wg)({
                                      title: e.title,
                                      description: e.description,
                                      source: e.source,
                                      viewAllActionLink:
                                          null == (t = e.viewAllAction)
                                              ? void 0
                                              : t.weblink,
                                      showPolicy: e.showPolicy,
                                      coverStyle: e.coverStyle,
                                  });
                              })(e)
                            : ((e) =>
                                    !!(
                                        e &&
                                        "object" == typeof e &&
                                        ("message" in e ||
                                            "title" in e ||
                                            "expandable" in e ||
                                            "visibleLines" in e)
                                    ))(e)
                              ? ((e) => {
                                    var t;
                                    return (0, b.wg)({
                                        ...(0, ep.t)(e),
                                        showPolicy: e.showPolicy,
                                        viewAllActionLink:
                                            null == (t = e.viewAllAction)
                                                ? void 0
                                                : t.weblink,
                                    });
                                })(e)
                              : void 0)(e.data),
                    data: void 0,
                    isNeededToLoad: !0,
                    isLoading: !0,
                    isLoaded: !1,
                    isRejected: !1,
                    isVisible: !0,
                    isNotFound: !1,
                    hasSentAnalyticsOnLoaded: !1,
                    objectsCount: 0,
                    setHasSentAnalyticsOnLoaded: () => {},
                }),
                eA = b.gK.model("ArtistPickData", {
                    playlist: el.$o,
                    artists: b.gK.array(f.PK),
                }),
                eC = v
                    .props({
                        type: b.gK.literal(l.t.ARTIST_PICK),
                        data: b.gK.maybe(eA),
                        meta: C,
                    })
                    .named("ArtistPick")
                    .views((e) => ({
                        get isVisible() {
                            if (e.isRejected || (e.isLoaded && !e.data))
                                return !1;
                            return !0;
                        },
                        get objectsCount() {
                            return e.data && 1;
                        },
                    })),
                eT = b.gK
                    .model("FamiliarYouData", {
                        vibeTrackCount: b.gK.optional(b.gK.number, 0),
                        collectionTrackCount: b.gK.optional(b.gK.number, 0),
                        collectionAlbumCount: b.gK.optional(b.gK.number, 0),
                    })
                    .views((e) => {
                        let t = {
                            get hasTracks() {
                                return (
                                    e.collectionTrackCount > 0 ||
                                    e.vibeTrackCount > 0
                                );
                            },
                            get hasFamiliarInfo() {
                                return (
                                    t.hasTracks || e.collectionAlbumCount > 0
                                );
                            },
                            get tracksCount() {
                                return (
                                    e.collectionTrackCount + e.vibeTrackCount
                                );
                            },
                            get hasCollectionEntities() {
                                return (
                                    e.collectionTrackCount > 0 ||
                                    e.collectionAlbumCount > 0
                                );
                            },
                            get hasVibeEntities() {
                                return e.vibeTrackCount > 0;
                            },
                            href(e) {
                                if (!e) return "";
                                if (t.hasCollectionEntities) {
                                    let { href: t } = (0, x.uvd)(
                                        "/artist/:artistId/familiar",
                                        {
                                            params: { artistId: e },
                                            query: { tab: x.JCK.COLLECTION },
                                        },
                                    );
                                    return t;
                                }
                                if (t.hasVibeEntities) {
                                    let { href: t } = (0, x.uvd)(
                                        "/artist/:artistId/familiar",
                                        {
                                            params: { artistId: e },
                                            query: { tab: x.JCK.VIBE },
                                        },
                                    );
                                    return t;
                                }
                                let { href: a } = (0, x.uvd)(
                                    "/artist/:artistId/familiar",
                                    { params: { artistId: e } },
                                );
                                return a;
                            },
                        };
                        return t;
                    }),
                eI = v
                    .props({
                        type: b.gK.literal(l.t.FAMILIAR_YOU),
                        data: b.gK.maybe(eT),
                        meta: C,
                    })
                    .named("FamiliarYou")
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            if (
                                e.isRejected ||
                                (e.isLoaded &&
                                    !(null == (t = e.data)
                                        ? void 0
                                        : t.hasFamiliarInfo))
                            )
                                return !1;
                            return !0;
                        },
                        get objectsCount() {
                            return e.data && 1;
                        },
                    })),
                eh = (e) => {
                    let t = ev(e);
                    if (
                        (0, z.Q)(t) &&
                        ((e) => !!(e && "object" == typeof e && "blocks" in e))(
                            e.data,
                        )
                    )
                        switch (t.type) {
                            case l.t.ARTIST_POPULAR_TRACKS_AND_RELEASES:
                                t.data = ((e) => {
                                    var t;
                                    let a =
                                        null == (t = e.blocks)
                                            ? void 0
                                            : t.reduce((e, t) => {
                                                  let a = ev(t);
                                                  return (
                                                      (ec.is(a) ||
                                                          eu.is(a) ||
                                                          eg.is(a)) &&
                                                          e.push(a),
                                                      e
                                                  );
                                              }, []);
                                    return (0, b.wg)({ blocks: a });
                                })(e.data);
                                break;
                            case l.t.FAMILIAR_YOU_AND_ARTIST_PICK:
                                t.data = ((e) => {
                                    var t;
                                    let a =
                                        null == (t = e.blocks)
                                            ? void 0
                                            : t.reduce((e, t) => {
                                                  let a = ev(t);
                                                  return (
                                                      (eI.is(a) || eC.is(a)) &&
                                                          e.push(a),
                                                      e
                                                  );
                                              }, []);
                                    return (0, b.wg)({ blocks: a });
                                })(e.data);
                        }
                    return t;
                },
                eL = (e) =>
                    (0, b.wg)({
                        meta: { id: e.id, title: e.title },
                        shouldReloadNotification: !1,
                        blocks: e.blocks.filter((e) => eo(e.type)).map(eh),
                    }),
                ey = (e) => {
                    let t = [],
                        a = null;
                    for (let i of e) er(i) ? (a = i) : t.push(i);
                    return ((e) => {
                        let { tabData: t, upperBlocks: a } = e,
                            i = { loadingState: x.GuX.IDLE, isLoading: !0 };
                        return (
                            t &&
                                ((i.meta = {
                                    selectedTabIndex: t.selectedTabIndex,
                                    source: t.source,
                                }),
                                (i.tabs = {
                                    loadingState: x.GuX.IDLE,
                                    data: t.tabs.map(eL),
                                })),
                            a &&
                                (i.upperBlocks = a
                                    .filter((e) => eo(e.type))
                                    .map(eh)),
                            (0, b.wg)(i)
                        );
                    })({
                        tabData: null == a ? void 0 : a.data,
                        upperBlocks: t,
                    });
                };
            var eS = a(35420);
            let eN = (e) => ({ uri: e.uri, color: e.color });
            var eE = a(53706);
            let ej = (e) => {
                    var t;
                    let { data: a } = e;
                    return (0, b.wg)({
                        type: n._.DONATION_ITEM,
                        data: (0, eE.GT)({
                            url: a.tipUrl,
                            artist: a.artist,
                            goal: null == (t = a.goal) ? void 0 : t.title,
                        }),
                    });
                },
                ek = (e) =>
                    (0, b.wg)({
                        type: n._.MENU_ITEM,
                        data: {
                            title: e.data.title,
                            viewAllActionLink: e.data.viewAllAction.weblink,
                        },
                    });
            var ex = a(55689),
                eR = a(33037);
            let eP = (e) =>
                    (0, b.wg)({
                        type: n._.WAVE_AGENT_ITEM,
                        data: (0, ei.lb)(e.data.wave, e.data.agent),
                    }),
                ef = (e) =>
                    (0, b.wg)({
                        buttonColor: null == e ? void 0 : e.buttonColor,
                        textColor: null == e ? void 0 : e.textColor,
                        bgImageUrl: null == e ? void 0 : e.bgImageUrl,
                        imageUrl: null == e ? void 0 : e.imageUrl,
                        buttonTextColor: null == e ? void 0 : e.buttonTextColor,
                    }),
                ew = b.gK
                    .model("AlbumPromoDataItem", {
                        album: m.JC,
                        artists: b.gK.array(f.PK),
                        cover: R.$B,
                        coverContentMode: b.gK.maybe(b.gK.string),
                        clickUrl: b.gK.string,
                        yclid: b.gK.string,
                        utm: b.gK.frozen(),
                        hasClicked: b.gK.optional(b.gK.boolean, !1),
                    })
                    .views((e) => {
                        let t = {
                            get reportingProperties() {
                                return { ...e.utm, yclid: e.yclid };
                            },
                            get albumUrl() {
                                let { href: a } = (0, x.uvd)(e.album.url, {
                                    query: t.reportingProperties,
                                });
                                return a;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setClicked: (0, b.L3)(function* () {
                            if (!(0, b._n)(e)) return;
                            let {
                                prefixlessResource: t,
                                modelActionsLogger: a,
                            } = (0, b._$)(e);
                            if (!e.hasClicked)
                                try {
                                    (e.hasClicked = !0),
                                        yield t.reportForAlbumPromo(e.clickUrl);
                                } catch (e) {
                                    a.error(e);
                                }
                        }),
                    })),
                eK = b.gK.model("AlbumPromoDataReportingOptions", {
                    url: b.gK.string,
                    timeMs: b.gK.number,
                }),
                eO = b.gK.model("AlbumPromoDataReporting", {
                    blockRender: eK,
                    blockImpression: eK,
                    adImpressions: eK,
                }),
                eM = b.gK
                    .model("AlbumPromoData", {
                        items: b.gK.array(ew),
                        reporting: b.gK.maybe(eO),
                    })
                    .actions((e) => ({
                        report: (0, b.L3)(function* (t) {
                            if (!(0, b._n)(e)) return;
                            let {
                                prefixlessResource: a,
                                modelActionsLogger: i,
                            } = (0, b._$)(e);
                            try {
                                yield a.reportForAlbumPromo(t);
                            } catch (e) {
                                i.error(e);
                            }
                        }),
                    })),
                eD = v
                    .props({
                        type: b.gK.union(
                            b.gK.literal(l.t.ALBUM_PROMO),
                            b.gK.literal(l.t.SIMPLE_ALBUM_PROMO),
                        ),
                        data: b.gK.maybe(eM),
                        meta: C,
                    })
                    .named("AlbumPromo")
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!(
                                    (null == (t = e.data) ? void 0 : t.items) &&
                                    e.data.items.length > 0
                                ),
                                isOutdated: e.isOutdated,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null !=
                                (i =
                                    null == (a = e.data)
                                        ? void 0
                                        : a.items.length)
                                ? i
                                : 0;
                        },
                    })),
                eB = b.gK.model("ArtistConcertsData", {
                    items: b.gK.array($.aR),
                }),
                eV = v
                    .props({
                        type: b.gK.union(b.gK.literal(l.t.ARTIST_CONCERTS)),
                        data: b.gK.maybe(eB),
                        meta: C,
                    })
                    .named("ArtistConcerts")
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty:
                                    (null == (t = e.data)
                                        ? void 0
                                        : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null !=
                                (i =
                                    null == (a = e.data)
                                        ? void 0
                                        : a.items.length)
                                ? i
                                : 0;
                        },
                    })),
                eU = b.gK
                    .model("ArtistPopularTracksAndReleasesData", {
                        blocks: b.gK.array(b.gK.union(ec, eu, eg)),
                    })
                    .views((e) => ({
                        get popularTracks() {
                            return e.blocks.find((e) => ec.is(e));
                        },
                        get upcomingRelese() {
                            return e.blocks.find((e) => eg.is(e));
                        },
                        get release() {
                            return e.blocks.find((e) => eu.is(e));
                        },
                    })),
                eY = v
                    .props({
                        type: b.gK.literal(
                            l.t.ARTIST_POPULAR_TRACKS_AND_RELEASES,
                        ),
                        data: b.gK.maybe(eU),
                    })
                    .named("ArtistPopularTracksAndReleases")
                    .views((e) => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            var t, a;
                            return null !=
                                (a =
                                    null == (t = e.data)
                                        ? void 0
                                        : t.blocks.length)
                                ? a
                                : 0;
                        },
                    })),
                eG = b.gK.model("ChartTracksItem", {
                    type: b.gK.literal(n._.TRACK_ITEM),
                    data: _.vj,
                }),
                eW = b.gK.model("ChartTracksData", {
                    items: b.gK.array(eG),
                    playlist: el.$o,
                }),
                eX = v
                    .props({
                        type: b.gK.literal(l.t.CHART_TRACKS),
                        data: b.gK.maybe(eW),
                        meta: C,
                    })
                    .named("ChartTracks")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad)
                                return !0;
                            return (
                                (null == (a = e.data) || null == (t = a.items)
                                    ? void 0
                                    : t.length) !== 0
                            );
                        },
                        get objectsCount() {
                            var i, l;
                            let t =
                                null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                    ? l
                                    : 0;
                            return t < 8 ? t : 8;
                        },
                    })),
                eH = b.gK.model("LandingClipItem", {
                    type: b.gK.union(
                        b.gK.literal(n._.CLIP),
                        b.gK.literal(n._.CLIP_ITEM),
                    ),
                    data: r.kv,
                }),
                ez = b.gK
                    .model("ClipsData", {
                        items: b.gK.array(eH),
                        canShowEmptyBlock: b.gK.optional(b.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyBlock() {
                            return e.canShowEmptyBlock && 0 === e.items.length;
                        },
                    })),
                eF = v
                    .props({
                        type: b.gK.union(
                            b.gK.literal(l.t.CLIPS),
                            b.gK.literal(l.t.ARTIST_CLIPS),
                            b.gK.literal(l.t.COLLECTION_CLIPS),
                        ),
                        data: b.gK.maybe(ez),
                        meta: C,
                    })
                    .named("Clips")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            let { settings: i } = (0, b.Zn)(e);
                            if (
                                null == (t = e.data)
                                    ? void 0
                                    : t.canShowEmptyBlock
                            )
                                return !0;
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty:
                                    (null == (a = e.data)
                                        ? void 0
                                        : a.items.length) !== 0,
                                isNeededToHide: i.isMobile,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            return null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                ? l
                                : 0;
                        },
                    })),
                e$ = b.gK
                    .model("CollectionAlbumsData", {
                        items: b.gK.array(m.JC),
                        canShowEmptyBlock: b.gK.optional(b.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyBlock() {
                            return e.canShowEmptyBlock && 0 === e.items.length;
                        },
                    })),
                eJ = v
                    .props({
                        type: b.gK.literal(l.t.COLLECTION_ALBUMS),
                        data: b.gK.maybe(e$),
                        meta: C,
                    })
                    .named("CollectionAlbums")
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            if (
                                (null == (t = e.data)
                                    ? void 0
                                    : t.canShowEmptyBlock) ||
                                e.isLoading ||
                                e.isRejected ||
                                e.isNeededToLoad
                            )
                                return !0;
                            return (
                                (null == (i = e.data) || null == (a = i.items)
                                    ? void 0
                                    : a.length) !== 0
                            );
                        },
                        get objectsCount() {
                            var l, s;
                            return null !=
                                (s =
                                    null == (l = e.data)
                                        ? void 0
                                        : l.items.length)
                                ? s
                                : 0;
                        },
                    }));
            var eZ = a(97464);
            let eq = b.gK.model("LandingUpcomingAlbumItem", {
                    type: b.gK.literal(n._.PRESAVED_ALBUM_ITEM),
                    data: m.VH,
                }),
                eQ = b.gK.union(S, eq),
                e0 = b.gK
                    .model("CollectionAlbumsPresavesTab", {
                        id: b.gK.string,
                        title: b.gK.string,
                        type: b.gK.enumeration(Object.values(eZ.n)),
                        items: b.gK.array(eQ),
                        canShowEmptyBlock: b.gK.optional(b.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyTab() {
                            return !!(
                                e.canShowEmptyBlock && 0 === e.items.length
                            );
                        },
                    })),
                e1 = b.gK
                    .model("CollectionAlbumsPresavesTabs", {
                        tabs: b.gK.array(e0),
                    })
                    .views((e) => ({
                        get isFirstTabEmpty() {
                            var t;
                            return (
                                (null == (t = e.tabs[0])
                                    ? void 0
                                    : t.items.length) === 0
                            );
                        },
                        get isSecondTabEmpty() {
                            var a;
                            return (
                                (null == (a = e.tabs[1])
                                    ? void 0
                                    : a.items.length) === 0
                            );
                        },
                        get areBothTabsEmpty() {
                            return (
                                this.isFirstTabEmpty && this.isSecondTabEmpty
                            );
                        },
                        get activeIndexTab() {
                            if (this.isFirstTabEmpty && !this.isSecondTabEmpty)
                                return 1;
                            return 0;
                        },
                    })),
                e3 = v
                    .props({
                        type: b.gK.literal(l.t.COLLECTION_ALBUMS_PRESAVES),
                        data: b.gK.maybe(e1),
                        meta: C,
                    })
                    .named("CollectionAlbumsPresaves")
                    .views((e) => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            if (e.data)
                                return e.data.tabs.reduce(
                                    (e, t) => e + t.items.length,
                                    0,
                                );
                            return 0;
                        },
                    })),
                e8 = b.gK
                    .model("CollectionArtistData", {
                        items: b.gK.array(f.PK),
                        canShowEmptyBlock: b.gK.optional(b.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyBlock() {
                            return e.canShowEmptyBlock && 0 === e.items.length;
                        },
                    })),
                e6 = v
                    .props({
                        type: b.gK.union(
                            b.gK.literal(l.t.COLLECTION_ARTISTS),
                            b.gK.literal(l.t.COLLECTION_ARTISTS_AND_TOP),
                            b.gK.literal(l.t.PERSONAL_ARTISTS),
                            b.gK.literal(l.t.NEW_STARS_ARTISTS),
                            b.gK.literal(l.t.EDITORIAL_ARTISTS),
                            b.gK.literal(l.t.META_TAG_POPULAR_ARTISTS),
                            b.gK.literal(l.t.MICRO_GENRE_TOP_ARTISTS),
                            b.gK.literal(l.t.MICRO_GENRE_ARTISTS),
                            b.gK.literal(l.t.META_TAG_ARTISTS),
                            b.gK.literal(l.t.SIMILAR_ARTISTS),
                        ),
                        data: b.gK.maybe(e8),
                        meta: C,
                    })
                    .named("CollectionArtist")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (
                                null == (t = e.data)
                                    ? void 0
                                    : t.canShowEmptyBlock
                            )
                                return !0;
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty:
                                    (null == (a = e.data)
                                        ? void 0
                                        : a.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            return null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                ? l
                                : 0;
                        },
                    })),
                e4 = b.gK.model("CollectionPlaylistsData", {
                    items: b.gK.array(d.IP),
                }),
                e9 = v
                    .props({
                        type: b.gK.literal(l.t.COLLECTION_PLAYLISTS_CREATED),
                        data: b.gK.maybe(e4),
                        meta: C,
                    })
                    .named("CollectionCreatedPlaylists")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad)
                                return !0;
                            return (
                                (null == (a = e.data) || null == (t = a.items)
                                    ? void 0
                                    : t.length) !== 0
                            );
                        },
                        get objectsCount() {
                            var i, l;
                            return null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                ? l
                                : 0;
                        },
                    }));
            var e2 = a(75305);
            let e7 = b.gK
                    .model("CollectionDownloadedTracksData", {
                        items: b.gK.array(_.vj),
                        rawTracks: b.gK.frozen(),
                    })
                    .views((e) => ({
                        get entitiesData() {
                            return e.rawTracks.map((e) => ({
                                type: e2.R.DownloadedMusic,
                                meta: e,
                            }));
                        },
                    })),
                e5 = v
                    .props({
                        type: b.gK.literal(l.t.COLLECTION_DOWNLOADED_TRACKS),
                        data: b.gK.maybe(e7),
                        meta: C,
                    })
                    .named("CollectionDownloadedTracks")
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty:
                                    (null == (t = e.data)
                                        ? void 0
                                        : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null !=
                                (i =
                                    null == (a = e.data)
                                        ? void 0
                                        : a.items.length)
                                ? i
                                : 0;
                        },
                    })),
                te = b.gK.union(N, E, k),
                tt = b.gK.model("CollectionKidsData", {
                    items: b.gK.array(te),
                }),
                ta = v
                    .props({
                        type: b.gK.literal(l.t.COLLECTION_KIDS),
                        data: b.gK.maybe(tt),
                        meta: C,
                    })
                    .named("CollectionKids")
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty:
                                    (null == (t = e.data)
                                        ? void 0
                                        : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null !=
                                (i =
                                    null == (a = e.data)
                                        ? void 0
                                        : a.items.length)
                                ? i
                                : 0;
                        },
                    })),
                ti = b.gK.model("CollectionLikedPlaylistsData", {
                    items: b.gK.array(d.IP),
                }),
                tl = v
                    .props({
                        type: b.gK.literal(l.t.COLLECTION_PLAYLISTS_LIKED),
                        data: b.gK.maybe(ti),
                        meta: C,
                    })
                    .named("CollectionLikedPlaylists")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad)
                                return !0;
                            return (
                                (null == (a = e.data) || null == (t = a.items)
                                    ? void 0
                                    : t.length) !== 0
                            );
                        },
                        get objectsCount() {
                            var i, l;
                            return null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                ? l
                                : 0;
                        },
                    }));
            var ts = a(72094);
            let tr = b.gK
                    .model("CollectionPlaylistsTab", {
                        id: b.gK.string,
                        title: b.gK.string,
                        type: b.gK.enumeration(Object.values(ts.l)),
                        items: b.gK.array(d.IP),
                        canShowEmptyBlock: b.gK.optional(b.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyTab() {
                            return !!(
                                e.canShowEmptyBlock && 0 === e.items.length
                            );
                        },
                    })),
                to = b.gK
                    .model("CollectionPlaylistsTabs", { tabs: b.gK.array(tr) })
                    .views((e) => ({
                        get isFirstTabEmpty() {
                            var t;
                            return (
                                (null == (t = e.tabs[0])
                                    ? void 0
                                    : t.items.length) === 0
                            );
                        },
                        get isSecondTabEmpty() {
                            var a;
                            return (
                                (null == (a = e.tabs[1])
                                    ? void 0
                                    : a.items.length) === 0
                            );
                        },
                        get areBothTabsEmpty() {
                            return (
                                this.isFirstTabEmpty && this.isSecondTabEmpty
                            );
                        },
                        get activeIndexTab() {
                            if (this.isFirstTabEmpty && !this.isSecondTabEmpty)
                                return 1;
                            return 0;
                        },
                    })),
                tn = v
                    .props({
                        type: b.gK.literal(
                            l.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED,
                        ),
                        data: b.gK.maybe(to),
                        meta: C,
                    })
                    .named("CollectionPlaylists")
                    .views((e) => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            if (e.data)
                                return e.data.tabs.reduce(
                                    (e, t) => e + t.items.length,
                                    0,
                                );
                            return 0;
                        },
                    })),
                td = v
                    .props({
                        type: b.gK.literal(l.t.CONCERT_PLACE),
                        data: b.gK.maybe(eS.fc),
                        meta: C,
                    })
                    .named("ConcertPlace")
                    .views((e) => ({
                        get isVisible() {
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: void 0 !== e.data,
                            });
                        },
                        get objectsCount() {
                            return +(null !== e.data);
                        },
                    })),
                tc = b.gK.model("ConcertsData", { items: b.gK.array($.aR) }),
                tm = v
                    .props({
                        type: b.gK.union(
                            b.gK.literal(l.t.CONCERTS_TOP),
                            b.gK.literal(l.t.CONCERTS_PERSONAL),
                            b.gK.literal(l.t.EDITORIAL_CONCERTS),
                            b.gK.literal(l.t.VIEWED_CONCERTS),
                        ),
                        data: b.gK.maybe(tc),
                        meta: C,
                    })
                    .named("Concerts")
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty:
                                    (null == (t = e.data)
                                        ? void 0
                                        : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null !=
                                (i =
                                    null == (a = e.data)
                                        ? void 0
                                        : a.items.length)
                                ? i
                                : 0;
                        },
                    }));
            var tu = a(73508),
                t_ = a(95592);
            let tg = b.gK
                    .model("ContinueListenTrackData", {
                        album: b.gK.maybe(t_.GI),
                        playlist: b.gK.maybe(el.$o),
                        track: _.vj,
                        trackLoadingState: b.gK.optional(
                            b.gK.enumeration(Object.values(x.GuX)),
                            x.GuX.IDLE,
                        ),
                        playlistLoadingState: b.gK.optional(
                            b.gK.enumeration(Object.values(x.GuX)),
                            x.GuX.IDLE,
                        ),
                        albumDuration: b.gK.maybe(b.gK.number),
                        albumDurationLeft: b.gK.maybe(b.gK.number),
                    })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.trackLoadingState === x.GuX.IDLE;
                        },
                        get isLoading() {
                            return (
                                e.trackLoadingState === x.GuX.PENDING ||
                                e.playlistLoadingState === x.GuX.PENDING
                            );
                        },
                        get isRejected() {
                            return (
                                e.trackLoadingState === x.GuX.REJECT ||
                                e.playlistLoadingState === x.GuX.REJECT
                            );
                        },
                    }))
                    .actions((e) => ({
                        getTrackMeta: (0, b.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } =
                                    (0, b._$)(e),
                                { continueListen: i } = (0, b.Zn)(e);
                            if (
                                i.track &&
                                "number" == typeof i.track.durationMs
                            ) {
                                e.trackLoadingState = x.GuX.RESOLVE;
                                return;
                            }
                            e.trackLoadingState = x.GuX.PENDING;
                            try {
                                var l;
                                let a = (0, tu.V)(
                                        e.track.id,
                                        null == (l = e.album) ? void 0 : l.id,
                                    ),
                                    [i] = yield t.getTracksMeta({
                                        trackIds: [a],
                                        withProgress: !0,
                                    });
                                if (((e.trackLoadingState = x.GuX.RESOLVE), i))
                                    return (0, _.vU)(i);
                            } catch (t) {
                                a.error(t),
                                    (e.trackLoadingState = x.GuX.REJECT);
                            }
                        }),
                        getPlaylistMeta: (0, b.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } =
                                    (0, b._$)(e),
                                { continueListen: i } = (0, b.Zn)(e);
                            if (
                                (i.track && "number" == typeof i.trackIndex) ||
                                !e.playlist
                            ) {
                                e.playlistLoadingState = x.GuX.RESOLVE;
                                return;
                            }
                            e.playlistLoadingState = x.GuX.PENDING;
                            try {
                                let { tracks: a } =
                                        yield t.getPlaylistWithTracksIds({
                                            userId: String(e.playlist.uid),
                                            playlistKind: e.playlist.kind,
                                            resumeStream: !1,
                                        }),
                                    i = a.findIndex(
                                        (t) => String(t.id) === e.track.id,
                                    );
                                if (
                                    ((e.playlistLoadingState = x.GuX.RESOLVE),
                                    e.track.durationMs && -1 !== i)
                                )
                                    return i;
                            } catch (t) {
                                a.error(t),
                                    (e.playlistLoadingState = x.GuX.REJECT);
                            }
                        }),
                    })),
                tb = b.gK.model("ContinueListenTrack", {
                    type: b.gK.string,
                    data: tg,
                }),
                tp = b.gK.model("ContinueListenBaseItem", {
                    uri: b.gK.string,
                    color: b.gK.maybe(b.gK.string),
                }),
                tv = b.gK.model("ContinueListenBaseItem", {
                    title: b.gK.string,
                    covers: b.gK.array(tp),
                    bookCount: b.gK.maybe(b.gK.number),
                    podcastCount: b.gK.maybe(b.gK.number),
                    trackCount: b.gK.maybe(b.gK.number),
                }),
                tA = b.gK.model("ContinueListenData", {
                    lastPlayed: b.gK.maybe(tb),
                    bookshelf: tv,
                    newEpisodes: tv,
                }),
                tC = v
                    .props({
                        type: b.gK.literal(l.t.CONTINUE_LISTEN),
                        data: b.gK.maybe(tA),
                        meta: C,
                    })
                    .named("ContinueListen")
                    .views((e) => ({
                        get isVisible() {
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!e.data,
                            });
                        },
                        get objectsCount() {
                            return Object.keys(e.data || {}).length;
                        },
                    })),
                tT = a(65255)
                    .kv.named("LandingBlockOverviewMeta")
                    .props({
                        showPolicy: b.gK.maybe(b.gK.string),
                        viewAllActionLink: b.gK.maybeNull(b.gK.string),
                    }),
                tI = v
                    .props({
                        type: b.gK.literal(l.t.DISLIKES),
                        data: b.gK.undefined,
                        meta: tT,
                    })
                    .named("Dislikes")
                    .views(() => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                th = b.gK.model("LandingDonationItem", {
                    type: b.gK.literal(n._.DONATION_ITEM),
                    data: eE.eG,
                }),
                tL = b.gK.model("DonationsData", { items: b.gK.array(th) }),
                ty = v
                    .props({
                        type: b.gK.literal(l.t.DONATIONS),
                        data: b.gK.maybe(tL),
                        meta: C,
                    })
                    .named("Donations")
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty:
                                    (null == (t = e.data)
                                        ? void 0
                                        : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null !=
                                (i =
                                    null == (a = e.data)
                                        ? void 0
                                        : a.items.length)
                                ? i
                                : 0;
                        },
                    })),
                tS = b.gK.model("EditorialVibesDataModel", {
                    items: b.gK.array(ei.Gh),
                }),
                tN = v
                    .props({
                        type: b.gK.union(
                            b.gK.literal(l.t.EDITORIAL_WAVES),
                            b.gK.literal(l.t.META_TAG_WAVE),
                            b.gK.literal(l.t.MICRO_GENRE_WAVE),
                            b.gK.literal(l.t.MICRO_GENRE_SIMILAR_WAVE),
                            b.gK.literal(l.t.META_TAG_SIMILAR_WAVE),
                            b.gK.literal(l.t.EDITORIAL_WAVES_AGENT),
                            b.gK.literal(l.t.META_TAG_WAVE_AGENT),
                            b.gK.literal(l.t.MICRO_GENRE_WAVE_AGENT),
                            b.gK.literal(l.t.MICRO_GENRE_SIMILAR_WAVE_AGENT),
                            b.gK.literal(l.t.META_TAG_SIMILAR_WAVE_AGENT),
                        ),
                        data: b.gK.maybe(tS),
                        meta: C,
                    })
                    .named("EditorialVibes")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad)
                                return !0;
                            return (
                                (null == (a = e.data) || null == (t = a.items)
                                    ? void 0
                                    : t.length) !== 0
                            );
                        },
                        get objectsCount() {
                            var i, l;
                            return null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                ? l
                                : 0;
                        },
                    })),
                tE = b.gK
                    .model("FamiliarYouAndArtistPickData", {
                        blocks: b.gK.array(b.gK.union(eI, eC)),
                    })
                    .views((e) => ({
                        get familiarYou() {
                            return e.blocks.find((e) => eI.is(e));
                        },
                        get artistPick() {
                            return e.blocks.find((e) => eC.is(e));
                        },
                    })),
                tj = v
                    .props({
                        type: b.gK.literal(l.t.FAMILIAR_YOU_AND_ARTIST_PICK),
                        data: b.gK.maybe(tE),
                    })
                    .named("FamiliarYouAndArtistPick")
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i, l, s, r;
                            if (
                                (null == (t = e.data)
                                    ? void 0
                                    : t.familiarYou) ||
                                (null == (a = e.data) ? void 0 : a.artistPick)
                            )
                                return !!(
                                    (null == (l = e.data) ||
                                    null == (i = l.familiarYou)
                                        ? void 0
                                        : i.isVisible) ||
                                    (null == (r = e.data) ||
                                    null == (s = r.artistPick)
                                        ? void 0
                                        : s.isVisible)
                                );
                            return !1;
                        },
                        get objectsCount() {
                            var o, n;
                            return null !=
                                (n =
                                    null == (o = e.data)
                                        ? void 0
                                        : o.blocks.length)
                                ? n
                                : 0;
                        },
                    })),
                tk = b.gK.model("InStyleDataItemTab", {
                    id: b.gK.number,
                    title: b.gK.string,
                    covers: b.gK.array(b.gK.string),
                }),
                tx = b.gK.model("InStyleDataItem", {
                    tab: tk,
                    data: b.gK.array(m.JC),
                }),
                tR = b.gK.model("InStyleData", { items: b.gK.array(tx) }),
                tP = v
                    .props({
                        type: b.gK.literal(l.t.IN_STYLE),
                        data: b.gK.maybe(tR),
                        meta: C,
                    })
                    .named("InStyle")
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            let l =
                                    (null == (t = e.data)
                                        ? void 0
                                        : t.items.length) === 0,
                                s =
                                    null == (i = e.data) ||
                                    null == (a = i.items)
                                        ? void 0
                                        : a.every(
                                              (e) =>
                                                  !(null == e
                                                      ? void 0
                                                      : e.data),
                                          );
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !l || !s,
                            });
                        },
                        get objectsCount() {
                            var l, s;
                            return null !=
                                (s =
                                    null == (l = e.data)
                                        ? void 0
                                        : l.items.length)
                                ? s
                                : 0;
                        },
                    })),
                tf = b.gK
                    .model("LandingMenuItem", {
                        type: b.gK.literal(n._.MENU_ITEM),
                        data: b.gK.model({
                            title: b.gK.string,
                            viewAllActionLink: b.gK.maybe(
                                b.gK.maybeNull(b.gK.string),
                            ),
                        }),
                    })
                    .views((e) => ({
                        get key() {
                            return ""
                                .concat(e.data.title, "_")
                                .concat(e.data.viewAllActionLink);
                        },
                    })),
                tw = b.gK.model("ItemListData", { items: b.gK.array(tf) }),
                tK = v
                    .props({
                        type: b.gK.literal(l.t.ITEM_LIST),
                        data: b.gK.maybe(tw),
                        meta: C,
                    })
                    .named("ItemList")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad)
                                return !0;
                            return (
                                (null == (a = e.data) || null == (t = a.items)
                                    ? void 0
                                    : t.length) !== 0
                            );
                        },
                        get objectsCount() {
                            var i, l;
                            return null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                ? l
                                : 0;
                        },
                    })),
                tO = b.gK
                    .model("LikesData", {
                        title: b.gK.string,
                        cover: R.$B,
                        playlistUuid: b.gK.maybe(b.gK.string),
                        trackCovers: b.gK.array(R.$B),
                        count: b.gK.number,
                    })
                    .views((e) => ({
                        get id() {
                            return e.playlistUuid;
                        },
                        get url() {
                            let { href: t } = (0, x.uvd)(
                                "/playlists/:playlistUuid",
                                { params: { playlistUuid: e.playlistUuid } },
                            );
                            return t;
                        },
                    })),
                tM = b.gK
                    .model("HistoryData", {
                        title: b.gK.string,
                        trackCovers: b.gK.array(R.$B),
                        artists: b.gK.array(b.gK.string),
                    })
                    .views(() => ({
                        get id() {
                            return "music-history";
                        },
                        get url() {
                            let { href: e } = (0, x.uvd)("/music-history");
                            return e;
                        },
                    })),
                tD = b.gK.model("LikesAndHistoryData", {
                    favorites: tO,
                    history: tM,
                }),
                tB = v
                    .props({
                        type: b.gK.literal(l.t.LIKES_AND_HISTORY),
                        data: b.gK.maybe(tD),
                        meta: C,
                    })
                    .named("LikesAndCount")
                    .views((e) => ({
                        get isVisible() {
                            return !(
                                e.isLoading ||
                                e.isRejected ||
                                e.isNeededToLoad
                            );
                        },
                        get objectsCount() {
                            return 2;
                        },
                    })),
                tV = b.gK.model("MixesGridData", { items: b.gK.array(K.bv) }),
                tU = v
                    .props({
                        type: b.gK.union(
                            b.gK.literal(l.t.MIXES_GRID),
                            b.gK.literal(l.t.MIXES_MUSIC),
                        ),
                        data: b.gK.maybe(tV),
                        meta: C,
                    })
                    .named("MixesGrid")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNotEmpty:
                                    (null == (a = e.data) ||
                                    null == (t = a.items)
                                        ? void 0
                                        : t.length) !== 0,
                                isLoaded: e.isLoaded,
                                isLoading: e.isLoading,
                                isRejected: e.isRejected,
                                isNeededToLoad: e.isNeededToLoad,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            return null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                ? l
                                : 0;
                        },
                    })),
                tY = b.gK.model("MixesData", { items: b.gK.array(ex.f) }),
                tG = v
                    .props({
                        type: b.gK.literal(l.t.MIXES),
                        data: b.gK.maybe(tY),
                        meta: C,
                    })
                    .named("Mixes")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad)
                                return !0;
                            return (
                                (null == (a = e.data) || null == (t = a.items)
                                    ? void 0
                                    : t.length) !== 0
                            );
                        },
                        get objectsCount() {
                            var i, l;
                            return null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                ? l
                                : 0;
                        },
                    })),
                tW = b.gK.model("NeuromusicData", { items: b.gK.array(eR.R6) }),
                tX = v
                    .props({
                        type: b.gK.literal(l.t.NEUROMUSIC),
                        data: b.gK.maybe(tW),
                        meta: C,
                    })
                    .named("Neuromusic")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad)
                                return !0;
                            return (
                                (null == (a = e.data) || null == (t = a.items)
                                    ? void 0
                                    : t.length) !== 0
                            );
                        },
                        get objectsCount() {
                            var i, l;
                            return null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                ? l
                                : 0;
                        },
                    })),
                tH = b.gK.model("LandingVibeAgentItem", {
                    type: b.gK.literal(n._.WAVE_AGENT_ITEM),
                    data: ei.Gh,
                }),
                tz = b.gK.union(N, S, B, tH),
                tF = b.gK.model("NewPlaylistsData", { items: b.gK.array(tz) }),
                t$ = v
                    .props({
                        type: b.gK.union(
                            b.gK.literal(l.t.NEW_PLAYLISTS),
                            b.gK.literal(l.t.EDITORIAL_COMPILATION),
                            b.gK.literal(l.t.RECOMMENDED_PLAYLISTS),
                            b.gK.literal(l.t.META_TAG_POPULAR_PLAYLISTS),
                            b.gK.literal(l.t.META_TAG_NEW_ALBUMS),
                            b.gK.literal(l.t.META_TAG_PLAYLISTS),
                            b.gK.literal(l.t.MICRO_GENRE_ALBUMS),
                            b.gK.literal(l.t.META_TAG_ALBUMS),
                            b.gK.literal(l.t.ARTIST_PLAYLISTS),
                            b.gK.literal(l.t.ARTIST_ALBUMS),
                            b.gK.literal(l.t.ARTIST_COMPILATIONS),
                            b.gK.literal(l.t.ARTIST_STUDIO_ALBUMS),
                            b.gK.literal(l.t.ARTIST_SIMILAR_ENTITIES),
                            b.gK.literal(l.t.COLLECTION_SIMILAR_ENTITIES),
                        ),
                        data: b.gK.maybe(tF),
                        meta: C,
                    })
                    .named("NewPlaylists")
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty:
                                    (null == (t = e.data)
                                        ? void 0
                                        : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null !=
                                (i =
                                    null == (a = e.data)
                                        ? void 0
                                        : a.items.length)
                                ? i
                                : 0;
                        },
                    })),
                tJ = [
                    "avatars.mds.yandex.net/get-music-misc/30221/img.68678806f4c3467d82bab43b/%%",
                    "avatars.mds.yandex.net/get-music-misc/34161/img.68678811e40cd01bff989e50/%%",
                    "avatars.mds.yandex.net/get-music-misc/30221/img.6867881aea3b324d5df9692f/%%",
                ],
                tZ = [
                    "avatars.mds.yandex.net/get-music-misc/2419084/img.686688add03ee35062c02822/%%",
                    "avatars.mds.yandex.net/get-music-misc/28592/img.6867878964ece217d515ffda/%%",
                    "avatars.mds.yandex.net/get-music-misc/30221/img.686787926dccf85a8a06c771/%%",
                ],
                tq = b.gK
                    .model("NewReleasesDataItem", {
                        album: m.JC,
                        releaseDate: b.gK.maybe(b.gK.string),
                        coverUri: b.gK.maybe(b.gK.string),
                        coverColor: b.gK.maybe(b.gK.string),
                    })
                    .views((e) => ({
                        coverUriWithPlaceholder: (t) =>
                            (function (e) {
                                let { coverUri: t, artistId: a, theme: i } = e;
                                if (
                                    !(null == t
                                        ? void 0
                                        : t.includes(
                                              "2419084/img.6568f242071da73cabc5846c",
                                          ))
                                )
                                    return t;
                                let l = (Number(a) || 0) % 3;
                                return i === x.Sxu.Light ? tJ[l] : tZ[l];
                            })({
                                coverUri: e.coverUri,
                                artistId: e.album.artistId,
                                theme: t,
                            }),
                    })),
                tQ = b.gK.model("NewReleasesData", { items: b.gK.array(tq) }),
                t0 = v
                    .props({
                        type: b.gK.union(
                            b.gK.literal(l.t.NEW_RELEASES),
                            b.gK.literal(l.t.EDITORIAL_NEW_RELEASES),
                        ),
                        data: b.gK.maybe(tQ),
                        meta: C,
                    })
                    .named("NewReleases")
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty:
                                    (null == (t = e.data)
                                        ? void 0
                                        : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null !=
                                (i =
                                    null == (a = e.data)
                                        ? void 0
                                        : a.items.length)
                                ? i
                                : 0;
                        },
                    })),
                t1 = b.gK.model("NonMusicEditorialCompilationData", {
                    items: b.gK.array(b.gK.union(E, N)),
                }),
                t3 = v
                    .props({
                        type: b.gK.literal(l.t.NON_MUSIC_EDITORIAL_COMPILATION),
                        data: b.gK.maybe(t1),
                        meta: C,
                    })
                    .named("NonMusicEditorialCompilation")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad)
                                return !0;
                            return (
                                (null == (a = e.data) || null == (t = a.items)
                                    ? void 0
                                    : t.length) !== 0
                            );
                        },
                        get objectsCount() {
                            var i, l;
                            return null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                ? l
                                : 0;
                        },
                    })),
                t8 = v
                    .props({
                        type: b.gK.literal(l.t.OVERVIEW),
                        data: b.gK.undefined,
                        meta: tT,
                    })
                    .named("Overview")
                    .views((e) => ({
                        get isVisible() {
                            return !!e.meta.message;
                        },
                        get objectsCount() {
                            return 1;
                        },
                    })),
                t6 = b.gK.model("PersonalPlaylistsData", {
                    items: b.gK.array(G),
                }),
                t4 = v
                    .props({
                        type: b.gK.union(
                            b.gK.literal(l.t.PERSONAL_PLAYLISTS),
                            b.gK.literal(l.t.REWIND_PLAYLISTS),
                        ),
                        data: b.gK.maybe(t6),
                        meta: C,
                    })
                    .named("PersonalPlaylists")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad)
                                return !0;
                            return (
                                (null == (a = e.data) || null == (t = a.items)
                                    ? void 0
                                    : t.length) !== 0
                            );
                        },
                        get objectsCount() {
                            var i, l;
                            return null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                ? l
                                : 0;
                        },
                    }));
            var t9 = a(99857);
            let t2 = b.gK
                    .model("PlaylistWithTracksData", {
                        totalItemsCount: b.gK.maybe(b.gK.number),
                        items: b.gK.array(_.vj),
                        playlist: el.$o,
                        coverUri: b.gK.maybe(b.gK.string),
                        canShowEmptyBlock: b.gK.maybe(b.gK.boolean),
                        withRewindTrailerButton: b.gK.maybe(b.gK.boolean),
                    })
                    .views((e) => ({
                        getCoverUri(t) {
                            switch (t) {
                                case t9.z.DEFAULT:
                                    return e.playlist.coverUri;
                                case t9.z.CUSTOM:
                                    return e.coverUri;
                                default:
                                    var a;
                                    return null != (a = e.coverUri)
                                        ? a
                                        : e.playlist.coverUri;
                            }
                        },
                    })),
                t7 = v
                    .props({
                        type: b.gK.union(
                            b.gK.literal(l.t.OPEN_PLAYLIST),
                            b.gK.literal(l.t.SMART_OPEN_PLAYLIST),
                            b.gK.literal(l.t.NON_MUSIC_OPEN_PLAYLIST),
                            b.gK.literal(l.t.COLLECTION_PLAYLIST_WITH_LIKES),
                        ),
                        data: b.gK.maybe(t2),
                        meta: C,
                    })
                    .named("PlaylistWithTracks")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (
                                null == (t = e.data)
                                    ? void 0
                                    : t.canShowEmptyBlock
                            )
                                return !0;
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty:
                                    (null == (a = e.data)
                                        ? void 0
                                        : a.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            let t =
                                null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                    ? l
                                    : 0;
                            return t < 8 ? t : 8;
                        },
                    })),
                t5 = b.gK.union(S, j, B),
                ae = b.gK.model("RecentlyPlayedData", {
                    items: b.gK.array(t5),
                }),
                at = v
                    .props({
                        type: b.gK.literal(l.t.RECENTLY_PLAYED),
                        data: b.gK.maybe(ae),
                        meta: C,
                    })
                    .named("RecentlyPlayed")
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad)
                                return !0;
                            return (
                                (null == (a = e.data) || null == (t = a.items)
                                    ? void 0
                                    : t.length) !== 0
                            );
                        },
                        get objectsCount() {
                            var i, l;
                            return null !=
                                (l =
                                    null == (i = e.data)
                                        ? void 0
                                        : i.items.length)
                                ? l
                                : 0;
                        },
                    })),
                aa = b.gK.model("LandingVibeItemData", {
                    vibe: ei.Gh,
                    cover: b.gK.maybeNull(R.$B),
                }),
                ai = b.gK.model("LandingVibeItem", {
                    type: b.gK.literal(n._.WAVE_ITEM),
                    data: aa,
                }),
                al = b.gK.union(B, N, S, E, k, ai, tH, eH),
                as = b.gK.model("SearchHistoryData", { items: b.gK.array(al) }),
                ar = v
                    .props({
                        type: b.gK.union(
                            b.gK.literal(l.t.HISTORY),
                            b.gK.literal(l.t.SEARCH_HISTORY),
                        ),
                        data: b.gK.maybe(as),
                        meta: C,
                    })
                    .named("SearchHistory")
                    .views((e) => ({
                        get isVisible() {
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !0,
                            });
                        },
                        get objectsCount() {
                            var t, a;
                            return null !=
                                (a =
                                    null == (t = e.data)
                                        ? void 0
                                        : t.items.length)
                                ? a
                                : 0;
                        },
                    })),
                ao = b.gK.model("SpecialThemeSettings", {
                    buttonColor: b.gK.maybeNull(b.gK.string),
                    textColor: b.gK.maybeNull(b.gK.string),
                    bgImageUrl: b.gK.maybeNull(b.gK.string),
                    imageUrl: b.gK.maybeNull(b.gK.string),
                    buttonTextColor: b.gK.maybeNull(b.gK.string),
                }),
                an = b.gK.model("SpecialData", {
                    title: b.gK.maybe(b.gK.string),
                    subtitle: b.gK.maybe(b.gK.string),
                    buttonTitle: b.gK.maybe(b.gK.string),
                    imageUrl: b.gK.maybe(b.gK.string),
                    align: b.gK.maybeNull(b.gK.string),
                    weblink: b.gK.maybeNull(b.gK.string),
                    lightTheme: b.gK.maybeNull(ao),
                    darkTheme: b.gK.maybeNull(ao),
                }),
                ad = v
                    .props({
                        type: b.gK.literal(l.t.SPECIAL),
                        data: b.gK.maybe(an),
                        meta: C,
                    })
                    .named("Special")
                    .views((e) => ({
                        get isVisible() {
                            if (e.isLoading || e.isRejected || e.isNeededToLoad)
                                return !0;
                            return !!e.data;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                ac = b.gK.model("VibesDataItemTab", {
                    id: b.gK.number,
                    title: b.gK.string,
                }),
                am = b.gK.model("VibesDataItem", {
                    tab: ac,
                    data: b.gK.array(ei.Gh),
                }),
                au = b.gK.model("VibesData", { items: b.gK.array(am) }),
                a_ = v
                    .props({
                        type: b.gK.union(
                            b.gK.literal(l.t.WAVES),
                            b.gK.literal(l.t.SETS_BY_WAVES),
                            b.gK.literal(l.t.WAVES_AGENT),
                            b.gK.literal(l.t.SETS_BY_WAVES_AGENT),
                        ),
                        data: b.gK.maybe(au),
                        meta: C,
                    })
                    .named("Vibes")
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            let l =
                                    (null == (t = e.data)
                                        ? void 0
                                        : t.items.length) === 0,
                                s =
                                    null == (i = e.data) ||
                                    null == (a = i.items)
                                        ? void 0
                                        : a.every(
                                              (e) =>
                                                  !(null == e
                                                      ? void 0
                                                      : e.data),
                                          );
                            return en({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !l || !s,
                            });
                        },
                        get objectsCount() {
                            var l, s, r;
                            return null !=
                                (r =
                                    null == (s = e.data) ||
                                    null == (l = s.items[0])
                                        ? void 0
                                        : l.data.length)
                                ? r
                                : 0;
                        },
                    })),
                ag = b.gK.model("WizardData", {
                    title: b.gK.string,
                    description: b.gK.maybe(b.gK.string),
                    artists: b.gK.array(f.PK),
                }),
                ab = v
                    .props({
                        type: b.gK.literal(l.t.WIZARD),
                        data: b.gK.maybe(ag),
                        meta: C,
                    })
                    .named("Wizard")
                    .views(() => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                ap = b.gK.union(
                    eX,
                    eJ,
                    e6,
                    tl,
                    e9,
                    t7,
                    t0,
                    t$,
                    y,
                    at,
                    tP,
                    t4,
                    ad,
                    ab,
                    a_,
                    tG,
                    tX,
                    tB,
                    t3,
                    I,
                    e3,
                    tm,
                    tn,
                    tN,
                    tK,
                    t8,
                    e5,
                    ty,
                    eF,
                    eD,
                    tC,
                    tI,
                    ar,
                    tU,
                    ta,
                    eV,
                    ec,
                    eu,
                    eI,
                    eC,
                    eg,
                    eY,
                    tj,
                    td,
                ),
                av = b.gK.model("TabData", {
                    id: b.gK.string,
                    title: b.gK.string,
                    subtitle: b.gK.maybe(b.gK.string),
                    covers: b.gK.maybe(b.gK.array(b.gK.string)),
                }),
                aA = b.gK
                    .model("Tab", {
                        meta: b.gK.model({
                            id: b.gK.string,
                            title: b.gK.string,
                        }),
                        data: b.gK.maybe(av),
                        blocks: b.gK.array(ap),
                        shouldReloadNotification: b.gK.boolean,
                    })
                    .views((e) => ({
                        get hasErrorBlocks() {
                            return e.blocks.some(
                                (e) => e.isRejected && e.isVisible,
                            );
                        },
                    }))
                    .actions((e) => ({
                        setShouldReloadNotification(t) {
                            e.shouldReloadNotification = t;
                        },
                    })),
                aC = b.gK
                    .compose(
                        b.gK.model("TabsData", {
                            data: b.gK.maybeNull(b.gK.array(aA)),
                        }),
                        R.pl,
                        R.XT,
                    )
                    .actions((e) => ({
                        reset() {
                            (e.loadingState = x.GuX.IDLE),
                                e.destroyItems([e.data]);
                        },
                    })),
                aT = b.gK
                    .compose(
                        b.gK.model("Tabs", {
                            meta: b.gK.maybeNull(
                                b.gK.model({
                                    selectedTabIndex: b.gK.number,
                                    source: b.gK.maybe(A),
                                }),
                            ),
                            upperBlocks: b.gK.maybeNull(b.gK.array(ap)),
                            tabs: aC,
                        }),
                        R.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isEmpty() {
                                var a, i;
                                return (
                                    !(null == (a = e.tabs.data)
                                        ? void 0
                                        : a.length) &&
                                    !(null == (i = e.upperBlocks)
                                        ? void 0
                                        : i.length)
                                );
                            },
                            get isLoadedAndEmpty() {
                                return (
                                    [x.GuX.RESOLVE, x.GuX.REJECT].includes(
                                        e.loadingState,
                                    ) && t.isEmpty
                                );
                            },
                            get hasUpperBlocks() {
                                var l;
                                return !!(null == (l = e.upperBlocks)
                                    ? void 0
                                    : l.length);
                            },
                        };
                        return t;
                    })
                    .props({
                        id: b.gK.optional(b.gK.string, ""),
                        title: b.gK.optional(b.gK.string, ""),
                    })
                    .views((e) => ({
                        get isLoaded() {
                            return (
                                e.loadingState === x.GuX.RESOLVE ||
                                e.loadingState === x.GuX.REJECT
                            );
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getBlock: (0, b.L3)(function* (a) {
                                var i, s, v, A, C, T, I;
                                let h;
                                if (
                                    !a ||
                                    (!("source" in a.meta) &&
                                        ((h = a.type), !F.includes(h)))
                                )
                                    return;
                                if ((0, z.Q)(a)) {
                                    null == (i = a.data) ||
                                        i.blocks.forEach(t.getBlock);
                                    return;
                                }
                                let {
                                    landingResource: L,
                                    modelActionsLogger: y,
                                } = (0, b._$)(e);
                                try {
                                    a.loadingState = p.PENDING;
                                    let e = yield L.getBlock({
                                        source:
                                            "source" in a.meta
                                                ? a.meta.source
                                                : void 0,
                                        type: a.type,
                                    });
                                    if (!(0, b._n)(a)) {
                                        a.loadingState = p.REJECT;
                                        return;
                                    }
                                    switch (a.type) {
                                        case l.t.CLIPS:
                                        case l.t.ARTIST_CLIPS:
                                        case l.t.COLLECTION_CLIPS:
                                            let t, i;
                                            "object" == typeof e &&
                                                null !== e &&
                                                "items" in e &&
                                                Array.isArray(e.items) &&
                                                (!e.items.length ||
                                                    ((t = e.items[0]),
                                                    "object" == typeof t &&
                                                        null !== t &&
                                                        "type" in t &&
                                                        (t.type === n._.CLIP ||
                                                            t.type ===
                                                                n._
                                                                    .CLIP_ITEM))) &&
                                                ((i = a.type),
                                                (a.data = (0, b.wg)({
                                                    items: e.items.map(o),
                                                    canShowEmptyBlock:
                                                        i ===
                                                        l.t.COLLECTION_CLIPS,
                                                })));
                                            break;
                                        case l.t.WIZARD:
                                            "object" == typeof e &&
                                                null !== e &&
                                                "title" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t =
                                                            (null == e
                                                                ? void 0
                                                                : e.artists) ||
                                                            [])
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, f.as)({
                                                                      artist: e,
                                                                  }),
                                                              );
                                                    return (0, b.wg)({
                                                        title: e.title,
                                                        description:
                                                            e.description,
                                                        artists: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.CHART_TRACKS:
                                            "chart" in e &&
                                                (a.data = ((e) => {
                                                    var t, a;
                                                    let i =
                                                        null ==
                                                            (a = (e || {})
                                                                .chart) ||
                                                        null == (t = a.tracks)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let {
                                                                      track: t,
                                                                      chart: a,
                                                                  } = e;
                                                                  return {
                                                                      type: n._
                                                                          .TRACK_ITEM,
                                                                      data: (0,
                                                                      _.bV)(
                                                                          t,
                                                                          a,
                                                                      ),
                                                                  };
                                                              });
                                                    return (0, b.wg)({
                                                        items: i,
                                                        playlist: (0, d.bk)({
                                                            playlist:
                                                                null == e
                                                                    ? void 0
                                                                    : e.chart,
                                                        }),
                                                    });
                                                })(e));
                                            break;
                                        case l.t
                                            .NON_MUSIC_EDITORIAL_COMPILATION:
                                            "object" == typeof e &&
                                                null !== e &&
                                                "items" in e &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) =>
                                                        e.type ===
                                                        n._.NON_MUSIC_ALBUM_ITEM
                                                            ? u({
                                                                  album: e.data
                                                                      .album,
                                                                  artists:
                                                                      e.data
                                                                          .artists,
                                                                  likesCount:
                                                                      e.data
                                                                          .likesCount,
                                                                  bookmateOptionRequired:
                                                                      e.data
                                                                          .bookmateOptionRequired,
                                                              })
                                                            : c({
                                                                  playlist:
                                                                      e.data
                                                                          .playlist,
                                                                  likesCount:
                                                                      e.data
                                                                          .likesCount,
                                                                  trailer:
                                                                      e.data
                                                                          .trailer,
                                                              }),
                                                    );
                                                    return (0, b.wg)({
                                                        items: t,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.CHART_ALBUMS:
                                            ((e) => {
                                                let t,
                                                    a = e.items;
                                                return (
                                                    !a.length ||
                                                    !!(
                                                        (t = a[0]) &&
                                                        "object" == typeof t &&
                                                        "type" in t &&
                                                        t.type ===
                                                            n._.CHART_ALBUM_ITEM
                                                    )
                                                );
                                            })(e) &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) =>
                                                        (0, m.EV)({
                                                            album: e.data.album,
                                                            likesCount:
                                                                e.data
                                                                    .likesCount,
                                                            chart: e.data.chart,
                                                        }),
                                                    );
                                                    return (0, b.wg)({
                                                        items: t,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_ALBUMS:
                                            "likedAlbums" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {})
                                                            .likedAlbums)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, m.sK)({
                                                                      album: e
                                                                          .data
                                                                          .album,
                                                                      artists:
                                                                          e.data
                                                                              .artists,
                                                                      trailer:
                                                                          e.data
                                                                              .trailer,
                                                                  }),
                                                              );
                                                    return (0, b.wg)({
                                                        items: a,
                                                        canShowEmptyBlock: !0,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_ARTISTS:
                                            "likedArtists" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {})
                                                            .likedArtists)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, f.as)({
                                                                      artist: e
                                                                          .data
                                                                          .artist,
                                                                      trailer:
                                                                          e.data
                                                                              .trailer,
                                                                  }),
                                                              );
                                                    return (0, b.wg)({
                                                        items: a,
                                                        canShowEmptyBlock: !0,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_ARTISTS_AND_TOP:
                                            e &&
                                                "object" == typeof e &&
                                                "items" in e &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) =>
                                                        (0, f.as)({
                                                            artist: e.data
                                                                .artist,
                                                            trailer:
                                                                e.data.trailer,
                                                        }),
                                                    );
                                                    return (0, b.wg)({
                                                        items: t,
                                                        canShowEmptyBlock: !0,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.PERSONAL_ARTISTS:
                                        case l.t.NEW_STARS_ARTISTS:
                                        case l.t.EDITORIAL_ARTISTS:
                                        case l.t.META_TAG_POPULAR_ARTISTS:
                                        case l.t.MICRO_GENRE_ARTISTS:
                                        case l.t.MICRO_GENRE_TOP_ARTISTS:
                                        case l.t.META_TAG_ARTISTS:
                                        case l.t.SIMILAR_ARTISTS:
                                            "items" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {}).items)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, f.as)({
                                                                      artist: e
                                                                          .data
                                                                          .artist,
                                                                      trailer:
                                                                          e.data
                                                                              .trailer,
                                                                  }),
                                                              );
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_PLAYLISTS_CREATED:
                                            "createdPlaylists" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {})
                                                            .createdPlaylists)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, d.bk)({
                                                                      playlist:
                                                                          e.data
                                                                              .playlist,
                                                                      likesCount:
                                                                          e.data
                                                                              .likesCount,
                                                                      trailer:
                                                                          e.data
                                                                              .trailer,
                                                                  }),
                                                              );
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_PLAYLISTS_LIKED:
                                            "likedPlaylists" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {})
                                                            .likedPlaylists)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, d.bk)({
                                                                      playlist:
                                                                          e.data
                                                                              .playlist,
                                                                      generatedPlaylistType:
                                                                          e.data
                                                                              .generatedPlaylistType,
                                                                      likesCount:
                                                                          e.data
                                                                              .likesCount,
                                                                      trailer:
                                                                          e.data
                                                                              .trailer,
                                                                  }),
                                                              );
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.OPEN_PLAYLIST:
                                        case l.t.SMART_OPEN_PLAYLIST:
                                        case l.t.NON_MUSIC_OPEN_PLAYLIST:
                                            "playlist" in e &&
                                                ((s = a.id),
                                                (a.data = (0, b.wg)({
                                                    items: e.tracks.map((e) =>
                                                        (0, _.vU)(e),
                                                    ),
                                                    playlist: (0, el.jX)(
                                                        e.playlist,
                                                    ),
                                                    coverUri:
                                                        null == (v = e.cover)
                                                            ? void 0
                                                            : v.uri,
                                                    withRewindTrailerButton:
                                                        "rewind2024" === s,
                                                })));
                                            break;
                                        case l.t.COLLECTION_PLAYLIST_WITH_LIKES:
                                            "playlist" in e &&
                                                (a.data = ((e) => {
                                                    var t, a, i;
                                                    let l = e || {};
                                                    return (0, b.wg)({
                                                        items:
                                                            null !=
                                                            (i =
                                                                null ==
                                                                (t = l.tracks)
                                                                    ? void 0
                                                                    : t.map(
                                                                          (e) =>
                                                                              (0,
                                                                              _.vU)(
                                                                                  e,
                                                                              ),
                                                                      ))
                                                                ? i
                                                                : [],
                                                        playlist: (0, el.jX)(
                                                            l.playlist,
                                                        ),
                                                        totalItemsCount:
                                                            null ==
                                                            (a = l.summary)
                                                                ? void 0
                                                                : a.count,
                                                        canShowEmptyBlock: !0,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.NEW_RELEASES:
                                        case l.t.EDITORIAL_NEW_RELEASES:
                                            "newReleases" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {})
                                                            .newReleases)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let {
                                                                      album: t,
                                                                      artists:
                                                                          a,
                                                                      releaseDate:
                                                                          i,
                                                                      cover: l,
                                                                      trailer:
                                                                          s,
                                                                  } = e;
                                                                  return {
                                                                      album: (0,
                                                                      m.sK)({
                                                                          album: t,
                                                                          artists:
                                                                              a,
                                                                          trailer:
                                                                              s,
                                                                      }),
                                                                      releaseDate:
                                                                          i,
                                                                      coverUri:
                                                                          null ==
                                                                          l
                                                                              ? void 0
                                                                              : l.uri,
                                                                      coverColor:
                                                                          null ==
                                                                          l
                                                                              ? void 0
                                                                              : l.color,
                                                                  };
                                                              });
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.NEW_PLAYLISTS:
                                        case l.t.EDITORIAL_COMPILATION:
                                        case l.t.RECOMMENDED_PLAYLISTS:
                                        case l.t.META_TAG_POPULAR_PLAYLISTS:
                                        case l.t.META_TAG_NEW_ALBUMS:
                                        case l.t.META_TAG_PLAYLISTS:
                                        case l.t.MICRO_GENRE_ALBUMS:
                                        case l.t.META_TAG_ALBUMS:
                                        case l.t.ARTIST_PLAYLISTS:
                                        case l.t.ARTIST_COMPILATIONS:
                                        case l.t.ARTIST_ALBUMS:
                                        case l.t.ARTIST_STUDIO_ALBUMS:
                                        case l.t.ARTIST_SIMILAR_ENTITIES:
                                        case l.t.COLLECTION_SIMILAR_ENTITIES:
                                            "items" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {}).items)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  switch (
                                                                      e.type
                                                                  ) {
                                                                      case n._
                                                                          .LIKED_PLAYLIST_ITEM:
                                                                          return c(
                                                                              {
                                                                                  playlist:
                                                                                      e
                                                                                          .data
                                                                                          .playlist,
                                                                                  likesCount:
                                                                                      e
                                                                                          .data
                                                                                          .likesCount,
                                                                                  trailer:
                                                                                      e
                                                                                          .data
                                                                                          .trailer,
                                                                              },
                                                                          );
                                                                      case n._
                                                                          .ALBUM_ITEM:
                                                                          return P(
                                                                              e
                                                                                  .data
                                                                                  .album,
                                                                              e
                                                                                  .data
                                                                                  .artists,
                                                                              e
                                                                                  .data
                                                                                  .trailer,
                                                                              e
                                                                                  .data
                                                                                  .releaseDate,
                                                                          );
                                                                      case n._
                                                                          .ARTIST_ITEM:
                                                                          return w(
                                                                              e
                                                                                  .data
                                                                                  .artist,
                                                                              e
                                                                                  .data
                                                                                  .trailer,
                                                                          );
                                                                      case n._
                                                                          .WAVE_AGENT_ITEM:
                                                                          return eP(
                                                                              e,
                                                                          );
                                                                  }
                                                              });
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.RECENTLY_PLAYED:
                                            "items" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {}).items)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  switch (
                                                                      e.type
                                                                  ) {
                                                                      case n._
                                                                          .PLAYLIST_ITEM:
                                                                          return M(
                                                                              e
                                                                                  .data
                                                                                  .playlist,
                                                                              e
                                                                                  .data
                                                                                  .trailer,
                                                                          );
                                                                      case n._
                                                                          .ALBUM_ITEM:
                                                                          return P(
                                                                              e
                                                                                  .data
                                                                                  .album,
                                                                              e
                                                                                  .data
                                                                                  .artists,
                                                                              e
                                                                                  .data
                                                                                  .trailer,
                                                                          );
                                                                      case n._
                                                                          .ARTIST_ITEM:
                                                                          return w(
                                                                              e
                                                                                  .data
                                                                                  .artist,
                                                                              e
                                                                                  .data
                                                                                  .trailer,
                                                                          );
                                                                  }
                                                              });
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.IN_STYLE:
                                            "inStyleTabs" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {})
                                                            .inStyleTabs)
                                                            ? void 0
                                                            : t.map((e, t) => {
                                                                  var a;
                                                                  let i =
                                                                          null ==
                                                                          e
                                                                              ? void 0
                                                                              : e.items.map(
                                                                                    (
                                                                                        e,
                                                                                    ) => {
                                                                                        let {
                                                                                            album: t,
                                                                                            artists:
                                                                                                a,
                                                                                            trailer:
                                                                                                i,
                                                                                        } = e;
                                                                                        return (0,
                                                                                        m.sK)(
                                                                                            {
                                                                                                album: t,
                                                                                                artists:
                                                                                                    a,
                                                                                                trailer:
                                                                                                    i,
                                                                                            },
                                                                                        );
                                                                                    },
                                                                                ),
                                                                      l =
                                                                          ((null ==
                                                                              e ||
                                                                          null ==
                                                                              (a =
                                                                                  e.cover)
                                                                              ? void 0
                                                                              : a.uri) && [
                                                                              null ==
                                                                              e
                                                                                  ? void 0
                                                                                  : e
                                                                                        .cover
                                                                                        .uri,
                                                                          ]) ||
                                                                          [];
                                                                  return {
                                                                      tab: {
                                                                          id: t,
                                                                          title: e.title,
                                                                          covers: (0,
                                                                          b.wg)(
                                                                              l,
                                                                          ),
                                                                      },
                                                                      data: (0,
                                                                      b.wg)(i),
                                                                  };
                                                              });
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.PROMOTIONS:
                                        case l.t.EDITORIAL_PROMOTIONS:
                                        case l.t.NON_MUSIC_PROMOTIONS:
                                            "promotions" in e &&
                                                (a.data = ((e) => {
                                                    if (
                                                        !Array.isArray(
                                                            null == e
                                                                ? void 0
                                                                : e.promotions,
                                                        )
                                                    )
                                                        return (0, b.wg)({});
                                                    let t =
                                                        null == e
                                                            ? void 0
                                                            : e.promotions.map(
                                                                  (e) => {
                                                                      var t, a;
                                                                      return {
                                                                          featureId:
                                                                              (e =
                                                                                  e ||
                                                                                  {})
                                                                                  .featureId,
                                                                          title: e.title,
                                                                          subtitle:
                                                                              e.subtitle,
                                                                          weblink:
                                                                              null !=
                                                                              (a =
                                                                                  null ==
                                                                                  (t =
                                                                                      e.action)
                                                                                      ? void 0
                                                                                      : t.weblink)
                                                                                  ? a
                                                                                  : "",
                                                                          imageUrl:
                                                                              e.imageUrl,
                                                                      };
                                                                  },
                                                              );
                                                    return (0, b.wg)({
                                                        items: t,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.REWIND_PLAYLISTS:
                                        case l.t.PERSONAL_PLAYLISTS:
                                            "items" in e &&
                                                (a.data = ((e) => {
                                                    if (
                                                        !e ||
                                                        !Array.isArray(e.items)
                                                    )
                                                        return (0, b.wg)({});
                                                    let t = e.items.map(O);
                                                    return (0, b.wg)({
                                                        items: t,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.SPECIAL:
                                            "title" in e &&
                                                (a.data = (0, b.wg)({
                                                    title:
                                                        null == e
                                                            ? void 0
                                                            : e.title,
                                                    subtitle:
                                                        null == e
                                                            ? void 0
                                                            : e.subtitle,
                                                    buttonTitle:
                                                        null == e
                                                            ? void 0
                                                            : e.buttonTitle,
                                                    imageUrl:
                                                        null == e
                                                            ? void 0
                                                            : e.imageUrl,
                                                    align:
                                                        null == e
                                                            ? void 0
                                                            : e.align,
                                                    weblink:
                                                        null == e ||
                                                        null == (A = e.action)
                                                            ? void 0
                                                            : A.weblink,
                                                    lightTheme: ef(
                                                        null == e
                                                            ? void 0
                                                            : e.lightTheme,
                                                    ),
                                                    darkTheme: ef(
                                                        null == e
                                                            ? void 0
                                                            : e.darkTheme,
                                                    ),
                                                }));
                                            break;
                                        case l.t.COLLECTION_ALBUMS_PRESAVES:
                                            void 0 !== e.tabs &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {}).tabs)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let t =
                                                                      null == e
                                                                          ? void 0
                                                                          : e.items.map(
                                                                                es,
                                                                            );
                                                                  return (0,
                                                                  b.wg)({
                                                                      id: e.id,
                                                                      title: e.title,
                                                                      type: e.type,
                                                                      items: t,
                                                                      canShowEmptyBlock:
                                                                          !0,
                                                                  });
                                                              });
                                                    return (0, b.wg)({
                                                        tabs: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.WAVES:
                                        case l.t.SETS_BY_WAVES:
                                            "waves" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {}).waves)
                                                            ? void 0
                                                            : t.map((e, t) => ({
                                                                  tab: {
                                                                      id: t,
                                                                      title:
                                                                          null ==
                                                                          e
                                                                              ? void 0
                                                                              : e.title,
                                                                  },
                                                                  data:
                                                                      null == e
                                                                          ? void 0
                                                                          : e.items.map(
                                                                                ei.er,
                                                                            ),
                                                              }));
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.WAVES_AGENT:
                                        case l.t.SETS_BY_WAVES_AGENT:
                                            e &&
                                                "object" == typeof e &&
                                                "waves" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {}).waves)
                                                            ? void 0
                                                            : t.map((e, t) => {
                                                                  var a;
                                                                  return {
                                                                      tab: {
                                                                          id: t,
                                                                          title:
                                                                              null ==
                                                                              e
                                                                                  ? void 0
                                                                                  : e.title,
                                                                      },
                                                                      data:
                                                                          (null ==
                                                                              e ||
                                                                          null ==
                                                                              (a =
                                                                                  e.items)
                                                                              ? void 0
                                                                              : a.map(
                                                                                    (
                                                                                        e,
                                                                                    ) => {
                                                                                        let {
                                                                                            wave: t,
                                                                                            agent: a,
                                                                                        } =
                                                                                            e;
                                                                                        return (0,
                                                                                        ei.lb)(
                                                                                            t,
                                                                                            a,
                                                                                        );
                                                                                    },
                                                                                )) ||
                                                                          [],
                                                                  };
                                                              });
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.MIXES_GRID:
                                        case l.t.MIXES_MUSIC:
                                            "object" == typeof e &&
                                                null !== e &&
                                                "items" in e &&
                                                (a.data = {
                                                    items: (0, b.wg)(
                                                        e.items.map((e) =>
                                                            (0, K.rc)(e.data),
                                                        ),
                                                    ),
                                                });
                                            break;
                                        case l.t.MIXES:
                                            "items" in e &&
                                                (a.data = {
                                                    items: (0, b.wg)(
                                                        e.items.map((e) =>
                                                            (0, ex.Ju)(e.data),
                                                        ),
                                                    ),
                                                });
                                            break;
                                        case l.t.NEUROMUSIC:
                                            "items" in e &&
                                                (a.data = (0, b.wg)({
                                                    items: e.items.map((e) =>
                                                        (0, eR.xf)(e),
                                                    ),
                                                }));
                                            break;
                                        case l.t.LIKES_AND_HISTORY:
                                            "favorites" in e &&
                                                (a.data = ((e) => {
                                                    let {
                                                            favorites: t,
                                                            history: a,
                                                        } = e,
                                                        i = (0, x.pX4)(t.cover),
                                                        l = t.trackCovers.map(
                                                            x.pX4,
                                                        ),
                                                        s = (0, b.wg)({
                                                            title: t.title,
                                                            cover: i,
                                                            playlistUuid:
                                                                t.playlistUuid ||
                                                                void 0,
                                                            count: t.count,
                                                            trackCovers: l,
                                                        }),
                                                        r = a.trackCovers.map(
                                                            x.pX4,
                                                        ),
                                                        o = (0, b.wg)({
                                                            title: a.title,
                                                            trackCovers: r,
                                                            artists:
                                                                a.subtitleElements,
                                                        });
                                                    return (0, b.wg)({
                                                        favorites: s,
                                                        history: o,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.CONCERTS_TOP:
                                        case l.t.CONCERTS_PERSONAL:
                                        case l.t.EDITORIAL_CONCERTS:
                                        case l.t.VIEWED_CONCERTS:
                                            void 0 !== e.concerts &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {}).concerts)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, $.ho)(e),
                                                              );
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t
                                            .COLLECTION_PLAYLISTS_LIKED_AND_CREATED:
                                            "tabs" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {}).tabs)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let t =
                                                                      null == e
                                                                          ? void 0
                                                                          : e.items.map(
                                                                                (
                                                                                    e,
                                                                                ) =>
                                                                                    (0,
                                                                                    d.bk)(
                                                                                        {
                                                                                            playlist:
                                                                                                e
                                                                                                    .data
                                                                                                    .playlist,
                                                                                            generatedPlaylistType:
                                                                                                e
                                                                                                    .data
                                                                                                    .generatedPlaylistType,
                                                                                            likesCount:
                                                                                                e
                                                                                                    .data
                                                                                                    .likesCount,
                                                                                            trailer:
                                                                                                e
                                                                                                    .data
                                                                                                    .trailer,
                                                                                        },
                                                                                    ),
                                                                            );
                                                                  return (0,
                                                                  b.wg)({
                                                                      id: e.id,
                                                                      title: e.title,
                                                                      type: e.type,
                                                                      items: t,
                                                                      canShowEmptyBlock:
                                                                          !0,
                                                                  });
                                                              });
                                                    return (0, b.wg)({
                                                        tabs: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.EDITORIAL_WAVES:
                                        case l.t.META_TAG_WAVE:
                                        case l.t.MICRO_GENRE_WAVE:
                                        case l.t.MICRO_GENRE_SIMILAR_WAVE:
                                        case l.t.META_TAG_SIMILAR_WAVE:
                                            "items" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {}).items)
                                                            ? void 0
                                                            : t.map(ei.er);
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.EDITORIAL_WAVES_AGENT:
                                        case l.t.META_TAG_WAVE_AGENT:
                                        case l.t.MICRO_GENRE_WAVE_AGENT:
                                        case l.t.MICRO_GENRE_SIMILAR_WAVE_AGENT:
                                        case l.t.META_TAG_SIMILAR_WAVE_AGENT:
                                            e &&
                                                "object" == typeof e &&
                                                "items" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {}).items)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, ei.lb)(
                                                                      e.wave,
                                                                      e.agent,
                                                                  ),
                                                              );
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.ITEM_LIST:
                                            "items" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {}).items)
                                                            ? void 0
                                                            : t.map(ek);
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.DONATIONS:
                                            void 0 !== e.donations &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null ==
                                                        (t = (e || {})
                                                            .donations)
                                                            ? void 0
                                                            : t.map(ej);
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.CONTINUE_LISTEN:
                                            "object" == typeof e &&
                                                null !== e &&
                                                "bookshelf" in e &&
                                                (a.data = ((e) => {
                                                    let {
                                                        bookshelf: t,
                                                        newEpisodes: a,
                                                        lastPlayed: i,
                                                    } = e;
                                                    return (0, b.wg)({
                                                        bookshelf: {
                                                            title: t.title,
                                                            covers: (
                                                                t.covers || []
                                                            ).map(eN),
                                                            bookCount:
                                                                t.bookCount,
                                                            podcastCount:
                                                                t.podcastCount,
                                                        },
                                                        newEpisodes: {
                                                            title: a.title,
                                                            covers: (
                                                                a.covers || []
                                                            ).map(eN),
                                                            trackCount:
                                                                a.trackCount,
                                                        },
                                                        lastPlayed:
                                                            i &&
                                                            ((e) => {
                                                                let {
                                                                    type: t,
                                                                    data: {
                                                                        track: a,
                                                                        album: i,
                                                                        playlist:
                                                                            l,
                                                                        durationTotal:
                                                                            s,
                                                                        durationLeft:
                                                                            r,
                                                                    },
                                                                } = e;
                                                                return (0,
                                                                b.wg)({
                                                                    type: t,
                                                                    data: {
                                                                        album:
                                                                            t ===
                                                                                Z
                                                                                    ._
                                                                                    .ALBUM &&
                                                                            i
                                                                                ? (0,
                                                                                  m.sK)(
                                                                                      {
                                                                                          album: i,
                                                                                      },
                                                                                  )
                                                                                : void 0,
                                                                        playlist:
                                                                            t !==
                                                                                Z
                                                                                    ._
                                                                                    .ALBUM &&
                                                                            l
                                                                                ? (0,
                                                                                  d.bk)(
                                                                                      {
                                                                                          playlist:
                                                                                              l,
                                                                                      },
                                                                                  )
                                                                                : void 0,
                                                                        track: (0,
                                                                        _.vU)(
                                                                            a,
                                                                        ),
                                                                        albumDuration:
                                                                            s,
                                                                        albumDurationLeft:
                                                                            r,
                                                                    },
                                                                });
                                                            })(i),
                                                    });
                                                })(e));
                                            break;
                                        case l.t.SIMPLE_ALBUM_PROMO:
                                        case l.t.ALBUM_PROMO:
                                            e &&
                                                "object" == typeof e &&
                                                "albumBanners" in e &&
                                                (a.data = (0, b.wg)({
                                                    reporting: ((e) => {
                                                        if (e)
                                                            return {
                                                                adImpressions:
                                                                    e.adImpressions,
                                                                blockImpression:
                                                                    e.blockImpression,
                                                                blockRender:
                                                                    e.blockRender,
                                                            };
                                                    })(e.reporting),
                                                    items: e.albumBanners.map(
                                                        (e) => ({
                                                            album: (0, m.sK)({
                                                                album: e.album,
                                                                artists:
                                                                    e.artists,
                                                            }),
                                                            artists:
                                                                e.artists.map(
                                                                    (e) =>
                                                                        (0,
                                                                        f.as)({
                                                                            artist: e,
                                                                        }),
                                                                ),
                                                            cover: e.cover,
                                                            coverContentMode:
                                                                e.coverContentMode,
                                                            clickUrl:
                                                                e.reporting
                                                                    .clickUrl,
                                                            yclid: e
                                                                .playbackParams
                                                                .yclid,
                                                            utm: e
                                                                .playbackParams
                                                                .utm,
                                                        }),
                                                    ),
                                                }));
                                            break;
                                        case l.t.COLLECTION_DOWNLOADED_TRACKS:
                                            e &&
                                                "object" == typeof e &&
                                                "tracks" in e &&
                                                (a.data = ((e) => {
                                                    let t =
                                                            (null == e
                                                                ? void 0
                                                                : e.tracks) ||
                                                            [],
                                                        a = t
                                                            .slice(0, 8)
                                                            .map((e) =>
                                                                (0, _.vU)(e),
                                                            );
                                                    return (0, b.wg)({
                                                        items: a,
                                                        rawTracks: t,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.HISTORY:
                                        case l.t.SEARCH_HISTORY:
                                            e &&
                                                "object" == typeof e &&
                                                "items" in e &&
                                                Array.isArray(e.items) &&
                                                (a.data = ((e) => {
                                                    let t = e.items
                                                        .map((e) => {
                                                            switch (e.type) {
                                                                case n._
                                                                    .ALBUM_ITEM:
                                                                    return P(
                                                                        e.data
                                                                            .album,
                                                                        e.data
                                                                            .artists,
                                                                        e.data
                                                                            .trailer,
                                                                    );
                                                                case n._
                                                                    .ARTIST_ITEM:
                                                                    return w(
                                                                        e.data
                                                                            .artist,
                                                                        e.data
                                                                            .trailer,
                                                                    );
                                                                case n._
                                                                    .TRACK_ITEM:
                                                                    return g(e);
                                                                case n._
                                                                    .LIKED_PLAYLIST_ITEM:
                                                                    return c({
                                                                        playlist:
                                                                            e
                                                                                .data
                                                                                .playlist,
                                                                        likesCount:
                                                                            e
                                                                                .data
                                                                                .likesCount,
                                                                        trailer:
                                                                            e
                                                                                .data
                                                                                .trailer,
                                                                        tracksCount:
                                                                            e
                                                                                .data
                                                                                .trackCount,
                                                                    });
                                                                case n._
                                                                    .WAVE_ITEM:
                                                                    let t;
                                                                    return (
                                                                        (t = e),
                                                                        (0,
                                                                        b.wg)({
                                                                            type: n
                                                                                ._
                                                                                .WAVE_ITEM,
                                                                            data: {
                                                                                cover: t
                                                                                    .data
                                                                                    .cover
                                                                                    ? (0,
                                                                                      x.pX4)(
                                                                                          t
                                                                                              .data
                                                                                              .cover,
                                                                                      )
                                                                                    : void 0,
                                                                                vibe: (0,
                                                                                ei.er)(
                                                                                    t
                                                                                        .data
                                                                                        .wave,
                                                                                ),
                                                                            },
                                                                        })
                                                                    );
                                                                case n._
                                                                    .WAVE_AGENT_ITEM:
                                                                    return eP(
                                                                        e,
                                                                    );
                                                                case n._
                                                                    .NON_MUSIC_ALBUM_ITEM:
                                                                    return u({
                                                                        album: e
                                                                            .data
                                                                            .album,
                                                                        likesCount:
                                                                            e
                                                                                .data
                                                                                .likesCount,
                                                                        bookmateOptionRequired:
                                                                            e
                                                                                .data
                                                                                .bookmateOptionRequired,
                                                                    });
                                                                case n._
                                                                    .CLIP_ITEM:
                                                                case n._.CLIP:
                                                                    return {
                                                                        type: e.type,
                                                                        data: (0,
                                                                        r.SZ)({
                                                                            clip: e
                                                                                .data
                                                                                .clip,
                                                                            artists:
                                                                                e
                                                                                    .data
                                                                                    .artists,
                                                                        }),
                                                                    };
                                                                default:
                                                                    return;
                                                            }
                                                        })
                                                        .filter((e) => e);
                                                    return (0, b.wg)({
                                                        items: t,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_KIDS:
                                            e &&
                                                "object" == typeof e &&
                                                "items" in e &&
                                                Array.isArray(e.items) &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) => {
                                                        switch (e.type) {
                                                            case n._.TRACK_ITEM:
                                                                return g(e);
                                                            case n._
                                                                .LIKED_PLAYLIST_ITEM:
                                                                return c({
                                                                    playlist:
                                                                        e.data
                                                                            .playlist,
                                                                    likesCount:
                                                                        e.data
                                                                            .likesCount,
                                                                    trailer:
                                                                        e.data
                                                                            .trailer,
                                                                    tracksCount:
                                                                        e.data
                                                                            .trackCount,
                                                                });
                                                            case n._
                                                                .NON_MUSIC_ALBUM_ITEM:
                                                                return u({
                                                                    album: e
                                                                        .data
                                                                        .album,
                                                                    likesCount:
                                                                        e.data
                                                                            .likesCount,
                                                                    bookmateOptionRequired:
                                                                        e.data
                                                                            .bookmateOptionRequired,
                                                                });
                                                        }
                                                    });
                                                    return (0, b.wg)({
                                                        items: t,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.ARTIST_CONCERTS:
                                            e &&
                                                "object" == typeof e &&
                                                "concerts" in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = e.concerts)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let {
                                                                      concert:
                                                                          t,
                                                                      minPrice:
                                                                          a,
                                                                  } = e;
                                                                  return {
                                                                      ...(0,
                                                                      $.ho)(
                                                                          t,
                                                                          a,
                                                                      ),
                                                                  };
                                                              });
                                                    return (0, b.wg)({
                                                        items: a,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.ARTIST_POPULAR_TRACKS:
                                            e &&
                                                "object" == typeof e &&
                                                "tracks" in e &&
                                                e.tracks &&
                                                (a.data = (0, b.wg)({
                                                    items: e.tracks.map((e) =>
                                                        (0, _.vU)(e),
                                                    ),
                                                }));
                                            break;
                                        case l.t.ARTIST_RELEASE:
                                            e &&
                                                "object" == typeof e &&
                                                "release" in e &&
                                                e.release &&
                                                (a.data = ((e) => {
                                                    let {
                                                        album: t,
                                                        artists: a,
                                                        releaseDate: i,
                                                        trailer: l,
                                                    } = e.release;
                                                    return {
                                                        album: (0, m.sK)({
                                                            album: t,
                                                            artists: a,
                                                            trailer: l,
                                                            releaseDate: i,
                                                        }),
                                                        releaseDate: i,
                                                    };
                                                })(e));
                                            break;
                                        case l.t.FAMILIAR_YOU:
                                            e &&
                                                "object" == typeof e &&
                                                (a.data = (0, b.wg)({
                                                    vibeTrackCount:
                                                        null == (C = e.wave)
                                                            ? void 0
                                                            : C.trackCount,
                                                    collectionTrackCount:
                                                        null ==
                                                        (T = e.collection)
                                                            ? void 0
                                                            : T.trackCount,
                                                    collectionAlbumCount:
                                                        null ==
                                                        (I = e.collection)
                                                            ? void 0
                                                            : I.albumCount,
                                                }));
                                            break;
                                        case l.t.ARTIST_PICK:
                                            e &&
                                                "object" == typeof e &&
                                                "artists" in e &&
                                                e.artists &&
                                                "playlist" in e &&
                                                e.playlist &&
                                                (a.data = ((e) => {
                                                    let t = e.artists.map((e) =>
                                                        (0, f.as)({
                                                            artist: e,
                                                        }),
                                                    );
                                                    return (0, b.wg)({
                                                        playlist: (0, d.bk)({
                                                            playlist:
                                                                e.playlist,
                                                        }),
                                                        artists: t,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.ARTIST_UPCOMING_RELEASE:
                                            e &&
                                                "object" == typeof e &&
                                                "release" in e &&
                                                e.release &&
                                                "presaved" in e &&
                                                (a.data = ((e) => {
                                                    let {
                                                        album: t,
                                                        artists: a,
                                                        releaseDate: i,
                                                    } = e.release;
                                                    return {
                                                        album: (0, m.h)({
                                                            album: t,
                                                            artists: a,
                                                            releaseDate: i,
                                                            isPresave:
                                                                e.presaved,
                                                        }),
                                                    };
                                                })(e));
                                            break;
                                        case l.t.CONCERT_PLACE:
                                            "object" == typeof e &&
                                                null !== e &&
                                                "map" in e &&
                                                (a.data = ((e) => {
                                                    let t = e.metroStations
                                                        ? e.metroStations.map(
                                                              eS.P5,
                                                          )
                                                        : null;
                                                    return (0, b.wg)({
                                                        place: e.place,
                                                        city: e.city,
                                                        address: e.address,
                                                        metroStations: t,
                                                        map: e.map,
                                                    });
                                                })(e));
                                    }
                                    a.loadingState = p.RESOLVE;
                                } catch (e) {
                                    y.error(e),
                                        (0, b._n)(a) &&
                                            ((a.loadingState = p.REJECT),
                                            e instanceof H.GX &&
                                                (e.statusCode ===
                                                    H.X1.NOT_FOUND ||
                                                    e.statusCode ===
                                                        H.X1.BAD_REQUEST) &&
                                                (a.isNotFound = !0));
                                }
                            }),
                            getTabData: (0, b.L3)(function* (t) {
                                let {
                                    landingResource: a,
                                    modelActionsLogger: i,
                                } = (0, b._$)(e);
                                try {
                                    var l, s;
                                    e.tabs.loadingState = x.GuX.PENDING;
                                    let i =
                                        (null ==
                                        (s = (
                                            (yield a.getBlock({ source: t })) ||
                                            {}
                                        ).tabs)
                                            ? void 0
                                            : s.map((e) =>
                                                  (0, b.wg)({
                                                      id: e.id,
                                                      title: e.title,
                                                      subtitle: e.subtitle,
                                                      covers: e.covers,
                                                  }),
                                              )) || [];
                                    null == (l = e.tabs.data) ||
                                        l.forEach((e, t) => {
                                            let a = i.find(
                                                (t) => t.title === e.meta.title,
                                            );
                                            e.data = a || i[t];
                                        }),
                                        (e.tabs.loadingState = x.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.loadingState = x.GuX.REJECT);
                                }
                            }),
                            async prefetchBlocks(a) {
                                var i, l, s;
                                let r = null != a ? a : 0,
                                    o = [];
                                (null == (i = e.meta) ? void 0 : i.source) &&
                                    o.push(t.getTabData(e.meta.source)),
                                    null == (l = e.upperBlocks) ||
                                        l.forEach((e) => {
                                            r > 0 &&
                                                (0, eb.v)(e.meta) &&
                                                (r--, o.push(t.getBlock(e)));
                                        }),
                                    null == (s = e.tabs.data) ||
                                        s.forEach((e) => {
                                            e.blocks
                                                .slice(0, r)
                                                .forEach((e) => {
                                                    (0, eb.v)(e.meta) &&
                                                        o.push(t.getBlock(e));
                                                });
                                        }),
                                    o.length > 0 &&
                                        (await Promise.allSettled(o));
                            },
                            getChildrenSkeleton: (0, b.L3)(function* (t) {
                                let {
                                        childrenLandingResource: a,
                                        modelActionsLogger: s,
                                    } = (0, b._$)(e),
                                    { experiments: r } = (0, b.Zn)(e);
                                try {
                                    e.loadingState = x.GuX.PENDING;
                                    let s = yield a.getSkeleton(t),
                                        o = r.checkExperiment(
                                            x.zal.WebNextWaveAgentExperiment,
                                            "on",
                                        ),
                                        d = ((e, t) => {
                                            let a = {
                                                loadingState: x.GuX.RESOLVE,
                                                isLoading: !1,
                                            };
                                            return (
                                                (a.meta = {
                                                    selectedTabIndex: 0,
                                                }),
                                                (a.tabs = {
                                                    loadingState: x.GuX.RESOLVE,
                                                    data: [
                                                        {
                                                            meta: {
                                                                id: e.title,
                                                                title: e.title,
                                                            },
                                                            shouldReloadNotification:
                                                                !1,
                                                            blocks: e.blocks
                                                                .filter((e) => {
                                                                    let t;
                                                                    return (
                                                                        (t =
                                                                            e.type),
                                                                        Object.values(
                                                                            i,
                                                                        ).includes(
                                                                            t,
                                                                        )
                                                                    );
                                                                })
                                                                .map((e) =>
                                                                    ((e, t) => {
                                                                        let a,
                                                                            s,
                                                                            r,
                                                                            {
                                                                                isWaveAgentEnabled:
                                                                                    o,
                                                                            } =
                                                                                t,
                                                                            d =
                                                                                {
                                                                                    loadingState:
                                                                                        p.RESOLVE,
                                                                                    id: e.id,
                                                                                    type: void 0,
                                                                                    meta:
                                                                                        ((a =
                                                                                            e),
                                                                                        (0,
                                                                                        b.wg)(
                                                                                            {
                                                                                                title: a.title,
                                                                                                viewAllActionLink:
                                                                                                    a.viewAllUrl,
                                                                                                showPolicy:
                                                                                                    ea
                                                                                                        .E
                                                                                                        .SHOW_AND_LOAD,
                                                                                            },
                                                                                        )),
                                                                                    data: void 0,
                                                                                    isNeededToLoad:
                                                                                        !1,
                                                                                    isLoading:
                                                                                        !1,
                                                                                    isLoaded:
                                                                                        !0,
                                                                                    isRejected:
                                                                                        !1,
                                                                                    isVisible:
                                                                                        !0,
                                                                                    isNotFound:
                                                                                        !1,
                                                                                    hasSentAnalyticsOnLoaded:
                                                                                        !1,
                                                                                    objectsCount:
                                                                                        e
                                                                                            .entities
                                                                                            .length,
                                                                                    setHasSentAnalyticsOnLoaded:
                                                                                        () => {},
                                                                                };
                                                                        switch (
                                                                            e.type
                                                                        ) {
                                                                            case i.RADIO: {
                                                                                let t,
                                                                                    a =
                                                                                        o
                                                                                            ? l
                                                                                                  .t
                                                                                                  .EDITORIAL_WAVES_AGENT
                                                                                            : l
                                                                                                  .t
                                                                                                  .EDITORIAL_WAVES;
                                                                                if (
                                                                                    (t =
                                                                                        e.entities)[0] &&
                                                                                    "data" in
                                                                                        t[0] &&
                                                                                    "object" ==
                                                                                        typeof t[0]
                                                                                            .data &&
                                                                                    t[0]
                                                                                        .data &&
                                                                                    "data" in
                                                                                        t[0]
                                                                                            .data
                                                                                ) {
                                                                                    let t;
                                                                                    return (0,
                                                                                    b.wg)(
                                                                                        {
                                                                                            ...d,
                                                                                            type: a,
                                                                                            data:
                                                                                                ((t =
                                                                                                    e.entities),
                                                                                                (0,
                                                                                                b.wg)(
                                                                                                    {
                                                                                                        items: t.map(
                                                                                                            (
                                                                                                                e,
                                                                                                            ) => {
                                                                                                                var t,
                                                                                                                    a,
                                                                                                                    i,
                                                                                                                    l,
                                                                                                                    s,
                                                                                                                    r;
                                                                                                                let o =
                                                                                                                    (
                                                                                                                        null ==
                                                                                                                            (i =
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .data) ||
                                                                                                                        null ==
                                                                                                                            (a =
                                                                                                                                i.station) ||
                                                                                                                        null ==
                                                                                                                            (t =
                                                                                                                                a.icon)
                                                                                                                            ? void 0
                                                                                                                            : t.backgroundColor
                                                                                                                    )
                                                                                                                        ? (0,
                                                                                                                          _.ye)(
                                                                                                                              x
                                                                                                                                  .Sxu
                                                                                                                                  .Dark,
                                                                                                                              e
                                                                                                                                  .data
                                                                                                                                  .data
                                                                                                                                  .station
                                                                                                                                  .icon
                                                                                                                                  .backgroundColor,
                                                                                                                          )
                                                                                                                        : void 0;
                                                                                                                return (0,
                                                                                                                b.wg)(
                                                                                                                    {
                                                                                                                        title:
                                                                                                                            null ==
                                                                                                                                (s =
                                                                                                                                    e
                                                                                                                                        .data
                                                                                                                                        .data) ||
                                                                                                                            null ==
                                                                                                                                (l =
                                                                                                                                    s.station)
                                                                                                                                ? void 0
                                                                                                                                : l.name,
                                                                                                                        backgroundImageUrl:
                                                                                                                            "avatars.mds.yandex.net/get-music-misc/34161/custom-wave-default-waves-background.image/%%",
                                                                                                                        seeds: [
                                                                                                                            null !=
                                                                                                                            (r =
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .blockEntityDataId)
                                                                                                                                ? r
                                                                                                                                : "",
                                                                                                                        ],
                                                                                                                        colors: {
                                                                                                                            average:
                                                                                                                                o,
                                                                                                                        },
                                                                                                                        agent: (0,
                                                                                                                        ei.KU)(
                                                                                                                            e
                                                                                                                                .data
                                                                                                                                .data
                                                                                                                                .agent,
                                                                                                                        ),
                                                                                                                    },
                                                                                                                );
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                )),
                                                                                        },
                                                                                    );
                                                                                }
                                                                                return (0,
                                                                                b.wg)(
                                                                                    {
                                                                                        ...d,
                                                                                        type: a,
                                                                                    },
                                                                                );
                                                                            }
                                                                            case i.PROMOTIONS:
                                                                                if (
                                                                                    (s =
                                                                                        e.entities) &&
                                                                                    s[0] &&
                                                                                    "promoId" in
                                                                                        s[0]
                                                                                            .data
                                                                                ) {
                                                                                    let t;
                                                                                    return (0,
                                                                                    b.wg)(
                                                                                        {
                                                                                            ...d,
                                                                                            type: l
                                                                                                .t
                                                                                                .PROMOTIONS,
                                                                                            data:
                                                                                                ((t =
                                                                                                    e.entities),
                                                                                                (0,
                                                                                                b.wg)(
                                                                                                    {
                                                                                                        items: t.map(
                                                                                                            (
                                                                                                                e,
                                                                                                            ) => {
                                                                                                                var t,
                                                                                                                    a,
                                                                                                                    i,
                                                                                                                    l,
                                                                                                                    s;
                                                                                                                return (0,
                                                                                                                b.wg)(
                                                                                                                    {
                                                                                                                        featureId:
                                                                                                                            null !=
                                                                                                                            (t =
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .promoId)
                                                                                                                                ? t
                                                                                                                                : "",
                                                                                                                        title:
                                                                                                                            null !=
                                                                                                                            (a =
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .title)
                                                                                                                                ? a
                                                                                                                                : "",
                                                                                                                        subtitle:
                                                                                                                            null !=
                                                                                                                            (i =
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .subtitle)
                                                                                                                                ? i
                                                                                                                                : "",
                                                                                                                        imageUrl:
                                                                                                                            null !=
                                                                                                                            (l =
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .image)
                                                                                                                                ? l
                                                                                                                                : "",
                                                                                                                        weblink:
                                                                                                                            null !=
                                                                                                                            (s =
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .url)
                                                                                                                                ? s
                                                                                                                                : "",
                                                                                                                    },
                                                                                                                );
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                )),
                                                                                        },
                                                                                    );
                                                                                }
                                                                                return (0,
                                                                                b.wg)(
                                                                                    {
                                                                                        ...d,
                                                                                        type: l
                                                                                            .t
                                                                                            .PROMOTIONS,
                                                                                    },
                                                                                );
                                                                            case i.EDITORIAL_PLAYLISTS:
                                                                                if (
                                                                                    (r =
                                                                                        e.entities) &&
                                                                                    r[0] &&
                                                                                    "artists" in
                                                                                        r[0]
                                                                                            .data
                                                                                ) {
                                                                                    let t;
                                                                                    return (0,
                                                                                    b.wg)(
                                                                                        {
                                                                                            ...d,
                                                                                            type: l
                                                                                                .t
                                                                                                .NON_MUSIC_EDITORIAL_COMPILATION,
                                                                                            data:
                                                                                                ((t =
                                                                                                    e.entities),
                                                                                                (0,
                                                                                                b.wg)(
                                                                                                    {
                                                                                                        items: t.map(
                                                                                                            (
                                                                                                                e,
                                                                                                            ) => {
                                                                                                                var t,
                                                                                                                    a,
                                                                                                                    i;
                                                                                                                let l =
                                                                                                                        e
                                                                                                                            .data
                                                                                                                            .type &&
                                                                                                                        Object.values(
                                                                                                                            Z._,
                                                                                                                        ).includes(
                                                                                                                            e
                                                                                                                                .data
                                                                                                                                .type,
                                                                                                                        )
                                                                                                                            ? e
                                                                                                                                  .data
                                                                                                                                  .type
                                                                                                                            : void 0,
                                                                                                                    s =
                                                                                                                        !e
                                                                                                                            .data
                                                                                                                            .availableForPremiumUsers &&
                                                                                                                        e.data.availableForOptions.includes(
                                                                                                                            q
                                                                                                                                .E
                                                                                                                                .BOOKMATE,
                                                                                                                        ),
                                                                                                                    r =
                                                                                                                        e
                                                                                                                            .data
                                                                                                                            .disclaimers &&
                                                                                                                        ee(
                                                                                                                            e
                                                                                                                                .data
                                                                                                                                .disclaimers,
                                                                                                                        )
                                                                                                                            ? e
                                                                                                                                  .data
                                                                                                                                  .disclaimers
                                                                                                                            : void 0;
                                                                                                                return (0,
                                                                                                                b.wg)(
                                                                                                                    {
                                                                                                                        type: n
                                                                                                                            ._
                                                                                                                            .NON_MUSIC_ALBUM_ITEM,
                                                                                                                        data: {
                                                                                                                            id: e
                                                                                                                                .data
                                                                                                                                .id,
                                                                                                                            title:
                                                                                                                                null !=
                                                                                                                                (a =
                                                                                                                                    e
                                                                                                                                        .data
                                                                                                                                        .title)
                                                                                                                                    ? a
                                                                                                                                    : "",
                                                                                                                            type: l,
                                                                                                                            likesCount:
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .likesCount,
                                                                                                                            isAvailable:
                                                                                                                                null ==
                                                                                                                                    (i =
                                                                                                                                        e
                                                                                                                                            .data
                                                                                                                                            .available) ||
                                                                                                                                i,
                                                                                                                            coverUri:
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .coverUri,
                                                                                                                            availableForPremiumUsers:
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .availableForPremiumUsers,
                                                                                                                            availableForOptions:
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .availableForOptions,
                                                                                                                            genre: e
                                                                                                                                .data
                                                                                                                                .genre,
                                                                                                                            bestAlbumTracks:
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .bests,
                                                                                                                            bookmateOptionRequired:
                                                                                                                                s,
                                                                                                                            trackCount:
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .trackCount,
                                                                                                                            year: e
                                                                                                                                .data
                                                                                                                                .year,
                                                                                                                            listeningFinished:
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .listeningFinished,
                                                                                                                            disclaimers:
                                                                                                                                r,
                                                                                                                            artists:
                                                                                                                                null ==
                                                                                                                                (t =
                                                                                                                                    e
                                                                                                                                        .data
                                                                                                                                        .artists)
                                                                                                                                    ? void 0
                                                                                                                                    : t.map(
                                                                                                                                          et,
                                                                                                                                      ),
                                                                                                                        },
                                                                                                                    },
                                                                                                                );
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                )),
                                                                                        },
                                                                                    );
                                                                                }
                                                                                if (
                                                                                    J(
                                                                                        e.entities,
                                                                                    )
                                                                                ) {
                                                                                    let t;
                                                                                    return (0,
                                                                                    b.wg)(
                                                                                        {
                                                                                            ...d,
                                                                                            type: l
                                                                                                .t
                                                                                                .NON_MUSIC_EDITORIAL_COMPILATION,
                                                                                            data:
                                                                                                ((t =
                                                                                                    e.entities),
                                                                                                (0,
                                                                                                b.wg)(
                                                                                                    {
                                                                                                        items: t.map(
                                                                                                            (
                                                                                                                e,
                                                                                                            ) => {
                                                                                                                var t,
                                                                                                                    a,
                                                                                                                    i;
                                                                                                                return (0,
                                                                                                                b.wg)(
                                                                                                                    {
                                                                                                                        type: n
                                                                                                                            ._
                                                                                                                            .LIKED_PLAYLIST_ITEM,
                                                                                                                        data: {
                                                                                                                            uuid:
                                                                                                                                null !=
                                                                                                                                (a =
                                                                                                                                    e
                                                                                                                                        .data
                                                                                                                                        .playlistUuid)
                                                                                                                                    ? a
                                                                                                                                    : "",
                                                                                                                            isAvailable:
                                                                                                                                null ==
                                                                                                                                    (i =
                                                                                                                                        e
                                                                                                                                            .data
                                                                                                                                            .available) ||
                                                                                                                                i,
                                                                                                                            uid: e
                                                                                                                                .data
                                                                                                                                .uid,
                                                                                                                            kind: e
                                                                                                                                .data
                                                                                                                                .kind,
                                                                                                                            revision:
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .revision,
                                                                                                                            title: e
                                                                                                                                .data
                                                                                                                                .title,
                                                                                                                            coverUri:
                                                                                                                                null ==
                                                                                                                                (t =
                                                                                                                                    e
                                                                                                                                        .data
                                                                                                                                        .cover)
                                                                                                                                    ? void 0
                                                                                                                                    : t.uri,
                                                                                                                            likesCount:
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .likesCount,
                                                                                                                            tracksCount:
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .trackCount,
                                                                                                                            visibility:
                                                                                                                                e
                                                                                                                                    .data
                                                                                                                                    .visibility,
                                                                                                                        },
                                                                                                                    },
                                                                                                                );
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                )),
                                                                                        },
                                                                                    );
                                                                                }
                                                                                return (0,
                                                                                b.wg)(
                                                                                    {
                                                                                        ...d,
                                                                                        type: l
                                                                                            .t
                                                                                            .NON_MUSIC_EDITORIAL_COMPILATION,
                                                                                    },
                                                                                );
                                                                            case i.PLAYLIST_WITH_TRACKS:
                                                                                if (
                                                                                    J(
                                                                                        e.entities,
                                                                                    ) &&
                                                                                    e
                                                                                        .entities[0]
                                                                                ) {
                                                                                    var c,
                                                                                        m;
                                                                                    return (0,
                                                                                    b.wg)(
                                                                                        {
                                                                                            ...d,
                                                                                            type: l
                                                                                                .t
                                                                                                .OPEN_PLAYLIST,
                                                                                            data:
                                                                                                ((c =
                                                                                                    e
                                                                                                        .entities[0]),
                                                                                                (0,
                                                                                                b.wg)(
                                                                                                    {
                                                                                                        items: c.data.tracks.map(
                                                                                                            (
                                                                                                                e,
                                                                                                            ) => {
                                                                                                                let {
                                                                                                                    track: t,
                                                                                                                } =
                                                                                                                    e;
                                                                                                                return (0,
                                                                                                                _.vU)(
                                                                                                                    t,
                                                                                                                );
                                                                                                            },
                                                                                                        ),
                                                                                                        playlist:
                                                                                                            (0,
                                                                                                            el.jX)(
                                                                                                                c.data,
                                                                                                            ),
                                                                                                        coverUri:
                                                                                                            null ==
                                                                                                            (m =
                                                                                                                c
                                                                                                                    .data
                                                                                                                    .cover)
                                                                                                                ? void 0
                                                                                                                : m.uri,
                                                                                                    },
                                                                                                )),
                                                                                        },
                                                                                    );
                                                                                }
                                                                                return (0,
                                                                                b.wg)(
                                                                                    {
                                                                                        ...d,
                                                                                        type: l
                                                                                            .t
                                                                                            .OPEN_PLAYLIST,
                                                                                    },
                                                                                );
                                                                        }
                                                                    })(e, t),
                                                                ),
                                                        },
                                                    ],
                                                }),
                                                (0, b.wg)(a)
                                            );
                                        })(s, { isWaveAgentEnabled: o });
                                    d &&
                                        ((e.id = s.category),
                                        (e.title = s.title),
                                        (e.meta = (0, b.wg)(d.meta)),
                                        (e.tabs.data = (0, b.wg)(d.tabs.data))),
                                        e.loadingState !== x.GuX.IDLE &&
                                            (e.loadingState = x.GuX.RESOLVE);
                                } catch (t) {
                                    s.error(t),
                                        e.loadingState !== x.GuX.IDLE &&
                                            (e.loadingState = x.GuX.REJECT);
                                }
                            }),
                            getSkeleton: (0, b.L3)(function* (a, i) {
                                let {
                                    landingResource: l,
                                    modelActionsLogger: s,
                                } = (0, b._$)(e);
                                if (e.loadingState !== x.GuX.PENDING)
                                    try {
                                        e.loadingState = x.GuX.PENDING;
                                        let s = yield l.getSkeleton(a),
                                            r = ey(
                                                null == s ? void 0 : s.blocks,
                                            );
                                        r &&
                                            ((e.id = s.id),
                                            (e.title = s.title),
                                            (e.meta = (0, b.wg)(r.meta)),
                                            (e.upperBlocks = (0, b.wg)(
                                                r.upperBlocks,
                                            )),
                                            (e.tabs.data = (0, b.wg)(
                                                r.tabs.data,
                                            )),
                                            yield t.prefetchBlocks(
                                                null == i
                                                    ? void 0
                                                    : i.preloadBlocksCount,
                                            )),
                                            e.loadingState !== x.GuX.IDLE &&
                                                (e.loadingState =
                                                    x.GuX.RESOLVE);
                                    } catch (t) {
                                        s.error(t),
                                            e.loadingState !== x.GuX.IDLE &&
                                                (e.loadingState = x.GuX.REJECT);
                                    }
                            }),
                            getArtistSkeleton: (0, b.L3)(function* (a, i) {
                                let {
                                    artistsResource: l,
                                    modelActionsLogger: s,
                                } = (0, b._$)(e);
                                if (e.loadingState !== x.GuX.PENDING)
                                    try {
                                        e.loadingState = x.GuX.PENDING;
                                        let s = yield l.getSkeleton(a),
                                            r = ey(
                                                null == s ? void 0 : s.blocks,
                                            );
                                        r &&
                                            ((e.id = s.id),
                                            (e.title = s.title),
                                            (e.meta = (0, b.wg)(r.meta)),
                                            (e.upperBlocks = (0, b.wg)(
                                                r.upperBlocks,
                                            )),
                                            void 0 !== r.tabs &&
                                                (e.tabs.data = (0, b.wg)(
                                                    r.tabs.data,
                                                )),
                                            yield t.prefetchBlocks(
                                                null == i
                                                    ? void 0
                                                    : i.preloadBlocksCount,
                                            )),
                                            e.loadingState !== x.GuX.IDLE &&
                                                (e.loadingState =
                                                    x.GuX.RESOLVE);
                                    } catch (t) {
                                        s.error(t),
                                            e.loadingState !== x.GuX.IDLE &&
                                                (e.loadingState = x.GuX.REJECT);
                                    }
                            }),
                            getConcertSkeleton: (0, b.L3)(function* (a, i) {
                                let {
                                    concertsResource: l,
                                    modelActionsLogger: s,
                                } = (0, b._$)(e);
                                if (e.loadingState !== x.GuX.PENDING)
                                    try {
                                        e.loadingState = x.GuX.PENDING;
                                        let s = yield l.getSkeleton(a),
                                            r = ey(
                                                null == s ? void 0 : s.blocks,
                                            );
                                        r &&
                                            ((e.id = s.id),
                                            (e.title = s.title),
                                            (e.meta = (0, b.wg)(r.meta)),
                                            (e.upperBlocks = (0, b.wg)(
                                                r.upperBlocks,
                                            )),
                                            void 0 !== r.tabs &&
                                                (e.tabs.data = (0, b.wg)(
                                                    r.tabs.data,
                                                )),
                                            yield t.prefetchBlocks(
                                                null == i
                                                    ? void 0
                                                    : i.preloadBlocksCount,
                                            )),
                                            e.loadingState !== x.GuX.IDLE &&
                                                (e.loadingState =
                                                    x.GuX.RESOLVE);
                                    } catch (t) {
                                        s.error(t),
                                            e.loadingState !== x.GuX.IDLE &&
                                                (e.loadingState = x.GuX.REJECT);
                                    }
                            }),
                            reset() {
                                (e.loadingState = x.GuX.IDLE),
                                    (e.meta = null),
                                    e.tabs.reset(),
                                    (e.upperBlocks = null);
                            },
                        };
                        return t;
                    });
            a(99570);
            var aI = a(47651),
                ah = a(10633),
                aL = a(86248),
                ay = a(59546),
                aS = a(79899),
                aN = a(78659),
                aE = a(62763),
                aj = a(86790);
        },
        13444: (e) => {
            e.exports = {
                root: "CollectionAlbumsEmpty_root__xtfuI",
                text: "CollectionAlbumsEmpty_text__fRpx_",
            };
        },
        13900: (e) => {
            e.exports = {
                root: "Skeleton_root__ANDaF",
                upperBlocks: "Skeleton_upperBlocks__zI__5",
                tab: "Skeleton_tab__Jn6By",
                tabPanel: "Skeleton_tabPanel__Ke42U",
                tabCarousel: "Skeleton_tabCarousel__E2kLf",
                important: "Skeleton_important__ob12_",
                header: "Skeleton_header__Ir5f4",
                stickyTabs: "Skeleton_stickyTabs__I_uuk",
            };
        },
        14211: (e) => {
            e.exports = {
                root: "SearchHistory_root__0z_bV",
                fallback: "SearchHistory_fallback____oTN",
                button: "SearchHistory_button__LBJeT",
            };
        },
        15709: (e) => {
            e.exports = {
                blocksContainer: "ContinueListen_blocksContainer__tQ80F",
                container: "ContinueListen_container__1oxhK",
                item: "ContinueListen_item__jGg_0",
                item_lastPlayed: "ContinueListen_item_lastPlayed__AkN1T",
                important: "ContinueListen_important__xwCU5",
            };
        },
        19303: (e) => {
            e.exports = {
                root: "Vibes_root__Bk6PF",
                controls: "Vibes_controls__bUp2H",
                header: "Vibes_header__RcW5b",
                important: "Vibes_important__Vew_4",
                tab: "Vibes_tab__uOfqW",
                tabShimmer: "Vibes_tabShimmer__hjehH",
                tabCarousel: "Vibes_tabCarousel__bSvp0",
            };
        },
        21897: (e) => {
            e.exports = { root: "CollectionPlaylistsEmpty_root__KGNv_" };
        },
        22599: (e, t, a) => {
            "use strict";
            a.d(t, { MapBlock: () => C });
            var i = a(33008),
                l = a(97531),
                s = a(73827),
                r = a(93967),
                o = a(42213),
                n = a(52756),
                d = a(77868),
                c = a(79169),
                m = a(18740),
                u = a(66268),
                _ = a(30293),
                g = a(99183),
                b = a.n(g),
                p = a(3825),
                v = a.n(p);
            let A = (0, l.PA)((e) => {
                    let { title: t, colors: a } = e;
                    return (0, i.jsxs)(d.Caption, {
                        size: "m",
                        variant: "span",
                        className: v().station,
                        children: [
                            (0, i.jsx)("div", {
                                className: v().stationColors,
                                children: a.map((e, t) =>
                                    (0, i.jsx)(
                                        "span",
                                        {
                                            className: v().colorSpan,
                                            style: {
                                                "--metro-station-color-line": e,
                                            },
                                        },
                                        t,
                                    ),
                                ),
                            }),
                            t,
                        ],
                    });
                }),
                C = (0, l.PA)((e) => {
                    var t, a, l;
                    let { data: g } = e,
                        { place: p, city: v, address: C, map: T } = g,
                        I = (() => {
                            let { theme: e } = (0, c.DPo)();
                            return (0, u.useCallback)(
                                (t) => {
                                    let a = (0, _.httpsReplacer)(
                                            t.replace("%%", "1300,1000"),
                                        ),
                                        { href: i } = (0, c.uvd)(a, {
                                            query: {
                                                theme: null != e ? e : "",
                                            },
                                        });
                                    return i;
                                },
                                [e],
                            );
                        })(),
                        { formatMessage: h } = (0, s.A)(),
                        { href: L, target: y } = ((e) => {
                            let { theme: t } = (0, c.DPo)();
                            return (0, c.uvd)(null != e ? e : "", {
                                query: { theme: null != t ? t : "" },
                                options: { isExternalLink: !0 },
                            });
                        })(
                            null !=
                                (l =
                                    null == g || null == (t = g.map)
                                        ? void 0
                                        : t.url)
                                ? l
                                : "",
                        ),
                        S = (0, c.NKK)(),
                        { ref: N, intersectionPropertyId: E } = (0, c.nMI)(),
                        j = (0, o.c)(() => {
                            S({ to: r.QT.Link, deepLink: L });
                        });
                    return (0, i.jsxs)("div", {
                        ref: N,
                        "data-intersection-property-id": E,
                        className: b().root,
                        children: [
                            (0, i.jsx)(d.Heading, {
                                size: "m",
                                variant: "h3",
                                className: b().heading,
                                children: p,
                            }),
                            (0, i.jsx)(m.N_, {
                                onClick: j,
                                "aria-label": h({ id: "entity-names.map-url" }),
                                href: L,
                                className: b().linkContainer,
                                target: y,
                                children: (0, i.jsx)(n.Image, {
                                    createUrlReplacer: I,
                                    className: b().mapImage,
                                    alt: p,
                                    fit: "cover",
                                    size: 600,
                                    src: null == T ? void 0 : T.imageUrl,
                                    withAvatarReplace: !0,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: b().addressContainer,
                                children: [
                                    (0, i.jsx)(d.Caption, {
                                        variant: "span",
                                        size: "m",
                                        weight: "medium",
                                        className: b().address,
                                        children: "".concat(v, ", ").concat(C),
                                    }),
                                    (0, i.jsx)("div", {
                                        "aria-label": h({
                                            id: "entity-names.metro-stations",
                                        }),
                                        className: b().metroStations,
                                        children:
                                            null == (a = g.groupedMetroStations)
                                                ? void 0
                                                : a.map((e, t) =>
                                                      (0, i.jsx)(
                                                          A,
                                                          {
                                                              title: e.title,
                                                              colors: e.colors,
                                                          },
                                                          t,
                                                      ),
                                                  ),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
        },
        22873: (e) => {
            e.exports = {
                artistLink: "ArtistPick_artistLink__WYRFP",
                artistsSpoiler: "ArtistPick_artistsSpoiler__HBKka",
                subTitle: "ArtistPick_subTitle__5SJFj",
                text: "ArtistPick_text__sIhNG",
                smallCoverContainer: "ArtistPick_smallCoverContainer__iBgJu",
                cover: "ArtistPick_cover__9utVr",
                smallCover: "ArtistPick_smallCover__6NSnL",
                shimmerCover: "ArtistPick_shimmerCover__HIauy",
            };
        },
        26253: (e) => {
            e.exports = {
                root: "Promotions_root__Osgj2",
                controls: "Promotions_controls__IEqvq",
                item: "Promotions_item__ycc9P",
                important: "Promotions_important__x_kQK",
            };
        },
        27160: (e) => {
            e.exports = {
                root: "VirtualGrid_root__nSEzJ",
                column: "VirtualGrid_column__P8hJp",
                row: "VirtualGrid_row__PL5V_",
            };
        },
        29323: (e) => {
            e.exports = {
                root_withControls:
                    "CollectionAlbumsPresaves_root_withControls__qE_u_",
                controls: "CollectionAlbumsPresaves_controls__8twKX",
                header: "CollectionAlbumsPresaves_header__1flkp",
                important: "CollectionAlbumsPresaves_important__EkdBU",
                tab: "CollectionAlbumsPresaves_tab__V6yvN",
                tabShimmer: "CollectionAlbumsPresaves_tabShimmer__T6w2W",
                tabCarousel: "CollectionAlbumsPresaves_tabCarousel__hobTn",
                tabPanel: "CollectionAlbumsPresaves_tabPanel__ZHz6v",
                carouselEmpty: "CollectionAlbumsPresaves_carouselEmpty__8szhR",
                item: "CollectionAlbumsPresaves_item__to1P9",
            };
        },
        29491: (e) => {
            e.exports = {
                root: "NewReleases_root__4ONiw",
                controls: "NewReleases_controls__zlJZF",
                shimmerImage: "NewReleases_shimmerImage__8IEd_",
                shimmerCard: "NewReleases_shimmerCard__S1gfL",
                item: "NewReleases_item__Gv0iR",
                important: "NewReleases_important__qkt9x",
            };
        },
        30457: (e, t, a) => {
            "use strict";
            a.d(t, { Vf: () => n.MixesGridMixCard, bv: () => o, rc: () => s });
            var i = a(41028),
                l = a(79169);
            let s = (e) =>
                (0, i.wg)({
                    id: e.id,
                    title: e.title,
                    weblink: e.action.weblink,
                    covers: e.covers.map(l.pX4),
                });
            var r = a(59615);
            let o = i.gK.model("MixesGridMixCardItem", {
                id: i.gK.string,
                title: i.gK.string,
                weblink: i.gK.maybeNull(i.gK.string),
                covers: i.gK.maybeNull(i.gK.array(r.$B)),
            });
            var n = a(57114);
        },
        33200: (e) => {
            e.exports = {
                root: "PromotionShimmer_root__Nb8vU",
                cover: "PromotionShimmer_cover__WYwD7",
                meta: "PromotionShimmer_meta__9eRwi",
                heading: "PromotionShimmer_heading__38lLU",
                title: "PromotionShimmer_title__TLj1g",
                subtitle: "PromotionShimmer_subtitle__LS5v_",
            };
        },
        34279: (e) => {
            e.exports = {
                root: "ArtistPopularTracksAndReleases_root__rN5Wk",
                container: "ArtistPopularTracksAndReleases_container__EQIVk",
                popularTracks:
                    "ArtistPopularTracksAndReleases_popularTracks__HEZ73",
                popularTracks_withReleaseBlock:
                    "ArtistPopularTracksAndReleases_popularTracks_withReleaseBlock__WwiJr",
                release: "ArtistPopularTracksAndReleases_release__9NDdR",
                releaseCard:
                    "ArtistPopularTracksAndReleases_releaseCard__uHtao",
            };
        },
        35420: (e, t, a) => {
            "use strict";
            a.d(t, {
                fc: () => o,
                Gd: () => n.MapBlock,
                rI: () => d.ShimmerMapBlock,
                P5: () => i,
            });
            let i = (e) => ({ title: e.title, lineColor: e["line-color"] });
            var l = a(41028);
            let s = l.gK.model("MapUrl", {
                    imageUrl: l.gK.string,
                    url: l.gK.string,
                }),
                r = l.gK.model("MetroStation", {
                    title: l.gK.string,
                    lineColor: l.gK.string,
                }),
                o = l.gK
                    .model("BaseMap", {
                        place: l.gK.string,
                        city: l.gK.string,
                        address: l.gK.string,
                        metroStations: l.gK.maybeNull(l.gK.array(r)),
                        map: l.gK.maybeNull(s),
                    })
                    .views((e) => ({
                        get groupedMetroStations() {
                            if (!e.metroStations) return [];
                            let t = new Map();
                            return (
                                e.metroStations.forEach((e) => {
                                    let a = t.get(e.title);
                                    a || ((a = new Set()), t.set(e.title, a)),
                                        a.add(e.lineColor);
                                }),
                                Array.from(t.entries()).map((e) => {
                                    let [t, a] = e;
                                    return { title: t, colors: Array.from(a) };
                                })
                            );
                        },
                    }));
            var n = a(22599),
                d = a(11753);
        },
        38501: (e) => {
            e.exports = {
                root: "VibesAgent_root__vZxtE",
                controls: "VibesAgent_controls__6jNJF",
                header: "VibesAgent_header__PrZP3",
                important: "VibesAgent_important__5yfOt",
                tab: "VibesAgent_tab__Wwcd_",
                tabShimmer: "VibesAgent_tabShimmer__TnlQU",
                tabCarousel: "VibesAgent_tabCarousel__q__hc",
                item: "VibesAgent_item__UBIWG",
            };
        },
        40699: (e) => {
            e.exports = {
                root: "LikesAndHistory_root__KCuz_",
                carousel: "LikesAndHistory_carousel__579RD",
                carouselItem: "LikesAndHistory_carouselItem__Yq5Xw",
                favoritesCoverContainer:
                    "LikesAndHistory_favoritesCoverContainer__UUIDf",
                favoritesCover: "LikesAndHistory_favoritesCover__Nt7Gm",
                historyIcon: "LikesAndHistory_historyIcon__2FAMu",
                historyIconContainer:
                    "LikesAndHistory_historyIconContainer__KPPbS",
            };
        },
        41776: (e) => {
            e.exports = {
                container: "SkeletonBlock_container__9IxUi",
                important: "SkeletonBlock_important__faY0E",
                container_withContentVisibility:
                    "SkeletonBlock_container_withContentVisibility__QzL5d",
                headerContainer: "SkeletonBlock_headerContainer__fl8EX",
                tracksContainer: "SkeletonBlock_tracksContainer__uF8Tg",
            };
        },
        44609: (e) => {
            e.exports = {
                root: "CollectionClipsEmpty_root__LwgZS",
                text: "CollectionClipsEmpty_text__cZfLW",
            };
        },
        45631: (e) => {
            e.exports = {
                item: "ArtistPopularTracks_item__PsKwP",
                important: "ArtistPopularTracks_important__hdfzU",
            };
        },
        46697: (e) => {
            e.exports = {
                root: "Concert_root__INQJc",
                cover: "Concert_cover__POyDO",
                index: "Concert_index__cPRuN",
                meta: "Concert_meta__s_lsH",
                textContainer: "Concert_textContainer__50dZP",
                date: "Concert_date__3xwWB",
                info: "Concert_info__viObm",
                concertTitle: "Concert_concertTitle__kngHo",
                description: "Concert_description__JTZtZ",
                descriptionContainer: "Concert_descriptionContainer__cPF3d",
                cashback: "Concert_cashback__b7feO",
                title: "Concert_title__tX2Mj",
            };
        },
        47651: (e, t, a) => {
            "use strict";
            a.d(t, { MixesGridBlock: () => g });
            var i = a(33008),
                l = a(85896),
                s = a(66268),
                r = a(93967),
                o = a(30293),
                n = a(30457),
                d = a(79169),
                c = a(18740),
                m = a(54603),
                u = a.n(m);
            let _ = (e) => {
                    var t;
                    let {
                            forwardRef: a,
                            headerClassName: m,
                            meta: _,
                            data: g,
                            headingVariant: b,
                            isShimmerActive: p,
                            containerClassName: v,
                            isShimmerVisible: A,
                            className: C,
                            ...T
                        } = e,
                        I = (0, s.useId)(),
                        h = (0, s.useMemo)(() => {
                            if (A) {
                                var e;
                                return (0, i.jsx)(c.eI, {
                                    itemClassName: (0, l.$)(
                                        u().item,
                                        u().important,
                                        u().shimmerWithSubcover,
                                    ),
                                    isActive: p,
                                    centered: !0,
                                    withInfo: !0,
                                    withSubcover: !0,
                                    count:
                                        null == (e = _.source)
                                            ? void 0
                                            : e.count,
                                });
                            }
                            return null == g
                                ? void 0
                                : g.items.map((e, t) =>
                                      (0, i.jsx)(
                                          d.Bki,
                                          {
                                              objectType: r.ky.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: g.items.length,
                                              children: (0, i.jsx)(
                                                  n.Vf,
                                                  {
                                                      linkClassName: (0, l.$)(
                                                          u().item,
                                                          u().important,
                                                      ),
                                                      title: e.title,
                                                      weblink: e.weblink,
                                                      covers: e.covers,
                                                      captionVariant: "h3",
                                                  },
                                                  e.id,
                                              ),
                                          },
                                          e.id,
                                      ),
                                  );
                        }, [
                            p,
                            A,
                            null == g ? void 0 : g.items,
                            null == (t = _.source) ? void 0 : t.count,
                        ]);
                    return (0, i.jsxs)("section", {
                        ref: a,
                        className: C,
                        ...(0, o.getDataAttrFromProps)(T),
                        children: [
                            (0, i.jsx)(c.Tw, {
                                className: (0, l.$)(u().header, m),
                                labeledForId: I,
                                title: _.title,
                                viewAllActionLink: _.viewAllActionLink,
                                headingVariant: b,
                            }),
                            (0, i.jsx)("div", {
                                className: (0, l.$)(u().mixesGrid, v),
                                children: h,
                            }),
                        ],
                    });
                },
                g = (0, s.forwardRef)((e, t) =>
                    (0, i.jsx)(_, { forwardRef: t, ...e }),
                );
        },
        51495: (e) => {
            e.exports = {
                cover: "FamiliarYou_cover__nY4e8",
                shimmerCover: "FamiliarYou_shimmerCover__HFgkx",
            };
        },
        54603: (e) => {
            e.exports = {
                shimmerWithSubcover:
                    "MixesGridBlock_shimmerWithSubcover__3EtzK",
                header: "MixesGridBlock_header__wz5KI",
                mixesGrid: "MixesGridBlock_mixesGrid__LSeyw",
                item: "MixesGridBlock_item__TVzNE",
                important: "MixesGridBlock_important__DQE7T",
            };
        },
        55383: (e) => {
            e.exports = {
                root: "CollectionAlbumsPresavesEmpty_root__3w6b7",
                root_oneEmptyTab:
                    "CollectionAlbumsPresavesEmpty_root_oneEmptyTab__UIaL3",
                root_twoEmptyTabs:
                    "CollectionAlbumsPresavesEmpty_root_twoEmptyTabs__4Ct2l",
            };
        },
        55689: (e, t, a) => {
            "use strict";
            a.d(t, { NZ: () => o.MixCard, f: () => r, Ju: () => l });
            var i = a(41028);
            let l = (e) => {
                var t;
                return {
                    id: e.id,
                    title: e.title,
                    weblink: null != (t = e.action.weblink) ? t : "",
                    covers: (0, i.wg)(e.covers || []),
                    imagesLayoutType: e.style.imagesLayoutType,
                };
            };
            var s = a(75460);
            let r = i.gK.model("MixItem", {
                id: i.gK.string,
                title: i.gK.string,
                weblink: i.gK.string,
                covers: i.gK.maybe(i.gK.array(i.gK.string)),
                imagesLayoutType: i.gK.enumeration(Object.values(s.R)),
            });
            var o = a(58893);
        },
        57114: (e, t, a) => {
            "use strict";
            a.d(t, { MixesGridMixCard: () => g });
            var i = a(33008),
                l = a(85896),
                s = a(97531),
                r = a(66268),
                o = a(18064),
                n = a(52756),
                d = a(54487),
                c = a(77868),
                m = a(18740),
                u = a(89286),
                _ = a.n(u);
            let g = (0, s.PA)((e) => {
                var t;
                let {
                        className: a,
                        title: s,
                        weblink: u,
                        linkClassName: g,
                        covers: b,
                        coverSize: p = 100,
                        captionVariant: v = "div",
                    } = e,
                    A = (0, r.useMemo)(() => {
                        var e;
                        if (null == b || null == (e = b[0]) ? void 0 : e.color)
                            return {
                                "--subcover-background-color": b[0].color,
                            };
                    }, [b]);
                return (0, i.jsx)(m.N_, {
                    href: u,
                    className: (0, l.$)(_().link, g),
                    ...(0, o.Am)(o.OA.mix.MIX_CARD),
                    children: (0, i.jsxs)(d.Paper, {
                        radius: "m",
                        style: A,
                        className: (0, l.$)(_().root, a),
                        children: [
                            (0, i.jsxs)("div", {
                                className: _().plate,
                                ...(0, o.Am)(o.OA.mix.MIX_CARD_PLATE),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: _().subcover,
                                        ...(0, o.Am)(
                                            o.OA.mix.MIX_CARD_SUBCOVER,
                                        ),
                                    }),
                                    (0, i.jsx)(n.Image, {
                                        src:
                                            null == b || null == (t = b[0])
                                                ? void 0
                                                : t.uri,
                                        withAvatarReplace: !0,
                                        fit: "contain",
                                        className: _().cover,
                                        size: p,
                                        ...(0, o.Am)(o.OA.mix.MIX_CARD_COVER),
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: _().header,
                                children: (0, i.jsx)(c.Caption, {
                                    variant: v,
                                    size: "xs",
                                    weight: "bold",
                                    className: _().title,
                                    lineClamp: 2,
                                    ...(0, o.Am)(o.OA.mix.MIX_CARD_HEADER),
                                    children: s,
                                }),
                            }),
                        ],
                    }),
                });
            });
        },
        58059: (e) => {
            e.exports = {
                root_withControls:
                    "CollectionPlaylists_root_withControls__YV7o_",
                controls: "CollectionPlaylists_controls___7XSv",
                header: "CollectionPlaylists_header__EDtBS",
                important: "CollectionPlaylists_important__oumcA",
                tab: "CollectionPlaylists_tab__PppbA",
                tabShimmer: "CollectionPlaylists_tabShimmer__U_ZFn",
                tabCarousel: "CollectionPlaylists_tabCarousel__hWuL_",
                tabPanel: "CollectionPlaylists_tabPanel__wSwRR",
                carouselEmpty: "CollectionPlaylists_carouselEmpty__SVn6E",
                createPlaylistCard:
                    "CollectionPlaylists_createPlaylistCard__1cMca",
                item: "CollectionPlaylists_item__YeviY",
            };
        },
        58893: (e, t, a) => {
            "use strict";
            a.d(t, { MixCard: () => g });
            var i = a(33008),
                l = a(85896),
                s = a(97531),
                r = a(18064),
                o = a(75460),
                n = a(52756),
                d = a(54487),
                c = a(77868),
                m = a(18740),
                u = a(68937),
                _ = a.n(u);
            let g = (0, s.PA)((e) => {
                let {
                    className: t,
                    title: a,
                    weblink: s,
                    covers: u = [],
                    coverSize: g = 100,
                    imagesLayoutType: b,
                    headingVariant: p = "h3",
                } = e;
                return (0, i.jsx)(m.N_, {
                    href: s,
                    ...(0, r.Am)(r.OA.mix.MIX_CARD),
                    children: (0, i.jsxs)(d.Paper, {
                        className: (0, l.$)(_().root, t),
                        radius: "l",
                        children: [
                            (0, i.jsx)("div", {
                                className: _().header,
                                children: (0, i.jsx)(c.Caption, {
                                    variant: p,
                                    size: "xs",
                                    weight: "bold",
                                    className: _().title,
                                    lineClamp: 2,
                                    ...(0, r.Am)(r.OA.mix.MIX_CARD_HEADER),
                                    children: a,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: (0, l.$)(_().covers, {
                                    [_().covers_radial]: b === o.R.RADIAL,
                                    [_().covers_stack]: b === o.R.STACK,
                                }),
                                ...(0, r.Am)(r.OA.mix.MIX_CARD_COVERS),
                                children: [
                                    (0, i.jsx)(n.Image, {
                                        src: u[2],
                                        withAvatarReplace: !0,
                                        fit: "contain",
                                        className: _().cover,
                                        size: g,
                                        ...(0, r.Am)(
                                            r.OA.mix.MIX_CARD_COVER_IMAGE_3,
                                        ),
                                    }),
                                    (0, i.jsx)(n.Image, {
                                        src: u[1],
                                        withAvatarReplace: !0,
                                        fit: "contain",
                                        className: _().cover,
                                        size: g,
                                        ...(0, r.Am)(
                                            r.OA.mix.MIX_CARD_COVER_IMAGE_2,
                                        ),
                                    }),
                                    (0, i.jsx)(n.Image, {
                                        src: u[0],
                                        withAvatarReplace: !0,
                                        fit: "contain",
                                        className: _().cover,
                                        size: g,
                                        ...(0, r.Am)(
                                            r.OA.mix.MIX_CARD_COVER_IMAGE_1,
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        59546: (e, t, a) => {
            "use strict";
            a.d(t, { Promotions: () => y });
            var i = a(33008),
                l = a(85896),
                s = a(66268),
                r = a(93967),
                o = a(30293),
                n = a(95567),
                d = a(79169),
                c = a(18740),
                m = a(52756),
                u = a(54487),
                _ = a(77868),
                g = a(7183),
                b = a.n(g);
            let p = (e) => {
                let { promotion: t } = e,
                    { ref: a, intersectionPropertyId: o } = (0, d.nMI)(),
                    n = (0, d.NKK)(),
                    g = (0, s.useCallback)(() => {
                        n({ to: r.QT.Link });
                    }, [n]);
                return (0, i.jsxs)("div", {
                    className: (0, l.$)(b().root, b().card),
                    ref: a,
                    "data-intersection-property-id": o,
                    children: [
                        (0, i.jsx)(c.N_, {
                            className: b().coverLink,
                            href: t.weblink,
                            onClick: g,
                            children: (0, i.jsx)(u.Paper, {
                                className: b().cover,
                                radius: "m",
                                withShadow: !0,
                                children: (0, i.jsx)(m.Image, {
                                    className: b().image,
                                    src: t.imageUrl,
                                    alt: t.title,
                                    withAvatarReplace: !0,
                                    withAspectRatio: !0,
                                    size: 400,
                                    fit: "cover",
                                }),
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: b().meta,
                            children: [
                                (0, i.jsx)(c.N_, {
                                    className: b().titleLink,
                                    href: t.weblink,
                                    onClick: g,
                                    children: (0, i.jsx)(_.Caption, {
                                        variant: "div",
                                        lineClamp: 1,
                                        type: "entity",
                                        size: "s",
                                        weight: "medium",
                                        children: t.title,
                                    }),
                                }),
                                (0, i.jsx)(_.Caption, {
                                    className: b().subtitle,
                                    variant: "div",
                                    lineClamp: 1,
                                    type: "entity",
                                    size: "s",
                                    weight: "medium",
                                    children: t.subtitle,
                                }),
                            ],
                        }),
                    ],
                });
            };
            var v = a(26253),
                A = a.n(v),
                C = a(91342),
                T = a(33200),
                I = a.n(T);
            let h = (e) => {
                    let { isActive: t, withHeadingShimmer: a } = e;
                    return (0, i.jsxs)("div", {
                        className: I().root,
                        children: [
                            (0, i.jsx)(C.Shimmer, {
                                isActive: t,
                                className: I().cover,
                                radius: "l",
                            }),
                            (0, i.jsxs)("div", {
                                className: I().meta,
                                children: [
                                    a &&
                                        (0, i.jsx)(C.Shimmer, {
                                            isActive: t,
                                            className: I().heading,
                                            radius: "s",
                                        }),
                                    (0, i.jsx)(C.Shimmer, {
                                        isActive: t,
                                        className: I().title,
                                        radius: "s",
                                    }),
                                    (0, i.jsx)(C.Shimmer, {
                                        isActive: t,
                                        className: I().subtitle,
                                        radius: "s",
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                L = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: m,
                            data: u,
                            meta: _,
                            containerClassName: g,
                            headerClassName: b,
                            headingVariant: v,
                            className: C,
                            ...T
                        } = e,
                        I = (0, s.useId)(),
                        L = (0, s.useRef)(null),
                        y = (0, s.useMemo)(() => {
                            if (a)
                                return Array.from({ length: 6 }, (e, t) =>
                                    (0, i.jsx)(
                                        h,
                                        { isActive: m, withHeadingShimmer: !0 },
                                        t,
                                    ),
                                );
                            return null == u
                                ? void 0
                                : u.items.map((e, t) =>
                                      (0, i.jsx)(
                                          d.Bki,
                                          {
                                              objectType: r.ky.Feature,
                                              objectId: e.featureId,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: u.items.length,
                                              children: (0, i.jsx)(p, {
                                                  promotion: e,
                                              }),
                                          },
                                          e.featureId,
                                      ),
                                  );
                        }, [null == u ? void 0 : u.items, m, a]);
                    return (0, i.jsxs)("section", {
                        className: (0, l.$)(A().root, C),
                        ref: t,
                        ...(0, o.getDataAttrFromProps)(T),
                        children: [
                            (0, i.jsx)(c.Tw, {
                                className: b,
                                labeledForId: I,
                                title: _.title,
                                controls: (0, i.jsx)(c.X9, {
                                    className: A().controls,
                                    carouselRef: L,
                                }),
                                headingVariant: v,
                            }),
                            (0, i.jsx)(n.Carousel, {
                                className: g,
                                ref: L,
                                itemClassName: (0, l.$)(
                                    A().item,
                                    A().important,
                                ),
                                "aria-labelledby": I,
                                children: y,
                            }),
                        ],
                    });
                },
                y = (0, s.forwardRef)((e, t) =>
                    (0, i.jsx)(L, { forwardRef: t, ...e }),
                );
        },
        61579: (e) => {
            e.exports = { root: "FamiliarYouAndArtistPick_root___Ihxe" };
        },
        62763: (e, t, a) => {
            "use strict";
            a.d(t, { Skeleton: () => iW });
            var i,
                l = a(33008),
                s = a(85896),
                r = a(97531),
                o = a(17846),
                n = a(66268),
                d = a(18064),
                c = a(42213),
                m = a(32436),
                u = a(21741),
                _ = a(79169),
                g = a(18740),
                b = a(70946),
                p = a(65599),
                v = a(42314),
                A = a(41776),
                C = a.n(A),
                T = a(90848),
                I = a(93967),
                h = a(73827),
                L = a(96560),
                y = a(48509);
            !(function (e) {
                (e.TOP = "top"), (e.CENTER = "center");
            })(i || (i = {}));
            var S = a(54487),
                N = a(77868),
                E = a(95592),
                j = a(70879),
                k = a(63292),
                x = a.n(k);
            let R = (0, r.PA)((e) => {
                let { promo: t } = e,
                    { formatMessage: a } = (0, h.A)(),
                    { ref: r, intersectionPropertyId: o } = (0, _.nMI)(),
                    n = (0, _.NKK)(),
                    d = (0, _.ZpR)(t.albumUrl),
                    m = (0, E.cp)({ album: t.album, callback: d }),
                    u = (0, _.brA)(),
                    b = (0, _.PT7)(),
                    { from: p } = (0, _.fyy)({
                        contextId: t.album.id,
                        contextType: y.K.Album,
                    }),
                    { isPlaying: v, togglePlay: A } = (0, _.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: y.K.Album,
                                meta: { id: t.album.id },
                                from: p,
                                utmLink: (0, _.ZQO)(t.reportingProperties),
                            },
                            loadContextMeta: !0,
                        },
                    }),
                    C = (0, c.c)((e) => {
                        t.setClicked(), n({ to: I.QT.AlbumScreen }), m(e);
                    }),
                    T = (0, c.c)(() => {
                        t.setClicked(), A();
                    }),
                    k = (0, E.cp)({ album: t.album, callback: T }),
                    R = (0, c.c)(() => {
                        b() || (k(), u(!v));
                    }),
                    P = a(
                        { id: "entity-names.album-name" },
                        { albumName: t.album.title },
                    ),
                    f = t.coverContentMode === i.TOP;
                return (0, l.jsxs)("div", {
                    className: x().root,
                    ref: r,
                    "data-intersection-property-id": o,
                    children: [
                        (0, l.jsxs)(S.Paper, {
                            className: x().artistCover,
                            radius: "m",
                            withShadow: !0,
                            children: [
                                (0, l.jsx)(g.N_, {
                                    className: x().artistLink,
                                    href: t.albumUrl,
                                    onClick: C,
                                    "aria-label": P,
                                    children: (0, l.jsx)(g.BW, {
                                        className: (0, s.$)(x().artistImage, {
                                            [x().artistImage_withTopPosition]:
                                                f,
                                        }),
                                        src: t.cover.uri,
                                        withAvatarReplace: !0,
                                        withAspectRatio: !0,
                                        size: 600,
                                        fit: "cover",
                                        "aria-hidden": !0,
                                    }),
                                }),
                                (0, l.jsx)(S.Paper, {
                                    className: x().albumCover,
                                    radius: "xs",
                                    children: (0, l.jsx)(g.N_, {
                                        className: x().albumLink,
                                        href: t.albumUrl,
                                        onClick: C,
                                        "aria-label": P,
                                        children: (0, l.jsx)(g.BW, {
                                            className: x().albumImage,
                                            src: t.album.coverUri,
                                            withAvatarReplace: !0,
                                            size: 300,
                                            fit: "cover",
                                            "aria-hidden": !0,
                                        }),
                                    }),
                                }),
                                (0, l.jsx)(g.DM, {
                                    className: x().button,
                                    withRipple: !1,
                                    withHover: !1,
                                    buttonVariant: "default",
                                    radius: "xxxl",
                                    size: "default",
                                    color: "secondary",
                                    iconSize: "xxs",
                                    isPlaying: v,
                                    onClick: R,
                                    iconClassName: x().buttonIcon,
                                    disabled: !t.album.isAvailable,
                                    children: (0, l.jsx)(N.Caption, {
                                        className: x().buttonText,
                                        variant: "span",
                                        type: "controls",
                                        size: "m",
                                        weight: "medium",
                                        children: (0, l.jsx)(L.A, {
                                            id: "player-actions.listen",
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: x().meta,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: x().titleContainer,
                                    children: [
                                        (0, l.jsx)(N.Caption, {
                                            className: x().title,
                                            variant: "div",
                                            lineClamp: 1,
                                            type: "entity",
                                            size: "s",
                                            weight: "medium",
                                            children: (0, l.jsx)(g.N_, {
                                                className: x().titleLink,
                                                href: t.albumUrl,
                                                onClick: C,
                                                children: t.album.title,
                                            }),
                                        }),
                                        t.album.explicitDisclaimer &&
                                            (0, l.jsx)(g.Nq, {
                                                getDescriptionTexts:
                                                    t.album.getDescriptionTexts,
                                                variant:
                                                    t.album.explicitDisclaimer,
                                                size: "xxxs",
                                            }),
                                    ],
                                }),
                                (0, l.jsx)(j.iQ, {
                                    className: x().artists,
                                    linkClassName: x().artistsLink,
                                    artists: t.artists,
                                    lineClamp: 1,
                                    captionSize: "s",
                                }),
                            ],
                        }),
                    ],
                });
            });
            var P = a(30293),
                f = a(95567),
                w = a(63547),
                K = {
                    1964: (e) => {
                        e.exports = w;
                    },
                },
                O = {},
                M = {};
            (() => {
                Object.defineProperty(M, "X", { value: !0 }), (M.q = void 0);
                var e = (function e(t) {
                    var a = O[t];
                    if (void 0 !== a) return a.exports;
                    var i = (O[t] = { exports: {} });
                    return K[t](i, i.exports, e), i.exports;
                })(1964);
                Object.defineProperty(M, "q", {
                    enumerable: !0,
                    get: function () {
                        return e.useMergeRefs;
                    },
                });
            })(),
                M.X;
            var D = M.q;
            let B = (e) => {
                let t,
                    { callback: a, visibleTime: i, threshold: l } = e;
                return (0, m.Gv)(
                    (e, l) => {
                        e.isIntersecting &&
                            (t = setTimeout(() => {
                                a(), l.disconnect();
                            }, i)),
                            e.isIntersecting || clearTimeout(t);
                    },
                    { threshold: l },
                );
            };
            var V = a(3838),
                U = a.n(V);
            let Y = (e) => {
                    let {
                            forwardRef: t,
                            isLoaded: a,
                            setOutdated: i,
                            headerClassName: r,
                            containerClassName: o,
                            data: d,
                            meta: c,
                            headingVariant: m,
                            className: u,
                            children: _,
                            ...b
                        } = e,
                        { intersectionPropertyId: p, ref: v } = ((e) => {
                            let {
                                    forwardedRef: t,
                                    isLoaded: a,
                                    data: i,
                                    setOutdated: l,
                                } = e,
                                { report: s, reporting: r } =
                                    null != i ? i : {},
                                { ref: o, intersectionPropertyId: d } = ((
                                    e,
                                ) => {
                                    let { params: t, isLoaded: a } = e,
                                        i = (0, n.useRef)(null),
                                        l = (0, n.useId)(),
                                        s = (0, n.useMemo)(() => {
                                            if (a) return t.map(B);
                                        }, [a, t]);
                                    return (
                                        (0, n.useEffect)(
                                            () => (
                                                null == s ||
                                                    s.forEach((e) => {
                                                        i.current &&
                                                            e.observe(
                                                                i.current,
                                                            );
                                                    }),
                                                () => {
                                                    null == s ||
                                                        s.forEach((e) => {
                                                            e.disconnect();
                                                        });
                                                }
                                            ),
                                            [s],
                                        ),
                                        { intersectionPropertyId: l, ref: i }
                                    );
                                })({
                                    isLoaded: a,
                                    params: (0, n.useMemo)(() => {
                                        var e, t, a;
                                        return [
                                            {
                                                threshold: 0,
                                                visibleTime:
                                                    null !=
                                                    (e =
                                                        null == r
                                                            ? void 0
                                                            : r.blockRender
                                                                  .timeMs)
                                                        ? e
                                                        : 0,
                                                callback: () => {
                                                    let e =
                                                        null == r
                                                            ? void 0
                                                            : r.blockRender.url;
                                                    e && (null == s || s(e));
                                                },
                                            },
                                            {
                                                threshold: 0.5,
                                                visibleTime:
                                                    null !=
                                                    (t =
                                                        null == r
                                                            ? void 0
                                                            : r.blockImpression
                                                                  .timeMs)
                                                        ? t
                                                        : 2100,
                                                callback: () => {
                                                    let e =
                                                        null == r
                                                            ? void 0
                                                            : r.blockImpression
                                                                  .url;
                                                    e && (null == s || s(e)),
                                                        l();
                                                },
                                            },
                                            {
                                                threshold: 0,
                                                visibleTime:
                                                    null !=
                                                    (a =
                                                        null == r
                                                            ? void 0
                                                            : r.adImpressions
                                                                  .timeMs)
                                                        ? a
                                                        : 2100,
                                                callback: () => {
                                                    let e =
                                                        null == r
                                                            ? void 0
                                                            : r.adImpressions
                                                                  .url;
                                                    e && (null == s || s(e));
                                                },
                                            },
                                        ];
                                    }, [
                                        s,
                                        null == r
                                            ? void 0
                                            : r.adImpressions.timeMs,
                                        null == r
                                            ? void 0
                                            : r.adImpressions.url,
                                        null == r
                                            ? void 0
                                            : r.blockImpression.timeMs,
                                        null == r
                                            ? void 0
                                            : r.blockImpression.url,
                                        null == r
                                            ? void 0
                                            : r.blockRender.timeMs,
                                        null == r ? void 0 : r.blockRender.url,
                                        l,
                                    ]),
                                });
                            return {
                                intersectionPropertyId: d,
                                ref: D([o, t]),
                            };
                        })({
                            forwardedRef: t,
                            data: d,
                            isLoaded: a,
                            setOutdated: i,
                        }),
                        A = (0, n.useRef)(null);
                    return (0, l.jsxs)("section", {
                        className: (0, s.$)(U().root, u),
                        ref: v,
                        "data-intersection-property-id": p,
                        ...(0, P.getDataAttrFromProps)(b),
                        children: [
                            (0, l.jsx)(g.Tw, {
                                className: r,
                                title: c.title,
                                controls: (0, l.jsx)(g.X9, {
                                    className: U().controls,
                                    carouselRef: A,
                                }),
                                headingVariant: m,
                            }),
                            (0, l.jsx)(f.Carousel, {
                                className: o,
                                ref: A,
                                itemClassName: (0, s.$)(
                                    U().item,
                                    U().important,
                                ),
                                children: _,
                            }),
                        ],
                    });
                },
                G = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(Y, { forwardRef: t, ...e }),
                ),
                W = (e) => {
                    let { forwardRef: t, data: a, ...i } = e;
                    return (0, l.jsx)(G, {
                        ref: t,
                        data: a,
                        ...i,
                        children:
                            null == a
                                ? void 0
                                : a.items.map((e, t) =>
                                      (0, l.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Album,
                                              objectId: String(e.album.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount:
                                                  null == a
                                                      ? void 0
                                                      : a.items.length,
                                              children: (0, l.jsx)(R, {
                                                  promo: e,
                                              }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                X = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(W, { forwardRef: t, ...e }),
                );
            var H = a(88485),
                z = a(90173),
                F = a.n(z);
            let $ = (0, r.PA)((e) => {
                    let {
                            className: t,
                            forwardRef: a,
                            album: i,
                            description: r,
                            trailerButton: o,
                            entityName: d,
                            onClick: m,
                            albumUrl: u,
                            from: b,
                            utmLink: p,
                            coverColor: v,
                            ...A
                        } = e,
                        C = (0, _.ZpR)(u),
                        T = (0, _.PT7)(),
                        L = (0, _.brA)(),
                        { formatMessage: j } = (0, h.A)(),
                        { isPlaying: k, togglePlay: x } = (0, _.Dx4)({
                            playContextParams: {
                                contextData: {
                                    type: y.K.Album,
                                    meta: { id: i.id },
                                    from: b,
                                    utmLink: p,
                                },
                                loadContextMeta: !0,
                            },
                        }),
                        R = (0, c.c)(() => {
                            null == m || m(), x();
                        }),
                        f = (0, E.cp)({ album: i, callback: C }),
                        w = (0, E.cp)({ album: i, callback: R }),
                        K = (0, _.NKK)(),
                        O = (0, c.c)((e) => {
                            (0, H.P)(e, F().ripple),
                                e.stopPropagation(),
                                null == m || m(),
                                K({ to: I.QT.AlbumScreen }),
                                f(e);
                        }),
                        M = (0, c.c)(() => {
                            T() || (w(), L(!k));
                        }),
                        D = (0, n.useMemo)(() => {
                            let e;
                            if (v) {
                                let { h: t, s: a } = (0, _.g8k)(v);
                                e = "hsl("
                                    .concat(t, ", ")
                                    .concat(a, "%, ", 20, "%)");
                            }
                            return {
                                "--new-release-cover-color": e,
                                "--new-release-color":
                                    null == i ? void 0 : i.averageColor,
                            };
                        }, [null == i ? void 0 : i.averageColor, v]),
                        B = d ? "".concat(d, " ").concat(i.title) : i.title;
                    return (0, l.jsxs)(S.Paper, {
                        radius: "l",
                        className: (0, s.$)(F().root, t),
                        ref: a,
                        style: D,
                        ...(0, P.getDataAttrFromProps)(A),
                        children: [
                            (0, l.jsx)(g.N_, {
                                href: u,
                                className: F().paperLink,
                                onClick: O,
                                "aria-label": B,
                            }),
                            (0, l.jsx)(g.BW, {
                                className: F().image,
                                src: i.coverUri,
                                alt: j(
                                    { id: "entity-names.album-name" },
                                    { albumName: i.title },
                                ),
                                size: 100,
                                fit: "cover",
                                withAvatarReplace: !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: F().info,
                                children: [
                                    (0, l.jsx)(N.Caption, {
                                        className: F().title,
                                        variant: "div",
                                        type: "entity",
                                        size: "m",
                                        weight: "medium",
                                        lineClamp: 2,
                                        "aria-label": B,
                                        children: i.title,
                                    }),
                                    r &&
                                        (0, l.jsx)(N.Caption, {
                                            className: F().description,
                                            variant: "div",
                                            type: "entity",
                                            size: "s",
                                            weight: "medium",
                                            lineClamp: 1,
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: F().container,
                                children: [
                                    i.explicitDisclaimer &&
                                        (0, l.jsx)(g.Nq, {
                                            className: F().explicitMark,
                                            containerClassName:
                                                F().explicitMarkContainer,
                                            getDescriptionTexts:
                                                i.getDescriptionTexts,
                                            variant: i.explicitDisclaimer,
                                        }),
                                    o,
                                    (0, l.jsx)(g.DM, {
                                        buttonVariant: "default",
                                        withHover: !1,
                                        className: F().button,
                                        iconClassName: F().buttonIcon,
                                        variant: "filled",
                                        iconSize: "m",
                                        isPlaying: k,
                                        onClick: M,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                J = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)($, { forwardRef: t, ...e }),
                ),
                Z = (0, r.PA)((e) => {
                    let { promo: t } = e,
                        { ref: a, intersectionPropertyId: i } = (0, _.nMI)(),
                        { from: s } = (0, _.fyy)({
                            contextId: t.album.id,
                            contextType: y.K.Album,
                        });
                    return (0, l.jsx)(J, {
                        onClick: t.setClicked,
                        album: t.album,
                        albumUrl: t.albumUrl,
                        utmLink: (0, _.ZQO)(t.reportingProperties),
                        from: s,
                        ref: a,
                        "data-intersection-property-id": i,
                        description: t.album.artistNames,
                    });
                }),
                q = (e) => {
                    let { forwardRef: t, data: a, ...i } = e;
                    return (0, l.jsx)(G, {
                        ref: t,
                        data: a,
                        ...i,
                        children:
                            null == a
                                ? void 0
                                : a.items.map((e, t) =>
                                      (0, l.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Album,
                                              objectId: String(e.album.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount:
                                                  null == a
                                                      ? void 0
                                                      : a.items.length,
                                              children: (0, l.jsx)(Z, {
                                                  promo: e,
                                              }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                Q = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(q, { forwardRef: t, ...e }),
                );
            var ee = a(51551);
            let et = (0, r.PA)((e) => {
                    var t, a, i, s;
                    let {
                            forwardRef: r,
                            isShimmerVisible: o,
                            isShimmerActive: n,
                            containerClassName: d,
                            headerClassName: c,
                            meta: m,
                            data: u,
                            headingVariant: g,
                            className: b,
                            ...p
                        } = e,
                        { artist: v, concert: A } = (0, _.Pjs)(),
                        C =
                            null !=
                            (i = null != (a = v.id) ? a : A.leadArtistId)
                                ? i
                                : "";
                    return (0, l.jsx)(_.Bki, {
                        objectType: I.ky.Shortcut,
                        objectId: String(C),
                        objectPosX: 0,
                        objectPosY: 0,
                        objectsCount:
                            null !=
                            (s =
                                null == u || null == (t = u.items)
                                    ? void 0
                                    : t.length)
                                ? s
                                : 0,
                        children: (0, l.jsx)(ee.BD, {
                            ref: r,
                            artistId: String(C),
                            title: m.title,
                            viewAllActionLink: m.viewAllActionLink,
                            isLoading: o || n,
                            headingVariant: g,
                            className: b,
                            headerClassName: c,
                            containerClassName: d,
                            ...(0, P.getDataAttrFromProps)(p),
                            children:
                                null == u
                                    ? void 0
                                    : u.items.map((e, t) => {
                                          var a, i;
                                          let {
                                              objectPosX: s,
                                              objectPosY: r,
                                              objectsCount: o,
                                          } = (0, _.$tp)({
                                              index: t,
                                              count:
                                                  null !=
                                                  (i =
                                                      null == (a = u.items)
                                                          ? void 0
                                                          : a.length)
                                                      ? i
                                                      : 0,
                                              itemsCountPerColumn: 2,
                                          });
                                          return (0, l.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Concert,
                                                  objectId: String(e.id),
                                                  objectPosX: s,
                                                  objectPosY: r,
                                                  objectsCount: o,
                                                  children: (0, l.jsx)(ee.VN, {
                                                      artistId: String(C),
                                                      concert: e,
                                                      meta: (0, l.jsx)(
                                                          ee.ZH,
                                                          {},
                                                      ),
                                                  }),
                                              },
                                              e.id,
                                          );
                                      }),
                        }),
                    });
                }),
                ea = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(et, { forwardRef: t, ...e }),
                );
            var ei = a(93134),
                el = a(22873),
                es = a.n(el);
            let er = (0, r.PA)((e) => {
                    var t, a, i;
                    let {
                            isShimmerVisible: s,
                            isShimmerActive: r,
                            headerClassName: o,
                            data: n,
                            headingVariant: d,
                        } = e,
                        { ref: c, intersectionPropertyId: m } = (0, _.nMI)(),
                        { playlist: u, artists: b } = n || {},
                        { artist: p } = (0, _.Pjs)(),
                        v = !!(null == (t = p.meta)
                            ? void 0
                            : t.artist.isAvailable),
                        A = null == (a = p.meta) ? void 0 : a.artist.coverUri,
                        C = null == (i = p.meta) ? void 0 : i.artist.name;
                    return (0, l.jsx)(g.Tw, {
                        ref: c,
                        "data-intersection-property-id": m,
                        coverUrl: null == u ? void 0 : u.coverUri,
                        withCover: !0,
                        withDescription: !0,
                        viewAllActionLink: null == u ? void 0 : u.url,
                        title: null == u ? void 0 : u.title,
                        controls: !1,
                        coverContainerClassName: es().cover,
                        shimmerCoverClassName: es().shimmerCover,
                        titleLineClamp: 1,
                        withDescriptionWidthLimit: !1,
                        isShimmerVisible: s,
                        isShimmerActive: r,
                        headingVariant: d,
                        className: o,
                        subTitle: (0, l.jsxs)("div", {
                            className: es().subTitle,
                            children: [
                                (0, l.jsx)(ei.q, {
                                    children: (0, l.jsx)(N.Heading, {
                                        variant: "h4",
                                        children: (0, l.jsx)(L.A, {
                                            id: "page.artist-pick-aria-label",
                                            values: { artistName: C },
                                        }),
                                    }),
                                }),
                                (0, l.jsx)(N.Caption, {
                                    variant: "span",
                                    size: "l",
                                    weight: "medium",
                                    className: es().text,
                                    "aria-hidden": !0,
                                    children: (0, l.jsx)(L.A, {
                                        id: "page.artist-pick-subtitle",
                                    }),
                                }),
                                (0, l.jsx)(S.Paper, {
                                    radius: "round",
                                    className: es().smallCoverContainer,
                                    children: (0, l.jsx)(g.BW, {
                                        fit: "cover",
                                        src: A,
                                        size: 50,
                                        className: es().smallCover,
                                        withAvatarReplace: !0,
                                        isAvailable: v,
                                        "aria-hidden": !0,
                                    }),
                                }),
                                C &&
                                    (0, l.jsx)(N.Caption, {
                                        variant: "span",
                                        size: "l",
                                        weight: "medium",
                                        className: es().text,
                                        lineClamp: 1,
                                        "aria-hidden": !0,
                                        children: C,
                                    }),
                            ],
                        }),
                        description: (0, l.jsx)(j.iQ, {
                            artists: b,
                            linkClassName: es().artistLink,
                            spoilerClassName: es().artistsSpoiler,
                            lineClamp: 1,
                            visibleArtistsCount: 3,
                            spoilerComponent: (0, l.jsx)(L.A, {
                                id: "entity-names.and-more-artists",
                                values: { artists: "" },
                            }),
                        }),
                    });
                }),
                eo = (0, r.PA)((e) => {
                    var t, a;
                    let { forwardRef: i, className: s, ...r } = e;
                    return (0, l.jsx)("section", {
                        ref: i,
                        className: s,
                        ...(0, P.getDataAttrFromProps)(r),
                        children: (0, l.jsx)(_.Bki, {
                            objectType: I.ky.Playlist,
                            objectPosX: 1,
                            objectPosY: 1,
                            objectsCount: 1,
                            objectId:
                                null !=
                                (a =
                                    null == (t = r.data)
                                        ? void 0
                                        : t.playlist.id)
                                    ? a
                                    : "",
                            children: (0, l.jsx)(er, { ...r }),
                        }),
                    });
                }),
                en = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(eo, { forwardRef: t, ...e }),
                );
            var ed = a(44078),
                ec = a(45631),
                em = a.n(ec);
            let eu = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            tracksContainerClassName: r,
                            meta: o,
                            data: n,
                            headerClassName: d,
                            headingVariant: c,
                            className: m,
                            ...u
                        } = e,
                        { artist: b } = (0, _.Pjs)(),
                        { from: p, utmLink: v } = (0, _.fyy)({
                            contextType: y.K.Artist,
                            contextId: b.id,
                        });
                    return (0, l.jsx)(g.$2, {
                        className: m,
                        ref: t,
                        shimmer: (0, l.jsx)(g.DS, {
                            variant: _.Xjt.PLAYLIST,
                            isActive: i,
                        }),
                        maxColumnsCount: g.DI.ONE,
                        itemsCountPerColumn: 5,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        carouselClassName: r,
                        carouselItemClassName: (0, s.$)(
                            em().item,
                            em().important,
                        ),
                        blockHeaderClassName: d,
                        blockHeaderTitle: o.title,
                        blockHeaderDescription: o.description,
                        blockHeaderHeadingVariant: c,
                        viewAllActionLink: o.viewAllActionLink,
                        ...u,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) => {
                                      var a;
                                      let {
                                          objectPosX: i,
                                          objectPosY: s,
                                          objectsCount: r,
                                      } = (0, _.$tp)({
                                          index: t,
                                          count: n.items.length,
                                      });
                                      return (0, l.jsx)(
                                          _.Bki,
                                          {
                                              objectId: e.id,
                                              objectType: I.ky.Track,
                                              objectPosX: i,
                                              objectPosY: s,
                                              objectsCount: r,
                                              children: (0, l.jsx)(ed.Kt, {
                                                  track: e,
                                                  playContextParams:
                                                      ((a = e.id),
                                                      n && b.id
                                                          ? {
                                                                contextData: {
                                                                    type: y.K
                                                                        .Artist,
                                                                    meta: {
                                                                        id: b.id,
                                                                    },
                                                                    from: p,
                                                                    utmLink: v,
                                                                },
                                                                queueParams: {
                                                                    index: t,
                                                                    entityId: a,
                                                                },
                                                                loadContextMeta:
                                                                    !0,
                                                            }
                                                          : {
                                                                contextData: {
                                                                    type: y.K
                                                                        .Artist,
                                                                    meta: {
                                                                        id: "",
                                                                    },
                                                                    from: p,
                                                                    utmLink: v,
                                                                },
                                                            }),
                                              }),
                                          },
                                          e.id,
                                      );
                                  }),
                    });
                }),
                e_ = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(eu, { forwardRef: t, ...e }),
                );
            var eg = a(52732);
            let eb = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: s,
                            headerClassName: r,
                            meta: o,
                            data: n,
                            headingVariant: d,
                            className: c,
                            ...m
                        } = e,
                        u = (0, v.L)(() =>
                            a || !n
                                ? (0, l.jsx)(g.Vt, {
                                      className: s,
                                      isActive: i,
                                  })
                                : (0, l.jsx)(_.Bki, {
                                      objectType: I.ky.Album,
                                      objectId: String(n.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      objectsCount: 1,
                                      children: (0, l.jsx)(eg.aX, {
                                          className: s,
                                          album: n.album,
                                      }),
                                  }),
                        );
                    return (0, l.jsxs)("section", {
                        className: c,
                        ref: t,
                        ...(0, P.getDataAttrFromProps)(m),
                        children: [
                            (0, l.jsx)(g.Tw, {
                                className: r,
                                title: o.title,
                                headingVariant: d,
                                titleLineClamp: 1,
                            }),
                            u,
                        ],
                    });
                },
                ep = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(eb, { forwardRef: t, ...e }),
                ),
                ev = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: s,
                            headerClassName: r,
                            meta: o,
                            data: n,
                            headingVariant: d,
                            className: c,
                            ...m
                        } = e,
                        u = (0, v.L)(() =>
                            a || !n
                                ? (0, l.jsx)(g.Vt, {
                                      className: s,
                                      isActive: i,
                                  })
                                : (0, l.jsx)(_.Bki, {
                                      objectType: I.ky.UpcomingAlbum,
                                      objectId: String(n.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      objectsCount: 1,
                                      children: (0, l.jsx)(eg.M3, {
                                          className: s,
                                          upcomingAlbum: n.album,
                                      }),
                                  }),
                        );
                    return (0, l.jsxs)("section", {
                        className: c,
                        ref: t,
                        ...(0, P.getDataAttrFromProps)(m),
                        children: [
                            (0, l.jsx)(g.Tw, {
                                className: r,
                                title: o.title,
                                headingVariant: d,
                                titleLineClamp: 1,
                            }),
                            u,
                        ],
                    });
                },
                eA = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(ev, { forwardRef: t, ...e }),
                ),
                eC = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            tracksContainerClassName: s,
                            meta: r,
                            data: o,
                            headerClassName: n,
                            headingVariant: d,
                            className: c,
                            ...m
                        } = e,
                        { from: u, utmLink: b } = (0, _.fyy)({
                            contextType: y.K.Playlist,
                            contextId: null == o ? void 0 : o.playlist.id,
                        });
                    return (0, l.jsx)(g.$2, {
                        className: c,
                        ref: t,
                        shimmer: (0, l.jsx)(g.DS, {
                            variant: _.Xjt.PLAYLIST,
                            isActive: i,
                        }),
                        maxColumnsCount: g.DI.TWO,
                        itemsCountPerColumn: 4,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        carouselClassName: s,
                        blockHeaderClassName: n,
                        blockHeaderTitle: r.title,
                        blockHeaderDescription: r.description,
                        blockHeaderHeadingVariant: d,
                        viewAllActionLink: r.viewAllActionLink,
                        ...m,
                        children:
                            null == o
                                ? void 0
                                : o.items.map((e, t) => {
                                      let {
                                          objectPosX: a,
                                          objectPosY: i,
                                          objectsCount: s,
                                      } = (0, _.$tp)({
                                          index: t,
                                          count: o.items.length,
                                      });
                                      return (0, l.jsx)(
                                          _.Bki,
                                          {
                                              objectId: e.data.id,
                                              objectType: I.ky.Track,
                                              objectPosX: a,
                                              objectPosY: i,
                                              objectsCount: s,
                                              children: (0, l.jsx)(ed.QB, {
                                                  track: e.data,
                                                  playContextParams: ((e) =>
                                                      o
                                                          ? {
                                                                contextData: {
                                                                    type: y.K
                                                                        .Playlist,
                                                                    meta: {
                                                                        id: o
                                                                            .playlist
                                                                            .id,
                                                                    },
                                                                    from: u,
                                                                    utmLink: b,
                                                                },
                                                                queueParams: {
                                                                    index: o.items.findIndex(
                                                                        (t) =>
                                                                            t
                                                                                .data
                                                                                .id ===
                                                                            e,
                                                                    ),
                                                                    entityId: e,
                                                                },
                                                                loadContextMeta:
                                                                    !0,
                                                            }
                                                          : {
                                                                contextData: {
                                                                    type: y.K
                                                                        .Playlist,
                                                                    meta: {
                                                                        id: "",
                                                                    },
                                                                    from: u,
                                                                    utmLink: b,
                                                                },
                                                            })(e.data.id),
                                              }),
                                          },
                                          e.data.id,
                                      );
                                  }),
                    });
                }),
                eT = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(eC, { forwardRef: t, ...e }),
                );
            var eI = a(64641);
            let eh = function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [];
                    return e.map((e) => e.data);
                },
                eL = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        data: s,
                        meta: r,
                        containerClassName: o,
                        headerClassName: n,
                        className: d,
                        ...c
                    } = e;
                    return (0, l.jsx)(eI.KR, {
                        className: d,
                        ref: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        clips: eh(null == s ? void 0 : s.items),
                        title: r.title,
                        description: r.description,
                        viewAllActionLink: r.viewAllActionLink,
                        containerClassName: o,
                        headerClassName: n,
                        ...c,
                    });
                },
                ey = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(eL, { forwardRef: t, ...e }),
                );
            var eS = a(13444),
                eN = a.n(eS);
            let eE = (e) => {
                    let {
                            title: t,
                            description: a,
                            viewAllActionLink: i,
                            headerClassName: r,
                            containerClassName: o,
                            headingVariant: n,
                        } = e,
                        { formatMessage: d } = (0, h.A)();
                    return (0, l.jsxs)("div", {
                        className: eN().root,
                        children: [
                            (0, l.jsx)(g.Tw, {
                                className: r,
                                title: t,
                                description: a,
                                viewAllActionLink: i,
                                "aria-label": d({
                                    id: "error-messages.empty-collection-podcasts",
                                }),
                                headingVariant: n,
                                withDescription: !!a,
                            }),
                            (0, l.jsx)("div", {
                                className: (0, s.$)(eN().text, o),
                                children: (0, l.jsx)(L.A, {
                                    id: "error-messages.empty-collection-podcasts",
                                }),
                            }),
                        ],
                    });
                },
                ej = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: d,
                        className: c,
                        ...m
                    } = e;
                    return (null == n ? void 0 : n.isEmptyBlock)
                        ? (0, l.jsx)(eE, {
                              title: o.title,
                              description: o.description,
                              viewAllActionLink: o.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: r,
                              headingVariant: d,
                          })
                        : (0, l.jsx)(g.OY, {
                              className: c,
                              ...m,
                              isShimmerVisible: a,
                              isShimmerActive: i,
                              headerClassName: r,
                              containerClassName: s,
                              title: o.title,
                              description: o.description,
                              viewAllActionLink: o.viewAllActionLink,
                              ref: t,
                              headingVariant: d,
                              children:
                                  null == n
                                      ? void 0
                                      : n.items.map((e, t) =>
                                            (0, l.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Album,
                                                    objectId: String(e.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount:
                                                        n.items.length,
                                                    children: (0, l.jsx)(
                                                        eg.aX,
                                                        {
                                                            album: e,
                                                            contentLinesCount: 3,
                                                        },
                                                    ),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                ek = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(ej, { forwardRef: t, ...e }),
                );
            var ex = a(34874),
                eR = a(29323),
                eP = a.n(eR),
                ef = a(97464),
                ew = a(55383),
                eK = a.n(ew);
            let eO = (e) => {
                    let { tab: t, areBothTabsEmpty: a } = e,
                        i = (0, n.useMemo)(() => {
                            switch (t) {
                                case ef.n.ALBUM:
                                    return (0, l.jsx)(L.A, {
                                        id: "error-messages.empty-collection-albums",
                                    });
                                case ef.n.PRESAVED_ALBUM:
                                    return (0, l.jsx)(L.A, {
                                        id: "error-messages.empty-collection-upcoming-albums-title",
                                    });
                            }
                        }, [t]);
                    return (0, l.jsx)("div", {
                        className: (0, s.$)(eK().root, {
                            [eK().root_oneEmptyTab]: !a,
                            [eK().root_twoEmptyTabs]: a,
                        }),
                        children: i,
                    });
                },
                eM = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            headingVariant: m,
                            className: b,
                            ...p
                        } = e,
                        { objectsCount: v } = (0, _.N8n)(),
                        A = (0, n.useId)(),
                        C = (0, n.useRef)(null),
                        T = (0, n.useId)(),
                        h = "".concat(A, " ").concat(A, "-description"),
                        L = (0, u.useTabsState)(
                            (null == c ? void 0 : c.activeIndexTab) || 0,
                        ),
                        y = (0, n.useMemo)(() => {
                            var e;
                            return (
                                (null == c || null == (e = c.tabs[L.value])
                                    ? void 0
                                    : e.items.length) === 0
                            );
                        }, [null == c ? void 0 : c.tabs, L.value]),
                        S = (0, n.useCallback)(
                            (e) =>
                                e.isEmptyTab
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              !(null == c
                                                  ? void 0
                                                  : c.areBothTabsEmpty) &&
                                                  (0, l.jsx)(f.Carousel, {
                                                      className: (0, s.$)(
                                                          eP().carouselEmpty,
                                                          r,
                                                      ),
                                                      itemClassName: (0, s.$)(
                                                          eP().item,
                                                          eP().important,
                                                      ),
                                                      tabIndex: -1,
                                                      children: (0, g.km)({
                                                          isActive: !1,
                                                          withInfo: !0,
                                                          linesCount: 4,
                                                      }),
                                                  }),
                                              (0, l.jsx)(eO, {
                                                  tab: e.type,
                                                  areBothTabsEmpty:
                                                      null == c
                                                          ? void 0
                                                          : c.areBothTabsEmpty,
                                              }),
                                          ],
                                      })
                                    : (0, l.jsx)(f.Carousel, {
                                          ref: C,
                                          itemClassName: (0, s.$)(
                                              eP().item,
                                              eP().important,
                                          ),
                                          className: r,
                                          "aria-labelledby": h,
                                          children: e.items.map((t, a) => {
                                              switch (t.type) {
                                                  case ex._.ALBUM_ITEM:
                                                      return (0, l.jsx)(
                                                          _.Bki,
                                                          {
                                                              objectType:
                                                                  I.ky.Album,
                                                              objectId: String(
                                                                  t.data.id,
                                                              ),
                                                              objectPosX: a + 1,
                                                              objectPosY: 1,
                                                              objectsCount:
                                                                  e.items
                                                                      .length,
                                                              children: (0,
                                                              l.jsx)(eg.aX, {
                                                                  contentLinesCount: 4,
                                                                  album: t.data,
                                                              }),
                                                          },
                                                          t.data.id,
                                                      );
                                                  case ex._.PRESAVED_ALBUM_ITEM:
                                                      return (0, l.jsx)(
                                                          _.Bki,
                                                          {
                                                              objectType:
                                                                  I.ky
                                                                      .UpcomingAlbum,
                                                              objectId: String(
                                                                  t.data.id,
                                                              ),
                                                              objectPosX: a + 1,
                                                              objectPosY: 1,
                                                              objectsCount:
                                                                  e.items
                                                                      .length,
                                                              children: (0,
                                                              l.jsx)(eg.M3, {
                                                                  contentLinesCount: 4,
                                                                  upcomingAlbum:
                                                                      t.data,
                                                              }),
                                                          },
                                                          t.data.id,
                                                      );
                                              }
                                          }),
                                      }),
                            [h, r, null == c ? void 0 : c.areBothTabsEmpty],
                        ),
                        N = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(f.Carousel, {
                                          ref: C,
                                          itemClassName: (0, s.$)(
                                              eP().item,
                                              eP().important,
                                          ),
                                          className: r,
                                          "aria-labelledby": h,
                                          children: (0, g.km)({
                                              isActive: i,
                                              withInfo: !0,
                                              linesCount: 4,
                                          }),
                                      })
                                    : null == c
                                      ? void 0
                                      : c.tabs.map((e, t) =>
                                            (0, l.jsx)(
                                                u.TabPanel,
                                                {
                                                    name: t,
                                                    value: L.value,
                                                    elementId: T,
                                                    className: eP().tabPanel,
                                                    children: S(e),
                                                },
                                                e.id,
                                            ),
                                        ),
                            [
                                a,
                                null == c ? void 0 : c.tabs,
                                r,
                                h,
                                i,
                                L.value,
                                T,
                                S,
                            ],
                        );
                    return (0, l.jsxs)("section", {
                        className: (0, s.$)(eP().root, b, {
                            [eP().root_withControls]: !y,
                        }),
                        ref: t,
                        ...(0, P.getDataAttrFromProps)(p),
                        children: [
                            (0, l.jsx)(_.Bki, {
                                objectType: I.ky.Shortcut,
                                objectId: String(d.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != v ? v : 0,
                                children: (0, l.jsx)(g.Tw, {
                                    className: (0, s.$)(
                                        o,
                                        eP().header,
                                        eP().important,
                                    ),
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: A,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, l.jsx)(g.X9, {
                                        className: eP().controls,
                                        carouselRef: C,
                                    }),
                                    headingVariant: m,
                                    withDescription: !!d.description,
                                }),
                            }),
                            (0, l.jsx)(g.wI, {
                                className: (0, s.$)(
                                    r,
                                    eP().tabCarousel,
                                    eP().important,
                                ),
                                isShimmerVisible: a,
                                elementId: T,
                                shimmer: (0, l.jsx)(g.zr, {
                                    isActive: i,
                                    className: (0, s.$)(
                                        r,
                                        eP().tabCarousel,
                                        eP().important,
                                    ),
                                    shimmerClassName: eP().tabShimmer,
                                }),
                                "aria-labelledby": A,
                                ...L,
                                children:
                                    null == c
                                        ? void 0
                                        : c.tabs.map((e, t) =>
                                              (0, l.jsx)(
                                                  g.oz,
                                                  {
                                                      value: t,
                                                      "aria-label": e.title,
                                                      title: e.title,
                                                      className: (0, s.$)(
                                                          eP().tab,
                                                          eP().important,
                                                      ),
                                                  },
                                                  e.id,
                                              ),
                                          ),
                            }),
                            N,
                        ],
                    });
                }),
                eD = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(eM, { forwardRef: t, ...e }),
                );
            var eB = a(90317),
                eV = a(84342),
                eU = a.n(eV);
            let eY = (e) => {
                    let {
                            title: t,
                            description: a,
                            viewAllActionLink: i,
                            headerClassName: r,
                            containerClassName: o,
                        } = e,
                        { formatMessage: n } = (0, h.A)();
                    return (0, l.jsxs)("div", {
                        className: eU().root,
                        children: [
                            (0, l.jsx)(g.Tw, {
                                className: r,
                                title: t,
                                description: a,
                                viewAllActionLink: i,
                                "aria-label": n({
                                    id: "error-messages.empty-collection-artists-title",
                                }),
                                withDescription: !!a,
                            }),
                            (0, l.jsx)("div", {
                                className: (0, s.$)(eU().text, o),
                                children: (0, l.jsx)(L.A, {
                                    id: "error-messages.empty-collection-artists-title",
                                }),
                            }),
                        ],
                    });
                },
                eG = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        className: o,
                        meta: n,
                        data: d,
                        headingVariant: c,
                        ...m
                    } = e;
                    return (null == d ? void 0 : d.isEmptyBlock)
                        ? (0, l.jsx)(eY, {
                              title: n.title,
                              description: n.description,
                              viewAllActionLink: n.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: r,
                          })
                        : (0, l.jsx)(g.OY, {
                              ...m,
                              className: o,
                              isShimmerVisible: a,
                              isShimmerActive: i,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: s,
                              headerClassName: r,
                              title: n.title,
                              description: n.description,
                              viewAllActionLink: n.viewAllActionLink,
                              ref: t,
                              headingVariant: c,
                              children:
                                  null == d
                                      ? void 0
                                      : d.items.map((e, t) =>
                                            (0, l.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Artist,
                                                    objectId: e.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount:
                                                        d.items.length,
                                                    children: (0, l.jsx)(
                                                        eB.ao,
                                                        {
                                                            artist: e,
                                                            contentLinesCount: 3,
                                                        },
                                                    ),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                eW = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(eG, { forwardRef: t, ...e }),
                );
            var eX = a(44609),
                eH = a.n(eX);
            let ez = (e) => {
                    let {
                            title: t,
                            description: a,
                            viewAllActionLink: i,
                            headerClassName: r,
                            containerClassName: o,
                            headingVariant: n,
                        } = e,
                        { formatMessage: c } = (0, h.A)();
                    return (0, l.jsxs)("div", {
                        className: eH().root,
                        ...(0, d.Am)(d.e8.landing.COLLECTION_CLIPS),
                        children: [
                            (0, l.jsx)(g.Tw, {
                                className: r,
                                title: t,
                                description: a,
                                viewAllActionLink: i,
                                "aria-label": c({
                                    id: "error-messages.empty-collection-clips-title",
                                }),
                                headingVariant: n,
                                withDescription: !!a,
                            }),
                            (0, l.jsx)(N.Caption, {
                                className: (0, s.$)(eH().text, o),
                                variant: "div",
                                size: "l",
                                weight: "normal",
                                ...(0, d.Am)(
                                    d.e8.landing
                                        .COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TITLE,
                                ),
                                children: (0, l.jsx)(L.A, {
                                    id: "error-messages.empty-collection-clips-title",
                                }),
                            }),
                        ],
                    });
                },
                eF = (e) => {
                    let {
                        forwardRef: t,
                        containerClassName: a,
                        headerClassName: i,
                        meta: s,
                        data: r,
                        headingVariant: o,
                        ...n
                    } = e;
                    return (null == r ? void 0 : r.isEmptyBlock)
                        ? (0, l.jsx)(ez, {
                              title: s.title,
                              description: s.description,
                              viewAllActionLink: s.viewAllActionLink,
                              containerClassName: a,
                              headerClassName: i,
                              headingVariant: o,
                          })
                        : (0, l.jsx)(ey, {
                              ref: t,
                              meta: s,
                              data: r,
                              containerClassName: a,
                              headerClassName: i,
                              headingVariant: o,
                              ...n,
                          });
                },
                e$ = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(eF, { forwardRef: t, ...e }),
                );
            var eJ = a(45242),
                eZ = a(25911);
            let eq = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: s,
                            headerClassName: r,
                            meta: o,
                            data: d,
                            headingVariant: c,
                            className: m,
                            ...u
                        } = e,
                        b = (0, n.useMemo)(() => {
                            let e =
                                null == d
                                    ? void 0
                                    : d.items.map((e, t) =>
                                          (0, l.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: d.items.length,
                                                  children: (0, l.jsx)(eJ.B6, {
                                                      playlist: e,
                                                      contentLinesCount: 3,
                                                  }),
                                              },
                                              e.key,
                                          ),
                                      );
                            return (
                                null == e ||
                                    e.unshift(
                                        (0, l.jsx)(
                                            eZ.Bw,
                                            {},
                                            "create-playlist-card",
                                        ),
                                    ),
                                e
                            );
                        }, [null == d ? void 0 : d.items]);
                    return (0, l.jsx)(g.OY, {
                        className: m,
                        ...u,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        ref: t,
                        headingVariant: c,
                        children: b,
                    });
                }),
                eQ = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(eq, { forwardRef: t, ...e }),
                ),
                e0 = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            tracksContainerClassName: s,
                            headerClassName: r,
                            className: o,
                            meta: n,
                            data: d,
                            headingVariant: c,
                            ...m
                        } = e,
                        { from: u } = (0, _.fyy)(),
                        { formatMessage: b } = (0, h.A)(),
                        p = Array.isArray(null == d ? void 0 : d.rawTracks)
                            ? b(
                                  { id: "entity-names.number-of-tracks" },
                                  {
                                      counter:
                                          null == d
                                              ? void 0
                                              : d.rawTracks.length,
                                  },
                              )
                            : n.description;
                    return (0, l.jsx)(g.$2, {
                        className: o,
                        shimmer: (0, l.jsx)(g.DS, {
                            variant: _.Xjt.PLAYLIST,
                            isActive: i,
                        }),
                        maxColumnsCount: g.DI.TWO,
                        itemsCountPerColumn: 4,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        blockHeaderClassName: r,
                        carouselClassName: s,
                        blockHeaderTitle: n.title,
                        viewAllActionLink: n.viewAllActionLink,
                        blockHeaderDescription: p,
                        ref: t,
                        blockHeaderHeadingVariant: c,
                        withBlockHeaderDescription: !0,
                        ...m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) => {
                                      let a,
                                          {
                                              objectPosX: i,
                                              objectPosY: s,
                                              objectsCount: r,
                                          } = (0, _.$tp)({
                                              index: t,
                                              count: d.items.length,
                                          });
                                      return (0, l.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Track,
                                              objectId: e.id,
                                              objectPosX: i,
                                              objectPosY: s,
                                              objectsCount: r,
                                              children: (0, l.jsx)(ed.Kt, {
                                                  track: e,
                                                  playContextParams:
                                                      ((a = e.id),
                                                      {
                                                          contextData: {
                                                              type: y.K.Various,
                                                              meta: {
                                                                  id: T.t
                                                                      .COLLECTION_DOWNLOADED_TRACKS,
                                                              },
                                                              from: u,
                                                          },
                                                          entitiesData:
                                                              null == d
                                                                  ? void 0
                                                                  : d.entitiesData,
                                                          queueParams: {
                                                              index: t,
                                                              entityId: a,
                                                          },
                                                          loadContextMeta: !1,
                                                      }),
                                              }),
                                          },
                                          e.id,
                                      );
                                  }),
                    });
                }),
                e1 = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(e0, { forwardRef: t, ...e }),
                ),
                e3 = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: d,
                        className: c,
                        ...m
                    } = e;
                    return (0, l.jsx)(g.OY, {
                        className: c,
                        ...m,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        ref: t,
                        headingVariant: d,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) => {
                                      switch (e.type) {
                                          case ex._.TRACK_ITEM:
                                              return (0, l.jsx)(
                                                  _.Bki,
                                                  {
                                                      objectType: I.ky.Track,
                                                      objectId: String(
                                                          e.data.id,
                                                      ),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount:
                                                          n.items.length,
                                                      children: (0, l.jsx)(
                                                          ed.wO,
                                                          {
                                                              track: e.data,
                                                              contentLinesCount: 3,
                                                          },
                                                          e.data.getKey(
                                                              "track",
                                                          ),
                                                      ),
                                                  },
                                                  e.data.id,
                                              );
                                          case ex._.LIKED_PLAYLIST_ITEM:
                                              return (0, l.jsx)(
                                                  _.Bki,
                                                  {
                                                      objectType: I.ky.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount:
                                                          n.items.length,
                                                      children: (0, l.jsx)(
                                                          eJ.B6,
                                                          {
                                                              playlist: e.data,
                                                              contentLinesCount: 3,
                                                          },
                                                          e.data.getKey(
                                                              "playlist",
                                                          ),
                                                      ),
                                                  },
                                                  e.data.key,
                                              );
                                          case ex._.NON_MUSIC_ALBUM_ITEM:
                                              return (0, l.jsx)(
                                                  _.Bki,
                                                  {
                                                      objectType: I.ky.Album,
                                                      objectId: String(
                                                          e.data.id,
                                                      ),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount:
                                                          n.items.length,
                                                      children: (0, l.jsx)(
                                                          eg.aX,
                                                          {
                                                              album: e.data,
                                                              contentLinesCount: 3,
                                                          },
                                                          e.data.getKey(
                                                              "album",
                                                          ),
                                                      ),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                e8 = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(e3, { forwardRef: t, ...e }),
                ),
                e6 = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: d,
                        className: c,
                        ...m
                    } = e;
                    return (0, l.jsx)(g.OY, {
                        className: c,
                        ...m,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        headerClassName: r,
                        containerClassName: s,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        ref: t,
                        headingVariant: d,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) =>
                                      (0, l.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Playlist,
                                              objectId: e.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: n.items.length,
                                              children: (0, l.jsx)(eJ.B6, {
                                                  playlist: e,
                                                  contentLinesCount: 3,
                                              }),
                                          },
                                          e.key,
                                      ),
                                  ),
                    });
                },
                e4 = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(e6, { forwardRef: t, ...e }),
                );
            var e9 = a(72094),
                e2 = a(58059),
                e7 = a.n(e2),
                e5 = a(21897),
                te = a.n(e5);
            let tt = (e) => {
                    let { className: t } = e;
                    return (0, l.jsx)("div", {
                        className: (0, s.$)(te().root, t),
                        ...(0, d.Am)(
                            d.e8.landing
                                .COLLECTION_PLAYLISTS_BLOCK_LIKED_EMPTY_BLOCK_TEXT,
                        ),
                        children: (0, l.jsx)(L.A, {
                            id: "error-messages.empty-collection-liked-playlists",
                        }),
                    });
                },
                ta = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            headingVariant: m,
                            className: b,
                            ...p
                        } = e,
                        { objectsCount: v } = (0, _.N8n)(),
                        A = (0, n.useId)(),
                        C = (0, n.useRef)(null),
                        T = (0, n.useId)(),
                        h = "".concat(A, " ").concat(A, "-description"),
                        L = (0, u.useTabsState)(
                            (null == c ? void 0 : c.activeIndexTab) || 0,
                        ),
                        y = (0, n.useMemo)(() => {
                            var e, t;
                            return (
                                (null == c || null == (e = c.tabs[L.value])
                                    ? void 0
                                    : e.type) !== e9.l.PLAYLIST_CREATED_TAB &&
                                (null == c || null == (t = c.tabs[L.value])
                                    ? void 0
                                    : t.items.length) === 0
                            );
                        }, [null == c ? void 0 : c.tabs, L.value]),
                        S = (0, n.useCallback)(
                            (e) => {
                                if (
                                    e.isEmptyTab &&
                                    e.type !== e9.l.PLAYLIST_CREATED_TAB
                                )
                                    return (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(f.Carousel, {
                                                className: (0, s.$)(
                                                    e7().carouselEmpty,
                                                    r,
                                                ),
                                                itemClassName: (0, s.$)(
                                                    e7().item,
                                                    e7().important,
                                                ),
                                                tabIndex: -1,
                                                children: (0, g.km)({
                                                    isActive: !1,
                                                    withInfo: !0,
                                                    linesCount: 4,
                                                }),
                                            }),
                                            (0, l.jsx)(tt, {}),
                                        ],
                                    });
                                let t = e.items.map((t, a) =>
                                    (0, l.jsx)(
                                        _.Bki,
                                        {
                                            objectType: I.ky.Playlist,
                                            objectId: String(t.id),
                                            objectPosX: a + 1,
                                            objectPosY: 1,
                                            objectsCount: e.items.length,
                                            children: (0, l.jsx)(eJ.B6, {
                                                contentLinesCount: 4,
                                                playlist: t,
                                            }),
                                        },
                                        t.id,
                                    ),
                                );
                                return (
                                    e.type === e9.l.PLAYLIST_CREATED_TAB &&
                                        t.unshift(
                                            (0, l.jsx)(
                                                eZ.Bw,
                                                {
                                                    className:
                                                        e7().createPlaylistCard,
                                                },
                                                "create-playlist-card",
                                            ),
                                        ),
                                    (0, l.jsx)(f.Carousel, {
                                        ref: C,
                                        itemClassName: (0, s.$)(
                                            e7().item,
                                            e7().important,
                                        ),
                                        className: r,
                                        "aria-labelledby": h,
                                        children: t,
                                    })
                                );
                            },
                            [h, r],
                        ),
                        N = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(f.Carousel, {
                                          ref: C,
                                          itemClassName: (0, s.$)(
                                              e7().item,
                                              e7().important,
                                          ),
                                          className: r,
                                          "aria-labelledby": h,
                                          children: (0, g.km)({
                                              isActive: i,
                                              withInfo: !0,
                                              linesCount: 4,
                                          }),
                                      })
                                    : null == c
                                      ? void 0
                                      : c.tabs.map((e, t) =>
                                            (0, l.jsx)(
                                                u.TabPanel,
                                                {
                                                    name: t,
                                                    value: L.value,
                                                    elementId: T,
                                                    className: e7().tabPanel,
                                                    children: S(e),
                                                },
                                                e.id,
                                            ),
                                        ),
                            [
                                a,
                                null == c ? void 0 : c.tabs,
                                r,
                                h,
                                i,
                                L.value,
                                T,
                                S,
                            ],
                        );
                    return (0, l.jsxs)("section", {
                        className: (0, s.$)(e7().root, b, {
                            [e7().root_withControls]: !y,
                        }),
                        ref: t,
                        ...(0, P.getDataAttrFromProps)(p),
                        children: [
                            (0, l.jsx)(_.Bki, {
                                objectType: I.ky.Shortcut,
                                objectId: String(d.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != v ? v : 0,
                                children: (0, l.jsx)(g.Tw, {
                                    className: (0, s.$)(
                                        o,
                                        e7().header,
                                        e7().important,
                                    ),
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: A,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, l.jsx)(g.X9, {
                                        className: e7().controls,
                                        carouselRef: C,
                                    }),
                                    headingVariant: m,
                                    withDescription: !!d.description,
                                }),
                            }),
                            (0, l.jsx)(g.wI, {
                                isShimmerVisible: a,
                                className: (0, s.$)(
                                    r,
                                    e7().tabCarousel,
                                    e7().important,
                                ),
                                elementId: T,
                                shimmer: (0, l.jsx)(g.zr, {
                                    isActive: i,
                                    className: (0, s.$)(
                                        r,
                                        e7().tabCarousel,
                                        e7().important,
                                    ),
                                    shimmerClassName: e7().tabShimmer,
                                }),
                                "aria-labelledby": A,
                                ...L,
                                children:
                                    null == c
                                        ? void 0
                                        : c.tabs.map((e, t) =>
                                              (0, l.jsx)(
                                                  g.oz,
                                                  {
                                                      value: t,
                                                      "aria-label": e.title,
                                                      title: e.title,
                                                      className: (0, s.$)(
                                                          e7().tab,
                                                          e7().important,
                                                      ),
                                                  },
                                                  e.id,
                                              ),
                                          ),
                            }),
                            N,
                        ],
                    });
                }),
                ti = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(ta, { forwardRef: t, ...e }),
                );
            var tl = a(35420);
            let ts = (0, r.PA)((e) => {
                    var t, a;
                    let {
                            forwardRef: i,
                            containerClassName: s,
                            isShimmerVisible: r,
                            isShimmerActive: o,
                            id: n,
                            data: d,
                            ...c
                        } = e,
                        { concert: m } = (0, _.Pjs)(),
                        u =
                            null != (a = null == (t = m.meta) ? void 0 : t.id)
                                ? a
                                : "",
                        g = (0, v.L)(() =>
                            r
                                ? (0, l.jsx)(tl.rI, { isActive: o })
                                : d
                                  ? (0, l.jsx)(tl.Gd, { data: d })
                                  : void 0,
                        );
                    return (0, l.jsx)("section", {
                        ref: i,
                        className: s,
                        ...(0, P.getDataAttrFromProps)(c),
                        children: (0, l.jsx)(
                            _.Bki,
                            {
                                objectId: u,
                                objectType: I.ky.Concert,
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                children: g,
                            },
                            n,
                        ),
                    });
                }),
                tr = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(ts, { forwardRef: t, ...e }),
                );
            var to = a(91342),
                tn = a(99570),
                td = a(87951),
                tc = a.n(td);
            let tm = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            headingVariant: m,
                            className: u,
                            ...b
                        } = e,
                        p = (0, n.useId)(),
                        { experiments: v } = (0, _.Pjs)(),
                        A = (0, n.useRef)(null),
                        C = v.checkExperiment(
                            _.zal.WebNextNewConcertCard,
                            "on",
                        ),
                        T = (0, n.useMemo)(
                            () =>
                                a
                                    ? ((e, t) =>
                                          Array.from({ length: 10 }, (a, i) =>
                                              e
                                                  ? (0, l.jsx)(
                                                        ee.LY,
                                                        { isActive: t },
                                                        i,
                                                    )
                                                  : (0, l.jsx)(
                                                        to.Shimmer,
                                                        {
                                                            isActive: t,
                                                            className:
                                                                tc().shimmer,
                                                        },
                                                        i,
                                                    ),
                                          ))(C, i)
                                    : null == c
                                      ? void 0
                                      : c.items.map((e, t) =>
                                            (0, l.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Concert,
                                                    objectId: e.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount:
                                                        c.items.length,
                                                    children: C
                                                        ? (0, l.jsx)(ee.Qb, {
                                                              concert: e,
                                                          })
                                                        : (0, l.jsx)(
                                                              tn.Concert,
                                                              { concert: e },
                                                          ),
                                                },
                                                e.id,
                                            ),
                                        ),
                            [null == c ? void 0 : c.items, i, a, C],
                        );
                    return (0, l.jsxs)("section", {
                        ref: t,
                        className: (0, s.$)(
                            tc().root,
                            { [tc().root_withNewConcertCards]: C },
                            u,
                        ),
                        ...(0, P.getDataAttrFromProps)(b),
                        children: [
                            (0, l.jsx)(g.Tw, {
                                className: o,
                                labeledForId: p,
                                title: d.title,
                                viewAllActionLink: d.viewAllActionLink,
                                controls: (0, l.jsx)(g.X9, {
                                    className: tc().controls,
                                    carouselRef: A,
                                }),
                                headingVariant: m,
                            }),
                            (0, l.jsx)(f.Carousel, {
                                ref: A,
                                itemClassName: (0, s.$)(
                                    tc().item,
                                    tc().important,
                                ),
                                className: r,
                                "aria-labelledby": p,
                                children: T,
                            }),
                        ],
                    });
                }),
                tu = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(tm, { forwardRef: t, ...e }),
                );
            var t_ = a(15709),
                tg = a.n(t_),
                tb = a(78016),
                tp = a(52756),
                tv = a(10244),
                tA = a.n(tv);
            let tC = (e) => {
                let {
                        className: t,
                        title: a,
                        subtitle: i,
                        covers: r,
                        link: o,
                        type: d,
                        withLastPlayed: c,
                    } = e,
                    m = (0, _.NKK)(),
                    u = (0, n.useMemo)(() => {
                        if (0 !== r.length)
                            return (0, l.jsx)("div", {
                                className: tA().covers,
                                children: r
                                    .slice(0, 2)
                                    .map((e, t) =>
                                        (0, l.jsx)(
                                            S.Paper,
                                            {
                                                className: tA().coverContainer,
                                                radius: "xs",
                                                children: (0, l.jsx)(tp.Image, {
                                                    className: tA().cover,
                                                    size: 80,
                                                    src: e.uri,
                                                    fit: "contain",
                                                    withAvatarReplace: !0,
                                                    fallbackIconSize: "s",
                                                }),
                                            },
                                            t,
                                        ),
                                    ),
                            });
                    }, [r]),
                    b = (0, n.useCallback)(() => {
                        m({ to: I.QT.Link });
                    }, [m]);
                return (0, l.jsx)(S.Paper, {
                    className: (0, s.$)(
                        tA().root,
                        tA()["root_".concat(d)],
                        {
                            [tA().root_withCovers]: r.length > 0,
                            [tA().root_withLastPlayed]: c,
                        },
                        t,
                    ),
                    radius: "l",
                    children: (0, l.jsx)(g.N_, {
                        className: tA().link,
                        href: o,
                        onClick: b,
                        children: (0, l.jsxs)("div", {
                            className: tA().content,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: tA().textContainer,
                                    children: [
                                        (0, l.jsxs)(N.Caption, {
                                            className: tA().title,
                                            size: "m",
                                            variant: "div",
                                            children: [
                                                a,
                                                (0, l.jsx)(tb.Icon, {
                                                    className: tA().titleIcon,
                                                    size: "xs",
                                                    variant: "arrowRight",
                                                }),
                                            ],
                                        }),
                                        i &&
                                            (0, l.jsx)(N.Caption, {
                                                className: tA().subtitle,
                                                size: "m",
                                                variant: "div",
                                                lineClamp: 2,
                                                children: i,
                                            }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    }),
                });
            };
            var tT = a(13201),
                tI = a(86634),
                th = a(61744),
                tL = a(88422),
                ty = a.n(tL);
            let tS = (0, r.PA)((e) => {
                    var t, a, i, r, o;
                    let { className: m, lastPlayed: u } = e,
                        { objectsCount: b } = (0, _.N8n)(),
                        { formatMessage: p } = (0, h.A)(),
                        { sonataState: A, continueListen: C } = (0, _.Pjs)(),
                        T = (0, _.eGp)(),
                        L = (0, th.$4)(),
                        {
                            album: E,
                            playlist: j,
                            track: k,
                            getTrackMeta: x,
                            getPlaylistMeta: R,
                            isNeededToLoad: P,
                            isRejected: f,
                            albumDuration: w,
                            albumDurationLeft: K,
                        } = u.data,
                        {
                            track: O,
                            trackIndex: M,
                            contextType: D,
                            contextId: B,
                            albumDuration: V,
                            albumStreamProgress: U,
                            trackTempStreamProgress: Y,
                        } = C,
                        G = (0, _.brA)(),
                        W = (0, _.PT7)(),
                        X = (0, n.useMemo)(() => O || k, [O, k]),
                        H =
                            (null == (t = A.entityMeta)
                                ? void 0
                                : t.isPodcast) ||
                            (null == (a = A.entityMeta)
                                ? void 0
                                : a.isAudiobook),
                        z = (0, n.useCallback)(async () => {
                            let e = await x();
                            !C.track &&
                                e &&
                                (C.saveTrack({
                                    contextType: E ? y.K.Album : y.K.Playlist,
                                    contextId: E
                                        ? E.id
                                        : String(null == j ? void 0 : j.id),
                                    track: e,
                                    isDefaultTrack: !0,
                                }),
                                w &&
                                    K &&
                                    (C.saveAlbumDuration(w),
                                    C.albumStreamProgress.updateEndPositionSec(
                                        w - K,
                                    )));
                        }, [C, E, w, K, x, null == j ? void 0 : j.id]),
                        F = (0, n.useCallback)(async () => {
                            let e = await R();
                            C.trackIndex ||
                                "number" != typeof e ||
                                C.saveTrackIndex(e);
                        }, [R, C]);
                    (0, n.useEffect)(() => {
                        P && (z(), F());
                    }, [P, z, F]);
                    let $ =
                            D === y.K.Album &&
                            X.mainAlbum &&
                            (null == X ? void 0 : X.mainAlbum.isAudiobook),
                        J = (0, n.useCallback)(
                            (e) => {
                                var t, a;
                                if (
                                    e &&
                                    e.duration &&
                                    (e.duration === 1 / 0
                                        ? null == (t = X.streamProgress) ||
                                          t.updateEndPositionSec(0)
                                        : null == (a = X.streamProgress) ||
                                          a.updateEndPositionSec(e.position),
                                    $)
                                ) {
                                    let t =
                                            (null == U
                                                ? void 0
                                                : U.endPositionSec) || 0,
                                        a = e.position,
                                        i =
                                            a -
                                            ((null == Y
                                                ? void 0
                                                : Y.endPositionSec) || 0);
                                    null == U || U.updateEndPositionSec(t + i),
                                        null == Y || Y.updateEndPositionSec(a);
                                }
                            },
                            [X.streamProgress, U, Y, $],
                        ),
                        Z = $
                            ? (null == U ? void 0 : U.endPositionSec) || 0
                            : (null == (i = X.streamProgress)
                                  ? void 0
                                  : i.endPositionSec) || 0,
                        q = X.durationMs ? X.durationMs / 1e3 : 0,
                        Q = $ ? V || 0 : q,
                        ee = (0, th.mw)(Z, Q),
                        et = (0, n.useMemo)(() => (0, tT.A)(J, 500), [J]),
                        { isPlaying: ea, togglePlay: ei } = ((e) => {
                            let {
                                    track: t,
                                    trackIndex: a,
                                    contextType: i,
                                    contextId: l,
                                } = e,
                                s = (0, n.useMemo)(() => {
                                    switch (i) {
                                        case y.K.Playlist:
                                            return {
                                                type: y.K.Playlist,
                                                meta: { id: String(l) },
                                            };
                                        case y.K.Album:
                                            return {
                                                type: y.K.Album,
                                                meta: { id: Number(l) },
                                            };
                                        case y.K.Various:
                                            return {
                                                type: y.K.Various,
                                                meta: { id: Number(l) },
                                            };
                                        case y.K.Artist:
                                            return {
                                                type: y.K.Artist,
                                                meta: { id: Number(l) },
                                            };
                                        case y.K.Generative:
                                            return {
                                                type: y.K.Generative,
                                                meta: { id: Number(l) },
                                            };
                                        case y.K.Vibe:
                                            return {
                                                type: y.K.Vibe,
                                                meta: { id: String(l) },
                                            };
                                        default:
                                            return {
                                                type: y.K.Various,
                                                meta: { id: "" },
                                            };
                                    }
                                }, [i, l]),
                                { from: r, utmLink: o } = (0, _.fyy)({
                                    contextId: s.meta.id,
                                    contextType: s.type,
                                }),
                                d = (0, v.L)(() => {
                                    switch (i) {
                                        case y.K.Playlist:
                                            return {
                                                type: y.K.Playlist,
                                                meta: { id: String(l) },
                                                from: r,
                                                utmLink: o,
                                            };
                                        case y.K.Album:
                                            return {
                                                type: y.K.Album,
                                                meta: { id: Number(l) },
                                                from: r,
                                                utmLink: o,
                                            };
                                        case y.K.Various:
                                            return {
                                                type: y.K.Various,
                                                meta: { id: Number(l) },
                                                from: r,
                                                utmLink: o,
                                            };
                                        case y.K.Artist:
                                            return {
                                                type: y.K.Artist,
                                                meta: { id: Number(l) },
                                                from: r,
                                                utmLink: o,
                                            };
                                        case y.K.Generative:
                                            return {
                                                type: y.K.Generative,
                                                meta: { id: Number(l) },
                                                from: r,
                                                utmLink: o,
                                            };
                                        case y.K.Vibe:
                                            return {
                                                type: y.K.Vibe,
                                                meta: { id: String(l) },
                                                seeds: [String(l)],
                                                includeTracksInResponse: !0,
                                                trackToStartFrom: t.id,
                                                from: r,
                                                utmLink: o,
                                            };
                                        default:
                                            return {
                                                type: y.K.Playlist,
                                                meta: { id: "" },
                                                from: r,
                                                utmLink: o,
                                            };
                                    }
                                });
                            return (0, _.Dx4)({
                                playContextParams: {
                                    contextData: d,
                                    queueParams: { entityId: t.id, index: a },
                                    loadContextMeta: !0,
                                },
                                entityId: t.entityId,
                            });
                        })({
                            track: X,
                            trackIndex: M,
                            contextType: D,
                            contextId: B,
                        }),
                        el = (0, c.c)(() => {
                            W() || (ei(), G(!ea));
                        }),
                        es = (0, n.useMemo)(
                            () => ({ "--color-background": X.averageColor }),
                            [X.averageColor],
                        );
                    (0, n.useEffect)(() => {
                        let e,
                            t =
                                null == T
                                    ? void 0
                                    : T.state.queueState.currentEntity.onChange(
                                          () => {
                                              null == e || e(),
                                                  (e =
                                                      T.state.playerState.progress.onChange(
                                                          () => {
                                                              let e =
                                                                  T.state
                                                                      .playerState
                                                                      .progress
                                                                      .value;
                                                              H && et(e);
                                                          },
                                                      ));
                                          },
                                      );
                        return () => {
                            null == t || t(), null == e || e();
                        };
                    }, [T, et, H, X.streamProgress]);
                    let er = $ ? X.mainAlbum.title : X.title,
                        eo = $ ? X.mainAlbum.coverUri : X.coverUri,
                        en = (0, n.useMemo)(() => {
                            var e;
                            return p(
                                { id: "entity-names.album-name" },
                                {
                                    albumName:
                                        null == (e = X.mainAlbum)
                                            ? void 0
                                            : e.title,
                                },
                            );
                        }, [p, null == (r = X.mainAlbum) ? void 0 : r.title]),
                        ed = (0, n.useMemo)(
                            () =>
                                $
                                    ? en
                                    : p(
                                          { id: "entity-names.track-name" },
                                          { trackName: X.title },
                                      ),
                            [p, $, en, X.title],
                        ),
                        ec = $
                            ? X.mainAlbum.explicitDisclaimer
                            : X.explicitDisclaimer,
                        em = L(Q - Z, !1);
                    return f
                        ? null
                        : (0, l.jsx)(
                              _.Bki,
                              {
                                  objectType: I.ky.Track,
                                  objectId: String(X.id),
                                  objectPosX: 0,
                                  objectPosY: 1,
                                  objectsCount: b,
                                  children: (0, l.jsxs)(S.Paper, {
                                      className: (0, s.$)(ty().root, m),
                                      radius: "l",
                                      style: es,
                                      "aria-label": er,
                                      ...(0, d.Am)(
                                          d.e8.landing.CONTINUE_LISTEN_TRACK,
                                      ),
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: ty().content,
                                              children: [
                                                  (0, l.jsx)(g.BW, {
                                                      className: (0, s.$)(
                                                          ty().cover,
                                                          ty().important,
                                                      ),
                                                      src: eo,
                                                      size: 50,
                                                      alt: ed,
                                                      fit: "cover",
                                                      withAvatarReplace: !0,
                                                      isAvailable:
                                                          X.isAvailable,
                                                      fallbackIconSize: "xs",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsxs)("div", {
                                                      className: ty().metaTrack,
                                                      children: [
                                                          (0, l.jsxs)(g.N_, {
                                                              className:
                                                                  ty()
                                                                      .metaContainer,
                                                              href:
                                                                  null ==
                                                                  (o =
                                                                      X.mainAlbum)
                                                                      ? void 0
                                                                      : o.url,
                                                              children: [
                                                                  (0, l.jsx)(
                                                                      N.Caption,
                                                                      {
                                                                          className:
                                                                              ty()
                                                                                  .title,
                                                                          type: "entity",
                                                                          size: "m",
                                                                          weight: "medium",
                                                                          variant:
                                                                              "span",
                                                                          lineClamp: 1,
                                                                          "aria-label":
                                                                              en,
                                                                          children:
                                                                              er,
                                                                      },
                                                                  ),
                                                                  ec &&
                                                                      (0,
                                                                      l.jsx)(
                                                                          g.Nq,
                                                                          {
                                                                              getDescriptionTexts:
                                                                                  X.getDescriptionTexts,
                                                                              size: "xs",
                                                                              variant:
                                                                                  ec,
                                                                              className:
                                                                                  ty()
                                                                                      .explicitMark,
                                                                          },
                                                                      ),
                                                                  (0, l.jsx)(
                                                                      tb.Icon,
                                                                      {
                                                                          className:
                                                                              ty()
                                                                                  .titleIcon,
                                                                          size: "xs",
                                                                          variant:
                                                                              "arrowRight",
                                                                      },
                                                                  ),
                                                              ],
                                                          }),
                                                          (0, l.jsx)("div", {
                                                              className:
                                                                  ty().progress,
                                                              children:
                                                                  !!Q &&
                                                                  (0, l.jsxs)(
                                                                      l.Fragment,
                                                                      {
                                                                          children:
                                                                              [
                                                                                  (0,
                                                                                  l.jsx)(
                                                                                      tI.q,
                                                                                      {
                                                                                          "aria-valuetext":
                                                                                              ee,
                                                                                          "aria-busy":
                                                                                              ea &&
                                                                                              H,
                                                                                          fullCircleClassName:
                                                                                              ty()
                                                                                                  .fullCircle,
                                                                                          progressCircleClassName:
                                                                                              ty()
                                                                                                  .progressCircle,
                                                                                          value: Z,
                                                                                          max: Q,
                                                                                      },
                                                                                  ),
                                                                                  (0,
                                                                                  l.jsx)(
                                                                                      N.Caption,
                                                                                      {
                                                                                          lineClamp: 1,
                                                                                          variant:
                                                                                              "div",
                                                                                          size: "m",
                                                                                          children:
                                                                                              em,
                                                                                      },
                                                                                  ),
                                                                              ],
                                                                      },
                                                                  ),
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(g.DM, {
                                              variant: "filled",
                                              className: ty().playButton,
                                              isPlaying: ea && H,
                                              onClick: el,
                                              iconSize: "m",
                                          }),
                                      ],
                                  }),
                              },
                              X.id,
                          );
                }),
                tN = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            headerClassName: r,
                            containerClassName: o,
                            headingVariant: d,
                            data: c,
                            ...m
                        } = e,
                        { formatMessage: u } = (0, h.A)(),
                        b = (0, n.useId)(),
                        { objectsCount: p } = (0, _.N8n)(),
                        v = (0, n.useMemo)(() => {
                            if (!c || a)
                                return Array.from({ length: 3 }, (e, t) =>
                                    (0, l.jsx)(
                                        to.Shimmer,
                                        { className: tg().item, isActive: i },
                                        t,
                                    ),
                                );
                            let e = [
                                    c.bookshelf.bookCount
                                        ? u(
                                              {
                                                  id: "entity-names.number-of-books",
                                              },
                                              {
                                                  counter:
                                                      c.bookshelf.bookCount,
                                              },
                                          )
                                        : void 0,
                                    c.bookshelf.podcastCount
                                        ? u(
                                              {
                                                  id: "entity-names.number-of-podcasts",
                                              },
                                              {
                                                  counter:
                                                      c.bookshelf.podcastCount,
                                              },
                                          )
                                        : void 0,
                                ]
                                    .filter(Boolean)
                                    .join(",\n"),
                                t = c.newEpisodes.trackCount
                                    ? u(
                                          {
                                              id: "entity-names.number-of-episodes",
                                          },
                                          { counter: c.newEpisodes.trackCount },
                                      )
                                    : void 0,
                                r = [];
                            return (
                                c.lastPlayed &&
                                    r.push(
                                        (0, l.jsx)(
                                            tS,
                                            {
                                                className: (0, s.$)(
                                                    tg().item,
                                                    tg().item_lastPlayed,
                                                ),
                                                lastPlayed: c.lastPlayed,
                                            },
                                            c.lastPlayed.type,
                                        ),
                                    ),
                                r.push(
                                    (0, l.jsx)(
                                        _.Bki,
                                        {
                                            objectType: I.ky.Text,
                                            objectId: "bookshelf",
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            objectsCount: p,
                                            children: (0, l.jsx)(tC, {
                                                className: tg().item,
                                                type: "bookshelf",
                                                link: _.Zyd.collectionShelf
                                                    .href,
                                                title: c.bookshelf.title,
                                                subtitle: e,
                                                covers: c.bookshelf.covers,
                                                withLastPlayed: !!c.lastPlayed,
                                            }),
                                        },
                                        c.bookshelf.title,
                                    ),
                                    (0, l.jsx)(
                                        _.Bki,
                                        {
                                            objectType: I.ky.Text,
                                            objectId: "newEpisodes",
                                            objectPosX: 2,
                                            objectPosY: 1,
                                            objectsCount: p,
                                            children: (0, l.jsx)(tC, {
                                                className: tg().item,
                                                type: "newEpisodes",
                                                link: _.Zyd
                                                    .collectionShelfNewEpisodes
                                                    .href,
                                                title: c.newEpisodes.title,
                                                subtitle: t,
                                                covers: c.newEpisodes.covers,
                                                withLastPlayed: !!c.lastPlayed,
                                            }),
                                        },
                                        c.newEpisodes.title,
                                    ),
                                ),
                                r
                            );
                        }, [u, c, i, a, p]);
                    return (0, l.jsxs)("section", {
                        ref: t,
                        ...(0, P.getDataAttrFromProps)(m),
                        children: [
                            (0, l.jsx)(g.Tw, {
                                className: r,
                                labeledForId: b,
                                title: u({
                                    id: "non-music.continue-listen-landing-block-title",
                                }),
                                headingVariant: d,
                            }),
                            (0, l.jsx)("div", {
                                className: tg().blocksContainer,
                                children: (0, l.jsx)("div", {
                                    className: (0, s.$)(tg().container, o),
                                    "aria-labelledby": b,
                                    children: v,
                                }),
                            }),
                        ],
                    });
                },
                tE = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(tN, { forwardRef: t, ...e }),
                ),
                tj = (e) => {
                    let {
                        forwardRef: t,
                        headerClassName: a,
                        headingVariant: i,
                        meta: s,
                        ...r
                    } = e;
                    return (0, l.jsx)(_.Bki, {
                        objectType: I.ky.Text,
                        objectId: String(s.viewAllActionLink),
                        objectPosX: 1,
                        objectPosY: 1,
                        objectsCount: 0,
                        children: (0, l.jsx)("section", {
                            ref: t,
                            ...(0, P.getDataAttrFromProps)(r),
                            children: (0, l.jsx)(g.Tw, {
                                className: a,
                                title: s.title,
                                headingVariant: i,
                                viewAllActionLink: s.viewAllActionLink,
                            }),
                        }),
                    });
                },
                tk = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(tj, { forwardRef: t, ...e }),
                );
            var tx = a(53706);
            let tR = (0, r.PA)((e) => {
                    let { donation: t } = e,
                        { ref: a, intersectionPropertyId: i } = (0, _.nMI)(),
                        s = (0, tx.Q$)()(t.url),
                        r = (0, _.ZpR)(s),
                        o = (0, _.ZpR)(t.artist.url),
                        n = (0, _.NKK)(),
                        d = (0, c.c)(() => {
                            n({ to: I.QT.ArtistScreen }), o();
                        }),
                        m = (0, c.c)(() => {
                            n({ to: I.QT.Link, deepLink: s }), r();
                        }),
                        u = (0, j.SA)({ artist: t.artist, callback: d });
                    return (0, l.jsx)(tx.Xx, {
                        ref: a,
                        "data-intersection-property-id": i,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: u,
                        onNavigateToDonation: m,
                    });
                }),
                tP = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: s,
                            headerClassName: r,
                            meta: o,
                            data: d,
                            headingVariant: c,
                            className: m,
                            ...u
                        } = e,
                        g = (0, n.useMemo)(
                            () =>
                                !a && (null == d ? void 0 : d.items)
                                    ? d.items.map((e, t) => {
                                          let { data: a } = e;
                                          return (0, l.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Donation,
                                                  objectId: a.artist.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: d.items.length,
                                                  children: (0, l.jsx)(tR, {
                                                      donation: a,
                                                  }),
                                              },
                                              a.artist.id,
                                          );
                                      })
                                    : (0, tx.kZ)(i),
                            [null == d ? void 0 : d.items, i, a],
                        );
                    return (0, l.jsx)(tx.x0, {
                        containerClassName: s,
                        headerClassName: r,
                        headingVariant: c,
                        className: m,
                        forwardRef: t,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        title: o.title,
                        ...u,
                        children: g,
                    });
                },
                tf = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(tP, { forwardRef: t, ...e }),
                );
            var tw = a(79937),
                tK = a(86790),
                tO = a(75325),
                tM = a.n(tO);
            let tD = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            className: m,
                            headingVariant: u,
                            ..._
                        } = e,
                        b = (0, n.useId)(),
                        p = (0, n.useRef)(null),
                        { shouldHideControls: v } = (0, tw.Y)(p),
                        A = !!(d.description || d.title || !v),
                        C = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(tK.R, {
                                          isActive: i,
                                          ref: p,
                                          containerClassName: r,
                                          ariaLabelledBy: b,
                                          length: 9,
                                      })
                                    : (0, l.jsx)(tK.k, {
                                          ref: p,
                                          containerClassName: r,
                                          ariaLabelledBy: b,
                                          items: null == c ? void 0 : c.items,
                                      }),
                            [null == c ? void 0 : c.items, i, a, r, b],
                        );
                    return (0, l.jsxs)("section", {
                        className: (0, s.$)(tM().root, m),
                        ref: t,
                        ...(0, P.getDataAttrFromProps)(_),
                        children: [
                            A &&
                                (0, l.jsx)(g.Tw, {
                                    className: o,
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: b,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, l.jsx)(g.X9, {
                                        className: tM().controls,
                                        carouselRef: p,
                                    }),
                                    headingVariant: u,
                                    withDescription: !!d.description,
                                }),
                            C,
                        ],
                    });
                },
                tB = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(tD, { forwardRef: t, ...e }),
                );
            var tV = a(54344),
                tU = a(78459),
                tY = a.n(tU);
            let tG = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            className: m,
                            headingVariant: u,
                            ...b
                        } = e,
                        p = (0, n.useId)(),
                        v = (0, n.useRef)(null),
                        { shouldHideControls: A } = (0, tw.Y)(v),
                        C = !!(d.description || d.title || !A),
                        T = (0, n.useMemo)(() => {
                            var e;
                            return a
                                ? (0, l.jsx)(f.Carousel, {
                                      ref: v,
                                      itemClassName: (0, s.$)(
                                          tY().item,
                                          tY().important,
                                      ),
                                      className: r,
                                      "aria-labelledby": ""
                                          .concat(p, " ")
                                          .concat(p, "-description"),
                                      children: (0, g.km)({
                                          isActive: i,
                                          centered: !0,
                                      }),
                                  })
                                : (0, l.jsx)(f.Carousel, {
                                      ref: v,
                                      itemClassName: (0, s.$)(
                                          tY().item,
                                          tY().important,
                                      ),
                                      className: r,
                                      "aria-labelledby": ""
                                          .concat(p, " ")
                                          .concat(p, "-description"),
                                      children:
                                          null == c || null == (e = c.items)
                                              ? void 0
                                              : e.map((e, t) => {
                                                    var a;
                                                    return (0, l.jsx)(
                                                        _.Bki,
                                                        {
                                                            objectType:
                                                                I.ky.Wave,
                                                            objectId:
                                                                e.stationId,
                                                            objectPosX: t + 1,
                                                            objectPosY: 1,
                                                            objectsCount:
                                                                null ==
                                                                (a = c.items)
                                                                    ? void 0
                                                                    : a.length,
                                                            children: (0,
                                                            l.jsx)(tV.yi, {
                                                                vibe: e,
                                                            }),
                                                        },
                                                        e.stationId,
                                                    );
                                                }),
                                  });
                        }, [null == c ? void 0 : c.items, i, a, r, p]);
                    return (0, l.jsxs)("section", {
                        className: (0, s.$)(tY().root, m),
                        ref: t,
                        ...(0, P.getDataAttrFromProps)(b),
                        children: [
                            C &&
                                (0, l.jsx)(g.Tw, {
                                    className: o,
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: p,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, l.jsx)(g.X9, {
                                        className: tY().controls,
                                        carouselRef: v,
                                    }),
                                    headingVariant: u,
                                    withDescription: !!d.description,
                                }),
                            T,
                        ],
                    });
                },
                tW = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(tG, { forwardRef: t, ...e }),
                );
            var tX = a(51495),
                tH = a.n(tX);
            let tz = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            headerClassName: s,
                            meta: r,
                            data: o,
                            headingVariant: n,
                            className: d,
                            ...c
                        } = e,
                        { artist: m } = (0, _.Pjs)(),
                        { formatMessage: u } = (0, h.A)(),
                        b = (0, v.L)(() => {
                            if (!o) return;
                            let e = [];
                            return (
                                o.tracksCount &&
                                    e.push(
                                        u(
                                            { id: "entity-names.tracks-count" },
                                            { value: o.tracksCount },
                                        ),
                                    ),
                                o.collectionAlbumCount &&
                                    e.push(
                                        u(
                                            { id: "entity-names.albums-count" },
                                            { value: o.collectionAlbumCount },
                                        ),
                                    ),
                                e.join(" • ")
                            );
                        });
                    return (0, l.jsx)("section", {
                        ref: t,
                        className: d,
                        ...(0, P.getDataAttrFromProps)(c),
                        children: (0, l.jsx)(g.Tw, {
                            className: s,
                            title: r.title,
                            coverUrl:
                                "avatars.mds.yandex.net/get-music-misc/2419084/img.65faec7dd0866004f49a38bc/%%",
                            controls: !1,
                            viewAllActionLink:
                                null == o ? void 0 : o.href(m.id),
                            coverContainerClassName: tH().cover,
                            shimmerCoverClassName: tH().shimmerCover,
                            headingVariant: n,
                            titleLineClamp: 1,
                            withDescription: !0,
                            description: b,
                            isShimmerActive: i,
                            isShimmerVisible: a,
                        }),
                    });
                }),
                tF = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(tz, { forwardRef: t, ...e }),
                );
            var t$ = a(78663),
                tJ = a.n(t$);
            let tZ = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            headingVariant: m,
                            className: b,
                            ...p
                        } = e,
                        { objectsCount: v } = (0, _.N8n)(),
                        A = (0, u.useTabsState)(0),
                        C = (0, n.useId)(),
                        T = (0, n.useRef)(null),
                        h = (0, n.useId)(),
                        L = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(f.Carousel, {
                                          ref: T,
                                          itemClassName: (0, s.$)(
                                              tJ().item,
                                              tJ().important,
                                          ),
                                          className: r,
                                          "aria-labelledby": ""
                                              .concat(C, " ")
                                              .concat(C, "-description"),
                                          children: (0, g.km)({ isActive: i }),
                                      })
                                    : null == c
                                      ? void 0
                                      : c.items.map((e) =>
                                            (0, l.jsx)(
                                                u.TabPanel,
                                                {
                                                    name: e.tab.id,
                                                    value: A.value,
                                                    elementId: h,
                                                    children: (0, l.jsx)(
                                                        f.Carousel,
                                                        {
                                                            ref: T,
                                                            itemClassName: (0,
                                                            s.$)(
                                                                tJ().item,
                                                                tJ().important,
                                                            ),
                                                            className: r,
                                                            "aria-labelledby":
                                                                ""
                                                                    .concat(
                                                                        C,
                                                                        " ",
                                                                    )
                                                                    .concat(
                                                                        C,
                                                                        "-description",
                                                                    ),
                                                            children:
                                                                e.data.map(
                                                                    (t, a) =>
                                                                        (0,
                                                                        l.jsx)(
                                                                            _.Bki,
                                                                            {
                                                                                objectType:
                                                                                    I
                                                                                        .ky
                                                                                        .Album,
                                                                                objectId:
                                                                                    String(
                                                                                        t.id,
                                                                                    ),
                                                                                objectPosX:
                                                                                    a +
                                                                                    1,
                                                                                objectPosY: 1,
                                                                                objectsCount:
                                                                                    e
                                                                                        .data
                                                                                        .length,
                                                                                children:
                                                                                    (0,
                                                                                    l.jsx)(
                                                                                        eg.aX,
                                                                                        {
                                                                                            contentLinesCount: 3,
                                                                                            album: t,
                                                                                        },
                                                                                    ),
                                                                            },
                                                                            t.id,
                                                                        ),
                                                                ),
                                                        },
                                                    ),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [
                                a,
                                null == c ? void 0 : c.items,
                                r,
                                C,
                                i,
                                A.value,
                                h,
                            ],
                        );
                    return (0, l.jsxs)("section", {
                        className: (0, s.$)(tJ().root, b),
                        ref: t,
                        ...(0, P.getDataAttrFromProps)(p),
                        children: [
                            (0, l.jsx)(_.Bki, {
                                objectType: I.ky.Shortcut,
                                objectId: String(d.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != v ? v : 0,
                                children: (0, l.jsx)(g.Tw, {
                                    className: (0, s.$)(
                                        o,
                                        tJ().header,
                                        tJ().important,
                                    ),
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: C,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, l.jsx)(g.X9, {
                                        className: tJ().controls,
                                        carouselRef: T,
                                    }),
                                    headingVariant: m,
                                    withDescription: !!d.description,
                                }),
                            }),
                            (0, l.jsx)(g.wI, {
                                isShimmerVisible: a,
                                className: (0, s.$)(
                                    r,
                                    tJ().tabCarousel,
                                    tJ().important,
                                ),
                                elementId: h,
                                shimmer: (0, l.jsx)(g.nR, {
                                    isActive: i,
                                    className: (0, s.$)(
                                        r,
                                        tJ().tabCarousel,
                                        tJ().important,
                                    ),
                                }),
                                "aria-labelledby": C,
                                ...A,
                                children:
                                    null == c
                                        ? void 0
                                        : c.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, l.jsx)(
                                                  g.oz,
                                                  {
                                                      value: t.id,
                                                      "aria-label": t.title,
                                                      title: t.title,
                                                      covers: t.covers,
                                                      className: (0, s.$)(
                                                          tJ().tab,
                                                          tJ().important,
                                                      ),
                                                      withCovers: !0,
                                                  },
                                                  t.id,
                                              );
                                          }),
                            }),
                            L,
                        ],
                    });
                }),
                tq = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(tZ, { forwardRef: t, ...e }),
                );
            var tQ = a(69787),
                t0 = a.n(tQ);
            let t1 = (e) => {
                    var t;
                    let {
                            containerClassName: a,
                            meta: i,
                            data: s,
                            forwardRef: r,
                            isShimmerVisible: o,
                            isShimmerActive: c,
                            headingVariant: m,
                        } = e,
                        u = (0, n.useMemo)(() => {
                            if (o) {
                                var e;
                                return (0, g.q$)({
                                    className: t0().root,
                                    shimmerClassName: t0().shimmer,
                                    isActive: c,
                                    count:
                                        (null == (e = i.source)
                                            ? void 0
                                            : e.countWeb) || 10,
                                    minWidth: 30,
                                    maxWidth: 70,
                                });
                            }
                            return (0, l.jsx)("div", {
                                className: t0().root,
                                children:
                                    null == s
                                        ? void 0
                                        : s.items.map((e) =>
                                              (0, l.jsx)(
                                                  g.Tw,
                                                  {
                                                      titleLineClamp: 1,
                                                      title: e.data.title,
                                                      viewAllActionLink:
                                                          e.data
                                                              .viewAllActionLink,
                                                      headingVariant: m,
                                                  },
                                                  e.key,
                                              ),
                                          ),
                            });
                        }, [
                            null == s ? void 0 : s.items,
                            m,
                            c,
                            o,
                            null == (t = i.source) ? void 0 : t.countWeb,
                        ]);
                    return (0, l.jsx)("section", {
                        ref: r,
                        title: i.title,
                        className: a,
                        ...(0, d.Am)(d.e8.landing.ITEM_LIST),
                        children: u,
                    });
                },
                t3 = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(t1, { forwardRef: t, ...e }),
                );
            var t8 = a(40699),
                t6 = a.n(t8),
                t4 = a(88699),
                t9 = a.n(t4);
            let t2 = (0, r.PA)((e) => {
                    let {
                            title: t,
                            subtitle: a,
                            link: i,
                            testId: s,
                            icon: r,
                            covers: o,
                            navigateTo: c,
                        } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, _.Pjs)(),
                        u = (0, _.NKK)(),
                        { ref: b, intersectionPropertyId: p } = (0, _.nMI)(),
                        v = (0, n.useMemo)(() => {
                            if (0 !== o.length)
                                return (0, l.jsx)("div", {
                                    className: t9().covers,
                                    children: o.map((e, t) =>
                                        (0, l.jsx)(
                                            S.Paper,
                                            {
                                                className: t9().coverContainer,
                                                radius: "xs",
                                                ...(0, d.Am)(
                                                    d.e8.landing
                                                        .LIKES_HISTORY_COVERS,
                                                ),
                                                children: (0, l.jsx)(tp.Image, {
                                                    size: 80,
                                                    className: t9().cover,
                                                    src: e.uri,
                                                    fit: "cover",
                                                    withAvatarReplace: !0,
                                                }),
                                            },
                                            t,
                                        ),
                                    ),
                                });
                        }, [o]),
                        A = (0, n.useCallback)(() => {
                            u({ to: c });
                        }, [c, u]);
                    return (0, l.jsx)("div", {
                        ref: b,
                        "data-intersection-property-id": p,
                        className: t9().root,
                        ...(0, d.Am)(s),
                        children: (0, l.jsxs)(g.N_, {
                            className: t9().link,
                            href: i,
                            onClick: A,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: t9().start,
                                    children: [
                                        r,
                                        (0, l.jsxs)("div", {
                                            className: t9().textContainer,
                                            children: [
                                                (0, l.jsxs)(N.Heading, {
                                                    className: t9().title,
                                                    size: m ? "xs" : "m",
                                                    variant: "h2",
                                                    ...(0, d.Am)(
                                                        d.e8.landing
                                                            .LIKES_HISTORY_TITLE,
                                                    ),
                                                    children: [
                                                        t,
                                                        (0, l.jsx)(tb.Icon, {
                                                            className:
                                                                t9().titleIcon,
                                                            size: "xs",
                                                            variant:
                                                                "arrowRight",
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)(N.Caption, {
                                                    className: t9().subtitle,
                                                    size: "m",
                                                    variant: "div",
                                                    lineClamp: 1,
                                                    ...(0, d.Am)(
                                                        d.e8.landing
                                                            .LIKES_HISTORY_SUBTITLE,
                                                    ),
                                                    children: a,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                v,
                            ],
                        }),
                    });
                }),
                t7 = (e) => {
                    let { isActive: t } = e;
                    return (0, l.jsx)(to.Shimmer, {
                        isActive: t,
                        className: t9().root,
                        height: 82,
                    });
                },
                t5 = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            data: s,
                            ...r
                        } = e,
                        { formatMessage: o } = (0, h.A)(),
                        { favorites: c, history: m } = s || {},
                        u = (0, n.useMemo)(
                            () =>
                                c && m && !a
                                    ? [
                                          (0, l.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Playlist,
                                                  objectId: c.id,
                                                  objectPosX: 1,
                                                  objectPosY: 1,
                                                  objectsCount: 2,
                                                  children: (0, l.jsx)(t2, {
                                                      title: c.title,
                                                      subtitle: o(
                                                          {
                                                              id: "entity-names.number-of-tracks",
                                                          },
                                                          { counter: c.count },
                                                      ),
                                                      link: c.url,
                                                      navigateTo:
                                                          I.QT.PlaylistScreen,
                                                      testId: d.e8.landing
                                                          .LIKES_BLOCK,
                                                      icon: (0, l.jsx)(
                                                          S.Paper,
                                                          {
                                                              className:
                                                                  t6()
                                                                      .favoritesCoverContainer,
                                                              radius: "m",
                                                              children: (0,
                                                              l.jsx)(tp.Image, {
                                                                  className:
                                                                      t6()
                                                                          .favoritesCover,
                                                                  size: 80,
                                                                  src: c.cover
                                                                      .uri,
                                                                  fit: "cover",
                                                                  withAvatarReplace:
                                                                      !0,
                                                                  alt: c.title,
                                                              }),
                                                          },
                                                      ),
                                                      covers: c.trackCovers,
                                                  }),
                                              },
                                              c.id,
                                          ),
                                          (0, l.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Shortcut,
                                                  objectId: m.id,
                                                  objectPosX: 2,
                                                  objectPosY: 1,
                                                  objectsCount: 2,
                                                  children: (0, l.jsx)(t2, {
                                                      title: m.title,
                                                      subtitle:
                                                          m.artists.join(", "),
                                                      link: m.url,
                                                      navigateTo:
                                                          I.QT
                                                              .MusicHistoryScreen,
                                                      testId: d.e8.landing
                                                          .HISTORY_BLOCK,
                                                      icon: (0, l.jsx)(
                                                          S.Paper,
                                                          {
                                                              className:
                                                                  t6()
                                                                      .historyIconContainer,
                                                              radius: "m",
                                                              children: (0,
                                                              l.jsx)(tb.Icon, {
                                                                  className:
                                                                      t6()
                                                                          .historyIcon,
                                                                  variant:
                                                                      "history",
                                                                  size: "m",
                                                              }),
                                                          },
                                                      ),
                                                      covers: m.trackCovers,
                                                  }),
                                              },
                                              m.id,
                                          ),
                                      ]
                                    : [
                                          (0, l.jsx)(t7, { isActive: i }, 0),
                                          (0, l.jsx)(t7, { isActive: i }, 1),
                                      ],
                            [c, o, m, i, a],
                        );
                    return (0, l.jsx)("section", {
                        ref: t,
                        className: t6().root,
                        ...(0, P.getDataAttrFromProps)(r),
                        children: (0, l.jsx)(f.Carousel, {
                            className: t6().carousel,
                            itemClassName: t6().carouselItem,
                            children: u,
                        }),
                    });
                },
                ae = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(t5, { forwardRef: t, ...e }),
                );
            var at = a(55689),
                aa = a(75279),
                ai = a.n(aa);
            let al = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: c,
                        className: m,
                        ...u
                    } = e;
                    return (0, l.jsx)(g.OY, {
                        className: m,
                        ...u,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        itemClassName: ai().item,
                        showShimmerInfo: !1,
                        ref: t,
                        headingVariant: c,
                        ...(0, d.Am)(d.e8.landing.MIXES_BLOCK),
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e) =>
                                      (0, l.jsx)(
                                          at.NZ,
                                          {
                                              title: e.title,
                                              weblink: e.weblink,
                                              covers: e.covers,
                                              imagesLayoutType:
                                                  e.imagesLayoutType,
                                              headingVariant: "h3",
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                as = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(al, { forwardRef: t, ...e }),
                );
            var ar = a(47651),
                ao = a(30457),
                an = a(8475),
                ad = a.n(an);
            let ac = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: c,
                        className: m,
                        ...u
                    } = e;
                    return (0, l.jsx)(g.OY, {
                        className: m,
                        ...u,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        isShimmerWithSubcover: !0,
                        isShimmerCentered: !0,
                        shimmerClassName: ad().shimmer,
                        containerClassName: s,
                        headerClassName: r,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        itemClassName: ad().item,
                        showShimmerInfo: !0,
                        ref: t,
                        headingVariant: c,
                        ...(0, d.Am)(d.e8.landing.MIXES_MUSIC),
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) =>
                                      (0, l.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: n.items.length,
                                              children: (0, l.jsx)(
                                                  ao.Vf,
                                                  {
                                                      linkClassName: ad().item,
                                                      title: e.title,
                                                      weblink: e.weblink,
                                                      covers: e.covers,
                                                      captionVariant: "h3",
                                                  },
                                                  e.id,
                                              ),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                am = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(ac, { forwardRef: t, ...e }),
                );
            var au = a(10993),
                a_ = a.n(au),
                ag = a(44189),
                ab = a(70444),
                ap = a.n(ab);
            let av = (e) => {
                    let { isActive: t } = e;
                    return (0, l.jsx)(to.Shimmer, {
                        isActive: t,
                        className: ap().root,
                    });
                },
                aA = (0, r.PA)((e) => {
                    var t, a;
                    let { neuromusic: i } = e,
                        { from: r } = (0, _.fyy)(),
                        { isPlaying: o, togglePlay: c } = (0, _.Dx4)({
                            playContextParams: {
                                contextData: {
                                    type: y.K.Generative,
                                    meta: { id: i.stationId },
                                    from: r,
                                },
                                loadContextMeta: !0,
                            },
                        }),
                        m = (0, n.useCallback)(
                            (e) => {
                                (0, H.P)(e, ap().ripple), c();
                            },
                            [c],
                        ),
                        u = (0, n.useMemo)(() => {
                            var e, t;
                            return {
                                "--neuromusic-button-background":
                                    null == i || null == (e = i.style)
                                        ? void 0
                                        : e.backgroundColor,
                                "--neuromusic-button-color":
                                    null == i || null == (t = i.style)
                                        ? void 0
                                        : t.titleColor,
                            };
                        }, [
                            null == i || null == (t = i.style)
                                ? void 0
                                : t.backgroundColor,
                            null == i || null == (a = i.style)
                                ? void 0
                                : a.titleColor,
                        ]),
                        g = o
                            ? d.e8.landing.NEUROMUSIC_BLOCK_ITEM_PAUSE_ICON
                            : d.e8.landing.NEUROMUSIC_BLOCK_ITEM_PLAY_ICON;
                    return (0, l.jsx)(ag.Button, {
                        style: u,
                        withRipple: !1,
                        withHover: !1,
                        variant: "text",
                        onClick: m,
                        className: (0, s.$)(ap().root, ap().button),
                        ...(0, d.Am)(d.e8.landing.NEUROMUSIC_BLOCK_ITEM),
                        children: (0, l.jsxs)("div", {
                            className: ap().textContainer,
                            children: [
                                (0, l.jsx)(tb.Icon, {
                                    className: ap().icon,
                                    size: "xxs",
                                    variant: o ? "pause" : "play",
                                    ...(0, d.Am)(g),
                                }),
                                (0, l.jsx)(N.Caption, {
                                    className: ap().title,
                                    variant: "span",
                                    size: "s",
                                    weight: "bold",
                                    lineClamp: 1,
                                    children: i.title,
                                }),
                            ],
                        }),
                    });
                }),
                aC = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            className: m,
                            headingVariant: u,
                            ..._
                        } = e,
                        b = (0, n.useId)(),
                        p = (0, n.useRef)(null),
                        v = (0, n.useMemo)(
                            () =>
                                a
                                    ? Array.from({ length: 3 }, (e, t) =>
                                          (0, l.jsx)(av, { isActive: i }, t),
                                      )
                                    : null == c
                                      ? void 0
                                      : c.items.map((e, t) =>
                                            (0, l.jsx)(
                                                aA,
                                                { neuromusic: e },
                                                t,
                                            ),
                                        ),
                            [null == c ? void 0 : c.items, i, a],
                        );
                    return (0, l.jsxs)("section", {
                        ref: t,
                        className: (0, s.$)(a_().root, m),
                        ...(0, P.getDataAttrFromProps)(_),
                        children: [
                            (0, l.jsx)(g.Tw, {
                                className: o,
                                labeledForId: b,
                                title: d.title,
                                description: d.description,
                                controls: (0, l.jsx)(g.X9, {
                                    className: a_().controls,
                                    carouselRef: p,
                                }),
                                headingVariant: u,
                                withDescription: !!d.description,
                            }),
                            (0, l.jsx)(f.Carousel, {
                                ref: p,
                                itemClassName: (0, s.$)(
                                    a_().item,
                                    a_().important,
                                ),
                                className: r,
                                "aria-labelledby": b,
                                children: v,
                            }),
                        ],
                    });
                },
                aT = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(aC, { forwardRef: t, ...e }),
                ),
                aI = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: d,
                        className: c,
                        ...m
                    } = e;
                    return (0, l.jsx)(g.OY, {
                        className: c,
                        ...m,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        ref: t,
                        headingVariant: d,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) => {
                                      switch (e.type) {
                                          case ex._.LIKED_PLAYLIST_ITEM:
                                              return (0, l.jsx)(
                                                  _.Bki,
                                                  {
                                                      objectType: I.ky.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount:
                                                          n.items.length,
                                                      children: (0, l.jsx)(
                                                          eJ.B6,
                                                          {
                                                              playlist: e.data,
                                                              contentLinesCount: 3,
                                                          },
                                                      ),
                                                  },
                                                  e.data.key,
                                              );
                                          case ex._.ALBUM_ITEM:
                                              return (0, l.jsx)(
                                                  _.Bki,
                                                  {
                                                      objectType: I.ky.Album,
                                                      objectId: String(
                                                          e.data.id,
                                                      ),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount:
                                                          n.items.length,
                                                      children: (0, l.jsx)(
                                                          eg.aX,
                                                          {
                                                              album: e.data,
                                                              contentLinesCount: 3,
                                                              releaseDateFormatter:
                                                                  _.mtR,
                                                          },
                                                      ),
                                                  },
                                                  e.data.id,
                                              );
                                          case ex._.ARTIST_ITEM:
                                              return (0, l.jsx)(
                                                  _.Bki,
                                                  {
                                                      objectType: I.ky.Artist,
                                                      objectId: String(
                                                          e.data.id,
                                                      ),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount:
                                                          n.items.length,
                                                      children: (0, l.jsx)(
                                                          eB.ao,
                                                          {
                                                              artist: e.data,
                                                              contentLinesCount: 3,
                                                          },
                                                      ),
                                                  },
                                                  e.data.id,
                                              );
                                          case ex._.WAVE_AGENT_ITEM:
                                              return (0, l.jsx)(
                                                  _.Bki,
                                                  {
                                                      objectType: I.ky.Wave,
                                                      objectId:
                                                          e.data.stationId,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount:
                                                          n.items.length,
                                                      children: (0, l.jsx)(
                                                          tV.yi,
                                                          { vibe: e.data },
                                                      ),
                                                  },
                                                  e.data.stationId,
                                              );
                                      }
                                  }),
                    });
                },
                ah = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(aI, { forwardRef: t, ...e }),
                ),
                aL = /^#[a-fA-F\d]{2}[a-fA-F\d]{2}[a-fA-F\d]{2}$/i;
            var ay = a(72310),
                aS = a.n(ay);
            let aN = (0, r.PA)((e) => {
                var t, a, i;
                let {
                        album: s,
                        releaseDate: r,
                        coverColor: o,
                        coverUri: m,
                    } = e,
                    u = null == s || null == (t = s.artists) ? void 0 : t[0],
                    { formatDate: b } = (0, h.A)(),
                    { trailer: p } = (0, _.Pjs)(),
                    { ref: v, intersectionPropertyId: A } = (0, _.nMI)(),
                    C = (0, _.ZpR)(
                        null != (i = null == u ? void 0 : u.url) ? i : "",
                    ),
                    T = (0, j.SA)({ artist: u, callback: C }),
                    L = (0, _.Ftl)(),
                    k = (0, E.r_)(s.type),
                    x = (0, _.PT7)(),
                    { from: R, utmLink: P } = (0, _.fyy)({
                        contextId: s.id,
                        contextType: y.K.Album,
                    }),
                    f = (0, _.NKK)(),
                    w = (0, c.c)((e) => {
                        f({
                            to: I.QT.ArtistScreen,
                            objectId: null == u ? void 0 : u.id,
                            objectType: I.ky.Artist,
                        }),
                            T(e);
                    }),
                    K = (0, c.c)((e) => {
                        if (x()) {
                            e.stopPropagation(), e.preventDefault();
                            return;
                        }
                        (null == s ? void 0 : s.id) &&
                            (e.stopPropagation(),
                            p.openAlbumTrailer(s.id),
                            L(I.ky.Album, String(s.id)));
                    }),
                    O = (0, n.useMemo)(() => {
                        var e;
                        if (
                            null == s || null == (e = s.trailer)
                                ? void 0
                                : e.isAvailable
                        )
                            return (0, l.jsx)(g.cv, {
                                children: (0, l.jsx)(g.kJ, {
                                    variant: "text",
                                    iconSize: "xs",
                                    className: aS().trailerButton,
                                    withRipple: !1,
                                    onClick: K,
                                }),
                            });
                    }, [
                        null == s || null == (a = s.trailer)
                            ? void 0
                            : a.isAvailable,
                        K,
                    ]),
                    M = (0, n.useMemo)(() => {
                        if (r)
                            return (0, l.jsxs)(N.Caption, {
                                variant: "span",
                                type: "text",
                                size: "s",
                                weight: "medium",
                                className: aS().descriptionContainer,
                                children: [
                                    (0, l.jsx)(N.Caption, {
                                        variant: "span",
                                        type: "text",
                                        size: "s",
                                        weight: "medium",
                                        children: k.toLowerCase(),
                                    }),
                                    (0, l.jsx)(N.Caption, {
                                        variant: "span",
                                        type: "text",
                                        size: "s",
                                        weight: "medium",
                                        children: " • ",
                                    }),
                                    (0, l.jsx)(N.Caption, {
                                        variant: "span",
                                        type: "text",
                                        size: "s",
                                        weight: "medium",
                                        children: b(new Date(r), (0, _.QB4)()),
                                    }),
                                ],
                            });
                    }, [k, b, r]);
                return (0, l.jsxs)("div", {
                    className: aS().root,
                    ref: v,
                    "data-intersection-property-id": A,
                    children: [
                        (0, l.jsxs)("div", {
                            className: aS().cover,
                            children: [
                                (0, l.jsxs)(S.Paper, {
                                    className: aS().coverImage,
                                    radius: "round",
                                    withShadow: !0,
                                    children: [
                                        (0, l.jsx)(g.BW, {
                                            className: aS().image,
                                            src: m,
                                            alt: null == u ? void 0 : u.name,
                                            size: 300,
                                            fit: "cover",
                                            withAvatarReplace: !0,
                                            "aria-hidden": !0,
                                        }),
                                        (0, l.jsx)("div", {
                                            className: aS().fade,
                                            style: {
                                                background: ((e) => {
                                                    (e && aL.test(e)) ||
                                                        (e = "#000000");
                                                    let {
                                                        r: t,
                                                        g: a,
                                                        b: i,
                                                    } = (0, _.E2N)(e);
                                                    return "linear-gradient(180.14deg, rgba("
                                                        .concat(t, ", ")
                                                        .concat(a, ", ")
                                                        .concat(
                                                            i,
                                                            ", 0) 30.88%, rgba(",
                                                        )
                                                        .concat(t, ", ")
                                                        .concat(a, ", ")
                                                        .concat(
                                                            i,
                                                            ", 0.4) 70.8%, rgba(",
                                                        )
                                                        .concat(t, ", ")
                                                        .concat(a, ", ")
                                                        .concat(
                                                            i,
                                                            ", 0.9) 80.88%)",
                                                        );
                                                })(
                                                    null == s
                                                        ? void 0
                                                        : s.averageColor,
                                                ),
                                            },
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(g.N_, {
                                    className: aS().fade,
                                    "aria-label": null == u ? void 0 : u.name,
                                    href: null == u ? void 0 : u.url,
                                    onClick: w,
                                }),
                                (0, l.jsx)(j.iQ, {
                                    className: aS().artists,
                                    lineClamp: 2,
                                    artists: null == s ? void 0 : s.artists,
                                    linkClassName: aS().artistLink,
                                    captionClassName: aS().artistCaption,
                                    variant: "breakWord",
                                }),
                            ],
                        }),
                        (0, l.jsx)(J, {
                            className: aS().card,
                            album: s,
                            albumUrl: s.url,
                            from: R,
                            utmLink: P,
                            trailerButton: O,
                            description: M,
                            entityName: k,
                            coverColor: o,
                            ...(0, d.Am)(d.Kq.newRelease.NEW_RELEASE_CARD),
                        }),
                    ],
                });
            });
            var aE = a(29491),
                aj = a.n(aE);
            let ak = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: a,
                            isShimmerVisible: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            headingVariant: m,
                            className: u,
                            ...b
                        } = e,
                        { objectsCount: p } = (0, _.N8n)(),
                        v = (0, n.useId)(),
                        A = (0, n.useRef)(null),
                        { theme: C } = (0, _.DPo)(),
                        T = (0, n.useMemo)(
                            () =>
                                i
                                    ? ((e) =>
                                          Array.from({ length: 6 }, (t, a) =>
                                              (0, l.jsxs)(
                                                  "div",
                                                  {
                                                      children: [
                                                          (0, l.jsx)(
                                                              to.Shimmer,
                                                              {
                                                                  isActive: e,
                                                                  radius: "round",
                                                                  className:
                                                                      aj()
                                                                          .shimmerImage,
                                                              },
                                                          ),
                                                          (0, l.jsx)(
                                                              to.Shimmer,
                                                              {
                                                                  isActive: e,
                                                                  radius: "l",
                                                                  className:
                                                                      aj()
                                                                          .shimmerCard,
                                                              },
                                                          ),
                                                      ],
                                                  },
                                                  a,
                                              ),
                                          ))(a)
                                    : null == c
                                      ? void 0
                                      : c.items.map((e, t) => {
                                            let a =
                                                e.coverUriWithPlaceholder(C);
                                            return (0, l.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Album,
                                                    objectId: String(
                                                        e.album.id,
                                                    ),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount:
                                                        c.items.length,
                                                    children: (0, l.jsx)(aN, {
                                                        ...e,
                                                        coverUri: a,
                                                    }),
                                                },
                                                e.album.id,
                                            );
                                        }),
                            [null == c ? void 0 : c.items, a, i, C],
                        );
                    return (0, l.jsxs)("section", {
                        ref: t,
                        className: (0, s.$)(aj().root, u),
                        ...(0, P.getDataAttrFromProps)(b),
                        children: [
                            (0, l.jsx)(_.Bki, {
                                objectType: I.ky.Shortcut,
                                objectId: String(d.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != p ? p : 0,
                                children: (0, l.jsx)(g.Tw, {
                                    className: o,
                                    labeledForId: v,
                                    title: d.title,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, l.jsx)(g.X9, {
                                        className: aj().controls,
                                        carouselRef: A,
                                    }),
                                    headingVariant: m,
                                }),
                            }),
                            (0, l.jsx)(f.Carousel, {
                                ref: A,
                                itemClassName: (0, s.$)(
                                    aj().item,
                                    aj().important,
                                ),
                                className: r,
                                "aria-labelledby": v,
                                children: T,
                            }),
                        ],
                    });
                }),
                ax = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(ak, { forwardRef: t, ...e }),
                );
            var aR = a(10633),
                aP = a(86248),
                af = a(65255),
                aw = a(88411),
                aK = a.n(aw);
            let aO = (e) => {
                    let {
                            forwardRef: t,
                            containerClassName: a,
                            id: i,
                            meta: r,
                            ...o
                        } = e,
                        { formatMessage: n } = (0, h.A)();
                    return (0, l.jsx)("section", {
                        ref: t,
                        className: (0, s.$)(aK().root, a),
                        ...(0, P.getDataAttrFromProps)(o),
                        children: (0, l.jsx)(
                            _.Bki,
                            {
                                objectType: I.ky.Text,
                                objectId: i,
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                children: (0, l.jsx)(af.Fn, {
                                    textButton: n({
                                        id: "interface-actions.further",
                                    }),
                                    meta: r,
                                }),
                            },
                            i,
                        ),
                    });
                },
                aM = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(aO, { forwardRef: t, ...e }),
                ),
                aD = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: d,
                        className: c,
                        ...m
                    } = e;
                    return (0, l.jsx)(g.OY, {
                        className: c,
                        ...m,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        headerClassName: r,
                        containerClassName: s,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        ref: t,
                        headingVariant: d,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) =>
                                      (0, l.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Playlist,
                                              objectId: e.data.playlist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: n.items.length,
                                              children: (0, l.jsx)(eJ.B6, {
                                                  playlist: e.data.playlist,
                                                  customDescription:
                                                      e.data.description,
                                                  contentLinesCount: 4,
                                              }),
                                          },
                                          e.data.playlist.key,
                                      ),
                                  ),
                    });
                },
                aB = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(aD, { forwardRef: t, ...e }),
                );
            var aV = a(99857),
                aU = a(2865),
                aY = a(66685),
                aG = a.n(aY);
            let aW = { src: "/_next/static/media/heart.602389ae.png" };
            var aX = a(99046),
                aH = a.n(aX);
            let az = (0, r.PA)(() => {
                    var e, t;
                    let { vibe: a } = (0, _.Pjs)(),
                        { pageId: i } = (0, _.$au)(),
                        { blockIdForFrom: s } = (0, _.N8n)(),
                        r = (0, _.ZpR)(_.Zyd.main.href),
                        { formatMessage: o } = (0, h.A)(),
                        { isFreemium: c } = (0, _.XCI)(),
                        m = o({ id: "vibe-actions.play-vibe" }),
                        { isPlaying: u, togglePlay: b } = (0, _.B0S)({
                            seeds:
                                null !=
                                (t = null == (e = a.meta) ? void 0 : e.seeds)
                                    ? t
                                    : [],
                            pageIdForFrom: i,
                            blockIdForFrom: s,
                        });
                    (0, n.useEffect)(
                        () => () => {
                            a.reset();
                        },
                        [a],
                    );
                    let p = (0, n.useCallback)(() => {
                            c || (u || b(), r());
                        }, [c, u, r, b]),
                        v = (0, n.useCallback)(
                            () =>
                                (0, l.jsx)(ag.Button, {
                                    withRipple: !0,
                                    radius: "xxxl",
                                    size: "l",
                                    color: "primary",
                                    className: aH().myWaveButton,
                                    "aria-label": m,
                                    onClick: p,
                                    ...(0, d.Am)(
                                        d.e8.landing
                                            .COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_MY_VIBE_BUTTON,
                                    ),
                                    children: (0, l.jsx)(N.Caption, {
                                        variant: "span",
                                        size: "m",
                                        children: (0, l.jsx)(N.Caption, {
                                            variant: "span",
                                            size: "m",
                                            weight: "medium",
                                            className: aH().myWaveButtonText,
                                            children: m,
                                        }),
                                    }),
                                }),
                            [m, p],
                        );
                    return (
                        a.isNeededToLoad && (0, n.use)(a.getLastVibe()),
                        (0, l.jsxs)("div", {
                            className: aH().root,
                            ...(0, d.Am)(
                                d.e8.landing
                                    .COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK,
                            ),
                            children: [
                                (0, l.jsx)(tp.Image, {
                                    src: aW.src,
                                    className: aH().image,
                                    ...(0, d.Am)(
                                        d.e8.landing
                                            .COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_IMAGE,
                                    ),
                                }),
                                (0, l.jsx)(N.Heading, {
                                    variant: "h3",
                                    size: "xs",
                                    className: aH().header,
                                    ...(0, d.Am)(
                                        d.e8.landing
                                            .COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TITLE,
                                    ),
                                    children: (0, l.jsx)(L.A, {
                                        id: "collection.empty-liked-tracks-title",
                                    }),
                                }),
                                (0, l.jsx)(N.Caption, {
                                    variant: "div",
                                    size: "l",
                                    weight: "normal",
                                    className: aH().text,
                                    ...(0, d.Am)(
                                        d.e8.landing
                                            .COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TEXT,
                                    ),
                                    children: (0, l.jsx)(L.A, {
                                        id: "collection.empty-liked-tracks-text",
                                    }),
                                }),
                                (0, l.jsx)(g.SU, {
                                    isEnabled: c,
                                    placement: "top",
                                    textVariant: "vibe",
                                    renderChildren: v,
                                }),
                            ],
                        })
                    );
                }),
                aF = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            tracksContainerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            type: m,
                            headingVariant: u,
                            className: b,
                            ...p
                        } = e,
                        { from: v, utmLink: A } = (0, _.fyy)({
                            contextId: null == c ? void 0 : c.playlist.id,
                            contextType: y.K.Playlist,
                        }),
                        {
                            trailer: C,
                            settings: { isMobile: S },
                        } = (0, _.Pjs)(),
                        N = (0, _.Ftl)(),
                        { formatMessage: E } = (0, h.A)(),
                        j = (null == c ? void 0 : c.totalItemsCount)
                            ? E(
                                  { id: "entity-names.number-of-tracks" },
                                  {
                                      counter:
                                          null == c
                                              ? void 0
                                              : c.totalItemsCount,
                                  },
                              )
                            : d.description,
                        k = [
                            T.t.COLLECTION_PLAYLIST_WITH_LIKES,
                            T.t.SMART_OPEN_PLAYLIST,
                        ].includes(m),
                        x = d.coverStyle !== aV.z.NONE,
                        R = (e, t) =>
                            c
                                ? {
                                      contextData: {
                                          type: y.K.Playlist,
                                          meta: {
                                              id: c.playlist.id,
                                              uuid: c.playlist.uuid,
                                          },
                                          from: v,
                                          utmLink: A,
                                          completeEntitesDataByLoadedMeta: !0,
                                      },
                                      queueParams: { index: t, entityId: e },
                                      loadContextMeta: !0,
                                      entitiesData: c.items.map((e) =>
                                          (0, aU.li)(e.id, e.albumId),
                                      ),
                                  }
                                : {
                                      contextData: {
                                          type: y.K.Playlist,
                                          meta: { id: "" },
                                          from: v,
                                      },
                                  },
                        P = (0, n.useCallback)(() => {
                            (null == c ? void 0 : c.playlist.id) &&
                                (C.setUtmLink(A),
                                C.openPlaylistTrailer(
                                    null == c ? void 0 : c.playlist.id,
                                ),
                                N(I.ky.Playlist, String(c.playlist.id)));
                        }, [C, null == c ? void 0 : c.playlist.id, N, A]),
                        f = (0, n.useMemo)(() => {
                            if (null == c ? void 0 : c.withRewindTrailerButton)
                                return S
                                    ? (0, l.jsx)(g.kJ, {
                                          className: aG().trailer,
                                          radius: "round",
                                          size: "s",
                                          iconSize: "xs",
                                          onClick: P,
                                      })
                                    : (0, l.jsx)(g.kJ, {
                                          size: "s",
                                          radius: "xxxl",
                                          iconSize: "xxs",
                                          className: aG().trailer,
                                          onClick: P,
                                          children: (0, l.jsx)(L.A, {
                                              id: "entity-names.trailer",
                                          }),
                                      });
                        }, [
                            null == c ? void 0 : c.withRewindTrailerButton,
                            S,
                            P,
                        ]);
                    return (null == c
                        ? void 0
                        : c.playlist.isFavouritePlaylist) &&
                        (null == c ? void 0 : c.totalItemsCount) === 0 &&
                        (null == c ? void 0 : c.canShowEmptyBlock)
                        ? (0, l.jsx)(az, {})
                        : (0, l.jsx)(g.$2, {
                              shimmer: (0, l.jsx)(g.DS, {
                                  variant: _.Xjt.PLAYLIST,
                                  isActive: i,
                              }),
                              maxColumnsCount: g.DI.TWO,
                              itemsCountPerColumn: 4,
                              className: (0, s.$)(aG().root, b),
                              isShimmerVisible: a,
                              isShimmerActive: i,
                              blockHeaderClassName: o,
                              carouselClassName: r,
                              blockHeaderTitle: d.title,
                              blockHeaderCoverUrl:
                                  null == c
                                      ? void 0
                                      : c.getCoverUri(d.coverStyle),
                              blockHeaderDescription: j,
                              viewAllActionLink:
                                  null == c ? void 0 : c.playlist.url,
                              ref: t,
                              blockHeaderHeadingVariant: u,
                              additionalControl: f,
                              withBlockHeaderDescription: k,
                              withBlockHeaderCover: x,
                              ...p,
                              children:
                                  null == c
                                      ? void 0
                                      : c.items.map((e, t) => {
                                            let {
                                                objectPosX: a,
                                                objectPosY: i,
                                                objectsCount: s,
                                            } = (0, _.$tp)({
                                                index: t,
                                                count: c.items.length,
                                            });
                                            return (0, l.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Track,
                                                    objectId: e.id,
                                                    objectPosX: a,
                                                    objectPosY: i,
                                                    objectsCount: s,
                                                    children: e.isTrackNonMusic
                                                        ? (0, l.jsx)(ed.Kd, {
                                                              track: e,
                                                              playContextParams:
                                                                  R(e.id, t),
                                                              withPodcastName:
                                                                  !0,
                                                              withTimeLeftText:
                                                                  !1,
                                                          })
                                                        : (0, l.jsx)(ed.Kt, {
                                                              track: e,
                                                              playContextParams:
                                                                  R(e.id, t),
                                                          }),
                                                },
                                                e.id,
                                            );
                                        }),
                          });
                }),
                a$ = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(aF, { forwardRef: t, ...e }),
                );
            var aJ = a(59546),
                aZ = a(79899),
                aq = a(60030),
                aQ = a(14211),
                a0 = a.n(aQ);
            let a1 = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: a,
                            isShimmerVisible: i,
                            data: r,
                            meta: o,
                            isLoaded: c,
                            headerClassName: m,
                            setIsNeededToLoad: u,
                            tracksContainerClassName: b,
                            className: p,
                            ...v
                        } = e,
                        { formatMessage: A } = (0, h.A)(),
                        {
                            search: { history: C },
                        } = (0, _.Pjs)(),
                        T = (0, aq.df)(),
                        y = !(null == r ? void 0 : r.items.length) && c;
                    return ((0, n.useLayoutEffect)(
                        () => (
                            C.shouldUpdateHistory &&
                                (u(), C.setShouldUpdateHistory(!1)),
                            () => {
                                C.hasCleared && u(), C.reset();
                            }
                        ),
                        [C, u],
                    ),
                    y || C.hasCleared)
                        ? (0, l.jsx)("div", {
                              ref: t,
                              className: (0, s.$)(a0().root, a0().fallback),
                              ...(0, P.getDataAttrFromProps)(v),
                              ...(0, d.Am)(d.e8.landing.SEARCH_HISTORY_EMPTY),
                              children: (0, l.jsx)(N.Caption, {
                                  variant: "span",
                                  type: "text",
                                  size: "l",
                                  weight: "normal",
                                  children: (0, l.jsx)(L.A, {
                                      id: "search.recent-requests-fallback",
                                  }),
                              }),
                          })
                        : (0, l.jsxs)("div", {
                              ref: t,
                              className: a0().root,
                              ...(0, P.getDataAttrFromProps)(v),
                              ...(0, d.Am)(d.e8.landing.SEARCH_HISTORY),
                              children: [
                                  (0, l.jsx)(g.$2, {
                                      className: p,
                                      shimmer: (0, l.jsx)(g.RJ, {
                                          isActive: a,
                                      }),
                                      isShimmerActive: a,
                                      isShimmerVisible: i,
                                      itemsCountPerColumn: 5,
                                      maxColumnsCount: g.DI.TWO,
                                      blockHeaderClassName: m,
                                      carouselClassName: b,
                                      blockHeaderTitle: o.title,
                                      blockHeaderDescription: o.description,
                                      viewAllActionLink: o.viewAllActionLink,
                                      children:
                                          null == r
                                              ? void 0
                                              : r.items.map((e, t) => {
                                                    var a, i;
                                                    let {
                                                        objectPosX: s,
                                                        objectPosY: o,
                                                        objectsCount: n,
                                                    } = (0, _.$tp)({
                                                        index: t,
                                                        count: r.items.length,
                                                        itemsCountPerColumn: 5,
                                                        showedItemsCountInBlock: 10,
                                                    });
                                                    switch (e.type) {
                                                        case ex._
                                                            .NON_MUSIC_ALBUM_ITEM:
                                                        case ex._.ALBUM_ITEM:
                                                            return (0, l.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType:
                                                                        I.ky
                                                                            .Album,
                                                                    objectId:
                                                                        String(
                                                                            e
                                                                                .data
                                                                                .id,
                                                                        ),
                                                                    objectPosX:
                                                                        s,
                                                                    objectPosY:
                                                                        o,
                                                                    objectsCount:
                                                                        n,
                                                                    children:
                                                                        (0,
                                                                        l.jsx)(
                                                                            eg.M_,
                                                                            {
                                                                                album: e.data,
                                                                            },
                                                                        ),
                                                                },
                                                                e.data.getKey(
                                                                    t,
                                                                ),
                                                            );
                                                        case ex._.ARTIST_ITEM:
                                                            return (0, l.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType:
                                                                        I.ky
                                                                            .Artist,
                                                                    objectId:
                                                                        e.data
                                                                            .id,
                                                                    objectPosX:
                                                                        s,
                                                                    objectPosY:
                                                                        o,
                                                                    objectsCount:
                                                                        n,
                                                                    children:
                                                                        (0,
                                                                        l.jsx)(
                                                                            eB.cz,
                                                                            {
                                                                                description:
                                                                                    A(
                                                                                        {
                                                                                            id: "entity-names.singer",
                                                                                        },
                                                                                    ),
                                                                                artist: e.data,
                                                                            },
                                                                        ),
                                                                },
                                                                e.data.getKey(
                                                                    t,
                                                                ),
                                                            );
                                                        case ex._.TRACK_ITEM:
                                                            return (0, l.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType:
                                                                        I.ky
                                                                            .Track,
                                                                    objectId:
                                                                        e.data
                                                                            .id,
                                                                    objectPosX:
                                                                        s,
                                                                    objectPosY:
                                                                        o,
                                                                    objectsCount:
                                                                        n,
                                                                    children:
                                                                        (0,
                                                                        l.jsx)(
                                                                            ed.c8,
                                                                            {
                                                                                track: e.data,
                                                                            },
                                                                        ),
                                                                },
                                                                e.data.getKey(
                                                                    t,
                                                                ),
                                                            );
                                                        case ex._
                                                            .LIKED_PLAYLIST_ITEM:
                                                            return (0, l.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType:
                                                                        I.ky
                                                                            .Playlist,
                                                                    objectId:
                                                                        e.data
                                                                            .id,
                                                                    objectPosX:
                                                                        s,
                                                                    objectPosY:
                                                                        o,
                                                                    objectsCount:
                                                                        n,
                                                                    children:
                                                                        (0,
                                                                        l.jsx)(
                                                                            eJ.vf,
                                                                            {
                                                                                playlist:
                                                                                    e.data,
                                                                            },
                                                                        ),
                                                                },
                                                                e.data.getKey(
                                                                    t,
                                                                ),
                                                            );
                                                        case ex._.WAVE_ITEM:
                                                            return (0, l.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType:
                                                                        I.ky
                                                                            .Wave,
                                                                    objectId:
                                                                        null !=
                                                                        (a =
                                                                            e
                                                                                .data
                                                                                .vibe
                                                                                .seeds[0])
                                                                            ? a
                                                                            : "",
                                                                    objectPosX:
                                                                        s,
                                                                    objectPosY:
                                                                        o,
                                                                    objectsCount:
                                                                        n,
                                                                    children:
                                                                        (0,
                                                                        l.jsx)(
                                                                            tV.H2,
                                                                            {
                                                                                vibe: e
                                                                                    .data
                                                                                    .vibe,
                                                                                cover: e
                                                                                    .data
                                                                                    .cover,
                                                                                description:
                                                                                    e.data.vibe.getDescription(
                                                                                        A(
                                                                                            {
                                                                                                id: "entity-names.my-vibe",
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                            },
                                                                        ),
                                                                },
                                                                e.data.vibe.getKey(
                                                                    t,
                                                                ),
                                                            );
                                                        case ex._
                                                            .WAVE_AGENT_ITEM:
                                                            return (0, l.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType:
                                                                        I.ky
                                                                            .Wave,
                                                                    objectId:
                                                                        null !=
                                                                        (i =
                                                                            e
                                                                                .data
                                                                                .seeds[0])
                                                                            ? i
                                                                            : "",
                                                                    objectPosX:
                                                                        s,
                                                                    objectPosY:
                                                                        o,
                                                                    objectsCount:
                                                                        n,
                                                                    children:
                                                                        (0,
                                                                        l.jsx)(
                                                                            tV.H2,
                                                                            {
                                                                                vibe: e.data,
                                                                                description:
                                                                                    e.data.getDescription(
                                                                                        A(
                                                                                            {
                                                                                                id: "entity-names.my-vibe",
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                agentVariant:
                                                                                    tV
                                                                                        .hl
                                                                                        .SMALL,
                                                                            },
                                                                        ),
                                                                },
                                                                e.data.getKey(
                                                                    t,
                                                                ),
                                                            );
                                                        case ex._.CLIP_ITEM:
                                                            if (!T) return null;
                                                            return (0, l.jsx)(
                                                                eI.Nk,
                                                                {
                                                                    clip: e.data,
                                                                },
                                                                e.data.clipId,
                                                            );
                                                        default:
                                                            return null;
                                                    }
                                                }),
                                  }),
                                  c &&
                                      (0, l.jsx)(ag.Button, {
                                          onClick: C.clear,
                                          className: a0().button,
                                          radius: "xxxl",
                                          variant: "default",
                                          size: "default",
                                          ...(0, d.Am)(
                                              d.e8.landing
                                                  .SEARCH_HISTORY_CLEAR_BUTTON,
                                          ),
                                          children: (0, l.jsx)(L.A, {
                                              id: "search.clear-history",
                                          }),
                                      }),
                              ],
                          });
                }),
                a3 = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(a1, { forwardRef: t, ...e }),
                );
            var a8 = a(99419),
                a6 = a.n(a8);
            let a4 = (e) => {
                    var t, a, i, s, r, o, d, c, m;
                    let {
                            containerClassName: u,
                            meta: g,
                            data: b,
                            forwardRef: p,
                            headingVariant: v = "h2",
                            ...A
                        } = e,
                        C = (0, _.ZpR)(
                            null != (m = null == b ? void 0 : b.weblink)
                                ? m
                                : "",
                        ),
                        { theme: T } = (0, _.DPo)(),
                        I =
                            T === _.Sxu.Light
                                ? null == b || null == (t = b.lightTheme)
                                    ? void 0
                                    : t.imageUrl
                                : null == b || null == (a = b.darkTheme)
                                  ? void 0
                                  : a.imageUrl,
                        h = (0, n.useMemo)(() => {
                            var e, t;
                            return {
                                "--text-color":
                                    T === _.Sxu.Light
                                        ? null == b ||
                                          null == (e = b.lightTheme)
                                            ? void 0
                                            : e.textColor
                                        : null == b || null == (t = b.darkTheme)
                                          ? void 0
                                          : t.textColor,
                            };
                        }, [
                            T,
                            null == b || null == (i = b.darkTheme)
                                ? void 0
                                : i.textColor,
                            null == b || null == (s = b.lightTheme)
                                ? void 0
                                : s.textColor,
                        ]),
                        L = (0, n.useMemo)(() => {
                            var e, t, a, i;
                            return {
                                "--button-color":
                                    T === _.Sxu.Light
                                        ? null == b ||
                                          null == (e = b.lightTheme)
                                            ? void 0
                                            : e.buttonColor
                                        : null == b || null == (t = b.darkTheme)
                                          ? void 0
                                          : t.buttonColor,
                                "--button-text-color":
                                    T === _.Sxu.Light
                                        ? null == b ||
                                          null == (a = b.lightTheme)
                                            ? void 0
                                            : a.buttonTextColor
                                        : null == b || null == (i = b.darkTheme)
                                          ? void 0
                                          : i.buttonTextColor,
                            };
                        }, [
                            T,
                            null == b || null == (r = b.darkTheme)
                                ? void 0
                                : r.buttonColor,
                            null == b || null == (o = b.lightTheme)
                                ? void 0
                                : o.buttonColor,
                            null == b || null == (d = b.darkTheme)
                                ? void 0
                                : d.buttonTextColor,
                            null == b || null == (c = b.lightTheme)
                                ? void 0
                                : c.buttonTextColor,
                        ]);
                    return (0, l.jsx)("section", {
                        ref: p,
                        title: g.title,
                        className: u,
                        ...(0, P.getDataAttrFromProps)(A),
                        children: (0, l.jsxs)("div", {
                            className: a6().root,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: a6().actions,
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: a6().textContainer,
                                            children: [
                                                !!(null == b
                                                    ? void 0
                                                    : b.title) &&
                                                    (0, l.jsx)(N.Heading, {
                                                        weight: "black",
                                                        size: "xl",
                                                        className:
                                                            a6().textColor,
                                                        lineClamp: 2,
                                                        variant: v,
                                                        style: h,
                                                        children:
                                                            null == b
                                                                ? void 0
                                                                : b.title,
                                                    }),
                                                !!(null == b
                                                    ? void 0
                                                    : b.subtitle) &&
                                                    (0, l.jsx)(N.Caption, {
                                                        className:
                                                            a6().textColor,
                                                        variant: "span",
                                                        type: "text",
                                                        size: "l",
                                                        weight: "medium",
                                                        lineClamp: 2,
                                                        style: h,
                                                        children:
                                                            null == b
                                                                ? void 0
                                                                : b.subtitle,
                                                    }),
                                            ],
                                        }),
                                        !!(null == b ? void 0 : b.weblink) &&
                                            !!(null == b
                                                ? void 0
                                                : b.buttonTitle) &&
                                            (0, l.jsx)(ag.Button, {
                                                color: "primary",
                                                radius: "xxxl",
                                                className: a6().button,
                                                role: "link",
                                                onClick: C,
                                                style: L,
                                                children: (0, l.jsx)(
                                                    N.Caption,
                                                    {
                                                        variant: "span",
                                                        type: "controls",
                                                        size: "m",
                                                        weight: "medium",
                                                        children:
                                                            null == b
                                                                ? void 0
                                                                : b.buttonTitle,
                                                    },
                                                ),
                                            }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: a6().imageContainer,
                                    children: (0, l.jsx)(tp.Image, {
                                        src:
                                            I ||
                                            (null == b ? void 0 : b.imageUrl),
                                        withAvatarReplace: !0,
                                        fit: "cover",
                                        size: 300,
                                        withFallback: !1,
                                        className: a6().image,
                                        withLoadingIndicator: !1,
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                a9 = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(a4, { forwardRef: t, ...e }),
                );
            var a2 = a(19303),
                a7 = a.n(a2);
            let a5 = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            headingVariant: m,
                            className: _,
                            ...b
                        } = e,
                        p = (0, n.useId)(),
                        v = (0, u.useTabsState)(0),
                        A = (0, n.useRef)(null),
                        C = (0, n.useId)(),
                        T = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(tK.R, {
                                          isActive: i,
                                          ref: A,
                                          containerClassName: r,
                                          ariaLabelledBy: ""
                                              .concat(p, " ")
                                              .concat(p, "-description"),
                                          length: 9,
                                      })
                                    : null == c
                                      ? void 0
                                      : c.items.map((e) =>
                                            (0, l.jsx)(
                                                u.TabPanel,
                                                {
                                                    name: e.tab.id,
                                                    value: v.value,
                                                    elementId: C,
                                                    children: (0, l.jsx)(tK.k, {
                                                        ref: A,
                                                        containerClassName: r,
                                                        ariaLabelledBy: ""
                                                            .concat(p, " ")
                                                            .concat(
                                                                p,
                                                                "-description",
                                                            ),
                                                        items: e.data,
                                                    }),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [
                                null == c ? void 0 : c.items,
                                a,
                                i,
                                r,
                                p,
                                v.value,
                                C,
                            ],
                        );
                    return (0, l.jsxs)("section", {
                        className: (0, s.$)(a7().root, _),
                        ref: t,
                        ...(0, P.getDataAttrFromProps)(b),
                        children: [
                            (0, l.jsx)(g.Tw, {
                                className: (0, s.$)(
                                    o,
                                    a7().header,
                                    a7().important,
                                ),
                                title: d.title,
                                description: d.description,
                                labeledForId: p,
                                viewAllActionLink: d.viewAllActionLink,
                                controls: (0, l.jsx)(g.X9, {
                                    className: a7().controls,
                                    carouselRef: A,
                                }),
                                headingVariant: m,
                                withDescription: !!d.description,
                            }),
                            (0, l.jsx)(g.wI, {
                                isShimmerVisible: a,
                                className: (0, s.$)(
                                    r,
                                    a7().tabCarousel,
                                    a7().important,
                                ),
                                elementId: C,
                                shimmer: (0, l.jsx)(g.zr, {
                                    isActive: i,
                                    className: (0, s.$)(
                                        r,
                                        a7().tabCarousel,
                                        a7().important,
                                    ),
                                    shimmerClassName: a7().tabShimmer,
                                }),
                                "aria-labelledby": p,
                                ...v,
                                children:
                                    null == c
                                        ? void 0
                                        : c.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, l.jsx)(
                                                  g.oz,
                                                  {
                                                      className: (0, s.$)(
                                                          a7().tab,
                                                          a7().important,
                                                      ),
                                                      value: t.id,
                                                      "aria-label": t.title,
                                                      title: t.title,
                                                  },
                                                  t.id,
                                              );
                                          }),
                            }),
                            T,
                        ],
                    });
                },
                ie = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(a5, { forwardRef: t, ...e }),
                );
            var it = a(38501),
                ia = a.n(it);
            let ii = (e) => {
                    var t;
                    let {
                            forwardRef: a,
                            isShimmerVisible: i,
                            isShimmerActive: r,
                            containerClassName: o,
                            headerClassName: d,
                            meta: c,
                            data: m,
                            headingVariant: b,
                            className: p,
                            ...v
                        } = e,
                        A = (0, n.useId)(),
                        C = (0, u.useTabsState)(0),
                        T = (0, n.useRef)(null),
                        h = (0, n.useId)(),
                        L = (0, n.useMemo)(
                            () =>
                                i
                                    ? (0, l.jsx)(f.Carousel, {
                                          ref: T,
                                          itemClassName: (0, s.$)(
                                              ia().item,
                                              ia().important,
                                          ),
                                          className: o,
                                          "aria-labelledby": ""
                                              .concat(A, " ")
                                              .concat(A, "-description"),
                                          children: (0, g.km)({
                                              isActive: r,
                                              centered: !0,
                                          }),
                                      })
                                    : null == m
                                      ? void 0
                                      : m.items.map((e) => {
                                            var t;
                                            return (0, l.jsx)(
                                                u.TabPanel,
                                                {
                                                    name: e.tab.id,
                                                    value: C.value,
                                                    elementId: h,
                                                    children: (0, l.jsx)(
                                                        f.Carousel,
                                                        {
                                                            ref: T,
                                                            itemClassName: (0,
                                                            s.$)(
                                                                ia().item,
                                                                ia().important,
                                                            ),
                                                            className: o,
                                                            "aria-labelledby":
                                                                ""
                                                                    .concat(
                                                                        A,
                                                                        " ",
                                                                    )
                                                                    .concat(
                                                                        A,
                                                                        "-description",
                                                                    ),
                                                            children:
                                                                null ==
                                                                (t = e.data)
                                                                    ? void 0
                                                                    : t.map(
                                                                          (
                                                                              t,
                                                                              a,
                                                                          ) => {
                                                                              var i;
                                                                              return (0,
                                                                              l.jsx)(
                                                                                  _.Bki,
                                                                                  {
                                                                                      objectType:
                                                                                          I
                                                                                              .ky
                                                                                              .Wave,
                                                                                      objectId:
                                                                                          t.stationId,
                                                                                      objectPosX:
                                                                                          a +
                                                                                          1,
                                                                                      objectPosY: 1,
                                                                                      objectsCount:
                                                                                          null ==
                                                                                          (i =
                                                                                              e.data)
                                                                                              ? void 0
                                                                                              : i.length,
                                                                                      children:
                                                                                          (0,
                                                                                          l.jsx)(
                                                                                              tV.yi,
                                                                                              {
                                                                                                  vibe: t,
                                                                                              },
                                                                                          ),
                                                                                  },
                                                                                  t.stationId,
                                                                              );
                                                                          },
                                                                      ),
                                                        },
                                                    ),
                                                },
                                                e.tab.id,
                                            );
                                        }),
                            [
                                null == m ? void 0 : m.items,
                                i,
                                r,
                                o,
                                A,
                                C.value,
                                h,
                            ],
                        );
                    return (0, l.jsxs)("section", {
                        className: (0, s.$)(ia().root, p),
                        ref: a,
                        ...(0, P.getDataAttrFromProps)(v),
                        children: [
                            (0, l.jsx)(g.Tw, {
                                className: (0, s.$)(
                                    d,
                                    ia().header,
                                    ia().important,
                                ),
                                title: c.title,
                                description: c.description,
                                labeledForId: A,
                                viewAllActionLink: c.viewAllActionLink,
                                controls: (0, l.jsx)(g.X9, {
                                    className: ia().controls,
                                    carouselRef: T,
                                }),
                                headingVariant: b,
                                withDescription: !!c.description,
                            }),
                            (0, l.jsx)(g.wI, {
                                isShimmerVisible: i,
                                className: (0, s.$)(
                                    o,
                                    ia().tabCarousel,
                                    ia().important,
                                ),
                                elementId: h,
                                shimmer: (0, l.jsx)(g.zr, {
                                    isActive: r,
                                    className: (0, s.$)(
                                        o,
                                        ia().tabCarousel,
                                        ia().important,
                                    ),
                                    shimmerClassName: ia().tabShimmer,
                                }),
                                "aria-labelledby": A,
                                ...C,
                                children:
                                    null == m || null == (t = m.items)
                                        ? void 0
                                        : t.map((e) => {
                                              let { tab: t } = e;
                                              return (0, l.jsx)(
                                                  g.oz,
                                                  {
                                                      className: (0, s.$)(
                                                          ia().tab,
                                                          ia().important,
                                                      ),
                                                      value: t.id,
                                                      "aria-label": t.title,
                                                      title: t.title,
                                                  },
                                                  t.id,
                                              );
                                          }),
                            }),
                            L,
                        ],
                    });
                },
                il = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(ii, { forwardRef: t, ...e }),
                );
            var is = a(69315),
                ir = a.n(is),
                io = a(87705),
                id = a.n(io);
            let ic = (0, r.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, _.Pjs)();
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(g.nN, {
                                isActive: !0,
                                className: id().titleShimmer,
                                textClassName: id().titleTextShimmer,
                            }),
                            (0, l.jsx)(g.nN, {
                                isActive: !0,
                                className: id().descriptionShimmer,
                                textClassName: id().textShimmer,
                            }),
                            (0, l.jsx)(g.nN, {
                                isActive: !0,
                                className: id().descriptionShimmer,
                                textClassName: id().textShimmer,
                            }),
                            (0, l.jsx)(g.nN, {
                                isActive: !0,
                                className: id().descriptionShimmer,
                                textClassName: id().textShimmer,
                            }),
                            e &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(g.nN, {
                                            isActive: !0,
                                            className: id().descriptionShimmer,
                                            textClassName: id().textShimmer,
                                        }),
                                        (0, l.jsx)(g.nN, {
                                            isActive: !0,
                                            className: id().descriptionShimmer,
                                            textClassName: id().textShimmer,
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                im = Array.from({ length: 3 }, () => g.v2.src),
                iu = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            data: i,
                            headingVariant: s = "h2",
                        } = e,
                        { formatMessage: r } = (0, h.A)(),
                        { wizard: o } = (0, _.Pjs)(),
                        c = (0, n.useMemo)(
                            () =>
                                (0, l.jsx)("div", {
                                    className: ir().images,
                                    ...(0, d.Am)(
                                        d.e8.landing.WIZARD_BLOCK_ARTISTS,
                                    ),
                                    children: im.map((e, t) => {
                                        var a;
                                        let s =
                                            null == i ||
                                            null == (a = i.artists[t])
                                                ? void 0
                                                : a.coverUri;
                                        return (0, l.jsx)(
                                            S.Paper,
                                            {
                                                className: ir().paper,
                                                radius: "round",
                                                children: (0, l.jsx)(tp.Image, {
                                                    className: ir().image,
                                                    src: s || e,
                                                    fit: "contain",
                                                    withAvatarReplace: !!s,
                                                    "aria-hidden": !0,
                                                    fallbackIconSize: "s",
                                                    ...(0, d.Am)(
                                                        ""
                                                            .concat(
                                                                d.e8.landing
                                                                    .WIZARD_BLOCK_ARTIST_COVER,
                                                                "_",
                                                            )
                                                            .concat(t),
                                                    ),
                                                }),
                                            },
                                            t,
                                        );
                                    }),
                                }),
                            [null == i ? void 0 : i.artists],
                        ),
                        m = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(ic, {})
                                    : (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(N.Heading, {
                                                  variant: s,
                                                  size: "xs",
                                                  className: ir().title,
                                                  ...(0, d.Am)(
                                                      d.e8.landing
                                                          .WIZARD_BLOCK_TITLE,
                                                  ),
                                                  children:
                                                      null == i
                                                          ? void 0
                                                          : i.title,
                                              }),
                                              (null == i
                                                  ? void 0
                                                  : i.description) &&
                                                  (0, l.jsx)(N.Heading, {
                                                      variant: "h3",
                                                      size: "l",
                                                      className:
                                                          ir().description,
                                                      lineClamp: 5,
                                                      ...(0, d.Am)(
                                                          d.e8.landing
                                                              .WIZARD_BLOCK_TEXT,
                                                      ),
                                                      children: i.description,
                                                  }),
                                          ],
                                      }),
                            [
                                a,
                                s,
                                null == i ? void 0 : i.title,
                                null == i ? void 0 : i.description,
                            ],
                        );
                    return (0, l.jsxs)("section", {
                        className: ir().root,
                        ref: t,
                        ...(0, d.Am)(d.e8.landing.WIZARD_BLOCK),
                        children: [
                            c,
                            m,
                            (0, l.jsx)(ag.Button, {
                                className: ir().button,
                                icon: (0, l.jsx)(tb.Icon, {
                                    variant: "link",
                                    size: "xxs",
                                    className: ir().buttonIcon,
                                }),
                                color: "secondary",
                                size: "m",
                                iconPosition: "right",
                                radius: "xxxl",
                                onClick: o.modal.open,
                                ...(0, d.Am)(d.e8.landing.WIZARD_BLOCK_BUTTON),
                                children: r({ id: "wizard.buttonText" }),
                            }),
                        ],
                    });
                }),
                i_ = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(iu, { forwardRef: t, ...e }),
                ),
                ig = {
                    [T.t.COLLECTION_PLAYLIST_WITH_LIKES]: a$,
                    [T.t.OPEN_PLAYLIST]: a$,
                    [T.t.SMART_OPEN_PLAYLIST]: a$,
                    [T.t.NON_MUSIC_OPEN_PLAYLIST]: a$,
                    [T.t.COLLECTION_ARTISTS]: eW,
                    [T.t.COLLECTION_ARTISTS_AND_TOP]: eW,
                    [T.t.PERSONAL_ARTISTS]: eW,
                    [T.t.NEW_STARS_ARTISTS]: eW,
                    [T.t.EDITORIAL_ARTISTS]: eW,
                    [T.t.META_TAG_POPULAR_ARTISTS]: eW,
                    [T.t.MICRO_GENRE_ARTISTS]: eW,
                    [T.t.MICRO_GENRE_TOP_ARTISTS]: eW,
                    [T.t.META_TAG_ARTISTS]: eW,
                    [T.t.SIMILAR_ARTISTS]: eW,
                    [T.t.NEW_RELEASES]: ax,
                    [T.t.EDITORIAL_NEW_RELEASES]: ax,
                    [T.t.NEW_PLAYLISTS]: ah,
                    [T.t.EDITORIAL_COMPILATION]: ah,
                    [T.t.RECOMMENDED_PLAYLISTS]: ah,
                    [T.t.META_TAG_POPULAR_PLAYLISTS]: ah,
                    [T.t.META_TAG_PLAYLISTS]: ah,
                    [T.t.META_TAG_NEW_ALBUMS]: ah,
                    [T.t.MICRO_GENRE_ALBUMS]: ah,
                    [T.t.META_TAG_ALBUMS]: ah,
                    [T.t.ARTIST_PLAYLISTS]: ah,
                    [T.t.ARTIST_ALBUMS]: ah,
                    [T.t.ARTIST_COMPILATIONS]: ah,
                    [T.t.ARTIST_STUDIO_ALBUMS]: ah,
                    [T.t.ARTIST_SIMILAR_ENTITIES]: ah,
                    [T.t.COLLECTION_SIMILAR_ENTITIES]: ah,
                    [T.t.PROMOTIONS]: aJ.Promotions,
                    [T.t.EDITORIAL_PROMOTIONS]: aJ.Promotions,
                    [T.t.NON_MUSIC_PROMOTIONS]: aJ.Promotions,
                    [T.t.PERSONAL_PLAYLISTS]: aB,
                    [T.t.REWIND_PLAYLISTS]: aB,
                    [T.t.MICRO_GENRE_SIMILAR_WAVE]: tB,
                    [T.t.META_TAG_SIMILAR_WAVE]: tB,
                    [T.t.EDITORIAL_WAVES]: tB,
                    [T.t.META_TAG_WAVE]: tB,
                    [T.t.MICRO_GENRE_WAVE]: tB,
                    [T.t.EDITORIAL_WAVES_AGENT]: tW,
                    [T.t.META_TAG_WAVE_AGENT]: tW,
                    [T.t.MICRO_GENRE_WAVE_AGENT]: tW,
                    [T.t.MICRO_GENRE_SIMILAR_WAVE_AGENT]: tW,
                    [T.t.META_TAG_SIMILAR_WAVE_AGENT]: tW,
                    [T.t.CONCERTS_PERSONAL]: tu,
                    [T.t.CONCERTS_TOP]: tu,
                    [T.t.EDITORIAL_CONCERTS]: tu,
                    [T.t.VIEWED_CONCERTS]: tu,
                    [T.t.CLIPS]: ey,
                    [T.t.ARTIST_CLIPS]: ey,
                    [T.t.WAVES]: ie,
                    [T.t.SETS_BY_WAVES]: ie,
                    [T.t.WAVES_AGENT]: il,
                    [T.t.SETS_BY_WAVES_AGENT]: il,
                    [T.t.CHART_TRACKS]: eT,
                    [T.t.COLLECTION_KIDS]: e8,
                    [T.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: ti,
                    [T.t.COLLECTION_PLAYLISTS_CREATED]: eQ,
                    [T.t.COLLECTION_PLAYLISTS_LIKED]: e4,
                    [T.t.ALBUM_PROMO]: X,
                    [T.t.SIMPLE_ALBUM_PROMO]: Q,
                    [T.t.ITEM_LIST]: t3,
                    [T.t.OVERVIEW]: aM,
                    [T.t.COLLECTION_ALBUMS]: ek,
                    [T.t.COLLECTION_CLIPS]: e$,
                    [T.t.RECENTLY_PLAYED]: aZ.g,
                    [T.t.IN_STYLE]: tq,
                    [T.t.SPECIAL]: a9,
                    [T.t.WIZARD]: i_,
                    [T.t.MIXES]: as,
                    [T.t.MIXES_GRID]: ar.MixesGridBlock,
                    [T.t.MIXES_MUSIC]: am,
                    [T.t.NEUROMUSIC]: aT,
                    [T.t.CONCERT_PLACE]: tr,
                    [T.t.LIKES_AND_HISTORY]: ae,
                    [T.t.NON_MUSIC_EDITORIAL_COMPILATION]: aP.t,
                    [T.t.COLLECTION_ALBUMS_PRESAVES]: eD,
                    [T.t.CHART_ALBUMS]: aR.S,
                    [T.t.DONATIONS]: tf,
                    [T.t.CONTINUE_LISTEN]: tE,
                    [T.t.DISLIKES]: tk,
                    [T.t.COLLECTION_DOWNLOADED_TRACKS]: e1,
                    [T.t.HISTORY]: a3,
                    [T.t.SEARCH_HISTORY]: a3,
                    [T.t.ARTIST_CONCERTS]: ea,
                    [T.t.ARTIST_POPULAR_TRACKS]: e_,
                    [T.t.ARTIST_RELEASE]: ep,
                    [T.t.FAMILIAR_YOU]: tF,
                    [T.t.ARTIST_PICK]: en,
                    [T.t.ARTIST_UPCOMING_RELEASE]: eA,
                },
                ib = (0, r.PA)((e) => {
                    let {
                            landing: t,
                            block: a,
                            isIntersecting: i,
                            forwardRef: r,
                            onLoad: o,
                            className: c,
                            containerClassName: m,
                            ...u
                        } = e,
                        {
                            isNeededToLoad: g,
                            isLoading: A,
                            isLoaded: T,
                            isRejected: I,
                            isShimmerVisible: h,
                            isShimmerActive: L,
                            isVisible: y,
                            id: S,
                            type: N,
                            meta: E,
                            data: j,
                            hasSentAnalyticsOnLoaded: k,
                            setHasSentAnalyticsOnLoaded: x,
                            setOutdated: R,
                            setIsNeededToLoad: P,
                        } = a;
                    if ((0, p.Q)(a)) return null;
                    let f = ig[a.type],
                        w = (0, _.fBs)(),
                        { settings: K, experiments: O } = (0, _.Pjs)(),
                        M =
                            !O.checkExperiment(
                                _.zal.WebNextVirtualSkeleton,
                                "on",
                            ) &&
                            K.browserInfo &&
                            !K.browserInfo.isSafari;
                    (0, n.useEffect)(() => {
                        (i || !y) && g && (0, b.v)(E) && t.getBlock(a);
                    }, [a, i, g, y, t, E]),
                        (0, n.useEffect)(() => {
                            (T || I) && (null == o || o());
                        }, [T, I, o]),
                        (0, n.useEffect)(() => {
                            !k && T && (w(), x(!0));
                        }, [k, T, w, x]);
                    let D = (0, v.L)(() => {
                        if (
                            ((e) =>
                                !!(
                                    e &&
                                    "object" == typeof e &&
                                    "current" in e
                                ))(r)
                        ) {
                            var e;
                            return null == (e = r.current)
                                ? void 0
                                : e.clientHeight;
                        }
                        return 0;
                    });
                    return y
                        ? (0, l.jsx)(
                              f,
                              {
                                  setIsNeededToLoad: P,
                                  setOutdated: R,
                                  isLoaded: T,
                                  isLoading: A,
                                  isShimmerVisible: h,
                                  isShimmerActive: L,
                                  isRejected: I,
                                  tracksContainerClassName: C().tracksContainer,
                                  containerClassName: (0, s.$)(
                                      C().container,
                                      C().important,
                                      m,
                                  ),
                                  className: (0, s.$)(
                                      {
                                          [C().container_withContentVisibility]:
                                              M && D,
                                      },
                                      c,
                                  ),
                                  headerClassName: C().headerContainer,
                                  meta: E,
                                  data: j,
                                  type: N,
                                  ref: r,
                                  headingVariant: "h2",
                                  "data-intersection-property-id": a.id,
                                  ...(0, d.Am)(a.type),
                                  ...u,
                              },
                              S,
                          )
                        : null;
                }),
                ip = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, l.jsx)(_.FoH, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ""
                            .concat(_.hf$.DISCOVERY_BLOCK, "-")
                            .concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, l.jsx)(ib, { ...t }),
                    });
                });
            var iv = a(34279),
                iA = a.n(iv);
            let iC = (0, r.PA)((e) => {
                    let { forwardRef: t, data: a, ...i } = e,
                        r = (0, v.L)(() => {
                            if (null == a ? void 0 : a.release)
                                return (0, l.jsx)(ip, {
                                    ...i,
                                    className: iA().release,
                                    containerClassName: iA().releaseCard,
                                    block: a.release,
                                });
                        }),
                        o = (0, v.L)(() => {
                            if (null == a ? void 0 : a.upcomingRelese)
                                return (0, l.jsx)(ip, {
                                    ...i,
                                    className: iA().release,
                                    containerClassName: iA().releaseCard,
                                    block: a.upcomingRelese,
                                });
                        }),
                        n = (0, v.L)(() => {
                            if (null == a ? void 0 : a.popularTracks)
                                return (0, l.jsx)(ip, {
                                    ...i,
                                    className: (0, s.$)(iA().popularTracks, {
                                        [iA().popularTracks_withReleaseBlock]:
                                            !!(null != o ? o : r),
                                    }),
                                    block: a.popularTracks,
                                });
                        });
                    return (0, l.jsx)("section", {
                        ref: t,
                        className: iA().root,
                        ...(0, P.getDataAttrFromProps)(i),
                        children: (0, l.jsxs)("div", {
                            className: iA().container,
                            children: [n, null != o ? o : r],
                        }),
                    });
                }),
                iT = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(iC, { forwardRef: t, ...e }),
                );
            var iI = a(61579),
                ih = a.n(iI);
            let iL = (0, r.PA)((e) => {
                    let { forwardRef: t, data: a, ...i } = e,
                        s = (0, v.L)(() => {
                            if (null == a ? void 0 : a.familiarYou)
                                return (0, l.jsx)(ip, {
                                    ...i,
                                    block: a.familiarYou,
                                });
                        }),
                        r = (0, v.L)(() => {
                            if (null == a ? void 0 : a.artistPick)
                                return (0, l.jsx)(ip, {
                                    ...i,
                                    block: a.artistPick,
                                });
                        });
                    return (0, l.jsxs)("section", {
                        ref: t,
                        className: ih().root,
                        ...(0, P.getDataAttrFromProps)(i),
                        children: [r, s],
                    });
                }),
                iy = (0, n.forwardRef)((e, t) =>
                    (0, l.jsx)(iL, { forwardRef: t, ...e }),
                ),
                iS = {
                    [T.t.ARTIST_POPULAR_TRACKS_AND_RELEASES]: iT,
                    [T.t.FAMILIAR_YOU_AND_ARTIST_PICK]: iy,
                },
                iN = (0, r.PA)((e) => {
                    let { block: t, forwardRef: a, onLoad: i, ...s } = e;
                    if (
                        ((0, n.useEffect)(() => {
                            null == i || i();
                        }, [t.isVisible, i]),
                        !(0, p.Q)(t) || !t.isVisible)
                    )
                        return null;
                    let r = iS[t.type];
                    return (0, l.jsx)(r, {
                        data: t.data,
                        ref: a,
                        "data-intersection-property-id": t.id,
                        ...s,
                    });
                }),
                iE = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, l.jsx)(_.FoH, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ""
                            .concat(_.hf$.DISCOVERY_BLOCK, "-")
                            .concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, l.jsx)(iN, { ...t }),
                    });
                }),
                ij = (0, r.PA)((e) =>
                    (0, p.Q)(e.block)
                        ? (0, l.jsx)(iE, { ...e })
                        : (0, l.jsx)(ip, { ...e }),
                );
            var ik = a(13900),
                ix = a.n(ik),
                iR = a(41028);
            let iP = (e) => {
                    let { landing: t, tab: a } = e,
                        { notify: i, dismiss: s } = (0, _.lkh)(),
                        r = (0, n.useRef)(void 0),
                        o = (0, c.c)(() => {
                            a.blocks.forEach((e) => {
                                e.isRejected &&
                                    (0, b.v)(e.meta) &&
                                    t.getBlock(e);
                            }),
                                s({ notificationId: r.current }),
                                a.setShouldReloadNotification(!1);
                        });
                    (0, n.useEffect)(() => {
                        a.hasErrorBlocks &&
                            !a.shouldReloadNotification &&
                            setTimeout(() => {
                                (r.current = i(
                                    (0, l.jsx)(g.LV, { reloadBlocks: o }),
                                    { containerId: _.uQT.ERROR, autoClose: !1 },
                                )),
                                    a.setShouldReloadNotification(!0);
                            });
                    }, [i, o, a.hasErrorBlocks, a.shouldReloadNotification, a]),
                        (0, n.useEffect)(
                            () => () => {
                                s(),
                                    (0, iR._n)(a) &&
                                        a.setShouldReloadNotification(!1);
                            },
                            [s, a],
                        );
                },
                iw = (0, r.PA)((e) => {
                    var t;
                    let { landing: a, tab: i, tabIndex: s } = e,
                        r = (0, n.useMemo)(
                            () => i.blocks.map(() => (0, n.createRef)()),
                            [i.blocks],
                        ),
                        o = (0, m.BL)(r, { freezeOnceVisible: !0 });
                    return (
                        iP({ landing: a, tab: i }),
                        (0, l.jsx)(_.jPc, {
                            children: (0, l.jsx)(_.hjC, {
                                tabId: i.meta.id,
                                tabPos: s + 1,
                                isTabSelectedByDefault:
                                    (null == (t = a.meta)
                                        ? void 0
                                        : t.selectedTabIndex) === s,
                                children: (0, l.jsx)("div", {
                                    className: ix().root,
                                    children: i.blocks.map((e, t) => {
                                        let { isIntersecting: i } =
                                            o[e.id] || {};
                                        return (0, l.jsx)(
                                            ij,
                                            {
                                                landing: a,
                                                block: e,
                                                blockIndex: t,
                                                isIntersecting: i,
                                                forwardRef: r[t],
                                            },
                                            e.id,
                                        );
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var iK = a(1370),
                iO = a(44612),
                iM = a(95227);
            let iD = {
                [T.t.ALBUM_PROMO]: 314,
                [T.t.ARTIST_PICK]: 102,
                [T.t.ARTIST_CONCERTS]: 232,
                [T.t.ARTIST_PLAYLISTS]: 316,
                [T.t.ARTIST_POPULAR_TRACKS_AND_RELEASES]: 340,
                [T.t.ARTIST_POPULAR_TRACKS]: 340,
                [T.t.ARTIST_RELEASE]: 340,
                [T.t.ARTIST_UPCOMING_RELEASE]: 340,
                [T.t.ARTIST_ALBUMS]: 316,
                [T.t.ARTIST_COMPILATIONS]: 316,
                [T.t.ARTIST_CLIPS]: 292,
                [T.t.ARTIST_STUDIO_ALBUMS]: 316,
                [T.t.FAMILIAR_YOU_AND_ARTIST_PICK]: 102,
                [T.t.SIMPLE_ALBUM_PROMO]: 140,
                [T.t.CHART_ALBUMS]: 322,
                [T.t.CHART_TRACKS]: 284,
                [T.t.COLLECTION_ALBUMS]: 320,
                [T.t.COLLECTION_ALBUMS_PRESAVES]: 378,
                [T.t.COLLECTION_ARTISTS]: 336,
                [T.t.COLLECTION_ARTISTS_AND_TOP]: 336,
                [T.t.COLLECTION_CLIPS]: 292,
                [T.t.COLLECTION_PLAYLISTS_CREATED]: 316,
                [T.t.COLLECTION_PLAYLISTS_LIKED]: 316,
                [T.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: 378,
                [T.t.COLLECTION_PLAYLIST_WITH_LIKES]: 310,
                [T.t.COLLECTION_KIDS]: 320,
                [T.t.CONCERTS_PERSONAL]: 442,
                [T.t.COLLECTION_DOWNLOADED_TRACKS]: 298,
                [T.t.CONCERTS_TOP]: 442,
                [T.t.EDITORIAL_ARTISTS]: 336,
                [T.t.EDITORIAL_CONCERTS]: 442,
                [T.t.VIEWED_CONCERTS]: 442,
                [T.t.EDITORIAL_COMPILATION]: 316,
                [T.t.EDITORIAL_NEW_RELEASES]: 410,
                [T.t.EDITORIAL_PROMOTIONS]: 342,
                [T.t.EDITORIAL_WAVES]: 138,
                [T.t.EDITORIAL_WAVES_AGENT]: 319,
                [T.t.META_TAG_WAVE_AGENT]: 319,
                [T.t.MICRO_GENRE_WAVE_AGENT]: 319,
                [T.t.MICRO_GENRE_SIMILAR_WAVE_AGENT]: 319,
                [T.t.META_TAG_SIMILAR_WAVE_AGENT]: 319,
                [T.t.IN_STYLE]: 370,
                [T.t.ITEM_LIST]: 250,
                [T.t.LIKES_AND_HISTORY]: 106,
                [T.t.META_TAG_ALBUMS]: 316,
                [T.t.META_TAG_ARTISTS]: 336,
                [T.t.META_TAG_NEW_ALBUMS]: 316,
                [T.t.META_TAG_PLAYLISTS]: 316,
                [T.t.META_TAG_POPULAR_ARTISTS]: 336,
                [T.t.META_TAG_POPULAR_PLAYLISTS]: 316,
                [T.t.META_TAG_SIMILAR_WAVE]: 138,
                [T.t.META_TAG_WAVE]: 64,
                [T.t.MICRO_GENRE_ALBUMS]: 316,
                [T.t.MICRO_GENRE_ARTISTS]: 336,
                [T.t.MICRO_GENRE_SIMILAR_WAVE]: 138,
                [T.t.MICRO_GENRE_TOP_ARTISTS]: 336,
                [T.t.MICRO_GENRE_WAVE]: 64,
                [T.t.MIXES]: 260,
                [T.t.MIXES_GRID]: 240,
                [T.t.MIXES_MUSIC]: 264,
                [T.t.NEUROMUSIC]: 138,
                [T.t.NEW_PLAYLISTS]: 316,
                [T.t.ARTIST_SIMILAR_ENTITIES]: 316,
                [T.t.COLLECTION_SIMILAR_ENTITIES]: 316,
                [T.t.NEW_RELEASES]: 410,
                [T.t.NEW_STARS_ARTISTS]: 336,
                [T.t.NON_MUSIC_EDITORIAL_COMPILATION]: 316,
                [T.t.NON_MUSIC_OPEN_PLAYLIST]: 310,
                [T.t.NON_MUSIC_PROMOTIONS]: 342,
                [T.t.OPEN_PLAYLIST]: 310,
                [T.t.OVERVIEW]: 84,
                [T.t.PERSONAL_ARTISTS]: 336,
                [T.t.PERSONAL_PLAYLISTS]: 342,
                [T.t.PROMOTIONS]: 342,
                [T.t.RECENTLY_PLAYED]: 316,
                [T.t.RECOMMENDED_PLAYLISTS]: 316,
                [T.t.REWIND_PLAYLISTS]: 342,
                [T.t.SMART_OPEN_PLAYLIST]: 310,
                [T.t.SPECIAL]: 192,
                [T.t.SIMILAR_ARTISTS]: 336,
                [T.t.TABS]: 60,
                [T.t.WAVES]: 176,
                [T.t.WAVES_AGENT]: 370,
                [T.t.SETS_BY_WAVES_AGENT]: 370,
                [T.t.SETS_BY_WAVES]: 176,
                [T.t.WIZARD]: 328,
                [T.t.DONATIONS]: 216,
                [T.t.CLIPS]: 292,
                [T.t.CONTINUE_LISTEN]: 138,
                [T.t.DISLIKES]: 54,
                [T.t.HISTORY]: 402,
                [T.t.SEARCH_HISTORY]: 402,
                [T.t.FAMILIAR_YOU]: 102,
                [T.t.CONCERT_PLACE]: 324,
            };
            var iB = a(77503),
                iV = a.n(iB);
            let iU = (0, r.PA)((e) => {
                    var t;
                    let {
                            virtualItem: a,
                            resizeObserver: i,
                            isScrolling: s,
                            style: r,
                            ...o
                        } = e,
                        [d, c] = (0, iO.d)(),
                        [u, _] = (0, iO.d)(),
                        { isIntersecting: g } =
                            null !=
                            (t = (0, m.BL)(
                                [{ current: d }],
                                !d ||
                                    (null == d
                                        ? void 0
                                        : d.dataset.intersectionPropertyId) !==
                                        o.block.id,
                            )[o.block.id])
                                ? t
                                : {};
                    return (
                        (0, n.useEffect)(
                            () => (
                                u && i && i.observe(u),
                                () => {
                                    u && i && i.unobserve(u);
                                }
                            ),
                            [u, i],
                        ),
                        (0, l.jsx)("div", {
                            "data-index": a.index,
                            className: iV().root,
                            ref: _,
                            style: r,
                            children: (0, l.jsx)(ij, {
                                ...o,
                                forwardRef: c,
                                isIntersecting: g && !s,
                            }),
                        })
                    );
                }),
                iY = (0, r.PA)((e) => {
                    var t, a;
                    let { landing: i, tab: s, tabIndex: r } = e,
                        d = (0, o.useSearchParams)(),
                        {
                            settings: { isMobile: m },
                        } = (0, _.Pjs)(),
                        [u, g] = (0, iO.d)(),
                        b = (0, n.useRef)(!0),
                        [p, v] = (0, n.useState)(() =>
                            Array.from(
                                { length: s.blocks.length },
                                (e, t) => t,
                            ),
                        ),
                        A = (0, c.c)(() => {
                            let e = [];
                            s.blocks.forEach((t, a) => {
                                var i;
                                (t.isVisible ||
                                    ((null == (i = t.meta)
                                        ? void 0
                                        : i.showPolicy) ===
                                        iK.E.LOAD_AND_SHOW &&
                                        t.isNeededToLoad)) &&
                                    e.push(a);
                            }),
                                v(e);
                        }),
                        C = (0, c.c)((e) => {
                            let t = p[e];
                            if (void 0 === t) return 300;
                            let a = s.blocks[t];
                            return (null == a ? void 0 : a.isVisible)
                                ? iD[a.type]
                                : 0;
                        }),
                        { virtualizer: T, resizeObserver: I } = (0, iM.rA)({
                            count: null != (a = p.length) ? a : 0,
                            gap: m ? 16 : 24,
                            getEstimateSize: C,
                            containerRef: u,
                        });
                    (0, n.useEffect)(() => {
                        var e;
                        if (!b.current) return;
                        let t = d.get(_.K3F.BLOCK),
                            a = s.blocks.findIndex((e) => e.id === t);
                        if (!p.includes(a)) return;
                        let i =
                            null == (e = T.getOffsetForIndex(a, "center"))
                                ? void 0
                                : e[0];
                        T.scrollToIndex(a, {
                            align: "center",
                            behavior: "auto",
                        }),
                            T.scrollOffset &&
                                i &&
                                100 > Math.abs(T.scrollOffset - i) &&
                                (b.current = !1);
                    }, [p, d, s.blocks, T]);
                    let h = T.getTotalSize(),
                        L = T.getVirtualItems();
                    return (
                        iP({ landing: i, tab: s }),
                        (0, l.jsx)(_.jPc, {
                            children: (0, l.jsx)(_.hjC, {
                                tabId: s.meta.id,
                                tabPos: r + 1,
                                isTabSelectedByDefault:
                                    (null == (t = i.meta)
                                        ? void 0
                                        : t.selectedTabIndex) === r,
                                children: (0, l.jsx)("div", {
                                    className: ix().root,
                                    style: { height: "".concat(h, "px") },
                                    ref: g,
                                    children: L.map((e) => {
                                        let t = p[e.index],
                                            a = s.blocks[Number(t)];
                                        return a
                                            ? (0, l.jsx)(
                                                  iU,
                                                  {
                                                      virtualItem: e,
                                                      resizeObserver: I,
                                                      landing: i,
                                                      block: a,
                                                      blockIndex: Number(t),
                                                      isScrolling:
                                                          T.isScrolling,
                                                      onLoad: A,
                                                      style: {
                                                          transform:
                                                              "translate3d(0, ".concat(
                                                                  e.start -
                                                                      T.options
                                                                          .scrollMargin,
                                                                  "px, 0)",
                                                              ),
                                                      },
                                                  },
                                                  e.key,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                        })
                    );
                }),
                iG = (0, r.PA)((e) => {
                    var t, a, i;
                    let {
                            landing: r,
                            upperBlocks: o,
                            headerConcealerComponent: m,
                            tabsState: b,
                            containerClassName: p,
                            containerStyle: v,
                            headerClassName: A,
                            tabWithHeadingTitle: C,
                            tabWithCovers: T,
                            tabWithSubtitle: I,
                            stickyHeaderClassName: h,
                            staticHeaderClassName: L,
                            stickyHeaderTabIndex: y,
                            headerVariant: S = g.Vw.COMPOSITE,
                        } = e,
                        { tabs: N } = r,
                        E = (0, n.useId)(),
                        { isScrolling: j } = (0, n.useContext)(g.B9),
                        { contentScrollRef: k } = (0, _.gKY)(),
                        {
                            experiments: x,
                            settings: { isMobile: R },
                        } = (0, _.Pjs)(),
                        P = x.checkExperiment(
                            _.zal.WebNextVirtualSkeleton,
                            "on",
                        )
                            ? iY
                            : iw,
                        f = (0, c.c)((e) => {
                            var t;
                            R ? window.scrollTo(0, 0) : k && (k.scrollTop = 0),
                                null == (t = b.onTabChange) || t.call(b, e);
                        });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            o,
                            m,
                            (0, l.jsx)(g.Y9, {
                                className: (0, s.$)(ix().header, A),
                                variant: S,
                                stickyClassName: h,
                                staticClassName: L,
                                stickyChild: (0, l.jsx)(g.wI, {
                                    isShimmerVisible:
                                        N.isLoading || r.isLoading,
                                    className: ix().stickyTabs,
                                    shimmer: (0, l.jsx)(g.zr, {}),
                                    elementId: E,
                                    ...(0, d.Am)(d.e8.landing.MAIN_TABS),
                                    value: b.value,
                                    onTabChange: f,
                                    children:
                                        null == (t = N.data)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  let { meta: a } = e;
                                                  return (0, l.jsx)(
                                                      g.oz,
                                                      {
                                                          className: ix().tab,
                                                          value: t,
                                                          "aria-label": a.title,
                                                          title: a.title,
                                                          "aria-hidden":
                                                              !j &&
                                                              S !== g.Vw.STICKY,
                                                          tabIndex:
                                                              null != y
                                                                  ? y
                                                                  : j
                                                                    ? 0
                                                                    : -1,
                                                      },
                                                      a.id,
                                                  );
                                              }),
                                }),
                                children: (0, l.jsx)(g.wI, {
                                    className: (0, s.$)(
                                        ix().tabCarousel,
                                        ix().important,
                                    ),
                                    elementId: E,
                                    ...(0, d.Am)(d.e8.landing.MAIN_TABS),
                                    ...b,
                                    children:
                                        null == (a = N.data)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  let { meta: a, data: i } = e;
                                                  return (0, l.jsx)(
                                                      g.oz,
                                                      {
                                                          className: ix().tab,
                                                          value: t,
                                                          "aria-label": a.title,
                                                          title: a.title,
                                                          subtitle:
                                                              null == i
                                                                  ? void 0
                                                                  : i.subtitle,
                                                          covers:
                                                              null == i
                                                                  ? void 0
                                                                  : i.covers,
                                                          "aria-hidden": j,
                                                          tabIndex: j ? -1 : 0,
                                                          withCovers: T,
                                                          withSubtitle: I,
                                                          withHeading: C,
                                                          isShimmerVisible:
                                                              N.loadingState ===
                                                              _.GuX.PENDING,
                                                      },
                                                      a.id,
                                                  );
                                              }),
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: p,
                                style: v,
                                children:
                                    null == (i = N.data)
                                        ? void 0
                                        : i.map((e, t) =>
                                              (0, l.jsx)(
                                                  u.TabPanel,
                                                  {
                                                      className: ix().tabPanel,
                                                      name: t,
                                                      value: b.value,
                                                      elementId: E,
                                                      children: (0, l.jsx)(P, {
                                                          landing: r,
                                                          tab: e,
                                                          tabIndex: t,
                                                      }),
                                                  },
                                                  e.meta.id,
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                iW = (0, r.PA)((e) => {
                    var t, a, i, s;
                    let {
                            landing: r,
                            headerConcealerComponent: d,
                            errorComponent: c,
                            containerClassName: g,
                            headerClassName: p,
                            containerStyle: v,
                            tabWithHeadingTitle: A,
                            tabWithCovers: C,
                            tabWithSubtitle: T,
                            staticHeaderClassName: I,
                            stickyHeaderClassName: h,
                            stickyHeaderTabIndex: L,
                            headerVariant: y,
                        } = e,
                        S = (0, o.useSearchParams)(),
                        N = (0, _.XJ9)(),
                        E = ((e) =>
                            (0, n.useCallback)(
                                (t) => {
                                    var a;
                                    let i =
                                        null == (a = e.tabs.data)
                                            ? void 0
                                            : a[t];
                                    null == i ||
                                        i.blocks.forEach((t) => {
                                            t.isOutdated &&
                                                (0, b.v)(t.meta) &&
                                                (t.setHasSentAnalyticsOnLoaded(
                                                    !1,
                                                ),
                                                e.getBlock(t));
                                        });
                                },
                                [e],
                            ))(r),
                        { experiments: j } = (0, _.Pjs)(),
                        k = j.checkExperiment(
                            _.zal.WebNextVirtualSkeleton,
                            "on",
                        )
                            ? iY
                            : iw,
                        x = (0, n.useMemo)(() => {
                            var e;
                            if (!r.isLoaded) return null;
                            let t = S.get(_.K3F.TAB),
                                a =
                                    null == (e = r.tabs.data)
                                        ? void 0
                                        : e.findIndex((e) => e.meta.id === t);
                            return "number" == typeof a && a >= 0 ? a : null;
                        }, [r.isLoaded, r.tabs.data, S]),
                        R = (0, u.useTabsState)(
                            null !=
                                (s =
                                    null != x
                                        ? x
                                        : null == (t = r.meta)
                                          ? void 0
                                          : t.selectedTabIndex)
                                ? s
                                : 0,
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                var t, a, i;
                                let l =
                                    null == (a = r.tabs.data) ||
                                    null == (t = a[e])
                                        ? void 0
                                        : t.meta.id;
                                if (
                                    (e !== R.value && E(R.value),
                                    null == (i = R.onTabChange) || i.call(R, e),
                                    l)
                                ) {
                                    let e = (0, _.bJ)(_.K3F.TAB, l);
                                    e && N(e);
                                }
                            },
                            [N, r.tabs.data, E, R],
                        ),
                        f = !!(r.tabs.data && r.tabs.data.length > 1),
                        w = null == (a = r.tabs.data) ? void 0 : a[0],
                        K = (0, n.useMemo)(() => {
                            var e, t;
                            return null !=
                                (t =
                                    null == (e = r.upperBlocks)
                                        ? void 0
                                        : e.map(() => (0, n.createRef)()))
                                ? t
                                : [];
                        }, [r.upperBlocks]),
                        O = (0, m.BL)(K, { freezeOnceVisible: !0 }),
                        M = (0, n.useMemo)(() => {
                            var e;
                            if (null == (e = r.upperBlocks) ? void 0 : e.length)
                                return (0, l.jsx)(_.hjC, {
                                    tabId: "",
                                    tabPos: -1,
                                    isTabSelectedByDefault: !1,
                                    children: (0, l.jsx)("div", {
                                        className: ix().upperBlocks,
                                        children: r.upperBlocks.map((e, t) => {
                                            let { isIntersecting: a } =
                                                O[e.id] || {};
                                            return (0, l.jsx)(
                                                ij,
                                                {
                                                    landing: r,
                                                    block: e,
                                                    blockIndex: t,
                                                    isIntersecting: a,
                                                    forwardRef: K[t],
                                                },
                                                e.id,
                                            );
                                        }),
                                    }),
                                });
                        }, [
                            null == (i = r.upperBlocks) ? void 0 : i.length,
                            r,
                            O,
                            K,
                        ]);
                    return f
                        ? (0, l.jsx)(iG, {
                              landing: r,
                              upperBlocks: M,
                              headerConcealerComponent: d,
                              tabsState: { value: R.value, onTabChange: P },
                              containerClassName: g,
                              containerStyle: v,
                              headerClassName: p,
                              tabWithHeadingTitle: A,
                              tabWithCovers: C,
                              tabWithSubtitle: T,
                              staticHeaderClassName: I,
                              stickyHeaderClassName: h,
                              stickyHeaderTabIndex: L,
                              headerVariant: y,
                          })
                        : w
                          ? (0, l.jsxs)("div", {
                                className: g,
                                style: v,
                                children: [
                                    M,
                                    d,
                                    (0, l.jsx)(k, {
                                        landing: r,
                                        tab: w,
                                        tabIndex: 0,
                                    }),
                                ],
                            })
                          : M
                            ? (0, l.jsx)(_.jPc, {
                                  children: (0, l.jsxs)("div", {
                                      className: g,
                                      style: v,
                                      children: [M, d],
                                  }),
                              })
                            : r.isLoadedAndEmpty
                              ? (0, l.jsx)("div", {
                                    className: g,
                                    style: v,
                                    children: c,
                                })
                              : null;
                });
        },
        63292: (e) => {
            e.exports = {
                root: "AlbumPromoCard_root__dAUet",
                artistImage: "AlbumPromoCard_artistImage__fWVxn",
                artistImage_withTopPosition:
                    "AlbumPromoCard_artistImage_withTopPosition__tRrcO",
                artistCover: "AlbumPromoCard_artistCover__Gfhab",
                albumCover: "AlbumPromoCard_albumCover__QYYKH",
                button: "AlbumPromoCard_button__mpQr6",
                buttonIcon: "AlbumPromoCard_buttonIcon__WredC",
                buttonText: "AlbumPromoCard_buttonText__pI3Ot",
                albumImage: "AlbumPromoCard_albumImage__v8021",
                albumLink: "AlbumPromoCard_albumLink__dnGvR",
                artistLink: "AlbumPromoCard_artistLink__AD9__",
                title: "AlbumPromoCard_title__uzmho",
                titleLink: "AlbumPromoCard_titleLink__4DLNk",
                titleContainer: "AlbumPromoCard_titleContainer__f1k8Y",
                artists: "AlbumPromoCard_artists__UYpyB",
                artistsLink: "AlbumPromoCard_artistsLink__8gTlH",
            };
        },
        65599: (e, t, a) => {
            "use strict";
            a.d(t, { Q: () => s });
            var i = a(90848);
            let l = [
                    i.t.ARTIST_POPULAR_TRACKS_AND_RELEASES,
                    i.t.FAMILIAR_YOU_AND_ARTIST_PICK,
                ],
                s = (e) => l.includes(e.type);
        },
        66685: (e) => {
            e.exports = {
                trailer: "PlaylistWithTracks_trailer__dOp1u",
                root: "PlaylistWithTracks_root__jchZL",
            };
        },
        68937: (e) => {
            e.exports = {
                root: "MixCard_root__9tPLV",
                header: "MixCard_header__j7Zpo",
                title: "MixCard_title__nhghp",
                cover: "MixCard_cover__oSu73",
                covers: "MixCard_covers__S61hz",
                covers_stack: "MixCard_covers_stack__VeHDp",
                covers_radial: "MixCard_covers_radial__orE40",
            };
        },
        69315: (e) => {
            e.exports = {
                root: "Wizard_root__aW2c2",
                title: "Wizard_title__L8ktt",
                description: "Wizard_description__RFf2U",
                button: "Wizard_button__lr8pa",
                buttonIcon: "Wizard_buttonIcon__eOX3P",
                imagesWrapper: "Wizard_imagesWrapper__tyqWr",
                images: "Wizard_images__5rxec",
                paper: "Wizard_paper__ijUgq",
                image: "Wizard_image__k9AXl",
            };
        },
        69787: (e) => {
            e.exports = {
                root: "ItemList_root__0fUbd",
                shimmer: "ItemList_shimmer__hIZtA",
            };
        },
        70444: (e) => {
            e.exports = {
                root: "NeuromusicButton_root__OMwq0",
                ripple: "NeuromusicButton_ripple__B9e3A",
                textContainer: "NeuromusicButton_textContainer__2rb8y",
                title: "NeuromusicButton_title__mTAB8",
                button: "NeuromusicButton_button__kT4GN",
                icon: "NeuromusicButton_icon__HTDr2",
            };
        },
        70946: (e, t, a) => {
            "use strict";
            a.d(t, { v: () => i });
            let i = (e) => !!(e && "object" == typeof e && "source" in e);
        },
        72094: (e, t, a) => {
            "use strict";
            var i;
            a.d(t, { l: () => i }),
                (function (e) {
                    (e.PLAYLIST_LIKED_TAB = "liked_playlist_tab"),
                        (e.PLAYLIST_CREATED_TAB = "created_playlist_tab");
                })(i || (i = {}));
        },
        72310: (e) => {
            e.exports = {
                root: "NewRelease_root__W0T4a",
                image: "NewRelease_image__Vw6_k",
                cover: "NewRelease_cover__EVFNR",
                coverImage: "NewRelease_coverImage__9x6Uk",
                card: "NewRelease_card__yn06x",
                fade: "NewRelease_fade__rVE0_",
                artists: "NewRelease_artists__wGTaP",
                artistLink: "NewRelease_artistLink__CO3Zn",
                artistCaption: "NewRelease_artistCaption__1F8A9",
                trailerButton: "NewRelease_trailerButton__OYAW6",
                descriptionContainer: "NewRelease_descriptionContainer__g56GG",
            };
        },
        75279: (e) => {
            e.exports = { item: "Mixes_item__Om7aR" };
        },
        75325: (e) => {
            e.exports = {
                root: "EditorialVibes_root__MPgdy",
                controls: "EditorialVibes_controls__sKvZK",
            };
        },
        75460: (e, t, a) => {
            "use strict";
            var i;
            a.d(t, { R: () => i }),
                (function (e) {
                    (e.RADIAL = "RADIAL"), (e.STACK = "STACK");
                })(i || (i = {}));
        },
        77503: (e) => {
            e.exports = { root: "VirtualizedSkeletonBlock_root__njUFa" };
        },
        78459: (e) => {
            e.exports = {
                root: "EditorialVibesAgent_root__DWv1O",
                controls: "EditorialVibesAgent_controls__8zmg0",
                item: "EditorialVibesAgent_item__D8lQA",
                important: "EditorialVibesAgent_important__xnrnN",
            };
        },
        78659: (e, t, a) => {
            "use strict";
            a.d(t, { BlockEntities: () => h });
            var i = a(33008),
                l = a(85896),
                s = a(97531),
                r = a(66268),
                o = a(73827),
                n = a(18064),
                d = a(90848),
                c = a(34874),
                m = a(57747),
                u = a(77868),
                _ = a(52732),
                g = a(90317),
                b = a(64143),
                p = a(45242),
                v = a(30457),
                A = a(79169),
                C = a(18740),
                T = a(79759),
                I = a.n(T);
            let h = (0, s.PA)((e) => {
                let { blockId: t, blockType: a } = e,
                    { landingBlockEntities: s } = (0, A.Pjs)(),
                    { formatMessage: T } = (0, o.A)(),
                    { contentScrollRef: h, setContentScrollRef: L } = (0,
                    A.gKY)(),
                    y = (0, A.W6M)(),
                    S = (0, r.useMemo)(() => {
                        if (s.isLoading) {
                            let e = T({
                                    id: "loading-messages.content-is-loading",
                                }),
                                t = [
                                    d.t.COLLECTION_ARTISTS,
                                    d.t.COLLECTION_ARTISTS_AND_TOP,
                                    d.t.PERSONAL_ARTISTS,
                                    d.t.NEW_STARS_ARTISTS,
                                    d.t.EDITORIAL_ARTISTS,
                                ].includes(a),
                                s = a === d.t.MIXES_GRID;
                            return (0, i.jsx)(C.eI, {
                                itemClassName: (0, l.$)({
                                    [I().shimmerWithSubcover]: s,
                                }),
                                withSubcover: s,
                                isActive: !0,
                                "aria-label": e,
                                centered: t || s,
                                round: t,
                            });
                        }
                        return s.items.map((e) => {
                            switch (e.type) {
                                case c._.MIX_CARD_ITEM:
                                    return (0, i.jsx)(
                                        v.Vf,
                                        {
                                            title: e.data.title,
                                            weblink: e.data.weblink,
                                            covers: e.data.covers,
                                        },
                                        e.data.id,
                                    );
                                case c._.ALBUM_ITEM:
                                    return (0, i.jsx)(
                                        _.aX,
                                        { album: e.data, contentLinesCount: 3 },
                                        e.data.id,
                                    );
                                case c._.CHART_ALBUM_ITEM:
                                case c._.NON_MUSIC_ALBUM_ITEM:
                                    return (0, i.jsx)(
                                        _.aX,
                                        {
                                            withChart: !0,
                                            withLikesCount: !0,
                                            album: e.data,
                                            contentLinesCount: 3,
                                        },
                                        e.data.id,
                                    );
                                case c._.ARTIST_ITEM:
                                    return (0, i.jsx)(
                                        g.ao,
                                        {
                                            artist: e.data,
                                            contentLinesCount: 3,
                                        },
                                        e.data.id,
                                    );
                                case c._.PLAYLIST_ITEM:
                                    return (0, i.jsx)(
                                        p.B6,
                                        {
                                            playlist: e.data,
                                            contentLinesCount: 3,
                                        },
                                        e.data.key,
                                    );
                                case c._.PERSONAL_PLAYLIST_ITEM:
                                    return (0, i.jsx)(
                                        p.B6,
                                        {
                                            playlist: e.data.playlist,
                                            customDescription:
                                                e.data.description,
                                            contentLinesCount: 4,
                                        },
                                        e.data.playlist.key,
                                    );
                                case c._.LIKED_PLAYLIST_ITEM:
                                    return (0, i.jsx)(
                                        p.B6,
                                        {
                                            playlist: e.data,
                                            contentLinesCount: 3,
                                        },
                                        e.data.key,
                                    );
                            }
                        });
                    }, [a, s.isLoading, s.items, T]);
                return (
                    t &&
                        s.isNeededToLoad &&
                        (0, r.use)(s.getData({ blockId: t })),
                    (0, i.jsx)(b.hO, {
                        scrollElement: h,
                        outerTitle: s.title,
                        children: (0, i.jsxs)("div", {
                            className: I().root,
                            children: [
                                (0, i.jsx)(C.Y9, {
                                    variant: C.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: y.canBack,
                                    children: (0, i.jsx)(u.Heading, {
                                        id: "block-entities-header",
                                        variant: "h1",
                                        weight: "bold",
                                        size: "xl",
                                        lineClamp: 1,
                                        children: s.title,
                                    }),
                                }),
                                (0, i.jsx)(m.N, {
                                    ref: L,
                                    className: I().scrollableContent,
                                    containerClassName: I().scrollableContainer,
                                    ...(0, n.Am)(
                                        n.e8.landing.BLOCK_ENTITY_PAGE,
                                    ),
                                    children: (0, i.jsxs)("div", {
                                        className: I().container,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: I().content,
                                                "aria-labelledby":
                                                    "block-entities-header",
                                                tabIndex: 0,
                                                children: S,
                                            }),
                                            (0, i.jsx)(C.A, {
                                                children: (0, i.jsx)(C.wi, {
                                                    className: I().footer,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        78663: (e) => {
            e.exports = {
                root: "InStyle_root__ZsdXE",
                controls: "InStyle_controls__mGqhj",
                header: "InStyle_header__C2AWP",
                important: "InStyle_important__msPsl",
                tab: "InStyle_tab__DeURY",
                tabCarousel: "InStyle_tabCarousel__SXqBO",
                item: "InStyle_item__e5_Qz",
            };
        },
        79759: (e) => {
            e.exports = {
                root: "BlockEntities_root__sHn14",
                scrollableContent: "BlockEntities_scrollableContent__4A0tK",
                scrollableContainer: "BlockEntities_scrollableContainer__KXyas",
                container: "BlockEntities_container__1XiOc",
                content: "BlockEntities_content__bfoTn",
                shimmerWithSubcover: "BlockEntities_shimmerWithSubcover__dYd6P",
                footer: "BlockEntities_footer__eEuix",
            };
        },
        79899: (e, t, a) => {
            "use strict";
            a.d(t, { g: () => _ });
            var i = a(33008),
                l = a(66268),
                s = a(93967),
                r = a(34874),
                o = a(52732),
                n = a(90317),
                d = a(45242),
                c = a(79169),
                m = a(18740);
            let u = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        containerClassName: u,
                        headerClassName: _,
                        meta: g,
                        data: b,
                        headingVariant: p,
                        className: v,
                        ...A
                    } = e;
                    return (0, i.jsx)(m.OY, {
                        className: v,
                        ...A,
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        headerClassName: _,
                        containerClassName: u,
                        title: g.title,
                        description: g.description,
                        viewAllActionLink: g.viewAllActionLink,
                        ref: t,
                        headingVariant: p,
                        children:
                            null == b
                                ? void 0
                                : b.items.map((e, t) => {
                                      switch (e.type) {
                                          case r._.ALBUM_ITEM:
                                              return (0, i.jsx)(
                                                  c.Bki,
                                                  {
                                                      objectType: s.ky.Album,
                                                      objectId: String(
                                                          e.data.id,
                                                      ),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount:
                                                          b.items.length,
                                                      children: (0, i.jsx)(
                                                          o.aX,
                                                          {
                                                              withLikesCount:
                                                                  !0,
                                                              album: e.data,
                                                              contentLinesCount: 3,
                                                          },
                                                      ),
                                                  },
                                                  e.data.id,
                                              );
                                          case r._.ARTIST_ITEM:
                                              return (0, i.jsx)(
                                                  c.Bki,
                                                  {
                                                      objectType: s.ky.Artist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount:
                                                          b.items.length,
                                                      children: (0, i.jsx)(
                                                          n.ao,
                                                          {
                                                              artist: e.data,
                                                              contentLinesCount: 3,
                                                          },
                                                          e.data.id,
                                                      ),
                                                  },
                                                  e.data.id,
                                              );
                                          case r._.PLAYLIST_ITEM:
                                              return (0, i.jsx)(
                                                  c.Bki,
                                                  {
                                                      objectType: s.ky.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount:
                                                          b.items.length,
                                                      children: (0, i.jsx)(
                                                          d.B6,
                                                          {
                                                              playlist: e.data,
                                                              contentLinesCount: 3,
                                                          },
                                                          e.data.id,
                                                      ),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                _ = (0, l.forwardRef)((e, t) =>
                    (0, i.jsx)(u, { forwardRef: t, ...e }),
                );
        },
        83080: (e) => {
            e.exports = { root: "VirtualGridRow_root___UfbI" };
        },
        84342: (e) => {
            e.exports = {
                root: "CollectionArtistsEmpty_root__7K3il",
                text: "CollectionArtistsEmpty_text__T_krz",
            };
        },
        86248: (e, t, a) => {
            "use strict";
            a.d(t, { t: () => u });
            var i = a(33008),
                l = a(66268),
                s = a(93967),
                r = a(34874),
                o = a(52732),
                n = a(45242),
                d = a(79169),
                c = a(18740);
            let m = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        containerClassName: m,
                        headerClassName: u,
                        meta: _,
                        data: g,
                        headingVariant: b,
                        className: p,
                        ...v
                    } = e;
                    return (0, i.jsx)(c.OY, {
                        className: p,
                        ...v,
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        headerClassName: u,
                        containerClassName: m,
                        title: _.title,
                        description: _.description,
                        viewAllActionLink: _.viewAllActionLink,
                        ref: t,
                        headingVariant: b,
                        children:
                            null == g
                                ? void 0
                                : g.items.map((e, t) =>
                                      e.type === r._.NON_MUSIC_ALBUM_ITEM
                                          ? (0, i.jsx)(
                                                d.Bki,
                                                {
                                                    objectType: s.ky.Album,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount:
                                                        g.items.length,
                                                    children: (0, i.jsx)(o.aX, {
                                                        album: e.data,
                                                        contentLinesCount: 3,
                                                        withLikesCount: !0,
                                                    }),
                                                },
                                                e.data.id,
                                            )
                                          : (0, i.jsx)(
                                                d.Bki,
                                                {
                                                    objectType: s.ky.Playlist,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount:
                                                        g.items.length,
                                                    children: (0, i.jsx)(n.B6, {
                                                        playlist: e.data,
                                                        contentLinesCount: 3,
                                                    }),
                                                },
                                                e.data.id,
                                            ),
                                  ),
                    });
                },
                u = (0, l.forwardRef)((e, t) =>
                    (0, i.jsx)(m, { forwardRef: t, ...e }),
                );
        },
        86367: (e) => {
            e.exports = {
                item: "VibesCarousel_item__AupL0",
                important: "VibesCarousel_important__JkzUC",
            };
        },
        86790: (e, t, a) => {
            "use strict";
            a.d(t, { R: () => b, k: () => g });
            var i = a(33008),
                l = a(85896),
                s = a(66268),
                r = a(93967),
                o = a(95567),
                n = a(54344),
                d = a(79169),
                c = a(86367),
                m = a.n(c);
            let u = (e) => {
                    let {
                        forwardRef: t,
                        items: a,
                        itemClassName: s,
                        containerClassName: c,
                        ariaLabelledBy: u,
                    } = e;
                    return (0, i.jsx)(o.Carousel, {
                        ref: t,
                        className: c,
                        itemClassName: (0, l.$)(m().item, m().important, s),
                        "aria-labelledby": u,
                        children:
                            null == a
                                ? void 0
                                : a.map((e, t) =>
                                      (0, i.jsx)(
                                          d.Bki,
                                          {
                                              objectType: r.ky.Wave,
                                              objectId: e.stationId,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount:
                                                  null == a ? void 0 : a.length,
                                              children: (0, i.jsx)(n.xy, {
                                                  vibe: e,
                                              }),
                                          },
                                          e.stationId,
                                      ),
                                  ),
                    });
                },
                _ = (e) => {
                    let {
                        forwardRef: t,
                        isActive: a,
                        itemClassName: s,
                        containerClassName: r,
                        ariaLabelledBy: d,
                        length: c,
                    } = e;
                    return (0, i.jsx)(o.Carousel, {
                        ref: t,
                        className: r,
                        itemClassName: (0, l.$)(m().item, m().important, s),
                        "aria-labelledby": d,
                        children: Array.from({ length: c }, (e, t) =>
                            (0, i.jsx)(n.Eb, { isActive: a }, t),
                        ),
                    });
                },
                g = (0, s.forwardRef)((e, t) =>
                    (0, i.jsx)(u, { forwardRef: t, ...e }),
                ),
                b = (0, s.forwardRef)((e, t) =>
                    (0, i.jsx)(_, { forwardRef: t, ...e }),
                );
        },
        87705: (e) => {
            e.exports = {
                titleShimmer: "WizardTextShimmer_titleShimmer__g__ye",
                titleTextShimmer: "WizardTextShimmer_titleTextShimmer__ThHNk",
                textShimmer: "WizardTextShimmer_textShimmer__QokKt",
                descriptionShimmer:
                    "WizardTextShimmer_descriptionShimmer__Z9daY",
            };
        },
        87951: (e) => {
            e.exports = {
                root_withNewConcertCards:
                    "Concerts_root_withNewConcertCards__42M3w",
                item: "Concerts_item__jetvg",
                important: "Concerts_important__rvXs6",
                root: "Concerts_root__12jay",
                controls: "Concerts_controls__n4qr8",
                shimmer: "Concerts_shimmer__ujsLv",
            };
        },
        88411: (e) => {
            e.exports = { root: "Overview_root__2deXs" };
        },
        88422: (e) => {
            e.exports = {
                root: "ContinueListenTrack_root__JFzVe",
                cover: "ContinueListenTrack_cover__E5zob",
                important: "ContinueListenTrack_important__4_84V",
                metaTrack: "ContinueListenTrack_metaTrack__hSIYC",
                content: "ContinueListenTrack_content__xU2R9",
                textContainer: "ContinueListenTrack_textContainer__zisLi",
                titleIcon: "ContinueListenTrack_titleIcon__smcf_",
                title: "ContinueListenTrack_title__LBdpD",
                explicitMark: "ContinueListenTrack_explicitMark___eXOa",
                metaContainer: "ContinueListenTrack_metaContainer__Yoo2N",
                playButton: "ContinueListenTrack_playButton__5tT4s",
                progress: "ContinueListenTrack_progress__CfJQP",
                fullCircle: "ContinueListenTrack_fullCircle__xrROh",
                progressCircle: "ContinueListenTrack_progressCircle__msDye",
            };
        },
        88699: (e) => {
            e.exports = {
                root: "LikesAndHistoryItem_root__oI1gk",
                link: "LikesAndHistoryItem_link__snTl_",
                start: "LikesAndHistoryItem_start__wdtiV",
                textContainer: "LikesAndHistoryItem_textContainer__yGdOu",
                titleIcon: "LikesAndHistoryItem_titleIcon__2D_yS",
                title: "LikesAndHistoryItem_title__hdi2H",
                subtitle: "LikesAndHistoryItem_subtitle__ghuKi",
                covers: "LikesAndHistoryItem_covers__9k_yw",
                coverContainer: "LikesAndHistoryItem_coverContainer__fwXXJ",
                cover: "LikesAndHistoryItem_cover__QlRhz",
            };
        },
        89286: (e) => {
            e.exports = {
                plate: "MixesGridMixCard_plate__ONH3P",
                root: "MixesGridMixCard_root__HHE7z",
                subcover: "MixesGridMixCard_subcover__z5sBj",
                link: "MixesGridMixCard_link__D3_S6",
                header: "MixesGridMixCard_header__t24VH",
                title: "MixesGridMixCard_title__fKTCy",
                cover: "MixesGridMixCard_cover__Ra3ic",
            };
        },
        90173: (e) => {
            e.exports = {
                root: "NewReleaseCard_root__IY5m_",
                ripple: "NewReleaseCard_ripple__VoybZ",
                image: "NewReleaseCard_image__oxm2S",
                info: "NewReleaseCard_info__rcfoY",
                type: "NewReleaseCard_type__cW58D",
                title: "NewReleaseCard_title__N5soS",
                description: "NewReleaseCard_description__Daz5q",
                container: "NewReleaseCard_container__XvwZC",
                explicitMark: "NewReleaseCard_explicitMark__isgxE",
                explicitMarkContainer:
                    "NewReleaseCard_explicitMarkContainer__QHRoH",
                button: "NewReleaseCard_button__WPk82",
                paperLink: "NewReleaseCard_paperLink__NN_8o",
            };
        },
        95227: (e, t, a) => {
            "use strict";
            a.d(t, { Q$: () => I, Ux: () => A, LW: () => m, rA: () => c });
            var i = a(84798),
                l = a(42314),
                s = a(79169),
                r = a(23949),
                o = a(66268),
                n = a(42213);
            let d = { width: 400, height: 400 },
                c = (e) => {
                    let {
                            count: t,
                            getEstimateSize: a,
                            gap: i,
                            containerRef: l,
                        } = e,
                        {
                            settings: { isMobile: c },
                        } = (0, s.Pjs)(),
                        { contentScrollRef: m } = (0, s.gKY)(),
                        u = (0, o.useRef)(new Map()),
                        _ = (0, o.useRef)(void 0),
                        g = {
                            count: t,
                            gap: i,
                            estimateSize: (e) => {
                                let t = u.current.get(String(e));
                                return null != t ? t : a(e);
                            },
                            overscan: 2,
                            initialRect: d,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, a) => {
                                if (!t) return 0;
                                let i = t.getBoundingClientRect().top;
                                return e && 1
                                    ? i + window.scrollY
                                    : !e && a
                                      ? i + a.scrollTop
                                      : 0;
                            })(c, l, m),
                        },
                        b = (0, r.XW)(g),
                        p = (0, r.Te)({
                            ...g,
                            getScrollElement: () => m,
                            initialOffset: null == m ? void 0 : m.scrollTop,
                        }),
                        v = c ? b : p,
                        A = (0, n.c)(() => {
                            v.measure();
                        });
                    return (
                        (0, o.useEffect)(() => {
                            _.current ||
                                (_.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    e.forEach((e) => {
                                        let a =
                                            e.target.getAttribute("data-index");
                                        if (e.target && a) {
                                            let i = e.contentRect.height;
                                            i &&
                                                i !== u.current.get(a) &&
                                                (u.current.set(
                                                    a,
                                                    e.contentRect.height,
                                                ),
                                                (t = !0));
                                        }
                                    }),
                                        t && A();
                                }));
                        }, [A]),
                        { virtualizer: v, resizeObserver: _.current }
                    );
                },
                m = (e) => {
                    let {
                            count: t,
                            getEstimateRowSize: a,
                            rowGap: r,
                            columnGap: o,
                            minColumnWidth: n,
                            maxColumnWidth: d,
                            minColumnCount: m,
                            maxColumnCount: u,
                            containerRef: _,
                        } = e,
                        { rowCount: g, columnCount: b } = (0, s.E11)({
                            totalCount: t,
                            columnGap: null != o ? o : 0,
                            minColumnCount: m,
                            maxColumnWidth: d,
                            minColumnWidth: n,
                            maxColumnCount: u,
                            containerRef: _,
                        }),
                        { virtualizer: p, resizeObserver: v } = c({
                            count: g,
                            getEstimateSize: a,
                            gap: r,
                            containerRef: _,
                        }),
                        A = (0, i.A)(
                            Array.from({ length: t }, (e, t) => t),
                            b,
                        ),
                        C = (0, l.L)(() => {
                            var e, t;
                            if (!p.range) return null;
                            let a =
                                    null == (e = A[p.range.startIndex])
                                        ? void 0
                                        : e.at(0),
                                i =
                                    null == (t = A[p.range.endIndex])
                                        ? void 0
                                        : t.at(-1);
                            return void 0 !== a && void 0 !== i
                                ? { startIndex: a, endIndex: i }
                                : null;
                        });
                    return {
                        virtualizer: p,
                        rowResizeObserver: v,
                        indices: A,
                        columnCount: b,
                        visibleRange: C,
                    };
                };
            var u = a(33008),
                _ = a(97531),
                g = a(44612),
                b = a(85896),
                p = a(83080),
                v = a.n(p);
            let A = (0, _.PA)((e) => {
                let {
                        indices: t,
                        virtualItem: a,
                        renderItemByIndex: i,
                        columnClassName: l,
                        className: s,
                        resizeObserver: r,
                        scrollMargin: n,
                    } = e,
                    d = (0, o.useRef)(null),
                    c = t[a.index],
                    m = {
                        "--virtual-grid-row-vertical-offset": "".concat(
                            a.start - n,
                            "px",
                        ),
                    };
                return (
                    (0, o.useEffect)(() => {
                        let e = d.current;
                        if (e)
                            return (
                                null == r || r.observe(e),
                                () => {
                                    null == r || r.unobserve(e);
                                }
                            );
                    }, [r]),
                    (0, u.jsx)("div", {
                        "data-index": a.index,
                        ref: d,
                        style: m,
                        className: (0, b.$)(v().root, s),
                        children:
                            null == c
                                ? void 0
                                : c.map((e) =>
                                      (0, u.jsx)(
                                          "div",
                                          { className: l, children: i(e) },
                                          "".concat(a.key, "_").concat(e),
                                      ),
                                  ),
                    })
                );
            });
            var C = a(27160),
                T = a.n(C);
            let I = (0, _.PA)((e) => {
                let {
                        count: t,
                        rowGap: a,
                        columnGap: i,
                        getEstimateRowSize: l,
                        minColumnCount: s = 2,
                        minColumnWidth: r,
                        maxColumnWidth: n,
                        maxColumnCount: d,
                        renderItemByIndex: c,
                        onChangeRange: _,
                    } = e,
                    [b, p] = (0, g.d)(),
                    {
                        virtualizer: v,
                        rowResizeObserver: C,
                        columnCount: I,
                        indices: h,
                    } = m({
                        count: t,
                        rowGap: a,
                        columnGap: i,
                        getEstimateRowSize: l,
                        minColumnCount: s,
                        minColumnWidth: r,
                        maxColumnWidth: n,
                        maxColumnCount: d,
                        containerRef: b,
                    });
                (0, o.useEffect)(() => {
                    !v.isScrolling && v.range && (null == _ || _(v.range, I));
                }, [_, v.isScrolling, v.range, I]);
                let L = {
                    "--virtual-grid-height": "".concat(v.getTotalSize(), "px"),
                    "--virtual-grid-column-count": I,
                };
                return (0, u.jsx)("div", {
                    ref: p,
                    style: L,
                    className: T().root,
                    children: v
                        .getVirtualItems()
                        .map((e) =>
                            (0, u.jsx)(
                                A,
                                {
                                    className: T().row,
                                    columnClassName: T().column,
                                    virtualItem: e,
                                    resizeObserver: C,
                                    indices: h,
                                    renderItemByIndex: c,
                                    scrollMargin: v.options.scrollMargin,
                                },
                                e.key,
                            ),
                        ),
                });
            });
        },
        97464: (e, t, a) => {
            "use strict";
            var i;
            a.d(t, { n: () => i }),
                (function (e) {
                    (e.ALBUM = "album_tab"),
                        (e.PRESAVED_ALBUM = "presaved_album_tab");
                })(i || (i = {}));
        },
        99046: (e) => {
            e.exports = {
                root: "PlaylistWithTracksEmpty_root__J_i2h",
                image: "PlaylistWithTracksEmpty_image__U2P1t",
                header: "PlaylistWithTracksEmpty_header___u3dc",
                text: "PlaylistWithTracksEmpty_text__b8DQv",
                myWaveButton: "PlaylistWithTracksEmpty_myWaveButton__YJgY5",
                myWaveButtonText:
                    "PlaylistWithTracksEmpty_myWaveButtonText__wBPxS",
            };
        },
        99183: (e) => {
            e.exports = {
                root: "MapBlock_root__lcL__",
                heading: "MapBlock_heading__20gje",
                linkContainer: "MapBlock_linkContainer__iO0dw",
                mapImage: "MapBlock_mapImage__Qch0h",
                addressContainer: "MapBlock_addressContainer__gFnzq",
                address: "MapBlock_address__UofT6",
                metroStations: "MapBlock_metroStations__T3Zpc",
            };
        },
        99419: (e) => {
            e.exports = {
                root: "Special_root__FOrBZ",
                actions: "Special_actions__XYuvB",
                textContainer: "Special_textContainer__pN_TF",
                textColor: "Special_textColor__dySbq",
                imageContainer: "Special_imageContainer__V1_E3",
                image: "Special_image__1sSXR",
                button: "Special_button__j8gGH",
            };
        },
        99570: (e, t, a) => {
            "use strict";
            a.d(t, { Concert: () => C });
            var i = a(33008),
                l = a(85896),
                s = a(66268),
                r = a(73827),
                o = a(93967),
                n = a(42213),
                d = a(45415),
                c = a(52756),
                m = a(54487),
                u = a(93134),
                _ = a(77868),
                g = a(51551),
                b = a(79169),
                p = a(46697),
                v = a.n(p),
                A = (function (e) {
                    return (e.SPACE = "Space"), (e.ENTER = "Enter"), e;
                })(A || {});
            let C = (e) => {
                let { concert: t } = e,
                    {
                        title: a,
                        datetime: p,
                        city: A,
                        place: C,
                        contentRating: T,
                        cover: I,
                        dataSessionId: h,
                        rank: L,
                        isCashbackExperimentEnabled: y,
                        cashbackTitle: S,
                    } = t,
                    { formatDate: N } = (0, r.A)(),
                    { ref: E, intersectionPropertyId: j } = (0, b.nMI)(),
                    k = (0, b.NKK)(),
                    { state: x, toggleTrue: R, toggleFalse: P } = (0, d.e)(!1),
                    { experiments: f } = (0, b.Pjs)(),
                    { href: w } = (0, b.uvd)("/concert/:concertId", {
                        params: { concertId: t.id },
                    }),
                    K = (0, b.ZpR)(w),
                    O = f.checkExperiment(b.zal.WebNextConcertPage, "on"),
                    M = (0, s.useMemo)(() => {
                        if (y && S)
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(u.q, {
                                        children: N(p, (0, b.fS8)()),
                                    }),
                                    (0, i.jsxs)(_.Caption, {
                                        variant: "span",
                                        type: "text",
                                        size: "m",
                                        weight: "medium",
                                        className: v().descriptionContainer,
                                        children: [
                                            (0, i.jsx)(_.Caption, {
                                                variant: "span",
                                                type: "text",
                                                size: "m",
                                                weight: "medium",
                                                lineClamp: 1,
                                                className: v().description,
                                                children: C,
                                            }),
                                            (0, i.jsx)(_.Caption, {
                                                variant: "span",
                                                type: "text",
                                                size: "m",
                                                weight: "medium",
                                                className: v().description,
                                                "aria-hidden": !0,
                                                children: " • ",
                                            }),
                                            T &&
                                                (0, i.jsx)(_.Caption, {
                                                    variant: "span",
                                                    type: "text",
                                                    size: "m",
                                                    weight: "medium",
                                                    className: v().description,
                                                    children: T,
                                                }),
                                        ],
                                    }),
                                    (0, i.jsx)(g.mi, {
                                        className: v().cashback,
                                        title: S,
                                    }),
                                ],
                            });
                        let e = [];
                        return (
                            p && e.push(N(p, (0, b.fS8)())),
                            T && e.push(T),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(_.Caption, {
                                        variant: "span",
                                        type: "text",
                                        size: "m",
                                        weight: "medium",
                                        lineClamp: 1,
                                        className: v().description,
                                        children: C,
                                    }),
                                    (0, i.jsxs)(u.q, {
                                        children: [N(p, (0, b.fS8)()), " ", T],
                                    }),
                                    (0, i.jsx)(_.Caption, {
                                        variant: "span",
                                        type: "text",
                                        size: "m",
                                        weight: "medium",
                                        lineClamp: 1,
                                        className: v().description,
                                        "aria-hidden": !0,
                                        children: e.join(" • "),
                                    }),
                                ],
                            })
                        );
                    }, [S, T, p, N, y, C]),
                    D = (0, s.useCallback)(
                        (e) => {
                            k({ to: o.QT.ConcertPurchaseScreen }),
                                R(),
                                null == e || e.stopPropagation();
                        },
                        [R, k],
                    ),
                    B = (0, n.c)((e) => {
                        if (!O) return void D(e);
                        K(e);
                    }),
                    V = (0, s.useCallback)(
                        (e) => {
                            ("Space" === e.code || "Enter" === e.code) &&
                                (e.preventDefault(), B());
                        },
                        [B],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(m.Paper, {
                            className: v().root,
                            style: ((e) => {
                                let t;
                                if (e) {
                                    let { h: a, s: i, l } = (0, b.g8k)(e);
                                    t =
                                        "linear-gradient(\n            180deg, \n            transparent 0%, \n            hsla("
                                            .concat(a, "deg, ")
                                            .concat(i, "%, ")
                                            .concat(
                                                l,
                                                "%, 0) 40%, \n            hsla(",
                                            )
                                            .concat(a, "deg, ")
                                            .concat(i, "%, ")
                                            .concat(
                                                l,
                                                "%, 0.1) 43%,\n            hsla(",
                                            )
                                            .concat(a, "deg, ")
                                            .concat(i, "%, ")
                                            .concat(
                                                l,
                                                "%, 0.2) 46%,\n            hsla(",
                                            )
                                            .concat(a, "deg, ")
                                            .concat(i, "%, ")
                                            .concat(
                                                l,
                                                "%, 0.3) 49%,\n            hsla(",
                                            )
                                            .concat(a, "deg, ")
                                            .concat(i, "%, ")
                                            .concat(
                                                l,
                                                "%, 0.4) 52%,\n            hsla(",
                                            )
                                            .concat(a, "deg, ")
                                            .concat(i, "%, ")
                                            .concat(
                                                l,
                                                "%, 0.5) 55%,\n            hsla(",
                                            )
                                            .concat(a, "deg, ")
                                            .concat(i, "%, ")
                                            .concat(
                                                l,
                                                "%, 0.6) 58%,\n            hsla(",
                                            )
                                            .concat(a, "deg, ")
                                            .concat(i, "%, ")
                                            .concat(
                                                l,
                                                "%, 0.7) 61%,\n            hsla(",
                                            )
                                            .concat(a, "deg, ")
                                            .concat(i, "%, ")
                                            .concat(
                                                l,
                                                "%, 0.8) 64%,\n            hsla(",
                                            )
                                            .concat(a, "deg, ")
                                            .concat(i, "%, ")
                                            .concat(
                                                l,
                                                "%, 0.9) 67%, \n            hsla(",
                                            )
                                            .concat(a, "deg, ")
                                            .concat(i, "%, ")
                                            .concat(
                                                l,
                                                "%, 1) 70%, \n            hsla(",
                                            )
                                            .concat(a, "deg, ")
                                            .concat(i, "%, ")
                                            .concat(l, "%, 1) 100%\n        )");
                                }
                                return { "--concert-card-linear-gradient": t };
                            })(null == I ? void 0 : I.color),
                            radius: "l",
                            role: "button",
                            tabIndex: 0,
                            onClick: B,
                            onKeyDown: V,
                            ref: E,
                            "data-intersection-property-id": j,
                            children: [
                                (0, i.jsx)(c.Image, {
                                    className: v().cover,
                                    src: null == I ? void 0 : I.uri,
                                    size: 400,
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                    withLoadingIndicator: !1,
                                }),
                                void 0 !== L &&
                                    (0, i.jsx)(_.Caption, {
                                        variant: "span",
                                        size: "l",
                                        weight: "bold",
                                        className: (0, l.$)(
                                            v().index,
                                            v().title,
                                        ),
                                        "aria-hidden": !0,
                                        children: L,
                                    }),
                                (0, i.jsxs)("div", {
                                    className: v().meta,
                                    children: [
                                        (0, i.jsx)(_.Heading, {
                                            variant: "h3",
                                            size: "xs",
                                            weight: "bold",
                                            lineClamp: 3,
                                            className: (0, l.$)(
                                                v().title,
                                                v().concertTitle,
                                            ),
                                            children: a,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: v().textContainer,
                                            children: [
                                                p &&
                                                    (0, i.jsx)(g.dE, {
                                                        datetime: p,
                                                        className: v().date,
                                                        monthClassName:
                                                            v().description,
                                                        dayClassName: v().title,
                                                        withWeekday: !1,
                                                    }),
                                                (0, i.jsxs)("div", {
                                                    className: v().info,
                                                    children: [
                                                        (0, i.jsx)(_.Caption, {
                                                            variant: "span",
                                                            type: "controls",
                                                            size: "m",
                                                            weight: "medium",
                                                            lineClamp: 1,
                                                            className:
                                                                v().title,
                                                            children: A,
                                                        }),
                                                        M,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(g.hW, {
                            dataSessionId: h,
                            isOpened: x,
                            onOpen: R,
                            onClose: P,
                        }),
                    ],
                });
            };
        },
        99857: (e, t, a) => {
            "use strict";
            var i;
            a.d(t, { z: () => i }),
                (function (e) {
                    (e.NONE = "none"),
                        (e.DEFAULT = "default"),
                        (e.CUSTOM = "custom");
                })(i || (i = {}));
        },
    },
]);
