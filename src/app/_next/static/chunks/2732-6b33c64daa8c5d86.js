(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2732],
    {
        144: (e, i, t) => {
            "use strict";
            t.d(i, { UpcomingAlbumCard: () => k });
            var r = t(33008),
                a = t(85896),
                s = t(97531),
                l = t(66268),
                n = t(73827),
                o = t(96560),
                u = t(18064),
                c = t(42314),
                d = t(44189),
                m = t(69476),
                v = t(78016),
                b = t(54487),
                p = t(77868),
                _ = t(95592),
                A = t(70879),
                g = t(79169),
                C = t(18740),
                y = t(7944),
                h = t.n(y);
            let k = (0, s.PA)((e) => {
                let {
                        className: i,
                        children: t,
                        upcomingAlbum: s,
                        contentLinesCount: y,
                    } = e,
                    { user: k } = (0, g.Pjs)(),
                    { ref: x, intersectionPropertyId: P } = (0, g.nMI)(),
                    { formatMessage: f, formatDate: N } = (0, n.A)(),
                    L = (0, _.PL)(s),
                    O = s.getKey("PlayButton"),
                    I = s.getKey("LikeButton"),
                    T = (0, l.useMemo)(() => {
                        let e = f(
                                { id: "entity-names.upcoming-album-name" },
                                { upcomingAlbumName: s.title },
                            ),
                            i = s.isPresave
                                ? f({ id: "entity-names.has-your-like" })
                                : "";
                        return "".concat(e, " ").concat(i);
                    }, [f, s.title, s.isPresave]),
                    K = (0, c.L)(() =>
                        (0, r.jsxs)(b.Paper, {
                            className: h().cover,
                            radius: "s",
                            withShadow: !0,
                            children: [
                                (0, r.jsx)(C.BW, {
                                    className: h().image,
                                    src: s.coverUri,
                                    size: 200,
                                    fit: "cover",
                                    alt: T,
                                    withAvatarReplace: !0,
                                }),
                                (0, r.jsx)(m.hg, {
                                    className: h().controls,
                                    playControl: (0, r.jsx)(
                                        d.Button,
                                        {
                                            className: h().lockButton,
                                            disabled: !0,
                                            radius: "xxxl",
                                            variant: "default",
                                            size: "s",
                                            icon: (0, r.jsx)(v.Icon, {
                                                variant: "lock",
                                                size: "xxs",
                                                className: h().lockIcon,
                                            }),
                                            "aria-label": f({
                                                id: "entity-names.upcoming-album-play-disabled",
                                            }),
                                            ...(0, u.Am)(
                                                u.Kq.album
                                                    .UPCOMING_ALBUM_LOCK_BUTTON,
                                            ),
                                        },
                                        O,
                                    ),
                                    likeControl: (0, r.jsx)(
                                        C.cy,
                                        {
                                            className: (0, a.$)(
                                                h().control,
                                                h().presaveButton,
                                            ),
                                            isLiked: s.isPresave,
                                            onClick: L,
                                            variant: "default",
                                            size: "s",
                                            iconSize: "xxs",
                                            disabled: !k.isAuthorized,
                                        },
                                        I,
                                    ),
                                }),
                            ],
                        }),
                    );
                return (0, r.jsxs)(m.MN, {
                    ref: x,
                    className: (0, a.$)(h().root, i),
                    "aria-label": T,
                    explicitMarkComponent:
                        s.explicitDisclaimer &&
                        (0, r.jsx)(C.Nq, {
                            getDescriptionTexts: s.getDescriptionTexts,
                            variant: s.explicitDisclaimer,
                        }),
                    title: (0, r.jsx)(p.Caption, {
                        variant: "div",
                        type: "entity",
                        size: "s",
                        weight: "medium",
                        lineClamp: 2,
                        ...(0, u.Am)(u.Kq.album.UPCOMING_ALBUM_TITLE),
                        children: s.title,
                    }),
                    "data-intersection-property-id": P,
                    ...(0, u.Am)(u.Kq.album.UPCOMING_ALBUM_CARD),
                    contentLinesCount: y,
                    view: K,
                    description: (0, r.jsx)(A.iQ, {
                        className: h().artists,
                        artists: s.artists,
                        lineClamp: 1,
                        linkClassName: h().artistLink,
                        captionSize: "s",
                    }),
                    children: [
                        (0, r.jsx)(p.Caption, {
                            className: h().releaseDate,
                            variant: "div",
                            type: "entity",
                            size: "s",
                            weight: "medium",
                            lineClamp: 1,
                            ...(0, u.Am)(
                                u.Kq.album.UPCOMING_ALBUM_RELEASE_DATE,
                            ),
                            children: (0, r.jsx)(o.A, {
                                id: "entity-names.upcoming-album-date",
                                values: {
                                    releaseDate: N(s.releaseDate, (0, g.sDH)()),
                                },
                            }),
                        }),
                        t,
                    ],
                });
            });
        },
        2202: (e, i, t) => {
            "use strict";
            t.d(i, { useOnPinClick: () => m });
            var r = t(33008),
                a = t(29318),
                s = t(66268),
                l = t(73827),
                n = t(79169),
                o = t(18740),
                u = t(97531),
                c = t(8228);
            let d = (0, u.PA)((e) => {
                    let { album: i, closeToast: t } = e,
                        a = (0, c.b)(i);
                    return (0, r.jsx)(o.k4, {
                        closeToast: t,
                        entityVariant: a,
                        coverUri: i.coverUri,
                        entityUrl: i.url,
                        entityTitle: i.title,
                        isPinned: i.isPinned,
                        radius: "s",
                    });
                }),
                m = (e) => {
                    let { user: i } = (0, n.Pjs)(),
                        { notify: t } = (0, n.lkh)(),
                        { formatMessage: u } = (0, l.A)(),
                        [c, m] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!i.isAuthorized)
                            return void t(
                                (0, r.jsx)(o.hT, {
                                    error: u({
                                        id: "authorization-messages.need-to-authorizate",
                                    }),
                                }),
                                { containerId: n.uQT.ERROR },
                            );
                        if (c) return;
                        let s = {
                            ...(0, a.HO)(e),
                            url: e.url,
                            isPinned: !e.isPinned,
                        };
                        m(!0);
                        let l = await e.togglePin();
                        m(!1),
                            l
                                ? t((0, r.jsx)(d, { album: s }), {
                                      containerId: n.uQT.INFO,
                                  })
                                : t(
                                      (0, r.jsx)(o.hT, {
                                          error: u({
                                              id: "error-messages.error-during-action",
                                          }),
                                      }),
                                      { containerId: n.uQT.ERROR },
                                  );
                    }, [e, u, t, c, i.isAuthorized]);
                };
        },
        7944: (e) => {
            e.exports = {
                root: "UpcomingAlbumCard_root__lSZ5l",
                controls: "UpcomingAlbumCard_controls__fQ50f",
                cover: "UpcomingAlbumCard_cover__qvU1m",
                image: "UpcomingAlbumCard_image__WKtGR",
                releaseDate: "UpcomingAlbumCard_releaseDate__EvDzB",
                artists: "UpcomingAlbumCard_artists__Jp1OE",
                artistLink: "UpcomingAlbumCard_artistLink__RSqXw",
                control: "UpcomingAlbumCard_control__pSMdI",
                presaveButton: "UpcomingAlbumCard_presaveButton__ixwy_",
                lockButton: "UpcomingAlbumCard_lockButton__9_qyp",
                lockIcon: "UpcomingAlbumCard_lockIcon__wtvkP",
            };
        },
        8228: (e, i, t) => {
            "use strict";
            t.d(i, { b: () => s });
            var r = t(15479),
                a = t(18740);
            let s = (e) => {
                switch (e.type) {
                    case r._.PODCAST:
                        return a.cp.PODCAST;
                    case r._.AUDIOBOOK:
                        return a.cp.AUDIOBOOK;
                    case r._.FAIRY_TALE:
                        return a.cp.FAIRY_TALE;
                    default:
                        return a.cp.ALBUM;
                }
            };
        },
        15029: (e, i, t) => {
            "use strict";
            var r;
            t.d(i, { E: () => r }),
                (function (e) {
                    (e.KIDS = "kids"), (e.BOOKMATE = "bookmate");
                })(r || (r = {}));
        },
        16285: (e, i, t) => {
            "use strict";
            t.d(i, { t1: () => n.Chart, Iz: () => l, ws: () => a });
            var r = t(41028);
            let a = (e) =>
                (0, r.wg)({ position: e.position, progress: e.progress });
            var s = t(77059);
            let l = r.gK.model("Chart", {
                position: r.gK.maybe(r.gK.number),
                progress: r.gK.maybe(r.gK.enumeration(Object.values(s._))),
            });
            var n = t(47407);
        },
        30147: (e, i, t) => {
            "use strict";
            t.d(i, { f: () => b });
            var r = t(33008),
                a = t(29318),
                s = t(66268),
                l = t(73827),
                n = t(60866),
                o = t(42213),
                u = t(79169),
                c = t(18740),
                d = t(97531),
                m = t(8228);
            let v = (0, d.PA)((e) => {
                    let { album: i, closeToast: t, withLink: a } = e,
                        s = (0, m.b)(i);
                    return (0, r.jsx)(c.OM, {
                        closeToast: t,
                        entityVariant: s,
                        coverUri: i.coverUri,
                        entityUrl: i.url,
                        collectionUrl: "/collection",
                        entityTitle: i.title,
                        isLiked: i.isLiked,
                        withLink: a,
                    });
                }),
                b = () => {
                    let { notify: e } = (0, u.lkh)(),
                        [i, t] = (0, s.useState)(!1),
                        { formatMessage: d } = (0, l.A)();
                    return (0, o.c)(async (s) => {
                        let {
                            album: l,
                            withLink: o = !0,
                            withNotification: m = !0,
                        } = s;
                        if (i) return;
                        let b = {
                            ...(0, a.HO)(l),
                            url: l.url,
                            isLiked: !l.isLiked,
                        };
                        t(!0);
                        let p = await l.toggleLike();
                        t(!1),
                            m &&
                                (p === n.f.OK
                                    ? e(
                                          (0, r.jsx)(v, {
                                              withLink: o,
                                              album: b,
                                          }),
                                          { containerId: u.uQT.INFO },
                                      )
                                    : e(
                                          (0, r.jsx)(c.hT, {
                                              error: d({
                                                  id: "error-messages.error-during-action",
                                              }),
                                          }),
                                          { containerId: u.uQT.ERROR },
                                      ));
                    });
                };
        },
        38340: (e, i, t) => {
            "use strict";
            t.d(i, { AlbumContextMenu: () => A });
            var r = t(33008),
                a = t(97531),
                s = t(66268),
                l = t(73827),
                n = t(93967),
                o = t(18064),
                u = t(48509),
                c = t(42213),
                d = t(66098),
                m = t(95592),
                v = t(28996),
                b = t(79169),
                p = t(18740),
                _ = t(70682);
            let A = (0, a.PA)((e) => {
                var i, t;
                let {
                        album: a,
                        onOpenChange: A,
                        open: g,
                        wrapperClassName: C,
                        variant: y,
                        ...h
                    } = e,
                    {
                        shouldShowBuySubscriptionModal: k,
                        showBuySubscriptionModal: x,
                    } = (0, b.qBP)(),
                    {
                        settings: { isMobile: P },
                        trailer: f,
                        user: N,
                        experiments: L,
                        albumCPA: {
                            isPlusCPAEnabled: O,
                            isPlusCPAPlayerBarEnabled: I,
                        },
                    } = (0, b.Pjs)(),
                    T = (0, m.KX)(a),
                    K = (0, m.A7)(a),
                    M = (0, b.Ftl)(),
                    j = "".concat(b.UfI.ALBUM, "-").concat(a.id),
                    U = a.isNonMusic && y === _.z.PAGE,
                    B = L.checkExperiment(b.zal.WebEditorsFeatures, "on"),
                    { formatMessage: w } = (0, l.A)(),
                    R = (0, b.PT7)(),
                    { pageAlbumId: E } = (0, b.THB)(),
                    D = O({
                        pageAlbumId: E,
                        albumId: a.id,
                        isNonMusic: a.isNonMusic,
                    }),
                    S = I(a.id, a.isNonMusic),
                    z = (0, m.Ek)(),
                    { shareLink: F, pathname: $ } = (0, b.bNS)(
                        "/album/:albumId",
                        { params: { albumId: a.id } },
                    ),
                    G = (0, v.A_)({
                        entityVariant: b.DwC.ALBUM,
                        urlParams: { id: a.id },
                    }),
                    { isPlaying: Q, togglePlay: q } = (0, b.B0S)({
                        seeds:
                            null != (t = null == a ? void 0 : a.seeds) ? t : [],
                        pageIdForFrom: b._Q$.RADIO,
                        blockIdForFrom: j,
                        parentContextId: a.id,
                    }),
                    { utmLink: W } = (0, b.fyy)({
                        blockId: b.UfI.ALBUM,
                        contextType: u.K.Album,
                        contextId: null == a ? void 0 : a.id,
                    }),
                    Y = (0, c.c)(() => {
                        if (k && N.isAuthorized) return void x();
                        !R() && (Q || q());
                    }),
                    H = (0, c.c)(() => {
                        if (k && !S) return void x();
                        R() ||
                            (f.setUtmLink(W),
                            f.openAlbumTrailer(a.id),
                            M(n.ky.Album, String(a.id)));
                    });
                (0, b.NBO)(g);
                let V = (0, s.useMemo)(() => {
                        if (!P)
                            return (0, r.jsx)(p.L1, {
                                onClick: K,
                                isPinned: a.isPinned,
                                disabled: !a.isAvailable,
                            });
                    }, [a.isAvailable, a.isPinned, K, P]),
                    Z = (0, s.useMemo)(() => {
                        let e = !D && !N.isAuthorized;
                        return a.isNonMusic
                            ? (0, r.jsx)(p.Uc, {
                                  onClick: T,
                                  isLiked: a.isLiked,
                                  albumType: a.type,
                              })
                            : (0, r.jsx)(p.TW, {
                                  onClick: T,
                                  isLiked: a.isLiked,
                                  disabled: e,
                              });
                    }, [a.isLiked, a.type, T, a.isNonMusic, N.isAuthorized, D]),
                    J = (0, s.useMemo)(() => {
                        var e;
                        if (
                            !a.isNonMusic &&
                            (null == (e = a.trailer) ? void 0 : e.isAvailable)
                        )
                            return (0, r.jsx)(p.No, {
                                onClick: H,
                                disabled: !a.isAvailable,
                            });
                    }, [
                        a.isAvailable,
                        null == (i = a.trailer) ? void 0 : i.isAvailable,
                        a.isNonMusic,
                        H,
                    ]),
                    X = (0, s.useMemo)(() => {
                        if (!a.isNonMusic)
                            return (0, r.jsx)(p.C6, {
                                onClick: Y,
                                disabled: !a.isAvailable || (S && P),
                                variant: b.IGO.ALBUM,
                                onOpenMenuChange: A,
                            });
                    }, [a.isAvailable, Y, a.isNonMusic, A, S, P]),
                    ee = {
                        variant: b.Yxq.ALBUM,
                        id: a.id,
                        title: a.title,
                        path: $,
                        albumArtistName: a.artistName,
                        albumArtistId: a.artistId,
                    };
                return (0, r.jsxs)(d.W1, {
                    isMobile: P,
                    offsetOptions: 10,
                    open: g,
                    onOpenChange: A,
                    ariaLabel: w({ id: "interface-actions.context-menu" }),
                    wrapperClassName: C,
                    containerProps: (0, o.Am)(o.Kq.album.ALBUM_CONTEXT_MENU),
                    ...h,
                    children: [
                        P &&
                            (0, r.jsx)(p.Cu, {
                                getDescriptionTexts: a.getDescriptionTexts,
                                entityId: a.id,
                            }),
                        B &&
                            (0, r.jsx)(v.dx, {
                                entityVariant: b.DwC.ARTIST,
                                adminUrl: G,
                            }),
                        V,
                        Z,
                        J,
                        X,
                        U &&
                            (0, r.jsx)(p.iF, {
                                onClick: z,
                                isFinished: a.listeningFinished,
                            }),
                        (0, r.jsx)(p.Ht, { shareLink: F, entityMeta: ee }),
                    ],
                });
            });
        },
        47407: (e, i, t) => {
            "use strict";
            t.d(i, { Chart: () => b });
            var r = t(33008),
                a = t(85896),
                s = t(97531),
                l = t(66268),
                n = t(73827),
                o = t(18064),
                u = t(77059),
                c = t(78016),
                d = t(77868),
                m = t(59031),
                v = t.n(m);
            let b = (0, s.PA)((e) => {
                let {
                        progress: i,
                        withIcon: t,
                        withCrownIcon: s,
                        position: m,
                        weight: b = "normal",
                        isDisliked: p,
                        isDisabled: _,
                        className: A,
                        positionClassName: g,
                    } = e,
                    { formatMessage: C } = (0, n.A)(),
                    y = i || t,
                    h = (0, l.useMemo)(() => {
                        if (s) return "crown";
                        switch (i) {
                            case u._.UP:
                                return "chartUp";
                            case u._.DOWN:
                                return "chartDown";
                            case u._.NEW:
                                return "chartNew";
                            default:
                                return "chartSame";
                        }
                    }, [i, s]),
                    k = (0, l.useMemo)(() => {
                        switch (i) {
                            case u._.UP:
                                return C({ id: "entity-names.chart-up" });
                            case u._.DOWN:
                                return C({ id: "entity-names.chart-down" });
                            case u._.NEW:
                                return C({ id: "entity-names.chart-new" });
                            default:
                                return C({ id: "entity-names.chart-same" });
                        }
                    }, [C, i]),
                    x = s ? "crown" : i;
                return (0, r.jsxs)("div", {
                    className: (0, a.$)(v().root, A),
                    ...(0, o.Am)(o.OA.chart.CHART_PROGRESS),
                    children: [
                        (0, r.jsx)(d.Caption, {
                            variant: "div",
                            weight: b,
                            type: "entity",
                            size: "m",
                            className: (0, a.$)(v().position, g, {
                                [v().position_disliked]: p,
                                [v().position_disabled]: _,
                            }),
                            ...(0, o.Am)(o.OA.chart.CHART_PROGRESS_POSITION),
                            children: m,
                        }),
                        y &&
                            (0, r.jsx)(c.Icon, {
                                variant: h,
                                size: "xxs",
                                "aria-label": k,
                                className: (0, a.$)(
                                    v().progress,
                                    v()["progress_".concat(x)],
                                    {
                                        [v().progress_disliked]: p,
                                        [v().progress_disabled]: _,
                                    },
                                ),
                                ...(0, o.Am)(o.OA.chart.CHART_PROGRESS_ICON),
                            }),
                    ],
                });
            });
        },
        52732: (e, i, t) => {
            "use strict";
            t.d(i, {
                aX: () => y.AlbumCard,
                kz: () => h.AlbumContextMenu,
                zh: () => r.z,
                JC: () => g,
                pZ: () => f,
                M_: () => N.HorizontalAlbumCard,
                M3: () => L.UpcomingAlbumCard,
                VH: () => C,
                fO: () => s,
                pp: () => o,
                bl: () => c,
                sK: () => m,
                EV: () => v,
                h: () => b,
                lO: () => A,
            });
            var r = t(70682),
                a = t(70879);
            let s = (e) => {
                var i;
                if (!e)
                    return {
                        id: 0,
                        title: "",
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: "",
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: "",
                        availableForMobile: !0,
                    };
                let t =
                    (null == (i = e.artists)
                        ? void 0
                        : i.map((e) => (0, a.NE)(e))) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: t,
                    volumes: [],
                    ogImage: e.coverUri || "",
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: "",
                    availableForMobile: !0,
                };
            };
            var l = t(41028),
                n = t(95592);
            let o = (e) => {
                let i = e.artists.map((e) => (0, a.dM)(e));
                return (0, l.wg)({ ...(0, n.e7)(e), artists: i });
            };
            var u = t(16285);
            let c = (e, i) => (0, l.wg)({ ...o(e), chart: i && (0, u.ws)(i) });
            var d = t(79169);
            let m = (e) => {
                    var i, t;
                    let {
                            album: r,
                            artists: s,
                            bookmateOptionRequired: n,
                            chart: o,
                            likesCount: u,
                            trailer: c,
                            releaseYear: m,
                            releaseDate: v,
                        } = e,
                        { available: b, disclaimers: p } = (0, d.fyr)(r);
                    return (0, l.wg)({
                        id: r.id,
                        title: r.title,
                        coverUri: null == (i = r.cover) ? void 0 : i.uri,
                        type: r.albumType,
                        disclaimers: p,
                        artists:
                            null == s
                                ? void 0
                                : s.map((e) => (0, a.as)({ artist: e })),
                        averageColor: null == (t = r.cover) ? void 0 : t.color,
                        isAvailable: b,
                        likesCount: u,
                        bookmateOptionRequired: n,
                        chart: o,
                        trailer: (0, d.mxW)(c),
                        listeningFinished: r.listeningFinished,
                        year: m ? Number(m) : void 0,
                        releaseDate: v,
                    });
                },
                v = (e) => {
                    let { album: i, artists: t, likesCount: r, chart: a } = e;
                    return (0, l.wg)({
                        ...m({ album: i, artists: t, likesCount: r }),
                        chart: a && (0, u.ws)(a),
                    });
                },
                b = (e) => {
                    var i;
                    let {
                            album: t,
                            artists: r,
                            releaseDate: s,
                            isPresave: n,
                        } = e,
                        { disclaimers: o } = (0, d.fyr)(t);
                    return (0, l.wg)({
                        id: t.id,
                        title: t.title,
                        type: t.albumType,
                        coverUri: null == (i = t.cover) ? void 0 : i.uri,
                        isPresave: n,
                        releaseDate: s,
                        disclaimers: o,
                        artists:
                            null == r
                                ? void 0
                                : r.map((e) => (0, a.as)({ artist: e })),
                    });
                };
            var p = t(17846),
                _ = t(66268);
            (0, _.cache)(async (e) => {
                var i;
                let t;
                (0, d.LLJ)(e) || (0, p.notFound)();
                try {
                    let {
                        container: i,
                        backendHostTld: r,
                        locale: a,
                        host: s,
                        fullUrl: l,
                        isRSC: n,
                        requestUrl: o,
                        referer: u,
                    } = await (0, d.IhE)();
                    if (n)
                        return {
                            album: void 0,
                            backendHostTld: r,
                            locale: a,
                            host: s,
                            fullUrl: l,
                            requestUrl: o,
                        };
                    let c = i
                            .get(d.tzI)
                            .getAlbumWithTracksIds({
                                albumId: Number(e),
                                resumeStream: !1,
                            }),
                        [m, v] = await Promise.allSettled([c]);
                    if (!m || "fulfilled" !== m.status)
                        return (0, d.tfF)(m.reason, () => ({
                            album: void 0,
                            ...(0, d.Bj3)(),
                        }));
                    {
                        let e =
                            (null == v ? void 0 : v.status) === "fulfilled" &&
                            v.value
                                ? v.value.id
                                : null;
                        t = {
                            album: m.value,
                            backendHostTld: r,
                            locale: a,
                            host: s,
                            fullUrl: l,
                            requestUrl: o,
                            cpa: e,
                        };
                    }
                } catch (e) {
                    return (0, d.tfF)(e, () => ({
                        album: void 0,
                        ...(0, d.Bj3)(),
                    }));
                }
                return (
                    (null == (i = t.album) ? void 0 : i.error) ===
                        "not-found" && (0, p.notFound)(),
                    t
                );
            }),
                (0, _.cache)(async (e) => {
                    var i;
                    let t;
                    (0, d.LLJ)(e) || (0, p.notFound)();
                    try {
                        let {
                            container: i,
                            backendHostTld: r,
                            locale: a,
                            host: s,
                            fullUrl: l,
                            isRSC: n,
                            requestUrl: o,
                            referer: u,
                        } = await (0, d.IhE)();
                        if (n)
                            return {
                                album: void 0,
                                backendHostTld: r,
                                locale: a,
                                host: s,
                                fullUrl: l,
                                requestUrl: o,
                                isActive: !1,
                            };
                        let c = i.get(d.tzI),
                            m = i.get(d.dh7);
                        if (
                            !(await m.getPromoAlbumInfo({ albumId: Number(e) }))
                                .active
                        )
                            return {
                                album: void 0,
                                backendHostTld: r,
                                locale: a,
                                host: s,
                                fullUrl: l,
                                requestUrl: o,
                                isActive: !1,
                            };
                        let v = c.getAlbumWithTracksIds({
                                albumId: Number(e),
                                resumeStream: !1,
                            }),
                            [b, p] = await Promise.allSettled([v]);
                        if (!b || "fulfilled" !== b.status)
                            return (0, d.tfF)(b.reason, () => ({
                                album: void 0,
                                isActive: !1,
                                ...(0, d.Bj3)(),
                            }));
                        {
                            let e =
                                (null == p ? void 0 : p.status) ===
                                    "fulfilled" && p.value
                                    ? p.value.id
                                    : null;
                            t = {
                                album: b.value,
                                backendHostTld: r,
                                locale: a,
                                host: s,
                                fullUrl: l,
                                requestUrl: o,
                                isActive: !0,
                                cpa: e,
                            };
                        }
                    } catch (e) {
                        return (0, d.tfF)(e, () => ({
                            album: void 0,
                            isActive: !1,
                            ...(0, d.Bj3)(),
                        }));
                    }
                    return (
                        (null == (i = t.album) ? void 0 : i.error) ===
                            "not-found" && (0, p.notFound)(),
                        t
                    );
                });
            let A = (e) => {
                    var i;
                    let t =
                        null == (i = e.artists)
                            ? void 0
                            : i.map((e) => (0, a.as)({ artist: e }));
                    return (0, l.wg)({ ...(0, n.G_)(e), artists: t });
                },
                g = n.GI.props({
                    artists: l.gK.maybe(l.gK.array(a.PK)),
                    chart: l.gK.maybe(u.Iz),
                }).views((e) => ({
                    get artistNames() {
                        var i;
                        return null == (i = e.artists)
                            ? void 0
                            : i.map((e) => e.name).join(", ");
                    },
                    get artistName() {
                        var t, r, a, s;
                        if (
                            null == (r = e.artists) || null == (t = r[0])
                                ? void 0
                                : t.various
                        )
                            return;
                        return null == (s = e.artists) || null == (a = s[0])
                            ? void 0
                            : a.name;
                    },
                    get artistIds() {
                        var l;
                        return null == (l = e.artists)
                            ? void 0
                            : l.map((e) => e.id);
                    },
                    get artistId() {
                        var n, o;
                        return null == (o = e.artists) || null == (n = o[0])
                            ? void 0
                            : n.id;
                    },
                })),
                C = n.oM
                    .props({ artists: l.gK.maybe(l.gK.array(a.PK)) })
                    .views((e) => ({
                        get artistNames() {
                            var i;
                            return null == (i = e.artists)
                                ? void 0
                                : i.map((e) => e.name).join(", ");
                        },
                    }));
            var y = t(86335),
                h = t(38340),
                k = t(33008),
                x = t(18740);
            let P = (e) => {
                    let {
                        forwardRef: i,
                        isShimmerVisible: t,
                        isShimmerActive: r,
                        title: a,
                        description: s,
                        albums: l,
                        className: n,
                        containerClassName: o,
                        headerClassName: u,
                        viewAllActionLink: c,
                        headingRef: d,
                        headingVariant: m,
                        ...v
                    } = e;
                    return (0, k.jsx)(x.OY, {
                        isShimmerVisible: t,
                        isShimmerActive: r,
                        className: n,
                        headerClassName: u,
                        containerClassName: o,
                        ref: i,
                        title: a,
                        description: s,
                        viewAllActionLink: c,
                        headingRef: d,
                        headingVariant: m,
                        ...v,
                        children:
                            null == l
                                ? void 0
                                : l.map((e) =>
                                      (0, k.jsx)(
                                          y.AlbumCard,
                                          {
                                              album: e,
                                              contentLinesCount: 3,
                                              withAddition: !e.isNonMusic,
                                              withLikesCount: e.isNonMusic,
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                f = (0, _.forwardRef)((e, i) =>
                    (0, k.jsx)(P, { forwardRef: i, ...e }),
                );
            var N = t(57176),
                L = t(144);
        },
        56312: (e, i, t) => {
            "use strict";
            var r;
            t.d(i, { J: () => r }),
                (function (e) {
                    (e.OK = "ok"), (e.ERROR = "error");
                })(r || (r = {}));
        },
        57176: (e, i, t) => {
            "use strict";
            t.d(i, { HorizontalAlbumCard: () => k });
            var r = t(33008),
                a = t(85896),
                s = t(97531),
                l = t(66268),
                n = t(93967),
                o = t(18064),
                u = t(48509),
                c = t(42213),
                d = t(42314),
                m = t(88485),
                v = t(77868),
                b = t(95592),
                p = t(70879),
                _ = t(79169),
                A = t(18740),
                g = t(78016),
                C = t(68440),
                y = t.n(C);
            let h = (0, s.PA)((e) => {
                    var i;
                    let { className: t, album: s, likeIconSize: o = "xxs" } = e,
                        { user: u, trailer: d } = (0, _.Pjs)(),
                        m = (0, _.PT7)(),
                        { sendLikeSearchFeedback: v } = (0, _.zEv)(),
                        p = (0, b.KX)(s),
                        [C, h] = (0, l.useState)(!1),
                        k = (0, c.c)(async () => {
                            C || s.isLiked || (h(!0), null == v || v()),
                                await p();
                        }),
                        x = (0, _.Ftl)(),
                        P = (0, c.c)((e) => {
                            if ((e.stopPropagation(), m()))
                                return void e.preventDefault();
                            d.openAlbumTrailer(s.id),
                                x(n.ky.Album, String(s.id));
                        });
                    return (0, r.jsxs)("div", {
                        className: (0, a.$)(y().root, y().controls, t, {
                            [y().controls_disabled]: !s.isAvailable,
                        }),
                        children: [
                            s.isAvailable &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(A.aQ, {
                                            fallback: (0, r.jsx)(A.cy, {
                                                size: "xs",
                                                iconSize: o,
                                                className: (0, a.$)(
                                                    y().item,
                                                    y().likeIcon,
                                                ),
                                                isLiked: s.isLiked,
                                                onClick: k,
                                                disabled: !u.isAuthorized,
                                            }),
                                        }),
                                        (null == (i = s.trailer)
                                            ? void 0
                                            : i.isAvailable) &&
                                            (0, r.jsx)(A.aQ, {
                                                fallback: (0, r.jsx)(A.kJ, {
                                                    className: (0, a.$)(
                                                        y().item,
                                                        y().trailerIcon,
                                                    ),
                                                    iconSize: "xs",
                                                    variant: "text",
                                                    onClick: P,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, r.jsx)("div", {
                                className: (0, a.$)(
                                    y().item,
                                    y().item_buttonArrow,
                                ),
                                children: (0, r.jsx)(g.Icon, {
                                    className: A.$f.buttonArrow,
                                    variant: "arrowRight",
                                    size: "xs",
                                }),
                            }),
                        ],
                    });
                }),
                k = (0, s.PA)((e) => {
                    let {
                            className: i,
                            album: t,
                            pageId: s,
                            coverClassName: g,
                            playButtonIconSize: C,
                            likeIconSize: y,
                            shouldShowReleaseYear: k,
                            description: x,
                        } = e,
                        P = (0, b.r_)(t.type),
                        { ref: f, intersectionPropertyId: N } = (0, _.nMI)(),
                        { from: L } = (0, _.fyy)({ pageId: s }),
                        [O, I] = (0, l.useState)(!1),
                        T = (0, _.brA)(),
                        K = (0, _.ZpR)(t.url),
                        M = (0, _.PT7)(),
                        {
                            sendNavigateSearchFeedback: j,
                            sendPlaySearchFeedback: U,
                        } = (0, _.zEv)(),
                        B = (0, _.NKK)(),
                        {
                            isPlaying: w,
                            isCurrent: R,
                            togglePlay: E,
                        } = (0, _.Dx4)({
                            playContextParams: {
                                contextData: {
                                    type: u.K.Album,
                                    meta: { id: t.id },
                                    from: L,
                                },
                                loadContextMeta: !0,
                            },
                        }),
                        D = (0, b.cp)({ album: t, callback: K }),
                        S = (0, b.cp)({ album: t, callback: E }),
                        z = (0, c.c)((e) => {
                            null == j || j(), B({ to: n.QT.AlbumScreen }), D(e);
                        }),
                        F = (0, c.c)(() => {
                            M() ||
                                (O || w || (I(!0), null == U || U()),
                                S(),
                                T(!w));
                        }),
                        $ = (0, c.c)((e) => {
                            (0, m.P)(e, A.$f.ripple), z(e);
                        }),
                        G = (0, c.c)((e) => {
                            e.stopPropagation(), z(e);
                        }),
                        Q = (0, l.useCallback)(
                            (e) =>
                                (0, r.jsx)(A.q1, {
                                    isAvailable: t.isAvailable,
                                    isDisliked: !1,
                                    coverUri: t.coverUri,
                                    title: t.title,
                                    className: (0, a.$)(A.$f.playButtonCell, g),
                                    alt: "".concat(P, " ").concat(t.title),
                                    radius: "xs",
                                    ...e,
                                }),
                            [t.coverUri, t.isAvailable, t.title, g, P],
                        ),
                        q =
                            null == Q
                                ? void 0
                                : Q({
                                      onPlayButtonClick: F,
                                      isPlaying: w,
                                      isCurrent: R,
                                      playButtonIconSize: C,
                                  }),
                        W = (0, l.useMemo)(
                            () =>
                                t.url && t.isAvailable
                                    ? (0, r.jsx)(A.N_, {
                                          className: (0, a.$)(
                                              A.$f.text,
                                              A.$f.titleLink,
                                          ),
                                          href: t.url,
                                          onClick: G,
                                          children: t.title,
                                      })
                                    : (0, r.jsx)(v.Caption, {
                                          className: (0, a.$)(
                                              A.$f.text,
                                              A.$f.titleText,
                                          ),
                                          size: "m",
                                          variant: "div",
                                          type: "text",
                                          children: t.title,
                                      }),
                            [t.isAvailable, t.title, t.url, G],
                        ),
                        Y = (0, l.useCallback)(
                            (e, i) => {
                                var a;
                                return (
                                    null == (a = t.artists) ? void 0 : a.length
                                )
                                    ? (0, r.jsx)(p.iQ, {
                                          linkClassName: e,
                                          captionClassName: i,
                                          artists: t.artists,
                                          lineClamp: 1,
                                          withLink: t.isAvailable,
                                      })
                                    : null;
                            },
                            [t.artists, t.isAvailable],
                        ),
                        H = (0, d.L)(() =>
                            [t.artistNames, t.title, t.version]
                                .filter(Boolean)
                                .join(" "),
                        );
                    return (0, r.jsxs)(A.Cj, {
                        ref: f,
                        "data-intersection-property-id": N,
                        className: (0, a.$)(
                            A.$f.root,
                            { [A.$f.root_disabled]: !t.isAvailable },
                            i,
                        ),
                        "aria-label": H,
                        onClick: $,
                        ...(0, o.Am)(o.Kq.album.HORIZONTAL_ALBUM_CARD),
                        children: [
                            q,
                            (0, r.jsx)(A.ro, {
                                isDisabled: !t.isAvailable,
                                version: t.version,
                                title: W,
                                artistsComponent: Y,
                                getDescriptionTexts: t.getDescriptionTexts,
                                explicitMarkVariant: t.explicitDisclaimer,
                                likesCount: t.isNonMusic
                                    ? t.actualLikesCount
                                    : void 0,
                                isLiked: t.isNonMusic ? t.isLiked : void 0,
                                releaseYear:
                                    t.isNonMusic && k ? t.year : void 0,
                                description: x,
                            }),
                            (0, r.jsx)(h, {
                                className: A.$f.controlsBar,
                                album: t,
                                likeIconSize: y,
                            }),
                        ],
                    });
                });
        },
        57609: (e, i, t) => {
            "use strict";
            t.d(i, { useAlbumDisclaimer: () => n });
            var r = t(66268),
                a = t(54960),
                s = t(42213),
                l = t(79169);
            let n = (e) => {
                let { album: i, callback: t, shouldHistoryBack: n } = e,
                    {
                        disclaimerModalData: o,
                        modals: { disclaimerModal: u },
                    } = (0, l.Pjs)(),
                    c = (0, r.useRef)(String((0, a.A)())),
                    d = (0, r.useRef)(!1),
                    m = (0, l.NFA)().get(l.U2_);
                return (
                    (0, r.useEffect)(() => {
                        o.isUnsafeDisclaimerConfirmed &&
                            o.id === c.current &&
                            !d.current &&
                            (null == t || t(), (d.current = !0));
                    }, [t, o.isUnsafeDisclaimerConfirmed, o.id]),
                    (0, s.c)(async (e) => {
                        let r = m.get(l.cYZ.ExEx),
                            a = (null == i ? void 0 : i.isPodcast)
                                ? null == r
                                    ? void 0
                                    : r.includes(
                                          ""
                                              .concat(l.nPY.PODCAST, "_")
                                              .concat(i.id),
                                      )
                                : null == r
                                  ? void 0
                                  : r.includes(
                                        ""
                                            .concat(l.nPY.ALBUM, "_")
                                            .concat(null == i ? void 0 : i.id),
                                    );
                        if ((null == i ? void 0 : i.isUnsafeLegal) && a) {
                            null == t || t(e);
                            return;
                        }
                        if (
                            (null == i ? void 0 : i.isLegalRejected) ||
                            (null == i ? void 0 : i.isUnsafeLegal)
                        ) {
                            null == e || e.preventDefault(),
                                await o.getDisclaimerData({
                                    entityId: i.id,
                                    entityType: i.isPodcast
                                        ? l.nPY.PODCAST
                                        : l.nPY.ALBUM,
                                    disclaimerId: i.modalDisclaimerId,
                                }),
                                i.isUnsafeLegal && o.setType(l.YwF.UNSAFE),
                                o.setId(c.current),
                                o.setEntityId(i.id),
                                i.isPodcast
                                    ? o.setEntityType(l.nPY.PODCAST)
                                    : o.setEntityType(l.nPY.ALBUM),
                                o.setShouldHistoryBack(!!n),
                                (d.current = !1),
                                u.open();
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
        59173: (e, i, t) => {
            "use strict";
            t.d(i, { useOnPromoLandingLikeClick: () => o });
            var r = t(17846),
                a = t(37656),
                s = t(42213),
                l = t(79169),
                n = t(30147);
            let o = (e) => {
                let {
                        user: i,
                        modals: {
                            promoLandingBuySubscriptionModal: t,
                            crackdownModal: o,
                        },
                        settings: { isMobile: u },
                        paywall: c,
                        albumCPA: { isPlusCPAEnabled: d },
                        promolanding: m,
                    } = (0, l.Pjs)(),
                    { isFreemium: v } = (0, l.XCI)(),
                    b = (0, n.f)(),
                    { pageAlbumId: p } = (0, l.THB)(),
                    _ = (0, r.useSearchParams)();
                return (0, s.c)(async () => {
                    if (
                        d({
                            pageAlbumId: p,
                            albumId: null == e ? void 0 : e.id,
                            isNonMusic: null == e ? void 0 : e.isNonMusic,
                        })
                    )
                        return void c.openModal();
                    if (
                        (!v ||
                            (null == e ? void 0 : e.isLiked) ||
                            (u ? t.open() : o.open()),
                        i.isAuthorized) &&
                        e
                    ) {
                        if (!e.isLiked) {
                            var r, s;
                            m.sendLikeFeedback({
                                reaction: a.g.LIKE,
                                yclid:
                                    null != (r = _.get(l.K3F.YCLID)) ? r : "",
                                campaignId:
                                    null != (s = _.get(l.K3F.UTM_CAMPAIGN))
                                        ? s
                                        : "",
                            });
                        }
                        return b({
                            album: e,
                            withLink: !1,
                            withNotification: i.hasPlus,
                        });
                    }
                });
            };
        },
        60343: (e, i, t) => {
            "use strict";
            t.d(i, { useOnLikeClick: () => u });
            var r = t(33008),
                a = t(73827),
                s = t(42213),
                l = t(79169),
                n = t(18740),
                o = t(30147);
            let u = (e) => {
                let {
                        user: i,
                        paywall: t,
                        albumCPA: { isPlusCPAEnabled: u },
                    } = (0, l.Pjs)(),
                    { formatMessage: c } = (0, a.A)(),
                    { notify: d } = (0, l.lkh)(),
                    m = (0, o.f)(),
                    { pageAlbumId: v } = (0, l.THB)();
                return (0, s.c)(async () => {
                    if (e)
                        return u({
                            pageAlbumId: v,
                            albumId: e.id,
                            isNonMusic: e.isNonMusic,
                        })
                            ? void t.openModal()
                            : i.isAuthorized
                              ? m({ album: e })
                              : void d(
                                    (0, r.jsx)(n.hT, {
                                        error: c({
                                            id: "authorization-messages.need-to-authorizate",
                                        }),
                                    }),
                                    { containerId: l.uQT.ERROR },
                                );
                });
            };
        },
        68440: (e) => {
            e.exports = {
                card_root: "HorizontalCardContainer_root__YoAAP",
                root: "ControlsBar_root__hZQ_Z",
                item: "ControlsBar_item__Y7iTC",
                item_buttonArrow: "ControlsBar_item_buttonArrow__y_Ku0",
                controls: "ControlsBar_controls__yRO8t",
                trailerIcon: "ControlsBar_trailerIcon__areYT",
                controls_disabled: "ControlsBar_controls_disabled___S7Rg",
                likeIcon: "ControlsBar_likeIcon__eJvkI",
            };
        },
        70682: (e, i, t) => {
            "use strict";
            t.d(i, { z: () => r });
            var r = (function (e) {
                return (e.PAGE = "PAGE"), (e.CARD = "CARD"), e;
            })({});
        },
        77059: (e, i, t) => {
            "use strict";
            var r;
            t.d(i, { _: () => r }),
                (function (e) {
                    (e.UP = "up"),
                        (e.DOWN = "down"),
                        (e.SAME = "same"),
                        (e.NEW = "new");
                })(r || (r = {}));
        },
        79836: (e) => {
            e.exports = {
                root: "AlbumCard_root__vP6k4",
                root_withChart: "AlbumCard_root_withChart__J2SZv",
                artists: "AlbumCard_artists__phKco",
                likeTextButton: "AlbumCard_likeTextButton__2AQd9",
                controls: "AlbumCard_controls__yuO40",
                cover: "AlbumCard_cover__zXmdl",
                coverBlock: "AlbumCard_coverBlock__94ZzY",
                image: "AlbumCard_image__Mm55s",
                titleLink: "AlbumCard_titleLink__u_WLG",
                title: "AlbumCard_title__8YvhT",
                title_withVersion: "AlbumCard_title_withVersion__NClAp",
                title_withChart: "AlbumCard_title_withChart__PVOiJ",
                chart: "AlbumCard_chart__gASdj",
                version: "AlbumCard_version__h2aJz",
                artistLink: "AlbumCard_artistLink__uPR_2",
                playButton: "AlbumCard_playButton__mYK9R",
                likeButton: "AlbumCard_likeButton__9B9C0",
                menuButton: "AlbumCard_menuButton__pxkA6",
                pinButton: "AlbumCard_pinButton__Mdi_E",
                trailerButton: "AlbumCard_trailerButton__typHh",
                control: "AlbumCard_control__qx7Xh",
                plusBadge: "AlbumCard_plusBadge__i0FkP",
                buyPlusPopover: "AlbumCard_buyPlusPopover__Kb79C",
            };
        },
        80810: (e, i, t) => {
            "use strict";
            t.d(i, { useAlbumAnalyticsAppScreenName: () => l });
            var r = t(66268),
                a = t(93967),
                s = t(15479);
            let l = (e) =>
                (0, r.useMemo)(() => {
                    switch (e) {
                        case s._.PODCAST:
                            return a.QT.PodcastScreen;
                        case s._.AUDIOBOOK:
                            return a.QT.AudiobookScreen;
                        default:
                            return a.QT.AlbumScreen;
                    }
                }, [e]);
        },
        82548: (e, i, t) => {
            "use strict";
            t.d(i, {
                AlbumEntityNameConsumer: () => l,
                useAlbumEntityName: () => n,
            });
            var r = t(66268),
                a = t(73827),
                s = t(15479),
                l = (function (e) {
                    return (e.PIN = "pin"), e;
                })({});
            let n = (e, i) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    switch (e) {
                        case s._.SINGLE:
                            return t({ id: "entity-names.single" });
                        case s._.PODCAST:
                            return t({ id: "entity-names.podcast" });
                        case s._.AUDIOBOOK:
                            if ("pin" === i)
                                return t({ id: "entity-names.book" });
                            return t({ id: "entity-names.audio" });
                        case s._.FAIRY_TALE:
                            return t({ id: "entity-names.fairy-tale" });
                        default:
                            return t({ id: "entity-names.album" });
                    }
                }, [e, t, i]);
            };
        },
        86335: (e, i, t) => {
            "use strict";
            t.r(i), t.d(i, { AlbumCard: () => T });
            var r = t(33008),
                a = t(85896),
                s = t(97531),
                l = t(66268),
                n = t(73827),
                o = t(93967),
                u = t(18064),
                c = t(48509),
                d = t(15479),
                m = t(42213),
                v = t(42314),
                b = t(44189),
                p = t(69476),
                _ = t(78016),
                A = t(54487),
                g = t(77868),
                C = t(95592),
                y = t(70879),
                h = t(16285),
                k = t(79169),
                x = t(18740),
                P = t(70682);
            let f = { mainAxis: -26, alignmentAxis: -16 },
                N = {
                    isEnabled: !0,
                    width: 20,
                    height: 8,
                    tipRadius: 2,
                    fill: "var(--ym-background-color-primary-enabled-tooltip)",
                };
            var L = t(38340),
                O = t(79836),
                I = t.n(O);
            let T = (0, s.PA)((e) => {
                let {
                        className: i,
                        children: t,
                        album: s,
                        contentLinesCount: O,
                        withLikesCount: T,
                        withChart: K,
                        withAddition: M = !0,
                        withArtistName: j = !0,
                        releaseDateFormatter: U = k.sDH,
                    } = e,
                    { ref: B, intersectionPropertyId: w } = (0, k.nMI)(),
                    {
                        user: R,
                        trailer: E,
                        settings: { isMobile: D },
                        albumCPA: { isPlusCPAEnabled: S },
                        experiments: z,
                    } = (0, k.Pjs)(),
                    { from: F, utmLink: $ } = (0, k.fyy)({
                        contextId: s.id,
                        contextType: c.K.Album,
                        utmForPageIds: s.artistIds,
                    }),
                    { formatMessage: G, formatDate: Q } = (0, n.A)(),
                    {
                        sendLikeSearchFeedback: q,
                        sendNavigateSearchFeedback: W,
                        sendPlaySearchFeedback: Y,
                    } = (0, k.zEv)(),
                    [H, V] = (0, l.useState)(!1),
                    [Z, J] = (0, l.useState)(!1),
                    [X, ee] = (0, l.useState)(!1),
                    ei = (0, k.NKK)(),
                    et = (0, k.brA)(),
                    er = (0, C.KX)(s),
                    ea = (0, C.A7)(s),
                    es = (0, k.ZpR)(s.url),
                    [el, en] = (0, l.useState)(!1),
                    eo = (0, k.Ftl)(),
                    [eu, ec] = (0, l.useState)(!1),
                    ed = (0, k.PT7)(),
                    { pageAlbumId: em } = (0, k.THB)(),
                    ev = S({
                        pageAlbumId: em,
                        albumId: s.id,
                        isNonMusic: s.isNonMusic,
                    }),
                    eb =
                        s.isAvailableOnlyForPlus &&
                        !s.isUnsafeLegal &&
                        !s.isLegalRejected,
                    ep = eb && !D,
                    e_ = s.isAvailable || ep || s.isAudiobook,
                    eA = (0, l.useId)(),
                    eg = (0, k.ZpR)(
                        "https://music.yandex.ru/promo/lt-pay-promo/?get-plus=1&utm_source=music&utm_medium=non_music_tab&utm_campaign=web_music_birthday",
                    ),
                    eC = (0, m.c)((e) => {
                        if ((e.stopPropagation(), ed()))
                            return void e.preventDefault();
                        E.openAlbumTrailer(s.id), eo(o.ky.Album, String(s.id));
                    }),
                    ey =
                        s.type === d._.SINGLE
                            ? G({ id: "entity-names.single" })
                            : void 0,
                    eh = s.releaseDate ? Q(s.releaseDate, U()) : void 0,
                    ek = (0, k.daX)([null != eh ? eh : s.year, ey]),
                    ex = (0, C.r_)(s.type),
                    eP = (0, l.useMemo)(() => {
                        var e;
                        let i = s.isLiked
                            ? G({ id: "entity-names.has-your-like" })
                            : "";
                        return ""
                            .concat(ex, " ")
                            .concat(s.title, " ")
                            .concat(null != (e = s.version) ? e : "", " ")
                            .concat(i);
                    }, [ex, G, s.title, s.isLiked, s.version]),
                    { isPlaying: ef, togglePlay: eN } = (0, k.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: c.K.Album,
                                meta: { id: s.id },
                                from: F,
                                utmLink: $,
                            },
                            loadContextMeta: !0,
                        },
                    }),
                    eL = (0, C.cp)({ album: s, callback: es }),
                    eO = (0, C.cp)({ album: s, callback: eN }),
                    eI = (0, m.c)((e) => {
                        ei({ to: o.QT.AlbumScreen }), null == W || W(), eL(e);
                    }),
                    eT = (0, m.c)(() => {
                        ed() ||
                            (Z || ef || (J(!0), null == Y || Y()),
                            eO(),
                            et(!ef));
                    }),
                    eK = (0, m.c)(() => {
                        H || s.isLiked || (V(!0), null == q || q()), er();
                    }),
                    eM = (0, m.c)((e) => {
                        ee(e), en(e);
                    }),
                    ej = (0, l.useMemo)(() => {
                        var e;
                        return (0, r.jsxs)(g.Caption, {
                            className: (0, a.$)(I().title, {
                                [I().title_withVersion]: s.version,
                                [I().title_withChart]: K,
                            }),
                            variant: "div",
                            type: "entity",
                            size: "s",
                            weight: "medium",
                            lineClamp: 2,
                            ...(0, u.Am)(u.Kq.album.ALBUM_TITLE),
                            children: [
                                (0, r.jsx)(x.N_, {
                                    "aria-label": ""
                                        .concat(s.title, " ")
                                        .concat(
                                            null != (e = s.version) ? e : "",
                                        ),
                                    className: I().titleLink,
                                    href: s.url,
                                    onClick: eI,
                                    ...(0, u.Am)(u.Kq.album.ALBUM_TITLE_LINK),
                                    children: s.title,
                                }),
                                s.version &&
                                    (0, r.jsx)(g.Caption, {
                                        className: I().version,
                                        variant: "span",
                                        ...(0, u.Am)(u.Kq.album.ALBUM_VERSION),
                                        children: " ".concat(s.version),
                                    }),
                            ],
                        });
                    }, [s.title, s.url, s.version, eI, K]),
                    eU = (0, l.useMemo)(() => {
                        var e;
                        return (0, r.jsx)(x.N_, {
                            href: s.url,
                            onClick: eI,
                            children: ""
                                .concat(s.title, " ")
                                .concat(null != (e = s.version) ? e : ""),
                        });
                    }, [s.title, s.url, s.version, eI]),
                    eB = (0, l.useMemo)(() => {
                        var e;
                        if (
                            null == s || null == (e = s.trailer)
                                ? void 0
                                : e.isAvailable
                        )
                            return (0, r.jsx)(
                                x.nE,
                                {
                                    children: (0, r.jsx)(
                                        x.kJ,
                                        {
                                            className: (0, a.$)(
                                                I().trailerButton,
                                                I().control,
                                            ),
                                            radius: "round",
                                            size: "s",
                                            iconSize: "xxs",
                                            onClick: eC,
                                        },
                                        s.getKey("TrailerButton"),
                                    ),
                                },
                                s.getKey("AlbumCardTrailerTooltip"),
                            );
                    }, [s, eC]),
                    ew = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                L.AlbumContextMenu,
                                {
                                    album: s,
                                    onOpenChange: eM,
                                    open: X,
                                    className: (0, a.$)(
                                        I().menuButton,
                                        I().control,
                                    ),
                                    icon: (0, r.jsx)(_.Icon, {
                                        size: "xxs",
                                        variant: "more",
                                    }),
                                    size: "s",
                                    variant: P.z.CARD,
                                    ...(0, u.Am)(
                                        u.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                    ),
                                },
                                s.getKey("AlbumContextMenu"),
                            ),
                        [s, eM, X],
                    ),
                    eR = (0, l.useCallback)(
                        () =>
                            (0, r.jsx)(
                                x.DM,
                                {
                                    className: (0, a.$)(
                                        I().playButton,
                                        I().control,
                                    ),
                                    buttonVariant: "default",
                                    withHover: !1,
                                    iconSize: "xl",
                                    variant: "filled",
                                    onClick: eT,
                                    isPlaying: ef,
                                    disabled: ep,
                                },
                                s.getKey("PlayButton"),
                            ),
                        [ep, s, ef, eT],
                    ),
                    eE = (0, v.L)(() =>
                        (0, r.jsx)(
                            b.Button,
                            {
                                role: "link",
                                color: "plus",
                                size: "xxs",
                                radius: "xxxl",
                                onClick: eg,
                                children: (0, r.jsx)(g.Caption, {
                                    variant: "div",
                                    size: "m",
                                    children: G({ id: "payment.try-button" }),
                                }),
                            },
                            eA,
                        ),
                    ),
                    eD = (0, l.useMemo)(
                        () =>
                            ep &&
                            R.hasPlus &&
                            z.checkExperiment(
                                k.zal.WebNextPlusLandingLink,
                                "on",
                            )
                                ? (0, r.jsx)(x.SU, {
                                      className: I().buyPlusPopover,
                                      buttonText: G({
                                          id: "interface-actions.more-details",
                                      }),
                                      isNested: !0,
                                      placement: "top-start",
                                      isOpened: eu,
                                      onOpenChange: ec,
                                      textVariant: "album",
                                      albumTextVariant: s.type,
                                      arrowProps: N,
                                      offsetOptions: f,
                                      renderChildren: eR,
                                      customButtons: [eE],
                                  })
                                : ep
                                  ? (0, r.jsx)(x.SU, {
                                        className: I().buyPlusPopover,
                                        buttonText: G({
                                            id: "interface-actions.more-details",
                                        }),
                                        isNested: !0,
                                        placement: "top-start",
                                        isOpened: eu,
                                        onOpenChange: ec,
                                        textVariant: "album",
                                        albumTextVariant: s.type,
                                        arrowProps: N,
                                        offsetOptions: f,
                                        renderChildren: eR,
                                    })
                                  : eR(),
                        [ep, eu, ec, G, eR, s.type, eE, z, R.hasPlus],
                    ),
                    eS = (0, v.L)(() => {
                        if (ep) return;
                        let e = !ev && !R.isAuthorized;
                        return (0, r.jsx)(
                            x.cy,
                            {
                                className: (0, a.$)(
                                    I().likeButton,
                                    I().control,
                                ),
                                isLiked: s.isLiked,
                                onClick: eK,
                                variant: "default",
                                size: "s",
                                iconSize: "xxs",
                                disabled: e,
                            },
                            s.getKey("LikeButton"),
                        );
                    }),
                    ez = (0, l.useMemo)(() => {
                        if (!ep)
                            return (0, r.jsx)(
                                x.O0,
                                {
                                    onClick: ea,
                                    isPinned: s.isPinned,
                                    className: (0, a.$)(
                                        I().pinButton,
                                        I().control,
                                    ),
                                    withRipple: !1,
                                    isDisabled: ep,
                                },
                                s.getKey("PinButton"),
                            );
                    }, [s, ep, ea]),
                    eF = (0, l.useMemo)(() => {
                        if (s.isAvailable || ep)
                            return (0, r.jsx)(p.hg, {
                                isVisible: X || el || eu,
                                className: I().controls,
                                playControl: eD,
                                likeControl: eS,
                                menuControl: ew,
                                pinControl: ez,
                                trailerControl: eB,
                            });
                    }, [s, X, el, ew, eB, eu, eD, eS, ez, ep]),
                    e$ = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(A.Paper, {
                                className: I().cover,
                                radius: "s",
                                withShadow: !0,
                                ...(0, u.Am)(u.Kq.album.ALBUM_CARD),
                                children: (0, r.jsxs)("div", {
                                    className: I().coverBlock,
                                    onClick: eI,
                                    children: [
                                        (0, r.jsx)(x.BW, {
                                            className: I().image,
                                            src: s.coverUri,
                                            size: 200,
                                            fit: "cover",
                                            alt: eP,
                                            withAvatarReplace: !0,
                                            isAvailable: e_,
                                            "aria-hidden": !0,
                                        }),
                                        eb &&
                                            (0, r.jsx)(_.Icon, {
                                                variant: "plusBadge",
                                                className: I().plusBadge,
                                            }),
                                        eF,
                                    ],
                                }),
                            }),
                        [eI, s.coverUri, e_, eP, eF, eb],
                    );
                return (0, r.jsxs)(p.MN, {
                    ref: B,
                    className: (0, a.$)(
                        I().root,
                        { [I().root_withChart]: K },
                        i,
                    ),
                    "aria-label": eP,
                    explicitMarkComponent:
                        s.explicitDisclaimer &&
                        (0, r.jsx)(
                            x.Nq,
                            {
                                className: I().explicitMark,
                                getDescriptionTexts: s.getDescriptionTexts,
                                variant: s.explicitDisclaimer,
                            },
                            s.getKey("AlbumCardExplicitMarkIcon"),
                        ),
                    title: ej,
                    srTitle: eU,
                    "data-intersection-property-id": w,
                    contentLinesCount: O,
                    view: e$,
                    description:
                        j &&
                        (0, r.jsx)(
                            y.iQ,
                            {
                                className: I().artists,
                                artists: s.artists,
                                lineClamp: 1,
                                linkClassName: I().artistLink,
                                captionSize: "s",
                            },
                            s.getKey("description"),
                        ),
                    chart:
                        K &&
                        s.chart &&
                        (0, r.jsx)(
                            h.t1,
                            {
                                withIcon: !0,
                                className: I().chart,
                                position: s.chart.position,
                                progress: s.chart.progress,
                            },
                            s.getKey("chart"),
                        ),
                    ...(0, u.Am)(u.Kq.album.ALBUM_ITEM),
                    children: [
                        M &&
                            ek &&
                            (0, r.jsx)(g.Caption, {
                                className: I().addition,
                                variant: "div",
                                type: "entity",
                                size: "s",
                                weight: "medium",
                                lineClamp: 1,
                                children: ek,
                            }),
                        T &&
                            !!s.actualLikesCount &&
                            (0, r.jsx)(x.xW, {
                                className: I().likeTextButton,
                                ariaLabel: G(
                                    { id: "entity-names.likes-counter" },
                                    { counter: s.actualLikesCount },
                                ),
                                likesCount: s.actualLikesCount,
                                isLiked: s.isLiked,
                                handleLikeClick: er,
                            }),
                        t,
                    ],
                });
            });
        },
        89414: (e, i, t) => {
            "use strict";
            t.d(i, { useOnPresaveClick: () => d });
            var r = t(33008),
                a = t(29318),
                s = t(66268),
                l = t(73827),
                n = t(56312),
                o = t(79169),
                u = t(18740);
            let c = (e) => {
                    let { upcomingAlbum: i, closeToast: t } = e;
                    return (0, r.jsx)(u.Pv, {
                        closeToast: t,
                        albumTitle: i.title,
                        coverUri: i.coverUri,
                        entityTitle: i.title,
                        isPresave: i.isPresave,
                    });
                },
                d = (e) => {
                    let { user: i } = (0, o.Pjs)(),
                        { notify: t } = (0, o.lkh)(),
                        [d, m] = (0, s.useState)(!1),
                        { formatMessage: v } = (0, l.A)();
                    return (0, s.useCallback)(async () => {
                        if (!i.isAuthorized)
                            return void t(
                                (0, r.jsx)(u.hT, {
                                    error: v({
                                        id: "authorization-messages.need-to-authorizate",
                                    }),
                                }),
                                { containerId: o.uQT.ERROR },
                            );
                        if (d) return;
                        let s = { ...(0, a.HO)(e), isPresave: !e.isPresave };
                        m(!0);
                        let l = await e.toggleLike();
                        m(!1),
                            l === n.J.OK
                                ? t((0, r.jsx)(c, { upcomingAlbum: s }), {
                                      containerId: o.uQT.INFO,
                                  })
                                : t(
                                      (0, r.jsx)(u.hT, {
                                          error: v({
                                              id: "error-messages.error-during-action",
                                          }),
                                      }),
                                      { containerId: o.uQT.ERROR },
                                  );
                    }, [i.isAuthorized, d, e, t, v]);
                };
        },
        91450: (e, i, t) => {
            "use strict";
            t.d(i, { useNavigateToAlbumCPA: () => s });
            var r = t(42213),
                a = t(79169);
            let s = (e) => {
                let { albumId: i, albumUrl: t, callback: s } = e,
                    {
                        getAlbumUrlWithSavedClid: l,
                        checkIsCurrentAlbumPage: n,
                    } = (0, a.IQF)(),
                    o = (0, a.pqZ)();
                return (0, r.c)((e) => {
                    if (!i || !t) {
                        null == s || s(e);
                        return;
                    }
                    if (n(i)) {
                        null == e || e.preventDefault(), o(l(i, t));
                        return;
                    }
                    null == s || s(e);
                });
            };
        },
        92725: (e, i, t) => {
            "use strict";
            t.d(i, { useMarkAlbumListenedClick: () => u });
            var r = t(33008),
                a = t(66268),
                s = t(73827),
                l = t(72315),
                n = t(79169),
                o = t(18740);
            let u = () => {
                let { user: e, album: i, fullscreenPlayer: t } = (0, n.Pjs)(),
                    { notify: u } = (0, n.lkh)(),
                    { formatMessage: c } = (0, s.A)();
                return (0, a.useCallback)(async () => {
                    var a, s;
                    if (!i) return;
                    let d = t.modal.isOpened
                        ? n.uQT.FULLSCREEN_ERROR
                        : n.uQT.ERROR;
                    return e.isAuthorized
                        ? (await i.setListeningFinishedStatus()) !== l.T.OK
                            ? void u(
                                  (0, r.jsx)(o.hT, {
                                      error: c({
                                          id: "error-messages.error-during-action",
                                      }),
                                  }),
                                  { containerId: d },
                              )
                            : void (
                                  null == (s = i.meta) ||
                                  s.updateFinished(
                                      !(null == (a = i.meta)
                                          ? void 0
                                          : a.listeningFinished),
                                  )
                              )
                        : void u(
                              (0, r.jsx)(o.hT, {
                                  error: c({
                                      id: "authorization-messages.need-to-authorizate",
                                  }),
                              }),
                              { containerId: d },
                          );
                }, [c, u, i, e.isAuthorized, t.modal.isOpened]);
            };
        },
        95592: (e, i, t) => {
            "use strict";
            t.d(i, {
                cr: () => c.AlbumEntityNameConsumer,
                GI: () => P,
                oM: () => N,
                rU: () => n,
                e7: () => s,
                G_: () => l,
                Rl: () => o.useAlbumAnalyticsAppScreenName,
                cp: () => u.useAlbumDisclaimer,
                r_: () => c.useAlbumEntityName,
                Ek: () => d.useMarkAlbumListenedClick,
                $1: () => m.useNavigateToAlbumCPA,
                KX: () => v.useOnLikeClick,
                A7: () => b.useOnPinClick,
                PL: () => p.useOnPresaveClick,
                c5: () => _.useOnPromoLandingLikeClick,
            });
            var r = t(41028),
                a = t(79169);
            let s = (e) => {
                    let i = (0, a.mxW)(e.trailer);
                    return (0, r.wg)({
                        id: e.id,
                        title: e.title,
                        coverUri: e.coverUri,
                        type: e.type,
                        year: e.year,
                        version: e.version,
                        genre: e.genre,
                        likesCount: e.likesCount,
                        averageColor: (0, a.QBb)(e.derivedColors),
                        isAvailable: !!e.available,
                        trackPosition: e.trackPosition,
                        disclaimers: e.disclaimers,
                        trackCount: e.trackCount,
                        availableForPremiumUsers: e.availableForPremiumUsers,
                        availableForOptions: e.availableForOptions || [],
                        bestAlbumTracks: e.bests,
                        durationSec: e.durationSec,
                        trailer: i,
                        listeningFinished: !!e.listeningFinished,
                    });
                },
                l = (e) => {
                    let i = !1;
                    e.presaveDate ? (i = !0) : e.presaved && (i = e.presaved);
                    let { disclaimers: t } = (0, a.fyr)(e);
                    return (0, r.wg)({
                        id: e.id,
                        disclaimers: t,
                        isPresave: i,
                        title: e.title,
                        type: e.type,
                        coverUri: e.coverUri,
                        releaseDate: e.releaseDate,
                    });
                };
            var n = (function (e) {
                    return (e.TRACK = "track"), (e.TEXT = "text"), e;
                })({}),
                o = t(80810),
                u = t(57609),
                c = t(82548),
                d = t(92725),
                m = t(91450),
                v = t(60343),
                b = t(2202),
                p = t(89414),
                _ = t(59173),
                A = t(15479),
                g = t(15029),
                C = t(34874),
                y = t(93435),
                h = t(60866),
                k = t(59615);
            let x = r.gK.model("TrackPosition", {
                    volume: r.gK.number,
                    index: r.gK.number,
                }),
                P = r.gK
                    .compose(
                        r.gK.model({
                            id: r.gK.number,
                            title: r.gK.string,
                            type: r.gK.maybe(
                                r.gK.enumeration(Object.values(A._)),
                            ),
                            coverUri: r.gK.maybe(r.gK.string),
                            averageColor: r.gK.maybe(r.gK.string),
                            year: r.gK.maybe(r.gK.number),
                            version: r.gK.maybe(r.gK.string),
                            isAvailable: r.gK.optional(r.gK.boolean, !0),
                            availableForOptions: r.gK.maybe(
                                r.gK.array(
                                    r.gK.enumeration(Object.values(g.E)),
                                ),
                            ),
                            availableForPremiumUsers: r.gK.maybe(r.gK.boolean),
                            bookmateOptionRequired: r.gK.maybe(r.gK.boolean),
                            genre: r.gK.maybe(r.gK.string),
                            trackPosition: r.gK.maybe(x),
                            disclaimers: r.gK.maybe(r.gK.array(r.gK.string)),
                            trackCount: r.gK.maybe(r.gK.number),
                            bestAlbumTracks: r.gK.maybe(
                                r.gK.array(r.gK.number),
                            ),
                            trailer: r.gK.maybe(k.aQ),
                            durationSec: r.gK.maybe(r.gK.number),
                            listeningFinished: r.gK.maybe(r.gK.boolean),
                            releaseDate: r.gK.maybe(r.gK.string),
                        }),
                        k.tP,
                        k.Ec,
                    )
                    .views((e) => {
                        let i = {
                            get url() {
                                let { href: i } = (0, a.uvd)(
                                    "/album/:albumId",
                                    { params: { albumId: e.id } },
                                );
                                return i;
                            },
                            get isLiked() {
                                if (!(0, r._n)(e)) return !1;
                                let { library: i } = (0, r.Zn)(e);
                                return null == i
                                    ? void 0
                                    : i.isAlbumLiked(e.id);
                            },
                            get pinId() {
                                return "".concat(C._.ALBUM_ITEM).concat(e.id);
                            },
                            get seeds() {
                                return ["album:".concat(e.id)];
                            },
                            get isAlbum() {
                                return (
                                    e.type === A._.ALBUM ||
                                    e.type === A._.SINGLE
                                );
                            },
                            get isPodcast() {
                                return e.type === A._.PODCAST;
                            },
                            get isAudiobook() {
                                return e.type === A._.AUDIOBOOK;
                            },
                            get isFairyTale() {
                                return e.type === A._.FAIRY_TALE;
                            },
                            get isNonMusic() {
                                if (!(0, r._n)(e)) return !1;
                                return (
                                    i.isPodcast ||
                                    i.isAudiobook ||
                                    i.isFairyTale
                                );
                            },
                            get isPinned() {
                                if (!(0, r._n)(e)) return !1;
                                let { pinsCollection: i } = (0, r.Zn)(e);
                                return i.isPinned(this.pinId);
                            },
                            get modalDisclaimerId() {
                                if (e.disclaimers) {
                                    var t;
                                    let i =
                                        null ==
                                        (t = (0, a.bRW)(
                                            e.disclaimers,
                                            y.M.MODAL,
                                        ))
                                            ? void 0
                                            : t[0];
                                    if (i) {
                                        let { id: e } = i;
                                        return e;
                                    }
                                }
                                return null;
                            },
                            get isForeignAgent() {
                                var s, l;
                                if (!(0, r._n)(e)) return !1;
                                let { experiments: i } = (0, r.Zn)(e),
                                    t = !!(null == (s = e.disclaimers)
                                        ? void 0
                                        : s.includes(y.M.FOREIGN_AGENT));
                                if (e.disclaimers) {
                                    let i =
                                        null ==
                                        (l = (0, a.bRW)(
                                            e.disclaimers,
                                            y.M.FOREIGN_AGENT,
                                        ))
                                            ? void 0
                                            : l[0];
                                    t =
                                        (null == i ? void 0 : i.type) ===
                                        y.M.FOREIGN_AGENT;
                                }
                                return (
                                    t &&
                                    i.checkExperiment(
                                        a.zal.WebNextAgentPodcast,
                                        "on",
                                    )
                                );
                            },
                            get isLegalRejected() {
                                if (!(0, r._n)(e)) return !1;
                                if (e.disclaimers) {
                                    var n;
                                    let i =
                                            null ==
                                            (n = (0, a.bRW)(
                                                e.disclaimers,
                                                y.M.MODAL,
                                            ))
                                                ? void 0
                                                : n[0],
                                        t =
                                            (null == i ? void 0 : i.type) ===
                                            y.M.MODAL;
                                    return (
                                        !e.isAvailable &&
                                        (t || e.disclaimers.includes(y.M.MODAL))
                                    );
                                }
                                return !1;
                            },
                            get isUnsafeLegal() {
                                if (!(0, r._n)(e)) return !1;
                                if (e.disclaimers) {
                                    var o;
                                    let i =
                                        null ==
                                        (o = (0, a.bRW)(
                                            e.disclaimers,
                                            y.M.MODAL,
                                        ))
                                            ? void 0
                                            : o[0];
                                    return (
                                        e.isAvailable &&
                                        (null == i ? void 0 : i.type) ===
                                            y.M.MODAL
                                    );
                                }
                                return !1;
                            },
                            get isAvailableOnlyForPlus() {
                                var u;
                                return (
                                    !e.isAvailable &&
                                    (e.availableForPremiumUsers ||
                                        !!(null == (u = e.availableForOptions)
                                            ? void 0
                                            : u.includes(g.E.BOOKMATE)))
                                );
                            },
                            get shouldShowBooksBadge() {
                                var c;
                                return !!(
                                    e.bookmateOptionRequired ||
                                    (!e.availableForPremiumUsers &&
                                        (null == (c = e.availableForOptions)
                                            ? void 0
                                            : c.includes(g.E.BOOKMATE)))
                                );
                            },
                        };
                        return i;
                    })
                    .actions((e) => ({
                        toggleLike: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { library: i, user: t } = (0, r.Zn)(e);
                            if (t.isAuthorized) {
                                let a = yield i.toggleAlbumLike({
                                    entityId: e.id,
                                    userId: t.account.data.uid,
                                });
                                return (
                                    (0, r._n)(e) &&
                                        a === h.f.OK &&
                                        (e.isLiked
                                            ? e.likePending()
                                            : e.unlikePending()),
                                    a
                                );
                            }
                        }),
                        togglePin: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { pinsCollection: i, user: t } = (0, r.Zn)(e);
                            if (t.isAuthorized)
                                return yield i.toggleAlbumPin(
                                    { id: e.id },
                                    e.pinId,
                                );
                        }),
                        getKey: (i) => "".concat(i, "_").concat(e.id),
                        updateFinished: (i) => {
                            e.listeningFinished = i;
                        },
                    }))
                    .named("BaseAlbum");
            var f = t(56312);
            let N = r.gK
                .compose(
                    r.gK.model("BaseUpcomingAlbum", {
                        id: r.gK.number,
                        isPresave: r.gK.boolean,
                        title: r.gK.maybe(r.gK.string),
                        type: r.gK.maybe(r.gK.enumeration(Object.values(A._))),
                        coverUri: r.gK.maybe(r.gK.string),
                        releaseDate: r.gK.maybe(r.gK.string),
                    }),
                    k.Ec,
                )
                .actions((e) => {
                    let i = {
                        presaveAlbum: (0, r.L3)(function* (i) {
                            let { usersResource: t, modelActionsLogger: a } =
                                (0, r._$)(e);
                            try {
                                e.isPresave = !0;
                                let r = yield t.presaveAlbum(i);
                                return r === f.J.ERROR && (e.isPresave = !1), r;
                            } catch (i) {
                                return (
                                    (e.isPresave = !1), a.error(i), f.J.ERROR
                                );
                            }
                        }),
                        removePresaveAlbum: (0, r.L3)(function* (i) {
                            let { usersResource: t, modelActionsLogger: a } =
                                (0, r._$)(e);
                            try {
                                e.isPresave = !1;
                                let r = yield t.removePresaveAlbum(i);
                                return r === f.J.ERROR && (e.isPresave = !0), r;
                            } catch (i) {
                                return (
                                    (e.isPresave = !0), a.error(i), f.J.ERROR
                                );
                            }
                        }),
                        toggleLike: (0, r.L3)(function* () {
                            let t;
                            if (!(0, r._n)(e)) return;
                            let { user: a } = (0, r.Zn)(e);
                            if (a.account.data.uid)
                                return (
                                    (t = e.isPresave
                                        ? yield i.removePresaveAlbum({
                                              albumId: e.id,
                                              userId: a.account.data.uid,
                                          })
                                        : yield i.presaveAlbum({
                                              albumId: e.id,
                                              userId: a.account.data.uid,
                                              likeAfterRelease: !0,
                                          })),
                                    !(0, r._n)(e),
                                    t
                                );
                        }),
                        getKey: (i) => "".concat(i, "_").concat(e.id),
                    };
                    return i;
                });
        },
    },
]);
