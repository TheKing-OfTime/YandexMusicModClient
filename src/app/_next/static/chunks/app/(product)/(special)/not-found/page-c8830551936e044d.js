(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2717],
    {
        26271: (o) => {
            o.exports = {
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
        27618: (o, t, e) => {
            "use strict";
            e.d(t, { NotFound: () => x });
            var n = e(33008),
                s = e(85896),
                i = e(97531),
                a = e(96560),
                r = e(44189),
                d = e(78016),
                l = e(77868),
                _ = e(79169),
                c = e(18740),
                u = e(66268),
                p = e(26271),
                m = e.n(p);
            let x = (0, i.PA)((o) => {
                let {
                        className: t,
                        title: e,
                        description: i,
                        iconVariant: p = "musicLogo",
                        iconClassName: x,
                        iconSize: N,
                    } = o,
                    { contentRef: h } = (0, _.gKY)(),
                    v = (0, _.ZpR)(_.Zyd.main.href);
                (0, _.LZB)();
                let { handleNavigateToMain: F } = (0, _.D5F)(v);
                return (
                    (0, _.NBO)(!0),
                    !(function () {
                        let { location: o } = (0, _.Pjs)();
                        (0, u.useEffect)(
                            () => (
                                o.setNotFound(!0),
                                () => {
                                    o.setNotFound(!1);
                                }
                            ),
                            [o],
                        );
                    })(),
                    (0, n.jsxs)("div", {
                        className: (0, s.$)(
                            m().root,
                            { [m().root_desktop]: !h },
                            t,
                        ),
                        children: [
                            (0, n.jsx)(c.Lh, {
                                withBackwardFallback: "/",
                                className: m().navigation,
                                withForwardControl: !1,
                            }),
                            (0, n.jsxs)("div", {
                                className: m().content,
                                children: [
                                    (0, n.jsx)(d.Icon, {
                                        className: (0, s.$)(m().icon, x),
                                        variant: p,
                                        size: N,
                                    }),
                                    (0, n.jsx)(l.Heading, {
                                        className: (0, s.$)(
                                            m().title,
                                            m().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            e ||
                                            (0, n.jsx)(a.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, n.jsx)(l.Caption, {
                                        className: (0, s.$)(
                                            m().text,
                                            m().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            i ||
                                            (0, n.jsx)(a.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, n.jsx)(r.Button, {
                                        onClick: F,
                                        className: m().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, n.jsx)(l.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, n.jsx)(a.A, {
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
        94858: (o, t, e) => {
            Promise.resolve().then(e.bind(e, 63361)),
                Promise.resolve().then(e.bind(e, 96803)),
                Promise.resolve().then(e.bind(e, 63426)),
                Promise.resolve().then(e.bind(e, 44903)),
                Promise.resolve().then(e.bind(e, 40225)),
                Promise.resolve().then(e.bind(e, 72933)),
                Promise.resolve().then(e.bind(e, 27618));
        },
    },
    (o) => {
        o.O(
            0,
            [
                7098, 8282, 5271, 9712, 7309, 8712, 8400, 1709, 9284, 8004,
                9323, 8387, 9750, 6071, 7245, 2866, 9765, 952, 5952, 9775, 5794,
                1311, 7764, 6706, 2089, 2140, 996, 4236, 6728, 7508, 5675, 9169,
                8740, 9615, 3588, 2732, 1744, 4204, 4078, 9718, 4760, 8747,
                5765, 508, 3984, 3477, 7111, 3761, 7443, 9070, 9902, 5598, 7358,
            ],
            () => o((o.s = 94858)),
        ),
            (_N_E = o.O());
    },
]);
