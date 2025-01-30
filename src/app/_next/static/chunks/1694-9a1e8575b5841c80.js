"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1694],
  {
    91694: function (e, t, i) {
      i.d(t, {
        KL: function () {
          return c;
        },
        S2: function () {
          return u;
        },
        Ib: function () {
          return m;
        },
        K3: function () {
          return p;
        },
        dU: function () {
          return k;
        },
        K8: function () {
          return V;
        },
        i_: function () {
          return v;
        },
        ie: function () {
          return T;
        },
        n4: function () {
          return R;
        },
        T2: function () {
          return w;
        },
        fE: function () {
          return G;
        },
        CU: function () {
          return U;
        },
        Al: function () {
          return _;
        },
        Vn: function () {
          return K;
        },
        ao: function () {
          return X;
        },
        $4: function () {
          return H;
        },
        tC: function () {
          return J;
        },
      });
      var r,
        s,
        l,
        n,
        a,
        o,
        d = i(2685);
      let c = d.V5.model("BaseModalModel", {
          isOpened: d.V5.optional(d.V5.boolean, !1),
        }).actions((e) => ({
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
        u = d.V5.model("CaseForms", {
          nominative: d.V5.optional(d.V5.string, ""),
          genitive: d.V5.optional(d.V5.string, ""),
          dative: d.V5.optional(d.V5.string, ""),
          accusative: d.V5.optional(d.V5.string, ""),
          instrumental: d.V5.optional(d.V5.string, ""),
          prepositional: d.V5.optional(d.V5.string, ""),
        }),
        m = d.V5.model("Cover", {
          uri: d.V5.maybe(d.V5.string),
          color: d.V5.maybe(d.V5.string),
          videoUrl: d.V5.maybe(d.V5.string),
        }),
        g = d.V5.model("DisclaimerDetails", {
          text: d.V5.maybe(d.V5.string),
          url: d.V5.maybe(d.V5.string),
        }),
        p = d.V5.model("DisclaimerData", {
          title: d.V5.maybe(d.V5.string),
          description: d.V5.maybe(d.V5.string),
          details: d.V5.maybe(g),
        }),
        k = d.V5.compose(d.V5.model({ id: d.V5.string, type: d.V5.string }), p),
        V = d.V5.model("DomainTrailerEntity", { isAvailable: d.V5.boolean });
      var y = i(76382),
        E = i(98654),
        I = i(17820);
      let b = d.V5.model("Experiment", {
          group: d.V5.maybe(d.V5.string),
          value: d.V5.maybe(d.V5.frozen()),
        }),
        v = d.V5.model("Experiments", {
          loadingState: d.V5.enumeration(Object.values(E.G)),
          experiments: d.V5.optional(d.V5.map(b), {}),
          overwrittenExperiments: d.V5.optional(d.V5.map(b), {}),
        })
          .views((e) => ({
            getOverwrittenExperiments() {
              let { containerStorage: t, config: i } = (0, d.dU)(e),
                r = t.get(I.B.OverwrittenExperiments);
              return !i.dev.allowOverwriteExperiments &&
                (null == r ? void 0 : r[y.p.WebNextAllowUnauthorized])
                ? {
                    [y.p.WebNextAllowUnauthorized]:
                      r[y.p.WebNextAllowUnauthorized],
                  }
                : i.dev.allowOverwriteExperiments
                  ? r
                  : null;
            },
            getExperiment(t) {
              var i;
              let r = e.experiments.get(t),
                s = this.getOverwrittenExperiments();
              return s && null !== (i = s[t]) && void 0 !== i ? i : r;
            },
            checkExperiment(t, i) {
                return (
                    (this.getOverwrittenExperiments()?.[t]?.group ??
                        window?.DEFAULT_EXPERIMENT_OVERRIDES()?.[t] ??
                        e.experiments.get(t)?.group) === i
                );
            },
            isRejected: () => e.loadingState === E.G.REJECT,
          }))
          .actions((e) => ({
            getData: (0, d.ls)(function* () {
              let { accountResource: t, modelActionsLogger: i } = (0, d.dU)(e);
              if (e.loadingState !== E.G.PENDING)
                try {
                  e.loadingState = E.G.PENDING;
                  let i = yield t.experimentsDetails();
                  e.experiments.clear(),
                    Object.entries(i).forEach((t) => {
                      let [i, r] = t;
                      e.experiments.set(i, r);
                    }),
                    (e.loadingState = E.G.RESOLVE);
                } catch (t) {
                  i.error(t), (e.loadingState = E.G.REJECT);
                } finally {
                  var r;
                  Object.entries(
                    null !== (r = e.getOverwrittenExperiments()) && void 0 !== r
                      ? r
                      : {},
                  ).forEach((t) => {
                    let [i, r] = t;
                    e.overwrittenExperiments.set(i, r);
                  });
                }
            }),
            updateOverwrittenExperiments(t, i) {
              let { config: r } = (0, d.dU)(e);
              r.dev.allowOverwriteExperiments &&
                e.overwrittenExperiments.set(t, i);
            },
            deleteOverwrittenExperiments(t) {
              let { config: i } = (0, d.dU)(e);
              i.dev.allowOverwriteExperiments &&
                e.overwrittenExperiments.delete(t);
            },
          }));
      var f = i(5831),
        L = i(35068),
        A = i(19522),
        S = i(13477),
        x = i(58997);
      let T = d.V5.model("ExplicitModel", {
        contentWarning: d.V5.maybe(d.V5.enumeration(Object.values(f.F))),
        trackType: d.V5.maybe(d.V5.enumeration(Object.values(L.V))),
        disclaimers: d.V5.maybe(d.V5.array(d.V5.string)),
      })
        .views((e) => ({
          get isExplicit() {
            return e.contentWarning === f.F.EXPLICIT;
          },
          get explicitDisclaimer() {
            var t, i, r, s, l;
            if (!(0, d.fh)(e) || !e.disclaimers) return null;
            let { experiments: n } = (0, d.yj)(e),
              a =
                null == n
                  ? void 0
                  : n.checkExperiment(x.peG.WebNextAllowExclamationIcon, "on"),
              o =
                null === (t = (0, x.V4d)(e.disclaimers, A.e.EXPLICIT_ICON)) ||
                void 0 === t
                  ? void 0
                  : t[0],
              c =
                null === (i = (0, x.V4d)(e.disclaimers, A.e.AGE_18_ICON)) ||
                void 0 === i
                  ? void 0
                  : i[0],
              u =
                null ===
                  (r = (0, x.V4d)(e.disclaimers, A.e.EXCLAMATION_ICON)) ||
                void 0 === r
                  ? void 0
                  : r[0];
            if (a && (null == u ? void 0 : u.type) === A.e.EXCLAMATION_ICON)
              return S.ExplicitMarkVariant.EXCLAMATION;
            if (
              (a && o) ||
              (!a &&
                (null === (s = e.disclaimers) || void 0 === s
                  ? void 0
                  : s.includes(A.e.EXPLICIT)))
            )
              return S.ExplicitMarkVariant.E;
            if (
              (a && c) ||
              (!a &&
                (null === (l = e.disclaimers) || void 0 === l
                  ? void 0
                  : l.includes(A.e.AGE_18)))
            )
              return S.ExplicitMarkVariant.NUMERIC;
            return null;
          },
          get apiExplicitMark() {
            if (!this.isExplicit) return null;
            let e = this.explicitDisclaimer;
            if (!e && this.isExplicit) return S.ExplicitMarkVariant.E;
            return e;
          },
          get albumExplicitMark() {
            let { experiments: t } = (0, d.yj)(e);
            if (
              null == t
                ? void 0
                : t.checkExperiment(x.peG.WebNextNewExplicitApi, "on")
            )
              return this.apiExplicitMark;
            if (e.contentWarning === f.F.EXPLICIT && e.disclaimers)
              return e.disclaimers[0] === f.F.EXPLICIT
                ? S.ExplicitMarkVariant.E
                : S.ExplicitMarkVariant.NUMERIC;
            return null;
          },
          get trackExplicitMark() {
            if (!(0, d.fh)(e)) return null;
            let { experiments: t } = (0, d.yj)(e);
            if (
              null == t
                ? void 0
                : t.checkExperiment(x.peG.WebNextNewExplicitApi, "on")
            )
              return this.apiExplicitMark;
            if (e.contentWarning === f.F.EXPLICIT)
              return L.V.PODCAST === e.trackType
                ? S.ExplicitMarkVariant.NUMERIC
                : S.ExplicitMarkVariant.E;
            return null;
          },
          get clipExplicitMark() {
            let { experiments: t } = (0, d.yj)(e);
            if (
              null == t
                ? void 0
                : t.checkExperiment(x.peG.WebNextNewExplicitApi, "on")
            )
              return this.apiExplicitMark;
            if (e.contentWarning === f.F.EXPLICIT && e.disclaimers)
              return e.disclaimers[0] === f.F.EXPLICIT
                ? S.ExplicitMarkVariant.E
                : S.ExplicitMarkVariant.NUMERIC;
            return null;
          },
        }))
        .actions((e) => ({
          getDescriptionTexts: (0, d.ls)(function* () {
            if (!e.disclaimers) return null;
            let { disclaimers: t, experiments: i } = (0, d.yj)(e);
            if (
              !(
                (null == i
                  ? void 0
                  : i.checkExperiment(
                      x.peG.WebNextNewExplicitApiDescriptionText,
                      "on",
                    )) ||
                (null == i
                  ? void 0
                  : i.checkExperiment(x.peG.WebNextAllowExclamationIcon, "on"))
              )
            )
              return null;
            let r = (0, x.V4d)(e.disclaimers, A.e.DESCRIPTION_TEXT) || [],
              s = [];
            for (let e of r) {
              let i = yield t.getDisclaimerById(e.id);
              i && i.title && s.push(i.title);
            }
            return s;
          }),
        }));
      ((r = n || (n = {}))[(r.LIKED = 1)] = "LIKED"),
        (r[(r.DISLIKED = -1)] = "DISLIKED");
      var D = i(83768);
      ((s = a || (a = {})).LIKED = "1"), (s.DISLIKED = "0");
      let O = d.V5.optional(d.V5.map(d.V5.enumeration(Object.values(a))), {}),
        R = d.V5.model("LibraryAllIds", {
          loadingState: d.V5.enumeration(Object.values(E.G)),
          tracks: O,
          albums: O,
          artists: O,
          playlists: O,
        })
          .views((e) => ({
            isTrackLiked: (t) => "1" === e.tracks.get(String(t)),
            isTrackDisliked: (t) => "0" === e.tracks.get(String(t)),
            isArtistLiked: (t) => "1" === e.artists.get(String(t)),
            isArtistDisliked: (t) => "0" === e.artists.get(String(t)),
            isAlbumLiked: (t) => "1" === e.albums.get(String(t)),
            isPlaylistLiked: (t) => "1" === e.playlists.get(String(t)),
          }))
          .actions((e) => {
            let t = {
              setRecords(e, t) {
                if (t) {
                  for (let i in t)
                    if (Object.prototype.hasOwnProperty.call(t, i)) {
                      let r = t[i] === n.LIKED ? "1" : "0";
                      e.set(String(i), r);
                    }
                }
              },
              getData: (0, d.ls)(function* () {
                let { libraryResource: i, modelActionsLogger: r } = (0, d.dU)(
                  e,
                );
                if (e.loadingState !== E.G.PENDING)
                  try {
                    e.loadingState = E.G.PENDING;
                    let r = yield i.getAllIds({});
                    e.albums.clear(),
                      e.artists.clear(),
                      e.playlists.clear(),
                      e.tracks.clear(),
                      t.setRecords(e.tracks, r.defaultLibrary),
                      t.setRecords(e.albums, r.albums),
                      t.setRecords(e.artists, r.artists),
                      t.setRecords(e.playlists, r.playlists),
                      (e.loadingState = E.G.RESOLVE);
                  } catch (t) {
                    r.error(t), (e.loadingState = E.G.REJECT);
                  }
              }),
              toggleTrackLike: (0, d.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: r } = (0, d.dU)(e),
                  s = String(t.entityId),
                  l = e.tracks.get(s);
                try {
                  let r;
                  let l = {
                    entityId: t.albumId
                      ? "".concat(t.entityId, ":").concat(t.albumId)
                      : t.entityId,
                    userId: t.userId,
                  };
                  return (
                    "1" === e.tracks.get(s)
                      ? (e.tracks.delete(s), (r = yield i.unlikeTrack(l)))
                      : (e.tracks.set(s, "1"), (r = yield i.likeTrack(l))),
                    r
                  );
                } catch (t) {
                  return (
                    l ? e.tracks.set(s, l) : e.tracks.delete(s),
                    r.error(t),
                    D.B.ERROR
                  );
                }
              }),
              toggleTrackDislike: (0, d.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: r } = (0, d.dU)(e),
                  s = String(t.entityId),
                  l = e.tracks.get(s);
                try {
                  let r;
                  let l = {
                    entityId: t.albumId
                      ? "".concat(t.entityId, ":").concat(t.albumId)
                      : t.entityId,
                    userId: t.userId,
                  };
                  return (
                    "0" === e.tracks.get(s)
                      ? (e.tracks.delete(s), (r = yield i.undislikeTrack(l)))
                      : (e.tracks.set(s, "0"), (r = yield i.dislikeTrack(l))),
                    r
                  );
                } catch (t) {
                  return (
                    l ? e.tracks.set(s, l) : e.tracks.delete(s),
                    r.error(t),
                    D.B.ERROR
                  );
                }
              }),
              toggleArtistLike: (0, d.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: r } = (0, d.dU)(e),
                  s = String(t.entityId),
                  l = e.artists.get(s);
                try {
                  let r;
                  return (
                    "1" === e.artists.get(s)
                      ? (e.artists.delete(s), (r = yield i.unlikeArtist(t)))
                      : (e.artists.set(s, "1"), (r = yield i.likeArtist(t))),
                    r
                  );
                } catch (t) {
                  return (
                    l ? e.artists.set(s, l) : e.artists.delete(s),
                    r.error(t),
                    D.B.ERROR
                  );
                }
              }),
              toggleArtistDislike: (0, d.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: r } = (0, d.dU)(e),
                  s = String(t.entityId),
                  l = e.artists.get(s);
                try {
                  let r;
                  return (
                    "0" === e.artists.get(s)
                      ? (e.artists.delete(s), (r = yield i.undislikeArtist(t)))
                      : (e.artists.set(s, "0"), (r = yield i.dislikeArtist(t))),
                    r
                  );
                } catch (t) {
                  return (
                    l ? e.artists.set(s, l) : e.artists.delete(s),
                    r.error(t),
                    D.B.ERROR
                  );
                }
              }),
              toggleAlbumLike: (0, d.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: r } = (0, d.dU)(e),
                  s = String(t.entityId),
                  l = e.albums.get(s);
                try {
                  let r;
                  return (
                    "1" === e.albums.get(s)
                      ? (e.albums.delete(s), (r = yield i.unlikeAlbum(t)))
                      : (e.albums.set(s, "1"), (r = yield i.likeAlbum(t))),
                    r
                  );
                } catch (t) {
                  return (
                    l ? e.albums.set(s, l) : e.albums.delete(s),
                    r.error(t),
                    D.B.ERROR
                  );
                }
              }),
              togglePlaylistLike: (0, d.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: r } = (0, d.dU)(e),
                  s = String(t.entityId),
                  l = e.playlists.get(s);
                try {
                  let r;
                  return (
                    "1" === e.playlists.get(s)
                      ? (e.playlists.delete(s), (r = yield i.unlikePlaylist(t)))
                      : (e.playlists.set(s, "1"),
                        (r = yield i.likePlaylist(t))),
                    r
                  );
                } catch (t) {
                  return (
                    l ? e.playlists.set(s, l) : e.playlists.delete(s),
                    r.error(t),
                    D.B.ERROR
                  );
                }
              }),
            };
            return t;
          }),
        h = (e) => (e ? { revision: e } : { allValuesRequired: !0 });
      var M = i(9222);
      ((l = o || (o = {})).LIKED = "1"), (l.DISLIKED = "0");
      let C = [
          M.z.LIKED_ALBUMS,
          M.z.LIKED_ARTISTS,
          M.z.LIKED_PLAYLISTS,
          M.z.LIKED_TRACKS,
        ],
        N = d.V5.optional(d.V5.map(d.V5.enumeration(Object.values(o))), {}),
        P = d.V5.model("LibraryRecord", {
          revision: d.V5.maybeNull(d.V5.number),
          items: N,
        }),
        w = d.V5.model("LibrarySync", {
          loadingState: d.V5.enumeration(Object.values(E.G)),
          tracks: P,
          albums: P,
          artists: P,
          playlists: P,
        })
          .views((e) => ({
            isTrackLiked: (t) => "1" === e.tracks.items.get(String(t)),
            isTrackDisliked: (t) => "0" === e.tracks.items.get(String(t)),
            isArtistLiked: (t) => "1" === e.artists.items.get(String(t)),
            isArtistDisliked: (t) => "0" === e.artists.items.get(String(t)),
            isAlbumLiked: (t) => "1" === e.albums.items.get(String(t)),
            isPlaylistLiked: (t) => "1" === e.playlists.items.get(String(t)),
          }))
          .actions((e) => {
            let t = {
              getData: (0, d.ls)(function* () {
                let i =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : C,
                  { modelActionsLogger: r, collectionResource: s } = (0, d.dU)(
                    e,
                  );
                if (e.loadingState !== E.G.PENDING)
                  try {
                    e.loadingState = E.G.PENDING;
                    let r = {};
                    i.includes(M.z.LIKED_ALBUMS) &&
                      (r.likedAlbums = h(e.albums.revision)),
                      i.includes(M.z.LIKED_ARTISTS) &&
                        (r.likedArtists = h(e.artists.revision)),
                      i.includes(M.z.LIKED_TRACKS) &&
                        (r.likedTracks = h(e.tracks.revision)),
                      i.includes(M.z.LIKED_PLAYLISTS) &&
                        (r.likedPlaylists = {});
                    let l = yield s.sync(r);
                    t.setAlbums(l.values.likedAlbums),
                      t.setArtists(l.values.likedArtists),
                      t.setPlaylists(l.values.likedPlaylists),
                      t.setTracks(l.values.likedTracks),
                      (e.loadingState = E.G.RESOLVE);
                  } catch (t) {
                    r.error(t), (e.loadingState = E.G.REJECT);
                  }
              }),
              setArtists: (i) => {
                (null == i ? void 0 : i.values) &&
                  e.artists.revision !== i.info.revision &&
                  (t.clearArtists(),
                  (e.artists.revision = i.info.revision),
                  i.values.liked.map((t) => {
                    e.artists.items.set(t.artistId.toString(), "1");
                  }),
                  i.values.disliked.map((t) => {
                    e.artists.items.set(t.artistId.toString(), "0");
                  }));
              },
              setAlbums: (i) => {
                (null == i ? void 0 : i.values) &&
                  e.albums.revision !== i.info.revision &&
                  (t.clearAlbums(),
                  (e.albums.revision = i.info.revision),
                  i.values.liked.map((t) => {
                    e.albums.items.set(t.albumId.toString(), "1");
                  }));
              },
              setPlaylists: (i) => {
                (null == i ? void 0 : i.values) &&
                  (t.clearPlaylists(),
                  i.values.liked.map((t) => {
                    e.playlists.items.set(
                      ""
                        .concat(t.compositeData.uid, ":")
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
              clearArtists: () => {
                (e.artists.revision = null), e.artists.items.clear();
              },
              clearAlbums: () => {
                (e.albums.revision = null), e.albums.items.clear();
              },
              clearPlaylists: () => {
                (e.playlists.revision = null), e.playlists.items.clear();
              },
              clearTracks: () => {
                (e.tracks.revision = null), e.tracks.items.clear();
              },
              toggleTrackLike: (0, d.ls)(function* (i) {
                let { usersResource: r, modelActionsLogger: s } = (0, d.dU)(e),
                  l = String(i.entityId),
                  n = e.tracks.items.get(l);
                try {
                  let s;
                  let n = {
                    entityId: i.albumId
                      ? "".concat(i.entityId, ":").concat(i.albumId)
                      : i.entityId,
                    userId: i.userId,
                  };
                  return (
                    "1" === e.tracks.items.get(l)
                      ? (e.tracks.items.delete(l), (s = yield r.unlikeTrack(n)))
                      : (e.tracks.items.set(l, "1"),
                        (s = yield r.likeTrack(n))),
                    t.getData([M.z.LIKED_TRACKS]),
                    s
                  );
                } catch (t) {
                  return (
                    n ? e.tracks.items.set(l, n) : e.tracks.items.delete(l),
                    s.error(t),
                    D.B.ERROR
                  );
                }
              }),
              toggleTrackDislike: (0, d.ls)(function* (i) {
                let { usersResource: r, modelActionsLogger: s } = (0, d.dU)(e),
                  l = String(i.entityId),
                  n = e.tracks.items.get(l);
                try {
                  let s;
                  let n = {
                    entityId: i.albumId
                      ? "".concat(i.entityId, ":").concat(i.albumId)
                      : i.entityId,
                    userId: i.userId,
                  };
                  return (
                    "0" === e.tracks.items.get(l)
                      ? (e.tracks.items.delete(l),
                        (s = yield r.undislikeTrack(n)))
                      : (e.tracks.items.set(l, "0"),
                        (s = yield r.dislikeTrack(n))),
                    t.getData([M.z.LIKED_TRACKS]),
                    s
                  );
                } catch (t) {
                  return (
                    n ? e.tracks.items.set(l, n) : e.tracks.items.delete(l),
                    s.error(t),
                    D.B.ERROR
                  );
                }
              }),
              toggleArtistLike: (0, d.ls)(function* (i) {
                let { usersResource: r, modelActionsLogger: s } = (0, d.dU)(e),
                  l = String(i.entityId),
                  n = e.artists.items.get(l);
                try {
                  let s;
                  return (
                    "1" === e.artists.items.get(l)
                      ? (e.artists.items.delete(l),
                        (s = yield r.unlikeArtist(i)))
                      : (e.artists.items.set(l, "1"),
                        (s = yield r.likeArtist(i))),
                    t.getData([M.z.LIKED_ARTISTS]),
                    s
                  );
                } catch (t) {
                  return (
                    n ? e.artists.items.set(l, n) : e.artists.items.delete(l),
                    s.error(t),
                    D.B.ERROR
                  );
                }
              }),
              toggleArtistDislike: (0, d.ls)(function* (i) {
                let { usersResource: r, modelActionsLogger: s } = (0, d.dU)(e),
                  l = String(i.entityId),
                  n = e.artists.items.get(l);
                try {
                  let s;
                  return (
                    "0" === e.artists.items.get(l)
                      ? (e.artists.items.delete(l),
                        (s = yield r.undislikeArtist(i)))
                      : (e.artists.items.set(l, "0"),
                        (s = yield r.dislikeArtist(i))),
                    t.getData([M.z.LIKED_ARTISTS]),
                    s
                  );
                } catch (t) {
                  return (
                    n ? e.artists.items.set(l, n) : e.artists.items.delete(l),
                    s.error(t),
                    D.B.ERROR
                  );
                }
              }),
              toggleAlbumLike: (0, d.ls)(function* (i) {
                let { usersResource: r, modelActionsLogger: s } = (0, d.dU)(e),
                  l = String(i.entityId),
                  n = e.albums.items.get(l);
                try {
                  let s;
                  return (
                    "1" === e.albums.items.get(l)
                      ? (e.albums.items.delete(l), (s = yield r.unlikeAlbum(i)))
                      : (e.albums.items.set(l, "1"),
                        (s = yield r.likeAlbum(i))),
                    t.getData([M.z.LIKED_ALBUMS]),
                    s
                  );
                } catch (t) {
                  return (
                    n ? e.albums.items.set(l, n) : e.albums.items.delete(l),
                    s.error(t),
                    D.B.ERROR
                  );
                }
              }),
              togglePlaylistLike: (0, d.ls)(function* (i) {
                let { usersResource: r, modelActionsLogger: s } = (0, d.dU)(e),
                  l = String(i.entityId),
                  n = e.playlists.items.get(l);
                try {
                  let s;
                  return (
                    "1" === e.playlists.items.get(l)
                      ? (e.playlists.items.delete(l),
                        (s = yield r.unlikePlaylist(i)))
                      : (e.playlists.items.set(l, "1"),
                        (s = yield r.likePlaylist(i))),
                    t.getData([M.z.LIKED_PLAYLISTS]),
                    s
                  );
                } catch (t) {
                  return (
                    n
                      ? e.playlists.items.set(l, n)
                      : e.playlists.items.delete(l),
                    s.error(t),
                    D.B.ERROR
                  );
                }
              }),
            };
            return t;
          }),
        G = d.V5.model("LikesCount", {
          likesCount: d.V5.maybe(d.V5.number),
          pendingLikesCount: d.V5.optional(d.V5.number, 0),
        })
          .views((e) => ({
            get actualLikesCount() {
              if ("number" == typeof e.likesCount) {
                var t;
                return (
                  e.likesCount +
                  (null !== (t = e.pendingLikesCount) && void 0 !== t ? t : 0)
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
        U = d.V5.model("Location", {
          pathname: d.V5.optional(d.V5.string, ""),
          searchParams: d.V5.optional(d.V5.string, ""),
          host: d.V5.optional(d.V5.string, ""),
          tld: d.V5.optional(d.V5.string, ""),
          origin: d.V5.optional(d.V5.string, ""),
          href: d.V5.optional(d.V5.string, ""),
        }).actions((e) => ({
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
        })),
        _ = d.V5.model("ModelDestroyManager").actions(() => ({
          destroyItems(e) {
            e.forEach((e) => {
              e && (0, d.og)(e);
            }),
              queueMicrotask(() => {
                e.forEach((e) => {
                  e && (0, d.ob)(e);
                });
              });
          },
        })),
        K = d.V5.model("Pager", {
          page: d.V5.number,
          perPage: d.V5.number,
          total: d.V5.number,
        });
      var B = i(50703),
        j = i(94538),
        z = i(24642);
      let W = d.V5.model("BrowserInfo", {
          isBrowser: d.V5.boolean,
          isMobile: d.V5.boolean,
          isTablet: d.V5.boolean,
          isTouch: d.V5.boolean,
          name: d.V5.maybe(d.V5.string),
          version: d.V5.maybe(d.V5.string),
          OSFamily: d.V5.maybe(d.V5.string),
        }).views((e) => ({
          get isSafari() {
            var t;
            return null === (t = e.name) || void 0 === t
              ? void 0
              : t.toLowerCase().includes("safari");
          },
        })),
        X = d.V5.model("Settings", {
          layout: d.V5.maybeNull(d.V5.enumeration(Object.keys(B.t))),
          isLandscape: d.V5.boolean,
          isMobileLandscapeHeight: d.V5.boolean,
          platform: d.V5.maybe(d.V5.enumeration(Object.values(z.t))),
          browserInfo: d.V5.maybe(W),
          liteVersionMode: d.V5.maybe(d.V5.enumeration(Object.values(j.m))),
        })
          .views((e) => {
            let t = {
              get isMobile() {
                return e.layout === B.t.Mobile;
              },
              get isDesktopApplication() {
                return !!e.platform;
              },
              get isWindowsApplication() {
                return e.platform === z.t.WINDOWS;
              },
              get isMacOSApplication() {
                return e.platform === z.t.MACOS;
              },
              get isLinuxApplication() {
                return e.platform === z.t.LINUX;
              },
              get isLiteVersionModeEnabled() {
                return e.liteVersionMode === j.m.ENABLED;
              },
              get isLiteVersionModeDisabled() {
                return e.liteVersionMode === j.m.DISABLED;
              },
              get isLiteVersionModeAvailableForToggle() {
                return (
                  t.isLiteVersionModeDisabled || t.isLiteVersionModeEnabled
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
                e.browserInfo = (0, d.pj)(t);
              },
              initializeLiteVersionMode() {
                if (!(0, d.fh)(e)) return;
                let { experiments: i } = (0, d.yj)(e),
                  { containerStorage: r } = (0, d.dU)(e),
                  s = r.get(I.B.LiteVersionMode);
                if (s) {
                  if (
                    "2" !== s.version ||
                    !i.checkExperiment(y.p.WebNextLiteVersion, "on")
                  ) {
                    r.remove(I.B.LiteVersionMode);
                    return;
                  }
                  t.setLiteVersionMode(s.mode, !1);
                }
              },
              setLiteVersionMode(t, i) {
                let { containerStorage: r } = (0, d.dU)(e);
                (e.liteVersionMode = t),
                  i && r.set(I.B.LiteVersionMode, { version: "2", mode: t });
              },
            };
            return t;
          });
      var F = i(24471);
      let H = d.V5.model("Sort", {
          sortBy: d.V5.string,
          sortOrder: d.V5.enumeration(Object.values(F.A)),
        }),
        J = d.V5.model("TrackIdModel", {
          id: d.V5.union(d.V5.string, d.V5.number),
          albumId: d.V5.maybe(d.V5.number),
          timestamp: d.V5.maybe(d.V5.string),
        });
    },
    83768: function (e, t, i) {
      var r, s;
      i.d(t, {
        B: function () {
          return r;
        },
      }),
        ((s = r || (r = {})).OK = "ok"),
        (s.ERROR = "error");
    },
    5831: function (e, t, i) {
      var r, s;
      i.d(t, {
        F: function () {
          return r;
        },
      }),
        ((s = r || (r = {})).EXPLICIT = "explicit"),
        (s.CLEAN = "clean");
    },
    24471: function (e, t, i) {
      var r, s;
      i.d(t, {
        A: function () {
          return r;
        },
      }),
        ((s = r || (r = {})).ASC = "asc"),
        (s.DESC = "desc");
    },
    19522: function (e, t, i) {
      var r, s;
      i.d(t, {
        e: function () {
          return r;
        },
      }),
        ((s = r || (r = {})).MODAL = "modal"),
        (s.FOREIGN_AGENT = "foreignAgent"),
        (s.INFORMATIONAL = "informational"),
        (s.AGE_18 = "age18"),
        (s.EXPLICIT = "explicit"),
        (s.DESCRIPTION_TEXT = "descriptionText"),
        (s.AGE_18_ICON = "age18Icon"),
        (s.EXPLICIT_ICON = "explicitIcon"),
        (s.EXCLAMATION_ICON = "exclamationIcon");
    },
  },
]);
