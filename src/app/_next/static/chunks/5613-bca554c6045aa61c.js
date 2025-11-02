(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5613],
    {
        65: (e, t, a) => {
            "use strict";
            var l, i;
            a.d(t, { K: () => i, j: () => l }),
                (function (e) {
                    (e.ALBUM = "album"),
                        (e.PLAYLIST = "playlist"),
                        (e.ALBUM_CHART_ITEM = "album-chart-item"),
                        (e.BOOKMATE_BANNER_ENTITY = "bookmate-banner-entity"),
                        (e.PROMOTION = "promotion"),
                        (e.CATEGORY_TAB = "category");
                })(l || (l = {})),
                (function (e) {
                    (e.ALBUM_CHART = "album-chart"),
                        (e.EDITORIAL_PLAYLISTS = "editorial-playlists"),
                        (e.PLAYLIST_WITH_TRACKS = "playlist-with-tracks"),
                        (e.CATEGORY = "category"),
                        (e.BOOKMATE_BANNER = "bookmate-banner"),
                        (e.PROMOTIONS = "promotions"),
                        (e.CATEGORIES_TAB = "categories-tab");
                })(i || (i = {}));
        },
        33129: (e, t, a) => {
            "use strict";
            a.d(t, { x: () => l });
            var l = (function (e) {
                return (
                    (e.CATEGORY = "category"), (e.EDITORIAL = "editorial"), e
                );
            })({});
        },
        37257: (e, t, a) => {
            "use strict";
            a.d(t, { NonMusicCategoryPlaylistsPage: () => A });
            var l = a(33008),
                i = a(85896),
                s = a(97531),
                o = a(17846),
                n = a(66268),
                r = a(73827),
                u = a(18064),
                d = a(77868),
                g = a(83888),
                c = a(64143),
                m = a(45242),
                N = a(79169),
                _ = a(18740),
                y = a(74523),
                C = a.n(y);
            let A = (0, s.PA)((e) => {
                var t, a, s;
                let { categoryId: y } = e,
                    {
                        nonMusic: { categoryPlaylistsSubpage: A },
                        settings: p,
                    } = (0, N.Pjs)(),
                    T = (0, N.W6M)(),
                    { contentScrollRef: E, setContentScrollRef: S } = (0,
                    N.gKY)(),
                    { formatMessage: b } = (0, r.A)(),
                    h = p.layout === N.u40.Mobile,
                    P = (0, n.useCallback)(
                        (e) => {
                            A.getPlaylists({ page: e, pageSize: 20 });
                        },
                        [A],
                    );
                A.isNotFound && (0, o.notFound)(),
                    (0, n.useEffect)(
                        () => () => {
                            A.reset();
                        },
                        [A],
                    );
                let L = (0, n.useMemo)(
                    () => ({
                        Footer: () =>
                            (0, l.jsx)(_.A, {
                                children: (0, l.jsx)(_.wi, {
                                    className: C().footer,
                                }),
                            }),
                    }),
                    [],
                );
                if (
                    ((0, N.Jzs)(A.isResolved),
                    A.isNeededToLoad &&
                        (0, n.use)(
                            A.getData({ categoryId: y, page: 0, pageSize: 20 }),
                        ),
                    A.isSomethingWrong)
                )
                    return (0, l.jsx)(g.w, {});
                let I = A.isLoading
                    ? 20
                    : null !=
                        (a =
                            null == A || null == (t = A.playlists)
                                ? void 0
                                : t.length)
                      ? a
                      : 0;
                return (0, l.jsx)(N.nVz, {
                    pageId: N._Q$.NON_MUSIC_CATEGORY_PLAYLISTS,
                    children: (0, l.jsx)(c.hO, {
                        scrollElement: E,
                        outerTitle: A.title,
                        children: (0, l.jsxs)("div", {
                            className: C().root,
                            ...(0, u.Am)(
                                u.Xk.nonMusic.NON_MUSIC_CATEGORY_PLAYLISTS,
                            ),
                            children: [
                                (0, l.jsx)(_.Y9, {
                                    variant: _.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: T.canBack,
                                    children: (0, l.jsx)(d.Heading, {
                                        variant: "h2",
                                        weight: "bold",
                                        size: "xl",
                                        lineClamp: 1,
                                        children: A.title,
                                    }),
                                }),
                                (0, l.jsx)(_.$$, {
                                    context: {
                                        listAriaLabel: b(
                                            { id: "mixes.playlists-list" },
                                            { genreName: A.title || "" },
                                        ),
                                    },
                                    className: (0, i.$)(
                                        C().scrollContainer,
                                        C().important,
                                    ),
                                    customComponents: L,
                                    itemContentCallback: (e) => {
                                        var t, a;
                                        let i =
                                                null == A ||
                                                null == (a = A.playlists) ||
                                                null == (t = a[e])
                                                    ? void 0
                                                    : t.data,
                                            s = b(
                                                {
                                                    id: "loading-messages.entity-is-loading",
                                                },
                                                {
                                                    entityName: b({
                                                        id: "entity-names.playlist",
                                                    }),
                                                },
                                            );
                                        return i
                                            ? (0, l.jsx)(
                                                  m.B6,
                                                  {
                                                      playlist: i,
                                                      contentLinesCount: 3,
                                                  },
                                                  i.key,
                                              )
                                            : (0, l.jsx)(_.Vt, {
                                                  isActive: !0,
                                                  "aria-label": s,
                                              });
                                    },
                                    initialItemCount: I,
                                    totalCount: I,
                                    onGetDataByPage: P,
                                    pageSize: 20,
                                    totalRequests:
                                        null != (s = A.requests) ? s : 0,
                                    listClassName: C().content,
                                    itemClassName: C().item,
                                    handleRef: S,
                                    isMobileLayout: h,
                                    useWindowScroll: h,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        46103: (e, t, a) => {
            "use strict";
            a.d(t, { NonMusicNotFoundPage: () => r });
            var l = a(33008),
                i = a(97531),
                s = a(66268),
                o = a(35233),
                n = a(79169);
            let r = (0, i.PA)(() => {
                let { nonMusic: e } = (0, n.Pjs)();
                return (
                    (0, s.useEffect)(
                        () => () => {
                            e.landing.reset();
                        },
                        [e.landing],
                    ),
                    (0, l.jsx)(o.M, {})
                );
            });
        },
        55613: (e, t, a) => {
            "use strict";
            a.d(t, {
                gD: () => R.NonMusicAlbumsPage,
                xq: () => i.x,
                ol: () => k.NonMusicCategoryPage,
                bB: () => v.NonMusicCategoryPlaylistsPage,
                rN: () => K,
            });
            var l = a(79169),
                i = a(33129),
                s = a(41028),
                o = a(61979),
                n = a(45242),
                r = a(25911),
                u = a(59615);
            let d = s.gK.model("NonMusicCategoryPlaylistsDataItem", {
                    uid: s.gK.number,
                    kind: s.gK.number,
                    data: s.gK.maybeNull(n.IP),
                }),
                g = s.gK
                    .compose(
                        s.gK.model("NonMusicCategoryPlaylistsPage", {
                            errorStatusCode: s.gK.maybe(s.gK.number),
                            title: s.gK.maybeNull(s.gK.string),
                            pager: s.gK.maybeNull(u.jd),
                            playlists: s.gK.maybeNull(s.gK.array(d)),
                            alreadyRequestedPages: s.gK.map(s.gK.number),
                            requests: s.gK.maybeNull(s.gK.number),
                        }),
                        u.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return (
                                    e.isNeededToLoad ||
                                    e.loadingState === l.GuX.PENDING
                                );
                            },
                            get isNotFound() {
                                let t =
                                    e.errorStatusCode === o.X1.NOT_FOUND ||
                                    e.errorStatusCode === o.X1.BAD_REQUEST;
                                return e.isRejected && t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getPlaylists: (0, s.L3)(function* (t) {
                                var a, i, n;
                                let { page: u = 0, pageSize: d = 20 } = t,
                                    {
                                        playlistsResource: g,
                                        modelActionsLogger: c,
                                    } = (0, s._$)(e);
                                if (
                                    (null == (a = e.playlists)
                                        ? void 0
                                        : a.length) &&
                                    !e.alreadyRequestedPages.has("".concat(u))
                                ) {
                                    e.alreadyRequestedPages.set(
                                        "".concat(u),
                                        u,
                                    );
                                    try {
                                        let t = u * d,
                                            a = e.playlists.slice(t, t + d),
                                            l = yield g.getPlaylists({
                                                playlistIds: a.map((e) =>
                                                    ""
                                                        .concat(e.uid, ":")
                                                        .concat(e.kind),
                                                ),
                                                resumeStream: !1,
                                            });
                                        e.requests =
                                            (null != (n = e.requests) ? n : 0) +
                                            1;
                                        let o = {
                                                page: u,
                                                perPage: d,
                                                total:
                                                    null == (i = e.playlists)
                                                        ? void 0
                                                        : i.length,
                                            },
                                            c = l.playlists.map(r.jX),
                                            m = u * d,
                                            N = 0;
                                        for (let t = m; t < m + d; t++)
                                            c[N] &&
                                                e.playlists[t] &&
                                                (e.playlists[t].data = (0,
                                                s.wg)(c[N])),
                                                N++;
                                        e.pager = o;
                                    } catch (t) {
                                        c.error(t),
                                            t instanceof o.GX &&
                                                (t.statusCode ===
                                                    o.X1.NOT_FOUND ||
                                                    t.statusCode ===
                                                        o.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode =
                                                    o.X1.NOT_FOUND),
                                            e.loadingState !== l.GuX.IDLE &&
                                                (e.loadingState = l.GuX.REJECT);
                                    }
                                }
                            }),
                            getData: (0, s.L3)(function* (a) {
                                let {
                                        categoryId: i,
                                        page: n = 0,
                                        pageSize: r = 20,
                                    } = a,
                                    {
                                        nonMusicResource: u,
                                        modelActionsLogger: d,
                                    } = (0, s._$)(e);
                                if (e.loadingState !== l.GuX.PENDING)
                                    try {
                                        e.loadingState = l.GuX.PENDING;
                                        let a = yield u.getPlaylists({
                                            categoryId: i,
                                        });
                                        (e.title = a.title),
                                            a.entities &&
                                                a.entities.length > 0 &&
                                                (e.playlists = (0, s.wg)(
                                                    a.entities.map((e) => ({
                                                        uid: e.uid,
                                                        kind: e.kind,
                                                    })),
                                                )),
                                            e.loadingState !== l.GuX.IDLE &&
                                                (e.loadingState =
                                                    l.GuX.RESOLVE),
                                            yield t.getPlaylists({
                                                page: n,
                                                pageSize: r,
                                            });
                                    } catch (t) {
                                        d.error(t),
                                            t instanceof o.GX &&
                                                (t.statusCode ===
                                                    o.X1.NOT_FOUND ||
                                                    t.statusCode ===
                                                        o.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode =
                                                    o.X1.NOT_FOUND),
                                            e.loadingState !== l.GuX.IDLE &&
                                                (e.loadingState = l.GuX.REJECT);
                                    }
                            }),
                            reset() {
                                (e.loadingState = l.GuX.IDLE),
                                    e.alreadyRequestedPages.clear(),
                                    (e.title = null),
                                    (e.playlists = (0, s.wg)([])),
                                    (e.requests = null),
                                    (e.pager = null);
                            },
                        };
                        return t;
                    });
            var c = a(12898),
                m = a(52732);
            let N = s.gK.model("NonMusicAlbumsPageItem", {
                    id: s.gK.number,
                    data: s.gK.maybeNull(m.JC),
                }),
                _ = s.gK
                    .compose(
                        s.gK.model("NonMusicAlbumsPage", {
                            errorStatusCode: s.gK.maybe(s.gK.number),
                            title: s.gK.maybeNull(s.gK.string),
                            albums: s.gK.maybeNull(s.gK.array(N)),
                            requestsCount: s.gK.maybe(s.gK.number),
                        }),
                        u.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return (
                                    e.isNeededToLoad ||
                                    e.loadingState === l.GuX.PENDING
                                );
                            },
                            get isNotFound() {
                                let t =
                                    e.errorStatusCode === o.X1.NOT_FOUND ||
                                    e.errorStatusCode === o.X1.BAD_REQUEST;
                                return e.loadingState === l.GuX.REJECT && t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getEditorialAlbums: (0, s.L3)(function* (t) {
                            let { id: a } = t,
                                { nonMusicResource: i, modelActionsLogger: n } =
                                    (0, s._$)(e);
                            if (e.loadingState !== l.GuX.PENDING)
                                try {
                                    var r;
                                    e.loadingState = l.GuX.PENDING;
                                    let t = yield i.getEditorialAlbums({
                                        id: a,
                                    });
                                    (e.title = t.title),
                                        (null == (r = t.entities)
                                            ? void 0
                                            : r.length) &&
                                            (e.albums = (0, s.wg)(
                                                t.entities.map((e) => ({
                                                    id: e,
                                                })),
                                            )),
                                        e.loadingState !== l.GuX.IDLE &&
                                            (e.loadingState = l.GuX.RESOLVE);
                                } catch (t) {
                                    n.error(t),
                                        t instanceof o.GX &&
                                            (t.statusCode === o.X1.NOT_FOUND ||
                                                t.statusCode ===
                                                    o.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode =
                                                o.X1.NOT_FOUND),
                                        e.loadingState !== l.GuX.IDLE &&
                                            (e.loadingState = l.GuX.REJECT);
                                }
                        }),
                        getCategoryAlbums: (0, s.L3)(function* (t) {
                            let { id: a } = t,
                                { nonMusicResource: i, modelActionsLogger: n } =
                                    (0, s._$)(e);
                            if (e.loadingState !== l.GuX.PENDING)
                                try {
                                    var r;
                                    e.loadingState = l.GuX.PENDING;
                                    let t = yield i.getCategoryAlbums({
                                        id: a,
                                    });
                                    (e.title = t.title),
                                        (null == (r = t.albums)
                                            ? void 0
                                            : r.length) &&
                                            (e.albums = (0, s.wg)(
                                                t.albums.map((e) => ({
                                                    id: e,
                                                })),
                                            )),
                                        e.loadingState !== l.GuX.IDLE &&
                                            (e.loadingState = l.GuX.RESOLVE);
                                } catch (t) {
                                    n.error(t),
                                        t instanceof o.GX &&
                                            (t.statusCode === o.X1.NOT_FOUND ||
                                                t.statusCode ===
                                                    o.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode =
                                                o.X1.NOT_FOUND),
                                        e.loadingState !== l.GuX.IDLE &&
                                            (e.loadingState = l.GuX.REJECT);
                                }
                        }),
                        getAlbumsByRange: (0, s.L3)(function* (t, a) {
                            var l, i, o;
                            let { albumResource: n, modelActionsLogger: r } =
                                (0, s._$)(e);
                            if (!(null == (l = e.albums) ? void 0 : l.length))
                                return null;
                            (t = Math.max(0, t)),
                                (a = Math.min(a, e.albums.length));
                            let u = [];
                            for (let l = t; l <= a; l++)
                                (null == (i = e.albums[l]) ? void 0 : i.id) &&
                                    !(null == (o = e.albums[l])
                                        ? void 0
                                        : o.data) &&
                                    u.push(e.albums[l].id);
                            if (!u.length) return null;
                            try {
                                let t = yield n.getAlbums({ albumIds: u });
                                null == t ||
                                    t.forEach((t) => {
                                        var a;
                                        null == (a = e.albums) ||
                                            a.forEach((a, l) => {
                                                var i;
                                                a.id === t.id &&
                                                    (null == (i = e.albums)
                                                        ? void 0
                                                        : i[l]) &&
                                                    (e.albums[l].data = (0,
                                                    m.pp)(t));
                                            });
                                    }),
                                    e.requestsCount
                                        ? (e.requestsCount =
                                              e.requestsCount + 1)
                                        : (e.requestsCount = 1);
                            } catch (e) {
                                r.error(e);
                            }
                            return null;
                        }),
                        reset() {
                            (e.loadingState = l.GuX.IDLE),
                                (e.title = null),
                                (e.albums = null),
                                (e.requestsCount = 0);
                        },
                    }));
            var y = a(65),
                C = a(90848),
                A = a(16285),
                p = a(34874);
            let T = s.gK
                    .model("NonMusicBaseBlock")
                    .props({
                        type: s.gK.enumeration(Object.values(y.K.CATEGORY)),
                        landingBlockType: s.gK.enumeration(Object.values(C.t)),
                        id: s.gK.maybe(s.gK.string),
                        title: s.gK.maybe(s.gK.string),
                        description: s.gK.maybe(s.gK.string),
                        viewAllActionLink: s.gK.maybe(s.gK.string),
                    }),
                E = T.named("NonMusicCategoryBlock").props({
                    type: s.gK.literal(y.K.CATEGORY),
                    landingBlockType: s.gK.literal(
                        C.t.NON_MUSIC_EDITORIAL_COMPILATION,
                    ),
                    items: s.gK.array(c.h9),
                }),
                S = T.named("NonMusicChartAlbumBlock").props({
                    type: s.gK.literal(y.K.ALBUM_CHART),
                    landingBlockType: s.gK.literal(C.t.CHART_ALBUMS),
                    items: s.gK.array(m.JC),
                }),
                b = s.gK.union(c.RO, c.Od),
                h = T.named("NonMusicEditorialPlaylistsBlock").props({
                    type: s.gK.literal(y.K.EDITORIAL_PLAYLISTS),
                    landingBlockType: s.gK.literal(C.t.RECENTLY_PLAYED),
                    items: s.gK.array(b),
                });
            var P = a(30457);
            let L = T.named("NonMusicMixesBlock").props({
                    type: s.gK.literal(y.K.CATEGORIES_TAB),
                    landingBlockType: s.gK.literal(C.t.MIXES_GRID),
                    items: s.gK.array(P.bv),
                }),
                I = T.named("NonMusicPromotionsBlock").props({
                    type: s.gK.literal(y.K.PROMOTIONS),
                    landingBlockType: s.gK.literal(C.t.NON_MUSIC_PROMOTIONS),
                    items: s.gK.array(c.fv),
                }),
                M = s.gK.union(S, h, E, I, L),
                O = s.gK
                    .compose(
                        s.gK.model("NonMusicCategoryPage", {
                            errorStatusCode: s.gK.maybeNull(s.gK.number),
                            title: s.gK.maybeNull(s.gK.string),
                            blocks: s.gK.array(M),
                        }),
                        u.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return (
                                    e.isNeededToLoad ||
                                    e.loadingState === l.GuX.PENDING
                                );
                            },
                            get isNotFound() {
                                let t = e.isResolved && 0 === e.blocks.length,
                                    a =
                                        e.errorStatusCode === o.X1.NOT_FOUND ||
                                        e.errorStatusCode === o.X1.BAD_REQUEST;
                                return (e.isRejected && a) || t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, s.L3)(function* (t) {
                            let { categoryId: a } = t,
                                { nonMusicResource: i, modelActionsLogger: r } =
                                    (0, s._$)(e);
                            if (e.loadingState !== l.GuX.PENDING)
                                try {
                                    e.loadingState = l.GuX.PENDING;
                                    let t = yield i.getCategory({
                                        categoryId: a,
                                    });
                                    e.title = t.title;
                                    let o = [];
                                    t.blocks &&
                                        (t.blocks.forEach((e) => {
                                            switch (e.type) {
                                                case y.K.ALBUM_CHART:
                                                    o.push(
                                                        ((e) => {
                                                            let t =
                                                                e.entities.map(
                                                                    (e) => ({
                                                                        ...(0,
                                                                        m.pp)(
                                                                            e
                                                                                .data
                                                                                .album,
                                                                        ),
                                                                        chart:
                                                                            e
                                                                                .data
                                                                                .chartPosition &&
                                                                            (0,
                                                                            A.ws)(
                                                                                e
                                                                                    .data
                                                                                    .chartPosition,
                                                                            ),
                                                                        likesCount:
                                                                            e
                                                                                .data
                                                                                .album
                                                                                .likesCount,
                                                                    }),
                                                                );
                                                            return (0, s.wg)({
                                                                id: e.id,
                                                                type: y.K
                                                                    .ALBUM_CHART,
                                                                landingBlockType:
                                                                    C.t
                                                                        .CHART_ALBUMS,
                                                                title: e.title,
                                                                description:
                                                                    e.description,
                                                                viewAllActionLink:
                                                                    e.viewAllUrl,
                                                                items: t,
                                                            });
                                                        })(e),
                                                    );
                                                    return;
                                                case y.K.EDITORIAL_PLAYLISTS:
                                                case y.K.PLAYLIST_WITH_TRACKS:
                                                    o.push(
                                                        ((e) => {
                                                            let t =
                                                                e.entities.map(
                                                                    (e) => {
                                                                        switch (
                                                                            e.type
                                                                        ) {
                                                                            case y
                                                                                .j
                                                                                .PLAYLIST:
                                                                                return {
                                                                                    type: p
                                                                                        ._
                                                                                        .PLAYLIST_ITEM,
                                                                                    data: (0,
                                                                                    n.Ew)(
                                                                                        {
                                                                                            ...e.data,
                                                                                            artists:
                                                                                                [],
                                                                                        },
                                                                                    ),
                                                                                };
                                                                            case y
                                                                                .j
                                                                                .ALBUM:
                                                                                return {
                                                                                    type: p
                                                                                        ._
                                                                                        .ALBUM_ITEM,
                                                                                    data: (0,
                                                                                    m.pp)(
                                                                                        e.data,
                                                                                    ),
                                                                                };
                                                                        }
                                                                    },
                                                                );
                                                            return (0, s.wg)({
                                                                id: e.id,
                                                                type: y.K
                                                                    .EDITORIAL_PLAYLISTS,
                                                                landingBlockType:
                                                                    C.t
                                                                        .RECENTLY_PLAYED,
                                                                title: e.title,
                                                                description:
                                                                    e.description,
                                                                viewAllActionLink:
                                                                    e.viewAllUrl,
                                                                items: t,
                                                            });
                                                        })(e),
                                                    );
                                                    return;
                                                case y.K.CATEGORY:
                                                    o.push(
                                                        ((e) => {
                                                            let t =
                                                                e.entities.map(
                                                                    (e) => ({
                                                                        type: p
                                                                            ._
                                                                            .NON_MUSIC_ALBUM_ITEM,
                                                                        data: (0,
                                                                        m.pp)(
                                                                            e.data,
                                                                        ),
                                                                    }),
                                                                );
                                                            return (0, s.wg)({
                                                                id: e.id,
                                                                type: y.K
                                                                    .CATEGORY,
                                                                landingBlockType:
                                                                    C.t
                                                                        .NON_MUSIC_EDITORIAL_COMPILATION,
                                                                title: e.title,
                                                                description:
                                                                    e.description,
                                                                viewAllActionLink:
                                                                    e.viewAllUrl,
                                                                items: t,
                                                            });
                                                        })(e),
                                                    );
                                                    return;
                                                case y.K.PROMOTIONS:
                                                    o.push(
                                                        ((e) => {
                                                            var t;
                                                            let a =
                                                                e.entities.map(
                                                                    (e) => {
                                                                        var t,
                                                                            a,
                                                                            l,
                                                                            i,
                                                                            s;
                                                                        return {
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
                                                                                (l =
                                                                                    e
                                                                                        .data
                                                                                        .subtitle)
                                                                                    ? l
                                                                                    : "",
                                                                            imageUrl:
                                                                                null !=
                                                                                (i =
                                                                                    e
                                                                                        .data
                                                                                        .image)
                                                                                    ? i
                                                                                    : "",
                                                                            weblink:
                                                                                null !=
                                                                                (s =
                                                                                    e
                                                                                        .data
                                                                                        .url)
                                                                                    ? s
                                                                                    : "",
                                                                        };
                                                                    },
                                                                );
                                                            return (0, s.wg)({
                                                                id: e.id,
                                                                type: y.K
                                                                    .PROMOTIONS,
                                                                landingBlockType:
                                                                    C.t
                                                                        .NON_MUSIC_PROMOTIONS,
                                                                title: e.title,
                                                                description:
                                                                    e.description,
                                                                viewAllActionLink:
                                                                    null !=
                                                                    (t =
                                                                        e.viewAllUrl)
                                                                        ? t
                                                                        : void 0,
                                                                items: a,
                                                            });
                                                        })(e),
                                                    );
                                                    return;
                                                case y.K.CATEGORIES_TAB:
                                                    o.push(
                                                        ((e) => {
                                                            let t =
                                                                e.entities.map(
                                                                    (e) => {
                                                                        var t,
                                                                            a,
                                                                            l,
                                                                            i,
                                                                            s;
                                                                        let o =
                                                                            [
                                                                                {
                                                                                    uri:
                                                                                        null !=
                                                                                        (t =
                                                                                            e
                                                                                                .data
                                                                                                .backgroundImageUri)
                                                                                            ? t
                                                                                            : "",
                                                                                    color:
                                                                                        null !=
                                                                                        (a =
                                                                                            e
                                                                                                .data
                                                                                                .textBackgroundColor)
                                                                                            ? a
                                                                                            : "",
                                                                                    videoUrl:
                                                                                        "",
                                                                                },
                                                                            ];
                                                                        return {
                                                                            id:
                                                                                null !=
                                                                                (l =
                                                                                    e.id)
                                                                                    ? l
                                                                                    : "",
                                                                            title:
                                                                                null !=
                                                                                (i =
                                                                                    e
                                                                                        .data
                                                                                        .title)
                                                                                    ? i
                                                                                    : "",
                                                                            weblink:
                                                                                null !=
                                                                                (s =
                                                                                    e
                                                                                        .data
                                                                                        .url)
                                                                                    ? s
                                                                                    : "",
                                                                            covers: o,
                                                                        };
                                                                    },
                                                                );
                                                            return (0, s.wg)({
                                                                id: e.id,
                                                                type: y.K
                                                                    .CATEGORIES_TAB,
                                                                landingBlockType:
                                                                    C.t
                                                                        .MIXES_GRID,
                                                                title: e.title,
                                                                items: t,
                                                            });
                                                        })(e),
                                                    );
                                            }
                                        }),
                                        (e.blocks = (0, s.wg)(o))),
                                        e.loadingState !== l.GuX.IDLE &&
                                            (e.loadingState = l.GuX.RESOLVE);
                                } catch (t) {
                                    r.error(t),
                                        t instanceof o.GX &&
                                            (t.statusCode === o.X1.NOT_FOUND ||
                                                t.statusCode ===
                                                    o.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode =
                                                o.X1.NOT_FOUND),
                                        e.loadingState !== l.GuX.IDLE &&
                                            (e.loadingState = l.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.errorStatusCode = null),
                                (e.title = null),
                                (e.loadingState = l.GuX.IDLE),
                                (e.blocks = (0, s.wg)([]));
                        },
                    })),
                K = s.gK.model("NonMusicPage", {
                    landing: c.Ju,
                    albums: _,
                    categorySubpage: O,
                    categoryPlaylistsSubpage: g,
                });
            var R = a(70829);
            a(80107);
            var k = a(66901),
                v = a(37257);
            a(46103), a(63861);
        },
        63861: (e, t, a) => {
            "use strict";
            a.d(t, { NonMusicPage: () => E });
            var l = a(33008),
                i = a(85896),
                s = a(97531),
                o = a(66268),
                n = a(73827),
                r = a(96560),
                u = a(18064),
                d = a(43836),
                g = a(44612),
                c = a(57747),
                m = a(77868),
                N = a(12898),
                _ = a(83888),
                y = a(64143),
                C = a(79169),
                A = a(18740),
                p = a(90155),
                T = a.n(p);
            let E = (0, s.PA)(() => {
                let { nonMusic: e, user: t } = (0, C.Pjs)(),
                    { formatMessage: a } = (0, n.A)(),
                    { contentScrollRef: s, setContentScrollRef: p } = (0,
                    C.gKY)(),
                    [E, S] = (0, g.d)();
                (0, o.useEffect)(() => () => e.landing.reset(), [e.landing]),
                    (0, C.Jzs)(e.landing.isResolved);
                let b = (0, N._9)(e.landing);
                return (
                    e.landing.isNeededToLoad &&
                        (0, o.use)(
                            e.landing.getSkeleton(
                                {
                                    id: d.p.NON_MUSIC,
                                    showWizard: t.settings.showWizard,
                                },
                                { preloadBlocksCount: 2 },
                            ),
                        ),
                    (0, l.jsx)(C.nVz, {
                        pageId: C._Q$.NON_MUSIC,
                        children: (0, l.jsxs)(y.hO, {
                            scrollElement: s,
                            outerTitle: a({
                                id: "entity-names.podcasts-and-books",
                            }),
                            headerElement: E,
                            shouldHideHeader: e.landing.hasUpperBlocks,
                            children: [
                                (0, l.jsx)(A.Y9, {
                                    variant: A.Vw.TEXT,
                                    showControls: !1,
                                    disableStickyVariant: !0,
                                    children: (0, l.jsx)("div", {
                                        className: T().header,
                                        children: (0, l.jsx)(m.Heading, {
                                            variant: "h1",
                                            weight: "bold",
                                            size: "xl",
                                            children: (0, l.jsx)(r.A, {
                                                id: "entity-names.podcasts-and-books",
                                            }),
                                        }),
                                    }),
                                }),
                                (0, l.jsxs)(c.N, {
                                    className: T().root,
                                    containerClassName: T().content,
                                    ref: p,
                                    ...(0, u.Am)(u.Xk.nonMusic.NON_MUSIC_PAGE),
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: (0, i.$)(T().landing, {
                                                [T().landing_onlyWizard]: b,
                                            }),
                                            children: (0, l.jsx)(N.EA, {
                                                landing: e.landing,
                                                headerConcealerComponent: (0,
                                                l.jsx)("div", { ref: S }),
                                                errorComponent: (0, l.jsx)(
                                                    _.w,
                                                    {
                                                        className: T().error,
                                                        withBackwardControl: !1,
                                                    },
                                                ),
                                            }),
                                        }),
                                        (0, l.jsx)(A.A, {
                                            children: (0, l.jsx)(A.wi, {
                                                className: T().footer,
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        66901: (e, t, a) => {
            "use strict";
            a.d(t, { NonMusicCategoryPage: () => p });
            var l = a(33008),
                i = a(85896),
                s = a(97531),
                o = a(17846),
                n = a(66268),
                r = a(65),
                u = a(57747),
                d = a(77868),
                g = a(12898),
                c = a(83888),
                m = a(64143),
                N = a(79169),
                _ = a(18740),
                y = a(85291),
                C = a.n(y);
            let A = {
                    [r.K.ALBUM_CHART]: g.SQ,
                    [r.K.EDITORIAL_PLAYLISTS]: g.g0,
                    [r.K.CATEGORY]: g.tl,
                    [r.K.PROMOTIONS]: g.nM,
                    [r.K.CATEGORIES_TAB]: g.qh,
                },
                p = (0, s.PA)((e) => {
                    let { id: t } = e,
                        {
                            nonMusic: { categorySubpage: a },
                        } = (0, N.Pjs)(),
                        { contentScrollRef: s, setContentScrollRef: r } = (0,
                        N.gKY)(),
                        g = (0, N.W6M)(),
                        y = (0, n.useRef)(null);
                    a.isNotFound && (0, o.notFound)(),
                        (0, n.useEffect)(() => {
                            y.current !== t &&
                                t &&
                                (a.reset(), (y.current = t));
                        }, [t, a]),
                        (0, n.useEffect)(() => () => a.reset(), [a]),
                        (0, N.Jzs)(a.isResolved);
                    let p = (0, n.useMemo)(
                        () =>
                            a.blocks.map((e, t) => {
                                let s = A[e.type];
                                return (0, l.jsx)(
                                    N.FoH,
                                    {
                                        blockId: e.id,
                                        blockType: e.type,
                                        blockIdForFrom: ""
                                            .concat(N.hf$.DISCOVERY_BLOCK, "-")
                                            .concat(e.id),
                                        blockPosX: 1,
                                        blockPosY: t + 1,
                                        objectsCount: e.items.length,
                                        children: (0, l.jsx)(
                                            s,
                                            {
                                                headerClassName: (0, i.$)(
                                                    C().carouselBlockHeader,
                                                    C().carouselBlock,
                                                ),
                                                containerClassName:
                                                    C().carouselBlock,
                                                type: e.landingBlockType,
                                                loadingState: a.loadingState,
                                                id: e.id,
                                                isNotFound: a.isNotFound,
                                                hasSentAnalyticsOnLoaded: !1,
                                                meta: {
                                                    title: e.title,
                                                    description: e.description,
                                                    viewAllActionLink:
                                                        e.viewAllActionLink,
                                                },
                                                data: { items: e.items },
                                                isNeededToLoad: !1,
                                                isLoading: a.isLoading,
                                                isLoaded: a.isResolved,
                                                isRejected: a.isRejected,
                                                isShimmerVisible: a.isLoading,
                                                isShimmerActive: !0,
                                                isVisible: !0,
                                                objectsCount: e.items.length,
                                            },
                                            e.id,
                                        ),
                                    },
                                    e.id,
                                );
                            }),
                        [
                            a.blocks,
                            a.loadingState,
                            a.isNotFound,
                            a.isLoading,
                            a.isResolved,
                            a.isRejected,
                        ],
                    );
                    return (t &&
                        a.isNeededToLoad &&
                        (0, n.use)(a.getData({ categoryId: t })),
                    a.isSomethingWrong)
                        ? (0, l.jsx)(c.w, {})
                        : (0, l.jsx)(N.nVz, {
                              pageId: N._Q$.NON_MUSIC_CATEGORY,
                              children: (0, l.jsxs)(m.hO, {
                                  scrollElement: s,
                                  outerTitle: a.title,
                                  children: [
                                      (0, l.jsx)(_.Y9, {
                                          variant: _.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: g.canBack,
                                          children: (0, l.jsx)(d.Heading, {
                                              variant: "h2",
                                              weight: "bold",
                                              size: "xl",
                                              children: a.title,
                                          }),
                                      }),
                                      (0, l.jsxs)(u.N, {
                                          className: C().root,
                                          containerClassName: C().content,
                                          ref: r,
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: C().carouselBlocks,
                                                  children: p,
                                              }),
                                              (0, l.jsx)(_.A, {
                                                  children: (0, l.jsx)(_.wi, {
                                                      className: C().footer,
                                                  }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          });
                });
        },
        70829: (e, t, a) => {
            "use strict";
            a.d(t, { NonMusicAlbumsPage: () => A });
            var l = a(33008),
                i = a(85896),
                s = a(97531),
                o = a(17846),
                n = a(66268),
                r = a(73827),
                u = a(18064),
                d = a(77868),
                g = a(52732),
                c = a(64143),
                m = a(79169),
                N = a(18740),
                _ = a(33129),
                y = a(75187),
                C = a.n(y);
            let A = (0, s.PA)((e) => {
                var t, a;
                let { id: s, variant: y } = e,
                    {
                        nonMusic: { albums: A },
                        settings: p,
                    } = (0, m.Pjs)(),
                    { formatMessage: T } = (0, r.A)(),
                    { contentScrollRef: E, setContentScrollRef: S } = (0,
                    m.gKY)(),
                    b = (0, m.W6M)(),
                    h = p.layout === m.u40.Mobile;
                (A.isNotFound || !s) && (0, o.notFound)(),
                    (0, m.Jzs)(A.isResolved),
                    (0, n.useEffect)(
                        () => () => {
                            A.reset();
                        },
                        [A],
                    );
                let P = (0, n.useCallback)(
                        (e) => {
                            A.getAlbumsByRange(e.startIndex, e.endIndex);
                        },
                        [A],
                    ),
                    L = (0, n.useMemo)(
                        () => ({
                            Footer: () =>
                                (0, l.jsx)(N.A, {
                                    children: (0, l.jsx)(N.wi, {
                                        className: C().footer,
                                    }),
                                }),
                        }),
                        [],
                    ),
                    I = A.isLoading
                        ? 20
                        : null !=
                            (a = null == (t = A.albums) ? void 0 : t.length)
                          ? a
                          : 0;
                return (
                    s &&
                        A.isNeededToLoad &&
                        (y === _.x.EDITORIAL
                            ? (0, n.use)(A.getEditorialAlbums({ id: s }))
                            : (0, n.use)(A.getCategoryAlbums({ id: s }))),
                    (0, l.jsx)(m.nVz, {
                        pageId: m._Q$.NON_MUSIC_ALBUMS,
                        children: (0, l.jsx)(c.hO, {
                            scrollElement: E,
                            outerTitle: A.title,
                            children: (0, l.jsxs)("div", {
                                className: C().root,
                                ...(0, u.Am)(
                                    u.Xk.nonMusic.NON_MUSIC_ALBUMS_PAGE,
                                ),
                                children: [
                                    (0, l.jsx)(N.Y9, {
                                        variant: N.Vw.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: b.canBack,
                                        children: (0, l.jsx)(d.Heading, {
                                            id: "collection-artists-header",
                                            variant: "h2",
                                            weight: "bold",
                                            size: "xl",
                                            lineClamp: 1,
                                            children: A.title,
                                        }),
                                    }),
                                    (0, l.jsx)(N.$$, {
                                        className: (0, i.$)(
                                            C().scrollContainer,
                                            C().important,
                                        ),
                                        customComponents: L,
                                        itemContentCallback: (e) => {
                                            var t, a;
                                            let i =
                                                    null == (a = A.albums) ||
                                                    null == (t = a[e])
                                                        ? void 0
                                                        : t.data,
                                                s = T(
                                                    {
                                                        id: "loading-messages.entity-is-loading",
                                                    },
                                                    {
                                                        entityName: T({
                                                            id: "entity-names.album",
                                                        }),
                                                    },
                                                );
                                            return i
                                                ? (0, l.jsx)(
                                                      g.aX,
                                                      {
                                                          withLikesCount: !0,
                                                          album: i,
                                                          contentLinesCount: 3,
                                                      },
                                                      i.id,
                                                  )
                                                : (0, l.jsx)(
                                                      N.Vt,
                                                      { "aria-label": s },
                                                      e,
                                                  );
                                        },
                                        totalCount: I,
                                        onGetDataByRange: P,
                                        totalRequests: A.requestsCount,
                                        listClassName: C().content,
                                        itemClassName: C().item,
                                        handleRef: S,
                                        context: {
                                            listAriaLabel: T(
                                                { id: "mixes.albums-list" },
                                                { genreName: A.title || "" },
                                            ),
                                        },
                                        isMobileLayout: h,
                                        useWindowScroll: h,
                                    }),
                                ],
                            }),
                        }),
                    })
                );
            });
        },
        74523: (e) => {
            e.exports = {
                root: "NonMusicCategoryPlaylistsPage_root__NvUH8",
                scrollContainer:
                    "NonMusicCategoryPlaylistsPage_scrollContainer__uUyGe",
                important: "NonMusicCategoryPlaylistsPage_important__YBsHf",
                footer: "NonMusicCategoryPlaylistsPage_footer__TtkEO",
                item: "NonMusicCategoryPlaylistsPage_item__4YasT",
                content: "NonMusicCategoryPlaylistsPage_content__GZb1j",
            };
        },
        75187: (e) => {
            e.exports = {
                root: "NonMusicAlbumsPage_root__jlDXa",
                scrollContainer: "NonMusicAlbumsPage_scrollContainer__XNRsu",
                important: "NonMusicAlbumsPage_important__Rk8LT",
                footer: "NonMusicAlbumsPage_footer__LJCIL",
                item: "NonMusicAlbumsPage_item__YArCS",
                content: "NonMusicAlbumsPage_content__phVa7",
            };
        },
        80107: (e, t, a) => {
            "use strict";
            a.d(t, { NonMusicCategoryNotFoundPage: () => o });
            var l = a(33008),
                i = a(97531),
                s = a(35233);
            let o = (0, i.PA)(() => (0, l.jsx)(s.M, {}));
        },
        85291: (e) => {
            e.exports = {
                root: "NonMusicCategoryPage_root__GYeXL",
                content: "NonMusicCategoryPage_content__LJFnm",
                carouselBlocks: "NonMusicCategoryPage_carouselBlocks___BPJ_",
                carouselBlock: "NonMusicCategoryPage_carouselBlock__t41do",
                carouselBlockHeader:
                    "NonMusicCategoryPage_carouselBlockHeader__1uIfL",
                footer: "NonMusicCategoryPage_footer__56hvJ",
            };
        },
        90155: (e) => {
            e.exports = {
                root: "NonMusicPage_root__IPKkH",
                content: "NonMusicPage_content__7_TYy",
                header: "NonMusicPage_header__dijgk",
                landing: "NonMusicPage_landing__kGKTh",
                landing_onlyWizard: "NonMusicPage_landing_onlyWizard__P9nN3",
                footer: "NonMusicPage_footer__juz5v",
                error: "NonMusicPage_error__oW0V3",
            };
        },
    },
]);
