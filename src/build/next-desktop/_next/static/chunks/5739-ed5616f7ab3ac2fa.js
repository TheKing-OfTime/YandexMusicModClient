(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5739, 2436, 4163, 3191, 7454, 8337, 789],
  {
    62738: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ContainerProvider: function () {
            return n;
          },
        });
      var i = a(8759),
        r = a(99616),
        s = a(5674);
      let l = async (e) => {
          let {
              hostTld: t,
              forwardedForY: a,
              changeLanguageToken: i,
              tracestate: r,
              traceparent: l,
              serverDetectedLang: n,
              env: o,
            } = e,
            d = await (0, s.ZO)({
              tld: t,
              forwardedForY: a,
              changeLanguageToken: i,
              tracestate: r,
              traceparent: l,
              serverDetectedLang: n,
              env: o,
            });
          return await d.get(s.uh).loadDictionary(), d;
        },
        n = (e) => {
          let {
              children: t,
              hostTld: a,
              env: n,
              forwardedForY: o,
              tracestate: d,
              traceparent: u,
              changeLanguageToken: c,
              serverDetectedLang: m,
            } = e,
            g = (0, r.use)(
              l({
                hostTld: a,
                env: n,
                forwardedForY: o,
                tracestate: d,
                traceparent: u,
                changeLanguageToken: c,
                serverDetectedLang: m,
              }),
            );
          return (0, i.jsx)(s.Xl.Provider, { value: g, children: t });
        };
    },
    13987: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          StoreProvider: function () {
            return ej;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(96555),
        l = a(11769),
        n = a(99616),
        o = a(5674),
        d = a(59899),
        u = a(45412),
        c = a(86502);
      let m = {
        experiments: { loadingState: o.Gu.IDLE, experiments: {} },
        user: {
          account: { loadingState: o.Gu.IDLE },
          settings: { loadingState: o.Gu.IDLE, showWizard: !0 },
        },
        collection: {
          albums: {
            loadingState: o.Gu.IDLE,
            upcomingAlbumsLoadingState: o.Gu.IDLE,
            items: [],
          },
          playlistsCreated: { loadingState: o.Gu.IDLE, items: [] },
          playlistsLiked: { loadingState: o.Gu.IDLE, items: [] },
          artists: { loadingState: o.Gu.IDLE, items: [] },
          landing: {
            loadingState: o.Gu.IDLE,
            tabs: { loadingState: o.Gu.IDLE, data: [] },
          },
          shelf: {
            recentlyPlayed: { loadingState: o.Gu.IDLE, title: "" },
            liked: { loadingState: o.Gu.IDLE, title: "" },
          },
        },
        main: {
          landing: {
            loadingState: o.Gu.IDLE,
            tabs: { loadingState: o.Gu.IDLE, data: [] },
          },
        },
        kinopoisk: {
          landing: {
            loadingState: o.Gu.IDLE,
            tabs: { loadingState: o.Gu.IDLE, data: [] },
          },
        },
        nonMusic: {
          landing: {
            loadingState: o.Gu.IDLE,
            tabs: { loadingState: o.Gu.IDLE, data: [] },
          },
        },
        settings: { layout: null },
        currentTrackInfo: {
          trackLoadingState: o.Gu.IDLE,
          creditsLoadingState: o.Gu.IDLE,
          id: null,
          albumId: null,
          isUGC: null,
          fullTrack: null,
          credits: null,
        },
        album: {
          loadingState: o.Gu.IDLE,
          items: [],
          meta: null,
          otherAlbumVersions: [],
          latestGenreAlbums: { loadingState: o.Gu.IDLE, items: [] },
          otherArtistAlbums: { loadingState: o.Gu.IDLE, items: [] },
        },
        artist: {
          loadingState: o.Gu.IDLE,
          meta: null,
          popularTracks: [],
          similarArtists: [],
          albums: [],
          discography: [],
          compilations: [],
          playlists: [],
          fullTracksListSubpage: { loadingState: o.Gu.IDLE },
          albumsSubpage: { loadingState: o.Gu.IDLE },
          concertsSubpage: { loadingState: o.Gu.IDLE },
          familiarInfo: { loadingState: o.Gu.IDLE },
          familiarSubpage: { loadingState: o.Gu.IDLE },
        },
        library: {
          loadingState: o.Gu.IDLE,
          tracks: {},
          artists: {},
          playlists: {},
          albums: {},
        },
        sonataState: {
          contextId: null,
          contextType: null,
          entityMeta: null,
          status: c.Xz.IDLE,
          canMoveBackward: !1,
          canMoveForward: !1,
          canSpeed: !1,
          canChangeRepeatMode: !0,
          repeatMode: u.zq.NONE,
          quality: d.nJ.HQ,
          canShuffle: !0,
          shuffle: !1,
        },
        playlist: {
          loadingState: o.Gu.IDLE,
          searchLoadingState: o.Gu.IDLE,
          meta: null,
          items: [],
          searchItems: {},
          similarPlaylists: [],
        },
        slides: {
          userSlidesLoadingState: o.Gu.IDLE,
          artistSlidesLoadingState: o.Gu.IDLE,
          userItems: [],
          artistItems: [],
        },
        vibe: {
          getLastLoadingState: o.Gu.IDLE,
          vibeResetLoadingState: o.Gu.IDLE,
          isLoading: !1,
        },
        search: {
          searchCorrectedText: null,
          loadingState: o.Gu.IDLE,
          results: [],
          history: { loadingState: o.Gu.IDLE, items: [] },
          mixes: { loadingState: o.Gu.IDLE, items: [] },
        },
        vibeSettings: { loadingState: o.Gu.IDLE },
        pinsCollection: { loadingState: o.Gu.IDLE, index: {} },
        genre: {
          loadingState: o.Gu.IDLE,
          albumsSubpage: { loadingState: o.Gu.IDLE },
          artistsSubpage: { loadingState: o.Gu.IDLE },
          playlistsSubpage: { loadingState: o.Gu.IDLE },
        },
        genres: { title: null, loadingState: o.Gu.IDLE, items: [] },
        mixes: { loadingState: o.Gu.IDLE, items: [] },
        tag: {
          tagLoadingState: o.Gu.IDLE,
          playlistsLoadingState: o.Gu.IDLE,
          playlistsData: [],
          playlists: [],
        },
        chart: {
          title: null,
          playlistMeta: null,
          loadingState: o.Gu.IDLE,
          items: [],
        },
        post: { loadingState: o.Gu.IDLE },
        landingBlockEntities: { loadingState: o.Gu.IDLE },
        contextMenuPlaylists: { loadingState: o.Gu.IDLE, items: [] },
        musicHistory: { loadingState: o.Gu.IDLE, tabs: null },
        createPlaylist: {},
        location: {},
        disclaimer: { loadingState: o.Gu.IDLE },
        trailer: { loadingState: o.Gu.IDLE },
        syncLyrics: { loadingState: o.Gu.IDLE },
        modals: {
          disclaimerModal: {},
          fullscreenPlayerModal: {},
          trackModal: {},
          releaseNotesModal: {},
          shortcutsModal: {},
          aboutAppModal: {},
          trailerModal: {},
        },
        landing: {
          loadingState: o.Gu.IDLE,
          tabs: { loadingState: o.Gu.IDLE, data: [] },
        },
      };
      var g = a(17620),
        p = a(53191),
        h = a(69658),
        v = a(67678),
        _ = a(96911),
        S = a(65704);
      let b = s.V5.model("CollectionAlbumsPage", {
        loadingState: s.V5.enumeration(Object.values(o.Gu)),
        sort: s.V5.maybeNull(S.$4),
        items: s.V5.array(s.V5.maybeNull(_.ug)),
        pager: s.V5.maybeNull(S.Vn),
        alreadyRequestedPages: s.V5.map(s.V5.number),
        pendingPages: s.V5.map(s.V5.number),
        requestsCount: s.V5.maybeNull(s.V5.number),
        upcomingAlbumsLoadingState: s.V5.enumeration(Object.values(o.Gu)),
        upcomingAlbums: s.V5.maybeNull(s.V5.array(_.W9)),
      })
        .views((e) => ({
          get isAlbumsLoading() {
            return (
              e.loadingState === o.Gu.IDLE ||
              (e.loadingState === o.Gu.PENDING && 0 === e.items.length)
            );
          },
          get isLoading() {
            return (
              this.isAlbumsLoading ||
              e.upcomingAlbumsLoadingState === o.Gu.IDLE ||
              e.upcomingAlbumsLoadingState === o.Gu.PENDING
            );
          },
          get isUpcomingAlbumsLoading() {
            return (
              e.upcomingAlbumsLoadingState === o.Gu.IDLE ||
              e.upcomingAlbumsLoadingState === o.Gu.PENDING
            );
          },
          get isUpcomingAlbumsEmpty() {
            var t;
            return (
              !this.isUpcomingAlbumsLoading &&
              (!e.upcomingAlbums ||
                (null === (t = e.upcomingAlbums) || void 0 === t
                  ? void 0
                  : t.length) === 0)
            );
          },
          get isAlbumsEmpty() {
            var a;
            return (
              !this.isAlbumsLoading &&
              (!e.items ||
                (null === (a = e.items) || void 0 === a ? void 0 : a.length) ===
                  0)
            );
          },
        }))
        .actions((e) => {
          let t = {
            getData: (0, s.ls)(function* (t) {
              let {
                  userId: a,
                  page: i = 0,
                  pageSize: r = 20,
                  sortBy: l,
                  sortOrder: n,
                  metaType: d,
                } = t,
                { usersResource: u, modelActionsLogger: c } = (0, s.dU)(e);
              if (
                !(
                  (e.loadingState === o.Gu.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i),
                  (e.sort = null),
                  l && n && (e.sort = { sortBy: l, sortOrder: n });
                try {
                  var m;
                  (e.loadingState = o.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield u.getLikedAlbums({
                      userId: a,
                      page: i,
                      pageSize: r,
                      sortBy: l,
                      sortOrder: n,
                      metaType: d,
                    }),
                    c = { page: i, perPage: r, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, s.pj)(
                      Array.from({ length: c.total }, () => null),
                    ));
                  let g = t.albums.map((e) => {
                    let { album: t } = e;
                    return (0, _.ym)(t);
                  });
                  (0, o.AG)({
                    items: e.items,
                    mappedRawItems: g,
                    page: i,
                    pageSize: r,
                  }),
                    (e.pager = c),
                    (e.requestsCount =
                      (null !== (m = e.requestsCount) && void 0 !== m ? m : 0) +
                      1),
                    e.loadingState !== o.Gu.IDLE &&
                      (e.loadingState = o.Gu.RESOLVE);
                } catch (t) {
                  c.error(t), (e.loadingState = o.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            getPresaves: (0, s.ls)(function* (t) {
              let { userId: a } = t,
                { usersResource: i, modelActionsLogger: r } = (0, s.dU)(e),
                { experiments: l } = (0, s.yj)(e),
                n = l.checkExperiment(o.pe.WebPresave, "on");
              if (e.upcomingAlbumsLoadingState !== o.Gu.PENDING && n)
                try {
                  var d;
                  e.upcomingAlbumsLoadingState = o.Gu.PENDING;
                  let t = yield i.getPresaves({
                    userId: a,
                    includeReleased: !1,
                    includeUpcoming: !0,
                  });
                  (e.upcomingAlbums = (0, s.pj)(
                    null === (d = t.upcomingAlbums) || void 0 === d
                      ? void 0
                      : d.map(_.wq),
                  )),
                    e.upcomingAlbumsLoadingState !== o.Gu.IDLE &&
                      (e.upcomingAlbumsLoadingState = o.Gu.RESOLVE);
                } catch (t) {
                  r.error(t),
                    e.upcomingAlbumsLoadingState !== o.Gu.IDLE &&
                      (e.upcomingAlbumsLoadingState = o.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = o.Gu.IDLE),
                (e.sort = null),
                (e.items = (0, s.pj)([])),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.upcomingAlbumsLoadingState = o.Gu.IDLE),
                (e.upcomingAlbums = null);
            },
          };
          return t;
        });
      var y = a(81446);
      let f = s.V5.model("CollectionArtistsPage", {
        loadingState: s.V5.enumeration(Object.values(o.Gu)),
        sort: s.V5.maybeNull(S.$4),
        items: s.V5.array(s.V5.maybeNull(y.Go)),
        pager: s.V5.maybeNull(S.Vn),
        alreadyRequestedPages: s.V5.map(s.V5.number),
        pendingPages: s.V5.map(s.V5.number),
        requests: s.V5.maybeNull(s.V5.number),
      }).actions((e) => {
        let t = {
          getData: (0, s.ls)(function* (t) {
            let {
                userId: a,
                page: i = 0,
                pageSize: r = 20,
                sortBy: l,
                sortOrder: n,
              } = t,
              { usersResource: d, modelActionsLogger: u } = (0, s.dU)(e);
            if (
              !(
                (e.loadingState === o.Gu.PENDING &&
                  e.pendingPages.has("".concat(i))) ||
                e.alreadyRequestedPages.has("".concat(i))
              )
            ) {
              "number" == typeof i &&
                e.alreadyRequestedPages.set("".concat(i), i),
                (e.sort = null),
                l && n && (e.sort = { sortBy: l, sortOrder: n });
              try {
                var c;
                (e.loadingState = o.Gu.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let t = yield d.getLikedArtists({
                    userId: a,
                    page: i,
                    pageSize: r,
                    sortBy: l,
                    sortOrder: n,
                  }),
                  u = { page: i, perPage: r, total: t.pager.total };
                0 === e.items.length &&
                  (e.items = (0, s.pj)(
                    Array.from({ length: u.total }, () => null),
                  ));
                let m = t.artists.map(y.d);
                (e.loadingState = o.Gu.RESOLVE),
                  (0, o.AG)({
                    items: e.items,
                    mappedRawItems: m,
                    page: i,
                    pageSize: r,
                  }),
                  (e.pager = u),
                  (e.requests =
                    (null !== (c = e.requests) && void 0 !== c ? c : 0) + 1),
                  e.loadingState !== o.Gu.IDLE &&
                    (e.loadingState = o.Gu.RESOLVE);
              } catch (t) {
                u.error(t), (e.loadingState = o.Gu.REJECT);
              } finally {
                e.pendingPages.delete("".concat(i));
              }
            }
          }),
          reset() {
            (e.loadingState = o.Gu.IDLE),
              (e.sort = null),
              e.pendingPages.clear(),
              (e.pager = null),
              e.alreadyRequestedPages.clear(),
              (e.items = (0, s.pj)([]));
          },
        };
        return t;
      });
      var C = a(3515);
      let E = s.V5.model("CollectionPlaylistsCreatedPage", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          sort: s.V5.maybeNull(S.$4),
          items: s.V5.array(s.V5.maybeNull(C.Cd)),
          pager: s.V5.maybeNull(S.Vn),
          alreadyRequestedPages: s.V5.map(s.V5.number),
          pendingPages: s.V5.map(s.V5.number),
          kinds: s.V5.array(s.V5.number),
          requests: s.V5.maybeNull(s.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gu.IDLE || e.loadingState === o.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === o.Gu.RESOLVE;
            },
            get isEmpty() {
              return this.isLoaded && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => {
            let t = {
              getKinds: (0, s.ls)(function* (t) {
                let a = [],
                  { usersResource: i } = (0, s.dU)(e);
                (a = yield i.getPlaylistsKinds({ userId: t })),
                  (e.kinds = (0, s.pj)(a));
              }),
              getData: (0, s.ls)(function* (a) {
                let {
                    userId: i,
                    page: r = 0,
                    pageSize: l = 20,
                    withLikesCount: n,
                  } = a,
                  { usersResource: d, modelActionsLogger: u } = (0, s.dU)(e);
                if (
                  !(
                    (e.loadingState === o.Gu.PENDING &&
                      e.pendingPages.has("".concat(r))) ||
                    e.alreadyRequestedPages.has("".concat(r))
                  )
                ) {
                  "number" == typeof r &&
                    e.alreadyRequestedPages.set("".concat(r), r);
                  try {
                    var c;
                    e.isLoaded || (e.loadingState = o.Gu.PENDING),
                      e.pendingPages.set("".concat(r), r),
                      0 === e.kinds.length && (yield t.getKinds(i));
                    let a = r * l,
                      u = a + l,
                      m = e.kinds.slice(a, u),
                      g = yield d.getPlaylistsByKinds({
                        userId: i,
                        kinds: m,
                        withLikesCount: n,
                        withTracks: !1,
                      });
                    e.requests =
                      (null !== (c = e.requests) && void 0 !== c ? c : 0) + 1;
                    let p = { page: r, perPage: l, total: e.kinds.length };
                    0 === e.items.length &&
                      (e.items = (0, s.pj)(
                        Array.from({ length: p.total }, () => null),
                      ));
                    let h = g.map(C.PV);
                    (0, o.AG)({
                      items: e.items,
                      mappedRawItems: h,
                      page: r,
                      pageSize: l,
                    }),
                      (e.pager = p),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (t) {
                    u.error(t), (e.loadingState = o.Gu.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(r));
                  }
                }
              }),
              reset() {
                (e.loadingState = o.Gu.IDLE),
                  (e.sort = null),
                  (e.items = (0, s.pj)([])),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  e.pendingPages.clear(),
                  (e.kinds = (0, s.pj)([])),
                  (e.requests = null);
              },
            };
            return t;
          }),
        x = s.V5.model("CollectionPlaylistsLikedPage", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          sort: s.V5.maybeNull(S.$4),
          items: s.V5.array(s.V5.maybeNull(C.Cd)),
          pager: s.V5.maybeNull(S.Vn),
          alreadyRequestedPages: s.V5.map(s.V5.number),
          pendingPages: s.V5.map(s.V5.number),
          requests: s.V5.maybeNull(s.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gu.IDLE || e.loadingState === o.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === o.Gu.RESOLVE;
            },
            get isEmpty() {
              return this.isLoaded && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, s.ls)(function* (t) {
                let {
                  userId: a,
                  page: i = 0,
                  pageSize: r = 20,
                  sortBy: l,
                  sortOrder: n,
                  metaType: d,
                  withTracks: u,
                } = t;
                if (
                  (e.loadingState === o.Gu.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
                  return;
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                let { usersResource: c, modelActionsLogger: m } = (0, s.dU)(e);
                (e.sort = null),
                  l && n && (e.sort = { sortBy: l, sortOrder: n });
                try {
                  var g;
                  (e.loadingState = o.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let { likedPlaylists: t, pager: m } =
                    yield c.getLikedPlaylists({
                      userId: a,
                      page: i,
                      pageSize: r,
                      sortBy: l,
                      sortOrder: n,
                      metaType: d,
                      withTracks: u,
                    });
                  (e.requests =
                    (null !== (g = e.requests) && void 0 !== g ? g : 0) + 1),
                    0 === e.items.length &&
                      (e.items = (0, s.pj)(
                        Array.from({ length: m.total }, () => null),
                      ));
                  let p = t.map((e) => {
                    let { playlist: t } = e;
                    return (0, C.PV)(t);
                  });
                  (0, o.AG)({
                    items: e.items,
                    mappedRawItems: p,
                    page: i,
                    pageSize: r,
                  }),
                    (e.pager = m),
                    (e.loadingState = o.Gu.RESOLVE);
                } catch (t) {
                  m.error(t),
                    "number" == typeof i &&
                      e.alreadyRequestedPages.delete("".concat(i)),
                    (e.requests =
                      "number" == typeof e.requests ? e.requests - 1 : 0),
                    (e.loadingState = o.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }),
              reset() {
                (e.loadingState = o.Gu.IDLE),
                  (e.sort = null),
                  (e.items = (0, s.pj)([])),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  e.pendingPages.clear(),
                  (e.requests = null);
              },
            };
            return t;
          });
      var N = a(96431),
        P = a(95539);
      let I = (e) => (0, s.pj)({ type: e.type, track: (0, P.Vt)(e.track) });
      var L = a(20210);
      let k = (e) =>
          (0, s.pj)({
            type: e.type,
            album: e.album && (0, _.ym)(e.album),
            playlist: e.playlist && (0, L.Q9)(e.playlist),
            track: (0, P.Vt)(e.track),
          }),
        A = s.V5.model("ShelfLikedItem", { type: s.V5.string, track: P.le }),
        T = s.V5.model("ShelfRecentlyPlayedItem", {
          type: s.V5.string,
          album: s.V5.maybe(_.ug),
          playlist: s.V5.maybe(L.d2),
          track: P.le,
        }),
        j = s.V5.model("CollectionShelfLiked", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          title: s.V5.string,
          typeForFrom: s.V5.maybe(s.V5.string),
          entities: s.V5.array(A),
          pager: s.V5.maybe(S.Vn),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gu.IDLE || e.loadingState === o.Gu.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === o.Gu.REJECT;
            },
            get isResolved() {
              return e.loadingState === o.Gu.RESOLVE;
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, s.ls)(function* () {
                let { nonMusicResource: t, logger: a } = (0, s.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    e.loadingState = o.Gu.PENDING;
                    let a = yield t.getShelfLiked();
                    (e.title = a.title),
                      (e.typeForFrom = a.typeForFrom),
                      (e.pager = a.pager),
                      (e.entities = (0, s.pj)(a.entities.map(I))),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (t) {
                    !(t instanceof N.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      a.error(t),
                      (e.loadingState = o.Gu.REJECT);
                  }
              }),
            };
            return t;
          }),
        G = s.V5.model("CollectionShelfRecentlyPlayed", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          title: s.V5.string,
          typeForFrom: s.V5.maybe(s.V5.string),
          entities: s.V5.array(T),
          pager: s.V5.maybe(S.Vn),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gu.IDLE || e.loadingState === o.Gu.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === o.Gu.REJECT;
            },
            get isResolved() {
              return e.loadingState === o.Gu.RESOLVE;
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, s.ls)(function* () {
                let { nonMusicResource: t, logger: a } = (0, s.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    e.loadingState = o.Gu.PENDING;
                    let a = yield t.getShelfRecentlyPlayed();
                    (e.title = a.title),
                      (e.typeForFrom = a.typeForFrom),
                      (e.pager = a.pager),
                      (e.entities = (0, s.pj)(a.entities.map(k))),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (t) {
                    !(t instanceof N.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      a.error(t),
                      (e.loadingState = o.Gu.REJECT);
                  }
              }),
            };
            return t;
          }),
        D = s.V5.model("CollectionShelfPage", { recentlyPlayed: G, liked: j })
          .views((e) => ({
            get isLoading() {
              return e.recentlyPlayed.isLoading && e.liked.isLoading;
            },
            get isRejected() {
              return e.recentlyPlayed.isRejected && e.liked.isRejected;
            },
            get isResolved() {
              return e.recentlyPlayed.isResolved && e.liked.isResolved;
            },
            get isIdle() {
              return (
                e.recentlyPlayed.loadingState === o.Gu.IDLE &&
                e.liked.loadingState === o.Gu.IDLE
              );
            },
            get hasRecentlyPlayed() {
              return (
                e.recentlyPlayed.isLoading ||
                e.recentlyPlayed.entities.length > 0
              );
            },
            get hasLiked() {
              return e.liked.isLoading || e.liked.entities.length > 0;
            },
          }))
          .actions((e) => ({
            reset() {
              (e.recentlyPlayed.entities = (0, s.pj)([])),
                (e.recentlyPlayed.loadingState = o.Gu.IDLE),
                (e.liked.entities = (0, s.pj)([])),
                (e.liked.loadingState = o.Gu.IDLE);
            },
          })),
        R = s.V5.model("CollectionPage", {
          landing: v.d5,
          albums: b,
          playlistsLiked: x,
          playlistsCreated: E,
          artists: f,
          shelf: D,
        });
      a(3653), a(52539), a(97748), a(86643), a(90554), a(1363), a(68931);
      var V = a(30651),
        O = a(24438);
      a(9702);
      let w = s.V5.model("KinopoiskPage", { landing: v.d5 });
      a(71486), a(63246);
      let B = s.V5.model("MainPage", { landing: v.d5 });
      a(12905);
      var M = a(48616),
        U = a(67414),
        F = a(53783),
        W = a(84290);
      let H = (e) =>
          e.reduce((e, t) => {
            let a = "".concat(t.type, "_").concat(t.id);
            if (a in e) {
              var i;
              null === (i = e[a]) || void 0 === i || i.push(t);
            } else e[a] = [t];
            return e;
          }, {}),
        z = (e) => {
          switch (e.type) {
            case M.EW.ALBUM:
              return "".concat(e.type, "_").concat((0, U.un)(e));
            case M.EW.TRACK:
              return "".concat(e.type, "_").concat((0, U.LV)(e));
            case M.EW.WAVE:
              return "".concat(e.type, "_").concat((0, U.R3)(e));
            case M.EW.PLAYLIST:
              return "".concat(e.type, "_").concat((0, U.aQ)(e));
            case M.EW.ARTIST:
              return "".concat(e.type, "_").concat((0, U.H5)(e));
          }
        },
        q = (e) => {
          let t = { historyTabs: [] },
            a = 0;
          for (let s of e.historyTabs) {
            var i, r;
            if (a > 1e3) break;
            let e = { ...s, items: [] };
            for (let t of null !== (i = s.items) && void 0 !== i ? i : []) {
              if (a > 1e3) break;
              let i = { ...t, tracks: [] };
              for (let e of t.tracks) {
                if (a > 1e3) break;
                i.tracks.push(e), ++a;
              }
              null === (r = e.items) || void 0 === r || r.push(i);
            }
            e.items && e.items.length > 0 && t.historyTabs.push(e);
          }
          return t;
        },
        Z = (e) =>
          e
            .map((e) => {
              switch (e.type) {
                case M.EW.ARTIST:
                case M.EW.ALBUM:
                  return { type: e.type, data: { itemId: { id: e.id } } };
                case M.EW.PLAYLIST: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { uid: Number(t), kind: Number(a) } },
                  };
                }
                case M.EW.WAVE:
                  return {
                    type: e.type,
                    data: { itemId: { seeds: e.id.split(",") } },
                  };
                case M.EW.TRACK: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { trackId: String(t), albumId: a } },
                  };
                }
                default:
                  return null;
              }
            })
            .filter((e) => e),
        J = s.V5.model("MusicHistoryPage", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          indexesMap: s.V5.map(s.V5.number),
          items: s.V5.maybeNull(s.V5.array(F.M)),
          datesMap: s.V5.map(s.V5.boolean),
          tabs: s.V5.maybeNull(s.V5.array(U.t9)),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gu.IDLE || e.loadingState === o.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === o.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === o.Gu.REJECT;
            },
            get isEmpty() {
              var t;
              return (
                (this.isLoaded || this.isRejected) &&
                (null === (t = e.tabs) || void 0 === t ? void 0 : t.length) ===
                  0
              );
            },
            getStartAndEndIndexes(t) {
              var a, i;
              let r = t,
                s = t + 1;
              return (
                (null === (a = e.items) || void 0 === a
                  ? void 0
                  : a.slice(t - 25 + 1, t).some((e) => !e.isLoaded)) &&
                  (r = t - 25 + 1),
                (null === (i = e.items) || void 0 === i
                  ? void 0
                  : i.slice(t, t + 25).some((e) => !e.isLoaded)) &&
                  (s = t + 25),
                [r, s]
              );
            },
            getItemsToLoad(t) {
              var a, i;
              let [r, s] = this.getStartAndEndIndexes(t);
              return null !==
                (i =
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.slice(r, s).filter((e) => !e.isLoaded)) && void 0 !== i
                ? i
                : [];
            },
            isInObservationRange(t) {
              var a;
              return (
                (0 !== t && t % 25 == 0) ||
                (e.items &&
                  t ===
                    (null === (a = e.items) || void 0 === a
                      ? void 0
                      : a.length) -
                      1)
              );
            },
            get dates() {
              var a, i;
              return null !==
                (i =
                  null === (a = e.tabs) || void 0 === a
                    ? void 0
                    : a.map((e) => e.date)) && void 0 !== i
                ? i
                : [];
            },
          }))
          .actions((e) => {
            let t = {
              fillItemsAndIndexes() {
                var t;
                let a = 0;
                (e.items = (0, s.pj)([])),
                  null === (t = e.tabs) ||
                    void 0 === t ||
                    t.forEach((t, i) => {
                      var r;
                      e.datesMap.set(t.date, !1),
                        null === (r = t.blocks) ||
                          void 0 === r ||
                          r.forEach((t, r) => {
                            var s;
                            let l = t.id;
                            e.indexesMap.set(
                              "".concat(i, "_").concat(r, "_").concat(l),
                              a,
                            ),
                              null === (s = e.items) ||
                                void 0 === s ||
                                s.push({
                                  id: l,
                                  type: t.type,
                                  tabIndex: i,
                                  blockIndex: r,
                                  trackIndex: null,
                                  loadingState:
                                    a < 25 ? o.Gu.RESOLVE : o.Gu.IDLE,
                                }),
                              ++a,
                              t.tracks.forEach((t, s) => {
                                var l;
                                e.indexesMap.set(
                                  ""
                                    .concat(i, "_")
                                    .concat(r, "_")
                                    .concat(s, "_")
                                    .concat(t.id),
                                  a,
                                ),
                                  null === (l = e.items) ||
                                    void 0 === l ||
                                    l.push({
                                      id: t.id,
                                      type: t.type,
                                      tabIndex: i,
                                      blockIndex: r,
                                      trackIndex: s,
                                      loadingState:
                                        a < 25 ? o.Gu.RESOLVE : o.Gu.IDLE,
                                    }),
                                  ++a;
                              });
                          });
                    });
              },
              setTrack(t, a) {
                var i, r, s, l;
                let { tabIndex: n, blockIndex: d, trackIndex: u } = t,
                  { fullModel: c } = a.data;
                if (null === u) return;
                let m =
                  null === (l = e.tabs) || void 0 === l
                    ? void 0
                    : null === (s = l[n]) || void 0 === s
                      ? void 0
                      : null === (r = s.blocks) || void 0 === r
                        ? void 0
                        : null === (i = r[d]) || void 0 === i
                          ? void 0
                          : i.tracks[u];
                m && ((m.data = (0, P.Vt)(c)), (m.loadingState = o.Gu.RESOLVE));
              },
              setAlbum(t, a) {
                var i, r, s;
                let { tabIndex: l, blockIndex: n } = t,
                  { fullModel: d } = a.data,
                  u =
                    null === (s = e.tabs) || void 0 === s
                      ? void 0
                      : null === (r = s[l]) || void 0 === r
                        ? void 0
                        : null === (i = r.blocks) || void 0 === i
                          ? void 0
                          : i[n];
                (0, U.Ql)(u) &&
                  ((u.meta = (0, _.cO)({ album: d.album, artists: d.artists })),
                  (u.loadingState = o.Gu.RESOLVE));
              },
              setArtist(t, a) {
                var i, r, s;
                let { tabIndex: l, blockIndex: n } = t,
                  { fullModel: d } = a.data,
                  u =
                    null === (s = e.tabs) || void 0 === s
                      ? void 0
                      : null === (r = s[l]) || void 0 === r
                        ? void 0
                        : null === (i = r.blocks) || void 0 === i
                          ? void 0
                          : i[n];
                (0, U.DF)(u) &&
                  ((u.meta = (0, y.tR)(d.artist)),
                  (u.loadingState = o.Gu.RESOLVE));
              },
              setPlaylist(t, a) {
                var i, r, s;
                let { tabIndex: l, blockIndex: n } = t,
                  { fullModel: d } = a.data,
                  u =
                    null === (s = e.tabs) || void 0 === s
                      ? void 0
                      : null === (r = s[l]) || void 0 === r
                        ? void 0
                        : null === (i = r.blocks) || void 0 === i
                          ? void 0
                          : i[n];
                (0, U.v3)(u) &&
                  ((u.meta = {
                    ...(0, L.RE)({ playlist: d.playlist }),
                    tracksCount: d.tracksCount,
                  }),
                  (u.loadingState = o.Gu.RESOLVE));
              },
              setVibe(t, a) {
                var i, r, s;
                let { tabIndex: l, blockIndex: n } = t,
                  { fullModel: d } = a.data,
                  u =
                    null === (s = e.tabs) || void 0 === s
                      ? void 0
                      : null === (r = s[l]) || void 0 === r
                        ? void 0
                        : null === (i = r.blocks) || void 0 === i
                          ? void 0
                          : i[n];
                (0, U.eE)(u) &&
                  ((u.meta = {
                    ...(0, W.FF)(d.wave),
                    imageUrl: d.simpleWaveForegroundImageUrl,
                    backgroundColor: d.simpleWaveBackgroundColor,
                  }),
                  (u.loadingState = o.Gu.RESOLVE));
              },
              getMusicHistory: (0, s.ls)(function* () {
                let { musicHistoryResource: a, modelActionsLogger: i } = (0,
                s.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    e.loadingState = o.Gu.PENDING;
                    let i = yield a.getMusicHistory({ fullModelsCount: 25 }),
                      r = q(i);
                    (e.tabs = (0, s.pj)(r.historyTabs.map(U.OE))),
                      t.fillItemsAndIndexes(),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (t) {
                    i.error(t), (e.loadingState = o.Gu.REJECT);
                  }
              }),
              getItems: (0, s.ls)(function* (a) {
                let { musicHistoryResource: i } = (0, s.dU)(e),
                  r = e.getItemsToLoad(a),
                  l = yield i.getMusicHistoryItems({ items: Z(r) });
                r.forEach((e) => {
                  e.loadingState = o.Gu.RESOLVE;
                });
                let n = H(r);
                l.items.forEach((e) => {
                  var a;
                  let i = z(e);
                  null === (a = n[i]) ||
                    void 0 === a ||
                    a.forEach((a) => {
                      switch (e.type) {
                        case M.EW.ALBUM:
                          t.setAlbum(a, e);
                          break;
                        case M.EW.TRACK:
                          t.setTrack(a, e);
                          break;
                        case M.EW.WAVE:
                          t.setVibe(a, e);
                          break;
                        case M.EW.PLAYLIST:
                          t.setPlaylist(a, e);
                          break;
                        case M.EW.ARTIST:
                          t.setArtist(a, e);
                      }
                      a.loadingState = o.Gu.RESOLVE;
                    });
                });
              }),
              setDatesMap(t, a) {
                e.datesMap.set(t, a);
              },
              reset() {
                (e.items = null),
                  (e.tabs = null),
                  e.indexesMap.clear(),
                  e.datesMap.clear(),
                  (e.loadingState = o.Gu.IDLE);
              },
            };
            return t;
          });
      a(2365), a(87278);
      let K = s.V5.model("NonMusicPage", { landing: v.d5 });
      a(75773);
      var Q = a(30789),
        Y = a(63173);
      a(7992);
      var X = a(22810),
        $ = a(16367);
      let ee = [
          M.Sc.ARTIST,
          M.Sc.ALBUM,
          M.Sc.TRACK,
          M.Sc.PLAYLIST,
          M.Sc.WAVE,
          M.Sc.PODCAST,
          M.Sc.PODCAST_EPISODE,
        ],
        et = (e, t) => {
          let a = [...ee];
          return (
            e.features.nonMusic ||
              t.checkExperiment(o.pe.WebNextPodcastSearch, "on") ||
              (a = a.filter(
                (e) => ![M.Sc.PODCAST, M.Sc.PODCAST_EPISODE].includes(e),
              )),
            a
          );
        },
        ea = [
          M.Sc.ALBUM,
          M.Sc.ARTIST,
          M.Sc.PLAYLIST,
          M.Sc.TRACK,
          M.Sc.UGC_TRACK,
          M.Sc.WAVE,
          M.Sc.PODCAST,
          M.Sc.PODCAST_EPISODE,
        ],
        ei = (e, t, a) => {
          let i = [...ea];
          return (
            e === M.ay.TOP && (i = i.filter((e) => e !== M.Sc.UGC_TRACK)),
            t.features.nonMusic ||
              a.checkExperiment(o.pe.WebNextPodcastSearch, "on") ||
              (i = i.filter(
                (e) => ![M.Sc.PODCAST, M.Sc.PODCAST_EPISODE].includes(e),
              )),
            i
          );
        },
        er = (e) => {
          let { wave: t } = e,
            a = "".concat(t.id.type, ":").concat(t.id.tag);
          return (0, s.pj)({
            title: t.title,
            subtitle: t.subTitle,
            stationId: a,
            seeds: [a],
            backgroundColor: t.color,
            imageUrl: t.image,
          });
        },
        es = (e) => {
          let { type: t } = e;
          switch (t) {
            case M.Sc.UGC_TRACK:
              return { type: t, data: (0, P.Z2)(e.track) };
            case M.Sc.TRACK:
              return { type: t, data: (0, P.Vt)(e.track) };
            case M.Sc.ARTIST:
              return { type: t, data: (0, y.d)(e.artist) };
            case M.Sc.PLAYLIST:
              return {
                type: t,
                data: (0, L.VB)({ ...e.playlist, artists: [] }),
              };
            case M.Sc.ALBUM:
              return { type: t, data: (0, _.ym)(e.album) };
            case M.Sc.WAVE:
              return { type: t, data: er(e) };
            case M.Sc.PODCAST:
              return { type: t, data: (0, _.ym)(e.podcast) };
            case M.Sc.PODCAST_EPISODE:
              return { type: t, data: (0, P.Vt)(e.podcast_episode) };
            default:
              return null;
          }
        },
        el = (e) =>
          e.map((e) => {
            switch (e.type) {
              case M.Sc.ALBUM:
                return { type: M.Sc.ALBUM, data: (0, _.ym)(e.album) };
              case M.Sc.ARTIST:
                return { type: M.Sc.ARTIST, data: (0, y.d)(e.artist) };
              case M.Sc.PLAYLIST:
                return {
                  type: M.Sc.PLAYLIST,
                  data: (0, L.VB)({ ...e.playlist, artists: [] }),
                };
              case M.Sc.UGC_TRACK:
                return { type: M.Sc.UGC_TRACK, data: (0, P.Z2)(e.track) };
              case M.Sc.TRACK:
                return { type: M.Sc.TRACK, data: (0, P.Vt)(e.track) };
              case M.Sc.WAVE:
                return { type: M.Sc.WAVE, data: er(e) };
              case M.Sc.PODCAST:
                return { type: M.Sc.PODCAST, data: (0, _.ym)(e.podcast) };
              case M.Sc.PODCAST_EPISODE:
                return {
                  type: M.Sc.PODCAST_EPISODE,
                  data: (0, P.Vt)(e.podcast_episode),
                };
            }
          }),
        en = s.V5.model("SearchHistoryPage", {
          items: s.V5.array($.Iv),
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
        }),
        eo = s.V5.model("SearchPage", {
          searchCorrectedText: s.V5.maybeNull(s.V5.string),
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          searchRequestId: s.V5.optional(s.V5.string, ""),
          results: s.V5.array($.Iv),
          history: en,
          mixes: X.ZP,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gu.IDLE || e.loadingState === o.Gu.PENDING
              );
            },
            get isEmpty() {
              return (
                (e.loadingState === o.Gu.RESOLVE ||
                  e.loadingState === o.Gu.REJECT) &&
                0 === e.results.length
              );
            },
            get isHistoryLoading() {
              return (
                e.history.loadingState === o.Gu.IDLE ||
                e.history.loadingState === o.Gu.PENDING
              );
            },
            get isHistoryReady() {
              return e.history.loadingState === o.Gu.IDLE;
            },
            get isEmptyHistory() {
              return (
                !e.history.items.length &&
                e.history.loadingState === o.Gu.RESOLVE
              );
            },
          }))
          .actions((e) => {
            let t = {
              getSearchResults: (0, s.ls)(function* (t) {
                let { text: a, filter: i, config: r, experiments: l } = t,
                  { searchResource: n } = (0, s.dU)(e);
                try {
                  e.loadingState = o.Gu.PENDING;
                  let t = yield n.getInstantMixedSearch({
                    text: a,
                    type: ei(i, r, l),
                    filter: i === M.ay.TOP ? void 0 : i,
                    withLikesCount: !0,
                    page: 0,
                    pageSize: 36,
                  });
                  t.misspellResult &&
                    (e.searchCorrectedText = t.misspellResult),
                    t.results &&
                      t.results.length > 0 &&
                      ((e.results = (0, s.pj)(el(t.results).filter((e) => e))),
                      (e.searchRequestId = t.searchRequestId)),
                    (e.loadingState = o.Gu.RESOLVE);
                } catch (t) {
                  e.loadingState = o.Gu.REJECT;
                }
              }),
              getHistory: (0, s.ls)(function* (t) {
                let { userId: a, config: i, experiments: r } = t;
                if (e.history.loadingState === o.Gu.PENDING) return;
                let { usersResource: l } = (0, s.dU)(e);
                try {
                  e.history.loadingState = o.Gu.PENDING;
                  let t = yield l.getSearchHistory({
                    userId: a,
                    supportedTypes: et(i, r),
                  });
                  (e.history.items = (0, s.pj)(t.map(es).filter((e) => e))),
                    (e.history.loadingState = o.Gu.RESOLVE);
                } catch (t) {
                  console.error(t), (e.history.loadingState = o.Gu.REJECT);
                }
              }),
              clearHistory: (0, s.ls)(function* (t) {
                let { userId: a } = t,
                  { usersResource: i } = (0, s.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    (e.loadingState = o.Gu.PENDING),
                      yield i.clearSearchHistory({ userId: a }),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (t) {
                    console.error(t), (e.loadingState = o.Gu.REJECT);
                  }
              }),
              resetHistoryItems() {
                e.history.items = (0, s.pj)([]);
              },
              resetHistoryStateRequest() {
                (e.history.loadingState = o.Gu.IDLE),
                  (e.history.items = (0, s.pj)([]));
              },
              resetResults() {
                e.results = (0, s.pj)([]);
              },
              resetSearchCorrectedText() {
                e.searchCorrectedText = null;
              },
              reset() {
                (e.searchCorrectedText = null),
                  (e.loadingState = o.Gu.IDLE),
                  (e.results = (0, s.pj)([]));
              },
              sendFeedback: (0, s.ls)(function* (t) {
                let { searchResource: a, modelActionsLogger: i } = (0, s.dU)(e);
                try {
                  yield a.sendFeedback(t);
                } catch (e) {
                  i.error(e);
                }
              }),
            };
            return t;
          });
      a(50950);
      var ed = a(42864),
        eu = a(31481),
        ec = a(42503),
        em = a(43310),
        eg = a(14545);
      let ep = (e) => {
        let t = Math.floor(Date.now() / 1e3),
          a = "".concat(e).concat(t),
          i = (0, eg.createHmac)("sha256", (0, o.Sq)())
            .update(a)
            .digest("base64");
        return { sign: i, timeStamp: t, trackId: e, format: M.yG.LRC };
      };
      var eh = a(885),
        ev = a.n(eh);
      let e_ = (e) => {
          try {
            let t = ev()(e).scripts;
            return (t || []).map((e) => {
              let { start: t, end: a, text: i } = e;
              return { text: i.trim(), from: t, to: a };
            });
          } catch (e) {
            return [];
          }
        },
        eS = s.V5.model("SyncLyricsLineModel", {
          from: s.V5.number,
          to: s.V5.number,
          text: s.V5.string,
        }),
        eb = s.V5.model("SyncLyricsModel", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          lines: s.V5.maybeNull(s.V5.array(eS)),
          major: s.V5.maybeNull(em.bP),
          writers: s.V5.maybeNull(s.V5.array(s.V5.string)),
          lyricId: s.V5.maybeNull(s.V5.number),
          externalLyricId: s.V5.maybeNull(s.V5.string),
        }).actions((e) => {
          let t = {
            getData: (0, s.ls)(function* (a) {
              let { tracksResource: i, modelActionsLogger: r } = (0, s.dU)(e);
              if (e.loadingState !== o.Gu.PENDING)
                try {
                  e.loadingState = o.Gu.PENDING;
                  let {
                    downloadUrl: r,
                    major: l,
                    externalLyricId: n,
                    lyricId: d,
                    writers: u,
                  } = yield i.getLyrics(ep(a));
                  (e.major = (0, em.jp)(l)),
                    (e.externalLyricId = n),
                    (e.lyricId = d),
                    (e.writers = (0, s.pj)(u)),
                    yield t.downloadSyncLyrics(r),
                    (e.loadingState = o.Gu.RESOLVE);
                } catch (t) {
                  (e.loadingState = o.Gu.REJECT), r.error(t);
                }
            }),
            downloadSyncLyrics: (0, s.ls)(function* (t) {
              let { tracksResource: a } = (0, s.dU)(e),
                i = yield a.getLyricsText(t);
              e.lines = (0, s.pj)(e_(i));
            }),
            sendViews: (0, s.ls)(function* (t) {
              let { trackId: a, albumId: i, playlistId: r } = t,
                { lyricViewsResource: l, modelActionsLogger: n } = (0, s.dU)(e);
              if (e.loadingState === o.Gu.RESOLVE)
                try {
                  if (!e.major || !e.lyricId || !e.externalLyricId) return;
                  yield l.sendViews({
                    lyricViews: [
                      {
                        id: (0, ec.Z)(),
                        trackId: a,
                        albumId: i,
                        playlistId: r,
                        majorId: e.major.id,
                        lyricId: e.lyricId,
                        externalLyricId: e.externalLyricId,
                        lyricFormat: M.yG.LRC,
                      },
                    ],
                  });
                } catch (e) {
                  n.error(e);
                }
            }),
            reset() {
              (e.lines = null),
                (e.major = null),
                (e.externalLyricId = null),
                (e.lyricId = null),
                (e.writers = null),
                (e.loadingState = o.Gu.IDLE);
            },
          };
          return t;
        });
      var ey = a(39191),
        ef = a(9495),
        eC = a(82436),
        eE = a(41540),
        ex = a(7042),
        eN = a(26079),
        eP = a(39479);
      let eI = s.V5.model("Root", {
          experiments: S.i_,
          user: eP.T_,
          collection: R,
          main: B,
          settings: S.ao,
          currentTrackInfo: P.Jx,
          album: g.Lf,
          artist: p.Od,
          library: S.f8,
          sonataState: eC.ps,
          playlist: Q.nb,
          slides: eN.iV,
          vibe: ef.a,
          search: eo,
          vibeSettings: eE.Ux,
          pinsCollection: eu.Lc,
          genre: V.Kx,
          genres: O.EU,
          mixes: X.ZP,
          tag: ed.tS,
          chart: h._,
          post: Y.vU,
          landingBlockEntities: v.oT,
          contextMenuPlaylists: E,
          musicHistory: J,
          createPlaylist: C.b_,
          location: S.CU,
          kinopoisk: w,
          nonMusic: K,
          disclaimer: ex.nU,
          trailer: ey.L,
          syncLyrics: eb,
          modals: S.dC,
          landing: v.d5,
        }),
        eL = (e, t) => eI.create(e, t);
      var ek = a(58616);
      let eA = ["settings", "sonataState"],
        eT = (e, t) => eA.reduce((t, a) => ((t[a] = e[a]), t), (0, ek.Z)(t));
      (0, r.DT)(!1);
      let ej = (e) => {
        let { children: t, nonce: a } = e;
        (0, n.useRef)([]), (0, n.useContext)(l.ServerInsertedHTMLContext);
        let r = (0, o.YS)(),
          d = (0, o.wL)(),
          u = (0, o.dE)(),
          [c] = (0, n.useState)(() => {
            var e;
            let t = { ...r, logger: d, modelActionsLogger: u };
            return (
              null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                ? void 0
                : e.length
            )
              ? eL(
                  window.__STATE_SNAPSHOT__[
                    window.__STATE_SNAPSHOT__.length - 1
                  ],
                  t,
                )
              : eL(m, t);
          });
        return (
          (0, n.useLayoutEffect)(() => {
            function e() {
              var e;
              let t =
                null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                  ? void 0
                  : e[window.__STATE_SNAPSHOT__.length - 1];
              t && (0, s.Xx)(c, eT(c, t)), delete window.__STATE_SNAPSHOT__;
            }
            return (
              e(),
              window.addEventListener("yMusicStateSnapshotUpdated", e),
              () => window.removeEventListener("yMusicStateSnapshotUpdated", e)
            );
          }, [c]),
          (0, i.jsx)(o.xf.Provider, { value: c, children: t })
        );
      };
    },
    13212: function (e, t, a) {
      "use strict";
      a.d(t, {
        mH: function () {
          return l.Genre;
        },
        fm: function () {
          return s;
        },
        uG: function () {
          return n;
        },
      });
      var i = a(96555);
      let r = i.V5.model("GenreListItemSubGenreModel", {
          tag: i.V5.string,
          title: i.V5.string,
        }),
        s = i.V5.model("GenreListItemModel", {
          tag: i.V5.string,
          title: i.V5.string,
          subGenres: i.V5.array(r),
        });
      var l = a(31925);
      let n = (e) => ({
        tag: e.tag,
        title: e.title,
        subGenres: (0, i.pj)(
          (e.leaves || []).map((e) => ({ tag: e.tag, title: e.title })),
        ),
      });
    },
    31925: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          Genre: function () {
            return d;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(1918),
        l = a(44285),
        n = a(65688),
        o = a.n(n);
      let d = (0, r.Pi)((e) => {
        let { tag: t, title: a, subGenres: r } = e;
        return (0, i.jsxs)("div", {
          className: o().root,
          children: [
            (0, i.jsx)(l.rU, {
              className: o().link,
              href: "/genre/".concat(t),
              children: (0, i.jsx)(s.Heading, {
                variant: "h2",
                size: "m",
                lineClamp: 1,
                className: o().linkTitle,
                children: a,
              }),
            }),
            r.length > 0 &&
              (0, i.jsx)("div", {
                className: o().list,
                children: r.map((e) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: o().item,
                      children: (0, i.jsx)(l.rU, {
                        className: o().link,
                        href: "/genre/".concat(e.tag),
                        children: (0, i.jsx)(s.Caption, {
                          variant: "span",
                          size: "l",
                          lineClamp: 1,
                          className: o().linkTitle,
                          children: e.title,
                        }),
                      }),
                    },
                    e.tag,
                  ),
                ),
              }),
          ],
        });
      });
    },
    24163: function (e, t, a) {
      "use strict";
      a.d(t, {
        Pj: function () {
          return l.ReleaseNotesModal;
        },
        TF: function () {
          return s.TitleBar;
        },
        l7: function () {
          return c;
        },
        Yl: function () {
          return r;
        },
        F5: function () {
          return v;
        },
        Zl: function () {
          return d;
        },
        Pt: function () {
          return g;
        },
        vs: function () {
          return p.useApplicationDeeplinks;
        },
        Er: function () {
          return n.useApplicationUpdate;
        },
        Zw: function () {
          return h.useLaunch;
        },
        bO: function () {
          return u.useRefreshApplicationData;
        },
        Tk: function () {
          return o.useReleaseNotes;
        },
      });
      var i = a(5674);
      let r = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(i.BO.ON_APPLICATION_READY);
      };
      a(46971);
      var s = a(58081),
        l = a(82703),
        n = a(83001),
        o = a(63919);
      let d = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(i.BO.NEED_SHOW_RELEASE_NOTES);
      };
      var u = a(33854);
      let c = () => {
        document.addEventListener("auxclick", (e) => e.preventDefault()),
          document.addEventListener("click", (e) => {
            (e.ctrlKey || e.metaKey) && e.preventDefault();
          });
      };
      var m = a(86502);
      let g = (e) => {
        var t;
        let { status: a } = e;
        null === (t = window.desktopEvents) ||
          void 0 === t ||
          t.send(i.BO.ON_PLAYER_STATE, {
            isPrimaryDataChanged: e.isPrimaryDataChanged,
            isPlaying: e.status === m.Xz.PLAYING,
            status: e.status,
            track: e.track,
            progress: e.progress,
            availableActions: e.availableActions,
            actionsStore: e.actionsStore,
          });
      };
      var p = a(75084),
        h = a(2779);
      let v = (e) => {
        let t = e === i.Q2.Light ? "#FFFFFF" : "#000000";
        window.desktopEvents.send(i.BO.APPLICATION_THEME, t);
      };
    },
    46971: function (e, t, a) {
      "use strict";
      a.d(t, {
        N$: function () {
          return r;
        },
        eZ: function () {
          return l;
        },
        tX: function () {
          return s;
        },
      });
      var i = a(5674);
      let r = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(i.BO.WINDOW_MINIMIZE);
        },
        s = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(i.BO.WINDOW_MAXIMIZE);
        },
        l = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(i.BO.WINDOW_CLOSE);
        };
    },
    75084: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useApplicationDeeplinks: function () {
            return n;
          },
        });
      var i = a(11769),
        r = a(99616),
        s = a(5674);
      let l = [
          [/^\/home$/, () => "/"],
          [/^\/users\/(.*)\/playlists$/, () => "/collection"],
          [/^\/users\/(.*)\/artists$/, () => "/collection"],
          [/^\/users\/(.*)\/albums$/, () => "/collection"],
          [/^\/users\/(.*)\/tracks$/, () => "/collection"],
          [/^\/users\/(.*)\/podcasts$/, () => "/collection"],
          [/^\/users\/(.*)\/kids$/, () => "/collection"],
          [/^\/users\/(.*)\/history$/, () => "/music-history"],
          [
            /^\/album\/(.*)\/track\/(.*)$/,
            (e) => {
              var t;
              let a = (0, s.z)(e, "/album/:albumId/track/:trackId"),
                i = a.albumId;
              return null !== (t = (0, s.SZ)("/album/".concat(i))) &&
                void 0 !== t
                ? t
                : "/";
            },
          ],
        ],
        n = () => {
          let e = (0, i.useRouter)(),
            t = (0, r.useCallback)(
              (t, a) => {
                for (let [t, i] of l)
                  if (t.test(a)) {
                    e.push(i(a));
                    return;
                  }
                let i = (0, s.SZ)(a);
                i ? e.push(i) : e.push("/");
              },
              [e],
            );
          (0, r.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(s.BO.ON_HANDLE_DEEPLINK, t),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(s.BO.ON_HANDLE_DEEPLINK, t);
              }
            );
          }, [t]);
        };
    },
    83001: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useApplicationUpdate: function () {
            return p;
          },
        });
      var i = a(8759),
        r = a(99616),
        s = a(65244),
        l = a(5674),
        n = a(35338),
        o = a(15527),
        d = a(1918),
        u = a(44285),
        c = a(12576),
        m = a.n(c);
      let g = (e) => {
          let { version: t, formatMessage: a, closeToast: s } = e,
            c = (0, r.useCallback)(() => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.send(l.BO.ON_UPDATE_INSTALL),
                null == s || s();
            }, [s]),
            g = (0, r.useMemo)(
              () =>
                (0, i.jsxs)("div", {
                  className: m().message,
                  children: [
                    (0, i.jsx)(d.Caption, {
                      className: m().text,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: a(
                        { id: "desktop.on-update-available" },
                        { version: t },
                      ),
                    }),
                    (0, i.jsx)(o.z, {
                      className: m().button,
                      onClick: c,
                      variant: "default",
                      color: "secondary",
                      size: "xs",
                      radius: "xxxl",
                      children: (0, i.jsx)(d.Caption, {
                        variant: "div",
                        type: "controls",
                        size: "m",
                        children: a({ id: "desktop.update" }),
                      }),
                    }),
                  ],
                }),
              [a, c, t],
            );
          return (0, i.jsx)(u.Yj, {
            className: (0, n.W)(m().root, m().important),
            message: g,
          });
        },
        p = () => {
          let { formatMessage: e } = (0, s.Z)(),
            { notify: t } = (0, l.d$)(),
            a = (0, r.useRef)(""),
            n = (0, r.useCallback)(
              (r, s) => {
                a.current !== s &&
                  ((a.current = s),
                  t((0, i.jsx)(g, { formatMessage: e, version: s }), {
                    containerId: l.W$.APPLICATION_UPDATE,
                  }));
              },
              [e, a, t],
            );
          (0, r.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(l.BO.ON_UPDATE_AVAILABLE, n),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(l.BO.ON_UPDATE_AVAILABLE, n);
              }
            );
          }, [n]);
        };
    },
    2779: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useLaunch: function () {
            return s;
          },
        });
      var i = a(99616),
        r = a(5674);
      let s = () => {
        let e = (0, r.sv)(),
          t = (0, i.useCallback)(() => {
            let t = (0, r.bo)();
            t && e.count(t, "installsCount");
          }, [e]);
        (0, i.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(r.BO.FIRST_LAUNCH, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(r.BO.FIRST_LAUNCH, t);
            }
          );
        }, [t]);
      };
    },
    33854: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useRefreshApplicationData: function () {
            return l;
          },
        });
      var i = a(99616),
        r = a(48616),
        s = a(5674);
      let l = () => {
        let {
            library: e,
            collection: t,
            experiments: a,
            main: l,
            user: n,
          } = (0, s.oR)(),
          o = (0, i.useCallback)(() => {
            a.getData(),
              e.getData(),
              l.landing.isLoaded &&
                l.landing.getSkeleton(
                  { id: r.jB.WEB_MAIN, showWizard: n.settings.showWizard },
                  { preloadBlocks: 2 },
                ),
              t.landing.isLoaded &&
                t.landing.getSkeleton(
                  {
                    id: r.jB.WEB_COLLECTION,
                    showWizard: n.settings.showWizard,
                  },
                  { preloadBlocks: 3 },
                );
          }, [t.landing, a, e, l.landing, n.settings.showWizard]);
        (0, i.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(s.BO.UPDATE_APPLICATION_DATA, o),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(s.BO.UPDATE_APPLICATION_DATA, o);
            }
          );
        }, [o]);
      };
    },
    63919: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useReleaseNotes: function () {
            return s;
          },
        });
      var i = a(99616),
        r = a(5674);
      let s = () => {
        let {
          modals: { releaseNotesModal: e },
        } = (0, r.oR)();
        (0, i.useEffect)(() => {
          var t;
          return (
            null === (t = window.desktopEvents) ||
              void 0 === t ||
              t.on(r.BO.SHOW_RELEASE_NOTES, e.open),
            () => {
              var t;
              null === (t = window.desktopEvents) ||
                void 0 === t ||
                t.off(r.BO.SHOW_RELEASE_NOTES, e.open);
            }
          );
        }, [e.open]);
      };
    },
    82703: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ReleaseNotesModal: function () {
            return v;
          },
        });
      var i = a(8759),
        r = a(35338),
        s = a(33423),
        l = a(99616),
        n = a(65244),
        o = a(2814),
        d = a(31476),
        u = a(71716),
        c = a(1918),
        m = a(5674),
        g = a(45679),
        p = a.n(g);
      let h = {
          ul: (e) =>
            (0, i.jsx)("ul", { className: p().description, children: e }),
          li: (e) => (0, i.jsx)("li", { className: p().item, children: e }),
          code: (e) => (0, i.jsx)("code", { className: p().code, children: e }),
          date: (e) => (0, i.jsx)("span", { className: p().date, children: e }),
          p: (e) => (0, i.jsx)("p", { className: p().paragraph, children: e }),
          br: (0, i.jsx)("br", {}),
        },
        v = (0, s.Pi)((e) => {
          let { dictionary: t } = e,
            {
              modals: { releaseNotesModal: a },
            } = (0, m.oR)(),
            { formatMessage: s } = (0, n.Z)(),
            g = (0, l.useMemo)(() => (0, m.L)(t), [t]);
          return (0, i.jsx)(d.u, {
            title: s({ id: "desktop.release-notes-modal-title" }),
            open: a.isOpened,
            onOpenChange: a.onOpenChange,
            onClose: a.close,
            size: "fitContent",
            placement: "center",
            labelClose: s({ id: "interface-actions.close" }),
            className: p().root,
            headerClassName: p().modalHeader,
            contentClassName: p().modalContent,
            children: (0, i.jsx)(u.t, {
              className: (0, r.W)(p().scrollableContent, p().important),
              containerClassName: (0, r.W)(p().notes, p().important),
              children: g.map((e) =>
                (0, i.jsxs)(
                  "div",
                  {
                    className: p().note,
                    children: [
                      (0, i.jsx)(c.Heading, {
                        variant: "h4",
                        className: (0, r.W)(p().version, p().important),
                        children: (0, m.K7)(e),
                      }),
                      (0, i.jsx)(o.Z, { id: e, values: h }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          });
        });
    },
    58081: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          TitleBar: function () {
            return g;
          },
        });
      var i = a(8759),
        r = a(35338),
        s = a(33423),
        l = a(99616),
        n = a(65244),
        o = a(5674),
        d = a(46971),
        u = a(99750),
        c = a.n(u);
      let m = (e) => {
          let {
            children: t,
            className: a,
            onClick: s,
            ariaLabel: l,
            withSecondaryColor: n,
          } = e;
          return (0, i.jsx)("button", {
            type: "button",
            className: (0, r.W)(
              c().button,
              { [c().button_withSecondaryColor]: n },
              a,
            ),
            onClick: s,
            "aria-label": l,
            children: t,
          });
        },
        g = (0, s.Pi)((e) => {
          let { withSecondaryColor: t } = e,
            a = (0, o.Xf)(),
            s = a === o.t4.WINDOWS,
            { formatMessage: u } = (0, n.Z)(),
            g = (0, l.useCallback)(() => {
              (0, d.N$)();
            }, []),
            p = (0, l.useCallback)(() => {
              (0, d.tX)();
            }, []),
            h = (0, l.useCallback)(() => {
              (0, d.eZ)();
            }, []);
          return (0, i.jsx)("div", {
            className: c().root,
            onDoubleClick: p,
            children:
              s &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(m, {
                    onClick: g,
                    ariaLabel: u({ id: "windows-menu.roll-up" }),
                    withSecondaryColor: t,
                    children: (0, i.jsx)("svg", {
                      width: "10",
                      height: "1",
                      viewBox: "0 0 10 1",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, r.W)(c().icon, {
                        [c().icon_withSecondaryColor]: t,
                      }),
                      children: (0, i.jsx)("path", {
                        d: "M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, i.jsx)(m, {
                    onClick: p,
                    ariaLabel: u({ id: "windows-menu.unwrap" }),
                    withSecondaryColor: t,
                    children: (0, i.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, r.W)(c().icon, {
                        [c().icon_withSecondaryColor]: t,
                      }),
                      children: (0, i.jsx)("path", {
                        d: "M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, i.jsx)(m, {
                    className: c().closeButton,
                    onClick: h,
                    ariaLabel: u({ id: "windows-menu.close" }),
                    children: (0, i.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, r.W)(c().icon, {
                        [c().icon_withSecondaryColor]: t,
                      }),
                      children: (0, i.jsx)("path", {
                        d: "M5 5.70801L0.854492 9.85352C0.756836 9.95117 0.639648 10 0.50293 10C0.359701 10 0.239258 9.9528 0.141602 9.8584C0.0472005 9.76074 0 9.6403 0 9.49707C0 9.36035 0.0488281 9.24316 0.146484 9.14551L4.29199 5L0.146484 0.854492C0.0488281 0.756836 0 0.638021 0 0.498047C0 0.429688 0.0130208 0.364583 0.0390625 0.302734C0.0651042 0.240885 0.100911 0.188802 0.146484 0.146484C0.192057 0.100911 0.245768 0.0651042 0.307617 0.0390625C0.369466 0.0130208 0.43457 0 0.50293 0C0.639648 0 0.756836 0.0488281 0.854492 0.146484L5 4.29199L9.14551 0.146484C9.24316 0.0488281 9.36198 0 9.50195 0C9.57031 0 9.63379 0.0130208 9.69238 0.0390625C9.75423 0.0651042 9.80794 0.100911 9.85352 0.146484C9.89909 0.192057 9.9349 0.245768 9.96094 0.307617C9.98698 0.366211 10 0.429688 10 0.498047C10 0.638021 9.95117 0.756836 9.85352 0.854492L5.70801 5L9.85352 9.14551C9.95117 9.24316 10 9.36035 10 9.49707C10 9.56543 9.98698 9.63053 9.96094 9.69238C9.9349 9.75423 9.89909 9.80794 9.85352 9.85352C9.8112 9.89909 9.75911 9.9349 9.69727 9.96094C9.63542 9.98698 9.57031 10 9.50195 10C9.36198 10 9.24316 9.95117 9.14551 9.85352L5 5.70801Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                ],
              }),
          });
        });
    },
    82436: function (e, t, a) {
      "use strict";
      a.d(t, {
        $Z: function () {
          return E.RepeatButton;
        },
        P4: function () {
          return C.ShuffleButton;
        },
        WP: function () {
          return i.SonataControls;
        },
        ps: function () {
          return y;
        },
        RN: function () {
          return f;
        },
      });
      var i = a(2931);
      a(74758), a(34512);
      var r = a(93043),
        s = a(96555),
        l = a(57413),
        n = a(59899),
        o = a(45412),
        d = a(86502),
        u = a(14408),
        c = a(21774),
        m = a(81446),
        g = a(43310),
        p = a(5674);
      let h = (e) => {
          var t, a, i;
          switch (e.data.type) {
            case u.A4.Generative: {
              let a = e.data.meta,
                i = (0, p.Us)(null == a ? void 0 : a.derivedColors);
              return (0, s.pj)({
                id: String(a.id),
                coverUri: a.imageUrl,
                title: null !== (t = a.title) && void 0 !== t ? t : "",
                isAvailable: !0,
                isRemoved: !1,
                averageColor: i,
              });
            }
            case d.RX.Unloaded:
              return null;
            default: {
              let t = e.data.meta,
                r =
                  null === (a = t.artists) || void 0 === a
                    ? void 0
                    : a.map(m.d),
                l =
                  null === (i = t.albums) || void 0 === i ? void 0 : i.map(c.N);
              return (0, s.pj)({ ...(0, g.Ni)(t), artists: r, albums: l });
            }
          }
        },
        v = s.V5.model("UnloadedEntityMeta", {
          id: s.V5.union(s.V5.number, s.V5.string),
          albumId: s.V5.maybe(s.V5.union(s.V5.number, s.V5.string)),
        }),
        _ = s.V5.model("UnloadedEntityData", {
          meta: v,
          type: s.V5.literal(d.RX.Unloaded),
        });
      var S = a(16121);
      let b = g.yp
          .props({
            artists: s.V5.array(m.Go),
            albums: s.V5.array(c.KX),
            chart: s.V5.maybe(S.BH),
          })
          .views((e) => ({
            get idWithContext() {
              return e.albumId ? "".concat(e.id, ":").concat(e.albumId) : e.id;
            },
            get artistsNames() {
              var t;
              return null === (t = e.artists) || void 0 === t
                ? void 0
                : t.map((e) => e.name).join(", ");
            },
            get mainAlbum() {
              var a, i;
              return null !==
                (i = null === (a = e.albums) || void 0 === a ? void 0 : a[0]) &&
                void 0 !== i
                ? i
                : null;
            },
            get index() {
              var r, s, l;
              return null !==
                (l =
                  null === (s = e.albums[0]) || void 0 === s
                    ? void 0
                    : null === (r = s.trackPosition) || void 0 === r
                      ? void 0
                      : r.index) && void 0 !== l
                ? l
                : null;
            },
          })),
        y = s.V5.model("SonataState", {
          contextType: s.V5.maybeNull(s.V5.enumeration(Object.values(l.Ak))),
          contextId: s.V5.maybeNull(s.V5.string),
          entityMeta: s.V5.maybeNull(b),
          unloadedEntitiesData: s.V5.maybe(s.V5.array(_)),
          status: s.V5.enumeration(Object.values(d.Xz)),
          canMoveForward: s.V5.boolean,
          canMoveBackward: s.V5.boolean,
          canSpeed: s.V5.boolean,
          repeatMode: s.V5.enumeration(Object.values(o.zq)),
          canChangeRepeatMode: s.V5.boolean,
          volume: s.V5.maybe(s.V5.number),
          speed: s.V5.maybe(s.V5.number),
          canShuffle: s.V5.boolean,
          shuffle: s.V5.boolean,
          currentlyPlayingTrackIndex: s.V5.maybe(s.V5.number),
          quality: s.V5.enumeration(Object.values(n.nJ)),
        })
          .views((e) => ({
            get unloadedEntitiesDataFromModels() {
              return (0, r.ZN)(e.unloadedEntitiesData);
            },
            get isGenerativeContext() {
              return e.contextType === l.Ak.Generative;
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
              t && t.data.meta && (e.entityMeta = h(t));
            },
            setUnloadedEntitiesData: (t) => {
              t && (e.unloadedEntitiesData = (0, s.pj)(t));
            },
            resetUnloadedEntitiesData: () => {
              e.unloadedEntitiesData = void 0;
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
            setCurrentlyPlayingTrackIndex: (t) => {
              e.currentlyPlayingTrackIndex = t;
            },
            setQuality: (t) => {
              e.quality = t;
            },
          })),
        f = (e, t) => ({ type: d.RX.Unloaded, meta: { id: e, albumId: t } });
      var C = a(66403),
        E = a(6769);
    },
    17620: function (e, t, a) {
      "use strict";
      a.d(t, {
        Xb: function () {
          return i.AlbumPage;
        },
        Lf: function () {
          return N;
        },
      });
      var i = a(56890);
      a(36957);
      var r = a(96555),
        s = a(96431),
        l = a(48616),
        n = a(6329),
        o = a(96911),
        d = a(82436),
        u = a(21774),
        c = a(5674),
        m = a(65704);
      let g = (e) =>
          (null != e ? e : []).reduce((e, t) => ((e[t] = !0), e), {}),
        p = (e, t) => e.map((e) => "".concat(e, ":").concat(t));
      var h = a(95539);
      let v = (e) => ({ type: u.lf.TEXT, data: e || null }),
        _ = (e, t, a, i, r) => ({
          type: (null == a ? void 0 : a.type) || l.Vc.TRACK,
          id: e,
          data: a || null,
          loadingState: t,
          position: i,
          isBest: r,
        }),
        S = (e) => "".concat(e, "-text"),
        b = (e) => String(e),
        y = (e, t, a, i) => {
          e.forEach((e) => {
            var r, s, l, n, o;
            if (null === (r = e.albums) || void 0 === r ? void 0 : r[0]) {
              let r = a.get(b(e.id));
              void 0 !== r &&
                (t[r] = _(
                  e.id,
                  c.Gu.RESOLVE,
                  (0, h.Vt)(e),
                  null === (l = e.albums[0]) || void 0 === l
                    ? void 0
                    : null === (s = l.trackPosition) || void 0 === s
                      ? void 0
                      : s.index,
                  i.has(String(e.id)),
                ));
              let d = a.get(S(e.id));
              void 0 !== d &&
                (t[d] = v(
                  null === (o = e.albums[0]) || void 0 === o
                    ? void 0
                    : null === (n = o.trackPosition) || void 0 === n
                      ? void 0
                      : n.volume,
                ));
            }
          });
        },
        f = (e, t, a, i) => {
          let r = 0;
          e.volumes.forEach((s) => {
            e.volumes.length > 1 &&
              s[0] &&
              (t.push(v()), a.set(S(s[0].id), t.length - 1)),
              s.forEach((e) => {
                t.push(_(e.id, c.Gu.IDLE)),
                  a.set(b(e.id), t.length - 1),
                  i.set(b(e.id), r),
                  r++;
              });
          });
        },
        C = (e, t, a, i) => {
          e.forEach((e) => {
            let r = a.get(String(e));
            void 0 !== r && (t[r] = _(e, i));
          });
        },
        E = r.V5.model("LabelItem", { id: r.V5.number, name: r.V5.string }),
        x = r.V5.model("RelatedAlbumsPage", {
          loadingState: r.V5.enumeration(Object.values(c.Gu)),
          items: r.V5.array(o.ug),
        }),
        N = r.V5.compose(
          r.V5.model("AlbumPage", {
            meta: r.V5.maybeNull(o.ug),
            items: r.V5.array(n.JP),
            indexItems: r.V5.map(r.V5.number),
            trackIndexInContext: r.V5.map(r.V5.number),
            loadingState: r.V5.enumeration(Object.values(c.Gu)),
            errorStatusCode: r.V5.maybeNull(r.V5.number),
            deprecationTargetAlbumId: r.V5.maybeNull(r.V5.number),
            latestGenreAlbums: x,
            otherArtistAlbums: x,
            otherAlbumVersions: r.V5.array(o.ug),
            bests: r.V5.map(r.V5.boolean),
            labels: r.V5.maybeNull(r.V5.array(E)),
            description: r.V5.maybe(r.V5.string),
          }),
          m.ie,
        )
          .views((e) => ({
            get isNonMusicType() {
              var t;
              if (null === (t = e.meta) || void 0 === t ? void 0 : t.type)
                return [l.VZ.PODCAST, l.VZ.AUDIOBOOK].includes(e.meta.type);
              return !1;
            },
            get isOtherArtistAlbumsAvailable() {
              var a, i, r, n;
              return !!(
                !this.isNonMusicType &&
                (null === (i = e.meta) || void 0 === i
                  ? void 0
                  : null === (a = i.artists) || void 0 === a
                    ? void 0
                    : a.length) === 1 &&
                !(null === (n = e.meta) || void 0 === n
                  ? void 0
                  : null === (r = n.artists[0]) || void 0 === r
                    ? void 0
                    : r.various)
              );
            },
            get isLatestGenreAlbumsAvailable() {
              var o;
              return !!(
                !this.isNonMusicType &&
                (null === (o = e.meta) || void 0 === o ? void 0 : o.genre)
              );
            },
            get isNotFound() {
              return (
                e.loadingState === c.Gu.REJECT &&
                e.errorStatusCode === s.CN.NOT_FOUND
              );
            },
            get isRejected() {
              return e.loadingState === c.Gu.REJECT;
            },
            get hasOtherAlbumVersions() {
              return !!(
                e.loadingState === c.Gu.IDLE ||
                e.loadingState === c.Gu.PENDING ||
                (e.otherAlbumVersions && e.otherAlbumVersions.length > 0)
              );
            },
            get hasLatestGenreAlbums() {
              return !!(
                e.latestGenreAlbums.loadingState === c.Gu.IDLE ||
                e.latestGenreAlbums.loadingState === c.Gu.PENDING ||
                (e.latestGenreAlbums.items &&
                  e.latestGenreAlbums.items.length > 0)
              );
            },
            get hasOtherArtistAlbums() {
              return !!(
                e.otherArtistAlbums.loadingState === c.Gu.IDLE ||
                e.otherArtistAlbums.loadingState === c.Gu.PENDING ||
                (e.otherArtistAlbums.items &&
                  e.otherArtistAlbums.items.length > 0)
              );
            },
            get isLoading() {
              return (
                e.loadingState === c.Gu.IDLE || e.loadingState === c.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === c.Gu.RESOLVE;
            },
            get isLatestGenreAlbumsLoading() {
              return (
                e.latestGenreAlbums.loadingState === c.Gu.IDLE ||
                e.latestGenreAlbums.loadingState === c.Gu.PENDING
              );
            },
            get isOtherArtistAlbumsLoading() {
              return (
                e.otherArtistAlbums.loadingState === c.Gu.IDLE ||
                e.otherArtistAlbums.loadingState === c.Gu.PENDING
              );
            },
            get contextMeta() {
              var d, m, g, p, h, v, _, S, b, y;
              return {
                id: e.meta.id,
                title: null === (d = e.meta) || void 0 === d ? void 0 : d.title,
                coverUri:
                  null === (m = e.meta) || void 0 === m ? void 0 : m.coverUri,
                type: null === (g = e.meta) || void 0 === g ? void 0 : g.type,
                year: null === (p = e.meta) || void 0 === p ? void 0 : p.year,
                version:
                  null === (h = e.meta) || void 0 === h ? void 0 : h.version,
                contentWarning:
                  null === (v = e.meta) || void 0 === v
                    ? void 0
                    : v.contentWarning,
                genre: null === (_ = e.meta) || void 0 === _ ? void 0 : _.genre,
                likesCount:
                  null === (S = e.meta) || void 0 === S ? void 0 : S.likesCount,
                averageColor:
                  null === (b = e.meta) || void 0 === b
                    ? void 0
                    : b.averageColor,
                available:
                  null === (y = e.meta) || void 0 === y
                    ? void 0
                    : y.isAvailable,
              };
            },
            get lastEpisodes() {
              return e.items
                .filter((e) => e.type !== u.lf.TEXT)
                .slice(0, 5)
                .map((e) => e);
            },
            get lastEpisodesTrackIds() {
              return this.lastEpisodes.map((e) => e.id);
            },
          }))
          .actions((e) => {
            let t = {
              getLatestGenreAlbums: (0, r.ls)(function* (t) {
                let { topResource: a, modelActionsLogger: i } = (0, r.dU)(e);
                if (e.latestGenreAlbums.loadingState !== c.Gu.PENDING)
                  try {
                    e.latestGenreAlbums.loadingState = c.Gu.PENDING;
                    let i = yield a.getTopByGenre(t);
                    (e.latestGenreAlbums.items = (0, r.pj)(i.albums.map(o.ym))),
                      (e.latestGenreAlbums.loadingState = c.Gu.RESOLVE);
                  } catch (t) {
                    i.error(t),
                      (e.latestGenreAlbums.loadingState = c.Gu.REJECT);
                  }
              }),
              getOtherArtistAlbums: (0, r.ls)(function* (t, a) {
                let { artistsResource: i, modelActionsLogger: s } = (0, r.dU)(
                  e,
                );
                if (e.otherArtistAlbums.loadingState !== c.Gu.PENDING)
                  try {
                    if (!t.artistId) {
                      e.otherArtistAlbums.loadingState = c.Gu.REJECT;
                      return;
                    }
                    e.otherArtistAlbums.loadingState = c.Gu.PENDING;
                    let s = yield i.getSafeDirectAlbums({
                      ...t,
                      artistId: t.artistId,
                    });
                    (e.otherArtistAlbums.items = (0, r.pj)(
                      s.albums
                        .filter((e) => String(e.id) !== String(a))
                        .map(o.ym),
                    )),
                      (e.otherArtistAlbums.loadingState = c.Gu.RESOLVE);
                  } catch (t) {
                    s.error(t),
                      (e.otherArtistAlbums.loadingState = c.Gu.REJECT);
                  }
              }),
              getTracks: (0, r.ls)(function* (t) {
                let { trackIds: a } = t,
                  { tracksResource: i, modelActionsLogger: s } = (0, r.dU)(e);
                try {
                  var l;
                  if (!(null === (l = e.meta) || void 0 === l ? void 0 : l.id))
                    return;
                  C(a, e.items, e.indexItems, c.Gu.PENDING);
                  let t = yield i.getTracksMeta({
                    trackIds: p(a, e.meta.id),
                    withProgress: !0,
                  });
                  y(t, e.items, e.indexItems, e.bests);
                } catch (t) {
                  s.error(t), C(a, e.items, e.indexItems, c.Gu.REJECT);
                }
              }),
              getData: (0, r.ls)(function* (a) {
                let { albumId: i, resumeStream: n } = a,
                  { albumResource: u, modelActionsLogger: m } = (0, r.dU)(e),
                  { experiments: p, disclaimer: h } = (0, r.yj)(e),
                  v = p.checkExperiment(c.pe.WebNextAlbumDisableVersions, "on"),
                  _ = p.checkExperiment(c.pe.WebNextAlbumDisableTracks, "on"),
                  S = p.checkExperiment(
                    c.pe.WebNextAlbumDisableLatestGenreAlbums,
                    "on",
                  ),
                  b = p.checkExperiment(
                    c.pe.WebNextAlbumDisableOtherArtistAlbums,
                    "on",
                  ),
                  y = p.checkExperiment(c.pe.WebNextLegalRejectAlbum, "on");
                if (e.loadingState !== c.Gu.PENDING)
                  try {
                    var C, E, x, N;
                    let a, m;
                    e.loadingState = c.Gu.PENDING;
                    let p = yield u.getAlbumWithTracksIds({
                      albumId: i,
                      resumeStream: n,
                    });
                    if ((null == p ? void 0 : p.error) === "not-found") {
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                        (e.loadingState = c.Gu.REJECT),
                        (e.otherArtistAlbums.loadingState = c.Gu.REJECT),
                        (e.latestGenreAlbums.loadingState = c.Gu.REJECT);
                      return;
                    }
                    if (
                      null === (C = p.deprecation) || void 0 === C
                        ? void 0
                        : C.targetAlbumId
                    ) {
                      (e.deprecationTargetAlbumId =
                        p.deprecation.targetAlbumId),
                        (e.loadingState = c.Gu.RESOLVE);
                      return;
                    }
                    let P = (
                      null !== (E = p.disclaimers) && void 0 !== E ? E : []
                    ).includes(l.em.MODAL);
                    P && y && (yield h.getAlbumDisclaimer({ albumId: i }));
                    let { sonataState: I } = (0, r.yj)(e);
                    if (
                      (I.setUnloadedEntitiesData(
                        p.volumes.flat().map((e) => (0, d.RN)(e.id)),
                      ),
                      (e.meta = (0, o.ym)(p)),
                      (e.bests = (0, r.pj)(g(p.bests))),
                      (e.labels = (0, r.pj)(p.labels)),
                      (e.contentWarning = (0, r.pj)(p.contentWarning)),
                      (e.description = (0, r.pj)(p.description)),
                      !v &&
                        p.duplicates &&
                        p.duplicates.length > 0 &&
                        (e.otherAlbumVersions = (0, r.pj)(
                          null === (x = p.duplicates) || void 0 === x
                            ? void 0
                            : x.map(o.ym),
                        )),
                      !_)
                    ) {
                      f(p, e.items, e.indexItems, e.trackIndexInContext);
                      let a = [];
                      for (let t = 0; t < 10; t++) {
                        let i = e.items[t];
                        (null == i ? void 0 : i.type) === l.Vc.TRACK &&
                          a.push(String(i.id));
                      }
                      yield t.getTracks({ trackIds: a });
                    }
                    !S && e.isLatestGenreAlbumsAvailable
                      ? (a = t.getLatestGenreAlbums({
                          category: l.mk.RECENT_ALBUMS,
                          period: l.pH.WEEK,
                          pageSize: 8,
                          genre: p.genre,
                        }))
                      : (e.latestGenreAlbums.loadingState = c.Gu.RESOLVE),
                      !b && e.isOtherArtistAlbumsAvailable
                        ? (m = t.getOtherArtistAlbums(
                            {
                              artistId: String(
                                null === (N = p.artists[0]) || void 0 === N
                                  ? void 0
                                  : N.id,
                              ),
                              limit: 8,
                            },
                            i,
                          ))
                        : (e.otherArtistAlbums.loadingState = c.Gu.RESOLVE),
                      yield Promise.allSettled([a, m]),
                      e.loadingState !== c.Gu.IDLE &&
                        (e.loadingState = c.Gu.RESOLVE);
                  } catch (t) {
                    m.error(t),
                      t instanceof s.du &&
                        (t.statusCode === s.CN.NOT_FOUND ||
                          t.statusCode === s.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = s.CN.NOT_FOUND),
                      e.loadingState !== c.Gu.IDLE &&
                        ((e.loadingState = c.Gu.REJECT),
                        (e.otherArtistAlbums.loadingState = c.Gu.REJECT),
                        (e.latestGenreAlbums.loadingState = c.Gu.REJECT));
                  }
              }),
              loadLastEpisodes() {
                t.getTracks({ trackIds: e.lastEpisodesTrackIds });
              },
              reset() {
                let { sonataState: t } = (0, r.yj)(e);
                t.resetUnloadedEntitiesData(),
                  (e.meta = null),
                  (e.errorStatusCode = null),
                  (e.deprecationTargetAlbumId = null),
                  (e.items = (0, r.pj)([])),
                  e.indexItems.clear(),
                  e.trackIndexInContext.clear(),
                  (e.loadingState = c.Gu.IDLE),
                  (e.latestGenreAlbums.loadingState = c.Gu.IDLE),
                  (e.latestGenreAlbums.items = (0, r.pj)([])),
                  (e.otherArtistAlbums.loadingState = c.Gu.IDLE),
                  (e.otherArtistAlbums.items = (0, r.pj)([])),
                  (e.otherAlbumVersions = (0, r.pj)([])),
                  (e.description = ""),
                  (e.labels = null);
              },
            };
            return t;
          });
    },
    36957: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          AlbumNotFoundPage: function () {
            return o;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(99616),
        l = a(2365),
        n = a(5674);
      let o = (0, r.Pi)(() => {
        let { album: e } = (0, n.oR)();
        return (
          (0, s.useEffect)(
            () => () => {
              e.reset();
            },
            [e],
          ),
          (0, i.jsx)(l.T, {})
        );
      });
    },
    56890: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          AlbumPage: function () {
            return V;
          },
        });
      var i,
        r,
        s = a(8759),
        l = a(33423),
        n = a(11769),
        o = a(99616),
        d = a(65244),
        u = a(27287),
        c = a(70579),
        m = a(96911),
        g = a(13236),
        p = a(7042),
        h = a(5674),
        v = a(44285),
        _ = a(35338),
        S = a(2814),
        b = a(454),
        y = a(57413),
        f = a(48616),
        C = a(1918),
        E = a(48157),
        x = a(95539),
        N = a(21774),
        P = a(44752),
        I = a.n(P);
      let L = (0, l.Pi)((e) => {
        var t;
        let { albumHeaderRef: a, refCallback: i } = e,
          r = (0, o.useRef)(null),
          l = (0, h.x5)({ pageId: h.Rh.ALBUM, blockId: h.aU.ALBUM }),
          n = (0, o.useRef)(0),
          { notify: u } = (0, h.d$)(),
          { album: c, experiments: g, sonataState: p } = (0, h.oR)(),
          { formatMessage: P } = (0, d.Z)(),
          [L, k] = (0, o.useState)(!1);
        (0, o.useEffect)(
          () => () => {
            n.current = 0;
          },
          [c],
        ),
          (0, o.useEffect)(() => {
            (c.otherArtistAlbums.loadingState === h.Gu.REJECT ||
              c.latestGenreAlbums.loadingState === h.Gu.REJECT) &&
              n &&
              !(n.current > 0) &&
              (u(
                (0, s.jsx)(v.Q, {
                  error: P({
                    id: "album-errors.error-during-loading-similar-albums",
                  }),
                }),
                { containerId: h.W$.ERROR },
              ),
              n.current++);
          }, [
            c.isNotFound,
            c.latestGenreAlbums.loadingState,
            c.otherArtistAlbums.loadingState,
            P,
            u,
          ]),
          (0, o.useEffect)(() => {
            c.isLoaded && c.hasOtherAlbumVersions && k(!0);
          }, [c.hasOtherAlbumVersions, c.isLoaded]);
        let A = (0, o.useCallback)(() => {
            let e = r.current;
            null == e || e.scrollIntoView({ behavior: "smooth" });
          }, []),
          T = (0, o.useMemo)(
            () =>
              c.isLoading || !c.meta || c.isRejected
                ? (0, s.jsx)(E.KC, { className: I().header })
                : (0, s.jsx)(E.hx, {
                    album: c.meta,
                    className: I().header,
                    ref: a,
                    onVersionClick: L ? A : void 0,
                  }),
            [c.isLoading, c.isRejected, c.meta, a, A, L],
          ),
          j = (0, o.useMemo)(
            () => ({
              Header: () => T,
              Footer: () =>
                (0, s.jsxs)("div", {
                  className: I().footerContainer,
                  children: [
                    (0, s.jsxs)("div", {
                      className: I().carouselBlocks,
                      children: [
                        c.hasOtherAlbumVersions &&
                          (0, s.jsx)(m.wk, {
                            isShimmerVisible: c.isLoading,
                            isShimmerActive: !0,
                            className: I().carouselContainer,
                            headerClassName: (0, _.W)(
                              I().carouselBlock,
                              I().carouselBlockHeader,
                            ),
                            containerClassName: I().carouselBlock,
                            title: P({
                              id: "entity-names.other-album-versions",
                            }),
                            albums: c.otherAlbumVersions,
                            ...(0, b.BA)(b.Br.album.OTHER_VERSIONS_CAROUSEL),
                            headingRef: r,
                          }),
                        c.hasLatestGenreAlbums &&
                          (0, s.jsx)(m.wk, {
                            isShimmerVisible: c.isLatestGenreAlbumsLoading,
                            isShimmerActive: !0,
                            className: I().carouselContainer,
                            headerClassName: (0, _.W)(
                              I().carouselBlock,
                              I().carouselBlockHeader,
                            ),
                            containerClassName: I().carouselBlock,
                            title: P({
                              id: "entity-names.new-albums-in-genre",
                            }),
                            albums: c.latestGenreAlbums.items,
                            ...(0, b.BA)(b.Br.album.GENRE_ALBUMS_CAROUSEL),
                          }),
                        c.hasOtherArtistAlbums &&
                          (0, s.jsx)(m.wk, {
                            isShimmerVisible: c.isOtherArtistAlbumsLoading,
                            isShimmerActive: !0,
                            className: I().carouselContainer,
                            headerClassName: (0, _.W)(
                              I().carouselBlock,
                              I().carouselBlockHeader,
                            ),
                            containerClassName: I().carouselBlock,
                            title: P({
                              id: "entity-names.other-albums-of-artist",
                            }),
                            albums: c.otherArtistAlbums.items,
                            ...(0, b.BA)(
                              b.Br.album.OTHER_ARTIST_ALBUMS_CAROUSEL,
                            ),
                          }),
                      ],
                    }),
                    (0, s.jsx)(v.$_, { className: I().footer }),
                  ],
                }),
            }),
            [
              T,
              c.hasOtherAlbumVersions,
              c.isLoading,
              c.otherAlbumVersions,
              c.hasLatestGenreAlbums,
              c.isLatestGenreAlbumsLoading,
              c.latestGenreAlbums.items,
              c.hasOtherArtistAlbums,
              c.isOtherArtistAlbumsLoading,
              c.otherArtistAlbums.items,
              P,
            ],
          ),
          G = (0, o.useCallback)(
            (e) => {
              let t = [];
              for (let a = e.startIndex; a <= e.endIndex; a++) {
                let e = c.items[a];
                (null == e ? void 0 : e.type) === f.Vc.TRACK &&
                  (null == e ? void 0 : e.loadingState) === h.Gu.IDLE &&
                  t.push(e.id);
              }
              t.length && c.getTracks({ trackIds: t });
            },
            [c],
          ),
          D = g.checkExperiment(h.pe.WebNextAlbumDisableTracks, "on"),
          R = D ? 0 : c.items.length || 10;
        return (0, s.jsx)(v.Wv, {
          className: (0, _.W)(I().root, I().important),
          listClassName: I().content,
          context: {
            listAriaLabel: P(
              { id: "entity-names.albums-tracks-list" },
              {
                albumName:
                  (null === (t = c.meta) || void 0 === t ? void 0 : t.title) ||
                  "",
              },
            ),
          },
          customComponents: j,
          totalCount: R,
          itemContentCallback: (e) => {
            var t, a;
            let i =
              null == c
                ? void 0
                : null === (t = c.items) || void 0 === t
                  ? void 0
                  : t[e];
            if (!i || !c.meta || c.isRejected)
              return (0, s.jsx)(v.DX, {
                isActive: !0,
                className: I().shimmerItem,
                variant: h.Lx.ALBUM,
              });
            if (!(null == i ? void 0 : i.data))
              switch (null == i ? void 0 : i.type) {
                case N.lf.TEXT:
                  return (0, s.jsx)(v.AH, { className: I().shimmerItem });
                case f.Vc.TRACK:
                  return (0, s.jsx)(v.DX, {
                    isActive: !0,
                    className: I().shimmerItem,
                    variant: h.Lx.ALBUM,
                  });
              }
            return (null == i ? void 0 : i.type) === N.lf.TEXT
              ? (0, s.jsx)("div", {
                  className: (0, _.W)(I().shimmerItem, I().textItem),
                  children: (0, s.jsx)(C.Caption, {
                    variant: "span",
                    type: "entity",
                    size: "m",
                    weight: "medium",
                    className: I().text,
                    children: (0, s.jsx)(S.Z, {
                      id: "entity-names.disk-number",
                      values: { number: i.data },
                    }),
                  }),
                })
              : i.data
                ? (0, s.jsx)(x.RJ, {
                    withLightning: i.isBest,
                    track: i.data,
                    position: i.position,
                    albumArtists:
                      null == c
                        ? void 0
                        : null === (a = c.meta) || void 0 === a
                          ? void 0
                          : a.artists,
                    playContextParams: {
                      contextData: {
                        type: y.Ak.Album,
                        meta: c.contextMeta,
                        from: l,
                      },
                      queueParams: {
                        index: c.trackIndexInContext.get(String(i.id)),
                      },
                      loadContextMeta: !0,
                      entitiesData: p.unloadedEntitiesDataFromModels,
                    },
                  })
                : void 0;
          },
          onGetDataByRange: G,
          debounceDurationInMs: 300,
          initialItemCount: R,
          handleRef: i,
          withHeader: !0,
        });
      });
      var k = a(26265),
        A = a(6329);
      ((i = r || (r = {})).ABOUT = "about"), (i.TRACKS = "track-list");
      let T = [r.ABOUT, r.TRACKS];
      var j = a(28280),
        G = a.n(j);
      let D = "activeTab",
        R = (0, l.Pi)((e) => {
          var t;
          let { podcastHeaderRef: a, refCallback: i } = e,
            l = (0, h.x5)({ pageId: h.Rh.PODCAST, blockId: h.aU.PODCAST }),
            n = (0, o.useRef)(0),
            u = (0, o.useRef)(null),
            [c, m] = (0, o.useState)(r.ABOUT),
            g = (0, h.m5)(),
            { album: p, experiments: b, sonataState: P } = (0, h.oR)(),
            L = b.checkExperiment(h.pe.WebNextPodcastPage, "on"),
            j = (0, k.useTabsState)(0),
            { formatMessage: R } = (0, d.Z)();
          (0, o.useEffect)(
            () => () => {
              n.current = 0;
            },
            [p],
          ),
            (0, o.useEffect)(() => {
              var e, t, a;
              if (!L) return;
              (null === (e = window.location) || void 0 === e
                ? void 0
                : e.href) && (u.current = new URL(window.location.href));
              let i =
                  null === (t = u.current) || void 0 === t
                    ? void 0
                    : t.searchParams,
                s = null == i ? void 0 : i.get(D);
              T.includes(s)
                ? (m(s),
                  null === (a = j.onTabChange) ||
                    void 0 === a ||
                    a.call(j, T.indexOf(s)))
                : (null == i || i.set(D, r.ABOUT), g(String(u.current)));
            }, [j, g, L]);
          let V = (0, o.useMemo)(
              () => ({
                about: R({ id: "podcast.tab-about" }),
                "track-list": R(
                  { id: "podcast.tab-tracks" },
                  { value: p.items.length },
                ),
              }),
              [R, p.items.length],
            ),
            O = (0, o.useMemo)(
              () => (e) => {
                var t, a, i;
                if (!j.onTabChange || e === j.value) return;
                j.onTabChange(e);
                let s = null !== (i = T[e]) && void 0 !== i ? i : r.ABOUT;
                m(s),
                  null === (a = u.current) ||
                    void 0 === a ||
                    null === (t = a.searchParams) ||
                    void 0 === t ||
                    t.set(D, s),
                  g(String(u.current));
              },
              [j, g],
            ),
            w = (e, t) =>
              (0, s.jsxs)("div", {
                className: G().infoBlock,
                children: [
                  (0, s.jsx)(C.Caption, {
                    variant: "div",
                    type: "entity",
                    size: "m",
                    className: G().infoTitle,
                    children: e,
                  }),
                  (0, s.jsx)(C.Caption, {
                    variant: "div",
                    type: "entity",
                    size: "m",
                    children: t,
                  }),
                ],
              }),
            B = (0, o.useMemo)(() => {
              var e, t, a, i, r;
              let l =
                  Number(
                    null === (e = p.labels) || void 0 === e ? void 0 : e.length,
                  ) > 1
                    ? R({ id: "podcast.publishers-title" })
                    : R({ id: "podcast.publisher-title" }),
                n =
                  null === (t = p.labels) || void 0 === t
                    ? void 0
                    : t.map((e) => e.name).join(", "),
                o = R({ id: "podcast.age-limit" });
              return (0, s.jsxs)("div", {
                className: G().contentAbout,
                children: [
                  !!(null === (a = p.description) || void 0 === a
                    ? void 0
                    : a.length) &&
                    (0, s.jsx)(C.Caption, {
                      variant: "div",
                      type: "entity",
                      size: "m",
                      className: I().text,
                      children: (0, s.jsx)("span", {
                        dangerouslySetInnerHTML: { __html: p.description },
                      }),
                    }),
                  ((null === (i = p.labels) || void 0 === i
                    ? void 0
                    : i.length) ||
                    p.isExplicit) &&
                    (0, s.jsxs)("div", {
                      className: I().text,
                      children: [
                        !!(null === (r = p.labels) || void 0 === r
                          ? void 0
                          : r.length) && w("".concat(l, ":"), String(n)),
                        p.isExplicit && w("".concat(o, ":"), "18+"),
                      ],
                    }),
                ],
              });
            }, [R, p.isExplicit, p.labels, p.description]),
            M = (0, o.useMemo)(
              () =>
                p.isLoading || !p.meta || p.isRejected
                  ? (0, s.jsx)(E.KC, { className: I().header })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(E.hx, {
                          album: p.meta,
                          className: I().header,
                          ref: a,
                        }),
                        L &&
                          (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(v.no, {
                                className: G().tabCarousel,
                                ...j,
                                onTabChange: O,
                                children: T.map((e, t) =>
                                  (0, s.jsx)(
                                    v.OK,
                                    {
                                      className: G().tab,
                                      title: V[e],
                                      value: t,
                                    },
                                    e,
                                  ),
                                ),
                              }),
                              c === r.ABOUT && B,
                            ],
                          }),
                      ],
                    }),
              [p.isLoading, p.isRejected, p.meta, B, L, a, j, V, O, c],
            );
          (0, o.useEffect)(() => {
            p.isLoaded && p.loadLastEpisodes();
          }, [p, p.isLoaded, p.loadLastEpisodes]);
          let U =
              b.checkExperiment(h.pe.WebNextPodcastPage, "on") &&
              c === r.ABOUT &&
              p.lastEpisodes.length > 0,
            F = (0, o.useMemo)(
              () => ({
                Header: () => M,
                Footer: () =>
                  (0, s.jsxs)("div", {
                    className: I().footerContainer,
                    children: [
                      U && (0, s.jsx)(A.QG, { className: G().lastEpisodes }),
                      (0, s.jsx)(v.$_, { className: I().footer }),
                    ],
                  }),
              }),
              [M, U],
            ),
            W = (0, o.useCallback)(
              (e) => {
                let t = [];
                for (let a = e.startIndex; a <= e.endIndex; a++) {
                  let e = p.items[a];
                  (null == e ? void 0 : e.type) === f.Vc.TRACK &&
                    (null == e ? void 0 : e.loadingState) === h.Gu.IDLE &&
                    t.push(e.id);
                }
                t.length && p.getTracks({ trackIds: t });
              },
              [p],
            ),
            H = b.checkExperiment(h.pe.WebNextAlbumDisableTracks, "on"),
            z = H || (L && c === r.ABOUT) ? 0 : p.items.length || 10,
            q = (0, o.useMemo)(() => {
              var e;
              return L && c === r.TRACKS
                ? {
                    listAriaLabel: R(
                      { id: "podcast.episodes-list" },
                      {
                        albumName:
                          (null === (e = p.meta) || void 0 === e
                            ? void 0
                            : e.title) || "",
                      },
                    ),
                  }
                : null;
            }, [
              c,
              null === (t = p.meta) || void 0 === t ? void 0 : t.title,
              R,
              L,
            ]);
          return (0, s.jsx)(v.Wv, {
            className: (0, _.W)(I().root, I().important),
            listClassName: (0, _.W)(I().content, G().content),
            context: q,
            customComponents: F,
            totalCount: z,
            itemContentCallback: (e) => {
              var t;
              let a =
                null == p
                  ? void 0
                  : null === (t = p.items) || void 0 === t
                    ? void 0
                    : t[e];
              if (!a || !p.meta || p.isRejected)
                return (0, s.jsx)(v.DX, {
                  isActive: !0,
                  className: I().shimmerItem,
                  variant: h.Lx.ALBUM,
                });
              if (!(null == a ? void 0 : a.data))
                switch (null == a ? void 0 : a.type) {
                  case N.lf.TEXT:
                    return (0, s.jsx)(v.AH, { className: I().shimmerItem });
                  case f.Vc.TRACK:
                    return (0, s.jsx)(v.DX, {
                      isActive: !0,
                      className: I().shimmerItem,
                      variant: h.Lx.ALBUM,
                    });
                  default:
                    return (0, s.jsx)(v.DX, {
                      isActive: !0,
                      className: G().shimmerItem,
                      variant: h.Lx.PLAYLIST,
                    });
                }
              return (null == a ? void 0 : a.type) === N.lf.TEXT
                ? (0, s.jsx)("div", {
                    className: (0, _.W)(I().shimmerItem, I().textItem),
                    children: (0, s.jsx)(C.Caption, {
                      variant: "span",
                      type: "entity",
                      size: "m",
                      className: I().text,
                      children: (0, s.jsx)(S.Z, {
                        id: "entity-names.season-number",
                        values: { number: a.data },
                      }),
                    }),
                  })
                : a.data
                  ? (0, s.jsx)(x.N6, {
                      track: a.data,
                      playContextParams: {
                        contextData: {
                          type: y.Ak.Album,
                          meta: p.contextMeta,
                          from: l,
                        },
                        queueParams: {
                          index: p.trackIndexInContext.get(String(a.id)),
                        },
                        loadContextMeta: !1,
                        entitiesData: P.unloadedEntitiesDataFromModels,
                      },
                    })
                  : void 0;
            },
            onGetDataByRange: W,
            debounceDurationInMs: 300,
            initialItemCount: z,
            handleRef: i,
            withHeader: !0,
          });
        }),
        V = (0, l.Pi)((e) => {
          var t, a, i, r;
          let { albumId: l } = e,
            _ = (0, o.useRef)(0),
            [S, b] = (0, g.zU)(),
            { notify: y } = (0, h.d$)(),
            { album: f, disclaimer: C } = (0, h.oR)(),
            { formatMessage: E } = (0, d.Z)(),
            { ref: x, offsetY: N } = (0, u.e)(),
            P = (0, o.useMemo)(() => {
              var e;
              return (0, h.XG)(
                null === (e = f.meta) || void 0 === e ? void 0 : e.averageColor,
              );
            }, [
              null === (t = f.meta) || void 0 === t ? void 0 : t.averageColor,
            ]),
            [k, A] = (0, g.at)(P, N),
            { href: T } = (0, h.zB)(
              "/album/".concat(f.deprecationTargetAlbumId),
            ),
            j = (0, m.jV)({ album: f.meta, shouldHistoryBack: !0 });
          (0, o.useEffect)(() => {
            var e;
            (null === (e = f.meta) || void 0 === e
              ? void 0
              : e.isUnsafeLegal) && j();
          }, [
            null === (a = f.meta) || void 0 === a ? void 0 : a.isUnsafeLegal,
            j,
          ]),
            (0, o.useEffect)(
              () => () => {
                f.reset();
              },
              [f, l],
            ),
            l &&
              f.loadingState === h.Gu.IDLE &&
              (0, o.use)(f.getData({ albumId: Number(l), resumeStream: !1 })),
            f.deprecationTargetAlbumId && (0, n.redirect)(T);
          let G = (0, o.useMemo)(
            () => () => {
              if (
                !f.isNotFound &&
                (f.isRejected || (!f.meta && !f.isLoading))
              ) {
                var e;
                if (!_ || _.current > 0) return;
                let t = (
                  null === (e = f.meta) || void 0 === e ? void 0 : e.isPodcast
                )
                  ? E({ id: "podcast-errors.error-during-loading-podcast" })
                  : E({ id: "album-errors.error-during-loading-album" });
                y((0, s.jsx)(v.Q, { error: t }), { containerId: h.W$.ERROR }),
                  _.current++;
              }
            },
            [f.isRejected, f.isNotFound, f.meta, f.isLoading, y, E],
          );
          G(),
            (0, h.NO)(f.loadingState === h.Gu.RESOLVE),
            f.isNotFound && (0, n.notFound)();
          let D = (0, o.useMemo)(() => {
            var e;
            return (
              null === (e = f.meta) || void 0 === e ? void 0 : e.isPodcast
            )
              ? (0, s.jsx)(R, { podcastHeaderRef: x, refCallback: b })
              : (0, s.jsx)(L, { albumHeaderRef: x, refCallback: b });
          }, [
            null === (i = f.meta) || void 0 === i ? void 0 : i.isPodcast,
            x,
            b,
          ]);
          return (
            null === (r = f.meta) || void 0 === r ? void 0 : r.isLegalRejected
          )
            ? C.isRejected
              ? (0, s.jsx)(c.D, {})
              : (0, s.jsx)(p.em, { disclaimer: C })
            : (0, s.jsx)(h.Lh, {
                pageId: h.Rh.ALBUM,
                children: (0, s.jsxs)(g.I7, {
                  scrollElement: S,
                  children: [
                    (0, s.jsx)(v.h4, { style: A }),
                    (0, s.jsx)("div", {
                      className: I().averageColorBackground,
                      style: k,
                    }),
                    D,
                  ],
                }),
              });
        });
    },
    53191: function (e, t, a) {
      "use strict";
      a.d(t, {
        pr: function () {
          return l.ArtistAlbumsPage;
        },
        MX: function () {
          return o.M;
        },
        aG: function () {
          return n.ArtistConcertsPage;
        },
        vQ: function () {
          return T.ArtistFamiliarPage;
        },
        xA: function () {
          return i.ArtistPage;
        },
        Od: function () {
          return A;
        },
        x3: function () {
          return s.ArtistSimilarPage;
        },
        hD: function () {
          return r.ArtistTracksPage;
        },
      });
      var i = a(91399),
        r = a(66016),
        s = a(41591),
        l = a(4144),
        n = a(66649),
        o = a(85564);
      a(64285);
      var d = a(96555),
        u = a(96431),
        c = a(48616),
        m = a(96911),
        g = a(81546),
        p = a(20210),
        h = a(95539),
        v = a(81446),
        _ = a(55238),
        S = a(5674);
      let b = (e, t) =>
        (0, d.pj)({
          artist: (0, v.d)(e),
          lastMonthListeners: null == t ? void 0 : t.lastMonthListeners,
        });
      var y = a(21774),
        f = a(65704);
      let C = d.V5.model("ArtistAlbumsPage", {
          loadingState: d.V5.enumeration(Object.values(S.Gu)),
          pager: d.V5.maybeNull(f.Vn),
          variant: d.V5.maybeNull(d.V5.enumeration(Object.values(o.M))),
          alreadyRequestedPages: d.V5.map(d.V5.number),
          pendingPages: d.V5.map(d.V5.number),
          requests: d.V5.maybeNull(d.V5.number),
          errorStatusCode: d.V5.maybeNull(d.V5.number),
          items: d.V5.array(d.V5.maybeNull(m.ug)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === S.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === u.CN.NOT_FOUND ||
                  e.errorStatusCode === u.CN.BAD_REQUEST;
              return (e.loadingState === S.Gu.REJECT && i) || a;
            },
          }))
          .actions((e) => {
            let t = {
              setVariant: (t) => {
                e.variant = t;
              },
              getData: (0, d.ls)(function* (t) {
                let { artistId: a, page: i = 0, pageSize: r = 20, sort: s } = t,
                  { artistsResource: l, modelActionsLogger: n } = (0, d.dU)(e);
                if (
                  !(
                    (e.loadingState === S.Gu.PENDING &&
                      e.pendingPages.has("".concat(i))) ||
                    e.alreadyRequestedPages.has("".concat(i))
                  )
                ) {
                  "number" == typeof i &&
                    e.alreadyRequestedPages.set("".concat(i), i);
                  try {
                    var c;
                    let t;
                    (e.loadingState = S.Gu.PENDING),
                      e.pendingPages.set("".concat(i), i);
                    let n = {
                      artistId: a,
                      page: i,
                      pageSize: r,
                      sort: { sortBy: null == s ? void 0 : s.sortBy },
                    };
                    switch (e.variant) {
                      case o.M.COMPILATIONS:
                        t = yield l.getAlsoAlbums(n);
                        break;
                      case o.M.DISCOGRAPHY:
                        t = yield l.getDiscographyAlbums(n);
                        break;
                      default:
                        t = yield l.getDirectAlbums(n);
                    }
                    let u = { page: i, perPage: r, total: t.pager.total };
                    0 === e.items.length &&
                      (e.items = (0, d.pj)(
                        Array.from({ length: u.total }, () => null),
                      ));
                    let m = t.albums.map(y.N);
                    (0, S.AG)({
                      items: e.items,
                      mappedRawItems: m,
                      page: i,
                      pageSize: r,
                    }),
                      (e.pager = u),
                      (e.requests =
                        (null !== (c = e.requests) && void 0 !== c ? c : 0) +
                        1),
                      (e.loadingState = S.Gu.RESOLVE);
                  } catch (t) {
                    n.error(t),
                      t instanceof u.du &&
                        (t.statusCode === u.CN.NOT_FOUND ||
                          t.statusCode === u.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = u.CN.NOT_FOUND),
                      e.loadingState !== S.Gu.IDLE &&
                        (e.loadingState = S.Gu.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(i));
                  }
                }
              }),
              reset() {
                (e.loadingState = S.Gu.IDLE),
                  e.pendingPages.clear(),
                  (e.pager = null),
                  (e.variant = null),
                  e.alreadyRequestedPages.clear(),
                  (e.errorStatusCode = null),
                  (e.items = (0, d.pj)([]));
              },
            };
            return t;
          }),
        E = d.V5.model("ArtistConcertsPage", {
          loadingState: d.V5.enumeration(Object.values(S.Gu)),
          errorStatusCode: d.V5.maybeNull(d.V5.number),
          concerts: d.V5.maybeNull(d.V5.array(_.Z)),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === S.Gu.IDLE || e.loadingState === S.Gu.PENDING
              );
            },
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === S.Gu.RESOLVE &&
                  (null === (t = e.concerts) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                i =
                  e.errorStatusCode === u.CN.NOT_FOUND ||
                  e.errorStatusCode === u.CN.BAD_REQUEST;
              return (e.loadingState === S.Gu.REJECT && i) || a;
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, d.ls)(function* (t) {
                let { artistId: a } = t,
                  { artistsResource: i, modelActionsLogger: r } = (0, d.dU)(e);
                if (e.loadingState !== S.Gu.PENDING)
                  try {
                    e.loadingState = S.Gu.PENDING;
                    let { concerts: t } = yield i.getConcerts({ artistId: a });
                    (e.concerts = (0, d.pj)(t.map(_.zj))),
                      (e.loadingState = S.Gu.RESOLVE);
                  } catch (t) {
                    r.error(t),
                      t instanceof u.du &&
                        (t.statusCode === u.CN.NOT_FOUND ||
                          t.statusCode === u.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = u.CN.NOT_FOUND),
                      e.loadingState !== S.Gu.IDLE &&
                        (e.loadingState = S.Gu.REJECT);
                  }
              }),
              reset() {
                (e.loadingState = S.Gu.IDLE),
                  (e.errorStatusCode = null),
                  (e.concerts = null);
              },
            };
            return t;
          }),
        x = (e) =>
          (0, d.pj)({
            ...(0, m.cO)({ album: e, artists: e.artists }),
            version: e.version,
          }),
        N = d.V5.model("ArtistFamiliarPage", {
          loadingState: d.V5.enumeration(Object.values(S.Gu)),
          errorStatusCode: d.V5.maybeNull(d.V5.number),
          vibeTracks: d.V5.maybeNull(d.V5.array(h.le)),
          collectionTracks: d.V5.maybeNull(d.V5.array(h.le)),
          collectionAlbums: d.V5.maybeNull(d.V5.array(m.ug)),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === S.Gu.IDLE || e.loadingState === S.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === S.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === S.Gu.REJECT;
            },
            get isNotFound() {
              let t =
                e.errorStatusCode === u.CN.NOT_FOUND ||
                e.errorStatusCode === u.CN.BAD_REQUEST;
              return e.loadingState === S.Gu.REJECT && t;
            },
            get hasCollectionEntities() {
              var t, a;
              return (
                (this.isLoaded &&
                  Number(
                    null === (t = e.collectionTracks) || void 0 === t
                      ? void 0
                      : t.length,
                  ) > 0) ||
                Number(
                  null === (a = e.collectionAlbums) || void 0 === a
                    ? void 0
                    : a.length,
                ) > 0
              );
            },
            get shouldShowTitleBlocks() {
              var i, r;
              if (this.isLoading) return !0;
              return (
                Number(
                  null === (i = e.collectionTracks) || void 0 === i
                    ? void 0
                    : i.length,
                ) > 0 &&
                Number(
                  null === (r = e.collectionAlbums) || void 0 === r
                    ? void 0
                    : r.length,
                ) > 0
              );
            },
            get hasVibeTracks() {
              var s;
              return (
                Number(
                  null === (s = e.vibeTracks) || void 0 === s
                    ? void 0
                    : s.length,
                ) > 0
              );
            },
            get collectionEntitiesData() {
              var l, n;
              return null !==
                (n =
                  null === (l = e.collectionTracks) || void 0 === l
                    ? void 0
                    : l.map(h.E5)) && void 0 !== n
                ? n
                : [];
            },
            get vibeEntitiesData() {
              var o, d;
              return null !==
                (d =
                  null === (o = e.vibeTracks) || void 0 === o
                    ? void 0
                    : o.map(h.E5)) && void 0 !== d
                ? d
                : [];
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, d.ls)(function* (t) {
                let { artistId: a } = t,
                  { artistsResource: i, modelActionsLogger: r } = (0, d.dU)(e);
                if (e.loadingState !== S.Gu.PENDING)
                  try {
                    var s, l, n, o, c, m;
                    e.loadingState = S.Gu.PENDING;
                    let t = yield i.getFamiliarYou({
                      artistId: a,
                      waveTracksLimit: 100,
                      collectionTracksLimit: 100,
                      collectionAlbumsLimit: 20,
                    });
                    (e.vibeTracks = (0, d.pj)(
                      null === (l = t.wave) || void 0 === l
                        ? void 0
                        : null === (s = l.tracks) || void 0 === s
                          ? void 0
                          : s.map(h.Vt),
                    )),
                      (e.collectionTracks = (0, d.pj)(
                        null === (o = t.collection) || void 0 === o
                          ? void 0
                          : null === (n = o.tracks) || void 0 === n
                            ? void 0
                            : n.map(h.Vt),
                      )),
                      (e.collectionAlbums = (0, d.pj)(
                        null === (m = t.collection) || void 0 === m
                          ? void 0
                          : null === (c = m.albums) || void 0 === c
                            ? void 0
                            : c.map(x),
                      )),
                      (e.loadingState = S.Gu.RESOLVE);
                  } catch (t) {
                    r.error(t),
                      t instanceof u.du &&
                        (t.statusCode === u.CN.NOT_FOUND ||
                          t.statusCode === u.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = u.CN.NOT_FOUND),
                      e.loadingState !== S.Gu.IDLE &&
                        (e.loadingState = S.Gu.REJECT);
                  }
              }),
              reset() {
                (e.loadingState = S.Gu.IDLE),
                  (e.errorStatusCode = null),
                  (e.vibeTracks = null),
                  (e.collectionTracks = null);
              },
            };
            return t;
          });
      var P = a(63514);
      let I = d.V5.model("FamiliarInfo", {
        loadingState: d.V5.enumeration(Object.values(S.Gu)),
        vibeTrackCount: d.V5.optional(d.V5.number, 0),
        collectionTrackCount: d.V5.optional(d.V5.number, 0),
        collectionAlbumCount: d.V5.optional(d.V5.number, 0),
      })
        .views((e) => ({
          get isLoaded() {
            return e.loadingState === S.Gu.RESOLVE;
          },
          get hasTracks() {
            return (
              this.isLoaded &&
              (e.collectionTrackCount > 0 || e.vibeTrackCount > 0)
            );
          },
          get hasFamiliarInfo() {
            return (
              this.isLoaded && (this.hasTracks || e.collectionAlbumCount > 0)
            );
          },
          get tracksCount() {
            return e.collectionTrackCount + e.vibeTrackCount;
          },
          get hasCollectionEntities() {
            return (
              this.isLoaded &&
              (e.collectionTrackCount > 0 || e.collectionAlbumCount > 0)
            );
          },
          get hasVibeEntities() {
            return this.isLoaded && e.vibeTrackCount > 0;
          },
          get isFamiliarYouEnabled() {
            let { experiments: t } = (0, d.yj)(e);
            return t.checkExperiment(S.pe.WebNextFamiliarYou, "on");
          },
          href(e) {
            return e
              ? this.hasCollectionEntities
                ? "/artist/".concat(e, "/familiar?tab=").concat(P.g.COLLECTION)
                : this.hasVibeEntities
                  ? "/artist/".concat(e, "/familiar?tab=").concat(P.g.VIBE)
                  : "/artist/".concat(e, "/familiar")
              : "";
          },
        }))
        .actions((e) => {
          let t = {
            getData: (0, d.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: i, modelActionsLogger: r } = (0, d.dU)(e);
              if (e.loadingState !== S.Gu.PENDING && e.isFamiliarYouEnabled)
                try {
                  e.loadingState = S.Gu.PENDING;
                  let t = yield i.getFamiliarYouInfo({
                    artistId: a,
                    withWaveInfo: !0,
                    withCollectionInfo: !0,
                  });
                  t.collection &&
                    ((e.collectionTrackCount = t.collection.trackCount),
                    (e.collectionAlbumCount = t.collection.albumCount)),
                    t.wave && (e.vibeTrackCount = t.wave.trackCount),
                    e.loadingState !== S.Gu.IDLE &&
                      (e.loadingState = S.Gu.RESOLVE);
                } catch (t) {
                  r.error(t),
                    e.loadingState !== S.Gu.IDLE &&
                      (e.loadingState = S.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = S.Gu.IDLE),
                (e.vibeTrackCount = 0),
                (e.collectionTrackCount = 0),
                (e.collectionAlbumCount = 0);
            },
          };
          return t;
        });
      var L = a(82436);
      let k = d.V5.model("FullTracksList", {
          loadingState: d.V5.enumeration(Object.values(S.Gu)),
          errorStatusCode: d.V5.maybeNull(d.V5.number),
          ids: d.V5.maybeNull(d.V5.array(d.V5.string)),
          tracks: d.V5.optional(d.V5.map(h.le), {}),
        })
          .views((e) => ({
            getTrackByIndex(t) {
              if (!e.ids || !e.ids.length) return null;
              let a = e.ids[t];
              if (!a) return null;
              let i = e.tracks.get(a);
              return i || null;
            },
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === S.Gu.RESOLVE &&
                  (null === (t = e.ids) || void 0 === t ? void 0 : t.length) ===
                    0,
                i =
                  e.errorStatusCode === u.CN.NOT_FOUND ||
                  e.errorStatusCode === u.CN.BAD_REQUEST;
              return (e.loadingState === S.Gu.REJECT && i) || a;
            },
          }))
          .actions((e) => {
            let t = {
              getTracksIds: (0, d.ls)(function* (t) {
                let { artistId: a } = t,
                  { artistsResource: i, modelActionsLogger: r } = (0, d.dU)(e);
                try {
                  e.loadingState = S.Gu.PENDING;
                  let t = yield i.getArtistTrackIds({ artistId: a }),
                    { sonataState: r } = (0, d.yj)(e);
                  r.setUnloadedEntitiesData(t.map((e) => (0, L.RN)(e))),
                    (e.ids = (0, d.pj)(t)),
                    e.loadingState !== S.Gu.IDLE &&
                      (e.loadingState = S.Gu.RESOLVE);
                } catch (t) {
                  r.error(t),
                    t instanceof u.du &&
                      (t.statusCode === u.CN.NOT_FOUND ||
                        t.statusCode === u.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = u.CN.NOT_FOUND),
                    e.loadingState !== S.Gu.IDLE &&
                      (e.loadingState = S.Gu.REJECT);
                }
              }),
              getTracks: (0, d.ls)(function* (t) {
                let { trackIds: a } = t,
                  { tracksResource: i, modelActionsLogger: r } = (0, d.dU)(e);
                try {
                  let t = yield i.getTracksMeta({
                    trackIds: a,
                    withProgress: !0,
                  });
                  e.tracks.merge(
                    t.reduce((e, t) => ((e[t.id] = (0, h.Vt)(t)), e), {}),
                  );
                } catch (e) {
                  r.error(e);
                }
              }),
              reset() {
                let { sonataState: t } = (0, d.yj)(e);
                t.resetUnloadedEntitiesData(),
                  (e.loadingState = S.Gu.IDLE),
                  (e.ids = (0, d.pj)([])),
                  e.tracks.clear();
              },
            };
            return t;
          }),
        A = d.V5.model("ArtistPage", {
          loadingState: d.V5.enumeration(Object.values(S.Gu)),
          meta: d.V5.maybeNull(g.o9),
          popularTracks: d.V5.array(h.le),
          lastRelease: d.V5.maybeNull(m.ug),
          upcomingAlbum: d.V5.maybeNull(m.W9),
          concerts: d.V5.maybeNull(d.V5.array(_.Z)),
          similarArtists: d.V5.array(v.Go),
          playlists: d.V5.array(p.d2),
          errorStatusCode: d.V5.maybeNull(d.V5.number),
          deprecationTargetArtistId: d.V5.maybeNull(d.V5.number),
          albums: d.V5.array(m.ug),
          discography: d.V5.array(m.ug),
          compilations: d.V5.array(m.ug),
          familiarInfo: I,
          albumsSubpage: C,
          fullTracksListSubpage: k,
          concertsSubpage: E,
          familiarSubpage: N,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === S.Gu.IDLE || e.loadingState === S.Gu.PENDING
              );
            },
            get hasPopularTracks() {
              return (
                e.loadingState === S.Gu.IDLE ||
                e.loadingState === S.Gu.PENDING ||
                e.popularTracks.length > 0
              );
            },
            get hasAlbums() {
              return (
                e.loadingState === S.Gu.IDLE ||
                e.loadingState === S.Gu.PENDING ||
                e.albums.length > 0
              );
            },
            get hasDiscography() {
              return (
                e.loadingState === S.Gu.IDLE ||
                e.loadingState === S.Gu.PENDING ||
                e.discography.length > 0
              );
            },
            get hasCompilations() {
              return (
                e.loadingState === S.Gu.IDLE ||
                e.loadingState === S.Gu.PENDING ||
                e.compilations.length > 0
              );
            },
            get hasSimilarArtists() {
              return (
                e.loadingState === S.Gu.IDLE ||
                e.loadingState === S.Gu.PENDING ||
                e.similarArtists.length > 0
              );
            },
            get hasPlaylists() {
              return (
                e.loadingState === S.Gu.IDLE ||
                e.loadingState === S.Gu.PENDING ||
                (e.playlists && e.playlists.length > 0)
              );
            },
            get hasConcerts() {
              let { experiments: t } = (0, d.yj)(e);
              return (
                e.loadingState === S.Gu.IDLE ||
                e.loadingState === S.Gu.PENDING ||
                (e.concerts &&
                  e.concerts.length > 0 &&
                  t.checkExperiment(S.pe.WebNewBlockConcerts, "on"))
              );
            },
            get concertsLink() {
              var t, a;
              let { experiments: i } = (0, d.yj)(e);
              if (
                i.checkExperiment(S.pe.WebNewConcertsList, "on") &&
                (null === (t = e.meta) || void 0 === t
                  ? void 0
                  : t.artist.id) &&
                e.concerts &&
                e.concerts.length > 3
              )
                return "/artist/".concat(
                  null === (a = e.meta) || void 0 === a ? void 0 : a.artist.id,
                  "/concerts",
                );
              return null;
            },
            get isNotFound() {
              return (
                e.loadingState === S.Gu.REJECT &&
                e.errorStatusCode === u.CN.NOT_FOUND
              );
            },
            get isLoaded() {
              return e.loadingState === S.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === S.Gu.REJECT;
            },
            get hasErrorLoadingSimilarArtists() {
              let t =
                e.errorStatusCode === u.CN.NOT_FOUND ||
                e.errorStatusCode === u.CN.BAD_REQUEST;
              return this.isRejected && t;
            },
            get hasNoOneSimilarArtistOrNotFound() {
              return (
                this.hasErrorLoadingSimilarArtists ||
                (this.isLoaded && 0 === e.similarArtists.length)
              );
            },
            get hasReleaseBlock() {
              let { experiments: t } = (0, d.yj)(e),
                a = t.checkExperiment(S.pe.WebPresave, "on") && e.upcomingAlbum;
              return !!(this.isLoading || a || e.lastRelease);
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, d.ls)(function* (t) {
                let { artistId: a } = t,
                  { slides: i, experiments: r, disclaimer: s } = (0, d.yj)(e),
                  { artistsResource: l, modelActionsLogger: n } = (0, d.dU)(e),
                  o = r.checkExperiment(
                    S.pe.WebNextArtistDisableLastReleases,
                    "on",
                  ),
                  g = r.checkExperiment(
                    S.pe.WebNextArtistDisablePopularTracks,
                    "on",
                  ),
                  y = r.checkExperiment(
                    S.pe.WebNextArtistDisableSimilarArtists,
                    "on",
                  ),
                  f = r.checkExperiment(
                    S.pe.WebNextArtistDisablePopularAlbums,
                    "on",
                  ),
                  C = r.checkExperiment(
                    S.pe.WebNextArtistDisableDiscography,
                    "on",
                  ),
                  E = r.checkExperiment(
                    S.pe.WebNextArtistDisableCompilations,
                    "on",
                  ),
                  x = r.checkExperiment(
                    S.pe.WebNextArtistDisablePlaylists,
                    "on",
                  ),
                  N = r.checkExperiment(S.pe.WebNextLegalRejectArtist, "on");
                if (e.loadingState !== S.Gu.PENDING)
                  try {
                    var P, I;
                    e.loadingState = S.Gu.PENDING;
                    let {
                      popularTracks: t,
                      error: r,
                      artist: n,
                      stats: L,
                      albums: k,
                      playlists: A,
                      alsoAlbums: T,
                      similarArtists: j,
                      lastReleases: G,
                      concerts: D,
                      upcomingAlbum: R,
                      discography: V,
                    } = yield l.getBriefInfo({
                      artistId: a,
                      popularTracksCount: 5,
                      fetchPlaylistLikesCounts: !0,
                      discographyBlockEnabled: !0,
                    });
                    if (
                      "not-found" === r ||
                      (null == n ? void 0 : n.error) === "not-found"
                    ) {
                      (e.errorStatusCode = u.CN.NOT_FOUND),
                        (e.loadingState = S.Gu.REJECT);
                      return;
                    }
                    if (
                      null === (P = n.deprecation) || void 0 === P
                        ? void 0
                        : P.targetArtistId
                    ) {
                      (e.deprecationTargetArtistId =
                        n.deprecation.targetArtistId),
                        (e.loadingState = S.Gu.RESOLVE);
                      return;
                    }
                    e.meta = (0, d.pj)(b(n, L));
                    let O = (
                      null !== (I = n.disclaimers) && void 0 !== I ? I : []
                    ).includes(c.em.MODAL);
                    if (
                      (!n.available &&
                        O &&
                        N &&
                        (yield s.getArtistDisclaimer({ artistId: a })),
                      !o && G && G.length > 0)
                    ) {
                      let t = G[0];
                      t &&
                        k &&
                        k.length > 1 &&
                        (e.lastRelease = (0, d.pj)((0, m.ym)(t)));
                    }
                    R && (e.upcomingAlbum = (0, d.pj)((0, m.wq)(R))),
                      D && (e.concerts = (0, d.pj)(D.map(_.zj))),
                      !g &&
                        t &&
                        t.length > 0 &&
                        (e.popularTracks = (0, d.pj)(t.slice(0, 5).map(h.Vt))),
                      !y &&
                        j &&
                        j.length > 0 &&
                        (e.similarArtists = (0, d.pj)(j.slice(0, 9).map(v.d))),
                      !f &&
                        Number(null == k ? void 0 : k.length) > 0 &&
                        (e.albums = (0, d.pj)(
                          null == k ? void 0 : k.map(m.ym),
                        )),
                      !C &&
                        Number(null == V ? void 0 : V.length) > 0 &&
                        (e.discography = (0, d.pj)(
                          null == V ? void 0 : V.map(m.ym).slice(0, 9),
                        )),
                      !E &&
                        Number(null == T ? void 0 : T.length) > 0 &&
                        (e.compilations = (0, d.pj)(
                          null == T ? void 0 : T.map(m.ym).slice(0, 9),
                        )),
                      !x &&
                        A &&
                        A.length > 0 &&
                        (e.playlists = (0, d.pj)(A.map(p.Q9).slice(0, 9))),
                      i.resetArtist(),
                      e.loadingState !== S.Gu.IDLE &&
                        (e.loadingState = S.Gu.RESOLVE);
                  } catch (t) {
                    n.error(t),
                      t instanceof u.du &&
                        (t.statusCode === u.CN.NOT_FOUND ||
                          t.statusCode === u.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = u.CN.NOT_FOUND),
                      e.loadingState !== S.Gu.IDLE &&
                        (e.loadingState = S.Gu.REJECT);
                  }
              }),
              getSimilarArtists: (0, d.ls)(function* (t) {
                let { artistId: a } = t,
                  { artistsResource: i, modelActionsLogger: r } = (0, d.dU)(e);
                try {
                  e.loadingState = S.Gu.PENDING;
                  let t = yield i.getSimilarArtists({ artistId: a });
                  (e.similarArtists = (0, d.pj)(t.similarArtists.map(v.d))),
                    e.loadingState !== S.Gu.IDLE &&
                      (e.loadingState = S.Gu.RESOLVE);
                } catch (t) {
                  r.error(t),
                    t instanceof u.du &&
                      (t.statusCode === u.CN.NOT_FOUND ||
                        t.statusCode === u.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = u.CN.NOT_FOUND),
                    e.loadingState !== S.Gu.IDLE &&
                      (e.loadingState = S.Gu.REJECT);
                }
              }),
              reset() {
                (e.loadingState = S.Gu.IDLE),
                  (e.meta = null),
                  (e.errorStatusCode = null),
                  (e.deprecationTargetArtistId = null),
                  (e.lastRelease = null),
                  (e.upcomingAlbum = null),
                  (e.concerts = null),
                  (e.popularTracks = (0, d.pj)([])),
                  (e.similarArtists = (0, d.pj)([])),
                  (e.playlists = (0, d.pj)([])),
                  (e.albums = (0, d.pj)([])),
                  (e.discography = (0, d.pj)([])),
                  (e.compilations = (0, d.pj)([]));
              },
            };
            return t;
          });
      var T = a(45304);
    },
    85564: function (e, t, a) {
      "use strict";
      var i, r;
      a.d(t, {
        M: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).DISCOGRAPHY = "discography"),
        (r.ALBUMS = "albums"),
        (r.COMPILATIONS = "compilations");
    },
    63514: function (e, t, a) {
      "use strict";
      var i, r;
      a.d(t, {
        g: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).COLLECTION = "collection"),
        (r.VIBE = "vibe");
    },
    4144: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistAlbumsPage: function () {
            return y;
          },
        });
      var i = a(8759),
        r = a(35338),
        s = a(33423),
        l = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(1918),
        u = a(70579),
        c = a(96911),
        m = a(81546),
        g = a(13236),
        p = a(7042),
        h = a(5674),
        v = a(44285),
        _ = a(85564),
        S = a(28674),
        b = a.n(S);
      let y = (0, s.Pi)((e) => {
        var t, a, s, S, y, f;
        let { artistId: C, variant: E } = e,
          { artist: x, disclaimer: N } = (0, h.oR)(),
          { formatMessage: P } = (0, o.Z)(),
          [I, L] = (0, g.zU)(),
          k = (0, h.k6)();
        if (C && x.albumsSubpage.loadingState === h.Gu.IDLE) {
          x.albumsSubpage.setVariant(E);
          let e = Promise.allSettled([
            x.getData({ artistId: C }),
            x.albumsSubpage.getData({
              artistId: C,
              page: 0,
              pageSize: 20,
              sort: { sortBy: "year" },
            }),
          ]);
          (0, n.use)(e);
        }
        let A = (0, n.useCallback)(
            (e) => {
              C &&
                x.albumsSubpage.getData({
                  artistId: C,
                  page: e,
                  pageSize: 20,
                  sort: { sortBy: "year" },
                });
            },
            [x.albumsSubpage, C],
          ),
          T = (0, m.v2)({
            artist: null === (t = x.meta) || void 0 === t ? void 0 : t.artist,
            shouldHistoryBack: !0,
          });
        (0, n.useEffect)(() => {
          T();
        }, [T]),
          (0, n.useEffect)(
            () => () => {
              x.reset(), x.albumsSubpage.reset();
            },
            [x, x.albumsSubpage],
          ),
          x.albumsSubpage.isNotFound && (0, l.notFound)(),
          (0, h.NO)(x.albumsSubpage.loadingState === h.Gu.RESOLVE);
        let j = (0, n.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(v.$_, { className: b().footer }),
            }),
            [],
          ),
          G = (0, n.useMemo)(() => {
            switch (E) {
              case _.M.DISCOGRAPHY:
                return P({ id: "entity-names.studio-albums" });
              case _.M.COMPILATIONS:
                return P({ id: "entity-names.compilations" });
              default:
                return P({ id: "entity-names.albums" });
            }
          }, [P, E]),
          D = (0, n.useMemo)(() => {
            switch (E) {
              case _.M.DISCOGRAPHY:
                return P({ id: "entity-names.artist-studio-albums-list" });
              case _.M.COMPILATIONS:
                return P({ id: "entity-names.artist-compilations-list" });
              default:
                return P({ id: "entity-names.artist-albums-list" });
            }
          }, [P, E]),
          R = (0, n.useMemo)(() => {
            switch (E) {
              case _.M.DISCOGRAPHY:
                return h.Rh.ARTIST_DISCOGRAPHY;
              case _.M.COMPILATIONS:
                return h.Rh.ARTIST_COMPILATIONS;
              default:
                return h.Rh.ARTIST_ALBUMS;
            }
          }, [E]);
        return (
          null === (a = x.meta) || void 0 === a
            ? void 0
            : a.artist.isLegalRejected
        )
          ? N.isRejected
            ? (0, i.jsx)(u.D, {})
            : (0, i.jsx)(p.em, { disclaimer: N })
          : x.albumsSubpage.loadingState !== h.Gu.REJECT ||
              x.albumsSubpage.isNotFound
            ? (0, i.jsx)(h.Lh, {
                pageId: R,
                children: (0, i.jsx)(g.I7, {
                  scrollElement: I,
                  outerTitle: G,
                  children: (0, i.jsxs)("div", {
                    className: b().root,
                    children: [
                      (0, i.jsx)(v.h4, {
                        variant: "text",
                        withForwardControl: !1,
                        withBackwardControl: k.canBack,
                        children: (0, i.jsx)(d.Heading, {
                          variant: "h2",
                          weight: "bold",
                          size: "xl",
                          lineClamp: 1,
                          children: G,
                        }),
                      }),
                      (0, i.jsx)(v.Wv, {
                        className: (0, r.W)(b().scrollContainer, b().important),
                        listClassName: b().content,
                        itemClassName: b().item,
                        customComponents: j,
                        itemContentCallback: (e) => {
                          var t, a;
                          let r =
                              null === (a = x.albumsSubpage) || void 0 === a
                                ? void 0
                                : null === (t = a.items) || void 0 === t
                                  ? void 0
                                  : t[e],
                            s = P(
                              { id: "loading-messages.entity-is-loading" },
                              {
                                entityName: P({ id: "entity-names.playlist" }),
                              },
                            );
                          return r
                            ? (0, i.jsx)(
                                c.rf,
                                { album: r, contentLinesCount: 3 },
                                r.id,
                              )
                            : (0, i.jsx)(v.hi, { "aria-label": s });
                        },
                        totalCount:
                          null !==
                            (y =
                              null === (S = x.albumsSubpage) || void 0 === S
                                ? void 0
                                : null === (s = S.pager) || void 0 === s
                                  ? void 0
                                  : s.total) && void 0 !== y
                            ? y
                            : 0,
                        onGetDataByPage: A,
                        pageSize: 20,
                        totalRequests:
                          null !== (f = x.albumsSubpage.requests) &&
                          void 0 !== f
                            ? f
                            : 0,
                        handleRef: L,
                        context: { listAriaLabel: D },
                      }),
                    ],
                  }),
                }),
              })
            : (0, i.jsx)(u.D, {});
      });
    },
    66649: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistConcertsPage: function () {
            return x;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(11769),
        l = a(99616),
        n = a(65244),
        o = a(2814),
        d = a(42503),
        u = a(71716),
        c = a(1918),
        m = a(70579),
        g = a(81546),
        p = a(13236),
        h = a(55238),
        v = a(7042),
        _ = a(5674),
        S = a(44285),
        b = a(82834);
      let y = (e) => {
          let { artistId: t, viewUuid: a } = e,
            i = (0, _.z$)(),
            { hash: r } = (0, _.RQ)(),
            s = (0, _.wL)();
          return (0, l.useCallback)(() => {
            if (!i || !t) return;
            let e = (0, _.KO)({
              params: { hash: r, artistId: t, viewUuid: a },
              logger: s,
              context: y.name,
            });
            e && (0, b.A7)(i.evgenInstance, e);
          }, [i, t, r, s, a]);
        },
        f = (e) => {
          let { artistId: t, viewUuid: a } = e,
            i = (0, _.z$)(),
            { hash: r } = (0, _.RQ)(),
            s = (0, _.wL)();
          return (0, l.useCallback)(() => {
            if (!i || !t) return;
            let e = (0, _.KO)({
              params: { hash: r, artistId: t, viewUuid: a },
              logger: s,
              context: f.name,
            });
            e && (0, b.is)(i.evgenInstance, e);
          }, [i, t, r, s, a]);
        };
      var C = a(8023),
        E = a.n(C);
      let x = (0, r.Pi)((e) => {
        var t, a;
        let { artistId: r } = e,
          { artist: b, experiments: C, disclaimer: x } = (0, _.oR)(),
          { formatMessage: N } = (0, n.Z)(),
          [P, I] = (0, p.zU)(),
          L = (0, _.k6)(),
          k = (0, l.useRef)(String((0, d.Z)())),
          A = f({ artistId: r, viewUuid: k.current }),
          T = y({ artistId: r, viewUuid: k.current });
        if (
          ((0, l.useEffect)(
            () => (
              A(),
              () => {
                T();
              }
            ),
            [T, A],
          ),
          r && b.concertsSubpage.loadingState === _.Gu.IDLE)
        ) {
          let e = Promise.allSettled([
            b.getData({ artistId: r }),
            b.concertsSubpage.getData({ artistId: r }),
          ]);
          (0, l.use)(e);
        }
        let j = (0, g.v2)({
          artist: null === (t = b.meta) || void 0 === t ? void 0 : t.artist,
          shouldHistoryBack: !0,
        });
        (0, l.useEffect)(() => {
          j();
        }, [j]),
          (0, l.useEffect)(
            () => () => {
              b.reset(), b.concertsSubpage.reset();
            },
            [b],
          ),
          (0, _.NO)(b.concertsSubpage.loadingState === _.Gu.RESOLVE),
          (b.concertsSubpage.isNotFound ||
            !C.checkExperiment(_.pe.WebNewConcertsList, "on")) &&
            (0, s.notFound)();
        let G = (0, l.useMemo)(() => {
          if (b.concertsSubpage.isLoading) return (0, S.M4)(10);
          if (r) {
            var e;
            return null === (e = b.concertsSubpage.concerts) || void 0 === e
              ? void 0
              : e.map((e, t) =>
                  (0, i.jsx)(
                    _.nZ,
                    {
                      objectId: String(e.id),
                      objectPos: t + 1,
                      children: (0, i.jsx)(h.kb, {
                        artistId: r,
                        concert: e,
                        viewUuid: k.current,
                      }),
                    },
                    e.id,
                  ),
                );
          }
        }, [b.concertsSubpage.concerts, b.concertsSubpage.isLoading, r, k]);
        return (
          null === (a = b.meta) || void 0 === a
            ? void 0
            : a.artist.isLegalRejected
        )
          ? x.isRejected
            ? (0, i.jsx)(m.D, {})
            : (0, i.jsx)(v.em, { disclaimer: x })
          : (0, i.jsx)(_.Lh, {
              pageId: _.Rh.ARTIST_CONCERTS,
              children: (0, i.jsx)(_.e4, {
                children: (0, i.jsxs)(p.I7, {
                  scrollElement: P,
                  outerTitle: N({ id: "entity-names.concerts" }),
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: L.canBack,
                      children: (0, i.jsx)(c.Heading, {
                        id: "concerts-header",
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: (0, i.jsx)(o.Z, {
                          id: "entity-names.concerts",
                        }),
                      }),
                    }),
                    (0, i.jsx)(u.t, {
                      ref: I,
                      className: E().root,
                      containerClassName: E().scrollableContainer,
                      children: (0, i.jsxs)("div", {
                        className: E().container,
                        children: [
                          (0, i.jsx)("div", {
                            className: E().content,
                            "aria-labelledby": "concerts-header",
                            tabIndex: 0,
                            children: G,
                          }),
                          (0, i.jsx)(S.$_, { className: E().footer }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            });
      });
    },
    45304: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistFamiliarPage: function () {
            return W;
          },
        });
      var i,
        r,
        s = a(8759),
        l = a(33423),
        n = a(11769),
        o = a(99616),
        d = a(26265),
        u = a(70579),
        c = a(81546),
        m = a(13236),
        g = a(7042),
        p = a(5674),
        h = a(63514);
      ((i = r || (r = {}))[(i.COLLECTION = 0)] = "COLLECTION"),
        (i[(i.VIBE = 1)] = "VIBE");
      var v = a(50871),
        _ = a.n(v),
        S = a(35338),
        b = a(65244),
        y = a(57413),
        f = a(71716),
        C = a(12670),
        E = a(96911),
        x = a(95539),
        N = a(44285),
        P = a(2814),
        I = a(1918),
        L = a(42769);
      let k = (e) => {
        let t = (0, p.m5)();
        return (0, o.useCallback)(
          (a) => {
            var i;
            null === (i = e.onTabChange) || void 0 === i || i.call(e, a),
              t("".concat(window.location.pathname, "?tab=").concat(a));
          },
          [t, e],
        );
      };
      var A = a(81920),
        T = a.n(A);
      let j = () =>
          (0, s.jsxs)("div", {
            className: T().tabsShimmer,
            children: [
              (0, s.jsx)(C.Shimmer, { className: T().tabShimmer }),
              (0, s.jsx)(C.Shimmer, { className: T().tabShimmer }),
            ],
          }),
        G = (0, l.Pi)((e) => {
          let { tabsState: t, tabElementId: a } = e,
            { artist: i } = (0, p.oR)(),
            { formatMessage: l } = (0, b.Z)(),
            n = (0, p.k6)(),
            { isScrolling: d } = (0, o.useContext)(N.pI),
            u = k(t);
          return (0, s.jsxs)("header", {
            className: T().root,
            "aria-hidden": d,
            children: [
              (0, s.jsxs)("div", {
                className: T().container,
                children: [
                  n.canBack &&
                    (0, s.jsx)(L.n, {
                      withForwardControl: !1,
                      withBackwardControl: n.canBack,
                    }),
                  (0, s.jsx)(I.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    className: T().title,
                    children: (0, s.jsx)(P.Z, { id: "page.familiar-you" }),
                  }),
                ],
              }),
              (0, s.jsxs)(N.no, {
                isShimmerVisible: i.familiarSubpage.isLoading,
                shimmer: (0, s.jsx)(j, {}),
                className: T().tabs,
                elementId: a,
                onTabChange: u,
                ...t,
                children: [
                  (0, s.jsx)(N.OK, {
                    className: T().tab,
                    value: r.COLLECTION,
                    title: l({ id: "page.familiar-collection" }),
                    "aria-hidden": d,
                    tabIndex: d ? -1 : 0,
                  }),
                  (0, s.jsx)(N.OK, {
                    className: T().tab,
                    value: r.VIBE,
                    title: l({ id: "page.familiar-vibe" }),
                    "aria-hidden": d,
                    tabIndex: d ? -1 : 0,
                  }),
                ],
              }),
            ],
          });
        });
      var D = a(67807),
        R = a.n(D);
      let V = (0, l.Pi)((e) => {
          var t;
          let { forwardRef: a, tabsState: i, tabElementId: l, artistId: n } = e,
            { artist: u } = (0, p.oR)(),
            { formatMessage: c } = (0, b.Z)(),
            m = (0, p.x5)(),
            g = (0, o.useCallback)(
              (e, t) => ({
                contextData: {
                  type: y.Ak.Various,
                  meta: { id: String(n) },
                  from: m,
                  overrideAutoflowSeeds: ["artist:".concat(n)],
                  overrideContextType: y.Zc.Artist,
                },
                queueParams: { index: t },
                loadContextMeta: !1,
                entitiesData: u.familiarSubpage.collectionEntitiesData,
              }),
              [u.familiarSubpage.collectionEntitiesData, n, m],
            ),
            h = (0, o.useMemo)(() => {
              var e;
              return (0, s.jsx)(N.RS, {
                isShimmerVisible: u.familiarSubpage.isLoading,
                isShimmerActive: !0,
                variant: p.Lx.PLAYLIST,
                shimmersCount: 10,
                className: (0, S.W)(R().block, R().tracksBlock),
                children:
                  null === (e = u.familiarSubpage.collectionTracks) ||
                  void 0 === e
                    ? void 0
                    : e.map((e, t) =>
                        (0, s.jsx)(
                          x.O2,
                          { track: e, playContextParams: g(e, t) },
                          e.id,
                        ),
                      ),
              });
            }, [
              u.familiarSubpage.collectionTracks,
              u.familiarSubpage.isLoading,
              g,
            ]),
            v = (0, o.useMemo)(
              () =>
                u.familiarSubpage.shouldShowTitleBlocks
                  ? u.familiarSubpage.isLoading
                    ? (0, s.jsx)("div", {
                        className: (0, S.W)(R().block, R().blockHeader),
                        children: (0, s.jsx)(C.Shimmer, {
                          isActive: u.familiarSubpage.isLoading,
                          className: R().shimmerTitle,
                          radius: "l",
                        }),
                      })
                    : (0, s.jsx)(N.ti, {
                        className: (0, S.W)(R().block, R().blockHeader),
                        title: c({ id: "entity-names.tracks" }),
                      })
                  : void 0,
              [
                u.familiarSubpage.isLoading,
                u.familiarSubpage.shouldShowTitleBlocks,
                c,
              ],
            ),
            _ = (0, o.useMemo)(() => {
              if (u.familiarSubpage.shouldShowTitleBlocks)
                return c({ id: "entity-names.albums" });
            }, [u.familiarSubpage.shouldShowTitleBlocks, c]);
          return (0, s.jsxs)(f.t, {
            className: R().root,
            containerClassName: (0, S.W)(R().scrollContainer, R().important),
            ref: a,
            children: [
              (0, s.jsx)(G, { tabsState: i, tabElementId: l }),
              (0, s.jsxs)(d.TabPanel, {
                value: i.value,
                name: r.COLLECTION,
                elementId: l,
                className: R().content,
                children: [
                  (0, s.jsxs)("section", { children: [v, h] }),
                  (0, s.jsx)(N.HY, {
                    isShimmerVisible: u.familiarSubpage.isLoading,
                    isShimmerActive: !0,
                    headerClassName: R().blockHeader,
                    containerClassName: R().block,
                    title: _,
                    showHeaderShimmer: u.familiarSubpage.shouldShowTitleBlocks,
                    children:
                      null === (t = u.familiarSubpage.collectionAlbums) ||
                      void 0 === t
                        ? void 0
                        : t.map((e) =>
                            (0, s.jsx)(
                              E.rf,
                              { album: e, contentLinesCount: 3 },
                              e.id,
                            ),
                          ),
                  }),
                ],
              }),
              (0, s.jsx)(N.$_, { className: R().footer }),
            ],
          });
        }),
        O = (0, l.Pi)((e) => {
          let { forwardRef: t, tabsState: a, tabElementId: i, artistId: l } = e,
            { artist: n } = (0, p.oR)(),
            u = (0, p.x5)(),
            c = (0, o.useCallback)(
              (e, t) => ({
                contextData: {
                  type: y.Ak.Various,
                  meta: { id: String(l) },
                  from: u,
                  overrideAutoflowSeeds: ["artist:".concat(l)],
                  overrideContextType: y.Zc.Artist,
                },
                queueParams: { index: t },
                loadContextMeta: !1,
                entitiesData: n.familiarSubpage.vibeEntitiesData,
              }),
              [n.familiarSubpage.vibeEntitiesData, l, u],
            ),
            m = (0, o.useMemo)(() => {
              var e;
              return (0, s.jsx)(N.RS, {
                isShimmerVisible: n.familiarSubpage.isLoading,
                isShimmerActive: !0,
                variant: p.Lx.PLAYLIST,
                shimmersCount: 10,
                className: (0, S.W)(R().block, R().tracksBlock),
                children:
                  null === (e = n.familiarSubpage.vibeTracks) || void 0 === e
                    ? void 0
                    : e.map((e, t) =>
                        (0, s.jsx)(
                          x.O2,
                          { track: e, playContextParams: c(e, t) },
                          e.id,
                        ),
                      ),
              });
            }, [n.familiarSubpage.isLoading, n.familiarSubpage.vibeTracks, c]);
          return (0, s.jsxs)(f.t, {
            className: R().root,
            containerClassName: (0, S.W)(R().scrollContainer, R().important),
            ref: t,
            children: [
              (0, s.jsx)(G, { tabsState: a, tabElementId: i }),
              (0, s.jsx)(d.TabPanel, {
                value: a.value,
                name: r.VIBE,
                elementId: i,
                className: R().content,
                children: m,
              }),
              (0, s.jsx)(N.$_, { className: R().footer }),
            ],
          });
        });
      var w = a(14581),
        B = a(38462),
        M = a.n(B);
      let U = (e) => {
          let { tabsState: t, tabElementId: a } = e,
            i = (0, o.useMemo)(() => {
              switch (t.value) {
                case r.COLLECTION:
                  return (0, s.jsx)(P.Z, {
                    id: "error-messages.empty-artist-familiar-collection-title",
                  });
                case r.VIBE:
                  return (0, s.jsx)(P.Z, {
                    id: "error-messages.empty-artist-familiar-vibe-title",
                  });
              }
            }, [t.value]);
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(G, { tabsState: t, tabElementId: a }),
              (0, s.jsxs)("div", {
                className: M().root,
                children: [
                  (0, s.jsx)(w.J, {
                    className: M().icon,
                    variant: "attention",
                  }),
                  (0, s.jsx)(I.Heading, {
                    className: M().title,
                    variant: "h3",
                    size: "xs",
                    children: i,
                  }),
                ],
              }),
            ],
          });
        },
        F = (0, l.Pi)((e) => {
          let { tabsState: t, tabElementId: a } = e,
            { artist: i } = (0, p.oR)(),
            { formatMessage: l } = (0, b.Z)(),
            { isScrolling: n } = (0, o.useContext)(N.pI),
            d = (0, p.k6)(),
            u = k(t);
          return (0, s.jsx)(N.h4, {
            variant: "composite",
            staticClassName: (0, S.W)(T().staticHeader, T().important),
            "aria-hidden": !n,
            stickyClassName: (0, S.W)(T().stickyHeader, T().important),
            stickyChild: (0, s.jsxs)("div", {
              className: T().container,
              children: [
                d.canBack &&
                  (0, s.jsx)(L.n, {
                    withForwardControl: !1,
                    withBackwardControl: d.canBack,
                    buttonSize: "xs",
                  }),
                (0, s.jsxs)(N.no, {
                  isShimmerVisible: i.familiarSubpage.isLoading,
                  shimmer: (0, s.jsx)(j, {}),
                  className: T().tabs,
                  elementId: a,
                  onTabChange: u,
                  ...t,
                  children: [
                    (0, s.jsx)(N.OK, {
                      className: T().tab,
                      value: r.COLLECTION,
                      title: l({ id: "page.familiar-collection" }),
                      "aria-hidden": !n,
                      tabIndex: n ? 0 : -1,
                    }),
                    (0, s.jsx)(N.OK, {
                      className: T().tab,
                      value: r.VIBE,
                      title: l({ id: "page.familiar-vibe" }),
                      "aria-hidden": !n,
                      tabIndex: n ? 0 : -1,
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        W = (0, l.Pi)((e) => {
          var t, a;
          let { artistId: i } = e,
            l = (0, n.useSearchParams)(),
            { artist: v, experiments: S, disclaimer: b } = (0, p.oR)(),
            [y, f] = (0, m.zU)(),
            C = (0, o.useId)(),
            E = (0, o.useMemo)(() => {
              let e = l.get(p.wx.TAB);
              switch (e) {
                case h.g.COLLECTION:
                  break;
                case h.g.VIBE:
                  return r.VIBE;
              }
              return r.COLLECTION;
            }, [l]),
            x = (0, d.useTabsState)(E);
          i &&
            v.familiarSubpage.loadingState === p.Gu.IDLE &&
            (0, o.use)(v.familiarSubpage.getData({ artistId: i }));
          let N = (0, c.v2)({
            artist: null === (t = v.meta) || void 0 === t ? void 0 : t.artist,
            shouldHistoryBack: !0,
          });
          (0, o.useEffect)(() => {
            N();
          }, [N]),
            (0, o.useEffect)(
              () => () => {
                v.familiarSubpage.reset();
              },
              [v],
            ),
            (0, p.NO)(v.familiarSubpage.loadingState === p.Gu.RESOLVE),
            (v.familiarSubpage.isNotFound ||
              !S.checkExperiment(p.pe.WebNextFamiliarYou, "on")) &&
              (0, n.notFound)();
          let P = (0, o.useMemo)(() => {
            switch (x.value) {
              case r.COLLECTION:
                if (
                  v.familiarSubpage.isLoaded &&
                  !v.familiarSubpage.hasCollectionEntities
                )
                  return (0, s.jsx)(U, { tabsState: x, tabElementId: C });
                return (0, s.jsx)(V, {
                  tabsState: x,
                  forwardRef: f,
                  tabElementId: C,
                  artistId: i,
                });
              case r.VIBE:
                if (
                  v.familiarSubpage.isLoaded &&
                  !v.familiarSubpage.hasVibeTracks
                )
                  return (0, s.jsx)(U, { tabsState: x, tabElementId: C });
                return (0, s.jsx)(O, {
                  tabsState: x,
                  forwardRef: f,
                  tabElementId: C,
                  artistId: i,
                });
            }
          }, [
            v.familiarSubpage.hasCollectionEntities,
            v.familiarSubpage.hasVibeTracks,
            v.familiarSubpage.isLoaded,
            i,
            f,
            C,
            x,
          ]);
          return v.familiarSubpage.isRejected && !v.familiarSubpage.isNotFound
            ? (0, s.jsx)(u.D, {})
            : (
                  null === (a = v.meta) || void 0 === a
                    ? void 0
                    : a.artist.isLegalRejected
                )
              ? b.isRejected
                ? (0, s.jsx)(u.D, {})
                : (0, s.jsx)(g.em, { disclaimer: b })
              : (0, s.jsx)(p.Lh, {
                  pageId: p.Rh.FAMILIAR_YOU,
                  children: (0, s.jsx)(m.I7, {
                    scrollElement: y,
                    headerThreshold: 148,
                    children: (0, s.jsxs)("div", {
                      className: _().root,
                      children: [
                        (0, s.jsx)(F, { tabElementId: C, tabsState: x }),
                        (0, s.jsx)(p.J, {
                          blockIdForFrom: p.aU.DEFAULT,
                          children: P,
                        }),
                      ],
                    }),
                  }),
                });
        });
    },
    64285: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistNotFoundPage: function () {
            return o;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(99616),
        l = a(2365),
        n = a(5674);
      let o = (0, r.Pi)(() => {
        let { artist: e } = (0, n.oR)();
        return (
          (0, s.useEffect)(
            () => () => {
              e.reset();
            },
            [e],
          ),
          (0, i.jsx)(l.T, {})
        );
      });
    },
    91399: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistPage: function () {
            return G;
          },
        });
      var i,
        r,
        s = a(8759),
        l = a(35338),
        n = a(33423),
        o = a(11769),
        d = a(99616),
        u = a(65244),
        c = a(82834),
        m = a(454),
        g = a(57413),
        p = a(27287),
        h = a(71716),
        v = a(12670),
        _ = a(48157),
        S = a(70579),
        b = a(96911),
        y = a(81546),
        f = a(13236),
        C = a(20210),
        E = a(95539),
        x = a(55238),
        N = a(7042),
        P = a(3515),
        I = a(5674),
        L = a(44285);
      let k = (e) => {
        let { blockId: t, scrollRef: a, headerRef: i } = e,
          r = document.getElementById(t);
        if (r && a) {
          var s;
          let e = r.getBoundingClientRect().top,
            t = (
              null === (s = i.current) || void 0 === s ? void 0 : s.offsetHeight
            )
              ? e - i.current.offsetHeight
              : e;
          a.scrollTo({ top: t - 10, behavior: "smooth" });
        }
      };
      ((i = r || (r = {})).UPCOMING_RELEASE = "upcoming_release"),
        (i.TRACKS = "tracks"),
        (i.FAMILIAR = "familiar"),
        (i.CONCERTS = "concerts");
      var A = a(41550),
        T = a.n(A);
      let j = (e) => {
          let {
              withReleaseBlock: t,
              children: a,
              isLoading: i,
              viewAllActionLink: r,
              ...n
            } = e,
            { formatMessage: o } = (0, u.Z)();
          return (0, s.jsxs)("div", {
            className: (0, l.W)(T().popularTracksBlock, {
              [T().popularTracksBlock_withReleaseBlock]: t,
            }),
            ...n,
            ...(0, m.BA)(m.Br.artist.POPULAR_TRACKS),
            children: [
              (0, s.jsx)(L.ti, {
                className: T().popularTracksBlockHeader,
                title: o({ id: "entity-names.popular-tracks" }),
                viewAllActionLink: r,
              }),
              (0, s.jsx)(L.RS, {
                isShimmerVisible: i,
                isShimmerActive: !0,
                className: T().popularTracksBlockList,
                variant: I.Lx.PLAYLIST,
                children: a,
              }),
            ],
          });
        },
        G = (0, n.Pi)((e) => {
          var t, a, i, n, A, G, D, R, V, O;
          let { artistId: w } = e,
            B = (0, I.x5)({ pageId: I.Rh.ARTIST, blockId: I.aU.ARTIST }),
            { notify: M } = (0, I.d$)(),
            { artist: U, experiments: F, disclaimer: W } = (0, I.oR)(),
            { formatMessage: H } = (0, u.Z)(),
            z = (0, d.useRef)(0),
            { href: q } = (0, I.zB)(
              "/artist/".concat(U.deprecationTargetArtistId),
            ),
            { ref: Z, offsetY: J } = (0, p.e)(),
            [K, Q] = (0, f.zU)(),
            Y = (0, d.useRef)(null),
            X = (0, d.useMemo)(() => {
              var e, t;
              return (0, I.XG)(
                null == U
                  ? void 0
                  : null === (t = U.meta) || void 0 === t
                    ? void 0
                    : null === (e = t.artist) || void 0 === e
                      ? void 0
                      : e.averageColor,
              );
            }, [
              null == U
                ? void 0
                : null === (a = U.meta) || void 0 === a
                  ? void 0
                  : null === (t = a.artist) || void 0 === t
                    ? void 0
                    : t.averageColor,
            ]),
            [$, ee] = (0, f.at)(X, J),
            et = (0, o.useSearchParams)();
          (0, d.useEffect)(() => {
            let e = et.get(I.wx.BLOCK);
            e &&
              U.isLoaded &&
              U.familiarInfo.isLoaded &&
              k({ blockId: e, scrollRef: K, headerRef: Y });
          }, [U.isLoaded, U.familiarInfo.isLoaded, K, et]);
          let ea = (0, y.v2)({
            artist: null === (i = U.meta) || void 0 === i ? void 0 : i.artist,
            shouldHistoryBack: !0,
          });
          (0, d.useEffect)(() => {
            var e;
            (null === (e = U.meta) || void 0 === e
              ? void 0
              : e.artist.isUnsafeLegal) && ea();
          }, [
            null === (n = U.meta) || void 0 === n
              ? void 0
              : n.artist.isUnsafeLegal,
            ea,
          ]),
            (0, d.useEffect)(
              () => () => {
                U.reset(), U.familiarInfo.reset(), (z.current = 0);
              },
              [U, w],
            ),
            U.deprecationTargetArtistId && (0, o.redirect)(q);
          let ei = (0, d.useMemo)(
            () => () => {
              (U.isRejected || (!U.meta && !U.isLoading)) &&
                z &&
                !(z.current > 0) &&
                (M(
                  (0, s.jsx)(L.Q, {
                    error: H({
                      id: "artist-errors.error-during-loading-artist",
                    }),
                  }),
                  { containerId: I.W$.ERROR },
                ),
                z.current++);
            },
            [U.isRejected, U.meta, U.isLoading, M, H],
          );
          if ((ei(), w && U.loadingState === I.Gu.IDLE)) {
            let e = Promise.allSettled([
              U.getData({ artistId: w }),
              U.familiarInfo.getData({ artistId: w }),
            ]);
            (0, d.use)(e);
          }
          if (
            ((0, I.NO)(U.loadingState === I.Gu.RESOLVE),
            U.isNotFound && (0, o.notFound)(),
            U.loadingState === I.Gu.REJECT && !U.isNotFound)
          )
            return (0, s.jsx)(S.D, {});
          let er = (e) => ({
              contextData: {
                type: g.Ak.Artist,
                meta: { id: Number(w) },
                from: B,
              },
              queueParams: {
                index: U.popularTracks.findIndex((t) => t.id === e),
              },
              loadContextMeta: !0,
            }),
            es = (0, d.useMemo)(
              () =>
                U.isLoading || !U.meta
                  ? (0, s.jsx)(_.KC, {
                      className: T().header,
                      coverRadius: "round",
                    })
                  : (0, s.jsx)(_.f3, {
                      className: T().header,
                      artistMeta: U.meta,
                      ref: Z,
                    }),
              [U.isLoading, U.meta, Z],
            ),
            el = (0, d.useMemo)(
              () =>
                U.isLoading
                  ? (0, s.jsxs)("div", {
                      className: T().releaseBlock,
                      children: [
                        (0, s.jsx)(v.Shimmer, {
                          radius: "l",
                          className: T().releaseBlockHeaderShimmer,
                        }),
                        (0, s.jsx)(L.hi, {
                          className: (0, l.W)(
                            T().releaseBlockCard,
                            T().important,
                          ),
                        }),
                      ],
                    })
                  : U.upcomingAlbum && F.checkExperiment(I.pe.WebPresave, "on")
                    ? (0, s.jsxs)("div", {
                        className: T().releaseBlock,
                        id: r.UPCOMING_RELEASE,
                        children: [
                          (0, s.jsx)(L.ti, {
                            className: T().releaseBlockHeader,
                            title: H({ id: "entity-names.upcoming-album" }),
                          }),
                          (0, s.jsx)(b.vK, {
                            className: (0, l.W)(
                              T().releaseBlockCard,
                              T().important,
                            ),
                            upcomingAlbum: U.upcomingAlbum,
                          }),
                        ],
                      })
                    : U.lastRelease
                      ? (0, s.jsxs)("div", {
                          className: T().releaseBlock,
                          children: [
                            (0, s.jsx)(L.ti, {
                              className: T().releaseBlockHeader,
                              title: H({ id: "entity-names.recently-release" }),
                            }),
                            (0, s.jsx)(b.rf, {
                              className: (0, l.W)(
                                T().releaseBlockCard,
                                T().important,
                              ),
                              album: U.lastRelease,
                            }),
                          ],
                        })
                      : void 0,
              [U.isLoading, U.lastRelease, U.upcomingAlbum, F, H],
            ),
            en = (0, d.useMemo)(() => {
              let e = [];
              return (
                U.familiarInfo.tracksCount &&
                  e.push(
                    H(
                      { id: "entity-names.tracks-count" },
                      { value: U.familiarInfo.tracksCount },
                    ),
                  ),
                U.familiarInfo.collectionAlbumCount &&
                  e.push(
                    H(
                      { id: "entity-names.albums-count" },
                      { value: U.familiarInfo.collectionAlbumCount },
                    ),
                  ),
                e.join(" • ")
              );
            }, [
              U.familiarInfo.collectionAlbumCount,
              U.familiarInfo.tracksCount,
              H,
            ]);
          return (
            null === (A = U.meta) || void 0 === A
              ? void 0
              : A.artist.isLegalRejected
          )
            ? W.isRejected
              ? (0, s.jsx)(S.D, {})
              : (0, s.jsx)(N.em, { disclaimer: W })
            : (0, s.jsx)(I.Lh, {
                pageId: I.Rh.ARTIST,
                children: (0, s.jsx)(I.e4, {
                  children: (0, s.jsxs)(f.I7, {
                    scrollElement: K,
                    children: [
                      (0, s.jsx)(L.h4, { style: ee, innerHeaderRef: Y }),
                      (0, s.jsx)("div", {
                        className: T().averageColorBackground,
                        style: $,
                      }),
                      (0, s.jsxs)(h.t, {
                        className: T().root,
                        containerClassName: T().content,
                        ref: Q,
                        children: [
                          (0, s.jsxs)("div", {
                            children: [
                              es,
                              (0, s.jsxs)("div", {
                                className: T().recents,
                                children: [
                                  U.hasPopularTracks &&
                                    (0, s.jsx)(j, {
                                      withReleaseBlock: U.hasReleaseBlock,
                                      isLoading: U.isLoading,
                                      viewAllActionLink: "/artist/".concat(
                                        w,
                                        "/tracks",
                                      ),
                                      id: r.TRACKS,
                                      children:
                                        null === (G = U.popularTracks) ||
                                        void 0 === G
                                          ? void 0
                                          : G.map((e, t) =>
                                              (0, s.jsx)(
                                                E.O2,
                                                {
                                                  track: e,
                                                  playContextParams: er(e.id),
                                                  hasDuplicatesBefore: (0,
                                                  P.BA)(U.popularTracks, e, t),
                                                },
                                                e.id,
                                              ),
                                            ),
                                    }),
                                  el,
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: T().carouselBlocks,
                                children: [
                                  U.familiarInfo.isFamiliarYouEnabled &&
                                    U.familiarInfo.hasFamiliarInfo &&
                                    (0, s.jsx)(L.ti, {
                                      id: r.FAMILIAR,
                                      className: (0, l.W)(
                                        T().carouselBlockHeader,
                                        T().carouselBlock,
                                      ),
                                      coverUrl:
                                        "avatars.mds.yandex.net/get-music-misc/2419084/img.65faec7dd0866004f49a38bc/%%",
                                      viewAllActionLink: U.familiarInfo.href(w),
                                      controls: !1,
                                      title: H({ id: "page.familiar-you" }),
                                      description: en,
                                    }),
                                  U.hasDiscography &&
                                    (0, s.jsx)(I.J, {
                                      blockId: I.BE.DISCOGRAPHY_CAROUSEL,
                                      blockType: I.BE.ALBUMS_CAROUSEL,
                                      blockPosX: 1,
                                      blockPosY: 2,
                                      blockIdForFrom: I.BE.DISCOGRAPHY_CAROUSEL,
                                      objectsCount: U.discography.length,
                                      children: (0, s.jsx)(b.wk, {
                                        isShimmerVisible: U.isLoading,
                                        isShimmerActive: !0,
                                        headerClassName: (0, l.W)(
                                          T().carouselBlockHeader,
                                          T().carouselBlock,
                                        ),
                                        containerClassName: T().carouselBlock,
                                        albums: U.discography,
                                        title: H({
                                          id: "entity-names.studio-albums",
                                        }),
                                        viewAllActionLink: "/artist/".concat(
                                          w,
                                          "/discography",
                                        ),
                                        ...(0, m.BA)(m.Br.artist.STUDIO_ALBUMS),
                                      }),
                                    }),
                                  U.hasAlbums &&
                                    (0, s.jsx)(I.J, {
                                      blockId: I.BE.ALBUMS_CAROUSEL,
                                      blockType: I.BE.ALBUMS_CAROUSEL,
                                      blockPosX: 1,
                                      blockPosY: 3,
                                      blockIdForFrom: I.BE.ALBUMS_CAROUSEL,
                                      objectsCount: U.albums.length,
                                      children: (0, s.jsx)(b.wk, {
                                        isShimmerVisible: U.isLoading,
                                        isShimmerActive: !0,
                                        headerClassName: (0, l.W)(
                                          T().carouselBlockHeader,
                                          T().carouselBlock,
                                        ),
                                        containerClassName: T().carouselBlock,
                                        albums: U.albums,
                                        title: H({
                                          id: "entity-names.popular-albums",
                                        }),
                                        viewAllActionLink: "/artist/".concat(
                                          w,
                                          "/albums",
                                        ),
                                        ...(0, m.BA)(
                                          m.Br.artist.POPULAR_ALBUMS,
                                        ),
                                      }),
                                    }),
                                  w &&
                                    U.hasConcerts &&
                                    (0, s.jsx)(I.nZ, {
                                      objectType: c.OB.Shortcut,
                                      objectId: "/artist/".concat(
                                        w,
                                        "/concerts",
                                      ),
                                      objectPosX: 0,
                                      objectPosY: 0,
                                      objectsCount:
                                        null !==
                                          (V =
                                            null === (D = U.concerts) ||
                                            void 0 === D
                                              ? void 0
                                              : D.length) && void 0 !== V
                                          ? V
                                          : 0,
                                      children: (0, s.jsx)(x.m, {
                                        id: r.CONCERTS,
                                        artistId: w,
                                        title: H({
                                          id: "entity-names.concerts",
                                        }),
                                        isLoading: U.isLoading,
                                        headerClassName: (0, l.W)(
                                          T().carouselBlockHeader,
                                          T().carouselBlock,
                                        ),
                                        containerClassName: T().concertsBlock,
                                        viewAllActionLink: U.concertsLink,
                                        children:
                                          null === (R = U.concerts) ||
                                          void 0 === R
                                            ? void 0
                                            : R.map((e, t) => {
                                                var a;
                                                return (0, s.jsx)(
                                                  I.nZ,
                                                  {
                                                    objectType: c.OB.Concert,
                                                    objectId: String(e.id),
                                                    objectPosX:
                                                      Math.floor(t / 2) + 1,
                                                    objectPosY: (t % 2) + 1,
                                                    objectsCount:
                                                      null !==
                                                        (O =
                                                          null ===
                                                            (a = U.concerts) ||
                                                          void 0 === a
                                                            ? void 0
                                                            : a.length) &&
                                                      void 0 !== O
                                                        ? O
                                                        : 0,
                                                    children: (0, s.jsx)(x.kb, {
                                                      artistId: w,
                                                      concert: e,
                                                    }),
                                                  },
                                                  e.id,
                                                );
                                              }),
                                      }),
                                    }),
                                  U.hasPlaylists &&
                                    (0, s.jsx)(C.VD, {
                                      isShimmerVisible: U.isLoading,
                                      isShimmerActive: !0,
                                      containerClassName: T().carouselBlock,
                                      headerClassName: (0, l.W)(
                                        T().carouselBlockHeader,
                                        T().carouselBlock,
                                      ),
                                      title: H({
                                        id: "entity-names.artist-playlist",
                                      }),
                                      playlists: U.playlists,
                                      ...(0, m.BA)(
                                        m.Br.artist.ARTIST_PLAYLISTS,
                                      ),
                                    }),
                                  U.hasCompilations &&
                                    (0, s.jsx)(I.J, {
                                      blockId: I.BE.COMPILATIONS_CAROUSEL,
                                      blockType: "albums_carousel",
                                      blockPosX: 1,
                                      blockPosY: 5,
                                      blockIdForFrom:
                                        I.BE.COMPILATIONS_CAROUSEL,
                                      objectsCount: U.compilations.length,
                                      children: (0, s.jsx)(b.wk, {
                                        isShimmerVisible: U.isLoading,
                                        isShimmerActive: !0,
                                        headerClassName: (0, l.W)(
                                          T().carouselBlockHeader,
                                          T().carouselBlock,
                                        ),
                                        containerClassName: T().carouselBlock,
                                        albums: U.compilations,
                                        title: H({
                                          id: "entity-names.compilations",
                                        }),
                                        viewAllActionLink: "/artist/".concat(
                                          w,
                                          "/compilations",
                                        ),
                                        ...(0, m.BA)(m.Br.artist.COMPILATIONS),
                                      }),
                                    }),
                                  U.hasSimilarArtists &&
                                    (0, s.jsx)(L.HY, {
                                      isShimmerVisible: U.isLoading,
                                      isShimmerActive: !0,
                                      headerClassName: (0, l.W)(
                                        T().carouselBlockHeader,
                                        T().carouselBlock,
                                      ),
                                      containerClassName: T().carouselBlock,
                                      title: H({
                                        id: "entity-names.similar-artists",
                                      }),
                                      viewAllActionLink: "/artist/".concat(
                                        w,
                                        "/similar",
                                      ),
                                      ...(0, m.BA)(m.Br.artist.SIMILAR_ARTISTS),
                                      children: U.similarArtists.map((e) =>
                                        (0, s.jsx)(
                                          y.IT,
                                          { artist: e, contentLinesCount: 3 },
                                          e.id,
                                        ),
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)(L.$_, { className: T().footer }),
                        ],
                      }),
                    ],
                  }),
                }),
              });
        });
    },
    41591: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistSimilarPage: function () {
            return b;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(11769),
        l = a(99616),
        n = a(65244),
        o = a(2814),
        d = a(71716),
        u = a(1918),
        c = a(70579),
        m = a(81546),
        g = a(13236),
        p = a(7042),
        h = a(5674),
        v = a(44285),
        _ = a(33768),
        S = a.n(_);
      let b = (0, r.Pi)((e) => {
        var t, a;
        let { artistId: r } = e,
          { artist: _, disclaimer: b } = (0, h.oR)(),
          { formatMessage: y } = (0, n.Z)(),
          [f, C] = (0, g.zU)(),
          E = (0, h.k6)();
        if (r && _.loadingState === h.Gu.IDLE) {
          let e = Promise.allSettled([
            _.getData({ artistId: r }),
            _.getSimilarArtists({ artistId: r }),
          ]);
          (0, l.use)(e);
        }
        let x = (0, m.v2)({
          artist: null === (t = _.meta) || void 0 === t ? void 0 : t.artist,
          shouldHistoryBack: !0,
        });
        (0, l.useEffect)(() => {
          x();
        }, [x]),
          (0, l.useEffect)(
            () => () => {
              _.reset();
            },
            [_],
          ),
          _.hasNoOneSimilarArtistOrNotFound && (0, s.notFound)(),
          (0, h.NO)(_.loadingState === h.Gu.RESOLVE);
        let N = (0, l.useMemo)(() => {
          if (_.loadingState === h.Gu.RESOLVE)
            return _.similarArtists.map((e) =>
              (0, i.jsx)(
                m.IT,
                { className: S().item, artist: e, contentLinesCount: 3 },
                e.id,
              ),
            );
          let e = y(
            { id: "loading-messages.entity-is-loading" },
            { entityName: y({ id: "entity-names.similar-artists" }) },
          );
          return (0, i.jsx)(v.Wm, {
            isActive: !0,
            itemClassName: S().item,
            round: !0,
            centered: !0,
            "aria-label": e,
          });
        }, [_.loadingState, _.similarArtists, y, _.similarArtists.length]);
        return (
          null === (a = _.meta) || void 0 === a
            ? void 0
            : a.artist.isLegalRejected
        )
          ? b.isRejected
            ? (0, i.jsx)(c.D, {})
            : (0, i.jsx)(p.em, { disclaimer: b })
          : _.isRejected
            ? (0, i.jsx)(c.D, {})
            : (0, i.jsx)(h.Lh, {
                pageId: h.Rh.ARTIST_SIMILAR,
                children: (0, i.jsxs)(g.I7, {
                  scrollElement: f,
                  outerTitle: y({ id: "entity-names.similar-artists" }),
                  children: [
                    (0, i.jsx)(v.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: E.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: (0, i.jsx)(o.Z, {
                          id: "entity-names.similar-artists",
                        }),
                      }),
                    }),
                    (0, i.jsx)(d.t, {
                      className: S().scrollableContent,
                      ref: C,
                      children: (0, i.jsxs)("div", {
                        className: S().container,
                        children: [
                          (0, i.jsx)("div", {
                            className: S().content,
                            "aria-labelledby": "collection-artists-header",
                            tabIndex: 0,
                            children: N,
                          }),
                          (0, i.jsx)(v.$_, { className: S().footer }),
                        ],
                      }),
                    }),
                  ],
                }),
              });
      });
    },
    66016: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ArtistTracksPage: function () {
            return f;
          },
        });
      var i = a(8759),
        r = a(35338),
        s = a(33423),
        l = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(2814),
        u = a(57413),
        c = a(1918),
        m = a(70579),
        g = a(81546),
        p = a(13236),
        h = a(95539),
        v = a(7042),
        _ = a(5674),
        S = a(44285),
        b = a(60495),
        y = a.n(b);
      let f = (0, s.Pi)((e) => {
        var t, a, s, b;
        let { artistId: f } = e,
          { artist: C, sonataState: E, disclaimer: x } = (0, _.oR)(),
          { formatMessage: N } = (0, o.Z)(),
          P = (0, _.x5)({ pageId: _.Rh.ARTIST_TRACKS }),
          [I, L] = (0, p.zU)(),
          k = (0, _.k6)();
        if (f && C.fullTracksListSubpage.loadingState === _.Gu.IDLE) {
          let e = Promise.allSettled([
            C.getData({ artistId: f }),
            C.fullTracksListSubpage.getTracksIds({ artistId: f }),
          ]);
          (0, n.use)(e);
        }
        let A = (0, g.v2)({
          artist: null === (t = C.meta) || void 0 === t ? void 0 : t.artist,
          shouldHistoryBack: !0,
        });
        (0, n.useEffect)(() => {
          A();
        }, [A]),
          (0, n.useEffect)(
            () => () => {
              C.reset(), C.fullTracksListSubpage.reset();
            },
            [C, C.fullTracksListSubpage],
          ),
          C.fullTracksListSubpage.isNotFound && (0, l.notFound)(),
          (0, _.NO)(C.fullTracksListSubpage.loadingState === _.Gu.RESOLVE);
        let T = (0, n.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(S.$_, { className: y().footer }),
            }),
            [],
          ),
          j = (0, n.useCallback)(
            (e) => {
              let t = [];
              for (let i = e.startIndex; i <= e.endIndex; i++) {
                var a;
                let e =
                  null === (a = C.fullTracksListSubpage.ids) || void 0 === a
                    ? void 0
                    : a[i];
                !C.fullTracksListSubpage.getTrackByIndex(i) && e && t.push(e);
              }
              t.length && C.fullTracksListSubpage.getTracks({ trackIds: t });
            },
            [C.fullTracksListSubpage],
          );
        return C.fullTracksListSubpage.loadingState !== _.Gu.REJECT ||
          C.fullTracksListSubpage.isNotFound
          ? (
              null === (a = C.meta) || void 0 === a
                ? void 0
                : a.artist.isLegalRejected
            )
            ? x.isRejected
              ? (0, i.jsx)(m.D, {})
              : (0, i.jsx)(v.em, { disclaimer: x })
            : (0, i.jsx)(p.I7, {
                scrollElement: I,
                outerTitle: N({ id: "search-filters.track" }),
                children: (0, i.jsxs)("div", {
                  className: y().root,
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: k.canBack,
                      children: (0, i.jsx)(c.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: (0, i.jsx)(d.Z, {
                          id: "search-filters.track",
                        }),
                      }),
                    }),
                    (0, i.jsx)(S.Wv, {
                      className: (0, r.W)(y().scrollContainer, y().important),
                      customComponents: T,
                      itemContentCallback: (e) => {
                        let t = C.fullTracksListSubpage.getTrackByIndex(e),
                          a = N(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: N({ id: "search-filters.track" }) },
                          );
                        return t
                          ? (0, i.jsx)(h.O2, {
                              track: t,
                              playContextParams: {
                                contextData: {
                                  type: u.Ak.Artist,
                                  meta: { id: Number(f) },
                                  from: P,
                                },
                                queueParams: { index: e },
                                loadContextMeta: !0,
                                entitiesData: E.unloadedEntitiesDataFromModels,
                              },
                            })
                          : (0, i.jsx)(S.DX, {
                              isActive: !0,
                              "aria-label": a,
                              variant: _.Lx.PLAYLIST,
                              className: y().shimmerItem,
                            });
                      },
                      totalCount:
                        null !==
                          (b =
                            null === (s = C.fullTracksListSubpage.ids) ||
                            void 0 === s
                              ? void 0
                              : s.length) && void 0 !== b
                          ? b
                          : 0,
                      onGetDataByRange: j,
                      pageSize: 20,
                      listClassName: y().content,
                      itemClassName: y().item,
                      totalRequests: C.fullTracksListSubpage.tracks.size,
                      handleRef: L,
                      context: {
                        listAriaLabel: N({
                          id: "entity-names.artist-tracks-list",
                        }),
                      },
                    }),
                  ],
                }),
              })
          : (0, i.jsx)(m.D, {});
      });
    },
    69658: function (e, t, a) {
      "use strict";
      a.d(t, {
        D: function () {
          return S;
        },
        _: function () {
          return f;
        },
      });
      var i = a(8759),
        r = a(35338),
        s = a(33423),
        l = a(99616),
        n = a(65244),
        o = a(57413),
        d = a(12670),
        u = a(1918),
        c = a(70579),
        m = a(13236),
        g = a(95539),
        p = a(5674),
        h = a(44285),
        v = a(63049),
        _ = a.n(v);
      let S = (0, s.Pi)(() => {
        let { formatMessage: e } = (0, n.Z)(),
          { chart: t } = (0, p.oR)(),
          a = (0, p.k6)(),
          [s, v] = (0, m.zU)(),
          S = (0, p.x5)({ pageId: p.Rh.CHART });
        t.loadingState === p.Gu.IDLE && (0, l.use)(t.getTracks()),
          (0, p.NO)(t.loadingState === p.Gu.RESOLVE);
        let b = (0, l.useCallback)(
            (e) => {
              let a = t.items[e];
              return a && !t.isLoading && t.playlistMeta
                ? (0, i.jsx)(g._3, {
                    track: a,
                    playContextParams: {
                      contextData: {
                        type: o.Ak.Playlist,
                        meta: {
                          id: ""
                            .concat(t.playlistMeta.uid, ":")
                            .concat(t.playlistMeta.kind),
                        },
                        from: S,
                      },
                      queueParams: { index: e },
                      loadContextMeta: !0,
                    },
                  })
                : (0, i.jsx)(h.DX, {
                    isActive: !0,
                    className: _().shimmerItem,
                    variant: p.Lx.PLAYLIST,
                  });
            },
            [S, t.items, t.isLoading, t.playlistMeta],
          ),
          y = (0, l.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(h.$_, { className: _().footer }),
            }),
            [],
          ),
          f = (0, l.useMemo)(
            () =>
              t.title
                ? (0, i.jsx)(u.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: t.title,
                  })
                : (0, i.jsx)(d.Shimmer, {
                    className: _().shimmerTitle,
                    radius: "l",
                  }),
            [t.title],
          );
        return t.loadingState === p.Gu.REJECT
          ? (0, i.jsx)(c.D, {})
          : (0, i.jsx)(p.Lh, {
              pageId: p.Rh.CHART,
              children: (0, i.jsx)(m.I7, {
                scrollElement: s,
                ...(t.title && { outerTitle: t.title }),
                children: (0, i.jsxs)("div", {
                  className: _().root,
                  children: [
                    (0, i.jsx)(h.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: a.canBack,
                      children: f,
                    }),
                    (0, i.jsx)(h.Wv, {
                      className: (0, r.W)(_().scrollContainer, _().important),
                      listClassName: _().content,
                      customComponents: y,
                      totalCount: t.items.length,
                      itemContentCallback: b,
                      debounceDurationInMs: 300,
                      handleRef: v,
                      context: {
                        listAriaLabel: e({
                          id: "entity-names.chart-tracks-list",
                        }),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
      var b = a(96555);
      let y = b.V5.model("ChartPagePlaylistModel", {
          uuid: b.V5.string,
          uid: b.V5.number,
          kind: b.V5.number,
        }),
        f = b.V5.model("ChartPageModel", {
          title: b.V5.maybeNull(b.V5.string),
          playlistMeta: b.V5.maybeNull(y),
          items: b.V5.array(g.le),
          loadingState: b.V5.enumeration(Object.values(p.Gu)),
        })
          .actions((e) => ({
            getTracks: (0, b.ls)(function* () {
              let { chartResource: t, modelActionsLogger: a } = (0, b.dU)(e);
              if (e.loadingState !== p.Gu.PENDING)
                try {
                  e.loadingState = p.Gu.PENDING;
                  let a = yield t.getChart();
                  (e.title = a.title),
                    (e.playlistMeta = (0, b.pj)({
                      uuid: a.playContext.playlistUuid,
                      uid: a.playContext.uid,
                      kind: a.playContext.kind,
                    })),
                    (e.items = (0, b.pj)(
                      a.chartPositions.map((e) =>
                        (0, g.S7)(e.track, e.chartPosition),
                      ),
                    )),
                    e.loadingState !== p.Gu.IDLE &&
                      (e.loadingState = p.Gu.RESOLVE);
                } catch (t) {
                  a.error(t),
                    e.loadingState !== p.Gu.IDLE &&
                      (e.loadingState = p.Gu.REJECT);
                }
            }),
          }))
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === p.Gu.PENDING || e.loadingState === p.Gu.IDLE
              );
            },
            get isLoadingError() {
              return e.loadingState === p.Gu.REJECT;
            },
          }));
    },
    30651: function (e, t, a) {
      "use strict";
      a.d(t, {
        rT: function () {
          return r.GenreAlbumsPage;
        },
        eq: function () {
          return s.GenreArtistsPage;
        },
        a0: function () {
          return i.GenrePage;
        },
        Kx: function () {
          return b;
        },
        Fe: function () {
          return l.GenrePlaylistsPage;
        },
      });
      var i = a(72376),
        r = a(72683),
        s = a(58936),
        l = a(85694);
      a(75244);
      var n = a(96555),
        o = a(96431),
        d = a(96911),
        u = a(20210),
        c = a(81446),
        m = a(5674),
        g = a(21774),
        p = a(65704);
      let h = n.V5.model("GenreAlbumsPage", {
          loadingState: n.V5.enumeration(Object.values(m.Gu)),
          pager: n.V5.maybeNull(p.Vn),
          alreadyRequestedPages: n.V5.map(n.V5.number),
          pendingPages: n.V5.map(n.V5.number),
          requests: n.V5.maybeNull(n.V5.number),
          errorStatusCode: n.V5.maybeNull(n.V5.number),
          fullTitle: n.V5.maybeNull(n.V5.string),
          items: n.V5.array(n.V5.maybeNull(d.ug)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === m.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === o.CN.NOT_FOUND ||
                  e.errorStatusCode === o.CN.BAD_REQUEST;
              return (e.loadingState === m.Gu.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return e.loadingState === m.Gu.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, n.ls)(function* (t) {
                let { metatagId: a, page: i = 0, pageSize: r = 20 } = t,
                  { metatagsResource: s, modelActionsLogger: l } = (0, n.dU)(e);
                if (
                  !(
                    (e.loadingState === m.Gu.PENDING &&
                      e.pendingPages.has("".concat(i))) ||
                    e.alreadyRequestedPages.has("".concat(i))
                  )
                ) {
                  "number" == typeof i &&
                    e.alreadyRequestedPages.set("".concat(i), i);
                  try {
                    var d;
                    (e.loadingState = m.Gu.PENDING),
                      e.pendingPages.set("".concat(i), i);
                    let t = yield s.getMetatagAlbums({
                      id: a,
                      offset: i,
                      limit: r,
                    });
                    e.fullTitle = t.title.fullTitle;
                    let l = { page: i, perPage: r, total: t.pager.total };
                    0 === e.items.length &&
                      (e.items = (0, n.pj)(
                        Array.from({ length: l.total }, () => null),
                      ));
                    let o = t.albums.map(g.N);
                    (0, m.AG)({
                      items: e.items,
                      mappedRawItems: o,
                      page: i,
                      pageSize: r,
                    }),
                      (e.pager = l),
                      (e.requests =
                        (null !== (d = e.requests) && void 0 !== d ? d : 0) +
                        1),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.RESOLVE);
                  } catch (t) {
                    l.error(t),
                      t instanceof o.du &&
                        (t.statusCode === o.CN.NOT_FOUND ||
                          t.statusCode === o.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = o.CN.NOT_FOUND),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(i));
                  }
                }
              }),
              reset() {
                (e.loadingState = m.Gu.IDLE),
                  e.pendingPages.clear(),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  (e.errorStatusCode = null),
                  (e.items = (0, n.pj)([]));
              },
            };
            return t;
          }),
        v = n.V5.model("GenreArtistsPage", {
          loadingState: n.V5.enumeration(Object.values(m.Gu)),
          pager: n.V5.maybeNull(p.Vn),
          alreadyRequestedPages: n.V5.map(n.V5.number),
          pendingPages: n.V5.map(n.V5.number),
          requests: n.V5.maybeNull(n.V5.number),
          errorStatusCode: n.V5.maybeNull(n.V5.number),
          fullTitle: n.V5.maybeNull(n.V5.string),
          items: n.V5.array(n.V5.maybeNull(c.Go)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === m.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === o.CN.NOT_FOUND ||
                  e.errorStatusCode === o.CN.BAD_REQUEST;
              return (e.loadingState === m.Gu.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return e.loadingState === m.Gu.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, n.ls)(function* (t) {
                let { metatagId: a, page: i = 0, pageSize: r = 20 } = t,
                  { metatagsResource: s, modelActionsLogger: l } = (0, n.dU)(e);
                if (
                  !(
                    (e.loadingState === m.Gu.PENDING &&
                      e.pendingPages.has("".concat(i))) ||
                    e.alreadyRequestedPages.has("".concat(i))
                  )
                ) {
                  "number" == typeof i &&
                    e.alreadyRequestedPages.set("".concat(i), i);
                  try {
                    var d;
                    (e.loadingState = m.Gu.PENDING),
                      e.pendingPages.set("".concat(i), i);
                    let t = yield s.getMetatagArtists({
                      id: a,
                      offset: i,
                      limit: r,
                      period: "week",
                    });
                    e.fullTitle = t.title.fullTitle;
                    let l = { page: i, perPage: r, total: t.pager.total };
                    0 === e.items.length &&
                      (e.items = (0, n.pj)(
                        Array.from({ length: l.total }, () => null),
                      ));
                    let o = t.artists.map((e) => (0, c.d)(e.artist));
                    (0, m.AG)({
                      items: e.items,
                      mappedRawItems: o,
                      page: i,
                      pageSize: r,
                    }),
                      (e.pager = l),
                      (e.requests =
                        (null !== (d = e.requests) && void 0 !== d ? d : 0) +
                        1),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.RESOLVE);
                  } catch (t) {
                    l.error(t),
                      t instanceof o.du &&
                        (t.statusCode === o.CN.NOT_FOUND ||
                          t.statusCode === o.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = o.CN.NOT_FOUND),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(i));
                  }
                }
              }),
              reset() {
                (e.loadingState = m.Gu.IDLE),
                  e.pendingPages.clear(),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  (e.errorStatusCode = null),
                  (e.items = (0, n.pj)([]));
              },
            };
            return t;
          });
      var _ = a(3515);
      let S = n.V5.model("GenrePlaylistsPage", {
          loadingState: n.V5.enumeration(Object.values(m.Gu)),
          pager: n.V5.maybeNull(p.Vn),
          alreadyRequestedPages: n.V5.map(n.V5.number),
          pendingPages: n.V5.map(n.V5.number),
          requests: n.V5.maybeNull(n.V5.number),
          errorStatusCode: n.V5.maybeNull(n.V5.number),
          fullTitle: n.V5.maybeNull(n.V5.string),
          items: n.V5.array(n.V5.maybeNull(_.Cd)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === m.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === o.CN.NOT_FOUND ||
                  e.errorStatusCode === o.CN.BAD_REQUEST;
              return (e.loadingState === m.Gu.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return (
                !this.isNotFound &&
                e.loadingState === m.Gu.REJECT &&
                0 === e.alreadyRequestedPages.size
              );
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, n.ls)(function* (t) {
                let { metatagId: a, page: i = 0, pageSize: r = 20 } = t,
                  { metatagsResource: s, modelActionsLogger: l } = (0, n.dU)(e);
                if (
                  !(
                    (e.loadingState === m.Gu.PENDING &&
                      e.pendingPages.has("".concat(i))) ||
                    e.alreadyRequestedPages.has("".concat(i))
                  )
                ) {
                  "number" == typeof i &&
                    e.alreadyRequestedPages.set("".concat(i), i);
                  try {
                    var o;
                    (e.loadingState = m.Gu.PENDING),
                      e.pendingPages.set("".concat(i), i);
                    let t = yield s.getMetatagPlaylists({
                      id: a,
                      offset: i,
                      limit: r,
                      withLikesCount: !0,
                    });
                    e.fullTitle = t.title.fullTitle;
                    let l = { page: i, perPage: r, total: t.pager.total };
                    0 === e.items.length &&
                      (e.items = (0, n.pj)(
                        Array.from({ length: l.total }, () => null),
                      ));
                    let d = t.playlists.map(_.PV);
                    (0, m.AG)({
                      items: e.items,
                      mappedRawItems: d,
                      page: i,
                      pageSize: r,
                    }),
                      (e.pager = l),
                      (e.requests =
                        (null !== (o = e.requests) && void 0 !== o ? o : 0) +
                        1),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.RESOLVE);
                  } catch (t) {
                    l.error(t),
                      e.alreadyRequestedPages.delete("".concat(i)),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(i));
                  }
                }
              }),
              reset() {
                (e.loadingState = m.Gu.IDLE),
                  e.pendingPages.clear(),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  (e.errorStatusCode = null),
                  (e.items = (0, n.pj)([]));
              },
            };
            return t;
          }),
        b = n.V5.model("GenrePage", {
          id: n.V5.maybeNull(n.V5.string),
          errorStatusCode: n.V5.maybeNull(n.V5.number),
          loadingState: n.V5.enumeration(Object.values(m.Gu)),
          fullTitle: n.V5.maybeNull(n.V5.string),
          artists: n.V5.array(c.Go),
          albums: n.V5.array(d.ug),
          playlists: n.V5.array(u.d2),
          albumsSubpage: h,
          artistsSubpage: v,
          playlistsSubpage: S,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === m.Gu.IDLE || e.loadingState === m.Gu.PENDING
              );
            },
            get hasAlbums() {
              return (
                e.loadingState === m.Gu.IDLE ||
                e.loadingState === m.Gu.PENDING ||
                e.albums.length > 0
              );
            },
            get hasArtists() {
              return (
                e.loadingState === m.Gu.IDLE ||
                e.loadingState === m.Gu.PENDING ||
                e.artists.length > 0
              );
            },
            get hasPlaylists() {
              return (
                e.loadingState === m.Gu.IDLE ||
                e.loadingState === m.Gu.PENDING ||
                e.playlists.length > 0
              );
            },
            get isNotFound() {
              let t =
                  e.loadingState === m.Gu.RESOLVE &&
                  !this.hasAlbums &&
                  !this.hasArtists &&
                  !this.hasPlaylists,
                a =
                  e.errorStatusCode === o.CN.NOT_FOUND ||
                  e.errorStatusCode === o.CN.BAD_REQUEST;
              return (e.loadingState === m.Gu.REJECT && a) || t;
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, n.ls)(function* (t) {
                let { id: a } = t,
                  { metatagsResource: i, modelActionsLogger: r } = (0, n.dU)(e);
                if (e.loadingState !== m.Gu.PENDING)
                  try {
                    e.loadingState = m.Gu.PENDING;
                    let t = yield i.getMetatagById({ id: a });
                    (e.id = t.id),
                      (e.fullTitle = t.title.fullTitle),
                      (e.artists = (0, n.pj)(t.artists.map(c.d))),
                      (e.albums = (0, n.pj)(t.albums.map(d.ym))),
                      (e.playlists = (0, n.pj)(t.playlists.map(u.Q9))),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.RESOLVE);
                  } catch (t) {
                    r.error(t),
                      t instanceof o.du &&
                        (t.statusCode === o.CN.NOT_FOUND ||
                          t.statusCode === o.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = o.CN.NOT_FOUND),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.REJECT);
                  }
              }),
              reset() {
                (e.loadingState = m.Gu.IDLE),
                  (e.fullTitle = null),
                  (e.artists = (0, n.pj)([])),
                  (e.albums = (0, n.pj)([])),
                  (e.playlists = (0, n.pj)([]));
              },
            };
            return t;
          });
    },
    72683: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenreAlbumsPage: function () {
            return _;
          },
        });
      var i = a(8759),
        r = a(35338),
        s = a(33423),
        l = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(1918),
        u = a(70579),
        c = a(96911),
        m = a(13236),
        g = a(5674),
        p = a(44285),
        h = a(56908),
        v = a.n(h);
      let _ = (0, s.Pi)((e) => {
        var t, a, s;
        let { metatagId: h } = e,
          {
            genre: { albumsSubpage: _ },
          } = (0, g.oR)(),
          { formatMessage: S } = (0, o.Z)(),
          [b, y] = (0, m.zU)(),
          f = (0, g.k6)();
        h &&
          _.loadingState === g.Gu.IDLE &&
          (0, n.use)(_.getData({ metatagId: h, page: 0, pageSize: 20 }));
        let C = (0, n.useCallback)(
          (e) => {
            h && _.getData({ metatagId: h, page: e, pageSize: 20 });
          },
          [_, h],
        );
        (0, n.useEffect)(
          () => () => {
            _.reset();
          },
          [_],
        ),
          _.isNotFound && (0, l.notFound)(),
          (0, g.NO)(_.loadingState === g.Gu.RESOLVE);
        let E = (0, n.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(p.$_, { className: v().footer }) }),
          [],
        );
        return _.isSomethingWrong
          ? (0, i.jsx)(u.D, {})
          : (0, i.jsx)(g.Lh, {
              pageId: g.Rh.GENRE_ALBUMS,
              children: (0, i.jsx)(m.I7, {
                scrollElement: b,
                outerTitle: _.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, i.jsx)(p.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: f.canBack,
                      children: (0, i.jsx)(d.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: _.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(p.Wv, {
                      className: (0, r.W)(v().scrollContainer, v().important),
                      customComponents: E,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == _
                              ? void 0
                              : null === (t = _.items) || void 0 === t
                                ? void 0
                                : t[e],
                          r = S(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: S({ id: "entity-names.album" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              c.rf,
                              { album: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, i.jsx)(p.hi, { "aria-label": r });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == _
                              ? void 0
                              : null === (t = _.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: C,
                      pageSize: 20,
                      totalRequests:
                        null !== (s = _.requests) && void 0 !== s ? s : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: y,
                      context: {
                        listAriaLabel: S(
                          { id: "mixes.albums-list" },
                          { genreName: _.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    58936: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenreArtistsPage: function () {
            return _;
          },
        });
      var i = a(8759),
        r = a(35338),
        s = a(33423),
        l = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(1918),
        u = a(70579),
        c = a(81546),
        m = a(13236),
        g = a(5674),
        p = a(44285),
        h = a(11318),
        v = a.n(h);
      let _ = (0, s.Pi)((e) => {
        var t, a, s;
        let { metatagId: h } = e,
          {
            genre: { artistsSubpage: _ },
          } = (0, g.oR)(),
          { formatMessage: S } = (0, o.Z)(),
          [b, y] = (0, m.zU)(),
          f = (0, g.k6)();
        h &&
          _.loadingState === g.Gu.IDLE &&
          (0, n.use)(_.getData({ metatagId: h, page: 0, pageSize: 20 }));
        let C = (0, n.useCallback)(
          (e) => {
            h && _.getData({ metatagId: h, page: e, pageSize: 20 });
          },
          [_, h],
        );
        (0, n.useEffect)(
          () => () => {
            _.reset();
          },
          [_],
        ),
          _.isNotFound && (0, l.notFound)(),
          (0, g.NO)(_.loadingState === g.Gu.RESOLVE);
        let E = (0, n.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(p.$_, { className: v().footer }) }),
          [],
        );
        return _.isSomethingWrong
          ? (0, i.jsx)(u.D, {})
          : (0, i.jsx)(g.Lh, {
              pageId: g.Rh.GENRE_ARTISTS,
              children: (0, i.jsx)(m.I7, {
                scrollElement: b,
                outerTitle: _.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, i.jsx)(p.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: f.canBack,
                      children: (0, i.jsx)(d.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: _.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(p.Wv, {
                      className: (0, r.W)(v().scrollContainer, v().important),
                      customComponents: E,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == _
                              ? void 0
                              : null === (t = _.items) || void 0 === t
                                ? void 0
                                : t[e],
                          r = S(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: S({ id: "entity-names.artist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              c.IT,
                              { artist: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, i.jsx)(p.hi, {
                              "aria-label": r,
                              round: !0,
                              centered: !0,
                            });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == _
                              ? void 0
                              : null === (t = _.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: C,
                      pageSize: 20,
                      totalRequests:
                        null !== (s = _.requests) && void 0 !== s ? s : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: y,
                      context: {
                        listAriaLabel: S(
                          { id: "mixes.artists-list" },
                          { genreName: _.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    75244: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenreNotFoundPage: function () {
            return l;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(2365);
      let l = (0, r.Pi)(() => (0, i.jsx)(s.T, {}));
    },
    72376: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenrePage: function () {
            return y;
          },
        });
      var i = a(8759),
        r = a(35338),
        s = a(33423),
        l = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(71716),
        u = a(1918),
        c = a(70579),
        m = a(96911),
        g = a(81546),
        p = a(13236),
        h = a(20210),
        v = a(5674),
        _ = a(44285),
        S = a(59896),
        b = a.n(S);
      let y = (0, s.Pi)((e) => {
        let { metatagId: t } = e,
          { genre: a } = (0, v.oR)(),
          { formatMessage: s } = (0, o.Z)(),
          [S, y] = (0, p.zU)(),
          f = (0, v.k6)();
        return (t &&
          a.loadingState === v.Gu.IDLE &&
          (0, n.use)(a.getData({ id: t })),
        a.isNotFound && (0, l.notFound)(),
        (0, n.useEffect)(
          () => () => {
            a.reset();
          },
          [a],
        ),
        (0, v.NO)(a.loadingState === v.Gu.RESOLVE),
        a.loadingState !== v.Gu.REJECT || a.isNotFound)
          ? (0, i.jsx)(v.Lh, {
              pageId: v.Rh.GENRE,
              children: (0, i.jsxs)(p.I7, {
                scrollElement: S,
                outerTitle: a.fullTitle,
                children: [
                  (0, i.jsx)(_.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: f.canBack,
                    children: (0, i.jsx)(u.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: a.fullTitle,
                    }),
                  }),
                  (0, i.jsx)(d.t, {
                    className: b().root,
                    containerClassName: b().content,
                    ref: y,
                    children: (0, i.jsxs)("div", {
                      className: b().carouselBlocks,
                      children: [
                        a.hasPlaylists &&
                          (0, i.jsx)(v.J, {
                            blockId: v.BE.PLAYLISTS_CAROUSEL,
                            blockType: v.BE.PLAYLISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 1,
                            blockIdForFrom: v.BE.PLAYLISTS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(h.VD, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, r.W)(
                                b().carouselBlockHeader,
                                b().carouselBlock,
                              ),
                              containerClassName: b().carouselBlock,
                              playlists: a.playlists,
                              title: s({
                                id: "entity-names.popular-playlists",
                              }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/playlists",
                              ),
                            }),
                          }),
                        a.hasAlbums &&
                          (0, i.jsx)(v.J, {
                            blockId: v.BE.ALBUMS_CAROUSEL,
                            blockType: v.BE.ALBUMS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 2,
                            blockIdForFrom: v.BE.ALBUMS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(m.wk, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, r.W)(
                                b().carouselBlockHeader,
                                b().carouselBlock,
                              ),
                              containerClassName: b().carouselBlock,
                              albums: a.albums,
                              title: s({ id: "entity-names.new-albums" }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/albums",
                              ),
                            }),
                          }),
                        a.hasArtists &&
                          (0, i.jsx)(v.J, {
                            blockId: v.BE.ARTISTS_CAROUSEL,
                            blockType: v.BE.ARTISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 3,
                            blockIdForFrom: v.BE.ARTISTS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(_.HY, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, r.W)(
                                b().carouselBlockHeader,
                                b().carouselBlock,
                              ),
                              containerClassName: b().carouselBlock,
                              title: s({ id: "entity-names.popular-artists" }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/artists",
                              ),
                              children: a.artists.map((e) =>
                                (0, i.jsx)(
                                  g.IT,
                                  { artist: e, contentLinesCount: 3 },
                                  e.id,
                                ),
                              ),
                            }),
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : (0, i.jsx)(c.D, {});
      });
    },
    85694: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenrePlaylistsPage: function () {
            return _;
          },
        });
      var i = a(8759),
        r = a(35338),
        s = a(33423),
        l = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(1918),
        u = a(70579),
        c = a(13236),
        m = a(20210),
        g = a(5674),
        p = a(44285),
        h = a(39214),
        v = a.n(h);
      let _ = (0, s.Pi)((e) => {
        var t, a, s;
        let { metatagId: h } = e,
          {
            genre: { playlistsSubpage: _ },
          } = (0, g.oR)(),
          { formatMessage: S } = (0, o.Z)(),
          [b, y] = (0, c.zU)(),
          f = (0, g.k6)();
        h &&
          _.loadingState === g.Gu.IDLE &&
          (0, n.use)(_.getData({ metatagId: h, page: 0, pageSize: 20 }));
        let C = (0, n.useCallback)(
          (e) => {
            h && _.getData({ metatagId: h, page: e, pageSize: 20 });
          },
          [_, h],
        );
        (0, n.useEffect)(
          () => () => {
            _.reset();
          },
          [_],
        ),
          _.isNotFound && (0, l.notFound)(),
          (0, g.NO)(_.loadingState === g.Gu.RESOLVE);
        let E = (0, n.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(p.$_, { className: v().footer }) }),
          [],
        );
        return _.isSomethingWrong
          ? (0, i.jsx)(u.D, {})
          : (0, i.jsx)(g.Lh, {
              pageId: g.Rh.GENRE_PLAYLISTS,
              children: (0, i.jsx)(c.I7, {
                scrollElement: b,
                outerTitle: _.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, i.jsx)(p.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: f.canBack,
                      children: (0, i.jsx)(d.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: _.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(p.Wv, {
                      className: (0, r.W)(v().scrollContainer, v().important),
                      customComponents: E,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == _
                              ? void 0
                              : null === (t = _.items) || void 0 === t
                                ? void 0
                                : t[e],
                          r = S(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: S({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              m.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(p.hi, { "aria-label": r });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == _
                              ? void 0
                              : null === (t = _.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: C,
                      pageSize: 20,
                      totalRequests:
                        null !== (s = _.requests) && void 0 !== s ? s : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: y,
                      context: {
                        listAriaLabel: S(
                          { id: "mixes.playlists-list" },
                          { genreName: _.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    24438: function (e, t, a) {
      "use strict";
      a.d(t, {
        rx: function () {
          return i.GenresPage;
        },
        EU: function () {
          return o;
        },
      });
      var i = a(83560);
      a(26141);
      var r = a(96555),
        s = a(96431),
        l = a(13212),
        n = a(5674);
      let o = r.V5.model("GenresPageModel", {
        title: r.V5.maybeNull(r.V5.string),
        items: r.V5.array(l.fm),
        loadingState: r.V5.enumeration(Object.values(n.Gu)),
        errorStatusCode: r.V5.maybeNull(r.V5.number),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === n.Gu.IDLE || e.loadingState === n.Gu.PENDING
            );
          },
          get isNotFound() {
            let t = e.loadingState === n.Gu.RESOLVE && 0 === e.items.length,
              a = e.errorStatusCode === s.CN.NOT_FOUND;
            return a || t;
          },
        }))
        .actions((e) => {
          let t = {
            getData: (0, r.ls)(function* (t) {
              let { landing3Resource: a, modelActionsLogger: i } = (0, r.dU)(e);
              if (e.loadingState !== n.Gu.PENDING)
                try {
                  e.loadingState = n.Gu.PENDING;
                  let i = yield a.getMetatags({}),
                    o = i.trees.find((e) => e.navigationId === t);
                  if (!o) {
                    e.errorStatusCode = s.CN.NOT_FOUND;
                    return;
                  }
                  (e.title = o.title),
                    (e.items = (0, r.pj)(o.leaves.map(l.uG))),
                    e.loadingState !== n.Gu.IDLE &&
                      (e.loadingState = n.Gu.RESOLVE);
                } catch (t) {
                  i.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.loadingState !== n.Gu.IDLE &&
                      (e.loadingState = n.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = n.Gu.IDLE),
                (e.title = null),
                (e.items = (0, r.pj)([])),
                (e.errorStatusCode = null);
            },
          };
          return t;
        });
    },
    26141: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenresNotFoundPage: function () {
            return s;
          },
        });
      var i = a(8759),
        r = a(2365);
      let s = () => (0, i.jsx)(r.T, {});
    },
    83560: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenresPage: function () {
            return v;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(11769),
        l = a(99616),
        n = a(71716),
        o = a(1918),
        d = a(70579),
        u = a(13236),
        c = a(13212),
        m = a(5674),
        g = a(44285),
        p = a(73899),
        h = a.n(p);
      let v = (0, r.Pi)((e) => {
        let { navigationId: t } = e,
          { genres: a } = (0, m.oR)(),
          [r, p] = (0, u.zU)(),
          v = (0, m.k6)();
        return ((0, l.useEffect)(
          () => () => {
            a.reset();
          },
          [a, t],
        ),
        a.isNotFound && (0, s.notFound)(),
        t && a.loadingState === m.Gu.IDLE && (0, l.use)(a.getData(t)),
        (0, m.NO)(a.loadingState === m.Gu.RESOLVE),
        a.loadingState === m.Gu.REJECT)
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsxs)(u.I7, {
              scrollElement: r,
              outerTitle: a.title,
              children: [
                (0, i.jsx)(g.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: v.canBack,
                  children: (0, i.jsx)(o.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: a.title,
                  }),
                }),
                (0, i.jsx)(n.t, {
                  className: h().root,
                  containerClassName: h().content,
                  ref: p,
                  children: (0, i.jsx)("div", {
                    className: h().list,
                    children: a.items.map((e) =>
                      (0, i.jsx)(
                        c.mH,
                        { tag: e.tag, title: e.title, subGenres: e.subGenres },
                        e.tag,
                      ),
                    ),
                  }),
                }),
              ],
            });
      });
    },
    71486: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          KinopoiskNotFoundPage: function () {
            return o;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(99616),
        l = a(2365),
        n = a(5674);
      let o = (0, r.Pi)(() => {
        let { kinopoisk: e } = (0, n.oR)();
        return (
          (0, s.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, i.jsx)(l.T, {})
        );
      });
    },
    9702: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          KinopoiskPage: function () {
            return y;
          },
        });
      var i = a(8759),
        r = a(35338),
        s = a(33423),
        l = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(2814),
        u = a(48616),
        c = a(71716),
        m = a(1918),
        g = a(67678),
        p = a(70579),
        h = a(13236),
        v = a(5674),
        _ = a(44285),
        S = a(86422),
        b = a.n(S);
      let y = (0, s.Pi)(() => {
        let { experiments: e, kinopoisk: t, user: a } = (0, v.oR)(),
          { formatMessage: s } = (0, o.Z)(),
          [S, y] = (0, h.zU)();
        e.checkExperiment(v.pe.WebKinopoiskLanding, "on") || (0, l.notFound)(),
          t.landing.loadingState === v.Gu.IDLE &&
            (0, n.use)(
              t.landing.getSkeleton(
                { id: u.jB.KINOPOISK, showWizard: a.settings.showWizard },
                { preloadBlocks: 3 },
              ),
            ),
          (0, n.useEffect)(() => () => t.landing.reset(), [t.landing]),
          (0, v.NO)(t.landing.loadingState === v.Gu.RESOLVE);
        let f = (0, g._B)(t.landing);
        return (0, i.jsx)(v.Lh, {
          pageId: v.Rh.KINOPOISK,
          children: (0, i.jsxs)(h.I7, {
            scrollElement: S,
            outerTitle: s({ id: "navigation.page-kinopoisk" }),
            children: [
              (0, i.jsx)(_.h4, {
                variant: "text",
                showControls: !1,
                children: (0, i.jsxs)("div", {
                  className: b().header,
                  children: [
                    (0, i.jsx)(m.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      children: (0, i.jsx)(d.Z, {
                        id: "navigation.page-kinopoisk",
                      }),
                    }),
                    (0, i.jsx)(_.rU, {
                      className: (0, r.W)(
                        b().feedbackUrl,
                        b().feedbackUrl_outline,
                      ),
                      href: "https://forms.yandex.ru/surveys/13489904.1e94b26c50866632911c1069103b0902e6e40d54/",
                      children: (0, i.jsx)(m.Caption, {
                        variant: "span",
                        size: "m",
                        type: "text",
                        children: (0, i.jsx)(d.Z, {
                          id: "navigation.feedback",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, i.jsxs)(c.t, {
                className: b().root,
                containerClassName: b().content,
                ref: y,
                children: [
                  (0, i.jsx)("div", {
                    className: (0, r.W)(b().landing, {
                      [b().landing_onlyWizard]: f,
                    }),
                    children: (0, i.jsx)(g.Od, {
                      landing: t.landing,
                      errorComponent: (0, i.jsx)(p.D, {
                        className: b().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, i.jsx)(_.$_, { className: b().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    75773: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          NonMusicNotFoundPage: function () {
            return o;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(99616),
        l = a(2365),
        n = a(5674);
      let o = (0, r.Pi)(() => {
        let { nonMusic: e } = (0, n.oR)();
        return (
          (0, s.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, i.jsx)(l.T, {})
        );
      });
    },
    87278: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          NonMusicPage: function () {
            return y;
          },
        });
      var i = a(8759),
        r = a(35338),
        s = a(33423),
        l = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(2814),
        u = a(48616),
        c = a(71716),
        m = a(1918),
        g = a(67678),
        p = a(70579),
        h = a(13236),
        v = a(5674),
        _ = a(44285),
        S = a(37436),
        b = a.n(S);
      let y = (0, s.Pi)(() => {
        let { experiments: e, nonMusic: t, user: a } = (0, v.oR)(),
          { formatMessage: s } = (0, o.Z)(),
          [S, y] = (0, h.zU)();
        e.checkExperiment(v.pe.WebNextNonMusicLanding, "on") ||
          (0, l.notFound)(),
          t.landing.loadingState === v.Gu.IDLE &&
            (0, n.use)(
              t.landing.getSkeleton(
                { id: u.jB.WEB_NON_MUSIC, showWizard: a.settings.showWizard },
                { preloadBlocks: 3 },
              ),
            ),
          (0, n.useEffect)(() => () => t.landing.reset(), [t.landing]),
          (0, v.NO)(t.landing.loadingState === v.Gu.RESOLVE);
        let f = (0, g._B)(t.landing);
        return (0, i.jsx)(v.Lh, {
          pageId: v.Rh.NON_MUSIC,
          children: (0, i.jsxs)(h.I7, {
            scrollElement: S,
            outerTitle: s({ id: "navigation.page-non-music" }),
            children: [
              (0, i.jsx)(_.h4, {
                variant: "text",
                showControls: !1,
                children: (0, i.jsx)("div", {
                  className: b().header,
                  children: (0, i.jsx)(m.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    children: (0, i.jsx)(d.Z, {
                      id: "navigation.page-non-music",
                    }),
                  }),
                }),
              }),
              (0, i.jsxs)(c.t, {
                className: b().root,
                containerClassName: b().content,
                ref: y,
                children: [
                  (0, i.jsx)("div", {
                    className: (0, r.W)(b().landing, {
                      [b().landing_onlyWizard]: f,
                    }),
                    children: (0, i.jsx)(g.Od, {
                      landing: t.landing,
                      errorComponent: (0, i.jsx)(p.D, {
                        className: b().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, i.jsx)(_.$_, { className: b().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    30789: function (e, t, a) {
      "use strict";
      a.d(t, {
        i$: function () {
          return i.PlaylistPage;
        },
        nb: function () {
          return _;
        },
      });
      var i = a(49773);
      a(46924);
      var r = a(93043),
        s = a(96555),
        l = a(96431),
        n = a(20210),
        o = a(95539),
        d = a(5674);
      let u = (e, t) =>
          t.map((t) => {
            let a = e.find((e) => String(e.id) === t);
            return (null == a ? void 0 : a.albumId)
              ? "".concat(t, ":").concat(a.albumId)
              : t;
          }),
        c = (e, t) =>
          t.map((t) => {
            let a = e[t];
            return (null == a ? void 0 : a.albumId)
              ? "".concat(a.id, ":").concat(a.albumId)
              : String(null == a ? void 0 : a.id);
          }),
        m = (e, t) => {
          let { startIndex: a, endIndex: i } = t,
            r = [];
          for (let t = a; t <= i; t++) {
            var s, l;
            ((null === (s = e[t]) || void 0 === s ? void 0 : s.loadingState) ===
              d.Gu.IDLE ||
              (null === (l = e[t]) || void 0 === l
                ? void 0
                : l.loadingState) === d.Gu.REJECT) &&
              r.push(t);
          }
          return r;
        };
      var g = a(82436);
      let p = (e) => e.map((e) => (0, g.RN)(e.id, e.albumId || void 0)),
        h = s.V5.model("PlaylistItem", {
          id: s.V5.union(s.V5.string, s.V5.number),
          albumId: s.V5.maybeNull(s.V5.union(s.V5.string, s.V5.number)),
          key: s.V5.string,
          data: s.V5.maybeNull(o.le),
          loadingState: s.V5.enumeration(Object.values(d.Gu)),
        }),
        v = s.V5.model("PlaylistSearchItems", {
          playlistTrackIds: s.V5.maybeNull(s.V5.array(s.V5.string)),
          suggestedTrackIds: s.V5.maybeNull(s.V5.array(s.V5.string)),
          additionTrackInProggress: s.V5.maybeNull(s.V5.string),
          tracks: s.V5.maybeNull(s.V5.array(o.le)),
        })
          .views((e) => ({
            get suggestedTracks() {
              var t;
              return null === (t = e.suggestedTrackIds) || void 0 === t
                ? void 0
                : t.map((t) => {
                    var a;
                    return (
                      (null === (a = e.tracks) || void 0 === a
                        ? void 0
                        : a.find((e) => e.id === t)) || null
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
                        (null === (a = e.tracks) || void 0 === a
                          ? void 0
                          : a.find((e) => {
                              var a;
                              let i =
                                (null === (a = e.mainAlbum) || void 0 === a
                                  ? void 0
                                  : a.id) && t.includes(":")
                                  ? "".concat(e.id, ":").concat(e.mainAlbum.id)
                                  : e.id;
                              return i === t;
                            })) || null
                      );
                    })
              );
            },
          }))
          .actions((e) => ({
            setAdditionTrackAnimation(t) {
              e.additionTrackInProggress = t;
            },
            replaceAdditionTrackInProggress() {
              if (e.additionTrackInProggress) {
                var t, a;
                null === (t = e.playlistTrackIds) ||
                  void 0 === t ||
                  t.unshift(e.additionTrackInProggress),
                  (e.suggestedTrackIds = (0, s.pj)(
                    null === (a = e.suggestedTrackIds) || void 0 === a
                      ? void 0
                      : a.filter((t) => t !== e.additionTrackInProggress),
                  )),
                  (e.additionTrackInProggress = null);
              }
            },
            resetAdditionTrackAnimation() {
              e.additionTrackInProggress = null;
            },
          })),
        _ = s.V5.model("PlaylistPage", {
          meta: s.V5.maybeNull(n.Nn),
          items: s.V5.array(h),
          errorStatusCode: s.V5.maybeNull(s.V5.number),
          loadingState: s.V5.enumeration(Object.values(d.Gu)),
          similarPlaylists: s.V5.array(n.d2),
          searchLoadingState: s.V5.enumeration(Object.values(d.Gu)),
          searchItems: v,
        })
          .views((e) => ({
            get isNotFound() {
              return (
                e.loadingState === d.Gu.REJECT &&
                e.errorStatusCode === l.CN.NOT_FOUND
              );
            },
            get isLoading() {
              return (
                e.loadingState === d.Gu.PENDING || e.loadingState === d.Gu.IDLE
              );
            },
            get isSearchLoading() {
              return (
                e.searchLoadingState === d.Gu.PENDING ||
                e.searchLoadingState === d.Gu.IDLE
              );
            },
            get isDisabled() {
              var t;
              return (
                e.loadingState === d.Gu.RESOLVE &&
                (0 === e.items.length ||
                  !(null === (t = e.meta) || void 0 === t
                    ? void 0
                    : t.isAvailable))
              );
            },
            get isRejected() {
              return e.loadingState === d.Gu.REJECT;
            },
            get hasSimilarPlaylists() {
              return (
                e.loadingState === d.Gu.IDLE ||
                e.loadingState === d.Gu.PENDING ||
                e.similarPlaylists.length > 0
              );
            },
            get isEmptyPlaylist() {
              return 0 === e.items.length && e.loadingState === d.Gu.RESOLVE;
            },
            get contextMeta() {
              var a, i, r, n, o, u, c, m, g, p;
              return {
                isAvailable:
                  null === (a = e.meta) || void 0 === a
                    ? void 0
                    : a.isAvailable,
                id: e.meta.id,
                uid: null === (i = e.meta) || void 0 === i ? void 0 : i.uid,
                uuid: e.meta.uuid,
                kind: null === (r = e.meta) || void 0 === r ? void 0 : r.kind,
                title: null === (n = e.meta) || void 0 === n ? void 0 : n.title,
                coverUri:
                  null === (o = e.meta) || void 0 === o ? void 0 : o.coverUri,
                likesCount:
                  null === (u = e.meta) || void 0 === u ? void 0 : u.likesCount,
                averageColor:
                  null === (c = e.meta) || void 0 === c
                    ? void 0
                    : c.averageColor,
                owner: null === (m = e.meta) || void 0 === m ? void 0 : m.owner,
                description:
                  null === (g = e.meta) || void 0 === g
                    ? void 0
                    : g.description,
                modified:
                  null === (p = e.meta) || void 0 === p ? void 0 : p.modified,
              };
            },
            get isDragAndDropEnabled() {
              var h;
              if (!(0, s.fh)(e)) return !1;
              let { experiments: t } = (0, s.yj)(e);
              return !!(
                (null === (h = e.meta) || void 0 === h
                  ? void 0
                  : h.canUserChange) &&
                e.items.length > 1 &&
                t.checkExperiment(d.pe.WebNextPlaylistDnD, "on")
              );
            },
            get itemsKeys() {
              return e.items.map((e) => e.key);
            },
          }))
          .actions((e) => {
            let t = {
              getTracksByRange: (0, s.ls)(function* (t) {
                var a, i;
                let { startIndex: r, endIndex: l } = t,
                  { tracksResource: n, modelActionsLogger: u } = (0, s.dU)(e);
                if (
                  !(null === (a = e.meta) || void 0 === a ? void 0 : a.uid) ||
                  !(null === (i = e.meta) || void 0 === i ? void 0 : i.kind)
                )
                  return null;
                (r = Math.max(0, r)), (l = Math.min(l, e.items.length));
                let g = m(e.items, { startIndex: r, endIndex: l });
                try {
                  let t = c(e.items, g);
                  if (!t.length) return null;
                  g.forEach((t) => {
                    let a = e.items[t];
                    a && (a.loadingState = d.Gu.PENDING);
                  });
                  let a = yield n.getTracksMeta({
                    trackIds: t,
                    withProgress: !0,
                  });
                  g.forEach((t, i) => {
                    var r, s;
                    let l = null == a ? void 0 : a[i];
                    e.items[t] &&
                      l &&
                      (e.items[t] = {
                        id: l.id,
                        albumId:
                          (null === (s = l.albums) || void 0 === s
                            ? void 0
                            : null === (r = s[0]) || void 0 === r
                              ? void 0
                              : r.id) || null,
                        key: "".concat(l.id, "-").concat(t),
                        data: (0, o.Vt)(l),
                        loadingState: d.Gu.RESOLVE,
                      });
                  });
                } catch (t) {
                  u.error(t),
                    g.forEach((t) => {
                      let a = e.items[t];
                      a && (a.loadingState = d.Gu.REJECT);
                    });
                }
                return null;
              }),
              getSearchTracksMeta: (0, s.ls)(function* () {
                let { tracksResource: t, modelActionsLogger: a } = (0, s.dU)(e),
                  i = [...(e.searchItems.playlistTrackIds || [])].concat(
                    e.searchItems.suggestedTrackIds || [],
                  );
                try {
                  let a = yield t.getTracksMeta({
                    trackIds: i,
                    removeDuplicates: !0,
                  });
                  (e.searchItems.tracks = (0, s.pj)(
                    null == a ? void 0 : a.map(o.Vt),
                  )),
                    e.searchLoadingState !== d.Gu.IDLE &&
                      (e.searchLoadingState = d.Gu.RESOLVE);
                } catch (e) {
                  a.error(e);
                }
                return null;
              }),
              updateData: (0, s.ls)(function* (a) {
                var i;
                if ((null == a ? void 0 : a.error) === "not-found")
                  return (
                    (e.errorStatusCode = l.CN.NOT_FOUND),
                    (e.loadingState = d.Gu.REJECT),
                    null
                  );
                (e.similarPlaylists = (0, s.pj)(
                  null === (i = a.similarPlaylists) || void 0 === i
                    ? void 0
                    : i.map(n.VB),
                )),
                  (e.meta = (0, n.Q9)(a)),
                  (e.items = (0, s.pj)(
                    a.tracks.map((e, t) => ({
                      id: String(e.id),
                      albumId: e.albumId || null,
                      key: "".concat(e.id, "-").concat(t),
                      loadingState: d.Gu.IDLE,
                    })),
                  ));
                let { sonataState: r } = (0, s.yj)(e);
                return (
                  r.setUnloadedEntitiesData(p(e.items)),
                  yield t.getTracksByRange({ startIndex: 0, endIndex: 10 })
                );
              }),
              getPlaylistByUserIdAndKind: (0, s.ls)(function* (a) {
                let {
                    userId: i,
                    playlistKind: r,
                    resumeStream: n = !1,
                    trackMetaType: o,
                  } = a,
                  { usersResource: u, modelActionsLogger: c } = (0, s.dU)(e);
                if (e.loadingState !== d.Gu.PENDING)
                  try {
                    e.loadingState = d.Gu.PENDING;
                    let a = yield u.getPlaylistWithTracksIds({
                      userId: i,
                      playlistKind: r,
                      resumeStream: n,
                      trackMetaType: o,
                    });
                    if ("string" != typeof a.playlistUuid) {
                      (e.errorStatusCode = l.CN.NOT_FOUND),
                        (e.loadingState = d.Gu.REJECT);
                      return;
                    }
                    yield t.updateData(a), (e.loadingState = d.Gu.RESOLVE);
                  } catch (t) {
                    c.error(t),
                      t instanceof l.du &&
                        (t.statusCode === l.CN.NOT_FOUND ||
                          t.statusCode === l.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = l.CN.NOT_FOUND),
                      (e.loadingState = d.Gu.REJECT);
                  }
              }),
              getSearchTracks: (0, s.ls)(function* (a) {
                let { uid: i, kind: r, part: n = "" } = a,
                  { searchPlaylistResource: o, modelActionsLogger: c } = (0,
                  s.dU)(e);
                if (e.searchLoadingState !== d.Gu.PENDING && n.length)
                  try {
                    e.searchLoadingState = d.Gu.PENDING;
                    let {
                        playlistTrackIds: a = [],
                        suggestedTrackIds: l = [],
                      } = yield o.getTrackIds({ uid: i, kind: r, part: n }),
                      c = u(e.items, a);
                    (e.searchItems.playlistTrackIds = (0, s.pj)(c)),
                      (e.searchItems.suggestedTrackIds = (0, s.pj)(l)),
                      t.getSearchTracksMeta();
                  } catch (t) {
                    c.error(t),
                      t instanceof l.du &&
                        (t.statusCode === l.CN.NOT_FOUND ||
                          t.statusCode === l.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = l.CN.NOT_FOUND),
                      e.searchLoadingState !== d.Gu.IDLE &&
                        (e.searchLoadingState = d.Gu.REJECT);
                  }
              }),
              getPlaylistByUuid: (0, s.ls)(function* (a) {
                let {
                    playlistUuid: i,
                    richTracks: r = !1,
                    resumeStream: n = !1,
                  } = a,
                  { playlistResource: o, modelActionsLogger: u } = (0, s.dU)(e);
                if (e.loadingState !== d.Gu.PENDING)
                  try {
                    e.loadingState = d.Gu.PENDING;
                    let a = yield o.getPlaylist({
                      playlistUuid: i,
                      resumeStream: n,
                      richTracks: r,
                    });
                    yield t.updateData(a),
                      e.loadingState !== d.Gu.IDLE &&
                        (e.loadingState = d.Gu.RESOLVE);
                  } catch (t) {
                    u.error(t),
                      t instanceof l.du &&
                        (t.statusCode === l.CN.NOT_FOUND ||
                          t.statusCode === l.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = l.CN.NOT_FOUND),
                      e.loadingState !== d.Gu.IDLE &&
                        (e.loadingState = d.Gu.REJECT);
                  }
              }),
              moveTrack(t, a) {
                let i = (0, r.ZN)(e.items[t]);
                if (
                  !(t < 0) &&
                  !(a < 0) &&
                  !(t >= e.items.length) &&
                  !(a >= e.items.length) &&
                  i &&
                  (e.items.splice(t, 1), e.items.splice(a, 0, i), (0, s.fh)(e))
                ) {
                  let { sonataState: t } = (0, s.yj)(e);
                  t.setUnloadedEntitiesData(p(e.items));
                }
              },
              removeTracksFromItems(t, a) {
                e.items.splice(t, a);
              },
              resetSearch() {
                (e.searchItems.playlistTrackIds = null),
                  (e.searchItems.suggestedTrackIds = null),
                  (e.searchItems.additionTrackInProggress = null),
                  (e.searchItems.tracks = null),
                  (e.searchLoadingState = d.Gu.IDLE);
              },
              reset() {
                let { sonataState: a } = (0, s.yj)(e);
                a.resetUnloadedEntitiesData(),
                  (e.meta = null),
                  (e.loadingState = d.Gu.IDLE),
                  (e.items = (0, s.pj)([])),
                  (e.similarPlaylists = (0, s.pj)([])),
                  (e.errorStatusCode = null),
                  t.resetSearch();
              },
              refresh() {
                var a, i;
                (null === (a = e.meta) || void 0 === a ? void 0 : a.uuid) &&
                  t.getPlaylistByUuid({
                    playlistUuid:
                      null === (i = e.meta) || void 0 === i ? void 0 : i.uuid,
                    resumeStream: !1,
                  });
              },
            };
            return t;
          });
    },
    46924: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          PlaylistNotFoundPage: function () {
            return l;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(2365);
      let l = (0, r.Pi)(() => (0, i.jsx)(s.T, {}));
    },
    49773: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          PlaylistPage: function () {
            return H;
          },
        });
      var i = a(8759),
        r = a(35338),
        s = a(33423),
        l = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(27287),
        u = a(48157),
        c = a(79765),
        m = a(2814),
        g = a(9227),
        p = a(1918),
        h = a(20210),
        v = a(95539),
        _ = a(3515),
        S = a(5674),
        b = a(44285),
        y = a(57413);
      let f = (e, t) => {
        let a = e.id,
          i = e.albumId;
        return {
          contextData: {
            type: y.Ak.Various,
            meta: { id: i ? "".concat(a, ":").concat(i) : a },
            from: t,
          },
          queueParams: { index: 0 },
          loadContextMeta: !0,
        };
      };
      var C = a(95431),
        E = a.n(C);
      let x = (0, s.Pi)((e) => {
        var t, a, s, l, d, u, y;
        let { autoFocus: C, onChange: x, className: N } = e,
          { formatMessage: P } = (0, o.Z)(),
          [I, L] = (0, n.useState)(""),
          { playlist: k } = (0, S.oR)(),
          A = null == k ? void 0 : k.searchItems,
          T = (0, v.Wc)(),
          j = (0, n.useRef)(0),
          G = (null === (t = k.meta) || void 0 === t ? void 0 : t.isOwnPlaylist)
            ? S.Rh.OWN_PLAYLISTS
            : S.Rh.PLAYLIST,
          D = (0, S.x5)({ pageId: G, blockId: S.aU.FILTERED }),
          R = (0, S.x5)({ pageId: G, blockId: S.aU.SUGGESTED }),
          [V, O] = (0, n.useState)(!1);
        (0, n.useEffect)(
          () => () => {
            window.clearTimeout(j.current), null == x || x(!1);
          },
          [x],
        );
        let w = (0, n.useMemo)(
            () =>
              (0, c.Z)((e) => {
                let t = e.trim();
                L(t),
                  t &&
                    (null == k ? void 0 : k.meta) &&
                    (k.resetSearch(),
                    k.getSearchTracks({
                      uid: k.meta.uid,
                      kind: k.meta.kind,
                      part: t,
                    })),
                  (!t || 0 === t.length) && V && (O(!1), k.refresh()),
                  null == x || x(!!t.length);
              }, 100),
            [k, V, x],
          ),
          B = (0, n.useCallback)(
            async (e) => {
              if (k.meta) {
                A.setAdditionTrackAnimation(e.id);
                let t = T({
                    track: e,
                    playlist: k.meta,
                    withSuccessNotification: !1,
                    withPageRefresh: !1,
                  }),
                  a = new Promise((e) => {
                    j.current = window.setTimeout(e, 300);
                  }),
                  [i] = await Promise.all([t, a]);
                i === _.pX.OK
                  ? (A.replaceAdditionTrackInProggress(), O(!0))
                  : A.resetAdditionTrackAnimation();
              }
            },
            [T, k.meta, A],
          ),
          M = (0, n.useMemo)(() => {
            var e;
            return k.isSearchLoading
              ? (0, i.jsx)(b.DX, {
                  isActive: !0,
                  className: E().shimmerItem,
                  variant: S.Lx.PLAYLIST,
                })
              : null == A
                ? void 0
                : null === (e = A.playlistTracks) || void 0 === e
                  ? void 0
                  : e.map((e) =>
                      e
                        ? (0, i.jsx)(
                            v.O2,
                            {
                              className: (0, r.W)(E().track, {
                                [E().appearingTrack]:
                                  e.id === A.additionTrackInProggress,
                              }),
                              track: e,
                              playContextParams: f(e, D),
                              shouldCheckSelfIndex: !1,
                            },
                            e.id,
                          )
                        : null,
                    );
          }, [
            k.isSearchLoading,
            null == A ? void 0 : A.playlistTracks,
            A.additionTrackInProggress,
            D,
          ]),
          U = (0, n.useMemo)(() => {
            var e, t;
            return (
              null === (e = k.meta) || void 0 === e ? void 0 : e.canUserChange
            )
              ? k.isSearchLoading
                ? (0, i.jsx)(b.DX, {
                    isActive: !0,
                    className: E().shimmerItem,
                    variant: S.Lx.PLAYLIST,
                  })
                : null == A
                  ? void 0
                  : null === (t = A.suggestedTracks) || void 0 === t
                    ? void 0
                    : t.map((e) =>
                        e
                          ? (0, i.jsx)(
                              v.VZ,
                              {
                                track: e,
                                className: (0, r.W)({
                                  [E().disappearingTrack]:
                                    e.id === A.additionTrackInProggress,
                                }),
                                shouldCheckSelfIndex: !1,
                                playContextParams: f(e, R),
                                onClick: B,
                              },
                              e.id,
                            )
                          : null,
                      )
              : void 0;
          }, [
            null === (a = k.meta) || void 0 === a ? void 0 : a.canUserChange,
            k.isSearchLoading,
            null == A ? void 0 : A.suggestedTracks,
            A.additionTrackInProggress,
            R,
            B,
          ]),
          F = (0, n.useMemo)(() => {
            var e, t;
            return (null == A
              ? void 0
              : null === (e = A.playlistTrackIds) || void 0 === e
                ? void 0
                : e.length) ||
              (null == A
                ? void 0
                : null === (t = A.suggestedTracks) || void 0 === t
                  ? void 0
                  : t.length) ||
              k.isSearchLoading
              ? null
              : (0, i.jsx)(h.vY, {
                  className: E().emptyBlockContainer,
                  isEmptySearch: !0,
                });
          }, [
            null == A
              ? void 0
              : null === (s = A.playlistTrackIds) || void 0 === s
                ? void 0
                : s.length,
            null == A
              ? void 0
              : null === (l = A.suggestedTracks) || void 0 === l
                ? void 0
                : l.length,
            k.isSearchLoading,
          ]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(g.M, {
              className: (0, r.W)(E().root, N),
              autoFocus: C,
              initialValue: I,
              correctedValue: null,
              placeholder: P({ id: "search.track-placeholder" }),
              onChange: w,
              resetButtonAriaLabel: P({
                id: "interface-actions.reset-search-input",
              }),
              onResetClick: k.resetSearch,
            }),
            I &&
              (0, i.jsxs)("div", {
                className: E().content,
                children: [
                  F,
                  M,
                  Number(
                    null == A
                      ? void 0
                      : null === (d = A.suggestedTracks) || void 0 === d
                        ? void 0
                        : d.length,
                  ) > 0 &&
                    (null === (u = k.meta) || void 0 === u
                      ? void 0
                      : u.canUserChange) &&
                    (0, i.jsx)(
                      p.Caption,
                      {
                        variant: "div",
                        type: "text",
                        size: "s",
                        weight: "medium",
                        className: (0, r.W)(E().catalog, {
                          [E().catalog_withTracks]:
                            null == A
                              ? void 0
                              : null === (y = A.playlistTrackIds) ||
                                  void 0 === y
                                ? void 0
                                : y.length,
                        }),
                        children: (0, i.jsx)(m.Z, {
                          id: "search.search-catalog",
                        }),
                      },
                      "search.search-catalog-caption",
                    ),
                  U,
                ],
              }),
          ],
        });
      });
      var N = a(13236),
        P = a(90598),
        I = a.n(P),
        L = a(3786),
        k = a(63690),
        A = a.n(k);
      let T = (0, s.Pi)(
        (0, n.forwardRef)((e, t) => {
          var a;
          let { children: s, "data-index": l, ...o } = e,
            { playlist: d } = (0, S.oR)(),
            {
              isDragging: u,
              listeners: c,
              setNodeRef: m,
              transform: g,
              transition: p,
              attributes: h,
            } = (0, L.nB)({
              id: String(
                null === (a = d.items[l]) || void 0 === a ? void 0 : a.key,
              ),
            }),
            v = (0, n.useCallback)(
              (e) => {
                m(e), "function" == typeof t && t(e);
              },
              [t, m],
            ),
            _ = {
              transition: p,
              "--translate-y": g ? "".concat(Math.round(g.y), "px") : void 0,
            };
          return (0, i.jsx)("div", {
            ref: v,
            "data-index": l,
            style: _,
            ...o,
            className: A().root,
            children: (0, i.jsx)("div", {
              className: (0, r.W)(A().inner, { [A().dragging]: u }),
              ...c,
              ...h,
              children: s,
            }),
          });
        }),
      );
      var j = a(2050),
        G = a(44757),
        D = a(98786);
      let R = (e, t) => {
          var a;
          let i = t - 1;
          if (!e.items.length || i < 0 || i > e.items.length) return "";
          let r = e.items[i];
          return (
            (null == r
              ? void 0
              : null === (a = r.data) || void 0 === a
                ? void 0
                : a.title) || ""
          );
        },
        V = (e) => {
          let { formatMessage: t } = (0, o.Z)(),
            a = {
              draggable: t({ id: "drag-and-drop.playlist-move-instructions" }),
            };
          return {
            screenReaderInstructions: a,
            announcements: {
              onDragStart(a) {
                let { active: i } = a,
                  r = R(e, Number(i.id)),
                  s = i.id;
                return t(
                  { id: "drag-and-drop.playlist-on-move-start" },
                  { trackName: r, index: s },
                );
              },
              onDragOver(a) {
                let { active: i, over: r } = a,
                  s = R(e, Number(i.id));
                if (r) {
                  let e = r.id;
                  return t(
                    { id: "drag-and-drop.playlist-on-move" },
                    { trackName: s, index: e },
                  );
                }
                return t(
                  { id: "drag-and-drop.playlist-on-move-fail" },
                  { trackName: s },
                );
              },
              onDragEnd(a) {
                let { active: i, over: r } = a,
                  s = R(e, Number(i.id));
                if (r) {
                  let e = r.id;
                  return t(
                    { id: "drag-and-drop.playlist-on-move-end-with-index" },
                    { trackName: s, index: e },
                  );
                }
                return t(
                  { id: "drag-and-drop.playlist-on-move-end" },
                  { trackName: s },
                );
              },
              onDragCancel: () =>
                t({ id: "drag-and-drop.playlist-on-move-cancel" }),
            },
          };
        },
        O = (e) => {
          let { notify: t } = (0, S.d$)(),
            { formatMessage: a } = (0, o.Z)();
          return (0, n.useCallback)(
            async (r) => {
              var s, l, n, o;
              let { from: d, to: u } = r;
              if (d < 0 || u < 0 || d >= e.items.length || u >= e.items.length)
                return;
              let c = String(
                null === (s = e.items[d]) || void 0 === s ? void 0 : s.id,
              );
              if (!c) return;
              let m = (
                null === (l = e.items[d]) || void 0 === l ? void 0 : l.albumId
              )
                ? Number(
                    null === (n = e.items[d]) || void 0 === n
                      ? void 0
                      : n.albumId,
                  )
                : void 0;
              e.moveTrack(d, u);
              let g = await (null === (o = e.meta) || void 0 === o
                ? void 0
                : o.changePlaylist(
                    (0, _.PG)({
                      operation: _.aL.MOVE,
                      startPosition: d,
                      endPosition: u,
                      tracks: [{ id: c, albumId: m }],
                    }),
                  ));
              (g && g === _.pX.OK) ||
                (g === _.pX.RELOAD ? e.refresh() : e.moveTrack(u, d),
                t(
                  (0, i.jsx)(b.Q, {
                    error: a({ id: "drag-and-drop.failed-to-move" }),
                  }),
                  { containerId: S.W$.ERROR },
                ));
            },
            [a, t, e],
          );
        };
      var w = a(81711),
        B = a.n(w);
      let M = (0, s.Pi)((e) => {
        var t, a;
        let r,
          { index: s, className: l } = e,
          { playlist: n, experiments: o, sonataState: d } = (0, S.oR)(),
          u =
            o.checkExperiment(S.pe.WebNextPlaylistAddition, "on") &&
            (null === (t = n.meta) || void 0 === t ? void 0 : t.isOwnPlaylist),
          c = (0, S.x5)({ pageId: S.Rh.PLAYLIST, blockId: S.aU.PLAYLIST }),
          m = n.items[s];
        return n.isEmptyPlaylist && u
          ? (0, i.jsx)(h.vY, { className: B().emptyBlockContainer })
          : ((r =
              m && m.data && n.meta
                ? m.data.isTrackPodcast ||
                  (null === (a = m.data.mainAlbum) || void 0 === a
                    ? void 0
                    : a.isPodcast)
                  ? (0, i.jsx)(v.N6, {
                      withPodcastName: !0,
                      track: m.data,
                      hasDuplicatesBefore: (0, _.BA)(n.items, m, s),
                      playContextParams: {
                        contextData: {
                          type: y.Ak.Playlist,
                          meta: n.contextMeta,
                          from: c,
                        },
                        entitiesData: d.unloadedEntitiesDataFromModels,
                        queueParams: { index: s },
                        loadContextMeta: !0,
                      },
                      className: l,
                    })
                  : (0, i.jsx)(v.O2, {
                      track: m.data,
                      hasDuplicatesBefore: (0, _.BA)(n.items, m, s),
                      playContextParams: {
                        contextData: {
                          type: y.Ak.Playlist,
                          meta: n.contextMeta,
                          from: c,
                        },
                        entitiesData: d.unloadedEntitiesDataFromModels,
                        queueParams: { index: s },
                        loadContextMeta: !0,
                      },
                      className: l,
                    })
                : (0, i.jsx)(b.DX, {
                    isActive: !0,
                    className: B().shimmerItem,
                    variant: S.Lx.PLAYLIST,
                  })),
            (0, i.jsx)(_.jK.Provider, {
              value: { playlist: n.meta, trackIndex: s },
              children: r,
            }));
      });
      var U = a(43601),
        F = a.n(U);
      let W = (0, s.Pi)((e) => {
          let { children: t, playlist: a } = e,
            { announcements: r, screenReaderInstructions: s } = V(a),
            l = O(a),
            o = (0, j.Dy)(
              (0, j.VT)(j.MA, {
                activationConstraint: { distance: { y: 1 }, tolerance: 5 },
              }),
              (0, j.VT)(j.LO, {
                activationConstraint: { delay: 250, tolerance: 5 },
              }),
              (0, j.VT)(j.Lg, {
                coordinateGetter: L.is,
                keyboardCodes: {
                  start: ["Enter"],
                  cancel: ["Escape"],
                  end: ["Enter"],
                },
              }),
            ),
            [d, u] = (0, n.useState)(null),
            c = (0, n.useCallback)((e) => {
              let { active: t } = e;
              u(t.id);
            }, []),
            m = (0, n.useCallback)(
              (e) => {
                let { active: t, over: i } = e;
                if (!t.id || !(null == i ? void 0 : i.id)) return;
                let r = a.itemsKeys.indexOf(String(t.id)),
                  s = a.itemsKeys.indexOf(String(i.id));
                Number.isInteger(r) &&
                  Number.isInteger(s) &&
                  l({ from: r, to: s });
              },
              [l, a.itemsKeys],
            ),
            g = (0, n.useCallback)(() => {
              u(null);
            }, []),
            p = (0, n.useMemo)(
              () => a.itemsKeys.indexOf(String(d)),
              [d, a.itemsKeys],
            );
          return a.isDragAndDropEnabled
            ? (0, i.jsxs)(j.LB, {
                sensors: o,
                collisionDetection: j.pE,
                onDragStart: c,
                onDragEnd: m,
                onDragCancel: g,
                modifiers: [G.DL, G.F4],
                accessibility: {
                  announcements: r,
                  screenReaderInstructions: s,
                },
                children: [
                  (0, i.jsx)("div", {
                    className: F().root,
                    children: (0, i.jsx)(L.Fo, {
                      items: a.itemsKeys,
                      strategy: L.qw,
                      children: t,
                    }),
                  }),
                  (0, D.createPortal)(
                    (0, i.jsx)(j.y9, {
                      dropAnimation: { duration: 0 },
                      children: d
                        ? (0, i.jsx)("div", {
                            className: F().draggableItemWrapper,
                            children: (0, i.jsx)(M, {
                              index: p,
                              className: F().noHoverItem,
                            }),
                          })
                        : null,
                    }),
                    window.document.body,
                  ),
                ],
              })
            : t;
        }),
        H = (0, s.Pi)((e) => {
          var t, a, s;
          let { userId: c, kind: m, playlistUuid: g } = e,
            p = (0, n.useRef)(0),
            { notify: v } = (0, S.d$)(),
            { playlist: _, experiments: y } = (0, S.oR)(),
            { formatMessage: f } = (0, o.Z)(),
            { ref: C, offsetY: E } = (0, d.e)(),
            [P, L] = (0, N.zU)(),
            k = (0, n.useMemo)(() => {
              var e;
              return (0, S.XG)(
                null == _
                  ? void 0
                  : null === (e = _.meta) || void 0 === e
                    ? void 0
                    : e.averageColor,
              );
            }, [
              null == _
                ? void 0
                : null === (t = _.meta) || void 0 === t
                  ? void 0
                  : t.averageColor,
            ]),
            [A, j] = (0, N.at)(k, E),
            G =
              y.checkExperiment(S.pe.WebNextPlaylistAddition, "on") &&
              (null === (a = _.meta) || void 0 === a
                ? void 0
                : a.isOwnPlaylist),
            [D, R] = (0, n.useState)(!1),
            V = y.checkExperiment(S.pe.WebNextPlaylistAddition, "on");
          (0, n.useEffect)(
            () => () => {
              _.reset(), (p.current = 0);
            },
            [_, g, c, m],
          );
          let O = (0, n.useMemo)(
            () => () => {
              (_.isRejected || (!_.meta && !_.isLoading)) &&
                p &&
                !(p.current > 0) &&
                (v(
                  (0, i.jsx)(b.Q, {
                    error: f({
                      id: "playlist-errors.error-during-loading-playlist",
                    }),
                  }),
                  { containerId: S.W$.ERROR },
                ),
                p.current++);
            },
            [_.isRejected, _.meta, _.isLoading, v, f],
          );
          O(),
            _.loadingState === S.Gu.IDLE &&
              ("string" == typeof g
                ? (0, n.use)(
                    _.getPlaylistByUuid({ playlistUuid: g, resumeStream: !1 }),
                  )
                : "string" == typeof c &&
                  "string" == typeof m &&
                  (0, n.use)(
                    _.getPlaylistByUserIdAndKind({
                      userId: c,
                      playlistKind: Number(m),
                      resumeStream: !1,
                    }),
                  )),
            (0, S.NO)(_.loadingState === S.Gu.RESOLVE),
            _.isNotFound && (0, l.notFound)();
          let w = (0, n.useMemo)(
              () =>
                _.isLoading || !_.meta || _.isRejected
                  ? (0, i.jsx)(u.KC, { className: I().header })
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(u.Vm, {
                          playlist: _.meta,
                          isDisabled: _.isDisabled,
                          className: I().header,
                          ref: C,
                        }),
                        V &&
                          (0, i.jsx)(x, {
                            autoFocus: !_.items.length,
                            onChange: R,
                          }),
                      ],
                    }),
              [_.isDisabled, _.isLoading, _.meta, _.isRejected, C, _.items, V],
            ),
            B = (0, n.useMemo)(
              () => ({
                Header: () => w,
                Item: _.isDragAndDropEnabled ? T : void 0,
                Footer: () =>
                  (0, i.jsxs)("div", {
                    className: I().footerContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: I().carouselBlocks,
                        children:
                          _.hasSimilarPlaylists &&
                          (0, i.jsx)(S.J, {
                            blockId: S.BE.PLAYLISTS_SIMILAR_PLAYLIST,
                            blockType: S.BE.PLAYLISTS_SIMILAR_PLAYLIST,
                            blockPosX: 1,
                            blockPosY: 2,
                            blockIdForFrom: S.BE.PLAYLISTS_SIMILAR_PLAYLIST,
                            objectsCount: _.similarPlaylists.length,
                            children: (0, i.jsx)(h.VD, {
                              isShimmerVisible: _.isLoading,
                              isShimmerActive: !0,
                              className: I().carouselContainer,
                              headerClassName: (0, r.W)(
                                I().carouselBlockHeader,
                                I().carouselBlock,
                              ),
                              containerClassName: I().carouselBlock,
                              title: f({
                                id: "entity-names.similar-playlists",
                              }),
                              playlists: _.similarPlaylists,
                            }),
                          }),
                      }),
                      !(_.isEmptyPlaylist && G) &&
                        (0, i.jsx)(b.$_, { className: I().footer }),
                    ],
                  }),
              }),
              [
                _.isDragAndDropEnabled,
                _.hasSimilarPlaylists,
                _.similarPlaylists,
                _.isLoading,
                _.isEmptyPlaylist,
                w,
                f,
                G,
              ],
            ),
            U = (0, n.useCallback)(
              (e) => {
                _.getTracksByRange(e);
              },
              [_],
            ),
            F = (0, n.useCallback)(
              (e) => {
                var t;
                return null === (t = _.items[e]) || void 0 === t
                  ? void 0
                  : t.key;
              },
              [_.items],
            ),
            H = (0, n.useCallback)((e) => e, []),
            z = _.items.length || (G ? 1 : 0);
          return (0, i.jsx)(S.Lh, {
            pageId: S.Rh.PLAYLIST,
            children: (0, i.jsxs)(N.I7, {
              scrollElement: P,
              children: [
                (0, i.jsx)(b.h4, { style: j }),
                (0, i.jsx)("div", {
                  className: I().averageColorBackground,
                  style: A,
                }),
                (0, i.jsx)(W, {
                  playlist: _,
                  children: (0, i.jsx)(b.Wv, {
                    context: {
                      listAriaLabel: f(
                        { id: "entity-names.playlist-tracks-list" },
                        {
                          playlistName:
                            (null === (s = _.meta) || void 0 === s
                              ? void 0
                              : s.title) || "",
                        },
                      ),
                    },
                    className: (0, r.W)(I().root, I().important),
                    listClassName: I().content,
                    customComponents: B,
                    computeItemKey: _.isDragAndDropEnabled ? F : H,
                    totalCount: D ? 0 : z,
                    itemContentCallback: (e) => (0, i.jsx)(M, { index: e }),
                    onGetDataByRange: U,
                    debounceDurationInMs: 300,
                    initialItemCount: _.items.length,
                    handleRef: L,
                    shouldTriggerRangeChangedOnTotalCountChange: !0,
                  }),
                }),
              ],
            }),
          });
        });
    },
    63173: function (e, t, a) {
      "use strict";
      a.d(t, {
        s6: function () {
          return i.PostPage;
        },
        vU: function () {
          return m;
        },
      });
      var i = a(66048);
      a(76674);
      var r = a(96555),
        s = a(96431),
        l = a(65237),
        n = a(96911),
        o = a(20210),
        d = a(81446),
        u = a(3515),
        c = a(5674);
      let m = r.V5.model("PostPage", {
        errorStatusCode: r.V5.maybe(r.V5.number),
        loadingState: r.V5.enumeration(Object.values(c.Gu)),
        title: r.V5.maybeNull(r.V5.string),
        promotionType: r.V5.maybeNull(r.V5.enumeration(Object.values(l.qe))),
        artists: r.V5.maybe(r.V5.array(d.Go)),
        albums: r.V5.maybe(r.V5.array(n.ug)),
        playlists: r.V5.maybe(r.V5.array(o.d2)),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === c.Gu.IDLE || e.loadingState === c.Gu.PENDING
            );
          },
          get isNotFound() {
            let t =
              e.errorStatusCode === s.CN.NOT_FOUND ||
              e.errorStatusCode === s.CN.BAD_REQUEST;
            return e.loadingState === c.Gu.REJECT && t;
          },
          get isSomethingWrong() {
            return e.loadingState === c.Gu.REJECT && !this.isNotFound;
          },
        }))
        .actions((e) => {
          let t = {
            getData: (0, r.ls)(function* (t) {
              let { promoId: a } = t,
                { feedResource: i, modelActionsLogger: l } = (0, r.dU)(e);
              if (e.loadingState !== c.Gu.PENDING)
                try {
                  e.loadingState = c.Gu.PENDING;
                  let t = yield i.getPromotionsById({ promoId: a });
                  (e.title = t.title),
                    (e.promotionType = t.promotionType),
                    t.artists &&
                      t.artists.length > 0 &&
                      (e.artists = (0, r.pj)(t.artists.map(d.d))),
                    t.albums &&
                      t.albums.length > 0 &&
                      (e.albums = (0, r.pj)(t.albums.map(n.ym))),
                    t.playlists &&
                      t.playlists.length > 0 &&
                      (e.playlists = (0, r.pj)(
                        t.playlists.map((e) => {
                          let { playlist: t } = e;
                          return (0, u.PV)(t);
                        }),
                      )),
                    e.loadingState !== c.Gu.IDLE &&
                      (e.loadingState = c.Gu.RESOLVE);
                } catch (t) {
                  l.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.loadingState !== c.Gu.IDLE &&
                      (e.loadingState = c.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = c.Gu.IDLE),
                (e.title = null),
                (e.artists = (0, r.pj)([])),
                (e.albums = (0, r.pj)([]));
            },
          };
          return t;
        });
    },
    76674: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          PostNotFoundPage: function () {
            return l;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(2365);
      let l = (0, r.Pi)(() => (0, i.jsx)(s.T, {}));
    },
    66048: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          PostPage: function () {
            return j;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(11769),
        l = a(99616),
        n = a(48616),
        o = a(71716),
        d = a(12670),
        u = a(1918),
        c = a(70579),
        m = a(13236),
        g = a(5674),
        p = a(44285),
        h = a(18448),
        v = a.n(h);
      let _ = () =>
        (0, i.jsxs)("div", {
          className: v().root,
          children: [
            (0, i.jsx)(d.Shimmer, { radius: "l", className: v().top }),
            (0, i.jsx)(d.Shimmer, { radius: "l", className: v().bottom }),
          ],
        });
      var S = a(15697),
        b = a.n(S),
        y = a(96911),
        f = a(57551),
        C = a.n(f);
      let E = (0, r.Pi)((e) => {
        let { albums: t = [] } = e;
        return (0, i.jsx)("div", {
          className: C().root,
          children: (0, i.jsx)("div", {
            className: C().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                y.rf,
                { className: C().item, album: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var x = a(81546),
        N = a(74706),
        P = a.n(N);
      let I = (0, r.Pi)((e) => {
        let { artists: t = [] } = e;
        return (0, i.jsx)("div", {
          className: P().root,
          children: (0, i.jsx)("div", {
            className: P().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                x.IT,
                { className: P().item, artist: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var L = a(20210),
        k = a(95456),
        A = a.n(k);
      let T = (0, r.Pi)((e) => {
          let { playlists: t = [] } = e;
          return (0, i.jsx)("div", {
            className: A().root,
            children: (0, i.jsx)("div", {
              className: A().content,
              "aria-labelledby": "post-page-header",
              tabIndex: 0,
              children: t.map((e) =>
                (0, i.jsx)(
                  L.ZL,
                  { className: A().item, playlist: e, contentLinesCount: 3 },
                  e.id,
                ),
              ),
            }),
          });
        }),
        j = (0, r.Pi)((e) => {
          let { promoId: t } = e,
            { post: a } = (0, g.oR)(),
            r = (0, g.k6)(),
            [h, v] = (0, m.zU)();
          if (
            (t &&
              a.loadingState === g.Gu.IDLE &&
              (0, l.use)(a.getData({ promoId: t })),
            (0, l.useEffect)(
              () => () => {
                a.reset();
              },
              [a],
            ),
            a.isNotFound && (0, s.notFound)(),
            (0, g.NO)(a.loadingState === g.Gu.RESOLVE),
            a.isSomethingWrong)
          )
            return (0, i.jsx)(c.D, {});
          let S = (0, l.useMemo)(() => {
            if (a.isLoading) return (0, i.jsx)(_, {});
            switch (a.promotionType) {
              case n.qe.ARTISTS:
                return (0, i.jsx)(I, { artists: a.artists });
              case n.qe.ALBUMS:
                return (0, i.jsx)(E, { albums: a.albums });
              case n.qe.PLAYLISTS:
                return (0, i.jsx)(T, { playlists: a.playlists });
              default:
                (0, s.notFound)();
            }
          }, [a.albums, a.artists, a.isLoading, a.playlists, a.promotionType]);
          return (0, i.jsx)(g.Lh, {
            pageId: g.Rh.POST,
            children: (0, i.jsxs)(m.I7, {
              scrollElement: h,
              outerTitle: a.title || void 0,
              children: [
                (0, i.jsx)(p.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: r.canBack,
                  children: a.title
                    ? (0, i.jsx)(u.Heading, {
                        id: "post-header",
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: a.title,
                      })
                    : (0, i.jsx)(d.Shimmer, {
                        className: b().shimmerTitle,
                        radius: "l",
                      }),
                }),
                (0, i.jsx)(o.t, {
                  className: b().scrollableContainer,
                  ref: v,
                  children: (0, i.jsx)("div", {
                    className: b().container,
                    children: S,
                  }),
                }),
              ],
            }),
          });
        });
    },
    50950: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SearchHistoryPage: function () {
            return _;
          },
        });
      var i = a(8759),
        r = a(79765),
        s = a(33423),
        l = a(99616),
        n = a(65244),
        o = a(2814),
        d = a(15527),
        u = a(14581),
        c = a(71716),
        m = a(1918),
        g = a(16367),
        p = a(5674),
        h = a(54301),
        v = a.n(h);
      let _ = (0, s.Pi)(() => {
        var e;
        let t = (0, p.uK)(),
          a = t.get(p.U5),
          { search: s, user: h, settings: _, experiments: S } = (0, p.oR)(),
          { formatMessage: b } = (0, n.Z)(),
          y = (0, p.k6)(),
          f = (0, l.useRef)(!1),
          C = (0, g.vy)(() => {
            f.current = !0;
          }),
          E = _.layout === p.t8.Mobile,
          x = s.history.items.length;
        s.isHistoryReady &&
          (null === (e = h.account) || void 0 === e ? void 0 : e.uid) &&
          (0, l.use)(
            s.getHistory({ userId: h.account.uid, config: a, experiments: S }),
          ),
          (0, l.useEffect)(
            () => () => {
              (null == f ? void 0 : f.current)
                ? (s.resetHistoryItems(), (f.current = !1))
                : s.resetHistoryStateRequest();
            },
            [s],
          );
        let N = (0, l.useMemo)(
            () =>
              (0, r.Z)(() => {
                null == y || y.back();
              }, 200),
            [y],
          ),
          P = (0, l.useMemo)(
            () =>
              s.history.items.length
                ? (0, i.jsx)("div", {
                    className: v().items,
                    children: s.history.items.map(g.Fu).filter((e) => e),
                  })
                : (0, i.jsx)(m.Caption, {
                    className: v().emptyHistory,
                    variant: "div",
                    size: "m",
                    type: "text",
                    children: (0, i.jsx)(o.Z, { id: "search.history-empty" }),
                  }),
            [s.history.items],
          );
        return (0, i.jsx)("div", {
          className: v().root,
          children: (0, i.jsxs)(c.t, {
            className: v().scrollContent,
            containerClassName: v().scrollContainer,
            children: [
              (0, i.jsxs)("div", {
                className: v().header,
                children: [
                  (0, i.jsxs)("div", {
                    className: v().title,
                    children: [
                      y.canBack &&
                        (0, i.jsx)(d.z, {
                          "aria-label": b({ id: "navigation.go-back" }),
                          radius: "round",
                          disabled: !y.canBack,
                          size: "s",
                          icon: (0, i.jsx)(u.J, {
                            size: "xxs",
                            variant: "arrowLeft",
                          }),
                          onClick: N,
                        }),
                      (0, i.jsx)(m.Heading, {
                        variant: "h2",
                        size: E ? "m" : "xl",
                        children: (0, i.jsx)(o.Z, { id: "search.history" }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(d.z, {
                    "aria-label": b({ id: "search.clear-history" }),
                    radius: "xxxl",
                    variant: "outline",
                    disabled: !x,
                    size: E ? "s" : "default",
                    onClick: C,
                    children: (0, i.jsx)(m.Caption, {
                      variant: "span",
                      size: "m",
                      type: "text",
                      children: (0, i.jsx)(o.Z, { id: "search.clear-history" }),
                    }),
                  }),
                ],
              }),
              !s.isHistoryLoading && P,
            ],
          }),
        });
      });
    },
    7992: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SearchPage: function () {
            return f;
          },
        });
      var i = a(8759),
        r = a(35338),
        s = a(79765),
        l = a(33423),
        n = a(11769),
        o = a(99616),
        d = a(65244),
        u = a(48616),
        c = a(71716),
        m = a(9227),
        g = a(26265),
        p = a(22810),
        h = a(16367),
        v = a(5674),
        _ = a(44285);
      let S = [
        u.ay.TOP,
        u.ay.TRACK,
        u.ay.ALBUM,
        u.ay.ARTIST,
        u.ay.PLAYLIST,
        u.ay.PODCAST,
      ];
      var b = a(16894),
        y = a.n(b);
      let f = (0, l.Pi)(() => {
        let e = (0, g.useTabsState)(0),
          [t, a] = (0, o.useState)(u.ay.TOP),
          [l, b] = (0, o.useState)(!1),
          { formatMessage: f } = (0, d.Z)(),
          { search: C, experiments: E } = (0, v.oR)(),
          x = (0, v.uK)(),
          N = x.get(v.U5),
          P = S.filter((e) => {
            if (
              e !== u.ay.PODCAST ||
              N.features.nonMusic ||
              E.checkExperiment(v.pe.WebNextPodcastSearch, "on")
            )
              return e;
          });
        E.checkExperiment(v.pe.WebNextDisableSearch, "on") &&
          (0, n.redirect)("/");
        let [I, L] = (0, o.useState)(""),
          k = I.length > 0;
        (0, o.useEffect)(
          () => () => {
            C.reset();
          },
          [C],
        );
        let A = (0, o.useCallback)(
            (e, t) => {
              C.resetResults();
              let a = 0 === e.length;
              a ||
                C.getSearchResults({
                  text: decodeURIComponent(e),
                  filter: t,
                  config: N,
                  experiments: E,
                });
            },
            [C, N, E],
          ),
          T = (0, o.useCallback)(
            (e) => {
              let a = e.trim(),
                i = encodeURIComponent(a);
              L(i), A(i, t), C.resetSearchCorrectedText(), b(!1);
            },
            [C, A, t, b],
          ),
          j = (0, o.useCallback)(() => {
            b(!0);
          }, [b]),
          G = (0, o.useMemo)(
            () =>
              (0, s.Z)((t) => {
                var i;
                if (!e.onTabChange || t === e.value) return;
                e.onTabChange(t);
                let r = null !== (i = S[t]) && void 0 !== i ? i : u.ay.TOP;
                a(r), A(I, r);
              }, 300),
            [A, I, e],
          ),
          D = (0, o.useMemo)(
            () => (e) => {
              let {
                id: t,
                type: a,
                blockPosition: i,
                position: r,
                feedbackType: s,
              } = e;
              C.sendFeedback({
                blockType: a,
                entityId: "".concat(a, ":").concat(t),
                timestamp: new Date().toISOString(),
                searchRequestId: C.searchRequestId,
                query: I,
                clickType: s,
                blockPosition: i,
                position: r,
                page: 0,
              });
            },
            [C, I],
          ),
          R = (0, o.useMemo)(
            () =>
              C.searchCorrectedText
                ? (0, i.jsx)(h.gK, {
                    searchCorrectedText: C.searchCorrectedText,
                    onCorrectText: j,
                  })
                : null,
            [j, C.searchCorrectedText],
          ),
          V = (0, o.useMemo)(() => {
            if (!C.isLoading && 0 === C.results.length)
              return (0, i.jsx)(h.hF, { searchCorrectedText: R });
            switch (t) {
              case u.ay.TOP:
                return (0, i.jsx)(h.Id, {
                  className: y().searchResults,
                  isLoading: C.isLoading,
                  results: C.results,
                  sendSearchFeedback: D,
                  searchCorrectedText: R,
                });
              case u.ay.TRACK:
                return (0, i.jsx)(h.XM, {
                  className: y().searchResults,
                  isLoading: C.isLoading,
                  results: C.results,
                  sendSearchFeedback: D,
                  searchCorrectedText: R,
                });
              case u.ay.ALBUM:
                return (0, i.jsx)(h.xz, {
                  className: y().searchResults,
                  isLoading: C.isLoading,
                  results: C.results,
                  filter: u.ay.ALBUM,
                  sendSearchFeedback: D,
                  searchCorrectedText: R,
                });
              case u.ay.PLAYLIST:
                return (0, i.jsx)(h.xz, {
                  className: y().searchResults,
                  isLoading: C.isLoading,
                  results: C.results,
                  filter: u.ay.PLAYLIST,
                  sendSearchFeedback: D,
                  searchCorrectedText: R,
                });
              case u.ay.ARTIST:
                return (0, i.jsx)(h.xz, {
                  className: y().searchResults,
                  isLoading: C.isLoading,
                  results: C.results,
                  filter: u.ay.ARTIST,
                  sendSearchFeedback: D,
                  searchCorrectedText: R,
                });
              case u.ay.PODCAST:
                return (0, i.jsx)(h.R_, {
                  className: y().searchResults,
                  isLoading: C.isLoading,
                  results: C.results,
                  sendSearchFeedback: D,
                  searchCorrectedText: R,
                });
              default:
                return R;
            }
          }, [C.isLoading, C.results, t, D, R]),
          O = (0, o.useMemo)(
            () =>
              I.length > 0
                ? V
                : (0, i.jsxs)(c.t, {
                    className: y().scrollableContent,
                    containerClassName: y().main,
                    children: [
                      (0, i.jsx)(o.Suspense, {
                        children: (0, i.jsx)(v.J, {
                          blockId: v.BE.SEARCH_HISTORY,
                          blockType: v.BE.SEARCH_HISTORY,
                          blockPosX: 1,
                          blockPosY: 1,
                          blockIdForFrom: v.BE.SEARCH_HISTORY,
                          objectsCount: C.history.items.length,
                          children: (0, i.jsx)(h.y9, {}),
                        }),
                      }),
                      (0, i.jsx)(o.Suspense, {
                        children: (0, i.jsx)(p.JG, {}),
                      }),
                      (0, i.jsx)(_.$_, { className: y().footer }),
                    ],
                  }),
            [I.length, V, C.history.items.length],
          ),
          w = (0, o.useMemo)(
            () => ({
              top: f({ id: "search-filters.top" }),
              track: f({ id: "search-filters.track" }),
              album: f({ id: "search-filters.album" }),
              artist: f({ id: "search-filters.artist" }),
              playlist: f({ id: "search-filters.playlist" }),
              podcast: f({ id: "search-filters.podcast" }),
            }),
            [f],
          );
        return (0, i.jsx)(v.Lh, {
          pageId: v.Rh.SEARCH,
          children: (0, i.jsxs)("div", {
            className: (0, r.W)(y().root, { [y().root_showFilters]: k }),
            children: [
              (0, i.jsxs)("div", {
                className: y().header,
                children: [
                  (0, i.jsx)(m.M, {
                    className: y().input,
                    autoFocus: !0,
                    initialValue: I,
                    placeholder: f({ id: "search.input-placeholder" }),
                    onChange: T,
                    resetButtonAriaLabel: f({
                      id: "interface-actions.reset-search-input",
                    }),
                    correctedValue: l ? C.searchCorrectedText : null,
                  }),
                  k &&
                    (0, i.jsx)(_.no, {
                      className: y().tabCarousel,
                      ...e,
                      onTabChange: G,
                      children: P.map((t, a) =>
                        (0, i.jsx)(
                          _.OK,
                          {
                            className: (0, r.W)(y().filter, {
                              [y().filter_selected]: a === e.value,
                            }),
                            title: w[t],
                            value: a,
                          },
                          a,
                        ),
                      ),
                    }),
                ],
              }),
              (0, i.jsx)("div", { className: y().content, children: O }),
            ],
          }),
        });
      });
    },
    42864: function (e, t, a) {
      "use strict";
      a.d(t, {
        uj: function () {
          return i.TagPage;
        },
        tS: function () {
          return d;
        },
      });
      var i = a(42651);
      a(92569);
      var r = a(96555),
        s = a(96431),
        l = a(3515),
        n = a(5674),
        o = a(65704);
      let d = r.V5.model("TagPage", {
        title: r.V5.maybe(r.V5.string),
        errorStatusCode: r.V5.maybeNull(r.V5.number),
        tagLoadingState: r.V5.enumeration(Object.values(n.Gu)),
        playlistsLoadingState: r.V5.enumeration(Object.values(n.Gu)),
        playlistsData: r.V5.array(
          r.V5.model({ uid: r.V5.number, kind: r.V5.number }),
        ),
        playlists: r.V5.array(r.V5.maybeNull(l.Cd)),
        pager: r.V5.maybeNull(o.Vn),
        alreadyRequestedPages: r.V5.map(r.V5.number),
        pendingPages: r.V5.map(r.V5.number),
        requests: r.V5.maybeNull(r.V5.number),
      })
        .views((e) => ({
          get isNotFound() {
            let t =
                e.playlistsLoadingState === n.Gu.RESOLVE &&
                0 === e.playlists.length,
              a =
                (e.tagLoadingState === n.Gu.REJECT ||
                  e.playlistsLoadingState === n.Gu.REJECT) &&
                (e.errorStatusCode === s.CN.NOT_FOUND ||
                  e.errorStatusCode === s.CN.BAD_REQUEST);
            return a || t;
          },
        }))
        .actions((e) => {
          let t = {
            getPlaylists: (0, r.ls)(function* (t) {
              let { page: a = 0, pageSize: i = 20 } = t,
                { playlistsResource: o, modelActionsLogger: d } = (0, r.dU)(e);
              if (
                !(
                  e.tagLoadingState !== n.Gu.RESOLVE ||
                  (e.playlistsLoadingState === n.Gu.PENDING &&
                    e.pendingPages.has("".concat(a))) ||
                  e.alreadyRequestedPages.has("".concat(a))
                )
              ) {
                e.alreadyRequestedPages.set("".concat(a), a);
                try {
                  var u;
                  (e.playlistsLoadingState = n.Gu.PENDING),
                    e.pendingPages.set("".concat(a), a);
                  let t = a * i,
                    s = t + i,
                    d = e.playlistsData.slice(t, s),
                    c = yield o.getPlaylists({
                      playlistIds: d.map((e) =>
                        "".concat(e.uid, ":").concat(e.kind),
                      ),
                      resumeStream: !1,
                    });
                  e.requests =
                    (null !== (u = e.requests) && void 0 !== u ? u : 0) + 1;
                  let m = {
                    page: a,
                    perPage: i,
                    total: e.playlistsData.length,
                  };
                  0 === e.playlists.length &&
                    (e.playlists = (0, r.pj)(
                      Array.from({ length: m.total }, () => null),
                    ));
                  let g = c.playlists.map(l.PV);
                  (0, n.AG)({
                    items: e.playlists,
                    mappedRawItems: g,
                    page: a,
                    pageSize: i,
                  }),
                    (e.pager = m),
                    e.playlistsLoadingState !== n.Gu.IDLE &&
                      (e.playlistsLoadingState = n.Gu.RESOLVE);
                } catch (t) {
                  d.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.playlistsLoadingState !== n.Gu.IDLE &&
                      (e.playlistsLoadingState = n.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(a));
                }
              }
            }),
            reset() {
              (e.tagLoadingState = n.Gu.IDLE),
                (e.playlistsLoadingState = n.Gu.IDLE),
                e.alreadyRequestedPages.clear(),
                e.pendingPages.clear(),
                (e.title = void 0),
                (e.playlistsData = (0, r.pj)([])),
                (e.playlists = (0, r.pj)([])),
                (e.errorStatusCode = null);
            },
            getTag: (0, r.ls)(function* (a) {
              let { id: i, page: l = 0, pageSize: o = 20 } = a,
                { tagResource: d, modelActionsLogger: u } = (0, r.dU)(e);
              if (e.tagLoadingState !== n.Gu.PENDING)
                try {
                  var c;
                  e.tagLoadingState = n.Gu.PENDING;
                  let a = yield d.getPlaylistIds({ id: i });
                  (e.title =
                    null === (c = a.tag) || void 0 === c ? void 0 : c.name),
                    (e.playlistsData = (0, r.pj)(
                      a.ids.map((e) => ({ uid: e.uid, kind: e.kind })),
                    )),
                    e.tagLoadingState !== n.Gu.IDLE &&
                      (e.tagLoadingState = n.Gu.RESOLVE),
                    yield t.getPlaylists({ page: l, pageSize: o });
                } catch (t) {
                  u.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.tagLoadingState !== n.Gu.IDLE &&
                      (e.tagLoadingState = n.Gu.REJECT);
                }
            }),
          };
          return t;
        });
    },
    92569: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          TagNotFoundPage: function () {
            return l;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(2365);
      let l = (0, r.Pi)(() => (0, i.jsx)(s.T, {}));
    },
    42651: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          TagPage: function () {
            return _;
          },
        });
      var i = a(8759),
        r = a(35338),
        s = a(33423),
        l = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(1918),
        u = a(70579),
        c = a(13236),
        m = a(20210),
        g = a(5674),
        p = a(44285),
        h = a(3537),
        v = a.n(h);
      let _ = (0, s.Pi)((e) => {
        var t, a, s;
        let { tagId: h } = e,
          { tag: _ } = (0, g.oR)(),
          { formatMessage: S } = (0, o.Z)(),
          [b, y] = (0, c.zU)(),
          f = (0, g.k6)();
        h || (0, l.notFound)();
        let C = (0, n.useCallback)(
          (e) => {
            _.getPlaylists({ page: e, pageSize: 20 });
          },
          [_],
        );
        _.tagLoadingState === g.Gu.IDLE &&
          (0, n.use)(_.getTag({ id: h, page: 0, pageSize: 20 })),
          _.isNotFound && (0, l.notFound)(),
          (0, n.useEffect)(
            () => () => {
              _.reset();
            },
            [_],
          );
        let E = (0, n.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(p.$_, { className: v().footer }) }),
          [],
        );
        return ((0, g.NO)(
          _.tagLoadingState === g.Gu.RESOLVE &&
            _.playlistsLoadingState === g.Gu.RESOLVE,
        ),
        (_.tagLoadingState !== g.Gu.REJECT &&
          _.playlistsLoadingState !== g.Gu.REJECT) ||
          _.isNotFound)
          ? (0, i.jsx)(g.Lh, {
              pageId: g.Rh.TAG,
              children: (0, i.jsx)(c.I7, {
                scrollElement: b,
                outerTitle: _.title,
                children: (0, i.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, i.jsx)(p.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: f.canBack,
                      children: (0, i.jsx)(d.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: _.title,
                      }),
                    }),
                    (0, i.jsx)(p.Wv, {
                      className: (0, r.W)(v().scrollContainer, v().important),
                      customComponents: E,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == _
                              ? void 0
                              : null === (t = _.playlists) || void 0 === t
                                ? void 0
                                : t[e],
                          r = S(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: S({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              m.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(p.hi, { "aria-label": r });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == _
                              ? void 0
                              : null === (t = _.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: C,
                      pageSize: 20,
                      totalRequests:
                        null !== (s = _.requests) && void 0 !== s ? s : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: y,
                      context: {
                        listAriaLabel: S(
                          { id: "mixes.albums-list" },
                          { genreName: _.title || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            })
          : (0, i.jsx)(u.D, {});
      });
    },
    6329: function (e, t, a) {
      "use strict";
      a.d(t, {
        QG: function () {
          return i.LastEpisodes;
        },
        JP: function () {
          return c;
        },
      });
      var i = a(76963),
        r = a(96555),
        s = a(48616),
        l = a(95539),
        n = a(21774),
        o = a(5674);
      let d = r.V5.model("VolumeItemTrack", {
          type: r.V5.enumeration(Object.values(s.Vc)),
          id: r.V5.union(r.V5.string, r.V5.number),
          data: r.V5.maybeNull(l.le),
          position: r.V5.maybe(r.V5.number),
          isBest: r.V5.maybe(r.V5.boolean),
          loadingState: r.V5.enumeration(Object.values(o.Gu)),
        }),
        u = r.V5.model("VolumeItemText", {
          type: r.V5.literal(n.lf.TEXT),
          data: r.V5.maybeNull(r.V5.number),
        }),
        c = r.V5.union(u, d);
    },
    76963: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          LastEpisodes: function () {
            return p;
          },
        });
      var i = a(8759),
        r = a(35338),
        s = a(33423),
        l = a(99616),
        n = a(65244),
        o = a(57413),
        d = a(95539),
        u = a(5674),
        c = a(44285),
        m = a(63548),
        g = a.n(m);
      let p = (0, s.Pi)((e) => {
        let { className: t } = e,
          { formatMessage: a } = (0, n.Z)(),
          { album: s, sonataState: m } = (0, u.oR)(),
          p = (0, u.x5)({ pageId: u.Rh.PODCAST, blockId: u.aU.PODCAST }),
          h = (0, l.useMemo)(
            () =>
              s.lastEpisodes.map((e, t) =>
                s.isLoaded && e.data
                  ? (0, i.jsx)(
                      d.N6,
                      {
                        track: e.data,
                        playContextParams: {
                          contextData: {
                            type: o.Ak.Album,
                            meta: s.contextMeta,
                            from: p,
                          },
                          queueParams: {
                            index: s.trackIndexInContext.get(String(e.id)),
                          },
                          loadContextMeta: !1,
                          entitiesData: m.unloadedEntitiesDataFromModels,
                        },
                      },
                      e.data.id,
                    )
                  : (0, i.jsx)(
                      c.DX,
                      {
                        isActive: !0,
                        className: g().shimmerItem,
                        variant: u.Lx.ALBUM,
                      },
                      t,
                    ),
              ),
            [
              s.lastEpisodes,
              s.isLoaded,
              s.contextMeta,
              s.trackIndexInContext,
              p,
              m.unloadedEntitiesDataFromModels,
            ],
          );
        return (0, i.jsxs)("div", {
          className: (0, r.W)(t, g().root),
          children: [
            (0, i.jsx)(c.ti, {
              className: g().blockHeader,
              title: a({ id: "entity-names.podcast-last-episodes" }),
            }),
            (0, i.jsx)("div", {
              role: "list",
              "aria-label": a({ id: "podcast.last-episodes-list" }),
              tabIndex: 0,
              children: h,
            }),
          ],
        });
      });
    },
    22810: function (e, t, a) {
      "use strict";
      a.d(t, {
        JG: function () {
          return i.Mixes;
        },
        RB: function () {
          return r.MixesGrid;
        },
        ZP: function () {
          return c;
        },
      });
      var i = a(31411),
        r = a(85250),
        s = a(96555),
        l = a(96431),
        n = a(48616),
        o = a(27951),
        d = a(5674);
      let u = (e) => ({
          items: (0, s.pj)(e.items.map((e) => (0, o.Fh)(e.data))),
        }),
        c = s.V5.model("Mixes", {
          loadingState: s.V5.enumeration(Object.values(d.Gu)),
          items: s.V5.array(o.zn),
          errorStatusCode: s.V5.maybeNull(s.V5.number),
        })
          .actions((e) => ({
            getMixes: (0, s.ls)(function* (t) {
              let { landingResource: a, modelActionsLogger: i } = (0, s.dU)(e);
              if (e.loadingState !== d.Gu.PENDING)
                try {
                  e.loadingState = d.Gu.PENDING;
                  let i = yield a.getBlock(
                    { uri: "/landing/block/mixes", fullList: t },
                    n.gQ.MIXES,
                  );
                  (e.items = u(i).items), (e.loadingState = d.Gu.RESOLVE);
                } catch (t) {
                  i.error(t),
                    t instanceof l.du &&
                      (t.statusCode === l.CN.NOT_FOUND ||
                        t.statusCode === l.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = l.CN.NOT_FOUND),
                    e.loadingState !== d.Gu.IDLE &&
                      (e.loadingState = d.Gu.REJECT);
                }
            }),
          }))
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === d.Gu.IDLE || e.loadingState === d.Gu.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === d.Gu.REJECT;
            },
            get isNotFound() {
              let t = e.loadingState === d.Gu.RESOLVE && 0 === e.items.length,
                a = e.errorStatusCode === l.CN.NOT_FOUND;
              return a || t;
            },
          }));
    },
    31411: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          Mixes: function () {
            return h;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(99616),
        l = a(5674),
        n = a(65244),
        o = a(61617),
        d = a(27951),
        u = a(44285),
        c = a(67085),
        m = a.n(c);
      let g = (0, r.Pi)((e) => {
        let { isShimmerVisible: t, isShimmerActive: a, mixes: r } = e,
          { formatMessage: l } = (0, n.Z)(),
          c = (0, s.useMemo)(
            () =>
              t
                ? (0, u.Cl)({ isActive: a, withInfo: !1 })
                : r.map((e) =>
                    (0, i.jsx)(
                      d.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        coverSize: 80,
                        imagesLayoutType: e.imagesLayoutType,
                      },
                      e.id,
                    ),
                  ),
            [a, t, r],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(u.ti, {
              className: m().carouselHeader,
              title: l({ id: "entity-names.mixes" }),
              titleSize: "xs",
              viewAllActionLink: "/mixes",
            }),
            (0, i.jsx)(o.l, {
              containerClassName: m().carouselBlock,
              itemClassName: m().mixItem,
              children: c,
            }),
          ],
        });
      });
      var p = a(85250);
      let h = (0, r.Pi)(() => {
        let { settings: e, search: t } = (0, l.oR)(),
          a = e.layout === l.t8.Mobile;
        return (t.mixes.loadingState === l.Gu.IDLE &&
          (0, s.use)(t.mixes.getMixes(!1)),
        a)
          ? (0, i.jsx)(g, {
              isShimmerVisible: t.mixes.isLoading || t.mixes.isRejected,
              isShimmerActive: t.mixes.isLoading,
              mixes: t.mixes.items,
            })
          : (0, i.jsx)(p.MixesGrid, {
              isShimmerVisible: t.mixes.isLoading || t.mixes.isRejected,
              isShimmerActive: t.mixes.isLoading,
              mixes: t.mixes.items,
              withTitle: !0,
            });
      });
    },
    85250: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          MixesGrid: function () {
            return m;
          },
        });
      var i = a(8759),
        r = a(33423),
        s = a(99616),
        l = a(2814),
        n = a(1918),
        o = a(27951),
        d = a(44285),
        u = a(54672),
        c = a.n(u);
      let m = (0, r.Pi)((e) => {
        let {
            isShimmerVisible: t,
            isShimmerActive: a,
            withTitle: r,
            mixes: u,
            shimmerCount: m = 5,
          } = e,
          g = (0, s.useMemo)(
            () =>
              t
                ? (0, i.jsx)(d.Wm, {
                    isActive: a,
                    round: !1,
                    centered: !1,
                    withInfo: !1,
                    count: m,
                  })
                : u.map((e) =>
                    (0, i.jsx)(
                      o.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        imagesLayoutType: e.imagesLayoutType,
                      },
                      e.id,
                    ),
                  ),
            [a, t, u, m],
          );
        return (0, i.jsxs)("div", {
          children: [
            r &&
              (0, i.jsx)(n.Heading, {
                className: c().mixesTitle,
                size: "s",
                weight: "bold",
                variant: "h3",
                children: (0, i.jsx)(l.Z, { id: "entity-names.mixes" }),
              }),
            (0, i.jsx)("div", { className: c().mixesGrid, children: g }),
          ],
        });
      });
    },
    31481: function (e, t, a) {
      "use strict";
      a.d(t, {
        wp: function () {
          return ew;
        },
        Lc: function () {
          return eK;
        },
      });
      var i,
        r,
        s,
        l,
        n,
        o,
        d,
        u,
        c,
        m,
        g,
        p,
        h,
        v = a(8759),
        _ = a(35338),
        S = a(33423),
        b = a(99616),
        y = a.t(b, 2),
        f = a(454),
        C = a(5674),
        E = a(57285);
      let x = () => {
        let [e, t] = (0, b.useState)(!1),
          a = (0, b.useMemo)(
            () =>
              (0, E.Z)(
                () => {
                  t(window.innerWidth < 1024);
                },
                100,
                { trailing: !1 },
              ),
            [t],
          );
        return (
          (0, b.useEffect)(
            () => (
              window.addEventListener("resize", a),
              a(),
              () => {
                window.removeEventListener("resize", a);
              }
            ),
            [a],
          ),
          e && !1
        );
      };
      var N = a(29913),
        P = a.n(N),
        I = a(65244),
        L = a(2814),
        k = a(71747),
        A = a(15527),
        T = a(14581),
        j = a(13410),
        G = {
          5881: (e, t, a) => {
            function i() {
              for (var e, t, a = 0, i = ""; a < arguments.length; )
                (e = arguments[a++]) &&
                  (t = (function e(t) {
                    var a,
                      i,
                      r = "";
                    if ("string" == typeof t || "number" == typeof t) r += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (a = 0; a < t.length; a++)
                          t[a] && (i = e(t[a])) && (r && (r += " "), (r += i));
                      else for (a in t) t[a] && (r && (r += " "), (r += a));
                    }
                    return r;
                  })(e)) &&
                  (i && (i += " "), (i += t));
              return i;
            }
            a.r(t), a.d(t, { clsx: () => i, default: () => r });
            let r = i;
          },
          9605: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root: "NGdj0oZ2Bt8qdZhP2Tzt",
              root_collapsed: "rece5errcONnjJeX0YW8",
              root_direction_vertical: "QilmoKKJwk6f0BdkYgrA",
              root_direction_horizontal: "AO4rWY4RLVh48fwQw5Qs",
            };
          },
          4990: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root: "yuyI2hMAT7qyL1N14MAQ",
              root_direction_vertical: "xfFtKQpgAYvC2jI1tBtS",
              root_direction_horizontal: "OGlYJO0lZgpSOhfU2Iru",
            };
          },
          4161: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root: "Bp1d3U6W8Nrbqi3MRQS_",
              root_direction_vertical: "hYfgO_Y8c4rrQsZJWTDZ",
              ripple: "UiZ4QyGEVzfvZ3QfQqqA",
              root_direction_horizontal: "X_Lr5kqrhzMO6kX8v92s",
              root_collapsed: "Q3gGGaIXiJ_oQTiVZBfl",
              root_variant_main: "H4trq_Zx2d9qOnQgxmxr",
              root_animate: "Kr9rXeXGlqHee2euqH0u",
              animation_width: "k8zKIZRDy6LmoaIcEpo8",
              item: "A4bDkbQHkwWNGqxO9qhW",
              item_selected: "mAd9pgMkWVX5ktCgYINQ",
              item_direction_vertical: "Xx9Tg5ugzg1pkf8Zh421",
              item_direction_horizontal: "fQVXazc9HwT3NQ8dywCh",
              iconContainer: "zpkgiiHgDpbBThy6gavq",
              textContainer: "ZrkG6gNYcr4h3hfkhyT1",
              textContainer_selected: "xENlRAFvRskKnt8LUObC",
              textContainer_direction_horizontal: "xE5fIMRnjd8oSm5BOhpI",
            };
          },
          6161: (e, t, a) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var i = a(810),
              r = Symbol.for("react.element"),
              s = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              n =
                i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              o = { key: !0, ref: !0, __self: !0, __source: !0 };
            function d(e, t, a) {
              var i,
                s = {},
                d = null,
                u = null;
              for (i in (void 0 !== a && (d = "" + a),
              void 0 !== t.key && (d = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                l.call(t, i) && !o.hasOwnProperty(i) && (s[i] = t[i]);
              if (e && e.defaultProps)
                for (i in (t = e.defaultProps))
                  void 0 === s[i] && (s[i] = t[i]);
              return {
                $$typeof: r,
                type: e,
                key: d,
                ref: u,
                props: s,
                _owner: n.current,
              };
            }
            (t.Fragment = s), (t.jsx = d), (t.jsxs = d);
          },
          9541: (e, t, a) => {
            e.exports = a(6161);
          },
          1845: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.AVAILABLE_SIZES = t.DEFAULT_SIZE = void 0),
              (t.DEFAULT_SIZE = 100),
              (t.AVAILABLE_SIZES = [30, 50, 80, 100, 200, 300, 400, 600, 800]);
            let a = (e) => `https://${e.replace(/^(https*:\/\/)/, "")}`;
            t.createAvatarUrl = (e, t, i) => {
              let r;
              return (
                (r = "orig" === t ? "orig" : i ? `m${t}x${t}` : `${t}x${t}`),
                a(e.replace("%%", r))
              );
            };
          },
          9665: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, a) {
                let i = a ?? e.currentTarget,
                  r = document.createElement("span"),
                  s = Math.max(i.clientWidth, i.clientHeight),
                  l = s / 2,
                  n = i.getBoundingClientRect(),
                  o =
                    0 === e.clientX
                      ? Math.round(n.width / 2)
                      : e.clientX - n.left,
                  d =
                    0 === e.clientY
                      ? Math.round(n.height / 2)
                      : e.clientY - n.top;
                (r.style.width = `${s}px`),
                  (r.style.height = `${s}px`),
                  (r.style.left = 0 === e.clientX ? "0px" : `${o - l}px`),
                  (r.style.top = `${d - l}px`),
                  r.classList.add(t);
                let u = i.getElementsByClassName(t)[0];
                u && u.remove(), i.insertBefore(r, i.firstChild);
              });
          },
          1317: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createAvatarUrl = t.createRipple = void 0);
            var i = a(9665);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return i.createRipple;
              },
            });
            var r = a(1845);
            Object.defineProperty(t, "createAvatarUrl", {
              enumerable: !0,
              get: function () {
                return r.createAvatarUrl;
              },
            });
          },
          9606: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Navigation = void 0);
            let r = a(9541),
              s = a(5881),
              l = a(3871),
              n = i(a(9605));
            t.Navigation = function ({
              className: e,
              children: t,
              collapsed: a = !1,
              direction: i = "vertical",
              ...o
            }) {
              return (0, r.jsx)(l.NavigationProvider, {
                collapsed: a,
                direction: i,
                children: (0, r.jsx)("nav", {
                  className: (0, s.clsx)(
                    n.default.root,
                    n.default[`root_direction_${i}`],
                    { [n.default.root_collapsed]: a },
                    e,
                  ),
                  "aria-label": o["aria-label"],
                  ...o,
                  children: t,
                }),
              });
            };
          },
          3871: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationProvider = t.NavigationContext = void 0);
            let i = a(9541),
              r = a(810);
            (t.NavigationContext = (0, r.createContext)({
              collapsed: !1,
              direction: "vertical",
            })),
              (t.NavigationProvider = ({
                collapsed: e,
                direction: a,
                children: s,
              }) => {
                let l = (0, r.useMemo)(
                  () => ({ collapsed: e, direction: a }),
                  [e, a],
                );
                return (0, i.jsx)(t.NavigationContext.Provider, {
                  value: l,
                  children: s,
                });
              });
          },
          9477: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationGroup = void 0);
            let r = a(9541),
              s = a(810),
              l = a(5881),
              n = a(3871),
              o = i(a(4990));
            t.NavigationGroup = function ({ className: e, children: t, ...a }) {
              let i = (0, s.createRef)(),
                { direction: d } = (0, s.useContext)(n.NavigationContext);
              return (0, r.jsx)("ol", {
                ref: i,
                className: (0, l.clsx)(
                  o.default.root,
                  o.default[`root_direction_${d}`],
                  e,
                ),
                ...a,
                children: t,
              });
            };
          },
          4306: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavigationItem = t.NavigationItemComponent = void 0);
            let r = a(9541),
              s = a(810),
              l = a(5881),
              n = a(3871),
              o = a(1317),
              d = i(a(4161));
            function u({
              className: e = "",
              forwardRef: t,
              children: a,
              selected: i = !1,
              shownAnimation: u,
              withRipple: c = !1,
              variant: m = "default",
              ...g
            }) {
              let { collapsed: p, direction: h } = (0, s.useContext)(
                  n.NavigationContext,
                ),
                v = (0, s.useCallback)(
                  (e) => {
                    c && (0, o.createRipple)(e, d.default.ripple);
                  },
                  [c],
                ),
                [_, S] = s.Children.toArray(a.props.children),
                b = (0, s.useMemo)(
                  () =>
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("div", {
                          className: d.default.iconContainer,
                          children: _,
                        }),
                        (0, r.jsx)("div", {
                          className: (0, l.clsx)(
                            d.default.textContainer,
                            d.default[`textContainer_direction_${h}`],
                            { [d.default.textContainer_selected]: i },
                          ),
                          children: S,
                        }),
                      ],
                    }),
                  [_, h, i, S],
                ),
                y = (0, s.cloneElement)(a, {
                  className: (0, l.clsx)(
                    d.default.item,
                    d.default[`item_direction_${h}`],
                    {
                      [d.default.item_selected]: i,
                      [d.default[`item_collapsed_${h}`]]: p,
                    },
                    a.props.className,
                  ),
                  children: b,
                });
              return (0, r.jsx)("li", {
                ref: t,
                className: (0, l.clsx)(
                  d.default.root,
                  d.default[`root_direction_${h}`],
                  d.default[`root_variant_${m}`],
                  {
                    [d.default.root_animate]: u,
                    [d.default.root_collapsed]: p,
                  },
                  e,
                ),
                "aria-current": !!i && "page",
                onClick: v,
                ...g,
                children: y,
              });
            }
            (t.NavigationItemComponent = u),
              (t.NavigationItem = (0, s.forwardRef)((e, t) =>
                (0, r.jsx)(u, { forwardRef: t, ...e }),
              ));
          },
          810: (e) => {
            e.exports = y;
          },
        },
        D = {};
      function R(e) {
        var t = D[e];
        if (void 0 !== t) return t.exports;
        var a = (D[e] = { exports: {} });
        return G[e].call(a.exports, a, a.exports, R), a.exports;
      }
      (R.d = (e, t) => {
        for (var a in t)
          R.o(t, a) &&
            !R.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      }),
        (R.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (R.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var V = {};
      Object.defineProperty(V, "X$", { value: !0 }),
        (V.Dx = V.KB = V.W_ = void 0),
        (i = R(9606)),
        Object.defineProperty(V, "W_", {
          enumerable: !0,
          get: function () {
            return i.Navigation;
          },
        }),
        (r = R(9477)),
        Object.defineProperty(V, "KB", {
          enumerable: !0,
          get: function () {
            return r.NavigationGroup;
          },
        }),
        (s = R(4306)),
        Object.defineProperty(V, "Dx", {
          enumerable: !0,
          get: function () {
            return s.NavigationItem;
          },
        });
      var O = V.W_,
        w = V.KB,
        B = V.Dx;
      V.X$;
      var M = a(78354),
        U = a(1918),
        F = a(69559),
        W = a(39479),
        H = a(44285),
        z = a(6955),
        q = a(48616),
        Z = a(45656),
        J = a(96437),
        K = a(21774);
      let Q = {
        FLIP: { fallbackAxisSideDirection: "start", padding: 20 },
        SHIFT: { padding: 20 },
        OFFSET: 20,
      };
      var Y = a(96213),
        X = a(53724),
        $ = a.n(X);
      let ee = (e) => {
          let { children: t, entityUrl: a, ariaLabel: i } = e;
          return a
            ? (0, v.jsx)(H.rU, {
                href: a,
                "aria-label": i,
                className: $().link,
                children: t,
              })
            : t;
        },
        et = (e) => {
          let {
              className: t,
              cover: a,
              title: i,
              subtitle: r,
              contextMenu: s,
              isCollapsed: l,
              withCollapseAnimation: n,
              entityUrl: o,
              onDoubleClick: d,
              forwardRef: u,
              ariaLabel: c,
            } = e,
            m = (0, b.useCallback)(
              (e) => {
                2 === e.detail
                  ? null == d || d()
                  : e.target instanceof HTMLElement &&
                    "IMG" !== e.target.tagName &&
                    (0, Y.m)(e, $().ripple);
              },
              [d],
            );
          return (0, v.jsxs)(H.Md, {
            ref: u,
            onClick: m,
            className: (0, _.W)($().root, { [$().root_withoutLink]: !o }, t),
            role: "listitem",
            children: [
              (0, v.jsxs)(ee, {
                entityUrl: o,
                ariaLabel: c,
                children: [
                  (0, v.jsx)("div", { className: $().cover, children: a }),
                  (0, v.jsx)("div", {
                    className: $().meta,
                    children: (0, v.jsxs)("div", {
                      className: (0, _.W)($().info, {
                        [$().info_collapsed]: l,
                        [$().info_animated]: n,
                      }),
                      children: [
                        (0, v.jsx)(U.Caption, {
                          "aria-hidden": !0,
                          className: $().title,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: i,
                        }),
                        (0, v.jsx)(U.Caption, {
                          "aria-hidden": !0,
                          className: $().subtitle,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: r,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, v.jsx)("div", {
                className: (0, _.W)($().contextMenu, {
                  [$().contextMenu_hidden]: l,
                }),
                children: s,
              }),
            ],
          });
        },
        ea = (0, b.forwardRef)((e, t) =>
          (0, v.jsx)(et, { forwardRef: t, ...e }),
        ),
        ei = (0, b.createContext)(null);
      var er = a(93088),
        es = a.n(er),
        el = a(52317);
      let en = (e) => {
          let { onPinClick: t, isPinned: a } = e,
            { isCollapsed: i } = (0, b.useContext)(ei) || {},
            { formatMessage: r } = (0, I.Z)(),
            [s, l] = (0, b.useState)(!1),
            n = (0, b.useCallback)((e) => {
              e.preventDefault(), e.stopPropagation();
            }, []);
          return (
            (0, C.ZP)(s),
            (0, v.jsx)(el.v2, {
              reference: (0, v.jsx)(A.z, {
                className: (0, _.W)(es().contextMenu, {
                  [es().contextMenu_visible]: s,
                }),
                onClick: n,
                withRipple: !1,
                variant: "text",
                "aria-label": r({ id: "interface-actions.context-menu" }),
                icon: (0, v.jsx)(T.J, { size: "xxs", variant: "more" }),
                tabIndex: i ? -1 : 0,
                "aria-hidden": i,
              }),
              offsetOptions: 10,
              open: s,
              returnFocus: !1,
              onOpenChange: l,
              children: (0, v.jsx)(H.Zd, { onClick: t, isPinned: a }),
            })
          );
        },
        eo = (e) => {
          var t;
          let { className: a, album: i, forwardRef: r } = e,
            { formatMessage: s } = (0, I.Z)(),
            { isCollapsed: l, withCollapseAnimation: n } =
              null !== (t = (0, b.useContext)(ei)) && void 0 !== t ? t : {},
            o = (0, K.BV)(i),
            d = (0, b.useMemo)(
              () =>
                (0, v.jsx)(J.Paper, {
                  className: es().cover,
                  radius: "xs",
                  children: (0, v.jsxs)(M.u, {
                    flipOptions: Q.FLIP,
                    shiftOptions: Q.SHIFT,
                    offsetOptions: Q.OFFSET,
                    placement: "right",
                    enabled: l,
                    children: [
                      (0, v.jsx)(Z.Image, {
                        className: es().image,
                        "aria-hidden": !0,
                        src: i.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, v.jsx)(M._v, {
                        className: es().tooltip,
                        children: (0, v.jsx)(U.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: i.title,
                        }),
                      }),
                    ],
                  }),
                }),
              [i.coverUri, i.title, l],
            );
          return (0, v.jsx)(ea, {
            ref: r,
            ariaLabel: s(
              { id: "entity-names.album-name" },
              { albumName: i.title },
            ),
            className: (0, _.W)(es().root, a),
            title: i.title,
            entityUrl: i.url,
            subtitle: (0, v.jsx)(L.Z, { id: "entity-names.album" }),
            cover: d,
            isCollapsed: !!l,
            withCollapseAnimation: !!n,
            contextMenu: (0, v.jsx)(en, {
              onPinClick: o,
              isPinned: i.isPinned,
            }),
          });
        },
        ed = (0, b.forwardRef)((e, t) =>
          (0, v.jsx)(eo, { forwardRef: t, ...e }),
        );
      var eu = a(81446);
      let ec = (e) => {
          var t;
          let { className: a, artist: i, forwardRef: r } = e,
            { formatMessage: s } = (0, I.Z)(),
            { isCollapsed: l, withCollapseAnimation: n } =
              null !== (t = (0, b.useContext)(ei)) && void 0 !== t ? t : {},
            o = (0, eu.BV)(i),
            d = (0, b.useMemo)(
              () =>
                (0, v.jsx)(J.Paper, {
                  className: es().cover,
                  radius: "round",
                  children: (0, v.jsxs)(M.u, {
                    flipOptions: Q.FLIP,
                    shiftOptions: Q.SHIFT,
                    offsetOptions: Q.OFFSET,
                    placement: "right",
                    enabled: l,
                    children: [
                      (0, v.jsx)(Z.Image, {
                        className: es().image,
                        "aria-hidden": !0,
                        src: i.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, v.jsx)(M._v, {
                        className: es().tooltip,
                        children: (0, v.jsx)(U.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: i.name,
                        }),
                      }),
                    ],
                  }),
                }),
              [i.coverUri, i.name, l],
            );
          return (0, v.jsx)(ea, {
            ref: r,
            ariaLabel: s(
              { id: "entity-names.artist-name" },
              { artistName: i.name },
            ),
            className: (0, _.W)(es().root, a),
            title: i.name,
            entityUrl: i.url,
            subtitle: (0, v.jsx)(L.Z, { id: "entity-names.artist" }),
            cover: d,
            isCollapsed: !!l,
            withCollapseAnimation: !!n,
            contextMenu: (0, v.jsx)(en, {
              onPinClick: o,
              isPinned: i.isPinned,
            }),
          });
        },
        em = (0, b.forwardRef)((e, t) =>
          (0, v.jsx)(ec, { forwardRef: t, ...e }),
        );
      var eg = a(3515);
      let ep = (e) => {
          var t;
          let { className: a, playlist: i, forwardRef: r } = e,
            { formatMessage: s } = (0, I.Z)(),
            { isCollapsed: l, withCollapseAnimation: n } =
              null !== (t = (0, b.useContext)(ei)) && void 0 !== t ? t : {},
            o = (0, eg.BV)(i),
            d = (0, b.useMemo)(
              () =>
                (0, v.jsx)(J.Paper, {
                  className: es().cover,
                  radius: "xs",
                  children: (0, v.jsxs)(M.u, {
                    flipOptions: Q.FLIP,
                    shiftOptions: Q.SHIFT,
                    offsetOptions: Q.OFFSET,
                    placement: "right",
                    enabled: l,
                    children: [
                      (0, v.jsx)(Z.Image, {
                        "aria-hidden": !0,
                        className: es().image,
                        src: i.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, v.jsx)(M._v, {
                        className: es().tooltip,
                        children: (0, v.jsx)(U.Caption, {
                          variant: "span",
                          type: "text",
                          size: "s",
                          weight: "medium",
                          lineClamp: 1,
                          children: i.title,
                        }),
                      }),
                    ],
                  }),
                }),
              [l, i.coverUri, i.title],
            );
          return (0, v.jsx)(ea, {
            ref: r,
            ariaLabel: s(
              { id: "entity-names.playlist-name" },
              { playlistName: i.title },
            ),
            className: (0, _.W)(es().root, a),
            title: i.title,
            entityUrl: i.url,
            subtitle: (0, v.jsx)(L.Z, { id: "entity-names.playlist" }),
            cover: d,
            isCollapsed: !!l,
            withCollapseAnimation: !!n,
            contextMenu: (0, v.jsx)(en, {
              onPinClick: o,
              isPinned: i.isPinned,
            }),
          });
        },
        eh = (0, b.forwardRef)((e, t) =>
          (0, v.jsx)(ep, { forwardRef: t, ...e }),
        );
      var ev = a(84290);
      let e_ = (0, S.Pi)((e) => {
          var t, a;
          let { className: i, vibe: r, forwardRef: s } = e,
            l = (0, b.useId)(),
            { formatMessage: n } = (0, I.Z)(),
            { isCollapsed: o, withCollapseAnimation: d } =
              null !== (a = (0, b.useContext)(ei)) && void 0 !== a ? a : {},
            [u, c] = (0, b.useState)(!1),
            m = (0, ev.BV)(r),
            {
              isPlaying: g,
              togglePlay: p,
              isCurrent: h,
            } = (0, C.Qh)({
              seeds: r.seeds,
              pageIdForFrom: C.Rh.SIDEBAR,
              blockIdForFrom: C.aU.RADIO,
            }),
            S = (0, b.useCallback)(() => {
              c(!0),
                p().finally(() => {
                  c(!1);
                });
            }, [p]),
            y = (0, b.useMemo)(
              () =>
                (0, v.jsx)(U.Caption, {
                  id: l,
                  variant: "span",
                  "aria-label": n(
                    { id: "entity-names.vibe-name" },
                    { vibeName: r.title },
                  ),
                  type: "controls",
                  size: "s",
                  lineClamp: 1,
                  children: r.title,
                }),
              [n, l, r.title],
            ),
            f = (0, b.useMemo)(() => {
              var e;
              let t = {
                "--vibe-background-color":
                  null === (e = r.colors) || void 0 === e ? void 0 : e.average,
              };
              return (0, v.jsxs)(M.u, {
                flipOptions: Q.FLIP,
                shiftOptions: Q.SHIFT,
                offsetOptions: Q.OFFSET,
                placement: "right",
                enabled: o,
                children: [
                  (0, v.jsx)("div", {
                    style: t,
                    className: es().animation,
                    children: (0, v.jsx)(H.Df, {
                      isCurrent: h,
                      isPlaying: g,
                      isAvailable: !0,
                      isPlayButtonLoading: u,
                      onPlayButtonClick: S,
                      title: r.title,
                      shouldShowImage: !1,
                      ariaDescribedBy: l,
                    }),
                  }),
                  (0, v.jsx)(M._v, {
                    className: es().tooltip,
                    children: (0, v.jsx)(U.Caption, {
                      variant: "span",
                      type: "text",
                      size: "s",
                      weight: "medium",
                      lineClamp: 1,
                      children: r.title,
                    }),
                  }),
                ],
              });
            }, [
              S,
              o,
              h,
              u,
              g,
              l,
              null === (t = r.colors) || void 0 === t ? void 0 : t.average,
              r.title,
            ]);
          return (0, v.jsx)(ea, {
            ref: s,
            onDoubleClick: p,
            className: (0, _.W)(es().root, i),
            isCollapsed: !!o,
            contextMenu: (0, v.jsx)(en, {
              onPinClick: m,
              isPinned: r.isPinned,
            }),
            withCollapseAnimation: !!d,
            title: y,
            subtitle: (0, v.jsx)(L.Z, { id: "entity-names.my-vibe" }),
            cover: f,
          });
        }),
        eS = (0, b.forwardRef)((e, t) =>
          (0, v.jsx)(e_, { forwardRef: t, ...e }),
        );
      var eb = a(13774),
        ey = a.n(eb);
      let ef = (0, S.Pi)((e) => {
        var t, a;
        let { className: i, withCollapseAnimation: r, isCollapsed: s } = e,
          { formatMessage: l } = (0, I.Z)(),
          { pinsCollection: n } = (0, C.oR)(),
          o =
            null === (t = n.items) || void 0 === t
              ? void 0
              : t.map(() => (0, b.createRef)()),
          d = (0, b.useMemo)(
            () => ({
              enter: ey().pin_enter,
              enterActive: ey().pin_enter_active,
              exit: ey().pin_exit,
              exitActive: ey().pin_exit_active,
            }),
            [],
          ),
          u = (0, b.useMemo)(
            () => ({ withCollapseAnimation: r, isCollapsed: s }),
            [s, r],
          );
        return (0, v.jsx)(ei.Provider, {
          value: u,
          children: (0, v.jsx)("div", {
            className: (0, _.W)(ey().root, i),
            children: (0, v.jsx)("div", {
              role: "list",
              "aria-label": l({ id: "navigation.pins-list" }),
              className: ey().content,
              children: (0, v.jsx)(z.Z, {
                component: null,
                children:
                  null === (a = n.items) || void 0 === a
                    ? void 0
                    : a.map((e, t) => {
                        switch (e.type) {
                          case q.Qm.ALBUM:
                            return (0, v.jsx)(
                              k.Z,
                              {
                                classNames: d,
                                nodeRef: null == o ? void 0 : o[t],
                                timeout: 270,
                                children: (0, v.jsx)(ed, {
                                  ref: null == o ? void 0 : o[t],
                                  album: e.data,
                                }),
                              },
                              e.data.pinId,
                            );
                          case q.Qm.ARTIST:
                            return (0, v.jsx)(
                              k.Z,
                              {
                                classNames: d,
                                nodeRef: null == o ? void 0 : o[t],
                                timeout: 270,
                                children: (0, v.jsx)(em, {
                                  ref: null == o ? void 0 : o[t],
                                  artist: e.data,
                                }),
                              },
                              e.data.pinId,
                            );
                          case q.Qm.PLAYLIST:
                            return (0, v.jsx)(
                              k.Z,
                              {
                                classNames: d,
                                nodeRef: null == o ? void 0 : o[t],
                                timeout: 270,
                                children: (0, v.jsx)(eh, {
                                  ref: null == o ? void 0 : o[t],
                                  playlist: e.data,
                                }),
                              },
                              e.data.pinId,
                            );
                          case q.Qm.WAVE:
                            return (0, v.jsx)(
                              k.Z,
                              {
                                classNames: d,
                                nodeRef: null == o ? void 0 : o[t],
                                timeout: 270,
                                children: (0, v.jsx)(eS, {
                                  ref: null == o ? void 0 : o[t],
                                  vibe: e.data,
                                }),
                              },
                              e.data.pinId,
                            );
                        }
                      }),
              }),
            }),
          }),
        });
      });
      function eC() {
        return (eC = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eE = function (e) {
          return b.createElement(
            "svg",
            eC(
              {
                viewBox: "0 0 58 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            b.createElement(
              "g",
              { clipPath: "url(#clip0_2521_25547)" },
              b.createElement(
                "g",
                { clipPath: "url(#clip1_2521_25547)" },
                l ||
                  (l = b.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  })),
                n ||
                  (n = b.createElement("path", {
                    d: "M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z",
                    fill: "#FCCA00",
                  })),
                o ||
                  (o = b.createElement("path", {
                    d: "M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z",
                    fill: "#FC3F1D",
                  })),
                b.createElement(
                  "mask",
                  {
                    id: "mask0_2521_25547",
                    style: { maskType: "alpha" },
                    maskUnits: "userSpaceOnUse",
                    x: 33,
                    y: 0,
                    width: 25,
                    height: 24,
                  },
                  d ||
                    (d = b.createElement("circle", {
                      cx: 45.5005,
                      cy: 12,
                      r: 12,
                      fill: "white",
                    })),
                ),
                u ||
                  (u = b.createElement("g", {
                    mask: "url(#mask0_2521_25547)",
                  })),
                c ||
                  (c = b.createElement(
                    "g",
                    { clipPath: "url(#clip2_2521_25547)" },
                    b.createElement("rect", {
                      width: 24,
                      height: 24,
                      transform: "translate(33.5005)",
                      fill: "black",
                    }),
                    b.createElement("path", {
                      d: "M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z",
                      fill: "url(#paint0_radial_2521_25547)",
                    }),
                  )),
              ),
            ),
            m ||
              (m = b.createElement(
                "g",
                { clipPath: "url(#clip3_2521_25547)" },
                b.createElement("rect", {
                  x: 17.0005,
                  width: 24,
                  height: 24,
                  rx: 12,
                  fill: "white",
                }),
                b.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z",
                  fill: "url(#paint1_linear_2521_25547)",
                }),
              )),
            g ||
              (g = b.createElement("path", {
                d: "M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z",
                fill: "black",
              })),
            p ||
              (p = b.createElement("path", {
                d: "M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z",
                fill: "#FED42B",
              })),
            h ||
              (h = b.createElement(
                "defs",
                null,
                b.createElement(
                  "radialGradient",
                  {
                    id: "paint0_radial_2521_25547",
                    cx: 0,
                    cy: 0,
                    r: 1,
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform:
                      "translate(40.7002 3.59937) rotate(45) scale(23.7588)",
                  },
                  b.createElement("stop", {
                    offset: 0.5,
                    stopColor: "#FF5500",
                  }),
                  b.createElement("stop", { offset: 1, stopColor: "#BBFF00" }),
                ),
                b.createElement(
                  "linearGradient",
                  {
                    id: "paint1_linear_2521_25547",
                    x1: 17.0005,
                    y1: 10.4,
                    x2: 41.0005,
                    y2: 10.4,
                    gradientUnits: "userSpaceOnUse",
                  },
                  b.createElement("stop", { stopColor: "#FF5C4D" }),
                  b.createElement("stop", {
                    offset: 0.4,
                    stopColor: "#EB469F",
                  }),
                  b.createElement("stop", { offset: 1, stopColor: "#8341EF" }),
                ),
                b.createElement(
                  "clipPath",
                  { id: "clip0_2521_25547" },
                  b.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                b.createElement(
                  "clipPath",
                  { id: "clip1_2521_25547" },
                  b.createElement("rect", {
                    x: 33.5005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
                b.createElement(
                  "clipPath",
                  { id: "clip2_2521_25547" },
                  b.createElement("rect", {
                    width: 24,
                    height: 24,
                    fill: "white",
                    transform: "translate(33.5005)",
                  }),
                ),
                b.createElement(
                  "clipPath",
                  { id: "clip3_2521_25547" },
                  b.createElement("rect", {
                    x: 17.0005,
                    width: 24,
                    height: 24,
                    rx: 12,
                    fill: "white",
                  }),
                ),
              )),
          );
        },
        ex = a(36509),
        eN = a.n(ex);
      let eP = (e) => {
          let { className: t, forwardRef: a } = e,
            { formatMessage: i } = (0, I.Z)();
          return (0, v.jsxs)("section", {
            className: (0, _.W)(eN().root, t),
            ref: a,
            "aria-label": i({ id: "plusbar.subscription-activation" }),
            children: [
              (0, v.jsx)(eE, { className: eN().logos, "aria-hidden": "true" }),
              (0, v.jsx)(U.Caption, {
                className: eN().title,
                variant: "div",
                size: "m",
                weight: "medium",
                children: (0, v.jsx)(L.Z, {
                  id: "plusbar.title",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, v.jsx)(U.Caption, {
                className: eN().addition,
                variant: "div",
                size: "xs",
                weight: "normal",
                children: (0, v.jsx)(L.Z, {
                  id: "plusbar.text",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, v.jsxs)("div", {
                className: eN().buttons,
                children: [
                  (0, v.jsx)(A.z, {
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    color: "plus",
                    children: "30 дней бесплатно",
                  }),
                  (0, v.jsx)(A.z, {
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    variant: "text",
                    color: "primary",
                    withRipple: !1,
                    children: (0, v.jsx)(L.Z, {
                      id: "interface-actions.more-details",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        eI = (0, b.forwardRef)((e, t) =>
          (0, v.jsx)(eP, { forwardRef: t, ...e }),
        );
      var eL = a(27206),
        ek = a.n(eL);
      let eA = { fallbackAxisSideDirection: "start", padding: 8 },
        eT = { padding: 8 },
        ej = {
          exit: ek().plusButtonContainer_exit,
          exitActive: ek().plusButtonContainer_exit_active,
          enter: ek().plusButtonContainer_enter,
          enterActive: ek().plusButtonContainer_enter_active,
        },
        eG = {
          exit: ek().plusBar_exit,
          exitActive: ek().plusBar_exit_active,
          enter: ek().plusBar_enter,
          enterActive: ek().plusBar_enter_active,
        },
        eD = (0, S.Pi)((e) => {
          let {
              className: t,
              collapsed: a,
              shownAnimation: i,
              handleClick: r,
            } = e,
            s = x(),
            l = (0, C.hJ)(),
            { formatMessage: n } = (0, I.Z)(),
            { user: o, experiments: d } = (0, C.oR)(),
            u = (0, b.useMemo)(
              () =>
                o.collectionHue
                  ? { "--logo-color": (0, F.Cx)(o.collectionHue) }
                  : null,
              [o.collectionHue],
            ),
            c = (0, b.useMemo)(
              () =>
                a
                  ? n({ id: "sidebar.uncollapse" })
                  : n({ id: "sidebar.collapse" }),
              [a, n],
            ),
            m = (0, b.useMemo)(
              () => ({
                search: n({ id: "navigation.search" }),
                main: n({ id: "navigation.page-main" }),
                collection: n({ id: "navigation.page-collection" }),
                kinopoisk: n({ id: "navigation.page-kinopoisk" }),
                non_music: n({ id: "navigation.page-non-music" }),
              }),
              [n],
            ),
            g = (0, b.useMemo)(
              () =>
                (0, v.jsx)(
                  w,
                  {
                    children: (0, C.sQ)(d).map((e) =>
                      (0, v.jsx)(
                        B,
                        {
                          selected: l(e.path),
                          shownAnimation: i,
                          variant: "main",
                          children: (0, v.jsxs)(H.rU, {
                            href: e.path,
                            children: [
                              (0, v.jsxs)(M.u, {
                                flipOptions: eA,
                                shiftOptions: eT,
                                offsetOptions: 8,
                                placement: "right",
                                enabled: a,
                                children: [
                                  (0, v.jsx)(T.J, {
                                    variant: l(e.path)
                                      ? e.iconSelected
                                      : e.icon,
                                    size: "m",
                                  }),
                                  (0, v.jsx)(M._v, {
                                    children: (0, v.jsx)(U.Caption, {
                                      variant: "span",
                                      type: "text",
                                      size: "s",
                                      weight: "medium",
                                      children: m[e.id],
                                    }),
                                  }),
                                ],
                              }),
                              (0, v.jsx)(U.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                className: (0, _.W)({
                                  [ek().title_animate]: i,
                                  [ek().title_collapsed]: a,
                                }),
                                children: m[e.id],
                              }),
                            ],
                          }),
                        },
                        e.id,
                      ),
                    ),
                  },
                  "main",
                ),
              [l, a, d, d.loadingState, i, m],
            ),
            p = (0, b.useMemo)(
              () =>
                s
                  ? null
                  : (0, v.jsxs)(
                      M.u,
                      {
                        flipOptions: eA,
                        shiftOptions: eT,
                        offsetOptions: 8,
                        placement: "right",
                        children: [
                          (0, v.jsx)(A.z, {
                            className: (0, _.W)(
                              ek().collapseButton,
                              ek().important,
                            ),
                            "aria-label": c,
                            radius: "round",
                            color: "secondary",
                            size: "s",
                            icon: (0, v.jsx)(T.J, {
                              variant: a ? "uncollapse" : "collapse",
                              size: "xs",
                            }),
                            onClick: r,
                          }),
                          (0, v.jsx)(M._v, {
                            className: (0, _.W)({
                              [ek().collapseButtonTooltip_hidden]: !a,
                            }),
                            children: c,
                          }),
                        ],
                      },
                      "collapseTooltip",
                    ),
              [s, c, a, r],
            ),
            h = (0, b.useRef)(null),
            S = (0, b.useMemo)(
              () =>
                (0, v.jsx)(k.Z, {
                  nodeRef: h,
                  in: a,
                  timeout: 150,
                  classNames: ej,
                  unmountOnExit: !0,
                  children: (0, v.jsx)("div", {
                    className: ek().plusButtonContainer,
                    ref: h,
                    children: (0, v.jsxs)(M.u, {
                      flipOptions: eA,
                      shiftOptions: eT,
                      offsetOptions: 8,
                      placement: "right",
                      enabled: a,
                      children: [
                        (0, v.jsx)(A.z, {
                          variant: "text",
                          withRipple: !1,
                          size: "xxs",
                          icon: (0, v.jsx)(T.J, {
                            variant: "plusOutlined",
                            size: "m",
                          }),
                          className: (0, _.W)(ek().button, ek().important),
                          "aria-label": n({
                            id: "plusbar.subscription-activation",
                          }),
                        }),
                        (0, v.jsx)(M._v, {
                          children: (0, v.jsx)(U.Caption, {
                            variant: "span",
                            type: "text",
                            size: "s",
                            weight: "medium",
                            children: (0, v.jsx)(L.Z, {
                              id: "plusbar.subscription-activation",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              [h, a, n],
            ),
            y = (0, b.useRef)(null),
            f = (0, b.useMemo)(
              () =>
                (0, v.jsx)(k.Z, {
                  nodeRef: y,
                  in: !a,
                  timeout: 150,
                  classNames: eG,
                  unmountOnExit: !0,
                  children: (0, v.jsx)(eI, {
                    className: ek().plusBar,
                    forwardRef: y,
                  }),
                }),
              [a],
            );
          return (0, v.jsxs)("div", {
            className: (0, _.W)(ek().root, t),
            children: [
              (0, v.jsx)(H.rU, {
                href: "/",
                className: ek().logoLink,
                children: (0, v.jsx)(j.T, {
                  style: u,
                  className: (0, _.W)(ek().logo),
                  collapsed: a,
                  shownAnimation: i,
                  collapsedButton: p,
                }),
              }),
              (0, v.jsx)(O, {
                className: (0, _.W)(ek().navigation, {
                  [ek().navigation_withoutPins]: !d.checkExperiment(
                    C.pe.WebPins,
                    "on",
                  ),
                }),
                collapsed: a,
                "aria-label": n({ id: "navigation.main-menu" }),
                children: g,
              }),
              d.checkExperiment(C.pe.WebPins, "on") &&
                (0, v.jsx)(ef, {
                  isCollapsed: a,
                  withCollapseAnimation: !!i,
                  className: ek().pinsList,
                }),
              !o.hasPlus &&
                (0, v.jsxs)("div", { className: ek().plus, children: [f, S] }),
              (0, v.jsx)(b.Suspense, {
                children: (0, v.jsx)("div", {
                  className: ek().user,
                  children: (0, v.jsx)(W.Iw, {
                    metaClassName: (0, _.W)(ek().userMeta, {
                      [ek().userMeta_animate]: i,
                      [ek().userMeta_collapsed]: a,
                    }),
                    variant: "desktop",
                    withMeta: !0,
                  }),
                }),
              }),
            ],
          });
        });
      var eR = a(12484),
        eV = a.n(eR);
      let eO = (0, S.Pi)((e) => {
          let { className: t } = e,
            a = (0, C.hJ)(),
            { experiments: i } = (0, C.oR)(),
            { formatMessage: r } = (0, I.Z)(),
            s = r({ id: "navigation.main-menu" }),
            l = (0, b.useMemo)(
              () => ({
                search: r({ id: "navigation.search" }),
                main: r({ id: "navigation.page-main" }),
                collection: r({ id: "navigation.page-collection" }),
              }),
              [r],
            );
          return (0, v.jsx)("div", {
            className: (0, _.W)(eV().root, t),
            children: (0, v.jsx)(O, {
              collapsed: !0,
              direction: "horizontal",
              "aria-label": s,
              children: (0, v.jsx)(w, {
                children: (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, C.sQ)(i).map((e) =>
                      (0, v.jsx)(
                        B,
                        {
                          selected: a(e.path),
                          children: (0, v.jsxs)(H.rU, {
                            href: e.path,
                            children: [
                              (0, v.jsx)(T.J, {
                                variant: a(e.path) ? e.iconSelected : e.icon,
                                size: "m",
                              }),
                              (0, v.jsx)(U.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                children: l[e.id],
                              }),
                            ],
                          }),
                        },
                        e.id,
                      ),
                    ),
                    (0, v.jsx)(B, {
                      children: (0, v.jsx)(W.Iw, {
                        className: eV().user,
                        variant: "mobile",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        ew = (0, S.Pi)((e) => {
          let { className: t } = e,
            a = (0, C.uK)(),
            i = a.get(C.V0),
            r = x(),
            { settings: s } = (0, C.oR)(),
            [l, n] = (0, b.useState)(i.get(C.BU.NavbarCollapsed) || !1),
            [o, d] = (0, b.useState)(!1),
            u = (0, b.useMemo)(
              () => (s.layout === C.t8.Mobile ? eO : eD),
              [s.layout],
            ),
            c = (0, b.useCallback)(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  i.set(C.BU.NavbarCollapsed, !l, { expires: 180 }),
                  n(!l),
                  d(!0);
              },
              [l, i],
            );
          return (0, v.jsx)("aside", {
            className: (0, _.W)(P().root, { [P().root_collapsed]: l || r }, t),
            ...(0, f.BA)(f.QM.navbar.NAVBAR),
            children: (0, v.jsx)(u, {
              handleClick: c,
              collapsed: l || r,
              shownAnimation: o,
            }),
          });
        });
      var eB = a(96555);
      let eM = eB.V5.model("PinAlbumItemModel", {
          type: eB.V5.literal(q.Qm.ALBUM),
          data: K.KX,
        }),
        eU = eB.V5.model("PinArtistItemModel", {
          type: eB.V5.literal(q.Qm.ARTIST),
          data: eu.Go,
        }),
        eF = eB.V5.model("PinPlaylistItemModel", {
          type: eB.V5.literal(q.Qm.PLAYLIST),
          data: eg.Cd,
        }),
        eW = eB.V5.model("PinVibeItemModel", {
          type: eB.V5.literal(q.Qm.WAVE),
          data: ev.KW,
        }),
        eH = eB.V5.union(eM, eU, eF, eW),
        ez = (e) => "object" == typeof e && e && "type" in e;
      var eq = a(96911),
        eZ = a(20210);
      let eJ = (e) => {
          switch (e.type) {
            case q.Qm.WAVE:
              return (0, eB.pj)({ type: q.Qm.WAVE, data: (0, ev.FF)(e.data) });
            case q.Qm.PLAYLIST:
              return (0, eB.pj)({
                type: q.Qm.PLAYLIST,
                data: (0, eZ.RE)({ playlist: e.data }),
              });
            case q.Qm.ARTIST:
              return (0, eB.pj)({
                type: q.Qm.ARTIST,
                data: (0, eu.tR)(e.data),
              });
            case q.Qm.ALBUM:
              return (0, eB.pj)({
                type: q.Qm.ALBUM,
                data: (0, eq.cO)({ album: e.data }),
              });
          }
        },
        eK = eB.V5.model("Pins", {
          loadingState: eB.V5.enumeration(Object.values(C.Gu)),
          items: eB.V5.maybeNull(eB.V5.array(eH)),
          index: eB.V5.map(eB.V5.boolean),
        })
          .views((e) => ({ isPinned: (t) => !!e.index.get(t) }))
          .actions((e) => {
            let t = {
              deletePin(t) {
                var a;
                (e.items = (0, eB.pj)(
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.filter((e) => e.data.pinId !== t),
                )),
                  e.index.delete(t);
              },
              addPin(t) {
                var a, i, r, s;
                if (
                  (null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.length) === 30
                ) {
                  let t =
                    null === (s = e.items) || void 0 === s ? void 0 : s.pop();
                  void 0 !== t && e.index.delete(t.data.pinId);
                }
                null === (i = e.items) || void 0 === i || i.unshift(eJ(t));
                let l =
                  null === (r = e.items) || void 0 === r ? void 0 : r.at(0);
                l && e.index.set(l.data.pinId, !0);
              },
              getData: (0, eB.ls)(function* () {
                let { pinsResource: t, modelActionsLogger: a } = (0, eB.dU)(e);
                if (e.loadingState !== C.Gu.PENDING)
                  try {
                    var i;
                    e.loadingState = C.Gu.PENDING;
                    let a = yield t.getPins();
                    (e.items = (0, eB.pj)(a.pins.map(eJ))),
                      null === (i = e.items) ||
                        void 0 === i ||
                        i.forEach((t) => {
                          e.index.set(t.data.pinId, !0);
                        }),
                      (e.loadingState = C.Gu.RESOLVE);
                  } catch (t) {
                    (e.loadingState = C.Gu.REJECT), a.error(t);
                  }
              }),
              toggleAlbumPin: (0, eB.ls)(function* (a, i) {
                let { pinResource: r, modelActionsLogger: s } = (0, eB.dU)(e);
                if (e.loadingState !== C.Gu.PENDING)
                  try {
                    let s;
                    if (e.isPinned(i))
                      return (s = yield r.unpinAlbum(a)), t.deletePin(i), s;
                    return (s = yield r.pinAlbum(a)), ez(s) && t.addPin(s), s;
                  } catch (e) {
                    s.error(e);
                    return;
                  }
              }),
              toggleArtistPin: (0, eB.ls)(function* (a, i) {
                let { pinResource: r, modelActionsLogger: s } = (0, eB.dU)(e);
                if (e.loadingState !== C.Gu.PENDING)
                  try {
                    let s;
                    if (e.isPinned(i))
                      return (s = yield r.unpinArtist(a)), t.deletePin(i), s;
                    return (s = yield r.pinArtist(a)), ez(s) && t.addPin(s), s;
                  } catch (e) {
                    s.error(e);
                    return;
                  }
              }),
              togglePlaylistPin: (0, eB.ls)(function* (a, i) {
                let { pinResource: r, modelActionsLogger: s } = (0, eB.dU)(e);
                if (e.loadingState !== C.Gu.PENDING)
                  try {
                    let s;
                    if (e.isPinned(i))
                      return (s = yield r.unpinPlaylist(a)), t.deletePin(i), s;
                    return (
                      (s = yield r.pinPlaylist(a)), ez(s) && t.addPin(s), s
                    );
                  } catch (e) {
                    s.error(e);
                    return;
                  }
              }),
              toggleVibePin: (0, eB.ls)(function* (a, i) {
                let { pinResource: r, modelActionsLogger: s } = (0, eB.dU)(e);
                if (e.loadingState !== C.Gu.PENDING)
                  try {
                    let s;
                    if (e.isPinned(i))
                      return (s = yield r.unpinWave(a)), t.deletePin(i), s;
                    return (s = yield r.pinWave(a)), ez(s) && t.addPin(s), s;
                  } catch (e) {
                    s.error(e);
                    return;
                  }
              }),
            };
            return t;
          });
    },
    39191: function (e, t, a) {
      "use strict";
      a.d(t, {
        _: function () {
          return F;
        },
        L: function () {
          return u;
        },
      });
      var i,
        r,
        s = a(96555),
        l = a(96431),
        n = a(95539),
        o = a(5674);
      let d = [
          {
            id: "61843268",
            realId: "61843268",
            title: "Ты это серьёзно?",
            contentWarning: "explicit",
            major: { id: 87, name: "BELIEVE_DIGITAL" },
            available: !0,
            availableForPremiumUsers: !0,
            availableFullWithoutPermission: !1,
            availableForOptions: ["bookmate"],
            disclaimers: ["explicit"],
            storageDir: "",
            durationMs: 197660,
            fileSize: 0,
            r128: { i: -9.01, tp: -0.95 },
            fade: { inStart: 0, inStop: 0, outStart: 197.1, outStop: 197.5 },
            previewDurationMs: 3e4,
            artists: [
              {
                id: 3246342,
                name: "Скриптонит",
                various: !1,
                composer: !1,
                cover: {
                  type: "from-artist-photos",
                  uri: "avatars.mds.yandex.net/get-music-content/8871869/3e323853.p.3246342/%%",
                  prefix: "3e323853.p.3246342/",
                },
                genres: [],
                disclaimers: [],
              },
              {
                id: 5489695,
                name: "104",
                various: !1,
                composer: !1,
                cover: {
                  type: "from-artist-photos",
                  uri: "avatars.mds.yandex.net/get-music-content/10210263/0ecbf8f2.p.5489695/%%",
                  prefix: "0ecbf8f2.p.5489695/",
                },
                genres: [],
                disclaimers: [],
              },
            ],
            albums: [
              {
                id: 9684249,
                title: "2004",
                metaType: "music",
                contentWarning: "explicit",
                year: 2020,
                releaseDate: "2020-01-28T00:00:00+03:00",
                coverUri:
                  "avatars.mds.yandex.net/get-music-content/1880735/fa6a6018.a.9684249-1/%%",
                ogImage:
                  "avatars.mds.yandex.net/get-music-content/1880735/fa6a6018.a.9684249-1/%%",
                genre: "rusrap",
                trackCount: 24,
                recent: !1,
                veryImportant: !1,
                artists: [
                  {
                    id: 3246342,
                    name: "Скриптонит",
                    various: !1,
                    composer: !1,
                    cover: {
                      type: "from-artist-photos",
                      uri: "avatars.mds.yandex.net/get-music-content/8871869/3e323853.p.3246342/%%",
                      prefix: "3e323853.p.3246342/",
                    },
                    genres: [],
                    disclaimers: [],
                  },
                ],
                labels: [{ id: 1532485, name: "Musica36" }],
                available: !0,
                availableForPremiumUsers: !0,
                availableForOptions: ["bookmate"],
                availableForMobile: !0,
                availablePartially: !1,
                bests: [61843244, 61843242, 61843268],
                disclaimers: ["explicit"],
                trackPosition: { volume: 1, index: 22 },
              },
            ],
            coverUri:
              "avatars.mds.yandex.net/get-music-content/1880735/fa6a6018.a.9684249-1/%%",
            derivedColors: {
              average: "#736B58",
              waveText: "#CCCCCC",
              miniPlayer: "#C1BBAD",
              accent: "#A69E8B",
            },
            ogImage:
              "avatars.mds.yandex.net/get-music-content/1880735/fa6a6018.a.9684249-1/%%",
            lyricsAvailable: !1,
            type: "music",
            rememberPosition: !1,
            trackSharingFlag: "COVER_ONLY",
            lyricsInfo: {
              hasAvailableSyncLyrics: !0,
              hasAvailableTextLyrics: !0,
            },
            trackSource: "OWN",
            specialAudioResources: ["smart_preview"],
          },
          {
            id: "53729473",
            realId: "53729473",
            title: "Самурай",
            contentWarning: "explicit",
            major: { id: 87, name: "BELIEVE_DIGITAL" },
            available: !0,
            availableForPremiumUsers: !0,
            availableFullWithoutPermission: !1,
            availableForOptions: ["bookmate"],
            disclaimers: ["explicit"],
            storageDir: "",
            durationMs: 164e3,
            fileSize: 0,
            r128: { i: -11.01, tp: 0.18 },
            fade: { inStart: 0, inStop: 0.1, outStart: 160, outStop: 161.8 },
            previewDurationMs: 3e4,
            artists: [
              {
                id: 4465783,
                name: "Miyagi",
                various: !1,
                composer: !1,
                cover: {
                  type: "from-artist-photos",
                  uri: "avatars.mds.yandex.net/get-music-content/118603/e9de54a9.p.4465783/%%",
                  prefix: "e9de54a9.p.4465783/",
                },
                genres: [],
                disclaimers: [],
              },
            ],
            albums: [
              {
                id: 21265372,
                title: "Buster Keaton",
                metaType: "music",
                contentWarning: "explicit",
                year: 2019,
                releaseDate: "2019-06-21T00:00:00+03:00",
                coverUri:
                  "avatars.mds.yandex.net/get-music-content/5718717/2d401ddd.a.21265372-1/%%",
                ogImage:
                  "avatars.mds.yandex.net/get-music-content/5718717/2d401ddd.a.21265372-1/%%",
                genre: "rusrap",
                trackCount: 11,
                recent: !1,
                veryImportant: !1,
                artists: [
                  {
                    id: 4465783,
                    name: "Miyagi",
                    various: !1,
                    composer: !1,
                    cover: {
                      type: "from-artist-photos",
                      uri: "avatars.mds.yandex.net/get-music-content/118603/e9de54a9.p.4465783/%%",
                      prefix: "e9de54a9.p.4465783/",
                    },
                    genres: [],
                    disclaimers: [],
                  },
                ],
                labels: [{ id: 1001411, name: "Hajime" }],
                available: !0,
                availableForPremiumUsers: !0,
                availableForOptions: ["bookmate"],
                availableForMobile: !0,
                availablePartially: !1,
                bests: [53729475, 53729474, 53729473],
                disclaimers: ["explicit"],
                trackPosition: { volume: 1, index: 9 },
              },
            ],
            coverUri:
              "avatars.mds.yandex.net/get-music-content/5718717/2d401ddd.a.21265372-1/%%",
            derivedColors: {
              average: "#999999",
              waveText: "#CCCCCC",
              miniPlayer: "#B7B7B7",
              accent: "#999999",
            },
            ogImage:
              "avatars.mds.yandex.net/get-music-content/5718717/2d401ddd.a.21265372-1/%%",
            lyricsAvailable: !1,
            type: "music",
            rememberPosition: !1,
            trackSharingFlag: "COVER_ONLY",
            lyricsInfo: {
              hasAvailableSyncLyrics: !0,
              hasAvailableTextLyrics: !0,
            },
            trackSource: "OWN",
            specialAudioResources: ["smart_preview"],
          },
          {
            id: "119204132",
            realId: "119204132",
            title: "DIAMOND",
            major: { id: 87, name: "BELIEVE_DIGITAL" },
            available: !0,
            availableForPremiumUsers: !0,
            availableFullWithoutPermission: !1,
            availableForOptions: ["bookmate"],
            disclaimers: [],
            storageDir: "",
            durationMs: 118610,
            fileSize: 0,
            r128: { i: -7.85, tp: -0.16 },
            fade: { inStart: 0, inStop: 3.3, outStart: 117.7, outStop: 118.2 },
            previewDurationMs: 3e4,
            artists: [
              {
                id: 7251201,
                name: "Xcho",
                various: !1,
                composer: !1,
                cover: {
                  type: "from-artist-photos",
                  uri: "avatars.mds.yandex.net/get-music-content/10139807/6ed1bc67.p.7251201/%%",
                  prefix: "6ed1bc67.p.7251201/",
                },
                genres: [],
                disclaimers: [],
              },
            ],
            albums: [
              {
                id: 28188351,
                title: "DIAMOND",
                type: "single",
                metaType: "music",
                year: 2023,
                releaseDate: "2023-11-17T00:00:00+03:00",
                coverUri:
                  "avatars.mds.yandex.net/get-music-content/10641165/61b87581.a.28188351-2/%%",
                ogImage:
                  "avatars.mds.yandex.net/get-music-content/10641165/61b87581.a.28188351-2/%%",
                genre: "rusrap",
                trackCount: 1,
                recent: !1,
                veryImportant: !1,
                artists: [
                  {
                    id: 7251201,
                    name: "Xcho",
                    various: !1,
                    composer: !1,
                    cover: {
                      type: "from-artist-photos",
                      uri: "avatars.mds.yandex.net/get-music-content/10139807/6ed1bc67.p.7251201/%%",
                      prefix: "6ed1bc67.p.7251201/",
                    },
                    genres: [],
                    disclaimers: [],
                  },
                ],
                labels: [{ id: 2005528, name: "Glass Cage" }],
                available: !0,
                availableForPremiumUsers: !0,
                availableForOptions: ["bookmate"],
                availableForMobile: !0,
                availablePartially: !1,
                bests: [],
                disclaimers: [],
                trackPosition: { volume: 1, index: 1 },
              },
            ],
            coverUri:
              "avatars.mds.yandex.net/get-music-content/10641165/61b87581.a.28188351-2/%%",
            derivedColors: {
              average: "#615B56",
              waveText: "#CCCCCC",
              miniPlayer: "#BBB6B3",
              accent: "#9E9793",
            },
            ogImage:
              "avatars.mds.yandex.net/get-music-content/10641165/61b87581.a.28188351-2/%%",
            lyricsAvailable: !1,
            type: "music",
            rememberPosition: !1,
            trackSharingFlag: "COVER_ONLY",
            lyricsInfo: {
              hasAvailableSyncLyrics: !0,
              hasAvailableTextLyrics: !0,
            },
            trackSource: "OWN",
            specialAudioResources: ["smart_preview"],
          },
        ],
        u = s.V5.model("Trailer", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          errorStatusCode: s.V5.maybeNull(s.V5.number),
          tracks: s.V5.array(n.le),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gu.IDLE || e.loadingState === o.Gu.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === o.Gu.REJECT;
            },
            get isNotFound() {
              let t = e.loadingState === o.Gu.RESOLVE && 0 === e.tracks.length,
                a = e.errorStatusCode === l.CN.NOT_FOUND;
              return t || a;
            },
          }))
          .actions((e) => {
            let t = {
              getArtistTrailer: (0, s.ls)(function* (a) {
                let { artistsResource: i } = (0, s.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    (e.loadingState = o.Gu.PENDING),
                      yield i.getTrailer(a),
                      (e.tracks = (0, s.pj)(d.map(n.Vt))),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getAlbumTrailer: (0, s.ls)(function* (a) {
                let { albumResource: i } = (0, s.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    (e.loadingState = o.Gu.PENDING),
                      yield i.getTrailer(a),
                      (e.tracks = (0, s.pj)(d.map(n.Vt))),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getPlaylistTrailer: (0, s.ls)(function* (a) {
                let { usersResource: i } = (0, s.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    (e.loadingState = o.Gu.PENDING),
                      yield i.getPlaylistTrailer(a),
                      (e.tracks = (0, s.pj)(d.map(n.Vt))),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getTrackTrailer: (0, s.ls)(function* (a) {
                let { tracksResource: i } = (0, s.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    (e.loadingState = o.Gu.PENDING),
                      yield i.getTrailer(a),
                      (e.tracks = (0, s.pj)(d.map(n.Vt))),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              handleError(t) {
                let { modelActionsLogger: a } = (0, s.dU)(e);
                a.error(t),
                  t instanceof l.du &&
                    (t.statusCode === l.CN.NOT_FOUND ||
                      t.statusCode === l.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = l.CN.NOT_FOUND),
                  e.loadingState !== o.Gu.IDLE &&
                    (e.loadingState = o.Gu.REJECT);
              },
            };
            return t;
          });
      var c = a(8759),
        m = a(33423),
        g = a(65244),
        p = a(15527),
        h = a(14581),
        v = a(31476),
        _ = a(35338),
        S = a(99616),
        b = a(57413),
        y = a(14408),
        f = a(44285);
      ((i = r || (r = {})).ALBUM = "album"),
        (i.ARTIST = "artist"),
        (i.PLAYLIST = "playlist"),
        (i.TRACK = "track");
      var C = a(2814),
        E = a(12670),
        x = a(76560),
        N = a.n(x);
      let P = (e) => {
          let { isActive: t, className: a, withNavigateButton: i } = e;
          return (0, c.jsxs)("div", {
            className: (0, _.W)(N().root, a),
            children: [
              (0, c.jsx)(E.Shimmer, {
                isActive: t,
                radius: "xxxl",
                className: N().playButtonShimmer,
              }),
              i &&
                (0, c.jsx)(E.Shimmer, {
                  isActive: t,
                  radius: "xxxl",
                  className: N().linkButtonShimmer,
                }),
            ],
          });
        },
        I = (0, m.Pi)((e) => {
          let {
              isShimmerVisible: t,
              isShimmerActive: a,
              className: i,
              withNavigateButton: r,
            } = e,
            s = (0, S.useMemo)(
              () =>
                (0, c.jsxs)("div", {
                  className: (0, _.W)(N().root, i),
                  children: [
                    (0, c.jsx)(p.z, {
                      radius: "xxxl",
                      size: "default",
                      color: "secondary",
                      icon: (0, c.jsx)(h.J, { variant: "play", size: "xxxs" }),
                      className: N().button,
                      children: (0, c.jsx)(C.Z, {
                        id: "trailer.listen-full-version",
                      }),
                    }),
                    r &&
                      (0, c.jsx)(p.z, {
                        radius: "xxxl",
                        size: "default",
                        color: "secondary",
                        className: N().button,
                        children: (0, c.jsx)(C.Z, { id: "trailer.navigate" }),
                      }),
                  ],
                }),
              [i, r],
            );
          return t
            ? P({ isActive: a, withNavigateButton: r, className: i })
            : s;
        });
      var L = a(45656),
        k = a(96437),
        A = a(1918),
        T = a(88929),
        j = a.n(T);
      let G = {
          [r.ALBUM]: (0, c.jsx)(C.Z, { id: "trailer.title-album" }),
          [r.ARTIST]: (0, c.jsx)(C.Z, { id: "trailer.title-artist" }),
          [r.PLAYLIST]: (0, c.jsx)(C.Z, { id: "trailer.title-playlist" }),
          [r.TRACK]: (0, c.jsx)(C.Z, { id: "trailer.title-track" }),
        },
        D = (e, t) =>
          (0, c.jsx)("div", {
            className: j().coverContainer,
            children: (0, c.jsx)(E.Shimmer, {
              isActive: e,
              radius: t,
              className: j().cover,
            }),
          }),
        R = (e) =>
          (0, c.jsxs)("div", {
            className: j().textContainer,
            children: [
              (0, c.jsx)("div", {
                className: j().shimmerContainer,
                children: (0, c.jsx)(E.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: j().titleShimmer,
                }),
              }),
              (0, c.jsx)("div", {
                className: j().shimmerContainer,
                children: (0, c.jsx)(E.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: j().descriptionShimmer,
                }),
              }),
            ],
          }),
        V = (0, m.Pi)((e) => {
          let {
              isShimmerVisible: t,
              isShimmerActive: a,
              variant: i,
              className: s,
            } = e,
            l = i === r.ARTIST ? "round" : "s",
            n = (0, S.useMemo)(
              () =>
                (0, c.jsxs)("div", {
                  className: j().coverContainer,
                  children: [
                    (0, c.jsx)(k.Paper, {
                      radius: l,
                      className: j().cover,
                      withShadow: !0,
                      children: (0, c.jsx)(L.Image, {
                        "aria-hidden": !0,
                        src: "avatars.mds.yandex.net/get-music-content/8871869/3e323853.p.3246342/%%",
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                    }),
                    (0, c.jsx)("div", {
                      className: j().iconContainer,
                      style: { "--icon-background-color": "#736B58" },
                      children: (0, c.jsx)(h.J, {
                        variant: "trailer",
                        size: "xs",
                        className: j().icon,
                      }),
                    }),
                  ],
                }),
              [l],
            ),
            o = (0, S.useMemo)(
              () =>
                (0, c.jsxs)("div", {
                  className: j().textContainer,
                  children: [
                    (0, c.jsx)(A.Caption, {
                      variant: "span",
                      type: "controls",
                      className: (0, _.W)(j().text, j().title),
                      lineClamp: 1,
                      children: G[i],
                    }),
                    (0, c.jsx)(f.rU, {
                      href: "#",
                      className: j().link,
                      children: (0, c.jsx)(A.Caption, {
                        variant: "span",
                        type: "controls",
                        lineClamp: 1,
                        className: j().text,
                        children: "Скриптонит",
                      }),
                    }),
                  ],
                }),
              [i],
            );
          return (0, c.jsxs)("div", {
            className: (0, _.W)(j().root, s),
            children: [
              t ? D(a, l) : n,
              t ? R(a) : o,
              !t &&
                (0, c.jsx)(f.JM, {
                  className: j().playButton,
                  iconSize: "m",
                  variant: "filled",
                  isPlaying: !1,
                  iconClassName: j().playButtonIcon,
                }),
            ],
          });
        });
      var O = a(26365),
        w = a.n(O);
      let B = (0, m.Pi)(() => {
        let e = r.ALBUM,
          t = e === r.ALBUM ? n.RJ : n.O2,
          a = (0, S.useCallback)(
            (e, t) => ({
              contextData: {
                type: b.Ak.Various,
                trailer: !0,
                meta: { id: e.id },
                from: "test",
              },
              entitiesData: [{ type: y.A4.SmartPreview, meta: d[t] }],
              loadContextMeta: !0,
            }),
            [],
          ),
          i = (0, S.useMemo)(() => {
            let e = { "--track-progress": "76%" };
            return d.map(n.Vt).map((i, r) =>
              (0, c.jsx)(
                "div",
                {
                  className: (0, _.W)(w().trackContainer, {
                    [w().trackContainer_active]: 0 === r,
                  }),
                  style: e,
                  children: (0, c.jsx)(t, {
                    position: r + 1,
                    withLightning: 0 === r,
                    track: i,
                    playContextParams: a(i, r),
                  }),
                },
                i.id,
              ),
            );
          }, [t, a, !1, !1, e]);
        return (0, c.jsxs)("div", {
          className: w().root,
          children: [
            (0, c.jsx)(V, {
              isShimmerVisible: !1,
              isShimmerActive: !1,
              variant: e,
              className: w().header,
            }),
            i,
            (0, c.jsx)(I, {
              isShimmerVisible: !1,
              isShimmerActive: !1,
              withNavigateButton: !0,
              className: w().footer,
            }),
          ],
        });
      });
      var M = a(42762),
        U = a.n(M);
      let F = (0, m.Pi)(() => {
        let {
            settings: e,
            modals: { trailerModal: t },
          } = (0, o.oR)(),
          { contentRef: a } = (0, o.$Y)(),
          { formatMessage: i } = (0, g.Z)(),
          r = e.layout === o.t8.Mobile;
        return (0, c.jsxs)(v.u, {
          size: "fitContent",
          placement: r ? "default" : "right",
          open: t.isOpened,
          onOpenChange: t.onOpenChange,
          onClose: t.close,
          className: U().root,
          contentClassName: U().modalContent,
          overlayClassName: U().overlay,
          portalNode: r ? null : a,
          showHeader: !1,
          children: [
            (0, c.jsx)("div", {
              className: U().header,
              children: (0, c.jsx)(p.z, {
                radius: "round",
                color: "secondary",
                size: "xxs",
                icon: (0, c.jsx)(h.J, { variant: "close", size: "xxs" }),
                onClick: t.close,
                "aria-label": i({
                  id: "interface-actions.close-my-vibe-settings",
                }),
              }),
            }),
            (0, c.jsx)(B, {}),
          ],
        });
      });
    },
    65688: function (e) {
      e.exports = {
        root: "Genre_root__80dlk",
        link: "Genre_link__Wewaq",
        linkTitle: "Genre_linkTitle__ORAsw",
        list: "Genre_list__C2Pxf",
      };
    },
    12576: function (e) {
      e.exports = {
        root: "NotificationUpdate_root__hpSQi",
        important: "NotificationUpdate_important___0WHj",
        text: "NotificationUpdate_text__YylYD",
        button: "NotificationUpdate_button__F3O16",
        message: "NotificationUpdate_message__rLYpW",
      };
    },
    45679: function (e) {
      e.exports = {
        root: "ReleaseNotesModal_root__RSw1p",
        modalHeader: "ReleaseNotesModal_modalHeader__gp9SA",
        modalContent: "ReleaseNotesModal_modalContent__g8OTu",
        scrollableContent: "ReleaseNotesModal_scrollableContent__zGdbH",
        important: "ReleaseNotesModal_important__u8yP4",
        notes: "ReleaseNotesModal_notes__bVAoa",
        date: "ReleaseNotesModal_date__s3_ux",
        description: "ReleaseNotesModal_description__B_yLI",
        paragraph: "ReleaseNotesModal_paragraph___laDJ",
        note: "ReleaseNotesModal_note__S9E6z",
        version: "ReleaseNotesModal_version__4Mcd5",
        item: "ReleaseNotesModal_item___CYml",
        code: "ReleaseNotesModal_code__Yv3QD",
      };
    },
    99750: function (e) {
      e.exports = {
        root: "TitleBar_root__QjdOZ",
        button: "TitleBar_button__9MptL",
        button_withSecondaryColor: "TitleBar_button_withSecondaryColor__oIkuo",
        icon: "TitleBar_icon__8Wji9",
        icon_withSecondaryColor: "TitleBar_icon_withSecondaryColor__vuw6G",
        closeButton: "TitleBar_closeButton__Epxh7",
      };
    },
    44752: function (e) {
      e.exports = {
        root: "AlbumPage_root__RMrFx",
        important: "AlbumPage_important__x2o8I",
        averageColorBackground: "AlbumPage_averageColorBackground__PmVaF",
        header: "AlbumPage_header__TDpqp",
        content: "AlbumPage_content__1JXxB",
        footerContainer: "AlbumPage_footerContainer__1IxWF",
        carouselBlocks: "AlbumPage_carouselBlocks__VIvNT",
        carouselBlock: "AlbumPage_carouselBlock__oWYmS",
        carouselBlockHeader: "AlbumPage_carouselBlockHeader__Bb3Ts",
        carouselContainer: "AlbumPage_carouselContainer__9clXz",
        textItem: "AlbumPage_textItem__1T3qL",
        text: "AlbumPage_text__rCU1L",
        shimmerItem: "AlbumPage_shimmerItem___Yecm",
        footer: "AlbumPage_footer__6_0Ei",
      };
    },
    28280: function (e) {
      e.exports = {
        tabCarousel: "PodcastContent_tabCarousel__cNl0q",
        tab: "PodcastContent_tab__6Rx8j",
        contentAbout: "PodcastContent_contentAbout__OFJ8L",
        infoBlock: "PodcastContent_infoBlock__kDh2i",
        infoTitle: "PodcastContent_infoTitle__WnMqm",
        content: "PodcastContent_content__U7mlc",
        lastEpisodes: "PodcastContent_lastEpisodes__GhmYl",
      };
    },
    28674: function (e) {
      e.exports = {
        root: "ArtistAlbumsPage_root__UVZDz",
        scrollContent: "ArtistAlbumsPage_scrollContent__DUMkg",
        scrollContainer: "ArtistAlbumsPage_scrollContainer__2FrjI",
        important: "ArtistAlbumsPage_important__Id_vh",
        footer: "ArtistAlbumsPage_footer__6Nrct",
        item: "ArtistAlbumsPage_item__kiegh",
        content: "ArtistAlbumsPage_content__65D6P",
      };
    },
    8023: function (e) {
      e.exports = {
        root: "ArtistConcertsPage_root__DDTmb",
        scrollableContainer: "ArtistConcertsPage_scrollableContainer__qrAF_",
        container: "ArtistConcertsPage_container__ho6Fw",
        content: "ArtistConcertsPage_content__Ynto2",
        footer: "ArtistConcertsPage_footer__kQL7m",
      };
    },
    50871: function (e) {
      e.exports = { root: "ArtistFamiliarPage_root__9Zjo0" };
    },
    67807: function (e) {
      e.exports = {
        root: "ArtistFamiliarPageContent_root__0Mc9t",
        scrollContainer: "ArtistFamiliarPageContent_scrollContainer__TD6Kj",
        important: "ArtistFamiliarPageContent_important__o2KTP",
        content: "ArtistFamiliarPageContent_content__QquDA",
        block: "ArtistFamiliarPageContent_block__Cr2H_",
        blockHeader: "ArtistFamiliarPageContent_blockHeader__Z_uvq",
        tracksBlock: "ArtistFamiliarPageContent_tracksBlock__SCCLT",
        footer: "ArtistFamiliarPageContent_footer__nveR8",
        item: "ArtistFamiliarPageContent_item__fyC2q",
        shimmerTitle: "ArtistFamiliarPageContent_shimmerTitle__WU3vH",
      };
    },
    38462: function (e) {
      e.exports = {
        root: "ArtistFamiliarPageEmpty_root__s5xX9",
        icon: "ArtistFamiliarPageEmpty_icon__b7kR5",
        title: "ArtistFamiliarPageEmpty_title__wvBGS",
      };
    },
    81920: function (e) {
      e.exports = {
        root: "ArtistFamiliarPageHeader_root__0Wxyx",
        container: "ArtistFamiliarPageHeader_container__HFQzt",
        title: "ArtistFamiliarPageHeader_title__YpVQg",
        tabs: "ArtistFamiliarPageHeader_tabs__CrnJC",
        tab: "ArtistFamiliarPageHeader_tab__RK4OK",
        tabsShimmer: "ArtistFamiliarPageHeader_tabsShimmer__cbLvV",
        tabShimmer: "ArtistFamiliarPageHeader_tabShimmer__iLiqI",
        staticHeader: "ArtistFamiliarPageHeader_staticHeader__LrzR8",
        important: "ArtistFamiliarPageHeader_important__buc81",
        stickyHeader: "ArtistFamiliarPageHeader_stickyHeader__u7JdF",
      };
    },
    41550: function (e) {
      e.exports = {
        root: "ArtistPage_root__QPg3p",
        averageColorBackground: "ArtistPage_averageColorBackground__wXTSY",
        header: "ArtistPage_header__tQnNe",
        content: "ArtistPage_content__iZHVN",
        recents: "ArtistPage_recents__fjgcr",
        popularTracksBlock: "ArtistPage_popularTracksBlock__uJall",
        popularTracksBlock_withReleaseBlock:
          "ArtistPage_popularTracksBlock_withReleaseBlock__mzSb3",
        carouselBlockHeader: "ArtistPage_carouselBlockHeader__CtGDa",
        popularTracksBlockHeader: "ArtistPage_popularTracksBlockHeader__TysMC",
        releaseBlockHeader: "ArtistPage_releaseBlockHeader__OmgPW",
        releaseBlockHeaderShimmer:
          "ArtistPage_releaseBlockHeaderShimmer__AvOZC",
        popularTracksBlockList: "ArtistPage_popularTracksBlockList__3khYd",
        releaseBlock: "ArtistPage_releaseBlock__wzo2G",
        releaseBlockCard: "ArtistPage_releaseBlockCard__Q9Vim",
        important: "ArtistPage_important__rngCz",
        concertsBlock: "ArtistPage_concertsBlock__1BfM8",
        carouselBlock: "ArtistPage_carouselBlock__7tYRK",
        carouselBlocks: "ArtistPage_carouselBlocks__KfSTw",
        footer: "ArtistPage_footer__8m6P9",
      };
    },
    33768: function (e) {
      e.exports = {
        scrollableContent: "ArtistSimilarPage_scrollableContent__WD72A",
        container: "ArtistSimilarPage_container__DDj5O",
        content: "ArtistSimilarPage_content__X71xs",
        footer: "ArtistSimilarPage_footer__FdVkO",
      };
    },
    60495: function (e) {
      e.exports = {
        root: "ArtistTracksPage_root__ad3rI",
        footer: "ArtistTracksPage_footer__KN2i_",
        scrollContainer: "ArtistTracksPage_scrollContainer__9iO2g",
        important: "ArtistTracksPage_important__iulth",
        content: "ArtistTracksPage_content__6LJJd",
        shimmerItem: "ArtistTracksPage_shimmerItem__136_r",
      };
    },
    63049: function (e) {
      e.exports = {
        root: "ChartPage_root__JwQua",
        container: "ChartPage_container__mdNLA",
        scrollContent: "ChartPage_scrollContent__Hz3LW",
        scrollContainer: "ChartPage_scrollContainer__VJzA3",
        important: "ChartPage_important__HCgQ4",
        content: "ChartPage_content__adrCP",
        footer: "ChartPage_footer__JyfRg",
        shimmerItem: "ChartPage_shimmerItem__n3Z_s",
      };
    },
    56908: function (e) {
      e.exports = {
        root: "GenreAlbumsPage_root__r_Sts",
        scrollContent: "GenreAlbumsPage_scrollContent__sBMMq",
        scrollContainer: "GenreAlbumsPage_scrollContainer__K_v_b",
        important: "GenreAlbumsPage_important__r3P2T",
        footer: "GenreAlbumsPage_footer__vmCiR",
        item: "GenreAlbumsPage_item__zRzB0",
        content: "GenreAlbumsPage_content__PRJUm",
      };
    },
    11318: function (e) {
      e.exports = {
        root: "GenreArtistsPage_root__PgtIz",
        scrollContent: "GenreArtistsPage_scrollContent__fDonT",
        scrollContainer: "GenreArtistsPage_scrollContainer__s_HLR",
        important: "GenreArtistsPage_important__YxR3i",
        footer: "GenreArtistsPage_footer__fYaCO",
        item: "GenreArtistsPage_item__OX8zl",
        content: "GenreArtistsPage_content__cz47x",
      };
    },
    59896: function (e) {
      e.exports = {
        root: "GenrePage_root___kL_v",
        content: "GenrePage_content__NRwAJ",
        shimmerTitle: "GenrePage_shimmerTitle__hrgjK",
        carouselBlocks: "GenrePage_carouselBlocks__kR63B",
        carouselBlock: "GenrePage_carouselBlock__QCkpK",
        carouselBlockHeader: "GenrePage_carouselBlockHeader__u12sn",
      };
    },
    39214: function (e) {
      e.exports = {
        root: "GenrePlaylistsPage_root__WZwkl",
        scrollContent: "GenrePlaylistsPage_scrollContent__rahSG",
        scrollContainer: "GenrePlaylistsPage_scrollContainer__N3BZw",
        important: "GenrePlaylistsPage_important__986BX",
        footer: "GenrePlaylistsPage_footer__aMDul",
        item: "GenrePlaylistsPage_item__tUsqJ",
        content: "GenrePlaylistsPage_content__2rKJY",
      };
    },
    73899: function (e) {
      e.exports = {
        root: "GenresPage_root__LhP_S",
        shimmerTitle: "GenresPage_shimmerTitle__4j8uH",
        content: "GenresPage_content__yhKrQ",
        list: "GenresPage_list__l2Cuc",
      };
    },
    86422: function (e) {
      e.exports = {
        root: "KinopoiskPage_root__efIzv",
        content: "KinopoiskPage_content__uUKLe",
        header: "KinopoiskPage_header__EH22X",
        feedbackUrl: "KinopoiskPage_feedbackUrl__Bk6i6",
        feedbackUrl_default: "KinopoiskPage_feedbackUrl_default__TZ83j",
        ripple: "KinopoiskPage_ripple__gev3H",
        feedbackUrl_outline: "KinopoiskPage_feedbackUrl_outline__qEo4x",
        feedbackUrl_text: "KinopoiskPage_feedbackUrl_text__K21_J",
        landing: "KinopoiskPage_landing__Ljr6g",
        landing_onlyWizard: "KinopoiskPage_landing_onlyWizard__iFo5R",
        footer: "KinopoiskPage_footer__DMI7A",
        error: "KinopoiskPage_error__3oxp4",
      };
    },
    37436: function (e) {
      e.exports = {
        root: "NonMusicPage_root__IPKkH",
        content: "NonMusicPage_content__7_TYy",
        header: "NonMusicPage_header__dijgk",
        landing: "NonMusicPage_landing__kGKTh",
        landing_onlyWizard: "NonMusicPage_landing_onlyWizard__P9nN3",
        footer: "NonMusicPage_footer__juz5v",
        error: "NonMusicPage_error__oW0V3",
      };
    },
    90598: function (e) {
      e.exports = {
        root: "PlaylistPage_root__ajyaP",
        important: "PlaylistPage_important__1Xpl5",
        averageColorBackground: "PlaylistPage_averageColorBackground__3wEkw",
        header: "PlaylistPage_header__EdIoE",
        content: "PlaylistPage_content__T7zOm",
        footerContainer: "PlaylistPage_footerContainer__8uPBx",
        carouselBlock: "PlaylistPage_carouselBlock__lvaKg",
        carouselBlockHeader: "PlaylistPage_carouselBlockHeader__asTWy",
        carouselContainer: "PlaylistPage_carouselContainer__TfWiI",
        footer: "PlaylistPage_footer__ih_cJ",
      };
    },
    63690: function (e) {
      e.exports = {
        root: "PlaylistPageDnDItemWrapper_root__eBm1E",
        inner: "PlaylistPageDnDItemWrapper_inner__UXQZf",
        dragging: "PlaylistPageDnDItemWrapper_dragging__Pl94m",
        dragOverlay: "PlaylistPageDnDItemWrapper_dragOverlay__tWQut",
      };
    },
    43601: function (e) {
      e.exports = {
        root: "PlaylistPageDnDList_root__6Fryw",
        draggableItemWrapper: "PlaylistPageDnDList_draggableItemWrapper__vvEWL",
        noHoverItem: "PlaylistPageDnDList_noHoverItem__dbPTH",
      };
    },
    81711: function (e) {
      e.exports = {
        emptyBlockContainer: "PlaylistPageItem_emptyBlockContainer__K5xRV",
        shimmerItem: "PlaylistPageItem_shimmerItem__s_fFo",
      };
    },
    15697: function (e) {
      e.exports = {
        scrollableContainer: "PostPage_scrollableContainer__iV9Bo",
        container: "PostPage_container__orSfz",
        shimmerTitle: "PostPage_shimmerTitle__EeFCD",
      };
    },
    57551: function (e) {
      e.exports = {
        root: "PostAlbums_root__u2a1q",
        content: "PostAlbums_content__uMSez",
      };
    },
    74706: function (e) {
      e.exports = {
        root: "PostArtists_root__Zxmjq",
        content: "PostArtists_content__JzGOH",
      };
    },
    95456: function (e) {
      e.exports = {
        root: "PostPlaylists_root__3tea0",
        content: "PostPlaylists_content__2fXI5",
      };
    },
    18448: function (e) {
      e.exports = {
        root: "PostShimmer_root__MlLkY",
        top: "PostShimmer_top__ySpmZ",
        bottom: "PostShimmer_bottom__ajW_P",
      };
    },
    54301: function (e) {
      e.exports = {
        root: "SearchHistoryPage_root__Wbvyf",
        title: "SearchHistoryPage_title__gnJuo",
        header: "SearchHistoryPage_header__YdTG5",
        scrollContainer: "SearchHistoryPage_scrollContainer__ScAez",
        scrollContent: "SearchHistoryPage_scrollContent__5AXWC",
        content: "SearchHistoryPage_content__iPgVO",
        desktopItem: "SearchHistoryPage_desktopItem__Xv9C_",
        items: "SearchHistoryPage_items___okS8",
        emptyHistory: "SearchHistoryPage_emptyHistory__gzfUu",
      };
    },
    16894: function (e) {
      e.exports = {
        header: "SearchPage_header__BOkdn",
        root: "SearchPage_root__i7sE0",
        root_showFilters: "SearchPage_root_showFilters__reB44",
        input: "SearchPage_input__TSbxK",
        content: "SearchPage_content__ycqK5",
        scrollableContent: "SearchPage_scrollableContent__gzoBu",
        main: "SearchPage_main__FV4Cr",
        tabCarousel: "SearchPage_tabCarousel__9cWOl",
        filter: "SearchPage_filter__5xzTL",
        filter_selected: "SearchPage_filter_selected__FOfyJ",
        compilations: "SearchPage_compilations__52N9u",
        footer: "SearchPage_footer__20bvg",
      };
    },
    3537: function (e) {
      e.exports = {
        root: "TagPage_root__EWN9A",
        scrollContainer: "TagPage_scrollContainer__lvG_1",
        important: "TagPage_important__Jq37E",
        content: "TagPage_content__rUC_l",
        footer: "TagPage_footer__W0mZr",
        item: "TagPage_item__X_lW7",
      };
    },
    63548: function (e) {
      e.exports = {
        root: "LastEpisodes_root__4JPKj",
        blockHeader: "LastEpisodes_blockHeader__se7bd",
        shimmerItem: "LastEpisodes_shimmerItem__Iirx5",
      };
    },
    67085: function (e) {
      e.exports = {
        carouselBlock: "MixesCarousel_carouselBlock__ZpMU2",
        carouselHeader: "MixesCarousel_carouselHeader__6mMHX",
        mixItem: "MixesCarousel_mixItem__YNSsB",
      };
    },
    54672: function (e) {
      e.exports = {
        mixesTitle: "MixesGrid_mixesTitle__QawnL",
        mixesGrid: "MixesGrid_mixesGrid__uZQtt",
      };
    },
    29913: function (e) {
      e.exports = {
        root: "Navbar_root__chF4R",
        root_collapsed: "Navbar_root_collapsed__pozJX",
      };
    },
    27206: function (e) {
      e.exports = {
        root: "NavbarDesktop_root__scYzp",
        button: "NavbarDesktop_button__x_Ik1",
        important: "NavbarDesktop_important__fRfE5",
        collapseButton: "NavbarDesktop_collapseButton__XQh9d",
        navigation: "NavbarDesktop_navigation__dLUGW",
        navigation_withoutPins: "NavbarDesktop_navigation_withoutPins__SHInZ",
        logoLink: "NavbarDesktop_logoLink__KR0Dk",
        logo: "NavbarDesktop_logo__Z4jGx",
        collapseButtonTooltip_hidden:
          "NavbarDesktop_collapseButtonTooltip_hidden__tFoZZ",
        title: "NavbarDesktop_title__OrnHN",
        title_animate: "NavbarDesktop_title_animate__XLxaQ",
        animation_show: "NavbarDesktop_animation_show__pRFj9",
        title_collapsed: "NavbarDesktop_title_collapsed__IH9Bc",
        animation_hide: "NavbarDesktop_animation_hide__8VxPs",
        pinsList: "NavbarDesktop_pinsList___jXIM",
        plus: "NavbarDesktop_plus__etQJm",
        plusButtonContainer: "NavbarDesktop_plusButtonContainer__C7Wf5",
        plusButtonContainer_enter:
          "NavbarDesktop_plusButtonContainer_enter__VRwh3",
        plusButtonContainer_enter_active:
          "NavbarDesktop_plusButtonContainer_enter_active__4fkf5",
        plusButtonContainer_exit:
          "NavbarDesktop_plusButtonContainer_exit__jtA7i",
        plusButtonContainer_exit_active:
          "NavbarDesktop_plusButtonContainer_exit_active__CYCui",
        plusBar: "NavbarDesktop_plusBar__E6cfw",
        plusBar_enter: "NavbarDesktop_plusBar_enter__om_ax",
        plusBar_enter_active: "NavbarDesktop_plusBar_enter_active__2VFPS",
        animation_show_scale: "NavbarDesktop_animation_show_scale___HzwE",
        plusBar_exit: "NavbarDesktop_plusBar_exit__bgdAw",
        plusBar_exit_active: "NavbarDesktop_plusBar_exit_active__s_9sz",
        animation_hide_scale: "NavbarDesktop_animation_hide_scale__mzAvb",
        user: "NavbarDesktop_user__dzbuH",
        userMeta_animate: "NavbarDesktop_userMeta_animate__3KkeR",
        userMeta_collapsed: "NavbarDesktop_userMeta_collapsed__rTdFz",
      };
    },
    12484: function (e) {
      e.exports = {
        root: "NavbarMobile_root__NhKBQ",
        user: "NavbarMobile_user__vTEb2",
      };
    },
    53724: function (e) {
      e.exports = {
        root: "Pin_root__UyplT",
        ripple: "Pin_ripple__Vzpzs",
        link: "Pin_link__nz6I7",
        root_withoutLink: "Pin_root_withoutLink__fr1XH",
        info: "Pin_info__x_7Zx",
        info_collapsed: "Pin_info_collapsed__bF9ac",
        info_animated: "Pin_info_animated__AQQZk",
        show: "Pin_show__xSkOa",
        hide: "Pin_hide__RCc9X",
        meta: "Pin_meta__MzX_7",
        contextMenu: "Pin_contextMenu__WGmhp",
        contextMenu_hidden: "Pin_contextMenu_hidden__xksGY",
        title: "Pin_title__Jw5WW",
        subtitle: "Pin_subtitle__rb8Gq",
        cover: "Pin_cover__7ofYY",
        cover_withAnimation: "Pin_cover_withAnimation__2Z2n6",
        show_and_scale: "Pin_show_and_scale__VdNfj",
      };
    },
    93088: function (e) {
      e.exports = {
        contextMenu: "PinItem_contextMenu__VwiFp",
        contextMenu_visible: "PinItem_contextMenu_visible__Zgwkh",
        root: "PinItem_root__WSoCn",
        image: "PinItem_image__Ow56U",
        animation: "PinItem_animation__syCWX",
        cover: "PinItem_cover__9TcjE",
        tooltip: "PinItem_tooltip__BGwBw",
      };
    },
    13774: function (e) {
      e.exports = {
        root: "PinsList_root__LN_2Z",
        content: "PinsList_content__9RG7s",
        pin_enter: "PinsList_pin_enter__2p2_6",
        pin_enter_active: "PinsList_pin_enter_active__eNGlc",
        "enter-fade": "PinsList_enter-fade__G_QY8",
        "enter-move": "PinsList_enter-move__DSAXH",
        pin_exit: "PinsList_pin_exit__y_gcM",
        pin_exit_active: "PinsList_pin_exit_active__rF5Je",
        "exit-fade": "PinsList_exit-fade__M6fYX",
        "exit-move": "PinsList_exit-move__Jtgi0",
      };
    },
    36509: function (e) {
      e.exports = {
        root: "PlusBar_root__yN9SZ",
        logos: "PlusBar_logos__8Gvj7",
        addition: "PlusBar_addition__npwOZ",
        title: "PlusBar_title__SwzSx",
        buttons: "PlusBar_buttons__QqSS4",
      };
    },
    95431: function (e) {
      e.exports = {
        root: "SearchPlaylistInput_root__o14iM",
        content: "SearchPlaylistInput_content__iDyfU",
        catalog: "SearchPlaylistInput_catalog__5r6Xm",
        catalog_withTracks: "SearchPlaylistInput_catalog_withTracks__B2ZYF",
        track: "SearchPlaylistInput_track__2TGLS",
        shimmerItem: "SearchPlaylistInput_shimmerItem__V0cOt",
        emptyBlockContainer: "SearchPlaylistInput_emptyBlockContainer__NSQKG",
        disappearingTrack: "SearchPlaylistInput_disappearingTrack__D6ja5",
        disappearing: "SearchPlaylistInput_disappearing__w48Cd",
        appearingTrack: "SearchPlaylistInput_appearingTrack__CYHzN",
        appearing: "SearchPlaylistInput_appearing__SafaE",
      };
    },
    26365: function (e) {
      e.exports = {
        root: "Trailer_root__c8eG3",
        header: "Trailer_header__FBFMi",
        trackContainer: "Trailer_trackContainer__U_c_r",
        trackContainer_active: "Trailer_trackContainer_active__ku3Ad",
        trackShimmer: "Trailer_trackShimmer__qmCN3",
        albumShimmer: "Trailer_albumShimmer__8RxuC",
        footer: "Trailer_footer__POMTS",
      };
    },
    76560: function (e) {
      e.exports = {
        root: "TrailerFooter_root__LKXby",
        playButtonShimmer: "TrailerFooter_playButtonShimmer__5QwPi",
        linkButtonShimmer: "TrailerFooter_linkButtonShimmer__ZV1s1",
      };
    },
    88929: function (e) {
      e.exports = {
        root: "TrailerHeader_root__n8XkZ",
        coverContainer: "TrailerHeader_coverContainer__4R_jG",
        cover: "TrailerHeader_cover__G6BRb",
        iconContainer: "TrailerHeader_iconContainer__QXR64",
        icon: "TrailerHeader_icon__5T0JT",
        textContainer: "TrailerHeader_textContainer__LR03v",
        text: "TrailerHeader_text__BWMLw",
        link: "TrailerHeader_link__kObd5",
        title: "TrailerHeader_title__GuIe0",
        playButton: "TrailerHeader_playButton__MGmhZ",
        playButtonIcon: "TrailerHeader_playButtonIcon__JFbl_",
        shimmerContainer: "TrailerHeader_shimmerContainer__cOsas",
        titleShimmer: "TrailerHeader_titleShimmer__KKn7b",
        descriptionShimmer: "TrailerHeader_descriptionShimmer__WOlY5",
      };
    },
    42762: function (e) {
      e.exports = {
        root: "TrailerModal_root__T4ZJ8",
        modalContent: "TrailerModal_modalContent__ZSNFe",
        overlay: "TrailerModal_overlay__D9vRl",
        header: "TrailerModal_header__0h1zj",
      };
    },
    59899: function (e, t, a) {
      "use strict";
      a.d(t, {
        Tb: function () {
          return c;
        },
        yC: function () {
          return l;
        },
        nJ: function () {
          return s;
        },
        sd: function () {
          return y;
        },
        $J: function () {
          return C;
        },
        Ez: function () {
          return N;
        },
      });
      var i,
        r,
        s,
        l,
        n = a(48616);
      async function o(e) {
        let { secretKey: t, data: a } = e,
          i = new TextEncoder(),
          r = i.encode(t);
        return crypto.subtle
          .importKey(
            "raw",
            r,
            { name: "HMAC", hash: { name: "SHA-256" } },
            !0,
            ["sign", "verify"],
          )
          .then(async (e) => {
            let t = i.encode(a);
            return crypto.subtle.sign("HMAC", e, t).then((e) => {
              let t = new Uint8Array(e),
                a = btoa(String.fromCharCode(...t));
              return a.slice(0, -1);
            });
          });
      }
      function d() {
        return Math.floor(Date.now() / 1e3);
      }
      var u = a(63278);
      class c extends u.y {
        name = "DownloadInfoMediaProviderException";
        constructor(
          e,
          { code: t = "E_DOWNLOADINFO_MEDIA_PROVIDER", ...a } = {},
        ) {
          super(e, { code: t, ...a }), Object.setPrototypeOf(this, c.prototype);
        }
      }
      let m = {
        lossless: [{ codec: n.V9.FLAC, bitrateInKbps: 0 }],
        hq: [{ codec: n.V9.MP3, bitrateInKbps: 320 }],
        nq: [
          { codec: n.V9.AAC, bitrateInKbps: 128 },
          { codec: n.V9.MP3, bitrateInKbps: 192 },
        ],
        lq: [
          { codec: n.V9.AAC, bitrateInKbps: 128 },
          { codec: n.V9.MP3, bitrateInKbps: 192 },
        ],
        preview: [{ codec: n.V9.MP3, bitrateInKbps: 128 }],
        smart_preview: [{ codec: n.V9.MP3, bitrateInKbps: 128 }],
      };
      class g {
        secretKey;
        resource;
        mediaConfigController;
        constructor(e) {
          let {
            httpClient: t,
            resourceConfig: a,
            secretKey: i,
            mediaConfigController: r,
          } = e;
          (this.resource = new n.HZ(t, {
            params: a.params,
            gateway: a.gateway,
            overembed: a.overembed,
            externalDomain: a.externalDomain,
            retryPolicyConfig: a.retryPolicyConfig,
            timeouts: a.timeouts,
          })),
            (this.mediaConfigController = r),
            (this.secretKey = i);
        }
        getMediaSource(e) {
          return new Promise((t, a) => {
            let {
                entity: {
                  data: {
                    meta: { id: i },
                  },
                },
              } = e,
              r = d();
            o({ secretKey: this.secretKey, data: `${r}${i}` })
              .then((e) => {
                this.resource
                  .getStorageData({
                    trackId: String(i),
                    sign: e,
                    tsInSeconds: r,
                    canUseStreaming: !1,
                    direct: !1,
                    requireMp3Link: !1,
                    isAliceRequester: !1,
                    preview:
                      this.mediaConfigController.qualityConfig.preview.value,
                  })
                  .then((e) => {
                    let r = (function (e, t) {
                      if (t.preview.value && e[0]) return e[0];
                      let a = e.find((e) =>
                          m.lossless.find((t) => e.codec === t.codec),
                        ),
                        i = e.find((e) =>
                          m.hq.find(
                            (t) =>
                              e.codec === t.codec &&
                              e.bitrateInKbps === t.bitrateInKbps,
                          ),
                        ),
                        r = e.find((e) =>
                          m.nq.find(
                            (t) =>
                              e.codec === t.codec &&
                              e.bitrateInKbps === t.bitrateInKbps,
                          ),
                        );
                      return t.lossless.value && a
                        ? a
                        : t.hq.value && i
                          ? i
                          : (t.lq.value || t.nq.value) && r
                            ? r
                            : null;
                    })(e, this.mediaConfigController.qualityConfig);
                    null !== r
                      ? this.resource
                          .getSrcData({ storageUrl: r.downloadInfoUrl })
                          .then((e) => {
                            try {
                              let a = (function (e) {
                                let {
                                    srcData: t,
                                    secretKey: a,
                                    trackId: i,
                                  } = e,
                                  r = (function (e, t) {
                                    let a, i, r, s, l, n, o, d, u;
                                    let c = String.fromCharCode;
                                    function m(e, t) {
                                      return (e << t) | (e >>> (32 - t));
                                    }
                                    function g(e, t) {
                                      let a, i, r, s, l;
                                      return ((r = 2147483648 & e),
                                      (s = 2147483648 & t),
                                      (a = 1073741824 & e),
                                      (i = 1073741824 & t),
                                      (l = (1073741823 & e) + (1073741823 & t)),
                                      a & i)
                                        ? 2147483648 ^ l ^ r ^ s
                                        : a | i
                                          ? 1073741824 & l
                                            ? 3221225472 ^ l ^ r ^ s
                                            : 1073741824 ^ l ^ r ^ s
                                          : l ^ r ^ s;
                                    }
                                    function p(e, t, a, i, r, s, l) {
                                      return (
                                        (e = g(
                                          e,
                                          g(g((t & a) | (~t & i), r), l),
                                        )),
                                        g(m(e, s), t)
                                      );
                                    }
                                    function h(e, t, a, i, r, s, l) {
                                      return (
                                        (e = g(
                                          e,
                                          g(g((t & i) | (a & ~i), r), l),
                                        )),
                                        g(m(e, s), t)
                                      );
                                    }
                                    function v(e, t, a, i, r, s, l) {
                                      return (
                                        (e = g(e, g(g(t ^ a ^ i, r), l))),
                                        g(m(e, s), t)
                                      );
                                    }
                                    function _(e, t, a, i, r, s, l) {
                                      return (
                                        (e = g(e, g(g(a ^ (t | ~i), r), l))),
                                        g(m(e, s), t)
                                      );
                                    }
                                    function S(e) {
                                      let t = "",
                                        a = "",
                                        i;
                                      for (i = 0; i <= 3; i++)
                                        t +=
                                          (a = `0${((e >>> (8 * i)) & 255).toString(16)}`).substr(
                                            a.length - 2,
                                            2,
                                          );
                                      return t;
                                    }
                                    let b = [];
                                    for (
                                      a = 0,
                                        b = (function (e) {
                                          let t;
                                          let a = e.length,
                                            i = a + 8,
                                            r = ((i - (i % 64)) / 64 + 1) * 16,
                                            s = Array(r - 1),
                                            l = 0,
                                            n = 0;
                                          for (; n < a; )
                                            (t = (n - (n % 4)) / 4),
                                              (l = (n % 4) * 8),
                                              (s[t] =
                                                s[t] | (e.charCodeAt(n) << l)),
                                              n++;
                                          return (
                                            (t = (n - (n % 4)) / 4),
                                            (l = (n % 4) * 8),
                                            (s[t] = s[t] | (128 << l)),
                                            (s[r - 2] = a << 3),
                                            (s[r - 1] = a >>> 29),
                                            s
                                          );
                                        })(
                                          (e = (function (e) {
                                            e = t + e.replace(/\r\n/g, "\n");
                                            let a = "";
                                            for (let t = 0; t < e.length; t++) {
                                              let i = e.charCodeAt(t);
                                              i < 128
                                                ? (a += c(i))
                                                : i > 127 && i < 2048
                                                  ? (a +=
                                                      c((i >> 6) | 192) +
                                                      c((63 & i) | 128))
                                                  : (a +=
                                                      c((i >> 12) | 224) +
                                                      c(((i >> 6) & 63) | 128) +
                                                      c((63 & i) | 128));
                                            }
                                            return a;
                                          })(e)),
                                        ),
                                        n = 1732584193,
                                        o = 4023233417,
                                        d = 2562383102,
                                        u = 271733878;
                                      a < b.length;
                                      a += 16
                                    )
                                      (i = n),
                                        (r = o),
                                        (s = d),
                                        (l = u),
                                        (n = p(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 0],
                                          7,
                                          3614090360,
                                        )),
                                        (u = p(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 1],
                                          12,
                                          3905402710,
                                        )),
                                        (d = p(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 2],
                                          17,
                                          606105819,
                                        )),
                                        (o = p(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 3],
                                          22,
                                          3250441966,
                                        )),
                                        (n = p(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 4],
                                          7,
                                          4118548399,
                                        )),
                                        (u = p(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 5],
                                          12,
                                          1200080426,
                                        )),
                                        (d = p(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 6],
                                          17,
                                          2821735955,
                                        )),
                                        (o = p(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 7],
                                          22,
                                          4249261313,
                                        )),
                                        (n = p(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 8],
                                          7,
                                          1770035416,
                                        )),
                                        (u = p(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 9],
                                          12,
                                          2336552879,
                                        )),
                                        (d = p(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 10],
                                          17,
                                          4294925233,
                                        )),
                                        (o = p(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 11],
                                          22,
                                          2304563134,
                                        )),
                                        (n = p(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 12],
                                          7,
                                          1804603682,
                                        )),
                                        (u = p(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 13],
                                          12,
                                          4254626195,
                                        )),
                                        (d = p(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 14],
                                          17,
                                          2792965006,
                                        )),
                                        (o = p(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 15],
                                          22,
                                          1236535329,
                                        )),
                                        (n = h(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 1],
                                          5,
                                          4129170786,
                                        )),
                                        (u = h(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 6],
                                          9,
                                          3225465664,
                                        )),
                                        (d = h(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 11],
                                          14,
                                          643717713,
                                        )),
                                        (o = h(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 0],
                                          20,
                                          3921069994,
                                        )),
                                        (n = h(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 5],
                                          5,
                                          3593408605,
                                        )),
                                        (u = h(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 10],
                                          9,
                                          38016083,
                                        )),
                                        (d = h(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 15],
                                          14,
                                          3634488961,
                                        )),
                                        (o = h(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 4],
                                          20,
                                          3889429448,
                                        )),
                                        (n = h(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 9],
                                          5,
                                          568446438,
                                        )),
                                        (u = h(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 14],
                                          9,
                                          3275163606,
                                        )),
                                        (d = h(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 3],
                                          14,
                                          4107603335,
                                        )),
                                        (o = h(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 8],
                                          20,
                                          1163531501,
                                        )),
                                        (n = h(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 13],
                                          5,
                                          2850285829,
                                        )),
                                        (u = h(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 2],
                                          9,
                                          4243563512,
                                        )),
                                        (d = h(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 7],
                                          14,
                                          1735328473,
                                        )),
                                        (o = h(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 12],
                                          20,
                                          2368359562,
                                        )),
                                        (n = v(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 5],
                                          4,
                                          4294588738,
                                        )),
                                        (u = v(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 8],
                                          11,
                                          2272392833,
                                        )),
                                        (d = v(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 11],
                                          16,
                                          1839030562,
                                        )),
                                        (o = v(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 14],
                                          23,
                                          4259657740,
                                        )),
                                        (n = v(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 1],
                                          4,
                                          2763975236,
                                        )),
                                        (u = v(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 4],
                                          11,
                                          1272893353,
                                        )),
                                        (d = v(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 7],
                                          16,
                                          4139469664,
                                        )),
                                        (o = v(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 10],
                                          23,
                                          3200236656,
                                        )),
                                        (n = v(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 13],
                                          4,
                                          681279174,
                                        )),
                                        (u = v(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 0],
                                          11,
                                          3936430074,
                                        )),
                                        (d = v(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 3],
                                          16,
                                          3572445317,
                                        )),
                                        (o = v(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 6],
                                          23,
                                          76029189,
                                        )),
                                        (n = v(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 9],
                                          4,
                                          3654602809,
                                        )),
                                        (u = v(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 12],
                                          11,
                                          3873151461,
                                        )),
                                        (d = v(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 15],
                                          16,
                                          530742520,
                                        )),
                                        (o = v(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 2],
                                          23,
                                          3299628645,
                                        )),
                                        (n = _(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 0],
                                          6,
                                          4096336452,
                                        )),
                                        (u = _(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 7],
                                          10,
                                          1126891415,
                                        )),
                                        (d = _(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 14],
                                          15,
                                          2878612391,
                                        )),
                                        (o = _(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 5],
                                          21,
                                          4237533241,
                                        )),
                                        (n = _(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 12],
                                          6,
                                          1700485571,
                                        )),
                                        (u = _(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 3],
                                          10,
                                          2399980690,
                                        )),
                                        (d = _(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 10],
                                          15,
                                          4293915773,
                                        )),
                                        (o = _(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 1],
                                          21,
                                          2240044497,
                                        )),
                                        (n = _(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 8],
                                          6,
                                          1873313359,
                                        )),
                                        (u = _(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 15],
                                          10,
                                          4264355552,
                                        )),
                                        (d = _(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 6],
                                          15,
                                          2734768916,
                                        )),
                                        (o = _(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 13],
                                          21,
                                          1309151649,
                                        )),
                                        (n = _(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 4],
                                          6,
                                          4149444226,
                                        )),
                                        (u = _(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 11],
                                          10,
                                          3174756917,
                                        )),
                                        (d = _(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 2],
                                          15,
                                          718787259,
                                        )),
                                        (o = _(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 9],
                                          21,
                                          3951481745,
                                        )),
                                        (n = g(n, i)),
                                        (o = g(o, r)),
                                        (d = g(d, s)),
                                        (u = g(u, l));
                                    let y = S(n) + S(o) + S(d) + S(u);
                                    return y.toLowerCase();
                                  })(t.path.substr(1) + t.s, a),
                                  s = `/get-mp3/${r}/${t.ts}${t.path}?track-id=${i}&play=false`;
                                return `https://${t.host}${s}`;
                              })({
                                trackId: i,
                                srcData: e,
                                secretKey: this.secretKey,
                              });
                              t(a);
                            } catch (t) {
                              let e = t;
                              t instanceof Error &&
                                (e = {
                                  name: t.name,
                                  message: t.message,
                                  stack: t.stack,
                                  cause: t.cause,
                                }),
                                a(
                                  new c("Failed to create src link", {
                                    code: "E_CREATE_SRC_LINK",
                                    cause: e,
                                    data: { trackId: i },
                                  }),
                                );
                            }
                          })
                          .catch((e) => {
                            a(
                              new c("Failed to get src data", {
                                code: "E_GET_SRC_DATA",
                                cause: e,
                                data: { trackId: i },
                              }),
                            );
                          })
                      : a(
                          new c("No storage url for entity", {
                            code: "E_NO_STORAGE_URL",
                          }),
                        );
                  })
                  .catch((e) => {
                    a(
                      new c("Failed to get storage data", {
                        code: "E_GET_STORAGE_DATA",
                        cause: e,
                        data: { trackId: i },
                      }),
                    );
                  });
              })
              .catch((e) => {
                let t = e;
                e instanceof Error &&
                  (t = {
                    name: e.name,
                    message: e.message,
                    stack: e.stack,
                    cause: e.cause,
                  }),
                  a(
                    new c("Failed to create sign", {
                      code: "E_CREATE_SIGN",
                      cause: t,
                      data: { trackId: i },
                    }),
                  );
              });
          });
        }
      }
      var p = a(14408);
      ((i = s || (s = {})).HQ_PLUS = "hqPlus"),
        (i.HQ = "hq"),
        (i.NQ = "nq"),
        (i.LQ = "lq"),
        (i.PREVIEW = "preview");
      class h extends u.y {
        name = "GetFileInfoMediaProviderException";
        constructor(
          e,
          { code: t = "E_GET_FILE_INFO_MEDIA_PROVIDER", ...a } = {},
        ) {
          super(e, { code: t, ...a }), Object.setPrototypeOf(this, h.prototype);
        }
      }
      let v = [n.V9.FLAC, n.V9.AAC, n.V9.HEAAC, n.V9.MP3];
      class _ {
        secretKey;
        resource;
        mediaConfigController;
        transport;
        variables;
        constructor(e) {
          let {
            httpClient: t,
            resourceConfig: a,
            secretKey: i,
            mediaConfigController: r,
            transport: s,
            variables: l,
          } = e;
          (this.resource = new n.dF(t, {
            params: a.params,
            gateway: a.gateway,
          })),
            (this.secretKey = i),
            (this.mediaConfigController = r),
            (this.transport = s),
            (this.variables = l);
        }
        getMediaSource(e) {
          let t = d(),
            a = (function (e, t, a) {
              if ((0, p.YM)(t)) return n.nJ.SMART_PREVIEW;
              let i = a ? n.nJ.LQ : n.nJ.NQ;
              switch (e) {
                case s.HQ_PLUS:
                  i = n.nJ.LOSSLESS;
                  break;
                case s.HQ:
                  i = a ? n.nJ.NQ : n.nJ.HQ;
                  break;
                case s.NQ:
                case s.LQ:
                  i = a ? n.nJ.LQ : n.nJ.NQ;
                  break;
                case s.PREVIEW:
                  i = n.nJ.PREVIEW;
              }
              return i;
            })(
              this.mediaConfigController.quality.value,
              e.entity,
              this.variables.useNewCorrespondenceBetweenQualityParams,
            ),
            i = v.join(""),
            r = `${t}${e.entity.data.meta.id}${a}${i}${this.transport}`;
          return new Promise((s, l) => {
            o({ data: r, secretKey: this.secretKey })
              .then((r) =>
                this.resource
                  .getFileInfo({
                    tsInSeconds: t,
                    trackId: e.entity.data.meta.id,
                    quality: a,
                    codecs: v,
                    transports: [this.transport],
                    sign: r,
                  })
                  .then((e) => {
                    if (!e.downloadInfo.urls?.[0])
                      throw Error("An empty array of URLs has been received");
                    s(e.downloadInfo.urls[0]);
                  })
                  .catch((t) => {
                    let r = t;
                    t instanceof Error &&
                      (r = {
                        name: t.name,
                        message: t.message,
                        stack: t.stack,
                        cause: t.cause,
                      }),
                      l(
                        new h("An empty array of URLs has been received", {
                          code: "E_EMPTY_URLS",
                          cause: r,
                          data: {
                            trackId: e.entity.data.meta.id,
                            quality: a,
                            codecs: i,
                          },
                        }),
                      );
                  }),
              )
              .catch((t) => {
                let r = t;
                t instanceof Error &&
                  (r = {
                    name: t.name,
                    message: t.message,
                    stack: t.stack,
                    cause: t.cause,
                  }),
                  l(
                    new h("Failed to create sign", {
                      code: "E_CREATE_SIGN",
                      cause: r,
                      data: {
                        trackId: e.entity.data.meta.id,
                        quality: a,
                        codecs: i,
                      },
                    }),
                  );
              });
          });
        }
      }
      class S extends u.y {
        name = "YaMusicEntityProviderException";
        constructor(e, { code: t = "E_YAMUSIC_ENTITY_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }), Object.setPrototypeOf(this, S.prototype);
        }
      }
      var b = a(57413);
      class y {
        resource;
        constructor(e) {
          let { httpClient: t, config: a } = e;
          this.resource = new n.HZ(t, {
            params: a.params,
            gateway: a.gateway,
            retryPolicyConfig: a.retryPolicyConfig,
            timeouts: a.timeouts,
          });
        }
        async loadEntities(e) {
          let t = e.map(({ context: e, entity: t }) =>
            (0, b.m3)(e)
              ? `${t.data.meta.id}:${e.data.meta.id}`
              : (0, b.KT)(e) && "albumId" in t.data.meta && t.data.meta.albumId
                ? `${t.data.meta.id}:${t.data.meta.albumId}`
                : t.data.meta.id,
          );
          return this.resource
            .getTracksMeta({ trackIds: t, withProgress: !0 })
            .then((e) => {
              let t = [];
              for (let a of e) t.push({ type: p.A4.Unknown, meta: a });
              return t;
            })
            .catch((e) => {
              throw new S("Failed to get entities meta", { cause: e });
            });
        }
      }
      var f = a(54122);
      class C {
        qualityConfig = {
          lossless: new f.wi(!1),
          hq: new f.wi(!0),
          nq: new f.wi(!0),
          lq: new f.wi(!0),
          preview: new f.wi(!0),
          smart_preview: new f.wi(!1),
        };
        quality = new f.wi(s.HQ);
        constructor(e) {
          this.setQuality(e);
        }
        setQuality(e) {
          switch (e) {
            case s.HQ_PLUS:
              (this.qualityConfig.lossless.value = !0),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = s.HQ_PLUS);
              break;
            case s.HQ:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = s.HQ);
              break;
            case s.NQ:
            case s.LQ:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = s.NQ);
              break;
            case s.PREVIEW:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !1),
                (this.qualityConfig.lq.value = !1),
                (this.qualityConfig.preview.value = !0),
                (this.quality.value = s.PREVIEW);
          }
        }
      }
      ((r = l || (l = {})).DOWNLOAD_INFO_PROVIDER = "downloadInfoProvider"),
        (r.GET_FILE_INFO_PROVIDER = "getFileInfoProvider");
      class E extends u.y {
        name = "GenerativeMediaProviderException";
        constructor(e, { code: t = "E_GENERATIVE_MEDIA_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }), Object.setPrototypeOf(this, E.prototype);
        }
      }
      class x {
        async getMediaSource(e) {
          return (0, p.OX)(e.entity)
            ? this.getGenerativeSrc(e.entity.data)
            : new Promise((e, t) => {
                t(
                  new E("Provided entity is not generative entity", {
                    code: "E_NOT_GENERATIVE_NETITY",
                  }),
                );
              });
        }
        async getGenerativeSrc(e) {
          return new Promise((t, a) => {
            e.meta.stream?.url
              ? t(e.meta.stream.url)
              : a(
                  new E("Failed to create generative src link", {
                    code: "E_CREATE_GENERATIVE_SRC_LINK",
                  }),
                );
          });
        }
      }
      class N {
        params;
        mediaProvider;
        generaiveMediaProvider;
        constructor(e) {
          switch (((this.params = e), e.type)) {
            case l.DOWNLOAD_INFO_PROVIDER:
              this.mediaProvider = new g(e.providerParams);
              break;
            case l.GET_FILE_INFO_PROVIDER:
              this.mediaProvider = new _(e.providerParams);
          }
          this.generaiveMediaProvider = new x();
        }
        async getMediaSource(e) {
          return (0, p.OX)(e.entity)
            ? this.generaiveMediaProvider.getMediaSource(e)
            : this.mediaProvider.getMediaSource(e);
        }
      }
    },
  },
]);
