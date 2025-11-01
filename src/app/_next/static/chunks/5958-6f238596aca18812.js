(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5958],
    {
        2424: (e) => {
            e.exports = {
                root: "ChartArtistContent_root__OPxPJ",
                cover: "ChartArtistContent_cover__flhXs",
                image: "ChartArtistContent_image__D2isT",
                title: "ChartArtistContent_title__a_d_4",
            };
        },
        12146: (e, t, a) => {
            "use strict";
            var i;
            a.d(t, { x: () => i }),
                (function (e) {
                    (e.TEXT = "TEXT"),
                        (e.TEXT_FACT = "TEXT_FACT"),
                        (e.STATS = "STATS"),
                        (e.CHART = "CHART"),
                        (e.CHART_FAVORITES = "CHART_FAVORITES"),
                        (e.SINGLE_ENTITY = "SINGLE_ENTITY"),
                        (e.ARTISTS = "ARTISTS"),
                        (e.CHART_ARTIST = "CHART_ARTIST"),
                        (e.TEXT_EXTENDED = "TEXT_EXTENDED"),
                        (e.THEN_NOW_COMPARISON = "THEN_NOW_COMPARISON");
                })(i || (i = {}));
        },
        13002: (e) => {
            e.exports = {
                root: "ThenNowComparison_root__sAUJF",
                row: "ThenNowComparison_row__1osE7",
                textPrimary: "ThenNowComparison_textPrimary__mXrAG",
                textSecondary: "ThenNowComparison_textSecondary__O5HTV",
                cover: "ThenNowComparison_cover___UkLn",
                itemLabel: "ThenNowComparison_itemLabel__L_vTN",
                itemMeta: "ThenNowComparison_itemMeta__TqbEJ",
                header: "ThenNowComparison_header__tWhL1",
            };
        },
        20794: (e) => {
            e.exports = {
                root: "StatItem_root__L7Uw0",
                valueContainer: "StatItem_valueContainer__HlYQZ",
                value: "StatItem_value__IkJBB",
                unit: "StatItem_unit__cO46p",
                footer: "StatItem_footer__QZ7q6",
            };
        },
        22522: (e) => {
            e.exports = {
                root: "ArtistsContent_root__Jpd8M",
                covers: "ArtistsContent_covers__OeO2T",
                cover: "ArtistsContent_cover__rzlO2",
                image: "ArtistsContent_image__okuHk",
            };
        },
        22867: (e) => {
            e.exports = {
                root: "ActionButton_root__ltmGg",
                cover: "ActionButton_cover__4AmUi",
                image: "ActionButton_image__PAxtV",
                text: "ActionButton_text__fTdsF",
                icon: "ActionButton_icon__QbOGp",
            };
        },
        31334: (e) => {
            e.exports = {
                root: "ChartFavoriteContent_root__ksE_w",
                description: "ChartFavoriteContent_description__CCBKM",
            };
        },
        35519: (e) => {
            e.exports = {
                root: "SlideCard_root__RSnvj",
                background: "SlideCard_background__dftlE",
                playAnimation: "SlideCard_playAnimation__rFZZ3",
                fade: "SlideCard_fade__2HpC6",
                content: "SlideCard_content__7Y6aU",
                content_align_top: "SlideCard_content_align_top__fDfyz",
                content_align_center: "SlideCard_content_align_center__QFnxv",
                content_align_bottom: "SlideCard_content_align_bottom__nsslT",
                logo: "SlideCard_logo__ocv3o",
                button: "SlideCard_button__EYX_G",
            };
        },
        37981: (e) => {
            e.exports = {
                root: "Background_root__s7ccu",
                media_withPersonalColor:
                    "Background_media_withPersonalColor__KuaB0",
                firstFrame: "Background_firstFrame__c5Gw0",
                media: "Background_media__8DaeZ",
            };
        },
        51991: (e, t, a) => {
            "use strict";
            a.d(t, { Background: () => _ });
            var i = a(33008),
                l = a(85896),
                r = a(97531),
                n = a(66268),
                s = a(30293),
                o = a(52756),
                d = a(53555),
                c = a(79169),
                u = a(37981),
                g = a.n(u);
            let m = (0, r.PA)((e) => {
                    let {
                            className: t,
                            children: a,
                            background: {
                                animationDuration: r,
                                withPersonalColor: u,
                                videoUrl: m,
                                firstFrameVideoUrl: _,
                                bgImageUrl: v,
                                withSound: x,
                            },
                            isActive: p,
                            isContentVisible: S,
                            setContentVisible: C,
                            setContentInvisible: T,
                        } = e,
                        {
                            user: b,
                            slides: { isMuted: h },
                        } = (0, c.Pjs)(),
                        { isVisible: N } = (0, c.dtw)(),
                        y = (0, n.useRef)(null),
                        K = (0, c.eGp)(),
                        E =
                            (null == K
                                ? void 0
                                : K.getState(c.V_r.TRAILER).playerState.status
                                      .value) === d.MT.PLAYING && x,
                        I = (0, n.useCallback)(
                            () => setTimeout(C, 1e3 * r),
                            [r, C],
                        );
                    (0, n.useEffect)(() => {
                        !p && S && T();
                    }, [p, S, T]),
                        (0, n.useEffect)(() => {
                            var e, t, a;
                            p && !N
                                ? ((null == (e = y.current)
                                      ? void 0
                                      : e.readyState) !== 4 && I(),
                                  null == (t = y.current) ||
                                      t
                                          .play()
                                          .then(() => {
                                              I(),
                                                  E &&
                                                      (null == K ||
                                                          K.pause(
                                                              c.V_r.TRAILER,
                                                          ));
                                          })
                                          .catch(I))
                                : y.current &&
                                  ((y.current.currentTime = 0),
                                  null == (a = y.current) || a.pause());
                        }, [I, p, N, C, E, K]);
                    let f = (0, n.useMemo)(() => {
                            if (u && b.collectionHue)
                                return {
                                    "--user-background-color": (0, c.eWZ)(
                                        b.collectionHue,
                                        1,
                                        0.5,
                                    ),
                                };
                        }, [u, b.collectionHue]),
                        A = m && _ && !u,
                        R = !m && v;
                    return (0, i.jsxs)("div", {
                        className: (0, l.$)(g().root, t),
                        style: f,
                        children: [
                            R &&
                                (0, i.jsx)(o.Image, {
                                    src: (0, s.createAvatarUrl)(v, 800, !0),
                                    className: g().firstFrame,
                                }),
                            A &&
                                (0, i.jsx)(o.Image, {
                                    src: _,
                                    className: g().firstFrame,
                                }),
                            m &&
                                (0, i.jsx)("video", {
                                    className: (0, l.$)(g().media, {
                                        [g().media_withPersonalColor]: u,
                                    }),
                                    ref: y,
                                    src: m,
                                    poster: (0, s.createAvatarUrl)(v, 800, !0),
                                    playsInline: !0,
                                    muted: !x || h,
                                }),
                            !!a && a,
                        ],
                    });
                }),
                _ = (0, n.memo)(m);
        },
        54874: (e) => {
            e.exports = {
                root: "SingleEntityContent_root__N2vvp",
                description: "SingleEntityContent_description__3pg2A",
                cover: "SingleEntityContent_cover__zeDqH",
                cover_withShadow: "SingleEntityContent_cover_withShadow__tMIE1",
                cover_small: "SingleEntityContent_cover_small___jnS4",
                meta: "SingleEntityContent_meta__XxJqA",
                meta_withCover: "SingleEntityContent_meta_withCover__Bp0Tx",
                smallRoundCover: "SingleEntityContent_smallRoundCover__jicWf",
                smallRoundCover_withShadow:
                    "SingleEntityContent_smallRoundCover_withShadow__cjRgd",
                image: "SingleEntityContent_image__P6nK2",
                trailer: "SingleEntityContent_trailer__uYOk0",
                subtitle: "SingleEntityContent_subtitle__KuJyA",
                title: "SingleEntityContent_title__OPb6I",
            };
        },
        62019: (e) => {
            e.exports = { root: "SimpleButton_root__iLoq8" };
        },
        65520: (e, t, a) => {
            "use strict";
            a.d(t, { SlideContent: () => ed });
            var i,
                l,
                r,
                n,
                s = a(33008),
                o = a(12146),
                d = a(66268),
                c = a(54487),
                u = a(18740),
                g = a(85896),
                m = a(4585),
                _ = a(73827),
                v = a(93134),
                x = a(77868);
            let p = {
                6: 84,
                7: 84,
                8: 68,
                9: 68,
                10: 56,
                11: 56,
                12: 48,
                13: 48,
            };
            var S = a(20794),
                C = a.n(S);
            let T = (e) => {
                let {
                        data: t,
                        className: a,
                        valueClassName: i,
                        valueContainerClassName: l,
                        withAutoResize: r,
                        descriptionLineClamp: n,
                    } = e,
                    o = (0, d.useRef)(null),
                    { formatNumber: c } = (0, _.A)(),
                    u = (0, d.useCallback)(
                        (e) => (e >= 1e4 ? c(e) : String(e)),
                        [c],
                    );
                (0, d.useEffect)(() => {
                    if (o.current) {
                        if (!t.value) return;
                        let e = new m.T(o.current, Number(t.value), {
                            startVal: 1,
                            formattingFn: u,
                        });
                        e.error || e.start();
                    }
                }, [t.value, u]);
                let S = (0, d.useMemo)(() => {
                    if (r && t.value)
                        return {
                            fontSize: ((e) => {
                                let t = String(e).length;
                                return t > 13
                                    ? "clamp("
                                          .concat(18, "px, ")
                                          .concat(11, "cqi, ")
                                          .concat(54, "px)")
                                    : t <= 5
                                      ? "clamp("
                                            .concat(18, "px, ")
                                            .concat(26, "cqi, ")
                                            .concat(100, "px)")
                                      : "clamp("
                                            .concat(18, "px, ")
                                            .concat(26 - t, "cqi, ")
                                            .concat(p[t], "px)");
                            })(t.value),
                        };
                }, [t.value, r]);
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(v.q, {
                            children: [
                                t.value,
                                " ",
                                t.valueSuffix,
                                " ",
                                t.valueDescription,
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: (0, g.$)(C().root, a),
                            "aria-hidden": !0,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: (0, g.$)(C().valueContainer, l),
                                    children: [
                                        (0, s.jsx)(x.Heading, {
                                            variant: "div",
                                            size: "xxxxl",
                                            tabIndex: -1,
                                            ref: o,
                                            "aria-hidden": !0,
                                            className: (0, g.$)(C().value, i),
                                            style: S,
                                        }),
                                        t.valueSuffix &&
                                            (0, s.jsx)(x.Heading, {
                                                variant: "div",
                                                size: "xxxxl",
                                                className: C().value,
                                                style: S,
                                                children: t.valueSuffix,
                                            }),
                                    ],
                                }),
                                (0, s.jsx)(x.Heading, {
                                    variant: "div",
                                    size: "xl",
                                    weight: "black",
                                    className: C().unit,
                                    lineClamp: n,
                                    children: t.valueDescription,
                                }),
                                t.footer &&
                                    (0, s.jsx)(x.Caption, {
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "medium",
                                        className: C().footer,
                                        children: t.footer,
                                    }),
                            ],
                        }),
                    ],
                });
            };
            var b = a(22522),
                h = a.n(b);
            let N = (e) => {
                let { data: t } = e,
                    a = (0, d.useMemo)(
                        () => ({
                            value: t.value,
                            valueDescription: t.valueDescription,
                            valueSuffix: t.valueSuffix,
                            footer: t.footer,
                        }),
                        [t.footer, t.value, t.valueDescription, t.valueSuffix],
                    ),
                    i = (0, d.useMemo)(
                        () => ({
                            "--covers-offset-translate": "".concat(
                                (t.covers.length - 1) * 7.5,
                                "px",
                            ),
                        }),
                        [t.covers],
                    ),
                    l = (0, d.useCallback)(
                        (e) => ({
                            "--cover-offset-translate": "-".concat(
                                15 * e,
                                "px",
                            ),
                        }),
                        [],
                    );
                return (0, s.jsxs)("div", {
                    className: h().root,
                    children: [
                        (0, s.jsx)(T, { data: a, withAutoResize: !0 }),
                        (0, s.jsx)("div", {
                            className: h().covers,
                            style: i,
                            children: t.covers.map((e, t) => {
                                var a;
                                return (0, s.jsx)(
                                    c.Paper,
                                    {
                                        radius: "round",
                                        className: h().cover,
                                        style: l(t),
                                        children: (0, s.jsx)(u.BW, {
                                            src:
                                                null != (a = e.uri)
                                                    ? a
                                                    : void 0,
                                            withAvatarReplace: !0,
                                            fit: "contain",
                                            size: 100,
                                            className: h().image,
                                        }),
                                    },
                                    e.uri,
                                );
                            }),
                        }),
                    ],
                });
            };
            !(function (e) {
                (e.SQUARE = "SQUARE"), (e.CIRCLE = "CIRCLE");
            })(i || (i = {}));
            var y = a(73635),
                K = a.n(y),
                E = a(97531),
                I = a(41028);
            !(function (e) {
                (e.NUMBER = "NUMBER"), (e.TEXT = "TEXT");
            })(l || (l = {}));
            var f = a(92159),
                A = a.n(f);
            let R = (0, E.PA)((e) => {
                    var t;
                    let {
                            data: a,
                            index: r,
                            variant: n,
                            isOrderVisible: m,
                            hasOnlyArtistItems: v,
                        } = e,
                        { formatNumber: p } = (0, _.A)(),
                        S = (0, d.useMemo)(
                            () => ({
                                "--slide-final-translate-offset":
                                    n === o.x.CHART && v
                                        ? "".concat(-8 * r, "px")
                                        : 0,
                                animationDelay: "".concat(0.5 * r, "s"),
                            }),
                            [r, v, n],
                        ),
                        C = (0, d.useMemo)(() => {
                            let e = Number(a.subtitle);
                            return a.subtitle && !isNaN(e) ? p(e) : a.subtitle;
                        }, [a.subtitle, p]),
                        b = (0, d.useMemo)(
                            () =>
                                a.titleType === l.NUMBER &&
                                "number" == typeof a.value
                                    ? (0, s.jsx)(T, {
                                          data: (0, I.wg)({ value: a.value }),
                                          className: A().stat,
                                          valueClassName: A().statValue,
                                          valueContainerClassName:
                                              A().statValueContainer,
                                      })
                                    : a.title
                                      ? n === o.x.CHART_ARTIST
                                          ? (0, s.jsx)(x.Heading, {
                                                variant: "div",
                                                size: "s",
                                                weight: "black",
                                                lineClamp: 2,
                                                className: A().textVariant,
                                                children: a.title,
                                            })
                                          : (0, s.jsx)(x.Caption, {
                                                variant: "span",
                                                type: "text",
                                                size: "l",
                                                weight: "medium",
                                                lineClamp: 2,
                                                className: A().textVariant,
                                                children: a.title,
                                            })
                                      : void 0,
                            [a.title, a.titleType, a.value, n],
                        ),
                        h = (0, d.useMemo)(() => {
                            if (C)
                                return (n === o.x.CHART && v) ||
                                    n === o.x.CHART_FAVORITES
                                    ? (0, s.jsx)(x.Heading, {
                                          variant: "div",
                                          size: "s",
                                          weight: "black",
                                          lineClamp: 2,
                                          className: (0, g.$)(
                                              A().textVariant,
                                              A().subTitle,
                                          ),
                                          children: C,
                                      })
                                    : (0, s.jsx)(x.Caption, {
                                          variant: "span",
                                          type: "text",
                                          size: "l",
                                          weight: "medium",
                                          lineClamp: 2,
                                          className: (0, g.$)(A().text, {
                                              [A().textVariant]:
                                                  n === o.x.CHART_ARTIST,
                                          }),
                                          children: C,
                                      });
                        }, [C, v, n]);
                    return (0, s.jsxs)("li", {
                        className: A().root,
                        style: S,
                        tabIndex: 0,
                        children: [
                            m &&
                                (0, s.jsx)(x.Heading, {
                                    variant: "div",
                                    size: "l",
                                    weight: "black",
                                    className: A().order,
                                    children: r + 1,
                                }),
                            (0, s.jsx)(c.Paper, {
                                radius:
                                    a.coverType === i.CIRCLE ? "round" : "xs",
                                className: A().cover,
                                children:
                                    (null == (t = a.cover) ? void 0 : t.uri) &&
                                    (0, s.jsx)(u.BW, {
                                        src: a.cover.uri,
                                        withAvatarReplace: !0,
                                        fit: "contain",
                                        className: A().image,
                                        size: 100,
                                    }),
                            }),
                            (0, s.jsxs)("div", {
                                className: A().meta,
                                children: [b, h],
                            }),
                        ],
                    });
                }),
                w = (e) => {
                    let { items: t, isOrderVisible: a, variant: l } = e,
                        r = (0, d.useMemo)(
                            () => t.every((e) => e.coverType === i.CIRCLE),
                            [t],
                        ),
                        n = (0, d.useMemo)(() => {
                            switch (l) {
                                case o.x.CHART_ARTIST:
                                    return "l";
                                case o.x.CHART_FAVORITES:
                                    return "xxl";
                                case o.x.CHART:
                                    if (r) return;
                                    return "m";
                                default:
                                    return null;
                            }
                        }, [r, l]);
                    return (0, s.jsx)("ol", {
                        className: (0, g.$)(
                            K().root,
                            K()["root_spacer_".concat(n)],
                        ),
                        tabIndex: -1,
                        children: t.map((e, t) =>
                            (0, s.jsx)(
                                R,
                                {
                                    data: e,
                                    index: t,
                                    variant: l,
                                    hasOnlyArtistItems: r,
                                    isOrderVisible: a,
                                },
                                e.title,
                            ),
                        ),
                    });
                };
            var j = a(2424),
                L = a.n(j);
            let k = (e) => {
                var t;
                let { data: a } = e;
                return (0, s.jsxs)("div", {
                    className: L().root,
                    children: [
                        (null == (t = a.cover) ? void 0 : t.uri) &&
                            (0, s.jsx)(c.Paper, {
                                radius: "round",
                                className: L().cover,
                                children: (0, s.jsx)(u.BW, {
                                    src: a.cover.uri,
                                    withAvatarReplace: !0,
                                    fit: "contain",
                                    className: L().image,
                                    size: 200,
                                }),
                            }),
                        a.title &&
                            (0, s.jsx)(x.Heading, {
                                variant: "div",
                                size: "xl",
                                weight: "bold",
                                className: L().title,
                                lineClamp: 2,
                                children: a.title,
                            }),
                        (0, s.jsx)(w, {
                            items: a.items,
                            isOrderVisible: !1,
                            variant: o.x.CHART_ARTIST,
                        }),
                    ],
                });
            };
            var O = a(97142),
                D = a.n(O);
            let P = (e) => {
                let { data: t } = e;
                return (0, s.jsxs)("div", {
                    className: D().root,
                    children: [
                        t.description &&
                            (0, s.jsx)(x.Caption, {
                                variant: "span",
                                type: "text",
                                size: "l",
                                weight: "medium",
                                className: D().text,
                                children: t.description,
                            }),
                        (0, s.jsx)(w, {
                            items: t.items,
                            variant: o.x.CHART,
                            isOrderVisible: t.isOrderVisible,
                        }),
                    ],
                });
            };
            var X = a(31334),
                H = a.n(X);
            let G = (e) => {
                let { data: t } = e,
                    a = "number" == typeof t.value,
                    i = (0, d.useMemo)(
                        () => ({
                            value: t.value,
                            valueDescription: t.valueDescription,
                            valueSuffix: t.valueSuffix,
                            footer: t.footer,
                        }),
                        [t.footer, t.value, t.valueDescription, t.valueSuffix],
                    );
                return (0, s.jsxs)("div", {
                    className: H().root,
                    children: [
                        a && (0, s.jsx)(T, { data: i, withAutoResize: !0 }),
                        t.description &&
                            (0, s.jsx)(x.Caption, {
                                variant: "span",
                                type: "text",
                                size: "l",
                                weight: "medium",
                                className: H().description,
                                children: t.description,
                            }),
                        (0, s.jsx)(w, {
                            items: t.items,
                            isOrderVisible: t.isOrderVisible,
                            variant: o.x.CHART_FAVORITES,
                        }),
                    ],
                });
            };
            (r || (r = {})).REWIND = "REWIND";
            var z = a(88442),
                M = a(52756),
                V = a(79169);
            let B = {
                src: "/_next/static/media/trailer_animated.aa3fd227.gif",
            };
            var U = a(54874),
                F = a.n(U);
            let W = (0, E.PA)((e) => {
                var t, a, i;
                let { data: l, withPersonalColor: n } = e,
                    { user: o } = (0, V.Pjs)(),
                    m =
                        l.entityType === r.REWIND ||
                        !!(null == (t = l.smallRoundCover) ? void 0 : t.uri),
                    _ = (0, d.useMemo)(() => {
                        if (!n || !o.collectionHue) {
                            var e;
                            return {
                                "--cover-background-color": l.cover.color,
                                "--small-round-cover-background-color":
                                    null == (e = l.smallRoundCover)
                                        ? void 0
                                        : e.color,
                            };
                        }
                        return {
                            "--cover-background-color": (0, V.eWZ)(
                                o.collectionHue,
                                0.8,
                                0.6,
                            ),
                            "--small-round-cover-background-color": (0, V.eWZ)(
                                o.collectionHue,
                                1,
                                0.35,
                            ),
                        };
                    }, [
                        l.cover.color,
                        null == (a = l.smallRoundCover) ? void 0 : a.color,
                        o.collectionHue,
                        n,
                    ]),
                    v = (0, d.useMemo)(() => {
                        var e;
                        return l.entityType === r.REWIND
                            ? (0, s.jsx)(c.Paper, {
                                  radius: "round",
                                  className: F().smallRoundCover,
                                  children: (0, s.jsx)(M.Image, {
                                      src: B.src,
                                      withFallback: !1,
                                      withLoadingIndicator: !1,
                                      fit: "contain",
                                      className: F().trailer,
                                      "aria-hidden": !0,
                                  }),
                              })
                            : (null == (e = l.smallRoundCover) ? void 0 : e.uri)
                              ? (0, s.jsx)(c.Paper, {
                                    radius: "round",
                                    className: (0, g.$)(
                                        F().smallRoundCover,
                                        F().smallRoundCover_withShadow,
                                    ),
                                    children: (0, s.jsx)(u.BW, {
                                        src: l.smallRoundCover.uri,
                                        withAvatarReplace: !0,
                                        fit: "contain",
                                        size: 100,
                                        className: F().image,
                                    }),
                                })
                              : void 0;
                    }, [
                        l.entityType,
                        null == (i = l.smallRoundCover) ? void 0 : i.uri,
                    ]),
                    p = (e, t) =>
                        (0, s.jsx)(x.Caption, {
                            variant: "span",
                            type: "text",
                            size: "l",
                            weight: "medium",
                            className: t,
                            lineClamp: 2,
                            children: e,
                        }),
                    S = l.align === z.t.BOTTOM;
                return (0, s.jsxs)("div", {
                    className: F().root,
                    style: _,
                    children: [
                        !S &&
                            l.description &&
                            p(l.description, F().description),
                        (0, s.jsx)(c.Paper, {
                            className: (0, g.$)(F().cover, {
                                [F().cover_small]: S,
                            }),
                            children:
                                l.cover.uri &&
                                (0, s.jsx)(u.pU, {
                                    backgroundSrc: l.coverBackground,
                                    className: F().image,
                                    fit: "contain",
                                    maskSrc: l.coverMask,
                                    size: 300,
                                    src: l.cover.uri,
                                    withAvatarReplace: !0,
                                }),
                        }),
                        (0, s.jsxs)("div", {
                            className: (0, g.$)(F().meta, {
                                [F().meta_withCover]: m,
                            }),
                            children: [
                                v,
                                l.subtitle && p(l.subtitle, F().subtitle),
                                l.title &&
                                    (0, s.jsx)(x.Heading, {
                                        variant: "h3",
                                        size: "xl",
                                        weight: "bold",
                                        className: F().title,
                                        lineClamp: 1,
                                        children: l.title,
                                    }),
                                S &&
                                    l.description &&
                                    p(l.description, F().description),
                            ],
                        }),
                    ],
                });
            });
            var $ = a(92184),
                J = a.n($);
            let q = (e) => {
                let { data: t } = e;
                return (0, s.jsxs)("div", {
                    className: J().root,
                    children: [
                        (0, s.jsx)(x.Caption, {
                            variant: "span",
                            type: "text",
                            size: "l",
                            weight: "medium",
                            className: J().text,
                            children: t.header,
                        }),
                        t.stats.map((e) =>
                            (0, s.jsx)(
                                T,
                                {
                                    data: e,
                                    descriptionLineClamp: 2,
                                    withAutoResize: !0,
                                },
                                e.value,
                            ),
                        ),
                        (0, s.jsx)(x.Caption, {
                            variant: "span",
                            type: "text",
                            size: "l",
                            weight: "medium",
                            className: J().text,
                            children: t.footer,
                        }),
                    ],
                });
            };
            !(function (e) {
                (e.SMALL = "SMALL"), (e.BIG = "BIG");
            })(n || (n = {}));
            var Z = a(91290),
                Y = a.n(Z);
            let Q = (e) => {
                let { data: t } = e,
                    a = t.titleSize === n.BIG ? "xxxl" : "xl";
                return (0, s.jsxs)("div", {
                    className: Y().root,
                    children: [
                        (0, s.jsx)(x.Heading, {
                            variant: "h2",
                            size: a,
                            weight: "black",
                            className: (0, g.$)(
                                Y().title,
                                Y().text,
                                Y()["title_size_".concat(a)],
                            ),
                            children: t.title,
                        }),
                        (0, s.jsx)(x.Caption, {
                            variant: "span",
                            type: "text",
                            size: "l",
                            weight: "medium",
                            className: (0, g.$)(Y().subtitle, Y().text),
                            children: t.subtitle,
                        }),
                    ],
                });
            };
            var ee = a(30293),
                et = a(75794),
                ea = a.n(et);
            let ei = (e) => {
                    let {
                        data: { title: t, subtitle: a, description: i },
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: ea().root,
                        children: [
                            (0, s.jsx)(x.Heading, {
                                variant: "h2",
                                size: "xxxl",
                                weight: "black",
                                className: (0, g.$)(ea().text, ea().header),
                                dangerouslySetInnerHTML: {
                                    __html: (0, ee.sanitizeDOM)(t || ""),
                                },
                            }),
                            (0, s.jsx)(x.Heading, {
                                variant: "h3",
                                size: "xl",
                                weight: "black",
                                className: ea().text,
                                dangerouslySetInnerHTML: {
                                    __html: (0, ee.sanitizeDOM)(a || ""),
                                },
                            }),
                            i &&
                                (0, s.jsx)(x.Caption, {
                                    variant: "span",
                                    type: "text",
                                    size: "l",
                                    weight: "medium",
                                    className: ea().text,
                                    dangerouslySetInnerHTML: {
                                        __html: (0, ee.sanitizeDOM)(i),
                                    },
                                }),
                        ],
                    });
                },
                el = (e) => {
                    let { data: t } = e;
                    return (0, s.jsx)(T, { data: t, withAutoResize: !0 });
                };
            var er = a(13002),
                en = a.n(er);
            let es = (e) => {
                    let {
                            label: t,
                            description: a,
                            artistsName: i,
                            trackTitle: l,
                            coverUri: r,
                        } = e,
                        n = [i, l].filter(Boolean).join(" • ");
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(x.Heading, {
                                className: (0, g.$)(
                                    en().textSecondary,
                                    en().itemLabel,
                                ),
                                variant: "h3",
                                size: "s",
                                weight: "black",
                                children: t,
                            }),
                            (0, s.jsx)(M.Image, {
                                className: en().cover,
                                src: r,
                                fit: "cover",
                                withLoadingIndicator: !1,
                                withFallback: !0,
                                withAvatarReplace: !0,
                                withAspectRatio: !0,
                                "aria-hidden": !0,
                            }),
                            (0, s.jsx)(x.Caption, {
                                className: (0, g.$)(
                                    en().textPrimary,
                                    en().itemMeta,
                                ),
                                variant: "div",
                                type: "text",
                                size: "l",
                                weight: "medium",
                                lineClamp: 2,
                                children: n,
                            }),
                            (0, s.jsx)(x.Heading, {
                                className: (0, g.$)(
                                    en().textSecondary,
                                    en().header,
                                ),
                                variant: "h3",
                                size: "xl",
                                weight: "black",
                                children: a,
                            }),
                        ],
                    });
                },
                eo = (0, E.PA)((e) => {
                    var t, a, i, l, r, n, o, d, c, u, m, _;
                    let { data: v } = e,
                        {
                            title: p,
                            subtitle: S,
                            firstItem: C,
                            secondItem: T,
                        } = v;
                    return (0, s.jsxs)("div", {
                        className: en().root,
                        children: [
                            (0, s.jsxs)("div", {
                                className: en().row,
                                children: [
                                    (0, s.jsx)(x.Heading, {
                                        className: (0, g.$)(
                                            en().textPrimary,
                                            en().header,
                                        ),
                                        variant: "h2",
                                        size: "xxxl",
                                        weight: "black",
                                        children: p,
                                    }),
                                    (0, s.jsx)(x.Heading, {
                                        className: en().textPrimary,
                                        variant: "h3",
                                        size: "s",
                                        weight: "black",
                                        children: S,
                                    }),
                                ],
                            }),
                            C &&
                                (0, s.jsx)("div", {
                                    className: en().row,
                                    children: (0, s.jsx)(es, {
                                        label: C.label,
                                        description: C.description,
                                        artistsName:
                                            null !=
                                            (o =
                                                null == (t = C.track)
                                                    ? void 0
                                                    : t.artistsName)
                                                ? o
                                                : null,
                                        trackTitle:
                                            null !=
                                            (d =
                                                null == (a = C.track)
                                                    ? void 0
                                                    : a.title)
                                                ? d
                                                : null,
                                        coverUri:
                                            null !=
                                            (c =
                                                null == (i = C.track)
                                                    ? void 0
                                                    : i.coverUri)
                                                ? c
                                                : void 0,
                                    }),
                                }),
                            T &&
                                (0, s.jsx)("div", {
                                    className: en().row,
                                    children: (0, s.jsx)(es, {
                                        label: T.label,
                                        description: T.description,
                                        artistsName:
                                            null !=
                                            (u =
                                                null == (l = T.track)
                                                    ? void 0
                                                    : l.artistsName)
                                                ? u
                                                : null,
                                        trackTitle:
                                            null !=
                                            (m =
                                                null == (r = T.track)
                                                    ? void 0
                                                    : r.title)
                                                ? m
                                                : null,
                                        coverUri:
                                            null !=
                                            (_ =
                                                null == (n = T.track)
                                                    ? void 0
                                                    : n.coverUri)
                                                ? _
                                                : void 0,
                                    }),
                                }),
                        ],
                    });
                }),
                ed = (e) => {
                    let { content: t, withPersonalColor: a } = e;
                    if (t.data)
                        switch (t.type) {
                            case o.x.TEXT:
                                return (0, s.jsx)(Q, { data: t.data });
                            case o.x.STATS:
                                return (0, s.jsx)(q, { data: t.data });
                            case o.x.CHART:
                                return (0, s.jsx)(P, { data: t.data });
                            case o.x.CHART_FAVORITES:
                                return (0, s.jsx)(G, { data: t.data });
                            case o.x.SINGLE_ENTITY:
                                return (0, s.jsx)(W, {
                                    data: t.data,
                                    withPersonalColor: a,
                                });
                            case o.x.TEXT_FACT:
                                return (0, s.jsx)(el, { data: t.data });
                            case o.x.CHART_ARTIST:
                                return (0, s.jsx)(k, { data: t.data });
                            case o.x.ARTISTS:
                                return (0, s.jsx)(N, { data: t.data });
                            case o.x.TEXT_EXTENDED:
                                return (0, s.jsx)(ei, { data: t.data });
                            case o.x.THEN_NOW_COMPARISON:
                                return (0, s.jsx)(eo, { data: t.data });
                        }
                    return null;
                };
        },
        65958: (e, t, a) => {
            "use strict";
            a.d(t, { AR: () => ev, z6: () => r, M1: () => F, tS: () => n });
            var i,
                l = a(93967),
                r = (function (e) {
                    return (
                        (e.USER = "user"),
                        (e.ARTIST = "artist"),
                        (e.PODCAST = "podcast"),
                        (e.SPECIAL = "special"),
                        e
                    );
                })({});
            let n = (e) =>
                e === r.USER
                    ? l.Jd.PersonalResults
                    : e === r.ARTIST
                      ? l.Jd.ArtistPersonalResults
                      : e === r.PODCAST
                        ? l.Jd.PodcastResults
                        : l.Jd.PersonalResults;
            var s = a(41028),
                o = a(79169);
            !(function (e) {
                (e.WAVE = "WAVE"),
                    (e.ACTION = "ACTION"),
                    (e.SHARE = "SHARE"),
                    (e.SIMPLE = "SIMPLE");
            })(i || (i = {}));
            var d = a(12146);
            let c = (e) =>
                    (0, s.wg)({
                        uri: null == e ? void 0 : e.uri,
                        color: null == e ? void 0 : e.color,
                        videoUrl: null == e ? void 0 : e.videoUrl,
                    }),
                u = (e) =>
                    (0, s.wg)({
                        value: e.value,
                        title: e.title,
                        titleType: e.titleType,
                        subtitle: e.subtitle,
                        cover: e.cover,
                        coverType: e.coverType,
                    }),
                g = (e) =>
                    (0, s.wg)({
                        value: e.value,
                        valueDescription: e.valueDescription,
                        valueSuffix: e.valueSuffix,
                        footer: e.footer,
                    }),
                m = (e) => {
                    var t, a, i, l, r, n, s;
                    return {
                        label: null != (i = e.label) ? i : null,
                        description: null != (l = e.description) ? l : null,
                        track: {
                            title: null != (r = e.track.title) ? r : null,
                            coverUri:
                                null !=
                                (n =
                                    null == (t = e.track.cover)
                                        ? void 0
                                        : t.uri)
                                    ? n
                                    : null,
                            artistsName:
                                null !=
                                (s =
                                    null == (a = e.track.artists)
                                        ? void 0
                                        : a.map((e) => e.name).join(", "))
                                    ? s
                                    : null,
                        },
                    };
                },
                _ = (e, t) => {
                    var a, l, r, n, o, _, v, x, p, S, C, T;
                    let b, h;
                    if (null == (a = e.button) ? void 0 : a.type)
                        switch (e.button.type) {
                            case i.ACTION:
                                b = ((e) => {
                                    var t;
                                    return (0, s.wg)({
                                        type: i.ACTION,
                                        data: {
                                            title: e.data.title,
                                            imageUrl: e.data.imageUrl,
                                            url:
                                                null == (t = e.data.action)
                                                    ? void 0
                                                    : t.weblink,
                                        },
                                    });
                                })(e.button);
                                break;
                            case i.SIMPLE:
                                b = ((e) =>
                                    (0, s.wg)({
                                        type: i.SIMPLE,
                                        data: {
                                            title: e.data.title,
                                            buttonColor: e.data.buttonColor,
                                            textColor: e.data.textColor,
                                            url: e.data.action.weblink,
                                        },
                                    }))(e.button);
                        }
                    if (null == (l = e.content) ? void 0 : l.type)
                        switch (null == (_ = e.content) ? void 0 : _.type) {
                            case d.x.CHART:
                                h = ((e) =>
                                    (0, s.wg)({
                                        type: e.type,
                                        data: {
                                            description: e.data.description,
                                            isOrderVisible:
                                                !!e.data.isOrderVisible,
                                            items: e.data.items.map(u),
                                        },
                                    }))(e.content);
                                break;
                            case d.x.CHART_FAVORITES:
                                h = ((e) =>
                                    (0, s.wg)({
                                        type: e.type,
                                        data: {
                                            value: e.data.value,
                                            valueDescription:
                                                e.data.valueDescription,
                                            valueSuffix: e.data.valueSuffix,
                                            footer: e.data.footer,
                                            description: e.data.description,
                                            isOrderVisible:
                                                !!e.data.isOrderVisible,
                                            items: e.data.items.map(u),
                                        },
                                    }))(e.content);
                                break;
                            case d.x.SINGLE_ENTITY:
                                h = ((e) => {
                                    let { coverMask: t, coverBackground: a } =
                                        e.data;
                                    return (
                                        (t && a) ||
                                            ((t =
                                                "avatars.mds.yandex.net/get-music-misc/28592/img.68eebe12749d24738fe2018e/%%"),
                                            (a =
                                                "avatars.mds.yandex.net/get-music-misc/28592/img.68eebdb294053d016bcd7bf0/%%")),
                                        (0, s.wg)({
                                            type: e.type,
                                            data: {
                                                title: e.data.title,
                                                subtitle: e.data.subtitle,
                                                description: e.data.description,
                                                entityType: e.data.entityType,
                                                cover: c(e.data.cover),
                                                coverMask: t,
                                                coverBackground: a,
                                                align: e.data.align,
                                                smallRoundCover: e.data
                                                    .smallRoundCover
                                                    ? c(e.data.smallRoundCover)
                                                    : void 0,
                                            },
                                        })
                                    );
                                })(e.content);
                                break;
                            case d.x.STATS:
                                h = ((e) => {
                                    var t;
                                    return (0, s.wg)({
                                        type: e.type,
                                        data: {
                                            header: e.data.header,
                                            footer:
                                                null != (t = e.data.footer)
                                                    ? t
                                                    : void 0,
                                            align: e.data.align,
                                            stats: e.data.stats.map(g),
                                        },
                                    });
                                })(e.content);
                                break;
                            case d.x.TEXT:
                                h = ((e) =>
                                    (0, s.wg)({
                                        type: e.type,
                                        data: {
                                            title: e.data.title,
                                            subtitle: e.data.subtitle,
                                            align: e.data.align,
                                            titleSize: e.data.titleSize,
                                        },
                                    }))(e.content);
                                break;
                            case d.x.TEXT_FACT:
                                h = ((e) =>
                                    (0, s.wg)({
                                        type: e.type,
                                        data: g(e.data),
                                    }))(e.content);
                                break;
                            case d.x.CHART_ARTIST:
                                h = ((e) => {
                                    let t = e.data.cover
                                        ? c(e.data.cover)
                                        : null;
                                    return (0, s.wg)({
                                        type: e.type,
                                        data: {
                                            title: e.data.title,
                                            cover: t,
                                            items: e.data.items.map(u),
                                        },
                                    });
                                })(e.content);
                                break;
                            case d.x.ARTISTS:
                                h = ((e) => {
                                    let t = e.data.covers
                                        ? e.data.covers.slice(0, 3).map(c)
                                        : [];
                                    return (0, s.wg)({
                                        type: e.type,
                                        data: {
                                            value: e.data.value,
                                            valueDescription:
                                                e.data.valueDescription,
                                            valueSuffix: e.data.valueSuffix,
                                            footer: e.data.footer,
                                            covers: t,
                                        },
                                    });
                                })(e.content);
                                break;
                            case d.x.TEXT_EXTENDED:
                                h = ((e) => {
                                    var t, a, i;
                                    return {
                                        type: e.type,
                                        data: {
                                            title:
                                                null != (t = e.data.title)
                                                    ? t
                                                    : null,
                                            subtitle:
                                                null != (a = e.data.subtitle)
                                                    ? a
                                                    : null,
                                            description:
                                                null != (i = e.data.description)
                                                    ? i
                                                    : null,
                                        },
                                    };
                                })(e.content);
                                break;
                            case d.x.THEN_NOW_COMPARISON:
                                h = ((e) => {
                                    var t, a;
                                    return {
                                        type: e.type,
                                        data: {
                                            title:
                                                null != (t = e.data.title)
                                                    ? t
                                                    : null,
                                            subtitle:
                                                null != (a = e.data.subtitle)
                                                    ? a
                                                    : null,
                                            firstItem: e.data.firstItem
                                                ? m(e.data.firstItem)
                                                : null,
                                            secondItem: e.data.secondItem
                                                ? m(e.data.secondItem)
                                                : null,
                                        },
                                    };
                                })(e.content);
                        }
                    let N =
                            null !=
                            (v = null == (r = e.trailer) ? void 0 : r.tracks)
                                ? v
                                : [],
                        y =
                            null !=
                            (x =
                                null == (n = e.meta)
                                    ? void 0
                                    : n.animationDuration)
                                ? x
                                : 0.5;
                    return (0, s.wg)({
                        id: e.id,
                        background: {
                            animationDuration: y,
                            bgImageUrl:
                                null != (p = e.background.bgImageUrl) ? p : "",
                            videoUrl:
                                null != (S = e.background.videoUrl) ? S : "",
                            withSound: !!e.background.withSound,
                            firstFrameVideoUrl:
                                null != (C = e.background.firstFrameVideoUrl)
                                    ? C
                                    : "",
                            withPersonalColor: !!e.background.withPersonalColor,
                        },
                        slideColor: null == (o = e.meta) ? void 0 : o.color,
                        button: b,
                        content: h,
                        trailerRawTracks: N,
                        logo:
                            null != (T = null == t ? void 0 : t.logo)
                                ? T
                                : null,
                    });
                };
            var v = a(75305);
            let x = s.gK.model("SlideButtonActionData", {
                    title: s.gK.maybeNull(s.gK.string),
                    imageUrl: s.gK.maybeNull(s.gK.string),
                    url: s.gK.maybeNull(s.gK.string),
                }),
                p = s.gK.model("SlideButtonAction", {
                    type: s.gK.literal(i.ACTION),
                    data: x,
                }),
                S = s.gK.model("SlideButtonSimpleData", {
                    title: s.gK.maybeNull(s.gK.string),
                    buttonColor: s.gK.maybeNull(s.gK.string),
                    textColor: s.gK.maybeNull(s.gK.string),
                    url: s.gK.maybeNull(s.gK.string),
                }),
                C = s.gK.model("SlideButtonSimple", {
                    type: s.gK.literal(i.SIMPLE),
                    data: S,
                }),
                T = s.gK.model("SlideContentCover", {
                    uri: s.gK.maybeNull(s.gK.string),
                    color: s.gK.maybeNull(s.gK.string),
                    videoUrl: s.gK.maybeNull(s.gK.string),
                }),
                b = s.gK.model("SlideContentStat", {
                    value: s.gK.maybeNull(s.gK.number),
                    valueDescription: s.gK.maybeNull(s.gK.string),
                    valueSuffix: s.gK.maybeNull(s.gK.string),
                    footer: s.gK.maybeNull(s.gK.string),
                }),
                h = s.gK.compose(
                    s.gK.model("SlideContentArtistsModelData", {
                        covers: s.gK.array(T),
                    }),
                    b,
                ),
                N = s.gK.model("SlideContentArtistsModel", {
                    type: s.gK.literal(d.x.ARTISTS),
                    data: s.gK.maybe(h),
                }),
                y = s.gK.model("SlideContentItem", {
                    value: s.gK.maybeNull(s.gK.number),
                    title: s.gK.maybeNull(s.gK.string),
                    titleType: s.gK.maybeNull(s.gK.string),
                    subtitle: s.gK.maybeNull(s.gK.string),
                    cover: s.gK.maybeNull(T),
                    coverType: s.gK.maybeNull(s.gK.string),
                }),
                K = s.gK.model("SlideContentChartArtistData", {
                    title: s.gK.maybeNull(s.gK.string),
                    cover: s.gK.maybeNull(T),
                    items: s.gK.array(y),
                }),
                E = s.gK.model("SlideContentChartArtist", {
                    type: s.gK.literal(d.x.CHART_ARTIST),
                    data: s.gK.maybe(K),
                }),
                I = s.gK.compose(
                    s.gK.model("SlideContentChartFavoritesData", {
                        description: s.gK.maybeNull(s.gK.string),
                        isOrderVisible: s.gK.boolean,
                        items: s.gK.array(y),
                    }),
                    b,
                ),
                f = s.gK.model("SlideContentChartFavorites", {
                    type: s.gK.literal(d.x.CHART_FAVORITES),
                    data: s.gK.maybe(I),
                }),
                A = s.gK.model("SlideContentChartData", {
                    description: s.gK.maybeNull(s.gK.string),
                    isOrderVisible: s.gK.boolean,
                    items: s.gK.array(y),
                }),
                R = s.gK.model("SlideContentChart", {
                    type: s.gK.literal(d.x.CHART),
                    data: s.gK.maybe(A),
                }),
                w = s.gK.model("SlideContentSingleEntityData", {
                    title: s.gK.maybeNull(s.gK.string),
                    subtitle: s.gK.maybeNull(s.gK.string),
                    description: s.gK.maybeNull(s.gK.string),
                    entityType: s.gK.maybeNull(s.gK.string),
                    cover: T,
                    coverMask: s.gK.string,
                    coverBackground: s.gK.string,
                    align: s.gK.maybe(s.gK.string),
                    smallRoundCover: s.gK.maybeNull(T),
                }),
                j = s.gK.model("SlideContentSingleEntity", {
                    type: s.gK.literal(d.x.SINGLE_ENTITY),
                    data: s.gK.maybe(w),
                }),
                L = s.gK.model("SlideContentStatsData", {
                    header: s.gK.maybeNull(s.gK.string),
                    footer: s.gK.maybeNull(s.gK.string),
                    align: s.gK.maybeNull(s.gK.string),
                    stats: s.gK.array(b),
                }),
                k = s.gK.model("SlideContentStats", {
                    type: s.gK.literal(d.x.STATS),
                    data: s.gK.maybe(L),
                }),
                O = s.gK.model("SlideContentTextExtendedData", {
                    title: s.gK.maybeNull(s.gK.string),
                    subtitle: s.gK.maybeNull(s.gK.string),
                    description: s.gK.maybeNull(s.gK.string),
                }),
                D = s.gK.model("SlideContentTextExtended", {
                    type: s.gK.literal(d.x.TEXT_EXTENDED),
                    data: s.gK.maybe(O),
                }),
                P = s.gK.model("SlideContentTextFact", {
                    type: s.gK.literal(d.x.TEXT_FACT),
                    data: s.gK.maybe(b),
                }),
                X = s.gK.model("SlideContentTextData", {
                    title: s.gK.maybeNull(s.gK.string),
                    subtitle: s.gK.maybeNull(s.gK.string),
                    align: s.gK.maybeNull(s.gK.string),
                    titleSize: s.gK.maybeNull(s.gK.string),
                }),
                H = s.gK.model("SlideContentText", {
                    type: s.gK.literal(d.x.TEXT),
                    data: s.gK.maybe(X),
                }),
                G = s.gK.model("SlideContentThenNowComparisonItemTrack", {
                    title: s.gK.maybeNull(s.gK.string),
                    coverUri: s.gK.maybeNull(s.gK.string),
                    artistsName: s.gK.maybeNull(s.gK.string),
                }),
                z = s.gK.model("SlideContentThenNowComparisonItem", {
                    label: s.gK.maybeNull(s.gK.string),
                    description: s.gK.maybeNull(s.gK.string),
                    track: s.gK.maybeNull(G),
                }),
                M = s.gK.model("SlideContentThenNowComparisonData", {
                    title: s.gK.maybeNull(s.gK.string),
                    subtitle: s.gK.maybeNull(s.gK.string),
                    firstItem: s.gK.maybeNull(z),
                    secondItem: s.gK.maybeNull(z),
                }),
                V = s.gK.model("SlideContentThenNowComparison", {
                    type: s.gK.literal(d.x.THEN_NOW_COMPARISON),
                    data: s.gK.maybe(M),
                }),
                B = s.gK.model("SlideBackground", {
                    animationDuration: s.gK.number,
                    bgImageUrl: s.gK.string,
                    videoUrl: s.gK.string,
                    withSound: s.gK.boolean,
                    firstFrameVideoUrl: s.gK.string,
                    withPersonalColor: s.gK.boolean,
                }),
                U = s.gK
                    .model("Slide", {
                        id: s.gK.string,
                        background: B,
                        button: s.gK.maybe(s.gK.union(p, C)),
                        slideColor: s.gK.maybeNull(s.gK.string),
                        content: s.gK.maybe(
                            s.gK.union(R, f, j, H, k, P, E, N, D, V),
                        ),
                        trailerRawTracks: s.gK.maybeNull(s.gK.frozen()),
                        logo: s.gK.maybeNull(s.gK.string),
                    })
                    .views((e) => ({
                        get hasTrailer() {
                            var t;
                            return !!(null == (t = e.trailerRawTracks)
                                ? void 0
                                : t.length);
                        },
                        get entitiesData() {
                            if (!e.trailerRawTracks) return [];
                            return e.trailerRawTracks.map((e) => ({
                                type: v.R.SmartPreview,
                                meta: e,
                            }));
                        },
                    })),
                F = s.gK
                    .model("Slides", {
                        userSlidesLoadingState: s.gK.enumeration(
                            Object.values(o.GuX),
                        ),
                        artistSlidesLoadingState: s.gK.enumeration(
                            Object.values(o.GuX),
                        ),
                        podcastSlidesLoadingState: s.gK.enumeration(
                            Object.values(o.GuX),
                        ),
                        specialSlidesLoadingState: s.gK.enumeration(
                            Object.values(o.GuX),
                        ),
                        consumer: s.gK.maybe(
                            s.gK.enumeration(Object.values(r)),
                        ),
                        artistId: s.gK.maybe(s.gK.string),
                        podcastId: s.gK.maybe(s.gK.number),
                        campaignId: s.gK.maybe(s.gK.string),
                        activeSlide: s.gK.optional(s.gK.number, 0),
                        userItems: s.gK.array(U),
                        artistItems: s.gK.array(U),
                        podcastItems: s.gK.array(U),
                        specialItems: s.gK.array(U),
                        isMuted: s.gK.boolean,
                    })
                    .views((e) => ({
                        get shouldShowUserSlides() {
                            if (!(0, s._n)(e)) return !1;
                            let { experiments: t } = (0, s.Zn)(e);
                            return t.checkExperiment(
                                o.zal.WebNextRewind2024,
                                "on",
                            );
                        },
                        get shouldShowMusicBirthdaySlides() {
                            if (!(0, s._n)(e)) return !1;
                            let { experiments: t } = (0, s.Zn)(e);
                            return t.checkExperiment(
                                o.zal.WebNextMusicBirthday2025,
                                "on",
                            );
                        },
                        get isLoaded() {
                            return (
                                e.userSlidesLoadingState === o.GuX.RESOLVE ||
                                e.artistSlidesLoadingState === o.GuX.RESOLVE ||
                                e.podcastSlidesLoadingState === o.GuX.RESOLVE ||
                                e.specialSlidesLoadingState === o.GuX.RESOLVE
                            );
                        },
                    }))
                    .actions((e) => ({
                        setIsMuted: (t) => {
                            e.isMuted = t;
                        },
                        toggleMute: () => {
                            e.isMuted = !e.isMuted;
                        },
                        getUserSlides: (0, s.L3)(function* () {
                            let { slidesResource: t, modelActionsLogger: a } =
                                (0, s._$)(e);
                            if (e.userSlidesLoadingState !== o.GuX.PENDING)
                                try {
                                    e.userSlidesLoadingState = o.GuX.PENDING;
                                    let a = yield t.getUserSlides();
                                    e.userSlidesLoadingState !== o.GuX.IDLE &&
                                        (e.userSlidesLoadingState =
                                            o.GuX.RESOLVE),
                                        a.slides &&
                                            ((e.consumer = r.USER),
                                            (e.userItems = (0, s.wg)(
                                                a.slides.map((e) =>
                                                    _(e, { logo: a.logo }),
                                                ),
                                            ))),
                                        (e.userSlidesLoadingState =
                                            o.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t),
                                        e.userSlidesLoadingState !==
                                            o.GuX.IDLE &&
                                            ((e.userSlidesLoadingState =
                                                o.GuX.REJECT),
                                            (e.userItems = (0, s.wg)([])));
                                }
                        }),
                        getArtistSlides: (0, s.L3)(function* (t) {
                            let { slidesResource: a, modelActionsLogger: i } =
                                (0, s._$)(e);
                            if (e.artistSlidesLoadingState !== o.GuX.PENDING) {
                                e.artistId = t.artistId;
                                try {
                                    e.artistSlidesLoadingState = o.GuX.PENDING;
                                    let i = yield a.getArtistSlides(t);
                                    e.artistSlidesLoadingState !== o.GuX.IDLE &&
                                        (e.artistSlidesLoadingState =
                                            o.GuX.RESOLVE),
                                        i.slides &&
                                            ((e.consumer = r.ARTIST),
                                            (e.artistItems = (0, s.wg)(
                                                i.slides.map((e) =>
                                                    _(e, { logo: i.logo }),
                                                ),
                                            ))),
                                        (e.artistSlidesLoadingState =
                                            o.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t),
                                        e.artistSlidesLoadingState !==
                                            o.GuX.IDLE &&
                                            ((e.artistSlidesLoadingState =
                                                o.GuX.REJECT),
                                            (e.artistItems = (0, s.wg)([])));
                                }
                            }
                        }),
                        getPodcastSlides: (0, s.L3)(function* (t) {
                            let { slidesResource: a, modelActionsLogger: i } =
                                (0, s._$)(e);
                            if (e.podcastSlidesLoadingState !== o.GuX.PENDING) {
                                e.podcastId = t.podcastId;
                                try {
                                    e.podcastSlidesLoadingState = o.GuX.PENDING;
                                    let i = yield a.getPodcastSlides(t);
                                    e.podcastSlidesLoadingState !==
                                        o.GuX.IDLE &&
                                        (e.podcastSlidesLoadingState =
                                            o.GuX.RESOLVE),
                                        i.slides &&
                                            ((e.consumer = r.PODCAST),
                                            (e.podcastItems = (0, s.wg)(
                                                i.slides.map((e) =>
                                                    _(e, { logo: i.logo }),
                                                ),
                                            ))),
                                        (e.podcastSlidesLoadingState =
                                            o.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t),
                                        e.podcastSlidesLoadingState !==
                                            o.GuX.IDLE &&
                                            ((e.podcastSlidesLoadingState =
                                                o.GuX.REJECT),
                                            (e.podcastItems = (0, s.wg)([])));
                                }
                            }
                        }),
                        getSpecialSlides: (0, s.L3)(function* (t) {
                            let { slidesResource: a, modelActionsLogger: i } =
                                (0, s._$)(e);
                            if (e.specialSlidesLoadingState !== o.GuX.PENDING) {
                                e.campaignId = t.campaignId;
                                try {
                                    e.specialSlidesLoadingState = o.GuX.PENDING;
                                    let i = yield a.getSpecialSlides(t);
                                    e.specialSlidesLoadingState !==
                                        o.GuX.IDLE &&
                                        (e.specialSlidesLoadingState =
                                            o.GuX.RESOLVE),
                                        i.slides &&
                                            ((e.consumer = r.SPECIAL),
                                            (e.specialItems = (0, s.wg)(
                                                i.slides.map((e) =>
                                                    _(e, { logo: i.logo }),
                                                ),
                                            ))),
                                        (e.specialSlidesLoadingState =
                                            o.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t),
                                        e.specialSlidesLoadingState !==
                                            o.GuX.IDLE &&
                                            ((e.specialSlidesLoadingState =
                                                o.GuX.REJECT),
                                            (e.specialItems = (0, s.wg)([])));
                                }
                            }
                        }),
                        setActiveSlide(t) {
                            e.activeSlide = t;
                        },
                        resetUser() {
                            (e.userSlidesLoadingState = o.GuX.IDLE),
                                (e.userItems = (0, s.wg)([]));
                        },
                        resetArtist() {
                            (e.artistSlidesLoadingState = o.GuX.IDLE),
                                (e.artistItems = (0, s.wg)([]));
                        },
                        resetPodcast() {
                            (e.podcastSlidesLoadingState = o.GuX.IDLE),
                                (e.podcastItems = (0, s.wg)([]));
                        },
                        resetSpecial() {
                            (e.specialSlidesLoadingState = o.GuX.IDLE),
                                (e.specialItems = (0, s.wg)([]));
                        },
                    }));
            var W = a(33008),
                $ = a(85896),
                J = a(66268),
                q = a(88442),
                Z = a(45415),
                Y = a(41458),
                Q = a(51991),
                ee = a(78016),
                et = a(54487),
                ea = a(77868),
                ei = a(18740),
                el = a(22867),
                er = a.n(el);
            let en = (e) => {
                var t;
                let { data: a, className: i } = e;
                return (0, W.jsxs)(ei.N_, {
                    href: null != (t = a.url) ? t : void 0,
                    className: (0, $.$)(er().root, i),
                    children: [
                        (0, W.jsx)(et.Paper, {
                            radius: "xs",
                            className: er().cover,
                            children:
                                a.imageUrl &&
                                (0, W.jsx)(ei.BW, {
                                    src: a.imageUrl,
                                    withAvatarReplace: !0,
                                    fit: "contain",
                                    className: er().image,
                                    size: 100,
                                }),
                        }),
                        (0, W.jsx)(ea.Caption, {
                            variant: "span",
                            type: "controls",
                            size: "l",
                            weight: "medium",
                            className: er().text,
                            lineClamp: 1,
                            children: a.title,
                        }),
                        (0, W.jsx)(ee.Icon, {
                            variant: "arrowRight",
                            size: "xs",
                            className: er().icon,
                        }),
                    ],
                });
            };
            var es = a(44189),
                eo = a(62019),
                ed = a.n(eo);
            let ec = (e) => {
                    var t;
                    let { data: a, className: i } = e,
                        l = (0, o.ZpR)(null != (t = a.url) ? t : ""),
                        r = (0, J.useMemo)(
                            () => ({
                                "--text-color": a.textColor,
                                "--button-color": a.buttonColor,
                            }),
                            [a.buttonColor, a.textColor],
                        );
                    return (0, W.jsx)(es.Button, {
                        role: "link",
                        style: r,
                        className: (0, $.$)(ed().root, i),
                        size: "default",
                        radius: "xxxl",
                        color: "primary",
                        withHover: !1,
                        withRipple: !1,
                        onClick: l,
                        children: (0, W.jsx)(ea.Caption, {
                            variant: "span",
                            type: "controls",
                            size: "l",
                            weight: "medium",
                            lineClamp: 1,
                            children: a.title,
                        }),
                    });
                },
                eu = (e) => {
                    let { button: t, className: a } = e;
                    switch (t.type) {
                        case i.ACTION:
                            if (t.data.url)
                                return (0, W.jsx)(en, {
                                    data: t.data,
                                    className: a,
                                });
                            return null;
                        case i.SIMPLE:
                            if (t.data.url)
                                return (0, W.jsx)(ec, {
                                    data: t.data,
                                    className: a,
                                });
                            return null;
                    }
                };
            var eg = a(65520),
                em = a(35519),
                e_ = a.n(em);
            let ev = (e) => {
                let { slide: t, isActive: a } = e,
                    i = (0, o.jjz)(),
                    { state: l, toggleTrue: r, toggleFalse: n } = (0, Z.e)(!1),
                    s = (0, J.useMemo)(() => {
                        let e = t.content;
                        if (
                            (null == e ? void 0 : e.data) &&
                            "align" in e.data
                        ) {
                            var a;
                            switch (null == (a = e.data) ? void 0 : a.align) {
                                case q.t.TOP:
                                    return "top";
                                case q.t.CENTER:
                                    break;
                                case q.t.BOTTOM:
                                    return "bottom";
                            }
                        }
                        return "center";
                    }, [t]);
                return (0, W.jsx)("div", {
                    className: e_().root,
                    children: (0, W.jsxs)(Q.Background, {
                        isActive: a,
                        isContentVisible: l,
                        setContentVisible: r,
                        setContentInvisible: n,
                        background: t.background,
                        className: e_().background,
                        children: [
                            t.logo &&
                                (0, W.jsx)("div", {
                                    className: e_().logo,
                                    children: (0, W.jsx)(Y.Logo, {
                                        alignIcon: "center",
                                        lang: i,
                                    }),
                                }),
                            t.content &&
                                l &&
                                (0, W.jsx)("div", {
                                    className: (0, $.$)(
                                        e_().content,
                                        e_()["content_align_".concat(s)],
                                        { [e_().playAnimation]: l },
                                    ),
                                    children: (0, W.jsx)(eg.SlideContent, {
                                        content: t.content,
                                        withPersonalColor:
                                            t.background.withPersonalColor,
                                    }),
                                }),
                            t.button &&
                                (0, W.jsx)(eu, {
                                    button: t.button,
                                    className: e_().button,
                                }),
                        ],
                    }),
                });
            };
        },
        73635: (e) => {
            e.exports = {
                root: "ChartBlock_root__GQF6w",
                root_spacer_m: "ChartBlock_root_spacer_m__yVzU8",
                root_spacer_l: "ChartBlock_root_spacer_l__wBImk",
                root_spacer_xxl: "ChartBlock_root_spacer_xxl__cSNqe",
            };
        },
        75794: (e) => {
            e.exports = {
                root: "TextExtendedContent_root__vzsuG",
                text: "TextExtendedContent_text__ksTX_",
                header: "TextExtendedContent_header__yn1Ej",
            };
        },
        88442: (e, t, a) => {
            "use strict";
            var i;
            a.d(t, { t: () => i }),
                (function (e) {
                    (e.TOP = "TOP"),
                        (e.CENTER = "CENTER"),
                        (e.BOTTOM = "BOTTOM");
                })(i || (i = {}));
        },
        91290: (e) => {
            e.exports = {
                root: "TextContent_root__A4Qmc",
                title_size_xl: "TextContent_title_size_xl__SWva9",
                title_size_xxxl: "TextContent_title_size_xxxl__oBHBa",
                subtitle: "TextContent_subtitle__Xe_FH",
                text: "TextContent_text__xsfVD",
            };
        },
        92159: (e) => {
            e.exports = {
                root: "ChartItem_root__nAl8B",
                animation: "ChartItem_animation__P8XVq",
                cover: "ChartItem_cover__jybex",
                order: "ChartItem_order__rTmAw",
                image: "ChartItem_image__enYFm",
                meta: "ChartItem_meta__apT_y",
                text: "ChartItem_text__qRsWe",
                textVariant: "ChartItem_textVariant__0NuuM",
                subTitle: "ChartItem_subTitle__J2Znt",
                stat: "ChartItem_stat__ofy5i",
                statValueContainer: "ChartItem_statValueContainer__pn9Ck",
                statValue: "ChartItem_statValue__fu5js",
            };
        },
        92184: (e) => {
            e.exports = {
                root: "StatsContent_root__yJVzS",
                text: "StatsContent_text__l2xi_",
            };
        },
        97142: (e) => {
            e.exports = {
                root: "ChartContent_root__MFONP",
                text: "ChartContent_text__cB18f",
            };
        },
    },
]);
