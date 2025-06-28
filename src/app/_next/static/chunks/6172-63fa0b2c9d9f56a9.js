"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6172],
  {
    26172: function (e, t, a) {
      a.d(t, {
        rT: function () {
          return y.GenreAlbumsPage;
        },
        eq: function () {
          return p.GenreArtistsPage;
        },
        a0: function () {
          return S.GenrePage;
        },
        Kx: function () {
          return N;
        },
        Fe: function () {
          return V.GenrePlaylistsPage;
        },
      });
      var l = a(22874),
        s = a(62726),
        r = a(72783),
        i = a(7797),
        n = a(64353),
        u = a(13534),
        o = a(40892);
      let d = l.V5.compose(
          l.V5.model("GenreAlbumsPage", {
            pager: l.V5.maybeNull(o.Vn),
            alreadyRequestedPages: l.V5.map(l.V5.number),
            pendingPages: l.V5.map(l.V5.number),
            requests: l.V5.maybeNull(l.V5.number),
            errorStatusCode: l.V5.maybeNull(l.V5.number),
            fullTitle: l.V5.maybeNull(l.V5.string),
            items: l.V5.array(l.V5.maybeNull(r.ug)),
          }),
          o.fu,
        )
          .views((e) => {
            let t = {
              get isNotFound() {
                var a;
                let t =
                    e.isResolved &&
                    (null === (a = e.pager) || void 0 === a
                      ? void 0
                      : a.total) === 0,
                  l =
                    e.errorStatusCode === s.CN.NOT_FOUND ||
                    e.errorStatusCode === s.CN.BAD_REQUEST;
                return (e.isRejected && l) || t;
              },
              get isSomethingWrong() {
                return e.isRejected && !t.isNotFound;
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, l.ls)(function* (t) {
              let {
                  metatagId: a,
                  page: i = 0,
                  pageSize: n = 20,
                  preloadedMeta: o,
                } = t,
                { metatagsResource: d, modelActionsLogger: g } = (0, l.dU)(e);
              if (
                !(
                  (e.loadingState === u.Gui.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var m;
                  (e.loadingState = u.Gui.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = o;
                  t ||
                    (t = yield d.getMetatagAlbums({
                      id: a,
                      offset: i,
                      limit: n,
                    })),
                    (e.fullTitle = t.title.fullTitle);
                  let s = { page: i, perPage: n, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, l.pj)(
                      Array.from({ length: s.total }, () => null),
                    ));
                  let g = t.albums.map(r.ym);
                  (0, u.AG_)({
                    items: e.items,
                    mappedRawItems: g,
                    page: i,
                    pageSize: n,
                  }),
                    (e.pager = s),
                    (e.requests =
                      (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.RESOLVE);
                } catch (t) {
                  g.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = u.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, l.pj)([]));
            },
          })),
        g = l.V5.compose(
          l.V5.model("GenreArtistsPage", {
            pager: l.V5.maybeNull(o.Vn),
            alreadyRequestedPages: l.V5.map(l.V5.number),
            pendingPages: l.V5.map(l.V5.number),
            requests: l.V5.maybeNull(l.V5.number),
            errorStatusCode: l.V5.maybeNull(l.V5.number),
            fullTitle: l.V5.maybeNull(l.V5.string),
            items: l.V5.array(l.V5.maybeNull(n.Go)),
          }),
          o.fu,
        )
          .views((e) => {
            let t = {
              get isNotFound() {
                var a;
                let t =
                    e.isResolved &&
                    (null === (a = e.pager) || void 0 === a
                      ? void 0
                      : a.total) === 0,
                  l =
                    e.errorStatusCode === s.CN.NOT_FOUND ||
                    e.errorStatusCode === s.CN.BAD_REQUEST;
                return (e.isRejected && l) || t;
              },
              get isSomethingWrong() {
                return e.isRejected && !t.isNotFound;
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, l.ls)(function* (t) {
              let {
                  metatagId: a,
                  page: r = 0,
                  pageSize: i = 20,
                  preloadedMeta: o,
                } = t,
                { metatagsResource: d, modelActionsLogger: g } = (0, l.dU)(e);
              if (
                !(
                  (e.loadingState === u.Gui.PENDING &&
                    e.pendingPages.has("".concat(r))) ||
                  e.alreadyRequestedPages.has("".concat(r))
                )
              ) {
                "number" == typeof r &&
                  e.alreadyRequestedPages.set("".concat(r), r);
                try {
                  var m;
                  (e.loadingState = u.Gui.PENDING),
                    e.pendingPages.set("".concat(r), r);
                  let t = o;
                  t ||
                    (t = yield d.getMetatagArtists({
                      id: a,
                      offset: r,
                      limit: i,
                      period: "week",
                    })),
                    (e.fullTitle = t.title.fullTitle);
                  let s = { page: r, perPage: i, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, l.pj)(
                      Array.from({ length: s.total }, () => null),
                    ));
                  let g = t.artists.map((e) => (0, n.d)(e.artist));
                  (0, u.AG_)({
                    items: e.items,
                    mappedRawItems: g,
                    page: r,
                    pageSize: i,
                  }),
                    (e.pager = s),
                    (e.requests =
                      (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.RESOLVE);
                } catch (t) {
                  g.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(r));
                }
              }
            }),
            reset() {
              (e.loadingState = u.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, l.pj)([]));
            },
          }));
      var m = a(10979);
      let c = l.V5.compose(
          l.V5.model("GenrePlaylistsPage", {
            pager: l.V5.maybeNull(o.Vn),
            alreadyRequestedPages: l.V5.map(l.V5.number),
            pendingPages: l.V5.map(l.V5.number),
            requests: l.V5.maybeNull(l.V5.number),
            errorStatusCode: l.V5.maybeNull(l.V5.number),
            fullTitle: l.V5.maybeNull(l.V5.string),
            items: l.V5.array(l.V5.maybeNull(m.Cd)),
          }),
          o.fu,
        )
          .views((e) => {
            let t = {
              get isNotFound() {
                var a;
                let t =
                    e.isResolved &&
                    (null === (a = e.pager) || void 0 === a
                      ? void 0
                      : a.total) === 0,
                  l =
                    e.errorStatusCode === s.CN.NOT_FOUND ||
                    e.errorStatusCode === s.CN.BAD_REQUEST;
                return (e.isRejected && l) || t;
              },
              get isSomethingWrong() {
                return (
                  !t.isNotFound &&
                  e.isRejected &&
                  0 === e.alreadyRequestedPages.size
                );
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, l.ls)(function* (t) {
              let {
                  metatagId: a,
                  page: s = 0,
                  pageSize: r = 20,
                  preloadedMeta: i,
                } = t,
                { metatagsResource: n, modelActionsLogger: o } = (0, l.dU)(e);
              if (
                !(
                  (e.loadingState === u.Gui.PENDING &&
                    e.pendingPages.has("".concat(s))) ||
                  e.alreadyRequestedPages.has("".concat(s))
                )
              ) {
                "number" == typeof s &&
                  e.alreadyRequestedPages.set("".concat(s), s);
                try {
                  var d;
                  (e.loadingState = u.Gui.PENDING),
                    e.pendingPages.set("".concat(s), s);
                  let t = i;
                  t ||
                    (t = yield n.getMetatagPlaylists({
                      id: a,
                      offset: s,
                      limit: r,
                      withLikesCount: !0,
                    })),
                    (e.fullTitle = t.title.fullTitle);
                  let o = { page: s, perPage: r, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, l.pj)(
                      Array.from({ length: o.total }, () => null),
                    ));
                  let g = t.playlists.map(m.PV);
                  (0, u.AG_)({
                    items: e.items,
                    mappedRawItems: g,
                    page: s,
                    pageSize: r,
                  }),
                    (e.pager = o),
                    (e.requests =
                      (null !== (d = e.requests) && void 0 !== d ? d : 0) + 1),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.RESOLVE);
                } catch (t) {
                  o.error(t),
                    e.alreadyRequestedPages.delete("".concat(s)),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(s));
                }
              }
            }),
            reset() {
              (e.loadingState = u.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, l.pj)([]));
            },
          })),
        N = l.V5.compose(
          l.V5.model("GenrePage", {
            id: l.V5.maybeNull(l.V5.string),
            errorStatusCode: l.V5.maybeNull(l.V5.number),
            fullTitle: l.V5.maybeNull(l.V5.string),
            artists: l.V5.array(n.Go),
            albums: l.V5.array(r.ug),
            playlists: l.V5.array(i.d2),
            albumsSubpage: d,
            artistsSubpage: g,
            playlistsSubpage: c,
          }),
          o.fu,
        )
          .views((e) => {
            let t = {
              get isLoading() {
                return e.isNeededToLoad || e.loadingState === u.Gui.PENDING;
              },
              get hasAlbums() {
                return t.isLoading || e.albums.length > 0;
              },
              get hasArtists() {
                return t.isLoading || e.artists.length > 0;
              },
              get hasPlaylists() {
                return t.isLoading || e.playlists.length > 0;
              },
              get isNotFound() {
                let a =
                    e.isResolved &&
                    !t.hasAlbums &&
                    !t.hasArtists &&
                    !t.hasPlaylists,
                  l =
                    e.errorStatusCode === s.CN.NOT_FOUND ||
                    e.errorStatusCode === s.CN.BAD_REQUEST;
                return (e.isRejected && l) || a;
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, l.ls)(function* (t) {
              let { id: a, preloadedMeta: o } = t,
                { metatagsResource: d, modelActionsLogger: g } = (0, l.dU)(e);
              if (e.loadingState !== u.Gui.PENDING)
                try {
                  e.loadingState = u.Gui.PENDING;
                  let t = o;
                  t || (t = yield d.getMetatagById({ id: a })),
                    (e.id = t.id),
                    (e.fullTitle = t.title.fullTitle),
                    (e.artists = (0, l.pj)(t.artists.map(n.d))),
                    (e.albums = (0, l.pj)(t.albums.map(r.ym))),
                    (e.playlists = (0, l.pj)(t.playlists.map(i.Q9))),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.RESOLVE);
                } catch (t) {
                  g.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.loadingState !== u.Gui.IDLE &&
                      (e.loadingState = u.Gui.REJECT);
                }
            }),
            reset() {
              (e.loadingState = u.Gui.IDLE),
                (e.fullTitle = null),
                (e.artists = (0, l.pj)([])),
                (e.albums = (0, l.pj)([])),
                (e.playlists = (0, l.pj)([]));
            },
          }));
      var y = a(84009),
        p = a(68730);
      a(88810);
      var S = a(7038),
        V = a(82522);
      a(75309);
      var f = a(65067),
        P = a(95821);
      let b = async (e, t) => {
        try {
          let {
            container: a,
            backendHostTld: l,
            locale: s,
            host: r,
            fullUrl: i,
            isRSC: n,
            requestUrl: o,
          } = await (0, u.rbP)();
          if (!e || n)
            return {
              tld: "",
              locale: null,
              host: "",
              fullUrl: null,
              url: null,
            };
          let d = a.get(u.ZOY);
          return {
            genreMeta: await t(d, e),
            tld: l,
            locale: s,
            host: r,
            fullUrl: i,
            url: o,
          };
        } catch (e) {
          return { tld: "", locale: null, host: "", fullUrl: null, url: null };
        }
      };
      (0, f.cache)(async (e) =>
        b(e, async (e, t) =>
          e.getMetatagAlbums({ id: t, offset: 0, limit: P.O }),
        ),
      ),
        (0, f.cache)(async (e) =>
          b(e, async (e, t) =>
            e.getMetatagArtists({
              id: t,
              offset: 0,
              limit: P.O,
              period: "week",
            }),
          ),
        ),
        (0, f.cache)(async (e) =>
          b(e, async (e, t) => e.getMetatagById({ id: t })),
        ),
        (0, f.cache)(async (e) =>
          b(e, async (e, t) =>
            e.getMetatagPlaylists({
              id: t,
              offset: 0,
              limit: P.O,
              withLikesCount: !0,
            }),
          ),
        );
    },
  },
]);
