(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5242, 8747],
    {
        8071: (e, t, i) => {
            "use strict";
            i.d(t, { n: () => d });
            var a = i(33008),
                r = i(85896),
                n = i(56016),
                l = i(42314),
                s = i(18740),
                o = i(71937),
                c = i.n(o);
            let d = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: o,
                        onPlayButtonClick: d,
                        shouldShowControl: u = !0,
                        playButtonIconSize: m,
                        alt: _,
                        className: g,
                    } = e,
                    p = (0, l.L)(() => {
                        if (t.entityType)
                            return t.entityType === n.h.ARTIST ? "round" : "xs";
                    });
                return (0, a.jsx)(s.q1, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, r.$)(
                        c().root,
                        c()["root_radius_".concat(p)],
                        { [c().root_withShadow]: !!t.entityType },
                        g,
                    ),
                    radius: p,
                    onPlayButtonClick: d,
                    isPlaying: i,
                    isCurrent: o,
                    alt: _,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: m,
                });
            };
        },
        8820: (e, t, i) => {
            "use strict";
            i.d(t, { K: () => r });
            var a = i(79169);
            let r = (e) => {
                var t;
                if (e)
                    return {
                        animationUri: e.animationUri,
                        cover: (0, a.pX4)(e.cover),
                        entityType: null == (t = e.entity) ? void 0 : t.type,
                    };
            };
        },
        10485: (e) => {
            e.exports = {
                root: "NotificationPin_root__DBEub",
                view: "NotificationPin_view__daGc_",
                image: "NotificationPin_image__o5F7B",
            };
        },
        12884: (e, t, i) => {
            "use strict";
            i.d(t, { VibeCardView: () => b });
            var a = i(33008),
                r = i(49053),
                n = i(85896),
                l = i(97531),
                s = i(74375),
                o = i(66268),
                c = i(56016),
                d = i(42213),
                u = i(42314),
                m = i(45415),
                _ = i(52756),
                g = i(91342),
                p = i(79169);
            let y = (e) => Math.max(0, Math.min(100, e)) / 100;
            var v = i(84781),
                C = i.n(v);
            let x = s.default.default(
                () =>
                    Promise.resolve()
                        .then(i.bind(i, 49053))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            (0, r.setWasmUrl)(
                "".concat(window.location.origin, "/dotlottie-player.wasm"),
            );
            let b = (0, l.PA)((e) => {
                let { agent: t, isPlaying: i } = e,
                    [r, l] = (0, o.useState)(null),
                    { state: s, toggleTrue: v } = (0, m.e)(!1),
                    { state: b, toggleTrue: h, toggleFalse: k } = (0, m.e)(!1),
                    { theme: P } = (0, p.DPo)(),
                    A = (0, o.useRef)(null),
                    f = t.entityType === c.h.ARTIST,
                    j = t.cover.color,
                    I = t.cover.uri,
                    w = (0, d.c)(async () => {
                        if (s && j && P) {
                            k();
                            let {
                                    color: e,
                                    glow1: i,
                                    glow2: a,
                                    mask: n,
                                } = ((e) => {
                                    let {
                                            averageColor: t,
                                            theme: i,
                                            custom: a,
                                        } = e,
                                        { h: r, s: n, l: l } = (0, p.g8k)(t),
                                        s = l,
                                        o = [0, 0, 0];
                                    a
                                        ? (i === p.Sxu.Dark || (s += 79),
                                          (o = (0, p.YLU)(r, y(n), y(s))))
                                        : (o = (0, p.YLU)(
                                              r,
                                              (n > 25
                                                  ? Math.min(n + 25, 60)
                                                  : n) / 100,
                                              (s > 20
                                                  ? Math.min(s + 15, 60)
                                                  : s) / 100,
                                          ));
                                    let c =
                                        i === p.Sxu.Dark
                                            ? [0.07, 0.07, 0.07]
                                            : [0.96, 0.96, 0.96];
                                    return {
                                        color: o,
                                        glow1:
                                            i === p.Sxu.Dark
                                                ? (0, p.YLU)(r, y(n), y(s + 36))
                                                : (0, p.YLU)(
                                                      r,
                                                      y(n),
                                                      y(s - 29),
                                                  ),
                                        glow2:
                                            i === p.Sxu.Dark
                                                ? (0, p.YLU)(r, y(n), y(s + 79))
                                                : (0, p.YLU)(
                                                      r,
                                                      y(n),
                                                      y(s - 53),
                                                  ),
                                        mask: c,
                                    };
                                })({
                                    averageColor: j,
                                    theme: P,
                                    custom: !t.entityType,
                                }),
                                l = JSON.stringify({
                                    rules: [
                                        {
                                            id: "color",
                                            type: "Color",
                                            value: e,
                                        },
                                        {
                                            id: "glow_1",
                                            type: "Color",
                                            value: i,
                                        },
                                        {
                                            id: "glow_2",
                                            type: "Color",
                                            value: a,
                                        },
                                        { id: "mask", type: "Color", value: n },
                                    ],
                                });
                            await (null == r ? void 0 : r.setThemeData(l)), h();
                        }
                    }),
                    L = (0, d.c)(() => {
                        v(), w();
                    });
                (0, o.useEffect)(() => {
                    i ? null == r || r.play() : null == r || r.pause();
                }, [r, i]),
                    (0, o.useEffect)(() => {
                        w();
                    }, [j, w, P, s]),
                    (0, o.useEffect)(() => {
                        if (r)
                            return (
                                r.setUseFrameInterpolation(!1),
                                r.setRenderConfig({ devicePixelRatio: 0.1 }),
                                r.addEventListener("load", L),
                                () => {
                                    r.removeEventListener("load", L);
                                }
                            );
                    }, [r, L]);
                let N = !s || !b,
                    B = (0, u.L)(() => {
                        if (!A.current) return;
                        let e = f ? 0.029 : 0.036;
                        return {
                            "--blur-size": "".concat(
                                A.current.clientWidth * e,
                                "px",
                            ),
                        };
                    });
                return (0, a.jsxs)("div", {
                    ref: A,
                    className: (0, n.$)(C().root, { [C().root_loading]: N }),
                    style: B,
                    children: [
                        (0, a.jsxs)("div", {
                            className: (0, n.$)(C().cover, {
                                [C().cover_round]: f,
                                [C().cover_loading]: N,
                            }),
                            children: [
                                t.entityType &&
                                    I &&
                                    (0, a.jsx)(_.Image, {
                                        src: I,
                                        size: 200,
                                        fit: "cover",
                                        withAvatarReplace: !0,
                                        className: C().image,
                                        withLoadingIndicator: !1,
                                    }),
                                (0, a.jsx)(x, {
                                    src: t.animationUri,
                                    loop: !0,
                                    dotLottieRefCallback: l,
                                    className: C().animation,
                                }),
                            ],
                        }),
                        (0, a.jsx)(g.Shimmer, {
                            className: (0, n.$)(C().shimmer, {
                                [C().shimmer_loading]: N,
                            }),
                            isActive: !0,
                            radius: f ? "round" : "s",
                        }),
                    ],
                });
            });
        },
        14829: (e, t, i) => {
            "use strict";
            i.d(t, { r: () => n });
            var a = i(66268),
                r = i(73827);
            let n = (e) => {
                let { formatMessage: t } = (0, r.A)();
                return (0, a.useMemo)(() => {
                    let i = "";
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: "entity-names.has-your-like" }))
                        : "number" == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t(
                                        { id: "entity-names.likes-counter" },
                                        { counter: e.actualLikesCount },
                                    )
                                  : t({
                                        id: "entity-names.likes-counter-empty",
                                    }));
                    let a = t(
                        { id: "entity-names.playlist-name" },
                        { playlistName: e.title },
                    );
                    return "".concat(a, " ").concat(i);
                }, [t, e]);
            };
        },
        17661: (e, t, i) => {
            "use strict";
            i.d(t, { h: () => a });
            var a = (function (e) {
                return (e.SMALL = "small"), (e.LARGE = "large"), e;
            })({});
        },
        17999: (e, t, i) => {
            "use strict";
            i.d(t, { PlaylistsCarousel: () => o });
            var a = i(33008),
                r = i(66268),
                n = i(18740),
                l = i(56395);
            let s = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: r,
                        title: s,
                        description: o,
                        playlists: c,
                        containerClassName: d,
                        className: u,
                        headerClassName: m,
                        viewAllActionLink: _,
                        headingVariant: g,
                        ...p
                    } = e;
                    return (0, a.jsx)(n.OY, {
                        isShimmerVisible: i,
                        isShimmerActive: r,
                        className: u,
                        headerClassName: m,
                        containerClassName: d,
                        ref: t,
                        title: s,
                        description: o,
                        viewAllActionLink: _,
                        headingVariant: g,
                        ...p,
                        children:
                            null == c
                                ? void 0
                                : c.map((e) =>
                                      (0, a.jsx)(
                                          l.PlaylistCard,
                                          { playlist: e, contentLinesCount: 3 },
                                          e.key,
                                      ),
                                  ),
                    });
                },
                o = (0, r.forwardRef)((e, t) =>
                    (0, a.jsx)(s, { forwardRef: t, ...e }),
                );
        },
        19525: (e) => {
            e.exports = {
                description: "HorizontalPlaylistCard_description__KYHZF",
                likesCount: "HorizontalPlaylistCard_likesCount__rgUhr",
                tracksCount: "HorizontalPlaylistCard_tracksCount__ZdjzM",
                icon: "HorizontalPlaylistCard_icon__LHymu",
            };
        },
        23415: (e, t, i) => {
            "use strict";
            i.d(t, { VibeAgentCard: () => v });
            var a = i(33008),
                r = i(85896),
                n = i(97531),
                l = i(66268),
                s = i(18064),
                o = i(42314),
                c = i(69476),
                d = i(77868),
                u = i(79169),
                m = i(18740),
                _ = i(28972),
                g = i(12884),
                p = i(23513),
                y = i.n(p);
            let v = (0, n.PA)((e) => {
                let { vibe: t, className: i } = e,
                    { pageId: n } = (0, u.$au)(),
                    { blockIdForFrom: p } = (0, u.N8n)(),
                    { ref: v, intersectionPropertyId: C } = (0, u.nMI)(),
                    { isFreemium: x } = (0, u.XCI)(),
                    [b, h] = (0, l.useState)(!1),
                    k = (0, _.useOnPinClick)(t),
                    { isPlaying: P, togglePlay: A } = (0, u.B0S)({
                        seeds: t.seeds,
                        pageIdForFrom: n,
                        blockIdForFrom: p,
                    }),
                    f = (0, u.brA)(),
                    j = (0, l.useCallback)(() => {
                        A(), f(!P);
                    }, [A, P, f]),
                    I = (0, l.useCallback)(
                        () =>
                            (0, a.jsx)(
                                m.DM,
                                {
                                    className: (0, r.$)(
                                        y().playButton,
                                        y().control,
                                    ),
                                    buttonVariant: "default",
                                    withHover: !1,
                                    iconSize: "xl",
                                    variant: "filled",
                                    onClick: j,
                                    isPlaying: P,
                                },
                                t.getKey("PlayButton"),
                            ),
                        [t, j, P],
                    ),
                    w = (0, o.L)(() =>
                        (0, a.jsx)(m.SU, {
                            isEnabled: x,
                            isOpened: b,
                            onOpenChange: h,
                            placement: "top",
                            textVariant: "vibe",
                            vibeTextVariant: t.stationType,
                            renderChildren: I,
                        }),
                    ),
                    L = (0, o.L)(() =>
                        (0, a.jsx)(
                            m.O0,
                            {
                                onClick: k,
                                isPinned: t.isPinned,
                                className: (0, r.$)(y().pinButton, y().control),
                                withRipple: !1,
                            },
                            t.getKey("PinButton"),
                        ),
                    ),
                    N = (0, o.L)(() =>
                        (0, a.jsxs)("div", {
                            className: y().cover,
                            children: [
                                t.agent &&
                                    (0, a.jsx)(g.VibeCardView, {
                                        agent: t.agent,
                                        isPlaying: P,
                                    }),
                                (0, a.jsx)(c.hg, {
                                    isVisible: b,
                                    className: y().controls,
                                    playControl: w,
                                    pinControl: L,
                                }),
                            ],
                        }),
                    );
                return (0, a.jsx)(c.MN, {
                    ref: v,
                    className: (0, r.$)(y().root, i),
                    "data-intersection-property-id": C,
                    contentLinesCount: 3,
                    view: N,
                    textPosition: "center",
                    title: (0, a.jsx)(d.Caption, {
                        variant: "div",
                        type: "entity",
                        size: "s",
                        weight: "medium",
                        lineClamp: 2,
                        children: t.title,
                    }),
                    description: (0, a.jsx)(d.Caption, {
                        variant: "div",
                        type: "entity",
                        size: "s",
                        weight: "medium",
                        lineClamp: 1,
                        children: t.description,
                    }),
                    ...(0, s.Am)(s.OA.vibe.VIBE_AGENT_CARD),
                });
            });
        },
        23513: (e) => {
            e.exports = {
                root: "VibeAgentCard_root__GVtqu",
                cover: "VibeAgentCard_cover__In0Nz",
                controls: "VibeAgentCard_controls__yXgoW",
                control: "VibeAgentCard_control__toXgO",
                pinButton: "VibeAgentCard_pinButton___f4vw",
                playButton: "VibeAgentCard_playButton__5YkZS",
            };
        },
        28972: (e, t, i) => {
            "use strict";
            i.d(t, { useOnPinClick: () => x });
            var a = i(33008),
                r = i(29318),
                n = i(66268),
                l = i(73827),
                s = i(34874),
                o = i(79169),
                c = i(18740),
                d = i(97531),
                u = i(18064),
                m = i(42314),
                _ = i(52756),
                g = i(8071),
                p = i(10485),
                y = i.n(p);
            let v = (0, d.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: r } = (0, o.Pjs)(),
                    n = r.checkExperiment(
                        o.zal.WebNextWaveAgentExperiment,
                        "on",
                    ),
                    l = (0, m.L)(() => {
                        var e;
                        return n && t.agent
                            ? (0, a.jsx)(g.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: y().view,
                              })
                            : (0, a.jsx)(_.Image, {
                                  className: y().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: "cover",
                                  withAvatarReplace: !0,
                                  "aria-hidden": !0,
                                  style: {
                                      backgroundColor:
                                          null == (e = t.colors)
                                              ? void 0
                                              : e.average,
                                  },
                                  withLoadingIndicator: !1,
                                  ...(0, u.Am)(
                                      u.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                                  ),
                              });
                    }),
                    s = n && t.agent ? void 0 : "round";
                return (0, a.jsx)(c.k4, {
                    closeToast: i,
                    entityVariant: c.cp.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: l,
                    radius: s,
                    className: y().root,
                });
            });
            var C = i(8820);
            let x = (e) => {
                let { user: t, pinsCollection: i } = (0, o.Pjs)(),
                    { notify: d } = (0, o.lkh)(),
                    { formatMessage: u } = (0, l.A)(),
                    [m, _] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized)
                        return void d(
                            (0, a.jsx)(c.hT, {
                                error: u({
                                    id: "authorization-messages.need-to-authorizate",
                                }),
                            }),
                            { containerId: o.uQT.ERROR },
                        );
                    if (m) return;
                    let n = {
                            ...(0, r.HO)(e),
                            isPinned: !e.isPinned,
                            getDescription: e.getDescription,
                        },
                        l = i.get(e.pinId);
                    _(!0);
                    let g = await e.togglePin();
                    _(!1),
                        l &&
                            l.type === s._.WAVE_ITEM &&
                            l.data.backgroundImageUrl &&
                            ((n.backgroundImageUrl = l.data.backgroundImageUrl),
                            (n.colors = l.data.colors),
                            (n.agent = l.data.agent)),
                        g &&
                            "object" == typeof g &&
                            "data" in g &&
                            (g.data.backgroundImageUrl &&
                                (n.backgroundImageUrl =
                                    g.data.backgroundImageUrl),
                            g.data.colors &&
                                (n.colors = {
                                    average: g.data.colors.average,
                                    waveText: g.data.colors.waveText,
                                }),
                            g.data.agent && (n.agent = (0, C.K)(g.data.agent))),
                        g
                            ? d((0, a.jsx)(v, { vibe: n }), {
                                  containerId: o.uQT.INFO,
                              })
                            : d(
                                  (0, a.jsx)(c.hT, {
                                      error: u({
                                          id: "error-messages.error-during-action",
                                      }),
                                  }),
                                  { containerId: o.uQT.ERROR },
                              );
                }, [u, d, m, i, t.isAuthorized, e]);
            };
        },
        30672: (e) => {
            e.exports = {
                card_root: "HorizontalCardContainer_root__YoAAP",
                root: "ControlsBar_root__mf9o_",
                item: "ControlsBar_item__4YJMp",
                item_buttonArrow: "ControlsBar_item_buttonArrow__9hTqa",
                controls: "ControlsBar_controls__DcFpX",
                likeIcon: "ControlsBar_likeIcon__g8y02",
                trailerIcon: "ControlsBar_trailerIcon__iH6eY",
                controls_disabled: "ControlsBar_controls_disabled___hlf6",
            };
        },
        41143: (e) => {
            e.exports = {
                card_root: "HorizontalCardContainer_root__YoAAP",
                root: "SearchVibeCard_root__9otOP",
                playButton: "SearchVibeCard_playButton__ZNWNz",
                playButtonIcon: "SearchVibeCard_playButtonIcon__GJrNv",
            };
        },
        42347: (e) => {
            e.exports = {
                root: "VibeButton_root___i3R5",
                ripple: "VibeButton_ripple__cmoBR",
                textContainer: "VibeButton_textContainer__j9nOW",
                titleContainer: "VibeButton_titleContainer__yrRRu",
                title: "VibeButton_title__sLC0I",
                subtitle: "VibeButton_subtitle__MQ_Ca",
                image: "VibeButton_image__GOwKJ",
                button: "VibeButton_button__tXFAm",
                button_loading: "VibeButton_button_loading__LYnUR",
                "applying-setting": "VibeButton_applying-setting__Jd_3C",
                icon: "VibeButton_icon__KIv7n",
            };
        },
        45242: (e, t, i) => {
            "use strict";
            i.d(t, {
                pA: () => k.EmptyPlaylistBlock,
                vf: () => P.HorizontalPlaylistCard,
                B6: () => A.PlaylistCard,
                BL: () => b,
                IP: () => h,
                EC: () => f.PlaylistsCarousel,
                bk: () => n,
                ZC: () => d,
                Ew: () => m,
                pd: () => g,
            });
            var a = i(41028),
                r = i(79169);
            let n = (e) => {
                var t, i;
                let {
                    playlist: n,
                    generatedPlaylistType: l,
                    likesCount: s,
                    trailer: o,
                    tracksCount: c,
                } = e;
                return (0, a.wg)({
                    isAvailable: null == (i = n.available) || i,
                    uuid: n.playlistUuid,
                    title: n.title,
                    uid: n.uid,
                    kind: n.kind,
                    coverUri: null == (t = n.cover) ? void 0 : t.uri,
                    generatedPlaylistType: l,
                    likesCount: s,
                    tracksCount: c,
                    trailer: (0, r.mxW)(o),
                });
            };
            var l = i(17846),
                s = i(66268);
            (0, s.cache)(async (e, t) => {
                var i;
                let a;
                try {
                    let {
                        container: i,
                        backendHostTld: n,
                        locale: l,
                        host: s,
                        fullUrl: o,
                        isRSC: c,
                        requestUrl: d,
                    } = await (0, r.IhE)();
                    if (c)
                        return {
                            playlist: void 0,
                            backendHostTld: n,
                            locale: l,
                            host: s,
                            fullUrl: o,
                            requestUrl: d,
                        };
                    let u = i.get(r._19);
                    a = {
                        playlist: await u.getPlaylistWithTracksIds({
                            userId: e,
                            playlistKind: t,
                            resumeStream: !1,
                        }),
                        backendHostTld: n,
                        locale: l,
                        host: s,
                        fullUrl: o,
                        requestUrl: d,
                    };
                } catch (e) {
                    return (0, r.tfF)(e, () => ({
                        playlist: void 0,
                        ...(0, r.Bj3)(),
                    }));
                }
                return (
                    (null == (i = a.playlist) ? void 0 : i.error) ===
                        "not-found" && (0, l.notFound)(),
                    a
                );
            }),
                (0, s.cache)(async (e) => {
                    var t;
                    let i;
                    (0, r.sU0)(e) || (0, l.notFound)();
                    try {
                        let {
                            container: t,
                            backendHostTld: a,
                            locale: n,
                            host: l,
                            fullUrl: s,
                            isRSC: o,
                            requestUrl: c,
                        } = await (0, r.IhE)();
                        if (o)
                            return {
                                playlist: void 0,
                                backendHostTld: a,
                                locale: n,
                                host: l,
                                fullUrl: s,
                                requestUrl: c,
                            };
                        let d = t.get(r.qNr);
                        i = {
                            playlist: await d.getPlaylist({
                                playlistUuid: e,
                                resumeStream: !1,
                                richTracks: !1,
                            }),
                            backendHostTld: a,
                            locale: n,
                            host: l,
                            fullUrl: s,
                            requestUrl: c,
                        };
                    } catch (e) {
                        return (0, r.tfF)(e, () => ({
                            playlist: void 0,
                            ...(0, r.Bj3)(),
                        }));
                    }
                    return (
                        (null == (t = i.playlist) ? void 0 : t.error) ===
                            "not-found" && (0, l.notFound)(),
                        i
                    );
                });
            var o = i(25911);
            let c = (e) => ({
                    uid: e.uid,
                    login: e.login,
                    name: e.name,
                    sex: e.sex,
                    verified: e.verified,
                }),
                d = (e) =>
                    (0, a.wg)({
                        ...(0, o.jX)(e),
                        owner: e.owner ? c(e.owner) : void 0,
                        description: e.description,
                        tags: e.tags,
                        modified: e.modified,
                        madeFor: e.madeFor
                            ? ((e) =>
                                  (0, a.wg)({
                                      userInfo: e.userInfo
                                          ? c(e.userInfo)
                                          : null,
                                      caseForms: e.caseForms
                                          ? (0, r.NH4)(e.caseForms)
                                          : null,
                                  }))(e.madeFor)
                            : null,
                    });
            var u = i(70879);
            let m = (e) => {
                var t, i;
                return (0, a.wg)({
                    ...(0, o.jX)(e),
                    artists:
                        null !=
                        (i =
                            null == e || null == (t = e.artists)
                                ? void 0
                                : t.map(u.dM))
                            ? i
                            : [],
                });
            };
            var _ = i(61744);
            let g = (e) => {
                var t, i;
                return (0, a.wg)({
                    ...(0, o.jX)(e),
                    tracks:
                        null !=
                        (i =
                            null == e || null == (t = e.tracks)
                                ? void 0
                                : t.map(_.Rw))
                            ? i
                            : [],
                });
            };
            var p = i(59615),
                y = i(64802);
            let v = a.gK.model("PlaylistOwner", {
                    uid: a.gK.number,
                    login: a.gK.string,
                    name: a.gK.string,
                    sex: a.gK.enumeration(Object.values(y.U)),
                    verified: a.gK.boolean,
                }),
                C = a.gK.model("PlaylistOwner", {
                    userInfo: a.gK.maybeNull(v),
                    caseForms: a.gK.maybeNull(p.lg),
                }),
                x = a.gK.model("PlaylistTag", {
                    id: a.gK.string,
                    value: a.gK.string,
                }),
                b = o.$o
                    .props({
                        owner: a.gK.maybe(v),
                        modified: a.gK.string,
                        description: a.gK.maybe(a.gK.string),
                        tags: a.gK.maybeNull(a.gK.array(x)),
                        madeFor: a.gK.maybeNull(C),
                    })
                    .views((e) => ({
                        get seeds() {
                            var t;
                            return [
                                "playlist:"
                                    .concat(
                                        null == (t = e.owner)
                                            ? void 0
                                            : t.login,
                                        "_",
                                    )
                                    .concat(e.kind),
                            ];
                        },
                        get tagsString() {
                            let { experiments: t } = (0, a.Zn)(e);
                            if (
                                !t.checkExperiment(
                                    r.zal.WebEditorsFeatures,
                                    "on",
                                ) ||
                                !Array.isArray(e.tags) ||
                                !e.tags.length
                            )
                                return null;
                            return e.tags.map((e) => e.value).join(", ");
                        },
                    }))
                    .actions((e) => ({
                        changeDescription: (0, a.L3)(function* (t) {
                            if (!(0, a._n)(e)) return r.FlZ.ERROR;
                            if (e.description === t) return r.FlZ.OK;
                            if (t.length > o.iz) return r.FlZ.ERROR;
                            let { usersResource: i, modelActionsLogger: n } =
                                (0, a._$)(e);
                            if (e.canUserChange) {
                                let a = e.description;
                                e.description = t;
                                try {
                                    let a = yield i.changePlaylistDescription({
                                        description: t,
                                        userId: e.uid,
                                        playlistKind: e.kind,
                                    });
                                    return (
                                        (e.description = a.description),
                                        r.FlZ.OK
                                    );
                                } catch (t) {
                                    (e.description = a), n.error(t);
                                }
                            }
                            return r.FlZ.ERROR;
                        }),
                        changePlaylistCover: (0, a.L3)(function* (t) {
                            if (!(0, a._n)(e)) return r.FlZ.ERROR;
                            let { usersResource: i, modelActionsLogger: n } =
                                (0, a._$)(e);
                            try {
                                let a = yield i.uploadPlaylistCover({
                                    userId: e.uid,
                                    formData: t,
                                    playlistKind: e.kind,
                                });
                                return (e.coverUri = a.cover.uri), r.FlZ.OK;
                            } catch (e) {
                                n.error(e);
                            }
                            return r.FlZ.ERROR;
                        }),
                    }))
                    .named("PlaylistMeta"),
                h = o.Zq.props({ artists: a.gK.maybe(a.gK.array(u.PK)) });
            var k = i(91919),
                P = i(75658),
                A = i(56395),
                f = i(17999);
        },
        51379: (e, t, i) => {
            "use strict";
            var a;
            i.d(t, { y: () => a }), ((a || (a = {})).MIX = "MIX");
        },
        54344: (e, t, i) => {
            "use strict";
            i.d(t, {
                H2: () => p.SearchVibeCard,
                yi: () => y.VibeAgentCard,
                hl: () => l.h,
                xy: () => v.VibeButton,
                Eb: () => v.VibeButtonShimmer,
                Gh: () => g,
                nr: () => C.n,
                er: () => n,
                A7: () => s.useOnPinClick,
                KU: () => r.K,
                lb: () => o,
            });
            var a = i(41028),
                r = i(8820);
            let n = (e) => {
                var t, i, n, l;
                return (0, a.wg)({
                    title: e.title,
                    description: e.header,
                    seeds: e.seeds,
                    animationUrl: e.animationUrl,
                    backgroundImageUrl: e.backgroundImageUrl,
                    imageUrl: e.imageUrl,
                    colors: {
                        average:
                            null !=
                            (n = null == (t = e.colors) ? void 0 : t.average)
                                ? n
                                : "",
                        waveText:
                            null !=
                            (l = null == (i = e.colors) ? void 0 : i.waveText)
                                ? l
                                : "",
                    },
                    agent: (0, r.K)(e.agent),
                });
            };
            var l = i(17661),
                s = i(28972);
            let o = (e, t) => {
                var i;
                return (0, a.wg)({
                    title: e.name,
                    seeds: e.seeds,
                    description: e.description,
                    type: null != (i = e.type) ? i : void 0,
                    agent: (0, r.K)(t),
                });
            };
            var c = i(59615);
            let d = a.gK.model("VibeAgent", {
                animationUri: a.gK.string,
                cover: c.$B,
                entityType: a.gK.maybe(a.gK.string),
            });
            var u = i(73273),
                m = i(51379),
                _ = i(79169);
            let g = a.gK
                .model("Vibe", {
                    title: a.gK.optional(a.gK.string, ""),
                    description: a.gK.maybe(a.gK.string),
                    seeds: a.gK.array(a.gK.string),
                    imageUrl: a.gK.maybe(a.gK.string),
                    animationUrl: a.gK.maybe(a.gK.string),
                    backgroundImageUrl: a.gK.maybe(a.gK.string),
                    backgroundColor: a.gK.maybe(a.gK.string),
                    type: a.gK.maybe(a.gK.string),
                    colors: a.gK.maybe(
                        a.gK.model({
                            average: a.gK.maybe(a.gK.string),
                            waveText: a.gK.maybe(a.gK.string),
                        }),
                    ),
                    agent: a.gK.maybe(d),
                })
                .views((e) => {
                    let t = {
                        get stationId() {
                            var i;
                            return null != (i = e.seeds[0]) ? i : "";
                        },
                        get context() {
                            if (e.seeds) {
                                if (t.stationId !== _.M19) return e.title;
                                else if (e.seeds.length > 1) return e.title;
                            }
                            return null;
                        },
                        get pinId() {
                            return (0, u.f)(e.seeds);
                        },
                        get isPinned() {
                            if (!(0, a._n)(e)) return !1;
                            let { pinsCollection: t } = (0, a.Zn)(e);
                            return t.isPinned(this.pinId);
                        },
                        get stationType() {
                            var r, n;
                            return null !=
                                (n =
                                    null == (r = t.stationId)
                                        ? void 0
                                        : r.split(":")[0])
                                ? n
                                : "";
                        },
                        get isMix() {
                            return e.type === m.y.MIX;
                        },
                        get shouldShowAgent() {
                            if (!(0, a._n)(e)) return !1;
                            let { experiments: t } = (0, a.Zn)(e);
                            return t.checkExperiment(
                                _.zal.WebNextWaveAgentExperiment,
                                "on",
                            );
                        },
                    };
                    return t;
                })
                .actions((e) => ({
                    getKey: (t) => "".concat(t, "_").concat(e.seeds[0]),
                    togglePin: (0, a.L3)(function* () {
                        if (!(0, a._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, a.Zn)(e);
                        if (i.isAuthorized)
                            return yield t.toggleVibePin(
                                { seeds: e.seeds },
                                e.pinId,
                            );
                    }),
                    getDescription() {
                        let t =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "";
                        if (!(0, a._n)(e)) return t;
                        let { experiments: i } = (0, a.Zn)(e);
                        return i.checkExperiment(
                            _.zal.WebNextVibeDescription,
                            "on",
                        ) && void 0 !== (null == e ? void 0 : e.description)
                            ? e.description
                            : t;
                    },
                }));
            var p = i(54621),
                y = i(23415),
                v = i(96025);
            i(12884);
            var C = i(8071);
        },
        54621: (e, t, i) => {
            "use strict";
            i.d(t, { SearchVibeCard: () => C });
            var a = i(33008),
                r = i(85896),
                n = i(97531),
                l = i(66268),
                s = i(18064),
                o = i(42213),
                c = i(88485),
                d = i(77868),
                u = i(79169),
                m = i(18740),
                _ = i(17661),
                g = i(12884),
                p = i(8071),
                y = i(41143),
                v = i.n(y);
            let C = (0, n.PA)((e) => {
                let {
                        className: t,
                        vibe: i,
                        cover: n,
                        coverClassName: y,
                        playButtonIconSize: C,
                        description: x,
                        agentVariant: b,
                    } = e,
                    { ref: h, intersectionPropertyId: k } = (0, u.nMI)(),
                    { pageId: P } = (0, u.$au)(),
                    [A, f] = (0, l.useState)(!1),
                    { blockIdForFrom: j } = (0, u.N8n)(),
                    { isFreemium: I } = (0, u.XCI)(),
                    { sendPlaySearchFeedback: w } = (0, u.zEv)(),
                    L = (0, u.brA)(),
                    [N, B] = (0, l.useState)(!1),
                    K = (0, u.PT7)(),
                    {
                        isPlaying: T,
                        togglePlay: V,
                        isCurrent: S,
                    } = (0, u.B0S)({
                        seeds: i.seeds,
                        pageIdForFrom: P,
                        blockIdForFrom: j,
                    }),
                    E = (0, o.c)(() => {
                        if (!K()) {
                            if (I) return void B(!0);
                            A || T || (f(!0), null == w || w()), V(), L(!T);
                        }
                    }),
                    z = (0, o.c)(() => {
                        T || E();
                    }),
                    R = (0, o.c)((e) => {
                        2 === e.detail ? z() : (0, c.P)(e, m.$f.ripple);
                    }),
                    U = (0, l.useCallback)(() => {
                        if (i.shouldShowAgent && i.agent && b)
                            switch (b) {
                                case _.h.LARGE:
                                    return (0, a.jsxs)("div", {
                                        className: (0, r.$)(
                                            v().root,
                                            m.$f.playButtonCell,
                                            y,
                                        ),
                                        children: [
                                            (0, a.jsx)(g.VibeCardView, {
                                                agent: i.agent,
                                                isPlaying: T,
                                            }),
                                            (0, a.jsx)(m.DM, {
                                                variant: "filled",
                                                className: v().playButton,
                                                iconClassName:
                                                    v().playButtonIcon,
                                                isPlaying: T,
                                                onClick: E,
                                                iconSize: "m",
                                            }),
                                        ],
                                    });
                                case _.h.SMALL:
                                    return (0, a.jsx)(p.n, {
                                        agent: i.agent,
                                        isPlaying: T,
                                        isCurrent: S,
                                        onPlayButtonClick: E,
                                        alt: "".concat(x, " ").concat(i.title),
                                        className: (0, r.$)(
                                            m.$f.playButtonCell,
                                            y,
                                        ),
                                    });
                            }
                        return (0, a.jsx)(m.q1, {
                            isAvailable: !0,
                            coverUri: null == n ? void 0 : n.uri,
                            title: i.title,
                            className: (0, r.$)(m.$f.playButtonCell, y),
                            entityCoverStyle: {
                                backgroundColor: null == n ? void 0 : n.color,
                            },
                            radius: "round",
                            onPlayButtonClick: E,
                            isPlaying: T,
                            isCurrent: S,
                            playButtonIconSize: C,
                            alt: "".concat(x, " ").concat(i.title),
                        });
                    }, [
                        b,
                        null == n ? void 0 : n.color,
                        null == n ? void 0 : n.uri,
                        y,
                        x,
                        E,
                        S,
                        T,
                        C,
                        i.agent,
                        i.shouldShowAgent,
                        i.title,
                    ]);
                return (0, a.jsxs)(m.Cj, {
                    ref: h,
                    "data-intersection-property-id": k,
                    className: (0, r.$)(m.$f.root, t),
                    "aria-label": i.title,
                    onClick: R,
                    ...(0, s.Am)(s.OA.vibe.SEARCH_VIBE_CARD),
                    children: [
                        (0, a.jsx)(m.SU, {
                            isOpened: N,
                            onOpenChange: B,
                            isEnabled: I,
                            placement: "bottom",
                            textVariant: "vibe",
                            vibeTextVariant: i.stationType,
                            renderChildren: U,
                        }),
                        (0, a.jsx)(m.ro, {
                            title: (0, a.jsx)(d.Caption, {
                                className: (0, r.$)(m.$f.text, m.$f.titleText),
                                size: "m",
                                variant: "div",
                                type: "text",
                                children: i.title,
                            }),
                            description: x,
                        }),
                    ],
                });
            });
        },
        56016: (e, t, i) => {
            "use strict";
            var a;
            i.d(t, { h: () => a }),
                (function (e) {
                    (e.ALBUM = "album"),
                        (e.PLAYLIST = "playlist"),
                        (e.TRACK = "track"),
                        (e.ARTIST = "artist");
                })(a || (a = {}));
        },
        56395: (e, t, i) => {
            "use strict";
            i.d(t, { PlaylistCard: () => I });
            var a = i(33008),
                r = i(85896),
                n = i(97531),
                l = i(66268),
                s = i(73827),
                o = i(93967),
                c = i(18064),
                d = i(48509),
                u = i(42213),
                m = i(42314),
                _ = i(69476),
                g = i(78016),
                p = i(54487),
                y = i(77868),
                v = i(70879),
                C = i(25911),
                x = i(79169),
                b = i(18740),
                h = i(14829),
                k = i(66098),
                P = i(28996);
            let A = (0, n.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: r, open: n, ...l } = e,
                    {
                        shouldShowBuySubscriptionModal: d,
                        showBuySubscriptionModal: m,
                    } = (0, x.qBP)(),
                    {
                        experiments: _,
                        settings: { isMobile: g },
                        trailer: p,
                        user: y,
                    } = (0, x.Pjs)(),
                    v = (0, C.KX)(i),
                    h = (0, C.A7)(i),
                    A = (0, x.Ftl)(),
                    { formatMessage: f } = (0, s.A)(),
                    j = (0, x.PT7)(),
                    I = _.checkExperiment(x.zal.WebEditorsFeatures, "on"),
                    w = (0, P.A_)({
                        entityVariant: x.DwC.PLAYLIST,
                        urlParams: { id: i.uid, kind: i.kind },
                    });
                (0, x.NBO)(n);
                let L = (0, u.c)(() => {
                    if (d) return void m();
                    j() ||
                        (p.openPlaylistTrailer(i.id), A(o.ky.Playlist, i.id));
                });
                return (0, a.jsxs)(k.W1, {
                    title: i.title,
                    onOpenChange: r,
                    open: n,
                    offsetOptions: 10,
                    isMobile: g,
                    ariaLabel: f({ id: "interface-actions.context-menu" }),
                    containerProps: (0, c.Am)(
                        c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ),
                    ...l,
                    children: [
                        I &&
                            (0, a.jsx)(P.dx, {
                                entityVariant: x.DwC.PLAYLIST,
                                adminUrl: i.isFavouritePlaylist ? void 0 : w,
                            }),
                        !g &&
                            (0, a.jsx)(b.L1, {
                                onClick: h,
                                isPinned: i.isPinned,
                            }),
                        !i.isFavouritePlaylist &&
                            (0, a.jsx)(b.TW, {
                                onClick: v,
                                isLiked: i.isLiked,
                                disabled: !y.isAuthorized,
                            }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) &&
                            (0, a.jsx)(b.No, {
                                onClick: L,
                                disabled: !i.isAvailable,
                            }),
                    ],
                });
            });
            var f = i(96973),
                j = i.n(f);
            let I = (0, n.PA)((e) => {
                let {
                        className: t,
                        playlist: i,
                        children: n,
                        contentLinesCount: k,
                        customDescription: P,
                    } = e,
                    { ref: f, intersectionPropertyId: I } = (0, x.nMI)(),
                    { trailer: w, user: L } = (0, x.Pjs)(),
                    { from: N, utmLink: B } = (0, x.fyy)({
                        contextId: i.uuid,
                        contextType: d.K.Playlist,
                    }),
                    { formatMessage: K } = (0, s.A)(),
                    {
                        sendLikeSearchFeedback: T,
                        sendNavigateSearchFeedback: V,
                        sendPlaySearchFeedback: S,
                    } = (0, x.zEv)(),
                    [E, z] = (0, l.useState)(!1),
                    [R, U] = (0, l.useState)(!1),
                    [O, M] = (0, l.useState)(!1),
                    $ = (0, h.r)(i),
                    F = (0, C.KX)(i),
                    D = (0, C.A7)(i),
                    Y = (0, x.NKK)(),
                    H = (0, x.brA)(),
                    X = (0, x.ZpR)(i.url),
                    Z = (0, x.Ftl)(),
                    W = (0, x.PT7)(),
                    q = (0, u.c)((e) => {
                        if ((e.stopPropagation(), W()))
                            return void e.preventDefault();
                        w.setUtmLink(B),
                            w.openPlaylistTrailer(i.id),
                            Z(o.ky.Playlist, i.id);
                    }),
                    [Q, G] = (0, l.useState)(!1),
                    { isPlaying: J, togglePlay: ee } = (0, x.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: d.K.Playlist,
                                meta: { id: i.id, uuid: i.uuid },
                                from: N,
                                utmLink: B,
                            },
                            loadContextMeta: !0,
                        },
                    }),
                    et = (0, u.c)(() => {
                        Y({ to: o.QT.PlaylistScreen }), null == V || V();
                    }),
                    ei = (0, u.c)((e) => {
                        et(), X(e);
                    }),
                    ea = (0, u.c)(() => {
                        W() ||
                            (E || J || (z(!0), null == S || S()), ee(), H(!J));
                    }),
                    er = (0, u.c)(() => {
                        R || i.isLiked || (U(!0), null == T || T()), F();
                    }),
                    en = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    el = (0, u.c)((e) => {
                        M(e), G(e);
                    }),
                    es = (0, l.useMemo)(() => {
                        var e;
                        return P
                            ? (0, a.jsx)(
                                  y.Caption,
                                  {
                                      variant: "span",
                                      type: "entity",
                                      size: "s",
                                      weight: "medium",
                                      lineClamp: 2,
                                      children: P,
                                  },
                                  i.getKey("description"),
                              )
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, a.jsx)(
                                    v.iQ,
                                    {
                                        className: j().artists,
                                        artists: i.artists,
                                        lineClamp: 1,
                                        linkClassName: j().artistLink,
                                        captionSize: "s",
                                    },
                                    i.getKey("description"),
                                )
                              : void 0;
                    }, [P, i]),
                    eo = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, a.jsx)(
                                b.cy,
                                {
                                    className: (0, r.$)(
                                        j().likeButton,
                                        j().control,
                                    ),
                                    isLiked: i.isLiked,
                                    onClick: er,
                                    variant: "default",
                                    size: "s",
                                    iconSize: "xxs",
                                    disabled: !L.isAuthorized,
                                },
                                i.getKey("LikeButton"),
                            );
                    }),
                    ec = (0, l.useMemo)(() => {
                        var e;
                        if (
                            null == i || null == (e = i.trailer)
                                ? void 0
                                : e.isAvailable
                        )
                            return (0, a.jsx)(
                                b.nE,
                                {
                                    children: (0, a.jsx)(
                                        b.kJ,
                                        {
                                            className: (0, r.$)(
                                                j().trailerButton,
                                                j().control,
                                            ),
                                            radius: "round",
                                            size: "s",
                                            iconSize: "xxs",
                                            onClick: q,
                                        },
                                        i.getKey("TrailerButton"),
                                    ),
                                },
                                i.getKey("PlaylilstCardTrailerTooltip"),
                            );
                    }, [q, i]),
                    ed = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(
                                b.O0,
                                {
                                    onClick: D,
                                    isPinned: i.isPinned,
                                    className: (0, r.$)(
                                        j().pinButton,
                                        j().control,
                                    ),
                                    withRipple: !1,
                                },
                                i.getKey("PinButton"),
                            ),
                        [D, i],
                    ),
                    eu = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(p.Paper, {
                                className: j().cover,
                                radius: "s",
                                withShadow: !0,
                                ...(0, c.Am)(c.Kq.playlist.PLAYLIST_CARD),
                                children: (0, a.jsxs)("div", {
                                    className: j().coverBlock,
                                    onClick: ei,
                                    children: [
                                        (0, a.jsx)(b.BW, {
                                            className: j().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: "cover",
                                            alt: $,
                                            withAvatarReplace: !0,
                                            "aria-hidden": !0,
                                        }),
                                        (0, a.jsx)(_.hg, {
                                            isVisible: O || Q,
                                            className: j().controls,
                                            playControl: (0, a.jsx)(
                                                b.DM,
                                                {
                                                    className: (0, r.$)(
                                                        j().playButton,
                                                        j().control,
                                                    ),
                                                    buttonVariant: "default",
                                                    withHover: !1,
                                                    iconSize: "xl",
                                                    variant: "filled",
                                                    onClick: ea,
                                                    isPlaying: J,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey("PlayButton"),
                                            ),
                                            likeControl: eo,
                                            menuControl: (0, a.jsx)(
                                                A,
                                                {
                                                    playlist: i,
                                                    onOpenChange: el,
                                                    open: O,
                                                    onClick: en,
                                                    className: (0, r.$)(
                                                        j().menuButton,
                                                        j().control,
                                                    ),
                                                    icon: (0, a.jsx)(g.Icon, {
                                                        size: "xxs",
                                                        variant: "more",
                                                    }),
                                                    size: "s",
                                                    ...(0, c.Am)(
                                                        c.Kq.playlist
                                                            .PLAYLIST_CONTEXT_MENU_BUTTON,
                                                    ),
                                                },
                                                i.getKey("PlaylistContextMenu"),
                                            ),
                                            pinControl: ed,
                                            trailerControl: ec,
                                        }),
                                    ],
                                }),
                            }),
                        [ei, i, $, O, Q, ea, J, eo, el, en, ed, ec],
                    ),
                    em = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, a.jsxs)(_.MN, {
                    ref: f,
                    "aria-label": $,
                    className: (0, r.$)(j().root, t),
                    title: (0, a.jsx)(y.Caption, {
                        variant: "div",
                        type: "entity",
                        size: "s",
                        weight: "medium",
                        lineClamp: 2,
                        ...(0, c.Am)(c.Kq.playlist.PLAYLIST_TITLE),
                        children: (0, a.jsx)(b.N_, {
                            className: j().titleLink,
                            href: i.url,
                            onClick: et,
                            children: i.title,
                        }),
                    }),
                    srTitle: (0, a.jsx)(b.N_, {
                        href: i.url,
                        onClick: et,
                        children: i.title,
                    }),
                    "data-intersection-property-id": I,
                    contentLinesCount: k,
                    view: eu,
                    description: es,
                    ...(0, c.Am)(c.Kq.playlist.PLAYLIST_ITEM),
                    children: [
                        em &&
                            (0, a.jsx)(b.xW, {
                                ariaLabel: K(
                                    { id: "entity-names.likes-counter" },
                                    { counter: i.actualLikesCount },
                                ),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: F,
                            }),
                        n,
                    ],
                });
            });
        },
        62093: (e) => {
            e.exports = {
                root: "EmptyPlaylistBlock_root__wpA0j",
                iconBackground: "EmptyPlaylistBlock_iconBackground__pnUlz",
                title: "EmptyPlaylistBlock_title__pQQLf",
                subtitle: "EmptyPlaylistBlock_subtitle__P4Q7x",
            };
        },
        71937: (e) => {
            e.exports = {
                root: "VibeSmallView_root__6IYFM",
                root_radius_xs: "VibeSmallView_root_radius_xs__hrEG3",
                root_radius_round: "VibeSmallView_root_radius_round__t4uAR",
                root_withShadow: "VibeSmallView_root_withShadow__HU7NP",
            };
        },
        75658: (e, t, i) => {
            "use strict";
            i.d(t, { HorizontalPlaylistCard: () => f });
            var a = i(33008),
                r = i(85896),
                n = i(97531),
                l = i(66268),
                s = i(73827),
                o = i(96560),
                c = i(93967),
                d = i(18064),
                u = i(48509),
                m = i(42213),
                _ = i(88485),
                g = i(78016),
                p = i(77868),
                y = i(79169),
                v = i(18740),
                C = i(14829),
                x = i(25911),
                b = i(30672),
                h = i.n(b);
            let k = (0, n.PA)((e) => {
                var t;
                let { className: i, playlist: n, likeIconSize: s = "xxs" } = e,
                    { user: o, trailer: d } = (0, y.Pjs)(),
                    u = (0, y.PT7)(),
                    { sendLikeSearchFeedback: _ } = (0, y.zEv)(),
                    p = (0, x.KX)(n),
                    [C, b] = (0, l.useState)(!1),
                    k = (0, m.c)(async () => {
                        C || n.isLiked || (b(!0), null == _ || _()), await p();
                    }),
                    P = (0, y.Ftl)(),
                    A = (0, m.c)((e) => {
                        if ((e.stopPropagation(), u()))
                            return void e.preventDefault();
                        d.openPlaylistTrailer(n.id), P(c.ky.Playlist, n.id);
                    });
                return (0, a.jsxs)("div", {
                    className: (0, r.$)(h().root, h().controls, i, {
                        [h().controls_disabled]: !n.isAvailable,
                    }),
                    children: [
                        n.isAvailable &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(v.aQ, {
                                        fallback: (0, a.jsx)(v.cy, {
                                            size: "xs",
                                            iconSize: s,
                                            className: (0, r.$)(
                                                h().item,
                                                h().likeIcon,
                                            ),
                                            isLiked: n.isLiked,
                                            onClick: k,
                                            disabled: !o.isAuthorized,
                                        }),
                                    }),
                                    (null == (t = n.trailer)
                                        ? void 0
                                        : t.isAvailable) &&
                                        (0, a.jsx)(v.aQ, {
                                            fallback: (0, a.jsx)(v.kJ, {
                                                className: (0, r.$)(
                                                    h().item,
                                                    h().trailerIcon,
                                                ),
                                                iconSize: "xs",
                                                variant: "text",
                                                onClick: A,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, a.jsx)("div", {
                            className: (0, r.$)(h().item, h().item_buttonArrow),
                            children: (0, a.jsx)(g.Icon, {
                                className: v.$f.buttonArrow,
                                variant: "arrowRight",
                                size: "xs",
                            }),
                        }),
                    ],
                });
            });
            var P = i(19525),
                A = i.n(P);
            let f = (0, n.PA)((e) => {
                let {
                        className: t,
                        playlist: i,
                        pageId: n,
                        coverClassName: x,
                        playButtonIconSize: b,
                        likeIconSize: h,
                    } = e,
                    { ref: P, intersectionPropertyId: f } = (0, y.nMI)(),
                    { from: j } = (0, y.fyy)({ pageId: n }),
                    [I, w] = (0, l.useState)(!1),
                    L = (0, y.brA)(),
                    N = (0, C.r)(i),
                    B = i.title || "",
                    { formatMessage: K, formatNumber: T } = (0, s.A)(),
                    V = (0, y.PT7)(),
                    {
                        sendNavigateSearchFeedback: S,
                        sendPlaySearchFeedback: E,
                    } = (0, y.zEv)(),
                    z = (0, y.NKK)(),
                    {
                        isPlaying: R,
                        isCurrent: U,
                        togglePlay: O,
                    } = (0, y.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: u.K.Playlist,
                                meta: { id: i.id, uuid: i.uuid },
                                from: j,
                            },
                            loadContextMeta: !0,
                        },
                    }),
                    M = (0, y.ZpR)(i.url),
                    $ = (0, m.c)((e) => {
                        null == S || S(),
                            z({ to: c.QT.PlaylistScreen }),
                            e.preventDefault(),
                            M(e);
                    }),
                    F = (0, m.c)(() => {
                        V() ||
                            (I || R || (w(!0), null == E || E()), O(), L(!R));
                    }),
                    D = (0, m.c)((e) => {
                        (0, _.P)(e, v.$f.ripple), $(e);
                    }),
                    Y = (0, m.c)((e) => {
                        e.stopPropagation(), $(e);
                    }),
                    H = (0, l.useCallback)(
                        (e) =>
                            (0, a.jsx)(v.q1, {
                                isAvailable: i.isAvailable,
                                isDisliked: !1,
                                coverUri: i.coverUri,
                                title: B,
                                className: (0, r.$)(v.$f.playButtonCell, x),
                                alt: K(
                                    { id: "entity-names.playlist-name" },
                                    { playlistName: B },
                                ),
                                radius: "xs",
                                ...e,
                            }),
                        [i, B, x, K],
                    ),
                    X =
                        null == H
                            ? void 0
                            : H({
                                  onPlayButtonClick: F,
                                  isPlaying: R,
                                  isCurrent: U,
                                  playButtonIconSize: b,
                              }),
                    Z = (0, l.useMemo)(
                        () =>
                            i.url && i.isAvailable
                                ? (0, a.jsx)(v.N_, {
                                      className: (0, r.$)(
                                          v.$f.text,
                                          v.$f.titleLink,
                                      ),
                                      href: i.url,
                                      onClick: Y,
                                      children: B,
                                  })
                                : (0, a.jsx)(p.Caption, {
                                      className: (0, r.$)(
                                          v.$f.text,
                                          v.$f.titleText,
                                      ),
                                      size: "m",
                                      variant: "div",
                                      type: "text",
                                      children: B,
                                  }),
                        [Y, i.isAvailable, i.url, B],
                    ),
                    W = (0, l.useMemo)(() => {
                        if (
                            void 0 === i.actualLikesCount ||
                            void 0 === i.tracksCount
                        )
                            return;
                        let e = (0, a.jsx)(p.Caption, {
                                variant: "span",
                                size: "m",
                                weight: "medium",
                                "aria-hidden": !0,
                                children: "•",
                            }),
                            t = i.isLiked ? "likedVariant" : "likeVariant",
                            r = ""
                                .concat(N, " ")
                                .concat(
                                    K(
                                        { id: "entity-names.tracks-count" },
                                        { value: i.tracksCount },
                                    ),
                                );
                        return (0, a.jsxs)("div", {
                            className: A().description,
                            "aria-label": r,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: A().likesCount,
                                    "aria-hidden": !0,
                                    children: [
                                        (0, a.jsx)(g.Icon, {
                                            className: A().icon,
                                            variant: t,
                                            size: "xxs",
                                        }),
                                        (0, a.jsx)(p.Caption, {
                                            variant: "span",
                                            size: "m",
                                            weight: "medium",
                                            children: T(i.actualLikesCount),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: A().tracksCount,
                                    "aria-hidden": !0,
                                    children: [
                                        e,
                                        (0, a.jsx)(p.Caption, {
                                            variant: "span",
                                            size: "m",
                                            weight: "medium",
                                            children: (0, a.jsx)(o.A, {
                                                id: "entity-names.tracks-count",
                                                values: {
                                                    value: T(i.tracksCount),
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [K, T, N, i.actualLikesCount, i.isLiked, i.tracksCount]);
                return (0, a.jsxs)(v.Cj, {
                    ref: P,
                    "data-intersection-property-id": f,
                    className: (0, r.$)(
                        v.$f.root,
                        { [v.$f.root_disabled]: !i.isAvailable },
                        t,
                    ),
                    "aria-label": i.title || K({ id: "entity-names.playlist" }),
                    onClick: D,
                    ...(0, d.Am)(d.Kq.playlist.HORIZONTAL_PLAYLIST_CARD),
                    children: [
                        X,
                        (0, a.jsx)(v.ro, {
                            isDisabled: !i.isAvailable,
                            title: Z,
                            description: W,
                        }),
                        (0, a.jsx)(k, { playlist: i, likeIconSize: h }),
                    ],
                });
            });
        },
        84781: (e) => {
            e.exports = {
                root: "VibeCardView_root__bt_Xt",
                root_loading: "VibeCardView_root_loading__J8fOe",
                cover: "VibeCardView_cover__fBDH_",
                cover_round: "VibeCardView_cover_round__LPs63",
                cover_loading: "VibeCardView_cover_loading__kpdrp",
                shimmer: "VibeCardView_shimmer__Rp6yh",
                shimmer_loading: "VibeCardView_shimmer_loading__74dZm",
                animation: "VibeCardView_animation__x3VEI",
                image: "VibeCardView_image__5fXOh",
            };
        },
        91919: (e, t, i) => {
            "use strict";
            i.d(t, { EmptyPlaylistBlock: () => m });
            var a = i(33008),
                r = i(85896),
                n = i(66268),
                l = i(96560),
                s = i(18064),
                o = i(78016),
                c = i(77868),
                d = i(62093),
                u = i.n(d);
            let m = (e) => {
                let { className: t, isEmptySearch: i } = e,
                    d = (0, n.useMemo)(
                        () =>
                            i
                                ? (0, a.jsx)(l.A, {
                                      id: "search-results.not-found-title",
                                  })
                                : (0, a.jsx)(l.A, {
                                      id: "error-messages.empty-collection-playlist-title",
                                  }),
                        [i],
                    ),
                    m = (0, n.useMemo)(
                        () =>
                            i
                                ? (0, a.jsx)(l.A, {
                                      id: "search-results.not-found-description",
                                  })
                                : (0, a.jsx)(l.A, {
                                      id: "error-messages.empty-collection-playlist-description",
                                  }),
                        [i],
                    );
                return (0, a.jsxs)("div", {
                    className: (0, r.$)(u().root, t),
                    ...(0, s.Am)(s.Kq.playlist.PLAYLIST_EMPTY_BLOCK),
                    children: [
                        (0, a.jsx)("div", {
                            className: u().iconBackground,
                            children: (0, a.jsx)(o.Icon, {
                                variant: "search",
                                size: "l",
                                className: u().icon,
                                ...(0, s.Am)(
                                    s.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON,
                                ),
                            }),
                        }),
                        (0, a.jsx)(c.Heading, {
                            variant: "h3",
                            size: "xs",
                            className: u().title,
                            ...(0, s.Am)(
                                s.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE,
                            ),
                            children: d,
                        }),
                        (0, a.jsx)(c.Caption, {
                            variant: "span",
                            size: "l",
                            className: u().subtitle,
                            ...(0, s.Am)(
                                s.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT,
                            ),
                            children: m,
                        }),
                    ],
                });
            };
        },
        96025: (e, t, i) => {
            "use strict";
            i.d(t, { VibeButton: () => h, VibeButtonShimmer: () => b });
            var a = i(33008),
                r = i(85896),
                n = i(97531),
                l = i(66268),
                s = i(73827),
                o = i(18064),
                c = i(45415),
                d = i(88485),
                u = i(44189),
                m = i(78016),
                _ = i(52756),
                g = i(91342),
                p = i(77868),
                y = i(79169),
                v = i(18740),
                C = i(42347),
                x = i.n(C);
            let b = (e) => {
                    let { isActive: t, className: i } = e;
                    return (0, a.jsx)(g.Shimmer, {
                        isActive: t,
                        className: (0, r.$)(x().root, i),
                    });
                },
                h = (0, n.PA)((e) => {
                    let { className: t, vibe: i } = e,
                        { formatMessage: n } = (0, s.A)(),
                        { pageId: g } = (0, y.$au)(),
                        { blockIdForFrom: C } = (0, y.N8n)(),
                        { ref: b, intersectionPropertyId: h } = (0, y.nMI)(),
                        {
                            toggleTrue: k,
                            toggleFalse: P,
                            state: A,
                        } = (0, c.e)(!1),
                        { isFreemium: f } = (0, y.XCI)(),
                        { isPlaying: j, togglePlay: I } = (0, y.B0S)({
                            seeds: i.seeds,
                            pageIdForFrom: g,
                            blockIdForFrom: C,
                        }),
                        w = (0, y.brA)(),
                        L = (0, l.useCallback)(
                            (e) => {
                                f ||
                                    ((0, d.P)(e, x().ripple),
                                    k(),
                                    I().finally(() => {
                                        P(), w(!j);
                                    }));
                            },
                            [P, k, I, j, w, f],
                        ),
                        N = (0, l.useMemo)(() => {
                            var e, t;
                            return {
                                "--vibe-button-background":
                                    null == (e = i.colors) ? void 0 : e.average,
                                "--vibe-button-text-color":
                                    null == (t = i.colors)
                                        ? void 0
                                        : t.waveText,
                            };
                        }, [i.colors]),
                        B = j ? "pause" : "play",
                        K = j
                            ? o.e8.landing.VIBE_DISCOVERY_ITEM_PAUSE_ICON
                            : o.e8.landing.VIBE_DISCOVERY_ITEM_PLAY_ICON,
                        T = (0, l.useCallback)(
                            () =>
                                (0, a.jsxs)(u.Button, {
                                    style: N,
                                    withRipple: !1,
                                    withHover: !1,
                                    variant: "text",
                                    onClick: L,
                                    className: (0, r.$)(
                                        x().root,
                                        x().button,
                                        { [x().button_loading]: A },
                                        t,
                                    ),
                                    "data-intersection-property-id": h,
                                    ref: b,
                                    ...(0, o.Am)(
                                        o.e8.landing.VIBE_DISCOVERY_ITEM,
                                    ),
                                    children: [
                                        (0, a.jsx)(_.Image, {
                                            className: x().image,
                                            withAvatarReplace: !0,
                                            withFallback: !1,
                                            src: i.backgroundImageUrl,
                                            withAspectRatio: !0,
                                            size: 400,
                                            fit: "cover",
                                        }),
                                        (0, a.jsxs)("span", {
                                            className: x().textContainer,
                                            children: [
                                                (0, a.jsx)(p.Caption, {
                                                    className: x().subtitle,
                                                    variant: "span",
                                                    type: "controls",
                                                    size: "s",
                                                    weight: "bold",
                                                    children: i.getDescription(
                                                        n({
                                                            id: "entity-names.my-vibe",
                                                        }),
                                                    ),
                                                }),
                                                (0, a.jsxs)("span", {
                                                    className:
                                                        x().titleContainer,
                                                    children: [
                                                        (0, a.jsx)(m.Icon, {
                                                            className: x().icon,
                                                            size: "xxs",
                                                            variant: B,
                                                            ...(0, o.Am)(K),
                                                        }),
                                                        (0, a.jsx)(p.Caption, {
                                                            className:
                                                                x().title,
                                                            variant: "span",
                                                            size: "s",
                                                            weight: "bold",
                                                            lineClamp: 1,
                                                            children: i.title,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            [t, n, L, K, B, h, A, b, N, i],
                        );
                    return (0, a.jsx)(v.SU, {
                        isEnabled: f,
                        placement: "top",
                        textVariant: "vibe",
                        vibeTextVariant: i.stationType,
                        renderChildren: T,
                    });
                });
        },
        96973: (e) => {
            e.exports = {
                root: "PlaylistCard_root__i3pR4",
                controls: "PlaylistCard_controls__Ej8Rz",
                cover: "PlaylistCard_cover__tpK5L",
                coverBlock: "PlaylistCard_coverBlock__1slsN",
                image: "PlaylistCard_image__Li6oy",
                titleLink: "PlaylistCard_titleLink__H8qEc",
                artists: "PlaylistCard_artists__HtVIF",
                artistLink: "PlaylistCard_artistLink__jx3KB",
                playButton: "PlaylistCard_playButton__eaduk",
                likeButton: "PlaylistCard_likeButton__RYXJz",
                menuButton: "PlaylistCard_menuButton__jFcWr",
                pinButton: "PlaylistCard_pinButton__jhWnL",
                trailerButton: "PlaylistCard_trailerButton__Qjg_U",
                control: "PlaylistCard_control__73YUq",
            };
        },
    },
]);
