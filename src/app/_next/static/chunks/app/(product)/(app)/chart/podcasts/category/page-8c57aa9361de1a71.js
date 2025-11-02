(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2056],
    {
        2117: (t, e, a) => {
            "use strict";
            a.d(e, { XU: () => d });
            var r,
                o,
                n = a(7144),
                s = a(66268),
                i = a(73827);
            !(function (t) {
                (t.formatDate = "FormattedDate"),
                    (t.formatTime = "FormattedTime"),
                    (t.formatNumber = "FormattedNumber"),
                    (t.formatList = "FormattedList"),
                    (t.formatDisplayName = "FormattedDisplayName");
            })(r || (r = {})),
                (function (t) {
                    (t.formatDate = "FormattedDateParts"),
                        (t.formatTime = "FormattedTimeParts"),
                        (t.formatNumber = "FormattedNumberParts"),
                        (t.formatList = "FormattedListParts");
                })(o || (o = {}));
            var l = function (t) {
                var e = (0, i.A)(),
                    a = t.value,
                    r = t.children,
                    o = (0, n.__rest)(t, ["value", "children"]);
                return r(e.formatNumberToParts(a, o));
            };
            function c(t) {
                var e = function (e) {
                    var a = (0, i.A)(),
                        r = e.value,
                        o = e.children,
                        s = (0, n.__rest)(e, ["value", "children"]),
                        l = "string" == typeof r ? new Date(r || 0) : r;
                    return o(
                        "formatDate" === t
                            ? a.formatDateToParts(l, s)
                            : a.formatTimeToParts(l, s),
                    );
                };
                return (e.displayName = o[t]), e;
            }
            function u(t) {
                var e = function (e) {
                    var a = (0, i.A)(),
                        r = e.value,
                        o = e.children,
                        l = (0, n.__rest)(e, ["value", "children"]),
                        c = a[t](r, l);
                    if ("function" == typeof o) return o(c);
                    var u = a.textComponent || s.Fragment;
                    return s.createElement(u, null, c);
                };
                return (e.displayName = r[t]), e;
            }
            (l.displayName = "FormattedNumberParts"),
                (l.displayName = "FormattedNumberParts");
            var d = u("formatDate");
            u("formatTime"),
                u("formatNumber"),
                u("formatList"),
                u("formatDisplayName"),
                c("formatDate"),
                c("formatTime");
        },
        25752: (t, e, a) => {
            Promise.resolve().then(a.bind(a, 68732));
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
        27618: (t, e, a) => {
            "use strict";
            a.d(e, { NotFound: () => _ });
            var r = a(33008),
                o = a(85896),
                n = a(97531),
                s = a(96560),
                i = a(44189),
                l = a(78016),
                c = a(77868),
                u = a(79169),
                d = a(18740),
                m = a(66268),
                g = a(26271),
                h = a.n(g);
            let _ = (0, n.PA)((t) => {
                let {
                        className: e,
                        title: a,
                        description: n,
                        iconVariant: g = "musicLogo",
                        iconClassName: _,
                        iconSize: f,
                    } = t,
                    { contentRef: p } = (0, u.gKY)(),
                    v = (0, u.ZpR)(u.Zyd.main.href);
                (0, u.LZB)();
                let { handleNavigateToMain: x } = (0, u.D5F)(v);
                return (
                    (0, u.NBO)(!0),
                    !(function () {
                        let { location: t } = (0, u.Pjs)();
                        (0, m.useEffect)(
                            () => (
                                t.setNotFound(!0),
                                () => {
                                    t.setNotFound(!1);
                                }
                            ),
                            [t],
                        );
                    })(),
                    (0, r.jsxs)("div", {
                        className: (0, o.$)(
                            h().root,
                            { [h().root_desktop]: !p },
                            e,
                        ),
                        children: [
                            (0, r.jsx)(d.Lh, {
                                withBackwardFallback: "/",
                                className: h().navigation,
                                withForwardControl: !1,
                            }),
                            (0, r.jsxs)("div", {
                                className: h().content,
                                children: [
                                    (0, r.jsx)(l.Icon, {
                                        className: (0, o.$)(h().icon, _),
                                        variant: g,
                                        size: f,
                                    }),
                                    (0, r.jsx)(c.Heading, {
                                        className: (0, o.$)(
                                            h().title,
                                            h().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            a ||
                                            (0, r.jsx)(s.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, r.jsx)(c.Caption, {
                                        className: (0, o.$)(
                                            h().text,
                                            h().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            n ||
                                            (0, r.jsx)(s.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, r.jsx)(i.Button, {
                                        onClick: x,
                                        className: h().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, r.jsx)(c.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, r.jsx)(s.A, {
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
        30236: (t, e, a) => {
            "use strict";
            a.d(e, { SomethingWentWrong: () => f });
            var r = a(33008),
                o = a(85896),
                n = a(97531),
                s = a(66268),
                i = a(73827),
                l = a(96560),
                c = a(44189),
                u = a(78016),
                d = a(77868),
                m = a(79169),
                g = a(18740),
                h = a(32468),
                _ = a.n(h);
            let f = (0, n.PA)((t) => {
                let { className: e, withBackwardControl: a = !0 } = t,
                    { formatMessage: n } = (0, i.A)(),
                    h = n({ id: "error-messages.something-went-wrong" });
                (0, m.CgZ)(h);
                let { sendRefreshEvent: f } = (0, m.cYT)(),
                    p = (0, s.useCallback)(() => {
                        f(), (window.location.href = m.Zyd.main.href);
                    }, [f]),
                    { contentRef: v } = (0, m.gKY)();
                return (0, r.jsxs)("div", {
                    className: (0, o.$)(_().root, e),
                    children: [
                        a &&
                            (0, r.jsx)(g.Lh, {
                                withBackwardFallback: "/",
                                className: (0, o.$)(_().navigation, {
                                    [_().navigation_desktop]: !v,
                                }),
                                withForwardControl: !1,
                            }),
                        (0, r.jsxs)("div", {
                            className: (0, o.$)(_().content, {
                                [_().content_shrink]: !a,
                            }),
                            children: [
                                (0, r.jsx)(u.Icon, {
                                    className: _().icon,
                                    variant: "attention",
                                    size: "xxl",
                                }),
                                (0, r.jsx)(d.Heading, {
                                    className: (0, o.$)(
                                        _().title,
                                        _().important,
                                    ),
                                    variant: "h3",
                                    size: "xs",
                                    children: h,
                                }),
                                (0, r.jsxs)(d.Caption, {
                                    className: (0, o.$)(
                                        _().text,
                                        _().important,
                                    ),
                                    variant: "span",
                                    type: "text",
                                    size: "l",
                                    weight: "normal",
                                    children: [
                                        !1,
                                        (0, r.jsx)(l.A, {
                                            id: "page-error.try-to-restart-app",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.Button, {
                                    onClick: p,
                                    className: _().button,
                                    role: "link",
                                    color: "secondary",
                                    size: "l",
                                    radius: "xxxl",
                                    children: (0, r.jsxs)(d.Caption, {
                                        type: "controls",
                                        variant: "span",
                                        size: "m",
                                        children: [
                                            !1,
                                            (0, r.jsx)(l.A, {
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
        35233: (t, e, a) => {
            "use strict";
            a.d(e, { M: () => r.NotFound });
            var r = a(27618);
        },
        40258: (t, e, a) => {
            "use strict";
            a.d(e, { L: () => u });
            var r,
                o = a(93225),
                n = a(66268),
                s = {
                    6699: (t, e, a) => {
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.useDebouncedToggle = void 0);
                        let r = a(352),
                            o = a(810);
                        e.useDebouncedToggle = (t) => {
                            let {
                                    delay: e,
                                    initialState: a,
                                    throttleTimeout: n,
                                } = t,
                                s = (0, o.useRef)(null),
                                [i, l] = (0, o.useState)(!!a),
                                c = (0, o.useMemo)(
                                    () =>
                                        (0, r.throttle)(() => {
                                            l(!a),
                                                s.current &&
                                                    window.clearTimeout(
                                                        s.current,
                                                    ),
                                                (s.current = window.setTimeout(
                                                    () => {
                                                        l(!!a);
                                                    },
                                                    e,
                                                ));
                                        }, n),
                                    [e, a, n],
                                ),
                                u = (0, o.useCallback)(() => {
                                    l(!!a),
                                        s.current &&
                                            window.clearTimeout(s.current);
                                }, [a]);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        s.current &&
                                            window.clearTimeout(s.current);
                                    },
                                    [],
                                ),
                                { state: i, handleDebouncedToggle: c, reset: u }
                            );
                        };
                    },
                    361: (t, e) => {
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.getElementFromRefOrElement = void 0),
                            (e.getElementFromRefOrElement = (t) => {
                                if (void 0 !== t) {
                                    if (null === t || t instanceof HTMLElement)
                                        return t;
                                    if (
                                        null === t.current ||
                                        t.current instanceof HTMLElement
                                    )
                                        return t.current;
                                }
                            });
                    },
                    352: (t) => {
                        t.exports = o;
                    },
                    810: (t) => {
                        t.exports = r || (r = a.t(n, 2));
                    },
                },
                i = {};
            function l(t) {
                var e = i[t];
                if (void 0 !== e) return e.exports;
                var a = (i[t] = { exports: {} });
                return s[t](a, a.exports, l), a.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, "__esModule", { value: !0 }),
                    (c.useScroll = void 0);
                let t = l(810),
                    e = l(361),
                    a = l(6699);
                c.useScroll = (r) => {
                    let {
                            onScroll: o,
                            listenIsScrolling: n,
                            elementRef: s,
                        } = r,
                        { state: i, handleDebouncedToggle: l } = (0,
                        a.useDebouncedToggle)({
                            delay: 1e3,
                            throttleTimeout: 100,
                        }),
                        c = (0, t.useCallback)(() => {
                            n && l(), null == o || o();
                        }, [n, l, o]);
                    return (
                        (0, t.useEffect)(() => {
                            let t = (0, e.getElementFromRefOrElement)(s);
                            if (null === t) return;
                            let a = null != t ? t : window,
                                r = { capture: !0, passive: !0 };
                            return (
                                a.addEventListener("scroll", c, r),
                                () => a.removeEventListener("scroll", c, r)
                            );
                        }, [s, c]),
                        i
                    );
                };
            })(),
                c.__esModule;
            var u = c.useScroll;
        },
        45648: (t, e, a) => {
            "use strict";
            a.d(e, { vB: () => m, t6: () => g.ChartPodcastsPage });
            var r = a(79169),
                o = a(41028),
                n = a(61979),
                s = a(52732),
                i = a(59615);
            let l = o.gK
                .compose(
                    o.gK.model("ChartPodcastsPage", {
                        title: o.gK.maybeNull(o.gK.string),
                        items: o.gK.array(s.JC),
                        errorStatusCode: o.gK.maybeNull(o.gK.number),
                    }),
                    i.pl,
                    i.XT,
                )
                .views((t) => {
                    let e = {
                        get isLoading() {
                            return (
                                t.isNeededToLoad ||
                                t.loadingState === r.GuX.PENDING
                            );
                        },
                        get isNotFound() {
                            var a;
                            let e =
                                    t.isResolved &&
                                    !(null == (a = t.items)
                                        ? void 0
                                        : a.length),
                                o =
                                    t.errorStatusCode === n.X1.NOT_FOUND ||
                                    t.errorStatusCode === n.X1.BAD_REQUEST;
                            return (t.loadingState === r.GuX.REJECT && o) || e;
                        },
                        get isSomethingWrong() {
                            return t.isRejected && !e.isNotFound;
                        },
                    };
                    return e;
                })
                .actions((t) => ({
                    getData: (0, o.L3)(function* (e) {
                        let { chartResource: a, modelActionsLogger: i } = (0,
                        o._$)(t);
                        if (t.loadingState !== r.GuX.PENDING)
                            try {
                                let n;
                                (t.loadingState = r.GuX.PENDING),
                                    (t.title = (n = e
                                        ? yield a.getChartPodcastsCategory({
                                              categoryId: e,
                                          })
                                        : yield a.getChartPodcasts()).title),
                                    n.chartPositions &&
                                        (t.items = (0, o.wg)(
                                            n.chartPositions.map((t) =>
                                                (0, s.bl)(
                                                    t.album,
                                                    t.chartPosition,
                                                ),
                                            ),
                                        )),
                                    t.loadingState !== r.GuX.IDLE &&
                                        (t.loadingState = r.GuX.RESOLVE);
                            } catch (e) {
                                i.error(e),
                                    e instanceof n.GX &&
                                        (e.statusCode === n.X1.NOT_FOUND ||
                                            e.statusCode ===
                                                n.X1.BAD_REQUEST) &&
                                        (t.errorStatusCode = n.X1.NOT_FOUND),
                                    t.loadingState !== r.GuX.IDLE &&
                                        (t.loadingState = r.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (t.loadingState = r.GuX.IDLE),
                            (t.title = null),
                            (t.errorStatusCode = null),
                            t.destroyItems([t.items]);
                    },
                }));
            var c = a(44078);
            let u = o.gK.model("ChartPagePlaylistModel", {
                    uuid: o.gK.string,
                    uid: o.gK.number,
                    kind: o.gK.number,
                }),
                d = o.gK
                    .compose(
                        o.gK.model("ChartTracksPage", {
                            title: o.gK.maybeNull(o.gK.string),
                            playlistMeta: o.gK.maybeNull(u),
                            items: o.gK.array(c.vj),
                        }),
                        i.XT,
                    )
                    .views((t) => ({
                        get isLoading() {
                            return (
                                t.isNeededToLoad ||
                                t.loadingState === r.GuX.PENDING
                            );
                        },
                    }))
                    .actions((t) => ({
                        getTracks: (0, o.L3)(function* () {
                            let { landing3Resource: e, modelActionsLogger: a } =
                                (0, o._$)(t);
                            if (t.loadingState !== r.GuX.PENDING)
                                try {
                                    t.loadingState = r.GuX.PENDING;
                                    let a = yield e.getChart();
                                    (t.title = a.chart.title),
                                        (t.playlistMeta = (0, o.wg)({
                                            uuid: a.chart.playlistUuid,
                                            uid: a.chart.uid,
                                            kind: a.chart.kind,
                                        })),
                                        (t.items = (0, o.wg)(
                                            a.chart.tracks.map((t) =>
                                                (0, c.bV)(t.track, t.chart),
                                            ),
                                        )),
                                        t.loadingState !== r.GuX.IDLE &&
                                            (t.loadingState = r.GuX.RESOLVE);
                                } catch (e) {
                                    a.error(e),
                                        t.loadingState !== r.GuX.IDLE &&
                                            (t.loadingState = r.GuX.REJECT);
                                }
                        }),
                    })),
                m = o.gK.model("ChartPageModel", {
                    tracksSubPage: d,
                    podcastsSubPage: l,
                });
            a(60180);
            var g = a(63e3);
            a(67956);
        },
        50270: (t) => {
            t.exports = {
                root: "ChartTracksPage_root__QMbqY",
                scrollContainer: "ChartTracksPage_scrollContainer__Pxe8S",
                important: "ChartTracksPage_important__Lddyf",
                content: "ChartTracksPage_content__yyIAN",
                footer: "ChartTracksPage_footer__6sNBk",
                shimmerItem: "ChartTracksPage_shimmerItem__YwM0h",
            };
        },
        60180: (t, e, a) => {
            "use strict";
            a.d(e, { ChartPodcastsNotFoundPage: () => l });
            var r = a(33008),
                o = a(97531),
                n = a(66268),
                s = a(35233),
                i = a(79169);
            let l = (0, o.PA)(() => {
                let {
                    chart: { podcastsSubPage: t },
                } = (0, i.Pjs)();
                return (
                    (0, n.useEffect)(() => {
                        t.reset();
                    }, []),
                    (0, r.jsx)(s.M, {})
                );
            });
        },
        63e3: (t, e, a) => {
            "use strict";
            a.d(e, { ChartPodcastsPage: () => x });
            var r = a(33008),
                o = a(85896),
                n = a(97531),
                s = a(17846),
                i = a(66268),
                l = a(73827),
                c = a(18064),
                u = a(91342),
                d = a(77868),
                m = a(83888),
                g = a(52732),
                h = a(64143),
                _ = a(79169),
                f = a(18740),
                p = a(98154),
                v = a.n(p);
            let x = (0, n.PA)((t) => {
                let { categoryId: e } = t,
                    {
                        chart: { podcastsSubPage: a },
                        settings: { isMobile: n },
                    } = (0, _.Pjs)(),
                    { contentScrollRef: p, setContentScrollRef: x } = (0,
                    _.gKY)(),
                    { formatMessage: N } = (0, l.A)(),
                    C = (0, _.W6M)(),
                    P = (0, i.useMemo)(
                        () => ({
                            Footer: () =>
                                (0, r.jsx)(f.A, {
                                    children: (0, r.jsx)(f.wi, {
                                        className: v().footer,
                                    }),
                                }),
                        }),
                        [],
                    ),
                    S = (0, i.useMemo)(
                        () =>
                            a.title
                                ? (0, r.jsx)(d.Heading, {
                                      id: "collection-artists-header",
                                      variant: "h1",
                                      weight: "bold",
                                      size: "xl",
                                      lineClamp: 1,
                                      children: a.title,
                                  })
                                : (0, r.jsx)(u.Shimmer, {
                                      className: v().shimmerTitle,
                                      radius: "l",
                                  }),
                        [a.title],
                    );
                if (
                    ((0, _.Jzs)(a.isResolved),
                    a.isNotFound && (0, s.notFound)(),
                    (0, i.useEffect)(
                        () => () => {
                            a.reset();
                        },
                        [a],
                    ),
                    a.isNeededToLoad && (0, i.use)(a.getData(e)),
                    a.isSomethingWrong)
                )
                    return (0, r.jsx)(m.w, {});
                let T = a.isLoading ? 20 : a.items.length;
                return (0, r.jsx)(_.nVz, {
                    pageId: e
                        ? _._Q$.CHART_PODCASTS_CATEGORY
                        : _._Q$.CHART_PODCASTS,
                    children: (0, r.jsx)(h.hO, {
                        scrollElement: p,
                        outerTitle: a.title,
                        children: (0, r.jsxs)("div", {
                            className: v().root,
                            ...(0, c.Am)(c.Xk.chart.CHART_PODCASTS),
                            children: [
                                (0, r.jsx)(f.Y9, {
                                    variant: f.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: C.canBack,
                                    children: S,
                                }),
                                (0, r.jsx)(f.$$, {
                                    className: (0, o.$)(
                                        v().scrollContainer,
                                        v().important,
                                    ),
                                    listClassName: v().content,
                                    customComponents: P,
                                    itemContentCallback: (t) => {
                                        let e = a.items[t],
                                            o = N(
                                                {
                                                    id: "loading-messages.entity-is-loading",
                                                },
                                                {
                                                    entityName: N({
                                                        id: "entity-names.album",
                                                    }),
                                                },
                                            );
                                        return !e || a.isLoading
                                            ? (0, r.jsx)(f.Vt, {
                                                  "aria-label": o,
                                              })
                                            : (0, r.jsx)(g.aX, {
                                                  album: e,
                                                  contentLinesCount: 3,
                                                  withLikesCount: !0,
                                                  withChart: !0,
                                                  withAddition: !1,
                                              });
                                    },
                                    handleRef: x,
                                    initialItemCount: T,
                                    totalCount: T,
                                    isMobileLayout: n,
                                    useWindowScroll: n,
                                    context: {
                                        listAriaLabel: N({
                                            id: "entity-names.chart-podcasts-list",
                                        }),
                                    },
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        64143: (t, e, a) => {
            "use strict";
            a.d(e, { hO: () => m, jr: () => g, jp: () => h, QZ: () => o }),
                a(57323);
            var r = a(66268);
            let o = (t, e, a) => {
                let o = null != a && a;
                return {
                    topColorStyle: (0, r.useMemo)(() => {
                        if (void 0 === e) return;
                        let a = o ? 93 : 17,
                            r = e - a;
                        return {
                            "--average-color-background": t,
                            transform: "translateY(".concat(
                                e >= a ? 0 : r,
                                "px)",
                            ),
                            opacity: 1,
                        };
                    }, [e, o, t]),
                    headerStyle: (0, r.useMemo)(
                        () => ({ "--average-color-background": t }),
                        [t],
                    ),
                };
            };
            var n = a(33008),
                s = a(13201),
                i = a(97531),
                l = a(40258),
                c = a(79169),
                u = a(18740);
            let d = (t) => {
                    let { element: e, scrollTop: a, isMobile: r } = t,
                        o = 0.6 * e.clientHeight;
                    return a + (r ? 60 : 76) >= e.offsetTop + o;
                },
                m = (0, i.PA)((t) => {
                    let {
                            children: e,
                            scrollElement: a,
                            outerTitle: o = "",
                            headerElement: i,
                            headerThreshold: m,
                            shouldHideHeader: g,
                        } = t,
                        [h, _] = (0, r.useState)(o),
                        [f, p] = (0, r.useState)(null),
                        [v, x] = (0, r.useState)(null),
                        [N, C] = (0, r.useState)(null),
                        [P, S] = (0, r.useState)(!1),
                        [T, y] = (0, r.useState)(!1),
                        [j, b] = (0, r.useState)(!1),
                        [k, w] = (0, r.useState)(!1),
                        {
                            settings: { isMobile: E },
                        } = (0, c.Pjs)();
                    (0, r.useLayoutEffect)(() => {
                        _(o);
                    }, [o]);
                    let F = (0, r.useCallback)(() => {
                        let t = null != m ? m : 10,
                            e = i ? Number(i.offsetTop) - t : t;
                        e < 0 && (e = 0);
                        let r = (t) => {
                            b(t > e),
                                g && w(t > 30),
                                (null == f ? void 0 : f.current) &&
                                    S(
                                        d({
                                            element:
                                                null == f ? void 0 : f.current,
                                            scrollTop: t,
                                            isMobile: E,
                                        }),
                                    ),
                                (null == v ? void 0 : v.current) &&
                                    y(
                                        d({
                                            element:
                                                null == v ? void 0 : v.current,
                                            scrollTop: t,
                                            isMobile: E,
                                        }),
                                    );
                        };
                        E ? r(window.scrollY) : a && r(a.scrollTop);
                    }, [m, i, E, g, f, v, a]);
                    (0, r.useEffect)(() => {
                        E
                            ? 0 === window.scrollY && b(!1)
                            : (a && 0 !== a.scrollTop) || b(!1);
                    }, [a, null == a ? void 0 : a.scrollTop, E]);
                    let L = (0, r.useMemo)(
                        () =>
                            E
                                ? { onScroll: (0, s.A)(F, 200) }
                                : { onScroll: (0, s.A)(F, 200), elementRef: a },
                        [F, a, E],
                    );
                    (0, l.L)(L);
                    let A = (0, r.useMemo)(
                        () => ({
                            title: h,
                            setTitle: _,
                            titleElement: f,
                            scrollElement: E ? null : a,
                            setTitleElement: p,
                            childElement: v,
                            setChildElement: x,
                            child: N,
                            setChild: C,
                            isScrolledChild: T,
                            isScrolledTitle: P,
                            isScrolling: j,
                            isHeaderHidden: k,
                        }),
                        [h, P, f, a, j, E, N, v, T, k],
                    );
                    return (0, n.jsx)(u.B9.Provider, { value: A, children: e });
                }),
                g = (t) => {
                    let { children: e, child: a, className: o } = t,
                        { setChildElement: s, setChild: i } = (0, r.useContext)(
                            u.B9,
                        ),
                        l = (0, r.useRef)(null);
                    return (
                        (0, r.useEffect)(() => {
                            (null == l ? void 0 : l.current) && s(l), a && i(a);
                        }, [l, a, s, i]),
                        (0, r.useEffect)(
                            () => () => {
                                i(null);
                            },
                            [i],
                        ),
                        (0, n.jsx)("div", { ref: l, className: o, children: e })
                    );
                },
                h = (t) => {
                    let { children: e, title: a, className: o } = t,
                        { setTitleElement: s, setTitle: i } = (0, r.useContext)(
                            u.B9,
                        ),
                        l = (0, r.useRef)(null);
                    return (
                        (0, r.useEffect)(() => {
                            (null == l ? void 0 : l.current) && s(l), a && i(a);
                        }, [l, a, s, i]),
                        (0, r.useEffect)(
                            () => () => {
                                i("");
                            },
                            [i],
                        ),
                        (0, n.jsx)("div", { ref: l, className: o, children: e })
                    );
                };
        },
        67956: (t, e, a) => {
            "use strict";
            a.d(e, { ChartTracksPage: () => x });
            var r = a(33008),
                o = a(85896),
                n = a(97531),
                s = a(66268),
                i = a(73827),
                l = a(18064),
                c = a(48509),
                u = a(91342),
                d = a(77868),
                m = a(83888),
                g = a(64143),
                h = a(44078),
                _ = a(79169),
                f = a(18740),
                p = a(50270),
                v = a.n(p);
            let x = (0, n.PA)(() => {
                let { formatMessage: t } = (0, i.A)(),
                    {
                        chart: { tracksSubPage: e },
                        settings: { isMobile: a },
                    } = (0, _.Pjs)(),
                    n = (0, _.W6M)(),
                    { contentScrollRef: p, setContentScrollRef: x } = (0,
                    _.gKY)(),
                    N = (0, _.wZZ)(),
                    { from: C } = (0, _.fyy)({ pageId: _._Q$.CHART });
                (0, _.Jzs)(e.isResolved);
                let P = (0, s.useCallback)(
                        (t) => {
                            let a = e.items[t];
                            return a && !e.isLoading && e.playlistMeta
                                ? (0, r.jsx)(h.QB, {
                                      track: a,
                                      playContextParams: N(t, {
                                          contextData: {
                                              type: c.K.Playlist,
                                              meta: {
                                                  id: ""
                                                      .concat(
                                                          e.playlistMeta.uid,
                                                          ":",
                                                      )
                                                      .concat(
                                                          e.playlistMeta.kind,
                                                      ),
                                              },
                                              from: C,
                                          },
                                          queueParams: {
                                              index: t,
                                              entityId: a.id,
                                          },
                                          loadContextMeta: !0,
                                      }),
                                  })
                                : (0, r.jsx)(f.DS, {
                                      isActive: !0,
                                      className: v().shimmerItem,
                                      variant: _.Xjt.PLAYLIST,
                                  });
                        },
                        [C, N, e.isLoading, e.items, e.playlistMeta],
                    ),
                    S = (0, s.useMemo)(
                        () => ({
                            Footer: () =>
                                (0, r.jsx)(f.A, {
                                    children: (0, r.jsx)(f.wi, {
                                        className: v().footer,
                                    }),
                                }),
                        }),
                        [],
                    ),
                    T = (0, s.useMemo)(
                        () =>
                            e.title
                                ? (0, r.jsx)(d.Heading, {
                                      id: "collection-artists-header",
                                      variant: "h1",
                                      weight: "bold",
                                      size: "xl",
                                      lineClamp: 1,
                                      children: e.title,
                                  })
                                : (0, r.jsx)(u.Shimmer, {
                                      className: v().shimmerTitle,
                                      radius: "l",
                                  }),
                        [e.title],
                    );
                return (e.isNeededToLoad && (0, s.use)(e.getTracks()),
                e.isRejected)
                    ? (0, r.jsx)(m.w, {})
                    : (0, r.jsx)(_.nVz, {
                          pageId: _._Q$.CHART,
                          children: (0, r.jsx)(g.hO, {
                              scrollElement: p,
                              ...(e.title && { outerTitle: e.title }),
                              children: (0, r.jsxs)("div", {
                                  className: v().root,
                                  ...(0, l.Am)(l.Xk.chart.CHART_PAGE),
                                  children: [
                                      (0, r.jsx)(f.Y9, {
                                          variant: f.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: n.canBack,
                                          children: T,
                                      }),
                                      (0, r.jsx)(f.$$, {
                                          className: (0, o.$)(
                                              v().scrollContainer,
                                              v().important,
                                          ),
                                          listClassName: v().content,
                                          customComponents: S,
                                          totalCount: e.items.length,
                                          itemContentCallback: P,
                                          debounceDurationInMs: 300,
                                          handleRef: x,
                                          context: {
                                              listAriaLabel: t({
                                                  id: "entity-names.chart-tracks-list",
                                              }),
                                          },
                                          isMobileLayout: a,
                                          useWindowScroll: a,
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        68732: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, { default: () => s });
            var r = a(33008),
                o = a(17846),
                n = a(45648);
            let s = () => {
                let t = (0, o.useSearchParams)().get("categoryId");
                return (
                    t || (0, o.notFound)(), (0, r.jsx)(n.t6, { categoryId: t })
                );
            };
        },
        83888: (t, e, a) => {
            "use strict";
            a.d(e, { w: () => r.SomethingWentWrong });
            var r = a(30236);
        },
        98154: (t) => {
            t.exports = {
                root: "ChartPodcastsPage_root__J5lnx",
                scrollContainer: "ChartPodcastsPage_scrollContainer__WQTf7",
                important: "ChartPodcastsPage_important__fW45m",
                footer: "ChartPodcastsPage_footer__7ytrT",
                item: "ChartPodcastsPage_item__vGRt8",
                content: "ChartPodcastsPage_content__NcV4M",
            };
        },
    },
    (t) => {
        t.O(
            0,
            [
                7098, 8282, 9712, 5271, 7309, 8712, 9775, 952, 1709, 1311, 7764,
                6706, 2089, 996, 4236, 6728, 9169, 8740, 9615, 3588, 2732, 1744,
                4078, 9902, 5598, 7358,
            ],
            () => t((t.s = 25752)),
        ),
            (_N_E = t.O());
    },
]);
