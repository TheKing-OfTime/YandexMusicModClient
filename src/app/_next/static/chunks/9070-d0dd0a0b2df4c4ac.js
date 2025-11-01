(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9070],
    {
        35: (e) => {
            e.exports = {
                root: "ClipAboutModalDesktop_root__F8UU5",
                root_withFullscreen:
                    "ClipAboutModalDesktop_root_withFullscreen__nTO1X",
                root_withWindows:
                    "ClipAboutModalDesktop_root_withWindows__kl4sc",
                header: "ClipAboutModalDesktop_header__at6X6",
                modalContent: "ClipAboutModalDesktop_modalContent__Rp_ON",
                explicitMark: "ClipAboutModalDesktop_explicitMark__SLwRj",
                important: "ClipAboutModalDesktop_important__LkqWo",
                content: "ClipAboutModalDesktop_content__0dUY1",
                titleShimmer: "ClipAboutModalDesktop_titleShimmer__zTtu_",
            };
        },
        2117: (e, t, r) => {
            "use strict";
            r.d(t, { XU: () => u });
            var n,
                a,
                o = r(7144),
                i = r(66268),
                l = r(73827);
            !(function (e) {
                (e.formatDate = "FormattedDate"),
                    (e.formatTime = "FormattedTime"),
                    (e.formatNumber = "FormattedNumber"),
                    (e.formatList = "FormattedList"),
                    (e.formatDisplayName = "FormattedDisplayName");
            })(n || (n = {})),
                (function (e) {
                    (e.formatDate = "FormattedDateParts"),
                        (e.formatTime = "FormattedTimeParts"),
                        (e.formatNumber = "FormattedNumberParts"),
                        (e.formatList = "FormattedListParts");
                })(a || (a = {}));
            var s = function (e) {
                var t = (0, l.A)(),
                    r = e.value,
                    n = e.children,
                    a = (0, o.__rest)(e, ["value", "children"]);
                return n(t.formatNumberToParts(r, a));
            };
            function d(e) {
                var t = function (t) {
                    var r = (0, l.A)(),
                        n = t.value,
                        a = t.children,
                        i = (0, o.__rest)(t, ["value", "children"]),
                        s = "string" == typeof n ? new Date(n || 0) : n;
                    return a(
                        "formatDate" === e
                            ? r.formatDateToParts(s, i)
                            : r.formatTimeToParts(s, i),
                    );
                };
                return (t.displayName = a[e]), t;
            }
            function c(e) {
                var t = function (t) {
                    var r = (0, l.A)(),
                        n = t.value,
                        a = t.children,
                        s = (0, o.__rest)(t, ["value", "children"]),
                        d = r[e](n, s);
                    if ("function" == typeof a) return a(d);
                    var c = r.textComponent || i.Fragment;
                    return i.createElement(c, null, d);
                };
                return (t.displayName = n[e]), t;
            }
            (s.displayName = "FormattedNumberParts"),
                (s.displayName = "FormattedNumberParts");
            var u = c("formatDate");
            c("formatTime"),
                c("formatNumber"),
                c("formatList"),
                c("formatDisplayName"),
                d("formatDate"),
                d("formatTime");
        },
        5884: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let n = r(473)._(r(16092));
            function a(e, t) {
                var r;
                let a = {};
                "function" == typeof e && (a.loader = e);
                let o = { ...a, ...t };
                return (0, n.default)({
                    ...o,
                    modules:
                        null == (r = o.loadableGenerated) ? void 0 : r.modules,
                });
            }
            ("function" == typeof t.default ||
                ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }),
                Object.assign(t.default, t),
                (e.exports = t.default));
        },
        12730: (e) => {
            e.exports = {
                root: "PromoLandingContent_root__QrRKX",
                main: "PromoLandingContent_main__ELiBu",
            };
        },
        16092: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                });
            let n = r(33008),
                a = r(66268),
                o = r(52283);
            function i(e) {
                return { default: e && "default" in e ? e.default : e };
            }
            r(81382);
            let l = {
                    loader: () => Promise.resolve(i(() => null)),
                    loading: null,
                    ssr: !0,
                },
                s = function (e) {
                    let t = { ...l, ...e },
                        r = (0, a.lazy)(() => t.loader().then(i)),
                        s = t.loading;
                    function d(e) {
                        let i = s
                                ? (0, n.jsx)(s, {
                                      isLoading: !0,
                                      pastDelay: !0,
                                      error: null,
                                  })
                                : null,
                            l = !t.ssr || !!t.loading,
                            d = l ? a.Suspense : a.Fragment,
                            c = t.ssr
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [null, (0, n.jsx)(r, { ...e })],
                                  })
                                : (0, n.jsx)(o.BailoutToCSR, {
                                      reason: "next/dynamic",
                                      children: (0, n.jsx)(r, { ...e }),
                                  });
                        return (0, n.jsx)(d, {
                            ...(l ? { fallback: i } : {}),
                            children: c,
                        });
                    }
                    return (d.displayName = "LoadableComponent"), d;
                };
        },
        20138: (e) => {
            e.exports = {
                root: "TopAdvertBanner_root__aAZ0o",
                root_hidden: "TopAdvertBanner_root_hidden__l3FTx",
                advert: "TopAdvertBanner_advert__LjAj_",
            };
        },
        22820: (e) => {
            e.exports = {
                root: "TrackLyricsModal_root__KsVRf",
                header: "TrackLyricsModal_header__nWar3",
                modalContent: "TrackLyricsModal_modalContent__uYdL2",
                content: "TrackLyricsModal_content__Cstzi",
                explicitMark: "TrackLyricsModal_explicitMark__eL04d",
                important: "TrackLyricsModal_important__0Ie9h",
                version: "TrackLyricsModal_version__l9sxZ",
                overlay: "TrackLyricsModal_overlay__0Ehwu",
            };
        },
        24239: (e, t, r) => {
            "use strict";
            r.d(t, { m: () => d });
            var n = r(33008),
                a = r(80922),
                o = r(79169),
                i = r(83507),
                l = r.n(i);
            let s = [{ id: o.uQT.INFO }, { id: o.uQT.ERROR, limit: 1 }],
                d = () =>
                    s.map((e) => {
                        let { id: t, limit: r } = e;
                        return (0, n.jsx)(
                            a.Notification,
                            {
                                className: l().root,
                                enableMultiContainer: !0,
                                containerId: t,
                                position: "bottom-center",
                                limit: r,
                            },
                            t,
                        );
                    });
        },
        24426: (e) => {
            e.exports = {
                rootOld: "Content_rootOld__g85_m",
                main: "Content_main__8_wIa",
                root: "Content_root__IsH8s",
                sideBanner: "Content_sideBanner__Na07D",
                primary: "Content_primary__dInSS",
                primary_isMobile: "Content_primary_isMobile__ApDi2",
                primary_short: "Content_primary_short__TSM3L",
                adContainer: "Content_adContainer__4t8fj",
                adBanner: "Content_adBanner__hxXvf",
                secondary: "Content_secondary__tGLLS",
                secondary_isMobile: "Content_secondary_isMobile__CbF7M",
                secondaryEnter: "Content_secondaryEnter__Nsp_f",
                secondaryEnterActive: "Content_secondaryEnterActive__Ks_PK",
                secondaryExit: "Content_secondaryExit__m4gOK",
                secondaryExitActive: "Content_secondaryExitActive__miNnR",
            };
        },
        29371: (e, t, r) => {
            "use strict";
            r.d(t, { FN: () => a, gj: () => n }), r(27224);
            let n = (e) => {
                    let {
                        containerNodeRect: t,
                        draggingNodeRect: r,
                        transform: n,
                    } = e;
                    return r && t
                        ? (function (e, t, r) {
                              let n = { ...e };
                              return (
                                  t.top + e.y <= r.top
                                      ? (n.y = r.top - t.top)
                                      : t.bottom + e.y >= r.top + r.height &&
                                        (n.y = r.top + r.height - t.bottom),
                                  t.left + e.x <= r.left
                                      ? (n.x = r.left - t.left)
                                      : t.right + e.x >= r.left + r.width &&
                                        (n.x = r.left + r.width - t.right),
                                  n
                              );
                          })(n, r, t)
                        : n;
                },
                a = (e) => {
                    let { transform: t } = e;
                    return { ...t, x: 0 };
                };
        },
        29607: (e) => {
            e.exports = {
                root: "WithTopBanner_root__P__x3",
                banner: "WithTopBanner_banner__x1Ia2",
                banner_canShow: "WithTopBanner_banner_canShow__5KA30",
                content: "WithTopBanner_content__6Vh7a",
            };
        },
        31588: (e, t, r) => {
            "use strict";
            r.d(t, { g: () => C });
            var n = r(33008),
                a = r(85896),
                o = r(97531),
                i = r(66268),
                l = r(96560),
                s = r(42213),
                d = r(44612),
                c = r(42314),
                u = r(52756),
                m = r(93134),
                _ = r(77868),
                p = r(79169),
                x = r(18740),
                h = r(17846),
                v = r(44189),
                f = r(98701),
                j = r.n(f);
            let b = (0, o.PA)(() => {
                    let {
                            modals: { crackdownModal: e },
                        } = (0, p.Pjs)(),
                        t = (0, h.useRouter)(),
                        r = (0, p.NFA)().get(p.QGx),
                        o = (0, s.c)(() => {
                            e.close(),
                                r.authorizationUrl &&
                                    t.push(r.authorizationUrl);
                        });
                    return (0, n.jsx)(v.Button, {
                        className: (0, a.$)(j().button, j().important),
                        variant: "default",
                        color: "secondary",
                        isBlock: !0,
                        radius: "xxxl",
                        size: "xs",
                        onClick: o,
                        children: (0, n.jsx)(_.Caption, {
                            className: j().buttonMainText,
                            variant: "span",
                            children: (0, n.jsx)(l.A, {
                                id: "buy-subscription.already-in-plus",
                                values: { nbsp: "\xa0" },
                            }),
                        }),
                    });
                }),
                y = "crackdown-buy-subscription-button",
                A = (0, o.PA)((e) => {
                    let { withAlreadyInPlusButton: t } = e,
                        {
                            user: r,
                            modals: { crackdownModal: o },
                        } = (0, p.Pjs)(),
                        [h, v] = (0, d.d)(),
                        [f, A] = (0, i.useState)(o.isOpened),
                        {
                            mainText: C,
                            mainTextA11y: g,
                            additionText: k,
                            isShimmerVisible: T,
                            isShimmerActive: N,
                            openPaymentWidgetModal: P,
                            saveOfferAndAuthorize: L,
                        } = (0, p.DpZ)({
                            storeName: "music",
                            isEnabled: f,
                            offerElement: {
                                element: h,
                                intersectionPropertyId: y,
                            },
                        }),
                        D = (0, s.c)(() => {
                            if ((o.close(), !r.isAuthorized)) return void L();
                            P();
                        }),
                        E = (0, c.L)(() =>
                            T
                                ? (0, n.jsx)(x.bb, {
                                      className: (0, a.$)(
                                          j().button,
                                          j().important,
                                      ),
                                      isActive: N,
                                  })
                                : (0, n.jsxs)(x.mv, {
                                      className: (0, a.$)(
                                          j().button,
                                          j().important,
                                      ),
                                      color: "plus",
                                      size: "xs",
                                      ref: v,
                                      "data-intersection-property-id": y,
                                      onClick: D,
                                      "aria-label": g,
                                      children: [
                                          (0, n.jsx)(_.Caption, {
                                              variant: "div",
                                              className: j().buttonMainText,
                                              children: C,
                                          }),
                                          k &&
                                              (0, n.jsx)(_.Caption, {
                                                  variant: "div",
                                                  size: "m",
                                                  weight: "normal",
                                                  children: k,
                                              }),
                                      ],
                                  }),
                        );
                    return (
                        (0, i.useEffect)(() => {
                            setTimeout(() => {
                                A(!0);
                            }, 2500);
                        }, []),
                        (0, n.jsxs)(x.cu, {
                            open: o.isOpened,
                            onClose: o.close,
                            children: [
                                (0, n.jsx)("div", {
                                    className: x.SE.growContainer,
                                    children: (0, n.jsx)(u.Image, {
                                        src: "https://avatars.mds.yandex.net/get-music-misc/70850/img.672491383c0f014022130e5b/orig",
                                        srcSet: "https://avatars.mds.yandex.net/get-music-misc/2419084/img.6724913d3c0f014022130e5e/orig 2x",
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: x.SE.text,
                                    "aria-hidden": !0,
                                    children: [
                                        (0, n.jsx)(_.Heading, {
                                            variant: "h1",
                                            size: "xl",
                                            className: x.SE.title,
                                            children: (0, n.jsx)(l.A, {
                                                id: "crackdown.title",
                                                values: {
                                                    br: (0, n.jsx)("br", {}),
                                                    nbsp: "\xa0",
                                                },
                                            }),
                                        }),
                                        (0, n.jsx)(_.Caption, {
                                            variant: "span",
                                            size: "m",
                                            className: x.SE.description,
                                            children: (0, n.jsx)(l.A, {
                                                id: "crackdown.description",
                                                values: {
                                                    br: (0, n.jsx)("br", {}),
                                                    nbsp: "\xa0",
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)(m.q, {
                                    children: [
                                        (0, n.jsx)(_.Heading, {
                                            variant: "h1",
                                            children: (0, n.jsx)(l.A, {
                                                id: "crackdown.title",
                                                values: {
                                                    br: " ",
                                                    nbsp: "\xa0",
                                                },
                                            }),
                                        }),
                                        (0, n.jsx)(_.Caption, {
                                            variant: "div",
                                            children: (0, n.jsx)(l.A, {
                                                id: "crackdown.description",
                                                values: {
                                                    br: " ",
                                                    nbsp: "\xa0",
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: x.SE.buttons,
                                    children: [E, t && (0, n.jsx)(b, {})],
                                }),
                            ],
                        })
                    );
                });
            A.displayName = "CrackdownModalComponent";
            let C = (e) =>
                (0, n.jsx)(p.rtM, {
                    page: p.l7W.CRACKDOWN_SCREEN,
                    places: [p.RBW.TOP_BUTTON],
                    children: (0, n.jsx)(A, { ...e }),
                });
        },
        33638: (e, t, r) => {
            "use strict";
            r.d(t, {
                $9: () => x,
                UC: () => g,
                i6: () => N,
                US: () => O,
                VW: () => z,
            });
            var n = r(33008),
                a = r(97531),
                o = r(79169),
                i = r(85896),
                l = r(66268),
                s = r(73827),
                d = r(51704),
                c = r(60293),
                u = r(18740),
                m = r(35),
                _ = r.n(m);
            let p = (0, a.PA)(() => {
                    let { formatMessage: e } = (0, s.A)(),
                        { notify: t } = (0, o.lkh)(),
                        { contentRef: r } = (0, o.gKY)(),
                        {
                            currentClipInfo: a,
                            settings: { isMobile: m, isWindowsApplication: p },
                            fullscreenVideoPlayer: x,
                        } = (0, o.Pjs)(),
                        { modal: h, clip: v } = a;
                    !v && a.isClipIdle && a.getClip(),
                        !a.credits && a.isCreditsIdle && a.getCreditsInfo();
                    let f = null == v ? void 0 : v.title,
                        j = null == v ? void 0 : v.explicitDisclaimer,
                        b = (0, l.useMemo)(
                            () =>
                                a.isClipLoading || a.isClipRejected
                                    ? (0, n.jsx)(u.q$, {
                                          className: _().titleShimmer,
                                          count: 1,
                                      })
                                    : v
                                      ? (0, n.jsxs)("span", {
                                            children: [
                                                f,
                                                j &&
                                                    (0, n.jsx)(u.Nq, {
                                                        getDescriptionTexts:
                                                            v.getDescriptionTexts,
                                                        className: (0, i.$)(
                                                            _().explicitMark,
                                                            _().important,
                                                        ),
                                                        size: "xxs",
                                                        variant: j,
                                                    }),
                                            ],
                                        })
                                      : void 0,
                            [v, f, j, a.isClipLoading, a.isClipRejected],
                        );
                    (0, l.useEffect)(
                        () => () => {
                            h.close(), a.reset();
                        },
                        [a, h],
                    );
                    let y = (0, l.useCallback)(() => {
                            h.close(), a.reset();
                        }, [a, h]),
                        A = (0, l.useCallback)(
                            (e) => {
                                var t;
                                e || a.reset(),
                                    null == (t = h.onOpenChange) ||
                                        t.call(h, e);
                            },
                            [a, h],
                        );
                    a.isRejected &&
                        (y(),
                        t(
                            (0, n.jsx)(u.hT, {
                                error: e({
                                    id: "error-messages.error-during-action",
                                }),
                            }),
                            { containerId: o.uQT.ERROR },
                        ));
                    let C = (0, l.useMemo)(() => {
                        var e;
                        return a.isCreditsLoading || a.isCreditsRejected
                            ? (0, n.jsx)(u.q$, {})
                            : (null == (e = a.credits) ? void 0 : e.length)
                              ? a.credits.map((e) => {
                                    let t = (0, n.jsx)(c.D, {
                                        children: e.value,
                                    });
                                    return (0, n.jsx)(
                                        c.O,
                                        { infoDescription: t, title: e.title },
                                        e.title,
                                    );
                                })
                              : null;
                    }, [a.credits, a.isCreditsLoading, a.isCreditsRejected]);
                    return (0, n.jsx)(d.a, {
                        placement: m ? "default" : "right",
                        open: h.isOpened,
                        onClose: y,
                        contentClassName: _().modalContent,
                        title: b,
                        headerClassName: _().header,
                        className: (0, i.$)(_().root, {
                            [_().root_withFullscreen]: x.modal.isOpened,
                            [_().root_withWindows]: p,
                        }),
                        onOpenChange: A,
                        labelClose: e({ id: "interface-actions.close" }),
                        portalNode: m || x.modal.isOpened ? null : r,
                        children: (0, n.jsx)("div", {
                            className: _().content,
                            children: C,
                        }),
                    });
                }),
                x = (0, a.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, o.Pjs)();
                    return e ? null : (0, n.jsx)(p, {});
                });
            r(90108), r(95273);
            var h = r(42213),
                v = r(42314),
                f = r(74230),
                j = r(24426),
                b = r.n(j);
            b().secondaryEnter, b().secondaryEnterActive;
            var y = (function (e) {
                    return (e.LARGE = "large"), (e.SMALL = "small"), e;
                })({}),
                A = r(17846);
            let C = ["album", "users", "artist", "chart"],
                g = (0, a.PA)((e) => {
                    let { className: t, children: r } = e;
                    (0, o.NFA)();
                    let { formatMessage: a } = (0, s.A)(),
                        {
                            setContentRef: d,
                            setContentRootRef: c,
                            setSideBannerRef: m,
                            paywallRef: _,
                        } = (0, o.gKY)(),
                        p = (0, o.UlF)(),
                        {
                            settings: { isMobile: x },
                            experiments: j,
                            user: g,
                        } = (0, o.Pjs)(),
                        k = (0, f.y)(),
                        T =
                            (j.checkExperiment(
                                o.zal.WebNextTouchAds,
                                "small_banner",
                            ) ||
                                j.checkExperiment(
                                    o.zal.WebNextTouchAds,
                                    "large_banner",
                                )) &&
                            !_ &&
                            x &&
                            !g.hasPlus,
                        N =
                            (T &&
                            j.checkExperiment(
                                o.zal.WebNextTouchAds,
                                "small_banner",
                            )
                                ? y.SMALL
                                : y.LARGE) === y.SMALL
                                ? "R-I-16641233-1"
                                : "R-I-16641233-2",
                        P =
                            ((() => {
                                let e = (0, A.usePathname)();
                                return (0, l.useMemo)(() => {
                                    let [, t] = e.split("/");
                                    return !!t && C.includes(t);
                                }, [e]);
                            })(),
                            (0, l.useRef)(null),
                            (0, h.c)(() => {
                                p.error("Cannot render advert banner", {
                                    adBlockId: N,
                                });
                            })),
                        L = (0, v.L)(() => {
                            if (T)
                                return (0, n.jsx)("div", {
                                    className: b().adContainer,
                                    "aria-label": a({ id: "advert.banner" }),
                                    role: "banner",
                                    children: (0, n.jsx)(u.fJ, {
                                        isAsync: !1,
                                        onError: P,
                                        productionBlockId: N,
                                        testBlockId: N,
                                        className: b().adBanner,
                                    }),
                                });
                        });
                    return (0, n.jsxs)("div", {
                        className: (0, i.$)(b().rootOld, t),
                        ref: c,
                        children: [
                            L,
                            (0, n.jsx)("main", {
                                className: b().main,
                                ref: d,
                                children: (0, n.jsx)(l.Suspense, {
                                    children: r,
                                }),
                            }),
                            k &&
                                (0, n.jsx)(f.u, {
                                    className: b().sideBanner,
                                    ref: m,
                                }),
                        ],
                    });
                });
            var k = r(12730),
                T = r.n(k);
            let N = (e) => {
                let { className: t, children: r } = e,
                    { setContentRef: a, setContentRootRef: s } = (0, o.gKY)();
                return (0, n.jsx)("div", {
                    className: (0, i.$)(T().root, t),
                    ref: s,
                    children: (0, n.jsx)("main", {
                        className: T().main,
                        ref: a,
                        children: (0, n.jsx)(l.Suspense, { children: r }),
                    }),
                });
            };
            var P = r(18064),
                L = r(6247);
            let D = (0, a.PA)(() => {
                let { formatMessage: e } = (0, s.A)(),
                    { currentTrackInfo: t } = (0, o.Pjs)(),
                    { fullTrack: r } = t,
                    a = (0, v.L)(() => {
                        var t, a, o;
                        if (
                            !(null == r || null == (t = r.mainAlbum)
                                ? void 0
                                : t.title)
                        )
                            return;
                        let i = (0, n.jsx)(c.D, {
                            href:
                                null == r || null == (a = r.mainAlbum)
                                    ? void 0
                                    : a.url,
                            children:
                                null == r || null == (o = r.mainAlbum)
                                    ? void 0
                                    : o.title,
                        });
                        return (0, n.jsx)(c.O, {
                            title: e({ id: "entity-names.audiobook" }),
                            infoDescription: i,
                        });
                    }),
                    i = (0, v.L)(() => {
                        if (!(null == r ? void 0 : r.shortDescription)) return;
                        let e = (0, n.jsx)(c.D, {
                            children: null == r ? void 0 : r.shortDescription,
                        });
                        return (0, n.jsx)(c.O, { infoDescription: e });
                    });
                return (0, n.jsxs)(n.Fragment, { children: [i, a] });
            });
            var E = r(30293),
                M = r(56140),
                w = r.n(M);
            let R = (0, a.PA)(() => {
                    let { formatMessage: e } = (0, s.A)(),
                        { currentTrackInfo: t } = (0, o.Pjs)(),
                        r = t.fullTrack,
                        a = (0, l.useMemo)(
                            () =>
                                t.fullDescription
                                    ? (0, n.jsx)("span", {
                                          className: w().text,
                                          dangerouslySetInnerHTML: {
                                              __html: (0, E.sanitizeDOM)(
                                                  t.fullDescription,
                                              ),
                                          },
                                      })
                                    : null == r
                                      ? void 0
                                      : r.shortDescription,
                            [
                                null == r ? void 0 : r.shortDescription,
                                t.fullDescription,
                            ],
                        ),
                        i = (0, v.L)(() => {
                            if (!a) return;
                            let e = (0, n.jsx)(c.D, { children: a });
                            return (0, n.jsx)(c.O, { infoDescription: e });
                        }),
                        d = (0, v.L)(() => {
                            var t, a, o;
                            if (
                                !(null == r || null == (t = r.mainAlbum)
                                    ? void 0
                                    : t.title)
                            )
                                return;
                            let i = (0, n.jsx)(c.D, {
                                href:
                                    null == r || null == (a = r.mainAlbum)
                                        ? void 0
                                        : a.url,
                                children:
                                    null == r || null == (o = r.mainAlbum)
                                        ? void 0
                                        : o.title,
                            });
                            return (0, n.jsx)(c.O, {
                                title: e({ id: "entity-names.podcast" }),
                                infoDescription: i,
                            });
                        });
                    return (0, n.jsxs)(n.Fragment, { children: [i, d] });
                }),
                B = (0, a.PA)(() => {
                    var e, t, r, a, m;
                    let { formatMessage: _ } = (0, s.A)(),
                        { notify: p } = (0, o.lkh)(),
                        { contentRef: x } = (0, o.gKY)(),
                        {
                            currentTrackInfo: h,
                            settings: {
                                isMobile: v,
                                isWindowsApplication: f,
                                isLinuxApplication: j,
                            },
                            fullscreenPlayer: b,
                            experiments: y,
                        } = (0, o.Pjs)(),
                        { modal: A } = h,
                        C = h.isUGC,
                        g = y.checkExperiment(o.zal.WebEditorsFeatures, "on");
                    C && h.isTrackIdle && h.getTrackMeta(),
                        h.fullTrack || !h.isTrackIdle || C || h.getFullTrack(),
                        !h.credits && h.isCreditsIdle && h.getCreditsInfo(),
                        ((null == (e = h.fullTrack)
                            ? void 0
                            : e.isTrackPodcast) ||
                            (null == (r = h.fullTrack) ||
                            null == (t = r.mainAlbum)
                                ? void 0
                                : t.isPodcast)) &&
                            h.getFullDescription(),
                        (0, l.useEffect)(
                            () => () => {
                                A.close(), h.reset();
                            },
                            [h, A],
                        );
                    let k = (0, l.useCallback)(() => {
                            A.close(), h.reset();
                        }, [h, A]),
                        T = (0, l.useCallback)(
                            (e) => {
                                var t;
                                e || h.reset(),
                                    null == (t = A.onOpenChange) ||
                                        t.call(A, e);
                            },
                            [h, A],
                        );
                    h.isRejected &&
                        (k(),
                        p(
                            (0, n.jsx)(u.hT, {
                                error: _({
                                    id: "error-messages.error-during-action",
                                }),
                            }),
                            { containerId: o.uQT.ERROR },
                        ));
                    let N = h.fullTrack,
                        E = null == N ? void 0 : N.explicitDisclaimer,
                        M = (0, l.useMemo)(() => {
                            var e;
                            if (N)
                                return (0, n.jsxs)("span", {
                                    children: [
                                        N.title,
                                        N.version &&
                                            (0, n.jsx)("span", {
                                                className: w().version,
                                                children: N.version,
                                            }),
                                        E &&
                                            (0, n.jsx)(u.Nq, {
                                                className: (0, i.$)(
                                                    w().explicitMark,
                                                    w().important,
                                                    {
                                                        [w().explicit]:
                                                            !N.isTrackNonMusic,
                                                    },
                                                ),
                                                getDescriptionTexts:
                                                    null == (e = h.fullTrack)
                                                        ? void 0
                                                        : e.getDescriptionTexts,
                                                size: "xxs",
                                                variant: E,
                                            }),
                                    ],
                                });
                        }, [
                            N,
                            E,
                            null == (a = h.fullTrack)
                                ? void 0
                                : a.getDescriptionTexts,
                        ]),
                        B = (0, l.useMemo)(() => {
                            var e;
                            return (null == N ? void 0 : N.type) ===
                                L.S.AUDIOBOOK
                                ? (0, n.jsx)(D, {})
                                : (null == N ? void 0 : N.isTrackPodcast) ||
                                    (null == N || null == (e = N.mainAlbum)
                                        ? void 0
                                        : e.isPodcast)
                                  ? (0, n.jsx)(R, {})
                                  : void 0;
                        }, [N]),
                        O = (0, l.useMemo)(() => {
                            var e;
                            return (null == (e = h.credits) ? void 0 : e.length)
                                ? h.credits.map((e) => {
                                      let { title: t, value: r } = e,
                                          a = (0, n.jsx)(c.D, { children: r });
                                      return (0, n.jsx)(
                                          c.O,
                                          { title: t, infoDescription: a },
                                          t,
                                      );
                                  })
                                : null;
                        }, [h.credits]),
                        S = (0, l.useMemo)(() => {
                            var e;
                            if (
                                (null == (e = h.fullTrack)
                                    ? void 0
                                    : e.major) &&
                                g
                            ) {
                                let e = h.fullTrack.major.name;
                                if (e) {
                                    let t = (0, n.jsx)(c.D, { children: e });
                                    return (0, n.jsx)(
                                        c.O,
                                        { title: "Major", infoDescription: t },
                                        e,
                                    );
                                }
                            }
                            return null;
                        }, [null == (m = h.fullTrack) ? void 0 : m.major, g]);
                    return (0, n.jsx)(d.a, {
                        placement: v ? "default" : "right",
                        open: A.isOpened,
                        onClose: k,
                        contentClassName: w().modalContent,
                        title: M,
                        headerClassName: w().header,
                        className: (0, i.$)(w().root, {
                            [w().root_withFullscreen]: b.modal.isOpened,
                            [w().root_withCustomControls]: f || j,
                        }),
                        overlayClassName: w().overlay,
                        onOpenChange: T,
                        labelClose: _({ id: "interface-actions.close" }),
                        portalNode: v || b.modal.isOpened ? null : x,
                        containerProps: (0, P.Am)(P.Xk.track.TRACK_ABOUT_MODAL),
                        closeButtonProps: (0, P.Am)(
                            P.Xk.track.TRACK_ABOUT_MODAL_CLOSE_BUTTON,
                        ),
                        children: (0, n.jsxs)("div", {
                            className: w().content,
                            children: [
                                (h.isTrackLoading || h.isTrackRejected) &&
                                    (0, n.jsx)(u.nN, {
                                        textClassName: w().textShimmer,
                                    }),
                                B,
                                (h.isCreditsLoading || h.isCreditsRejected) &&
                                    (0, n.jsx)(u.nN, {
                                        textClassName: w().textShimmer,
                                    }),
                                O,
                                S,
                            ],
                        }),
                    });
                }),
                O = (0, a.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, o.Pjs)();
                    return e ? null : (0, n.jsx)(B, {});
                });
            var S = r(44078),
                I = r(22820),
                F = r.n(I);
            let z = (0, a.PA)(() => {
                var e;
                let { formatMessage: t } = (0, s.A)(),
                    { notify: r } = (0, o.lkh)(),
                    { contentRef: a } = (0, o.gKY)(),
                    {
                        trackLyrics: c,
                        settings: { isMobile: m },
                        fullscreenPlayer: _,
                    } = (0, o.Pjs)(),
                    { modal: p, track: x } = c,
                    h = null == x ? void 0 : x.explicitDisclaimer;
                (0, l.useEffect)(() => {
                    x &&
                        x.isLyricsAvailable &&
                        c.modal.isOpened &&
                        c.getLyrics(x.id);
                }, [x, c, c.modal.isOpened]),
                    (0, l.useEffect)(() => {
                        p.isOpened &&
                            x &&
                            c.isResolved &&
                            c.sendViews({ trackId: x.id, albumId: x.albumId });
                    }, [x, c, c.isResolved, p.isOpened]);
                let v = (0, l.useCallback)(
                    (e) => {
                        var t;
                        null == (t = p.onOpenChange) || t.call(p, e);
                    },
                    [p],
                );
                c.isRejected &&
                    c.modal.isOpened &&
                    r(
                        (0, n.jsx)(u.hT, {
                            error: t({
                                id: "error-messages.error-during-action",
                            }),
                        }),
                        { containerId: o.uQT.ERROR },
                    );
                let f = (0, l.useMemo)(() => {
                    if (x)
                        return (0, n.jsxs)("span", {
                            ...(0, P.Am)(P.e8.content.TRACK_LYRICS_TITLE),
                            children: [
                                x.title,
                                x.version &&
                                    (0, n.jsx)("span", {
                                        className: F().version,
                                        children: x.version,
                                    }),
                                h &&
                                    (0, n.jsx)(u.Nq, {
                                        className: (0, i.$)(
                                            F().explicitMark,
                                            F().important,
                                        ),
                                        getDescriptionTexts:
                                            x.getDescriptionTexts,
                                        size: "xxs",
                                        variant: h,
                                    }),
                            ],
                        });
                }, [
                    x,
                    null == x ? void 0 : x.title,
                    null == x ? void 0 : x.version,
                    h,
                ]);
                return (0, n.jsx)(d.a, {
                    size: "fitContent",
                    placement: m ? "default" : "right",
                    open: p.isOpened,
                    onOpenChange: v,
                    onClose: p.close,
                    className: F().root,
                    contentClassName: F().modalContent,
                    portalNode: m || _.modal.isOpened ? null : a,
                    title: f,
                    headerClassName: F().header,
                    overlayClassName: F().overlay,
                    labelClose: t({ id: "interface-actions.close" }),
                    restoreFocus: !0,
                    containerProps: (0, P.Am)(P.e8.content.TRACK_LYRICS_MODAL),
                    closeButtonProps: (0, P.Am)(
                        P.e8.content.TRACK_LYRICS_CLOSE_BUTTON,
                    ),
                    lockScroll: m,
                    children: (0, n.jsx)("div", {
                        className: F().content,
                        ...(0, P.Am)(P.e8.content.TRACK_LYRICS_TEXT),
                        children: (0, n.jsx)(S.xe, {
                            lyrics: c.lyrics,
                            authors: c.writersNames,
                            source:
                                null == (e = c.major) ? void 0 : e.prettyName,
                            isShimmerVisible: c.isShimmerVisible,
                            isShimmerActive: c.isLoading,
                        }),
                    }),
                });
            });
        },
        36233: (e) => {
            e.exports = {
                wrapper: "RedAlert_wrapper__rGvGN",
                root: "RedAlert_root__1VZOr",
                root_light: "RedAlert_root_light__j7Kr3",
                text: "RedAlert_text__UB_Bq",
                button: "RedAlert_button__Ho43z",
            };
        },
        40225: (e, t, r) => {
            "use strict";
            r.d(t, { NonMusicLayout: () => i });
            var n = r(97531),
                a = r(17846),
                o = r(79169);
            let i = (0, n.PA)((e) => {
                let { children: t } = e,
                    { experiments: r } = (0, o.Pjs)();
                return (
                    r.checkExperiment(o.zal.WebNextDisableNonMusic, "on") &&
                        (0, a.redirect)(o.Zyd.main.href),
                    t
                );
            });
        },
        44903: (e, t, r) => {
            "use strict";
            r.d(t, { KidsLayout: () => i });
            var n = r(97531),
                a = r(17846),
                o = r(79169);
            let i = (0, n.PA)((e) => {
                let { children: t } = e,
                    { experiments: r } = (0, o.Pjs)();
                return (
                    r.checkExperiment(o.zal.WebNextDisableKids, "on") &&
                        (0, a.redirect)(o.Zyd.main.href),
                    t
                );
            });
        },
        56140: (e) => {
            e.exports = {
                root: "TrackAboutModalDesktop_root__NHeeO",
                root_withFullscreen:
                    "TrackAboutModalDesktop_root_withFullscreen__jOu4X",
                root_withCustomControls:
                    "TrackAboutModalDesktop_root_withCustomControls__b2JDR",
                header: "TrackAboutModalDesktop_header__7Zl2n",
                modalContent: "TrackAboutModalDesktop_modalContent__yf4i5",
                explicitMark: "TrackAboutModalDesktop_explicitMark__tgVyh",
                important: "TrackAboutModalDesktop_important__tCPvh",
                version: "TrackAboutModalDesktop_version__m0z2v",
                explicit: "TrackAboutModalDesktop_explicit__FGMHf",
                content: "TrackAboutModalDesktop_content__eEGZu",
                artistLink: "TrackAboutModalDesktop_artistLink__ao_zU",
                artists: "TrackAboutModalDesktop_artists__2SlTA",
                overlay: "TrackAboutModalDesktop_overlay__7cEGE",
                textShimmer: "TrackAboutModalDesktop_textShimmer__r5_AA",
                text: "TrackAboutModalDesktop_text__zcpo0",
            };
        },
        63361: (e, t, r) => {
            "use strict";
            r.d(t, { CollectionLayout: () => i });
            var n = r(97531),
                a = r(17846),
                o = r(79169);
            let i = (0, n.PA)((e) => {
                let { children: t } = e,
                    { experiments: r } = (0, o.Pjs)();
                return (
                    r.checkExperiment(o.zal.WebNextDisableCollection, "on") &&
                        (0, a.redirect)(o.Zyd.main.href),
                    t
                );
            });
        },
        63426: (e, t, r) => {
            "use strict";
            r.d(t, { DefaultLayout: () => et });
            var n = r(33008),
                a = r(85896),
                o = r(97531),
                i = r(17846),
                l = r(66268),
                s = r(36396),
                d = r(33638),
                c = r(31588),
                u = r(43535),
                m = r(73437),
                _ = r(22307),
                p = r(44748),
                x = r(71171),
                h = r(18064),
                v = r(44189),
                f = r(77868),
                j = r(79169),
                b = r(36233),
                y = r.n(b);
            let A = (0, o.PA)((e) => {
                let { className: t } = e,
                    {
                        redAlert: { text: r, buttonText: o, href: i },
                    } = (0, j.Pjs)(),
                    l = (0, j.ZpR)(i),
                    { theme: s } = (0, j.DPo)();
                return (0, n.jsx)("div", {
                    className: (0, a.$)(y().wrapper, t),
                    ...(0, h.Am)(h.e8.redAlert.RED_ALERT),
                    children: (0, n.jsxs)("div", {
                        className: (0, a.$)(y().root, {
                            [y().root_light]: s === j.Sxu.Light,
                        }),
                        children: [
                            (0, n.jsx)(f.Caption, {
                                className: y().text,
                                type: "controls",
                                variant: "p",
                                size: "m",
                                weight: "medium",
                                ...(0, h.Am)(h.e8.redAlert.RED_ALERT_TEXT),
                                children: r,
                            }),
                            (0, n.jsx)(v.Button, {
                                className: y().button,
                                color: "secondary",
                                size: "m",
                                radius: "xxxl",
                                onClick: l,
                                ...(0, h.Am)(h.e8.redAlert.RED_ALERT_BUTTON),
                                children: (0, n.jsx)(f.Caption, {
                                    type: "controls",
                                    variant: "span",
                                    size: "m",
                                    weight: "medium",
                                    children: o,
                                }),
                            }),
                        ],
                    }),
                });
            });
            var C = r(83888),
                g = r(31512),
                k = r(74726),
                T = r(15259),
                N = r(90317),
                P = r(86823),
                L = r(83153),
                D = r(10560),
                E = r(13552),
                M = r(55329),
                w = r(44078),
                R = r(60030),
                B = r(52931),
                O = r(15840),
                S = r(18740),
                I = r(66945),
                F = r.n(I),
                z = r(24239),
                V = r(91731),
                $ = r.n(V),
                W = r(13201),
                K = r(40258),
                U = r(73827),
                Y = r(42213);
            let G = { p1: "czmwt", p2: "hsnu", puid1: "", puid2: "" };
            var H = r(20138),
                Q = r.n(H);
            let X = (0, o.PA)((e) => {
                    let {
                            className: t,
                            forwardRef: r,
                            onAdvertChange: o,
                            ...i
                        } = e,
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: l },
                            },
                        } = (0, j.Pjs)(),
                        { formatMessage: s } = (0, U.A)(),
                        d = (0, Y.c)((e) => {
                            void 0 !== e && l.setType(e), o();
                        });
                    return (0, n.jsx)("section", {
                        ref: r,
                        className: (0, a.$)(Q().root, t, {
                            [Q().root_hidden]: !l.isVisible,
                        }),
                        "aria-label": s({ id: "advert.banner" }),
                        role: "banner",
                        ...i,
                        children: (0, n.jsx)(S.NX, {
                            className: Q().advert,
                            ownerId: j.PVv,
                            containerId: "adfox_173831489272852769",
                            params: G,
                            onLoad: l.setType,
                            onRender: d,
                            onError: l.toggleHasErrorTrue,
                            onNoAds: l.toggleNoAdsTrue,
                        }),
                    });
                }),
                Z = (0, l.forwardRef)((e, t) =>
                    (0, n.jsx)(X, { forwardRef: t, ...e }),
                );
            var q = r(29607),
                J = r.n(q);
            let ee = (0, o.PA)((e) => {
                    var t;
                    let { children: r } = e,
                        [o, i] = (0, l.useState)(!1),
                        [s, d] = (0, l.useState)(!0),
                        [c, u] = (0, l.useState)(!1),
                        { contentRef: m, contentScrollRef: _ } = (0, j.gKY)(),
                        p = (0, l.useRef)(null),
                        { isFreemium: x } = (0, j.XCI)(),
                        { user: h, settings: v, experiments: f } = (0, j.Pjs)(),
                        b =
                            v.isMobile &&
                            (f.checkExperiment(
                                j.zal.WebNextTouchAds,
                                "small_banner",
                            ) ||
                                f.checkExperiment(
                                    j.zal.WebNextTouchAds,
                                    "large_banner",
                                )),
                        y =
                            (!h.isAuthorized || x) &&
                            !(null == (t = v.browserInfo)
                                ? void 0
                                : t.isTouch) &&
                            !b,
                        A = (0, l.useCallback)(() => {
                            d(!1), i(!0);
                        }, [d, i]),
                        C = (0, l.useCallback)(() => {
                            d(!0), i(!1);
                        }, [d, i]),
                        g = (0, l.useCallback)(() => {
                            u(!1);
                        }, [u]),
                        k = (0, l.useMemo)(
                            () =>
                                y
                                    ? (0, n.jsx)(Z, {
                                          className: (0, a.$)(J().banner, {
                                              [J().banner_canShow]: o,
                                          }),
                                          onFocus: A,
                                          onBlur: C,
                                          onAdvertChange: g,
                                          ref: p,
                                      })
                                    : null,
                            [y, o, A, C, g],
                        ),
                        T = (0, l.useCallback)(() => {
                            var e;
                            if (!k) return;
                            if (!m || !_) return void i(!0);
                            let t = _.scrollTop > 0,
                                r =
                                    m.clientHeight +
                                        ((null == (e = p.current)
                                            ? void 0
                                            : e.offsetHeight) || 0) <
                                    _.scrollHeight;
                            if ((r ? d(!0) : !r && t && d(!1), !s || (!t && c)))
                                return;
                            let n = !t;
                            i(n), n && u(!0);
                        }, [m, _, k, s, c, i, d, u]);
                    (0, l.useEffect)(() => {
                        T();
                    }, [T, _]);
                    let N = (0, l.useMemo)(() => (0, W.A)(T, 200), [T]);
                    return (
                        (0, K.L)({ onScroll: N, elementRef: _ }),
                        (0, n.jsxs)("div", {
                            className: J().root,
                            children: [
                                k,
                                (0, n.jsx)("div", {
                                    className: J().content,
                                    children: r,
                                }),
                            ],
                        })
                    );
                }),
                et = (0, o.PA)((e) => {
                    var t, r, o, h, v;
                    let { className: f, children: b } = e,
                        y = (0, i.usePathname)(),
                        { setCompositePlayerBarRef: I } = (0, j.gKY)(),
                        {
                            settings: {
                                browserInfo: V,
                                isMobile: W,
                                isWindowsApplication: K,
                                isMacOSApplication: U,
                                isLinuxApplication: Y,
                            },
                            experiments: G,
                            communication: H,
                            user: Q,
                            redAlert: X,
                            downloadMobileApp: Z,
                            album: q,
                            albumCPA: {
                                isPlusCPAPlayerBarEnabled: J,
                                isHidePlusModalEnabled: et,
                            },
                            modals: { buySubscriptionModal: er },
                        } = (0, j.Pjs)(),
                        { isFreemium: en } = (0, j.XCI)();
                    (0, j.dKN)();
                    let ea =
                            (!Q.isAuthorized || en) &&
                            (null == V ? void 0 : V.isTouch),
                        eo = (0, R.df)(),
                        ei = G.checkExperiment(j.zal.WebNextArtistInfo, "on"),
                        el =
                            !X.isVisible &&
                            !W &&
                            (null == (t = H.list)
                                ? void 0
                                : t.barBelow.isVisible) &&
                            (null == (r = H.list)
                                ? void 0
                                : r.barBelow.hasAnimationAlreadyBeenStarted),
                        es =
                            G.checkExperiment(
                                j.zal.WebNextDeeplinksToMobile,
                                "on",
                            ) &&
                            Q.hasPlus &&
                            !!(null == V ? void 0 : V.isMobile) &&
                            !1,
                        { setDefaultLayoutRef: ed } = (0, j.gKY)(),
                        ec = J(
                            null == q ? void 0 : q.id,
                            null == q || null == (o = q.meta)
                                ? void 0
                                : o.isNonMusic,
                        ),
                        eu = et(
                            null == q ? void 0 : q.id,
                            null == q || null == (h = q.meta)
                                ? void 0
                                : h.isNonMusic,
                        ),
                        em = !ea || ec,
                        e_ = ec && (null == V ? void 0 : V.isTouch);
                    return (
                        (0, l.useEffect)(() => {
                            eu && er.close();
                        }, [eu, er]),
                        (0, n.jsx)(ee, {
                            children: (0, n.jsx)(S.do, {
                                isEnabled: es,
                                children: (0, n.jsxs)("div", {
                                    ref: ed,
                                    className: (0, a.$)(
                                        F().root,
                                        $().root,
                                        {
                                            [$()
                                                .root_applicationPreserveTitleBar]:
                                                K || Y,
                                            [$().root_withBarBelow]:
                                                X.isVisible || el,
                                            ["modFeatures_alwaysWideBar"]: window.ALWAYS_WIDE_BAR?.(),
                                        },
                                        f,
                                    ),
                                    children: [
                                        e_ && (0, n.jsx)(L.BZ, { modal: er }),
                                        !W &&
                                            em &&
                                            (0, n.jsx)(_.Fp, {
                                                className: (0, a.$)(
                                                    $().navbar,
                                                    {
                                                        [$()
                                                            .navbar_application_windows]:
                                                            K,
                                                        [$()
                                                            .navbar_application_macos]:
                                                            U,
                                                        [$()
                                                            .navbar_application_linux]:
                                                            Y,
                                                    },
                                                ),
                                            }),
                                        (0, n.jsx)(d.UC, {
                                            className: (0, a.$)(F().content, {
                                                [F().content_withPlayerBar]: W,
                                            }),
                                            children: (0, n.jsxs)(
                                                S.tH,
                                                {
                                                    fallback: C.w,
                                                    children: [
                                                        b,
                                                        (0, n.jsx)(z.m, {}),
                                                    ],
                                                },
                                                y,
                                            ),
                                        }),
                                        !W &&
                                            em &&
                                            (0, n.jsx)(j.nVz, {
                                                pageId: j._Q$.PLAYER,
                                                children: (0, n.jsx)(x.LN, {
                                                    className: F().playerBar,
                                                }),
                                            }),
                                        W &&
                                            em &&
                                            (0, n.jsxs)("div", {
                                                ref: I,
                                                className:
                                                    F().compositePlayerBar,
                                                children: [
                                                    es && (0, n.jsx)(S.jg, {}),
                                                    (0, n.jsx)(j.nVz, {
                                                        pageId: j._Q$.PLAYER,
                                                        children: (0, n.jsx)(
                                                            x.LN,
                                                            {
                                                                className:
                                                                    F()
                                                                        .playerBar,
                                                            },
                                                        ),
                                                    }),
                                                    (0, n.jsx)(_.Fp, {
                                                        className: (0, a.$)(
                                                            $().navbar,
                                                            {
                                                                [$()
                                                                    .navbar_application_windows]:
                                                                    K,
                                                                [$()
                                                                    .navbar_application_macos]:
                                                                    U,
                                                                [$()
                                                                    .navbar_application_linux]:
                                                                    Y,
                                                            },
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        X.isVisible &&
                                            (0, n.jsx)(A, {
                                                className: $().barBelow,
                                            }),
                                        !X.isVisible &&
                                            !W &&
                                            H.list &&
                                            (0, n.jsx)(P.Bx, {
                                                className: $().barBelow,
                                                barBelow: H.list.barBelow,
                                            }),
                                        (null == (v = H.list)
                                            ? void 0
                                            : v.modal) &&
                                            (0, n.jsx)(D.ov, {
                                                modal: H.list.modal,
                                            }),
                                        (0, n.jsx)(j.nVz, {
                                            pageId: j._Q$.PLAYER,
                                            children: (0, n.jsx)(x.vR, {}),
                                        }),
                                        eo &&
                                            (0, n.jsx)(j.nVz, {
                                                pageId: j._Q$.VIDEO_PLAYER,
                                                children: (0, n.jsx)(k.A2, {}),
                                            }),
                                        (0, n.jsx)(B.Pe, {}),
                                        (0, n.jsx)(j.nVz, {
                                            pageId: j._Q$.TRAILER,
                                            children: (0, n.jsx)(g.f, {}),
                                        }),
                                        (0, n.jsx)(T.p, {}),
                                        eo && (0, n.jsx)(d.$9, {}),
                                        (0, n.jsx)(d.US, {}),
                                        ei && (0, n.jsx)(N.y8, {}),
                                        !Q.hasPlus &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(p.cw, {}),
                                                    (0, n.jsx)(c.g, {}),
                                                    (0, n.jsx)(x.BG, {}),
                                                ],
                                            }),
                                        !Q.hasPlus && (0, n.jsx)(m.x8, {}),
                                        (0, n.jsx)(M.P, {}),
                                        (0, n.jsx)(d.VW, {}),
                                        (0, n.jsx)(s.hq, {}),
                                        (0, n.jsx)(O.mt, {}),
                                        (0, n.jsx)(w.U6, {}),
                                        Z.shouldShow() && (0, n.jsx)(u.h, {}),
                                        (0, n.jsx)(E.w, {}),
                                    ],
                                }),
                            }),
                        })
                    );
                });
        },
        66945: (e) => {
            e.exports = {
                root: "CommonLayout_root__WC_W1",
                content: "CommonLayout_content__zy_Ja",
                content_withPlayerBar:
                    "CommonLayout_content_withPlayerBar__wTpoS",
                playerBar: "CommonLayout_playerBar__zXRxq",
                compositePlayerBar: "CommonLayout_compositePlayerBar__hjZRp",
            };
        },
        72933: (e, t, r) => {
            "use strict";
            r.d(t, { PromoLandingLayout: () => k });
            var n = r(33008),
                a = r(85896),
                o = r(97531),
                i = r(17846),
                l = r(66268),
                s = r(95273),
                d = r(33638),
                c = r(31588),
                u = r(44748),
                m = r(71171),
                _ = r(83888),
                p = r(83153),
                x = r(52931),
                h = r(15840),
                v = r(79169),
                f = r(18740),
                j = r(66945),
                b = r.n(j),
                y = r(24239),
                A = r(92913),
                C = r.n(A);
            let g = {
                    enter: C().animatedPlayer_enter,
                    enterActive: C().animatedPlayer_enter_active,
                    exit: C().animatedPlayer_exit,
                    exitActive: C().animatedPlayer_exit_active,
                },
                k = (0, o.PA)((e) => {
                    let { className: t, children: r } = e,
                        o = (0, i.usePathname)(),
                        j = (0, l.useRef)(null),
                        {
                            settings: { isMobile: A },
                            modals: { promoLandingBuySubscriptionModal: k },
                            promolanding: { state: T },
                        } = (0, v.Pjs)(),
                        { isFreemium: N } = (0, v.XCI)();
                    return (0, n.jsxs)("div", {
                        style: {
                            "--promo-landing-layout-transition-duration":
                                "".concat(220, "ms"),
                        },
                        className: (0, a.$)(
                            (0, v.JH_)(v.Sxu.Dark),
                            b().root,
                            C().root,
                            t,
                        ),
                        children: [
                            (0, n.jsx)(d.i6, {
                                className: (0, a.$)(b().content, {
                                    [b().content_withPlayerBar]: A,
                                }),
                                children: (0, n.jsxs)(
                                    f.tH,
                                    {
                                        fallback: _.w,
                                        children: [r, (0, n.jsx)(y.m, {})],
                                    },
                                    o,
                                ),
                            }),
                            (0, n.jsx)(s.A, {
                                nodeRef: j,
                                in: !!T.entityMeta,
                                timeout: 220,
                                classNames: g,
                                unmountOnExit: !0,
                                children: (0, n.jsx)(v.nVz, {
                                    pageId: v._Q$.PLAYER,
                                    children: (0, n.jsx)("div", {
                                        ref: j,
                                        className: (0, a.$)(C().playerBar, {
                                            [b().compositePlayerBar]: A,
                                            [b().playerBar]: !A,
                                        }),
                                        children: (0, n.jsx)(m.Hq, {
                                            className: (0, a.$)({
                                                [b().playerBar]: A,
                                            }),
                                        }),
                                    }),
                                }),
                            }),
                            N &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(p.BZ, { modal: k }),
                                        (0, n.jsx)(c.g, {
                                            withAlreadyInPlusButton: !0,
                                        }),
                                        (0, n.jsx)(h.mt, {}),
                                        (0, n.jsx)(u.cw, {}),
                                    ],
                                }),
                            (0, n.jsx)(x.Pe, {}),
                        ],
                    });
                });
        },
        74375: (e, t, r) => {
            "use strict";
            r.d(t, { default: () => a.a });
            var n = r(5884),
                a = r.n(n);
        },
        83507: (e) => {
            e.exports = { root: "LayoutNotificationContainers_root__5HClw" };
        },
        90108: (e, t, r) => {
            "use strict";
            r.d(t, { A: () => m });
            var n = r(77776),
                a = r(92495),
                o = r(34994),
                i = r(66268),
                l = r(36861);
            function s(e, t) {
                var r = Object.create(null);
                return (
                    e &&
                        i.Children.map(e, function (e) {
                            return e;
                        }).forEach(function (e) {
                            r[e.key] = t && (0, i.isValidElement)(e) ? t(e) : e;
                        }),
                    r
                );
            }
            function d(e, t, r) {
                return null != r[t] ? r[t] : e.props[t];
            }
            var c =
                    Object.values ||
                    function (e) {
                        return Object.keys(e).map(function (t) {
                            return e[t];
                        });
                    },
                u = (function (e) {
                    function t(t, r) {
                        var n = e.call(this, t, r) || this,
                            a = n.handleExited.bind(
                                (function (e) {
                                    if (void 0 === e)
                                        throw ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called",
                                        );
                                    return e;
                                })(n),
                            );
                        return (
                            (n.state = {
                                contextValue: { isMounting: !0 },
                                handleExited: a,
                                firstRender: !0,
                            }),
                            n
                        );
                    }
                    (0, o.A)(t, e);
                    var r = t.prototype;
                    return (
                        (r.componentDidMount = function () {
                            (this.mounted = !0),
                                this.setState({
                                    contextValue: { isMounting: !1 },
                                });
                        }),
                        (r.componentWillUnmount = function () {
                            this.mounted = !1;
                        }),
                        (t.getDerivedStateFromProps = function (e, t) {
                            var r,
                                n,
                                a = t.children,
                                o = t.handleExited;
                            return {
                                children: t.firstRender
                                    ? s(e.children, function (t) {
                                          return (0, i.cloneElement)(t, {
                                              onExited: o.bind(null, t),
                                              in: !0,
                                              appear: d(t, "appear", e),
                                              enter: d(t, "enter", e),
                                              exit: d(t, "exit", e),
                                          });
                                      })
                                    : (Object.keys(
                                          (n = (function (e, t) {
                                              function r(r) {
                                                  return r in t ? t[r] : e[r];
                                              }
                                              (e = e || {}), (t = t || {});
                                              var n,
                                                  a = Object.create(null),
                                                  o = [];
                                              for (var i in e)
                                                  i in t
                                                      ? o.length &&
                                                        ((a[i] = o), (o = []))
                                                      : o.push(i);
                                              var l = {};
                                              for (var s in t) {
                                                  if (a[s])
                                                      for (
                                                          n = 0;
                                                          n < a[s].length;
                                                          n++
                                                      ) {
                                                          var d = a[s][n];
                                                          l[a[s][n]] = r(d);
                                                      }
                                                  l[s] = r(s);
                                              }
                                              for (n = 0; n < o.length; n++)
                                                  l[o[n]] = r(o[n]);
                                              return l;
                                          })(a, (r = s(e.children)))),
                                      ).forEach(function (t) {
                                          var l = n[t];
                                          if ((0, i.isValidElement)(l)) {
                                              var s = t in a,
                                                  c = t in r,
                                                  u = a[t],
                                                  m =
                                                      (0, i.isValidElement)(
                                                          u,
                                                      ) && !u.props.in;
                                              c && (!s || m)
                                                  ? (n[t] = (0, i.cloneElement)(
                                                        l,
                                                        {
                                                            onExited: o.bind(
                                                                null,
                                                                l,
                                                            ),
                                                            in: !0,
                                                            exit: d(
                                                                l,
                                                                "exit",
                                                                e,
                                                            ),
                                                            enter: d(
                                                                l,
                                                                "enter",
                                                                e,
                                                            ),
                                                        },
                                                    ))
                                                  : c || !s || m
                                                    ? c &&
                                                      s &&
                                                      (0, i.isValidElement)(
                                                          u,
                                                      ) &&
                                                      (n[t] = (0,
                                                      i.cloneElement)(l, {
                                                          onExited: o.bind(
                                                              null,
                                                              l,
                                                          ),
                                                          in: u.props.in,
                                                          exit: d(l, "exit", e),
                                                          enter: d(
                                                              l,
                                                              "enter",
                                                              e,
                                                          ),
                                                      }))
                                                    : (n[t] = (0,
                                                      i.cloneElement)(l, {
                                                          in: !1,
                                                      }));
                                          }
                                      }),
                                      n),
                                firstRender: !1,
                            };
                        }),
                        (r.handleExited = function (e, t) {
                            var r = s(this.props.children);
                            e.key in r ||
                                (e.props.onExited && e.props.onExited(t),
                                this.mounted &&
                                    this.setState(function (t) {
                                        var r = (0, a.A)({}, t.children);
                                        return delete r[e.key], { children: r };
                                    }));
                        }),
                        (r.render = function () {
                            var e = this.props,
                                t = e.component,
                                r = e.childFactory,
                                a = (0, n.A)(e, ["component", "childFactory"]),
                                o = this.state.contextValue,
                                s = c(this.state.children).map(r);
                            return (delete a.appear,
                            delete a.enter,
                            delete a.exit,
                            null === t)
                                ? i.createElement(l.A.Provider, { value: o }, s)
                                : i.createElement(
                                      l.A.Provider,
                                      { value: o },
                                      i.createElement(t, a, s),
                                  );
                        }),
                        t
                    );
                })(i.Component);
            (u.propTypes = {}),
                (u.defaultProps = {
                    component: "div",
                    childFactory: function (e) {
                        return e;
                    },
                });
            let m = u;
        },
        91731: (e) => {
            e.exports = {
                root: "DefaultLayout_root__7J0wo",
                root_applicationPreserveTitleBar:
                    "DefaultLayout_root_applicationPreserveTitleBar__ygJtq",
                root_withBarBelow: "DefaultLayout_root_withBarBelow__jPsaV",
                barBelow: "DefaultLayout_barBelow__y6PFU",
                navbar: "DefaultLayout_navbar__LIQWG",
                navbar_application_macos:
                    "DefaultLayout_navbar_application_macos__9dj3u",
                navbar_application_linux:
                    "DefaultLayout_navbar_application_linux__ejlGn",
                navbar_application_windows:
                    "DefaultLayout_navbar_application_windows__3hDQ_",
            };
        },
        92913: (e) => {
            e.exports = {
                root: "PromoLandingLayout_root__nFZZ7",
                playerBar: "PromoLandingLayout_playerBar__7tyD3",
                animatedPlayer_enter:
                    "PromoLandingLayout_animatedPlayer_enter__0MM1u",
                animatedPlayer_enter_active:
                    "PromoLandingLayout_animatedPlayer_enter_active__mEGFp",
                "enter-fade": "PromoLandingLayout_enter-fade__fGSAV",
                "enter-move": "PromoLandingLayout_enter-move__800PQ",
                animatedPlayer_exit:
                    "PromoLandingLayout_animatedPlayer_exit__D9q3r",
                animatedPlayer_exit_active:
                    "PromoLandingLayout_animatedPlayer_exit_active__VnBYL",
                "exit-fade": "PromoLandingLayout_exit-fade__4rLUP",
                "exit-move": "PromoLandingLayout_exit-move__cg_8c",
            };
        },
        96803: (e, t, r) => {
            "use strict";
            r.d(t, { ConcertLayout: () => i });
            var n = r(97531),
                a = r(17846),
                o = r(79169);
            let i = (0, n.PA)((e) => {
                let { children: t } = e,
                    { experiments: r } = (0, o.Pjs)();
                return (
                    r.checkExperiment(o.zal.WebNextDisableConcertsTab, "on") &&
                        (0, a.redirect)("/"),
                    t
                );
            });
        },
        98701: (e) => {
            e.exports = {
                button: "CrackdownModal_button__IWTpu",
                important: "CrackdownModal_important__eKBtD",
                buttonMainText: "CrackdownModal_buttonMainText__pAlET",
            };
        },
    },
]);
