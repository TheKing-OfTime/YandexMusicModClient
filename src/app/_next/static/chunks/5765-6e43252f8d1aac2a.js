(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5765],
    {
        2865: (e, t, i) => {
            "use strict";
            i.d(t, {
                QQ: () => K,
                Op: () => k,
                x5: () => S,
                jh: () => E.PromoLandingSonataControls,
                s_: () => L.RepeatButton,
                uP: () => j.ShuffleButton,
                $u: () => M.SonataControls,
                bG: () => N,
                qF: () => P.SonataVideoControls,
                x6: () => I,
                EX: () => n,
                li: () => d,
                pE: () => p,
                AA: () => m.useOnRepeatClick,
                e9: () => C.useOnShuffleClick,
                d0: () => v.useToggleMute,
            });
            var a = i(41028),
                r = i(75305),
                l = i(70879),
                s = i(79169);
            let n = (e) => {
                if (e.data.type !== r.R.Clip) return null;
                {
                    var t;
                    let i = e.data.meta;
                    if (!i.clipId) return null;
                    let r =
                            null == (t = i.artists)
                                ? void 0
                                : t.map((e) => (0, l.as)({ artist: e })),
                        { available: n, disclaimers: o } = (0, s.fyr)(i);
                    return (0, a.wg)({
                        clipId: i.clipId,
                        title: i.title,
                        thumbnail: i.thumbnail,
                        duration: i.duration,
                        previewUrl: i.previewUrl,
                        isAvailable: n,
                        disclaimers: o,
                        artists: r,
                        isHiddenFromSonataQueue: e.hidden,
                    });
                }
            };
            var o = i(53555);
            let d = (e, t) => ({
                type: o.z4.Unloaded,
                meta: { id: e, albumId: t },
            });
            var u = i(95592),
                c = i(61744);
            let p = (e) => {
                var t, i, n;
                switch (e.data.type) {
                    case r.R.Generative: {
                        let i = e.data.meta,
                            r = (0, s.QBb)(
                                null == i ? void 0 : i.derivedColors,
                            );
                        return (0, a.wg)({
                            id: String(i.id),
                            coverUri: i.imageUrl,
                            title: null != (t = i.title) ? t : "",
                            isAvailable: !0,
                            isRemoved: !1,
                            averageColor: r,
                        });
                    }
                    case r.R.Clip:
                    case o.z4.Unloaded:
                    case r.R.Radio:
                        return null;
                    default: {
                        let t = e.data.meta,
                            r = null == (i = t.artists) ? void 0 : i.map(l.dM),
                            s = null == (n = t.albums) ? void 0 : n.map(u.e7);
                        return (0, a.wg)({
                            ...(0, c.gK)(t),
                            artists: r,
                            albums: s,
                            isHiddenFromSonataQueue: e.hidden,
                        });
                    }
                }
            };
            var m = i(48148),
                C = i(73904),
                v = i(26893),
                g = i(86512),
                _ = i(29318),
                b = i(48509),
                x = i(43090),
                y = i(10663);
            let h = a.gK.model("UnloadedEntityMeta", {
                    id: a.gK.union(a.gK.number, a.gK.string),
                    albumId: a.gK.maybe(a.gK.union(a.gK.number, a.gK.string)),
                }),
                I = a.gK.model("UnloadedEntityData", {
                    meta: h,
                    type: a.gK.literal(o.z4.Unloaded),
                });
            var f = i(6247),
                A = i(16285);
            let S = c.OQ.props({
                    artists: a.gK.array(l.PK),
                    albums: a.gK.array(u.GI),
                    chart: a.gK.maybe(A.Iz),
                    isHiddenFromSonataQueue: a.gK.maybe(a.gK.boolean),
                })
                    .views((e) => ({
                        get idWithContext() {
                            return e.albumId
                                ? "".concat(e.id, ":").concat(e.albumId)
                                : e.id;
                        },
                        get artistsNames() {
                            var t;
                            return null == (t = e.artists)
                                ? void 0
                                : t.map((e) => e.name).join(", ");
                        },
                        get mainArtist() {
                            var i, a;
                            return null !=
                                (a = null == (i = e.artists) ? void 0 : i[0])
                                ? a
                                : null;
                        },
                        get mainAlbum() {
                            var r, l;
                            return null !=
                                (l = null == (r = e.albums) ? void 0 : r[0])
                                ? l
                                : null;
                        },
                        get index() {
                            var s, n, o;
                            return null !=
                                (o =
                                    null == (n = e.albums[0]) ||
                                    null == (s = n.trackPosition)
                                        ? void 0
                                        : s.index)
                                ? o
                                : null;
                        },
                        get isPodcast() {
                            var d;
                            return (
                                e.isTrackPodcast ||
                                (null == (d = this.mainAlbum)
                                    ? void 0
                                    : d.isPodcast)
                            );
                        },
                        get isAudiobook() {
                            return e.type === f.S.AUDIOBOOK;
                        },
                        get isFairyTale() {
                            return e.type === f.S.FAIRY_TALE;
                        },
                        get isNonMusic() {
                            return (
                                this.isPodcast ||
                                this.isAudiobook ||
                                this.isFairyTale
                            );
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
                            let { ugcResource: r, modelActionsLogger: n } = (0,
                            a._$)(e);
                            if (
                                e.artists.map((e) => e.name).join(", ") === i &&
                                t === e.title
                            )
                                return s.FlZ.OK;
                            try {
                                var o;
                                yield r.changeTrack({
                                    trackId: e.id,
                                    title: t,
                                    artist: i,
                                }),
                                    (e.title = t);
                                let n =
                                    (null == (o = e.artists[0])
                                        ? void 0
                                        : o.id) || "0";
                                if (((e.artists = (0, a.wg)([])), i)) {
                                    let t = l.PK.create({
                                        id: n,
                                        name: i,
                                        isAvailable: !0,
                                    });
                                    e.artists = (0, a.wg)([t]);
                                }
                                return s.FlZ.OK;
                            } catch (e) {
                                return n.error(e), s.FlZ.ERROR;
                            }
                        }),
                    })),
                K = a.gK
                    .model("BaseSonataState", {
                        contextType: a.gK.maybeNull(
                            a.gK.enumeration(Object.values(b.K)),
                        ),
                        contextId: a.gK.maybeNull(a.gK.string),
                        entityMeta: a.gK.maybeNull(S),
                        status: a.gK.enumeration(Object.values(o.MT)),
                        canMoveForward: a.gK.boolean,
                        canMoveBackward: a.gK.boolean,
                        canSpeed: a.gK.boolean,
                        repeatMode: a.gK.enumeration(Object.values(y.pM)),
                        canChangeRepeatMode: a.gK.boolean,
                        volume: a.gK.maybe(a.gK.number),
                        speed: a.gK.maybe(a.gK.number),
                        position: a.gK.maybeNull(a.gK.number),
                        duration: a.gK.maybeNull(a.gK.number),
                        canShuffle: a.gK.boolean,
                        shuffle: a.gK.boolean,
                        quality: a.gK.enumeration(Object.values(x.e)),
                        unloadedEntitiesData: a.gK.maybe(a.gK.array(I)),
                    })
                    .volatile(() => ({ volatileUnloadedEntitiesData: void 0 }))
                    .views((e) => ({
                        get unloadedEntitiesDataFromModels() {
                            var t;
                            return null != (t = e.volatileUnloadedEntitiesData)
                                ? t
                                : (0, _.HO)(e.unloadedEntitiesData);
                        },
                        get isVibeContext() {
                            return e.contextType === b.K.Vibe;
                        },
                        get isGenerativeContext() {
                            return e.contextType === b.K.Generative;
                        },
                        get isPaused() {
                            return e.status === o.MT.PAUSED;
                        },
                        get isPlaying() {
                            return e.status === o.MT.PLAYING;
                        },
                        get isContextRepeatMode() {
                            return e.repeatMode === y.pM.CONTEXT;
                        },
                        get isOneRepeatMode() {
                            return e.repeatMode === y.pM.ONE;
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
                            t && t.data.meta && (e.entityMeta = p(t));
                        },
                        setUnloadedEntitiesData: (t) => {
                            t &&
                                ((e.volatileUnloadedEntitiesData = (0, g.A)(t)),
                                (e.unloadedEntitiesData = (0, a.wg)(t)));
                        },
                        resetUnloadedEntitiesData: () => {
                            (e.volatileUnloadedEntitiesData = void 0),
                                (e.unloadedEntitiesData = void 0);
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
                        setQuality: (t) => {
                            e.quality = t;
                        },
                        setPosition: (t) => {
                            e.position = t;
                        },
                        setDuration: (t) => {
                            e.duration = t;
                        },
                    })),
                k = i(60030)
                    .z8.props({
                        artists: a.gK.array(l.PK),
                        isHiddenFromSonataQueue: a.gK.maybe(a.gK.boolean),
                    })
                    .views((e) => ({
                        get idWithContext() {
                            return String(e.clipId);
                        },
                    })),
                N = K.props({
                    playlistFilter: a.gK.maybe(a.gK.string),
                    areCoresRegistered: a.gK.boolean,
                    isVHCoreRegistered: a.gK.boolean,
                    shouldApplyYnisonState: a.gK.optional(a.gK.boolean, !0),
                    isCrossFadeEnabled: a.gK.boolean,
                })
                    .actions((e) => ({
                        setIsVHCoreRegistered(t) {
                            e.isVHCoreRegistered = t;
                        },
                        setPlaylistFilter: (t) => {
                            e.playlistFilter = t;
                        },
                        setCoresAsRegistered: (t) => {
                            e.areCoresRegistered = t;
                        },
                        setShouldApplyYnisonState: (t) => {
                            e.shouldApplyYnisonState = t;
                        },
                        setCrossFadeMode: (t) => {
                            let { localStorage: i } = (0, a._$)(e);
                            i.set(s.cYZ.CrossFadeMode, t),
                                (e.isCrossFadeEnabled = t);
                        },
                    }))
                    .named("SonataState");
            i(75797), i(1199);
            var E = i(61646),
                L = i(57526),
                j = i(67950),
                M = i(357),
                P = i(33363);
        },
        10957: (e, t, i) => {
            "use strict";
            i.d(t, { ClipContextMenu: () => C });
            var a = i(33008),
                r = i(97531),
                l = i(73827),
                s = i(96560),
                n = i(18064),
                o = i(42213),
                d = i(78016),
                u = i(66098),
                c = i(60030),
                p = i(79169),
                m = i(18740);
            let C = (0, r.PA)((e) => {
                let {
                        onOpenChange: t,
                        open: i,
                        placement: r,
                        isFullscreenMobile: C = !1,
                        icon: v,
                        size: g,
                        clip: _,
                        ...b
                    } = e,
                    { currentClipInfo: x, settings: y, user: h } = (0, p.Pjs)(),
                    { formatMessage: I } = (0, l.A)(),
                    { shareLink: f, pathname: A } = (0, p.bNS)(
                        p.Zyd.video.href,
                        { query: { ids: String(_.clipId) } },
                    ),
                    S = C || y.isMobile;
                (0, p.NBO)(i);
                let K = (0, c.KX)(_),
                    k = (0, o.c)(() => {
                        x.setClipId(_.clipId), x.modal.open();
                    }),
                    N = {
                        variant: p.Yxq.CLIP,
                        id: _.clipId,
                        title: _.title,
                        path: A,
                    };
                return (0, a.jsxs)(u.W1, {
                    isMobile: S,
                    placement: r,
                    offsetOptions: -10,
                    open: i,
                    onOpenChange: t,
                    icon: v,
                    size: g,
                    containerProps: (0, n.Am)(n.Kq.clip.CLIP_CONTEXT_MENU),
                    ariaLabel: I({ id: "interface-actions.context-menu" }),
                    variant: "text",
                    ...b,
                    children: [
                        (0, a.jsx)(m.TW, {
                            onClick: K,
                            isLiked: _.isLiked,
                            disabled: !h.isAuthorized,
                        }),
                        (0, a.jsx)(m.Ht, { shareLink: f, entityMeta: N }),
                        (0, a.jsx)(u.Dr, {
                            onClick: k,
                            icon: (0, a.jsx)(d.Icon, {
                                variant: "info",
                                size: "xxs",
                            }),
                            ...(0, n.Am)(
                                n.Kq.clip.CLIP_CONTEXT_MENU_ABOUT_TRACK_BUTTON,
                            ),
                            children: (0, a.jsx)(s.A, {
                                id: "track-modal.clip-title",
                            }),
                        }),
                    ],
                });
            });
        },
        14857: (e, t, i) => {
            "use strict";
            i.d(t, { k: () => o });
            var a = i(33008),
                r = i(91342),
                l = i(18740),
                s = i(53631),
                n = i.n(s);
            let o = (e) => {
                let { isActive: t } = e;
                return (0, a.jsxs)("div", {
                    className: n().root,
                    "aria-live": t ? "polite" : "off",
                    "aria-busy": t,
                    children: [
                        (0, a.jsx)(r.Shimmer, {
                            isActive: t,
                            className: n().cover,
                            radius: "l",
                        }),
                        (0, a.jsx)(l.nN, { isActive: t, className: n().title }),
                        (0, a.jsx)(l.nN, { isActive: t, className: n().text }),
                    ],
                });
            };
        },
        16015: (e, t, i) => {
            "use strict";
            i.d(t, { useGenerativeActions: () => p });
            var a = i(33008),
                r = i(66268),
                l = i(73827),
                s = i(66928),
                n = i(77205),
                o = i(42213),
                d = i(71244),
                u = i(79169),
                c = i(18740);
            let p = () => {
                let {
                        sonataState: { entityMeta: e },
                        user: t,
                        fullscreenPlayer: i,
                    } = (0, u.Pjs)(),
                    p = (0, u.eGp)(),
                    { notify: m } = (0, u.lkh)(),
                    { formatMessage: C } = (0, l.A)(),
                    [v, g] = (0, r.useState)(!1),
                    {
                        state: _,
                        handleDebouncedToggle: b,
                        reset: x,
                    } = (0, d.F)({ delay: 1e4, throttleTimeout: 0 }),
                    {
                        state: y,
                        handleDebouncedToggle: h,
                        reset: I,
                    } = (0, d.F)({ delay: 1e4, throttleTimeout: 0 }),
                    f = (0, o.c)(() => {
                        x(), I();
                    });
                (0, r.useEffect)(() => {
                    (null == e ? void 0 : e.id) && f();
                }, [null == e ? void 0 : e.id, f]);
                let A = (0, o.c)(async (r) => {
                    if (v || !e || !p) return;
                    if (!t.isAuthorized) {
                        let e = i.modal.isOpened
                            ? u.uQT.FULLSCREEN_ERROR
                            : u.uQT.ERROR;
                        m(
                            (0, a.jsx)(c.hT, {
                                error: C({
                                    id: "authorization-messages.need-to-authorizate",
                                }),
                            }),
                            { containerId: e },
                        );
                        return;
                    }
                    let l = p.getState(),
                        o = p.playbackController.getPlayback();
                    if (l && o && (0, s.S)(l.currentContext.value)) {
                        g(!0);
                        try {
                            switch (r) {
                                case n.Q.TimestampLike:
                                    I(), b();
                                    break;
                                case n.Q.TimestampDislike:
                                    x(), h();
                            }
                            let t = l.currentContext.value.restartsCount;
                            l.queueState.entityList.value.find((t) => {
                                var i, a;
                                let { entity: r } = t;
                                return (
                                    (null == (a = r.data) ||
                                    null == (i = a.meta)
                                        ? void 0
                                        : i.id) === e.id
                                );
                            }) &&
                                (await l.currentContext.value.sendFeedback(
                                    r,
                                    o,
                                )),
                                l.currentContext.value.restartsCount > t && f();
                        } catch (t) {
                            f();
                            let e = i.modal.isOpened
                                ? u.uQT.FULLSCREEN_ERROR
                                : u.uQT.ERROR;
                            m(
                                (0, a.jsx)(c.hT, {
                                    error: C({
                                        id: "error-messages.error-during-action",
                                    }),
                                }),
                                { containerId: e },
                            );
                        } finally {
                            g(!1);
                        }
                    }
                });
                return {
                    isGenerativeLiked: _,
                    isGenerativeDisliked: y,
                    onGenerativeLikeClick: (0, o.c)(() => A(n.Q.TimestampLike)),
                    onGenerativeDislikeClick: (0, o.c)(() =>
                        A(n.Q.TimestampDislike),
                    ),
                };
            };
        },
        16907: (e, t, i) => {
            "use strict";
            i.d(t, { ClipsCarouselContent: () => g });
            var a = i(33008),
                r = i(85896),
                l = i(97531),
                s = i(66268),
                n = i(54960),
                o = i(93967),
                d = i(95567),
                u = i(79169),
                c = i(29663),
                p = i(14857),
                m = i(54413),
                C = i.n(m);
            let v = (0, l.PA)((e) => {
                    let {
                            forwardRef: t,
                            clipCardTitleClassName: i,
                            clipCardArtistLinkClassName: l,
                            carouselItemClassName: m,
                            isShimmerVisible: v,
                            isShimmerActive: g,
                            containerClassName: _,
                            artistIdWithoutLink: b,
                            withVideo: x = !0,
                            clips: y,
                            shouldOpenModalOnCardClick: h = !0,
                            itemCounter: I,
                        } = e,
                        f = (0, s.useId)(),
                        A = (0, s.useRef)(String((0, n.A)())),
                        S = (0, s.useMemo)(() => {
                            if (v)
                                return Array.from({ length: 5 }, (e, t) =>
                                    (0, a.jsx)(p.k, { isActive: g }, t),
                                );
                            return null == y
                                ? void 0
                                : y.map((e, t) =>
                                      (0, a.jsx)(
                                          u.Bki,
                                          {
                                              objectType: o.ky.Video,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount:
                                                  null == y ? void 0 : y.length,
                                              objectId: String(e.clipId),
                                              children: (0, a.jsx)(c.ClipCard, {
                                                  titleClassName: i,
                                                  artistLinkClassName: l,
                                                  clip: e,
                                                  withVideo: x,
                                                  artistIdWithoutLink: b,
                                                  viewUuid: A.current,
                                                  shouldOpenModalOnCardClick: h,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [i, l, v, g, b, x, y, h]);
                    return (0, a.jsx)(d.Carousel, {
                        className: (0, r.$)(
                            C().itemCounter,
                            { [C()["itemCounter_".concat(I)]]: I },
                            _,
                        ),
                        ref: t,
                        itemClassName: (0, r.$)(C().item, C().important, m),
                        "aria-labelledby": f,
                        children: S,
                    });
                }),
                g = (0, s.forwardRef)((e, t) =>
                    (0, a.jsx)(v, { forwardRef: t, ...e }),
                );
        },
        27845: (e) => {
            e.exports = {
                card_root: "HorizontalCardContainer_root__YoAAP",
                root: "ClipCard_root__kzWjg",
                view: "ClipCard_view__MYSwA",
                playButton: "ClipCard_playButton__0Wyss",
                duration: "ClipCard_duration__89ZCx",
                image: "ClipCard_image__hSUud",
                media: "ClipCard_media__dU4RM",
                cover: "ClipCard_cover__ztEok",
                unavailableCover: "ClipCard_unavailableCover__Zd9jl",
                cover_withoutOffset: "ClipCard_cover_withoutOffset__aasE2",
                title: "ClipCard_title__I1s7Q",
                artistLink: "ClipCard_artistLink__t6oPP",
                titleLink: "ClipCard_titleLink__g3HDM",
                version: "ClipCard_version__w9PM7",
            };
        },
        29663: (e, t, i) => {
            "use strict";
            i.d(t, { ClipCard: () => A });
            var a = i(33008),
                r = i(85896),
                l = i(36998),
                s = i(97531),
                n = i(66268),
                o = i(73827),
                d = i(30293),
                u = i(18064),
                c = i(48509),
                p = i(42213),
                m = i(69476),
                C = i(52756),
                v = i(54487),
                g = i(77868),
                _ = i(70879),
                b = i(60030),
                x = i(79169),
                y = i(18740),
                h = i(80159),
                I = i(27845),
                f = i.n(I);
            let A = (0, s.PA)((e) => {
                var t;
                let {
                        titleClassName: i,
                        artistLinkClassName: s,
                        clip: I,
                        withVideo: A = !0,
                        artistIdWithoutLink: S,
                        viewUuid: K,
                        shouldOpenModalOnCardClick: k = !0,
                    } = e,
                    { fullscreenVideoPlayer: N } = (0, x.Pjs)(),
                    { formatMessage: E } = (0, o.A)(),
                    L = (0, b.Cc)(),
                    { from: j } = (0, x.fyy)({
                        pageId: x._Q$.VIDEO_PLAYER,
                        contextId: N.state.contextId,
                        contextType: c.K.Various,
                        blockId: x.UfI.CLIPS,
                    }),
                    M = (0, x.PMf)(null != (t = I.duration) ? t : 0),
                    P = (0, b.Mn)(K),
                    T = (0, b._7)(K),
                    { ref: R, intersectionPropertyId: w } = (0, x.nMI)({
                        callback: P,
                    }),
                    D = (0, n.useRef)(null),
                    O = A && I.previewUrl,
                    U = (0, p.c)(() => {
                        D.current &&
                            ((D.current.currentTime = 0), D.current.play());
                    }),
                    F = (0, n.useMemo)(() => (0, l.A)(U, 500), [U]),
                    z = (0, p.c)(() => {
                        var e;
                        null == (e = D.current) || e.pause();
                    }),
                    G = (0, n.useMemo)(
                        () => N.ids.indexOf(I.clipId),
                        [N, I.clipId],
                    ),
                    { isPlaying: V, togglePlay: X } = (0, x.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: c.K.Various,
                                meta: { id: x.H7u.VARIOUS_CLIP_CONTEXT },
                                from: j,
                            },
                            queueParams: { index: G },
                            entitiesData: N.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(I.clipId),
                        sonataState: N.state,
                        playbackId: x.V_r.CLIP,
                    }),
                    B = k ? I.url : (0, b.JL)(N.ids, G),
                    Q = (0, p.c)(() => {
                        k ? (L([I.clipId]), T()) : V || X();
                    }),
                    $ = (0, h.useClipDisclaimer)({ clip: I, callback: Q }),
                    H = E(
                        { id: "entity-names.clip-name" },
                        { clipName: I.title },
                    ),
                    Y = (0, n.useMemo)(
                        () =>
                            I.isAvailable
                                ? (0, a.jsxs)(v.Paper, {
                                      radius: "m",
                                      className: (0, r.$)(f().view, f().cover),
                                      onMouseEnter: F,
                                      onMouseLeave: z,
                                      onClick: $,
                                      children: [
                                          O &&
                                              (0, a.jsx)("video", {
                                                  className: f().media,
                                                  ref: D,
                                                  poster:
                                                      I.thumbnail &&
                                                      (0,
                                                      d.createAvatarVideoUrl)(
                                                          I.thumbnail,
                                                          1280,
                                                      ),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  "aria-hidden": !0,
                                                  children: (0, a.jsx)(
                                                      "source",
                                                      {
                                                          src: I.previewUrl,
                                                          type: "video/mp4",
                                                      },
                                                  ),
                                              }),
                                          I.thumbnail &&
                                              (0, a.jsx)(C.Image, {
                                                  className: f().image,
                                                  "aria-hidden": !0,
                                                  src: I.thumbnail,
                                                  fit: "cover",
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer:
                                                      d.createAvatarVideoUrl,
                                              }),
                                          void 0 !== I.duration &&
                                              (0, a.jsx)(g.Caption, {
                                                  role: "text",
                                                  "aria-label": M,
                                                  variant: "span",
                                                  className: f().duration,
                                                  type: "entity",
                                                  size: "xs",
                                                  weight: "medium",
                                                  children: (0, a.jsx)("span", {
                                                      "aria-hidden": "true",
                                                      children: (0, x.E4p)(
                                                          I.duration,
                                                          I.duration,
                                                      ),
                                                  }),
                                              }),
                                          (0, a.jsx)(y.DM, {
                                              variant: "filled",
                                              className: f().playButton,
                                              onClick: $,
                                              iconSize: "xl",
                                          }),
                                      ],
                                  })
                                : (0, a.jsx)(v.Paper, {
                                      radius: "m",
                                      className: f().unavailableCover,
                                      children: (0, a.jsx)(C.FallbackImage, {
                                          className: f().image,
                                          iconVariant: "unavailable",
                                          ...(0, u.Am)(
                                              u.S7.ENTITY_COVER_FALLBACK_IMAGE,
                                          ),
                                      }),
                                  }),
                        [
                            M,
                            I.isAvailable,
                            I.thumbnail,
                            I.previewUrl,
                            I.duration,
                            F,
                            z,
                            $,
                            O,
                        ],
                    ),
                    q = (0, n.useMemo)(
                        () =>
                            I.hasArtists
                                ? (0, a.jsx)(
                                      _.iQ,
                                      {
                                          linkClassName: (0, r.$)(
                                              f().artistLink,
                                              s,
                                          ),
                                          artists: I.artists,
                                          lineClamp: 1,
                                          withAllArtistsTitle: !0,
                                          artistIdWithoutLink: S,
                                      },
                                      I.getKey("SeparatedArtists"),
                                  )
                                : null,
                        [S, I, s],
                    );
                return (0, a.jsx)(m.MN, {
                    ref: R,
                    className: f().root,
                    explicitMarkComponent:
                        I.explicitDisclaimer &&
                        (0, a.jsx)(
                            y.Nq,
                            {
                                getDescriptionTexts: I.getDescriptionTexts,
                                variant: I.explicitDisclaimer,
                                size: "xxs",
                            },
                            I.getKey("ExplicitMarkIcon"),
                        ),
                    "aria-label": H,
                    srTitle: (0, a.jsx)(y.N_, {
                        href: B,
                        onClick: $,
                        children: H,
                    }),
                    title: (0, a.jsxs)(
                        g.Caption,
                        {
                            className: (0, r.$)(f().title, i),
                            variant: "div",
                            type: "entity",
                            size: "m",
                            weight: "medium",
                            lineClamp: 1,
                            children: [
                                (0, a.jsx)(y.N_, {
                                    className: f().titleLink,
                                    href: B,
                                    "aria-label": H,
                                    onClick: $,
                                    ...(0, u.Am)(u.Kq.clip.CLIP_META_TITLE),
                                    children: I.title,
                                }),
                                I.version &&
                                    (0, a.jsx)(g.Caption, {
                                        className: f().version,
                                        variant: "span",
                                        children: " ".concat(I.version),
                                    }),
                            ],
                        },
                        I.getKey("Title"),
                    ),
                    "data-intersection-property-id": w,
                    view: Y,
                    description: q,
                    ...(0, u.Am)(u.Kq.clip.CLIP_CARD),
                });
            });
        },
        32503: (e, t, i) => {
            "use strict";
            i.d(t, { ClipsCarousel: () => m });
            var a = i(33008),
                r = i(85896),
                l = i(97531),
                s = i(66268),
                n = i(30293),
                o = i(18740),
                d = i(42629),
                u = i.n(d),
                c = i(16907);
            let p = (0, l.PA)((e) => {
                    let {
                            clipCardTitleClassName: t,
                            clipCardArtistLinkClassName: i,
                            carouselItemClassName: l,
                            forwardRef: d,
                            isShimmerVisible: p,
                            isShimmerActive: m,
                            title: C,
                            description: v,
                            containerClassName: g,
                            headerClassName: _,
                            viewAllActionLink: b,
                            artistIdWithoutLink: x,
                            withVideo: y = !0,
                            clips: h,
                            headingVariant: I,
                            className: f,
                            shouldOpenModalOnCardClick: A = !0,
                            itemCounter: S,
                            ...K
                        } = e,
                        k = (0, s.useId)(),
                        N = (0, s.useRef)(null);
                    return (0, a.jsxs)("section", {
                        className: (0, r.$)(u().root, f),
                        ref: d,
                        ...(0, n.getDataAttrFromProps)(K),
                        children: [
                            (0, a.jsx)(o.Tw, {
                                className: _,
                                labeledForId: k,
                                title: C,
                                description: v,
                                viewAllActionLink: b,
                                controls: (0, a.jsx)(o.X9, {
                                    className: u().controls,
                                    carouselRef: N,
                                }),
                                headingVariant: I,
                                withDescription: !!v,
                            }),
                            (0, a.jsx)(c.ClipsCarouselContent, {
                                clipCardTitleClassName: t,
                                clipCardArtistLinkClassName: i,
                                carouselItemClassName: l,
                                isShimmerVisible: p,
                                isShimmerActive: m,
                                containerClassName: g,
                                artistIdWithoutLink: x,
                                withVideo: y,
                                clips: h,
                                shouldOpenModalOnCardClick: A,
                                itemCounter: S,
                                ref: N,
                                "aria-labelledby": k,
                            }),
                        ],
                    });
                }),
                m = (0, s.forwardRef)((e, t) =>
                    (0, a.jsx)(p, { forwardRef: t, ...e }),
                );
        },
        33037: (e, t, i) => {
            "use strict";
            i.d(t, {
                R6: () => s,
                xf: () => r,
                nD: () => l.useGenerativeActions,
            });
            var a = i(41028);
            let r = (e) => {
                var t, i;
                return (0, a.wg)({
                    title: e.title,
                    stationId: e.stationId,
                    imageUrl: e.imageUrl,
                    style: {
                        backgroundColor:
                            null == (t = e.style) ? void 0 : t.backgroundColor,
                        titleColor:
                            null == (i = e.style) ? void 0 : i.titleColor,
                    },
                });
            };
            var l = i(16015);
            let s = a.gK.model("NeuromusicItem", {
                title: a.gK.string,
                stationId: a.gK.string,
                imageUrl: a.gK.maybe(a.gK.string),
                style: a.gK.maybe(
                    a.gK.model({
                        backgroundColor: a.gK.maybe(a.gK.string),
                        titleColor: a.gK.maybe(a.gK.string),
                    }),
                ),
            });
        },
        42629: (e) => {
            e.exports = {
                root: "ClipsCarousel_root__r1mGp",
                controls: "ClipsCarousel_controls__nZB6r",
            };
        },
        53631: (e) => {
            e.exports = {
                root: "ClipCardShimmer_root__sIvNr",
                cover: "ClipCardShimmer_cover__yA4jz",
                title: "ClipCardShimmer_title__MCApK",
                text: "ClipCardShimmer_text__ajZGv",
            };
        },
        54413: (e) => {
            e.exports = {
                itemCounter_3: "ClipsCarouselContent_itemCounter_3__c_H3V",
                item: "ClipsCarouselContent_item__Yy7_P",
                important: "ClipsCarouselContent_important__nZYA0",
                itemCounter_5: "ClipsCarouselContent_itemCounter_5__QeQd_",
            };
        },
        64641: (e, t, i) => {
            "use strict";
            i.d(t, {
                FC: () => _.ClipCard,
                kV: () => b.k,
                zb: () => x.ClipContextMenu,
                kv: () => m,
                KR: () => y.ClipsCarousel,
                tD: () => h.ClipsCarouselContent,
                $d: () => g,
                Nk: () => I.HorizontalClipCard,
                wS: () => l,
                i$: () => o,
                SZ: () => u,
                V1: () => c,
                XP: () => p.useClipDisclaimer,
            });
            var a = i(93435),
                r = i(70879);
            let l = (e) => {
                var t;
                if (!e)
                    return {
                        clipId: 0,
                        title: "",
                        artists: [],
                        thumbnail: "",
                        previewUrl: "",
                        duration: 0,
                        disclaimers: [],
                        trackIds: [],
                    };
                let i = [];
                return (
                    (null == (t = e.disclaimers)
                        ? void 0
                        : t.every((e) => Object.values(a.M).includes(e))) &&
                        (i = e.disclaimers),
                    {
                        clipId: e.clipId,
                        title: e.title,
                        thumbnail: e.thumbnail,
                        previewUrl: e.previewUrl,
                        duration: e.duration,
                        disclaimers: i,
                        version: e.version,
                        artists: e.artists.map((e) => {
                            let t = (0, r.NE)(e),
                                i = Number(t.id);
                            return { ...t, id: isNaN(i) ? 0 : i };
                        }),
                        trackIds: [],
                    }
                );
            };
            var s = i(41028),
                n = i(60030);
            let o = (e) => {
                var t;
                let i =
                    null == (t = e.artists)
                        ? void 0
                        : t.map((e) => (0, r.as)({ artist: e }));
                return (0, s.wg)({ ...(0, n.l6)(e), artists: i });
            };
            var d = i(79169);
            let u = (e) => {
                    var t, i;
                    let { clip: a, artists: l } = e,
                        { available: n, disclaimers: o } = (0, d.fyr)(a);
                    return (0, s.wg)({
                        clipId: a.id,
                        title: a.title,
                        thumbnail: null == (t = a.cover) ? void 0 : t.uri,
                        previewUrl: null == (i = a.cover) ? void 0 : i.videoUrl,
                        duration: a.duration,
                        artists:
                            null == l
                                ? void 0
                                : l.map((e) => (0, r.as)({ artist: e })),
                        isAvailable: n,
                        disclaimers: o,
                    });
                },
                c = (e, t) => {
                    if (!e) return { clipIds: [], activeClipIndex: 0 };
                    let i = e
                            .split(",")
                            .map(Number)
                            .filter((e) => e >= 0),
                        a = (0, n.z4)(i, t);
                    return { clipIds: i, activeClipIndex: a };
                };
            (0, i(66268).cache)(async (e) => {
                try {
                    let {
                        container: t,
                        backendHostTld: i,
                        locale: a,
                        host: r,
                        fullUrl: l,
                        isRSC: s,
                        requestUrl: n,
                    } = await (0, d.IhE)();
                    if (s || !e)
                        return {
                            clips: void 0,
                            backendHostTld: i,
                            locale: a,
                            host: r,
                            fullUrl: l,
                            requestUrl: n,
                        };
                    let o = t.get(d.jQD),
                        u = await o.getClip({ clipIds: [e] }),
                        c = l ? new URL(l) : void 0;
                    c &&
                        ((c.search = ""),
                        c.searchParams.set(
                            d.K3F.IDS,
                            String(null != e ? e : ""),
                        ));
                    let p = null == c ? void 0 : c.toString();
                    return {
                        clip: null == u ? void 0 : u[0],
                        backendHostTld: i,
                        locale: a,
                        host: r,
                        fullUrl: l,
                        requestUrl: n,
                        canonical: p,
                    };
                } catch (e) {
                    return {
                        clips: void 0,
                        backendHostTld: "",
                        locale: null,
                        host: "",
                        fullUrl: null,
                        requestUrl: null,
                    };
                }
            });
            var p = i(80159);
            let m = n.z8.props({ artists: s.gK.array(r.PK) }).views((e) => ({
                get hasArtists() {
                    return e.artists.length > 0;
                },
            }));
            var C = i(59615);
            let v = s.gK.model("Credit", {
                    title: s.gK.string,
                    value: s.gK.string,
                }),
                g = s.gK
                    .model("CurrentClipInfo", {
                        id: s.gK.maybeNull(s.gK.number),
                        clip: s.gK.maybeNull(m),
                        clipLoadingState: s.gK.enumeration(
                            Object.values(d.GuX),
                        ),
                        creditsLoadingState: s.gK.enumeration(
                            Object.values(d.GuX),
                        ),
                        credits: s.gK.maybeNull(s.gK.array(v)),
                        modal: C.qt,
                    })
                    .views((e) => ({
                        get isClipIdle() {
                            return e.clipLoadingState === d.GuX.IDLE;
                        },
                        get isClipLoading() {
                            return e.clipLoadingState === d.GuX.PENDING;
                        },
                        get isClipRejected() {
                            return e.clipLoadingState === d.GuX.REJECT;
                        },
                        get isCreditsIdle() {
                            return e.creditsLoadingState === d.GuX.IDLE;
                        },
                        get isCreditsLoading() {
                            return e.creditsLoadingState === d.GuX.PENDING;
                        },
                        get isCreditsRejected() {
                            return e.creditsLoadingState === d.GuX.REJECT;
                        },
                        get isRejected() {
                            return (
                                e.creditsLoadingState === d.GuX.REJECT &&
                                e.clipLoadingState === d.GuX.REJECT
                            );
                        },
                    }))
                    .actions((e) => ({
                        setClipId(t) {
                            e.id = t;
                        },
                        getClip: (0, s.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: i } =
                                (0, s._$)(e);
                            if (e.id && e.clipLoadingState !== d.GuX.PENDING)
                                try {
                                    e.clipLoadingState = d.GuX.PENDING;
                                    let [i] = yield t.getClip({
                                        clipIds: [e.id],
                                    });
                                    if (!i) return;
                                    (e.clip = o(i)),
                                        (e.clipLoadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t),
                                        (e.clipLoadingState = d.GuX.REJECT);
                                }
                        }),
                        getCreditsInfo: (0, s.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: i } =
                                (0, s._$)(e);
                            if (
                                !e.id ||
                                e.creditsLoadingState === d.GuX.PENDING
                            )
                                return null;
                            try {
                                e.creditsLoadingState = d.GuX.PENDING;
                                let i = yield t.getCredits({ clipId: e.id });
                                (e.credits = (0, s.wg)(
                                    null == i ? void 0 : i.credits,
                                )),
                                    (e.creditsLoadingState = d.GuX.RESOLVE);
                            } catch (t) {
                                i.error(t),
                                    (e.creditsLoadingState = d.GuX.REJECT);
                            }
                            return null;
                        }),
                        reset() {
                            (e.id = null),
                                (e.clip = null),
                                (e.clipLoadingState = d.GuX.IDLE),
                                (e.creditsLoadingState = d.GuX.IDLE),
                                (e.credits = null);
                        },
                    }));
            var _ = i(29663),
                b = i(14857),
                x = i(10957),
                y = i(32503),
                h = i(16907),
                I = i(77898);
        },
        65935: (e) => {
            e.exports = {
                card_root: "HorizontalCardContainer_root__YoAAP",
                root: "ControlsBar_root__l6Fg6",
                item: "ControlsBar_item__tEQvM",
                item_buttonArrow: "ControlsBar_item_buttonArrow__3aZyp",
                contextMenu: "ControlsBar_contextMenu__1Sj5f",
                contextMenu_visible: "ControlsBar_contextMenu_visible__FMTw4",
                controls_disabled: "ControlsBar_controls_disabled__xR0_N",
                controls: "ControlsBar_controls__PEMXx",
                likeIcon: "ControlsBar_likeIcon__UBXQm",
            };
        },
        71244: (e, t, i) => {
            "use strict";
            i.d(t, { F: () => u });
            var a,
                r = i(93225),
                l = i(66268),
                s = {
                    352: (e) => {
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(l, 2));
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return s[e](i, i.exports, o), i.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, "__esModule", { value: !0 }),
                    (d.useDebouncedToggle = void 0);
                let e = o(352),
                    t = o(810);
                d.useDebouncedToggle = (i) => {
                    let { delay: a, initialState: r, throttleTimeout: l } = i,
                        s = (0, t.useRef)(null),
                        [n, o] = (0, t.useState)(!!r),
                        d = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    o(!r),
                                        s.current &&
                                            window.clearTimeout(s.current),
                                        (s.current = window.setTimeout(() => {
                                            o(!!r);
                                        }, a));
                                }, l),
                            [a, r, l],
                        ),
                        u = (0, t.useCallback)(() => {
                            o(!!r), s.current && window.clearTimeout(s.current);
                        }, [r]);
                    return (
                        (0, t.useEffect)(
                            () => () => {
                                s.current && window.clearTimeout(s.current);
                            },
                            [],
                        ),
                        { state: n, handleDebouncedToggle: d, reset: u }
                    );
                };
            })(),
                d.__esModule;
            var u = d.useDebouncedToggle;
        },
        77205: (e, t, i) => {
            "use strict";
            var a;
            i.d(t, { Q: () => a }),
                (function (e) {
                    (e.StreamPause = "streamPause"),
                        (e.StreamPlay = "streamPlay"),
                        (e.TimestampLike = "timestampLike"),
                        (e.TimestampDislike = "timestampDislike");
                })(a || (a = {}));
        },
        77898: (e, t, i) => {
            "use strict";
            i.d(t, { HorizontalClipCard: () => M });
            var a = i(33008),
                r = i(85896),
                l = i(36998),
                s = i(97531),
                n = i(66268),
                o = i(73827),
                d = i(30293),
                u = i(18064),
                c = i(48509),
                p = i(42213),
                m = i(42314),
                C = i(88485),
                v = i(52756),
                g = i(54487),
                _ = i(77868),
                b = i(70879),
                x = i(60030),
                y = i(79169),
                h = i(18740),
                I = i(80159),
                f = i(27845),
                A = i.n(f),
                S = i(78016),
                K = i(10957),
                k = i(65935),
                N = i.n(k);
            let E = (0, s.PA)((e) => {
                let { className: t, clip: i, likeIconSize: l = "xxs" } = e,
                    { user: s } = (0, y.Pjs)(),
                    { sendLikeSearchFeedback: o } = (0, y.zEv)(),
                    d = (0, x.KX)(i),
                    [u, c] = (0, n.useState)(!1),
                    [m, C] = (0, n.useState)(!1),
                    v = (0, p.c)(() => {
                        u || i.isLiked || (c(!0), null == o || o()), d();
                    });
                return (0, a.jsx)("div", {
                    className: (0, r.$)(N().root, N().controls, t, {
                        [N().controls_disabled]: !i.isAvailable,
                    }),
                    children:
                        i.isAvailable &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(h.aQ, {
                                    fallback: (0, a.jsx)(h.cy, {
                                        size: "xs",
                                        iconSize: l,
                                        className: (0, r.$)(
                                            N().item,
                                            N().likeIcon,
                                        ),
                                        isLiked: i.isLiked,
                                        onClick: v,
                                        disabled: !s.isAuthorized,
                                    }),
                                }),
                                (0, a.jsx)(K.ClipContextMenu, {
                                    placement: "top-start",
                                    icon: (0, a.jsx)(S.Icon, {
                                        variant: "more",
                                        size: "xs",
                                    }),
                                    size: "xs",
                                    clip: i,
                                    className: (0, r.$)(N().contextMenu, {
                                        [N().contextMenu_visible]: m,
                                    }),
                                    onOpenChange: C,
                                    open: m,
                                }),
                            ],
                        }),
                });
            });
            var L = i(88221),
                j = i.n(L);
            let M = (0, s.PA)((e) => {
                var t;
                let {
                        clip: i,
                        className: s,
                        coverClassName: f,
                        playButtonIconSize: S = "xs",
                        likeIconSize: K,
                        viewUuid: k,
                        shouldShowTimecode: N = !1,
                    } = e,
                    { fullscreenVideoPlayer: L } = (0, y.Pjs)(),
                    { formatMessage: M } = (0, o.A)(),
                    P = (0, y.PMf)(null != (t = i.duration) ? t : 0),
                    T = (0, x._7)(k),
                    R = (0, x.Mn)(k),
                    { ref: w, intersectionPropertyId: D } = (0, y.nMI)({
                        callback: R,
                    }),
                    { from: O } = (0, y.fyy)({
                        pageId: y._Q$.VIDEO_PLAYER,
                        contextId: L.state.contextId,
                        contextType: c.K.Various,
                        blockId: y.UfI.CLIPS,
                    }),
                    [U, F] = (0, n.useState)(!1),
                    {
                        sendNavigateSearchFeedback: z,
                        sendPlaySearchFeedback: G,
                    } = (0, y.zEv)(),
                    V = (0, x.Cc)(),
                    X = (0, n.useRef)(null),
                    B = (0, p.c)(() => {
                        X.current &&
                            ((X.current.currentTime = 0), X.current.play());
                    }),
                    Q = (0, n.useMemo)(() => (0, l.A)(B, 500), [B]),
                    $ = (0, p.c)(() => {
                        var e;
                        null == (e = X.current) || e.pause();
                    }),
                    H = (0, n.useMemo)(
                        () => L.ids.indexOf(i.clipId),
                        [L, i.clipId],
                    ),
                    { isPlaying: Y } = (0, y.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: c.K.Various,
                                meta: { id: y.H7u.VARIOUS_CLIP_CONTEXT },
                                from: O,
                            },
                            queueParams: { index: H },
                            entitiesData: L.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(i.clipId),
                        sonataState: L.state,
                        playbackId: y.V_r.CLIP,
                    }),
                    q = (0, p.c)(() => {
                        V([i.clipId]),
                            U || Y || (F(!0), null == G || G()),
                            null == z || z(),
                            T();
                    }),
                    Z = (0, I.useClipDisclaimer)({ clip: i, callback: q }),
                    W = (0, p.c)((e) => {
                        (0, C.P)(e, h.$f.ripple), Z(e);
                    }),
                    J = (0, m.L)(() =>
                        (0, a.jsx)(_.Caption, {
                            className: (0, r.$)(h.$f.text, h.$f.titleText),
                            "aria-hidden": !0,
                            variant: "div",
                            type: "entity",
                            size: "m",
                            weight: "medium",
                            lineClamp: 1,
                            children: i.title,
                        }),
                    ),
                    ee = (0, n.useCallback)(
                        (e, t) => {
                            var r;
                            return (null == (r = i.artists) ? void 0 : r.length)
                                ? (0, a.jsx)(b.iQ, {
                                      linkClassName: e,
                                      captionClassName: t,
                                      artists: i.artists,
                                      lineClamp: 1,
                                  })
                                : null;
                        },
                        [i.artists],
                    ),
                    et = M(
                        { id: "entity-names.clip-name" },
                        { clipName: i.title },
                    ),
                    ei = (0, m.L)(() =>
                        i.isAvailable
                            ? (0, a.jsxs)(g.Paper, {
                                  className: (0, r.$)(
                                      j().cover,
                                      A().cover,
                                      A().cover_withoutOffset,
                                      f,
                                  ),
                                  radius: "xs",
                                  onMouseEnter: Q,
                                  onMouseLeave: $,
                                  children: [
                                      i.previewUrl &&
                                          (0, a.jsx)("video", {
                                              className: A().media,
                                              ref: X,
                                              poster:
                                                  i.thumbnail &&
                                                  (0, d.createAvatarVideoUrl)(
                                                      i.thumbnail,
                                                      80,
                                                  ),
                                              playsInline: !0,
                                              muted: !0,
                                              loop: !0,
                                              "aria-hidden": !0,
                                              children: (0, a.jsx)("source", {
                                                  src: i.previewUrl,
                                                  type: "video/mp4",
                                              }),
                                          }),
                                      i.thumbnail &&
                                          (0, a.jsx)(v.Image, {
                                              className: A().image,
                                              src: i.thumbnail,
                                              fit: "cover",
                                              withAvatarReplace: !0,
                                              size: 80,
                                              createUrlReplacer:
                                                  d.createAvatarVideoUrl,
                                              alt: et,
                                          }),
                                      void 0 !== i.duration &&
                                          N &&
                                          (0, a.jsx)(_.Caption, {
                                              variant: "span",
                                              className: (0, r.$)(
                                                  A().duration,
                                                  j().duration,
                                              ),
                                              type: "entity",
                                              size: "xs",
                                              weight: "medium",
                                              role: "text",
                                              "aria-label": P,
                                              children: (0, a.jsx)("span", {
                                                  "aria-hidden": "true",
                                                  children: (0, y.E4p)(
                                                      i.duration,
                                                      i.duration,
                                                  ),
                                              }),
                                          }),
                                      (0, a.jsx)(h.DM, {
                                          variant: "filled",
                                          className: A().playButton,
                                          onClick: Z,
                                          iconSize: S,
                                      }),
                                  ],
                              })
                            : (0, a.jsxs)(g.Paper, {
                                  className: (0, r.$)(
                                      j().cover,
                                      j().unavailable,
                                      f,
                                  ),
                                  radius: "xs",
                                  children: [
                                      (0, a.jsx)(v.FallbackImage, {
                                          className: A().image,
                                          iconVariant: "unavailable",
                                          iconSize: "xs",
                                          ...(0, u.Am)(
                                              u.S7.ENTITY_COVER_FALLBACK_IMAGE,
                                          ),
                                      }),
                                      (0, a.jsx)(h.DM, {
                                          variant: "filled",
                                          className: A().playButton,
                                          iconSize: S,
                                          disabled: !0,
                                      }),
                                  ],
                              }),
                    );
                return (0, a.jsxs)(h.Cj, {
                    ref: w,
                    "data-intersection-property-id": D,
                    className: (0, r.$)(
                        h.$f.root,
                        { [h.$f.root_disabled]: !i.isAvailable },
                        j().root,
                        s,
                    ),
                    onClick: W,
                    ...(0, u.Am)(u.Kq.clip.HORIZONTAL_CLIP_CARD),
                    children: [
                        ei,
                        (0, a.jsx)(h.ro, {
                            isDisabled: !i.isAvailable,
                            title: J,
                            artistsComponent: ee,
                            getDescriptionTexts: i.getDescriptionTexts,
                            explicitMarkVariant: i.explicitDisclaimer,
                            isLiked: i.isLiked,
                        }),
                        (0, a.jsx)(E, {
                            className: h.$f.controlsBar,
                            clip: i,
                            likeIconSize: K,
                        }),
                    ],
                });
            });
        },
        80159: (e, t, i) => {
            "use strict";
            i.d(t, { useClipDisclaimer: () => n });
            var a = i(66268),
                r = i(54960),
                l = i(42213),
                s = i(79169);
            let n = (e) => {
                let { clip: t, callback: i, disclaimerRejectHandler: n } = e,
                    {
                        disclaimerModalData: o,
                        modals: { disclaimerModal: d },
                    } = (0, s.Pjs)(),
                    u = (0, a.useRef)(String((0, r.A)())),
                    c = (0, a.useRef)(!1),
                    p = (0, s.NFA)().get(s.U2_);
                return (
                    (0, a.useEffect)(() => {
                        o.isUnsafeDisclaimerConfirmed &&
                            o.id === u.current &&
                            !c.current &&
                            (null == i || i(), (c.current = !0));
                    }, [i, o.id, o.isUnsafeDisclaimerConfirmed]),
                    (0, l.c)(async (e) => {
                        let a = p.get(s.cYZ.ExEx);
                        if (
                            (null == t ? void 0 : t.isUnsafeLegal) &&
                            (null == a
                                ? void 0
                                : a.includes(
                                      ""
                                          .concat(s.nPY.CLIP, "_")
                                          .concat(t.clipId),
                                  ))
                        ) {
                            null == i || i(e);
                            return;
                        }
                        if (
                            (null == t ? void 0 : t.isLegalRejected) ||
                            (null == t ? void 0 : t.isUnsafeLegal)
                        ) {
                            null == e || e.preventDefault(),
                                await o.getDisclaimerData({
                                    entityId: t.clipId,
                                    entityType: s.nPY.CLIP,
                                    disclaimerId:
                                        null == t
                                            ? void 0
                                            : t.modalDisclaimerId,
                                }),
                                t.isUnsafeLegal && o.setType(s.YwF.UNSAFE),
                                n && o.setDisclaimerRejectHandler(n),
                                o.setId(u.current),
                                o.setEntityId(t.clipId),
                                o.setEntityType(s.nPY.CLIP),
                                o.setShouldCloseModalOnOutsidePress(!1),
                                o.setShouldCloseModalOnEscape(!1),
                                (c.current = !1),
                                d.open();
                            return;
                        }
                        null == e || e.preventDefault(), null == i || i(e);
                    })
                );
            };
        },
        88221: (e) => {
            e.exports = {
                root: "HorizontalClipCard_root__B_6yA",
                cover: "HorizontalClipCard_cover__vpEvl",
                unavailable: "HorizontalClipCard_unavailable__SILaB",
                duration: "HorizontalClipCard_duration__r1UFp",
            };
        },
    },
]);
