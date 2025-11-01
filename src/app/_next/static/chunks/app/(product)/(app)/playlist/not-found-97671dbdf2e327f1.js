(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1784],
    {
        12627: (e) => {
            e.exports = {
                root: "PlaylistPersonalDummyPage_root__tGxHG",
                cover: "PlaylistPersonalDummyPage_cover__XcCD1",
                title: "PlaylistPersonalDummyPage_title__ZSf9O",
                important: "PlaylistPersonalDummyPage_important__uEHGe",
                text: "PlaylistPersonalDummyPage_text__ci30d",
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
        27618: (e, s, o) => {
            "use strict";
            o.d(s, { NotFound: () => c });
            var i = o(33008),
                n = o(85896),
                r = o(97531),
                t = o(96560),
                l = o(44189),
                d = o(78016),
                m = o(77868),
                P = o(79169),
                a = o(18740),
                v = o(66268),
                h = o(26271),
                b = o.n(h);
            let c = (0, r.PA)((e) => {
                let {
                        className: s,
                        title: o,
                        description: r,
                        iconVariant: h = "musicLogo",
                        iconClassName: c,
                        iconSize: _,
                    } = e,
                    { contentRef: u } = (0, P.gKY)(),
                    p = (0, P.ZpR)(P.Zyd.main.href);
                (0, P.LZB)();
                let { handleNavigateToMain: x } = (0, P.D5F)(p);
                return (
                    (0, P.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, P.Pjs)();
                        (0, v.useEffect)(
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
                        className: (0, n.$)(
                            b().root,
                            { [b().root_desktop]: !u },
                            s,
                        ),
                        children: [
                            (0, i.jsx)(a.Lh, {
                                withBackwardFallback: "/",
                                className: b().navigation,
                                withForwardControl: !1,
                            }),
                            (0, i.jsxs)("div", {
                                className: b().content,
                                children: [
                                    (0, i.jsx)(d.Icon, {
                                        className: (0, n.$)(b().icon, c),
                                        variant: h,
                                        size: _,
                                    }),
                                    (0, i.jsx)(m.Heading, {
                                        className: (0, n.$)(
                                            b().title,
                                            b().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            o ||
                                            (0, i.jsx)(t.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, i.jsx)(m.Caption, {
                                        className: (0, n.$)(
                                            b().text,
                                            b().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            r ||
                                            (0, i.jsx)(t.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, i.jsx)(l.Button, {
                                        onClick: x,
                                        className: b().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, i.jsx)(m.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, i.jsx)(t.A, {
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
        49077: (e, s, o) => {
            "use strict";
            o.d(s, { PlaylistPersonalDummyPage: () => a });
            var i = o(33008),
                n = o(85896),
                r = o(97531),
                t = o(77868),
                l = o(79169),
                d = o(18740),
                m = o(12627),
                P = o.n(m);
            let a = (0, r.PA)(() => {
                let {
                    playlistPersonal: {
                        dummyCoverUrl: e,
                        dummyDescription: s,
                        title: o,
                    },
                } = (0, l.Pjs)();
                return (0, i.jsxs)("div", {
                    className: P().root,
                    children: [
                        (0, i.jsx)(d.Y9, {}),
                        (0, i.jsx)(d.BW, {
                            src: e,
                            size: 200,
                            fit: "cover",
                            withAvatarReplace: !0,
                            "aria-hidden": !0,
                            className: P().cover,
                        }),
                        o &&
                            (0, i.jsx)(t.Heading, {
                                className: (0, n.$)(P().title, P().important),
                                variant: "h1",
                                size: "xs",
                                children: o,
                            }),
                        s &&
                            (0, i.jsx)(t.Caption, {
                                className: (0, n.$)(P().text, P().important),
                                variant: "span",
                                type: "text",
                                size: "l",
                                weight: "normal",
                                children: s,
                            }),
                    ],
                });
            });
        },
        50810: (e, s, o) => {
            Promise.resolve().then(o.bind(o, 41458)),
                Promise.resolve().then(o.bind(o, 80922)),
                Promise.resolve().then(o.bind(o, 49077)),
                Promise.resolve().then(o.bind(o, 95985)),
                Promise.resolve().then(o.bind(o, 8910)),
                Promise.resolve().then(o.bind(o, 39500)),
                Promise.resolve().then(o.bind(o, 31978)),
                Promise.resolve().then(o.bind(o, 12005)),
                Promise.resolve().then(o.bind(o, 12327)),
                Promise.resolve().then(o.bind(o, 71562)),
                Promise.resolve().then(o.bind(o, 39900)),
                Promise.resolve().then(o.bind(o, 62565)),
                Promise.resolve().then(o.bind(o, 83641)),
                Promise.resolve().then(o.bind(o, 88081)),
                Promise.resolve().then(o.bind(o, 60862)),
                Promise.resolve().then(o.bind(o, 2294)),
                Promise.resolve().then(o.bind(o, 65297)),
                Promise.resolve().then(o.bind(o, 23197)),
                Promise.resolve().then(o.bind(o, 86943)),
                Promise.resolve().then(o.bind(o, 27575)),
                Promise.resolve().then(o.bind(o, 45019)),
                Promise.resolve().then(o.bind(o, 76808)),
                Promise.resolve().then(o.bind(o, 84651)),
                Promise.resolve().then(o.bind(o, 18674)),
                Promise.resolve().then(o.bind(o, 65930)),
                Promise.resolve().then(o.bind(o, 45576)),
                Promise.resolve().then(o.bind(o, 75142)),
                Promise.resolve().then(o.bind(o, 46791)),
                Promise.resolve().then(o.bind(o, 22851)),
                Promise.resolve().then(o.bind(o, 11959)),
                Promise.resolve().then(o.bind(o, 72775)),
                Promise.resolve().then(o.bind(o, 53350)),
                Promise.resolve().then(o.bind(o, 41170)),
                Promise.resolve().then(o.bind(o, 63838)),
                Promise.resolve().then(o.bind(o, 58977)),
                Promise.resolve().then(o.bind(o, 76801)),
                Promise.resolve().then(o.bind(o, 59544)),
                Promise.resolve().then(o.bind(o, 72925)),
                Promise.resolve().then(o.bind(o, 11960)),
                Promise.resolve().then(o.bind(o, 51229)),
                Promise.resolve().then(o.bind(o, 38592)),
                Promise.resolve().then(o.bind(o, 9586)),
                Promise.resolve().then(o.bind(o, 69458)),
                Promise.resolve().then(o.bind(o, 29418)),
                Promise.resolve().then(o.bind(o, 98200)),
                Promise.resolve().then(o.bind(o, 12170)),
                Promise.resolve().then(o.bind(o, 60722)),
                Promise.resolve().then(o.bind(o, 83958)),
                Promise.resolve().then(o.bind(o, 67190)),
                Promise.resolve().then(o.bind(o, 56770)),
                Promise.resolve().then(o.bind(o, 26836)),
                Promise.resolve().then(o.bind(o, 94954)),
                Promise.resolve().then(o.bind(o, 66423)),
                Promise.resolve().then(o.bind(o, 31014)),
                Promise.resolve().then(o.bind(o, 46532)),
                Promise.resolve().then(o.bind(o, 40706)),
                Promise.resolve().then(o.bind(o, 6726)),
                Promise.resolve().then(o.bind(o, 56973)),
                Promise.resolve().then(o.bind(o, 92998)),
                Promise.resolve().then(o.bind(o, 93214)),
                Promise.resolve().then(o.bind(o, 76084)),
                Promise.resolve().then(o.bind(o, 80677)),
                Promise.resolve().then(o.bind(o, 33247)),
                Promise.resolve().then(o.bind(o, 34610)),
                Promise.resolve().then(o.bind(o, 45789)),
                Promise.resolve().then(o.bind(o, 89711)),
                Promise.resolve().then(o.bind(o, 25154)),
                Promise.resolve().then(o.bind(o, 28159)),
                Promise.resolve().then(o.bind(o, 13050)),
                Promise.resolve().then(o.bind(o, 79400)),
                Promise.resolve().then(o.bind(o, 30039)),
                Promise.resolve().then(o.bind(o, 71228)),
                Promise.resolve().then(o.bind(o, 2054)),
                Promise.resolve().then(o.bind(o, 16561)),
                Promise.resolve().then(o.bind(o, 78419)),
                Promise.resolve().then(o.bind(o, 25486)),
                Promise.resolve().then(o.bind(o, 35217)),
                Promise.resolve().then(o.bind(o, 26595)),
                Promise.resolve().then(o.bind(o, 78221)),
                Promise.resolve().then(o.bind(o, 32772)),
                Promise.resolve().then(o.bind(o, 70065)),
                Promise.resolve().then(o.bind(o, 60374)),
                Promise.resolve().then(o.bind(o, 4520)),
                Promise.resolve().then(o.bind(o, 28558)),
                Promise.resolve().then(o.bind(o, 21509)),
                Promise.resolve().then(o.bind(o, 52224)),
                Promise.resolve().then(o.bind(o, 25379)),
                Promise.resolve().then(o.bind(o, 97053)),
                Promise.resolve().then(o.bind(o, 70106)),
                Promise.resolve().then(o.bind(o, 83192)),
                Promise.resolve().then(o.bind(o, 49562)),
                Promise.resolve().then(o.bind(o, 95007)),
                Promise.resolve().then(o.bind(o, 86067)),
                Promise.resolve().then(o.bind(o, 67556)),
                Promise.resolve().then(o.bind(o, 5572)),
                Promise.resolve().then(o.bind(o, 27618));
        },
        95985: (e, s, o) => {
            "use strict";
            o.d(s, { PlaylistPersonalPage: () => m });
            var i = o(33008),
                n = o(97531),
                r = o(17846),
                t = o(66268),
                l = o(79169),
                d = o(49077);
            let m = (0, n.PA)((e) => {
                let { params: s, searchParams: o } = e,
                    { playlistPersonal: n } = (0, l.Pjs)(),
                    m = n.getUrl(o);
                if (
                    ((0, t.useEffect)(() => {
                        n.isNeededToLoad &&
                            n.getPlaylistPersonalDetails(s.playlistId);
                    }, [n.isNeededToLoad, s.playlistId, n]),
                    (0, t.useEffect)(
                        () => () => {
                            n.reset();
                        },
                        [n],
                    ),
                    (0, l.Jzs)(n.isResolved),
                    (n.isNotFound || n.isRejected) && (0, r.notFound)(),
                    n.isResolved && !n.isReady)
                )
                    return (
                        n.dummyDescription || (0, r.notFound)(),
                        (0, i.jsx)(d.PlaylistPersonalDummyPage, {})
                    );
                n.isResolved && n.isReady && (0, r.redirect)(m);
            });
        },
    },
    (e) => {
        e.O(
            0,
            [
                7098, 8282, 9712, 5271, 6451, 9775, 1311, 7764, 6706, 996, 4236,
                9169, 8740, 9902, 5598, 7358,
            ],
            () => e((e.s = 50810)),
        ),
            (_N_E = e.O());
    },
]);
