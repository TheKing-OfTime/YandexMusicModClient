(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2101],
    {
        8640: function (e, t, i) {
            "use strict";
            i.d(t, {
                DefaultLayout: function () {
                    return eA;
                },
            });
            var n = i(65301),
                a = i(9695),
                r = i(96233),
                o = i(99678),
                l = i(89287),
                s = i(82973),
                d = i(58997),
                c = i(91207),
                u = i(37184),
                _ = i(14386),
                p = i(29778),
                m = i(81437),
                v = i(81393),
                x = i.n(v);
            let b = (0, r.Pi)((e) => {
                    let { children: t, link: i } = e,
                        {
                            currentTrackInfo: { modal: a },
                        } = (0, d.oR4)();
                    return i
                        ? (0, n.jsx)(p.rU, {
                              className: x().link,
                              href: i,
                              onClick: a.close,
                              children: (0, n.jsx)(m.Caption, { variant: "div", size: "l", children: t }),
                          })
                        : (0, n.jsx)(m.Caption, { variant: "div", size: "l", children: t });
                }),
                h = (e) => {
                    let { title: t, description: i, children: a, link: r } = e;
                    return i || a
                        ? (0, n.jsxs)("div", {
                              className: x().infoBlock,
                              children: [
                                  t && (0, n.jsx)(m.Heading, { variant: "h4", className: x().infoTitle, children: t }),
                                  (0, n.jsx)(b, { link: r, children: i || a }),
                              ],
                          })
                        : null;
                };
            var C = i(95887),
                g = i.n(C);
            let f = (0, r.Pi)(() => {
                    let { formatMessage: e } = (0, u.Z)(),
                        { notify: t } = (0, d.d$W)(),
                        { contentRef: i } = (0, d.$Y6)(),
                        {
                            currentClipInfo: r,
                            settings: { isMobile: o, isWindowsApplication: l },
                            fullscreenVideoPlayer: s,
                        } = (0, d.oR4)(),
                        { modal: m, clip: v } = r;
                    !v && r.isClipIdle && r.getClip(), !r.credits && r.isCreditsIdle && r.getCreditsInfo();
                    let x = null == v ? void 0 : v.title,
                        b = null == v ? void 0 : v.isExplicit,
                        C = null == v ? void 0 : v.clipExplicitMark,
                        f = (0, c.useMemo)(
                            () =>
                                r.isClipLoading || r.isClipRejected
                                    ? (0, n.jsx)(p.Yh, { className: g().titleShimmer, count: 1 })
                                    : v
                                    ? (0, n.jsxs)("span", {
                                          children: [
                                              x,
                                              b &&
                                                  C &&
                                                  (0, n.jsx)(p.$i, {
                                                      getDescriptionTexts: v.getDescriptionTexts,
                                                      className: (0, a.W)(g().explicitMark, g().important),
                                                      iconSize: "xxs",
                                                      variant: C,
                                                  }),
                                          ],
                                      })
                                    : void 0,
                            [v, x, b, C, r.isClipLoading, r.isClipRejected]
                        );
                    (0, c.useEffect)(
                        () => () => {
                            m.close(), r.reset();
                        },
                        [r, m]
                    );
                    let y = (0, c.useCallback)(() => {
                            m.close(), r.reset();
                        }, [r, m]),
                        j = (0, c.useCallback)(
                            (e) => {
                                var t;
                                e || r.reset(), null === (t = m.onOpenChange) || void 0 === t || t.call(m, e);
                            },
                            [r, m]
                        );
                    r.isRejected &&
                        (y(),
                        t((0, n.jsx)(p.Q, { error: e({ id: "error-messages.error-during-action" }) }), {
                            containerId: d.W$x.ERROR,
                        }));
                    let k = (0, c.useMemo)(() => {
                        var e;
                        return r.isCreditsLoading || r.isCreditsRejected
                            ? (0, n.jsx)(p.Yh, {})
                            : (null === (e = r.credits) || void 0 === e ? void 0 : e.length)
                            ? r.credits.map((e) => (0, n.jsx)(h, { title: e.title, description: e.value }, e.title))
                            : null;
                    }, [r.credits, r.isCreditsLoading, r.isCreditsRejected]);
                    return (0, n.jsx)(_.u, {
                        placement: o ? "default" : "right",
                        open: m.isOpened,
                        onClose: y,
                        contentClassName: g().modalContent,
                        title: f,
                        headerClassName: g().header,
                        className: (0, a.W)(g().root, {
                            [g().root_withFullscreen]: s.modal.isOpened,
                            [g().root_withWindows]: l,
                        }),
                        onOpenChange: j,
                        labelClose: e({ id: "interface-actions.close" }),
                        portalNode: o || s.modal.isOpened ? null : i,
                        children: (0, n.jsx)("div", { className: g().content, children: k }),
                    });
                }),
                y = (0, r.Pi)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, d.oR4)();
                    return e ? null : (0, n.jsx)(f, {});
                });
            i(52085), i(8046);
            var j = i(2319),
                k = i(9193),
                A = i.n(k);
            let V = (e) => {
                    let { className: t, forwardRef: i } = e,
                        { formatMessage: r } = (0, u.Z)(),
                        { state: o, toggleFalse: l } = (0, j.O)(!0);
                    return (0, n.jsx)("section", {
                        className: (0, a.W)(A().root, t, { [A().root_hidden]: !o }),
                        "aria-label": r({ id: "advert.banner" }),
                        ref: i,
                        children: (0, n.jsx)("div", {
                            className: A().contentWrapper,
                            children: (0, n.jsx)(p.hd, {
                                className: A().content,
                                productionBlockId: "R-I-136563-11",
                                testBlockId: "R-A-740891-2",
                                onError: l,
                                onNoAds: l,
                            }),
                        }),
                    });
                },
                T = (0, c.forwardRef)((e, t) => (0, n.jsx)(V, { forwardRef: t, ...e })),
                R = ["album", "users", "artist", "chart"],
                N = () => {
                    let e = (0, o.usePathname)();
                    return (0, c.useMemo)(() => {
                        let [, t] = e.split("/");
                        return !!t && R.includes(t);
                    }, [e]);
                };
            var M = i(47059),
                B = i.n(M);
            B().secondaryEnter, B().secondaryEnterActive;
            let w = (0, r.Pi)((e) => {
                let { className: t, children: i } = e;
                (0, d.uK4)();
                let { setContentRef: r, setContentRootRef: o, setSideBannerRef: l } = (0, d.$Y6)(),
                    { isFreemium: s } = (0, d.NMB)(),
                    {
                        user: u,
                        settings: { isMobile: _ },
                    } = (0, d.oR4)(),
                    p = !u.isAuthorized || s;
                return (
                    N(),
                    (0, c.useRef)(null),
                    (0, n.jsxs)("div", {
                        className: (0, a.W)(B().rootOld, t),
                        ref: o,
                        children: [
                            (0, n.jsx)("main", {
                                className: B().main,
                                ref: r,
                                children: (0, n.jsx)(c.Suspense, { children: i }),
                            }),
                            p && (0, n.jsx)(T, { className: B().sideBanner, ref: l }),
                        ],
                    })
                );
            });
            var I = i(35068);
            let E = (0, r.Pi)(() => {
                var e, t;
                let { formatMessage: i } = (0, u.Z)(),
                    { currentTrackInfo: a } = (0, d.oR4)(),
                    { fullTrack: r } = a;
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(h, { children: null == r ? void 0 : r.shortDescription }),
                        (0, n.jsx)(h, {
                            title: i({ id: "entity-names.audiobook" }),
                            description:
                                null == r ? void 0 : null === (e = r.mainAlbum) || void 0 === e ? void 0 : e.title,
                            link: null == r ? void 0 : null === (t = r.mainAlbum) || void 0 === t ? void 0 : t.url,
                        }),
                    ],
                });
            });
            var D = i(4520);
            let P = (0, r.Pi)(() => {
                    var e, t;
                    let { formatMessage: i } = (0, u.Z)(),
                        { currentTrackInfo: a } = (0, d.oR4)(),
                        r = a.fullTrack,
                        o = (0, c.useMemo)(
                            () =>
                                a.fullDescription
                                    ? (0, n.jsx)("span", {
                                          className: x().text,
                                          dangerouslySetInnerHTML: { __html: (0, D.SK)(a.fullDescription) },
                                      })
                                    : null == r
                                    ? void 0
                                    : r.shortDescription,
                            [null == r ? void 0 : r.shortDescription, a.fullDescription]
                        );
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(h, { children: o }),
                            (0, n.jsx)(h, {
                                title: i({ id: "entity-names.podcast" }),
                                description:
                                    null == r ? void 0 : null === (e = r.mainAlbum) || void 0 === e ? void 0 : e.title,
                                link: null == r ? void 0 : null === (t = r.mainAlbum) || void 0 === t ? void 0 : t.url,
                            }),
                        ],
                    });
                }),
                S = (0, r.Pi)(() => {
                    var e, t, i, r, o;
                    let { formatMessage: l } = (0, u.Z)(),
                        { notify: s } = (0, d.d$W)(),
                        { contentRef: m } = (0, d.$Y6)(),
                        {
                            currentTrackInfo: v,
                            settings: { isMobile: b, isWindowsApplication: C, isLinuxApplication: g },
                            fullscreenPlayer: f,
                            experiments: y,
                        } = (0, d.oR4)(),
                        { modal: j } = v,
                        k = v.isUGC,
                        A = y.checkExperiment(d.peG.WebEditorsFeatures, "on");
                    k && v.isTrackIdle && v.getTrackMeta(),
                        v.fullTrack || !v.isTrackIdle || k || v.getFullTrack(),
                        !v.credits && v.isCreditsIdle && v.getCreditsInfo(),
                        ((null === (e = v.fullTrack) || void 0 === e ? void 0 : e.isTrackPodcast) ||
                            (null === (i = v.fullTrack) || void 0 === i
                                ? void 0
                                : null === (t = i.mainAlbum) || void 0 === t
                                ? void 0
                                : t.isPodcast)) &&
                            v.getFullDescription(),
                        (0, c.useEffect)(
                            () => () => {
                                j.close(), v.reset();
                            },
                            [v, j]
                        );
                    let V = (0, c.useCallback)(() => {
                            j.close(), v.reset();
                        }, [v, j]),
                        T = (0, c.useCallback)(
                            (e) => {
                                var t;
                                e || v.reset(), null === (t = j.onOpenChange) || void 0 === t || t.call(j, e);
                            },
                            [v, j]
                        );
                    v.isRejected &&
                        (V(),
                        s((0, n.jsx)(p.Q, { error: l({ id: "error-messages.error-during-action" }) }), {
                            containerId: d.W$x.ERROR,
                        }));
                    let R = v.fullTrack,
                        N = null == R ? void 0 : R.isExplicit,
                        M = null == R ? void 0 : R.trackExplicitMark,
                        B = (0, c.useMemo)(() => {
                            var e;
                            if (R)
                                return (0, n.jsxs)("span", {
                                    children: [
                                        R.title,
                                        R.version &&
                                            (0, n.jsx)("span", { className: x().version, children: R.version }),
                                        N &&
                                            M &&
                                            (0, n.jsx)(p.$i, {
                                                className: (0, a.W)(x().explicitMark, x().important, {
                                                    [x().explicit]: !R.isTrackNonMusic,
                                                }),
                                                getDescriptionTexts:
                                                    null === (e = v.fullTrack) || void 0 === e
                                                        ? void 0
                                                        : e.getDescriptionTexts,
                                                iconSize: "xxs",
                                                variant: M,
                                            }),
                                    ],
                                });
                        }, [R, N, M, null === (r = v.fullTrack) || void 0 === r ? void 0 : r.getDescriptionTexts]),
                        w = (0, c.useMemo)(() => {
                            var e;
                            return (null == R ? void 0 : R.type) === I.V.AUDIOBOOK
                                ? (0, n.jsx)(E, {})
                                : (null == R ? void 0 : R.isTrackPodcast) ||
                                  (null == R
                                      ? void 0
                                      : null === (e = R.mainAlbum) || void 0 === e
                                      ? void 0
                                      : e.isPodcast)
                                ? (0, n.jsx)(P, {})
                                : void 0;
                        }, [R]),
                        D = (0, c.useMemo)(() => {
                            var e;
                            return (null === (e = v.credits) || void 0 === e ? void 0 : e.length)
                                ? v.credits.map((e) => {
                                      let { title: t, value: i } = e;
                                      return (0, n.jsx)(h, { title: t, description: i }, t);
                                  })
                                : null;
                        }, [v.credits]),
                        S = (0, c.useMemo)(() => {
                            var e;
                            if ((null === (e = v.fullTrack) || void 0 === e ? void 0 : e.major) && A) {
                                let e = v.fullTrack.major.name;
                                return (0, n.jsx)(h, { title: "Major", description: e }, e);
                            }
                            return null;
                        }, [null === (o = v.fullTrack) || void 0 === o ? void 0 : o.major, A]);
                    return (0, n.jsx)(_.u, {
                        placement: b ? "default" : "right",
                        open: j.isOpened,
                        onClose: V,
                        contentClassName: x().modalContent,
                        title: B,
                        headerClassName: x().header,
                        className: (0, a.W)(x().root, {
                            [x().root_withFullscreen]: f.modal.isOpened,
                            [x().root_withCustomControls]: C || g,
                        }),
                        overlayClassName: x().overlay,
                        onOpenChange: T,
                        labelClose: l({ id: "interface-actions.close" }),
                        portalNode: b || f.modal.isOpened ? null : m,
                        children: (0, n.jsxs)("div", {
                            className: x().content,
                            children: [
                                (v.isTrackLoading || v.isTrackRejected) &&
                                    (0, n.jsx)(p.AH, { textClassName: x().textShimmer }),
                                w,
                                (v.isCreditsLoading || v.isCreditsRejected) &&
                                    (0, n.jsx)(p.AH, { textClassName: x().textShimmer }),
                                D,
                                S,
                            ],
                        }),
                    });
                }),
                L = (0, r.Pi)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, d.oR4)();
                    return e ? null : (0, n.jsx)(S, {});
                });
            var O = i(55975),
                W = i(3154),
                F = i(13029),
                z = i.n(F);
            let U = (0, r.Pi)(() => {
                var e;
                let { formatMessage: t } = (0, u.Z)(),
                    { notify: i } = (0, d.d$W)(),
                    { contentRef: r } = (0, d.$Y6)(),
                    {
                        trackLyrics: o,
                        settings: { isMobile: l },
                        fullscreenPlayer: s,
                    } = (0, d.oR4)(),
                    { modal: m, track: v } = o,
                    x = null == v ? void 0 : v.isExplicit,
                    b = null == v ? void 0 : v.trackExplicitMark;
                o.isNeededToLoad && v && o.getLyrics(v.id),
                    (0, c.useEffect)(
                        () => () => {
                            o.reset();
                        },
                        [o]
                    ),
                    (0, c.useEffect)(() => {
                        m.isOpened && v && o.sendViews({ trackId: String(v.id), albumId: String(v.albumId) });
                    }, [o.isResolve, m.isOpened, o, v]);
                let h = (0, c.useCallback)(() => {
                        m.close(), o.reset();
                    }, [o, m]),
                    C = (0, c.useCallback)(
                        (e) => {
                            var t;
                            e || o.reset(), null === (t = m.onOpenChange) || void 0 === t || t.call(m, e);
                        },
                        [o, m]
                    );
                o.isRejected &&
                    (h(),
                    i((0, n.jsx)(p.Q, { error: t({ id: "error-messages.error-during-action" }) }), {
                        containerId: d.W$x.ERROR,
                    }));
                let g = (0, c.useMemo)(() => {
                    if (v)
                        return (0, n.jsxs)("span", {
                            ...(0, O.BA)(O.QM.content.TRACK_LYRICS_TITLE),
                            children: [
                                v.title,
                                v.version && (0, n.jsx)("span", { className: z().version, children: v.version }),
                                x &&
                                    b &&
                                    (0, n.jsx)(p.$i, {
                                        className: (0, a.W)(z().explicitMark, z().important),
                                        getDescriptionTexts: v.getDescriptionTexts,
                                        iconSize: "xxs",
                                        variant: b,
                                    }),
                            ],
                        });
                }, [v, null == v ? void 0 : v.title, null == v ? void 0 : v.version, x, b]);
                return (0, n.jsx)(_.u, {
                    size: "fitContent",
                    placement: l ? "default" : "right",
                    open: m.isOpened,
                    onOpenChange: C,
                    onClose: h,
                    className: z().root,
                    contentClassName: z().modalContent,
                    portalNode: l || s.modal.isOpened ? null : r,
                    title: g,
                    headerClassName: z().header,
                    overlayClassName: z().overlay,
                    labelClose: t({ id: "interface-actions.close" }),
                    restoreFocus: !0,
                    containerProps: (0, O.BA)(O.QM.content.TRACK_LYRICS_MODAL),
                    closeButtonProps: (0, O.BA)(O.QM.content.TRACK_LYRICS_CLOSE_BUTTON),
                    lockScroll: l,
                    children: (0, n.jsx)("div", {
                        className: z().content,
                        ...(0, O.BA)(O.QM.content.TRACK_LYRICS_TEXT),
                        children: (0, n.jsx)(W.Zz, {
                            lyrics: o.lyrics,
                            authors: o.writersNames,
                            source: null === (e = o.major) || void 0 === e ? void 0 : e.prettyName,
                            isShimmerVisible: o.isShimmerVisible,
                            isShimmerActive: o.isLoading,
                        }),
                    }),
                });
            });
            var G = i(44729),
                $ = i(91878),
                Z = i(93422),
                K = i(22455),
                Y = i(87398);
            let Q = "crackdown-buy-subscription-button",
                H = (0, r.Pi)(() => {
                    let {
                            modals: { crackdownModal: e },
                        } = (0, d.oR4)(),
                        [t, i] = (0, $.z)(),
                        {
                            mainText: a,
                            additionText: r,
                            isShimmerVisible: o,
                            isShimmerActive: l,
                            openPaymentWidgetModal: s,
                        } = (0, Y.xU)({ storeName: "music", offerElement: { element: t, intersectionPropertyId: Q } }),
                        u = (0, c.useMemo)(
                            () =>
                                o
                                    ? (0, n.jsx)(p.ZD, { isActive: l })
                                    : (0, n.jsxs)(p.I7, {
                                          color: "plus",
                                          ref: i,
                                          "data-intersection-property-id": Q,
                                          onClick: s,
                                          children: [
                                              (0, n.jsx)(m.Caption, { variant: "div", size: "l", children: a }),
                                              r && (0, n.jsx)(m.Caption, { variant: "div", size: "m", children: r }),
                                          ],
                                      }),
                            [o, l, a, r, i, s]
                        );
                    return (0, n.jsxs)(p.bf, {
                        open: e.isOpened,
                        onClose: e.close,
                        children: [
                            (0, n.jsx)("div", {
                                className: p.GR.growContainer,
                                children: (0, n.jsx)(Z.Image, {
                                    src: "https://avatars.mds.yandex.net/get-music-misc/70850/img.672491383c0f014022130e5b/orig",
                                    srcSet: "https://avatars.mds.yandex.net/get-music-misc/2419084/img.6724913d3c0f014022130e5e/orig 2x",
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: p.GR.text,
                                "aria-hidden": !0,
                                children: [
                                    (0, n.jsx)(m.Heading, {
                                        variant: "h1",
                                        size: "xl",
                                        className: p.GR.title,
                                        children: (0, n.jsx)(G.Z, {
                                            id: "crackdown.title",
                                            values: { br: (0, n.jsx)("br", {}), nbsp: "\xa0" },
                                        }),
                                    }),
                                    (0, n.jsx)(m.Caption, {
                                        variant: "span",
                                        size: "m",
                                        className: p.GR.description,
                                        children: (0, n.jsx)(G.Z, {
                                            id: "crackdown.description",
                                            values: { br: (0, n.jsx)("br", {}), nbsp: "\xa0" },
                                        }),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(K.y, {
                                children: [
                                    (0, n.jsx)(m.Heading, {
                                        variant: "h1",
                                        children: (0, n.jsx)(G.Z, {
                                            id: "crackdown.title",
                                            values: { br: " ", nbsp: "\xa0" },
                                        }),
                                    }),
                                    (0, n.jsx)(m.Caption, {
                                        variant: "div",
                                        children: (0, n.jsx)(G.Z, {
                                            id: "crackdown.description",
                                            values: { br: " ", nbsp: "\xa0" },
                                        }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)("div", { className: p.GR.buttons, children: u }),
                        ],
                    });
                });
            var X = i(73192),
                q = i(84597),
                J = i(86919),
                ee = i(65829),
                et = i(78372),
                ei = i(80467),
                en = i.n(ei);
            let ea = (0, r.Pi)((e) => {
                let { className: t } = e,
                    {
                        redAlert: { text: i, buttonText: r, href: o },
                    } = (0, d.oR4)(),
                    l = (0, d.s0h)(o),
                    { theme: s } = (0, d.FgM)();
                return (0, n.jsx)("div", {
                    className: (0, a.W)(en().wrapper, t),
                    ...(0, O.BA)(O.QM.redAlert.RED_ALERT),
                    children: (0, n.jsxs)("div", {
                        className: (0, a.W)(en().root, { [en().root_light]: s === d.Q2A.Light }),
                        children: [
                            (0, n.jsx)(m.Caption, {
                                className: en().text,
                                type: "controls",
                                variant: "p",
                                size: "m",
                                weight: "medium",
                                ...(0, O.BA)(O.QM.redAlert.RED_ALERT_TEXT),
                                children: i,
                            }),
                            (0, n.jsx)(et.z, {
                                className: en().button,
                                color: "secondary",
                                size: "m",
                                radius: "xxxl",
                                onClick: l,
                                ...(0, O.BA)(O.QM.redAlert.RED_ALERT_BUTTON),
                                children: (0, n.jsx)(m.Caption, {
                                    type: "controls",
                                    variant: "span",
                                    size: "m",
                                    weight: "medium",
                                    children: r,
                                }),
                            }),
                        ],
                    }),
                });
            });
            var er = i(36643),
                eo = i(94347),
                el = i(24653),
                es = i(39149),
                ed = i(62178),
                ec = i(42363),
                eu = i(18256),
                e_ = i(5410),
                ep = i(31316),
                em = i(52272),
                ev = i.n(em),
                ex = i(66591),
                eb = i(62185),
                eh = i(16659),
                eC = i.n(eh);
            let eg = (e) => {
                    let { className: t, forwardRef: i, onAdvertChange: r, ...o } = e,
                        { state: l, toggleFalse: s } = (0, j.O)(!0),
                        { formatMessage: d } = (0, u.Z)();
                    return (0, n.jsx)("section", {
                        ref: i,
                        className: (0, a.W)(eC().root, t, { [eC().root_hidden]: !l }),
                        "aria-label": d({ id: "advert.banner" }),
                        ...o,
                        children: (0, n.jsx)(p.hd, {
                            productionBlockId: "R-A-336551-5",
                            testBlockId: "R-A-740891-1",
                            onRender: r,
                            onError: s,
                            onNoAds: s,
                        }),
                    });
                },
                ef = (0, c.forwardRef)((e, t) => (0, n.jsx)(eg, { forwardRef: t, ...e }));
            var ey = i(95696),
                ej = i.n(ey);
            let ek = (0, r.Pi)((e) => {
                    var t;
                    let { children: i } = e,
                        [r, o] = (0, c.useState)(!1),
                        [l, s] = (0, c.useState)(!0),
                        [u, _] = (0, c.useState)(!1),
                        { contentRef: p, contentScrollRef: m } = (0, d.$Y6)(),
                        v = (0, c.useRef)(null),
                        { isFreemium: x } = (0, d.NMB)(),
                        { user: b, settings: h } = (0, d.oR4)(),
                        C =
                            (!b.isAuthorized || x) &&
                            !(null === (t = h.browserInfo) || void 0 === t ? void 0 : t.isTouch),
                        g = (0, c.useCallback)(() => {
                            s(!1), o(!0);
                        }, [s, o]),
                        f = (0, c.useCallback)(() => {
                            s(!0), o(!1);
                        }, [s, o]),
                        y = (0, c.useCallback)(() => {
                            _(!1);
                        }, [_]),
                        j = (0, c.useMemo)(
                            () =>
                                C
                                    ? (0, n.jsx)(ef, {
                                          className: (0, a.W)(ej().banner, { [ej().banner_canShow]: r }),
                                          onFocus: g,
                                          onBlur: f,
                                          onAdvertChange: y,
                                          ref: v,
                                      })
                                    : null,
                            [C, r, g, f, y]
                        ),
                        k = (0, c.useCallback)(() => {
                            var e;
                            if (!j) return;
                            if (!p || !m) {
                                o(!0);
                                return;
                            }
                            let t = m.scrollTop > 0,
                                i =
                                    p.clientHeight +
                                        ((null === (e = v.current) || void 0 === e ? void 0 : e.offsetHeight) || 0) <
                                    m.scrollHeight;
                            if ((i ? s(!0) : !i && t && s(!1), !l || (!t && u))) return;
                            let n = !t;
                            o(n), n && _(!0);
                        }, [p, m, j, l, u, o, s, _]);
                    (0, c.useEffect)(() => {
                        k();
                    }, [k, m]);
                    let A = (0, c.useMemo)(() => (0, ex.Z)(k, 200), [k]);
                    return (
                        (0, eb.v)({ onScroll: A, elementRef: m }),
                        (0, n.jsxs)("div", {
                            className: ej().root,
                            children: [j, (0, n.jsx)("div", { className: ej().content, children: i })],
                        })
                    );
                }),
                eA = (0, r.Pi)((e) => {
                    var t, i, r;
                    let { className: c, children: u } = e,
                        _ = (0, o.usePathname)(),
                        {
                            settings: {
                                browserInfo: m,
                                isMobile: v,
                                isWindowsApplication: x,
                                isMacOSApplication: b,
                                isLinuxApplication: h,
                            },
                            experiments: C,
                            communication: g,
                            user: f,
                            redAlert: j,
                        } = (0, d.oR4)(),
                        { isFreemium: k } = (0, d.NMB)();
                    (0, d.HY3)();
                    let A = (!f.isAuthorized || k) && (null == m ? void 0 : m.isTouch),
                        V = C.checkExperiment(d.peG.WebNextTrackAboutModal, "on"),
                        T = C.checkExperiment(d.peG.WebNextClips, "on"),
                        R = C.checkExperiment(d.peG.WebNextTrackModal, "on"),
                        N = !f.hasPlus && C.checkExperiment(d.peG.WebNextFamilyInvite, "on"),
                        M =
                            !j.isVisible &&
                            !v &&
                            (null === (t = g.list) || void 0 === t ? void 0 : t.barBelow.isVisible) &&
                            (null === (i = g.list) || void 0 === i
                                ? void 0
                                : i.barBelow.hasAnimationAlreadyBeenStarted),
                        B = C.checkExperiment(d.peG.WebNextShareIframe, "on");
                    return (0, n.jsx)(ek, {
                        children: (0, n.jsxs)( "div", {
                            className: ( 0, a.W )(
                                ev().root,
                                {
                                    [ ev().root_applicationPreserveTitleBar ] : x || h,
                                    [ ev().root_withBarBelow ]                : j.isVisible || M,
                                    [ 'modFeatures_wideBar' ]                 : window.WIDE_BAR?.(),
                                    [ 'modFeatures_fixRootPadding' ]          : window.FIX_ROOT_PADDING?.(),
                                },
                                c
                            ),
                            children: [
                                !v &&
                                    !A &&
                                    (0, n.jsx)(q.wp, {
                                        className: (0, a.W)(ev().navbar, {
                                            [ev().navbar_application_windows]: x,
                                            [ev().navbar_application_macos]: b,
                                            [ev().navbar_application_linux]: h,
                                        }),
                                    }),
                                (0, n.jsx)(w, {
                                    className: (0, a.W)(ev().content, { [ev().content_withPlayerBar]: v }),
                                    children: (0, n.jsxs)(
                                        p.SV,
                                        {
                                            fallback: er.D,
                                            children: [
                                                u,
                                                (0, n.jsx)(l.Notification, {
                                                    className: ev().notificationInfoContainer,
                                                    enableMultiContainer: !0,
                                                    containerId: d.W$x.INFO,
                                                    position: "bottom-center",
                                                }),
                                                (0, n.jsx)(l.Notification, {
                                                    className: ev().notificationErrorContainer,
                                                    enableMultiContainer: !0,
                                                    containerId: d.W$x.ERROR,
                                                    position: "bottom-center",
                                                    limit: 1,
                                                }),
                                            ],
                                        },
                                        _
                                    ),
                                }),
                                !v &&
                                    !A &&
                                    (0, n.jsx)(d.Lh6, {
                                        pageId: d.Rhz.PLAYER,
                                        children: (0, n.jsx)(ee.ev, { className: ev().playerBar }),
                                    }),
                                v &&
                                    !A &&
                                    (0, n.jsxs)("div", {
                                        className: ev().compositePlayerBar,
                                        children: [
                                            (0, n.jsx)(d.Lh6, {
                                                pageId: d.Rhz.PLAYER,
                                                children: (0, n.jsx)(ee.ev, { className: ev().playerBar }),
                                            }),
                                            (0, n.jsx)(q.wp, {
                                                className: (0, a.W)(ev().navbar, {
                                                    [ev().navbar_application_windows]: x,
                                                    [ev().navbar_application_macos]: b,
                                                    [ev().navbar_application_linux]: h,
                                                }),
                                            }),
                                        ],
                                    }),
                                j.isVisible && (0, n.jsx)(ea, { className: ev().barBelow }),
                                !j.isVisible &&
                                    !v &&
                                    g.list &&
                                    (0, n.jsx)(ed.On, { className: ev().barBelow, barBelow: g.list.barBelow }),
                                (null === (r = g.list) || void 0 === r ? void 0 : r.modal) &&
                                    (0, n.jsx)(ec.IP, { modal: g.list.modal }),
                                (0, n.jsx)(d.Lh6, { pageId: d.Rhz.PLAYER, children: (0, n.jsx)(ee.Rt, {}) }),
                                (0, n.jsx)(el.z, {}),
                                (0, n.jsx)(e_.F8, {}),
                                (0, n.jsx)(d.Lh6, { pageId: d.Rhz.TRAILER, children: (0, n.jsx)(eo._, {}) }),
                                (0, n.jsx)(es.D, {}),
                                T && (0, n.jsx)(y, {}),
                                V && (0, n.jsx)(L, {}),
                                !f.hasPlus &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)(J.x5, {}), (0, n.jsx)(H, {}), (0, n.jsx)(ee.BF, {})],
                                    }),
                                N && (0, n.jsx)(X.bL, {}),
                                B && (0, n.jsx)(eu.V, {}),
                                (0, n.jsx)(U, {}),
                                R && (0, n.jsx)(s.tU, {}),
                                (0, n.jsx)(ep.Qw, {}),
                                (0, n.jsx)(W.eZ, {}),
                            ],
                        }),
                    });
                });
        },
        90741: function (e, t, i) {
            "use strict";
            i.d(t, {
                $I: function () {
                    return c.SearchVibeCard;
                },
                k_: function () {
                    return u.VibeButton;
                },
                xJ: function () {
                    return u.VibeButtonShimmer;
                },
                op: function () {
                    return _.VibeCard;
                },
                KW: function () {
                    return d;
                },
                FF: function () {
                    return a;
                },
                BV: function () {
                    return r.useOnPinClick;
                },
                xF: function () {
                    return o;
                },
            });
            var n = i(2685);
            let a = (e) => {
                var t, i, a, r;
                return (0, n.pj)({
                    title: e.title,
                    header: e.header,
                    stationId: e.stationId,
                    seeds: e.seeds,
                    animationUrl: e.animationUrl,
                    backgroundImageUrl: e.backgroundImageUrl,
                    imageUrl: e.imageUrl,
                    colors: {
                        average:
                            null !== (a = null === (t = e.colors) || void 0 === t ? void 0 : t.average) && void 0 !== a
                                ? a
                                : "",
                        waveText:
                            null !== (r = null === (i = e.colors) || void 0 === i ? void 0 : i.waveText) && void 0 !== r
                                ? r
                                : "",
                    },
                });
            };
            var r = i(98494);
            let o = (e) => (0, n.pj)({ title: e.name, seeds: e.seeds, stationId: e.stationId, idForFrom: e.idForFrom });
            var l = i(81376),
                s = i(58997);
            let d = n.V5.model("Vibe", {
                title: n.V5.optional(n.V5.string, ""),
                header: n.V5.optional(n.V5.string, ""),
                subtitle: n.V5.maybe(n.V5.string),
                stationId: n.V5.string,
                seeds: n.V5.array(n.V5.string),
                idForFrom: n.V5.maybe(n.V5.string),
                imageUrl: n.V5.maybe(n.V5.string),
                animationUrl: n.V5.maybe(n.V5.string),
                backgroundImageUrl: n.V5.maybe(n.V5.string),
                backgroundColor: n.V5.maybe(n.V5.string),
                colors: n.V5.maybe(n.V5.model({ average: n.V5.maybe(n.V5.string), waveText: n.V5.maybe(n.V5.string) })),
            })
                .views((e) => ({
                    get context() {
                        if (e.seeds && (e.stationId !== s.sHr || e.seeds.length > 1)) return e.title;
                        return null;
                    },
                    get pinId() {
                        return (0, l.$)(e.seeds);
                    },
                    get isPinned() {
                        if (!(0, n.fh)(e)) return !1;
                        let { pinsCollection: t } = (0, n.yj)(e);
                        return t.isPinned(this.pinId);
                    },
                    get type() {
                        var t;
                        return null !== (t = e.stationId.split(":")[0]) && void 0 !== t ? t : "";
                    },
                }))
                .actions((e) => ({
                    getKey: (t) => "".concat(t, "_").concat(e.seeds[0]),
                    togglePin: (0, n.ls)(function* () {
                        if (!(0, n.fh)(e)) return;
                        let { pinsCollection: t, user: i } = (0, n.yj)(e);
                        if (i.isAuthorized) return yield t.toggleVibePin({ seeds: e.seeds }, e.pinId);
                    }),
                }));
            var c = i(98583),
                u = i(3031),
                _ = i(59934);
        },
        98494: function (e, t, i) {
            "use strict";
            i.d(t, {
                useOnPinClick: function () {
                    return c;
                },
            });
            var n = i(65301),
                a = i(79491),
                r = i(91207),
                o = i(37184),
                l = i(58997),
                s = i(29778);
            let d = (e) => {
                    var t;
                    let { vibe: i, closeToast: a } = e;
                    return (0, n.jsx)(s.K1, {
                        closeToast: a,
                        entityVariant: s.j9.VIBE,
                        entityTitle: i.title,
                        averageColor: null === (t = i.colors) || void 0 === t ? void 0 : t.average,
                        isPinned: i.isPinned,
                    });
                },
                c = (e) => {
                    let { user: t } = (0, l.oR4)(),
                        { notify: i } = (0, l.d$W)(),
                        { formatMessage: c } = (0, o.Z)(),
                        [u, _] = (0, r.useState)(!1);
                    return (0, r.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized) {
                            i((0, n.jsx)(s.Q, { error: c({ id: "authorization-messages.need-to-authorizate" }) }), {
                                containerId: l.W$x.ERROR,
                            });
                            return;
                        }
                        if (u) return;
                        let r = { ...(0, a.ZN)(e), isPinned: !e.isPinned };
                        _(!0);
                        let o = await e.togglePin();
                        _(!1),
                            o
                                ? i((0, n.jsx)(d, { vibe: r }), { containerId: l.W$x.INFO })
                                : i((0, n.jsx)(s.Q, { error: c({ id: "error-messages.error-during-action" }) }), {
                                      containerId: l.W$x.ERROR,
                                  });
                    }, [c, i, u, t.isAuthorized, e]);
                };
        },
        98583: function (e, t, i) {
            "use strict";
            i.d(t, {
                SearchVibeCard: function () {
                    return m;
                },
            });
            var n = i(65301),
                a = i(9695),
                r = i(96233),
                o = i(91207),
                l = i(37184),
                s = i(55975),
                d = i(33387),
                c = i(60383),
                u = i(81437),
                _ = i(58997),
                p = i(29778);
            let m = (0, r.Pi)((e) => {
                let { className: t, vibe: i, cover: r } = e,
                    { ref: m, intersectionPropertyId: v } = (0, _.VfV)(),
                    { formatMessage: x } = (0, l.Z)(),
                    { pageId: b } = (0, _.lVB)(),
                    { blockIdForFrom: h } = (0, _.qYG)(),
                    { isFreemium: C } = (0, _.NMB)(),
                    [g, f] = (0, o.useState)(!1),
                    {
                        isPlaying: y,
                        togglePlay: j,
                        isCurrent: k,
                    } = (0, _.QhE)({ seeds: i.seeds, pageIdForFrom: b, blockIdForFrom: h }),
                    A = (0, d.W)(() => {
                        if (C) {
                            f(!0);
                            return;
                        }
                        j();
                    }),
                    V = (0, d.W)(() => {
                        y || A();
                    }),
                    T = (0, d.W)((e) => {
                        2 === e.detail ? V() : (0, c.m)(e, p.$C.ripple);
                    }),
                    R = (0, o.useCallback)(
                        () =>
                            (0, n.jsx)(p.Df, {
                                isAvailable: !0,
                                coverUri: null == r ? void 0 : r.uri,
                                title: i.title,
                                className: p.$C.playButtonCell,
                                entityCoverStyle: { backgroundColor: null == r ? void 0 : r.color },
                                radius: "round",
                                onPlayButtonClick: A,
                                isPlaying: y,
                                isCurrent: k,
                            }),
                        [null == r ? void 0 : r.color, null == r ? void 0 : r.uri, A, k, y, i.title]
                    ),
                    N = i.subtitle || x({ id: "entity-names.my-vibe" });
                return (0, n.jsxs)(p.Md, {
                    ref: m,
                    "data-intersection-property-id": v,
                    className: (0, a.W)(p.$C.root, t),
                    "aria-label": i.title,
                    onClick: T,
                    ...(0, s.BA)(s.FK.vibe.SEARCH_VIBE_CARD),
                    children: [
                        (0, n.jsx)(p.pl, {
                            isOpened: g,
                            onOpenChange: f,
                            isEnabled: C,
                            placement: "bottom",
                            textVariant: "vibe",
                            vibeTextVariant: i.type,
                            renderChildren: R,
                        }),
                        (0, n.jsx)(p.u, {
                            title: (0, n.jsx)(u.Caption, {
                                className: (0, a.W)(p.$C.text, p.$C.titleText),
                                size: "m",
                                variant: "div",
                                type: "text",
                                children: i.title,
                            }),
                            description: N,
                        }),
                    ],
                });
            });
        },
        3031: function (e, t, i) {
            "use strict";
            i.d(t, {
                VibeButton: function () {
                    return f;
                },
                VibeButtonShimmer: function () {
                    return g;
                },
            });
            var n = i(65301),
                a = i(9695),
                r = i(96233),
                o = i(91207),
                l = i(44729),
                s = i(55975),
                d = i(2319),
                c = i(60383),
                u = i(78372),
                _ = i(82036),
                p = i(93422),
                m = i(82607),
                v = i(81437),
                x = i(58997),
                b = i(29778),
                h = i(3302),
                C = i.n(h);
            let g = (e) => {
                    let { isActive: t, className: i } = e;
                    return (0, n.jsx)(m.Shimmer, { isActive: t, className: (0, a.W)(C().root, i) });
                },
                f = (0, r.Pi)((e) => {
                    let { className: t, vibe: i } = e,
                        { pageId: r } = (0, x.lVB)(),
                        { blockIdForFrom: m } = (0, x.qYG)(),
                        { ref: h, intersectionPropertyId: g } = (0, x.VfV)(),
                        { toggleTrue: f, toggleFalse: y, state: j } = (0, d.O)(!1),
                        { isFreemium: k } = (0, x.NMB)(),
                        { isPlaying: A, togglePlay: V } = (0, x.QhE)({
                            seeds: i.seeds,
                            pageIdForFrom: r,
                            blockIdForFrom: m,
                        }),
                        T = (0, x.lAI)(),
                        R = (0, o.useCallback)(
                            (e) => {
                                k ||
                                    ((0, c.m)(e, C().ripple),
                                    f(),
                                    V().finally(() => {
                                        y(), T(!A);
                                    }));
                            },
                            [y, f, V, A, T, k]
                        ),
                        N = (0, o.useMemo)(() => {
                            var e, t;
                            return {
                                "--vibe-button-background":
                                    null === (e = i.colors) || void 0 === e ? void 0 : e.average,
                                "--vibe-button-text-color":
                                    null === (t = i.colors) || void 0 === t ? void 0 : t.waveText,
                            };
                        }, [i.colors]),
                        M = A ? "pause" : "play",
                        B = (0, o.useCallback)(
                            () =>
                                (0, n.jsxs)(u.z, {
                                    style: N,
                                    withRipple: !1,
                                    withHover: !1,
                                    variant: "text",
                                    onClick: R,
                                    className: (0, a.W)(C().root, C().button, { [C().button_loading]: j }, t),
                                    "data-intersection-property-id": g,
                                    ref: h,
                                    ...(0, s.BA)(s.QM.landing.VIBE_DISCOVERY_ITEM),
                                    children: [
                                        (0, n.jsx)(p.Image, {
                                            className: C().image,
                                            withAvatarReplace: !0,
                                            withFallback: !1,
                                            src: i.backgroundImageUrl,
                                            withAspectRatio: !0,
                                            size: 400,
                                            fit: "cover",
                                        }),
                                        (0, n.jsxs)("span", {
                                            className: C().textContainer,
                                            children: [
                                                (0, n.jsx)(v.Caption, {
                                                    className: C().subtitle,
                                                    variant: "span",
                                                    type: "controls",
                                                    size: "s",
                                                    weight: "bold",
                                                    children: (0, n.jsx)(l.Z, { id: "entity-names.my-vibe" }),
                                                }),
                                                (0, n.jsxs)("span", {
                                                    className: C().titleContainer,
                                                    children: [
                                                        (0, n.jsx)(_.Icon, {
                                                            className: C().icon,
                                                            size: "xxs",
                                                            variant: M,
                                                        }),
                                                        (0, n.jsx)(v.Caption, {
                                                            className: C().title,
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
                            [t, R, M, g, j, h, N, i.backgroundImageUrl, i.title]
                        );
                    return (0, n.jsx)(b.pl, {
                        isEnabled: k,
                        placement: "top",
                        textVariant: "vibe",
                        vibeTextVariant: i.type,
                        renderChildren: B,
                    });
                });
        },
        59934: function (e, t, i) {
            "use strict";
            i.d(t, {
                VibeCard: function () {
                    return m;
                },
            });
            var n = i(65301),
                a = i(9695),
                r = i(96233),
                o = i(91207),
                l = i(28257),
                s = i(43998),
                d = i(81437),
                c = i(58997),
                u = i(29778),
                _ = i(49495),
                p = i.n(_);
            let m = (0, r.Pi)((e) => {
                let { vibe: t, children: i, className: r } = e,
                    { pageId: _ } = (0, c.lVB)(),
                    [m, v] = (0, o.useState)(!1),
                    { blockIdForFrom: x } = (0, c.qYG)(),
                    {
                        settings: { isMobile: b },
                    } = (0, c.oR4)(),
                    { sendPlaySearchFeedback: h } = (0, c.sAF)(),
                    { isFreemium: C } = (0, c.NMB)(),
                    {
                        isPlaying: g,
                        isPaused: f,
                        togglePlay: y,
                    } = (0, c.QhE)({ seeds: t.seeds, pageIdForFrom: _, blockIdForFrom: x }),
                    j = g || f,
                    k = (0, o.useCallback)(() => {
                        b && (m || g || (v(!0), null == h || h()), y());
                    }, [b, g, m, h, y]),
                    A = (0, o.useCallback)(() => {
                        C || (m || g || (v(!0), null == h || h()), y());
                    }, [g, m, h, y, C]),
                    V = (0, o.useCallback)(
                        () =>
                            (0, n.jsx)(
                                u.JM,
                                {
                                    isPlaying: g,
                                    onClick: A,
                                    className: (0, a.W)(p().playButton, p().control),
                                    buttonVariant: "default",
                                    withHover: !1,
                                    iconSize: "xl",
                                    variant: "filled",
                                },
                                t.getKey("PlayButton")
                            ),
                        [g, A, t]
                    ),
                    T = (0, o.useMemo)(
                        () =>
                            (0, n.jsxs)(s.Paper, {
                                className: p().cover,
                                radius: "round",
                                withShadow: !0,
                                onClick: k,
                                children: [
                                    (0, n.jsx)(u.BE, {
                                        size: 200,
                                        fit: "cover",
                                        className: p().image,
                                        style: { backgroundColor: t.backgroundColor },
                                        src: t.imageUrl,
                                        alt: t.title,
                                        withAvatarReplace: !0,
                                    }),
                                    j && (0, n.jsx)(u.Up, { stopAnimation: f, className: p().playingAnimation }),
                                    (0, n.jsx)(l.kk, {
                                        className: (0, a.W)(
                                            p().controls,
                                            { [p().controls_isPlaying]: j },
                                            p().important
                                        ),
                                        bottomContainerClassName: p().playControl,
                                        radius: "round",
                                        playControl: (0, n.jsx)(u.pl, {
                                            isEnabled: C,
                                            placement: "bottom",
                                            textVariant: "vibe",
                                            vibeTextVariant: t.type,
                                            renderChildren: V,
                                        }),
                                    }),
                                ],
                            }),
                        [k, f, j, t.backgroundColor, t.imageUrl, t.title, t.type, C, V]
                    );
                return (0, n.jsx)(l.m7, {
                    className: (0, a.W)(p().root, r),
                    textPosition: "center",
                    title: (0, n.jsx)(d.Caption, {
                        variant: "div",
                        type: "entity",
                        size: "s",
                        weight: "medium",
                        lineClamp: 2,
                        children: t.title,
                    }),
                    description: (0, n.jsx)(d.Caption, {
                        variant: "div",
                        type: "entity",
                        size: "s",
                        weight: "medium",
                        lineClamp: 1,
                        children: t.subtitle,
                    }),
                    view: T,
                    children: i,
                });
            });
        },
        73054: function (e, t, i) {
            "use strict";
            i.d(t, {
                s$: function () {
                    return x;
                },
                $Z: function () {
                    return y.RepeatButton;
                },
                P4: function () {
                    return j.ShuffleButton;
                },
                WP: function () {
                    return k.SonataControls;
                },
                ps: function () {
                    return f;
                },
                NI: function () {
                    return A.SonataVideoControls;
                },
                jN: function () {
                    return p;
                },
                RN: function () {
                    return a;
                },
                B5: function () {
                    return u;
                },
            });
            var n = i(86348);
            let a = (e, t) => ({ type: n.RX.Unloaded, meta: { id: e, albumId: t } });
            var r = i(2685),
                o = i(10420),
                l = i(48896),
                s = i(9096),
                d = i(26382),
                c = i(58997);
            let u = (e) => {
                    var t, i, a;
                    switch (e.data.type) {
                        case o.A.Generative: {
                            let i = e.data.meta,
                                n = (0, c.Usz)(null == i ? void 0 : i.derivedColors);
                            return (0, r.pj)({
                                id: String(i.id),
                                coverUri: i.imageUrl,
                                title: null !== (t = i.title) && void 0 !== t ? t : "",
                                isAvailable: !0,
                                isRemoved: !1,
                                averageColor: n,
                            });
                        }
                        case n.RX.Unloaded:
                            return null;
                        default: {
                            let t = e.data.meta,
                                n = null === (i = t.artists) || void 0 === i ? void 0 : i.map(s.d),
                                o = null === (a = t.albums) || void 0 === a ? void 0 : a.map(l.N);
                            return (0, r.pj)({ ...(0, d.Ni)(t), artists: n, albums: o });
                        }
                    }
                },
                _ = r.V5.model("UnloadedEntityMeta", {
                    id: r.V5.union(r.V5.number, r.V5.string),
                    albumId: r.V5.maybe(r.V5.union(r.V5.number, r.V5.string)),
                }),
                p = r.V5.model("UnloadedEntityData", { meta: _, type: r.V5.literal(n.RX.Unloaded) });
            var m = i(35068),
                v = i(49724);
            let x = d.yp
                .props({ artists: r.V5.array(s.Go), albums: r.V5.array(l.KX), chart: r.V5.maybe(v.BH) })
                .views((e) => ({
                    get idWithContext() {
                        return e.albumId ? "".concat(e.id, ":").concat(e.albumId) : e.id;
                    },
                    get artistsNames() {
                        var t;
                        return null === (t = e.artists) || void 0 === t ? void 0 : t.map((e) => e.name).join(", ");
                    },
                    get mainArtist() {
                        var i, n;
                        return null !== (n = null === (i = e.artists) || void 0 === i ? void 0 : i[0]) && void 0 !== n
                            ? n
                            : null;
                    },
                    get mainAlbum() {
                        var a, r;
                        return null !== (r = null === (a = e.albums) || void 0 === a ? void 0 : a[0]) && void 0 !== r
                            ? r
                            : null;
                    },
                    get index() {
                        var o, l, s;
                        return null !==
                            (s =
                                null === (l = e.albums[0]) || void 0 === l
                                    ? void 0
                                    : null === (o = l.trackPosition) || void 0 === o
                                    ? void 0
                                    : o.index) && void 0 !== s
                            ? s
                            : null;
                    },
                    get isPodcast() {
                        var d;
                        return (
                            e.isTrackPodcast || (null === (d = this.mainAlbum) || void 0 === d ? void 0 : d.isPodcast)
                        );
                    },
                    get isAudiobook() {
                        return e.type === m.V.AUDIOBOOK;
                    },
                    get isFairyTale() {
                        return e.type === m.V.FAIRY_TALE;
                    },
                    get isNonMusic() {
                        return this.isPodcast || this.isAudiobook || this.isFairyTale;
                    },
                    get isAvailableOnlyForPlus() {
                        var c;
                        return !!(null === (c = this.mainAlbum) || void 0 === c ? void 0 : c.isAvailableOnlyForPlus);
                    },
                    get artistName() {
                        var u, _, p, v;
                        if (
                            null === (_ = e.artists) || void 0 === _
                                ? void 0
                                : null === (u = _[0]) || void 0 === u
                                ? void 0
                                : u.various
                        )
                            return;
                        return null === (v = e.artists) || void 0 === v
                            ? void 0
                            : null === (p = v[0]) || void 0 === p
                            ? void 0
                            : p.name;
                    },
                }))
                .actions((e) => ({
                    changeTrackInfo: (0, r.ls)(function* (t, i) {
                        let { ugcResource: n, modelActionsLogger: a } = (0, r.dU)(e);
                        if (e.artists.map((e) => e.name).join(", ") === i && t === e.title) return c.SLo.OK;
                        try {
                            var o;
                            yield n.changeTrack({ trackId: e.id, title: t, artist: i }), (e.title = t);
                            let a = (null === (o = e.artists[0]) || void 0 === o ? void 0 : o.id) || "0";
                            if (((e.artists = (0, r.pj)([])), i)) {
                                let t = s.Go.create({ id: a, name: i, isAvailable: !0 });
                                e.artists = (0, r.pj)([t]);
                            }
                            return c.SLo.OK;
                        } catch (e) {
                            return a.error(e), c.SLo.ERROR;
                        }
                    }),
                }));
            var b = i(79491),
                h = i(19489),
                C = i(42982),
                g = i(35941);
            let f = r.V5.model("SonataState", {
                contextType: r.V5.maybeNull(r.V5.enumeration(Object.values(h.A))),
                contextId: r.V5.maybeNull(r.V5.string),
                entityMeta: r.V5.maybeNull(x),
                status: r.V5.enumeration(Object.values(n.Xz)),
                canMoveForward: r.V5.boolean,
                canMoveBackward: r.V5.boolean,
                canSpeed: r.V5.boolean,
                repeatMode: r.V5.enumeration(Object.values(g.zq)),
                canChangeRepeatMode: r.V5.boolean,
                volume: r.V5.maybe(r.V5.number),
                speed: r.V5.maybe(r.V5.number),
                canShuffle: r.V5.boolean,
                shuffle: r.V5.boolean,
                currentlyPlayingTrackIndex: r.V5.maybe(r.V5.number),
                quality: r.V5.enumeration(Object.values(C.n)),
                playlistFilter: r.V5.maybe(r.V5.string),
            })
                .volatile(() => ({ unloadedEntitiesData: void 0 }))
                .views((e) => ({
                    get unloadedEntitiesDataFromModels() {
                        return e.unloadedEntitiesData;
                    },
                    get isVibeContext() {
                        return e.contextType === h.A.Vibe;
                    },
                    get isGenerativeContext() {
                        return e.contextType === h.A.Generative;
                    },
                    get isPaused() {
                        return e.status === n.Xz.PAUSED;
                    },
                    get isContextRepeatMode() {
                        return e.repeatMode === g.zq.CONTEXT;
                    },
                }))
                .actions((e) => ({
                    setContextId: (t) => {
                        e.contextId = String(t);
                    },
                    setContextType: (t) => {
                        e.contextType = t;
                    },
                    setEntityMeta: (t) => {
                        t && t.data.meta && (e.entityMeta = u(t));
                    },
                    setUnloadedEntitiesData: (t) => {
                        t && (e.unloadedEntitiesData = (0, b.ZN)(t));
                    },
                    resetUnloadedEntitiesData: () => {
                        e.unloadedEntitiesData = void 0;
                    },
                    setStatus: (t) => {
                        e.status = t;
                    },
                    setCanMoveForward: (t) => {
                        e.canMoveForward = t;
                    },
                    setCanMoveBackward: (t) => {
                        e.canMoveBackward = t;
                    },
                    setVolume: (t) => {
                        e.volume = t;
                    },
                    setCanSpeed: (t) => {
                        e.canSpeed = t;
                    },
                    setSpeed: (t) => {
                        e.speed = t;
                    },
                    setRepeatMode: (t) => {
                        e.repeatMode = t;
                    },
                    setCanChangeRepeatMode: (t) => {
                        e.canChangeRepeatMode = t;
                    },
                    setCanShuffle: (t) => {
                        e.canShuffle = t;
                    },
                    setShuffle: (t) => {
                        e.shuffle = t;
                    },
                    setCurrentlyPlayingTrackIndex: (t) => {
                        e.currentlyPlayingTrackIndex = t;
                    },
                    setQuality: (t) => {
                        e.quality = t;
                    },
                    setPlaylistFilter: (t) => {
                        e.playlistFilter = t;
                    },
                }));
            i(1578), i(92624);
            var y = i(23116),
                j = i(93477),
                k = i(70676),
                A = i(88722);
        },
        52272: function (e) {
            e.exports = {
                root: "DefaultLayout_root__7J0wo",
                root_applicationPreserveTitleBar: "DefaultLayout_root_applicationPreserveTitleBar__ygJtq",
                root_withBarBelow: "DefaultLayout_root_withBarBelow__jPsaV",
                content: "DefaultLayout_content__md70Z",
                content_withPlayerBar: "DefaultLayout_content_withPlayerBar__9uFJT",
                notificationErrorContainer: "DefaultLayout_notificationErrorContainer__Qz_mD",
                notificationInfoContainer: "DefaultLayout_notificationInfoContainer__tKt7J",
                navbar: "DefaultLayout_navbar__LIQWG",
                navbar_application_macos: "DefaultLayout_navbar_application_macos__9dj3u",
                navbar_application_linux: "DefaultLayout_navbar_application_linux__ejlGn",
                navbar_application_windows: "DefaultLayout_navbar_application_windows__3hDQ_",
                playerBar: "DefaultLayout_playerBar___9IaS",
                barBelow: "DefaultLayout_barBelow__y6PFU",
                compositePlayerBar: "DefaultLayout_compositePlayerBar___WAcQ",
            };
        },
        95696: function (e) {
            e.exports = {
                root: "WithTopBanner_root__P__x3",
                banner: "WithTopBanner_banner__x1Ia2",
                banner_canShow: "WithTopBanner_banner_canShow__5KA30",
                content: "WithTopBanner_content__6Vh7a",
            };
        },
        9193: function (e) {
            e.exports = {
                root: "SideAdvertBanner_root__hT1jJ",
                root_hidden: "SideAdvertBanner_root_hidden__Yg__R",
                contentWrapper: "SideAdvertBanner_contentWrapper__5255E",
                content: "SideAdvertBanner_content__nDGWG",
            };
        },
        16659: function (e) {
            e.exports = {
                root: "TopAdvertBanner_root__aAZ0o",
                root_hidden: "TopAdvertBanner_root_hidden__l3FTx",
                advert: "TopAdvertBanner_advert__LjAj_",
            };
        },
        3302: function (e) {
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
        49495: function (e) {
            e.exports = {
                root: "VibeCard_root__9TDjP",
                playingAnimation: "VibeCard_playingAnimation__iRgvh",
                cover: "VibeCard_cover__LbX93",
                image: "VibeCard_image__luolD",
                controls: "VibeCard_controls__CcEVx",
                controls_isPlaying: "VibeCard_controls_isPlaying__1_Ass",
                important: "VibeCard_important__WPWqc",
                control: "VibeCard_control__SM3H4",
                playControl: "VibeCard_playControl__pZxq5",
                playButton: "VibeCard_playButton__LWepP",
            };
        },
        95887: function (e) {
            e.exports = {
                root: "ClipAboutModalDesktop_root__F8UU5",
                root_withFullscreen: "ClipAboutModalDesktop_root_withFullscreen__nTO1X",
                root_withWindows: "ClipAboutModalDesktop_root_withWindows__kl4sc",
                header: "ClipAboutModalDesktop_header__at6X6",
                modalContent: "ClipAboutModalDesktop_modalContent__Rp_ON",
                explicitMark: "ClipAboutModalDesktop_explicitMark__SLwRj",
                important: "ClipAboutModalDesktop_important__LkqWo",
                content: "ClipAboutModalDesktop_content__0dUY1",
                titleShimmer: "ClipAboutModalDesktop_titleShimmer__zTtu_",
            };
        },
        47059: function (e) {
            e.exports = {
                rootOld: "Content_rootOld__g85_m",
                main: "Content_main__8_wIa",
                root: "Content_root__IsH8s",
                sideBanner: "Content_sideBanner__Na07D",
                primary: "Content_primary__dInSS",
                primary_isMobile: "Content_primary_isMobile__ApDi2",
                primary_short: "Content_primary_short__TSM3L",
                secondary: "Content_secondary__tGLLS",
                secondary_isMobile: "Content_secondary_isMobile__CbF7M",
                secondaryEnter: "Content_secondaryEnter__Nsp_f",
                secondaryEnterActive: "Content_secondaryEnterActive__Ks_PK",
                secondaryExit: "Content_secondaryExit__m4gOK",
                secondaryExitActive: "Content_secondaryExitActive__miNnR",
            };
        },
        81393: function (e) {
            e.exports = {
                root: "TrackAboutModalDesktop_root__NHeeO",
                root_withFullscreen: "TrackAboutModalDesktop_root_withFullscreen__jOu4X",
                root_withCustomControls: "TrackAboutModalDesktop_root_withCustomControls__b2JDR",
                header: "TrackAboutModalDesktop_header__7Zl2n",
                modalContent: "TrackAboutModalDesktop_modalContent__yf4i5",
                infoBlock: "TrackAboutModalDesktop_infoBlock__egLLX",
                infoTitle: "TrackAboutModalDesktop_infoTitle__YHdNz",
                link: "TrackAboutModalDesktop_link__7832F",
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
        13029: function (e) {
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
        80467: function (e) {
            e.exports = {
                wrapper: "RedAlert_wrapper__rGvGN",
                root: "RedAlert_root__1VZOr",
                root_light: "RedAlert_root_light__j7Kr3",
                text: "RedAlert_text__UB_Bq",
                button: "RedAlert_button__Ho43z",
            };
        },
        3228: function (e, t, i) {
            "use strict";
            i.d(t, {
                f: function () {
                    return n;
                },
                i: function () {
                    return a;
                },
            });
            let n = (e) => String(e).split(":"),
                a = (e, t) => (t ? [e, t].join(":") : e);
        },
        10420: function (e, t, i) {
            "use strict";
            var n, a;
            i.d(t, {
                A: function () {
                    return n;
                },
            }),
                ((a = n || (n = {})).Music = "music"),
                (a.VibeTrack = "vibeTrack"),
                (a.Generative = "generative"),
                (a.Unknown = "unknown"),
                (a.SmartPreview = "smartPreview");
        },
    },
]);
