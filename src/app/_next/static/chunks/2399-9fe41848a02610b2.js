(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2399],
  {
    32399: function (e, i, t) {
      "use strict";
      t.d(i, {
        yp: function () {
          return U;
        },
        DR: function () {
          return M.ListeningProgress;
        },
        bP: function () {
          return j;
        },
        h0: function () {
          return p.h;
        },
        xZ: function () {
          return w.RemoveButton;
        },
        XK: function () {
          return C;
        },
        v_: function () {
          return s;
        },
        cU: function () {
          return o;
        },
        jT: function () {
          return x;
        },
        v$: function () {
          return F;
        },
        Ni: function () {
          return E;
        },
        tx: function () {
          return b.t;
        },
        jp: function () {
          return h;
        },
        wM: function () {
          return y;
        },
        Ey: function () {
          return g.useMarkListenedClick;
        },
        KX: function () {
          return I.useOnDislikeClick;
        },
        SB: function () {
          return k.useOnLikeClick;
        },
        OC: function () {
          return O.useOnModifyPlayQueue;
        },
        yv: function () {
          return L.useOnPromoLandingLikeClick;
        },
        S6: function () {
          return S.useProgressTimeNonMusic;
        },
        tl: function () {
          return P.useTimeLeftText;
        },
      });
      var n,
        r,
        a,
        l,
        s,
        o,
        u,
        d,
        c = t(22874);
      (l || (l = {})).SMART_PREVIEW = "smart_preview";
      var v = t(13534);
      let m = (e, i) =>
          (0, c.pj)({
            endPositionSec: null == e ? void 0 : e.endPositionSec,
            hasEverFinished:
              (null == i ? void 0 : i.hasEverFinished) ||
              (null == e ? void 0 : e.everFinished),
          }),
        f = (e) =>
          (0, c.pj)({
            bpm: null == e ? void 0 : e.bpm,
            energy: null == e ? void 0 : e.energy,
            hue: null == e ? void 0 : e.hue,
            userCollectionHue: null == e ? void 0 : e.userCollectionHue,
          }),
        E = (e, i) => {
          var t, n, r, a, s, o, u, d, E, h;
          e = e || {};
          let { isSmartPreview: y, hasEverFinished: p } = i || {},
            g = (0, v.Usz)(null == e ? void 0 : e.derivedColors),
            b = y
              ? null === (t = e.smartPreviewParams) || void 0 === t
                ? void 0
                : t.durationMs
              : null == e
                ? void 0
                : e.durationMs,
            I = (0, c.pj)({
              isAvailable: !!(null === (n = e.specialAudioResources) ||
              void 0 === n
                ? void 0
                : n.includes(l.SMART_PREVIEW)),
            });
          return (0, c.pj)({
            id: (e.id || 0).toString(),
            isAvailable: !!(null == e ? void 0 : e.available),
            isRemoved: (null == e ? void 0 : e.error) === "not-found",
            title:
              null !== (E = null == e ? void 0 : e.title) && void 0 !== E
                ? E
                : "",
            version: null == e ? void 0 : e.version,
            durationMs: b,
            coverUri: null == e ? void 0 : e.coverUri,
            averageColor: g,
            trackParameters: f(null == e ? void 0 : e.trackParameters),
            trackSource: null == e ? void 0 : e.trackSource,
            albumId:
              null === (a = e.albums) || void 0 === a
                ? void 0
                : null === (r = a[0]) || void 0 === r
                  ? void 0
                  : r.id,
            disclaimers: e.disclaimers,
            type: e.type,
            pubDate: e.pubDate,
            hasLyrics:
              null === (s = e.lyricsInfo) || void 0 === s
                ? void 0
                : s.hasAvailableTextLyrics,
            hasSyncLyrics:
              null === (o = e.lyricsInfo) || void 0 === o
                ? void 0
                : o.hasAvailableSyncLyrics,
            shouldRememberPosition: e.rememberPosition,
            streamProgress: m(null == e ? void 0 : e.streamProgress, {
              hasEverFinished: p,
            }),
            shortDescription:
              null !== (h = e.shortDescription) && void 0 !== h ? h : "",
            trailer: I,
            clipIds: e.clipIds,
            major: e.major,
            genre:
              null === (d = e.albums) || void 0 === d
                ? void 0
                : null === (u = d[0]) || void 0 === u
                  ? void 0
                  : u.genre,
            realId: e.realId,
          });
        },
        h = (e) =>
          (0, c.pj)({ id: e.id, name: e.name, prettyName: e.prettyName }),
        y = (e) => ({ id: e.id, albumId: e.albumId, timestamp: e.timestamp });
      ((n = s || (s = {})).TOO_MANY_FILES = "TOO_MANY_FILES"),
        (n.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
        ((r = o || (o = {})).IDLE = "IDLE"),
        (r.PREPARE = "PREPARE"),
        (r.UPLOADING = "UPLOADING"),
        (r.PROCESSING = "PROCESSING"),
        (r.RESOLVE = "RESOLVE"),
        (r.REJECT = "REJECT"),
        (r.CANCELLED = "CANCELLED");
      var p = t(77844),
        g = t(95792),
        b = t(86101),
        I = t(88198),
        k = t(23780),
        O = t(93034),
        L = t(22221),
        S = t(67466),
        P = t(22456),
        R = t(94123);
      ((a = u || (u = {})).OWN = "OWN"),
        (a.UGC = "UGC"),
        (a.OWN_REPLACED_TO_UGC = "OWN_REPLACED_TO_UGC"),
        (a.EXTERNAL = "EXTERNAL");
      var A = t(97472),
        T = t(40892),
        N = t(14617);
      let C = c.V5.model("StreamProgress", {
          endPositionSec: c.V5.maybe(c.V5.number),
          hasEverFinished: c.V5.maybe(c.V5.boolean),
        }).actions((e) => ({
          updateEndPositionSec: (i) => {
            e.endPositionSec = i;
          },
          updateEverFinished: (i) => {
            e.hasEverFinished = i;
          },
          markListened: (0, c.ls)(function* (i) {
            let { streamsResource: t, modelActionsLogger: n } = (0, c.dU)(e);
            try {
              return yield t.markFinished(i);
            } catch (e) {
              return n.error(e), N.P.ERROR;
            }
          }),
          markUnlistened: (0, c.ls)(function* (i) {
            let { streamsResource: t, modelActionsLogger: n } = (0, c.dU)(e);
            try {
              return yield t.markUnfinished(i);
            } catch (e) {
              return n.error(e), N.P.ERROR;
            }
          }),
        })),
        _ = c.V5.model("TrackMajor", {
          id: c.V5.maybeNull(c.V5.number),
          name: c.V5.maybeNull(c.V5.string),
        }),
        D = c.V5.model("TrackParameters", {
          bpm: c.V5.maybe(c.V5.number),
          energy: c.V5.maybe(c.V5.number),
          hue: c.V5.maybe(c.V5.number),
          userCollectionHue: c.V5.maybe(c.V5.number),
        }),
        V = [R.V.MUSIC, R.V.TRACK, R.V.NOISE, R.V.ASMR],
        U = c.V5.compose(
          c.V5.model("BaseTrack", {
            id: c.V5.string,
            isAvailable: c.V5.boolean,
            isRemoved: c.V5.boolean,
            title: c.V5.string,
            trackSource: c.V5.maybe(c.V5.enumeration(Object.values(u))),
            version: c.V5.maybe(c.V5.string),
            durationMs: c.V5.maybe(c.V5.number),
            coverUri: c.V5.maybe(c.V5.string),
            averageColor: c.V5.maybe(c.V5.string),
            trackParameters: c.V5.maybe(D),
            albumId: c.V5.maybe(c.V5.number),
            disclaimers: c.V5.maybe(c.V5.array(c.V5.string)),
            type: c.V5.maybe(c.V5.enumeration(Object.values(R.V))),
            pubDate: c.V5.maybe(c.V5.string),
            hasLyrics: c.V5.maybe(c.V5.boolean),
            hasSyncLyrics: c.V5.maybe(c.V5.boolean),
            trailer: c.V5.maybe(T.K8),
            shouldRememberPosition: c.V5.maybe(c.V5.boolean),
            streamProgress: c.V5.maybe(C),
            shortDescription: c.V5.maybe(c.V5.string),
            major: c.V5.maybeNull(_),
            clipIds: c.V5.maybeNull(c.V5.array(c.V5.number)),
            genre: c.V5.maybeNull(c.V5.string),
            realId: c.V5.maybe(c.V5.string),
          }),
          T.ie,
        )
          .views((e) => {
            let i = {
              get isLiked() {
                if ((0, c.fh)(e)) {
                  let { library: i } = (0, c.yj)(e);
                  return i.isTrackLiked(e.id);
                }
                return !1;
              },
              get isDownloaded() {
                if (!(0, c.fh)(e)) return !1;
                let { slam: i } = (0, c.yj)(e);
                return i.isTrackDownloaded(e.id);
              },
              get isDownloading() {
                if (!(0, c.fh)(e)) return !1;
                let { slam: i } = (0, c.yj)(e);
                return i.isTrackDownloading(e.id);
              },
              get downloadingProgress() {
                if (!(0, c.fh)(e)) return 0;
                let { slam: i } = (0, c.yj)(e);
                return i.getTrackDownloadingProgress(e.id);
              },
              get isAvailableForDownload() {
                if (!(0, c.fh)(e)) return !1;
                return (e.type && V.includes(e.type)) || !!i.isUGC;
              },
              get url() {
                if (e.albumId)
                  return "/album/".concat(e.albumId, "/track/").concat(e.id);
                return "/track/".concat(e.id);
              },
              get albumUrl() {
                return "/album/".concat(e.albumId);
              },
              get isDisliked() {
                if ((0, c.fh)(e)) {
                  let { library: i } = (0, c.yj)(e);
                  return i.isTrackDisliked(e.id);
                }
                return !1;
              },
              get isTrackPodcast() {
                if ((0, c.fh)(e)) return e.type === R.V.PODCAST;
                return !1;
              },
              get isPlusSubscribed() {
                if (!(0, c.fh)(e)) return !1;
                let { user: i } = (0, c.yj)(e);
                return i.hasPlus;
              },
              get isSyncLyricsAvailableWithOfflineFeature() {
                if (!(0, c.fh)(e)) return !1;
                let { slam: i } = (0, c.yj)(e);
                return !!e.hasSyncLyrics && !i.isOfflineModeEnabled;
              },
              get isSyncLyricsAvailable() {
                return (
                  this.isPlusSubscribed &&
                  this.isSyncLyricsAvailableWithOfflineFeature
                );
              },
              get isLyricsAvailable() {
                if (!(0, c.fh)(e)) return !1;
                let { slam: i, user: t } = (0, c.yj)(e);
                if (!t.hasPlus) return !1;
                return !!e.hasLyrics && !i.isOfflineModeEnabled;
              },
              get isTrackAudiobook() {
                if ((0, c.fh)(e)) return e.type === R.V.AUDIOBOOK;
                return !1;
              },
              get isTrackFairyTale() {
                if ((0, c.fh)(e)) return e.type === R.V.FAIRY_TALE;
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
                if ((0, c.fh)(e))
                  return e.type === R.V.TRACK || e.type === R.V.MUSIC;
                return !1;
              },
              get isUGC() {
                if ((0, c.fh)(e)) return e.trackSource === u.UGC;
                return;
              },
              get isOwn() {
                if ((0, c.fh)(e)) return e.trackSource === u.OWN;
                return;
              },
              get isOwnReplacedToUGC() {
                if ((0, c.fh)(e))
                  return e.trackSource === u.OWN_REPLACED_TO_UGC;
                return;
              },
              get seeds() {
                return ["track:".concat(e.id)];
              },
              get modalDisclaimerId() {
                if (e.disclaimers) {
                  var t;
                  let i =
                    null === (t = (0, v.UY5)(e.disclaimers, A.e.MODAL)) ||
                    void 0 === t
                      ? void 0
                      : t[0];
                  if (i) {
                    let { id: e } = i;
                    return e;
                  }
                }
                return null;
              },
              get isLegalRejected() {
                var n;
                if (!(0, c.fh)(e) || !e.disclaimers || e.isAvailable) return !1;
                let i =
                  null === (n = (0, v.UY5)(e.disclaimers, A.e.MODAL)) ||
                  void 0 === n
                    ? void 0
                    : n[0];
                return (null == i ? void 0 : i.type) === A.e.MODAL;
              },
              get isUnsafeLegal() {
                if (!(0, c.fh)(e)) return !1;
                if (e.disclaimers) {
                  var r;
                  let i =
                    null === (r = (0, v.UY5)(e.disclaimers, A.e.MODAL)) ||
                    void 0 === r
                      ? void 0
                      : r[0];
                  return (
                    e.isAvailable && (null == i ? void 0 : i.type) === A.e.MODAL
                  );
                }
                return !1;
              },
              get entityId() {
                if (e.albumId) return "".concat(e.id, ":").concat(e.albumId);
                return e.id;
              },
              get hasAlbumLink() {
                if (!(0, c.fh)(e)) return !1;
                return !!(e.albumId && this.isOwn && e.isAvailable);
              },
              get hasTrackLink() {
                if (!(0, c.fh)(e)) return !1;
                let {
                  settings: { isMobile: i },
                  sonataState: { isGenerativeContext: t },
                } = (0, c.yj)(e);
                return (
                  e.isAvailable &&
                  !this.isUGC &&
                  !this.isOwnReplacedToUGC &&
                  !i &&
                  !t
                );
              },
              get isNonUserGenerated() {
                if (!(0, c.fh)(e)) return !1;
                return !i.isUGC && !i.isOwnReplacedToUGC;
              },
              get hasModalAccess() {
                var a;
                return !!(null === (a = e.disclaimers) || void 0 === a
                  ? void 0
                  : a.includes(A.e.MODAL));
              },
            };
            return i;
          })
          .actions((e) => ({
            afterCreate() {
              e.trackType = e.type;
            },
            toggleLike: (0, c.ls)(function* () {
              if (!(0, c.fh)(e)) return;
              let { library: i, user: t } = (0, c.yj)(e);
              if (t.isAuthorized)
                return yield i.toggleTrackLike({
                  entityId: e.id,
                  albumId: e.albumId,
                  userId: t.account.data.uid,
                });
            }),
            toggleDislike: (0, c.ls)(function* () {
              if (!(0, c.fh)(e)) return;
              let { library: i, user: t } = (0, c.yj)(e);
              if (t.isAuthorized)
                return yield i.toggleTrackDislike({
                  entityId: e.id,
                  albumId: e.albumId,
                  userId: t.account.data.uid,
                });
            }),
            setListeningFinishedStatus: (0, c.ls)(function* () {
              let i = e.streamProgress;
              if (i)
                return (null == i ? void 0 : i.hasEverFinished)
                  ? yield null == i
                      ? void 0
                      : i.markUnlistened({ trackId: Number(e.id) })
                  : yield null == i
                      ? void 0
                      : i.markListened({ trackId: Number(e.id) });
            }),
            getKey: (i) => "".concat(i, "_").concat(e.id),
          })),
        j = c.V5.model("MajorModel", {
          id: c.V5.number,
          name: c.V5.string,
          prettyName: c.V5.maybeNull(c.V5.string),
        });
      (d || (d = {})).TOO_MANY_FILES = "TOO_MANY_FILES";
      let x = c.V5.model("TrackUgcUploadModel", {
          loadingState: c.V5.enumeration(Object.values(o)),
          errorReason: c.V5.maybeNull(c.V5.enumeration(Object.values(s))),
          playlistKind: c.V5.number,
          trackId: c.V5.maybeNull(c.V5.string),
          uploadUrl: c.V5.maybeNull(c.V5.string),
        })
          .volatile(() => ({ file: null, abortController: null }))
          .actions((e) => {
            let i = {
              setFile(i) {
                e.file = i;
              },
              getUploadUrl: (0, c.ls)(function* () {
                if (!(0, c.fh)(e)) return;
                let { loaderResource: i, modelActionsLogger: t } = (0, c.dU)(e),
                  { user: n } = (0, c.yj)(e);
                if (![o.IDLE, o.REJECT].includes(e.loadingState)) return;
                e.loadingState = o.PREPARE;
                let r = n.account.data.uid;
                if (r)
                  try {
                    var a;
                    let t =
                        null === (a = e.file) || void 0 === a ? void 0 : a.name,
                      n = yield i.getUploadUrl({
                        playlistId: "".concat(r, ":").concat(e.playlistKind),
                        uid: r,
                        path: t,
                      });
                    if (n && "result" in n && n.result === d.TOO_MANY_FILES) {
                      (e.loadingState = o.REJECT),
                        (e.errorReason = s.TOO_MANY_FILES);
                      return;
                    }
                    if (n && "post-target" in n && "ugc-track-id" in n) {
                      (e.uploadUrl = n["post-target"]),
                        (e.trackId = n["ugc-track-id"]);
                      return;
                    }
                    (e.errorReason = s.UNKNOWN_ERROR),
                      (e.loadingState = o.REJECT);
                    return;
                  } catch (i) {
                    (e.loadingState = o.REJECT), t.error(i);
                    return;
                  }
              }),
              uploadFile: (0, c.ls)(function* () {
                if (!(0, c.fh)(e)) return;
                let { prefixlessResource: i, modelActionsLogger: t } = (0,
                c.dU)(e);
                if (e.loadingState === o.PREPARE && e.uploadUrl && e.file) {
                  e.loadingState = o.UPLOADING;
                  try {
                    let t = new FormData();
                    t.append("file", e.file);
                    let n = new AbortController(),
                      r = n.signal;
                    (e.abortController = n),
                      yield i.uploadFile(
                        { url: e.uploadUrl, formData: t },
                        { signal: r },
                      ),
                      (e.loadingState = o.PROCESSING);
                    return;
                  } catch (i) {
                    (e.loadingState = o.REJECT), t.error(i);
                    return;
                  }
                }
              }),
              runUpload: (0, c.ls)(function* () {
                (0, c.fh)(e) &&
                  (yield i.getUploadUrl(),
                  e.loadingState !== o.REJECT && (yield i.uploadFile()));
              }),
              retryUpload() {
                if ((this.reset(), !(0, c.fh)(e))) return;
                let { ugcUploadCenter: i } = (0, c.yj)(e);
                i.runUploadTracksQueue();
              },
              abortUpload() {
                var i;
                if (
                  ((e.loadingState = o.CANCELLED),
                  null === (i = e.abortController) || void 0 === i || i.abort(),
                  !(0, c.fh)(e))
                )
                  return;
                let { ugcUploadCenter: t } = (0, c.yj)(e);
                t.clearCancelledUploads();
              },
              reset() {
                (e.loadingState = o.IDLE),
                  (e.trackId = null),
                  (e.uploadUrl = null),
                  (e.abortController = null);
              },
            };
            return i;
          }),
        F = c.V5.model("Ugc");
      var M = t(88112);
      t(54074), t(87864);
      var w = t(83020);
    },
    77844: function (e, i, t) {
      "use strict";
      var n, r;
      t.d(i, {
        h: function () {
          return n;
        },
      }),
        ((r = n || (n = {})).NEXT = "NEXT"),
        (r.LAST = "LAST"),
        (r.REMOVE = "REMOVE"),
        (r.HIDE = "HIDE");
    },
    95792: function (e, i, t) {
      "use strict";
      t.d(i, {
        useMarkListenedClick: function () {
          return d;
        },
      });
      var n = t(75441),
        r = t(9317),
        a = t(77959),
        l = t(14617),
        s = t(93093),
        o = t(13534),
        u = t(97141);
      let d = (e) => {
        let {
            user: i,
            fullscreenPlayer: t,
            sonataState: { entityMeta: d },
            album: c,
          } = (0, o.oR4)(),
          { notify: v } = (0, o.d$W)(),
          { formatMessage: m } = (0, r.Z)(),
          f = (0, o.R$C)();
        return (0, s.W)(async () => {
          if (!e) return;
          let r = t.modal.isOpened ? o.W$x.FULLSCREEN_ERROR : o.W$x.ERROR;
          if (!i.isAuthorized) {
            v(
              (0, n.jsx)(u.Q, {
                error: m({ id: "authorization-messages.need-to-authorizate" }),
              }),
              { containerId: r },
            );
            return;
          }
          let s = e.streamProgress,
            E =
              (null == d ? void 0 : d.id) === e.id &&
              (null == d ? void 0 : d.albumId) === e.albumId;
          if ((await e.setListeningFinishedStatus()) !== l.P.OK)
            v(
              (0, n.jsx)(u.Q, {
                error: m({ id: "error-messages.error-during-action" }),
              }),
              { containerId: r },
            );
          else {
            var h, y;
            let i = !(null == s ? void 0 : s.hasEverFinished),
              t = null == f ? void 0 : f.state.queueState.entityList.value,
              n =
                null == t
                  ? void 0
                  : t.find((i) => {
                      let { entity: t } = i;
                      if ((0, a.O)(t)) {
                        var n, r;
                        let i = t.data.meta;
                        return (
                          i.realId === e.id &&
                          (null === (r = i.albums) || void 0 === r
                            ? void 0
                            : null === (n = r[0]) || void 0 === n
                              ? void 0
                              : n.id) === e.albumId
                        );
                      }
                      return !1;
                    });
            n && (n.entity.everFinished = !!i),
              E &&
                (null == d ? void 0 : d.streamProgress) &&
                (null === (h = d.streamProgress) || void 0 === h
                  ? void 0
                  : h.hasEverFinished) !== i &&
                (d.streamProgress.updateEverFinished(i),
                i && d.streamProgress.updateEndPositionSec(0)),
              (null === (y = c.meta) || void 0 === y
                ? void 0
                : y.listeningFinished) &&
                !i &&
                (c.markTracksFinished({ withoutTracks: [e.id] }),
                c.setAlbumUnfinished(),
                c.setAllTracksUnfinished(!1)),
              null == s || s.updateEverFinished(i),
              c.meta && i && c.checkAllAlbumTrackFinished();
          }
        });
      };
    },
    86101: function (e, i, t) {
      "use strict";
      t.d(i, {
        C: function () {
          return s;
        },
        t: function () {
          return l;
        },
      });
      var n = t(94123),
        r = t(13534),
        a = t(97141);
      let l = (e, i) => {
          if (!i || !e) return a.j9.TRACK;
          switch (e.type) {
            case n.V.PODCAST:
              return a.j9.PODCAST_EPISODE;
            case n.V.AUDIOBOOK:
              return a.j9.AUDIOBOOK_EPISODE;
            default:
              return a.j9.TRACK;
          }
        },
        s = (e) => l(e, (0, r.RVp)());
    },
    95078: function (e, i, t) {
      "use strict";
      t.d(i, {
        X: function () {
          return f;
        },
      });
      var n = t(75441),
        r = t(37285),
        a = t(65067),
        l = t(9317),
        s = t(44122),
        o = t(89143),
        u = t(70365),
        d = t(93093),
        c = t(13534),
        v = t(97141),
        m = t(87864);
      let f = () => {
        let { notify: e } = (0, c.d$W)(),
          [i, t] = (0, a.useState)(!1),
          { formatMessage: f } = (0, l.Z)(),
          E = (0, c.R$C)();
        return (0, d.W)(async (a) => {
          let {
            track: l,
            withLink: d = !0,
            infoContainerId: c,
            errorContainerId: h,
            withNotification: y = !0,
            playbackId: p,
          } = a;
          if (i) return;
          let g = { ...(0, r.ZN)(l), isLiked: !l.isLiked };
          t(!0);
          let b = await l.toggleLike();
          if ((t(!1), b === o.B.OK)) {
            let e = g.isLiked ? u.C.LIKE : u.C.UNLIKE,
              i = null == E ? void 0 : E.getState(p);
            if (i && (0, s.x)(null == i ? void 0 : i.currentContext.value)) {
              let t = i.queueState.entityList.value.find((e) => {
                let { entity: i } = e;
                return i.data.meta.id === g.id;
              });
              t &&
                i.currentContext.value.sendFeedback({
                  type: e,
                  entity: t.entity,
                });
            }
          }
          y &&
            (b === o.B.OK
              ? e((0, n.jsx)(m.NotificationLike, { withLink: d, track: g }), {
                  containerId: c,
                })
              : e(
                  (0, n.jsx)(v.Q, {
                    error: f({ id: "error-messages.error-during-action" }),
                  }),
                  { containerId: h },
                ));
        });
      };
    },
    88198: function (e, i, t) {
      "use strict";
      t.d(i, {
        useOnDislikeClick: function () {
          return E;
        },
      });
      var n = t(75441),
        r = t(37285),
        a = t(65067),
        l = t(9317),
        s = t(44122),
        o = t(89143),
        u = t(70365),
        d = t(93093),
        c = t(13534),
        v = t(97141),
        m = t(54074),
        f = t(86101);
      let E = (e) => {
        let { user: i, fullscreenPlayer: t } = (0, c.oR4)(),
          E = (0, c.R$C)(),
          { notify: h } = (0, c.d$W)(),
          [y, p] = (0, a.useState)(!1),
          { formatMessage: g } = (0, l.Z)(),
          b = (0, f.C)(e);
        return (0, d.W)(async () => {
          if (e) {
            let l = t.modal.isOpened ? c.W$x.FULLSCREEN_INFO : c.W$x.INFO,
              d = t.modal.isOpened ? c.W$x.FULLSCREEN_ERROR : c.W$x.ERROR;
            if (!i.isAuthorized) {
              h(
                (0, n.jsx)(v.Q, {
                  error: g({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: d },
              );
              return;
            }
            if (y) return;
            let f = { ...(0, r.ZN)(e), isDisliked: !e.isDisliked };
            p(!0);
            let I = await e.toggleDislike();
            if ((p(!1), I === o.B.OK)) {
              var a;
              h(
                (0, n.jsx)(m.NotificationDislike, {
                  coverUri: f.coverUri,
                  isDisliked: f.isDisliked,
                  title: f.title,
                  entityVariant: b,
                }),
                { containerId: l },
              );
              let e = f.isDisliked ? u.C.DISLIKE : u.C.UNDISLIKE;
              if (E && (0, s.x)(E.state.currentContext.value)) {
                let i = E.state.queueState.entityList.value.find((e) => {
                  let { entity: i } = e;
                  return i.data.meta.id === f.id;
                });
                i &&
                  (await E.state.currentContext.value.sendFeedback({
                    type: e,
                    entity: i.entity,
                  }));
              }
              f.isDisliked &&
                f.id ===
                  (null == E
                    ? void 0
                    : null === (a = E.state.queueState.currentEntity.value) ||
                        void 0 === a
                      ? void 0
                      : a.entity.data.meta.id) &&
                (null == E || E.moveForward());
            } else
              h(
                (0, n.jsx)(v.Q, {
                  error: g({ id: "error-messages.error-during-action" }),
                }),
                { containerId: d },
              );
          }
        });
      };
    },
    23780: function (e, i, t) {
      "use strict";
      t.d(i, {
        useOnLikeClick: function () {
          return u;
        },
      });
      var n = t(75441),
        r = t(9317),
        a = t(93093),
        l = t(13534),
        s = t(97141),
        o = t(95078);
      let u = (e) => {
        let { user: i, fullscreenPlayer: t } = (0, l.oR4)(),
          { notify: u } = (0, l.d$W)(),
          { formatMessage: d } = (0, r.Z)(),
          c = (0, o.X)();
        return (0, a.W)(async () => {
          if (!e) return;
          let r = t.modal.isOpened ? l.W$x.FULLSCREEN_INFO : l.W$x.INFO,
            a = t.modal.isOpened ? l.W$x.FULLSCREEN_ERROR : l.W$x.ERROR;
          if (!i.isAuthorized) {
            u(
              (0, n.jsx)(s.Q, {
                error: d({ id: "authorization-messages.need-to-authorizate" }),
              }),
              { containerId: a },
            );
            return;
          }
          return c({ track: e, errorContainerId: a, infoContainerId: r });
        });
      };
    },
    93034: function (e, i, t) {
      "use strict";
      t.d(i, {
        useOnModifyPlayQueue: function () {
          return b;
        },
      });
      var n = t(75441),
        r = t(93093),
        a = t(98375),
        l = t(13534),
        s = t(65067),
        o = t(15937),
        u = t(35846),
        d = t(17392),
        c = t(97141),
        v = t(77844),
        m = t(37544),
        f = t.n(m);
      let E = (e, i) => {
          switch (e) {
            case c.j9.TRACK:
              return (0, n.jsx)(o.Z, {
                id: "play-queue.track-will-be-played-next",
                values: { title: i },
              });
            case c.j9.PODCAST_EPISODE:
              return (0, n.jsx)(o.Z, {
                id: "play-queue.podcast-episode-will-be-played-next",
                values: { title: i },
              });
            case c.j9.AUDIOBOOK_EPISODE:
              return (0, n.jsx)(o.Z, {
                id: "play-queue.audiobook-episode-will-be-played-next",
                values: { title: i },
              });
          }
        },
        h = (e, i) => {
          switch (e) {
            case c.j9.TRACK:
              return (0, n.jsx)(o.Z, {
                id: "play-queue.track-will-be-played-last",
                values: { title: i },
              });
            case c.j9.PODCAST_EPISODE:
              return (0, n.jsx)(o.Z, {
                id: "play-queue.podcast-episode-will-be-played-last",
                values: { title: i },
              });
            case c.j9.AUDIOBOOK_EPISODE:
              return (0, n.jsx)(o.Z, {
                id: "play-queue.audiobook-episode-will-be-played-last",
                values: { title: i },
              });
          }
        },
        y = (e, i) => {
          switch (e) {
            case c.j9.TRACK:
              return (0, n.jsx)(o.Z, {
                id: "play-queue.track-will-be-removed",
                values: { title: i },
              });
            case c.j9.PODCAST_EPISODE:
              return (0, n.jsx)(o.Z, {
                id: "play-queue.podcast-episode-will-be-removed",
                values: { title: i },
              });
            case c.j9.AUDIOBOOK_EPISODE:
              return (0, n.jsx)(o.Z, {
                id: "play-queue.audiobook-episode-will-be-removed",
                values: { title: i },
              });
          }
        },
        p = (e) => {
          let {
              closeToast: i,
              entityVariant: t,
              entityTitle: r,
              coverUri: a,
              variant: l,
            } = e,
            o = (0, s.useMemo)(
              () =>
                (0, n.jsxs)(d.Caption, {
                  className: f().entityTitle,
                  variant: "span",
                  type: "controls",
                  size: "m",
                  lineClamp: 1,
                  children: ["\xa0", r, "\xa0"],
                }),
              [r],
            ),
            m = (0, s.useMemo)(() => {
              switch (l) {
                case v.h.NEXT:
                  return E(t, o);
                case v.h.LAST:
                  return h(t, o);
                case v.h.HIDE:
                case v.h.REMOVE:
                  return y(t, o);
              }
            }, [l, t, o]);
          return (0, n.jsx)(c.Yj, {
            message: (0, n.jsx)(d.Caption, {
              className: f().text,
              variant: "div",
              type: "controls",
              size: "m",
              ...(0, u.BA)(u.FK.track.PLAY_QUEUE_NOTIFICATION_TEXT),
              children: m,
            }),
            cover: (0, n.jsx)(c.BE, {
              className: f().image,
              src: a,
              size: 100,
              fit: "cover",
              alt: r,
              withAvatarReplace: !0,
            }),
            closeToast: i,
          });
        };
      var g = t(86101);
      function b(e, i, t) {
        let { notify: s } = (0, l.d$W)(),
          { fullscreenPlayer: o } = (0, l.oR4)(),
          u = (0, l.R$C)(),
          d = (0, g.C)(e);
        return (0, r.W)(() => {
          if (!e) return;
          switch (i) {
            case v.h.LAST:
              null == u ||
                u.injectLast({
                  entitiesData: [
                    { type: a.RX.Unloaded, meta: { id: e.entityId } },
                  ],
                });
              break;
            case v.h.NEXT:
              null == u ||
                u.injectNext({
                  entitiesData: [
                    { type: a.RX.Unloaded, meta: { id: e.entityId } },
                  ],
                });
              break;
            case v.h.REMOVE:
              t && (null == u || u.removeAndLoadEntities({ positions: t }));
              break;
            case v.h.HIDE:
              (null == t ? void 0 : t.length) &&
                (null == u || u.hide({ positions: t }));
          }
          let r = o.modal.isOpened ? l.W$x.FULLSCREEN_INFO : l.W$x.INFO;
          s(
            (0, n.jsx)(p, {
              entityVariant: d,
              variant: i,
              entityTitle: e.title,
              coverUri: e.coverUri,
            }),
            { containerId: r },
          );
        });
      }
    },
    22221: function (e, i, t) {
      "use strict";
      t.d(i, {
        useOnPromoLandingLikeClick: function () {
          return l;
        },
      });
      var n = t(93093),
        r = t(13534),
        a = t(95078);
      let l = (e) => {
        let {
            user: i,
            modals: { promoLandingBuySubscriptionModal: t, crackdownModal: l },
            settings: { isMobile: s },
          } = (0, r.oR4)(),
          { isFreemium: o } = (0, r.NMB)(),
          u = (0, a.X)();
        return (0, n.W)(async () => {
          if (
            (!o ||
              (null == e ? void 0 : e.isLiked) ||
              (s ? t.open() : l.open()),
            i.isAuthorized && e)
          )
            return u({
              track: e,
              errorContainerId: r.W$x.ERROR,
              infoContainerId: r.W$x.INFO,
              withLink: !1,
              withNotification: i.hasPlus,
              playbackId: r.jiA.PROMO_LANDING,
            });
        });
      };
    },
    67466: function (e, i, t) {
      "use strict";
      t.d(i, {
        useProgressTimeNonMusic: function () {
          return a;
        },
      });
      var n = t(9317),
        r = t(13534);
      let a = (e, i) => {
        let { formatMessage: t } = (0, n.Z)(),
          { hours: a, minutes: l, seconds: s } = (0, r.tUQ)(e),
          { hours: o, minutes: u, seconds: d } = (0, r.tUQ)(i);
        return t(
          { id: "non-music.non-music-progress" },
          {
            progress: Math.round((e / i) * 100),
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
    22456: function (e, i, t) {
      "use strict";
      t.d(i, {
        useTimeLeftText: function () {
          return a;
        },
      });
      var n = t(65067),
        r = t(9317);
      let a = () => {
        let { formatMessage: e } = (0, r.Z)();
        return (0, n.useCallback)(
          function (i) {
            let t =
                !(arguments.length > 1) ||
                void 0 === arguments[1] ||
                arguments[1],
              n = Math.floor(i / 60),
              r = function (i) {
                let t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n = e({ id: "time.minutes-left" }, { minutes: i });
                return t
                  ? ""
                      .concat(e({ id: "time.left" }, { time: i }), " ")
                      .concat(n)
                  : n;
              };
            if (i < 1) return e({ id: "time.finished" });
            if (i < 60)
              return (function (i) {
                let t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n = e({ id: "time.seconds-left" }, { seconds: i });
                return t
                  ? ""
                      .concat(e({ id: "time.left" }, { time: i }), " ")
                      .concat(n)
                  : n;
              })(Math.floor(i), t);
            if (n < 60) return r(n, t);
            let a = n % 60,
              l = (function (i) {
                let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                return t
                  ? e({ id: "time.hours-left" }, { hours: i })
                  : e({ id: "time.hours" }, { hours: i });
              })(Math.floor(n / 60), t);
            return a > 0 ? "".concat(l, " ").concat(r(a)) : l;
          },
          [e],
        );
      };
    },
    88112: function (e, i, t) {
      "use strict";
      t.d(i, {
        ListeningProgress: function () {
          return y;
        },
      });
      var n = t(75441),
        r = t(32358),
        a = t(62569),
        l = t(65067),
        s = t(15937),
        o = t(60793),
        u = t(69756),
        d = t(17392),
        c = t(98375),
        v = t(13534),
        m = t(67466),
        f = t(22456),
        E = t(190),
        h = t.n(E);
      let y = (0, a.Pi)((e) => {
        var i, t, a, E, y, p, g, b, I;
        let {
            className: k,
            id: O,
            albumId: L,
            streamProgress: S,
            durationMs: P,
            playContextParams: R,
            withTimeLeftText: A = !0,
            isFinishedLabelHidden: T,
          } = e,
          N = (0, v.R$C)(),
          { sonataState: C, album: _ } = (0, v.oR4)(),
          D = Math.floor(P / 1e3),
          [V, U] = (0, l.useState)(!1),
          j = (0, f.useTimeLeftText)(),
          { isPlaying: x, isCurrent: F } = (0, v.qmq)({
            playContextParams: R,
            entityId: L ? "".concat(O, ":").concat(L) : O,
          });
        (0, l.useEffect)(() => {
          if (!F) {
            U(!1);
            return;
          }
          let e =
            null == N
              ? void 0
              : N.state.playerState.status.onChange(() => {
                  (null == N ? void 0 : N.state.playerState.status.value) ===
                    c.FY.BUFFERING && U(!0);
                });
          return () => {
            null == e || e();
          };
        }, [N, S, F, x]),
          (0, l.useEffect)(() => {
            var e;
            (
              null == _
                ? void 0
                : null === (e = _.meta) || void 0 === e
                  ? void 0
                  : e.listeningFinished
            )
              ? (S.updateEndPositionSec(0), S.updateEverFinished(!0))
              : (null == _ ? void 0 : _.allTracksUnfinished) &&
                S.updateEverFinished(!1);
          }, [
            S,
            null == _ ? void 0 : _.allTracksUnfinished,
            null == _
              ? void 0
              : null === (i = _.meta) || void 0 === i
                ? void 0
                : i.listeningFinished,
          ]),
          (0, l.useEffect)(() => {
            var e, i;
            F &&
              (null == C
                ? void 0
                : null === (e = C.entityMeta) || void 0 === e
                  ? void 0
                  : e.streamProgress) &&
              S &&
              C.entityMeta.streamProgress.hasEverFinished !==
                S.hasEverFinished &&
              S.updateEverFinished(
                !!C.entityMeta.streamProgress.hasEverFinished,
              ),
              D - ((null == S ? void 0 : S.endPositionSec) || 0) < 1 &&
                ((null == C
                  ? void 0
                  : null === (i = C.entityMeta) || void 0 === i
                    ? void 0
                    : i.streamProgress) &&
                  F &&
                  (C.entityMeta.streamProgress.updateEverFinished(!0),
                  C.entityMeta.streamProgress.updateEndPositionSec(0)),
                null == S || S.updateEverFinished(!0));
          }, [
            F,
            null == C
              ? void 0
              : null === (t = C.entityMeta) || void 0 === t
                ? void 0
                : t.streamProgress,
            null == C
              ? void 0
              : null === (E = C.entityMeta) || void 0 === E
                ? void 0
                : null === (a = E.streamProgress) || void 0 === a
                  ? void 0
                  : a.hasEverFinished,
            S,
            S.hasEverFinished,
            S.endPositionSec,
            D,
          ]),
          (0, l.useEffect)(() => {
            if (!F) return;
            let e =
              null == N
                ? void 0
                : N.state.playerState.progress.onChange(() => {
                    var e;
                    let i = N.state.playerState.progress.value,
                      t =
                        null == C
                          ? void 0
                          : null === (e = C.entityMeta) || void 0 === e
                            ? void 0
                            : e.streamProgress;
                    0 !== i.position && V && S.updateEndPositionSec(i.position),
                      F &&
                        parseInt(
                          "".concat(null == t ? void 0 : t.endPositionSec),
                          10,
                        ) !== parseInt("".concat(i.position), 10) &&
                        (null == t || t.updateEndPositionSec(i.position));
                  });
            return () => {
              null == e || e();
            };
          }, [N, S, F, x, V, O, null == C ? void 0 : C.entityMeta]);
        let M =
            (F &&
              (null == C
                ? void 0
                : null === (p = C.entityMeta) || void 0 === p
                  ? void 0
                  : null === (y = p.streamProgress) || void 0 === y
                    ? void 0
                    : y.endPositionSec)) ||
            S.endPositionSec,
          w = (0, m.useProgressTimeNonMusic)(null != M ? M : 0, D),
          K = (0, l.useMemo)(() => {
            var e, i, t;
            if (
              ((F &&
                (null == C
                  ? void 0
                  : null === (i = C.entityMeta) || void 0 === i
                    ? void 0
                    : null === (e = i.streamProgress) || void 0 === e
                      ? void 0
                      : e.hasEverFinished)) ||
                (null == S ? void 0 : S.hasEverFinished) ||
                (null == _
                  ? void 0
                  : null === (t = _.meta) || void 0 === t
                    ? void 0
                    : t.listeningFinished)) &&
              !T
            )
              return (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(d.Caption, {
                    lineClamp: 1,
                    variant: "div",
                    className: (0, r.W)(h().text, {
                      [h().text_withoutTimeLeft]: !A,
                    }),
                    children: (0, n.jsx)(s.Z, { id: "time.finished" }),
                  }),
                  (0, n.jsx)(u.Icon, {
                    size: "xxs",
                    variant: "check",
                    className: h().checkIcon,
                  }),
                ],
              });
            if (!M || 0 === M) return;
            let a = D - M,
              l = j(a);
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(d.Caption, {
                  lineClamp: 1,
                  variant: "div",
                  className: (0, r.W)(h().text, {
                    [h().text_withoutTimeLeft]: !A,
                  }),
                  children: l,
                }),
                a > 1 || T
                  ? (0, n.jsx)(o.m, {
                      "aria-valuetext": w,
                      "aria-busy": F && x,
                      value: M,
                      max: D,
                    })
                  : (0, n.jsx)(u.Icon, {
                      size: "xxs",
                      variant: "check",
                      className: h().checkIcon,
                    }),
              ],
            });
          }, [
            D,
            null == S ? void 0 : S.hasEverFinished,
            A,
            j,
            F,
            x,
            null == C
              ? void 0
              : null === (b = C.entityMeta) || void 0 === b
                ? void 0
                : null === (g = b.streamProgress) || void 0 === g
                  ? void 0
                  : g.hasEverFinished,
            null == _
              ? void 0
              : null === (I = _.meta) || void 0 === I
                ? void 0
                : I.listeningFinished,
            T,
            M,
            w,
          ]);
        return (0, n.jsx)("div", {
          className: (0, r.W)(h().root, k),
          children: K,
        });
      });
    },
    54074: function (e, i, t) {
      "use strict";
      t.d(i, {
        NotificationDislike: function () {
          return v;
        },
      });
      var n = t(75441),
        r = t(32358),
        a = t(65067),
        l = t(15937),
        s = t(59091),
        o = t(17392),
        u = t(97141),
        d = t(26410),
        c = t.n(d);
      let v = (e) => {
        let {
            coverUri: i,
            title: t,
            isDisliked: d,
            closeToast: v,
            className: m,
            entityVariant: f,
          } = e,
          E = (0, a.useMemo)(
            () =>
              (0, n.jsx)(s.Paper, {
                className: c().cover,
                radius: "s",
                children: (0, n.jsx)(u.BE, {
                  className: c().image,
                  src: i,
                  alt: t,
                  size: 100,
                  fit: "cover",
                  withAvatarReplace: !0,
                }),
              }),
            [i, t],
          ),
          h = (0, a.useMemo)(() => {
            if (d)
              switch (f) {
                case u.j9.PODCAST_EPISODE:
                  return (0, n.jsx)(l.Z, {
                    id: "notifications-info.podcast-episode-unavailable-in-recommendations",
                  });
                case u.j9.AUDIOBOOK_EPISODE:
                  return (0, n.jsx)(l.Z, {
                    id: "notifications-info.audiobook-episode-unavailable-in-recommendations",
                  });
                default:
                  return (0, n.jsx)(l.Z, {
                    id: "notifications-info.track-unavailable-in-recommendations",
                  });
              }
            else
              switch (f) {
                case u.j9.PODCAST_EPISODE:
                  return (0, n.jsx)(l.Z, {
                    id: "notifications-info.podcast-episode-available-in-recommendations",
                  });
                case u.j9.AUDIOBOOK_EPISODE:
                  return (0, n.jsx)(l.Z, {
                    id: "notifications-info.audiobook-episode-available-in-recommendations",
                  });
                default:
                  return (0, n.jsx)(l.Z, {
                    id: "notifications-info.track-available-in-recommendations",
                  });
              }
          }, [f, d]);
        return (0, n.jsx)(u.Yj, {
          className: (0, r.W)(c().root, m),
          closeToast: v,
          message: (0, n.jsxs)("div", {
            className: c().message,
            children: [
              E,
              (0, n.jsx)(o.Caption, {
                className: c().text,
                variant: "div",
                type: "controls",
                size: "m",
                children: h,
              }),
            ],
          }),
        });
      };
    },
    87864: function (e, i, t) {
      "use strict";
      t.d(i, {
        NotificationLike: function () {
          return c;
        },
      });
      var n = t(75441),
        r = t(62569),
        a = t(97141),
        l = t(86101),
        s = t(94123),
        o = t(13534);
      let u = "/collection",
        d = (e) => {
          if (!(0, o.RVp)()) return u;
          switch (e.type) {
            case s.V.PODCAST:
            case s.V.AUDIOBOOK:
              return "/collection/shelf/liked";
            default:
              return u;
          }
        },
        c = (0, r.Pi)((e) => {
          let { track: i, closeToast: t, withLink: r } = e,
            s = d(i),
            o = (0, l.C)(i);
          return (0, n.jsx)(a.AP, {
            closeToast: t,
            entityVariant: o,
            entityTitle: i.title,
            collectionUrl: s,
            coverUri: i.coverUri,
            isLiked: i.isLiked,
            withLink: r,
          });
        });
    },
    83020: function (e, i, t) {
      "use strict";
      t.d(i, {
        RemoveButton: function () {
          return u;
        },
      });
      var n = t(75441),
        r = t(65067),
        a = t(9317),
        l = t(35846),
        s = t(68208),
        o = t(69756);
      let u = (e) => {
        let {
            className: i,
            variant: t = "text",
            onClick: u,
            iconClassName: d,
            iconSize: c,
            size: v = "s",
          } = e,
          { formatMessage: m } = (0, a.Z)(),
          f = (0, r.useCallback)(
            (e) => {
              null == u || u(), e.stopPropagation();
            },
            [u],
          );
        return (0, n.jsx)(s.Button, {
          className: i,
          withRipple: !1,
          variant: t,
          size: v,
          radius: "round",
          "aria-label": m({ id: "play-queue.delete-from-queue" }),
          onClick: f,
          icon: (0, n.jsx)(o.Icon, {
            size: c,
            className: d,
            variant: "bucket",
          }),
          ...(0, l.BA)(l.FK.track.REMOVE_BUTTON),
        });
      };
    },
    190: function (e) {
      e.exports = {
        root: "ListeningProgress_root__Rvlcn",
        text_withoutTimeLeft: "ListeningProgress_text_withoutTimeLeft__eAmOF",
        checkIcon: "ListeningProgress_checkIcon___yh49",
      };
    },
    26410: function (e) {
      e.exports = {
        message: "NotificationDislike_message__R2jfZ",
        text: "NotificationDislike_text__xmrnn",
        cover: "NotificationDislike_cover__bvqFM",
        image: "NotificationDislike_image__h0_EO",
      };
    },
    37544: function (e) {
      e.exports = {
        entityTitle: "NotificationPlayQueue_entityTitle__XCIsa",
        entityLink: "NotificationPlayQueue_entityLink__O7tHL",
        text: "NotificationPlayQueue_text___1DWX",
        image: "NotificationPlayQueue_image__SLXsp",
      };
    },
    70365: function (e, i, t) {
      "use strict";
      var n, r;
      t.d(i, {
        C: function () {
          return n;
        },
      }),
        ((r = n || (n = {})).RADIO_STARTED = "radioStarted"),
        (r.TRACK_STARTED = "trackStarted"),
        (r.TRACK_FINISHED = "trackFinished"),
        (r.SKIP = "skip"),
        (r.SKIP_FAILED = "skipFailed"),
        (r.LIKE = "like"),
        (r.DISLIKE = "dislike"),
        (r.AD = "ad"),
        (r.JINGLE = "jingle"),
        (r.UNLIKE = "unlike"),
        (r.UNDISLIKE = "undislike"),
        (r.COMBINED_QUEUE_STARTED = "combinedQueueStarted"),
        (r.PLAYABLE_ITEM_STARTED = "playableItemStarted"),
        (r.PLAYABLE_ITEM_FINISHED = "playableItemFinished"),
        (r.PLAYABLE_ITEM_SKIP = "playableItemSkip"),
        (r.PLAYABLE_ITEM_LIKE = "playableItemLike"),
        (r.PLAYABLE_ITEM_DISLIKE = "playableItemDislike"),
        (r.PLAYABLE_ITEM_UNLIKE = "playableItemUnlike"),
        (r.PLAYABLE_ITEM_UNDISLIKE = "playableItemUndislike");
    },
    77959: function (e, i, t) {
      "use strict";
      t.d(i, {
        O: function () {
          return r;
        },
      });
      var n = t(81046);
      function r(e) {
        return (null == e ? void 0 : e.data.type) === n.A.Music;
      }
    },
    81046: function (e, i, t) {
      "use strict";
      var n, r;
      t.d(i, {
        A: function () {
          return n;
        },
      }),
        ((r = n || (n = {})).Music = "music"),
        (r.VibeTrack = "vibeTrack"),
        (r.Generative = "generative"),
        (r.Unknown = "unknown"),
        (r.SmartPreview = "smartPreview"),
        (r.Clip = "clip");
    },
  },
]);
