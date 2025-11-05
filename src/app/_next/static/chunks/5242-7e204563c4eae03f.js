(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5242],
    {
        14829: (t, i, e) => {
            "use strict";
            e.d(i, { r: () => s });
            var l = e(66268),
                a = e(73827);
            let s = (t) => {
                let { formatMessage: i } = (0, a.A)();
                return (0, l.useMemo)(() => {
                    let e = "";
                    t.isLiked && !t.actualLikesCount
                        ? (e = i({ id: "entity-names.has-your-like" }))
                        : "number" == typeof t.actualLikesCount &&
                          (e =
                              t.actualLikesCount > 0
                                  ? i(
                                        { id: "entity-names.likes-counter" },
                                        { counter: t.actualLikesCount },
                                    )
                                  : i({
                                        id: "entity-names.likes-counter-empty",
                                    }));
                    let l = i(
                        { id: "entity-names.playlist-name" },
                        { playlistName: t.title },
                    );
                    return "".concat(l, " ").concat(e);
                }, [i, t]);
            };
        },
        17999: (t, i, e) => {
            "use strict";
            e.d(i, { PlaylistsCarousel: () => o });
            var l = e(33008),
                a = e(66268),
                s = e(18740),
                r = e(56395);
            let n = (t) => {
                    let {
                        forwardRef: i,
                        isShimmerVisible: e,
                        isShimmerActive: a,
                        title: n,
                        description: o,
                        playlists: c,
                        containerClassName: d,
                        className: u,
                        headerClassName: y,
                        viewAllActionLink: m,
                        headingVariant: p,
                        ..._
                    } = t;
                    return (0, l.jsx)(s.OY, {
                        isShimmerVisible: e,
                        isShimmerActive: a,
                        className: u,
                        headerClassName: y,
                        containerClassName: d,
                        ref: i,
                        title: n,
                        description: o,
                        viewAllActionLink: m,
                        headingVariant: p,
                        ..._,
                        children:
                            null == c
                                ? void 0
                                : c.map((t) =>
                                      (0, l.jsx)(
                                          r.PlaylistCard,
                                          { playlist: t, contentLinesCount: 3 },
                                          t.key,
                                      ),
                                  ),
                    });
                },
                o = (0, a.forwardRef)((t, i) =>
                    (0, l.jsx)(n, { forwardRef: i, ...t }),
                );
        },
        19525: (t) => {
            t.exports = {
                description: "HorizontalPlaylistCard_description__KYHZF",
                likesCount: "HorizontalPlaylistCard_likesCount__rgUhr",
                tracksCount: "HorizontalPlaylistCard_tracksCount__ZdjzM",
                icon: "HorizontalPlaylistCard_icon__LHymu",
            };
        },
        30672: (t) => {
            t.exports = {
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
        45242: (t, i, e) => {
            "use strict";
            e.d(i, {
                pA: () => h.EmptyPlaylistBlock,
                vf: () => L.HorizontalPlaylistCard,
                B6: () => f.PlaylistCard,
                BL: () => x,
                IP: () => g,
                EC: () => j.PlaylistsCarousel,
                bk: () => s,
                ZC: () => d,
                Ew: () => y,
                pd: () => p,
            });
            var l = e(41028),
                a = e(79169);
            let s = (t) => {
                var i, e;
                let {
                    playlist: s,
                    generatedPlaylistType: r,
                    likesCount: n,
                    trailer: o,
                    tracksCount: c,
                } = t;
                return (0, l.wg)({
                    isAvailable: null == (e = s.available) || e,
                    uuid: s.playlistUuid,
                    title: s.title,
                    uid: s.uid,
                    kind: s.kind,
                    coverUri: null == (i = s.cover) ? void 0 : i.uri,
                    generatedPlaylistType: r,
                    likesCount: n,
                    tracksCount: c,
                    trailer: (0, a.mxW)(o),
                });
            };
            var r = e(17846),
                n = e(66268);
            (0, n.cache)(async (t, i) => {
                var e;
                let l;
                try {
                    let {
                        container: e,
                        backendHostTld: s,
                        locale: r,
                        host: n,
                        fullUrl: o,
                        isRSC: c,
                        requestUrl: d,
                    } = await (0, a.IhE)();
                    if (c)
                        return {
                            playlist: void 0,
                            backendHostTld: s,
                            locale: r,
                            host: n,
                            fullUrl: o,
                            requestUrl: d,
                        };
                    let u = e.get(a._19);
                    l = {
                        playlist: await u.getPlaylistWithTracksIds({
                            userId: t,
                            playlistKind: i,
                            resumeStream: !1,
                        }),
                        backendHostTld: s,
                        locale: r,
                        host: n,
                        fullUrl: o,
                        requestUrl: d,
                    };
                } catch (t) {
                    return (0, a.tfF)(t, () => ({
                        playlist: void 0,
                        ...(0, a.Bj3)(),
                    }));
                }
                return (
                    (null == (e = l.playlist) ? void 0 : e.error) ===
                        "not-found" && (0, r.notFound)(),
                    l
                );
            }),
                (0, n.cache)(async (t) => {
                    var i;
                    let e;
                    (0, a.sU0)(t) || (0, r.notFound)();
                    try {
                        let {
                            container: i,
                            backendHostTld: l,
                            locale: s,
                            host: r,
                            fullUrl: n,
                            isRSC: o,
                            requestUrl: c,
                        } = await (0, a.IhE)();
                        if (o)
                            return {
                                playlist: void 0,
                                backendHostTld: l,
                                locale: s,
                                host: r,
                                fullUrl: n,
                                requestUrl: c,
                            };
                        let d = i.get(a.qNr);
                        e = {
                            playlist: await d.getPlaylist({
                                playlistUuid: t,
                                resumeStream: !1,
                                richTracks: !1,
                            }),
                            backendHostTld: l,
                            locale: s,
                            host: r,
                            fullUrl: n,
                            requestUrl: c,
                        };
                    } catch (t) {
                        return (0, a.tfF)(t, () => ({
                            playlist: void 0,
                            ...(0, a.Bj3)(),
                        }));
                    }
                    return (
                        (null == (i = e.playlist) ? void 0 : i.error) ===
                            "not-found" && (0, r.notFound)(),
                        e
                    );
                });
            var o = e(25911);
            let c = (t) => ({
                    uid: t.uid,
                    login: t.login,
                    name: t.name,
                    sex: t.sex,
                    verified: t.verified,
                }),
                d = (t) =>
                    (0, l.wg)({
                        ...(0, o.jX)(t),
                        owner: t.owner ? c(t.owner) : void 0,
                        description: t.description,
                        tags: t.tags,
                        modified: t.modified,
                        madeFor: t.madeFor
                            ? ((t) =>
                                  (0, l.wg)({
                                      userInfo: t.userInfo
                                          ? c(t.userInfo)
                                          : null,
                                      caseForms: t.caseForms
                                          ? (0, a.NH4)(t.caseForms)
                                          : null,
                                  }))(t.madeFor)
                            : null,
                    });
            var u = e(70879);
            let y = (t) => {
                var i, e;
                return (0, l.wg)({
                    ...(0, o.jX)(t),
                    artists:
                        null !=
                        (e =
                            null == t || null == (i = t.artists)
                                ? void 0
                                : i.map(u.dM))
                            ? e
                            : [],
                });
            };
            var m = e(61744);
            let p = (t) => {
                var i, e;
                return (0, l.wg)({
                    ...(0, o.jX)(t),
                    tracks:
                        null !=
                        (e =
                            null == t || null == (i = t.tracks)
                                ? void 0
                                : i.map(m.Rw))
                            ? e
                            : [],
                });
            };
            var _ = e(59615),
                v = e(64802);
            let C = l.gK.model("PlaylistOwner", {
                    uid: l.gK.number,
                    login: l.gK.string,
                    name: l.gK.string,
                    sex: l.gK.enumeration(Object.values(v.U)),
                    verified: l.gK.boolean,
                }),
                k = l.gK.model("PlaylistOwner", {
                    userInfo: l.gK.maybeNull(C),
                    caseForms: l.gK.maybeNull(_.lg),
                }),
                P = l.gK.model("PlaylistTag", {
                    id: l.gK.string,
                    value: l.gK.string,
                }),
                x = o.$o
                    .props({
                        owner: l.gK.maybe(C),
                        modified: l.gK.string,
                        description: l.gK.maybe(l.gK.string),
                        tags: l.gK.maybeNull(l.gK.array(P)),
                        madeFor: l.gK.maybeNull(k),
                    })
                    .views((t) => ({
                        get seeds() {
                            var i;
                            return [
                                "playlist:"
                                    .concat(
                                        null == (i = t.owner)
                                            ? void 0
                                            : i.login,
                                        "_",
                                    )
                                    .concat(t.kind),
                            ];
                        },
                        get tagsString() {
                            let { experiments: i } = (0, l.Zn)(t);
                            if (
                                !i.checkExperiment(
                                    a.zal.WebEditorsFeatures,
                                    "on",
                                ) ||
                                !Array.isArray(t.tags) ||
                                !t.tags.length
                            )
                                return null;
                            return t.tags.map((t) => t.value).join(", ");
                        },
                    }))
                    .actions((t) => ({
                        changeDescription: (0, l.L3)(function* (i) {
                            if (!(0, l._n)(t)) return a.FlZ.ERROR;
                            if (t.description === i) return a.FlZ.OK;
                            if (i.length > o.iz) return a.FlZ.ERROR;
                            let { usersResource: e, modelActionsLogger: s } =
                                (0, l._$)(t);
                            if (t.canUserChange) {
                                let l = t.description;
                                t.description = i;
                                try {
                                    let l = yield e.changePlaylistDescription({
                                        description: i,
                                        userId: t.uid,
                                        playlistKind: t.kind,
                                    });
                                    return (
                                        (t.description = l.description),
                                        a.FlZ.OK
                                    );
                                } catch (i) {
                                    (t.description = l), s.error(i);
                                }
                            }
                            return a.FlZ.ERROR;
                        }),
                        changePlaylistCover: (0, l.L3)(function* (i) {
                            if (!(0, l._n)(t)) return a.FlZ.ERROR;
                            let { usersResource: e, modelActionsLogger: s } =
                                (0, l._$)(t);
                            try {
                                let l = yield e.uploadPlaylistCover({
                                    userId: t.uid,
                                    formData: i,
                                    playlistKind: t.kind,
                                });
                                return (t.coverUri = l.cover.uri), a.FlZ.OK;
                            } catch (t) {
                                s.error(t);
                            }
                            return a.FlZ.ERROR;
                        }),
                    }))
                    .named("PlaylistMeta"),
                g = o.Zq.props({ artists: l.gK.maybe(l.gK.array(u.PK)) });
            var h = e(91919),
                L = e(75658),
                f = e(56395),
                j = e(17999);
        },
        56395: (t, i, e) => {
            "use strict";
            e.d(i, { PlaylistCard: () => b });
            var l = e(33008),
                a = e(85896),
                s = e(97531),
                r = e(66268),
                n = e(73827),
                o = e(93967),
                c = e(18064),
                d = e(48509),
                u = e(42213),
                y = e(42314),
                m = e(69476),
                p = e(78016),
                _ = e(54487),
                v = e(77868),
                C = e(70879),
                k = e(25911),
                P = e(79169),
                x = e(18740),
                g = e(14829),
                h = e(66098),
                L = e(28996);


            var electronBridge = e(77575),
                cssDataData = e(42795),
                icon = e(78016),
                contextMenuItem = e(66098),
                cssData = e.n(cssDataData);


            let downloadTracksToFile = (0, s.PA)((e) => {
                let { playlist: playlist, tracksIds: tracksIds } = e,

                    trackName = (0, r.useMemo)(
                        () => {
                            return `${playlist.title}`;
                        },
                        [playlist],
                    ),

                    o = (0, r.useCallback)(() => {
                        electronBridge.sendDownloadTracks(tracksIds, 'playlist', trackName);
                    }, [trackName]);
                return (0, l.jsx)(contextMenuItem.Dr, {
                    onClick: o,
                    icon: (0, l.jsx)(icon.Icon, {
                        variant: "download",
                        size: "xxs",
                    }),
                    className: cssData().root,
                    children: 'Скачать в файл',
                });
            });


            let f = (0, s.PA)((t) => {
                var i;
                let { playlist: e, onOpenChange: a, open: s, ...r } = t,
                    {
                        shouldShowBuySubscriptionModal: d,
                        showBuySubscriptionModal: y,
                    } = (0, P.qBP)(),
                    {
                        experiments: m,
                        settings: { isMobile: p },
                        trailer: _,
                        user: v,
                        playlist: {
                            trackIds: trackIds
                        }
                    } = (0, P.Pjs)(),
                    C = (0, k.KX)(e),
                    g = (0, k.A7)(e),
                    f = (0, P.Ftl)(),
                    { formatMessage: j } = (0, n.A)(),
                    A = (0, P.PT7)(),
                    b = m.checkExperiment(P.zal.WebEditorsFeatures, "on"),
                    K = (0, L.A_)({
                        entityVariant: P.DwC.PLAYLIST,
                        urlParams: { id: e.uid, kind: e.kind },
                    });
                (0, P.NBO)(s);
                let N = (0, u.c)(() => {
                    if (d) return void y();
                    A() ||
                        (_.openPlaylistTrailer(e.id), f(o.ky.Playlist, e.id));
                });
                return (0, l.jsxs)(h.W1, {
                    title: e.title,
                    onOpenChange: a,
                    open: s,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: j({ id: "interface-actions.context-menu" }),
                    containerProps: (0, c.Am)(
                        c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ),
                    ...r,
                    children: [
                        b &&
                            (0, l.jsx)(L.dx, {
                                entityVariant: P.DwC.PLAYLIST,
                                adminUrl: e.isFavouritePlaylist ? void 0 : K,
                            }),
                        !p &&
                            (0, l.jsx)(x.L1, {
                                onClick: g,
                                isPinned: e.isPinned,
                            }),
                        !e.isFavouritePlaylist &&
                            (0, l.jsx)(x.TW, {
                                onClick: C,
                                isLiked: e.isLiked,
                                disabled: !v.isAuthorized,
                            }),
                        (0, l.jsx)(downloadTracksToFile, {
                            playlist: e,
                            tracksIds: trackIds,
                        }),
                        (null == (i = e.trailer) ? void 0 : i.isAvailable) &&
                            (0, l.jsx)(x.No, {
                                onClick: N,
                                disabled: !e.isAvailable,
                            }),
                    ],
                });
            });
            var j = e(96973),
                A = e.n(j);
            let b = (0, s.PA)((t) => {
                let {
                        className: i,
                        playlist: e,
                        children: s,
                        contentLinesCount: h,
                        customDescription: L,
                    } = t,
                    { ref: j, intersectionPropertyId: b } = (0, P.nMI)(),
                    { trailer: K, user: N } = (0, P.Pjs)(),
                    { from: B, utmLink: T } = (0, P.fyy)({
                        contextId: e.uuid,
                        contextType: d.K.Playlist,
                    }),
                    { formatMessage: w } = (0, n.A)(),
                    {
                        sendLikeSearchFeedback: z,
                        sendNavigateSearchFeedback: I,
                        sendPlaySearchFeedback: E,
                    } = (0, P.zEv)(),
                    [F, S] = (0, r.useState)(!1),
                    [R, M] = (0, r.useState)(!1),
                    [O, $] = (0, r.useState)(!1),
                    Y = (0, g.r)(e),
                    D = (0, k.KX)(e),
                    U = (0, k.A7)(e),
                    q = (0, P.NKK)(),
                    H = (0, P.brA)(),
                    Z = (0, P.ZpR)(e.url),
                    X = (0, P.Ftl)(),
                    W = (0, P.PT7)(),
                    Q = (0, u.c)((t) => {
                        if ((t.stopPropagation(), W()))
                            return void t.preventDefault();
                        K.setUtmLink(T),
                            K.openPlaylistTrailer(e.id),
                            X(o.ky.Playlist, e.id);
                    }),
                    [V, J] = (0, r.useState)(!1),
                    { isPlaying: G, togglePlay: tt } = (0, P.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: d.K.Playlist,
                                meta: { id: e.id, uuid: e.uuid },
                                from: B,
                                utmLink: T,
                            },
                            loadContextMeta: !0,
                        },
                    }),
                    ti = (0, u.c)(() => {
                        q({ to: o.QT.PlaylistScreen }), null == I || I();
                    }),
                    te = (0, u.c)((t) => {
                        ti(), Z(t);
                    }),
                    tl = (0, u.c)(() => {
                        W() ||
                            (F || G || (S(!0), null == E || E()), tt(), H(!G));
                    }),
                    ta = (0, u.c)(() => {
                        R || e.isLiked || (M(!0), null == z || z()), D();
                    }),
                    ts = (0, u.c)((t) => {
                        t.preventDefault(), t.stopPropagation();
                    }),
                    tr = (0, u.c)((t) => {
                        $(t), J(t);
                    }),
                    tn = (0, r.useMemo)(() => {
                        var t;
                        return L
                            ? (0, l.jsx)(
                                  v.Caption,
                                  {
                                      variant: "span",
                                      type: "entity",
                                      size: "s",
                                      weight: "medium",
                                      lineClamp: 2,
                                      children: L,
                                  },
                                  e.getKey("description"),
                              )
                            : (null == (t = e.artists) ? void 0 : t.length)
                              ? (0, l.jsx)(
                                    C.iQ,
                                    {
                                        className: A().artists,
                                        artists: e.artists,
                                        lineClamp: 1,
                                        linkClassName: A().artistLink,
                                        captionSize: "s",
                                    },
                                    e.getKey("description"),
                                )
                              : void 0;
                    }, [L, e]),
                    to = (0, y.L)(() => {
                        if (!e.isFavouritePlaylist)
                            return (0, l.jsx)(
                                x.cy,
                                {
                                    className: (0, a.$)(
                                        A().likeButton,
                                        A().control,
                                    ),
                                    isLiked: e.isLiked,
                                    onClick: ta,
                                    variant: "default",
                                    size: "s",
                                    iconSize: "xxs",
                                    disabled: !N.isAuthorized,
                                },
                                e.getKey("LikeButton"),
                            );
                    }),
                    tc = (0, r.useMemo)(() => {
                        var t;
                        if (
                            null == e || null == (t = e.trailer)
                                ? void 0
                                : t.isAvailable
                        )
                            return (0, l.jsx)(
                                x.nE,
                                {
                                    children: (0, l.jsx)(
                                        x.kJ,
                                        {
                                            className: (0, a.$)(
                                                A().trailerButton,
                                                A().control,
                                            ),
                                            radius: "round",
                                            size: "s",
                                            iconSize: "xxs",
                                            onClick: Q,
                                        },
                                        e.getKey("TrailerButton"),
                                    ),
                                },
                                e.getKey("PlaylilstCardTrailerTooltip"),
                            );
                    }, [Q, e]),
                    td = (0, r.useMemo)(
                        () =>
                            (0, l.jsx)(
                                x.O0,
                                {
                                    onClick: U,
                                    isPinned: e.isPinned,
                                    className: (0, a.$)(
                                        A().pinButton,
                                        A().control,
                                    ),
                                    withRipple: !1,
                                },
                                e.getKey("PinButton"),
                            ),
                        [U, e],
                    ),
                    tu = (0, r.useMemo)(
                        () =>
                            (0, l.jsx)(_.Paper, {
                                className: A().cover,
                                radius: "s",
                                withShadow: !0,
                                ...(0, c.Am)(c.Kq.playlist.PLAYLIST_CARD),
                                children: (0, l.jsxs)("div", {
                                    className: A().coverBlock,
                                    onClick: te,
                                    children: [
                                        (0, l.jsx)(x.BW, {
                                            className: A().image,
                                            src: e.coverUri,
                                            size: 200,
                                            fit: "cover",
                                            alt: Y,
                                            withAvatarReplace: !0,
                                            "aria-hidden": !0,
                                        }),
                                        (0, l.jsx)(m.hg, {
                                            isVisible: O || V,
                                            className: A().controls,
                                            playControl: (0, l.jsx)(
                                                x.DM,
                                                {
                                                    className: (0, a.$)(
                                                        A().playButton,
                                                        A().control,
                                                    ),
                                                    buttonVariant: "default",
                                                    withHover: !1,
                                                    iconSize: "xl",
                                                    variant: "filled",
                                                    onClick: tl,
                                                    isPlaying: G,
                                                    disabled: !e.isAvailable,
                                                },
                                                e.getKey("PlayButton"),
                                            ),
                                            likeControl: to,
                                            menuControl: (0, l.jsx)(
                                                f,
                                                {
                                                    playlist: e,
                                                    onOpenChange: tr,
                                                    open: O,
                                                    onClick: ts,
                                                    className: (0, a.$)(
                                                        A().menuButton,
                                                        A().control,
                                                    ),
                                                    icon: (0, l.jsx)(p.Icon, {
                                                        size: "xxs",
                                                        variant: "more",
                                                    }),
                                                    size: "s",
                                                    ...(0, c.Am)(
                                                        c.Kq.playlist
                                                            .PLAYLIST_CONTEXT_MENU_BUTTON,
                                                    ),
                                                },
                                                e.getKey("PlaylistContextMenu"),
                                            ),
                                            pinControl: td,
                                            trailerControl: tc,
                                        }),
                                    ],
                                }),
                            }),
                        [te, e, Y, O, V, tl, G, to, tr, ts, td, tc],
                    ),
                    ty = !!e.actualLikesCount && !e.isLikesCountHidden;
                return (0, l.jsxs)(m.MN, {
                    ref: j,
                    "aria-label": Y,
                    className: (0, a.$)(A().root, i),
                    title: (0, l.jsx)(v.Caption, {
                        variant: "div",
                        type: "entity",
                        size: "s",
                        weight: "medium",
                        lineClamp: 2,
                        ...(0, c.Am)(c.Kq.playlist.PLAYLIST_TITLE),
                        children: (0, l.jsx)(x.N_, {
                            className: A().titleLink,
                            href: e.url,
                            onClick: ti,
                            children: e.title,
                        }),
                    }),
                    srTitle: (0, l.jsx)(x.N_, {
                        href: e.url,
                        onClick: ti,
                        children: e.title,
                    }),
                    "data-intersection-property-id": b,
                    contentLinesCount: h,
                    view: tu,
                    description: tn,
                    ...(0, c.Am)(c.Kq.playlist.PLAYLIST_ITEM),
                    children: [
                        ty &&
                            (0, l.jsx)(x.xW, {
                                ariaLabel: w(
                                    { id: "entity-names.likes-counter" },
                                    { counter: e.actualLikesCount },
                                ),
                                likesCount: e.actualLikesCount,
                                isLiked: e.isLiked,
                                handleLikeClick: D,
                            }),
                        s,
                    ],
                });
            });
        },
        62093: (t) => {
            t.exports = {
                root: "EmptyPlaylistBlock_root__wpA0j",
                iconBackground: "EmptyPlaylistBlock_iconBackground__pnUlz",
                title: "EmptyPlaylistBlock_title__pQQLf",
                subtitle: "EmptyPlaylistBlock_subtitle__P4Q7x",
            };
        },
        75658: (t, i, e) => {
            "use strict";
            e.d(i, { HorizontalPlaylistCard: () => j });
            var l = e(33008),
                a = e(85896),
                s = e(97531),
                r = e(66268),
                n = e(73827),
                o = e(96560),
                c = e(93967),
                d = e(18064),
                u = e(48509),
                y = e(42213),
                m = e(88485),
                p = e(78016),
                _ = e(77868),
                v = e(79169),
                C = e(18740),
                k = e(14829),
                P = e(25911),
                x = e(30672),
                g = e.n(x);
            let h = (0, s.PA)((t) => {
                var i;
                let { className: e, playlist: s, likeIconSize: n = "xxs" } = t,
                    { user: o, trailer: d } = (0, v.Pjs)(),
                    u = (0, v.PT7)(),
                    { sendLikeSearchFeedback: m } = (0, v.zEv)(),
                    _ = (0, P.KX)(s),
                    [k, x] = (0, r.useState)(!1),
                    h = (0, y.c)(async () => {
                        k || s.isLiked || (x(!0), null == m || m()), await _();
                    }),
                    L = (0, v.Ftl)(),
                    f = (0, y.c)((t) => {
                        if ((t.stopPropagation(), u()))
                            return void t.preventDefault();
                        d.openPlaylistTrailer(s.id), L(c.ky.Playlist, s.id);
                    });
                return (0, l.jsxs)("div", {
                    className: (0, a.$)(g().root, g().controls, e, {
                        [g().controls_disabled]: !s.isAvailable,
                    }),
                    children: [
                        s.isAvailable &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(C.aQ, {
                                        fallback: (0, l.jsx)(C.cy, {
                                            size: "xs",
                                            iconSize: n,
                                            className: (0, a.$)(
                                                g().item,
                                                g().likeIcon,
                                            ),
                                            isLiked: s.isLiked,
                                            onClick: h,
                                            disabled: !o.isAuthorized,
                                        }),
                                    }),
                                    (null == (i = s.trailer)
                                        ? void 0
                                        : i.isAvailable) &&
                                        (0, l.jsx)(C.aQ, {
                                            fallback: (0, l.jsx)(C.kJ, {
                                                className: (0, a.$)(
                                                    g().item,
                                                    g().trailerIcon,
                                                ),
                                                iconSize: "xs",
                                                variant: "text",
                                                onClick: f,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, l.jsx)("div", {
                            className: (0, a.$)(g().item, g().item_buttonArrow),
                            children: (0, l.jsx)(p.Icon, {
                                className: C.$f.buttonArrow,
                                variant: "arrowRight",
                                size: "xs",
                            }),
                        }),
                    ],
                });
            });
            var L = e(19525),
                f = e.n(L);
            let j = (0, s.PA)((t) => {
                let {
                        className: i,
                        playlist: e,
                        pageId: s,
                        coverClassName: P,
                        playButtonIconSize: x,
                        likeIconSize: g,
                    } = t,
                    { ref: L, intersectionPropertyId: j } = (0, v.nMI)(),
                    { from: A } = (0, v.fyy)({ pageId: s }),
                    [b, K] = (0, r.useState)(!1),
                    N = (0, v.brA)(),
                    B = (0, k.r)(e),
                    T = e.title || "",
                    { formatMessage: w, formatNumber: z } = (0, n.A)(),
                    I = (0, v.PT7)(),
                    {
                        sendNavigateSearchFeedback: E,
                        sendPlaySearchFeedback: F,
                    } = (0, v.zEv)(),
                    S = (0, v.NKK)(),
                    {
                        isPlaying: R,
                        isCurrent: M,
                        togglePlay: O,
                    } = (0, v.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: u.K.Playlist,
                                meta: { id: e.id, uuid: e.uuid },
                                from: A,
                            },
                            loadContextMeta: !0,
                        },
                    }),
                    $ = (0, v.ZpR)(e.url),
                    Y = (0, y.c)((t) => {
                        null == E || E(),
                            S({ to: c.QT.PlaylistScreen }),
                            t.preventDefault(),
                            $(t);
                    }),
                    D = (0, y.c)(() => {
                        I() ||
                            (b || R || (K(!0), null == F || F()), O(), N(!R));
                    }),
                    U = (0, y.c)((t) => {
                        (0, m.P)(t, C.$f.ripple), Y(t);
                    }),
                    q = (0, y.c)((t) => {
                        t.stopPropagation(), Y(t);
                    }),
                    H = (0, r.useCallback)(
                        (t) =>
                            (0, l.jsx)(C.q1, {
                                isAvailable: e.isAvailable,
                                isDisliked: !1,
                                coverUri: e.coverUri,
                                title: T,
                                className: (0, a.$)(C.$f.playButtonCell, P),
                                alt: w(
                                    { id: "entity-names.playlist-name" },
                                    { playlistName: T },
                                ),
                                radius: "xs",
                                ...t,
                            }),
                        [e, T, P, w],
                    ),
                    Z =
                        null == H
                            ? void 0
                            : H({
                                  onPlayButtonClick: D,
                                  isPlaying: R,
                                  isCurrent: M,
                                  playButtonIconSize: x,
                              }),
                    X = (0, r.useMemo)(
                        () =>
                            e.url && e.isAvailable
                                ? (0, l.jsx)(C.N_, {
                                      className: (0, a.$)(
                                          C.$f.text,
                                          C.$f.titleLink,
                                      ),
                                      href: e.url,
                                      onClick: q,
                                      children: T,
                                  })
                                : (0, l.jsx)(_.Caption, {
                                      className: (0, a.$)(
                                          C.$f.text,
                                          C.$f.titleText,
                                      ),
                                      size: "m",
                                      variant: "div",
                                      type: "text",
                                      children: T,
                                  }),
                        [q, e.isAvailable, e.url, T],
                    ),
                    W = (0, r.useMemo)(() => {
                        if (
                            void 0 === e.actualLikesCount ||
                            void 0 === e.tracksCount
                        )
                            return;
                        let t = (0, l.jsx)(_.Caption, {
                                variant: "span",
                                size: "m",
                                weight: "medium",
                                "aria-hidden": !0,
                                children: "•",
                            }),
                            i = e.isLiked ? "likedVariant" : "likeVariant",
                            a = ""
                                .concat(B, " ")
                                .concat(
                                    w(
                                        { id: "entity-names.tracks-count" },
                                        { value: e.tracksCount },
                                    ),
                                );
                        return (0, l.jsxs)("div", {
                            className: f().description,
                            "aria-label": a,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: f().likesCount,
                                    "aria-hidden": !0,
                                    children: [
                                        (0, l.jsx)(p.Icon, {
                                            className: f().icon,
                                            variant: i,
                                            size: "xxs",
                                        }),
                                        (0, l.jsx)(_.Caption, {
                                            variant: "span",
                                            size: "m",
                                            weight: "medium",
                                            children: z(e.actualLikesCount),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: f().tracksCount,
                                    "aria-hidden": !0,
                                    children: [
                                        t,
                                        (0, l.jsx)(_.Caption, {
                                            variant: "span",
                                            size: "m",
                                            weight: "medium",
                                            children: (0, l.jsx)(o.A, {
                                                id: "entity-names.tracks-count",
                                                values: {
                                                    value: z(e.tracksCount),
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [w, z, B, e.actualLikesCount, e.isLiked, e.tracksCount]);
                return (0, l.jsxs)(C.Cj, {
                    ref: L,
                    "data-intersection-property-id": j,
                    className: (0, a.$)(
                        C.$f.root,
                        { [C.$f.root_disabled]: !e.isAvailable },
                        i,
                    ),
                    "aria-label": e.title || w({ id: "entity-names.playlist" }),
                    onClick: U,
                    ...(0, d.Am)(d.Kq.playlist.HORIZONTAL_PLAYLIST_CARD),
                    children: [
                        Z,
                        (0, l.jsx)(C.ro, {
                            isDisabled: !e.isAvailable,
                            title: X,
                            description: W,
                        }),
                        (0, l.jsx)(h, { playlist: e, likeIconSize: g }),
                    ],
                });
            });
        },
        91919: (t, i, e) => {
            "use strict";
            e.d(i, { EmptyPlaylistBlock: () => y });
            var l = e(33008),
                a = e(85896),
                s = e(66268),
                r = e(96560),
                n = e(18064),
                o = e(78016),
                c = e(77868),
                d = e(62093),
                u = e.n(d);
            let y = (t) => {
                let { className: i, isEmptySearch: e } = t,
                    d = (0, s.useMemo)(
                        () =>
                            e
                                ? (0, l.jsx)(r.A, {
                                      id: "search-results.not-found-title",
                                  })
                                : (0, l.jsx)(r.A, {
                                      id: "error-messages.empty-collection-playlist-title",
                                  }),
                        [e],
                    ),
                    y = (0, s.useMemo)(
                        () =>
                            e
                                ? (0, l.jsx)(r.A, {
                                      id: "search-results.not-found-description",
                                  })
                                : (0, l.jsx)(r.A, {
                                      id: "error-messages.empty-collection-playlist-description",
                                  }),
                        [e],
                    );
                return (0, l.jsxs)("div", {
                    className: (0, a.$)(u().root, i),
                    ...(0, n.Am)(n.Kq.playlist.PLAYLIST_EMPTY_BLOCK),
                    children: [
                        (0, l.jsx)("div", {
                            className: u().iconBackground,
                            children: (0, l.jsx)(o.Icon, {
                                variant: "search",
                                size: "l",
                                className: u().icon,
                                ...(0, n.Am)(
                                    n.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON,
                                ),
                            }),
                        }),
                        (0, l.jsx)(c.Heading, {
                            variant: "h3",
                            size: "xs",
                            className: u().title,
                            ...(0, n.Am)(
                                n.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE,
                            ),
                            children: d,
                        }),
                        (0, l.jsx)(c.Caption, {
                            variant: "span",
                            size: "l",
                            className: u().subtitle,
                            ...(0, n.Am)(
                                n.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT,
                            ),
                            children: y,
                        }),
                    ],
                });
            };
        },
        96973: (t) => {
            t.exports = {
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
