(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8856, 1579, 6290, 154],
  {
    99340: function (e, t, a) {
      "use strict";
      a.d(t, {
        ContainerProvider: function () {
          return r;
        },
      });
      var i = a(9753),
        l = a(98639),
        s = a(63394);
      let n = async (e) => {
          let {
              hostTld: t,
              forwardedForY: a,
              changeLanguageToken: i,
              tracestate: l,
              traceparent: n,
              serverDetectedLang: r,
              env: o,
            } = e,
            u = await (0, s.ZO)({
              tld: t,
              forwardedForY: a,
              changeLanguageToken: i,
              tracestate: l,
              traceparent: n,
              serverDetectedLang: r,
              env: o,
            });
          return await u.get(s.uh).loadDictionary(), u;
        },
        r = (e) => {
          let {
              children: t,
              hostTld: a,
              env: r,
              forwardedForY: o,
              tracestate: u,
              traceparent: d,
              changeLanguageToken: c,
              serverDetectedLang: g,
            } = e,
            m = (0, l.use)(
              n({
                hostTld: a,
                env: r,
                forwardedForY: o,
                tracestate: u,
                traceparent: d,
                changeLanguageToken: c,
                serverDetectedLang: g,
              }),
            );
          return (0, i.jsx)(s.Xl.Provider, { value: m, children: t });
        };
    },
    77085: function (e, t, a) {
      "use strict";
      a.d(t, {
        StoreProvider: function () {
          return ef;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(42288),
        n = a(74717),
        r = a(98639),
        o = a(63394),
        u = a(62434),
        d = a(87181),
        c = a(30742);
      let g = {
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
          donations: { loadingState: o.Gu.IDLE, items: [] },
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
          repeatMode: d.zq.NONE,
          quality: u.nJ.HQ,
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
        trailer: {
          loadingState: o.Gu.IDLE,
          modal: {},
          state: {
            contextId: null,
            contextType: null,
            entityMeta: null,
            status: c.Xz.IDLE,
          },
        },
        communication: { loadingState: o.Gu.IDLE },
        modals: {
          disclaimerModal: {},
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
        fullscreenPlayer: {
          modal: {},
          syncLyrics: { loadingState: o.Gu.IDLE },
        },
      };
      var m = a(58446),
        S = a(96290),
        p = a(93438),
        y = a(89102),
        E = a(93490),
        h = a(58421);
      let N = s.V5.model("CollectionAlbumsPage", {
        loadingState: s.V5.enumeration(Object.values(o.Gu)),
        sort: s.V5.maybeNull(h.$4),
        items: s.V5.array(s.V5.maybeNull(E.ug)),
        pager: s.V5.maybeNull(h.Vn),
        alreadyRequestedPages: s.V5.map(s.V5.number),
        pendingPages: s.V5.map(s.V5.number),
        requestsCount: s.V5.maybeNull(s.V5.number),
        upcomingAlbumsLoadingState: s.V5.enumeration(Object.values(o.Gu)),
        upcomingAlbums: s.V5.maybeNull(s.V5.array(E.W9)),
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
        .actions((e) => ({
          getData: (0, s.ls)(function* (t) {
            let {
                userId: a,
                page: i = 0,
                pageSize: l = 20,
                sortBy: n,
                sortOrder: r,
                metaType: u,
              } = t,
              { usersResource: d, modelActionsLogger: c } = (0, s.dU)(e);
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
                n && r && (e.sort = { sortBy: n, sortOrder: r });
              try {
                var g, m, S;
                (e.loadingState = o.Gu.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let t = yield d.getLikedAlbums({
                    userId: a,
                    page: i,
                    pageSize: l,
                    sortBy: n,
                    sortOrder: r,
                    metaType: u,
                  }),
                  c = { page: i, perPage: l, total: t.pager.total };
                0 === e.items.length &&
                  (e.items = (0, s.pj)(
                    Array.from({ length: c.total }, () => null),
                  ));
                let p =
                  null !==
                    (m =
                      null === (g = t.albums) || void 0 === g
                        ? void 0
                        : g.map((e) => {
                            let { album: t } = e;
                            return (0, E.ym)(t);
                          })) && void 0 !== m
                    ? m
                    : [];
                (0, o.AG)({
                  items: e.items,
                  mappedRawItems: p,
                  page: i,
                  pageSize: l,
                }),
                  (e.pager = c),
                  (e.requestsCount =
                    (null !== (S = e.requestsCount) && void 0 !== S ? S : 0) +
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
              { usersResource: i, modelActionsLogger: l } = (0, s.dU)(e);
            if (e.upcomingAlbumsLoadingState !== o.Gu.PENDING)
              try {
                var n;
                e.upcomingAlbumsLoadingState = o.Gu.PENDING;
                let t = yield i.getPresaves({
                  userId: a,
                  includeReleased: !1,
                  includeUpcoming: !0,
                });
                (e.upcomingAlbums = (0, s.pj)(
                  null === (n = t.upcomingAlbums) || void 0 === n
                    ? void 0
                    : n.map(E.wq),
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
              (e.items = (0, s.pj)([])),
              e.pendingPages.clear(),
              (e.pager = null),
              e.alreadyRequestedPages.clear(),
              (e.upcomingAlbumsLoadingState = o.Gu.IDLE),
              (e.upcomingAlbums = null);
          },
        }));
      var C = a(33589);
      let G = s.V5.model("CollectionArtistsPage", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          sort: s.V5.maybeNull(h.$4),
          items: s.V5.array(s.V5.maybeNull(C.Go)),
          pager: s.V5.maybeNull(h.Vn),
          alreadyRequestedPages: s.V5.map(s.V5.number),
          pendingPages: s.V5.map(s.V5.number),
          requests: s.V5.maybeNull(s.V5.number),
        }).actions((e) => ({
          getData: (0, s.ls)(function* (t) {
            let {
                userId: a,
                page: i = 0,
                pageSize: l = 20,
                sortBy: n,
                sortOrder: r,
              } = t,
              { usersResource: u, modelActionsLogger: d } = (0, s.dU)(e);
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
                n && r && (e.sort = { sortBy: n, sortOrder: r });
              try {
                var c, g, m;
                (e.loadingState = o.Gu.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let t = yield u.getLikedArtists({
                    userId: a,
                    page: i,
                    pageSize: l,
                    sortBy: n,
                    sortOrder: r,
                  }),
                  d = { page: i, perPage: l, total: t.pager.total };
                0 === e.items.length &&
                  (e.items = (0, s.pj)(
                    Array.from({ length: d.total }, () => null),
                  )),
                  (e.loadingState = o.Gu.RESOLVE);
                let S =
                  null !==
                    (g =
                      null === (c = t.artists) || void 0 === c
                        ? void 0
                        : c.map(C.d)) && void 0 !== g
                    ? g
                    : [];
                (0, o.AG)({
                  items: e.items,
                  mappedRawItems: S,
                  page: i,
                  pageSize: l,
                }),
                  (e.pager = d),
                  (e.requests =
                    (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
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
              (e.sort = null),
              e.pendingPages.clear(),
              (e.pager = null),
              e.alreadyRequestedPages.clear(),
              (e.items = (0, s.pj)([]));
          },
        })),
        b = s.V5.model("CollectionNonMusicPage", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          items: s.V5.array(s.V5.maybeNull(E.ug)),
          pager: s.V5.maybeNull(h.Vn),
          alreadyRequestedPages: s.V5.map(s.V5.number),
          pendingPages: s.V5.map(s.V5.number),
          requestsCount: s.V5.maybeNull(s.V5.number),
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
          .actions((e) => ({
            getData: (0, s.ls)(function* (t) {
              let { userId: a, page: i = 0, pageSize: l = 20, metaType: n } = t,
                { usersResource: r, modelActionsLogger: u } = (0, s.dU)(e);
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
                  var d, c, g;
                  (e.loadingState = o.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield r.getLikedAlbums({
                      userId: a,
                      page: i,
                      pageSize: l,
                      metaType: n,
                    }),
                    u = { page: i, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, s.pj)(
                      Array.from({ length: u.total }, () => null),
                    ));
                  let m =
                    null !==
                      (c =
                        null === (d = t.albums) || void 0 === d
                          ? void 0
                          : d.map((e) => {
                              let { album: t } = e;
                              return (0, E.ym)(t);
                            })) && void 0 !== c
                      ? c
                      : [];
                  (0, o.AG)({
                    items: e.items,
                    mappedRawItems: m,
                    page: i,
                    pageSize: l,
                  }),
                    (e.pager = u),
                    (e.requestsCount =
                      (null !== (g = e.requestsCount) && void 0 !== g ? g : 0) +
                      1),
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
                (e.items = (0, s.pj)([])),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.requestsCount = 0);
            },
          }));
      var v = a(12090);
      let L = s.V5.model("CollectionPlaylistsCreatedPage", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          sort: s.V5.maybeNull(h.$4),
          items: s.V5.array(s.V5.maybeNull(v.Cd)),
          pager: s.V5.maybeNull(h.Vn),
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
                    page: l = 0,
                    pageSize: n = 20,
                    withLikesCount: r,
                  } = a,
                  { usersResource: u, modelActionsLogger: d } = (0, s.dU)(e);
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
                    let a = l * n,
                      d = e.kinds.slice(a, a + n),
                      g = yield u.getPlaylistsByKinds({
                        userId: i,
                        kinds: d,
                        withLikesCount: r,
                        withTracks: !1,
                      });
                    e.requests =
                      (null !== (c = e.requests) && void 0 !== c ? c : 0) + 1;
                    let m = { page: l, perPage: n, total: e.kinds.length };
                    0 === e.items.length &&
                      (e.items = (0, s.pj)(
                        Array.from({ length: m.total }, () => null),
                      ));
                    let S = g.map(v.PV);
                    (0, o.AG)({
                      items: e.items,
                      mappedRawItems: S,
                      page: l,
                      pageSize: n,
                    }),
                      (e.pager = m),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (t) {
                    d.error(t), (e.loadingState = o.Gu.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(l));
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
        P = s.V5.model("CollectionPlaylistsLikedPage", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          sort: s.V5.maybeNull(h.$4),
          items: s.V5.array(s.V5.maybeNull(v.Cd)),
          pager: s.V5.maybeNull(h.Vn),
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
          .actions((e) => ({
            getData: (0, s.ls)(function* (t) {
              let {
                userId: a,
                page: i = 0,
                pageSize: l = 20,
                sortBy: n,
                sortOrder: r,
                metaType: u,
                withTracks: d,
              } = t;
              if (
                (e.loadingState === o.Gu.PENDING &&
                  e.pendingPages.has("".concat(i))) ||
                e.alreadyRequestedPages.has("".concat(i))
              )
                return;
              "number" == typeof i &&
                e.alreadyRequestedPages.set("".concat(i), i);
              let { usersResource: c, modelActionsLogger: g } = (0, s.dU)(e);
              (e.sort = null), n && r && (e.sort = { sortBy: n, sortOrder: r });
              try {
                var m;
                (e.loadingState = o.Gu.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let { likedPlaylists: t, pager: g } = yield c.getLikedPlaylists(
                  {
                    userId: a,
                    page: i,
                    pageSize: l,
                    sortBy: n,
                    sortOrder: r,
                    metaType: u,
                    withTracks: d,
                  },
                );
                (e.requests =
                  (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                  0 === e.items.length &&
                    (e.items = (0, s.pj)(
                      Array.from({ length: g.total }, () => null),
                    ));
                let S = t.map((e) => {
                  let { playlist: t } = e;
                  return (0, v.PV)(t);
                });
                (0, o.AG)({
                  items: e.items,
                  mappedRawItems: S,
                  page: i,
                  pageSize: l,
                }),
                  (e.pager = g),
                  (e.loadingState = o.Gu.RESOLVE);
              } catch (t) {
                g.error(t),
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
          }));
      var _ = a(10542),
        f = a(23472);
      let V = (e) => (0, s.pj)({ type: e.type, track: (0, f.Vt)(e.track) });
      var T = a(31579);
      let I = (e) =>
          (0, s.pj)({
            type: e.type,
            album: e.album && (0, E.ym)(e.album),
            playlist: e.playlist && (0, T.Q9)(e.playlist),
            track: (0, f.Vt)(e.track),
          }),
        D = s.V5.model("ShelfLikedItem", { type: s.V5.string, track: f.le }),
        x = s.V5.model("ShelfRecentlyPlayedItem", {
          type: s.V5.string,
          album: s.V5.maybe(E.ug),
          playlist: s.V5.maybe(T.d2),
          track: f.le,
        }),
        R = s.V5.model("CollectionShelfLiked", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          title: s.V5.maybeNull(s.V5.string),
          typeForFrom: s.V5.maybeNull(s.V5.string),
          entities: s.V5.maybeNull(s.V5.array(D)),
          pager: s.V5.maybeNull(h.Vn),
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
          .actions((e) => ({
            getData: (0, s.ls)(function* () {
              let { nonMusicResource: t, logger: a } = (0, s.dU)(e);
              if (e.loadingState !== o.Gu.PENDING)
                try {
                  var i, l;
                  e.loadingState = o.Gu.PENDING;
                  let a = yield t.getShelfLiked();
                  (e.title = a.title),
                    (e.typeForFrom =
                      null !== (i = a.typeForFrom) && void 0 !== i ? i : null),
                    (e.pager =
                      null !== (l = a.pager) && void 0 !== l ? l : null),
                    (e.entities = (0, s.pj)(a.entities.map(V))),
                    (e.loadingState = o.Gu.RESOLVE);
                } catch (t) {
                  !(t instanceof _.eY) &&
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
          })),
        k = s.V5.model("CollectionShelfRecentlyPlayed", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          title: s.V5.maybeNull(s.V5.string),
          typeForFrom: s.V5.maybeNull(s.V5.string),
          entities: s.V5.maybeNull(s.V5.array(x)),
          pager: s.V5.maybeNull(h.Vn),
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
          .actions((e) => ({
            getData: (0, s.ls)(function* () {
              let { nonMusicResource: t, logger: a } = (0, s.dU)(e);
              if (e.loadingState !== o.Gu.PENDING)
                try {
                  var i, l;
                  e.loadingState = o.Gu.PENDING;
                  let a = yield t.getShelfRecentlyPlayed();
                  (e.title = a.title),
                    (e.typeForFrom =
                      null !== (i = a.typeForFrom) && void 0 !== i ? i : null),
                    (e.pager =
                      null !== (l = a.pager) && void 0 !== l ? l : null),
                    (e.entities = (0, s.pj)(a.entities.map(I))),
                    (e.loadingState = o.Gu.RESOLVE);
                } catch (t) {
                  !(t instanceof _.eY) &&
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
          })),
        A = s.V5.model("CollectionShelfPage", { recentlyPlayed: k, liked: R })
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
        j = s.V5.model("CollectionPage", {
          landing: y.d5,
          albums: N,
          playlistsLiked: P,
          playlistsCreated: L,
          artists: G,
          shelf: A,
          nonMusicLiked: b,
        });
      a(27539),
        a(54267),
        a(25906),
        a(47139),
        a(74680),
        a(35141),
        a(55742),
        a(77855),
        a(69069),
        a(20297),
        a(50971);
      var O = a(95946),
        U = a(72636);
      a(58101);
      let B = s.V5.model("MainPage", { landing: y.d5 });
      a(38525);
      var w = a(21585),
        F = a(61134),
        M = a(40029);
      let q = (e) =>
          e.reduce((e, t) => {
            let a = "".concat(t.type, "_").concat(t.id);
            if (a in e) {
              var i;
              null === (i = e[a]) || void 0 === i || i.push(t);
            } else e[a] = [t];
            return e;
          }, {}),
        W = (e) => {
          switch (e.type) {
            case w.EW.ALBUM:
              return "".concat(e.type, "_").concat((0, F.un)(e));
            case w.EW.TRACK:
              return "".concat(e.type, "_").concat((0, F.LV)(e));
            case w.EW.WAVE:
              return "".concat(e.type, "_").concat((0, F.R3)(e));
            case w.EW.PLAYLIST:
              return "".concat(e.type, "_").concat((0, F.aQ)(e));
            case w.EW.ARTIST:
              return "".concat(e.type, "_").concat((0, F.H5)(e));
          }
        },
        H = (e) => {
          let t = { historyTabs: [] },
            a = 0;
          for (let s of e.historyTabs) {
            var i, l;
            if (a > 1e3) break;
            let e = { ...s, items: [] };
            for (let t of null !== (i = s.items) && void 0 !== i ? i : []) {
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
        z = (e) =>
          e
            .map((e) => {
              switch (e.type) {
                case w.EW.ARTIST:
                case w.EW.ALBUM:
                  return { type: e.type, data: { itemId: { id: e.id } } };
                case w.EW.PLAYLIST: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { uid: Number(t), kind: Number(a) } },
                  };
                }
                case w.EW.WAVE:
                  return {
                    type: e.type,
                    data: { itemId: { seeds: e.id.split(",") } },
                  };
                case w.EW.TRACK: {
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
          items: s.V5.maybeNull(s.V5.array(F.Mf)),
          datesMap: s.V5.map(s.V5.boolean),
          tabs: s.V5.maybeNull(s.V5.array(F.t9)),
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
                s = t + 1;
              return (
                (null === (a = e.items) || void 0 === a
                  ? void 0
                  : a.slice(t - 25 + 1, t).some((e) => !e.isLoaded)) &&
                  (l = t - 25 + 1),
                (null === (i = e.items) || void 0 === i
                  ? void 0
                  : i.slice(t, t + 25).some((e) => !e.isLoaded)) &&
                  (s = t + 25),
                [l, s]
              );
            },
            getItemsToLoad(t) {
              var a, i;
              let [l, s] = this.getStartAndEndIndexes(t);
              return null !==
                (i =
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.slice(l, s).filter((e) => !e.isLoaded)) && void 0 !== i
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
                      var l;
                      e.datesMap.set(t.date, !1),
                        null === (l = t.blocks) ||
                          void 0 === l ||
                          l.forEach((t, l) => {
                            var s;
                            let n = t.id;
                            e.indexesMap.set(
                              "".concat(i, "_").concat(l, "_").concat(n),
                              a,
                            ),
                              null === (s = e.items) ||
                                void 0 === s ||
                                s.push({
                                  id: n,
                                  type: t.type,
                                  tabIndex: i,
                                  blockIndex: l,
                                  trackIndex: null,
                                  loadingState:
                                    a < 25 ? o.Gu.RESOLVE : o.Gu.IDLE,
                                }),
                              ++a,
                              t.tracks.forEach((t, s) => {
                                var n;
                                e.indexesMap.set(
                                  ""
                                    .concat(i, "_")
                                    .concat(l, "_")
                                    .concat(s, "_")
                                    .concat(t.id),
                                  a,
                                ),
                                  null === (n = e.items) ||
                                    void 0 === n ||
                                    n.push({
                                      id: t.id,
                                      type: t.type,
                                      tabIndex: i,
                                      blockIndex: l,
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
                var i, l, s, n;
                let { tabIndex: r, blockIndex: u, trackIndex: d } = t,
                  { fullModel: c } = a.data;
                if (null === d) return;
                let g =
                  null === (n = e.tabs) || void 0 === n
                    ? void 0
                    : null === (s = n[r]) || void 0 === s
                      ? void 0
                      : null === (l = s.blocks) || void 0 === l
                        ? void 0
                        : null === (i = l[u]) || void 0 === i
                          ? void 0
                          : i.tracks[d];
                g && ((g.data = (0, f.Vt)(c)), (g.loadingState = o.Gu.RESOLVE));
              },
              setAlbum(t, a) {
                var i, l, s;
                let { tabIndex: n, blockIndex: r } = t,
                  { fullModel: u } = a.data,
                  d =
                    null === (s = e.tabs) || void 0 === s
                      ? void 0
                      : null === (l = s[n]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[r];
                (0, F.Ql)(d) &&
                  ((d.meta = (0, E.cO)({ album: u.album, artists: u.artists })),
                  (d.loadingState = o.Gu.RESOLVE));
              },
              setArtist(t, a) {
                var i, l, s;
                let { tabIndex: n, blockIndex: r } = t,
                  { fullModel: u } = a.data,
                  d =
                    null === (s = e.tabs) || void 0 === s
                      ? void 0
                      : null === (l = s[n]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[r];
                (0, F.DF)(d) &&
                  ((d.meta = (0, C.tR)(u.artist)),
                  (d.loadingState = o.Gu.RESOLVE));
              },
              setPlaylist(t, a) {
                var i, l, s;
                let { tabIndex: n, blockIndex: r } = t,
                  { fullModel: u } = a.data,
                  d =
                    null === (s = e.tabs) || void 0 === s
                      ? void 0
                      : null === (l = s[n]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[r];
                (0, F.v3)(d) &&
                  ((d.meta = {
                    ...(0, T.RE)({ playlist: u.playlist }),
                    tracksCount: u.tracksCount,
                  }),
                  (d.loadingState = o.Gu.RESOLVE));
              },
              setVibe(t, a) {
                var i, l, s;
                let { tabIndex: n, blockIndex: r } = t,
                  { fullModel: u } = a.data,
                  d =
                    null === (s = e.tabs) || void 0 === s
                      ? void 0
                      : null === (l = s[n]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[r];
                (0, F.eE)(d) &&
                  ((d.meta = {
                    ...(0, M.FF)(u.wave),
                    imageUrl: u.simpleWaveForegroundImageUrl,
                    backgroundColor: u.simpleWaveBackgroundColor,
                  }),
                  (d.loadingState = o.Gu.RESOLVE));
              },
              getMusicHistory: (0, s.ls)(function* () {
                let { musicHistoryResource: a, modelActionsLogger: i } = (0,
                s.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    e.loadingState = o.Gu.PENDING;
                    let i = yield a.getMusicHistory({ fullModelsCount: 25 }),
                      l = H(i);
                    (e.tabs = (0, s.pj)(l.historyTabs.map(F.OE))),
                      t.fillItemsAndIndexes(),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (t) {
                    i.error(t), (e.loadingState = o.Gu.REJECT);
                  }
              }),
              getItems: (0, s.ls)(function* (a) {
                let { musicHistoryResource: i, modelActionsLogger: l } = (0,
                s.dU)(e);
                try {
                  let l = e.getItemsToLoad(a);
                  l.forEach((e) => {
                    e.loadingState = o.Gu.RESOLVE;
                  });
                  let s = yield i.getMusicHistoryItems({ items: z(l) }),
                    n = q(l);
                  s.items.forEach((e) => {
                    var a;
                    let i = W(e);
                    null === (a = n[i]) ||
                      void 0 === a ||
                      a.forEach((a) => {
                        switch (e.type) {
                          case w.EW.ALBUM:
                            t.setAlbum(a, e);
                            break;
                          case w.EW.TRACK:
                            t.setTrack(a, e);
                            break;
                          case w.EW.WAVE:
                            t.setVibe(a, e);
                            break;
                          case w.EW.PLAYLIST:
                            t.setPlaylist(a, e);
                            break;
                          case w.EW.ARTIST:
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
      a(23948), a(55549);
      let Z = s.V5.model("NonMusicPage", { landing: y.d5 });
      a(34790);
      var Y = a(61533),
        Q = a(23976);
      a(46044);
      var K = a(21901),
        X = a(23194);
      let $ = [
          w.Sc.ARTIST,
          w.Sc.ALBUM,
          w.Sc.TRACK,
          w.Sc.PLAYLIST,
          w.Sc.WAVE,
          w.Sc.PODCAST,
          w.Sc.PODCAST_EPISODE,
        ],
        ee = (e, t) => {
          let a = [...$];
          return (
            (0, o.Z7)(e) ||
              t.checkExperiment(o.pe.WebNextPodcastSearch, "on") ||
              (a = a.filter(
                (e) => ![w.Sc.PODCAST, w.Sc.PODCAST_EPISODE].includes(e),
              )),
            a
          );
        },
        et = [
          w.Sc.ALBUM,
          w.Sc.ARTIST,
          w.Sc.PLAYLIST,
          w.Sc.TRACK,
          w.Sc.UGC_TRACK,
          w.Sc.WAVE,
          w.Sc.PODCAST,
          w.Sc.PODCAST_EPISODE,
        ],
        ea = (e, t, a) => {
          let i = [...et];
          return (
            e === w.ay.TOP && (i = i.filter((e) => e !== w.Sc.UGC_TRACK)),
            (0, o.Z7)(t) ||
              a.checkExperiment(o.pe.WebNextPodcastSearch, "on") ||
              (i = i.filter(
                (e) => ![w.Sc.PODCAST, w.Sc.PODCAST_EPISODE].includes(e),
              )),
            i
          );
        },
        ei = (e) => {
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
        el = (e) => {
          let { type: t } = e;
          switch (t) {
            case w.Sc.UGC_TRACK:
              return { type: t, data: (0, f.Z2)(e.track) };
            case w.Sc.TRACK:
              return { type: t, data: (0, f.Vt)(e.track) };
            case w.Sc.ARTIST:
              return { type: t, data: (0, C.d)(e.artist) };
            case w.Sc.PLAYLIST:
              return {
                type: t,
                data: (0, T.VB)({ ...e.playlist, artists: [] }),
              };
            case w.Sc.ALBUM:
              return { type: t, data: (0, E.ym)(e.album) };
            case w.Sc.WAVE:
              return { type: t, data: ei(e) };
            case w.Sc.PODCAST:
              return { type: t, data: (0, E.ym)(e.podcast) };
            case w.Sc.PODCAST_EPISODE:
              return { type: t, data: (0, f.Vt)(e.podcast_episode) };
            default:
              return null;
          }
        },
        es = (e) =>
          e.map((e) => {
            switch (e.type) {
              case w.Sc.ALBUM:
                return { type: w.Sc.ALBUM, data: (0, E.ym)(e.album) };
              case w.Sc.ARTIST:
                return { type: w.Sc.ARTIST, data: (0, C.d)(e.artist) };
              case w.Sc.PLAYLIST:
                return {
                  type: w.Sc.PLAYLIST,
                  data: (0, T.VB)({ ...e.playlist, artists: [] }),
                };
              case w.Sc.UGC_TRACK:
                return { type: w.Sc.UGC_TRACK, data: (0, f.Z2)(e.track) };
              case w.Sc.TRACK:
                return { type: w.Sc.TRACK, data: (0, f.Vt)(e.track) };
              case w.Sc.WAVE:
                return { type: w.Sc.WAVE, data: ei(e) };
              case w.Sc.PODCAST:
                return { type: w.Sc.PODCAST, data: (0, E.ym)(e.podcast) };
              case w.Sc.PODCAST_EPISODE:
                return {
                  type: w.Sc.PODCAST_EPISODE,
                  data: (0, f.Vt)(e.podcast_episode),
                };
            }
          }),
        en = s.V5.model("SearchHistoryPage", {
          items: s.V5.array(X.Iv),
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
        }),
        er = s.V5.model("SearchPage", {
          searchCorrectedText: s.V5.maybeNull(s.V5.string),
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          searchRequestId: s.V5.optional(s.V5.string, ""),
          results: s.V5.array(X.Iv),
          history: en,
          mixes: K.ZP,
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
          .actions((e) => ({
            getSearchResults: (0, s.ls)(function* (t) {
              let { text: a, filter: i, config: l, experiments: n } = t,
                { searchResource: r } = (0, s.dU)(e);
              try {
                e.loadingState = o.Gu.PENDING;
                let t = yield r.getInstantMixedSearch({
                  text: a,
                  type: ea(i, l, n),
                  filter: i === w.ay.TOP ? void 0 : i,
                  withLikesCount: !0,
                  page: 0,
                  pageSize: 36,
                });
                t.misspellResult && (e.searchCorrectedText = t.misspellResult),
                  t.results &&
                    t.results.length > 0 &&
                    ((e.results = (0, s.pj)(es(t.results).filter((e) => e))),
                    (e.searchRequestId = t.searchRequestId)),
                  (e.loadingState = o.Gu.RESOLVE);
              } catch (t) {
                e.loadingState = o.Gu.REJECT;
              }
            }),
            getHistory: (0, s.ls)(function* (t) {
              let { userId: a, config: i, experiments: l } = t;
              if (e.history.loadingState === o.Gu.PENDING) return;
              let { usersResource: n } = (0, s.dU)(e);
              try {
                e.history.loadingState = o.Gu.PENDING;
                let t = yield n.getSearchHistory({
                  userId: a,
                  supportedTypes: ee(i, l),
                });
                (e.history.items = (0, s.pj)(t.map(el).filter((e) => e))),
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
          }));
      a(17777);
      var eo = a(20070),
        eu = a(56570);
      let ed = (e) => {
          let t = [];
          return (
            e.triggers.forEach((e) => {
              if (e.meta.notificationId === w.Mx.BAR_BELLOW) {
                let a = (0, eu.MC)(e);
                t.push(a);
              }
            }),
            (0, s.pj)({ barBellow: { list: t } })
          );
        },
        ec = s.V5.model("CommunicationList", { barBellow: eu.ag }),
        eg = s.V5.model("Communication", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          list: s.V5.maybe(ec),
          errorStatusCode: s.V5.maybeNull(s.V5.number),
        }).actions((e) => {
          let t = {
            getData: (0, s.ls)(function* () {
              let { dynamicPagesResource: a, logger: i } = (0, s.dU)(e);
              if (
                e.loadingState !== o.Gu.PENDING &&
                e.loadingState !== o.Gu.RESOLVE
              )
                try {
                  e.loadingState = o.Gu.PENDING;
                  let i = yield a.getTriggers({
                    anchorIds: Object.values(w.o1),
                  });
                  if (
                    ((e.list = ed(i)),
                    e.loadingState !== o.Gu.IDLE &&
                      (e.loadingState = o.Gu.RESOLVE),
                    !e.list)
                  )
                    return;
                  let { barBellow: l } = e.list;
                  l.setAnchorId(w.o1.ON_START_BAR_BELLOW),
                    l.barBellowItem &&
                      (l.show(),
                      t.shown(
                        l.barBellowItem.anchorId,
                        l.barBellowItem.screenId,
                      ));
                } catch (t) {
                  ("string" == typeof t || t instanceof Error) && i.error(t),
                    t instanceof _.du &&
                      (t.statusCode === _.CN.NOT_FOUND ||
                        t.statusCode === _.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = _.CN.NOT_FOUND),
                    e.loadingState !== o.Gu.IDLE &&
                      (e.loadingState = o.Gu.REJECT);
                }
            }),
            shown: (0, s.ls)(function* (t, a) {
              let { dynamicPagesResource: i, logger: l } = (0, s.dU)(e);
              try {
                yield i.shown({ anchorIds: [t], screenId: a });
              } catch (e) {
                ("string" == typeof e || e instanceof Error) && l.error(e);
              }
            }),
            action: (0, s.ls)(function* (t, a, i) {
              let { dynamicPagesResource: l, logger: n } = (0, s.dU)(e);
              try {
                yield l.action({ anchorIds: [t], screenId: a, actionId: i });
              } catch (e) {
                ("string" == typeof e || e instanceof Error) && n.error(e);
              }
            }),
          };
          return t;
        });
      var em = a(51952),
        eS = a(91973),
        ep = a(3507),
        ey = a(92324),
        eE = a(75191),
        eh = a(25672),
        eN = a(20121),
        eC = a(61602),
        eG = a(2959);
      let eb = s.V5.model("Root", {
          experiments: h.i_,
          user: eG.T_,
          collection: j,
          main: B,
          settings: h.ao,
          currentTrackInfo: f.Jx,
          album: m.Lf,
          artist: S.Od,
          library: h.f8,
          sonataState: eE.ps,
          playlist: Y.nb,
          slides: eC.iV,
          vibe: ey.a,
          search: er,
          vibeSettings: eh.Ux,
          pinsCollection: em.Lc,
          genre: O.Kx,
          genres: U.EU,
          mixes: K.ZP,
          tag: eo.tS,
          chart: p._,
          post: Q.vU,
          landingBlockEntities: y.oT,
          contextMenuPlaylists: L,
          musicHistory: J,
          createPlaylist: v.b_,
          location: h.CU,
          nonMusic: Z,
          disclaimer: eN.nU,
          communication: eg,
          trailer: ep.L,
          modals: h.dC,
          landing: y.d5,
          fullscreenPlayer: eS.Oe,
        }),
        ev = (e, t) => eb.create(e, t);
      var eL = a(26965);
      let eP = ["settings", "sonataState"],
        e_ = (e, t) => eP.reduce((t, a) => ((t[a] = e[a]), t), (0, eL.Z)(t));
      (0, l.DT)(!1);
      let ef = (e) => {
        let { children: t, nonce: a } = e;
        (0, r.useRef)([]), (0, r.useContext)(n.ServerInsertedHTMLContext);
        let l = (0, o.YS)(),
          u = (0, o.wL)(),
          d = (0, o.dE)(),
          [c] = (0, r.useState)(() => {
            var e;
            let t = { ...l, logger: u, modelActionsLogger: d };
            return (
              null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                ? void 0
                : e.length
            )
              ? ev(
                  window.__STATE_SNAPSHOT__[
                    window.__STATE_SNAPSHOT__.length - 1
                  ],
                  t,
                )
              : ev(g, t);
          });
        return (
          (0, r.useLayoutEffect)(() => {
            function e() {
              var e;
              let t =
                null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                  ? void 0
                  : e[window.__STATE_SNAPSHOT__.length - 1];
              t && (0, s.Xx)(c, e_(c, t)), delete window.__STATE_SNAPSHOT__;
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
    76154: function (e, t, a) {
      "use strict";
      a.d(t, {
        mH: function () {
          return n.Genre;
        },
        fm: function () {
          return s;
        },
        uG: function () {
          return r;
        },
      });
      var i = a(42288);
      let l = i.V5.model("GenreListItemSubGenreModel", {
          tag: i.V5.string,
          title: i.V5.string,
        }),
        s = i.V5.model("GenreListItemModel", {
          tag: i.V5.string,
          title: i.V5.string,
          subGenres: i.V5.array(l),
        });
      var n = a(86555);
      let r = (e) => ({
        tag: e.tag,
        title: e.title,
        subGenres: (0, i.pj)(
          (e.leaves || []).map((e) => ({ tag: e.tag, title: e.title })),
        ),
      });
    },
    86555: function (e, t, a) {
      "use strict";
      a.d(t, {
        Genre: function () {
          return u;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(2570),
        n = a(67868),
        r = a(78914),
        o = a.n(r);
      let u = (0, l.Pi)((e) => {
        let { tag: t, title: a, subGenres: l } = e;
        return (0, i.jsxs)("div", {
          className: o().root,
          children: [
            (0, i.jsx)(n.rU, {
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
            l.length > 0 &&
              (0, i.jsx)("div", {
                className: o().list,
                children: l.map((e) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: o().item,
                      children: (0, i.jsx)(n.rU, {
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
    31579: function (e, t, a) {
      "use strict";
      a.d(t, {
        vY: function () {
          return s.EmptyPlaylistBlock;
        },
        ZL: function () {
          return i.PlaylistCard;
        },
        Nn: function () {
          return p;
        },
        d2: function () {
          return u;
        },
        VD: function () {
          return l.PlaylistsCarousel;
        },
        RE: function () {
          return C;
        },
        Q9: function () {
          return h;
        },
        VB: function () {
          return N;
        },
      });
      var i = a(22003),
        l = a(18921),
        s = a(6030),
        n = a(42288),
        r = a(33589),
        o = a(12090);
      let u = o.Cd.props({ artists: n.V5.maybe(n.V5.array(r.Go)) });
      var d = a(63394),
        c = a(58421),
        g = a(21585);
      let m = n.V5.model("PlaylistOwner", {
          uid: n.V5.number,
          login: n.V5.string,
          name: n.V5.string,
          sex: n.V5.enumeration(Object.values(g.oF)),
          verified: n.V5.boolean,
        }),
        S = n.V5.model("PlaylistOwner", {
          userInfo: n.V5.maybeNull(m),
          caseForms: n.V5.maybeNull(c.S2),
        }),
        p = o.Cd.props({
          owner: n.V5.maybe(m),
          modified: n.V5.string,
          description: n.V5.maybe(n.V5.string),
          madeFor: n.V5.maybeNull(S),
        })
          .views((e) => ({
            get seeds() {
              var t;
              return [
                "playlist:"
                  .concat(
                    null === (t = e.owner) || void 0 === t ? void 0 : t.login,
                    "_",
                  )
                  .concat(e.kind),
              ];
            },
          }))
          .actions((e) => ({
            changeDescription: (0, n.ls)(function* (t) {
              if (!(0, n.fh)(e)) return d.SL.ERROR;
              if (e.description === t) return d.SL.OK;
              if (t.length > o.Zn) return d.SL.ERROR;
              let { usersResource: a, modelActionsLogger: i } = (0, n.dU)(e);
              if (e.canUserChange) {
                let l = e.description;
                e.description = t;
                try {
                  let i = yield a.changePlaylistDescription({
                    description: t,
                    userId: e.uid,
                    playlistKind: e.kind,
                  });
                  return (e.description = i.description), d.SL.OK;
                } catch (t) {
                  (e.description = l), i.error(t);
                }
              }
              return d.SL.ERROR;
            }),
            changePlaylistCover: (0, n.ls)(function* (t) {
              if (!(0, n.fh)(e)) return d.SL.ERROR;
              let { usersResource: a, modelActionsLogger: i } = (0, n.dU)(e);
              try {
                return (
                  yield a.uploadPlaylistCover({
                    userId: e.uid,
                    formData: t,
                    playlistKind: e.kind,
                  }),
                  d.SL.OK
                );
              } catch (e) {
                i.error(e);
              }
              return d.SL.ERROR;
            }),
          })),
        y = (e) => ({
          uid: e.uid,
          login: e.login,
          name: e.name,
          sex: e.sex,
          verified: e.verified,
        }),
        E = (e) =>
          (0, n.pj)({
            userInfo: e.userInfo ? y(e.userInfo) : null,
            caseForms: e.caseForms ? (0, d.GA)(e.caseForms) : null,
          }),
        h = (e) =>
          (0, n.pj)({
            ...(0, o.PV)(e),
            owner: e.owner ? y(e.owner) : void 0,
            description: e.description,
            modified: e.modified,
            madeFor: e.madeFor ? E(e.madeFor) : null,
          }),
        N = (e) => {
          var t, a;
          return (0, n.pj)({
            ...(0, o.PV)(e),
            artists:
              null !==
                (a =
                  null == e
                    ? void 0
                    : null === (t = e.artists) || void 0 === t
                      ? void 0
                      : t.map(r.d)) && void 0 !== a
                ? a
                : [],
          });
        },
        C = (e) => {
          var t, a;
          let { playlist: i, generatedPlaylistType: l, likesCount: s } = e;
          return (0, n.pj)({
            isAvailable: null === (a = i.available) || void 0 === a || a,
            uuid: i.playlistUuid,
            title: i.title,
            uid: i.uid,
            kind: i.kind,
            coverUri: null === (t = i.cover) || void 0 === t ? void 0 : t.uri,
            generatedPlaylistType: l,
            likesCount: s,
          });
        };
    },
    6030: function (e, t, a) {
      "use strict";
      a.d(t, {
        EmptyPlaylistBlock: function () {
          return c;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(98639),
        n = a(31014),
        r = a(28852),
        o = a(2570),
        u = a(98746),
        d = a.n(u);
      let c = (e) => {
        let { className: t, isEmptySearch: a } = e,
          u = (0, s.useMemo)(
            () =>
              a
                ? (0, i.jsx)(n.Z, { id: "search-results.not-found-title" })
                : (0, i.jsx)(n.Z, {
                    id: "error-messages.empty-collection-playlist-title",
                  }),
            [a],
          ),
          c = (0, s.useMemo)(
            () =>
              a
                ? (0, i.jsx)(n.Z, {
                    id: "search-results.not-found-description",
                  })
                : (0, i.jsx)(n.Z, {
                    id: "error-messages.empty-collection-playlist-description",
                  }),
            [a],
          );
        return (0, i.jsxs)("div", {
          className: (0, l.W)(d().root, t),
          children: [
            (0, i.jsx)("div", {
              className: d().iconBackground,
              children: (0, i.jsx)(r.J, {
                variant: "search",
                size: "l",
                className: d().icon,
              }),
            }),
            (0, i.jsx)(o.Heading, {
              variant: "h3",
              size: "xs",
              className: d().title,
              children: u,
            }),
            (0, i.jsx)(o.Caption, {
              variant: "span",
              size: "l",
              className: d().subtitle,
              children: c,
            }),
          ],
        });
      };
    },
    22003: function (e, t, a) {
      "use strict";
      a.d(t, {
        PlaylistCard: function () {
          return P;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(98639),
        r = a(80542),
        o = a(52122),
        u = a(23881),
        d = a(84338),
        c = a(39513),
        g = a(27491),
        m = a(28852),
        S = a(12404),
        p = a(2570),
        y = a(33589),
        E = a(12090),
        h = a(63394),
        N = a(67868);
      let C = (e) => {
        let { formatMessage: t } = (0, r.Z)();
        return (0, n.useMemo)(() => {
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
                  : t({ id: "entity-names.likes-counter-empty" }));
          let i = t(
            { id: "entity-names.playlist-name" },
            { playlistName: e.title },
          );
          return "".concat(i, " ").concat(a);
        }, [t, e]);
      };
      var G = a(385);
      let b = (0, s.Pi)((e) => {
        let {
            playlist: t,
            reference: a,
            onOpenChange: l,
            open: s,
            returnFocus: r,
          } = e,
          { settings: o, experiments: u, trailer: d } = (0, h.oR)(),
          c = (0, E.SB)(t),
          g = (0, E.BV)(t),
          m = o.layout === h.t8.Mobile,
          S =
            u.checkExperiment(h.pe.WebNextEntityTrailer, "on") &&
            true &&
            t.hasTrailer;
        (0, h.ZP)(s);
        let p = (0, n.useCallback)(() => {
          d.openPlaylistTrailer(t.uid, t.kind);
        }, [t.kind, t.uid, d]);
        return (0, i.jsxs)(G.v2, {
          title: t.title,
          onOpenChange: l,
          open: s,
          offsetOptions: 10,
          reference: a,
          isMobile: m,
          returnFocus: r,
          children: [
            !m && (0, i.jsx)(N.Zd, { onClick: g, isPinned: t.isPinned }),
            !t.isFavouritePlaylist &&
              (0, i.jsx)(N.xZ, { onClick: c, isLiked: t.isLiked }),
            S && (0, i.jsx)(N.NB, { onClick: p }),
          ],
        });
      });
      var v = a(88308),
        L = a.n(v);
      let P = (0, s.Pi)((e) => {
        let {
            className: t,
            playlist: a,
            children: s,
            contentLinesCount: G,
            customDescription: v,
          } = e,
          { ref: P, intersectionPropertyId: _ } = (0, h.Vf)(),
          f = (0, h.x5)(),
          { formatMessage: V } = (0, r.Z)(),
          {
            sendLikeSearchFeedback: T,
            sendNavigateSearchFeedback: I,
            sendPlaySearchFeedback: D,
          } = (0, h.sA)(),
          [x, R] = (0, n.useState)(!1),
          [k, A] = (0, n.useState)(!1),
          [j, O] = (0, n.useState)(!1),
          U = C(a),
          B = (0, E.SB)(a),
          w = (0, E.BV)(a),
          F = (0, h.zx)(),
          M = (0, h.s0)(a.url),
          [q, W] = (0, n.useState)(!1),
          { isPlaying: H, togglePlay: z } = (0, h.qm)({
            playContextParams: {
              contextData: {
                type: d.Ak.Playlist,
                meta: { id: a.id, uuid: a.uuid },
                from: f,
              },
              loadContextMeta: !0,
            },
          }),
          J = (0, n.useCallback)(() => {
            F({ to: o.qU.PlaylistScreen }), null == I || I();
          }, [F, I]),
          Z = (0, n.useCallback)(() => {
            J(), M();
          }, [J, M]),
          Y = (0, n.useCallback)(() => {
            x || H || (R(!0), null == D || D()), z();
          }, [H, x, D, z]),
          Q = (0, n.useCallback)(() => {
            k || a.isLiked || (A(!0), null == T || T()), B();
          }, [B, k, a.isLiked, T]),
          K = (0, n.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          X = (0, n.useCallback)(() => {
            O(!j), W(!j);
          }, [j]),
          $ = (0, n.useMemo)(() => {
            var e;
            return v
              ? (0, i.jsx)(p.Caption, {
                  variant: "span",
                  type: "entity",
                  size: "s",
                  weight: "medium",
                  lineClamp: 2,
                  children: v,
                })
              : (null === (e = a.artists) || void 0 === e ? void 0 : e.length)
                ? (0, i.jsx)(y.jO, {
                    className: L().artists,
                    artists: a.artists,
                    lineClamp: 1,
                    linkClassName: L().artistLink,
                    captionSize: "s",
                  })
                : void 0;
          }, [a.artists, v]),
          ee = (0, n.useMemo)(() => {
            if (!a.isFavouritePlaylist)
              return (0, i.jsx)(N.dJ, {
                className: (0, l.W)(L().likeButton, L().control),
                isLiked: a.isLiked,
                onClick: Q,
                variant: "default",
                size: "s",
                iconSize: "xxs",
              });
          }, [Q, a.isFavouritePlaylist, a.isLiked]),
          et = (0, n.useMemo)(
            () =>
              (0, i.jsx)(S.Paper, {
                className: L().cover,
                radius: "s",
                withShadow: !0,
                ...(0, u.BA)(u.bG.playlist.PLAYLIST_CARD),
                children: (0, i.jsxs)("div", {
                  className: L().coverBlock,
                  onClick: Z,
                  children: [
                    (0, i.jsx)(N.BE, {
                      className: L().image,
                      src: a.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: U,
                      withAvatarReplace: !0,
                      "aria-hidden": !0,
                    }),
                    (0, i.jsx)(g.kk, {
                      isVisible: j || q,
                      className: L().controls,
                      playControl: (0, i.jsx)(N.JM, {
                        className: (0, l.W)(L().playButton, L().control),
                        buttonVariant: "default",
                        withHover: !1,
                        iconSize: "xl",
                        variant: "filled",
                        onClick: Y,
                        isPlaying: H,
                        disabled: !a.isAvailable,
                      }),
                      likeControl: ee,
                      menuControl: (0, i.jsx)(b, {
                        playlist: a,
                        onOpenChange: X,
                        open: j,
                        returnFocus: !1,
                        reference: (0, i.jsx)(c.z, {
                          onClick: K,
                          className: (0, l.W)(L().menuButton, L().control),
                          "aria-label": V({
                            id: "interface-actions.context-menu",
                          }),
                          icon: (0, i.jsx)(m.J, {
                            size: "xxs",
                            variant: "more",
                          }),
                          size: "s",
                          radius: "round",
                          ...(0, u.BA)(
                            u.bG.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                          ),
                        }),
                      }),
                      pinControl: (0, i.jsx)(N.RT, {
                        onClick: w,
                        isPinned: a.isPinned,
                        className: (0, l.W)(L().pinButton, L().control),
                        withRipple: !1,
                      }),
                    }),
                  ],
                }),
              }),
            [Z, a, U, j, q, Y, H, ee, X, K, V, w],
          ),
          ea = !!a.actualLikesCount && !a.isLikesCountHidden;
        return (0, i.jsxs)(g.m7, {
          ref: P,
          "aria-label": U,
          className: (0, l.W)(L().root, t),
          title: (0, i.jsx)(p.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            ...(0, u.BA)(u.bG.playlist.PLAYLIST_TITLE),
            children: (0, i.jsx)(N.rU, {
              className: L().titleLink,
              href: a.url,
              onClick: J,
              children: a.title,
            }),
          }),
          srTitle: (0, i.jsx)(N.rU, {
            href: a.url,
            onClick: J,
            children: a.title,
          }),
          "data-intersection-property-id": _,
          contentLinesCount: G,
          view: et,
          description: $,
          ...(0, u.BA)(u.bG.playlist.PLAYLIST_ITEM),
          children: [
            ea &&
              (0, i.jsx)(N.DB, {
                ariaLabel: V(
                  { id: "entity-names.likes-counter" },
                  { counter: a.actualLikesCount },
                ),
                likesCount: a.actualLikesCount,
                isLiked: a.isLiked,
                handleLikeClick: B,
              }),
            s,
          ],
        });
      });
    },
    18921: function (e, t, a) {
      "use strict";
      a.d(t, {
        PlaylistsCarousel: function () {
          return o;
        },
      });
      var i = a(9753),
        l = a(98639),
        s = a(67868),
        n = a(22003);
      let r = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: a,
            isShimmerActive: l,
            title: r,
            description: o,
            playlists: u,
            containerClassName: d,
            className: c,
            headerClassName: g,
            viewAllActionLink: m,
            ...S
          } = e;
          return (0, i.jsx)(s.HY, {
            isShimmerVisible: a,
            isShimmerActive: l,
            className: c,
            headerClassName: g,
            containerClassName: d,
            ref: t,
            title: r,
            description: o,
            viewAllActionLink: m,
            ...S,
            children:
              null == u
                ? void 0
                : u.map((e) =>
                    (0, i.jsx)(
                      n.PlaylistCard,
                      { playlist: e, contentLinesCount: 3 },
                      e.key,
                    ),
                  ),
          });
        },
        o = (0, l.forwardRef)((e, t) => (0, i.jsx)(r, { forwardRef: t, ...e }));
    },
    96290: function (e, t, a) {
      "use strict";
      a.d(t, {
        pr: function () {
          return n.ArtistAlbumsPage;
        },
        MX: function () {
          return o.M;
        },
        aG: function () {
          return r.ArtistConcertsPage;
        },
        vQ: function () {
          return A.ArtistFamiliarPage;
        },
        xA: function () {
          return i.ArtistPage;
        },
        Od: function () {
          return k;
        },
        x3: function () {
          return s.ArtistSimilarPage;
        },
        hD: function () {
          return l.ArtistTracksPage;
        },
      });
      var i = a(72244),
        l = a(55908),
        s = a(99931),
        n = a(84292),
        r = a(65295),
        o = a(38007);
      a(98171);
      var u = a(42288),
        d = a(10542),
        c = a(21585),
        g = a(93490),
        m = a(87908),
        S = a(31579),
        p = a(23472),
        y = a(33589),
        E = a(76351),
        h = a(63394);
      let N = (e, t) =>
          (0, u.pj)({
            artist: (0, y.d)(e),
            lastMonthListeners: null == t ? void 0 : t.lastMonthListeners,
          }),
        C = (e) => {
          let t = e.artists.map(y.tR);
          return (0, u.pj)({
            playlist: (0, S.RE)({ playlist: e.playlist }),
            artists: t,
          });
        };
      var G = a(38360),
        b = a(58421);
      let v = u.V5.model("ArtistAlbumsPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gu)),
          pager: u.V5.maybeNull(b.Vn),
          variant: u.V5.maybeNull(u.V5.enumeration(Object.values(o.M))),
          alreadyRequestedPages: u.V5.map(u.V5.number),
          pendingPages: u.V5.map(u.V5.number),
          requests: u.V5.maybeNull(u.V5.number),
          errorStatusCode: u.V5.maybeNull(u.V5.number),
          items: u.V5.array(u.V5.maybeNull(g.ug)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === h.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === d.CN.NOT_FOUND ||
                  e.errorStatusCode === d.CN.BAD_REQUEST;
              return (e.loadingState === h.Gu.REJECT && i) || a;
            },
          }))
          .actions((e) => ({
            setVariant: (t) => {
              e.variant = t;
            },
            getData: (0, u.ls)(function* (t) {
              let { artistId: a, page: i = 0, pageSize: l = 20, sort: s } = t,
                { artistsResource: n, modelActionsLogger: r } = (0, u.dU)(e);
              if (
                !(
                  (e.loadingState === h.Gu.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var c;
                  let t;
                  (e.loadingState = h.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let r = {
                    artistId: a,
                    page: i,
                    pageSize: l,
                    sort: { sortBy: null == s ? void 0 : s.sortBy },
                  };
                  switch (e.variant) {
                    case o.M.COMPILATIONS:
                      t = yield n.getAlsoAlbums(r);
                      break;
                    case o.M.DISCOGRAPHY:
                      t = yield n.getDiscographyAlbums(r);
                      break;
                    default:
                      t = yield n.getDirectAlbums(r);
                  }
                  let d = { page: i, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, u.pj)(
                      Array.from({ length: d.total }, () => null),
                    ));
                  let g = t.albums.map(G.N);
                  (0, h.AG)({
                    items: e.items,
                    mappedRawItems: g,
                    page: i,
                    pageSize: l,
                  }),
                    (e.pager = d),
                    (e.requests =
                      (null !== (c = e.requests) && void 0 !== c ? c : 0) + 1),
                    (e.loadingState = h.Gu.RESOLVE);
                } catch (t) {
                  r.error(t),
                    t instanceof d.du &&
                      (t.statusCode === d.CN.NOT_FOUND ||
                        t.statusCode === d.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = d.CN.NOT_FOUND),
                    e.loadingState !== h.Gu.IDLE &&
                      (e.loadingState = h.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = h.Gu.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                (e.variant = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, u.pj)([]));
            },
          })),
        L = u.V5.model("ArtistConcertsPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gu)),
          errorStatusCode: u.V5.maybeNull(u.V5.number),
          concerts: u.V5.maybeNull(u.V5.array(E.Z)),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gu.IDLE || e.loadingState === h.Gu.PENDING
              );
            },
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === h.Gu.RESOLVE &&
                  (null === (t = e.concerts) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                i =
                  e.errorStatusCode === d.CN.NOT_FOUND ||
                  e.errorStatusCode === d.CN.BAD_REQUEST;
              return (e.loadingState === h.Gu.REJECT && i) || a;
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: i, modelActionsLogger: l } = (0, u.dU)(e);
              if (e.loadingState !== h.Gu.PENDING)
                try {
                  e.loadingState = h.Gu.PENDING;
                  let { concerts: t } = yield i.getConcerts({ artistId: a });
                  (e.concerts = (0, u.pj)(t.map(E.zj))),
                    (e.loadingState = h.Gu.RESOLVE);
                } catch (t) {
                  l.error(t),
                    t instanceof d.du &&
                      (t.statusCode === d.CN.NOT_FOUND ||
                        t.statusCode === d.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = d.CN.NOT_FOUND),
                    e.loadingState !== h.Gu.IDLE &&
                      (e.loadingState = h.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = h.Gu.IDLE),
                (e.errorStatusCode = null),
                (e.concerts = null);
            },
          })),
        P = (e) =>
          (0, u.pj)({
            ...(0, g.cO)({ album: e, artists: e.artists }),
            version: e.version,
          }),
        _ = u.V5.model("ArtistFamiliarPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gu)),
          errorStatusCode: u.V5.maybeNull(u.V5.number),
          vibeTracks: u.V5.maybeNull(u.V5.array(p.le)),
          collectionTracks: u.V5.maybeNull(u.V5.array(p.le)),
          collectionAlbums: u.V5.maybeNull(u.V5.array(g.ug)),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gu.IDLE || e.loadingState === h.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === h.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === h.Gu.REJECT;
            },
            get isNotFound() {
              let t =
                e.errorStatusCode === d.CN.NOT_FOUND ||
                e.errorStatusCode === d.CN.BAD_REQUEST;
              return e.loadingState === h.Gu.REJECT && t;
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
              var n, r;
              return null !==
                (r =
                  null === (n = e.collectionTracks) || void 0 === n
                    ? void 0
                    : n.map(p.E5)) && void 0 !== r
                ? r
                : [];
            },
            get vibeEntitiesData() {
              var o, u;
              return null !==
                (u =
                  null === (o = e.vibeTracks) || void 0 === o
                    ? void 0
                    : o.map(p.E5)) && void 0 !== u
                ? u
                : [];
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: i, modelActionsLogger: l } = (0, u.dU)(e);
              if (e.loadingState !== h.Gu.PENDING)
                try {
                  var s, n, r, o, c, g;
                  e.loadingState = h.Gu.PENDING;
                  let t = yield i.getFamiliarYou({
                    artistId: a,
                    waveTracksLimit: 100,
                    collectionTracksLimit: 100,
                    collectionAlbumsLimit: 20,
                  });
                  (e.vibeTracks = (0, u.pj)(
                    null === (n = t.wave) || void 0 === n
                      ? void 0
                      : null === (s = n.tracks) || void 0 === s
                        ? void 0
                        : s.map((e) => (0, p.Vt)(e)),
                  )),
                    (e.collectionTracks = (0, u.pj)(
                      null === (o = t.collection) || void 0 === o
                        ? void 0
                        : null === (r = o.tracks) || void 0 === r
                          ? void 0
                          : r.map((e) => (0, p.Vt)(e)),
                    )),
                    (e.collectionAlbums = (0, u.pj)(
                      null === (g = t.collection) || void 0 === g
                        ? void 0
                        : null === (c = g.albums) || void 0 === c
                          ? void 0
                          : c.map(P),
                    )),
                    (e.loadingState = h.Gu.RESOLVE);
                } catch (t) {
                  l.error(t),
                    t instanceof d.du &&
                      (t.statusCode === d.CN.NOT_FOUND ||
                        t.statusCode === d.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = d.CN.NOT_FOUND),
                    e.loadingState !== h.Gu.IDLE &&
                      (e.loadingState = h.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = h.Gu.IDLE),
                (e.errorStatusCode = null),
                (e.vibeTracks = null),
                (e.collectionTracks = null);
            },
          }));
      var f = a(12090);
      let V = u.V5.model("ArtistPick", {
          playlist: f.Cd,
          artists: u.V5.array(y.Go),
        }),
        T = u.V5.model("ArtistSimilarArtistsPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gu)),
          errorStatusCode: u.V5.maybeNull(u.V5.number),
          similarArtists: u.V5.maybeNull(u.V5.array(y.Go)),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gu.IDLE || e.loadingState === h.Gu.PENDING
              );
            },
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === h.Gu.RESOLVE &&
                  (null === (t = e.similarArtists) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                i =
                  e.errorStatusCode === d.CN.NOT_FOUND ||
                  e.errorStatusCode === d.CN.BAD_REQUEST;
              return (e.loadingState === h.Gu.REJECT && i) || a;
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: i, modelActionsLogger: l } = (0, u.dU)(e);
              try {
                e.loadingState = h.Gu.PENDING;
                let t = yield i.getSimilarArtists({ artistId: a });
                (e.similarArtists = (0, u.pj)(t.similarArtists.map(y.d))),
                  e.loadingState !== h.Gu.IDLE &&
                    (e.loadingState = h.Gu.RESOLVE);
              } catch (t) {
                l.error(t),
                  t instanceof d.du &&
                    (t.statusCode === d.CN.NOT_FOUND ||
                      t.statusCode === d.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = d.CN.NOT_FOUND),
                  e.loadingState !== h.Gu.IDLE &&
                    (e.loadingState = h.Gu.REJECT);
              }
            }),
            reset() {
              (e.loadingState = h.Gu.IDLE),
                (e.errorStatusCode = null),
                (e.similarArtists = (0, u.pj)([]));
            },
          }));
      var I = a(72587);
      let D = u.V5.model("FamiliarInfo", {
        loadingState: u.V5.enumeration(Object.values(h.Gu)),
        vibeTrackCount: u.V5.optional(u.V5.number, 0),
        collectionTrackCount: u.V5.optional(u.V5.number, 0),
        collectionAlbumCount: u.V5.optional(u.V5.number, 0),
      })
        .views((e) => ({
          get isLoaded() {
            return e.loadingState === h.Gu.RESOLVE;
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
        .actions((e) => ({
          getData: (0, u.ls)(function* (t) {
            let { artistId: a } = t,
              { artistsResource: i, modelActionsLogger: l } = (0, u.dU)(e);
            if (e.loadingState !== h.Gu.PENDING)
              try {
                e.loadingState = h.Gu.PENDING;
                let t = yield i.getFamiliarYouInfo({
                  artistId: a,
                  withWaveInfo: !0,
                  withCollectionInfo: !0,
                });
                t.collection &&
                  ((e.collectionTrackCount = t.collection.trackCount),
                  (e.collectionAlbumCount = t.collection.albumCount)),
                  t.wave && (e.vibeTrackCount = t.wave.trackCount),
                  e.loadingState !== h.Gu.IDLE &&
                    (e.loadingState = h.Gu.RESOLVE);
              } catch (t) {
                l.error(t),
                  e.loadingState !== h.Gu.IDLE &&
                    (e.loadingState = h.Gu.REJECT);
              }
          }),
          reset() {
            (e.loadingState = h.Gu.IDLE),
              (e.vibeTrackCount = 0),
              (e.collectionTrackCount = 0),
              (e.collectionAlbumCount = 0);
          },
        }));
      var x = a(75191);
      let R = u.V5.model("FullTracksList", {
          loadingState: u.V5.enumeration(Object.values(h.Gu)),
          errorStatusCode: u.V5.maybeNull(u.V5.number),
          ids: u.V5.maybeNull(u.V5.array(u.V5.string)),
          tracks: u.V5.optional(u.V5.map(p.le), {}),
        })
          .views((e) => ({
            getTrackByIndex(t) {
              if (!e.ids || !e.ids.length) return null;
              let a = e.ids[t];
              return (a && e.tracks.get(a)) || null;
            },
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === h.Gu.RESOLVE &&
                  (null === (t = e.ids) || void 0 === t ? void 0 : t.length) ===
                    0,
                i =
                  e.errorStatusCode === d.CN.NOT_FOUND ||
                  e.errorStatusCode === d.CN.BAD_REQUEST;
              return (e.loadingState === h.Gu.REJECT && i) || a;
            },
          }))
          .actions((e) => ({
            getTracksIds: (0, u.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: i, modelActionsLogger: l } = (0, u.dU)(e);
              try {
                e.loadingState = h.Gu.PENDING;
                let t = yield i.getArtistTrackIds({ artistId: a }),
                  { sonataState: l } = (0, u.yj)(e);
                l.setUnloadedEntitiesData(t.map((e) => (0, x.RN)(e))),
                  (e.ids = (0, u.pj)(t)),
                  e.loadingState !== h.Gu.IDLE &&
                    (e.loadingState = h.Gu.RESOLVE);
              } catch (t) {
                l.error(t),
                  t instanceof d.du &&
                    (t.statusCode === d.CN.NOT_FOUND ||
                      t.statusCode === d.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = d.CN.NOT_FOUND),
                  e.loadingState !== h.Gu.IDLE &&
                    (e.loadingState = h.Gu.REJECT);
              }
            }),
            getTracks: (0, u.ls)(function* (t) {
              let { trackIds: a } = t,
                { tracksResource: i, modelActionsLogger: l } = (0, u.dU)(e);
              try {
                let t = yield i.getTracksMeta({
                  trackIds: a,
                  withProgress: !0,
                });
                e.tracks.merge(
                  t.reduce((e, t) => ((e[t.id] = (0, p.Vt)(t)), e), {}),
                );
              } catch (e) {
                l.error(e);
              }
            }),
            reset() {
              let { sonataState: t } = (0, u.yj)(e);
              t.resetUnloadedEntitiesData(),
                (e.loadingState = h.Gu.IDLE),
                (e.ids = (0, u.pj)([])),
                e.tracks.clear();
            },
          })),
        k = u.V5.model("ArtistPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gu)),
          meta: u.V5.maybeNull(m.o9),
          popularTracks: u.V5.array(p.le),
          lastRelease: u.V5.maybeNull(g.ug),
          upcomingAlbum: u.V5.maybeNull(g.W9),
          concerts: u.V5.maybeNull(u.V5.array(E.Z)),
          similarArtists: u.V5.array(y.Go),
          playlists: u.V5.array(S.d2),
          errorStatusCode: u.V5.maybeNull(u.V5.number),
          deprecationTargetArtistId: u.V5.maybeNull(u.V5.number),
          albums: u.V5.array(g.ug),
          discography: u.V5.array(g.ug),
          compilations: u.V5.array(g.ug),
          artistPick: u.V5.maybeNull(V),
          familiarInfo: D,
          albumsSubpage: v,
          fullTracksListSubpage: R,
          concertsSubpage: L,
          similarArtistsSubPage: T,
          familiarSubpage: _,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gu.IDLE || e.loadingState === h.Gu.PENDING
              );
            },
            get hasPopularTracks() {
              return (
                e.loadingState === h.Gu.IDLE ||
                e.loadingState === h.Gu.PENDING ||
                e.popularTracks.length > 0
              );
            },
            get hasAlbums() {
              return (
                e.loadingState === h.Gu.IDLE ||
                e.loadingState === h.Gu.PENDING ||
                e.albums.length > 0
              );
            },
            get hasDiscography() {
              return (
                e.loadingState === h.Gu.IDLE ||
                e.loadingState === h.Gu.PENDING ||
                e.discography.length > 0
              );
            },
            get hasCompilations() {
              return (
                e.loadingState === h.Gu.IDLE ||
                e.loadingState === h.Gu.PENDING ||
                e.compilations.length > 0
              );
            },
            get hasSimilarArtists() {
              return (
                e.loadingState === h.Gu.IDLE ||
                e.loadingState === h.Gu.PENDING ||
                e.similarArtists.length > 0
              );
            },
            get hasPlaylists() {
              return (
                e.loadingState === h.Gu.IDLE ||
                e.loadingState === h.Gu.PENDING ||
                (e.playlists && e.playlists.length > 0)
              );
            },
            get hasConcerts() {
              let { experiments: t } = (0, u.yj)(e);
              return (
                e.loadingState === h.Gu.IDLE ||
                e.loadingState === h.Gu.PENDING ||
                (e.concerts &&
                  e.concerts.length > 0 &&
                  t.checkExperiment(h.pe.WebNewBlockConcerts, "on"))
              );
            },
            get concertsLink() {
              var t, a;
              let { experiments: i } = (0, u.yj)(e);
              if (
                i.checkExperiment(h.pe.WebNewConcertsList, "on") &&
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
                e.loadingState === h.Gu.REJECT &&
                e.errorStatusCode === d.CN.NOT_FOUND
              );
            },
            get isLoaded() {
              return e.loadingState === h.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === h.Gu.REJECT;
            },
            get hasReleaseBlock() {
              return !!(this.isLoading || e.upcomingAlbum || e.lastRelease);
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* (t) {
              let { artistId: a } = t,
                { slides: i, experiments: l, disclaimer: s } = (0, u.yj)(e),
                { artistsResource: n, modelActionsLogger: r } = (0, u.dU)(e),
                o = l.checkExperiment(
                  h.pe.WebNextArtistDisableLastReleases,
                  "on",
                ),
                m = l.checkExperiment(
                  h.pe.WebNextArtistDisablePopularTracks,
                  "on",
                ),
                G = l.checkExperiment(
                  h.pe.WebNextArtistDisableSimilarArtists,
                  "on",
                ),
                b = l.checkExperiment(
                  h.pe.WebNextArtistDisablePopularAlbums,
                  "on",
                ),
                v = l.checkExperiment(
                  h.pe.WebNextArtistDisableDiscography,
                  "on",
                ),
                L = l.checkExperiment(
                  h.pe.WebNextArtistDisableCompilations,
                  "on",
                ),
                P = l.checkExperiment(h.pe.WebNextArtistDisablePlaylists, "on"),
                _ = l.checkExperiment(h.pe.WebNextLegalRejectArtist, "on");
              if (e.loadingState !== h.Gu.PENDING)
                try {
                  var f, V;
                  e.loadingState = h.Gu.PENDING;
                  let {
                    popularTracks: t,
                    error: l,
                    artist: r,
                    stats: T,
                    albums: I,
                    playlists: D,
                    alsoAlbums: x,
                    similarArtists: R,
                    lastReleases: k,
                    concerts: A,
                    upcomingAlbum: j,
                    discography: O,
                    artistPick: U,
                  } = yield n.getBriefInfo({
                    artistId: a,
                    popularTracksCount: 5,
                    fetchPlaylistLikesCounts: !0,
                    discographyBlockEnabled: !0,
                  });
                  if (
                    "not-found" === l ||
                    (null == r ? void 0 : r.error) === "not-found"
                  ) {
                    (e.errorStatusCode = d.CN.NOT_FOUND),
                      (e.loadingState = h.Gu.REJECT);
                    return;
                  }
                  if (
                    null === (f = r.deprecation) || void 0 === f
                      ? void 0
                      : f.targetArtistId
                  ) {
                    (e.deprecationTargetArtistId =
                      r.deprecation.targetArtistId),
                      (e.loadingState = h.Gu.RESOLVE);
                    return;
                  }
                  e.meta = (0, u.pj)(N(r, T));
                  let B = (
                    null !== (V = r.disclaimers) && void 0 !== V ? V : []
                  ).includes(c.em.MODAL);
                  if (
                    (!r.available &&
                      B &&
                      _ &&
                      (yield s.getArtistDisclaimer({ artistId: a })),
                    !o && k && k.length > 0)
                  ) {
                    let t = k[0];
                    t &&
                      I &&
                      I.length > 1 &&
                      (e.lastRelease = (0, u.pj)((0, g.ym)(t)));
                  }
                  j && (e.upcomingAlbum = (0, u.pj)((0, g.wq)(j))),
                    A && (e.concerts = (0, u.pj)(A.map(E.zj))),
                    !m &&
                      t &&
                      t.length > 0 &&
                      (e.popularTracks = (0, u.pj)(
                        t.slice(0, 5).map((e) => (0, p.Vt)(e)),
                      )),
                    !G &&
                      R &&
                      R.length > 0 &&
                      (e.similarArtists = (0, u.pj)(R.slice(0, 9).map(y.d))),
                    !b &&
                      Number(null == I ? void 0 : I.length) > 0 &&
                      (e.albums = (0, u.pj)(null == I ? void 0 : I.map(g.ym))),
                    !v &&
                      Number(null == O ? void 0 : O.length) > 0 &&
                      (e.discography = (0, u.pj)(
                        null == O ? void 0 : O.map(g.ym).slice(0, 9),
                      )),
                    !L &&
                      Number(null == x ? void 0 : x.length) > 0 &&
                      (e.compilations = (0, u.pj)(
                        null == x ? void 0 : x.map(g.ym).slice(0, 9),
                      )),
                    !P &&
                      D &&
                      D.length > 0 &&
                      (e.playlists = (0, u.pj)(D.map(S.Q9).slice(0, 9))),
                    U && (e.artistPick = C(U)),
                    i.resetArtist(),
                    e.loadingState !== h.Gu.IDLE &&
                      (e.loadingState = h.Gu.RESOLVE);
                } catch (t) {
                  r.error(t),
                    t instanceof d.du &&
                      (t.statusCode === d.CN.NOT_FOUND ||
                        t.statusCode === d.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = d.CN.NOT_FOUND),
                    e.loadingState !== h.Gu.IDLE &&
                      (e.loadingState = h.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = h.Gu.IDLE),
                (e.meta = null),
                (e.errorStatusCode = null),
                (e.deprecationTargetArtistId = null),
                (e.lastRelease = null),
                (e.upcomingAlbum = null),
                (e.concerts = null),
                (e.artistPick = null),
                (e.popularTracks = (0, u.pj)([])),
                (e.similarArtists = (0, u.pj)([])),
                (e.playlists = (0, u.pj)([])),
                (e.albums = (0, u.pj)([])),
                (e.discography = (0, u.pj)([])),
                (e.compilations = (0, u.pj)([]));
            },
          }));
      var A = a(60325);
    },
    93438: function (e, t, a) {
      "use strict";
      a.d(t, {
        D: function () {
          return N;
        },
        _: function () {
          return b;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(98639),
        r = a(80542),
        o = a(23881),
        u = a(84338),
        d = a(90679),
        c = a(2570),
        g = a(68106),
        m = a(5293),
        S = a(23472),
        p = a(63394),
        y = a(67868),
        E = a(10929),
        h = a.n(E);
      let N = (0, s.Pi)(() => {
        let { formatMessage: e } = (0, r.Z)(),
          { chart: t } = (0, p.oR)(),
          a = (0, p.k6)(),
          [s, E] = (0, m.zU)(),
          N = (0, p.x5)({ pageId: p.Rh.CHART });
        t.loadingState === p.Gu.IDLE && (0, n.use)(t.getTracks()),
          (0, p.NO)(t.loadingState === p.Gu.RESOLVE);
        let C = (0, n.useCallback)(
            (e) => {
              let a = t.items[e];
              return a && !t.isLoading && t.playlistMeta
                ? (0, i.jsx)(S._3, {
                    track: a,
                    playContextParams: {
                      contextData: {
                        type: u.Ak.Playlist,
                        meta: {
                          id: ""
                            .concat(t.playlistMeta.uid, ":")
                            .concat(t.playlistMeta.kind),
                        },
                        from: N,
                      },
                      queueParams: { index: e },
                      loadContextMeta: !0,
                    },
                  })
                : (0, i.jsx)(y.DX, {
                    isActive: !0,
                    className: h().shimmerItem,
                    variant: p.Lx.PLAYLIST,
                  });
            },
            [N, t.items, t.isLoading, t.playlistMeta],
          ),
          G = (0, n.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(y.$_, { className: h().footer }),
            }),
            [],
          ),
          b = (0, n.useMemo)(
            () =>
              t.title
                ? (0, i.jsx)(c.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: t.title,
                  })
                : (0, i.jsx)(d.Shimmer, {
                    className: h().shimmerTitle,
                    radius: "l",
                  }),
            [t.title],
          );
        return t.loadingState === p.Gu.REJECT
          ? (0, i.jsx)(g.D, {})
          : (0, i.jsx)(p.Lh, {
              pageId: p.Rh.CHART,
              children: (0, i.jsx)(m.I7, {
                scrollElement: s,
                ...(t.title && { outerTitle: t.title }),
                children: (0, i.jsxs)("div", {
                  className: h().root,
                  ...(0, o.BA)(o.Br.chart.CHART_PAGE),
                  children: [
                    (0, i.jsx)(y.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: a.canBack,
                      children: b,
                    }),
                    (0, i.jsx)(y.Wv, {
                      className: (0, l.W)(h().scrollContainer, h().important),
                      listClassName: h().content,
                      customComponents: G,
                      totalCount: t.items.length,
                      itemContentCallback: C,
                      debounceDurationInMs: 300,
                      handleRef: E,
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
      var C = a(42288);
      let G = C.V5.model("ChartPagePlaylistModel", {
          uuid: C.V5.string,
          uid: C.V5.number,
          kind: C.V5.number,
        }),
        b = C.V5.model("ChartPageModel", {
          title: C.V5.maybeNull(C.V5.string),
          playlistMeta: C.V5.maybeNull(G),
          items: C.V5.array(S.le),
          loadingState: C.V5.enumeration(Object.values(p.Gu)),
        })
          .actions((e) => ({
            getTracks: (0, C.ls)(function* () {
              let { chartResource: t, modelActionsLogger: a } = (0, C.dU)(e);
              if (e.loadingState !== p.Gu.PENDING)
                try {
                  e.loadingState = p.Gu.PENDING;
                  let a = yield t.getChart();
                  (e.title = a.title),
                    (e.playlistMeta = (0, C.pj)({
                      uuid: a.playContext.playlistUuid,
                      uid: a.playContext.uid,
                      kind: a.playContext.kind,
                    })),
                    (e.items = (0, C.pj)(
                      a.chartPositions.map((e) =>
                        (0, S.S7)(e.track, e.chartPosition),
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
    95946: function (e, t, a) {
      "use strict";
      a.d(t, {
        rT: function () {
          return l.GenreAlbumsPage;
        },
        eq: function () {
          return s.GenreArtistsPage;
        },
        a0: function () {
          return i.GenrePage;
        },
        Kx: function () {
          return N;
        },
        Fe: function () {
          return n.GenrePlaylistsPage;
        },
      });
      var i = a(5112),
        l = a(70660),
        s = a(12788),
        n = a(91477);
      a(20806);
      var r = a(42288),
        o = a(10542),
        u = a(93490),
        d = a(31579),
        c = a(33589),
        g = a(63394),
        m = a(38360),
        S = a(58421);
      let p = r.V5.model("GenreAlbumsPage", {
          loadingState: r.V5.enumeration(Object.values(g.Gu)),
          pager: r.V5.maybeNull(S.Vn),
          alreadyRequestedPages: r.V5.map(r.V5.number),
          pendingPages: r.V5.map(r.V5.number),
          requests: r.V5.maybeNull(r.V5.number),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          fullTitle: r.V5.maybeNull(r.V5.string),
          items: r.V5.array(r.V5.maybeNull(u.ug)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === g.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === o.CN.NOT_FOUND ||
                  e.errorStatusCode === o.CN.BAD_REQUEST;
              return (e.loadingState === g.Gu.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return e.loadingState === g.Gu.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getData: (0, r.ls)(function* (t) {
              let { metatagId: a, page: i = 0, pageSize: l = 20 } = t,
                { metatagsResource: s, modelActionsLogger: n } = (0, r.dU)(e);
              if (
                !(
                  (e.loadingState === g.Gu.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var u;
                  (e.loadingState = g.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield s.getMetatagAlbums({
                    id: a,
                    offset: i,
                    limit: l,
                  });
                  e.fullTitle = t.title.fullTitle;
                  let n = { page: i, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, r.pj)(
                      Array.from({ length: n.total }, () => null),
                    ));
                  let o = t.albums.map(m.N);
                  (0, g.AG)({
                    items: e.items,
                    mappedRawItems: o,
                    page: i,
                    pageSize: l,
                  }),
                    (e.pager = n),
                    (e.requests =
                      (null !== (u = e.requests) && void 0 !== u ? u : 0) + 1),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.RESOLVE);
                } catch (t) {
                  n.error(t),
                    t instanceof o.du &&
                      (t.statusCode === o.CN.NOT_FOUND ||
                        t.statusCode === o.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = o.CN.NOT_FOUND),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = g.Gu.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, r.pj)([]));
            },
          })),
        y = r.V5.model("GenreArtistsPage", {
          loadingState: r.V5.enumeration(Object.values(g.Gu)),
          pager: r.V5.maybeNull(S.Vn),
          alreadyRequestedPages: r.V5.map(r.V5.number),
          pendingPages: r.V5.map(r.V5.number),
          requests: r.V5.maybeNull(r.V5.number),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          fullTitle: r.V5.maybeNull(r.V5.string),
          items: r.V5.array(r.V5.maybeNull(c.Go)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === g.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === o.CN.NOT_FOUND ||
                  e.errorStatusCode === o.CN.BAD_REQUEST;
              return (e.loadingState === g.Gu.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return e.loadingState === g.Gu.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getData: (0, r.ls)(function* (t) {
              let { metatagId: a, page: i = 0, pageSize: l = 20 } = t,
                { metatagsResource: s, modelActionsLogger: n } = (0, r.dU)(e);
              if (
                !(
                  (e.loadingState === g.Gu.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var u;
                  (e.loadingState = g.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield s.getMetatagArtists({
                    id: a,
                    offset: i,
                    limit: l,
                    period: "week",
                  });
                  e.fullTitle = t.title.fullTitle;
                  let n = { page: i, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, r.pj)(
                      Array.from({ length: n.total }, () => null),
                    ));
                  let o = t.artists.map((e) => (0, c.d)(e.artist));
                  (0, g.AG)({
                    items: e.items,
                    mappedRawItems: o,
                    page: i,
                    pageSize: l,
                  }),
                    (e.pager = n),
                    (e.requests =
                      (null !== (u = e.requests) && void 0 !== u ? u : 0) + 1),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.RESOLVE);
                } catch (t) {
                  n.error(t),
                    t instanceof o.du &&
                      (t.statusCode === o.CN.NOT_FOUND ||
                        t.statusCode === o.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = o.CN.NOT_FOUND),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = g.Gu.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, r.pj)([]));
            },
          }));
      var E = a(12090);
      let h = r.V5.model("GenrePlaylistsPage", {
          loadingState: r.V5.enumeration(Object.values(g.Gu)),
          pager: r.V5.maybeNull(S.Vn),
          alreadyRequestedPages: r.V5.map(r.V5.number),
          pendingPages: r.V5.map(r.V5.number),
          requests: r.V5.maybeNull(r.V5.number),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          fullTitle: r.V5.maybeNull(r.V5.string),
          items: r.V5.array(r.V5.maybeNull(E.Cd)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === g.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === o.CN.NOT_FOUND ||
                  e.errorStatusCode === o.CN.BAD_REQUEST;
              return (e.loadingState === g.Gu.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return (
                !this.isNotFound &&
                e.loadingState === g.Gu.REJECT &&
                0 === e.alreadyRequestedPages.size
              );
            },
          }))
          .actions((e) => ({
            getData: (0, r.ls)(function* (t) {
              let { metatagId: a, page: i = 0, pageSize: l = 20 } = t,
                { metatagsResource: s, modelActionsLogger: n } = (0, r.dU)(e);
              if (
                !(
                  (e.loadingState === g.Gu.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var o;
                  (e.loadingState = g.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield s.getMetatagPlaylists({
                    id: a,
                    offset: i,
                    limit: l,
                    withLikesCount: !0,
                  });
                  e.fullTitle = t.title.fullTitle;
                  let n = { page: i, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, r.pj)(
                      Array.from({ length: n.total }, () => null),
                    ));
                  let u = t.playlists.map(E.PV);
                  (0, g.AG)({
                    items: e.items,
                    mappedRawItems: u,
                    page: i,
                    pageSize: l,
                  }),
                    (e.pager = n),
                    (e.requests =
                      (null !== (o = e.requests) && void 0 !== o ? o : 0) + 1),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.RESOLVE);
                } catch (t) {
                  n.error(t),
                    e.alreadyRequestedPages.delete("".concat(i)),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = g.Gu.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, r.pj)([]));
            },
          })),
        N = r.V5.model("GenrePage", {
          id: r.V5.maybeNull(r.V5.string),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          loadingState: r.V5.enumeration(Object.values(g.Gu)),
          fullTitle: r.V5.maybeNull(r.V5.string),
          artists: r.V5.array(c.Go),
          albums: r.V5.array(u.ug),
          playlists: r.V5.array(d.d2),
          albumsSubpage: p,
          artistsSubpage: y,
          playlistsSubpage: h,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === g.Gu.IDLE || e.loadingState === g.Gu.PENDING
              );
            },
            get hasAlbums() {
              return (
                e.loadingState === g.Gu.IDLE ||
                e.loadingState === g.Gu.PENDING ||
                e.albums.length > 0
              );
            },
            get hasArtists() {
              return (
                e.loadingState === g.Gu.IDLE ||
                e.loadingState === g.Gu.PENDING ||
                e.artists.length > 0
              );
            },
            get hasPlaylists() {
              return (
                e.loadingState === g.Gu.IDLE ||
                e.loadingState === g.Gu.PENDING ||
                e.playlists.length > 0
              );
            },
            get isNotFound() {
              let t =
                  e.loadingState === g.Gu.RESOLVE &&
                  !this.hasAlbums &&
                  !this.hasArtists &&
                  !this.hasPlaylists,
                a =
                  e.errorStatusCode === o.CN.NOT_FOUND ||
                  e.errorStatusCode === o.CN.BAD_REQUEST;
              return (e.loadingState === g.Gu.REJECT && a) || t;
            },
          }))
          .actions((e) => ({
            getData: (0, r.ls)(function* (t) {
              let { id: a } = t,
                { metatagsResource: i, modelActionsLogger: l } = (0, r.dU)(e);
              if (e.loadingState !== g.Gu.PENDING)
                try {
                  e.loadingState = g.Gu.PENDING;
                  let t = yield i.getMetatagById({ id: a });
                  (e.id = t.id),
                    (e.fullTitle = t.title.fullTitle),
                    (e.artists = (0, r.pj)(t.artists.map(c.d))),
                    (e.albums = (0, r.pj)(t.albums.map(u.ym))),
                    (e.playlists = (0, r.pj)(t.playlists.map(d.Q9))),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.RESOLVE);
                } catch (t) {
                  l.error(t),
                    t instanceof o.du &&
                      (t.statusCode === o.CN.NOT_FOUND ||
                        t.statusCode === o.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = o.CN.NOT_FOUND),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = g.Gu.IDLE),
                (e.fullTitle = null),
                (e.artists = (0, r.pj)([])),
                (e.albums = (0, r.pj)([])),
                (e.playlists = (0, r.pj)([]));
            },
          }));
    },
    70660: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreAlbumsPage: function () {
          return E;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(2570),
        d = a(68106),
        c = a(93490),
        g = a(5293),
        m = a(63394),
        S = a(67868),
        p = a(40489),
        y = a.n(p);
      let E = (0, s.Pi)((e) => {
        var t, a, s;
        let { metatagId: p } = e,
          {
            genre: { albumsSubpage: E },
          } = (0, m.oR)(),
          { formatMessage: h } = (0, o.Z)(),
          [N, C] = (0, g.zU)(),
          G = (0, m.k6)();
        p &&
          E.loadingState === m.Gu.IDLE &&
          (0, r.use)(E.getData({ metatagId: p, page: 0, pageSize: 20 }));
        let b = (0, r.useCallback)(
          (e) => {
            p && E.getData({ metatagId: p, page: e, pageSize: 20 });
          },
          [E, p],
        );
        (0, r.useEffect)(
          () => () => {
            E.reset();
          },
          [E],
        ),
          E.isNotFound && (0, n.notFound)(),
          (0, m.NO)(E.loadingState === m.Gu.RESOLVE);
        let v = (0, r.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(S.$_, { className: y().footer }) }),
          [],
        );
        return E.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(m.Lh, {
              pageId: m.Rh.GENRE_ALBUMS,
              children: (0, i.jsx)(g.I7, {
                scrollElement: N,
                outerTitle: E.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: y().root,
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: G.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: E.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(S.Wv, {
                      className: (0, l.W)(y().scrollContainer, y().important),
                      customComponents: v,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == E
                              ? void 0
                              : null === (t = E.items) || void 0 === t
                                ? void 0
                                : t[e],
                          l = h(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: h({ id: "entity-names.album" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              c.rf,
                              { album: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, i.jsx)(S.hi, { "aria-label": l });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == E
                              ? void 0
                              : null === (t = E.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: b,
                      pageSize: 20,
                      totalRequests:
                        null !== (s = E.requests) && void 0 !== s ? s : 0,
                      listClassName: y().content,
                      itemClassName: y().item,
                      handleRef: C,
                      context: {
                        listAriaLabel: h(
                          { id: "mixes.albums-list" },
                          { genreName: E.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    12788: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreArtistsPage: function () {
          return E;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(2570),
        d = a(68106),
        c = a(87908),
        g = a(5293),
        m = a(63394),
        S = a(67868),
        p = a(6380),
        y = a.n(p);
      let E = (0, s.Pi)((e) => {
        var t, a, s;
        let { metatagId: p } = e,
          {
            genre: { artistsSubpage: E },
          } = (0, m.oR)(),
          { formatMessage: h } = (0, o.Z)(),
          [N, C] = (0, g.zU)(),
          G = (0, m.k6)();
        p &&
          E.loadingState === m.Gu.IDLE &&
          (0, r.use)(E.getData({ metatagId: p, page: 0, pageSize: 20 }));
        let b = (0, r.useCallback)(
          (e) => {
            p && E.getData({ metatagId: p, page: e, pageSize: 20 });
          },
          [E, p],
        );
        (0, r.useEffect)(
          () => () => {
            E.reset();
          },
          [E],
        ),
          E.isNotFound && (0, n.notFound)(),
          (0, m.NO)(E.loadingState === m.Gu.RESOLVE);
        let v = (0, r.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(S.$_, { className: y().footer }) }),
          [],
        );
        return E.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(m.Lh, {
              pageId: m.Rh.GENRE_ARTISTS,
              children: (0, i.jsx)(g.I7, {
                scrollElement: N,
                outerTitle: E.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: y().root,
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: G.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: E.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(S.Wv, {
                      className: (0, l.W)(y().scrollContainer, y().important),
                      customComponents: v,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == E
                              ? void 0
                              : null === (t = E.items) || void 0 === t
                                ? void 0
                                : t[e],
                          l = h(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: h({ id: "entity-names.artist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              c.IT,
                              { artist: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, i.jsx)(S.hi, {
                              "aria-label": l,
                              round: !0,
                              centered: !0,
                            });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == E
                              ? void 0
                              : null === (t = E.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: b,
                      pageSize: 20,
                      totalRequests:
                        null !== (s = E.requests) && void 0 !== s ? s : 0,
                      listClassName: y().content,
                      itemClassName: y().item,
                      handleRef: C,
                      context: {
                        listAriaLabel: h(
                          { id: "mixes.artists-list" },
                          { genreName: E.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    20806: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreNotFoundPage: function () {
          return n;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(23948);
      let n = (0, l.Pi)(() => (0, i.jsx)(s.T, {}));
    },
    5112: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenrePage: function () {
          return C;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(41055),
        d = a(2570),
        c = a(68106),
        g = a(93490),
        m = a(87908),
        S = a(5293),
        p = a(31579),
        y = a(63394),
        E = a(67868),
        h = a(60015),
        N = a.n(h);
      let C = (0, s.Pi)((e) => {
        let { metatagId: t } = e,
          { genre: a } = (0, y.oR)(),
          { formatMessage: s } = (0, o.Z)(),
          [h, C] = (0, S.zU)(),
          G = (0, y.k6)();
        return (t &&
          a.loadingState === y.Gu.IDLE &&
          (0, r.use)(a.getData({ id: t })),
        a.isNotFound && (0, n.notFound)(),
        (0, r.useEffect)(
          () => () => {
            a.reset();
          },
          [a],
        ),
        (0, y.NO)(a.loadingState === y.Gu.RESOLVE),
        a.loadingState !== y.Gu.REJECT || a.isNotFound)
          ? (0, i.jsx)(y.Lh, {
              pageId: y.Rh.GENRE,
              children: (0, i.jsxs)(S.I7, {
                scrollElement: h,
                outerTitle: a.fullTitle,
                children: [
                  (0, i.jsx)(E.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: G.canBack,
                    children: (0, i.jsx)(d.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: a.fullTitle,
                    }),
                  }),
                  (0, i.jsx)(u.t, {
                    className: N().root,
                    containerClassName: N().content,
                    ref: C,
                    children: (0, i.jsxs)("div", {
                      className: N().carouselBlocks,
                      children: [
                        a.hasPlaylists &&
                          (0, i.jsx)(y.J, {
                            blockId: y.BE.PLAYLISTS_CAROUSEL,
                            blockType: y.BE.PLAYLISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 1,
                            blockIdForFrom: y.BE.PLAYLISTS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(p.VD, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, l.W)(
                                N().carouselBlockHeader,
                                N().carouselBlock,
                              ),
                              containerClassName: N().carouselBlock,
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
                          (0, i.jsx)(y.J, {
                            blockId: y.BE.ALBUMS_CAROUSEL,
                            blockType: y.BE.ALBUMS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 2,
                            blockIdForFrom: y.BE.ALBUMS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(g.wk, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, l.W)(
                                N().carouselBlockHeader,
                                N().carouselBlock,
                              ),
                              containerClassName: N().carouselBlock,
                              albums: a.albums,
                              title: s({ id: "entity-names.new-albums" }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/albums",
                              ),
                            }),
                          }),
                        a.hasArtists &&
                          (0, i.jsx)(y.J, {
                            blockId: y.BE.ARTISTS_CAROUSEL,
                            blockType: y.BE.ARTISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 3,
                            blockIdForFrom: y.BE.ARTISTS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(E.HY, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, l.W)(
                                N().carouselBlockHeader,
                                N().carouselBlock,
                              ),
                              containerClassName: N().carouselBlock,
                              title: s({ id: "entity-names.popular-artists" }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/artists",
                              ),
                              children: a.artists.map((e) =>
                                (0, i.jsx)(
                                  m.IT,
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
    91477: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenrePlaylistsPage: function () {
          return E;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(2570),
        d = a(68106),
        c = a(5293),
        g = a(31579),
        m = a(63394),
        S = a(67868),
        p = a(15874),
        y = a.n(p);
      let E = (0, s.Pi)((e) => {
        var t, a, s;
        let { metatagId: p } = e,
          {
            genre: { playlistsSubpage: E },
          } = (0, m.oR)(),
          { formatMessage: h } = (0, o.Z)(),
          [N, C] = (0, c.zU)(),
          G = (0, m.k6)();
        p &&
          E.loadingState === m.Gu.IDLE &&
          (0, r.use)(E.getData({ metatagId: p, page: 0, pageSize: 20 }));
        let b = (0, r.useCallback)(
          (e) => {
            p && E.getData({ metatagId: p, page: e, pageSize: 20 });
          },
          [E, p],
        );
        (0, r.useEffect)(
          () => () => {
            E.reset();
          },
          [E],
        ),
          E.isNotFound && (0, n.notFound)(),
          (0, m.NO)(E.loadingState === m.Gu.RESOLVE);
        let v = (0, r.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(S.$_, { className: y().footer }) }),
          [],
        );
        return E.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(m.Lh, {
              pageId: m.Rh.GENRE_PLAYLISTS,
              children: (0, i.jsx)(c.I7, {
                scrollElement: N,
                outerTitle: E.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: y().root,
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: G.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: E.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(S.Wv, {
                      className: (0, l.W)(y().scrollContainer, y().important),
                      customComponents: v,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == E
                              ? void 0
                              : null === (t = E.items) || void 0 === t
                                ? void 0
                                : t[e],
                          l = h(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: h({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              g.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(S.hi, { "aria-label": l });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == E
                              ? void 0
                              : null === (t = E.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: b,
                      pageSize: 20,
                      totalRequests:
                        null !== (s = E.requests) && void 0 !== s ? s : 0,
                      listClassName: y().content,
                      itemClassName: y().item,
                      handleRef: C,
                      context: {
                        listAriaLabel: h(
                          { id: "mixes.playlists-list" },
                          { genreName: E.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    72636: function (e, t, a) {
      "use strict";
      a.d(t, {
        rx: function () {
          return i.GenresPage;
        },
        EU: function () {
          return o;
        },
      });
      var i = a(95002);
      a(49535);
      var l = a(42288),
        s = a(10542),
        n = a(76154),
        r = a(63394);
      let o = l.V5.model("GenresPageModel", {
        title: l.V5.maybeNull(l.V5.string),
        items: l.V5.array(n.fm),
        loadingState: l.V5.enumeration(Object.values(r.Gu)),
        errorStatusCode: l.V5.maybeNull(l.V5.number),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === r.Gu.IDLE || e.loadingState === r.Gu.PENDING
            );
          },
          get isNotFound() {
            let t = e.loadingState === r.Gu.RESOLVE && 0 === e.items.length;
            return e.errorStatusCode === s.CN.NOT_FOUND || t;
          },
        }))
        .actions((e) => ({
          getData: (0, l.ls)(function* (t) {
            let { landing3Resource: a, modelActionsLogger: i } = (0, l.dU)(e);
            if (e.loadingState !== r.Gu.PENDING)
              try {
                e.loadingState = r.Gu.PENDING;
                let i = (yield a.getMetatags({})).trees.find(
                  (e) => e.navigationId === t,
                );
                if (!i) {
                  e.errorStatusCode = s.CN.NOT_FOUND;
                  return;
                }
                (e.title = i.title),
                  (e.items = (0, l.pj)(i.leaves.map(n.uG))),
                  e.loadingState !== r.Gu.IDLE &&
                    (e.loadingState = r.Gu.RESOLVE);
              } catch (t) {
                i.error(t),
                  t instanceof s.du &&
                    (t.statusCode === s.CN.NOT_FOUND ||
                      t.statusCode === s.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = s.CN.NOT_FOUND),
                  e.loadingState !== r.Gu.IDLE &&
                    (e.loadingState = r.Gu.REJECT);
              }
          }),
          reset() {
            (e.loadingState = r.Gu.IDLE),
              (e.title = null),
              (e.items = (0, l.pj)([])),
              (e.errorStatusCode = null);
          },
        }));
    },
    49535: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenresNotFoundPage: function () {
          return s;
        },
      });
      var i = a(9753),
        l = a(23948);
      let s = () => (0, i.jsx)(l.T, {});
    },
    95002: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenresPage: function () {
          return y;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(74717),
        n = a(98639),
        r = a(41055),
        o = a(2570),
        u = a(68106),
        d = a(5293),
        c = a(76154),
        g = a(63394),
        m = a(67868),
        S = a(69836),
        p = a.n(S);
      let y = (0, l.Pi)((e) => {
        let { navigationId: t } = e,
          { genres: a } = (0, g.oR)(),
          [l, S] = (0, d.zU)(),
          y = (0, g.k6)();
        return ((0, n.useEffect)(
          () => () => {
            a.reset();
          },
          [a, t],
        ),
        a.isNotFound && (0, s.notFound)(),
        t && a.loadingState === g.Gu.IDLE && (0, n.use)(a.getData(t)),
        (0, g.NO)(a.loadingState === g.Gu.RESOLVE),
        a.loadingState === g.Gu.REJECT)
          ? (0, i.jsx)(u.D, {})
          : (0, i.jsxs)(d.I7, {
              scrollElement: l,
              outerTitle: a.title,
              children: [
                (0, i.jsx)(m.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: y.canBack,
                  children: (0, i.jsx)(o.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: a.title,
                  }),
                }),
                (0, i.jsx)(r.t, {
                  className: p().root,
                  containerClassName: p().content,
                  ref: S,
                  children: (0, i.jsx)("div", {
                    className: p().list,
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
    34790: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicNotFoundPage: function () {
          return o;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(98639),
        n = a(23948),
        r = a(63394);
      let o = (0, l.Pi)(() => {
        let { nonMusic: e } = (0, r.oR)();
        return (
          (0, s.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, i.jsx)(n.T, {})
        );
      });
    },
    55549: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicPage: function () {
          return G;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(31014),
        d = a(23881),
        c = a(21585),
        g = a(41055),
        m = a(2570),
        S = a(89102),
        p = a(68106),
        y = a(5293),
        E = a(63394),
        h = a(67868),
        N = a(35857),
        C = a.n(N);
      let G = (0, s.Pi)(() => {
        let { experiments: e, nonMusic: t, user: a } = (0, E.oR)(),
          { formatMessage: s } = (0, o.Z)(),
          [N, G] = (0, y.zU)();
        e.checkExperiment(E.pe.WebNextNonMusicLanding, "on") ||
          (0, n.notFound)(),
          t.landing.loadingState === E.Gu.IDLE &&
            (0, r.use)(
              t.landing.getSkeleton(
                { id: c.jB.WEB_NON_MUSIC, showWizard: a.settings.showWizard },
                { preloadBlocks: 3 },
              ),
            ),
          (0, r.useEffect)(() => () => t.landing.reset(), [t.landing]),
          (0, E.NO)(t.landing.loadingState === E.Gu.RESOLVE);
        let b = (0, S._B)(t.landing);
        return (0, i.jsx)(E.Lh, {
          pageId: E.Rh.NON_MUSIC,
          children: (0, i.jsxs)(y.I7, {
            scrollElement: N,
            outerTitle: s({ id: "entity-names.podcasts" }),
            children: [
              (0, i.jsx)(h.h4, {
                variant: "text",
                showControls: !1,
                children: (0, i.jsx)("div", {
                  className: C().header,
                  children: (0, i.jsx)(m.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    children: (0, i.jsx)(u.Z, { id: "entity-names.podcasts" }),
                  }),
                }),
              }),
              (0, i.jsxs)(g.t, {
                className: C().root,
                containerClassName: C().content,
                ref: G,
                ...(0, d.BA)(d.Br.nonMusic.NON_MUSIC_PAGE),
                children: [
                  (0, i.jsx)("div", {
                    className: (0, l.W)(C().landing, {
                      [C().landing_onlyWizard]: b,
                    }),
                    children: (0, i.jsx)(S.Od, {
                      landing: t.landing,
                      errorComponent: (0, i.jsx)(p.D, {
                        className: C().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, i.jsx)(h.$_, { className: C().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    23976: function (e, t, a) {
      "use strict";
      a.d(t, {
        s6: function () {
          return i.PostPage;
        },
        vU: function () {
          return g;
        },
      });
      var i = a(18211);
      a(45833);
      var l = a(42288),
        s = a(10542),
        n = a(99287),
        r = a(93490),
        o = a(31579),
        u = a(33589),
        d = a(12090),
        c = a(63394);
      let g = l.V5.model("PostPage", {
        errorStatusCode: l.V5.maybe(l.V5.number),
        loadingState: l.V5.enumeration(Object.values(c.Gu)),
        title: l.V5.maybeNull(l.V5.string),
        promotionType: l.V5.maybeNull(l.V5.enumeration(Object.values(n.qe))),
        artists: l.V5.maybe(l.V5.array(u.Go)),
        albums: l.V5.maybe(l.V5.array(r.ug)),
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
              e.errorStatusCode === s.CN.NOT_FOUND ||
              e.errorStatusCode === s.CN.BAD_REQUEST;
            return e.loadingState === c.Gu.REJECT && t;
          },
          get isSomethingWrong() {
            return e.loadingState === c.Gu.REJECT && !this.isNotFound;
          },
        }))
        .actions((e) => ({
          getData: (0, l.ls)(function* (t) {
            let { promoId: a } = t,
              { feedResource: i, modelActionsLogger: n } = (0, l.dU)(e);
            if (e.loadingState !== c.Gu.PENDING)
              try {
                e.loadingState = c.Gu.PENDING;
                let t = yield i.getPromotionsById({ promoId: a });
                (e.title = t.title),
                  (e.promotionType = t.promotionType),
                  t.artists &&
                    t.artists.length > 0 &&
                    (e.artists = (0, l.pj)(t.artists.map(u.d))),
                  t.albums &&
                    t.albums.length > 0 &&
                    (e.albums = (0, l.pj)(t.albums.map(r.ym))),
                  t.playlists &&
                    t.playlists.length > 0 &&
                    (e.playlists = (0, l.pj)(
                      t.playlists.map((e) => {
                        let { playlist: t } = e;
                        return (0, d.PV)(t);
                      }),
                    )),
                  e.loadingState !== c.Gu.IDLE &&
                    (e.loadingState = c.Gu.RESOLVE);
              } catch (t) {
                n.error(t),
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
              (e.artists = (0, l.pj)([])),
              (e.albums = (0, l.pj)([]));
          },
        }));
    },
    45833: function (e, t, a) {
      "use strict";
      a.d(t, {
        PostNotFoundPage: function () {
          return n;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(23948);
      let n = (0, l.Pi)(() => (0, i.jsx)(s.T, {}));
    },
    18211: function (e, t, a) {
      "use strict";
      a.d(t, {
        PostPage: function () {
          return x;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(74717),
        n = a(98639),
        r = a(21585),
        o = a(41055),
        u = a(90679),
        d = a(2570),
        c = a(68106),
        g = a(5293),
        m = a(63394),
        S = a(67868),
        p = a(41949),
        y = a.n(p);
      let E = () =>
        (0, i.jsxs)("div", {
          className: y().root,
          children: [
            (0, i.jsx)(u.Shimmer, { radius: "l", className: y().top }),
            (0, i.jsx)(u.Shimmer, { radius: "l", className: y().bottom }),
          ],
        });
      var h = a(90978),
        N = a.n(h),
        C = a(93490),
        G = a(12903),
        b = a.n(G);
      let v = (0, l.Pi)((e) => {
        let { albums: t = [] } = e;
        return (0, i.jsx)("div", {
          className: b().root,
          children: (0, i.jsx)("div", {
            className: b().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                C.rf,
                { className: b().item, album: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var L = a(87908),
        P = a(13209),
        _ = a.n(P);
      let f = (0, l.Pi)((e) => {
        let { artists: t = [] } = e;
        return (0, i.jsx)("div", {
          className: _().root,
          children: (0, i.jsx)("div", {
            className: _().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                L.IT,
                { className: _().item, artist: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var V = a(31579),
        T = a(39679),
        I = a.n(T);
      let D = (0, l.Pi)((e) => {
          let { playlists: t = [] } = e;
          return (0, i.jsx)("div", {
            className: I().root,
            children: (0, i.jsx)("div", {
              className: I().content,
              "aria-labelledby": "post-page-header",
              tabIndex: 0,
              children: t.map((e) =>
                (0, i.jsx)(
                  V.ZL,
                  { className: I().item, playlist: e, contentLinesCount: 3 },
                  e.id,
                ),
              ),
            }),
          });
        }),
        x = (0, l.Pi)((e) => {
          let { promoId: t } = e,
            { post: a } = (0, m.oR)(),
            l = (0, m.k6)(),
            [p, y] = (0, g.zU)();
          if (
            (t &&
              a.loadingState === m.Gu.IDLE &&
              (0, n.use)(a.getData({ promoId: t })),
            (0, n.useEffect)(
              () => () => {
                a.reset();
              },
              [a],
            ),
            a.isNotFound && (0, s.notFound)(),
            (0, m.NO)(a.loadingState === m.Gu.RESOLVE),
            a.isSomethingWrong)
          )
            return (0, i.jsx)(c.D, {});
          let h = (0, n.useMemo)(() => {
            if (a.isLoading) return (0, i.jsx)(E, {});
            switch (a.promotionType) {
              case r.qe.ARTISTS:
                return (0, i.jsx)(f, { artists: a.artists });
              case r.qe.ALBUMS:
                return (0, i.jsx)(v, { albums: a.albums });
              case r.qe.PLAYLISTS:
                return (0, i.jsx)(D, { playlists: a.playlists });
              default:
                (0, s.notFound)();
            }
          }, [a.albums, a.artists, a.isLoading, a.playlists, a.promotionType]);
          return (0, i.jsx)(m.Lh, {
            pageId: m.Rh.POST,
            children: (0, i.jsxs)(g.I7, {
              scrollElement: p,
              outerTitle: a.title || void 0,
              children: [
                (0, i.jsx)(S.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: l.canBack,
                  children: a.title
                    ? (0, i.jsx)(d.Heading, {
                        id: "post-header",
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: a.title,
                      })
                    : (0, i.jsx)(u.Shimmer, {
                        className: N().shimmerTitle,
                        radius: "l",
                      }),
                }),
                (0, i.jsx)(o.t, {
                  className: N().scrollableContainer,
                  ref: y,
                  children: (0, i.jsx)("div", {
                    className: N().container,
                    children: h,
                  }),
                }),
              ],
            }),
          });
        });
    },
    17777: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchHistoryPage: function () {
          return h;
        },
      });
      var i = a(9753),
        l = a(98780),
        s = a(9544),
        n = a(98639),
        r = a(80542),
        o = a(31014),
        u = a(23881),
        d = a(39513),
        c = a(28852),
        g = a(41055),
        m = a(2570),
        S = a(23194),
        p = a(63394),
        y = a(15739),
        E = a.n(y);
      let h = (0, s.Pi)(() => {
        var e;
        let t = (0, p.uK)().get(p.U5),
          { search: a, user: s, settings: y, experiments: h } = (0, p.oR)(),
          { formatMessage: N } = (0, r.Z)(),
          C = (0, p.k6)(),
          G = (0, n.useRef)(!1),
          b = (0, n.useRef)(null),
          v = (0, S.vy)(() => {
            G.current = !0;
          }),
          L = y.layout === p.t8.Mobile,
          P = a.history.items.length;
        a.isHistoryReady &&
          (null === (e = s.account) || void 0 === e ? void 0 : e.uid) &&
          (0, n.use)(
            a.getHistory({ userId: s.account.uid, config: t, experiments: h }),
          ),
          (0, n.useEffect)(() => {
            b.current && C.canBack && b.current.focus();
          }, [C.canBack]),
          (0, n.useEffect)(
            () => () => {
              (null == G ? void 0 : G.current)
                ? (a.resetHistoryItems(), (G.current = !1))
                : a.resetHistoryStateRequest();
            },
            [a],
          );
        let _ = (0, n.useMemo)(
            () =>
              (0, l.Z)(() => {
                null == C || C.back();
              }, 200),
            [C],
          ),
          f = (0, n.useMemo)(
            () =>
              P
                ? (0, i.jsx)("div", {
                    className: E().items,
                    children: a.history.items.map(S.Fu).filter((e) => !!e),
                  })
                : (0, i.jsx)(m.Caption, {
                    className: E().emptyHistory,
                    variant: "div",
                    size: "m",
                    type: "text",
                    children: (0, i.jsx)(o.Z, { id: "search.history-empty" }),
                  }),
            [a.history.items, P],
          );
        return (0, i.jsx)("div", {
          className: E().root,
          ...(0, u.BA)(u.Br.search.SEARCH_HISTORY_PAGE),
          children: (0, i.jsxs)(g.t, {
            className: E().scrollContent,
            containerClassName: E().scrollContainer,
            children: [
              (0, i.jsxs)("div", {
                className: E().header,
                children: [
                  (0, i.jsxs)("div", {
                    className: E().title,
                    children: [
                      C.canBack &&
                        (0, i.jsx)(d.z, {
                          ref: b,
                          "aria-label": N({ id: "navigation.go-back" }),
                          radius: "round",
                          disabled: !C.canBack,
                          size: "s",
                          icon: (0, i.jsx)(c.J, {
                            size: "xxs",
                            variant: "arrowLeft",
                          }),
                          onClick: _,
                        }),
                      (0, i.jsx)(m.Heading, {
                        variant: "h2",
                        size: L ? "m" : "xl",
                        children: (0, i.jsx)(o.Z, { id: "search.history" }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(d.z, {
                    "aria-label": N({ id: "search.clear-history" }),
                    radius: "xxxl",
                    variant: "outline",
                    disabled: !P,
                    size: L ? "s" : "default",
                    onClick: v,
                    children: (0, i.jsx)(m.Caption, {
                      variant: "span",
                      size: "m",
                      type: "text",
                      children: (0, i.jsx)(o.Z, { id: "search.clear-history" }),
                    }),
                  }),
                ],
              }),
              !a.isHistoryLoading && f,
            ],
          }),
        });
      });
    },
    46044: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchPage: function () {
          return b;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(98780),
        n = a(9544),
        r = a(74717),
        o = a(98639),
        u = a(80542),
        d = a(23881),
        c = a(21585),
        g = a(41055),
        m = a(54950),
        S = a(14102),
        p = a(21901),
        y = a(23194),
        E = a(63394),
        h = a(67868);
      let N = [
        c.ay.TOP,
        c.ay.TRACK,
        c.ay.ALBUM,
        c.ay.ARTIST,
        c.ay.PLAYLIST,
        c.ay.PODCAST,
      ];
      var C = a(77722),
        G = a.n(C);
      let b = (0, n.Pi)(() => {
        let e = (0, S.useTabsState)(0),
          [t, a] = (0, o.useState)(c.ay.TOP),
          [n, C] = (0, o.useState)(!1),
          { formatMessage: b } = (0, u.Z)(),
          { search: v, experiments: L } = (0, E.oR)(),
          P = (0, E.uK)().get(E.U5),
          _ = (0, E.RV)(),
          f = N.filter((e) => {
            if (
              e !== c.ay.PODCAST ||
              _ ||
              L.checkExperiment(E.pe.WebNextPodcastSearch, "on")
            )
              return e;
          });
        L.checkExperiment(E.pe.WebNextDisableSearch, "on") &&
          (0, r.redirect)("/");
        let [V, T] = (0, o.useState)(""),
          I = V.length > 0;
        (0, o.useEffect)(
          () => () => {
            v.reset();
          },
          [v],
        );
        let D = (0, o.useCallback)(
            (e, t) => {
              v.resetResults(),
                0 !== e.length &&
                  v.getSearchResults({
                    text: decodeURIComponent(e),
                    filter: t,
                    config: P,
                    experiments: L,
                  });
            },
            [v, P, L],
          ),
          x = (0, o.useCallback)(
            (e) => {
              let a = encodeURIComponent(e.trim());
              T(a), D(a, t), v.resetSearchCorrectedText(), C(!1);
            },
            [v, D, t, C],
          ),
          R = (0, o.useCallback)(() => {
            C(!0);
          }, [C]),
          k = (0, o.useMemo)(
            () =>
              (0, s.Z)((t) => {
                var i;
                if (!e.onTabChange || t === e.value) return;
                e.onTabChange(t);
                let l = null !== (i = N[t]) && void 0 !== i ? i : c.ay.TOP;
                a(l), D(V, l);
              }, 300),
            [D, V, e],
          ),
          A = (0, o.useMemo)(
            () => (e) => {
              let {
                id: t,
                type: a,
                blockPosition: i,
                position: l,
                feedbackType: s,
              } = e;
              v.sendFeedback({
                blockType: a,
                entityId: "".concat(a, ":").concat(t),
                timestamp: new Date().toISOString(),
                searchRequestId: v.searchRequestId,
                query: V,
                clickType: s,
                blockPosition: i,
                position: l,
                page: 0,
              });
            },
            [v, V],
          ),
          j = (0, o.useMemo)(
            () =>
              v.searchCorrectedText
                ? (0, i.jsx)(y.gK, {
                    searchCorrectedText: v.searchCorrectedText,
                    onCorrectText: R,
                  })
                : null,
            [R, v.searchCorrectedText],
          ),
          O = (0, o.useMemo)(() => {
            if (!v.isLoading && 0 === v.results.length)
              return (0, i.jsx)(y.hF, { searchCorrectedText: j });
            switch (t) {
              case c.ay.TOP:
                return (0, i.jsx)(y.Id, {
                  className: G().searchResults,
                  isLoading: v.isLoading,
                  results: v.results,
                  sendSearchFeedback: A,
                  searchCorrectedText: j,
                });
              case c.ay.TRACK:
                return (0, i.jsx)(y.XM, {
                  className: G().searchResults,
                  isLoading: v.isLoading,
                  results: v.results,
                  sendSearchFeedback: A,
                  searchCorrectedText: j,
                });
              case c.ay.ALBUM:
                return (0, i.jsx)(y.xz, {
                  className: G().searchResults,
                  isLoading: v.isLoading,
                  results: v.results,
                  filter: c.ay.ALBUM,
                  sendSearchFeedback: A,
                  searchCorrectedText: j,
                });
              case c.ay.PLAYLIST:
                return (0, i.jsx)(y.xz, {
                  className: G().searchResults,
                  isLoading: v.isLoading,
                  results: v.results,
                  filter: c.ay.PLAYLIST,
                  sendSearchFeedback: A,
                  searchCorrectedText: j,
                });
              case c.ay.ARTIST:
                return (0, i.jsx)(y.xz, {
                  className: G().searchResults,
                  isLoading: v.isLoading,
                  results: v.results,
                  filter: c.ay.ARTIST,
                  sendSearchFeedback: A,
                  searchCorrectedText: j,
                });
              case c.ay.PODCAST:
                return (0, i.jsx)(y.R_, {
                  className: G().searchResults,
                  isLoading: v.isLoading,
                  results: v.results,
                  sendSearchFeedback: A,
                  searchCorrectedText: j,
                });
              default:
                return j;
            }
          }, [v.isLoading, v.results, t, A, j]),
          U = (0, o.useMemo)(
            () =>
              V.length > 0
                ? O
                : (0, i.jsxs)(g.t, {
                    className: G().scrollableContent,
                    containerClassName: G().main,
                    children: [
                      (0, i.jsx)(o.Suspense, {
                        children: (0, i.jsx)(E.J, {
                          blockId: E.BE.SEARCH_HISTORY,
                          blockType: E.BE.SEARCH_HISTORY,
                          blockPosX: 1,
                          blockPosY: 1,
                          blockIdForFrom: E.BE.SEARCH_HISTORY,
                          objectsCount: v.history.items.length,
                          children: (0, i.jsx)(y.y9, {}),
                        }),
                      }),
                      (0, i.jsx)(o.Suspense, {
                        children: (0, i.jsx)(p.JG, {}),
                      }),
                      (0, i.jsx)(h.$_, { className: G().footer }),
                    ],
                  }),
            [V.length, O, v.history.items.length],
          ),
          B = (0, o.useMemo)(
            () => ({
              top: b({ id: "search-filters.top" }),
              track: b({ id: "search-filters.track" }),
              album: b({ id: "search-filters.album" }),
              artist: b({ id: "search-filters.artist" }),
              playlist: b({ id: "search-filters.playlist" }),
              podcast: b({ id: "search-filters.podcast" }),
            }),
            [b],
          );
        return (0, i.jsx)(E.Lh, {
          pageId: E.Rh.SEARCH,
          children: (0, i.jsxs)("div", {
            className: (0, l.W)(G().root, { [G().root_showFilters]: I }),
            ...(0, d.BA)(d.Br.search.SEARCH_PAGE),
            children: [
              (0, i.jsxs)("div", {
                className: G().header,
                children: [
                  (0, i.jsx)(m.M, {
                    className: G().input,
                    autoFocus: !0,
                    initialValue: V,
                    placeholder: b({ id: "search.input-placeholder" }),
                    onChange: x,
                    resetButtonAriaLabel: b({
                      id: "interface-actions.reset-search-input",
                    }),
                    correctedValue: n ? v.searchCorrectedText : null,
                  }),
                  I &&
                    (0, i.jsx)(h.no, {
                      className: G().tabCarousel,
                      ...e,
                      onTabChange: k,
                      children: f.map((t, a) =>
                        (0, i.jsx)(
                          h.OK,
                          {
                            className: (0, l.W)(G().filter, {
                              [G().filter_selected]: a === e.value,
                            }),
                            title: B[t],
                            value: a,
                          },
                          a,
                        ),
                      ),
                    }),
                ],
              }),
              (0, i.jsx)("div", { className: G().content, children: U }),
            ],
          }),
        });
      });
    },
    20070: function (e, t, a) {
      "use strict";
      a.d(t, {
        uj: function () {
          return i.TagPage;
        },
        tS: function () {
          return u;
        },
      });
      var i = a(42751);
      a(29223);
      var l = a(42288),
        s = a(10542),
        n = a(12090),
        r = a(63394),
        o = a(58421);
      let u = l.V5.model("TagPage", {
        title: l.V5.maybe(l.V5.string),
        errorStatusCode: l.V5.maybeNull(l.V5.number),
        tagLoadingState: l.V5.enumeration(Object.values(r.Gu)),
        playlistsLoadingState: l.V5.enumeration(Object.values(r.Gu)),
        playlistsData: l.V5.array(
          l.V5.model({ uid: l.V5.number, kind: l.V5.number }),
        ),
        playlists: l.V5.array(l.V5.maybeNull(n.Cd)),
        pager: l.V5.maybeNull(o.Vn),
        alreadyRequestedPages: l.V5.map(l.V5.number),
        pendingPages: l.V5.map(l.V5.number),
        requests: l.V5.maybeNull(l.V5.number),
      })
        .views((e) => ({
          get isNotFound() {
            let t =
              e.playlistsLoadingState === r.Gu.RESOLVE &&
              0 === e.playlists.length;
            return (
              ((e.tagLoadingState === r.Gu.REJECT ||
                e.playlistsLoadingState === r.Gu.REJECT) &&
                (e.errorStatusCode === s.CN.NOT_FOUND ||
                  e.errorStatusCode === s.CN.BAD_REQUEST)) ||
              t
            );
          },
        }))
        .actions((e) => {
          let t = {
            getPlaylists: (0, l.ls)(function* (t) {
              let { page: a = 0, pageSize: i = 20 } = t,
                { playlistsResource: o, modelActionsLogger: u } = (0, l.dU)(e);
              if (
                !(
                  e.tagLoadingState !== r.Gu.RESOLVE ||
                  (e.playlistsLoadingState === r.Gu.PENDING &&
                    e.pendingPages.has("".concat(a))) ||
                  e.alreadyRequestedPages.has("".concat(a))
                )
              ) {
                e.alreadyRequestedPages.set("".concat(a), a);
                try {
                  var d;
                  (e.playlistsLoadingState = r.Gu.PENDING),
                    e.pendingPages.set("".concat(a), a);
                  let t = a * i,
                    s = e.playlistsData.slice(t, t + i),
                    u = yield o.getPlaylists({
                      playlistIds: s.map((e) =>
                        "".concat(e.uid, ":").concat(e.kind),
                      ),
                      resumeStream: !1,
                    });
                  e.requests =
                    (null !== (d = e.requests) && void 0 !== d ? d : 0) + 1;
                  let c = {
                    page: a,
                    perPage: i,
                    total: e.playlistsData.length,
                  };
                  0 === e.playlists.length &&
                    (e.playlists = (0, l.pj)(
                      Array.from({ length: c.total }, () => null),
                    ));
                  let g = u.playlists.map(n.PV);
                  (0, r.AG)({
                    items: e.playlists,
                    mappedRawItems: g,
                    page: a,
                    pageSize: i,
                  }),
                    (e.pager = c),
                    e.playlistsLoadingState !== r.Gu.IDLE &&
                      (e.playlistsLoadingState = r.Gu.RESOLVE);
                } catch (t) {
                  u.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.playlistsLoadingState !== r.Gu.IDLE &&
                      (e.playlistsLoadingState = r.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(a));
                }
              }
            }),
            reset() {
              (e.tagLoadingState = r.Gu.IDLE),
                (e.playlistsLoadingState = r.Gu.IDLE),
                e.alreadyRequestedPages.clear(),
                e.pendingPages.clear(),
                (e.title = void 0),
                (e.playlistsData = (0, l.pj)([])),
                (e.playlists = (0, l.pj)([])),
                (e.errorStatusCode = null);
            },
            getTag: (0, l.ls)(function* (a) {
              let { id: i, page: n = 0, pageSize: o = 20 } = a,
                { tagResource: u, modelActionsLogger: d } = (0, l.dU)(e);
              if (e.tagLoadingState !== r.Gu.PENDING)
                try {
                  var c;
                  e.tagLoadingState = r.Gu.PENDING;
                  let a = yield u.getPlaylistIds({ id: i });
                  (e.title =
                    null === (c = a.tag) || void 0 === c ? void 0 : c.name),
                    (e.playlistsData = (0, l.pj)(
                      a.ids.map((e) => ({ uid: e.uid, kind: e.kind })),
                    )),
                    e.tagLoadingState !== r.Gu.IDLE &&
                      (e.tagLoadingState = r.Gu.RESOLVE),
                    yield t.getPlaylists({ page: n, pageSize: o });
                } catch (t) {
                  d.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.tagLoadingState !== r.Gu.IDLE &&
                      (e.tagLoadingState = r.Gu.REJECT);
                }
            }),
          };
          return t;
        });
    },
    29223: function (e, t, a) {
      "use strict";
      a.d(t, {
        TagNotFoundPage: function () {
          return n;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(23948);
      let n = (0, l.Pi)(() => (0, i.jsx)(s.T, {}));
    },
    42751: function (e, t, a) {
      "use strict";
      a.d(t, {
        TagPage: function () {
          return E;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(2570),
        d = a(68106),
        c = a(5293),
        g = a(31579),
        m = a(63394),
        S = a(67868),
        p = a(91631),
        y = a.n(p);
      let E = (0, s.Pi)((e) => {
        var t, a, s;
        let { tagId: p } = e,
          { tag: E } = (0, m.oR)(),
          { formatMessage: h } = (0, o.Z)(),
          [N, C] = (0, c.zU)(),
          G = (0, m.k6)();
        p || (0, n.notFound)();
        let b = (0, r.useCallback)(
          (e) => {
            E.getPlaylists({ page: e, pageSize: 20 });
          },
          [E],
        );
        E.tagLoadingState === m.Gu.IDLE &&
          (0, r.use)(E.getTag({ id: p, page: 0, pageSize: 20 })),
          E.isNotFound && (0, n.notFound)(),
          (0, r.useEffect)(
            () => () => {
              E.reset();
            },
            [E],
          );
        let v = (0, r.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(S.$_, { className: y().footer }) }),
          [],
        );
        return ((0, m.NO)(
          E.tagLoadingState === m.Gu.RESOLVE &&
            E.playlistsLoadingState === m.Gu.RESOLVE,
        ),
        (E.tagLoadingState !== m.Gu.REJECT &&
          E.playlistsLoadingState !== m.Gu.REJECT) ||
          E.isNotFound)
          ? (0, i.jsx)(m.Lh, {
              pageId: m.Rh.TAG,
              children: (0, i.jsx)(c.I7, {
                scrollElement: N,
                outerTitle: E.title,
                children: (0, i.jsxs)("div", {
                  className: y().root,
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: G.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: E.title,
                      }),
                    }),
                    (0, i.jsx)(S.Wv, {
                      className: (0, l.W)(y().scrollContainer, y().important),
                      customComponents: v,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == E
                              ? void 0
                              : null === (t = E.playlists) || void 0 === t
                                ? void 0
                                : t[e],
                          l = h(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: h({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              g.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(S.hi, { "aria-label": l });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == E
                              ? void 0
                              : null === (t = E.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: b,
                      pageSize: 20,
                      totalRequests:
                        null !== (s = E.requests) && void 0 !== s ? s : 0,
                      listClassName: y().content,
                      itemClassName: y().item,
                      handleRef: C,
                      context: {
                        listAriaLabel: h(
                          { id: "mixes.albums-list" },
                          { genreName: E.title || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            })
          : (0, i.jsx)(d.D, {});
      });
    },
    21901: function (e, t, a) {
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
      var i = a(8564),
        l = a(54140),
        s = a(42288),
        n = a(10542),
        r = a(21585),
        o = a(48606),
        u = a(63394);
      let d = (e) => ({
          items: (0, s.pj)(e.items.map((e) => (0, o.Fh)(e.data))),
        }),
        c = s.V5.model("Mixes", {
          loadingState: s.V5.enumeration(Object.values(u.Gu)),
          items: s.V5.array(o.zn),
          errorStatusCode: s.V5.maybeNull(s.V5.number),
        })
          .actions((e) => ({
            getMixes: (0, s.ls)(function* (t) {
              let { landingResource: a, modelActionsLogger: i } = (0, s.dU)(e);
              if (e.loadingState !== u.Gu.PENDING)
                try {
                  e.loadingState = u.Gu.PENDING;
                  let i = yield a.getBlock(
                    { uri: "/landing/block/mixes", fullList: t },
                    r.gQ.MIXES,
                  );
                  (e.items = d(i).items), (e.loadingState = u.Gu.RESOLVE);
                } catch (t) {
                  i.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== u.Gu.IDLE &&
                      (e.loadingState = u.Gu.REJECT);
                }
            }),
          }))
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === u.Gu.IDLE || e.loadingState === u.Gu.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === u.Gu.REJECT;
            },
            get isNotFound() {
              let t = e.loadingState === u.Gu.RESOLVE && 0 === e.items.length;
              return e.errorStatusCode === n.CN.NOT_FOUND || t;
            },
          }));
    },
    8564: function (e, t, a) {
      "use strict";
      a.d(t, {
        Mixes: function () {
          return p;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(98639),
        n = a(63394),
        r = a(80542),
        o = a(5993),
        u = a(48606),
        d = a(67868),
        c = a(66051),
        g = a.n(c);
      let m = (0, l.Pi)((e) => {
        let { isShimmerVisible: t, isShimmerActive: a, mixes: l } = e,
          { formatMessage: n } = (0, r.Z)(),
          c = (0, s.useMemo)(
            () =>
              t
                ? (0, d.Cl)({ isActive: a, withInfo: !1 })
                : l.map((e) =>
                    (0, i.jsx)(
                      u.GX,
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
            (0, i.jsx)(d.ti, {
              className: g().carouselHeader,
              title: n({ id: "entity-names.mixes" }),
              titleSize: "xs",
              viewAllActionLink: "/mixes",
            }),
            (0, i.jsx)(o.l, {
              containerClassName: g().carouselBlock,
              itemClassName: g().mixItem,
              children: c,
            }),
          ],
        });
      });
      var S = a(54140);
      let p = (0, l.Pi)(() => {
        let { settings: e, search: t } = (0, n.oR)(),
          a = e.layout === n.t8.Mobile;
        return (t.mixes.loadingState === n.Gu.IDLE &&
          (0, s.use)(t.mixes.getMixes(!1)),
        a)
          ? (0, i.jsx)(m, {
              isShimmerVisible: t.mixes.isLoading || t.mixes.isRejected,
              isShimmerActive: t.mixes.isLoading,
              mixes: t.mixes.items,
            })
          : (0, i.jsx)(S.MixesGrid, {
              isShimmerVisible: t.mixes.isLoading || t.mixes.isRejected,
              isShimmerActive: t.mixes.isLoading,
              mixes: t.mixes.items,
              withTitle: !0,
            });
      });
    },
    54140: function (e, t, a) {
      "use strict";
      a.d(t, {
        MixesGrid: function () {
          return g;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(98639),
        n = a(31014),
        r = a(2570),
        o = a(48606),
        u = a(67868),
        d = a(8104),
        c = a.n(d);
      let g = (0, l.Pi)((e) => {
        let {
            isShimmerVisible: t,
            isShimmerActive: a,
            withTitle: l,
            mixes: d,
            shimmerCount: g = 5,
          } = e,
          m = (0, s.useMemo)(
            () =>
              t
                ? (0, i.jsx)(u.Wm, {
                    isActive: a,
                    round: !1,
                    centered: !1,
                    withInfo: !1,
                    count: g,
                  })
                : d.map((e) =>
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
            [a, t, d, g],
          );
        return (0, i.jsxs)("div", {
          children: [
            l &&
              (0, i.jsx)(r.Heading, {
                className: c().mixesTitle,
                size: "s",
                weight: "bold",
                variant: "h3",
                children: (0, i.jsx)(n.Z, { id: "entity-names.mixes" }),
              }),
            (0, i.jsx)("div", { className: c().mixesGrid, children: m }),
          ],
        });
      });
    },
    78914: function (e) {
      e.exports = {
        root: "Genre_root__80dlk",
        link: "Genre_link__Wewaq",
        linkTitle: "Genre_linkTitle__ORAsw",
        list: "Genre_list__C2Pxf",
      };
    },
    98746: function (e) {
      e.exports = {
        root: "EmptyPlaylistBlock_root__wpA0j",
        iconBackground: "EmptyPlaylistBlock_iconBackground__pnUlz",
        title: "EmptyPlaylistBlock_title__pQQLf",
        subtitle: "EmptyPlaylistBlock_subtitle__P4Q7x",
      };
    },
    88308: function (e) {
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
        control: "PlaylistCard_control__73YUq",
      };
    },
    10929: function (e) {
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
    40489: function (e) {
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
    6380: function (e) {
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
    60015: function (e) {
      e.exports = {
        root: "GenrePage_root___kL_v",
        content: "GenrePage_content__NRwAJ",
        shimmerTitle: "GenrePage_shimmerTitle__hrgjK",
        carouselBlocks: "GenrePage_carouselBlocks__kR63B",
        carouselBlock: "GenrePage_carouselBlock__QCkpK",
        carouselBlockHeader: "GenrePage_carouselBlockHeader__u12sn",
      };
    },
    15874: function (e) {
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
    69836: function (e) {
      e.exports = {
        root: "GenresPage_root__LhP_S",
        shimmerTitle: "GenresPage_shimmerTitle__4j8uH",
        content: "GenresPage_content__yhKrQ",
        list: "GenresPage_list__l2Cuc",
      };
    },
    35857: function (e) {
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
    90978: function (e) {
      e.exports = {
        scrollableContainer: "PostPage_scrollableContainer__iV9Bo",
        container: "PostPage_container__orSfz",
        shimmerTitle: "PostPage_shimmerTitle__EeFCD",
      };
    },
    12903: function (e) {
      e.exports = {
        root: "PostAlbums_root__u2a1q",
        content: "PostAlbums_content__uMSez",
      };
    },
    13209: function (e) {
      e.exports = {
        root: "PostArtists_root__Zxmjq",
        content: "PostArtists_content__JzGOH",
      };
    },
    39679: function (e) {
      e.exports = {
        root: "PostPlaylists_root__3tea0",
        content: "PostPlaylists_content__2fXI5",
      };
    },
    41949: function (e) {
      e.exports = {
        root: "PostShimmer_root__MlLkY",
        top: "PostShimmer_top__ySpmZ",
        bottom: "PostShimmer_bottom__ajW_P",
      };
    },
    15739: function (e) {
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
    77722: function (e) {
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
    91631: function (e) {
      e.exports = {
        root: "TagPage_root__EWN9A",
        scrollContainer: "TagPage_scrollContainer__lvG_1",
        important: "TagPage_important__Jq37E",
        content: "TagPage_content__rUC_l",
        footer: "TagPage_footer__W0mZr",
        item: "TagPage_item__X_lW7",
      };
    },
    66051: function (e) {
      e.exports = {
        carouselBlock: "MixesCarousel_carouselBlock__ZpMU2",
        carouselHeader: "MixesCarousel_carouselHeader__6mMHX",
        mixItem: "MixesCarousel_mixItem__YNSsB",
      };
    },
    8104: function (e) {
      e.exports = {
        mixesTitle: "MixesGrid_mixesTitle__QawnL",
        mixesGrid: "MixesGrid_mixesGrid__uZQtt",
      };
    },
  },
]);
