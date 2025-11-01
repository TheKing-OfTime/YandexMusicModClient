(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1287, 9366],
    {
        2117: (e, r, t) => {
            "use strict";
            t.d(r, { XU: () => u });
            var i,
                n,
                s = t(7144),
                o = t(66268),
                l = t(73827);
            !(function (e) {
                (e.formatDate = "FormattedDate"),
                    (e.formatTime = "FormattedTime"),
                    (e.formatNumber = "FormattedNumber"),
                    (e.formatList = "FormattedList"),
                    (e.formatDisplayName = "FormattedDisplayName");
            })(i || (i = {})),
                (function (e) {
                    (e.formatDate = "FormattedDateParts"),
                        (e.formatTime = "FormattedTimeParts"),
                        (e.formatNumber = "FormattedNumberParts"),
                        (e.formatList = "FormattedListParts");
                })(n || (n = {}));
            var a = function (e) {
                var r = (0, l.A)(),
                    t = e.value,
                    i = e.children,
                    n = (0, s.__rest)(e, ["value", "children"]);
                return i(r.formatNumberToParts(t, n));
            };
            function d(e) {
                var r = function (r) {
                    var t = (0, l.A)(),
                        i = r.value,
                        n = r.children,
                        o = (0, s.__rest)(r, ["value", "children"]),
                        a = "string" == typeof i ? new Date(i || 0) : i;
                    return n(
                        "formatDate" === e
                            ? t.formatDateToParts(a, o)
                            : t.formatTimeToParts(a, o),
                    );
                };
                return (r.displayName = n[e]), r;
            }
            function m(e) {
                var r = function (r) {
                    var t = (0, l.A)(),
                        i = r.value,
                        n = r.children,
                        a = (0, s.__rest)(r, ["value", "children"]),
                        d = t[e](i, a);
                    if ("function" == typeof n) return n(d);
                    var m = t.textComponent || o.Fragment;
                    return o.createElement(m, null, d);
                };
                return (r.displayName = i[e]), r;
            }
            (a.displayName = "FormattedNumberParts"),
                (a.displayName = "FormattedNumberParts");
            var u = m("formatDate");
            m("formatTime"),
                m("formatNumber"),
                m("formatList"),
                m("formatDisplayName"),
                d("formatDate"),
                d("formatTime");
        },
        2202: (e, r, t) => {
            "use strict";
            t.d(r, { useOnPinClick: () => c });
            var i = t(33008),
                n = t(29318),
                s = t(66268),
                o = t(73827),
                l = t(79169),
                a = t(18740),
                d = t(97531),
                m = t(8228);
            let u = (0, d.PA)((e) => {
                    let { album: r, closeToast: t } = e,
                        n = (0, m.b)(r);
                    return (0, i.jsx)(a.k4, {
                        closeToast: t,
                        entityVariant: n,
                        coverUri: r.coverUri,
                        entityUrl: r.url,
                        entityTitle: r.title,
                        isPinned: r.isPinned,
                        radius: "s",
                    });
                }),
                c = (e) => {
                    let { user: r } = (0, l.Pjs)(),
                        { notify: t } = (0, l.lkh)(),
                        { formatMessage: d } = (0, o.A)(),
                        [m, c] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!r.isAuthorized)
                            return void t(
                                (0, i.jsx)(a.hT, {
                                    error: d({
                                        id: "authorization-messages.need-to-authorizate",
                                    }),
                                }),
                                { containerId: l.uQT.ERROR },
                            );
                        if (m) return;
                        let s = {
                            ...(0, n.HO)(e),
                            url: e.url,
                            isPinned: !e.isPinned,
                        };
                        c(!0);
                        let o = await e.togglePin();
                        c(!1),
                            o
                                ? t((0, i.jsx)(u, { album: s }), {
                                      containerId: l.uQT.INFO,
                                  })
                                : t(
                                      (0, i.jsx)(a.hT, {
                                          error: d({
                                              id: "error-messages.error-during-action",
                                          }),
                                      }),
                                      { containerId: l.uQT.ERROR },
                                  );
                    }, [e, d, t, m, r.isAuthorized]);
                };
        },
        8228: (e, r, t) => {
            "use strict";
            t.d(r, { b: () => s });
            var i = t(15479),
                n = t(18740);
            let s = (e) => {
                switch (e.type) {
                    case i._.PODCAST:
                        return n.cp.PODCAST;
                    case i._.AUDIOBOOK:
                        return n.cp.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return n.cp.FAIRY_TALE;
                    default:
                        return n.cp.ALBUM;
                }
            };
        },
        11856: (e) => {
            e.exports = {
                root: "MyMusicDownloadedTracksPageEmpty_root__LAXpY",
                icon: "MyMusicDownloadedTracksPageEmpty_icon__PDhk2",
                title: "MyMusicDownloadedTracksPageEmpty_title__g2w5R",
                text: "MyMusicDownloadedTracksPageEmpty_text__8RJFg",
            };
        },
        14502: (e) => {
            e.exports = {
                root: "SplashScreen_root__3jzFk",
                root_dark: "SplashScreen_root_dark__0OcZj",
                root_light: "SplashScreen_root_light__XAJTf",
                root_hidden: "SplashScreen_root_hidden__BO7tp",
                "fade-out": "SplashScreen_fade-out__uNMY4",
                video: "SplashScreen_video__wFSy5",
            };
        },
        15029: (e, r, t) => {
            "use strict";
            var i;
            t.d(r, { E: () => i }),
                (function (e) {
                    (e.KIDS = "kids"), (e.BOOKMATE = "bookmate");
                })(i || (i = {}));
        },
        16285: (e, r, t) => {
            "use strict";
            t.d(r, { t1: () => l.Chart, Iz: () => o, ws: () => n });
            var i = t(41028);
            let n = (e) =>
                (0, i.wg)({ position: e.position, progress: e.progress });
            var s = t(77059);
            let o = i.gK.model("Chart", {
                position: i.gK.maybe(i.gK.number),
                progress: i.gK.maybe(i.gK.enumeration(Object.values(s._))),
            });
            var l = t(47407);
        },
        28430: (e) => {
            e.exports = {
                root: "MyMusicDownloadedTracksPage_root__hZZwz",
                important: "MyMusicDownloadedTracksPage_important__QP_t0",
                pageContainer:
                    "MyMusicDownloadedTracksPage_pageContainer__qu3hF",
                footer: "MyMusicDownloadedTracksPage_footer__KI5OP",
                content: "MyMusicDownloadedTracksPage_content__Iz1WY",
                trackShimmer: "MyMusicDownloadedTracksPage_trackShimmer__MZgW3",
            };
        },
        30147: (e, r, t) => {
            "use strict";
            t.d(r, { f: () => h });
            var i = t(33008),
                n = t(29318),
                s = t(66268),
                o = t(73827),
                l = t(60866),
                a = t(42213),
                d = t(79169),
                m = t(18740),
                u = t(97531),
                c = t(8228);
            let v = (0, u.PA)((e) => {
                    let { album: r, closeToast: t, withLink: n } = e,
                        s = (0, c.b)(r);
                    return (0, i.jsx)(m.OM, {
                        closeToast: t,
                        entityVariant: s,
                        coverUri: r.coverUri,
                        entityUrl: r.url,
                        collectionUrl: "/collection",
                        entityTitle: r.title,
                        isLiked: r.isLiked,
                        withLink: n,
                    });
                }),
                h = () => {
                    let { notify: e } = (0, d.lkh)(),
                        [r, t] = (0, s.useState)(!1),
                        { formatMessage: u } = (0, o.A)();
                    return (0, a.c)(async (s) => {
                        let {
                            album: o,
                            withLink: a = !0,
                            withNotification: c = !0,
                        } = s;
                        if (r) return;
                        let h = {
                            ...(0, n.HO)(o),
                            url: o.url,
                            isLiked: !o.isLiked,
                        };
                        t(!0);
                        let b = await o.toggleLike();
                        t(!1),
                            c &&
                                (b === l.f.OK
                                    ? e(
                                          (0, i.jsx)(v, {
                                              withLink: a,
                                              album: h,
                                          }),
                                          { containerId: d.uQT.INFO },
                                      )
                                    : e(
                                          (0, i.jsx)(m.hT, {
                                              error: u({
                                                  id: "error-messages.error-during-action",
                                              }),
                                          }),
                                          { containerId: d.uQT.ERROR },
                                      ));
                    });
                };
        },
        30236: (e, r, t) => {
            "use strict";
            t.d(r, { SomethingWentWrong: () => P });
            var i = t(33008),
                n = t(85896),
                s = t(97531),
                o = t(66268),
                l = t(73827),
                a = t(96560),
                d = t(44189),
                m = t(78016),
                u = t(77868),
                c = t(79169),
                v = t(18740),
                h = t(32468),
                b = t.n(h);
            let P = (0, s.PA)((e) => {
                let { className: r, withBackwardControl: t = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    h = s({ id: "error-messages.something-went-wrong" });
                (0, c.CgZ)(h);
                let { sendRefreshEvent: P } = (0, c.cYT)(),
                    g = (0, o.useCallback)(() => {
                        P(), (window.location.href = c.Zyd.main.href);
                    }, [P]),
                    { contentRef: _ } = (0, c.gKY)();
                return (0, i.jsxs)("div", {
                    className: (0, n.$)(b().root, r),
                    children: [
                        t &&
                            (0, i.jsx)(v.Lh, {
                                withBackwardFallback: "/",
                                className: (0, n.$)(b().navigation, {
                                    [b().navigation_desktop]: !_,
                                }),
                                withForwardControl: !1,
                            }),
                        (0, i.jsxs)("div", {
                            className: (0, n.$)(b().content, {
                                [b().content_shrink]: !t,
                            }),
                            children: [
                                (0, i.jsx)(m.Icon, {
                                    className: b().icon,
                                    variant: "attention",
                                    size: "xxl",
                                }),
                                (0, i.jsx)(u.Heading, {
                                    className: (0, n.$)(
                                        b().title,
                                        b().important,
                                    ),
                                    variant: "h3",
                                    size: "xs",
                                    children: h,
                                }),
                                (0, i.jsxs)(u.Caption, {
                                    className: (0, n.$)(
                                        b().text,
                                        b().important,
                                    ),
                                    variant: "span",
                                    type: "text",
                                    size: "l",
                                    weight: "normal",
                                    children: [
                                        !1,
                                        (0, i.jsx)(a.A, {
                                            id: "page-error.try-to-restart-app",
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(d.Button, {
                                    onClick: g,
                                    className: b().button,
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
                                            (0, i.jsx)(a.A, {
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
        31610: (e) => {
            e.exports = { root: "MyMusicDownloadedTracksInfo_root__yIYHx" };
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
        36442: (e) => {
            e.exports = {
                root: "MyMusicDownloadedTracksPageHeader_root__2vfuc",
                container: "MyMusicDownloadedTracksPageHeader_container__hQ_wt",
                title: "MyMusicDownloadedTracksPageHeader_title__Ncn5X",
                stickyTitle:
                    "MyMusicDownloadedTracksPageHeader_stickyTitle__Efl0U",
                playButton:
                    "MyMusicDownloadedTracksPageHeader_playButton__seWgC",
                stickyPlayButton:
                    "MyMusicDownloadedTracksPageHeader_stickyPlayButton__JVicd",
                titleContainer:
                    "MyMusicDownloadedTracksPageHeader_titleContainer__rLAkS",
                staticHeader:
                    "MyMusicDownloadedTracksPageHeader_staticHeader__LSVC8",
                important: "MyMusicDownloadedTracksPageHeader_important__JIubq",
                stickyHeader:
                    "MyMusicDownloadedTracksPageHeader_stickyHeader__MuQh4",
            };
        },
        39959: (e, r, t) => {
            "use strict";
            t.d(r, { MyMusicDownloadedTracksPage: () => S });
            var i = t(33008),
                n = t(85896),
                s = t(97531),
                o = t(66268),
                l = t(73827),
                a = t(18064),
                d = t(48509),
                m = t(42213),
                u = t(47416),
                c = t(83888),
                v = t(64143),
                h = t(44078),
                b = t(79169),
                P = t(18740),
                g = t(28430),
                _ = t.n(g),
                p = t(96560),
                y = t(78016),
                f = t(77868),
                A = t(31610),
                k = t.n(A);
            let T = (0, s.PA)(() => {
                var e;
                let {
                        myMusic: { downloadedTracks: r },
                    } = (0, b.Pjs)(),
                    t = (0, i.jsx)(f.Caption, {
                        variant: "span",
                        size: "s",
                        weight: "medium",
                        "aria-hidden": !0,
                        children: "•",
                    }),
                    n = [];
                (null == (e = r.tracks) ? void 0 : e.length) &&
                    n.push(
                        (0, i.jsx)(f.Caption, {
                            variant: "span",
                            size: "s",
                            weight: "medium",
                            lineClamp: 1,
                            children: (0, i.jsx)(p.A, {
                                id: "entity-names.tracks-count",
                                values: { value: r.tracks.length },
                            }),
                        }),
                    );
                let s = Math.floor(r.tracksDurationInMinutes / 60),
                    l = Math.floor(r.tracksDurationInMinutes % 60);
                return (
                    (s || l) &&
                        (n.push(t),
                        n.push(
                            (0, i.jsx)(f.Caption, {
                                variant: "span",
                                size: "s",
                                weight: "medium",
                                children: (0, i.jsx)(p.A, {
                                    id: "time.hours-minutes",
                                    values: { hours: s, minutes: l },
                                }),
                            }),
                        )),
                    (0, i.jsx)("div", {
                        className: k().root,
                        children: n.map((e, r) =>
                            (0, o.cloneElement)(e, { key: r }),
                        ),
                    })
                );
            });
            var x = t(36442),
                C = t.n(x);
            let O = (0, s.PA)(() => {
                let { isScrolling: e } = (0, o.useContext)(P.B9),
                    r = (0, b.W6M)(),
                    {
                        myMusic: { downloadedTracks: t },
                        settings: { isMobile: n },
                        slam: s,
                    } = (0, b.Pjs)(),
                    { from: l } = (0, b.fyy)({
                        pageId: b._Q$.OWN_TRACKS,
                        blockId: b.UfI.TRACK_LIST,
                    }),
                    a = (0, b.PT7)(),
                    u = (0, b.brA)(),
                    { isPlaying: c, togglePlay: v } = (0, b.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: d.K.Various,
                                meta: { id: b._Q$.DOWNLOADS_TRACKS },
                                from: l,
                            },
                            entitiesData: t.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    h = (0, m.c)(() => {
                        a() || (v(), u(!c));
                    });
                return (0, i.jsx)("header", {
                    className: C().root,
                    "aria-hidden": e,
                    children: (0, i.jsxs)("div", {
                        className: C().container,
                        children: [
                            !s.isOfflineModeEnabled &&
                                r.canBack &&
                                (0, i.jsx)(P.Lh, {
                                    withForwardControl: !1,
                                    withBackwardControl: r.canBack,
                                    shouldFocusOnMount: !e,
                                    buttonSize: "xxs",
                                }),
                            (0, i.jsxs)("div", {
                                className: C().titleContainer,
                                children: [
                                    (0, i.jsx)(f.Heading, {
                                        variant: "h1",
                                        weight: "bold",
                                        size: "xs",
                                        lineClamp: 1,
                                        className: C().title,
                                        children: (0, i.jsx)(p.A, {
                                            id: "offline.downloaded-tracks",
                                        }),
                                    }),
                                    (0, i.jsx)(T, {}),
                                ],
                            }),
                            !t.isEmpty &&
                                (0, i.jsx)(P.DM, {
                                    withRipple: !0,
                                    buttonVariant: "default",
                                    radius: "xxxl",
                                    size: "s",
                                    color: "primary",
                                    iconSize: "xxs",
                                    isPlaying: c,
                                    onClick: h,
                                    className: C().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children:
                                        !n &&
                                        (0, i.jsx)(p.A, {
                                            id: "player-actions.listen",
                                        }),
                                }),
                        ],
                    }),
                });
            });
            var D = t(11856),
                M = t.n(D);
            let E = (0, s.PA)(() =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(O, {}),
                            (0, i.jsxs)("div", {
                                className: M().root,
                                children: [
                                    (0, i.jsx)(y.Icon, {
                                        className: M().icon,
                                        size: "l",
                                        variant: "download",
                                    }),
                                    (0, i.jsx)(f.Heading, {
                                        className: M().title,
                                        variant: "div",
                                        size: "xs",
                                        children: (0, i.jsx)(p.A, {
                                            id: "offline.downloaded-empty",
                                        }),
                                    }),
                                    (0, i.jsx)(f.Caption, {
                                        className: M().text,
                                        variant: "span",
                                        type: "controls",
                                        size: "l",
                                        weight: "normal",
                                        children: (0, i.jsx)(p.A, {
                                            id: "offline.download-for-offline",
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ),
                w = (0, s.PA)(() => {
                    let { isScrolling: e } = (0, o.useContext)(P.B9),
                        r = (0, b.W6M)(),
                        {
                            myMusic: { downloadedTracks: t },
                            settings: { isMobile: s },
                            slam: l,
                        } = (0, b.Pjs)(),
                        { from: a } = (0, b.fyy)({
                            pageId: b._Q$.OWN_TRACKS,
                            blockId: b.UfI.TRACK_LIST,
                        }),
                        u = (0, b.brA)(),
                        c = (0, b.PT7)(),
                        { isPlaying: v, togglePlay: h } = (0, b.Dx4)({
                            playContextParams: {
                                contextData: {
                                    type: d.K.Various,
                                    meta: { id: b._Q$.DOWNLOADS_TRACKS },
                                    from: a,
                                },
                                entitiesData: t.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        g = (0, m.c)(() => {
                            c() || (h(), u(!v));
                        });
                    return (0, i.jsx)(P.Y9, {
                        variant: P.Vw.COMPOSITE,
                        "aria-hidden": !e,
                        stickyChild: (0, i.jsxs)("div", {
                            className: C().container,
                            children: [
                                !l.isOfflineModeEnabled &&
                                    r.canBack &&
                                    (0, i.jsx)(P.Lh, {
                                        withForwardControl: !1,
                                        withBackwardControl: r.canBack,
                                        shouldFocusOnMount: !1,
                                        buttonSize: "xxs",
                                    }),
                                (0, i.jsx)(f.Heading, {
                                    variant: "h1",
                                    weight: "bold",
                                    size: "xs",
                                    lineClamp: 1,
                                    className: C().stickyTitle,
                                    children: (0, i.jsx)(p.A, {
                                        id: "offline.downloaded-tracks",
                                    }),
                                }),
                                !t.isEmpty &&
                                    (0, i.jsx)(P.DM, {
                                        withRipple: !0,
                                        buttonVariant: "default",
                                        radius: "xxxl",
                                        size: "s",
                                        color: "primary",
                                        iconSize: "xxs",
                                        isPlaying: v,
                                        onClick: g,
                                        className: (0, n.$)(C().playButton, {
                                            [C().stickyPlayButton]: !s,
                                        }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children:
                                            !s &&
                                            (0, i.jsx)(p.A, {
                                                id: "player-actions.listen",
                                            }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, n.$)(
                            C().stickyHeader,
                            C().important,
                        ),
                        staticClassName: (0, n.$)(
                            C().staticHeader,
                            C().important,
                        ),
                    });
                }),
                S = (0, s.PA)(() => {
                    var e;
                    let r = (0, b.jRO)(),
                        { contentScrollRef: t, setContentScrollRef: s } = (0,
                        b.gKY)(),
                        { formatMessage: g } = (0, l.A)(),
                        {
                            myMusic: { downloadedTracks: p },
                        } = (0, b.Pjs)(),
                        { from: y } = (0, b.fyy)({
                            pageId: b._Q$.OWN_TRACKS,
                            blockId: b.UfI.TRACK_LIST,
                        }),
                        f = (0, b.wZZ)(),
                        A = (0, m.c)(() => {
                            r.tracksController && p.getData(r.tracksController);
                        });
                    (0, u.L)(A),
                        (0, o.useEffect)(() => {
                            p.isNeededToLoad && A();
                        }, [p.isNeededToLoad, A]),
                        (0, o.useEffect)(
                            () => () => {
                                p.reset();
                            },
                            [p],
                        ),
                        (0, b.Jzs)(p.isResolved);
                    let k = (0, o.useMemo)(
                        () => ({
                            Header: () => (0, i.jsx)(O, {}),
                            Footer: () =>
                                (0, i.jsx)(P.A, {
                                    children: (0, i.jsx)(P.wi, {
                                        className: _().footer,
                                    }),
                                }),
                        }),
                        [],
                    );
                    if (p.loadingState === b.GuX.REJECT)
                        return (0, i.jsx)(c.w, {});
                    if (p.isEmpty) return (0, i.jsx)(E, {});
                    let T = (null == (e = p.items) ? void 0 : e.length) || 10;
                    return (0, i.jsx)(b.nVz, {
                        pageId: b._Q$.DOWNLOADS_TRACKS,
                        children: (0, i.jsx)(v.hO, {
                            scrollElement: t,
                            children: (0, i.jsxs)("div", {
                                className: _().pageContainer,
                                children: [
                                    (0, i.jsx)(w, {}),
                                    (0, i.jsx)(P.$$, {
                                        context: {
                                            listAriaLabel: g({
                                                id: "offline.downloaded-track-list",
                                            }),
                                        },
                                        className: (0, n.$)(
                                            _().root,
                                            _().important,
                                        ),
                                        listClassName: _().content,
                                        customComponents: k,
                                        totalCount: T,
                                        itemContentCallback: (e) => {
                                            var r;
                                            let t =
                                                null == (r = p.items)
                                                    ? void 0
                                                    : r[e];
                                            return t
                                                ? (0, i.jsx)(
                                                      h.Kt,
                                                      {
                                                          track: t,
                                                          playContextParams: f(
                                                              t.id,
                                                              {
                                                                  contextData: {
                                                                      type: d.K
                                                                          .Various,
                                                                      meta: {
                                                                          id: b
                                                                              ._Q$
                                                                              .DOWNLOADS_TRACKS,
                                                                      },
                                                                      from: y,
                                                                  },
                                                                  entitiesData:
                                                                      p.entitiesData,
                                                                  queueParams: {
                                                                      index: e,
                                                                      entityId:
                                                                          t.id,
                                                                  },
                                                                  loadContextMeta:
                                                                      !1,
                                                              },
                                                          ),
                                                      },
                                                      t.id,
                                                  )
                                                : (0, i.jsx)(P.DS, {
                                                      isActive: !0,
                                                      className:
                                                          _().trackShimmer,
                                                      variant: b.Xjt.PLAYLIST,
                                                  });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: T,
                                        handleRef: s,
                                        shouldTriggerRangeChangedOn: [T],
                                        testId: a.Xk.myMusic
                                            .MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                                    }),
                                ],
                            }),
                        }),
                    });
                });
        },
        40258: (e, r, t) => {
            "use strict";
            t.d(r, { L: () => m });
            var i,
                n = t(93225),
                s = t(66268),
                o = {
                    6699: (e, r, t) => {
                        Object.defineProperty(r, "__esModule", { value: !0 }),
                            (r.useDebouncedToggle = void 0);
                        let i = t(352),
                            n = t(810);
                        r.useDebouncedToggle = (e) => {
                            let {
                                    delay: r,
                                    initialState: t,
                                    throttleTimeout: s,
                                } = e,
                                o = (0, n.useRef)(null),
                                [l, a] = (0, n.useState)(!!t),
                                d = (0, n.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            a(!t),
                                                o.current &&
                                                    window.clearTimeout(
                                                        o.current,
                                                    ),
                                                (o.current = window.setTimeout(
                                                    () => {
                                                        a(!!t);
                                                    },
                                                    r,
                                                ));
                                        }, s),
                                    [r, t, s],
                                ),
                                m = (0, n.useCallback)(() => {
                                    a(!!t),
                                        o.current &&
                                            window.clearTimeout(o.current);
                                }, [t]);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        o.current &&
                                            window.clearTimeout(o.current);
                                    },
                                    [],
                                ),
                                { state: l, handleDebouncedToggle: d, reset: m }
                            );
                        };
                    },
                    361: (e, r) => {
                        Object.defineProperty(r, "__esModule", { value: !0 }),
                            (r.getElementFromRefOrElement = void 0),
                            (r.getElementFromRefOrElement = (e) => {
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
                        e.exports = i || (i = t.t(s, 2));
                    },
                },
                l = {};
            function a(e) {
                var r = l[e];
                if (void 0 !== r) return r.exports;
                var t = (l[e] = { exports: {} });
                return o[e](t, t.exports, a), t.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, "__esModule", { value: !0 }),
                    (d.useScroll = void 0);
                let e = a(810),
                    r = a(361),
                    t = a(6699);
                d.useScroll = (i) => {
                    let {
                            onScroll: n,
                            listenIsScrolling: s,
                            elementRef: o,
                        } = i,
                        { state: l, handleDebouncedToggle: a } = (0,
                        t.useDebouncedToggle)({
                            delay: 1e3,
                            throttleTimeout: 100,
                        }),
                        d = (0, e.useCallback)(() => {
                            s && a(), null == n || n();
                        }, [s, a, n]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, r.getElementFromRefOrElement)(o);
                            if (null === e) return;
                            let t = null != e ? e : window,
                                i = { capture: !0, passive: !0 };
                            return (
                                t.addEventListener("scroll", d, i),
                                () => t.removeEventListener("scroll", d, i)
                            );
                        }, [o, d]),
                        l
                    );
                };
            })(),
                d.__esModule;
            var m = d.useScroll;
        },
        47407: (e, r, t) => {
            "use strict";
            t.d(r, { Chart: () => h });
            var i = t(33008),
                n = t(85896),
                s = t(97531),
                o = t(66268),
                l = t(73827),
                a = t(18064),
                d = t(77059),
                m = t(78016),
                u = t(77868),
                c = t(59031),
                v = t.n(c);
            let h = (0, s.PA)((e) => {
                let {
                        progress: r,
                        withIcon: t,
                        withCrownIcon: s,
                        position: c,
                        weight: h = "normal",
                        isDisliked: b,
                        isDisabled: P,
                        className: g,
                        positionClassName: _,
                    } = e,
                    { formatMessage: p } = (0, l.A)(),
                    y = r || t,
                    f = (0, o.useMemo)(() => {
                        if (s) return "crown";
                        switch (r) {
                            case d._.UP:
                                return "chartUp";
                            case d._.DOWN:
                                return "chartDown";
                            case d._.NEW:
                                return "chartNew";
                            default:
                                return "chartSame";
                        }
                    }, [r, s]),
                    A = (0, o.useMemo)(() => {
                        switch (r) {
                            case d._.UP:
                                return p({ id: "entity-names.chart-up" });
                            case d._.DOWN:
                                return p({ id: "entity-names.chart-down" });
                            case d._.NEW:
                                return p({ id: "entity-names.chart-new" });
                            default:
                                return p({ id: "entity-names.chart-same" });
                        }
                    }, [p, r]),
                    k = s ? "crown" : r;
                return (0, i.jsxs)("div", {
                    className: (0, n.$)(v().root, g),
                    ...(0, a.Am)(a.OA.chart.CHART_PROGRESS),
                    children: [
                        (0, i.jsx)(u.Caption, {
                            variant: "div",
                            weight: h,
                            type: "entity",
                            size: "m",
                            className: (0, n.$)(v().position, _, {
                                [v().position_disliked]: b,
                                [v().position_disabled]: P,
                            }),
                            ...(0, a.Am)(a.OA.chart.CHART_PROGRESS_POSITION),
                            children: c,
                        }),
                        y &&
                            (0, i.jsx)(m.Icon, {
                                variant: f,
                                size: "xxs",
                                "aria-label": A,
                                className: (0, n.$)(
                                    v().progress,
                                    v()["progress_".concat(k)],
                                    {
                                        [v().progress_disliked]: b,
                                        [v().progress_disabled]: P,
                                    },
                                ),
                                ...(0, a.Am)(a.OA.chart.CHART_PROGRESS_ICON),
                            }),
                    ],
                });
            });
        },
        47416: (e, r, t) => {
            "use strict";
            t.d(r, { b: () => d, L: () => i.useDownloadedTracks });
            var i = t(88075),
                n = t(41028),
                s = t(75305),
                o = t(44078),
                l = t(79169),
                a = t(59615);
            let d = n.gK
                .compose(
                    n.gK.model("DownloadedTracks", {
                        items: n.gK.maybeNull(n.gK.array(o.vj)),
                        tracks: n.gK.maybeNull(n.gK.frozen()),
                    }),
                    a.XT,
                )
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var r, t;
                        return (
                            (null !=
                            (t =
                                null == (r = e.tracks)
                                    ? void 0
                                    : r.reduce(
                                          (e, r) =>
                                              r.durationMs
                                                  ? e + r.durationMs
                                                  : e,
                                          0,
                                      ))
                                ? t
                                : 0) /
                            1e3 /
                            60
                        );
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({
                            type: s.R.DownloadedMusic,
                            meta: e,
                        }));
                    },
                    get isEmpty() {
                        var i;
                        return (
                            e.isResolved &&
                            (null == (i = e.items) ? void 0 : i.length) === 0
                        );
                    },
                }))
                .actions((e) => ({
                    getData: (0, n.L3)(function* (r, t) {
                        let { modelActionsLogger: i } = (0, n._$)(e);
                        if (e.loadingState !== l.GuX.PENDING)
                            try {
                                e.loadingState = l.GuX.PENDING;
                                let i = yield r.getTracks(t);
                                (e.tracks = i),
                                    (e.items = (0, n.wg)(
                                        i.map((e) => (0, o.vU)(e)),
                                    )),
                                    e.loadingState !== l.GuX.IDLE &&
                                        (e.loadingState = l.GuX.RESOLVE);
                            } catch (r) {
                                i.error(r),
                                    e.loadingState !== l.GuX.IDLE &&
                                        (e.loadingState = l.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.items = null),
                            (e.tracks = null),
                            (e.loadingState = l.GuX.IDLE);
                    },
                }));
        },
        56312: (e, r, t) => {
            "use strict";
            var i;
            t.d(r, { J: () => i }),
                (function (e) {
                    (e.OK = "ok"), (e.ERROR = "error");
                })(i || (i = {}));
        },
        57609: (e, r, t) => {
            "use strict";
            t.d(r, { useAlbumDisclaimer: () => l });
            var i = t(66268),
                n = t(54960),
                s = t(42213),
                o = t(79169);
            let l = (e) => {
                let { album: r, callback: t, shouldHistoryBack: l } = e,
                    {
                        disclaimerModalData: a,
                        modals: { disclaimerModal: d },
                    } = (0, o.Pjs)(),
                    m = (0, i.useRef)(String((0, n.A)())),
                    u = (0, i.useRef)(!1),
                    c = (0, o.NFA)().get(o.U2_);
                return (
                    (0, i.useEffect)(() => {
                        a.isUnsafeDisclaimerConfirmed &&
                            a.id === m.current &&
                            !u.current &&
                            (null == t || t(), (u.current = !0));
                    }, [t, a.isUnsafeDisclaimerConfirmed, a.id]),
                    (0, s.c)(async (e) => {
                        let i = c.get(o.cYZ.ExEx),
                            n = (null == r ? void 0 : r.isPodcast)
                                ? null == i
                                    ? void 0
                                    : i.includes(
                                          ""
                                              .concat(o.nPY.PODCAST, "_")
                                              .concat(r.id),
                                      )
                                : null == i
                                  ? void 0
                                  : i.includes(
                                        ""
                                            .concat(o.nPY.ALBUM, "_")
                                            .concat(null == r ? void 0 : r.id),
                                    );
                        if ((null == r ? void 0 : r.isUnsafeLegal) && n) {
                            null == t || t(e);
                            return;
                        }
                        if (
                            (null == r ? void 0 : r.isLegalRejected) ||
                            (null == r ? void 0 : r.isUnsafeLegal)
                        ) {
                            null == e || e.preventDefault(),
                                await a.getDisclaimerData({
                                    entityId: r.id,
                                    entityType: r.isPodcast
                                        ? o.nPY.PODCAST
                                        : o.nPY.ALBUM,
                                    disclaimerId: r.modalDisclaimerId,
                                }),
                                r.isUnsafeLegal && a.setType(o.YwF.UNSAFE),
                                a.setId(m.current),
                                a.setEntityId(r.id),
                                r.isPodcast
                                    ? a.setEntityType(o.nPY.PODCAST)
                                    : a.setEntityType(o.nPY.ALBUM),
                                a.setShouldHistoryBack(!!l),
                                (u.current = !1),
                                d.open();
                            return;
                        }
                        null == e || e.preventDefault(), null == t || t(e);
                    })
                );
            };
        },
        59031: (e) => {
            e.exports = {
                card_root: "HorizontalCardContainer_root__YoAAP",
                root: "Chart_root__ODed_",
                position: "Chart_position__7UNY9",
                position_disliked: "Chart_position_disliked__HzjC7",
                position_disabled: "Chart_position_disabled__poZzD",
                progress: "Chart_progress__sGj4s",
                progress_up: "Chart_progress_up__y083c",
                progress_same: "Chart_progress_same__Cnbdb",
                progress_down: "Chart_progress_down__lv_ae",
                progress_crown: "Chart_progress_crown__o__Zm",
                progress_new: "Chart_progress_new__7DobI",
                progress_disliked: "Chart_progress_disliked__maVAk",
                progress_disabled: "Chart_progress_disabled__JoFqG",
            };
        },
        59173: (e, r, t) => {
            "use strict";
            t.d(r, { useOnPromoLandingLikeClick: () => a });
            var i = t(17846),
                n = t(37656),
                s = t(42213),
                o = t(79169),
                l = t(30147);
            let a = (e) => {
                let {
                        user: r,
                        modals: {
                            promoLandingBuySubscriptionModal: t,
                            crackdownModal: a,
                        },
                        settings: { isMobile: d },
                        paywall: m,
                        albumCPA: { isPlusCPAEnabled: u },
                        promolanding: c,
                    } = (0, o.Pjs)(),
                    { isFreemium: v } = (0, o.XCI)(),
                    h = (0, l.f)(),
                    { pageAlbumId: b } = (0, o.THB)(),
                    P = (0, i.useSearchParams)();
                return (0, s.c)(async () => {
                    if (
                        u({
                            pageAlbumId: b,
                            albumId: null == e ? void 0 : e.id,
                            isNonMusic: null == e ? void 0 : e.isNonMusic,
                        })
                    )
                        return void m.openModal();
                    if (
                        (!v ||
                            (null == e ? void 0 : e.isLiked) ||
                            (d ? t.open() : a.open()),
                        r.isAuthorized) &&
                        e
                    ) {
                        if (!e.isLiked) {
                            var i, s;
                            c.sendLikeFeedback({
                                reaction: n.g.LIKE,
                                yclid:
                                    null != (i = P.get(o.K3F.YCLID)) ? i : "",
                                campaignId:
                                    null != (s = P.get(o.K3F.UTM_CAMPAIGN))
                                        ? s
                                        : "",
                            });
                        }
                        return h({
                            album: e,
                            withLink: !1,
                            withNotification: r.hasPlus,
                        });
                    }
                });
            };
        },
        60343: (e, r, t) => {
            "use strict";
            t.d(r, { useOnLikeClick: () => d });
            var i = t(33008),
                n = t(73827),
                s = t(42213),
                o = t(79169),
                l = t(18740),
                a = t(30147);
            let d = (e) => {
                let {
                        user: r,
                        paywall: t,
                        albumCPA: { isPlusCPAEnabled: d },
                    } = (0, o.Pjs)(),
                    { formatMessage: m } = (0, n.A)(),
                    { notify: u } = (0, o.lkh)(),
                    c = (0, a.f)(),
                    { pageAlbumId: v } = (0, o.THB)();
                return (0, s.c)(async () => {
                    if (e)
                        return d({
                            pageAlbumId: v,
                            albumId: e.id,
                            isNonMusic: e.isNonMusic,
                        })
                            ? void t.openModal()
                            : r.isAuthorized
                              ? c({ album: e })
                              : void u(
                                    (0, i.jsx)(l.hT, {
                                        error: m({
                                            id: "authorization-messages.need-to-authorizate",
                                        }),
                                    }),
                                    { containerId: o.uQT.ERROR },
                                );
                });
            };
        },
        64143: (e, r, t) => {
            "use strict";
            t.d(r, { hO: () => c, jr: () => v, jp: () => h, QZ: () => n }),
                t(57323);
            var i = t(66268);
            let n = (e, r, t) => {
                let n = null != t && t;
                return {
                    topColorStyle: (0, i.useMemo)(() => {
                        if (void 0 === r) return;
                        let t = n ? 93 : 17,
                            i = r - t;
                        return {
                            "--average-color-background": e,
                            transform: "translateY(".concat(
                                r >= t ? 0 : i,
                                "px)",
                            ),
                            opacity: 1,
                        };
                    }, [r, n, e]),
                    headerStyle: (0, i.useMemo)(
                        () => ({ "--average-color-background": e }),
                        [e],
                    ),
                };
            };
            var s = t(33008),
                o = t(13201),
                l = t(97531),
                a = t(40258),
                d = t(79169),
                m = t(18740);
            let u = (e) => {
                    let { element: r, scrollTop: t, isMobile: i } = e,
                        n = 0.6 * r.clientHeight;
                    return t + (i ? 60 : 76) >= r.offsetTop + n;
                },
                c = (0, l.PA)((e) => {
                    let {
                            children: r,
                            scrollElement: t,
                            outerTitle: n = "",
                            headerElement: l,
                            headerThreshold: c,
                            shouldHideHeader: v,
                        } = e,
                        [h, b] = (0, i.useState)(n),
                        [P, g] = (0, i.useState)(null),
                        [_, p] = (0, i.useState)(null),
                        [y, f] = (0, i.useState)(null),
                        [A, k] = (0, i.useState)(!1),
                        [T, x] = (0, i.useState)(!1),
                        [C, O] = (0, i.useState)(!1),
                        [D, M] = (0, i.useState)(!1),
                        {
                            settings: { isMobile: E },
                        } = (0, d.Pjs)();
                    (0, i.useLayoutEffect)(() => {
                        b(n);
                    }, [n]);
                    let w = (0, i.useCallback)(() => {
                        let e = null != c ? c : 10,
                            r = l ? Number(l.offsetTop) - e : e;
                        r < 0 && (r = 0);
                        let i = (e) => {
                            O(e > r),
                                v && M(e > 30),
                                (null == P ? void 0 : P.current) &&
                                    k(
                                        u({
                                            element:
                                                null == P ? void 0 : P.current,
                                            scrollTop: e,
                                            isMobile: E,
                                        }),
                                    ),
                                (null == _ ? void 0 : _.current) &&
                                    x(
                                        u({
                                            element:
                                                null == _ ? void 0 : _.current,
                                            scrollTop: e,
                                            isMobile: E,
                                        }),
                                    );
                        };
                        E ? i(window.scrollY) : t && i(t.scrollTop);
                    }, [c, l, E, v, P, _, t]);
                    (0, i.useEffect)(() => {
                        E
                            ? 0 === window.scrollY && O(!1)
                            : (t && 0 !== t.scrollTop) || O(!1);
                    }, [t, null == t ? void 0 : t.scrollTop, E]);
                    let S = (0, i.useMemo)(
                        () =>
                            E
                                ? { onScroll: (0, o.A)(w, 200) }
                                : { onScroll: (0, o.A)(w, 200), elementRef: t },
                        [w, t, E],
                    );
                    (0, a.L)(S);
                    let N = (0, i.useMemo)(
                        () => ({
                            title: h,
                            setTitle: b,
                            titleElement: P,
                            scrollElement: E ? null : t,
                            setTitleElement: g,
                            childElement: _,
                            setChildElement: p,
                            child: y,
                            setChild: f,
                            isScrolledChild: T,
                            isScrolledTitle: A,
                            isScrolling: C,
                            isHeaderHidden: D,
                        }),
                        [h, A, P, t, C, E, y, _, T, D],
                    );
                    return (0, s.jsx)(m.B9.Provider, { value: N, children: r });
                }),
                v = (e) => {
                    let { children: r, child: t, className: n } = e,
                        { setChildElement: o, setChild: l } = (0, i.useContext)(
                            m.B9,
                        ),
                        a = (0, i.useRef)(null);
                    return (
                        (0, i.useEffect)(() => {
                            (null == a ? void 0 : a.current) && o(a), t && l(t);
                        }, [a, t, o, l]),
                        (0, i.useEffect)(
                            () => () => {
                                l(null);
                            },
                            [l],
                        ),
                        (0, s.jsx)("div", { ref: a, className: n, children: r })
                    );
                },
                h = (e) => {
                    let { children: r, title: t, className: n } = e,
                        { setTitleElement: o, setTitle: l } = (0, i.useContext)(
                            m.B9,
                        ),
                        a = (0, i.useRef)(null);
                    return (
                        (0, i.useEffect)(() => {
                            (null == a ? void 0 : a.current) && o(a), t && l(t);
                        }, [a, t, o, l]),
                        (0, i.useEffect)(
                            () => () => {
                                l("");
                            },
                            [l],
                        ),
                        (0, s.jsx)("div", { ref: a, className: n, children: r })
                    );
                };
        },
        72210: (e, r, t) => {
            Promise.resolve().then(t.bind(t, 52283)),
                Promise.resolve().then(t.bind(t, 81382)),
                Promise.resolve().then(t.bind(t, 52756)),
                Promise.resolve().then(t.bind(t, 41458)),
                Promise.resolve().then(t.bind(t, 80922)),
                Promise.resolve().then(t.bind(t, 54487)),
                Promise.resolve().then(t.bind(t, 91342)),
                Promise.resolve().then(t.bind(t, 21741)),
                Promise.resolve().then(t.bind(t, 77868)),
                Promise.resolve().then(t.bind(t, 22818)),
                Promise.resolve().then(t.bind(t, 80099)),
                Promise.resolve().then(t.bind(t, 66764)),
                Promise.resolve().then(t.bind(t, 87264)),
                Promise.resolve().then(t.bind(t, 90958)),
                Promise.resolve().then(t.bind(t, 65892)),
                Promise.resolve().then(t.bind(t, 99366)),
                Promise.resolve().then(t.bind(t, 80810)),
                Promise.resolve().then(t.bind(t, 57609)),
                Promise.resolve().then(t.bind(t, 82548)),
                Promise.resolve().then(t.bind(t, 92725)),
                Promise.resolve().then(t.bind(t, 91450)),
                Promise.resolve().then(t.bind(t, 60343)),
                Promise.resolve().then(t.bind(t, 2202)),
                Promise.resolve().then(t.bind(t, 89414)),
                Promise.resolve().then(t.bind(t, 59173)),
                Promise.resolve().then(t.bind(t, 75227)),
                Promise.resolve().then(t.bind(t, 55717)),
                Promise.resolve().then(t.bind(t, 86600)),
                Promise.resolve().then(t.bind(t, 73480)),
                Promise.resolve().then(t.bind(t, 55142)),
                Promise.resolve().then(t.bind(t, 37548)),
                Promise.resolve().then(t.bind(t, 70278)),
                Promise.resolve().then(t.bind(t, 40160)),
                Promise.resolve().then(t.bind(t, 70400)),
                Promise.resolve().then(t.bind(t, 93652)),
                Promise.resolve().then(t.bind(t, 47407)),
                Promise.resolve().then(t.bind(t, 31679)),
                Promise.resolve().then(t.bind(t, 46595)),
                Promise.resolve().then(t.bind(t, 33951)),
                Promise.resolve().then(t.bind(t, 80593)),
                Promise.resolve().then(t.bind(t, 13807)),
                Promise.resolve().then(t.bind(t, 72455)),
                Promise.resolve().then(t.bind(t, 64399)),
                Promise.resolve().then(t.bind(t, 81417)),
                Promise.resolve().then(t.bind(t, 22721)),
                Promise.resolve().then(t.bind(t, 49358)),
                Promise.resolve().then(t.bind(t, 80651)),
                Promise.resolve().then(t.bind(t, 70559)),
                Promise.resolve().then(t.bind(t, 23460)),
                Promise.resolve().then(t.bind(t, 26557)),
                Promise.resolve().then(t.bind(t, 37259)),
                Promise.resolve().then(t.bind(t, 30206)),
                Promise.resolve().then(t.bind(t, 78724)),
                Promise.resolve().then(t.bind(t, 97004)),
                Promise.resolve().then(t.bind(t, 33647)),
                Promise.resolve().then(t.bind(t, 68555)),
                Promise.resolve().then(t.bind(t, 37840)),
                Promise.resolve().then(t.bind(t, 93915)),
                Promise.resolve().then(t.bind(t, 98627)),
                Promise.resolve().then(t.bind(t, 51786)),
                Promise.resolve().then(t.bind(t, 97725)),
                Promise.resolve().then(t.bind(t, 99430)),
                Promise.resolve().then(t.bind(t, 67366)),
                Promise.resolve().then(t.bind(t, 24598)),
                Promise.resolve().then(t.bind(t, 6742)),
                Promise.resolve().then(t.bind(t, 86461)),
                Promise.resolve().then(t.bind(t, 12318)),
                Promise.resolve().then(t.bind(t, 80582)),
                Promise.resolve().then(t.bind(t, 94916)),
                Promise.resolve().then(t.bind(t, 76172)),
                Promise.resolve().then(t.bind(t, 21118)),
                Promise.resolve().then(t.bind(t, 86868)),
                Promise.resolve().then(t.bind(t, 93295)),
                Promise.resolve().then(t.bind(t, 79372)),
                Promise.resolve().then(t.bind(t, 88790)),
                Promise.resolve().then(t.bind(t, 75791)),
                Promise.resolve().then(t.bind(t, 18705)),
                Promise.resolve().then(t.bind(t, 22606)),
                Promise.resolve().then(t.bind(t, 25809)),
                Promise.resolve().then(t.bind(t, 71741)),
                Promise.resolve().then(t.bind(t, 39959)),
                Promise.resolve().then(t.bind(t, 8910)),
                Promise.resolve().then(t.bind(t, 39500)),
                Promise.resolve().then(t.bind(t, 31978)),
                Promise.resolve().then(t.bind(t, 12005)),
                Promise.resolve().then(t.bind(t, 12327)),
                Promise.resolve().then(t.bind(t, 71562)),
                Promise.resolve().then(t.bind(t, 39900)),
                Promise.resolve().then(t.bind(t, 62565)),
                Promise.resolve().then(t.bind(t, 83641)),
                Promise.resolve().then(t.bind(t, 88081)),
                Promise.resolve().then(t.bind(t, 60862)),
                Promise.resolve().then(t.bind(t, 2294)),
                Promise.resolve().then(t.bind(t, 65297)),
                Promise.resolve().then(t.bind(t, 23197)),
                Promise.resolve().then(t.bind(t, 86943)),
                Promise.resolve().then(t.bind(t, 27575)),
                Promise.resolve().then(t.bind(t, 45019)),
                Promise.resolve().then(t.bind(t, 76808)),
                Promise.resolve().then(t.bind(t, 84651)),
                Promise.resolve().then(t.bind(t, 18674)),
                Promise.resolve().then(t.bind(t, 65930)),
                Promise.resolve().then(t.bind(t, 45576)),
                Promise.resolve().then(t.bind(t, 75142)),
                Promise.resolve().then(t.bind(t, 46791)),
                Promise.resolve().then(t.bind(t, 22851)),
                Promise.resolve().then(t.bind(t, 11959)),
                Promise.resolve().then(t.bind(t, 72775)),
                Promise.resolve().then(t.bind(t, 53350)),
                Promise.resolve().then(t.bind(t, 41170)),
                Promise.resolve().then(t.bind(t, 63838)),
                Promise.resolve().then(t.bind(t, 58977)),
                Promise.resolve().then(t.bind(t, 76801)),
                Promise.resolve().then(t.bind(t, 59544)),
                Promise.resolve().then(t.bind(t, 72925)),
                Promise.resolve().then(t.bind(t, 11960)),
                Promise.resolve().then(t.bind(t, 51229)),
                Promise.resolve().then(t.bind(t, 38592)),
                Promise.resolve().then(t.bind(t, 9586)),
                Promise.resolve().then(t.bind(t, 69458)),
                Promise.resolve().then(t.bind(t, 29418)),
                Promise.resolve().then(t.bind(t, 98200)),
                Promise.resolve().then(t.bind(t, 12170)),
                Promise.resolve().then(t.bind(t, 60722)),
                Promise.resolve().then(t.bind(t, 83958)),
                Promise.resolve().then(t.bind(t, 67190)),
                Promise.resolve().then(t.bind(t, 56770)),
                Promise.resolve().then(t.bind(t, 26836)),
                Promise.resolve().then(t.bind(t, 94954)),
                Promise.resolve().then(t.bind(t, 66423)),
                Promise.resolve().then(t.bind(t, 31014)),
                Promise.resolve().then(t.bind(t, 46532)),
                Promise.resolve().then(t.bind(t, 40706)),
                Promise.resolve().then(t.bind(t, 6726)),
                Promise.resolve().then(t.bind(t, 56973)),
                Promise.resolve().then(t.bind(t, 92998)),
                Promise.resolve().then(t.bind(t, 93214)),
                Promise.resolve().then(t.bind(t, 76084)),
                Promise.resolve().then(t.bind(t, 80677)),
                Promise.resolve().then(t.bind(t, 33247)),
                Promise.resolve().then(t.bind(t, 34610)),
                Promise.resolve().then(t.bind(t, 45789)),
                Promise.resolve().then(t.bind(t, 89711)),
                Promise.resolve().then(t.bind(t, 25154)),
                Promise.resolve().then(t.bind(t, 28159)),
                Promise.resolve().then(t.bind(t, 13050)),
                Promise.resolve().then(t.bind(t, 79400)),
                Promise.resolve().then(t.bind(t, 30039)),
                Promise.resolve().then(t.bind(t, 71228)),
                Promise.resolve().then(t.bind(t, 2054)),
                Promise.resolve().then(t.bind(t, 16561)),
                Promise.resolve().then(t.bind(t, 78419)),
                Promise.resolve().then(t.bind(t, 25486)),
                Promise.resolve().then(t.bind(t, 35217)),
                Promise.resolve().then(t.bind(t, 26595)),
                Promise.resolve().then(t.bind(t, 78221)),
                Promise.resolve().then(t.bind(t, 32772)),
                Promise.resolve().then(t.bind(t, 70065)),
                Promise.resolve().then(t.bind(t, 60374)),
                Promise.resolve().then(t.bind(t, 4520)),
                Promise.resolve().then(t.bind(t, 28558)),
                Promise.resolve().then(t.bind(t, 21509)),
                Promise.resolve().then(t.bind(t, 52224)),
                Promise.resolve().then(t.bind(t, 25379)),
                Promise.resolve().then(t.bind(t, 97053)),
                Promise.resolve().then(t.bind(t, 70106)),
                Promise.resolve().then(t.bind(t, 83192)),
                Promise.resolve().then(t.bind(t, 49562)),
                Promise.resolve().then(t.bind(t, 95007)),
                Promise.resolve().then(t.bind(t, 86067)),
                Promise.resolve().then(t.bind(t, 67556)),
                Promise.resolve().then(t.bind(t, 5572)),
                Promise.resolve().then(t.bind(t, 85598)),
                Promise.resolve().then(t.bind(t, 34302)),
                Promise.resolve().then(t.bind(t, 77887)),
                Promise.resolve().then(t.bind(t, 22682)),
                Promise.resolve().then(t.bind(t, 48684)),
                Promise.resolve().then(t.bind(t, 35123)),
                Promise.resolve().then(t.bind(t, 87884)),
                Promise.resolve().then(t.bind(t, 95068)),
                Promise.resolve().then(t.bind(t, 73011)),
                Promise.resolve().then(t.bind(t, 75706)),
                Promise.resolve().then(t.bind(t, 59618)),
                Promise.resolve().then(t.bind(t, 3886)),
                Promise.resolve().then(t.bind(t, 43634)),
                Promise.resolve().then(t.bind(t, 34200)),
                Promise.resolve().then(t.bind(t, 1627)),
                Promise.resolve().then(t.bind(t, 41460)),
                Promise.resolve().then(t.bind(t, 25680)),
                Promise.resolve().then(t.bind(t, 54793)),
                Promise.resolve().then(t.bind(t, 35111)),
                Promise.resolve().then(t.bind(t, 6735)),
                Promise.resolve().then(t.bind(t, 98205)),
                Promise.resolve().then(t.bind(t, 65276)),
                Promise.resolve().then(t.bind(t, 41507)),
                Promise.resolve().then(t.bind(t, 24984)),
                Promise.resolve().then(t.bind(t, 70504)),
                Promise.resolve().then(t.bind(t, 23845)),
                Promise.resolve().then(t.bind(t, 8110)),
                Promise.resolve().then(t.bind(t, 81416)),
                Promise.resolve().then(t.bind(t, 6925)),
                Promise.resolve().then(t.bind(t, 75618)),
                Promise.resolve().then(t.bind(t, 83894)),
                Promise.resolve().then(t.bind(t, 42589)),
                Promise.resolve().then(t.bind(t, 56106)),
                Promise.resolve().then(t.bind(t, 92796)),
                Promise.resolve().then(t.bind(t, 80858)),
                Promise.resolve().then(t.bind(t, 32850)),
                Promise.resolve().then(t.bind(t, 90242)),
                Promise.resolve().then(t.bind(t, 4112)),
                Promise.resolve().then(t.bind(t, 73756)),
                Promise.resolve().then(t.bind(t, 25474)),
                Promise.resolve().then(t.bind(t, 85878)),
                Promise.resolve().then(t.bind(t, 44156)),
                Promise.resolve().then(t.bind(t, 75958)),
                Promise.resolve().then(t.bind(t, 12183)),
                Promise.resolve().then(t.bind(t, 89913)),
                Promise.resolve().then(t.bind(t, 57323)),
                Promise.resolve().then(t.bind(t, 97698)),
                Promise.resolve().then(t.bind(t, 67342)),
                Promise.resolve().then(t.bind(t, 64960)),
                Promise.resolve().then(t.bind(t, 51838)),
                Promise.resolve().then(t.bind(t, 81304)),
                Promise.resolve().then(t.bind(t, 38742)),
                Promise.resolve().then(t.bind(t, 12332)),
                Promise.resolve().then(t.bind(t, 47676)),
                Promise.resolve().then(t.bind(t, 12952)),
                Promise.resolve().then(t.bind(t, 76532)),
                Promise.resolve().then(t.bind(t, 28395)),
                Promise.resolve().then(t.bind(t, 69614)),
                Promise.resolve().then(t.bind(t, 55487)),
                Promise.resolve().then(t.bind(t, 65710)),
                Promise.resolve().then(t.bind(t, 91442)),
                Promise.resolve().then(t.bind(t, 69332)),
                Promise.resolve().then(t.bind(t, 60951)),
                Promise.resolve().then(t.bind(t, 95045)),
                Promise.resolve().then(t.bind(t, 4367)),
                Promise.resolve().then(t.bind(t, 15336)),
                Promise.resolve().then(t.bind(t, 2097)),
                Promise.resolve().then(t.bind(t, 55675)),
                Promise.resolve().then(t.bind(t, 86134)),
                Promise.resolve().then(t.bind(t, 49120)),
                Promise.resolve().then(t.bind(t, 26078)),
                Promise.resolve().then(t.bind(t, 3218)),
                Promise.resolve().then(t.bind(t, 82658)),
                Promise.resolve().then(t.bind(t, 2406)),
                Promise.resolve().then(t.bind(t, 49247)),
                Promise.resolve().then(t.bind(t, 8681)),
                Promise.resolve().then(t.bind(t, 69594)),
                Promise.resolve().then(t.bind(t, 86722)),
                Promise.resolve().then(t.bind(t, 77104)),
                Promise.resolve().then(t.bind(t, 73682)),
                Promise.resolve().then(t.bind(t, 62066)),
                Promise.resolve().then(t.bind(t, 61258)),
                Promise.resolve().then(t.bind(t, 41035)),
                Promise.resolve().then(t.bind(t, 28160)),
                Promise.resolve().then(t.bind(t, 31922)),
                Promise.resolve().then(t.bind(t, 51886)),
                Promise.resolve().then(t.bind(t, 43701)),
                Promise.resolve().then(t.bind(t, 45228)),
                Promise.resolve().then(t.bind(t, 88075)),
                Promise.resolve().then(t.bind(t, 27618));
        },
        77059: (e, r, t) => {
            "use strict";
            var i;
            t.d(r, { _: () => i }),
                (function (e) {
                    (e.UP = "up"),
                        (e.DOWN = "down"),
                        (e.SAME = "same"),
                        (e.NEW = "new");
                })(i || (i = {}));
        },
        80810: (e, r, t) => {
            "use strict";
            t.d(r, { useAlbumAnalyticsAppScreenName: () => o });
            var i = t(66268),
                n = t(93967),
                s = t(15479);
            let o = (e) =>
                (0, i.useMemo)(() => {
                    switch (e) {
                        case s._.PODCAST:
                            return n.QT.PodcastScreen;
                        case s._.AUDIOBOOK:
                            return n.QT.AudiobookScreen;
                        default:
                            return n.QT.AlbumScreen;
                    }
                }, [e]);
        },
        82548: (e, r, t) => {
            "use strict";
            t.d(r, {
                AlbumEntityNameConsumer: () => o,
                useAlbumEntityName: () => l,
            });
            var i = t(66268),
                n = t(73827),
                s = t(15479),
                o = (function (e) {
                    return (e.PIN = "pin"), e;
                })({});
            let l = (e, r) => {
                let { formatMessage: t } = (0, n.A)();
                return (0, i.useMemo)(() => {
                    switch (e) {
                        case s._.SINGLE:
                            return t({ id: "entity-names.single" });
                        case s._.PODCAST:
                            return t({ id: "entity-names.podcast" });
                        case s._.AUDIOBOOK:
                            if ("pin" === r)
                                return t({ id: "entity-names.book" });
                            return t({ id: "entity-names.audio" });
                        case s._.FAIRY_TALE:
                            return t({ id: "entity-names.fairy-tale" });
                        default:
                            return t({ id: "entity-names.album" });
                    }
                }, [e, t, r]);
            };
        },
        83888: (e, r, t) => {
            "use strict";
            t.d(r, { w: () => i.SomethingWentWrong });
            var i = t(30236);
        },
        88075: (e, r, t) => {
            "use strict";
            t.d(r, { useDownloadedTracks: () => a });
            var i = t(66268),
                n = t(85897),
                s = t(42213),
                o = t(79169);
            let l = [n.DT.IDLE, n.DT.DOWNLOADED],
                a = (e) => {
                    var r;
                    let t = (0, o.jRO)(),
                        a = (0, s.c)((r) => {
                            let { state: t } = r;
                            l.includes(t.loadingState) && e();
                        });
                    (0, i.useEffect)(() => {
                        var r, i;
                        return (
                            null == (r = t.store) ||
                                r.tracks.events.on(n.je.STATE_CHANGED, e),
                            null == (i = t.store) ||
                                i.tracks.events.on(n.je.ENTITY_CHANGED, a),
                            () => {
                                var r, i;
                                null == (r = t.store) ||
                                    r.tracks.events.off(n.je.STATE_CHANGED, e),
                                    null == (i = t.store) ||
                                        i.tracks.events.off(
                                            n.je.ENTITY_CHANGED,
                                            a,
                                        );
                            }
                        );
                    }, [
                        e,
                        a,
                        null == (r = t.store) ? void 0 : r.tracks.events,
                    ]);
                };
        },
        89414: (e, r, t) => {
            "use strict";
            t.d(r, { useOnPresaveClick: () => u });
            var i = t(33008),
                n = t(29318),
                s = t(66268),
                o = t(73827),
                l = t(56312),
                a = t(79169),
                d = t(18740);
            let m = (e) => {
                    let { upcomingAlbum: r, closeToast: t } = e;
                    return (0, i.jsx)(d.Pv, {
                        closeToast: t,
                        albumTitle: r.title,
                        coverUri: r.coverUri,
                        entityTitle: r.title,
                        isPresave: r.isPresave,
                    });
                },
                u = (e) => {
                    let { user: r } = (0, a.Pjs)(),
                        { notify: t } = (0, a.lkh)(),
                        [u, c] = (0, s.useState)(!1),
                        { formatMessage: v } = (0, o.A)();
                    return (0, s.useCallback)(async () => {
                        if (!r.isAuthorized)
                            return void t(
                                (0, i.jsx)(d.hT, {
                                    error: v({
                                        id: "authorization-messages.need-to-authorizate",
                                    }),
                                }),
                                { containerId: a.uQT.ERROR },
                            );
                        if (u) return;
                        let s = { ...(0, n.HO)(e), isPresave: !e.isPresave };
                        c(!0);
                        let o = await e.toggleLike();
                        c(!1),
                            o === l.J.OK
                                ? t((0, i.jsx)(m, { upcomingAlbum: s }), {
                                      containerId: a.uQT.INFO,
                                  })
                                : t(
                                      (0, i.jsx)(d.hT, {
                                          error: v({
                                              id: "error-messages.error-during-action",
                                          }),
                                      }),
                                      { containerId: a.uQT.ERROR },
                                  );
                    }, [r.isAuthorized, u, e, t, v]);
                };
        },
        91450: (e, r, t) => {
            "use strict";
            t.d(r, { useNavigateToAlbumCPA: () => s });
            var i = t(42213),
                n = t(79169);
            let s = (e) => {
                let { albumId: r, albumUrl: t, callback: s } = e,
                    {
                        getAlbumUrlWithSavedClid: o,
                        checkIsCurrentAlbumPage: l,
                    } = (0, n.IQF)(),
                    a = (0, n.pqZ)();
                return (0, i.c)((e) => {
                    if (!r || !t) {
                        null == s || s(e);
                        return;
                    }
                    if (l(r)) {
                        null == e || e.preventDefault(), a(o(r, t));
                        return;
                    }
                    null == s || s(e);
                });
            };
        },
        92725: (e, r, t) => {
            "use strict";
            t.d(r, { useMarkAlbumListenedClick: () => d });
            var i = t(33008),
                n = t(66268),
                s = t(73827),
                o = t(72315),
                l = t(79169),
                a = t(18740);
            let d = () => {
                let { user: e, album: r, fullscreenPlayer: t } = (0, l.Pjs)(),
                    { notify: d } = (0, l.lkh)(),
                    { formatMessage: m } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    var n, s;
                    if (!r) return;
                    let u = t.modal.isOpened
                        ? l.uQT.FULLSCREEN_ERROR
                        : l.uQT.ERROR;
                    return e.isAuthorized
                        ? (await r.setListeningFinishedStatus()) !== o.T.OK
                            ? void d(
                                  (0, i.jsx)(a.hT, {
                                      error: m({
                                          id: "error-messages.error-during-action",
                                      }),
                                  }),
                                  { containerId: u },
                              )
                            : void (
                                  null == (s = r.meta) ||
                                  s.updateFinished(
                                      !(null == (n = r.meta)
                                          ? void 0
                                          : n.listeningFinished),
                                  )
                              )
                        : void d(
                              (0, i.jsx)(a.hT, {
                                  error: m({
                                      id: "authorization-messages.need-to-authorizate",
                                  }),
                              }),
                              { containerId: u },
                          );
                }, [m, d, r, e.isAuthorized, t.modal.isOpened]);
            };
        },
        95592: (e, r, t) => {
            "use strict";
            t.d(r, {
                cr: () => m.AlbumEntityNameConsumer,
                GI: () => T,
                oM: () => C,
                rU: () => l,
                e7: () => s,
                G_: () => o,
                Rl: () => a.useAlbumAnalyticsAppScreenName,
                cp: () => d.useAlbumDisclaimer,
                r_: () => m.useAlbumEntityName,
                Ek: () => u.useMarkAlbumListenedClick,
                $1: () => c.useNavigateToAlbumCPA,
                KX: () => v.useOnLikeClick,
                A7: () => h.useOnPinClick,
                PL: () => b.useOnPresaveClick,
                c5: () => P.useOnPromoLandingLikeClick,
            });
            var i = t(41028),
                n = t(79169);
            let s = (e) => {
                    let r = (0, n.mxW)(e.trailer);
                    return (0, i.wg)({
                        id: e.id,
                        title: e.title,
                        coverUri: e.coverUri,
                        type: e.type,
                        year: e.year,
                        version: e.version,
                        genre: e.genre,
                        likesCount: e.likesCount,
                        averageColor: (0, n.QBb)(e.derivedColors),
                        isAvailable: !!e.available,
                        trackPosition: e.trackPosition,
                        disclaimers: e.disclaimers,
                        trackCount: e.trackCount,
                        availableForPremiumUsers: e.availableForPremiumUsers,
                        availableForOptions: e.availableForOptions || [],
                        bestAlbumTracks: e.bests,
                        durationSec: e.durationSec,
                        trailer: r,
                        listeningFinished: !!e.listeningFinished,
                    });
                },
                o = (e) => {
                    let r = !1;
                    e.presaveDate ? (r = !0) : e.presaved && (r = e.presaved);
                    let { disclaimers: t } = (0, n.fyr)(e);
                    return (0, i.wg)({
                        id: e.id,
                        disclaimers: t,
                        isPresave: r,
                        title: e.title,
                        type: e.type,
                        coverUri: e.coverUri,
                        releaseDate: e.releaseDate,
                    });
                };
            var l = (function (e) {
                    return (e.TRACK = "track"), (e.TEXT = "text"), e;
                })({}),
                a = t(80810),
                d = t(57609),
                m = t(82548),
                u = t(92725),
                c = t(91450),
                v = t(60343),
                h = t(2202),
                b = t(89414),
                P = t(59173),
                g = t(15479),
                _ = t(15029),
                p = t(34874),
                y = t(93435),
                f = t(60866),
                A = t(59615);
            let k = i.gK.model("TrackPosition", {
                    volume: i.gK.number,
                    index: i.gK.number,
                }),
                T = i.gK
                    .compose(
                        i.gK.model({
                            id: i.gK.number,
                            title: i.gK.string,
                            type: i.gK.maybe(
                                i.gK.enumeration(Object.values(g._)),
                            ),
                            coverUri: i.gK.maybe(i.gK.string),
                            averageColor: i.gK.maybe(i.gK.string),
                            year: i.gK.maybe(i.gK.number),
                            version: i.gK.maybe(i.gK.string),
                            isAvailable: i.gK.optional(i.gK.boolean, !0),
                            availableForOptions: i.gK.maybe(
                                i.gK.array(
                                    i.gK.enumeration(Object.values(_.E)),
                                ),
                            ),
                            availableForPremiumUsers: i.gK.maybe(i.gK.boolean),
                            bookmateOptionRequired: i.gK.maybe(i.gK.boolean),
                            genre: i.gK.maybe(i.gK.string),
                            trackPosition: i.gK.maybe(k),
                            disclaimers: i.gK.maybe(i.gK.array(i.gK.string)),
                            trackCount: i.gK.maybe(i.gK.number),
                            bestAlbumTracks: i.gK.maybe(
                                i.gK.array(i.gK.number),
                            ),
                            trailer: i.gK.maybe(A.aQ),
                            durationSec: i.gK.maybe(i.gK.number),
                            listeningFinished: i.gK.maybe(i.gK.boolean),
                            releaseDate: i.gK.maybe(i.gK.string),
                        }),
                        A.tP,
                        A.Ec,
                    )
                    .views((e) => {
                        let r = {
                            get url() {
                                let { href: r } = (0, n.uvd)(
                                    "/album/:albumId",
                                    { params: { albumId: e.id } },
                                );
                                return r;
                            },
                            get isLiked() {
                                if (!(0, i._n)(e)) return !1;
                                let { library: r } = (0, i.Zn)(e);
                                return null == r
                                    ? void 0
                                    : r.isAlbumLiked(e.id);
                            },
                            get pinId() {
                                return "".concat(p._.ALBUM_ITEM).concat(e.id);
                            },
                            get seeds() {
                                return ["album:".concat(e.id)];
                            },
                            get isAlbum() {
                                return (
                                    e.type === g._.ALBUM ||
                                    e.type === g._.SINGLE
                                );
                            },
                            get isPodcast() {
                                return e.type === g._.PODCAST;
                            },
                            get isAudiobook() {
                                return e.type === g._.AUDIOBOOK;
                            },
                            get isFairyTale() {
                                return e.type === g._.FAIRY_TALE;
                            },
                            get isNonMusic() {
                                if (!(0, i._n)(e)) return !1;
                                return (
                                    r.isPodcast ||
                                    r.isAudiobook ||
                                    r.isFairyTale
                                );
                            },
                            get isPinned() {
                                if (!(0, i._n)(e)) return !1;
                                let { pinsCollection: r } = (0, i.Zn)(e);
                                return r.isPinned(this.pinId);
                            },
                            get modalDisclaimerId() {
                                if (e.disclaimers) {
                                    var t;
                                    let r =
                                        null ==
                                        (t = (0, n.bRW)(
                                            e.disclaimers,
                                            y.M.MODAL,
                                        ))
                                            ? void 0
                                            : t[0];
                                    if (r) {
                                        let { id: e } = r;
                                        return e;
                                    }
                                }
                                return null;
                            },
                            get isForeignAgent() {
                                var s, o;
                                if (!(0, i._n)(e)) return !1;
                                let { experiments: r } = (0, i.Zn)(e),
                                    t = !!(null == (s = e.disclaimers)
                                        ? void 0
                                        : s.includes(y.M.FOREIGN_AGENT));
                                if (e.disclaimers) {
                                    let r =
                                        null ==
                                        (o = (0, n.bRW)(
                                            e.disclaimers,
                                            y.M.FOREIGN_AGENT,
                                        ))
                                            ? void 0
                                            : o[0];
                                    t =
                                        (null == r ? void 0 : r.type) ===
                                        y.M.FOREIGN_AGENT;
                                }
                                return (
                                    t &&
                                    r.checkExperiment(
                                        n.zal.WebNextAgentPodcast,
                                        "on",
                                    )
                                );
                            },
                            get isLegalRejected() {
                                if (!(0, i._n)(e)) return !1;
                                if (e.disclaimers) {
                                    var l;
                                    let r =
                                            null ==
                                            (l = (0, n.bRW)(
                                                e.disclaimers,
                                                y.M.MODAL,
                                            ))
                                                ? void 0
                                                : l[0],
                                        t =
                                            (null == r ? void 0 : r.type) ===
                                            y.M.MODAL;
                                    return (
                                        !e.isAvailable &&
                                        (t || e.disclaimers.includes(y.M.MODAL))
                                    );
                                }
                                return !1;
                            },
                            get isUnsafeLegal() {
                                if (!(0, i._n)(e)) return !1;
                                if (e.disclaimers) {
                                    var a;
                                    let r =
                                        null ==
                                        (a = (0, n.bRW)(
                                            e.disclaimers,
                                            y.M.MODAL,
                                        ))
                                            ? void 0
                                            : a[0];
                                    return (
                                        e.isAvailable &&
                                        (null == r ? void 0 : r.type) ===
                                            y.M.MODAL
                                    );
                                }
                                return !1;
                            },
                            get isAvailableOnlyForPlus() {
                                var d;
                                return (
                                    !e.isAvailable &&
                                    (e.availableForPremiumUsers ||
                                        !!(null == (d = e.availableForOptions)
                                            ? void 0
                                            : d.includes(_.E.BOOKMATE)))
                                );
                            },
                            get shouldShowBooksBadge() {
                                var m;
                                return !!(
                                    e.bookmateOptionRequired ||
                                    (!e.availableForPremiumUsers &&
                                        (null == (m = e.availableForOptions)
                                            ? void 0
                                            : m.includes(_.E.BOOKMATE)))
                                );
                            },
                        };
                        return r;
                    })
                    .actions((e) => ({
                        toggleLike: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { library: r, user: t } = (0, i.Zn)(e);
                            if (t.isAuthorized) {
                                let n = yield r.toggleAlbumLike({
                                    entityId: e.id,
                                    userId: t.account.data.uid,
                                });
                                return (
                                    (0, i._n)(e) &&
                                        n === f.f.OK &&
                                        (e.isLiked
                                            ? e.likePending()
                                            : e.unlikePending()),
                                    n
                                );
                            }
                        }),
                        togglePin: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { pinsCollection: r, user: t } = (0, i.Zn)(e);
                            if (t.isAuthorized)
                                return yield r.toggleAlbumPin(
                                    { id: e.id },
                                    e.pinId,
                                );
                        }),
                        getKey: (r) => "".concat(r, "_").concat(e.id),
                        updateFinished: (r) => {
                            e.listeningFinished = r;
                        },
                    }))
                    .named("BaseAlbum");
            var x = t(56312);
            let C = i.gK
                .compose(
                    i.gK.model("BaseUpcomingAlbum", {
                        id: i.gK.number,
                        isPresave: i.gK.boolean,
                        title: i.gK.maybe(i.gK.string),
                        type: i.gK.maybe(i.gK.enumeration(Object.values(g._))),
                        coverUri: i.gK.maybe(i.gK.string),
                        releaseDate: i.gK.maybe(i.gK.string),
                    }),
                    A.Ec,
                )
                .actions((e) => {
                    let r = {
                        presaveAlbum: (0, i.L3)(function* (r) {
                            let { usersResource: t, modelActionsLogger: n } =
                                (0, i._$)(e);
                            try {
                                e.isPresave = !0;
                                let i = yield t.presaveAlbum(r);
                                return i === x.J.ERROR && (e.isPresave = !1), i;
                            } catch (r) {
                                return (
                                    (e.isPresave = !1), n.error(r), x.J.ERROR
                                );
                            }
                        }),
                        removePresaveAlbum: (0, i.L3)(function* (r) {
                            let { usersResource: t, modelActionsLogger: n } =
                                (0, i._$)(e);
                            try {
                                e.isPresave = !1;
                                let i = yield t.removePresaveAlbum(r);
                                return i === x.J.ERROR && (e.isPresave = !0), i;
                            } catch (r) {
                                return (
                                    (e.isPresave = !0), n.error(r), x.J.ERROR
                                );
                            }
                        }),
                        toggleLike: (0, i.L3)(function* () {
                            let t;
                            if (!(0, i._n)(e)) return;
                            let { user: n } = (0, i.Zn)(e);
                            if (n.account.data.uid)
                                return (
                                    (t = e.isPresave
                                        ? yield r.removePresaveAlbum({
                                              albumId: e.id,
                                              userId: n.account.data.uid,
                                          })
                                        : yield r.presaveAlbum({
                                              albumId: e.id,
                                              userId: n.account.data.uid,
                                              likeAfterRelease: !0,
                                          })),
                                    !(0, i._n)(e),
                                    t
                                );
                        }),
                        getKey: (r) => "".concat(r, "_").concat(e.id),
                    };
                    return r;
                });
        },
        99366: (e, r, t) => {
            "use strict";
            t.r(r), t.d(r, { default: () => c });
            var i = t(33008),
                n = t(85896),
                s = t(66268),
                o = t(45415),
                l = t(48467),
                a = t(79169),
                d = t(14502),
                m = t.n(d),
                u = t(49124);
            let c = (e) => {
                let { children: r } = e,
                    { state: t, toggleTrue: d } = (0, o.e)(!1),
                    { state: c, toggleTrue: v } = (0, o.e)(!1),
                    { getThemeFromStorage: h } = (0, a.QDo)(new l.si()),
                    b = (0, s.useMemo)(() => {
                        var e;
                        return null != (e = h()) ? e : (0, a.VDQ)();
                    }, [h]),
                    P = (0, s.useCallback)(
                        (e) => {
                            let r = u.env.ASSET_PREFIX || "";
                            return ""
                                .concat(
                                    r,
                                    "/media/splash_screen/splash_screen_",
                                )
                                .concat(b, ".")
                                .concat(e);
                        },
                        [b],
                    ),
                    g = (0, s.useMemo)(() => ({ isVisible: !t }), [t]);
                return (0, i.jsxs)(a.nlO.Provider, {
                    value: g,
                    children: [
                        !t &&
                            (0, i.jsx)("div", {
                                className: (0, n.$)(
                                    m().root,
                                    m()["root_".concat(b)],
                                    { [m().root_hidden]: c },
                                ),
                                onAnimationEnd: d,
                                children: (0, i.jsxs)("video", {
                                    className: m().video,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    onEnded: v,
                                    onError: d,
                                    children: [
                                        (0, i.jsx)("source", {
                                            src: P("webm"),
                                            type: "video/webm",
                                        }),
                                        (0, i.jsx)("source", {
                                            src: P("mp4"),
                                            type: "video/mp4",
                                        }),
                                    ],
                                }),
                            }),
                        r,
                    ],
                });
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                9712, 7098, 8282, 5271, 6071, 7245, 8387, 7309, 8712, 952, 9775,
                1311, 7764, 6706, 2089, 996, 4236, 6728, 7508, 9152, 3576, 9169,
                8740, 9615, 3588, 1744, 7747, 4078, 3984, 3477, 5897, 5939,
                9902, 5598, 7358,
            ],
            () => e((e.s = 72210)),
        ),
            (_N_E = e.O());
    },
]);
