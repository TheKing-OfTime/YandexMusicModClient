(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3718],
  {
    63718: function (e, t, i) {
      "use strict";
      i.d(t, {
        T4: function () {
          return f.NonMusicAlbumsPage;
        },
        z4: function () {
          return o.z;
        },
        ov: function () {
          return k.NonMusicCategoryPage;
        },
        C2: function () {
          return O.NonMusicCategoryPlaylistsPage;
        },
        NG: function () {
          return R;
        },
      });
      var a = i(13534),
        o = i(59132),
        l = i(22874),
        n = i(62726),
        s = i(7797),
        r = i(10979),
        u = i(40892);
      let d = l.V5.model("NonMusicCategoryPlaylistsDataItem", {
          uid: l.V5.number,
          kind: l.V5.number,
          data: l.V5.maybeNull(s.d2),
        }),
        c = l.V5.compose(
          l.V5.model("NonMusicCategoryPlaylistsPage", {
            errorStatusCode: l.V5.maybe(l.V5.number),
            title: l.V5.maybeNull(l.V5.string),
            pager: l.V5.maybeNull(u.Vn),
            playlists: l.V5.maybeNull(l.V5.array(d)),
            alreadyRequestedPages: l.V5.map(l.V5.number),
            requests: l.V5.maybeNull(l.V5.number),
          }),
          u.fu,
        )
          .views((e) => {
            let t = {
              get isLoading() {
                return e.isNeededToLoad || e.loadingState === a.Gui.PENDING;
              },
              get isNotFound() {
                let t =
                  e.errorStatusCode === n.CN.NOT_FOUND ||
                  e.errorStatusCode === n.CN.BAD_REQUEST;
                return e.isRejected && t;
              },
              get isSomethingWrong() {
                return e.isRejected && !t.isNotFound;
              },
            };
            return t;
          })
          .actions((e) => {
            let t = {
              getPlaylists: (0, l.ls)(function* (t) {
                var i, o, s;
                let { page: u = 0, pageSize: d = 20 } = t,
                  { playlistsResource: c, modelActionsLogger: g } = (0, l.dU)(
                    e,
                  );
                if (
                  !(
                    !(null === (i = e.playlists) || void 0 === i
                      ? void 0
                      : i.length) || e.alreadyRequestedPages.has("".concat(u))
                  )
                ) {
                  e.alreadyRequestedPages.set("".concat(u), u);
                  try {
                    let t = u * d,
                      i = e.playlists.slice(t, t + d),
                      a = yield c.getPlaylists({
                        playlistIds: i.map((e) =>
                          "".concat(e.uid, ":").concat(e.kind),
                        ),
                        resumeStream: !1,
                      });
                    e.requests =
                      (null !== (s = e.requests) && void 0 !== s ? s : 0) + 1;
                    let n = {
                        page: u,
                        perPage: d,
                        total:
                          null === (o = e.playlists) || void 0 === o
                            ? void 0
                            : o.length,
                      },
                      g = a.playlists.map(r.PV),
                      N = u * d,
                      m = 0;
                    for (let t = N; t < N + d; t++)
                      g[m] &&
                        e.playlists[t] &&
                        (e.playlists[t].data = (0, l.pj)(g[m])),
                        m++;
                    e.pager = n;
                  } catch (t) {
                    g.error(t),
                      t instanceof n.du &&
                        (t.statusCode === n.CN.NOT_FOUND ||
                          t.statusCode === n.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = n.CN.NOT_FOUND),
                      e.loadingState !== a.Gui.IDLE &&
                        (e.loadingState = a.Gui.REJECT);
                  }
                }
              }),
              getData: (0, l.ls)(function* (i) {
                let { categoryId: o, page: s = 0, pageSize: r = 20 } = i,
                  { nonMusicResource: u, modelActionsLogger: d } = (0, l.dU)(e);
                if (e.loadingState !== a.Gui.PENDING)
                  try {
                    e.loadingState = a.Gui.PENDING;
                    let i = yield u.getPlaylists({ categoryId: o });
                    (e.title = i.title),
                      i.entities &&
                        i.entities.length > 0 &&
                        (e.playlists = (0, l.pj)(
                          i.entities.map((e) => ({ uid: e.uid, kind: e.kind })),
                        )),
                      e.loadingState !== a.Gui.IDLE &&
                        (e.loadingState = a.Gui.RESOLVE),
                      yield t.getPlaylists({ page: s, pageSize: r });
                  } catch (t) {
                    d.error(t),
                      t instanceof n.du &&
                        (t.statusCode === n.CN.NOT_FOUND ||
                          t.statusCode === n.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = n.CN.NOT_FOUND),
                      e.loadingState !== a.Gui.IDLE &&
                        (e.loadingState = a.Gui.REJECT);
                  }
              }),
              reset() {
                (e.loadingState = a.Gui.IDLE),
                  e.alreadyRequestedPages.clear(),
                  (e.title = null),
                  (e.playlists = (0, l.pj)([])),
                  (e.requests = null),
                  (e.pager = null);
              },
            };
            return t;
          });
      var g = i(30495),
        N = i(72783);
      let m = l.V5.model("NonMusicAlbumsPageItem", {
          id: l.V5.number,
          data: l.V5.maybeNull(N.ug),
        }),
        C = l.V5.compose(
          l.V5.model("NonMusicAlbumsPage", {
            errorStatusCode: l.V5.maybe(l.V5.number),
            title: l.V5.maybeNull(l.V5.string),
            albums: l.V5.maybeNull(l.V5.array(m)),
            requestsCount: l.V5.maybe(l.V5.number),
          }),
          u.fu,
        )
          .views((e) => {
            let t = {
              get isLoading() {
                return e.isNeededToLoad || e.loadingState === a.Gui.PENDING;
              },
              get isNotFound() {
                let t =
                  e.errorStatusCode === n.CN.NOT_FOUND ||
                  e.errorStatusCode === n.CN.BAD_REQUEST;
                return e.loadingState === a.Gui.REJECT && t;
              },
              get isSomethingWrong() {
                return e.isRejected && !t.isNotFound;
              },
            };
            return t;
          })
          .actions((e) => ({
            getEditorialAlbums: (0, l.ls)(function* (t) {
              let { id: i } = t,
                { nonMusicResource: o, modelActionsLogger: s } = (0, l.dU)(e);
              if (e.loadingState !== a.Gui.PENDING)
                try {
                  var r;
                  e.loadingState = a.Gui.PENDING;
                  let t = yield o.getEditorialAlbums({ id: i });
                  (e.title = t.title),
                    (null === (r = t.entities) || void 0 === r
                      ? void 0
                      : r.length) &&
                      (e.albums = (0, l.pj)(
                        t.entities.map((e) => ({ id: e })),
                      )),
                    e.loadingState !== a.Gui.IDLE &&
                      (e.loadingState = a.Gui.RESOLVE);
                } catch (t) {
                  s.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== a.Gui.IDLE &&
                      (e.loadingState = a.Gui.REJECT);
                }
            }),
            getCategoryAlbums: (0, l.ls)(function* (t) {
              let { id: i } = t,
                { nonMusicResource: o, modelActionsLogger: s } = (0, l.dU)(e);
              if (e.loadingState !== a.Gui.PENDING)
                try {
                  var r;
                  e.loadingState = a.Gui.PENDING;
                  let t = yield o.getCategoryAlbums({ id: i });
                  (e.title = t.title),
                    (null === (r = t.albums) || void 0 === r
                      ? void 0
                      : r.length) &&
                      (e.albums = (0, l.pj)(t.albums.map((e) => ({ id: e })))),
                    e.loadingState !== a.Gui.IDLE &&
                      (e.loadingState = a.Gui.RESOLVE);
                } catch (t) {
                  s.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== a.Gui.IDLE &&
                      (e.loadingState = a.Gui.REJECT);
                }
            }),
            getAlbumsByRange: (0, l.ls)(function* (t, i) {
              var a, o, n;
              let { albumResource: s, modelActionsLogger: r } = (0, l.dU)(e);
              if (
                !(null === (a = e.albums) || void 0 === a ? void 0 : a.length)
              )
                return null;
              (t = Math.max(0, t)), (i = Math.min(i, e.albums.length));
              let u = [];
              for (let a = t; a <= i; a++)
                (null === (o = e.albums[a]) || void 0 === o ? void 0 : o.id) &&
                  !(null === (n = e.albums[a]) || void 0 === n
                    ? void 0
                    : n.data) &&
                  u.push(e.albums[a].id);
              if (!u.length) return null;
              try {
                let t = yield s.getAlbums({ albumIds: u });
                null == t ||
                  t.forEach((t) => {
                    var i;
                    null === (i = e.albums) ||
                      void 0 === i ||
                      i.forEach((i, a) => {
                        var o;
                        i.id === t.id &&
                          (null === (o = e.albums) || void 0 === o
                            ? void 0
                            : o[a]) &&
                          (e.albums[a].data = (0, N.ym)(t));
                      });
                  }),
                  e.requestsCount
                    ? (e.requestsCount = e.requestsCount + 1)
                    : (e.requestsCount = 1);
              } catch (e) {
                r.error(e);
              }
              return null;
            }),
            reset() {
              (e.loadingState = a.Gui.IDLE),
                (e.title = null),
                (e.albums = null),
                (e.requestsCount = 0);
            },
          }));
      var _ = i(77514),
        y = i(71011),
        p = i(89428);
      let h = (e) => {
        let t = e.entities.map((e) => ({
          ...(0, N.ym)(e.data.album),
          chart: e.data.chartPosition && (0, p.W5)(e.data.chartPosition),
          likesCount: e.data.album.likesCount,
        }));
        return (0, l.pj)({
          id: e.id,
          type: _.c.ALBUM_CHART,
          landingBlockType: y.g.CHART_ALBUMS,
          title: e.title,
          description: e.description,
          viewAllActionLink: e.viewAllUrl,
          items: t,
        });
      };
      var b = i(14222);
      let E = (e) => {
          let t = e.entities.map((e) => ({
            type: b.Q.NON_MUSIC_ALBUM_ITEM,
            data: (0, N.ym)(e.data),
          }));
          return (0, l.pj)({
            id: e.id,
            type: _.c.CATEGORY,
            landingBlockType: y.g.NON_MUSIC_EDITORIAL_COMPILATION,
            title: e.title,
            description: e.description,
            viewAllActionLink: e.viewAllUrl,
            items: t,
          });
        },
        S = (e) => {
          let t = e.entities.map((e) => {
            switch (e.type) {
              case _.f.PLAYLIST:
                return {
                  type: b.Q.PLAYLIST_ITEM,
                  data: (0, s.VB)({ ...e.data, artists: [] }),
                };
              case _.f.ALBUM:
                return { type: b.Q.ALBUM_ITEM, data: (0, N.ym)(e.data) };
            }
          });
          return (0, l.pj)({
            id: e.id,
            type: _.c.EDITORIAL_PLAYLISTS,
            landingBlockType: y.g.RECENTLY_PLAYED,
            title: e.title,
            description: e.description,
            viewAllActionLink: e.viewAllUrl,
            items: t,
          });
        },
        A = l.V5.model("NonMusicBaseBlock").props({
          type: l.V5.enumeration(Object.values(_.c.CATEGORY)),
          landingBlockType: l.V5.enumeration(Object.values(y.g)),
          id: l.V5.maybe(l.V5.string),
          title: l.V5.maybe(l.V5.string),
          description: l.V5.maybe(l.V5.string),
          viewAllActionLink: l.V5.maybe(l.V5.string),
        }),
        T = A.named("NonMusicCategoryBlock").props({
          type: l.V5.literal(_.c.CATEGORY),
          landingBlockType: l.V5.literal(y.g.NON_MUSIC_EDITORIAL_COMPILATION),
          items: l.V5.array(g.ue),
        }),
        L = A.named("NonMusicChartAlbumBlock").props({
          type: l.V5.literal(_.c.ALBUM_CHART),
          landingBlockType: l.V5.literal(y.g.CHART_ALBUMS),
          items: l.V5.array(N.ug),
        }),
        P = l.V5.union(g.SJ, g.jn),
        v = A.named("NonMusicEditorialPlaylistsBlock").props({
          type: l.V5.literal(_.c.EDITORIAL_PLAYLISTS),
          landingBlockType: l.V5.literal(y.g.RECENTLY_PLAYED),
          items: l.V5.array(P),
        }),
        M = l.V5.union(L, v, T),
        I = l.V5.compose(
          l.V5.model("NonMusicCategoryPage", {
            errorStatusCode: l.V5.maybeNull(l.V5.number),
            title: l.V5.maybeNull(l.V5.string),
            blocks: l.V5.array(M),
          }),
          u.fu,
        )
          .views((e) => {
            let t = {
              get isLoading() {
                return e.isNeededToLoad || e.loadingState === a.Gui.PENDING;
              },
              get isNotFound() {
                let t = e.isResolved && 0 === e.blocks.length,
                  i =
                    e.errorStatusCode === n.CN.NOT_FOUND ||
                    e.errorStatusCode === n.CN.BAD_REQUEST;
                return (e.isRejected && i) || t;
              },
              get isSomethingWrong() {
                return e.isRejected && !t.isNotFound;
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, l.ls)(function* (t) {
              let { categoryId: i } = t,
                { nonMusicResource: o, modelActionsLogger: s } = (0, l.dU)(e);
              if (e.loadingState !== a.Gui.PENDING)
                try {
                  e.loadingState = a.Gui.PENDING;
                  let t = yield o.getCategory({ categoryId: i });
                  e.title = t.title;
                  let n = [];
                  t.blocks &&
                    (t.blocks.forEach((e) => {
                      switch (e.type) {
                        case _.c.ALBUM_CHART:
                          n.push(h(e));
                          return;
                        case _.c.EDITORIAL_PLAYLISTS:
                          n.push(S(e));
                          return;
                        case _.c.CATEGORY:
                          n.push(E(e));
                          return;
                      }
                    }),
                    (e.blocks = (0, l.pj)(n))),
                    e.loadingState !== a.Gui.IDLE &&
                      (e.loadingState = a.Gui.RESOLVE);
                } catch (t) {
                  s.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== a.Gui.IDLE &&
                      (e.loadingState = a.Gui.REJECT);
                }
            }),
            reset() {
              (e.errorStatusCode = null),
                (e.title = null),
                (e.loadingState = a.Gui.IDLE),
                (e.blocks = (0, l.pj)([]));
            },
          })),
        R = l.V5.model("NonMusicPage", {
          landing: g.d5,
          albums: C,
          categorySubpage: I,
          categoryPlaylistsSubpage: c,
        });
      var f = i(89162);
      i(66932);
      var k = i(54451),
        O = i(60538);
      i(76085), i(23033);
    },
    59132: function (e, t, i) {
      "use strict";
      var a, o;
      i.d(t, {
        z: function () {
          return a;
        },
      }),
        ((o = a || (a = {})).CATEGORY = "category"),
        (o.EDITORIAL = "editorial");
    },
    89162: function (e, t, i) {
      "use strict";
      i.d(t, {
        NonMusicAlbumsPage: function () {
          return p;
        },
      });
      var a = i(75441),
        o = i(32358),
        l = i(62569),
        n = i(98730),
        s = i(65067),
        r = i(9317),
        u = i(35846),
        d = i(17392),
        c = i(72783),
        g = i(69947),
        N = i(13534),
        m = i(97141),
        C = i(59132),
        _ = i(52607),
        y = i.n(_);
      let p = (0, l.Pi)((e) => {
        var t, i;
        let { id: l, variant: _ } = e,
          {
            nonMusic: { albums: p },
            settings: h,
          } = (0, N.oR4)(),
          { formatMessage: b } = (0, r.Z)(),
          { contentScrollRef: E, setContentScrollRef: S } = (0, N.$Y6)(),
          A = (0, N.k67)(),
          T = h.layout === N.t8m.Mobile;
        (p.isNotFound || !l) && (0, n.notFound)(),
          (0, N.NOh)(p.isResolved),
          (0, s.useEffect)(
            () => () => {
              p.reset();
            },
            [p],
          );
        let L = (0, s.useCallback)(
            (e) => {
              p.getAlbumsByRange(e.startIndex, e.endIndex);
            },
            [p],
          ),
          P = (0, s.useMemo)(
            () => ({
              Footer: () => (0, a.jsx)(m.$_, { className: y().footer }),
            }),
            [],
          ),
          v = p.isLoading
            ? 20
            : null !==
                  (i =
                    null === (t = p.albums) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== i
              ? i
              : 0;
        return (
          l &&
            p.isNeededToLoad &&
            (_ === C.z.EDITORIAL
              ? (0, s.use)(p.getEditorialAlbums({ id: l }))
              : (0, s.use)(p.getCategoryAlbums({ id: l }))),
          (0, a.jsx)(N.Lh6, {
            pageId: N.Rhz.NON_MUSIC_ALBUMS,
            children: (0, a.jsx)(g.I7, {
              scrollElement: E,
              outerTitle: p.title,
              children: (0, a.jsxs)("div", {
                className: y().root,
                ...(0, u.BA)(u.Br.nonMusic.NON_MUSIC_ALBUMS_PAGE),
                children: [
                  (0, a.jsx)(m.h4, {
                    variant: m.bm.TEXT,
                    withForwardControl: !1,
                    withBackwardControl: A.canBack,
                    children: (0, a.jsx)(d.Heading, {
                      id: "collection-artists-header",
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: p.title,
                    }),
                  }),
                  (0, a.jsx)(m.Wv, {
                    className: (0, o.W)(y().scrollContainer, y().important),
                    customComponents: P,
                    itemContentCallback: (e) => {
                      var t, i;
                      let o =
                          null === (i = p.albums) || void 0 === i
                            ? void 0
                            : null === (t = i[e]) || void 0 === t
                              ? void 0
                              : t.data,
                        l = b(
                          { id: "loading-messages.entity-is-loading" },
                          { entityName: b({ id: "entity-names.album" }) },
                        );
                      return o
                        ? (0, a.jsx)(
                            c.rf,
                            {
                              withLikesCount: !0,
                              album: o,
                              contentLinesCount: 3,
                            },
                            o.id,
                          )
                        : (0, a.jsx)(m.hi, { "aria-label": l }, e);
                    },
                    totalCount: v,
                    onGetDataByRange: L,
                    totalRequests: p.requestsCount,
                    listClassName: y().content,
                    itemClassName: y().item,
                    handleRef: S,
                    context: {
                      listAriaLabel: b(
                        { id: "mixes.albums-list" },
                        { genreName: p.title || "" },
                      ),
                    },
                    isMobileLayout: T,
                    useWindowScroll: T,
                  }),
                ],
              }),
            }),
          })
        );
      });
    },
    66932: function (e, t, i) {
      "use strict";
      i.d(t, {
        NonMusicCategoryNotFoundPage: function () {
          return n;
        },
      });
      var a = i(75441),
        o = i(62569),
        l = i(35551);
      let n = (0, o.Pi)(() => (0, a.jsx)(l.T, {}));
    },
    54451: function (e, t, i) {
      "use strict";
      i.d(t, {
        NonMusicCategoryPage: function () {
          return h;
        },
      });
      var a = i(75441),
        o = i(32358),
        l = i(62569),
        n = i(98730),
        s = i(65067),
        r = i(77514),
        u = i(17294),
        d = i(17392),
        c = i(30495),
        g = i(30948),
        N = i(69947),
        m = i(13534),
        C = i(97141),
        _ = i(65391),
        y = i.n(_);
      let p = {
          [r.c.ALBUM_CHART]: c.m8,
          [r.c.EDITORIAL_PLAYLISTS]: c.Rn,
          [r.c.CATEGORY]: c.j$,
        },
        h = (0, l.Pi)((e) => {
          let { id: t } = e,
            {
              nonMusic: { categorySubpage: i },
            } = (0, m.oR4)(),
            { contentScrollRef: l, setContentScrollRef: r } = (0, m.$Y6)(),
            c = (0, m.RVp)(),
            _ = (0, m.k67)();
          (!c || i.isNotFound) && (0, n.notFound)(),
            (0, s.useEffect)(() => () => i.reset(), [i]),
            (0, m.NOh)(i.isResolved);
          let h = (0, s.useMemo)(
            () =>
              i.blocks.map((e, t) => {
                let l = p[e.type];
                return (0, a.jsx)(
                  m.Ja5,
                  {
                    blockId: e.id,
                    blockType: e.type,
                    blockIdForFrom: ""
                      .concat(m.BEo.DISCOVERY_BLOCK, "-")
                      .concat(e.id),
                    blockPosX: 1,
                    blockPosY: t + 1,
                    objectsCount: e.items.length,
                    children: (0, a.jsx)(
                      l,
                      {
                        headerClassName: (0, o.W)(
                          y().carouselBlockHeader,
                          y().carouselBlock,
                        ),
                        containerClassName: y().carouselBlock,
                        type: e.landingBlockType,
                        loadingState: i.loadingState,
                        id: e.id,
                        isNotFound: i.isNotFound,
                        hasSentAnalyticsOnLoaded: !1,
                        meta: {
                          title: e.title,
                          description: e.description,
                          viewAllActionLink: e.viewAllActionLink,
                        },
                        data: { items: e.items },
                        isNeededToLoad: !1,
                        isLoading: i.isLoading,
                        isLoaded: i.isResolved,
                        isRejected: i.isRejected,
                        isShimmerVisible: i.isLoading,
                        isShimmerActive: !0,
                        isVisible: !0,
                        objectsCount: e.items.length,
                      },
                      e.id,
                    ),
                  },
                  e.id,
                );
              }),
            [
              i.blocks,
              i.loadingState,
              i.isNotFound,
              i.isLoading,
              i.isResolved,
              i.isRejected,
            ],
          );
          return (t &&
            i.isNeededToLoad &&
            (0, s.use)(i.getData({ categoryId: t })),
          i.isSomethingWrong)
            ? (0, a.jsx)(g.D, {})
            : (0, a.jsx)(m.Lh6, {
                pageId: m.Rhz.NON_MUSIC_CATEGORY,
                children: (0, a.jsxs)(N.I7, {
                  scrollElement: l,
                  outerTitle: i.title,
                  children: [
                    (0, a.jsx)(C.h4, {
                      variant: C.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: _.canBack,
                      children: (0, a.jsx)(d.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        children: i.title,
                      }),
                    }),
                    (0, a.jsxs)(u.t, {
                      className: y().root,
                      containerClassName: y().content,
                      ref: r,
                      children: [
                        (0, a.jsx)("div", {
                          className: y().carouselBlocks,
                          children: h,
                        }),
                        (0, a.jsx)(C.$_, { className: y().footer }),
                      ],
                    }),
                  ],
                }),
              });
        });
    },
    60538: function (e, t, i) {
      "use strict";
      i.d(t, {
        NonMusicCategoryPlaylistsPage: function () {
          return p;
        },
      });
      var a = i(75441),
        o = i(32358),
        l = i(62569),
        n = i(98730),
        s = i(65067),
        r = i(9317),
        u = i(35846),
        d = i(17392),
        c = i(30948),
        g = i(69947),
        N = i(7797),
        m = i(13534),
        C = i(97141),
        _ = i(67613),
        y = i.n(_);
      let p = (0, l.Pi)((e) => {
        var t, i, l;
        let { categoryId: _ } = e,
          {
            nonMusic: { categoryPlaylistsSubpage: p },
            settings: h,
          } = (0, m.oR4)(),
          b = (0, m.k67)(),
          { contentScrollRef: E, setContentScrollRef: S } = (0, m.$Y6)(),
          { formatMessage: A } = (0, r.Z)(),
          T = h.layout === m.t8m.Mobile,
          L = (0, s.useCallback)(
            (e) => {
              p.getPlaylists({ page: e, pageSize: 20 });
            },
            [p],
          );
        p.isNotFound && (0, n.notFound)(),
          (0, s.useEffect)(
            () => () => {
              p.reset();
            },
            [p],
          );
        let P = (0, s.useMemo)(
          () => ({ Footer: () => (0, a.jsx)(C.$_, { className: y().footer }) }),
          [],
        );
        if (
          ((0, m.NOh)(p.isResolved),
          p.isNeededToLoad &&
            (0, s.use)(p.getData({ categoryId: _, page: 0, pageSize: 20 })),
          p.isSomethingWrong)
        )
          return (0, a.jsx)(c.D, {});
        let v = p.isLoading
          ? 20
          : null !==
                (i =
                  null == p
                    ? void 0
                    : null === (t = p.playlists) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== i
            ? i
            : 0;
        return (0, a.jsx)(m.Lh6, {
          pageId: m.Rhz.NON_MUSIC_CATEGORY_PLAYLISTS,
          children: (0, a.jsx)(g.I7, {
            scrollElement: E,
            outerTitle: p.title,
            children: (0, a.jsxs)("div", {
              className: y().root,
              ...(0, u.BA)(u.Br.nonMusic.NON_MUSIC_CATEGORY_PLAYLISTS),
              children: [
                (0, a.jsx)(C.h4, {
                  variant: C.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: b.canBack,
                  children: (0, a.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: p.title,
                  }),
                }),
                (0, a.jsx)(C.Wv, {
                  context: {
                    listAriaLabel: A(
                      { id: "mixes.playlists-list" },
                      { genreName: p.title || "" },
                    ),
                  },
                  className: (0, o.W)(y().scrollContainer, y().important),
                  customComponents: P,
                  itemContentCallback: (e) => {
                    var t, i;
                    let o =
                        null == p
                          ? void 0
                          : null === (i = p.playlists) || void 0 === i
                            ? void 0
                            : null === (t = i[e]) || void 0 === t
                              ? void 0
                              : t.data,
                      l = A(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: A({ id: "entity-names.playlist" }) },
                      );
                    return o
                      ? (0, a.jsx)(
                          N.ZL,
                          { playlist: o, contentLinesCount: 3 },
                          o.key,
                        )
                      : (0, a.jsx)(C.hi, { isActive: !0, "aria-label": l });
                  },
                  initialItemCount: v,
                  totalCount: v,
                  onGetDataByPage: L,
                  pageSize: 20,
                  totalRequests:
                    null !== (l = p.requests) && void 0 !== l ? l : 0,
                  listClassName: y().content,
                  itemClassName: y().item,
                  handleRef: S,
                  isMobileLayout: T,
                  useWindowScroll: T,
                }),
              ],
            }),
          }),
        });
      });
    },
    76085: function (e, t, i) {
      "use strict";
      i.d(t, {
        NonMusicNotFoundPage: function () {
          return r;
        },
      });
      var a = i(75441),
        o = i(62569),
        l = i(65067),
        n = i(35551),
        s = i(13534);
      let r = (0, o.Pi)(() => {
        let { nonMusic: e } = (0, s.oR4)();
        return (
          (0, l.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, a.jsx)(n.T, {})
        );
      });
    },
    23033: function (e, t, i) {
      "use strict";
      i.d(t, {
        NonMusicPage: function () {
          return S;
        },
      });
      var a = i(75441),
        o = i(32358),
        l = i(62569),
        n = i(98730),
        s = i(65067),
        r = i(9317),
        u = i(15937),
        d = i(35846),
        c = i(36746),
        g = i(26669),
        N = i(17294),
        m = i(17392),
        C = i(30495),
        _ = i(30948),
        y = i(69947),
        p = i(13534),
        h = i(97141),
        b = i(27706),
        E = i.n(b);
      let S = (0, l.Pi)(() => {
        let { nonMusic: e, user: t } = (0, p.oR4)(),
          { formatMessage: i } = (0, r.Z)(),
          { contentScrollRef: l, setContentScrollRef: b } = (0, p.$Y6)(),
          [S, A] = (0, g.z)();
        (0, p.RVp)() || (0, n.notFound)(),
          (0, s.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, p.NOh)(e.landing.isResolved);
        let T = (0, C._B)(e.landing);
        return (
          e.landing.isNeededToLoad &&
            (0, s.use)(
              e.landing.getSkeleton(
                { id: c.j.NON_MUSIC, showWizard: t.settings.showWizard },
                { preloadBlocksCount: 2 },
              ),
            ),
          (0, a.jsx)(p.Lh6, {
            pageId: p.Rhz.NON_MUSIC,
            children: (0, a.jsxs)(y.I7, {
              scrollElement: l,
              outerTitle: i({ id: "entity-names.podcasts-and-books" }),
              headerElement: S,
              shouldHideHeader: e.landing.hasUpperBlocks,
              children: [
                (0, a.jsx)(h.h4, {
                  variant: h.bm.TEXT,
                  showControls: !1,
                  disableStickyVariant: !0,
                  children: (0, a.jsx)("div", {
                    className: E().header,
                    children: (0, a.jsx)(m.Heading, {
                      variant: "h1",
                      weight: "bold",
                      size: "xl",
                      children: (0, a.jsx)(u.Z, {
                        id: "entity-names.podcasts-and-books",
                      }),
                    }),
                  }),
                }),
                (0, a.jsxs)(N.t, {
                  className: E().root,
                  containerClassName: E().content,
                  ref: b,
                  ...(0, d.BA)(d.Br.nonMusic.NON_MUSIC_PAGE),
                  children: [
                    (0, a.jsx)("div", {
                      className: (0, o.W)(E().landing, {
                        [E().landing_onlyWizard]: T,
                      }),
                      children: (0, a.jsx)(C.Od, {
                        landing: e.landing,
                        headerConcealerComponent: (0, a.jsx)("div", { ref: A }),
                        errorComponent: (0, a.jsx)(_.D, {
                          className: E().error,
                          withBackwardControl: !1,
                        }),
                      }),
                    }),
                    (0, a.jsx)(h.$_, { className: E().footer }),
                  ],
                }),
              ],
            }),
          })
        );
      });
    },
    52607: function (e) {
      e.exports = {
        root: "NonMusicAlbumsPage_root__jlDXa",
        scrollContainer: "NonMusicAlbumsPage_scrollContainer__XNRsu",
        important: "NonMusicAlbumsPage_important__Rk8LT",
        footer: "NonMusicAlbumsPage_footer__LJCIL",
        item: "NonMusicAlbumsPage_item__YArCS",
        content: "NonMusicAlbumsPage_content__phVa7",
      };
    },
    65391: function (e) {
      e.exports = {
        root: "NonMusicCategoryPage_root__GYeXL",
        content: "NonMusicCategoryPage_content__LJFnm",
        carouselBlocks: "NonMusicCategoryPage_carouselBlocks___BPJ_",
        carouselBlock: "NonMusicCategoryPage_carouselBlock__t41do",
        carouselBlockHeader: "NonMusicCategoryPage_carouselBlockHeader__1uIfL",
        footer: "NonMusicCategoryPage_footer__56hvJ",
      };
    },
    67613: function (e) {
      e.exports = {
        root: "NonMusicCategoryPlaylistsPage_root__NvUH8",
        scrollContainer: "NonMusicCategoryPlaylistsPage_scrollContainer__uUyGe",
        important: "NonMusicCategoryPlaylistsPage_important__YBsHf",
        footer: "NonMusicCategoryPlaylistsPage_footer__TtkEO",
        item: "NonMusicCategoryPlaylistsPage_item__4YasT",
        content: "NonMusicCategoryPlaylistsPage_content__GZb1j",
      };
    },
    27706: function (e) {
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
    77514: function (e, t, i) {
      "use strict";
      var a, o, l, n;
      i.d(t, {
        c: function () {
          return o;
        },
        f: function () {
          return a;
        },
      }),
        ((l = a || (a = {})).ALBUM = "album"),
        (l.PLAYLIST = "playlist"),
        (l.ALBUM_CHART_ITEM = "album-chart-item"),
        (l.BOOKMATE_BANNER_ENTITY = "bookmate-banner-entity"),
        ((n = o || (o = {})).ALBUM_CHART = "album-chart"),
        (n.EDITORIAL_PLAYLISTS = "editorial-playlists"),
        (n.CATEGORY = "category"),
        (n.BOOKMATE_BANNER = "bookmate-banner");
    },
  },
]);
