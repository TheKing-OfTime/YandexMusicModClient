"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [682],
    {
        48301: (t, e, a) => {
            a.d(e, {
                rJ: () => F.ArtistAlbumsPage,
                GH: () => B.ArtistClipsPage,
                cC: () => J.ArtistConcertsPage,
                Sd: () => M.ArtistFamiliarPage,
                ZQ: () => j.ArtistPage,
                E: () => w,
                Wy: () => V.ArtistSimilarPage,
                fD: () => x.ArtistTracksPage,
            }),
                a(69473),
                a(92538),
                a(34557),
                a(8538),
                a(43528),
                a(1022),
                a(99325),
                a(76764),
                a(35449);
            var r,
                i = a(41028),
                s = a(61979),
                l = a(93435),
                o = a(85897),
                n = a(12898),
                u = a(52732),
                d = a(90317),
                g = a(64641),
                c = a(45242),
                m = a(44078),
                p = a(70879),
                S = a(51551),
                N = a(79169),
                E = a(59615);
            !(function (t) {
                (t.DEFAULT = "default"),
                    (t.DONATION = "donation"),
                    (t.REWIND = "year-rewind");
            })(r || (r = {}));
            let v = /^https:\/\/tips\.yandex\.ru\//,
                b = (t) => v.test(null != t ? t : ""),
                y = (t) => {
                    let { available: e, disclaimers: a } = (0, N.fyr)(t);
                    return (0, i.wg)({
                        clipId: t.clipId,
                        title: t.title,
                        thumbnail: t.thumbnail,
                        previewUrl: t.previewUrl,
                        duration: t.duration,
                        version: t.version,
                        artists: (t.artists || []).map((t) =>
                            (0, p.as)({ artist: t }),
                        ),
                        isAvailable: e,
                        disclaimers: a,
                    });
                };
            var I = a(13023),
                T = a(24284);
            let X = i.gK
                    .compose(
                        i.gK.model("ArtistAlbumsPage", {
                            pager: i.gK.maybeNull(E.jd),
                            variant: i.gK.maybeNull(
                                i.gK.enumeration(Object.values(T.h)),
                            ),
                            alreadyRequestedPages: i.gK.map(i.gK.number),
                            pendingPages: i.gK.map(i.gK.number),
                            requests: i.gK.maybeNull(i.gK.number),
                            errorStatusCode: i.gK.maybeNull(i.gK.number),
                            items: i.gK.array(i.gK.maybeNull(u.JC)),
                        }),
                        E.pl,
                        E.XT,
                    )
                    .views((t) => ({
                        get isNotFound() {
                            var e;
                            let a =
                                    t.isResolved &&
                                    (null == (e = t.pager)
                                        ? void 0
                                        : e.total) === 0,
                                r =
                                    t.errorStatusCode === s.X1.NOT_FOUND ||
                                    t.errorStatusCode === s.X1.BAD_REQUEST;
                            return (t.isRejected && r) || a;
                        },
                    }))
                    .actions((t) => ({
                        setVariant: (e) => {
                            t.variant = e;
                        },
                        getData: (0, i.L3)(function* (e) {
                            let {
                                    artistId: a,
                                    page: r = 0,
                                    pageSize: l = 20,
                                    sort: o,
                                    preloadedAlbums: n,
                                } = e,
                                { artistsResource: d, modelActionsLogger: g } =
                                    (0, i._$)(t);
                            if (
                                !(
                                    t.isLoading &&
                                    t.pendingPages.has("".concat(r))
                                ) &&
                                !t.alreadyRequestedPages.has("".concat(r))
                            ) {
                                "number" == typeof r &&
                                    t.alreadyRequestedPages.set(
                                        "".concat(r),
                                        r,
                                    );
                                try {
                                    var c;
                                    (t.loadingState = N.GuX.PENDING),
                                        t.pendingPages.set("".concat(r), r);
                                    let e = {
                                            artistId: a,
                                            page: r,
                                            pageSize: l,
                                            sort: {
                                                sortBy:
                                                    null == o
                                                        ? void 0
                                                        : o.sortBy,
                                            },
                                        },
                                        s = n;
                                    if (!s)
                                        switch (t.variant) {
                                            case T.h.COMPILATIONS:
                                                s = yield d.getAlsoAlbums(e);
                                                break;
                                            case T.h.DISCOGRAPHY:
                                                s =
                                                    yield d.getDiscographyAlbums(
                                                        e,
                                                    );
                                                break;
                                            default:
                                                s = yield d.getDirectAlbums(e);
                                        }
                                    let g = {
                                        page: r,
                                        perPage: l,
                                        total: s.pager.total,
                                    };
                                    0 === t.items.length &&
                                        (t.items = (0, i.wg)(
                                            Array.from(
                                                { length: g.total },
                                                () => null,
                                            ),
                                        ));
                                    let m = s.albums.map(u.pp);
                                    (0, N.Iyy)({
                                        items: t.items,
                                        mappedRawItems: m,
                                        page: r,
                                        pageSize: l,
                                    }),
                                        (t.pager = g),
                                        (t.requests =
                                            (null != (c = t.requests) ? c : 0) +
                                            1),
                                        (t.loadingState = N.GuX.RESOLVE);
                                } catch (e) {
                                    g.error(e),
                                        e instanceof s.GX &&
                                            (e.statusCode === s.X1.NOT_FOUND ||
                                                e.statusCode ===
                                                    s.X1.BAD_REQUEST) &&
                                            (t.errorStatusCode =
                                                s.X1.NOT_FOUND),
                                        t.loadingState !== N.GuX.IDLE &&
                                            (t.loadingState = N.GuX.REJECT);
                                } finally {
                                    t.pendingPages.delete("".concat(r));
                                }
                            }
                        }),
                        reset() {
                            (t.loadingState = N.GuX.IDLE),
                                t.pendingPages.clear(),
                                (t.variant = null),
                                t.alreadyRequestedPages.clear(),
                                (t.errorStatusCode = null),
                                t.destroyItems([t.pager, t.items]);
                        },
                    })),
                C = i.gK
                    .model("ArtistClipsPage", {
                        pagesLoader: (0, E.Ij)(g.kv),
                        errorStatusCode: i.gK.maybeNull(i.gK.number),
                    })
                    .views((t) => ({
                        get isShimmerVisible() {
                            return !t.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return t.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return t.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return t.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return t.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return t.pagesLoader.requestsCount;
                        },
                        get items() {
                            var e;
                            return null != (e = t.pagesLoader.items) ? e : [];
                        },
                        get isNotFound() {
                            return (
                                this.isRejected &&
                                t.errorStatusCode === s.X1.NOT_FOUND
                            );
                        },
                    }))
                    .actions((t) => ({
                        getData: (0, i.L3)(function* (e) {
                            let {
                                    artistId: a,
                                    page: r = 0,
                                    pageSize: l = 20,
                                    preloadedClips: o,
                                } = e,
                                { artistsResource: n, modelActionsLogger: u } =
                                    (0, i._$)(t);
                            if (t.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    t.pagesLoader.setPageState(
                                        r,
                                        N.GuX.PENDING,
                                    );
                                    let e = o;
                                    e ||
                                        (e = yield n.getClips({
                                            artistId: a,
                                            page: r,
                                            pageSize: l,
                                        }));
                                    let i = e.items.map((t) =>
                                        (0, g.SZ)({
                                            clip: t.data.clip,
                                            artists: t.data.artists,
                                        }),
                                    );
                                    t.pagesLoader.setItems(i, {
                                        page: r,
                                        pager: e.pager,
                                    });
                                } catch (e) {
                                    u.error(e),
                                        t.pagesLoader.setItems(null, {
                                            responseStatus: N.FlZ.ERROR,
                                            page: r,
                                        }),
                                        e instanceof s.GX &&
                                            (e.statusCode === s.X1.NOT_FOUND ||
                                                e.statusCode ===
                                                    s.X1.BAD_REQUEST) &&
                                            (t.errorStatusCode =
                                                s.X1.NOT_FOUND);
                                }
                        }),
                        reset() {
                            t.pagesLoader.reset(), (t.errorStatusCode = null);
                        },
                    })),
                G = i.gK
                    .compose(
                        i.gK.model("ArtistConcertsPage", {
                            errorStatusCode: i.gK.maybeNull(i.gK.number),
                            concerts: i.gK.maybeNull(i.gK.array(S.aR)),
                        }),
                        E.pl,
                        E.XT,
                    )
                    .views((t) => ({
                        get isLoading() {
                            return (
                                t.isNeededToLoad ||
                                t.loadingState === N.GuX.PENDING
                            );
                        },
                        get isNotFound() {
                            var e;
                            let a =
                                    t.isResolved &&
                                    (null == (e = t.concerts)
                                        ? void 0
                                        : e.length) === 0,
                                r =
                                    t.errorStatusCode === s.X1.NOT_FOUND ||
                                    t.errorStatusCode === s.X1.BAD_REQUEST;
                            return (t.isRejected && r) || a;
                        },
                    }))
                    .actions((t) => ({
                        getData: (0, i.L3)(function* (e) {
                            let { artistId: a, preloadedConcerts: r } = e,
                                { artistsResource: l, modelActionsLogger: o } =
                                    (0, i._$)(t);
                            if (t.loadingState !== N.GuX.PENDING)
                                try {
                                    t.loadingState = N.GuX.PENDING;
                                    let e = null == r ? void 0 : r.concerts;
                                    e ||
                                        (e = (yield l.getConcerts({
                                            artistId: a,
                                        })).concerts),
                                        (t.concerts = (0, i.wg)(e.map(S.oP))),
                                        (t.loadingState = N.GuX.RESOLVE);
                                } catch (e) {
                                    o.error(e),
                                        e instanceof s.GX &&
                                            (e.statusCode === s.X1.NOT_FOUND ||
                                                e.statusCode ===
                                                    s.X1.BAD_REQUEST) &&
                                            (t.errorStatusCode =
                                                s.X1.NOT_FOUND),
                                        t.loadingState !== N.GuX.IDLE &&
                                            (t.loadingState = N.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (t.loadingState = N.GuX.IDLE),
                                (t.errorStatusCode = null),
                                t.destroyItems([t.concerts]);
                        },
                    })),
                L = (t) =>
                    (0, i.wg)({
                        ...(0, u.sK)({ album: t, artists: t.artists }),
                        version: t.version,
                    }),
                D = i.gK
                    .compose(
                        i.gK.model("ArtistFamiliarPage", {
                            errorStatusCode: i.gK.maybeNull(i.gK.number),
                            vibeTracks: i.gK.maybeNull(i.gK.array(m.vj)),
                            collectionTracks: i.gK.maybeNull(i.gK.array(m.vj)),
                            collectionAlbums: i.gK.maybeNull(i.gK.array(u.JC)),
                        }),
                        E.pl,
                        E.XT,
                    )
                    .views((t) => {
                        let e = {
                            get isLoading() {
                                return (
                                    t.isNeededToLoad ||
                                    t.loadingState === N.GuX.PENDING
                                );
                            },
                            get isNotFound() {
                                let e =
                                    t.errorStatusCode === s.X1.NOT_FOUND ||
                                    t.errorStatusCode === s.X1.BAD_REQUEST;
                                return t.isRejected && e;
                            },
                            get hasCollectionEntities() {
                                var a, r;
                                return (
                                    (t.isResolved &&
                                        Number(
                                            null == (a = t.collectionTracks)
                                                ? void 0
                                                : a.length,
                                        ) > 0) ||
                                    Number(
                                        null == (r = t.collectionAlbums)
                                            ? void 0
                                            : r.length,
                                    ) > 0
                                );
                            },
                            get shouldShowTitleBlocks() {
                                var i, l;
                                if (e.isLoading) return !0;
                                return (
                                    Number(
                                        null == (i = t.collectionTracks)
                                            ? void 0
                                            : i.length,
                                    ) > 0 &&
                                    Number(
                                        null == (l = t.collectionAlbums)
                                            ? void 0
                                            : l.length,
                                    ) > 0
                                );
                            },
                            get hasVibeTracks() {
                                var o;
                                return (
                                    Number(
                                        null == (o = t.vibeTracks)
                                            ? void 0
                                            : o.length,
                                    ) > 0
                                );
                            },
                            get collectionEntitiesData() {
                                var n, u;
                                return null !=
                                    (u =
                                        null == (n = t.collectionTracks)
                                            ? void 0
                                            : n.map(m.$b))
                                    ? u
                                    : [];
                            },
                            get vibeEntitiesData() {
                                var d, g;
                                return null !=
                                    (g =
                                        null == (d = t.vibeTracks)
                                            ? void 0
                                            : d.map(m.$b))
                                    ? g
                                    : [];
                            },
                        };
                        return e;
                    })
                    .actions((t) => ({
                        getData: (0, i.L3)(function* (e) {
                            let { artistId: a, preloadedFamiliar: r } = e,
                                { artistsResource: l, modelActionsLogger: o } =
                                    (0, i._$)(t);
                            if (t.loadingState !== N.GuX.PENDING)
                                try {
                                    var n, u, d, g, c, p;
                                    t.loadingState = N.GuX.PENDING;
                                    let e = r;
                                    e ||
                                        (e = yield l.getFamiliarYou({
                                            artistId: a,
                                            waveTracksLimit: 100,
                                            collectionTracksLimit: 100,
                                            collectionAlbumsLimit: 20,
                                        })),
                                        (t.vibeTracks = (0, i.wg)(
                                            null == (u = e.wave) ||
                                                null == (n = u.tracks)
                                                ? void 0
                                                : n.map((t) => (0, m.vU)(t)),
                                        )),
                                        (t.collectionTracks = (0, i.wg)(
                                            null == (g = e.collection) ||
                                                null == (d = g.tracks)
                                                ? void 0
                                                : d.map((t) => (0, m.vU)(t)),
                                        )),
                                        (t.collectionAlbums = (0, i.wg)(
                                            null == (p = e.collection) ||
                                                null == (c = p.albums)
                                                ? void 0
                                                : c.map(L),
                                        )),
                                        (t.loadingState = N.GuX.RESOLVE);
                                } catch (e) {
                                    o.error(e),
                                        e instanceof s.GX &&
                                            (e.statusCode === s.X1.NOT_FOUND ||
                                                e.statusCode ===
                                                    s.X1.BAD_REQUEST) &&
                                            (t.errorStatusCode =
                                                s.X1.NOT_FOUND),
                                        t.loadingState !== N.GuX.IDLE &&
                                            (t.loadingState = N.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (t.loadingState = N.GuX.IDLE),
                                (t.errorStatusCode = null),
                                t.destroyItems([
                                    t.vibeTracks,
                                    t.collectionTracks,
                                ]);
                        },
                    }));
            var f = a(25911);
            let K = i.gK.model("ArtistPick", {
                    playlist: f.$o,
                    artists: i.gK.array(p.PK),
                }),
                A = i.gK
                    .compose(
                        i.gK.model("ArtistSimilarArtistsPage", {
                            errorStatusCode: i.gK.maybeNull(i.gK.number),
                            similarArtists: i.gK.maybeNull(i.gK.array(p.PK)),
                        }),
                        E.pl,
                        E.XT,
                    )
                    .views((t) => ({
                        get isLoading() {
                            return (
                                t.isNeededToLoad ||
                                t.loadingState === N.GuX.PENDING
                            );
                        },
                        get isNotFound() {
                            var e;
                            let a =
                                    t.isResolved &&
                                    (null == (e = t.similarArtists)
                                        ? void 0
                                        : e.length) === 0,
                                r =
                                    t.errorStatusCode === s.X1.NOT_FOUND ||
                                    t.errorStatusCode === s.X1.BAD_REQUEST;
                            return (t.isRejected && r) || a;
                        },
                    }))
                    .actions((t) => ({
                        getData: (0, i.L3)(function* (e) {
                            let { artistId: a, preloadedSimilarArtists: r } = e,
                                { artistsResource: l, modelActionsLogger: o } =
                                    (0, i._$)(t);
                            try {
                                t.loadingState = N.GuX.PENDING;
                                let e = r;
                                e ||
                                    (e = yield l.getSimilarArtists({
                                        artistId: a,
                                    })),
                                    (t.similarArtists = (0, i.wg)(
                                        e.similarArtists.map(p.dM),
                                    )),
                                    t.loadingState !== N.GuX.IDLE &&
                                        (t.loadingState = N.GuX.RESOLVE);
                            } catch (e) {
                                o.error(e),
                                    e instanceof s.GX &&
                                        (e.statusCode === s.X1.NOT_FOUND ||
                                            e.statusCode ===
                                                s.X1.BAD_REQUEST) &&
                                        (t.errorStatusCode = s.X1.NOT_FOUND),
                                    t.loadingState !== N.GuX.IDLE &&
                                        (t.loadingState = N.GuX.REJECT);
                            }
                        }),
                        reset() {
                            (t.loadingState = N.GuX.IDLE),
                                (t.errorStatusCode = null),
                                t.destroyItems([t.similarArtists]);
                        },
                    })),
                h = i.gK.model("CommonSubPage", {
                    artistName: i.gK.maybeNull(i.gK.string),
                }),
                R = i.gK
                    .compose(
                        i.gK.model("FamiliarInfo", {
                            vibeTrackCount: i.gK.optional(i.gK.number, 0),
                            collectionTrackCount: i.gK.optional(i.gK.number, 0),
                            collectionAlbumCount: i.gK.optional(i.gK.number, 0),
                        }),
                        E.XT,
                    )
                    .views((t) => {
                        let e = {
                            get hasTracks() {
                                return (
                                    t.isResolved &&
                                    (t.collectionTrackCount > 0 ||
                                        t.vibeTrackCount > 0)
                                );
                            },
                            get hasFamiliarInfo() {
                                return (
                                    t.isResolved &&
                                    (e.hasTracks || t.collectionAlbumCount > 0)
                                );
                            },
                            get tracksCount() {
                                return (
                                    t.collectionTrackCount + t.vibeTrackCount
                                );
                            },
                            get hasCollectionEntities() {
                                return (
                                    t.isResolved &&
                                    (t.collectionTrackCount > 0 ||
                                        t.collectionAlbumCount > 0)
                                );
                            },
                            get hasVibeEntities() {
                                return t.isResolved && t.vibeTrackCount > 0;
                            },
                            href(t) {
                                if (!t) return "";
                                if (e.hasCollectionEntities) {
                                    let { href: e } = (0, N.uvd)(
                                        "/artist/:artistId/familiar",
                                        {
                                            params: { artistId: t },
                                            query: { tab: N.JCK.COLLECTION },
                                        },
                                    );
                                    return e;
                                }
                                if (e.hasVibeEntities) {
                                    let { href: e } = (0, N.uvd)(
                                        "/artist/:artistId/familiar",
                                        {
                                            params: { artistId: t },
                                            query: { tab: N.JCK.VIBE },
                                        },
                                    );
                                    return e;
                                }
                                let { href: a } = (0, N.uvd)(
                                    "/artist/:artistId/familiar",
                                    { params: { artistId: t } },
                                );
                                return a;
                            },
                        };
                        return e;
                    })
                    .actions((t) => ({
                        getData: (0, i.L3)(function* (e) {
                            let { artistId: a } = e,
                                { artistsResource: r, modelActionsLogger: s } =
                                    (0, i._$)(t);
                            if (t.loadingState !== N.GuX.PENDING)
                                try {
                                    t.loadingState = N.GuX.PENDING;
                                    let e = yield r.getFamiliarYouInfo({
                                        artistId: a,
                                        withWaveInfo: !0,
                                        withCollectionInfo: !0,
                                    });
                                    e.collection &&
                                        ((t.collectionTrackCount =
                                            e.collection.trackCount),
                                        (t.collectionAlbumCount =
                                            e.collection.albumCount)),
                                        e.wave &&
                                            (t.vibeTrackCount =
                                                e.wave.trackCount),
                                        t.loadingState !== N.GuX.IDLE &&
                                            (t.loadingState = N.GuX.RESOLVE);
                                } catch (e) {
                                    s.error(e),
                                        t.loadingState !== N.GuX.IDLE &&
                                            (t.loadingState = N.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (t.loadingState = N.GuX.IDLE),
                                (t.vibeTrackCount = 0),
                                (t.collectionTrackCount = 0),
                                (t.collectionAlbumCount = 0);
                        },
                    }));
            var k = a(2865);
            let O = i.gK
                .compose(
                    i.gK.model("FullTracksList", {
                        errorStatusCode: i.gK.maybeNull(i.gK.number),
                        ids: i.gK.maybeNull(i.gK.array(i.gK.string)),
                        tracks: i.gK.optional(i.gK.map(m.vj), {}),
                    }),
                    E.pl,
                    E.XT,
                )
                .views((t) => ({
                    getTrackByIndex(e) {
                        if (!t.ids || !t.ids.length) return null;
                        let a = t.ids[e];
                        return (a && t.tracks.get(a)) || null;
                    },
                    get isNotFound() {
                        var e;
                        let a =
                                t.isResolved &&
                                (null == (e = t.ids) ? void 0 : e.length) === 0,
                            r =
                                t.errorStatusCode === s.X1.NOT_FOUND ||
                                t.errorStatusCode === s.X1.BAD_REQUEST;
                        return (t.isRejected && r) || a;
                    },
                }))
                .actions((t) => ({
                    getTracksIds: (0, i.L3)(function* (e) {
                        let { artistId: a } = e,
                            { artistsResource: r, modelActionsLogger: l } = (0,
                            i._$)(t);
                        try {
                            t.loadingState = N.GuX.PENDING;
                            let e = yield r.getArtistTrackIds({ artistId: a }),
                                { sonataState: s } = (0, i.Zn)(t);
                            s.setUnloadedEntitiesData(
                                e.map((t) => (0, k.li)(t)),
                            ),
                                (t.ids = (0, i.wg)(e)),
                                t.loadingState !== N.GuX.IDLE &&
                                    (t.loadingState = N.GuX.RESOLVE);
                        } catch (e) {
                            l.error(e),
                                e instanceof s.GX &&
                                    (e.statusCode === s.X1.NOT_FOUND ||
                                        e.statusCode === s.X1.BAD_REQUEST) &&
                                    (t.errorStatusCode = s.X1.NOT_FOUND),
                                t.loadingState !== N.GuX.IDLE &&
                                    (t.loadingState = N.GuX.REJECT);
                        }
                    }),
                    getTracks: (0, i.L3)(function* (e) {
                        let { trackIds: a } = e,
                            { tracksResource: r, modelActionsLogger: s } = (0,
                            i._$)(t);
                        try {
                            let e = yield r.getTracksMeta({
                                trackIds: a,
                                withProgress: !0,
                            });
                            t.tracks.merge(
                                e.reduce(
                                    (t, e) => ((t[e.id] = (0, m.vU)(e)), t),
                                    {},
                                ),
                            );
                        } catch (t) {
                            s.error(t);
                        }
                    }),
                    reset() {
                        let { sonataState: e } = (0, i.Zn)(t);
                        e.resetUnloadedEntitiesData(),
                            (t.loadingState = N.GuX.IDLE),
                            t.destroyItems([t.tracks, t.ids]);
                    },
                }));
            var P = a(47416);
            let U = i.gK
                    .compose(
                        i.gK.model("OfflineArtistTrackIds", {
                            ids: i.gK.maybeNull(i.gK.array(i.gK.string)),
                        }),
                        E.XT,
                        E.pl,
                    )
                    .actions((t) => ({
                        getIds: (0, i.L3)(function* (e, a) {
                            let { modelActionsLogger: r } = (0, i._$)(t);
                            if (t.loadingState !== N.GuX.PENDING)
                                try {
                                    t.loadingState = N.GuX.PENDING;
                                    let r = yield a.getArtistTrackIdsByUser(e);
                                    (t.ids = (0, i.wg)(r)),
                                        t.loadingState !== N.GuX.IDLE &&
                                            (t.loadingState = N.GuX.RESOLVE);
                                } catch (e) {
                                    r.error(e),
                                        t.loadingState !== N.GuX.IDLE &&
                                            (t.loadingState = N.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (t.loadingState = N.GuX.IDLE),
                                t.destroyItems([t.ids]);
                        },
                    })),
                _ = i.gK
                    .compose(
                        i.gK.model("OfflineArtist", {
                            id: i.gK.maybeNull(i.gK.string),
                            meta: i.gK.maybeNull(d.G4),
                            trackIds: U,
                            downloadedTracks: P.b,
                        }),
                        E.XT,
                        E.pl,
                    )
                    .views((t) => ({
                        get isNotFound() {
                            return t.isResolved && !t.meta;
                        },
                    }))
                    .actions((t) => ({
                        setTracksCount: (e) => {
                            var a;
                            (null == (a = t.meta) ? void 0 : a.artist.counts) &&
                                (t.meta.artist.counts.tracks = e);
                        },
                        getArtist: (0, i.L3)(function* (e, a) {
                            let { modelActionsLogger: r } = (0, i._$)(t);
                            if (t.loadingState !== N.GuX.PENDING) {
                                t.id = e;
                                try {
                                    t.loadingState = N.GuX.PENDING;
                                    let r = yield a.getArtist(e);
                                    r &&
                                        (t.meta = (0, i.wg)({
                                            artist: (0, p.dM)(r),
                                        })),
                                        t.loadingState !== N.GuX.IDLE &&
                                            (t.loadingState = N.GuX.RESOLVE);
                                } catch (e) {
                                    r.error(e),
                                        t.loadingState !== N.GuX.IDLE &&
                                            (t.loadingState = N.GuX.REJECT);
                                }
                            }
                        }),
                        reset() {
                            (t.id = null),
                                (t.loadingState = N.GuX.IDLE),
                                t.trackIds.reset(),
                                t.downloadedTracks.reset(),
                                t.destroyItems([t.meta]);
                        },
                    })),
                w = i.gK
                    .compose(
                        i.gK.model("ArtistPage", {
                            id: i.gK.maybeNull(i.gK.string),
                            meta: i.gK.maybeNull(d.G4),
                            landing: n.Ju,
                            popularTracks: i.gK.array(m.vj),
                            lastRelease: i.gK.maybeNull(u.JC),
                            upcomingAlbum: i.gK.maybeNull(u.VH),
                            concerts: i.gK.maybeNull(i.gK.array(S.aR)),
                            similarArtists: i.gK.array(p.PK),
                            playlists: i.gK.array(c.IP),
                            errorStatusCode: i.gK.maybeNull(i.gK.number),
                            deprecationTargetArtistId: i.gK.maybeNull(
                                i.gK.number,
                            ),
                            albums: i.gK.array(u.JC),
                            discography: i.gK.array(u.JC),
                            compilations: i.gK.array(u.JC),
                            clips: i.gK.array(g.kv),
                            artistPick: i.gK.maybeNull(K),
                            familiarInfo: R,
                            albumsSubpage: X,
                            fullTracksListSubpage: O,
                            concertsSubpage: G,
                            similarArtistsSubPage: A,
                            clipsSubpage: C,
                            familiarSubpage: D,
                            commonSubPage: h,
                            offlineArtist: _,
                            infoLoadingState: E.XT,
                            infoErrorStatusCode: i.gK.maybeNull(i.gK.number),
                        }),
                        E.pl,
                        E.XT,
                    )
                    .views((t) => {
                        let e = {
                            get isLoading() {
                                return (
                                    t.isNeededToLoad ||
                                    t.loadingState === N.GuX.PENDING
                                );
                            },
                            get hasPopularTracks() {
                                return (
                                    e.isLoading || t.popularTracks.length > 0
                                );
                            },
                            get hasAlbums() {
                                return e.isLoading || t.albums.length > 0;
                            },
                            get hasDiscography() {
                                return e.isLoading || t.discography.length > 0;
                            },
                            get hasCompilations() {
                                return e.isLoading || t.compilations.length > 0;
                            },
                            get hasSimilarArtists() {
                                return (
                                    e.isLoading || t.similarArtists.length > 0
                                );
                            },
                            get hasPlaylists() {
                                return (
                                    e.isLoading ||
                                    (t.playlists && t.playlists.length > 0)
                                );
                            },
                            get hasConcerts() {
                                return (
                                    e.isLoading ||
                                    (t.concerts && t.concerts.length > 0)
                                );
                            },
                            get hasClips() {
                                return e.isLoading || t.clips.length > 0;
                            },
                            get isNotFound() {
                                return (
                                    t.isRejected &&
                                    (t.errorStatusCode === s.X1.NOT_FOUND ||
                                        t.errorStatusCode === s.X1.BAD_REQUEST)
                                );
                            },
                            get isInfoNotFound() {
                                return (
                                    t.infoLoadingState.isRejected &&
                                    (t.infoErrorStatusCode === s.X1.NOT_FOUND ||
                                        t.infoErrorStatusCode ===
                                            s.X1.BAD_REQUEST)
                                );
                            },
                            get isSomethingWentWrong() {
                                return t.isRejected && !e.isNotFound;
                            },
                            get isInfoSomethingWentWrong() {
                                return (
                                    t.infoLoadingState.isRejected &&
                                    !e.isInfoNotFound
                                );
                            },
                            get isCacheNotFound() {
                                return (
                                    t.isRejected && t.errorStatusCode === o.FX
                                );
                            },
                            get hasReleaseBlock() {
                                return !!(
                                    e.isLoading ||
                                    t.upcomingAlbum ||
                                    t.lastRelease
                                );
                            },
                            get selfLink() {
                                if (!t.id) return "";
                                let { href: e } = (0, N.uvd)(
                                    "/artist/:artistId",
                                    { params: { artistId: t.id } },
                                );
                                return e;
                            },
                            get tracksUrl() {
                                if (!t.id) return "";
                                let { href: e } = (0, N.uvd)(
                                    "/artist/:artistId/tracks",
                                    { params: { artistId: t.id } },
                                );
                                return e;
                            },
                            get concertsUrl() {
                                var a;
                                if (
                                    (null == (a = t.meta)
                                        ? void 0
                                        : a.artist.id) &&
                                    t.concerts &&
                                    t.concerts.length > d.M$
                                ) {
                                    let { href: e } = (0, N.uvd)(
                                        "/artist/:artistId/concerts",
                                        {
                                            params: {
                                                artistId: t.meta.artist.id,
                                            },
                                        },
                                    );
                                    return e;
                                }
                                return "";
                            },
                            get clipsUrl() {
                                if (!t.id) return "";
                                let { href: e } = (0, N.uvd)(
                                    "/artist/:artistId/videos",
                                    { params: { artistId: t.id } },
                                );
                                return e;
                            },
                            get compilationsUrl() {
                                if (!t.id) return "";
                                let { href: e } = (0, N.uvd)(
                                    "/artist/:artistId/compilations",
                                    { params: { artistId: t.id } },
                                );
                                return e;
                            },
                            get discographyUrl() {
                                if (!t.id) return "";
                                let { href: e } = (0, N.uvd)(
                                    "/artist/:artistId/discography",
                                    { params: { artistId: t.id } },
                                );
                                return e;
                            },
                            get albumsUrl() {
                                if (!t.id) return "";
                                let { href: e } = (0, N.uvd)(
                                    "/artist/:artistId/albums",
                                    { params: { artistId: t.id } },
                                );
                                return e;
                            },
                            get similarArtistsUrl() {
                                if (!t.id) return "";
                                let { href: e } = (0, N.uvd)(
                                    "/artist/:artistId/similar",
                                    { params: { artistId: t.id } },
                                );
                                return e;
                            },
                        };
                        return e;
                    })
                    .actions((t) => ({
                        getData: (0, i.L3)(function* (e) {
                            let { artistId: a, preloadedArtist: o } = e,
                                {
                                    slides: n,
                                    experiments: g,
                                    disclaimer: E,
                                } = (0, i.Zn)(t),
                                { artistsResource: v, modelActionsLogger: I } =
                                    (0, i._$)(t),
                                T = g.checkExperiment(
                                    N.zal.WebNextAgentArtist,
                                    "on",
                                );
                            if (((t.id = a), t.loadingState !== N.GuX.PENDING))
                                try {
                                    var X, C, G, L;
                                    t.loadingState = N.GuX.PENDING;
                                    let e = o;
                                    e ||
                                        (e = yield v.getBriefInfo({
                                            artistId: a,
                                            popularTracksCount: d.xx,
                                            fetchPlaylistLikesCounts: !0,
                                            discographyBlockEnabled: !0,
                                            useClipDataFormat: !0,
                                        }));
                                    let {
                                        popularTracks: I,
                                        error: D,
                                        artist: f,
                                        stats: K,
                                        albums: A,
                                        playlists: h,
                                        alsoAlbums: R,
                                        similarArtists: k,
                                        lastReleases: O,
                                        concerts: P,
                                        upcomingAlbum: U,
                                        discography: _,
                                        artistPick: w,
                                        clips: F,
                                        allCovers: B,
                                    } = e;
                                    if (
                                        "not-found" === D ||
                                        (null == f ? void 0 : f.error) ===
                                            "not-found"
                                    ) {
                                        (t.errorStatusCode = s.X1.NOT_FOUND),
                                            (t.loadingState = N.GuX.REJECT);
                                        return;
                                    }
                                    if (
                                        null == (X = f.deprecation)
                                            ? void 0
                                            : X.targetArtistId
                                    ) {
                                        (t.deprecationTargetArtistId =
                                            f.deprecation.targetArtistId),
                                            (t.loadingState = N.GuX.RESOLVE);
                                        return;
                                    }
                                    (t.commonSubPage.artistName = f.name),
                                        g.checkExperiment(
                                            N.zal.WebNextArtistSkeletonHeader,
                                            "on",
                                        ) ||
                                            (t.meta = (0, i.wg)(
                                                ((t, e, a) => {
                                                    var s;
                                                    let l =
                                                        null ==
                                                        (s = t.extraActions)
                                                            ? void 0
                                                            : s.find(
                                                                  (t) =>
                                                                      t.type ===
                                                                          r.DONATION &&
                                                                      b(t.url),
                                                              );
                                                    return (0, i.wg)({
                                                        artist: (0, p.dM)(t),
                                                        donationUrl:
                                                            null == l
                                                                ? void 0
                                                                : l.url,
                                                        lastMonthListeners:
                                                            null == e
                                                                ? void 0
                                                                : e.lastMonthListeners,
                                                        covers:
                                                            null == a
                                                                ? void 0
                                                                : a.map(
                                                                      (t) =>
                                                                          t.uri,
                                                                  ),
                                                    });
                                                })(f, K, B),
                                            ));
                                    let J = (
                                            null != (C = f.disclaimers) ? C : []
                                        ).includes(l.M.MODAL),
                                        M = (
                                            null != (G = f.disclaimers) ? G : []
                                        ).includes(l.M.FOREIGN_AGENT),
                                        j = ((0, N.bRW)(
                                            null != (L = f.disclaimers)
                                                ? L
                                                : [],
                                            l.M.FOREIGN_AGENT,
                                        ) || [])[0];
                                    if (
                                        (((!f.available && J) ||
                                            (T && M) ||
                                            j) &&
                                            (yield E.getDisclaimerData({
                                                entityId: a,
                                                entityType: N.nPY.ARTIST,
                                                disclaimerId:
                                                    null == j ? void 0 : j.id,
                                            })),
                                        O && O.length > 0)
                                    ) {
                                        let e = O[0];
                                        e &&
                                            A &&
                                            A.length > 1 &&
                                            (t.lastRelease = (0, i.wg)(
                                                (0, u.pp)(e),
                                            ));
                                    }
                                    U &&
                                        (t.upcomingAlbum = (0, i.wg)(
                                            (0, u.lO)(U),
                                        )),
                                        P &&
                                            (t.concerts = (0, i.wg)(
                                                P.map(S.oP),
                                            )),
                                        I &&
                                            I.length > 0 &&
                                            (t.popularTracks = (0, i.wg)(
                                                I.slice(0, d.xx).map((t) =>
                                                    (0, m.vU)(t),
                                                ),
                                            )),
                                        k &&
                                            k.length > 0 &&
                                            (t.similarArtists = (0, i.wg)(
                                                k.slice(0, d.dg).map(p.dM),
                                            )),
                                        Number(null == A ? void 0 : A.length) >
                                            0 &&
                                            (t.albums = (0, i.wg)(
                                                null == A
                                                    ? void 0
                                                    : A.map(u.pp),
                                            )),
                                        Number(null == _ ? void 0 : _.length) >
                                            0 &&
                                            (t.discography = (0, i.wg)(
                                                null == _
                                                    ? void 0
                                                    : _.map(u.pp).slice(
                                                          0,
                                                          d.vx,
                                                      ),
                                            )),
                                        Number(null == R ? void 0 : R.length) >
                                            0 &&
                                            (t.compilations = (0, i.wg)(
                                                null == R
                                                    ? void 0
                                                    : R.map(u.pp).slice(
                                                          0,
                                                          d.vx,
                                                      ),
                                            )),
                                        h &&
                                            h.length > 0 &&
                                            (t.playlists = (0, i.wg)(
                                                h.map(c.ZC).slice(0, d.vx),
                                            )),
                                        w &&
                                            (t.artistPick = ((t) => {
                                                let e = t.artists.map((t) =>
                                                    (0, p.as)({ artist: t }),
                                                );
                                                return (0, i.wg)({
                                                    playlist: (0, c.bk)({
                                                        playlist: t.playlist,
                                                    }),
                                                    artists: e,
                                                });
                                            })(w)),
                                        F &&
                                            (t.clips = (0, i.wg)(
                                                F.map(y).slice(0, d.eS),
                                            )),
                                        n.resetArtist(),
                                        t.loadingState !== N.GuX.IDLE &&
                                            (t.loadingState = N.GuX.RESOLVE);
                                } catch (e) {
                                    I.error(e),
                                        e instanceof s.GX &&
                                            (t.errorStatusCode = e.statusCode),
                                        t.loadingState !== N.GuX.IDLE &&
                                            (t.loadingState = N.GuX.REJECT);
                                }
                        }),
                        getInfo: (0, i.L3)(function* (e) {
                            let { artistId: a } = e,
                                { experiments: r, disclaimer: o } = (0, i.Zn)(
                                    t,
                                ),
                                { artistsResource: n, modelActionsLogger: u } =
                                    (0, i._$)(t),
                                g = r.checkExperiment(
                                    N.zal.WebNextAgentArtist,
                                    "on",
                                );
                            if (
                                ((t.id = a),
                                t.infoLoadingState.loadingState !==
                                    N.GuX.PENDING)
                            )
                                try {
                                    var c, m, S, E, v;
                                    t.infoLoadingState.loadingState =
                                        N.GuX.PENDING;
                                    let e = yield n.getInfo({ artistId: a }),
                                        { artist: r, deprecation: s } = e;
                                    if (null == s ? void 0 : s.targetArtistId) {
                                        (t.deprecationTargetArtistId =
                                            s.targetArtistId),
                                            (t.loadingState = N.GuX.RESOLVE);
                                        return;
                                    }
                                    (t.commonSubPage.artistName = r.name),
                                        (t.meta = (0, i.wg)(
                                            (0, i.wg)({
                                                artist: (0, p.as)({
                                                    artist: e.artist,
                                                    trailer: e.trailer,
                                                    isComposer:
                                                        e.artistType ===
                                                        I.o.COMPOSER,
                                                }),
                                                donationUrl: b(
                                                    null == (m = e.donation)
                                                        ? void 0
                                                        : m.tipUrl,
                                                )
                                                    ? null == (S = e.donation)
                                                        ? void 0
                                                        : S.tipUrl
                                                    : void 0,
                                                lastMonthListeners:
                                                    null == (E = e.stats)
                                                        ? void 0
                                                        : E.lastMonthListeners,
                                                brandedButton: e.brandedButton
                                                    ? (0, d.LH)(e.brandedButton)
                                                    : void 0,
                                                covers:
                                                    null == (v = e.covers)
                                                        ? void 0
                                                        : v.map((t) => {
                                                              var e;
                                                              return null !=
                                                                  (e = t.uri)
                                                                  ? e
                                                                  : "";
                                                          }),
                                            }),
                                        ));
                                    let { disclaimers: u, available: y } =
                                            null != (c = r.contentRestrictions)
                                                ? c
                                                : {},
                                        T = (null != u ? u : []).includes(
                                            l.M.MODAL,
                                        ),
                                        X = (null != u ? u : []).includes(
                                            l.M.FOREIGN_AGENT,
                                        ),
                                        C = ((0, N.bRW)(
                                            null != u ? u : [],
                                            l.M.FOREIGN_AGENT,
                                        ) || [])[0];
                                    ((!y && T) || (g && X) || C) &&
                                        (yield o.getDisclaimerData({
                                            entityId: a,
                                            entityType: N.nPY.ARTIST,
                                            disclaimerId:
                                                null == C ? void 0 : C.id,
                                        })),
                                        t.infoLoadingState.loadingState !==
                                            N.GuX.IDLE &&
                                            (t.infoLoadingState.loadingState =
                                                N.GuX.RESOLVE);
                                } catch (e) {
                                    u.error(e),
                                        e instanceof s.GX &&
                                            (t.infoErrorStatusCode =
                                                e.statusCode),
                                        t.infoLoadingState.loadingState !==
                                            N.GuX.IDLE &&
                                            (t.infoLoadingState.loadingState =
                                                N.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (t.loadingState = N.GuX.IDLE),
                                (t.infoLoadingState.loadingState = N.GuX.IDLE),
                                t.landing.reset(),
                                (t.id = null),
                                (t.errorStatusCode = null),
                                (t.deprecationTargetArtistId = null),
                                t.destroyItems([
                                    t.clips,
                                    t.popularTracks,
                                    t.similarArtists,
                                    t.playlists,
                                    t.albums,
                                    t.discography,
                                    t.compilations,
                                    t.meta,
                                    t.lastRelease,
                                    t.upcomingAlbum,
                                    t.concerts,
                                    t.artistPick,
                                ]);
                        },
                    }));
            var F = a(50214),
                B = a(2662),
                J = a(23549),
                M = a(93396);
            a(80777);
            var j = a(35878),
                V = a(90342),
                x = a(51112);
        },
    },
]);
