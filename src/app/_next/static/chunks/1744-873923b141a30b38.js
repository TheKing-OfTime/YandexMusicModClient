(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1744],
    {
        23276: (e, t, i) => {
            "use strict";
            i.d(t, { b: () => l, e: () => a });
            var r = i(6247),
                n = i(18740);
            let a = (e) => {
                    if (!e) return n.cp.TRACK;
                    switch (e.type) {
                        case r.S.PODCAST:
                            return n.cp.PODCAST_EPISODE;
                        case r.S.AUDIOBOOK:
                            return n.cp.AUDIOBOOK_EPISODE;
                        default:
                            return n.cp.TRACK;
                    }
                },
                l = (e) => a(e);
        },
        23460: (e, t, i) => {
            "use strict";
            i.d(t, { useOnModifyPlayQueue: () => y });
            var r = i(33008),
                n = i(42213),
                a = i(53555),
                l = i(79169),
                s = i(66268),
                o = i(96560),
                u = i(18064),
                d = i(77868),
                c = i(18740),
                m = i(49374),
                g = i(57324),
                v = i.n(g);
            let E = (e) => {
                let {
                        closeToast: t,
                        entityVariant: i,
                        entityTitle: n,
                        coverUri: a,
                        variant: l,
                    } = e,
                    g = (0, s.useMemo)(
                        () =>
                            (0, r.jsxs)(d.Caption, {
                                className: v().entityTitle,
                                variant: "span",
                                type: "controls",
                                size: "m",
                                lineClamp: 1,
                                children: ["\xa0", n, "\xa0"],
                            }),
                        [n],
                    ),
                    E = (0, s.useMemo)(() => {
                        switch (l) {
                            case m.N.NEXT:
                                return ((e, t) => {
                                    switch (e) {
                                        case c.cp.TRACK:
                                            return (0, r.jsx)(o.A, {
                                                id: "play-queue.track-will-be-played-next",
                                                values: { title: t },
                                            });
                                        case c.cp.PODCAST_EPISODE:
                                            return (0, r.jsx)(o.A, {
                                                id: "play-queue.podcast-episode-will-be-played-next",
                                                values: { title: t },
                                            });
                                        case c.cp.AUDIOBOOK_EPISODE:
                                            return (0, r.jsx)(o.A, {
                                                id: "play-queue.audiobook-episode-will-be-played-next",
                                                values: { title: t },
                                            });
                                    }
                                })(i, g);
                            case m.N.LAST:
                                return ((e, t) => {
                                    switch (e) {
                                        case c.cp.TRACK:
                                            return (0, r.jsx)(o.A, {
                                                id: "play-queue.track-will-be-played-last",
                                                values: { title: t },
                                            });
                                        case c.cp.PODCAST_EPISODE:
                                            return (0, r.jsx)(o.A, {
                                                id: "play-queue.podcast-episode-will-be-played-last",
                                                values: { title: t },
                                            });
                                        case c.cp.AUDIOBOOK_EPISODE:
                                            return (0, r.jsx)(o.A, {
                                                id: "play-queue.audiobook-episode-will-be-played-last",
                                                values: { title: t },
                                            });
                                    }
                                })(i, g);
                            case m.N.HIDE:
                            case m.N.REMOVE:
                                return ((e, t) => {
                                    switch (e) {
                                        case c.cp.TRACK:
                                            return (0, r.jsx)(o.A, {
                                                id: "play-queue.track-will-be-removed",
                                                values: { title: t },
                                            });
                                        case c.cp.PODCAST_EPISODE:
                                            return (0, r.jsx)(o.A, {
                                                id: "play-queue.podcast-episode-will-be-removed",
                                                values: { title: t },
                                            });
                                        case c.cp.AUDIOBOOK_EPISODE:
                                            return (0, r.jsx)(o.A, {
                                                id: "play-queue.audiobook-episode-will-be-removed",
                                                values: { title: t },
                                            });
                                    }
                                })(i, g);
                        }
                    }, [l, i, g]);
                return (0, r.jsx)(c.$W, {
                    message: (0, r.jsx)(d.Caption, {
                        className: v().text,
                        variant: "div",
                        type: "controls",
                        size: "m",
                        ...(0, u.Am)(u.OA.track.PLAY_QUEUE_NOTIFICATION_TEXT),
                        children: E,
                    }),
                    cover: (0, r.jsx)(c.BW, {
                        className: v().image,
                        src: a,
                        size: 100,
                        fit: "cover",
                        alt: n,
                        withAvatarReplace: !0,
                    }),
                    closeToast: t,
                    coverRadius: "s",
                });
            };
            var p = i(23276);
            function y(e, t, i) {
                let { notify: s } = (0, l.lkh)(),
                    { fullscreenPlayer: o } = (0, l.Pjs)(),
                    u = (0, l.eGp)(),
                    d = (0, p.b)(e);
                return (0, n.c)(() => {
                    if (!e) return;
                    switch (t) {
                        case m.N.LAST:
                            null == u ||
                                u.injectLast({
                                    entitiesData: [
                                        {
                                            type: a.z4.Unloaded,
                                            meta: { id: e.entityId },
                                        },
                                    ],
                                });
                            break;
                        case m.N.NEXT:
                            null == u ||
                                u.injectNext({
                                    entitiesData: [
                                        {
                                            type: a.z4.Unloaded,
                                            meta: { id: e.entityId },
                                        },
                                    ],
                                });
                            break;
                        case m.N.REMOVE:
                            i &&
                                (null == u ||
                                    u.removeAndLoadEntities({ positions: i }));
                            break;
                        case m.N.HIDE:
                            (null == i ? void 0 : i.length) &&
                                (null == u || u.hide({ positions: i }));
                    }
                    let n = o.modal.isOpened
                        ? l.uQT.FULLSCREEN_INFO
                        : l.uQT.INFO;
                    s(
                        (0, r.jsx)(E, {
                            entityVariant: d,
                            variant: t,
                            entityTitle: e.title,
                            coverUri: e.coverUri,
                        }),
                        { containerId: n },
                    );
                });
            }
        },
        26557: (e, t, i) => {
            "use strict";
            i.d(t, { useOnPromoLandingLikeClick: () => o });
            var r = i(17846),
                n = i(37656),
                a = i(42213),
                l = i(79169),
                s = i(42054);
            let o = (e) => {
                let {
                        user: t,
                        modals: {
                            promoLandingBuySubscriptionModal: i,
                            crackdownModal: o,
                        },
                        settings: { isMobile: u },
                        promolanding: d,
                    } = (0, l.Pjs)(),
                    { isFreemium: c } = (0, l.XCI)(),
                    m = (0, s.f)(),
                    g = (0, r.useSearchParams)();
                return (0, a.c)(async () => {
                    if (
                        (!c ||
                            (null == e ? void 0 : e.isLiked) ||
                            (u ? i.open() : o.open()),
                        t.isAuthorized) &&
                        e
                    ) {
                        if (!e.isLiked) {
                            var r, a;
                            d.sendLikeFeedback({
                                reaction: n.g.LIKE,
                                yclid:
                                    null != (r = g.get(l.K3F.YCLID)) ? r : "",
                                campaignId:
                                    null != (a = g.get(l.K3F.UTM_CAMPAIGN))
                                        ? a
                                        : "",
                                trackId: e.id,
                            });
                        }
                        return m({
                            track: e,
                            errorContainerId: l.uQT.ERROR,
                            infoContainerId: l.uQT.INFO,
                            withLink: !1,
                            withNotification: t.hasPlus,
                            playbackId: l.V_r.PROMO_LANDING,
                        });
                    }
                });
            };
        },
        30206: (e, t, i) => {
            "use strict";
            i.d(t, { useTimeLeftText: () => a });
            var r = i(66268),
                n = i(73827);
            let a = () => {
                let { formatMessage: e } = (0, n.A)();
                return (0, r.useCallback)(
                    function (t) {
                        let i =
                                !(arguments.length > 1) ||
                                void 0 === arguments[1] ||
                                arguments[1],
                            r = Math.floor(t / 60),
                            n = function (t) {
                                let i =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1] &&
                                        arguments[1],
                                    r = e(
                                        { id: "time.minutes-left" },
                                        { minutes: t },
                                    );
                                return i
                                    ? ""
                                          .concat(
                                              e(
                                                  { id: "time.left" },
                                                  { time: t },
                                              ),
                                              " ",
                                          )
                                          .concat(r)
                                    : r;
                            };
                        if (t < 1) return e({ id: "time.finished" });
                        if (t < 60)
                            return (function (t) {
                                let i =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1] &&
                                        arguments[1],
                                    r = e(
                                        { id: "time.seconds-left" },
                                        { seconds: t },
                                    );
                                return i
                                    ? ""
                                          .concat(
                                              e(
                                                  { id: "time.left" },
                                                  { time: t },
                                              ),
                                              " ",
                                          )
                                          .concat(r)
                                    : r;
                            })(Math.floor(t), i);
                        if (r < 60) return n(r, i);
                        let a = Math.floor(r / 60),
                            l = r % 60,
                            s = (function (t) {
                                let i =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1];
                                return i
                                    ? e({ id: "time.hours-left" }, { hours: t })
                                    : e({ id: "time.hours" }, { hours: t });
                            })(a, i);
                        return l > 0 ? "".concat(s, " ").concat(n(l)) : s;
                    },
                    [e],
                );
            };
        },
        33647: (e, t, i) => {
            "use strict";
            i.d(t, { NotificationLike: () => u });
            var r = i(33008),
                n = i(97531),
                a = i(18740),
                l = i(23276),
                s = i(6247),
                o = i(79169);
            let u = (0, n.PA)((e) => {
                let { track: t, closeToast: i, withLink: n } = e,
                    u = ((e) => {
                        switch (e.type) {
                            case s.S.PODCAST:
                            case s.S.AUDIOBOOK:
                                return o.Zyd.collectionShelfLiked.href;
                            default:
                                return o.Zyd.collection.href;
                        }
                    })(t),
                    d = (0, l.b)(t);
                return (0, r.jsx)(a.OM, {
                    closeToast: i,
                    entityVariant: d,
                    entityTitle: t.title,
                    collectionUrl: u,
                    coverUri: t.coverUri,
                    isLiked: t.isLiked,
                    withLink: n,
                });
            });
        },
        37259: (e, t, i) => {
            "use strict";
            i.d(t, { useProgressTimeNonMusic: () => a });
            var r = i(73827),
                n = i(79169);
            let a = (e, t) => {
                let { formatMessage: i } = (0, r.A)(),
                    { hours: a, minutes: l, seconds: s } = (0, n.e6v)(e),
                    { hours: o, minutes: u, seconds: d } = (0, n.e6v)(t);
                return i(
                    { id: "non-music.non-music-progress" },
                    {
                        progress: Math.round((e / t) * 100),
                        beginHours: a,
                        beginMinutes: l,
                        beginSeconds: s,
                        endHours: o,
                        endMinutes: u,
                        endSeconds: d,
                    },
                );
            };
        },
        42054: (e, t, i) => {
            "use strict";
            i.d(t, { f: () => v });
            var r = i(33008),
                n = i(29318),
                a = i(66268),
                l = i(73827),
                s = i(58624),
                o = i(60866),
                u = i(68565),
                d = i(42213),
                c = i(79169),
                m = i(18740),
                g = i(33647);
            let v = () => {
                let { notify: e } = (0, c.lkh)(),
                    [t, i] = (0, a.useState)(!1),
                    { formatMessage: v } = (0, l.A)(),
                    E = (0, c.eGp)();
                return (0, d.c)(async (a) => {
                    let {
                        track: l,
                        withLink: d = !0,
                        infoContainerId: c,
                        errorContainerId: p,
                        withNotification: y = !0,
                        playbackId: f,
                    } = a;
                    if (t) return;
                    let h = { ...(0, n.HO)(l), isLiked: !l.isLiked };
                    i(!0);
                    let I = await l.toggleLike();
                    if ((i(!1), I === o.f.OK)) {
                        let e = h.isLiked ? u.O.LIKE : u.O.UNLIKE,
                            t = null == E ? void 0 : E.getState(f);
                        if (
                            t &&
                            (0, s.i)(
                                null == t ? void 0 : t.currentContext.value,
                            )
                        ) {
                            let i = t.queueState.entityList.value.find((e) => {
                                let { entity: t } = e;
                                return t.data.meta.id === h.id;
                            });
                            i &&
                                t.currentContext.value.sendFeedback({
                                    type: e,
                                    entity: i.entity,
                                });
                        }
                    }
                    y &&
                        (I === o.f.OK
                            ? e(
                                  (0, r.jsx)(g.NotificationLike, {
                                      withLink: d,
                                      track: h,
                                  }),
                                  { containerId: c },
                              )
                            : e(
                                  (0, r.jsx)(m.hT, {
                                      error: v({
                                          id: "error-messages.error-during-action",
                                      }),
                                  }),
                                  { containerId: p },
                              ));
                });
            };
        },
        47635: (e, t, i) => {
            "use strict";
            i.d(t, { b: () => n });
            var r = i(75305);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === r.R.Music;
            }
        },
        49358: (e, t, i) => {
            "use strict";
            i.d(t, { useMarkListenedClick: () => d });
            var r = i(33008),
                n = i(73827),
                a = i(47635),
                l = i(72315),
                s = i(42213),
                o = i(79169),
                u = i(18740);
            let d = (e) => {
                let {
                        user: t,
                        fullscreenPlayer: i,
                        sonataState: { entityMeta: d },
                        album: c,
                    } = (0, o.Pjs)(),
                    { notify: m } = (0, o.lkh)(),
                    { formatMessage: g } = (0, n.A)(),
                    v = (0, o.eGp)();
                return (0, s.c)(async () => {
                    if (!e) return;
                    let n = i.modal.isOpened
                        ? o.uQT.FULLSCREEN_ERROR
                        : o.uQT.ERROR;
                    if (!t.isAuthorized)
                        return void m(
                            (0, r.jsx)(u.hT, {
                                error: g({
                                    id: "authorization-messages.need-to-authorizate",
                                }),
                            }),
                            { containerId: n },
                        );
                    let s = e.streamProgress,
                        E =
                            (null == d ? void 0 : d.id) === e.id &&
                            (null == d ? void 0 : d.albumId) === e.albumId;
                    if ((await e.setListeningFinishedStatus()) !== l.T.OK)
                        m(
                            (0, r.jsx)(u.hT, {
                                error: g({
                                    id: "error-messages.error-during-action",
                                }),
                            }),
                            { containerId: n },
                        );
                    else {
                        var p, y;
                        let t = !(null == s ? void 0 : s.hasEverFinished),
                            i =
                                null == v
                                    ? void 0
                                    : v.state.queueState.entityList.value,
                            r =
                                null == i
                                    ? void 0
                                    : i.find((t) => {
                                          let { entity: i } = t;
                                          if ((0, a.b)(i)) {
                                              var r, n;
                                              let t = i.data.meta;
                                              return (
                                                  t.realId === e.id &&
                                                  (null == (n = t.albums) ||
                                                  null == (r = n[0])
                                                      ? void 0
                                                      : r.id) === e.albumId
                                              );
                                          }
                                          return !1;
                                      });
                        r && (r.entity.everFinished = !!t),
                            E &&
                                (null == d ? void 0 : d.streamProgress) &&
                                (null == (p = d.streamProgress)
                                    ? void 0
                                    : p.hasEverFinished) !== t &&
                                (d.streamProgress.updateEverFinished(t),
                                t && d.streamProgress.updateEndPositionSec(0)),
                            (null == (y = c.meta)
                                ? void 0
                                : y.listeningFinished) &&
                                !t &&
                                (c.markTracksFinished({
                                    withoutTracks: [e.id],
                                }),
                                c.setAlbumUnfinished(),
                                c.setAllTracksUnfinished(!1)),
                            null == s || s.updateEverFinished(t),
                            c.meta && t && c.checkAllAlbumTrackFinished();
                    }
                });
            };
        },
        49374: (e, t, i) => {
            "use strict";
            i.d(t, { N: () => r });
            var r = (function (e) {
                return (
                    (e.NEXT = "NEXT"),
                    (e.LAST = "LAST"),
                    (e.REMOVE = "REMOVE"),
                    (e.HIDE = "HIDE"),
                    e
                );
            })({});
        },
        57324: (e) => {
            e.exports = {
                entityTitle: "NotificationPlayQueue_entityTitle__XCIsa",
                entityLink: "NotificationPlayQueue_entityLink__O7tHL",
                text: "NotificationPlayQueue_text___1DWX",
                image: "NotificationPlayQueue_image__SLXsp",
            };
        },
        61744: (e, t, i) => {
            "use strict";
            i.d(t, {
                OQ: () => N,
                Bg: () => U.ListeningProgress,
                t$: () => R,
                NM: () => v.N,
                d0: () => M.RemoveButton,
                B9: () => _,
                oQ: () => m,
                pK: () => g,
                vz: () => D,
                jU: () => C,
                gK: () => o,
                eK: () => p.e,
                $O: () => u,
                LT: () => d,
                Rw: () => c,
                TH: () => E.useMarkListenedClick,
                mW: () => y.useOnDislikeClick,
                KX: () => f.useOnLikeClick,
                iQ: () => h.useOnModifyPlayQueue,
                c5: () => I.useOnPromoLandingLikeClick,
                mw: () => b.useProgressTimeNonMusic,
                $4: () => k.useTimeLeftText,
            });
            var r,
                n,
                a,
                l = i(41028);
            (r || (r = {})).SMART_PREVIEW = "smart_preview";
            var s = i(79169);
            let o = (e, t) => {
                    var i, n, a, o, u, d, c, m, g, v;
                    e = e || {};
                    let { isSmartPreview: E, hasEverFinished: p } = t || {},
                        y = (0, s.QBb)(null == e ? void 0 : e.derivedColors),
                        f = E
                            ? null == (i = e.smartPreviewParams)
                                ? void 0
                                : i.durationMs
                            : null == e
                              ? void 0
                              : e.durationMs,
                        h = (0, l.wg)({
                            available: !!(null == (n = e.specialAudioResources)
                                ? void 0
                                : n.includes(r.SMART_PREVIEW)),
                        });
                    return (0, l.wg)({
                        id: (e.id || 0).toString(),
                        isAvailable: !!(null == e ? void 0 : e.available),
                        isRemoved:
                            (null == e ? void 0 : e.error) === "not-found",
                        title:
                            null != (g = null == e ? void 0 : e.title) ? g : "",
                        version: null == e ? void 0 : e.version,
                        durationMs: f,
                        coverUri: null == e ? void 0 : e.coverUri,
                        averageColor: y,
                        trackParameters: ((e) =>
                            (0, l.wg)({
                                bpm: null == e ? void 0 : e.bpm,
                                energy: null == e ? void 0 : e.energy,
                                hue: null == e ? void 0 : e.hue,
                                userCollectionHue:
                                    null == e ? void 0 : e.userCollectionHue,
                            }))(null == e ? void 0 : e.trackParameters),
                        trackSource: null == e ? void 0 : e.trackSource,
                        albumId:
                            null == (o = e.albums) || null == (a = o[0])
                                ? void 0
                                : a.id,
                        disclaimers: e.disclaimers,
                        type: e.type,
                        pubDate: e.pubDate,
                        hasLyrics:
                            null == (u = e.lyricsInfo)
                                ? void 0
                                : u.hasAvailableTextLyrics,
                        hasSyncLyrics:
                            null == (d = e.lyricsInfo)
                                ? void 0
                                : d.hasAvailableSyncLyrics,
                        shouldRememberPosition: e.rememberPosition,
                        streamProgress: ((e, t) =>
                            (0, l.wg)({
                                endPositionSec:
                                    null == e ? void 0 : e.endPositionSec,
                                hasEverFinished:
                                    (null == t ? void 0 : t.hasEverFinished) ||
                                    (null == e ? void 0 : e.everFinished),
                            }))(null == e ? void 0 : e.streamProgress, {
                            hasEverFinished: p,
                        }),
                        shortDescription:
                            null != (v = e.shortDescription) ? v : "",
                        trailer: h,
                        clipIds: e.clipIds,
                        major: e.major,
                        genre:
                            null == (m = e.albums) || null == (c = m[0])
                                ? void 0
                                : c.genre,
                        realId: e.realId,
                    });
                },
                u = (e, t) => {
                    if (!t) {
                        let { href: t } = (0, s.uvd)("/track/:trackId", {
                            params: { trackId: e },
                        });
                        return t;
                    }
                    let { href: i } = (0, s.uvd)(
                        "/album/:albumId/track/:trackId",
                        { params: { albumId: t, trackId: e } },
                    );
                    return i;
                },
                d = (e) =>
                    (0, l.wg)({
                        id: e.id,
                        name: e.name,
                        prettyName: e.prettyName,
                    }),
                c = (e) => ({
                    id: e.id,
                    albumId: e.albumId,
                    timestamp: e.timestamp,
                });
            var m = (function (e) {
                    return (
                        (e.TOO_MANY_FILES = "TOO_MANY_FILES"),
                        (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
                        e
                    );
                })({}),
                g = (function (e) {
                    return (
                        (e.IDLE = "IDLE"),
                        (e.PREPARE = "PREPARE"),
                        (e.UPLOADING = "UPLOADING"),
                        (e.PROCESSING = "PROCESSING"),
                        (e.RESOLVE = "RESOLVE"),
                        (e.REJECT = "REJECT"),
                        (e.CANCELLED = "CANCELLED"),
                        e
                    );
                })({}),
                v = i(49374),
                E = i(49358),
                p = i(23276),
                y = i(80651),
                f = i(70559),
                h = i(23460),
                I = i(26557),
                b = i(37259),
                k = i(30206),
                O = i(6247);
            !(function (e) {
                (e.OWN = "OWN"),
                    (e.UGC = "UGC"),
                    (e.OWN_REPLACED_TO_UGC = "OWN_REPLACED_TO_UGC"),
                    (e.EXTERNAL = "EXTERNAL");
            })(n || (n = {}));
            var L = i(93435),
                T = i(59615),
                A = i(72315);
            let _ = l.gK
                    .model("StreamProgress", {
                        endPositionSec: l.gK.maybe(l.gK.number),
                        hasEverFinished: l.gK.maybe(l.gK.boolean),
                    })
                    .actions((e) => ({
                        updateEndPositionSec: (t) => {
                            e.endPositionSec = t;
                        },
                        updateEverFinished: (t) => {
                            e.hasEverFinished = t;
                        },
                        markListened: (0, l.L3)(function* (t) {
                            let { streamsResource: i, modelActionsLogger: r } =
                                (0, l._$)(e);
                            try {
                                return yield i.markFinished(t);
                            } catch (e) {
                                return r.error(e), A.T.ERROR;
                            }
                        }),
                        markUnlistened: (0, l.L3)(function* (t) {
                            let { streamsResource: i, modelActionsLogger: r } =
                                (0, l._$)(e);
                            try {
                                return yield i.markUnfinished(t);
                            } catch (e) {
                                return r.error(e), A.T.ERROR;
                            }
                        }),
                    })),
                S = l.gK.model("TrackMajor", {
                    id: l.gK.maybeNull(l.gK.number),
                    name: l.gK.maybeNull(l.gK.string),
                }),
                P = l.gK.model("TrackParameters", {
                    bpm: l.gK.maybe(l.gK.number),
                    energy: l.gK.maybe(l.gK.number),
                    hue: l.gK.maybe(l.gK.number),
                    userCollectionHue: l.gK.maybe(l.gK.number),
                }),
                K = [O.S.MUSIC, O.S.TRACK, O.S.NOISE, O.S.ASMR],
                N = l.gK
                    .compose(
                        l.gK.model("BaseTrack", {
                            id: l.gK.string,
                            isAvailable: l.gK.boolean,
                            isRemoved: l.gK.boolean,
                            title: l.gK.string,
                            trackSource: l.gK.maybe(
                                l.gK.enumeration(Object.values(n)),
                            ),
                            version: l.gK.maybe(l.gK.string),
                            durationMs: l.gK.maybe(l.gK.number),
                            coverUri: l.gK.maybe(l.gK.string),
                            averageColor: l.gK.maybe(l.gK.string),
                            trackParameters: l.gK.maybe(P),
                            albumId: l.gK.maybe(l.gK.number),
                            disclaimers: l.gK.maybe(l.gK.array(l.gK.string)),
                            type: l.gK.maybe(
                                l.gK.enumeration(Object.values(O.S)),
                            ),
                            pubDate: l.gK.maybe(l.gK.string),
                            hasLyrics: l.gK.maybe(l.gK.boolean),
                            hasSyncLyrics: l.gK.maybe(l.gK.boolean),
                            trailer: l.gK.maybe(T.aQ),
                            shouldRememberPosition: l.gK.maybe(l.gK.boolean),
                            streamProgress: l.gK.maybe(_),
                            shortDescription: l.gK.maybe(l.gK.string),
                            major: l.gK.maybeNull(S),
                            clipIds: l.gK.maybeNull(l.gK.array(l.gK.number)),
                            genre: l.gK.maybeNull(l.gK.string),
                            realId: l.gK.maybe(l.gK.string),
                        }),
                        T.Ec,
                    )
                    .views((e) => {
                        let t = {
                            get isLiked() {
                                if ((0, l._n)(e)) {
                                    let { library: t } = (0, l.Zn)(e);
                                    return t.isTrackLiked(e.id);
                                }
                                return !1;
                            },
                            get isDownloaded() {
                                if (!(0, l._n)(e)) return !1;
                                let { slam: t } = (0, l.Zn)(e);
                                return t.isTrackDownloaded(e.id);
                            },
                            get isDownloading() {
                                if (!(0, l._n)(e)) return !1;
                                let { slam: t } = (0, l.Zn)(e);
                                return t.isTrackDownloading(e.id);
                            },
                            get downloadingProgress() {
                                if (!(0, l._n)(e)) return 0;
                                let { slam: t } = (0, l.Zn)(e);
                                return t.getTrackDownloadingProgress(e.id);
                            },
                            get isAvailableForDownload() {
                                if (!(0, l._n)(e)) return !1;
                                return (
                                    (e.type && K.includes(e.type)) || !!t.isUGC
                                );
                            },
                            getUrl(t) {
                                let i = e.albumId
                                        ? "/album/:albumId/track/:trackId"
                                        : "/track/:trackId",
                                    r = e.albumId
                                        ? { albumId: e.albumId, trackId: e.id }
                                        : { trackId: e.id },
                                    { href: n } = (0, s.uvd)(i, {
                                        params: r,
                                        query: t,
                                    });
                                return n;
                            },
                            get url() {
                                return t.getUrl();
                            },
                            get isDisliked() {
                                if ((0, l._n)(e)) {
                                    let { library: t } = (0, l.Zn)(e);
                                    return t.isTrackDisliked(e.id);
                                }
                                return !1;
                            },
                            get isTrackPodcast() {
                                if ((0, l._n)(e)) return e.type === O.S.PODCAST;
                                return !1;
                            },
                            get isPlusSubscribed() {
                                if (!(0, l._n)(e)) return !1;
                                let { user: t } = (0, l.Zn)(e);
                                return t.hasPlus;
                            },
                            get isSyncLyricsAvailableWithOfflineFeature() {
                                if (!(0, l._n)(e)) return !1;
                                let { slam: t } = (0, l.Zn)(e);
                                return (
                                    !!e.hasSyncLyrics && !t.isOfflineModeEnabled
                                );
                            },
                            get isSyncLyricsAvailable() {
                                return (
                                    this.isPlusSubscribed &&
                                    this.isSyncLyricsAvailableWithOfflineFeature
                                );
                            },
                            get isLyricsAvailable() {
                                if (!(0, l._n)(e)) return !1;
                                let { slam: t, user: i } = (0, l.Zn)(e);
                                if (!i.hasPlus) return !1;
                                return !!e.hasLyrics && !t.isOfflineModeEnabled;
                            },
                            get isTrackAudiobook() {
                                if ((0, l._n)(e))
                                    return e.type === O.S.AUDIOBOOK;
                                return !1;
                            },
                            get isTrackFairyTale() {
                                if ((0, l._n)(e))
                                    return e.type === O.S.FAIRY_TALE;
                                return !1;
                            },
                            get isTrackNonMusic() {
                                return (
                                    this.isTrackPodcast ||
                                    this.isTrackAudiobook ||
                                    this.isTrackFairyTale
                                );
                            },
                            get isTrackMusic() {
                                if ((0, l._n)(e))
                                    return (
                                        e.type === O.S.TRACK ||
                                        e.type === O.S.MUSIC
                                    );
                                return !1;
                            },
                            get isUGC() {
                                if ((0, l._n)(e))
                                    return e.trackSource === n.UGC;
                                return;
                            },
                            get isOwn() {
                                if ((0, l._n)(e))
                                    return e.trackSource === n.OWN;
                                return;
                            },
                            get isOwnReplacedToUGC() {
                                if ((0, l._n)(e))
                                    return (
                                        e.trackSource === n.OWN_REPLACED_TO_UGC
                                    );
                                return;
                            },
                            get seeds() {
                                return ["track:".concat(e.id)];
                            },
                            get modalDisclaimerId() {
                                if (e.disclaimers) {
                                    var i;
                                    let t =
                                        null ==
                                        (i = (0, s.bRW)(
                                            e.disclaimers,
                                            L.M.MODAL,
                                        ))
                                            ? void 0
                                            : i[0];
                                    if (t) {
                                        let { id: e } = t;
                                        return e;
                                    }
                                }
                                return null;
                            },
                            get isLegalRejected() {
                                var r;
                                if (
                                    !(0, l._n)(e) ||
                                    !e.disclaimers ||
                                    e.isAvailable
                                )
                                    return !1;
                                let t =
                                    null ==
                                    (r = (0, s.bRW)(e.disclaimers, L.M.MODAL))
                                        ? void 0
                                        : r[0];
                                return (
                                    (null == t ? void 0 : t.type) === L.M.MODAL
                                );
                            },
                            get isUnsafeLegal() {
                                if (!(0, l._n)(e)) return !1;
                                if (e.disclaimers) {
                                    var a;
                                    let t =
                                        null ==
                                        (a = (0, s.bRW)(
                                            e.disclaimers,
                                            L.M.MODAL,
                                        ))
                                            ? void 0
                                            : a[0];
                                    return (
                                        e.isAvailable &&
                                        (null == t ? void 0 : t.type) ===
                                            L.M.MODAL
                                    );
                                }
                                return !1;
                            },
                            get entityId() {
                                if (e.albumId)
                                    return ""
                                        .concat(e.id, ":")
                                        .concat(e.albumId);
                                return e.id;
                            },
                            get hasAlbumLink() {
                                if (!(0, l._n)(e)) return !1;
                                return !!(
                                    e.albumId &&
                                    this.isOwn &&
                                    e.isAvailable
                                );
                            },
                            get hasTrackLink() {
                                if (!(0, l._n)(e)) return !1;
                                let {
                                    settings: { isMobile: t },
                                    slam: i,
                                } = (0, l.Zn)(e);
                                return (
                                    e.isAvailable &&
                                    !this.isUGC &&
                                    !this.isOwnReplacedToUGC &&
                                    !t &&
                                    !i.isOfflineModeEnabled
                                );
                            },
                            get isNonUserGenerated() {
                                if (!(0, l._n)(e)) return !1;
                                return !t.isUGC && !t.isOwnReplacedToUGC;
                            },
                            get hasModalAccess() {
                                var o;
                                return !!(null == (o = e.disclaimers)
                                    ? void 0
                                    : o.includes(L.M.MODAL));
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        afterCreate() {
                            e.trackType = e.type;
                        },
                        toggleLike: (0, l.L3)(function* () {
                            if (!(0, l._n)(e)) return;
                            let { library: t, user: i } = (0, l.Zn)(e);
                            if (i.isAuthorized)
                                return yield t.toggleTrackLike({
                                    entityId: e.id,
                                    albumId: e.albumId,
                                    userId: i.account.data.uid,
                                });
                        }),
                        toggleDislike: (0, l.L3)(function* () {
                            if (!(0, l._n)(e)) return;
                            let { library: t, user: i } = (0, l.Zn)(e);
                            if (i.isAuthorized)
                                return yield t.toggleTrackDislike({
                                    entityId: e.id,
                                    albumId: e.albumId,
                                    userId: i.account.data.uid,
                                });
                        }),
                        setListeningFinishedStatus: (0, l.L3)(function* () {
                            let t = e.streamProgress;
                            if (t)
                                return (null == t ? void 0 : t.hasEverFinished)
                                    ? yield null == t
                                          ? void 0
                                          : t.markUnlistened({
                                                trackId: Number(e.id),
                                            })
                                    : yield null == t
                                          ? void 0
                                          : t.markListened({
                                                trackId: Number(e.id),
                                            });
                        }),
                        getKey: (t) => "".concat(t, "_").concat(e.id),
                    })),
                R = l.gK.model("MajorModel", {
                    id: l.gK.number,
                    name: l.gK.string,
                    prettyName: l.gK.maybeNull(l.gK.string),
                });
            (a || (a = {})).TOO_MANY_FILES = "TOO_MANY_FILES";
            let D = l.gK
                    .model("TrackUgcUploadModel", {
                        loadingState: l.gK.enumeration(Object.values(g)),
                        errorReason: l.gK.maybeNull(
                            l.gK.enumeration(Object.values(m)),
                        ),
                        playlistKind: l.gK.number,
                        trackId: l.gK.maybeNull(l.gK.string),
                        uploadUrl: l.gK.maybeNull(l.gK.string),
                    })
                    .volatile(() => ({ file: null, abortController: null }))
                    .actions((e) => {
                        let t = {
                            setFile(t) {
                                e.file = t;
                            },
                            getUploadUrl: (0, l.L3)(function* () {
                                if (!(0, l._n)(e)) return;
                                let {
                                        loaderResource: t,
                                        modelActionsLogger: i,
                                    } = (0, l._$)(e),
                                    { user: r } = (0, l.Zn)(e);
                                if (
                                    ![g.IDLE, g.REJECT].includes(e.loadingState)
                                )
                                    return;
                                e.loadingState = g.PREPARE;
                                let n = r.account.data.uid;
                                if (n)
                                    try {
                                        var s;
                                        let i =
                                                null == (s = e.file)
                                                    ? void 0
                                                    : s.name,
                                            r = yield t.getUploadUrl({
                                                playlistId: ""
                                                    .concat(n, ":")
                                                    .concat(e.playlistKind),
                                                uid: n,
                                                path: i,
                                            });
                                        if (
                                            r &&
                                            "result" in r &&
                                            r.result === a.TOO_MANY_FILES
                                        ) {
                                            (e.loadingState = g.REJECT),
                                                (e.errorReason =
                                                    m.TOO_MANY_FILES);
                                            return;
                                        }
                                        if (
                                            r &&
                                            "post-target" in r &&
                                            "ugc-track-id" in r
                                        ) {
                                            (e.uploadUrl = r["post-target"]),
                                                (e.trackId = r["ugc-track-id"]);
                                            return;
                                        }
                                        (e.errorReason = m.UNKNOWN_ERROR),
                                            (e.loadingState = g.REJECT);
                                        return;
                                    } catch (t) {
                                        (e.loadingState = g.REJECT), i.error(t);
                                        return;
                                    }
                            }),
                            uploadFile: (0, l.L3)(function* () {
                                if (!(0, l._n)(e)) return;
                                let {
                                    prefixlessResource: t,
                                    modelActionsLogger: i,
                                } = (0, l._$)(e);
                                if (
                                    e.loadingState === g.PREPARE &&
                                    e.uploadUrl &&
                                    e.file
                                ) {
                                    e.loadingState = g.UPLOADING;
                                    try {
                                        let i = new FormData();
                                        i.append("file", e.file);
                                        let r = new AbortController(),
                                            n = r.signal;
                                        (e.abortController = r),
                                            yield t.uploadFile(
                                                {
                                                    url: e.uploadUrl,
                                                    formData: i,
                                                },
                                                { signal: n },
                                            ),
                                            (e.loadingState = g.PROCESSING);
                                        return;
                                    } catch (t) {
                                        (e.loadingState = g.REJECT), i.error(t);
                                        return;
                                    }
                                }
                            }),
                            runUpload: (0, l.L3)(function* () {
                                (0, l._n)(e) &&
                                    (yield t.getUploadUrl(),
                                    e.loadingState !== g.REJECT &&
                                        (yield t.uploadFile()));
                            }),
                            retryUpload() {
                                if ((this.reset(), !(0, l._n)(e))) return;
                                let { ugcUploadCenter: t } = (0, l.Zn)(e);
                                t.runUploadTracksQueue();
                            },
                            abortUpload() {
                                var t;
                                if (
                                    ((e.loadingState = g.CANCELLED),
                                    null == (t = e.abortController) ||
                                        t.abort(),
                                    !(0, l._n)(e))
                                )
                                    return;
                                let { ugcUploadCenter: i } = (0, l.Zn)(e);
                                i.clearCancelledUploads();
                            },
                            reset() {
                                (e.loadingState = g.IDLE),
                                    (e.trackId = null),
                                    (e.uploadUrl = null),
                                    (e.abortController = null);
                            },
                        };
                        return t;
                    }),
                C = l.gK.model("Ugc");
            var U = i(78724);
            i(97004), i(33647);
            var M = i(68555);
        },
        68555: (e, t, i) => {
            "use strict";
            i.d(t, { RemoveButton: () => u });
            var r = i(33008),
                n = i(66268),
                a = i(73827),
                l = i(18064),
                s = i(44189),
                o = i(78016);
            let u = (e) => {
                let {
                        className: t,
                        variant: i = "text",
                        onClick: u,
                        iconClassName: d,
                        iconSize: c,
                        size: m = "s",
                    } = e,
                    { formatMessage: g } = (0, a.A)(),
                    v = (0, n.useCallback)(
                        (e) => {
                            null == u || u(), e.stopPropagation();
                        },
                        [u],
                    );
                return (0, r.jsx)(s.Button, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: m,
                    radius: "round",
                    "aria-label": g({ id: "play-queue.delete-from-queue" }),
                    onClick: v,
                    icon: (0, r.jsx)(o.Icon, {
                        size: c,
                        className: d,
                        variant: "bucket",
                    }),
                    ...(0, l.Am)(l.OA.track.REMOVE_BUTTON),
                });
            };
        },
        68565: (e, t, i) => {
            "use strict";
            var r;
            i.d(t, { O: () => r }),
                (function (e) {
                    (e.RADIO_STARTED = "radioStarted"),
                        (e.TRACK_STARTED = "trackStarted"),
                        (e.TRACK_FINISHED = "trackFinished"),
                        (e.SKIP = "skip"),
                        (e.SKIP_FAILED = "skipFailed"),
                        (e.LIKE = "like"),
                        (e.DISLIKE = "dislike"),
                        (e.AD = "ad"),
                        (e.JINGLE = "jingle"),
                        (e.UNLIKE = "unlike"),
                        (e.UNDISLIKE = "undislike"),
                        (e.COMBINED_QUEUE_STARTED = "combinedQueueStarted"),
                        (e.PLAYABLE_ITEM_STARTED = "playableItemStarted"),
                        (e.PLAYABLE_ITEM_FINISHED = "playableItemFinished"),
                        (e.PLAYABLE_ITEM_SKIP = "playableItemSkip"),
                        (e.PLAYABLE_ITEM_LIKE = "playableItemLike"),
                        (e.PLAYABLE_ITEM_DISLIKE = "playableItemDislike"),
                        (e.PLAYABLE_ITEM_UNLIKE = "playableItemUnlike"),
                        (e.PLAYABLE_ITEM_UNDISLIKE = "playableItemUndislike");
                })(r || (r = {}));
        },
        70559: (e, t, i) => {
            "use strict";
            i.d(t, { useOnLikeClick: () => u });
            var r = i(33008),
                n = i(73827),
                a = i(42213),
                l = i(79169),
                s = i(18740),
                o = i(42054);
            let u = (e) => {
                let { user: t, fullscreenPlayer: i } = (0, l.Pjs)(),
                    { notify: u } = (0, l.lkh)(),
                    { formatMessage: d } = (0, n.A)(),
                    c = (0, o.f)();
                return (0, a.c)(async () => {
                    if (!e) return;
                    let n = i.modal.isOpened
                            ? l.uQT.FULLSCREEN_INFO
                            : l.uQT.INFO,
                        a = i.modal.isOpened
                            ? l.uQT.FULLSCREEN_ERROR
                            : l.uQT.ERROR;
                    return t.isAuthorized
                        ? c({
                              track: e,
                              errorContainerId: a,
                              infoContainerId: n,
                          })
                        : void u(
                              (0, r.jsx)(s.hT, {
                                  error: d({
                                      id: "authorization-messages.need-to-authorizate",
                                  }),
                              }),
                              { containerId: a },
                          );
                });
            };
        },
        75305: (e, t, i) => {
            "use strict";
            var r;
            i.d(t, { R: () => r }),
                (function (e) {
                    (e.Music = "music"),
                        (e.DownloadedMusic = "downloadedMusic"),
                        (e.VibeTrack = "vibeTrack"),
                        (e.Generative = "generative"),
                        (e.Unknown = "unknown"),
                        (e.SmartPreview = "smartPreview"),
                        (e.Clip = "clip"),
                        (e.Radio = "fm_radio");
                })(r || (r = {}));
        },
        78724: (e, t, i) => {
            "use strict";
            i.d(t, { ListeningProgress: () => y });
            var r = i(33008),
                n = i(85896),
                a = i(97531),
                l = i(66268),
                s = i(96560),
                o = i(86634),
                u = i(78016),
                d = i(77868),
                c = i(53555),
                m = i(79169),
                g = i(37259),
                v = i(30206),
                E = i(79636),
                p = i.n(E);
            let y = (0, a.PA)((e) => {
                var t, i, a, E, y, f, h, I, b;
                let {
                        className: k,
                        id: O,
                        albumId: L,
                        streamProgress: T,
                        durationMs: A,
                        playContextParams: _,
                        withTimeLeftText: S = !0,
                        isFinishedLabelHidden: P,
                    } = e,
                    K = (0, m.eGp)(),
                    { sonataState: N, album: R } = (0, m.Pjs)(),
                    D = Math.floor(A / 1e3),
                    [C, U] = (0, l.useState)(!1),
                    M = (0, v.useTimeLeftText)(),
                    { isPlaying: F, isCurrent: x } = (0, m.Dx4)({
                        playContextParams: _,
                        entityId: L ? "".concat(O, ":").concat(L) : O,
                    });
                (0, l.useEffect)(() => {
                    if (!x) return void U(!1);
                    let e =
                        null == K
                            ? void 0
                            : K.state.playerState.status.onChange(() => {
                                  (null == K
                                      ? void 0
                                      : K.state.playerState.status.value) ===
                                      c.MT.BUFFERING && U(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [K, T, x, F]),
                    (0, l.useEffect)(() => {
                        var e;
                        (
                            null == R || null == (e = R.meta)
                                ? void 0
                                : e.listeningFinished
                        )
                            ? (T.updateEndPositionSec(0),
                              T.updateEverFinished(!0))
                            : (null == R ? void 0 : R.allTracksUnfinished) &&
                              T.updateEverFinished(!1);
                    }, [
                        T,
                        null == R ? void 0 : R.allTracksUnfinished,
                        null == R || null == (t = R.meta)
                            ? void 0
                            : t.listeningFinished,
                    ]),
                    (0, l.useEffect)(() => {
                        var e, t;
                        x &&
                            (null == N || null == (e = N.entityMeta)
                                ? void 0
                                : e.streamProgress) &&
                            T &&
                            N.entityMeta.streamProgress.hasEverFinished !==
                                T.hasEverFinished &&
                            T.updateEverFinished(
                                !!N.entityMeta.streamProgress.hasEverFinished,
                            ),
                            D - ((null == T ? void 0 : T.endPositionSec) || 0) <
                                1 &&
                                ((null == N || null == (t = N.entityMeta)
                                    ? void 0
                                    : t.streamProgress) &&
                                    x &&
                                    (N.entityMeta.streamProgress.updateEverFinished(
                                        !0,
                                    ),
                                    N.entityMeta.streamProgress.updateEndPositionSec(
                                        0,
                                    )),
                                null == T || T.updateEverFinished(!0));
                    }, [
                        x,
                        null == N || null == (i = N.entityMeta)
                            ? void 0
                            : i.streamProgress,
                        null == N ||
                        null == (E = N.entityMeta) ||
                        null == (a = E.streamProgress)
                            ? void 0
                            : a.hasEverFinished,
                        T,
                        T.hasEverFinished,
                        T.endPositionSec,
                        D,
                    ]),
                    (0, l.useEffect)(() => {
                        if (!x) return;
                        let e =
                            null == K
                                ? void 0
                                : K.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t =
                                              K.state.playerState.progress
                                                  .value,
                                          i =
                                              null == N ||
                                              null == (e = N.entityMeta)
                                                  ? void 0
                                                  : e.streamProgress;
                                      0 !== t.position &&
                                          C &&
                                          T.updateEndPositionSec(t.position),
                                          x &&
                                              parseInt(
                                                  "".concat(
                                                      null == i
                                                          ? void 0
                                                          : i.endPositionSec,
                                                  ),
                                                  10,
                                              ) !==
                                                  parseInt(
                                                      "".concat(t.position),
                                                      10,
                                                  ) &&
                                              (null == i ||
                                                  i.updateEndPositionSec(
                                                      t.position,
                                                  ));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [K, T, x, F, C, O, null == N ? void 0 : N.entityMeta]);
                let w =
                        (x &&
                            (null == N ||
                            null == (f = N.entityMeta) ||
                            null == (y = f.streamProgress)
                                ? void 0
                                : y.endPositionSec)) ||
                        T.endPositionSec,
                    j = (0, g.useProgressTimeNonMusic)(null != w ? w : 0, D),
                    G = (0, l.useMemo)(() => {
                        var e, t, i;
                        if (
                            ((x &&
                                (null == N ||
                                null == (t = N.entityMeta) ||
                                null == (e = t.streamProgress)
                                    ? void 0
                                    : e.hasEverFinished)) ||
                                (null == T ? void 0 : T.hasEverFinished) ||
                                (null == R || null == (i = R.meta)
                                    ? void 0
                                    : i.listeningFinished)) &&
                            !P
                        )
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(d.Caption, {
                                        lineClamp: 1,
                                        variant: "div",
                                        className: (0, n.$)(p().text, {
                                            [p().text_withoutTimeLeft]: !S,
                                        }),
                                        children: (0, r.jsx)(s.A, {
                                            id: "time.finished",
                                        }),
                                    }),
                                    (0, r.jsx)(u.Icon, {
                                        size: "xxs",
                                        variant: "check",
                                        className: p().checkIcon,
                                    }),
                                ],
                            });
                        if (!w || 0 === w) return;
                        let a = D - w,
                            l = M(a);
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Caption, {
                                    lineClamp: 1,
                                    variant: "div",
                                    className: (0, n.$)(p().text, {
                                        [p().text_withoutTimeLeft]: !S,
                                    }),
                                    children: l,
                                }),
                                a > 1 || P
                                    ? (0, r.jsx)(o.q, {
                                          "aria-valuetext": j,
                                          "aria-busy": x && F,
                                          value: w,
                                          max: D,
                                      })
                                    : (0, r.jsx)(u.Icon, {
                                          size: "xxs",
                                          variant: "check",
                                          className: p().checkIcon,
                                      }),
                            ],
                        });
                    }, [
                        D,
                        null == T ? void 0 : T.hasEverFinished,
                        S,
                        M,
                        x,
                        F,
                        null == N ||
                        null == (I = N.entityMeta) ||
                        null == (h = I.streamProgress)
                            ? void 0
                            : h.hasEverFinished,
                        null == R || null == (b = R.meta)
                            ? void 0
                            : b.listeningFinished,
                        P,
                        w,
                        j,
                    ]);
                return (0, r.jsx)("div", {
                    className: (0, n.$)(p().root, k),
                    children: G,
                });
            });
        },
        79636: (e) => {
            e.exports = {
                root: "ListeningProgress_root__Rvlcn",
                text_withoutTimeLeft:
                    "ListeningProgress_text_withoutTimeLeft__eAmOF",
                checkIcon: "ListeningProgress_checkIcon___yh49",
            };
        },
        80651: (e, t, i) => {
            "use strict";
            i.d(t, { useOnDislikeClick: () => E });
            var r = i(33008),
                n = i(29318),
                a = i(66268),
                l = i(73827),
                s = i(58624),
                o = i(60866),
                u = i(68565),
                d = i(42213),
                c = i(79169),
                m = i(18740),
                g = i(97004),
                v = i(23276);
            let E = (e) => {
                let { user: t, fullscreenPlayer: i } = (0, c.Pjs)(),
                    E = (0, c.eGp)(),
                    { notify: p } = (0, c.lkh)(),
                    [y, f] = (0, a.useState)(!1),
                    { formatMessage: h } = (0, l.A)(),
                    I = (0, v.b)(e);
                return (0, d.c)(async () => {
                    if (e) {
                        let l = i.modal.isOpened
                                ? c.uQT.FULLSCREEN_INFO
                                : c.uQT.INFO,
                            d = i.modal.isOpened
                                ? c.uQT.FULLSCREEN_ERROR
                                : c.uQT.ERROR;
                        if (!t.isAuthorized)
                            return void p(
                                (0, r.jsx)(m.hT, {
                                    error: h({
                                        id: "authorization-messages.need-to-authorizate",
                                    }),
                                }),
                                { containerId: d },
                            );
                        if (y) return;
                        let v = { ...(0, n.HO)(e), isDisliked: !e.isDisliked };
                        f(!0);
                        let b = await e.toggleDislike();
                        if ((f(!1), b === o.f.OK)) {
                            var a;
                            p(
                                (0, r.jsx)(g.NotificationDislike, {
                                    coverUri: v.coverUri,
                                    isDisliked: v.isDisliked,
                                    title: v.title,
                                    entityVariant: I,
                                }),
                                { containerId: l },
                            );
                            let e = v.isDisliked ? u.O.DISLIKE : u.O.UNDISLIKE;
                            if (E && (0, s.i)(E.state.currentContext.value)) {
                                let t =
                                    E.state.queueState.entityList.value.find(
                                        (e) => {
                                            let { entity: t } = e;
                                            return t.data.meta.id === v.id;
                                        },
                                    );
                                t &&
                                    (await E.state.currentContext.value.sendFeedback(
                                        { type: e, entity: t.entity },
                                    ));
                            }
                            v.isDisliked &&
                                v.id ===
                                    (null == E ||
                                    null ==
                                        (a =
                                            E.state.queueState.currentEntity
                                                .value)
                                        ? void 0
                                        : a.entity.data.meta.id) &&
                                (null == E || E.moveForward());
                        } else
                            p(
                                (0, r.jsx)(m.hT, {
                                    error: h({
                                        id: "error-messages.error-during-action",
                                    }),
                                }),
                                { containerId: d },
                            );
                    }
                });
            };
        },
        82684: (e) => {
            e.exports = {
                message: "NotificationDislike_message__R2jfZ",
                text: "NotificationDislike_text__xmrnn",
                cover: "NotificationDislike_cover__bvqFM",
                image: "NotificationDislike_image__h0_EO",
            };
        },
        97004: (e, t, i) => {
            "use strict";
            i.d(t, { NotificationDislike: () => m });
            var r = i(33008),
                n = i(85896),
                a = i(66268),
                l = i(96560),
                s = i(54487),
                o = i(77868),
                u = i(18740),
                d = i(82684),
                c = i.n(d);
            let m = (e) => {
                let {
                        coverUri: t,
                        title: i,
                        isDisliked: d,
                        closeToast: m,
                        className: g,
                        entityVariant: v,
                    } = e,
                    E = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(s.Paper, {
                                className: c().cover,
                                radius: "s",
                                children: (0, r.jsx)(u.BW, {
                                    className: c().image,
                                    src: t,
                                    alt: i,
                                    size: 100,
                                    fit: "cover",
                                    withAvatarReplace: !0,
                                }),
                            }),
                        [t, i],
                    ),
                    p = (0, a.useMemo)(() => {
                        if (d)
                            switch (v) {
                                case u.cp.PODCAST_EPISODE:
                                    return (0, r.jsx)(l.A, {
                                        id: "notifications-info.podcast-episode-unavailable-in-recommendations",
                                    });
                                case u.cp.AUDIOBOOK_EPISODE:
                                    return (0, r.jsx)(l.A, {
                                        id: "notifications-info.audiobook-episode-unavailable-in-recommendations",
                                    });
                                default:
                                    return (0, r.jsx)(l.A, {
                                        id: "notifications-info.track-unavailable-in-recommendations",
                                    });
                            }
                        switch (v) {
                            case u.cp.PODCAST_EPISODE:
                                return (0, r.jsx)(l.A, {
                                    id: "notifications-info.podcast-episode-available-in-recommendations",
                                });
                            case u.cp.AUDIOBOOK_EPISODE:
                                return (0, r.jsx)(l.A, {
                                    id: "notifications-info.audiobook-episode-available-in-recommendations",
                                });
                            default:
                                return (0, r.jsx)(l.A, {
                                    id: "notifications-info.track-available-in-recommendations",
                                });
                        }
                    }, [v, d]);
                return (0, r.jsx)(u.$W, {
                    className: (0, n.$)(c().root, g),
                    closeToast: m,
                    message: (0, r.jsxs)("div", {
                        className: c().message,
                        children: [
                            E,
                            (0, r.jsx)(o.Caption, {
                                className: c().text,
                                variant: "div",
                                type: "controls",
                                size: "m",
                                children: p,
                            }),
                        ],
                    }),
                });
            };
        },
    },
]);
