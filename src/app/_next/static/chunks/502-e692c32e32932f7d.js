(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [502, 7921, 2436, 2708, 7454, 8337, 789],
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
        l = a(99616),
        r = a(5674);
      let s = async (e) => {
          let {
              hostTld: t,
              forwardedForY: a,
              changeLanguageToken: i,
              tracestate: l,
              traceparent: s,
              serverDetectedLang: n,
              env: o,
            } = e,
            d = await (0, r.ZO)({
              tld: t,
              forwardedForY: a,
              changeLanguageToken: i,
              tracestate: l,
              traceparent: s,
              serverDetectedLang: n,
              env: o,
            });
          return await d.get(r.uh).loadDictionary(), d;
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
            g = (0, l.use)(
              s({
                hostTld: a,
                env: n,
                forwardedForY: o,
                tracestate: d,
                traceparent: u,
                changeLanguageToken: c,
                serverDetectedLang: m,
              }),
            );
          return (0, i.jsx)(r.Xl.Provider, { value: g, children: t });
        };
    },
    40952: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          StoreProvider: function () {
            return ej;
          },
        });
      var i = a(8759),
        l = a(33423),
        r = a(96555),
        s = a(11769),
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
            recentlyPlayed: { loadingState: o.Gu.IDLE },
            liked: { loadingState: o.Gu.IDLE },
          },
          nonMusicLiked: { loadingState: o.Gu.IDLE, items: [] },
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
          similarArtistsSubPage: { loadingState: o.Gu.IDLE },
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
        trailer: { loadingState: o.Gu.IDLE, modal: {} },
        syncLyrics: { loadingState: o.Gu.IDLE },
        modals: {
          disclaimerModal: {},
          fullscreenPlayerModal: {},
          trackModal: {},
          releaseNotesModal: {},
          shortcutsModal: {},
          aboutAppModal: {},
          overviewModal: {},
        },
        landing: {
          loadingState: o.Gu.IDLE,
          tabs: { loadingState: o.Gu.IDLE, data: [] },
        },
      };
      var g = a(43984),
        p = a(12708),
        v = a(69658),
        h = a(65618),
        _ = a(96911),
        S = a(65704);
      let b = r.V5.model("CollectionAlbumsPage", {
        loadingState: r.V5.enumeration(Object.values(o.Gu)),
        sort: r.V5.maybeNull(S.$4),
        items: r.V5.array(r.V5.maybeNull(_.ug)),
        pager: r.V5.maybeNull(S.Vn),
        alreadyRequestedPages: r.V5.map(r.V5.number),
        pendingPages: r.V5.map(r.V5.number),
        requestsCount: r.V5.maybeNull(r.V5.number),
        upcomingAlbumsLoadingState: r.V5.enumeration(Object.values(o.Gu)),
        upcomingAlbums: r.V5.maybeNull(r.V5.array(_.W9)),
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
            getData: (0, r.ls)(function* (t) {
              let {
                  userId: a,
                  page: i = 0,
                  pageSize: l = 20,
                  sortBy: s,
                  sortOrder: n,
                  metaType: d,
                } = t,
                { usersResource: u, modelActionsLogger: c } = (0, r.dU)(e);
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
                  s && n && (e.sort = { sortBy: s, sortOrder: n });
                try {
                  var m, g, p;
                  (e.loadingState = o.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield u.getLikedAlbums({
                      userId: a,
                      page: i,
                      pageSize: l,
                      sortBy: s,
                      sortOrder: n,
                      metaType: d,
                    }),
                    c = { page: i, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, r.pj)(
                      Array.from({ length: c.total }, () => null),
                    ));
                  let v =
                    null !==
                      (g =
                        null === (m = t.albums) || void 0 === m
                          ? void 0
                          : m.map((e) => {
                              let { album: t } = e;
                              return (0, _.ym)(t);
                            })) && void 0 !== g
                      ? g
                      : [];
                  (0, o.AG)({
                    items: e.items,
                    mappedRawItems: v,
                    page: i,
                    pageSize: l,
                  }),
                    (e.pager = c),
                    (e.requestsCount =
                      (null !== (p = e.requestsCount) && void 0 !== p ? p : 0) +
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
            getPresaves: (0, r.ls)(function* (t) {
              let { userId: a } = t,
                { usersResource: i, modelActionsLogger: l } = (0, r.dU)(e),
                { experiments: s } = (0, r.yj)(e),
                n = s.checkExperiment(o.pe.WebPresave, "on");
              if (e.upcomingAlbumsLoadingState !== o.Gu.PENDING && n)
                try {
                  var d;
                  e.upcomingAlbumsLoadingState = o.Gu.PENDING;
                  let t = yield i.getPresaves({
                    userId: a,
                    includeReleased: !1,
                    includeUpcoming: !0,
                  });
                  (e.upcomingAlbums = (0, r.pj)(
                    null === (d = t.upcomingAlbums) || void 0 === d
                      ? void 0
                      : d.map(_.wq),
                  )),
                    e.upcomingAlbumsLoadingState !== o.Gu.IDLE &&
                      (e.upcomingAlbumsLoadingState = o.Gu.RESOLVE);
                } catch (t) {
                  l.error(t),
                    e.upcomingAlbumsLoadingState !== o.Gu.IDLE &&
                      (e.upcomingAlbumsLoadingState = o.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = o.Gu.IDLE),
                (e.sort = null),
                (e.items = (0, r.pj)([])),
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
      let C = r.V5.model("CollectionArtistsPage", {
          loadingState: r.V5.enumeration(Object.values(o.Gu)),
          sort: r.V5.maybeNull(S.$4),
          items: r.V5.array(r.V5.maybeNull(y.Go)),
          pager: r.V5.maybeNull(S.Vn),
          alreadyRequestedPages: r.V5.map(r.V5.number),
          pendingPages: r.V5.map(r.V5.number),
          requests: r.V5.maybeNull(r.V5.number),
        }).actions((e) => {
          let t = {
            getData: (0, r.ls)(function* (t) {
              let {
                  userId: a,
                  page: i = 0,
                  pageSize: l = 20,
                  sortBy: s,
                  sortOrder: n,
                } = t,
                { usersResource: d, modelActionsLogger: u } = (0, r.dU)(e);
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
                  s && n && (e.sort = { sortBy: s, sortOrder: n });
                try {
                  var c;
                  (e.loadingState = o.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield d.getLikedArtists({
                      userId: a,
                      page: i,
                      pageSize: l,
                      sortBy: s,
                      sortOrder: n,
                    }),
                    u = { page: i, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, r.pj)(
                      Array.from({ length: u.total }, () => null),
                    ));
                  let m = t.artists.map(y.d);
                  (e.loadingState = o.Gu.RESOLVE),
                    (0, o.AG)({
                      items: e.items,
                      mappedRawItems: m,
                      page: i,
                      pageSize: l,
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
                (e.items = (0, r.pj)([]));
            },
          };
          return t;
        }),
        f = r.V5.model("CollectionNonMusicPage", {
          loadingState: r.V5.enumeration(Object.values(o.Gu)),
          items: r.V5.array(r.V5.maybeNull(_.ug)),
          pager: r.V5.maybeNull(S.Vn),
          alreadyRequestedPages: r.V5.map(r.V5.number),
          pendingPages: r.V5.map(r.V5.number),
          requestsCount: r.V5.maybeNull(r.V5.number),
        })
          .views((e) => ({
            get isAlbumsLoading() {
              return (
                e.loadingState === o.Gu.IDLE ||
                (e.loadingState === o.Gu.PENDING && 0 === e.items.length)
              );
            },
            get isLoading() {
              return this.isAlbumsLoading;
            },
            get isRejected() {
              return e.loadingState === o.Gu.REJECT;
            },
            get isResolved() {
              return e.loadingState === o.Gu.RESOLVE;
            },
            get isEmptyItems() {
              var t;
              return !!(
                !(null === (t = e.items) || void 0 === t ? void 0 : t.length) &&
                e.requestsCount
              );
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, r.ls)(function* (t) {
                let {
                    userId: a,
                    page: i = 0,
                    pageSize: l = 20,
                    metaType: s,
                  } = t,
                  { usersResource: n, modelActionsLogger: d } = (0, r.dU)(e);
                if (
                  !(
                    (e.loadingState === o.Gu.PENDING &&
                      e.pendingPages.has("".concat(i))) ||
                    e.alreadyRequestedPages.has("".concat(i))
                  )
                ) {
                  "number" == typeof i &&
                    e.alreadyRequestedPages.set("".concat(i), i);
                  try {
                    var u, c, m;
                    (e.loadingState = o.Gu.PENDING),
                      e.pendingPages.set("".concat(i), i);
                    let t = yield n.getLikedAlbums({
                        userId: a,
                        page: i,
                        pageSize: l,
                        metaType: s,
                      }),
                      d = { page: i, perPage: l, total: t.pager.total };
                    0 === e.items.length &&
                      (e.items = (0, r.pj)(
                        Array.from({ length: d.total }, () => null),
                      ));
                    let g =
                      null !==
                        (c =
                          null === (u = t.albums) || void 0 === u
                            ? void 0
                            : u.map((e) => {
                                let { album: t } = e;
                                return (0, _.ym)(t);
                              })) && void 0 !== c
                        ? c
                        : [];
                    (0, o.AG)({
                      items: e.items,
                      mappedRawItems: g,
                      page: i,
                      pageSize: l,
                    }),
                      (e.pager = d),
                      (e.requestsCount =
                        (null !== (m = e.requestsCount) && void 0 !== m
                          ? m
                          : 0) + 1),
                      e.loadingState !== o.Gu.IDLE &&
                        (e.loadingState = o.Gu.RESOLVE);
                  } catch (t) {
                    d.error(t), (e.loadingState = o.Gu.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(i));
                  }
                }
              }),
              reset() {
                (e.loadingState = o.Gu.IDLE),
                  (e.items = (0, r.pj)([])),
                  e.pendingPages.clear(),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  (e.requestsCount = 0);
              },
            };
            return t;
          });
      var E = a(3515);
      let N = r.V5.model("CollectionPlaylistsCreatedPage", {
          loadingState: r.V5.enumeration(Object.values(o.Gu)),
          sort: r.V5.maybeNull(S.$4),
          items: r.V5.array(r.V5.maybeNull(E.Cd)),
          pager: r.V5.maybeNull(S.Vn),
          alreadyRequestedPages: r.V5.map(r.V5.number),
          pendingPages: r.V5.map(r.V5.number),
          kinds: r.V5.array(r.V5.number),
          requests: r.V5.maybeNull(r.V5.number),
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
              getKinds: (0, r.ls)(function* (t) {
                let a = [],
                  { usersResource: i } = (0, r.dU)(e);
                (a = yield i.getPlaylistsKinds({ userId: t })),
                  (e.kinds = (0, r.pj)(a));
              }),
              getData: (0, r.ls)(function* (a) {
                let {
                    userId: i,
                    page: l = 0,
                    pageSize: s = 20,
                    withLikesCount: n,
                  } = a,
                  { usersResource: d, modelActionsLogger: u } = (0, r.dU)(e);
                if (
                  !(
                    (e.loadingState === o.Gu.PENDING &&
                      e.pendingPages.has("".concat(l))) ||
                    e.alreadyRequestedPages.has("".concat(l))
                  )
                ) {
                  "number" == typeof l &&
                    e.alreadyRequestedPages.set("".concat(l), l);
                  try {
                    var c;
                    e.isLoaded || (e.loadingState = o.Gu.PENDING),
                      e.pendingPages.set("".concat(l), l),
                      0 === e.kinds.length && (yield t.getKinds(i));
                    let a = l * s,
                      u = a + s,
                      m = e.kinds.slice(a, u),
                      g = yield d.getPlaylistsByKinds({
                        userId: i,
                        kinds: m,
                        withLikesCount: n,
                        withTracks: !1,
                      });
                    e.requests =
                      (null !== (c = e.requests) && void 0 !== c ? c : 0) + 1;
                    let p = { page: l, perPage: s, total: e.kinds.length };
                    0 === e.items.length &&
                      (e.items = (0, r.pj)(
                        Array.from({ length: p.total }, () => null),
                      ));
                    let v = g.map(E.PV);
                    (0, o.AG)({
                      items: e.items,
                      mappedRawItems: v,
                      page: l,
                      pageSize: s,
                    }),
                      (e.pager = p),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (t) {
                    u.error(t), (e.loadingState = o.Gu.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(l));
                  }
                }
              }),
              reset() {
                (e.loadingState = o.Gu.IDLE),
                  (e.sort = null),
                  (e.items = (0, r.pj)([])),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  e.pendingPages.clear(),
                  (e.kinds = (0, r.pj)([])),
                  (e.requests = null);
              },
            };
            return t;
          }),
        x = r.V5.model("CollectionPlaylistsLikedPage", {
          loadingState: r.V5.enumeration(Object.values(o.Gu)),
          sort: r.V5.maybeNull(S.$4),
          items: r.V5.array(r.V5.maybeNull(E.Cd)),
          pager: r.V5.maybeNull(S.Vn),
          alreadyRequestedPages: r.V5.map(r.V5.number),
          pendingPages: r.V5.map(r.V5.number),
          requests: r.V5.maybeNull(r.V5.number),
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
              getData: (0, r.ls)(function* (t) {
                let {
                  userId: a,
                  page: i = 0,
                  pageSize: l = 20,
                  sortBy: s,
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
                let { usersResource: c, modelActionsLogger: m } = (0, r.dU)(e);
                (e.sort = null),
                  s && n && (e.sort = { sortBy: s, sortOrder: n });
                try {
                  var g;
                  (e.loadingState = o.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let { likedPlaylists: t, pager: m } =
                    yield c.getLikedPlaylists({
                      userId: a,
                      page: i,
                      pageSize: l,
                      sortBy: s,
                      sortOrder: n,
                      metaType: d,
                      withTracks: u,
                    });
                  (e.requests =
                    (null !== (g = e.requests) && void 0 !== g ? g : 0) + 1),
                    0 === e.items.length &&
                      (e.items = (0, r.pj)(
                        Array.from({ length: m.total }, () => null),
                      ));
                  let p = t.map((e) => {
                    let { playlist: t } = e;
                    return (0, E.PV)(t);
                  });
                  (0, o.AG)({
                    items: e.items,
                    mappedRawItems: p,
                    page: i,
                    pageSize: l,
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
                  (e.items = (0, r.pj)([])),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  e.pendingPages.clear(),
                  (e.requests = null);
              },
            };
            return t;
          });
      var P = a(96431),
        I = a(95539);
      let L = (e) => (0, r.pj)({ type: e.type, track: (0, I.Vt)(e.track) });
      var A = a(20210);
      let k = (e) =>
          (0, r.pj)({
            type: e.type,
            album: e.album && (0, _.ym)(e.album),
            playlist: e.playlist && (0, A.Q9)(e.playlist),
            track: (0, I.Vt)(e.track),
          }),
        T = r.V5.model("ShelfLikedItem", { type: r.V5.string, track: I.le }),
        j = r.V5.model("ShelfRecentlyPlayedItem", {
          type: r.V5.string,
          album: r.V5.maybe(_.ug),
          playlist: r.V5.maybe(A.d2),
          track: I.le,
        }),
        G = r.V5.model("CollectionShelfLiked", {
          loadingState: r.V5.enumeration(Object.values(o.Gu)),
          title: r.V5.maybeNull(r.V5.string),
          typeForFrom: r.V5.maybeNull(r.V5.string),
          entities: r.V5.maybeNull(r.V5.array(T)),
          pager: r.V5.maybeNull(S.Vn),
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
            get isEmpty() {
              return !!(
                this.isResolved &&
                e.entities &&
                0 === e.entities.length
              );
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, r.ls)(function* () {
                let { nonMusicResource: t, logger: a } = (0, r.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    var i, l;
                    e.loadingState = o.Gu.PENDING;
                    let a = yield t.getShelfLiked();
                    (e.title = a.title),
                      (e.typeForFrom =
                        null !== (i = a.typeForFrom) && void 0 !== i
                          ? i
                          : null),
                      (e.pager =
                        null !== (l = a.pager) && void 0 !== l ? l : null),
                      (e.entities = (0, r.pj)(a.entities.map(L))),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (t) {
                    !(t instanceof P.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      a.error(t),
                      (e.loadingState = o.Gu.REJECT);
                  }
              }),
              reset() {
                (e.entities = null),
                  (e.title = null),
                  (e.typeForFrom = null),
                  (e.pager = null),
                  (e.loadingState = o.Gu.IDLE);
              },
            };
            return t;
          }),
        R = r.V5.model("CollectionShelfRecentlyPlayed", {
          loadingState: r.V5.enumeration(Object.values(o.Gu)),
          title: r.V5.maybeNull(r.V5.string),
          typeForFrom: r.V5.maybeNull(r.V5.string),
          entities: r.V5.maybeNull(r.V5.array(j)),
          pager: r.V5.maybeNull(S.Vn),
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
            get isEmpty() {
              return !!(
                this.isResolved &&
                e.entities &&
                0 === e.entities.length
              );
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, r.ls)(function* () {
                let { nonMusicResource: t, logger: a } = (0, r.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    var i, l;
                    e.loadingState = o.Gu.PENDING;
                    let a = yield t.getShelfRecentlyPlayed();
                    (e.title = a.title),
                      (e.typeForFrom =
                        null !== (i = a.typeForFrom) && void 0 !== i
                          ? i
                          : null),
                      (e.pager =
                        null !== (l = a.pager) && void 0 !== l ? l : null),
                      (e.entities = (0, r.pj)(a.entities.map(k))),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (t) {
                    !(t instanceof P.eY) &&
                      (t instanceof Error || "string" == typeof t) &&
                      a.error(t),
                      (e.loadingState = o.Gu.REJECT);
                  }
              }),
              reset() {
                (e.entities = null),
                  (e.title = null),
                  (e.typeForFrom = null),
                  (e.pager = null),
                  (e.loadingState = o.Gu.IDLE);
              },
            };
            return t;
          }),
        D = r.V5.model("CollectionShelfPage", { recentlyPlayed: R, liked: G })
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
              var t;
              return (
                e.recentlyPlayed.isLoading ||
                ((null === (t = e.recentlyPlayed.entities) || void 0 === t
                  ? void 0
                  : t.length) || 0) > 0
              );
            },
            get hasLiked() {
              var a;
              return (
                e.liked.isLoading ||
                ((null === (a = e.liked.entities) || void 0 === a
                  ? void 0
                  : a.length) || 0) > 0
              );
            },
          }))
          .actions((e) => ({
            reset() {
              e.recentlyPlayed.reset(), e.liked.reset();
            },
          })),
        V = r.V5.model("CollectionPage", {
          landing: h.d5,
          albums: b,
          playlistsLiked: x,
          playlistsCreated: N,
          artists: C,
          shelf: D,
          nonMusicLiked: f,
        });
      a(3653),
        a(52539),
        a(97748),
        a(86643),
        a(90554),
        a(1363),
        a(99805),
        a(32496),
        a(5677),
        a(64272),
        a(75748);
      var O = a(30651),
        w = a(24438);
      a(9702);
      let B = r.V5.model("KinopoiskPage", { landing: h.d5 });
      a(71486), a(63246);
      let M = r.V5.model("MainPage", { landing: h.d5 });
      a(12905);
      var U = a(34603),
        F = a(18167),
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
        q = (e) => {
          switch (e.type) {
            case U.EW.ALBUM:
              return "".concat(e.type, "_").concat((0, F.un)(e));
            case U.EW.TRACK:
              return "".concat(e.type, "_").concat((0, F.LV)(e));
            case U.EW.WAVE:
              return "".concat(e.type, "_").concat((0, F.R3)(e));
            case U.EW.PLAYLIST:
              return "".concat(e.type, "_").concat((0, F.aQ)(e));
            case U.EW.ARTIST:
              return "".concat(e.type, "_").concat((0, F.H5)(e));
          }
        },
        z = (e) => {
          let t = { historyTabs: [] },
            a = 0;
          for (let r of e.historyTabs) {
            var i, l;
            if (a > 1e3) break;
            let e = { ...r, items: [] };
            for (let t of null !== (i = r.items) && void 0 !== i ? i : []) {
              if (a > 1e3) break;
              let i = { ...t, tracks: [] };
              for (let e of t.tracks) {
                if (a > 1e3) break;
                i.tracks.push(e), ++a;
              }
              null === (l = e.items) || void 0 === l || l.push(i);
            }
            e.items && e.items.length > 0 && t.historyTabs.push(e);
          }
          return t;
        },
        Z = (e) =>
          e
            .map((e) => {
              switch (e.type) {
                case U.EW.ARTIST:
                case U.EW.ALBUM:
                  return { type: e.type, data: { itemId: { id: e.id } } };
                case U.EW.PLAYLIST: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { uid: Number(t), kind: Number(a) } },
                  };
                }
                case U.EW.WAVE:
                  return {
                    type: e.type,
                    data: { itemId: { seeds: e.id.split(",") } },
                  };
                case U.EW.TRACK: {
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
        K = r.V5.model("MusicHistoryPage", {
          loadingState: r.V5.enumeration(Object.values(o.Gu)),
          indexesMap: r.V5.map(r.V5.number),
          items: r.V5.maybeNull(r.V5.array(F.Mf)),
          datesMap: r.V5.map(r.V5.boolean),
          tabs: r.V5.maybeNull(r.V5.array(F.t9)),
        })
          .views((e) => ({
            get isNeededToLoad() {
              return e.loadingState === o.Gu.IDLE;
            },
            get isLoading() {
              return e.loadingState === o.Gu.PENDING;
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
            get isShimmerVisible() {
              return this.isNeededToLoad || this.isLoading || this.isRejected;
            },
            get isShimmerActive() {
              return this.isLoading;
            },
            getStartAndEndIndexes(t) {
              var a, i;
              let l = t,
                r = t + 1;
              return (
                (null === (a = e.items) || void 0 === a
                  ? void 0
                  : a.slice(t - 25 + 1, t).some((e) => !e.isLoaded)) &&
                  (l = t - 25 + 1),
                (null === (i = e.items) || void 0 === i
                  ? void 0
                  : i.slice(t, t + 25).some((e) => !e.isLoaded)) &&
                  (r = t + 25),
                [l, r]
              );
            },
            getItemsToLoad(t) {
              var a, i;
              let [l, r] = this.getStartAndEndIndexes(t);
              return null !==
                (i =
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.slice(l, r).filter((e) => !e.isLoaded)) && void 0 !== i
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
                (e.items = (0, r.pj)([])),
                  null === (t = e.tabs) ||
                    void 0 === t ||
                    t.forEach((t, i) => {
                      var l;
                      e.datesMap.set(t.date, !1),
                        null === (l = t.blocks) ||
                          void 0 === l ||
                          l.forEach((t, l) => {
                            var r;
                            let s = t.id;
                            e.indexesMap.set(
                              "".concat(i, "_").concat(l, "_").concat(s),
                              a,
                            ),
                              null === (r = e.items) ||
                                void 0 === r ||
                                r.push({
                                  id: s,
                                  type: t.type,
                                  tabIndex: i,
                                  blockIndex: l,
                                  trackIndex: null,
                                  loadingState:
                                    a < 25 ? o.Gu.RESOLVE : o.Gu.IDLE,
                                }),
                              ++a,
                              t.tracks.forEach((t, r) => {
                                var s;
                                e.indexesMap.set(
                                  ""
                                    .concat(i, "_")
                                    .concat(l, "_")
                                    .concat(r, "_")
                                    .concat(t.id),
                                  a,
                                ),
                                  null === (s = e.items) ||
                                    void 0 === s ||
                                    s.push({
                                      id: t.id,
                                      type: t.type,
                                      tabIndex: i,
                                      blockIndex: l,
                                      trackIndex: r,
                                      loadingState:
                                        a < 25 ? o.Gu.RESOLVE : o.Gu.IDLE,
                                    }),
                                  ++a;
                              });
                          });
                    });
              },
              setTrack(t, a) {
                var i, l, r, s;
                let { tabIndex: n, blockIndex: d, trackIndex: u } = t,
                  { fullModel: c } = a.data;
                if (null === u) return;
                let m =
                  null === (s = e.tabs) || void 0 === s
                    ? void 0
                    : null === (r = s[n]) || void 0 === r
                      ? void 0
                      : null === (l = r.blocks) || void 0 === l
                        ? void 0
                        : null === (i = l[d]) || void 0 === i
                          ? void 0
                          : i.tracks[u];
                m && ((m.data = (0, I.Vt)(c)), (m.loadingState = o.Gu.RESOLVE));
              },
              setAlbum(t, a) {
                var i, l, r;
                let { tabIndex: s, blockIndex: n } = t,
                  { fullModel: d } = a.data,
                  u =
                    null === (r = e.tabs) || void 0 === r
                      ? void 0
                      : null === (l = r[s]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[n];
                (0, F.Ql)(u) &&
                  ((u.meta = (0, _.cO)({ album: d.album, artists: d.artists })),
                  (u.loadingState = o.Gu.RESOLVE));
              },
              setArtist(t, a) {
                var i, l, r;
                let { tabIndex: s, blockIndex: n } = t,
                  { fullModel: d } = a.data,
                  u =
                    null === (r = e.tabs) || void 0 === r
                      ? void 0
                      : null === (l = r[s]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[n];
                (0, F.DF)(u) &&
                  ((u.meta = (0, y.tR)(d.artist)),
                  (u.loadingState = o.Gu.RESOLVE));
              },
              setPlaylist(t, a) {
                var i, l, r;
                let { tabIndex: s, blockIndex: n } = t,
                  { fullModel: d } = a.data,
                  u =
                    null === (r = e.tabs) || void 0 === r
                      ? void 0
                      : null === (l = r[s]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[n];
                (0, F.v3)(u) &&
                  ((u.meta = {
                    ...(0, A.RE)({ playlist: d.playlist }),
                    tracksCount: d.tracksCount,
                  }),
                  (u.loadingState = o.Gu.RESOLVE));
              },
              setVibe(t, a) {
                var i, l, r;
                let { tabIndex: s, blockIndex: n } = t,
                  { fullModel: d } = a.data,
                  u =
                    null === (r = e.tabs) || void 0 === r
                      ? void 0
                      : null === (l = r[s]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[n];
                (0, F.eE)(u) &&
                  ((u.meta = {
                    ...(0, W.FF)(d.wave),
                    imageUrl: d.simpleWaveForegroundImageUrl,
                    backgroundColor: d.simpleWaveBackgroundColor,
                  }),
                  (u.loadingState = o.Gu.RESOLVE));
              },
              getMusicHistory: (0, r.ls)(function* () {
                let { musicHistoryResource: a, modelActionsLogger: i } = (0,
                r.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    e.loadingState = o.Gu.PENDING;
                    let i = yield a.getMusicHistory({ fullModelsCount: 25 }),
                      l = z(i);
                    (e.tabs = (0, r.pj)(l.historyTabs.map(F.OE))),
                      t.fillItemsAndIndexes(),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (t) {
                    i.error(t), (e.loadingState = o.Gu.REJECT);
                  }
              }),
              getItems: (0, r.ls)(function* (a) {
                let { musicHistoryResource: i, modelActionsLogger: l } = (0,
                r.dU)(e);
                try {
                  let l = e.getItemsToLoad(a);
                  l.forEach((e) => {
                    e.loadingState = o.Gu.RESOLVE;
                  });
                  let r = yield i.getMusicHistoryItems({ items: Z(l) }),
                    s = H(l);
                  r.items.forEach((e) => {
                    var a;
                    let i = q(e);
                    null === (a = s[i]) ||
                      void 0 === a ||
                      a.forEach((a) => {
                        switch (e.type) {
                          case U.EW.ALBUM:
                            t.setAlbum(a, e);
                            break;
                          case U.EW.TRACK:
                            t.setTrack(a, e);
                            break;
                          case U.EW.WAVE:
                            t.setVibe(a, e);
                            break;
                          case U.EW.PLAYLIST:
                            t.setPlaylist(a, e);
                            break;
                          case U.EW.ARTIST:
                            t.setArtist(a, e);
                        }
                        a.loadingState = o.Gu.RESOLVE;
                      });
                  });
                } catch (e) {
                  l.error(e);
                }
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
      let J = r.V5.model("NonMusicPage", { landing: h.d5 });
      a(75773);
      var Y = a(30789),
        Q = a(63173);
      a(7992);
      var X = a(22810),
        $ = a(16367);
      let ee = [
          U.Sc.ARTIST,
          U.Sc.ALBUM,
          U.Sc.TRACK,
          U.Sc.PLAYLIST,
          U.Sc.WAVE,
          U.Sc.PODCAST,
          U.Sc.PODCAST_EPISODE,
        ],
        et = (e, t) => {
          let a = [...ee];
          return (
            e.features.nonMusic ||
              t.checkExperiment(o.pe.WebNextPodcastSearch, "on") ||
              (a = a.filter(
                (e) => ![U.Sc.PODCAST, U.Sc.PODCAST_EPISODE].includes(e),
              )),
            a
          );
        },
        ea = [
          U.Sc.ALBUM,
          U.Sc.ARTIST,
          U.Sc.PLAYLIST,
          U.Sc.TRACK,
          U.Sc.UGC_TRACK,
          U.Sc.WAVE,
          U.Sc.PODCAST,
          U.Sc.PODCAST_EPISODE,
        ],
        ei = (e, t, a) => {
          let i = [...ea];
          return (
            e === U.ay.TOP && (i = i.filter((e) => e !== U.Sc.UGC_TRACK)),
            t.features.nonMusic ||
              a.checkExperiment(o.pe.WebNextPodcastSearch, "on") ||
              (i = i.filter(
                (e) => ![U.Sc.PODCAST, U.Sc.PODCAST_EPISODE].includes(e),
              )),
            i
          );
        },
        el = (e) => {
          let { wave: t } = e,
            a = "".concat(t.id.type, ":").concat(t.id.tag);
          return (0, r.pj)({
            title: t.title,
            subtitle: t.subTitle,
            stationId: a,
            seeds: [a],
            backgroundColor: t.color,
            imageUrl: t.image,
          });
        },
        er = (e) => {
          let { type: t } = e;
          switch (t) {
            case U.Sc.UGC_TRACK:
              return { type: t, data: (0, I.Z2)(e.track) };
            case U.Sc.TRACK:
              return { type: t, data: (0, I.Vt)(e.track) };
            case U.Sc.ARTIST:
              return { type: t, data: (0, y.d)(e.artist) };
            case U.Sc.PLAYLIST:
              return {
                type: t,
                data: (0, A.VB)({ ...e.playlist, artists: [] }),
              };
            case U.Sc.ALBUM:
              return { type: t, data: (0, _.ym)(e.album) };
            case U.Sc.WAVE:
              return { type: t, data: el(e) };
            case U.Sc.PODCAST:
              return { type: t, data: (0, _.ym)(e.podcast) };
            case U.Sc.PODCAST_EPISODE:
              return { type: t, data: (0, I.Vt)(e.podcast_episode) };
            default:
              return null;
          }
        },
        es = (e) =>
          e.map((e) => {
            switch (e.type) {
              case U.Sc.ALBUM:
                return { type: U.Sc.ALBUM, data: (0, _.ym)(e.album) };
              case U.Sc.ARTIST:
                return { type: U.Sc.ARTIST, data: (0, y.d)(e.artist) };
              case U.Sc.PLAYLIST:
                return {
                  type: U.Sc.PLAYLIST,
                  data: (0, A.VB)({ ...e.playlist, artists: [] }),
                };
              case U.Sc.UGC_TRACK:
                return { type: U.Sc.UGC_TRACK, data: (0, I.Z2)(e.track) };
              case U.Sc.TRACK:
                return { type: U.Sc.TRACK, data: (0, I.Vt)(e.track) };
              case U.Sc.WAVE:
                return { type: U.Sc.WAVE, data: el(e) };
              case U.Sc.PODCAST:
                return { type: U.Sc.PODCAST, data: (0, _.ym)(e.podcast) };
              case U.Sc.PODCAST_EPISODE:
                return {
                  type: U.Sc.PODCAST_EPISODE,
                  data: (0, I.Vt)(e.podcast_episode),
                };
            }
          }),
        en = r.V5.model("SearchHistoryPage", {
          items: r.V5.array($.Iv),
          loadingState: r.V5.enumeration(Object.values(o.Gu)),
        }),
        eo = r.V5.model("SearchPage", {
          searchCorrectedText: r.V5.maybeNull(r.V5.string),
          loadingState: r.V5.enumeration(Object.values(o.Gu)),
          searchRequestId: r.V5.optional(r.V5.string, ""),
          results: r.V5.array($.Iv),
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
              getSearchResults: (0, r.ls)(function* (t) {
                let { text: a, filter: i, config: l, experiments: s } = t,
                  { searchResource: n } = (0, r.dU)(e);
                try {
                  e.loadingState = o.Gu.PENDING;
                  let t = yield n.getInstantMixedSearch({
                    text: a,
                    type: ei(i, l, s),
                    filter: i === U.ay.TOP ? void 0 : i,
                    withLikesCount: !0,
                    page: 0,
                    pageSize: 36,
                  });
                  t.misspellResult &&
                    (e.searchCorrectedText = t.misspellResult),
                    t.results &&
                      t.results.length > 0 &&
                      ((e.results = (0, r.pj)(es(t.results).filter((e) => e))),
                      (e.searchRequestId = t.searchRequestId)),
                    (e.loadingState = o.Gu.RESOLVE);
                } catch (t) {
                  e.loadingState = o.Gu.REJECT;
                }
              }),
              getHistory: (0, r.ls)(function* (t) {
                let { userId: a, config: i, experiments: l } = t;
                if (e.history.loadingState === o.Gu.PENDING) return;
                let { usersResource: s } = (0, r.dU)(e);
                try {
                  e.history.loadingState = o.Gu.PENDING;
                  let t = yield s.getSearchHistory({
                    userId: a,
                    supportedTypes: et(i, l),
                  });
                  (e.history.items = (0, r.pj)(t.map(er).filter((e) => e))),
                    (e.history.loadingState = o.Gu.RESOLVE);
                } catch (t) {
                  console.error(t), (e.history.loadingState = o.Gu.REJECT);
                }
              }),
              clearHistory: (0, r.ls)(function* (t) {
                let { userId: a } = t,
                  { usersResource: i } = (0, r.dU)(e);
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
                e.history.items = (0, r.pj)([]);
              },
              resetHistoryStateRequest() {
                (e.history.loadingState = o.Gu.IDLE),
                  (e.history.items = (0, r.pj)([]));
              },
              resetResults() {
                e.results = (0, r.pj)([]);
              },
              resetSearchCorrectedText() {
                e.searchCorrectedText = null;
              },
              reset() {
                (e.searchCorrectedText = null),
                  (e.loadingState = o.Gu.IDLE),
                  (e.results = (0, r.pj)([]));
              },
              sendFeedback: (0, r.ls)(function* (t) {
                let { searchResource: a, modelActionsLogger: i } = (0, r.dU)(e);
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
        return { sign: i, timeStamp: t, trackId: e, format: U.yG.LRC };
      };
      var ev = a(885),
        eh = a.n(ev);
      let e_ = (e) => {
          try {
            let t = eh()(e).scripts;
            return (t || []).map((e) => {
              let { start: t, end: a, text: i } = e;
              return { text: i.trim(), from: t, to: a };
            });
          } catch (e) {
            return [];
          }
        },
        eS = r.V5.model("SyncLyricsLineModel", {
          from: r.V5.number,
          to: r.V5.number,
          text: r.V5.string,
        }),
        eb = r.V5.model("SyncLyricsModel", {
          loadingState: r.V5.enumeration(Object.values(o.Gu)),
          lines: r.V5.maybeNull(r.V5.array(eS)),
          major: r.V5.maybeNull(em.bP),
          writers: r.V5.maybeNull(r.V5.array(r.V5.string)),
          lyricId: r.V5.maybeNull(r.V5.number),
          externalLyricId: r.V5.maybeNull(r.V5.string),
        }).actions((e) => {
          let t = {
            getData: (0, r.ls)(function* (a) {
              let { tracksResource: i, modelActionsLogger: l } = (0, r.dU)(e);
              if (e.loadingState !== o.Gu.PENDING)
                try {
                  e.loadingState = o.Gu.PENDING;
                  let {
                    downloadUrl: l,
                    major: s,
                    externalLyricId: n,
                    lyricId: d,
                    writers: u,
                  } = yield i.getLyrics(ep(a));
                  (e.major = (0, em.jp)(s)),
                    (e.externalLyricId = n),
                    (e.lyricId = d),
                    (e.writers = (0, r.pj)(u)),
                    yield t.downloadSyncLyrics(l),
                    (e.loadingState = o.Gu.RESOLVE);
                } catch (t) {
                  (e.loadingState = o.Gu.REJECT), l.error(t);
                }
            }),
            downloadSyncLyrics: (0, r.ls)(function* (t) {
              let { tracksResource: a } = (0, r.dU)(e),
                i = yield a.getLyricsText(t);
              e.lines = (0, r.pj)(e_(i));
            }),
            sendViews: (0, r.ls)(function* (t) {
              let { trackId: a, albumId: i, playlistId: l } = t,
                { lyricViewsResource: s, modelActionsLogger: n } = (0, r.dU)(e);
              if (e.loadingState === o.Gu.RESOLVE)
                try {
                  if (!e.major || !e.lyricId || !e.externalLyricId) return;
                  yield s.sendViews({
                    lyricViews: [
                      {
                        id: (0, ec.Z)(),
                        trackId: a,
                        albumId: i,
                        playlistId: l,
                        majorId: e.major.id,
                        lyricId: e.lyricId,
                        externalLyricId: e.externalLyricId,
                        lyricFormat: U.yG.LRC,
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
      var ey = a(45635),
        eC = a(9495),
        ef = a(82436),
        eE = a(41540),
        eN = a(7042),
        ex = a(26079),
        eP = a(39479);
      let eI = r.V5.model("Root", {
          experiments: S.i_,
          user: eP.T_,
          collection: V,
          main: M,
          settings: S.ao,
          currentTrackInfo: I.Jx,
          album: g.Lf,
          artist: p.Od,
          library: S.f8,
          sonataState: ef.ps,
          playlist: Y.nb,
          slides: ex.iV,
          vibe: eC.a,
          search: eo,
          vibeSettings: eE.Ux,
          pinsCollection: eu.Lc,
          genre: O.Kx,
          genres: w.EU,
          mixes: X.ZP,
          tag: ed.tS,
          chart: v._,
          post: Q.vU,
          landingBlockEntities: h.oT,
          contextMenuPlaylists: N,
          musicHistory: K,
          createPlaylist: E.b_,
          location: S.CU,
          kinopoisk: B,
          nonMusic: J,
          disclaimer: eN.nU,
          trailer: ey.L,
          syncLyrics: eb,
          modals: S.dC,
          landing: h.d5,
        }),
        eL = (e, t) => eI.create(e, t);
      var eA = a(58616);
      let ek = ["settings", "sonataState"],
        eT = (e, t) => ek.reduce((t, a) => ((t[a] = e[a]), t), (0, eA.Z)(t));
      (0, l.DT)(!1);
      let ej = (e) => {
        let { children: t, nonce: a } = e;
        (0, n.useRef)([]), (0, n.useContext)(s.ServerInsertedHTMLContext);
        let l = (0, o.YS)(),
          d = (0, o.wL)(),
          u = (0, o.dE)(),
          [c] = (0, n.useState)(() => {
            var e;
            let t = { ...l, logger: d, modelActionsLogger: u };
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
              t && (0, r.Xx)(c, eT(c, t)), delete window.__STATE_SNAPSHOT__;
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
          return s.Genre;
        },
        fm: function () {
          return r;
        },
        uG: function () {
          return n;
        },
      });
      var i = a(96555);
      let l = i.V5.model("GenreListItemSubGenreModel", {
          tag: i.V5.string,
          title: i.V5.string,
        }),
        r = i.V5.model("GenreListItemModel", {
          tag: i.V5.string,
          title: i.V5.string,
          subGenres: i.V5.array(l),
        });
      var s = a(31925);
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
        l = a(33423),
        r = a(1918),
        s = a(44285),
        n = a(65688),
        o = a.n(n);
      let d = (0, l.Pi)((e) => {
        let { tag: t, title: a, subGenres: l } = e;
        return (0, i.jsxs)("div", {
          className: o().root,
          children: [
            (0, i.jsx)(s.rU, {
              className: o().link,
              href: "/genre/".concat(t),
              children: (0, i.jsx)(r.Heading, {
                variant: "h2",
                size: "m",
                lineClamp: 1,
                className: o().linkTitle,
                children: a,
              }),
            }),
            l.length > 0 &&
              (0, i.jsx)("div", {
                className: o().list,
                children: l.map((e) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: o().item,
                      children: (0, i.jsx)(s.rU, {
                        className: o().link,
                        href: "/genre/".concat(e.tag),
                        children: (0, i.jsx)(r.Caption, {
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
    57921: function (e, t, a) {
      "use strict";
      a.d(t, {
        Pj: function () {
          return s.ReleaseNotesModal;
        },
        TF: function () {
          return r.TitleBar;
        },
        l7: function () {
          return c;
        },
        Yl: function () {
          return l;
        },
        F5: function () {
          return h;
        },
        Pt: function () {
          return m;
        },
        KZ: function () {
          return d;
        },
        vs: function () {
          return p.useApplicationDeeplinks;
        },
        Er: function () {
          return n.useApplicationUpdate;
        },
        Zw: function () {
          return v.useLaunch;
        },
        A4: function () {
          return g.usePlayerAction;
        },
        bO: function () {
          return u.useRefreshApplicationData;
        },
        Tk: function () {
          return o.useReleaseNotes;
        },
      });
      var i = a(5674);
      let l = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(i.BO.APPLICATION_READY);
      };
      a(46971);
      var r = a(58081),
        s = a(82703),
        n = a(83001),
        o = a(63919);
      let d = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(i.BO.RELEASE_NOTES_READY);
      };
      var u = a(33854);
      let c = () => {
          document.addEventListener("auxclick", (e) => e.preventDefault()),
            document.addEventListener("click", (e) => {
              (e.ctrlKey || e.metaKey) && e.preventDefault();
            });
        },
        m = (e) => {
          var t;
          let { isPlaying: a, canMoveBackward: l, canMoveForward: r } = e;
          null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(i.BO.PLAYER_STATE, {
              isPlaying: a,
              canMoveBackward: l,
              canMoveForward: r,
              isPrimaryDataChanged: e.isPrimaryDataChanged,
              status: e.status,
              track: e.track,
              progress: e.progress,
              availableActions: e.availableActions,
              actionsStore: e.actionsStore,
            });
        };
      var g = a(46686),
        p = a(75084),
        v = a(2779);
      let h = (e) => {
        let t = e === i.Q2.Light ? "#FFFFFF" : "#000000";
        window.desktopEvents.send(i.BO.APPLICATION_THEME, t);
      };
    },
    46971: function (e, t, a) {
      "use strict";
      a.d(t, {
        N$: function () {
          return l;
        },
        eZ: function () {
          return s;
        },
        tX: function () {
          return r;
        },
      });
      var i = a(5674);
      let l = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(i.BO.WINDOW_MINIMIZE);
        },
        r = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(i.BO.WINDOW_MAXIMIZE);
        },
        s = () => {
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
        l = a(99616),
        r = a(5674);
      let s = [
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
              let a = (0, r.z)(e, "/album/:albumId/track/:trackId"),
                i = a.albumId;
              return null !== (t = (0, r.SZ)("/album/".concat(i))) &&
                void 0 !== t
                ? t
                : "/";
            },
          ],
        ],
        n = () => {
          let e = (0, i.useRouter)(),
            t = (0, l.useCallback)(
              (t, a) => {
                for (let [t, i] of s)
                  if (t.test(a)) {
                    e.push(i(a));
                    return;
                  }
                let i = (0, r.SZ)(a);
                i ? e.push(i) : e.push("/");
              },
              [e],
            );
          (0, l.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(r.BO.OPEN_DEEPLINK, t),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(r.BO.OPEN_DEEPLINK, t);
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
        l = a(99616),
        r = a(65244),
        s = a(5674),
        n = a(35338),
        o = a(15527),
        d = a(1918),
        u = a(44285),
        c = a(12576),
        m = a.n(c);
      let g = (e) => {
          let { version: t, formatMessage: a, closeToast: r } = e,
            c = (0, l.useCallback)(() => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.send(s.BO.INSTALL_UPDATE),
                null == r || r();
            }, [r]),
            g = (0, l.useMemo)(
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
          let { formatMessage: e } = (0, r.Z)(),
            { notify: t } = (0, s.d$)(),
            a = (0, l.useRef)(""),
            n = (0, l.useCallback)(
              (l, r) => {
                a.current !== r &&
                  ((a.current = r),
                  t((0, i.jsx)(g, { formatMessage: e, version: r }), {
                    containerId: s.W$.APPLICATION_UPDATE,
                  }));
              },
              [e, a, t],
            );
          (0, l.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(s.BO.UPDATE_AVAILABLE, n),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(s.BO.UPDATE_AVAILABLE, n);
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
            return r;
          },
        });
      var i = a(99616),
        l = a(5674);
      let r = () => {
        let e = (0, l.sv)(),
          t = (0, i.useCallback)(() => {
            let t = (0, l.bo)();
            t && e.count(t, "installsCount");
          }, [e]);
        (0, i.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(l.BO.FIRST_LAUNCH, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(l.BO.FIRST_LAUNCH, t);
            }
          );
        }, [t]);
      };
    },
    46686: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          usePlayerAction: function () {
            return n;
          },
        });
      var i,
        l,
        r = a(99616),
        s = a(5674),
        eventPS = a(57921);
      ((i = l || (l = {})).PLAY = "PLAY"),
        (i.PAUSE = "PAUSE"),
        (i.TOGGLE_PLAY = "TOGGLE_PLAY"),
        (i.MOVE_BACKWARD = "MOVE_BACKWARD"),
        (i.MOVE_FORWARD = "MOVE_FORWARD"),
        (i.TOGGLE_REPEAT = "TOGGLE_REPEAT"),
        (i.REPEAT_NONE = "REPEAT_NONE"),
        (i.REPEAT_CONTEXT = "REPEAT_CONTEXT"),
        (i.REPEAT_ONE = "REPEAT_ONE"),
        (i.TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE"),
        (i.TOGGLE_LIKE = "TOGGLE_LIKE"),
        (i.TOGGLE_DISLIKE = "TOGGLE_DISLIKE");
      let n = (e) => {
        let t = (0, r.useCallback)(
          (t, a) => {
            switch (a) {
              case l.PLAY:
              case l.PAUSE:
              case l.TOGGLE_PLAY:
                null == e || e.togglePause();
                break;
              case l.MOVE_BACKWARD:
                null == e || e.moveBackward();
                break;
              case l.MOVE_FORWARD:
                null == e || e.moveForward();
                break;
              case l.TOGGLE_REPEAT:
                null == e ||
                  e.mainPlayback.queueController.playerQueue.toggleRepeat();
                break;
              case l.REPEAT_NONE:
                null == e ||
                  e.mainPlayback.queueController.playerQueue.setRepeatMode(
                    "none",
                  );
                break;
              case l.REPEAT_CONTEXT:
                null == e ||
                  e.mainPlayback.queueController.playerQueue.setRepeatMode(
                    "context",
                  );
                break;
              case l.REPEAT_ONE:
                null == e ||
                  e.mainPlayback.queueController.playerQueue.setRepeatMode(
                    "one",
                  );
                break;
              case l.TOGGLE_SHUFFLE:
                null == e || e.toggleShuffle();
                break;
              case l.TOGGLE_LIKE: {
                console.log("triggered2");
                null == e ||
                  e.mainPlayback.contextController.entityFactory.likeStore.toggleTrackLike(
                    {
                      entityId:
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      albumId:
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.albums[0].id,
                      userId: window.localStorage._ym_uid.replaceAll('"', ""),
                    },
                  );
                (0, eventPS.Pt)({
                  status: e.state.playerState.status.value,
                  isPlaying: e.state.playerState.status.value === "playing",
                  track:
                    e.state.queueState.currentEntity.value?.entity.entityData
                      .meta,
                  progress: 0,
                  availableActions: {
                    moveBackward:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.moveBackward.value,
                    moveForward:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.moveForward.value,
                    repeat:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.repeat.value,
                    shuffle:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.shuffle.value,
                    speed:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.speed.value,
                  },
                  actionsStore: {
                    repeat:
                      e.mainPlayback.playbackState.queueState.repeat.value,
                    shuffle:
                      e.mainPlayback.playbackState.queueState.shuffle.value,
                    isLiked:
                      e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                    isDisliked:
                      e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                  },
                });
                break;
              }
              case l.TOGGLE_DISLIKE: {
                null == e ||
                  e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.toggleTrackDislike(
                    {
                      entityId:
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      albumId:
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.albums[0].id,
                      userId: window.localStorage._ym_uid.replaceAll('"', ""),
                    },
                  );
                (0, eventPS.Pt)({
                  status: e.state.playerState.status.value,
                  isPlaying: e.state.playerState.status.value === "playing",
                  track:
                    e.mainPlayback.playbackState.queueState.currentEntity.value
                      ?.entity.entityData.meta,
                  progress: 0,
                  availableActions: {
                    moveBackward:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.moveBackward.value,
                    moveForward:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.moveForward.value,
                    repeat:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.repeat.value,
                    shuffle:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.shuffle.value,
                    speed:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.speed.value,
                  },
                  actionsStore: {
                    repeat:
                      e.mainPlayback.playbackState.queueState.repeat.value,
                    shuffle:
                      e.mainPlayback.playbackState.queueState.shuffle.value,
                    isLiked:
                      e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                    isDisliked:
                      e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                  },
                });
                break;
              }
            }
          },
          [e],
        );
        (0, r.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(s.BO.PLAYER_ACTION, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(s.BO.PLAYER_ACTION, t);
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
            return s;
          },
        });
      var i = a(99616),
        l = a(34603),
        r = a(5674);
      let s = () => {
        let {
            library: e,
            collection: t,
            experiments: a,
            main: s,
            user: n,
          } = (0, r.oR)(),
          o = (0, i.useCallback)(() => {
            a.getData(),
              e.getData(),
              s.landing.isLoaded &&
                s.landing.getSkeleton(
                  { id: l.jB.WEB_MAIN, showWizard: n.settings.showWizard },
                  { preloadBlocks: 2 },
                ),
              t.landing.isLoaded &&
                t.landing.getSkeleton(
                  {
                    id: l.jB.WEB_COLLECTION,
                    showWizard: n.settings.showWizard,
                  },
                  { preloadBlocks: 3 },
                );
          }, [t.landing, a, e, s.landing, n.settings.showWizard]);
        (0, i.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(r.BO.REFRESH_APPLICATION_DATA, o),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(r.BO.REFRESH_APPLICATION_DATA, o);
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
            return r;
          },
        });
      var i = a(99616),
        l = a(5674);
      let r = () => {
        let {
          modals: { releaseNotesModal: e },
        } = (0, l.oR)();
        (0, i.useEffect)(() => {
          var t;
          return (
            null === (t = window.desktopEvents) ||
              void 0 === t ||
              t.on(l.BO.SHOW_RELEASE_NOTES, e.open),
            () => {
              var t;
              null === (t = window.desktopEvents) ||
                void 0 === t ||
                t.off(l.BO.SHOW_RELEASE_NOTES, e.open);
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
            return h;
          },
        });
      var i = a(8759),
        l = a(35338),
        r = a(33423),
        s = a(99616),
        n = a(65244),
        o = a(2814),
        d = a(31476),
        u = a(71716),
        c = a(1918),
        m = a(5674),
        g = a(45679),
        p = a.n(g);
      let v = {
          ul: (e) =>
            (0, i.jsx)("ul", { className: p().description, children: e }),
          li: (e) => (0, i.jsx)("li", { className: p().item, children: e }),
          code: (e) => (0, i.jsx)("code", { className: p().code, children: e }),
          date: (e) => (0, i.jsx)("span", { className: p().date, children: e }),
          p: (e) => (0, i.jsx)("p", { className: p().paragraph, children: e }),
          br: (0, i.jsx)("br", {}),
        },
        h = (0, r.Pi)((e) => {
          let { dictionary: t } = e,
            {
              modals: { releaseNotesModal: a },
            } = (0, m.oR)(),
            { formatMessage: r } = (0, n.Z)(),
            g = (0, s.useMemo)(() => (0, m.L)(t), [t]);
          return (0, i.jsx)(d.u, {
            title: r({ id: "desktop.release-notes-modal-title" }),
            open: a.isOpened,
            onOpenChange: a.onOpenChange,
            onClose: a.close,
            size: "fitContent",
            placement: "center",
            labelClose: r({ id: "interface-actions.close" }),
            className: p().root,
            headerClassName: p().modalHeader,
            contentClassName: p().modalContent,
            children: (0, i.jsx)(u.t, {
              className: (0, l.W)(p().scrollableContent, p().important),
              containerClassName: (0, l.W)(p().notes, p().important),
              children: g.map((e) =>
                (0, i.jsxs)(
                  "div",
                  {
                    className: p().note,
                    children: [
                      (0, i.jsx)(c.Heading, {
                        variant: "h4",
                        className: (0, l.W)(p().version, p().important),
                        children: (0, m.K7)(e),
                      }),
                      (0, i.jsx)(o.Z, { id: e, values: v }),
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
        l = a(35338),
        r = a(33423),
        s = a(99616),
        n = a(65244),
        o = a(5674),
        d = a(46971),
        u = a(99750),
        c = a.n(u);
      let m = (e) => {
          let {
            children: t,
            className: a,
            onClick: r,
            ariaLabel: s,
            withSecondaryColor: n,
          } = e;
          return (0, i.jsx)("button", {
            type: "button",
            className: (0, l.W)(
              c().button,
              { [c().button_withSecondaryColor]: n },
              a,
            ),
            onClick: r,
            "aria-label": s,
            children: t,
          });
        },
        g = (0, r.Pi)((e) => {
          let { withSecondaryColor: t } = e,
            a = (0, o.Xf)(),
            r = a === o.t4.WINDOWS,
            { formatMessage: u } = (0, n.Z)(),
            g = (0, s.useCallback)(() => {
              (0, d.N$)();
            }, []),
            p = (0, s.useCallback)(() => {
              (0, d.tX)();
            }, []),
            v = (0, s.useCallback)(() => {
              (0, d.eZ)();
            }, []);
          return (0, i.jsx)("div", {
            className: c().root,
            onDoubleClick: p,
            children:
              r &&
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
                      className: (0, l.W)(c().icon, {
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
                      className: (0, l.W)(c().icon, {
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
                    onClick: v,
                    ariaLabel: u({ id: "windows-menu.close" }),
                    children: (0, i.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, l.W)(c().icon, {
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
          return f.ShuffleButton;
        },
        WP: function () {
          return i.SonataControls;
        },
        ps: function () {
          return y;
        },
        RN: function () {
          return C;
        },
      });
      var i = a(21871);
      a(74758), a(34512);
      var l = a(93043),
        r = a(96555),
        s = a(57413),
        n = a(59899),
        o = a(45412),
        d = a(86502),
        u = a(14408),
        c = a(96169),
        m = a(81446),
        g = a(43310),
        p = a(5674);
      let v = (e) => {
          var t, a, i;
          switch (e.data.type) {
            case u.A4.Generative: {
              let a = e.data.meta,
                i = (0, p.Us)(null == a ? void 0 : a.derivedColors);
              return (0, r.pj)({
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
                l =
                  null === (a = t.artists) || void 0 === a
                    ? void 0
                    : a.map(m.d),
                s =
                  null === (i = t.albums) || void 0 === i ? void 0 : i.map(c.N);
              return (0, r.pj)({ ...(0, g.Ni)(t), artists: l, albums: s });
            }
          }
        },
        h = r.V5.model("UnloadedEntityMeta", {
          id: r.V5.union(r.V5.number, r.V5.string),
          albumId: r.V5.maybe(r.V5.union(r.V5.number, r.V5.string)),
        }),
        _ = r.V5.model("UnloadedEntityData", {
          meta: h,
          type: r.V5.literal(d.RX.Unloaded),
        });
      var S = a(16121);
      let b = g.yp
          .props({
            artists: r.V5.array(m.Go),
            albums: r.V5.array(c.KX),
            chart: r.V5.maybe(S.BH),
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
              var l, r, s;
              return null !==
                (s =
                  null === (r = e.albums[0]) || void 0 === r
                    ? void 0
                    : null === (l = r.trackPosition) || void 0 === l
                      ? void 0
                      : l.index) && void 0 !== s
                ? s
                : null;
            },
          })),
        y = r.V5.model("SonataState", {
          contextType: r.V5.maybeNull(r.V5.enumeration(Object.values(s.Ak))),
          contextId: r.V5.maybeNull(r.V5.string),
          entityMeta: r.V5.maybeNull(b),
          unloadedEntitiesData: r.V5.maybe(r.V5.array(_)),
          status: r.V5.enumeration(Object.values(d.Xz)),
          canMoveForward: r.V5.boolean,
          canMoveBackward: r.V5.boolean,
          canSpeed: r.V5.boolean,
          repeatMode: r.V5.enumeration(Object.values(o.zq)),
          canChangeRepeatMode: r.V5.boolean,
          volume: r.V5.maybe(r.V5.number),
          speed: r.V5.maybe(r.V5.number),
          canShuffle: r.V5.boolean,
          shuffle: r.V5.boolean,
          currentlyPlayingTrackIndex: r.V5.maybe(r.V5.number),
          quality: r.V5.enumeration(Object.values(n.nJ)),
        })
          .views((e) => ({
            get unloadedEntitiesDataFromModels() {
              return (0, l.ZN)(e.unloadedEntitiesData);
            },
            get isGenerativeContext() {
              return e.contextType === s.Ak.Generative;
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
              t && (e.unloadedEntitiesData = (0, r.pj)(t));
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
        C = (e, t) => ({ type: d.RX.Unloaded, meta: { id: e, albumId: t } });
      var f = a(66403),
        E = a(6769);
    },
    43984: function (e, t, a) {
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
      var l = a(96555),
        r = a(96431),
        s = a(34603),
        n = a(6329),
        o = a(96911),
        d = a(82436),
        u = a(96169),
        c = a(5674),
        m = a(65704);
      let g = (e, t) => e.map((e) => "".concat(e, ":").concat(t));
      var p = a(95539);
      let v = (e) => ({ type: u.lf.TEXT, data: e || null }),
        h = (e, t, a, i, l) => ({
          type: (null == a ? void 0 : a.type) || s.Vc.TRACK,
          id: e,
          data: a || null,
          loadingState: t,
          position: i,
          isBest: l,
        }),
        _ = (e) => "".concat(e, "-text"),
        S = (e) => String(e),
        b = (e, t, a, i) => {
          e.forEach((e) => {
            var l, r, s, n, o;
            if (null === (l = e.albums) || void 0 === l ? void 0 : l[0]) {
              let l = a.get(S(e.id));
              void 0 !== l &&
                (t[l] = h(
                  e.id,
                  c.Gu.RESOLVE,
                  (0, p.Vt)(e),
                  null === (s = e.albums[0]) || void 0 === s
                    ? void 0
                    : null === (r = s.trackPosition) || void 0 === r
                      ? void 0
                      : r.index,
                  null == i ? void 0 : i.includes(Number(e.id)),
                ));
              let d = a.get(_(e.id));
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
        y = (e, t, a, i) => {
          let l = 0;
          e.volumes.forEach((r) => {
            e.volumes.length > 1 &&
              r[0] &&
              (t.push(v()), a.set(_(r[0].id), t.length - 1)),
              r.forEach((e) => {
                t.push(h(e.id, c.Gu.IDLE)),
                  a.set(S(e.id), t.length - 1),
                  i.set(S(e.id), l),
                  l++;
              });
          });
        },
        C = (e, t, a, i) => {
          e.forEach((e) => {
            let l = a.get(String(e));
            void 0 !== l && (t[l] = h(e, i));
          });
        },
        f = l.V5.model("LabelItem", { id: l.V5.number, name: l.V5.string }),
        E = l.V5.model("RelatedAlbumsPage", {
          loadingState: l.V5.enumeration(Object.values(c.Gu)),
          items: l.V5.array(o.ug),
        }),
        N = l.V5.compose(
          l.V5.model("AlbumPage", {
            meta: l.V5.maybeNull(o.ug),
            items: l.V5.array(n.JP),
            indexItems: l.V5.map(l.V5.number),
            trackIndexInContext: l.V5.map(l.V5.number),
            loadingState: l.V5.enumeration(Object.values(c.Gu)),
            errorStatusCode: l.V5.maybeNull(l.V5.number),
            deprecationTargetAlbumId: l.V5.maybeNull(l.V5.number),
            latestGenreAlbums: E,
            otherArtistAlbums: E,
            otherAlbumVersions: l.V5.array(o.ug),
            labels: l.V5.maybeNull(l.V5.array(f)),
            description: l.V5.maybe(l.V5.string),
          }),
          m.ie,
        )
          .views((e) => ({
            get isNonMusicType() {
              var t;
              if (null === (t = e.meta) || void 0 === t ? void 0 : t.type)
                return [s.VZ.PODCAST, s.VZ.AUDIOBOOK].includes(e.meta.type);
              return !1;
            },
            get isOtherArtistAlbumsAvailable() {
              var a, i, l, n;
              return !!(
                !this.isNonMusicType &&
                (null === (i = e.meta) || void 0 === i
                  ? void 0
                  : null === (a = i.artists) || void 0 === a
                    ? void 0
                    : a.length) === 1 &&
                !(null === (n = e.meta) || void 0 === n
                  ? void 0
                  : null === (l = n.artists[0]) || void 0 === l
                    ? void 0
                    : l.various)
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
                e.errorStatusCode === r.CN.NOT_FOUND
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
              var d, m, g, p, v, h, _, S, b, y;
              return {
                id: e.meta.id,
                title: null === (d = e.meta) || void 0 === d ? void 0 : d.title,
                coverUri:
                  null === (m = e.meta) || void 0 === m ? void 0 : m.coverUri,
                type: null === (g = e.meta) || void 0 === g ? void 0 : g.type,
                year: null === (p = e.meta) || void 0 === p ? void 0 : p.year,
                version:
                  null === (v = e.meta) || void 0 === v ? void 0 : v.version,
                contentWarning:
                  null === (h = e.meta) || void 0 === h
                    ? void 0
                    : h.contentWarning,
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
              getLatestGenreAlbums: (0, l.ls)(function* (t) {
                let { topResource: a, modelActionsLogger: i } = (0, l.dU)(e);
                if (e.latestGenreAlbums.loadingState !== c.Gu.PENDING)
                  try {
                    e.latestGenreAlbums.loadingState = c.Gu.PENDING;
                    let i = yield a.getTopByGenre(t);
                    (e.latestGenreAlbums.items = (0, l.pj)(i.albums.map(o.ym))),
                      (e.latestGenreAlbums.loadingState = c.Gu.RESOLVE);
                  } catch (t) {
                    i.error(t),
                      (e.latestGenreAlbums.loadingState = c.Gu.REJECT);
                  }
              }),
              getOtherArtistAlbums: (0, l.ls)(function* (t, a) {
                let { artistsResource: i, modelActionsLogger: r } = (0, l.dU)(
                  e,
                );
                if (e.otherArtistAlbums.loadingState !== c.Gu.PENDING)
                  try {
                    if (!t.artistId) {
                      e.otherArtistAlbums.loadingState = c.Gu.REJECT;
                      return;
                    }
                    e.otherArtistAlbums.loadingState = c.Gu.PENDING;
                    let r = yield i.getSafeDirectAlbums({
                      ...t,
                      artistId: t.artistId,
                    });
                    (e.otherArtistAlbums.items = (0, l.pj)(
                      r.albums
                        .filter((e) => String(e.id) !== String(a))
                        .map(o.ym),
                    )),
                      (e.otherArtistAlbums.loadingState = c.Gu.RESOLVE);
                  } catch (t) {
                    r.error(t),
                      (e.otherArtistAlbums.loadingState = c.Gu.REJECT);
                  }
              }),
              getTracks: (0, l.ls)(function* (t) {
                let { trackIds: a } = t,
                  { tracksResource: i, modelActionsLogger: r } = (0, l.dU)(e);
                try {
                  var s;
                  if (!(null === (s = e.meta) || void 0 === s ? void 0 : s.id))
                    return;
                  C(a, e.items, e.indexItems, c.Gu.PENDING);
                  let t = yield i.getTracksMeta({
                    trackIds: g(a, e.meta.id),
                    withProgress: !0,
                  });
                  b(t, e.items, e.indexItems, e.meta.bestAlbumTracks);
                } catch (t) {
                  r.error(t), C(a, e.items, e.indexItems, c.Gu.REJECT);
                }
              }),
              getData: (0, l.ls)(function* (a) {
                let { albumId: i, resumeStream: n } = a,
                  { albumResource: u, modelActionsLogger: m } = (0, l.dU)(e),
                  { experiments: g, disclaimer: p } = (0, l.yj)(e),
                  v = g.checkExperiment(c.pe.WebNextAlbumDisableVersions, "on"),
                  h = g.checkExperiment(c.pe.WebNextAlbumDisableTracks, "on"),
                  _ = g.checkExperiment(
                    c.pe.WebNextAlbumDisableLatestGenreAlbums,
                    "on",
                  ),
                  S = g.checkExperiment(
                    c.pe.WebNextAlbumDisableOtherArtistAlbums,
                    "on",
                  ),
                  b = g.checkExperiment(c.pe.WebNextLegalRejectAlbum, "on");
                if (e.loadingState !== c.Gu.PENDING)
                  try {
                    var C, f, E, N;
                    let a, m;
                    e.loadingState = c.Gu.PENDING;
                    let g = yield u.getAlbumWithTracksIds({
                      albumId: i,
                      resumeStream: n,
                    });
                    if ((null == g ? void 0 : g.error) === "not-found") {
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                        (e.loadingState = c.Gu.REJECT),
                        (e.otherArtistAlbums.loadingState = c.Gu.REJECT),
                        (e.latestGenreAlbums.loadingState = c.Gu.REJECT);
                      return;
                    }
                    if (
                      null === (C = g.deprecation) || void 0 === C
                        ? void 0
                        : C.targetAlbumId
                    ) {
                      (e.deprecationTargetAlbumId =
                        g.deprecation.targetAlbumId),
                        (e.loadingState = c.Gu.RESOLVE);
                      return;
                    }
                    let x = (
                      null !== (f = g.disclaimers) && void 0 !== f ? f : []
                    ).includes(s.em.MODAL);
                    x && b && (yield p.getAlbumDisclaimer({ albumId: i }));
                    let { sonataState: P } = (0, l.yj)(e);
                    if (
                      (P.setUnloadedEntitiesData(
                        g.volumes.flat().map((e) => (0, d.RN)(e.id)),
                      ),
                      (e.meta = (0, o.ym)(g)),
                      (e.labels = (0, l.pj)(g.labels)),
                      (e.contentWarning = (0, l.pj)(g.contentWarning)),
                      (e.description = (0, l.pj)(g.description)),
                      !v &&
                        g.duplicates &&
                        g.duplicates.length > 0 &&
                        (e.otherAlbumVersions = (0, l.pj)(
                          null === (E = g.duplicates) || void 0 === E
                            ? void 0
                            : E.map(o.ym),
                        )),
                      !h)
                    ) {
                      y(g, e.items, e.indexItems, e.trackIndexInContext);
                      let a = [];
                      for (let t = 0; t < 10; t++) {
                        let i = e.items[t];
                        (null == i ? void 0 : i.type) === s.Vc.TRACK &&
                          a.push(String(i.id));
                      }
                      yield t.getTracks({ trackIds: a });
                    }
                    !_ && e.isLatestGenreAlbumsAvailable
                      ? (a = t.getLatestGenreAlbums({
                          category: s.mk.RECENT_ALBUMS,
                          period: s.pH.WEEK,
                          pageSize: 8,
                          genre: g.genre,
                        }))
                      : (e.latestGenreAlbums.loadingState = c.Gu.RESOLVE),
                      !S && e.isOtherArtistAlbumsAvailable
                        ? (m = t.getOtherArtistAlbums(
                            {
                              artistId: String(
                                null === (N = g.artists[0]) || void 0 === N
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
                      t instanceof r.du &&
                        (t.statusCode === r.CN.NOT_FOUND ||
                          t.statusCode === r.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = r.CN.NOT_FOUND),
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
                let { sonataState: t } = (0, l.yj)(e);
                t.resetUnloadedEntitiesData(),
                  (e.meta = null),
                  (e.errorStatusCode = null),
                  (e.deprecationTargetAlbumId = null),
                  (e.items = (0, l.pj)([])),
                  e.indexItems.clear(),
                  e.trackIndexInContext.clear(),
                  (e.loadingState = c.Gu.IDLE),
                  (e.latestGenreAlbums.loadingState = c.Gu.IDLE),
                  (e.latestGenreAlbums.items = (0, l.pj)([])),
                  (e.otherArtistAlbums.loadingState = c.Gu.IDLE),
                  (e.otherArtistAlbums.items = (0, l.pj)([])),
                  (e.otherAlbumVersions = (0, l.pj)([])),
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
        l = a(33423),
        r = a(99616),
        s = a(2365),
        n = a(5674);
      let o = (0, l.Pi)(() => {
        let { album: e } = (0, n.oR)();
        return (
          (0, r.useEffect)(
            () => () => {
              e.reset();
            },
            [e],
          ),
          (0, i.jsx)(s.T, {})
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
        l,
        r = a(8759),
        s = a(33423),
        n = a(11769),
        o = a(99616),
        d = a(65244),
        u = a(27287),
        c = a(70579),
        m = a(96911),
        g = a(13236),
        p = a(7042),
        v = a(5674),
        h = a(44285),
        _ = a(35338),
        S = a(2814),
        b = a(454),
        y = a(57413),
        C = a(34603),
        f = a(1918),
        E = a(48157),
        N = a(95539),
        x = a(96169),
        P = a(44752),
        I = a.n(P);
      let L = (0, s.Pi)((e) => {
        var t;
        let { albumHeaderRef: a, refCallback: i } = e,
          l = (0, o.useRef)(null),
          s = (0, v.x5)({ pageId: v.Rh.ALBUM, blockId: v.aU.ALBUM }),
          n = (0, o.useRef)(0),
          { notify: u } = (0, v.d$)(),
          { album: c, experiments: g, sonataState: p } = (0, v.oR)(),
          { formatMessage: P } = (0, d.Z)(),
          [L, A] = (0, o.useState)(!1);
        (0, o.useEffect)(
          () => () => {
            n.current = 0;
          },
          [c],
        ),
          (0, o.useEffect)(() => {
            (c.otherArtistAlbums.loadingState === v.Gu.REJECT ||
              c.latestGenreAlbums.loadingState === v.Gu.REJECT) &&
              n &&
              !(n.current > 0) &&
              (u(
                (0, r.jsx)(h.Q, {
                  error: P({
                    id: "album-errors.error-during-loading-similar-albums",
                  }),
                }),
                { containerId: v.W$.ERROR },
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
            c.isLoaded && c.hasOtherAlbumVersions && A(!0);
          }, [c.hasOtherAlbumVersions, c.isLoaded]);
        let k = (0, o.useCallback)(() => {
            let e = l.current;
            null == e || e.scrollIntoView({ behavior: "smooth" });
          }, []),
          T = (0, o.useMemo)(
            () =>
              c.isLoading || !c.meta || c.isRejected
                ? (0, r.jsx)(E.KC, { className: I().header })
                : (0, r.jsx)(E.hx, {
                    album: c.meta,
                    className: I().header,
                    ref: a,
                    onVersionClick: L ? k : void 0,
                  }),
            [c.isLoading, c.isRejected, c.meta, a, k, L],
          ),
          j = (0, o.useMemo)(
            () => ({
              Header: () => T,
              Footer: () =>
                (0, r.jsxs)("div", {
                  className: I().footerContainer,
                  children: [
                    (0, r.jsxs)("div", {
                      className: I().carouselBlocks,
                      children: [
                        c.hasOtherAlbumVersions &&
                          (0, r.jsx)(m.wk, {
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
                            headingRef: l,
                          }),
                        c.hasLatestGenreAlbums &&
                          (0, r.jsx)(m.wk, {
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
                          (0, r.jsx)(m.wk, {
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
                    (0, r.jsx)(h.$_, { className: I().footer }),
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
                (null == e ? void 0 : e.type) === C.Vc.TRACK &&
                  (null == e ? void 0 : e.loadingState) === v.Gu.IDLE &&
                  t.push(e.id);
              }
              t.length && c.getTracks({ trackIds: t });
            },
            [c],
          ),
          R = g.checkExperiment(v.pe.WebNextAlbumDisableTracks, "on"),
          D = R ? 0 : c.items.length || 10;
        return (0, r.jsx)(h.Wv, {
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
          totalCount: D,
          itemContentCallback: (e) => {
            var t, a;
            let i =
              null == c
                ? void 0
                : null === (t = c.items) || void 0 === t
                  ? void 0
                  : t[e];
            if (!i || !c.meta || c.isRejected)
              return (0, r.jsx)(h.DX, {
                isActive: !0,
                className: I().shimmerItem,
                variant: v.Lx.ALBUM,
              });
            if (!(null == i ? void 0 : i.data))
              switch (null == i ? void 0 : i.type) {
                case x.lf.TEXT:
                  return (0, r.jsx)(h.AH, { className: I().shimmerItem });
                case C.Vc.TRACK:
                  return (0, r.jsx)(h.DX, {
                    isActive: !0,
                    className: I().shimmerItem,
                    variant: v.Lx.ALBUM,
                  });
              }
            return (null == i ? void 0 : i.type) === x.lf.TEXT
              ? (0, r.jsx)("div", {
                  className: (0, _.W)(I().shimmerItem, I().textItem),
                  children: (0, r.jsx)(f.Caption, {
                    variant: "span",
                    type: "entity",
                    size: "m",
                    weight: "medium",
                    className: I().text,
                    children: (0, r.jsx)(S.Z, {
                      id: "entity-names.disk-number",
                      values: { number: i.data },
                    }),
                  }),
                })
              : i.data
                ? (0, r.jsx)(N.RJ, {
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
                        from: s,
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
          initialItemCount: D,
          handleRef: i,
          withHeader: !0,
        });
      });
      var A = a(26265),
        k = a(6329);
      ((i = l || (l = {})).ABOUT = "about"), (i.TRACKS = "track-list");
      let T = [l.ABOUT, l.TRACKS];
      var j = a(28280),
        G = a.n(j);
      let R = "activeTab",
        D = (0, s.Pi)((e) => {
          var t;
          let { podcastHeaderRef: a, refCallback: i } = e,
            s = (0, v.x5)({ pageId: v.Rh.PODCAST, blockId: v.aU.PODCAST }),
            n = (0, o.useRef)(0),
            u = (0, o.useRef)(null),
            [c, m] = (0, o.useState)(l.ABOUT),
            g = (0, v.m5)(),
            { album: p, experiments: b, sonataState: P } = (0, v.oR)(),
            L = b.checkExperiment(v.pe.WebNextPodcastPage, "on"),
            j = (0, A.useTabsState)(0),
            { formatMessage: D } = (0, d.Z)();
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
                r = null == i ? void 0 : i.get(R);
              T.includes(r)
                ? (m(r),
                  null === (a = j.onTabChange) ||
                    void 0 === a ||
                    a.call(j, T.indexOf(r)))
                : (null == i || i.set(R, l.ABOUT), g(String(u.current)));
            }, [j, g, L]);
          let V = (0, o.useMemo)(
              () => ({
                about: D({ id: "podcast.tab-about" }),
                "track-list": D(
                  { id: "podcast.tab-tracks" },
                  { value: p.items.length },
                ),
              }),
              [D, p.items.length],
            ),
            O = (0, o.useMemo)(
              () => (e) => {
                var t, a, i;
                if (!j.onTabChange || e === j.value) return;
                j.onTabChange(e);
                let r = null !== (i = T[e]) && void 0 !== i ? i : l.ABOUT;
                m(r),
                  null === (a = u.current) ||
                    void 0 === a ||
                    null === (t = a.searchParams) ||
                    void 0 === t ||
                    t.set(R, r),
                  g(String(u.current));
              },
              [j, g],
            ),
            w = (e, t) =>
              (0, r.jsxs)("div", {
                className: G().infoBlock,
                children: [
                  (0, r.jsx)(f.Caption, {
                    variant: "div",
                    type: "entity",
                    size: "m",
                    className: G().infoTitle,
                    children: e,
                  }),
                  (0, r.jsx)(f.Caption, {
                    variant: "div",
                    type: "entity",
                    size: "m",
                    children: t,
                  }),
                ],
              }),
            B = (0, o.useMemo)(() => {
              var e, t, a, i, l;
              let s =
                  Number(
                    null === (e = p.labels) || void 0 === e ? void 0 : e.length,
                  ) > 1
                    ? D({ id: "podcast.publishers-title" })
                    : D({ id: "podcast.publisher-title" }),
                n =
                  null === (t = p.labels) || void 0 === t
                    ? void 0
                    : t.map((e) => e.name).join(", "),
                o = D({ id: "podcast.age-limit" });
              return (0, r.jsxs)("div", {
                className: G().contentAbout,
                children: [
                  !!(null === (a = p.description) || void 0 === a
                    ? void 0
                    : a.length) &&
                    (0, r.jsx)(f.Caption, {
                      variant: "div",
                      type: "entity",
                      size: "m",
                      className: I().text,
                      children: (0, r.jsx)("span", {
                        dangerouslySetInnerHTML: { __html: p.description },
                      }),
                    }),
                  ((null === (i = p.labels) || void 0 === i
                    ? void 0
                    : i.length) ||
                    p.isExplicit) &&
                    (0, r.jsxs)("div", {
                      className: I().text,
                      children: [
                        !!(null === (l = p.labels) || void 0 === l
                          ? void 0
                          : l.length) && w("".concat(s, ":"), String(n)),
                        p.isExplicit && w("".concat(o, ":"), "18+"),
                      ],
                    }),
                ],
              });
            }, [D, p.isExplicit, p.labels, p.description]),
            M = (0, o.useMemo)(
              () =>
                p.isLoading || !p.meta || p.isRejected
                  ? (0, r.jsx)(E.KC, { className: I().header })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(E.hx, {
                          album: p.meta,
                          className: I().header,
                          ref: a,
                        }),
                        L &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(h.no, {
                                className: G().tabCarousel,
                                ...j,
                                onTabChange: O,
                                children: T.map((e, t) =>
                                  (0, r.jsx)(
                                    h.OK,
                                    {
                                      className: G().tab,
                                      title: V[e],
                                      value: t,
                                    },
                                    e,
                                  ),
                                ),
                              }),
                              c === l.ABOUT && B,
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
              b.checkExperiment(v.pe.WebNextPodcastPage, "on") &&
              c === l.ABOUT &&
              p.lastEpisodes.length > 0,
            F = (0, o.useMemo)(
              () => ({
                Header: () => M,
                Footer: () =>
                  (0, r.jsxs)("div", {
                    className: I().footerContainer,
                    children: [
                      U && (0, r.jsx)(k.QG, { className: G().lastEpisodes }),
                      (0, r.jsx)(h.$_, { className: I().footer }),
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
                  (null == e ? void 0 : e.type) === C.Vc.TRACK &&
                    (null == e ? void 0 : e.loadingState) === v.Gu.IDLE &&
                    t.push(e.id);
                }
                t.length && p.getTracks({ trackIds: t });
              },
              [p],
            ),
            H = b.checkExperiment(v.pe.WebNextAlbumDisableTracks, "on"),
            q = H || (L && c === l.ABOUT) ? 0 : p.items.length || 10,
            z = (0, o.useMemo)(() => {
              var e;
              return L && c === l.TRACKS
                ? {
                    listAriaLabel: D(
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
              D,
              L,
            ]);
          return (0, r.jsx)(h.Wv, {
            className: (0, _.W)(I().root, I().important),
            listClassName: (0, _.W)(I().content, G().content),
            context: z,
            customComponents: F,
            totalCount: q,
            itemContentCallback: (e) => {
              var t;
              let a =
                null == p
                  ? void 0
                  : null === (t = p.items) || void 0 === t
                    ? void 0
                    : t[e];
              if (!a || !p.meta || p.isRejected)
                return (0, r.jsx)(h.DX, {
                  isActive: !0,
                  className: I().shimmerItem,
                  variant: v.Lx.ALBUM,
                });
              if (!(null == a ? void 0 : a.data))
                switch (null == a ? void 0 : a.type) {
                  case x.lf.TEXT:
                    return (0, r.jsx)(h.AH, { className: I().shimmerItem });
                  case C.Vc.TRACK:
                    return (0, r.jsx)(h.DX, {
                      isActive: !0,
                      className: I().shimmerItem,
                      variant: v.Lx.ALBUM,
                    });
                  default:
                    return (0, r.jsx)(h.DX, {
                      isActive: !0,
                      className: G().shimmerItem,
                      variant: v.Lx.PLAYLIST,
                    });
                }
              return (null == a ? void 0 : a.type) === x.lf.TEXT
                ? (0, r.jsx)("div", {
                    className: (0, _.W)(I().shimmerItem, I().textItem),
                    children: (0, r.jsx)(f.Caption, {
                      variant: "span",
                      type: "entity",
                      size: "m",
                      className: I().text,
                      children: (0, r.jsx)(S.Z, {
                        id: "entity-names.season-number",
                        values: { number: a.data },
                      }),
                    }),
                  })
                : a.data
                  ? (0, r.jsx)(N.N6, {
                      track: a.data,
                      playContextParams: {
                        contextData: {
                          type: y.Ak.Album,
                          meta: p.contextMeta,
                          from: s,
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
            initialItemCount: q,
            handleRef: i,
            withHeader: !0,
          });
        }),
        V = (0, s.Pi)((e) => {
          var t, a, i, l;
          let { albumId: s } = e,
            _ = (0, o.useRef)(0),
            [S, b] = (0, g.zU)(),
            { notify: y } = (0, v.d$)(),
            { album: C, disclaimer: f } = (0, v.oR)(),
            { formatMessage: E } = (0, d.Z)(),
            { ref: N, offsetY: x } = (0, u.e)(),
            P = (0, o.useMemo)(() => {
              var e;
              return (0, v.XG)(
                null === (e = C.meta) || void 0 === e ? void 0 : e.averageColor,
              );
            }, [
              null === (t = C.meta) || void 0 === t ? void 0 : t.averageColor,
            ]),
            [A, k] = (0, g.at)(P, x),
            { href: T } = (0, v.zB)(
              "/album/".concat(C.deprecationTargetAlbumId),
            ),
            j = (0, m.jV)({ album: C.meta, shouldHistoryBack: !0 });
          (0, o.useEffect)(() => {
            var e;
            (null === (e = C.meta) || void 0 === e
              ? void 0
              : e.isUnsafeLegal) && j();
          }, [
            null === (a = C.meta) || void 0 === a ? void 0 : a.isUnsafeLegal,
            j,
          ]),
            (0, o.useEffect)(
              () => () => {
                C.reset();
              },
              [C, s],
            ),
            s &&
              C.loadingState === v.Gu.IDLE &&
              (0, o.use)(C.getData({ albumId: Number(s), resumeStream: !1 })),
            C.deprecationTargetAlbumId && (0, n.redirect)(T);
          let G = (0, o.useMemo)(
            () => () => {
              if (
                !C.isNotFound &&
                (C.isRejected || (!C.meta && !C.isLoading))
              ) {
                var e;
                if (!_ || _.current > 0) return;
                let t = (
                  null === (e = C.meta) || void 0 === e ? void 0 : e.isPodcast
                )
                  ? E({ id: "podcast-errors.error-during-loading-podcast" })
                  : E({ id: "album-errors.error-during-loading-album" });
                y((0, r.jsx)(h.Q, { error: t }), { containerId: v.W$.ERROR }),
                  _.current++;
              }
            },
            [C.isRejected, C.isNotFound, C.meta, C.isLoading, y, E],
          );
          G(),
            (0, v.NO)(C.loadingState === v.Gu.RESOLVE),
            C.isNotFound && (0, n.notFound)();
          let R = (0, o.useMemo)(() => {
            var e;
            return (
              null === (e = C.meta) || void 0 === e ? void 0 : e.isPodcast
            )
              ? (0, r.jsx)(D, { podcastHeaderRef: N, refCallback: b })
              : (0, r.jsx)(L, { albumHeaderRef: N, refCallback: b });
          }, [
            null === (i = C.meta) || void 0 === i ? void 0 : i.isPodcast,
            N,
            b,
          ]);
          return (
            null === (l = C.meta) || void 0 === l ? void 0 : l.isLegalRejected
          )
            ? f.isRejected
              ? (0, r.jsx)(c.D, {})
              : (0, r.jsx)(p.em, { disclaimer: f })
            : (0, r.jsx)(v.Lh, {
                pageId: v.Rh.ALBUM,
                children: (0, r.jsxs)(g.I7, {
                  scrollElement: S,
                  children: [
                    (0, r.jsx)(h.h4, { style: k }),
                    (0, r.jsx)("div", {
                      className: I().averageColorBackground,
                      style: A,
                    }),
                    R,
                  ],
                }),
              });
        });
    },
    12708: function (e, t, a) {
      "use strict";
      a.d(t, {
        pr: function () {
          return s.ArtistAlbumsPage;
        },
        MX: function () {
          return o.M;
        },
        aG: function () {
          return n.ArtistConcertsPage;
        },
        vQ: function () {
          return j.ArtistFamiliarPage;
        },
        xA: function () {
          return i.ArtistPage;
        },
        Od: function () {
          return T;
        },
        x3: function () {
          return r.ArtistSimilarPage;
        },
        hD: function () {
          return l.ArtistTracksPage;
        },
      });
      var i = a(91399),
        l = a(66016),
        r = a(41591),
        s = a(4144),
        n = a(66649),
        o = a(85564);
      a(64285);
      var d = a(96555),
        u = a(96431),
        c = a(34603),
        m = a(96911),
        g = a(81546),
        p = a(20210),
        v = a(95539),
        h = a(81446),
        _ = a(55238),
        S = a(5674);
      let b = (e, t) =>
        (0, d.pj)({
          artist: (0, h.d)(e),
          lastMonthListeners: null == t ? void 0 : t.lastMonthListeners,
        });
      var y = a(96169),
        C = a(65704);
      let f = d.V5.model("ArtistAlbumsPage", {
          loadingState: d.V5.enumeration(Object.values(S.Gu)),
          pager: d.V5.maybeNull(C.Vn),
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
                let { artistId: a, page: i = 0, pageSize: l = 20, sort: r } = t,
                  { artistsResource: s, modelActionsLogger: n } = (0, d.dU)(e);
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
                      pageSize: l,
                      sort: { sortBy: null == r ? void 0 : r.sortBy },
                    };
                    switch (e.variant) {
                      case o.M.COMPILATIONS:
                        t = yield s.getAlsoAlbums(n);
                        break;
                      case o.M.DISCOGRAPHY:
                        t = yield s.getDiscographyAlbums(n);
                        break;
                      default:
                        t = yield s.getDirectAlbums(n);
                    }
                    let u = { page: i, perPage: l, total: t.pager.total };
                    0 === e.items.length &&
                      (e.items = (0, d.pj)(
                        Array.from({ length: u.total }, () => null),
                      ));
                    let m = t.albums.map(y.N);
                    (0, S.AG)({
                      items: e.items,
                      mappedRawItems: m,
                      page: i,
                      pageSize: l,
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
                  { artistsResource: i, modelActionsLogger: l } = (0, d.dU)(e);
                if (e.loadingState !== S.Gu.PENDING)
                  try {
                    e.loadingState = S.Gu.PENDING;
                    let { concerts: t } = yield i.getConcerts({ artistId: a });
                    (e.concerts = (0, d.pj)(t.map(_.zj))),
                      (e.loadingState = S.Gu.RESOLVE);
                  } catch (t) {
                    l.error(t),
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
        N = (e) =>
          (0, d.pj)({
            ...(0, m.cO)({ album: e, artists: e.artists }),
            version: e.version,
          }),
        x = d.V5.model("ArtistFamiliarPage", {
          loadingState: d.V5.enumeration(Object.values(S.Gu)),
          errorStatusCode: d.V5.maybeNull(d.V5.number),
          vibeTracks: d.V5.maybeNull(d.V5.array(v.le)),
          collectionTracks: d.V5.maybeNull(d.V5.array(v.le)),
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
              var i, l;
              if (this.isLoading) return !0;
              return (
                Number(
                  null === (i = e.collectionTracks) || void 0 === i
                    ? void 0
                    : i.length,
                ) > 0 &&
                Number(
                  null === (l = e.collectionAlbums) || void 0 === l
                    ? void 0
                    : l.length,
                ) > 0
              );
            },
            get hasVibeTracks() {
              var r;
              return (
                Number(
                  null === (r = e.vibeTracks) || void 0 === r
                    ? void 0
                    : r.length,
                ) > 0
              );
            },
            get collectionEntitiesData() {
              var s, n;
              return null !==
                (n =
                  null === (s = e.collectionTracks) || void 0 === s
                    ? void 0
                    : s.map(v.E5)) && void 0 !== n
                ? n
                : [];
            },
            get vibeEntitiesData() {
              var o, d;
              return null !==
                (d =
                  null === (o = e.vibeTracks) || void 0 === o
                    ? void 0
                    : o.map(v.E5)) && void 0 !== d
                ? d
                : [];
            },
          }))
          .actions((e) => {
            let t = {
              getData: (0, d.ls)(function* (t) {
                let { artistId: a } = t,
                  { artistsResource: i, modelActionsLogger: l } = (0, d.dU)(e);
                if (e.loadingState !== S.Gu.PENDING)
                  try {
                    var r, s, n, o, c, m;
                    e.loadingState = S.Gu.PENDING;
                    let t = yield i.getFamiliarYou({
                      artistId: a,
                      waveTracksLimit: 100,
                      collectionTracksLimit: 100,
                      collectionAlbumsLimit: 20,
                    });
                    (e.vibeTracks = (0, d.pj)(
                      null === (s = t.wave) || void 0 === s
                        ? void 0
                        : null === (r = s.tracks) || void 0 === r
                          ? void 0
                          : r.map((e) => (0, v.Vt)(e)),
                    )),
                      (e.collectionTracks = (0, d.pj)(
                        null === (o = t.collection) || void 0 === o
                          ? void 0
                          : null === (n = o.tracks) || void 0 === n
                            ? void 0
                            : n.map((e) => (0, v.Vt)(e)),
                      )),
                      (e.collectionAlbums = (0, d.pj)(
                        null === (m = t.collection) || void 0 === m
                          ? void 0
                          : null === (c = m.albums) || void 0 === c
                            ? void 0
                            : c.map(N),
                      )),
                      (e.loadingState = S.Gu.RESOLVE);
                  } catch (t) {
                    l.error(t),
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
          }),
        P = d.V5.model("ArtistSimilarArtistsPage", {
          loadingState: d.V5.enumeration(Object.values(S.Gu)),
          errorStatusCode: d.V5.maybeNull(d.V5.number),
          similarArtists: d.V5.maybeNull(d.V5.array(h.Go)),
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
                  (null === (t = e.similarArtists) || void 0 === t
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
                  { artistsResource: i, modelActionsLogger: l } = (0, d.dU)(e);
                try {
                  e.loadingState = S.Gu.PENDING;
                  let t = yield i.getSimilarArtists({ artistId: a });
                  (e.similarArtists = (0, d.pj)(t.similarArtists.map(h.d))),
                    e.loadingState !== S.Gu.IDLE &&
                      (e.loadingState = S.Gu.RESOLVE);
                } catch (t) {
                  l.error(t),
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
                  (e.similarArtists = (0, d.pj)([]));
              },
            };
            return t;
          });
      var I = a(63514);
      let L = d.V5.model("FamiliarInfo", {
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
                ? "/artist/".concat(e, "/familiar?tab=").concat(I.g.COLLECTION)
                : this.hasVibeEntities
                  ? "/artist/".concat(e, "/familiar?tab=").concat(I.g.VIBE)
                  : "/artist/".concat(e, "/familiar")
              : "";
          },
        }))
        .actions((e) => {
          let t = {
            getData: (0, d.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: i, modelActionsLogger: l } = (0, d.dU)(e);
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
                  l.error(t),
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
      var A = a(82436);
      let k = d.V5.model("FullTracksList", {
          loadingState: d.V5.enumeration(Object.values(S.Gu)),
          errorStatusCode: d.V5.maybeNull(d.V5.number),
          ids: d.V5.maybeNull(d.V5.array(d.V5.string)),
          tracks: d.V5.optional(d.V5.map(v.le), {}),
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
                  { artistsResource: i, modelActionsLogger: l } = (0, d.dU)(e);
                try {
                  e.loadingState = S.Gu.PENDING;
                  let t = yield i.getArtistTrackIds({ artistId: a }),
                    { sonataState: l } = (0, d.yj)(e);
                  l.setUnloadedEntitiesData(t.map((e) => (0, A.RN)(e))),
                    (e.ids = (0, d.pj)(t)),
                    e.loadingState !== S.Gu.IDLE &&
                      (e.loadingState = S.Gu.RESOLVE);
                } catch (t) {
                  l.error(t),
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
                  { tracksResource: i, modelActionsLogger: l } = (0, d.dU)(e);
                try {
                  let t = yield i.getTracksMeta({
                    trackIds: a,
                    withProgress: !0,
                  });
                  e.tracks.merge(
                    t.reduce((e, t) => ((e[t.id] = (0, v.Vt)(t)), e), {}),
                  );
                } catch (e) {
                  l.error(e);
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
        T = d.V5.model("ArtistPage", {
          loadingState: d.V5.enumeration(Object.values(S.Gu)),
          meta: d.V5.maybeNull(g.o9),
          popularTracks: d.V5.array(v.le),
          lastRelease: d.V5.maybeNull(m.ug),
          upcomingAlbum: d.V5.maybeNull(m.W9),
          concerts: d.V5.maybeNull(d.V5.array(_.Z)),
          similarArtists: d.V5.array(h.Go),
          playlists: d.V5.array(p.d2),
          errorStatusCode: d.V5.maybeNull(d.V5.number),
          deprecationTargetArtistId: d.V5.maybeNull(d.V5.number),
          albums: d.V5.array(m.ug),
          discography: d.V5.array(m.ug),
          compilations: d.V5.array(m.ug),
          familiarInfo: L,
          albumsSubpage: f,
          fullTracksListSubpage: k,
          concertsSubpage: E,
          similarArtistsSubPage: P,
          familiarSubpage: x,
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
                  { slides: i, experiments: l, disclaimer: r } = (0, d.yj)(e),
                  { artistsResource: s, modelActionsLogger: n } = (0, d.dU)(e),
                  o = l.checkExperiment(
                    S.pe.WebNextArtistDisableLastReleases,
                    "on",
                  ),
                  g = l.checkExperiment(
                    S.pe.WebNextArtistDisablePopularTracks,
                    "on",
                  ),
                  y = l.checkExperiment(
                    S.pe.WebNextArtistDisableSimilarArtists,
                    "on",
                  ),
                  C = l.checkExperiment(
                    S.pe.WebNextArtistDisablePopularAlbums,
                    "on",
                  ),
                  f = l.checkExperiment(
                    S.pe.WebNextArtistDisableDiscography,
                    "on",
                  ),
                  E = l.checkExperiment(
                    S.pe.WebNextArtistDisableCompilations,
                    "on",
                  ),
                  N = l.checkExperiment(
                    S.pe.WebNextArtistDisablePlaylists,
                    "on",
                  ),
                  x = l.checkExperiment(S.pe.WebNextLegalRejectArtist, "on");
                if (e.loadingState !== S.Gu.PENDING)
                  try {
                    var P, I;
                    e.loadingState = S.Gu.PENDING;
                    let {
                      popularTracks: t,
                      error: l,
                      artist: n,
                      stats: L,
                      albums: A,
                      playlists: k,
                      alsoAlbums: T,
                      similarArtists: j,
                      lastReleases: G,
                      concerts: R,
                      upcomingAlbum: D,
                      discography: V,
                    } = yield s.getBriefInfo({
                      artistId: a,
                      popularTracksCount: 5,
                      fetchPlaylistLikesCounts: !0,
                      discographyBlockEnabled: !0,
                    });
                    if (
                      "not-found" === l ||
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
                        x &&
                        (yield r.getArtistDisclaimer({ artistId: a })),
                      !o && G && G.length > 0)
                    ) {
                      let t = G[0];
                      t &&
                        A &&
                        A.length > 1 &&
                        (e.lastRelease = (0, d.pj)((0, m.ym)(t)));
                    }
                    D && (e.upcomingAlbum = (0, d.pj)((0, m.wq)(D))),
                      R && (e.concerts = (0, d.pj)(R.map(_.zj))),
                      !g &&
                        t &&
                        t.length > 0 &&
                        (e.popularTracks = (0, d.pj)(
                          t.slice(0, 5).map((e) => (0, v.Vt)(e)),
                        )),
                      !y &&
                        j &&
                        j.length > 0 &&
                        (e.similarArtists = (0, d.pj)(j.slice(0, 9).map(h.d))),
                      !C &&
                        Number(null == A ? void 0 : A.length) > 0 &&
                        (e.albums = (0, d.pj)(
                          null == A ? void 0 : A.map(m.ym),
                        )),
                      !f &&
                        Number(null == V ? void 0 : V.length) > 0 &&
                        (e.discography = (0, d.pj)(
                          null == V ? void 0 : V.map(m.ym).slice(0, 9),
                        )),
                      !E &&
                        Number(null == T ? void 0 : T.length) > 0 &&
                        (e.compilations = (0, d.pj)(
                          null == T ? void 0 : T.map(m.ym).slice(0, 9),
                        )),
                      !N &&
                        k &&
                        k.length > 0 &&
                        (e.playlists = (0, d.pj)(k.map(p.Q9).slice(0, 9))),
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
      var j = a(45304);
    },
    85564: function (e, t, a) {
      "use strict";
      var i, l;
      a.d(t, {
        M: function () {
          return i;
        },
      }),
        ((l = i || (i = {})).DISCOGRAPHY = "discography"),
        (l.ALBUMS = "albums"),
        (l.COMPILATIONS = "compilations");
    },
    63514: function (e, t, a) {
      "use strict";
      var i, l;
      a.d(t, {
        g: function () {
          return i;
        },
      }),
        ((l = i || (i = {})).COLLECTION = "collection"),
        (l.VIBE = "vibe");
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
        l = a(35338),
        r = a(33423),
        s = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(1918),
        u = a(70579),
        c = a(96911),
        m = a(81546),
        g = a(13236),
        p = a(7042),
        v = a(5674),
        h = a(44285),
        _ = a(85564),
        S = a(28674),
        b = a.n(S);
      let y = (0, r.Pi)((e) => {
        var t, a, r, S, y, C;
        let { artistId: f, variant: E } = e,
          { artist: N, disclaimer: x } = (0, v.oR)(),
          { formatMessage: P } = (0, o.Z)(),
          [I, L] = (0, g.zU)(),
          A = (0, v.k6)();
        if (f && N.albumsSubpage.loadingState === v.Gu.IDLE) {
          N.albumsSubpage.setVariant(E);
          let e = Promise.allSettled([
            N.getData({ artistId: f }),
            N.albumsSubpage.getData({
              artistId: f,
              page: 0,
              pageSize: 20,
              sort: { sortBy: "year" },
            }),
          ]);
          (0, n.use)(e);
        }
        let k = (0, n.useCallback)(
            (e) => {
              f &&
                N.albumsSubpage.getData({
                  artistId: f,
                  page: e,
                  pageSize: 20,
                  sort: { sortBy: "year" },
                });
            },
            [N.albumsSubpage, f],
          ),
          T = (0, m.v2)({
            artist: null === (t = N.meta) || void 0 === t ? void 0 : t.artist,
            shouldHistoryBack: !0,
          });
        (0, n.useEffect)(() => {
          T();
        }, [T]),
          (0, n.useEffect)(
            () => () => {
              N.reset(), N.albumsSubpage.reset();
            },
            [N, N.albumsSubpage],
          ),
          N.albumsSubpage.isNotFound && (0, s.notFound)(),
          (0, v.NO)(N.albumsSubpage.loadingState === v.Gu.RESOLVE);
        let j = (0, n.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(h.$_, { className: b().footer }),
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
          R = (0, n.useMemo)(() => {
            switch (E) {
              case _.M.DISCOGRAPHY:
                return P({ id: "entity-names.artist-studio-albums-list" });
              case _.M.COMPILATIONS:
                return P({ id: "entity-names.artist-compilations-list" });
              default:
                return P({ id: "entity-names.artist-albums-list" });
            }
          }, [P, E]),
          D = (0, n.useMemo)(() => {
            switch (E) {
              case _.M.DISCOGRAPHY:
                return v.Rh.ARTIST_DISCOGRAPHY;
              case _.M.COMPILATIONS:
                return v.Rh.ARTIST_COMPILATIONS;
              default:
                return v.Rh.ARTIST_ALBUMS;
            }
          }, [E]);
        return (
          null === (a = N.meta) || void 0 === a
            ? void 0
            : a.artist.isLegalRejected
        )
          ? x.isRejected
            ? (0, i.jsx)(u.D, {})
            : (0, i.jsx)(p.em, { disclaimer: x })
          : N.albumsSubpage.loadingState !== v.Gu.REJECT ||
              N.albumsSubpage.isNotFound
            ? (0, i.jsx)(v.Lh, {
                pageId: D,
                children: (0, i.jsx)(g.I7, {
                  scrollElement: I,
                  outerTitle: G,
                  children: (0, i.jsxs)("div", {
                    className: b().root,
                    children: [
                      (0, i.jsx)(h.h4, {
                        variant: "text",
                        withForwardControl: !1,
                        withBackwardControl: A.canBack,
                        children: (0, i.jsx)(d.Heading, {
                          variant: "h2",
                          weight: "bold",
                          size: "xl",
                          lineClamp: 1,
                          children: G,
                        }),
                      }),
                      (0, i.jsx)(h.Wv, {
                        className: (0, l.W)(b().scrollContainer, b().important),
                        listClassName: b().content,
                        itemClassName: b().item,
                        customComponents: j,
                        itemContentCallback: (e) => {
                          var t, a;
                          let l =
                              null === (a = N.albumsSubpage) || void 0 === a
                                ? void 0
                                : null === (t = a.items) || void 0 === t
                                  ? void 0
                                  : t[e],
                            r = P(
                              { id: "loading-messages.entity-is-loading" },
                              {
                                entityName: P({ id: "entity-names.playlist" }),
                              },
                            );
                          return l
                            ? (0, i.jsx)(
                                c.rf,
                                { album: l, contentLinesCount: 3 },
                                l.id,
                              )
                            : (0, i.jsx)(h.hi, { "aria-label": r });
                        },
                        totalCount:
                          null !==
                            (y =
                              null === (S = N.albumsSubpage) || void 0 === S
                                ? void 0
                                : null === (r = S.pager) || void 0 === r
                                  ? void 0
                                  : r.total) && void 0 !== y
                            ? y
                            : 0,
                        onGetDataByPage: k,
                        pageSize: 20,
                        totalRequests:
                          null !== (C = N.albumsSubpage.requests) &&
                          void 0 !== C
                            ? C
                            : 0,
                        handleRef: L,
                        context: { listAriaLabel: R },
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
            return N;
          },
        });
      var i = a(8759),
        l = a(33423),
        r = a(11769),
        s = a(99616),
        n = a(65244),
        o = a(2814),
        d = a(42503),
        u = a(71716),
        c = a(1918),
        m = a(70579),
        g = a(81546),
        p = a(13236),
        v = a(55238),
        h = a(7042),
        _ = a(5674),
        S = a(44285),
        b = a(82834);
      let y = (e) => {
          let { artistId: t, viewUuid: a } = e,
            i = (0, _.z$)(),
            { hash: l } = (0, _.RQ)(),
            r = (0, _.wL)();
          return (0, s.useCallback)(() => {
            if (!i || !t) return;
            let e = (0, _.KO)({
              params: { hash: l, artistId: t, viewUuid: a },
              logger: r,
              context: y.name,
            });
            e && (0, b.A7)(i.evgenInstance, e);
          }, [i, t, l, r, a]);
        },
        C = (e) => {
          let { artistId: t, viewUuid: a } = e,
            i = (0, _.z$)(),
            { hash: l } = (0, _.RQ)(),
            r = (0, _.wL)();
          return (0, s.useCallback)(() => {
            if (!i || !t) return;
            let e = (0, _.KO)({
              params: { hash: l, artistId: t, viewUuid: a },
              logger: r,
              context: C.name,
            });
            e && (0, b.is)(i.evgenInstance, e);
          }, [i, t, l, r, a]);
        };
      var f = a(8023),
        E = a.n(f);
      let N = (0, l.Pi)((e) => {
        var t, a;
        let { artistId: l } = e,
          { artist: b, experiments: f, disclaimer: N } = (0, _.oR)(),
          { formatMessage: x } = (0, n.Z)(),
          [P, I] = (0, p.zU)(),
          L = (0, _.k6)(),
          A = (0, s.useRef)(String((0, d.Z)())),
          k = C({ artistId: l, viewUuid: A.current }),
          T = y({ artistId: l, viewUuid: A.current });
        if (
          ((0, s.useEffect)(
            () => (
              k(),
              () => {
                T();
              }
            ),
            [T, k],
          ),
          l && b.concertsSubpage.loadingState === _.Gu.IDLE)
        ) {
          let e = Promise.allSettled([
            b.getData({ artistId: l }),
            b.concertsSubpage.getData({ artistId: l }),
          ]);
          (0, s.use)(e);
        }
        let j = (0, g.v2)({
          artist: null === (t = b.meta) || void 0 === t ? void 0 : t.artist,
          shouldHistoryBack: !0,
        });
        (0, s.useEffect)(() => {
          j();
        }, [j]),
          (0, s.useEffect)(
            () => () => {
              b.reset(), b.concertsSubpage.reset();
            },
            [b],
          ),
          (0, _.NO)(b.concertsSubpage.loadingState === _.Gu.RESOLVE),
          (b.concertsSubpage.isNotFound ||
            !f.checkExperiment(_.pe.WebNewConcertsList, "on")) &&
            (0, r.notFound)();
        let G = (0, s.useMemo)(() => {
          if (b.concertsSubpage.isLoading) return (0, S.M4)(10);
          if (l) {
            var e;
            return null === (e = b.concertsSubpage.concerts) || void 0 === e
              ? void 0
              : e.map((e, t) =>
                  (0, i.jsx)(
                    _.nZ,
                    {
                      objectId: String(e.id),
                      objectPos: t + 1,
                      children: (0, i.jsx)(v.kb, {
                        artistId: l,
                        concert: e,
                        viewUuid: A.current,
                      }),
                    },
                    e.id,
                  ),
                );
          }
        }, [b.concertsSubpage.concerts, b.concertsSubpage.isLoading, l, A]);
        return (
          null === (a = b.meta) || void 0 === a
            ? void 0
            : a.artist.isLegalRejected
        )
          ? N.isRejected
            ? (0, i.jsx)(m.D, {})
            : (0, i.jsx)(h.em, { disclaimer: N })
          : (0, i.jsx)(_.Lh, {
              pageId: _.Rh.ARTIST_CONCERTS,
              children: (0, i.jsx)(_.e4, {
                children: (0, i.jsxs)(p.I7, {
                  scrollElement: P,
                  outerTitle: x({ id: "entity-names.concerts" }),
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
        l,
        r = a(8759),
        s = a(33423),
        n = a(11769),
        o = a(99616),
        d = a(26265),
        u = a(70579),
        c = a(81546),
        m = a(13236),
        g = a(7042),
        p = a(5674),
        v = a(63514);
      ((i = l || (l = {}))[(i.COLLECTION = 0)] = "COLLECTION"),
        (i[(i.VIBE = 1)] = "VIBE");
      var h = a(50871),
        _ = a.n(h),
        S = a(35338),
        b = a(65244),
        y = a(57413),
        C = a(71716),
        f = a(12670),
        E = a(96911),
        N = a(95539),
        x = a(44285),
        P = a(2814),
        I = a(1918),
        L = a(42769);
      let A = (e) => {
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
      var k = a(81920),
        T = a.n(k);
      let j = () =>
          (0, r.jsxs)("div", {
            className: T().tabsShimmer,
            children: [
              (0, r.jsx)(f.Shimmer, { className: T().tabShimmer }),
              (0, r.jsx)(f.Shimmer, { className: T().tabShimmer }),
            ],
          }),
        G = (0, s.Pi)((e) => {
          let { tabsState: t, tabElementId: a } = e,
            { artist: i } = (0, p.oR)(),
            { formatMessage: s } = (0, b.Z)(),
            n = (0, p.k6)(),
            { isScrolling: d } = (0, o.useContext)(x.pI),
            u = A(t);
          return (0, r.jsxs)("header", {
            className: T().root,
            "aria-hidden": d,
            children: [
              (0, r.jsxs)("div", {
                className: T().container,
                children: [
                  n.canBack &&
                    (0, r.jsx)(L.n, {
                      withForwardControl: !1,
                      withBackwardControl: n.canBack,
                    }),
                  (0, r.jsx)(I.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    className: T().title,
                    children: (0, r.jsx)(P.Z, { id: "page.familiar-you" }),
                  }),
                ],
              }),
              (0, r.jsxs)(x.no, {
                isShimmerVisible: i.familiarSubpage.isLoading,
                shimmer: (0, r.jsx)(j, {}),
                className: T().tabs,
                elementId: a,
                onTabChange: u,
                ...t,
                children: [
                  (0, r.jsx)(x.OK, {
                    className: T().tab,
                    value: l.COLLECTION,
                    title: s({ id: "page.familiar-collection" }),
                    "aria-hidden": d,
                    tabIndex: d ? -1 : 0,
                  }),
                  (0, r.jsx)(x.OK, {
                    className: T().tab,
                    value: l.VIBE,
                    title: s({ id: "page.familiar-vibe" }),
                    "aria-hidden": d,
                    tabIndex: d ? -1 : 0,
                  }),
                ],
              }),
            ],
          });
        });
      var R = a(67807),
        D = a.n(R);
      let V = (0, s.Pi)((e) => {
          var t;
          let { forwardRef: a, tabsState: i, tabElementId: s, artistId: n } = e,
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
            v = (0, o.useMemo)(() => {
              var e;
              return (0, r.jsx)(x.RS, {
                isShimmerVisible: u.familiarSubpage.isLoading,
                isShimmerActive: !0,
                variant: p.Lx.PLAYLIST,
                shimmersCount: 10,
                className: (0, S.W)(D().block, D().tracksBlock),
                children:
                  null === (e = u.familiarSubpage.collectionTracks) ||
                  void 0 === e
                    ? void 0
                    : e.map((e, t) =>
                        (0, r.jsx)(
                          N.O2,
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
            h = (0, o.useMemo)(
              () =>
                u.familiarSubpage.shouldShowTitleBlocks
                  ? u.familiarSubpage.isLoading
                    ? (0, r.jsx)("div", {
                        className: (0, S.W)(D().block, D().blockHeader),
                        children: (0, r.jsx)(f.Shimmer, {
                          isActive: u.familiarSubpage.isLoading,
                          className: D().shimmerTitle,
                          radius: "l",
                        }),
                      })
                    : (0, r.jsx)(x.ti, {
                        className: (0, S.W)(D().block, D().blockHeader),
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
          return (0, r.jsxs)(C.t, {
            className: D().root,
            containerClassName: (0, S.W)(D().scrollContainer, D().important),
            ref: a,
            children: [
              (0, r.jsx)(G, { tabsState: i, tabElementId: s }),
              (0, r.jsxs)(d.TabPanel, {
                value: i.value,
                name: l.COLLECTION,
                elementId: s,
                className: D().content,
                children: [
                  (0, r.jsxs)("section", { children: [h, v] }),
                  (0, r.jsx)(x.HY, {
                    isShimmerVisible: u.familiarSubpage.isLoading,
                    isShimmerActive: !0,
                    headerClassName: D().blockHeader,
                    containerClassName: D().block,
                    title: _,
                    showHeaderShimmer: u.familiarSubpage.shouldShowTitleBlocks,
                    children:
                      null === (t = u.familiarSubpage.collectionAlbums) ||
                      void 0 === t
                        ? void 0
                        : t.map((e) =>
                            (0, r.jsx)(
                              E.rf,
                              { album: e, contentLinesCount: 3 },
                              e.id,
                            ),
                          ),
                  }),
                ],
              }),
              (0, r.jsx)(x.$_, { className: D().footer }),
            ],
          });
        }),
        O = (0, s.Pi)((e) => {
          let { forwardRef: t, tabsState: a, tabElementId: i, artistId: s } = e,
            { artist: n } = (0, p.oR)(),
            u = (0, p.x5)(),
            c = (0, o.useCallback)(
              (e, t) => ({
                contextData: {
                  type: y.Ak.Various,
                  meta: { id: String(s) },
                  from: u,
                  overrideAutoflowSeeds: ["artist:".concat(s)],
                  overrideContextType: y.Zc.Artist,
                },
                queueParams: { index: t },
                loadContextMeta: !1,
                entitiesData: n.familiarSubpage.vibeEntitiesData,
              }),
              [n.familiarSubpage.vibeEntitiesData, s, u],
            ),
            m = (0, o.useMemo)(() => {
              var e;
              return (0, r.jsx)(x.RS, {
                isShimmerVisible: n.familiarSubpage.isLoading,
                isShimmerActive: !0,
                variant: p.Lx.PLAYLIST,
                shimmersCount: 10,
                className: (0, S.W)(D().block, D().tracksBlock),
                children:
                  null === (e = n.familiarSubpage.vibeTracks) || void 0 === e
                    ? void 0
                    : e.map((e, t) =>
                        (0, r.jsx)(
                          N.O2,
                          { track: e, playContextParams: c(e, t) },
                          e.id,
                        ),
                      ),
              });
            }, [n.familiarSubpage.isLoading, n.familiarSubpage.vibeTracks, c]);
          return (0, r.jsxs)(C.t, {
            className: D().root,
            containerClassName: (0, S.W)(D().scrollContainer, D().important),
            ref: t,
            children: [
              (0, r.jsx)(G, { tabsState: a, tabElementId: i }),
              (0, r.jsx)(d.TabPanel, {
                value: a.value,
                name: l.VIBE,
                elementId: i,
                className: D().content,
                children: m,
              }),
              (0, r.jsx)(x.$_, { className: D().footer }),
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
                case l.COLLECTION:
                  return (0, r.jsx)(P.Z, {
                    id: "error-messages.empty-artist-familiar-collection-title",
                  });
                case l.VIBE:
                  return (0, r.jsx)(P.Z, {
                    id: "error-messages.empty-artist-familiar-vibe-title",
                  });
              }
            }, [t.value]);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(G, { tabsState: t, tabElementId: a }),
              (0, r.jsxs)("div", {
                className: M().root,
                children: [
                  (0, r.jsx)(w.J, {
                    className: M().icon,
                    variant: "attention",
                  }),
                  (0, r.jsx)(I.Heading, {
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
        F = (0, s.Pi)((e) => {
          let { tabsState: t, tabElementId: a } = e,
            { artist: i } = (0, p.oR)(),
            { formatMessage: s } = (0, b.Z)(),
            { isScrolling: n } = (0, o.useContext)(x.pI),
            d = (0, p.k6)(),
            u = A(t);
          return (0, r.jsx)(x.h4, {
            variant: "composite",
            staticClassName: (0, S.W)(T().staticHeader, T().important),
            "aria-hidden": !n,
            stickyClassName: (0, S.W)(T().stickyHeader, T().important),
            stickyChild: (0, r.jsxs)("div", {
              className: T().container,
              children: [
                d.canBack &&
                  (0, r.jsx)(L.n, {
                    withForwardControl: !1,
                    withBackwardControl: d.canBack,
                    buttonSize: "xs",
                  }),
                (0, r.jsxs)(x.no, {
                  isShimmerVisible: i.familiarSubpage.isLoading,
                  shimmer: (0, r.jsx)(j, {}),
                  className: T().tabs,
                  elementId: a,
                  onTabChange: u,
                  ...t,
                  children: [
                    (0, r.jsx)(x.OK, {
                      className: T().tab,
                      value: l.COLLECTION,
                      title: s({ id: "page.familiar-collection" }),
                      "aria-hidden": !n,
                      tabIndex: n ? 0 : -1,
                    }),
                    (0, r.jsx)(x.OK, {
                      className: T().tab,
                      value: l.VIBE,
                      title: s({ id: "page.familiar-vibe" }),
                      "aria-hidden": !n,
                      tabIndex: n ? 0 : -1,
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        W = (0, s.Pi)((e) => {
          var t, a;
          let { artistId: i } = e,
            s = (0, n.useSearchParams)(),
            { artist: h, experiments: S, disclaimer: b } = (0, p.oR)(),
            [y, C] = (0, m.zU)(),
            f = (0, o.useId)(),
            E = (0, o.useMemo)(() => {
              let e = s.get(p.wx.TAB);
              switch (e) {
                case v.g.COLLECTION:
                  break;
                case v.g.VIBE:
                  return l.VIBE;
              }
              return l.COLLECTION;
            }, [s]),
            N = (0, d.useTabsState)(E);
          i &&
            h.familiarSubpage.loadingState === p.Gu.IDLE &&
            (0, o.use)(h.familiarSubpage.getData({ artistId: i }));
          let x = (0, c.v2)({
            artist: null === (t = h.meta) || void 0 === t ? void 0 : t.artist,
            shouldHistoryBack: !0,
          });
          (0, o.useEffect)(() => {
            x();
          }, [x]),
            (0, o.useEffect)(
              () => () => {
                h.familiarSubpage.reset();
              },
              [h],
            ),
            (0, p.NO)(h.familiarSubpage.loadingState === p.Gu.RESOLVE),
            (h.familiarSubpage.isNotFound ||
              !S.checkExperiment(p.pe.WebNextFamiliarYou, "on")) &&
              (0, n.notFound)();
          let P = (0, o.useMemo)(() => {
            switch (N.value) {
              case l.COLLECTION:
                if (
                  h.familiarSubpage.isLoaded &&
                  !h.familiarSubpage.hasCollectionEntities
                )
                  return (0, r.jsx)(U, { tabsState: N, tabElementId: f });
                return (0, r.jsx)(V, {
                  tabsState: N,
                  forwardRef: C,
                  tabElementId: f,
                  artistId: i,
                });
              case l.VIBE:
                if (
                  h.familiarSubpage.isLoaded &&
                  !h.familiarSubpage.hasVibeTracks
                )
                  return (0, r.jsx)(U, { tabsState: N, tabElementId: f });
                return (0, r.jsx)(O, {
                  tabsState: N,
                  forwardRef: C,
                  tabElementId: f,
                  artistId: i,
                });
            }
          }, [
            h.familiarSubpage.hasCollectionEntities,
            h.familiarSubpage.hasVibeTracks,
            h.familiarSubpage.isLoaded,
            i,
            C,
            f,
            N,
          ]);
          return h.familiarSubpage.isRejected && !h.familiarSubpage.isNotFound
            ? (0, r.jsx)(u.D, {})
            : (
                  null === (a = h.meta) || void 0 === a
                    ? void 0
                    : a.artist.isLegalRejected
                )
              ? b.isRejected
                ? (0, r.jsx)(u.D, {})
                : (0, r.jsx)(g.em, { disclaimer: b })
              : (0, r.jsx)(p.Lh, {
                  pageId: p.Rh.FAMILIAR_YOU,
                  children: (0, r.jsx)(m.I7, {
                    scrollElement: y,
                    headerThreshold: 148,
                    children: (0, r.jsxs)("div", {
                      className: _().root,
                      children: [
                        (0, r.jsx)(F, { tabElementId: f, tabsState: N }),
                        (0, r.jsx)(p.J, {
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
        l = a(33423),
        r = a(99616),
        s = a(2365),
        n = a(5674);
      let o = (0, l.Pi)(() => {
        let { artist: e } = (0, n.oR)();
        return (
          (0, r.useEffect)(
            () => () => {
              e.reset();
            },
            [e],
          ),
          (0, i.jsx)(s.T, {})
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
        l,
        r = a(8759),
        s = a(35338),
        n = a(33423),
        o = a(11769),
        d = a(99616),
        u = a(65244),
        c = a(82834),
        m = a(454),
        g = a(57413),
        p = a(27287),
        v = a(71716),
        h = a(12670),
        _ = a(48157),
        S = a(70579),
        b = a(96911),
        y = a(81546),
        C = a(13236),
        f = a(20210),
        E = a(95539),
        N = a(55238),
        x = a(7042),
        P = a(3515),
        I = a(5674),
        L = a(44285);
      let A = (e) => {
        let { blockId: t, scrollRef: a, headerRef: i } = e,
          l = document.getElementById(t);
        if (l && a) {
          var r;
          let e = l.getBoundingClientRect().top,
            t = (
              null === (r = i.current) || void 0 === r ? void 0 : r.offsetHeight
            )
              ? e - i.current.offsetHeight
              : e;
          a.scrollTo({ top: t - 10, behavior: "smooth" });
        }
      };
      ((i = l || (l = {})).UPCOMING_RELEASE = "upcoming_release"),
        (i.TRACKS = "tracks"),
        (i.FAMILIAR = "familiar"),
        (i.CONCERTS = "concerts");
      var k = a(41550),
        T = a.n(k);
      let j = (e) => {
          let {
              withReleaseBlock: t,
              children: a,
              isLoading: i,
              viewAllActionLink: l,
              ...n
            } = e,
            { formatMessage: o } = (0, u.Z)();
          return (0, r.jsxs)("div", {
            className: (0, s.W)(T().popularTracksBlock, {
              [T().popularTracksBlock_withReleaseBlock]: t,
            }),
            ...n,
            ...(0, m.BA)(m.Br.artist.POPULAR_TRACKS),
            children: [
              (0, r.jsx)(L.ti, {
                className: T().popularTracksBlockHeader,
                title: o({ id: "entity-names.popular-tracks" }),
                viewAllActionLink: l,
              }),
              (0, r.jsx)(L.RS, {
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
          var t, a, i, n, k, G, R, D, V, O;
          let { artistId: w } = e,
            B = (0, I.x5)({ pageId: I.Rh.ARTIST, blockId: I.aU.ARTIST }),
            { notify: M } = (0, I.d$)(),
            { artist: U, experiments: F, disclaimer: W } = (0, I.oR)(),
            { formatMessage: H } = (0, u.Z)(),
            q = (0, d.useRef)(0),
            { href: z } = (0, I.zB)(
              "/artist/".concat(U.deprecationTargetArtistId),
            ),
            { ref: Z, offsetY: K } = (0, p.e)(),
            [J, Y] = (0, C.zU)(),
            Q = (0, d.useRef)(null),
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
            [$, ee] = (0, C.at)(X, K),
            et = (0, o.useSearchParams)();
          (0, d.useEffect)(() => {
            let e = et.get(I.wx.BLOCK);
            e &&
              U.isLoaded &&
              U.familiarInfo.isLoaded &&
              A({ blockId: e, scrollRef: J, headerRef: Q });
          }, [U.isLoaded, U.familiarInfo.isLoaded, J, et]);
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
                U.reset(), U.familiarInfo.reset(), (q.current = 0);
              },
              [U, w],
            ),
            U.deprecationTargetArtistId && (0, o.redirect)(z);
          let ei = (0, d.useMemo)(
            () => () => {
              (U.isRejected || (!U.meta && !U.isLoading)) &&
                q &&
                !(q.current > 0) &&
                (M(
                  (0, r.jsx)(L.Q, {
                    error: H({
                      id: "artist-errors.error-during-loading-artist",
                    }),
                  }),
                  { containerId: I.W$.ERROR },
                ),
                q.current++);
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
            return (0, r.jsx)(S.D, {});
          let el = (e) => ({
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
            er = (0, d.useMemo)(
              () =>
                U.isLoading || !U.meta
                  ? (0, r.jsx)(_.KC, {
                      className: T().header,
                      coverRadius: "round",
                    })
                  : (0, r.jsx)(_.f3, {
                      className: T().header,
                      artistMeta: U.meta,
                      ref: Z,
                    }),
              [U.isLoading, U.meta, Z],
            ),
            es = (0, d.useMemo)(
              () =>
                U.isLoading
                  ? (0, r.jsxs)("div", {
                      className: T().releaseBlock,
                      children: [
                        (0, r.jsx)(h.Shimmer, {
                          radius: "l",
                          className: T().releaseBlockHeaderShimmer,
                        }),
                        (0, r.jsx)(L.hi, {
                          className: (0, s.W)(
                            T().releaseBlockCard,
                            T().important,
                          ),
                        }),
                      ],
                    })
                  : U.upcomingAlbum && F.checkExperiment(I.pe.WebPresave, "on")
                    ? (0, r.jsxs)("div", {
                        className: T().releaseBlock,
                        id: l.UPCOMING_RELEASE,
                        children: [
                          (0, r.jsx)(L.ti, {
                            className: T().releaseBlockHeader,
                            title: H({ id: "entity-names.upcoming-album" }),
                          }),
                          (0, r.jsx)(b.vK, {
                            className: (0, s.W)(
                              T().releaseBlockCard,
                              T().important,
                            ),
                            upcomingAlbum: U.upcomingAlbum,
                          }),
                        ],
                      })
                    : U.lastRelease
                      ? (0, r.jsxs)("div", {
                          className: T().releaseBlock,
                          children: [
                            (0, r.jsx)(L.ti, {
                              className: T().releaseBlockHeader,
                              title: H({ id: "entity-names.recently-release" }),
                            }),
                            (0, r.jsx)(b.rf, {
                              className: (0, s.W)(
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
            null === (k = U.meta) || void 0 === k
              ? void 0
              : k.artist.isLegalRejected
          )
            ? W.isRejected
              ? (0, r.jsx)(S.D, {})
              : (0, r.jsx)(x.em, { disclaimer: W })
            : (0, r.jsx)(I.Lh, {
                pageId: I.Rh.ARTIST,
                children: (0, r.jsx)(I.e4, {
                  children: (0, r.jsxs)(C.I7, {
                    scrollElement: J,
                    children: [
                      (0, r.jsx)(L.h4, { style: ee, innerHeaderRef: Q }),
                      (0, r.jsx)("div", {
                        className: T().averageColorBackground,
                        style: $,
                      }),
                      (0, r.jsxs)(v.t, {
                        className: T().root,
                        containerClassName: T().content,
                        ref: Y,
                        children: [
                          (0, r.jsxs)("div", {
                            children: [
                              er,
                              (0, r.jsxs)("div", {
                                className: T().recents,
                                children: [
                                  U.hasPopularTracks &&
                                    (0, r.jsx)(j, {
                                      withReleaseBlock: U.hasReleaseBlock,
                                      isLoading: U.isLoading,
                                      viewAllActionLink: "/artist/".concat(
                                        w,
                                        "/tracks",
                                      ),
                                      id: l.TRACKS,
                                      children:
                                        null === (G = U.popularTracks) ||
                                        void 0 === G
                                          ? void 0
                                          : G.map((e, t) =>
                                              (0, r.jsx)(
                                                E.O2,
                                                {
                                                  track: e,
                                                  playContextParams: el(e.id),
                                                  hasDuplicatesBefore: (0,
                                                  P.BA)(U.popularTracks, e, t),
                                                },
                                                e.id,
                                              ),
                                            ),
                                    }),
                                  es,
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: T().carouselBlocks,
                                children: [
                                  U.familiarInfo.isFamiliarYouEnabled &&
                                    U.familiarInfo.hasFamiliarInfo &&
                                    (0, r.jsx)(L.ti, {
                                      id: l.FAMILIAR,
                                      className: (0, s.W)(
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
                                    (0, r.jsx)(I.J, {
                                      blockId: I.BE.DISCOGRAPHY_CAROUSEL,
                                      blockType: I.BE.ALBUMS_CAROUSEL,
                                      blockPosX: 1,
                                      blockPosY: 2,
                                      blockIdForFrom: I.BE.DISCOGRAPHY_CAROUSEL,
                                      objectsCount: U.discography.length,
                                      children: (0, r.jsx)(b.wk, {
                                        isShimmerVisible: U.isLoading,
                                        isShimmerActive: !0,
                                        headerClassName: (0, s.W)(
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
                                    (0, r.jsx)(I.J, {
                                      blockId: I.BE.ALBUMS_CAROUSEL,
                                      blockType: I.BE.ALBUMS_CAROUSEL,
                                      blockPosX: 1,
                                      blockPosY: 3,
                                      blockIdForFrom: I.BE.ALBUMS_CAROUSEL,
                                      objectsCount: U.albums.length,
                                      children: (0, r.jsx)(b.wk, {
                                        isShimmerVisible: U.isLoading,
                                        isShimmerActive: !0,
                                        headerClassName: (0, s.W)(
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
                                    (0, r.jsx)(I.nZ, {
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
                                            null === (R = U.concerts) ||
                                            void 0 === R
                                              ? void 0
                                              : R.length) && void 0 !== V
                                          ? V
                                          : 0,
                                      children: (0, r.jsx)(N.m, {
                                        id: l.CONCERTS,
                                        artistId: w,
                                        title: H({
                                          id: "entity-names.concerts",
                                        }),
                                        isLoading: U.isLoading,
                                        headerClassName: (0, s.W)(
                                          T().carouselBlockHeader,
                                          T().carouselBlock,
                                        ),
                                        containerClassName: T().concertsBlock,
                                        viewAllActionLink: U.concertsLink,
                                        children:
                                          null === (D = U.concerts) ||
                                          void 0 === D
                                            ? void 0
                                            : D.map((e, t) => {
                                                var a;
                                                return (0, r.jsx)(
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
                                                    children: (0, r.jsx)(N.kb, {
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
                                    (0, r.jsx)(f.VD, {
                                      isShimmerVisible: U.isLoading,
                                      isShimmerActive: !0,
                                      containerClassName: T().carouselBlock,
                                      headerClassName: (0, s.W)(
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
                                    (0, r.jsx)(I.J, {
                                      blockId: I.BE.COMPILATIONS_CAROUSEL,
                                      blockType: "albums_carousel",
                                      blockPosX: 1,
                                      blockPosY: 5,
                                      blockIdForFrom:
                                        I.BE.COMPILATIONS_CAROUSEL,
                                      objectsCount: U.compilations.length,
                                      children: (0, r.jsx)(b.wk, {
                                        isShimmerVisible: U.isLoading,
                                        isShimmerActive: !0,
                                        headerClassName: (0, s.W)(
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
                                    (0, r.jsx)(L.HY, {
                                      isShimmerVisible: U.isLoading,
                                      isShimmerActive: !0,
                                      headerClassName: (0, s.W)(
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
                                        (0, r.jsx)(
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
                          (0, r.jsx)(L.$_, { className: T().footer }),
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
        l = a(33423),
        r = a(11769),
        s = a(99616),
        n = a(65244),
        o = a(2814),
        d = a(71716),
        u = a(1918),
        c = a(70579),
        m = a(81546),
        g = a(13236),
        p = a(7042),
        v = a(5674),
        h = a(44285),
        _ = a(33768),
        S = a.n(_);
      let b = (0, l.Pi)((e) => {
        var t, a, l;
        let { artistId: _ } = e,
          { artist: b, disclaimer: y } = (0, v.oR)(),
          { formatMessage: C } = (0, n.Z)(),
          [f, E] = (0, g.zU)(),
          N = (0, v.k6)();
        if (_ && b.loadingState === v.Gu.IDLE) {
          let e = Promise.allSettled([
            b.getData({ artistId: _ }),
            b.similarArtistsSubPage.getData({ artistId: _ }),
          ]);
          (0, s.use)(e);
        }
        let x = (0, m.v2)({
          artist: null === (t = b.meta) || void 0 === t ? void 0 : t.artist,
          shouldHistoryBack: !0,
        });
        (0, s.useEffect)(() => {
          x();
        }, [x]),
          (0, s.useEffect)(
            () => () => {
              b.reset(), b.similarArtistsSubPage.reset();
            },
            [b],
          ),
          b.similarArtistsSubPage.isNotFound && (0, r.notFound)(),
          (0, v.NO)(b.similarArtistsSubPage.loadingState === v.Gu.RESOLVE);
        let P = (0, s.useMemo)(() => {
          if (b.similarArtistsSubPage.loadingState === v.Gu.RESOLVE) {
            var e;
            return null === (e = b.similarArtistsSubPage.similarArtists) ||
              void 0 === e
              ? void 0
              : e.map((e) =>
                  (0, i.jsx)(
                    m.IT,
                    { className: S().item, artist: e, contentLinesCount: 3 },
                    e.id,
                  ),
                );
          }
          let t = C(
            { id: "loading-messages.entity-is-loading" },
            { entityName: C({ id: "entity-names.similar-artists" }) },
          );
          return (0, i.jsx)(h.Wm, {
            isActive: !0,
            itemClassName: S().item,
            round: !0,
            centered: !0,
            "aria-label": t,
          });
        }, [
          b.similarArtistsSubPage.loadingState,
          b.similarArtistsSubPage.similarArtists,
          C,
          null === (a = b.similarArtistsSubPage.similarArtists) || void 0 === a
            ? void 0
            : a.length,
        ]);
        return (
          null === (l = b.meta) || void 0 === l
            ? void 0
            : l.artist.isLegalRejected
        )
          ? y.isRejected
            ? (0, i.jsx)(c.D, {})
            : (0, i.jsx)(p.em, { disclaimer: y })
          : b.isRejected
            ? (0, i.jsx)(c.D, {})
            : (0, i.jsx)(v.Lh, {
                pageId: v.Rh.ARTIST_SIMILAR,
                children: (0, i.jsxs)(g.I7, {
                  scrollElement: f,
                  outerTitle: C({ id: "entity-names.similar-artists" }),
                  children: [
                    (0, i.jsx)(h.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: N.canBack,
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
                      ref: E,
                      children: (0, i.jsxs)("div", {
                        className: S().container,
                        children: [
                          (0, i.jsx)("div", {
                            className: S().content,
                            "aria-labelledby": "collection-artists-header",
                            tabIndex: 0,
                            children: P,
                          }),
                          (0, i.jsx)(h.$_, { className: S().footer }),
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
            return C;
          },
        });
      var i = a(8759),
        l = a(35338),
        r = a(33423),
        s = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(2814),
        u = a(57413),
        c = a(1918),
        m = a(70579),
        g = a(81546),
        p = a(13236),
        v = a(95539),
        h = a(7042),
        _ = a(5674),
        S = a(44285),
        b = a(60495),
        y = a.n(b);
      let C = (0, r.Pi)((e) => {
        var t, a, r, b;
        let { artistId: C } = e,
          { artist: f, sonataState: E, disclaimer: N } = (0, _.oR)(),
          { formatMessage: x } = (0, o.Z)(),
          P = (0, _.x5)({ pageId: _.Rh.ARTIST_TRACKS }),
          [I, L] = (0, p.zU)(),
          A = (0, _.k6)();
        if (C && f.fullTracksListSubpage.loadingState === _.Gu.IDLE) {
          let e = Promise.allSettled([
            f.getData({ artistId: C }),
            f.fullTracksListSubpage.getTracksIds({ artistId: C }),
          ]);
          (0, n.use)(e);
        }
        let k = (0, g.v2)({
          artist: null === (t = f.meta) || void 0 === t ? void 0 : t.artist,
          shouldHistoryBack: !0,
        });
        (0, n.useEffect)(() => {
          k();
        }, [k]),
          (0, n.useEffect)(
            () => () => {
              f.reset(), f.fullTracksListSubpage.reset();
            },
            [f, f.fullTracksListSubpage],
          ),
          f.fullTracksListSubpage.isNotFound && (0, s.notFound)(),
          (0, _.NO)(f.fullTracksListSubpage.loadingState === _.Gu.RESOLVE);
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
                  null === (a = f.fullTracksListSubpage.ids) || void 0 === a
                    ? void 0
                    : a[i];
                !f.fullTracksListSubpage.getTrackByIndex(i) && e && t.push(e);
              }
              t.length && f.fullTracksListSubpage.getTracks({ trackIds: t });
            },
            [f.fullTracksListSubpage],
          );
        return f.fullTracksListSubpage.loadingState !== _.Gu.REJECT ||
          f.fullTracksListSubpage.isNotFound
          ? (
              null === (a = f.meta) || void 0 === a
                ? void 0
                : a.artist.isLegalRejected
            )
            ? N.isRejected
              ? (0, i.jsx)(m.D, {})
              : (0, i.jsx)(h.em, { disclaimer: N })
            : (0, i.jsx)(p.I7, {
                scrollElement: I,
                outerTitle: x({ id: "search-filters.track" }),
                children: (0, i.jsxs)("div", {
                  className: y().root,
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: A.canBack,
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
                      className: (0, l.W)(y().scrollContainer, y().important),
                      customComponents: T,
                      itemContentCallback: (e) => {
                        let t = f.fullTracksListSubpage.getTrackByIndex(e),
                          a = x(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: x({ id: "search-filters.track" }) },
                          );
                        return t
                          ? (0, i.jsx)(v.O2, {
                              track: t,
                              playContextParams: {
                                contextData: {
                                  type: u.Ak.Artist,
                                  meta: { id: Number(C) },
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
                            null === (r = f.fullTracksListSubpage.ids) ||
                            void 0 === r
                              ? void 0
                              : r.length) && void 0 !== b
                          ? b
                          : 0,
                      onGetDataByRange: j,
                      pageSize: 20,
                      listClassName: y().content,
                      itemClassName: y().item,
                      totalRequests: f.fullTracksListSubpage.tracks.size,
                      handleRef: L,
                      context: {
                        listAriaLabel: x({
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
          return C;
        },
      });
      var i = a(8759),
        l = a(35338),
        r = a(33423),
        s = a(99616),
        n = a(65244),
        o = a(57413),
        d = a(12670),
        u = a(1918),
        c = a(70579),
        m = a(13236),
        g = a(95539),
        p = a(5674),
        v = a(44285),
        h = a(63049),
        _ = a.n(h);
      let S = (0, r.Pi)(() => {
        let { formatMessage: e } = (0, n.Z)(),
          { chart: t } = (0, p.oR)(),
          a = (0, p.k6)(),
          [r, h] = (0, m.zU)(),
          S = (0, p.x5)({ pageId: p.Rh.CHART });
        t.loadingState === p.Gu.IDLE && (0, s.use)(t.getTracks()),
          (0, p.NO)(t.loadingState === p.Gu.RESOLVE);
        let b = (0, s.useCallback)(
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
                : (0, i.jsx)(v.DX, {
                    isActive: !0,
                    className: _().shimmerItem,
                    variant: p.Lx.PLAYLIST,
                  });
            },
            [S, t.items, t.isLoading, t.playlistMeta],
          ),
          y = (0, s.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(v.$_, { className: _().footer }),
            }),
            [],
          ),
          C = (0, s.useMemo)(
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
                scrollElement: r,
                ...(t.title && { outerTitle: t.title }),
                children: (0, i.jsxs)("div", {
                  className: _().root,
                  children: [
                    (0, i.jsx)(v.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: a.canBack,
                      children: C,
                    }),
                    (0, i.jsx)(v.Wv, {
                      className: (0, l.W)(_().scrollContainer, _().important),
                      listClassName: _().content,
                      customComponents: y,
                      totalCount: t.items.length,
                      itemContentCallback: b,
                      debounceDurationInMs: 300,
                      handleRef: h,
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
        C = b.V5.model("ChartPageModel", {
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
          return l.GenreAlbumsPage;
        },
        eq: function () {
          return r.GenreArtistsPage;
        },
        a0: function () {
          return i.GenrePage;
        },
        Kx: function () {
          return b;
        },
        Fe: function () {
          return s.GenrePlaylistsPage;
        },
      });
      var i = a(72376),
        l = a(72683),
        r = a(58936),
        s = a(85694);
      a(75244);
      var n = a(96555),
        o = a(96431),
        d = a(96911),
        u = a(20210),
        c = a(81446),
        m = a(5674),
        g = a(96169),
        p = a(65704);
      let v = n.V5.model("GenreAlbumsPage", {
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
                let { metatagId: a, page: i = 0, pageSize: l = 20 } = t,
                  { metatagsResource: r, modelActionsLogger: s } = (0, n.dU)(e);
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
                    let t = yield r.getMetatagAlbums({
                      id: a,
                      offset: i,
                      limit: l,
                    });
                    e.fullTitle = t.title.fullTitle;
                    let s = { page: i, perPage: l, total: t.pager.total };
                    0 === e.items.length &&
                      (e.items = (0, n.pj)(
                        Array.from({ length: s.total }, () => null),
                      ));
                    let o = t.albums.map(g.N);
                    (0, m.AG)({
                      items: e.items,
                      mappedRawItems: o,
                      page: i,
                      pageSize: l,
                    }),
                      (e.pager = s),
                      (e.requests =
                        (null !== (d = e.requests) && void 0 !== d ? d : 0) +
                        1),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.RESOLVE);
                  } catch (t) {
                    s.error(t),
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
        h = n.V5.model("GenreArtistsPage", {
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
                let { metatagId: a, page: i = 0, pageSize: l = 20 } = t,
                  { metatagsResource: r, modelActionsLogger: s } = (0, n.dU)(e);
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
                    let t = yield r.getMetatagArtists({
                      id: a,
                      offset: i,
                      limit: l,
                      period: "week",
                    });
                    e.fullTitle = t.title.fullTitle;
                    let s = { page: i, perPage: l, total: t.pager.total };
                    0 === e.items.length &&
                      (e.items = (0, n.pj)(
                        Array.from({ length: s.total }, () => null),
                      ));
                    let o = t.artists.map((e) => (0, c.d)(e.artist));
                    (0, m.AG)({
                      items: e.items,
                      mappedRawItems: o,
                      page: i,
                      pageSize: l,
                    }),
                      (e.pager = s),
                      (e.requests =
                        (null !== (d = e.requests) && void 0 !== d ? d : 0) +
                        1),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.RESOLVE);
                  } catch (t) {
                    s.error(t),
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
                let { metatagId: a, page: i = 0, pageSize: l = 20 } = t,
                  { metatagsResource: r, modelActionsLogger: s } = (0, n.dU)(e);
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
                    let t = yield r.getMetatagPlaylists({
                      id: a,
                      offset: i,
                      limit: l,
                      withLikesCount: !0,
                    });
                    e.fullTitle = t.title.fullTitle;
                    let s = { page: i, perPage: l, total: t.pager.total };
                    0 === e.items.length &&
                      (e.items = (0, n.pj)(
                        Array.from({ length: s.total }, () => null),
                      ));
                    let d = t.playlists.map(_.PV);
                    (0, m.AG)({
                      items: e.items,
                      mappedRawItems: d,
                      page: i,
                      pageSize: l,
                    }),
                      (e.pager = s),
                      (e.requests =
                        (null !== (o = e.requests) && void 0 !== o ? o : 0) +
                        1),
                      e.loadingState !== m.Gu.IDLE &&
                        (e.loadingState = m.Gu.RESOLVE);
                  } catch (t) {
                    s.error(t),
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
          albumsSubpage: v,
          artistsSubpage: h,
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
                  { metatagsResource: i, modelActionsLogger: l } = (0, n.dU)(e);
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
                    l.error(t),
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
        l = a(35338),
        r = a(33423),
        s = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(1918),
        u = a(70579),
        c = a(96911),
        m = a(13236),
        g = a(5674),
        p = a(44285),
        v = a(56908),
        h = a.n(v);
      let _ = (0, r.Pi)((e) => {
        var t, a, r;
        let { metatagId: v } = e,
          {
            genre: { albumsSubpage: _ },
          } = (0, g.oR)(),
          { formatMessage: S } = (0, o.Z)(),
          [b, y] = (0, m.zU)(),
          C = (0, g.k6)();
        v &&
          _.loadingState === g.Gu.IDLE &&
          (0, n.use)(_.getData({ metatagId: v, page: 0, pageSize: 20 }));
        let f = (0, n.useCallback)(
          (e) => {
            v && _.getData({ metatagId: v, page: e, pageSize: 20 });
          },
          [_, v],
        );
        (0, n.useEffect)(
          () => () => {
            _.reset();
          },
          [_],
        ),
          _.isNotFound && (0, s.notFound)(),
          (0, g.NO)(_.loadingState === g.Gu.RESOLVE);
        let E = (0, n.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(p.$_, { className: h().footer }) }),
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
                  className: h().root,
                  children: [
                    (0, i.jsx)(p.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: C.canBack,
                      children: (0, i.jsx)(d.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: _.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(p.Wv, {
                      className: (0, l.W)(h().scrollContainer, h().important),
                      customComponents: E,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == _
                              ? void 0
                              : null === (t = _.items) || void 0 === t
                                ? void 0
                                : t[e],
                          l = S(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: S({ id: "entity-names.album" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              c.rf,
                              { album: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, i.jsx)(p.hi, { "aria-label": l });
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
                      onGetDataByPage: f,
                      pageSize: 20,
                      totalRequests:
                        null !== (r = _.requests) && void 0 !== r ? r : 0,
                      listClassName: h().content,
                      itemClassName: h().item,
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
        l = a(35338),
        r = a(33423),
        s = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(1918),
        u = a(70579),
        c = a(81546),
        m = a(13236),
        g = a(5674),
        p = a(44285),
        v = a(11318),
        h = a.n(v);
      let _ = (0, r.Pi)((e) => {
        var t, a, r;
        let { metatagId: v } = e,
          {
            genre: { artistsSubpage: _ },
          } = (0, g.oR)(),
          { formatMessage: S } = (0, o.Z)(),
          [b, y] = (0, m.zU)(),
          C = (0, g.k6)();
        v &&
          _.loadingState === g.Gu.IDLE &&
          (0, n.use)(_.getData({ metatagId: v, page: 0, pageSize: 20 }));
        let f = (0, n.useCallback)(
          (e) => {
            v && _.getData({ metatagId: v, page: e, pageSize: 20 });
          },
          [_, v],
        );
        (0, n.useEffect)(
          () => () => {
            _.reset();
          },
          [_],
        ),
          _.isNotFound && (0, s.notFound)(),
          (0, g.NO)(_.loadingState === g.Gu.RESOLVE);
        let E = (0, n.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(p.$_, { className: h().footer }) }),
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
                  className: h().root,
                  children: [
                    (0, i.jsx)(p.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: C.canBack,
                      children: (0, i.jsx)(d.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: _.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(p.Wv, {
                      className: (0, l.W)(h().scrollContainer, h().important),
                      customComponents: E,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == _
                              ? void 0
                              : null === (t = _.items) || void 0 === t
                                ? void 0
                                : t[e],
                          l = S(
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
                              "aria-label": l,
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
                      onGetDataByPage: f,
                      pageSize: 20,
                      totalRequests:
                        null !== (r = _.requests) && void 0 !== r ? r : 0,
                      listClassName: h().content,
                      itemClassName: h().item,
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
            return s;
          },
        });
      var i = a(8759),
        l = a(33423),
        r = a(2365);
      let s = (0, l.Pi)(() => (0, i.jsx)(r.T, {}));
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
        l = a(35338),
        r = a(33423),
        s = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(71716),
        u = a(1918),
        c = a(70579),
        m = a(96911),
        g = a(81546),
        p = a(13236),
        v = a(20210),
        h = a(5674),
        _ = a(44285),
        S = a(59896),
        b = a.n(S);
      let y = (0, r.Pi)((e) => {
        let { metatagId: t } = e,
          { genre: a } = (0, h.oR)(),
          { formatMessage: r } = (0, o.Z)(),
          [S, y] = (0, p.zU)(),
          C = (0, h.k6)();
        return (t &&
          a.loadingState === h.Gu.IDLE &&
          (0, n.use)(a.getData({ id: t })),
        a.isNotFound && (0, s.notFound)(),
        (0, n.useEffect)(
          () => () => {
            a.reset();
          },
          [a],
        ),
        (0, h.NO)(a.loadingState === h.Gu.RESOLVE),
        a.loadingState !== h.Gu.REJECT || a.isNotFound)
          ? (0, i.jsx)(h.Lh, {
              pageId: h.Rh.GENRE,
              children: (0, i.jsxs)(p.I7, {
                scrollElement: S,
                outerTitle: a.fullTitle,
                children: [
                  (0, i.jsx)(_.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: C.canBack,
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
                          (0, i.jsx)(h.J, {
                            blockId: h.BE.PLAYLISTS_CAROUSEL,
                            blockType: h.BE.PLAYLISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 1,
                            blockIdForFrom: h.BE.PLAYLISTS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(v.VD, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, l.W)(
                                b().carouselBlockHeader,
                                b().carouselBlock,
                              ),
                              containerClassName: b().carouselBlock,
                              playlists: a.playlists,
                              title: r({
                                id: "entity-names.popular-playlists",
                              }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/playlists",
                              ),
                            }),
                          }),
                        a.hasAlbums &&
                          (0, i.jsx)(h.J, {
                            blockId: h.BE.ALBUMS_CAROUSEL,
                            blockType: h.BE.ALBUMS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 2,
                            blockIdForFrom: h.BE.ALBUMS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(m.wk, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, l.W)(
                                b().carouselBlockHeader,
                                b().carouselBlock,
                              ),
                              containerClassName: b().carouselBlock,
                              albums: a.albums,
                              title: r({ id: "entity-names.new-albums" }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/albums",
                              ),
                            }),
                          }),
                        a.hasArtists &&
                          (0, i.jsx)(h.J, {
                            blockId: h.BE.ARTISTS_CAROUSEL,
                            blockType: h.BE.ARTISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 3,
                            blockIdForFrom: h.BE.ARTISTS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(_.HY, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, l.W)(
                                b().carouselBlockHeader,
                                b().carouselBlock,
                              ),
                              containerClassName: b().carouselBlock,
                              title: r({ id: "entity-names.popular-artists" }),
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
        l = a(35338),
        r = a(33423),
        s = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(1918),
        u = a(70579),
        c = a(13236),
        m = a(20210),
        g = a(5674),
        p = a(44285),
        v = a(39214),
        h = a.n(v);
      let _ = (0, r.Pi)((e) => {
        var t, a, r;
        let { metatagId: v } = e,
          {
            genre: { playlistsSubpage: _ },
          } = (0, g.oR)(),
          { formatMessage: S } = (0, o.Z)(),
          [b, y] = (0, c.zU)(),
          C = (0, g.k6)();
        v &&
          _.loadingState === g.Gu.IDLE &&
          (0, n.use)(_.getData({ metatagId: v, page: 0, pageSize: 20 }));
        let f = (0, n.useCallback)(
          (e) => {
            v && _.getData({ metatagId: v, page: e, pageSize: 20 });
          },
          [_, v],
        );
        (0, n.useEffect)(
          () => () => {
            _.reset();
          },
          [_],
        ),
          _.isNotFound && (0, s.notFound)(),
          (0, g.NO)(_.loadingState === g.Gu.RESOLVE);
        let E = (0, n.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(p.$_, { className: h().footer }) }),
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
                  className: h().root,
                  children: [
                    (0, i.jsx)(p.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: C.canBack,
                      children: (0, i.jsx)(d.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: _.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(p.Wv, {
                      className: (0, l.W)(h().scrollContainer, h().important),
                      customComponents: E,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == _
                              ? void 0
                              : null === (t = _.items) || void 0 === t
                                ? void 0
                                : t[e],
                          l = S(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: S({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              m.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(p.hi, { "aria-label": l });
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
                      onGetDataByPage: f,
                      pageSize: 20,
                      totalRequests:
                        null !== (r = _.requests) && void 0 !== r ? r : 0,
                      listClassName: h().content,
                      itemClassName: h().item,
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
      var l = a(96555),
        r = a(96431),
        s = a(13212),
        n = a(5674);
      let o = l.V5.model("GenresPageModel", {
        title: l.V5.maybeNull(l.V5.string),
        items: l.V5.array(s.fm),
        loadingState: l.V5.enumeration(Object.values(n.Gu)),
        errorStatusCode: l.V5.maybeNull(l.V5.number),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === n.Gu.IDLE || e.loadingState === n.Gu.PENDING
            );
          },
          get isNotFound() {
            let t = e.loadingState === n.Gu.RESOLVE && 0 === e.items.length,
              a = e.errorStatusCode === r.CN.NOT_FOUND;
            return a || t;
          },
        }))
        .actions((e) => {
          let t = {
            getData: (0, l.ls)(function* (t) {
              let { landing3Resource: a, modelActionsLogger: i } = (0, l.dU)(e);
              if (e.loadingState !== n.Gu.PENDING)
                try {
                  e.loadingState = n.Gu.PENDING;
                  let i = yield a.getMetatags({}),
                    o = i.trees.find((e) => e.navigationId === t);
                  if (!o) {
                    e.errorStatusCode = r.CN.NOT_FOUND;
                    return;
                  }
                  (e.title = o.title),
                    (e.items = (0, l.pj)(o.leaves.map(s.uG))),
                    e.loadingState !== n.Gu.IDLE &&
                      (e.loadingState = n.Gu.RESOLVE);
                } catch (t) {
                  i.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.loadingState !== n.Gu.IDLE &&
                      (e.loadingState = n.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = n.Gu.IDLE),
                (e.title = null),
                (e.items = (0, l.pj)([])),
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
            return r;
          },
        });
      var i = a(8759),
        l = a(2365);
      let r = () => (0, i.jsx)(l.T, {});
    },
    83560: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GenresPage: function () {
            return h;
          },
        });
      var i = a(8759),
        l = a(33423),
        r = a(11769),
        s = a(99616),
        n = a(71716),
        o = a(1918),
        d = a(70579),
        u = a(13236),
        c = a(13212),
        m = a(5674),
        g = a(44285),
        p = a(73899),
        v = a.n(p);
      let h = (0, l.Pi)((e) => {
        let { navigationId: t } = e,
          { genres: a } = (0, m.oR)(),
          [l, p] = (0, u.zU)(),
          h = (0, m.k6)();
        return ((0, s.useEffect)(
          () => () => {
            a.reset();
          },
          [a, t],
        ),
        a.isNotFound && (0, r.notFound)(),
        t && a.loadingState === m.Gu.IDLE && (0, s.use)(a.getData(t)),
        (0, m.NO)(a.loadingState === m.Gu.RESOLVE),
        a.loadingState === m.Gu.REJECT)
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsxs)(u.I7, {
              scrollElement: l,
              outerTitle: a.title,
              children: [
                (0, i.jsx)(g.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: h.canBack,
                  children: (0, i.jsx)(o.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: a.title,
                  }),
                }),
                (0, i.jsx)(n.t, {
                  className: v().root,
                  containerClassName: v().content,
                  ref: p,
                  children: (0, i.jsx)("div", {
                    className: v().list,
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
        l = a(33423),
        r = a(99616),
        s = a(2365),
        n = a(5674);
      let o = (0, l.Pi)(() => {
        let { kinopoisk: e } = (0, n.oR)();
        return (
          (0, r.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, i.jsx)(s.T, {})
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
        l = a(35338),
        r = a(33423),
        s = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(2814),
        u = a(34603),
        c = a(71716),
        m = a(1918),
        g = a(65618),
        p = a(70579),
        v = a(13236),
        h = a(5674),
        _ = a(44285),
        S = a(86422),
        b = a.n(S);
      let y = (0, r.Pi)(() => {
        let { experiments: e, kinopoisk: t, user: a } = (0, h.oR)(),
          { formatMessage: r } = (0, o.Z)(),
          [S, y] = (0, v.zU)();
        e.checkExperiment(h.pe.WebKinopoiskLanding, "on") || (0, s.notFound)(),
          t.landing.loadingState === h.Gu.IDLE &&
            (0, n.use)(
              t.landing.getSkeleton(
                { id: u.jB.KINOPOISK, showWizard: a.settings.showWizard },
                { preloadBlocks: 3 },
              ),
            ),
          (0, n.useEffect)(() => () => t.landing.reset(), [t.landing]),
          (0, h.NO)(t.landing.loadingState === h.Gu.RESOLVE);
        let C = (0, g._B)(t.landing);
        return (0, i.jsx)(h.Lh, {
          pageId: h.Rh.KINOPOISK,
          children: (0, i.jsxs)(v.I7, {
            scrollElement: S,
            outerTitle: r({ id: "navigation.page-kinopoisk" }),
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
                      className: (0, l.W)(
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
                    className: (0, l.W)(b().landing, {
                      [b().landing_onlyWizard]: C,
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
        l = a(33423),
        r = a(99616),
        s = a(2365),
        n = a(5674);
      let o = (0, l.Pi)(() => {
        let { nonMusic: e } = (0, n.oR)();
        return (
          (0, r.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, i.jsx)(s.T, {})
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
        l = a(35338),
        r = a(33423),
        s = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(2814),
        u = a(34603),
        c = a(71716),
        m = a(1918),
        g = a(65618),
        p = a(70579),
        v = a(13236),
        h = a(5674),
        _ = a(44285),
        S = a(37436),
        b = a.n(S);
      let y = (0, r.Pi)(() => {
        let { experiments: e, nonMusic: t, user: a } = (0, h.oR)(),
          { formatMessage: r } = (0, o.Z)(),
          [S, y] = (0, v.zU)();
        e.checkExperiment(h.pe.WebNextNonMusicLanding, "on") ||
          (0, s.notFound)(),
          t.landing.loadingState === h.Gu.IDLE &&
            (0, n.use)(
              t.landing.getSkeleton(
                { id: u.jB.WEB_NON_MUSIC, showWizard: a.settings.showWizard },
                { preloadBlocks: 3 },
              ),
            ),
          (0, n.useEffect)(() => () => t.landing.reset(), [t.landing]),
          (0, h.NO)(t.landing.loadingState === h.Gu.RESOLVE);
        let C = (0, g._B)(t.landing);
        return (0, i.jsx)(h.Lh, {
          pageId: h.Rh.NON_MUSIC,
          children: (0, i.jsxs)(v.I7, {
            scrollElement: S,
            outerTitle: r({ id: "entity-names.podcasts" }),
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
                    children: (0, i.jsx)(d.Z, { id: "entity-names.podcasts" }),
                  }),
                }),
              }),
              (0, i.jsxs)(c.t, {
                className: b().root,
                containerClassName: b().content,
                ref: y,
                children: [
                  (0, i.jsx)("div", {
                    className: (0, l.W)(b().landing, {
                      [b().landing_onlyWizard]: C,
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
      var l = a(93043),
        r = a(96555),
        s = a(96431),
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
            l = [];
          for (let t = a; t <= i; t++) {
            var r, s;
            ((null === (r = e[t]) || void 0 === r ? void 0 : r.loadingState) ===
              d.Gu.IDLE ||
              (null === (s = e[t]) || void 0 === s
                ? void 0
                : s.loadingState) === d.Gu.REJECT) &&
              l.push(t);
          }
          return l;
        };
      var g = a(82436);
      let p = (e) => e.map((e) => (0, g.RN)(e.id, e.albumId || void 0)),
        v = r.V5.model("PlaylistItem", {
          id: r.V5.union(r.V5.string, r.V5.number),
          albumId: r.V5.maybeNull(r.V5.union(r.V5.string, r.V5.number)),
          key: r.V5.string,
          data: r.V5.maybeNull(o.le),
          loadingState: r.V5.enumeration(Object.values(d.Gu)),
        }),
        h = r.V5.model("PlaylistSearchItems", {
          playlistTrackIds: r.V5.maybeNull(r.V5.array(r.V5.string)),
          suggestedTrackIds: r.V5.maybeNull(r.V5.array(r.V5.string)),
          additionTrackInProggress: r.V5.maybeNull(r.V5.string),
          tracks: r.V5.maybeNull(r.V5.array(o.le)),
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
                  (e.suggestedTrackIds = (0, r.pj)(
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
        _ = r.V5.model("PlaylistPage", {
          meta: r.V5.maybeNull(n.Nn),
          items: r.V5.array(v),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          loadingState: r.V5.enumeration(Object.values(d.Gu)),
          similarPlaylists: r.V5.array(n.d2),
          searchLoadingState: r.V5.enumeration(Object.values(d.Gu)),
          searchItems: h,
        })
          .views((e) => ({
            get isNotFound() {
              return (
                e.loadingState === d.Gu.REJECT &&
                e.errorStatusCode === s.CN.NOT_FOUND
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
              var a, i, l, n, o, u, c, m, g, p;
              return {
                isAvailable:
                  null === (a = e.meta) || void 0 === a
                    ? void 0
                    : a.isAvailable,
                id: e.meta.id,
                uid: null === (i = e.meta) || void 0 === i ? void 0 : i.uid,
                uuid: e.meta.uuid,
                kind: null === (l = e.meta) || void 0 === l ? void 0 : l.kind,
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
              var v;
              if (!(0, r.fh)(e)) return !1;
              let { experiments: t } = (0, r.yj)(e);
              return !!(
                (null === (v = e.meta) || void 0 === v
                  ? void 0
                  : v.canUserChange) &&
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
              getTracksByRange: (0, r.ls)(function* (t) {
                var a, i;
                let { startIndex: l, endIndex: s } = t,
                  { tracksResource: n, modelActionsLogger: u } = (0, r.dU)(e);
                if (
                  !(null === (a = e.meta) || void 0 === a ? void 0 : a.uid) ||
                  !(null === (i = e.meta) || void 0 === i ? void 0 : i.kind)
                )
                  return null;
                (l = Math.max(0, l)), (s = Math.min(s, e.items.length));
                let g = m(e.items, { startIndex: l, endIndex: s });
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
                    var l, r;
                    let s = null == a ? void 0 : a[i];
                    e.items[t] &&
                      s &&
                      (e.items[t] = {
                        id: s.id,
                        albumId:
                          (null === (r = s.albums) || void 0 === r
                            ? void 0
                            : null === (l = r[0]) || void 0 === l
                              ? void 0
                              : l.id) || null,
                        key: "".concat(s.id, "-").concat(t),
                        data: (0, o.Vt)(s),
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
              getSearchTracksMeta: (0, r.ls)(function* () {
                let { tracksResource: t, modelActionsLogger: a } = (0, r.dU)(e),
                  i = [...(e.searchItems.playlistTrackIds || [])].concat(
                    e.searchItems.suggestedTrackIds || [],
                  );
                try {
                  let a = yield t.getTracksMeta({
                    trackIds: i,
                    removeDuplicates: !0,
                  });
                  (e.searchItems.tracks = (0, r.pj)(
                    null == a ? void 0 : a.map((e) => (0, o.Vt)(e)),
                  )),
                    e.searchLoadingState !== d.Gu.IDLE &&
                      (e.searchLoadingState = d.Gu.RESOLVE);
                } catch (e) {
                  a.error(e);
                }
                return null;
              }),
              updateData: (0, r.ls)(function* (a) {
                var i;
                if ((null == a ? void 0 : a.error) === "not-found")
                  return (
                    (e.errorStatusCode = s.CN.NOT_FOUND),
                    (e.loadingState = d.Gu.REJECT),
                    null
                  );
                (e.similarPlaylists = (0, r.pj)(
                  null === (i = a.similarPlaylists) || void 0 === i
                    ? void 0
                    : i.map(n.VB),
                )),
                  (e.meta = (0, n.Q9)(a)),
                  (e.items = (0, r.pj)(
                    a.tracks.map((e, t) => ({
                      id: String(e.id),
                      albumId: e.albumId || null,
                      key: "".concat(e.id, "-").concat(t),
                      loadingState: d.Gu.IDLE,
                    })),
                  ));
                let { sonataState: l } = (0, r.yj)(e);
                return (
                  l.setUnloadedEntitiesData(p(e.items)),
                  yield t.getTracksByRange({ startIndex: 0, endIndex: 10 })
                );
              }),
              getPlaylistByUserIdAndKind: (0, r.ls)(function* (a) {
                let {
                    userId: i,
                    playlistKind: l,
                    resumeStream: n = !1,
                    trackMetaType: o,
                  } = a,
                  { usersResource: u, modelActionsLogger: c } = (0, r.dU)(e);
                if (e.loadingState !== d.Gu.PENDING)
                  try {
                    e.loadingState = d.Gu.PENDING;
                    let a = yield u.getPlaylistWithTracksIds({
                      userId: i,
                      playlistKind: l,
                      resumeStream: n,
                      trackMetaType: o,
                    });
                    if ("string" != typeof a.playlistUuid) {
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                        (e.loadingState = d.Gu.REJECT);
                      return;
                    }
                    yield t.updateData(a), (e.loadingState = d.Gu.RESOLVE);
                  } catch (t) {
                    c.error(t),
                      t instanceof s.du &&
                        (t.statusCode === s.CN.NOT_FOUND ||
                          t.statusCode === s.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = s.CN.NOT_FOUND),
                      (e.loadingState = d.Gu.REJECT);
                  }
              }),
              getSearchTracks: (0, r.ls)(function* (a) {
                let { uid: i, kind: l, part: n = "" } = a,
                  { searchPlaylistResource: o, modelActionsLogger: c } = (0,
                  r.dU)(e);
                if (e.searchLoadingState !== d.Gu.PENDING && n.length)
                  try {
                    e.searchLoadingState = d.Gu.PENDING;
                    let {
                        playlistTrackIds: a = [],
                        suggestedTrackIds: s = [],
                      } = yield o.getTrackIds({ uid: i, kind: l, part: n }),
                      c = u(e.items, a);
                    (e.searchItems.playlistTrackIds = (0, r.pj)(c)),
                      (e.searchItems.suggestedTrackIds = (0, r.pj)(s)),
                      t.getSearchTracksMeta();
                  } catch (t) {
                    c.error(t),
                      t instanceof s.du &&
                        (t.statusCode === s.CN.NOT_FOUND ||
                          t.statusCode === s.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = s.CN.NOT_FOUND),
                      e.searchLoadingState !== d.Gu.IDLE &&
                        (e.searchLoadingState = d.Gu.REJECT);
                  }
              }),
              getPlaylistByUuid: (0, r.ls)(function* (a) {
                let {
                    playlistUuid: i,
                    richTracks: l = !1,
                    resumeStream: n = !1,
                  } = a,
                  { playlistResource: o, modelActionsLogger: u } = (0, r.dU)(e);
                if (e.loadingState !== d.Gu.PENDING)
                  try {
                    e.loadingState = d.Gu.PENDING;
                    let a = yield o.getPlaylist({
                      playlistUuid: i,
                      resumeStream: n,
                      richTracks: l,
                    });
                    yield t.updateData(a),
                      e.loadingState !== d.Gu.IDLE &&
                        (e.loadingState = d.Gu.RESOLVE);
                  } catch (t) {
                    u.error(t),
                      t instanceof s.du &&
                        (t.statusCode === s.CN.NOT_FOUND ||
                          t.statusCode === s.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = s.CN.NOT_FOUND),
                      e.loadingState !== d.Gu.IDLE &&
                        (e.loadingState = d.Gu.REJECT);
                  }
              }),
              moveTrack(t, a) {
                let i = (0, l.ZN)(e.items[t]);
                if (
                  !(t < 0) &&
                  !(a < 0) &&
                  !(t >= e.items.length) &&
                  !(a >= e.items.length) &&
                  i &&
                  (e.items.splice(t, 1), e.items.splice(a, 0, i), (0, r.fh)(e))
                ) {
                  let { sonataState: t } = (0, r.yj)(e);
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
                let { sonataState: a } = (0, r.yj)(e);
                a.resetUnloadedEntitiesData(),
                  (e.meta = null),
                  (e.loadingState = d.Gu.IDLE),
                  (e.items = (0, r.pj)([])),
                  (e.similarPlaylists = (0, r.pj)([])),
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
            return s;
          },
        });
      var i = a(8759),
        l = a(33423),
        r = a(2365);
      let s = (0, l.Pi)(() => (0, i.jsx)(r.T, {}));
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
        l = a(35338),
        r = a(33423),
        s = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(27287),
        u = a(48157),
        c = a(79765),
        m = a(2814),
        g = a(9227),
        p = a(1918),
        v = a(20210),
        h = a(95539),
        _ = a(3515),
        S = a(5674),
        b = a(44285),
        y = a(57413);
      let C = (e, t) => {
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
      var f = a(95431),
        E = a.n(f);
      let N = (0, r.Pi)((e) => {
        var t, a, r, s, d, u, y;
        let { autoFocus: f, onChange: N, className: x } = e,
          { formatMessage: P } = (0, o.Z)(),
          [I, L] = (0, n.useState)(""),
          { playlist: A } = (0, S.oR)(),
          k = null == A ? void 0 : A.searchItems,
          T = (0, h.Wc)(),
          j = (0, n.useRef)(0),
          G = (null === (t = A.meta) || void 0 === t ? void 0 : t.isOwnPlaylist)
            ? S.Rh.OWN_PLAYLISTS
            : S.Rh.PLAYLIST,
          R = (0, S.x5)({ pageId: G, blockId: S.aU.FILTERED }),
          D = (0, S.x5)({ pageId: G, blockId: S.aU.SUGGESTED }),
          [V, O] = (0, n.useState)(!1);
        (0, n.useEffect)(
          () => () => {
            window.clearTimeout(j.current), null == N || N(!1);
          },
          [N],
        );
        let w = (0, n.useMemo)(
            () =>
              (0, c.Z)((e) => {
                let t = e.trim();
                L(t),
                  t &&
                    (null == A ? void 0 : A.meta) &&
                    (A.resetSearch(),
                    A.getSearchTracks({
                      uid: A.meta.uid,
                      kind: A.meta.kind,
                      part: t,
                    })),
                  (!t || 0 === t.length) && V && (O(!1), A.refresh()),
                  null == N || N(!!t.length);
              }, 100),
            [A, V, N],
          ),
          B = (0, n.useCallback)(
            async (e) => {
              if (A.meta) {
                k.setAdditionTrackAnimation(e.id);
                let t = T({
                    track: e,
                    playlist: A.meta,
                    withSuccessNotification: !1,
                    withPageRefresh: !1,
                  }),
                  a = new Promise((e) => {
                    j.current = window.setTimeout(e, 300);
                  }),
                  [i] = await Promise.all([t, a]);
                i === _.pX.OK
                  ? (k.replaceAdditionTrackInProggress(), O(!0))
                  : k.resetAdditionTrackAnimation();
              }
            },
            [T, A.meta, k],
          ),
          M = (0, n.useMemo)(() => {
            var e;
            return A.isSearchLoading
              ? (0, i.jsx)(b.DX, {
                  isActive: !0,
                  className: E().shimmerItem,
                  variant: S.Lx.PLAYLIST,
                })
              : null == k
                ? void 0
                : null === (e = k.playlistTracks) || void 0 === e
                  ? void 0
                  : e.map((e) =>
                      e
                        ? (0, i.jsx)(
                            h.O2,
                            {
                              className: (0, l.W)(E().track, {
                                [E().appearingTrack]:
                                  e.id === k.additionTrackInProggress,
                              }),
                              track: e,
                              playContextParams: C(e, R),
                              shouldCheckSelfIndex: !1,
                            },
                            e.id,
                          )
                        : null,
                    );
          }, [
            A.isSearchLoading,
            null == k ? void 0 : k.playlistTracks,
            k.additionTrackInProggress,
            R,
          ]),
          U = (0, n.useMemo)(() => {
            var e, t;
            return (
              null === (e = A.meta) || void 0 === e ? void 0 : e.canUserChange
            )
              ? A.isSearchLoading
                ? (0, i.jsx)(b.DX, {
                    isActive: !0,
                    className: E().shimmerItem,
                    variant: S.Lx.PLAYLIST,
                  })
                : null == k
                  ? void 0
                  : null === (t = k.suggestedTracks) || void 0 === t
                    ? void 0
                    : t.map((e) =>
                        e
                          ? (0, i.jsx)(
                              h.VZ,
                              {
                                track: e,
                                className: (0, l.W)({
                                  [E().disappearingTrack]:
                                    e.id === k.additionTrackInProggress,
                                }),
                                shouldCheckSelfIndex: !1,
                                playContextParams: C(e, D),
                                onClick: B,
                              },
                              e.id,
                            )
                          : null,
                      )
              : void 0;
          }, [
            null === (a = A.meta) || void 0 === a ? void 0 : a.canUserChange,
            A.isSearchLoading,
            null == k ? void 0 : k.suggestedTracks,
            k.additionTrackInProggress,
            D,
            B,
          ]),
          F = (0, n.useMemo)(() => {
            var e, t;
            return (null == k
              ? void 0
              : null === (e = k.playlistTrackIds) || void 0 === e
                ? void 0
                : e.length) ||
              (null == k
                ? void 0
                : null === (t = k.suggestedTracks) || void 0 === t
                  ? void 0
                  : t.length) ||
              A.isSearchLoading
              ? null
              : (0, i.jsx)(v.vY, {
                  className: E().emptyBlockContainer,
                  isEmptySearch: !0,
                });
          }, [
            null == k
              ? void 0
              : null === (r = k.playlistTrackIds) || void 0 === r
                ? void 0
                : r.length,
            null == k
              ? void 0
              : null === (s = k.suggestedTracks) || void 0 === s
                ? void 0
                : s.length,
            A.isSearchLoading,
          ]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(g.M, {
              className: (0, l.W)(E().root, x),
              autoFocus: f,
              initialValue: I,
              correctedValue: null,
              placeholder: P({ id: "search.track-placeholder" }),
              onChange: w,
              resetButtonAriaLabel: P({
                id: "interface-actions.reset-search-input",
              }),
              onResetClick: A.resetSearch,
            }),
            I &&
              (0, i.jsxs)("div", {
                className: E().content,
                children: [
                  F,
                  M,
                  Number(
                    null == k
                      ? void 0
                      : null === (d = k.suggestedTracks) || void 0 === d
                        ? void 0
                        : d.length,
                  ) > 0 &&
                    (null === (u = A.meta) || void 0 === u
                      ? void 0
                      : u.canUserChange) &&
                    (0, i.jsx)(
                      p.Caption,
                      {
                        variant: "div",
                        type: "text",
                        size: "s",
                        weight: "medium",
                        className: (0, l.W)(E().catalog, {
                          [E().catalog_withTracks]:
                            null == k
                              ? void 0
                              : null === (y = k.playlistTrackIds) ||
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
      var x = a(13236),
        P = a(90598),
        I = a.n(P),
        L = a(3786),
        A = a(63690),
        k = a.n(A);
      let T = (0, r.Pi)(
        (0, n.forwardRef)((e, t) => {
          var a;
          let { children: r, "data-index": s, ...o } = e,
            { playlist: d } = (0, S.oR)(),
            {
              isDragging: u,
              listeners: c,
              setNodeRef: m,
              transform: g,
              transition: p,
              attributes: v,
            } = (0, L.nB)({
              id: String(
                null === (a = d.items[s]) || void 0 === a ? void 0 : a.key,
              ),
            }),
            h = (0, n.useCallback)(
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
            ref: h,
            "data-index": s,
            style: _,
            ...o,
            className: k().root,
            children: (0, i.jsx)("div", {
              className: (0, l.W)(k().inner, { [k().dragging]: u }),
              ...c,
              ...v,
              children: r,
            }),
          });
        }),
      );
      var j = a(2050),
        G = a(44757),
        R = a(98786);
      let D = (e, t) => {
          var a;
          let i = t - 1;
          if (!e.items.length || i < 0 || i > e.items.length) return "";
          let l = e.items[i];
          return (
            (null == l
              ? void 0
              : null === (a = l.data) || void 0 === a
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
                  l = D(e, Number(i.id)),
                  r = i.id;
                return t(
                  { id: "drag-and-drop.playlist-on-move-start" },
                  { trackName: l, index: r },
                );
              },
              onDragOver(a) {
                let { active: i, over: l } = a,
                  r = D(e, Number(i.id));
                if (l) {
                  let e = l.id;
                  return t(
                    { id: "drag-and-drop.playlist-on-move" },
                    { trackName: r, index: e },
                  );
                }
                return t(
                  { id: "drag-and-drop.playlist-on-move-fail" },
                  { trackName: r },
                );
              },
              onDragEnd(a) {
                let { active: i, over: l } = a,
                  r = D(e, Number(i.id));
                if (l) {
                  let e = l.id;
                  return t(
                    { id: "drag-and-drop.playlist-on-move-end-with-index" },
                    { trackName: r, index: e },
                  );
                }
                return t(
                  { id: "drag-and-drop.playlist-on-move-end" },
                  { trackName: r },
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
            async (l) => {
              var r, s, n, o;
              let { from: d, to: u } = l;
              if (d < 0 || u < 0 || d >= e.items.length || u >= e.items.length)
                return;
              let c = String(
                null === (r = e.items[d]) || void 0 === r ? void 0 : r.id,
              );
              if (!c) return;
              let m = (
                null === (s = e.items[d]) || void 0 === s ? void 0 : s.albumId
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
      let M = (0, r.Pi)((e) => {
        var t, a;
        let l,
          { index: r, className: s } = e,
          { playlist: n, experiments: o, sonataState: d } = (0, S.oR)(),
          u =
            o.checkExperiment(S.pe.WebNextPlaylistAddition, "on") &&
            (null === (t = n.meta) || void 0 === t ? void 0 : t.isOwnPlaylist),
          c = (0, S.x5)({ pageId: S.Rh.PLAYLIST, blockId: S.aU.PLAYLIST }),
          m = n.items[r];
        return n.isEmptyPlaylist && u
          ? (0, i.jsx)(v.vY, { className: B().emptyBlockContainer })
          : ((l =
              m && m.data && n.meta
                ? m.data.isTrackPodcast ||
                  (null === (a = m.data.mainAlbum) || void 0 === a
                    ? void 0
                    : a.isPodcast)
                  ? (0, i.jsx)(h.N6, {
                      withPodcastName: !0,
                      track: m.data,
                      hasDuplicatesBefore: (0, _.BA)(n.items, m, r),
                      playContextParams: {
                        contextData: {
                          type: y.Ak.Playlist,
                          meta: n.contextMeta,
                          from: c,
                        },
                        entitiesData: d.unloadedEntitiesDataFromModels,
                        queueParams: { index: r },
                        loadContextMeta: !0,
                      },
                      className: s,
                    })
                  : (0, i.jsx)(h.O2, {
                      track: m.data,
                      hasDuplicatesBefore: (0, _.BA)(n.items, m, r),
                      playContextParams: {
                        contextData: {
                          type: y.Ak.Playlist,
                          meta: n.contextMeta,
                          from: c,
                        },
                        entitiesData: d.unloadedEntitiesDataFromModels,
                        queueParams: { index: r },
                        loadContextMeta: !0,
                      },
                      className: s,
                    })
                : (0, i.jsx)(b.DX, {
                    isActive: !0,
                    className: B().shimmerItem,
                    variant: S.Lx.PLAYLIST,
                  })),
            (0, i.jsx)(_.jK.Provider, {
              value: { playlist: n.meta, trackIndex: r },
              children: l,
            }));
      });
      var U = a(43601),
        F = a.n(U);
      let W = (0, r.Pi)((e) => {
          let { children: t, playlist: a } = e,
            { announcements: l, screenReaderInstructions: r } = V(a),
            s = O(a),
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
                let l = a.itemsKeys.indexOf(String(t.id)),
                  r = a.itemsKeys.indexOf(String(i.id));
                Number.isInteger(l) &&
                  Number.isInteger(r) &&
                  s({ from: l, to: r });
              },
              [s, a.itemsKeys],
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
                  announcements: l,
                  screenReaderInstructions: r,
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
                  (0, R.createPortal)(
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
        H = (0, r.Pi)((e) => {
          var t, a, r;
          let { userId: c, kind: m, playlistUuid: g } = e,
            p = (0, n.useRef)(0),
            { notify: h } = (0, S.d$)(),
            { playlist: _, experiments: y } = (0, S.oR)(),
            { formatMessage: C } = (0, o.Z)(),
            { ref: f, offsetY: E } = (0, d.e)(),
            [P, L] = (0, x.zU)(),
            A = (0, n.useMemo)(() => {
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
            [k, j] = (0, x.at)(A, E),
            G =
              y.checkExperiment(S.pe.WebNextPlaylistAddition, "on") &&
              (null === (a = _.meta) || void 0 === a
                ? void 0
                : a.isOwnPlaylist),
            [R, D] = (0, n.useState)(!1),
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
                (h(
                  (0, i.jsx)(b.Q, {
                    error: C({
                      id: "playlist-errors.error-during-loading-playlist",
                    }),
                  }),
                  { containerId: S.W$.ERROR },
                ),
                p.current++);
            },
            [_.isRejected, _.meta, _.isLoading, h, C],
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
            _.isNotFound && (0, s.notFound)();
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
                          ref: f,
                        }),
                        V &&
                          (0, i.jsx)(N, {
                            autoFocus: !_.items.length,
                            onChange: D,
                          }),
                      ],
                    }),
              [_.isDisabled, _.isLoading, _.meta, _.isRejected, f, _.items, V],
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
                            children: (0, i.jsx)(v.VD, {
                              isShimmerVisible: _.isLoading,
                              isShimmerActive: !0,
                              className: I().carouselContainer,
                              headerClassName: (0, l.W)(
                                I().carouselBlockHeader,
                                I().carouselBlock,
                              ),
                              containerClassName: I().carouselBlock,
                              title: C({
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
                C,
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
            q = _.items.length || (G ? 1 : 0);
          return (0, i.jsx)(S.Lh, {
            pageId: S.Rh.PLAYLIST,
            children: (0, i.jsxs)(x.I7, {
              scrollElement: P,
              children: [
                (0, i.jsx)(b.h4, { style: j }),
                (0, i.jsx)("div", {
                  className: I().averageColorBackground,
                  style: k,
                }),
                (0, i.jsx)(W, {
                  playlist: _,
                  children: (0, i.jsx)(b.Wv, {
                    context: {
                      listAriaLabel: C(
                        { id: "entity-names.playlist-tracks-list" },
                        {
                          playlistName:
                            (null === (r = _.meta) || void 0 === r
                              ? void 0
                              : r.title) || "",
                        },
                      ),
                    },
                    className: (0, l.W)(I().root, I().important),
                    listClassName: I().content,
                    customComponents: B,
                    computeItemKey: _.isDragAndDropEnabled ? F : H,
                    totalCount: R ? 0 : q,
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
      var l = a(96555),
        r = a(96431),
        s = a(65237),
        n = a(96911),
        o = a(20210),
        d = a(81446),
        u = a(3515),
        c = a(5674);
      let m = l.V5.model("PostPage", {
        errorStatusCode: l.V5.maybe(l.V5.number),
        loadingState: l.V5.enumeration(Object.values(c.Gu)),
        title: l.V5.maybeNull(l.V5.string),
        promotionType: l.V5.maybeNull(l.V5.enumeration(Object.values(s.qe))),
        artists: l.V5.maybe(l.V5.array(d.Go)),
        albums: l.V5.maybe(l.V5.array(n.ug)),
        playlists: l.V5.maybe(l.V5.array(o.d2)),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === c.Gu.IDLE || e.loadingState === c.Gu.PENDING
            );
          },
          get isNotFound() {
            let t =
              e.errorStatusCode === r.CN.NOT_FOUND ||
              e.errorStatusCode === r.CN.BAD_REQUEST;
            return e.loadingState === c.Gu.REJECT && t;
          },
          get isSomethingWrong() {
            return e.loadingState === c.Gu.REJECT && !this.isNotFound;
          },
        }))
        .actions((e) => {
          let t = {
            getData: (0, l.ls)(function* (t) {
              let { promoId: a } = t,
                { feedResource: i, modelActionsLogger: s } = (0, l.dU)(e);
              if (e.loadingState !== c.Gu.PENDING)
                try {
                  e.loadingState = c.Gu.PENDING;
                  let t = yield i.getPromotionsById({ promoId: a });
                  (e.title = t.title),
                    (e.promotionType = t.promotionType),
                    t.artists &&
                      t.artists.length > 0 &&
                      (e.artists = (0, l.pj)(t.artists.map(d.d))),
                    t.albums &&
                      t.albums.length > 0 &&
                      (e.albums = (0, l.pj)(t.albums.map(n.ym))),
                    t.playlists &&
                      t.playlists.length > 0 &&
                      (e.playlists = (0, l.pj)(
                        t.playlists.map((e) => {
                          let { playlist: t } = e;
                          return (0, u.PV)(t);
                        }),
                      )),
                    e.loadingState !== c.Gu.IDLE &&
                      (e.loadingState = c.Gu.RESOLVE);
                } catch (t) {
                  s.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.loadingState !== c.Gu.IDLE &&
                      (e.loadingState = c.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = c.Gu.IDLE),
                (e.title = null),
                (e.artists = (0, l.pj)([])),
                (e.albums = (0, l.pj)([]));
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
            return s;
          },
        });
      var i = a(8759),
        l = a(33423),
        r = a(2365);
      let s = (0, l.Pi)(() => (0, i.jsx)(r.T, {}));
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
        l = a(33423),
        r = a(11769),
        s = a(99616),
        n = a(34603),
        o = a(71716),
        d = a(12670),
        u = a(1918),
        c = a(70579),
        m = a(13236),
        g = a(5674),
        p = a(44285),
        v = a(18448),
        h = a.n(v);
      let _ = () =>
        (0, i.jsxs)("div", {
          className: h().root,
          children: [
            (0, i.jsx)(d.Shimmer, { radius: "l", className: h().top }),
            (0, i.jsx)(d.Shimmer, { radius: "l", className: h().bottom }),
          ],
        });
      var S = a(15697),
        b = a.n(S),
        y = a(96911),
        C = a(57551),
        f = a.n(C);
      let E = (0, l.Pi)((e) => {
        let { albums: t = [] } = e;
        return (0, i.jsx)("div", {
          className: f().root,
          children: (0, i.jsx)("div", {
            className: f().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                y.rf,
                { className: f().item, album: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var N = a(81546),
        x = a(74706),
        P = a.n(x);
      let I = (0, l.Pi)((e) => {
        let { artists: t = [] } = e;
        return (0, i.jsx)("div", {
          className: P().root,
          children: (0, i.jsx)("div", {
            className: P().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                N.IT,
                { className: P().item, artist: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var L = a(20210),
        A = a(95456),
        k = a.n(A);
      let T = (0, l.Pi)((e) => {
          let { playlists: t = [] } = e;
          return (0, i.jsx)("div", {
            className: k().root,
            children: (0, i.jsx)("div", {
              className: k().content,
              "aria-labelledby": "post-page-header",
              tabIndex: 0,
              children: t.map((e) =>
                (0, i.jsx)(
                  L.ZL,
                  { className: k().item, playlist: e, contentLinesCount: 3 },
                  e.id,
                ),
              ),
            }),
          });
        }),
        j = (0, l.Pi)((e) => {
          let { promoId: t } = e,
            { post: a } = (0, g.oR)(),
            l = (0, g.k6)(),
            [v, h] = (0, m.zU)();
          if (
            (t &&
              a.loadingState === g.Gu.IDLE &&
              (0, s.use)(a.getData({ promoId: t })),
            (0, s.useEffect)(
              () => () => {
                a.reset();
              },
              [a],
            ),
            a.isNotFound && (0, r.notFound)(),
            (0, g.NO)(a.loadingState === g.Gu.RESOLVE),
            a.isSomethingWrong)
          )
            return (0, i.jsx)(c.D, {});
          let S = (0, s.useMemo)(() => {
            if (a.isLoading) return (0, i.jsx)(_, {});
            switch (a.promotionType) {
              case n.qe.ARTISTS:
                return (0, i.jsx)(I, { artists: a.artists });
              case n.qe.ALBUMS:
                return (0, i.jsx)(E, { albums: a.albums });
              case n.qe.PLAYLISTS:
                return (0, i.jsx)(T, { playlists: a.playlists });
              default:
                (0, r.notFound)();
            }
          }, [a.albums, a.artists, a.isLoading, a.playlists, a.promotionType]);
          return (0, i.jsx)(g.Lh, {
            pageId: g.Rh.POST,
            children: (0, i.jsxs)(m.I7, {
              scrollElement: v,
              outerTitle: a.title || void 0,
              children: [
                (0, i.jsx)(p.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: l.canBack,
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
                  ref: h,
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
        l = a(79765),
        r = a(33423),
        s = a(99616),
        n = a(65244),
        o = a(2814),
        d = a(15527),
        u = a(14581),
        c = a(71716),
        m = a(1918),
        g = a(16367),
        p = a(5674),
        v = a(54301),
        h = a.n(v);
      let _ = (0, r.Pi)(() => {
        var e;
        let t = (0, p.uK)(),
          a = t.get(p.U5),
          { search: r, user: v, settings: _, experiments: S } = (0, p.oR)(),
          { formatMessage: b } = (0, n.Z)(),
          y = (0, p.k6)(),
          C = (0, s.useRef)(!1),
          f = (0, g.vy)(() => {
            C.current = !0;
          }),
          E = _.layout === p.t8.Mobile,
          N = r.history.items.length;
        r.isHistoryReady &&
          (null === (e = v.account) || void 0 === e ? void 0 : e.uid) &&
          (0, s.use)(
            r.getHistory({ userId: v.account.uid, config: a, experiments: S }),
          ),
          (0, s.useEffect)(
            () => () => {
              (null == C ? void 0 : C.current)
                ? (r.resetHistoryItems(), (C.current = !1))
                : r.resetHistoryStateRequest();
            },
            [r],
          );
        let x = (0, s.useMemo)(
            () =>
              (0, l.Z)(() => {
                null == y || y.back();
              }, 200),
            [y],
          ),
          P = (0, s.useMemo)(
            () =>
              r.history.items.length
                ? (0, i.jsx)("div", {
                    className: h().items,
                    children: r.history.items.map(g.Fu).filter((e) => e),
                  })
                : (0, i.jsx)(m.Caption, {
                    className: h().emptyHistory,
                    variant: "div",
                    size: "m",
                    type: "text",
                    children: (0, i.jsx)(o.Z, { id: "search.history-empty" }),
                  }),
            [r.history.items],
          );
        return (0, i.jsx)("div", {
          className: h().root,
          children: (0, i.jsxs)(c.t, {
            className: h().scrollContent,
            containerClassName: h().scrollContainer,
            children: [
              (0, i.jsxs)("div", {
                className: h().header,
                children: [
                  (0, i.jsxs)("div", {
                    className: h().title,
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
                          onClick: x,
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
                    disabled: !N,
                    size: E ? "s" : "default",
                    onClick: f,
                    children: (0, i.jsx)(m.Caption, {
                      variant: "span",
                      size: "m",
                      type: "text",
                      children: (0, i.jsx)(o.Z, { id: "search.clear-history" }),
                    }),
                  }),
                ],
              }),
              !r.isHistoryLoading && P,
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
            return C;
          },
        });
      var i = a(8759),
        l = a(35338),
        r = a(79765),
        s = a(33423),
        n = a(11769),
        o = a(99616),
        d = a(65244),
        u = a(34603),
        c = a(71716),
        m = a(9227),
        g = a(26265),
        p = a(22810),
        v = a(16367),
        h = a(5674),
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
      let C = (0, s.Pi)(() => {
        let e = (0, g.useTabsState)(0),
          [t, a] = (0, o.useState)(u.ay.TOP),
          [s, b] = (0, o.useState)(!1),
          { formatMessage: C } = (0, d.Z)(),
          { search: f, experiments: E } = (0, h.oR)(),
          N = (0, h.uK)(),
          x = N.get(h.U5),
          P = S.filter((e) => {
            if (
              e !== u.ay.PODCAST ||
              x.features.nonMusic ||
              E.checkExperiment(h.pe.WebNextPodcastSearch, "on")
            )
              return e;
          });
        E.checkExperiment(h.pe.WebNextDisableSearch, "on") &&
          (0, n.redirect)("/");
        let [I, L] = (0, o.useState)(""),
          A = I.length > 0;
        (0, o.useEffect)(
          () => () => {
            f.reset();
          },
          [f],
        );
        let k = (0, o.useCallback)(
            (e, t) => {
              f.resetResults();
              let a = 0 === e.length;
              a ||
                f.getSearchResults({
                  text: decodeURIComponent(e),
                  filter: t,
                  config: x,
                  experiments: E,
                });
            },
            [f, x, E],
          ),
          T = (0, o.useCallback)(
            (e) => {
              let a = e.trim(),
                i = encodeURIComponent(a);
              L(i), k(i, t), f.resetSearchCorrectedText(), b(!1);
            },
            [f, k, t, b],
          ),
          j = (0, o.useCallback)(() => {
            b(!0);
          }, [b]),
          G = (0, o.useMemo)(
            () =>
              (0, r.Z)((t) => {
                var i;
                if (!e.onTabChange || t === e.value) return;
                e.onTabChange(t);
                let l = null !== (i = S[t]) && void 0 !== i ? i : u.ay.TOP;
                a(l), k(I, l);
              }, 300),
            [k, I, e],
          ),
          R = (0, o.useMemo)(
            () => (e) => {
              let {
                id: t,
                type: a,
                blockPosition: i,
                position: l,
                feedbackType: r,
              } = e;
              f.sendFeedback({
                blockType: a,
                entityId: "".concat(a, ":").concat(t),
                timestamp: new Date().toISOString(),
                searchRequestId: f.searchRequestId,
                query: I,
                clickType: r,
                blockPosition: i,
                position: l,
                page: 0,
              });
            },
            [f, I],
          ),
          D = (0, o.useMemo)(
            () =>
              f.searchCorrectedText
                ? (0, i.jsx)(v.gK, {
                    searchCorrectedText: f.searchCorrectedText,
                    onCorrectText: j,
                  })
                : null,
            [j, f.searchCorrectedText],
          ),
          V = (0, o.useMemo)(() => {
            if (!f.isLoading && 0 === f.results.length)
              return (0, i.jsx)(v.hF, { searchCorrectedText: D });
            switch (t) {
              case u.ay.TOP:
                return (0, i.jsx)(v.Id, {
                  className: y().searchResults,
                  isLoading: f.isLoading,
                  results: f.results,
                  sendSearchFeedback: R,
                  searchCorrectedText: D,
                });
              case u.ay.TRACK:
                return (0, i.jsx)(v.XM, {
                  className: y().searchResults,
                  isLoading: f.isLoading,
                  results: f.results,
                  sendSearchFeedback: R,
                  searchCorrectedText: D,
                });
              case u.ay.ALBUM:
                return (0, i.jsx)(v.xz, {
                  className: y().searchResults,
                  isLoading: f.isLoading,
                  results: f.results,
                  filter: u.ay.ALBUM,
                  sendSearchFeedback: R,
                  searchCorrectedText: D,
                });
              case u.ay.PLAYLIST:
                return (0, i.jsx)(v.xz, {
                  className: y().searchResults,
                  isLoading: f.isLoading,
                  results: f.results,
                  filter: u.ay.PLAYLIST,
                  sendSearchFeedback: R,
                  searchCorrectedText: D,
                });
              case u.ay.ARTIST:
                return (0, i.jsx)(v.xz, {
                  className: y().searchResults,
                  isLoading: f.isLoading,
                  results: f.results,
                  filter: u.ay.ARTIST,
                  sendSearchFeedback: R,
                  searchCorrectedText: D,
                });
              case u.ay.PODCAST:
                return (0, i.jsx)(v.R_, {
                  className: y().searchResults,
                  isLoading: f.isLoading,
                  results: f.results,
                  sendSearchFeedback: R,
                  searchCorrectedText: D,
                });
              default:
                return D;
            }
          }, [f.isLoading, f.results, t, R, D]),
          O = (0, o.useMemo)(
            () =>
              I.length > 0
                ? V
                : (0, i.jsxs)(c.t, {
                    className: y().scrollableContent,
                    containerClassName: y().main,
                    children: [
                      (0, i.jsx)(o.Suspense, {
                        children: (0, i.jsx)(h.J, {
                          blockId: h.BE.SEARCH_HISTORY,
                          blockType: h.BE.SEARCH_HISTORY,
                          blockPosX: 1,
                          blockPosY: 1,
                          blockIdForFrom: h.BE.SEARCH_HISTORY,
                          objectsCount: f.history.items.length,
                          children: (0, i.jsx)(v.y9, {}),
                        }),
                      }),
                      (0, i.jsx)(o.Suspense, {
                        children: (0, i.jsx)(p.JG, {}),
                      }),
                      (0, i.jsx)(_.$_, { className: y().footer }),
                    ],
                  }),
            [I.length, V, f.history.items.length],
          ),
          w = (0, o.useMemo)(
            () => ({
              top: C({ id: "search-filters.top" }),
              track: C({ id: "search-filters.track" }),
              album: C({ id: "search-filters.album" }),
              artist: C({ id: "search-filters.artist" }),
              playlist: C({ id: "search-filters.playlist" }),
              podcast: C({ id: "search-filters.podcast" }),
            }),
            [C],
          );
        return (0, i.jsx)(h.Lh, {
          pageId: h.Rh.SEARCH,
          children: (0, i.jsxs)("div", {
            className: (0, l.W)(y().root, { [y().root_showFilters]: A }),
            children: [
              (0, i.jsxs)("div", {
                className: y().header,
                children: [
                  (0, i.jsx)(m.M, {
                    className: y().input,
                    autoFocus: !0,
                    initialValue: I,
                    placeholder: C({ id: "search.input-placeholder" }),
                    onChange: T,
                    resetButtonAriaLabel: C({
                      id: "interface-actions.reset-search-input",
                    }),
                    correctedValue: s ? f.searchCorrectedText : null,
                  }),
                  A &&
                    (0, i.jsx)(_.no, {
                      className: y().tabCarousel,
                      ...e,
                      onTabChange: G,
                      children: P.map((t, a) =>
                        (0, i.jsx)(
                          _.OK,
                          {
                            className: (0, l.W)(y().filter, {
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
      var l = a(96555),
        r = a(96431),
        s = a(3515),
        n = a(5674),
        o = a(65704);
      let d = l.V5.model("TagPage", {
        title: l.V5.maybe(l.V5.string),
        errorStatusCode: l.V5.maybeNull(l.V5.number),
        tagLoadingState: l.V5.enumeration(Object.values(n.Gu)),
        playlistsLoadingState: l.V5.enumeration(Object.values(n.Gu)),
        playlistsData: l.V5.array(
          l.V5.model({ uid: l.V5.number, kind: l.V5.number }),
        ),
        playlists: l.V5.array(l.V5.maybeNull(s.Cd)),
        pager: l.V5.maybeNull(o.Vn),
        alreadyRequestedPages: l.V5.map(l.V5.number),
        pendingPages: l.V5.map(l.V5.number),
        requests: l.V5.maybeNull(l.V5.number),
      })
        .views((e) => ({
          get isNotFound() {
            let t =
                e.playlistsLoadingState === n.Gu.RESOLVE &&
                0 === e.playlists.length,
              a =
                (e.tagLoadingState === n.Gu.REJECT ||
                  e.playlistsLoadingState === n.Gu.REJECT) &&
                (e.errorStatusCode === r.CN.NOT_FOUND ||
                  e.errorStatusCode === r.CN.BAD_REQUEST);
            return a || t;
          },
        }))
        .actions((e) => {
          let t = {
            getPlaylists: (0, l.ls)(function* (t) {
              let { page: a = 0, pageSize: i = 20 } = t,
                { playlistsResource: o, modelActionsLogger: d } = (0, l.dU)(e);
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
                    r = t + i,
                    d = e.playlistsData.slice(t, r),
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
                    (e.playlists = (0, l.pj)(
                      Array.from({ length: m.total }, () => null),
                    ));
                  let g = c.playlists.map(s.PV);
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
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
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
                (e.playlistsData = (0, l.pj)([])),
                (e.playlists = (0, l.pj)([])),
                (e.errorStatusCode = null);
            },
            getTag: (0, l.ls)(function* (a) {
              let { id: i, page: s = 0, pageSize: o = 20 } = a,
                { tagResource: d, modelActionsLogger: u } = (0, l.dU)(e);
              if (e.tagLoadingState !== n.Gu.PENDING)
                try {
                  var c;
                  e.tagLoadingState = n.Gu.PENDING;
                  let a = yield d.getPlaylistIds({ id: i });
                  (e.title =
                    null === (c = a.tag) || void 0 === c ? void 0 : c.name),
                    (e.playlistsData = (0, l.pj)(
                      a.ids.map((e) => ({ uid: e.uid, kind: e.kind })),
                    )),
                    e.tagLoadingState !== n.Gu.IDLE &&
                      (e.tagLoadingState = n.Gu.RESOLVE),
                    yield t.getPlaylists({ page: s, pageSize: o });
                } catch (t) {
                  u.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
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
            return s;
          },
        });
      var i = a(8759),
        l = a(33423),
        r = a(2365);
      let s = (0, l.Pi)(() => (0, i.jsx)(r.T, {}));
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
        l = a(35338),
        r = a(33423),
        s = a(11769),
        n = a(99616),
        o = a(65244),
        d = a(1918),
        u = a(70579),
        c = a(13236),
        m = a(20210),
        g = a(5674),
        p = a(44285),
        v = a(3537),
        h = a.n(v);
      let _ = (0, r.Pi)((e) => {
        var t, a, r;
        let { tagId: v } = e,
          { tag: _ } = (0, g.oR)(),
          { formatMessage: S } = (0, o.Z)(),
          [b, y] = (0, c.zU)(),
          C = (0, g.k6)();
        v || (0, s.notFound)();
        let f = (0, n.useCallback)(
          (e) => {
            _.getPlaylists({ page: e, pageSize: 20 });
          },
          [_],
        );
        _.tagLoadingState === g.Gu.IDLE &&
          (0, n.use)(_.getTag({ id: v, page: 0, pageSize: 20 })),
          _.isNotFound && (0, s.notFound)(),
          (0, n.useEffect)(
            () => () => {
              _.reset();
            },
            [_],
          );
        let E = (0, n.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(p.$_, { className: h().footer }) }),
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
                  className: h().root,
                  children: [
                    (0, i.jsx)(p.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: C.canBack,
                      children: (0, i.jsx)(d.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: _.title,
                      }),
                    }),
                    (0, i.jsx)(p.Wv, {
                      className: (0, l.W)(h().scrollContainer, h().important),
                      customComponents: E,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == _
                              ? void 0
                              : null === (t = _.playlists) || void 0 === t
                                ? void 0
                                : t[e],
                          l = S(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: S({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              m.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(p.hi, { "aria-label": l });
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
                      onGetDataByPage: f,
                      pageSize: 20,
                      totalRequests:
                        null !== (r = _.requests) && void 0 !== r ? r : 0,
                      listClassName: h().content,
                      itemClassName: h().item,
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
        l = a(96555),
        r = a(34603),
        s = a(95539),
        n = a(96169),
        o = a(5674);
      let d = l.V5.model("VolumeItemTrack", {
          type: l.V5.enumeration(Object.values(r.Vc)),
          id: l.V5.union(l.V5.string, l.V5.number),
          data: l.V5.maybeNull(s.le),
          position: l.V5.maybe(l.V5.number),
          isBest: l.V5.maybe(l.V5.boolean),
          loadingState: l.V5.enumeration(Object.values(o.Gu)),
        }),
        u = l.V5.model("VolumeItemText", {
          type: l.V5.literal(n.lf.TEXT),
          data: l.V5.maybeNull(l.V5.number),
        }),
        c = l.V5.union(u, d);
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
        l = a(35338),
        r = a(33423),
        s = a(99616),
        n = a(65244),
        o = a(57413),
        d = a(95539),
        u = a(5674),
        c = a(44285),
        m = a(63548),
        g = a.n(m);
      let p = (0, r.Pi)((e) => {
        let { className: t } = e,
          { formatMessage: a } = (0, n.Z)(),
          { album: r, sonataState: m } = (0, u.oR)(),
          p = (0, u.x5)({ pageId: u.Rh.PODCAST, blockId: u.aU.PODCAST }),
          v = (0, s.useMemo)(
            () =>
              r.lastEpisodes.map((e, t) =>
                r.isLoaded && e.data
                  ? (0, i.jsx)(
                      d.N6,
                      {
                        track: e.data,
                        playContextParams: {
                          contextData: {
                            type: o.Ak.Album,
                            meta: r.contextMeta,
                            from: p,
                          },
                          queueParams: {
                            index: r.trackIndexInContext.get(String(e.id)),
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
              r.lastEpisodes,
              r.isLoaded,
              r.contextMeta,
              r.trackIndexInContext,
              p,
              m.unloadedEntitiesDataFromModels,
            ],
          );
        return (0, i.jsxs)("div", {
          className: (0, l.W)(t, g().root),
          children: [
            (0, i.jsx)(c.ti, {
              className: g().blockHeader,
              title: a({ id: "entity-names.podcast-last-episodes" }),
            }),
            (0, i.jsx)("div", {
              role: "list",
              "aria-label": a({ id: "podcast.last-episodes-list" }),
              tabIndex: 0,
              children: v,
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
          return l.MixesGrid;
        },
        ZP: function () {
          return c;
        },
      });
      var i = a(31411),
        l = a(85250),
        r = a(96555),
        s = a(96431),
        n = a(34603),
        o = a(27951),
        d = a(5674);
      let u = (e) => ({
          items: (0, r.pj)(e.items.map((e) => (0, o.Fh)(e.data))),
        }),
        c = r.V5.model("Mixes", {
          loadingState: r.V5.enumeration(Object.values(d.Gu)),
          items: r.V5.array(o.zn),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
        })
          .actions((e) => ({
            getMixes: (0, r.ls)(function* (t) {
              let { landingResource: a, modelActionsLogger: i } = (0, r.dU)(e);
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
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
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
                a = e.errorStatusCode === s.CN.NOT_FOUND;
              return a || t;
            },
          }));
    },
    31411: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          Mixes: function () {
            return v;
          },
        });
      var i = a(8759),
        l = a(33423),
        r = a(99616),
        s = a(5674),
        n = a(65244),
        o = a(61617),
        d = a(27951),
        u = a(44285),
        c = a(67085),
        m = a.n(c);
      let g = (0, l.Pi)((e) => {
        let { isShimmerVisible: t, isShimmerActive: a, mixes: l } = e,
          { formatMessage: s } = (0, n.Z)(),
          c = (0, r.useMemo)(
            () =>
              t
                ? (0, u.Cl)({ isActive: a, withInfo: !1 })
                : l.map((e) =>
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
            [a, t, l],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(u.ti, {
              className: m().carouselHeader,
              title: s({ id: "entity-names.mixes" }),
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
      let v = (0, l.Pi)(() => {
        let { settings: e, search: t } = (0, s.oR)(),
          a = e.layout === s.t8.Mobile;
        return (t.mixes.loadingState === s.Gu.IDLE &&
          (0, r.use)(t.mixes.getMixes(!1)),
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
        l = a(33423),
        r = a(99616),
        s = a(2814),
        n = a(1918),
        o = a(27951),
        d = a(44285),
        u = a(54672),
        c = a.n(u);
      let m = (0, l.Pi)((e) => {
        let {
            isShimmerVisible: t,
            isShimmerActive: a,
            withTitle: l,
            mixes: u,
            shimmerCount: m = 5,
          } = e,
          g = (0, r.useMemo)(
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
            l &&
              (0, i.jsx)(n.Heading, {
                className: c().mixesTitle,
                size: "s",
                weight: "bold",
                variant: "h3",
                children: (0, i.jsx)(s.Z, { id: "entity-names.mixes" }),
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
          return eJ;
        },
      });
      var i,
        l,
        r,
        s,
        n,
        o,
        d,
        u,
        c,
        m,
        g,
        p,
        v,
        h = a(8759),
        _ = a(35338),
        S = a(33423),
        b = a(99616),
        y = a.t(b, 2),
        C = a(454),
        f = a(5674),
        E = a(57285);
      let N = () => {
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
      var x = a(29913),
        P = a.n(x),
        I = a(65244),
        L = a(2814),
        A = a(71747),
        k = a(15527),
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
                      l = "";
                    if ("string" == typeof t || "number" == typeof t) l += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (a = 0; a < t.length; a++)
                          t[a] && (i = e(t[a])) && (l && (l += " "), (l += i));
                      else for (a in t) t[a] && (l && (l += " "), (l += a));
                    }
                    return l;
                  })(e)) &&
                  (i && (i += " "), (i += t));
              return i;
            }
            a.r(t), a.d(t, { clsx: () => i, default: () => l });
            let l = i;
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
              l = Symbol.for("react.element"),
              r = Symbol.for("react.fragment"),
              s = Object.prototype.hasOwnProperty,
              n =
                i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              o = { key: !0, ref: !0, __self: !0, __source: !0 };
            function d(e, t, a) {
              var i,
                r = {},
                d = null,
                u = null;
              for (i in (void 0 !== a && (d = "" + a),
              void 0 !== t.key && (d = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                s.call(t, i) && !o.hasOwnProperty(i) && (r[i] = t[i]);
              if (e && e.defaultProps)
                for (i in (t = e.defaultProps))
                  void 0 === r[i] && (r[i] = t[i]);
              return {
                $$typeof: l,
                type: e,
                key: d,
                ref: u,
                props: r,
                _owner: n.current,
              };
            }
            (t.Fragment = r), (t.jsx = d), (t.jsxs = d);
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
              let l;
              return (
                (l = "orig" === t ? "orig" : i ? `m${t}x${t}` : `${t}x${t}`),
                a(e.replace("%%", l))
              );
            };
          },
          9665: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, a) {
                let i = a ?? e.currentTarget,
                  l = document.createElement("span"),
                  r = Math.max(i.clientWidth, i.clientHeight),
                  s = r / 2,
                  n = i.getBoundingClientRect(),
                  o =
                    0 === e.clientX
                      ? Math.round(n.width / 2)
                      : e.clientX - n.left,
                  d =
                    0 === e.clientY
                      ? Math.round(n.height / 2)
                      : e.clientY - n.top;
                (l.style.width = `${r}px`),
                  (l.style.height = `${r}px`),
                  (l.style.left = 0 === e.clientX ? "0px" : `${o - s}px`),
                  (l.style.top = `${d - s}px`),
                  l.classList.add(t);
                let u = i.getElementsByClassName(t)[0];
                u && u.remove(), i.insertBefore(l, i.firstChild);
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
            var l = a(1845);
            Object.defineProperty(t, "createAvatarUrl", {
              enumerable: !0,
              get: function () {
                return l.createAvatarUrl;
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
            let l = a(9541),
              r = a(5881),
              s = a(3871),
              n = i(a(9605));
            t.Navigation = function ({
              className: e,
              children: t,
              collapsed: a = !1,
              direction: i = "vertical",
              ...o
            }) {
              return (0, l.jsx)(s.NavigationProvider, {
                collapsed: a,
                direction: i,
                children: (0, l.jsx)("nav", {
                  className: (0, r.clsx)(
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
              l = a(810);
            (t.NavigationContext = (0, l.createContext)({
              collapsed: !1,
              direction: "vertical",
            })),
              (t.NavigationProvider = ({
                collapsed: e,
                direction: a,
                children: r,
              }) => {
                let s = (0, l.useMemo)(
                  () => ({ collapsed: e, direction: a }),
                  [e, a],
                );
                return (0, i.jsx)(t.NavigationContext.Provider, {
                  value: s,
                  children: r,
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
            let l = a(9541),
              r = a(810),
              s = a(5881),
              n = a(3871),
              o = i(a(4990));
            t.NavigationGroup = function ({ className: e, children: t, ...a }) {
              let i = (0, r.createRef)(),
                { direction: d } = (0, r.useContext)(n.NavigationContext);
              return (0, l.jsx)("ol", {
                ref: i,
                className: (0, s.clsx)(
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
            let l = a(9541),
              r = a(810),
              s = a(5881),
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
              let { collapsed: p, direction: v } = (0, r.useContext)(
                  n.NavigationContext,
                ),
                h = (0, r.useCallback)(
                  (e) => {
                    c && (0, o.createRipple)(e, d.default.ripple);
                  },
                  [c],
                ),
                [_, S] = r.Children.toArray(a.props.children),
                b = (0, r.useMemo)(
                  () =>
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)("div", {
                          className: d.default.iconContainer,
                          children: _,
                        }),
                        (0, l.jsx)("div", {
                          className: (0, s.clsx)(
                            d.default.textContainer,
                            d.default[`textContainer_direction_${v}`],
                            { [d.default.textContainer_selected]: i },
                          ),
                          children: S,
                        }),
                      ],
                    }),
                  [_, v, i, S],
                ),
                y = (0, r.cloneElement)(a, {
                  className: (0, s.clsx)(
                    d.default.item,
                    d.default[`item_direction_${v}`],
                    {
                      [d.default.item_selected]: i,
                      [d.default[`item_collapsed_${v}`]]: p,
                    },
                    a.props.className,
                  ),
                  children: b,
                });
              return (0, l.jsx)("li", {
                ref: t,
                className: (0, s.clsx)(
                  d.default.root,
                  d.default[`root_direction_${v}`],
                  d.default[`root_variant_${m}`],
                  {
                    [d.default.root_animate]: u,
                    [d.default.root_collapsed]: p,
                  },
                  e,
                ),
                "aria-current": !!i && "page",
                onClick: h,
                ...g,
                children: y,
              });
            }
            (t.NavigationItemComponent = u),
              (t.NavigationItem = (0, r.forwardRef)((e, t) =>
                (0, l.jsx)(u, { forwardRef: t, ...e }),
              ));
          },
          810: (e) => {
            e.exports = y;
          },
        },
        R = {};
      function D(e) {
        var t = R[e];
        if (void 0 !== t) return t.exports;
        var a = (R[e] = { exports: {} });
        return G[e].call(a.exports, a, a.exports, D), a.exports;
      }
      (D.d = (e, t) => {
        for (var a in t)
          D.o(t, a) &&
            !D.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      }),
        (D.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (D.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var V = {};
      Object.defineProperty(V, "X$", { value: !0 }),
        (V.Dx = V.KB = V.W_ = void 0),
        (i = D(9606)),
        Object.defineProperty(V, "W_", {
          enumerable: !0,
          get: function () {
            return i.Navigation;
          },
        }),
        (l = D(9477)),
        Object.defineProperty(V, "KB", {
          enumerable: !0,
          get: function () {
            return l.NavigationGroup;
          },
        }),
        (r = D(4306)),
        Object.defineProperty(V, "Dx", {
          enumerable: !0,
          get: function () {
            return r.NavigationItem;
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
        q = a(6955),
        z = a(34603),
        Z = a(45656),
        K = a(96437),
        J = a(96169);
      let Y = {
        FLIP: { fallbackAxisSideDirection: "start", padding: 20 },
        SHIFT: { padding: 20 },
        OFFSET: 20,
      };
      var Q = a(96213),
        X = a(53724),
        $ = a.n(X);
      let ee = (e) => {
          let { children: t, entityUrl: a, ariaLabel: i } = e;
          return a
            ? (0, h.jsx)(H.rU, {
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
              subtitle: l,
              contextMenu: r,
              isCollapsed: s,
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
                    (0, Q.m)(e, $().ripple);
              },
              [d],
            );
          return (0, h.jsxs)(H.Md, {
            ref: u,
            onClick: m,
            className: (0, _.W)($().root, { [$().root_withoutLink]: !o }, t),
            role: "listitem",
            children: [
              (0, h.jsxs)(ee, {
                entityUrl: o,
                ariaLabel: c,
                children: [
                  (0, h.jsx)("div", { className: $().cover, children: a }),
                  (0, h.jsx)("div", {
                    className: $().meta,
                    children: (0, h.jsxs)("div", {
                      className: (0, _.W)($().info, {
                        [$().info_collapsed]: s,
                        [$().info_animated]: n,
                      }),
                      children: [
                        (0, h.jsx)(U.Caption, {
                          "aria-hidden": !0,
                          className: $().title,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: i,
                        }),
                        (0, h.jsx)(U.Caption, {
                          "aria-hidden": !0,
                          className: $().subtitle,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          lineClamp: 1,
                          children: l,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, h.jsx)("div", {
                className: (0, _.W)($().contextMenu, {
                  [$().contextMenu_hidden]: s,
                }),
                children: r,
              }),
            ],
          });
        },
        ea = (0, b.forwardRef)((e, t) =>
          (0, h.jsx)(et, { forwardRef: t, ...e }),
        ),
        ei = (0, b.createContext)(null);
      var el = a(93088),
        er = a.n(el),
        es = a(52317);
      let en = (e) => {
          let { onPinClick: t, isPinned: a } = e,
            { isCollapsed: i } = (0, b.useContext)(ei) || {},
            { formatMessage: l } = (0, I.Z)(),
            [r, s] = (0, b.useState)(!1),
            n = (0, b.useCallback)((e) => {
              e.preventDefault(), e.stopPropagation();
            }, []);
          return (
            (0, f.ZP)(r),
            (0, h.jsx)(es.v2, {
              reference: (0, h.jsx)(k.z, {
                className: (0, _.W)(er().contextMenu, {
                  [er().contextMenu_visible]: r,
                }),
                onClick: n,
                withRipple: !1,
                variant: "text",
                "aria-label": l({ id: "interface-actions.context-menu" }),
                icon: (0, h.jsx)(T.J, { size: "xxs", variant: "more" }),
                tabIndex: i ? -1 : 0,
                "aria-hidden": i,
              }),
              offsetOptions: 10,
              open: r,
              returnFocus: !1,
              onOpenChange: s,
              children: (0, h.jsx)(H.Zd, { onClick: t, isPinned: a }),
            })
          );
        },
        eo = (e) => {
          var t;
          let { className: a, album: i, forwardRef: l } = e,
            { formatMessage: r } = (0, I.Z)(),
            { isCollapsed: s, withCollapseAnimation: n } =
              null !== (t = (0, b.useContext)(ei)) && void 0 !== t ? t : {},
            o = (0, J.BV)(i),
            d = (0, b.useMemo)(
              () =>
                (0, h.jsx)(K.Paper, {
                  className: er().cover,
                  radius: "xs",
                  children: (0, h.jsxs)(M.u, {
                    flipOptions: Y.FLIP,
                    shiftOptions: Y.SHIFT,
                    offsetOptions: Y.OFFSET,
                    placement: "right",
                    enabled: s,
                    children: [
                      (0, h.jsx)(Z.Image, {
                        className: er().image,
                        "aria-hidden": !0,
                        src: i.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, h.jsx)(M._v, {
                        className: er().tooltip,
                        children: (0, h.jsx)(U.Caption, {
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
              [i.coverUri, i.title, s],
            );
          return (0, h.jsx)(ea, {
            ref: l,
            ariaLabel: r(
              { id: "entity-names.album-name" },
              { albumName: i.title },
            ),
            className: (0, _.W)(er().root, a),
            title: i.title,
            entityUrl: i.url,
            subtitle: (0, h.jsx)(L.Z, { id: "entity-names.album" }),
            cover: d,
            isCollapsed: !!s,
            withCollapseAnimation: !!n,
            contextMenu: (0, h.jsx)(en, {
              onPinClick: o,
              isPinned: i.isPinned,
            }),
          });
        },
        ed = (0, b.forwardRef)((e, t) =>
          (0, h.jsx)(eo, { forwardRef: t, ...e }),
        );
      var eu = a(81446);
      let ec = (e) => {
          var t;
          let { className: a, artist: i, forwardRef: l } = e,
            { formatMessage: r } = (0, I.Z)(),
            { isCollapsed: s, withCollapseAnimation: n } =
              null !== (t = (0, b.useContext)(ei)) && void 0 !== t ? t : {},
            o = (0, eu.BV)(i),
            d = (0, b.useMemo)(
              () =>
                (0, h.jsx)(K.Paper, {
                  className: er().cover,
                  radius: "round",
                  children: (0, h.jsxs)(M.u, {
                    flipOptions: Y.FLIP,
                    shiftOptions: Y.SHIFT,
                    offsetOptions: Y.OFFSET,
                    placement: "right",
                    enabled: s,
                    children: [
                      (0, h.jsx)(Z.Image, {
                        className: er().image,
                        "aria-hidden": !0,
                        src: i.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, h.jsx)(M._v, {
                        className: er().tooltip,
                        children: (0, h.jsx)(U.Caption, {
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
              [i.coverUri, i.name, s],
            );
          return (0, h.jsx)(ea, {
            ref: l,
            ariaLabel: r(
              { id: "entity-names.artist-name" },
              { artistName: i.name },
            ),
            className: (0, _.W)(er().root, a),
            title: i.name,
            entityUrl: i.url,
            subtitle: (0, h.jsx)(L.Z, { id: "entity-names.artist" }),
            cover: d,
            isCollapsed: !!s,
            withCollapseAnimation: !!n,
            contextMenu: (0, h.jsx)(en, {
              onPinClick: o,
              isPinned: i.isPinned,
            }),
          });
        },
        em = (0, b.forwardRef)((e, t) =>
          (0, h.jsx)(ec, { forwardRef: t, ...e }),
        );
      var eg = a(3515);
      let ep = (e) => {
          var t;
          let { className: a, playlist: i, forwardRef: l } = e,
            { formatMessage: r } = (0, I.Z)(),
            { isCollapsed: s, withCollapseAnimation: n } =
              null !== (t = (0, b.useContext)(ei)) && void 0 !== t ? t : {},
            o = (0, eg.BV)(i),
            d = (0, b.useMemo)(
              () =>
                (0, h.jsx)(K.Paper, {
                  className: er().cover,
                  radius: "xs",
                  children: (0, h.jsxs)(M.u, {
                    flipOptions: Y.FLIP,
                    shiftOptions: Y.SHIFT,
                    offsetOptions: Y.OFFSET,
                    placement: "right",
                    enabled: s,
                    children: [
                      (0, h.jsx)(Z.Image, {
                        "aria-hidden": !0,
                        className: er().image,
                        src: i.coverUri,
                        size: 100,
                        fit: "cover",
                        withAvatarReplace: !0,
                      }),
                      (0, h.jsx)(M._v, {
                        className: er().tooltip,
                        children: (0, h.jsx)(U.Caption, {
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
              [s, i.coverUri, i.title],
            );
          return (0, h.jsx)(ea, {
            ref: l,
            ariaLabel: r(
              { id: "entity-names.playlist-name" },
              { playlistName: i.title },
            ),
            className: (0, _.W)(er().root, a),
            title: i.title,
            entityUrl: i.url,
            subtitle: (0, h.jsx)(L.Z, { id: "entity-names.playlist" }),
            cover: d,
            isCollapsed: !!s,
            withCollapseAnimation: !!n,
            contextMenu: (0, h.jsx)(en, {
              onPinClick: o,
              isPinned: i.isPinned,
            }),
          });
        },
        ev = (0, b.forwardRef)((e, t) =>
          (0, h.jsx)(ep, { forwardRef: t, ...e }),
        );
      var eh = a(84290);
      let e_ = (0, S.Pi)((e) => {
          var t, a;
          let { className: i, vibe: l, forwardRef: r } = e,
            s = (0, b.useId)(),
            { formatMessage: n } = (0, I.Z)(),
            { isCollapsed: o, withCollapseAnimation: d } =
              null !== (a = (0, b.useContext)(ei)) && void 0 !== a ? a : {},
            [u, c] = (0, b.useState)(!1),
            m = (0, eh.BV)(l),
            {
              isPlaying: g,
              togglePlay: p,
              isCurrent: v,
            } = (0, f.Qh)({
              seeds: l.seeds,
              pageIdForFrom: f.Rh.SIDEBAR,
              blockIdForFrom: f.aU.RADIO,
            }),
            S = (0, b.useCallback)(() => {
              c(!0),
                p().finally(() => {
                  c(!1);
                });
            }, [p]),
            y = (0, b.useMemo)(
              () =>
                (0, h.jsx)(U.Caption, {
                  id: s,
                  variant: "span",
                  "aria-label": n(
                    { id: "entity-names.vibe-name" },
                    { vibeName: l.title },
                  ),
                  type: "controls",
                  size: "s",
                  lineClamp: 1,
                  children: l.title,
                }),
              [n, s, l.title],
            ),
            C = (0, b.useMemo)(() => {
              var e;
              let t = {
                "--vibe-background-color":
                  null === (e = l.colors) || void 0 === e ? void 0 : e.average,
              };
              return (0, h.jsxs)(M.u, {
                flipOptions: Y.FLIP,
                shiftOptions: Y.SHIFT,
                offsetOptions: Y.OFFSET,
                placement: "right",
                enabled: o,
                children: [
                  (0, h.jsx)("div", {
                    style: t,
                    className: er().animation,
                    children: (0, h.jsx)(H.Df, {
                      isCurrent: v,
                      isPlaying: g,
                      isAvailable: !0,
                      isPlayButtonLoading: u,
                      onPlayButtonClick: S,
                      title: l.title,
                      shouldShowImage: !1,
                      ariaDescribedBy: s,
                    }),
                  }),
                  (0, h.jsx)(M._v, {
                    className: er().tooltip,
                    children: (0, h.jsx)(U.Caption, {
                      variant: "span",
                      type: "text",
                      size: "s",
                      weight: "medium",
                      lineClamp: 1,
                      children: l.title,
                    }),
                  }),
                ],
              });
            }, [
              S,
              o,
              v,
              u,
              g,
              s,
              null === (t = l.colors) || void 0 === t ? void 0 : t.average,
              l.title,
            ]);
          return (0, h.jsx)(ea, {
            ref: r,
            onDoubleClick: p,
            className: (0, _.W)(er().root, i),
            isCollapsed: !!o,
            contextMenu: (0, h.jsx)(en, {
              onPinClick: m,
              isPinned: l.isPinned,
            }),
            withCollapseAnimation: !!d,
            title: y,
            subtitle: (0, h.jsx)(L.Z, { id: "entity-names.my-vibe" }),
            cover: C,
          });
        }),
        eS = (0, b.forwardRef)((e, t) =>
          (0, h.jsx)(e_, { forwardRef: t, ...e }),
        );
      var eb = a(13774),
        ey = a.n(eb);
      let eC = (0, S.Pi)((e) => {
        var t, a;
        let { className: i, withCollapseAnimation: l, isCollapsed: r } = e,
          { formatMessage: s } = (0, I.Z)(),
          { pinsCollection: n } = (0, f.oR)(),
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
            () => ({ withCollapseAnimation: l, isCollapsed: r }),
            [r, l],
          );
        return (0, h.jsx)(ei.Provider, {
          value: u,
          children: (0, h.jsx)("div", {
            className: (0, _.W)(ey().root, i),
            children: (0, h.jsx)("div", {
              role: "list",
              "aria-label": s({ id: "navigation.pins-list" }),
              className: ey().content,
              children: (0, h.jsx)(q.Z, {
                component: null,
                children:
                  null === (a = n.items) || void 0 === a
                    ? void 0
                    : a.map((e, t) => {
                        switch (e.type) {
                          case z.Qm.ALBUM:
                            return (0, h.jsx)(
                              A.Z,
                              {
                                classNames: d,
                                nodeRef: null == o ? void 0 : o[t],
                                timeout: 270,
                                children: (0, h.jsx)(ed, {
                                  ref: null == o ? void 0 : o[t],
                                  album: e.data,
                                }),
                              },
                              e.data.pinId,
                            );
                          case z.Qm.ARTIST:
                            return (0, h.jsx)(
                              A.Z,
                              {
                                classNames: d,
                                nodeRef: null == o ? void 0 : o[t],
                                timeout: 270,
                                children: (0, h.jsx)(em, {
                                  ref: null == o ? void 0 : o[t],
                                  artist: e.data,
                                }),
                              },
                              e.data.pinId,
                            );
                          case z.Qm.PLAYLIST:
                            return (0, h.jsx)(
                              A.Z,
                              {
                                classNames: d,
                                nodeRef: null == o ? void 0 : o[t],
                                timeout: 270,
                                children: (0, h.jsx)(ev, {
                                  ref: null == o ? void 0 : o[t],
                                  playlist: e.data,
                                }),
                              },
                              e.data.pinId,
                            );
                          case z.Qm.WAVE:
                            return (0, h.jsx)(
                              A.Z,
                              {
                                classNames: d,
                                nodeRef: null == o ? void 0 : o[t],
                                timeout: 270,
                                children: (0, h.jsx)(eS, {
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
      function ef() {
        return (ef = Object.assign
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
            ef(
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
                s ||
                  (s = b.createElement("rect", {
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
            v ||
              (v = b.createElement(
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
        eN = a(36509),
        ex = a.n(eN);
      let eP = (e) => {
          let { className: t, forwardRef: a } = e,
            { formatMessage: i } = (0, I.Z)();
          return (0, h.jsxs)("section", {
            className: (0, _.W)(ex().root, t),
            ref: a,
            "aria-label": i({ id: "plusbar.subscription-activation" }),
            children: [
              (0, h.jsx)(eE, { className: ex().logos, "aria-hidden": "true" }),
              (0, h.jsx)(U.Caption, {
                className: ex().title,
                variant: "div",
                size: "m",
                weight: "medium",
                children: (0, h.jsx)(L.Z, {
                  id: "plusbar.title",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, h.jsx)(U.Caption, {
                className: ex().addition,
                variant: "div",
                size: "xs",
                weight: "normal",
                children: (0, h.jsx)(L.Z, {
                  id: "plusbar.text",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
              }),
              (0, h.jsxs)("div", {
                className: ex().buttons,
                children: [
                  (0, h.jsx)(k.z, {
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    color: "plus",
                    children: "30 дней бесплатно",
                  }),
                  (0, h.jsx)(k.z, {
                    isBlock: !0,
                    radius: "xxxl",
                    size: "m",
                    variant: "text",
                    color: "primary",
                    withRipple: !1,
                    children: (0, h.jsx)(L.Z, {
                      id: "interface-actions.more-details",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        eI = (0, b.forwardRef)((e, t) =>
          (0, h.jsx)(eP, { forwardRef: t, ...e }),
        );
      var eL = a(27206),
        eA = a.n(eL);
      let ek = { fallbackAxisSideDirection: "start", padding: 8 },
        eT = { padding: 8 },
        ej = {
          exit: eA().plusButtonContainer_exit,
          exitActive: eA().plusButtonContainer_exit_active,
          enter: eA().plusButtonContainer_enter,
          enterActive: eA().plusButtonContainer_enter_active,
        },
        eG = {
          exit: eA().plusBar_exit,
          exitActive: eA().plusBar_exit_active,
          enter: eA().plusBar_enter,
          enterActive: eA().plusBar_enter_active,
        },
        eR = (0, S.Pi)((e) => {
          let {
              className: t,
              collapsed: a,
              shownAnimation: i,
              handleClick: l,
            } = e,
            r = N(),
            s = (0, f.hJ)(),
            { formatMessage: n } = (0, I.Z)(),
            { user: o, experiments: d } = (0, f.oR)(),
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
                non_music: n({ id: "entity-names.podcasts" }),
              }),
              [n],
            ),
            g = (0, b.useMemo)(
              () =>
                (0, h.jsx)(
                  w,
                  {
                    children: (0, f.sQ)(d).map((e) =>
                      (0, h.jsx)(
                        B,
                        {
                          selected: s(e.path),
                          shownAnimation: i,
                          variant: "main",
                          children: (0, h.jsxs)(H.rU, {
                            href: e.path,
                            children: [
                              (0, h.jsxs)(M.u, {
                                flipOptions: ek,
                                shiftOptions: eT,
                                offsetOptions: 8,
                                placement: "right",
                                enabled: a,
                                children: [
                                  (0, h.jsx)(T.J, {
                                    variant: s(e.path)
                                      ? e.iconSelected
                                      : e.icon,
                                    size: "m",
                                  }),
                                  (0, h.jsx)(M._v, {
                                    children: (0, h.jsx)(U.Caption, {
                                      variant: "span",
                                      type: "text",
                                      size: "s",
                                      weight: "medium",
                                      children: m[e.id],
                                    }),
                                  }),
                                ],
                              }),
                              (0, h.jsx)(U.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                className: (0, _.W)({
                                  [eA().title_animate]: i,
                                  [eA().title_collapsed]: a,
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
              [s, a, d, d.loadingState, i, m],
            ),
            p = (0, b.useMemo)(
              () =>
                r
                  ? null
                  : (0, h.jsxs)(
                      M.u,
                      {
                        flipOptions: ek,
                        shiftOptions: eT,
                        offsetOptions: 8,
                        placement: "right",
                        children: [
                          (0, h.jsx)(k.z, {
                            className: (0, _.W)(
                              eA().collapseButton,
                              eA().important,
                            ),
                            "aria-label": c,
                            radius: "round",
                            color: "secondary",
                            size: "s",
                            icon: (0, h.jsx)(T.J, {
                              variant: a ? "uncollapse" : "collapse",
                              size: "xs",
                            }),
                            onClick: l,
                          }),
                          (0, h.jsx)(M._v, {
                            className: (0, _.W)({
                              [eA().collapseButtonTooltip_hidden]: !a,
                            }),
                            children: c,
                          }),
                        ],
                      },
                      "collapseTooltip",
                    ),
              [r, c, a, l],
            ),
            v = (0, b.useRef)(null),
            S = (0, b.useMemo)(
              () =>
                (0, h.jsx)(A.Z, {
                  nodeRef: v,
                  in: a,
                  timeout: 150,
                  classNames: ej,
                  unmountOnExit: !0,
                  children: (0, h.jsx)("div", {
                    className: eA().plusButtonContainer,
                    ref: v,
                    children: (0, h.jsxs)(M.u, {
                      flipOptions: ek,
                      shiftOptions: eT,
                      offsetOptions: 8,
                      placement: "right",
                      enabled: a,
                      children: [
                        (0, h.jsx)(k.z, {
                          variant: "text",
                          withRipple: !1,
                          size: "xxs",
                          icon: (0, h.jsx)(T.J, {
                            variant: "plusOutlined",
                            size: "m",
                          }),
                          className: (0, _.W)(eA().button, eA().important),
                          "aria-label": n({
                            id: "plusbar.subscription-activation",
                          }),
                        }),
                        (0, h.jsx)(M._v, {
                          children: (0, h.jsx)(U.Caption, {
                            variant: "span",
                            type: "text",
                            size: "s",
                            weight: "medium",
                            children: (0, h.jsx)(L.Z, {
                              id: "plusbar.subscription-activation",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              [v, a, n],
            ),
            y = (0, b.useRef)(null),
            C = (0, b.useMemo)(
              () =>
                (0, h.jsx)(A.Z, {
                  nodeRef: y,
                  in: !a,
                  timeout: 150,
                  classNames: eG,
                  unmountOnExit: !0,
                  children: (0, h.jsx)(eI, {
                    className: eA().plusBar,
                    forwardRef: y,
                  }),
                }),
              [a],
            );
          return (0, h.jsxs)("div", {
            className: (0, _.W)(eA().root, t),
            children: [
              (0, h.jsx)(H.rU, {
                href: "/",
                className: eA().logoLink,
                children: (0, h.jsx)(j.T, {
                  style: u,
                  className: (0, _.W)(eA().logo),
                  collapsed: a,
                  shownAnimation: i,
                  collapsedButton: p,
                }),
              }),
              (0, h.jsx)(O, {
                className: (0, _.W)(eA().navigation, {
                  [eA().navigation_withoutPins]: !d.checkExperiment(
                    f.pe.WebPins,
                    "on",
                  ),
                }),
                collapsed: a,
                "aria-label": n({ id: "navigation.main-menu" }),
                children: g,
              }),
              d.checkExperiment(f.pe.WebPins, "on") &&
                (0, h.jsx)(eC, {
                  isCollapsed: a,
                  withCollapseAnimation: !!i,
                  className: eA().pinsList,
                }),
              !o.hasPlus &&
                (0, h.jsxs)("div", { className: eA().plus, children: [C, S] }),
              (0, h.jsx)(b.Suspense, {
                children: (0, h.jsx)("div", {
                  className: eA().user,
                  children: (0, h.jsx)(W.Iw, {
                    metaClassName: (0, _.W)(eA().userMeta, {
                      [eA().userMeta_animate]: i,
                      [eA().userMeta_collapsed]: a,
                    }),
                    variant: "desktop",
                    withMeta: !0,
                  }),
                }),
              }),
            ],
          });
        });
      var eD = a(12484),
        eV = a.n(eD);
      let eO = (0, S.Pi)((e) => {
          let { className: t } = e,
            a = (0, f.hJ)(),
            { experiments: i } = (0, f.oR)(),
            { formatMessage: l } = (0, I.Z)(),
            r = l({ id: "navigation.main-menu" }),
            s = (0, b.useMemo)(
              () => ({
                search: l({ id: "navigation.search" }),
                main: l({ id: "navigation.page-main" }),
                collection: l({ id: "navigation.page-collection" }),
              }),
              [l],
            );
          return (0, h.jsx)("div", {
            className: (0, _.W)(eV().root, t),
            children: (0, h.jsx)(O, {
              collapsed: !0,
              direction: "horizontal",
              "aria-label": r,
              children: (0, h.jsx)(w, {
                children: (0, h.jsxs)(h.Fragment, {
                  children: [
                    (0, f.sQ)(i).map((e) =>
                      (0, h.jsx)(
                        B,
                        {
                          selected: a(e.path),
                          children: (0, h.jsxs)(H.rU, {
                            href: e.path,
                            children: [
                              (0, h.jsx)(T.J, {
                                variant: a(e.path) ? e.iconSelected : e.icon,
                                size: "m",
                              }),
                              (0, h.jsx)(U.Caption, {
                                variant: "span",
                                type: "controls",
                                size: "m",
                                weight: "medium",
                                lineClamp: 1,
                                children: s[e.id],
                              }),
                            ],
                          }),
                        },
                        e.id,
                      ),
                    ),
                    (0, h.jsx)(B, {
                      children: (0, h.jsx)(W.Iw, {
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
            a = (0, f.uK)(),
            i = a.get(f.V0),
            l = N(),
            { settings: r } = (0, f.oR)(),
            [s, n] = (0, b.useState)(i.get(f.BU.NavbarCollapsed) || !1),
            [o, d] = (0, b.useState)(!1),
            u = (0, b.useMemo)(
              () => (r.layout === f.t8.Mobile ? eO : eR),
              [r.layout],
            ),
            c = (0, b.useCallback)(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  i.set(f.BU.NavbarCollapsed, !s, { expires: 180 }),
                  n(!s),
                  d(!0);
              },
              [s, i],
            );
          return (0, h.jsx)("aside", {
            className: (0, _.W)(P().root, { [P().root_collapsed]: s || l }, t),
            ...(0, C.BA)(C.QM.navbar.NAVBAR),
            children: (0, h.jsx)(u, {
              handleClick: c,
              collapsed: s || l,
              shownAnimation: o,
            }),
          });
        });
      var eB = a(96555);
      let eM = eB.V5.model("PinAlbumItemModel", {
          type: eB.V5.literal(z.Qm.ALBUM),
          data: J.KX,
        }),
        eU = eB.V5.model("PinArtistItemModel", {
          type: eB.V5.literal(z.Qm.ARTIST),
          data: eu.Go,
        }),
        eF = eB.V5.model("PinPlaylistItemModel", {
          type: eB.V5.literal(z.Qm.PLAYLIST),
          data: eg.Cd,
        }),
        eW = eB.V5.model("PinVibeItemModel", {
          type: eB.V5.literal(z.Qm.WAVE),
          data: eh.KW,
        }),
        eH = eB.V5.union(eM, eU, eF, eW),
        eq = (e) => "object" == typeof e && e && "type" in e;
      var ez = a(96911),
        eZ = a(20210);
      let eK = (e) => {
          switch (e.type) {
            case z.Qm.WAVE:
              return (0, eB.pj)({ type: z.Qm.WAVE, data: (0, eh.FF)(e.data) });
            case z.Qm.PLAYLIST:
              return (0, eB.pj)({
                type: z.Qm.PLAYLIST,
                data: (0, eZ.RE)({ playlist: e.data }),
              });
            case z.Qm.ARTIST:
              return (0, eB.pj)({
                type: z.Qm.ARTIST,
                data: (0, eu.tR)(e.data),
              });
            case z.Qm.ALBUM:
              return (0, eB.pj)({
                type: z.Qm.ALBUM,
                data: (0, ez.cO)({ album: e.data }),
              });
          }
        },
        eJ = eB.V5.model("Pins", {
          loadingState: eB.V5.enumeration(Object.values(f.Gu)),
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
                var a, i, l, r;
                if (
                  (null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.length) === 30
                ) {
                  let t =
                    null === (r = e.items) || void 0 === r ? void 0 : r.pop();
                  void 0 !== t && e.index.delete(t.data.pinId);
                }
                null === (i = e.items) || void 0 === i || i.unshift(eK(t));
                let s =
                  null === (l = e.items) || void 0 === l ? void 0 : l.at(0);
                s && e.index.set(s.data.pinId, !0);
              },
              getData: (0, eB.ls)(function* () {
                let { pinsResource: t, modelActionsLogger: a } = (0, eB.dU)(e);
                if (e.loadingState !== f.Gu.PENDING)
                  try {
                    var i;
                    e.loadingState = f.Gu.PENDING;
                    let a = yield t.getPins();
                    (e.items = (0, eB.pj)(a.pins.map(eK))),
                      null === (i = e.items) ||
                        void 0 === i ||
                        i.forEach((t) => {
                          e.index.set(t.data.pinId, !0);
                        }),
                      (e.loadingState = f.Gu.RESOLVE);
                  } catch (t) {
                    (e.loadingState = f.Gu.REJECT), a.error(t);
                  }
              }),
              toggleAlbumPin: (0, eB.ls)(function* (a, i) {
                let { pinResource: l, modelActionsLogger: r } = (0, eB.dU)(e);
                if (e.loadingState !== f.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(i))
                      return (r = yield l.unpinAlbum(a)), t.deletePin(i), r;
                    return (r = yield l.pinAlbum(a)), eq(r) && t.addPin(r), r;
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
              toggleArtistPin: (0, eB.ls)(function* (a, i) {
                let { pinResource: l, modelActionsLogger: r } = (0, eB.dU)(e);
                if (e.loadingState !== f.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(i))
                      return (r = yield l.unpinArtist(a)), t.deletePin(i), r;
                    return (r = yield l.pinArtist(a)), eq(r) && t.addPin(r), r;
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
              togglePlaylistPin: (0, eB.ls)(function* (a, i) {
                let { pinResource: l, modelActionsLogger: r } = (0, eB.dU)(e);
                if (e.loadingState !== f.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(i))
                      return (r = yield l.unpinPlaylist(a)), t.deletePin(i), r;
                    return (
                      (r = yield l.pinPlaylist(a)), eq(r) && t.addPin(r), r
                    );
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
              toggleVibePin: (0, eB.ls)(function* (a, i) {
                let { pinResource: l, modelActionsLogger: r } = (0, eB.dU)(e);
                if (e.loadingState !== f.Gu.PENDING)
                  try {
                    let r;
                    if (e.isPinned(i))
                      return (r = yield l.unpinWave(a)), t.deletePin(i), r;
                    return (r = yield l.pinWave(a)), eq(r) && t.addPin(r), r;
                  } catch (e) {
                    r.error(e);
                    return;
                  }
              }),
            };
            return t;
          });
    },
    45635: function (e, t, a) {
      "use strict";
      a.d(t, {
        _: function () {
          return Y;
        },
        L: function () {
          return h;
        },
      });
      var i,
        l,
        r = a(96555),
        s = a(96431),
        n = a(95539),
        o = a(5674),
        d = a(65704),
        u = a(81446);
      let c = (e, t) => {
          var a, i;
          let l = null == t ? void 0 : t.map(u.tR);
          return (0, r.pj)({
            id: String(e.id),
            title: e.title,
            coverUri: null === (a = e.cover) || void 0 === a ? void 0 : a.uri,
            averageColor:
              null === (i = e.cover) || void 0 === i ? void 0 : i.color,
            albumArtists: l,
          });
        },
        m = (e) => {
          var t, a;
          return (0, r.pj)({
            id: String(e.id),
            title: e.name,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            averageColor:
              null === (a = e.cover) || void 0 === a ? void 0 : a.color,
          });
        },
        g = (e) => {
          var t, a;
          return (0, r.pj)({
            id: "".concat(e.uid, ":").concat(e.kind),
            uuid: e.playlistUuid,
            title: e.title,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            averageColor:
              null === (a = e.cover) || void 0 === a ? void 0 : a.color,
          });
        },
        p = (e) => {
          var t;
          return (0, r.pj)({
            id: String(e.id),
            title: e.title,
            coverUri: e.coverUri,
            averageColor:
              null === (t = e.derivedColors) || void 0 === t
                ? void 0
                : t.average,
          });
        };
      ((i = l || (l = {})).ALBUM = "album"),
        (i.ARTIST = "artist"),
        (i.PLAYLIST = "playlist"),
        (i.TRACK = "track");
      let v = r.V5.model("TrailerMeta", {
          id: r.V5.string,
          title: r.V5.maybe(r.V5.string),
          uuid: r.V5.maybe(r.V5.string),
          coverUri: r.V5.maybe(r.V5.string),
          averageColor: r.V5.maybe(r.V5.string),
          albumArtists: r.V5.maybe(r.V5.array(u.Go)),
        }).views((e) => ({
          getUrl(t) {
            switch (t) {
              case l.ALBUM:
                return "/album/".concat(e.id);
              case l.ARTIST:
                return "/artist/".concat(e.id);
              case l.PLAYLIST:
                return "/playlist/".concat(e.uuid);
              case l.TRACK:
                return;
            }
          },
        })),
        h = r.V5.model("Trailer", {
          loadingState: r.V5.enumeration(Object.values(o.Gu)),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          modal: d.KL,
          variant: r.V5.maybeNull(r.V5.enumeration(Object.values(l))),
          tracks: r.V5.maybeNull(r.V5.array(n.le)),
          meta: r.V5.maybeNull(v),
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
              var t;
              let a =
                  e.loadingState === o.Gu.RESOLVE &&
                  (null === (t = e.tracks) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                i = e.errorStatusCode === s.CN.NOT_FOUND;
              return a || i;
            },
          }))
          .actions((e) => {
            let t = {
              openArtistTrailer(a) {
                t.reset(),
                  (e.variant = l.ARTIST),
                  e.modal.open(),
                  t.getArtistTrailer({ artistId: a });
              },
              openAlbumTrailer(a) {
                t.reset(),
                  (e.variant = l.ALBUM),
                  e.modal.open(),
                  t.getAlbumTrailer({ albumId: a });
              },
              openPlaylistTrailer(a, i) {
                t.reset(),
                  (e.variant = l.PLAYLIST),
                  e.modal.open(),
                  t.getPlaylistTrailer({ userId: a, playlistKind: i });
              },
              openTrackTrailer(a) {
                t.reset(),
                  (e.variant = l.TRACK),
                  e.modal.open(),
                  t.getTrackTrailer({ trackId: a });
              },
              getArtistTrailer: (0, r.ls)(function* (a) {
                let { artistsResource: i } = (0, r.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    e.loadingState = o.Gu.PENDING;
                    let { artist: t, trailer: l } = yield i.getTrailer(a);
                    l.tracks &&
                      (e.tracks = (0, r.pj)(
                        l.tracks.map((e) =>
                          (0, n.Vt)(e, { isSmartPreview: !0 }),
                        ),
                      )),
                      t && (e.meta = m(t)),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getAlbumTrailer: (0, r.ls)(function* (a) {
                let { albumResource: i } = (0, r.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    e.loadingState = o.Gu.PENDING;
                    let {
                      album: t,
                      artists: l,
                      trailer: s,
                    } = yield i.getTrailer(a);
                    s.tracks &&
                      (e.tracks = (0, r.pj)(
                        s.tracks.map((e) =>
                          (0, n.Vt)(e, { isSmartPreview: !0 }),
                        ),
                      )),
                      t && (e.meta = c(t, l)),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getPlaylistTrailer: (0, r.ls)(function* (a) {
                let { usersResource: i } = (0, r.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    e.loadingState = o.Gu.PENDING;
                    let { playlist: t, trailer: l } =
                      yield i.getPlaylistTrailer(a);
                    l.tracks &&
                      (e.tracks = (0, r.pj)(
                        l.tracks.map((e) =>
                          (0, n.Vt)(e, { isSmartPreview: !0 }),
                        ),
                      )),
                      t && (e.meta = g(t)),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              getTrackTrailer: (0, r.ls)(function* (a) {
                let { tracksResource: i } = (0, r.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    e.loadingState = o.Gu.PENDING;
                    let { track: t } = yield i.getTrailer(a);
                    t &&
                      ((e.tracks = (0, r.pj)([
                        (0, n.Vt)(t, { isSmartPreview: !0 }),
                      ])),
                      (e.meta = p(t))),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (e) {
                    t.handleError(e);
                  }
              }),
              handleError(t) {
                let { modelActionsLogger: a } = (0, r.dU)(e);
                a.error(t),
                  t instanceof s.du &&
                    (t.statusCode === s.CN.NOT_FOUND ||
                      t.statusCode === s.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = s.CN.NOT_FOUND),
                  e.loadingState !== o.Gu.IDLE &&
                    (e.loadingState = o.Gu.REJECT);
              },
              reset() {
                (e.loadingState = o.Gu.IDLE),
                  (e.errorStatusCode = null),
                  (e.variant = null),
                  (e.tracks = null),
                  (e.meta = null);
              },
            };
            return t;
          });
      var _ = a(8759),
        S = a(33423),
        b = a(65244),
        y = a(15527),
        C = a(14581),
        f = a(31476),
        E = a(35338),
        N = a(99616),
        x = a(44285),
        P = a(57413);
      let I = (e) => {
          let { variant: t, id: a, from: i, uuid: r } = e;
          switch (t) {
            case l.ALBUM:
              return {
                type: P.Ak.Album,
                trailer: !0,
                meta: { id: a },
                from: i,
              };
            case l.ARTIST:
              return {
                type: P.Ak.Artist,
                trailer: !0,
                meta: { id: a },
                from: i,
              };
            case l.PLAYLIST:
              return {
                type: P.Ak.Playlist,
                trailer: !0,
                meta: { id: String(a), uuid: r },
                from: i,
              };
            case l.TRACK:
              return {
                type: P.Ak.Various,
                trailer: !0,
                meta: { id: a },
                from: i,
              };
          }
        },
        L = (e, t) => {
          let a = e.albums.find((e) => String(e.id) === t);
          if (a) {
            var i, l;
            return {
              trackPosition:
                null === (i = a.trackPosition) || void 0 === i
                  ? void 0
                  : i.index,
              isBest:
                null === (l = a.bestAlbumTracks) || void 0 === l
                  ? void 0
                  : l.includes(Number(e.id)),
            };
          }
          return {};
        };
      var A = a(2814),
        k = a(12670),
        T = a(76560),
        j = a.n(T);
      let G = (e) => {
          let { isActive: t, className: a, withNavigateButton: i } = e;
          return (0, _.jsxs)("div", {
            className: (0, E.W)(j().root, a),
            children: [
              (0, _.jsx)(k.Shimmer, {
                isActive: t,
                radius: "xxxl",
                className: j().playButtonShimmer,
              }),
              i &&
                (0, _.jsx)(k.Shimmer, {
                  isActive: t,
                  radius: "xxxl",
                  className: j().linkButtonShimmer,
                }),
            ],
          });
        },
        R = (0, S.Pi)((e) => {
          let {
              variant: t,
              withNavigateButton: a,
              isShimmerVisible: i,
              isShimmerActive: l,
              meta: r,
              className: s,
            } = e,
            n = (0, o.s0)(null == r ? void 0 : r.getUrl(t)),
            d = (0, N.useMemo)(
              () =>
                (0, _.jsxs)("div", {
                  className: (0, E.W)(j().root, s),
                  children: [
                    (0, _.jsx)(y.z, {
                      radius: "xxxl",
                      size: "default",
                      color: "secondary",
                      icon: (0, _.jsx)(C.J, { variant: "play", size: "xxxs" }),
                      className: j().button,
                      children: (0, _.jsx)(A.Z, {
                        id: "trailer.listen-full-version",
                      }),
                    }),
                    a &&
                      (0, _.jsx)(y.z, {
                        radius: "xxxl",
                        size: "default",
                        color: "secondary",
                        onClick: n,
                        className: j().button,
                        children: (0, _.jsx)(A.Z, { id: "trailer.navigate" }),
                      }),
                  ],
                }),
              [s, n, a],
            );
          return i
            ? G({ isActive: l, withNavigateButton: a, className: s })
            : d;
        });
      var D = a(45656),
        V = a(96437),
        O = a(1918),
        w = a(88929),
        B = a.n(w);
      let M = {
          [l.ALBUM]: (0, _.jsx)(A.Z, { id: "trailer.title-album" }),
          [l.ARTIST]: (0, _.jsx)(A.Z, { id: "trailer.title-artist" }),
          [l.PLAYLIST]: (0, _.jsx)(A.Z, { id: "trailer.title-playlist" }),
          [l.TRACK]: (0, _.jsx)(A.Z, { id: "trailer.title-track" }),
        },
        U = (e, t) =>
          (0, _.jsx)("div", {
            className: B().coverContainer,
            children: (0, _.jsx)(k.Shimmer, {
              isActive: e,
              radius: t,
              className: B().cover,
            }),
          }),
        F = (e) =>
          (0, _.jsxs)("div", {
            className: B().textContainer,
            children: [
              (0, _.jsx)("div", {
                className: B().shimmerContainer,
                children: (0, _.jsx)(k.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: B().titleShimmer,
                }),
              }),
              (0, _.jsx)("div", {
                className: B().shimmerContainer,
                children: (0, _.jsx)(k.Shimmer, {
                  isActive: e,
                  radius: "xl",
                  className: B().descriptionShimmer,
                }),
              }),
            ],
          }),
        W = (0, S.Pi)((e) => {
          let {
              meta: t,
              variant: a,
              isShimmerVisible: i,
              isShimmerActive: r,
              className: s,
            } = e,
            n = a === l.ARTIST ? "round" : "s",
            o = (0, N.useMemo)(() => {
              let e = {
                "--icon-background-color": null == t ? void 0 : t.averageColor,
              };
              return (0, _.jsxs)("div", {
                className: B().coverContainer,
                children: [
                  (0, _.jsx)(V.Paper, {
                    radius: n,
                    className: B().cover,
                    withShadow: !0,
                    children: (0, _.jsx)(D.Image, {
                      "aria-hidden": !0,
                      src: null == t ? void 0 : t.coverUri,
                      size: 100,
                      fit: "cover",
                      withAvatarReplace: !0,
                    }),
                  }),
                  (0, _.jsx)("div", {
                    className: B().iconContainer,
                    style: e,
                    children: (0, _.jsx)(C.J, {
                      variant: "trailer",
                      size: "xs",
                      className: B().icon,
                    }),
                  }),
                ],
              });
            }, [
              n,
              null == t ? void 0 : t.averageColor,
              null == t ? void 0 : t.coverUri,
            ]),
            d = (0, N.useMemo)(() => {
              let e = null == t ? void 0 : t.getUrl(a);
              return e
                ? (0, _.jsx)(x.rU, {
                    href: e,
                    className: B().link,
                    children: (0, _.jsx)(O.Caption, {
                      variant: "span",
                      type: "controls",
                      lineClamp: 1,
                      className: B().text,
                      children: null == t ? void 0 : t.title,
                    }),
                  })
                : (0, _.jsx)(O.Caption, {
                    variant: "span",
                    type: "controls",
                    lineClamp: 1,
                    className: B().text,
                    children: null == t ? void 0 : t.title,
                  });
            }, [t, a]),
            u = (0, N.useMemo)(
              () =>
                (0, _.jsxs)("div", {
                  className: B().textContainer,
                  children: [
                    (0, _.jsx)(O.Caption, {
                      variant: "span",
                      type: "controls",
                      className: (0, E.W)(B().text, B().title),
                      lineClamp: 1,
                      children: M[a],
                    }),
                    d,
                  ],
                }),
              [d, a],
            );
          return (0, _.jsxs)("div", {
            className: (0, E.W)(B().root, s),
            children: [
              i ? U(r, n) : o,
              i ? F(r) : u,
              !i &&
                (0, _.jsx)(x.JM, {
                  className: B().playButton,
                  iconSize: "m",
                  variant: "filled",
                  isPlaying: !1,
                  iconClassName: B().playButtonIcon,
                }),
            ],
          });
        });
      var H = a(26365),
        q = a.n(H);
      let z = (e, t) => {
          let a = t === l.ALBUM ? o.Lx.ALBUM : o.Lx.PLAYLIST,
            i = t === l.TRACK ? 1 : 5;
          return Array.from({ length: i }, (t, i) =>
            (0, _.jsx)(
              "div",
              {
                className: q().trackContainer,
                children: (0, _.jsx)(x.DX, {
                  isActive: e,
                  className: (0, E.W)(q().trackShimmer, {
                    [q().albumShimmer]: a === o.Lx.ALBUM,
                  }),
                  variant: a,
                }),
              },
              i,
            ),
          );
        },
        Z = (0, S.Pi)((e) => {
          let { variant: t } = e,
            { trailer: a } = (0, o.oR)(),
            { isLoading: i, isRejected: r, tracks: s, meta: d } = a,
            u = i || r,
            c = t === l.ALBUM ? n.RJ : n.O2,
            m = (0, N.useCallback)(
              (e) => ({
                contextData: I({
                  variant: t,
                  id: Number(null == d ? void 0 : d.id),
                  from: "test",
                  uuid: null == d ? void 0 : d.uuid,
                }),
                queueParams: { index: e },
                loadContextMeta: !0,
              }),
              [null == d ? void 0 : d.id, null == d ? void 0 : d.uuid, t],
            ),
            g = (0, N.useMemo)(() => {
              if (u) return z(i, t);
              let e = { "--track-progress": "76%" };
              return null == s
                ? void 0
                : s.map((a, i) => {
                    var r, s;
                    let n;
                    return (
                      t === l.ALBUM &&
                        (null == d ? void 0 : d.id) &&
                        (n = L(a, null == d ? void 0 : d.id)),
                      (0, _.jsx)(
                        "div",
                        {
                          className: (0, E.W)(q().trackContainer, {
                            [q().trackContainer_active]: 0 === i,
                          }),
                          style: e,
                          children: (0, _.jsx)(c, {
                            position:
                              null === (r = n) || void 0 === r
                                ? void 0
                                : r.trackPosition,
                            withLightning: !!(null === (s = n) || void 0 === s
                              ? void 0
                              : s.isBest),
                            track: a,
                            playContextParams: m(i),
                            albumArtists: null == d ? void 0 : d.albumArtists,
                          }),
                        },
                        a.id,
                      )
                    );
                  });
            }, [
              c,
              m,
              i,
              u,
              null == d ? void 0 : d.albumArtists,
              null == d ? void 0 : d.id,
              s,
              t,
            ]);
          return (0, _.jsxs)("div", {
            className: q().root,
            children: [
              (0, _.jsx)(W, {
                isShimmerVisible: u,
                isShimmerActive: i,
                variant: t,
                className: q().header,
                meta: d,
              }),
              g,
              (0, _.jsx)(R, {
                isShimmerVisible: u,
                isShimmerActive: i,
                variant: t,
                withNavigateButton: !0,
                className: q().footer,
              }),
            ],
          });
        });
      var K = a(42762),
        J = a.n(K);
      let Y = (0, S.Pi)(() => {
        let { settings: e, trailer: t } = (0, o.oR)(),
          { contentRef: a } = (0, o.$Y)(),
          { formatMessage: i } = (0, b.Z)(),
          l = e.layout === o.t8.Mobile;
        return (0, _.jsxs)(f.u, {
          size: "fitContent",
          placement: l ? "default" : "right",
          open: t.modal.isOpened,
          onOpenChange: t.modal.onOpenChange,
          onClose: t.modal.close,
          className: J().root,
          contentClassName: J().modalContent,
          overlayClassName: J().overlay,
          portalNode: l ? null : a,
          showHeader: !1,
          children: [
            (0, _.jsx)("div", {
              className: J().header,
              children: (0, _.jsx)(y.z, {
                radius: "round",
                color: "secondary",
                size: "xxs",
                icon: (0, _.jsx)(C.J, { variant: "close", size: "xxs" }),
                onClick: t.modal.close,
                "aria-label": i({
                  id: "interface-actions.close-my-vibe-settings",
                }),
              }),
            }),
            t.variant && (0, _.jsx)(Z, { variant: t.variant }),
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
        nJ: function () {
          return r;
        },
        sd: function () {
          return y;
        },
        $J: function () {
          return f;
        },
        Ez: function () {
          return x;
        },
      });
      var i,
        l,
        r,
        s,
        n = a(34603);
      async function o(e) {
        let { secretKey: t, data: a } = e,
          i = new TextEncoder(),
          l = i.encode(t);
        return crypto.subtle
          .importKey(
            "raw",
            l,
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
            mediaConfigController: l,
          } = e;
          (this.resource = new n.HZ(t, {
            params: a.params,
            gateway: a.gateway,
            overembed: a.overembed,
            externalDomain: a.externalDomain,
            retryPolicyConfig: a.retryPolicyConfig,
            timeouts: a.timeouts,
          })),
            (this.mediaConfigController = l),
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
              l = d();
            o({ secretKey: this.secretKey, data: `${l}${i}` })
              .then((e) => {
                this.resource
                  .getStorageData({
                    trackId: String(i),
                    sign: e,
                    tsInSeconds: l,
                    canUseStreaming: !1,
                    direct: !1,
                    requireMp3Link: !1,
                    isAliceRequester: !1,
                    preview:
                      this.mediaConfigController.qualityConfig.preview.value,
                  })
                  .then((e) => {
                    let l = (function (e, t) {
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
                        l = e.find((e) =>
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
                          : (t.lq.value || t.nq.value) && l
                            ? l
                            : null;
                    })(e, this.mediaConfigController.qualityConfig);
                    null !== l
                      ? this.resource
                          .getSrcData({ storageUrl: l.downloadInfoUrl })
                          .then((e) => {
                            try {
                              let a = (function (e) {
                                let {
                                    srcData: t,
                                    secretKey: a,
                                    trackId: i,
                                  } = e,
                                  l = (function (e, t) {
                                    let a, i, l, r, s, n, o, d, u;
                                    let c = String.fromCharCode;
                                    function m(e, t) {
                                      return (e << t) | (e >>> (32 - t));
                                    }
                                    function g(e, t) {
                                      let a, i, l, r, s;
                                      return ((l = 2147483648 & e),
                                      (r = 2147483648 & t),
                                      (a = 1073741824 & e),
                                      (i = 1073741824 & t),
                                      (s = (1073741823 & e) + (1073741823 & t)),
                                      a & i)
                                        ? 2147483648 ^ s ^ l ^ r
                                        : a | i
                                          ? 1073741824 & s
                                            ? 3221225472 ^ s ^ l ^ r
                                            : 1073741824 ^ s ^ l ^ r
                                          : s ^ l ^ r;
                                    }
                                    function p(e, t, a, i, l, r, s) {
                                      return (
                                        (e = g(
                                          e,
                                          g(g((t & a) | (~t & i), l), s),
                                        )),
                                        g(m(e, r), t)
                                      );
                                    }
                                    function v(e, t, a, i, l, r, s) {
                                      return (
                                        (e = g(
                                          e,
                                          g(g((t & i) | (a & ~i), l), s),
                                        )),
                                        g(m(e, r), t)
                                      );
                                    }
                                    function h(e, t, a, i, l, r, s) {
                                      return (
                                        (e = g(e, g(g(t ^ a ^ i, l), s))),
                                        g(m(e, r), t)
                                      );
                                    }
                                    function _(e, t, a, i, l, r, s) {
                                      return (
                                        (e = g(e, g(g(a ^ (t | ~i), l), s))),
                                        g(m(e, r), t)
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
                                            l = ((i - (i % 64)) / 64 + 1) * 16,
                                            r = Array(l - 1),
                                            s = 0,
                                            n = 0;
                                          for (; n < a; )
                                            (t = (n - (n % 4)) / 4),
                                              (s = (n % 4) * 8),
                                              (r[t] =
                                                r[t] | (e.charCodeAt(n) << s)),
                                              n++;
                                          return (
                                            (t = (n - (n % 4)) / 4),
                                            (s = (n % 4) * 8),
                                            (r[t] = r[t] | (128 << s)),
                                            (r[l - 2] = a << 3),
                                            (r[l - 1] = a >>> 29),
                                            r
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
                                        (l = o),
                                        (r = d),
                                        (s = u),
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
                                        (n = v(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 1],
                                          5,
                                          4129170786,
                                        )),
                                        (u = v(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 6],
                                          9,
                                          3225465664,
                                        )),
                                        (d = v(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 11],
                                          14,
                                          643717713,
                                        )),
                                        (o = v(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 0],
                                          20,
                                          3921069994,
                                        )),
                                        (n = v(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 5],
                                          5,
                                          3593408605,
                                        )),
                                        (u = v(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 10],
                                          9,
                                          38016083,
                                        )),
                                        (d = v(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 15],
                                          14,
                                          3634488961,
                                        )),
                                        (o = v(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 4],
                                          20,
                                          3889429448,
                                        )),
                                        (n = v(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 9],
                                          5,
                                          568446438,
                                        )),
                                        (u = v(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 14],
                                          9,
                                          3275163606,
                                        )),
                                        (d = v(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 3],
                                          14,
                                          4107603335,
                                        )),
                                        (o = v(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 8],
                                          20,
                                          1163531501,
                                        )),
                                        (n = v(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 13],
                                          5,
                                          2850285829,
                                        )),
                                        (u = v(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 2],
                                          9,
                                          4243563512,
                                        )),
                                        (d = v(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 7],
                                          14,
                                          1735328473,
                                        )),
                                        (o = v(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 12],
                                          20,
                                          2368359562,
                                        )),
                                        (n = h(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 5],
                                          4,
                                          4294588738,
                                        )),
                                        (u = h(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 8],
                                          11,
                                          2272392833,
                                        )),
                                        (d = h(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 11],
                                          16,
                                          1839030562,
                                        )),
                                        (o = h(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 14],
                                          23,
                                          4259657740,
                                        )),
                                        (n = h(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 1],
                                          4,
                                          2763975236,
                                        )),
                                        (u = h(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 4],
                                          11,
                                          1272893353,
                                        )),
                                        (d = h(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 7],
                                          16,
                                          4139469664,
                                        )),
                                        (o = h(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 10],
                                          23,
                                          3200236656,
                                        )),
                                        (n = h(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 13],
                                          4,
                                          681279174,
                                        )),
                                        (u = h(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 0],
                                          11,
                                          3936430074,
                                        )),
                                        (d = h(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 3],
                                          16,
                                          3572445317,
                                        )),
                                        (o = h(
                                          o,
                                          d,
                                          u,
                                          n,
                                          b[a + 6],
                                          23,
                                          76029189,
                                        )),
                                        (n = h(
                                          n,
                                          o,
                                          d,
                                          u,
                                          b[a + 9],
                                          4,
                                          3654602809,
                                        )),
                                        (u = h(
                                          u,
                                          n,
                                          o,
                                          d,
                                          b[a + 12],
                                          11,
                                          3873151461,
                                        )),
                                        (d = h(
                                          d,
                                          u,
                                          n,
                                          o,
                                          b[a + 15],
                                          16,
                                          530742520,
                                        )),
                                        (o = h(
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
                                        (o = g(o, l)),
                                        (d = g(d, r)),
                                        (u = g(u, s));
                                    let y = S(n) + S(o) + S(d) + S(u);
                                    return y.toLowerCase();
                                  })(t.path.substr(1) + t.s, a),
                                  r = `/get-mp3/${l}/${t.ts}${t.path}?track-id=${i}&play=false`;
                                return `https://${t.host}${r}`;
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
      ((i = r || (r = {})).HQ_PLUS = "hqPlus"),
        (i.HQ = "hq"),
        (i.NQ = "nq"),
        (i.LQ = "lq"),
        (i.PREVIEW = "preview");
      class v extends u.y {
        name = "GetFileInfoMediaProviderException";
        constructor(
          e,
          { code: t = "E_GET_FILE_INFO_MEDIA_PROVIDER", ...a } = {},
        ) {
          super(e, { code: t, ...a }), Object.setPrototypeOf(this, v.prototype);
        }
      }
      let h = [n.V9.FLAC, n.V9.AAC, n.V9.HEAAC, n.V9.MP3];
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
            mediaConfigController: l,
            transport: r,
            variables: s,
          } = e;
          (this.resource = new n.dF(t, {
            params: a.params,
            gateway: a.gateway,
          })),
            (this.secretKey = i),
            (this.mediaConfigController = l),
            (this.transport = r),
            (this.variables = s);
        }
        getMediaSource(e) {
          let t = d(),
            a = (function (e, t, a) {
              if ((0, p.YM)(t)) return n.nJ.SMART_PREVIEW;
              let i = a ? n.nJ.LQ : n.nJ.NQ;
              switch (e) {
                case r.HQ_PLUS:
                  i = n.nJ.LOSSLESS;
                  break;
                case r.HQ:
                  i = a ? n.nJ.NQ : n.nJ.HQ;
                  break;
                case r.NQ:
                case r.LQ:
                  i = a ? n.nJ.LQ : n.nJ.NQ;
                  break;
                case r.PREVIEW:
                  i = n.nJ.PREVIEW;
              }
              return i;
            })(
              this.mediaConfigController.quality.value,
              e.entity,
              this.variables.useNewCorrespondenceBetweenQualityParams,
            ),
            i = h.join(""),
            l = `${t}${e.entity.data.meta.id}${a}${i}${this.transport}`;
          return new Promise((r, s) => {
            o({ data: l, secretKey: this.secretKey })
              .then((l) =>
                this.resource
                  .getFileInfo({
                    tsInSeconds: t,
                    trackId: e.entity.data.meta.id,
                    quality: a,
                    codecs: h,
                    transports: [this.transport],
                    sign: l,
                  })
                  .then((t) => {
                    if (!t.downloadInfo.urls?.[0])
                      throw Error("An empty array of URLs has been received");
                    (e.entity.mediaSource = t), r(t.downloadInfo.urls[0]);
                  })
                  .catch((t) => {
                    let l = t;
                    t instanceof Error &&
                      (l = {
                        name: t.name,
                        message: t.message,
                        stack: t.stack,
                        cause: t.cause,
                      }),
                      s(
                        new v("An empty array of URLs has been received", {
                          code: "E_EMPTY_URLS",
                          cause: l,
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
                let l = t;
                t instanceof Error &&
                  (l = {
                    name: t.name,
                    message: t.message,
                    stack: t.stack,
                    cause: t.cause,
                  }),
                  s(
                    new v("Failed to create sign", {
                      code: "E_CREATE_SIGN",
                      cause: l,
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
      var C = a(54122);
      class f {
        qualityConfig = {
          lossless: new C.wi(!1),
          hq: new C.wi(!0),
          nq: new C.wi(!0),
          lq: new C.wi(!0),
          preview: new C.wi(!0),
          smart_preview: new C.wi(!1),
        };
        quality = new C.wi(r.HQ);
        constructor(e) {
          this.setQuality(e);
        }
        setQuality(e) {
          switch (e) {
            case r.HQ_PLUS:
              (this.qualityConfig.lossless.value = !0),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = r.HQ_PLUS);
              break;
            case r.HQ:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = r.HQ);
              break;
            case r.NQ:
            case r.LQ:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = r.NQ);
              break;
            case r.PREVIEW:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !1),
                (this.qualityConfig.lq.value = !1),
                (this.qualityConfig.preview.value = !0),
                (this.quality.value = r.PREVIEW);
          }
        }
      }
      ((l = s || (s = {})).DOWNLOAD_INFO_PROVIDER = "downloadInfoProvider"),
        (l.GET_FILE_INFO_PROVIDER = "getFileInfoProvider");
      class E extends u.y {
        name = "GenerativeMediaProviderException";
        constructor(e, { code: t = "E_GENERATIVE_MEDIA_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }), Object.setPrototypeOf(this, E.prototype);
        }
      }
      class N {
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
      class x {
        generativeProvider = new N();
        downloadInfoProvider;
        getFileInfoProvider;
        variables;
        constructor(e) {
          (this.variables = e.variables || {}),
            (this.downloadInfoProvider = new g(e.downloadInfoProviderParams)),
            (this.getFileInfoProvider = new _(e.getFileInfoProviderParams));
        }
        async getMediaSource(e) {
          if ((0, p.OX)(e.entity))
            return this.generativeProvider.getMediaSource(e);
          let t = this.variables.switchToStrmWithoutEncrypt
            ? this.getFileInfoProvider
            : this.downloadInfoProvider;
          return t.getMediaSource(e);
        }
      }
    },
  },
]);
