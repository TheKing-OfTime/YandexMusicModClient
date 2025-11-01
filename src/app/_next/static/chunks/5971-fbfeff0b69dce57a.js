(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5971],
    {
        6438: (e) => {
            e.exports = {
                root: "AlbumDonationMenuItem_root__Ajw_w",
                cover: "AlbumDonationMenuItem_cover__Gg8_a",
                image: "AlbumDonationMenuItem_image__AI5zU",
            };
        },
        9273: (e) => {
            e.exports = {
                root: "CommonAlbumPage_root__E8c_3",
                content: "CommonAlbumPage_content__vRSnu",
                scrollContent: "CommonAlbumPage_scrollContent__0XS83",
                header: "CommonAlbumPage_header__jS_be",
                text: "CommonAlbumPage_text__kqBSb",
                footerContainer: "CommonAlbumPage_footerContainer__JvjKN",
                footer: "CommonAlbumPage_footer__dBXP4",
                averageColorBackground:
                    "CommonAlbumPage_averageColorBackground__hs1_3",
                virtualScroll: "CommonAlbumPage_virtualScroll__Sc_gs",
                virtualItem: "CommonAlbumPage_virtualItem__yhvPB",
                label: "CommonAlbumPage_label__TErtx",
                important: "CommonAlbumPage_important__GXaZH",
                labelLink: "CommonAlbumPage_labelLink__v4EnM",
            };
        },
        10055: (e, t, a) => {
            "use strict";
            a.d(t, { O: () => i });
            var i = (function (e) {
                return (e.ABOUT = "about"), (e.TRACKS = "track-list"), e;
            })({});
        },
        10972: (e, t, a) => {
            "use strict";
            a.d(t, { Y: () => r });
            var i = a(33008),
                l = a(66268),
                n = a(73827),
                s = a(79169),
                o = a(18740);
            let r = (e) => {
                let { album: t } = e,
                    a = (0, l.useRef)(0),
                    { notify: r } = (0, s.lkh)(),
                    { formatMessage: d } = (0, n.A)();
                (0, l.useMemo)(
                    () => () => {
                        if (
                            !t.isNotFound &&
                            (t.isRejected || (!t.meta && !t.isLoading))
                        ) {
                            var e;
                            if (!a || a.current > 0) return;
                            let l = (
                                null == (e = t.meta) ? void 0 : e.isPodcast
                            )
                                ? d({
                                      id: "podcast-errors.error-during-loading-podcast",
                                  })
                                : d({
                                      id: "album-errors.error-during-loading-album",
                                  });
                            r((0, i.jsx)(o.hT, { error: l }), {
                                containerId: s.uQT.ERROR,
                            }),
                                a.current++;
                        }
                    },
                    [t.isLoading, t.isNotFound, t.isRejected, t.meta, d, r],
                )();
            };
        },
        12853: (e, t, a) => {
            "use strict";
            a.d(t, {
                ro: () => b.LastEpisodes,
                ZM: () => p.RelatedContent,
                N3: () => n,
                PX: () => m,
            });
            var i = a(41028),
                l = a(52732);
            let n = i.gK.model("RelatedContentItem", {
                id: i.gK.string,
                type: i.gK.string,
                title: i.gK.string,
                albums: i.gK.array(l.JC),
            });
            var s = a(6247),
                o = a(44078),
                r = a(95592),
                d = a(59615);
            let u = i.gK
                    .compose(
                        i.gK.model("VolumeItemTrack", {
                            type: i.gK.maybe(
                                i.gK.enumeration(Object.values(s.S)),
                            ),
                            id: i.gK.union(i.gK.string, i.gK.number),
                            data: i.gK.maybeNull(o.vj),
                            position: i.gK.maybe(i.gK.number),
                            positionInContext: i.gK.number,
                            isBest: i.gK.maybe(i.gK.boolean),
                            hasEverFinished: i.gK.maybe(i.gK.boolean),
                        }),
                        d.XT,
                    )
                    .actions((e) => ({
                        updateEverFinished: (t) => {
                            e.hasEverFinished = t;
                        },
                    }))
                    .named("VolumeItemTrack"),
                c = i.gK.compose(
                    i.gK.model("VolumeItemText", {
                        type: i.gK.literal(r.rU.TEXT),
                        data: i.gK.maybeNull(i.gK.number),
                    }),
                    d.XT,
                ),
                m = i.gK.union(c, u);
            var b = a(20508),
                p = a(64715);
        },
        20194: (e) => {
            e.exports = {
                carouselBlocks: "AlbumContent_carouselBlocks__bOsTV",
                carouselBlock: "AlbumContent_carouselBlock__QhSlm",
                carouselBlockHeader: "AlbumContent_carouselBlockHeader__Liibv",
                carouselContainer: "AlbumContent_carouselContainer__Y1M_e",
                label: "AlbumContent_label__2jz4j",
            };
        },
        20508: (e, t, a) => {
            "use strict";
            a.d(t, { LastEpisodes: () => p });
            var i = a(33008),
                l = a(85896),
                n = a(97531),
                s = a(66268),
                o = a(73827),
                r = a(48509),
                d = a(44078),
                u = a(79169),
                c = a(18740),
                m = a(85738),
                b = a.n(m);
            let p = (0, n.PA)((e) => {
                let { className: t, headingVariant: a = "h2" } = e,
                    { formatMessage: n } = (0, o.A)(),
                    { album: m, sonataState: p } = (0, u.Pjs)(),
                    { from: v, utmLink: g } = (0, u.fyy)({
                        pageId: u._Q$.PODCAST,
                        blockId: u.UfI.PODCAST,
                        contextId: m.id,
                        contextType: r.K.Album,
                    }),
                    x = (0, s.useMemo)(
                        () =>
                            m.lastEpisodes.map((e, t) =>
                                m.isResolved && e.data
                                    ? (0, i.jsx)(
                                          d.Kd,
                                          {
                                              track: e.data,
                                              playContextParams: {
                                                  contextData: {
                                                      type: r.K.Album,
                                                      meta: m.contextMeta,
                                                      from: v,
                                                      utmLink: g,
                                                  },
                                                  queueParams: {
                                                      index: e.positionInContext,
                                                      entityId: e.data.id,
                                                  },
                                                  loadContextMeta: !0,
                                                  entitiesData:
                                                      p.unloadedEntitiesDataFromModels,
                                              },
                                          },
                                          e.data.id,
                                      )
                                    : (0, i.jsx)(
                                          c.DS,
                                          {
                                              isActive: !0,
                                              className: b().shimmerItem,
                                              variant: u.Xjt.ALBUM,
                                          },
                                          t,
                                      ),
                            ),
                        [
                            m.lastEpisodes,
                            m.isResolved,
                            m.contextMeta,
                            v,
                            g,
                            p.unloadedEntitiesDataFromModels,
                        ],
                    );
                return (0, i.jsxs)("div", {
                    className: (0, l.$)(t, b().root),
                    children: [
                        (0, i.jsx)(c.Tw, {
                            headingVariant: a,
                            className: b().blockHeader,
                            title: n({
                                id: "entity-names.podcast-last-episodes",
                            }),
                        }),
                        (0, i.jsx)("div", {
                            role: "list",
                            "aria-label": n({
                                id: "podcast.last-episodes-list",
                            }),
                            tabIndex: 0,
                            children: x,
                        }),
                    ],
                });
            });
        },
        21184: (e) => {
            e.exports = {
                icon: "NotificationDownloadError_icon__r2AWx",
                message: "NotificationDownloadError_message__WwjsI",
            };
        },
        24753: (e) => {
            e.exports = { root: "Shimmer_root__NvUMY" };
        },
        26784: (e, t, a) => {
            "use strict";
            a.d(t, { j: () => j });
            var i = a(33008),
                l = a(73827),
                n = a(6247),
                s = a(95592),
                o = a(79169),
                r = a(85896),
                d = a(18740),
                u = (function (e) {
                    return (e.TRACK = "TRACK"), (e.TEXT = "TEXT"), e;
                })({}),
                c = a(24753),
                m = a.n(c);
            let b = (e) => {
                let { shimmerVariant: t, trackVariant: a = o.Xjt.ALBUM } = e;
                switch (t) {
                    case u.TRACK:
                        return (0, i.jsx)(d.DS, {
                            isActive: !0,
                            className: (0, r.$)({
                                [m().root]: a === o.Xjt.ALBUM,
                            }),
                            variant: a,
                        });
                    case u.TEXT:
                        return (0, i.jsx)(d.nN, { className: m().root });
                }
            };
            var p = a(77868),
                v = a(9273),
                g = a.n(v),
                x = a(57625),
                h = a.n(x);
            let A = (e) => {
                    let { text: t } = e;
                    return (0, i.jsx)("div", {
                        className: h().root,
                        children: (0, i.jsx)(p.Heading, {
                            variant: "h2",
                            className: g().text,
                            children: t,
                        }),
                    });
                },
                j = (e) => {
                    let { element: t, isNonMusic: a, album: r } = e,
                        { formatMessage: d } = (0, l.A)();
                    return (e) => {
                        var l;
                        let c =
                            null == r || null == (l = r.items) ? void 0 : l[e];
                        if (
                            !c ||
                            !r.meta ||
                            r.isRejected ||
                            !((e) =>
                                !!e &&
                                "object" == typeof e &&
                                (("type" in e && e.type === s.rU.TEXT) ||
                                    ("id" in e && "positionInContext" in e)))(c)
                        )
                            return (0, i.jsx)(b, {
                                shimmerVariant: u.TRACK,
                                trackVariant: o.Xjt.ALBUM,
                            });
                        if (!c.data && !c.isRejected)
                            switch (c.type) {
                                case s.rU.TEXT:
                                    return (0, i.jsx)(b, {
                                        shimmerVariant: u.TEXT,
                                    });
                                case n.S.TRACK:
                                    return (0, i.jsx)(b, {
                                        shimmerVariant: u.TRACK,
                                        trackVariant: o.Xjt.ALBUM,
                                    });
                                default:
                                    if (a)
                                        return (0, i.jsx)(b, {
                                            shimmerVariant: u.TRACK,
                                            trackVariant: o.Xjt.PLAYLIST,
                                        });
                            }
                        return c.type !== s.rU.TEXT
                            ? t(c, e)
                            : a
                              ? (0, i.jsx)(A, {
                                    text: d(
                                        { id: "entity-names.season-number" },
                                        { number: c.data },
                                    ),
                                })
                              : (0, i.jsx)(A, {
                                    text: d(
                                        { id: "entity-names.disk-number" },
                                        { number: c.data },
                                    ),
                                });
                    };
                };
        },
        29722: (e) => {
            e.exports = {
                header: "PromoLandingAlbumPageContent_header__olZnY",
                advert: "PromoLandingAlbumPageContent_advert__V34EQ",
                footerContainer:
                    "PromoLandingAlbumPageContent_footerContainer__QiHrX",
                footer: "PromoLandingAlbumPageContent_footer__ICBBF",
            };
        },
        30913: (e) => {
            e.exports = { popover: "AlbumDonationMenu_popover__Fswfa" };
        },
        32168: (e, t, a) => {
            "use strict";
            a.d(t, { F: () => m });
            var i = a(33008),
                l = a(97531),
                n = a(66268),
                s = a(18064),
                o = a(44612),
                r = a(95227),
                d = a(9273),
                u = a.n(d);
            let c = (e) => {
                    let {
                            item: t,
                            itemContentCallback: a,
                            resizeObserver: l,
                            scrollMargin: s,
                        } = e,
                        [r, d] = (0, o.d)();
                    (0, n.useEffect)(
                        () => (
                            r && l && l.observe(r),
                            () => {
                                r && l && l.unobserve(r);
                            }
                        ),
                        [r, l],
                    );
                    let c = {
                        transform: "translate3d(0, ".concat(
                            t.start - s,
                            "px, 0)",
                        ),
                    };
                    return (0, i.jsx)(
                        "div",
                        {
                            "data-index": t.index,
                            className: u().virtualItem,
                            ref: d,
                            style: c,
                            children: a(t.index),
                        },
                        t.key,
                    );
                },
                m = (0, l.PA)((e) => {
                    let {
                            count: t,
                            getDataByRange: a,
                            itemContentCallback: l,
                            role: d = "region",
                            ariaLabel: m,
                        } = e,
                        [b, p] = (0, o.d)(),
                        { virtualizer: v, resizeObserver: g } = (0, r.rA)({
                            count: t,
                            getEstimateSize: () => 56,
                            containerRef: b,
                        });
                    (0, n.useEffect)(() => {
                        !v.isScrolling && v.range && a(v.range);
                    }, [a, v.isScrolling, v.range]);
                    let x = v.getTotalSize(),
                        h = v.getVirtualItems();
                    return (0, i.jsx)("div", {
                        className: u().virtualScroll,
                        style: { height: "".concat(x, "px") },
                        ref: p,
                        role: d,
                        "aria-label": m,
                        ...(0, s.Am)(s.S7.TRACK_LIST, !0),
                        children: h.map((e) =>
                            (0, i.jsx)(
                                c,
                                {
                                    item: e,
                                    itemContentCallback: l,
                                    resizeObserver: g,
                                    scrollMargin: v.options.scrollMargin,
                                },
                                e.key,
                            ),
                        ),
                    });
                });
        },
        33801: (e, t, a) => {
            "use strict";
            a.d(t, { v: () => o });
            var i = a(79169),
                l = a(15479);
            function n(e) {
                let { type: t, genre: a } = e;
                return (
                    [l._.AUDIOBOOK, l._.FAIRY_TALE].includes(
                        null != t ? t : "",
                    ) ||
                    ["audiobooksinenglish", "fiction"].includes(
                        null != a ? a : "",
                    )
                );
            }
            function s(e) {
                let { albumType: t, messageFormatter: a } = e;
                switch (t) {
                    case l._.SINGLE:
                        return a({ id: "metadata.single" });
                    case l._.PODCAST:
                        return a({ id: "metadata.podcast" });
                    case l._.AUDIOBOOK:
                        return a({ id: "metadata.audiobook" });
                    case l._.FAIRY_TALE:
                        return a({ id: "metadata.fairy-tale" });
                    default:
                        return a({ id: "metadata.album" });
                }
            }
            async function o(e, t) {
                var a, o, r;
                if (!e)
                    return {
                        title: "",
                        description: "",
                        openGraph: {},
                        twitter: {},
                        appLinks: {},
                        other: {},
                    };
                let d = await (0, i.WGy)(t.locale),
                    u = (0, i.NsT)(e.title);
                return {
                    title: (function (e) {
                        let { albumMeta: t, messageFormatter: a } = e,
                            s = (0, i.j4K)(t.artists);
                        return n({ type: t.type, genre: t.genre })
                            ? s
                                ? a(
                                      {
                                          id: "metadata.audiobook-title-with-artists",
                                      },
                                      {
                                          albumTitle: t.title,
                                          artistsNames: s,
                                          artistsNamesCount: t.artists.length,
                                      },
                                  )
                                : a(
                                      {
                                          id: "metadata.audiobook-title-without-artists",
                                      },
                                      { albumTitle: t.title },
                                  )
                            : t.type === l._.PODCAST
                              ? a(
                                    { id: "metadata.podcast-title" },
                                    { albumTitle: t.title },
                                )
                              : s
                                ? a(
                                      {
                                          id: "metadata.album-title-with-artists",
                                      },
                                      { albumTitle: t.title, artistsNames: s },
                                  )
                                : a(
                                      {
                                          id: "metadata.album-title-without-artists",
                                      },
                                      { albumTitle: t.title },
                                  );
                    })({ albumMeta: e, messageFormatter: d }),
                    description: (function (e) {
                        let { albumMeta: t, messageFormatter: a } = e,
                            s = (0, i.j4K)(t.artists);
                        return n({ type: t.type, genre: t.genre })
                            ? s
                                ? a(
                                      {
                                          id: "metadata.audiobook-title-with-artists",
                                      },
                                      {
                                          albumTitle: t.title,
                                          artistsNames: s,
                                          artistsNamesCount: t.artists.length,
                                      },
                                  )
                                : a(
                                      {
                                          id: "metadata.audiobook-title-without-artists",
                                      },
                                      { albumTitle: t.title },
                                  )
                            : t.type === l._.PODCAST
                              ? a(
                                    { id: "metadata.podcast-title" },
                                    { albumTitle: t.title },
                                )
                              : s
                                ? a(
                                      {
                                          id: "metadata.album-title-with-artists",
                                      },
                                      { albumTitle: t.title, artistsNames: s },
                                  )
                                : a(
                                      {
                                          id: "metadata.album-title-without-artists",
                                      },
                                      { albumTitle: t.title },
                                  );
                    })({ albumMeta: e, messageFormatter: d }),
                    openGraph: (0, i.i$E)({
                        ogTitle: u,
                        ogDescription: (function (e) {
                            var t, a, o;
                            let { albumMeta: r, messageFormatter: d } = e,
                                u = (0, i.YFq)((0, i.j4K)(r.artists), 96, !1);
                            if (n({ type: r.type, genre: r.genre })) {
                                let { hours: e, minutes: a } = (0, i.VEg)(
                                        null != (t = r.durationSec) ? t : 0,
                                    ),
                                    l = d(
                                        { id: "metadata.hours-and-minutes" },
                                        { hours: e, minutes: a },
                                    );
                                return [
                                    u,
                                    s({
                                        albumType: r.type,
                                        messageFormatter: d,
                                    }),
                                    l,
                                ].join(" • ");
                            }
                            return r.type === l._.PODCAST
                                ? [
                                      (0, i.YFq)(
                                          null != (a = r.description) ? a : "",
                                          96,
                                          !1,
                                      ),
                                      s({
                                          albumType: r.type,
                                          messageFormatter: d,
                                      }),
                                      d(
                                          { id: "metadata.subscribers" },
                                          {
                                              subscribers:
                                                  null != (o = r.likesCount)
                                                      ? o
                                                      : 0,
                                          },
                                      ),
                                  ].join(" • ")
                                : [
                                      u,
                                      s({
                                          albumType: r.type,
                                          messageFormatter: d,
                                      }),
                                      r.year,
                                  ].join(" • ");
                        })({ albumMeta: e, messageFormatter: d }),
                        fullUrl: null != (a = t.fullUrl) ? a : "",
                        locale: t.locale,
                        ogImage: e.ogImage,
                        siteName: d({ id: "metadata.yandex-music" }),
                        ogType: "music.album",
                    }),
                    twitter: (0, i.HRN)({
                        cardType: i.WfF.APP,
                        title: u,
                        url: t.url,
                        appName: d({ id: "metadata.yandex-music" }),
                    }),
                    appLinks: (0, i.X5i)({
                        additional: {
                            ...t,
                            url: null != (o = t.url) ? o : "",
                            fullUrl: null != (r = t.fullUrl) ? r : "",
                            host: t.host,
                        },
                        appName: d({ id: "metadata.yandex-music" }),
                    }),
                    other: { "music:musician": (0, i.xdV)(e.artists, t.host) },
                    alternates: (0, i.SEs)("/album/:albumId", t.tld, {
                        params: { albumId: e.id },
                    }),
                };
            }
        },
        36638: (e) => {
            e.exports = {
                root: "RelatedContent_root__Dl1Nr",
                carousel: "RelatedContent_carousel__pmv5c",
                header: "RelatedContent_header__527S3",
            };
        },
        36701: (e) => {
            e.exports = {
                averageColorBackground:
                    "PromoLandingAlbumPage_averageColorBackground__QcQaQ",
            };
        },
        37722: (e, t, a) => {
            "use strict";
            a.d(t, { c: () => s });
            var i = a(66268),
                l = a(6247),
                n = a(79169);
            let s = (e) => {
                let { album: t } = e;
                return (0, i.useCallback)(
                    (e) => {
                        let a = [];
                        for (let i = e.startIndex; i <= e.endIndex; i++) {
                            let e = t.items[i];
                            (null == e ? void 0 : e.type) === l.S.TRACK &&
                                (null == e ? void 0 : e.loadingState) ===
                                    n.GuX.IDLE &&
                                a.push(e.id);
                        }
                        a.length && t.getTracks({ trackIds: a });
                    },
                    [t],
                );
            };
        },
        42547: (e) => {
            e.exports = {
                root: "Offline_root__IxjsY",
                container: "Offline_container__2V5Vo",
                icon: "Offline_icon__jDmpJ",
                title: "Offline_title__Y2CtW",
                text: "Offline_text__Nhult",
                buttons: "Offline_buttons__ZOFI7",
                button: "Offline_button__QSA_j",
            };
        },
        47569: (e, t, a) => {
            "use strict";
            a.d(t, { h: () => o });
            var i = a(66268),
                l = a(52732),
                n = a(79169),
                s = a(33801);
            let o = (e, t, a) => {
                (0, i.useEffect)(() => {
                    let i = t && a;
                    if (!(null == e ? void 0 : e.meta) || e.isLoading || i)
                        return;
                    let o = (0, l.fO)(e.meta);
                    t ||
                        (0, s.v)(o, {
                            fullUrl: null,
                            locale: null,
                            url: null,
                            tld: "",
                            host: "",
                        }).then((e) => {
                            (0, n.jxB)(e);
                        });
                }, [
                    null == e ? void 0 : e.meta,
                    null == e ? void 0 : e.isLoading,
                    a,
                    t,
                ]);
            };
        },
        47954: (e, t, a) => {
            "use strict";
            a.d(t, { PromoLandingAlbumPage: () => K });
            var i = a(33008),
                l = a(85896),
                n = a(97531),
                s = a(17846),
                o = a(66268),
                r = a(42314),
                d = a(53984),
                u = a(83888),
                c = a(64143),
                m = a(95592),
                b = a(52931),
                p = a(79169),
                v = a(18740),
                g = a(47569),
                x = a(10972),
                h = a(9273),
                A = a.n(h),
                j = a(36701),
                f = a.n(j),
                _ = a(73827),
                C = a(48509),
                k = a(44078),
                T = a(88434),
                I = a(37722),
                N = a(26784),
                y = a(32168),
                P = (function (e) {
                    return (e.TOP = "TOP"), (e.BOTTOM = "BOTTOM"), e;
                })({}),
                O = a(42213);
            let E = {
                    MOBILE: {
                        TEST: {
                            [P.BOTTOM]: "R-A-14568769-4",
                            [P.TOP]: "R-A-14568769-3",
                        },
                        PROD: {
                            [P.BOTTOM]: "R-A-14568769-2",
                            [P.TOP]: "R-A-14568769-1",
                        },
                    },
                    DESKTOP: {
                        TEST: {
                            [P.BOTTOM]: "R-A-14568770-4",
                            [P.TOP]: "R-A-14568770-3",
                        },
                        PROD: {
                            [P.BOTTOM]: "R-A-14568770-2",
                            [P.TOP]: "R-A-14568770-1",
                        },
                    },
                },
                L = (0, n.PA)((e) => {
                    let { variant: t, className: a } = e,
                        { formatMessage: l } = (0, _.A)(),
                        n = (0, p.UlF)(),
                        { productionBlockId: s, testBlockId: o } = ((e) => {
                            let {
                                settings: { isMobile: t },
                            } = (0, p.Pjs)();
                            return t
                                ? {
                                      productionBlockId: E.MOBILE.PROD[e],
                                      testBlockId: E.MOBILE.TEST[e],
                                  }
                                : {
                                      productionBlockId: E.DESKTOP.PROD[e],
                                      testBlockId: E.DESKTOP.TEST[e],
                                  };
                        })(t),
                        r = (0, O.c)(() => {
                            n.error(
                                "Cannot render promolanding advert banner",
                                { productionBlockId: s, testBlockId: o },
                            );
                        });
                    return (0, i.jsx)("div", {
                        "aria-label": l({ id: "advert.banner" }),
                        role: "banner",
                        children: (0, i.jsx)(v.fJ, {
                            isAsync: !1,
                            onError: r,
                            productionBlockId: s,
                            testBlockId: o,
                            className: a,
                        }),
                    });
                });
            var S = a(29722),
                R = a.n(S);
            let B = (e) => {
                let { shouldPlaceAdvertOnBottom: t } = e;
                return (0, i.jsxs)("div", {
                    className: (0, l.$)(
                        A().footerContainer,
                        A().footer,
                        R().footerContainer,
                    ),
                    children: [
                        t &&
                            (0, i.jsx)(L, {
                                variant: P.BOTTOM,
                                className: R().advert,
                            }),
                        (0, i.jsx)(v.Z7, { className: R().footer }),
                    ],
                });
            };
            var M = a(74837);
            let U = (0, n.PA)(() => {
                    let { promolanding: e } = (0, p.Pjs)();
                    return e.isLoading || !e.meta || e.isRejected
                        ? (0, i.jsx)(M.c6, { isActive: !0 })
                        : (0, i.jsx)(M.e4, { album: e.meta });
                }),
                D = (e) => {
                    let { shouldPlaceAdvertOnTop: t } = e;
                    return (0, i.jsxs)("div", {
                        className: (0, l.$)(A().header, R().header),
                        children: [
                            t &&
                                (0, i.jsx)(L, {
                                    variant: P.TOP,
                                    className: R().advert,
                                }),
                            (0, i.jsx)(U, {}),
                        ],
                    });
                },
                w = (0, n.PA)(() => {
                    var e;
                    let {
                            user: t,
                            promolanding: a,
                            experiments: l,
                        } = (0, p.Pjs)(),
                        { isFreemium: n } = (0, p.XCI)(),
                        { formatMessage: s } = (0, _.A)(),
                        { from: o, utmLink: r } = (0, p.fyy)({
                            pageId: p._Q$.PROMOLANDING_ALBUM,
                            blockId: p.UfI.ALBUM,
                            contextType: C.K.Album,
                            contextId: a.id,
                        }),
                        d = (0, I.c)({ album: a }),
                        u = (0, p.wZZ)(),
                        c = n || !t.isAuthorized,
                        b =
                            c &&
                            l.checkExperiment(
                                p.zal.WebNextPromoLandingAdvert,
                                "top",
                            ),
                        v =
                            c &&
                            l.checkExperiment(
                                p.zal.WebNextPromoLandingAdvert,
                                "bottom",
                            ),
                        g = a.items.length || T.k,
                        x = (0, N.j)({
                            element: (e, t) => {
                                var l;
                                if (e.data && e.type !== m.rU.TEXT)
                                    return (0, i.jsx)(k.Pt, {
                                        withLightning:
                                            e.isBest && !e.data.isRemoved,
                                        track: e.data,
                                        position: e.position,
                                        albumArtists:
                                            null == a || null == (l = a.meta)
                                                ? void 0
                                                : l.artists,
                                        playContextParams: u(t, {
                                            contextData: {
                                                type: C.K.Album,
                                                meta: a.contextMeta,
                                                from: o,
                                                utmLink: r,
                                                playDisliked: !0,
                                            },
                                            queueParams: {
                                                index: e.positionInContext,
                                            },
                                            loadContextMeta: !0,
                                            entitiesData:
                                                a.state
                                                    .unloadedEntitiesDataFromModels,
                                        }),
                                    });
                            },
                            album: a,
                        });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(D, { shouldPlaceAdvertOnTop: b }),
                            (0, i.jsx)(y.F, {
                                count: g,
                                itemContentCallback: x,
                                getDataByRange: d,
                                ariaLabel: s(
                                    { id: "entity-names.albums-tracks-list" },
                                    {
                                        albumName:
                                            (null == (e = a.meta)
                                                ? void 0
                                                : e.title) || "",
                                    },
                                ),
                            }),
                            (0, i.jsx)(B, { shouldPlaceAdvertOnBottom: v }),
                        ],
                    });
                }),
                K = (0, n.PA)((e) => {
                    var t, a, n;
                    let {
                            albumId: h,
                            preloadedAlbum: j,
                            preloadedCpa: _,
                            isActive: C,
                        } = e,
                        {
                            experiments: k,
                            disclaimer: T,
                            promolanding: I,
                            albumCPA: N,
                        } = (0, p.Pjs)(),
                        { contentScrollRef: y, setContentScrollRef: P } = (0,
                        p.gKY)(),
                        {
                            setClidToQuery: O,
                            deleteClidFromQuery: E,
                            checkIsValidClid: L,
                        } = (0, p.IQF)(),
                        S = (0, r.L)(() => {
                            if (j) {
                                var e, t;
                                return (
                                    (null == (e = j.deprecation)
                                        ? void 0
                                        : e.targetAlbumId) &&
                                    (null == (t = j.deprecation)
                                        ? void 0
                                        : t.targetAlbumId) !== Number(h)
                                );
                            }
                            return (
                                I.deprecationTargetAlbumId &&
                                I.deprecationTargetAlbumId !== Number(h)
                            );
                        }),
                        R = (0, r.L)(() => {
                            var e;
                            if (
                                j &&
                                (null == (e = j.deprecation)
                                    ? void 0
                                    : e.targetAlbumId) &&
                                S
                            ) {
                                let { href: e } = (0, p.uvd)(
                                    "/album/:albumId",
                                    {
                                        params: {
                                            albumId:
                                                j.deprecation.targetAlbumId,
                                        },
                                    },
                                );
                                return e;
                            }
                            if (S && I.deprecationTargetAlbumId) {
                                let { href: e } = (0, p.uvd)(
                                    "/album/:albumId",
                                    {
                                        params: {
                                            albumId: I.deprecationTargetAlbumId,
                                        },
                                    },
                                );
                                return e;
                            }
                            let { href: t } = (0, p.uvd)("/album/:albumId", {
                                params: { albumId: h },
                            });
                            return t;
                        }),
                        B = (0, m.cp)({ album: I.meta, shouldHistoryBack: !0 }),
                        M = (0, p.ytd)(
                            null == (t = I.meta) ? void 0 : t.averageColor,
                        ),
                        { headerStyle: U } = (0, c.QZ)(M);
                    return ((0, x.Y)({ album: I }),
                    (0, p.Jzs)(I.isResolved),
                    (0, g.h)(I, !1),
                    (0, o.useEffect)(() => {
                        var e;
                        (null == (e = I.meta) ? void 0 : e.isUnsafeLegal) &&
                            B();
                    }, [B, null == (a = I.meta) ? void 0 : a.isUnsafeLegal]),
                    (!k.checkExperiment(p.zal.WebNextPromoLanding, "on") ||
                        S ||
                        I.promoCampaign.isPromoCampaignInactive) &&
                        (0, s.redirect)(R),
                    ((e) => {
                        let { redirectUrl: t } = e,
                            a = (0, s.useSearchParams)();
                        p.M3M.every((e) => {
                            let { queryKey: t } = e;
                            return a.has(t);
                        }) || (0, s.redirect)(t);
                    })({ redirectUrl: R }),
                    h &&
                        I.promoCampaign.isNeededToLoad &&
                        (0, o.use)(
                            I.getDataByCampaign({
                                albumId: Number(h),
                                preloadedAlbum: j,
                                preloadedCpa: _,
                                isActive: C,
                            }),
                        ),
                    (0, o.useEffect)(
                        () => (
                            L(N.cpa, Number(h)) || E(),
                            N.cpa && I.id && O(N.cpa, I.id),
                            () => {
                                E();
                            }
                        ),
                        [h, N.cpa, I.id, O, E, L],
                    ),
                    null == (n = I.meta) ? void 0 : n.isLegalRejected)
                        ? T.isRejected
                            ? (0, i.jsx)(u.w, {})
                            : (0, i.jsx)(b.MW, { disclaimer: T })
                        : (0, i.jsx)(p.nVz, {
                              pageId: p._Q$.PROMOLANDING_ALBUM,
                              pageEntityId: h,
                              children: (0, i.jsx)(p.pVJ, {
                                  pageAlbumId: Number(h),
                                  children: (0, i.jsxs)(c.hO, {
                                      scrollElement: y,
                                      children: [
                                          (0, i.jsx)(v.Y9, {
                                              variant: v.Vw.PROMO_LANDING,
                                          }),
                                          (0, i.jsxs)(d.C, {
                                              scrollableContainerRef: P,
                                              className: A().root,
                                              containerClassName: A().content,
                                              scrollContentClassName:
                                                  A().scrollContent,
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      className: (0, l.$)(
                                                          A()
                                                              .averageColorBackground,
                                                          f()
                                                              .averageColorBackground,
                                                      ),
                                                      style: U,
                                                  }),
                                                  (0, i.jsx)(w, {}),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                          });
                });
        },
        57625: (e) => {
            e.exports = { root: "TextVolume_root__wxSaK" };
        },
        64715: (e, t, a) => {
            "use strict";
            a.d(t, { RelatedContent: () => b });
            var i = a(33008),
                l = a(85896),
                n = a(97531),
                s = a(18064),
                o = a(52732),
                r = a(79169),
                d = a(18740);
            let u = {
                AUTHORS_BOOKS: "authors-books",
                CATEGORY_ALBUMS: "category-albums",
                LABELS_ALBUMS: "labels-albums",
                SIMILAR_ALBUMS: "similar-albums",
            };
            var c = a(36638),
                m = a.n(c);
            let b = (0, n.PA)((e) => {
                var t, a;
                let {
                        isShimmerVisible: n,
                        isShimmerActive: c,
                        className: b,
                        headingVariant: p = "h2",
                    } = e,
                    { album: v } = (0, r.Pjs)();
                return (0, i.jsx)("div", {
                    className: (0, l.$)(b, m().root),
                    children:
                        null == (a = v.relatedContent) || null == (t = a.items)
                            ? void 0
                            : t.map((e, t) => {
                                  let a = ((e) => {
                                      let t = Object.keys(u).find(
                                          (t) => u[t] === e,
                                      );
                                      return s.e8.album[t] || "";
                                  })(e.type);
                                  return (0, i.jsx)(
                                      d.OY,
                                      {
                                          headingVariant: p,
                                          title: e.title,
                                          isShimmerVisible: n,
                                          isShimmerActive: c,
                                          className: (0, l.$)(m().root, b),
                                          containerClassName: m().carousel,
                                          headerClassName: m().header,
                                          ...(a ? (0, s.Am)(a) : {}),
                                          children: e.albums.map((e) =>
                                              (0, i.jsx)(
                                                  o.aX,
                                                  {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withLikesCount: !0,
                                                      withAddition: !1,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                      },
                                      "".concat(e.type).concat(t),
                                  );
                              }),
                });
            });
        },
        82358: (e, t, a) => {
            "use strict";
            a.d(t, { AlbumPage: () => eb });
            var i = a(33008),
                l = a(97531),
                n = a(17846),
                s = a(66268),
                o = a(18064),
                r = a(42314),
                d = a(53984),
                u = a(88190),
                c = a(83888),
                m = a(64143),
                b = a(95592),
                p = a(52931),
                v = a(79169),
                g = a(18740),
                x = a(86916),
                h = a(47569),
                A = a(10972),
                j = a(9273),
                f = a.n(j),
                _ = a(85896),
                C = a(73827),
                k = a(93967),
                T = a(48509),
                I = a(53555),
                N = a(74837),
                y = a(52732),
                P = a(53706),
                O = a(44078),
                E = a(88434),
                L = a(37722),
                S = a(26784),
                R = a(42213);
            let B = (0, l.PA)((e) => {
                let { url: t } = e,
                    a = (0, P.cg)(),
                    l = (0, P.CC)(),
                    { ref: n, intersectionPropertyId: s } = (0, v.nMI)({
                        callback: l,
                        withViewUuid: !0,
                    }),
                    o = (0, v.ZpR)(t),
                    r = (0, R.c)((e) => {
                        a(k.QT.Link, t), o(e);
                    });
                return (0, i.jsx)(P.vK, {
                    onClick: r,
                    ref: n,
                    "data-intersection-property-id": s,
                });
            });
            var M = a(70879);
            let U = (0, l.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, P.cg)(),
                        l = (0, P.CC)(),
                        n = (0, P.Q$)()(t.url),
                        { ref: s, intersectionPropertyId: o } = (0, v.nMI)({
                            callback: l,
                            withViewUuid: !0,
                        }),
                        r = (0, v.ZpR)(n),
                        d = (0, v.ZpR)(t.artist.url),
                        u = (0, R.c)((e) => {
                            a(k.QT.ArtistScreen), d(e);
                        }),
                        c = (0, R.c)(() => {
                            a(k.QT.Link, n), r();
                        }),
                        m = (0, M.SA)({ artist: t.artist, callback: u });
                    return (0, i.jsx)(P.Xx, {
                        ref: s,
                        "data-intersection-property-id": o,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: m,
                        onNavigateToDonation: c,
                    });
                }),
                D = (0, l.PA)((e) => {
                    var t, a, l;
                    let {
                            className: n,
                            headerClassName: o,
                            containerClassName: r,
                            headingVariant: d,
                        } = e,
                        { formatMessage: u } = (0, C.A)(),
                        { album: c } = (0, v.Pjs)(),
                        m = (0, s.useMemo)(() => {
                            var e, t;
                            return (null == (e = c.donations)
                                ? void 0
                                : e.isLoading) ||
                                !(null == (t = c.donations) ? void 0 : t.items)
                                ? (0, P.kZ)(!0)
                                : c.donations.items.map((e, t) => {
                                      var a, l, n;
                                      return (0, i.jsx)(
                                          v.Bki,
                                          {
                                              objectType: k.ky.Donation,
                                              objectId: e.artist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: Number(
                                                  null == (l = c.donations) ||
                                                      null == (a = l.items)
                                                      ? void 0
                                                      : a.length,
                                              ),
                                              mainObjectId: String(
                                                  null == (n = c.meta)
                                                      ? void 0
                                                      : n.id,
                                              ),
                                              mainObjectType: k.ky.Album,
                                              children: (0, i.jsx)(
                                                  U,
                                                  { donation: e },
                                                  e.artist.id,
                                              ),
                                          },
                                          e.artist.id,
                                      );
                                  });
                        }, [
                            null == (t = c.donations) ? void 0 : t.isLoading,
                            null == (a = c.donations) ? void 0 : a.items,
                            null == (l = c.meta) ? void 0 : l.id,
                        ]);
                    return (0, i.jsx)(P.x0, {
                        className: n,
                        headerClassName: o,
                        containerClassName: r,
                        title: u({ id: "donation.support-text" }),
                        headingVariant: d,
                        children: m,
                    });
                });
            var w = a(78016),
                K = a(66098),
                V = a(54960),
                F = a(48551),
                X = a(30913),
                z = a.n(X),
                Q = a(52756),
                Y = a(54487),
                Z = a(77868),
                $ = a(6438),
                H = a.n($);
            let G = (0, l.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, P.Q$)()(t.url),
                        l = (0, v.ZpR)(a),
                        n = (() => {
                            let { hash: e } = (0, F.gf)(),
                                t = (0, v.UlF)(),
                                a = (0, F.st)(),
                                { pageId: i } = (0, v.$au)(),
                                {
                                    blockId: l,
                                    blockType: n,
                                    blockPosX: s,
                                    blockPosY: o,
                                } = (0, v.N8n)(),
                                {
                                    objectType: r,
                                    objectId: d,
                                    objectPosX: u,
                                    objectPosY: c,
                                    objectsCount: m,
                                    mainObjectId: b,
                                    mainObjectType: p,
                                } = (0, v.Jfv)();
                            return (0, R.c)(() => {
                                if (!a || !i) return;
                                let g = v.Wft[i];
                                if (!g) return;
                                let x = {
                                        userInteractionType: k.gi.Tap,
                                        hash: e,
                                        pageId: g,
                                        pageStyle: k.QL.ContextMenu,
                                        pagePlacement: k.c4.Hover,
                                        mainObjectType: p,
                                        mainObjectId: b,
                                        objectType: r,
                                        objectId: d,
                                        objectPosX: u,
                                        objectPosY: c,
                                        entityType: n,
                                        entityId: l,
                                        entityPosX: s,
                                        entityPosY: o,
                                        objectsCount: m,
                                        actionType: k.N6.CLICK,
                                    },
                                    h = (0, k.Fx)({
                                        params: x,
                                        logger: t,
                                        context:
                                            "useSendEventOnDonationMenuItemActionPerformed",
                                    });
                                h && (0, k.l6)(a.evgenInstance, h);
                            });
                        })(),
                        s = (0, P.CC)(),
                        { ref: o, intersectionPropertyId: r } = (0, v.nMI)({
                            callback: s,
                            withViewUuid: !0,
                        }),
                        d = (0, R.c)(() => {
                            n(), l();
                        });
                    return (0, i.jsxs)(
                        K.Dr,
                        {
                            ref: o,
                            "data-intersection-property-id": r,
                            className: H().root,
                            isBlock: !0,
                            onClick: d,
                            children: [
                                (0, i.jsx)(Y.Paper, {
                                    radius: "round",
                                    className: H().cover,
                                    children: (0, i.jsx)(Q.Image, {
                                        withAvatarReplace: !0,
                                        src: t.artist.coverUri,
                                        size: 100,
                                        fit: "contain",
                                        className: H().image,
                                    }),
                                }),
                                (0, i.jsx)(Z.Caption, {
                                    variant: "span",
                                    size: "m",
                                    weight: "medium",
                                    lineClamp: 1,
                                    children: t.artist.name,
                                }),
                            ],
                        },
                        a,
                    );
                }),
                W = (0, l.PA)(() => {
                    var e;
                    let {
                            settings: { isMobile: t },
                            album: { donations: a, meta: l },
                        } = (0, v.Pjs)(),
                        { formatMessage: n } = (0, C.A)(),
                        o = (() => {
                            let e = (0, F.st)(),
                                t = (0, v.UlF)(),
                                { hash: a } = (0, F.gf)(),
                                { pageId: i } = (0, v.$au)(),
                                { mainObjectId: l, mainObjectType: n } = (0,
                                v.Jfv)();
                            return (0, R.c)((s) => {
                                if (!e || !i || !v.Wft[i]) return;
                                let o = {
                                    pageStyle: k.QL.ContextMenu,
                                    pagePlacement: k.c4.Hover,
                                    mainObjectType: n,
                                    mainObjectId: l,
                                    hash: a,
                                    pageId: i,
                                };
                                s && (o.viewUuid = String((0, V.A)()));
                                let r = (0, k.Fx)({
                                    params: o,
                                    logger: t,
                                    context:
                                        "useSendEventOnDonationMenuOpenedOrClosed",
                                });
                                r &&
                                    (s
                                        ? (0, k.Fn)(
                                              null == e
                                                  ? void 0
                                                  : e.evgenInstance,
                                              r,
                                          )
                                        : (0, k.Ig)(
                                              null == e
                                                  ? void 0
                                                  : e.evgenInstance,
                                              r,
                                          ));
                            });
                        })(),
                        [r, d] = (0, s.useState)(!1),
                        u = (0, s.useRef)(!1);
                    return (
                        (0, s.useEffect)(() => {
                            r && (u.current = !0);
                        }, [r]),
                        (0, s.useEffect)(() => {
                            u.current && o(r);
                        }, [r, o]),
                        (0, i.jsx)(K.W1, {
                            ariaLabel: n({ id: "donation.button-text" }),
                            size: "s",
                            variant: "default",
                            radius: "round",
                            color: "secondary",
                            icon: (0, i.jsx)(w.Icon, {
                                size: "xxs",
                                variant: "ruble",
                            }),
                            onOpenChange: d,
                            open: r,
                            isMobile: t,
                            placement: "bottom",
                            offsetOptions: 8,
                            listClassName: z().popover,
                            children:
                                null == a || null == (e = a.items)
                                    ? void 0
                                    : e.map((e, t) => {
                                          var n;
                                          return (0, i.jsx)(
                                              v.Bki,
                                              {
                                                  objectType: k.ky.Donation,
                                                  objectId: e.artist.id,
                                                  objectPosX: 1,
                                                  objectPosY: t + 1,
                                                  objectsCount: Number(
                                                      null == (n = a.items)
                                                          ? void 0
                                                          : n.length,
                                                  ),
                                                  mainObjectId: String(
                                                      null == l ? void 0 : l.id,
                                                  ),
                                                  mainObjectType: k.ky.Album,
                                                  children: (0, i.jsx)(G, {
                                                      donation: e,
                                                  }),
                                              },
                                              e.artist.id,
                                          );
                                      }),
                        })
                    );
                });
            var J = a(32168);
            let q = (0, l.PA)((e) => {
                var t, a, l;
                let { album: n, size: s, weight: o, className: r } = e,
                    { formatMessage: d } = (0, C.A)(),
                    u = null == (t = n.labels) ? void 0 : t.length,
                    c = d(
                        (null == (a = n.meta) ? void 0 : a.isPodcast)
                            ? { id: "page.album-publisher-title" }
                            : { id: "page.album-label-title" },
                        { count: u },
                    );
                return (0, i.jsxs)("div", {
                    className: (0, _.$)(f().label, f().important, r),
                    children: [
                        (0, i.jsx)(Z.Caption, {
                            variant: "span",
                            size: s,
                            weight: o,
                            children: c,
                        }),
                        "\xa0",
                        (0, i.jsx)(Z.Caption, {
                            variant: "span",
                            size: s,
                            weight: o,
                            lineClamp: 1,
                            children:
                                null == (l = n.labels)
                                    ? void 0
                                    : l.map((e) => {
                                          let { id: t, name: a } = e;
                                          return (0, i.jsx)(
                                              g.N_,
                                              {
                                                  role: "link",
                                                  "aria-label": a,
                                                  href: n.labelUrl(t),
                                                  className: (0, _.$)(
                                                      f().labelLink,
                                                      f().important,
                                                  ),
                                                  children: (0, i.jsx)(
                                                      Z.Caption,
                                                      {
                                                          variant: "span",
                                                          children: a,
                                                      },
                                                  ),
                                              },
                                              t,
                                          );
                                      }),
                        }),
                    ],
                });
            });
            var ee = a(20194),
                et = a.n(ee);
            let ea = (0, l.PA)(() => {
                var e, t, a, l, n, d, u;
                let c = (0, s.useRef)(null),
                    m = (0, s.useRef)(0),
                    p = (0, v.wZZ)(),
                    { notify: x } = (0, v.lkh)(),
                    h = (0, P.Q$)(),
                    {
                        album: A,
                        albumCPA: j,
                        experiments: R,
                        sonataState: M,
                        settings: { isMobile: U },
                        track: { isTrackPage: w },
                    } = (0, v.Pjs)(),
                    { from: K, utmLink: V } = (0, v.fyy)({
                        pageId: v._Q$.ALBUM,
                        blockId: v.UfI.ALBUM,
                        contextType: T.K.Album,
                        contextId: A.id,
                    }),
                    { formatMessage: F } = (0, C.A)(),
                    [X, z] = (0, s.useState)(!1),
                    Q = (0, L.c)({ album: A }),
                    Y = w ? "div" : "h2",
                    Z = A.items.length || E.k,
                    { isCPAEnabled: $ } = (0, v.IQF)(),
                    H = !$ || ($ && !j.cpa),
                    G =
                        R.checkExperiment(
                            v.zal.WebNextAlbumDonationButton,
                            "on",
                        ) && A.hasDonations,
                    ee = G && U,
                    { showBuySubscriptionModal: ea } = (0, v.qBP)(),
                    ei =
                        j.isPlusCPAPlayerBarEnabled(
                            A.id,
                            null == (e = A.meta) ? void 0 : e.isNonMusic,
                        ) && U;
                (0, s.useEffect)(
                    () => () => {
                        m.current = 0;
                    },
                    [A],
                ),
                    (0, s.useEffect)(() => {
                        ei && M.status === I.MT.ENDED && ea();
                    }, [M.status, ea, ei]),
                    (0, s.useEffect)(() => {
                        var e, t;
                        if (
                            (null == (e = A.otherArtistAlbums)
                                ? void 0
                                : e.isRejected) ||
                            (null == (t = A.latestGenreAlbums)
                                ? void 0
                                : t.isRejected)
                        ) {
                            if (!m || m.current > 0) return;
                            x(
                                (0, i.jsx)(g.hT, {
                                    error: F({
                                        id: "album-errors.error-during-loading-similar-albums",
                                    }),
                                }),
                                { containerId: v.uQT.ERROR },
                            ),
                                m.current++;
                        }
                    }, [
                        null == (t = A.latestGenreAlbums)
                            ? void 0
                            : t.isRejected,
                        null == (a = A.otherArtistAlbums)
                            ? void 0
                            : a.isRejected,
                        F,
                        x,
                    ]),
                    (0, s.useEffect)(() => {
                        A.isResolved && A.hasOtherAlbumVersions && z(!0);
                    }, [A.hasOtherAlbumVersions, A.isResolved]);
                let el = (0, s.useCallback)(() => {
                        let e = c.current;
                        null == e || e.scrollIntoView({ behavior: "smooth" });
                    }, []),
                    en = (0, r.L)(() => {
                        var e, t, a, l, n;
                        if (
                            !G ||
                            !(null == (e = A.donations) ? void 0 : e.items)
                        )
                            return;
                        if (
                            Number(
                                null == (a = A.meta) || null == (t = a.artists)
                                    ? void 0
                                    : t.length,
                            ) > 1
                        )
                            return (0, i.jsx)(v.FoH, {
                                blockType: k.LA.Donations,
                                blockId: v.UfI.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, i.jsx)(v.Bki, {
                                    mainObjectId: String(
                                        null == (n = A.meta) ? void 0 : n.id,
                                    ),
                                    mainObjectType: k.ky.Album,
                                    children: (0, i.jsx)(W, {}),
                                }),
                            });
                        let [s] = A.donations.items;
                        if (s)
                            return (0, i.jsx)(v.FoH, {
                                blockType: k.LA.Donations,
                                blockId: v.UfI.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, i.jsx)(v.Bki, {
                                    objectType: k.ky.Donation,
                                    objectId: s.artist.id,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: 1,
                                    mainObjectId: String(
                                        null == (l = A.meta) ? void 0 : l.id,
                                    ),
                                    mainObjectType: k.ky.Album,
                                    children: (0, i.jsx)(B, { url: h(s.url) }),
                                }),
                            });
                    }),
                    es = (0, s.useMemo)(
                        () =>
                            A.isLoading || !A.meta || A.isRejected
                                ? (0, i.jsx)(N.c6, {
                                      className: f().header,
                                      isActive: !0,
                                  })
                                : (0, i.jsx)(N.c0, {
                                      album: A.meta,
                                      donationButton: en,
                                      className: f().header,
                                      onVersionClick: X ? el : void 0,
                                  }),
                        [en, A.isLoading, A.isRejected, A.meta, el, X],
                    ),
                    eo = (0, S.j)({
                        element: (e, t) => {
                            var a;
                            if (e.data && e.type !== b.rU.TEXT)
                                return (0, i.jsx)(O.FR, {
                                    withLightning:
                                        e.isBest && !e.data.isRemoved,
                                    track: e.data,
                                    position: e.position,
                                    albumArtists:
                                        null == A || null == (a = A.meta)
                                            ? void 0
                                            : a.artists,
                                    playContextParams: p(t, {
                                        contextData: {
                                            type: T.K.Album,
                                            meta: A.contextMeta,
                                            from: K,
                                            utmLink: V,
                                        },
                                        queueParams: {
                                            index: e.positionInContext,
                                            entityId: e.data.id,
                                        },
                                        loadContextMeta: !0,
                                        entitiesData:
                                            M.unloadedEntitiesDataFromModels,
                                    }),
                                });
                        },
                        album: A,
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        es,
                        (0, i.jsx)(J.F, {
                            count: Z,
                            itemContentCallback: eo,
                            getDataByRange: Q,
                            ariaLabel: F(
                                { id: "entity-names.albums-tracks-list" },
                                {
                                    albumName:
                                        (null == (l = A.meta)
                                            ? void 0
                                            : l.title) || "",
                                },
                            ),
                        }),
                        (0, i.jsxs)("div", {
                            className: f().footerContainer,
                            children: [
                                A.shouldShowLabel &&
                                    (0, i.jsx)(q, {
                                        album: A,
                                        size: "s",
                                        weight: "normal",
                                        className: et().label,
                                    }),
                                (0, i.jsxs)("div", {
                                    className: et().carouselBlocks,
                                    children: [
                                        ee &&
                                            (null == (n = A.donations)
                                                ? void 0
                                                : n.items) &&
                                            (0, i.jsx)(v.FoH, {
                                                blockType: k.LA.Donations,
                                                blockId: v.UfI.DONATY,
                                                blockPosX: 1,
                                                blockPosY: 2,
                                                children: (0, i.jsx)(D, {
                                                    headingVariant: Y,
                                                    className:
                                                        et().carouselContainer,
                                                    headerClassName: (0, _.$)(
                                                        et().carouselBlock,
                                                        et()
                                                            .carouselBlockHeader,
                                                    ),
                                                    containerClassName:
                                                        et().carouselBlock,
                                                }),
                                            }),
                                        A.hasOtherAlbumVersions &&
                                            (0, i.jsx)(y.pZ, {
                                                isShimmerVisible: A.isLoading,
                                                isShimmerActive: !0,
                                                className:
                                                    et().carouselContainer,
                                                headerClassName: (0, _.$)(
                                                    et().carouselBlock,
                                                    et().carouselBlockHeader,
                                                ),
                                                containerClassName:
                                                    et().carouselBlock,
                                                title: F({
                                                    id: "entity-names.other-album-versions",
                                                }),
                                                albums: A.otherAlbumVersions,
                                                headingRef: c,
                                                headingVariant: Y,
                                                ...(0, o.Am)(
                                                    o.Xk.album
                                                        .OTHER_VERSIONS_CAROUSEL,
                                                ),
                                            }),
                                        A.hasLatestGenreAlbums &&
                                            H &&
                                            (0, i.jsx)(y.pZ, {
                                                isShimmerVisible:
                                                    A.isLatestGenreAlbumsLoading,
                                                isShimmerActive: !0,
                                                className:
                                                    et().carouselContainer,
                                                headerClassName: (0, _.$)(
                                                    et().carouselBlock,
                                                    et().carouselBlockHeader,
                                                ),
                                                containerClassName:
                                                    et().carouselBlock,
                                                title: F({
                                                    id: "entity-names.new-albums-in-genre",
                                                }),
                                                albums:
                                                    null ==
                                                    (d = A.latestGenreAlbums)
                                                        ? void 0
                                                        : d.items,
                                                headingVariant: Y,
                                                ...(0, o.Am)(
                                                    o.Xk.album
                                                        .GENRE_ALBUMS_CAROUSEL,
                                                ),
                                            }),
                                        A.hasOtherArtistAlbums &&
                                            (0, i.jsx)(y.pZ, {
                                                isShimmerVisible:
                                                    A.isOtherArtistAlbumsLoading,
                                                isShimmerActive: !0,
                                                className:
                                                    et().carouselContainer,
                                                headerClassName: (0, _.$)(
                                                    et().carouselBlock,
                                                    et().carouselBlockHeader,
                                                ),
                                                containerClassName:
                                                    et().carouselBlock,
                                                title: F({
                                                    id: "entity-names.other-albums-of-artist",
                                                }),
                                                albums:
                                                    null ==
                                                    (u = A.otherArtistAlbums)
                                                        ? void 0
                                                        : u.items,
                                                headingVariant: Y,
                                                ...(0, o.Am)(
                                                    o.Xk.album
                                                        .OTHER_ARTIST_ALBUMS_CAROUSEL,
                                                ),
                                            }),
                                    ],
                                }),
                                (0, i.jsx)(g.A, {
                                    children: (0, i.jsx)(g.wi, {
                                        className: f().footer,
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var ei = a(96560),
                el = a(30293),
                en = a(44189),
                es = a(21741),
                eo = a(12853),
                er = a(10055),
                ed = a(93280),
                eu = a.n(ed);
            let ec = (0, l.PA)(() => {
                    var e, t, a, l, o, d, u, c, m;
                    let p = (0, s.useRef)(0),
                        x = (0, s.useRef)(null),
                        h = (0, v.wZZ)(),
                        {
                            album: A,
                            experiments: j,
                            sonataState: _,
                            settings: { isMobile: k },
                            slides: I,
                        } = (0, v.Pjs)(),
                        y = (null == (e = A.meta) ? void 0 : e.isAudiobook)
                            ? v._Q$.AUDIOBOOK
                            : v._Q$.PODCAST,
                        P = (null == (t = A.meta) ? void 0 : t.isAudiobook)
                            ? v.UfI.AUDIOBOOK
                            : v.UfI.PODCAST,
                        { from: R, utmLink: B } = (0, v.fyy)({
                            pageId: y,
                            blockId: P,
                            contextType: T.K.Album,
                            contextId: A.id,
                        }),
                        { href: M } = (0, v.uvd)(
                            "/rewind2024/podcast/:podcastId",
                            {
                                params: {
                                    podcastId: null != (m = A.id) ? m : "",
                                },
                            },
                        ),
                        U = (0, v.ZpR)(M),
                        D = (0, s.useId)(),
                        { formatMessage: w } = (0, C.A)(),
                        K = (0, n.useSearchParams)(),
                        V = (0, v.XJ9)(),
                        F =
                            j.checkExperiment(v.zal.WebNextRewind2024, "on") &&
                            (null == (a = A.meta) ? void 0 : a.isPodcast),
                        X = (0, s.useMemo)(() => {
                            let e = K.get(v.K3F.ACTIVE_TAB),
                                t = E.n.findIndex((t) => t === e);
                            return t >= 0 ? t : null;
                        }, [K]),
                        z = (0, es.useTabsState)(null != X ? X : 0),
                        [Q, Y] = (0, s.useState)(E.n[z.value]),
                        $ = (0, L.c)({ album: A });
                    (0, s.useEffect)(
                        () => () => {
                            (p.current = 0), I.resetPodcast();
                        },
                        [A, I],
                    );
                    let H = (0, s.useMemo)(() => {
                            var e;
                            return F &&
                                I.podcastSlidesLoadingState === v.GuX.RESOLVE &&
                                (null == (e = I.podcastItems)
                                    ? void 0
                                    : e.length)
                                ? (0, i.jsx)(en.Button, {
                                      className: eu().rewindControl,
                                      withRipple: !k,
                                      withHover: !1,
                                      radius: "xxxl",
                                      size: "s",
                                      color: "primary",
                                      onClick: U,
                                      variant: "default",
                                      role: "link",
                                      children: (0, i.jsx)(ei.A, {
                                          id: "rewind.button-title",
                                      }),
                                  })
                                : null;
                        }, [
                            k,
                            F,
                            U,
                            null == (l = I.podcastItems) ? void 0 : l.length,
                            I.podcastSlidesLoadingState,
                        ]),
                        G = (0, s.useMemo)(() => {
                            var e, t;
                            return (
                                null == (e = A.meta) ? void 0 : e.isFairyTale
                            )
                                ? {
                                      about: w({
                                          id: "non-music.fairytale-tab-about",
                                      }),
                                      "track-list": w({
                                          id: "non-music.audiobook-tab-tracks",
                                      }),
                                  }
                                : (
                                        null == (t = A.meta)
                                            ? void 0
                                            : t.isAudiobook
                                    )
                                  ? {
                                        about: w({
                                            id: "non-music.audiobook-tab-about",
                                        }),
                                        "track-list": w({
                                            id: "non-music.audiobook-tab-tracks",
                                        }),
                                    }
                                  : {
                                        about: w({ id: "podcast.tab-about" }),
                                        "track-list": w(
                                            { id: "podcast.tab-tracks" },
                                            { value: A.tracks.length },
                                        ),
                                    };
                        }, [
                            null == (o = A.meta) ? void 0 : o.isAudiobook,
                            null == (d = A.meta) ? void 0 : d.isFairyTale,
                            A.tracks.length,
                            w,
                        ]),
                        W = (0, s.useMemo)(
                            () => (e) => {
                                var t;
                                if (!z.onTabChange || e === z.value) return;
                                z.onTabChange(e);
                                let a = null != (t = E.n[e]) ? t : er.O.ABOUT;
                                Y(a);
                                let i = (0, v.bJ)(v.K3F.ACTIVE_TAB, a);
                                i && V(i);
                            },
                            [z, V],
                        ),
                        ee = (e, t) =>
                            (0, i.jsxs)("div", {
                                className: eu().infoBlock,
                                children: [
                                    (0, i.jsx)(Z.Caption, {
                                        variant: "span",
                                        type: "entity",
                                        size: "m",
                                        className: eu().infoTitle,
                                        children: e,
                                    }),
                                    (0, i.jsx)(Z.Caption, {
                                        variant: "span",
                                        type: "entity",
                                        size: "m",
                                        children: t,
                                    }),
                                ],
                            }),
                        et = ((e) => {
                            let { formatMessage: t } = (0, C.A)(),
                                { minutes: a, hours: i } = (0, v.VEg)(e),
                                l = "";
                            return (
                                i > 0 &&
                                    (l += t(
                                        { id: "time.hours" },
                                        { hours: i },
                                    )),
                                a > 0 &&
                                    ((l += l.length > 0 ? " " : ""),
                                    (l += t(
                                        { id: "time.minutes-left" },
                                        { minutes: a },
                                    ))),
                                l
                            );
                        })(
                            (null == (u = A.meta) ? void 0 : u.durationSec) ||
                                0,
                        ),
                        ea = (0, s.useMemo)(() => {
                            var e, t, a, l, n, s, o, r, d, u, c, m, b, p, v;
                            let g =
                                    Number(
                                        null == (e = A.labels)
                                            ? void 0
                                            : e.length,
                                    ) > 1
                                        ? w({ id: "podcast.publishers-title" })
                                        : w({ id: "podcast.publisher-title" }),
                                x =
                                    null == (t = A.labels)
                                        ? void 0
                                        : t.map((e) => e.name).join(", "),
                                h = w({ id: "podcast.age-limit" }),
                                j =
                                    Number(
                                        null == (l = A.meta) ||
                                            null == (a = l.artists)
                                            ? void 0
                                            : a.length,
                                    ) > 1
                                        ? w({
                                              id: "non-music.audiobook-artists",
                                          })
                                        : w({
                                              id: "non-music.audiobook-artist",
                                          }),
                                _ =
                                    null == (s = A.meta) ||
                                    null == (n = s.artists)
                                        ? void 0
                                        : n.map((e) => e.name).join(", "),
                                C =
                                    (null == (r = A.meta) ||
                                    null == (o = r.artists)
                                        ? void 0
                                        : o.length) ||
                                    (null == (d = A.meta)
                                        ? void 0
                                        : d.durationSec) ||
                                    (null == (u = A.labels)
                                        ? void 0
                                        : u.length) ||
                                    A.isExplicit,
                                k = _ && ee("".concat(j, ":"), String(_)),
                                T =
                                    (null == (c = A.meta)
                                        ? void 0
                                        : c.durationSec) &&
                                    ee(
                                        "".concat(
                                            w({ id: "time.duration" }),
                                            ":",
                                        ),
                                        et,
                                    ),
                                I = x && ee("".concat(g, ":"), String(x)),
                                N = ee("".concat(h, ":"), "18+"),
                                y = A.shouldShowLabel
                                    ? (0, i.jsx)(q, {
                                          album: A,
                                          size: "m",
                                          weight: "medium",
                                          className: eu().label,
                                      })
                                    : I;
                            return (0, i.jsx)(es.TabPanel, {
                                name: 0,
                                value: z.value,
                                elementId: D,
                                children: (0, i.jsxs)("div", {
                                    className: eu().contentAbout,
                                    children: [
                                        A.description &&
                                            !!(null == (m = A.description)
                                                ? void 0
                                                : m.length) &&
                                            (0, i.jsx)(Z.Caption, {
                                                variant: "div",
                                                type: "entity",
                                                size: "m",
                                                className: f().text,
                                                children: (0, i.jsx)("span", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: (0,
                                                        el.sanitizeDOM)(
                                                            A.description,
                                                        ),
                                                    },
                                                }),
                                            }),
                                        C &&
                                            (0, i.jsxs)("div", {
                                                className: f().text,
                                                children: [
                                                    !!(null == (p = A.meta) ||
                                                    null == (b = p.artists)
                                                        ? void 0
                                                        : b.length) && k,
                                                    (null == (v = A.meta)
                                                        ? void 0
                                                        : v.durationSec) && T,
                                                    y,
                                                    A.isExplicit && N,
                                                ],
                                            }),
                                    ],
                                }),
                            });
                        }, [A, w, et, z.value, D]),
                        ed = (0, r.L)(() =>
                            A.isLoading || !A.meta || A.isRejected
                                ? (0, i.jsx)(N.c6, {
                                      className: f().header,
                                      isActive: !0,
                                  })
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(N.hW, {
                                              album: A.meta,
                                              actionButton: H,
                                              className: f().header,
                                          }),
                                          (0, i.jsx)(g.wI, {
                                              className: eu().tabCarousel,
                                              ...z,
                                              onTabChange: W,
                                              ref: x,
                                              children: E.n.map((e, t) =>
                                                  (0, i.jsx)(
                                                      g.oz,
                                                      {
                                                          className: eu().tab,
                                                          title: G[e],
                                                          value: t,
                                                      },
                                                      e,
                                                  ),
                                              ),
                                          }),
                                          ea,
                                      ],
                                  }),
                        );
                    (0, s.useEffect)(() => {
                        A.isResolved &&
                            (A.loadLastEpisodes(), A.getRelatedContent());
                    }, [
                        A,
                        A.isResolved,
                        A.loadLastEpisodes,
                        A.getRelatedContent,
                    ]);
                    let ec =
                            Q === er.O.ABOUT &&
                            (null == (c = A.meta) ? void 0 : c.isPodcast) &&
                            A.lastEpisodes.length > 0,
                        em =
                            Q === er.O.ABOUT &&
                            A.relatedContent &&
                            A.relatedContent.items &&
                            A.relatedContent.items.length > 0,
                        eb = (0, S.j)({
                            element: (e, t) => {
                                if (e.data && e.type !== b.rU.TEXT)
                                    return (0, i.jsx)(O.Kd, {
                                        track: e.data,
                                        viewType: O.Df.ALBUM,
                                        position: e.position,
                                        playContextParams: h(t, {
                                            contextData: {
                                                type: T.K.Album,
                                                meta: A.contextMeta,
                                                from: R,
                                                utmLink: B,
                                            },
                                            queueParams: {
                                                index: e.positionInContext,
                                                entityId: e.data.id,
                                            },
                                            loadContextMeta: !0,
                                            entitiesData:
                                                _.unloadedEntitiesDataFromModels,
                                        }),
                                    });
                            },
                            isNonMusic: !0,
                            album: A,
                        }),
                        ep = Q === er.O.ABOUT ? 0 : A.items.length || E.k,
                        ev = (0, r.L)(() => {
                            if (Q === er.O.TRACKS) {
                                var e, t, a;
                                return (
                                    null == (e = A.meta)
                                        ? void 0
                                        : e.isAudiobook
                                )
                                    ? w(
                                          { id: "non-music.audiobook-list" },
                                          {
                                              albumName:
                                                  (null == (a = A.meta)
                                                      ? void 0
                                                      : a.title) || "",
                                          },
                                      )
                                    : w(
                                          { id: "podcast.episodes-list" },
                                          {
                                              albumName:
                                                  (null == (t = A.meta)
                                                      ? void 0
                                                      : t.title) || "",
                                          },
                                      );
                            }
                        }),
                        eg = (0, r.L)(() =>
                            Q === er.O.ABOUT
                                ? null
                                : (0, i.jsx)(J.F, {
                                      count: ep,
                                      getDataByRange: $,
                                      itemContentCallback: eb,
                                      role: "tabpanel",
                                      ariaLabel: ev,
                                  }),
                        ),
                        ex = F && I.podcastSlidesLoadingState === v.GuX.IDLE;
                    return (
                        "number" == typeof A.id &&
                            ex &&
                            (0, s.use)(I.getPodcastSlides({ podcastId: A.id })),
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                ed,
                                eg,
                                (0, i.jsxs)("div", {
                                    className: f().footerContainer,
                                    children: [
                                        ec &&
                                            (0, i.jsx)(eo.ro, {
                                                className: eu().lastEpisodes,
                                            }),
                                        em &&
                                            (0, i.jsx)(eo.ZM, {
                                                isShimmerVisible:
                                                    A.isRelatedContentLoading,
                                                isShimmerActive: !0,
                                            }),
                                        (0, i.jsx)(g.A, {
                                            children: (0, i.jsx)(g.wi, {
                                                className: f().footer,
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                em = (0, l.PA)((e) => {
                    var t, a, l, j, _, C;
                    let {
                            albumId: k,
                            trackId: T,
                            preloadedAlbum: I,
                            preloadedCpa: N,
                        } = e,
                        { contentScrollRef: y, setContentScrollRef: P } = (0,
                        v.gKY)(),
                        O = (0, n.useSearchParams)(),
                        {
                            album: E,
                            disclaimer: L,
                            track: S,
                            sonataState: R,
                            albumCPA: B,
                        } = (0, v.Pjs)(),
                        {
                            checkIsValidClid: M,
                            setClidToQuery: U,
                            deleteClidFromQuery: D,
                        } = (0, v.IQF)(),
                        w = (0, v.ytd)(
                            null == (t = E.meta) ? void 0 : t.averageColor,
                        ),
                        { headerStyle: K } = (0, m.QZ)(w),
                        { deprecationUrl: V, shouldRedirect: F } = (0, x.W)({
                            albumId: k,
                            deprecationTargetAlbumId:
                                E.deprecationTargetAlbumId,
                            trackId: T,
                            realId:
                                (null == (a = S.meta) ? void 0 : a.id) === T
                                    ? null == (l = S.meta)
                                        ? void 0
                                        : l.realId
                                    : void 0,
                            searchParams: O,
                        }),
                        X = (0, b.cp)({ album: E.meta, shouldHistoryBack: !0 }),
                        z = !!(null == (j = E.meta) ? void 0 : j.isNonMusic);
                    (0, v.ACS)(),
                        ((e) => {
                            var t;
                            let { albumId: a, trackId: i, isNonMusic: l } = e,
                                { setDeeplink: n } =
                                    null != (t = (0, v.P7Q)()) ? t : {};
                            (0, s.useEffect)(() => {
                                if (i) {
                                    let e = l
                                            ? void 0
                                            : {
                                                  playTrack: i,
                                                  openPlayer: !0,
                                                  lyricsMode: !0,
                                              },
                                        { href: t } = (0, v.uvd)(
                                            "/album/:albumId/track/:trackId",
                                            {
                                                params: {
                                                    albumId: a,
                                                    trackId: i,
                                                },
                                                query: e,
                                            },
                                        );
                                    null == n || n(t);
                                } else {
                                    let { href: e } = (0, v.uvd)(
                                        "/album/:albumId",
                                        { params: { albumId: a } },
                                    );
                                    null == n || n(e);
                                }
                                return () => {
                                    null == n || n(null);
                                };
                            }, [a, l, n, i]);
                        })({ albumId: k, trackId: T, isNonMusic: z }),
                        (0, s.useEffect)(() => {
                            var e;
                            (null == (e = E.meta) ? void 0 : e.isUnsafeLegal) &&
                                X();
                        }, [
                            null == (_ = E.meta) ? void 0 : _.isUnsafeLegal,
                            X,
                        ]),
                        (0, s.useLayoutEffect)(
                            () => (
                                T &&
                                    k &&
                                    S.open({ trackId: T, albumId: Number(k) }),
                                () => {
                                    S.reset();
                                }
                            ),
                            [k, T, S],
                        ),
                        (0, s.useEffect)(() => {
                            M(B.cpa, Number(k)) || D();
                        }, [M, k, B.cpa, D]),
                        (0, s.useEffect)(
                            () => (
                                E.id && E.id !== Number(k) && (E.reset(R), D()),
                                () => {
                                    E.reset(R), D();
                                }
                            ),
                            [E, k, R, D, B],
                        ),
                        (0, v.Jzs)(E.isResolved),
                        (0, h.h)(E, S.isOpened, T);
                    let Q = (0, r.L)(() =>
                        z ? (0, i.jsx)(ec, {}) : (0, i.jsx)(ea, {}),
                    );
                    if (k && E.isNeededToLoad) {
                        let e = Promise.allSettled([
                            E.getData({
                                albumId: Number(k),
                                resumeStream: !1,
                                preloadedAlbum: I,
                                sonataState: R,
                            }),
                            E.getDonations({ albumId: Number(k) }),
                            B.getCpa({ albumId: Number(k), preloadedCpa: N }),
                        ]);
                        (0, s.use)(e);
                    }
                    return ((0, s.useEffect)(() => {
                        B.cpa && E.id && U(B.cpa, E.id);
                    }, [B.cpa, E.id, U]),
                    E.isNotFound && (0, n.notFound)(),
                    F && (0, n.redirect)(V),
                    (0, A.Y)({ album: E }),
                    E.isCacheNotFound)
                        ? (0, i.jsx)(u.m, {})
                        : (null == (C = E.meta) ? void 0 : C.isLegalRejected)
                          ? L.isRejected
                              ? (0, i.jsx)(c.w, {})
                              : (0, i.jsx)(p.MW, { disclaimer: L })
                          : (0, i.jsx)(v.pVJ, {
                                pageAlbumId: Number(k),
                                children: (0, i.jsx)(v.jPc, {
                                    children: (0, i.jsxs)(m.hO, {
                                        scrollElement: y,
                                        children: [
                                            (0, i.jsx)(g.Y9, {}),
                                            (0, i.jsxs)(d.C, {
                                                scrollableContainerRef: P,
                                                className: f().root,
                                                containerClassName: f().content,
                                                scrollContentClassName:
                                                    f().scrollContent,
                                                ...(0, o.Am)(
                                                    z
                                                        ? o.Xk.album
                                                              .NON_MUSIC_ALBUM_PAGE
                                                        : o.Xk.album.ALBUM_PAGE,
                                                ),
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className:
                                                            f()
                                                                .averageColorBackground,
                                                        style: K,
                                                    }),
                                                    Q,
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            });
                }),
                eb = (0, l.PA)((e) =>
                    (0, i.jsx)(v.nVz, {
                        pageId: v._Q$.ALBUM,
                        pageEntityId: e.albumId,
                        children: (0, i.jsx)(em, { ...e }),
                    }),
                );
        },
        85738: (e) => {
            e.exports = {
                root: "LastEpisodes_root__4JPKj",
                blockHeader: "LastEpisodes_blockHeader__se7bd",
                shimmerItem: "LastEpisodes_shimmerItem__Iirx5",
            };
        },
        86916: (e, t, a) => {
            "use strict";
            a.d(t, { W: () => l });
            var i = a(79169);
            let l = (e) => {
                let {
                        albumId: t,
                        deprecationTargetAlbumId: a,
                        trackId: l,
                        realId: n,
                        searchParams: s,
                    } = e,
                    o = Number(t),
                    r = new URLSearchParams(s);
                r.delete("albumId"), r.delete("trackId");
                let d = Object.fromEntries(r);
                if ("number" == typeof a && a !== o) {
                    if (l) {
                        let { href: e } = (0, i.uvd)(
                            "/album/:albumId/track/:trackId",
                            { params: { albumId: a, trackId: l }, query: d },
                        );
                        return { deprecationUrl: e, shouldRedirect: !0 };
                    }
                    let { href: e } = (0, i.uvd)("/album/:albumId", {
                        params: { albumId: a },
                        query: d,
                    });
                    return { deprecationUrl: e, shouldRedirect: !0 };
                }
                if (l && n && n !== l) {
                    let { href: e } = (0, i.uvd)(
                        "/album/:albumId/track/:trackId",
                        { params: { albumId: t, trackId: n }, query: d },
                    );
                    return { deprecationUrl: e, shouldRedirect: !0 };
                }
                return { deprecationUrl: "", shouldRedirect: !1 };
            };
        },
        88190: (e, t, a) => {
            "use strict";
            a.d(t, { i: () => d, m: () => h });
            var i = a(33008),
                l = a(78016),
                n = a(77868),
                s = a(18740),
                o = a(21184),
                r = a.n(o);
            let d = (e) => {
                let { message: t } = e;
                return (0, i.jsx)(s.$W, {
                    cover: (0, i.jsx)(l.Icon, {
                        variant: "unavailable",
                        size: "xs",
                        className: r().icon,
                    }),
                    message: (0, i.jsx)(n.Caption, {
                        className: r().message,
                        variant: "div",
                        type: "controls",
                        size: "m",
                        children: t,
                    }),
                    coverRadius: "s",
                });
            };
            var u = a(97531),
                c = a(66268),
                m = a(96560),
                b = a(42213),
                p = a(44189),
                v = a(79169),
                g = a(42547),
                x = a.n(g);
            let h = (0, u.PA)(() => {
                let { slam: e } = (0, v.Pjs)(),
                    t = (0, v.ZpR)(v.Zyd.mymusicDownloadsTracks.href),
                    a = (0, v.ZpR)(v.Zyd.settings.href),
                    s = (0, b.c)(() => {
                        window.location.href = v.Zyd.main.href;
                    }),
                    o = (0, c.useMemo)(
                        () =>
                            e.isOfflineModeEnabled
                                ? (0, i.jsx)(m.A, {
                                      id: "offline.offline-mode-enabled",
                                  })
                                : (0, i.jsx)(m.A, {
                                      id: "offline.no-internet-connection",
                                  }),
                        [e.isOfflineModeEnabled],
                    ),
                    r = (0, c.useMemo)(
                        () =>
                            e.isOfflineModeEnabled
                                ? (0, i.jsx)(p.Button, {
                                      onClick: a,
                                      className: x().button,
                                      color: "secondary",
                                      size: "l",
                                      radius: "xxxl",
                                      children: (0, i.jsx)(n.Caption, {
                                          type: "controls",
                                          variant: "span",
                                          size: "m",
                                          children: (0, i.jsx)(m.A, {
                                              id: "offline.disable-offline-mode",
                                          }),
                                      }),
                                  })
                                : (0, i.jsx)(p.Button, {
                                      onClick: s,
                                      className: x().button,
                                      color: "secondary",
                                      size: "l",
                                      radius: "xxxl",
                                      children: (0, i.jsx)(n.Caption, {
                                          type: "controls",
                                          variant: "span",
                                          size: "m",
                                          children: (0, i.jsx)(m.A, {
                                              id: "page-error.restart-app-button",
                                          }),
                                      }),
                                  }),
                        [s, a, e.isOfflineModeEnabled],
                    );
                return (0, i.jsx)("div", {
                    className: x().root,
                    children: (0, i.jsxs)("div", {
                        className: x().container,
                        children: [
                            (0, i.jsx)(l.Icon, {
                                className: x().icon,
                                variant: "offline",
                                size: "xxl",
                            }),
                            (0, i.jsx)(n.Heading, {
                                className: x().title,
                                variant: "div",
                                size: "xs",
                                children: o,
                            }),
                            (0, i.jsx)(n.Caption, {
                                className: x().text,
                                variant: "span",
                                type: "text",
                                size: "l",
                                weight: "normal",
                                children: (0, i.jsx)(m.A, {
                                    id: "offline.listen-downloaded-content",
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: x().buttons,
                                children: [
                                    r,
                                    (0, i.jsx)(p.Button, {
                                        color: "primary",
                                        onClick: t,
                                        role: "link",
                                        size: "l",
                                        radius: "xxxl",
                                        className: x().button,
                                        children: (0, i.jsx)(m.A, {
                                            id: "interface-actions.go-to-collection",
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        88434: (e, t, a) => {
            "use strict";
            a.d(t, { k: () => n, n: () => l });
            var i = a(10055);
            let l = [i.O.ABOUT, i.O.TRACKS],
                n = 10;
        },
        93280: (e) => {
            e.exports = {
                tabCarousel: "NonMusicContent_tabCarousel__EBHWC",
                tab: "NonMusicContent_tab__LIh_U",
                contentAbout: "NonMusicContent_contentAbout__BMIP5",
                infoBlock: "NonMusicContent_infoBlock__IyjXA",
                infoTitle: "NonMusicContent_infoTitle__Wf9EC",
                lastEpisodes: "NonMusicContent_lastEpisodes__Xa8Xp",
                rewindControl: "NonMusicContent_rewindControl__7tncY",
                label: "NonMusicContent_label__9GlIS",
            };
        },
        99683: (e, t, a) => {
            "use strict";
            a.d(t, { AlbumNotFoundPage: () => d });
            var i = a(33008),
                l = a(97531),
                n = a(66268),
                s = a(35233),
                o = a(79169);
            let r = (0, l.PA)(() => {
                    let { album: e, sonataState: t } = (0, o.Pjs)();
                    return (
                        (0, o.ACS)(),
                        (0, n.useEffect)(() => {
                            e.reset(t);
                        }, []),
                        (0, i.jsx)(s.M, {})
                    );
                }),
                d = (0, l.PA)(() =>
                    (0, i.jsx)(o.nVz, {
                        pageId: o._Q$.PAGE_NOT_FOUND_SCREEN,
                        children: (0, i.jsx)(r, {}),
                    }),
                );
        },
    },
]);
