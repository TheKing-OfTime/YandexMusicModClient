(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1766, 5242],
    {
        1357: (e, t, i) => {
            "use strict";
            i.d(t, { G: () => m });
            var r,
                n = i(93225),
                s = i(66268),
                o = {
                    6699: (e, t, i) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.useDebouncedToggle = void 0);
                        let r = i(352),
                            n = i(810);
                        t.useDebouncedToggle = (e) => {
                            let {
                                    delay: t,
                                    initialState: i,
                                    throttleTimeout: s,
                                } = e,
                                o = (0, n.useRef)(null),
                                [l, a] = (0, n.useState)(!!i),
                                d = (0, n.useMemo)(
                                    () =>
                                        (0, r.throttle)(() => {
                                            a(!i),
                                                o.current &&
                                                    window.clearTimeout(
                                                        o.current,
                                                    ),
                                                (o.current = window.setTimeout(
                                                    () => {
                                                        a(!!i);
                                                    },
                                                    t,
                                                ));
                                        }, s),
                                    [t, i, s],
                                ),
                                m = (0, n.useCallback)(() => {
                                    a(!!i),
                                        o.current &&
                                            window.clearTimeout(o.current);
                                }, [i]);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        o.current &&
                                            window.clearTimeout(o.current);
                                    },
                                    [],
                                ),
                                { state: l, handleDebouncedToggle: d, reset: m }
                            );
                        };
                    },
                    2767: (e, t, i) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.useForceUpdateRef = void 0);
                        let r = i(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, r.useState)(null);
                            return [
                                e,
                                (0, r.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    2067: (e, t, i) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.useScroll = void 0);
                        let r = i(810),
                            n = i(361),
                            s = i(6699);
                        t.useScroll = (e) => {
                            let {
                                    onScroll: t,
                                    listenIsScrolling: i,
                                    elementRef: o,
                                } = e,
                                { state: l, handleDebouncedToggle: a } = (0,
                                s.useDebouncedToggle)({
                                    delay: 1e3,
                                    throttleTimeout: 100,
                                }),
                                d = (0, r.useCallback)(() => {
                                    i && a(), null == t || t();
                                }, [i, a, t]);
                            return (
                                (0, r.useEffect)(() => {
                                    let e = (0, n.getElementFromRefOrElement)(
                                        o,
                                    );
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        i = { capture: !0, passive: !0 };
                                    return (
                                        t.addEventListener("scroll", d, i),
                                        () =>
                                            t.removeEventListener(
                                                "scroll",
                                                d,
                                                i,
                                            )
                                    );
                                }, [o, d]),
                                l
                            );
                        };
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement)
                                        return e;
                                    if (
                                        null === e.current ||
                                        e.current instanceof HTMLElement
                                    )
                                        return e.current;
                                }
                            });
                    },
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(s, 2));
                    },
                },
                l = {};
            function a(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var i = (l[e] = { exports: {} });
                return o[e](i, i.exports, a), i.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, "__esModule", { value: !0 }),
                    (d.useElementOffsetY = void 0);
                let e = a(810),
                    t = a(2067),
                    i = a(2767);
                d.useElementOffsetY = (r) => {
                    let [n, s] = (0, i.useForceUpdateRef)(),
                        [o, l] = (0, e.useState)(),
                        a = (0, e.useCallback)(() => {
                            let e =
                                null == n ? void 0 : n.getBoundingClientRect();
                            e && l(e.y);
                        }, [n]);
                    return (
                        (0, e.useLayoutEffect)(a),
                        (0, t.useScroll)({ onScroll: a, elementRef: r }),
                        { forceUpdateRefCallback: s, offsetY: o }
                    );
                };
            })(),
                d.__esModule;
            var m = d.useElementOffsetY;
        },
        2117: (e, t, i) => {
            "use strict";
            i.d(t, { XU: () => u });
            var r,
                n,
                s = i(7144),
                o = i(66268),
                l = i(73827);
            !(function (e) {
                (e.formatDate = "FormattedDate"),
                    (e.formatTime = "FormattedTime"),
                    (e.formatNumber = "FormattedNumber"),
                    (e.formatList = "FormattedList"),
                    (e.formatDisplayName = "FormattedDisplayName");
            })(r || (r = {})),
                (function (e) {
                    (e.formatDate = "FormattedDateParts"),
                        (e.formatTime = "FormattedTimeParts"),
                        (e.formatNumber = "FormattedNumberParts"),
                        (e.formatList = "FormattedListParts");
                })(n || (n = {}));
            var a = function (e) {
                var t = (0, l.A)(),
                    i = e.value,
                    r = e.children,
                    n = (0, s.__rest)(e, ["value", "children"]);
                return r(t.formatNumberToParts(i, n));
            };
            function d(e) {
                var t = function (t) {
                    var i = (0, l.A)(),
                        r = t.value,
                        n = t.children,
                        o = (0, s.__rest)(t, ["value", "children"]),
                        a = "string" == typeof r ? new Date(r || 0) : r;
                    return n(
                        "formatDate" === e
                            ? i.formatDateToParts(a, o)
                            : i.formatTimeToParts(a, o),
                    );
                };
                return (t.displayName = n[e]), t;
            }
            function m(e) {
                var t = function (t) {
                    var i = (0, l.A)(),
                        r = t.value,
                        n = t.children,
                        a = (0, s.__rest)(t, ["value", "children"]),
                        d = i[e](r, a);
                    if ("function" == typeof n) return n(d);
                    var m = i.textComponent || o.Fragment;
                    return o.createElement(m, null, d);
                };
                return (t.displayName = r[e]), t;
            }
            (a.displayName = "FormattedNumberParts"),
                (a.displayName = "FormattedNumberParts");
            var u = m("formatDate");
            m("formatTime"),
                m("formatNumber"),
                m("formatList"),
                m("formatDisplayName"),
                d("formatDate"),
                d("formatTime");
        },
        2865: (e, t, i) => {
            "use strict";
            i.d(t, {
                QQ: () => N,
                Op: () => A,
                x5: () => K,
                jh: () => L.PromoLandingSonataControls,
                s_: () => F.RepeatButton,
                uP: () => T.ShuffleButton,
                $u: () => w.SonataControls,
                bG: () => j,
                qF: () => E.SonataVideoControls,
                x6: () => C,
                EX: () => l,
                li: () => d,
                pE: () => v,
                AA: () => c.useOnRepeatClick,
                e9: () => b.useOnShuffleClick,
                d0: () => h.useToggleMute,
            });
            var r = i(41028),
                n = i(75305),
                s = i(70879),
                o = i(79169);
            let l = (e) => {
                if (e.data.type !== n.R.Clip) return null;
                {
                    var t;
                    let i = e.data.meta;
                    if (!i.clipId) return null;
                    let n =
                            null == (t = i.artists)
                                ? void 0
                                : t.map((e) => (0, s.as)({ artist: e })),
                        { available: l, disclaimers: a } = (0, o.fyr)(i);
                    return (0, r.wg)({
                        clipId: i.clipId,
                        title: i.title,
                        thumbnail: i.thumbnail,
                        duration: i.duration,
                        previewUrl: i.previewUrl,
                        isAvailable: l,
                        disclaimers: a,
                        artists: n,
                        isHiddenFromSonataQueue: e.hidden,
                    });
                }
            };
            var a = i(53555);
            let d = (e, t) => ({
                type: a.z4.Unloaded,
                meta: { id: e, albumId: t },
            });
            var m = i(95592),
                u = i(61744);
            let v = (e) => {
                var t, i, l;
                switch (e.data.type) {
                    case n.R.Generative: {
                        let i = e.data.meta,
                            n = (0, o.QBb)(
                                null == i ? void 0 : i.derivedColors,
                            );
                        return (0, r.wg)({
                            id: String(i.id),
                            coverUri: i.imageUrl,
                            title: null != (t = i.title) ? t : "",
                            isAvailable: !0,
                            isRemoved: !1,
                            averageColor: n,
                        });
                    }
                    case n.R.Clip:
                    case a.z4.Unloaded:
                    case n.R.Radio:
                        return null;
                    default: {
                        let t = e.data.meta,
                            n = null == (i = t.artists) ? void 0 : i.map(s.dM),
                            o = null == (l = t.albums) ? void 0 : l.map(m.e7);
                        return (0, r.wg)({
                            ...(0, u.gK)(t),
                            artists: n,
                            albums: o,
                            isHiddenFromSonataQueue: e.hidden,
                        });
                    }
                }
            };
            var c = i(48148),
                b = i(73904),
                h = i(26893),
                P = i(86512),
                p = i(29318),
                y = i(48509),
                g = i(43090),
                _ = i(10663);
            let f = r.gK.model("UnloadedEntityMeta", {
                    id: r.gK.union(r.gK.number, r.gK.string),
                    albumId: r.gK.maybe(r.gK.union(r.gK.number, r.gK.string)),
                }),
                C = r.gK.model("UnloadedEntityData", {
                    meta: f,
                    type: r.gK.literal(a.z4.Unloaded),
                });
            var x = i(6247),
                k = i(16285);
            let K = u.OQ.props({
                    artists: r.gK.array(s.PK),
                    albums: r.gK.array(m.GI),
                    chart: r.gK.maybe(k.Iz),
                    isHiddenFromSonataQueue: r.gK.maybe(r.gK.boolean),
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
                            var i, r;
                            return null !=
                                (r = null == (i = e.artists) ? void 0 : i[0])
                                ? r
                                : null;
                        },
                        get mainAlbum() {
                            var n, s;
                            return null !=
                                (s = null == (n = e.albums) ? void 0 : n[0])
                                ? s
                                : null;
                        },
                        get index() {
                            var o, l, a;
                            return null !=
                                (a =
                                    null == (l = e.albums[0]) ||
                                    null == (o = l.trackPosition)
                                        ? void 0
                                        : o.index)
                                ? a
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
                            return e.type === x.S.AUDIOBOOK;
                        },
                        get isFairyTale() {
                            return e.type === x.S.FAIRY_TALE;
                        },
                        get isNonMusic() {
                            return (
                                this.isPodcast ||
                                this.isAudiobook ||
                                this.isFairyTale
                            );
                        },
                        get isAvailableOnlyForPlus() {
                            var m;
                            return !!(null == (m = this.mainAlbum)
                                ? void 0
                                : m.isAvailableOnlyForPlus);
                        },
                    }))
                    .actions((e) => ({
                        changeTrackInfo: (0, r.L3)(function* (t, i) {
                            let { ugcResource: n, modelActionsLogger: l } = (0,
                            r._$)(e);
                            if (
                                e.artists.map((e) => e.name).join(", ") === i &&
                                t === e.title
                            )
                                return o.FlZ.OK;
                            try {
                                var a;
                                yield n.changeTrack({
                                    trackId: e.id,
                                    title: t,
                                    artist: i,
                                }),
                                    (e.title = t);
                                let l =
                                    (null == (a = e.artists[0])
                                        ? void 0
                                        : a.id) || "0";
                                if (((e.artists = (0, r.wg)([])), i)) {
                                    let t = s.PK.create({
                                        id: l,
                                        name: i,
                                        isAvailable: !0,
                                    });
                                    e.artists = (0, r.wg)([t]);
                                }
                                return o.FlZ.OK;
                            } catch (e) {
                                return l.error(e), o.FlZ.ERROR;
                            }
                        }),
                    })),
                N = r.gK
                    .model("BaseSonataState", {
                        contextType: r.gK.maybeNull(
                            r.gK.enumeration(Object.values(y.K)),
                        ),
                        contextId: r.gK.maybeNull(r.gK.string),
                        entityMeta: r.gK.maybeNull(K),
                        status: r.gK.enumeration(Object.values(a.MT)),
                        canMoveForward: r.gK.boolean,
                        canMoveBackward: r.gK.boolean,
                        canSpeed: r.gK.boolean,
                        repeatMode: r.gK.enumeration(Object.values(_.pM)),
                        canChangeRepeatMode: r.gK.boolean,
                        volume: r.gK.maybe(r.gK.number),
                        speed: r.gK.maybe(r.gK.number),
                        position: r.gK.maybeNull(r.gK.number),
                        duration: r.gK.maybeNull(r.gK.number),
                        canShuffle: r.gK.boolean,
                        shuffle: r.gK.boolean,
                        quality: r.gK.enumeration(Object.values(g.e)),
                        unloadedEntitiesData: r.gK.maybe(r.gK.array(C)),
                    })
                    .volatile(() => ({ volatileUnloadedEntitiesData: void 0 }))
                    .views((e) => ({
                        get unloadedEntitiesDataFromModels() {
                            var t;
                            return null != (t = e.volatileUnloadedEntitiesData)
                                ? t
                                : (0, p.HO)(e.unloadedEntitiesData);
                        },
                        get isVibeContext() {
                            return e.contextType === y.K.Vibe;
                        },
                        get isGenerativeContext() {
                            return e.contextType === y.K.Generative;
                        },
                        get isPaused() {
                            return e.status === a.MT.PAUSED;
                        },
                        get isPlaying() {
                            return e.status === a.MT.PLAYING;
                        },
                        get isContextRepeatMode() {
                            return e.repeatMode === _.pM.CONTEXT;
                        },
                        get isOneRepeatMode() {
                            return e.repeatMode === _.pM.ONE;
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
                            t && t.data.meta && (e.entityMeta = v(t));
                        },
                        setUnloadedEntitiesData: (t) => {
                            t &&
                                ((e.volatileUnloadedEntitiesData = (0, P.A)(t)),
                                (e.unloadedEntitiesData = (0, r.wg)(t)));
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
                A = i(60030)
                    .z8.props({
                        artists: r.gK.array(s.PK),
                        isHiddenFromSonataQueue: r.gK.maybe(r.gK.boolean),
                    })
                    .views((e) => ({
                        get idWithContext() {
                            return String(e.clipId);
                        },
                    })),
                j = N.props({
                    playlistFilter: r.gK.maybe(r.gK.string),
                    areCoresRegistered: r.gK.boolean,
                    isVHCoreRegistered: r.gK.boolean,
                    shouldApplyYnisonState: r.gK.optional(r.gK.boolean, !0),
                    isCrossFadeEnabled: r.gK.boolean,
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
                            let { localStorage: i } = (0, r._$)(e);
                            i.set(o.cYZ.CrossFadeMode, t),
                                (e.isCrossFadeEnabled = t);
                        },
                    }))
                    .named("SonataState");
            i(75797), i(1199);
            var L = i(61646),
                F = i(57526),
                T = i(67950),
                w = i(357),
                E = i(33363);
        },
        14829: (e, t, i) => {
            "use strict";
            i.d(t, { r: () => s });
            var r = i(66268),
                n = i(73827);
            let s = (e) => {
                let { formatMessage: t } = (0, n.A)();
                return (0, r.useMemo)(() => {
                    let i = "";
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: "entity-names.has-your-like" }))
                        : "number" == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t(
                                        { id: "entity-names.likes-counter" },
                                        { counter: e.actualLikesCount },
                                    )
                                  : t({
                                        id: "entity-names.likes-counter-empty",
                                    }));
                    let r = t(
                        { id: "entity-names.playlist-name" },
                        { playlistName: e.title },
                    );
                    return "".concat(r, " ").concat(i);
                }, [t, e]);
            };
        },
        17999: (e, t, i) => {
            "use strict";
            i.d(t, { PlaylistsCarousel: () => a });
            var r = i(33008),
                n = i(66268),
                s = i(18740),
                o = i(56395);
            let l = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: n,
                        title: l,
                        description: a,
                        playlists: d,
                        containerClassName: m,
                        className: u,
                        headerClassName: v,
                        viewAllActionLink: c,
                        headingVariant: b,
                        ...h
                    } = e;
                    return (0, r.jsx)(s.OY, {
                        isShimmerVisible: i,
                        isShimmerActive: n,
                        className: u,
                        headerClassName: v,
                        containerClassName: m,
                        ref: t,
                        title: l,
                        description: a,
                        viewAllActionLink: c,
                        headingVariant: b,
                        ...h,
                        children:
                            null == d
                                ? void 0
                                : d.map((e) =>
                                      (0, r.jsx)(
                                          o.PlaylistCard,
                                          { playlist: e, contentLinesCount: 3 },
                                          e.key,
                                      ),
                                  ),
                    });
                },
                a = (0, n.forwardRef)((e, t) =>
                    (0, r.jsx)(l, { forwardRef: t, ...e }),
                );
        },
        19525: (e) => {
            e.exports = {
                description: "HorizontalPlaylistCard_description__KYHZF",
                likesCount: "HorizontalPlaylistCard_likesCount__rgUhr",
                tracksCount: "HorizontalPlaylistCard_tracksCount__ZdjzM",
                icon: "HorizontalPlaylistCard_icon__LHymu",
            };
        },
        26271: (e) => {
            e.exports = {
                root: "NotFound_root__47ZX6",
                root_desktop: "NotFound_root_desktop___QqSb",
                navigation: "NotFound_navigation__q8rIW",
                content: "NotFound_content__3kry_",
                icon: "NotFound_icon___Wa9y",
                title: "NotFound_title__akG_o",
                important: "NotFound_important__z1LWl",
                text: "NotFound_text__oxDZv",
                button: "NotFound_button__jF4uH",
            };
        },
        27618: (e, t, i) => {
            "use strict";
            i.d(t, { NotFound: () => h });
            var r = i(33008),
                n = i(85896),
                s = i(97531),
                o = i(96560),
                l = i(44189),
                a = i(78016),
                d = i(77868),
                m = i(79169),
                u = i(18740),
                v = i(66268),
                c = i(26271),
                b = i.n(c);
            let h = (0, s.PA)((e) => {
                let {
                        className: t,
                        title: i,
                        description: s,
                        iconVariant: c = "musicLogo",
                        iconClassName: h,
                        iconSize: P,
                    } = e,
                    { contentRef: p } = (0, m.gKY)(),
                    y = (0, m.ZpR)(m.Zyd.main.href);
                (0, m.LZB)();
                let { handleNavigateToMain: g } = (0, m.D5F)(y);
                return (
                    (0, m.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, m.Pjs)();
                        (0, v.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, r.jsxs)("div", {
                        className: (0, n.$)(
                            b().root,
                            { [b().root_desktop]: !p },
                            t,
                        ),
                        children: [
                            (0, r.jsx)(u.Lh, {
                                withBackwardFallback: "/",
                                className: b().navigation,
                                withForwardControl: !1,
                            }),
                            (0, r.jsxs)("div", {
                                className: b().content,
                                children: [
                                    (0, r.jsx)(a.Icon, {
                                        className: (0, n.$)(b().icon, h),
                                        variant: c,
                                        size: P,
                                    }),
                                    (0, r.jsx)(d.Heading, {
                                        className: (0, n.$)(
                                            b().title,
                                            b().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            i ||
                                            (0, r.jsx)(o.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, r.jsx)(d.Caption, {
                                        className: (0, n.$)(
                                            b().text,
                                            b().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            s ||
                                            (0, r.jsx)(o.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, r.jsx)(l.Button, {
                                        onClick: g,
                                        className: b().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, r.jsx)(d.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, r.jsx)(o.A, {
                                                id: "navigation.page-main",
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        29371: (e, t, i) => {
            "use strict";
            i.d(t, { FN: () => n, gj: () => r }), i(27224);
            let r = (e) => {
                    let {
                        containerNodeRect: t,
                        draggingNodeRect: i,
                        transform: r,
                    } = e;
                    return i && t
                        ? (function (e, t, i) {
                              let r = { ...e };
                              return (
                                  t.top + e.y <= i.top
                                      ? (r.y = i.top - t.top)
                                      : t.bottom + e.y >= i.top + i.height &&
                                        (r.y = i.top + i.height - t.bottom),
                                  t.left + e.x <= i.left
                                      ? (r.x = i.left - t.left)
                                      : t.right + e.x >= i.left + i.width &&
                                        (r.x = i.left + i.width - t.right),
                                  r
                              );
                          })(r, i, t)
                        : r;
                },
                n = (e) => {
                    let { transform: t } = e;
                    return { ...t, x: 0 };
                };
        },
        30672: (e) => {
            e.exports = {
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
        35233: (e, t, i) => {
            "use strict";
            i.d(t, { M: () => r.NotFound });
            var r = i(27618);
        },
        45242: (e, t, i) => {
            "use strict";
            i.d(t, {
                pA: () => C.EmptyPlaylistBlock,
                vf: () => x.HorizontalPlaylistCard,
                B6: () => k.PlaylistCard,
                BL: () => _,
                IP: () => f,
                EC: () => K.PlaylistsCarousel,
                bk: () => s,
                ZC: () => m,
                Ew: () => v,
                pd: () => b,
            });
            var r = i(41028),
                n = i(79169);
            let s = (e) => {
                var t, i;
                let {
                    playlist: s,
                    generatedPlaylistType: o,
                    likesCount: l,
                    trailer: a,
                    tracksCount: d,
                } = e;
                return (0, r.wg)({
                    isAvailable: null == (i = s.available) || i,
                    uuid: s.playlistUuid,
                    title: s.title,
                    uid: s.uid,
                    kind: s.kind,
                    coverUri: null == (t = s.cover) ? void 0 : t.uri,
                    generatedPlaylistType: o,
                    likesCount: l,
                    tracksCount: d,
                    trailer: (0, n.mxW)(a),
                });
            };
            var o = i(17846),
                l = i(66268);
            (0, l.cache)(async (e, t) => {
                var i;
                let r;
                try {
                    let {
                        container: i,
                        backendHostTld: s,
                        locale: o,
                        host: l,
                        fullUrl: a,
                        isRSC: d,
                        requestUrl: m,
                    } = await (0, n.IhE)();
                    if (d)
                        return {
                            playlist: void 0,
                            backendHostTld: s,
                            locale: o,
                            host: l,
                            fullUrl: a,
                            requestUrl: m,
                        };
                    let u = i.get(n._19);
                    r = {
                        playlist: await u.getPlaylistWithTracksIds({
                            userId: e,
                            playlistKind: t,
                            resumeStream: !1,
                        }),
                        backendHostTld: s,
                        locale: o,
                        host: l,
                        fullUrl: a,
                        requestUrl: m,
                    };
                } catch (e) {
                    return (0, n.tfF)(e, () => ({
                        playlist: void 0,
                        ...(0, n.Bj3)(),
                    }));
                }
                return (
                    (null == (i = r.playlist) ? void 0 : i.error) ===
                        "not-found" && (0, o.notFound)(),
                    r
                );
            }),
                (0, l.cache)(async (e) => {
                    var t;
                    let i;
                    (0, n.sU0)(e) || (0, o.notFound)();
                    try {
                        let {
                            container: t,
                            backendHostTld: r,
                            locale: s,
                            host: o,
                            fullUrl: l,
                            isRSC: a,
                            requestUrl: d,
                        } = await (0, n.IhE)();
                        if (a)
                            return {
                                playlist: void 0,
                                backendHostTld: r,
                                locale: s,
                                host: o,
                                fullUrl: l,
                                requestUrl: d,
                            };
                        let m = t.get(n.qNr);
                        i = {
                            playlist: await m.getPlaylist({
                                playlistUuid: e,
                                resumeStream: !1,
                                richTracks: !1,
                            }),
                            backendHostTld: r,
                            locale: s,
                            host: o,
                            fullUrl: l,
                            requestUrl: d,
                        };
                    } catch (e) {
                        return (0, n.tfF)(e, () => ({
                            playlist: void 0,
                            ...(0, n.Bj3)(),
                        }));
                    }
                    return (
                        (null == (t = i.playlist) ? void 0 : t.error) ===
                            "not-found" && (0, o.notFound)(),
                        i
                    );
                });
            var a = i(25911);
            let d = (e) => ({
                    uid: e.uid,
                    login: e.login,
                    name: e.name,
                    sex: e.sex,
                    verified: e.verified,
                }),
                m = (e) =>
                    (0, r.wg)({
                        ...(0, a.jX)(e),
                        owner: e.owner ? d(e.owner) : void 0,
                        description: e.description,
                        tags: e.tags,
                        modified: e.modified,
                        madeFor: e.madeFor
                            ? ((e) =>
                                  (0, r.wg)({
                                      userInfo: e.userInfo
                                          ? d(e.userInfo)
                                          : null,
                                      caseForms: e.caseForms
                                          ? (0, n.NH4)(e.caseForms)
                                          : null,
                                  }))(e.madeFor)
                            : null,
                    });
            var u = i(70879);
            let v = (e) => {
                var t, i;
                return (0, r.wg)({
                    ...(0, a.jX)(e),
                    artists:
                        null !=
                        (i =
                            null == e || null == (t = e.artists)
                                ? void 0
                                : t.map(u.dM))
                            ? i
                            : [],
                });
            };
            var c = i(61744);
            let b = (e) => {
                var t, i;
                return (0, r.wg)({
                    ...(0, a.jX)(e),
                    tracks:
                        null !=
                        (i =
                            null == e || null == (t = e.tracks)
                                ? void 0
                                : t.map(c.Rw))
                            ? i
                            : [],
                });
            };
            var h = i(59615),
                P = i(64802);
            let p = r.gK.model("PlaylistOwner", {
                    uid: r.gK.number,
                    login: r.gK.string,
                    name: r.gK.string,
                    sex: r.gK.enumeration(Object.values(P.U)),
                    verified: r.gK.boolean,
                }),
                y = r.gK.model("PlaylistOwner", {
                    userInfo: r.gK.maybeNull(p),
                    caseForms: r.gK.maybeNull(h.lg),
                }),
                g = r.gK.model("PlaylistTag", {
                    id: r.gK.string,
                    value: r.gK.string,
                }),
                _ = a.$o
                    .props({
                        owner: r.gK.maybe(p),
                        modified: r.gK.string,
                        description: r.gK.maybe(r.gK.string),
                        tags: r.gK.maybeNull(r.gK.array(g)),
                        madeFor: r.gK.maybeNull(y),
                    })
                    .views((e) => ({
                        get seeds() {
                            var t;
                            return [
                                "playlist:"
                                    .concat(
                                        null == (t = e.owner)
                                            ? void 0
                                            : t.login,
                                        "_",
                                    )
                                    .concat(e.kind),
                            ];
                        },
                        get tagsString() {
                            let { experiments: t } = (0, r.Zn)(e);
                            if (
                                !t.checkExperiment(
                                    n.zal.WebEditorsFeatures,
                                    "on",
                                ) ||
                                !Array.isArray(e.tags) ||
                                !e.tags.length
                            )
                                return null;
                            return e.tags.map((e) => e.value).join(", ");
                        },
                    }))
                    .actions((e) => ({
                        changeDescription: (0, r.L3)(function* (t) {
                            if (!(0, r._n)(e)) return n.FlZ.ERROR;
                            if (e.description === t) return n.FlZ.OK;
                            if (t.length > a.iz) return n.FlZ.ERROR;
                            let { usersResource: i, modelActionsLogger: s } =
                                (0, r._$)(e);
                            if (e.canUserChange) {
                                let r = e.description;
                                e.description = t;
                                try {
                                    let r = yield i.changePlaylistDescription({
                                        description: t,
                                        userId: e.uid,
                                        playlistKind: e.kind,
                                    });
                                    return (
                                        (e.description = r.description),
                                        n.FlZ.OK
                                    );
                                } catch (t) {
                                    (e.description = r), s.error(t);
                                }
                            }
                            return n.FlZ.ERROR;
                        }),
                        changePlaylistCover: (0, r.L3)(function* (t) {
                            if (!(0, r._n)(e)) return n.FlZ.ERROR;
                            let { usersResource: i, modelActionsLogger: s } =
                                (0, r._$)(e);
                            try {
                                let r = yield i.uploadPlaylistCover({
                                    userId: e.uid,
                                    formData: t,
                                    playlistKind: e.kind,
                                });
                                return (e.coverUri = r.cover.uri), n.FlZ.OK;
                            } catch (e) {
                                s.error(e);
                            }
                            return n.FlZ.ERROR;
                        }),
                    }))
                    .named("PlaylistMeta"),
                f = a.Zq.props({ artists: r.gK.maybe(r.gK.array(u.PK)) });
            var C = i(91919),
                x = i(75658),
                k = i(56395),
                K = i(17999);
        },
        56395: (e, t, i) => {
            "use strict";
            i.d(t, { PlaylistCard: () => A });
            var r = i(33008),
                n = i(85896),
                s = i(97531),
                o = i(66268),
                l = i(73827),
                a = i(93967),
                d = i(18064),
                m = i(48509),
                u = i(42213),
                v = i(42314),
                c = i(69476),
                b = i(78016),
                h = i(54487),
                P = i(77868),
                p = i(70879),
                y = i(25911),
                g = i(79169),
                _ = i(18740),
                f = i(14829),
                C = i(66098),
                x = i(28996);

            var electronBridge = i(77575),
                cssDataData = i(42795),
                icon = i(78016),
                contextMenuItem = i(66098),
                cssData = i.n(cssDataData);


            let downloadTracksToFile = (0, s.PA)((e) => {
                let { playlist: playlist, tracksIds: tracksIds } = e,

                    trackName = (0, o.useMemo)(
                        () => {
                            return `${playlist.title}`;
                        },
                        [playlist],
                    ),

                    onClick = (0, o.useCallback)(() => {
                        electronBridge.sendDownloadTracks(tracksIds, 'playlist', trackName);
                    }, [trackName]);
                return (0, r.jsx)(contextMenuItem.Dr, {
                    onClick: onClick,
                    icon: (0, r.jsx)(icon.Icon, {
                        variant: "download",
                        size: "xxs",
                    }),
                    className: cssData().root,
                    children: 'Скачать в файл',
                });
            });

            let k = (0, s.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: n, open: s, ...o } = e,
                    {
                        shouldShowBuySubscriptionModal: m,
                        showBuySubscriptionModal: v,
                    } = (0, g.qBP)(),
                    {
                        experiments: c,
                        settings: { isMobile: b },
                        trailer: h,
                        user: P,
                    } = (0, g.Pjs)(),
                    p = (0, y.KX)(i),
                    f = (0, y.A7)(i),
                    k = (0, g.Ftl)(),
                    { formatMessage: K } = (0, l.A)(),
                    N = (0, g.PT7)(),
                    A = c.checkExperiment(g.zal.WebEditorsFeatures, "on"),
                    j = (0, x.A_)({
                        entityVariant: g.DwC.PLAYLIST,
                        urlParams: { id: i.uid, kind: i.kind },
                    });
                (0, g.NBO)(s);
                let L = (0, u.c)(() => {
                    if (m) return void v();
                    N() ||
                        (h.openPlaylistTrailer(i.id), k(a.ky.Playlist, i.id));
                });
                return (0, r.jsxs)(C.W1, {
                    title: i.title,
                    onOpenChange: n,
                    open: s,
                    offsetOptions: 10,
                    isMobile: b,
                    ariaLabel: K({ id: "interface-actions.context-menu" }),
                    containerProps: (0, d.Am)(
                        d.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ),
                    ...o,
                    children: [
                        A &&
                            (0, r.jsx)(x.dx, {
                                entityVariant: g.DwC.PLAYLIST,
                                adminUrl: i.isFavouritePlaylist ? void 0 : j,
                            }),
                        !b &&
                            (0, r.jsx)(_.L1, {
                                onClick: f,
                                isPinned: i.isPinned,
                            }),
                        !i.isFavouritePlaylist &&
                            (0, r.jsx)(_.TW, {
                                onClick: p,
                                isLiked: i.isLiked,
                                disabled: !P.isAuthorized,
                            }),
                        (0, r.jsx)(downloadTracksToFile, {
                            playlist: i,
                            tracksIds: trackIds,
                        }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) &&
                            (0, r.jsx)(_.No, {
                                onClick: L,
                                disabled: !i.isAvailable,
                            }),
                    ],
                });
            });
            var K = i(96973),
                N = i.n(K);
            let A = (0, s.PA)((e) => {
                let {
                        className: t,
                        playlist: i,
                        children: s,
                        contentLinesCount: C,
                        customDescription: x,
                    } = e,
                    { ref: K, intersectionPropertyId: A } = (0, g.nMI)(),
                    { trailer: j, user: L } = (0, g.Pjs)(),
                    { from: F, utmLink: T } = (0, g.fyy)({
                        contextId: i.uuid,
                        contextType: m.K.Playlist,
                    }),
                    { formatMessage: w } = (0, l.A)(),
                    {
                        sendLikeSearchFeedback: E,
                        sendNavigateSearchFeedback: S,
                        sendPlaySearchFeedback: M,
                    } = (0, g.zEv)(),
                    [B, R] = (0, o.useState)(!1),
                    [I, O] = (0, o.useState)(!1),
                    [z, D] = (0, o.useState)(!1),
                    U = (0, f.r)(i),
                    $ = (0, y.KX)(i),
                    Y = (0, y.A7)(i),
                    H = (0, g.NKK)(),
                    Z = (0, g.brA)(),
                    q = (0, g.ZpR)(i.url),
                    Q = (0, g.Ftl)(),
                    V = (0, g.PT7)(),
                    W = (0, u.c)((e) => {
                        if ((e.stopPropagation(), V()))
                            return void e.preventDefault();
                        j.setUtmLink(T),
                            j.openPlaylistTrailer(i.id),
                            Q(a.ky.Playlist, i.id);
                    }),
                    [X, G] = (0, o.useState)(!1),
                    { isPlaying: J, togglePlay: ee } = (0, g.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: m.K.Playlist,
                                meta: { id: i.id, uuid: i.uuid },
                                from: F,
                                utmLink: T,
                            },
                            loadContextMeta: !0,
                        },
                    }),
                    et = (0, u.c)(() => {
                        H({ to: a.QT.PlaylistScreen }), null == S || S();
                    }),
                    ei = (0, u.c)((e) => {
                        et(), q(e);
                    }),
                    er = (0, u.c)(() => {
                        V() ||
                            (B || J || (R(!0), null == M || M()), ee(), Z(!J));
                    }),
                    en = (0, u.c)(() => {
                        I || i.isLiked || (O(!0), null == E || E()), $();
                    }),
                    es = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eo = (0, u.c)((e) => {
                        D(e), G(e);
                    }),
                    el = (0, o.useMemo)(() => {
                        var e;
                        return x
                            ? (0, r.jsx)(
                                  P.Caption,
                                  {
                                      variant: "span",
                                      type: "entity",
                                      size: "s",
                                      weight: "medium",
                                      lineClamp: 2,
                                      children: x,
                                  },
                                  i.getKey("description"),
                              )
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    p.iQ,
                                    {
                                        className: N().artists,
                                        artists: i.artists,
                                        lineClamp: 1,
                                        linkClassName: N().artistLink,
                                        captionSize: "s",
                                    },
                                    i.getKey("description"),
                                )
                              : void 0;
                    }, [x, i]),
                    ea = (0, v.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                _.cy,
                                {
                                    className: (0, n.$)(
                                        N().likeButton,
                                        N().control,
                                    ),
                                    isLiked: i.isLiked,
                                    onClick: en,
                                    variant: "default",
                                    size: "s",
                                    iconSize: "xxs",
                                    disabled: !L.isAuthorized,
                                },
                                i.getKey("LikeButton"),
                            );
                    }),
                    ed = (0, o.useMemo)(() => {
                        var e;
                        if (
                            null == i || null == (e = i.trailer)
                                ? void 0
                                : e.isAvailable
                        )
                            return (0, r.jsx)(
                                _.nE,
                                {
                                    children: (0, r.jsx)(
                                        _.kJ,
                                        {
                                            className: (0, n.$)(
                                                N().trailerButton,
                                                N().control,
                                            ),
                                            radius: "round",
                                            size: "s",
                                            iconSize: "xxs",
                                            onClick: W,
                                        },
                                        i.getKey("TrailerButton"),
                                    ),
                                },
                                i.getKey("PlaylilstCardTrailerTooltip"),
                            );
                    }, [W, i]),
                    em = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(
                                _.O0,
                                {
                                    onClick: Y,
                                    isPinned: i.isPinned,
                                    className: (0, n.$)(
                                        N().pinButton,
                                        N().control,
                                    ),
                                    withRipple: !1,
                                },
                                i.getKey("PinButton"),
                            ),
                        [Y, i],
                    ),
                    eu = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(h.Paper, {
                                className: N().cover,
                                radius: "s",
                                withShadow: !0,
                                ...(0, d.Am)(d.Kq.playlist.PLAYLIST_CARD),
                                children: (0, r.jsxs)("div", {
                                    className: N().coverBlock,
                                    onClick: ei,
                                    children: [
                                        (0, r.jsx)(_.BW, {
                                            className: N().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: "cover",
                                            alt: U,
                                            withAvatarReplace: !0,
                                            "aria-hidden": !0,
                                        }),
                                        (0, r.jsx)(c.hg, {
                                            isVisible: z || X,
                                            className: N().controls,
                                            playControl: (0, r.jsx)(
                                                _.DM,
                                                {
                                                    className: (0, n.$)(
                                                        N().playButton,
                                                        N().control,
                                                    ),
                                                    buttonVariant: "default",
                                                    withHover: !1,
                                                    iconSize: "xl",
                                                    variant: "filled",
                                                    onClick: er,
                                                    isPlaying: J,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey("PlayButton"),
                                            ),
                                            likeControl: ea,
                                            menuControl: (0, r.jsx)(
                                                k,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eo,
                                                    open: z,
                                                    onClick: es,
                                                    className: (0, n.$)(
                                                        N().menuButton,
                                                        N().control,
                                                    ),
                                                    icon: (0, r.jsx)(b.Icon, {
                                                        size: "xxs",
                                                        variant: "more",
                                                    }),
                                                    size: "s",
                                                    ...(0, d.Am)(
                                                        d.Kq.playlist
                                                            .PLAYLIST_CONTEXT_MENU_BUTTON,
                                                    ),
                                                },
                                                i.getKey("PlaylistContextMenu"),
                                            ),
                                            pinControl: em,
                                            trailerControl: ed,
                                        }),
                                    ],
                                }),
                            }),
                        [ei, i, U, z, X, er, J, ea, eo, es, em, ed],
                    ),
                    ev = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(c.MN, {
                    ref: K,
                    "aria-label": U,
                    className: (0, n.$)(N().root, t),
                    title: (0, r.jsx)(P.Caption, {
                        variant: "div",
                        type: "entity",
                        size: "s",
                        weight: "medium",
                        lineClamp: 2,
                        ...(0, d.Am)(d.Kq.playlist.PLAYLIST_TITLE),
                        children: (0, r.jsx)(_.N_, {
                            className: N().titleLink,
                            href: i.url,
                            onClick: et,
                            children: i.title,
                        }),
                    }),
                    srTitle: (0, r.jsx)(_.N_, {
                        href: i.url,
                        onClick: et,
                        children: i.title,
                    }),
                    "data-intersection-property-id": A,
                    contentLinesCount: C,
                    view: eu,
                    description: el,
                    ...(0, d.Am)(d.Kq.playlist.PLAYLIST_ITEM),
                    children: [
                        ev &&
                            (0, r.jsx)(_.xW, {
                                ariaLabel: w(
                                    { id: "entity-names.likes-counter" },
                                    { counter: i.actualLikesCount },
                                ),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: $,
                            }),
                        s,
                    ],
                });
            });
        },
        62093: (e) => {
            e.exports = {
                root: "EmptyPlaylistBlock_root__wpA0j",
                iconBackground: "EmptyPlaylistBlock_iconBackground__pnUlz",
                title: "EmptyPlaylistBlock_title__pQQLf",
                subtitle: "EmptyPlaylistBlock_subtitle__P4Q7x",
            };
        },
        63541: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 52756)),
                Promise.resolve().then(i.bind(i, 41458)),
                Promise.resolve().then(i.bind(i, 80922)),
                Promise.resolve().then(i.bind(i, 54487)),
                Promise.resolve().then(i.bind(i, 91342)),
                Promise.resolve().then(i.bind(i, 21741)),
                Promise.resolve().then(i.bind(i, 77868)),
                Promise.resolve().then(i.bind(i, 80810)),
                Promise.resolve().then(i.bind(i, 57609)),
                Promise.resolve().then(i.bind(i, 82548)),
                Promise.resolve().then(i.bind(i, 92725)),
                Promise.resolve().then(i.bind(i, 91450)),
                Promise.resolve().then(i.bind(i, 60343)),
                Promise.resolve().then(i.bind(i, 2202)),
                Promise.resolve().then(i.bind(i, 89414)),
                Promise.resolve().then(i.bind(i, 59173)),
                Promise.resolve().then(i.bind(i, 75227)),
                Promise.resolve().then(i.bind(i, 55717)),
                Promise.resolve().then(i.bind(i, 86600)),
                Promise.resolve().then(i.bind(i, 73480)),
                Promise.resolve().then(i.bind(i, 55142)),
                Promise.resolve().then(i.bind(i, 37548)),
                Promise.resolve().then(i.bind(i, 70278)),
                Promise.resolve().then(i.bind(i, 40160)),
                Promise.resolve().then(i.bind(i, 70400)),
                Promise.resolve().then(i.bind(i, 93652)),
                Promise.resolve().then(i.bind(i, 47407)),
                Promise.resolve().then(i.bind(i, 77010)),
                Promise.resolve().then(i.bind(i, 28539)),
                Promise.resolve().then(i.bind(i, 48351)),
                Promise.resolve().then(i.bind(i, 35391)),
                Promise.resolve().then(i.bind(i, 78107)),
                Promise.resolve().then(i.bind(i, 54666)),
                Promise.resolve().then(i.bind(i, 80961)),
                Promise.resolve().then(i.bind(i, 31679)),
                Promise.resolve().then(i.bind(i, 46595)),
                Promise.resolve().then(i.bind(i, 33951)),
                Promise.resolve().then(i.bind(i, 80593)),
                Promise.resolve().then(i.bind(i, 13807)),
                Promise.resolve().then(i.bind(i, 72455)),
                Promise.resolve().then(i.bind(i, 64399)),
                Promise.resolve().then(i.bind(i, 81417)),
                Promise.resolve().then(i.bind(i, 22721)),
                Promise.resolve().then(i.bind(i, 49358)),
                Promise.resolve().then(i.bind(i, 80651)),
                Promise.resolve().then(i.bind(i, 70559)),
                Promise.resolve().then(i.bind(i, 23460)),
                Promise.resolve().then(i.bind(i, 26557)),
                Promise.resolve().then(i.bind(i, 37259)),
                Promise.resolve().then(i.bind(i, 30206)),
                Promise.resolve().then(i.bind(i, 78724)),
                Promise.resolve().then(i.bind(i, 97004)),
                Promise.resolve().then(i.bind(i, 33647)),
                Promise.resolve().then(i.bind(i, 68555)),
                Promise.resolve().then(i.bind(i, 91919)),
                Promise.resolve().then(i.bind(i, 75658)),
                Promise.resolve().then(i.bind(i, 56395)),
                Promise.resolve().then(i.bind(i, 17999)),
                Promise.resolve().then(i.bind(i, 48148)),
                Promise.resolve().then(i.bind(i, 73904)),
                Promise.resolve().then(i.bind(i, 26893)),
                Promise.resolve().then(i.bind(i, 75797)),
                Promise.resolve().then(i.bind(i, 1199)),
                Promise.resolve().then(i.bind(i, 61646)),
                Promise.resolve().then(i.bind(i, 57526)),
                Promise.resolve().then(i.bind(i, 67950)),
                Promise.resolve().then(i.bind(i, 357)),
                Promise.resolve().then(i.bind(i, 33363)),
                Promise.resolve().then(i.bind(i, 37840)),
                Promise.resolve().then(i.bind(i, 93915)),
                Promise.resolve().then(i.bind(i, 98627)),
                Promise.resolve().then(i.bind(i, 51786)),
                Promise.resolve().then(i.bind(i, 97725)),
                Promise.resolve().then(i.bind(i, 99430)),
                Promise.resolve().then(i.bind(i, 67366)),
                Promise.resolve().then(i.bind(i, 24598)),
                Promise.resolve().then(i.bind(i, 6742)),
                Promise.resolve().then(i.bind(i, 86461)),
                Promise.resolve().then(i.bind(i, 12318)),
                Promise.resolve().then(i.bind(i, 80582)),
                Promise.resolve().then(i.bind(i, 94916)),
                Promise.resolve().then(i.bind(i, 76172)),
                Promise.resolve().then(i.bind(i, 21118)),
                Promise.resolve().then(i.bind(i, 86868)),
                Promise.resolve().then(i.bind(i, 93295)),
                Promise.resolve().then(i.bind(i, 79372)),
                Promise.resolve().then(i.bind(i, 88790)),
                Promise.resolve().then(i.bind(i, 75791)),
                Promise.resolve().then(i.bind(i, 18705)),
                Promise.resolve().then(i.bind(i, 22606)),
                Promise.resolve().then(i.bind(i, 25809)),
                Promise.resolve().then(i.bind(i, 71741)),
                Promise.resolve().then(i.bind(i, 138)),
                Promise.resolve().then(i.bind(i, 84684)),
                Promise.resolve().then(i.bind(i, 68300)),
                Promise.resolve().then(i.bind(i, 8910)),
                Promise.resolve().then(i.bind(i, 39500)),
                Promise.resolve().then(i.bind(i, 31978)),
                Promise.resolve().then(i.bind(i, 12005)),
                Promise.resolve().then(i.bind(i, 12327)),
                Promise.resolve().then(i.bind(i, 71562)),
                Promise.resolve().then(i.bind(i, 39900)),
                Promise.resolve().then(i.bind(i, 62565)),
                Promise.resolve().then(i.bind(i, 83641)),
                Promise.resolve().then(i.bind(i, 88081)),
                Promise.resolve().then(i.bind(i, 60862)),
                Promise.resolve().then(i.bind(i, 2294)),
                Promise.resolve().then(i.bind(i, 65297)),
                Promise.resolve().then(i.bind(i, 23197)),
                Promise.resolve().then(i.bind(i, 86943)),
                Promise.resolve().then(i.bind(i, 27575)),
                Promise.resolve().then(i.bind(i, 45019)),
                Promise.resolve().then(i.bind(i, 76808)),
                Promise.resolve().then(i.bind(i, 84651)),
                Promise.resolve().then(i.bind(i, 18674)),
                Promise.resolve().then(i.bind(i, 65930)),
                Promise.resolve().then(i.bind(i, 45576)),
                Promise.resolve().then(i.bind(i, 75142)),
                Promise.resolve().then(i.bind(i, 46791)),
                Promise.resolve().then(i.bind(i, 22851)),
                Promise.resolve().then(i.bind(i, 11959)),
                Promise.resolve().then(i.bind(i, 72775)),
                Promise.resolve().then(i.bind(i, 53350)),
                Promise.resolve().then(i.bind(i, 41170)),
                Promise.resolve().then(i.bind(i, 63838)),
                Promise.resolve().then(i.bind(i, 58977)),
                Promise.resolve().then(i.bind(i, 76801)),
                Promise.resolve().then(i.bind(i, 59544)),
                Promise.resolve().then(i.bind(i, 72925)),
                Promise.resolve().then(i.bind(i, 11960)),
                Promise.resolve().then(i.bind(i, 51229)),
                Promise.resolve().then(i.bind(i, 38592)),
                Promise.resolve().then(i.bind(i, 9586)),
                Promise.resolve().then(i.bind(i, 69458)),
                Promise.resolve().then(i.bind(i, 29418)),
                Promise.resolve().then(i.bind(i, 98200)),
                Promise.resolve().then(i.bind(i, 12170)),
                Promise.resolve().then(i.bind(i, 60722)),
                Promise.resolve().then(i.bind(i, 83958)),
                Promise.resolve().then(i.bind(i, 67190)),
                Promise.resolve().then(i.bind(i, 56770)),
                Promise.resolve().then(i.bind(i, 26836)),
                Promise.resolve().then(i.bind(i, 94954)),
                Promise.resolve().then(i.bind(i, 66423)),
                Promise.resolve().then(i.bind(i, 31014)),
                Promise.resolve().then(i.bind(i, 46532)),
                Promise.resolve().then(i.bind(i, 40706)),
                Promise.resolve().then(i.bind(i, 6726)),
                Promise.resolve().then(i.bind(i, 56973)),
                Promise.resolve().then(i.bind(i, 92998)),
                Promise.resolve().then(i.bind(i, 93214)),
                Promise.resolve().then(i.bind(i, 76084)),
                Promise.resolve().then(i.bind(i, 80677)),
                Promise.resolve().then(i.bind(i, 33247)),
                Promise.resolve().then(i.bind(i, 34610)),
                Promise.resolve().then(i.bind(i, 45789)),
                Promise.resolve().then(i.bind(i, 89711)),
                Promise.resolve().then(i.bind(i, 25154)),
                Promise.resolve().then(i.bind(i, 28159)),
                Promise.resolve().then(i.bind(i, 13050)),
                Promise.resolve().then(i.bind(i, 79400)),
                Promise.resolve().then(i.bind(i, 30039)),
                Promise.resolve().then(i.bind(i, 71228)),
                Promise.resolve().then(i.bind(i, 2054)),
                Promise.resolve().then(i.bind(i, 16561)),
                Promise.resolve().then(i.bind(i, 78419)),
                Promise.resolve().then(i.bind(i, 25486)),
                Promise.resolve().then(i.bind(i, 35217)),
                Promise.resolve().then(i.bind(i, 26595)),
                Promise.resolve().then(i.bind(i, 78221)),
                Promise.resolve().then(i.bind(i, 32772)),
                Promise.resolve().then(i.bind(i, 70065)),
                Promise.resolve().then(i.bind(i, 60374)),
                Promise.resolve().then(i.bind(i, 4520)),
                Promise.resolve().then(i.bind(i, 28558)),
                Promise.resolve().then(i.bind(i, 21509)),
                Promise.resolve().then(i.bind(i, 52224)),
                Promise.resolve().then(i.bind(i, 25379)),
                Promise.resolve().then(i.bind(i, 97053)),
                Promise.resolve().then(i.bind(i, 70106)),
                Promise.resolve().then(i.bind(i, 83192)),
                Promise.resolve().then(i.bind(i, 49562)),
                Promise.resolve().then(i.bind(i, 95007)),
                Promise.resolve().then(i.bind(i, 86067)),
                Promise.resolve().then(i.bind(i, 67556)),
                Promise.resolve().then(i.bind(i, 5572)),
                Promise.resolve().then(i.bind(i, 85598)),
                Promise.resolve().then(i.bind(i, 34302)),
                Promise.resolve().then(i.bind(i, 77887)),
                Promise.resolve().then(i.bind(i, 22682)),
                Promise.resolve().then(i.bind(i, 48684)),
                Promise.resolve().then(i.bind(i, 35123)),
                Promise.resolve().then(i.bind(i, 87884)),
                Promise.resolve().then(i.bind(i, 95068)),
                Promise.resolve().then(i.bind(i, 73011)),
                Promise.resolve().then(i.bind(i, 75706)),
                Promise.resolve().then(i.bind(i, 59618)),
                Promise.resolve().then(i.bind(i, 3886)),
                Promise.resolve().then(i.bind(i, 43634)),
                Promise.resolve().then(i.bind(i, 34200)),
                Promise.resolve().then(i.bind(i, 1627)),
                Promise.resolve().then(i.bind(i, 41460)),
                Promise.resolve().then(i.bind(i, 25680)),
                Promise.resolve().then(i.bind(i, 54793)),
                Promise.resolve().then(i.bind(i, 35111)),
                Promise.resolve().then(i.bind(i, 6735)),
                Promise.resolve().then(i.bind(i, 98205)),
                Promise.resolve().then(i.bind(i, 65276)),
                Promise.resolve().then(i.bind(i, 41507)),
                Promise.resolve().then(i.bind(i, 24984)),
                Promise.resolve().then(i.bind(i, 70504)),
                Promise.resolve().then(i.bind(i, 23845)),
                Promise.resolve().then(i.bind(i, 8110)),
                Promise.resolve().then(i.bind(i, 81416)),
                Promise.resolve().then(i.bind(i, 6925)),
                Promise.resolve().then(i.bind(i, 75618)),
                Promise.resolve().then(i.bind(i, 83894)),
                Promise.resolve().then(i.bind(i, 42589)),
                Promise.resolve().then(i.bind(i, 56106)),
                Promise.resolve().then(i.bind(i, 92796)),
                Promise.resolve().then(i.bind(i, 80858)),
                Promise.resolve().then(i.bind(i, 32850)),
                Promise.resolve().then(i.bind(i, 90242)),
                Promise.resolve().then(i.bind(i, 4112)),
                Promise.resolve().then(i.bind(i, 73756)),
                Promise.resolve().then(i.bind(i, 25474)),
                Promise.resolve().then(i.bind(i, 85878)),
                Promise.resolve().then(i.bind(i, 44156)),
                Promise.resolve().then(i.bind(i, 75958)),
                Promise.resolve().then(i.bind(i, 12183)),
                Promise.resolve().then(i.bind(i, 89913)),
                Promise.resolve().then(i.bind(i, 57323)),
                Promise.resolve().then(i.bind(i, 97698)),
                Promise.resolve().then(i.bind(i, 67342)),
                Promise.resolve().then(i.bind(i, 64960)),
                Promise.resolve().then(i.bind(i, 51838)),
                Promise.resolve().then(i.bind(i, 81304)),
                Promise.resolve().then(i.bind(i, 38742)),
                Promise.resolve().then(i.bind(i, 12332)),
                Promise.resolve().then(i.bind(i, 47676)),
                Promise.resolve().then(i.bind(i, 12952)),
                Promise.resolve().then(i.bind(i, 76532)),
                Promise.resolve().then(i.bind(i, 28395)),
                Promise.resolve().then(i.bind(i, 69614)),
                Promise.resolve().then(i.bind(i, 55487)),
                Promise.resolve().then(i.bind(i, 65710)),
                Promise.resolve().then(i.bind(i, 91442)),
                Promise.resolve().then(i.bind(i, 69332)),
                Promise.resolve().then(i.bind(i, 60951)),
                Promise.resolve().then(i.bind(i, 95045)),
                Promise.resolve().then(i.bind(i, 4367)),
                Promise.resolve().then(i.bind(i, 15336)),
                Promise.resolve().then(i.bind(i, 2097)),
                Promise.resolve().then(i.bind(i, 55675)),
                Promise.resolve().then(i.bind(i, 86134)),
                Promise.resolve().then(i.bind(i, 49120)),
                Promise.resolve().then(i.bind(i, 26078)),
                Promise.resolve().then(i.bind(i, 3218)),
                Promise.resolve().then(i.bind(i, 82658)),
                Promise.resolve().then(i.bind(i, 2406)),
                Promise.resolve().then(i.bind(i, 49247)),
                Promise.resolve().then(i.bind(i, 8681)),
                Promise.resolve().then(i.bind(i, 69594)),
                Promise.resolve().then(i.bind(i, 86722)),
                Promise.resolve().then(i.bind(i, 77104)),
                Promise.resolve().then(i.bind(i, 73682)),
                Promise.resolve().then(i.bind(i, 62066)),
                Promise.resolve().then(i.bind(i, 61258)),
                Promise.resolve().then(i.bind(i, 41035)),
                Promise.resolve().then(i.bind(i, 28160)),
                Promise.resolve().then(i.bind(i, 31922)),
                Promise.resolve().then(i.bind(i, 51886)),
                Promise.resolve().then(i.bind(i, 43701)),
                Promise.resolve().then(i.bind(i, 45228)),
                Promise.resolve().then(i.bind(i, 75651)),
                Promise.resolve().then(i.bind(i, 88233)),
                Promise.resolve().then(i.bind(i, 94615));
        },
        75658: (e, t, i) => {
            "use strict";
            i.d(t, { HorizontalPlaylistCard: () => K });
            var r = i(33008),
                n = i(85896),
                s = i(97531),
                o = i(66268),
                l = i(73827),
                a = i(96560),
                d = i(93967),
                m = i(18064),
                u = i(48509),
                v = i(42213),
                c = i(88485),
                b = i(78016),
                h = i(77868),
                P = i(79169),
                p = i(18740),
                y = i(14829),
                g = i(25911),
                _ = i(30672),
                f = i.n(_);
            let C = (0, s.PA)((e) => {
                var t;
                let { className: i, playlist: s, likeIconSize: l = "xxs" } = e,
                    { user: a, trailer: m } = (0, P.Pjs)(),
                    u = (0, P.PT7)(),
                    { sendLikeSearchFeedback: c } = (0, P.zEv)(),
                    h = (0, g.KX)(s),
                    [y, _] = (0, o.useState)(!1),
                    C = (0, v.c)(async () => {
                        y || s.isLiked || (_(!0), null == c || c()), await h();
                    }),
                    x = (0, P.Ftl)(),
                    k = (0, v.c)((e) => {
                        if ((e.stopPropagation(), u()))
                            return void e.preventDefault();
                        m.openPlaylistTrailer(s.id), x(d.ky.Playlist, s.id);
                    });
                return (0, r.jsxs)("div", {
                    className: (0, n.$)(f().root, f().controls, i, {
                        [f().controls_disabled]: !s.isAvailable,
                    }),
                    children: [
                        s.isAvailable &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(p.aQ, {
                                        fallback: (0, r.jsx)(p.cy, {
                                            size: "xs",
                                            iconSize: l,
                                            className: (0, n.$)(
                                                f().item,
                                                f().likeIcon,
                                            ),
                                            isLiked: s.isLiked,
                                            onClick: C,
                                            disabled: !a.isAuthorized,
                                        }),
                                    }),
                                    (null == (t = s.trailer)
                                        ? void 0
                                        : t.isAvailable) &&
                                        (0, r.jsx)(p.aQ, {
                                            fallback: (0, r.jsx)(p.kJ, {
                                                className: (0, n.$)(
                                                    f().item,
                                                    f().trailerIcon,
                                                ),
                                                iconSize: "xs",
                                                variant: "text",
                                                onClick: k,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, r.jsx)("div", {
                            className: (0, n.$)(f().item, f().item_buttonArrow),
                            children: (0, r.jsx)(b.Icon, {
                                className: p.$f.buttonArrow,
                                variant: "arrowRight",
                                size: "xs",
                            }),
                        }),
                    ],
                });
            });
            var x = i(19525),
                k = i.n(x);
            let K = (0, s.PA)((e) => {
                let {
                        className: t,
                        playlist: i,
                        pageId: s,
                        coverClassName: g,
                        playButtonIconSize: _,
                        likeIconSize: f,
                    } = e,
                    { ref: x, intersectionPropertyId: K } = (0, P.nMI)(),
                    { from: N } = (0, P.fyy)({ pageId: s }),
                    [A, j] = (0, o.useState)(!1),
                    L = (0, P.brA)(),
                    F = (0, y.r)(i),
                    T = i.title || "",
                    { formatMessage: w, formatNumber: E } = (0, l.A)(),
                    S = (0, P.PT7)(),
                    {
                        sendNavigateSearchFeedback: M,
                        sendPlaySearchFeedback: B,
                    } = (0, P.zEv)(),
                    R = (0, P.NKK)(),
                    {
                        isPlaying: I,
                        isCurrent: O,
                        togglePlay: z,
                    } = (0, P.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: u.K.Playlist,
                                meta: { id: i.id, uuid: i.uuid },
                                from: N,
                            },
                            loadContextMeta: !0,
                        },
                    }),
                    D = (0, P.ZpR)(i.url),
                    U = (0, v.c)((e) => {
                        null == M || M(),
                            R({ to: d.QT.PlaylistScreen }),
                            e.preventDefault(),
                            D(e);
                    }),
                    $ = (0, v.c)(() => {
                        S() ||
                            (A || I || (j(!0), null == B || B()), z(), L(!I));
                    }),
                    Y = (0, v.c)((e) => {
                        (0, c.P)(e, p.$f.ripple), U(e);
                    }),
                    H = (0, v.c)((e) => {
                        e.stopPropagation(), U(e);
                    }),
                    Z = (0, o.useCallback)(
                        (e) =>
                            (0, r.jsx)(p.q1, {
                                isAvailable: i.isAvailable,
                                isDisliked: !1,
                                coverUri: i.coverUri,
                                title: T,
                                className: (0, n.$)(p.$f.playButtonCell, g),
                                alt: w(
                                    { id: "entity-names.playlist-name" },
                                    { playlistName: T },
                                ),
                                radius: "xs",
                                ...e,
                            }),
                        [i, T, g, w],
                    ),
                    q =
                        null == Z
                            ? void 0
                            : Z({
                                  onPlayButtonClick: $,
                                  isPlaying: I,
                                  isCurrent: O,
                                  playButtonIconSize: _,
                              }),
                    Q = (0, o.useMemo)(
                        () =>
                            i.url && i.isAvailable
                                ? (0, r.jsx)(p.N_, {
                                      className: (0, n.$)(
                                          p.$f.text,
                                          p.$f.titleLink,
                                      ),
                                      href: i.url,
                                      onClick: H,
                                      children: T,
                                  })
                                : (0, r.jsx)(h.Caption, {
                                      className: (0, n.$)(
                                          p.$f.text,
                                          p.$f.titleText,
                                      ),
                                      size: "m",
                                      variant: "div",
                                      type: "text",
                                      children: T,
                                  }),
                        [H, i.isAvailable, i.url, T],
                    ),
                    V = (0, o.useMemo)(() => {
                        if (
                            void 0 === i.actualLikesCount ||
                            void 0 === i.tracksCount
                        )
                            return;
                        let e = (0, r.jsx)(h.Caption, {
                                variant: "span",
                                size: "m",
                                weight: "medium",
                                "aria-hidden": !0,
                                children: "•",
                            }),
                            t = i.isLiked ? "likedVariant" : "likeVariant",
                            n = ""
                                .concat(F, " ")
                                .concat(
                                    w(
                                        { id: "entity-names.tracks-count" },
                                        { value: i.tracksCount },
                                    ),
                                );
                        return (0, r.jsxs)("div", {
                            className: k().description,
                            "aria-label": n,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: k().likesCount,
                                    "aria-hidden": !0,
                                    children: [
                                        (0, r.jsx)(b.Icon, {
                                            className: k().icon,
                                            variant: t,
                                            size: "xxs",
                                        }),
                                        (0, r.jsx)(h.Caption, {
                                            variant: "span",
                                            size: "m",
                                            weight: "medium",
                                            children: E(i.actualLikesCount),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: k().tracksCount,
                                    "aria-hidden": !0,
                                    children: [
                                        e,
                                        (0, r.jsx)(h.Caption, {
                                            variant: "span",
                                            size: "m",
                                            weight: "medium",
                                            children: (0, r.jsx)(a.A, {
                                                id: "entity-names.tracks-count",
                                                values: {
                                                    value: E(i.tracksCount),
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [w, E, F, i.actualLikesCount, i.isLiked, i.tracksCount]);
                return (0, r.jsxs)(p.Cj, {
                    ref: x,
                    "data-intersection-property-id": K,
                    className: (0, n.$)(
                        p.$f.root,
                        { [p.$f.root_disabled]: !i.isAvailable },
                        t,
                    ),
                    "aria-label": i.title || w({ id: "entity-names.playlist" }),
                    onClick: Y,
                    ...(0, m.Am)(m.Kq.playlist.HORIZONTAL_PLAYLIST_CARD),
                    children: [
                        q,
                        (0, r.jsx)(p.ro, {
                            isDisabled: !i.isAvailable,
                            title: Q,
                            description: V,
                        }),
                        (0, r.jsx)(C, { playlist: i, likeIconSize: f }),
                    ],
                });
            });
        },
        91919: (e, t, i) => {
            "use strict";
            i.d(t, { EmptyPlaylistBlock: () => v });
            var r = i(33008),
                n = i(85896),
                s = i(66268),
                o = i(96560),
                l = i(18064),
                a = i(78016),
                d = i(77868),
                m = i(62093),
                u = i.n(m);
            let v = (e) => {
                let { className: t, isEmptySearch: i } = e,
                    m = (0, s.useMemo)(
                        () =>
                            i
                                ? (0, r.jsx)(o.A, {
                                      id: "search-results.not-found-title",
                                  })
                                : (0, r.jsx)(o.A, {
                                      id: "error-messages.empty-collection-playlist-title",
                                  }),
                        [i],
                    ),
                    v = (0, s.useMemo)(
                        () =>
                            i
                                ? (0, r.jsx)(o.A, {
                                      id: "search-results.not-found-description",
                                  })
                                : (0, r.jsx)(o.A, {
                                      id: "error-messages.empty-collection-playlist-description",
                                  }),
                        [i],
                    );
                return (0, r.jsxs)("div", {
                    className: (0, n.$)(u().root, t),
                    ...(0, l.Am)(l.Kq.playlist.PLAYLIST_EMPTY_BLOCK),
                    children: [
                        (0, r.jsx)("div", {
                            className: u().iconBackground,
                            children: (0, r.jsx)(a.Icon, {
                                variant: "search",
                                size: "l",
                                className: u().icon,
                                ...(0, l.Am)(
                                    l.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON,
                                ),
                            }),
                        }),
                        (0, r.jsx)(d.Heading, {
                            variant: "h3",
                            size: "xs",
                            className: u().title,
                            ...(0, l.Am)(
                                l.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE,
                            ),
                            children: m,
                        }),
                        (0, r.jsx)(d.Caption, {
                            variant: "span",
                            size: "l",
                            className: u().subtitle,
                            ...(0, l.Am)(
                                l.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT,
                            ),
                            children: v,
                        }),
                    ],
                });
            };
        },
        96973: (e) => {
            e.exports = {
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
