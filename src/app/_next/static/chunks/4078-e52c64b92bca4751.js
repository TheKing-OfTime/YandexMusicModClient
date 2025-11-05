(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4078],
    {
        4214: (e, t, i) => {
            "use strict";
            i.d(t, { h: () => o });
            var a = i(33008),
                l = i(42213),
                r = i(25911),
                s = i(61744),
                n = i(79169);
            let o = () => {
                let { notify: e } = (0, n.lkh)(),
                    { playlist: t, fullscreenPlayer: i } = (0, n.Pjs)(),
                    o = (0, l.c)((l) => {
                        var o, c;
                        let {
                            withSuccessNotification: d,
                            withPageRefresh: u,
                            playlist: m,
                            track: k,
                        } = l;
                        if (d && k && m) {
                            let t = (0, s.eK)(k);
                            e(
                                (0, a.jsx)(r.mM, {
                                    entityTitle: k.title,
                                    entityVariant: t,
                                    entityCoverUri:
                                        null != (c = k.coverUri) ? c : "",
                                    playlist: m,
                                }),
                                {
                                    containerId: i.modal.isOpened
                                        ? n.uQT.FULLSCREEN_INFO
                                        : n.uQT.INFO,
                                },
                            );
                        }
                        u &&
                            (null == m ? void 0 : m.uuid) ===
                                (null == (o = t.meta) ? void 0 : o.uuid) &&
                            t.refresh();
                    }),
                    c = (0, l.c)((t) => {
                        let { withFailNotification: l } = t;
                        l &&
                            e((0, a.jsx)(r.HB, {}), {
                                containerId: i.modal.isOpened
                                    ? n.uQT.FULLSCREEN_ERROR
                                    : n.uQT.ERROR,
                            });
                    });
                return (0, l.c)(async (e) => {
                    let {
                            playlist: t,
                            track: i,
                            trackIndex: a,
                            withSuccessNotification: l = !0,
                            withFailNotification: s = !0,
                            withPageRefresh: n = !0,
                        } = e,
                        d = await t.changePlaylist(
                            (0, r.Mp)({
                                operation: r.yC.DELETE,
                                startPosition: a,
                                endPosition: a + 1,
                            }),
                        );
                    return (
                        d === r.Y9.OK
                            ? o({
                                  withSuccessNotification: l,
                                  withPageRefresh: n,
                                  playlist: t,
                                  track: i,
                              })
                            : c({ withFailNotification: s }),
                        d
                    );
                });
            };
        },
        5479: (e, t, i) => {
            "use strict";
            var a;
            i.d(t, { o: () => a }),
                (function (e) {
                    (e.TEXT = "TEXT"),
                        (e.LRC = "LRC"),
                        (e.RICH_JSON = "RICH_JSON");
                })(a || (a = {}));
        },
        6742: (e, t, i) => {
            "use strict";
            i.d(t, { TrackMeta: () => T });
            var a = i(33008),
                l = i(85896),
                r = i(97531),
                s = i(17846),
                n = i(66268),
                o = i(73827),
                c = i(96560),
                d = i(18064),
                u = i(31342),
                m = i(77868),
                k = i(70879),
                _ = i(79169),
                p = i(18740),
                v = i(39791),
                C = i(50970),
                x = i(93915),
                g = i(9138),
                y = i.n(g);
            let T = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: r,
                        albumArtists: g,
                        withExplicitMark: T = !0,
                        withSecondaryColor: h,
                        captionSize: A = "m",
                        explicitSize: b = "xxxs",
                        withAllArtistsTitle: j,
                        textClassName: I,
                        artistsClassName: N,
                        ignoreDislikedStyles: L,
                        withCustomTooltip: P = !0,
                        hasLineClamp: f = !0,
                        withSavingQueryParams: D,
                        beforeTitle: E,
                        withArtistLink: S = !0,
                        withTrackLink: R = !0,
                        afterTitle: M,
                        withContextMenuArtists: O,
                    } = e,
                    { formatMessage: w } = (0, o.A)(),
                    { sendNavigateSearchFeedback: K } = (0, _.zEv)(),
                    {
                        settings: { isMobile: B },
                    } = (0, _.Pjs)(),
                    U = (0, C.$)({ withCustomTooltip: P }),
                    G = (0, s.useSearchParams)(),
                    z = r.getUrl(D ? Object.fromEntries(G) : void 0),
                    X = (0, n.useMemo)(() => {
                        var e;
                        let t = w(
                            { id: "entity-names.track-name" },
                            { trackName: r.title },
                        );
                        return ""
                            .concat(t, " ")
                            .concat(null != (e = r.version) ? e : "");
                    }, [w, r.title, r.version]),
                    $ = (0, x.useOnTrackLinkClick)({
                        track: r,
                        onNavigate: K,
                        withSavingQueryParams: D,
                        entityType: _.nPY.TRACK,
                    }),
                    F = (0, n.useCallback)(
                        (e) => {
                            let t = ""
                                .concat(r.title, " ")
                                .concat(
                                    !r.isRemoved && r.version ? r.version : "",
                                );
                            return (0, a.jsx)(u.m_, {
                                enabled: U && !B,
                                offsetOptions: 4,
                                placement: "top",
                                text: t,
                                hoverSettings: _.VP$,
                                children: (0, a.jsx)(m.Caption, {
                                    className: (0, l.$)(y().text, y().title),
                                    type: "entity",
                                    size: A,
                                    weight: "medium",
                                    variant: "span",
                                    ...e,
                                    children: r.title,
                                }),
                            });
                        },
                        [B, U, A, r.isRemoved, r.title, r.version],
                    ),
                    Y = (0, n.useMemo)(() => {
                        let e = ""
                            .concat(r.title, " ")
                            .concat(!r.isRemoved && r.version ? r.version : "");
                        return r.isRemoved
                            ? (0, a.jsx)(u.m_, {
                                  enabled: U && !B,
                                  offsetOptions: 4,
                                  placement: "top",
                                  text: w({
                                      id: "track-title.error-not-found",
                                  }),
                                  hoverSettings: _.VP$,
                                  children: (0, a.jsx)(m.Caption, {
                                      className: (0, l.$)(y().text, y().title),
                                      type: "entity",
                                      size: A,
                                      weight: "medium",
                                      variant: "span",
                                      title: U
                                          ? void 0
                                          : w({
                                                id: "track-title.error-not-found",
                                            }),
                                      children: (0, a.jsx)(c.A, {
                                          id: "track-title.error-not-found",
                                      }),
                                  }),
                              })
                            : r.hasTrackLink && R
                              ? (0, a.jsx)(p.N_, {
                                    onClick: $,
                                    className: y().albumLink,
                                    href: z,
                                    "aria-label": X,
                                    title: U ? void 0 : e,
                                    ...(0, d.Am)(d.Kq.track.TRACK_TITLE),
                                    children: F(),
                                })
                              : F((0, d.Am)(d.Kq.track.TRACK_TITLE));
                    }, [
                        B,
                        r.title,
                        r.isRemoved,
                        r.version,
                        r.hasTrackLink,
                        F,
                        U,
                        w,
                        A,
                        X,
                        $,
                        z,
                        R,
                    ]),
                    q = (0, v.s)(r.artists, g),
                    V = (0, n.useMemo)(() => +!!f, [f]);
                return (0, a.jsx)("div", {
                    className: (0, l.$)(
                        y().root,
                        {
                            [y().root_disabled]: !r.isAvailable,
                            [y().root_disliked]: r.isDisliked && !L,
                            [y().root_withSecondaryColor]: h,
                        },
                        t,
                    ),
                    children: (0, a.jsxs)("div", {
                        className: y().metaContainer,
                        children: [
                            (0, a.jsxs)("div", {
                                className: (0, l.$)(
                                    y().titleContainer,
                                    {
                                        [y().titleContainer_withVersion]:
                                            r.version,
                                    },
                                    i,
                                ),
                                children: [
                                    (0, a.jsxs)(m.Caption, {
                                        className: (0, l.$)(y().text, I),
                                        type: "entity",
                                        size: A,
                                        weight: "medium",
                                        variant: "div",
                                        lineClamp: 1,
                                        children: [
                                            E,
                                            Y,
                                            !r.isRemoved &&
                                                r.version &&
                                                (0, a.jsxs)(m.Caption, {
                                                    className: (0, l.$)(
                                                        y().text,
                                                        y().version,
                                                    ),
                                                    type: "entity",
                                                    size: A,
                                                    weight: "medium",
                                                    variant: "span",
                                                    title: U
                                                        ? void 0
                                                        : r.version,
                                                    ...(0, d.Am)(
                                                        d.Kq.track
                                                            .TRACK_VERSION,
                                                    ),
                                                    children: [
                                                        "\xa0",
                                                        r.version,
                                                    ],
                                                }),
                                        ],
                                    }),
                                    r.explicitDisclaimer &&
                                        T &&
                                        (0, a.jsx)(p.Nq, {
                                            containerClassName:
                                                y().explicitMarkContainer,
                                            getDescriptionTexts:
                                                r.getDescriptionTexts,
                                            size: b,
                                            variant: r.explicitDisclaimer,
                                            className: y().explicitMark,
                                            trackId: r.id,
                                        }),
                                    M,
                                ],
                            }),
                            q.length > 0 &&
                                (0, a.jsx)(k.iQ, {
                                    className: (0, l.$)(
                                        y().text,
                                        { [y().artists]: f },
                                        N,
                                        I,
                                    ),
                                    withAllArtistsTitle: j,
                                    linkClassName: (0, l.$)(y().text, y().link),
                                    captionClassName: (0, l.$)(
                                        y().text,
                                        y().artistCaption,
                                    ),
                                    artists: q,
                                    withLink: r.isNonUserGenerated && S,
                                    lineClamp: V,
                                    captionSize: A,
                                    withContextMenu: O,
                                }),
                        ],
                    }),
                });
            });
        },
        9138: (e) => {
            e.exports = {
                card_root: "HorizontalCardContainer_root__YoAAP",
                artistCaption: "Meta_artistCaption__JESZi",
                link: "Meta_link__IFDBA",
                albumTitle: "Meta_albumTitle__mHeOs",
                root: "Meta_root__R8n1h",
                root_withSecondaryColor: "Meta_root_withSecondaryColor___uENY",
                root_disabled: "Meta_root_disabled__Dpx_M",
                albumLink: "Meta_albumLink__gASh6",
                artists: "Meta_artists__VnR52",
                explicitMark: "Meta_explicitMark__ocnCV",
                title: "Meta_title__GGBnH",
                titleContainer: "Meta_titleContainer__gDuXr",
                version: "Meta_version__c2sHU",
                root_disliked: "Meta_root_disliked__DrZ7_",
                text: "Meta_text__Y5uYH",
                explicitMarkContainer: "Meta_explicitMarkContainer__BxMQg",
                metaContainer: "Meta_metaContainer__7i2dp",
                titleContainer_withVersion:
                    "Meta_titleContainer_withVersion__n7MdY",
            };
        },
        12318: (e, t, i) => {
            "use strict";
            i.d(t, { Lyrics: () => d });
            var a = i(33008),
                l = i(73827),
                r = i(18064),
                s = i(77868),
                n = i(18740),
                o = i(47838),
                c = i.n(o);
            let d = (e) => {
                let {
                        lyrics: t,
                        authors: i,
                        source: o,
                        isShimmerVisible: d,
                        isShimmerActive: u,
                    } = e,
                    { formatMessage: m } = (0, l.A)();
                return d
                    ? (0, a.jsx)(n.q$, { count: 25, isActive: u })
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              t,
                              (0, a.jsxs)("div", {
                                  className: c().writers,
                                  children: [
                                      i.length > 0 &&
                                          (0, a.jsx)(s.Caption, {
                                              variant: "div",
                                              size: "l",
                                              weight: "medium",
                                              ...(0, r.Am)(
                                                  r.e8.content
                                                      .TRACK_LYRICS_AUTHORS,
                                              ),
                                              children: m(
                                                  {
                                                      id: "entity-names.authors",
                                                  },
                                                  { authors: i },
                                              ),
                                          }),
                                      o &&
                                          (0, a.jsx)(s.Caption, {
                                              variant: "div",
                                              size: "l",
                                              weight: "medium",
                                              ...(0, r.Am)(
                                                  r.e8.content
                                                      .TRACK_LYRICS_SOURCE,
                                              ),
                                              children: m(
                                                  { id: "entity-names.source" },
                                                  { source: o },
                                              ),
                                          }),
                                  ],
                              }),
                          ],
                      });
            };
        },
        12914: (e) => {
            e.exports = {
                shimmer: "ContextMenuPlaylistItemShimmer_shimmer__bQ2Yb",
            };
        },
        12963: (e, t, i) => {
            "use strict";
            i.d(t, { W: () => l });
            var a = i(73827);
            let l = (e) => {
                let { track: t, withLightning: i } = e,
                    { formatMessage: l } = (0, a.A)();
                return t.isAvailable
                    ? [
                          t.artistsNames,
                          t.title,
                          t.version,
                          i && l({ id: "entity-names.popular-among-users" }),
                      ]
                          .filter(Boolean)
                          .join(" ")
                    : ""
                          .concat(
                              l({ id: "extra-explicit.play-unavailable" }),
                              " ",
                          )
                          .concat(t.artistsNames, " ")
                          .concat(t.title);
            };
        },
        17292: (e) => {
            e.exports = {
                menu: "ContextSubMenuAddToPlaylist_menu__76MDp",
                listMenu: "ContextSubMenuAddToPlaylist_listMenu__e3qCt",
            };
        },
        18705: (e, t, i) => {
            "use strict";
            i.d(t, { TrackPlaylist: () => C });
            var a = i(33008),
                l = i(85896),
                r = i(97531),
                s = i(66268),
                n = i(18064),
                o = i(42213),
                c = i(79169),
                d = i(18740),
                u = i(53831),
                m = i(99430),
                k = i(6742),
                _ = i(94916),
                p = i(22215),
                v = i.n(p);
            let C = (0, r.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: r,
                        className: p,
                        withDNDBlock: C,
                        isDragging: x,
                        draggingClassName: g,
                        ignoreDislikedStyles: y,
                        withSecondaryColor: T,
                        activeFilter: h,
                        activeFilterIndex: A,
                        handleRemove: b,
                        withDislike: j,
                        withTrailer: I = !0,
                        beforeTitle: N,
                    } = e,
                    L = (0, c.Dx4)({
                        playContextParams: r,
                        entityId: i.entityId,
                    }),
                    {
                        settings: { isMobile: P },
                    } = (0, c.Pjs)(),
                    f = (0, c.Nap)({ objectId: i.id, tabId: h, tabPos: A }),
                    D = (0, o.c)((e) => {
                        e && f();
                    }),
                    E = (0, s.useCallback)(
                        (e) =>
                            (0, a.jsx)(d.q1, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: y,
                                radius: "xs",
                                ...e,
                            }),
                        [y, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, a.jsx)(_.Track, {
                    className: (0, l.$)(p, {
                        [v().trackWithDots]: C,
                        [v().important]: C,
                    }),
                    track: i,
                    beforeBlock: C
                        ? (0, a.jsx)(u.O, {
                              className: (0, l.$)(v().dots, g),
                              isDragging: x,
                          })
                        : void 0,
                    meta: (0, a.jsx)(k.TrackMeta, {
                        withArtistLink: !P,
                        beforeTitle: N,
                        track: i,
                        ignoreDislikedStyles: y,
                        withSecondaryColor: T,
                    }),
                    playButtonCellRender: E,
                    controls: (0, a.jsx)(m.ControlsBar, {
                        track: i,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: y,
                        utmLink:
                            null == (t = r.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: T,
                        handleRemove: b,
                        withDislike: j,
                        withTrailer: I,
                    }),
                    onPlayClick: D,
                    ...L,
                    ...(0, n.Am)(n.Kq.track.TRACK_PLAYLIST),
                });
            });
        },
        21118: (e, t, i) => {
            "use strict";
            i.d(t, { UgcTrackEditModal: () => u });
            var a = i(33008),
                l = i(97531),
                r = i(66268),
                s = i(73827),
                n = i(42213),
                o = i(79169),
                c = i(18740),
                d = (function (e) {
                    return (e.TITLE = "title"), (e.ARTIST = "artist"), e;
                })({});
            let u = (0, l.PA)(() => {
                let {
                        modals: { ugcTrackEditModal: e },
                        fullscreenPlayer: t,
                    } = (0, o.Pjs)(),
                    { notify: i } = (0, o.lkh)(),
                    { formatMessage: l } = (0, s.A)(),
                    u = (0, r.useMemo)(
                        () => [
                            {
                                key: d.TITLE,
                                title: l({ id: "track-modal.track-name" }),
                                value: e.trackTitle,
                                minLength: 1,
                                maxLength: 200,
                            },
                            {
                                key: d.ARTIST,
                                title: l({ id: "entity-names.singer" }),
                                value: e.trackArtist,
                                minLength: 0,
                                maxLength: 200,
                            },
                        ],
                        [l, e.trackArtist, e.trackTitle],
                    ),
                    m = (0, n.c)(async (r) => {
                        let { title: s, artist: n } = ((e) => {
                            var t, i;
                            let a =
                                    null ==
                                    (t = e.find((e) => e.key === d.TITLE))
                                        ? void 0
                                        : t.value,
                                l =
                                    null ==
                                    (i = e.find((e) => e.key === d.ARTIST))
                                        ? void 0
                                        : i.value;
                            return {
                                title: (a = a ? a.trim() : ""),
                                artist: (l = l ? l.trim() : ""),
                            };
                        })(r);
                        e.track &&
                            (await e.track.changeTrackInfo(s, n)) ===
                                o.FlZ.ERROR &&
                            i(
                                (0, a.jsx)(c.hT, {
                                    error: l({ id: "ugc.editing-failed" }),
                                }),
                                {
                                    containerId: t.modal.isOpened
                                        ? o.uQT.FULLSCREEN_ERROR
                                        : o.uQT.ERROR,
                                },
                            ),
                            e.close();
                    });
                return e.modal.isOpened
                    ? (0, a.jsx)(c.$, {
                          open: e.modal.isOpened,
                          title: l({ id: "entity-names.track" }),
                          content: u,
                          onClose: e.close,
                          onChange: m,
                      })
                    : null;
            });
        },
        21408: (e) => {
            e.exports = {
                root: "ContextMenuPlaylistItem_root__WU_1g",
                icon: "ContextMenuPlaylistItem_icon__U79vo",
            };
        },
        22215: (e) => {
            e.exports = {
                playButtonCell: "TrackPlaylist_playButtonCell__Q6YT_",
                controlsBarCell: "TrackPlaylist_controlsBarCell__6clda",
                dots: "TrackPlaylist_dots__nLYej",
                trackWithDots: "TrackPlaylist_trackWithDots__EU6LD",
                important: "TrackPlaylist_important__n8Tjb",
            };
        },
        22606: (e, t, i) => {
            "use strict";
            i.d(t, { TrailerTrackPlaylist: () => _ });
            var a = i(33008),
                l = i(97531),
                r = i(66268),
                s = i(18064),
                n = i(79169),
                o = i(18740),
                c = i(99430),
                d = i(6742),
                u = i(94916),
                m = i(22215),
                k = i.n(m);
            let _ = (0, l.PA)((e) => {
                let {
                        track: t,
                        playContextParams: i,
                        onPlayClick: l,
                        onLikeClick: m,
                        onDislikeClick: _,
                    } = e,
                    {
                        trailer: p,
                        settings: { isMobile: v },
                    } = (0, n.Pjs)(),
                    C = (0, n.Dx4)({
                        playContextParams: i,
                        entityId: t.entityId,
                        sonataState: p.state,
                        playbackId: n.V_r.TRAILER,
                    }),
                    x = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(o.q1, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: k().playButtonCell,
                                radius: "xs",
                                ...e,
                            }),
                        [t],
                    );
                return (0, a.jsx)(u.Track, {
                    track: t,
                    meta: (0, a.jsx)(d.TrackMeta, {
                        withArtistLink: !v,
                        track: t,
                    }),
                    playButtonCellRender: x,
                    onPlayClick: l,
                    controls: (0, a.jsx)(c.ControlsBar, {
                        track: t,
                        className: k().controlsBarCell,
                        onLikeClick: m,
                        onDislikeClick: _,
                    }),
                    ...C,
                    ...(0, s.Am)(s.Kq.track.TRACK_PLAYLIST),
                });
            });
        },
        24598: (e, t, i) => {
            "use strict";
            i.d(t, { PodcastMeta: () => N });
            var a = i(33008),
                l = i(85896),
                r = i(97531),
                s = i(17846),
                n = i(66268),
                o = i(73827),
                c = i(96560),
                d = i(2117),
                u = i(18064),
                m = i(42213),
                k = i(42314),
                _ = i(31342),
                p = i(77868),
                v = i(52931),
                C = i(61744),
                x = i(79169),
                g = i(18740),
                y = i(50970),
                T = i(93915),
                h = i(97790),
                A = i(9138),
                b = i.n(A),
                j = i(44368),
                I = i.n(j);
            let N = (0, r.PA)((e) => {
                var t, i, r, A, j, N, L, P;
                let {
                        track: f,
                        className: D,
                        withPodcastName: E = !1,
                        withDate: S = !0,
                        withSecondaryColor: R = !1,
                        withListeningProgress: M = !1,
                        captionSize: O = "m",
                        explicitSize: w = "xs",
                        withExplicitMark: K = !0,
                        titleContainerClassName: B,
                        textClassName: U,
                        playContextParams: G,
                        withTimeLeftText: z = !0,
                        ignoreDislikedStyles: X,
                        withCustomTooltip: $ = !0,
                        withSavingQueryParams: F,
                        beforeTitle: Y,
                        afterTitle: q,
                        titleLineClamp: V = 1,
                        podcastMetaClassName: H,
                        progressClassName: W,
                        withAlbumTitleLink: Q = !0,
                    } = e,
                    {
                        fullscreenPlayer: Z,
                        sonataState: J,
                        settings: { isMobile: ee },
                    } = (0, x.Pjs)(),
                    { formatMessage: et } = (0, o.A)(),
                    ei = (0, y.$)({ withCustomTooltip: $ }),
                    ea = (0, s.useSearchParams)(),
                    el = f.getUrl(F ? Object.fromEntries(ea) : void 0),
                    er = f.pubDate ? new Date(f.pubDate) : new Date(),
                    es = (0, x.LkW)(er),
                    en = !1,
                    eo = (0, x.ZpR)(
                        null != (P = null == (t = f.mainAlbum) ? void 0 : t.url)
                            ? P
                            : "",
                    ),
                    ec = (0, n.useMemo)(() => {
                        var e;
                        let t = et(
                            { id: "entity-names.podcast-name" },
                            { podcastName: f.title },
                        );
                        return ""
                            .concat(t, " ")
                            .concat(null != (e = f.version) ? e : "");
                    }, [et, f.title, f.version]),
                    ed = !!(
                        M &&
                        G &&
                        f.shouldRememberPosition &&
                        f.streamProgress &&
                        f.durationMs
                    ),
                    eu =
                        f.id === (null == (i = J.entityMeta) ? void 0 : i.id) &&
                        (null == (A = J.entityMeta) ||
                        null == (r = A.streamProgress)
                            ? void 0
                            : r.endPositionSec),
                    em = (0, h.d)(ed, f.streamProgress, eu),
                    ek = f.mainAlbum && E && !em,
                    e_ = f.pubDate && S && !em,
                    ep = (0, v.kR)({
                        entityType: x.nPY.PODCAST,
                        entityId: null == (j = f.mainAlbum) ? void 0 : j.id,
                        disclaimerId: f.modalDisclaimerId,
                        isLegalRejected: !!(null == (N = f.mainAlbum)
                            ? void 0
                            : N.isLegalRejected),
                        isUnsafeLegal: !!(null == (L = f.mainAlbum)
                            ? void 0
                            : L.isUnsafeLegal),
                        callback: eo,
                    }),
                    ev = (0, m.c)((e) => {
                        Z.modal.isOpened && Z.modal.close(), ep(e);
                    }),
                    eC = (0, T.useOnTrackLinkClick)({
                        track: f,
                        withSavingQueryParams: F,
                        entityType: x.nPY.PODCAST,
                    }),
                    ex = (0, n.useCallback)(() => {
                        switch (es) {
                            case x.rdQ.TODAY:
                                return (0, a.jsx)(c.A, {
                                    id: "interface-actions.date-today",
                                });
                            case x.rdQ.YESTERDAY:
                                return (0, a.jsx)(c.A, {
                                    id: "interface-actions.date-yesterday",
                                });
                            case x.rdQ.DATE_WITH_YEAR:
                                return (0, a.jsx)(d.XU, {
                                    value: f.pubDate,
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                });
                            default:
                                return (0, a.jsx)(d.XU, {
                                    value: f.pubDate,
                                    month: "long",
                                    day: "numeric",
                                });
                        }
                    }, [f.pubDate, es]);
                f.pubDate &&
                    S &&
                    (en = [x.rdQ.TODAY, x.rdQ.YESTERDAY].includes(es));
                let eg = (0, n.useCallback)(
                        (e) =>
                            (0, a.jsx)(_.m_, {
                                enabled: ei && !ee,
                                offsetOptions: 4,
                                placement: "top",
                                text: f.title,
                                hoverSettings: x.VP$,
                                children: (0, a.jsx)(p.Caption, {
                                    className: b().title,
                                    type: "entity",
                                    size: O,
                                    variant: "span",
                                    title: ei ? void 0 : f.title,
                                    ...e,
                                    children: f.title,
                                }),
                            }),
                        [ee, ei, O, f.title],
                    ),
                    ey = (0, n.useMemo)(
                        () =>
                            f.isRemoved
                                ? (0, a.jsx)(_.m_, {
                                      enabled: ei && !ee,
                                      offsetOptions: 4,
                                      placement: "top",
                                      text: et({
                                          id: "track-title.podcast-not-found",
                                      }),
                                      hoverSettings: x.VP$,
                                      children: (0, a.jsx)("span", {
                                          children: (0, a.jsx)(c.A, {
                                              id: "track-title.podcast-not-found",
                                          }),
                                      }),
                                  })
                                : f.hasTrackLink
                                  ? (0, a.jsx)(g.N_, {
                                        onClick: eC,
                                        className: b().albumLink,
                                        href: el,
                                        "aria-label": ec,
                                        title: ei ? void 0 : f.title,
                                        ...(0, u.Am)(u.Kq.track.TRACK_TITLE),
                                        children: eg(),
                                    })
                                  : eg((0, u.Am)(u.Kq.track.TRACK_TITLE)),
                        [
                            ee,
                            f.isRemoved,
                            f.hasTrackLink,
                            f.title,
                            eg,
                            ei,
                            et,
                            eC,
                            el,
                            ec,
                        ],
                    ),
                    eT = (0, k.L)(() => {
                        var e;
                        if (!ek) return;
                        let t = (0, a.jsx)(_.m_, {
                            enabled: ei && !ee,
                            offsetOptions: 4,
                            placement: "top",
                            text: f.mainAlbum.title,
                            hoverSettings: x.VP$,
                            children: (0, a.jsx)(p.Caption, {
                                variant: "span",
                                type: "entity",
                                size: O,
                                className: b().albumTitle,
                                children: f.mainAlbum.title,
                            }),
                        });
                        return Q
                            ? (0, a.jsx)(g.N_, {
                                  "aria-label": et(
                                      { id: "entity-names.podcast-name" },
                                      { podcastName: f.mainAlbum.title },
                                  ),
                                  className: b().link,
                                  href:
                                      null == (e = f.mainAlbum)
                                          ? void 0
                                          : e.url,
                                  title: ei ? void 0 : f.mainAlbum.title,
                                  onClick: ev,
                                  children: t,
                              })
                            : t;
                    });
                return (0, a.jsx)("div", {
                    className: (0, l.$)(
                        b().root,
                        {
                            [b().root_disabled]: !f.isAvailable,
                            [b().root_disliked]: f.isDisliked && !X,
                            [b().root_withSecondaryColor]: R,
                        },
                        D,
                    ),
                    children: (0, a.jsxs)("div", {
                        className: (0, l.$)(
                            b().metaContainer,
                            I().podcastMetaContainer,
                            H,
                        ),
                        children: [
                            ed &&
                                G &&
                                f.streamProgress &&
                                (0, a.jsx)(C.Bg, {
                                    className: (0, l.$)(I().progress, W, {
                                        [I().progress_withPreviousInfo]:
                                            ek || e_,
                                        [I().progress_disabled]:
                                            !f.isAvailable || f.isDisliked,
                                    }),
                                    id: f.id,
                                    albumId: f.albumId,
                                    streamProgress: f.streamProgress,
                                    durationMs: f.durationMs || 0,
                                    playContextParams: G,
                                    withTimeLeftText: z,
                                }),
                            (0, a.jsxs)("div", {
                                className: (0, l.$)(
                                    b().titleContainer,
                                    B,
                                    I().podcastTitleContainer,
                                ),
                                children: [
                                    (0, a.jsxs)(p.Caption, {
                                        className: (0, l.$)(b().text, U),
                                        type: "entity",
                                        size: O,
                                        variant: "div",
                                        lineClamp: V,
                                        children: [
                                            Y,
                                            ey,
                                            !f.isRemoved &&
                                                f.version &&
                                                (0, a.jsxs)(p.Caption, {
                                                    className: (0, l.$)(
                                                        b().text,
                                                        b().version,
                                                    ),
                                                    type: "entity",
                                                    size: O,
                                                    weight: "medium",
                                                    variant: "span",
                                                    title: ei
                                                        ? void 0
                                                        : f.version,
                                                    children: [
                                                        "\xa0",
                                                        f.version,
                                                    ],
                                                }),
                                        ],
                                    }),
                                    f.explicitDisclaimer &&
                                        K &&
                                        (0, a.jsx)(g.Nq, {
                                            containerClassName:
                                                b().explicitMarkContainer,
                                            getDescriptionTexts:
                                                f.getDescriptionTexts,
                                            variant: f.explicitDisclaimer,
                                            className: b().explicitMark,
                                            size: w,
                                            trackId: f.id,
                                        }),
                                    q,
                                ],
                            }),
                            (ek || e_) &&
                                (0, a.jsxs)(p.Caption, {
                                    type: "entity",
                                    size: O,
                                    variant: "div",
                                    lineClamp: 1,
                                    className: (0, l.$)(
                                        b().text,
                                        I().podcastName,
                                        U,
                                    ),
                                    children: [
                                        eT,
                                        e_ &&
                                            (0, a.jsx)(p.Caption, {
                                                variant: "span",
                                                type: "entity",
                                                size: O,
                                                className: (0, l.$)({
                                                    [I().dateWithName]: ek,
                                                    [I().soonDate]: en,
                                                    [I().dateDisabled]:
                                                        !f.isAvailable,
                                                    [I().dateDisliked]:
                                                        f.isDisliked && !X,
                                                }),
                                                children: ex(),
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
        },
        25809: (e, t, i) => {
            "use strict";
            i.d(t, { TrackPlaylistAddition: () => v });
            var a = i(33008),
                l = i(97531),
                r = i(66268),
                s = i(73827),
                n = i(18064),
                o = i(44189),
                c = i(78016),
                d = i(79169),
                u = i(18740),
                m = i(6742),
                k = i(94916),
                _ = i(31199),
                p = i.n(_);
            let v = (0, l.PA)((e) => {
                let {
                        className: t,
                        track: i,
                        playContextParams: l,
                        onClick: _,
                    } = e,
                    { formatMessage: v } = (0, s.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, d.Pjs)(),
                    x = (0, d.Dx4)({
                        playContextParams: l,
                        entityId: i.entityId,
                    }),
                    g = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(u.q1, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: p().playButtonCell,
                                radius: "xs",
                                ...e,
                            }),
                        [i],
                    ),
                    y = (0, r.useCallback)(
                        (e) => {
                            e.stopPropagation(), null == _ || _(i);
                        },
                        [i, _],
                    ),
                    T = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)("div", {
                                className: p().controls,
                                children: (0, a.jsx)(o.Button, {
                                    className: p().button,
                                    variant: "text",
                                    size: "xs",
                                    radius: "xxxl",
                                    "aria-label": v({
                                        id: "interface-actions.add-track-to-playlist",
                                    }),
                                    onClick: y,
                                    icon: (0, a.jsx)(c.Icon, {
                                        size: "xxs",
                                        variant: "add",
                                    }),
                                }),
                            }),
                        [v, y],
                    );
                return (0, a.jsx)(k.Track, {
                    className: t,
                    track: i,
                    meta: (0, a.jsx)(m.TrackMeta, {
                        withArtistLink: !C,
                        track: i,
                    }),
                    playButtonCellRender: g,
                    controls: T,
                    ...x,
                    ...(0, n.Am)(n.Kq.track.TRACK_PLAYLIST_ADDITION),
                });
            });
        },
        26976: (e) => {
            e.exports = {
                card_root: "HorizontalCardContainer_root__YoAAP",
                explicitMark: "AudiobookMeta_explicitMark__1rN7x",
                metaContainer: "AudiobookMeta_metaContainer__F7d9X",
                metaContainer_oneLine:
                    "AudiobookMeta_metaContainer_oneLine__D9CQh",
                titleContainer: "AudiobookMeta_titleContainer__GIY6Q",
                artists: "AudiobookMeta_artists__ScMoq",
                progress: "AudiobookMeta_progress__i3_kS",
                progress_disabled: "AudiobookMeta_progress_disabled__D_7E9",
                progress_withPreviousInfo:
                    "AudiobookMeta_progress_withPreviousInfo__97Hxr",
            };
        },
        28223: (e) => {
            e.exports = {
                playButtonCell: "TrackNonMusic_playButtonCell__HaJrc",
                controlsBarCell: "TrackNonMusic_controlsBarCell__zWt44",
                dots: "TrackNonMusic_dots__Wom40",
                trackWithDots: "TrackNonMusic_trackWithDots__v2VbZ",
                important: "TrackNonMusic_important__u29Uj",
            };
        },
        28539: (e, t, i) => {
            "use strict";
            i.d(t, { useSendEventOnClipNavigated: () => n });
            var a = i(93967),
                l = i(48551),
                r = i(42213),
                s = i(79169);
            let n = (e) => {
                let t = (0, l.st)(),
                    { hash: i } = (0, l.gf)(),
                    { pageId: n } = (0, s.$au)(),
                    {
                        tabId: o,
                        tabPos: c,
                        isTabSelectedByDefault: d,
                    } = (0, s.Rro)(),
                    { skeleton: u } = (0, s.bCF)(),
                    {
                        blockType: m,
                        blockId: k,
                        blockPosX: _,
                        blockPosY: p,
                        mainObjectType: v,
                        mainObjectId: C,
                    } = (0, s.N8n)(),
                    {
                        objectsCount: x,
                        objectType: g,
                        objectId: y,
                        objectPosX: T,
                        objectPosY: h,
                    } = (0, s.Jfv)(),
                    A = (0, s.UlF)();
                return (0, r.c)(() => {
                    if (!t || !n || !s.xKB.includes(n)) return;
                    let l = {
                        hash: i,
                        pageId: n,
                        entityType: m,
                        entityId: k,
                        entityPosX: _,
                        entityPosY: p,
                        objectId: y,
                        objectType: g,
                        objectPosX: T,
                        objectPosY: h,
                        objectsCount: x,
                        from: s.Wft[n],
                        to: a.QT.VideoScreen,
                    };
                    s.qG9.includes(n) &&
                        ((l.tabId = o),
                        (l.tabPos = c),
                        (l.isTabSelectedByDefault = d)),
                        u && (l.skeletonId = u),
                        v && (l.mainObjectType = v),
                        C && (l.mainObjectId = C);
                    let r = (0, a.Fx)({
                        params: l,
                        logger: A,
                        context: "useSendEventOnClipNavigated",
                    });
                    r && e && (0, a.QS)(t.evgenInstance, r);
                });
            };
        },
        29592: (e) => {
            e.exports = {
                card_root: "HorizontalCardContainer_root__YoAAP",
                root: "CommonControlsBar_root__N8b0F",
                root_withSecondaryColor:
                    "CommonControlsBar_root_withSecondaryColor__4Y1P_",
                item: "CommonControlsBar_item__qGErG",
                contextMenu: "CommonControlsBar_contextMenu__EAq_c",
                contextMenu_visible:
                    "CommonControlsBar_contextMenu_visible__M0ry0",
                contextMenuWrapper:
                    "CommonControlsBar_contextMenuWrapper__XjkaL",
                lightning: "CommonControlsBar_lightning__o7wrY",
                ugcIcon: "CommonControlsBar_ugcIcon__OV0Cl",
                lightning_withOffset:
                    "CommonControlsBar_lightning_withOffset__LGvUS",
                duration: "CommonControlsBar_duration__un38A",
                duration_hidden: "CommonControlsBar_duration_hidden__noQ4S",
                alwaysVisibleDuration:
                    "CommonControlsBar_alwaysVisibleDuration__3V6gl",
                controls: "CommonControlsBar_controls__QrogT",
                trailerIcon: "CommonControlsBar_trailerIcon__ZHSBo",
                removeButton: "CommonControlsBar_removeButton__35xHY",
                controls_disabled: "CommonControlsBar_controls_disabled__0RmLo",
                explicitMark: "CommonControlsBar_explicitMark__3I_Op",
                controls_dislikedControls:
                    "CommonControlsBar_controls_dislikedControls__mMjKC",
                likeIcon: "CommonControlsBar_likeIcon__YqgZY",
                controls_dislikedColors:
                    "CommonControlsBar_controls_dislikedColors__h5lev",
                downloadIcon: "CommonControlsBar_downloadIcon__2mM6m",
                popover: "CommonControlsBar_popover__6bmNd",
            };
        },
        31199: (e) => {
            e.exports = {
                playButtonCell: "TrackPlaylistAddition_playButtonCell__Ocnhq",
                controls: "TrackPlaylistAddition_controls__S346Y",
                button: "TrackPlaylistAddition_button__fsY9k",
            };
        },
        35391: (e, t, i) => {
            "use strict";
            i.d(t, { useSendEventOnClipShowedOrHidden: () => n });
            var a = i(93967),
                l = i(48551),
                r = i(42213),
                s = i(79169);
            let n = (e) => {
                let t = (0, l.st)(),
                    { hash: i } = (0, l.gf)(),
                    { pageId: n } = (0, s.$au)(),
                    {
                        tabId: o,
                        tabPos: c,
                        isTabSelectedByDefault: d,
                    } = (0, s.Rro)(),
                    {
                        blockType: u,
                        blockId: m,
                        blockPosX: k,
                        blockPosY: _,
                        mainObjectType: p,
                        mainObjectId: v,
                    } = (0, s.N8n)(),
                    {
                        objectsCount: C,
                        objectType: x,
                        objectId: g,
                        objectPosX: y,
                        objectPosY: T,
                    } = (0, s.Jfv)(),
                    h = (0, s.UlF)(),
                    { skeleton: A } = (0, s.bCF)();
                return (0, r.c)((l) => {
                    if (!t || !n || !s.xKB.includes(n)) return;
                    let r = {
                        hash: i,
                        pageId: n,
                        entityType: u,
                        entityId: m,
                        entityPosX: k,
                        entityPosY: _,
                        objectsCount: C,
                        viewUuid: e,
                        objectType: x,
                        objectId: g,
                        objectPosX: y,
                        objectPosY: T,
                    };
                    s.qG9.includes(n) &&
                        ((r.tabId = o),
                        (r.tabPos = c),
                        (r.isTabSelectedByDefault = d)),
                        A && (r.skeletonId = A),
                        p && (r.mainObjectType = p),
                        v && (r.mainObjectId = v);
                    let b = (0, a.Fx)({
                        params: r,
                        logger: h,
                        context: "useSendEventOnClipShowedOrHidden",
                    });
                    if (b) {
                        if (l) return void (0, a.Pf)(t.evgenInstance, b);
                        (0, a.nv)(t.evgenInstance, b);
                    }
                });
            };
        },
        36835: (e, t, i) => {
            "use strict";
            i.d(t, { G: () => m });
            var a = i(33008),
                l = i(85896),
                r = i(97531),
                s = i(97644),
                n = i(77868),
                o = i(79169),
                c = i(18740),
                d = i(56781),
                u = i.n(d);
            let m = (0, r.PA)((e) => {
                let {
                        className: t,
                        track: i,
                        position: r,
                        onPlayButtonClick: d,
                        isPlaying: m,
                        isCurrent: k,
                        withDislikeStyles: _ = !0,
                        isLoading: p,
                    } = e,
                    {
                        settings: { isMobile: v },
                    } = (0, o.Pjs)();
                return (0, a.jsxs)("div", {
                    className: (0, l.$)(t, u().root, {
                        [u().root_disabled]:
                            !i.isAvailable && !i.hasModalAccess,
                        [u().root_playing]: m,
                        [u().root_disliked]: i.isDisliked && _,
                        [u().root_current]: k,
                    }),
                    children: [
                        (i.isAvailable || i.hasModalAccess) &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    !p &&
                                        (0, a.jsx)(c.PD, {
                                            stopAnimation: !m,
                                            className: u().playingAnimation,
                                        }),
                                    p &&
                                        v &&
                                        (0, a.jsx)(s.y, {
                                            size: "xs",
                                            className: u().spinner,
                                        }),
                                    !v &&
                                        (0, a.jsx)(c.DM, {
                                            variant: "filled",
                                            className: u().playButton,
                                            iconClassName: u().playButtonIcon,
                                            isPlaying: m,
                                            onClick: d,
                                            iconSize: "xs",
                                        }),
                                ],
                            }),
                        r &&
                            (0, a.jsx)(n.Caption, {
                                variant: "div",
                                className: u().position,
                                weight: "normal",
                                type: "entity",
                                size: "m",
                                children: r,
                            }),
                    ],
                });
            });
        },
        37189: (e) => {
            e.exports = {
                playButtonCell: "PromoLandingTrackAlbum_playButtonCell__5ZuIk",
                controlsBarCell:
                    "PromoLandingTrackAlbum_controlsBarCell__Hapyd",
            };
        },
        37840: (e, t, i) => {
            "use strict";
            i.d(t, { useAddTrackToPlaylist: () => o });
            var a = i(33008),
                l = i(42213),
                r = i(25911),
                s = i(61744),
                n = i(79169);
            let o = () => {
                let { notify: e } = (0, n.lkh)(),
                    { playlist: t, fullscreenPlayer: i } = (0, n.Pjs)(),
                    o = (0, l.c)((l) => {
                        var o, c;
                        let {
                            withSuccessNotification: d,
                            withPageRefresh: u,
                            playlist: m,
                            track: k,
                        } = l;
                        if (d) {
                            let t = (0, s.eK)(k);
                            e(
                                (0, a.jsx)(r.mZ, {
                                    entityTitle: k.title,
                                    entityVariant: t,
                                    entityCoverUri:
                                        null != (c = k.coverUri) ? c : "",
                                    playlist: m,
                                }),
                                {
                                    containerId: i.modal.isOpened
                                        ? n.uQT.FULLSCREEN_INFO
                                        : n.uQT.INFO,
                                },
                            );
                        }
                        u &&
                            m.uuid ===
                                (null == (o = t.meta) ? void 0 : o.uuid) &&
                            t.refresh();
                    }),
                    c = (0, l.c)((t) => {
                        let { withFailNotification: l } = t;
                        l &&
                            e((0, a.jsx)(r.pw, {}), {
                                containerId: i.modal.isOpened
                                    ? n.uQT.FULLSCREEN_ERROR
                                    : n.uQT.ERROR,
                            });
                    });
                return (0, l.c)(async (e) => {
                    var t;
                    let {
                            playlist: i,
                            track: a,
                            withSuccessNotification: l = !0,
                            withFailNotification: s = !0,
                            withPageRefresh: n = !0,
                        } = e,
                        d = await i.changePlaylist(
                            (0, r.Mp)({
                                operation: r.yC.INSERT,
                                position: 0,
                                tracks: [
                                    {
                                        id: a.id,
                                        albumId:
                                            null == (t = a.mainAlbum)
                                                ? void 0
                                                : t.id,
                                    },
                                ],
                            }),
                        );
                    return (
                        d === r.Y9.OK
                            ? o({
                                  withSuccessNotification: l,
                                  withPageRefresh: n,
                                  playlist: i,
                                  track: a,
                              })
                            : c({ withFailNotification: s }),
                        d
                    );
                });
            };
        },
        39791: (e, t, i) => {
            "use strict";
            i.d(t, { s: () => l });
            var a = i(8159);
            let l = function () {
                var e, t;
                let i =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [],
                    l =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : [];
                if (
                    null == (t = i[0]) || null == (e = t.decomposed)
                        ? void 0
                        : e.length
                )
                    return i;
                let r = l.map((e) => e.id).sort(),
                    s = i.map((e) => e.id).sort();
                return (0, a.A)(r, s) ? [] : i.filter((e) => !e.various);
            };
        },
        40178: (e, t, i) => {
            "use strict";
            var a;
            i.d(t, { b: () => a }),
                (function (e) {
                    (e.Album = "album"),
                        (e.Artist = "artist"),
                        (e.Playlist = "playlist"),
                        (e.Radio = "fm_radio"),
                        (e.Other = "other"),
                        (e.Search = "search");
                })(a || (a = {}));
        },
        40265: (e, t, i) => {
            "use strict";
            i.d(t, { J: () => l });
            var a = i(79169);
            let l = function (e) {
                let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                    { href: i } = (0, a.uvd)(a.Zyd.video.href, {
                        query: {
                            [a.K3F.IDS]: e.join(","),
                            [a.K3F.ACTIVE_INDEX]: String(t),
                        },
                    });
                return i;
            };
        },
        42559: (e) => {
            e.exports = {
                root: "CommonTrack_root__i6shE",
                card: "TrackUgcUpload_card__bidIG",
                important: "TrackUgcUpload_important__RQkp0",
                playButton: "TrackUgcUpload_playButton__3l2I7",
                meta: "TrackUgcUpload_meta__aHQv9",
                title: "TrackUgcUpload_title__Xq3UP",
                status: "TrackUgcUpload_status__aFGvl",
                controls: "TrackUgcUpload_controls__Ie2Ox",
            };
        },
        42795: (e) => {
            e.exports = {
                cancelIcon: "TrackContextMenuDownloadItem_cancelIcon__0YF_e",
                root: "TrackContextMenuDownloadItem_root__BALdW",
                downloadingProgress:
                    "TrackContextMenuDownloadItem_downloadingProgress__Xmtgm",
                progress: "TrackContextMenuDownloadItem_progress__FMBws",
            };
        },
        42975: (e) => {
            e.exports = {
                downloadingProgress:
                    "TrackDownloadControl_downloadingProgress__wNg2W",
                progress: "TrackDownloadControl_progress__K_OhO",
            };
        },
        44078: (e, t, i) => {
            "use strict";
            i.d(t, {
                ZS: () => K.AudiobookMeta,
                QD: () => w.ControlsBar,
                UU: () => f,
                xe: () => z.Lyrics,
                wo: () => B.PodcastMeta,
                Pt: () => q.PromoLandingTrackAlbum,
                c8: () => X.SearchTrackCard,
                CC: () => $.Track,
                FR: () => V.TrackAlbum,
                wO: () => F.TrackCard,
                QB: () => W.TrackChart,
                _Y: () => G.TrackContextMenu,
                DP: () => R,
                j7: () => U.TrackMeta,
                vj: () => P,
                Kd: () => Q.TrackNonMusic,
                Kt: () => J.TrackPlaylist,
                II: () => et.TrackPlaylistAddition,
                yY: () => ei.TrackUgcUpload,
                g2: () => H.TrailerTrackAlbum,
                nP: () => ee.TrailerTrackPlaylist,
                U6: () => Y.UgcTrackEditModal,
                n_: () => M,
                kK: () => O,
                Df: () => Z.D,
                bV: () => c,
                h3: () => m,
                su: () => k.s,
                ye: () => v,
                zc: () => x,
                $b: () => y,
                vU: () => o,
                or: () => T,
                Rg: () => h.useAddTrackToPlaylist,
                $N: () => A.$,
                O6: () => b.useOnTrackLinkClick,
                sR: () => j.useRemoveTrackFromPlaylistByIndex,
                wf: () => I.useTrackDisclaimer,
            });
            var a = i(41028),
                l = i(16285),
                r = i(95592),
                s = i(70879),
                n = i(61744);
            let o = (e, t) => {
                    var i, l;
                    let o = null == (i = e.artists) ? void 0 : i.map(s.dM),
                        c = null == (l = e.albums) ? void 0 : l.map(r.e7);
                    return (0, a.wg)({
                        ...(0, n.gK)(e, t),
                        artists: o,
                        albums: c,
                    });
                },
                c = (e, t) => (0, a.wg)({ ...o(e), chart: t && (0, l.ws)(t) });
            var d = i(64520),
                u = i(79169);
            let m = (e, t) => {
                let i = Math.floor(Date.now() / 1e3),
                    a = "".concat(e).concat(i);
                return {
                    sign: (0, d.createHmac)("sha256", (0, u.Efj)())
                        .update(a)
                        .digest("base64"),
                    timeStamp: i,
                    trackId: e,
                    format: t,
                };
            };
            var k = i(39791),
                _ = i(17846),
                p = i(66268);
            (0, p.cache)(async (e, t) => {
                let i;
                ((0, u.LLJ)(e) && (0, u.LLJ)(t)) || (0, _.notFound)();
                try {
                    var a, l;
                    let {
                        container: r,
                        backendHostTld: s,
                        locale: n,
                        host: o,
                        isRSC: c,
                        fullUrl: d,
                        requestUrl: m,
                    } = await (0, u.IhE)();
                    if (c)
                        return {
                            track: void 0,
                            album: void 0,
                            similarTracks: void 0,
                            fullUrl: d,
                            requestUrl: m,
                            backendHostTld: s,
                            locale: n,
                            host: o,
                            isRSC: c,
                        };
                    let k = r.get(u.Ooh),
                        _ = await k.getFullInfoTrack({
                            trackId: e,
                            albumId: Number(t),
                        });
                    i = {
                        track: _.track,
                        album:
                            null == (l = _.track) || null == (a = l.albums)
                                ? void 0
                                : a[0],
                        similarTracks: _.similarTracks,
                        backendHostTld: s,
                        locale: n,
                        host: o,
                        fullUrl: d,
                        requestUrl: m,
                        isRSC: c,
                    };
                } catch (e) {
                    return (0, u.tfF)(e, () => ({
                        track: void 0,
                        album: void 0,
                        similarTracks: void 0,
                        ...(0, u.Bj3)(),
                    }));
                }
                return (
                    (i.track && "not-found" !== i.track.error) ||
                        (0, _.notFound)(),
                    i
                );
            });
            let v = (e, t) => {
                if (!t || !e) return;
                let { h: i, s: a } = (0, u.g8k)(t);
                return "hsl("
                    .concat(i, ", ")
                    .concat(a, "%, ")
                    .concat(e === u.Sxu.Light ? 60 : 20, "%)");
            };
            (0, p.cache)(async (e) => {
                let t;
                try {
                    var i, a;
                    let {
                        container: l,
                        backendHostTld: r,
                        locale: s,
                        host: n,
                        fullUrl: o,
                        requestUrl: c,
                        isRSC: d,
                    } = await (0, u.IhE)();
                    if (d)
                        return {
                            track: void 0,
                            album: void 0,
                            fullUrl: o,
                            isRSC: d,
                            requestUrl: c,
                            backendHostTld: r,
                            locale: s,
                            host: n,
                        };
                    let m = l.get(u.Ooh),
                        k = await m.getTracksMeta({
                            trackIds: [e],
                            removeDuplicates: !0,
                        });
                    t = {
                        track: null == k ? void 0 : k[0],
                        album:
                            null == k ||
                            null == (a = k[0]) ||
                            null == (i = a.albums)
                                ? void 0
                                : i[0],
                        backendHostTld: r,
                        locale: s,
                        host: n,
                        fullUrl: o,
                        requestUrl: c,
                    };
                } catch (e) {
                    return (0, u.tfF)(e, () => ({
                        track: void 0,
                        album: void 0,
                        ...(0, u.Bj3)(),
                    }));
                }
                return (
                    (t.track && "not-found" !== t.track.error) ||
                        (0, _.notFound)(),
                    t
                );
            });
            var C = i(6247);
            let x = (e) =>
                e
                    ? {
                          id: e.id,
                          artists: e.artists.map(s.NE),
                          durationMs: e.durationMs,
                          title: e.title,
                          type: e.type,
                      }
                    : {
                          id: 0,
                          artists: [],
                          durationMs: 0,
                          title: "",
                          type: C.S.TRACK,
                      };
            var g = i(53555);
            let y = (e) => ({ type: g.z4.Unloaded, meta: { id: e.entityId } }),
                T = (e) => {
                    var t, i;
                    return (0, a.wg)({
                        ...o(e),
                        artists:
                            null !=
                            (i =
                                null == e || null == (t = e.artists)
                                    ? void 0
                                    : t.map(s.dM))
                                ? i
                                : [],
                    });
                };
            var h = i(37840),
                A = i(50970),
                b = i(93915);
            i(4214);
            var j = i(98627),
                I = i(97725);
            let N = a.gK.model("Credit", {
                title: a.gK.string,
                value: a.gK.string,
            });
            var L = i(59615);
            let P = n.OQ.props({
                    artists: a.gK.array(s.PK),
                    albums: a.gK.array(r.GI),
                    chart: a.gK.maybe(l.Iz),
                })
                    .views((e) => ({
                        get artistsNames() {
                            var t;
                            return null == (t = e.artists)
                                ? void 0
                                : t.map((e) => e.name).join(", ");
                        },
                        get mainArtist() {
                            var i, a, l, r;
                            if (
                                null == (a = e.artists) || null == (i = a[0])
                                    ? void 0
                                    : i.various
                            )
                                return null;
                            return null !=
                                (r = null == (l = e.artists) ? void 0 : l[0])
                                ? r
                                : null;
                        },
                        get mainAlbum() {
                            var s, n;
                            return null !=
                                (n = null == (s = e.albums) ? void 0 : s[0])
                                ? n
                                : null;
                        },
                        get index() {
                            var o, c, d;
                            return null !=
                                (d =
                                    null == (c = e.albums[0]) ||
                                    null == (o = c.trackPosition)
                                        ? void 0
                                        : o.index)
                                ? d
                                : null;
                        },
                        get isAvailableOnlyForPlus() {
                            var u;
                            return !!(null == (u = this.mainAlbum)
                                ? void 0
                                : u.isAvailableOnlyForPlus);
                        },
                    }))
                    .actions((e) => ({
                        changeTrackInfo: (0, a.L3)(function* (t, i) {
                            let { ugcResource: l, modelActionsLogger: r } = (0,
                            a._$)(e);
                            if (
                                e.artists.map((e) => e.name).join(", ") === i &&
                                t === e.title
                            )
                                return u.FlZ.OK;
                            try {
                                var n;
                                yield l.changeTrack({
                                    trackId: e.id,
                                    title: t,
                                    artist: i,
                                }),
                                    (e.title = t);
                                let r =
                                    (null == (n = e.artists[0])
                                        ? void 0
                                        : n.id) || "0";
                                if (((e.artists = (0, a.wg)([])), i)) {
                                    let t = s.PK.create({
                                        id: r,
                                        name: i,
                                        isAvailable: !0,
                                    });
                                    e.artists = (0, a.wg)([t]);
                                }
                                return u.FlZ.OK;
                            } catch (e) {
                                return r.error(e), u.FlZ.ERROR;
                            }
                        }),
                    }))
                    .named("Track"),
                f = a.gK
                    .model("CurrentTrackInfo", {
                        id: a.gK.maybeNull(
                            a.gK.union(a.gK.string, a.gK.number),
                        ),
                        albumId: a.gK.maybeNull(a.gK.number),
                        isUGC: a.gK.maybeNull(a.gK.boolean),
                        trackLoadingState: a.gK.enumeration(
                            Object.values(u.GuX),
                        ),
                        fullTrack: a.gK.maybeNull(P),
                        creditsLoadingState: a.gK.enumeration(
                            Object.values(u.GuX),
                        ),
                        credits: a.gK.maybeNull(a.gK.array(N)),
                        modal: L.qt,
                        fullDescription: a.gK.maybeNull(a.gK.string),
                        descriptionLoadingState: a.gK.enumeration(
                            Object.values(u.GuX),
                        ),
                    })
                    .views((e) => ({
                        get isTrackIdle() {
                            return e.trackLoadingState === u.GuX.IDLE;
                        },
                        get isCreditsIdle() {
                            return e.creditsLoadingState === u.GuX.IDLE;
                        },
                        get isTrackLoading() {
                            return (
                                e.trackLoadingState === u.GuX.PENDING ||
                                e.trackLoadingState === u.GuX.IDLE
                            );
                        },
                        get isTrackRejected() {
                            return e.trackLoadingState === u.GuX.REJECT;
                        },
                        get isCreditsLoading() {
                            return (
                                e.creditsLoadingState === u.GuX.PENDING ||
                                e.creditsLoadingState === u.GuX.IDLE
                            );
                        },
                        get isCreditsRejected() {
                            return e.creditsLoadingState === u.GuX.REJECT;
                        },
                        get isRejected() {
                            return (
                                e.creditsLoadingState === u.GuX.REJECT &&
                                e.trackLoadingState === u.GuX.REJECT
                            );
                        },
                    }))
                    .actions((e) => ({
                        setTrack(t) {
                            let { id: i, albumId: a, isUGC: l } = t;
                            (e.id = i), (e.albumId = a), (e.isUGC = l);
                        },
                        getFullTrack: (0, a.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: i } =
                                (0, a._$)(e);
                            if (!e.id || e.trackLoadingState === u.GuX.PENDING)
                                return null;
                            try {
                                e.trackLoadingState = u.GuX.PENDING;
                                let i = yield t.getFullInfoTrack({
                                    trackId: e.id,
                                    albumId: e.albumId,
                                });
                                if (!i) return null;
                                (e.fullTrack = (0, a.wg)(o(i.track))),
                                    (e.trackLoadingState = u.GuX.RESOLVE);
                            } catch (t) {
                                i.error(t),
                                    (e.trackLoadingState = u.GuX.REJECT);
                            }
                            return null;
                        }),
                        getFullDescription: (0, a.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: i } =
                                (0, a._$)(e);
                            if (
                                !e.id ||
                                e.descriptionLoadingState === u.GuX.PENDING
                            )
                                return null;
                            try {
                                e.descriptionLoadingState = u.GuX.PENDING;
                                let i = yield t.getFullDescriptionTrack({
                                    trackId: e.id,
                                });
                                if (!i) return null;
                                (e.fullDescription = i.description),
                                    (e.descriptionLoadingState = u.GuX.RESOLVE);
                            } catch (t) {
                                i.error(t),
                                    (e.descriptionLoadingState = u.GuX.REJECT);
                            }
                            return null;
                        }),
                        getTrackMeta: (0, a.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: i } =
                                (0, a._$)(e);
                            if (!e.id || e.trackLoadingState === u.GuX.PENDING)
                                return null;
                            try {
                                e.trackLoadingState = u.GuX.PENDING;
                                let i = yield t.getTracksMeta({
                                    trackIds: [e.id],
                                    removeDuplicates: !0,
                                });
                                if (!i || !i.length) return null;
                                i[0] &&
                                    ((e.fullTrack = (0, a.wg)(o(i[0]))),
                                    (e.trackLoadingState = u.GuX.RESOLVE));
                            } catch (t) {
                                i.error(t),
                                    (e.trackLoadingState = u.GuX.REJECT);
                            }
                            return null;
                        }),
                        getCreditsInfo: (0, a.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: i } =
                                (0, a._$)(e);
                            if (
                                !e.id ||
                                e.creditsLoadingState === u.GuX.PENDING
                            )
                                return null;
                            try {
                                e.creditsLoadingState = u.GuX.PENDING;
                                let i = yield t.getCredits({ trackId: e.id });
                                (e.credits = (0, a.wg)(
                                    null == i ? void 0 : i.credits,
                                )),
                                    (e.creditsLoadingState = u.GuX.RESOLVE);
                            } catch (t) {
                                i.error(t),
                                    (e.creditsLoadingState = u.GuX.REJECT);
                            }
                            return null;
                        }),
                        reset() {
                            (e.id = null),
                                (e.albumId = null),
                                (e.isUGC = null),
                                (e.trackLoadingState = u.GuX.IDLE),
                                (e.descriptionLoadingState = u.GuX.IDLE),
                                (e.creditsLoadingState = u.GuX.IDLE),
                                (e.fullTrack = null),
                                (e.credits = null);
                        },
                    }));
            var D = i(29318),
                E = i(54960),
                S = i(5479);
            let R = a.gK
                    .compose(
                        a.gK.model("TrackLyrics", {
                            lyrics: a.gK.maybeNull(a.gK.string),
                            major: a.gK.maybeNull(n.t$),
                            lyricId: a.gK.maybeNull(a.gK.number),
                            writers: a.gK.array(a.gK.string),
                            externalLyricId: a.gK.maybeNull(a.gK.string),
                            modal: L.qt,
                            track: a.gK.maybeNull(P),
                            trackId: a.gK.maybeNull(
                                a.gK.union(a.gK.string, a.gK.number),
                            ),
                            currentTrackId: a.gK.maybeNull(
                                a.gK.union(a.gK.string, a.gK.number),
                            ),
                            hasError: a.gK.optional(a.gK.boolean, !1),
                        }),
                        L.XT,
                    )
                    .views((e) => ({
                        get writersNames() {
                            return e.writers.join(", ");
                        },
                        get hasWriters() {
                            return 0 !== e.writers.length;
                        },
                        get isShimmerVisible() {
                            return e.isLoading || e.isRejected;
                        },
                        get shouldShowErrorNotification() {
                            return e.isRejected && e.hasError;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setTrack(t) {
                                e.track = (0, a.wg)({ ...(0, D.HO)(t) });
                            },
                            resetShouldShowError() {
                                e.hasError = !1;
                            },
                            getLyrics: (0, a.L3)(function* (i) {
                                let {
                                    tracksResource: l,
                                    modelActionsLogger: r,
                                } = (0, a._$)(e);
                                if (
                                    e.loadingState !== u.GuX.PENDING &&
                                    e.currentTrackId !== i
                                )
                                    try {
                                        (e.loadingState = u.GuX.PENDING),
                                            (e.currentTrackId = i);
                                        let {
                                            downloadUrl: r,
                                            major: s,
                                            externalLyricId: o,
                                            lyricId: c,
                                            writers: d,
                                        } = yield l.getLyrics(m(i, S.o.TEXT));
                                        (e.major = (0, n.LT)(s)),
                                            (e.externalLyricId = o),
                                            (e.lyricId = c),
                                            (e.writers = (0, a.wg)(d || [])),
                                            yield t.downloadLyrics(r),
                                            (e.loadingState = u.GuX.RESOLVE);
                                    } catch (t) {
                                        (e.loadingState = u.GuX.REJECT),
                                            (e.currentTrackId = null),
                                            (e.hasError = !0),
                                            e.modal.isOpened && e.modal.close(),
                                            r.error(t);
                                    }
                            }),
                            downloadLyrics: (0, a.L3)(function* (t) {
                                let { prefixlessResource: i } = (0, a._$)(e);
                                e.lyrics = yield i.getLyricsText(t);
                            }),
                            sendViews: (0, a.L3)(function* (t) {
                                let { trackId: i, albumId: l } = t,
                                    {
                                        lyricViewsResource: r,
                                        modelActionsLogger: s,
                                    } = (0, a._$)(e);
                                if (e.loadingState === u.GuX.RESOLVE)
                                    try {
                                        if (
                                            !e.major ||
                                            !e.lyricId ||
                                            !e.externalLyricId ||
                                            !e.currentTrackId
                                        )
                                            return;
                                        yield r.sendViews({
                                            lyricViews: [
                                                {
                                                    id: (0, E.A)(),
                                                    trackId: i,
                                                    majorId: e.major.id,
                                                    lyricId: e.lyricId,
                                                    externalLyricId:
                                                        e.externalLyricId,
                                                    lyricFormat: S.o.TEXT,
                                                    albumId:
                                                        void 0 !== l
                                                            ? String(l)
                                                            : void 0,
                                                },
                                            ],
                                        });
                                    } catch (e) {
                                        s.error(e);
                                    }
                            }),
                        };
                        return t;
                    }),
                M = a.gK
                    .model("UgcTrackEditModal", { modal: L.qt })
                    .volatile(() => ({ track: null }))
                    .views((e) => ({
                        get trackTitle() {
                            if (!e.track) return "";
                            return e.track.title;
                        },
                        get trackArtist() {
                            if (!e.track) return "";
                            return e.track.artists
                                .map((e) => e.name)
                                .join(", ");
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            open(t) {
                                (e.track = t), e.modal.open();
                            },
                            close() {
                                e.modal.close(), t.reset();
                            },
                            reset() {
                                e.track = null;
                            },
                        };
                        return t;
                    }),
                O = a.gK.compose(P, n.jU).named("UgcTrack");
            var w = i(99430),
                K = i(67366),
                B = i(24598),
                U = i(6742),
                G = i(86461),
                z = i(12318),
                X = i(80582),
                $ = i(94916),
                F = i(76172),
                Y = i(21118),
                q = i(86868),
                V = i(93295),
                H = i(79372),
                W = i(88790),
                Q = i(75791),
                Z = i(81028),
                J = i(18705),
                ee = i(22606),
                et = i(25809),
                ei = i(71741);
        },
        44368: (e) => {
            e.exports = {
                card_root: "HorizontalCardContainer_root__YoAAP",
                dateWithName: "PodcastMeta_dateWithName__cKy0o",
                podcastMetaContainer: "PodcastMeta_podcastMetaContainer__pFASj",
                podcastTitleContainer:
                    "PodcastMeta_podcastTitleContainer__p9Zja",
                podcastName: "PodcastMeta_podcastName__iQeNK",
                progress: "PodcastMeta_progress__5DqlO",
                progress_disabled: "PodcastMeta_progress_disabled__KX04q",
                progress_withPreviousInfo:
                    "PodcastMeta_progress_withPreviousInfo__eOrCi",
                soonDate: "PodcastMeta_soonDate__zGuG9",
                dateDisabled: "PodcastMeta_dateDisabled__DxjtJ",
                dateDisliked: "PodcastMeta_dateDisliked__95MlL",
            };
        },
        47838: (e) => {
            e.exports = { writers: "Lyrics_writers__xvrNp" };
        },
        48351: (e, t, i) => {
            "use strict";
            i.d(t, { useSendEventOnClipOpened: () => n });
            var a = i(93967),
                l = i(48551),
                r = i(42213),
                s = i(79169);
            let n = () => {
                let e = (0, l.st)(),
                    { hash: t } = (0, l.gf)(),
                    i = (0, s.UlF)();
                return (0, r.c)((l) => {
                    if (!e) return;
                    let r = {
                            hash: t,
                            pageId: a.QT.VideoScreen,
                            mainObjectType: a.ky.Video,
                            mainObjectId: l,
                        },
                        s = (0, a.Fx)({
                            params: r,
                            logger: i,
                            context: "useSendEventOnClipOpened",
                        });
                    s && (0, a.w5)(e.evgenInstance, s);
                });
            };
        },
        50970: (e, t, i) => {
            "use strict";
            i.d(t, { $: () => l });
            var a = i(79169);
            function l(e) {
                let { withCustomTooltip: t } = e,
                    {
                        settings: { isMobile: i, browserInfo: l },
                    } = (0, a.Pjs)();
                return !((null == l ? void 0 : l.name) === "Safari" || i) && t;
            }
        },
        51389: (e) => {
            e.exports = { syncLyrics: "TrackContextMenu_syncLyrics___CDVn" };
        },
        51786: (e, t, i) => {
            "use strict";
            i.d(t, { useTrackAboutModalTitle: () => r });
            var a = i(73827),
                l = i(6247);
            let r = (e) => {
                var t;
                let { formatMessage: i } = (0, a.A)();
                return i(
                    (null == e ? void 0 : e.type) === l.S.AUDIOBOOK
                        ? { id: "track-modal.audiobook-title" }
                        : (null == e ? void 0 : e.isTrackPodcast) ||
                            (null == e || null == (t = e.mainAlbum)
                                ? void 0
                                : t.isPodcast)
                          ? { id: "track-modal.podcast-title" }
                          : { id: "track-modal.title" },
                );
            };
        },
        52931: (e, t, i) => {
            "use strict";
            i.d(t, { WA: () => m, MW: () => j, Pe: () => P, kR: () => n });
            var a = i(66268),
                l = i(54960),
                r = i(42213),
                s = i(79169);
            let n = (e) => {
                let {
                        entityType: t,
                        isLegalRejected: i,
                        isUnsafeLegal: n,
                        disclaimerId: o,
                        entityId: c,
                        callback: d,
                    } = e,
                    {
                        disclaimerModalData: u,
                        modals: { disclaimerModal: m },
                    } = (0, s.Pjs)(),
                    k = (0, a.useRef)(String((0, l.A)())),
                    _ = (0, a.useRef)(!1),
                    p = (0, s.NFA)().get(s.U2_);
                return (
                    (0, a.useEffect)(() => {
                        u.isUnsafeDisclaimerConfirmed &&
                            u.id === k.current &&
                            !_.current &&
                            (null == d || d(), (_.current = !0));
                    }, [d, u.isUnsafeDisclaimerConfirmed, u.id]),
                    (0, r.c)(async (e) => {
                        if (c && (i || n)) {
                            let i = p.get(s.cYZ.ExEx);
                            if (
                                n &&
                                (null == i
                                    ? void 0
                                    : i.includes("".concat(t, "_").concat(c)))
                            ) {
                                null == d || d(e);
                                return;
                            }
                            null == e || e.preventDefault(),
                                await u.getDisclaimerData({
                                    entityId: Number(c),
                                    entityType: t,
                                    disclaimerId: o,
                                }),
                                n && u.setType(s.YwF.UNSAFE),
                                u.setId(k.current),
                                u.setEntityId(c),
                                u.setEntityType(t),
                                (_.current = !1),
                                m.open();
                            return;
                        }
                        null == d || d(e);
                    })
                );
            };
            var o = i(29318),
                c = i(41028),
                d = i(59615);
            let u = (e) =>
                    e.details
                        ? (0, c.wg)({
                              title: e.title,
                              description: e.description,
                              details: {
                                  text: e.details.text,
                                  url: e.details.url,
                              },
                          })
                        : (0, c.wg)({
                              title: e.title,
                              description: e.description,
                          }),
                m = c.gK
                    .compose(
                        c.gK.model("Disclaimer", {
                            data: c.gK.maybeNull(d.ni),
                            type: c.gK.maybeNull(
                                c.gK.enumeration(Object.values(s.YwF)),
                            ),
                            id: c.gK.maybeNull(c.gK.string),
                            entityType: c.gK.maybeNull(
                                c.gK.enumeration(Object.values(s.nPY)),
                            ),
                            entityId: c.gK.maybeNull(
                                c.gK.union(c.gK.string, c.gK.number),
                            ),
                            isUnsafeDisclaimerConfirmed: c.gK.optional(
                                c.gK.boolean,
                                !1,
                            ),
                            shouldHistoryBack: c.gK.optional(c.gK.boolean, !1),
                            shouldCloseModalOnOutsidePress: c.gK.optional(
                                c.gK.boolean,
                                !0,
                            ),
                            shouldCloseModalOnEscape: c.gK.optional(
                                c.gK.boolean,
                                !0,
                            ),
                        }),
                        d.XT,
                    )
                    .volatile(() => ({
                        onDisclaimerConfirmHandler: null,
                        onDisclaimerRejectHandler: null,
                    }))
                    .actions((e) => ({
                        setDisclaimerData(t) {
                            e.data = (0, o.HO)(t);
                        },
                        setShouldCloseModalOnOutsidePress(t) {
                            e.shouldCloseModalOnOutsidePress = t;
                        },
                        setShouldCloseModalOnEscape(t) {
                            e.shouldCloseModalOnEscape = t;
                        },
                        getArtistDisclaimer: (0, c.L3)(function* (t) {
                            let { artistId: i } = t,
                                { artistsResource: a, modelActionsLogger: l } =
                                    (0, c._$)(e);
                            if (e.loadingState !== s.GuX.PENDING)
                                try {
                                    e.loadingState = s.GuX.PENDING;
                                    let t = yield a.getDisclaimer({
                                            artistId: i,
                                        }),
                                        l = t.modal || t.foreignAgent;
                                    l && (e.data = u(l)),
                                        e.loadingState !== s.GuX.IDLE &&
                                            (e.loadingState = s.GuX.RESOLVE);
                                } catch (t) {
                                    l.error(t),
                                        e.loadingState !== s.GuX.IDLE &&
                                            (e.loadingState = s.GuX.REJECT);
                                }
                        }),
                        getAlbumDisclaimer: (0, c.L3)(function* (t) {
                            let { albumId: i } = t,
                                { albumResource: a, modelActionsLogger: l } =
                                    (0, c._$)(e);
                            if (e.loadingState !== s.GuX.PENDING)
                                try {
                                    e.loadingState = s.GuX.PENDING;
                                    let t = yield a.getDisclaimer({
                                            albumId: i,
                                        }),
                                        l = t.modal || t.foreignAgent;
                                    l && (e.data = u(l)),
                                        e.loadingState !== s.GuX.IDLE &&
                                            (e.loadingState = s.GuX.RESOLVE);
                                } catch (t) {
                                    l.error(t),
                                        e.loadingState !== s.GuX.IDLE &&
                                            (e.loadingState = s.GuX.REJECT);
                                }
                        }),
                        getTrackDisclaimer: (0, c.L3)(function* (t) {
                            let { trackId: i } = t,
                                { tracksResource: a, modelActionsLogger: l } =
                                    (0, c._$)(e);
                            if (e.loadingState !== s.GuX.PENDING)
                                try {
                                    e.loadingState = s.GuX.PENDING;
                                    let t = yield a.getDisclaimer({
                                            trackId: i,
                                        }),
                                        l = t.modal || t.foreignAgent;
                                    l && (e.data = u(l)),
                                        e.loadingState !== s.GuX.IDLE &&
                                            (e.loadingState = s.GuX.RESOLVE);
                                } catch (t) {
                                    l.error(t),
                                        e.loadingState !== s.GuX.IDLE &&
                                            (e.loadingState = s.GuX.REJECT);
                                }
                        }),
                        getClipDisclaimer: (0, c.L3)(function* (t) {
                            let { clipId: i } = t,
                                { clipsResource: a, modelActionsLogger: l } =
                                    (0, c._$)(e);
                            if (e.loadingState !== s.GuX.PENDING)
                                try {
                                    e.loadingState = s.GuX.PENDING;
                                    let t = yield a.getDisclaimer({
                                            clipId: i,
                                        }),
                                        l = t.modal || t.foreignAgent;
                                    l && (e.data = u(l)),
                                        e.loadingState !== s.GuX.IDLE &&
                                            (e.loadingState = s.GuX.RESOLVE);
                                } catch (t) {
                                    l.error(t),
                                        e.loadingState !== s.GuX.IDLE &&
                                            (e.loadingState = s.GuX.REJECT);
                                }
                        }),
                        setId(t) {
                            e.id = t;
                        },
                        setType(t) {
                            e.type = t;
                        },
                        setEntityType(t) {
                            e.entityType = t;
                        },
                        setEntityId(t) {
                            e.entityId = t;
                        },
                        setConfirmUnsafeDisclaimer(t) {
                            e.isUnsafeDisclaimerConfirmed = t;
                        },
                        setShouldHistoryBack(t) {
                            e.shouldHistoryBack = t;
                        },
                        setDisclaimerConfirmHandler(t) {
                            e.onDisclaimerConfirmHandler = t;
                        },
                        setDisclaimerRejectHandler(t) {
                            e.onDisclaimerRejectHandler = t;
                        },
                        reset() {
                            (e.loadingState = s.GuX.IDLE),
                                (e.data = null),
                                (e.id = null),
                                (e.type = null),
                                (e.entityType = null),
                                (e.entityId = null),
                                (e.isUnsafeDisclaimerConfirmed = !1),
                                (e.shouldHistoryBack = !1),
                                (e.shouldCloseModalOnOutsidePress = !0),
                                (e.shouldCloseModalOnEscape = !0);
                        },
                    }))
                    .actions((e) => ({
                        getDisclaimerData: (0, c.L3)(function* (t) {
                            let {
                                    entityId: i,
                                    entityType: a,
                                    disclaimerId: l,
                                } = t,
                                { disclaimers: r } = (0, c.Zn)(e);
                            if (l) {
                                let t = yield null == r
                                    ? void 0
                                    : r.getDisclaimerById(l);
                                t && e.setDisclaimerData(t);
                            } else
                                switch (a) {
                                    case s.nPY.ARTIST:
                                        yield e.getArtistDisclaimer({
                                            artistId: String(i),
                                        });
                                        break;
                                    case s.nPY.ALBUM:
                                    case s.nPY.PODCAST:
                                    case s.nPY.AUDIOBOOK:
                                        yield e.getAlbumDisclaimer({
                                            albumId: Number(i),
                                        });
                                        break;
                                    case s.nPY.TRACK:
                                        yield e.getTrackDisclaimer({
                                            trackId: String(i),
                                        });
                                        break;
                                    case s.nPY.CLIP:
                                        yield e.getClipDisclaimer({
                                            clipId: String(i),
                                        });
                                }
                        }),
                    }));
            var k = i(33008),
                _ = i(85896),
                p = i(97531),
                v = i(96560),
                C = i(18064),
                x = i(44189),
                g = i(91342),
                y = i(77868),
                T = i(18740),
                h = i(72494),
                A = i.n(h);
            let b = {
                    [s.nPY.ALBUM]: (0, k.jsx)(v.A, {
                        id: "extra-explicit.confirm-unsafe-album",
                    }),
                    [s.nPY.PODCAST]: (0, k.jsx)(v.A, {
                        id: "extra-explicit.confirm-unsafe-podcast",
                    }),
                    [s.nPY.ARTIST]: (0, k.jsx)(v.A, {
                        id: "extra-explicit.confirm-unsafe-artist",
                    }),
                    [s.nPY.TRACK]: (0, k.jsx)(v.A, {
                        id: "extra-explicit.confirm-unsafe-track",
                    }),
                    [s.nPY.AUDIOBOOK]: (0, k.jsx)(v.A, {
                        id: "extra-explicit.confirm-unsafe-audiobook",
                    }),
                    [s.nPY.CLIP]: (0, k.jsx)(v.A, {
                        id: "extra-explicit.confirm-unsafe-clip",
                    }),
                },
                j = (0, p.PA)((e) => {
                    var t, i, l;
                    let { disclaimer: n, onClose: o, className: c } = e,
                        { data: d, isLoading: u } = null != n ? n : {},
                        m = (0, s.W6M)(),
                        p = (0, s.ZpR)(s.Zyd.main.href),
                        h = (0, s.NFA)().get(s.U2_),
                        j = (0, r.c)(() => {
                            if (o) return o();
                            m.canBack && m.back(), p();
                        }),
                        I =
                            (null == d || null == (t = d.details)
                                ? void 0
                                : t.url) && d.details.text,
                        N = (0, r.c)(() => {
                            null == n || n.setConfirmUnsafeDisclaimer(!0);
                            let e = h.get(s.cYZ.ExEx),
                                t = new Date(),
                                i = t.setMinutes(t.getMinutes() + 15);
                            e
                                ? h.set(
                                      s.cYZ.ExEx,
                                      [
                                          ...e,
                                          ""
                                              .concat(
                                                  null == n
                                                      ? void 0
                                                      : n.entityType,
                                                  "_",
                                              )
                                              .concat(
                                                  null == n
                                                      ? void 0
                                                      : n.entityId,
                                              ),
                                      ],
                                      { expires: new Date(i) },
                                  )
                                : h.set(
                                      s.cYZ.ExEx,
                                      [
                                          ""
                                              .concat(
                                                  null == n
                                                      ? void 0
                                                      : n.entityType,
                                                  "_",
                                              )
                                              .concat(
                                                  null == n
                                                      ? void 0
                                                      : n.entityId,
                                              ),
                                      ],
                                      { expires: new Date(i) },
                                  ),
                                null == o || o(),
                                (null == n
                                    ? void 0
                                    : n.onDisclaimerConfirmHandler) &&
                                    n.onDisclaimerConfirmHandler();
                        }),
                        L = (0, r.c)(() => {
                            (null == n ? void 0 : n.shouldHistoryBack)
                                ? (null == o || o(), m.canBack && m.back(), p())
                                : null == o || o(),
                                (null == n
                                    ? void 0
                                    : n.onDisclaimerRejectHandler) &&
                                    n.onDisclaimerRejectHandler();
                        });
                    (0, a.useEffect)(
                        () => () => {
                            null == n || n.reset();
                        },
                        [n],
                    );
                    let P = (0, a.useMemo)(() => {
                            if (u)
                                return (0, k.jsxs)(k.Fragment, {
                                    children: [
                                        (0, k.jsx)(g.Shimmer, {
                                            radius: "l",
                                            width: 200,
                                            height: 24,
                                            className: A().shimmer,
                                        }),
                                        (0, k.jsx)(g.Shimmer, {
                                            radius: "l",
                                            width: 250,
                                            height: 16,
                                            className: A().shimmer,
                                        }),
                                    ],
                                });
                            if (d && !u) {
                                var e, t, i;
                                return (0, k.jsxs)(k.Fragment, {
                                    children: [
                                        (0, k.jsx)(y.Heading, {
                                            variant: "h4",
                                            size: "l",
                                            className: (0, _.$)(
                                                A().title,
                                                A().text,
                                            ),
                                            ...(0, C.Am)(
                                                C.OA.disclaimer
                                                    .DISCLAIMER_TITLE,
                                            ),
                                            children: d.title,
                                        }),
                                        (0, k.jsx)(y.Caption, {
                                            variant: "div",
                                            size: "l",
                                            weight: "normal",
                                            className: A().text,
                                            ...(0, C.Am)(
                                                C.OA.disclaimer
                                                    .DISCLAIMER_DESCRIPTION,
                                            ),
                                            children: d.description,
                                        }),
                                        I &&
                                            (0, k.jsx)(T.N_, {
                                                href:
                                                    null == n ||
                                                    null == (t = n.data) ||
                                                    null == (e = t.details)
                                                        ? void 0
                                                        : e.url,
                                                className: A().link,
                                                children: (0, k.jsx)(
                                                    y.Caption,
                                                    {
                                                        variant: "span",
                                                        size: "l",
                                                        weight: "normal",
                                                        children:
                                                            null ==
                                                            (i = d.details)
                                                                ? void 0
                                                                : i.text,
                                                    },
                                                ),
                                            }),
                                    ],
                                });
                            }
                        }, [
                            u,
                            d,
                            I,
                            null == n ||
                            null == (l = n.data) ||
                            null == (i = l.details)
                                ? void 0
                                : i.url,
                        ]),
                        f = (0, a.useMemo)(
                            () =>
                                u
                                    ? (0, k.jsx)(g.Shimmer, {
                                          radius: "xl",
                                          width: 190,
                                          height: 50,
                                          className: A().shimmer,
                                      })
                                    : (null == n ? void 0 : n.type) ===
                                        s.YwF.UNSAFE
                                      ? (0, k.jsxs)("div", {
                                            className: A().buttons,
                                            children: [
                                                (0, k.jsx)(x.Button, {
                                                    color: "primary",
                                                    onClick: L,
                                                    size: "l",
                                                    radius: "xxxl",
                                                    className: A().button,
                                                    ...(0, C.Am)(
                                                        C.OA.disclaimer
                                                            .DISCLAIMER_REJECT_BUTTON,
                                                    ),
                                                    children: (0, k.jsx)(v.A, {
                                                        id: "extra-explicit.reject-unsafe-entity",
                                                    }),
                                                }),
                                                (0, k.jsx)(x.Button, {
                                                    color: "secondary",
                                                    onClick: N,
                                                    size: "l",
                                                    radius: "xxxl",
                                                    className: A().button,
                                                    ...(0, C.Am)(
                                                        C.OA.disclaimer
                                                            .DISCLAIMER_CONFIRM_BUTTON,
                                                    ),
                                                    children:
                                                        n.entityType &&
                                                        b[n.entityType],
                                                }),
                                            ],
                                        })
                                      : (0, k.jsx)("div", {
                                            className: A().buttons,
                                            children: (0, k.jsx)(x.Button, {
                                                color: "primary",
                                                onClick: j,
                                                size: "l",
                                                radius: "xxxl",
                                                className: A().button,
                                                ...(0, C.Am)(
                                                    C.OA.disclaimer
                                                        .DISCLAIMER_REJECT_BUTTON,
                                                ),
                                                children: (0, k.jsx)(v.A, {
                                                    id: "interface-actions.confirm",
                                                }),
                                            }),
                                        }),
                            [
                                N,
                                null == n ? void 0 : n.entityType,
                                null == n ? void 0 : n.type,
                                j,
                                u,
                                L,
                            ],
                        );
                    return (0, k.jsx)("div", {
                        className: (0, _.$)(A().root, c),
                        ...(0, C.Am)(C.OA.disclaimer.DISCLAIMER_CONTENT),
                        children: (0, k.jsxs)("div", {
                            className: A().container,
                            children: [P, f],
                        }),
                    });
                });
            var I = i(51704),
                N = i(89358),
                L = i.n(N);
            let P = (0, p.PA)(() => {
                let {
                    disclaimerModalData: e,
                    modals: { disclaimerModal: t },
                } = (0, s.Pjs)();
                return (0, k.jsx)(I.a, {
                    size: "fitContent",
                    placement: "center",
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    showHeader: !1,
                    className: L().root,
                    contentClassName: L().content,
                    overlayColor: "full",
                    containerProps: (0, C.Am)(C.OA.disclaimer.DISCLAIMER_MODAL),
                    closeOnOutsidePress: e.shouldCloseModalOnOutsidePress,
                    escapeKey: e.shouldCloseModalOnEscape,
                    children: (0, k.jsx)(j, {
                        disclaimer: e,
                        onClose: t.close,
                    }),
                });
            });
        },
        53831: (e, t, i) => {
            "use strict";
            i.d(t, { O: () => o });
            var a = i(33008),
                l = i(85896),
                r = i(78016),
                s = i(55727),
                n = i.n(s);
            let o = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, a.jsx)(r.Icon, {
                    variant: "dragDots",
                    size: "xxs",
                    className: (0, l.$)(n().root, { [n().root_active]: t }, i),
                    "aria-hidden": !0,
                });
            };
        },
        54666: (e, t, i) => {
            "use strict";
            i.d(t, { useVideoModal: () => s });
            var a = i(42213),
                l = i(79169),
                r = i(40265);
            let s = () => {
                let { fullscreenVideoPlayer: e } = (0, l.Pjs)(),
                    t = (0, l.pqZ)();
                return (0, a.c)(function (i) {
                    let a =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0;
                    e.setIds(i),
                        e.setClipIndex(a),
                        t((0, r.J)(i, a)),
                        e.modal.open();
                });
            };
        },
        55727: (e) => {
            e.exports = {
                root: "DragAndDropIcon_root__OstQU",
                root_active: "DragAndDropIcon_root_active__xOTKt",
            };
        },
        56781: (e) => {
            e.exports = {
                card_root: "HorizontalCardContainer_root__YoAAP",
                root: "PlayButtonWithPosition_root__H5FYg",
                playButton: "PlayButtonWithPosition_playButton__7cfDQ",
                playButtonIcon: "PlayButtonWithPosition_playButtonIcon___cLAL",
                playingAnimation:
                    "PlayButtonWithPosition_playingAnimation__Hy5rC",
                position: "PlayButtonWithPosition_position__wk3OT",
                root_current: "PlayButtonWithPosition_root_current__FCDLJ",
                root_playing: "PlayButtonWithPosition_root_playing__RpnYU",
                root_disabled: "PlayButtonWithPosition_root_disabled__PMV24",
                root_disliked: "PlayButtonWithPosition_root_disliked__NIZzA",
                spinner: "PlayButtonWithPosition_spinner__jNaNf",
            };
        },
        56863: (e) => {
            e.exports = { ugcLabel: "TrackContextMenuHeader_ugcLabel__k7hmv" };
        },
        56951: (e) => {
            e.exports = {
                root: "TrackCard_root__kIpe1",
                controls: "TrackCard_controls__E7Y3L",
                cover: "TrackCard_cover__tkVPB",
                coverBlock: "TrackCard_coverBlock__WdvvQ",
                coverBlock_withTrackLink:
                    "TrackCard_coverBlock_withTrackLink__fDe6k",
                image: "TrackCard_image__KsOFF",
                artists: "TrackCard_artists__wH48n",
                artistLink: "TrackCard_artistLink__aqLl7",
                titleContainer: "TrackCard_titleContainer__YCcZk",
                titleContainer_withVersion:
                    "TrackCard_titleContainer_withVersion__fTRGu",
                title: "TrackCard_title__BVLuv",
                titleLink: "TrackCard_titleLink__NtPhm",
                version: "TrackCard_version__7iPuj",
                playButton: "TrackCard_playButton__ukJDd",
                likeButton: "TrackCard_likeButton__Hejrk",
                menuButton: "TrackCard_menuButton__XtYLf",
                trailerButton: "TrackCard_trailerButton__nGqhD",
                control: "TrackCard_control___huPc",
            };
        },
        60030: (e, t, i) => {
            "use strict";
            i.d(t, {
                z8: () => C,
                l6: () => c,
                z4: () => d,
                JL: () => u.J,
                KX: () => m.useOnLikeClick,
                Hx: () => a.useSendEventOnClipClosed,
                _7: () => l.useSendEventOnClipNavigated,
                QV: () => r.useSendEventOnClipOpened,
                Mn: () => s.useSendEventOnClipShowedOrHidden,
                Cc: () => k.useVideoModal,
                df: () => _.useWithClips,
            });
            var a = i(77010),
                l = i(28539),
                r = i(48351),
                s = i(35391),
                n = i(41028),
                o = i(79169);
            let c = (e) => {
                    let { available: t, disclaimers: i } = (0, o.fyr)(e);
                    return (0, n.wg)({
                        clipId: e.clipId,
                        title: e.title,
                        thumbnail: e.thumbnail,
                        duration: e.duration,
                        previewUrl: e.previewUrl,
                        isAvailable: t,
                        version: e.version,
                        disclaimers: i,
                    });
                },
                d = (e, t) => {
                    let i = Number(t);
                    return !Number.isNaN(i) && i > 0 && i < e.length ? i : 0;
                };
            var u = i(40265),
                m = i(78107),
                k = i(54666),
                _ = i(80961),
                p = i(93435),
                v = i(59615);
            let C = n.gK
                .compose(
                    n.gK.model("BaseClip", {
                        clipId: n.gK.number,
                        title: n.gK.maybe(n.gK.string),
                        thumbnail: n.gK.maybe(n.gK.string),
                        previewUrl: n.gK.maybe(n.gK.string),
                        duration: n.gK.maybe(n.gK.number),
                        isAvailable: n.gK.boolean,
                        version: n.gK.maybe(n.gK.string),
                    }),
                    v.Ec,
                )
                .views((e) => ({
                    get url() {
                        let { href: t } = (0, o.uvd)(o.Zyd.video.href, {
                            query: { ids: String(e.clipId) },
                        });
                        return t;
                    },
                    get isLiked() {
                        if (!(0, n._n)(e)) return !1;
                        let { library: t } = (0, n.Zn)(e);
                        return t.isClipLiked(e.clipId);
                    },
                    get modalDisclaimerId() {
                        var t;
                        if (!e.disclaimers) return null;
                        let i =
                            null == (t = (0, o.bRW)(e.disclaimers, p.M.MODAL))
                                ? void 0
                                : t[0];
                        return (null == i ? void 0 : i.id) || null;
                    },
                    get isLegalRejected() {
                        var i;
                        if (!(0, n._n)(e) || !e.disclaimers || e.isAvailable)
                            return !1;
                        let t =
                            null == (i = (0, o.bRW)(e.disclaimers, p.M.MODAL))
                                ? void 0
                                : i[0];
                        return (null == t ? void 0 : t.type) === p.M.MODAL;
                    },
                    get isUnsafeLegal() {
                        if (!(0, n._n)(e)) return !1;
                        if (e.disclaimers) {
                            var a;
                            let t =
                                null ==
                                (a = (0, o.bRW)(e.disclaimers, p.M.MODAL))
                                    ? void 0
                                    : a[0];
                            return (
                                e.isAvailable &&
                                (null == t ? void 0 : t.type) === p.M.MODAL
                            );
                        }
                        return !1;
                    },
                }))
                .actions((e) => ({
                    getKey: (t) => "".concat(t, "_").concat(e.clipId),
                    toggleLike() {
                        if (!(0, n._n)(e)) return;
                        let { library: t, user: i } = (0, n.Zn)(e);
                        if (i.isAuthorized)
                            return t.toggleClipLike({
                                entityId: e.clipId,
                                userId: i.account.data.uid,
                            });
                    },
                }));
        },
        61977: (e) => {
            e.exports = {
                root: "CommonTrack_root__i6shE",
                root_disabled: "CommonTrack_root_disabled__vDyCm",
                root_current: "CommonTrack_root_current__MNrpS",
                ripple: "CommonTrack_ripple__wnpUs",
            };
        },
        62300: (e) => {
            e.exports = {
                root: "ContextMenuPlaylistsList_root__Greny",
                listPlaylist: "ContextMenuPlaylistsList_listPlaylist__0oWLm",
                shimmerEndItem:
                    "ContextMenuPlaylistsList_shimmerEndItem__1K0_w",
                favouritesPlaylistItem:
                    "ContextMenuPlaylistsList_favouritesPlaylistItem__qYrTR",
                icon: "ContextMenuPlaylistsList_icon__Fhxnh",
            };
        },
        66928: (e, t, i) => {
            "use strict";
            i.d(t, { S: () => l });
            var a = i(48509);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === a.K.Generative;
            }
        },
        67366: (e, t, i) => {
            "use strict";
            i.d(t, { AudiobookMeta: () => b });
            var a = i(33008),
                l = i(85896),
                r = i(97531),
                s = i(66268),
                n = i(73827),
                o = i(96560),
                c = i(18064),
                d = i(31342),
                u = i(77868),
                m = i(70879),
                k = i(61744),
                _ = i(79169),
                p = i(18740),
                v = i(39791),
                C = i(50970),
                x = i(93915),
                g = i(97790),
                y = i(9138),
                T = i.n(y),
                h = i(26976),
                A = i.n(h);
            let b = (0, r.PA)((e) => {
                var t, i, r, y;
                let {
                        track: h,
                        className: b,
                        withAuthor: j = !1,
                        withSecondaryColor: I = !1,
                        withListeningProgress: N = !1,
                        captionSize: L = "m",
                        explicitSize: P = "xs",
                        withExplicitMark: f = !0,
                        titleContainerClassName: D,
                        textClassName: E,
                        playContextParams: S,
                        withTimeLeftText: R = !0,
                        ignoreDislikedStyles: M,
                        albumArtists: O,
                        withCustomTooltip: w = !0,
                        hasLineClamp: K = !0,
                        withSavingQueryParams: B,
                        beforeTitle: U,
                        afterTitle: G,
                        withContextMenuArtists: z,
                        withArtistLink: X = !0,
                    } = e,
                    {
                        sonataState: $,
                        settings: { isMobile: F },
                    } = (0, _.Pjs)(),
                    { formatMessage: Y } = (0, n.A)(),
                    q = (0, C.$)({ withCustomTooltip: w }),
                    V = (0, x.useOnTrackLinkClick)({
                        track: h,
                        withSavingQueryParams: B,
                        entityType: _.nPY.AUDIOBOOK,
                    }),
                    H = !!(
                        N &&
                        S &&
                        h.shouldRememberPosition &&
                        h.streamProgress &&
                        h.durationMs
                    ),
                    W =
                        h.id === (null == (t = $.entityMeta) ? void 0 : t.id) &&
                        (null == (r = $.entityMeta) ||
                        null == (i = r.streamProgress)
                            ? void 0
                            : i.endPositionSec),
                    Q = (0, g.d)(H, h.streamProgress, W),
                    Z = (0, s.useMemo)(
                        () => (0, v.s)(h.artists, O),
                        [h.artists, O, h.id],
                    ),
                    J = Z.length > 0 && j && !Q,
                    ee = (0, s.useCallback)(
                        (e) =>
                            (0, a.jsx)(d.m_, {
                                enabled: q && !F,
                                offsetOptions: 4,
                                placement: "top",
                                text: h.title,
                                hoverSettings: _.VP$,
                                children: (0, a.jsx)(u.Caption, {
                                    className: T().title,
                                    type: "entity",
                                    size: L,
                                    variant: "span",
                                    title: q ? void 0 : h.title,
                                    ...e,
                                    children: h.title,
                                }),
                            }),
                        [F, q, L, h.title],
                    ),
                    et = (0, s.useMemo)(() => {
                        if (h.isRemoved)
                            return (0, a.jsx)(o.A, {
                                id: "track-title.audiobook-not-found",
                            });
                        if (h.hasTrackLink) {
                            var e;
                            return (0, a.jsx)(p.N_, {
                                "aria-label": Y(
                                    { id: "entity-names.audiobook-name" },
                                    {
                                        bookName:
                                            null == (e = h.mainAlbum)
                                                ? void 0
                                                : e.title,
                                    },
                                ),
                                className: T().albumLink,
                                href: h.url,
                                title: q ? void 0 : h.title,
                                onClick: V,
                                ...(0, c.Am)(c.Kq.track.TRACK_TITLE),
                                children: ee(),
                            });
                        }
                        return ee((0, c.Am)(c.Kq.track.TRACK_TITLE));
                    }, [
                        h.isRemoved,
                        h.hasTrackLink,
                        null == (y = h.mainAlbum) ? void 0 : y.title,
                        h.title,
                        h.url,
                        ee,
                        Y,
                        q,
                        V,
                    ]),
                    ei = (0, s.useMemo)(() => +!!K, [K]);
                return (0, a.jsx)("div", {
                    className: (0, l.$)(
                        T().root,
                        {
                            [T().root_disabled]: !h.isAvailable,
                            [T().root_disliked]: h.isDisliked && !M,
                            [T().root_withSecondaryColor]: I,
                        },
                        b,
                    ),
                    children: (0, a.jsxs)("div", {
                        className: (0, l.$)(
                            T().metaContainer,
                            A().metaContainer,
                            { [A().metaContainer_oneLine]: !j },
                        ),
                        children: [
                            (0, a.jsxs)("div", {
                                className: (0, l.$)(
                                    T().titleContainer,
                                    D,
                                    A().titleContainer,
                                ),
                                children: [
                                    (0, a.jsxs)(u.Caption, {
                                        className: (0, l.$)(T().text, E),
                                        type: "entity",
                                        size: L,
                                        variant: "div",
                                        lineClamp: 1,
                                        children: [
                                            U,
                                            et,
                                            !h.isRemoved &&
                                                h.version &&
                                                (0, a.jsxs)(u.Caption, {
                                                    className: (0, l.$)(
                                                        T().text,
                                                        T().version,
                                                    ),
                                                    type: "entity",
                                                    size: L,
                                                    weight: "medium",
                                                    variant: "span",
                                                    title: q
                                                        ? void 0
                                                        : h.version,
                                                    children: [
                                                        "\xa0",
                                                        h.version,
                                                    ],
                                                }),
                                        ],
                                    }),
                                    h.explicitDisclaimer &&
                                        f &&
                                        (0, a.jsx)(p.Nq, {
                                            containerClassName:
                                                T().explicitMarkContainer,
                                            getDescriptionTexts:
                                                h.getDescriptionTexts,
                                            variant: h.explicitDisclaimer,
                                            className: T().explicitMark,
                                            size: P,
                                            trackId: h.id,
                                        }),
                                    G,
                                ],
                            }),
                            J &&
                                (0, a.jsx)(u.Caption, {
                                    type: "entity",
                                    size: L,
                                    variant: "div",
                                    lineClamp: 1,
                                    className: (0, l.$)(
                                        T().text,
                                        A().artists,
                                        E,
                                    ),
                                    children: (0, a.jsx)(m.iQ, {
                                        className: (0, l.$)(
                                            T().text,
                                            { [T().artists]: K },
                                            E,
                                        ),
                                        linkClassName: (0, l.$)(
                                            T().text,
                                            T().link,
                                        ),
                                        captionClassName: (0, l.$)(
                                            T().text,
                                            T().artistCaption,
                                        ),
                                        artists: Z,
                                        withLink: h.isNonUserGenerated && X,
                                        lineClamp: ei,
                                        captionSize: L,
                                        withContextMenu: z,
                                    }),
                                }),
                            H &&
                                h.streamProgress &&
                                S &&
                                (0, a.jsx)(k.Bg, {
                                    className: (0, l.$)(A().progress, {
                                        [A().progress_withPreviousInfo]: J,
                                        [A().progress_disabled]:
                                            !h.isAvailable || h.isDisliked,
                                    }),
                                    id: h.id,
                                    albumId: h.albumId,
                                    streamProgress: h.streamProgress,
                                    durationMs: h.durationMs || 0,
                                    playContextParams: S,
                                    withTimeLeftText: R,
                                }),
                        ],
                    }),
                });
            });
        },
        67872: (e, t, i) => {
            "use strict";
            i.d(t, { h: () => l });
            var a = i(79169);
            let l = (e) => {
                let t = Math.round((e || 0) / a.k7R);
                return (0, a.E4p)(t);
            };
        },
        71741: (e, t, i) => {
            "use strict";
            i.d(t, { TrackUgcUpload: () => v });
            var a = i(33008),
                l = i(85896),
                r = i(97531),
                s = i(66268),
                n = i(73827),
                o = i(96560),
                c = i(18064),
                d = i(44189),
                u = i(77868),
                m = i(61744),
                k = i(18740),
                _ = i(42559),
                p = i.n(_);
            let v = (0, r.PA)((e) => {
                var t;
                let { className: i, track: r } = e,
                    { formatMessage: _ } = (0, n.A)(),
                    v = null == (t = r.file) ? void 0 : t.name,
                    C = (0, s.useCallback)(() => {
                        r.abortUpload();
                    }, [r]),
                    x = (0, s.useCallback)(() => {
                        r.retryUpload();
                    }, [r]),
                    g = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(d.Button, {
                                variant: "text",
                                withRipple: !1,
                                "aria-label": _({ id: "ugc.cancel-upload" }),
                                color: "primary",
                                onClick: C,
                                ...(0, c.Am)(
                                    c.Kq.track.UGC_TRACK_CANCEL_UPLOAD_BUTTON,
                                ),
                                children: (0, a.jsx)(u.Caption, {
                                    variant: "span",
                                    size: "m",
                                    type: "text",
                                    className: p().button,
                                    children: (0, a.jsx)(o.A, {
                                        id: "ugc.cancel-upload",
                                    }),
                                }),
                            }),
                        [C, _],
                    ),
                    y = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(d.Button, {
                                variant: "text",
                                withRipple: !1,
                                "aria-label": _({ id: "ugc.repeat-upload" }),
                                color: "primary",
                                onClick: x,
                                ...(0, c.Am)(
                                    c.Kq.track.UGC_TRACK_RETRY_UPLOAD_BUTTON,
                                ),
                                children: (0, a.jsx)(u.Caption, {
                                    variant: "span",
                                    size: "m",
                                    type: "text",
                                    className: p().button,
                                    children: (0, a.jsx)(o.A, {
                                        id: "ugc.repeat-upload",
                                    }),
                                }),
                            }),
                        [_, x],
                    ),
                    T = (0, s.useMemo)(() => {
                        switch (r.loadingState) {
                            case m.pK.IDLE:
                            case m.pK.PREPARE:
                            case m.pK.UPLOADING:
                                return g;
                            case m.pK.REJECT:
                                return y;
                            default:
                                return null;
                        }
                    }, [g, y, r.loadingState]),
                    h = (0, s.useMemo)(() => {
                        switch (r.loadingState) {
                            case m.pK.IDLE:
                            case m.pK.PREPARE:
                            case m.pK.UPLOADING:
                                return (0, a.jsx)(u.Caption, {
                                    variant: "div",
                                    size: "m",
                                    className: p().status,
                                    ...(0, c.Am)(
                                        c.Kq.track
                                            .UGS_TRACK_UPLOADING_PENDING_STATUS_TEXT,
                                    ),
                                    children: (0, a.jsx)(o.A, {
                                        id: "ugc.track-uploading-pending-status",
                                    }),
                                });
                            case m.pK.PROCESSING:
                            case m.pK.RESOLVE:
                                return (0, a.jsx)(u.Caption, {
                                    variant: "div",
                                    size: "m",
                                    className: p().status,
                                    children: (0, a.jsx)(o.A, {
                                        id: "ugc.track-uploading-processing-status",
                                    }),
                                });
                            case m.pK.REJECT:
                                return (0, a.jsx)(u.Caption, {
                                    variant: "div",
                                    size: "m",
                                    className: p().status,
                                    ...(0, c.Am)(
                                        c.Kq.track
                                            .UGC_TRACK_UPLOADING_ERROR_STATUS_TEXT,
                                    ),
                                    children: (0, a.jsx)(o.A, {
                                        id: "ugc.track-uploading-error-status",
                                    }),
                                });
                            default:
                                return null;
                        }
                    }, [r.loadingState]);
                return (0, a.jsxs)(k.Cj, {
                    "aria-label": v,
                    className: (0, l.$)(p().root, p().card, p().important, i),
                    ...(0, c.Am)(c.Kq.track.UGC_TRACK),
                    children: [
                        (0, a.jsx)(k.q1, {
                            title: v,
                            radius: "xs",
                            className: p().playButton,
                        }),
                        (0, a.jsxs)("div", {
                            className: p().meta,
                            children: [
                                (0, a.jsx)(u.Caption, {
                                    variant: "div",
                                    size: "m",
                                    className: p().title,
                                    ...(0, c.Am)(c.Kq.track.UGC_TRACK_TITLE),
                                    children: v,
                                }),
                                h,
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: p().controls,
                            children: T,
                        }),
                    ],
                });
            });
        },
        72494: (e) => {
            e.exports = {
                root: "Disclaimer_root___gYw4",
                container: "Disclaimer_container__Tnsjy",
                title: "Disclaimer_title__9wHWb",
                text: "Disclaimer_text__bg6L1",
                link: "Disclaimer_link__iGciq",
                buttons: "Disclaimer_buttons__5idgM",
                button: "Disclaimer_button__OmGNo",
                shimmer: "Disclaimer_shimmer__vg_D2",
            };
        },
        73508: (e, t, i) => {
            "use strict";
            i.d(t, { V: () => l, d: () => a });
            let a = (e) => String(e).split(":"),
                l = (e, t) => (t ? [e, t].join(":") : e);
        },
        75791: (e, t, i) => {
            "use strict";
            i.d(t, { TrackNonMusic: () => T });
            var a = i(33008),
                l = i(97531),
                r = i(85896),
                s = i(66268),
                n = i(18064),
                o = i(79169),
                c = i(18740),
                d = i(53831),
                u = i(99430),
                m = i(67366),
                k = i(36835),
                _ = i(94916),
                p = i(28223),
                v = i.n(p),
                C = i(81028);
            let x = (0, l.PA)((e) => {
                let {
                        track: t,
                        playContextParams: i,
                        className: l,
                        withDNDBlock: p,
                        isDragging: x,
                        draggingClassName: g,
                        withTimeLeftText: y,
                        ignoreDislikedStyles: T,
                        viewType: h = C.D.PLAYLIST,
                        position: A,
                        beforeTitle: b,
                        handleRemove: j,
                    } = e,
                    I = (0, o.Dx4)({
                        playContextParams: i,
                        entityId: t.entityId,
                    }),
                    {
                        settings: { isMobile: N },
                    } = (0, o.Pjs)(),
                    L = (0, s.useCallback)(
                        (e) =>
                            h === C.D.ALBUM
                                ? (0, a.jsx)(k.G, {
                                      track: t,
                                      position: A,
                                      className: v().playButtonCell,
                                      ...e,
                                  })
                                : (0, a.jsx)(c.q1, {
                                      isAvailable: t.isAvailable,
                                      isDisliked: t.isDisliked,
                                      coverUri: t.coverUri,
                                      title: t.title,
                                      className: v().playButtonCell,
                                      ignoreDislikedStyles: T,
                                      radius: "xs",
                                      ...e,
                                  }),
                        [T, A, h, t],
                    );
                return (0, a.jsx)(_.Track, {
                    className: (0, r.$)(l, {
                        [v().trackWithDots]: p,
                        [v().important]: p,
                    }),
                    track: t,
                    meta: (0, a.jsx)(m.AudiobookMeta, {
                        beforeTitle: b,
                        withAuthor: h === C.D.PLAYLIST,
                        explicitSize: "xxxs",
                        track: t,
                        playContextParams: i,
                        withListeningProgress: !0,
                        withTimeLeftText: y,
                        ignoreDislikedStyles: T,
                        withSavingQueryParams: !0,
                        withArtistLink: !N,
                    }),
                    playButtonCellRender: L,
                    controls: (0, a.jsx)(u.ControlsBar, {
                        track: t,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: T,
                        utmLink: i.contextData.utmLink,
                        handleRemove: j,
                    }),
                    beforeBlock: p
                        ? (0, a.jsx)(d.O, {
                              className: (0, r.$)(v().dots, g),
                              isDragging: x,
                          })
                        : void 0,
                    ...I,
                    ...(0, n.Am)(n.Kq.track.TRACK_AUDIOBOOK),
                });
            });
            var g = i(24598);
            let y = (0, l.PA)((e) => {
                    let {
                            track: t,
                            playContextParams: i,
                            withPodcastName: l = !1,
                            className: m,
                            withDNDBlock: k,
                            isDragging: p,
                            draggingClassName: C,
                            handleRemove: x,
                            withTimeLeftText: y,
                            ignoreDislikedStyles: T,
                            beforeTitle: h,
                        } = e,
                        A = (0, o.Dx4)({
                            playContextParams: i,
                            entityId: t.entityId,
                        }),
                        {
                            settings: { isMobile: b },
                        } = (0, o.Pjs)(),
                        j = (0, s.useCallback)(
                            (e) =>
                                (0, a.jsx)(c.q1, {
                                    isAvailable: t.isAvailable,
                                    isDisliked: t.isDisliked,
                                    coverUri: t.coverUri,
                                    title: t.title,
                                    className: v().playButtonCell,
                                    ignoreDislikedStyles: T,
                                    radius: "xs",
                                    ...e,
                                }),
                            [
                                T,
                                t.coverUri,
                                t.isAvailable,
                                t.isDisliked,
                                t.title,
                            ],
                        );
                    return (0, a.jsx)(_.Track, {
                        className: (0, r.$)(m, {
                            [v().trackWithDots]: k,
                            [v().important]: k,
                        }),
                        track: t,
                        meta: (0, a.jsx)(g.PodcastMeta, {
                            beforeTitle: h,
                            track: t,
                            playContextParams: i,
                            withPodcastName: l,
                            withListeningProgress: !0,
                            withTimeLeftText: y,
                            ignoreDislikedStyles: T,
                            explicitSize: "xxxs",
                            withAlbumTitleLink: !b,
                        }),
                        playButtonCellRender: j,
                        controls: (0, a.jsx)(u.ControlsBar, {
                            handleRemove: x,
                            track: t,
                            className: v().controlsBarCell,
                            ignoreDislikedStyles: T,
                            utmLink: i.contextData.utmLink,
                        }),
                        beforeBlock: k
                            ? (0, a.jsx)(d.O, {
                                  className: (0, r.$)(v().dots, C),
                                  isDragging: p,
                              })
                            : void 0,
                        ...A,
                        ...(0, n.Am)(n.Kq.track.TRACK_PODCAST),
                    });
                }),
                T = (0, l.PA)((e) => {
                    let t = e.track;
                    return t.isTrackAudiobook || t.isTrackFairyTale
                        ? (0, a.jsx)(x, { ...e })
                        : (0, a.jsx)(y, { ...e });
                });
        },
        76172: (e, t, i) => {
            "use strict";
            i.d(t, { TrackCard: () => L });
            var a = i(33008),
                l = i(85896),
                r = i(97531),
                s = i(66268),
                n = i(73827),
                o = i(48509),
                c = i(42213),
                d = i(42314),
                u = i(69476),
                m = i(54487),
                k = i(77868),
                _ = i(95592),
                p = i(70879),
                v = i(61744),
                C = i(79169),
                x = i(18740),
                g = i(97725),
                y = i(56951),
                T = i.n(y),
                h = i(96560),
                A = i(93967),
                b = i(18064),
                j = i(78016),
                I = i(86461);
            let N = (0, r.PA)((e) => {
                    let {
                            track: t,
                            handleLikeButtonClick: i,
                            handlePlayButtonClick: r,
                            isPlaying: n,
                        } = e,
                        { trailer: o, user: m } = (0, C.Pjs)(),
                        [k, _] = (0, s.useState)(!1),
                        [p, v] = (0, s.useState)(!1),
                        g = (0, C.PT7)(),
                        y = (0, C.Ftl)(),
                        N = (0, c.c)(() => {
                            _(!k), v(!k);
                        }),
                        L = (0, c.c)((e) => {
                            e.preventDefault(), e.stopPropagation();
                        }),
                        P = (0, c.c)((e) => {
                            if ((e.stopPropagation(), g()))
                                return void e.preventDefault();
                            o.openTrackTrailer(t.id), y(A.ky.Track, t.id);
                        }),
                        f = (0, d.L)(() => {
                            var e;
                            if (
                                null == t || null == (e = t.trailer)
                                    ? void 0
                                    : e.isAvailable
                            )
                                return (0, a.jsx)(
                                    x.nE,
                                    {
                                        children: (0, a.jsx)(x.kJ, {
                                            className: (0, l.$)(
                                                T().trailerButton,
                                                T().control,
                                            ),
                                            radius: "round",
                                            size: "s",
                                            iconSize: "xxs",
                                            onClick: P,
                                        }),
                                    },
                                    t.getKey("TrackCardTrailerTooltip"),
                                );
                        });
                    return (0, a.jsx)(u.hg, {
                        isVisible: k || p,
                        className: T().controls,
                        labelText: (0, a.jsx)(h.A, {
                            id: "entity-names.track",
                        }),
                        playControl: (0, a.jsx)(
                            x.DM,
                            {
                                className: (0, l.$)(
                                    T().playButton,
                                    T().control,
                                ),
                                buttonVariant: "default",
                                withHover: !1,
                                iconSize: "xl",
                                variant: "filled",
                                isPlaying: n,
                                onClick: r,
                            },
                            t.getKey("PlayButton"),
                        ),
                        likeControl: (0, a.jsx)(
                            x.cy,
                            {
                                className: (0, l.$)(
                                    T().likeButton,
                                    T().control,
                                ),
                                isLiked: t.isLiked,
                                onClick: i,
                                variant: "default",
                                size: "s",
                                iconSize: "xxs",
                                disabled: !m.isAuthorized,
                            },
                            t.getKey("LikeButton"),
                        ),
                        menuControl: (0, a.jsx)(
                            I.TrackContextMenu,
                            {
                                placement: "bottom",
                                track: t,
                                onOpenChange: N,
                                open: k,
                                onClick: L,
                                className: (0, l.$)(
                                    T().menuButton,
                                    T().control,
                                ),
                                icon: (0, a.jsx)(j.Icon, {
                                    size: "xxs",
                                    variant: "more",
                                }),
                                size: "s",
                                ...(0, b.Am)(
                                    b.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                ),
                            },
                            t.getKey("TrackContextMenu"),
                        ),
                        trailerControl: f,
                    });
                }),
                L = (0, r.PA)((e) => {
                    var t, i;
                    let {
                            className: r,
                            children: y,
                            track: h,
                            contentLinesCount: A,
                            overrideContextType: b,
                        } = e,
                        { from: j } = (0, C.fyy)(),
                        { track: I } = (0, C.Pjs)(),
                        { formatMessage: L } = (0, n.A)(),
                        [P, f] = (0, s.useState)(!1),
                        [D, E] = (0, s.useState)(!1),
                        {
                            sendLikeSearchFeedback: S,
                            sendPlaySearchFeedback: R,
                            sendNavigateSearchFeedback: M,
                        } = (0, C.zEv)(),
                        O = (0, v.KX)(h),
                        w = (0, C.ZpR)(
                            null !=
                                (i = null == (t = h.mainAlbum) ? void 0 : t.url)
                                ? i
                                : "",
                        ),
                        K = (0, C.ZpR)(h.url),
                        B = (0, C.brA)(),
                        U = (0, C.PT7)(),
                        G = (0, d.L)(() => {
                            var e;
                            let t = L(
                                    { id: "entity-names.track-name" },
                                    { trackName: h.title },
                                ),
                                i = h.isLiked
                                    ? L({ id: "entity-names.has-your-like" })
                                    : "";
                            return ""
                                .concat(t, " ")
                                .concat(null != (e = h.version) ? e : "", " ")
                                .concat(i);
                        }),
                        { isPlaying: z, togglePlay: X } = (0, C.Dx4)({
                            playContextParams: {
                                contextData: {
                                    type: o.K.Various,
                                    meta: { id: h.entityId },
                                    from: j,
                                    overrideContextType: b,
                                },
                                queueParams: { index: 0 },
                                loadContextMeta: !0,
                            },
                            entityId: h.entityId,
                        }),
                        $ = (0, c.c)(() => {
                            I.open({ trackId: h.id, albumId: h.albumId });
                        }),
                        F = (0, c.c)(() => {
                            P || z || (f(!0), null == R || R()), X();
                        }),
                        Y = (0, _.cp)({ album: h.mainAlbum, callback: w }),
                        q = (0, g.useTrackDisclaimer)({
                            track: h,
                            callback: K,
                        }),
                        V = (0, g.useTrackDisclaimer)({
                            track: h,
                            callback: $,
                        }),
                        H = (0, g.useTrackDisclaimer)({
                            track: h,
                            callback: F,
                        }),
                        W = (0, c.c)(() => {
                            U() || (H(), B(!z));
                        }),
                        Q = (0, c.c)(() => {
                            h.hasTrackLink && V();
                        }),
                        Z = (0, c.c)(() => {
                            D || h.isLiked || (E(!0), null == S || S()), O();
                        }),
                        J = (0, c.c)((e) => {
                            var t;
                            if (h.hasTrackLink) {
                                null == M || M(), q(e);
                                return;
                            }
                            h.hasAlbumLink &&
                                (null == (t = h.mainAlbum) ? void 0 : t.url) &&
                                Y(e);
                        }),
                        ee = (0, d.L)(() => {
                            var e, t, i;
                            return h.hasTrackLink
                                ? (0, a.jsx)(x.N_, {
                                      "aria-label": ""
                                          .concat(h.title, " ")
                                          .concat(
                                              null != (t = h.version) ? t : "",
                                          ),
                                      className: T().titleLink,
                                      href: h.url,
                                      onClick: J,
                                      children: h.title,
                                  })
                                : h.hasAlbumLink &&
                                    (null == (e = h.mainAlbum) ? void 0 : e.url)
                                  ? (0, a.jsx)(x.N_, {
                                        "aria-label": ""
                                            .concat(h.title, " ")
                                            .concat(
                                                null != (i = h.version)
                                                    ? i
                                                    : "",
                                            ),
                                        className: T().titleLink,
                                        href: h.mainAlbum.url,
                                        onClick: J,
                                        children: h.title,
                                    })
                                  : (0, a.jsx)(k.Caption, {
                                        className: T().title,
                                        variant: "span",
                                        children: h.title,
                                    });
                        }),
                        et = (0, d.L)(() => {
                            var e, t;
                            return h.hasAlbumLink &&
                                (null == (e = h.mainAlbum) ? void 0 : e.url)
                                ? (0, a.jsx)(x.N_, {
                                      href: h.mainAlbum.url,
                                      onClick: J,
                                      children: ""
                                          .concat(h.title, " ")
                                          .concat(
                                              null != (t = h.version) ? t : "",
                                          ),
                                  })
                                : null;
                        }),
                        ei = (0, d.L)(() => {
                            if (h.isAvailable)
                                return (0, a.jsx)(N, {
                                    track: h,
                                    isPlaying: z,
                                    handleLikeButtonClick: Z,
                                    handlePlayButtonClick: W,
                                });
                        });
                    return (0, a.jsx)(u.MN, {
                        className: (0, l.$)(T().root, r),
                        "aria-label": G,
                        explicitMarkComponent:
                            h.explicitDisclaimer &&
                            (0, a.jsx)(x.Nq, {
                                getDescriptionTexts: h.getDescriptionTexts,
                                variant: h.explicitDisclaimer,
                            }),
                        title: (0, a.jsxs)(k.Caption, {
                            className: (0, l.$)(T().titleContainer, {
                                [T().titleContainer_withVersion]: h.version,
                            }),
                            variant: "div",
                            type: "entity",
                            size: "s",
                            weight: "medium",
                            lineClamp: 2,
                            children: [
                                ee,
                                h.version &&
                                    (0, a.jsx)(k.Caption, {
                                        className: T().version,
                                        variant: "span",
                                        children: " ".concat(h.version),
                                    }),
                            ],
                        }),
                        srTitle: et,
                        contentLinesCount: A,
                        view: (0, a.jsx)(m.Paper, {
                            className: T().cover,
                            radius: "l",
                            withShadow: !0,
                            children: (0, a.jsxs)("div", {
                                className: (0, l.$)(T().coverBlock, {
                                    [T().coverBlock_withTrackLink]:
                                        h.hasTrackLink,
                                }),
                                onClick: Q,
                                children: [
                                    (0, a.jsx)(x.BW, {
                                        className: T().image,
                                        src: h.coverUri,
                                        size: 200,
                                        fit: "cover",
                                        alt: G,
                                        withAvatarReplace: !0,
                                        isAvailable: h.isAvailable,
                                        "aria-hidden": !0,
                                    }),
                                    ei,
                                ],
                            }),
                        }),
                        description: (0, a.jsx)(
                            p.iQ,
                            {
                                className: T().artists,
                                artists: h.artists,
                                lineClamp: 1,
                                linkClassName: T().artistLink,
                                captionSize: "s",
                                withLink: h.isNonUserGenerated,
                            },
                            h.getKey("description"),
                        ),
                        children: y,
                    });
                });
        },
        77010: (e, t, i) => {
            "use strict";
            i.d(t, { useSendEventOnClipClosed: () => n });
            var a = i(93967),
                l = i(48551),
                r = i(42213),
                s = i(79169);
            let n = () => {
                let e = (0, l.st)(),
                    { hash: t } = (0, l.gf)(),
                    i = (0, s.UlF)();
                return (0, r.c)((l) => {
                    if (!e) return;
                    let r = {
                            hash: t,
                            pageId: a.QT.VideoScreen,
                            mainObjectType: a.ky.Video,
                            mainObjectId: l,
                        },
                        s = (0, a.Fx)({
                            params: r,
                            logger: i,
                            context: "useSendEventOnClipClosed",
                        });
                    s && (0, a.XB)(e.evgenInstance, s);
                });
            };
        },
        78107: (e, t, i) => {
            "use strict";
            i.d(t, { useOnLikeClick: () => u });
            var a = i(33008),
                l = i(29318),
                r = i(66268),
                s = i(73827),
                n = i(60866),
                o = i(79169),
                c = i(18740);
            let d = (e) => {
                    let { clip: t, closeToast: i } = e;
                    return (0, a.jsx)(c.OM, {
                        entityVariant: c.cp.CLIP,
                        entityTitle: t.title,
                        collectionUrl: o.Zyd.collectionClips.href,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.thumbnail,
                    });
                },
                u = (e) => {
                    let {
                            user: t,
                            fullscreenVideoPlayer: i,
                            collection: u,
                        } = (0, o.Pjs)(),
                        { notify: m } = (0, o.lkh)(),
                        [k, _] = (0, r.useState)(!1),
                        { formatMessage: p } = (0, s.A)();
                    return (0, r.useCallback)(async () => {
                        if (!e) return;
                        let r = i.modal.isOpened
                                ? o.uQT.FULLSCREEN_INFO
                                : o.uQT.INFO,
                            s = i.modal.isOpened
                                ? o.uQT.FULLSCREEN_ERROR
                                : o.uQT.ERROR;
                        if (!t.isAuthorized)
                            return void m(
                                (0, a.jsx)(c.hT, {
                                    error: p({
                                        id: "authorization-messages.need-to-authorizate",
                                    }),
                                }),
                                { containerId: s },
                            );
                        if (k) return;
                        let v = { ...(0, l.HO)(e), isLiked: !e.isLiked };
                        _(!0);
                        let C = await e.toggleLike();
                        _(!1),
                            u.clips.reset(),
                            C === n.f.OK
                                ? m((0, a.jsx)(d, { clip: v }), {
                                      containerId: r,
                                  })
                                : m(
                                      (0, a.jsx)(c.hT, {
                                          error: p({
                                              id: "error-messages.error-during-action",
                                          }),
                                      }),
                                      { containerId: s },
                                  );
                    }, [e, t.isAuthorized, k, p, m, i.modal.isOpened, u.clips]);
                };
        },
        79372: (e, t, i) => {
            "use strict";
            i.d(t, { TrailerTrackAlbum: () => _ });
            var a = i(33008),
                l = i(97531),
                r = i(66268),
                s = i(18064),
                n = i(79169),
                o = i(99430),
                c = i(6742),
                d = i(36835),
                u = i(94916),
                m = i(85201),
                k = i.n(m);
            let _ = (0, l.PA)((e) => {
                let {
                        track: t,
                        albumArtists: i,
                        position: l,
                        playContextParams: m,
                        withLightning: _,
                        onPlayClick: p,
                        onLikeClick: v,
                        onDislikeClick: C,
                    } = e,
                    {
                        trailer: x,
                        settings: { isMobile: g },
                        album: y,
                    } = (0, n.Pjs)(),
                    T = (0, n.Dx4)({
                        playContextParams: m,
                        entityId: t.entityId,
                        sonataState: x.state,
                        playbackId: n.V_r.TRAILER,
                    }),
                    h = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(d.G, {
                                track: t,
                                position: l,
                                className: k().playButtonCell,
                                ...e,
                            }),
                        [t, l],
                    );
                return (0, a.jsx)(u.Track, {
                    track: t,
                    withLightning: _,
                    meta: (0, a.jsx)(c.TrackMeta, {
                        withArtistLink: !g,
                        albumArtists: i,
                        track: t,
                        withSavingQueryParams: y.id === t.albumId,
                    }),
                    playButtonCellRender: h,
                    onPlayClick: p,
                    controls: (0, a.jsx)(o.ControlsBar, {
                        withLightning: _,
                        track: t,
                        className: k().controlsBarCell,
                        onLikeClick: v,
                        onDislikeClick: C,
                    }),
                    ...T,
                    ...(0, s.Am)(s.Kq.track.TRACK_ALBUM),
                });
            });
        },
        79551: (e) => {
            e.exports = {
                playButtonCell: "TrackChart_playButtonCell__cvY7u",
                controlsBarCell: "TrackChart_controlsBarCell__Xd5pn",
                chartCell: "TrackChart_chartCell__33_al",
            };
        },
        80582: (e, t, i) => {
            "use strict";
            i.d(t, { SearchTrackCard: () => g });
            var a = i(33008),
                l = i(85896),
                r = i(97531),
                s = i(66268),
                n = i(18064),
                o = i(48509),
                c = i(40178),
                d = i(6247),
                u = i(42213),
                m = i(88485),
                k = i(79169),
                _ = i(18740),
                p = i(97725),
                v = i(99430),
                C = i(24598),
                x = i(6742);
            let g = (0, r.PA)((e) => {
                var t;
                let { className: i, track: r, pageId: g } = e,
                    {
                        shouldShowBuySubscriptionModal: y,
                        showBuySubscriptionModal: T,
                    } = (0, k.qBP)(),
                    { ref: h, intersectionPropertyId: A } = (0, k.nMI)(),
                    {
                        track: b,
                        settings: { isMobile: j },
                    } = (0, k.Pjs)(),
                    { from: I } = (0, k.fyy)({ pageId: g }),
                    N = (0, k.brA)(),
                    {
                        isPlaying: L,
                        isCurrent: P,
                        togglePlay: f,
                        restartPlay: D,
                    } = (0, k.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: o.K.Various,
                                meta: { id: r.entityId },
                                from: I,
                                overrideContextType: c.b.Search,
                            },
                            queueParams: { index: 0, entityId: r.id },
                            loadContextMeta: !0,
                        },
                        entityId: r.entityId,
                    }),
                    E = (0, k.PT7)(),
                    S = (0, p.useTrackDisclaimer)({ track: r, callback: f }),
                    R = (0, s.useCallback)(() => {
                        b.open({ trackId: r.id, albumId: r.albumId });
                    }, [b, r.id, r.albumId]),
                    M = (0, p.useTrackDisclaimer)({ track: r, callback: R }),
                    { sendPlaySearchFeedback: O } = (0, k.zEv)(),
                    [w, K] = (0, s.useState)(!1),
                    B = (0, u.c)(() => {
                        if (!E()) {
                            if (y) return void T();
                            w || L || (K(!0), null == O || O()), S(), N(!L);
                        }
                    }),
                    U = (0, u.c)(() => {
                        if (L) return void D();
                        B();
                    }),
                    G = (0, u.c)((e) => {
                        if (!r.isAvailable && !r.hasModalAccess) {
                            y && r.isAvailableOnlyForPlus && T();
                            return;
                        }
                        return y
                            ? void T()
                            : ((0, m.P)(e, _.$f.ripple), 2 === e.detail)
                              ? void U()
                              : void (1 === e.detail && r.hasTrackLink && M());
                    }),
                    z = (0, s.useCallback)(
                        (e) =>
                            (0, a.jsx)(_.q1, {
                                isAvailable: r.isAvailable,
                                isDisliked: r.isDisliked,
                                coverUri: r.coverUri,
                                title: r.title,
                                className: _.$f.playButtonCell,
                                radius: "xs",
                                ...e,
                            }),
                        [r],
                    ),
                    X =
                        null == z
                            ? void 0
                            : z({
                                  onPlayButtonClick: B,
                                  isPlaying: L,
                                  isCurrent: P,
                              });
                return (0, a.jsxs)(_.Cj, {
                    ref: h,
                    "data-intersection-property-id": A,
                    className: (0, l.$)(_.$f.root, i),
                    "aria-label": ""
                        .concat(r.artistsNames, " ")
                        .concat(r.title, " ")
                        .concat(null != (t = r.version) ? t : ""),
                    onClick: G,
                    ...(0, n.Am)(n.Kq.track.SEARCH_TRACK_CARD),
                    children: [
                        X,
                        r.type === d.S.PODCAST
                            ? (0, a.jsx)(C.PodcastMeta, {
                                  track: r,
                                  playContextParams: {
                                      contextData: {
                                          type: o.K.Various,
                                          meta: { id: r.entityId },
                                          from: I,
                                      },
                                      queueParams: { index: 0 },
                                      loadContextMeta: !0,
                                  },
                                  withPodcastName: !0,
                                  withListeningProgress: !0,
                                  withAlbumTitleLink: !j,
                              })
                            : (0, a.jsx)(x.TrackMeta, {
                                  withArtistLink: !j,
                                  track: r,
                              }),
                        (0, a.jsx)(v.ControlsBar, {
                            className: _.$f.controlsBarCell,
                            track: r,
                        }),
                    ],
                });
            });
        },
        80961: (e, t, i) => {
            "use strict";
            i.d(t, { useWithClips: () => l });
            var a = i(79169);
            let l = () => {
                let {
                    settings: { isMobile: e },
                } = (0, a.Pjs)();
                return !e;
            };
        },
        81028: (e, t, i) => {
            "use strict";
            i.d(t, { D: () => a });
            var a = (function (e) {
                return (e.ALBUM = "album"), (e.PLAYLIST = "playlist"), e;
            })({});
        },
        85201: (e) => {
            e.exports = {
                playButtonCell: "TrackAlbum_playButtonCell__pLJte",
                controlsBarCell: "TrackAlbum_controlsBarCell__XUUCc",
            };
        },
        86461: (e, t, i) => {
            "use strict";
            i.d(t, { TrackContextMenu: () => ec });
            var a = i(33008),
                l = i(85896),
                r = i(29318),
                s = i(97531),
                n = i(66268),
                o = i(73827),
                c = i(96560),
                d = i(93967),
                u = i(18064),
                m = i(58624),
                k = i(66928),
                _ = i(42213),
                p = i(78016),
                v = i(66098),
                C = i(95592),
                x = i(60030),
                g = i(28996),
                y = i(61744),
                T = i(79169),
                h = i(18740),
                A = i(98627),
                b = i(51786);
            let j = (0, s.PA)((e) => {
                let { track: t } = e,
                    {
                        modals: { ugcTrackEditModal: i },
                    } = (0, T.Pjs)(),
                    l = (0, n.useCallback)(() => {
                        i.open(t);
                    }, [t, i]);
                return (0, a.jsx)(v.Dr, {
                    onClick: l,
                    icon: (0, a.jsx)(p.Icon, { variant: "edit", size: "xxs" }),
                    ...(0, u.Am)(u.Kq.track.TRACK_CONTEXT_MENU_UGC_EDIT_BUTTON),
                    children: (0, a.jsx)(c.A, { id: "interface-actions.edit" }),
                });
            });
            var I = i(70879),
                N = i(51389),
                L = i.n(N);
            let P = (0, s.PA)((e) => {
                    let { className: t, artist: i } = e,
                        { fullscreenPlayer: l } = (0, T.Pjs)(),
                        r = (0, T.ZpR)(i.url),
                        s = (0, _.c)((e) => {
                            r(e), l.modal.close();
                        });
                    return (0, a.jsx)(v.Dr, {
                        className: t,
                        onClick: s,
                        icon: (0, a.jsx)(p.Icon, {
                            className: L().navigateToAlbumIcon,
                            variant: "artist",
                            size: "xxs",
                        }),
                        children: (0, a.jsx)(c.A, {
                            id: "interface-actions.navigate-to-artist",
                        }),
                    });
                }),
                f = (0, s.PA)((e) => {
                    let { className: t, artists: i } = e,
                        {
                            settings: { isMobile: l },
                        } = (0, T.Pjs)(),
                        { formatMessage: r } = (0, o.A)();
                    return 1 === i.length && i[0]
                        ? (0, a.jsx)(P, { className: t, artist: i[0] })
                        : (0, a.jsx)(v.W1, {
                              isMobile: l,
                              icon: (0, a.jsx)(p.Icon, {
                                  variant: "artist",
                                  size: "xxs",
                              }),
                              label: r({
                                  id: "interface-actions.navigate-to-artists",
                              }),
                              ariaLabel: r({
                                  id: "interface-actions.navigate-to-artists",
                              }),
                              ...(0, u.Am)(
                                  u.Kq.track
                                      .TRACK_CONTEXT_MENU_NAVIGATE_TO_ARTIST,
                              ),
                              children: i.map((e) =>
                                  (0, a.jsx)(I.V8, { artist: e }, e.id),
                              ),
                          });
                });
            var D = i(17846),
                E = i(97557),
                S = i(25911),
                R = i(37840),
                M = i(32436),
                O = i(42314),
                w = i(77868),
                K = i(4214),
                B = i(21408),
                U = i.n(B);
            let G = (e) => {
                let { playlist: t, track: i, autoFocus: l } = e,
                    { formatMessage: r } = (0, o.A)(),
                    s = (0, R.useAddTrackToPlaylist)(),
                    c = (0, K.h)(),
                    { isTrackInPlaylist: d, trackIndexInPlaylist: u } = ((
                        e,
                        t,
                    ) => {
                        var i, a;
                        let l = -1;
                        return (
                            (null == (i = e.tracks) ? void 0 : i.length) &&
                                (l =
                                    null == (a = e.tracks)
                                        ? void 0
                                        : a.findIndex((e) =>
                                              e.albumId
                                                  ? String(e.id) === t.id &&
                                                    e.albumId === t.albumId
                                                  : String(e.id) === t.id,
                                          )),
                            {
                                isTrackInPlaylist: l > -1,
                                trackIndexInPlaylist: l,
                            }
                        );
                    })(t, i),
                    m = (0, n.useCallback)(() => {
                        d
                            ? c({ playlist: t, track: i, trackIndex: u })
                            : s({ playlist: t, track: i });
                    }, [s, c, t, i, u, d]);
                return (0, a.jsxs)(v.Dr, {
                    autoFocus: l,
                    className: U().root,
                    onClick: m,
                    children: [
                        (0, a.jsx)(w.Caption, {
                            variant: "div",
                            lineClamp: 1,
                            children: t.title,
                        }),
                        d &&
                            (0, a.jsx)(p.Icon, {
                                className: U().icon,
                                size: "xxs",
                                variant: "check",
                                "aria-label": r({
                                    id: "entity-names.track-in-playlist",
                                }),
                            }),
                    ],
                });
            };
            var z = i(91342),
                X = i(12914),
                $ = i.n(X);
            let F = (e) => {
                    let { forwardRef: t, className: i, ...l } = e;
                    return (0, a.jsx)(v.Dr, {
                        className: i,
                        ref: t,
                        ...l,
                        children: (0, a.jsx)(z.Shimmer, {
                            isActive: !0,
                            className: $().shimmer,
                        }),
                    });
                },
                Y = (0, n.forwardRef)((e, t) => {
                    let { ...i } = e;
                    return (0, a.jsx)(F, { ...i, forwardRef: t });
                });
            var q = i(62300),
                V = i.n(q);
            let H = "EndlessFeed",
                W = (0, s.PA)((e) => {
                    var t, i, r, s, d;
                    let { track: u } = e,
                        { user: m, contextMenuPlaylists: k } = (0, T.Pjs)(),
                        { formatMessage: C } = (0, o.A)(),
                        x = (0, y.KX)(u),
                        g = (0, n.useRef)(null),
                        { isIntersecting: h } =
                            null !=
                            (r = (0, M.BL)(
                                [g],
                                { preflightCheck: !1 },
                                k.isLoading,
                            )[H])
                                ? r
                                : {},
                        A = Math.ceil(
                            (null !=
                            (s = null == (t = k.pager) ? void 0 : t.total)
                                ? s
                                : 0) / 20,
                        ),
                        b =
                            null !=
                            (d = null == (i = k.pager) ? void 0 : i.page)
                                ? d
                                : 0,
                        j = (0, _.c)((e) => {
                            m.account.data.uid &&
                                k.getData({
                                    userId: m.account.data.uid,
                                    page: e,
                                    pageSize: 20,
                                });
                        });
                    (0, n.useEffect)(() => {
                        h && j(b + 1);
                    }, [h, j]);
                    let I = (0, n.useMemo)(() => {
                            if (!u.isTrackNonMusic && k.isResolved)
                                return (0, a.jsxs)(v.Dr, {
                                    className: V().favouritesPlaylistItem,
                                    onClick: x,
                                    children: [
                                        (0, a.jsx)(c.A, {
                                            id: "entity-names.liked-playlist",
                                        }),
                                        u.isLiked &&
                                            (0, a.jsx)(p.Icon, {
                                                className: V().icon,
                                                size: "xxs",
                                                variant: "check",
                                                "aria-label": C({
                                                    id: "entity-names.track-in-playlist",
                                                }),
                                            }),
                                    ],
                                });
                        }, [k.isResolved, x, u, C]),
                        N = (0, O.L)(() => {
                            let e = k.items.filter((e) => null !== e);
                            if (0 !== e.length)
                                return e.map((e, t) => {
                                    if (e.kind === S.ji.LIKE) return;
                                    let i =
                                        b + 1 === A &&
                                        t ===
                                            k.items.length -
                                                (k.items.length % 20);
                                    return (0, a.jsx)(
                                        G,
                                        { autoFocus: i, track: u, playlist: e },
                                        e.uuid,
                                    );
                                });
                        });
                    return (0, a.jsx)("div", {
                        className: V().root,
                        children: (0, a.jsxs)("div", {
                            className: V().listPlaylist,
                            children: [
                                I,
                                N,
                                !k.isResolved &&
                                    Array.from({ length: 10 }, (e, t) =>
                                        (0, a.jsx)(Y, {}, t),
                                    ),
                                (0, a.jsx)(Y, {
                                    className: (0, l.$)({
                                        [V().shimmerEndItem]: b + 1 === A,
                                    }),
                                    ref: g,
                                    "data-intersection-property-id": H,
                                }),
                            ],
                        }),
                    });
                });
            var Q = i(17292),
                Z = i.n(Q);
            let J = (0, s.PA)((e) => {
                let { track: t } = e,
                    { user: i, contextMenuPlaylists: l } = (0, T.Pjs)(),
                    r = ((e) => {
                        let { createPlaylist: t, fullscreenPlayer: i } = (0,
                            T.Pjs)(),
                            { notify: l } = (0, T.lkh)(),
                            r = (0, D.useRouter)(),
                            { formatMessage: s } = (0, o.A)(),
                            n = (0, R.useAddTrackToPlaylist)(),
                            c = (0, _.c)(async (e) => {
                                var i;
                                if (
                                    (await t.create({
                                        title: s({
                                            id: "entity-names.new-playlist",
                                        }),
                                        visibility: E.L.PUBLIC,
                                    }),
                                    !(null == t || null == (i = t.meta)
                                        ? void 0
                                        : i.uuid))
                                )
                                    return null;
                                if (
                                    (await n({
                                        playlist: t.meta,
                                        track: e,
                                        withPageRefresh: !1,
                                        withFailNotification: !1,
                                        withSuccessNotification: !1,
                                    })) === S.Y9.OK
                                ) {
                                    let { href: e } = (0, T.uvd)(
                                        "/playlists/:playlistUuid",
                                        {
                                            params: {
                                                playlistUuid: t.meta.uuid,
                                            },
                                        },
                                    );
                                    return t.reset(), e;
                                }
                                return null;
                            });
                        return (0, _.c)(async () => {
                            let t = await c(e);
                            t
                                ? (i.modal.isOpened && i.modal.close(),
                                  r.push(t))
                                : l((0, a.jsx)(S.pw, {}), {
                                      containerId: i.modal.isOpened
                                          ? T.uQT.FULLSCREEN_ERROR
                                          : T.uQT.ERROR,
                                  });
                        });
                    })(t),
                    { formatMessage: s } = (0, o.A)(),
                    d = (0, n.useCallback)(async () => {
                        i.account.data.uid &&
                            (await l.getData({
                                userId: i.account.data.uid,
                                page: 0,
                                pageSize: 20,
                            }));
                    }, [l, i.account.data.uid]);
                return (
                    (0, n.useEffect)(
                        () => () => {
                            l.reset();
                        },
                        [l],
                    ),
                    (0, a.jsxs)(v.W1, {
                        offsetOptions: 3,
                        onShow: d,
                        icon: (0, a.jsx)(p.Icon, {
                            variant: "addToPlaylist",
                            size: "xxs",
                        }),
                        label: s({
                            id: "playlist-actions.add-track-to-playlist",
                        }),
                        ariaLabel: s({
                            id: "playlist-actions.add-track-to-playlist",
                        }),
                        disabled: !i.isAuthorized,
                        menuClassName: Z().menu,
                        listClassName: Z().listMenu,
                        ...(0, u.Am)(
                            u.Kq.track
                                .TRACK_CONTEXT_MENU_ADD_TO_PLAYLIST_BUTTON,
                        ),
                        children: [
                            (0, a.jsx)(v.Dr, {
                                onClick: r,
                                icon: (0, a.jsx)(p.Icon, {
                                    variant: "add",
                                    size: "xxs",
                                }),
                                children: (0, a.jsx)(c.A, {
                                    id: "playlist-actions.create-playlist",
                                }),
                            }),
                            (0, a.jsx)(W, { track: t }),
                        ],
                    })
                );
            });
            var ee = i(47635),
                et = i(73508),
                ei = i(49444),
                electronBridge = i(77575),
                ea = i(42795),
                el = i.n(ea);
            let er = (0, s.PA)((e) => {
                let { track: t } = e,
                    i = (0, T.jRO)(),
                    {
                        slam: { isOfflineModeEnabled: l },
                    } = (0, T.Pjs)(),
                    r = (0, ei.j)(),
                    s = (0, T.eGp)(),
                    o = (0, n.useCallback)(() => {
                        var e, a, n;
                        if (t.isDownloaded) {
                            null == (a = i.tracksController) ||
                                a.deleteTrack(t.entityId);
                            let e =
                                null == s
                                    ? void 0
                                    : s.state.queueState.entityList.value.findIndex(
                                          (e) => {
                                              let { entity: i } = e;
                                              if ((0, ee.b)(i)) {
                                                  var a, l;
                                                  return (
                                                      t.entityId ===
                                                      (0, et.V)(
                                                          i.data.meta.id,
                                                          null ==
                                                              (l =
                                                                  i.data.meta
                                                                      .albums) ||
                                                              null == (a = l[0])
                                                              ? void 0
                                                              : a.id,
                                                      )
                                                  );
                                              }
                                              return !1;
                                          },
                                      );
                            void 0 !== e &&
                                l &&
                                (null == s || s.hide({ positions: [e] })),
                                r.count(T.xQR.TRACK_DELETE, T.l6e);
                            return;
                        }
                        if (t.isDownloading) {
                            null == (n = i.tracksController) ||
                                n.stopDownload(t.entityId);
                            return;
                        }
                        null == (e = i.tracksController) ||
                            e.download(t.entityId),
                            r.count(T.xQR.TRACK_DOWNLOAD, T.l6e);
                    }, [
                        t.isDownloaded,
                        t.isDownloading,
                        t.entityId,
                        i.tracksController,
                        r,
                        s,
                        l,
                    ]),
                    d = (0, n.useMemo)(
                        () =>
                            t.isDownloaded
                                ? (0, a.jsx)(c.A, {
                                      id: "offline.delete-from-device",
                                  })
                                : t.isDownloading
                                  ? (0, a.jsx)(c.A, {
                                        id: "offline.stop-downloading",
                                    })
                                  : (0, a.jsx)(c.A, { id: "offline.download" }),
                        [t.isDownloaded, t.isDownloading],
                    ),
                    m = (0, n.useMemo)(
                        () =>
                            t.isDownloaded
                                ? (0, a.jsx)(p.Icon, {
                                      variant: "upload",
                                      size: "xxs",
                                  })
                                : t.isDownloading
                                  ? (0, a.jsx)(h.AD, {
                                        value: t.downloadingProgress,
                                        size: 20,
                                        withCancelIcon: !0,
                                        className: el().downloadingProgress,
                                        progressBarClassName: el().progress,
                                        cancelIconClassName: el().cancelIcon,
                                    })
                                  : (0, a.jsx)(p.Icon, {
                                        variant: "download",
                                        size: "xxs",
                                    }),
                        [
                            t.downloadingProgress,
                            t.isDownloaded,
                            t.isDownloading,
                        ],
                    );
                return (0, a.jsx)(v.Dr, {
                    onClick: o,
                    icon: m,
                    className: el().root,
                    ...(0, u.Am)(u.S7.CONTEXT_MENU_DOWNLOAD_BUTTON),
                    children: d,
                });
            });
            let downloadTrackToFile = (0, s.PA)((e) => {
                let { track: track } = e,

                    trackName = (0, n.useMemo)(
                        () => {
                            return `${track.artists.map(artist => artist.name).join(', ')} — ${track.title}`;
                        },
                        [track],
                    ),

                    o = (0, n.useCallback)(() => {
                        electronBridge.sendDownloadTrack(track?.id, trackName);
                    }, [trackName]);
                return (0, a.jsx)(v.Dr, {
                    onClick: o,
                    icon: (0, a.jsx)(p.Icon, {
                        variant: "download",
                        size: "xxs",
                    }),
                    className: el().root,
                    ...(0, u.Am)(u.S7.CONTEXT_MENU_DOWNLOAD_BUTTON),
                    children: 'Скачать в файл',
                });
            });
            var es = i(56863),
                en = i.n(es);
            let eo = (0, s.PA)((e) => {
                    let { track: t } = e,
                        {
                            settings: { isMobile: i },
                        } = (0, T.Pjs)();
                    return t.isUGC && i
                        ? (0, a.jsxs)("div", {
                              className: en().ugcLabel,
                              children: [
                                  (0, a.jsx)(p.Icon, {
                                      variant: "eye_crossed",
                                      size: "xxs",
                                  }),
                                  (0, a.jsx)(w.Caption, {
                                      variant: "span",
                                      size: "s",
                                      children: (0, a.jsx)(c.A, {
                                          id: "ugc.track-description",
                                      }),
                                  }),
                              ],
                          })
                        : null;
                }),
                ec = (0, s.PA)((e) => {
                    var t, i, s, I, N, P, D, E, S, R, M, O, w, K, B, U, G, z, X;
                    let {
                            track: $,
                            onOpenChange: F,
                            open: Y,
                            placement: q,
                            isFullscreenMobile: V = !1,
                            icon: H,
                            size: W,
                            utmLink: Q,
                            handleRemove: Z,
                            dismissSettings: ee,
                            withTrailer: et = !0,
                            ...ei
                        } = e,
                        {
                            shouldShowBuySubscriptionModal: ea,
                            showBuySubscriptionModal: el,
                        } = (0, T.qBP)(),
                        es = (0, T.eGp)(),
                        {
                            settings: en,
                            currentTrackInfo: ec,
                            experiments: ed,
                            fullscreenPlayer: eu,
                            trailer: em,
                            sonataState: { entityMeta: ek, isVibeContext: e_ },
                            trackLyrics: ep,
                            album: ev,
                            track: eC,
                            user: ex,
                            slam: eg,
                            albumCPA: { isPlusCPAPlayerBarEnabled: ey },
                        } = (0, T.Pjs)(),
                        { formatMessage: eT } = (0, o.A)(),
                        { sendLikeSearchFeedback: eh } = (0, T.zEv)(),
                        [eA, eb] = (0, n.useState)(!1),
                        { modal: ej } = ep,
                        { modal: eI } = ec,
                        eN = (0, y.iQ)($, y.NM.NEXT),
                        eL = (0, y.iQ)($, y.NM.LAST),
                        eP = (0, y.KX)($),
                        ef = (0, y.mW)($),
                        eD = (0, C.KX)($.mainAlbum),
                        eE = (0, y.TH)($),
                        eS = (0, T.Ftl)(),
                        eR = "".concat(T.UfI.TRACK, "-").concat($.id),
                        eM = V || en.isMobile,
                        { shareLink: eO, pathname: ew } = (0, T.bNS)(
                            "/track/:trackId",
                            { params: { trackId: $.id } },
                        ),
                        eK = $.isUGC ? T.DwC.UGC_TRACK : T.DwC.TRACK,
                        eB = (0, g.A_)({
                            entityVariant: eK,
                            urlParams: { id: $.id },
                        }),
                        eU = (0, b.useTrackAboutModalTitle)($),
                        eG = (0, x.Cc)(),
                        ez = !!(null == (t = $.mainAlbum)
                            ? void 0
                            : t.isNonMusic),
                        eX =
                            (null == ek ? void 0 : ek.id) === $.id &&
                            (null == ek ? void 0 : ek.albumId) ===
                                (null == (i = $.mainAlbum) ? void 0 : i.id),
                        e$ = !!(
                            (0, m.i)(
                                null == es
                                    ? void 0
                                    : es.state.currentContext.value,
                            ) ||
                            (0, k.S)(
                                null == es
                                    ? void 0
                                    : es.state.currentContext.value,
                            )
                        ),
                        eF =
                            (null == ev || null == (s = ev.meta)
                                ? void 0
                                : s.listeningFinished) ||
                            (eX &&
                                (null == ek || null == (I = ek.streamProgress)
                                    ? void 0
                                    : I.hasEverFinished)) ||
                            (null == (N = $.streamProgress)
                                ? void 0
                                : N.hasEverFinished),
                        eY = ex.hasPlus && $.isAvailableForDownload,
                        eq = ed.checkExperiment(T.zal.WebEditorsFeatures, "on"),
                        {
                            canRemoveTrackFromPlaylist: eV,
                            removeTrackFromPlaylist: eH,
                        } = (0, A.useRemoveTrackFromPlaylistByIndex)(),
                        eW = (0, T.PT7)(),
                        eQ = ey(
                            null == (P = $.mainAlbum) ? void 0 : P.id,
                            null == (D = $.mainAlbum) ? void 0 : D.isNonMusic,
                        ),
                        { isPlaying: eZ, togglePlay: eJ } = (0, T.B0S)({
                            seeds:
                                null != (X = null == $ ? void 0 : $.seeds)
                                    ? X
                                    : [],
                            pageIdForFrom: T._Q$.RADIO,
                            blockIdForFrom: eR,
                            parentContextId: (
                                null == (E = $.mainAlbum) ? void 0 : E.id
                            )
                                ? "".concat($.mainAlbum.id, ":").concat($.id)
                                : $.entityId,
                        }),
                        e0 = (0, _.c)(async () => {
                            eA || $.isLiked || (eb(!0), null == eh || eh()),
                                await eP();
                        }),
                        e1 = (0, _.c)(() => {
                            if (ea && ex.isAuthorized) return void el();
                            !eW() && (eZ || eJ());
                        }),
                        e6 = (0, _.c)(() => {
                            if (ea && !eQ) return void el();
                            eW() ||
                                (em.setUtmLink(Q),
                                em.openTrackTrailer($.entityId),
                                eS(d.ky.Track, $.id));
                        }),
                        e9 = (0, _.c)(() => {
                            var e;
                            ec.setTrack({
                                id: $.id,
                                albumId:
                                    (null == (e = $.mainAlbum)
                                        ? void 0
                                        : e.id) || null,
                                isUGC: $.isUGC || null,
                            }),
                                eC.isOpened && eC.close(),
                                eI.open();
                        }),
                        e7 = (0, _.c)(() => {
                            $.clipIds && eG((0, r.HO)($.clipIds));
                        }),
                        e8 = (0, _.c)(() => {
                            if (ea && ex.isAuthorized) return void el();
                            ep.setTrack($),
                                eC.isOpened && eC.close(),
                                ej.open();
                        }),
                        e3 = (0, _.c)(() => {
                            if (ea && ex.isAuthorized) return void el();
                            eu.isSyncLyricsMode
                                ? eu.hideSyncLyrics()
                                : eu.showSyncLyrics();
                        }),
                        e2 = (0, _.c)(() => {
                            null == Z || Z(), null == F || F(!1);
                        }),
                        e4 = (0, _.c)(
                            () =>
                                $.isSyncLyricsAvailable &&
                                eu.modal.isOpened &&
                                eM,
                        ),
                        e5 = (0, _.c)(
                            () => $.isLyricsAvailable && !eu.modal.isOpened,
                        ),
                        te = (0, _.c)(() => {
                            var e;
                            return (
                                (null == (e = $.trailer)
                                    ? void 0
                                    : e.isAvailable) &&
                                !eu.modal.isOpened &&
                                et
                            );
                        }),
                        {
                            withSyncLyricsItem: tt,
                            withLyricsItem: ti,
                            withTrailerItem: ta,
                        } = (0, n.useMemo)(
                            () => ({
                                withSyncLyricsItem: e4(),
                                withLyricsItem: e5(),
                                withTrailerItem: te(),
                            }),
                            [
                                e4,
                                e5,
                                te,
                                $.isSyncLyricsAvailable,
                                $.isLyricsAvailable,
                                null == (S = $.trailer)
                                    ? void 0
                                    : S.isAvailable,
                            ],
                        );
                    (0, T.NBO)(Y);
                    let tl = !ez,
                        tr = $.isNonUserGenerated && !ez,
                        ts = !ez,
                        tn = !eM,
                        to = ez && eD,
                        tc =
                            $.isNonUserGenerated &&
                            ($.albums.length || $.mainAlbum),
                        td =
                            $.isNonUserGenerated &&
                            !!(null == (R = $.artists) ? void 0 : R.length) &&
                            ((null == (M = $.mainAlbum)
                                ? void 0
                                : M.isAudiobook) ||
                                (null == (O = $.mainAlbum)
                                    ? void 0
                                    : O.isAlbum) ||
                                $.isTrackAudiobook ||
                                $.isTrackMusic),
                        tu = !e$ && ek,
                        tm = eu.isPlayQueueMode && Z && !e_,
                        tk =
                            (0, x.df)() &&
                            $.isNonUserGenerated &&
                            (null == (w = $.clipIds) ? void 0 : w.length),
                        t_ = {
                            variant: T.Yxq.TRACK,
                            id: $.id,
                            title: $.title,
                            path: ew,
                            trackArtistName:
                                null == (K = $.mainArtist) ? void 0 : K.name,
                            trackArtistId:
                                null == (B = $.mainArtist) ? void 0 : B.id,
                            trackAlbumId: $.albumId,
                        };
                    return eg.isOfflineModeEnabled
                        ? (0, a.jsxs)(v.W1, {
                              isMobile: eM,
                              placement: q,
                              offsetOptions: 10,
                              open: Y,
                              onOpenChange: F,
                              icon: H,
                              size: W,
                              dismissSettings: ee,
                              containerProps: (0, u.Am)(
                                  u.Kq.track.TRACK_CONTEXT_MENU,
                              ),
                              ariaLabel: eT({
                                  id: "interface-actions.context-menu",
                              }),
                              variant: "text",
                              ...ei,
                              children: [
                                  eY && (0, a.jsx)(er, { track: $ }),
                                  $.isNonUserGenerated &&
                                      (0, a.jsx)(h.Ht, {
                                          shareLink: eO,
                                          entityMeta: t_,
                                      }),
                              ],
                          })
                        : (0, a.jsxs)(v.W1, {
                              dismissSettings: ee,
                              isMobile: eM,
                              placement: q,
                              offsetOptions: 10,
                              open: Y,
                              onOpenChange: F,
                              icon: H,
                              size: W,
                              containerProps: (0, u.Am)(
                                  u.Kq.track.TRACK_CONTEXT_MENU,
                              ),
                              ariaLabel: eT({
                                  id: "interface-actions.context-menu",
                              }),
                              variant: "text",
                              ...ei,
                              children: [
                                  (0, a.jsx)(eo, { track: $ }),
                                  eM &&
                                      (0, a.jsx)(h.Cu, {
                                          getDescriptionTexts:
                                              $.getDescriptionTexts,
                                          entityId: $.id,
                                      }),
                                  eq &&
                                      (0, a.jsx)(g.dx, {
                                          entityVariant: eK,
                                          adminUrl: eB,
                                      }),
                                  ez &&
                                      (0, a.jsx)(h.W$, {
                                          onClick: eE,
                                          isFinished: eF,
                                      }),
                                  tl &&
                                      (0, a.jsx)(h.TW, {
                                          onClick: e0,
                                          isLiked: $.isLiked,
                                          disabled: !ex.isAuthorized,
                                      }),
                                  ta && (0, a.jsx)(h.No, { onClick: e6 }),
                                  tr &&
                                      (0, a.jsx)(h.C6, {
                                          onClick: e1,
                                          variant: T.IGO.TRACK,
                                          disabled:
                                              !$.isAvailable || (eQ && eM),
                                          onOpenMenuChange: F,
                                      }),
                                  tk &&
                                      (0, a.jsx)(v.Dr, {
                                          onClick: e7,
                                          icon: (0, a.jsx)(p.Icon, {
                                              variant: "clip",
                                              size: "xxs",
                                          }),
                                          ...(0, u.Am)(
                                              u.Kq.track
                                                  .TRACK_CONTEXT_MENU_NAVIGATE_TO_CLIP_BUTTON,
                                          ),
                                          children: (0, a.jsx)(c.A, {
                                              id: "non-music.navigate-to-clip",
                                          }),
                                      }),
                                  eY && (0, a.jsx)(er, { track: $ }),
                                  window?.DEVICE_INFO?.os === 'win32' && (0, a.jsx)(downloadTrackToFile, { track: $ }), // TODO Remove platform check
                                  tu &&
                                      (0, a.jsx)(v.Dr, {
                                          onClick: eN,
                                          icon: (0, a.jsx)(p.Icon, {
                                              variant: "playNext",
                                              size: "xxs",
                                          }),
                                          disabled: !ex.isAuthorized,
                                          ...(0, u.Am)(
                                              u.Kq.track
                                                  .TRACK_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                          ),
                                          children: (0, a.jsx)(c.A, {
                                              id: "play-queue.play-next",
                                          }),
                                      }),
                                  tu &&
                                      (0, a.jsx)(v.Dr, {
                                          onClick: eL,
                                          icon: (0, a.jsx)(p.Icon, {
                                              variant: "playLast",
                                              size: "xxs",
                                          }),
                                          disabled: !ex.isAuthorized,
                                          ...(0, u.Am)(
                                              u.Kq.track
                                                  .TRACK_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                          ),
                                          children: (0, a.jsx)(c.A, {
                                              id: "play-queue.play-last",
                                          }),
                                      }),
                                  tt &&
                                      !eu.isSyncLyricsMode &&
                                      (0, a.jsx)(v.Dr, {
                                          className: (0, l.$)({
                                              [L().syncLyrics]: V,
                                          }),
                                          onClick: e3,
                                          icon: (0, a.jsx)(p.Icon, {
                                              variant: "syncLyrics",
                                              size: "xxs",
                                          }),
                                          disabled: !ex.isAuthorized,
                                          ...(0, u.Am)(
                                              u.Kq.track
                                                  .TRACK_CONTEXT_MENU_SHOW_SYNC_LYRICS_BUTTON,
                                          ),
                                          children: (0, a.jsx)(c.A, {
                                              id: "interface-actions.open-sync-lyrics",
                                          }),
                                      }),
                                  tt &&
                                      eu.isSyncLyricsMode &&
                                      (0, a.jsx)(v.Dr, {
                                          className: (0, l.$)({
                                              [L().syncLyrics]: V,
                                          }),
                                          onClick: e3,
                                          icon: (0, a.jsx)(p.Icon, {
                                              variant: "syncLyrics",
                                              size: "xxs",
                                          }),
                                          ...(0, u.Am)(
                                              u.Kq.track
                                                  .TRACK_CONTEXT_MENU_HIDE_SYNC_LYRICS_BUTTON,
                                          ),
                                          children: (0, a.jsx)(c.A, {
                                              id: "interface-actions.hide-sync-lyrics",
                                          }),
                                      }),
                                  tm &&
                                      (0, a.jsx)(v.Dr, {
                                          onClick: e2,
                                          icon: (0, a.jsx)(p.Icon, {
                                              variant: "bucket",
                                              size: "xxs",
                                          }),
                                          children: (0, a.jsx)(c.A, {
                                              id: "play-queue.delete-from-queue",
                                          }),
                                      }),
                                  ts &&
                                      (0, a.jsx)(h.DZ, {
                                          onClick: ef,
                                          isDisliked: $.isDisliked,
                                      }),
                                  tn && (0, a.jsx)(J, { track: $ }),
                                  ti &&
                                      (0, a.jsx)(v.Dr, {
                                          disabled: !ex.isAuthorized,
                                          onClick: e8,
                                          icon: (0, a.jsx)(p.Icon, {
                                              variant: "lyrics",
                                              size: "xxs",
                                          }),
                                          ...(0, u.Am)(
                                              u.Kq.track
                                                  .TRACK_CONTEXT_MENU_LYRICS_BUTTON,
                                          ),
                                          children: (0, a.jsx)(c.A, {
                                              id: "interface-actions.open-lyrics",
                                          }),
                                      }),
                                  $.isNonUserGenerated &&
                                      (0, a.jsx)(h.Ht, {
                                          shareLink: eO,
                                          entityMeta: t_,
                                      }),
                                  tc &&
                                      (null == (U = $.mainAlbum)
                                          ? void 0
                                          : U.url) &&
                                      (0, a.jsx)(h.f, {
                                          albumUrl: $.mainAlbum.url,
                                          albumType: $.mainAlbum.type,
                                          trackType: $.type,
                                      }),
                                  td &&
                                      $.artists[0] &&
                                      (0, a.jsx)(f, { artists: $.artists }),
                                  to &&
                                      (0, a.jsx)(h.Uc, {
                                          onClick: eD,
                                          isLiked:
                                              null == (G = $.mainAlbum)
                                                  ? void 0
                                                  : G.isLiked,
                                          albumType:
                                              null == (z = $.mainAlbum)
                                                  ? void 0
                                                  : z.type,
                                      }),
                                  $.isUGC && (0, a.jsx)(j, { track: $ }),
                                  eM &&
                                      eV &&
                                      (0, a.jsx)(v.Dr, {
                                          onClick: eH,
                                          icon: (0, a.jsx)(p.Icon, {
                                              variant: "bucket",
                                              size: "xxs",
                                          }),
                                          ...(0, u.Am)(
                                              u.Kq.track
                                                  .TRACK_CONTEXT_MENU_REMOVE_TRACK_FROM_PLAYLIST_BUTTON,
                                          ),
                                          children: (0, a.jsx)(c.A, {
                                              id: "playlist-actions.remove-from-playlist",
                                          }),
                                      }),
                                  !eM &&
                                      (0, a.jsx)(v.Dr, {
                                          onClick: e9,
                                          icon: (0, a.jsx)(p.Icon, {
                                              variant: "info",
                                              size: "xxs",
                                          }),
                                          ...(0, u.Am)(
                                              u.Kq.track
                                                  .TRACK_CONTEXT_MENU_ABOUT_TRACK_BUTTON,
                                          ),
                                          children: eU,
                                      }),
                              ],
                          });
                });
        },
        86868: (e, t, i) => {
            "use strict";
            i.d(t, { PromoLandingTrackAlbum: () => L });
            var a = i(33008),
                l = i(97531),
                r = i(66268),
                s = i(79169),
                n = i(85896),
                o = i(73827),
                c = i(78016),
                d = i(77868),
                u = i(61744),
                m = i(18740),
                k = i(67872),
                _ = i(29592),
                p = i.n(_);
            let v = (0, l.PA)((e) => {
                let { className: t, track: i, withLightning: l } = e,
                    {
                        settings: { isMobile: r },
                    } = (0, s.Pjs)(),
                    { formatMessage: _ } = (0, o.A)(),
                    v = (0, u.c5)(i);
                return (0, a.jsxs)("div", {
                    className: (0, n.$)(p().root, p().controls, t, {
                        [p().controls_disabled]: !i.isAvailable,
                    }),
                    children: [
                        l &&
                            (0, a.jsx)(c.Icon, {
                                "aria-label": _({
                                    id: "entity-names.popular-among-users",
                                }),
                                size: "xxs",
                                className: (0, n.$)(p().lightning, {
                                    [p().lightning_withOffset]: r,
                                }),
                                variant: "lightning",
                            }),
                        !i.isRemoved &&
                            i.isAvailable &&
                            (0, a.jsx)(m.cy, {
                                size: "xs",
                                iconSize: "xxs",
                                className: (0, n.$)(p().item, p().likeIcon),
                                isLiked: i.isLiked,
                                onClick: v,
                            }),
                        !r &&
                            "number" == typeof i.durationMs &&
                            (0, a.jsx)("div", {
                                className: (0, n.$)(
                                    p().item,
                                    p().contextMenuWrapper,
                                ),
                                children: (0, a.jsx)(d.Caption, {
                                    variant: "span",
                                    className: (0, n.$)(
                                        p().duration,
                                        p().alwaysVisibleDuration,
                                    ),
                                    type: "entity",
                                    size: "m",
                                    weight: "medium",
                                    children: (0, k.h)(i.durationMs),
                                }),
                            }),
                    ],
                });
            });
            var C = i(6742),
                x = i(36835),
                g = i(42213),
                y = i(88485),
                T = i(12963),
                h = i(97725),
                A = i(61977),
                b = i.n(A);
            let j = (0, l.PA)((e) => {
                let {
                        className: t,
                        track: i,
                        meta: l,
                        beforeBlock: r,
                        controls: o,
                        playButtonCellRender: c,
                        withLightning: d,
                        isPlaying: u,
                        isCurrent: k,
                        togglePlay: _,
                        restartPlay: p,
                        onPlayClick: v,
                        ...C
                    } = e,
                    { ref: x, intersectionPropertyId: A } = (0, s.nMI)(),
                    j = (0, s.brA)(),
                    I = (0, T.W)({ withLightning: d, track: i }),
                    {
                        settings: { isMobile: N },
                    } = (0, s.Pjs)(),
                    L = (0, h.useTrackDisclaimer)({ track: i, callback: _ }),
                    P = (0, g.c)(() => {
                        L(), j(!u), null == v || v(!u);
                    }),
                    f = (0, g.c)(() => {
                        if (u) return void p();
                        P();
                    }),
                    D = (0, g.c)((e) => {
                        if (i.isAvailable || i.hasModalAccess) {
                            if (((0, y.P)(e, b().ripple), N)) return void P();
                            2 === e.detail && f();
                        }
                    }),
                    E =
                        null == c
                            ? void 0
                            : c({
                                  onPlayButtonClick: P,
                                  isPlaying: u,
                                  isCurrent: k,
                              });
                return (0, a.jsxs)(m.Cj, {
                    ref: x,
                    "aria-label": I,
                    "data-intersection-property-id": A,
                    onClick: D,
                    className: (0, n.$)(
                        b().root,
                        { [b().root_disabled]: !i.isAvailable },
                        t,
                    ),
                    ...C,
                    children: [r, E, l, o],
                });
            });
            var I = i(37189),
                N = i.n(I);
            let L = (0, l.PA)((e) => {
                let {
                        track: t,
                        albumArtists: i,
                        position: l,
                        playContextParams: n,
                        withLightning: o,
                    } = e,
                    { promolanding: c } = (0, s.Pjs)(),
                    d = (0, s.Dx4)({
                        playContextParams: n,
                        entityId: t.entityId,
                        playbackId: s.V_r.PROMO_LANDING,
                        sonataState: c.state,
                    }),
                    u = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(x.G, {
                                track: t,
                                position: l,
                                className: N().playButtonCell,
                                withDislikeStyles: !1,
                                ...e,
                            }),
                        [t, l],
                    );
                return (0, a.jsx)(j, {
                    track: t,
                    withLightning: o,
                    meta: (0, a.jsx)(C.TrackMeta, {
                        ignoreDislikedStyles: !0,
                        withArtistLink: !1,
                        withAlbumLink: !1,
                        withTrackLink: !1,
                        albumArtists: i,
                        track: t,
                        withSavingQueryParams: !0,
                    }),
                    playButtonCellRender: u,
                    controls: (0, a.jsx)(v, {
                        withLightning: o,
                        track: t,
                        className: N().controlsBarCell,
                    }),
                    ...d,
                });
            });
        },
        88790: (e, t, i) => {
            "use strict";
            i.d(t, { TrackChart: () => p });
            var a = i(33008),
                l = i(97531),
                r = i(66268),
                s = i(18064),
                n = i(16285),
                o = i(79169),
                c = i(18740),
                d = i(99430),
                u = i(6742),
                m = i(94916),
                k = i(79551),
                _ = i.n(k);
            let p = (0, l.PA)((e) => {
                var t, i;
                let { track: l, playContextParams: k } = e,
                    p = (0, o.Dx4)({
                        playContextParams: k,
                        entityId: l.entityId,
                    }),
                    {
                        settings: { isMobile: v },
                    } = (0, o.Pjs)(),
                    C = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(c.q1, {
                                isAvailable: l.isAvailable,
                                isDisliked: l.isDisliked,
                                coverUri: l.coverUri,
                                title: l.title,
                                className: _().playButtonCell,
                                radius: "xs",
                                ...e,
                            }),
                        [l],
                    );
                return (0, a.jsx)(m.Track, {
                    track: l,
                    meta: (0, a.jsx)(u.TrackMeta, {
                        withArtistLink: !v,
                        track: l,
                    }),
                    beforeBlock: (0, a.jsx)(n.t1, {
                        withIcon: !0,
                        className: _().chartCell,
                        progress: null == (t = l.chart) ? void 0 : t.progress,
                        position: null == (i = l.chart) ? void 0 : i.position,
                        isDisliked: l.isDisliked,
                        isDisabled: !l.isAvailable,
                    }),
                    playButtonCellRender: C,
                    controls: (0, a.jsx)(d.ControlsBar, {
                        track: l,
                        className: _().controlsBarCell,
                    }),
                    ...p,
                    ...(0, s.Am)(s.Kq.track.TRACK_CHART),
                });
            });
        },
        89358: (e) => {
            e.exports = {
                root: "DisclaimerModal_root__sidbk",
                content: "DisclaimerModal_content___tRvp",
            };
        },
        93295: (e, t, i) => {
            "use strict";
            i.d(t, { TrackAlbum: () => _ });
            var a = i(33008),
                l = i(97531),
                r = i(66268),
                s = i(18064),
                n = i(79169),
                o = i(99430),
                c = i(6742),
                d = i(36835),
                u = i(94916),
                m = i(85201),
                k = i.n(m);
            let _ = (0, l.PA)((e) => {
                let {
                        track: t,
                        albumArtists: i,
                        position: l,
                        playContextParams: m,
                        withLightning: _,
                    } = e,
                    p = (0, n.Dx4)({
                        playContextParams: m,
                        entityId: t.entityId,
                    }),
                    {
                        settings: { isMobile: v },
                    } = (0, n.Pjs)(),
                    C = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(d.G, {
                                track: t,
                                position: l,
                                className: k().playButtonCell,
                                ...e,
                            }),
                        [t, l],
                    );
                return (0, a.jsx)(u.Track, {
                    track: t,
                    withLightning: _,
                    meta: (0, a.jsx)(c.TrackMeta, {
                        withArtistLink: !v,
                        albumArtists: i,
                        track: t,
                        withSavingQueryParams: !0,
                    }),
                    playButtonCellRender: C,
                    controls: (0, a.jsx)(o.ControlsBar, {
                        withLightning: _,
                        track: t,
                        className: k().controlsBarCell,
                        utmLink: m.contextData.utmLink,
                    }),
                    ...p,
                    ...(0, s.Am)(s.Kq.track.TRACK_ALBUM),
                });
            });
        },
        93915: (e, t, i) => {
            "use strict";
            i.d(t, { useOnTrackLinkClick: () => s });
            var a = i(42213),
                l = i(52931),
                r = i(79169);
            let s = (e) => {
                let {
                        track: t,
                        withSavingQueryParams: i,
                        entityType: s,
                        onNavigate: n,
                    } = e,
                    { fullscreenPlayer: o, album: c, track: d } = (0, r.Pjs)(),
                    u = c.id === t.albumId,
                    m = (0, r.pqZ)(),
                    k = (0, a.c)((e) => {
                        if (
                            (o.modal.isOpened && o.modal.close(),
                            null == n || n(),
                            u)
                        ) {
                            null == e || e.preventDefault();
                            let a = (0, r.jrm)();
                            i && a
                                ? m(t.getUrl(Object.fromEntries(a)))
                                : m(t.url),
                                d.open({ trackId: t.id, albumId: t.albumId });
                        } else null == e || e.stopPropagation();
                    }),
                    _ = (0, a.c)((e) => {
                        null == n || n(), null == e || e.stopPropagation();
                    }),
                    p = {
                        entityType: s,
                        isLegalRejected: t.isLegalRejected,
                        isUnsafeLegal: t.isUnsafeLegal,
                        entityId: t.id,
                    },
                    v = (0, l.kR)({ ...p, callback: k }),
                    C = (0, l.kR)({ ...p, callback: _ });
                return (0, r.Cz$)({ onClick: v, onCmdCtrlClick: C });
            };
        },
        94916: (e, t, i) => {
            "use strict";
            i.d(t, { Track: () => p });
            var a = i(33008),
                l = i(85896),
                r = i(97531),
                s = i(66268),
                n = i(42213),
                o = i(88485),
                c = i(79169),
                d = i(18740),
                u = i(12963),
                m = i(97725),
                k = i(61977),
                _ = i.n(k);
            let p = (0, r.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: r,
                        meta: k,
                        beforeBlock: p,
                        controls: v,
                        playButtonCellRender: C,
                        withLightning: x,
                        isPlaying: g,
                        isCurrent: y,
                        togglePlay: T,
                        restartPlay: h,
                        onPlayClick: A,
                        playButtonIconSize: b,
                        ...j
                    } = e,
                    {
                        shouldShowBuySubscriptionModal: I,
                        showBuySubscriptionModal: N,
                    } = (0, c.qBP)(),
                    {
                        track: L,
                        fullscreenPlayer: P,
                        settings: { isMobile: f },
                        album: D,
                        albumCPA: { isPlusCPAPlayerBarEnabled: E },
                    } = (0, c.Pjs)(),
                    { ref: S, intersectionPropertyId: R } = (0, c.nMI)(),
                    M = (0, c.brA)(),
                    O = (0, c.PT7)(),
                    w = (0, u.W)({ withLightning: x, track: r }),
                    K = (0, c.uyA)(r.entityId),
                    B = E(D.id, null == (t = D.meta) ? void 0 : t.isNonMusic),
                    U = r.isAvailable && I && !B,
                    G = (0, m.useTrackDisclaimer)({ track: r, callback: T }),
                    z = (0, n.c)(() => {
                        L.open({ trackId: r.id, albumId: r.albumId });
                    }),
                    X = (0, m.useTrackDisclaimer)({ track: r, callback: z }),
                    { sendPlaySearchFeedback: $ } = (0, c.zEv)(),
                    [F, Y] = (0, s.useState)(!1),
                    q = (0, n.c)(() => {
                        if (!O()) {
                            if (U) return void N();
                            F || g || (Y(!0), null == $ || $()),
                                G(),
                                M(!g),
                                null == A || A(!g);
                        }
                    }),
                    V = (0, n.c)(() => {
                        if (g) return void h();
                        q();
                    }),
                    H = (0, n.c)((e) => {
                        if (!r.isAvailable && !r.hasModalAccess) {
                            I && r.isAvailableOnlyForPlus && N();
                            return;
                        }
                        return U
                            ? void N()
                            : ((0, o.P)(e, _().ripple), f)
                              ? void q()
                              : 2 === e.detail
                                ? void V()
                                : void (
                                      1 === e.detail &&
                                      r.hasTrackLink &&
                                      !P.modal.isOpened &&
                                      X()
                                  );
                    }),
                    W =
                        null == C
                            ? void 0
                            : C({
                                  onPlayButtonClick: q,
                                  isPlaying: g,
                                  isCurrent: y,
                                  isLoading: K,
                                  playButtonIconSize: b,
                              });
                return (0, a.jsxs)(d.Cj, {
                    ref: S,
                    "aria-label": w,
                    "data-intersection-property-id": R,
                    onClick: H,
                    className: (0, l.$)(
                        _().root,
                        {
                            [_().root_disabled]: !r.isAvailable,
                            [_().root_current]: y && f,
                        },
                        i,
                    ),
                    ...j,
                    children: [p, W, k, v],
                });
            });
        },
        97725: (e, t, i) => {
            "use strict";
            i.d(t, { useTrackDisclaimer: () => n });
            var a = i(66268),
                l = i(54960),
                r = i(42213),
                s = i(79169);
            let n = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: n } = e,
                    {
                        disclaimerModalData: o,
                        modals: { disclaimerModal: c },
                    } = (0, s.Pjs)(),
                    d = (0, a.useRef)(String((0, l.A)())),
                    u = (0, a.useRef)(!1),
                    m = (0, s.NFA)().get(s.U2_);
                return (
                    (0, a.useEffect)(() => {
                        o.isUnsafeDisclaimerConfirmed &&
                            o.id === d.current &&
                            !u.current &&
                            (null == i || i(), (u.current = !0));
                    }, [i, o.isUnsafeDisclaimerConfirmed, o.id]),
                    (0, r.c)(async (e) => {
                        if (
                            (null == t ? void 0 : t.isLegalRejected) ||
                            (null == t ? void 0 : t.isUnsafeLegal)
                        ) {
                            let a = m.get(s.cYZ.ExEx);
                            if (
                                t.isUnsafeLegal &&
                                (null == a
                                    ? void 0
                                    : a.includes(
                                          ""
                                              .concat(s.nPY.TRACK, "_")
                                              .concat(
                                                  null == t ? void 0 : t.id,
                                              ),
                                      ))
                            ) {
                                null == i || i(e);
                                return;
                            }
                            null == e || e.preventDefault(),
                                await o.getDisclaimerData({
                                    entityId: t.id,
                                    entityType: s.nPY.TRACK,
                                    disclaimerId:
                                        null == t
                                            ? void 0
                                            : t.modalDisclaimerId,
                                }),
                                t.isUnsafeLegal && o.setType(s.YwF.UNSAFE),
                                n && o.setDisclaimerRejectHandler(n),
                                o.setId(d.current),
                                o.setEntityId(t.id),
                                o.setEntityType(s.nPY.TRACK),
                                (u.current = !1),
                                c.open();
                            return;
                        }
                        null == i || i(e);
                    })
                );
            };
        },
        97790: (e, t, i) => {
            "use strict";
            i.d(t, { d: () => l });
            var a = i(79169);
            let l = (e, t, i) => {
                let {
                    settings: { isMobile: l },
                } = (0, a.Pjs)();
                return !!(
                    l &&
                    e &&
                    (((null == t ? void 0 : t.endPositionSec) &&
                        t.endPositionSec > 0) ||
                        (null == t ? void 0 : t.hasEverFinished) ||
                        (i && i > 0))
                );
            };
        },
        98627: (e, t, i) => {
            "use strict";
            i.d(t, { useRemoveTrackFromPlaylistByIndex: () => c });
            var a = i(33008),
                l = i(66268),
                r = i(73827),
                s = i(25911),
                n = i(79169),
                o = i(18740);
            let c = () => {
                let { playlist: e, trackIndex: t } =
                        (0, l.useContext)(s.xG) || {},
                    { notify: i } = (0, n.lkh)(),
                    { playlist: c } = (0, n.Pjs)(),
                    { formatMessage: d } = (0, r.A)(),
                    u = (0, l.useCallback)(async () => {
                        let l = !1;
                        if (
                            (e &&
                                "number" == typeof t &&
                                (await e.changePlaylist(
                                    (0, s.Mp)({
                                        operation: s.yC.DELETE,
                                        startPosition: t,
                                        endPosition: t + 1,
                                    }),
                                )) === s.Y9.OK &&
                                (l = !0),
                            l)
                        ) {
                            if (e && "number" == typeof t) {
                                var r;
                                e.uuid ===
                                    (null == (r = c.meta) ? void 0 : r.uuid) &&
                                    (c.removeTracksFromItems(t, 1),
                                    c.search.setFocus());
                            }
                        } else
                            i(
                                (0, a.jsx)(o.hT, {
                                    error: d({
                                        id: "playlist-errors.failed-to-remove-track",
                                    }),
                                }),
                                { containerId: n.uQT.ERROR },
                            );
                    }, [e, t, c, i, d]);
                return {
                    canRemoveTrackFromPlaylist: !!(null == e
                        ? void 0
                        : e.canUserChange),
                    removeTrackFromPlaylist: u,
                };
            };
        },
        99430: (e, t, i) => {
            "use strict";
            i.d(t, { ControlsBar: () => j });
            var a = i(33008),
                l = i(85896),
                r = i(97531),
                s = i(66268),
                n = i(73827),
                o = i(96560),
                c = i(93967),
                d = i(18064),
                u = i(42213),
                m = i(78016),
                k = i(31342),
                _ = i(77868),
                p = i(61744),
                v = i(79169),
                C = i(18740),
                x = i(67872),
                g = i(86461),
                y = i(29592),
                T = i.n(y),
                h = i(42975),
                A = i.n(h);
            let b = (0, r.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, n.A)();
                    return t.isDownloaded
                        ? (0, a.jsx)(m.Icon, {
                              size: "xxs",
                              variant: "downloaded",
                              "aria-label": i({
                                  id: "offline.track-downloaded",
                              }),
                          })
                        : t.isDownloading
                          ? (0, a.jsx)(C.AD, {
                                value: t.downloadingProgress,
                                size: 16,
                                className: A().downloadingProgress,
                                progressBarClassName: A().progress,
                            })
                          : null;
                }),
                j = (0, r.PA)((e) => {
                    var t, i;
                    let {
                            className: r,
                            track: y,
                            withLightning: h,
                            ignoreDislikedStyles: A,
                            onLikeClick: j,
                            utmLink: I,
                            withSecondaryColor: N,
                            handleRemove: L,
                            withTrailer: P = !0,
                            likeIconSize: f = "xxs",
                        } = e,
                        { user: D, trailer: E } = (0, v.Pjs)(),
                        { formatMessage: S } = (0, n.A)(),
                        { sendLikeSearchFeedback: R } = (0, v.zEv)(),
                        [M, O] = (0, s.useState)(!1),
                        [w, K] = (0, s.useState)(!1),
                        B = (0, v.PT7)(),
                        U = (0, p.KX)(y),
                        G = (0, v.PMf)(
                            Math.round(
                                (null != (i = y.durationMs) ? i : 0) / 1e3,
                            ),
                        ),
                        z = (0, v.Ftl)(),
                        X = D.hasPlus,
                        $ = (0, u.c)(async () => {
                            M || y.isLiked || (O(!0), null == R || R()),
                                await U(),
                                null == j || j(y.isLiked);
                        }),
                        F = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        Y = (0, u.c)((e) => {
                            if ((e.stopPropagation(), B()))
                                return void e.preventDefault();
                            E.openTrackTrailer(y.id), z(c.ky.Track, y.id);
                        }),
                        q = (0, s.useMemo)(() => {
                            if (!y.isRemoved && y.isAvailable)
                                return (0, a.jsx)("div", {
                                    onClick: F,
                                    children: (0, a.jsx)(g.TrackContextMenu, {
                                        track: y,
                                        open: w,
                                        onOpenChange: K,
                                        placement: "bottom",
                                        icon: (0, a.jsx)(m.Icon, {
                                            size: "xs",
                                            variant: "more",
                                        }),
                                        size: "xs",
                                        utmLink: I,
                                        className: (0, l.$)(T().contextMenu, {
                                            [T().contextMenu_visible]: w,
                                        }),
                                        handleRemove: L,
                                        withTrailer: P,
                                        ...(0, d.Am)(
                                            d.Kq.track
                                                .TRACK_CONTEXT_MENU_BUTTON,
                                        ),
                                    }),
                                });
                        }, [F, L, w, P, y, I]);
                    return (0, a.jsxs)("div", {
                        className: (0, l.$)(T().root, T().controls, r, {
                            [T().controls_dislikedControls]: y.isDisliked,
                            [T().controls_dislikedColors]: y.isDisliked && !A,
                            [T().controls_disabled]: !y.isAvailable,
                            [T().root_withSecondaryColor]: N,
                        }),
                        children: [
                            h &&
                                (0, a.jsx)(m.Icon, {
                                    "aria-label": S({
                                        id: "entity-names.popular-among-users",
                                    }),
                                    size: "xxs",
                                    className: T().lightning,
                                    variant: "lightning",
                                }),
                            y.isUGC &&
                                (0, a.jsxs)(k.m_, {
                                    placement: "bottom",
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(m.Icon, {
                                            "aria-label": S({
                                                id: "ugc.track-description",
                                            }),
                                            size: "xxs",
                                            className: T().ugcIcon,
                                            variant: "eye_crossed",
                                            ...(0, d.Am)(
                                                d.Kq.track.UGC_TRACK_ICON,
                                            ),
                                        }),
                                        (0, a.jsx)(k.ZI, {
                                            children: (0, a.jsx)(o.A, {
                                                id: "ugc.track-description",
                                            }),
                                        }),
                                    ],
                                }),
                            X &&
                                (0, a.jsx)("div", {
                                    className: (0, l.$)(
                                        T().item,
                                        T().downloadIcon,
                                    ),
                                    children: (0, a.jsx)(b, { track: y }),
                                }),
                            L &&
                                (0, a.jsx)(p.d0, {
                                    size: "xs",
                                    iconSize: "xxs",
                                    className: (0, l.$)(
                                        T().item,
                                        T().removeButton,
                                    ),
                                    onClick: L,
                                }),
                            !y.isRemoved &&
                                y.isAvailable &&
                                (0, a.jsx)(C.aQ, {
                                    fallback: (0, a.jsx)(C.cy, {
                                        size: "xs",
                                        iconSize: f,
                                        className: (0, l.$)(
                                            T().item,
                                            T().likeIcon,
                                        ),
                                        isLiked: y.isLiked,
                                        onClick: $,
                                        disabled: !D.isAuthorized,
                                    }),
                                }),
                            (null == (t = y.trailer)
                                ? void 0
                                : t.isAvailable) &&
                                y.isAvailable &&
                                (0, a.jsx)(C.aQ, {
                                    fallback: (0, a.jsx)(C.kJ, {
                                        className: (0, l.$)(
                                            T().item,
                                            T().trailerIcon,
                                        ),
                                        iconSize: "xs",
                                        variant: "text",
                                        onClick: Y,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)("div", {
                                className: (0, l.$)(
                                    T().item,
                                    T().contextMenuWrapper,
                                ),
                                children: [
                                    "number" == typeof y.durationMs &&
                                        (0, a.jsx)(_.Caption, {
                                            variant: "span",
                                            className: (0, l.$)(T().duration, {
                                                [T().duration_hidden]: w,
                                            }),
                                            type: "entity",
                                            size: "m",
                                            weight: "medium",
                                            "aria-label": G,
                                            role: "text",
                                            ...(0, d.Am)(
                                                d.Kq.track.TRACK_DURATION,
                                            ),
                                            children: (0, a.jsx)("span", {
                                                "aria-hidden": "true",
                                                children: (0, x.h)(
                                                    y.durationMs,
                                                ),
                                            }),
                                        }),
                                    q,
                                ],
                            }),
                        ],
                    });
                });
        },
    },
]);
