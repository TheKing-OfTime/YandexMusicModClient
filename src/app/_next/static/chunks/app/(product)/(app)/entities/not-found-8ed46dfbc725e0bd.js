(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2279],
    {
        2117: (t, e, r) => {
            "use strict";
            r.d(e, { XU: () => c });
            var o,
                a,
                n = r(7144),
                s = r(66268),
                i = r(73827);
            !(function (t) {
                (t.formatDate = "FormattedDate"),
                    (t.formatTime = "FormattedTime"),
                    (t.formatNumber = "FormattedNumber"),
                    (t.formatList = "FormattedList"),
                    (t.formatDisplayName = "FormattedDisplayName");
            })(o || (o = {})),
                (function (t) {
                    (t.formatDate = "FormattedDateParts"),
                        (t.formatTime = "FormattedTimeParts"),
                        (t.formatNumber = "FormattedNumberParts"),
                        (t.formatList = "FormattedListParts");
                })(a || (a = {}));
            var l = function (t) {
                var e = (0, i.A)(),
                    r = t.value,
                    o = t.children,
                    a = (0, n.__rest)(t, ["value", "children"]);
                return o(e.formatNumberToParts(r, a));
            };
            function u(t) {
                var e = function (e) {
                    var r = (0, i.A)(),
                        o = e.value,
                        a = e.children,
                        s = (0, n.__rest)(e, ["value", "children"]),
                        l = "string" == typeof o ? new Date(o || 0) : o;
                    return a(
                        "formatDate" === t
                            ? r.formatDateToParts(l, s)
                            : r.formatTimeToParts(l, s),
                    );
                };
                return (e.displayName = a[t]), e;
            }
            function d(t) {
                var e = function (e) {
                    var r = (0, i.A)(),
                        o = e.value,
                        a = e.children,
                        l = (0, n.__rest)(e, ["value", "children"]),
                        u = r[t](o, l);
                    if ("function" == typeof a) return a(u);
                    var d = r.textComponent || s.Fragment;
                    return s.createElement(d, null, u);
                };
                return (e.displayName = o[t]), e;
            }
            (l.displayName = "FormattedNumberParts"),
                (l.displayName = "FormattedNumberParts");
            var c = d("formatDate");
            d("formatTime"),
                d("formatNumber"),
                d("formatList"),
                d("formatDisplayName"),
                u("formatDate"),
                u("formatTime");
        },
        5884: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let o = r(473)._(r(16092));
            function a(t, e) {
                var r;
                let a = {};
                "function" == typeof t && (a.loader = t);
                let n = { ...a, ...e };
                return (0, o.default)({
                    ...n,
                    modules:
                        null == (r = n.loadableGenerated) ? void 0 : r.modules,
                });
            }
            ("function" == typeof e.default ||
                ("object" == typeof e.default && null !== e.default)) &&
                void 0 === e.default.__esModule &&
                (Object.defineProperty(e.default, "__esModule", { value: !0 }),
                Object.assign(e.default, e),
                (t.exports = e.default));
        },
        16092: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let o = r(33008),
                a = r(66268),
                n = r(52283);
            function s(t) {
                return { default: t && "default" in t ? t.default : t };
            }
            r(81382);
            let i = {
                    loader: () => Promise.resolve(s(() => null)),
                    loading: null,
                    ssr: !0,
                },
                l = function (t) {
                    let e = { ...i, ...t },
                        r = (0, a.lazy)(() => e.loader().then(s)),
                        l = e.loading;
                    function u(t) {
                        let s = l
                                ? (0, o.jsx)(l, {
                                      isLoading: !0,
                                      pastDelay: !0,
                                      error: null,
                                  })
                                : null,
                            i = !e.ssr || !!e.loading,
                            u = i ? a.Suspense : a.Fragment,
                            d = e.ssr
                                ? (0, o.jsxs)(o.Fragment, {
                                      children: [null, (0, o.jsx)(r, { ...t })],
                                  })
                                : (0, o.jsx)(n.BailoutToCSR, {
                                      reason: "next/dynamic",
                                      children: (0, o.jsx)(r, { ...t }),
                                  });
                        return (0, o.jsx)(u, {
                            ...(i ? { fallback: s } : {}),
                            children: d,
                        });
                    }
                    return (u.displayName = "LoadableComponent"), u;
                };
        },
        21970: (t, e, r) => {
            "use strict";
            r.d(e, { EntitiesPage: () => c });
            var o = r(33008),
                a = r(97531),
                n = r(17846),
                s = r(66268),
                i = r(12898),
                l = r(79169),
                u = r(90848);
            let d = {
                    "new-releases": u.t.NEW_RELEASES,
                    "editorial-new-releases": u.t.EDITORIAL_NEW_RELEASES,
                    "personal-artists": u.t.PERSONAL_ARTISTS,
                    "new-stars-artists": u.t.NEW_STARS_ARTISTS,
                    "editorial-artists": u.t.EDITORIAL_ARTISTS,
                    "new-playlists": u.t.NEW_PLAYLISTS,
                    "editorial-compilation": u.t.EDITORIAL_COMPILATION,
                    "non-music-editorial-compilation":
                        u.t.EDITORIAL_COMPILATION,
                    "chart-albums": u.t.CHART_ALBUMS,
                    "mixes-grid": u.t.MIXES_GRID,
                    "mixes-music": u.t.MIXES_MUSIC,
                },
                c = (0, a.PA)((t) => {
                    let { blockType: e, blockId: r } = t,
                        { landingBlockEntities: a } = (0, l.Pjs)();
                    (0, s.useEffect)(
                        () => () => {
                            a.reset();
                        },
                        [a, e, r],
                    ),
                        (0, l.Jzs)(a.loadingState === l.GuX.RESOLVE);
                    let u = d[e];
                    return (
                        (a.isNotFound || !u) && (0, n.notFound)(),
                        (0, o.jsx)(l.nVz, {
                            pageId: l._Q$.ENTITIES,
                            children: (0, o.jsx)(l.FoH, {
                                blockId: ""
                                    .concat(l.hf$.DISCOVERY_BLOCK, "-")
                                    .concat(r),
                                blockIdForFrom: ""
                                    .concat(l.hf$.DISCOVERY_BLOCK, "-")
                                    .concat(r),
                                blockPosX: 1,
                                blockPosY: 1,
                                blockType: u,
                                objectsCount: a.items.length,
                                children: (0, o.jsx)(i.bX, {
                                    blockType: u,
                                    blockId: r,
                                }),
                            }),
                        })
                    );
                });
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
        27618: (t, e, r) => {
            "use strict";
            r.d(e, { NotFound: () => p });
            var o = r(33008),
                a = r(85896),
                n = r(97531),
                s = r(96560),
                i = r(44189),
                l = r(78016),
                u = r(77868),
                d = r(79169),
                c = r(18740),
                m = r(66268),
                f = r(26271),
                _ = r.n(f);
            let p = (0, n.PA)((t) => {
                let {
                        className: e,
                        title: r,
                        description: n,
                        iconVariant: f = "musicLogo",
                        iconClassName: p,
                        iconSize: N,
                    } = t,
                    { contentRef: b } = (0, d.gKY)(),
                    v = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: x } = (0, d.D5F)(v);
                return (
                    (0, d.NBO)(!0),
                    !(function () {
                        let { location: t } = (0, d.Pjs)();
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
                    (0, o.jsxs)("div", {
                        className: (0, a.$)(
                            _().root,
                            { [_().root_desktop]: !b },
                            e,
                        ),
                        children: [
                            (0, o.jsx)(c.Lh, {
                                withBackwardFallback: "/",
                                className: _().navigation,
                                withForwardControl: !1,
                            }),
                            (0, o.jsxs)("div", {
                                className: _().content,
                                children: [
                                    (0, o.jsx)(l.Icon, {
                                        className: (0, a.$)(_().icon, p),
                                        variant: f,
                                        size: N,
                                    }),
                                    (0, o.jsx)(u.Heading, {
                                        className: (0, a.$)(
                                            _().title,
                                            _().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            r ||
                                            (0, o.jsx)(s.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, o.jsx)(u.Caption, {
                                        className: (0, a.$)(
                                            _().text,
                                            _().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            n ||
                                            (0, o.jsx)(s.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, o.jsx)(i.Button, {
                                        onClick: x,
                                        className: _().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, o.jsx)(u.Caption, {
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
        35233: (t, e, r) => {
            "use strict";
            r.d(e, { M: () => o.NotFound });
            var o = r(27618);
        },
        52283: (t, e, r) => {
            "use strict";
            function o(t) {
                let { reason: e, children: r } = t;
                return r;
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
                Object.defineProperty(e, "BailoutToCSR", {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }),
                r(32975);
        },
        58212: (t, e, r) => {
            Promise.resolve().then(r.bind(r, 99737)),
                Promise.resolve().then(r.bind(r, 21970));
        },
        74375: (t, e, r) => {
            "use strict";
            r.d(e, { default: () => a.a });
            var o = r(5884),
                a = r.n(o);
        },
        81382: (t, e, r) => {
            "use strict";
            function o(t) {
                let { moduleIds: e } = t;
                return null;
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
                Object.defineProperty(e, "PreloadChunks", {
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
        99737: (t, e, r) => {
            "use strict";
            r.d(e, { EntitiesNotFoundPage: () => l });
            var o = r(33008),
                a = r(97531),
                n = r(66268),
                s = r(35233),
                i = r(79169);
            let l = (0, a.PA)(() => {
                let { landingBlockEntities: t } = (0, i.Pjs)();
                return (
                    (0, n.useEffect)(
                        () => () => {
                            t.reset();
                        },
                        [t],
                    ),
                    (0, o.jsx)(s.M, {})
                );
            });
        },
    },
    (t) => {
        t.O(
            0,
            [
                7098, 8282, 9712, 5271, 9775, 7309, 8712, 8004, 9284, 7509,
                1709, 4397, 1311, 7764, 6706, 2089, 2140, 996, 4236, 6728, 3949,
                9169, 8740, 9615, 3588, 2732, 1744, 4204, 7747, 4078, 9718,
                4760, 8747, 5765, 2898, 9902, 5598, 7358,
            ],
            () => t((t.s = 58212)),
        ),
            (_N_E = t.O());
    },
]);
