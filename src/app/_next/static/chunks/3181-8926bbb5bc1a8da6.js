"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3181],
  {
    13181: function (t, e, a) {
      a.d(e, {
        pr: function () {
          return Q.ArtistAlbumsPage;
        },
        uV: function () {
          return q.ArtistClipsPage;
        },
        aG: function () {
          return J.ArtistConcertsPage;
        },
        vQ: function () {
          return M.ArtistFamiliarPage;
        },
        xA: function () {
          return Y.ArtistPage;
        },
        Od: function () {
          return W;
        },
        x3: function () {
          return z.ArtistSimilarPage;
        },
        hD: function () {
          return H.ArtistTracksPage;
        },
      }),
        a(38088),
        a(68573),
        a(68484),
        a(80704),
        a(66012),
        a(69617),
        a(15058),
        a(89742),
        a(899);
      var i,
        r,
        l = a(22874),
        o = a(62726),
        s = a(97472),
        n = a(34990),
        u = a(30495),
        d = a(72783),
        c = a(55051),
        g = a(61039),
        m = a(7797),
        N = a(1150),
        p = a(64353),
        S = a(60773),
        E = a(13534),
        v = a(40892);
      ((i = r || (r = {})).DEFAULT = "default"),
        (i.DONATION = "donation"),
        (i.REWIND = "year-rewind");
      let C = /^https:\/\/tips\.yandex\.ru\//,
        b = (t) => C.test(null != t ? t : ""),
        y = (t, e, a) => {
          var i;
          let o =
            null === (i = t.extraActions) || void 0 === i
              ? void 0
              : i.find((t) => t.type === r.DONATION && b(t.url));
          return (0, l.pj)({
            artist: (0, p.d)(t),
            donationUrl: null == o ? void 0 : o.url,
            lastMonthListeners: null == e ? void 0 : e.lastMonthListeners,
            covers: null == a ? void 0 : a.map((t) => t.uri),
          });
        },
        V = (t) => {
          let { available: e, disclaimers: a } = (0, E.NuW)(t);
          return (0, l.pj)({
            clipId: t.clipId,
            title: t.title,
            thumbnail: t.thumbnail,
            previewUrl: t.previewUrl,
            duration: t.duration,
            version: t.version,
            artists: (t.artists || []).map((t) => (0, p.tR)({ artist: t })),
            isAvailable: e,
            disclaimers: a,
          });
        };
      var G = a(5403);
      let T = (t) => {
          var e, a, i, r;
          return (0, l.pj)({
            artist: (0, p.tR)({
              artist: t.artist,
              trailer: t.trailer,
              isComposer: t.artistType === G.Y.COMPOSER,
            }),
            donationUrl: b(
              null === (e = t.donation) || void 0 === e ? void 0 : e.tipUrl,
            )
              ? null === (a = t.donation) || void 0 === a
                ? void 0
                : a.tipUrl
              : void 0,
            lastMonthListeners:
              null === (i = t.stats) || void 0 === i
                ? void 0
                : i.lastMonthListeners,
            brandedButton: t.brandedButton
              ? (0, c.VF)(t.brandedButton)
              : void 0,
            covers:
              null === (r = t.covers) || void 0 === r
                ? void 0
                : r.map((t) => {
                    var e;
                    return null !== (e = t.uri) && void 0 !== e ? e : "";
                  }),
          });
        },
        D = (t) => {
          let e = t.artists.map((t) => (0, p.tR)({ artist: t }));
          return (0, l.pj)({
            playlist: (0, m.RE)({ playlist: t.playlist }),
            artists: e,
          });
        };
      var A = a(41571);
      let f = l.V5.compose(
          l.V5.model("ArtistAlbumsPage", {
            pager: l.V5.maybeNull(v.Vn),
            variant: l.V5.maybeNull(l.V5.enumeration(Object.values(A.M))),
            alreadyRequestedPages: l.V5.map(l.V5.number),
            pendingPages: l.V5.map(l.V5.number),
            requests: l.V5.maybeNull(l.V5.number),
            errorStatusCode: l.V5.maybeNull(l.V5.number),
            items: l.V5.array(l.V5.maybeNull(d.ug)),
          }),
          v.Al,
          v.fu,
        )
          .views((t) => ({
            get isNotFound() {
              var e;
              let a =
                  t.isResolved &&
                  (null === (e = t.pager) || void 0 === e
                    ? void 0
                    : e.total) === 0,
                i =
                  t.errorStatusCode === o.CN.NOT_FOUND ||
                  t.errorStatusCode === o.CN.BAD_REQUEST;
              return (t.isRejected && i) || a;
            },
          }))
          .actions((t) => ({
            setVariant: (e) => {
              t.variant = e;
            },
            getData: (0, l.ls)(function* (e) {
              let {
                  artistId: a,
                  page: i = 0,
                  pageSize: r = 20,
                  sort: s,
                  preloadedAlbums: n,
                } = e,
                { artistsResource: u, modelActionsLogger: c } = (0, l.dU)(t);
              if (
                !(
                  (t.isLoading && t.pendingPages.has("".concat(i))) ||
                  t.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  t.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var g;
                  (t.loadingState = E.Gui.PENDING),
                    t.pendingPages.set("".concat(i), i);
                  let e = {
                      artistId: a,
                      page: i,
                      pageSize: r,
                      sort: { sortBy: null == s ? void 0 : s.sortBy },
                    },
                    o = n;
                  if (!o)
                    switch (t.variant) {
                      case A.M.COMPILATIONS:
                        o = yield u.getAlsoAlbums(e);
                        break;
                      case A.M.DISCOGRAPHY:
                        o = yield u.getDiscographyAlbums(e);
                        break;
                      default:
                        o = yield u.getDirectAlbums(e);
                    }
                  let c = { page: i, perPage: r, total: o.pager.total };
                  0 === t.items.length &&
                    (t.items = (0, l.pj)(
                      Array.from({ length: c.total }, () => null),
                    ));
                  let m = o.albums.map(d.ym);
                  (0, E.AG_)({
                    items: t.items,
                    mappedRawItems: m,
                    page: i,
                    pageSize: r,
                  }),
                    (t.pager = c),
                    (t.requests =
                      (null !== (g = t.requests) && void 0 !== g ? g : 0) + 1),
                    (t.loadingState = E.Gui.RESOLVE);
                } catch (e) {
                  c.error(e),
                    e instanceof o.du &&
                      (e.statusCode === o.CN.NOT_FOUND ||
                        e.statusCode === o.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = o.CN.NOT_FOUND),
                    t.loadingState !== E.Gui.IDLE &&
                      (t.loadingState = E.Gui.REJECT);
                } finally {
                  t.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (t.loadingState = E.Gui.IDLE),
                t.pendingPages.clear(),
                (t.variant = null),
                t.alreadyRequestedPages.clear(),
                (t.errorStatusCode = null),
                t.destroyItems([t.pager, t.items]);
            },
          })),
        I = l.V5.compose(
          l.V5.model("ArtistClipsPage", {
            pager: l.V5.maybeNull(v.Vn),
            alreadyRequestedPages: l.V5.map(l.V5.number),
            pendingPages: l.V5.map(l.V5.number),
            requests: l.V5.maybeNull(l.V5.number),
            errorStatusCode: l.V5.maybeNull(l.V5.number),
            items: l.V5.array(l.V5.maybeNull(g.x$)),
          }),
          v.Al,
          v.fu,
        )
          .views((t) => ({
            get isNotFound() {
              var e;
              let a =
                  t.isResolved &&
                  (null === (e = t.pager) || void 0 === e
                    ? void 0
                    : e.total) === 0,
                i =
                  t.errorStatusCode === o.CN.NOT_FOUND ||
                  t.errorStatusCode === o.CN.BAD_REQUEST;
              return (t.isRejected && i) || a;
            },
          }))
          .actions((t) => ({
            getData: (0, l.ls)(function* (e) {
              let {
                  artistId: a,
                  page: i = 0,
                  pageSize: r = 20,
                  preloadedClips: s,
                } = e,
                { artistsResource: n, modelActionsLogger: u } = (0, l.dU)(t);
              if (
                !(
                  (t.isLoading && t.pendingPages.has("".concat(i))) ||
                  t.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  t.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var d;
                  (t.loadingState = E.Gui.PENDING),
                    t.pendingPages.set("".concat(i), i);
                  let e = s;
                  e ||
                    (e = yield n.getClips({
                      artistId: a,
                      page: i,
                      pageSize: r,
                    }));
                  let o = { page: i, perPage: r, total: e.pager.total };
                  0 === t.items.length &&
                    (t.items = (0, l.pj)(
                      Array.from({ length: o.total }, () => null),
                    ));
                  let u = e.items.map((t) =>
                    (0, g.m0)({ clip: t.data.clip, artists: t.data.artists }),
                  );
                  (0, E.AG_)({
                    items: t.items,
                    mappedRawItems: u,
                    page: i,
                    pageSize: r,
                  }),
                    (t.pager = o),
                    (t.requests =
                      (null !== (d = t.requests) && void 0 !== d ? d : 0) + 1),
                    (t.loadingState = E.Gui.RESOLVE);
                } catch (e) {
                  u.error(e),
                    e instanceof o.du &&
                      (e.statusCode === o.CN.NOT_FOUND ||
                        e.statusCode === o.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = o.CN.NOT_FOUND),
                    t.loadingState !== E.Gui.IDLE &&
                      (t.loadingState = E.Gui.REJECT);
                } finally {
                  t.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (t.loadingState = E.Gui.IDLE),
                t.pendingPages.clear(),
                t.alreadyRequestedPages.clear(),
                (t.errorStatusCode = null),
                t.destroyItems([t.pager, t.items]);
            },
          })),
        h = l.V5.compose(
          l.V5.model("ArtistConcertsPage", {
            errorStatusCode: l.V5.maybeNull(l.V5.number),
            concerts: l.V5.maybeNull(l.V5.array(S.Z)),
          }),
          v.Al,
          v.fu,
        )
          .views((t) => ({
            get isLoading() {
              return t.isNeededToLoad || t.loadingState === E.Gui.PENDING;
            },
            get isNotFound() {
              var e;
              let a =
                  t.isResolved &&
                  (null === (e = t.concerts) || void 0 === e
                    ? void 0
                    : e.length) === 0,
                i =
                  t.errorStatusCode === o.CN.NOT_FOUND ||
                  t.errorStatusCode === o.CN.BAD_REQUEST;
              return (t.isRejected && i) || a;
            },
          }))
          .actions((t) => ({
            getData: (0, l.ls)(function* (e) {
              let { artistId: a, preloadedConcerts: i } = e,
                { artistsResource: r, modelActionsLogger: s } = (0, l.dU)(t);
              if (t.loadingState !== E.Gui.PENDING)
                try {
                  t.loadingState = E.Gui.PENDING;
                  let e = null == i ? void 0 : i.concerts;
                  e || (e = (yield r.getConcerts({ artistId: a })).concerts),
                    (t.concerts = (0, l.pj)(e.map(S.zj))),
                    (t.loadingState = E.Gui.RESOLVE);
                } catch (e) {
                  s.error(e),
                    e instanceof o.du &&
                      (e.statusCode === o.CN.NOT_FOUND ||
                        e.statusCode === o.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = o.CN.NOT_FOUND),
                    t.loadingState !== E.Gui.IDLE &&
                      (t.loadingState = E.Gui.REJECT);
                }
            }),
            reset() {
              (t.loadingState = E.Gui.IDLE),
                (t.errorStatusCode = null),
                t.destroyItems([t.concerts]);
            },
          })),
        L = (t) =>
          (0, l.pj)({
            ...(0, d.cO)({ album: t, artists: t.artists }),
            version: t.version,
          }),
        k = l.V5.compose(
          l.V5.model("ArtistFamiliarPage", {
            errorStatusCode: l.V5.maybeNull(l.V5.number),
            vibeTracks: l.V5.maybeNull(l.V5.array(N.le)),
            collectionTracks: l.V5.maybeNull(l.V5.array(N.le)),
            collectionAlbums: l.V5.maybeNull(l.V5.array(d.ug)),
          }),
          v.Al,
          v.fu,
        )
          .views((t) => {
            let e = {
              get isLoading() {
                return t.isNeededToLoad || t.loadingState === E.Gui.PENDING;
              },
              get isNotFound() {
                let e =
                  t.errorStatusCode === o.CN.NOT_FOUND ||
                  t.errorStatusCode === o.CN.BAD_REQUEST;
                return t.isRejected && e;
              },
              get hasCollectionEntities() {
                var a, i;
                return (
                  (t.isResolved &&
                    Number(
                      null === (a = t.collectionTracks) || void 0 === a
                        ? void 0
                        : a.length,
                    ) > 0) ||
                  Number(
                    null === (i = t.collectionAlbums) || void 0 === i
                      ? void 0
                      : i.length,
                  ) > 0
                );
              },
              get shouldShowTitleBlocks() {
                var r, l;
                if (e.isLoading) return !0;
                return (
                  Number(
                    null === (r = t.collectionTracks) || void 0 === r
                      ? void 0
                      : r.length,
                  ) > 0 &&
                  Number(
                    null === (l = t.collectionAlbums) || void 0 === l
                      ? void 0
                      : l.length,
                  ) > 0
                );
              },
              get hasVibeTracks() {
                var s;
                return (
                  Number(
                    null === (s = t.vibeTracks) || void 0 === s
                      ? void 0
                      : s.length,
                  ) > 0
                );
              },
              get collectionEntitiesData() {
                var n, u;
                return null !==
                  (u =
                    null === (n = t.collectionTracks) || void 0 === n
                      ? void 0
                      : n.map(N.E5)) && void 0 !== u
                  ? u
                  : [];
              },
              get vibeEntitiesData() {
                var d, c;
                return null !==
                  (c =
                    null === (d = t.vibeTracks) || void 0 === d
                      ? void 0
                      : d.map(N.E5)) && void 0 !== c
                  ? c
                  : [];
              },
            };
            return e;
          })
          .actions((t) => ({
            getData: (0, l.ls)(function* (e) {
              let { artistId: a, preloadedFamiliar: i } = e,
                { artistsResource: r, modelActionsLogger: s } = (0, l.dU)(t);
              if (t.loadingState !== E.Gui.PENDING)
                try {
                  var n, u, d, c, g, m;
                  t.loadingState = E.Gui.PENDING;
                  let e = i;
                  e ||
                    (e = yield r.getFamiliarYou({
                      artistId: a,
                      waveTracksLimit: 100,
                      collectionTracksLimit: 100,
                      collectionAlbumsLimit: 20,
                    })),
                    (t.vibeTracks = (0, l.pj)(
                      null === (u = e.wave) || void 0 === u
                        ? void 0
                        : null === (n = u.tracks) || void 0 === n
                          ? void 0
                          : n.map((t) => (0, N.Vt)(t)),
                    )),
                    (t.collectionTracks = (0, l.pj)(
                      null === (c = e.collection) || void 0 === c
                        ? void 0
                        : null === (d = c.tracks) || void 0 === d
                          ? void 0
                          : d.map((t) => (0, N.Vt)(t)),
                    )),
                    (t.collectionAlbums = (0, l.pj)(
                      null === (m = e.collection) || void 0 === m
                        ? void 0
                        : null === (g = m.albums) || void 0 === g
                          ? void 0
                          : g.map(L),
                    )),
                    (t.loadingState = E.Gui.RESOLVE);
                } catch (e) {
                  s.error(e),
                    e instanceof o.du &&
                      (e.statusCode === o.CN.NOT_FOUND ||
                        e.statusCode === o.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = o.CN.NOT_FOUND),
                    t.loadingState !== E.Gui.IDLE &&
                      (t.loadingState = E.Gui.REJECT);
                }
            }),
            reset() {
              (t.loadingState = E.Gui.IDLE),
                (t.errorStatusCode = null),
                t.destroyItems([t.vibeTracks, t.collectionTracks]);
            },
          }));
      var R = a(10979);
      let O = l.V5.model("ArtistPick", {
          playlist: R.Cd,
          artists: l.V5.array(p.Go),
        }),
        P = l.V5.compose(
          l.V5.model("ArtistSimilarArtistsPage", {
            errorStatusCode: l.V5.maybeNull(l.V5.number),
            similarArtists: l.V5.maybeNull(l.V5.array(p.Go)),
          }),
          v.Al,
          v.fu,
        )
          .views((t) => ({
            get isLoading() {
              return t.isNeededToLoad || t.loadingState === E.Gui.PENDING;
            },
            get isNotFound() {
              var e;
              let a =
                  t.isResolved &&
                  (null === (e = t.similarArtists) || void 0 === e
                    ? void 0
                    : e.length) === 0,
                i =
                  t.errorStatusCode === o.CN.NOT_FOUND ||
                  t.errorStatusCode === o.CN.BAD_REQUEST;
              return (t.isRejected && i) || a;
            },
          }))
          .actions((t) => ({
            getData: (0, l.ls)(function* (e) {
              let { artistId: a, preloadedSimilarArtists: i } = e,
                { artistsResource: r, modelActionsLogger: s } = (0, l.dU)(t);
              try {
                t.loadingState = E.Gui.PENDING;
                let e = i;
                e || (e = yield r.getSimilarArtists({ artistId: a })),
                  (t.similarArtists = (0, l.pj)(e.similarArtists.map(p.d))),
                  t.loadingState !== E.Gui.IDLE &&
                    (t.loadingState = E.Gui.RESOLVE);
              } catch (e) {
                s.error(e),
                  e instanceof o.du &&
                    (e.statusCode === o.CN.NOT_FOUND ||
                      e.statusCode === o.CN.BAD_REQUEST) &&
                    (t.errorStatusCode = o.CN.NOT_FOUND),
                  t.loadingState !== E.Gui.IDLE &&
                    (t.loadingState = E.Gui.REJECT);
              }
            }),
            reset() {
              (t.loadingState = E.Gui.IDLE),
                (t.errorStatusCode = null),
                t.destroyItems([t.similarArtists]);
            },
          })),
        U = l.V5.model("CommonSubPage", {
          artistName: l.V5.maybeNull(l.V5.string),
        }),
        F = l.V5.compose(
          l.V5.model("FamiliarInfo", {
            vibeTrackCount: l.V5.optional(l.V5.number, 0),
            collectionTrackCount: l.V5.optional(l.V5.number, 0),
            collectionAlbumCount: l.V5.optional(l.V5.number, 0),
          }),
          v.fu,
        )
          .views((t) => {
            let e = {
              get hasTracks() {
                return (
                  t.isResolved &&
                  (t.collectionTrackCount > 0 || t.vibeTrackCount > 0)
                );
              },
              get hasFamiliarInfo() {
                return (
                  t.isResolved && (e.hasTracks || t.collectionAlbumCount > 0)
                );
              },
              get tracksCount() {
                return t.collectionTrackCount + t.vibeTrackCount;
              },
              get hasCollectionEntities() {
                return (
                  t.isResolved &&
                  (t.collectionTrackCount > 0 || t.collectionAlbumCount > 0)
                );
              },
              get hasVibeEntities() {
                return t.isResolved && t.vibeTrackCount > 0;
              },
              href: (t) =>
                t
                  ? e.hasCollectionEntities
                    ? "/artist/"
                        .concat(t, "/familiar?tab=")
                        .concat(E.g3g.COLLECTION)
                    : e.hasVibeEntities
                      ? "/artist/"
                          .concat(t, "/familiar?tab=")
                          .concat(E.g3g.VIBE)
                      : "/artist/".concat(t, "/familiar")
                  : "",
            };
            return e;
          })
          .actions((t) => ({
            getData: (0, l.ls)(function* (e) {
              let { artistId: a } = e,
                { artistsResource: i, modelActionsLogger: r } = (0, l.dU)(t);
              if (t.loadingState !== E.Gui.PENDING)
                try {
                  t.loadingState = E.Gui.PENDING;
                  let e = yield i.getFamiliarYouInfo({
                    artistId: a,
                    withWaveInfo: !0,
                    withCollectionInfo: !0,
                  });
                  e.collection &&
                    ((t.collectionTrackCount = e.collection.trackCount),
                    (t.collectionAlbumCount = e.collection.albumCount)),
                    e.wave && (t.vibeTrackCount = e.wave.trackCount),
                    t.loadingState !== E.Gui.IDLE &&
                      (t.loadingState = E.Gui.RESOLVE);
                } catch (e) {
                  r.error(e),
                    t.loadingState !== E.Gui.IDLE &&
                      (t.loadingState = E.Gui.REJECT);
                }
            }),
            reset() {
              (t.loadingState = E.Gui.IDLE),
                (t.vibeTrackCount = 0),
                (t.collectionTrackCount = 0),
                (t.collectionAlbumCount = 0);
            },
          }));
      var j = a(54306);
      let _ = l.V5.compose(
        l.V5.model("FullTracksList", {
          errorStatusCode: l.V5.maybeNull(l.V5.number),
          ids: l.V5.maybeNull(l.V5.array(l.V5.string)),
          tracks: l.V5.optional(l.V5.map(N.le), {}),
        }),
        v.Al,
        v.fu,
      )
        .views((t) => ({
          getTrackByIndex(e) {
            if (!t.ids || !t.ids.length) return null;
            let a = t.ids[e];
            return (a && t.tracks.get(a)) || null;
          },
          get isNotFound() {
            var e;
            let a =
                t.isResolved &&
                (null === (e = t.ids) || void 0 === e ? void 0 : e.length) ===
                  0,
              i =
                t.errorStatusCode === o.CN.NOT_FOUND ||
                t.errorStatusCode === o.CN.BAD_REQUEST;
            return (t.isRejected && i) || a;
          },
        }))
        .actions((t) => ({
          getTracksIds: (0, l.ls)(function* (e) {
            let { artistId: a } = e,
              { artistsResource: i, modelActionsLogger: r } = (0, l.dU)(t);
            try {
              t.loadingState = E.Gui.PENDING;
              let e = yield i.getArtistTrackIds({ artistId: a }),
                { sonataState: r } = (0, l.yj)(t);
              r.setUnloadedEntitiesData(e.map((t) => (0, j.RN)(t))),
                (t.ids = (0, l.pj)(e)),
                t.loadingState !== E.Gui.IDLE &&
                  (t.loadingState = E.Gui.RESOLVE);
            } catch (e) {
              r.error(e),
                e instanceof o.du &&
                  (e.statusCode === o.CN.NOT_FOUND ||
                    e.statusCode === o.CN.BAD_REQUEST) &&
                  (t.errorStatusCode = o.CN.NOT_FOUND),
                t.loadingState !== E.Gui.IDLE &&
                  (t.loadingState = E.Gui.REJECT);
            }
          }),
          getTracks: (0, l.ls)(function* (e) {
            let { trackIds: a } = e,
              { tracksResource: i, modelActionsLogger: r } = (0, l.dU)(t);
            try {
              let e = yield i.getTracksMeta({ trackIds: a, withProgress: !0 });
              t.tracks.merge(
                e.reduce((t, e) => ((t[e.id] = (0, N.Vt)(e)), t), {}),
              );
            } catch (t) {
              r.error(t);
            }
          }),
          reset() {
            let { sonataState: e } = (0, l.yj)(t);
            e.resetUnloadedEntitiesData(),
              (t.loadingState = E.Gui.IDLE),
              t.destroyItems([t.tracks, t.ids]);
          },
        }));
      var x = a(17979);
      let w = l.V5.compose(
          l.V5.model("OfflineArtistTrackIds", {
            ids: l.V5.maybeNull(l.V5.array(l.V5.string)),
          }),
          v.fu,
          v.Al,
        ).actions((t) => ({
          getIds: (0, l.ls)(function* (e, a) {
            let { modelActionsLogger: i } = (0, l.dU)(t);
            if (t.loadingState !== E.Gui.PENDING)
              try {
                t.loadingState = E.Gui.PENDING;
                let i = yield a.getArtistTrackIdsByUser(e);
                (t.ids = (0, l.pj)(i)),
                  t.loadingState !== E.Gui.IDLE &&
                    (t.loadingState = E.Gui.RESOLVE);
              } catch (e) {
                i.error(e),
                  t.loadingState !== E.Gui.IDLE &&
                    (t.loadingState = E.Gui.REJECT);
              }
          }),
          reset() {
            (t.loadingState = E.Gui.IDLE), t.destroyItems([t.ids]);
          },
        })),
        B = l.V5.compose(
          l.V5.model("OfflineArtist", {
            id: l.V5.maybeNull(l.V5.string),
            meta: l.V5.maybeNull(c.o9),
            trackIds: w,
            downloadedTracks: x.d,
          }),
          v.fu,
          v.Al,
        )
          .views((t) => ({
            get isNotFound() {
              return t.isResolved && !t.meta;
            },
          }))
          .actions((t) => ({
            setTracksCount: (e) => {
              var a;
              (null === (a = t.meta) || void 0 === a
                ? void 0
                : a.artist.counts) && (t.meta.artist.counts.tracks = e);
            },
            getArtist: (0, l.ls)(function* (e, a) {
              let { modelActionsLogger: i } = (0, l.dU)(t);
              if (t.loadingState !== E.Gui.PENDING) {
                t.id = e;
                try {
                  t.loadingState = E.Gui.PENDING;
                  let i = yield a.getArtist(e);
                  i && (t.meta = (0, l.pj)({ artist: (0, p.d)(i) })),
                    t.loadingState !== E.Gui.IDLE &&
                      (t.loadingState = E.Gui.RESOLVE);
                } catch (e) {
                  i.error(e),
                    t.loadingState !== E.Gui.IDLE &&
                      (t.loadingState = E.Gui.REJECT);
                }
              }
            }),
            reset() {
              (t.id = null),
                (t.loadingState = E.Gui.IDLE),
                t.trackIds.reset(),
                t.downloadedTracks.reset(),
                t.destroyItems([t.meta]);
            },
          })),
        W = l.V5.compose(
          l.V5.model("ArtistPage", {
            id: l.V5.maybeNull(l.V5.string),
            meta: l.V5.maybeNull(c.o9),
            landing: u.d5,
            popularTracks: l.V5.array(N.le),
            lastRelease: l.V5.maybeNull(d.ug),
            upcomingAlbum: l.V5.maybeNull(d.W9),
            concerts: l.V5.maybeNull(l.V5.array(S.Z)),
            similarArtists: l.V5.array(p.Go),
            playlists: l.V5.array(m.d2),
            errorStatusCode: l.V5.maybeNull(l.V5.number),
            deprecationTargetArtistId: l.V5.maybeNull(l.V5.number),
            albums: l.V5.array(d.ug),
            discography: l.V5.array(d.ug),
            compilations: l.V5.array(d.ug),
            clips: l.V5.array(g.x$),
            artistPick: l.V5.maybeNull(O),
            familiarInfo: F,
            albumsSubpage: f,
            fullTracksListSubpage: _,
            concertsSubpage: h,
            similarArtistsSubPage: P,
            clipsSubpage: I,
            familiarSubpage: k,
            commonSubPage: U,
            offlineArtist: B,
            infoLoadingState: v.fu,
            infoErrorStatusCode: l.V5.maybeNull(l.V5.number),
          }),
          v.Al,
          v.fu,
        )
          .views((t) => {
            let e = {
              get isLoading() {
                return t.isNeededToLoad || t.loadingState === E.Gui.PENDING;
              },
              get hasPopularTracks() {
                return e.isLoading || t.popularTracks.length > 0;
              },
              get hasAlbums() {
                return e.isLoading || t.albums.length > 0;
              },
              get hasDiscography() {
                return e.isLoading || t.discography.length > 0;
              },
              get hasCompilations() {
                return e.isLoading || t.compilations.length > 0;
              },
              get hasSimilarArtists() {
                return e.isLoading || t.similarArtists.length > 0;
              },
              get hasPlaylists() {
                return e.isLoading || (t.playlists && t.playlists.length > 0);
              },
              get hasConcerts() {
                return e.isLoading || (t.concerts && t.concerts.length > 0);
              },
              get hasClips() {
                return e.isLoading || t.clips.length > 0;
              },
              get concertsLink() {
                var a, i;
                if (
                  (null === (a = t.meta) || void 0 === a
                    ? void 0
                    : a.artist.id) &&
                  t.concerts &&
                  t.concerts.length > c.lj
                )
                  return "/artist/".concat(
                    null === (i = t.meta) || void 0 === i
                      ? void 0
                      : i.artist.id,
                    "/concerts",
                  );
                return null;
              },
              get selfLink() {
                return "/artist/".concat(t.id);
              },
              get isNotFound() {
                return (
                  t.isRejected &&
                  (t.errorStatusCode === o.CN.NOT_FOUND ||
                    t.errorStatusCode === o.CN.BAD_REQUEST)
                );
              },
              get isInfoNotFound() {
                return (
                  t.infoLoadingState.isRejected &&
                  (t.infoErrorStatusCode === o.CN.NOT_FOUND ||
                    t.infoErrorStatusCode === o.CN.BAD_REQUEST)
                );
              },
              get isSomethingWentWrong() {
                return t.isRejected && !e.isNotFound;
              },
              get isInfoSomethingWentWrong() {
                return t.infoLoadingState.isRejected && !e.isInfoNotFound;
              },
              get isCacheNotFound() {
                return t.isRejected && t.errorStatusCode === n.DW;
              },
              get hasReleaseBlock() {
                return !!(e.isLoading || t.upcomingAlbum || t.lastRelease);
              },
            };
            return e;
          })
          .actions((t) => ({
            getData: (0, l.ls)(function* (e) {
              let { artistId: a, preloadedArtist: i } = e,
                { slides: r, experiments: n, disclaimer: u } = (0, l.yj)(t),
                { artistsResource: g, modelActionsLogger: v } = (0, l.dU)(t),
                C = n.checkExperiment(
                  E.peG.WebNextArtistDisableLastReleases,
                  "on",
                ),
                b = n.checkExperiment(
                  E.peG.WebNextArtistDisablePopularTracks,
                  "on",
                ),
                G = n.checkExperiment(
                  E.peG.WebNextArtistDisableSimilarArtists,
                  "on",
                ),
                T = n.checkExperiment(
                  E.peG.WebNextArtistDisablePopularAlbums,
                  "on",
                ),
                A = n.checkExperiment(
                  E.peG.WebNextArtistDisableDiscography,
                  "on",
                ),
                f = n.checkExperiment(
                  E.peG.WebNextArtistDisableCompilations,
                  "on",
                ),
                I = n.checkExperiment(
                  E.peG.WebNextArtistDisablePlaylists,
                  "on",
                ),
                h = n.checkExperiment(E.peG.WebNextAgentArtist, "on");
              if (((t.id = a), t.loadingState !== E.Gui.PENDING))
                try {
                  var L, k, R, O;
                  t.loadingState = E.Gui.PENDING;
                  let e = i;
                  e ||
                    (e = yield g.getBriefInfo({
                      artistId: a,
                      popularTracksCount: c.ef,
                      fetchPlaylistLikesCounts: !0,
                      discographyBlockEnabled: !0,
                      useClipDataFormat: !0,
                    }));
                  let {
                    popularTracks: v,
                    error: P,
                    artist: U,
                    stats: F,
                    albums: j,
                    playlists: _,
                    alsoAlbums: x,
                    similarArtists: w,
                    lastReleases: B,
                    concerts: W,
                    upcomingAlbum: Q,
                    discography: q,
                    artistPick: J,
                    clips: M,
                    allCovers: Y,
                  } = e;
                  if (
                    "not-found" === P ||
                    (null == U ? void 0 : U.error) === "not-found"
                  ) {
                    (t.errorStatusCode = o.CN.NOT_FOUND),
                      (t.loadingState = E.Gui.REJECT);
                    return;
                  }
                  if (
                    null === (L = U.deprecation) || void 0 === L
                      ? void 0
                      : L.targetArtistId
                  ) {
                    (t.deprecationTargetArtistId =
                      U.deprecation.targetArtistId),
                      (t.loadingState = E.Gui.RESOLVE);
                    return;
                  }
                  (t.commonSubPage.artistName = U.name),
                    n.checkExperiment(
                      E.peG.WebNextArtistSkeletonHeader,
                      "on",
                    ) || (t.meta = (0, l.pj)(y(U, F, Y)));
                  let z = (
                      null !== (k = U.disclaimers) && void 0 !== k ? k : []
                    ).includes(s.e.MODAL),
                    H = (
                      null !== (R = U.disclaimers) && void 0 !== R ? R : []
                    ).includes(s.e.FOREIGN_AGENT),
                    Z = ((0, E.UY5)(
                      null !== (O = U.disclaimers) && void 0 !== O ? O : [],
                      s.e.FOREIGN_AGENT,
                    ) || [])[0];
                  if (
                    (((!U.available && z) || (h && H) || Z) &&
                      (yield u.getDisclaimerData({
                        entityId: a,
                        entityType: E.coP.ARTIST,
                        disclaimerId: null == Z ? void 0 : Z.id,
                      })),
                    !C && B && B.length > 0)
                  ) {
                    let e = B[0];
                    e &&
                      j &&
                      j.length > 1 &&
                      (t.lastRelease = (0, l.pj)((0, d.ym)(e)));
                  }
                  Q && (t.upcomingAlbum = (0, l.pj)((0, d.wq)(Q))),
                    W && (t.concerts = (0, l.pj)(W.map(S.zj))),
                    !b &&
                      v &&
                      v.length > 0 &&
                      (t.popularTracks = (0, l.pj)(
                        v.slice(0, c.ef).map((t) => (0, N.Vt)(t)),
                      )),
                    !G &&
                      w &&
                      w.length > 0 &&
                      (t.similarArtists = (0, l.pj)(w.slice(0, c.r2).map(p.d))),
                    !T &&
                      Number(null == j ? void 0 : j.length) > 0 &&
                      (t.albums = (0, l.pj)(null == j ? void 0 : j.map(d.ym))),
                    !A &&
                      Number(null == q ? void 0 : q.length) > 0 &&
                      (t.discography = (0, l.pj)(
                        null == q ? void 0 : q.map(d.ym).slice(0, c.kT),
                      )),
                    !f &&
                      Number(null == x ? void 0 : x.length) > 0 &&
                      (t.compilations = (0, l.pj)(
                        null == x ? void 0 : x.map(d.ym).slice(0, c.kT),
                      )),
                    !I &&
                      _ &&
                      _.length > 0 &&
                      (t.playlists = (0, l.pj)(_.map(m.Q9).slice(0, c.kT))),
                    J && (t.artistPick = D(J)),
                    M && (t.clips = (0, l.pj)(M.map(V).slice(0, c.rL))),
                    r.resetArtist(),
                    t.loadingState !== E.Gui.IDLE &&
                      (t.loadingState = E.Gui.RESOLVE);
                } catch (e) {
                  v.error(e),
                    e instanceof o.du && (t.errorStatusCode = e.statusCode),
                    t.loadingState !== E.Gui.IDLE &&
                      (t.loadingState = E.Gui.REJECT);
                }
            }),
            getInfo: (0, l.ls)(function* (e) {
              let { artistId: a } = e,
                { experiments: i, disclaimer: r } = (0, l.yj)(t),
                { artistsResource: n, modelActionsLogger: u } = (0, l.dU)(t),
                d = i.checkExperiment(E.peG.WebNextAgentArtist, "on");
              if (
                ((t.id = a), t.infoLoadingState.loadingState !== E.Gui.PENDING)
              )
                try {
                  var c;
                  t.infoLoadingState.loadingState = E.Gui.PENDING;
                  let e = yield n.getInfo({ artistId: a }),
                    { artist: i, deprecation: o } = e;
                  if (null == o ? void 0 : o.targetArtistId) {
                    (t.deprecationTargetArtistId = o.targetArtistId),
                      (t.loadingState = E.Gui.RESOLVE);
                    return;
                  }
                  (t.commonSubPage.artistName = i.name),
                    (t.meta = (0, l.pj)(T(e)));
                  let { disclaimers: u, available: g } =
                      null !== (c = i.contentRestrictions) && void 0 !== c
                        ? c
                        : {},
                    m = (null != u ? u : []).includes(s.e.MODAL),
                    N = (null != u ? u : []).includes(s.e.FOREIGN_AGENT),
                    p = ((0, E.UY5)(null != u ? u : [], s.e.FOREIGN_AGENT) ||
                      [])[0];
                  ((!g && m) || (d && N) || p) &&
                    (yield r.getDisclaimerData({
                      entityId: a,
                      entityType: E.coP.ARTIST,
                      disclaimerId: null == p ? void 0 : p.id,
                    })),
                    t.infoLoadingState.loadingState !== E.Gui.IDLE &&
                      (t.infoLoadingState.loadingState = E.Gui.RESOLVE);
                } catch (e) {
                  u.error(e),
                    e instanceof o.du && (t.infoErrorStatusCode = e.statusCode),
                    t.infoLoadingState.loadingState !== E.Gui.IDLE &&
                      (t.infoLoadingState.loadingState = E.Gui.REJECT);
                }
            }),
            reset() {
              (t.loadingState = E.Gui.IDLE),
                (t.infoLoadingState.loadingState = E.Gui.IDLE),
                t.landing.reset(),
                (t.id = null),
                (t.errorStatusCode = null),
                (t.deprecationTargetArtistId = null),
                t.destroyItems([
                  t.clips,
                  t.popularTracks,
                  t.similarArtists,
                  t.playlists,
                  t.albums,
                  t.discography,
                  t.compilations,
                  t.meta,
                  t.lastRelease,
                  t.upcomingAlbum,
                  t.concerts,
                  t.artistPick,
                ]);
            },
          }));
      var Q = a(80829),
        q = a(75106),
        J = a(8328),
        M = a(8224);
      a(2257);
      var Y = a(85590),
        z = a(75289),
        H = a(61795);
    },
  },
]);
