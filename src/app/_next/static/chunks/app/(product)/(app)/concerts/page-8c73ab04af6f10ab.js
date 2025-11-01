(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9940],
    {
        2117: (e, t, n) => {
            "use strict";
            n.d(t, { XU: () => u });
            var o,
                r,
                a = n(7144),
                s = n(66268),
                i = n(73827);
            !(function (e) {
                (e.formatDate = "FormattedDate"),
                    (e.formatTime = "FormattedTime"),
                    (e.formatNumber = "FormattedNumber"),
                    (e.formatList = "FormattedList"),
                    (e.formatDisplayName = "FormattedDisplayName");
            })(o || (o = {})),
                (function (e) {
                    (e.formatDate = "FormattedDateParts"),
                        (e.formatTime = "FormattedTimeParts"),
                        (e.formatNumber = "FormattedNumberParts"),
                        (e.formatList = "FormattedListParts");
                })(r || (r = {}));
            var l = function (e) {
                var t = (0, i.A)(),
                    n = e.value,
                    o = e.children,
                    r = (0, a.__rest)(e, ["value", "children"]);
                return o(t.formatNumberToParts(n, r));
            };
            function c(e) {
                var t = function (t) {
                    var n = (0, i.A)(),
                        o = t.value,
                        r = t.children,
                        s = (0, a.__rest)(t, ["value", "children"]),
                        l = "string" == typeof o ? new Date(o || 0) : o;
                    return r(
                        "formatDate" === e
                            ? n.formatDateToParts(l, s)
                            : n.formatTimeToParts(l, s),
                    );
                };
                return (t.displayName = r[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var n = (0, i.A)(),
                        o = t.value,
                        r = t.children,
                        l = (0, a.__rest)(t, ["value", "children"]),
                        c = n[e](o, l);
                    if ("function" == typeof r) return r(c);
                    var d = n.textComponent || s.Fragment;
                    return s.createElement(d, null, c);
                };
                return (t.displayName = o[e]), t;
            }
            (l.displayName = "FormattedNumberParts"),
                (l.displayName = "FormattedNumberParts");
            var u = d("formatDate");
            d("formatTime"),
                d("formatNumber"),
                d("formatList"),
                d("formatDisplayName"),
                c("formatDate"),
                c("formatTime");
        },
        5884: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                });
            let o = n(473)._(n(16092));
            function r(e, t) {
                var n;
                let r = {};
                "function" == typeof e && (r.loader = e);
                let a = { ...r, ...t };
                return (0, o.default)({
                    ...a,
                    modules:
                        null == (n = a.loadableGenerated) ? void 0 : n.modules,
                });
            }
            ("function" == typeof t.default ||
                ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }),
                Object.assign(t.default, t),
                (e.exports = t.default));
        },
        8038: (e) => {
            e.exports = {
                root: "FeedConcerts_root__W7OGN",
                header: "FeedConcerts_header__Ht1xd",
                container: "FeedConcerts_container__CONvW",
                column: "FeedConcerts_column__FpMgx",
                row: "FeedConcerts_row__HEdtn",
            };
        },
        16092: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let o = n(33008),
                r = n(66268),
                a = n(52283);
            function s(e) {
                return { default: e && "default" in e ? e.default : e };
            }
            n(81382);
            let i = {
                    loader: () => Promise.resolve(s(() => null)),
                    loading: null,
                    ssr: !0,
                },
                l = function (e) {
                    let t = { ...i, ...e },
                        n = (0, r.lazy)(() => t.loader().then(s)),
                        l = t.loading;
                    function c(e) {
                        let s = l
                                ? (0, o.jsx)(l, {
                                      isLoading: !0,
                                      pastDelay: !0,
                                      error: null,
                                  })
                                : null,
                            i = !t.ssr || !!t.loading,
                            c = i ? r.Suspense : r.Fragment,
                            d = t.ssr
                                ? (0, o.jsxs)(o.Fragment, {
                                      children: [null, (0, o.jsx)(n, { ...e })],
                                  })
                                : (0, o.jsx)(a.BailoutToCSR, {
                                      reason: "next/dynamic",
                                      children: (0, o.jsx)(n, { ...e }),
                                  });
                        return (0, o.jsx)(c, {
                            ...(i ? { fallback: s } : {}),
                            children: d,
                        });
                    }
                    return (c.displayName = "LoadableComponent"), c;
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
        27618: (e, t, n) => {
            "use strict";
            n.d(t, { NotFound: () => _ });
            var o = n(33008),
                r = n(85896),
                a = n(97531),
                s = n(96560),
                i = n(44189),
                l = n(78016),
                c = n(77868),
                d = n(79169),
                u = n(18740),
                m = n(66268),
                f = n(26271),
                g = n.n(f);
            let _ = (0, a.PA)((e) => {
                let {
                        className: t,
                        title: n,
                        description: a,
                        iconVariant: f = "musicLogo",
                        iconClassName: _,
                        iconSize: h,
                    } = e,
                    { contentRef: p } = (0, d.gKY)(),
                    x = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: b } = (0, d.D5F)(x);
                return (
                    (0, d.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, d.Pjs)();
                        (0, m.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, o.jsxs)("div", {
                        className: (0, r.$)(
                            g().root,
                            { [g().root_desktop]: !p },
                            t,
                        ),
                        children: [
                            (0, o.jsx)(u.Lh, {
                                withBackwardFallback: "/",
                                className: g().navigation,
                                withForwardControl: !1,
                            }),
                            (0, o.jsxs)("div", {
                                className: g().content,
                                children: [
                                    (0, o.jsx)(l.Icon, {
                                        className: (0, r.$)(g().icon, _),
                                        variant: f,
                                        size: h,
                                    }),
                                    (0, o.jsx)(c.Heading, {
                                        className: (0, r.$)(
                                            g().title,
                                            g().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            n ||
                                            (0, o.jsx)(s.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, o.jsx)(c.Caption, {
                                        className: (0, r.$)(
                                            g().text,
                                            g().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            a ||
                                            (0, o.jsx)(s.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, o.jsx)(i.Button, {
                                        onClick: b,
                                        className: g().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, o.jsx)(c.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, o.jsx)(s.A, {
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
        30236: (e, t, n) => {
            "use strict";
            n.d(t, { SomethingWentWrong: () => h });
            var o = n(33008),
                r = n(85896),
                a = n(97531),
                s = n(66268),
                i = n(73827),
                l = n(96560),
                c = n(44189),
                d = n(78016),
                u = n(77868),
                m = n(79169),
                f = n(18740),
                g = n(32468),
                _ = n.n(g);
            let h = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: a } = (0, i.A)(),
                    g = a({ id: "error-messages.something-went-wrong" });
                (0, m.CgZ)(g);
                let { sendRefreshEvent: h } = (0, m.cYT)(),
                    p = (0, s.useCallback)(() => {
                        h(), (window.location.href = m.Zyd.main.href);
                    }, [h]),
                    { contentRef: x } = (0, m.gKY)();
                return (0, o.jsxs)("div", {
                    className: (0, r.$)(_().root, t),
                    children: [
                        n &&
                            (0, o.jsx)(f.Lh, {
                                withBackwardFallback: "/",
                                className: (0, r.$)(_().navigation, {
                                    [_().navigation_desktop]: !x,
                                }),
                                withForwardControl: !1,
                            }),
                        (0, o.jsxs)("div", {
                            className: (0, r.$)(_().content, {
                                [_().content_shrink]: !n,
                            }),
                            children: [
                                (0, o.jsx)(d.Icon, {
                                    className: _().icon,
                                    variant: "attention",
                                    size: "xxl",
                                }),
                                (0, o.jsx)(u.Heading, {
                                    className: (0, r.$)(
                                        _().title,
                                        _().important,
                                    ),
                                    variant: "h3",
                                    size: "xs",
                                    children: g,
                                }),
                                (0, o.jsxs)(u.Caption, {
                                    className: (0, r.$)(
                                        _().text,
                                        _().important,
                                    ),
                                    variant: "span",
                                    type: "text",
                                    size: "l",
                                    weight: "normal",
                                    children: [
                                        !1,
                                        (0, o.jsx)(l.A, {
                                            id: "page-error.try-to-restart-app",
                                        }),
                                    ],
                                }),
                                (0, o.jsx)(c.Button, {
                                    onClick: p,
                                    className: _().button,
                                    role: "link",
                                    color: "secondary",
                                    size: "l",
                                    radius: "xxxl",
                                    children: (0, o.jsxs)(u.Caption, {
                                        type: "controls",
                                        variant: "span",
                                        size: "m",
                                        children: [
                                            !1,
                                            (0, o.jsx)(l.A, {
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
        35233: (e, t, n) => {
            "use strict";
            n.d(t, { M: () => o.NotFound });
            var o = n(27618);
        },
        44958: (e, t, n) => {
            "use strict";
            n.d(t, { km: () => _, h4: () => M, cw: () => d, k_: () => V });
            var o = n(79169),
                r = n(41028),
                a = n(12898),
                s = n(51551),
                i = n(59615);
            let l = (e, t, n) => (-1 === n ? e.slice(t) : e.slice(t, t + n)),
                c = r.gK
                    .compose(
                        r.gK.model("ConcertsPageConfig", {
                            topOffset: r.gK.optional(r.gK.number, 0),
                            topLimit: r.gK.optional(r.gK.number, 3),
                            feedOffset: r.gK.optional(r.gK.number, 3),
                            feedLimit: r.gK.optional(r.gK.number, -1),
                        }),
                        i.XT,
                    )
                    .actions((e) => ({
                        getData: (0, r.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: n } =
                                (0, r._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = o.GuX.PENDING;
                                    let {
                                        config: { feed: n, top: r },
                                    } = yield t.getTabConfig({});
                                    (e.feedLimit = n.limit),
                                        (e.feedOffset = n.offset),
                                        (e.topLimit = r.limit),
                                        (e.topOffset = r.offset),
                                        (e.loadingState = o.GuX.RESOLVE);
                                } catch (t) {
                                    n.error(t), (e.loadingState = o.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = o.GuX.IDLE),
                                (e.feedLimit = -1),
                                (e.feedOffset = 3),
                                (e.topLimit = 3),
                                (e.topOffset = 0);
                        },
                    })),
                d = r.gK
                    .compose(
                        r.gK.model("ConcertsPage", {
                            config: c,
                            landing: a.Ju,
                            topConcerts: r.gK.maybeNull(r.gK.array(s.aR)),
                            feedConcerts: r.gK.maybeNull(r.gK.array(s.aR)),
                        }),
                        i.XT,
                        i.pl,
                    )
                    .views((e) => ({
                        get isShimmerVisible() {
                            return (
                                e.isNeededToLoad || e.isLoading || e.isRejected
                            );
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, r.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: n } =
                                (0, r._$)(e);
                            if (!e.config.isLoading && !e.isLoading)
                                try {
                                    (e.loadingState = o.GuX.PENDING),
                                        yield e.config.getData();
                                    let { items: n } = yield t.getFeed({}),
                                        { feedConcerts: a, topConcerts: i } = ((
                                            e,
                                            t,
                                        ) => {
                                            let {
                                                topLimit: n,
                                                topOffset: o,
                                                feedLimit: r,
                                                feedOffset: a,
                                            } = e;
                                            return {
                                                topConcerts: l(t, o, n),
                                                feedConcerts: l(t, a, r),
                                            };
                                        })(
                                            e.config,
                                            n.map((e) =>
                                                (0, s.ho)(
                                                    e.data.concert,
                                                    e.data.minPrice,
                                                ),
                                            ),
                                        );
                                    (e.feedConcerts = (0, r.wg)(a)),
                                        (e.topConcerts = (0, r.wg)(i)),
                                        (e.loadingState = o.GuX.RESOLVE);
                                } catch (t) {
                                    n.error(t), (e.loadingState = o.GuX.REJECT);
                                }
                        }),
                        reset() {
                            e.config.reset(),
                                e.landing.reset(),
                                (e.loadingState = o.GuX.IDLE),
                                e.destroyItems([e.topConcerts, e.feedConcerts]);
                        },
                    }));
            var u = n(33008),
                m = n(97531),
                f = n(66268),
                g = n(35233);
            let _ = (0, m.PA)(() => {
                let { concerts: e } = (0, o.Pjs)();
                return (
                    (0, f.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    (0, u.jsx)(g.M, {})
                );
            });
            var h = n(17846),
                p = n(73827),
                x = n(96560),
                b = n(54960),
                j = n(93967),
                v = n(43836),
                C = n(57747),
                N = n(77868),
                y = n(42213),
                P = n(44612),
                k = n(95227),
                F = n(18740),
                S = n(8038),
                T = n.n(S);
            let w = (0, m.PA)(() => {
                let e = (0, f.useId)(),
                    { concerts: t } = (0, o.Pjs)(),
                    { formatMessage: n } = (0, p.A)(),
                    [r, a] = (0, P.d)(),
                    i = (0, o.fBs)(),
                    l = (0, f.useRef)(!1),
                    c = (0, y.c)(() => {
                        var e;
                        return !t.isShimmerVisible &&
                            (null == (e = t.feedConcerts) ? void 0 : e.length)
                            ? t.feedConcerts.length
                            : 50;
                    }),
                    {
                        virtualizer: d,
                        rowResizeObserver: m,
                        columnCount: g,
                        indices: _,
                    } = (0, k.LW)({
                        count: c(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: r,
                    }),
                    h = {
                        "--feed-concerts-height": "".concat(
                            d.getTotalSize(),
                            "px",
                        ),
                        "--feed-concerts-column-count": g,
                    },
                    x = (0, f.useCallback)(
                        (e) => {
                            var n, r, a;
                            let i =
                                null == (n = t.feedConcerts) ? void 0 : n[e];
                            return !i || t.isShimmerVisible
                                ? (0, u.jsx)(s.LY, {
                                      isActive: t.isShimmerActive,
                                  })
                                : (0, u.jsx)(o.Bki, {
                                      objectType: j.ky.Concert,
                                      objectId: i.id,
                                      objectPosX: (e % g) + 1,
                                      objectPosY: Math.floor(e / g) + 1,
                                      objectsCount:
                                          null !=
                                          (a =
                                              null == (r = t.feedConcerts)
                                                  ? void 0
                                                  : r.length)
                                              ? a
                                              : 0,
                                      children: (0, u.jsx)(s.Qb, {
                                          concert: i,
                                      }),
                                  });
                        },
                        [
                            g,
                            t.feedConcerts,
                            t.isShimmerActive,
                            t.isShimmerVisible,
                        ],
                    );
                return (
                    (0, f.useEffect)(() => {
                        t.isResolved && !l.current && (i(), (l.current = !0));
                    }, [t.isResolved, i]),
                    (0, u.jsxs)("div", {
                        className: T().root,
                        children: [
                            (0, u.jsx)(F.Tw, {
                                className: T().header,
                                labeledForId: e,
                                title: n({ id: "concerts.all-concerts" }),
                                headingVariant: "h2",
                            }),
                            (0, u.jsx)("div", {
                                "aria-labelledby": e,
                                ref: a,
                                style: h,
                                className: T().container,
                                children: d
                                    .getVirtualItems()
                                    .map((e) =>
                                        (0, u.jsx)(
                                            k.Ux,
                                            {
                                                className: T().row,
                                                columnClassName: T().column,
                                                virtualItem: e,
                                                resizeObserver: m,
                                                indices: _,
                                                renderItemByIndex: x,
                                                scrollMargin:
                                                    d.options.scrollMargin,
                                            },
                                            e.key,
                                        ),
                                    ),
                            }),
                        ],
                    })
                );
            });
            var L = n(85896),
                W = n(95567),
                A = n(59646),
                E = n.n(A);
            let R = (e) => {
                    let { children: t } = e,
                        n = (0, f.useId)(),
                        o = (0, f.useRef)(null),
                        { formatMessage: r } = (0, p.A)();
                    return (0, u.jsxs)("div", {
                        className: E().root,
                        children: [
                            (0, u.jsx)(F.Tw, {
                                className: E().header,
                                labeledForId: n,
                                title: r({ id: "concerts.top-for-you" }),
                                controls: (0, u.jsx)(F.X9, {
                                    className: E().controls,
                                    carouselRef: o,
                                }),
                                headingVariant: "h2",
                            }),
                            (0, u.jsx)(W.Carousel, {
                                className: E().carousel,
                                ref: o,
                                itemClassName: (0, L.$)(
                                    E().item,
                                    E().important,
                                ),
                                "aria-labelledby": n,
                                children: t,
                            }),
                        ],
                    });
                },
                O = (e) =>
                    Array.from({ length: 10 }, (t, n) =>
                        (0, u.jsx)(
                            s.LY,
                            { isActive: e, withPriceButton: !0 },
                            n,
                        ),
                    ),
                I = (0, m.PA)(() => {
                    let { concerts: e } = (0, o.Pjs)(),
                        t = (0, o.fBs)(),
                        n = (0, f.useRef)(!1),
                        r = (0, f.useMemo)(() => {
                            var t;
                            return (null == (t = e.topConcerts)
                                ? void 0
                                : t.length) && !e.isShimmerVisible
                                ? e.topConcerts.map((t, n) => {
                                      var r, a;
                                      return (0, u.jsx)(
                                          o.Bki,
                                          {
                                              objectType: j.ky.Concert,
                                              objectId: t.id,
                                              objectPosX: n + 1,
                                              objectPosY: 1,
                                              objectsCount:
                                                  null !=
                                                  (a =
                                                      null ==
                                                      (r = e.topConcerts)
                                                          ? void 0
                                                          : r.length)
                                                      ? a
                                                      : 0,
                                              children: (0, u.jsx)(s.Qb, {
                                                  withMask: !1,
                                                  withPriceButton: !0,
                                                  concert: t,
                                              }),
                                          },
                                          t.getKey(n),
                                      );
                                  })
                                : O(e.isShimmerActive);
                        }, [
                            e.isShimmerActive,
                            e.isShimmerVisible,
                            e.topConcerts,
                        ]);
                    return (
                        (0, f.useEffect)(() => {
                            e.isResolved &&
                                !n.current &&
                                (t(), (n.current = !0));
                        }, [e.isResolved, t]),
                        e.isNeededToLoad && (0, f.use)(e.getData()),
                        (0, u.jsx)(R, { children: r })
                    );
                }),
                D = () =>
                    (0, u.jsx)(f.Suspense, {
                        fallback: (0, u.jsx)(R, { children: O(!0) }),
                        children: (0, u.jsx)(I, {}),
                    });
            var z = n(83888),
                B = n(64143),
                K = n(48551),
                G = n(94503),
                X = n.n(G);
            let M = (0, m.PA)(() => {
                    var e, t, n, r, s, i, l, c, d;
                    let { formatMessage: m } = (0, p.A)(),
                        { setContentScrollRef: g, contentScrollRef: _ } = (0,
                        o.gKY)(),
                        { concerts: P, experiments: k, user: S } = (0, o.Pjs)(),
                        T = (() => {
                            let e = (0, K.st)(),
                                t = (0, o.UlF)(),
                                { hash: n } = (0, K.gf)();
                            return (0, y.c)((o, r) => {
                                if (!e) return;
                                let a = {
                                        hash: n,
                                        pageId: j.QT.ConcertsLandingScreen,
                                        pageStyle: j.QL.Fullscreen,
                                        pagePlacement: j.c4.Fullscreen,
                                        viewUuid: r,
                                    },
                                    s = (0, j.Fx)({
                                        params: a,
                                        logger: t,
                                        context:
                                            "useSendEventOnConcertsOpenedOrClosed",
                                    });
                                s &&
                                    (o
                                        ? (0, j.Fn)(e.evgenInstance, s)
                                        : (0, j.PO)(e.evgenInstance, s));
                            });
                        })(),
                        L = (0, f.useRef)(String((0, b.A)())),
                        W =
                            null !=
                            (i =
                                null == (e = P.landing.meta)
                                    ? void 0
                                    : e.selectedTabIndex)
                                ? i
                                : 0,
                        A =
                            null !=
                            (l =
                                null == (n = P.landing.tabs.data) ||
                                null == (t = n[W])
                                    ? void 0
                                    : t.blocks.length)
                                ? l
                                : 0;
                    return (k.checkExperiment(o.zal.WebNextConcertsTab, "on") ||
                        (0, h.notFound)(),
                    S.hasPlus || (0, h.redirect)(o.Zyd.main.href),
                    (0, f.useEffect)(
                        () => () => {
                            P.reset();
                        },
                        [P],
                    ),
                    (0, f.useEffect)(() => {
                        let e = L.current;
                        return (
                            T(!0, e),
                            () => {
                                T(!1, e);
                            }
                        );
                    }, [T]),
                    (0, o.Jzs)(P.landing.isResolved),
                    (() => {
                        let e = (0, f.useRef)(1),
                            { concerts: t } = (0, o.Pjs)(),
                            { notify: n } = (0, o.lkh)(),
                            { formatMessage: r } = (0, p.A)();
                        (0, f.useEffect)(() => {
                            e &&
                                (t.isRejected &&
                                    n(
                                        (0, u.jsx)(F.hT, {
                                            error: r({
                                                id: "concerts.feed-error",
                                            }),
                                        }),
                                        { containerId: o.uQT.ERROR },
                                    ),
                                e.current--);
                        }, [t.isRejected, r, n]);
                    })(),
                    P.landing.isNeededToLoad &&
                        (0, f.use)(
                            P.landing.getSkeleton(
                                {
                                    id: v.p.CONCERTS,
                                    showWizard: S.settings.showWizard,
                                },
                                { preloadBlocksCount: 2 },
                            ),
                        ),
                    P.landing.isRejected)
                        ? (0, u.jsx)(z.w, {})
                        : (0, u.jsx)(o.nVz, {
                              pageId: o._Q$.CONCERTS,
                              children: (0, u.jsxs)(B.hO, {
                                  scrollElement: _,
                                  outerTitle: m({
                                      id: "entity-names.concerts",
                                  }),
                                  children: [
                                      (0, u.jsx)(F.Y9, {
                                          variant: F.Vw.TEXT,
                                          showControls: !1,
                                          children: (0, u.jsx)(N.Heading, {
                                              variant: "h1",
                                              weight: "bold",
                                              size: "xl",
                                              children: (0, u.jsx)(x.A, {
                                                  id: "entity-names.concerts",
                                              }),
                                          }),
                                      }),
                                      (0, u.jsxs)(C.N, {
                                          ref: g,
                                          className: X().root,
                                          containerClassName: X().container,
                                          children: [
                                              (0, u.jsx)(o.jPc, {
                                                  children: (0, u.jsx)(o.hjC, {
                                                      tabId: "",
                                                      tabPos: 0,
                                                      isTabSelectedByDefault:
                                                          !1,
                                                      children: (0, u.jsx)(
                                                          o.FoH,
                                                          {
                                                              blockId:
                                                                  j.LA
                                                                      .ConcertTabHeader,
                                                              blockType:
                                                                  j.LA
                                                                      .ConcertTabHeader,
                                                              blockPosX: 1,
                                                              blockPosY: 1,
                                                              objectsCount:
                                                                  null !=
                                                                  (c =
                                                                      null ==
                                                                      (r =
                                                                          P.topConcerts)
                                                                          ? void 0
                                                                          : r.length)
                                                                      ? c
                                                                      : 0,
                                                              children: (0,
                                                              u.jsx)(D, {}),
                                                          },
                                                      ),
                                                  }),
                                              }),
                                              (0, u.jsx)(o.MZP, {
                                                  offsetBlockPosY: 1,
                                                  children: (0, u.jsx)(a.EA, {
                                                      landing: P.landing,
                                                      errorComponent: (0,
                                                      u.jsx)(z.w, {
                                                          withBackwardControl:
                                                              !1,
                                                      }),
                                                  }),
                                              }),
                                              (0, u.jsx)(o.jPc, {
                                                  children: (0, u.jsx)(o.hjC, {
                                                      tabId: "",
                                                      tabPos: 0,
                                                      isTabSelectedByDefault:
                                                          !1,
                                                      children: (0, u.jsx)(
                                                          o.FoH,
                                                          {
                                                              blockId:
                                                                  j.LA
                                                                      .ConcertTabFeed,
                                                              blockType:
                                                                  j.LA
                                                                      .ConcertTabFeed,
                                                              blockPosX: 1,
                                                              blockPosY: A + 2,
                                                              objectsCount:
                                                                  null !=
                                                                  (d =
                                                                      null ==
                                                                      (s =
                                                                          P.feedConcerts)
                                                                          ? void 0
                                                                          : s.length)
                                                                      ? d
                                                                      : 0,
                                                              children: (0,
                                                              u.jsx)(w, {}),
                                                          },
                                                      ),
                                                  }),
                                              }),
                                              (0, u.jsx)(F.A, {
                                                  children: (0, u.jsx)(F.wi, {
                                                      className: X().footer,
                                                  }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          });
                }),
                V = () =>
                    (0, u.jsx)(F.JR, {
                        style: {
                            position: "absolute",
                            background:
                                "var(--ym-background-color-primary-enabled-content)",
                        },
                    });
        },
        52283: (e, t, n) => {
            "use strict";
            function o(e) {
                let { reason: t, children: n } = e;
                return n;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "BailoutToCSR", {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }),
                n(32975);
        },
        59646: (e) => {
            e.exports = {
                root: "TopConcertsCarousel_root__opMbb",
                controls: "TopConcertsCarousel_controls__c92PW",
                header: "TopConcertsCarousel_header__3h3Zn",
                carousel: "TopConcertsCarousel_carousel__uMke6",
                item: "TopConcertsCarousel_item__fz8lR",
                important: "TopConcertsCarousel_important__ZcT6Z",
            };
        },
        60628: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(33008),
                r = n(66268),
                a = n(44958);
            let s = () =>
                (0, o.jsx)(r.Suspense, {
                    fallback: (0, o.jsx)(a.k_, {}),
                    children: (0, o.jsx)(a.h4, {}),
                });
        },
        74375: (e, t, n) => {
            "use strict";
            n.d(t, { default: () => r.a });
            var o = n(5884),
                r = n.n(o);
        },
        81382: (e, t, n) => {
            "use strict";
            function o(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "PreloadChunks", {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }),
                n(33008),
                n(17229),
                n(6077),
                n(74964);
        },
        83888: (e, t, n) => {
            "use strict";
            n.d(t, { w: () => o.SomethingWentWrong });
            var o = n(30236);
        },
        94503: (e) => {
            e.exports = {
                root: "ConcertsPage_root__olabl",
                container: "ConcertsPage_container__qS7xA",
                footer: "ConcertsPage_footer__GYRwF",
            };
        },
        95700: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 60628));
        },
    },
    (e) => {
        e.O(
            0,
            [
                7098, 8282, 9712, 5271, 7309, 8712, 8004, 9284, 7509, 1709,
                4397, 9775, 8065, 952, 1311, 7764, 6706, 2089, 2140, 996, 4236,
                6728, 3949, 9169, 8740, 9615, 3588, 2732, 1744, 4204, 7747,
                4078, 9718, 4760, 8747, 5765, 2898, 9902, 5598, 7358,
            ],
            () => e((e.s = 95700)),
        ),
            (_N_E = e.O());
    },
]);
