(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7264],
  {
    95821: function (e, t, l) {
      "use strict";
      l.d(t, {
        O: function () {
          return a;
        },
      });
      let a = 20;
    },
    75309: function (e, t, l) {
      "use strict";
      l.d(t, {
        P: function () {
          return s;
        },
      });
      var a = l(13534),
        i = l(21535);
      async function s(e) {
        let {
          genreMeta: t,
          locale: l,
          fullUrl: s,
          url: n,
          tld: o,
          host: r,
        } = e;
        if (!t)
          return (0, a.Wm6)({ fullUrl: s, locale: l, url: n, tld: o, host: r });
        let u = await (0, a.EQQ)(l),
          c = t.title.fullTitle,
          d = u({ id: "metadata.genre-title" }, { genreTitle: c }),
          m = (function (e) {
            let { genreTitle: t, artists: l, messageFormatter: a } = e,
              i = null;
            return (
              Array.isArray(l) &&
                (i = l
                  .slice(0, 3)
                  .map((e) => ("artist" in e ? e.artist.name : e.name))
                  .join(", ")),
              i
                ? a(
                    { id: "metadata.genre-description" },
                    { genreTitle: t, artistsList: i },
                  )
                : a(
                    { id: "metadata.genre-description-short" },
                    { genreTitle: t },
                  )
            );
          })({
            genreTitle: c,
            artists: "artists" in t ? t.artists : void 0,
            messageFormatter: u,
          }),
          g = i.env.ASSET_PREFIX || "",
          p = "".concat(r).concat(g, "/meta/og-image.png");
        return {
          title: d,
          description: m,
          openGraph: (0, a.A36)({
            ogTitle: (0, a.bYF)(c),
            ogDescription: m,
            fullUrl: null != s ? s : "",
            locale: l,
            siteName: u({ id: "metadata.yandex-music" }),
            ogImage: p,
          }),
          twitter: (0, a.rz9)({
            cardType: a.qUR.APP,
            title: d,
            url: null != n ? n : "",
            appName: u({ id: "metadata.yandex-music" }),
          }),
          appLinks: (0, a.VMi)({
            additional: {
              tld: o,
              url: null != n ? n : "",
              fullUrl: null != s ? s : "",
              host: r,
            },
            appName: u({ id: "metadata.yandex-music" }),
          }),
        };
      }
    },
    84009: function (e, t, l) {
      "use strict";
      l.d(t, {
        GenreAlbumsPage: function () {
          return C;
        },
      });
      var a = l(75441),
        i = l(32358),
        s = l(62569),
        n = l(98730),
        o = l(65067),
        r = l(9317),
        u = l(17392),
        c = l(30948),
        d = l(72783),
        m = l(69947),
        g = l(13534),
        p = l(97141),
        _ = l(95821),
        h = l(75309);
      let v = (e) => {
          var t, l, a;
          return {
            id: "",
            title: { title: "", fullTitle: e.fullTitle || "" },
            albums: e.items.map(d.DR),
            pager: {
              page:
                (null === (t = e.pager) || void 0 === t ? void 0 : t.page) || 0,
              perPage:
                (null === (l = e.pager) || void 0 === l ? void 0 : l.perPage) ||
                0,
              total:
                (null === (a = e.pager) || void 0 === a ? void 0 : a.total) ||
                0,
            },
          };
        },
        f = (e) => {
          (0, o.useEffect)(() => {
            if (!e) return;
            let t = v(e);
            (0, h.P)({
              genreMeta: t,
              fullUrl: null,
              locale: null,
              url: null,
              tld: "",
              host: "",
            }).then((e) => {
              (0, g.gOT)(e);
            });
          }, [e]);
        };
      var b = l(68540),
        P = l.n(b);
      let C = (0, s.Pi)((e) => {
        var t, l, s;
        let { metatagId: h, preloadedMeta: v } = e,
          {
            genre: { albumsSubpage: b },
            settings: { isMobile: C },
          } = (0, g.oR4)(),
          { formatMessage: k } = (0, r.Z)(),
          { contentScrollRef: T, setContentScrollRef: x } = (0, g.$Y6)(),
          N = (0, g.k67)(),
          S = (0, o.useCallback)(
            (e) => {
              h && b.getData({ metatagId: h, page: e, pageSize: _.O });
            },
            [b, h],
          );
        (0, o.useEffect)(
          () => () => {
            b.reset();
          },
          [b],
        ),
          b.isNotFound && (0, n.notFound)(),
          (0, g.NOh)(b.isNeededToLoad),
          f(b);
        let A = (0, o.useMemo)(
          () => ({ Footer: () => (0, a.jsx)(p.$_, { className: P().footer }) }),
          [],
        );
        return (h &&
          b.isNeededToLoad &&
          (0, o.use)(
            b.getData({
              preloadedMeta: v,
              metatagId: h,
              page: 0,
              pageSize: _.O,
            }),
          ),
        b.isSomethingWrong)
          ? (0, a.jsx)(c.D, {})
          : (0, a.jsx)(g.Lh6, {
              pageId: g.Rhz.GENRE_ALBUMS,
              children: (0, a.jsx)(m.I7, {
                scrollElement: T,
                outerTitle: b.fullTitle,
                children: (0, a.jsxs)("div", {
                  className: P().root,
                  children: [
                    (0, a.jsx)(p.h4, {
                      variant: p.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: N.canBack,
                      children: (0, a.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: b.fullTitle,
                      }),
                    }),
                    (0, a.jsx)(p.Wv, {
                      className: (0, i.W)(P().scrollContainer, P().important),
                      customComponents: A,
                      itemContentCallback: (e) => {
                        let t = b.items[e],
                          l = k(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: k({ id: "entity-names.album" }) },
                          );
                        return t
                          ? (0, a.jsx)(
                              d.rf,
                              { album: t, contentLinesCount: 4 },
                              t.id,
                            )
                          : (0, a.jsx)(p.hi, {
                              "aria-label": l,
                              linesCount: 4,
                            });
                      },
                      totalCount:
                        null !==
                          (l =
                            null == b
                              ? void 0
                              : null === (t = b.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== l
                          ? l
                          : 0,
                      onGetDataByPage: S,
                      pageSize: _.O,
                      totalRequests:
                        null !== (s = b.requests) && void 0 !== s ? s : 0,
                      listClassName: P().content,
                      itemClassName: P().item,
                      handleRef: x,
                      context: {
                        listAriaLabel: k(
                          { id: "mixes.albums-list" },
                          { genreName: b.fullTitle || "" },
                        ),
                      },
                      isMobileLayout: C,
                      useWindowScroll: C,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    68730: function (e, t, l) {
      "use strict";
      l.d(t, {
        GenreArtistsPage: function () {
          return k;
        },
      });
      var a = l(75441),
        i = l(32358),
        s = l(62569),
        n = l(98730),
        o = l(65067),
        r = l(9317),
        u = l(17392),
        c = l(30948),
        d = l(55051),
        m = l(69947),
        g = l(13534),
        p = l(97141),
        _ = l(95821),
        h = l(75309),
        v = l(64353);
      let f = (e) => {
          var t, l, a;
          return {
            id: "",
            title: { title: "", fullTitle: e.fullTitle || "" },
            artists: e.items.map((e) => ({
              artist: (0, v.zg)(e),
              popularTracks: [],
            })),
            pager: {
              page:
                (null === (t = e.pager) || void 0 === t ? void 0 : t.page) || 0,
              perPage:
                (null === (l = e.pager) || void 0 === l ? void 0 : l.perPage) ||
                0,
              total:
                (null === (a = e.pager) || void 0 === a ? void 0 : a.total) ||
                0,
            },
          };
        },
        b = (e) => {
          (0, o.useEffect)(() => {
            if (!e) return;
            let t = f(e);
            (0, h.P)({
              genreMeta: t,
              fullUrl: null,
              locale: null,
              url: null,
              tld: "",
              host: "",
            }).then((e) => {
              (0, g.gOT)(e);
            });
          }, [e]);
        };
      var P = l(14546),
        C = l.n(P);
      let k = (0, s.Pi)((e) => {
        var t, l, s;
        let { metatagId: h, preloadedMeta: v } = e,
          {
            genre: { artistsSubpage: f },
            settings: { isMobile: P },
          } = (0, g.oR4)(),
          { formatMessage: k } = (0, r.Z)(),
          { contentScrollRef: T, setContentScrollRef: x } = (0, g.$Y6)(),
          N = (0, g.k67)(),
          S = (0, o.useCallback)(
            (e) => {
              h && f.getData({ metatagId: h, page: e, pageSize: _.O });
            },
            [f, h],
          );
        (0, o.useEffect)(
          () => () => {
            f.reset();
          },
          [f],
        ),
          f.isNotFound && (0, n.notFound)(),
          (0, g.NOh)(f.isResolved),
          b(f);
        let A = (0, o.useMemo)(
          () => ({ Footer: () => (0, a.jsx)(p.$_, { className: C().footer }) }),
          [],
        );
        return (h &&
          f.isNeededToLoad &&
          (0, o.use)(
            f.getData({
              preloadedMeta: v,
              metatagId: h,
              page: 0,
              pageSize: _.O,
            }),
          ),
        f.isSomethingWrong)
          ? (0, a.jsx)(c.D, {})
          : (0, a.jsx)(g.Lh6, {
              pageId: g.Rhz.GENRE_ARTISTS,
              children: (0, a.jsx)(m.I7, {
                scrollElement: T,
                outerTitle: f.fullTitle,
                children: (0, a.jsxs)("div", {
                  className: C().root,
                  children: [
                    (0, a.jsx)(p.h4, {
                      variant: p.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: N.canBack,
                      children: (0, a.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: f.fullTitle,
                      }),
                    }),
                    (0, a.jsx)(p.Wv, {
                      className: (0, i.W)(C().scrollContainer, C().important),
                      customComponents: A,
                      itemContentCallback: (e) => {
                        var t;
                        let l =
                            null == f
                              ? void 0
                              : null === (t = f.items) || void 0 === t
                                ? void 0
                                : t[e],
                          i = k(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: k({ id: "entity-names.artist" }) },
                          );
                        return l
                          ? (0, a.jsx)(
                              d.IT,
                              { artist: l, contentLinesCount: 3 },
                              l.id,
                            )
                          : (0, a.jsx)(p.hi, {
                              "aria-label": i,
                              round: !0,
                              centered: !0,
                            });
                      },
                      totalCount:
                        null !==
                          (l =
                            null == f
                              ? void 0
                              : null === (t = f.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== l
                          ? l
                          : 0,
                      onGetDataByPage: S,
                      pageSize: _.O,
                      totalRequests:
                        null !== (s = f.requests) && void 0 !== s ? s : 0,
                      listClassName: C().content,
                      itemClassName: C().item,
                      handleRef: x,
                      context: {
                        listAriaLabel: k(
                          { id: "mixes.artists-list" },
                          { genreName: f.fullTitle || "" },
                        ),
                      },
                      isMobileLayout: P,
                      useWindowScroll: P,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    88810: function (e, t, l) {
      "use strict";
      l.d(t, {
        GenreNotFoundPage: function () {
          return n;
        },
      });
      var a = l(75441),
        i = l(62569),
        s = l(35551);
      let n = (0, i.Pi)(() => (0, a.jsx)(s.T, {}));
    },
    7038: function (e, t, l) {
      "use strict";
      l.d(t, {
        GenrePage: function () {
          return N;
        },
      });
      var a = l(75441),
        i = l(32358),
        s = l(62569),
        n = l(98730),
        o = l(65067),
        r = l(9317),
        u = l(17294),
        c = l(17392),
        d = l(30948),
        m = l(72783),
        g = l(55051),
        p = l(69947),
        _ = l(7797),
        h = l(13534),
        v = l(97141),
        f = l(75309),
        b = l(64353),
        P = l(10979);
      let C = (e) => ({
          id: "",
          title: { title: "", fullTitle: e.fullTitle || "" },
          liked: !1,
          tracks: [],
          artists: e.artists.map(b.zg),
          composers: [],
          albums: e.albums.map(m.DR),
          playlists: e.playlists.map(P.Iq),
        }),
        k = (e) => {
          (0, o.useEffect)(() => {
            if (!e) return;
            let t = C(e);
            (0, f.P)({
              genreMeta: t,
              fullUrl: null,
              locale: null,
              url: null,
              tld: "",
              host: "",
            }).then((e) => {
              (0, h.gOT)(e);
            });
          }, [e]);
        };
      var T = l(35172),
        x = l.n(T);
      let N = (0, s.Pi)((e) => {
        let { metatagId: t, preloadedMeta: l } = e,
          { genre: s } = (0, h.oR4)(),
          { formatMessage: f } = (0, r.Z)(),
          { contentScrollRef: b, setContentScrollRef: P } = (0, h.$Y6)(),
          C = (0, h.k67)();
        return (s.isNotFound && (0, n.notFound)(),
        (0, o.useEffect)(
          () => () => {
            s.reset();
          },
          [s],
        ),
        (0, h.NOh)(s.isResolved),
        k(s),
        t &&
          s.isNeededToLoad &&
          (0, o.use)(s.getData({ id: t, preloadedMeta: l })),
        s.isRejected && !s.isNotFound)
          ? (0, a.jsx)(d.D, {})
          : (0, a.jsx)(h.Lh6, {
              pageId: h.Rhz.GENRE,
              children: (0, a.jsxs)(p.I7, {
                scrollElement: b,
                outerTitle: s.fullTitle,
                children: [
                  (0, a.jsx)(v.h4, {
                    variant: v.bm.TEXT,
                    withForwardControl: !1,
                    withBackwardControl: C.canBack,
                    children: (0, a.jsx)(c.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: s.fullTitle,
                    }),
                  }),
                  (0, a.jsx)(u.t, {
                    className: x().root,
                    containerClassName: x().content,
                    ref: P,
                    children: (0, a.jsxs)("div", {
                      className: x().carouselBlocks,
                      children: [
                        s.hasPlaylists &&
                          (0, a.jsx)(h.Ja5, {
                            blockId: h.BEo.PLAYLISTS_CAROUSEL,
                            blockType: h.BEo.PLAYLISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 1,
                            blockIdForFrom: h.BEo.PLAYLISTS_CAROUSEL,
                            objectsCount: s.albums.length,
                            children: (0, a.jsx)(_.VD, {
                              isShimmerVisible: s.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, i.W)(
                                x().carouselBlockHeader,
                                x().carouselBlock,
                              ),
                              containerClassName: x().carouselBlock,
                              playlists: s.playlists,
                              title: f({
                                id: "entity-names.popular-playlists",
                              }),
                              viewAllActionLink: "/genre/".concat(
                                s.id,
                                "/playlists",
                              ),
                            }),
                          }),
                        s.hasAlbums &&
                          (0, a.jsx)(h.Ja5, {
                            blockId: h.BEo.ALBUMS_CAROUSEL,
                            blockType: h.BEo.ALBUMS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 2,
                            blockIdForFrom: h.BEo.ALBUMS_CAROUSEL,
                            objectsCount: s.albums.length,
                            children: (0, a.jsx)(m.wk, {
                              isShimmerVisible: s.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, i.W)(
                                x().carouselBlockHeader,
                                x().carouselBlock,
                              ),
                              containerClassName: x().carouselBlock,
                              albums: s.albums,
                              title: f({ id: "entity-names.new-albums" }),
                              viewAllActionLink: "/genre/".concat(
                                s.id,
                                "/albums",
                              ),
                            }),
                          }),
                        s.hasArtists &&
                          (0, a.jsx)(h.Ja5, {
                            blockId: h.BEo.ARTISTS_CAROUSEL,
                            blockType: h.BEo.ARTISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 3,
                            blockIdForFrom: h.BEo.ARTISTS_CAROUSEL,
                            objectsCount: s.albums.length,
                            children: (0, a.jsx)(v.HY, {
                              isShimmerVisible: s.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, i.W)(
                                x().carouselBlockHeader,
                                x().carouselBlock,
                              ),
                              containerClassName: x().carouselBlock,
                              title: f({ id: "entity-names.popular-artists" }),
                              viewAllActionLink: "/genre/".concat(
                                s.id,
                                "/artists",
                              ),
                              children: s.artists.map((e) =>
                                (0, a.jsx)(
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
            });
      });
    },
    82522: function (e, t, l) {
      "use strict";
      l.d(t, {
        GenrePlaylistsPage: function () {
          return k;
        },
      });
      var a = l(75441),
        i = l(32358),
        s = l(62569),
        n = l(98730),
        o = l(65067),
        r = l(9317),
        u = l(17392),
        c = l(30948),
        d = l(69947),
        m = l(7797),
        g = l(13534),
        p = l(97141),
        _ = l(95821),
        h = l(75309),
        v = l(10979);
      let f = (e) => {
          var t, l, a;
          return {
            id: "",
            title: { title: "", fullTitle: e.fullTitle || "" },
            playlists: e.items.map(v.Iq),
            pager: {
              page:
                (null === (t = e.pager) || void 0 === t ? void 0 : t.page) || 0,
              perPage:
                (null === (l = e.pager) || void 0 === l ? void 0 : l.perPage) ||
                0,
              total:
                (null === (a = e.pager) || void 0 === a ? void 0 : a.total) ||
                0,
            },
          };
        },
        b = (e) => {
          (0, o.useEffect)(() => {
            if (!e) return;
            let t = f(e);
            (0, h.P)({
              genreMeta: t,
              fullUrl: null,
              locale: null,
              url: null,
              tld: "",
              host: "",
            }).then((e) => {
              (0, g.gOT)(e);
            });
          }, [e]);
        };
      var P = l(7256),
        C = l.n(P);
      let k = (0, s.Pi)((e) => {
        var t, l, s;
        let { metatagId: h, preloadedMeta: v } = e,
          {
            genre: { playlistsSubpage: f },
            settings: { isMobile: P },
          } = (0, g.oR4)(),
          { formatMessage: k } = (0, r.Z)(),
          { contentScrollRef: T, setContentScrollRef: x } = (0, g.$Y6)(),
          N = (0, g.k67)(),
          S = (0, o.useCallback)(
            (e) => {
              h && f.getData({ metatagId: h, page: e, pageSize: _.O });
            },
            [f, h],
          );
        (0, o.useEffect)(
          () => () => {
            f.reset();
          },
          [f],
        ),
          f.isNotFound && (0, n.notFound)(),
          (0, g.NOh)(f.isResolved),
          b(f);
        let A = (0, o.useMemo)(
          () => ({ Footer: () => (0, a.jsx)(p.$_, { className: C().footer }) }),
          [],
        );
        return (h &&
          f.isNeededToLoad &&
          (0, o.use)(
            f.getData({
              preloadedMeta: v,
              metatagId: h,
              page: 0,
              pageSize: _.O,
            }),
          ),
        f.isSomethingWrong)
          ? (0, a.jsx)(c.D, {})
          : (0, a.jsx)(g.Lh6, {
              pageId: g.Rhz.GENRE_PLAYLISTS,
              children: (0, a.jsx)(d.I7, {
                scrollElement: T,
                outerTitle: f.fullTitle,
                children: (0, a.jsxs)("div", {
                  className: C().root,
                  children: [
                    (0, a.jsx)(p.h4, {
                      variant: p.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: N.canBack,
                      children: (0, a.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: f.fullTitle,
                      }),
                    }),
                    (0, a.jsx)(p.Wv, {
                      className: (0, i.W)(C().scrollContainer, C().important),
                      customComponents: A,
                      itemContentCallback: (e) => {
                        var t;
                        let l =
                            null == f
                              ? void 0
                              : null === (t = f.items) || void 0 === t
                                ? void 0
                                : t[e],
                          i = k(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: k({ id: "entity-names.playlist" }) },
                          );
                        return l
                          ? (0, a.jsx)(
                              m.ZL,
                              { playlist: l, contentLinesCount: 3 },
                              l.key,
                            )
                          : (0, a.jsx)(p.hi, { "aria-label": i });
                      },
                      totalCount:
                        null !==
                          (l =
                            null == f
                              ? void 0
                              : null === (t = f.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== l
                          ? l
                          : 0,
                      onGetDataByPage: S,
                      pageSize: _.O,
                      totalRequests:
                        null !== (s = f.requests) && void 0 !== s ? s : 0,
                      listClassName: C().content,
                      itemClassName: C().item,
                      handleRef: x,
                      context: {
                        listAriaLabel: k(
                          { id: "mixes.playlists-list" },
                          { genreName: f.fullTitle || "" },
                        ),
                      },
                      isMobileLayout: P,
                      useWindowScroll: P,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    68540: function (e) {
      e.exports = {
        root: "GenreAlbumsPage_root__r_Sts",
        scrollContainer: "GenreAlbumsPage_scrollContainer__K_v_b",
        important: "GenreAlbumsPage_important__r3P2T",
        footer: "GenreAlbumsPage_footer__vmCiR",
        item: "GenreAlbumsPage_item__zRzB0",
        content: "GenreAlbumsPage_content__PRJUm",
      };
    },
    14546: function (e) {
      e.exports = {
        root: "GenreArtistsPage_root__PgtIz",
        scrollContainer: "GenreArtistsPage_scrollContainer__s_HLR",
        important: "GenreArtistsPage_important__YxR3i",
        footer: "GenreArtistsPage_footer__fYaCO",
        item: "GenreArtistsPage_item__OX8zl",
        content: "GenreArtistsPage_content__cz47x",
      };
    },
    35172: function (e) {
      e.exports = {
        root: "GenrePage_root___kL_v",
        content: "GenrePage_content__NRwAJ",
        shimmerTitle: "GenrePage_shimmerTitle__hrgjK",
        carouselBlocks: "GenrePage_carouselBlocks__kR63B",
        carouselBlock: "GenrePage_carouselBlock__QCkpK",
        carouselBlockHeader: "GenrePage_carouselBlockHeader__u12sn",
      };
    },
    7256: function (e) {
      e.exports = {
        root: "GenrePlaylistsPage_root__WZwkl",
        scrollContainer: "GenrePlaylistsPage_scrollContainer__N3BZw",
        important: "GenrePlaylistsPage_important__986BX",
        footer: "GenrePlaylistsPage_footer__aMDul",
        item: "GenrePlaylistsPage_item__tUsqJ",
        content: "GenrePlaylistsPage_content__2rKJY",
      };
    },
  },
]);
