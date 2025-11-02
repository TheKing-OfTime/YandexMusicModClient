(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1156],
    {
        2614: (t, o, e) => {
            "use strict";
            e.d(o, { SortDropdown: () => h });
            var s = e(33008),
                r = e(97531),
                n = e(66268),
                a = e(96560),
                i = e(75729),
                d = e(42213),
                l = e(44189),
                c = e(89492),
                u = e(78016),
                _ = e(77868),
                x = e(79169),
                p = e(25585),
                m = e(3417),
                N = e.n(m);
            let j = {
                    [i.g.RATING]: (0, s.jsx)(a.A, {
                        id: "sort.sort-by-rating",
                    }),
                    [i.g.YEAR]: (0, s.jsx)(a.A, { id: "sort.sort-by-year" }),
                },
                h = (0, r.PA)((t) => {
                    var o;
                    let { sortModel: e, onSort: r } = t,
                        {
                            settings: { isMobile: m },
                        } = (0, x.Pjs)(),
                        h = (0, d.c)((t) => {
                            (0, p.W)(t.id) &&
                                e.sortBy !== t.id &&
                                (e.setSortBy(t.id), r());
                        }),
                        g = (0, n.useMemo)(
                            () =>
                                m
                                    ? (0, s.jsx)(l.Button, {
                                          radius: "xxxl",
                                          className: N().button,
                                          icon: (0, s.jsx)(u.Icon, {
                                              variant: "filter",
                                              size: "xs",
                                          }),
                                      })
                                    : (0, s.jsxs)(l.Button, {
                                          radius: "xxxl",
                                          className: N().button,
                                          children: [
                                              (0, s.jsx)(_.Caption, {
                                                  variant: "span",
                                                  size: "m",
                                                  weight: "medium",
                                                  children: e.sortBy
                                                      ? j[e.sortBy]
                                                      : (0, s.jsx)(a.A, {
                                                            id: "sort.select-filter",
                                                        }),
                                              }),
                                              (0, s.jsx)(u.Icon, {
                                                  size: "xxs",
                                                  variant: "arrowDown",
                                              }),
                                          ],
                                      }),
                            [m, e.sortBy],
                        );
                    return (0, s.jsx)(c.ms, {
                        placement: m ? "bottom" : "top",
                        isMobile: m,
                        strategy: "fixed",
                        className: N().root,
                        onSelect: h,
                        reference: g,
                        offsetOptions: { mainAxis: 10, crossAxis: -50 },
                        defaultValue: null != (o = e.sortBy) ? o : i.g.YEAR,
                        containerClassName: N().container,
                        header: m
                            ? (0, s.jsx)("div", { className: N().header })
                            : void 0,
                        children: Object.values(i.g).map((t) =>
                            (0, s.jsx)(c.c$, { id: t, label: j[t] }, t),
                        ),
                    });
                });
        },
        3417: (t) => {
            t.exports = {
                root: "SortDropdown_root__d1JmQ",
                button: "SortDropdown_button__SjTI7",
                header: "SortDropdown_header__kj8yV",
                container: "SortDropdown_container__dyVF_",
            };
        },
        12518: (t, o, e) => {
            Promise.resolve().then(e.bind(e, 43228));
        },
        19964: (t, o, e) => {
            "use strict";
            var s;
            e.d(o, { x: () => s }),
                (function (t) {
                    (t.ASC = "asc"), (t.DESC = "desc");
                })(s || (s = {}));
        },
        25585: (t, o, e) => {
            "use strict";
            e.d(o, { W: () => r });
            var s = e(75729);
            let r = (t) => !!t && (t === s.g.RATING || t === s.g.YEAR);
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
        27618: (t, o, e) => {
            "use strict";
            e.d(o, { NotFound: () => m });
            var s = e(33008),
                r = e(85896),
                n = e(97531),
                a = e(96560),
                i = e(44189),
                d = e(78016),
                l = e(77868),
                c = e(79169),
                u = e(18740),
                _ = e(66268),
                x = e(26271),
                p = e.n(x);
            let m = (0, n.PA)((t) => {
                let {
                        className: o,
                        title: e,
                        description: n,
                        iconVariant: x = "musicLogo",
                        iconClassName: m,
                        iconSize: N,
                    } = t,
                    { contentRef: j } = (0, c.gKY)(),
                    h = (0, c.ZpR)(c.Zyd.main.href);
                (0, c.LZB)();
                let { handleNavigateToMain: g } = (0, c.D5F)(h);
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
                        className: (0, r.$)(
                            p().root,
                            { [p().root_desktop]: !j },
                            o,
                        ),
                        children: [
                            (0, s.jsx)(u.Lh, {
                                withBackwardFallback: "/",
                                className: p().navigation,
                                withForwardControl: !1,
                            }),
                            (0, s.jsxs)("div", {
                                className: p().content,
                                children: [
                                    (0, s.jsx)(d.Icon, {
                                        className: (0, r.$)(p().icon, m),
                                        variant: x,
                                        size: N,
                                    }),
                                    (0, s.jsx)(l.Heading, {
                                        className: (0, r.$)(
                                            p().title,
                                            p().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            e ||
                                            (0, s.jsx)(a.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, s.jsx)(l.Caption, {
                                        className: (0, r.$)(
                                            p().text,
                                            p().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            n ||
                                            (0, s.jsx)(a.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, s.jsx)(i.Button, {
                                        onClick: g,
                                        className: p().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, s.jsx)(l.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, s.jsx)(a.A, {
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
        35233: (t, o, e) => {
            "use strict";
            e.d(o, { M: () => s.NotFound });
            var s = e(27618);
        },
        43228: (t, o, e) => {
            "use strict";
            e.r(o), e.d(o, { default: () => i });
            var s = e(33008),
                r = e(17846),
                n = e(25767),
                a = e(79169);
            let i = () => {
                let t = (0, r.useSearchParams)().get("labelId");
                return (
                    (t && (0, a.LLJ)(t)) || (0, r.notFound)(),
                    (0, s.jsx)(n.ac, { labelId: t })
                );
            };
        },
        99963: (t, o, e) => {
            "use strict";
            e.d(o, { useSort: () => i });
            var s = e(66268),
                r = e(75729),
                n = e(79169),
                a = e(25585);
            let i = (t) => {
                let { sortModel: o } = t,
                    e = (0, n.XJ9)();
                (0, s.useLayoutEffect)(() => {
                    let t = new URL(window.location.href).searchParams.get(
                        n.K3F.SORT,
                    );
                    t && (0, a.W)(t) ? o.setSortBy(t) : o.setSortBy(r.g.YEAR);
                }, [o]),
                    (0, s.useEffect)(() => {
                        if (o.sortBy) {
                            let t = (0, n.bJ)(n.K3F.SORT, o.sortBy);
                            t && e(t);
                        }
                    }, [e, o.sortBy]);
            };
        },
    },
    (t) => {
        t.O(
            0,
            [
                7098, 8282, 9712, 5271, 7309, 952, 9775, 1709, 9284, 8004, 9323,
                1311, 7764, 6706, 996, 4236, 9169, 8740, 9615, 3588, 2732, 4204,
                7747, 9718, 508, 7111, 5767, 9902, 5598, 7358,
            ],
            () => t((t.s = 12518)),
        ),
            (_N_E = t.O());
    },
]);
