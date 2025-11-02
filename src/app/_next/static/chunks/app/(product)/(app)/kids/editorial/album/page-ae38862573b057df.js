(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5940],
    {
        2117: (e, t, a) => {
            "use strict";
            a.d(t, { XU: () => g });
            var i,
                n,
                l = a(7144),
                s = a(66268),
                r = a(73827);
            !(function (e) {
                (e.formatDate = "FormattedDate"),
                    (e.formatTime = "FormattedTime"),
                    (e.formatNumber = "FormattedNumber"),
                    (e.formatList = "FormattedList"),
                    (e.formatDisplayName = "FormattedDisplayName");
            })(i || (i = {})),
                (function (e) {
                    (e.formatDate = "FormattedDateParts"),
                        (e.formatTime = "FormattedTimeParts"),
                        (e.formatNumber = "FormattedNumberParts"),
                        (e.formatList = "FormattedListParts");
                })(n || (n = {}));
            var o = function (e) {
                var t = (0, r.A)(),
                    a = e.value,
                    i = e.children,
                    n = (0, l.__rest)(e, ["value", "children"]);
                return i(t.formatNumberToParts(a, n));
            };
            function d(e) {
                var t = function (t) {
                    var a = (0, r.A)(),
                        i = t.value,
                        n = t.children,
                        s = (0, l.__rest)(t, ["value", "children"]),
                        o = "string" == typeof i ? new Date(i || 0) : i;
                    return n(
                        "formatDate" === e
                            ? a.formatDateToParts(o, s)
                            : a.formatTimeToParts(o, s),
                    );
                };
                return (t.displayName = n[e]), t;
            }
            function u(e) {
                var t = function (t) {
                    var a = (0, r.A)(),
                        i = t.value,
                        n = t.children,
                        o = (0, l.__rest)(t, ["value", "children"]),
                        d = a[e](i, o);
                    if ("function" == typeof n) return n(d);
                    var u = a.textComponent || s.Fragment;
                    return s.createElement(u, null, d);
                };
                return (t.displayName = i[e]), t;
            }
            (o.displayName = "FormattedNumberParts"),
                (o.displayName = "FormattedNumberParts");
            var g = u("formatDate");
            u("formatTime"),
                u("formatNumber"),
                u("formatList"),
                u("formatDisplayName"),
                d("formatDate"),
                d("formatTime");
        },
        5884: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                });
            let i = a(473)._(a(16092));
            function n(e, t) {
                var a;
                let n = {};
                "function" == typeof e && (n.loader = e);
                let l = { ...n, ...t };
                return (0, i.default)({
                    ...l,
                    modules:
                        null == (a = l.loadableGenerated) ? void 0 : a.modules,
                });
            }
            ("function" == typeof t.default ||
                ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }),
                Object.assign(t.default, t),
                (e.exports = t.default));
        },
        11463: (e, t, a) => {
            "use strict";
            a.d(t, { KidsEditorialAlbumsPage: () => x });
            var i = a(33008),
                n = a(85896),
                l = a(97531),
                s = a(17846),
                r = a(66268),
                o = a(73827),
                d = a(18064),
                u = a(42213),
                g = a(42314),
                c = a(77868),
                m = a(83888),
                _ = a(52732),
                h = a(64143),
                p = a(79169),
                N = a(18740),
                y = a(24147),
                f = a.n(y);
            let x = (0, l.PA)((e) => {
                var t, a, l;
                let { id: y } = e,
                    {
                        kids: { kidsEditorialAlbumSubpage: x },
                        settings: { isMobile: P },
                    } = (0, p.Pjs)(),
                    b = (0, p.W6M)(),
                    { contentScrollRef: j, setContentScrollRef: v } = (0,
                    p.gKY)(),
                    { formatMessage: S } = (0, o.A)(),
                    C = (0, u.c)((e) => {
                        x.getAlbums({ page: e, pageSize: 20 });
                    });
                x.isNotFound && (0, s.notFound)(),
                    (0, r.useEffect)(
                        () => () => {
                            x.reset();
                        },
                        [x],
                    );
                let E = (0, g.L)(() => ({
                    Footer: () =>
                        (0, i.jsx)(N.A, {
                            children: (0, i.jsx)(N.wi, {
                                className: f().footer,
                            }),
                        }),
                }));
                if (
                    ((0, p.Jzs)(x.isResolved),
                    x.isNeededToLoad &&
                        (0, r.use)(x.getData({ id: y, page: 0, pageSize: 20 })),
                    x.isSomethingWrong)
                )
                    return (0, i.jsx)(m.w, {});
                let K = x.isLoading
                    ? 20
                    : null !=
                        (a =
                            null == x || null == (t = x.albums)
                                ? void 0
                                : t.length)
                      ? a
                      : 0;
                return (0, i.jsx)(p.nVz, {
                    pageId: p._Q$.KIDS_EDITORIAL_ALBUMS,
                    children: (0, i.jsx)(h.hO, {
                        scrollElement: j,
                        outerTitle: x.title,
                        children: (0, i.jsxs)("div", {
                            className: f().root,
                            ...(0, d.Am)(d.Xk.kids.KIDS_EDITORIAL_ALBUMS),
                            children: [
                                (0, i.jsx)(N.Y9, {
                                    variant: N.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: b.canBack,
                                    children: (0, i.jsx)(c.Heading, {
                                        variant: "h2",
                                        weight: "bold",
                                        size: "xl",
                                        lineClamp: 1,
                                        children: x.title,
                                    }),
                                }),
                                (0, i.jsx)(N.$$, {
                                    context: {
                                        listAriaLabel: S(
                                            { id: "mixes.albums-list" },
                                            { genreName: x.title || "" },
                                        ),
                                    },
                                    className: (0, n.$)(
                                        f().scrollContainer,
                                        f().important,
                                    ),
                                    customComponents: E,
                                    itemContentCallback: (e) => {
                                        var t, a;
                                        let n =
                                                null == x ||
                                                null == (a = x.albums) ||
                                                null == (t = a[e])
                                                    ? void 0
                                                    : t.data,
                                            l = S(
                                                {
                                                    id: "loading-messages.entity-is-loading",
                                                },
                                                {
                                                    entityName: S({
                                                        id: "entity-names.album",
                                                    }),
                                                },
                                            );
                                        return n
                                            ? (0, i.jsx)(
                                                  _.aX,
                                                  {
                                                      withLikesCount: !0,
                                                      album: n,
                                                      contentLinesCount: 3,
                                                  },
                                                  n.id,
                                              )
                                            : (0, i.jsx)(N.Vt, {
                                                  isActive: !0,
                                                  "aria-label": l,
                                              });
                                    },
                                    initialItemCount: K,
                                    totalCount: K,
                                    onGetDataByPage: C,
                                    pageSize: 20,
                                    totalRequests:
                                        null != (l = x.requests) ? l : 0,
                                    listClassName: f().content,
                                    itemClassName: f().item,
                                    handleRef: v,
                                    isMobileLayout: P,
                                    useWindowScroll: P,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        16092: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let i = a(33008),
                n = a(66268),
                l = a(52283);
            function s(e) {
                return { default: e && "default" in e ? e.default : e };
            }
            a(81382);
            let r = {
                    loader: () => Promise.resolve(s(() => null)),
                    loading: null,
                    ssr: !0,
                },
                o = function (e) {
                    let t = { ...r, ...e },
                        a = (0, n.lazy)(() => t.loader().then(s)),
                        o = t.loading;
                    function d(e) {
                        let s = o
                                ? (0, i.jsx)(o, {
                                      isLoading: !0,
                                      pastDelay: !0,
                                      error: null,
                                  })
                                : null,
                            r = !t.ssr || !!t.loading,
                            d = r ? n.Suspense : n.Fragment,
                            u = t.ssr
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [null, (0, i.jsx)(a, { ...e })],
                                  })
                                : (0, i.jsx)(l.BailoutToCSR, {
                                      reason: "next/dynamic",
                                      children: (0, i.jsx)(a, { ...e }),
                                  });
                        return (0, i.jsx)(d, {
                            ...(r ? { fallback: s } : {}),
                            children: u,
                        });
                    }
                    return (d.displayName = "LoadableComponent"), d;
                };
        },
        17353: (e, t, a) => {
            "use strict";
            a.d(t, { KidsCategoryPage: () => b });
            var i = a(33008),
                n = a(85896),
                l = a(97531),
                s = a(17846),
                r = a(66268),
                o = a(18064),
                d = a(57747),
                u = a(77868),
                g = a(12898),
                c = a(83888),
                m = a(64143),
                _ = a(79169),
                h = a(18740),
                p = a(26729),
                N = a.n(p),
                y = a(42314),
                f = a(66342),
                x = a.n(f);
            let P = (0, l.PA)(() => {
                    let { experiments: e } = (0, _.Pjs)(),
                        t = e.checkExperiment(
                            _.zal.WebNextWaveAgentExperiment,
                            "on",
                        ),
                        a = (0, y.L)(() =>
                            t
                                ? (0, i.jsx)(h.OY, {
                                      isShimmerVisible: !0,
                                      isShimmerActive: !0,
                                      isShimmerCentered: !0,
                                  })
                                : (0, i.jsx)(g.Rj, { isActive: !0, length: 4 }),
                        );
                    return (0, i.jsxs)("div", {
                        className: x().root,
                        children: [
                            (0, i.jsx)("div", { children: a }),
                            (0, i.jsx)(h.OY, {
                                isShimmerVisible: !0,
                                isShimmerActive: !0,
                            }),
                            (0, i.jsx)(h.OY, {
                                isShimmerVisible: !0,
                                isShimmerActive: !0,
                            }),
                        ],
                    });
                }),
                b = (0, l.PA)((e) => {
                    let { categoryId: t } = e,
                        { kids: a } = (0, _.Pjs)(),
                        { contentScrollRef: l, setContentScrollRef: p } = (0,
                        _.gKY)(),
                        y = (0, _.W6M)();
                    (0, r.useEffect)(
                        () => () => a.landing.reset(),
                        [a.landing],
                    ),
                        (0, _.Jzs)(a.landing.isResolved),
                        a.landing.isLoadedAndEmpty && (0, s.notFound)();
                    let f = (0, g._9)(a.landing),
                        x = (0, r.useMemo)(
                            () =>
                                a.landing.isLoading || a.landing.isNeededToLoad
                                    ? (0, i.jsx)(P, {})
                                    : (0, i.jsx)(g.EA, {
                                          landing: a.landing,
                                          errorComponent: (0, i.jsx)(c.w, {
                                              className: N().error,
                                              withBackwardControl: !1,
                                          }),
                                      }),
                            [a.landing.loadingState, a.landing],
                        );
                    return (
                        a.landing.isNeededToLoad &&
                            (0, r.use)(
                                a.landing.getChildrenSkeleton({
                                    categoryId: t,
                                }),
                            ),
                        (0, i.jsx)(_.nVz, {
                            pageId: _._Q$.KIDS_CATEGORY,
                            children: (0, i.jsxs)(m.hO, {
                                scrollElement: l,
                                outerTitle: a.landing.title,
                                children: [
                                    (0, i.jsx)(h.Y9, {
                                        variant: h.Vw.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: y.canBack,
                                        children: (0, i.jsx)("div", {
                                            className: N().header,
                                            children: (0, i.jsx)(u.Heading, {
                                                variant: "h1",
                                                weight: "bold",
                                                size: "xl",
                                                children: a.landing.title,
                                            }),
                                        }),
                                    }),
                                    (0, i.jsxs)(d.N, {
                                        className: N().root,
                                        containerClassName: N().content,
                                        ref: p,
                                        ...(0, o.Am)(
                                            o.Xk.kids.KIDS_CATEGORY_PAGE,
                                        ),
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: (0, n.$)(
                                                    N().landing,
                                                    {
                                                        [N()
                                                            .landing_onlyWizard]:
                                                            f,
                                                    },
                                                ),
                                                children: x,
                                            }),
                                            (0, i.jsx)(h.A, {
                                                children: (0, i.jsx)(h.wi, {
                                                    className: N().footer,
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
        17660: (e, t, a) => {
            "use strict";
            a.d(t, {
                jM: () => N.KidsCategoryPage,
                u3: () => y.KidsEditorialAlbumsPage,
                bU: () => f.KidsEditorialPlaylistsPage,
                GY: () => p,
            });
            var i = a(79169),
                n = a(41028),
                l = a(61979),
                s = a(52732),
                r = a(95592),
                o = a(59615);
            let d = n.gK.model("KidsEditorialAlbumItem", {
                    id: n.gK.number,
                    data: n.gK.maybeNull(s.JC),
                }),
                u = n.gK
                    .compose(
                        n.gK.model("KidsEditorialAlbumPage", {
                            errorStatusCode: n.gK.maybe(n.gK.number),
                            title: n.gK.maybeNull(n.gK.string),
                            pager: n.gK.maybeNull(o.jd),
                            albums: n.gK.maybeNull(n.gK.array(d)),
                            alreadyRequestedPages: n.gK.map(n.gK.number),
                            requests: n.gK.maybeNull(n.gK.number),
                        }),
                        o.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return (
                                    e.isNeededToLoad ||
                                    e.loadingState === i.GuX.PENDING
                                );
                            },
                            get isNotFound() {
                                let t =
                                    e.errorStatusCode === l.X1.NOT_FOUND ||
                                    e.errorStatusCode === l.X1.BAD_REQUEST;
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
                            getAlbums: (0, n.L3)(function* (t) {
                                var a, s, o;
                                let { page: d = 0, pageSize: u = 20 } = t,
                                    {
                                        albumResource: g,
                                        modelActionsLogger: c,
                                    } = (0, n._$)(e);
                                if (
                                    (null == (a = e.albums)
                                        ? void 0
                                        : a.length) &&
                                    !e.alreadyRequestedPages.has("".concat(d))
                                ) {
                                    e.alreadyRequestedPages.set(
                                        "".concat(d),
                                        d,
                                    );
                                    try {
                                        let t = d * u,
                                            a = e.albums
                                                .slice(t, t + u)
                                                .map((e) => e.id),
                                            i = yield g.getAlbums({
                                                albumIds: a,
                                            });
                                        e.requests =
                                            (null != (o = e.requests) ? o : 0) +
                                            1;
                                        let l = {
                                                page: d,
                                                perPage: u,
                                                total:
                                                    null == (s = e.albums)
                                                        ? void 0
                                                        : s.length,
                                            },
                                            c = i.map(r.e7),
                                            m = d * u,
                                            _ = 0;
                                        for (let t = m; t < m + u; t++) {
                                            let a = e.albums[t];
                                            c[_] &&
                                                a &&
                                                (a.data = (0, n.wg)(c[_])),
                                                _++;
                                        }
                                        e.pager = l;
                                    } catch (t) {
                                        c.error(t),
                                            t instanceof l.GX &&
                                                (t.statusCode ===
                                                    l.X1.NOT_FOUND ||
                                                    t.statusCode ===
                                                        l.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode =
                                                    l.X1.NOT_FOUND),
                                            e.loadingState !== i.GuX.IDLE &&
                                                (e.loadingState = i.GuX.REJECT);
                                    }
                                }
                            }),
                            getData: (0, n.L3)(function* (a) {
                                let {
                                        id: s,
                                        page: r = 0,
                                        pageSize: o = 20,
                                    } = a,
                                    {
                                        childrenLandingResource: d,
                                        modelActionsLogger: u,
                                    } = (0, n._$)(e);
                                if (e.loadingState !== i.GuX.PENDING)
                                    try {
                                        e.loadingState = i.GuX.PENDING;
                                        let a = yield d.getEditorialAlbum({
                                            id: s,
                                        });
                                        (e.title = a.title),
                                            a.entities &&
                                                a.entities.length > 0 &&
                                                (e.albums = (0, n.wg)(
                                                    a.entities.map((e) =>
                                                        (0, n.wg)({ id: e }),
                                                    ),
                                                )),
                                            e.loadingState !== i.GuX.IDLE &&
                                                (e.loadingState =
                                                    i.GuX.RESOLVE),
                                            yield t.getAlbums({
                                                page: r,
                                                pageSize: o,
                                            });
                                    } catch (t) {
                                        u.error(t),
                                            t instanceof l.GX &&
                                                (t.statusCode ===
                                                    l.X1.NOT_FOUND ||
                                                    t.statusCode ===
                                                        l.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode =
                                                    l.X1.NOT_FOUND),
                                            e.loadingState !== i.GuX.IDLE &&
                                                (e.loadingState = i.GuX.REJECT);
                                    }
                            }),
                            reset() {
                                (e.loadingState = i.GuX.IDLE),
                                    e.alreadyRequestedPages.clear(),
                                    (e.title = null),
                                    (e.albums = null),
                                    (e.requests = null),
                                    (e.pager = null);
                            },
                        };
                        return t;
                    });
            var g = a(45242),
                c = a(25911);
            let m = n.gK.model("KidsEditorialPlaylistItem", {
                    uid: n.gK.number,
                    kind: n.gK.number,
                    data: n.gK.maybeNull(g.IP),
                }),
                _ = n.gK
                    .compose(
                        n.gK.model("KidsEditorialPlaylistPage", {
                            errorStatusCode: n.gK.maybe(n.gK.number),
                            title: n.gK.maybeNull(n.gK.string),
                            pager: n.gK.maybeNull(o.jd),
                            playlists: n.gK.maybeNull(n.gK.array(m)),
                            alreadyRequestedPages: n.gK.map(n.gK.number),
                            requests: n.gK.maybeNull(n.gK.number),
                        }),
                        o.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return (
                                    e.isNeededToLoad ||
                                    e.loadingState === i.GuX.PENDING
                                );
                            },
                            get isNotFound() {
                                let t =
                                    e.errorStatusCode === l.X1.NOT_FOUND ||
                                    e.errorStatusCode === l.X1.BAD_REQUEST;
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
                            getPlaylists: (0, n.L3)(function* (t) {
                                var a, s, r;
                                let { page: o = 0, pageSize: d = 20 } = t,
                                    {
                                        playlistsResource: u,
                                        modelActionsLogger: g,
                                    } = (0, n._$)(e);
                                if (
                                    (null == (a = e.playlists)
                                        ? void 0
                                        : a.length) &&
                                    !e.alreadyRequestedPages.has("".concat(o))
                                ) {
                                    e.alreadyRequestedPages.set(
                                        "".concat(o),
                                        o,
                                    );
                                    try {
                                        let t = o * d,
                                            a = e.playlists.slice(t, t + d),
                                            i = yield u.getPlaylists({
                                                playlistIds: a.map((e) =>
                                                    ""
                                                        .concat(e.uid, ":")
                                                        .concat(e.kind),
                                                ),
                                                resumeStream: !1,
                                            });
                                        e.requests =
                                            (null != (r = e.requests) ? r : 0) +
                                            1;
                                        let l = {
                                                page: o,
                                                perPage: d,
                                                total:
                                                    null == (s = e.playlists)
                                                        ? void 0
                                                        : s.length,
                                            },
                                            g = i.playlists.map(c.jX),
                                            m = o * d,
                                            _ = 0;
                                        for (let t = m; t < m + d; t++) {
                                            let a = e.playlists[t];
                                            g[_] &&
                                                a &&
                                                (a.data = (0, n.wg)(g[_])),
                                                _++;
                                        }
                                        e.pager = l;
                                    } catch (t) {
                                        g.error(t),
                                            t instanceof l.GX &&
                                                (t.statusCode ===
                                                    l.X1.NOT_FOUND ||
                                                    t.statusCode ===
                                                        l.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode =
                                                    l.X1.NOT_FOUND),
                                            e.loadingState !== i.GuX.IDLE &&
                                                (e.loadingState = i.GuX.REJECT);
                                    }
                                }
                            }),
                            getData: (0, n.L3)(function* (a) {
                                let {
                                        id: s,
                                        page: r = 0,
                                        pageSize: o = 20,
                                    } = a,
                                    {
                                        childrenLandingResource: d,
                                        modelActionsLogger: u,
                                    } = (0, n._$)(e);
                                if (e.loadingState !== i.GuX.PENDING)
                                    try {
                                        e.loadingState = i.GuX.PENDING;
                                        let a = yield d.getEditorialPlaylist({
                                            id: s,
                                        });
                                        (e.title = a.title),
                                            a.entities &&
                                                a.entities.length > 0 &&
                                                (e.playlists = (0, n.wg)(
                                                    a.entities.map((e) =>
                                                        (0, n.wg)({
                                                            uid: e.uid,
                                                            kind: e.kind,
                                                        }),
                                                    ),
                                                )),
                                            e.loadingState !== i.GuX.IDLE &&
                                                (e.loadingState =
                                                    i.GuX.RESOLVE),
                                            yield t.getPlaylists({
                                                page: r,
                                                pageSize: o,
                                            });
                                    } catch (t) {
                                        u.error(t),
                                            t instanceof l.GX &&
                                                (t.statusCode ===
                                                    l.X1.NOT_FOUND ||
                                                    t.statusCode ===
                                                        l.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode =
                                                    l.X1.NOT_FOUND),
                                            e.loadingState !== i.GuX.IDLE &&
                                                (e.loadingState = i.GuX.REJECT);
                                    }
                            }),
                            reset() {
                                (e.loadingState = i.GuX.IDLE),
                                    e.alreadyRequestedPages.clear(),
                                    (e.title = null),
                                    (e.playlists = null),
                                    (e.requests = null),
                                    (e.pager = null);
                            },
                        };
                        return t;
                    });
            var h = a(12898);
            let p = n.gK.model("KidsPage", {
                landing: h.Ju,
                kidsEditorialPlaylistSubpage: _,
                kidsEditorialAlbumSubpage: u,
            });
            var N = a(17353),
                y = a(11463),
                f = a(90157);
            a(84031), a(29601);
        },
        24147: (e) => {
            e.exports = {
                root: "KidsEditorialAlbumsPage_root__7rHF8",
                scrollContainer:
                    "KidsEditorialAlbumsPage_scrollContainer__nQVlt",
                important: "KidsEditorialAlbumsPage_important__hmmxn",
                footer: "KidsEditorialAlbumsPage_footer__6rwU1",
                item: "KidsEditorialAlbumsPage_item__Wc243",
                content: "KidsEditorialAlbumsPage_content__u3zcW",
            };
        },
        26271: (e) => {
            e.exports = {
                root: "NotFound_root__47ZX6",
                root_desktop: "NotFound_root_desktop___QqSb",
                navigation: "NotFound_navigation__q8rIW",
                content: "NotFound_content__3kry_",
                icon: "NotFound_icon___Wa9y",
                title: "NotFound_title__akG_o",
                important: "NotFound_important__z1LWl",
                text: "NotFound_text__oxDZv",
                button: "NotFound_button__jF4uH",
            };
        },
        26729: (e) => {
            e.exports = {
                root: "KidsCategoryPage_root__bk7_R",
                content: "KidsCategoryPage_content__LN0NB",
                header: "KidsCategoryPage_header__Agys3",
                landing: "KidsCategoryPage_landing__aSDYw",
                landing_onlyWizard:
                    "KidsCategoryPage_landing_onlyWizard__3EC9N",
                footer: "KidsCategoryPage_footer__BQhqi",
                error: "KidsCategoryPage_error__tSXF7",
            };
        },
        27618: (e, t, a) => {
            "use strict";
            a.d(t, { NotFound: () => h });
            var i = a(33008),
                n = a(85896),
                l = a(97531),
                s = a(96560),
                r = a(44189),
                o = a(78016),
                d = a(77868),
                u = a(79169),
                g = a(18740),
                c = a(66268),
                m = a(26271),
                _ = a.n(m);
            let h = (0, l.PA)((e) => {
                let {
                        className: t,
                        title: a,
                        description: l,
                        iconVariant: m = "musicLogo",
                        iconClassName: h,
                        iconSize: p,
                    } = e,
                    { contentRef: N } = (0, u.gKY)(),
                    y = (0, u.ZpR)(u.Zyd.main.href);
                (0, u.LZB)();
                let { handleNavigateToMain: f } = (0, u.D5F)(y);
                return (
                    (0, u.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, u.Pjs)();
                        (0, c.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, i.jsxs)("div", {
                        className: (0, n.$)(
                            _().root,
                            { [_().root_desktop]: !N },
                            t,
                        ),
                        children: [
                            (0, i.jsx)(g.Lh, {
                                withBackwardFallback: "/",
                                className: _().navigation,
                                withForwardControl: !1,
                            }),
                            (0, i.jsxs)("div", {
                                className: _().content,
                                children: [
                                    (0, i.jsx)(o.Icon, {
                                        className: (0, n.$)(_().icon, h),
                                        variant: m,
                                        size: p,
                                    }),
                                    (0, i.jsx)(d.Heading, {
                                        className: (0, n.$)(
                                            _().title,
                                            _().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            a ||
                                            (0, i.jsx)(s.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, i.jsx)(d.Caption, {
                                        className: (0, n.$)(
                                            _().text,
                                            _().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            l ||
                                            (0, i.jsx)(s.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, i.jsx)(r.Button, {
                                        onClick: f,
                                        className: _().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, i.jsx)(d.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, i.jsx)(s.A, {
                                                id: "navigation.page-main",
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        29601: (e, t, a) => {
            "use strict";
            a.d(t, { KidsPage: () => x });
            var i = a(33008),
                n = a(85896),
                l = a(97531),
                s = a(66268),
                r = a(73827),
                o = a(96560),
                d = a(18064),
                u = a(43836),
                g = a(57747),
                c = a(77868),
                m = a(12898),
                _ = a(83888),
                h = a(64143),
                p = a(79169),
                N = a(18740),
                y = a(91173),
                f = a.n(y);
            let x = (0, l.PA)(() => {
                let { kids: e, user: t } = (0, p.Pjs)(),
                    { formatMessage: a } = (0, r.A)(),
                    { contentScrollRef: l, setContentScrollRef: y } = (0,
                    p.gKY)();
                (0, s.useEffect)(() => () => e.landing.reset(), [e.landing]),
                    (0, p.Jzs)(e.landing.isResolved);
                let x = (0, m._9)(e.landing);
                return (
                    e.landing.isNeededToLoad &&
                        (0, s.use)(
                            e.landing.getSkeleton(
                                {
                                    id: u.p.KIDS,
                                    showWizard: t.settings.showWizard,
                                },
                                { preloadBlocksCount: 2 },
                            ),
                        ),
                    (0, i.jsx)(p.nVz, {
                        pageId: p._Q$.KIDS,
                        children: (0, i.jsxs)(h.hO, {
                            scrollElement: l,
                            outerTitle: a({ id: "kids.for-kids" }),
                            children: [
                                (0, i.jsx)(N.Y9, {
                                    variant: N.Vw.TEXT,
                                    showControls: !1,
                                    children: (0, i.jsx)("div", {
                                        className: f().header,
                                        children: (0, i.jsx)(c.Heading, {
                                            variant: "h1",
                                            weight: "bold",
                                            size: "xl",
                                            children: (0, i.jsx)(o.A, {
                                                id: "kids.for-kids",
                                            }),
                                        }),
                                    }),
                                }),
                                (0, i.jsxs)(g.N, {
                                    className: f().root,
                                    containerClassName: f().content,
                                    ref: y,
                                    ...(0, d.Am)(d.Xk.kids.KIDS_PAGE),
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: (0, n.$)(f().landing, {
                                                [f().landing_onlyWizard]: x,
                                            }),
                                            children: (0, i.jsx)(m.EA, {
                                                landing: e.landing,
                                                errorComponent: (0, i.jsx)(
                                                    _.w,
                                                    {
                                                        className: f().error,
                                                        withBackwardControl: !1,
                                                    },
                                                ),
                                            }),
                                        }),
                                        (0, i.jsx)(N.A, {
                                            children: (0, i.jsx)(N.wi, {
                                                className: f().footer,
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
        30236: (e, t, a) => {
            "use strict";
            a.d(t, { SomethingWentWrong: () => p });
            var i = a(33008),
                n = a(85896),
                l = a(97531),
                s = a(66268),
                r = a(73827),
                o = a(96560),
                d = a(44189),
                u = a(78016),
                g = a(77868),
                c = a(79169),
                m = a(18740),
                _ = a(32468),
                h = a.n(_);
            let p = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: l } = (0, r.A)(),
                    _ = l({ id: "error-messages.something-went-wrong" });
                (0, c.CgZ)(_);
                let { sendRefreshEvent: p } = (0, c.cYT)(),
                    N = (0, s.useCallback)(() => {
                        p(), (window.location.href = c.Zyd.main.href);
                    }, [p]),
                    { contentRef: y } = (0, c.gKY)();
                return (0, i.jsxs)("div", {
                    className: (0, n.$)(h().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(m.Lh, {
                                withBackwardFallback: "/",
                                className: (0, n.$)(h().navigation, {
                                    [h().navigation_desktop]: !y,
                                }),
                                withForwardControl: !1,
                            }),
                        (0, i.jsxs)("div", {
                            className: (0, n.$)(h().content, {
                                [h().content_shrink]: !a,
                            }),
                            children: [
                                (0, i.jsx)(u.Icon, {
                                    className: h().icon,
                                    variant: "attention",
                                    size: "xxl",
                                }),
                                (0, i.jsx)(g.Heading, {
                                    className: (0, n.$)(
                                        h().title,
                                        h().important,
                                    ),
                                    variant: "h3",
                                    size: "xs",
                                    children: _,
                                }),
                                (0, i.jsxs)(g.Caption, {
                                    className: (0, n.$)(
                                        h().text,
                                        h().important,
                                    ),
                                    variant: "span",
                                    type: "text",
                                    size: "l",
                                    weight: "normal",
                                    children: [
                                        !1,
                                        (0, i.jsx)(o.A, {
                                            id: "page-error.try-to-restart-app",
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(d.Button, {
                                    onClick: N,
                                    className: h().button,
                                    role: "link",
                                    color: "secondary",
                                    size: "l",
                                    radius: "xxxl",
                                    children: (0, i.jsxs)(g.Caption, {
                                        type: "controls",
                                        variant: "span",
                                        size: "m",
                                        children: [
                                            !1,
                                            (0, i.jsx)(o.A, {
                                                id: "page-error.restart-app-button",
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        32468: (e) => {
            e.exports = {
                root: "SomethingWentWrong_root__d77VJ",
                content: "SomethingWentWrong_content__8_YkJ",
                content_shrink: "SomethingWentWrong_content_shrink__GOR_7",
                navigation: "SomethingWentWrong_navigation__a8eMG",
                navigation_desktop:
                    "SomethingWentWrong_navigation_desktop__WGGBX",
                icon: "SomethingWentWrong_icon__f15_y",
                title: "SomethingWentWrong_title__Kn89B",
                important: "SomethingWentWrong_important__namIb",
                text: "SomethingWentWrong_text__KEfGc",
                button: "SomethingWentWrong_button__dmh7t",
            };
        },
        35233: (e, t, a) => {
            "use strict";
            a.d(t, { M: () => i.NotFound });
            var i = a(27618);
        },
        52283: (e, t, a) => {
            "use strict";
            function i(e) {
                let { reason: t, children: a } = e;
                return a;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "BailoutToCSR", {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }),
                a(32975);
        },
        66342: (e) => {
            e.exports = { root: "KidsCategoryPageShimmer_root__0V_bC" };
        },
        74375: (e, t, a) => {
            "use strict";
            a.d(t, { default: () => n.a });
            var i = a(5884),
                n = a.n(i);
        },
        76608: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { default: () => s });
            var i = a(33008),
                n = a(17846),
                l = a(17660);
            let s = () => {
                let e = (0, n.useSearchParams)().get("id");
                return e || (0, n.notFound)(), (0, i.jsx)(l.u3, { id: e });
            };
        },
        80233: (e) => {
            e.exports = {
                root: "KidsEditorialPlaylistsPage_root__HeHqc",
                scrollContainer:
                    "KidsEditorialPlaylistsPage_scrollContainer__Hy6HY",
                important: "KidsEditorialPlaylistsPage_important__283cd",
                footer: "KidsEditorialPlaylistsPage_footer___UaP5",
                item: "KidsEditorialPlaylistsPage_item__0wBk2",
                content: "KidsEditorialPlaylistsPage_content__6wWkP",
            };
        },
        81382: (e, t, a) => {
            "use strict";
            function i(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "PreloadChunks", {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }),
                a(33008),
                a(17229),
                a(6077),
                a(74964);
        },
        83888: (e, t, a) => {
            "use strict";
            a.d(t, { w: () => i.SomethingWentWrong });
            var i = a(30236);
        },
        84031: (e, t, a) => {
            "use strict";
            a.d(t, { KidsNotFoundPage: () => o });
            var i = a(33008),
                n = a(97531),
                l = a(66268),
                s = a(35233),
                r = a(79169);
            let o = (0, n.PA)(() => {
                let { kids: e } = (0, r.Pjs)();
                return (
                    (0, l.useEffect)(
                        () => () => {
                            e.landing.reset();
                        },
                        [e.landing],
                    ),
                    (0, i.jsx)(s.M, {})
                );
            });
        },
        90157: (e, t, a) => {
            "use strict";
            a.d(t, { KidsEditorialPlaylistsPage: () => x });
            var i = a(33008),
                n = a(85896),
                l = a(97531),
                s = a(17846),
                r = a(66268),
                o = a(73827),
                d = a(18064),
                u = a(42213),
                g = a(42314),
                c = a(77868),
                m = a(83888),
                _ = a(64143),
                h = a(45242),
                p = a(79169),
                N = a(18740),
                y = a(80233),
                f = a.n(y);
            let x = (0, l.PA)((e) => {
                var t, a, l;
                let { id: y } = e,
                    {
                        kids: { kidsEditorialPlaylistSubpage: x },
                        settings: { isMobile: P },
                    } = (0, p.Pjs)(),
                    b = (0, p.W6M)(),
                    { contentScrollRef: j, setContentScrollRef: v } = (0,
                    p.gKY)(),
                    { formatMessage: S } = (0, o.A)(),
                    C = (0, u.c)((e) => {
                        x.getPlaylists({ page: e, pageSize: 20 });
                    });
                x.isNotFound && (0, s.notFound)(),
                    (0, r.useEffect)(
                        () => () => {
                            x.reset();
                        },
                        [x],
                    );
                let E = (0, g.L)(() => ({
                    Footer: () =>
                        (0, i.jsx)(N.A, {
                            children: (0, i.jsx)(N.wi, {
                                className: f().footer,
                            }),
                        }),
                }));
                if (
                    ((0, p.Jzs)(x.isResolved),
                    x.isNeededToLoad &&
                        (0, r.use)(x.getData({ id: y, page: 0, pageSize: 20 })),
                    x.isSomethingWrong)
                )
                    return (0, i.jsx)(m.w, {});
                let K = x.isLoading
                    ? 20
                    : null !=
                        (a =
                            null == x || null == (t = x.playlists)
                                ? void 0
                                : t.length)
                      ? a
                      : 0;
                return (0, i.jsx)(p.nVz, {
                    pageId: p._Q$.KIDS_EDITORIAL_PLAYLISTS,
                    children: (0, i.jsx)(_.hO, {
                        scrollElement: j,
                        outerTitle: x.title,
                        children: (0, i.jsxs)("div", {
                            className: f().root,
                            ...(0, d.Am)(d.Xk.kids.KIDS_EDITORIAL_PLAYLISTS),
                            children: [
                                (0, i.jsx)(N.Y9, {
                                    variant: N.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: b.canBack,
                                    children: (0, i.jsx)(c.Heading, {
                                        variant: "h2",
                                        weight: "bold",
                                        size: "xl",
                                        lineClamp: 1,
                                        children: x.title,
                                    }),
                                }),
                                (0, i.jsx)(N.$$, {
                                    context: {
                                        listAriaLabel: S(
                                            { id: "mixes.playlists-list" },
                                            { genreName: x.title || "" },
                                        ),
                                    },
                                    className: (0, n.$)(
                                        f().scrollContainer,
                                        f().important,
                                    ),
                                    customComponents: E,
                                    itemContentCallback: (e) => {
                                        var t, a;
                                        let n =
                                                null == x ||
                                                null == (a = x.playlists) ||
                                                null == (t = a[e])
                                                    ? void 0
                                                    : t.data,
                                            l = S(
                                                {
                                                    id: "loading-messages.entity-is-loading",
                                                },
                                                {
                                                    entityName: S({
                                                        id: "entity-names.playlist",
                                                    }),
                                                },
                                            );
                                        return n
                                            ? (0, i.jsx)(
                                                  h.B6,
                                                  {
                                                      playlist: n,
                                                      contentLinesCount: 3,
                                                  },
                                                  n.key,
                                              )
                                            : (0, i.jsx)(N.Vt, {
                                                  isActive: !0,
                                                  "aria-label": l,
                                              });
                                    },
                                    initialItemCount: K,
                                    totalCount: K,
                                    onGetDataByPage: C,
                                    pageSize: 20,
                                    totalRequests:
                                        null != (l = x.requests) ? l : 0,
                                    listClassName: f().content,
                                    itemClassName: f().item,
                                    handleRef: v,
                                    isMobileLayout: P,
                                    useWindowScroll: P,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        91173: (e) => {
            e.exports = {
                root: "KidsPage_root__yycsJ",
                content: "KidsPage_content__08pPR",
                header: "KidsPage_header__2Gk2l",
                landing: "KidsPage_landing__3QZZj",
                landing_onlyWizard: "KidsPage_landing_onlyWizard__xKyDo",
                footer: "KidsPage_footer__p7SVD",
                error: "KidsPage_error__qa7Qo",
            };
        },
        98984: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 76608));
        },
    },
    (e) => {
        e.O(
            0,
            [
                7098, 8282, 9712, 5271, 7309, 8712, 8004, 9284, 7509, 1709,
                4397, 952, 9775, 1311, 7764, 6706, 2089, 2140, 996, 4236, 6728,
                3949, 9169, 8740, 9615, 3588, 2732, 1744, 4204, 7747, 4078,
                9718, 4760, 8747, 5765, 2898, 9902, 5598, 7358,
            ],
            () => e((e.s = 98984)),
        ),
            (_N_E = e.O());
    },
]);
