(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2113, 5242],
    {
        1357: (e, t, a) => {
            "use strict";
            a.d(t, { G: () => u });
            var i,
                l = a(93225),
                r = a(66268),
                n = {
                    6699: (e, t, a) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.useDebouncedToggle = void 0);
                        let i = a(352),
                            l = a(810);
                        t.useDebouncedToggle = (e) => {
                            let {
                                    delay: t,
                                    initialState: a,
                                    throttleTimeout: r,
                                } = e,
                                n = (0, l.useRef)(null),
                                [s, o] = (0, l.useState)(!!a),
                                d = (0, l.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            o(!a),
                                                n.current &&
                                                    window.clearTimeout(
                                                        n.current,
                                                    ),
                                                (n.current = window.setTimeout(
                                                    () => {
                                                        o(!!a);
                                                    },
                                                    t,
                                                ));
                                        }, r),
                                    [t, a, r],
                                ),
                                u = (0, l.useCallback)(() => {
                                    o(!!a),
                                        n.current &&
                                            window.clearTimeout(n.current);
                                }, [a]);
                            return (
                                (0, l.useEffect)(
                                    () => () => {
                                        n.current &&
                                            window.clearTimeout(n.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: d, reset: u }
                            );
                        };
                    },
                    2767: (e, t, a) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.useForceUpdateRef = void 0);
                        let i = a(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, i.useState)(null);
                            return [
                                e,
                                (0, i.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    2067: (e, t, a) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.useScroll = void 0);
                        let i = a(810),
                            l = a(361),
                            r = a(6699);
                        t.useScroll = (e) => {
                            let {
                                    onScroll: t,
                                    listenIsScrolling: a,
                                    elementRef: n,
                                } = e,
                                { state: s, handleDebouncedToggle: o } = (0,
                                r.useDebouncedToggle)({
                                    delay: 1e3,
                                    throttleTimeout: 100,
                                }),
                                d = (0, i.useCallback)(() => {
                                    a && o(), null == t || t();
                                }, [a, o, t]);
                            return (
                                (0, i.useEffect)(() => {
                                    let e = (0, l.getElementFromRefOrElement)(
                                        n,
                                    );
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        a = { capture: !0, passive: !0 };
                                    return (
                                        t.addEventListener("scroll", d, a),
                                        () =>
                                            t.removeEventListener(
                                                "scroll",
                                                d,
                                                a,
                                            )
                                    );
                                }, [n, d]),
                                s
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
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return n[e](a, a.exports, o), a.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, "__esModule", { value: !0 }),
                    (d.useElementOffsetY = void 0);
                let e = o(810),
                    t = o(2067),
                    a = o(2767);
                d.useElementOffsetY = (i) => {
                    let [l, r] = (0, a.useForceUpdateRef)(),
                        [n, s] = (0, e.useState)(),
                        o = (0, e.useCallback)(() => {
                            let e =
                                null == l ? void 0 : l.getBoundingClientRect();
                            e && s(e.y);
                        }, [l]);
                    return (
                        (0, e.useLayoutEffect)(o),
                        (0, t.useScroll)({ onScroll: o, elementRef: i }),
                        { forceUpdateRefCallback: r, offsetY: n }
                    );
                };
            })(),
                d.__esModule;
            var u = d.useElementOffsetY;
        },
        2117: (e, t, a) => {
            "use strict";
            a.d(t, { XU: () => c });
            var i,
                l,
                r = a(7144),
                n = a(66268),
                s = a(73827);
            !(function (e) {
                (e.formatDate = "FormattedDate"),
                    (e.formatTime = "FormattedTime"),
                    (e.formatNumber = "FormattedNumber"),
                    (e.formatList = "FormattedList"),
                    (e.formatDisplayName = "FormattedDisplayName");
            })(i || (i = {})),
                (function (e) {
                    (e.formatDate = "FormattedDateParts"),
                        (e.formatTime = "FormattedTimeParts"),
                        (e.formatNumber = "FormattedNumberParts"),
                        (e.formatList = "FormattedListParts");
                })(l || (l = {}));
            var o = function (e) {
                var t = (0, s.A)(),
                    a = e.value,
                    i = e.children,
                    l = (0, r.__rest)(e, ["value", "children"]);
                return i(t.formatNumberToParts(a, l));
            };
            function d(e) {
                var t = function (t) {
                    var a = (0, s.A)(),
                        i = t.value,
                        l = t.children,
                        n = (0, r.__rest)(t, ["value", "children"]),
                        o = "string" == typeof i ? new Date(i || 0) : i;
                    return l(
                        "formatDate" === e
                            ? a.formatDateToParts(o, n)
                            : a.formatTimeToParts(o, n),
                    );
                };
                return (t.displayName = l[e]), t;
            }
            function u(e) {
                var t = function (t) {
                    var a = (0, s.A)(),
                        i = t.value,
                        l = t.children,
                        o = (0, r.__rest)(t, ["value", "children"]),
                        d = a[e](i, o);
                    if ("function" == typeof l) return l(d);
                    var u = a.textComponent || n.Fragment;
                    return n.createElement(u, null, d);
                };
                return (t.displayName = i[e]), t;
            }
            (o.displayName = "FormattedNumberParts"),
                (o.displayName = "FormattedNumberParts");
            var c = u("formatDate");
            u("formatTime"),
                u("formatNumber"),
                u("formatList"),
                u("formatDisplayName"),
                d("formatDate"),
                d("formatTime");
        },
        2865: (e, t, a) => {
            "use strict";
            a.d(t, {
                QQ: () => E,
                Op: () => x,
                x5: () => T,
                jh: () => I.PromoLandingSonataControls,
                s_: () => N.RepeatButton,
                uP: () => L.ShuffleButton,
                $u: () => F.SonataControls,
                bG: () => K,
                qF: () => A.SonataVideoControls,
                x6: () => P,
                EX: () => s,
                li: () => d,
                pE: () => m,
                AA: () => g.useOnRepeatClick,
                e9: () => v.useOnShuffleClick,
                d0: () => p.useToggleMute,
            });
            var i = a(41028),
                l = a(75305),
                r = a(70879),
                n = a(79169);
            let s = (e) => {
                if (e.data.type !== l.R.Clip) return null;
                {
                    var t;
                    let a = e.data.meta;
                    if (!a.clipId) return null;
                    let l =
                            null == (t = a.artists)
                                ? void 0
                                : t.map((e) => (0, r.as)({ artist: e })),
                        { available: s, disclaimers: o } = (0, n.fyr)(a);
                    return (0, i.wg)({
                        clipId: a.clipId,
                        title: a.title,
                        thumbnail: a.thumbnail,
                        duration: a.duration,
                        previewUrl: a.previewUrl,
                        isAvailable: s,
                        disclaimers: o,
                        artists: l,
                        isHiddenFromSonataQueue: e.hidden,
                    });
                }
            };
            var o = a(53555);
            let d = (e, t) => ({
                type: o.z4.Unloaded,
                meta: { id: e, albumId: t },
            });
            var u = a(95592),
                c = a(61744);
            let m = (e) => {
                var t, a, s;
                switch (e.data.type) {
                    case l.R.Generative: {
                        let a = e.data.meta,
                            l = (0, n.QBb)(
                                null == a ? void 0 : a.derivedColors,
                            );
                        return (0, i.wg)({
                            id: String(a.id),
                            coverUri: a.imageUrl,
                            title: null != (t = a.title) ? t : "",
                            isAvailable: !0,
                            isRemoved: !1,
                            averageColor: l,
                        });
                    }
                    case l.R.Clip:
                    case o.z4.Unloaded:
                    case l.R.Radio:
                        return null;
                    default: {
                        let t = e.data.meta,
                            l = null == (a = t.artists) ? void 0 : a.map(r.dM),
                            n = null == (s = t.albums) ? void 0 : s.map(u.e7);
                        return (0, i.wg)({
                            ...(0, c.gK)(t),
                            artists: l,
                            albums: n,
                            isHiddenFromSonataQueue: e.hidden,
                        });
                    }
                }
            };
            var g = a(48148),
                v = a(73904),
                p = a(26893),
                y = a(86512),
                h = a(29318),
                f = a(48509),
                k = a(43090),
                _ = a(10663);
            let b = i.gK.model("UnloadedEntityMeta", {
                    id: i.gK.union(i.gK.number, i.gK.string),
                    albumId: i.gK.maybe(i.gK.union(i.gK.number, i.gK.string)),
                }),
                P = i.gK.model("UnloadedEntityData", {
                    meta: b,
                    type: i.gK.literal(o.z4.Unloaded),
                });
            var C = a(6247),
                S = a(16285);
            let T = c.OQ.props({
                    artists: i.gK.array(r.PK),
                    albums: i.gK.array(u.GI),
                    chart: i.gK.maybe(S.Iz),
                    isHiddenFromSonataQueue: i.gK.maybe(i.gK.boolean),
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
                            var a, i;
                            return null !=
                                (i = null == (a = e.artists) ? void 0 : a[0])
                                ? i
                                : null;
                        },
                        get mainAlbum() {
                            var l, r;
                            return null !=
                                (r = null == (l = e.albums) ? void 0 : l[0])
                                ? r
                                : null;
                        },
                        get index() {
                            var n, s, o;
                            return null !=
                                (o =
                                    null == (s = e.albums[0]) ||
                                    null == (n = s.trackPosition)
                                        ? void 0
                                        : n.index)
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
                            return e.type === C.S.AUDIOBOOK;
                        },
                        get isFairyTale() {
                            return e.type === C.S.FAIRY_TALE;
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
                        changeTrackInfo: (0, i.L3)(function* (t, a) {
                            let { ugcResource: l, modelActionsLogger: s } = (0,
                            i._$)(e);
                            if (
                                e.artists.map((e) => e.name).join(", ") === a &&
                                t === e.title
                            )
                                return n.FlZ.OK;
                            try {
                                var o;
                                yield l.changeTrack({
                                    trackId: e.id,
                                    title: t,
                                    artist: a,
                                }),
                                    (e.title = t);
                                let s =
                                    (null == (o = e.artists[0])
                                        ? void 0
                                        : o.id) || "0";
                                if (((e.artists = (0, i.wg)([])), a)) {
                                    let t = r.PK.create({
                                        id: s,
                                        name: a,
                                        isAvailable: !0,
                                    });
                                    e.artists = (0, i.wg)([t]);
                                }
                                return n.FlZ.OK;
                            } catch (e) {
                                return s.error(e), n.FlZ.ERROR;
                            }
                        }),
                    })),
                E = i.gK
                    .model("BaseSonataState", {
                        contextType: i.gK.maybeNull(
                            i.gK.enumeration(Object.values(f.K)),
                        ),
                        contextId: i.gK.maybeNull(i.gK.string),
                        entityMeta: i.gK.maybeNull(T),
                        status: i.gK.enumeration(Object.values(o.MT)),
                        canMoveForward: i.gK.boolean,
                        canMoveBackward: i.gK.boolean,
                        canSpeed: i.gK.boolean,
                        repeatMode: i.gK.enumeration(Object.values(_.pM)),
                        canChangeRepeatMode: i.gK.boolean,
                        volume: i.gK.maybe(i.gK.number),
                        speed: i.gK.maybe(i.gK.number),
                        position: i.gK.maybeNull(i.gK.number),
                        duration: i.gK.maybeNull(i.gK.number),
                        canShuffle: i.gK.boolean,
                        shuffle: i.gK.boolean,
                        quality: i.gK.enumeration(Object.values(k.e)),
                        unloadedEntitiesData: i.gK.maybe(i.gK.array(P)),
                    })
                    .volatile(() => ({ volatileUnloadedEntitiesData: void 0 }))
                    .views((e) => ({
                        get unloadedEntitiesDataFromModels() {
                            var t;
                            return null != (t = e.volatileUnloadedEntitiesData)
                                ? t
                                : (0, h.HO)(e.unloadedEntitiesData);
                        },
                        get isVibeContext() {
                            return e.contextType === f.K.Vibe;
                        },
                        get isGenerativeContext() {
                            return e.contextType === f.K.Generative;
                        },
                        get isPaused() {
                            return e.status === o.MT.PAUSED;
                        },
                        get isPlaying() {
                            return e.status === o.MT.PLAYING;
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
                            t && t.data.meta && (e.entityMeta = m(t));
                        },
                        setUnloadedEntitiesData: (t) => {
                            t &&
                                ((e.volatileUnloadedEntitiesData = (0, y.A)(t)),
                                (e.unloadedEntitiesData = (0, i.wg)(t)));
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
                x = a(60030)
                    .z8.props({
                        artists: i.gK.array(r.PK),
                        isHiddenFromSonataQueue: i.gK.maybe(i.gK.boolean),
                    })
                    .views((e) => ({
                        get idWithContext() {
                            return String(e.clipId);
                        },
                    })),
                K = E.props({
                    playlistFilter: i.gK.maybe(i.gK.string),
                    areCoresRegistered: i.gK.boolean,
                    isVHCoreRegistered: i.gK.boolean,
                    shouldApplyYnisonState: i.gK.optional(i.gK.boolean, !0),
                    isCrossFadeEnabled: i.gK.boolean,
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
                            let { localStorage: a } = (0, i._$)(e);
                            a.set(n.cYZ.CrossFadeMode, t),
                                (e.isCrossFadeEnabled = t);
                        },
                    }))
                    .named("SonataState");
            a(75797), a(1199);
            var I = a(61646),
                N = a(57526),
                L = a(67950),
                F = a(357),
                A = a(33363);
        },
        14829: (e, t, a) => {
            "use strict";
            a.d(t, { r: () => r });
            var i = a(66268),
                l = a(73827);
            let r = (e) => {
                let { formatMessage: t } = (0, l.A)();
                return (0, i.useMemo)(() => {
                    let a = "";
                    e.isLiked && !e.actualLikesCount
                        ? (a = t({ id: "entity-names.has-your-like" }))
                        : "number" == typeof e.actualLikesCount &&
                          (a =
                              e.actualLikesCount > 0
                                  ? t(
                                        { id: "entity-names.likes-counter" },
                                        { counter: e.actualLikesCount },
                                    )
                                  : t({
                                        id: "entity-names.likes-counter-empty",
                                    }));
                    let i = t(
                        { id: "entity-names.playlist-name" },
                        { playlistName: e.title },
                    );
                    return "".concat(i, " ").concat(a);
                }, [t, e]);
            };
        },
        17999: (e, t, a) => {
            "use strict";
            a.d(t, { PlaylistsCarousel: () => o });
            var i = a(33008),
                l = a(66268),
                r = a(18740),
                n = a(56395);
            let s = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        title: s,
                        description: o,
                        playlists: d,
                        containerClassName: u,
                        className: c,
                        headerClassName: m,
                        viewAllActionLink: g,
                        headingVariant: v,
                        ...p
                    } = e;
                    return (0, i.jsx)(r.OY, {
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        className: c,
                        headerClassName: m,
                        containerClassName: u,
                        ref: t,
                        title: s,
                        description: o,
                        viewAllActionLink: g,
                        headingVariant: v,
                        ...p,
                        children:
                            null == d
                                ? void 0
                                : d.map((e) =>
                                      (0, i.jsx)(
                                          n.PlaylistCard,
                                          { playlist: e, contentLinesCount: 3 },
                                          e.key,
                                      ),
                                  ),
                    });
                },
                o = (0, l.forwardRef)((e, t) =>
                    (0, i.jsx)(s, { forwardRef: t, ...e }),
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
        27618: (e, t, a) => {
            "use strict";
            a.d(t, { NotFound: () => p });
            var i = a(33008),
                l = a(85896),
                r = a(97531),
                n = a(96560),
                s = a(44189),
                o = a(78016),
                d = a(77868),
                u = a(79169),
                c = a(18740),
                m = a(66268),
                g = a(26271),
                v = a.n(g);
            let p = (0, r.PA)((e) => {
                let {
                        className: t,
                        title: a,
                        description: r,
                        iconVariant: g = "musicLogo",
                        iconClassName: p,
                        iconSize: y,
                    } = e,
                    { contentRef: h } = (0, u.gKY)(),
                    f = (0, u.ZpR)(u.Zyd.main.href);
                (0, u.LZB)();
                let { handleNavigateToMain: k } = (0, u.D5F)(f);
                return (
                    (0, u.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, u.Pjs)();
                        (0, m.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, i.jsxs)("div", {
                        className: (0, l.$)(
                            v().root,
                            { [v().root_desktop]: !h },
                            t,
                        ),
                        children: [
                            (0, i.jsx)(c.Lh, {
                                withBackwardFallback: "/",
                                className: v().navigation,
                                withForwardControl: !1,
                            }),
                            (0, i.jsxs)("div", {
                                className: v().content,
                                children: [
                                    (0, i.jsx)(o.Icon, {
                                        className: (0, l.$)(v().icon, p),
                                        variant: g,
                                        size: y,
                                    }),
                                    (0, i.jsx)(d.Heading, {
                                        className: (0, l.$)(
                                            v().title,
                                            v().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            a ||
                                            (0, i.jsx)(n.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, i.jsx)(d.Caption, {
                                        className: (0, l.$)(
                                            v().text,
                                            v().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            r ||
                                            (0, i.jsx)(n.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, i.jsx)(s.Button, {
                                        onClick: k,
                                        className: v().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, i.jsx)(d.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, i.jsx)(n.A, {
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
        29371: (e, t, a) => {
            "use strict";
            a.d(t, { FN: () => l, gj: () => i }), a(27224);
            let i = (e) => {
                    let {
                        containerNodeRect: t,
                        draggingNodeRect: a,
                        transform: i,
                    } = e;
                    return a && t
                        ? (function (e, t, a) {
                              let i = { ...e };
                              return (
                                  t.top + e.y <= a.top
                                      ? (i.y = a.top - t.top)
                                      : t.bottom + e.y >= a.top + a.height &&
                                        (i.y = a.top + a.height - t.bottom),
                                  t.left + e.x <= a.left
                                      ? (i.x = a.left - t.left)
                                      : t.right + e.x >= a.left + a.width &&
                                        (i.x = a.left + a.width - t.right),
                                  i
                              );
                          })(i, a, t)
                        : i;
                },
                l = (e) => {
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
        35233: (e, t, a) => {
            "use strict";
            a.d(t, { M: () => i.NotFound });
            var i = a(27618);
        },
        45242: (e, t, a) => {
            "use strict";
            a.d(t, {
                pA: () => P.EmptyPlaylistBlock,
                vf: () => C.HorizontalPlaylistCard,
                B6: () => S.PlaylistCard,
                BL: () => _,
                IP: () => b,
                EC: () => T.PlaylistsCarousel,
                bk: () => r,
                ZC: () => u,
                Ew: () => m,
                pd: () => v,
            });
            var i = a(41028),
                l = a(79169);
            let r = (e) => {
                var t, a;
                let {
                    playlist: r,
                    generatedPlaylistType: n,
                    likesCount: s,
                    trailer: o,
                    tracksCount: d,
                } = e;
                return (0, i.wg)({
                    isAvailable: null == (a = r.available) || a,
                    uuid: r.playlistUuid,
                    title: r.title,
                    uid: r.uid,
                    kind: r.kind,
                    coverUri: null == (t = r.cover) ? void 0 : t.uri,
                    generatedPlaylistType: n,
                    likesCount: s,
                    tracksCount: d,
                    trailer: (0, l.mxW)(o),
                });
            };
            var n = a(17846),
                s = a(66268);
            (0, s.cache)(async (e, t) => {
                var a;
                let i;
                try {
                    let {
                        container: a,
                        backendHostTld: r,
                        locale: n,
                        host: s,
                        fullUrl: o,
                        isRSC: d,
                        requestUrl: u,
                    } = await (0, l.IhE)();
                    if (d)
                        return {
                            playlist: void 0,
                            backendHostTld: r,
                            locale: n,
                            host: s,
                            fullUrl: o,
                            requestUrl: u,
                        };
                    let c = a.get(l._19);
                    i = {
                        playlist: await c.getPlaylistWithTracksIds({
                            userId: e,
                            playlistKind: t,
                            resumeStream: !1,
                        }),
                        backendHostTld: r,
                        locale: n,
                        host: s,
                        fullUrl: o,
                        requestUrl: u,
                    };
                } catch (e) {
                    return (0, l.tfF)(e, () => ({
                        playlist: void 0,
                        ...(0, l.Bj3)(),
                    }));
                }
                return (
                    (null == (a = i.playlist) ? void 0 : a.error) ===
                        "not-found" && (0, n.notFound)(),
                    i
                );
            }),
                (0, s.cache)(async (e) => {
                    var t;
                    let a;
                    (0, l.sU0)(e) || (0, n.notFound)();
                    try {
                        let {
                            container: t,
                            backendHostTld: i,
                            locale: r,
                            host: n,
                            fullUrl: s,
                            isRSC: o,
                            requestUrl: d,
                        } = await (0, l.IhE)();
                        if (o)
                            return {
                                playlist: void 0,
                                backendHostTld: i,
                                locale: r,
                                host: n,
                                fullUrl: s,
                                requestUrl: d,
                            };
                        let u = t.get(l.qNr);
                        a = {
                            playlist: await u.getPlaylist({
                                playlistUuid: e,
                                resumeStream: !1,
                                richTracks: !1,
                            }),
                            backendHostTld: i,
                            locale: r,
                            host: n,
                            fullUrl: s,
                            requestUrl: d,
                        };
                    } catch (e) {
                        return (0, l.tfF)(e, () => ({
                            playlist: void 0,
                            ...(0, l.Bj3)(),
                        }));
                    }
                    return (
                        (null == (t = a.playlist) ? void 0 : t.error) ===
                            "not-found" && (0, n.notFound)(),
                        a
                    );
                });
            var o = a(25911);
            let d = (e) => ({
                    uid: e.uid,
                    login: e.login,
                    name: e.name,
                    sex: e.sex,
                    verified: e.verified,
                }),
                u = (e) =>
                    (0, i.wg)({
                        ...(0, o.jX)(e),
                        owner: e.owner ? d(e.owner) : void 0,
                        description: e.description,
                        tags: e.tags,
                        modified: e.modified,
                        madeFor: e.madeFor
                            ? ((e) =>
                                  (0, i.wg)({
                                      userInfo: e.userInfo
                                          ? d(e.userInfo)
                                          : null,
                                      caseForms: e.caseForms
                                          ? (0, l.NH4)(e.caseForms)
                                          : null,
                                  }))(e.madeFor)
                            : null,
                    });
            var c = a(70879);
            let m = (e) => {
                var t, a;
                return (0, i.wg)({
                    ...(0, o.jX)(e),
                    artists:
                        null !=
                        (a =
                            null == e || null == (t = e.artists)
                                ? void 0
                                : t.map(c.dM))
                            ? a
                            : [],
                });
            };
            var g = a(61744);
            let v = (e) => {
                var t, a;
                return (0, i.wg)({
                    ...(0, o.jX)(e),
                    tracks:
                        null !=
                        (a =
                            null == e || null == (t = e.tracks)
                                ? void 0
                                : t.map(g.Rw))
                            ? a
                            : [],
                });
            };
            var p = a(59615),
                y = a(64802);
            let h = i.gK.model("PlaylistOwner", {
                    uid: i.gK.number,
                    login: i.gK.string,
                    name: i.gK.string,
                    sex: i.gK.enumeration(Object.values(y.U)),
                    verified: i.gK.boolean,
                }),
                f = i.gK.model("PlaylistOwner", {
                    userInfo: i.gK.maybeNull(h),
                    caseForms: i.gK.maybeNull(p.lg),
                }),
                k = i.gK.model("PlaylistTag", {
                    id: i.gK.string,
                    value: i.gK.string,
                }),
                _ = o.$o
                    .props({
                        owner: i.gK.maybe(h),
                        modified: i.gK.string,
                        description: i.gK.maybe(i.gK.string),
                        tags: i.gK.maybeNull(i.gK.array(k)),
                        madeFor: i.gK.maybeNull(f),
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
                            let { experiments: t } = (0, i.Zn)(e);
                            if (
                                !t.checkExperiment(
                                    l.zal.WebEditorsFeatures,
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
                        changeDescription: (0, i.L3)(function* (t) {
                            if (!(0, i._n)(e)) return l.FlZ.ERROR;
                            if (e.description === t) return l.FlZ.OK;
                            if (t.length > o.iz) return l.FlZ.ERROR;
                            let { usersResource: a, modelActionsLogger: r } =
                                (0, i._$)(e);
                            if (e.canUserChange) {
                                let i = e.description;
                                e.description = t;
                                try {
                                    let i = yield a.changePlaylistDescription({
                                        description: t,
                                        userId: e.uid,
                                        playlistKind: e.kind,
                                    });
                                    return (
                                        (e.description = i.description),
                                        l.FlZ.OK
                                    );
                                } catch (t) {
                                    (e.description = i), r.error(t);
                                }
                            }
                            return l.FlZ.ERROR;
                        }),
                        changePlaylistCover: (0, i.L3)(function* (t) {
                            if (!(0, i._n)(e)) return l.FlZ.ERROR;
                            let { usersResource: a, modelActionsLogger: r } =
                                (0, i._$)(e);
                            try {
                                let i = yield a.uploadPlaylistCover({
                                    userId: e.uid,
                                    formData: t,
                                    playlistKind: e.kind,
                                });
                                return (e.coverUri = i.cover.uri), l.FlZ.OK;
                            } catch (e) {
                                r.error(e);
                            }
                            return l.FlZ.ERROR;
                        }),
                    }))
                    .named("PlaylistMeta"),
                b = o.Zq.props({ artists: i.gK.maybe(i.gK.array(c.PK)) });
            var P = a(91919),
                C = a(75658),
                S = a(56395),
                T = a(17999);
        },
        53217: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { default: () => n });
            var i = a(33008),
                l = a(17846),
                r = a(84706);
            let n = () => {
                let e = (0, l.useSearchParams)(),
                    t = e.get("userId"),
                    a = e.get("kind");
                return (
                    (t && a) || (0, l.notFound)(),
                    (0, i.jsx)(r.SM, { userId: t, kind: a })
                );
            };
        },
        56093: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 53217));
        },
        56395: (e, t, a) => {
            "use strict";
            a.d(t, { PlaylistCard: () => x });
            var i = a(33008),
                l = a(85896),
                r = a(97531),
                n = a(66268),
                s = a(73827),
                o = a(93967),
                d = a(18064),
                u = a(48509),
                c = a(42213),
                m = a(42314),
                g = a(69476),
                v = a(78016),
                p = a(54487),
                y = a(77868),
                h = a(70879),
                f = a(25911),
                k = a(79169),
                _ = a(18740),
                b = a(14829),
                P = a(66098),
                C = a(28996);

            var electronBridge = a(77575),
                cssDataData = a(42795),
                icon = a(78016),
                contextMenuItem = a(66098),
                cssData = a.n(cssDataData);


            let downloadTracksToFile = (0, r.PA)((e) => {
                let { playlist: playlist, tracksIds: tracksIds } = e,

                    trackName = (0, n.useMemo)(
                        () => {
                            return `${playlist.title}`;
                        },
                        [playlist],
                    ),

                    o = (0, n.useCallback)(() => {
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

            let S = (0, r.PA)((e) => {
                var t;
                let { playlist: a, onOpenChange: l, open: r, ...n } = e,
                    {
                        shouldShowBuySubscriptionModal: u,
                        showBuySubscriptionModal: m,
                    } = (0, k.qBP)(),
                    {
                        experiments: g,
                        settings: { isMobile: v },
                        trailer: p,
                        user: y,
                        playlist: {
                            trackIds: trackIds
                        }
                    } = (0, k.Pjs)(),
                    h = (0, f.KX)(a),
                    b = (0, f.A7)(a),
                    S = (0, k.Ftl)(),
                    { formatMessage: T } = (0, s.A)(),
                    E = (0, k.PT7)(),
                    x = g.checkExperiment(k.zal.WebEditorsFeatures, "on"),
                    K = (0, C.A_)({
                        entityVariant: k.DwC.PLAYLIST,
                        urlParams: { id: a.uid, kind: a.kind },
                    });
                (0, k.NBO)(r);
                let I = (0, c.c)(() => {
                    if (u) return void m();
                    E() ||
                        (p.openPlaylistTrailer(a.id), S(o.ky.Playlist, a.id));
                });
                return (0, i.jsxs)(P.W1, {
                    title: a.title,
                    onOpenChange: l,
                    open: r,
                    offsetOptions: 10,
                    isMobile: v,
                    ariaLabel: T({ id: "interface-actions.context-menu" }),
                    containerProps: (0, d.Am)(
                        d.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ),
                    ...n,
                    children: [
                        x &&
                            (0, i.jsx)(C.dx, {
                                entityVariant: k.DwC.PLAYLIST,
                                adminUrl: a.isFavouritePlaylist ? void 0 : K,
                            }),
                        !v &&
                            (0, i.jsx)(_.L1, {
                                onClick: b,
                                isPinned: a.isPinned,
                            }),
                        !a.isFavouritePlaylist &&
                            (0, i.jsx)(_.TW, {
                                onClick: h,
                                isLiked: a.isLiked,
                                disabled: !y.isAuthorized,
                            }),
                        (0, i.jsx)(downloadTracksToFile, {
                            playlist: e,
                            tracksIds: trackIds,
                        }),
                        (null == (t = a.trailer) ? void 0 : t.isAvailable) &&
                            (0, i.jsx)(_.No, {
                                onClick: I,
                                disabled: !a.isAvailable,
                            }),
                    ],
                });
            });
            var T = a(96973),
                E = a.n(T);
            let x = (0, r.PA)((e) => {
                let {
                        className: t,
                        playlist: a,
                        children: r,
                        contentLinesCount: P,
                        customDescription: C,
                    } = e,
                    { ref: T, intersectionPropertyId: x } = (0, k.nMI)(),
                    { trailer: K, user: I } = (0, k.Pjs)(),
                    { from: N, utmLink: L } = (0, k.fyy)({
                        contextId: a.uuid,
                        contextType: u.K.Playlist,
                    }),
                    { formatMessage: F } = (0, s.A)(),
                    {
                        sendLikeSearchFeedback: A,
                        sendNavigateSearchFeedback: w,
                        sendPlaySearchFeedback: D,
                    } = (0, k.zEv)(),
                    [j, O] = (0, n.useState)(!1),
                    [R, M] = (0, n.useState)(!1),
                    [B, U] = (0, n.useState)(!1),
                    X = (0, b.r)(a),
                    G = (0, f.KX)(a),
                    z = (0, f.A7)(a),
                    Z = (0, k.NKK)(),
                    $ = (0, k.brA)(),
                    H = (0, k.ZpR)(a.url),
                    Y = (0, k.Ftl)(),
                    V = (0, k.PT7)(),
                    Q = (0, c.c)((e) => {
                        if ((e.stopPropagation(), V()))
                            return void e.preventDefault();
                        K.setUtmLink(L),
                            K.openPlaylistTrailer(a.id),
                            Y(o.ky.Playlist, a.id);
                    }),
                    [q, W] = (0, n.useState)(!1),
                    { isPlaying: J, togglePlay: ee } = (0, k.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: u.K.Playlist,
                                meta: { id: a.id, uuid: a.uuid },
                                from: N,
                                utmLink: L,
                            },
                            loadContextMeta: !0,
                        },
                    }),
                    et = (0, c.c)(() => {
                        Z({ to: o.QT.PlaylistScreen }), null == w || w();
                    }),
                    ea = (0, c.c)((e) => {
                        et(), H(e);
                    }),
                    ei = (0, c.c)(() => {
                        V() ||
                            (j || J || (O(!0), null == D || D()), ee(), $(!J));
                    }),
                    el = (0, c.c)(() => {
                        R || a.isLiked || (M(!0), null == A || A()), G();
                    }),
                    er = (0, c.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    en = (0, c.c)((e) => {
                        U(e), W(e);
                    }),
                    es = (0, n.useMemo)(() => {
                        var e;
                        return C
                            ? (0, i.jsx)(
                                  y.Caption,
                                  {
                                      variant: "span",
                                      type: "entity",
                                      size: "s",
                                      weight: "medium",
                                      lineClamp: 2,
                                      children: C,
                                  },
                                  a.getKey("description"),
                              )
                            : (null == (e = a.artists) ? void 0 : e.length)
                              ? (0, i.jsx)(
                                    h.iQ,
                                    {
                                        className: E().artists,
                                        artists: a.artists,
                                        lineClamp: 1,
                                        linkClassName: E().artistLink,
                                        captionSize: "s",
                                    },
                                    a.getKey("description"),
                                )
                              : void 0;
                    }, [C, a]),
                    eo = (0, m.L)(() => {
                        if (!a.isFavouritePlaylist)
                            return (0, i.jsx)(
                                _.cy,
                                {
                                    className: (0, l.$)(
                                        E().likeButton,
                                        E().control,
                                    ),
                                    isLiked: a.isLiked,
                                    onClick: el,
                                    variant: "default",
                                    size: "s",
                                    iconSize: "xxs",
                                    disabled: !I.isAuthorized,
                                },
                                a.getKey("LikeButton"),
                            );
                    }),
                    ed = (0, n.useMemo)(() => {
                        var e;
                        if (
                            null == a || null == (e = a.trailer)
                                ? void 0
                                : e.isAvailable
                        )
                            return (0, i.jsx)(
                                _.nE,
                                {
                                    children: (0, i.jsx)(
                                        _.kJ,
                                        {
                                            className: (0, l.$)(
                                                E().trailerButton,
                                                E().control,
                                            ),
                                            radius: "round",
                                            size: "s",
                                            iconSize: "xxs",
                                            onClick: Q,
                                        },
                                        a.getKey("TrailerButton"),
                                    ),
                                },
                                a.getKey("PlaylilstCardTrailerTooltip"),
                            );
                    }, [Q, a]),
                    eu = (0, n.useMemo)(
                        () =>
                            (0, i.jsx)(
                                _.O0,
                                {
                                    onClick: z,
                                    isPinned: a.isPinned,
                                    className: (0, l.$)(
                                        E().pinButton,
                                        E().control,
                                    ),
                                    withRipple: !1,
                                },
                                a.getKey("PinButton"),
                            ),
                        [z, a],
                    ),
                    ec = (0, n.useMemo)(
                        () =>
                            (0, i.jsx)(p.Paper, {
                                className: E().cover,
                                radius: "s",
                                withShadow: !0,
                                ...(0, d.Am)(d.Kq.playlist.PLAYLIST_CARD),
                                children: (0, i.jsxs)("div", {
                                    className: E().coverBlock,
                                    onClick: ea,
                                    children: [
                                        (0, i.jsx)(_.BW, {
                                            className: E().image,
                                            src: a.coverUri,
                                            size: 200,
                                            fit: "cover",
                                            alt: X,
                                            withAvatarReplace: !0,
                                            "aria-hidden": !0,
                                        }),
                                        (0, i.jsx)(g.hg, {
                                            isVisible: B || q,
                                            className: E().controls,
                                            playControl: (0, i.jsx)(
                                                _.DM,
                                                {
                                                    className: (0, l.$)(
                                                        E().playButton,
                                                        E().control,
                                                    ),
                                                    buttonVariant: "default",
                                                    withHover: !1,
                                                    iconSize: "xl",
                                                    variant: "filled",
                                                    onClick: ei,
                                                    isPlaying: J,
                                                    disabled: !a.isAvailable,
                                                },
                                                a.getKey("PlayButton"),
                                            ),
                                            likeControl: eo,
                                            menuControl: (0, i.jsx)(
                                                S,
                                                {
                                                    playlist: a,
                                                    onOpenChange: en,
                                                    open: B,
                                                    onClick: er,
                                                    className: (0, l.$)(
                                                        E().menuButton,
                                                        E().control,
                                                    ),
                                                    icon: (0, i.jsx)(v.Icon, {
                                                        size: "xxs",
                                                        variant: "more",
                                                    }),
                                                    size: "s",
                                                    ...(0, d.Am)(
                                                        d.Kq.playlist
                                                            .PLAYLIST_CONTEXT_MENU_BUTTON,
                                                    ),
                                                },
                                                a.getKey("PlaylistContextMenu"),
                                            ),
                                            pinControl: eu,
                                            trailerControl: ed,
                                        }),
                                    ],
                                }),
                            }),
                        [ea, a, X, B, q, ei, J, eo, en, er, eu, ed],
                    ),
                    em = !!a.actualLikesCount && !a.isLikesCountHidden;
                return (0, i.jsxs)(g.MN, {
                    ref: T,
                    "aria-label": X,
                    className: (0, l.$)(E().root, t),
                    title: (0, i.jsx)(y.Caption, {
                        variant: "div",
                        type: "entity",
                        size: "s",
                        weight: "medium",
                        lineClamp: 2,
                        ...(0, d.Am)(d.Kq.playlist.PLAYLIST_TITLE),
                        children: (0, i.jsx)(_.N_, {
                            className: E().titleLink,
                            href: a.url,
                            onClick: et,
                            children: a.title,
                        }),
                    }),
                    srTitle: (0, i.jsx)(_.N_, {
                        href: a.url,
                        onClick: et,
                        children: a.title,
                    }),
                    "data-intersection-property-id": x,
                    contentLinesCount: P,
                    view: ec,
                    description: es,
                    ...(0, d.Am)(d.Kq.playlist.PLAYLIST_ITEM),
                    children: [
                        em &&
                            (0, i.jsx)(_.xW, {
                                ariaLabel: F(
                                    { id: "entity-names.likes-counter" },
                                    { counter: a.actualLikesCount },
                                ),
                                likesCount: a.actualLikesCount,
                                isLiked: a.isLiked,
                                handleLikeClick: G,
                            }),
                        r,
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
        75658: (e, t, a) => {
            "use strict";
            a.d(t, { HorizontalPlaylistCard: () => T });
            var i = a(33008),
                l = a(85896),
                r = a(97531),
                n = a(66268),
                s = a(73827),
                o = a(96560),
                d = a(93967),
                u = a(18064),
                c = a(48509),
                m = a(42213),
                g = a(88485),
                v = a(78016),
                p = a(77868),
                y = a(79169),
                h = a(18740),
                f = a(14829),
                k = a(25911),
                _ = a(30672),
                b = a.n(_);
            let P = (0, r.PA)((e) => {
                var t;
                let { className: a, playlist: r, likeIconSize: s = "xxs" } = e,
                    { user: o, trailer: u } = (0, y.Pjs)(),
                    c = (0, y.PT7)(),
                    { sendLikeSearchFeedback: g } = (0, y.zEv)(),
                    p = (0, k.KX)(r),
                    [f, _] = (0, n.useState)(!1),
                    P = (0, m.c)(async () => {
                        f || r.isLiked || (_(!0), null == g || g()), await p();
                    }),
                    C = (0, y.Ftl)(),
                    S = (0, m.c)((e) => {
                        if ((e.stopPropagation(), c()))
                            return void e.preventDefault();
                        u.openPlaylistTrailer(r.id), C(d.ky.Playlist, r.id);
                    });
                return (0, i.jsxs)("div", {
                    className: (0, l.$)(b().root, b().controls, a, {
                        [b().controls_disabled]: !r.isAvailable,
                    }),
                    children: [
                        r.isAvailable &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(h.aQ, {
                                        fallback: (0, i.jsx)(h.cy, {
                                            size: "xs",
                                            iconSize: s,
                                            className: (0, l.$)(
                                                b().item,
                                                b().likeIcon,
                                            ),
                                            isLiked: r.isLiked,
                                            onClick: P,
                                            disabled: !o.isAuthorized,
                                        }),
                                    }),
                                    (null == (t = r.trailer)
                                        ? void 0
                                        : t.isAvailable) &&
                                        (0, i.jsx)(h.aQ, {
                                            fallback: (0, i.jsx)(h.kJ, {
                                                className: (0, l.$)(
                                                    b().item,
                                                    b().trailerIcon,
                                                ),
                                                iconSize: "xs",
                                                variant: "text",
                                                onClick: S,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, i.jsx)("div", {
                            className: (0, l.$)(b().item, b().item_buttonArrow),
                            children: (0, i.jsx)(v.Icon, {
                                className: h.$f.buttonArrow,
                                variant: "arrowRight",
                                size: "xs",
                            }),
                        }),
                    ],
                });
            });
            var C = a(19525),
                S = a.n(C);
            let T = (0, r.PA)((e) => {
                let {
                        className: t,
                        playlist: a,
                        pageId: r,
                        coverClassName: k,
                        playButtonIconSize: _,
                        likeIconSize: b,
                    } = e,
                    { ref: C, intersectionPropertyId: T } = (0, y.nMI)(),
                    { from: E } = (0, y.fyy)({ pageId: r }),
                    [x, K] = (0, n.useState)(!1),
                    I = (0, y.brA)(),
                    N = (0, f.r)(a),
                    L = a.title || "",
                    { formatMessage: F, formatNumber: A } = (0, s.A)(),
                    w = (0, y.PT7)(),
                    {
                        sendNavigateSearchFeedback: D,
                        sendPlaySearchFeedback: j,
                    } = (0, y.zEv)(),
                    O = (0, y.NKK)(),
                    {
                        isPlaying: R,
                        isCurrent: M,
                        togglePlay: B,
                    } = (0, y.Dx4)({
                        playContextParams: {
                            contextData: {
                                type: c.K.Playlist,
                                meta: { id: a.id, uuid: a.uuid },
                                from: E,
                            },
                            loadContextMeta: !0,
                        },
                    }),
                    U = (0, y.ZpR)(a.url),
                    X = (0, m.c)((e) => {
                        null == D || D(),
                            O({ to: d.QT.PlaylistScreen }),
                            e.preventDefault(),
                            U(e);
                    }),
                    G = (0, m.c)(() => {
                        w() ||
                            (x || R || (K(!0), null == j || j()), B(), I(!R));
                    }),
                    z = (0, m.c)((e) => {
                        (0, g.P)(e, h.$f.ripple), X(e);
                    }),
                    Z = (0, m.c)((e) => {
                        e.stopPropagation(), X(e);
                    }),
                    $ = (0, n.useCallback)(
                        (e) =>
                            (0, i.jsx)(h.q1, {
                                isAvailable: a.isAvailable,
                                isDisliked: !1,
                                coverUri: a.coverUri,
                                title: L,
                                className: (0, l.$)(h.$f.playButtonCell, k),
                                alt: F(
                                    { id: "entity-names.playlist-name" },
                                    { playlistName: L },
                                ),
                                radius: "xs",
                                ...e,
                            }),
                        [a, L, k, F],
                    ),
                    H =
                        null == $
                            ? void 0
                            : $({
                                  onPlayButtonClick: G,
                                  isPlaying: R,
                                  isCurrent: M,
                                  playButtonIconSize: _,
                              }),
                    Y = (0, n.useMemo)(
                        () =>
                            a.url && a.isAvailable
                                ? (0, i.jsx)(h.N_, {
                                      className: (0, l.$)(
                                          h.$f.text,
                                          h.$f.titleLink,
                                      ),
                                      href: a.url,
                                      onClick: Z,
                                      children: L,
                                  })
                                : (0, i.jsx)(p.Caption, {
                                      className: (0, l.$)(
                                          h.$f.text,
                                          h.$f.titleText,
                                      ),
                                      size: "m",
                                      variant: "div",
                                      type: "text",
                                      children: L,
                                  }),
                        [Z, a.isAvailable, a.url, L],
                    ),
                    V = (0, n.useMemo)(() => {
                        if (
                            void 0 === a.actualLikesCount ||
                            void 0 === a.tracksCount
                        )
                            return;
                        let e = (0, i.jsx)(p.Caption, {
                                variant: "span",
                                size: "m",
                                weight: "medium",
                                "aria-hidden": !0,
                                children: "•",
                            }),
                            t = a.isLiked ? "likedVariant" : "likeVariant",
                            l = ""
                                .concat(N, " ")
                                .concat(
                                    F(
                                        { id: "entity-names.tracks-count" },
                                        { value: a.tracksCount },
                                    ),
                                );
                        return (0, i.jsxs)("div", {
                            className: S().description,
                            "aria-label": l,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: S().likesCount,
                                    "aria-hidden": !0,
                                    children: [
                                        (0, i.jsx)(v.Icon, {
                                            className: S().icon,
                                            variant: t,
                                            size: "xxs",
                                        }),
                                        (0, i.jsx)(p.Caption, {
                                            variant: "span",
                                            size: "m",
                                            weight: "medium",
                                            children: A(a.actualLikesCount),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: S().tracksCount,
                                    "aria-hidden": !0,
                                    children: [
                                        e,
                                        (0, i.jsx)(p.Caption, {
                                            variant: "span",
                                            size: "m",
                                            weight: "medium",
                                            children: (0, i.jsx)(o.A, {
                                                id: "entity-names.tracks-count",
                                                values: {
                                                    value: A(a.tracksCount),
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [F, A, N, a.actualLikesCount, a.isLiked, a.tracksCount]);
                return (0, i.jsxs)(h.Cj, {
                    ref: C,
                    "data-intersection-property-id": T,
                    className: (0, l.$)(
                        h.$f.root,
                        { [h.$f.root_disabled]: !a.isAvailable },
                        t,
                    ),
                    "aria-label": a.title || F({ id: "entity-names.playlist" }),
                    onClick: z,
                    ...(0, u.Am)(u.Kq.playlist.HORIZONTAL_PLAYLIST_CARD),
                    children: [
                        H,
                        (0, i.jsx)(h.ro, {
                            isDisabled: !a.isAvailable,
                            title: Y,
                            description: V,
                        }),
                        (0, i.jsx)(P, { playlist: a, likeIconSize: b }),
                    ],
                });
            });
        },
        84706: (e, t, a) => {
            "use strict";
            a.d(t, {
                SM: () => C.PlaylistPage,
                Pn: () => P,
                Cm: () => S.PlaylistShimmersPage,
            }),
                a(48708);
            var i = a(41028),
                l = a(30293),
                r = a(79169),
                n = (function (e) {
                    return (
                        (e.MAJOR = "Major"),
                        (e.NAME = "Название"),
                        (e.ARTISCS = "Исполнители"),
                        (e.LINK = "Ссылка"),
                        (e.ALBUM_ID = "albumId"),
                        (e.TRACK_ID = "trackId"),
                        e
                    );
                })({}),
                s = (function (e) {
                    return (
                        (e.MAJOR = "major"),
                        (e.NAME = "name"),
                        (e.ARTISCS = "artists"),
                        (e.LINK = "link"),
                        (e.ALBUM_ID = "albumId"),
                        (e.TRACK_ID = "trackId"),
                        e
                    );
                })({});
            let o = i.gK
                .model("EditorFeature", {
                    shouldShowMajor: i.gK.boolean,
                    shouldShowGenre: i.gK.boolean,
                    shouldShowDuplicate: i.gK.boolean,
                    colorMajorMap: i.gK.map(i.gK.string),
                    duplicate: i.gK.map(i.gK.number),
                })
                .views((e) => {
                    let t = {
                        getNumberGroupTrackDuplicated(t) {
                            let { experiments: a } = (0, i.Zn)(e);
                            if (
                                t &&
                                a.checkExperiment(
                                    r.zal.WebEditorsFeatures,
                                    "on",
                                )
                            )
                                return e.duplicate.get(String(t.id));
                        },
                        shouldHighlightDublicatedTrack: (a) =>
                            !!(
                                e.shouldShowDuplicate &&
                                t.getNumberGroupTrackDuplicated(a)
                            ),
                        get sheetDataPlaylist() {
                            var a, o;
                            let { location: t, playlist: r } = (0, i.Zn)(e),
                                d = "https://"
                                    .concat(t.host, ".")
                                    .concat(t.tld),
                                u = {
                                    sheet: "Playlist",
                                    columns: [
                                        { label: n.MAJOR, value: s.MAJOR },
                                        { label: n.NAME, value: s.NAME },
                                        { label: n.ARTISCS, value: s.ARTISCS },
                                        { label: n.LINK, value: s.LINK },
                                        {
                                            label: n.ALBUM_ID,
                                            value: s.ALBUM_ID,
                                        },
                                        {
                                            label: n.TRACK_ID,
                                            value: s.TRACK_ID,
                                        },
                                    ],
                                    content: r.items
                                        .filter((e) => e.data)
                                        .map((e) => {
                                            var t,
                                                a,
                                                i,
                                                r,
                                                n,
                                                s,
                                                o,
                                                u,
                                                c,
                                                m,
                                                g,
                                                v,
                                                p;
                                            let { href: y } = (0,
                                                l.getLinkAttributesBase)(
                                                    null !=
                                                        (u =
                                                            null == (t = e.data)
                                                                ? void 0
                                                                : t.url)
                                                        ? u
                                                        : "",
                                                    { options: { host: d } },
                                                ),
                                                h = (
                                                    null == (a = e.data)
                                                        ? void 0
                                                        : a.url
                                                )
                                                    ? y
                                                    : "";
                                            return {
                                                major:
                                                    null !=
                                                    (c =
                                                        null == (r = e.data) ||
                                                        null == (i = r.major)
                                                            ? void 0
                                                            : i.name)
                                                        ? c
                                                        : "",
                                                name:
                                                    null !=
                                                    (m =
                                                        null == (n = e.data)
                                                            ? void 0
                                                            : n.title)
                                                        ? m
                                                        : "",
                                                artists:
                                                    null !=
                                                    (g =
                                                        null == (s = e.data)
                                                            ? void 0
                                                            : s.artists
                                                                  .map(
                                                                      (e) =>
                                                                          e.name,
                                                                  )
                                                                  .join(", "))
                                                        ? g
                                                        : "",
                                                link: h,
                                                albumId:
                                                    null != (v = e.albumId)
                                                        ? v
                                                        : "",
                                                trackId:
                                                    null !=
                                                    (p =
                                                        null == (o = e.data)
                                                            ? void 0
                                                            : o.id)
                                                        ? p
                                                        : "",
                                            };
                                        }),
                                };
                            return {
                                data: u,
                                settings: {
                                    fileName:
                                        (null == (a = r.meta)
                                            ? void 0
                                            : a.uid) &&
                                        (null == (o = r.meta) ? void 0 : o.kind)
                                            ? "%"
                                                  .concat(r.meta.uid, "%_%")
                                                  .concat(
                                                      r.meta.kind,
                                                      "%_to_text",
                                                  )
                                            : "to_text",
                                },
                            };
                        },
                    };
                    return t;
                })
                .actions((e) => ({
                    exportToExcel: (0, i.L3)(function* () {
                        let { modelActionsLogger: t } = (0, i._$)(e);
                        try {
                            let t = yield Promise.all([
                                    a.e(714),
                                    a.e(8473),
                                    a.e(3592),
                                ]).then(a.t.bind(a, 54540, 23)),
                                { data: i, settings: l } = e.sheetDataPlaylist;
                            if (0 === i.content.length) return r.FlZ.ERROR;
                            return (
                                yield new Promise((e) => {
                                    t.default([i], l, () => e());
                                }),
                                r.FlZ.OK
                            );
                        } catch (e) {
                            return t.error(e), r.FlZ.ERROR;
                        }
                    }),
                    getAllPlaylistItems: (0, i.L3)(function* (t) {
                        let { batchSize: a } = t,
                            { playlist: l } = (0, i.Zn)(e),
                            r = l.items.length - 1;
                        for (let e = 0; e < r; e += a)
                            yield l.getTracksByRange({
                                startIndex: e,
                                endIndex: Math.min(e + a, r),
                            });
                    }),
                    getColorForMajor(t) {
                        let a = e.colorMajorMap.get(t);
                        if (a) return a;
                        let i = (0, r.KkH)(t),
                            l = "hsl(".concat(i, ", 50%, 50%)");
                        return e.colorMajorMap.set(t, l), l;
                    },
                    getDuplicates(t) {
                        let a = new Map();
                        t.forEach((e) => {
                            let t = a.get(e.id) || 0;
                            a.set(e.id, t + 1);
                        });
                        let i = 1;
                        a.forEach((t, a) => {
                            t > 1 && (e.duplicate.set(String(a), i), i++);
                        });
                    },
                    toggleShouldShowMajor() {
                        e.shouldShowMajor = !e.shouldShowMajor;
                    },
                    toggleShouldShowGenre() {
                        e.shouldShowGenre = !e.shouldShowGenre;
                    },
                    toggleShouldShowDuplicate() {
                        e.shouldShowDuplicate = !e.shouldShowDuplicate;
                    },
                    reset() {
                        (e.shouldShowDuplicate = !1),
                            (e.shouldShowGenre = !1),
                            (e.shouldShowMajor = !1),
                            (e.colorMajorMap = (0, i.wg)({})),
                            (e.duplicate = (0, i.wg)({}));
                    },
                }));
            var d = a(29318),
                u = a(61979),
                c = a(73508),
                m = a(46369),
                g = a(45242),
                v = a(44078),
                p = a(25911),
                y = a(59615),
                h = a(2865);
            let f = (e) => e.map((e) => (0, h.li)(e.id, e.albumId || void 0)),
                k = (e) => {
                    var t, a, l;
                    let n = null == (t = e.tracks) ? void 0 : t.map(m.Qy),
                        s = (null == (a = e.tracks) ? void 0 : a.length)
                            ? null == (l = e.tracks)
                                ? void 0
                                : l.map((e, t) =>
                                      ((e, t) => {
                                          let [a, l] = e.split(":");
                                          return (0, i.wg)({
                                              id: a || "",
                                              albumId: l || "",
                                              key: "".concat(a, "-").concat(t),
                                              data: null,
                                              loadingState: r.GuX.IDLE,
                                          });
                                      })(e, t),
                                  )
                            : [];
                    return {
                        id: e.id,
                        name: e.name,
                        tracks: (0, i.wg)(s),
                        unloadedTracks: (0, i.wg)(n),
                    };
                },
                _ = i.gK
                    .compose(
                        i.gK.model("PlaylistPageFilters", {
                            items: i.gK.maybeNull(i.gK.array(m.S9)),
                            activeFilter: i.gK.maybe(i.gK.string),
                            activeFilterName: i.gK.maybeNull(i.gK.string),
                            shouldSendEventOnTabOpened: i.gK.boolean,
                            shouldSendEventOnTabLoaded: i.gK.boolean,
                        }),
                        y.XT,
                        y.pl,
                    )
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return e.isRejected || e.isLoading;
                            },
                            get activeFilterIndex() {
                                var a;
                                let t =
                                    null == (a = e.items)
                                        ? void 0
                                        : a.findIndex(
                                              (t) => t.id === e.activeFilter,
                                          );
                                return t && t > -1 ? t : 0;
                            },
                            get analyticsParamsActiveFilterIndex() {
                                return t.activeFilterIndex + 1;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getFilters: (0, i.L3)(function* () {
                                var a, l;
                                let {
                                        filtersResource: n,
                                        modelActionsLogger: s,
                                    } = (0, i._$)(e),
                                    { sonataState: o, playlist: d } = (0, i.Zn)(
                                        e,
                                    );
                                if (
                                    e.isLoading ||
                                    !(null == (a = d.items) ? void 0 : a.length)
                                )
                                    return;
                                let u =
                                    d.items.map((e) =>
                                        String((0, c.V)(e.id, e.albumId)),
                                    ) || [];
                                try {
                                    e.loadingState = r.GuX.PENDING;
                                    let a = yield n.getTracksFilters({
                                        trackIds: u,
                                    });
                                    (e.items = (0, i.wg)(
                                        ((e) => {
                                            let t = e.filters.map(k);
                                            if (t.length < 3) return [];
                                            let a = t.find(
                                                (e) => e.id === m.Q1.ALL,
                                            );
                                            if (!a) return [];
                                            let i = t.filter(
                                                (e) => e.tracks.length >= 8,
                                            );
                                            return i.length < 2
                                                ? []
                                                : [a].concat(i.slice(0, 7));
                                        })(a),
                                    )),
                                        t.setActiveFilter(o.playlistFilter),
                                        t.getFilterName(
                                            o.playlistFilter || m.Q1.ALL,
                                        );
                                    let s =
                                        null == (l = e.items)
                                            ? void 0
                                            : l.find(
                                                  (t) =>
                                                      t.id === e.activeFilter,
                                              );
                                    s &&
                                        (d.setItems(s.tracks),
                                        o.setUnloadedEntitiesData(f(d.items))),
                                        (e.loadingState = r.GuX.RESOLVE);
                                } catch (t) {
                                    s.error(t), (e.loadingState = r.GuX.REJECT);
                                }
                            }),
                            getFilterName: (0, i.L3)(function* (t) {
                                let {
                                    filtersResource: a,
                                    modelActionsLogger: l,
                                } = (0, i._$)(e);
                                try {
                                    e.activeFilterName = (yield a.getFilterName(
                                        { filterId: t },
                                    )).name;
                                } catch (e) {
                                    l.error(e);
                                }
                            }),
                            handleFilterClick(a) {
                                if (!(0, i._n)(e)) return;
                                let { sonataState: l, playlist: r } = (0, i.Zn)(
                                    e,
                                );
                                t.setActiveFilter(a.id),
                                    t.getFilterName(a.id),
                                    r.setItems(
                                        e.activeFilter
                                            ? a.tracks
                                            : r.initialItems,
                                    ),
                                    l.setUnloadedEntitiesData(f(r.items)),
                                    t.setShouldSendEventOnTabOpened(!0);
                            },
                            setActiveFilter(t) {
                                t !== m.Q1.ALL
                                    ? (e.activeFilter = t)
                                    : (e.activeFilter = void 0);
                            },
                            setShouldSendEventOnTabOpened(t) {
                                e.shouldSendEventOnTabOpened = t;
                            },
                            setShouldSendEventOnTabLoaded(t) {
                                e.shouldSendEventOnTabLoaded = t;
                            },
                            reset() {
                                e.destroyItems([e.items]),
                                    (e.loadingState = r.GuX.IDLE),
                                    (e.activeFilter = void 0),
                                    (e.activeFilterName = null),
                                    (e.shouldSendEventOnTabOpened = !0),
                                    (e.shouldSendEventOnTabLoaded = !0);
                            },
                        };
                        return t;
                    }),
                b = i.gK
                    .compose(
                        i.gK.model("PlaylistPageSearch", {
                            errorStatusCode: i.gK.maybeNull(i.gK.number),
                            text: i.gK.string,
                            playlistTrackIds: i.gK.maybeNull(
                                i.gK.array(i.gK.string),
                            ),
                            suggestedTrackIds: i.gK.maybeNull(
                                i.gK.array(i.gK.string),
                            ),
                            additionTrackInProggress: i.gK.maybeNull(
                                i.gK.string,
                            ),
                            tracks: i.gK.maybeNull(i.gK.array(v.vj)),
                            isFocused: i.gK.optional(i.gK.boolean, !1),
                        }),
                        y.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return (
                                e.isNeededToLoad ||
                                e.loadingState === r.GuX.PENDING
                            );
                        },
                        get hasText() {
                            return !!e.text.length;
                        },
                        get suggestedTracks() {
                            var t;
                            return null == (t = e.suggestedTrackIds)
                                ? void 0
                                : t.map((t) => {
                                      var a;
                                      return (
                                          (null == (a = e.tracks)
                                              ? void 0
                                              : a.find((e) => e.id === t)) ||
                                          null
                                      );
                                  });
                        },
                        get playlistTracks() {
                            let t = [...(e.playlistTrackIds || [])];
                            return (
                                e.additionTrackInProggress &&
                                    t.unshift(e.additionTrackInProggress),
                                null == t
                                    ? void 0
                                    : t.map((t) => {
                                          var a;
                                          return (
                                              (null == (a = e.tracks)
                                                  ? void 0
                                                  : a.find((e) => {
                                                        var a;
                                                        return (
                                                            ((null ==
                                                            (a = e.mainAlbum)
                                                                ? void 0
                                                                : a.id) &&
                                                            t.includes(":")
                                                                ? ""
                                                                      .concat(
                                                                          e.id,
                                                                          ":",
                                                                      )
                                                                      .concat(
                                                                          e
                                                                              .mainAlbum
                                                                              .id,
                                                                      )
                                                                : e.id) === t
                                                        );
                                                    })) || null
                                          );
                                      })
                            );
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getTracksMeta: (0, i.L3)(function* () {
                                let {
                                        tracksResource: t,
                                        modelActionsLogger: a,
                                    } = (0, i._$)(e),
                                    l = [...(e.playlistTrackIds || [])].concat(
                                        e.suggestedTrackIds || [],
                                    );
                                try {
                                    let a = yield t.getTracksMeta({
                                        trackIds: l,
                                        removeDuplicates: !0,
                                        withProgress: !0,
                                    });
                                    (e.tracks = (0, i.wg)(
                                        null == a
                                            ? void 0
                                            : a.map((e) => (0, v.vU)(e)),
                                    )),
                                        e.loadingState !== r.GuX.IDLE &&
                                            (e.loadingState = r.GuX.RESOLVE);
                                } catch (e) {
                                    a.error(e);
                                }
                                return null;
                            }),
                            getTracks: (0, i.L3)(function* (a) {
                                let { uid: l, kind: n } = a,
                                    {
                                        searchPlaylistResource: s,
                                        modelActionsLogger: o,
                                    } = (0, i._$)(e);
                                if (
                                    e.loadingState === r.GuX.PENDING ||
                                    !e.hasText ||
                                    !(0, i._n)(e)
                                )
                                    return;
                                let { playlist: d } = (0, i.Zn)(e);
                                try {
                                    var c, m;
                                    let a;
                                    e.loadingState = r.GuX.PENDING;
                                    let {
                                            playlistTrackIds: o = [],
                                            suggestedTrackIds: u = [],
                                        } = yield s.getTrackIds({
                                            uid: l,
                                            kind: n,
                                            part: e.text,
                                        }),
                                        g =
                                            ((a = d.items),
                                            o.map((e) => {
                                                let t = a.find(
                                                    (t) => String(t.id) === e,
                                                );
                                                return (
                                                    null == t
                                                        ? void 0
                                                        : t.albumId
                                                )
                                                    ? ""
                                                          .concat(e, ":")
                                                          .concat(t.albumId)
                                                    : e;
                                            }));
                                    (e.playlistTrackIds = (0, i.wg)(g)),
                                        (e.suggestedTrackIds = (0, i.wg)(u)),
                                        ((null == (c = e.playlistTrackIds)
                                            ? void 0
                                            : c.length) || 0) +
                                            ((null == (m = e.suggestedTrackIds)
                                                ? void 0
                                                : m.length) || 0) >
                                        0
                                            ? t.getTracksMeta()
                                            : (e.loadingState = r.GuX.RESOLVE);
                                } catch (t) {
                                    o.error(t),
                                        t instanceof u.GX &&
                                            (t.statusCode === u.X1.NOT_FOUND ||
                                                t.statusCode ===
                                                    u.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode =
                                                u.X1.NOT_FOUND),
                                        e.loadingState !== r.GuX.IDLE &&
                                            (e.loadingState = r.GuX.REJECT);
                                }
                            }),
                            setText(t) {
                                e.text = t;
                            },
                            setIdleState() {
                                e.loadingState = r.GuX.IDLE;
                            },
                            setAdditionTrackAnimation(t) {
                                e.additionTrackInProggress = t;
                            },
                            setFocus() {
                                e.isFocused = !0;
                            },
                            removeFocus() {
                                e.isFocused = !1;
                            },
                            replaceAdditionTrackInProggress() {
                                if (e.additionTrackInProggress) {
                                    var t, a;
                                    null == (t = e.playlistTrackIds) ||
                                        t.unshift(e.additionTrackInProggress),
                                        (e.suggestedTrackIds = (0, i.wg)(
                                            null == (a = e.suggestedTrackIds)
                                                ? void 0
                                                : a.filter(
                                                      (t) =>
                                                          t !==
                                                          e.additionTrackInProggress,
                                                  ),
                                        )),
                                        (e.additionTrackInProggress = null);
                                }
                            },
                            resetAdditionTrackAnimation() {
                                e.additionTrackInProggress = null;
                            },
                            reset() {
                                (e.playlistTrackIds = null),
                                    (e.suggestedTrackIds = null),
                                    (e.additionTrackInProggress = null),
                                    (e.tracks = null),
                                    (e.loadingState = r.GuX.IDLE),
                                    (e.isFocused = !1);
                            },
                        };
                        return t;
                    }),
                P = i.gK
                    .compose(
                        i.gK.model("PlaylistPage", {
                            uuid: i.gK.maybeNull(i.gK.string),
                            meta: i.gK.maybeNull(g.BL),
                            items: i.gK.array(m.PZ),
                            errorStatusCode: i.gK.maybeNull(i.gK.number),
                            similarPlaylists: i.gK.array(g.IP),
                            initialItems: i.gK.array(m.PZ),
                            shouldShowTrailerOnboarding: i.gK.maybeNull(
                                i.gK.boolean,
                            ),
                            editorFeature: o,
                            search: b,
                            filters: _,
                        }),
                        y.pl,
                        y.XT,
                    )
                    .views((e) => {
                        let t = {
                            getUrl(t) {
                                if (!e.uuid) return "";
                                let { href: a } = (0, r.uvd)(
                                    "/playlists/:playlistUuid",
                                    {
                                        params: { playlistUuid: e.uuid },
                                        query: t,
                                    },
                                );
                                return a;
                            },
                            get isLoading() {
                                return (
                                    e.isNeededToLoad ||
                                    e.loadingState === r.GuX.PENDING
                                );
                            },
                            get isDisabled() {
                                var a;
                                return (
                                    e.isResolved &&
                                    (0 === e.items.length ||
                                        !(null == (a = e.meta)
                                            ? void 0
                                            : a.isAvailable))
                                );
                            },
                            get isNotFound() {
                                return (
                                    e.isRejected &&
                                    e.errorStatusCode === u.X1.NOT_FOUND
                                );
                            },
                            get hasSimilarPlaylists() {
                                return (
                                    t.isLoading || e.similarPlaylists.length > 0
                                );
                            },
                            get isEmptyPlaylist() {
                                return e.isResolved && 0 === e.items.length;
                            },
                            get contextMeta() {
                                var l, n, s, o, d, m, g, v, y, h;
                                return {
                                    isAvailable:
                                        null == (l = e.meta)
                                            ? void 0
                                            : l.isAvailable,
                                    id: e.meta.id,
                                    uid: null == (n = e.meta) ? void 0 : n.uid,
                                    uuid: e.meta.uuid,
                                    kind:
                                        null == (s = e.meta) ? void 0 : s.kind,
                                    title:
                                        null == (o = e.meta) ? void 0 : o.title,
                                    coverUri:
                                        null == (d = e.meta)
                                            ? void 0
                                            : d.coverUri,
                                    likesCount:
                                        null == (m = e.meta)
                                            ? void 0
                                            : m.likesCount,
                                    averageColor:
                                        null == (g = e.meta)
                                            ? void 0
                                            : g.averageColor,
                                    owner:
                                        null == (v = e.meta) ? void 0 : v.owner,
                                    description:
                                        null == (y = e.meta)
                                            ? void 0
                                            : y.description,
                                    modified:
                                        null == (h = e.meta)
                                            ? void 0
                                            : h.modified,
                                };
                            },
                            get isDragAndDropEnabled() {
                                var f;
                                if (!(0, i._n)(e)) return !1;
                                let { ugcUploadCenter: t } = (0, i.Zn)(e);
                                return !!(
                                    (null == (f = e.meta)
                                        ? void 0
                                        : f.canUserChange) &&
                                    (e.items.length > 1 ||
                                        t.getUploadingTracksByPlaylistKind(
                                            e.meta.kind,
                                        ).length > 0)
                                );
                            },
                            get itemsKeys() {
                                return e.items.map((e) => e.key);
                            },
                            get isFavouritePlaylist() {
                                var k;
                                return (
                                    (null == (k = e.meta) ? void 0 : k.kind) ===
                                    p.ji.LIKE
                                );
                            },
                            get enableVariousAutoFlow() {
                                return !!e.filters.activeFilter;
                            },
                            get trackIds() {
                                return e.initialItems.map((e) =>
                                    String((0, c.V)(e.id, e.albumId)),
                                );
                            },
                            get isRewind2024Playlist() {
                                var _;
                                return (
                                    (null == (_ = e.meta)
                                        ? void 0
                                        : _.generatedPlaylistType) ===
                                    "rewind2024"
                                );
                            },
                            get areAllTracksUploaded() {
                                return e.items.every(
                                    (e) => e.loadingState === r.GuX.RESOLVE,
                                );
                            },
                            get shouldShowEmptyBlock() {
                                var b, P;
                                if (!(0, i._n)(e)) return !1;
                                let { ugcUploadCenter: a } = (0, i.Zn)(e),
                                    l = !!(null == (b = e.meta)
                                        ? void 0
                                        : b.isOwnPlaylist),
                                    r = !!(
                                        (null == (P = e.meta)
                                            ? void 0
                                            : P.kind) &&
                                        a.getUploadingTracksByPlaylistKind(
                                            e.meta.kind,
                                        ).length
                                    ),
                                    n = !!e.search.hasText;
                                return t.isEmptyPlaylist && l && !r && !n;
                            },
                            get virtualListItemsCount() {
                                var C, S;
                                if (e.search.hasText) return 0;
                                return null !=
                                    (S =
                                        null == (C = e.items)
                                            ? void 0
                                            : C.length)
                                    ? S
                                    : 0;
                            },
                            get isFiltersAvailable() {
                                var T;
                                return !!(
                                    t.isFavouritePlaylist &&
                                    (null == (T = e.meta)
                                        ? void 0
                                        : T.isOwnPlaylist)
                                );
                            },
                            get analyticsParams() {
                                return {
                                    objectId: e.uuid || void 0,
                                    tabId: e.filters.activeFilter,
                                    tabPos: e.filters
                                        .analyticsParamsActiveFilterIndex,
                                };
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getTracksByRange: (0, i.L3)(function* (t) {
                                var a, l;
                                let { startIndex: n, endIndex: s } = t,
                                    {
                                        tracksResource: o,
                                        modelActionsLogger: d,
                                    } = (0, i._$)(e);
                                if (
                                    !(null == (a = e.meta) ? void 0 : a.uid) ||
                                    !(null == (l = e.meta) ? void 0 : l.kind)
                                )
                                    return null;
                                (n = Math.max(0, n)),
                                    (s = Math.min(s, e.items.length));
                                let u = ((e, t) => {
                                    let { startIndex: a, endIndex: i } = t,
                                        l = [];
                                    for (let t = a; t <= i; t++) {
                                        var n, s;
                                        ((null == (n = e[t])
                                            ? void 0
                                            : n.loadingState) === r.GuX.IDLE ||
                                            (null == (s = e[t])
                                                ? void 0
                                                : s.loadingState) ===
                                                r.GuX.REJECT) &&
                                            l.push(t);
                                    }
                                    return l;
                                })(e.items, { startIndex: n, endIndex: s });
                                try {
                                    let t,
                                        a =
                                            ((t = e.items),
                                            u.map((e) => {
                                                let a = t[e];
                                                return (
                                                    null == a
                                                        ? void 0
                                                        : a.albumId
                                                )
                                                    ? ""
                                                          .concat(a.id, ":")
                                                          .concat(a.albumId)
                                                    : String(
                                                          null == a
                                                              ? void 0
                                                              : a.id,
                                                      );
                                            }));
                                    if (!a.length) return null;
                                    u.forEach((t) => {
                                        let a = e.items[t];
                                        a && (a.loadingState = r.GuX.PENDING);
                                    });
                                    let i = yield o.getTracksMeta({
                                        trackIds: a,
                                        withProgress: !0,
                                    });
                                    u.forEach((t, a) => {
                                        let l = null == i ? void 0 : i[a];
                                        if (e.items[t] && l) {
                                            var n, s;
                                            e.items[t] = {
                                                id: l.id,
                                                albumId:
                                                    (null == (s = l.albums) ||
                                                    null == (n = s[0])
                                                        ? void 0
                                                        : n.id) || null,
                                                key: ""
                                                    .concat(l.id, "-")
                                                    .concat(t),
                                                data: (0, v.vU)(l),
                                                loadingState: r.GuX.RESOLVE,
                                            };
                                        }
                                    });
                                } catch (t) {
                                    d.error(t),
                                        u.forEach((t) => {
                                            let a = e.items[t];
                                            a &&
                                                (a.loadingState = r.GuX.REJECT);
                                        });
                                }
                                return null;
                            }),
                            updateData: (0, i.L3)(function* (a) {
                                var l;
                                if (
                                    (null == a ? void 0 : a.error) ===
                                    "not-found"
                                )
                                    return (
                                        (e.errorStatusCode = u.X1.NOT_FOUND),
                                        (e.loadingState = r.GuX.REJECT),
                                        null
                                    );
                                (e.similarPlaylists = (0, i.wg)(
                                    null == (l = a.similarPlaylists)
                                        ? void 0
                                        : l.map(g.Ew),
                                )),
                                    (e.meta = (0, g.ZC)(a)),
                                    (e.items = (0, i.wg)(
                                        a.tracks.map((e, t) => ({
                                            id: String(e.id),
                                            albumId: e.albumId || null,
                                            key: "".concat(e.id, "-").concat(t),
                                            loadingState: r.GuX.IDLE,
                                        })),
                                    )),
                                    (e.initialItems = (0, d.HO)(e.items));
                                let {
                                    sonataState: n,
                                    playlist: s,
                                    experiments: o,
                                } = (0, i.Zn)(e);
                                return (
                                    n.setUnloadedEntitiesData(f(e.items)),
                                    (null == o
                                        ? void 0
                                        : o.checkExperiment(
                                              r.zal.WebEditorsFeatures,
                                              "on",
                                          )) &&
                                        s.editorFeature.getDuplicates(e.items),
                                    yield t.getTracksByRange({
                                        startIndex: 0,
                                        endIndex: 10,
                                    })
                                );
                            }),
                            getPlaylistByUserIdAndKind: (0, i.L3)(
                                function* (a) {
                                    let {
                                            userId: l,
                                            playlistKind: n,
                                            resumeStream: s = !1,
                                            trackMetaType: o,
                                            preloadedPlaylist: d,
                                        } = a,
                                        {
                                            usersResource: c,
                                            modelActionsLogger: m,
                                        } = (0, i._$)(e);
                                    if (e.loadingState !== r.GuX.PENDING)
                                        try {
                                            e.loadingState = r.GuX.PENDING;
                                            let a = d;
                                            if (
                                                (a ||
                                                    (a =
                                                        yield c.getPlaylistWithTracksIds(
                                                            {
                                                                userId: l,
                                                                playlistKind: n,
                                                                resumeStream: s,
                                                                trackMetaType:
                                                                    o,
                                                            },
                                                        )),
                                                (e.uuid =
                                                    null == a
                                                        ? void 0
                                                        : a.playlistUuid),
                                                "string" !=
                                                    typeof a.playlistUuid)
                                            ) {
                                                (e.errorStatusCode =
                                                    u.X1.NOT_FOUND),
                                                    (e.loadingState =
                                                        r.GuX.REJECT);
                                                return;
                                            }
                                            yield t.updateData(a),
                                                (e.loadingState =
                                                    r.GuX.RESOLVE);
                                        } catch (t) {
                                            m.error(t),
                                                t instanceof u.GX &&
                                                    (t.statusCode ===
                                                        u.X1.NOT_FOUND ||
                                                        t.statusCode ===
                                                            u.X1.BAD_REQUEST) &&
                                                    (e.errorStatusCode =
                                                        u.X1.NOT_FOUND),
                                                (e.loadingState = r.GuX.REJECT);
                                        }
                                },
                            ),
                            getPlaylistByUuid: (0, i.L3)(function* (a) {
                                let {
                                        playlistUuid: l,
                                        richTracks: n = !1,
                                        resumeStream: s = !1,
                                        preloadedPlaylist: o,
                                    } = a,
                                    {
                                        playlistResource: d,
                                        modelActionsLogger: c,
                                    } = (0, i._$)(e);
                                if (
                                    ((e.uuid = l),
                                    e.loadingState !== r.GuX.PENDING)
                                )
                                    try {
                                        e.loadingState = r.GuX.PENDING;
                                        let a = o;
                                        a ||
                                            (a = yield d.getPlaylist({
                                                playlistUuid: l,
                                                resumeStream: s,
                                                richTracks: n,
                                            })),
                                            yield t.updateData(a),
                                            e.loadingState !== r.GuX.IDLE &&
                                                (e.loadingState =
                                                    r.GuX.RESOLVE);
                                    } catch (t) {
                                        c.error(t),
                                            t instanceof u.GX &&
                                                (t.statusCode ===
                                                    u.X1.NOT_FOUND ||
                                                    t.statusCode ===
                                                        u.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode =
                                                    u.X1.NOT_FOUND),
                                            e.loadingState !== r.GuX.IDLE &&
                                                (e.loadingState = r.GuX.REJECT);
                                    }
                            }),
                            updatePlaylistTrackByUuid: (0, i.L3)(function* (a) {
                                let {
                                        playlistUuid: l,
                                        richTracks: n = !1,
                                        resumeStream: s = !1,
                                    } = a,
                                    {
                                        playlistResource: o,
                                        modelActionsLogger: d,
                                    } = (0, i._$)(e);
                                e.uuid = l;
                                try {
                                    let a = yield o.getPlaylist({
                                            playlistUuid: l,
                                            resumeStream: s,
                                            richTracks: n,
                                        }),
                                        d = [];
                                    if (
                                        ((e.items = (0, i.wg)(
                                            a.tracks.map((t, a) => {
                                                var i, l;
                                                let n = String(t.id),
                                                    s = t.albumId || null;
                                                return n ===
                                                    (null == (i = e.items[a])
                                                        ? void 0
                                                        : i.id) &&
                                                    s ===
                                                        (null ==
                                                        (l = e.items[a])
                                                            ? void 0
                                                            : l.albumId)
                                                    ? e.items[a]
                                                    : (d.push(a),
                                                      {
                                                          id: String(t.id),
                                                          albumId:
                                                              t.albumId || null,
                                                          key: ""
                                                              .concat(t.id, "-")
                                                              .concat(a),
                                                          loadingState:
                                                              r.GuX.IDLE,
                                                      });
                                            }),
                                        )),
                                        e.meta &&
                                            ((e.meta.modified = a.modified),
                                            (e.meta.revision = a.revision),
                                            d.length))
                                    ) {
                                        let e = Math.min(...d),
                                            a = Math.max(...d);
                                        t.getTracksByRange({
                                            startIndex: e,
                                            endIndex: a,
                                        });
                                    }
                                    if (
                                        (e.loadingState !== r.GuX.IDLE &&
                                            (e.loadingState = r.GuX.RESOLVE),
                                        (0, i._n)(e))
                                    ) {
                                        let { sonataState: t } = (0, i.Zn)(e);
                                        t.setUnloadedEntitiesData(f(e.items));
                                    }
                                } catch (t) {
                                    d.error(t),
                                        t instanceof u.GX &&
                                            (t.statusCode === u.X1.NOT_FOUND ||
                                                t.statusCode ===
                                                    u.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode =
                                                u.X1.NOT_FOUND),
                                        e.loadingState !== r.GuX.IDLE &&
                                            (e.loadingState = r.GuX.REJECT);
                                }
                            }),
                            moveTrack(t, a) {
                                let l = (0, d.HO)(e.items[t]);
                                if (
                                    !(t < 0) &&
                                    !(a < 0) &&
                                    !(t >= e.items.length) &&
                                    !(a >= e.items.length) &&
                                    l &&
                                    (e.items.splice(t, 1),
                                    e.items.splice(a, 0, l),
                                    (0, i._n)(e))
                                ) {
                                    let { sonataState: t } = (0, i.Zn)(e);
                                    t.setUnloadedEntitiesData(f(e.items));
                                }
                            },
                            removeTracksFromItems(t, a) {
                                if ((e.items.splice(t, a), (0, i._n)(e))) {
                                    let { sonataState: t } = (0, i.Zn)(e);
                                    t.setUnloadedEntitiesData(f(e.items));
                                }
                            },
                            setItems(t) {
                                e.items = (0, i.wg)((0, d.HO)(t));
                            },
                            setShouldShowTrailerOnboarding(t) {
                                e.shouldShowTrailerOnboarding = t;
                            },
                            reset() {
                                let { sonataState: t } = (0, i.Zn)(e);
                                t.resetUnloadedEntitiesData(),
                                    (e.uuid = null),
                                    (e.loadingState = r.GuX.IDLE),
                                    (e.errorStatusCode = null),
                                    (e.shouldShowTrailerOnboarding = null),
                                    e.search.setText(""),
                                    e.search.reset(),
                                    e.filters.reset(),
                                    e.destroyItems([
                                        e.meta,
                                        e.items,
                                        e.initialItems,
                                        e.similarPlaylists,
                                    ]);
                            },
                            refresh() {
                                var a, i;
                                (null == (a = e.meta) ? void 0 : a.uuid) &&
                                    t.getPlaylistByUuid({
                                        playlistUuid:
                                            null == (i = e.meta)
                                                ? void 0
                                                : i.uuid,
                                        resumeStream: !1,
                                    });
                            },
                            refreshTracks() {
                                var a, i;
                                (null == (a = e.meta) ? void 0 : a.uuid) &&
                                    t.updatePlaylistTrackByUuid({
                                        playlistUuid:
                                            null == (i = e.meta)
                                                ? void 0
                                                : i.uuid,
                                        resumeStream: !1,
                                    });
                            },
                        };
                        return t;
                    });
            a(138);
            var C = a(84684),
                S = a(68300);
        },
        91919: (e, t, a) => {
            "use strict";
            a.d(t, { EmptyPlaylistBlock: () => m });
            var i = a(33008),
                l = a(85896),
                r = a(66268),
                n = a(96560),
                s = a(18064),
                o = a(78016),
                d = a(77868),
                u = a(62093),
                c = a.n(u);
            let m = (e) => {
                let { className: t, isEmptySearch: a } = e,
                    u = (0, r.useMemo)(
                        () =>
                            a
                                ? (0, i.jsx)(n.A, {
                                      id: "search-results.not-found-title",
                                  })
                                : (0, i.jsx)(n.A, {
                                      id: "error-messages.empty-collection-playlist-title",
                                  }),
                        [a],
                    ),
                    m = (0, r.useMemo)(
                        () =>
                            a
                                ? (0, i.jsx)(n.A, {
                                      id: "search-results.not-found-description",
                                  })
                                : (0, i.jsx)(n.A, {
                                      id: "error-messages.empty-collection-playlist-description",
                                  }),
                        [a],
                    );
                return (0, i.jsxs)("div", {
                    className: (0, l.$)(c().root, t),
                    ...(0, s.Am)(s.Kq.playlist.PLAYLIST_EMPTY_BLOCK),
                    children: [
                        (0, i.jsx)("div", {
                            className: c().iconBackground,
                            children: (0, i.jsx)(o.Icon, {
                                variant: "search",
                                size: "l",
                                className: c().icon,
                                ...(0, s.Am)(
                                    s.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON,
                                ),
                            }),
                        }),
                        (0, i.jsx)(d.Heading, {
                            variant: "h3",
                            size: "xs",
                            className: c().title,
                            ...(0, s.Am)(
                                s.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE,
                            ),
                            children: u,
                        }),
                        (0, i.jsx)(d.Caption, {
                            variant: "span",
                            size: "l",
                            className: c().subtitle,
                            ...(0, s.Am)(
                                s.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT,
                            ),
                            children: m,
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
    (e) => {
        e.O(
            0,
            [
                7098, 8282, 9712, 5271, 7309, 8712, 6451, 9775, 952, 1709, 9284,
                8004, 9323, 1020, 1311, 7764, 6706, 2089, 996, 4236, 6728, 9169,
                8740, 9615, 3588, 2732, 1744, 4204, 4078, 9718, 4760, 508, 2561,
                8096, 9902, 5598, 7358,
            ],
            () => e((e.s = 56093)),
        ),
            (_N_E = e.O());
    },
]);
