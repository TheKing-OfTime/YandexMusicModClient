(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [677, 3414, 9573],
    {
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
        27618: (t, o, n) => {
            "use strict";
            n.d(o, { NotFound: () => N });
            var e = n(33008),
                s = n(85896),
                a = n(97531),
                i = n(96560),
                r = n(44189),
                _ = n(78016),
                d = n(77868),
                l = n(79169),
                c = n(18740),
                u = n(66268),
                p = n(26271),
                x = n.n(p);
            let N = (0, a.PA)((t) => {
                let {
                        className: o,
                        title: n,
                        description: a,
                        iconVariant: p = "musicLogo",
                        iconClassName: N,
                        iconSize: m,
                    } = t,
                    { contentRef: h } = (0, l.gKY)(),
                    F = (0, l.ZpR)(l.Zyd.main.href);
                (0, l.LZB)();
                let { handleNavigateToMain: g } = (0, l.D5F)(F);
                return (
                    (0, l.NBO)(!0),
                    !(function () {
                        let { location: t } = (0, l.Pjs)();
                        (0, u.useEffect)(
                            () => (
                                t.setNotFound(!0),
                                () => {
                                    t.setNotFound(!1);
                                }
                            ),
                            [t],
                        );
                    })(),
                    (0, e.jsxs)("div", {
                        className: (0, s.$)(
                            x().root,
                            { [x().root_desktop]: !h },
                            o,
                        ),
                        children: [
                            (0, e.jsx)(c.Lh, {
                                withBackwardFallback: "/",
                                className: x().navigation,
                                withForwardControl: !1,
                            }),
                            (0, e.jsxs)("div", {
                                className: x().content,
                                children: [
                                    (0, e.jsx)(_.Icon, {
                                        className: (0, s.$)(x().icon, N),
                                        variant: p,
                                        size: m,
                                    }),
                                    (0, e.jsx)(d.Heading, {
                                        className: (0, s.$)(
                                            x().title,
                                            x().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            n ||
                                            (0, e.jsx)(i.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, e.jsx)(d.Caption, {
                                        className: (0, s.$)(
                                            x().text,
                                            x().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            a ||
                                            (0, e.jsx)(i.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, e.jsx)(r.Button, {
                                        onClick: g,
                                        className: x().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, e.jsx)(d.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, e.jsx)(i.A, {
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
        60832: (t, o, n) => {
            Promise.resolve().then(n.bind(n, 27618));
        },
    },
    (t) => {
        t.O(
            0,
            [
                7098, 8282, 9712, 5271, 9775, 1311, 7764, 6706, 996, 4236, 9169,
                8740, 9902, 5598, 7358,
            ],
            () => t((t.s = 60832)),
        ),
            (_N_E = t.O());
    },
]);
