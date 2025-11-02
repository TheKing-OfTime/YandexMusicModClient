(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7167],
    {
        1357: (e, t, r) => {
            "use strict";
            r.d(t, { G: () => d });
            var o,
                n = r(93225),
                a = r(66268),
                l = {
                    6699: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.useDebouncedToggle = void 0);
                        let o = r(352),
                            n = r(810);
                        t.useDebouncedToggle = (e) => {
                            let {
                                    delay: t,
                                    initialState: r,
                                    throttleTimeout: a,
                                } = e,
                                l = (0, n.useRef)(null),
                                [s, i] = (0, n.useState)(!!r),
                                u = (0, n.useMemo)(
                                    () =>
                                        (0, o.throttle)(() => {
                                            i(!r),
                                                l.current &&
                                                    window.clearTimeout(
                                                        l.current,
                                                    ),
                                                (l.current = window.setTimeout(
                                                    () => {
                                                        i(!!r);
                                                    },
                                                    t,
                                                ));
                                        }, a),
                                    [t, r, a],
                                ),
                                d = (0, n.useCallback)(() => {
                                    i(!!r),
                                        l.current &&
                                            window.clearTimeout(l.current);
                                }, [r]);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        l.current &&
                                            window.clearTimeout(l.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: u, reset: d }
                            );
                        };
                    },
                    2767: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.useForceUpdateRef = void 0);
                        let o = r(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, o.useState)(null);
                            return [
                                e,
                                (0, o.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    2067: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.useScroll = void 0);
                        let o = r(810),
                            n = r(361),
                            a = r(6699);
                        t.useScroll = (e) => {
                            let {
                                    onScroll: t,
                                    listenIsScrolling: r,
                                    elementRef: l,
                                } = e,
                                { state: s, handleDebouncedToggle: i } = (0,
                                a.useDebouncedToggle)({
                                    delay: 1e3,
                                    throttleTimeout: 100,
                                }),
                                u = (0, o.useCallback)(() => {
                                    r && i(), null == t || t();
                                }, [r, i, t]);
                            return (
                                (0, o.useEffect)(() => {
                                    let e = (0, n.getElementFromRefOrElement)(
                                        l,
                                    );
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return (
                                        t.addEventListener("scroll", u, r),
                                        () =>
                                            t.removeEventListener(
                                                "scroll",
                                                u,
                                                r,
                                            )
                                    );
                                }, [l, u]),
                                s
                            );
                        };
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement)
                                        return e;
                                    if (
                                        null === e.current ||
                                        e.current instanceof HTMLElement
                                    )
                                        return e.current;
                                }
                            });
                    },
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = o || (o = r.t(a, 2));
                    },
                },
                s = {};
            function i(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return l[e](r, r.exports, i), r.exports;
            }
            var u = {};
            (() => {
                Object.defineProperty(u, "__esModule", { value: !0 }),
                    (u.useElementOffsetY = void 0);
                let e = i(810),
                    t = i(2067),
                    r = i(2767);
                u.useElementOffsetY = (o) => {
                    let [n, a] = (0, r.useForceUpdateRef)(),
                        [l, s] = (0, e.useState)(),
                        i = (0, e.useCallback)(() => {
                            let e =
                                null == n ? void 0 : n.getBoundingClientRect();
                            e && s(e.y);
                        }, [n]);
                    return (
                        (0, e.useLayoutEffect)(i),
                        (0, t.useScroll)({ onScroll: i, elementRef: o }),
                        { forceUpdateRefCallback: a, offsetY: l }
                    );
                };
            })(),
                u.__esModule;
            var d = u.useElementOffsetY;
        },
        2117: (e, t, r) => {
            "use strict";
            r.d(t, { XU: () => c });
            var o,
                n,
                a = r(7144),
                l = r(66268),
                s = r(73827);
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
                })(n || (n = {}));
            var i = function (e) {
                var t = (0, s.A)(),
                    r = e.value,
                    o = e.children,
                    n = (0, a.__rest)(e, ["value", "children"]);
                return o(t.formatNumberToParts(r, n));
            };
            function u(e) {
                var t = function (t) {
                    var r = (0, s.A)(),
                        o = t.value,
                        n = t.children,
                        l = (0, a.__rest)(t, ["value", "children"]),
                        i = "string" == typeof o ? new Date(o || 0) : o;
                    return n(
                        "formatDate" === e
                            ? r.formatDateToParts(i, l)
                            : r.formatTimeToParts(i, l),
                    );
                };
                return (t.displayName = n[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var r = (0, s.A)(),
                        o = t.value,
                        n = t.children,
                        i = (0, a.__rest)(t, ["value", "children"]),
                        u = r[e](o, i);
                    if ("function" == typeof n) return n(u);
                    var d = r.textComponent || l.Fragment;
                    return l.createElement(d, null, u);
                };
                return (t.displayName = o[e]), t;
            }
            (i.displayName = "FormattedNumberParts"),
                (i.displayName = "FormattedNumberParts");
            var c = d("formatDate");
            d("formatTime"),
                d("formatNumber"),
                d("formatList"),
                d("formatDisplayName"),
                u("formatDate"),
                u("formatTime");
        },
        5884: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                });
            let o = r(473)._(r(16092));
            function n(e, t) {
                var r;
                let n = {};
                "function" == typeof e && (n.loader = e);
                let a = { ...n, ...t };
                return (0, o.default)({
                    ...a,
                    modules:
                        null == (r = a.loadableGenerated) ? void 0 : r.modules,
                });
            }
            ("function" == typeof t.default ||
                ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }),
                Object.assign(t.default, t),
                (e.exports = t.default));
        },
        16092: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                });
            let o = r(33008),
                n = r(66268),
                a = r(52283);
            function l(e) {
                return { default: e && "default" in e ? e.default : e };
            }
            r(81382);
            let s = {
                    loader: () => Promise.resolve(l(() => null)),
                    loading: null,
                    ssr: !0,
                },
                i = function (e) {
                    let t = { ...s, ...e },
                        r = (0, n.lazy)(() => t.loader().then(l)),
                        i = t.loading;
                    function u(e) {
                        let l = i
                                ? (0, o.jsx)(i, {
                                      isLoading: !0,
                                      pastDelay: !0,
                                      error: null,
                                  })
                                : null,
                            s = !t.ssr || !!t.loading,
                            u = s ? n.Suspense : n.Fragment,
                            d = t.ssr
                                ? (0, o.jsxs)(o.Fragment, {
                                      children: [null, (0, o.jsx)(r, { ...e })],
                                  })
                                : (0, o.jsx)(a.BailoutToCSR, {
                                      reason: "next/dynamic",
                                      children: (0, o.jsx)(r, { ...e }),
                                  });
                        return (0, o.jsx)(u, {
                            ...(s ? { fallback: l } : {}),
                            children: d,
                        });
                    }
                    return (u.displayName = "LoadableComponent"), u;
                };
        },
        18998: (e) => {
            e.exports = {
                root: "ConcertPage_root__pqTvU",
                averageColorBackground:
                    "ConcertPage_averageColorBackground__wj67a",
                header: "ConcertPage_header__FxHk1",
                container: "ConcertPage_container__ca9h4",
                footer: "ConcertPage_footer____Dnb",
                skeleton: "ConcertPage_skeleton__8aWkf",
                error: "ConcertPage_error__gcEp_",
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
        26561: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 99019));
        },
        27618: (e, t, r) => {
            "use strict";
            r.d(t, { NotFound: () => p });
            var o = r(33008),
                n = r(85896),
                a = r(97531),
                l = r(96560),
                s = r(44189),
                i = r(78016),
                u = r(77868),
                d = r(79169),
                c = r(18740),
                m = r(66268),
                f = r(26271),
                g = r.n(f);
            let p = (0, a.PA)((e) => {
                let {
                        className: t,
                        title: r,
                        description: a,
                        iconVariant: f = "musicLogo",
                        iconClassName: p,
                        iconSize: _,
                    } = e,
                    { contentRef: v } = (0, d.gKY)(),
                    b = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: N } = (0, d.D5F)(b);
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
                        className: (0, n.$)(
                            g().root,
                            { [g().root_desktop]: !v },
                            t,
                        ),
                        children: [
                            (0, o.jsx)(c.Lh, {
                                withBackwardFallback: "/",
                                className: g().navigation,
                                withForwardControl: !1,
                            }),
                            (0, o.jsxs)("div", {
                                className: g().content,
                                children: [
                                    (0, o.jsx)(i.Icon, {
                                        className: (0, n.$)(g().icon, p),
                                        variant: f,
                                        size: _,
                                    }),
                                    (0, o.jsx)(u.Heading, {
                                        className: (0, n.$)(
                                            g().title,
                                            g().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            r ||
                                            (0, o.jsx)(l.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, o.jsx)(u.Caption, {
                                        className: (0, n.$)(
                                            g().text,
                                            g().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            a ||
                                            (0, o.jsx)(l.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, o.jsx)(s.Button, {
                                        onClick: N,
                                        className: g().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, o.jsx)(u.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, o.jsx)(l.A, {
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
        35233: (e, t, r) => {
            "use strict";
            r.d(t, { M: () => o.NotFound });
            var o = r(27618);
        },
        40311: (e) => {
            e.exports = { icon: "ConcertNotFoundPage_icon__9yJIB" };
        },
        52283: (e, t, r) => {
            "use strict";
            function o(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "BailoutToCSR", {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }),
                r(32975);
        },
        63661: (e, t, r) => {
            "use strict";
            r.d(t, { bp: () => j, A6: () => R, Bd: () => c });
            var o = r(41028);
            let n = o.gK.model("ConcertDescription", {
                text: o.gK.string,
                genre: o.gK.maybe(o.gK.string),
                source: o.gK.maybe(o.gK.string),
            });
            var a = r(61979),
                l = r(12898),
                s = r(70879),
                i = r(51551),
                u = r(79169),
                d = r(59615);
            let c = o.gK
                .compose(
                    o.gK.model("ConcertPage", {
                        meta: o.gK.maybeNull(i.aR),
                        covers: o.gK.maybeNull(o.gK.array(d.$B)),
                        description: o.gK.maybeNull(n),
                        leadArtistId: o.gK.maybeNull(
                            o.gK.union(o.gK.string, o.gK.number),
                        ),
                        artists: o.gK.maybeNull(o.gK.array(s.PK)),
                        errorStatusCode: o.gK.maybeNull(o.gK.number),
                        landing: l.Ju,
                    }),
                    d.XT,
                    d.pl,
                )
                .views((e) => ({
                    get isShimmerVisible() {
                        return e.isNeededToLoad || e.isLoading || e.isRejected;
                    },
                    get isShimmerActive() {
                        return e.isLoading;
                    },
                    get isNotFound() {
                        return (
                            e.isRejected &&
                            (e.errorStatusCode === a.X1.NOT_FOUND ||
                                e.errorStatusCode === a.X1.BAD_REQUEST)
                        );
                    },
                    get coversUri() {
                        var t, r;
                        return null !=
                            (r =
                                null == (t = e.covers)
                                    ? void 0
                                    : t.map((e) => e.uri).filter((e) => !!e))
                            ? r
                            : [];
                    },
                }))
                .actions((e) => ({
                    getInfo: (0, o.L3)(function* (t) {
                        let { concertId: r } = t,
                            { concertsResource: n, modelActionsLogger: l } = (0,
                            o._$)(e);
                        if (!e.isLoading)
                            try {
                                e.loadingState = u.GuX.PENDING;
                                let {
                                    concert: t,
                                    minPrice: a,
                                    covers: l,
                                    description: d,
                                    leadArtistId: c,
                                    artists: m,
                                } = yield n.getInfo({ concertId: r });
                                (e.meta = (0, i.ho)(t, a)),
                                    (e.covers = (0, o.wg)(
                                        null == l
                                            ? void 0
                                            : l.map((e) => (0, u.pX4)(e)),
                                    )),
                                    (e.description = d ? (0, o.wg)(d) : null),
                                    (e.leadArtistId = c ? (0, o.wg)(c) : null),
                                    (e.artists = (0, o.wg)(
                                        null == m
                                            ? void 0
                                            : m.map((e) => (0, s.dM)(e)),
                                    )),
                                    (e.loadingState = u.GuX.RESOLVE);
                            } catch (t) {
                                l.error(t),
                                    t instanceof a.GX &&
                                        (t.statusCode === a.X1.NOT_FOUND ||
                                            t.statusCode ===
                                                a.X1.BAD_REQUEST) &&
                                        (e.errorStatusCode = a.X1.NOT_FOUND),
                                    (e.loadingState = u.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = u.GuX.IDLE),
                            e.landing.reset(),
                            (e.leadArtistId = null),
                            e.destroyItems([
                                e.covers,
                                e.description,
                                e.artists,
                            ]);
                    },
                }));
            var m = r(33008),
                f = r(97531),
                g = r(66268),
                p = r(73827),
                _ = r(35233),
                v = r(40311),
                b = r.n(v);
            let N = (0, f.PA)(() => {
                    let { experiments: e, concert: t } = (0, u.Pjs)(),
                        { formatMessage: r } = (0, p.A)(),
                        o = e.checkExperiment(u.zal.WebNextConcertPage, "on");
                    if (
                        ((0, u.ACS)(),
                        (0, g.useEffect)(
                            () => () => {
                                t.reset();
                            },
                            [t],
                        ),
                        !o)
                    )
                        return (0, m.jsx)(_.M, {});
                    let n = r({ id: "page-error.concert-page-does-not-exist" }),
                        a = r({
                            id: "page-error.concert-page-does-not-exist-description",
                        });
                    return (0, m.jsx)(_.M, {
                        title: n,
                        description: a,
                        iconVariant: "attention",
                        iconSize: "xxl",
                        iconClassName: b().icon,
                    });
                }),
                j = (0, f.PA)(() =>
                    (0, m.jsx)(u.nVz, {
                        pageId: u._Q$.PAGE_NOT_FOUND_SCREEN,
                        children: (0, m.jsx)(N, {}),
                    }),
                );
            var x = r(17846),
                y = r(54960),
                C = r(93967),
                h = r(43836),
                P = r(42213),
                F = r(1357),
                E = r(42314),
                O = r(57747),
                k = r(74837),
                T = r(83888),
                S = r(64143),
                A = r(18740),
                w = r(48551),
                I = r(18998),
                D = r.n(I);
            let L = (0, f.PA)((e) => {
                    var t, r, o;
                    let { concertId: n, isWebNextNavigationOn: a } = e,
                        {
                            experiments: s,
                            concert: i,
                            modals: { imageSliderModal: d },
                        } = (0, u.Pjs)(),
                        c = (() => {
                            let e = (0, w.st)(),
                                t = (0, u.UlF)(),
                                { pageId: r } = (0, u.$au)(),
                                { hash: o } = (0, w.gf)();
                            return (0, P.c)((n, a) => {
                                if (!e || !r) return;
                                let l = {
                                        hash: o,
                                        pageId: r,
                                        pageStyle: C.QL.Fullscreen,
                                        pagePlacement: C.c4.Fullscreen,
                                        viewUuid: a,
                                        mainObjectType: C.ky.Concert,
                                    },
                                    s = (0, C.Fx)({
                                        params: l,
                                        logger: t,
                                        context:
                                            "useSendEventOnConcertOpenedOrClosed",
                                    });
                                s &&
                                    (n
                                        ? (0, C.Fn)(e.evgenInstance, s)
                                        : (0, C.PO)(e.evgenInstance, s));
                            });
                        })(),
                        f = (0, g.useRef)(String((0, y.A)())),
                        { setContentScrollRef: p, contentScrollRef: _ } = (0,
                        u.gKY)(),
                        { forceUpdateRefCallback: v, offsetY: b } = (0, F.G)(_),
                        N = (0, u.ytd)(
                            null == (r = i.covers) || null == (t = r[0])
                                ? void 0
                                : t.color,
                        ),
                        { topColorStyle: j, headerStyle: I } = (0, S.QZ)(
                            N,
                            b,
                            a,
                        ),
                        L = (0, P.c)(() => {
                            i.coversUri.length > 0 &&
                                d.openImages({
                                    images: i.coversUri,
                                    sizeImage: 800,
                                    withAspectRatio: !1,
                                });
                        }),
                        R = s.checkExperiment(u.zal.WebNextConcertPage, "on");
                    (0, u.ACS)(),
                        (0, g.useEffect)(
                            () => () => {
                                i.reset();
                            },
                            [i],
                        ),
                        (0, g.useEffect)(() => {
                            let e = f.current;
                            return (
                                c(!0, e),
                                () => {
                                    c(!1, e);
                                }
                            );
                        }, [c]),
                        (0, u.Jzs)(i.isResolved);
                    let K = [];
                    if (
                        (i.isNeededToLoad &&
                            K.push(i.getInfo({ concertId: n })),
                        i.landing.isNeededToLoad &&
                            K.push(
                                i.landing.getConcertSkeleton(
                                    {
                                        concertId: n,
                                        skeletonId: h.p.CONCERT_PAGE,
                                    },
                                    { preloadBlocksCount: 2 },
                                ),
                            ),
                        K.length && (0, g.use)(Promise.allSettled(K)),
                        (!R || i.isNotFound) && (0, x.notFound)(),
                        i.isRejected)
                    )
                        return (0, m.jsx)(T.w, {});
                    let B = (0, E.L)(() => {
                        var e, t, r;
                        return i.isLoading || !i.meta || i.isRejected
                            ? (0, m.jsx)(k.c6, {
                                  className: D().header,
                                  isActive: !0,
                              })
                            : (0, m.jsx)(u.Bki, {
                                  objectType: C.ky.Concert,
                                  objectId:
                                      null == (e = i.meta) ? void 0 : e.id,
                                  objectPosX: 1,
                                  objectPosY: 1,
                                  objectsCount: 1,
                                  mainObjectType: C.ky.Concert,
                                  mainObjectId:
                                      null == (t = i.meta) ? void 0 : t.id,
                                  children: (0, m.jsx)(k.Dc, {
                                      description: i.description,
                                      onCoverClick: L,
                                      leadArtistId: i.leadArtistId,
                                      ref: v,
                                      className: D().header,
                                      concert: i.meta,
                                      cover:
                                          null == (r = i.covers)
                                              ? void 0
                                              : r[0],
                                  }),
                              });
                    });
                    return (0, m.jsx)(u.jPc, {
                        children: (0, m.jsxs)(S.hO, {
                            scrollElement: _,
                            children: [
                                (0, m.jsx)(A.Y9, {
                                    style: I,
                                    variant: A.Vw.INNER,
                                    showControls: !1,
                                }),
                                (0, m.jsx)("div", {
                                    className: D().averageColorBackground,
                                    style: j,
                                }),
                                (0, m.jsxs)(O.N, {
                                    ref: p,
                                    className: D().root,
                                    containerClassName: D().container,
                                    children: [
                                        (0, m.jsxs)("div", {
                                            children: [
                                                (0, m.jsx)(u.hjC, {
                                                    tabId: "",
                                                    tabPos: 0,
                                                    isTabSelectedByDefault: !1,
                                                    children: (0, m.jsx)(
                                                        u.FoH,
                                                        {
                                                            blockId:
                                                                C.LA
                                                                    .ConcertHeader,
                                                            blockType:
                                                                C.LA
                                                                    .ConcertHeader,
                                                            blockPosX: 1,
                                                            blockPosY: 1,
                                                            objectsCount: 1,
                                                            mainObjectType:
                                                                C.ky.Concert,
                                                            mainObjectId:
                                                                null ==
                                                                (o = i.meta)
                                                                    ? void 0
                                                                    : o.id,
                                                            children: B,
                                                        },
                                                    ),
                                                }),
                                                (0, m.jsx)(l.EA, {
                                                    containerClassName:
                                                        D().skeleton,
                                                    landing: i.landing,
                                                    errorComponent: (0, m.jsx)(
                                                        T.w,
                                                        {
                                                            className:
                                                                D().error,
                                                            withBackwardControl:
                                                                !1,
                                                        },
                                                    ),
                                                }),
                                            ],
                                        }),
                                        (0, m.jsx)(A.A, {
                                            children: (0, m.jsx)(A.wi, {
                                                className: D().footer,
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                R = (0, f.PA)((e) =>
                    (0, m.jsx)(u.nVz, {
                        pageId: u._Q$.CONCERT,
                        pageEntityId: e.concertId,
                        children: (0, m.jsx)(L, { ...e }),
                    }),
                );
        },
        74375: (e, t, r) => {
            "use strict";
            r.d(t, { default: () => n.a });
            var o = r(5884),
                n = r.n(o);
        },
        81382: (e, t, r) => {
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
                r(33008),
                r(17229),
                r(6077),
                r(74964);
        },
        99019: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => l });
            var o = r(33008),
                n = r(17846),
                a = r(63661);
            let l = () => {
                let e = (0, n.useSearchParams)().get("concertId");
                return (
                    e || (0, n.notFound)(), (0, o.jsx)(a.A6, { concertId: e })
                );
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                7098, 8282, 9712, 5271, 7309, 8712, 8004, 9284, 7509, 1709,
                4397, 9775, 9323, 952, 1311, 7764, 6706, 2089, 2140, 996, 4236,
                6728, 3949, 9169, 8740, 9615, 3588, 2732, 1744, 4204, 7747,
                4078, 9718, 4760, 8747, 5765, 2898, 508, 9902, 5598, 7358,
            ],
            () => e((e.s = 26561)),
        ),
            (_N_E = e.O());
    },
]);
