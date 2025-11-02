(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4204],
    {
        12658: (t) => {
            t.exports = {
                root: "ArtistAboutModal_root__bmUo9",
                modalContent: "ArtistAboutModal_modalContent__RGkJk",
                header: "ArtistAboutModal_header__yLnAj",
                overlay: "ArtistAboutModal_overlay__6hToT",
                closeButton: "ArtistAboutModal_closeButton__Gnz25",
            };
        },
        23236: (t) => {
            t.exports = {
                root: "ArtistAboutModalShimmer_root__RWCDi",
                entityName: "ArtistAboutModalShimmer_entityName__eBJym",
                title: "ArtistAboutModalShimmer_title__0uj5d",
            };
        },
        28882: (t, e, r) => {
            "use strict";
            r.d(e, { ArtistContextMenu: () => p });
            var o = r(33008),
                i = r(97531),
                l = r(73827),
                a = r(93967),
                n = r(18064),
                s = r(48509),
                u = r(42213),
                c = r(78016),
                d = r(66098),
                _ = r(70879),
                m = r(28996),
                v = r(79169),
                f = r(18740);
            let p = (0, i.PA)((t) => {
                var e, r, i;
                let { artist: p, onOpenChange: g, open: h, ...x } = t,
                    {
                        shouldShowBuySubscriptionModal: b,
                        showBuySubscriptionModal: A,
                    } = (0, v.qBP)(),
                    {
                        settings: { isMobile: C },
                        modals: { artistAboutModal: y },
                        trailer: k,
                        user: j,
                        experiments: T,
                    } = (0, v.Pjs)(),
                    M = (0, _.A7)(p),
                    N = (0, _.KX)(p),
                    w = (0, _.mW)(p),
                    S = (0, v.Ftl)(),
                    E = ""
                        .concat(v.UfI.ARTIST, "-")
                        .concat(null == p ? void 0 : p.id),
                    { formatMessage: L } = (0, l.A)(),
                    { utmLink: B } = (0, v.fyy)({
                        blockId: v.UfI.ARTIST,
                        contextType: s.K.Artist,
                        contextId: null == p ? void 0 : p.id,
                    }),
                    { shareLink: P, pathname: I } = (0, v.bNS)(
                        "/artist/:artistId",
                        {
                            params: {
                                artistId:
                                    null != (r = null == p ? void 0 : p.id)
                                        ? r
                                        : "",
                            },
                        },
                    ),
                    K = (0, m.A_)({
                        entityVariant: v.DwC.ARTIST,
                        urlParams: { id: null == p ? void 0 : p.id },
                    }),
                    { isPlaying: R, togglePlay: O } = (0, v.B0S)({
                        seeds:
                            null != (i = null == p ? void 0 : p.seeds) ? i : [],
                        pageIdForFrom: v._Q$.RADIO,
                        blockIdForFrom: E,
                        parentContextId: null == p ? void 0 : p.id,
                    }),
                    F = (0, v.PT7)(),
                    z = L(
                        (null == p ? void 0 : p.isComposer)
                            ? { id: "artist.about-composer" }
                            : { id: "artist.about-artist" },
                    ),
                    D = (0, u.c)(() => {
                        if (b && j.isAuthorized) return void A();
                        R || O();
                    }),
                    U = (0, u.c)(() => {
                        if (!F()) {
                            if (b) return void A();
                            (null == p ? void 0 : p.id) &&
                                (k.setUtmLink(B),
                                k.openArtistTrailer(p.id),
                                S(a.ky.Artist, p.id));
                        }
                    }),
                    H = (0, u.c)(() => {
                        y.open(null == p ? void 0 : p.id);
                    });
                (0, v.NBO)(h);
                let W = {
                        variant: v.Yxq.ARTIST,
                        id: null == p ? void 0 : p.id,
                        title: null == p ? void 0 : p.name,
                        path: I,
                    },
                    q = T.checkExperiment(v.zal.WebEditorsFeatures, "on"),
                    X =
                        null == p || null == (e = p.trailer)
                            ? void 0
                            : e.isAvailable,
                    G = T.checkExperiment(v.zal.WebNextArtistInfo, "on");
                return (0, o.jsxs)(d.W1, {
                    isMobile: C,
                    offsetOptions: 10,
                    open: h,
                    onOpenChange: g,
                    ariaLabel: L({ id: "interface-actions.context-menu" }),
                    containerProps: (0, n.Am)(n.Kq.artist.ARTIST_CONTEXT_MENU),
                    ...x,
                    children: [
                        q &&
                            (0, o.jsx)(f.aQ, {
                                fallback: (0, o.jsx)(m.dx, {
                                    entityVariant: v.DwC.ARTIST,
                                    adminUrl: K,
                                }),
                            }),
                        !C &&
                            (0, o.jsx)(f.aQ, {
                                fallback: (0, o.jsx)(f.L1, {
                                    onClick: M,
                                    isPinned: null == p ? void 0 : p.isPinned,
                                }),
                            }),
                        (0, o.jsx)(f.aQ, {
                            fallback: (0, o.jsx)(f.TW, {
                                onClick: N,
                                isLiked: null == p ? void 0 : p.isLiked,
                                disabled:
                                    !j.isAuthorized ||
                                    !(null == p ? void 0 : p.isAvailable),
                            }),
                        }),
                        X &&
                            (0, o.jsx)(f.aQ, {
                                fallback: (0, o.jsx)(f.No, { onClick: U }),
                            }),
                        (0, o.jsx)(f.aQ, {
                            fallback: (0, o.jsx)(f.C6, {
                                onClick: D,
                                disabled: !(null == p ? void 0 : p.isAvailable),
                                variant: v.IGO.ARTIST,
                                onOpenMenuChange: g,
                            }),
                        }),
                        (0, o.jsx)(f.Ht, {
                            disabled: !p,
                            shareLink: P,
                            entityMeta: W,
                        }),
                        G &&
                            (0, o.jsx)(f.aQ, {
                                fallback: (0, o.jsx)(d.Dr, {
                                    onClick: H,
                                    icon: (0, o.jsx)(c.Icon, {
                                        variant: "info",
                                        size: "xxs",
                                    }),
                                    ...(0, n.Am)(
                                        n.Kq.artist
                                            .ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    ),
                                    children: z,
                                }),
                            }),
                        (0, o.jsx)(f.aQ, {
                            fallback: (0, o.jsx)(f.DZ, {
                                onClick: w,
                                isDisliked: null == p ? void 0 : p.isDisliked,
                                disabled: !(null == p ? void 0 : p.isAvailable),
                            }),
                        }),
                    ],
                });
            });
        },
        29517: (t, e, r) => {
            "use strict";
            r.d(e, { HorizontalArtistCard: () => A });
            var o = r(33008),
                i = r(85896),
                l = r(97531),
                a = r(66268),
                n = r(73827),
                s = r(93967),
                u = r(18064),
                c = r(48509),
                d = r(42213),
                _ = r(88485),
                m = r(77868),
                v = r(70879),
                f = r(79169),
                p = r(18740),
                g = r(78016),
                h = r(58386),
                x = r.n(h);
            let b = (0, l.PA)((t) => {
                    var e;
                    let {
                            className: r,
                            artist: l,
                            likeIconSize: n = "xxs",
                        } = t,
                        { user: u, trailer: c } = (0, f.Pjs)(),
                        _ = (0, f.PT7)(),
                        { sendLikeSearchFeedback: m } = (0, f.zEv)(),
                        h = (0, v.KX)(l),
                        [b, A] = (0, a.useState)(!1),
                        C = (0, d.c)(async () => {
                            b || l.isLiked || (A(!0), null == m || m()),
                                await h();
                        }),
                        y = (0, f.Ftl)(),
                        k = (0, d.c)((t) => {
                            if ((t.stopPropagation(), _()))
                                return void t.preventDefault();
                            c.openArtistTrailer(l.id), y(s.ky.Artist, l.id);
                        });
                    return (0, o.jsxs)("div", {
                        className: (0, i.$)(x().root, x().controls, r, {
                            [x().controls_disabled]: !l.isAvailable,
                        }),
                        children: [
                            l.isAvailable &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(p.aQ, {
                                            fallback: (0, o.jsx)(p.cy, {
                                                size: "xs",
                                                iconSize: n,
                                                className: (0, i.$)(
                                                    x().item,
                                                    x().likeIcon,
                                                ),
                                                isLiked: l.isLiked,
                                                onClick: C,
                                                disabled: !u.isAuthorized,
                                            }),
                                        }),
                                        (null == (e = l.trailer)
                                            ? void 0
                                            : e.isAvailable) &&
                                            (0, o.jsx)(p.aQ, {
                                                fallback: (0, o.jsx)(p.kJ, {
                                                    className: (0, i.$)(
                                                        x().item,
                                                        x().trailerIcon,
                                                    ),
                                                    iconSize: "xs",
                                                    variant: "text",
                                                    onClick: k,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, o.jsx)("div", {
                                className: (0, i.$)(
                                    x().item,
                                    x().item_buttonArrow,
                                ),
                                children: (0, o.jsx)(g.Icon, {
                                    className: p.$f.buttonArrow,
                                    variant: "arrowRight",
                                    size: "xs",
                                }),
                            }),
                        ],
                    });
                }),
                A = (0, l.PA)((t) => {
                    let {
                            className: e,
                            artist: r,
                            pageId: l,
                            description: g,
                            coverClassName: h,
                            playButtonIconSize: x,
                            likeIconSize: A,
                        } = t,
                        { formatMessage: C } = (0, n.A)(),
                        { ref: y, intersectionPropertyId: k } = (0, f.nMI)(),
                        { from: j } = (0, f.fyy)({ pageId: l }),
                        [T, M] = (0, a.useState)(!1),
                        N = (0, f.ZpR)(r.url),
                        w = (0, f.brA)(),
                        S = (0, f.PT7)(),
                        {
                            sendNavigateSearchFeedback: E,
                            sendPlaySearchFeedback: L,
                        } = (0, f.zEv)(),
                        B = (0, f.NKK)(),
                        {
                            isPlaying: P,
                            isCurrent: I,
                            togglePlay: K,
                        } = (0, f.Dx4)({
                            playContextParams: {
                                contextData: {
                                    type: c.K.Artist,
                                    meta: { id: Number(r.id) },
                                    from: j,
                                },
                                loadContextMeta: !0,
                            },
                        }),
                        R = (0, v.SA)({ artist: r, callback: N }),
                        O = (0, v.SA)({ artist: r, callback: K }),
                        F = (0, d.c)((t) => {
                            null == E || E(),
                                B({ to: s.QT.ArtistScreen }),
                                R(t);
                        }),
                        z = (0, d.c)(() => {
                            S() ||
                                (T || P || (M(!0), null == L || L()),
                                O(),
                                w(!P));
                        }),
                        D = (0, d.c)((t) => {
                            (0, _.P)(t, p.$f.ripple), F(t);
                        }),
                        U = (0, d.c)((t) => {
                            t.stopPropagation(), F(t);
                        }),
                        H = (0, a.useCallback)(
                            (t) =>
                                (0, o.jsx)(p.q1, {
                                    isAvailable: r.isAvailable,
                                    isDisliked: !1,
                                    coverUri: r.coverUri,
                                    title: r.name,
                                    className: (0, i.$)(p.$f.playButtonCell, h),
                                    radius: "round",
                                    alt: C(
                                        { id: "entity-names.artist-name" },
                                        { artistName: r.name },
                                    ),
                                    ...t,
                                }),
                            [r, h, C],
                        ),
                        W =
                            null == H
                                ? void 0
                                : H({
                                      onPlayButtonClick: z,
                                      isPlaying: P,
                                      isCurrent: I,
                                      playButtonIconSize: x,
                                  }),
                        q = (0, a.useMemo)(
                            () =>
                                r.url && r.isAvailable
                                    ? (0, o.jsx)(p.N_, {
                                          className: (0, i.$)(
                                              p.$f.text,
                                              p.$f.titleLink,
                                          ),
                                          href: r.url,
                                          onClick: U,
                                          ...(0, u.Am)(
                                              u.Kq.artist
                                                  .SEARCH_ARTIST_CARD_TITLE_LINK,
                                          ),
                                          children: r.name,
                                      })
                                    : (0, o.jsx)(m.Caption, {
                                          className: (0, i.$)(
                                              p.$f.text,
                                              p.$f.titleText,
                                          ),
                                          size: "m",
                                          variant: "div",
                                          type: "text",
                                          children: r.name,
                                      }),
                            [r.isAvailable, r.name, r.url, U],
                        );
                    return (0, o.jsxs)(p.Cj, {
                        ref: y,
                        "data-intersection-property-id": k,
                        className: (0, i.$)(
                            p.$f.root,
                            { [p.$f.root_disabled]: !r.isAvailable },
                            e,
                        ),
                        "aria-label": r.name,
                        onClick: D,
                        ...(0, u.Am)(u.Kq.artist.HORIZONTAL_ARTIST_CARD),
                        children: [
                            W,
                            (0, o.jsx)(p.ro, {
                                isDisabled: !r.isAvailable,
                                isDisliked: !1,
                                likesCount: r.actualLikesCount,
                                isLiked: r.isLiked,
                                title: q,
                                description: g,
                            }),
                            (0, o.jsx)(b, {
                                className: p.$f.controlsBar,
                                artist: r,
                                likeIconSize: A,
                            }),
                        ],
                    });
                });
        },
        40258: (t, e, r) => {
            "use strict";
            r.d(e, { L: () => c });
            var o,
                i = r(93225),
                l = r(66268),
                a = {
                    6699: (t, e, r) => {
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.useDebouncedToggle = void 0);
                        let o = r(352),
                            i = r(810);
                        e.useDebouncedToggle = (t) => {
                            let {
                                    delay: e,
                                    initialState: r,
                                    throttleTimeout: l,
                                } = t,
                                a = (0, i.useRef)(null),
                                [n, s] = (0, i.useState)(!!r),
                                u = (0, i.useMemo)(
                                    () =>
                                        (0, o.throttle)(() => {
                                            s(!r),
                                                a.current &&
                                                    window.clearTimeout(
                                                        a.current,
                                                    ),
                                                (a.current = window.setTimeout(
                                                    () => {
                                                        s(!!r);
                                                    },
                                                    e,
                                                ));
                                        }, l),
                                    [e, r, l],
                                ),
                                c = (0, i.useCallback)(() => {
                                    s(!!r),
                                        a.current &&
                                            window.clearTimeout(a.current);
                                }, [r]);
                            return (
                                (0, i.useEffect)(
                                    () => () => {
                                        a.current &&
                                            window.clearTimeout(a.current);
                                    },
                                    [],
                                ),
                                { state: n, handleDebouncedToggle: u, reset: c }
                            );
                        };
                    },
                    361: (t, e) => {
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.getElementFromRefOrElement = void 0),
                            (e.getElementFromRefOrElement = (t) => {
                                if (void 0 !== t) {
                                    if (null === t || t instanceof HTMLElement)
                                        return t;
                                    if (
                                        null === t.current ||
                                        t.current instanceof HTMLElement
                                    )
                                        return t.current;
                                }
                            });
                    },
                    352: (t) => {
                        t.exports = i;
                    },
                    810: (t) => {
                        t.exports = o || (o = r.t(l, 2));
                    },
                },
                n = {};
            function s(t) {
                var e = n[t];
                if (void 0 !== e) return e.exports;
                var r = (n[t] = { exports: {} });
                return a[t](r, r.exports, s), r.exports;
            }
            var u = {};
            (() => {
                Object.defineProperty(u, "__esModule", { value: !0 }),
                    (u.useScroll = void 0);
                let t = s(810),
                    e = s(361),
                    r = s(6699);
                u.useScroll = (o) => {
                    let {
                            onScroll: i,
                            listenIsScrolling: l,
                            elementRef: a,
                        } = o,
                        { state: n, handleDebouncedToggle: s } = (0,
                        r.useDebouncedToggle)({
                            delay: 1e3,
                            throttleTimeout: 100,
                        }),
                        u = (0, t.useCallback)(() => {
                            l && s(), null == i || i();
                        }, [l, s, i]);
                    return (
                        (0, t.useEffect)(() => {
                            let t = (0, e.getElementFromRefOrElement)(a);
                            if (null === t) return;
                            let r = null != t ? t : window,
                                o = { capture: !0, passive: !0 };
                            return (
                                r.addEventListener("scroll", u, o),
                                () => r.removeEventListener("scroll", u, o)
                            );
                        }, [a, u]),
                        n
                    );
                };
            })(),
                u.__esModule;
            var c = u.useScroll;
        },
        49618: (t, e, r) => {
            "use strict";
            r.d(e, { K: () => c });
            var o,
                i = r(93225),
                l = r(66268),
                a = {
                    5881: (t, e, r) => {
                        function o() {
                            for (
                                var t, e, r = 0, o = "";
                                r < arguments.length;

                            )
                                (t = arguments[r++]) &&
                                    (e = (function t(e) {
                                        var r,
                                            o,
                                            i = "";
                                        if (
                                            "string" == typeof e ||
                                            "number" == typeof e
                                        )
                                            i += e;
                                        else if ("object" == typeof e)
                                            if (Array.isArray(e))
                                                for (r = 0; r < e.length; r++)
                                                    e[r] &&
                                                        (o = t(e[r])) &&
                                                        (i && (i += " "),
                                                        (i += o));
                                            else
                                                for (r in e)
                                                    e[r] &&
                                                        (i && (i += " "),
                                                        (i += r));
                                        return i;
                                    })(t)) &&
                                    (o && (o += " "), (o += e));
                            return o;
                        }
                        r.r(e), r.d(e, { clsx: () => o, default: () => i });
                        let i = o;
                    },
                    1920: (t, e, r) => {
                        r.r(e), r.d(e, { default: () => o });
                        let o = {
                            contentContainer: "JjlbHZ4FaP9EAcR_1DxF",
                            contentContainer_block: "iOlzvyUREgDkthkrx7Sf",
                            flexIcon: "WsKeF73pWotx9W1tWdYY",
                            root: "cpeagBA1_PblpJn8Xgtv",
                            root_withoutBorder: "qU2apWBO1yyEK0lZ3lPO",
                            root_radius_xs: "MmZbSs387gu2qrJ1lDWd",
                            root_radius_s: "mlcrraysn7mW6xrBXSBF",
                            root_radius_m: "dgV08FKVLZKFsucuiryn",
                            root_radius_l: "S97_5dtzhpxo_amtfYRg",
                            root_radius_xl: "nNBJnDHRlyLTniWosJhk",
                            root_radius_xxxl: "zIMibMuH7wcqUoW7KH1B",
                            root_radius_round: "uwk3hfWzB2VT7kE13SQk",
                            root_size: "IlG7b1K0AD7E7AMx6F5p",
                            root_size_default: "C_QGmfTz6UFX93vfPt6Z",
                            root_size_xxxs: "eQt33MLDiQ6DRSuLaYEp",
                            root_size_xxs: "oR11LfCBVqMbUJiAgknd",
                            root_size_xs: "j1jXIVckFgZECecFzZMe",
                            root_size_s: "WtFdWDF44egSVM_YiMUX",
                            root_size_m: "Y2uqxoU7xa_AZ8FUCVOW",
                            root_size_l: "SGYcNjvjmMsXeEVGUV2Z",
                            root_icon_left: "kc5CjvU5hT9KEj0iTt3C",
                            root_icon_right: "et24Jf7pT_X9Fvc7TznR",
                            root_primary: "fXlFz1qMkliFUWOkHo8T",
                            root_primary_default: "_eTRQi5ADZCUvUKMZqJU",
                            ripple: "spMT3NcRD9Yb0ntNaNct",
                            root_primary_outline: "fCUSh2B0Ye9kEvceE8zc",
                            root_primary_text: "qlPp6CSQQEMVZPqtqLiQ",
                            root_primary_withHover: "KZF6_4K1p_Y_GMIAxaAn",
                            root_primary_withHover_default:
                                "rWukOKAJh5Ga7JuIp62L",
                            root_primary_withHover_outline:
                                "fdwWCJKgUqml5wNqrRcN",
                            root_primary_withHover_text: "IgYbZLnYjW0nMahgpkus",
                            root_secondary: "_T4p_w41oaq6L4sztSdw",
                            root_secondary_default: "iJVAJMgccD4vj4E4o068",
                            root_secondary_outline: "pnM3iSP9keZOELI2oohr",
                            root_secondary_text: "UDMYhpDjiAFT3xUx268O",
                            root_secondary_withHover: "qUbrkhZIOVrvM0roV1QF",
                            root_secondary_withHover_default:
                                "nHWc2sto1C6Gm0Dpw_l0",
                            root_secondary_withHover_outline:
                                "i5WuBm5mfG0mflk_1jH_",
                            root_secondary_withHover_text:
                                "HbaqudSqu7Q3mv3zMPGr",
                            root_plus: "ixLRsIJ2FvXO2k04n_QY",
                            root_plus_default: "yRHwHzEGfDgRXGzYJqw2",
                            root_plus_outline: "e777irPFmyQFFrURLF_U",
                            root_plus_text: "vRqDhvmt3gt8TFp45_Zw",
                            root_plus_withHover: "TZif6q3I2RwBEYXwK_iA",
                            root_plus_withHover_default: "k3DhvmzpnM_Fb9oFdE4q",
                            root_plus_withHover_outline: "RiDWYwGIxqbrUPR699DM",
                            root_plus_withHover_text: "hC_mMCzWjkTn2j9xZzGc",
                            root_accent: "jqD2jMT6n7F0WKyqwMsn",
                            root_accent_default: "bDp0r9MtoYECZ8ObMoCh",
                            root_accent_outline: "rXNyGp8NBAw2MUjACZNj",
                            root_accent_text: "hmV4ERaXWAJc4uPLZL30",
                            root_accent_withHover: "uKuxXu1N4TP5cWaEK5Ke",
                            root_accent_withHover_default:
                                "t_hequUaUgAMhFuxizLb",
                            root_accent_withHover_outline:
                                "Oy9sPFTxNTo1_E29U4aF",
                            root_accent_withHover_text: "LcKRSd3DLoh7k60Oqox8",
                            root_withActiveSpinner: "nAGvO87rLs15SJgft6Hh",
                            block: "BbCxxIjBGupN28bq2lSP",
                            icon: "J9wTKytjOWG73QMoN5WP",
                            icon_position_left: "elJfazUBui03YWZgHCbW",
                            icon_position_right: "RBoEbyJKP5rEtLsXM1ji",
                            icon_withButtonSize: "cE17_kCWJgx8kzQEkeVr",
                            spinnerContainer: "STbBDGqYjUEcLuNvhu9w",
                        };
                    },
                    8903: (t, e, r) => {
                        r.r(e), r.d(e, { default: () => o });
                        let o = {
                            root: "BnN6sQIg6NahNBun6fkP",
                            fade: "MM8MKXCw0gMkVvq7C1YS",
                            fade_active: "MsLY_qiKofQrwKAr98EC",
                            button: "Dp6n_Y0cfUyPQT1Z6uIm",
                            text: "bfmUuyonXAK7HKYtDzUK",
                        };
                    },
                    7327: (t, e) => {
                        var r = Symbol.for("react.transitional.element");
                        function o(t, e, o) {
                            var i = null;
                            if (
                                (void 0 !== o && (i = "" + o),
                                void 0 !== e.key && (i = "" + e.key),
                                "key" in e)
                            )
                                for (var l in ((o = {}), e))
                                    "key" !== l && (o[l] = e[l]);
                            else o = e;
                            return {
                                $$typeof: r,
                                type: t,
                                key: i,
                                ref: void 0 !== (e = o.ref) ? e : null,
                                props: o,
                            };
                        }
                        (e.Fragment = Symbol.for("react.fragment")),
                            (e.jsx = o),
                            (e.jsxs = o);
                    },
                    1082: (t, e, r) => {
                        t.exports = r(7327);
                    },
                    4601: (t, e, r) => {
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.useToggle = void 0);
                        let o = r(810);
                        e.useToggle = (t) => {
                            let [e, r] = (0, o.useState)(t);
                            (0, o.useEffect)(() => {
                                r(t);
                            }, [t]);
                            let i = (0, o.useCallback)(() => {
                                    r((t) => !t);
                                }, []),
                                l = (0, o.useCallback)(() => {
                                    r(!0);
                                }, []),
                                a = (0, o.useCallback)(() => {
                                    r(!1);
                                }, []);
                            return {
                                state: e,
                                toggle: i,
                                setState: r,
                                toggleTrue: l,
                                toggleFalse: a,
                            };
                        };
                    },
                    666: (t, e, r) => {
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.useTruncate = void 0);
                        let o = r(352),
                            i = r(810),
                            l = r(4601);
                        e.useTruncate = (t) => {
                            let [e, r] = (0, i.useState)(0),
                                {
                                    state: a,
                                    toggleTrue: n,
                                    toggleFalse: s,
                                } = (0, l.useToggle)(!1),
                                u = (0, i.useMemo)(
                                    () =>
                                        (0, o.throttle)(() => {
                                            let {
                                                offsetHeight: r,
                                                scrollHeight: o,
                                            } =
                                                (null == t
                                                    ? void 0
                                                    : t.current) || {};
                                            r && o && e < o ? n() : s();
                                        }, 100),
                                    [e, t, s, n],
                                );
                            return (
                                (0, i.useEffect)(() => {
                                    var o, i;
                                    !e &&
                                        (null == (o = t.current)
                                            ? void 0
                                            : o.offsetHeight) &&
                                        r(
                                            null == (i = t.current)
                                                ? void 0
                                                : i.offsetHeight,
                                        );
                                }, [e, t]),
                                (0, i.useEffect)(
                                    () => (
                                        u(),
                                        window.addEventListener("resize", u),
                                        () => {
                                            window.removeEventListener(
                                                "resize",
                                                u,
                                            );
                                        }
                                    ),
                                    [u],
                                ),
                                { isTruncated: a }
                            );
                        };
                    },
                    8796: (t, e) => {
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.createRipple = void 0),
                            (e.createRipple = function (t, e, r) {
                                let o = null != r ? r : t.currentTarget,
                                    i = document.createElement("span"),
                                    l = Math.max(o.clientWidth, o.clientHeight),
                                    a = l / 2,
                                    n = o.getBoundingClientRect(),
                                    s =
                                        0 === t.clientX
                                            ? Math.round(n.width / 2)
                                            : t.clientX - n.left,
                                    u =
                                        0 === t.clientY
                                            ? Math.round(n.height / 2)
                                            : t.clientY - n.top;
                                (i.style.width = "".concat(l, "px")),
                                    (i.style.height = "".concat(l, "px")),
                                    (i.style.left =
                                        0 === t.clientX
                                            ? "0px"
                                            : "".concat(s - a, "px")),
                                    (i.style.top = "".concat(u - a, "px")),
                                    i.classList.add(e);
                                let c = o.getElementsByClassName(e)[0];
                                c && c.remove(),
                                    o.insertBefore(i, o.firstChild);
                            });
                    },
                    361: (t, e) => {
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.getElementFromRefOrElement = void 0),
                            (e.getElementFromRefOrElement = (t) => {
                                if (void 0 !== t) {
                                    if (null === t || t instanceof HTMLElement)
                                        return t;
                                    if (
                                        null === t.current ||
                                        t.current instanceof HTMLElement
                                    )
                                        return t.current;
                                }
                            });
                    },
                    8216: (t, e, r) => {
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.getElementFromRefOrElement = e.createRipple =
                                void 0);
                        var o = r(8796);
                        Object.defineProperty(e, "createRipple", {
                            enumerable: !0,
                            get: function () {
                                return o.createRipple;
                            },
                        });
                        var i = r(361);
                        Object.defineProperty(e, "getElementFromRefOrElement", {
                            enumerable: !0,
                            get: function () {
                                return i.getElementFromRefOrElement;
                            },
                        });
                    },
                    8119: function (t, e, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (t) {
                                return t && t.__esModule ? t : { default: t };
                            };
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.Button = void 0);
                        let i = r(1082),
                            l = r(810),
                            a = r(5881),
                            n = r(8216),
                            s = o(r(1920)),
                            u = (t) => {
                                let {
                                        forwardRef: e,
                                        isBlock: r,
                                        iconPosition: o = "left",
                                        children: u,
                                        className: c,
                                        color: d = "secondary",
                                        flexIcon: _,
                                        icon: m,
                                        spinner: v,
                                        role: f,
                                        onClick: p,
                                        radius: g = "m",
                                        size: h,
                                        type: x = "button",
                                        variant: b = "default",
                                        withRipple: A = !0,
                                        withHover: C = !0,
                                        withBorder: y = !1,
                                        disabled: k,
                                        iconClassName: j,
                                        contentContainerClassName: T,
                                        ...M
                                    } = t,
                                    N = (0, l.useId)(),
                                    w =
                                        !l.Children.toArray(u).filter(Boolean)
                                            .length,
                                    S = "left" === o,
                                    E = null,
                                    L = (0, l.isValidElement)(v);
                                if (m) {
                                    var B, P;
                                    E = (0, l.cloneElement)(m, {
                                        className: (0, a.clsx)(
                                            s.default.icon,
                                            {
                                                [s.default[
                                                    "icon_position_".concat(o)
                                                ]]: o && !w,
                                                [s.default.icon_withButtonSize]:
                                                    !(null == (B = m.props)
                                                        ? void 0
                                                        : B.size),
                                            },
                                            null == (P = m.props)
                                                ? void 0
                                                : P.className,
                                            j,
                                        ),
                                        key: N,
                                    });
                                }
                                let I = (0, l.useMemo)(
                                        () =>
                                            L
                                                ? (0, i.jsx)("div", {
                                                      className:
                                                          s.default
                                                              .spinnerContainer,
                                                      children: v,
                                                  })
                                                : null,
                                        [L, v],
                                    ),
                                    K = (0, l.useCallback)(
                                        (t) => {
                                            L ||
                                                (A &&
                                                    (0, n.createRipple)(
                                                        t,
                                                        s.default.ripple,
                                                    ),
                                                null == p || p(t));
                                        },
                                        [L, p, A],
                                    );
                                return (0, i.jsx)("button", {
                                    ref: e,
                                    className: (0, a.clsx)(
                                        s.default.root,
                                        s.default[
                                            "root_".concat(d, "_").concat(b)
                                        ],
                                        s.default["root_radius_".concat(g)],
                                        s.default.root_size,
                                        {
                                            [s.default[
                                                "root_"
                                                    .concat(d, "_withHover_")
                                                    .concat(b)
                                            ]]: C && !k && !L,
                                            [s.default["root_size_".concat(h)]]:
                                                h,
                                            [s.default.root_withoutBorder]: !y,
                                            [s.default.root_withActiveSpinner]:
                                                L,
                                            [s.default.block]: r,
                                            [s.default.flexIcon]: _,
                                            [s.default.iconOnly]: w,
                                            [s.default.root_icon_left]:
                                                m && !w && S,
                                            [s.default.root_icon_right]:
                                                m && !w && !S,
                                        },
                                        c,
                                    ),
                                    type: x,
                                    role: f,
                                    onClick: K,
                                    ...M,
                                    disabled: k,
                                    "aria-live": L ? "polite" : "off",
                                    "aria-busy": L,
                                    children:
                                        m || L
                                            ? (0, i.jsxs)("span", {
                                                  className: (0, a.clsx)(
                                                      s.default
                                                          .contentContainer,
                                                      {
                                                          [s.default
                                                              .contentContainer_block]:
                                                              r,
                                                      },
                                                      T,
                                                  ),
                                                  children: [
                                                      m && S && E,
                                                      !w && u,
                                                      m && !S && E,
                                                      I,
                                                  ],
                                              })
                                            : u,
                                });
                            };
                        e.Button = (0, l.forwardRef)((t, e) =>
                            (0, i.jsx)(u, { forwardRef: e, ...t }),
                        );
                    },
                    217: function (t, e, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (t) {
                                return t && t.__esModule ? t : { default: t };
                            };
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.CollapsableText = void 0);
                        let i = r(1082),
                            l = r(5881),
                            a = r(810),
                            n = r(666),
                            s = r(8119),
                            u = o(r(8903));
                        e.CollapsableText = (t) => {
                            var e;
                            let {
                                    className: r,
                                    children: o,
                                    lineClamp: c,
                                    moreText: d,
                                    lessText: _,
                                    buttonClassName: m,
                                    withFade: v,
                                    initialOpen: f = !1,
                                    open: p,
                                    onOpenChange: g,
                                    ...h
                                } = t,
                                [x, b] = (0, a.useState)(f),
                                A = (0, a.useRef)(null),
                                { isTruncated: C } = (0, n.useTruncate)(A),
                                y = null != p ? p : x,
                                k = null != g ? g : b,
                                j = (0, a.cloneElement)(o, {
                                    ref: A,
                                    lineClamp: (!y && c) || void 0,
                                    className: (0, l.clsx)(
                                        null == (e = o.props)
                                            ? void 0
                                            : e.className,
                                        u.default.text,
                                    ),
                                }),
                                T = (0, a.useMemo)(
                                    () =>
                                        v && C
                                            ? (0, i.jsx)("div", {
                                                  className: (0, l.clsx)(
                                                      u.default.fade,
                                                      {
                                                          [u.default
                                                              .fade_active]: !y,
                                                      },
                                                  ),
                                                  children: j,
                                              })
                                            : j,
                                    [C, y, j, v],
                                ),
                                M = (0, a.useCallback)(() => {
                                    k(!y);
                                }, [y, k]),
                                N = y ? _ : d;
                            return (0, i.jsxs)("div", {
                                className: (0, l.clsx)(u.default.root, r),
                                ...h,
                                children: [
                                    T,
                                    C &&
                                        N &&
                                        (0, i.jsx)(s.Button, {
                                            variant: "text",
                                            withRipple: !1,
                                            onClick: M,
                                            className: (0, l.clsx)(
                                                u.default.button,
                                                m,
                                            ),
                                            color: "primary",
                                            children: N,
                                        }),
                                ],
                            });
                        };
                    },
                    352: (t) => {
                        t.exports = i;
                    },
                    810: (t) => {
                        t.exports = o || (o = r.t(l, 2));
                    },
                },
                n = {};
            function s(t) {
                var e = n[t];
                if (void 0 !== e) return e.exports;
                var r = (n[t] = { exports: {} });
                return a[t].call(r.exports, r, r.exports, s), r.exports;
            }
            (s.d = (t, e) => {
                for (var r in e)
                    s.o(e, r) &&
                        !s.o(t, r) &&
                        Object.defineProperty(t, r, {
                            enumerable: !0,
                            get: e[r],
                        });
            }),
                (s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
                (s.r = (t) => {
                    "undefined" != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module",
                        }),
                        Object.defineProperty(t, "__esModule", { value: !0 });
                });
            var u = {};
            (() => {
                Object.defineProperty(u, "X", { value: !0 }), (u.f = void 0);
                var t = s(217);
                Object.defineProperty(u, "f", {
                    enumerable: !0,
                    get: function () {
                        return t.CollapsableText;
                    },
                });
            })();
            var c = u.f;
            u.X;
        },
        57639: (t, e, r) => {
            "use strict";
            r.d(e, { ArtistAboutModal: () => L });
            var o = r(33008),
                i = r(97531),
                l = r(66268),
                a = r(73827),
                n = r(42314),
                s = r(44189),
                u = r(78016),
                c = r(51704),
                d = r(79169),
                _ = r(18740),
                m = r(12658),
                v = r.n(m),
                f = r(45415),
                p = r(49618),
                g = r(77868),
                h = r(70879),
                x = r(96560),
                b = r(42213),
                A = r(52756),
                C = r(68040),
                y = r.n(C);
            let k = (0, i.PA)((t) => {
                let { covers: e } = t,
                    { formatMessage: r } = (0, a.A)(),
                    {
                        modals: { imageSliderModal: i, artistAboutModal: l },
                    } = (0, d.Pjs)(),
                    n = e.slice(0, 1),
                    u = e.length - 2 + 1,
                    c = (0, b.c)((t) => () => {
                        l.close(),
                            i.openImages({ images: e, initialSlideIndex: t });
                    });
                return (0, o.jsxs)("div", {
                    className: y().root,
                    children: [
                        n.map((t, e) =>
                            (0, o.jsx)(
                                s.Button,
                                {
                                    className: y().button,
                                    onClick: c(e),
                                    "aria-label": r({
                                        id: "slider.view-artist-covers",
                                    }),
                                    children: (0, o.jsx)(A.Image, {
                                        fit: "contain",
                                        className: y().image,
                                        src: t,
                                        size: 400,
                                        withAvatarReplace: !0,
                                    }),
                                },
                                e,
                            ),
                        ),
                        e[1] &&
                            (0, o.jsxs)(s.Button, {
                                className: y().button,
                                onClick: c(1),
                                "aria-label": r({
                                    id: "slider.view-artist-covers",
                                }),
                                children: [
                                    (0, o.jsx)(A.Image, {
                                        fit: "contain",
                                        className: y().image,
                                        src: e[1],
                                        size: 400,
                                        withAvatarReplace: !0,
                                    }),
                                    (0, o.jsx)("div", {
                                        className: y().moreCovers,
                                        children: (0, o.jsx)(g.Caption, {
                                            variant: "span",
                                            className: y().moreCoversText,
                                            size: "m",
                                            weight: "medium",
                                            children: (0, o.jsx)(x.A, {
                                                id: "slider.images-left-count",
                                                values: { imagesLeft: u },
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                    ],
                });
            });
            var j = r(84324),
                T = r.n(j);
            let M = (0, i.PA)(() => {
                var t, e, r, i, l, n, s;
                let { formatMessage: u } = (0, a.A)(),
                    {
                        modals: { artistAboutModal: c },
                    } = (0, d.Pjs)(),
                    { state: _, setState: m } = (0, f.e)(!1),
                    v = (0, h.eI)(c.artistType);
                return (0, o.jsxs)("div", {
                    className: T().root,
                    children: [
                        c.isResolved &&
                            (0, o.jsxs)("header", {
                                className: T().header,
                                children: [
                                    (0, o.jsx)(g.Caption, {
                                        variant: "div",
                                        type: "text",
                                        size: "m",
                                        weight: "medium",
                                        className: T().subtitle,
                                        children: v,
                                    }),
                                    (0, o.jsx)(g.Heading, {
                                        size: "xxl",
                                        variant: "div",
                                        className: T().title,
                                        children:
                                            null == (t = c.artist)
                                                ? void 0
                                                : t.name,
                                    }),
                                ],
                            }),
                        c.description &&
                            (0, o.jsx)(p.K, {
                                moreText: u({ id: "track-modal.read-more" }),
                                className: T().descriptionWrapper,
                                buttonClassName: T().readMoreButton,
                                open: _,
                                onOpenChange: m,
                                lineClamp: 7,
                                withFade: !0,
                                children: (0, o.jsx)(g.Caption, {
                                    variant: "div",
                                    className: T().description,
                                    size: "l",
                                    weight: "medium",
                                    children: c.description,
                                }),
                            }),
                        c.isArtistStatsAvailable &&
                            (0, o.jsx)(h.FO, {
                                lastMonthListeners:
                                    null != (n = c.lastMonthListeners) ? n : 0,
                                lastMonthListenersDelta:
                                    c.lastMonthListenersDelta,
                            }),
                        c.isResolved &&
                            (0, o.jsx)(h.lW, {
                                className: T().bandlinkScanner,
                                artistId:
                                    null == (e = c.artist) ? void 0 : e.id,
                                artistName:
                                    null == (r = c.artist) ? void 0 : r.name,
                            }),
                        c.links &&
                            (null == (i = c.links) ? void 0 : i.length) > 0 &&
                            (0, o.jsx)(h.KH, {
                                links: c.links,
                                artistName:
                                    null !=
                                    (s =
                                        null == (l = c.artist)
                                            ? void 0
                                            : l.name)
                                        ? s
                                        : "",
                            }),
                        c.covers &&
                            c.covers.length > 0 &&
                            (0, o.jsx)(k, { covers: c.covers }),
                    ],
                });
            });
            var N = r(91342),
                w = r(23236),
                S = r.n(w);
            let E = () =>
                    (0, o.jsxs)("div", {
                        className: S().root,
                        children: [
                            (0, o.jsx)(N.Shimmer, {
                                className: S().entityName,
                            }),
                            (0, o.jsx)(N.Shimmer, { className: S().title }),
                            (0, o.jsx)(_.q$, { count: 4 }),
                        ],
                    }),
                L = (0, i.PA)(() => {
                    let { formatMessage: t } = (0, a.A)(),
                        { notify: e } = (0, d.lkh)(),
                        { contentRef: r } = (0, d.gKY)(),
                        {
                            modals: { artistAboutModal: i },
                            settings: { isMobile: m },
                        } = (0, d.Pjs)();
                    (0, l.useEffect)(() => {
                        i.isRejected &&
                            (e(
                                (0, o.jsx)(_.hT, {
                                    error: t({
                                        id: "artist-errors.error-during-loading-artist-info",
                                    }),
                                }),
                                { containerId: d.uQT.ERROR },
                            ),
                            i.close());
                    }, [i, i.isRejected, t, e]);
                    let f = (0, n.L)(() =>
                        i.isLoading ? (0, o.jsx)(E, {}) : (0, o.jsx)(M, {}),
                    );
                    return (0, o.jsxs)(c.a, {
                        placement: m ? "default" : "right",
                        size: m ? "fullscreen" : "fitContent",
                        open: i.modal.isOpened,
                        onClose: i.close,
                        contentClassName: v().modalContent,
                        headerClassName: v().header,
                        className: v().root,
                        overlayClassName: v().overlay,
                        onOpenChange: i.onOpenChange,
                        labelClose: t({ id: "interface-actions.close" }),
                        portalNode: m ? null : r,
                        showHeader: !1,
                        children: [
                            (0, o.jsx)(s.Button, {
                                radius: "round",
                                color: "secondary",
                                size: "xxs",
                                icon: (0, o.jsx)(u.Icon, {
                                    variant: "close",
                                    size: "xxs",
                                }),
                                className: v().closeButton,
                                onClick: i.close,
                                "aria-label": t({
                                    id: "interface-actions.close",
                                }),
                            }),
                            f,
                        ],
                    });
                });
        },
        58386: (t) => {
            t.exports = {
                card_root: "HorizontalCardContainer_root__YoAAP",
                root: "ControlsBar_root__Cb_I5",
                item: "ControlsBar_item__Bgdoc",
                item_buttonArrow: "ControlsBar_item_buttonArrow__Hpg2f",
                controls: "ControlsBar_controls__JCmC_",
                likeIcon: "ControlsBar_likeIcon__LBoka",
                trailerIcon: "ControlsBar_trailerIcon__W0fPg",
                controls_disabled: "ControlsBar_controls_disabled__gLZiS",
            };
        },
        64143: (t, e, r) => {
            "use strict";
            r.d(e, { hO: () => _, jr: () => m, jp: () => v, QZ: () => i }),
                r(57323);
            var o = r(66268);
            let i = (t, e, r) => {
                let i = null != r && r;
                return {
                    topColorStyle: (0, o.useMemo)(() => {
                        if (void 0 === e) return;
                        let r = i ? 93 : 17,
                            o = e - r;
                        return {
                            "--average-color-background": t,
                            transform: "translateY(".concat(
                                e >= r ? 0 : o,
                                "px)",
                            ),
                            opacity: 1,
                        };
                    }, [e, i, t]),
                    headerStyle: (0, o.useMemo)(
                        () => ({ "--average-color-background": t }),
                        [t],
                    ),
                };
            };
            var l = r(33008),
                a = r(13201),
                n = r(97531),
                s = r(40258),
                u = r(79169),
                c = r(18740);
            let d = (t) => {
                    let { element: e, scrollTop: r, isMobile: o } = t,
                        i = 0.6 * e.clientHeight;
                    return r + (o ? 60 : 76) >= e.offsetTop + i;
                },
                _ = (0, n.PA)((t) => {
                    let {
                            children: e,
                            scrollElement: r,
                            outerTitle: i = "",
                            headerElement: n,
                            headerThreshold: _,
                            shouldHideHeader: m,
                        } = t,
                        [v, f] = (0, o.useState)(i),
                        [p, g] = (0, o.useState)(null),
                        [h, x] = (0, o.useState)(null),
                        [b, A] = (0, o.useState)(null),
                        [C, y] = (0, o.useState)(!1),
                        [k, j] = (0, o.useState)(!1),
                        [T, M] = (0, o.useState)(!1),
                        [N, w] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: S },
                        } = (0, u.Pjs)();
                    (0, o.useLayoutEffect)(() => {
                        f(i);
                    }, [i]);
                    let E = (0, o.useCallback)(() => {
                        let t = null != _ ? _ : 10,
                            e = n ? Number(n.offsetTop) - t : t;
                        e < 0 && (e = 0);
                        let o = (t) => {
                            M(t > e),
                                m && w(t > 30),
                                (null == p ? void 0 : p.current) &&
                                    y(
                                        d({
                                            element:
                                                null == p ? void 0 : p.current,
                                            scrollTop: t,
                                            isMobile: S,
                                        }),
                                    ),
                                (null == h ? void 0 : h.current) &&
                                    j(
                                        d({
                                            element:
                                                null == h ? void 0 : h.current,
                                            scrollTop: t,
                                            isMobile: S,
                                        }),
                                    );
                        };
                        S ? o(window.scrollY) : r && o(r.scrollTop);
                    }, [_, n, S, m, p, h, r]);
                    (0, o.useEffect)(() => {
                        S
                            ? 0 === window.scrollY && M(!1)
                            : (r && 0 !== r.scrollTop) || M(!1);
                    }, [r, null == r ? void 0 : r.scrollTop, S]);
                    let L = (0, o.useMemo)(
                        () =>
                            S
                                ? { onScroll: (0, a.A)(E, 200) }
                                : { onScroll: (0, a.A)(E, 200), elementRef: r },
                        [E, r, S],
                    );
                    (0, s.L)(L);
                    let B = (0, o.useMemo)(
                        () => ({
                            title: v,
                            setTitle: f,
                            titleElement: p,
                            scrollElement: S ? null : r,
                            setTitleElement: g,
                            childElement: h,
                            setChildElement: x,
                            child: b,
                            setChild: A,
                            isScrolledChild: k,
                            isScrolledTitle: C,
                            isScrolling: T,
                            isHeaderHidden: N,
                        }),
                        [v, C, p, r, T, S, b, h, k, N],
                    );
                    return (0, l.jsx)(c.B9.Provider, { value: B, children: e });
                }),
                m = (t) => {
                    let { children: e, child: r, className: i } = t,
                        { setChildElement: a, setChild: n } = (0, o.useContext)(
                            c.B9,
                        ),
                        s = (0, o.useRef)(null);
                    return (
                        (0, o.useEffect)(() => {
                            (null == s ? void 0 : s.current) && a(s), r && n(r);
                        }, [s, r, a, n]),
                        (0, o.useEffect)(
                            () => () => {
                                n(null);
                            },
                            [n],
                        ),
                        (0, l.jsx)("div", { ref: s, className: i, children: e })
                    );
                },
                v = (t) => {
                    let { children: e, title: r, className: i } = t,
                        { setTitleElement: a, setTitle: n } = (0, o.useContext)(
                            c.B9,
                        ),
                        s = (0, o.useRef)(null);
                    return (
                        (0, o.useEffect)(() => {
                            (null == s ? void 0 : s.current) && a(s), r && n(r);
                        }, [s, r, a, n]),
                        (0, o.useEffect)(
                            () => () => {
                                n("");
                            },
                            [n],
                        ),
                        (0, l.jsx)("div", { ref: s, className: i, children: e })
                    );
                };
        },
        64802: (t, e, r) => {
            "use strict";
            var o;
            r.d(e, { U: () => o }),
                (function (t) {
                    (t.UNKNOWN = "unknown"),
                        (t.MALE = "male"),
                        (t.FEMALE = "female");
                })(o || (o = {}));
        },
        68040: (t) => {
            t.exports = {
                root: "ArtistAboutModalImageSlider_root__L18Xb",
                button: "ArtistAboutModalImageSlider_button__GPXyc",
                image: "ArtistAboutModalImageSlider_image__3CTLr",
                moreCovers: "ArtistAboutModalImageSlider_moreCovers__7oDPM",
                moreCoversText:
                    "ArtistAboutModalImageSlider_moreCoversText__W_P8L",
            };
        },
        73670: (t) => {
            t.exports = {
                root: "ArtistCard_root__x67BK",
                controls: "ArtistCard_controls__jsqqI",
                cover: "ArtistCard_cover__29ShU",
                coverBlock: "ArtistCard_coverBlock__dBL4x",
                image: "ArtistCard_image__pONJx",
                titleLink: "ArtistCard_titleLink__G8Puz",
                playButton: "ArtistCard_playButton__XZoTr",
                likeButton: "ArtistCard_likeButton__LU9TL",
                menuButton: "ArtistCard_menuButton__EynXG",
                pinButton: "ArtistCard_pinButton__G_VOi",
                trailerButton: "ArtistCard_trailerButton__a2NHm",
                control: "ArtistCard_control___qv5j",
            };
        },
        75729: (t, e, r) => {
            "use strict";
            var o;
            r.d(e, { g: () => o }),
                (function (t) {
                    (t.RATING = "rating"), (t.YEAR = "year");
                })(o || (o = {}));
        },
        84324: (t) => {
            t.exports = {
                root: "ArtistAboutModalContent_root__XGW1F",
                header: "ArtistAboutModalContent_header__ws7Ap",
                title: "ArtistAboutModalContent_title__hMO2k",
                subtitle: "ArtistAboutModalContent_subtitle__OpssN",
                descriptionWrapper:
                    "ArtistAboutModalContent_descriptionWrapper__jNL4G",
                description: "ArtistAboutModalContent_description__KlWvL",
                readMoreButton: "ArtistAboutModalContent_readMoreButton__1ageU",
                bandlinkScanner:
                    "ArtistAboutModalContent_bandlinkScanner__Fwv2x",
            };
        },
        86804: (t, e, r) => {
            "use strict";
            r.d(e, { ArtistCard: () => y });
            var o = r(33008),
                i = r(85896),
                l = r(97531),
                a = r(66268),
                n = r(73827),
                s = r(93967),
                u = r(18064),
                c = r(48509),
                d = r(42213),
                _ = r(42314),
                m = r(69476),
                v = r(78016),
                f = r(54487),
                p = r(77868),
                g = r(70879),
                h = r(79169),
                x = r(18740),
                b = r(28882),
                A = r(73670),
                C = r.n(A);
            let y = (0, l.PA)((t) => {
                let {
                        artist: e,
                        className: r,
                        children: l,
                        contentLinesCount: A,
                        topTitleElement: y,
                        bottomTitleElement: k,
                    } = t,
                    { ref: j, intersectionPropertyId: T } = (0, h.nMI)(),
                    { trailer: M, user: N } = (0, h.Pjs)(),
                    { from: w, utmLink: S } = (0, h.fyy)({
                        contextId: e.id,
                        contextType: c.K.Artist,
                    }),
                    { formatMessage: E } = (0, n.A)(),
                    [L, B] = (0, a.useState)(!1),
                    [P, I] = (0, a.useState)(!1),
                    [K, R] = (0, a.useState)(!1),
                    {
                        sendLikeSearchFeedback: O,
                        sendNavigateSearchFeedback: F,
                        sendPlaySearchFeedback: z,
                    } = (0, h.zEv)(),
                    D = (0, h.NKK)(),
                    U = (0, h.brA)(),
                    H = (0, g.KX)(e),
                    W = (0, g.A7)(e),
                    { id: q, name: X, coverUri: G, isLiked: Y } = e,
                    J = (0, h.ZpR)(e.url),
                    [Z, Q] = (0, a.useState)(!1),
                    $ = (0, h.Ftl)(),
                    V = (0, h.PT7)(),
                    tt = (0, d.c)((t) => {
                        if ((t.stopPropagation(), V()))
                            return void t.preventDefault();
                        M.openArtistTrailer(e.id), $(s.ky.Artist, e.id);
                    }),
                    te = (0, a.useMemo)(() => {
                        let t = E(
                                { id: "entity-names.artist-name" },
                                { artistName: X },
                            ),
                            e = Y
                                ? E({ id: "entity-names.has-your-like" })
                                : "";
                        return "".concat(t, " ").concat(e);
                    }, [X, Y, E]),
                    { isPlaying: tr, togglePlay: to } = (0, h.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: c.K.Artist,
                                meta: { id: Number(q) },
                                from: w,
                                utmLink: S,
                            },
                            loadContextMeta: !0,
                        },
                    }),
                    ti = (0, g.SA)({ artist: e, callback: J }),
                    tl = (0, g.SA)({ artist: e, callback: to }),
                    ta = (0, d.c)((t) => {
                        null == F || F(), D({ to: s.QT.ArtistScreen }), ti(t);
                    }),
                    tn = (0, d.c)(() => {
                        V() ||
                            (L || tr || (B(!0), null == z || z()),
                            tl(),
                            U(!tr));
                    }),
                    ts = (0, d.c)(() => {
                        P || Y || (I(!0), null == O || O()), H();
                    }),
                    tu = (0, d.c)((t) => {
                        t.preventDefault(), t.stopPropagation();
                    }),
                    tc = (0, d.c)((t) => {
                        R(t), Q(t);
                    }),
                    td = (0, a.useMemo)(
                        () =>
                            (0, o.jsx)(
                                b.ArtistContextMenu,
                                {
                                    artist: e,
                                    onOpenChange: tc,
                                    open: K,
                                    onClick: tu,
                                    className: (0, i.$)(
                                        C().menuButton,
                                        C().control,
                                    ),
                                    size: "s",
                                    icon: (0, o.jsx)(v.Icon, {
                                        size: "xxs",
                                        variant: "more",
                                    }),
                                    ...(0, u.Am)(
                                        u.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                    ),
                                },
                                e.getKey("ArtistContextMenu"),
                            ),
                        [e, tu, tc, K],
                    ),
                    t_ = (0, a.useMemo)(() => {
                        var t;
                        if (
                            null == e || null == (t = e.trailer)
                                ? void 0
                                : t.isAvailable
                        )
                            return (0, o.jsx)(
                                x.nE,
                                {
                                    children: (0, o.jsx)(x.kJ, {
                                        className: (0, i.$)(
                                            C().trailerButton,
                                            C().control,
                                        ),
                                        radius: "round",
                                        size: "s",
                                        iconSize: "xxs",
                                        onClick: tt,
                                    }),
                                },
                                e.getKey("ArtistCardTrailerTooltip"),
                            );
                    }, [e, tt]),
                    tm = (0, a.useMemo)(
                        () =>
                            (0, o.jsx)(
                                x.O0,
                                {
                                    onClick: W,
                                    isPinned: e.isPinned,
                                    className: (0, i.$)(
                                        C().pinButton,
                                        C().control,
                                    ),
                                    withRipple: !1,
                                },
                                e.getKey("PinButton"),
                            ),
                        [e, W],
                    ),
                    tv = (0, _.L)(() => {
                        if (e.isAvailable)
                            return (0, o.jsx)(
                                m.hg,
                                {
                                    isVisible: K || Z,
                                    className: C().controls,
                                    radius: "round",
                                    playControl: (0, o.jsx)(
                                        x.DM,
                                        {
                                            buttonVariant: "default",
                                            withHover: !1,
                                            className: (0, i.$)(
                                                C().playButton,
                                                C().control,
                                            ),
                                            iconSize: "xl",
                                            variant: "filled",
                                            onClick: tn,
                                            isPlaying: tr,
                                            disabled: !e.isAvailableForPlaying,
                                        },
                                        e.getKey("PlayButton"),
                                    ),
                                    likeControl: (0, o.jsx)(
                                        x.cy,
                                        {
                                            className: (0, i.$)(
                                                C().likeButton,
                                                C().control,
                                            ),
                                            isLiked: Y,
                                            onClick: ts,
                                            variant: "default",
                                            size: "s",
                                            iconSize: "xxs",
                                            disabled: !N.isAuthorized,
                                        },
                                        e.getKey("LikeButton"),
                                    ),
                                    menuControl: td,
                                    pinControl: tm,
                                    trailerControl: t_,
                                },
                                e.getKey("ArtistCardControls"),
                            );
                    }),
                    tf = (0, a.useMemo)(
                        () =>
                            (0, o.jsx)(f.Paper, {
                                className: C().cover,
                                radius: "round",
                                withShadow: !0,
                                ...(0, u.Am)(u.Kq.artist.ARTIST_CARD),
                                children: (0, o.jsxs)("div", {
                                    className: C().coverBlock,
                                    onClick: ta,
                                    children: [
                                        (0, o.jsx)(x.BW, {
                                            className: C().image,
                                            src: G,
                                            size: 200,
                                            fit: "cover",
                                            alt: te,
                                            withAvatarReplace: !0,
                                            isAvailable: e.isAvailable,
                                            "aria-hidden": !0,
                                        }),
                                        tv,
                                    ],
                                }),
                            }),
                        [ta, G, te, e.isAvailable, tv],
                    );
                return (0, o.jsx)(m.MN, {
                    ref: j,
                    className: (0, i.$)(C().root, r),
                    textPosition: "center",
                    "aria-label": te,
                    title: (0, o.jsxs)(o.Fragment, {
                        children: [
                            y,
                            (0, o.jsx)(p.Caption, {
                                variant: "div",
                                type: "entity",
                                size: "s",
                                weight: "medium",
                                lineClamp: 2,
                                children: (0, o.jsx)(x.N_, {
                                    className: C().titleLink,
                                    href: e.url,
                                    "aria-label": te,
                                    onClick: ta,
                                    ...(0, u.Am)(u.Kq.artist.ARTIST_TITLE),
                                    children: X,
                                }),
                            }),
                            k,
                        ],
                    }),
                    srTitle: (0, o.jsx)(x.N_, {
                        href: e.url,
                        onClick: ta,
                        children: te,
                    }),
                    "data-intersection-property-id": T,
                    contentLinesCount: A,
                    view: tf,
                    ...(0, u.Am)(u.Kq.artist.ARTIST_ITEM),
                    children: l,
                });
            });
        },
        90317: (t, e, r) => {
            "use strict";
            r.d(e, {
                vx: () => c,
                r3: () => m,
                EV: () => v,
                y8: () => j.ArtistAboutModal,
                Xj: () => A,
                ao: () => T.ArtistCard,
                gg: () => M.ArtistContextMenu,
                G4: () => y,
                GV: () => k,
                eS: () => _,
                cz: () => N.HorizontalArtistCard,
                M$: () => d,
                xx: () => s,
                dg: () => u,
                LH: () => i,
                MX: () => n,
            });
            var o = r(41028);
            let i = (t) => (0, o.wg)({ title: t.title, url: t.action.weblink });
            var l = r(70879),
                a = r(16285);
            let n = (t) => {
                    let e = (0, l.as)({ artist: t.artist }),
                        r = (0, a.ws)(t.top);
                    return (0, o.wg)({
                        artist: e,
                        listenTimeSeconds: t.listenTimeSeconds,
                        top: r,
                    });
                },
                s = 5,
                u = 9,
                c = 9,
                d = 3,
                _ = 5,
                m = 20,
                v = 20;
            var f = r(17846),
                p = r(66268),
                g = r(75729),
                h = r(79169);
            (0, p.cache)(async function (t, e) {
                let r,
                    o =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {
                                  artistId: t,
                                  page: 0,
                                  pageSize: m,
                                  sort: { sortBy: g.g.YEAR },
                              };
                (0, h.LLJ)(t) || (0, f.notFound)();
                try {
                    let i,
                        {
                            container: l,
                            backendHostTld: a,
                            locale: n,
                            host: u,
                            fullUrl: c,
                            isRSC: d,
                            requestUrl: _,
                        } = await (0, h.IhE)();
                    if (d)
                        return {
                            artist: void 0,
                            albums: void 0,
                            backendHostTld: a,
                            locale: n,
                            host: u,
                            fullUrl: c,
                            requestUrl: _,
                        };
                    let m = l.get(h.O9U),
                        v = await m.getBriefInfo({
                            artistId: t,
                            popularTracksCount: s,
                            fetchPlaylistLikesCounts: !0,
                            discographyBlockEnabled: !0,
                            useClipDataFormat: !0,
                        });
                    switch (e) {
                        case h.hVl.COMPILATIONS:
                            i = await m.getAlsoAlbums(o);
                            break;
                        case h.hVl.DISCOGRAPHY:
                            i = await m.getDiscographyAlbums(o);
                            break;
                        default:
                            i = await m.getDirectAlbums(o);
                    }
                    r = {
                        artist: v,
                        albums: i,
                        backendHostTld: a,
                        locale: n,
                        host: u,
                        fullUrl: c,
                        requestUrl: _,
                    };
                } catch (t) {
                    return (0, h.tfF)(t, () => ({
                        artist: void 0,
                        albums: void 0,
                        ...(0, h.Bj3)(),
                    }));
                }
                let { artist: i } = r;
                return (
                    ((null == i ? void 0 : i.error) === "not-found" ||
                        (null == i ? void 0 : i.artist.error) ===
                            "not-found") &&
                        (0, f.notFound)(),
                    r
                );
            }),
                (0, p.cache)(async function (t) {
                    let e,
                        r =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : { artistId: t, page: 0, pageSize: v };
                    try {
                        let {
                            container: o,
                            backendHostTld: i,
                            locale: l,
                            host: a,
                            fullUrl: n,
                            isRSC: u,
                            requestUrl: c,
                        } = await (0, h.IhE)();
                        if (u)
                            return {
                                artist: void 0,
                                clips: void 0,
                                backendHostTld: i,
                                locale: l,
                                host: a,
                                fullUrl: n,
                                requestUrl: c,
                            };
                        let d = o.get(h.O9U),
                            _ = await d.getBriefInfo({
                                artistId: t,
                                popularTracksCount: s,
                                fetchPlaylistLikesCounts: !0,
                                discographyBlockEnabled: !0,
                                useClipDataFormat: !0,
                            }),
                            m = await d.getClips(r);
                        e = {
                            artist: _,
                            clips: m,
                            backendHostTld: i,
                            locale: l,
                            host: a,
                            fullUrl: n,
                            requestUrl: c,
                        };
                    } catch (t) {
                        return (0, h.tfF)(t, () => ({
                            artist: void 0,
                            clips: void 0,
                            ...(0, h.Bj3)(),
                        }));
                    }
                    let { artist: o } = e;
                    return (
                        ((null == o ? void 0 : o.error) === "not-found" ||
                            (null == o ? void 0 : o.artist.error) ===
                                "not-found") &&
                            (0, f.notFound)(),
                        e
                    );
                }),
                (0, p.cache)(async (t) => {
                    let e;
                    (0, h.LLJ)(t) || (0, f.notFound)();
                    try {
                        let {
                            container: r,
                            backendHostTld: o,
                            locale: i,
                            host: l,
                            fullUrl: a,
                            isRSC: n,
                            requestUrl: u,
                        } = await (0, h.IhE)();
                        if (n)
                            return {
                                artist: void 0,
                                backendHostTld: o,
                                locale: i,
                                host: l,
                                fullUrl: a,
                                requestUrl: u,
                            };
                        let c = r.get(h.O9U),
                            d = await c.getBriefInfo({
                                artistId: t,
                                popularTracksCount: s,
                                fetchPlaylistLikesCounts: !0,
                                discographyBlockEnabled: !0,
                                useClipDataFormat: !0,
                            }),
                            _ = await c.getConcerts({ artistId: t });
                        e = {
                            artist: d,
                            concerts: _,
                            backendHostTld: o,
                            locale: i,
                            host: l,
                            fullUrl: a,
                            requestUrl: u,
                        };
                    } catch (t) {
                        return (0, h.tfF)(t, () => ({
                            artist: void 0,
                            concerts: void 0,
                            ...(0, h.Bj3)(),
                        }));
                    }
                    let { artist: r } = e;
                    return (
                        ((null == r ? void 0 : r.error) === "not-found" ||
                            (null == r ? void 0 : r.artist.error) ===
                                "not-found") &&
                            (0, f.notFound)(),
                        e
                    );
                }),
                (0, p.cache)(async (t) => {
                    let e;
                    (0, h.LLJ)(t) || (0, f.notFound)();
                    try {
                        let {
                            container: r,
                            backendHostTld: o,
                            locale: i,
                            host: l,
                            fullUrl: a,
                            isRSC: n,
                            requestUrl: u,
                        } = await (0, h.IhE)();
                        if (n)
                            return {
                                artist: void 0,
                                familiar: void 0,
                                backendHostTld: o,
                                locale: i,
                                host: l,
                                fullUrl: a,
                                requestUrl: u,
                            };
                        let c = r.get(h.O9U),
                            d = await c.getBriefInfo({
                                artistId: t,
                                popularTracksCount: s,
                                fetchPlaylistLikesCounts: !0,
                                discographyBlockEnabled: !0,
                                useClipDataFormat: !0,
                            }),
                            _ = await c.getFamiliarYou({
                                artistId: t,
                                waveTracksLimit: 100,
                                collectionTracksLimit: 100,
                                collectionAlbumsLimit: 20,
                            });
                        e = {
                            artist: d,
                            familiar: _,
                            backendHostTld: o,
                            locale: i,
                            host: l,
                            fullUrl: a,
                            requestUrl: u,
                        };
                    } catch (t) {
                        return (0, h.tfF)(t, () => ({
                            artist: void 0,
                            familiar: void 0,
                            ...(0, h.Bj3)(),
                        }));
                    }
                    let { artist: r } = e;
                    return (
                        ((null == r ? void 0 : r.error) === "not-found" ||
                            (null == r ? void 0 : r.artist.error) ===
                                "not-found") &&
                            (0, f.notFound)(),
                        e
                    );
                }),
                (0, p.cache)(async (t) => {
                    let e;
                    (0, h.LLJ)(t) || (0, f.notFound)();
                    try {
                        let {
                            container: r,
                            backendHostTld: o,
                            locale: i,
                            host: l,
                            fullUrl: a,
                            isRSC: n,
                            requestUrl: u,
                        } = await (0, h.IhE)();
                        if (n)
                            return {
                                artist: void 0,
                                backendHostTld: o,
                                locale: i,
                                host: l,
                                fullUrl: a,
                                requestUrl: u,
                            };
                        let c = r.get(h.O9U);
                        e = {
                            artist: await c.getBriefInfo({
                                artistId: t,
                                popularTracksCount: s,
                                fetchPlaylistLikesCounts: !0,
                                discographyBlockEnabled: !0,
                                useClipDataFormat: !0,
                            }),
                            backendHostTld: o,
                            locale: i,
                            host: l,
                            fullUrl: a,
                            requestUrl: u,
                        };
                    } catch (t) {
                        return (0, h.tfF)(t, () => ({
                            artist: void 0,
                            ...(0, h.Bj3)(),
                        }));
                    }
                    let { artist: r } = e;
                    return (
                        ((null == r ? void 0 : r.error) === "not-found" ||
                            (null == r ? void 0 : r.artist.error) ===
                                "not-found") &&
                            (0, f.notFound)(),
                        e
                    );
                }),
                (0, p.cache)(async (t) => {
                    let e;
                    (0, h.LLJ)(t) || (0, f.notFound)();
                    try {
                        let {
                            container: r,
                            backendHostTld: o,
                            locale: i,
                            host: l,
                            fullUrl: a,
                            isRSC: n,
                            requestUrl: u,
                        } = await (0, h.IhE)();
                        if (n)
                            return {
                                artist: void 0,
                                similarArtists: void 0,
                                backendHostTld: o,
                                locale: i,
                                host: l,
                                fullUrl: a,
                                requestUrl: u,
                            };
                        let c = r.get(h.O9U),
                            d = await c.getBriefInfo({
                                artistId: t,
                                popularTracksCount: s,
                                fetchPlaylistLikesCounts: !0,
                                discographyBlockEnabled: !0,
                                useClipDataFormat: !0,
                            }),
                            _ = await c.getSimilarArtists({ artistId: t });
                        e = {
                            artist: d,
                            similarArtists: _,
                            backendHostTld: o,
                            locale: i,
                            host: l,
                            fullUrl: a,
                            requestUrl: u,
                        };
                    } catch (t) {
                        return (0, h.tfF)(t, () => ({
                            artist: void 0,
                            similarArtists: void 0,
                            ...(0, h.Bj3)(),
                        }));
                    }
                    let { artist: r } = e;
                    return (
                        ((null == r ? void 0 : r.error) === "not-found" ||
                            (null == r ? void 0 : r.artist.error) ===
                                "not-found") &&
                            (0, f.notFound)(),
                        e
                    );
                });
            var x = r(13023),
                b = r(59615);
            let A = o.gK
                    .compose(
                        o.gK.model("ArtistAboutModal", {
                            modal: b.qt,
                            artist: o.gK.maybeNull(l.PK),
                            artistType: o.gK.maybeNull(
                                o.gK.enumeration(Object.values(x.o)),
                            ),
                            description: o.gK.maybeNull(o.gK.string),
                            lastMonthListeners: o.gK.maybeNull(o.gK.number),
                            lastMonthListenersDelta: o.gK.optional(
                                o.gK.number,
                                0,
                            ),
                            covers: o.gK.maybeNull(o.gK.array(o.gK.string)),
                            links: o.gK.maybeNull(o.gK.array(l.dP)),
                        }),
                        b.XT,
                        b.pl,
                    )
                    .views((t) => ({
                        get isArtistStatsAvailable() {
                            return Number.isFinite(t.lastMonthListeners);
                        },
                    }))
                    .actions((t) => {
                        let e = {
                            open(r) {
                                r && (e.getData(r), t.modal.open());
                            },
                            getData: (0, o.L3)(function* (e) {
                                let {
                                    artistsResource: r,
                                    modelActionsLogger: i,
                                } = (0, o._$)(t);
                                if (!t.isLoading)
                                    try {
                                        var a, n, s, u, c;
                                        t.loadingState = h.GuX.PENDING;
                                        let i = yield r.getAboutArtist({
                                            artistId: e,
                                        });
                                        (t.artist = (0, l.as)({
                                            artist: i.artist,
                                        })),
                                            (t.description =
                                                null != (c = i.description)
                                                    ? c
                                                    : null),
                                            (t.artistType =
                                                i.artistType === x.o.COMPOSER
                                                    ? x.o.COMPOSER
                                                    : x.o.ARTIST),
                                            i.stats &&
                                                Number.isFinite(
                                                    null == (a = i.stats)
                                                        ? void 0
                                                        : a.lastMonthListeners,
                                                ) &&
                                                (t.lastMonthListeners =
                                                    i.stats.lastMonthListeners),
                                            i.stats &&
                                                Number.isFinite(
                                                    null == (n = i.stats)
                                                        ? void 0
                                                        : n.lastMonthListenersDelta,
                                                ) &&
                                                (t.lastMonthListenersDelta =
                                                    i.stats.lastMonthListenersDelta);
                                        let d =
                                            null == (s = i.covers)
                                                ? void 0
                                                : s
                                                      .map((t) => t.uri)
                                                      .filter((t) => !!t);
                                        d && (t.covers = (0, o.wg)(d)),
                                            (t.links = (0, o.wg)(
                                                null == (u = i.links)
                                                    ? void 0
                                                    : u.map(l.DZ),
                                            )),
                                            t.loadingState !== h.GuX.IDLE &&
                                                (t.loadingState =
                                                    h.GuX.RESOLVE);
                                    } catch (e) {
                                        i.error(e),
                                            t.loadingState !== h.GuX.IDLE &&
                                                (t.loadingState = h.GuX.REJECT);
                                    }
                            }),
                            close() {
                                t.modal.close(), e.reset();
                            },
                            onOpenChange(r) {
                                t.modal.onOpenChange(r), r || e.reset();
                            },
                            reset() {
                                (t.loadingState = h.GuX.IDLE),
                                    (t.description = null),
                                    (t.lastMonthListeners = null),
                                    (t.lastMonthListenersDelta = 0),
                                    (t.artistType = null),
                                    t.destroyItems([
                                        t.artist,
                                        t.covers,
                                        t.links,
                                    ]);
                            },
                        };
                        return e;
                    }),
                C = o.gK.model("ArtistBrandedButton", {
                    title: o.gK.maybeNull(o.gK.string),
                    url: o.gK.maybeNull(o.gK.string),
                }),
                y = o.gK
                    .model("ArtistMeta", {
                        artist: l.PK,
                        donationUrl: o.gK.maybe(o.gK.string),
                        lastMonthListeners: o.gK.maybe(o.gK.number),
                        brandedButton: o.gK.maybe(C),
                        covers: o.gK.maybeNull(o.gK.array(o.gK.string)),
                    })
                    .views((t) => ({
                        get hasCovers() {
                            var e;
                            return !!(null == (e = t.covers)
                                ? void 0
                                : e.length);
                        },
                    })),
                k = o.gK
                    .model("ArtistTop", {
                        artist: l.PK,
                        listenTimeSeconds: o.gK.number,
                        top: o.gK.maybe(a.Iz),
                    })
                    .views((t) => ({
                        get isAvailableForPlaying() {
                            if (void 0 === t.artist.counts) return !0;
                            return t.artist.counts.tracks > 0;
                        },
                    }))
                    .actions((t) => ({
                        getKey: (e) => "".concat(e, "_").concat(t.artist.id),
                    }));
            var j = r(57639),
                T = r(86804),
                M = r(28882),
                N = r(29517);
        },
    },
]);
