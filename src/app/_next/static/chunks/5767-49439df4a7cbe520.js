(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5767],
    {
        537: (e, t, a) => {
            "use strict";
            a.d(t, {
                mi: () => d.SortDropdown,
                wY: () => u,
                WG: () => l.W,
                hl: () => r,
                y8: () => i.useSort,
            });
            var l = a(25585),
                s = a(19964);
            let r = (e) => !!e && (e === s.x.ASC || e === s.x.DESC);
            var i = a(99963),
                o = a(41028),
                n = a(75729);
            let u = o.gK
                .model("Sort", {
                    sortBy: o.gK.maybe(o.gK.enumeration(Object.values(n.g))),
                    sortOrder: o.gK.maybe(o.gK.enumeration(Object.values(s.x))),
                })
                .actions((e) => ({
                    setSortBy(t) {
                        e.sortBy = t;
                    },
                    setSortOrder(t) {
                        e.sortOrder = t;
                    },
                }));
            var d = a(2614);
        },
        25767: (e, t, a) => {
            "use strict";
            a.d(t, {
                oM: () => L.LabelAlbumsPage,
                ac: () => N.LabelArtistsPage,
                wg: () => h.LabelPage,
                X: () => p,
            });
            var l,
                s = a(17846),
                r = a(66268),
                i = a(79169);
            (0, r.cache)(async function (e, t) {
                var a;
                let l,
                    r =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {
                                  labelId: Number(e),
                                  page: 0,
                                  pageSize: 20,
                                  sortBy: t,
                              };
                (0, i.LLJ)(e) || (0, s.notFound)();
                try {
                    let {
                        container: t,
                        backendHostTld: a,
                        locale: s,
                        host: o,
                        fullUrl: n,
                        isRSC: u,
                        requestUrl: d,
                    } = await (0, i.IhE)();
                    if (u)
                        return {
                            label: void 0,
                            albums: void 0,
                            backendHostTld: a,
                            locale: s,
                            host: o,
                            fullUrl: n,
                            requestUrl: d,
                        };
                    let m = Number(e),
                        c = t.get(i.PLX),
                        g = await c.getData({ labelId: m }),
                        b = await c.getAlbums(
                            r || { labelId: m, page: 0, pageSize: 20 },
                        );
                    l = {
                        label: g,
                        albums: b,
                        backendHostTld: a,
                        locale: s,
                        host: o,
                        fullUrl: n,
                        requestUrl: d,
                    };
                } catch (e) {
                    return (0, i.tfF)(e, () => ({
                        label: void 0,
                        albums: void 0,
                        ...(0, i.Bj3)(),
                    }));
                }
                return (
                    (null == (a = l.label) ? void 0 : a.error) ===
                        "not-found" && (0, s.notFound)(),
                    l
                );
            }),
                (0, r.cache)(async (e, t) => {
                    var a;
                    let l;
                    (0, i.LLJ)(e) || (0, s.notFound)();
                    try {
                        let {
                            container: a,
                            backendHostTld: s,
                            locale: r,
                            host: o,
                            fullUrl: n,
                            isRSC: u,
                            requestUrl: d,
                        } = await (0, i.IhE)();
                        if (u)
                            return {
                                label: void 0,
                                artists: void 0,
                                backendHostTld: s,
                                locale: r,
                                host: o,
                                fullUrl: n,
                                requestUrl: d,
                            };
                        let m = Number(e),
                            c = a.get(i.PLX),
                            g = await c.getData({ labelId: m }),
                            b = await c.getArtists(
                                t || { labelId: m, page: 0, pageSize: 20 },
                            );
                        l = {
                            label: g,
                            artists: b,
                            backendHostTld: s,
                            locale: r,
                            host: o,
                            fullUrl: n,
                            requestUrl: d,
                        };
                    } catch (e) {
                        return (0, i.tfF)(e, () => ({
                            label: void 0,
                            artists: void 0,
                            ...(0, i.Bj3)(),
                        }));
                    }
                    return (
                        (null == (a = l.label) ? void 0 : a.error) ===
                            "not-found" && (0, s.notFound)(),
                        l
                    );
                }),
                (0, r.cache)(async (e) => {
                    var t;
                    let a;
                    (0, i.LLJ)(e) || (0, s.notFound)();
                    try {
                        let {
                            container: t,
                            backendHostTld: l,
                            locale: s,
                            host: r,
                            fullUrl: o,
                            isRSC: n,
                            requestUrl: u,
                        } = await (0, i.IhE)();
                        if (n)
                            return {
                                label: void 0,
                                backendHostTld: l,
                                locale: s,
                                host: r,
                                fullUrl: o,
                                requestUrl: u,
                            };
                        let d = t.get(i.PLX);
                        a = {
                            label: await d.getData({ labelId: Number(e) }),
                            backendHostTld: l,
                            locale: s,
                            host: r,
                            fullUrl: o,
                            requestUrl: u,
                        };
                    } catch (e) {
                        return (0, i.tfF)(e, () => ({
                            label: void 0,
                            ...(0, i.Bj3)(),
                        }));
                    }
                    return (
                        (null == (t = a.label) ? void 0 : t.error) ===
                            "not-found" && (0, s.notFound)(),
                        a
                    );
                }),
                a(68811),
                a(62175),
                a(74295);
            var o = a(41028),
                n = a(61979);
            !(function (e) {
                (e.MUSICAL = "musical"), (e.PUBLISHER = "publisher");
            })(l || (l = {}));
            var u = a(52732),
                d = a(70879),
                m = a(59615),
                c = a(537);
            let g = o.gK
                    .model("LabelAlbumsPage", {
                        pagesLoader: (0, m.Ij)(u.JC),
                        errorStatusCode: o.gK.maybeNull(o.gK.number),
                        sort: c.wY,
                    })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                        get isNotFound() {
                            return (
                                e.pagesLoader.isInitialRequestRejected &&
                                e.errorStatusCode === n.X1.NOT_FOUND
                            );
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, o.L3)(function* (t) {
                            let {
                                    labelId: a,
                                    page: l = 0,
                                    pageSize: s = 20,
                                    preloadedAlbums: r,
                                    sortBy: d,
                                } = t,
                                { labelsResource: m, modelActionsLogger: c } =
                                    (0, o._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(l))
                                try {
                                    e.pagesLoader.setPageState(
                                        l,
                                        i.GuX.PENDING,
                                    );
                                    let t = r;
                                    t ||
                                        (t = yield m.getAlbums({
                                            labelId: a,
                                            page: l,
                                            pageSize: s,
                                            sortBy: d,
                                        }));
                                    let o = t.albums.map(u.pp);
                                    e.pagesLoader.setItems(o, {
                                        page: l,
                                        pager: t.pager,
                                    });
                                } catch (t) {
                                    c.error(t),
                                        t instanceof n.GX &&
                                            t.statusCode === n.X1.NOT_FOUND &&
                                            (e.errorStatusCode =
                                                n.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, {
                                            responseStatus: i.FlZ.ERROR,
                                            page: l,
                                        });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.errorStatusCode = null);
                        },
                    })),
                b = o.gK
                    .model("LabelArtistsPage", {
                        pagesLoader: (0, m.Ij)(d.PK),
                        errorStatusCode: o.gK.maybeNull(o.gK.number),
                    })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                        get isNotFound() {
                            return (
                                e.pagesLoader.isInitialRequestRejected &&
                                e.errorStatusCode === n.X1.NOT_FOUND
                            );
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, o.L3)(function* (t) {
                            let {
                                    labelId: a,
                                    page: l = 0,
                                    pageSize: s = 20,
                                    preloadedArtists: r,
                                } = t,
                                { labelsResource: u, modelActionsLogger: m } =
                                    (0, o._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(l))
                                try {
                                    e.pagesLoader.setPageState(
                                        l,
                                        i.GuX.PENDING,
                                    );
                                    let t = r;
                                    t ||
                                        (t = yield u.getArtists({
                                            labelId: a,
                                            page: l,
                                            pageSize: s,
                                        }));
                                    let o = t.artists.map(d.dM);
                                    e.pagesLoader.setItems(o, {
                                        page: l,
                                        pager: t.pager,
                                    });
                                } catch (t) {
                                    m.error(t),
                                        t instanceof n.GX &&
                                            t.statusCode === n.X1.NOT_FOUND &&
                                            (e.errorStatusCode =
                                                n.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, {
                                            responseStatus: i.FlZ.ERROR,
                                            page: l,
                                        });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.errorStatusCode = null);
                        },
                    })),
                p = o.gK
                    .compose(
                        o.gK.model("LabelPage", {
                            id: o.gK.maybeNull(o.gK.string),
                            name: o.gK.maybeNull(o.gK.string),
                            type: o.gK.maybeNull(o.gK.string),
                            albums: o.gK.maybeNull(o.gK.array(u.JC)),
                            albumsSubpage: g,
                            artistsSubpage: b,
                            artists: o.gK.maybeNull(o.gK.array(d.PK)),
                            errorStatusCode: o.gK.maybeNull(o.gK.number),
                        }),
                        m.pl,
                        m.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return (
                                    e.isNeededToLoad ||
                                    e.loadingState === i.GuX.PENDING
                                );
                            },
                            get hasAlbums() {
                                return !!(
                                    t.isLoading ||
                                    (e.albums && e.albums.length > 0)
                                );
                            },
                            get hasArtists() {
                                if (t.isPublisher) return !1;
                                return !!(
                                    t.isLoading ||
                                    (e.artists && e.artists.length > 0)
                                );
                            },
                            get isNotFound() {
                                let a =
                                        e.isResolved &&
                                        !e.name &&
                                        !t.hasAlbums &&
                                        !t.hasArtists,
                                    l =
                                        e.errorStatusCode &&
                                        [
                                            n.X1.NOT_FOUND,
                                            n.X1.BAD_REQUEST,
                                        ].includes(e.errorStatusCode);
                                return (e.isRejected && l) || a;
                            },
                            get albumsUrl() {
                                if (!e.id) return "";
                                let { href: t } = (0, i.uvd)(
                                    "/label/:labelId/albums",
                                    { params: { labelId: e.id } },
                                );
                                return t;
                            },
                            get artistsUrl() {
                                if (!e.id) return "";
                                let { href: t } = (0, i.uvd)(
                                    "/label/:labelId/artists",
                                    { params: { labelId: e.id } },
                                );
                                return t;
                            },
                            get isPublisher() {
                                return e.type === l.PUBLISHER;
                            },
                            get isMusical() {
                                return e.type === l.MUSICAL;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getAlbums: (0, o.L3)(function* (t) {
                                let {
                                    labelsResource: a,
                                    modelActionsLogger: l,
                                } = (0, o._$)(e);
                                try {
                                    let l = yield a.getAlbums(t);
                                    e.albums = (0, o.wg)(l.albums.map(u.pp));
                                } catch (t) {
                                    l.error(t),
                                        t instanceof n.GX &&
                                            [
                                                n.X1.BAD_REQUEST,
                                                n.X1.NOT_FOUND,
                                            ].includes(t.statusCode) &&
                                            (e.errorStatusCode =
                                                n.X1.NOT_FOUND);
                                }
                            }),
                            getArtists: (0, o.L3)(function* (t) {
                                let {
                                    labelsResource: a,
                                    modelActionsLogger: l,
                                } = (0, o._$)(e);
                                try {
                                    let l = yield a.getArtists(t);
                                    e.artists = (0, o.wg)(l.artists.map(d.dM));
                                } catch (t) {
                                    l.error(t),
                                        t instanceof n.GX &&
                                            [
                                                n.X1.BAD_REQUEST,
                                                n.X1.NOT_FOUND,
                                            ].includes(t.statusCode) &&
                                            (e.errorStatusCode =
                                                n.X1.NOT_FOUND);
                                }
                            }),
                            getData: (0, o.L3)(function* (a) {
                                let {
                                        labelId: l,
                                        preloadedLabel: s,
                                        withLabelEntities: r = !0,
                                    } = a,
                                    {
                                        labelsResource: u,
                                        modelActionsLogger: d,
                                    } = (0, o._$)(e);
                                if (e.loadingState !== i.GuX.PENDING)
                                    try {
                                        e.loadingState = i.GuX.PENDING;
                                        let a = s;
                                        a ||
                                            (a = yield u.getData({
                                                labelId: l,
                                            })),
                                            (e.id = String(a.id)),
                                            (e.name = a.name),
                                            (e.type = a.type),
                                            r &&
                                                (yield t.getAlbums({
                                                    labelId: l,
                                                    pageSize: 8,
                                                }),
                                                yield t.getArtists({
                                                    labelId: l,
                                                    pageSize: 8,
                                                })),
                                            (e.loadingState = i.GuX.RESOLVE);
                                    } catch (t) {
                                        d.error(t),
                                            t instanceof n.GX &&
                                                [
                                                    n.X1.BAD_REQUEST,
                                                    n.X1.NOT_FOUND,
                                                ].includes(t.statusCode) &&
                                                (e.errorStatusCode =
                                                    t.statusCode),
                                            e.loadingState !== i.GuX.IDLE &&
                                                (e.loadingState = i.GuX.REJECT);
                                    }
                            }),
                            reset() {
                                (e.loadingState = i.GuX.IDLE),
                                    (e.id = null),
                                    (e.name = null),
                                    (e.type = null),
                                    (e.errorStatusCode = null),
                                    e.destroyItems([e.albums, e.artists]);
                            },
                        };
                        return t;
                    });
            var L = a(87666),
                N = a(87754);
            a(71029);
            var h = a(56932);
        },
        30624: (e) => {
            e.exports = {
                root: "LabelArtistsPage_root__smTJJ",
                scrollContainer: "LabelArtistsPage_scrollContainer__alDjs",
                important: "LabelArtistsPage_important__pOZpi",
                footer: "LabelArtistsPage_footer__JU2P3",
                item: "LabelArtistsPage_item__kol2m",
                content: "LabelArtistsPage_content__4hjcX",
            };
        },
        56932: (e, t, a) => {
            "use strict";
            a.d(t, { LabelPage: () => C });
            var l = a(33008),
                s = a(85896),
                r = a(97531),
                i = a(17846),
                o = a(66268),
                n = a(73827),
                u = a(96560),
                d = a(18064),
                m = a(42213),
                c = a(44189),
                g = a(78016),
                b = a(57747),
                p = a(77868),
                L = a(74837),
                N = a(83888),
                h = a(52732),
                y = a(90317),
                _ = a(64143),
                S = a(79169),
                A = a(18740),
                x = a(58005),
                f = a(71990),
                v = a.n(f);
            let C = (0, r.PA)((e) => {
                var t, a, r, f;
                let { labelId: C, preloadedLabel: P } = e,
                    {
                        label: T,
                        settings: { isMobile: E },
                        experiments: j,
                    } = (0, S.Pjs)(),
                    { formatMessage: R } = (0, n.A)(),
                    { contentScrollRef: I, setContentScrollRef: w } = (0,
                    S.gKY)(),
                    { notify: X } = (0, S.lkh)(),
                    { shareLink: B } = (0, S.bNS)("/label/:labelId", {
                        params: { labelId: null != (a = T.id) ? a : "" },
                    }),
                    O = (0, o.useRef)(null),
                    U = (0, o.useRef)(0);
                (0, x.Q)(
                    {
                        id: Number(T.id),
                        name: null != (r = T.name) ? r : "",
                        type: null != (f = T.type) ? f : "",
                    },
                    x.T.ROOT,
                );
                let k = (0, m.c)(async () => {
                        await window.navigator.clipboard.writeText(B),
                            X(
                                (0, l.jsx)(A.Do, {
                                    entityVariant: S.Yxq.LABEL,
                                    entityTitle: T.name || "",
                                }),
                                { containerId: S.uQT.INFO },
                            );
                    }),
                    F = (0, o.useMemo)(
                        () =>
                            E
                                ? (0, l.jsx)(c.Button, {
                                      className: v().button,
                                      onClick: k,
                                      icon: (0, l.jsx)(g.Icon, {
                                          variant: "share",
                                          size: "xxs",
                                      }),
                                      size: "l",
                                      radius: "xxxl",
                                      ...(0, d.Am)(
                                          d.Xk.label.SHARE_COPY_LINK_BUTTON,
                                      ),
                                  })
                                : (0, l.jsx)(c.Button, {
                                      className: v().button,
                                      onClick: k,
                                      icon: (0, l.jsx)(g.Icon, {
                                          variant: "share",
                                          size: "xxs",
                                      }),
                                      size: "l",
                                      radius: "xxxl",
                                      ...(0, d.Am)(
                                          d.Xk.label.SHARE_COPY_LINK_BUTTON,
                                      ),
                                      children: (0, l.jsx)(u.A, {
                                          id: "interface-actions.share",
                                      }),
                                  }),
                        [E, k],
                    ),
                    D = T.isPublisher
                        ? R({ id: "entity-names.publisher" })
                        : R({ id: "entity-names.label" }),
                    G = T.isPublisher
                        ? R({ id: "entity-names.non-music-releases" })
                        : R({ id: "entity-names.releases" });
                return ((0, o.useEffect)(
                    () => () => {
                        T.reset();
                    },
                    [T],
                ),
                (T.isNotFound ||
                    !j.checkExperiment(S.zal.WebNextLabelPage, "on")) &&
                    (0, i.notFound)(),
                (0, o.useEffect)(
                    () => () => {
                        U.current = 0;
                    },
                    [T],
                ),
                (0, o.useEffect)(() => {
                    T.isRejected &&
                        U &&
                        !(U.current > 0) &&
                        (X(
                            (0, l.jsx)(A.hT, {
                                error: R({
                                    id: "error-messages.error-load-part-page",
                                }),
                            }),
                            { containerId: S.uQT.ERROR },
                        ),
                        U.current++);
                }, [T.isRejected, X, R]),
                (0, S.Jzs)(T.isResolved),
                T.isNeededToLoad &&
                    (0, o.use)(
                        T.getData({ labelId: Number(C), preloadedLabel: P }),
                    ),
                T.isRejected && !T.isNotFound)
                    ? (0, l.jsx)(N.w, {})
                    : (0, l.jsx)(S.nVz, {
                          pageId: S._Q$.LABEL,
                          children: (0, l.jsxs)(_.hO, {
                              scrollElement: I,
                              children: [
                                  (0, l.jsx)(A.Y9, { innerHeaderRef: O }),
                                  (0, l.jsxs)(b.N, {
                                      className: v().root,
                                      containerClassName: v().content,
                                      ref: w,
                                      ...(0, d.Am)(d.Xk.label.LABEL_PAGE),
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: v().header,
                                              children: [
                                                  (0, l.jsx)(p.Caption, {
                                                      variant: "div",
                                                      type: "text",
                                                      size: "m",
                                                      weight: "medium",
                                                      children: D,
                                                  }),
                                                  (0, l.jsx)(L.RR, {
                                                      className: v().title,
                                                      title: T.name || "",
                                                      headingVariant: "h1",
                                                  }),
                                                  F,
                                              ],
                                          }),
                                          T.hasAlbums &&
                                              T.albums &&
                                              (0, l.jsx)(h.pZ, {
                                                  isShimmerVisible: T.isLoading,
                                                  isShimmerActive: !0,
                                                  className:
                                                      v().carouselContainer,
                                                  headerClassName: (0, s.$)(
                                                      v().carouselBlock,
                                                      v().carouselBlockHeader,
                                                  ),
                                                  containerClassName:
                                                      v().carouselBlock,
                                                  title: G,
                                                  viewAllActionLink:
                                                      T.albumsUrl,
                                                  albums: T.albums,
                                                  headingVariant: "h2",
                                                  ...(0, d.Am)(
                                                      d.Xk.label
                                                          .RELEASES_CAROUSEL,
                                                  ),
                                              }),
                                          T.hasArtists &&
                                              (0, l.jsx)(A.OY, {
                                                  isShimmerVisible: T.isLoading,
                                                  isShimmerActive: !0,
                                                  headerClassName: (0, s.$)(
                                                      v().carouselBlockHeader,
                                                      v().carouselBlock,
                                                  ),
                                                  containerClassName:
                                                      v().carouselBlock,
                                                  viewAllActionLink:
                                                      T.artistsUrl,
                                                  title: R({
                                                      id: "entity-names.artists",
                                                  }),
                                                  headingVariant: "h2",
                                                  ...(0, d.Am)(
                                                      d.Xk.label
                                                          .ARTISTS_CAROUSEL,
                                                  ),
                                                  children:
                                                      null == (t = T.artists)
                                                          ? void 0
                                                          : t.map((e) =>
                                                                (0, l.jsx)(
                                                                    y.ao,
                                                                    {
                                                                        artist: e,
                                                                        contentLinesCount: 3,
                                                                    },
                                                                    e.id,
                                                                ),
                                                            ),
                                              }),
                                          (0, l.jsx)(A.A, {
                                              children: (0, l.jsx)(A.wi, {
                                                  className: v().footer,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
        },
        58005: (e, t, a) => {
            "use strict";
            a.d(t, { Q: () => u, T: () => n });
            var l = a(66268),
                s = a(79169),
                r = a(68811),
                i = a(62175),
                o = a(74295),
                n = (function (e) {
                    return (
                        (e.ROOT = "root"),
                        (e.ALBUMS = "albums"),
                        (e.ARTISTS = "artists"),
                        e
                    );
                })({});
            let u = (e, t) => {
                (0, l.useEffect)(() => {
                    switch (t) {
                        case "root":
                            (0, o.I)(e, {
                                fullUrl: null,
                                locale: null,
                                url: null,
                                tld: "",
                                host: "",
                            }).then((e) => {
                                (0, s.jxB)(e);
                            });
                            break;
                        case "albums":
                            (0, r._)(e, {
                                fullUrl: null,
                                locale: null,
                                url: null,
                                tld: "",
                                host: "",
                            }).then((e) => {
                                (0, s.jxB)(e);
                            });
                            break;
                        case "artists":
                            (0, i.M)(e, {
                                fullUrl: null,
                                locale: null,
                                url: null,
                                tld: "",
                                host: "",
                            }).then((e) => {
                                (0, s.jxB)(e);
                            });
                    }
                }, [
                    null == e ? void 0 : e.id,
                    null == e ? void 0 : e.type,
                    null == e ? void 0 : e.name,
                    t,
                    e,
                ]);
            };
        },
        62175: (e, t, a) => {
            "use strict";
            a.d(t, { M: () => s });
            var l = a(79169);
            async function s(e, t) {
                var a, s, r;
                if (!e)
                    return {
                        title: "",
                        description: "",
                        openGraph: {},
                        twitter: {},
                        appLinks: {},
                        other: {},
                    };
                let i = await (0, l.WGy)(t.locale),
                    o = i(
                        { id: "metadata.label-artists-title" },
                        { labelName: e.name, labelType: e.type },
                    ),
                    n = i(
                        { id: "metadata.label-artists-description" },
                        { labelName: e.name, labelType: e.type },
                    );
                return {
                    title: o,
                    description: n,
                    openGraph: (0, l.i$E)({
                        ogTitle: o,
                        ogDescription: n,
                        fullUrl: null != (a = t.fullUrl) ? a : "",
                        locale: t.locale,
                        siteName: i({ id: "metadata.yandex-music" }),
                        ogType: "music.playlist",
                    }),
                    twitter: (0, l.HRN)({
                        cardType: l.WfF.APP,
                        title: o,
                        url: t.url,
                        appName: i({ id: "metadata.yandex-music" }),
                    }),
                    appLinks: (0, l.X5i)({
                        additional: {
                            ...t,
                            url: null != (s = t.url) ? s : "",
                            fullUrl: null != (r = t.fullUrl) ? r : "",
                            host: t.host,
                        },
                        appName: i({ id: "metadata.yandex-music" }),
                    }),
                    alternates: (0, l.SEs)("/label/:labelId/artists", t.tld, {
                        params: { labelId: e.id },
                    }),
                };
            }
        },
        68544: (e) => {
            e.exports = {
                root: "LabelAlbumsPage_root__xyWi4",
                scrollContainer: "LabelAlbumsPage_scrollContainer__zRUlM",
                important: "LabelAlbumsPage_important__s18oL",
                footer: "LabelAlbumsPage_footer__dcXFk",
                item: "LabelAlbumsPage_item__Qjz9F",
                content: "LabelAlbumsPage_content__jOWKZ",
            };
        },
        68811: (e, t, a) => {
            "use strict";
            a.d(t, { _: () => s });
            var l = a(79169);
            async function s(e, t) {
                var a, s, r;
                if (!e)
                    return {
                        title: "",
                        description: "",
                        openGraph: {},
                        twitter: {},
                        appLinks: {},
                        other: {},
                    };
                let i = await (0, l.WGy)(t.locale),
                    o = i(
                        { id: "metadata.label-albums-title" },
                        { labelName: e.name, labelType: e.type },
                    ),
                    n = i(
                        { id: "metadata.label-albums-description" },
                        { labelName: e.name, labelType: e.type },
                    );
                return {
                    title: o,
                    description: n,
                    openGraph: (0, l.i$E)({
                        ogTitle: o,
                        ogDescription: n,
                        fullUrl: null != (a = t.fullUrl) ? a : "",
                        locale: t.locale,
                        siteName: i({ id: "metadata.yandex-music" }),
                        ogType: "music.playlist",
                    }),
                    twitter: (0, l.HRN)({
                        cardType: l.WfF.APP,
                        title: o,
                        url: t.url,
                        appName: i({ id: "metadata.yandex-music" }),
                    }),
                    appLinks: (0, l.X5i)({
                        additional: {
                            ...t,
                            url: null != (s = t.url) ? s : "",
                            fullUrl: null != (r = t.fullUrl) ? r : "",
                            host: t.host,
                        },
                        appName: i({ id: "metadata.yandex-music" }),
                    }),
                    alternates: (0, l.SEs)("/label/:labelId/albums", t.tld, {
                        params: { labelId: e.id },
                    }),
                };
            }
        },
        71029: (e, t, a) => {
            "use strict";
            a.d(t, { LabelNotFoundPage: () => r });
            var l = a(33008),
                s = a(35233);
            let r = () => (0, l.jsx)(s.M, {});
        },
        71990: (e) => {
            e.exports = {
                root: "LabelPage_root__jquyP",
                content: "LabelPage_content__9st_X",
                header: "LabelPage_header__G2xY_",
                title: "LabelPage_title__BNxeX",
                button: "LabelPage_button__JXw3C",
                carouselBlock: "LabelPage_carouselBlock__zPJmW",
                carouselBlockHeader: "LabelPage_carouselBlockHeader__dvYqJ",
                carouselContainer: "LabelPage_carouselContainer__bRVMp",
                footer: "LabelPage_footer__lvKmF",
            };
        },
        74295: (e, t, a) => {
            "use strict";
            a.d(t, { I: () => s });
            var l = a(79169);
            async function s(e, t) {
                var a, s, r;
                if (!e)
                    return {
                        title: "",
                        description: "",
                        openGraph: {},
                        twitter: {},
                        appLinks: {},
                        other: {},
                    };
                let i = await (0, l.WGy)(t.locale),
                    o = i(
                        { id: "metadata.label-title" },
                        { labelTitle: e.name, labelType: e.type },
                    ),
                    n = i(
                        { id: "metadata.label-description" },
                        { labelTitle: e.name, labelType: e.type },
                    );
                return {
                    title: o,
                    description: n,
                    openGraph: (0, l.i$E)({
                        ogTitle: o,
                        ogDescription: n,
                        fullUrl: null != (a = t.fullUrl) ? a : "",
                        locale: t.locale,
                        siteName: i({ id: "metadata.yandex-music" }),
                        ogType: "music.playlist",
                    }),
                    twitter: (0, l.HRN)({
                        cardType: l.WfF.APP,
                        title: o,
                        url: t.url,
                        appName: i({ id: "metadata.yandex-music" }),
                    }),
                    appLinks: (0, l.X5i)({
                        additional: {
                            ...t,
                            url: null != (s = t.url) ? s : "",
                            fullUrl: null != (r = t.fullUrl) ? r : "",
                            host: t.host,
                        },
                        appName: i({ id: "metadata.yandex-music" }),
                    }),
                    alternates: (0, l.SEs)("/label/:labelId", t.tld, {
                        params: { labelId: e.id },
                    }),
                };
            }
        },
        87666: (e, t, a) => {
            "use strict";
            a.d(t, { LabelAlbumsPage: () => S });
            var l = a(33008),
                s = a(85896),
                r = a(97531),
                i = a(17846),
                o = a(66268),
                n = a(73827),
                u = a(18064),
                d = a(42213),
                m = a(77868),
                c = a(83888),
                g = a(52732),
                b = a(64143),
                p = a(537),
                L = a(79169),
                N = a(18740),
                h = a(58005),
                y = a(68544),
                _ = a.n(y);
            let S = (0, r.PA)((e) => {
                let {
                        labelId: t,
                        preloadedLabel: a,
                        preloadedAlbums: r,
                        sortBy: y,
                    } = e,
                    {
                        label: {
                            id: S,
                            type: A,
                            name: x,
                            albumsSubpage: f,
                            reset: v,
                            isNeededToLoad: C,
                            getData: P,
                            isPublisher: T,
                        },
                        settings: { isMobile: E },
                        experiments: j,
                    } = (0, L.Pjs)(),
                    { formatMessage: R } = (0, n.A)(),
                    { contentScrollRef: I, setContentScrollRef: w } = (0,
                    L.gKY)(),
                    X = (0, L.W6M)(),
                    B = T
                        ? R(
                              { id: "page.label-podcast-header" },
                              { labelName: x },
                          )
                        : R(
                              { id: "page.label-albums-header" },
                              { labelName: x },
                          ),
                    O = (0, d.c)((e) => {
                        var a;
                        f.getData({
                            labelId: Number(t),
                            page: e,
                            pageSize: 20,
                            sortBy: null != (a = f.sort.sortBy) ? a : y,
                        });
                    }),
                    U = (0, d.c)(() => {
                        f.reset(), O(0);
                    });
                (0, p.y8)({ sortModel: f.sort }),
                    (0, L.XcE)(f.pagesLoader, O),
                    (0, o.useEffect)(
                        () => () => {
                            v(), f.reset();
                        },
                        [v, f],
                    ),
                    (f.isNotFound ||
                        !j.checkExperiment(L.zal.WebNextLabelPage, "on")) &&
                        (0, i.notFound)(),
                    (0, h.Q)(
                        {
                            id: Number(S),
                            name: null != x ? x : "",
                            type: null != A ? A : "",
                        },
                        h.T.ALBUMS,
                    ),
                    (0, L.Jzs)(f.isResolved);
                let k = (0, o.useMemo)(
                        () => ({
                            Footer: () =>
                                (0, l.jsx)(N.A, {
                                    children: (0, l.jsx)(N.wi, {
                                        className: _().footer,
                                    }),
                                }),
                        }),
                        [],
                    ),
                    F = R({ id: "entity-names.label-albums-list" }),
                    D = [];
                if (f.isNeededToLoad) {
                    var G;
                    let e = f.sort.sortBy === y || void 0 === f.sort.sortBy;
                    D.push(
                        f.getData({
                            labelId: Number(t),
                            page: 0,
                            pageSize: 20,
                            preloadedAlbums: e ? r : void 0,
                            sortBy: null != (G = f.sort.sortBy) ? G : y,
                        }),
                    );
                }
                if (
                    (C &&
                        D.push(
                            P({
                                labelId: Number(t),
                                preloadedLabel: a,
                                withLabelEntities: !1,
                            }),
                        ),
                    D.length && (0, o.use)(Promise.allSettled(D)),
                    f.isRejected && !f.isNotFound)
                )
                    return (0, l.jsx)(c.w, {});
                let K = f.isShimmerVisible ? 20 : f.items.length;
                return (0, l.jsx)(L.nVz, {
                    pageId: L._Q$.LABEL_ALBUMS,
                    children: (0, l.jsx)(b.hO, {
                        scrollElement: I,
                        outerTitle: B,
                        children: (0, l.jsxs)("div", {
                            className: _().root,
                            ...(0, u.Am)(u.Xk.label.LABEL_ALBUMS_PAGE),
                            children: [
                                (0, l.jsxs)(N.Y9, {
                                    variant: N.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: X.canBack,
                                    children: [
                                        (0, l.jsx)(m.Heading, {
                                            variant: "h1",
                                            weight: "bold",
                                            size: "xl",
                                            lineClamp: 1,
                                            children: B,
                                        }),
                                        (0, l.jsx)(p.mi, {
                                            sortModel: f.sort,
                                            onSort: U,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(N.$$, {
                                    className: (0, s.$)(
                                        _().scrollContainer,
                                        _().important,
                                    ),
                                    listClassName: _().content,
                                    itemClassName: _().item,
                                    customComponents: k,
                                    itemContentCallback: (e) => {
                                        let t = f.items[e],
                                            a = R(
                                                {
                                                    id: "loading-messages.entity-is-loading",
                                                },
                                                {
                                                    entityName: R({
                                                        id: "entity-names.album",
                                                    }),
                                                },
                                            );
                                        return t
                                            ? (0, l.jsx)(
                                                  g.aX,
                                                  {
                                                      album: t,
                                                      contentLinesCount: 4,
                                                      withAddition:
                                                          !t.isNonMusic,
                                                      withLikesCount:
                                                          t.isNonMusic,
                                                  },
                                                  t.id,
                                              )
                                            : (0, l.jsx)(N.Vt, {
                                                  "aria-label": a,
                                                  linesCount: 4,
                                              });
                                    },
                                    totalCount: K,
                                    onGetDataByPage: O,
                                    pageSize: 20,
                                    totalRequests: f.requestsCount,
                                    handleRef: w,
                                    context: { listAriaLabel: F },
                                    isMobileLayout: E,
                                    useWindowScroll: E,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        87754: (e, t, a) => {
            "use strict";
            a.d(t, { LabelArtistsPage: () => _ });
            var l = a(33008),
                s = a(85896),
                r = a(97531),
                i = a(17846),
                o = a(66268),
                n = a(73827),
                u = a(18064),
                d = a(42213),
                m = a(77868),
                c = a(83888),
                g = a(90317),
                b = a(64143),
                p = a(79169),
                L = a(18740),
                N = a(58005),
                h = a(30624),
                y = a.n(h);
            let _ = (0, r.PA)((e) => {
                let { labelId: t, preloadedLabel: a, preloadedArtists: r } = e,
                    {
                        label: {
                            id: h,
                            name: _,
                            type: S,
                            artistsSubpage: A,
                            reset: x,
                            isNeededToLoad: f,
                            getData: v,
                        },
                        settings: { isMobile: C },
                        experiments: P,
                    } = (0, p.Pjs)(),
                    { formatMessage: T } = (0, n.A)(),
                    { contentScrollRef: E, setContentScrollRef: j } = (0,
                    p.gKY)(),
                    R = (0, p.W6M)(),
                    I = T(
                        { id: "page.label-artists-header" },
                        { labelName: _ },
                    ),
                    w = (0, d.c)((e) => {
                        A.getData({
                            labelId: Number(t),
                            page: e,
                            pageSize: 20,
                        });
                    });
                (0, p.XcE)(A.pagesLoader, w),
                    (0, o.useEffect)(
                        () => () => {
                            x(), A.reset();
                        },
                        [x, A],
                    ),
                    (A.isNotFound ||
                        !P.checkExperiment(p.zal.WebNextLabelPage, "on")) &&
                        (0, i.notFound)(),
                    (0, N.Q)(
                        {
                            id: Number(h),
                            name: null != _ ? _ : "",
                            type: null != S ? S : "",
                        },
                        N.T.ARTISTS,
                    ),
                    (0, p.Jzs)(A.isResolved);
                let X = (0, o.useMemo)(
                        () => ({
                            Footer: () =>
                                (0, l.jsx)(L.A, {
                                    children: (0, l.jsx)(L.wi, {
                                        className: y().footer,
                                    }),
                                }),
                        }),
                        [],
                    ),
                    B = T({ id: "entity-names.label-artists-list" }),
                    O = [];
                if (
                    (A.isNeededToLoad &&
                        O.push(
                            A.getData({
                                labelId: Number(t),
                                page: 0,
                                pageSize: 20,
                                preloadedArtists: r,
                            }),
                        ),
                    f &&
                        O.push(
                            v({
                                labelId: Number(t),
                                preloadedLabel: a,
                                withLabelEntities: !1,
                            }),
                        ),
                    O.length && (0, o.use)(Promise.allSettled(O)),
                    A.isRejected && !A.isNotFound)
                )
                    return (0, l.jsx)(c.w, {});
                let U = A.isShimmerVisible ? 20 : A.items.length;
                return (0, l.jsx)(p.nVz, {
                    pageId: p._Q$.LABEL_ARTISTS,
                    children: (0, l.jsx)(b.hO, {
                        scrollElement: E,
                        outerTitle: I,
                        children: (0, l.jsxs)("div", {
                            className: y().root,
                            ...(0, u.Am)(u.Xk.label.LABEL_ARTISTS_PAGE),
                            children: [
                                (0, l.jsx)(L.Y9, {
                                    variant: L.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: R.canBack,
                                    className: y().header,
                                    children: (0, l.jsx)(m.Heading, {
                                        variant: "h1",
                                        weight: "bold",
                                        size: "xl",
                                        lineClamp: 1,
                                        children: I,
                                    }),
                                }),
                                (0, l.jsx)(L.$$, {
                                    className: (0, s.$)(
                                        y().scrollContainer,
                                        y().important,
                                    ),
                                    listClassName: y().content,
                                    itemClassName: y().item,
                                    customComponents: X,
                                    itemContentCallback: (e) => {
                                        let t = A.items[e],
                                            a = T(
                                                {
                                                    id: "loading-messages.entity-is-loading",
                                                },
                                                {
                                                    entityName: T({
                                                        id: "entity-names.artist",
                                                    }),
                                                },
                                            );
                                        return t
                                            ? (0, l.jsx)(
                                                  g.ao,
                                                  {
                                                      artist: t,
                                                      contentLinesCount: 4,
                                                  },
                                                  t.id,
                                              )
                                            : (0, l.jsx)(L.Vt, {
                                                  "aria-label": a,
                                                  round: !0,
                                                  centered: !0,
                                                  linesCount: 4,
                                              });
                                    },
                                    totalCount: U,
                                    onGetDataByPage: w,
                                    pageSize: 20,
                                    totalRequests: A.requestsCount,
                                    handleRef: j,
                                    context: { listAriaLabel: B },
                                    isMobileLayout: C,
                                    useWindowScroll: C,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
    },
]);
