(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3069],
    {
        4115: (t) => {
            t.exports = {
                root: "PostAlbums_root__u2a1q",
                content: "PostAlbums_content__uMSez",
            };
        },
        15187: (t, e, o) => {
            Promise.resolve().then(o.bind(o, 38513));
        },
        23724: (t) => {
            t.exports = {
                root: "PostShimmer_root__MlLkY",
                top: "PostShimmer_top__ySpmZ",
                bottom: "PostShimmer_bottom__ajW_P",
            };
        },
        26271: (t) => {
            t.exports = {
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
        27618: (t, e, o) => {
            "use strict";
            o.d(e, { NotFound: () => p });
            var s = o(33008),
                a = o(85896),
                n = o(97531),
                r = o(96560),
                i = o(44189),
                l = o(78016),
                d = o(77868),
                c = o(79169),
                m = o(18740),
                _ = o(66268),
                u = o(26271),
                g = o.n(u);
            let p = (0, n.PA)((t) => {
                let {
                        className: e,
                        title: o,
                        description: n,
                        iconVariant: u = "musicLogo",
                        iconClassName: p,
                        iconSize: h,
                    } = t,
                    { contentRef: x } = (0, c.gKY)(),
                    N = (0, c.ZpR)(c.Zyd.main.href);
                (0, c.LZB)();
                let { handleNavigateToMain: j } = (0, c.D5F)(N);
                return (
                    (0, c.NBO)(!0),
                    !(function () {
                        let { location: t } = (0, c.Pjs)();
                        (0, _.useEffect)(
                            () => (
                                t.setNotFound(!0),
                                () => {
                                    t.setNotFound(!1);
                                }
                            ),
                            [t],
                        );
                    })(),
                    (0, s.jsxs)("div", {
                        className: (0, a.$)(
                            g().root,
                            { [g().root_desktop]: !x },
                            e,
                        ),
                        children: [
                            (0, s.jsx)(m.Lh, {
                                withBackwardFallback: "/",
                                className: g().navigation,
                                withForwardControl: !1,
                            }),
                            (0, s.jsxs)("div", {
                                className: g().content,
                                children: [
                                    (0, s.jsx)(l.Icon, {
                                        className: (0, a.$)(g().icon, p),
                                        variant: u,
                                        size: h,
                                    }),
                                    (0, s.jsx)(d.Heading, {
                                        className: (0, a.$)(
                                            g().title,
                                            g().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            o ||
                                            (0, s.jsx)(r.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, s.jsx)(d.Caption, {
                                        className: (0, a.$)(
                                            g().text,
                                            g().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            n ||
                                            (0, s.jsx)(r.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, s.jsx)(i.Button, {
                                        onClick: j,
                                        className: g().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, s.jsx)(d.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, s.jsx)(r.A, {
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
        30236: (t, e, o) => {
            "use strict";
            o.d(e, { SomethingWentWrong: () => h });
            var s = o(33008),
                a = o(85896),
                n = o(97531),
                r = o(66268),
                i = o(73827),
                l = o(96560),
                d = o(44189),
                c = o(78016),
                m = o(77868),
                _ = o(79169),
                u = o(18740),
                g = o(32468),
                p = o.n(g);
            let h = (0, n.PA)((t) => {
                let { className: e, withBackwardControl: o = !0 } = t,
                    { formatMessage: n } = (0, i.A)(),
                    g = n({ id: "error-messages.something-went-wrong" });
                (0, _.CgZ)(g);
                let { sendRefreshEvent: h } = (0, _.cYT)(),
                    x = (0, r.useCallback)(() => {
                        h(), (window.location.href = _.Zyd.main.href);
                    }, [h]),
                    { contentRef: N } = (0, _.gKY)();
                return (0, s.jsxs)("div", {
                    className: (0, a.$)(p().root, e),
                    children: [
                        o &&
                            (0, s.jsx)(u.Lh, {
                                withBackwardFallback: "/",
                                className: (0, a.$)(p().navigation, {
                                    [p().navigation_desktop]: !N,
                                }),
                                withForwardControl: !1,
                            }),
                        (0, s.jsxs)("div", {
                            className: (0, a.$)(p().content, {
                                [p().content_shrink]: !o,
                            }),
                            children: [
                                (0, s.jsx)(c.Icon, {
                                    className: p().icon,
                                    variant: "attention",
                                    size: "xxl",
                                }),
                                (0, s.jsx)(m.Heading, {
                                    className: (0, a.$)(
                                        p().title,
                                        p().important,
                                    ),
                                    variant: "h3",
                                    size: "xs",
                                    children: g,
                                }),
                                (0, s.jsxs)(m.Caption, {
                                    className: (0, a.$)(
                                        p().text,
                                        p().important,
                                    ),
                                    variant: "span",
                                    type: "text",
                                    size: "l",
                                    weight: "normal",
                                    children: [
                                        !1,
                                        (0, s.jsx)(l.A, {
                                            id: "page-error.try-to-restart-app",
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(d.Button, {
                                    onClick: x,
                                    className: p().button,
                                    role: "link",
                                    color: "secondary",
                                    size: "l",
                                    radius: "xxxl",
                                    children: (0, s.jsxs)(m.Caption, {
                                        type: "controls",
                                        variant: "span",
                                        size: "m",
                                        children: [
                                            !1,
                                            (0, s.jsx)(l.A, {
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
        32468: (t) => {
            t.exports = {
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
        35233: (t, e, o) => {
            "use strict";
            o.d(e, { M: () => s.NotFound });
            var s = o(27618);
        },
        36800: (t, e, o) => {
            "use strict";
            o.d(e, { EX: () => u.PostPage, VQ: () => _ });
            var s = o(41028),
                a = o(61979),
                n = o(60411),
                r = o(52732),
                i = o(45242),
                l = o(70879),
                d = o(25911),
                c = o(79169),
                m = o(59615);
            let _ = s.gK
                .compose(
                    s.gK.model("PostPage", {
                        errorStatusCode: s.gK.maybe(s.gK.number),
                        title: s.gK.maybeNull(s.gK.string),
                        promotionType: s.gK.maybeNull(
                            s.gK.enumeration(Object.values(n.Q)),
                        ),
                        artists: s.gK.maybe(s.gK.array(l.PK)),
                        albums: s.gK.maybe(s.gK.array(r.JC)),
                        playlists: s.gK.maybe(s.gK.array(i.IP)),
                    }),
                    m.XT,
                )
                .views((t) => {
                    let e = {
                        get isLoading() {
                            return (
                                t.isNeededToLoad ||
                                t.loadingState === c.GuX.PENDING
                            );
                        },
                        get isNotFound() {
                            let e =
                                t.errorStatusCode === a.X1.NOT_FOUND ||
                                t.errorStatusCode === a.X1.BAD_REQUEST;
                            return t.isRejected && e;
                        },
                        get isSomethingWrong() {
                            return t.isRejected && !e.isNotFound;
                        },
                    };
                    return e;
                })
                .actions((t) => ({
                    getData: (0, s.L3)(function* (e) {
                        let { promoId: o } = e,
                            { feedResource: n, modelActionsLogger: i } = (0,
                            s._$)(t);
                        if (t.loadingState !== c.GuX.PENDING)
                            try {
                                t.loadingState = c.GuX.PENDING;
                                let e = yield n.getPromotionsById({
                                    promoId: o,
                                });
                                (t.title = e.title),
                                    (t.promotionType = e.promotionType),
                                    e.artists &&
                                        e.artists.length > 0 &&
                                        (t.artists = (0, s.wg)(
                                            e.artists.map(l.dM),
                                        )),
                                    e.albums &&
                                        e.albums.length > 0 &&
                                        (t.albums = (0, s.wg)(
                                            e.albums.map(r.pp),
                                        )),
                                    e.playlists &&
                                        e.playlists.length > 0 &&
                                        (t.playlists = (0, s.wg)(
                                            e.playlists.map((t) => {
                                                let { playlist: e } = t;
                                                return (0, d.jX)(e);
                                            }),
                                        )),
                                    t.loadingState !== c.GuX.IDLE &&
                                        (t.loadingState = c.GuX.RESOLVE);
                            } catch (e) {
                                i.error(e),
                                    e instanceof a.GX &&
                                        (e.statusCode === a.X1.NOT_FOUND ||
                                            e.statusCode ===
                                                a.X1.BAD_REQUEST) &&
                                        (t.errorStatusCode = a.X1.NOT_FOUND),
                                    t.loadingState !== c.GuX.IDLE &&
                                        (t.loadingState = c.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (t.loadingState = c.GuX.IDLE),
                            (t.title = null),
                            (t.artists = (0, s.wg)([])),
                            (t.albums = (0, s.wg)([]));
                    },
                }));
            o(75926);
            var u = o(69686);
        },
        38513: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, { default: () => i });
            var s = o(33008),
                a = o(17846),
                n = o(66268),
                r = o(36800);
            let i = () => {
                let t = (0, a.useSearchParams)().get("promoId");
                return (
                    t || (0, a.notFound)(),
                    (0, s.jsx)(n.Suspense, {
                        children: (0, s.jsx)(r.EX, { promoId: t }),
                    })
                );
            };
        },
        40013: (t) => {
            t.exports = {
                root: "PostPlaylists_root__3tea0",
                content: "PostPlaylists_content__2fXI5",
            };
        },
        46052: (t) => {
            t.exports = {
                root: "PostPage_root__Orhf7",
                scrollableContainer: "PostPage_scrollableContainer__iV9Bo",
                scrollContainer: "PostPage_scrollContainer__zrIrH",
                important: "PostPage_important__qUlED",
                container: "PostPage_container__orSfz",
                shimmerTitle: "PostPage_shimmerTitle__EeFCD",
            };
        },
        60411: (t, e, o) => {
            "use strict";
            var s;
            o.d(e, { Q: () => s }),
                (function (t) {
                    (t.ALBUMS = "albums"),
                        (t.ARTISTS = "artists"),
                        (t.PLAYLISTS = "playlists");
                })(s || (s = {}));
        },
        66513: (t) => {
            t.exports = {
                root: "PostArtists_root__Zxmjq",
                content: "PostArtists_content__JzGOH",
            };
        },
        69686: (t, e, o) => {
            "use strict";
            o.d(e, { PostPage: () => L });
            var s = o(33008),
                a = o(85896),
                n = o(97531),
                r = o(17846),
                i = o(66268),
                l = o(60411),
                d = o(57747),
                c = o(91342),
                m = o(77868),
                _ = o(83888),
                u = o(64143),
                g = o(79169),
                p = o(18740),
                h = o(23724),
                x = o.n(h);
            let N = () =>
                (0, s.jsxs)("div", {
                    className: x().root,
                    children: [
                        (0, s.jsx)(c.Shimmer, {
                            radius: "l",
                            className: x().top,
                        }),
                        (0, s.jsx)(c.Shimmer, {
                            radius: "l",
                            className: x().bottom,
                        }),
                    ],
                });
            var j = o(46052),
                b = o.n(j),
                v = o(52732),
                P = o(4115),
                S = o.n(P);
            let y = (0, n.PA)((t) => {
                let { albums: e = [] } = t;
                return (0, s.jsx)("div", {
                    className: S().root,
                    children: (0, s.jsx)("div", {
                        className: S().content,
                        "aria-labelledby": "post-page-header",
                        tabIndex: 0,
                        children: e.map((t) =>
                            (0, s.jsx)(
                                v.aX,
                                {
                                    className: S().item,
                                    album: t,
                                    contentLinesCount: 3,
                                },
                                t.id,
                            ),
                        ),
                    }),
                });
            });
            var C = o(90317),
                W = o(66513),
                w = o.n(W);
            let F = (0, n.PA)((t) => {
                let { artists: e = [] } = t;
                return (0, s.jsx)("div", {
                    className: w().root,
                    children: (0, s.jsx)("div", {
                        className: w().content,
                        "aria-labelledby": "post-page-header",
                        tabIndex: 0,
                        children: e.map((t) =>
                            (0, s.jsx)(
                                C.ao,
                                {
                                    className: w().item,
                                    artist: t,
                                    contentLinesCount: 3,
                                },
                                t.id,
                            ),
                        ),
                    }),
                });
            });
            var k = o(45242),
                T = o(40013),
                E = o.n(T);
            let A = (0, n.PA)((t) => {
                    let { playlists: e = [] } = t;
                    return (0, s.jsx)("div", {
                        className: E().root,
                        children: (0, s.jsx)("div", {
                            className: E().content,
                            "aria-labelledby": "post-page-header",
                            tabIndex: 0,
                            children: e.map((t) =>
                                (0, s.jsx)(
                                    k.B6,
                                    {
                                        className: E().item,
                                        playlist: t,
                                        contentLinesCount: 3,
                                    },
                                    t.id,
                                ),
                            ),
                        }),
                    });
                }),
                L = (0, n.PA)((t) => {
                    let { promoId: e } = t,
                        { post: o } = (0, g.Pjs)(),
                        n = (0, g.W6M)(),
                        { contentScrollRef: h, setContentScrollRef: x } = (0,
                        g.gKY)();
                    (0, i.useEffect)(
                        () => () => {
                            o.reset();
                        },
                        [o],
                    ),
                        o.isNotFound && (0, r.notFound)(),
                        (0, g.Jzs)(o.isResolved);
                    let j = (0, i.useMemo)(() => {
                        if (o.isLoading) return (0, s.jsx)(N, {});
                        switch (o.promotionType) {
                            case l.Q.ARTISTS:
                                return (0, s.jsx)(F, { artists: o.artists });
                            case l.Q.ALBUMS:
                                return (0, s.jsx)(y, { albums: o.albums });
                            case l.Q.PLAYLISTS:
                                return (0, s.jsx)(A, {
                                    playlists: o.playlists,
                                });
                            default:
                                (0, r.notFound)();
                        }
                    }, [
                        o.albums,
                        o.artists,
                        o.isLoading,
                        o.playlists,
                        o.promotionType,
                    ]);
                    return (e &&
                        o.isNeededToLoad &&
                        (0, i.use)(o.getData({ promoId: e })),
                    o.isSomethingWrong)
                        ? (0, s.jsx)(_.w, {})
                        : (0, s.jsx)(g.nVz, {
                              pageId: g._Q$.POST,
                              children: (0, s.jsx)(u.hO, {
                                  scrollElement: h,
                                  outerTitle: o.title || void 0,
                                  children: (0, s.jsxs)("div", {
                                      className: b().root,
                                      children: [
                                          (0, s.jsx)(p.Y9, {
                                              variant: p.Vw.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: n.canBack,
                                              children: o.title
                                                  ? (0, s.jsx)(m.Heading, {
                                                        id: "post-header",
                                                        variant: "h2",
                                                        weight: "bold",
                                                        size: "xl",
                                                        lineClamp: 1,
                                                        children: o.title,
                                                    })
                                                  : (0, s.jsx)(c.Shimmer, {
                                                        className:
                                                            b().shimmerTitle,
                                                        radius: "l",
                                                    }),
                                          }),
                                          (0, s.jsx)(d.N, {
                                              containerClassName: (0, a.$)(
                                                  b().scrollContainer,
                                                  b().important,
                                              ),
                                              className:
                                                  b().scrollableContainer,
                                              ref: x,
                                              children: (0, s.jsx)("div", {
                                                  className: b().container,
                                                  children: j,
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                          });
                });
        },
        75926: (t, e, o) => {
            "use strict";
            o.d(e, { PostNotFoundPage: () => r });
            var s = o(33008),
                a = o(97531),
                n = o(35233);
            let r = (0, a.PA)(() => (0, s.jsx)(n.M, {}));
        },
        83888: (t, e, o) => {
            "use strict";
            o.d(e, { w: () => s.SomethingWentWrong });
            var s = o(30236);
        },
    },
    (t) => {
        t.O(
            0,
            [
                7098, 8282, 9712, 5271, 7309, 9775, 952, 6451, 1709, 1311, 7764,
                6706, 996, 4236, 9169, 8740, 9615, 3588, 2732, 1744, 4204, 7747,
                5242, 9902, 5598, 7358,
            ],
            () => t((t.s = 15187)),
        ),
            (_N_E = t.O());
    },
]);
