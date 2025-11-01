(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4004],
    {
        4115: (e) => {
            e.exports = {
                root: "PostAlbums_root__u2a1q",
                content: "PostAlbums_content__uMSez",
            };
        },
        23724: (e) => {
            e.exports = {
                root: "PostShimmer_root__MlLkY",
                top: "PostShimmer_top__ySpmZ",
                bottom: "PostShimmer_bottom__ajW_P",
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
        27618: (e, o, n) => {
            "use strict";
            n.d(o, { NotFound: () => c });
            var s = n(33008),
                i = n(85896),
                r = n(97531),
                t = n(96560),
                l = n(44189),
                d = n(78016),
                m = n(77868),
                h = n(79169),
                v = n(18740),
                P = n(66268),
                b = n(26271),
                a = n.n(b);
            let c = (0, r.PA)((e) => {
                let {
                        className: o,
                        title: n,
                        description: r,
                        iconVariant: b = "musicLogo",
                        iconClassName: c,
                        iconSize: _,
                    } = e,
                    { contentRef: x } = (0, h.gKY)(),
                    p = (0, h.ZpR)(h.Zyd.main.href);
                (0, h.LZB)();
                let { handleNavigateToMain: u } = (0, h.D5F)(p);
                return (
                    (0, h.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, h.Pjs)();
                        (0, P.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, s.jsxs)("div", {
                        className: (0, i.$)(
                            a().root,
                            { [a().root_desktop]: !x },
                            o,
                        ),
                        children: [
                            (0, s.jsx)(v.Lh, {
                                withBackwardFallback: "/",
                                className: a().navigation,
                                withForwardControl: !1,
                            }),
                            (0, s.jsxs)("div", {
                                className: a().content,
                                children: [
                                    (0, s.jsx)(d.Icon, {
                                        className: (0, i.$)(a().icon, c),
                                        variant: b,
                                        size: _,
                                    }),
                                    (0, s.jsx)(m.Heading, {
                                        className: (0, i.$)(
                                            a().title,
                                            a().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            n ||
                                            (0, s.jsx)(t.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, s.jsx)(m.Caption, {
                                        className: (0, i.$)(
                                            a().text,
                                            a().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            r ||
                                            (0, s.jsx)(t.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, s.jsx)(l.Button, {
                                        onClick: u,
                                        className: a().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, s.jsx)(m.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, s.jsx)(t.A, {
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
        30236: (e, o, n) => {
            "use strict";
            n.d(o, { SomethingWentWrong: () => _ });
            var s = n(33008),
                i = n(85896),
                r = n(97531),
                t = n(66268),
                l = n(73827),
                d = n(96560),
                m = n(44189),
                h = n(78016),
                v = n(77868),
                P = n(79169),
                b = n(18740),
                a = n(32468),
                c = n.n(a);
            let _ = (0, r.PA)((e) => {
                let { className: o, withBackwardControl: n = !0 } = e,
                    { formatMessage: r } = (0, l.A)(),
                    a = r({ id: "error-messages.something-went-wrong" });
                (0, P.CgZ)(a);
                let { sendRefreshEvent: _ } = (0, P.cYT)(),
                    x = (0, t.useCallback)(() => {
                        _(), (window.location.href = P.Zyd.main.href);
                    }, [_]),
                    { contentRef: p } = (0, P.gKY)();
                return (0, s.jsxs)("div", {
                    className: (0, i.$)(c().root, o),
                    children: [
                        n &&
                            (0, s.jsx)(b.Lh, {
                                withBackwardFallback: "/",
                                className: (0, i.$)(c().navigation, {
                                    [c().navigation_desktop]: !p,
                                }),
                                withForwardControl: !1,
                            }),
                        (0, s.jsxs)("div", {
                            className: (0, i.$)(c().content, {
                                [c().content_shrink]: !n,
                            }),
                            children: [
                                (0, s.jsx)(h.Icon, {
                                    className: c().icon,
                                    variant: "attention",
                                    size: "xxl",
                                }),
                                (0, s.jsx)(v.Heading, {
                                    className: (0, i.$)(
                                        c().title,
                                        c().important,
                                    ),
                                    variant: "h3",
                                    size: "xs",
                                    children: a,
                                }),
                                (0, s.jsxs)(v.Caption, {
                                    className: (0, i.$)(
                                        c().text,
                                        c().important,
                                    ),
                                    variant: "span",
                                    type: "text",
                                    size: "l",
                                    weight: "normal",
                                    children: [
                                        !1,
                                        (0, s.jsx)(d.A, {
                                            id: "page-error.try-to-restart-app",
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(m.Button, {
                                    onClick: x,
                                    className: c().button,
                                    role: "link",
                                    color: "secondary",
                                    size: "l",
                                    radius: "xxxl",
                                    children: (0, s.jsxs)(v.Caption, {
                                        type: "controls",
                                        variant: "span",
                                        size: "m",
                                        children: [
                                            !1,
                                            (0, s.jsx)(d.A, {
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
        31454: (e, o, n) => {
            Promise.resolve().then(n.bind(n, 52756)),
                Promise.resolve().then(n.bind(n, 41458)),
                Promise.resolve().then(n.bind(n, 80922)),
                Promise.resolve().then(n.bind(n, 54487)),
                Promise.resolve().then(n.bind(n, 91342)),
                Promise.resolve().then(n.bind(n, 21741)),
                Promise.resolve().then(n.bind(n, 77868)),
                Promise.resolve().then(n.bind(n, 80810)),
                Promise.resolve().then(n.bind(n, 57609)),
                Promise.resolve().then(n.bind(n, 82548)),
                Promise.resolve().then(n.bind(n, 92725)),
                Promise.resolve().then(n.bind(n, 91450)),
                Promise.resolve().then(n.bind(n, 60343)),
                Promise.resolve().then(n.bind(n, 2202)),
                Promise.resolve().then(n.bind(n, 89414)),
                Promise.resolve().then(n.bind(n, 59173)),
                Promise.resolve().then(n.bind(n, 75227)),
                Promise.resolve().then(n.bind(n, 55717)),
                Promise.resolve().then(n.bind(n, 86600)),
                Promise.resolve().then(n.bind(n, 73480)),
                Promise.resolve().then(n.bind(n, 55142)),
                Promise.resolve().then(n.bind(n, 37548)),
                Promise.resolve().then(n.bind(n, 70278)),
                Promise.resolve().then(n.bind(n, 40160)),
                Promise.resolve().then(n.bind(n, 70400)),
                Promise.resolve().then(n.bind(n, 93652)),
                Promise.resolve().then(n.bind(n, 47407)),
                Promise.resolve().then(n.bind(n, 31679)),
                Promise.resolve().then(n.bind(n, 46595)),
                Promise.resolve().then(n.bind(n, 33951)),
                Promise.resolve().then(n.bind(n, 80593)),
                Promise.resolve().then(n.bind(n, 13807)),
                Promise.resolve().then(n.bind(n, 72455)),
                Promise.resolve().then(n.bind(n, 64399)),
                Promise.resolve().then(n.bind(n, 81417)),
                Promise.resolve().then(n.bind(n, 22721)),
                Promise.resolve().then(n.bind(n, 49358)),
                Promise.resolve().then(n.bind(n, 80651)),
                Promise.resolve().then(n.bind(n, 70559)),
                Promise.resolve().then(n.bind(n, 23460)),
                Promise.resolve().then(n.bind(n, 26557)),
                Promise.resolve().then(n.bind(n, 37259)),
                Promise.resolve().then(n.bind(n, 30206)),
                Promise.resolve().then(n.bind(n, 78724)),
                Promise.resolve().then(n.bind(n, 97004)),
                Promise.resolve().then(n.bind(n, 33647)),
                Promise.resolve().then(n.bind(n, 68555)),
                Promise.resolve().then(n.bind(n, 86335)),
                Promise.resolve().then(n.bind(n, 38340)),
                Promise.resolve().then(n.bind(n, 57176)),
                Promise.resolve().then(n.bind(n, 144)),
                Promise.resolve().then(n.bind(n, 91919)),
                Promise.resolve().then(n.bind(n, 75658)),
                Promise.resolve().then(n.bind(n, 56395)),
                Promise.resolve().then(n.bind(n, 17999)),
                Promise.resolve().then(n.bind(n, 75926)),
                Promise.resolve().then(n.bind(n, 69686)),
                Promise.resolve().then(n.bind(n, 8910)),
                Promise.resolve().then(n.bind(n, 39500)),
                Promise.resolve().then(n.bind(n, 31978)),
                Promise.resolve().then(n.bind(n, 12005)),
                Promise.resolve().then(n.bind(n, 12327)),
                Promise.resolve().then(n.bind(n, 71562)),
                Promise.resolve().then(n.bind(n, 39900)),
                Promise.resolve().then(n.bind(n, 62565)),
                Promise.resolve().then(n.bind(n, 83641)),
                Promise.resolve().then(n.bind(n, 88081)),
                Promise.resolve().then(n.bind(n, 60862)),
                Promise.resolve().then(n.bind(n, 2294)),
                Promise.resolve().then(n.bind(n, 65297)),
                Promise.resolve().then(n.bind(n, 23197)),
                Promise.resolve().then(n.bind(n, 86943)),
                Promise.resolve().then(n.bind(n, 27575)),
                Promise.resolve().then(n.bind(n, 45019)),
                Promise.resolve().then(n.bind(n, 76808)),
                Promise.resolve().then(n.bind(n, 84651)),
                Promise.resolve().then(n.bind(n, 18674)),
                Promise.resolve().then(n.bind(n, 65930)),
                Promise.resolve().then(n.bind(n, 45576)),
                Promise.resolve().then(n.bind(n, 75142)),
                Promise.resolve().then(n.bind(n, 46791)),
                Promise.resolve().then(n.bind(n, 22851)),
                Promise.resolve().then(n.bind(n, 11959)),
                Promise.resolve().then(n.bind(n, 72775)),
                Promise.resolve().then(n.bind(n, 53350)),
                Promise.resolve().then(n.bind(n, 41170)),
                Promise.resolve().then(n.bind(n, 63838)),
                Promise.resolve().then(n.bind(n, 58977)),
                Promise.resolve().then(n.bind(n, 76801)),
                Promise.resolve().then(n.bind(n, 59544)),
                Promise.resolve().then(n.bind(n, 72925)),
                Promise.resolve().then(n.bind(n, 11960)),
                Promise.resolve().then(n.bind(n, 51229)),
                Promise.resolve().then(n.bind(n, 38592)),
                Promise.resolve().then(n.bind(n, 9586)),
                Promise.resolve().then(n.bind(n, 69458)),
                Promise.resolve().then(n.bind(n, 29418)),
                Promise.resolve().then(n.bind(n, 98200)),
                Promise.resolve().then(n.bind(n, 12170)),
                Promise.resolve().then(n.bind(n, 60722)),
                Promise.resolve().then(n.bind(n, 83958)),
                Promise.resolve().then(n.bind(n, 67190)),
                Promise.resolve().then(n.bind(n, 56770)),
                Promise.resolve().then(n.bind(n, 26836)),
                Promise.resolve().then(n.bind(n, 94954)),
                Promise.resolve().then(n.bind(n, 66423)),
                Promise.resolve().then(n.bind(n, 31014)),
                Promise.resolve().then(n.bind(n, 46532)),
                Promise.resolve().then(n.bind(n, 40706)),
                Promise.resolve().then(n.bind(n, 6726)),
                Promise.resolve().then(n.bind(n, 56973)),
                Promise.resolve().then(n.bind(n, 92998)),
                Promise.resolve().then(n.bind(n, 93214)),
                Promise.resolve().then(n.bind(n, 76084)),
                Promise.resolve().then(n.bind(n, 80677)),
                Promise.resolve().then(n.bind(n, 33247)),
                Promise.resolve().then(n.bind(n, 34610)),
                Promise.resolve().then(n.bind(n, 45789)),
                Promise.resolve().then(n.bind(n, 89711)),
                Promise.resolve().then(n.bind(n, 25154)),
                Promise.resolve().then(n.bind(n, 28159)),
                Promise.resolve().then(n.bind(n, 13050)),
                Promise.resolve().then(n.bind(n, 79400)),
                Promise.resolve().then(n.bind(n, 30039)),
                Promise.resolve().then(n.bind(n, 71228)),
                Promise.resolve().then(n.bind(n, 2054)),
                Promise.resolve().then(n.bind(n, 16561)),
                Promise.resolve().then(n.bind(n, 78419)),
                Promise.resolve().then(n.bind(n, 25486)),
                Promise.resolve().then(n.bind(n, 35217)),
                Promise.resolve().then(n.bind(n, 26595)),
                Promise.resolve().then(n.bind(n, 78221)),
                Promise.resolve().then(n.bind(n, 32772)),
                Promise.resolve().then(n.bind(n, 70065)),
                Promise.resolve().then(n.bind(n, 60374)),
                Promise.resolve().then(n.bind(n, 4520)),
                Promise.resolve().then(n.bind(n, 28558)),
                Promise.resolve().then(n.bind(n, 21509)),
                Promise.resolve().then(n.bind(n, 52224)),
                Promise.resolve().then(n.bind(n, 25379)),
                Promise.resolve().then(n.bind(n, 97053)),
                Promise.resolve().then(n.bind(n, 70106)),
                Promise.resolve().then(n.bind(n, 83192)),
                Promise.resolve().then(n.bind(n, 49562)),
                Promise.resolve().then(n.bind(n, 95007)),
                Promise.resolve().then(n.bind(n, 86067)),
                Promise.resolve().then(n.bind(n, 67556)),
                Promise.resolve().then(n.bind(n, 5572)),
                Promise.resolve().then(n.bind(n, 85598)),
                Promise.resolve().then(n.bind(n, 34302)),
                Promise.resolve().then(n.bind(n, 77887)),
                Promise.resolve().then(n.bind(n, 22682)),
                Promise.resolve().then(n.bind(n, 48684)),
                Promise.resolve().then(n.bind(n, 35123)),
                Promise.resolve().then(n.bind(n, 87884)),
                Promise.resolve().then(n.bind(n, 95068)),
                Promise.resolve().then(n.bind(n, 73011)),
                Promise.resolve().then(n.bind(n, 75706)),
                Promise.resolve().then(n.bind(n, 59618)),
                Promise.resolve().then(n.bind(n, 3886)),
                Promise.resolve().then(n.bind(n, 43634)),
                Promise.resolve().then(n.bind(n, 34200)),
                Promise.resolve().then(n.bind(n, 1627)),
                Promise.resolve().then(n.bind(n, 41460)),
                Promise.resolve().then(n.bind(n, 25680)),
                Promise.resolve().then(n.bind(n, 54793)),
                Promise.resolve().then(n.bind(n, 35111)),
                Promise.resolve().then(n.bind(n, 6735)),
                Promise.resolve().then(n.bind(n, 98205)),
                Promise.resolve().then(n.bind(n, 65276)),
                Promise.resolve().then(n.bind(n, 41507)),
                Promise.resolve().then(n.bind(n, 24984)),
                Promise.resolve().then(n.bind(n, 70504)),
                Promise.resolve().then(n.bind(n, 23845)),
                Promise.resolve().then(n.bind(n, 8110)),
                Promise.resolve().then(n.bind(n, 81416)),
                Promise.resolve().then(n.bind(n, 6925)),
                Promise.resolve().then(n.bind(n, 75618)),
                Promise.resolve().then(n.bind(n, 83894)),
                Promise.resolve().then(n.bind(n, 42589)),
                Promise.resolve().then(n.bind(n, 56106)),
                Promise.resolve().then(n.bind(n, 92796)),
                Promise.resolve().then(n.bind(n, 80858)),
                Promise.resolve().then(n.bind(n, 32850)),
                Promise.resolve().then(n.bind(n, 90242)),
                Promise.resolve().then(n.bind(n, 4112)),
                Promise.resolve().then(n.bind(n, 73756)),
                Promise.resolve().then(n.bind(n, 25474)),
                Promise.resolve().then(n.bind(n, 85878)),
                Promise.resolve().then(n.bind(n, 44156)),
                Promise.resolve().then(n.bind(n, 75958)),
                Promise.resolve().then(n.bind(n, 12183)),
                Promise.resolve().then(n.bind(n, 89913)),
                Promise.resolve().then(n.bind(n, 57323)),
                Promise.resolve().then(n.bind(n, 97698)),
                Promise.resolve().then(n.bind(n, 67342)),
                Promise.resolve().then(n.bind(n, 64960)),
                Promise.resolve().then(n.bind(n, 51838)),
                Promise.resolve().then(n.bind(n, 81304)),
                Promise.resolve().then(n.bind(n, 38742)),
                Promise.resolve().then(n.bind(n, 12332)),
                Promise.resolve().then(n.bind(n, 47676)),
                Promise.resolve().then(n.bind(n, 12952)),
                Promise.resolve().then(n.bind(n, 76532)),
                Promise.resolve().then(n.bind(n, 28395)),
                Promise.resolve().then(n.bind(n, 69614)),
                Promise.resolve().then(n.bind(n, 55487)),
                Promise.resolve().then(n.bind(n, 65710)),
                Promise.resolve().then(n.bind(n, 91442)),
                Promise.resolve().then(n.bind(n, 69332)),
                Promise.resolve().then(n.bind(n, 60951)),
                Promise.resolve().then(n.bind(n, 95045)),
                Promise.resolve().then(n.bind(n, 4367)),
                Promise.resolve().then(n.bind(n, 15336)),
                Promise.resolve().then(n.bind(n, 2097)),
                Promise.resolve().then(n.bind(n, 55675)),
                Promise.resolve().then(n.bind(n, 86134)),
                Promise.resolve().then(n.bind(n, 49120)),
                Promise.resolve().then(n.bind(n, 26078)),
                Promise.resolve().then(n.bind(n, 3218)),
                Promise.resolve().then(n.bind(n, 82658)),
                Promise.resolve().then(n.bind(n, 2406)),
                Promise.resolve().then(n.bind(n, 49247)),
                Promise.resolve().then(n.bind(n, 8681)),
                Promise.resolve().then(n.bind(n, 69594)),
                Promise.resolve().then(n.bind(n, 86722)),
                Promise.resolve().then(n.bind(n, 77104)),
                Promise.resolve().then(n.bind(n, 73682)),
                Promise.resolve().then(n.bind(n, 62066)),
                Promise.resolve().then(n.bind(n, 61258)),
                Promise.resolve().then(n.bind(n, 41035)),
                Promise.resolve().then(n.bind(n, 28160)),
                Promise.resolve().then(n.bind(n, 31922)),
                Promise.resolve().then(n.bind(n, 51886)),
                Promise.resolve().then(n.bind(n, 43701)),
                Promise.resolve().then(n.bind(n, 45228));
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
        35233: (e, o, n) => {
            "use strict";
            n.d(o, { M: () => s.NotFound });
            var s = n(27618);
        },
        40013: (e) => {
            e.exports = {
                root: "PostPlaylists_root__3tea0",
                content: "PostPlaylists_content__2fXI5",
            };
        },
        46052: (e) => {
            e.exports = {
                root: "PostPage_root__Orhf7",
                scrollableContainer: "PostPage_scrollableContainer__iV9Bo",
                scrollContainer: "PostPage_scrollContainer__zrIrH",
                important: "PostPage_important__qUlED",
                container: "PostPage_container__orSfz",
                shimmerTitle: "PostPage_shimmerTitle__EeFCD",
            };
        },
        60411: (e, o, n) => {
            "use strict";
            var s;
            n.d(o, { Q: () => s }),
                (function (e) {
                    (e.ALBUMS = "albums"),
                        (e.ARTISTS = "artists"),
                        (e.PLAYLISTS = "playlists");
                })(s || (s = {}));
        },
        66513: (e) => {
            e.exports = {
                root: "PostArtists_root__Zxmjq",
                content: "PostArtists_content__JzGOH",
            };
        },
        69686: (e, o, n) => {
            "use strict";
            n.d(o, { PostPage: () => L });
            var s = n(33008),
                i = n(85896),
                r = n(97531),
                t = n(17846),
                l = n(66268),
                d = n(60411),
                m = n(57747),
                h = n(91342),
                v = n(77868),
                P = n(83888),
                b = n(64143),
                a = n(79169),
                c = n(18740),
                _ = n(23724),
                x = n.n(_);
            let p = () =>
                (0, s.jsxs)("div", {
                    className: x().root,
                    children: [
                        (0, s.jsx)(h.Shimmer, {
                            radius: "l",
                            className: x().top,
                        }),
                        (0, s.jsx)(h.Shimmer, {
                            radius: "l",
                            className: x().bottom,
                        }),
                    ],
                });
            var u = n(46052),
                g = n.n(u),
                j = n(52732),
                N = n(4115),
                S = n.n(N);
            let W = (0, r.PA)((e) => {
                let { albums: o = [] } = e;
                return (0, s.jsx)("div", {
                    className: S().root,
                    children: (0, s.jsx)("div", {
                        className: S().content,
                        "aria-labelledby": "post-page-header",
                        tabIndex: 0,
                        children: o.map((e) =>
                            (0, s.jsx)(
                                j.aX,
                                {
                                    className: S().item,
                                    album: e,
                                    contentLinesCount: 3,
                                },
                                e.id,
                            ),
                        ),
                    }),
                });
            });
            var k = n(90317),
                C = n(66513),
                w = n.n(C);
            let y = (0, r.PA)((e) => {
                let { artists: o = [] } = e;
                return (0, s.jsx)("div", {
                    className: w().root,
                    children: (0, s.jsx)("div", {
                        className: w().content,
                        "aria-labelledby": "post-page-header",
                        tabIndex: 0,
                        children: o.map((e) =>
                            (0, s.jsx)(
                                k.ao,
                                {
                                    className: w().item,
                                    artist: e,
                                    contentLinesCount: 3,
                                },
                                e.id,
                            ),
                        ),
                    }),
                });
            });
            var F = n(45242),
                A = n(40013),
                f = n.n(A);
            let z = (0, r.PA)((e) => {
                    let { playlists: o = [] } = e;
                    return (0, s.jsx)("div", {
                        className: f().root,
                        children: (0, s.jsx)("div", {
                            className: f().content,
                            "aria-labelledby": "post-page-header",
                            tabIndex: 0,
                            children: o.map((e) =>
                                (0, s.jsx)(
                                    F.B6,
                                    {
                                        className: f().item,
                                        playlist: e,
                                        contentLinesCount: 3,
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    });
                }),
                L = (0, r.PA)((e) => {
                    let { promoId: o } = e,
                        { post: n } = (0, a.Pjs)(),
                        r = (0, a.W6M)(),
                        { contentScrollRef: _, setContentScrollRef: x } = (0,
                        a.gKY)();
                    (0, l.useEffect)(
                        () => () => {
                            n.reset();
                        },
                        [n],
                    ),
                        n.isNotFound && (0, t.notFound)(),
                        (0, a.Jzs)(n.isResolved);
                    let u = (0, l.useMemo)(() => {
                        if (n.isLoading) return (0, s.jsx)(p, {});
                        switch (n.promotionType) {
                            case d.Q.ARTISTS:
                                return (0, s.jsx)(y, { artists: n.artists });
                            case d.Q.ALBUMS:
                                return (0, s.jsx)(W, { albums: n.albums });
                            case d.Q.PLAYLISTS:
                                return (0, s.jsx)(z, {
                                    playlists: n.playlists,
                                });
                            default:
                                (0, t.notFound)();
                        }
                    }, [
                        n.albums,
                        n.artists,
                        n.isLoading,
                        n.playlists,
                        n.promotionType,
                    ]);
                    return (o &&
                        n.isNeededToLoad &&
                        (0, l.use)(n.getData({ promoId: o })),
                    n.isSomethingWrong)
                        ? (0, s.jsx)(P.w, {})
                        : (0, s.jsx)(a.nVz, {
                              pageId: a._Q$.POST,
                              children: (0, s.jsx)(b.hO, {
                                  scrollElement: _,
                                  outerTitle: n.title || void 0,
                                  children: (0, s.jsxs)("div", {
                                      className: g().root,
                                      children: [
                                          (0, s.jsx)(c.Y9, {
                                              variant: c.Vw.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: r.canBack,
                                              children: n.title
                                                  ? (0, s.jsx)(v.Heading, {
                                                        id: "post-header",
                                                        variant: "h2",
                                                        weight: "bold",
                                                        size: "xl",
                                                        lineClamp: 1,
                                                        children: n.title,
                                                    })
                                                  : (0, s.jsx)(h.Shimmer, {
                                                        className:
                                                            g().shimmerTitle,
                                                        radius: "l",
                                                    }),
                                          }),
                                          (0, s.jsx)(m.N, {
                                              containerClassName: (0, i.$)(
                                                  g().scrollContainer,
                                                  g().important,
                                              ),
                                              className:
                                                  g().scrollableContainer,
                                              ref: x,
                                              children: (0, s.jsx)("div", {
                                                  className: g().container,
                                                  children: u,
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                          });
                });
        },
        75926: (e, o, n) => {
            "use strict";
            n.d(o, { PostNotFoundPage: () => t });
            var s = n(33008),
                i = n(97531),
                r = n(35233);
            let t = (0, i.PA)(() => (0, s.jsx)(r.M, {}));
        },
        83888: (e, o, n) => {
            "use strict";
            n.d(o, { w: () => s.SomethingWentWrong });
            var s = n(30236);
        },
    },
    (e) => {
        e.O(
            0,
            [
                7098, 8282, 9712, 5271, 7309, 9775, 952, 6451, 1709, 1311, 7764,
                6706, 996, 4236, 9169, 8740, 9615, 3588, 2732, 1744, 4204, 7747,
                5242, 9902, 5598, 7358,
            ],
            () => e((e.s = 31454)),
        ),
            (_N_E = e.O());
    },
]);
