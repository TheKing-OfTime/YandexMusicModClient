"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9615],
    {
        59615: (e, t, i) => {
            i.d(t, {
                JE: () => n,
                qt: () => l,
                lg: () => g,
                $B: () => u,
                ni: () => m,
                GV: () => c,
                aQ: () => f,
                YL: () => T,
                Ec: () => R,
                br: () => F,
                tP: () => B,
                XT: () => W,
                FN: () => $,
                pl: () => C,
                Fr: () => eO,
                jd: () => x,
                dA: () => eP,
                eD: () => eD,
                Ij: () => h,
            });
            var s,
                r = i(41028),
                a = i(94407);
            let n = r.gK
                    .model("BaseAdvertBanner", {
                        type: r.gK.enumeration(Object.values(a.h)),
                        noAds: r.gK.boolean,
                        hasError: r.gK.boolean,
                        isShowBanner: r.gK.boolean,
                    })
                    .views((e) => ({
                        get isVisible() {
                            if (e.noAds || e.hasError || !e.isShowBanner)
                                return !1;
                            let { advertBanners: t } = (0, r.Zn)(e);
                            if (t.hasBranding) return !1;
                            return t.isVisible(e.type);
                        },
                    }))
                    .actions((e) => ({
                        setType(t) {
                            e.type = t;
                        },
                        toggleNoAdsTrue() {
                            e.noAds = !0;
                        },
                        setIsShowBanner(t) {
                            e.isShowBanner = t;
                        },
                        toggleHasErrorTrue() {
                            e.hasError = !0;
                        },
                        reset() {
                            (e.type = a.h.EMPTY),
                                (e.noAds = !1),
                                (e.isShowBanner = !0),
                                (e.hasError = !1);
                        },
                    })),
                l = r.gK
                    .model("BaseModal", {
                        isOpened: r.gK.optional(r.gK.boolean, !1),
                    })
                    .actions((e) => ({
                        onOpenChange(t) {
                            e.isOpened = t;
                        },
                        open() {
                            e.isOpened = !0;
                        },
                        close() {
                            e.isOpened = !1;
                        },
                    })),
                o = r.gK
                    .model("BrowserInfo", {
                        hasHuaweiAppGallery: r.gK.boolean,
                        inAppBrowser: r.gK.boolean,
                        isBrowser: r.gK.boolean,
                        isMobile: r.gK.boolean,
                        isTablet: r.gK.boolean,
                        isTouch: r.gK.boolean,
                        name: r.gK.maybe(r.gK.string),
                        version: r.gK.maybe(r.gK.string),
                        OSFamily: r.gK.maybe(r.gK.string),
                    })
                    .views((e) => ({
                        get isSafari() {
                            var t;
                            return null == (t = e.name)
                                ? void 0
                                : t.toLowerCase().includes("safari");
                        },
                    })),
                g = r.gK.model("CaseForms", {
                    nominative: r.gK.optional(r.gK.string, ""),
                    genitive: r.gK.optional(r.gK.string, ""),
                    dative: r.gK.optional(r.gK.string, ""),
                    accusative: r.gK.optional(r.gK.string, ""),
                    instrumental: r.gK.optional(r.gK.string, ""),
                    prepositional: r.gK.optional(r.gK.string, ""),
                }),
                u = r.gK.model("Cover", {
                    uri: r.gK.maybe(r.gK.string),
                    color: r.gK.maybe(r.gK.string),
                    videoUrl: r.gK.maybe(r.gK.string),
                }),
                d = r.gK.model("DisclaimerDetails", {
                    text: r.gK.maybe(r.gK.string),
                    url: r.gK.maybe(r.gK.string),
                }),
                m = r.gK.model("DisclaimerData", {
                    title: r.gK.maybe(r.gK.string),
                    description: r.gK.maybe(r.gK.string),
                    details: r.gK.maybe(d),
                }),
                c = r.gK.compose(
                    r.gK.model({ id: r.gK.string, type: r.gK.string }),
                    m,
                ),
                K = ["Safari", "MobileSafari"],
                p = ["iOS", "MacOS"],
                f = r.gK
                    .model("DomainTrailerEntity", { available: r.gK.boolean })
                    .views((e) => ({
                        get isAvailable() {
                            if (!(0, r._n)(e)) return !1;
                            let { settings: t } = (0, r.Zn)(e);
                            if (
                                !(null == t ? void 0 : t.browserInfo) ||
                                ((e) => {
                                    let t = e.version
                                        ? Number(e.version.split(".")[0])
                                        : void 0;
                                    return !!(
                                        e.name &&
                                        K.includes(e.name) &&
                                        e.OSFamily &&
                                        p.includes(e.OSFamily) &&
                                        t &&
                                        t < 18
                                    );
                                })(t.browserInfo)
                            )
                                return !1;
                            return e.available;
                        },
                    }));
            var v = i(19943),
                b = i(94233),
                I = i(17154),
                y = i(4642),
                L = i(99537);
            let S = r.gK.model("Experiment", {
                    group: r.gK.maybe(r.gK.string),
                    value: r.gK.maybe(r.gK.frozen()),
                }),
                T = r.gK
                    .model("Experiments", {
                        loadingState: r.gK.enumeration(Object.values(L.G)),
                        experiments: r.gK.optional(r.gK.map(S), {}),
                        overwrittenExperiments: r.gK.optional(r.gK.map(S), {}),
                    })
                    .views((e) => {
                        let t = {
                            getOverwrittenExperiments() {
                                let {
                                        containerStorage: t,
                                        clientSafeConfig: i,
                                    } = (0, r._$)(e),
                                    s = i.get(b.yc);
                                return (0, y._)(t, s);
                            },
                            getExperiment(i) {
                                var s;
                                let r = e.experiments.get(i),
                                    a = t.getOverwrittenExperiments();
                                return a && null != (s = a[i]) ? s : r;
                            },
                            isExperimentEnabled(e) {
                                let i = t.getExperiment(e);
                                return (0, v.A)(
                                    null == i ? void 0 : i.value.enabled,
                                )
                                    ? null == i
                                        ? void 0
                                        : i.value.enabled
                                    : t.checkExperiment(
                                          e,
                                          null == i ? void 0 : i.value.value,
                                      );
                            },
                            getEnabledFlags() {
                                let i = [];
                                for (let s of new Set([
                                    ...e.overwrittenExperiments.keys(),
                                    ...e.experiments.keys(),
                                ]).keys())
                                    t.isExperimentEnabled(s) && i.push(s);
                                return i;
                            },
                            checkExperiment(t, i) {
                                let s = e.experiments.get(t),
                                    {
                                        containerStorage: a,
                                        clientSafeConfig: n,
                                    } = (0, r._$)(e),
                                    l = n.get(b.yc);
                                return (0, I.i)(
                                    {
                                        containerStorage: a,
                                        name: t,
                                        value: i,
                                        experimentDetail: s,
                                    },
                                    l,
                                );
                            },
                            isRejected: () => e.loadingState === L.G.REJECT,
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, r.L3)(function* (t) {
                            let { accountResource: i, modelActionsLogger: s } =
                                (0, r._$)(e);
                            if (e.loadingState !== L.G.PENDING)
                                try {
                                    e.loadingState = L.G.PENDING;
                                    let s = t;
                                    s || (s = yield i.experimentsDetails()),
                                        e.experiments.clear(),
                                        Object.entries(s).forEach((t) => {
                                            let [i, s] = t;
                                            e.experiments.set(i, s);
                                        }),
                                        (e.loadingState = L.G.RESOLVE);
                                } catch (t) {
                                    s.error(t), (e.loadingState = L.G.REJECT);
                                } finally {
                                    var a;
                                    Object.entries(
                                        null !=
                                            (a = e.getOverwrittenExperiments())
                                            ? a
                                            : {},
                                    ).forEach((t) => {
                                        let [i, s] = t;
                                        e.overwrittenExperiments.set(i, s);
                                    });
                                }
                        }),
                        updateOverwrittenExperiments(t, i) {
                            let { clientSafeConfig: s } = (0, r._$)(e);
                            s.get(b.yc) && e.overwrittenExperiments.set(t, i);
                        },
                        deleteOverwrittenExperiments(t) {
                            let { clientSafeConfig: i } = (0, r._$)(e);
                            i.get(b.yc) && e.overwrittenExperiments.delete(t);
                        },
                    }));
            var E = i(88063),
                O = i(6247),
                k = i(93435),
                A = i(47291),
                N = i(94678);
            let R = r.gK
                .model("ExplicitModel", {
                    contentWarning: r.gK.maybe(
                        r.gK.enumeration(Object.values(E.K)),
                    ),
                    trackType: r.gK.maybe(r.gK.enumeration(Object.values(O.S))),
                    disclaimers: r.gK.maybe(r.gK.array(r.gK.string)),
                })
                .views((e) => ({
                    get isExplicit() {
                        return e.contentWarning === E.K.EXPLICIT;
                    },
                    get explicitDisclaimer() {
                        if (!(0, r._n)(e) || !e.disclaimers) return null;
                        let t = ((e, t) => {
                            for (let s of t) {
                                let t = (0, A.b)(e, s);
                                if (t && t.length > 0) {
                                    var i;
                                    return null != (i = t[0]) ? i : null;
                                }
                            }
                            return null;
                        })(e.disclaimers, [
                            k.M.EXPLICIT_ICON,
                            k.M.AGE_18_ICON,
                            k.M.EXCLAMATION_ICON,
                        ]);
                        if (
                            (null == t ? void 0 : t.type) ===
                            k.M.EXCLAMATION_ICON
                        )
                            return N.J.EXCLAMATION;
                        if ((null == t ? void 0 : t.type) === k.M.EXPLICIT_ICON)
                            return N.J.E;
                        if ((null == t ? void 0 : t.type) === k.M.AGE_18_ICON)
                            return N.J.NUMERIC;
                        return null;
                    },
                }))
                .actions((e) => ({
                    getDescriptionTexts: (0, r.L3)(function* () {
                        if (!e.disclaimers) return null;
                        let { disclaimers: t } = (0, r.Zn)(e),
                            i =
                                (0, A.b)(e.disclaimers, k.M.DESCRIPTION_TEXT) ||
                                [],
                            s = [];
                        if (!t) return s;
                        for (let e of i) {
                            let i = yield t.getDisclaimerById(e.id);
                            i && i.title && s.push(i.title);
                        }
                        return s;
                    }),
                }));
            var P = i(71758),
                D = i(96355);
            let C = r.gK.model("ModelDestroyManager").actions(() => ({
                    destroyItems(e) {
                        e.forEach((e) => {
                            e && (0, r.Yo)(e);
                        }),
                            queueMicrotask(() => {
                                e.forEach((e) => {
                                    e && (0, r.zr)(e);
                                });
                            });
                    },
                })),
                x = r.gK.model("Pager", {
                    page: r.gK.number,
                    perPage: r.gK.number,
                    total: r.gK.number,
                });
            function h(e) {
                return r.gK
                    .compose(
                        r.gK.model("PageLoader", {
                            items: r.gK.maybeNull(
                                r.gK.array(r.gK.maybeNull(e)),
                            ),
                            requestsCount: r.gK.optional(r.gK.number, 0),
                            initialRequestLoadingState: r.gK.optional(
                                r.gK.enumeration(Object.values(L.G)),
                                L.G.IDLE,
                            ),
                            lastRejectedPagesList: r.gK.optional(
                                r.gK.array(r.gK.number),
                                [],
                            ),
                            pager: r.gK.maybeNull(x),
                            pageStates: r.gK.maybeNull(
                                r.gK.array(
                                    r.gK.enumeration(Object.values(L.G)),
                                ),
                            ),
                        }),
                        C,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var i;
                                return (
                                    null == (i = e.pageStates) ||
                                    !i[t] ||
                                    e.pageStates[t] === L.G.IDLE
                                );
                            },
                            get isSomePageResolved() {
                                var i;
                                return !!(
                                    (null == (i = e.pageStates)
                                        ? void 0
                                        : i.length) &&
                                    e.pageStates.some((e) => e === L.G.RESOLVE)
                                );
                            },
                            get isEmpty() {
                                var s;
                                return (
                                    t.isSomePageResolved &&
                                    !(null == (s = e.items) ? void 0 : s.length)
                                );
                            },
                            get isNeedToMakeInitialRequest() {
                                return (
                                    e.initialRequestLoadingState === L.G.IDLE
                                );
                            },
                            get isInitialRequestRejected() {
                                return (
                                    e.initialRequestLoadingState === L.G.REJECT
                                );
                            },
                            get rejectedPagesCount() {
                                var r;
                                if (
                                    t.isInitialRequestRejected ||
                                    !(null == (r = e.pageStates)
                                        ? void 0
                                        : r.length)
                                )
                                    return 0;
                                return e.pageStates.filter(
                                    (e) => e === L.G.REJECT,
                                ).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (i, s) => {
                                var r, a, n, l;
                                [L.G.IDLE, L.G.PENDING].includes(
                                    e.initialRequestLoadingState,
                                ) && (e.initialRequestLoadingState = s);
                                let o = Math.max(
                                    i + 1,
                                    Math.ceil(
                                        (null !=
                                        (n =
                                            null == (r = e.pager)
                                                ? void 0
                                                : r.total)
                                            ? n
                                            : 0) /
                                            (null !=
                                            (l =
                                                null == (a = e.pager)
                                                    ? void 0
                                                    : a.perPage)
                                                ? l
                                                : 1),
                                    ),
                                );
                                t.ensurePageStatesInitialized(o),
                                    e.pageStates && (e.pageStates[i] = s),
                                    s === L.G.REJECT &&
                                        t.addLastRejectedPageToList(i);
                            },
                            setItems: (i, s) => {
                                var a;
                                let {
                                    page: n,
                                    pager: l,
                                    responseStatus: o,
                                } = s;
                                if (
                                    ((e.requestsCount =
                                        (null != (a = e.requestsCount)
                                            ? a
                                            : 0) + 1),
                                    o === P.F.ERROR || !i || !l)
                                )
                                    return void t.setPageState(n, L.G.REJECT);
                                e.pager ||
                                    (e.pager = {
                                        page: l.page,
                                        perPage: l.perPage,
                                        total: l.total,
                                    }),
                                    t.setPageState(n, L.G.RESOLVE),
                                    e.items ||
                                        (e.items = (0, r.wg)(
                                            Array.from(
                                                { length: e.pager.total },
                                                () => null,
                                            ),
                                        )),
                                    e.items &&
                                        (0, D.I)({
                                            items: e.items,
                                            mappedRawItems: i,
                                            page: n,
                                            pageSize: e.pager.perPage,
                                        });
                            },
                            resetRejectedPagesState() {
                                var t, i, s;
                                for (
                                    let r = 0;
                                    r <
                                    (null !=
                                    (i =
                                        null == (t = e.pageStates)
                                            ? void 0
                                            : t.length)
                                        ? i
                                        : 0);
                                    r++
                                )
                                    (null == (s = e.pageStates)
                                        ? void 0
                                        : s[r]) === L.G.REJECT &&
                                        (e.pageStates[r] = L.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var i, s, r;
                                for (
                                    e.lastRejectedPagesList.push(t);
                                    (null !=
                                    (s =
                                        null == (i = e.lastRejectedPagesList)
                                            ? void 0
                                            : i.length)
                                        ? s
                                        : 0) > 5;

                                )
                                    null == (r = e.lastRejectedPagesList) ||
                                        r.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let i = Array.from(
                                        { length: t },
                                        () => L.G.IDLE,
                                    );
                                    e.pageStates = (0, r.wg)(i);
                                    return;
                                }
                                let i = e.pageStates.length;
                                if (t > i) {
                                    let s = Array.from(
                                        { length: t - i },
                                        () => L.G.IDLE,
                                    );
                                    e.pageStates.push(...s);
                                }
                            },
                            reset() {
                                (e.initialRequestLoadingState = L.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, r.wg)([])),
                                    e.destroyItems([
                                        e.items,
                                        e.pager,
                                        e.pageStates,
                                    ]);
                            },
                        };
                        return t;
                    });
            }
            var _ = i(60866);
            let w = (e) => (e ? { revision: e } : { allValuesRequired: !0 });
            var M = i(59549),
                q = (function (e) {
                    return (e.LIKED = "1"), (e.DISLIKED = "0"), e;
                })(q || {});
            let G = [
                    M.s.LIKED_ALBUMS,
                    M.s.LIKED_ARTISTS,
                    M.s.LIKED_PLAYLISTS,
                    M.s.LIKED_TRACKS,
                    M.s.LIKED_CLIPS,
                ],
                V = r.gK.optional(
                    r.gK.map(r.gK.enumeration(Object.values(q))),
                    {},
                ),
                j = r.gK.model("LibraryRecord", {
                    revision: r.gK.maybeNull(r.gK.number),
                    items: V,
                }),
                F = r.gK
                    .model("Library", {
                        loadingState: r.gK.enumeration(Object.values(L.G)),
                        tracks: j,
                        albums: j,
                        artists: j,
                        playlists: j,
                        clips: j,
                    })
                    .views((e) => ({
                        isTrackLiked: (t) =>
                            "1" === e.tracks.items.get(String(t)),
                        isTrackDisliked: (t) =>
                            "0" === e.tracks.items.get(String(t)),
                        isArtistLiked: (t) =>
                            "1" === e.artists.items.get(String(t)),
                        isArtistDisliked: (t) =>
                            "0" === e.artists.items.get(String(t)),
                        isAlbumLiked: (t) =>
                            "1" === e.albums.items.get(String(t)),
                        isPlaylistLiked: (t) =>
                            "1" === e.playlists.items.get(String(t)),
                        isClipLiked: (t) =>
                            "1" === e.clips.items.get(String(t)),
                    }))
                    .actions((e) => {
                        let t = {
                            getData: (0, r.L3)(function* () {
                                let i =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : G,
                                    {
                                        modelActionsLogger: s,
                                        collectionResource: a,
                                    } = (0, r._$)(e);
                                if (e.loadingState !== L.G.PENDING)
                                    try {
                                        e.loadingState = L.G.PENDING;
                                        let s = {};
                                        i.includes(M.s.LIKED_ALBUMS) &&
                                            (s.likedAlbums = w(
                                                e.albums.revision,
                                            )),
                                            i.includes(M.s.LIKED_ARTISTS) &&
                                                (s.likedArtists = w(
                                                    e.artists.revision,
                                                )),
                                            i.includes(M.s.LIKED_TRACKS) &&
                                                (s.likedTracks = w(
                                                    e.tracks.revision,
                                                )),
                                            i.includes(M.s.LIKED_CLIPS) &&
                                                (s.likedClips = w(
                                                    e.clips.revision,
                                                )),
                                            i.includes(M.s.LIKED_PLAYLISTS) &&
                                                (s.likedPlaylists = {});
                                        let r = yield a.sync(s);
                                        t.setAlbums(r.values.likedAlbums),
                                            t.setArtists(r.values.likedArtists),
                                            t.setPlaylists(
                                                r.values.likedPlaylists,
                                            ),
                                            t.setTracks(r.values.likedTracks),
                                            t.setClips(r.values.likedClips),
                                            (e.loadingState = L.G.RESOLVE);
                                    } catch (t) {
                                        s.error(t),
                                            (e.loadingState = L.G.REJECT);
                                    }
                            }),
                            setArtists: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    e.artists.revision !== i.info.revision &&
                                    (t.clearArtists(),
                                    (e.artists.revision = i.info.revision),
                                    i.values.liked.map((t) => {
                                        e.artists.items.set(
                                            t.artistId.toString(),
                                            "1",
                                        );
                                    }),
                                    i.values.disliked.map((t) => {
                                        e.artists.items.set(
                                            t.artistId.toString(),
                                            "0",
                                        );
                                    }));
                            },
                            setAlbums: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    e.albums.revision !== i.info.revision &&
                                    (t.clearAlbums(),
                                    (e.albums.revision = i.info.revision),
                                    i.values.liked.map((t) => {
                                        e.albums.items.set(
                                            t.albumId.toString(),
                                            "1",
                                        );
                                    }));
                            },
                            setPlaylists: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    (t.clearPlaylists(),
                                    i.values.liked.map((t) => {
                                        e.playlists.items.set(
                                            ""
                                                .concat(
                                                    t.compositeData.uid,
                                                    ":",
                                                )
                                                .concat(t.compositeData.kind),
                                            "1",
                                        );
                                    }));
                            },
                            setTracks: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    e.tracks.revision !== i.info.revision &&
                                    (t.clearTracks(),
                                    (e.tracks.revision = i.info.revision),
                                    i.values.liked.map((t) => {
                                        e.tracks.items.set(t.trackId, "1");
                                    }),
                                    i.values.disliked.map((t) => {
                                        e.tracks.items.set(t.trackId, "0");
                                    }));
                            },
                            setClips: (i) => {
                                (null == i ? void 0 : i.values) &&
                                    e.clips.revision !== i.info.revision &&
                                    (t.clearArtists(),
                                    (e.clips.revision = i.info.revision),
                                    i.values.liked.map((t) => {
                                        e.clips.items.set(
                                            t.clipId.toString(),
                                            "1",
                                        );
                                    }));
                            },
                            clearArtists: () => {
                                (e.artists.revision = null),
                                    e.artists.items.clear();
                            },
                            clearAlbums: () => {
                                (e.albums.revision = null),
                                    e.albums.items.clear();
                            },
                            clearPlaylists: () => {
                                (e.playlists.revision = null),
                                    e.playlists.items.clear();
                            },
                            clearTracks: () => {
                                (e.tracks.revision = null),
                                    e.tracks.items.clear();
                            },
                            clearClips: () => {
                                (e.clips.revision = null),
                                    e.clips.items.clear();
                            },
                            toggleTrackLike: (0, r.L3)(function* (i) {
                                let {
                                        usersResource: s,
                                        modelActionsLogger: a,
                                    } = (0, r._$)(e),
                                    n = String(i.entityId),
                                    l = e.tracks.items.get(n);
                                try {
                                    let r,
                                        a = {
                                            entityId: i.albumId
                                                ? ""
                                                      .concat(i.entityId, ":")
                                                      .concat(i.albumId)
                                                : i.entityId,
                                            userId: i.userId,
                                        };
                                    return (
                                        "1" === e.tracks.items.get(n)
                                            ? (e.tracks.items.delete(n),
                                              (r = yield s.unlikeTrack(a)))
                                            : (e.tracks.items.set(n, "1"),
                                              (r = yield s.likeTrack(a))),
                                        t.getData([M.s.LIKED_TRACKS]),
                                        r
                                    );
                                } catch (t) {
                                    return (
                                        l
                                            ? e.tracks.items.set(n, l)
                                            : e.tracks.items.delete(n),
                                        a.error(t),
                                        _.f.ERROR
                                    );
                                }
                            }),
                            toggleTrackDislike: (0, r.L3)(function* (i) {
                                let {
                                        usersResource: s,
                                        modelActionsLogger: a,
                                    } = (0, r._$)(e),
                                    n = String(i.entityId),
                                    l = e.tracks.items.get(n);
                                try {
                                    let r,
                                        a = {
                                            entityId: i.albumId
                                                ? ""
                                                      .concat(i.entityId, ":")
                                                      .concat(i.albumId)
                                                : i.entityId,
                                            userId: i.userId,
                                        };
                                    return (
                                        "0" === e.tracks.items.get(n)
                                            ? (e.tracks.items.delete(n),
                                              (r = yield s.undislikeTrack(a)))
                                            : (e.tracks.items.set(n, "0"),
                                              (r = yield s.dislikeTrack(a))),
                                        t.getData([M.s.LIKED_TRACKS]),
                                        r
                                    );
                                } catch (t) {
                                    return (
                                        l
                                            ? e.tracks.items.set(n, l)
                                            : e.tracks.items.delete(n),
                                        a.error(t),
                                        _.f.ERROR
                                    );
                                }
                            }),
                            toggleArtistLike: (0, r.L3)(function* (i) {
                                let {
                                        usersResource: s,
                                        modelActionsLogger: a,
                                    } = (0, r._$)(e),
                                    n = String(i.entityId),
                                    l = e.artists.items.get(n);
                                try {
                                    let r;
                                    return (
                                        "1" === e.artists.items.get(n)
                                            ? (e.artists.items.delete(n),
                                              (r = yield s.unlikeArtist(i)))
                                            : (e.artists.items.set(n, "1"),
                                              (r = yield s.likeArtist(i))),
                                        t.getData([M.s.LIKED_ARTISTS]),
                                        r
                                    );
                                } catch (t) {
                                    return (
                                        l
                                            ? e.artists.items.set(n, l)
                                            : e.artists.items.delete(n),
                                        a.error(t),
                                        _.f.ERROR
                                    );
                                }
                            }),
                            toggleArtistDislike: (0, r.L3)(function* (i) {
                                let {
                                        usersResource: s,
                                        modelActionsLogger: a,
                                    } = (0, r._$)(e),
                                    n = String(i.entityId),
                                    l = e.artists.items.get(n);
                                try {
                                    let r;
                                    return (
                                        "0" === e.artists.items.get(n)
                                            ? (e.artists.items.delete(n),
                                              (r = yield s.undislikeArtist(i)))
                                            : (e.artists.items.set(n, "0"),
                                              (r = yield s.dislikeArtist(i))),
                                        t.getData([M.s.LIKED_ARTISTS]),
                                        r
                                    );
                                } catch (t) {
                                    return (
                                        l
                                            ? e.artists.items.set(n, l)
                                            : e.artists.items.delete(n),
                                        a.error(t),
                                        _.f.ERROR
                                    );
                                }
                            }),
                            toggleAlbumLike: (0, r.L3)(function* (i) {
                                let {
                                        usersResource: s,
                                        modelActionsLogger: a,
                                    } = (0, r._$)(e),
                                    n = String(i.entityId),
                                    l = e.albums.items.get(n);
                                try {
                                    let r;
                                    return (
                                        "1" === e.albums.items.get(n)
                                            ? (e.albums.items.delete(n),
                                              (r = yield s.unlikeAlbum(i)))
                                            : (e.albums.items.set(n, "1"),
                                              (r = yield s.likeAlbum(i))),
                                        t.getData([M.s.LIKED_ALBUMS]),
                                        r
                                    );
                                } catch (t) {
                                    return (
                                        l
                                            ? e.albums.items.set(n, l)
                                            : e.albums.items.delete(n),
                                        a.error(t),
                                        _.f.ERROR
                                    );
                                }
                            }),
                            togglePlaylistLike: (0, r.L3)(function* (i) {
                                let {
                                        usersResource: s,
                                        modelActionsLogger: a,
                                    } = (0, r._$)(e),
                                    n = String(i.entityId),
                                    l = e.playlists.items.get(n);
                                try {
                                    let r;
                                    return (
                                        "1" === e.playlists.items.get(n)
                                            ? (e.playlists.items.delete(n),
                                              (r = yield s.unlikePlaylist(i)))
                                            : (e.playlists.items.set(n, "1"),
                                              (r = yield s.likePlaylist(i))),
                                        t.getData([M.s.LIKED_PLAYLISTS]),
                                        r
                                    );
                                } catch (t) {
                                    return (
                                        l
                                            ? e.playlists.items.set(n, l)
                                            : e.playlists.items.delete(n),
                                        a.error(t),
                                        _.f.ERROR
                                    );
                                }
                            }),
                            toggleClipLike: (0, r.L3)(function* (i) {
                                let {
                                        usersResource: s,
                                        modelActionsLogger: a,
                                    } = (0, r._$)(e),
                                    n = String(i.entityId),
                                    l = e.clips.items.get(n);
                                try {
                                    return (
                                        "1" === e.clips.items.get(n)
                                            ? (e.clips.items.delete(n),
                                              yield s.unlikeClip(i))
                                            : (e.clips.items.set(n, "1"),
                                              yield s.likeClip(i)),
                                        t.getData([M.s.LIKED_CLIPS]),
                                        _.f.OK
                                    );
                                } catch (t) {
                                    return (
                                        l
                                            ? e.clips.items.set(n, l)
                                            : e.clips.items.delete(n),
                                        a.error(t),
                                        _.f.ERROR
                                    );
                                }
                            }),
                        };
                        return t;
                    }),
                B = r.gK
                    .model("LikesCount", {
                        likesCount: r.gK.maybe(r.gK.number),
                        pendingLikesCount: r.gK.optional(r.gK.number, 0),
                    })
                    .views((e) => ({
                        get actualLikesCount() {
                            if ("number" == typeof e.likesCount) {
                                var t;
                                return (
                                    e.likesCount +
                                    (null != (t = e.pendingLikesCount) ? t : 0)
                                );
                            }
                            return 0;
                        },
                    }))
                    .actions((e) => ({
                        likePending() {
                            e.pendingLikesCount += 1;
                        },
                        unlikePending() {
                            e.pendingLikesCount -= 1;
                        },
                    })),
                W = r.gK
                    .model("LoadingState", {
                        loadingState: r.gK.enumeration(Object.values(L.G)),
                    })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.loadingState === L.G.IDLE;
                        },
                        get isLoading() {
                            return e.loadingState === L.G.PENDING;
                        },
                        get isResolved() {
                            return e.loadingState === L.G.RESOLVE;
                        },
                        get isRejected() {
                            return e.loadingState === L.G.REJECT;
                        },
                    })),
                $ = r.gK
                    .model("Location", {
                        pathname: r.gK.optional(r.gK.string, ""),
                        searchParams: r.gK.optional(r.gK.string, ""),
                        host: r.gK.optional(r.gK.string, ""),
                        tld: r.gK.optional(r.gK.string, ""),
                        origin: r.gK.optional(r.gK.string, ""),
                        href: r.gK.optional(r.gK.string, ""),
                        isNotFound: r.gK.optional(r.gK.boolean, !1),
                    })
                    .actions((e) => ({
                        setPathname(t) {
                            e.pathname = t;
                        },
                        setSearchParams(t) {
                            e.searchParams = t;
                        },
                        setHost(t) {
                            e.host = t;
                        },
                        setTld(t) {
                            e.tld = t;
                        },
                        setOrigin(t) {
                            e.origin = t;
                        },
                        setHref(t) {
                            e.href = t;
                        },
                        setNotFound(t) {
                            e.isNotFound = t;
                        },
                    }));
            var U = i(54960),
                J = i(2044),
                X = i(51218);
            let z = {
                    INTRO_PLAN: X.N.IntroPlan,
                    INTRO_UNTIL_PLAN: X.N.IntroUntilPlan,
                    TRIAL_PLAN: X.N.TrialPlan,
                    TRIAL_UNTIL_PLAN: X.N.TrialUntilPlan,
                },
                H = (e) => {
                    let { repetitionCount: t, typename: i, ...s } = e;
                    return {
                        ...(Number.isFinite(t) ? { repeatCount: t } : {}),
                        ...s,
                        typename: z[i] || i,
                    };
                };
            var Y = i(97581);
            let Z = (e) => (0, r.wg)(e),
                Q = (e) => {
                    let { plans: t, ...i } = e;
                    return (0, r.wg)({ ...i, plans: t.map(Z) });
                },
                ee = (e) => {
                    let { option: t, ...i } = e;
                    return (0, r.wg)({ ...Q(i), option: t });
                },
                et = (e) => {
                    let {
                        positionId: t,
                        silentInvoiceAvailable: i,
                        structureType: s,
                        tariffOffer: a,
                        optionOffers: n,
                    } = e;
                    return (0, r.wg)({
                        positionId: t,
                        silentInvoiceAvailable: i,
                        structureType: s,
                        tariffOffer: ((e) => {
                            if (!e) return null;
                            let { tariff: t, ...i } = e;
                            return (0, r.wg)({ ...Q(i), tariff: t });
                        })(a),
                        optionsOffers: n.map(ee),
                    });
                },
                ei = (e) => (0, r.wg)({ offer: et(e) }),
                es = (e) =>
                    (0, r.wg)({
                        acqOffer: ((e) => {
                            let {
                                analyticData: t,
                                catalogCompositeOffer: i,
                                offerTexts: s,
                                target: a,
                                requestedFeatures: n,
                                position: l,
                                oneClickAvailable: o,
                                place: g,
                                purchaseToken: u,
                            } = e;
                            return (0, r.wg)({
                                analyticData: t,
                                catalogCompositeOffer: et(
                                    ((e) => {
                                        var t;
                                        let {
                                            tariffOffer: i,
                                            optionOffers: s,
                                        } = e;
                                        return {
                                            ...e,
                                            silentInvoiceAvailable:
                                                !!e.silentInvoiceAvailable,
                                            structureType: e.structureType,
                                            tariffOffer: i
                                                ? {
                                                      ...i,
                                                      offerVendorType:
                                                          i.offerVendorType,
                                                      plans:
                                                          null == (t = i.plans)
                                                              ? void 0
                                                              : t.map(H),
                                                  }
                                                : void 0,
                                            optionOffers:
                                                null == s
                                                    ? void 0
                                                    : s.map((e) => ({
                                                          ...e,
                                                          plans: (
                                                              e.plans || []
                                                          ).map(H),
                                                      })),
                                        };
                                    })(i),
                                ),
                                offerTexts: ((e) => {
                                    let { customTexts: t = {}, ...i } = e;
                                    return {
                                        ...i,
                                        customTexts: Object.entries(t).reduce(
                                            (e, t) => {
                                                let [i, s] = t;
                                                return (e[(0, Y.A)(i)] = s), e;
                                            },
                                            {},
                                        ),
                                    };
                                })(s),
                                target: a,
                                requestedFeatures: n,
                                position: l,
                                oneClickAvailable: o,
                                place: g,
                                purchaseToken: u,
                            });
                        })(e),
                    });
            var er = i(32904);
            let ea = r.gK.model({
                    batchId: r.gK.string,
                    positionId: r.gK.string,
                    placeId: r.gK.maybe(r.gK.string),
                }),
                en = r.gK.model({
                    buttonText: r.gK.maybe(r.gK.string),
                    buttonAdditionalText: r.gK.maybe(r.gK.string),
                    buttonTextA11y: r.gK.maybe(r.gK.string),
                    oneClickDisclaimerText: r.gK.maybe(r.gK.string),
                    oneClickDisclaimerTextA11y: r.gK.maybe(r.gK.string),
                }),
                el = r.gK.model({
                    subscriptionName: r.gK.string,
                    buttonText: r.gK.string,
                    buttonTextWithDetails: r.gK.string,
                    combinedIntroductoryText: r.gK.string,
                    combinedPriceText: r.gK.string,
                    combinedFullOfferText: r.gK.string,
                    priceInMonth: r.gK.string,
                    customTexts: en,
                });
            !(function (e) {
                (e.COMPOSITE = "COMPOSITE"),
                    (e.OPTION = "OPTION"),
                    (e.TARIFF = "TARIFF");
            })(s || (s = {}));
            let eo = r.gK.model({ amount: r.gK.number, currency: r.gK.string }),
                eg = r.gK.model({
                    typename: r.gK.literal(X.N.IntroPlan),
                    period: r.gK.string,
                    price: eo,
                    repeatCount: r.gK.maybe(r.gK.number),
                }),
                eu = r.gK.model({
                    typename: r.gK.literal(X.N.IntroUntilPlan),
                    price: eo,
                    until: r.gK.string,
                }),
                ed = r.gK.model({
                    typename: r.gK.literal(X.N.TrialPlan),
                    period: r.gK.string,
                }),
                em = r.gK.model({
                    typename: r.gK.literal(X.N.TrialUntilPlan),
                    until: r.gK.string,
                }),
                ec = r.gK.union(eg, eu, ed, em),
                eK = r.gK.model({ name: r.gK.string }),
                ep = r.gK.model({
                    additionText: r.gK.string,
                    description: r.gK.string,
                    name: r.gK.string,
                    text: r.gK.string,
                    title: r.gK.string,
                    plans: r.gK.array(ec),
                    commonPeriod: r.gK.string,
                    commonPrice: eo,
                }),
                ef = ep.props({ option: eK }),
                ev = ep.props({ tariff: eK }),
                eb = r.gK.model({
                    positionId: r.gK.string,
                    silentInvoiceAvailable: r.gK.boolean,
                    structureType: r.gK.enumeration(Object.values(s)),
                    tariffOffer: r.gK.maybeNull(ev),
                    optionsOffers: r.gK.array(ef),
                }),
                eI = r.gK.model({
                    analyticData: ea,
                    catalogCompositeOffer: eb,
                    offerTexts: el,
                    target: r.gK.string,
                    requestedFeatures: r.gK.maybe(r.gK.array(r.gK.string)),
                    position: r.gK.number,
                    oneClickAvailable: r.gK.maybe(r.gK.boolean),
                    place: r.gK.maybe(r.gK.string),
                    purchaseToken: r.gK.maybe(r.gK.string),
                }),
                ey = r.gK
                    .model({
                        offer: r.gK.maybeNull(eb),
                        acqOffer: r.gK.maybeNull(eI),
                    })
                    .views((e) => {
                        let t = {
                            get target() {
                                var i;
                                return (
                                    (null == (i = e.acqOffer)
                                        ? void 0
                                        : i.target) || "music"
                                );
                            },
                            get offerPosition() {
                                var s, r;
                                return null !=
                                    (r =
                                        null == (s = e.acqOffer)
                                            ? void 0
                                            : s.position)
                                    ? r
                                    : 0;
                            },
                            get place() {
                                var a;
                                return null == (a = e.acqOffer)
                                    ? void 0
                                    : a.place;
                            },
                            get catalogCompositeOffer() {
                                var n;
                                return (
                                    (null == (n = e.acqOffer)
                                        ? void 0
                                        : n.catalogCompositeOffer) || e.offer
                                );
                            },
                            get offersPositionId() {
                                var l, o;
                                return (
                                    (null == (l = e.acqOffer)
                                        ? void 0
                                        : l.analyticData.positionId) ||
                                    (null == (o = t.catalogCompositeOffer)
                                        ? void 0
                                        : o.positionId) ||
                                    ""
                                );
                            },
                            get tariffOffer() {
                                var g;
                                return null == (g = t.catalogCompositeOffer)
                                    ? void 0
                                    : g.tariffOffer;
                            },
                            get customTexts() {
                                var u, d;
                                return null == (d = e.acqOffer) ||
                                    null == (u = d.offerTexts)
                                    ? void 0
                                    : u.customTexts;
                            },
                            get oneClickAvailable() {
                                var m, c;
                                return !!(
                                    (null == (m = e.acqOffer)
                                        ? void 0
                                        : m.oneClickAvailable) &&
                                    (null == (c = t.oneClickDisclaimerText)
                                        ? void 0
                                        : c.trim())
                                );
                            },
                            get oneClickDisclaimerText() {
                                var K;
                                return null == (K = t.customTexts)
                                    ? void 0
                                    : K.oneClickDisclaimerText;
                            },
                            get oneClickDisclaimerTextA11y() {
                                var p;
                                return null == (p = t.customTexts)
                                    ? void 0
                                    : p.oneClickDisclaimerTextA11y;
                            },
                            get mainText() {
                                var f, v;
                                return (
                                    (null == (f = t.customTexts)
                                        ? void 0
                                        : f.buttonText) ||
                                    (null == (v = t.tariffOffer)
                                        ? void 0
                                        : v.text)
                                );
                            },
                            get mainTextA11y() {
                                var b;
                                return null == (b = t.customTexts)
                                    ? void 0
                                    : b.buttonTextA11y;
                            },
                            get additionText() {
                                var I, y;
                                return (
                                    (null == (I = t.customTexts)
                                        ? void 0
                                        : I.buttonAdditionalText) ||
                                    (null == (y = t.tariffOffer)
                                        ? void 0
                                        : y.additionText)
                                );
                            },
                            get offersBatchId() {
                                var L, S;
                                return (
                                    (null == (L = e.acqOffer)
                                        ? void 0
                                        : L.analyticData.batchId) ||
                                    (null == (S = e.offer)
                                        ? void 0
                                        : S.positionId) ||
                                    ""
                                );
                            },
                        };
                        return t;
                    }),
                eL = r.gK.model({
                    sessionId: r.gK.maybeNull(r.gK.string),
                    page: r.gK.maybeNull(r.gK.string),
                    offers: r.gK.array(ey),
                    mlRequestId: r.gK.maybeNull(r.gK.string),
                    offerConfigId: r.gK.maybeNull(r.gK.number),
                    language: r.gK.maybeNull(r.gK.string),
                }),
                eS = r.gK.compose(
                    eL,
                    W,
                    r.gK.model({ isLoadOffersResultSent: r.gK.boolean }),
                ),
                eT = r.gK.model({
                    eventSessionId: r.gK.string,
                    batchPositionId: r.gK.string,
                    offers: r.gK.array(ey),
                }),
                eE = r.gK
                    .compose(
                        r.gK.model({
                            isWebNextPlusAcqToolkitOn: r.gK.maybe(r.gK.boolean),
                            isLoadOffersResultSent: r.gK.maybe(r.gK.boolean),
                            data: r.gK.maybeNull(eT),
                            acqData: r.gK.map(eS),
                            customTarget: r.gK.maybe(r.gK.string),
                        }),
                        W,
                    )
                    .volatile(() => ({
                        sessionId: (0, U.A)(),
                        isFrontSessionStartSent: !1,
                    }))
                    .views((e) => {
                        let t = {
                            getIsShimmerVisible(t) {
                                let i =
                                    e.isWebNextPlusAcqToolkitOn &&
                                    t &&
                                    e.acqData.get(t);
                                return i
                                    ? i.isNeededToLoad ||
                                          i.isLoading ||
                                          i.isRejected
                                    : e.isNeededToLoad ||
                                          e.isLoading ||
                                          e.isRejected;
                            },
                            getIsShimmerActive(t) {
                                let i =
                                    e.isWebNextPlusAcqToolkitOn &&
                                    t &&
                                    e.acqData.get(t);
                                return i ? i.isLoading : e.isLoading;
                            },
                            getIsNeededToLoad(t) {
                                let i =
                                    e.isWebNextPlusAcqToolkitOn &&
                                    t &&
                                    e.acqData.get(t);
                                return i ? i.isNeededToLoad : e.isNeededToLoad;
                            },
                            getIsLoadOffersResultSent(t) {
                                let i =
                                    e.isWebNextPlusAcqToolkitOn &&
                                    t &&
                                    e.acqData.get(t);
                                return i
                                    ? i.isLoadOffersResultSent
                                    : e.isLoadOffersResultSent;
                            },
                            getLoadingState(t) {
                                let i =
                                    e.isWebNextPlusAcqToolkitOn &&
                                    t &&
                                    e.acqData.get(t);
                                return i ? i.loadingState : e.loadingState;
                            },
                            get serviceSessionId() {
                                return e.sessionId;
                            },
                            getOffersPositionIds(t) {
                                var i, s, r, a, n;
                                return (
                                    (e.isWebNextPlusAcqToolkitOn &&
                                        t &&
                                        (null == (r = e.acqData) ||
                                        null == (s = r.get(t)) ||
                                        null == (i = s.offers)
                                            ? void 0
                                            : i.map(
                                                  (e) => e.offersPositionId,
                                              ))) ||
                                    (null == (n = e.data) ||
                                    null == (a = n.offers)
                                        ? void 0
                                        : a.map((e) => e.offersPositionId)) ||
                                    []
                                );
                            },
                            getOffer(t, i) {
                                var s, r;
                                let a =
                                    e.isWebNextPlusAcqToolkitOn &&
                                    (null == (s = e.acqData)
                                        ? void 0
                                        : s.get(t));
                                return a
                                    ? i
                                        ? a.offers.find((e) => e.place === i)
                                        : a.offers[0]
                                    : null == (r = e.data)
                                      ? void 0
                                      : r.offers[0];
                            },
                            getTarget(i, s) {
                                var r;
                                return (
                                    (e.isWebNextPlusAcqToolkitOn &&
                                        (null == (r = t.getOffer(i, s))
                                            ? void 0
                                            : r.target)) ||
                                    e.customTarget ||
                                    "music"
                                );
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            toggleIsFrontSessionStartSentTrue() {
                                e.isFrontSessionStartSent = !0;
                            },
                            toggleIsLoadOffersResultSentTrue() {
                                let i =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : J.l.NO_VALUE;
                                e.isWebNextPlusAcqToolkitOn
                                    ? t.setAcqData(i, {
                                          isLoadOffersResultSent: !0,
                                      })
                                    : (e.isLoadOffersResultSent = !0);
                            },
                            setCustomTarget(t) {
                                e.customTarget = t;
                            },
                            setLoadingState(i) {
                                let s =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : J.l.NO_VALUE;
                                e.isWebNextPlusAcqToolkitOn
                                    ? t.setAcqData(s, {
                                          ...e.acqData.get(s),
                                          loadingState: i,
                                      })
                                    : (e.loadingState = i);
                            },
                            setAcqData(t, i) {
                                var s;
                                e.acqData.set(t, {
                                    loadingState: L.G.IDLE,
                                    isLoadOffersResultSent: !1,
                                    ...(null != (s = e.acqData.get(t))
                                        ? s
                                        : {}),
                                    ...i,
                                });
                            },
                            getData: (0, r.L3)(function* (i) {
                                let s,
                                    {
                                        uid: a,
                                        page: n,
                                        places: l,
                                        communicationId: o,
                                        campaignId: g,
                                        customTarget: u,
                                        widgetServiceName: d,
                                    } = i,
                                    {
                                        acqOffers: m,
                                        offersResource: c,
                                        modelActionsLogger: K,
                                    } = (0, r._$)(e),
                                    { experiments: p } = (0, r.Zn)(e),
                                    f = p.getEnabledFlags(),
                                    v = p.checkExperiment(
                                        er.z.WebNextPlusAcqToolkit,
                                        "on",
                                    ),
                                    b = v ? n || J.l.NO_VALUE : void 0;
                                if (
                                    ((e.isWebNextPlusAcqToolkitOn = v),
                                    e.getLoadingState(n) !== L.G.PENDING)
                                ) {
                                    e.isLoadOffersResultSent = !1;
                                    try {
                                        if (
                                            (t.setLoadingState(L.G.PENDING, b),
                                            v)
                                        ) {
                                            let i = {};
                                            o && (i.communication_id = o),
                                                g && (i.campaign_id = g),
                                                (s = yield m.getOffers(b, l, {
                                                    expFlags: f,
                                                    eventSessionId: e.sessionId,
                                                    customProperties: i,
                                                    widgetServiceName: d,
                                                })),
                                                t.setAcqData(
                                                    b || J.l.NO_VALUE,
                                                    {
                                                        ...((e) => {
                                                            let {
                                                                sessionId: t,
                                                                result: i,
                                                                offerConfigId:
                                                                    s,
                                                                mlRequestId: a,
                                                                page: n,
                                                                language: l,
                                                            } = e;
                                                            return (0, r.wg)({
                                                                sessionId: t,
                                                                page: n,
                                                                offers: i.map(
                                                                    es,
                                                                ),
                                                                mlRequestId: a,
                                                                offerConfigId:
                                                                    s,
                                                                language: l,
                                                            });
                                                        })(s),
                                                        loadingState:
                                                            L.G.RESOLVE,
                                                        isLoadOffersResultSent:
                                                            !1,
                                                    },
                                                );
                                        } else
                                            (s = yield c.getCompositeOffers({
                                                uid: a,
                                                target: u || "music",
                                            })),
                                                (e.data = ((e) => {
                                                    let {
                                                        eventSessionId: t,
                                                        batchPositionId: i,
                                                        offers: s,
                                                    } = e;
                                                    return (0, r.wg)({
                                                        eventSessionId: t,
                                                        batchPositionId: i,
                                                        offers: s.map(ei),
                                                    });
                                                })(s)),
                                                u && t.setCustomTarget(u);
                                        t.setLoadingState(L.G.RESOLVE, b);
                                    } catch (e) {
                                        t.setLoadingState(L.G.REJECT, b),
                                            K.error(e);
                                    }
                                }
                            }),
                        };
                        return t;
                    })
                    .named("MusicOffers"),
                eO = r.gK.model("Offers", { music: eE });
            var ek = i(7149),
                eA = i(11563),
                eN = i(82995),
                eR = i(55361);
            let eP = r.gK
                    .model("Settings", {
                        layout: r.gK.maybeNull(
                            r.gK.enumeration(Object.keys(ek.u)),
                        ),
                        isLandscape: r.gK.boolean,
                        isMobileLandscapeHeight: r.gK.boolean,
                        platform: r.gK.maybe(
                            r.gK.enumeration(Object.values(eN.O)),
                        ),
                        browserInfo: o,
                        liteVersionMode: r.gK.maybe(
                            r.gK.enumeration(Object.values(eA.w)),
                        ),
                    })
                    .views((e) => {
                        let t = {
                            get isMobile() {
                                return e.layout === ek.u.Mobile;
                            },
                            get isWindowsApplication() {
                                return e.platform === eN.O.WINDOWS;
                            },
                            get isMacOSApplication() {
                                return e.platform === eN.O.MACOS;
                            },
                            get isLinuxApplication() {
                                return e.platform === eN.O.LINUX;
                            },
                            get isLiteVersionModeEnabled() {
                                return e.liteVersionMode === eA.w.ENABLED;
                            },
                            get isLiteVersionModeDisabled() {
                                return e.liteVersionMode === eA.w.DISABLED;
                            },
                            get isLiteVersionModeAvailableForToggle() {
                                return (
                                    t.isLiteVersionModeDisabled ||
                                    t.isLiteVersionModeEnabled
                                );
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setLayout(t) {
                                e.layout = t;
                            },
                            setPlatform(t) {
                                e.platform = t;
                            },
                            setIsLandscape(t) {
                                e.isLandscape = t;
                            },
                            setIsMobileLandscapeHeight(t) {
                                e.isMobileLandscapeHeight = t;
                            },
                            setBrowserInfo(t) {
                                let i =
                                    void 0 !== t.version
                                        ? String(t.version)
                                        : void 0;
                                e.browserInfo = (0, r.wg)({ ...t, version: i });
                            },
                            initializeLiteVersionMode() {
                                if (!(0, r._n)(e)) return;
                                let { experiments: i } = (0, r.Zn)(e),
                                    { containerStorage: s } = (0, r._$)(e),
                                    a = s.get(eR.c.LiteVersionMode);
                                if (a) {
                                    if (
                                        "2" !== a.version ||
                                        !i.checkExperiment(
                                            er.z.WebNextLiteVersion,
                                            "on",
                                        )
                                    )
                                        return void s.remove(
                                            eR.c.LiteVersionMode,
                                        );
                                    t.setLiteVersionMode(a.mode, !1);
                                }
                            },
                            setLiteVersionMode(t, i) {
                                let { containerStorage: s } = (0, r._$)(e);
                                (e.liteVersionMode = t),
                                    i &&
                                        s.set(eR.c.LiteVersionMode, {
                                            version: "2",
                                            mode: t,
                                        });
                            },
                        };
                        return t;
                    }),
                eD = r.gK.model("TrackIdModel", {
                    id: r.gK.union(r.gK.string, r.gK.number),
                    albumId: r.gK.maybe(r.gK.number),
                    timestamp: r.gK.maybe(r.gK.string),
                });
        },
        60866: (e, t, i) => {
            var s;
            i.d(t, { f: () => s }),
                (function (e) {
                    (e.OK = "ok"), (e.ERROR = "error");
                })(s || (s = {}));
        },
        88063: (e, t, i) => {
            var s;
            i.d(t, { K: () => s }),
                (function (e) {
                    (e.EXPLICIT = "explicit"), (e.CLEAN = "clean");
                })(s || (s = {}));
        },
        93435: (e, t, i) => {
            var s;
            i.d(t, { M: () => s }),
                (function (e) {
                    (e.MODAL = "modal"),
                        (e.FOREIGN_AGENT = "foreignAgent"),
                        (e.INFORMATIONAL = "informational"),
                        (e.AGE_18 = "age18"),
                        (e.EXPLICIT = "explicit"),
                        (e.DESCRIPTION_TEXT = "descriptionText"),
                        (e.AGE_18_ICON = "age18Icon"),
                        (e.EXPLICIT_ICON = "explicitIcon"),
                        (e.EXCLAMATION_ICON = "exclamationIcon");
                })(s || (s = {}));
        },
    },
]);
