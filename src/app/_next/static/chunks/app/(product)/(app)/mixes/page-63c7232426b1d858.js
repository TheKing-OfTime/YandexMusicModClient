(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2307],
    {
        12597: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 50380));
        },
        21837: (e, t, s) => {
            "use strict";
            s.d(t, { Z_: () => d.Mixes, nL: () => u.MixesGrid, YM: () => c });
            var i = s(41028),
                r = s(61979),
                n = s(90848),
                a = s(55689),
                o = s(79169),
                l = s(59615);
            let c = i.gK
                .compose(
                    i.gK.model("Mixes", {
                        items: i.gK.array(a.f),
                        errorStatusCode: i.gK.maybeNull(i.gK.number),
                    }),
                    l.XT,
                )
                .views((e) => ({
                    get isLoading() {
                        return (
                            e.isNeededToLoad || e.loadingState === o.GuX.PENDING
                        );
                    },
                    get isNotFound() {
                        let t = e.isResolved && 0 === e.items.length;
                        return e.errorStatusCode === r.X1.NOT_FOUND || t;
                    },
                }))
                .actions((e) => ({
                    getMixes: (0, i.L3)(function* (t) {
                        let { landingResource: s, modelActionsLogger: l } = (0,
                        i._$)(e);
                        if (e.loadingState !== o.GuX.PENDING)
                            try {
                                e.loadingState = o.GuX.PENDING;
                                let r = yield s.getBlock({
                                    source: {
                                        uri: "/landing/block/mixes",
                                        fullList: t,
                                    },
                                    type: n.t.MIXES,
                                });
                                (e.items = {
                                    items: (0, i.wg)(
                                        r.items.map((e) => (0, a.Ju)(e.data)),
                                    ),
                                }.items),
                                    (e.loadingState = o.GuX.RESOLVE);
                            } catch (t) {
                                l.error(t),
                                    t instanceof r.GX &&
                                        (t.statusCode === r.X1.NOT_FOUND ||
                                            t.statusCode ===
                                                r.X1.BAD_REQUEST) &&
                                        (e.errorStatusCode = r.X1.NOT_FOUND),
                                    e.loadingState !== o.GuX.IDLE &&
                                        (e.loadingState = o.GuX.REJECT);
                            }
                    }),
                }));
            var d = s(34476),
                u = s(59348);
        },
        23031: (e, t, s) => {
            "use strict";
            s.d(t, { G4: () => o.Genre, Gc: () => a, kc: () => r });
            var i = s(41028);
            let r = (e) => ({
                    tag: e.tag,
                    title: e.title,
                    subGenres: (0, i.wg)(
                        (e.leaves || []).map((e) => ({
                            tag: e.tag,
                            title: e.title,
                        })),
                    ),
                }),
                n = i.gK.model("GenreListItemSubGenreModel", {
                    tag: i.gK.string,
                    title: i.gK.string,
                }),
                a = i.gK.model("GenreListItemModel", {
                    tag: i.gK.string,
                    title: i.gK.string,
                    subGenres: i.gK.array(n),
                });
            var o = s(23663);
        },
        23663: (e, t, s) => {
            "use strict";
            s.d(t, { Genre: () => c });
            var i = s(33008),
                r = s(97531),
                n = s(77868),
                a = s(18740),
                o = s(83673),
                l = s.n(o);
            let c = (0, r.PA)((e) => {
                let { tag: t, title: s, subGenres: r } = e;
                return (0, i.jsxs)("div", {
                    className: l().root,
                    children: [
                        (0, i.jsx)(a.N_, {
                            className: l().link,
                            href: "/genre/".concat(t),
                            children: (0, i.jsx)(n.Heading, {
                                variant: "h2",
                                size: "m",
                                lineClamp: 1,
                                className: l().linkTitle,
                                children: s,
                            }),
                        }),
                        r.length > 0 &&
                            (0, i.jsx)("div", {
                                className: l().list,
                                children: r.map((e) =>
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: l().item,
                                            children: (0, i.jsx)(a.N_, {
                                                className: l().link,
                                                href: "/genre/".concat(e.tag),
                                                children: (0, i.jsx)(
                                                    n.Caption,
                                                    {
                                                        variant: "span",
                                                        size: "l",
                                                        lineClamp: 1,
                                                        className:
                                                            l().linkTitle,
                                                        children: e.title,
                                                    },
                                                ),
                                            }),
                                        },
                                        e.tag,
                                    ),
                                ),
                            }),
                    ],
                });
            });
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
        27618: (e, t, s) => {
            "use strict";
            s.d(t, { NotFound: () => x });
            var i = s(33008),
                r = s(85896),
                n = s(97531),
                a = s(96560),
                o = s(44189),
                l = s(78016),
                c = s(77868),
                d = s(79169),
                u = s(18740),
                m = s(66268),
                _ = s(26271),
                g = s.n(_);
            let x = (0, n.PA)((e) => {
                let {
                        className: t,
                        title: s,
                        description: n,
                        iconVariant: _ = "musicLogo",
                        iconClassName: x,
                        iconSize: v,
                    } = e,
                    { contentRef: h } = (0, d.gKY)(),
                    N = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: p } = (0, d.D5F)(N);
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
                    (0, i.jsxs)("div", {
                        className: (0, r.$)(
                            g().root,
                            { [g().root_desktop]: !h },
                            t,
                        ),
                        children: [
                            (0, i.jsx)(u.Lh, {
                                withBackwardFallback: "/",
                                className: g().navigation,
                                withForwardControl: !1,
                            }),
                            (0, i.jsxs)("div", {
                                className: g().content,
                                children: [
                                    (0, i.jsx)(l.Icon, {
                                        className: (0, r.$)(g().icon, x),
                                        variant: _,
                                        size: v,
                                    }),
                                    (0, i.jsx)(c.Heading, {
                                        className: (0, r.$)(
                                            g().title,
                                            g().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            s ||
                                            (0, i.jsx)(a.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, i.jsx)(c.Caption, {
                                        className: (0, r.$)(
                                            g().text,
                                            g().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            n ||
                                            (0, i.jsx)(a.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, i.jsx)(o.Button, {
                                        onClick: p,
                                        className: g().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, i.jsx)(c.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, i.jsx)(a.A, {
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
        30236: (e, t, s) => {
            "use strict";
            s.d(t, { SomethingWentWrong: () => v });
            var i = s(33008),
                r = s(85896),
                n = s(97531),
                a = s(66268),
                o = s(73827),
                l = s(96560),
                c = s(44189),
                d = s(78016),
                u = s(77868),
                m = s(79169),
                _ = s(18740),
                g = s(32468),
                x = s.n(g);
            let v = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: s = !0 } = e,
                    { formatMessage: n } = (0, o.A)(),
                    g = n({ id: "error-messages.something-went-wrong" });
                (0, m.CgZ)(g);
                let { sendRefreshEvent: v } = (0, m.cYT)(),
                    h = (0, a.useCallback)(() => {
                        v(), (window.location.href = m.Zyd.main.href);
                    }, [v]),
                    { contentRef: N } = (0, m.gKY)();
                return (0, i.jsxs)("div", {
                    className: (0, r.$)(x().root, t),
                    children: [
                        s &&
                            (0, i.jsx)(_.Lh, {
                                withBackwardFallback: "/",
                                className: (0, r.$)(x().navigation, {
                                    [x().navigation_desktop]: !N,
                                }),
                                withForwardControl: !1,
                            }),
                        (0, i.jsxs)("div", {
                            className: (0, r.$)(x().content, {
                                [x().content_shrink]: !s,
                            }),
                            children: [
                                (0, i.jsx)(d.Icon, {
                                    className: x().icon,
                                    variant: "attention",
                                    size: "xxl",
                                }),
                                (0, i.jsx)(u.Heading, {
                                    className: (0, r.$)(
                                        x().title,
                                        x().important,
                                    ),
                                    variant: "h3",
                                    size: "xs",
                                    children: g,
                                }),
                                (0, i.jsxs)(u.Caption, {
                                    className: (0, r.$)(
                                        x().text,
                                        x().important,
                                    ),
                                    variant: "span",
                                    type: "text",
                                    size: "l",
                                    weight: "normal",
                                    children: [
                                        !1,
                                        (0, i.jsx)(l.A, {
                                            id: "page-error.try-to-restart-app",
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(c.Button, {
                                    onClick: h,
                                    className: x().button,
                                    role: "link",
                                    color: "secondary",
                                    size: "l",
                                    radius: "xxxl",
                                    children: (0, i.jsxs)(u.Caption, {
                                        type: "controls",
                                        variant: "span",
                                        size: "m",
                                        children: [
                                            !1,
                                            (0, i.jsx)(l.A, {
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
        34476: (e, t, s) => {
            "use strict";
            s.d(t, { Mixes: () => x });
            var i = s(33008),
                r = s(97531),
                n = s(66268),
                a = s(79169),
                o = s(73827),
                l = s(95567),
                c = s(55689),
                d = s(18740),
                u = s(37726),
                m = s.n(u);
            let _ = (0, r.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: s, mixes: r } = e,
                    { formatMessage: u } = (0, o.A)(),
                    _ = (0, n.useMemo)(
                        () =>
                            t
                                ? (0, d.km)({ isActive: s, withInfo: !1 })
                                : r.map((e) =>
                                      (0, i.jsx)(
                                          c.NZ,
                                          {
                                              title: e.title,
                                              weblink: e.weblink,
                                              covers: e.covers,
                                              coverSize: 80,
                                              imagesLayoutType:
                                                  e.imagesLayoutType,
                                          },
                                          e.id,
                                      ),
                                  ),
                        [s, t, r],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(d.Tw, {
                            className: m().carouselHeader,
                            title: u({ id: "entity-names.mixes" }),
                            titleSize: "xs",
                            viewAllActionLink: a.Zyd.mixes.href,
                        }),
                        (0, i.jsx)(l.Carousel, {
                            className: m().carouselBlock,
                            itemClassName: m().mixItem,
                            children: _,
                        }),
                    ],
                });
            });
            var g = s(59348);
            let x = (0, r.PA)((e) => {
                let { className: t } = e,
                    {
                        settings: { isMobile: s },
                        search: r,
                    } = (0, a.Pjs)();
                return (r.mixes.loadingState === a.GuX.IDLE &&
                    (0, n.use)(r.mixes.getMixes(!1)),
                s)
                    ? (0, i.jsx)(_, {
                          isShimmerVisible:
                              r.mixes.isLoading || r.mixes.isRejected,
                          isShimmerActive: r.mixes.isLoading,
                          mixes: r.mixes.items,
                      })
                    : (0, i.jsx)(g.MixesGrid, {
                          isShimmerVisible:
                              r.mixes.isLoading || r.mixes.isRejected,
                          isShimmerActive: r.mixes.isLoading,
                          mixes: r.mixes.items,
                          className: t,
                          withTitle: !0,
                      });
            });
        },
        35233: (e, t, s) => {
            "use strict";
            s.d(t, { M: () => i.NotFound });
            var i = s(27618);
        },
        37726: (e) => {
            e.exports = {
                carouselBlock: "MixesCarousel_carouselBlock__ZpMU2",
                carouselHeader: "MixesCarousel_carouselHeader__6mMHX",
                mixItem: "MixesCarousel_mixItem__YNSsB",
            };
        },
        40258: (e, t, s) => {
            "use strict";
            s.d(t, { L: () => d });
            var i,
                r = s(93225),
                n = s(66268),
                a = {
                    6699: (e, t, s) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.useDebouncedToggle = void 0);
                        let i = s(352),
                            r = s(810);
                        t.useDebouncedToggle = (e) => {
                            let {
                                    delay: t,
                                    initialState: s,
                                    throttleTimeout: n,
                                } = e,
                                a = (0, r.useRef)(null),
                                [o, l] = (0, r.useState)(!!s),
                                c = (0, r.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            l(!s),
                                                a.current &&
                                                    window.clearTimeout(
                                                        a.current,
                                                    ),
                                                (a.current = window.setTimeout(
                                                    () => {
                                                        l(!!s);
                                                    },
                                                    t,
                                                ));
                                        }, n),
                                    [t, s, n],
                                ),
                                d = (0, r.useCallback)(() => {
                                    l(!!s),
                                        a.current &&
                                            window.clearTimeout(a.current);
                                }, [s]);
                            return (
                                (0, r.useEffect)(
                                    () => () => {
                                        a.current &&
                                            window.clearTimeout(a.current);
                                    },
                                    [],
                                ),
                                { state: o, handleDebouncedToggle: c, reset: d }
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
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = i || (i = s.t(n, 2));
                    },
                },
                o = {};
            function l(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var s = (o[e] = { exports: {} });
                return a[e](s, s.exports, l), s.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, "__esModule", { value: !0 }),
                    (c.useScroll = void 0);
                let e = l(810),
                    t = l(361),
                    s = l(6699);
                c.useScroll = (i) => {
                    let {
                            onScroll: r,
                            listenIsScrolling: n,
                            elementRef: a,
                        } = i,
                        { state: o, handleDebouncedToggle: l } = (0,
                        s.useDebouncedToggle)({
                            delay: 1e3,
                            throttleTimeout: 100,
                        }),
                        c = (0, e.useCallback)(() => {
                            n && l(), null == r || r();
                        }, [n, l, r]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, t.getElementFromRefOrElement)(a);
                            if (null === e) return;
                            let s = null != e ? e : window,
                                i = { capture: !0, passive: !0 };
                            return (
                                s.addEventListener("scroll", c, i),
                                () => s.removeEventListener("scroll", c, i)
                            );
                        }, [a, c]),
                        o
                    );
                };
            })(),
                c.__esModule;
            var d = c.useScroll;
        },
        49402: (e) => {
            e.exports = {
                mixesTitle: "MixesGrid_mixesTitle__QawnL",
                mixesGrid: "MixesGrid_mixesGrid__uZQtt",
            };
        },
        50380: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { default: () => j });
            var i = s(33008),
                r = s(17846),
                n = s(74259),
                a = s(79169),
                o = s(97531),
                l = s(66268),
                c = s(73827),
                d = s(96560),
                u = s(57747),
                m = s(77868),
                _ = s(21837),
                g = s(83888),
                x = s(64143),
                v = s(18740),
                h = s(74640),
                N = s.n(h);
            let p = (0, o.PA)(() => {
                    let { mixes: e } = (0, a.Pjs)(),
                        { contentScrollRef: t, setContentScrollRef: s } = (0,
                        a.gKY)(),
                        n = (0, a.W6M)(),
                        { formatMessage: o } = (0, c.A)();
                    return (e.isNotFound && (0, r.notFound)(),
                    (0, a.Jzs)(e.isResolved),
                    e.isNeededToLoad && (0, l.use)(e.getMixes(!0)),
                    e.isRejected)
                        ? (0, i.jsx)(g.w, {})
                        : (0, i.jsx)(x.hO, {
                              scrollElement: t,
                              outerTitle: o({ id: "entity-names.mixes" }),
                              children: (0, i.jsxs)("div", {
                                  className: N().root,
                                  children: [
                                      (0, i.jsx)(v.Y9, {
                                          variant: v.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: n.canBack,
                                          children: (0, i.jsx)(m.Heading, {
                                              variant: "h1",
                                              weight: "bold",
                                              size: "xl",
                                              lineClamp: 1,
                                              children: (0, i.jsx)(d.A, {
                                                  id: "entity-names.mixes",
                                              }),
                                          }),
                                      }),
                                      (0, i.jsx)(u.N, {
                                          ref: s,
                                          className: N().scrollableContent,
                                          containerClassName:
                                              N().scrollableContainer,
                                          children: (0, i.jsxs)("div", {
                                              className: N().container,
                                              children: [
                                                  (0, i.jsx)(_.nL, {
                                                      isShimmerVisible:
                                                          e.isLoading,
                                                      isShimmerActive: !0,
                                                      mixes: e.items,
                                                      shimmerCount: 10,
                                                      className: N().items,
                                                  }),
                                                  (0, i.jsx)(v.A, {
                                                      children: (0, i.jsx)(
                                                          v.wi,
                                                          {
                                                              className:
                                                                  N().footer,
                                                          },
                                                      ),
                                                  }),
                                              ],
                                          }),
                                      }),
                                  ],
                              }),
                          });
                }),
                j = () => {
                    let e = (0, r.useSearchParams)().get("navigationId");
                    return e
                        ? (0, i.jsx)(n.uN, { navigationId: e })
                        : (0, i.jsx)(p, {});
                };
        },
        52568: (e, t, s) => {
            "use strict";
            s.d(t, { GenresNotFoundPage: () => n });
            var i = s(33008),
                r = s(35233);
            let n = () => (0, i.jsx)(r.M, {});
        },
        55689: (e, t, s) => {
            "use strict";
            s.d(t, { NZ: () => o.MixCard, f: () => a, Ju: () => r });
            var i = s(41028);
            let r = (e) => {
                var t;
                return {
                    id: e.id,
                    title: e.title,
                    weblink: null != (t = e.action.weblink) ? t : "",
                    covers: (0, i.wg)(e.covers || []),
                    imagesLayoutType: e.style.imagesLayoutType,
                };
            };
            var n = s(75460);
            let a = i.gK.model("MixItem", {
                id: i.gK.string,
                title: i.gK.string,
                weblink: i.gK.string,
                covers: i.gK.maybe(i.gK.array(i.gK.string)),
                imagesLayoutType: i.gK.enumeration(Object.values(n.R)),
            });
            var o = s(58893);
        },
        58893: (e, t, s) => {
            "use strict";
            s.d(t, { MixCard: () => g });
            var i = s(33008),
                r = s(85896),
                n = s(97531),
                a = s(18064),
                o = s(75460),
                l = s(52756),
                c = s(54487),
                d = s(77868),
                u = s(18740),
                m = s(68937),
                _ = s.n(m);
            let g = (0, n.PA)((e) => {
                let {
                    className: t,
                    title: s,
                    weblink: n,
                    covers: m = [],
                    coverSize: g = 100,
                    imagesLayoutType: x,
                    headingVariant: v = "h3",
                } = e;
                return (0, i.jsx)(u.N_, {
                    href: n,
                    ...(0, a.Am)(a.OA.mix.MIX_CARD),
                    children: (0, i.jsxs)(c.Paper, {
                        className: (0, r.$)(_().root, t),
                        radius: "l",
                        children: [
                            (0, i.jsx)("div", {
                                className: _().header,
                                children: (0, i.jsx)(d.Caption, {
                                    variant: v,
                                    size: "xs",
                                    weight: "bold",
                                    className: _().title,
                                    lineClamp: 2,
                                    ...(0, a.Am)(a.OA.mix.MIX_CARD_HEADER),
                                    children: s,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: (0, r.$)(_().covers, {
                                    [_().covers_radial]: x === o.R.RADIAL,
                                    [_().covers_stack]: x === o.R.STACK,
                                }),
                                ...(0, a.Am)(a.OA.mix.MIX_CARD_COVERS),
                                children: [
                                    (0, i.jsx)(l.Image, {
                                        src: m[2],
                                        withAvatarReplace: !0,
                                        fit: "contain",
                                        className: _().cover,
                                        size: g,
                                        ...(0, a.Am)(
                                            a.OA.mix.MIX_CARD_COVER_IMAGE_3,
                                        ),
                                    }),
                                    (0, i.jsx)(l.Image, {
                                        src: m[1],
                                        withAvatarReplace: !0,
                                        fit: "contain",
                                        className: _().cover,
                                        size: g,
                                        ...(0, a.Am)(
                                            a.OA.mix.MIX_CARD_COVER_IMAGE_2,
                                        ),
                                    }),
                                    (0, i.jsx)(l.Image, {
                                        src: m[0],
                                        withAvatarReplace: !0,
                                        fit: "contain",
                                        className: _().cover,
                                        size: g,
                                        ...(0, a.Am)(
                                            a.OA.mix.MIX_CARD_COVER_IMAGE_1,
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        59348: (e, t, s) => {
            "use strict";
            s.d(t, { MixesGrid: () => g });
            var i = s(33008),
                r = s(85896),
                n = s(97531),
                a = s(66268),
                o = s(96560),
                l = s(18064),
                c = s(77868),
                d = s(55689),
                u = s(18740),
                m = s(49402),
                _ = s.n(m);
            let g = (0, n.PA)((e) => {
                let {
                        isShimmerVisible: t,
                        isShimmerActive: s,
                        withTitle: n,
                        mixes: m,
                        shimmerCount: g = 5,
                        className: x,
                    } = e,
                    v = (0, a.useMemo)(
                        () =>
                            t
                                ? (0, i.jsx)(u.eI, {
                                      isActive: s,
                                      round: !1,
                                      centered: !1,
                                      withInfo: !1,
                                      count: g,
                                  })
                                : m.map((e) =>
                                      (0, i.jsx)(
                                          d.NZ,
                                          {
                                              title: e.title,
                                              weblink: e.weblink,
                                              covers: e.covers,
                                              imagesLayoutType:
                                                  e.imagesLayoutType,
                                          },
                                          e.id,
                                      ),
                                  ),
                        [s, t, m, g],
                    );
                return (0, i.jsxs)("div", {
                    ...(0, l.Am)(l.e8.mixes.MIXES_GRID_CONTAINER),
                    children: [
                        n &&
                            (0, i.jsx)(c.Heading, {
                                className: _().mixesTitle,
                                size: "s",
                                weight: "bold",
                                variant: "h3",
                                ...(0, l.Am)(l.e8.mixes.MIXES_GRID_HEADER),
                                children: (0, i.jsx)(o.A, {
                                    id: "entity-names.mixes",
                                }),
                            }),
                        (0, i.jsx)("div", {
                            className: (0, r.$)(_().mixesGrid, x),
                            children: v,
                        }),
                    ],
                });
            });
        },
        64143: (e, t, s) => {
            "use strict";
            s.d(t, { hO: () => m, jr: () => _, jp: () => g, QZ: () => r }),
                s(57323);
            var i = s(66268);
            let r = (e, t, s) => {
                let r = null != s && s;
                return {
                    topColorStyle: (0, i.useMemo)(() => {
                        if (void 0 === t) return;
                        let s = r ? 93 : 17,
                            i = t - s;
                        return {
                            "--average-color-background": e,
                            transform: "translateY(".concat(
                                t >= s ? 0 : i,
                                "px)",
                            ),
                            opacity: 1,
                        };
                    }, [t, r, e]),
                    headerStyle: (0, i.useMemo)(
                        () => ({ "--average-color-background": e }),
                        [e],
                    ),
                };
            };
            var n = s(33008),
                a = s(13201),
                o = s(97531),
                l = s(40258),
                c = s(79169),
                d = s(18740);
            let u = (e) => {
                    let { element: t, scrollTop: s, isMobile: i } = e,
                        r = 0.6 * t.clientHeight;
                    return s + (i ? 60 : 76) >= t.offsetTop + r;
                },
                m = (0, o.PA)((e) => {
                    let {
                            children: t,
                            scrollElement: s,
                            outerTitle: r = "",
                            headerElement: o,
                            headerThreshold: m,
                            shouldHideHeader: _,
                        } = e,
                        [g, x] = (0, i.useState)(r),
                        [v, h] = (0, i.useState)(null),
                        [N, p] = (0, i.useState)(null),
                        [j, C] = (0, i.useState)(null),
                        [f, S] = (0, i.useState)(!1),
                        [w, A] = (0, i.useState)(!1),
                        [E, M] = (0, i.useState)(!1),
                        [G, b] = (0, i.useState)(!1),
                        {
                            settings: { isMobile: k },
                        } = (0, c.Pjs)();
                    (0, i.useLayoutEffect)(() => {
                        x(r);
                    }, [r]);
                    let T = (0, i.useCallback)(() => {
                        let e = null != m ? m : 10,
                            t = o ? Number(o.offsetTop) - e : e;
                        t < 0 && (t = 0);
                        let i = (e) => {
                            M(e > t),
                                _ && b(e > 30),
                                (null == v ? void 0 : v.current) &&
                                    S(
                                        u({
                                            element:
                                                null == v ? void 0 : v.current,
                                            scrollTop: e,
                                            isMobile: k,
                                        }),
                                    ),
                                (null == N ? void 0 : N.current) &&
                                    A(
                                        u({
                                            element:
                                                null == N ? void 0 : N.current,
                                            scrollTop: e,
                                            isMobile: k,
                                        }),
                                    );
                        };
                        k ? i(window.scrollY) : s && i(s.scrollTop);
                    }, [m, o, k, _, v, N, s]);
                    (0, i.useEffect)(() => {
                        k
                            ? 0 === window.scrollY && M(!1)
                            : (s && 0 !== s.scrollTop) || M(!1);
                    }, [s, null == s ? void 0 : s.scrollTop, k]);
                    let y = (0, i.useMemo)(
                        () =>
                            k
                                ? { onScroll: (0, a.A)(T, 200) }
                                : { onScroll: (0, a.A)(T, 200), elementRef: s },
                        [T, s, k],
                    );
                    (0, l.L)(y);
                    let L = (0, i.useMemo)(
                        () => ({
                            title: g,
                            setTitle: x,
                            titleElement: v,
                            scrollElement: k ? null : s,
                            setTitleElement: h,
                            childElement: N,
                            setChildElement: p,
                            child: j,
                            setChild: C,
                            isScrolledChild: w,
                            isScrolledTitle: f,
                            isScrolling: E,
                            isHeaderHidden: G,
                        }),
                        [g, f, v, s, E, k, j, N, w, G],
                    );
                    return (0, n.jsx)(d.B9.Provider, { value: L, children: t });
                }),
                _ = (e) => {
                    let { children: t, child: s, className: r } = e,
                        { setChildElement: a, setChild: o } = (0, i.useContext)(
                            d.B9,
                        ),
                        l = (0, i.useRef)(null);
                    return (
                        (0, i.useEffect)(() => {
                            (null == l ? void 0 : l.current) && a(l), s && o(s);
                        }, [l, s, a, o]),
                        (0, i.useEffect)(
                            () => () => {
                                o(null);
                            },
                            [o],
                        ),
                        (0, n.jsx)("div", { ref: l, className: r, children: t })
                    );
                },
                g = (e) => {
                    let { children: t, title: s, className: r } = e,
                        { setTitleElement: a, setTitle: o } = (0, i.useContext)(
                            d.B9,
                        ),
                        l = (0, i.useRef)(null);
                    return (
                        (0, i.useEffect)(() => {
                            (null == l ? void 0 : l.current) && a(l), s && o(s);
                        }, [l, s, a, o]),
                        (0, i.useEffect)(
                            () => () => {
                                o("");
                            },
                            [o],
                        ),
                        (0, n.jsx)("div", { ref: l, className: r, children: t })
                    );
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
        74259: (e, t, s) => {
            "use strict";
            s.d(t, { uN: () => c.GenresPage, Zt: () => l });
            var i = s(41028),
                r = s(61979),
                n = s(23031),
                a = s(79169),
                o = s(59615);
            let l = i.gK
                .compose(
                    i.gK.model("GenresPageModel", {
                        title: i.gK.maybeNull(i.gK.string),
                        items: i.gK.array(n.Gc),
                        errorStatusCode: i.gK.maybeNull(i.gK.number),
                    }),
                    o.XT,
                )
                .views((e) => ({
                    get isLoading() {
                        return (
                            e.isNeededToLoad || e.loadingState === a.GuX.PENDING
                        );
                    },
                    get isNotFound() {
                        let t = e.isResolved && 0 === e.items.length;
                        return e.errorStatusCode === r.X1.NOT_FOUND || t;
                    },
                }))
                .actions((e) => ({
                    getData: (0, i.L3)(function* (t) {
                        let { landing3Resource: s, modelActionsLogger: o } = (0,
                        i._$)(e);
                        if (e.loadingState !== a.GuX.PENDING)
                            try {
                                e.loadingState = a.GuX.PENDING;
                                let o = (yield s.getMetatags({})).trees.find(
                                    (e) => e.navigationId === t,
                                );
                                if (!o) {
                                    e.errorStatusCode = r.X1.NOT_FOUND;
                                    return;
                                }
                                (e.title = o.title),
                                    (e.items = (0, i.wg)(o.leaves.map(n.kc))),
                                    e.loadingState !== a.GuX.IDLE &&
                                        (e.loadingState = a.GuX.RESOLVE);
                            } catch (t) {
                                o.error(t),
                                    t instanceof r.GX &&
                                        (t.statusCode === r.X1.NOT_FOUND ||
                                            t.statusCode ===
                                                r.X1.BAD_REQUEST) &&
                                        (e.errorStatusCode = r.X1.NOT_FOUND),
                                    e.loadingState !== a.GuX.IDLE &&
                                        (e.loadingState = a.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = a.GuX.IDLE),
                            (e.title = null),
                            (e.items = (0, i.wg)([])),
                            (e.errorStatusCode = null);
                    },
                }));
            s(52568);
            var c = s(74270);
        },
        74270: (e, t, s) => {
            "use strict";
            s.d(t, { GenresPage: () => v });
            var i = s(33008),
                r = s(97531),
                n = s(17846),
                a = s(66268),
                o = s(57747),
                l = s(77868),
                c = s(83888),
                d = s(64143),
                u = s(23031),
                m = s(79169),
                _ = s(18740),
                g = s(89102),
                x = s.n(g);
            let v = (0, r.PA)((e) => {
                let { navigationId: t } = e,
                    { genres: s } = (0, m.Pjs)(),
                    { contentScrollRef: r, setContentScrollRef: g } = (0,
                    m.gKY)(),
                    v = (0, m.W6M)();
                return ((0, a.useEffect)(
                    () => () => {
                        s.reset();
                    },
                    [s, t],
                ),
                s.isNotFound && (0, n.notFound)(),
                (0, m.Jzs)(s.isResolved),
                t && s.isNeededToLoad && (0, a.use)(s.getData(t)),
                s.isRejected)
                    ? (0, i.jsx)(c.w, {})
                    : (0, i.jsxs)(d.hO, {
                          scrollElement: r,
                          outerTitle: s.title,
                          children: [
                              (0, i.jsx)(_.Y9, {
                                  variant: _.Vw.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: v.canBack,
                                  children: (0, i.jsx)(l.Heading, {
                                      variant: "h2",
                                      weight: "bold",
                                      size: "xl",
                                      lineClamp: 1,
                                      children: s.title,
                                  }),
                              }),
                              (0, i.jsx)(o.N, {
                                  className: x().root,
                                  containerClassName: x().content,
                                  ref: g,
                                  children: (0, i.jsx)("div", {
                                      className: x().list,
                                      children: s.items.map((e) =>
                                          (0, i.jsx)(
                                              u.G4,
                                              {
                                                  tag: e.tag,
                                                  title: e.title,
                                                  subGenres: e.subGenres,
                                              },
                                              e.tag,
                                          ),
                                      ),
                                  }),
                              }),
                          ],
                      });
            });
        },
        74640: (e) => {
            e.exports = {
                root: "MixesPage_root__mp_Eq",
                items: "MixesPage_items__dKLen",
                scrollableContent: "MixesPage_scrollableContent__6xhZh",
                scrollableContainer: "MixesPage_scrollableContainer__S0b76",
                container: "MixesPage_container__1b_3H",
                shimmerContainer: "MixesPage_shimmerContainer__su53n",
                footer: "MixesPage_footer__jCcAN",
            };
        },
        75460: (e, t, s) => {
            "use strict";
            var i;
            s.d(t, { R: () => i }),
                (function (e) {
                    (e.RADIAL = "RADIAL"), (e.STACK = "STACK");
                })(i || (i = {}));
        },
        83673: (e) => {
            e.exports = {
                root: "Genre_root__80dlk",
                link: "Genre_link__Wewaq",
                linkTitle: "Genre_linkTitle__ORAsw",
                list: "Genre_list__C2Pxf",
            };
        },
        83888: (e, t, s) => {
            "use strict";
            s.d(t, { w: () => i.SomethingWentWrong });
            var i = s(30236);
        },
        89102: (e) => {
            e.exports = {
                root: "GenresPage_root__LhP_S",
                shimmerTitle: "GenresPage_shimmerTitle__4j8uH",
                content: "GenresPage_content__yhKrQ",
                list: "GenresPage_list__l2Cuc",
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                9712, 7098, 8282, 5271, 9775, 952, 2477, 1311, 7764, 6706, 996,
                4236, 9169, 8740, 9615, 7747, 9902, 5598, 7358,
            ],
            () => e((e.s = 12597)),
        ),
            (_N_E = e.O());
    },
]);
