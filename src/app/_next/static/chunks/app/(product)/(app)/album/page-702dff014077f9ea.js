(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8434],
    {
        2117: (e, t, a) => {
            "use strict";
            a.d(t, { XU: () => m });
            var i,
                n,
                l = a(7144),
                r = a(66268),
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
                })(n || (n = {}));
            var o = function (e) {
                var t = (0, s.A)(),
                    a = e.value,
                    i = e.children,
                    n = (0, l.__rest)(e, ["value", "children"]);
                return i(t.formatNumberToParts(a, n));
            };
            function d(e) {
                var t = function (t) {
                    var a = (0, s.A)(),
                        i = t.value,
                        n = t.children,
                        r = (0, l.__rest)(t, ["value", "children"]),
                        o = "string" == typeof i ? new Date(i || 0) : i;
                    return n(
                        "formatDate" === e
                            ? a.formatDateToParts(o, r)
                            : a.formatTimeToParts(o, r),
                    );
                };
                return (t.displayName = n[e]), t;
            }
            function u(e) {
                var t = function (t) {
                    var a = (0, s.A)(),
                        i = t.value,
                        n = t.children,
                        o = (0, l.__rest)(t, ["value", "children"]),
                        d = a[e](i, o);
                    if ("function" == typeof n) return n(d);
                    var u = a.textComponent || r.Fragment;
                    return r.createElement(u, null, d);
                };
                return (t.displayName = i[e]), t;
            }
            (o.displayName = "FormattedNumberParts"),
                (o.displayName = "FormattedNumberParts");
            var m = u("formatDate");
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
                QQ: () => N,
                Op: () => T,
                x5: () => I,
                jh: () => L.PromoLandingSonataControls,
                s_: () => R.RepeatButton,
                uP: () => F.ShuffleButton,
                $u: () => x.SonataControls,
                bG: () => G,
                qF: () => _.SonataVideoControls,
                x6: () => S,
                EX: () => s,
                li: () => d,
                pE: () => g,
                AA: () => c.useOnRepeatClick,
                e9: () => b.useOnShuffleClick,
                d0: () => v.useToggleMute,
            });
            var i = a(41028),
                n = a(75305),
                l = a(70879),
                r = a(79169);
            let s = (e) => {
                if (e.data.type !== n.R.Clip) return null;
                {
                    var t;
                    let a = e.data.meta;
                    if (!a.clipId) return null;
                    let n =
                            null == (t = a.artists)
                                ? void 0
                                : t.map((e) => (0, l.as)({ artist: e })),
                        { available: s, disclaimers: o } = (0, r.fyr)(a);
                    return (0, i.wg)({
                        clipId: a.clipId,
                        title: a.title,
                        thumbnail: a.thumbnail,
                        duration: a.duration,
                        previewUrl: a.previewUrl,
                        isAvailable: s,
                        disclaimers: o,
                        artists: n,
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
                m = a(61744);
            let g = (e) => {
                var t, a, s;
                switch (e.data.type) {
                    case n.R.Generative: {
                        let a = e.data.meta,
                            n = (0, r.QBb)(
                                null == a ? void 0 : a.derivedColors,
                            );
                        return (0, i.wg)({
                            id: String(a.id),
                            coverUri: a.imageUrl,
                            title: null != (t = a.title) ? t : "",
                            isAvailable: !0,
                            isRemoved: !1,
                            averageColor: n,
                        });
                    }
                    case n.R.Clip:
                    case o.z4.Unloaded:
                    case n.R.Radio:
                        return null;
                    default: {
                        let t = e.data.meta,
                            n = null == (a = t.artists) ? void 0 : a.map(l.dM),
                            r = null == (s = t.albums) ? void 0 : s.map(u.e7);
                        return (0, i.wg)({
                            ...(0, m.gK)(t),
                            artists: n,
                            albums: r,
                            isHiddenFromSonataQueue: e.hidden,
                        });
                    }
                }
            };
            var c = a(48148),
                b = a(73904),
                v = a(26893),
                p = a(86512),
                h = a(29318),
                A = a(48509),
                E = a(43090),
                y = a(10663);
            let f = i.gK.model("UnloadedEntityMeta", {
                    id: i.gK.union(i.gK.number, i.gK.string),
                    albumId: i.gK.maybe(i.gK.union(i.gK.number, i.gK.string)),
                }),
                S = i.gK.model("UnloadedEntityData", {
                    meta: f,
                    type: i.gK.literal(o.z4.Unloaded),
                });
            var K = a(6247),
                C = a(16285);
            let I = m.OQ.props({
                    artists: i.gK.array(l.PK),
                    albums: i.gK.array(u.GI),
                    chart: i.gK.maybe(C.Iz),
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
                            var n, l;
                            return null !=
                                (l = null == (n = e.albums) ? void 0 : n[0])
                                ? l
                                : null;
                        },
                        get index() {
                            var r, s, o;
                            return null !=
                                (o =
                                    null == (s = e.albums[0]) ||
                                    null == (r = s.trackPosition)
                                        ? void 0
                                        : r.index)
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
                            return e.type === K.S.AUDIOBOOK;
                        },
                        get isFairyTale() {
                            return e.type === K.S.FAIRY_TALE;
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
                            let { ugcResource: n, modelActionsLogger: s } = (0,
                            i._$)(e);
                            if (
                                e.artists.map((e) => e.name).join(", ") === a &&
                                t === e.title
                            )
                                return r.FlZ.OK;
                            try {
                                var o;
                                yield n.changeTrack({
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
                                    let t = l.PK.create({
                                        id: s,
                                        name: a,
                                        isAvailable: !0,
                                    });
                                    e.artists = (0, i.wg)([t]);
                                }
                                return r.FlZ.OK;
                            } catch (e) {
                                return s.error(e), r.FlZ.ERROR;
                            }
                        }),
                    })),
                N = i.gK
                    .model("BaseSonataState", {
                        contextType: i.gK.maybeNull(
                            i.gK.enumeration(Object.values(A.K)),
                        ),
                        contextId: i.gK.maybeNull(i.gK.string),
                        entityMeta: i.gK.maybeNull(I),
                        status: i.gK.enumeration(Object.values(o.MT)),
                        canMoveForward: i.gK.boolean,
                        canMoveBackward: i.gK.boolean,
                        canSpeed: i.gK.boolean,
                        repeatMode: i.gK.enumeration(Object.values(y.pM)),
                        canChangeRepeatMode: i.gK.boolean,
                        volume: i.gK.maybe(i.gK.number),
                        speed: i.gK.maybe(i.gK.number),
                        position: i.gK.maybeNull(i.gK.number),
                        duration: i.gK.maybeNull(i.gK.number),
                        canShuffle: i.gK.boolean,
                        shuffle: i.gK.boolean,
                        quality: i.gK.enumeration(Object.values(E.e)),
                        unloadedEntitiesData: i.gK.maybe(i.gK.array(S)),
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
                            return e.contextType === A.K.Vibe;
                        },
                        get isGenerativeContext() {
                            return e.contextType === A.K.Generative;
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
                            t && t.data.meta && (e.entityMeta = g(t));
                        },
                        setUnloadedEntitiesData: (t) => {
                            t &&
                                ((e.volatileUnloadedEntitiesData = (0, p.A)(t)),
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
                T = a(60030)
                    .z8.props({
                        artists: i.gK.array(l.PK),
                        isHiddenFromSonataQueue: i.gK.maybe(i.gK.boolean),
                    })
                    .views((e) => ({
                        get idWithContext() {
                            return String(e.clipId);
                        },
                    })),
                G = N.props({
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
                            a.set(r.cYZ.CrossFadeMode, t),
                                (e.isCrossFadeEnabled = t);
                        },
                    }))
                    .named("SonataState");
            a(75797), a(1199);
            var L = a(61646),
                R = a(57526),
                F = a(67950),
                x = a(357),
                _ = a(33363);
        },
        14795: (e, t, a) => {
            "use strict";
            a.d(t, {
                dx: () => d,
                l$: () => _.AlbumPage,
                MH: () => x,
                Wh: () => P,
            }),
                a(86916);
            var i,
                n,
                l = a(41028),
                r = a(79169),
                s = a(59615);
            let o = l.gK.model("Cpa", {
                    clid: l.gK.string,
                    artistId: l.gK.number,
                }),
                d = l.gK
                    .compose(
                        l.gK.model("AlbumCpa", {
                            albumId: l.gK.maybeNull(l.gK.number),
                            cpa: l.gK.maybeNull(o),
                        }),
                        s.pl,
                    )
                    .views((e) => ({
                        isPlusCPAEnabled(t) {
                            let {
                                    pageAlbumId: a,
                                    albumId: i,
                                    isNonMusic: n,
                                } = t,
                                {
                                    experiments: r,
                                    user: { isAuthorized: s },
                                } = (0, l.Zn)(e);
                            return !1;
                        },
                        isPlusCPAPlayerBarEnabled(t, a) {
                            let {
                                experiments: i,
                                user: { hasPlus: n },
                            } = (0, l.Zn)(e);
                            return !1;
                        },
                        isPlusCPABannerEnabled(t) {
                            var a;
                            let {
                                    pageAlbumId: i,
                                    albumId: n,
                                    isNonMusic: r,
                                } = t,
                                {
                                    experiments: s,
                                    settings: o,
                                    user: { hasPlus: d },
                                } = (0, l.Zn)(e);
                            return null == (a = o.browserInfo) || a.isTouch, !1;
                        },
                        isHidePlusModalEnabled(t, a) {
                            var i;
                            let {
                                experiments: n,
                                settings: r,
                                user: { hasPlus: s },
                            } = (0, l.Zn)(e);
                            return null == (i = r.browserInfo) || i.isTouch, !1;
                        },
                    }))
                    .actions((e) => ({
                        getCpa: (0, l.L3)(function* (t) {
                            let { albumId: a, preloadedCpa: i } = t,
                                { experiments: n, user: r } = (0, l.Zn)(e);
                        }),
                        reset() {
                            (e.albumId = null), e.destroyItems([e.cpa]);
                        },
                    }));
            var u = a(61979),
                m = a(72315),
                g = a(93435),
                c = a(15479),
                b = a(6247);
            ((i || (i = {})).RECENT_ALBUMS = "recent-albums"),
                (function (e) {
                    (e[(e.DAY = 1)] = "DAY"),
                        (e[(e.WEEK = 7)] = "WEEK"),
                        (e[(e.MONTH = 30)] = "MONTH");
                })(n || (n = {}));
            var v = a(85897),
                p = a(12853),
                h = a(52732),
                A = a(53706),
                E = a(2865),
                y = a(44078),
                f = a(95592);
            let S = (e) =>
                    (0, l.wg)({
                        type: f.rU.TEXT,
                        data: null != e ? e : null,
                        loadingState: r.GuX.RESOLVE,
                    }),
                K = (e) => {
                    var t;
                    let { data: a, ...i } = e;
                    return (0, l.wg)({
                        type:
                            null != (t = null == a ? void 0 : a.type)
                                ? t
                                : b.S.TRACK,
                        data: null != a ? a : null,
                        ...i,
                    });
                },
                C = (e) => "".concat(e, "-text"),
                I = (e) => String(e),
                N = (e) =>
                    (0, l.wg)({
                        id: e.id,
                        type: e.type,
                        title: e.title,
                        albums: e.albums.map(h.pp),
                    }),
                T = (e) => !!(e && "position" in e),
                G = l.gK
                    .compose(
                        l.gK.model("AlbumDonations", {
                            items: l.gK.maybeNull(l.gK.array(A.eG)),
                        }),
                        s.pl,
                        s.XT,
                    )
                    .actions((e) => ({
                        reset() {
                            (e.loadingState = r.GuX.IDLE),
                                e.destroyItems([e.items]);
                        },
                    })),
                L = l.gK.model("LabelItem", {
                    id: l.gK.number,
                    name: l.gK.string,
                }),
                R = l.gK
                    .compose(
                        l.gK.model("RelatedAlbumsPage", {
                            items: l.gK.array(h.JC),
                        }),
                        s.pl,
                        s.XT,
                    )
                    .actions((e) => ({
                        reset() {
                            (e.loadingState = r.GuX.IDLE),
                                e.destroyItems([e.items]);
                        },
                    })),
                F = l.gK
                    .compose(
                        l.gK.model("RelatedContent", {
                            items: l.gK.maybeNull(l.gK.array(p.N3)),
                        }),
                        s.pl,
                        s.XT,
                    )
                    .actions((e) => ({
                        reset() {
                            (e.loadingState = r.GuX.IDLE),
                                e.destroyItems([e.items]);
                        },
                    })),
                x = l.gK
                    .compose(
                        l.gK.model("AlbumPage", {
                            id: l.gK.maybeNull(l.gK.number),
                            meta: l.gK.maybeNull(h.JC),
                            items: l.gK.array(p.PX),
                            indexItems: l.gK.map(l.gK.array(l.gK.number)),
                            errorStatusCode: l.gK.maybeNull(l.gK.number),
                            deprecationTargetAlbumId: l.gK.maybeNull(
                                l.gK.number,
                            ),
                            latestGenreAlbums: l.gK.maybe(R),
                            otherArtistAlbums: l.gK.maybe(R),
                            otherAlbumVersions: l.gK.maybe(l.gK.array(h.JC)),
                            labels: l.gK.maybeNull(l.gK.array(L)),
                            description: l.gK.maybe(l.gK.string),
                            donations: l.gK.maybe(G),
                            relatedContent: l.gK.maybe(F),
                            allTracksUnfinished: l.gK.boolean,
                        }),
                        s.Ec,
                        s.pl,
                        s.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isOtherArtistAlbumsAvailable() {
                                var a, i, n, s, o;
                                return !!(
                                    !(null == (a = e.meta)
                                        ? void 0
                                        : a.isNonMusic) &&
                                    (null == (n = e.meta) ||
                                    null == (i = n.artists)
                                        ? void 0
                                        : i.length) === 1 &&
                                    !(null == (o = e.meta) ||
                                    null == (s = o.artists[0])
                                        ? void 0
                                        : s.various)
                                );
                            },
                            get isLatestGenreAlbumsAvailable() {
                                var d, m;
                                return !!(
                                    !(null == (d = e.meta)
                                        ? void 0
                                        : d.isNonMusic) &&
                                    (null == (m = e.meta) ? void 0 : m.genre)
                                );
                            },
                            get isNotFound() {
                                return (
                                    e.isRejected &&
                                    (e.errorStatusCode === u.X1.NOT_FOUND ||
                                        e.errorStatusCode === u.X1.BAD_REQUEST)
                                );
                            },
                            get isCacheNotFound() {
                                return (
                                    e.isRejected && e.errorStatusCode === v.FX
                                );
                            },
                            get hasDonations() {
                                var g;
                                return !!(
                                    (null == (g = e.donations)
                                        ? void 0
                                        : g.isResolved) &&
                                    e.donations &&
                                    e.donations.items &&
                                    e.donations.items.length > 0
                                );
                            },
                            get hasOtherAlbumVersions() {
                                return !!(
                                    e.isNeededToLoad ||
                                    e.loadingState === r.GuX.PENDING ||
                                    (e.otherAlbumVersions &&
                                        e.otherAlbumVersions.length > 0)
                                );
                            },
                            get hasLatestGenreAlbums() {
                                var c, b;
                                let a =
                                    e.latestGenreAlbums &&
                                    e.latestGenreAlbums.items &&
                                    e.latestGenreAlbums.items.length > 0;
                                return !!(
                                    t.isLatestGenreAlbumsAvailable &&
                                    ((null == (c = e.latestGenreAlbums)
                                        ? void 0
                                        : c.isNeededToLoad) ||
                                        (null == (b = e.latestGenreAlbums)
                                            ? void 0
                                            : b.isLoading) ||
                                        a)
                                );
                            },
                            get hasOtherArtistAlbums() {
                                var p, h;
                                let a =
                                    e.otherArtistAlbums &&
                                    e.otherArtistAlbums.items &&
                                    e.otherArtistAlbums.items.length > 0;
                                return !!(
                                    t.isOtherArtistAlbumsAvailable &&
                                    ((null == (p = e.otherArtistAlbums)
                                        ? void 0
                                        : p.isNeededToLoad) ||
                                        (null == (h = e.otherArtistAlbums)
                                            ? void 0
                                            : h.isLoading) ||
                                        a)
                                );
                            },
                            get isLoading() {
                                return (
                                    e.isNeededToLoad ||
                                    e.loadingState === r.GuX.PENDING
                                );
                            },
                            get isLatestGenreAlbumsLoading() {
                                var A, E;
                                return !!(
                                    (null == (A = e.latestGenreAlbums)
                                        ? void 0
                                        : A.isNeededToLoad) ||
                                    (null == (E = e.latestGenreAlbums)
                                        ? void 0
                                        : E.isLoading)
                                );
                            },
                            get isOtherArtistAlbumsLoading() {
                                var y, S;
                                return !!(
                                    (null == (y = e.otherArtistAlbums)
                                        ? void 0
                                        : y.isNeededToLoad) ||
                                    (null == (S = e.otherArtistAlbums)
                                        ? void 0
                                        : S.isLoading)
                                );
                            },
                            get isRelatedContentLoading() {
                                var K, C;
                                return !!(
                                    (null == (K = e.relatedContent)
                                        ? void 0
                                        : K.isNeededToLoad) ||
                                    (null == (C = e.relatedContent)
                                        ? void 0
                                        : C.isLoading)
                                );
                            },
                            get contextMeta() {
                                var I, N, T, G, L, R, F, x, _;
                                return {
                                    id: e.meta.id,
                                    title:
                                        null == (I = e.meta) ? void 0 : I.title,
                                    coverUri:
                                        null == (N = e.meta)
                                            ? void 0
                                            : N.coverUri,
                                    type:
                                        null == (T = e.meta) ? void 0 : T.type,
                                    year:
                                        null == (G = e.meta) ? void 0 : G.year,
                                    version:
                                        null == (L = e.meta)
                                            ? void 0
                                            : L.version,
                                    genre:
                                        null == (R = e.meta) ? void 0 : R.genre,
                                    likesCount:
                                        null == (F = e.meta)
                                            ? void 0
                                            : F.likesCount,
                                    averageColor:
                                        null == (x = e.meta)
                                            ? void 0
                                            : x.averageColor,
                                    available:
                                        null == (_ = e.meta)
                                            ? void 0
                                            : _.isAvailable,
                                };
                            },
                            get tracks() {
                                return e.items.filter(
                                    (e) => e.type !== f.rU.TEXT,
                                );
                            },
                            get lastEpisodes() {
                                return t.tracks.slice(0, 5);
                            },
                            get lastEpisodesTrackIds() {
                                return t.lastEpisodes.map((e) => e.id);
                            },
                            get hasLabel() {
                                return !!(e.labels && e.labels.length);
                            },
                            get shouldShowLabel() {
                                let { experiments: a } = (0, l.Zn)(e);
                                return (
                                    t.hasLabel &&
                                    a.checkExperiment(
                                        r.zal.WebNextLabelPage,
                                        "on",
                                    )
                                );
                            },
                            labelUrl(e) {
                                let { href: t } = (0, r.uvd)(
                                    "/label/:labelId",
                                    { params: { labelId: e } },
                                );
                                return t;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            makeFlatVolumeItems: (t) => {
                                let a = 0;
                                t.volumes.forEach((i) => {
                                    t.volumes.length > 1 &&
                                        i[0] &&
                                        (e.items.push(S()),
                                        e.indexItems.set(C(i[0].id), [
                                            e.items.length - 1,
                                        ])),
                                        i.forEach((t) => {
                                            e.items.push(
                                                K({
                                                    id: t.id,
                                                    loadingState: r.GuX.IDLE,
                                                    positionInContext: a,
                                                }),
                                            );
                                            let i = e.indexItems.get(
                                                String(t.id),
                                            );
                                            e.indexItems.set(
                                                I(t.id),
                                                i
                                                    ? [...i, e.items.length - 1]
                                                    : [e.items.length - 1],
                                            ),
                                                a++;
                                        });
                                });
                            },
                            updateVolumeItemsState: (t, a) => {
                                t.forEach((t) => {
                                    let i = e.indexItems.get(String(t));
                                    null == i ||
                                        i.forEach((i) => {
                                            let n = e.items[i];
                                            T(n) &&
                                                (e.items[i] = K({
                                                    id: t,
                                                    loadingState: a,
                                                    positionInContext:
                                                        n.positionInContext,
                                                    hasEverFinished:
                                                        n.hasEverFinished,
                                                }));
                                        });
                                });
                            },
                            insertDataToVolumeItems: (t) => {
                                t.forEach((t, a) => {
                                    let i = e.indexItems.get(I(t.id));
                                    null == i ||
                                        i.forEach((i) => {
                                            var n, l, s, o, d;
                                            let u = e.items[0],
                                                m = e.items[i],
                                                g = e.items[i - 1];
                                            if (!T(m)) return;
                                            let c =
                                                    T(u) && u.id === m.id
                                                        ? 1
                                                        : null ==
                                                                (s =
                                                                    t.albums) ||
                                                            null ==
                                                                (l = s[0]) ||
                                                            null ==
                                                                (n =
                                                                    l.trackPosition)
                                                          ? void 0
                                                          : n.index,
                                                b =
                                                    null == m
                                                        ? void 0
                                                        : m.positionInContext,
                                                v =
                                                    T(g) &&
                                                    (null == g
                                                        ? void 0
                                                        : g.position)
                                                        ? g.position + 1
                                                        : c,
                                                p = (0, y.vU)(t, {
                                                    hasEverFinished:
                                                        null == m
                                                            ? void 0
                                                            : m.hasEverFinished,
                                                });
                                            if (p.isRemoved) {
                                                e.items[i] = K({
                                                    id: t.id,
                                                    loadingState: r.GuX.REJECT,
                                                    positionInContext: b,
                                                    position: T(g)
                                                        ? g.position
                                                        : a,
                                                });
                                                return;
                                            }
                                            e.items[i] = K({
                                                id: t.id,
                                                loadingState: r.GuX.RESOLVE,
                                                positionInContext: b,
                                                data: p,
                                                position:
                                                    (null == g
                                                        ? void 0
                                                        : g.type) === f.rU.TEXT
                                                        ? 1
                                                        : v,
                                                isBest:
                                                    null == (d = e.meta) ||
                                                    null ==
                                                        (o = d.bestAlbumTracks)
                                                        ? void 0
                                                        : o.includes(
                                                              Number(t.id),
                                                          ),
                                                hasEverFinished:
                                                    null == m
                                                        ? void 0
                                                        : m.hasEverFinished,
                                            });
                                        });
                                    let n = e.indexItems.get(C(t.id));
                                    null == n ||
                                        n.forEach((a) => {
                                            var i, n, l;
                                            e.items[a] = S(
                                                null == (l = t.albums) ||
                                                    null == (n = l[0]) ||
                                                    null ==
                                                        (i = n.trackPosition)
                                                    ? void 0
                                                    : i.volume,
                                            );
                                        });
                                });
                            },
                            afterCreate() {
                                e.getDescriptionTexts();
                            },
                            setAlbumUnfinished: () => {
                                var a;
                                t.markUnfinished({ albumId: e.id || 0 }),
                                    null == (a = e.meta) ||
                                        a.updateFinished(!1);
                            },
                            setAllTracksUnfinished: (t) => {
                                e.allTracksUnfinished = t;
                            },
                            checkAllAlbumTrackFinished: () => {
                                var a, i;
                                e.items
                                    .filter((e) => {
                                        let { type: t, data: a } = e;
                                        return a && t !== f.rU.TEXT;
                                    })
                                    .every((e) => {
                                        var t;
                                        let { data: a } = e;
                                        return null == a ||
                                            null == (t = a.streamProgress)
                                            ? void 0
                                            : t.hasEverFinished;
                                    }) &&
                                    ((null == (a = e.meta)
                                        ? void 0
                                        : a.listeningFinished) ||
                                        (t.markFinished({
                                            albumId: Number(e.id),
                                        }),
                                        null == (i = e.meta) ||
                                            i.updateFinished(!0)));
                            },
                            markTracksFinished: (t) => {
                                let { withoutTracks: a = [] } = t;
                                e.items.forEach((e) => {
                                    if (e.type === f.rU.TEXT) return;
                                    let { data: t } = e;
                                    if (!(t && a.includes(t.id)))
                                        if (t) {
                                            var i;
                                            null == (i = t.streamProgress) ||
                                                i.updateEverFinished(!0);
                                        } else e.updateEverFinished(!0);
                                });
                            },
                            markFinished: (0, l.L3)(function* (t) {
                                let {
                                    streamsResource: a,
                                    modelActionsLogger: i,
                                } = (0, l._$)(e);
                                try {
                                    return yield a.markAlbumFinished(t);
                                } catch (e) {
                                    return i.error(e), m.T.ERROR;
                                }
                            }),
                            markUnfinished: (0, l.L3)(function* (t) {
                                let {
                                    streamsResource: a,
                                    modelActionsLogger: i,
                                } = (0, l._$)(e);
                                try {
                                    return yield a.markAlbumUnfinished(t);
                                } catch (e) {
                                    return i.error(e), m.T.ERROR;
                                }
                            }),
                            setListeningFinishedStatus: (0, l.L3)(function* () {
                                var a;
                                return (
                                    null == (a = e.meta)
                                        ? void 0
                                        : a.listeningFinished
                                )
                                    ? (t.setAllTracksUnfinished(!0),
                                      yield t.markUnfinished({
                                          albumId: Number(e.id),
                                      }))
                                    : yield t.markFinished({
                                          albumId: Number(e.id),
                                      });
                            }),
                            getLatestGenreAlbums: (0, l.L3)(function* (t) {
                                let { topResource: a, modelActionsLogger: i } =
                                    (0, l._$)(e);
                                if (
                                    e.latestGenreAlbums &&
                                    !e.latestGenreAlbums.isLoading
                                )
                                    try {
                                        e.latestGenreAlbums.loadingState =
                                            r.GuX.PENDING;
                                        let i = yield a.getTopByGenre(t);
                                        (e.latestGenreAlbums.items = (0, l.wg)(
                                            i.albums.map(h.pp),
                                        )),
                                            (e.latestGenreAlbums.loadingState =
                                                r.GuX.RESOLVE);
                                    } catch (t) {
                                        i.error(t),
                                            (e.latestGenreAlbums.loadingState =
                                                r.GuX.REJECT);
                                    }
                            }),
                            getOtherArtistAlbums: (0, l.L3)(function* (t, a) {
                                let {
                                    artistsResource: i,
                                    modelActionsLogger: n,
                                } = (0, l._$)(e);
                                if (
                                    e.otherArtistAlbums &&
                                    !e.otherArtistAlbums.isLoading
                                )
                                    try {
                                        if (!t.artistId) {
                                            e.otherArtistAlbums.loadingState =
                                                r.GuX.REJECT;
                                            return;
                                        }
                                        e.otherArtistAlbums.loadingState =
                                            r.GuX.PENDING;
                                        let n = yield i.getSafeDirectAlbums({
                                            ...t,
                                            artistId: t.artistId,
                                        });
                                        (e.otherArtistAlbums.items = (0, l.wg)(
                                            n.albums
                                                .filter(
                                                    (e) =>
                                                        String(e.id) !==
                                                        String(a),
                                                )
                                                .map(h.pp),
                                        )),
                                            (e.otherArtistAlbums.loadingState =
                                                r.GuX.RESOLVE);
                                    } catch (t) {
                                        n.error(t),
                                            (e.otherArtistAlbums.loadingState =
                                                r.GuX.REJECT);
                                    }
                            }),
                            getTracks: (0, l.L3)(function* (a) {
                                let { trackIds: i } = a,
                                    {
                                        tracksResource: n,
                                        modelActionsLogger: s,
                                    } = (0, l._$)(e);
                                try {
                                    var o;
                                    let a;
                                    if (!(null == (o = e.meta) ? void 0 : o.id))
                                        return;
                                    t.updateVolumeItemsState(i, r.GuX.PENDING);
                                    let l = yield n.getTracksMeta({
                                        trackIds:
                                            ((a = e.meta.id),
                                            i.map((e) =>
                                                "".concat(e, ":").concat(a),
                                            )),
                                        withProgress: !0,
                                    });
                                    t.insertDataToVolumeItems(l);
                                } catch (e) {
                                    s.error(e),
                                        t.updateVolumeItemsState(
                                            i,
                                            r.GuX.REJECT,
                                        );
                                }
                            }),
                            getDonations: (0, l.L3)(function* (t) {
                                let { albumId: a } = t,
                                    { experiments: i } = (0, l.Zn)(e),
                                    {
                                        donationResource: n,
                                        modelActionsLogger: s,
                                    } = (0, l._$)(e);
                                if (
                                    i.checkExperiment(
                                        r.zal.WebNextAlbumDonationButton,
                                        "on",
                                    ) &&
                                    e.donations &&
                                    !e.donations.isLoading
                                )
                                    try {
                                        e.donations.loadingState =
                                            r.GuX.PENDING;
                                        let { donations: t } =
                                            yield n.getAlbumDonations({
                                                albumId: a,
                                            });
                                        t &&
                                            (e.donations.items = (0, l.wg)(
                                                t.map((e) => {
                                                    var t;
                                                    let { data: a } = e;
                                                    return (0, A.GT)({
                                                        url: a.tipUrl,
                                                        goal:
                                                            null == (t = a.goal)
                                                                ? void 0
                                                                : t.title,
                                                        artist: a.artist,
                                                    });
                                                }),
                                            )),
                                            (e.donations.loadingState =
                                                r.GuX.RESOLVE);
                                    } catch (t) {
                                        s.error(t),
                                            (e.donations.loadingState =
                                                r.GuX.REJECT);
                                    }
                            }),
                            getData: (0, l.L3)(function* (a) {
                                let {
                                        albumId: s,
                                        resumeStream: o,
                                        preloadedAlbum: d,
                                        withLatestGenreAlbumsRequest: m = !0,
                                        withOtherArtistAlbumsRequest: v = !0,
                                        sonataState: p,
                                    } = a,
                                    {
                                        albumResource: A,
                                        modelActionsLogger: y,
                                    } = (0, l._$)(e),
                                    { disclaimer: f } = (0, l.Zn)(e);
                                if (
                                    ((e.id = s),
                                    e.loadingState !== r.GuX.PENDING)
                                )
                                    try {
                                        var S, K, C, I, N, T;
                                        let a, y;
                                        e.loadingState = r.GuX.PENDING;
                                        let G = d;
                                        if (
                                            (G ||
                                                (G =
                                                    yield A.getAlbumWithTracksIds(
                                                        {
                                                            albumId: s,
                                                            resumeStream: o,
                                                        },
                                                    )),
                                            (null == G ? void 0 : G.error) ===
                                                "not-found")
                                        ) {
                                            (e.errorStatusCode =
                                                u.X1.NOT_FOUND),
                                                (e.loadingState = r.GuX.REJECT),
                                                e.otherArtistAlbums &&
                                                    (e.otherArtistAlbums.loadingState =
                                                        r.GuX.REJECT),
                                                e.latestGenreAlbums &&
                                                    (e.latestGenreAlbums.loadingState =
                                                        r.GuX.REJECT);
                                            return;
                                        }
                                        if (
                                            null == (S = G.deprecation)
                                                ? void 0
                                                : S.targetAlbumId
                                        ) {
                                            (e.deprecationTargetAlbumId =
                                                G.deprecation.targetAlbumId),
                                                (e.loadingState =
                                                    r.GuX.RESOLVE);
                                            return;
                                        }
                                        let L = (
                                                null != (C = G.disclaimers)
                                                    ? C
                                                    : []
                                            ).includes(g.M.MODAL),
                                            R =
                                                null ==
                                                (K = (0, r.bRW)(
                                                    null != (I = G.disclaimers)
                                                        ? I
                                                        : [],
                                                    g.M.MODAL,
                                                ))
                                                    ? void 0
                                                    : K[0];
                                        L &&
                                            (yield f.getDisclaimerData({
                                                entityId: s,
                                                entityType:
                                                    G.type === c._.PODCAST
                                                        ? r.nPY.PODCAST
                                                        : r.nPY.ALBUM,
                                                disclaimerId:
                                                    null == R ? void 0 : R.id,
                                            })),
                                            p.setUnloadedEntitiesData(
                                                G.volumes
                                                    .flat()
                                                    .map((e) =>
                                                        (0, E.li)(e.id),
                                                    ),
                                            ),
                                            (e.meta = (0, h.pp)(G)),
                                            (e.labels = (0, l.wg)(G.labels)),
                                            (e.contentWarning = (0, l.wg)(
                                                G.contentWarning,
                                            )),
                                            (e.description = (0, l.wg)(
                                                G.description,
                                            )),
                                            G.duplicates &&
                                                G.duplicates.length > 0 &&
                                                (e.otherAlbumVersions = (0,
                                                l.wg)(
                                                    null == (N = G.duplicates)
                                                        ? void 0
                                                        : N.map(h.pp),
                                                )),
                                            t.makeFlatVolumeItems(G);
                                        let F = [];
                                        for (let t = 0; t < 10; t++) {
                                            let a = e.items[t];
                                            (null == a ? void 0 : a.type) ===
                                                b.S.TRACK &&
                                                F.push(String(a.id));
                                        }
                                        yield t.getTracks({ trackIds: F }),
                                            e.isLatestGenreAlbumsAvailable &&
                                                m &&
                                                (a = t.getLatestGenreAlbums({
                                                    category: i.RECENT_ALBUMS,
                                                    period: n.WEEK,
                                                    pageSize: 8,
                                                    genre: G.genre,
                                                })),
                                            e.isOtherArtistAlbumsAvailable &&
                                                v &&
                                                (y = t.getOtherArtistAlbums(
                                                    {
                                                        artistId: String(
                                                            null ==
                                                                (T =
                                                                    G
                                                                        .artists[0])
                                                                ? void 0
                                                                : T.id,
                                                        ),
                                                        limit: 8,
                                                    },
                                                    s,
                                                )),
                                            yield Promise.allSettled([a, y]),
                                            e.loadingState !== r.GuX.IDLE &&
                                                (e.loadingState =
                                                    r.GuX.RESOLVE);
                                    } catch (t) {
                                        y.error(t),
                                            t instanceof u.GX &&
                                                (e.errorStatusCode =
                                                    t.statusCode),
                                            e.loadingState !== r.GuX.IDLE &&
                                                ((e.loadingState =
                                                    r.GuX.REJECT),
                                                e.otherArtistAlbums &&
                                                    (e.otherArtistAlbums.loadingState =
                                                        r.GuX.REJECT),
                                                e.latestGenreAlbums &&
                                                    (e.latestGenreAlbums.loadingState =
                                                        r.GuX.REJECT));
                                    }
                            }),
                            loadLastEpisodes() {
                                t.getTracks({
                                    trackIds: e.lastEpisodesTrackIds,
                                });
                            },
                            getRelatedContent: (0, l.L3)(function* () {
                                let {
                                    albumResource: t,
                                    modelActionsLogger: a,
                                } = (0, l._$)(e);
                                if (
                                    e.relatedContent &&
                                    !e.relatedContent.isLoading
                                )
                                    try {
                                        var i, n;
                                        if (
                                            !(null == (i = e.meta)
                                                ? void 0
                                                : i.id)
                                        )
                                            return;
                                        e.relatedContent.loadingState =
                                            r.GuX.PENDING;
                                        let a = yield t.getRelatedContent({
                                            albumId: e.meta.id,
                                        });
                                        (e.relatedContent.items = (0, l.wg)(
                                            null == (n = a.blocks)
                                                ? void 0
                                                : n.map(N),
                                        )),
                                            (e.relatedContent.loadingState =
                                                r.GuX.RESOLVE);
                                    } catch (t) {
                                        a.error(t),
                                            (e.relatedContent.loadingState =
                                                r.GuX.REJECT);
                                    }
                            }),
                            reset(t) {
                                var a, i, n, s;
                                let { albumCPA: o } = (0, l.Zn)(e);
                                o.reset(),
                                    t.resetUnloadedEntitiesData(),
                                    (e.id = null),
                                    (e.errorStatusCode = null),
                                    (e.deprecationTargetAlbumId = null),
                                    e.indexItems.clear(),
                                    (e.loadingState = r.GuX.IDLE),
                                    (e.description = ""),
                                    (e.allTracksUnfinished = !1),
                                    null == (a = e.latestGenreAlbums) ||
                                        a.reset(),
                                    null == (i = e.otherArtistAlbums) ||
                                        i.reset(),
                                    null == (n = e.relatedContent) || n.reset(),
                                    null == (s = e.donations) || s.reset(),
                                    e.destroyItems([
                                        e.meta,
                                        e.items,
                                        e.otherAlbumVersions,
                                        e.labels,
                                    ]);
                            },
                        };
                        return t;
                    });
            a(99683);
            var _ = a(82358);
            a(47954), a(33801);
            let D = l.gK
                    .compose(
                        l.gK.model("PromoCampaign", {
                            isActive: l.gK.boolean,
                            artistId: l.gK.maybeNull(l.gK.number),
                        }),
                        s.XT,
                    )
                    .views((e) => ({
                        get isPromoCampaignActive() {
                            return e.isResolved && e.isActive;
                        },
                        get isPromoCampaignInactive() {
                            return (
                                e.isRejected || (e.isResolved && !e.isActive)
                            );
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { isActive: a, albumId: i, campaignId: n } = t,
                                { promoResource: s, modelActionsLogger: o } =
                                    (0, l._$)(e);
                            if (!e.isLoading)
                                try {
                                    if (
                                        ((e.loadingState = r.GuX.PENDING),
                                        "boolean" == typeof a)
                                    )
                                        if (n) {
                                            let t = yield s.getPromoAlbumInfo({
                                                albumId: i,
                                                campaignId: n,
                                            });
                                            (e.isActive = t.active),
                                                (e.artistId =
                                                    t.artistId || null);
                                        } else e.isActive = a;
                                    else {
                                        let t = yield s.getPromoAlbumInfo({
                                            albumId: i,
                                            campaignId: n,
                                        });
                                        (e.isActive = t.active),
                                            (e.artistId = t.artistId || null);
                                    }
                                    e.loadingState = r.GuX.RESOLVE;
                                } catch (t) {
                                    o.error(t), (e.loadingState = r.GuX.REJECT);
                                }
                        }),
                    })),
                P = x
                    .props({
                        promoCampaign: D,
                        state: E.QQ,
                        donations: l.gK.optional(G, {
                            loadingState: r.GuX.IDLE,
                        }),
                    })
                    .actions((e) => {
                        let t = {
                            getArtistDonations: (0, l.L3)(function* (t) {
                                let { artistId: a } = t,
                                    { experiments: i } = (0, l.Zn)(e),
                                    {
                                        artistsResource: n,
                                        modelActionsLogger: s,
                                    } = (0, l._$)(e);
                                if (
                                    i.checkExperiment(
                                        r.zal.WebNextAlbumDonationButton,
                                        "on",
                                    ) &&
                                    e.donations &&
                                    !e.donations.isLoading
                                )
                                    try {
                                        e.donations.loadingState =
                                            r.GuX.PENDING;
                                        let { donations: t } =
                                            yield n.getDonation({
                                                artistId: a,
                                            });
                                        t && t.length > 0
                                            ? (e.donations.items = (0, l.wg)(
                                                  t.map((e) => {
                                                      var t;
                                                      let { data: a } = e;
                                                      return (0, A.GT)({
                                                          url: a.tipUrl,
                                                          goal:
                                                              null ==
                                                              (t = a.goal)
                                                                  ? void 0
                                                                  : t.title,
                                                          artist: a.artist,
                                                      });
                                                  }),
                                              ))
                                            : (e.donations.items = (0, l.wg)(
                                                  [],
                                              )),
                                            (e.donations.loadingState =
                                                r.GuX.RESOLVE);
                                    } catch (t) {
                                        s.error(t),
                                            (e.donations.loadingState =
                                                r.GuX.REJECT);
                                    }
                            }),
                            getDataByCampaign: (0, l.L3)(function* (a) {
                                let {
                                    albumId: i,
                                    preloadedAlbum: n,
                                    preloadedCpa: r,
                                    isActive: s,
                                    campaignId: o,
                                } = a;
                                if (
                                    (yield e.promoCampaign.getData({
                                        albumId: i,
                                        isActive: s,
                                        campaignId: o,
                                    }),
                                    e.promoCampaign.isPromoCampaignActive)
                                ) {
                                    let { albumCPA: a } = (0, l.Zn)(e),
                                        s = [
                                            e.getData({
                                                albumId: i,
                                                resumeStream: !1,
                                                preloadedAlbum: n,
                                                withLatestGenreAlbumsRequest:
                                                    !1,
                                                withOtherArtistAlbumsRequest:
                                                    !1,
                                                sonataState: e.state,
                                            }),
                                            a.getCpa({
                                                albumId: i,
                                                preloadedCpa: r,
                                            }),
                                        ];
                                    if (e.promoCampaign.artistId) {
                                        let a = t.getArtistDonations({
                                            artistId: e.promoCampaign.artistId,
                                        });
                                        s.push(a);
                                    }
                                    yield Promise.allSettled(s);
                                }
                            }),
                            sendLikeFeedback: (0, l.L3)(function* (t) {
                                let {
                                    promoResource: a,
                                    modelActionsLogger: i,
                                } = (0, l._$)(e);
                                try {
                                    yield a.sendFeedback(t);
                                } catch (e) {
                                    i.error(e);
                                }
                            }),
                        };
                        return t;
                    })
                    .named("PromoLandingAlbumPage");
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
        27160: (e) => {
            e.exports = {
                root: "VirtualGrid_root__nSEzJ",
                column: "VirtualGrid_column__P8hJp",
                row: "VirtualGrid_row__PL5V_",
            };
        },
        27618: (e, t, a) => {
            "use strict";
            a.d(t, { NotFound: () => v });
            var i = a(33008),
                n = a(85896),
                l = a(97531),
                r = a(96560),
                s = a(44189),
                o = a(78016),
                d = a(77868),
                u = a(79169),
                m = a(18740),
                g = a(66268),
                c = a(26271),
                b = a.n(c);
            let v = (0, l.PA)((e) => {
                let {
                        className: t,
                        title: a,
                        description: l,
                        iconVariant: c = "musicLogo",
                        iconClassName: v,
                        iconSize: p,
                    } = e,
                    { contentRef: h } = (0, u.gKY)(),
                    A = (0, u.ZpR)(u.Zyd.main.href);
                (0, u.LZB)();
                let { handleNavigateToMain: E } = (0, u.D5F)(A);
                return (
                    (0, u.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, u.Pjs)();
                        (0, g.useEffect)(
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
                        className: (0, n.$)(
                            b().root,
                            { [b().root_desktop]: !h },
                            t,
                        ),
                        children: [
                            (0, i.jsx)(m.Lh, {
                                withBackwardFallback: "/",
                                className: b().navigation,
                                withForwardControl: !1,
                            }),
                            (0, i.jsxs)("div", {
                                className: b().content,
                                children: [
                                    (0, i.jsx)(o.Icon, {
                                        className: (0, n.$)(b().icon, v),
                                        variant: c,
                                        size: p,
                                    }),
                                    (0, i.jsx)(d.Heading, {
                                        className: (0, n.$)(
                                            b().title,
                                            b().important,
                                        ),
                                        variant: "h3",
                                        size: "xs",
                                        children:
                                            a ||
                                            (0, i.jsx)(r.A, {
                                                id: "page-error.page-does-not-exist",
                                            }),
                                    }),
                                    (0, i.jsx)(d.Caption, {
                                        className: (0, n.$)(
                                            b().text,
                                            b().important,
                                        ),
                                        variant: "span",
                                        type: "text",
                                        size: "l",
                                        weight: "normal",
                                        children:
                                            l ||
                                            (0, i.jsx)(r.A, {
                                                id: "page-error.page-does-not-exist-description",
                                            }),
                                    }),
                                    (0, i.jsx)(s.Button, {
                                        onClick: E,
                                        className: b().button,
                                        role: "link",
                                        color: "secondary",
                                        size: "l",
                                        radius: "xxxl",
                                        children: (0, i.jsx)(d.Caption, {
                                            type: "controls",
                                            variant: "span",
                                            size: "m",
                                            children: (0, i.jsx)(r.A, {
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
        35233: (e, t, a) => {
            "use strict";
            a.d(t, { M: () => i.NotFound });
            var i = a(27618);
        },
        59046: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 69818));
        },
        69818: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { default: () => o });
            var i = a(33008),
                n = a(17846),
                l = a(66268),
                r = a(14795),
                s = a(79169);
            let o = () => {
                let e = (0, n.useSearchParams)().get("albumId");
                return (
                    (e && (0, s.LLJ)(e)) || (0, n.notFound)(),
                    (0, i.jsx)(l.Suspense, {
                        children: (0, i.jsx)(r.l$, { albumId: e }),
                    })
                );
            };
        },
        83080: (e) => {
            e.exports = { root: "VirtualGridRow_root___UfbI" };
        },
        95227: (e, t, a) => {
            "use strict";
            a.d(t, { Q$: () => f, Ux: () => A, LW: () => m, rA: () => u });
            var i = a(84798),
                n = a(42314),
                l = a(79169),
                r = a(23949),
                s = a(66268),
                o = a(42213);
            let d = { width: 400, height: 400 },
                u = (e) => {
                    let {
                            count: t,
                            getEstimateSize: a,
                            gap: i,
                            containerRef: n,
                        } = e,
                        {
                            settings: { isMobile: u },
                        } = (0, l.Pjs)(),
                        { contentScrollRef: m } = (0, l.gKY)(),
                        g = (0, s.useRef)(new Map()),
                        c = (0, s.useRef)(void 0),
                        b = {
                            count: t,
                            gap: i,
                            estimateSize: (e) => {
                                let t = g.current.get(String(e));
                                return null != t ? t : a(e);
                            },
                            overscan: 2,
                            initialRect: d,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, a) => {
                                if (!t) return 0;
                                let i = t.getBoundingClientRect().top;
                                return e && 1
                                    ? i + window.scrollY
                                    : !e && a
                                      ? i + a.scrollTop
                                      : 0;
                            })(u, n, m),
                        },
                        v = (0, r.XW)(b),
                        p = (0, r.Te)({
                            ...b,
                            getScrollElement: () => m,
                            initialOffset: null == m ? void 0 : m.scrollTop,
                        }),
                        h = u ? v : p,
                        A = (0, o.c)(() => {
                            h.measure();
                        });
                    return (
                        (0, s.useEffect)(() => {
                            c.current ||
                                (c.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    e.forEach((e) => {
                                        let a =
                                            e.target.getAttribute("data-index");
                                        if (e.target && a) {
                                            let i = e.contentRect.height;
                                            i &&
                                                i !== g.current.get(a) &&
                                                (g.current.set(
                                                    a,
                                                    e.contentRect.height,
                                                ),
                                                (t = !0));
                                        }
                                    }),
                                        t && A();
                                }));
                        }, [A]),
                        { virtualizer: h, resizeObserver: c.current }
                    );
                },
                m = (e) => {
                    let {
                            count: t,
                            getEstimateRowSize: a,
                            rowGap: r,
                            columnGap: s,
                            minColumnWidth: o,
                            maxColumnWidth: d,
                            minColumnCount: m,
                            maxColumnCount: g,
                            containerRef: c,
                        } = e,
                        { rowCount: b, columnCount: v } = (0, l.E11)({
                            totalCount: t,
                            columnGap: null != s ? s : 0,
                            minColumnCount: m,
                            maxColumnWidth: d,
                            minColumnWidth: o,
                            maxColumnCount: g,
                            containerRef: c,
                        }),
                        { virtualizer: p, resizeObserver: h } = u({
                            count: b,
                            getEstimateSize: a,
                            gap: r,
                            containerRef: c,
                        }),
                        A = (0, i.A)(
                            Array.from({ length: t }, (e, t) => t),
                            v,
                        ),
                        E = (0, n.L)(() => {
                            var e, t;
                            if (!p.range) return null;
                            let a =
                                    null == (e = A[p.range.startIndex])
                                        ? void 0
                                        : e.at(0),
                                i =
                                    null == (t = A[p.range.endIndex])
                                        ? void 0
                                        : t.at(-1);
                            return void 0 !== a && void 0 !== i
                                ? { startIndex: a, endIndex: i }
                                : null;
                        });
                    return {
                        virtualizer: p,
                        rowResizeObserver: h,
                        indices: A,
                        columnCount: v,
                        visibleRange: E,
                    };
                };
            var g = a(33008),
                c = a(97531),
                b = a(44612),
                v = a(85896),
                p = a(83080),
                h = a.n(p);
            let A = (0, c.PA)((e) => {
                let {
                        indices: t,
                        virtualItem: a,
                        renderItemByIndex: i,
                        columnClassName: n,
                        className: l,
                        resizeObserver: r,
                        scrollMargin: o,
                    } = e,
                    d = (0, s.useRef)(null),
                    u = t[a.index],
                    m = {
                        "--virtual-grid-row-vertical-offset": "".concat(
                            a.start - o,
                            "px",
                        ),
                    };
                return (
                    (0, s.useEffect)(() => {
                        let e = d.current;
                        if (e)
                            return (
                                null == r || r.observe(e),
                                () => {
                                    null == r || r.unobserve(e);
                                }
                            );
                    }, [r]),
                    (0, g.jsx)("div", {
                        "data-index": a.index,
                        ref: d,
                        style: m,
                        className: (0, v.$)(h().root, l),
                        children:
                            null == u
                                ? void 0
                                : u.map((e) =>
                                      (0, g.jsx)(
                                          "div",
                                          { className: n, children: i(e) },
                                          "".concat(a.key, "_").concat(e),
                                      ),
                                  ),
                    })
                );
            });
            var E = a(27160),
                y = a.n(E);
            let f = (0, c.PA)((e) => {
                let {
                        count: t,
                        rowGap: a,
                        columnGap: i,
                        getEstimateRowSize: n,
                        minColumnCount: l = 2,
                        minColumnWidth: r,
                        maxColumnWidth: o,
                        maxColumnCount: d,
                        renderItemByIndex: u,
                        onChangeRange: c,
                    } = e,
                    [v, p] = (0, b.d)(),
                    {
                        virtualizer: h,
                        rowResizeObserver: E,
                        columnCount: f,
                        indices: S,
                    } = m({
                        count: t,
                        rowGap: a,
                        columnGap: i,
                        getEstimateRowSize: n,
                        minColumnCount: l,
                        minColumnWidth: r,
                        maxColumnWidth: o,
                        maxColumnCount: d,
                        containerRef: v,
                    });
                (0, s.useEffect)(() => {
                    !h.isScrolling && h.range && (null == c || c(h.range, f));
                }, [c, h.isScrolling, h.range, f]);
                let K = {
                    "--virtual-grid-height": "".concat(h.getTotalSize(), "px"),
                    "--virtual-grid-column-count": f,
                };
                return (0, g.jsx)("div", {
                    ref: p,
                    style: K,
                    className: y().root,
                    children: h
                        .getVirtualItems()
                        .map((e) =>
                            (0, g.jsx)(
                                A,
                                {
                                    className: y().row,
                                    columnClassName: y().column,
                                    virtualItem: e,
                                    resizeObserver: E,
                                    indices: S,
                                    renderItemByIndex: u,
                                    scrollMargin: h.options.scrollMargin,
                                },
                                e.key,
                            ),
                        ),
                });
            });
        },
    },
    (e) => {
        e.O(
            0,
            [
                7098, 8282, 9712, 5271, 7309, 8712, 9775, 6451, 952, 1709, 9284,
                8004, 9323, 9814, 1311, 7764, 6706, 2089, 996, 4236, 6728, 3949,
                9152, 9169, 8740, 9615, 3588, 2732, 1744, 4204, 4078, 9718,
                4760, 508, 3984, 5897, 5971, 9902, 5598, 7358,
            ],
            () => e((e.s = 59046)),
        ),
            (_N_E = e.O());
    },
]);
