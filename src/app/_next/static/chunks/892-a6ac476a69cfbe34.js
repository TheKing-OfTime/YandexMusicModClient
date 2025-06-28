"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [892],
  {
    40892: function (e, t, i) {
      i.d(t, {
        Ie: function () {
          return g;
        },
        KL: function () {
          return p;
        },
        S2: function () {
          return k;
        },
        Ib: function () {
          return V;
        },
        K3: function () {
          return b;
        },
        dU: function () {
          return v;
        },
        K8: function () {
          return E;
        },
        i_: function () {
          return T;
        },
        ie: function () {
          return P;
        },
        n4: function () {
          return x;
        },
        T2: function () {
          return U;
        },
        fE: function () {
          return j;
        },
        fu: function () {
          return z;
        },
        CU: function () {
          return X;
        },
        Al: function () {
          return H;
        },
        Vn: function () {
          return Y;
        },
        ao: function () {
          return Q;
        },
        tC: function () {
          return $;
        },
      });
      var s,
        r,
        l,
        n,
        a,
        o,
        d,
        u,
        c = i(22874),
        m = i(5972);
      let g = c.V5.model("BaseAdvertBanner", {
          type: c.V5.enumeration(Object.values(m.Y)),
          noAds: c.V5.boolean,
          hasError: c.V5.boolean,
          isShowBanner: c.V5.boolean,
        })
          .views((e) => ({
            get isVisible() {
              if (e.noAds || e.hasError || !e.isShowBanner) return !1;
              let { advertBanners: t } = (0, c.yj)(e);
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
              (e.type = m.Y.EMPTY),
                (e.noAds = !1),
                (e.isShowBanner = !0),
                (e.hasError = !1);
            },
          })),
        p = c.V5.model("BaseModal", {
          isOpened: c.V5.optional(c.V5.boolean, !1),
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
        y = c.V5.model("BrowserInfo", {
          hasHuaweiAppGallery: c.V5.boolean,
          inAppBrowser: c.V5.boolean,
          isBrowser: c.V5.boolean,
          isMobile: c.V5.boolean,
          isTablet: c.V5.boolean,
          isTouch: c.V5.boolean,
          name: c.V5.maybe(c.V5.string),
          version: c.V5.maybe(c.V5.string),
          OSFamily: c.V5.maybe(c.V5.string),
        }).views((e) => ({
          get isSafari() {
            var t;
            return null === (t = e.name) || void 0 === t
              ? void 0
              : t.toLowerCase().includes("safari");
          },
        })),
        k = c.V5.model("CaseForms", {
          nominative: c.V5.optional(c.V5.string, ""),
          genitive: c.V5.optional(c.V5.string, ""),
          dative: c.V5.optional(c.V5.string, ""),
          accusative: c.V5.optional(c.V5.string, ""),
          instrumental: c.V5.optional(c.V5.string, ""),
          prepositional: c.V5.optional(c.V5.string, ""),
        }),
        V = c.V5.model("Cover", {
          uri: c.V5.maybe(c.V5.string),
          color: c.V5.maybe(c.V5.string),
          videoUrl: c.V5.maybe(c.V5.string),
        }),
        I = c.V5.model("DisclaimerDetails", {
          text: c.V5.maybe(c.V5.string),
          url: c.V5.maybe(c.V5.string),
        }),
        b = c.V5.model("DisclaimerData", {
          title: c.V5.maybe(c.V5.string),
          description: c.V5.maybe(c.V5.string),
          details: c.V5.maybe(I),
        }),
        v = c.V5.compose(c.V5.model({ id: c.V5.string, type: c.V5.string }), b),
        E = c.V5.model("DomainTrailerEntity", { isAvailable: c.V5.boolean });
      var L = i(13003),
        S = i(96017),
        f = i(35785),
        A = i(31475);
      let D = c.V5.model("Experiment", {
          group: c.V5.maybe(c.V5.string),
          value: c.V5.maybe(c.V5.frozen()),
        }),
        T = c.V5.model("Experiments", {
          loadingState: c.V5.enumeration(Object.values(A.G)),
          experiments: c.V5.optional(c.V5.map(D), {}),
          overwrittenExperiments: c.V5.optional(c.V5.map(D), {}),
        })
          .views((e) => {
            let t = {
              getOverwrittenExperiments() {
                let { containerStorage: t, config: i } = (0, c.dU)(e);
                return (0, f.o)(t, i);
              },
              getExperiment(i) {
                let r = e.experiments.get(i),
                  l = t.getOverwrittenExperiments();
                return l?.[i] ?? window?.DEFAULT_EXPERIMENT_OVERRIDES()?.[i] ?? r;
              },
              isExperimentEnabled(e) {
                var i, s, r;
                let l = t.getExperiment(e);
                return (0, L.Z)(
                  null == l
                    ? void 0
                    : null === (i = l.value) || void 0 === i
                      ? void 0
                      : i.enabled,
                )
                  ? null == l
                    ? void 0
                    : null === (r = l.value) || void 0 === r
                      ? void 0
                      : r.enabled
                  : (null == l
                      ? void 0
                      : null === (s = l.value) || void 0 === s
                        ? void 0
                        : s.value) !== void 0 &&
                      t.checkExperiment(e, l.value.value);
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
                  { containerStorage: r, config: l } = (0, c.dU)(e);
                return (0, S.B)({
                  containerStorage: r,
                  config: l,
                  name: t,
                  value: i,
                  experimentDetail: s,
                });
              },
              isRejected: () => e.loadingState === A.G.REJECT,
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, c.ls)(function* (t) {
              let { accountResource: i, modelActionsLogger: s } = (0, c.dU)(e);
              if (e.loadingState !== A.G.PENDING)
                try {
                  e.loadingState = A.G.PENDING;
                  let s = t;
                  s || (s = yield i.experimentsDetails()),
                    e.experiments.clear(),
                    Object.entries(s).forEach((t) => {
                      let [i, s] = t;
                      e.experiments.set(i, s);
                    }),
                    (e.loadingState = A.G.RESOLVE);
                } catch (t) {
                  s.error(t), (e.loadingState = A.G.REJECT);
                } finally {
                  var r;
                  Object.entries(
                    null !== (r = e.getOverwrittenExperiments()) && void 0 !== r
                      ? r
                      : {},
                  ).forEach((t) => {
                    let [i, s] = t;
                    e.overwrittenExperiments.set(i, s);
                  });
                }
            }),
            updateOverwrittenExperiments(t, i) {
              let { config: s } = (0, c.dU)(e);
              s.dev.allowOverwriteExperiments &&
                e.overwrittenExperiments.set(t, i);
            },
            deleteOverwrittenExperiments(t) {
              let { config: i } = (0, c.dU)(e);
              i.dev.allowOverwriteExperiments &&
                e.overwrittenExperiments.delete(t);
            },
          }));
      ((s = a || (a = {})).EXPLICIT = "explicit"), (s.CLEAN = "clean");
      var R = i(94123),
        O = i(97472),
        C = i(13534),
        h = i(63890);
      let P = c.V5.model("ExplicitModel", {
        contentWarning: c.V5.maybe(c.V5.enumeration(Object.values(a))),
        trackType: c.V5.maybe(c.V5.enumeration(Object.values(R.V))),
        disclaimers: c.V5.maybe(c.V5.array(c.V5.string)),
      })
        .views((e) => ({
          get isExplicit() {
            return e.contentWarning === a.EXPLICIT;
          },
          get explicitDisclaimer() {
            if (!(0, c.fh)(e) || !e.disclaimers) return null;
            let t = (0, C.ElP)(e.disclaimers, [
              O.e.EXPLICIT_ICON,
              O.e.AGE_18_ICON,
              O.e.EXCLAMATION_ICON,
            ]);
            if ((null == t ? void 0 : t.type) === O.e.EXCLAMATION_ICON)
              return h.i.EXCLAMATION;
            if ((null == t ? void 0 : t.type) === O.e.EXPLICIT_ICON)
              return h.i.E;
            if ((null == t ? void 0 : t.type) === O.e.AGE_18_ICON)
              return h.i.NUMERIC;
            return null;
          },
        }))
        .actions((e) => ({
          getDescriptionTexts: (0, c.ls)(function* () {
            if (!e.disclaimers) return null;
            let { disclaimers: t } = (0, c.yj)(e),
              i = (0, C.UY5)(e.disclaimers, O.e.DESCRIPTION_TEXT) || [],
              s = [];
            for (let e of i) {
              let i = yield t.getDisclaimerById(e.id);
              i && i.title && s.push(i.title);
            }
            return s;
          }),
        }));
      ((r = o || (o = {}))[(r.LIKED = 1)] = "LIKED"),
        (r[(r.DISLIKED = -1)] = "DISLIKED");
      var N = i(89143);
      ((l = d || (d = {})).LIKED = "1"), (l.DISLIKED = "0");
      let w = c.V5.optional(c.V5.map(c.V5.enumeration(Object.values(d))), {}),
        x = c.V5.model("LibraryAllIds", {
          loadingState: c.V5.enumeration(Object.values(A.G)),
          tracks: w,
          albums: w,
          artists: w,
          playlists: w,
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
                      let s = t[i] === o.LIKED ? "1" : "0";
                      e.set(String(i), s);
                    }
                }
              },
              getData: (0, c.ls)(function* () {
                let { libraryResource: i, modelActionsLogger: s } = (0, c.dU)(
                  e,
                );
                if (e.loadingState !== A.G.PENDING)
                  try {
                    e.loadingState = A.G.PENDING;
                    let s = yield i.getAllIds({});
                    e.albums.clear(),
                      e.artists.clear(),
                      e.playlists.clear(),
                      e.tracks.clear(),
                      t.setRecords(e.tracks, s.defaultLibrary),
                      t.setRecords(e.albums, s.albums),
                      t.setRecords(e.artists, s.artists),
                      t.setRecords(e.playlists, s.playlists),
                      (e.loadingState = A.G.RESOLVE);
                  } catch (t) {
                    s.error(t), (e.loadingState = A.G.REJECT);
                  }
              }),
              toggleTrackLike: (0, c.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: s } = (0, c.dU)(e),
                  r = String(t.entityId),
                  l = e.tracks.get(r);
                try {
                  let s;
                  let l = {
                    entityId: t.albumId
                      ? "".concat(t.entityId, ":").concat(t.albumId)
                      : t.entityId,
                    userId: t.userId,
                  };
                  return (
                    "1" === e.tracks.get(r)
                      ? (e.tracks.delete(r), (s = yield i.unlikeTrack(l)))
                      : (e.tracks.set(r, "1"), (s = yield i.likeTrack(l))),
                    s
                  );
                } catch (t) {
                  return (
                    l ? e.tracks.set(r, l) : e.tracks.delete(r),
                    s.error(t),
                    N.B.ERROR
                  );
                }
              }),
              toggleTrackDislike: (0, c.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: s } = (0, c.dU)(e),
                  r = String(t.entityId),
                  l = e.tracks.get(r);
                try {
                  let s;
                  let l = {
                    entityId: t.albumId
                      ? "".concat(t.entityId, ":").concat(t.albumId)
                      : t.entityId,
                    userId: t.userId,
                  };
                  return (
                    "0" === e.tracks.get(r)
                      ? (e.tracks.delete(r), (s = yield i.undislikeTrack(l)))
                      : (e.tracks.set(r, "0"), (s = yield i.dislikeTrack(l))),
                    s
                  );
                } catch (t) {
                  return (
                    l ? e.tracks.set(r, l) : e.tracks.delete(r),
                    s.error(t),
                    N.B.ERROR
                  );
                }
              }),
              toggleArtistLike: (0, c.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: s } = (0, c.dU)(e),
                  r = String(t.entityId),
                  l = e.artists.get(r);
                try {
                  let s;
                  return (
                    "1" === e.artists.get(r)
                      ? (e.artists.delete(r), (s = yield i.unlikeArtist(t)))
                      : (e.artists.set(r, "1"), (s = yield i.likeArtist(t))),
                    s
                  );
                } catch (t) {
                  return (
                    l ? e.artists.set(r, l) : e.artists.delete(r),
                    s.error(t),
                    N.B.ERROR
                  );
                }
              }),
              toggleArtistDislike: (0, c.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: s } = (0, c.dU)(e),
                  r = String(t.entityId),
                  l = e.artists.get(r);
                try {
                  let s;
                  return (
                    "0" === e.artists.get(r)
                      ? (e.artists.delete(r), (s = yield i.undislikeArtist(t)))
                      : (e.artists.set(r, "0"), (s = yield i.dislikeArtist(t))),
                    s
                  );
                } catch (t) {
                  return (
                    l ? e.artists.set(r, l) : e.artists.delete(r),
                    s.error(t),
                    N.B.ERROR
                  );
                }
              }),
              toggleAlbumLike: (0, c.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: s } = (0, c.dU)(e),
                  r = String(t.entityId),
                  l = e.albums.get(r);
                try {
                  let s;
                  return (
                    "1" === e.albums.get(r)
                      ? (e.albums.delete(r), (s = yield i.unlikeAlbum(t)))
                      : (e.albums.set(r, "1"), (s = yield i.likeAlbum(t))),
                    s
                  );
                } catch (t) {
                  return (
                    l ? e.albums.set(r, l) : e.albums.delete(r),
                    s.error(t),
                    N.B.ERROR
                  );
                }
              }),
              togglePlaylistLike: (0, c.ls)(function* (t) {
                let { usersResource: i, modelActionsLogger: s } = (0, c.dU)(e),
                  r = String(t.entityId),
                  l = e.playlists.get(r);
                try {
                  let s;
                  return (
                    "1" === e.playlists.get(r)
                      ? (e.playlists.delete(r), (s = yield i.unlikePlaylist(t)))
                      : (e.playlists.set(r, "1"),
                        (s = yield i.likePlaylist(t))),
                    s
                  );
                } catch (t) {
                  return (
                    l ? e.playlists.set(r, l) : e.playlists.delete(r),
                    s.error(t),
                    N.B.ERROR
                  );
                }
              }),
            };
            return t;
          }),
        M = (e) => (e ? { revision: e } : { allValuesRequired: !0 });
      var B = i(50278);
      ((n = u || (u = {})).LIKED = "1"), (n.DISLIKED = "0");
      let _ = [
          B.z.LIKED_ALBUMS,
          B.z.LIKED_ARTISTS,
          B.z.LIKED_PLAYLISTS,
          B.z.LIKED_TRACKS,
          B.z.LIKED_CLIPS,
        ],
        G = c.V5.optional(c.V5.map(c.V5.enumeration(Object.values(u))), {}),
        K = c.V5.model("LibraryRecord", {
          revision: c.V5.maybeNull(c.V5.number),
          items: G,
        }),
        U = c.V5.model("LibrarySync", {
          loadingState: c.V5.enumeration(Object.values(A.G)),
          tracks: K,
          albums: K,
          artists: K,
          playlists: K,
          clips: K,
        })
          .views((e) => ({
            isTrackLiked: (t) => "1" === e.tracks.items.get(String(t)),
            isTrackDisliked: (t) => "0" === e.tracks.items.get(String(t)),
            isArtistLiked: (t) => "1" === e.artists.items.get(String(t)),
            isArtistDisliked: (t) => "0" === e.artists.items.get(String(t)),
            isAlbumLiked: (t) => "1" === e.albums.items.get(String(t)),
            isPlaylistLiked: (t) => "1" === e.playlists.items.get(String(t)),
            isClipLiked: (t) => "1" === e.clips.items.get(String(t)),
          }))
          .actions((e) => {
            let t = {
              getData: (0, c.ls)(function* () {
                let i =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : _,
                  { modelActionsLogger: s, collectionResource: r } = (0, c.dU)(
                    e,
                  );
                if (e.loadingState !== A.G.PENDING)
                  try {
                    e.loadingState = A.G.PENDING;
                    let s = {};
                    i.includes(B.z.LIKED_ALBUMS) &&
                      (s.likedAlbums = M(e.albums.revision)),
                      i.includes(B.z.LIKED_ARTISTS) &&
                        (s.likedArtists = M(e.artists.revision)),
                      i.includes(B.z.LIKED_TRACKS) &&
                        (s.likedTracks = M(e.tracks.revision)),
                      i.includes(B.z.LIKED_CLIPS) &&
                        (s.likedClips = M(e.clips.revision)),
                      i.includes(B.z.LIKED_PLAYLISTS) &&
                        (s.likedPlaylists = {});
                    let l = yield r.sync(s);
                    t.setAlbums(l.values.likedAlbums),
                      t.setArtists(l.values.likedArtists),
                      t.setPlaylists(l.values.likedPlaylists),
                      t.setTracks(l.values.likedTracks),
                      t.setClips(l.values.likedClips),
                      (e.loadingState = A.G.RESOLVE);
                  } catch (t) {
                    s.error(t), (e.loadingState = A.G.REJECT);
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
              setClips: (i) => {
                (null == i ? void 0 : i.values) &&
                  e.clips.revision !== i.info.revision &&
                  (t.clearArtists(),
                  (e.clips.revision = i.info.revision),
                  i.values.liked.map((t) => {
                    e.clips.items.set(t.clipId.toString(), "1");
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
              clearClips: () => {
                (e.clips.revision = null), e.clips.items.clear();
              },
              toggleTrackLike: (0, c.ls)(function* (i) {
                let { usersResource: s, modelActionsLogger: r } = (0, c.dU)(e),
                  l = String(i.entityId),
                  n = e.tracks.items.get(l);
                try {
                  let r;
                  let n = {
                    entityId: i.albumId
                      ? "".concat(i.entityId, ":").concat(i.albumId)
                      : i.entityId,
                    userId: i.userId,
                  };
                  return (
                    "1" === e.tracks.items.get(l)
                      ? (e.tracks.items.delete(l), (r = yield s.unlikeTrack(n)))
                      : (e.tracks.items.set(l, "1"),
                        (r = yield s.likeTrack(n))),
                    t.getData([B.z.LIKED_TRACKS]),
                    r
                  );
                } catch (t) {
                  return (
                    n ? e.tracks.items.set(l, n) : e.tracks.items.delete(l),
                    r.error(t),
                    N.B.ERROR
                  );
                }
              }),
              toggleTrackDislike: (0, c.ls)(function* (i) {
                let { usersResource: s, modelActionsLogger: r } = (0, c.dU)(e),
                  l = String(i.entityId),
                  n = e.tracks.items.get(l);
                try {
                  let r;
                  let n = {
                    entityId: i.albumId
                      ? "".concat(i.entityId, ":").concat(i.albumId)
                      : i.entityId,
                    userId: i.userId,
                  };
                  return (
                    "0" === e.tracks.items.get(l)
                      ? (e.tracks.items.delete(l),
                        (r = yield s.undislikeTrack(n)))
                      : (e.tracks.items.set(l, "0"),
                        (r = yield s.dislikeTrack(n))),
                    t.getData([B.z.LIKED_TRACKS]),
                    r
                  );
                } catch (t) {
                  return (
                    n ? e.tracks.items.set(l, n) : e.tracks.items.delete(l),
                    r.error(t),
                    N.B.ERROR
                  );
                }
              }),
              toggleArtistLike: (0, c.ls)(function* (i) {
                let { usersResource: s, modelActionsLogger: r } = (0, c.dU)(e),
                  l = String(i.entityId),
                  n = e.artists.items.get(l);
                try {
                  let r;
                  return (
                    "1" === e.artists.items.get(l)
                      ? (e.artists.items.delete(l),
                        (r = yield s.unlikeArtist(i)))
                      : (e.artists.items.set(l, "1"),
                        (r = yield s.likeArtist(i))),
                    t.getData([B.z.LIKED_ARTISTS]),
                    r
                  );
                } catch (t) {
                  return (
                    n ? e.artists.items.set(l, n) : e.artists.items.delete(l),
                    r.error(t),
                    N.B.ERROR
                  );
                }
              }),
              toggleArtistDislike: (0, c.ls)(function* (i) {
                let { usersResource: s, modelActionsLogger: r } = (0, c.dU)(e),
                  l = String(i.entityId),
                  n = e.artists.items.get(l);
                try {
                  let r;
                  return (
                    "0" === e.artists.items.get(l)
                      ? (e.artists.items.delete(l),
                        (r = yield s.undislikeArtist(i)))
                      : (e.artists.items.set(l, "0"),
                        (r = yield s.dislikeArtist(i))),
                    t.getData([B.z.LIKED_ARTISTS]),
                    r
                  );
                } catch (t) {
                  return (
                    n ? e.artists.items.set(l, n) : e.artists.items.delete(l),
                    r.error(t),
                    N.B.ERROR
                  );
                }
              }),
              toggleAlbumLike: (0, c.ls)(function* (i) {
                let { usersResource: s, modelActionsLogger: r } = (0, c.dU)(e),
                  l = String(i.entityId),
                  n = e.albums.items.get(l);
                try {
                  let r;
                  return (
                    "1" === e.albums.items.get(l)
                      ? (e.albums.items.delete(l), (r = yield s.unlikeAlbum(i)))
                      : (e.albums.items.set(l, "1"),
                        (r = yield s.likeAlbum(i))),
                    t.getData([B.z.LIKED_ALBUMS]),
                    r
                  );
                } catch (t) {
                  return (
                    n ? e.albums.items.set(l, n) : e.albums.items.delete(l),
                    r.error(t),
                    N.B.ERROR
                  );
                }
              }),
              togglePlaylistLike: (0, c.ls)(function* (i) {
                let { usersResource: s, modelActionsLogger: r } = (0, c.dU)(e),
                  l = String(i.entityId),
                  n = e.playlists.items.get(l);
                try {
                  let r;
                  return (
                    "1" === e.playlists.items.get(l)
                      ? (e.playlists.items.delete(l),
                        (r = yield s.unlikePlaylist(i)))
                      : (e.playlists.items.set(l, "1"),
                        (r = yield s.likePlaylist(i))),
                    t.getData([B.z.LIKED_PLAYLISTS]),
                    r
                  );
                } catch (t) {
                  return (
                    n
                      ? e.playlists.items.set(l, n)
                      : e.playlists.items.delete(l),
                    r.error(t),
                    N.B.ERROR
                  );
                }
              }),
              toggleClipLike: (0, c.ls)(function* (i) {
                let { usersResource: s, modelActionsLogger: r } = (0, c.dU)(e),
                  l = String(i.entityId),
                  n = e.clips.items.get(l);
                try {
                  return (
                    "1" === e.clips.items.get(l)
                      ? (e.clips.items.delete(l), yield s.unlikeClip(i))
                      : (e.clips.items.set(l, "1"), yield s.likeClip(i)),
                    t.getData([B.z.LIKED_CLIPS]),
                    N.B.OK
                  );
                } catch (t) {
                  return (
                    n ? e.clips.items.set(l, n) : e.clips.items.delete(l),
                    r.error(t),
                    N.B.ERROR
                  );
                }
              }),
            };
            return t;
          }),
        j = c.V5.model("LikesCount", {
          likesCount: c.V5.maybe(c.V5.number),
          pendingLikesCount: c.V5.optional(c.V5.number, 0),
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
        z = c.V5.model("LoadingState", {
          loadingState: c.V5.enumeration(Object.values(A.G)),
        }).views((e) => ({
          get isNeededToLoad() {
            return e.loadingState === A.G.IDLE;
          },
          get isLoading() {
            return e.loadingState === A.G.PENDING;
          },
          get isResolved() {
            return e.loadingState === A.G.RESOLVE;
          },
          get isRejected() {
            return e.loadingState === A.G.REJECT;
          },
        })),
        X = c.V5.model("Location", {
          pathname: c.V5.optional(c.V5.string, ""),
          searchParams: c.V5.optional(c.V5.string, ""),
          host: c.V5.optional(c.V5.string, ""),
          tld: c.V5.optional(c.V5.string, ""),
          origin: c.V5.optional(c.V5.string, ""),
          href: c.V5.optional(c.V5.string, ""),
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
        H = c.V5.model("ModelDestroyManager").actions(() => ({
          destroyItems(e) {
            e.forEach((e) => {
              e && (0, c.og)(e);
            }),
              queueMicrotask(() => {
                e.forEach((e) => {
                  e && (0, c.ob)(e);
                });
              });
          },
        })),
        Y = c.V5.model("Pager", {
          page: c.V5.number,
          perPage: c.V5.number,
          total: c.V5.number,
        });
      var F = i(72455),
        W = i(34389),
        J = i(82969),
        q = i(95018),
        Z = i(52023);
      let Q = c.V5.model("Settings", {
          layout: c.V5.maybeNull(c.V5.enumeration(Object.keys(F.t))),
          isLandscape: c.V5.boolean,
          isMobileLandscapeHeight: c.V5.boolean,
          platform: c.V5.maybe(c.V5.enumeration(Object.values(q.t))),
          browserInfo: y,
          liteVersionMode: c.V5.maybe(c.V5.enumeration(Object.values(J.m))),
        })
          .views((e) => {
            let t = {
              get isMobile() {
                return e.layout === F.t.Mobile;
              },
              get isDesktopApplication() {
                return !!e.platform;
              },
              get isWindowsApplication() {
                return e.platform === q.t.WINDOWS;
              },
              get isMacOSApplication() {
                return e.platform === q.t.MACOS;
              },
              get isLinuxApplication() {
                return e.platform === q.t.LINUX;
              },
              get isLiteVersionModeEnabled() {
                return e.liteVersionMode === J.m.ENABLED;
              },
              get isLiteVersionModeDisabled() {
                return e.liteVersionMode === J.m.DISABLED;
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
                let i = void 0 !== t.version ? String(t.version) : void 0;
                e.browserInfo = (0, c.pj)({ ...t, version: i });
              },
              initializeLiteVersionMode() {
                if (!(0, c.fh)(e)) return;
                let { experiments: i } = (0, c.yj)(e),
                  { containerStorage: s } = (0, c.dU)(e),
                  r = s.get(Z.B.LiteVersionMode);
                if (r) {
                  if (
                    "2" !== r.version ||
                    !i.checkExperiment(W.p.WebNextLiteVersion, "on")
                  ) {
                    s.remove(Z.B.LiteVersionMode);
                    return;
                  }
                  t.setLiteVersionMode(r.mode, !1);
                }
              },
              setLiteVersionMode(t, i) {
                let { containerStorage: s } = (0, c.dU)(e);
                (e.liteVersionMode = t),
                  i && s.set(Z.B.LiteVersionMode, { version: "2", mode: t });
              },
            };
            return t;
          }),
        $ = c.V5.model("TrackIdModel", {
          id: c.V5.union(c.V5.string, c.V5.number),
          albumId: c.V5.maybe(c.V5.number),
          timestamp: c.V5.maybe(c.V5.string),
        });
    },
    89143: function (e, t, i) {
      var s, r;
      i.d(t, {
        B: function () {
          return s;
        },
      }),
        ((r = s || (s = {})).OK = "ok"),
        (r.ERROR = "error");
    },
    97472: function (e, t, i) {
      var s, r;
      i.d(t, {
        e: function () {
          return s;
        },
      }),
        ((r = s || (s = {})).MODAL = "modal"),
        (r.FOREIGN_AGENT = "foreignAgent"),
        (r.INFORMATIONAL = "informational"),
        (r.AGE_18 = "age18"),
        (r.EXPLICIT = "explicit"),
        (r.DESCRIPTION_TEXT = "descriptionText"),
        (r.AGE_18_ICON = "age18Icon"),
        (r.EXPLICIT_ICON = "explicitIcon"),
        (r.EXCLAMATION_ICON = "exclamationIcon");
    },
  },
]);
