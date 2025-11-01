(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9846],
    {
        2117: (e, t, r) => {
            "use strict";
            r.d(t, { XU: () => m });
            var a,
                o,
                n = r(7144),
                i = r(66268),
                s = r(73827);
            !(function (e) {
                (e.formatDate = "FormattedDate"),
                    (e.formatTime = "FormattedTime"),
                    (e.formatNumber = "FormattedNumber"),
                    (e.formatList = "FormattedList"),
                    (e.formatDisplayName = "FormattedDisplayName");
            })(a || (a = {})),
                (function (e) {
                    (e.formatDate = "FormattedDateParts"),
                        (e.formatTime = "FormattedTimeParts"),
                        (e.formatNumber = "FormattedNumberParts"),
                        (e.formatList = "FormattedListParts");
                })(o || (o = {}));
            var l = function (e) {
                var t = (0, s.A)(),
                    r = e.value,
                    a = e.children,
                    o = (0, n.__rest)(e, ["value", "children"]);
                return a(t.formatNumberToParts(r, o));
            };
            function u(e) {
                var t = function (t) {
                    var r = (0, s.A)(),
                        a = t.value,
                        o = t.children,
                        i = (0, n.__rest)(t, ["value", "children"]),
                        l = "string" == typeof a ? new Date(a || 0) : a;
                    return o(
                        "formatDate" === e
                            ? r.formatDateToParts(l, i)
                            : r.formatTimeToParts(l, i),
                    );
                };
                return (t.displayName = o[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var r = (0, s.A)(),
                        a = t.value,
                        o = t.children,
                        l = (0, n.__rest)(t, ["value", "children"]),
                        u = r[e](a, l);
                    if ("function" == typeof o) return o(u);
                    var d = r.textComponent || i.Fragment;
                    return i.createElement(d, null, u);
                };
                return (t.displayName = a[e]), t;
            }
            (l.displayName = "FormattedNumberParts"),
                (l.displayName = "FormattedNumberParts");
            var m = d("formatDate");
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
                        return o;
                    },
                });
            let a = r(473)._(r(16092));
            function o(e, t) {
                var r;
                let o = {};
                "function" == typeof e && (o.loader = e);
                let n = { ...o, ...t };
                return (0, a.default)({
                    ...n,
                    modules:
                        null == (r = n.loadableGenerated) ? void 0 : r.modules,
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
                        return l;
                    },
                });
            let a = r(33008),
                o = r(66268),
                n = r(52283);
            function i(e) {
                return { default: e && "default" in e ? e.default : e };
            }
            r(81382);
            let s = {
                    loader: () => Promise.resolve(i(() => null)),
                    loading: null,
                    ssr: !0,
                },
                l = function (e) {
                    let t = { ...s, ...e },
                        r = (0, o.lazy)(() => t.loader().then(i)),
                        l = t.loading;
                    function u(e) {
                        let i = l
                                ? (0, a.jsx)(l, {
                                      isLoading: !0,
                                      pastDelay: !0,
                                      error: null,
                                  })
                                : null,
                            s = !t.ssr || !!t.loading,
                            u = s ? o.Suspense : o.Fragment,
                            d = t.ssr
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [null, (0, a.jsx)(r, { ...e })],
                                  })
                                : (0, a.jsx)(n.BailoutToCSR, {
                                      reason: "next/dynamic",
                                      children: (0, a.jsx)(r, { ...e }),
                                  });
                        return (0, a.jsx)(u, {
                            ...(s ? { fallback: i } : {}),
                            children: d,
                        });
                    }
                    return (u.displayName = "LoadableComponent"), u;
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
        27618: (e, t, r) => {
            "use strict";
            r.d(t, { NotFound: () => p });
            var a = r(33008),
                o = r(85896),
                n = r(97531),
                i = r(96560),
                s = r(44189),
                l = r(78016),
                u = r(77868),
                d = r(79169),
                m = r(18740),
                c = r(66268),
                f = r(26271),
                _ = r.n(f);
            let p = (0, n.PA)((e) => {
                let {
                        className: t,
                        title: r,
                        description: n,
                        iconVariant: f = "musicLogo",
                        iconClassName: p,
                        iconSize: v,
                    } = e,
                    { contentRef: N } = (0, d.gKY)(),
                    b = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: x } = (0, d.D5F)(b);
                return (
                    (0, d.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, d.Pjs)();
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
                    (0, a.jsxs)("div", {
                        className: (0, o.$)(
                            _().root,
                            { [_().root_desktop]: !N },
                            t,
                        ),
                        children: [
                            (0, a.jsx)(m.Lh, {
                                withBackwardFallback: "/",
                                className: _().navigation,
                                withForwardControl: !1,
                            }),
                            (0, a.jsxs)("div", {
                                className: _().content,
                                children: [
                                    (0, a.jsx)(l.Icon, {
                                        className: (0, o.$)(_().icon, p),
                                        variant: f,
                                        size: v,
                                    }),
                                    (0, a.jsx)(u.Heading, {
                                        className: (0, o.$)(
                                            _().title,
                                            _().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            r ||
                                            (0, a.jsx)(i.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, a.jsx)(u.Caption, {
                                        className: (0, o.$)(
                                            _().text,
                                            _().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            n ||
                                            (0, a.jsx)(i.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, a.jsx)(s.Button, {
                                        onClick: x,
                                        className: _().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, a.jsx)(u.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, a.jsx)(i.A, {
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
            r.d(t, { M: () => a.NotFound });
            var a = r(27618);
        },
        52283: (e, t, r) => {
            "use strict";
            function a(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "BailoutToCSR", {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }),
                r(32975);
        },
        67730: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => s });
            var a = r(33008),
                o = r(17846),
                n = r(48301),
                i = r(79169);
            let s = () => {
                let e = (0, o.useSearchParams)().get("artistId");
                return (
                    (e && (0, i.LLJ)(e)) || (0, o.notFound)(),
                    (0, a.jsx)(n.Wy, { artistId: e })
                );
            };
        },
        74375: (e, t, r) => {
            "use strict";
            r.d(t, { default: () => o.a });
            var a = r(5884),
                o = r.n(a);
        },
        81382: (e, t, r) => {
            "use strict";
            function a(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "PreloadChunks", {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }),
                r(33008),
                r(17229),
                r(6077),
                r(74964);
        },
        87674: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 67730));
        },
    },
    (e) => {
        e.O(
            0,
            [
                7098, 8282, 9712, 5271, 7309, 8712, 8004, 9284, 7509, 1709,
                4397, 952, 9775, 9149, 9323, 1311, 7764, 6706, 2089, 2140, 996,
                4236, 6728, 3949, 9152, 9169, 8740, 9615, 3588, 2732, 1744,
                4204, 7747, 4078, 9718, 4760, 8747, 5765, 2898, 508, 5897, 939,
                682, 9902, 5598, 7358,
            ],
            () => e((e.s = 87674)),
        ),
            (_N_E = e.O());
    },
]);
