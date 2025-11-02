(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [508],
    {
        3413: (e) => {
            e.exports = {
                root: "PageHeaderPlaylist_root__yJBii",
                trailerControl: "PageHeaderPlaylist_trailerControl__grrD9",
                pinControl: "PageHeaderPlaylist_pinControl__hJOde",
                downloadControl: "PageHeaderPlaylist_downloadControl__ijcAx",
                menuControl: "PageHeaderPlaylist_menuControl__RGH0G",
                likeControl: "PageHeaderPlaylist_likeControl__bCypn",
                controls: "PageHeaderPlaylist_controls__uSwwK",
                mainControls: "PageHeaderPlaylist_mainControls__k_S_i",
                ugcControls: "PageHeaderPlaylist_ugcControls__9q8Ne",
            };
        },
        7465: (e) => {
            e.exports = {
                controlsContainer: "CommonPageHeader_controlsContainer__4_h22",
                controls: "CommonPageHeader_controls__c27E_",
                playControl: "CommonPageHeader_playControl__gYOuR",
            };
        },
        13748: (e) => {
            e.exports = {
                root: "PageHeaderTextField_root__Aq9UL",
                root_textarea: "PageHeaderTextField_root_textarea__OgDzd",
            };
        },
        18506: (e) => {
            e.exports = {
                cancelIcon: "DownloadButton_cancelIcon__MR36M",
                root_downloading: "DownloadButton_root_downloading__H8Eh7",
                root: "DownloadButton_root__AU5eq",
                downloadingProgress:
                    "DownloadButton_downloadingProgress__eenjt",
                progress: "DownloadButton_progress__MM72T",
                progressText: "DownloadButton_progressText__aQ12B",
                downloadedIcon: "DownloadButton_downloadedIcon__tETl2",
            };
        },
        22344: (e) => {
            e.exports = {
                root: "PageHeaderPlaylistMeta_root__9SHZ0",
                description: "PageHeaderPlaylistMeta_description__edoVx",
                descriptionButton:
                    "PageHeaderPlaylistMeta_descriptionButton__Jkbg9",
                descriptionLink:
                    "PageHeaderPlaylistMeta_descriptionLink__OcY5m",
                updatedText: "PageHeaderPlaylistMeta_updatedText__FSo_0",
                descriptionActionLink:
                    "PageHeaderPlaylistMeta_descriptionActionLink__aGgtK",
                addDescription: "PageHeaderPlaylistMeta_addDescription__bFw2Y",
                textField: "PageHeaderPlaylistMeta_textField__J5QMd",
                actionButtons: "PageHeaderPlaylistMeta_actionButtons__EYX8Z",
                saveButton: "PageHeaderPlaylistMeta_saveButton__rZbPS",
                cancelButton: "PageHeaderPlaylistMeta_cancelButton__Qc5lG",
            };
        },
        22884: (e, t, a) => {
            "use strict";
            a.d(t, { m: () => i });
            let i = (e) =>
                "object" == typeof e &&
                null !== e &&
                !Array.isArray(e) &&
                "source" in e &&
                "adfox" === e.source &&
                "type" in e &&
                "payload" in e;
        },
        25786: (e) => {
            e.exports = {
                menuControl: "PageHeaderAlbumControls_menuControl__wlqyr",
                likeControl: "PageHeaderAlbumControls_likeControl__eohAO",
                pinOrDonationControl:
                    "PageHeaderAlbumControls_pinOrDonationControl__3aFUW",
                trailerControl: "PageHeaderAlbumControls_trailerControl___HcW0",
            };
        },
        28735: (e) => {
            e.exports = {
                plusPaywallButton: "PageHeaderAlbum_plusPaywallButton__yJWCh",
                booksLogo: "PageHeaderAlbum_booksLogo__f4gjV",
            };
        },
        30236: (e, t, a) => {
            "use strict";
            a.d(t, { SomethingWentWrong: () => x });
            var i = a(33008),
                r = a(85896),
                o = a(97531),
                l = a(66268),
                n = a(73827),
                s = a(96560),
                d = a(44189),
                c = a(78016),
                u = a(77868),
                _ = a(79169),
                m = a(18740),
                p = a(32468),
                v = a.n(p);
            let x = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: o } = (0, n.A)(),
                    p = o({ id: "error-messages.something-went-wrong" });
                (0, _.CgZ)(p);
                let { sendRefreshEvent: x } = (0, _.cYT)(),
                    g = (0, l.useCallback)(() => {
                        x(), (window.location.href = _.Zyd.main.href);
                    }, [x]),
                    { contentRef: h } = (0, _.gKY)();
                return (0, i.jsxs)("div", {
                    className: (0, r.$)(v().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(m.Lh, {
                                withBackwardFallback: "/",
                                className: (0, r.$)(v().navigation, {
                                    [v().navigation_desktop]: !h,
                                }),
                                withForwardControl: !1,
                            }),
                        (0, i.jsxs)("div", {
                            className: (0, r.$)(v().content, {
                                [v().content_shrink]: !a,
                            }),
                            children: [
                                (0, i.jsx)(c.Icon, {
                                    className: v().icon,
                                    variant: "attention",
                                    size: "xxl",
                                }),
                                (0, i.jsx)(u.Heading, {
                                    className: (0, r.$)(
                                        v().title,
                                        v().important,
                                    ),
                                    variant: "h3",
                                    size: "xs",
                                    children: p,
                                }),
                                (0, i.jsxs)(u.Caption, {
                                    className: (0, r.$)(
                                        v().text,
                                        v().important,
                                    ),
                                    variant: "span",
                                    type: "text",
                                    size: "l",
                                    weight: "normal",
                                    children: [
                                        !1,
                                        (0, i.jsx)(s.A, {
                                            id: "page-error.try-to-restart-app",
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(d.Button, {
                                    onClick: g,
                                    className: v().button,
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
                                            (0, i.jsx)(s.A, {
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
        33492: (e, t, a) => {
            "use strict";
            a.d(t, { Zr: () => x, Ab: () => s, te: () => f, hc: () => o });
            var i = a(66268);
            let r = (0, i.createContext)({ data: null, isEnabled: !1 }),
                o = () => (0, i.useContext)(r);
            var l = a(41028),
                n = a(79169);
            let s = a(59615)
                .JE.extend((e) => ({
                    views: {
                        get isVisible() {
                            let {
                                experiments: t,
                                settings: a,
                                user: i,
                            } = (0, l.Zn)(e);
                            if (!e.noAds && !e.hasError) return !a.isMobile;
                            if (
                                e.noAds ||
                                e.hasError ||
                                t.checkExperiment(n.zal.WebNextDisableAds, "on")
                            )
                                return !1;
                            return !i.hasPlus && !a.isMobile;
                        },
                    },
                }))
                .named("BrandedPlaylistBanner");
            var d = a(33008),
                c = a(97531),
                u = a(73827),
                _ = a(42213),
                m = a(18740);
            let p = {
                    pp: "g",
                    ps: "clni",
                    p2: "jjwl",
                    puid1: "",
                    puid2: "",
                    puid3: "",
                },
                v = {
                    pp: "g",
                    ps: "clni",
                    p2: "jjzh",
                    puid1: "",
                    puid2: "",
                    puid3: "",
                },
                x = (0, c.PA)((e) => {
                    let {
                            className: t,
                            creativeClassName: a,
                            gradientClassName: r,
                        } = e,
                        {
                            advertBanners: {
                                banners: { brandedPlaylistBanner: o },
                            },
                        } = (0, n.Pjs)(),
                        { formatMessage: l } = (0, u.A)(),
                        s = (0, _.c)(() => {
                            o.setType(n.h8o.BRANDING);
                        });
                    return (
                        (0, i.useEffect)(
                            () => () => {
                                o.reset();
                            },
                            [o],
                        ),
                        (0, d.jsxs)("div", {
                            className: t,
                            "aria-label": l({ id: "advert.banner" }),
                            role: "banner",
                            children: [
                                (0, d.jsx)(m.NX, {
                                    className: r,
                                    ownerId: n.PVv,
                                    containerId: "adfox_173998931315812570",
                                    params: p,
                                    onLoad: s,
                                    onError: o.toggleHasErrorTrue,
                                    onNoAds: o.toggleNoAdsTrue,
                                }),
                                (0, d.jsx)(m.NX, {
                                    className: a,
                                    ownerId: n.PVv,
                                    containerId: "adfox_174043316511852570",
                                    params: v,
                                    onLoad: s,
                                    onError: o.toggleHasErrorTrue,
                                    onNoAds: o.toggleNoAdsTrue,
                                }),
                            ],
                        })
                    );
                });
            var g = a(22884),
                h = (function (e) {
                    return (e.GRADIENT = "branded_playlist_gradient"), e;
                })({});
            let f = (0, c.PA)((e) => {
                let { children: t } = e,
                    {
                        advertBanners: {
                            banners: { brandedPlaylistBanner: a },
                        },
                    } = (0, n.Pjs)(),
                    [o, l] = (0, i.useState)(null),
                    s = (e) => {
                        ((e) =>
                            (0, g.m)(e) &&
                            e.type === h.GRADIENT &&
                            "object" == typeof e.payload &&
                            null !== e.payload &&
                            !Array.isArray(e.payload) &&
                            "color" in e.payload)(e.data) && l(e.data);
                    };
                (0, i.useEffect)(
                    () => (
                        window.addEventListener("message", s),
                        () => {
                            window.removeEventListener("message", s);
                        }
                    ),
                    [],
                );
                let c = (0, i.useMemo)(() => {
                        if ((null == o ? void 0 : o.payload.color) === void 0)
                            return {};
                        let e = {
                            "--playlist-branding-gradient-color-from":
                                o.payload.color,
                            "--playlist-branding-gradient-color-to":
                                "transparent",
                        };
                        return null === o.payload.button
                            ? e
                            : {
                                  ...e,
                                  "--playlist-branding-button-background-color":
                                      o.payload.button.backgroundColor,
                                  "--playlist-branding-button-text-color":
                                      o.payload.button.textColor,
                              };
                    }, [
                        null == o ? void 0 : o.payload.color,
                        null == o ? void 0 : o.payload.button,
                    ]),
                    u = (0, i.useMemo)(() => {
                        let e = a.isVisible && null !== o;
                        return e
                            ? {
                                  data: {
                                      type: o.type,
                                      style: c,
                                      button: o.payload.button,
                                  },
                                  isEnabled: a.isVisible,
                              }
                            : { data: null, isEnabled: e };
                    }, [o, c, a.isVisible]);
                return (0, d.jsx)(r.Provider, { value: u, children: t });
            });
        },
        33586: (e) => {
            e.exports = {
                meta: "PageHeaderAlbumMeta_meta__zsMI8",
                artistCover: "PageHeaderAlbumMeta_artistCover__L3jJ0",
                artistLabel: "PageHeaderAlbumMeta_artistLabel__2WZSM",
                year: "PageHeaderAlbumMeta_year__2X3NO",
                artists: "PageHeaderAlbumMeta_artists__Nfdob",
                artistsSpoiler: "PageHeaderAlbumMeta_artistsSpoiler__VOkfE",
                artistLink: "PageHeaderAlbumMeta_artistLink__eTSrZ",
                year_dot: "PageHeaderAlbumMeta_year_dot__TrSFr",
            };
        },
        34268: (e) => {
            e.exports = {
                root: "PageHeaderBase_root__xMIBu",
                root_withCover: "PageHeaderBase_root_withCover__JIKxy",
                root_withCoverAndLogo:
                    "PageHeaderBase_root_withCoverAndLogo__nsTU2",
                logo: "PageHeaderBase_logo__pD3fg",
                coverCell: "PageHeaderBase_coverCell__nBx4c",
                content: "PageHeaderBase_content___DNyv",
                info: "PageHeaderBase_info__GRcah",
                entityContainer: "PageHeaderBase_entityContainer__BDwxT",
                title_withDisclaimerLabel:
                    "PageHeaderBase_title_withDisclaimerLabel__Apuhc",
                entityName: "PageHeaderBase_entityName__9Sj_Q",
                disclaimerLabel: "PageHeaderBase_disclaimerLabel___2wo6",
                meta: "PageHeaderBase_meta__bMvfR",
                meta_withDisclaimerLabel:
                    "PageHeaderBase_meta_withDisclaimerLabel__nxckS",
                controls: "PageHeaderBase_controls__HzGgE",
            };
        },
        36023: (e) => {
            e.exports = {
                root: "PageHeaderConcert_root__zghAY",
                coverCell: "PageHeaderConcert_coverCell__0ppUT",
                cover: "PageHeaderConcert_cover__mJ4ml",
                controls: "PageHeaderConcert_controls__7Ggou",
                button: "PageHeaderConcert_button__zLikp",
                meta: "PageHeaderConcert_meta__5G1EX",
                cashbackBadge: "PageHeaderConcert_cashbackBadge__HL7QW",
                info: "PageHeaderConcert_info__wct3b",
                title: "PageHeaderConcert_title__MoRyD",
                coverButton: "PageHeaderConcert_coverButton__r79DU",
                important: "PageHeaderConcert_important__rx2pp",
                bottomContent: "PageHeaderConcert_bottomContent__d5YKQ",
                overview: "PageHeaderConcert_overview__vbGCy",
                overviewButton: "PageHeaderConcert_overviewButton__sXecu",
                overviewMessage: "PageHeaderConcert_overviewMessage__q95AL",
                overviewMessageModal:
                    "PageHeaderConcert_overviewMessageModal__OlUO6",
                overviewModal: "PageHeaderConcert_overviewModal__6Ubd0",
            };
        },
        37488: (e) => {
            e.exports = { root: "PageHeaderPlaylistBrandingLink_root__7dQVL" };
        },
        38884: (e) => {
            e.exports = {
                button: "PageHeaderPlaylistUgcUploadButton_button__mWtCr",
                form: "PageHeaderPlaylistUgcUploadButton_form__V64Yu",
            };
        },
        43507: (e) => {
            e.exports = {
                root: "PageHeaderArtist_root__QhL_a",
                playControl: "PageHeaderArtist_playControl__N_3l_",
                trailerControl: "PageHeaderArtist_trailerControl__BWQXJ",
                likeControl: "PageHeaderArtist_likeControl__oEdXe",
                menuControl: "PageHeaderArtist_menuControl__8qi0J",
                pinControl: "PageHeaderArtist_pinControl__dQToz",
                donateControl: "PageHeaderArtist_donateControl__EX63H",
                controls: "PageHeaderArtist_controls__U_6g7",
                main: "PageHeaderArtist_main__VNnip",
                brandedControl: "PageHeaderArtist_brandedControl__b6qhV",
                meta: "PageHeaderArtist_meta__ZAlx_",
                label: "PageHeaderArtist_label__rXyrB",
                donationButtonTooltip:
                    "PageHeaderArtist_donationButtonTooltip__G7XtX",
                tooltipText: "PageHeaderArtist_tooltipText__aYfaU",
                closeTooltip: "PageHeaderArtist_closeTooltip__z2w_O",
            };
        },
        56616: (e) => {
            e.exports = {
                root: "PageHeaderPlaylistCover_root__Vdn75",
                coverButton: "PageHeaderPlaylistCover_coverButton__dw0rj",
                root_hoverable: "PageHeaderPlaylistCover_root_hoverable__ZeqpX",
                coverImage: "PageHeaderPlaylistCover_coverImage__OC58K",
                backCoverColor: "PageHeaderPlaylistCover_backCoverColor__7z3dk",
                button: "PageHeaderPlaylistCover_button__vCYgD",
                fileUploadContainer:
                    "PageHeaderPlaylistCover_fileUploadContainer___JnqP",
                fileUploadContainer_hovered:
                    "PageHeaderPlaylistCover_fileUploadContainer_hovered__RtD_X",
                buttonContainer:
                    "PageHeaderPlaylistCover_buttonContainer__OkEaT",
                buttonContainer_withCursorPointer:
                    "PageHeaderPlaylistCover_buttonContainer_withCursorPointer__pnzha",
                formFile: "PageHeaderPlaylistCover_formFile__1xnry",
            };
        },
        57793: (e) => {
            e.exports = {
                meta: "PageHeaderNonMusic_meta__9DQPy",
                infoNote: "PageHeaderNonMusic_infoNote__7xbV5",
                infoNoteIcon: "PageHeaderNonMusic_infoNoteIcon__VDK7_",
                infoNoteText: "PageHeaderNonMusic_infoNoteText__DCQq8",
                plusPaywallButton:
                    "PageHeaderNonMusic_plusPaywallButton__O7Tx_",
                booksLogo: "PageHeaderNonMusic_booksLogo__4_TgU",
                controlsBlock: "PageHeaderNonMusic_controlsBlock__jta99",
                plusLinkBlock: "PageHeaderNonMusic_plusLinkBlock__8R1OK",
                plusLinkContainer:
                    "PageHeaderNonMusic_plusLinkContainer__guWlu",
                plusLink: "PageHeaderNonMusic_plusLink__6dU1b",
                divider: "PageHeaderNonMusic_divider__F_sbf",
            };
        },
        59188: (e) => {
            e.exports = {
                root_hoverable: "PageHeaderCover_root_hoverable__WF_BH",
                coverImage: "PageHeaderCover_coverImage__i0wBv",
                coverImage_hoverable:
                    "PageHeaderCover_coverImage_hoverable__9XZK7",
                coverButton: "PageHeaderCover_coverButton__3zeub",
                coverButton_hoverable:
                    "PageHeaderCover_coverButton_hoverable__hS1Gq",
                plusBadge: "PageHeaderCover_plusBadge__O09t4",
            };
        },
        60293: (e, t, a) => {
            "use strict";
            a.d(t, { O: () => s, D: () => _ });
            var i = a(33008),
                r = a(85896),
                o = a(77868),
                l = a(78683),
                n = a.n(l);
            let s = (e) => {
                let {
                    title: t,
                    className: a,
                    titleClassName: l,
                    infoDescription: s,
                } = e;
                return (0, i.jsxs)("div", {
                    className: (0, r.$)(n().root, a),
                    children: [
                        t &&
                            (0, i.jsx)(o.Heading, {
                                variant: "h4",
                                className: (0, r.$)(n().infoTitle, l),
                                children: t,
                            }),
                        s,
                    ],
                });
            };
            var d = a(97531),
                c = a(79169),
                u = a(18740);
            let _ = (0, d.PA)((e) => {
                let { children: t, href: a, className: r } = e,
                    {
                        currentTrackInfo: { modal: l },
                    } = (0, c.Pjs)();
                return a
                    ? (0, i.jsx)(u.N_, {
                          className: n().link,
                          href: a,
                          onClick: l.close,
                          children: (0, i.jsx)(o.Caption, {
                              className: r,
                              variant: "div",
                              size: "l",
                              children: t,
                          }),
                      })
                    : (0, i.jsx)(o.Caption, {
                          className: r,
                          variant: "div",
                          size: "l",
                          children: t,
                      });
            });
        },
        74837: (e, t, a) => {
            "use strict";
            a.d(t, {
                c0: () => el,
                qi: () => ef,
                kE: () => I,
                Dc: () => ew,
                hW: () => eE,
                Jq: () => to,
                c6: () => D,
                RR: () => H,
                e4: () => tc,
                q: () => i,
            });
            let i = (e) => ({
                controlSize: e ? "l" : "s",
                iconSize: e ? "m" : "xxs",
            });
            var r = a(33008),
                o = a(85896),
                l = a(97531),
                n = a(66268),
                s = a.t(n, 2),
                d = a(18064),
                c = {
                    5881: (e, t, a) => {
                        function i() {
                            for (
                                var e, t, a = 0, i = "";
                                a < arguments.length;

                            )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            r = "";
                                        if (
                                            "string" == typeof t ||
                                            "number" == typeof t
                                        )
                                            r += t;
                                        else if ("object" == typeof t)
                                            if (Array.isArray(t))
                                                for (a = 0; a < t.length; a++)
                                                    t[a] &&
                                                        (i = e(t[a])) &&
                                                        (r && (r += " "),
                                                        (r += i));
                                            else
                                                for (a in t)
                                                    t[a] &&
                                                        (r && (r += " "),
                                                        (r += a));
                                        return r;
                                    })(e)) &&
                                    (i && (i += " "), (i += t));
                            return i;
                        }
                        a.r(t), a.d(t, { clsx: () => i, default: () => r });
                        let r = i;
                    },
                    9474: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = { root: "LizdJ2L0HW7JWOvPrfly" };
                    },
                    3641: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root_controls_xxs: "tRaaBpDMg9Qu8v6gKjtn",
                            root_entity_xxs: "M9zvtlcpLUVn6DKdcHhj",
                            root_text_xxs: "ln0PYYwDmFnfYxCDJsFU",
                            root_controls_xs: "n5AeWEsJC3_AYXcbK4Lt",
                            root_entity_xs: "__hrMKGmNbw54T54IUyh",
                            root_text_xs: "SehSa7OyRpC2nzYTVb2Q",
                            root_controls_s: "_oBLf5gprWsKjCw4Ce58",
                            root_entity_s: "mxSPe5xpZnie9gpIqacd",
                            root_text_s: "Ai2iRN9elHpk_u5splD6",
                            root_controls_m: "tk7ahHRDYXJMMB879KUA",
                            root_entity_m: "Z_WIr2W8JU4MPQek3hgR",
                            root_text_m: "g3qWNP6xl__7qxNmtrvd",
                            root_controls_l: "grvxapJE3vGArOKDWf6n",
                            root_entity_l: "Esj5A1UeSi4xV4tZ839D",
                            root_text_l: "V3WU123oO65AxsprotU9",
                            root_weight_normal: "ZYV27jeWd30QDXu4GhaH",
                            root_weight_medium: "_3_Mxw7Si7j2g4kWjlpR",
                            root_weight_bold: "Vi7Rd0SZWqD17F0872TB",
                        };
                    },
                    5153: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root_size_xs: "qJJ288377iHlWN_RXeEE",
                            root_size_s: "_sd8Q9d_Ttn0Ufe4ISWS",
                            root_size_m: "Ctk8dbecq31Qh7isOJPQ",
                            root_size_l: "M_Djh6ppIkCO3A2k_BTA",
                            root_size_xl: "dtxlzGQMPAbM2MEndXWX",
                            root_size_xxl: "IUb9XLplTAoZqne9rNUL",
                            root_size_xxxl: "ZYZamUwql_rfFR4RpI2B",
                            root_size_xxxxl: "ZBZyxow5njdq8z5dnRPY",
                            root_size_xxxxxl: "WdvQQNwdDNCdRSwRkAtT",
                            root_weight_bold: "nSU6fV9y80WrZEfafvww",
                            root_weight_black: "KBeGPPK4DinQzAP41Y_N",
                        };
                    },
                    5818: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root: "_MWOVuZRvUQdXKTMcOPx",
                            root_clamp: "LezmJlldtbHWqU7l1950",
                            root_clamp_oneline: "oyQL2RSmoNbNQf3Vc6YI",
                            root_clamp_multiline: "jMyoZB5J9iZbzJmWOrF0",
                        };
                    },
                    7327: (e, t) => {
                        var a = Symbol.for("react.transitional.element");
                        function i(e, t, i) {
                            var r = null;
                            if (
                                (void 0 !== i && (r = "" + i),
                                void 0 !== t.key && (r = "" + t.key),
                                "key" in t)
                            )
                                for (var o in ((i = {}), t))
                                    "key" !== o && (i[o] = t[o]);
                            else i = t;
                            return {
                                $$typeof: a,
                                type: e,
                                key: r,
                                ref: void 0 !== (t = i.ref) ? t : null,
                                props: i,
                            };
                        }
                        (t.Fragment = Symbol.for("react.fragment")),
                            (t.jsx = i),
                            (t.jsxs = i);
                    },
                    1082: (e, t, a) => {
                        e.exports = a(7327);
                    },
                    2: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.Label = void 0);
                        let r = a(1082),
                            o = a(5881),
                            l = a(2582),
                            n = i(a(9474));
                        t.Label = (e) => {
                            let {
                                children: t,
                                className: a,
                                size: i = "s",
                                ...s
                            } = e;
                            return (0, r.jsx)(l.Caption, {
                                variant: "div",
                                type: "text",
                                size: i,
                                lineClamp: 1,
                                className: (0, o.clsx)(n.default.root, a),
                                ...s,
                                children: t,
                            });
                        };
                    },
                    7743: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.Caption = t.CaptionComponent = void 0);
                        let r = a(1082),
                            o = a(5881),
                            l = a(810),
                            n = a(4721),
                            s = i(a(3641));
                        (t.CaptionComponent = (e) => {
                            let {
                                forwardRef: t,
                                variant: a,
                                type: i = "text",
                                size: l = "s",
                                className: d,
                                children: c,
                                weight: u = "medium",
                                ..._
                            } = e;
                            return (0, r.jsx)(n.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, o.clsx)(
                                    s.default.root,
                                    s.default["root_".concat(i, "_").concat(l)],
                                    s.default["root_weight_".concat(u)],
                                    d,
                                ),
                                ..._,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, l.forwardRef)((e, a) =>
                                (0, r.jsx)(t.CaptionComponent, {
                                    forwardRef: a,
                                    ...e,
                                }),
                            ));
                    },
                    404: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.Heading = t.HeadingComponent = void 0);
                        let r = a(1082),
                            o = a(5881),
                            l = a(810),
                            n = a(4721),
                            s = i(a(5153));
                        (t.HeadingComponent = (e) => {
                            let {
                                forwardRef: t,
                                variant: a,
                                weight: i = "bold",
                                size: l = "s",
                                className: d,
                                children: c,
                                ...u
                            } = e;
                            return (0, r.jsx)(n.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, o.clsx)(
                                    s.default.root,
                                    s.default["root_size_".concat(l)],
                                    s.default["root_weight_".concat(i)],
                                    d,
                                ),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, l.forwardRef)((e, a) =>
                                (0, r.jsx)(t.HeadingComponent, {
                                    forwardRef: a,
                                    ...e,
                                }),
                            ));
                    },
                    4721: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.Typography = t.TypographyComponent = void 0);
                        let r = a(1082),
                            o = a(5881),
                            l = a(810),
                            n = i(a(5818));
                        function s(e) {
                            let {
                                    forwardRef: t,
                                    style: a,
                                    className: i,
                                    children: l,
                                    variant: s,
                                    lineClamp: d,
                                    ...c
                                } = e,
                                u = d && "string" == typeof l ? l : void 0;
                            return (0, r.jsx)(s, {
                                style: { ...a, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, o.clsx)(
                                    n.default.root,
                                    {
                                        [n.default.root_clamp]: d && d > 0,
                                        [n.default.root_clamp_oneline]:
                                            d && 1 === d,
                                        [n.default.root_clamp_multiline]:
                                            d && d > 1,
                                    },
                                    i,
                                ),
                                ...c,
                                children: l,
                            });
                        }
                        (t.TypographyComponent = s),
                            (t.Typography = (0, l.forwardRef)((e, t) =>
                                (0, r.jsx)(s, { forwardRef: t, ...e }),
                            ));
                    },
                    2582: (e, t, a) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.Heading = t.Caption = void 0);
                        var i = a(7743);
                        Object.defineProperty(t, "Caption", {
                            enumerable: !0,
                            get: function () {
                                return i.Caption;
                            },
                        });
                        var r = a(404);
                        Object.defineProperty(t, "Heading", {
                            enumerable: !0,
                            get: function () {
                                return r.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = s;
                    },
                },
                u = {};
            function _(e) {
                var t = u[e];
                if (void 0 !== t) return t.exports;
                var a = (u[e] = { exports: {} });
                return c[e].call(a.exports, a, a.exports, _), a.exports;
            }
            (_.d = (e, t) => {
                for (var a in t)
                    _.o(t, a) &&
                        !_.o(e, a) &&
                        Object.defineProperty(e, a, {
                            enumerable: !0,
                            get: t[a],
                        });
            }),
                (_.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (_.r = (e) => {
                    "undefined" != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module",
                        }),
                        Object.defineProperty(e, "__esModule", { value: !0 });
                });
            var m = {};
            (() => {
                Object.defineProperty(m, "__esModule", { value: !0 }),
                    (m.Label = void 0);
                var e = _(2);
                Object.defineProperty(m, "Label", {
                    enumerable: !0,
                    get: function () {
                        return e.Label;
                    },
                });
            })();
            var p = m.Label;
            m.__esModule;
            var v = a(77868),
                x = a(34268),
                g = a.n(x),
                h = a(73827),
                f = a(42213),
                y = a(42314),
                b = a(44189),
                C = a(78016),
                P = a(64143),
                j = a(79169),
                A = a(18740),
                k = a(13748),
                N = a.n(k);
            let w = (0, l.PA)((e) => {
                let {
                        className: t,
                        text: a = "",
                        maxTextLength: i,
                        minTextLength: l,
                        variant: s = "input",
                        shouldFinishOnKeyPress: d = !1,
                        placeholder: c,
                        onChangeFinish: u,
                    } = e,
                    [_, m] = (0, n.useState)(a),
                    p = (0, n.useRef)(!1),
                    v = (0, n.useRef)(null),
                    x = (0, n.useCallback)((e) => {
                        m(e.target.value);
                    }, []),
                    g = (0, n.useCallback)(
                        (e) => {
                            if (d && ["Enter", "Escape"].includes(e.key)) {
                                var t;
                                "Escape" === e.key && (p.current = !0),
                                    null == (t = e.currentTarget) || t.blur();
                            }
                        },
                        [d],
                    ),
                    h = (0, n.useCallback)(() => {
                        let e = _.trim();
                        p.current || (l && e.length < l)
                            ? ((p.current = !1), null == u || u(a))
                            : null == u || u(e);
                    }, [_, p, l, u, a]);
                (0, n.useEffect)(() => {
                    v.current &&
                        ((v.current.selectionStart = v.current.value.length),
                        (v.current.selectionEnd = v.current.value.length));
                }, []),
                    (0, n.useLayoutEffect)(() => {
                        let e = v.current;
                        if (e) {
                            e.style.height = "0px";
                            let t = e.scrollHeight;
                            e.style.height = "".concat(t, "px");
                        }
                    }, [v, _]);
                let f = (0, n.useMemo)(
                    () =>
                        "textarea" === s
                            ? (e) =>
                                  (0, r.jsx)("textarea", {
                                      ref: v,
                                      rows: 6,
                                      ...e,
                                  })
                            : (e) => (0, r.jsx)("input", { ...e }),
                    [s],
                );
                return (0, r.jsx)(f, {
                    className: (0, o.$)(N().root, t, {
                        [N().root_textarea]: "textarea" === s,
                    }),
                    type: "text",
                    value: _,
                    maxLength: i,
                    onBlur: h,
                    onChange: x,
                    onKeyDown: g,
                    placeholder: c,
                    autoFocus: !0,
                });
            });
            var T = a(76960),
                L = a.n(T);
            let H = (0, l.PA)((e) => {
                    let {
                            title: t = "",
                            "aria-labelledby": a,
                            canChange: i = !1,
                            onChange: l,
                            maxTitleLength: s,
                            version: c = "",
                            onVersionClick: u,
                            className: _,
                            headingVariant: m = "h2",
                            withHeadingClamp: p = !0,
                            link: x,
                            onTitleLinkClick: g,
                        } = e,
                        {
                            settings: { isMobile: k },
                        } = (0, j.Pjs)(),
                        { formatMessage: N } = (0, h.A)(),
                        [T, H] = (0, n.useState)(!1),
                        B = (0, n.useRef)(null),
                        I = t.length + c.length > 25,
                        M = (0, j.ZpR)(null != x ? x : ""),
                        S = (0, f.c)((e) => {
                            null == g || g(), M(e);
                        }),
                        R = (0, n.useMemo)(
                            () =>
                                k
                                    ? {
                                          font: L().font_mobile,
                                          iconLink: L().arrowWrapper_mobile,
                                      }
                                    : I
                                      ? {
                                            font: L().font_long,
                                            iconLink: L().arrowWrapper_long,
                                        }
                                      : {
                                            font: L().font_short,
                                            iconLink: L().arrowWrapper_short,
                                        },
                            [k, I],
                        ),
                        D = !k && i && T,
                        E = (0, n.useCallback)(() => {
                            var e;
                            H(!0), null == (e = B.current) || e.focus();
                        }, []),
                        z = (0, n.useCallback)(
                            (e) => {
                                H(!1), null == l || l(e);
                            },
                            [l],
                        ),
                        O = (0, y.L)(() =>
                            (0, r.jsx)("span", {
                                className: (0, o.$)(
                                    L().arrowWrapper,
                                    R.iconLink,
                                ),
                                children: (0, r.jsx)(C.Icon, {
                                    className: L().titleWithLinkIcon,
                                    size: "xs",
                                    variant: "arrowRight",
                                }),
                            }),
                        ),
                        U = (0, y.L)(() =>
                            (0, r.jsxs)(v.Heading, {
                                variant: m,
                                id: a,
                                lineClamp: k && p ? 2 : void 0,
                                className: (0, o.$)(L().heading, {
                                    [L().heading_withVersion]: c,
                                }),
                                ...(0, d.Am)(d.e8.pageHeader.ENTITY_TITLE),
                                children: [
                                    (0, r.jsx)(v.Caption, {
                                        className: (0, o.$)(
                                            L().font,
                                            R.font,
                                            L().title,
                                        ),
                                        variant: "span",
                                        children: t,
                                    }),
                                    c &&
                                        (0, r.jsx)(v.Caption, {
                                            onClick: u,
                                            className: (0, o.$)(
                                                L().font,
                                                R.font,
                                                L().version,
                                                {
                                                    [L()
                                                        .version_withOtherVersions]:
                                                        u,
                                                },
                                            ),
                                            variant: "span",
                                            ...(0, d.Am)(
                                                d.e8.pageHeader.ENTITY_VERSION,
                                            ),
                                            children: " ".concat(c),
                                        }),
                                    x && !k && O,
                                ],
                            }),
                        ),
                        F = (0, y.L)(() =>
                            x
                                ? (0, r.jsxs)(A.N_, {
                                      className: L().titleWithLink,
                                      containerClassName: L().linkContainer,
                                      textClassName: L().linkText,
                                      href: x,
                                      onClick: S,
                                      children: [U, k && O],
                                  })
                                : U,
                        );
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            !D &&
                                (0, r.jsxs)("div", {
                                    className: (0, o.$)(L().root, _),
                                    children: [
                                        (0, r.jsx)(P.jp, {
                                            title: t,
                                            className: L().stickyTitle,
                                            children: F,
                                        }),
                                        i &&
                                            (0, r.jsx)("div", {
                                                className: (0, o.$)(
                                                    L().editButton,
                                                    {
                                                        [L()
                                                            .editButton_centered]:
                                                            !I && !k,
                                                    },
                                                ),
                                                children: (0, r.jsx)(b.Button, {
                                                    onClick: E,
                                                    "aria-label": N({
                                                        id: "playlist-actions.change-title",
                                                    }),
                                                    icon: (0, r.jsx)(C.Icon, {
                                                        size: "xxs",
                                                        variant: "pencil",
                                                    }),
                                                    size: "s",
                                                    radius: "round",
                                                    ...(0, d.Am)(
                                                        d.e8.pageHeader
                                                            .EDIT_TITLE_BUTTON,
                                                    ),
                                                }),
                                            }),
                                    ],
                                }),
                            D &&
                                (0, r.jsx)("div", {
                                    className: L().textFieldContainer,
                                    children: (0, r.jsx)(w, {
                                        text: t,
                                        className: (0, o.$)(
                                            L().font,
                                            R.font,
                                            L().textField,
                                            L().title,
                                            { [L().textField_long]: I && !k },
                                        ),
                                        onChangeFinish: z,
                                        maxTextLength: s,
                                        minTextLength: 1,
                                        placeholder: N({
                                            id: "playlist-actions.enter-title",
                                        }),
                                        shouldFinishOnKeyPress: !0,
                                    }),
                                }),
                        ],
                    });
                }),
                B = (0, l.PA)((e) => {
                    let {
                            "aria-labelledby": t,
                            entityName: a,
                            title: i,
                            meta: l,
                            controls: s,
                            className: c,
                            forwardRef: u,
                            canChangeTitle: _ = !1,
                            maxTitleLength: m,
                            onTitleChange: x,
                            cover: h,
                            version: f,
                            onVersionClick: y,
                            disclaimerLabel: b,
                            entityNameIcon: C,
                            headingVariant: P,
                            titleClassName: j,
                            metaClassName: A,
                            contentClassName: k,
                            withHeadingClamp: N,
                            entityNameClassName: w,
                            logo: T,
                            coverCellClassName: L,
                            infoClassName: B,
                            linkTitle: I,
                            onTitleLinkClick: M,
                        } = e,
                        S = (0, n.useMemo)(
                            () =>
                                b
                                    ? (0, r.jsx)("div", {
                                          className: g().entityContainer,
                                          children: (0, r.jsx)(p, {
                                              size: "m",
                                              className: g().disclaimerLabel,
                                              ...(0, d.Am)(
                                                  d.e8.pageHeader
                                                      .DISCLAIMER_LABEL,
                                              ),
                                              children: b,
                                          }),
                                      })
                                    : (0, r.jsxs)(v.Caption, {
                                          variant: "div",
                                          type: "text",
                                          size: "m",
                                          weight: "medium",
                                          className: (0, o.$)(
                                              g().entityName,
                                              w,
                                          ),
                                          ...(0, d.Am)(
                                              d.e8.pageHeader.ENTITY_NAME,
                                          ),
                                          children: [a, C],
                                      }),
                            [b, a, w, C],
                        );
                    return (0, r.jsxs)("div", {
                        className: (0, o.$)(
                            g().root,
                            {
                                [g().root_withCover]: (0, n.isValidElement)(h),
                                [g().root_withCoverAndLogo]:
                                    (0, n.isValidElement)(T) &&
                                    (0, n.isValidElement)(h),
                            },
                            c,
                        ),
                        ref: u,
                        ...(0, d.Am)(d.e8.pageHeader.ENTITY_HEADER),
                        children: [
                            h &&
                                (0, r.jsx)("div", {
                                    className: (0, o.$)(g().coverCell, L),
                                    children: h,
                                }),
                            (0, r.jsxs)("div", {
                                className: (0, o.$)(g().content, k),
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: (0, o.$)(g().info, B),
                                        children: [
                                            S,
                                            (0, r.jsx)(H, {
                                                onTitleLinkClick: M,
                                                link: I,
                                                className: (0, o.$)(
                                                    g().title,
                                                    j,
                                                    {
                                                        [g()
                                                            .title_withDisclaimerLabel]:
                                                            !!b,
                                                    },
                                                ),
                                                title: i,
                                                "aria-labelledby": t,
                                                canChange: _,
                                                maxTitleLength: m,
                                                onChange: x,
                                                version: f,
                                                onVersionClick: y,
                                                headingVariant: P,
                                                withHeadingClamp: N,
                                            }),
                                            !!l &&
                                                (0, r.jsx)("div", {
                                                    className: (0, o.$)(
                                                        g().meta,
                                                        {
                                                            [g()
                                                                .meta_withDisclaimerLabel]:
                                                                !!b,
                                                        },
                                                        A,
                                                    ),
                                                    children: l,
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: g().controls,
                                        ...(0, d.Am)(
                                            d.e8.pageHeader
                                                .BASE_PAGE_HEADER_CONTROLS,
                                        ),
                                        children: s,
                                    }),
                                ],
                            }),
                            (0, n.isValidElement)(T) &&
                                (0, r.jsx)("div", {
                                    className: g().logo,
                                    children: T,
                                }),
                        ],
                    });
                }),
                I = (0, n.forwardRef)((e, t) =>
                    (0, r.jsx)(B, { forwardRef: t, ...e }),
                );
            var M = a(91342),
                S = a(98420),
                R = a.n(S);
            let D = (0, l.PA)((e) => {
                let { className: t, coverRadius: a = "m", isActive: i } = e,
                    {
                        settings: { isMobile: l },
                    } = (0, j.Pjs)(),
                    s = (0, n.useMemo)(
                        () =>
                            l
                                ? (0, r.jsxs)("div", {
                                      className: R().controls,
                                      children: [
                                          (0, r.jsx)(M.Shimmer, {
                                              className: R().button,
                                              radius: "round",
                                              isActive: i,
                                          }),
                                          (0, r.jsx)(M.Shimmer, {
                                              className: R().button,
                                              radius: "round",
                                              isActive: i,
                                          }),
                                          (0, r.jsx)(M.Shimmer, {
                                              className: R().button,
                                              radius: "round",
                                              isActive: i,
                                          }),
                                      ],
                                  })
                                : (0, r.jsxs)("div", {
                                      className: R().controls,
                                      children: [
                                          (0, r.jsx)(M.Shimmer, {
                                              className: R().desktopPlayButton,
                                              isActive: i,
                                          }),
                                          (0, r.jsx)(M.Shimmer, {
                                              className: R().button,
                                              radius: "round",
                                              isActive: i,
                                          }),
                                          (0, r.jsx)(M.Shimmer, {
                                              className: R().button,
                                              radius: "round",
                                              isActive: i,
                                          }),
                                          (0, r.jsx)(M.Shimmer, {
                                              className: R().button,
                                              radius: "round",
                                              isActive: i,
                                          }),
                                      ],
                                  }),
                        [i, l],
                    );
                return (0, r.jsxs)("div", {
                    className: (0, o.$)(R().root, t),
                    children: [
                        (0, r.jsx)(M.Shimmer, {
                            className: R().cover,
                            radius: a,
                            isActive: i,
                        }),
                        (0, r.jsxs)("div", {
                            className: R().content,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: R().info,
                                    children: [
                                        (0, r.jsx)(M.Shimmer, {
                                            className: R().entityName,
                                            radius: "s",
                                            isActive: i,
                                        }),
                                        (0, r.jsx)(M.Shimmer, {
                                            className: R().title,
                                            radius: "xl",
                                            isActive: i,
                                        }),
                                        (0, r.jsx)(M.Shimmer, {
                                            className: R().meta,
                                            radius: "s",
                                            isActive: i,
                                        }),
                                    ],
                                }),
                                s,
                            ],
                        }),
                    ],
                });
            });
            var E = a(96560),
                z = a(48509),
                O = a(95592),
                U = a(93967),
                F = a(52732),
                W = a(25786),
                V = a.n(W);
            let Y = (0, l.PA)((e) => {
                var t;
                let {
                        album: a,
                        likeButtonAriaLabel: o,
                        withLikeButton: l = !0,
                        donationButton: s,
                    } = e,
                    {
                        user: c,
                        settings: { isMobile: u },
                        trailer: _,
                        albumCPA: { isPlusCPAEnabled: m },
                    } = (0, j.Pjs)(),
                    [p, x] = (0, n.useState)(!1),
                    g = (0, O.KX)(a),
                    b = (0, O.A7)(a),
                    { formatNumber: P } = (0, h.A)(),
                    k = (0, j.Ftl)(),
                    { utmLink: N } = (0, j.fyy)({
                        contextId: a.id,
                        contextType: z.K.Album,
                    }),
                    w = (0, j.PT7)(),
                    { controlSize: T, iconSize: L } = i(u),
                    { pageAlbumId: H } = (0, j.THB)(),
                    B =
                        !m({
                            pageAlbumId: H,
                            albumId: a.id,
                            isNonMusic: a.isNonMusic,
                        }) && !c.isAuthorized,
                    I = (0, f.c)(() => {
                        w() ||
                            (_.setUtmLink(N),
                            _.openAlbumTrailer(a.id),
                            k(U.ky.Album, String(a.id)));
                    }),
                    M = (0, n.useMemo)(() => {
                        var e;
                        return (null == (e = a.trailer)
                            ? void 0
                            : e.isAvailable) && !u
                            ? (0, r.jsx)(A.cv, {
                                  children: (0, r.jsx)(A.kJ, {
                                      size: "s",
                                      radius: "xxxl",
                                      iconSize: "xxs",
                                      className: V().trailerControl,
                                      disabled: !a.isAvailable,
                                      onClick: I,
                                      children: (0, r.jsx)(E.A, {
                                          id: "entity-names.trailer",
                                      }),
                                  }),
                              })
                            : null;
                    }, [
                        null == (t = a.trailer) ? void 0 : t.isAvailable,
                        a.isAvailable,
                        I,
                        u,
                    ]),
                    S = (0, y.L)(() => {
                        if (!u)
                            return (0, n.isValidElement)(s)
                                ? s
                                : (0, r.jsx)(A.O0, {
                                      size: T,
                                      iconSize: L,
                                      onClick: b,
                                      isPinned: a.isPinned,
                                      isDisabled: !a.isAvailable,
                                  });
                    }),
                    R = (0, y.L)(() => {
                        if (
                            a.actualLikesCount &&
                            0 !== a.actualLikesCount &&
                            !u
                        )
                            return (0, r.jsx)(v.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "s",
                                weight: "medium",
                                children:
                                    a.actualLikesCount && P(a.actualLikesCount),
                            });
                    }),
                    D = (0, y.L)(() => {
                        if (l)
                            return (0, r.jsx)(A.cy, {
                                className: V().likeControl,
                                isLiked: a.isLiked,
                                onClick: g,
                                variant: "default",
                                size: T,
                                iconSize: L,
                                withRipple: !u,
                                disabled: B,
                                "aria-label": o,
                                children: R,
                            });
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        M,
                        D,
                        (0, n.isValidElement)(S) &&
                            (0, r.jsx)("div", {
                                className: V().pinOrDonationControl,
                                children: S,
                            }),
                        (0, r.jsx)(F.kz, {
                            album: a,
                            open: p,
                            onOpenChange: x,
                            wrapperClassName: V().menuControl,
                            size: T,
                            icon: (0, r.jsx)(C.Icon, {
                                size: L,
                                variant: "more",
                            }),
                            variant: F.zh.PAGE,
                            ...(0, d.Am)(
                                d.e8.pageHeader
                                    .ALBUM_HEADER_CONTEXT_MENU_BUTTON,
                            ),
                        }),
                    ],
                });
            });
            var Q = a(54487),
                K = a(70879);
            let $ = function () {
                let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [],
                    t = e.filter((e) => !e.isComposer),
                    a = t.filter((e) => !e.various),
                    i = e.filter((e) => e.isComposer && !e.various),
                    r = [];
                return (
                    a.length > 0 ? (r = a) : t.length > 0 && (r = t),
                    r.concat(i)
                );
            };
            var q = a(33586),
                X = a.n(q);
            let Z = (0, l.PA)((e) => {
                var t, a, i;
                let { album: l, withArtistLink: s = !0 } = e,
                    {
                        settings: { isMobile: c },
                    } = (0, j.Pjs)(),
                    u = (0, n.useMemo)(() => $(l.artists), [l.artists]),
                    _ =
                        (null == u ? void 0 : u.length) === 1 &&
                        !(null == (t = u[0]) ? void 0 : t.decomposed) &&
                        !(null == (a = u[0]) ? void 0 : a.various);
                return (0, r.jsxs)("div", {
                    className: X().meta,
                    children: [
                        _ &&
                            (0, r.jsx)(Q.Paper, {
                                radius: "round",
                                className: X().artistCover,
                                children: (0, r.jsx)(A.BW, {
                                    src:
                                        null == (i = u[0])
                                            ? void 0
                                            : i.coverUri,
                                    size: 30,
                                    withAvatarReplace: !0,
                                }),
                            }),
                        (0, r.jsx)(K.iQ, {
                            artists: u,
                            lineClamp: c ? 1 : void 0,
                            className: X().artists,
                            spoilerClassName: X().artistsSpoiler,
                            visibleArtistsCount: c ? void 0 : 2,
                            linkClassName: X().artistLink,
                            captionClassName: X().artistLabel,
                            variant: c ? "breakAll" : "breakWord",
                            withLink: s,
                        }),
                        l.year &&
                            (0, r.jsx)(v.Caption, {
                                variant: "div",
                                type: "text",
                                size: "m",
                                weight: "medium",
                                className: (0, o.$)(X().year, {
                                    [X().year_dot]: u.length > 0,
                                }),
                                ...(0, d.Am)(
                                    d.e8.pageHeader.ALBUM_RELEASE_DATE,
                                ),
                                children: l.year,
                            }),
                    ],
                });
            });
            var J = a(59188),
                G = a.n(J);
            let ee = (e) => {
                let {
                    coverVariant: t,
                    coverUri: a,
                    isAvailable: i,
                    className: l,
                    withPlusBadge: n,
                    onClick: s,
                    "aria-label": d,
                    customCover: c,
                    buttonClassName: u,
                } = e;
                return (0, r.jsxs)(Q.Paper, {
                    radius: "round" === t ? "round" : "m",
                    className: (0, o.$)(G().root, l, {
                        [G().root_hoverable]: !!s,
                    }),
                    children: [
                        (0, r.jsx)(b.Button, {
                            className: (0, o.$)(G().coverButton, u),
                            onClick: s,
                            "aria-label": d,
                            tabIndex: s ? 0 : -1,
                            disabled: !s,
                            children:
                                c ||
                                (0, r.jsx)(A.BW, {
                                    fit: "cover",
                                    src: a,
                                    size: 300,
                                    className: G().coverImage,
                                    withAvatarReplace: !0,
                                    isAvailable: i,
                                }),
                        }),
                        n &&
                            (0, r.jsx)(C.Icon, {
                                variant: "plusBadge",
                                className: G().plusBadge,
                            }),
                    ],
                });
            };
            var et = a(7465),
                ea = a.n(et),
                ei = a(28735),
                er = a.n(ei);
            let eo = (0, l.PA)((e) => {
                    let {
                            album: t,
                            donationButton: a,
                            className: i,
                            "aria-labelledby": o,
                            forwardRef: l,
                            onVersionClick: s,
                        } = e,
                        { formatMessage: d } = (0, h.A)(),
                        {
                            shouldShowBuySubscriptionModal: c,
                            showBuySubscriptionModal: u,
                        } = (0, j.qBP)(),
                        _ = (0, j.brA)(),
                        { from: m, utmLink: p } = (0, j.fyy)({
                            pageId: j._Q$.ALBUM,
                            blockId: j.UfI.ALBUM,
                            contextType: z.K.Album,
                            contextId: t.id,
                        }),
                        v = (0, j.PT7)(),
                        {
                            user: x,
                            settings: { isMobile: g },
                            sonataState: y,
                            track: { isTrackPage: b },
                            modals: { imageSliderModal: P },
                            albumCPA: { isPlusCPAPlayerBarEnabled: k },
                        } = (0, j.Pjs)(),
                        N = !x.hasPlus && t.isAvailableOnlyForPlus,
                        w = !!t.coverUri,
                        T = k(t.id, t.isNonMusic),
                        L = (0, O.r_)(t.type),
                        H = (0, n.useMemo)(() => {
                            if (t.shouldShowBooksBadge)
                                return (0, r.jsx)(C.Icon, {
                                    variant: "booksLogo",
                                    className: er().booksLogo,
                                });
                        }, [t.shouldShowBooksBadge]),
                        { isPlaying: B, togglePlay: M } = (0, j.Dx4)({
                            playContextParams: {
                                contextData: {
                                    type: z.K.Album,
                                    meta: { id: t.id },
                                    from: m,
                                    utmLink: p,
                                },
                                loadContextMeta: !0,
                                entitiesData: y.unloadedEntitiesDataFromModels,
                            },
                        }),
                        S = (0, f.c)(() => {
                            t.coverUri &&
                                P.openImages({ images: [t.coverUri] });
                        }),
                        R = (0, f.c)(() => {
                            if (!v()) {
                                if (c && !T) return void u();
                                M(), _(!B);
                            }
                        }),
                        D = (0, n.useMemo)(
                            () =>
                                N
                                    ? (0, r.jsx)(A.w1, {
                                          className: er().plusPaywallButton,
                                          albumType: t.type,
                                      })
                                    : g
                                      ? (0, r.jsx)(A.DM, {
                                            className: ea().playControl,
                                            color: "primary",
                                            buttonVariant: "default",
                                            iconSize: "xxl",
                                            isPlaying: B,
                                            onClick: R,
                                            variant: "filled",
                                            disabled: !t.isAvailable,
                                        })
                                      : (0, r.jsx)(A.DM, {
                                            className: ea().playControl,
                                            withRipple: !0,
                                            buttonVariant: "default",
                                            radius: "xxxl",
                                            size: "s",
                                            color: "primary",
                                            iconSize: "xxs",
                                            isPlaying: B,
                                            onClick: R,
                                            disabled: !t.isAvailable,
                                            children: (0, r.jsx)(E.A, {
                                                id: "player-actions.listen",
                                            }),
                                        }),
                            [N, g, B, R, t.isAvailable, t.type],
                        ),
                        U = (0, n.useMemo)(
                            () =>
                                (0, r.jsx)("div", {
                                    className: ea().controlsContainer,
                                    children: (0, r.jsxs)("div", {
                                        className: ea().controls,
                                        children: [
                                            D,
                                            (0, r.jsx)(Y, {
                                                donationButton: a,
                                                album: t,
                                                withLikeButton: !N,
                                            }),
                                        ],
                                    }),
                                }),
                            [D, t, a, N],
                        );
                    return (0, r.jsx)(I, {
                        ref: l,
                        headingVariant: b ? "div" : "h1",
                        className: i,
                        controls: U,
                        meta: (0, r.jsx)(Z, { album: t }),
                        entityName: L,
                        entityNameIcon: H,
                        title: t.title,
                        cover: (0, r.jsx)(ee, {
                            coverVariant: "square",
                            coverUri: t.coverUri,
                            isAvailable: t.isAvailable,
                            withPlusBadge: t.isAvailableOnlyForPlus,
                            onClick: w ? S : void 0,
                            "aria-label": w
                                ? d({ id: "slider.view-cover" })
                                : void 0,
                        }),
                        "aria-labelledby": o,
                        version: t.version,
                        onVersionClick: s,
                    });
                }),
                el = (0, n.forwardRef)((e, t) =>
                    (0, r.jsx)(eo, { forwardRef: t, ...e }),
                );
            var en = a(90317),
                es = a(53706),
                ed = a(13201),
                ec = a(43507),
                eu = a.n(ec);
            let e_ = (0, l.PA)((e) => {
                    let {
                            url: t,
                            iconSize: a,
                            controlSize: i,
                            forwardRef: o,
                        } = e,
                        l = (0, j.ZpR)(t),
                        n = (0, es.cg)(),
                        s = (0, es.CC)(),
                        { ref: d, intersectionPropertyId: c } = (0, j.nMI)({
                            callback: s,
                            withViewUuid: !0,
                        }),
                        u = (0, f.c)((e) => {
                            n(U.QT.Link, t), l(e);
                        });
                    return (0, r.jsx)("div", {
                        ref: o,
                        "data-intersection-property-id": j.NZ,
                        className: eu().donateControl,
                        children: (0, r.jsx)(es.vK, {
                            "data-intersection-property-id": c,
                            iconSize: a,
                            size: i,
                            onClick: u,
                            ref: d,
                        }),
                    });
                }),
                em = (0, n.forwardRef)((e, t) =>
                    (0, r.jsx)(e_, { forwardRef: t, ...e }),
                );
            var ep = a(44612),
                ev = a(31342);
            let ex = {
                    width: 20,
                    height: 8,
                    tipRadius: 2,
                    fill: "var(--ym-background-color-primary-enabled-tooltip)",
                },
                eg = (e) => {
                    let { children: t } = e,
                        {
                            settings: { isMobile: a },
                        } = (0, j.Pjs)(),
                        { contentRef: i } = (0, j.gKY)(),
                        { setIsOnboardingOpened: o } = (0, j.wD7)(),
                        [l, s] = (0, ep.d)(),
                        d = (0, j.zzi)({
                            id: j.hCo.ARTIST_DONATION_BUTTON,
                            ref: l,
                        }),
                        [c, u] = (0, n.useState)(d),
                        _ = (0, n.useCallback)(() => {
                            u(!1), o(!1);
                        }, [o]),
                        m = (0, n.useCallback)(
                            (e) => {
                                e || (_(), o(!1));
                            },
                            [_, o],
                        );
                    return (0, r.jsxs)(ev.m_, {
                        placement: a ? "top" : "right",
                        arrowProps: ex,
                        offsetOptions: 14,
                        isHoverEnabled: !1,
                        open: c,
                        onOpenChange: m,
                        enableAriaDescribedby: !0,
                        referenceRef: s,
                        children: [
                            t,
                            (0, r.jsxs)(ev.ZI, {
                                className: eu().donationButtonTooltip,
                                rootNode: i,
                                children: [
                                    (0, r.jsx)(b.Button, {
                                        icon: (0, r.jsx)(C.Icon, {
                                            variant: "close",
                                            size: "xxs",
                                        }),
                                        onClick: _,
                                        variant: "text",
                                        className: eu().closeTooltip,
                                        withRipple: !1,
                                    }),
                                    (0, r.jsx)(v.Caption, {
                                        variant: "span",
                                        className: eu().tooltipText,
                                        children: (0, r.jsx)(E.A, {
                                            id: "onboarding.artist-donation-button-1",
                                            values: {
                                                br: (0, r.jsx)("br", {}),
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                eh = (0, l.PA)((e) => {
                    var t, a, o, l, s, c, u;
                    let {
                            className: _,
                            artistMeta: m,
                            entitiesData: p,
                            forwardRef: x,
                            onCoverClick: g,
                        } = e,
                        {
                            shouldShowBuySubscriptionModal: y,
                            showBuySubscriptionModal: P,
                        } = (0, j.qBP)(),
                        { from: k, utmLink: N } = (0, j.fyy)({
                            pageId: j._Q$.ARTIST,
                            blockId: j.UfI.ARTIST,
                            contextType: z.K.Artist,
                            contextId: null == m ? void 0 : m.artist.id,
                        }),
                        w = (0, K.KX)(null == m ? void 0 : m.artist),
                        T = (0, K.A7)(null == m ? void 0 : m.artist),
                        L = (0, j.Ftl)(),
                        { formatMessage: H } = (0, h.A)(),
                        [B, M] = (0, n.useState)(!1),
                        {
                            disclaimer: S,
                            settings: { isMobile: R },
                            trailer: D,
                            user: O,
                            slam: { isOfflineModeEnabled: F },
                        } = (0, j.Pjs)(),
                        W = (0, j.brA)(),
                        V = (0, j.PT7)(),
                        Y = (0, es.Q$)(),
                        Q =
                            !!(null == m || null == (t = m.artist.trailer)
                                ? void 0
                                : t.isAvailable) && !R,
                        $ = !R,
                        q = !!(null == m ? void 0 : m.donationUrl),
                        X =
                            ((null == m ? void 0 : m.artist.isForeignAgent) &&
                                (null == (a = S.data) ? void 0 : a.title)) ||
                            void 0,
                        Z = (() => {
                            let [e, t] = (0, n.useState)(
                                    window.innerWidth < 1120,
                                ),
                                a = (0, n.useMemo)(
                                    () =>
                                        (0, ed.A)(
                                            () => {
                                                t(window.innerWidth < 1120);
                                            },
                                            100,
                                            { trailing: !1 },
                                        ),
                                    [t],
                                );
                            return (
                                (0, n.useEffect)(
                                    () => (
                                        window.addEventListener("resize", a),
                                        a(),
                                        () => {
                                            window.removeEventListener(
                                                "resize",
                                                a,
                                            );
                                        }
                                    ),
                                    [a],
                                ),
                                e
                            );
                        })(),
                        { controlSize: J, iconSize: G } = i(R),
                        et = (0, n.useMemo)(
                            () =>
                                (null == m ? void 0 : m.artist.isComposer)
                                    ? H({ id: "entity-names.composer" })
                                    : H({ id: "entity-names.singer" }),
                            [H, null == m ? void 0 : m.artist.isComposer],
                        ),
                        ea = !!(null == m ? void 0 : m.brandedButton) && !F,
                        ei = (0, j.ZpR)(
                            null !=
                                (u =
                                    null == m || null == (o = m.brandedButton)
                                        ? void 0
                                        : o.url)
                                ? u
                                : "",
                        ),
                        er = !Z || (Z && !ea),
                        { isPlaying: eo, togglePlay: el } = (0, j.Dx4)({
                            playContextParams: {
                                contextData: {
                                    type: F ? z.K.Various : z.K.Artist,
                                    meta: {
                                        id: Number(
                                            null == m ? void 0 : m.artist.id,
                                        ),
                                    },
                                    from: k,
                                    utmLink: N,
                                },
                                loadContextMeta: !F,
                                entitiesData: p,
                            },
                        }),
                        ec = (0, f.c)(() => {
                            if (!V()) {
                                if (y) return void P();
                                el(), W(!eo);
                            }
                        }),
                        e_ = (0, n.useMemo)(() => {
                            var e, t;
                            return R
                                ? (0, r.jsx)(A.DM, {
                                      className: eu().playControl,
                                      color: "primary",
                                      buttonVariant: "default",
                                      iconSize: "xxl",
                                      isPlaying: eo,
                                      variant: "filled",
                                      onClick: ec,
                                      disabled:
                                          !(null == m || null == (t = m.artist)
                                              ? void 0
                                              : t.isAvailableForPlaying) ||
                                          !m.artist.isAvailable,
                                  })
                                : (0, r.jsx)(A.DM, {
                                      className: eu().playControl,
                                      withRipple: !0,
                                      buttonVariant: "default",
                                      radius: "xxxl",
                                      size: "s",
                                      color: "primary",
                                      iconSize: "xxs",
                                      isPlaying: eo,
                                      disabled:
                                          !(null == m || null == (e = m.artist)
                                              ? void 0
                                              : e.isAvailableForPlaying) ||
                                          !m.artist.isAvailable,
                                      onClick: ec,
                                      variant: "default",
                                      children:
                                          er &&
                                          (0, r.jsx)(E.A, {
                                              id: "player-actions.listen",
                                          }),
                                  });
                        }, [
                            er,
                            null == m ? void 0 : m.artist.isAvailable,
                            null == m ? void 0 : m.artist.isAvailableForPlaying,
                            ec,
                            R,
                            eo,
                        ]),
                        ep = (0, f.c)(() => {
                            !V() &&
                                (null == m ? void 0 : m.artist.id) &&
                                (D.setUtmLink(N),
                                D.openArtistTrailer(m.artist.id),
                                L(U.ky.Artist, m.artist.id));
                        }),
                        ev = (0, n.useMemo)(
                            () =>
                                Q
                                    ? (0, r.jsx)(A.aQ, {
                                          fallback: (0, r.jsx)(A.cv, {
                                              children: (0, r.jsx)(A.kJ, {
                                                  size: "s",
                                                  radius: "xxxl",
                                                  iconSize: "xxs",
                                                  className:
                                                      eu().trailerControl,
                                                  onClick: ep,
                                                  children:
                                                      er &&
                                                      (0, r.jsx)(E.A, {
                                                          id: "entity-names.trailer",
                                                      }),
                                              }),
                                          }),
                                      })
                                    : null,
                            [er, ep, Q],
                        ),
                        ex = (0, n.useMemo)(() => {
                            var e;
                            return (null == m ? void 0 : m.donationUrl) &&
                                (null == (e = m.artist) ? void 0 : e.id)
                                ? (0, r.jsx)(j.FoH, {
                                      blockType: U.LA.Donations,
                                      blockId: j.UfI.DONATY,
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      children: (0, r.jsx)(j.Bki, {
                                          objectType: U.ky.Donation,
                                          objectId: m.artist.id,
                                          objectPosX: 0,
                                          objectPosY: 0,
                                          objectsCount: 1,
                                          mainObjectId: m.artist.id,
                                          mainObjectType: U.ky.Artist,
                                          children: (0, r.jsx)(eg, {
                                              children: (0, r.jsx)(em, {
                                                  iconSize: G,
                                                  controlSize: J,
                                                  url: Y(m.donationUrl),
                                              }),
                                          }),
                                      }),
                                  })
                                : (0, r.jsx)(A.O0, {
                                      onClick: T,
                                      isPinned:
                                          null == m
                                              ? void 0
                                              : m.artist.isPinned,
                                      className: eu().pinControl,
                                      isDisabled: !(null == m
                                          ? void 0
                                          : m.artist.isAvailable),
                                  });
                        }, [
                            null == m ? void 0 : m.donationUrl,
                            null == m ? void 0 : m.artist.id,
                            null == m ? void 0 : m.artist.isPinned,
                            null == m ? void 0 : m.artist.isAvailable,
                            T,
                            G,
                            J,
                            Y,
                        ]),
                        eh = (0, n.useMemo)(() => {
                            var e;
                            let t = {
                                    gridTemplateAreas: "".concat(
                                        ((e) => {
                                            let {
                                                    isMobile: t,
                                                    brandedButton: a,
                                                    trailerButton: i,
                                                    pinOrDonateControl: r,
                                                } = e,
                                                o = r ? "pinOrDonate" : "";
                                            return t
                                                ? a
                                                    ? "'menu play like' 'branded branded branded'"
                                                    : "'menu like ".concat(
                                                          o,
                                                          " play '",
                                                      )
                                                : "'play "
                                                      .concat(
                                                          a ? "branded" : "",
                                                          " ",
                                                      )
                                                      .concat(
                                                          i ? "trailer" : "",
                                                          " like ",
                                                      )
                                                      .concat(o, " menu'");
                                        })({
                                            isMobile: R,
                                            brandedButton: ea,
                                            pinOrDonateControl: q || $,
                                            trailerButton: Q,
                                        }),
                                    ),
                                },
                                a = {
                                    "--baranded-button-color-background": ((
                                        e,
                                    ) => {
                                        if (!e) return null;
                                        let {
                                                h: t,
                                                s: a,
                                                l: i,
                                            } = (0, j.g8k)(e),
                                            r = Math.min(
                                                70,
                                                Math.max(10, i + 10),
                                            );
                                        return "hsl("
                                            .concat(t, "deg, ")
                                            .concat(a, "%, ")
                                            .concat(r, "%)");
                                    })(
                                        null == m
                                            ? void 0
                                            : m.artist.averageColor,
                                    ),
                                };
                            return (0, r.jsxs)("div", {
                                style: t,
                                className: eu().controls,
                                children: [
                                    e_,
                                    ea &&
                                        (0, r.jsx)(A.aQ, {
                                            fallback: (0, r.jsx)(b.Button, {
                                                className: eu().brandedControl,
                                                style: a,
                                                withRipple: !R,
                                                withHover: !1,
                                                radius: "xxxl",
                                                size: "s",
                                                color: "primary",
                                                onClick: ei,
                                                variant: "default",
                                                role: "link",
                                                children:
                                                    null == m ||
                                                    null ==
                                                        (e = m.brandedButton)
                                                        ? void 0
                                                        : e.title,
                                            }),
                                        }),
                                    ev,
                                    (0, r.jsx)(A.aQ, {
                                        fallback: (0, r.jsx)(A.cy, {
                                            className: eu().likeControl,
                                            isLiked:
                                                null == m
                                                    ? void 0
                                                    : m.artist.isLiked,
                                            onClick: w,
                                            withRipple: !R,
                                            iconSize: G,
                                            size: J,
                                            variant: "default",
                                            iconClassName: eu().likeIcon,
                                            disabled:
                                                !(null == m
                                                    ? void 0
                                                    : m.artist.isAvailable) ||
                                                !O.isAuthorized,
                                        }),
                                    }),
                                    (0, r.jsx)(A.aQ, { fallback: ex }),
                                    (0, r.jsx)(en.gg, {
                                        artist: null == m ? void 0 : m.artist,
                                        open: B,
                                        onOpenChange: M,
                                        className: eu().menuControl,
                                        size: J,
                                        icon: (0, r.jsx)(C.Icon, {
                                            size: G,
                                            variant: "more",
                                        }),
                                        ...(0, d.Am)(
                                            d.e8.pageHeader
                                                .ARTIST_HEADER_CONTEXT_MENU_BUTTON,
                                        ),
                                    }),
                                ],
                            });
                        }, [
                            null == m ? void 0 : m.artist,
                            null == m || null == (l = m.brandedButton)
                                ? void 0
                                : l.title,
                            J,
                            w,
                            G,
                            B,
                            R,
                            ei,
                            e_,
                            ex,
                            ev,
                            O.isAuthorized,
                            ea,
                            $,
                            q,
                            Q,
                        ]),
                        ef = (0, n.useMemo)(
                            () =>
                                (0, r.jsx)("div", {
                                    className: eu().meta,
                                    children:
                                        (null == m
                                            ? void 0
                                            : m.lastMonthListeners) &&
                                        (0, r.jsxs)("div", {
                                            className: eu().label,
                                            ...(0, d.Am)(
                                                d.e8.pageHeader
                                                    .ARTIST_LISTENERS_COUNT,
                                            ),
                                            children: [
                                                (0, r.jsx)(C.Icon, {
                                                    variant: "users",
                                                    size: "xxxs",
                                                }),
                                                (0, r.jsx)(v.Caption, {
                                                    type: "text",
                                                    size: "m",
                                                    weight: "medium",
                                                    variant: "span",
                                                    children: (0, r.jsx)(E.A, {
                                                        id: "entity-names.listeners-per-month",
                                                        values: {
                                                            counter:
                                                                m.lastMonthListeners,
                                                        },
                                                    }),
                                                }),
                                            ],
                                        }),
                                }),
                            [null == m ? void 0 : m.lastMonthListeners],
                        );
                    return (0, r.jsx)("div", {
                        className: eu().root,
                        children: (0, r.jsx)(I, {
                            ref: x,
                            className: _,
                            entityName: et,
                            title:
                                (null == m || null == (s = m.artist)
                                    ? void 0
                                    : s.name) || "",
                            meta: ef,
                            cover: (0, r.jsx)(ee, {
                                coverVariant: "round",
                                coverUri:
                                    null == m || null == (c = m.artist)
                                        ? void 0
                                        : c.coverUri,
                                isAvailable:
                                    null == m ? void 0 : m.artist.isAvailable,
                                onClick: g,
                                "aria-label": g
                                    ? H({ id: "slider.view-artist-covers" })
                                    : void 0,
                            }),
                            controls: eh,
                            disclaimerLabel: X,
                            headingVariant: "h1",
                        }),
                    });
                }),
                ef = (0, n.forwardRef)((e, t) =>
                    (0, r.jsx)(eh, { forwardRef: t, ...e }),
                );
            var ey = a(45415),
                eb = a(65255),
                eC = a(51551),
                eP = a(60293),
                ej = a(48551),
                eA = a(36023),
                ek = a.n(eA);
            let eN = (0, l.PA)((e) => {
                    var t;
                    let {
                            className: a,
                            forwardRef: i,
                            onCoverClick: l,
                            concert: s,
                            leadArtistId: d,
                            cover: c,
                            description: u,
                        } = e,
                        { formatMessage: _, formatDate: m } = (0, h.A)(),
                        {
                            state: p,
                            toggleTrue: x,
                            toggleFalse: g,
                        } = (0, ey.e)(!1),
                        C = (() => {
                            let e = (0, j.UlF)(),
                                t = (0, ej.st)(),
                                { hash: a } = (0, ej.gf)(),
                                { pageId: i } = (0, j.$au)(),
                                {
                                    tabId: r,
                                    tabPos: o,
                                    isTabSelectedByDefault: l,
                                } = (0, j.Rro)(),
                                {
                                    blockType: n,
                                    blockId: s,
                                    blockPosX: d,
                                    blockPosY: c,
                                } = (0, j.N8n)(),
                                {
                                    objectType: u,
                                    objectsCount: _,
                                    objectId: m,
                                    objectPosX: p,
                                    objectPosY: v,
                                    mainObjectType: x,
                                    mainObjectId: g,
                                } = (0, j.Jfv)();
                            return (0, f.c)((h, f) => {
                                if (!t || !i) return;
                                let y = (0, U.Fx)({
                                    params: {
                                        hash: a,
                                        pageId: i,
                                        entityType: n,
                                        entityId: s,
                                        entityPosX: d,
                                        entityPosY: c,
                                        objectsCount: _,
                                        viewUuid: f,
                                        objectType: u,
                                        objectId: m,
                                        objectPosX: p,
                                        objectPosY: v,
                                        mainObjectType: x,
                                        mainObjectId: g,
                                        tabId: r,
                                        tabPos: o,
                                        isTabSelectedByDefault: l,
                                    },
                                    logger: e,
                                    context:
                                        "useSendEventOnHeaderConcertBlockShowedOrHidden",
                                });
                                y &&
                                    (h
                                        ? (0, U.lW)(t.evgenInstance, y)
                                        : (0, U.LZ)(t.evgenInstance, y));
                            });
                        })(),
                        P = (() => {
                            let e = (0, ej.st)(),
                                t = (0, j.UlF)(),
                                { hash: a } = (0, ej.gf)(),
                                { pageId: i } = (0, j.$au)(),
                                {
                                    tabId: r,
                                    tabPos: o,
                                    isTabSelectedByDefault: l,
                                } = (0, j.Rro)(),
                                { offsetBlockPosY: n } = (0, j.uih)(),
                                {
                                    blockId: s,
                                    blockType: d,
                                    blockPosX: c,
                                    blockPosY: u,
                                    mainObjectId: _,
                                    mainObjectType: m,
                                } = (0, j.N8n)(),
                                {
                                    objectId: p,
                                    objectPosX: v,
                                    objectPosY: x,
                                    objectType: g,
                                    objectsCount: h,
                                } = (0, j.Jfv)(),
                                b = (0, y.L)(() =>
                                    void 0 !== n && void 0 !== u ? n + u : u,
                                );
                            return (0, f.c)((n) => {
                                let {
                                    to: u,
                                    objectId: f,
                                    objectType: y,
                                    deepLink: C,
                                } = n;
                                if (!e || !i) return;
                                let P = {
                                    hash: a,
                                    pageId: i,
                                    entityType: d,
                                    entityId: s,
                                    entityPosX: c,
                                    entityPosY: b,
                                    objectId: null != f ? f : p,
                                    objectType: null != y ? y : g,
                                    objectPosX: v,
                                    objectPosY: x,
                                    objectsCount: h,
                                    from: i,
                                    to: u,
                                    mainObjectType: m,
                                    mainObjectId: _,
                                    tabId: r,
                                    tabPos: o,
                                    isTabSelectedByDefault: l,
                                };
                                C && (P.deepLink = C);
                                let j = (0, U.Fx)({
                                    params: P,
                                    logger: t,
                                    context:
                                        "useSendEventOnHeaderConcertBlockNavigated",
                                });
                                j && (0, U.iF)(e.evgenInstance, j);
                            });
                        })(),
                        { ref: k, intersectionPropertyId: N } = (0, j.nMI)({
                            callback: C,
                            withViewUuid: !0,
                        }),
                        w = (() => {
                            let e = (0, ej.st)(),
                                t = (0, j.UlF)(),
                                { hash: a } = (0, ej.gf)(),
                                { pageId: i } = (0, j.$au)(),
                                {
                                    tabId: r,
                                    tabPos: o,
                                    isTabSelectedByDefault: l,
                                } = (0, j.Rro)(),
                                {
                                    blockId: n,
                                    blockType: s,
                                    blockPosX: d,
                                    blockPosY: c,
                                    objectsCount: u,
                                    mainObjectType: _,
                                    mainObjectId: m,
                                } = (0, j.N8n)();
                            return (0, f.c)(() => {
                                if (!e || !i) return;
                                let p = {
                                        hash: a,
                                        pageId: i,
                                        tabId: r,
                                        tabPos: o,
                                        entityType: s,
                                        mainObjectType: _,
                                        mainObjectId: m,
                                        entityId: n,
                                        entityPosX: d,
                                        entityPosY: c,
                                        isTabSelectedByDefault: l,
                                        objectsCount: u,
                                        pagePlacement: U.c4.Fullscreen,
                                        pageStyle: U.QL.Fullscreen,
                                    },
                                    v = (0, U.Fx)({
                                        params: p,
                                        logger: t,
                                        context:
                                            "useSendEventOnHeaderConcertLandingBlockLoaded",
                                    });
                                v && (0, U.uJ)(e.evgenInstance, v);
                            });
                        })(),
                        T = (0, n.useRef)(!1),
                        L = (0, eC.Yi)()(s);
                    (0, n.useEffect)(() => {
                        T.current || (w(), (T.current = !0));
                    }, [w]);
                    let H = (0, f.c)((e) => {
                            x(), null == e || e.stopPropagation();
                        }),
                        B = (0, f.c)((e) => {
                            P({ to: U.QT.ConcertPurchaseScreen }),
                                H(e),
                                e.preventDefault();
                        }),
                        M = (0, f.c)(() => {
                            P({ to: U.QT.ShareScreen });
                        }),
                        S = (0, f.c)(() => {
                            P({ to: U.QT.ArtistScreen });
                        }),
                        { shareLink: R, pathname: D } = (0, j.bNS)(
                            "/concert/:concertId",
                            { params: { concertId: s.id } },
                        ),
                        E = {
                            variant: j.Yxq.CONCERT,
                            id: s.id,
                            title: null != (t = s.title) ? t : "",
                            path: D,
                        },
                        z = (0, y.L)(() =>
                            (0, r.jsxs)("div", {
                                className: ek().controls,
                                children: [
                                    (0, r.jsx)(b.Button, {
                                        "aria-hidden": !0,
                                        tabIndex: -1,
                                        radius: "xxxl",
                                        className: ek().button,
                                        size: "s",
                                        variant: "default",
                                        color: "primary",
                                        onClick: B,
                                        children: L,
                                    }),
                                    (0, r.jsx)(A.wD, {
                                        onClick: M,
                                        shareLink: R,
                                        entityMeta: E,
                                    }),
                                ],
                            }),
                        ),
                        O = (0, n.useMemo)(() => {
                            var e;
                            return [
                                s.city,
                                s.place,
                                m(
                                    new Date(null != (e = s.datetime) ? e : ""),
                                    (0, j.LIS)(),
                                ),
                                s.contentRating,
                            ]
                                .filter(Boolean)
                                .join(" • ");
                        }, [s.city, s.place, s.datetime, s.contentRating, m]),
                        F = (0, y.L)(() => {
                            if (!u) return;
                            let e = {
                                    title: _({
                                        id: "track-modal.concert-title",
                                    }),
                                    message: u.text,
                                    isExpandable: !0,
                                    visibleLinesCount: 3,
                                },
                                t = (0, y.L)(() => {
                                    if (!u.genre) return;
                                    let e = (0, r.jsx)(eP.D, {
                                        children: u.genre,
                                    });
                                    return (0, r.jsx)(eP.O, {
                                        title: _({ id: "track-modal.genre" }),
                                        infoDescription: e,
                                    });
                                }),
                                a = (0, y.L)(() => {
                                    if (!s.contentRating) return;
                                    let e = (0, r.jsx)(eP.D, {
                                        children: s.contentRating,
                                    });
                                    return (0, r.jsx)(eP.O, {
                                        title: _({
                                            id: "track-modal.content-rating",
                                        }),
                                        infoDescription: e,
                                    });
                                }),
                                i = (0, y.L)(() => {
                                    if (!u.source) return;
                                    let e = (0, r.jsx)(eP.D, {
                                        children: u.source,
                                    });
                                    return (0, r.jsx)(eP.O, {
                                        title: _({ id: "track-modal.source" }),
                                        infoDescription: e,
                                    });
                                }),
                                l = (0, r.jsxs)("div", {
                                    className: ek().bottomContent,
                                    children: [t, a, i],
                                });
                            return (0, r.jsx)("div", {
                                className: ek().overview,
                                children: (0, r.jsx)(eb.Fn, {
                                    modalClassName: (0, o.$)(
                                        ek().overviewModal,
                                        ek().important,
                                    ),
                                    textButton: _({
                                        id: "interface-actions.more-details",
                                    }),
                                    buttonClassName: (0, o.$)(
                                        ek().overviewButton,
                                        ek().important,
                                    ),
                                    messageModalClassName:
                                        ek().overviewMessageModal,
                                    messageClassName: ek().overviewMessage,
                                    creditsModal: l,
                                    meta: e,
                                    withShowButton: !0,
                                }),
                            });
                        }),
                        W = (0, n.useMemo)(
                            () =>
                                (0, r.jsxs)("div", {
                                    className: ek().meta,
                                    children: [
                                        O &&
                                            (0, r.jsx)(v.Caption, {
                                                variant: "span",
                                                type: "text",
                                                size: "m",
                                                weight: "medium",
                                                children: O,
                                            }),
                                        s.cashbackTitle &&
                                            (0, r.jsx)(eC.mi, {
                                                className: ek().cashbackBadge,
                                                title: s.cashbackTitle,
                                            }),
                                        F,
                                    ],
                                }),
                            [s.cashbackTitle, O, F],
                        ),
                        V = (0, y.L)(() => {
                            if (!d) return;
                            let { href: e } = (0, j.uvd)("/artist/:artistId", {
                                params: { artistId: d },
                            });
                            return e;
                        });
                    return (0, r.jsxs)("div", {
                        ref: k,
                        "data-intersection-property-id": N,
                        className: ek().root,
                        children: [
                            (0, r.jsx)(I, {
                                onTitleLinkClick: S,
                                linkTitle: V,
                                ref: i,
                                className: (0, o.$)(a, ek().root),
                                infoClassName: ek().info,
                                titleClassName: ek().title,
                                entityName: "",
                                title: s.title || "",
                                meta: W,
                                coverCellClassName: ek().coverCell,
                                cover: (0, r.jsx)(ee, {
                                    buttonClassName: (0, o.$)(
                                        ek().coverButton,
                                        ek().important,
                                    ),
                                    className: ek().cover,
                                    onClick: l,
                                    "aria-label": l
                                        ? _({
                                              id: "slider.view-concert-covers",
                                          })
                                        : void 0,
                                    customCover: (0, r.jsx)(eC.Wt, {
                                        datetime: s.datetime,
                                        coverColor:
                                            null == c ? void 0 : c.color,
                                        uri: null == c ? void 0 : c.uri,
                                        withMask: !0,
                                    }),
                                }),
                                controls: z,
                                headingVariant: "h1",
                            }),
                            (0, r.jsx)(eC.hW, {
                                dataSessionId: s.dataSessionId,
                                isOpened: p,
                                onOpen: x,
                                onClose: g,
                            }),
                        ],
                    });
                }),
                ew = (0, n.forwardRef)((e, t) =>
                    (0, r.jsx)(eN, { forwardRef: t, ...e }),
                );
            var eT = {
                    5881: (e, t, a) => {
                        function i() {
                            for (
                                var e, t, a = 0, i = "";
                                a < arguments.length;

                            )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            r = "";
                                        if (
                                            "string" == typeof t ||
                                            "number" == typeof t
                                        )
                                            r += t;
                                        else if ("object" == typeof t)
                                            if (Array.isArray(t))
                                                for (a = 0; a < t.length; a++)
                                                    t[a] &&
                                                        (i = e(t[a])) &&
                                                        (r && (r += " "),
                                                        (r += i));
                                            else
                                                for (a in t)
                                                    t[a] &&
                                                        (r && (r += " "),
                                                        (r += a));
                                        return r;
                                    })(e)) &&
                                    (i && (i += " "), (i += t));
                            return i;
                        }
                        a.r(t), a.d(t, { clsx: () => i, default: () => r });
                        let r = i;
                    },
                    4092: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root: "sLuudThzDxW_5ARYjgjx",
                            horizontal: "xd6ji7lvp0et4nirt0TL",
                            hasLabel: "abbPp8VtL2D_PdW0Q_Wc",
                            vertical: "sMz62rSqViFDkXAMfGeO",
                        };
                    },
                    7327: (e, t) => {
                        var a = Symbol.for("react.transitional.element");
                        function i(e, t, i) {
                            var r = null;
                            if (
                                (void 0 !== i && (r = "" + i),
                                void 0 !== t.key && (r = "" + t.key),
                                "key" in t)
                            )
                                for (var o in ((i = {}), t))
                                    "key" !== o && (i[o] = t[o]);
                            else i = t;
                            return {
                                $$typeof: a,
                                type: e,
                                key: r,
                                ref: void 0 !== (t = i.ref) ? t : null,
                                props: i,
                            };
                        }
                        (t.Fragment = Symbol.for("react.fragment")),
                            (t.jsx = i),
                            (t.jsxs = i);
                    },
                    1082: (e, t, a) => {
                        e.exports = a(7327);
                    },
                    5455: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.Divider = void 0);
                        let r = a(1082),
                            o = a(5881),
                            l = i(a(4092));
                        t.Divider = (e) => {
                            let {
                                    className: t,
                                    orientation: a = "horizontal",
                                    children: i,
                                    ...n
                                } = e,
                                s = i && (0, r.jsx)("span", { children: i });
                            return (0, r.jsx)("div", {
                                className: (0, o.clsx)(
                                    l.default.root,
                                    {
                                        [l.default[a]]: a,
                                        [l.default.hasLabel]: s,
                                    },
                                    t,
                                ),
                                ...n,
                                role: "separator",
                                "aria-orientation": a,
                                children: s,
                            });
                        };
                    },
                },
                eL = {};
            function eH(e) {
                var t = eL[e];
                if (void 0 !== t) return t.exports;
                var a = (eL[e] = { exports: {} });
                return eT[e].call(a.exports, a, a.exports, eH), a.exports;
            }
            (eH.d = (e, t) => {
                for (var a in t)
                    eH.o(t, a) &&
                        !eH.o(e, a) &&
                        Object.defineProperty(e, a, {
                            enumerable: !0,
                            get: t[a],
                        });
            }),
                (eH.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (eH.r = (e) => {
                    "undefined" != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module",
                        }),
                        Object.defineProperty(e, "__esModule", { value: !0 });
                });
            var eB = {};
            (() => {
                Object.defineProperty(eB, "__esModule", { value: !0 }),
                    (eB.Divider = void 0);
                var e = eH(5455);
                Object.defineProperty(eB, "Divider", {
                    enumerable: !0,
                    get: function () {
                        return e.Divider;
                    },
                });
            })();
            var eI = eB.Divider;
            eB.__esModule;
            var eM = a(78257),
                eS = a(57793),
                eR = a.n(eS);
            let eD = (0, l.PA)((e) => {
                    var t;
                    let {
                            album: a,
                            actionButton: i,
                            className: o,
                            "aria-labelledby": l,
                            forwardRef: s,
                            onVersionClick: c,
                        } = e,
                        { formatMessage: u } = (0, h.A)(),
                        {
                            shouldShowBuySubscriptionModal: _,
                            showBuySubscriptionModal: m,
                        } = (0, j.qBP)(),
                        { from: p, utmLink: x } = (0, j.fyy)({
                            pageId: j._Q$.ALBUM,
                            blockId: j.UfI.ALBUM,
                            contextType: z.K.Album,
                            contextId: a.id,
                        }),
                        {
                            user: g,
                            disclaimer: y,
                            settings: { isMobile: b },
                            sonataState: P,
                            modals: { imageSliderModal: k },
                            experiments: N,
                        } = (0, j.Pjs)(),
                        w = (0, j.brA)(),
                        T = (0, j.PT7)(),
                        L = (0, j.$hw)(a.isLiked, a.type),
                        H = (0, O.r_)(a.type),
                        B = a.isAvailable || a.isAudiobook,
                        M = !!a.coverUri,
                        S = (0, n.useMemo)(() => {
                            if (a.shouldShowBooksBadge)
                                return (0, r.jsx)(C.Icon, {
                                    variant: "booksLogo",
                                    className: eR().booksLogo,
                                });
                        }, [a.shouldShowBooksBadge]),
                        R = !g.hasPlus && a.isAvailableOnlyForPlus,
                        D =
                            !a.isAvailable &&
                            !R &&
                            N.checkExperiment(
                                j.zal.WebNextPlusLandingLink,
                                "on",
                            ),
                        U =
                            (a.isPodcast &&
                                a.isForeignAgent &&
                                (null == (t = y.data) ? void 0 : t.title)) ||
                            void 0,
                        { isPlaying: F, togglePlay: W } = (0, j.Dx4)({
                            playContextParams: {
                                contextData: {
                                    type: z.K.Album,
                                    meta: { id: a.id },
                                    from: p,
                                    utmLink: x,
                                },
                                loadContextMeta: !0,
                                entitiesData: P.unloadedEntitiesDataFromModels,
                            },
                        }),
                        V = (0, f.c)(() => {
                            a.coverUri &&
                                k.openImages({ images: [a.coverUri] });
                        }),
                        Q = (0, f.c)(() => {
                            if (!T()) {
                                if (_) return void m();
                                W(), w(!F);
                            }
                        }),
                        K = (0, n.useMemo)(
                            () =>
                                R
                                    ? (0, r.jsx)(A.w1, {
                                          className: eR().plusPaywallButton,
                                          albumType: a.type,
                                      })
                                    : b
                                      ? (0, r.jsx)(A.DM, {
                                            className: ea().playControl,
                                            color: "primary",
                                            buttonVariant: "default",
                                            iconSize: "xxl",
                                            isPlaying: F,
                                            onClick: Q,
                                            variant: "filled",
                                            disabled: !a.isAvailable,
                                        })
                                      : (0, r.jsx)(A.DM, {
                                            className: ea().playControl,
                                            withRipple: !0,
                                            buttonVariant: "default",
                                            radius: "xxxl",
                                            size: "s",
                                            color: "primary",
                                            iconSize: "xxs",
                                            isPlaying: F,
                                            onClick: Q,
                                            disabled: !a.isAvailable,
                                            children: (0, r.jsx)(E.A, {
                                                id: "player-actions.listen",
                                            }),
                                        }),
                            [R, b, F, Q, a.isAvailable, a.type],
                        ),
                        $ = (0, n.useMemo)(
                            () =>
                                (0, r.jsxs)("div", {
                                    className: eR().controlsBlock,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: ea().controlsContainer,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: ea().controls,
                                                    ...(0, d.Am)(
                                                        d.e8.pageHeader
                                                            .NON_MUSIC_PAGE_HEADER_CONTROLS,
                                                    ),
                                                    children: [
                                                        K,
                                                        (0, r.jsx)(Y, {
                                                            album: a,
                                                            likeButtonAriaLabel:
                                                                L,
                                                            withLikeButton: !R,
                                                        }),
                                                    ],
                                                }),
                                                i &&
                                                    (0, r.jsx)("div", {
                                                        className:
                                                            ea().controls,
                                                        children: i,
                                                    }),
                                            ],
                                        }),
                                        D &&
                                            (0, r.jsxs)("div", {
                                                className: eR().plusLinkBlock,
                                                children: [
                                                    b &&
                                                        (0, r.jsx)(eI, {
                                                            className:
                                                                eR().divider,
                                                        }),
                                                    (0, r.jsxs)(v.Caption, {
                                                        className:
                                                            eR()
                                                                .plusLinkContainer,
                                                        variant: "div",
                                                        type: "controls",
                                                        size: "m",
                                                        children: [
                                                            (0, r.jsxs)(eM.N, {
                                                                href: "https://music.yandex.ru/promo/lt-pay-promo/?get-plus=1&utm_source=music&utm_medium=non_music_tab&utm_campaign=web_music_birthday",
                                                                target: "_blank",
                                                                className:
                                                                    eR()
                                                                        .plusLink,
                                                                children: [
                                                                    (0, r.jsx)(
                                                                        C.Icon,
                                                                        {
                                                                            variant:
                                                                                "info",
                                                                            size: "xxs",
                                                                        },
                                                                    ),
                                                                    "\xa0",
                                                                    (0, r.jsx)(
                                                                        E.A,
                                                                        {
                                                                            id: "payment.get-plus",
                                                                        },
                                                                    ),
                                                                ],
                                                            }),
                                                            "\xa0",
                                                            (0, r.jsx)(E.A, {
                                                                id: "payment.listen-to-books-and-podcasts",
                                                            }),
                                                        ],
                                                    }),
                                                    b &&
                                                        (0, r.jsx)(eI, {
                                                            className:
                                                                eR().divider,
                                                        }),
                                                ],
                                            }),
                                    ],
                                }),
                            [K, a, L, R, i, D, b],
                        ),
                        q = (0, n.useMemo)(
                            () =>
                                (0, r.jsx)("div", {
                                    className: eR().meta,
                                    children: (0, r.jsx)(Z, { album: a }),
                                }),
                            [a],
                        );
                    return (0, r.jsx)(I, {
                        ref: s,
                        headingVariant: "h1",
                        className: o,
                        controls: $,
                        meta: q,
                        entityName: H,
                        entityNameIcon: S,
                        title: a.title,
                        cover: (0, r.jsx)(ee, {
                            coverVariant: "square",
                            coverUri: a.coverUri,
                            isAvailable: B,
                            withPlusBadge: a.isAvailableOnlyForPlus,
                            onClick: M ? V : void 0,
                            "aria-label": M
                                ? u({ id: "slider.view-cover" })
                                : void 0,
                        }),
                        "aria-labelledby": l,
                        version: a.version,
                        onVersionClick: c,
                        disclaimerLabel: U,
                    });
                }),
                eE = (0, n.forwardRef)((e, t) =>
                    (0, r.jsx)(eD, { forwardRef: t, ...e }),
                );
            var ez = a(6935),
                eO = a(17846),
                eU = a(25911),
                eF = a(66098),
                eW = a(49444),
                eV = a(18506),
                eY = a.n(eV);
            let eQ = (0, l.PA)((e) => {
                let { trackIds: t, className: a, onRemove: i } = e,
                    { slam: l } = (0, j.Pjs)(),
                    s = (0, j.AN5)(),
                    { formatMessage: d } = (0, h.A)(),
                    c = (0, eW.j)(),
                    [u, _] = (0, n.useState)(!1),
                    m = l.isPlaylistDownloaded(t),
                    p = l.isPlaylistDownloading(t),
                    x = l.getPlaylistDownloadingProgress(t),
                    g = (0, f.c)(() => {
                        if (p) {
                            null == s || s.stopDownload(t);
                            return;
                        }
                        if (m) return void _(!0);
                        null == s || s.download(t),
                            c.count(
                                j.xQR.MY_FAVORITES_PLAYLIST_DOWNLOAD,
                                j.l6e,
                            );
                    }),
                    y = (0, f.c)(() => {
                        null == s || s.delete(t),
                            c.count(j.xQR.MY_FAVORITES_PLAYLIST_DELETE, j.l6e),
                            null == i || i();
                    }),
                    P = (0, n.useMemo)(
                        () =>
                            m
                                ? (0, r.jsx)(C.Icon, {
                                      variant: "check",
                                      size: "xxs",
                                      className: eY().downloadedIcon,
                                  })
                                : p
                                  ? (0, r.jsx)(A.AD, {
                                        value: null != x ? x : 0,
                                        size: 26,
                                        withCancelIcon: !0,
                                        className: eY().downloadingProgress,
                                        progressBarClassName: eY().progress,
                                        cancelIconClassName: eY().cancelIcon,
                                    })
                                  : (0, r.jsx)(C.Icon, {
                                        variant: "download",
                                        size: "xxs",
                                    }),
                        [m, p, x],
                    ),
                    k = (0, n.useMemo)(
                        () =>
                            p
                                ? d({ id: "offline.stop-downloading" })
                                : d({ id: "offline.download" }),
                        [d, p],
                    );
                return m
                    ? (0, r.jsx)(eF.W1, {
                          variant: "default",
                          size: "s",
                          radius: "xxxl",
                          icon: P,
                          offsetOptions: 10,
                          open: u,
                          onOpenChange: _,
                          wrapperClassName: a,
                          ariaLabel: d({ id: "offline.delete-from-device" }),
                          children: (0, r.jsx)(eF.Dr, {
                              icon: (0, r.jsx)(C.Icon, {
                                  variant: "upload",
                                  size: "xxs",
                              }),
                              onClick: y,
                              children: (0, r.jsx)(E.A, {
                                  id: "offline.delete-from-device",
                              }),
                          }),
                      })
                    : (0, r.jsx)(b.Button, {
                          className: (0, o.$)(
                              eY().root,
                              { [eY().root_downloading]: p },
                              a,
                          ),
                          variant: "default",
                          size: "s",
                          radius: "xxxl",
                          icon: P,
                          "aria-label": k,
                          onClick: g,
                          children:
                              p &&
                              (0, r.jsx)(v.Caption, {
                                  variant: "div",
                                  className: eY().progressText,
                                  children: (0, r.jsx)(E.A, {
                                      id: "offline.downloading-progress",
                                      values: { value: x },
                                  }),
                              }),
                      });
            });
            var eK = a(3413),
                e$ = a.n(eK),
                eq = a(33492),
                eX = a(37488),
                eZ = a.n(eX);
            let eJ = (0, l.PA)((e) => {
                var t, a, i;
                let { playlistUuid: o } = e,
                    l = (0, eq.hc)(),
                    n = (0, j.Zzs)({
                        objectId: o,
                        link:
                            null == (a = l.data) || null == (t = a.button)
                                ? void 0
                                : t.href,
                    });
                return l.isEnabled && (null == (i = l.data) ? void 0 : i.button)
                    ? (0, r.jsx)(eM.N, {
                          className: eZ().root,
                          href: l.data.button.href,
                          target: "_blank",
                          onClick: n,
                          children: (0, r.jsx)(v.Caption, {
                              variant: "span",
                              type: "text",
                              size: "s",
                              weight: "medium",
                              lineClamp: 1,
                              children: l.data.button.text,
                          }),
                      })
                    : null;
            });
            var eG = a(30293);
            let e0 = ["image/png", "image/jpeg", "image/jpg"];
            var e1 = a(56616),
                e8 = a.n(e1);
            let e7 = (0, l.PA)((e) => {
                let { className: t, playlist: a } = e,
                    {
                        settings: { isMobile: i },
                        playlist: { isRewind2024Playlist: l },
                        modals: { imageSliderModal: s },
                    } = (0, j.Pjs)(),
                    c = a.coverUri,
                    u = a.canUserChange && !i,
                    { notify: _ } = (0, j.lkh)(),
                    { formatMessage: m } = (0, h.A)(),
                    p = (0, n.useRef)(null),
                    [v, x] = (0, n.useState)(c || ""),
                    [g, y] = (0, n.useState)(u),
                    [C, P] = (0, n.useState)(new FormData()),
                    k = (0, eG.createAvatarUrl)(c || "", 600, !1),
                    N = (0, eG.createAvatarUrl)(c || "", 300, !1),
                    [w, T] = (0, n.useState)(k),
                    [L, H] = (0, n.useState)(!1),
                    B = !!c,
                    I = (0, n.useMemo)(
                        () =>
                            l && a.personalColor
                                ? (0, j.mBl)(a.personalColor)
                                : null,
                        [l, a.personalColor],
                    );
                (0, n.useEffect)(() => {
                    g !== u && y(u);
                }, [u, g]);
                let M = (0, n.useCallback)(
                        () =>
                            _(
                                (0, r.jsx)(A.hT, {
                                    error: m({
                                        id: "playlist-errors.failed-to-change-poster",
                                    }),
                                }),
                                { containerId: j.uQT.ERROR },
                            ),
                        [_, m],
                    ),
                    S = (0, f.c)(() => {
                        c && !L && s.openImages({ images: [c] });
                    }),
                    R = (0, f.c)((e) => {
                        var t;
                        null == e || e.stopPropagation(),
                            null == p || null == (t = p.current) || t.click();
                    }),
                    D = (0, f.c)((e) => {
                        e.stopPropagation(), "Enter" === e.key && R();
                    }),
                    E = (0, f.c)((e) => {
                        e.stopPropagation();
                    }),
                    z = (0, f.c)((e) => {
                        let t,
                            a = e.target,
                            i = (a.files || [])[0] || null;
                        if (
                            ((a.value = ""),
                            !i ||
                                ((t = i.type), !e0.includes(t)) ||
                                !((e) => e > 0 && e <= 2e7)(i.size))
                        )
                            return void M();
                        v && T(v), y(!1), x(URL.createObjectURL(i));
                        let r = new FormData();
                        r.append("image", i), P(r);
                    }),
                    O = (0, n.useCallback)(
                        async (e) => {
                            let t = e.target,
                                i = () => {
                                    x(w), M(), y(!0);
                                };
                            if (
                                (c &&
                                    (t.currentSrc === k ||
                                        t.currentSrc === N)) ||
                                !u ||
                                w === t.currentSrc
                            )
                                return;
                            if (
                                !((e) => {
                                    if (!e) return;
                                    let t = 2 * e.naturalHeight || e.height,
                                        a = 2 * e.naturalWidth || e.width;
                                    return t < 5e3 && a < 5e3;
                                })(t)
                            )
                                return void i();
                            H(!0);
                            let r = await a.changePlaylistCover(C);
                            H(!1), r === j.FlZ.ERROR ? i() : y(!0);
                        },
                        [M, w, a, C, c, u, k, N],
                    ),
                    U = (0, n.useMemo)(
                        () =>
                            v
                                ? m({ id: "playlist-actions.change-poster" })
                                : m({ id: "playlist-actions.add-poster" }),
                        [v, m],
                    );
                return (0, r.jsxs)(Q.Paper, {
                    radius: "m",
                    className: (0, o.$)(e8().root, t, {
                        [e8().root_hoverable]: B,
                    }),
                    children: [
                        (0, r.jsx)("div", {
                            className: e8().backCoverColor,
                            style: I,
                            children: (0, r.jsx)(b.Button, {
                                onClick: S,
                                "aria-label": B
                                    ? m({ id: "slider.view-cover" })
                                    : void 0,
                                tabIndex: B ? 0 : -1,
                                disabled: !B,
                                className: e8().coverButton,
                                children: (0, r.jsx)(A.BW, {
                                    fit: "cover",
                                    src: v,
                                    size: 300,
                                    className: e8().coverImage,
                                    withAvatarReplace: !0,
                                    onLoad: O,
                                }),
                            }),
                        }),
                        g &&
                            (0, r.jsx)("div", {
                                className: (0, o.$)(e8().buttonContainer, {
                                    [e8().buttonContainer_withCursorPointer]: v,
                                }),
                                onClick: B ? S : void 0,
                                children: (0, r.jsxs)("div", {
                                    className: (0, o.$)(
                                        e8().fileUploadContainer,
                                        {
                                            [e8().fileUploadContainer_hovered]:
                                                v,
                                        },
                                    ),
                                    children: [
                                        (0, r.jsx)(b.Button, {
                                            className: e8().button,
                                            radius: "xxxl",
                                            size: "xxs",
                                            color: "secondary",
                                            withRipple: !1,
                                            onClick: R,
                                            onKeyUp: D,
                                            "aria-label": m({
                                                id: "playlist-actions.add-poster",
                                            }),
                                            ...(0, d.Am)(
                                                d.e8.pageHeader
                                                    .PLAYLIST_HEADER_ADD_COVER_BUTTON,
                                            ),
                                            children: U,
                                        }),
                                        (0, r.jsx)("form", {
                                            className: e8().formFile,
                                            encType: "multipart/form-data",
                                            children: (0, r.jsx)("input", {
                                                ref: p,
                                                type: "file",
                                                name: "file",
                                                accept: "image/jpeg, image/png, image/jpg",
                                                onChange: z,
                                                onClick: E,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                    ],
                });
            });
            var e2 = a(22344),
                e3 = a.n(e2),
                e4 = a(64802);
            let e5 = (0, l.PA)((e) => {
                    let { playlist: t, className: a } = e,
                        { formatMessage: i } = (0, h.A)(),
                        o = (0, n.useCallback)(
                            (e, t) => {
                                switch (e) {
                                    case j.rdQ.TODAY:
                                        return i(
                                            {
                                                id: "interface-actions.playlist-made-for-today",
                                            },
                                            t,
                                        );
                                    case j.rdQ.YESTERDAY:
                                        return i(
                                            {
                                                id: "interface-actions.playlist-made-for-yesterday",
                                            },
                                            t,
                                        );
                                    case j.rdQ.DATE_WITH_YEAR:
                                        return i(
                                            {
                                                id: "interface-actions.playlist-made-for-date-with-year",
                                            },
                                            t,
                                        );
                                    default:
                                        return i(
                                            {
                                                id: "interface-actions.playlist-made-for-date",
                                            },
                                            t,
                                        );
                                }
                            },
                            [i],
                        ),
                        l = (0, n.useCallback)(
                            (e, t) => {
                                switch (e) {
                                    case j.rdQ.TODAY:
                                        return i(
                                            {
                                                id: "interface-actions.updated-playlist-today",
                                            },
                                            t,
                                        );
                                    case j.rdQ.YESTERDAY:
                                        return i(
                                            {
                                                id: "interface-actions.updated-playlist-yesterday",
                                            },
                                            t,
                                        );
                                    case j.rdQ.DATE_WITH_YEAR:
                                        return i(
                                            {
                                                id: "interface-actions.updated-playlist-date-with-year",
                                            },
                                            t,
                                        );
                                    default:
                                        return i(
                                            {
                                                id: "interface-actions.updated-playlist-date",
                                            },
                                            t,
                                        );
                                }
                            },
                            [i],
                        ),
                        s = (0, n.useMemo)(() => {
                            var e, a, i, r, n, s, d;
                            let c = new Date(t.modified),
                                u = (0, j.LkW)(c);
                            return t.madeFor
                                ? o(u, {
                                      playlistReceiver:
                                          (null == t ||
                                          null == (r = t.madeFor) ||
                                          null == (i = r.caseForms)
                                              ? void 0
                                              : i.genitive) ||
                                          (null == t ||
                                          null == (s = t.madeFor) ||
                                          null == (n = s.userInfo)
                                              ? void 0
                                              : n.login) ||
                                          "",
                                      updateDate: c,
                                  })
                                : t.isFavouritePlaylist
                                  ? (null == (d = t.owner) ? void 0 : d.name) ||
                                    ""
                                  : l(u, {
                                        updateDate: new Date(t.modified),
                                        ownerName:
                                            (null == (e = t.owner)
                                                ? void 0
                                                : e.name) || "",
                                        gender:
                                            (null == (a = t.owner)
                                                ? void 0
                                                : a.sex) === e4.U.FEMALE
                                                ? "female"
                                                : "male",
                                    });
                        }, [t, o, l]);
                    return (0, r.jsx)(v.Caption, {
                        variant: "span",
                        className: a,
                        type: "text",
                        size: "m",
                        weight: "medium",
                        lineClamp: 1,
                        ...(0, d.Am)(
                            d.e8.pageHeader.PLAYLIST_HEADER_UPDATED_TEXT,
                        ),
                        children: s,
                    });
                }),
                e6 = (0, l.PA)((e) => {
                    let { playlist: t } = e,
                        { formatMessage: a } = (0, h.A)(),
                        {
                            settings: { isMobile: i },
                        } = (0, j.Pjs)(),
                        { notify: l } = (0, j.lkh)(),
                        s = t.canUserChange && !i,
                        c = !!t.description,
                        {
                            state: u,
                            toggleTrue: _,
                            toggleFalse: m,
                        } = (0, ey.e)(!1),
                        [p, x] = (0, n.useState)(t.description || ""),
                        g = (0, n.useCallback)(async () => {
                            m(),
                                (await t.changeDescription(p)) ===
                                    j.FlZ.ERROR &&
                                    l(
                                        (0, r.jsx)(A.hT, {
                                            error: a({
                                                id: "playlist-errors.failed-to-change-description",
                                            }),
                                        }),
                                        { containerId: j.uQT.ERROR },
                                    );
                        }, [a, p, l, t, m]),
                        f = (0, n.useCallback)((e) => {
                            x(e);
                        }, []),
                        y = (0, n.useMemo)(
                            () =>
                                (0, j.rVI)(t.description, A.N_, {
                                    className: e3().descriptionLink,
                                }),
                            [t.description],
                        ),
                        C = (0, n.useMemo)(
                            () =>
                                t.tagsString
                                    ? (0, r.jsx)(v.Caption, {
                                          variant: "span",
                                          type: "text",
                                          size: "m",
                                          weight: "medium",
                                          children: (0, r.jsx)(E.A, {
                                              id: "entity-names.tags",
                                              values: { tags: t.tagsString },
                                          }),
                                      })
                                    : null,
                            [t.tagsString],
                        );
                    return (0, r.jsxs)("div", {
                        className: e3().root,
                        children: [
                            c &&
                                !u &&
                                (0, r.jsxs)(v.Caption, {
                                    variant: "span",
                                    className: e3().description,
                                    type: "text",
                                    size: "m",
                                    weight: "medium",
                                    children: [
                                        y,
                                        s &&
                                            (0, r.jsx)(b.Button, {
                                                variant: "text",
                                                withRipple: !1,
                                                onClick: _,
                                                className: (0, o.$)(
                                                    e3().descriptionActionLink,
                                                    e3().addDescription,
                                                ),
                                                "aria-label": a({
                                                    id: "playlist-actions.change-description",
                                                }),
                                                color: "primary",
                                                ...(0, d.Am)(
                                                    d.e8.pageHeader
                                                        .PLAYLIST_HEADER_CHANGE_DESCRIPTION_BUTTON,
                                                ),
                                                children: (0, r.jsx)(
                                                    v.Caption,
                                                    {
                                                        variant: "span",
                                                        size: "m",
                                                        type: "text",
                                                        className: e3().button,
                                                        children: (0, r.jsx)(
                                                            E.A,
                                                            {
                                                                id: "playlist-actions.change-description-abbr",
                                                            },
                                                        ),
                                                    },
                                                ),
                                            }),
                                    ],
                                }),
                            !c &&
                                s &&
                                !u &&
                                (0, r.jsx)(b.Button, {
                                    variant: "text",
                                    withRipple: !1,
                                    onClick: _,
                                    className: e3().descriptionActionLink,
                                    "aria-label": a({
                                        id: "playlist-actions.add-description",
                                    }),
                                    color: "primary",
                                    ...(0, d.Am)(
                                        d.e8.pageHeader
                                            .PLAYLIST_HEADER_ADD_DESCRIPTION_BUTTON,
                                    ),
                                    children: (0, r.jsxs)(v.Caption, {
                                        variant: "span",
                                        size: "m",
                                        type: "text",
                                        className: e3().button,
                                        children: [
                                            (0, r.jsx)(E.A, {
                                                id: "playlist-actions.add-description",
                                            }),
                                            "...",
                                        ],
                                    }),
                                }),
                            s &&
                                u &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(w, {
                                            text: t.description,
                                            className: e3().textField,
                                            placeholder: "".concat(
                                                a({
                                                    id: "playlist-actions.add-description",
                                                }),
                                                "...",
                                            ),
                                            maxTextLength: eU.iz,
                                            onChangeFinish: f,
                                            variant: "textarea",
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: e3().actionButtons,
                                            children: [
                                                (0, r.jsx)(b.Button, {
                                                    className: e3().saveButton,
                                                    color: "secondary",
                                                    radius: "xxxl",
                                                    size: "s",
                                                    "aria-label": a({
                                                        id: "interface-actions.save",
                                                    }),
                                                    onClick: g,
                                                    withHover: !0,
                                                    children: (0, r.jsx)(E.A, {
                                                        id: "interface-actions.save",
                                                    }),
                                                }),
                                                (0, r.jsx)(b.Button, {
                                                    variant: "text",
                                                    withRipple: !1,
                                                    onClick: m,
                                                    className:
                                                        e3().cancelButton,
                                                    "aria-label": a({
                                                        id: "interface-actions.cancel",
                                                    }),
                                                    color: "primary",
                                                    children: (0, r.jsx)(
                                                        v.Caption,
                                                        {
                                                            variant: "span",
                                                            size: "m",
                                                            type: "text",
                                                            className:
                                                                e3().button,
                                                            children: (0,
                                                            r.jsx)(E.A, {
                                                                id: "interface-actions.cancel",
                                                            }),
                                                        },
                                                    ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(e5, {
                                className: e3().updatedText,
                                playlist: t,
                            }),
                            C,
                        ],
                    });
                });
            var e9 = a(38884),
                te = a.n(e9);
            let tt = (0, l.PA)((e) => {
                let { playlist: t } = e,
                    a = (0, n.useRef)(null),
                    { ugcUploadCenter: i } = (0, j.Pjs)(),
                    { formatMessage: o } = (0, h.A)(),
                    l = (0, n.useCallback)(() => {
                        var e;
                        null == a || null == (e = a.current) || e.click();
                    }, [a]),
                    s = (0, n.useCallback)(
                        (e) => {
                            let a = e.target.files;
                            a && a.length > 0 && i.appendFiles([...a], t),
                                (e.target.value = "");
                        },
                        [t, i],
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(b.Button, {
                            size: "s",
                            radius: "xxxl",
                            "aria-label": o({ id: "ugc.upload-track" }),
                            className: te().button,
                            onClick: l,
                            ...(0, d.Am)(
                                d.e8.pageHeader
                                    .PLAYLIST_HEADER_UPLOAD_UGC_BUTTON,
                            ),
                            children: o({ id: "ugc.upload-track" }),
                        }),
                        (0, r.jsx)("form", {
                            className: te().form,
                            encType: "multipart/form-data",
                            children: (0, r.jsx)("input", {
                                ref: a,
                                type: "file",
                                accept: "audio/*",
                                onChange: s,
                                multiple: !0,
                            }),
                        }),
                    ],
                });
            });
            var ta = a(28996);
            let ti = (0, l.PA)((e) => {
                    var t, a, i, o;
                    let {
                            playlist: l,
                            onOpenChange: s,
                            open: c,
                            wrapperClassName: u,
                            ..._
                        } = e,
                        {
                            shouldShowBuySubscriptionModal: m,
                            showBuySubscriptionModal: p,
                        } = (0, j.qBP)(),
                        {
                            settings: { isMobile: v },
                            trailer: x,
                            playlist: {
                                filters: {
                                    activeFilter: g,
                                    analyticsParamsActiveFilterIndex: y,
                                },
                            },
                            user: b,
                            experiments: P,
                        } = (0, j.Pjs)(),
                        k = (0, eU.KX)(l),
                        N = P.checkExperiment(j.zal.WebEditorsFeatures, "on"),
                        w = (0, eU.A7)(l),
                        T = (0, j.Ftl)(),
                        L = ""
                            .concat(j.UfI.PLAYLIST, "-")
                            .concat(l.uid, "_")
                            .concat(l.kind),
                        H = l.canUserChange,
                        { utmLink: B } = (0, j.fyy)({
                            pageId: j._Q$.PLAYLIST,
                            blockId: j.UfI.PLAYLIST,
                            contextType: z.K.Playlist,
                            contextId: l.uuid,
                            pageEntityId: l.uuid,
                        }),
                        I = (0, j.PT7)(),
                        { notify: M } = (0, j.lkh)(),
                        { formatMessage: S } = (0, h.A)(),
                        R = (0, eO.useRouter)(),
                        D = (0, n.useMemo)(
                            () => ({
                                objectId: l.seeds[0],
                                tabId: g,
                                tabPos: y,
                            }),
                            [l.seeds, g, y],
                        ),
                        O = (0, j.V8i)(D),
                        { shareLink: F, pathname: W } = (0, j.bNS)(
                            "/playlists/:playlistUuid",
                            { params: { playlistUuid: l.uuid } },
                        ),
                        V = (0, ta.A_)({
                            entityVariant: j.DwC.PLAYLIST,
                            urlParams: { id: l.uid, kind: l.kind },
                        }),
                        { isPlaying: Y, togglePlay: Q } = (0, j.B0S)({
                            seeds: null != (o = l.seeds) ? o : [],
                            pageIdForFrom: j._Q$.RADIO,
                            blockIdForFrom: L,
                            parentContextId: l.uuid,
                        }),
                        K = (0, f.c)(() => {
                            if (m && b.isAuthorized) return void p();
                            !I() && (Y || (Q(), O()));
                        }),
                        $ = (0, f.c)(() => {
                            if (m) return void p();
                            I() ||
                                (x.setUtmLink(B),
                                x.openPlaylistTrailer(l.id),
                                T(U.ky.Playlist, l.id));
                        }),
                        q = (0, f.c)(async () => {
                            if ((await l.deletePlaylist()) === j.FlZ.ERROR)
                                return void M(
                                    (0, r.jsx)(A.hT, {
                                        error: S({
                                            id: "playlist-errors.failed-to-remove-playlist",
                                        }),
                                    }),
                                    { containerId: j.uQT.ERROR },
                                );
                            R.push(j.Zyd.collection.href);
                        });
                    (0, j.NBO)(c);
                    let X =
                            (l.isPublic || l.isFavouritePlaylist) &&
                            l.isAvailable,
                        Z = {
                            variant: j.Yxq.PLAYLIST,
                            id: l.kind,
                            title: l.title,
                            path: W,
                            playlistOwnerName:
                                null == (t = l.owner) ? void 0 : t.name,
                            playlistOwnerLogin:
                                null == (a = l.owner) ? void 0 : a.login,
                        };
                    return (0, r.jsxs)(eF.W1, {
                        isMobile: v,
                        offsetOptions: 10,
                        open: c,
                        onOpenChange: s,
                        ariaLabel: S({ id: "interface-actions.context-menu" }),
                        wrapperClassName: u,
                        ..._,
                        containerProps: (0, d.Am)(
                            d.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                        ),
                        children: [
                            N &&
                                (0, r.jsx)(ta.dx, {
                                    entityVariant: j.DwC.PLAYLIST,
                                    adminUrl: l.isFavouritePlaylist
                                        ? void 0
                                        : V,
                                    withPlaylistPageFeatures: !0,
                                }),
                            !v &&
                                (0, r.jsx)(A.L1, {
                                    onClick: w,
                                    isPinned: l.isPinned,
                                }),
                            !l.isFavouritePlaylist &&
                                (0, r.jsx)(A.TW, {
                                    onClick: k,
                                    isLiked: l.isLiked,
                                    disabled: !b.isAuthorized,
                                }),
                            (null == (i = l.trailer)
                                ? void 0
                                : i.isAvailable) &&
                                (0, r.jsx)(A.No, { onClick: $ }),
                            (0, r.jsx)(A.C6, {
                                disabled: !l.isAvailable,
                                onClick: K,
                                variant: j.IGO.PLAYLIST,
                            }),
                            (0, r.jsx)(A.Ht, {
                                disabled: !X,
                                shareLink: F,
                                entityMeta: Z,
                            }),
                            H &&
                                (0, r.jsx)(eF.Dr, {
                                    icon: (0, r.jsx)(C.Icon, {
                                        variant: "bucket",
                                        size: "xxs",
                                    }),
                                    onClick: q,
                                    children: (0, r.jsx)(E.A, {
                                        id: "playlist-actions.remove-playlist",
                                    }),
                                }),
                            H && (0, r.jsx)(eU.uY, { playlist: l }),
                        ],
                    });
                }),
                tr = (0, l.PA)((e) => {
                    var t, a;
                    let {
                            playlist: o,
                            isDisabled: l,
                            className: s,
                            forwardRef: c,
                        } = e,
                        {
                            shouldShowBuySubscriptionModal: u,
                            showBuySubscriptionModal: _,
                        } = (0, j.qBP)(),
                        { from: m, utmLink: p } = (0, j.fyy)({
                            pageId: j._Q$.PLAYLIST,
                            blockId: j.UfI.PLAYLIST,
                            contextType: z.K.Playlist,
                            contextId: o.uuid,
                            pageEntityId: o.uuid,
                        }),
                        {
                            settings: { isMobile: x },
                            sonataState: g,
                            trailer: b,
                            playlist: {
                                filters: {
                                    activeFilter: P,
                                    activeFilterName: k,
                                    analyticsParamsActiveFilterIndex: N,
                                },
                                enableVariousAutoFlow: w,
                                trackIds: T,
                                isRewind2024Playlist: L,
                                setShouldShowTrailerOnboarding: H,
                            },
                            user: B,
                        } = (0, j.Pjs)(),
                        { formatMessage: M, formatNumber: S } = (0, h.A)(),
                        [R, D] = (0, n.useState)(!1),
                        O = (0, eU.KX)(o),
                        F = (0, eU.A7)(o),
                        W = (0, j.Ftl)(),
                        V = !x,
                        Y = (0, n.useRef)(null),
                        Q = (0, n.useMemo)(
                            () => ({ objectId: o.uuid, tabId: P, tabPos: N }),
                            [o.uuid, P, N],
                        ),
                        K = (0, j.AA)(Q),
                        $ = (0, j.YAl)(Q),
                        q = (0, j.Hu_)(Q),
                        X = (0, j.s6k)(Q),
                        Z = (0, j.dtS)(Q),
                        J = (0, j.brA)(),
                        G = (0, j.PT7)(),
                        { controlSize: ee, iconSize: et } = i(x),
                        { notify: ei } = (0, j.lkh)(),
                        er = o.canUserChange && !x,
                        eo = (0, eO.useSearchParams)(),
                        el = (0, n.useMemo)(
                            () =>
                                L && o.personalColor
                                    ? (0, j.R4Z)(o.personalColor)
                                    : null,
                            [L, o.personalColor],
                        ),
                        en = (0, f.c)(() => {
                            var e;
                            null == (e = Y.current) || e.focus();
                        });
                    (0, n.useEffect)(() => {
                        R && K();
                    }, [R, K]);
                    let es = (0, f.c)(async (e) => {
                            (await o.changeTitle(e)) === j.FlZ.ERROR &&
                                ei(
                                    (0, r.jsx)(A.hT, {
                                        error: M({
                                            id: "playlist-errors.failed-to-change-title",
                                        }),
                                    }),
                                    { containerId: j.uQT.ERROR },
                                );
                        }),
                        { isPlaying: ed, togglePlay: ec } = (0, j.Dx4)({
                            playContextParams: {
                                contextData: {
                                    type: z.K.Playlist,
                                    meta: { id: o.id, uuid: o.uuid },
                                    filter: P,
                                    filterName: k,
                                    enableVariousAutoFlow: w,
                                    from: m,
                                    utmLink: p,
                                },
                                loadContextMeta: !0,
                                entitiesData: g.unloadedEntitiesDataFromModels,
                            },
                        }),
                        [eu, e_] = (0, n.useState)(ed),
                        em = (0, f.c)(() => {
                            if (!G()) {
                                if (u) return void _();
                                ec(),
                                    J(!ed),
                                    g.setPlaylistFilter(P),
                                    eu ? Z() : X();
                            }
                        });
                    (0, n.useEffect)(() => {
                        ed &&
                        (g.playlistFilter === P ||
                            ((0, ez.A)(g.playlistFilter) && (0, ez.A)(P)))
                            ? e_(!0)
                            : e_(!1);
                    }, [ed, g.playlistFilter, P]);
                    let ep = (0, n.useMemo)(() => {
                            if (o.actualLikesCount && o.actualLikesCount > 0)
                                return (0, r.jsx)(v.Caption, {
                                    variant: "span",
                                    type: "controls",
                                    size: "s",
                                    weight: "medium",
                                    children:
                                        o.actualLikesCount &&
                                        S(o.actualLikesCount),
                                });
                        }, [o.actualLikesCount, S]),
                        ev = (0, n.useMemo)(
                            () =>
                                x
                                    ? (0, r.jsx)(A.DM, {
                                          ref: Y,
                                          className: ea().playControl,
                                          color: "primary",
                                          buttonVariant: "default",
                                          iconSize: "xxl",
                                          isPlaying: eu,
                                          variant: "filled",
                                          onClick: em,
                                          disabled: l,
                                      })
                                    : (0, r.jsx)(A.DM, {
                                          ref: Y,
                                          className: ea().playControl,
                                          withRipple: !0,
                                          buttonVariant: "default",
                                          radius: "xxxl",
                                          size: "s",
                                          color: "primary",
                                          iconSize: "xxs",
                                          isPlaying: eu,
                                          onClick: em,
                                          disabled: l,
                                          children: (0, r.jsx)(E.A, {
                                              id: "player-actions.listen",
                                          }),
                                      }),
                            [l, x, em, eu],
                        ),
                        ex = (0, f.c)(() => {
                            G() ||
                                (b.setUtmLink(p),
                                b.openPlaylistTrailer(o.id),
                                W(U.ky.Playlist, o.id));
                        });
                    (0, n.useEffect)(() => {
                        var e;
                        (null == (e = o.trailer) ? void 0 : e.isAvailable) &&
                            "true" === eo.get(j.K3F.OPEN_TRAILER) &&
                            ex();
                    }, [
                        L,
                        o.personalColor,
                        ex,
                        eo,
                        H,
                        null == (t = o.trailer) ? void 0 : t.isAvailable,
                    ]);
                    let eg = (0, n.useMemo)(() => {
                            var e;
                            return (null == (e = o.trailer)
                                ? void 0
                                : e.isAvailable) && !x
                                ? (0, r.jsx)(A.cv, {
                                      children: (0, r.jsx)(A.kJ, {
                                          size: "s",
                                          radius: "xxxl",
                                          iconSize: "xxs",
                                          className: e$().trailerControl,
                                          onClick: ex,
                                          disabled: !o.isAvailable,
                                          style: el,
                                          children: (0, r.jsx)(E.A, {
                                              id: "entity-names.trailer",
                                          }),
                                      }),
                                  })
                                : null;
                        }, [
                            ex,
                            x,
                            null == (a = o.trailer) ? void 0 : a.isAvailable,
                            o.isAvailable,
                            el,
                        ]),
                        eh = (0, n.useMemo)(() => {
                            if (o.canUserChange)
                                return (0, r.jsx)("div", {
                                    className: e$().ugcControls,
                                    children: (0, r.jsx)(tt, { playlist: o }),
                                });
                        }, [o]),
                        ef = (0, n.useMemo)(
                            () =>
                                M(
                                    {
                                        id: "entity-names.likes-count-description",
                                    },
                                    { count: o.actualLikesCount },
                                ),
                            [M, o.actualLikesCount],
                        ),
                        ey = (0, f.c)(() => {
                            O(), o.isLiked ? $() : q();
                        }),
                        eb = (0, y.L)(() => {
                            if (!o.isFavouritePlaylist)
                                return x
                                    ? (0, r.jsx)(A.cy, {
                                          className: e$().likeControl,
                                          isLiked: o.isLiked,
                                          onClick: ey,
                                          variant: "default",
                                          size: ee,
                                          iconSize: et,
                                          iconClassName: e$().likeIcon,
                                          disabled: !B.isAuthorized,
                                      })
                                    : (0, r.jsx)(A.cy, {
                                          className: e$().likeControl,
                                          isLiked: o.isLiked,
                                          onClick: ey,
                                          withRipple: !0,
                                          iconSize: et,
                                          size: ee,
                                          variant: "default",
                                          "aria-label": ef,
                                          iconClassName: e$().likeIcon,
                                          disabled: !B.isAuthorized,
                                          children: ep,
                                      });
                        }),
                        eC =
                            B.hasPlus &&
                            !x,
                        eP = (0, n.useMemo)(
                            () =>
                                (0, r.jsxs)("div", {
                                    className: e$().controls,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: e$().mainControls,
                                            children: [
                                                ev,
                                                (0, r.jsx)(eJ, {
                                                    playlistUuid: o.uuid,
                                                }),
                                                eg,
                                                eb,
                                                V &&
                                                    (0, r.jsx)(A.O0, {
                                                        onClick: F,
                                                        isPinned: o.isPinned,
                                                        className:
                                                            e$().pinControl,
                                                    }),
                                                (0, r.jsx)(ti, {
                                                    playlist: o,
                                                    open: R,
                                                    onOpenChange: D,
                                                    wrapperClassName:
                                                        e$().menuControl,
                                                    size: ee,
                                                    icon: (0, r.jsx)(C.Icon, {
                                                        size: et,
                                                        variant: "more",
                                                    }),
                                                    ...(0, d.Am)(
                                                        d.e8.pageHeader
                                                            .PLAYLIST_HEADER_CONTEXT_MENU_BUTTON,
                                                    ),
                                                }),
                                                eC &&
                                                    (0, r.jsx)(eQ, {
                                                        trackIds: T,
                                                        className:
                                                            e$()
                                                                .downloadControl,
                                                        onRemove: en,
                                                    }),
                                            ],
                                        }),
                                        eh,
                                    ],
                                }),
                            [ev, eg, eb, F, o, eC, T, R, ee, et, eh, V, en],
                        );
                    return (0, r.jsx)("div", {
                        className: e$().root,
                        children: (0, r.jsx)(I, {
                            headingVariant: "h1",
                            ref: c,
                            className: s,
                            controls: eP,
                            meta: (0, r.jsx)(e6, { playlist: o }),
                            entityName: M({ id: "entity-names.playlist" }),
                            title: o.title,
                            canChangeTitle: er,
                            maxTitleLength: eU.kc,
                            onTitleChange: es,
                            cover: (0, r.jsx)(e7, { playlist: o }),
                        }),
                    });
                }),
                to = (0, n.forwardRef)((e, t) =>
                    (0, r.jsx)(tr, { forwardRef: t, ...e }),
                );
            var tl = a(41458),
                tn = a(91187),
                ts = a.n(tn);
            let td = (0, l.PA)((e) => {
                    let {
                            album: t,
                            className: a,
                            forwardRef: o,
                            "aria-labelledby": l,
                        } = e,
                        { language: n } = (0, j.h6b)(),
                        { formatMessage: s } = (0, h.A)(),
                        { from: d, utmLink: c } = (0, j.fyy)({
                            pageId: j._Q$.PROMOLANDING_ALBUM,
                            blockId: j.UfI.ALBUM,
                            contextType: z.K.Album,
                            contextId: t.id,
                        }),
                        {
                            settings: { isMobile: u },
                            promolanding: { state: _ },
                            albumCPA: { isPlusCPAEnabled: m },
                        } = (0, j.Pjs)(),
                        { isPlaying: p, togglePlay: v } = (0, j.Dx4)({
                            playContextParams: {
                                contextData: {
                                    type: z.K.Album,
                                    meta: { id: t.id },
                                    from: d,
                                    utmLink: c,
                                    playDisliked: !0,
                                },
                                loadContextMeta: !0,
                                entitiesData: _.unloadedEntitiesDataFromModels,
                            },
                            playbackId: j.V_r.PROMO_LANDING,
                            sonataState: _,
                        }),
                        x = (0, O.c5)(t),
                        { pageAlbumId: g } = (0, j.THB)(),
                        f = (0, O.r_)(t.type),
                        { iconSize: b, controlSize: C } = i(u),
                        P = (0, y.L)(() =>
                            u
                                ? (0, r.jsx)(A.DM, {
                                      className: ea().playControl,
                                      color: "primary",
                                      buttonVariant: "default",
                                      iconSize: "xxl",
                                      isPlaying: p,
                                      onClick: v,
                                      variant: "filled",
                                      disabled: !t.isAvailable,
                                  })
                                : (0, r.jsx)(A.DM, {
                                      className: ea().playControl,
                                      withRipple: !0,
                                      buttonVariant: "default",
                                      radius: "xxxl",
                                      size: "s",
                                      color: "primary",
                                      iconSize: "xxs",
                                      isPlaying: p,
                                      onClick: v,
                                      disabled: !t.isAvailable,
                                      children: (0, r.jsx)(E.A, {
                                          id: "player-actions.listen",
                                      }),
                                  }),
                        ),
                        k =
                            !m({
                                pageAlbumId: g,
                                albumId: t.id,
                                isNonMusic: t.isNonMusic,
                            }) && !t.isAvailable;
                    return (0, r.jsx)(I, {
                        ref: o,
                        headingVariant: "h1",
                        className: a,
                        controls: (0, r.jsx)("div", {
                            className: ea().controlsContainer,
                            children: (0, r.jsxs)("div", {
                                className: ea().controls,
                                children: [
                                    P,
                                    (0, r.jsx)(A.cy, {
                                        className: ts().likeControl,
                                        isLiked: t.isLiked,
                                        onClick: x,
                                        variant: "default",
                                        size: C,
                                        iconSize: b,
                                        withRipple: !u,
                                        disabled: k,
                                    }),
                                ],
                            }),
                        }),
                        meta: (0, r.jsx)(Z, { album: t, withArtistLink: !1 }),
                        entityName: f,
                        title: t.title,
                        cover: (0, r.jsx)(ee, {
                            coverVariant: "square",
                            coverUri: t.coverUri,
                            isAvailable: t.isAvailable,
                        }),
                        "aria-labelledby": l,
                        version: t.version,
                        logo: (0, r.jsx)(A.N_, {
                            component: (0, r.jsx)("a", {}),
                            target: "_blank",
                            href: "/",
                            "aria-label": s({ id: "footer.yandex-music" }),
                            children: (0, r.jsx)(tl.Logo, {
                                size: "xs",
                                alignIcon: tl.AlignLogoIcon.CENTER,
                                lang:
                                    "ru" !== n
                                        ? tl.LogoLang.EN
                                        : tl.LogoLang.RU,
                            }),
                        }),
                    });
                }),
                tc = (0, n.forwardRef)((e, t) =>
                    (0, r.jsx)(td, { forwardRef: t, ...e }),
                );
        },
        76960: (e) => {
            e.exports = {
                root: "PageHeaderTitle_root__ESu2q",
                editButton: "PageHeaderTitle_editButton__KF4eh",
                editButton_centered:
                    "PageHeaderTitle_editButton_centered__W9EwU",
                textField: "PageHeaderTitle_textField__LXJ3X",
                textField_long: "PageHeaderTitle_textField_long__ReeJz",
                title: "PageHeaderTitle_title__caKyB",
                version: "PageHeaderTitle_version__g5BeO",
                version_withOtherVersions:
                    "PageHeaderTitle_version_withOtherVersions__Amfwk",
                heading: "PageHeaderTitle_heading__UADXi",
                heading_withVersion:
                    "PageHeaderTitle_heading_withVersion__jw12r",
                textFieldContainer: "PageHeaderTitle_textFieldContainer__FSD_B",
                font_long: "PageHeaderTitle_font_long__q9Leq",
                font_short: "PageHeaderTitle_font_short__76VRG",
                font_mobile: "PageHeaderTitle_font_mobile__M1__v",
                stickyTitle: "PageHeaderTitle_stickyTitle__CL1m4",
                titleWithLinkIcon: "PageHeaderTitle_titleWithLinkIcon__mBP_B",
                titleWithLink: "PageHeaderTitle_titleWithLink__pJZN5",
                linkContainer: "PageHeaderTitle_linkContainer__KUyIF",
                linkText: "PageHeaderTitle_linkText__rSUmw",
                arrowWrapper: "PageHeaderTitle_arrowWrapper__cadS3",
                arrowWrapper_long: "PageHeaderTitle_arrowWrapper_long__xhAjB",
                arrowWrapper_short: "PageHeaderTitle_arrowWrapper_short__45ema",
                arrowWrapper_mobile:
                    "PageHeaderTitle_arrowWrapper_mobile__iYnjq",
            };
        },
        78683: (e) => {
            e.exports = {
                root: "InfoBlock_root__2D2Mj",
                infoTitle: "InfoBlock_infoTitle___At72",
                link: "InfoBlock_link__iA21Q",
            };
        },
        83888: (e, t, a) => {
            "use strict";
            a.d(t, { w: () => i.SomethingWentWrong });
            var i = a(30236);
        },
        91187: (e) => {
            e.exports = {
                likeControl: "PromoLandingPageHeaderAlbum_likeControl__iWuEF",
            };
        },
        98420: (e) => {
            e.exports = {
                root: "PageHeaderShimmer_root__kqSwa",
                cover: "PageHeaderShimmer_cover__ay2cr",
                content: "PageHeaderShimmer_content__SdBKK",
                info: "PageHeaderShimmer_info__cZkS2",
                entityName: "PageHeaderShimmer_entityName__tlWnA",
                title: "PageHeaderShimmer_title__xKG4e",
                meta: "PageHeaderShimmer_meta__YWx0m",
                controls: "PageHeaderShimmer_controls__gPErM",
                desktopPlayButton: "PageHeaderShimmer_desktopPlayButton__R7EmH",
                button: "PageHeaderShimmer_button__13qrG",
            };
        },
    },
]);
